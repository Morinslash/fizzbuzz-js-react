export function isNumeric(value) {
    return value.trim() !== '' && !isNaN(value);
}

export function isWholeNumber(value) {
    return /^[0-9]+$/.test(value);
}

export function validateInput(value) {
    return isNumeric(value) && isWholeNumber(value);
}

