// 1. spread 연산자
// -> Spread : 흩뿌리다, 펼치다 라는 뜻
// -> 객체나 배열에 저장된 여러개의 값을 개별로 흩뿌려주는 역할

let arr1 = [1, 2, 3];
// let arr2 = [4, arr1[0], arr1[1], arr1[2], 5, 6];
//                      ↓
let arr2 = [4, ...arr1, 5, 6];
// console.log(arr2);
//--==>> [4, 1, 2, 3, 5, 6]

let obj1 = {
  a: 1,
  b: 2,
};

let obj2 = {
  ...obj1,
  c: 3,
  d: 4,
};

// console.log(obj2);

function funcA(p1, p2, p3) {
  console.log(p1, p2, p3);
}

funcA(...arr1);

// 2. Rest 매개변수
// -> Rest는 나머지 , 나머지매개변수

function funcB(one, two, ...rest) {
  // rest 매개변수가 맨 뒤에 와야된다.
  console.log(rest); // rest 이름은 바뀌어도된다. (ex:ds,args 등)
}

funcB(...arr1);
