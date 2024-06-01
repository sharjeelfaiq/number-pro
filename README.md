## number-pro: Number Manipulation Utility for JavaScript

number-pro is a versatile JavaScript package that provides a comprehensive set of functions to manipulate numbers for both frontend and backend applications.

Visit the documentation at --> https://number-pro-documentation.netlify.app/

### Installation

Install number-pro using npm, pnpm or yarn:

```bash
npm install number-pro
```

```bash
pnpm install number-pro
```

```bash
yarn add number-pro
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

- **unixToDate(number)**: Converts a Unix timestamp to a human-readable date string.

```javascript
numberPro.unixToDate(1620000000); // 5/3/2021
```

- **unixToTime(number)**: Converts a Unix timestamp to a human-readable time string.

```javascript
numberPro.unixToTime(103004870); // 9 : 27 : 50
```

- **formatNumbers(number)**: Formats a number or number string with comma after every 3 digits.

```javascript
numberPro.formatNumbers("103004870"); // 103,004,870
numberPro.formatNumbers(103004870); // 103,004,870
```

- **extractNumber(string)**: Extracts numerical digits from a string.

```javascript
numberPro.extractNumber("I have 2 apples and 3 pineapples"); //  2   3
```

- **decimalToRoman(number)**: Converts a decimal number to its Roman numeral equivalent.

```javascript
numberPro.decimalToRoman(123); // CXXIII
numberPro.decimalToRoman(10197); // MMMMMMMMMMCXCVII
numberPro.decimalToRoman(1035); // MXXXV
```

- **romanToDecimal(number)**: Converts a Roman numeral string to its decimal equivalent.

```javascript
numberPro.romanToDecimal("CXXIII"); // 123
numberPro.romanToDecimal("MMMMMMMMMMCXCVII"); // 10197
numberPro.romanToDecimal("MXXXV"); // 1035
```

- **getNumbers(startingNum, endingNum)**: Generates a sequence of numbers with starting and ending boundery numbers (inclusive).

```javascript
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
```

### Supoort

Feel free to contribute and make number-pro a better choice.
