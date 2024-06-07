/**
 * Converts a Unix timestamp to a formatted date string.
 *
 * @param {number} num - The Unix timestamp to convert.
 * @returns {string} The formatted date string.
 */
export const unixToDate = (num: number) => {
  const date = new Date(num * 1000);
  const convertedStr = date.toLocaleDateString("en-US");
  return convertedStr;
};

/**
 * Converts a Unix timestamp to a formatted time string.
 *
 * @param {number} num - The Unix timestamp to convert.
 * @returns {string} The formatted time string in the format "hours : minutes : seconds".
 */
export const unixToTime = (num: number) => {
  const date = new Date(num * 1000);
  const hours = date.getHours();
  const minutes = "0" + date.getMinutes();
  const seconds = "0" + date.getSeconds();
  const convertedStr =
    hours + " : " + minutes.substr(-2) + " : " + seconds.substr(-2);
  return convertedStr;
};

/**
 * Formats a string containing a number into a formatted number string.
 *
 * @param {string} str - The string containing the number to be formatted.
 * @returns {string} The formatted number string.
 */
export const formatNumbers = (str: string) => {
  const num = parseInt(str);
  const formattedNumbers = num.toLocaleString();
  return formattedNumbers;
};

/**
 * Extracts numbers from a given string.
 *
 * @param {string} str - The input string from which numbers need to be extracted.
 * @returns {string} - The extracted numbers as a string.
 */
export const extractNumber = (str: string) => {
  const regex = /[0-9/ /]/g;
  const nums = str.match(regex);
  const extractedNumber = nums ? nums.join("") : "";
  return extractedNumber;
};

/**
 * Converts a decimal number to a Roman numeral.
 * @param {number} num - The decimal number to convert.
 * @returns {string} The Roman numeral representation of the decimal number.
 */
export const decimalToRoman = (num: number) => {
  const intToRoman = (num: number) => {
    let result = "";
    while (num) {
      if (num >= 1000) {
        result += "M";
        num -= 1000;
      } else if (num >= 500) {
        if (num >= 900) {
          result += "CM";
          num -= 900;
        } else {
          result += "D";
          num -= 500;
        }
      } else if (num >= 100) {
        if (num >= 400) {
          result += "CD";
          num -= 400;
        } else {
          result += "C";
          num -= 100;
        }
      } else if (num >= 50) {
        if (num >= 90) {
          result += "XC";
          num -= 90;
        } else {
          result += "L";
          num -= 50;
        }
      } else if (num >= 10) {
        if (num >= 40) {
          result += "XL";
          num -= 40;
        } else {
          result += "X";
          num -= 10;
        }
      } else if (num >= 5) {
        if (num >= 9) {
          result += "IX";
          num -= 9;
        } else {
          result += "V";
          num -= 5;
        }
      } else {
        if (num >= 4) {
          result += "IV";
          num -= 4;
        } else {
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

/**
 * Converts a Roman numeral to decimal.
 *
 * @param {string} romanNum - The Roman numeral to convert.
 * @returns {string} The decimal representation of the Roman numeral.
 */
export const romanToDecimal = (romanNum: string) => {
  const romanToInt = (s: string) => {
    const legend = "IVXLCDM";
    const l = [1, 5, 10, 50, 100, 500, 1000];
    let sum = 0;
    while (s) {
      if (!!s[1] && legend.indexOf(s[0]) < legend.indexOf(s[1])) {
        sum += l[legend.indexOf(s[1])] - l[legend.indexOf(s[0])];
        s = s.substring(2, s.length);
      } else {
        sum += l[legend.indexOf(s[0])];
        s = s.substring(1, s.length);
      }
    }
    return sum;
  };
  const convetedToDecimal = romanToInt(romanNum.toUpperCase()).toString();
  return convetedToDecimal;
};

/**
 * Generates a string containing a list of numbers from a starting number to an ending number.
 *
 * @param {number} startingNum - The starting number of the number series.
 * @param {number} endingNum - The ending number of the number series.
 * @returns {string} - A string containing the list of numbers.
 */
export const getNumbers = (startingNum: number, endingNum: number) => {
  let numbersList = "";
  for (
    let numberSeries = startingNum;
    numberSeries <= endingNum;
    numberSeries++
  ) {
    numbersList += numberSeries.toString() + "\n";
  }
  return numbersList;
};

interface TimeDifference {
  milliseconds: number;
  seconds: number;
  minutes: number;
  hours: number;
  days: number;
  months: number;
  years: number;
}

/**
 * Calculates the time difference between two dates.
 * @param {string} date1 - The first date. Format: year-month-day.
 * @param {string} date2 - The second date. Format: year-month-day.
 * @returns {object} An object containing the time difference in milliseconds, seconds, minutes, hours, days, months, and years.
 */
export const getTimeDifference = (
  date1: string,
  date2: string
): TimeDifference => {
  const dateOne: Date = new Date(date1);
  const dateTwo: Date = new Date(date2);
  const differenceInMilliSecs = Math.abs(dateTwo.getTime() - dateOne.getTime());
  const seconds = Math.floor(differenceInMilliSecs / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const months = Math.floor(days / 30);
  const years = Math.floor(months / 12);

  return {
    milliseconds: differenceInMilliSecs,
    seconds: seconds,
    minutes: minutes,
    hours: hours,
    days: days,
    months: months,
    years: years,
  };
};
