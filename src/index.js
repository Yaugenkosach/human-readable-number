module.exports = function toReadable (number) {
    const unique = {
        0: 'zero',
        100: 'one hundred',
        1000: 'thousand',
    };

    const units = {
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
    };

    const dozens = {
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen',
    };

    const twentys = {
        2: 'twenty',
        3: 'thirty',
        4: 'forty',
        5: 'fifty',
        6: 'sixty',
        7: 'seventy',
        8: 'eighty',
        9: 'ninety',
    };
    const numStr = number.toString()
    let result = '';

    if (number === 0 || number === 100 || number === 1000) {
        result = `${unique[numStr]}`;
    } else if (numStr.length === 1) {
        result = `${units[numStr]}`;
    } else if (numStr.length === 2 && numStr[0] === '1') {
        result = `${dozens[numStr]}`;
    } else if (numStr.length === 2 && numStr[1] === '0') {
        result = `${twentys[numStr[0]]}`;
    } else if (numStr.length === 2) {
        result = `${twentys[numStr[0]]} ${units[numStr[1]]}`;
    }  else if (numStr.length === 3 && numStr.slice(1) === '00') {
        result = `${units[numStr[0]]} hundred`;
    } else if (numStr.length === 3 && numStr[1] === '0') {
        result = `${units[numStr[0]]} hundred ${units[numStr[2]]}`;
    }  else if (numStr.length === 3 && numStr[1] === '1') {
        result = `${units[numStr[0]]} hundred ${dozens[numStr.slice(1)]}`;
    }  else if (numStr.length === 3 && numStr[2] === '0') {
        result = `${units[numStr[0]]} hundred ${twentys[numStr[1]]}`;
    }  else if (numStr.length === 3) {
        result = `${units[numStr[0]]} hundred ${twentys[numStr[1]]} ${units[numStr[2]]}`;
    }

    return result
};