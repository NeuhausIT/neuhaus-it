import { test } from "node:test";
import { strict as assert } from "node:assert";
import { redirectHtml } from "./prerender-html";
import { externalRedirects } from "../src/lib/routes";

test("Uploads leitet ohne JavaScript auf die externe Nextcloud weiter", () => {
  const target = externalRedirects["/uploads"];
  const html = redirectHtml(target);
  assert.ok(html.includes(`<meta http-equiv="refresh" content="0; url=${target}">`));
  assert.ok(html.includes(`<link rel="canonical" href="${target}">`));
  assert.ok(html.includes('<meta name="robots" content="noindex, follow">'));
  assert.ok(!html.includes("https://neuhaus-it.dehttps://"));
});

test("Interne Weiterleitungen behalten ihre Neuhaus-IT-Canonical", () => {
  assert.ok(redirectHtml("/terminbuchungen").includes('href="https://neuhaus-it.de/terminbuchungen"'));
});