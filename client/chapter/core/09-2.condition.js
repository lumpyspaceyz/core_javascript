/* ------------------- */
/* Logical Operators   */
/* ------------------- */

let age = 91;

if (!(age >= 14 && age <= 90)) {
  console.log('범위에 속하지 않음');
} else {
  console.log('청소년 또는 성인입니다');
}

let a = 10;
let b = '';
let value = Boolean(b); // false

// 논리곱(그리고) 연산자
let AandB = a && b;
console.log('AandB', AandB); // ''(빈문자)

// logical AND Assignment 논리곱 할당 연산자
// 둘의 결과는 같음
// a &&= b;
// a = a && b;

// 논리합(또는) 연산자
let AorB = a || b;
console.log('AorB', AorB); // 10

// logical OR Assignment 논리합 할당 연산자
// 둘의 결과는 같음
// a ||= b;
// a = a || b;

// 부정 연산자
let reverseValue = !value;

// 조건 처리

// 첫번째 Falsy를 찾는 연산 (&&)
let whichFalsy = true && '' && [] && { thisIsFalsy: false }; // {thisIsFalsy:false}

// 첫번째 Truthy를 찾는 연산 (||)
let whichTruthy = false || '' || [2, 3].length || { thisIsTruthy: true };

/* -------------------------------------------------------------------------- */
/*                                  로그인 구현하기                               */
/* -------------------------------------------------------------------------- */

function login() {
  let loginId = prompt('아이디를 입력하세요.');

  if (!loginId) return;

  if (loginId?.toLowerCase() === 'admin') {
    let loginPw = prompt('비밀번호를 입력하세요.');
    if (loginPw?.toLowerCase() === 'themaster') {
      console.log('횐영합니다!');
    } else if (loginPw?.toLowerCase() !== 'themaster') {
      console.log('인증에 실패하였습니다.');
    } else if (loginPw === null || loginPw === '') {
      console.log('취소되었습니다.');
    }
  } else if (loginId === null || loginId.replace(/\s*/g, '') === '') {
    console.log('취소되었습니다.');
  } else {
    console.log('올바른 사용자가 아닙니다.');
  }
}

login();
