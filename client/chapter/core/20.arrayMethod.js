/* ------------------------------ */
/* Array's Methods                */
/* ------------------------------ */

// Array.isArray
// Array.isArray([]) // true | false
// console.log(Array.isArray([]));

const isNull = data => Object.prototype.toString.call(data).slice(8, -1).toLowwerCase() === 'null'

// const isArray = data => Array.isArray(data)

const isArray = (data) => {
  // return Array.isArray(data);
  return Object.prototype.toString.call(data).slice(8, -1).toLowwerCase() === 'array'
}

function normalIsArray(data) {
  // return Array.isArray(data);
  return Object.prototype.toString.call(data).slice(8, -1).toLowwerCase() === 'array'
}


const arr = [10, 100, 1000, 10_000];

const people = [
  {
    id:0,
    name:'김다영',
    job:'프론트엔드 개발자',
    age:25,
    imageSrc:'ASdkl31'
  },
  {
    id:1,
    name:'김충만',
    job:'치킨집 사장',
    age:51,
    imageSrc:'asFkzo23'
  },
  {
    id:2,
    name:'조윤주',
    job:'화가',
    age: 12,
    imageSrc: 'Gzoskq13'
  },
  {
    id:3,
    name:'송현규',
    job:'마델',
    age:25,
    imageSrc:'aabaq23'
  }
]

/* 요소 순환 ---------------------------- */

// forEach
// [10, 100, 1000, 10_000]
// arr.forEach((item, index) => {
//   // console.log(item, index)
// })

// people.forEach(item => console.log(item.job))

people.forEach((item) => {
  console.log(item.job)
})


const span = document.querySelectorAll('span');

span.forEach((item) => {

  item.addEventListener('click', function() {
    console.log(this);
  })

})


/* 원형 파괴 ----------------------------- */

// push
// pop
// unshift
// shift
// reverse

// const reverseArray = arr.reverse();
// const reverseArray = arr.toReversed(); // 원형 파괴 x
// console.log(reverseArray);


// splice

// const spliceArray = arr.splice(1, 2, 'javascript', 'css', 'react');
// console.log(spliceArray)
// console.log(arr)


// sort

// const sortArray = arr.sort((a, b) => {
//   return b - a;
// })
// const sortArray = arr.toSorted((a, b) => { // 원형 파괴 x
//   return b - a;
// })

// console.log(sortArray)



/* 새로운 배열 반환 ------------------------ */

// concat
// slice
// toSorted
// toReversed
// toSpliced
// map

const mapArray = people.map((item, index) => {
  return item.job
})

// console.log(mapArray)

const card = people.map((item,index)=>{
  return /* html */`
    <div class='userCard card${index}'>
      <div class="imageField">
        <img src="${item.imageSrc}.jpg" alt="${item.alt}" />
      </div>
      <span>이름 : ${item.name}</span>
      <span>나이 : ${item.age}</span>
      <span>직업 : ${item.job}</span>
    </div>
  `
})

card.forEach((item)=>{
  // document.body.insertAdjacentHTML('beforeend',item);
})


const newAge = people.map(item => item.age - 2);
// console.log(newAge);


/* 요소 포함 여부 확인 ---------------------- */

// indexOf
// lastIndexOf
// includes

/* 요소 찾기 ------------------------------ */

// find

const findArray = people.find((item) => {
  return item.age <= 30
})
// console.log(findArray)

// findIndex

/* 요소 걸러내기 --------------------------- */

// filter

const filterArray = people.filter((item) => {
  return item.age <= 30
})
// console.log(filterArray)


/* 요소별 리듀서(reducer) 실행 -------------- */

// reduce

const reduceArray = people.reduce((acc, cur) => {
  return acc + cur.age
})
// console.log(reduceArray)

const template = people.reduce((htmlCode, cur) => {
  return htmlCode + `<div> ${cur.name} : ${cur.age} </div>`
}, '')

// reduceRight

/* string ←→ array 변환 ------------------ */

// split

const str = '종명 예진 현주 지인 훈 은원';

// split : 문자 -> 배열
const stringToArray = str.split(' ');
console.log(stringToArray)

// join : 배열 -> 문자
const arrayToString = stringToArray.join('-');
console.log(arrayToString);


// join