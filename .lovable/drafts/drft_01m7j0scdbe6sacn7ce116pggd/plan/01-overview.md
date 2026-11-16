# Statisches Vorrendern für Neuhaus-IT

Beim normalen `vite build` entstehen 14 vollständige HTML-Seiten und drei statische Weiterleitungen. Inhalte, Gestaltung und bestehende Kontakt-/Terminaktionen bleiben unverändert. Es wird kein Server benötigt und nichts veröffentlicht.

- Jede Inhaltsseite enthält bereits ohne JavaScript ihre Überschrift, Inhalte und ihre bisherigen Helmet-Metadaten einschließlich vorhandener JSON-LD-Daten.
- Fehlende Metadaten ergänzen, insbesondere im Kundenbereich; bestehende noindex-Vorgaben erhalten.
- `/termine` und `/termin` leiten auf `/terminbuchungen`, `/serveradministration` auf `/managed-nodes` weiter: sowohl in React als auch über statische Refresh-Seiten mit Ziel-Canonical.
- Sitemap auf genau die elf genannten indexierbaren Seiten begrenzen. Das ausdrücklich vorgegebene Änderungsdatum **2026-11-16** fest eintragen, nicht aus Build-Zeit oder aktuellem Datum ableiten.
- Den bestehenden Sitemap-Verweis in robots.txt erhalten; llms.txt mit Kurzbeschreibung und den elf öffentlichen Seiten ergänzen.
