## Technische Umsetzung

- Router-unabhängigen App-Inhalt und gemeinsame Routendefinitionen aus der bestehenden App herauslösen. BrowserRouter im Client, StaticRouter für das Vorrendern; dieselbe Komponentenstruktur für identisches HTML.
- Eigenes Vite-Plugin mit `closeBundle`: einen temporären SSR-Einstieg mit Vite bündeln, `renderToString` und die Server-Ausgabe von react-helmet-async verwenden, anschließend in die gebaute HTML-Vorlage einsetzen. Temporäre SSR-Dateien wieder entfernen; keine zusätzliche Laufzeit oder Browserinstallation beim Build.
- Asset-URLs aus dem Client-Build wiederverwenden, damit Bilder auf allen Unterseiten korrekt bleiben. Vorhandene statische Head-Fallbacks mit Helmet-Ausgabe zusammenführen, ohne doppelte Tags.
- `hydrateRoot` für vorhandenes HTML, sonst `createRoot`. Browserabhängige Aktionen und Effekte bleiben im Client; keine externen Termin-/Formulardienste während des Vorrenderns aufrufen.
- Kleine Tests für Routenzuordnung, Weiterleitungsziele, Canonical-Regeln, noindex-Auswahl und Sitemap-Abgrenzung.

## Prüfung

Den automatisch ausgeführten Produktions-Build und seine Ausgabedateien prüfen, insbesondere Startseite, Preise und Terminbuchungen. Alle erzeugten Seiten auf eindeutige Titel, Metadaten und vollständigen Inhalt kontrollieren. Statische Ausgabe ohne JavaScript sowie Hydration, Navigation, Kontaktmenü und Terminaktionen im Browser prüfen; Konsole auf Fehler kontrollieren. Sollte die Produktionsausgabe in der Vorschau nicht zugänglich sein, diese Grenze ausdrücklich benennen.
