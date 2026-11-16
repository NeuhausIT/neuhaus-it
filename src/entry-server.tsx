import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server.js";
import { HelmetProvider, type HelmetServerState } from "react-helmet-async";
import App from "./App";
import { canonicalUrl, noindexRoutes } from "./lib/routes";
export { contentRoutes, redirects } from "./lib/routes";

export function render(route: string) {
  const context: { helmet?: HelmetServerState | null } = {};
  const html = renderToString(
    <HelmetProvider context={context}>
      <StaticRouter location={route}><App /></StaticRouter>
    </HelmetProvider>,
  );
  const helmet = context.helmet;
  if (!helmet) throw new Error(`No Helmet metadata for ${route}`);
  const head = [helmet.title, helmet.meta, helmet.link, helmet.script, helmet.style, helmet.noscript]
    .map(tag => tag.toString()).join("");
  if (!head.includes('name="description"') || !head.includes('rel="canonical"')) {
    throw new Error(`Incomplete metadata for ${route}`);
  }
  if (!head.includes(`href="${canonicalUrl(route)}"`) || !head.includes(`content="${canonicalUrl(route)}"`)) {
    throw new Error(`Incorrect canonical or og:url for ${route}`);
  }
  if (!head.includes('property="og:title"') || !head.includes('property="og:description"')) {
    throw new Error(`Missing Open Graph metadata for ${route}`);
  }
  if (noindexRoutes.some(path => path === route) && !/name="robots"[^>]*content="noindex/.test(head)) {
    throw new Error(`Missing noindex for ${route}`);
  }
  if (!/<h1[\s>]/.test(html)) throw new Error(`Missing page content for ${route}`);
  return { html, head };
}