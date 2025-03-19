// 함수선언
let area1 = getArea(10, 20);
//                 ----인수
console.log(area1);
let area2 = getArea(30, 20);
console.log(area2);
let area3 = getArea(120, 200);
console.log(area3);

function getArea(width, height) {
  //               ---- 매개변수
  function another() {
    // 중첩 함수
    console.log("another");
  }

  another();
  let area = width * height;

  return area; // 반환값
}

// 자바스크립트는 호이스팅이라는 기능 때문에
// 호이스팅 -> 끌어올리다 라는 뜻
// 함수를 밑에 쓰여도 호이스팅(끌어올리기)덕분에 위로 올라간다.
