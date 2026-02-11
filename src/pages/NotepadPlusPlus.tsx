import { Helmet } from "react-helmet";
import { ShieldAlert, Terminal, Copy, Check, ExternalLink } from "lucide-react";
import SubpageHero from "@/components/SubpageHero";
import Footer from "@/components/Footer";
import BackToHomeButton from "@/components/BackToHomeButton";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const checks = [
  {
    title: "Verstecktes Bluetooth-Verzeichnis in %APPDATA%",
    description: "Prüft, ob ein verdächtiges verstecktes Bluetooth-Verzeichnis existiert – stärkster Einzelindikator.",
    command: `dir "%APPDATA%\\Bluetooth" /a:h`,
    severity: "critical" as const,
  },
  {
    title: "Spezifische Malware-Dateien",
    description: "Sucht nach BluetoothService.exe, BluetoothService und log.dll im Bluetooth-Verzeichnis.",
    command: `dir "%APPDATA%\\Bluetooth\\BluetoothService.exe" "%APPDATA%\\Bluetooth\\BluetoothService" "%APPDATA%\\Bluetooth\\log.dll" 2>nul`,
    severity: "critical" as const,
  },
  {
    title: "Zweiter Staging-Pfad (USOShared)",
    description: "Prüft einen alternativen Staging-Pfad unter ProgramData.",
    command: `dir "C:\\ProgramData\\USOShared\\conf.c" "C:\\ProgramData\\USOShared\\libtcc.dll" "C:\\ProgramData\\USOShared\\svchost.exe" 2>nul`,
    severity: "high" as const,
  },
  {
    title: "DNS-Cache nach C2-Domains",
    description: "Durchsucht den DNS-Cache nach bekannten Command-and-Control-Domains.",
    command: `ipconfig /displaydns | findstr /i "skycloudcenter wiresguard"`,
    severity: "high" as const,
  },
  {
    title: "Aktive Verbindungen zu C2-IPs",
    description: "Prüft aktive Netzwerkverbindungen zu bekannten C2-IP-Adressen.",
    command: `netstat -ano | findstr "95.179.213.0 61.4.102.97 59.110.7.32 124.222.137.114"`,
    severity: "high" as const,
  },
  {
    title: "Registry-Run-Keys (HKCU)",
    description: "Durchsucht die Benutzer-Registry nach Bluetooth-Persistenz-Einträgen.",
    command: `reg query "HKCU\\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\Run" /s | findstr /i "Bluetooth"`,
    severity: "medium" as const,
  },
  {
    title: "Registry-Run-Keys (HKLM)",
    description: "Durchsucht die System-Registry nach Bluetooth-Persistenz-Einträgen.",
    command: `reg query "HKLM\\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\Run" /s | findstr /i "Bluetooth"`,
    severity: "medium" as const,
  },
];

const severityColors = {
  critical: "border-red-500/50 bg-red-500/5",
  high: "border-orange-500/50 bg-orange-500/5",
  medium: "border-yellow-500/50 bg-yellow-500/5",
};

const severityLabels = {
  critical: "Kritisch",
  high: "Hoch",
  medium: "Mittel",
};

const severityBadgeColors = {
  critical: "bg-red-500/15 text-red-700 dark:text-red-400",
  high: "bg-orange-500/15 text-orange-700 dark:text-orange-400",
  medium: "bg-yellow-500/15 text-yellow-700 dark:text-yellow-400",
};

const CopyButton = ({ text }: { text: string }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={handleCopy}
      className="gap-1.5 text-xs"
    >
      {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
      {copied ? "Kopiert" : "Kopieren"}
    </Button>
  );
};

const NotepadPlusPlus = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Notepad++ Security Check - Neuhaus-IT</title>
        <meta
          name="description"
          content="Schnelle CMD-Prüfungen zum Notepad++ Security Incident (Chrysalis Backdoor / Lotus Blossom). Indicators of Compromise einfach vor Ort prüfen."
        />
      </Helmet>

      <SubpageHero
        title="Notepad++ Security Check"
        description="Schnelle CMD-Prüfungen zum Notepad++ Security Incident – basierend auf den Indicators of Compromise der Chrysalis-Backdoor-Analyse."
        icon={<ShieldAlert className="w-16 h-16 text-destructive" />}
        showActionButton={false}
      >
        <div className="flex flex-wrap gap-3 justify-center">
          <Button asChild variant="outline" size="lg" className="gap-2">
            <a
              href="https://notepad-plus-plus.org/news/clarification-security-incident/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink className="w-4 h-4" />
              Notepad++ Statement
            </a>
          </Button>
          <Button asChild variant="outline" size="lg" className="gap-2">
            <a
              href="https://www.rapid7.com/blog/post/tr-chrysalis-backdoor-dive-into-lotus-blossoms-toolkit/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink className="w-4 h-4" />
              Rapid7 IoC-Analyse
            </a>
          </Button>
        </div>
      </SubpageHero>

      <section className="py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="mb-8 p-4 rounded-lg border border-primary/20 bg-primary/5">
            <p className="text-sm text-muted-foreground">
              <strong className="text-foreground">Anleitung:</strong> Öffnen Sie eine Eingabeaufforderung (CMD) als Administrator und führen Sie die folgenden Befehle nacheinander aus. Wenn bei einem Befehl etwas zurückkommt (statt „Datei nicht gefunden" oder leerer Ausgabe), ist eine tiefere Analyse empfehlenswert.
            </p>
          </div>

          <div className="space-y-4">
            {checks.map((check, index) => (
              <Card key={index} className={severityColors[check.severity]}>
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-1">
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Terminal className="w-4 h-4 shrink-0" />
                        {check.title}
                      </CardTitle>
                      <CardDescription>{check.description}</CardDescription>
                    </div>
                    <span className={`text-xs font-medium px-2 py-1 rounded-full shrink-0 ${severityBadgeColors[check.severity]}`}>
                      {severityLabels[check.severity]}
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="relative">
                    <pre className="bg-muted/80 rounded-md p-3 pr-24 overflow-x-auto text-sm font-mono">
                      <code>{check.command}</code>
                    </pre>
                    <div className="absolute top-1.5 right-1.5">
                      <CopyButton text={check.command} />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-10 p-4 rounded-lg border border-destructive/30 bg-destructive/5">
            <p className="text-sm text-muted-foreground">
              <strong className="text-destructive">Wichtig:</strong> Der stärkste Einzelindikator ist das versteckte{" "}
              <code className="bg-muted px-1 rounded text-xs">%APPDATA%\Bluetooth</code>-Verzeichnis mit{" "}
              <code className="bg-muted px-1 rounded text-xs">BluetoothService.exe</code> und{" "}
              <code className="bg-muted px-1 rounded text-xs">log.dll</code> darin. Bei Fund: System isolieren und professionelle Analyse einleiten.
            </p>
          </div>
        </div>
      </section>

      <Footer />
      <BackToHomeButton />
    </div>
  );
};

export default NotepadPlusPlus;
