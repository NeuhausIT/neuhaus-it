import { Download, Shield, Lock } from "lucide-react";
import Footer from "@/components/Footer";
import SubpageHero from "@/components/SubpageHero";
import BackToHomeButton from "@/components/BackToHomeButton";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Helmet } from "react-helmet";

const Fernwartung = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Fernwartung mit RustDesk | Neuhaus-IT</title>
        <meta
          name="description"
          content="Sichere Fernwartung über eigenen RustDesk-Server. Keine kommerziellen Anbieter, volle Kontrolle über Ihre Daten."
        />
      </Helmet>

      <BackToHomeButton />

      <SubpageHero
        title="Fernwartung mit RustDesk"
        description="Sichere Remote-Unterstützung über unseren eigenen Server – ohne Umwege über kommerzielle Anbieter."
        icon={<Shield className="w-16 h-16 text-primary" />}
      />

      <main className="container mx-auto px-4 py-16 max-w-6xl">
        {/* Node-Typen */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Support- vs. Managed-Nodes</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Support-Nodes */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Badge variant="default" className="text-base">
                    Support-Nodes
                  </Badge>
                </CardTitle>
                <CardDescription>Für gelegentliche Hilfestellungen</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Support-Nodes erlauben den Verbindungsaufbau{" "}
                  <strong className="text-foreground">nur nach ausdrücklicher Zustimmung</strong> der Nutzenden.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">✓</span>
                    <span>Sie behalten jederzeit die volle Kontrolle</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">✓</span>
                    <span>Verbindung nur bei aktiver Freigabe</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">✓</span>
                    <span>Ideal für spontane Support-Anfragen</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Managed-Nodes */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Badge variant="default" className="text-base">
                    Managed-Nodes
                  </Badge>
                </CardTitle>
                <CardDescription>Für regelmäßige Wartungsarbeiten</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Managed-Nodes erlauben den Verbindungsaufbau{" "}
                  <strong className="text-foreground">zusätzlich in Ihrer Abwesenheit</strong> für Wartungsarbeiten über
                  ein vordefiniertes Passwort.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">✓</span>
                    <span>Wartung außerhalb der Geschäftszeiten möglich</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">✓</span>
                    <span>Unbeaufsichtigter Zugriff mit Passwort</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">✓</span>
                    <span>Ideal für Managed-Server und Workstations</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Download-Matrix */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <Download className="w-8 h-8 text-primary" />
            <h2 className="text-3xl font-bold">Node-Downloads</h2>
          </div>

          <Card>
            <CardContent className="pt-6">
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[150px]">Betriebssystem</TableHead>
                      <TableHead className="text-center">Support-Nodes</TableHead>
                      <TableHead className="text-center">Managed-Nodes</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {/* Windows */}
                    <TableRow>
                      <TableCell className="font-medium">Windows</TableCell>
                      <TableCell className="text-center">
                        <Button variant="outline" size="sm" asChild>
                          <a href="https://downloads.neuhaus-it.de/neuhaus-it-support.msi" download>
                            Download
                          </a>
                        </Button>
                      </TableCell>
                      <TableCell className="text-center">
                        <Button variant="outline" size="sm" asChild>
                          <a href="https://downloads.neuhaus-it.de/neuhaus-it-wartung.msi" download>
                            Download
                          </a>
                        </Button>
                      </TableCell>
                    </TableRow>

                    {/* macOS */}
                    <TableRow>
                      <TableCell className="font-medium">macOS (arm64)</TableCell>
                      <TableCell className="text-center">
                        <Button variant="outline" size="sm" asChild>
                          <a
                            href="https://rustdesk.neuhaus-it.de/nodes/support/rustdesk-support-macos-arm64.dmg"
                            download
                          >
                            Download
                          </a>
                        </Button>
                      </TableCell>
                      <TableCell className="text-center">
                        <Button variant="outline" size="sm" asChild>
                          <a
                            href="https://rustdesk.neuhaus-it.de/nodes/managed/rustdesk-managed-macos-arm64.dmg"
                            download
                          >
                            Download
                          </a>
                        </Button>
                      </TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell className="font-medium">macOS (x64)</TableCell>
                      <TableCell className="text-center">
                        <Button variant="outline" size="sm" asChild>
                          <a
                            href="https://rustdesk.neuhaus-it.de/nodes/support/rustdesk-support-macos-x64.dmg"
                            download
                          >
                            Download
                          </a>
                        </Button>
                      </TableCell>
                      <TableCell className="text-center">
                        <Button variant="outline" size="sm" asChild>
                          <a
                            href="https://rustdesk.neuhaus-it.de/nodes/managed/rustdesk-managed-macos-x64.dmg"
                            download
                          >
                            Download
                          </a>
                        </Button>
                      </TableCell>
                    </TableRow>

                    {/* Linux */}
                    <TableRow>
                      <TableCell className="font-medium">Linux (arm64)</TableCell>
                      <TableCell className="text-center">
                        <Button variant="outline" size="sm" asChild>
                          <a
                            href="https://rustdesk.neuhaus-it.de/nodes/support/rustdesk-support-linux-arm64.deb"
                            download
                          >
                            Download
                          </a>
                        </Button>
                      </TableCell>
                      <TableCell className="text-center">
                        <Button variant="outline" size="sm" asChild>
                          <a
                            href="https://rustdesk.neuhaus-it.de/nodes/managed/rustdesk-managed-linux-arm64.deb"
                            download
                          >
                            Download
                          </a>
                        </Button>
                      </TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell className="font-medium">Linux (x64)</TableCell>
                      <TableCell className="text-center">
                        <Button variant="outline" size="sm" asChild>
                          <a
                            href="https://rustdesk.neuhaus-it.de/nodes/support/rustdesk-support-linux-x64.deb"
                            download
                          >
                            Download
                          </a>
                        </Button>
                      </TableCell>
                      <TableCell className="text-center">
                        <Button variant="outline" size="sm" asChild>
                          <a
                            href="https://rustdesk.neuhaus-it.de/nodes/managed/rustdesk-managed-linux-x64.deb"
                            download
                          >
                            Download
                          </a>
                        </Button>
                      </TableCell>
                    </TableRow>

                    {/* Android */}
                    <TableRow>
                      <TableCell className="font-medium">Android</TableCell>
                      <TableCell className="text-center">
                        <Button variant="outline" size="sm" asChild>
                          <a
                            href="https://rustdesk.neuhaus-it.de/nodes/support/rustdesk-support-android.apk"
                            download
                          >
                            Download
                          </a>
                        </Button>
                      </TableCell>
                      <TableCell className="text-center">
                        <Button variant="outline" size="sm" asChild>
                          <a
                            href="https://rustdesk.neuhaus-it.de/nodes/managed/rustdesk-managed-android.apk"
                            download
                          >
                            Download
                          </a>
                        </Button>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>

              <div className="mt-6 p-4 bg-muted rounded-lg">
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">Hinweis:</strong> Wählen Sie die passende Architektur für Ihr
                  System:
                  <br />• <strong>arm64</strong>: Für Apple Silicon Macs (M1, M2, M3) und moderne ARM-basierte Geräte
                  <br />• <strong>x64</strong>: Für Intel/AMD-basierte Systeme
                </p>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>

      {/* Datenschutz und Sicherheit */}
      <section className="bg-muted py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lock className="w-6 h-6 text-primary" />
                Datenschutz und Sicherheit
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                Für die Fernwartung setze ich auf <strong className="text-foreground">RustDesk</strong> – eine
                Open-Source-Lösung, die maximale Sicherheit und Kontrolle bietet.
              </p>
              <p>
                Im Gegensatz zu kommerziellen Lösungen wie TeamViewer oder AnyDesk werden die Verbindungen
                <strong className="text-foreground">
                  {" "}
                  nicht über zentralisierte Server kommerzieller Anbieter
                </strong>{" "}
                vermittelt, sondern über einen <strong className="text-foreground">eigenen RustDesk-Server</strong>, den
                ich selbst verwalte.
              </p>
              <p>Dies garantiert Ihnen:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Vollständige Kontrolle über Ihre Daten</li>
                <li>Keine Weitergabe an Dritte</li>
                <li>DSGVO-konforme Verarbeitung</li>
                <li>Maximale Transparenz durch Open Source</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Fernwartung;
