
function toDMSObject(decimalDegrees, type) {
    const degrees = Math.floor(Math.abs(decimalDegrees));
    const minutesDecimal = (Math.abs(decimalDegrees) - degrees) * 60;
    const minutes = Math.floor(minutesDecimal);
    const seconds = (minutesDecimal - minutes) * 60;
    
    let direction;
    if (type === 'latitude') {
        direction = decimalDegrees >= 0 ? 'N' : 'S';
    } else if (type === 'longitude') {
        direction = decimalDegrees >= 0 ? 'E' : 'W';
    } else {
        throw new Error('Invalid type. Type must be "latitude" or "longitude".');
    }
    
    return { degrees, minutes, seconds: parseFloat(seconds.toFixed(2)), direction };
}

function fromDMSObject(dmsObject) {
    const { degrees, minutes, seconds, direction } = dmsObject;
    const sign = (direction === 'S' || direction === 'W') ? -1 : 1;
    const decimalDegrees = sign * (degrees + (minutes / 60) + (seconds / 3600));
    return decimalDegrees;
}

function toDMSString(dmsObject) {
    const { degrees, minutes, seconds, direction } = dmsObject;
    return `${degrees}°${minutes}'${seconds.toFixed(2)}"${direction}`;
}

function fromDMSString(dmsString) {
    const matches = dmsString.match(/(\d+)°(\d+)'([\d.]+)"([NSEW])/);
    if (!matches) throw new Error('Invalid DMS string');
    const [, degrees, minutes, seconds, direction] = matches;
    return { degrees: parseInt(degrees), minutes: parseInt(minutes), seconds: parseFloat(seconds), direction };
}

module.exports = {
    toDMSObject,
    fromDMSObject,
    toDMSString,
    fromDMSString
};

