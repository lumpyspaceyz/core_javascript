


function earth(){
  
  let water = true;

  let apple = {
    founder:'Steve Jobs',
    ceo:'Tim Cook',
    product: ['iphone','macbook','macStudio','appleWatch']
  }

  let gravity = 10;


  return function(value){
    gravity = value;
  }


 


}

const ufo = earth()

// ufo(1)
// ufo가 호랑이를 시켜서 지구의 중력값을 바꿀 수 있음

// 어차피 내보낼 거면 꼭 이름이 호랑이일 필요 없음
// 함수를 바로 return
// return function(value){
//   gravity = value;
// }

// function handleClick() {
//   let isClicked = false;
  
//   return () => {
//     if(!isClicked){

//       document.body.style.background = 'orange'
//     }else{
//       document.body.style.background = 'white'
//     }
  
//     isClicked = !isClicked
//   }
// }
// button.addEventListener('click',handleClick);

// IFFE 즉시 실행 함수
// const handleClick = (() => {

//   let isClicked = false;

//   return function (){
//     if(!isClicked){

//       document.body.style.background = 'orange'
//     }else{
//       document.body.style.background = 'white'
//     }
  
//     isClicked = !isClicked
//   }
// })()
// button.addEventListener('click',handleClick);



// function bindEvent(node,type,handler){

//   node.addEventListener(type,handler);
//   return ()=> node.removeEventListener(type,handler);
// }

// const remove = bindEvent(button,'click',handleClick)


function useState(initValue){
  
  let value = initValue;
  
  function read(){
    return value;
  }

  function write(newValue){
    value = newValue
  }

  return [read,write]
  
}



const [state,setState] = useState(true);