export const siteOrigin = "https://neuhaus-it.de";

export const contentRoutes = [
  "/", "/terminbuchungen", "/preise", "/datensicherung",
  "/kontakt-und-impressum", "/managed-nodes", "/fernwartung", "/leitbild",
  "/geschaeftsmodell-und-differenzierung", "/managed-it-services-msp-monitoring",
  "/signal", "/tresor", "/notepadplusplus", "/kunden/zahnarzt-am-markt",
] as const;

export type ContentRoute = typeof contentRoutes[number];

export const redirects = {
  "/termine": "/terminbuchungen",
  "/termin": "/terminbuchungen",
  "/serveradministration": "/managed-nodes",
} as const;

export const noindexRoutes: readonly ContentRoute[] = [
  "/geschaeftsmodell-und-differenzierung", "/tresor", "/kunden/zahnarzt-am-markt",
];

export const indexableRoutes = contentRoutes.filter(route => !noindexRoutes.includes(route));

export function canonicalUrl(route: string) {
  return `${siteOrigin}${route === "/" ? "/" : route.replace(/\/+$/, "")}`;
}