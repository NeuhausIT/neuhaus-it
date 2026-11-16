/// <reference types="node" />
import { describe, test } from "node:test";
import { strict as assert } from "node:assert";
import { readFileSync } from "node:fs";
import { canonicalUrl, contentRoutes, redirects, noindexRoutes, indexableRoutes } from "./routes";

describe("Statische Routen und Suchmaschinenregeln", () => {
  test("Alle 14 Inhaltsrouten sind eindeutig registriert", () => {
    assert.deepEqual([...contentRoutes].sort(), ["/", "/terminbuchungen", "/preise", "/datensicherung", "/kontakt-und-impressum", "/managed-nodes", "/fernwartung", "/leitbild", "/geschaeftsmodell-und-differenzierung", "/managed-it-services-msp-monitoring", "/signal", "/tresor", "/notepadplusplus", "/kunden/zahnarzt-am-markt"].sort());
    assert.equal(new Set(contentRoutes).size, 14);
  });
  test("Beide Termin-Aliase leiten auf Terminbuchungen", () => {
    assert.equal(redirects["/termine"], "/terminbuchungen");
    assert.equal(redirects["/termin"], "/terminbuchungen");
  });
  test("Legacy-Serveradministration leitet auf Managed Nodes", () => {
    assert.equal(redirects["/serveradministration"], "/managed-nodes");
  });
  test("Canonical der Startseite endet mit Slash", () => {
    assert.equal(canonicalUrl("/"), "https://neuhaus-it.de/");
  });
  test("Canonical von Unterseiten hat keinen abschließenden Slash", () => {
    assert.equal(canonicalUrl("/preise/"), "https://neuhaus-it.de/preise");
    assert.equal(canonicalUrl("/kunden/zahnarzt-am-markt"), "https://neuhaus-it.de/kunden/zahnarzt-am-markt");
  });
  test("Genau die drei vorgegebenen Seiten sind noindex", () => {
    assert.deepEqual([...noindexRoutes].sort(), ["/geschaeftsmodell-und-differenzierung", "/tresor", "/kunden/zahnarzt-am-markt"].sort());
  });
  test("Sitemap enthält genau elf öffentliche Inhaltsseiten", () => {
    const sitemap = readFileSync(new URL("../../public/sitemap.xml", import.meta.url), "utf8");
    const urls = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(match => match[1]);
    assert.deepEqual(urls.sort(), indexableRoutes.map(canonicalUrl).sort());
    assert.equal(urls.length, 11);
  });
  test("Sitemap verwendet ausschließlich das fest vorgegebene Änderungsdatum", () => {
    const sitemap = readFileSync(new URL("../../public/sitemap.xml", import.meta.url), "utf8");
    const dates = [...sitemap.matchAll(/<lastmod>(.*?)<\/lastmod>/g)].map(match => match[1]);
    assert.equal(dates.length, 11);
    assert.ok(dates.every(date => date === "2026-11-16"));
  });
  test("KI-Seitenliste enthält weder noindex-Seiten noch Weiterleitungen", () => {
    const llms = readFileSync(new URL("../../public/llms.txt", import.meta.url), "utf8");
    const links = [...llms.matchAll(/\]\((\/[^)]*)\)/g)].map(match => match[1]);
    assert.deepEqual(links.sort(), [...indexableRoutes].sort());
  });
});
