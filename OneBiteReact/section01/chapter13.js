// 1. 콜백함수
function main(value) {
  value();
}

function sub() {
  //console.log("i am sub");
}

main(sub);

// ------------------------- 실행 순서 ----------------------------
// sub 함수가 정의됨.
// main 함수가 정의됨.
// main(sub); 실행 → main 함수가 sub 함수를 인자로 받음.
// main 함수 내부에서 value(); 실행 → value는 sub이므로 sub() 실행.
// sub() 실행 → console.log("i am sub") 출력.
// ---------------------------------------------------------------

// 2. 콜백함수의 활용

function repeat(count, callback) {
  for (let idx = 1; idx <= count; idx++) {
    callback(idx);
  }
}

repeat(5, function (idx) {
  console.log(idx);
});

repeat(5, function (idx) {
  console.log(idx * 2);
});

repeat(5, (idx) => {
  console.log(idx * 3);
});
