// 1. 구조 분해 할당
let arr = [1, 2, 3];

// let one = arr[0];
// let two = arr[1];
// let three = arr[2];
// 불편

//          ↓

let [one, two, three, four = 4] = arr;
// console.log(one, two, three, four);
//--==>> 1 2 3 4
// 이거를 배열의 구조 분해 할당이다!

// 2. 객체의 구조 분해 할당
let person = {
  name: "박세진",
  age: 27,
  hobby: "축구",
};

let { age: myAge, hobby, name, extra = "hello" } = person;

// 3. 객체 구조 분해 할당을 이용해서 함수의 매개변수를 받는 방법
const func = ({ name, age, hobby, extra }) => {
  console.log(name, age, hobby, extra);
};

func(person);
