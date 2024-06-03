"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNumbers = exports.romanToDecimal = exports.decimalToRoman = exports.extractNumber = exports.formatNumbers = exports.unixToTime = exports.unixToDate = void 0;
/**
 * Converts a Unix timestamp to a formatted date string.
 *
 * @param {number} num - The Unix timestamp to convert.
 * @returns {string} The formatted date string.
 */
const unixToDate = (num) => {
    const date = new Date(num * 1000);
    const convertedStr = date.toLocaleDateString("en-US");
    return convertedStr;
};
exports.unixToDate = unixToDate;
/**
 * Converts a Unix timestamp to a formatted time string.
 *
 * @param {number} num - The Unix timestamp to convert.
 * @returns {string} The formatted time string in the format "hours : minutes : seconds".
 */
const unixToTime = (num) => {
    const date = new Date(num * 1000);
    const hours = date.getHours();
    const minutes = "0" + date.getMinutes();
    const seconds = "0" + date.getSeconds();
    const convertedStr = hours + " : " + minutes.substr(-2) + " : " + seconds.substr(-2);
    return convertedStr;
};
exports.unixToTime = unixToTime;
/**
 * Formats a string containing a number into a formatted number string.
 *
 * @param {string} str - The string containing the number to be formatted.
 * @returns {string} The formatted number string.
 */
const formatNumbers = (str) => {
    const num = parseInt(str);
    const formattedNumbers = num.toLocaleString();
    return formattedNumbers;
};
exports.formatNumbers = formatNumbers;
/**
 * Extracts numbers from a given string.
 *
 * @param {string} str - The input string from which numbers need to be extracted.
 * @returns {string} - The extracted numbers as a string.
 */
const extractNumber = (str) => {
    const regex = /[0-9/ /]/g;
    const nums = str.match(regex);
    const extractedNumber = nums ? nums.join("") : "";
    return extractedNumber;
};
exports.extractNumber = extractNumber;
/**
 * Converts a decimal number to a Roman numeral.
 * @param {number} num - The decimal number to convert.
 * @returns {string} The Roman numeral representation of the decimal number.
 */
const decimalToRoman = (num) => {
    const intToRoman = (num) => {
        let result = "";
        while (num) {
            if (num >= 1000) {
                result += "M";
                num -= 1000;
            }
            else if (num >= 500) {
                if (num >= 900) {
                    result += "CM";
                    num -= 900;
                }
                else {
                    result += "D";
                    num -= 500;
                }
            }
            else if (num >= 100) {
                if (num >= 400) {
                    result += "CD";
                    num -= 400;
                }
                else {
                    result += "C";
                    num -= 100;
                }
            }
            else if (num >= 50) {
                if (num >= 90) {
                    result += "XC";
                    num -= 90;
                }
                else {
                    result += "L";
                    num -= 50;
                }
            }
            else if (num >= 10) {
                if (num >= 40) {
                    result += "XL";
                    num -= 40;
                }
                else {
                    result += "X";
                    num -= 10;
                }
            }
            else if (num >= 5) {
                if (num >= 9) {
                    result += "IX";
                    num -= 9;
                }
                else {
                    result += "V";
                    num -= 5;
                }
            }
            else {
                if (num >= 4) {
                    result += "IV";
                    num -= 4;
                }
                else {
                    result += "I";
                    num -= 1;
                }
            }
        }
        return result;
    };
    const convertedToRoman = intToRoman(Math.abs(Number(num)));
    return convertedToRoman;
};
exports.decimalToRoman = decimalToRoman;
/**
 * Converts a Roman numeral to decimal.
 *
 * @param {string} romanNum - The Roman numeral to convert.
 * @returns {string} The decimal representation of the Roman numeral.
 */
const romanToDecimal = (romanNum) => {
    const romanToInt = (s) => {
        const legend = "IVXLCDM";
        const l = [1, 5, 10, 50, 100, 500, 1000];
        let sum = 0;
        while (s) {
            if (!!s[1] && legend.indexOf(s[0]) < legend.indexOf(s[1])) {
                sum += l[legend.indexOf(s[1])] - l[legend.indexOf(s[0])];
                s = s.substring(2, s.length);
            }
            else {
                sum += l[legend.indexOf(s[0])];
                s = s.substring(1, s.length);
            }
        }
        return sum;
    };
    const convetedToDecimal = romanToInt(romanNum.toUpperCase()).toString();
    return convetedToDecimal;
};
exports.romanToDecimal = romanToDecimal;
/**
 * Generates a string containing a list of numbers from a starting number to an ending number.
 *
 * @param {number} startingNum - The starting number of the number series.
 * @param {number} endingNum - The ending number of the number series.
 * @returns {string} - A string containing the list of numbers.
 */
const getNumbers = (startingNum, endingNum) => {
    let numbersList = "";
    for (let numberSeries = startingNum; numberSeries <= endingNum; numberSeries++) {
        numbersList += numberSeries.toString() + "\n";
    }
    return numbersList;
};
exports.getNumbers = getNumbers;
/**
 * Retrieves a random quote from the list of quotes.
 * @returns {Object} An object containing a random quote and its author.
 */
