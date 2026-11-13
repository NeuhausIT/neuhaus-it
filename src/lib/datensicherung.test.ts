import { describe, expect, test } from "bun:test";
import { backupCheck, backupPackages } from "./datensicherung";

describe("Backup-Angebote", () => {
  test("Backup-Check ist kostenlos und dauert 30 Minuten", () => {
    expect(backupCheck.price).toBe(0);
    expect(backupCheck.durationMinutes).toBe(30);
  });
  test("Backup-Check findet vor Ort oder per Video statt", () => {
    expect(backupCheck.formats).toEqual(["vor Ort", "per Video"]);
  });
  test("Basis gilt einmalig für bis zu fünf Arbeitsplätze", () => {
    const basis = backupPackages.find(p => p.name === "Basis");
    expect(basis?.maxWorkplaces).toBe(5);
    expect(basis?.billing).toBe("einmalig");
  });
  test("Betreut enthält vierteljährliche Wiederherstellungstests", () => {
    expect(backupPackages.find(p => p.name === "Betreut")?.testIntervalMonths).toBe(3);
  });
  test("Komplett übernimmt vierteljährliche Tests und enthält jährliches Review", () => {
    const komplett = backupPackages.find(p => p.name === "Komplett");
    expect(komplett?.testIntervalMonths).toBe(3);
    expect(komplett?.reviewIntervalMonths).toBe(12);
  });
  test("Nur Betreut ist als Empfehlung vorgesehen", () => {
    expect(backupPackages.filter(p => p.recommended).map(p => p.name)).toEqual(["Betreut"]);
  });
});