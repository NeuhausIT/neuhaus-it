export const backupContact = {
  telephone: "+4923054459886",
  displayTelephone: "02305 4459886",
  bookingUrl: "/terminbuchungen",
};

export const backupAreas = ["Castrop-Rauxel", "Dortmund", "Bochum", "Herne", "Kreis Recklinghausen"];

export const privateBackup = {
  price: 49,
  priceBasis: "gross",
  priceType: "from",
  durationMinutes: 30,
  durationType: "maximum",
  travelChargedSeparately: true,
  annualCheck: true,
  url: "https://computerhilfe-castrop-rauxel.de/datensicherung",
  items: [
    "Fotos, Dokumente und Smartphone automatisch sichern",
    "Externe Festplatte und auf Wunsch verschlüsselter Cloud-Speicher in Deutschland",
    "Wiederherstellung gemeinsam üben",
    "Jahres-Check",
  ],
};

export const businessBackup = {
  hourlyRate: 86,
  priceBasis: "net",
  quickCheckPrice: 149,
  quickCheckCreditedOnOrder: true,
  monthlyPricePerWorkplace: 12,
  monthlyPriceType: "from",
  reportIntervalMonths: 1,
  url: "https://it-service-castrop-rauxel.de/datensicherung",
  items: [
    "Backup-Konzept nach 3-2-1 für Server, NAS und Arbeitsplätze",
    "Überwachung mit monatlichem Bericht",
    "Wiederherstellungstests mit Protokoll",
    "Notfallplan",
  ],
};

export const backupFaq = [
  {
    question: "Wie oft sollte ich meine Daten sichern?",
    answer: "Automatisch mindestens täglich; wichtige Arbeitsdaten gern stündlich.",
  },
  {
    question: "Reicht eine externe Festplatte?",
    answer: "Sie ist ein guter Anfang. Bei Brand, Diebstahl oder Erpressungstrojanern hilft zusätzlich eine Kopie außer Haus.",
  },
  {
    question: "Ist Cloud-Backup sicher?",
    answer: "Ja, wenn die Daten vor dem Hochladen verschlüsselt werden und Sie den Schlüssel behalten. Ich nutze Speicher in Deutschland.",
  },
  {
    question: "Was kostet eine Datensicherung?",
    answer: `Privathaushalte ab ${privateBackup.price} € inkl. USt. für die Einrichtung (bis ${privateBackup.durationMinutes} Min.). Vor Ort kommt die Anfahrt hinzu. Für Unternehmen gibt es den Backup-Schnellcheck für ${businessBackup.quickCheckPrice} € netto, der bei Beauftragung angerechnet wird.`,
  },
  {
    question: "Woher weiß ich, dass mein Backup funktioniert?",
    answer: "Durch Überwachung und regelmäßige Probe-Wiederherstellung. Beides ist bei mir Standard.",
  },
  {
    question: "Kommen Sie auch vor Ort?",
    answer: `Ja, in Castrop-Rauxel, Dortmund, Bochum, Herne und im Kreis Recklinghausen. Vieles geht auch per Fernwartung.`,
  },
];
