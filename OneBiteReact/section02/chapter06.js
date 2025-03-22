// 순회
// 배열 객체에 저장된 여러개의 값에 순서대로 하나씩 접근하는것을 말함

// 1.1 배열 순회
let arr = [1, 2, 3];
for (let i = 0; i < arr.length; i++) {
  //  console.log(arr[i]);
}

let arr2 = [4, 5, 6, 7, 8];
for (let i = 0; i < arr2.length; i++) {
  //   console.log(arr2[i]);
}

// 1.2 for of 반복문!!!!    // 배열에만 사용
for (let item of arr) {
  // arr 값 1,2,3이 item에 하나씩 들어가는 for문 구조이다.
  //  console.log(item);
}

// 2. 객체 순회
let person = {
  name: "박세진",
  age: 28,
  hobby: "축구",
};

//2.1 Object.keys 사용
// -> 객체에서 key 값들만 뽑아서 새로운 배열로 반환
let keys = Object.keys(person);

// for(let i =0; i<keys.length; i++){
//   console.log(keys[i]);
// }

for (let key of keys) {
  const value = person[key];
  // console.log(key, value);
}

// 2.2 Object.values
// -> 객체에서 value 값들만 뽑아서 새로운 배열로 반환
let values = Object.values(person);

for (let value of values) {
  //  console.log(value);
}

// 2.3 for in
for (let key in person) {
  // 객체에만 사용한다.
  const value = person[key];
  console.log(key, value);
}
