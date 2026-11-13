export const backupCheck = {
  durationMinutes: 30,
  price: 0,
  formats: ["vor Ort", "per Video"],
  bookingUrl: "https://neuhaus-it.de/terminbuchungen",
  telephone: "+4923054459886",
};

export const backupPackages = [
  {
    name: "Basis",
    price: "[PREIS]",
    billing: "einmalig",
    recommended: false,
    maxWorkplaces: 5,
    items: ["Einrichtung eines 3-2-1-Backups", "Für bis zu 5 Arbeitsplätze", "Einmalige Einrichtung"],
    testIntervalMonths: null,
    reviewIntervalMonths: null,
  },
  {
    name: "Betreut",
    price: "[PREIS]",
    billing: "Einrichtung + monatliche Betreuung",
    recommended: true,
    maxWorkplaces: null,
    items: ["Einrichtung des Backups", "Monatliche Überwachung", "Vierteljährlicher Wiederherstellungstest"],
    testIntervalMonths: 3,
    reviewIntervalMonths: null,
  },
  {
    name: "Komplett",
    price: "[PREIS]",
    billing: "Einrichtung + laufende Betreuung",
    recommended: false,
    maxWorkplaces: null,
    items: ["Alle Leistungen aus Betreut", "Zusätzlich Server und NAS", "Notfallplan für Ihr Unternehmen", "Jährliche Überprüfung des Konzepts"],
    testIntervalMonths: 3,
    reviewIntervalMonths: 12,
  },
];

export const backupFaq = [
  {
    question: "Reicht eine externe Festplatte nicht aus?",
    answer: "Eine externe Festplatte ist ein guter Anfang, aber als einzige Sicherung nicht ausreichend. Sie kann ebenfalls ausfallen oder mit dem Computer beschädigt werden. Eine zusätzliche Kopie außer Haus und eine getrennte oder unveränderbare Sicherung machen Ihr Backup belastbarer.",
  },
  {
    question: "Ist eine Cloud wie OneDrive oder Dropbox schon ein Backup?",
    answer: "Eine synchronisierte Cloud hält Dateien auf mehreren Geräten aktuell, ist aber nicht automatisch eine unabhängige Sicherung. Löschungen und verschlüsselte Dateien können ebenfalls übertragen werden. Versionsverläufe helfen, ersetzen jedoch kein geprüftes Backup mit festgelegter Aufbewahrung.",
  },
  {
    question: "Wo liegen meine Daten und wer hat Zugriff?",
    answer: "Die lokale Sicherung liegt auf Ihrem NAS oder Backup-Server; die zusätzliche Kopie liegt verschlüsselt in einem Rechenzentrum in Deutschland. Die Daten werden vor der Übertragung verschlüsselt, der Schlüssel bleibt bei Ihnen. Zugriffsrechte und eine sichere Aufbewahrung des Schlüssels vereinbare ich mit Ihnen.",
  },
  {
    question: "Was passiert bei einem Verschlüsselungstrojaner?",
    answer: "Zunächst werden betroffene Systeme vom Netzwerk getrennt und der Angriff eingegrenzt. Danach lassen sich Daten aus einer sauberen Sicherung auf bereinigte Systeme zurückspielen. Eine offline gehaltene oder unveränderbare Kopie schützt davor, dass der Trojaner auch das Backup verändert.",
  },
  {
    question: "Wie oft wird gesichert und wie lange werden Sicherungen aufbewahrt?",
    answer: "Das hängt davon ab, wie häufig sich Ihre Daten ändern und wie viel Datenverlust vertretbar wäre. Im Backup-Check lege ich mit Ihnen Sicherungsintervalle und Aufbewahrungsfristen fest. Ältere Sicherungsstände bleiben nach diesem Plan verfügbar; ein Backup ersetzt nicht automatisch eine gesetzlich erforderliche Archivierung.",
  },
  {
    question: "Wie schnell sind meine Daten im Ernstfall wieder da?",
    answer: "Einzelne Dateien lassen sich häufig in kurzer Zeit wiederherstellen, ganze Systeme können mehrere Stunden oder länger benötigen. Datenmenge, Internetanbindung und verfügbare Hardware bestimmen die Dauer. Mit einem Wiederherstellungstest prüfe ich, welche Zeiten für Ihr Unternehmen realistisch sind – eine pauschale Garantie wäre nicht seriös.",
  },
  {
    question: "Was kostet eine Datensicherung für mein Unternehmen?",
    answer: "Die Kosten richten sich nach Datenmenge, Arbeitsplätzen, vorhandener Hardware und gewünschter Betreuung. Nach dem kostenlosen 30-minütigen Backup-Check erhalten Sie ein individuelles Festpreisangebot. Einrichtung, laufende Betreuung und gegebenenfalls Speicher- oder Hardwarekosten werden transparent ausgewiesen; alle Preise verstehen sich netto zzgl. MwSt.",
  },
];