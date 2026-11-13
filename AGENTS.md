# Architecture
- Keep backup audience offers, service areas and FAQ content in `src/lib/datensicherung.ts`; the page, structured data and rule tests share one source to avoid contradictory offers.
- Add public static pages through the existing React router and Helmet metadata, with a sitemap entry and shared footer link, to preserve the site's navigation and SEO conventions.