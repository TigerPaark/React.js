// // 단락 평가
// //
// function returnFalse() {
//   console.log("False 함수");
//   return undefined;
// }
// function returnTrue() {
//   console.log("True 함수");
//   return 10;
// }

// //console.log(returnTrue() && returnFalse());
// console.log(returnFalse() && returnTrue());
// // 단락평가는 위에 코드를 예시로 들면
// // 첫번째 returnTrue값이 True and ?? 이거였을때 true이기때문에
// // 다음껏도 확인하느라 False 함수, True 함수 이 문구가 둘다
// // 출력이 되는데
// // 반대로 False가 앞에있으면 and해도 어차피 False이므로
// // 그냥 False 함수라는 문구와 함께 False가 출력되고
// // 마무리 된다. 이 방식을 단락 평가라고 한다.

// 단락 평가 활용 사례

function printName(person) {
  const name = person && person.name;
  console.log(name || "person의 값이 없음");
}

printName();
printName({ name: "박세진" });
//--==>> person의 값이 없음 / 박세진
