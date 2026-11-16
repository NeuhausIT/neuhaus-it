import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { HelmetProvider, type HelmetServerState } from "react-helmet-async";
import App from "./App";
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
  return { html, head };
}