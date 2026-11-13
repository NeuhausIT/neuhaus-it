import { describe, test } from "node:test";
import { strict as assert } from "node:assert";
import { backupCheck, backupPackages } from "./datensicherung";

describe("Backup-Angebote", () => {
  test("Backup-Check ist kostenlos und dauert 30 Minuten", () => {
    assert.equal(backupCheck.price, 0);
    assert.equal(backupCheck.durationMinutes, 30);
  });
  test("Backup-Check findet vor Ort oder per Video statt", () => {
    assert.deepEqual(backupCheck.formats, ["vor Ort", "per Video"]);
  });
  test("Basis gilt einmalig für bis zu fünf Arbeitsplätze", () => {
    const basis = backupPackages.find(p => p.name === "Basis");
    assert.equal(basis?.maxWorkplaces, 5);
    assert.equal(basis?.billing, "einmalig");
  });
  test("Betreut enthält vierteljährliche Wiederherstellungstests", () => {
    assert.equal(backupPackages.find(p => p.name === "Betreut")?.testIntervalMonths, 3);
  });
  test("Komplett übernimmt vierteljährliche Tests und enthält jährliches Review", () => {
    const komplett = backupPackages.find(p => p.name === "Komplett");
    assert.equal(komplett?.testIntervalMonths, 3);
    assert.equal(komplett?.reviewIntervalMonths, 12);
  });
  test("Nur Betreut ist als Empfehlung vorgesehen", () => {
    assert.deepEqual(backupPackages.filter(p => p.recommended).map(p => p.name), ["Betreut"]);
  });
});