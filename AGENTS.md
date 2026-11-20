# Architecture
- Keep backup audience offers, service areas and FAQ content in `src/lib/datensicherung.ts`; the page, structured data and rule tests share one source to avoid contradictory offers.
- Add pages through the shared route registry and router-independent App with Helmet metadata; keep public indexable entries in the sitemap and shared footer so navigation and build-time prerendering stay aligned.
- Prerender with the Vite closeBundle plugin and the same App under StaticRouter; hydrate it under BrowserRouter to preserve identical markup without a runtime server.
- Preserve client-build asset filenames and Helmet-owned metadata in static output; fail on incomplete page metadata to avoid deploying empty crawler pages.
- Keep external destinations in the shared externalRedirects map; use location.replace in the client and static refresh documents in prerendering so external redirects also work without JavaScript.