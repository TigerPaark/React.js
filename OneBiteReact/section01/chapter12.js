// 1. 함수 표현식

function funcA() {
  //console.log("funcA");
}

let varA = funcA;
varA();

let varB = function () {
  // 익명함수(이름이 없다)
  //console.log("funcB");
};

varB();

// 2. 화살표 함수
// let varC = () => {
//   return 1;
// };

//      ↓
let varC = (sum) => sum + 1; // 가능하다

console.log(varC(10));
