
// 모듈 프로그래밍

// named export (이름 내보내기) -> { 이름 } : 해당 파일에서 여러 개 내보내기 가능
// import { getNode } from "./lib/dom/getNode.js";
// import { insertLast } from "./lib/dom/insert.js";

// default export (기본 내보내기) -> 이름 : 해당 파일에서 하나 내보내기 가능
// import clearContents from "./lib/dom/clear.js";

import { getNode, clearContents, insertLast } from "./lib/index.js";

const first = getNode('#firstNumber');
const second = getNode('#secondNumber');
const result = getNode('.result');
const clear = getNode('#clear')

// 1. input value 값 가져오기
//     - input에게 input 이벤트를 걸어 준다.
//     - input.value 로 가져온다.

// 2. 두 수의 합 더하기
//     - 타입 확인하기.

function handleInput() {
  const firstValue = first.value * 1;
  const secondValue = second.value / 1;
  const total = firstValue + secondValue;

  clearContents(result);

  insertLast(result, total)
}

function handleClear(e) {
  e.preventDefault();
  clearContents(first);
  clearContents(second);
  result.textContent = '-';
}


first.addEventListener('input', handleInput);
second.addEventListener('input', handleInput);
clear.addEventListener('click', handleClear);

// 3. 합계 랜더링 하기
//     - insertLast(), insertAdjacentHTML()


