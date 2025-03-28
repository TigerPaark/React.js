// 1. 상수 객체
const animal = {
  type: "고양이",
  name: "나비",
  color: "black",
};

animal.get = 2; // 추가
animal.name = "가망이"; // 수정
delete animal.color; // 삭제

console.log(animal);

// 2. 메서드
// -> 값이 함수인 프로퍼티를 말함

const person = {
  name: "박세진",
  // 메서드
  sayHi() {
    console.log("안녕");
  },
};

person.sayHi();
person["sayHi"]();
