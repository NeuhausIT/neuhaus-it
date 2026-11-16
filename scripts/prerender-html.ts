import { canonicalUrl } from "../src/lib/routes";

export function redirectHtml(target: string) {
  return `<!doctype html><html lang="de"><head><meta charset="UTF-8"><title>Weiterleitung | Neuhaus-IT</title><meta name="robots" content="noindex, follow"><meta http-equiv="refresh" content="0; url=${target}"><link rel="canonical" href="${canonicalUrl(target)}"></head><body><a href="${target}">Weiter zur Seite</a></body></html>`;
}

export function prerenderHtml(template: string, rendered: { html: string; head: string }) {
  // Helmet owns route metadata; retain only the template's site-wide tags and assets.
  const cleaned = template.replace(/<head>([\s\S]*?)<\/head>/i, (_, head: string) => {
    const fixed = head.replace(/<title\b[^>]*>[\s\S]*?<\/title>/gi, "")
      .replace(/<meta\b[^>]*>/gi, tag => {
        const key = tag.match(/(?:name|property)=["']([^"']+)["']/i)?.[1];
        return key && /^(description|robots|og:|twitter:)/i.test(key) ? "" : tag;
      })
      .replace(/<link\b[^>]*rel=["']canonical["'][^>]*>/gi, "");
    return `<head>${fixed}${rendered.head}</head>`;
  });
  if (!/<div id="root"><\/div>/.test(cleaned)) throw new Error("Missing empty #root in build template");
  return cleaned.replace('<div id="root"></div>', () => `<div id="root">${rendered.html}</div>`);
}