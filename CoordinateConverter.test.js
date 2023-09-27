const {
  toDMSObject,
  fromDMSObject,
  toDMSString,
  fromDMSString,
} = require("./CoordinateConverter.js");

const decimalDegrees1 = 51.1788445;
const dmsObject1 = { degrees: 51, minutes: 10, seconds: 43.84, direction: "N" };
const dmsString1 = "51°10'43.84\"N";

test("toDMSObject", () => {
  expect(JSON.stringify(toDMSObject(decimalDegrees1, "latitude"))).toBe(
    JSON.stringify(dmsObject1)
  );
});
test("fromDMSObject", () => {
  expect(fromDMSObject(dmsObject1)).toBeCloseTo(decimalDegrees1,5);
});
test("toDMSString", () => {
  expect(toDMSString(dmsObject1)).toBe(dmsString1);
});
test("fromDMSString", () => {
  expect(JSON.stringify(fromDMSString(dmsString1))).toBe(
    JSON.stringify(dmsObject1)
  );
});
