/// <reference types="node" />
import { describe, test } from "node:test";
import { strict as assert } from "node:assert";
import { privateBackup, businessBackup } from "./datensicherung";

describe("Datensicherungsangebote", () => {
  test("Private Einrichtung kostet ab 49 Euro inklusive USt.", () => {
    assert.equal(privateBackup.price, 49);
    assert.equal(privateBackup.priceBasis, "gross");
    assert.equal(privateBackup.priceType, "from");
  });
  test("Private Einrichtung umfasst maximal 30 Minuten", () => {
    assert.equal(privateBackup.durationMinutes, 30);
    assert.equal(privateBackup.durationType, "maximum");
  });
  test("Anfahrt wird privat separat berechnet", () => {
    assert.equal(privateBackup.travelChargedSeparately, true);
  });
  test("Privatangebot enthält einen Jahres-Check", () => {
    assert.equal(privateBackup.annualCheck, true);
  });
  test("Unternehmensleistung kostet 86 Euro netto pro Stunde", () => {
    assert.equal(businessBackup.hourlyRate, 86);
    assert.equal(businessBackup.priceBasis, "net");
  });
  test("Backup-Schnellcheck kostet 149 Euro netto", () => {
    assert.equal(businessBackup.quickCheckPrice, 149);
    assert.equal(businessBackup.priceBasis, "net");
  });
  test("Schnellcheck wird bei Beauftragung angerechnet", () => {
    assert.equal(businessBackup.quickCheckCreditedOnOrder, true);
  });
  test("Betreuung kostet ab 12 Euro netto pro Arbeitsplatz und Monat", () => {
    assert.equal(businessBackup.monthlyPricePerWorkplace, 12);
    assert.equal(businessBackup.monthlyPriceType, "from");
    assert.equal(businessBackup.priceBasis, "net");
  });
  test("Unternehmen erhalten monatliche Berichte", () => {
    assert.equal(businessBackup.reportIntervalMonths, 1);
  });
});
