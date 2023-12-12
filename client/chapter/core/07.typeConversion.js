/* --------------------- */
/* Type Conversion       */
/* --------------------- */

/* 데이터 → 문자 ----------------------------------------------------------- */

// number
const YEAR = 2024;

console.log(typeof String(YEAR)); // string
console.log(typeof YEAR + ''); // number

// undefined, null
let days = null;
let weekend;

console.log(typeof (days + ''));
console.log(typeof (weekend + ''));

// boolean
let isClicked = false;

console.log(typeof (isClicked + ''));

/* 데이터 → 숫자 ----------------------------------------------------------- */

// undefined
let friend;

console.log(Number(friend)); // NaN

// null
let money = null;

console.log(Number(money)); // 0

// boolean
let cutie = true; // true = 1, false = 0

console.log(Number(cutie)); // 1

// string
let num = '250';

console.log(Number(num)); // 250

// +, *1, /1
console.log(typeof +num); // number
console.log(typeof (num * 1)); // number
console.log(typeof (num / 1)); // number

// numeric string
const width = '105.3px';

console.log(Number(width)); // NaN
console.log(parseInt(width)); // 105
console.log(parseInt(width, 10)); // 105 (10진수로 변환)
console.log(parseFloat(width)); // 105.3

/* 데이터 → 불리언 ---------------------------------------------------------- */

// null, undefined, 0, NaN, ''
// 위에 나열한 것 이외의 것들

console.log(Boolean(friend)); // false
console.log(Boolean(0)); // false

const valuse = prompt('값을 입력해주세요');
console.log(typeof +valuse); // number
