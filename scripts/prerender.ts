import { mkdir, readFile, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import { pathToFileURL } from "node:url";
import { build, type Plugin, type ResolvedConfig } from "vite";
import { prerenderHtml, redirectHtml } from "./prerender-html";

export function prerender(): Plugin {
  let config: ResolvedConfig;
  return {
    name: "neuhaus-static-prerender",
    apply: "build",
    configResolved(resolved) { config = resolved; },
    async closeBundle() {
      if (config.build.ssr) return;
      const output = path.resolve(config.root, config.build.outDir);
      const temporary = path.join(output, ".prerender");
      const template = await readFile(path.join(output, "index.html"), "utf8");
      try {
        await build({
          configFile: false,
          root: config.root,
          mode: config.mode,
          base: config.base,
          publicDir: false,
          logLevel: "warn",
          resolve: { alias: config.resolve.alias },
          define: { "process.env.NODE_ENV": JSON.stringify("production") },
          esbuild: { jsx: "automatic" },
          build: {
            ssr: path.join(config.root, "src/entry-server.tsx"),
            outDir: temporary,
            emptyOutDir: true,
            assetsInlineLimit: config.build.assetsInlineLimit,
            rollupOptions: { output: { entryFileNames: "entry-server.mjs", assetFileNames: `${config.build.assetsDir}/[name]-[hash][extname]` } },
          },
        });
        const server = await import(/* @vite-ignore */ pathToFileURL(path.join(temporary, "entry-server.mjs")).href);
        // Render everything before overwriting the template; fail the build rather than emit empty pages.
        const pages = server.contentRoutes.map((route: string) => ({ route, document: prerenderHtml(template, server.render(route)) }));
        const titles = pages.map(({ document }: { document: string }) => document.match(/<title[^>]*>(.*?)<\/title>/)?.[1]);
        if (titles.some((title: string | undefined) => !title) || new Set(titles).size !== pages.length) {
          throw new Error("Prerendered pages require unique, nonempty titles");
        }
        for (const { route, document } of pages) {
          const directory = route === "/" ? output : path.join(output, route.slice(1));
          await mkdir(directory, { recursive: true });
          await writeFile(path.join(directory, "index.html"), document);
        }
        const allRedirects = { ...server.redirects, ...server.externalRedirects };
        for (const [route, target] of Object.entries(allRedirects)) {
          const directory = path.join(output, route.slice(1));
          await mkdir(directory, { recursive: true });
          await writeFile(path.join(directory, "index.html"), redirectHtml(String(target)));
        }
        config.logger.info(`Prerendered ${pages.length} pages and ${Object.keys(allRedirects).length} redirects.`);
      } finally {
        await rm(temporary, { recursive: true, force: true });
      }
    },
  };
}