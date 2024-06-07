## number-pro: Number Manipulation Utility for JavaScript

number-pro is a versatile JavaScript package that provides a comprehensive set of functions to manipulate numbers and get date difference for both frontend and backend applications.

**DOCUMENTATION** https://t.ly/qUIpo

### Installation

Install number-pro using npm, pnpm or yarn:

```bash
npm install number-pro --save-dev
```

```bash
pnpm install number-pro -D
```

```bash
yarn add number-pro -D
```

### Usage

Import the entire number-pro library:

```javascript
// ES5 Import
const numberPro = require("number-pro");

// ES6 Import
import numberPro from "number-pro";
```

or import specific functions:

```javascript
// ES5 Import
const { unixToDate, romanToDecimal } = require("number-pro");

// ES6 Import
import { unixToDate, romanToDecimal } from "number-pro";
```

### Available Functions

number-pro offers a wide range of functions for various string manipulation tasks. Here's a brief description of each function:

```javascript
// 1. unixToDate(number): Converts a Unix timestamp to a human-readable date string.
numberPro.unixToDate(1620000000); // 5/3/2021

// 2. unixToTime(number): Converts a Unix timestamp to a human-readable time string.
numberPro.unixToTime(103004870); // 9 : 27 : 50

// 3. formatNumbers(number): Formats a number or number string with comma after every 3 digits.
numberPro.formatNumbers("103004870"); // 103,004,870
numberPro.formatNumbers(103004870); // 103,004,870

// 4. extractNumber(string): Extracts numerical digits from a string.
numberPro.extractNumber("I have 2 apples and 3 pineapples"); //  2   3

// 5. decimalToRoman(number): Converts a decimal number to its Roman numeral equivalent.
numberPro.decimalToRoman(123); // CXXIII
numberPro.decimalToRoman(10197); // MMMMMMMMMMCXCVII
numberPro.decimalToRoman(1035); // MXXXV

// 6. romanToDecimal(number): Converts a Roman numeral string to its decimal equivalent.
numberPro.romanToDecimal("CXXIII"); // 123
numberPro.romanToDecimal("MMMMMMMMMMCXCVII"); // 10197
numberPro.romanToDecimal("MXXXV"); // 1035

// 7. getNumbers(startingNum, endingNum): Generates a sequence of numbers with starting and ending boundery numbers (inclusive).
numberPro.getNumbers(1, 10);
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10

// 8. getTimeDIfference(date1, date2): Retuns an object containing the difference between two dates in milliseconds, seconds, minutes, hours, days, months, and years.
numberPro.getTimeDifference("2022-01-01", "2021-01-02");
// {
//   milliseconds: 31449600000,
//   seconds: 31449600,
//   minutes: 524160,
//   hours: 8736,
//   days: 364,
//   months: 12,
//   years: 1
// }
```

### Supoort

Feel free to contribute and make number-pro a better choice.
