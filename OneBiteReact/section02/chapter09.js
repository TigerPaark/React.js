// 배열 메서드 3. 변형
// 5가지 배열 변형 메서드

// 1. fitter
// 기존 배열에서 조건을 만족하는 요소들만 필터링하여 새로운 배열로 반환

let arr1 = [
  { name: "박세진", hobby: "테니스" },
  { name: "김효빈", hobby: "테니스" },
  { name: "홍길동", hobby: "축구" },
];

const tennis = arr1.filter((item) => {
  if (item.hobby === "테니스") return true;
});

//console.log(tennis);

// 2. map
// 배열의 모든 요소를 순회하면서, 각각 콜백함수를 실행하고 그 결과값들을 모여서 새로운 배열로 반환
let arr2 = [1, 2, 3];
const mapR = arr2.map((item, idx, arr) => {
  return item * 2;
});

// console.log(mapR);

let names = arr1.map((item) => item.name);
// console.log(names);
//--==>> 박세진', '김효빈', '홍길동']

// 3. sort
// 배열을 사전순을 정렬하는 메서드
let arr3 = ["b", "a", "c"];
arr3.sort((a, b) => {
  if (a > b) {
    // 앞에 숫자가 뒤에 보다 크면 양수 반환
    // b가 a 앞에 와라
    return 1;
  } else if (a < b) {
    // 뒤에 숫자가 앞에 보다 크면 음수 반환
    return -1;
  } else {
    // 같으면 0반환
    return 0;
  }
});
// 현재 오름차순이지만 조건을 반대로 해주면 내림차순도 가능하다!

// console.log(arr3);
//--==>> a,b,c

// 4. toSorted(가장 최근에 추가된 최신함수)
// 정렬된 새로운 배열을 반환하는 메서드
let arr5 = ["c", "a", "b"];
const sorted = arr5.toSorted();

//console.log(arr5);
//console.log(sorted);

// 5. join
// 배열에 모든요소를 하나의 문자열로 합쳐서 반환하는 그런 메서드
let arr6 = ["h1", "im", "winter"];
const joined = arr6.join(" ");
console.log(joined);
//--==>> h1 im winter
