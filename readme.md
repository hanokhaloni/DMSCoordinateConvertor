# General

This utility provides functions to convert between Decimal Degrees and Degrees Minutes Seconds (DMS) formats for geographical coordinates.

## Functions

### `toDMSObject(decimalDegrees: number, type: string): Object`

Converts Decimal Degrees to a Degrees Minutes Seconds (DMS) object.

- `decimalDegrees`: The coordinate in Decimal Degrees format.
- `type`: A string specifying whether the coordinate is 'latitude' or 'longitude'.
- Returns: An object representing the DMS coordinate with the following properties:
  - `degrees`: Degrees part of the coordinate.
  - `minutes`: Minutes part of the coordinate.
  - `seconds`: Seconds part of the coordinate.
  - `direction`: Direction represented by 'N', 'S', 'E', or 'W'.

### `fromDMSObject(dmsObject: Object): number`

Converts a Degrees Minutes Seconds (DMS) object to Decimal Degrees.

- `dmsObject`: An object representing the DMS coordinate with the following properties:
  - `degrees`: Degrees part of the coordinate.
  - `minutes`: Minutes part of the coordinate.
  - `seconds`: Seconds part of the coordinate.
  - `direction`: Direction represented by 'N', 'S', 'E', or 'W'.
- Returns: The coordinate in Decimal Degrees format.

### `toDMSString(dmsObject: Object): string`

Converts a Degrees Minutes Seconds (DMS) object to a DMS string.

- `dmsObject`: An object representing the DMS coordinate with the following properties:
  - `degrees`: Degrees part of the coordinate.
  - `minutes`: Minutes part of the coordinate.
  - `seconds`: Seconds part of the coordinate.
  - `direction`: Direction represented by 'N', 'S', 'E', or 'W'.
- Returns: A string representing the DMS coordinate, e.g., "51°10'43.84\"N".

### `fromDMSString(dmsString: string): Object`

Converts a DMS string to a Degrees Minutes Seconds (DMS) object.

- `dmsString`: A string representing the DMS coordinate, e.g., "51°10'43.84\"N".
- Returns: An object representing the DMS coordinate with the following properties:
  - `degrees`: Degrees part of the coordinate.
  - `minutes`: Minutes part of the coordinate.
  - `seconds`: Seconds part of the coordinate.
  - `direction`: Direction represented by 'N', 'S', 'E', or 'W'.

## Usage

```javascript
const decimalDegreesLat = 51.1788445;
const decimalDegreesLon = -0.6066528;

// Convert Decimal Degrees to DMS Object
const dmsObjectLat = toDMSObject(decimalDegreesLat, 'latitude');
const dmsObjectLon = toDMSObject(decimalDegreesLon, 'longitude');

// Convert DMS Object to Decimal Degrees
const decimalDegreesLatConverted = fromDMSObject(dmsObjectLat);
const decimalDegreesLonConverted = fromDMSObject(dmsObjectLon);

// Convert DMS Object to DMS String
const dmsStringLat = toDMSString(dmsObjectLat);
const dmsStringLon = toDMSString(dmsObjectLon);

// Convert DMS String to DMS Object
const dmsObjectLatConverted = fromDMSString(dmsStringLat);
const dmsObjectLonConverted = fromDMSString(dmsStringLon);

# Prerequisites

Make sure you have jest (dev dependency)

    npm install --save-dev jest

If using vscode - use the following plugins:
- test explorer ui
- [vscode-jest|https://marketplace.visualstudio.com/items?itemName=Orta.vscode-jest] see [github|https://github.com/jest-community/vscode-jest]

# how to run?
```
npm jest
```
