/* ---------------- */
/* For In Loop      */
/* ---------------- */

const javaScript = {
  creator: 'Brendan Eich',
  createAt: '1995.05',
  standardName: 'ECMAScript',
  currentVersion: 2023,
  hasOwnProperty() {
    return '난 누굴까~?';
  },
};

Object.prototype.nickName = 'tiger';

// 객체에서 내가 원하는 값이 있어?
// in 문
//key in javaScript
const key = 'nickName';

// console.log(key in javaScript);
// 자바스크립트는 자유로운 언어 : 내가 맘대로 바꿀 수 있음

// 객체의 속성(property) 포함 여부 확인 방법
// - 모든 객체가 사용 가능하도록 속성이 확장되었을 때 포함 여부 결과는?

// 객체 자신의 속성인지 확인하는 방법
// - "자신(own)의 속성(property)을 가지고있는지(has) 확인 방법"이 덮어쓰여질 수 있는 위험에 대처하는 안전한 방법은?

// console.log('hasOwnProperty' in javaScript);


// console.log(javaScript.hasOwnProperty(key));



// javaScript라는 자손객체가 오염 된 상태
// 조상객체(Object)는 오염되지 않은 상태

// call은 조상객체(Object.prototype)의 능력을 빌려쓰게 해주는 메소드
// console.log(Object.prototype.hasOwnProperty.call(javaScript, key));
// console.log(({}).hasOwnProperty.call(javaScript, key));

// for ~ in 문
// - 객체 자신의 속성만 순환하려면?
// - 배열 객체 순환에 사용할 경우?

for (let key in javaScript) {
  if (Object.hasOwnProperty.call(javaScript, key)) {
    // console.log(key);
  }
}

const tens = [10, 100, 1000, 10000];

for (let key in tens) {
  // console.log(tens[key]);
}

// for..in은 객체를 순환하는 용도로 사용해주세요
// 배열은.. 순서 보장이 안 됨, 성능x => for..in은 객체에 양보하세요..

// 이런 게 있다~

const obj = {};

obj.nickName = 'tiger';

Object.defineProperty(obj, 'key1', {
  enumerable: false,
  value: 'kindtiger',
});

Object.defineProperties(obj, {
  property1: {
    value: true,
    writable: true,
    enumerable: true,
  },
  property2: {
    value: 'hello',
    writable: false,
    configurable: true,
  },
});
