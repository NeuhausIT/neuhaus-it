export const siteOrigin = "https://neuhaus-it.de";

export const contentRoutes = [
  "/", "/terminbuchungen", "/preise", "/datensicherung",
  "/kontakt-und-impressum", "/managed-nodes", "/fernwartung", "/leitbild",
  "/geschaeftsmodell-und-differenzierung", "/managed-it-services-msp-monitoring",
  "/signal", "/tresor", "/notepadplusplus", "/kunden/zahnarzt-am-markt", "/upload",
  "/souveraenitaets-check",
] as const;

export type ContentRoute = typeof contentRoutes[number];

export const redirects = {
  "/termine": "/terminbuchungen",
  "/termin": "/terminbuchungen",
  "/serveradministration": "/managed-nodes",
  "/check": "/souveraenitaets-check?utm_source=rollup&utm_campaign=digital-sicher-nrw",
} as const;

export const externalRedirects = {
  "/uploads": "https://cloud.neuhaus-it.de/s/4cqZBMrHDXwGKSj",
} as const;

export const noindexRoutes: readonly ContentRoute[] = [
  "/geschaeftsmodell-und-differenzierung", "/tresor", "/kunden/zahnarzt-am-markt", "/upload", "/souveraenitaets-check",
];

export const indexableRoutes = contentRoutes.filter(route => !noindexRoutes.includes(route));

export function canonicalUrl(route: string) {
  route = route.split(/[?#]/)[0];
  return `${siteOrigin}${route === "/" ? "/" : route.replace(/\/+$/, "")}`;
}