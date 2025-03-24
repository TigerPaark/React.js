// promise는
// 비동기 작업을 효율적으로 처리할 수 있도록 도와주는 자바스크립트 내장 객체
// 비동가 작업을 감싸주는 객체이다
// 효능 : 비동기 작업 실행, 상태 관리, 결과 저장

// promise 3가지 상태
// 대기 : 아직 작업이 완료되지 않은 상태
// 성공 : 비동기 작업이 성공적으로 마무리 된 상태
// 실패 : 비동기 작업이 실패한 상태

// 대기 -> 성공으로 간다면 상태가 해결되었다라는 의미에서 해결(resolve)라하고
// 대기 -> 실패로 간다면 실패되었다라고 의미에서 거부(reject)라고 한다.

function add10(num) {
  const promise = new Promise((resolve, reject) => {
    // 비동기 작업 실행하는 함수
    // executor

    setTimeout(() => {
      if (typeof num === "number") {
        resolve(num + 10);
      } else {
        reject("num이 숫자가 아닙니다.");
      }
      //console.log("안녕");
      // resolve("안녕");
      //reject("왜 실패했는지 이유..");
    }, 2000);
  });
  return promise;
}

// then 메서드
// -> 그 후에

//promise.then((value) => {
//  console.log(value);
//});
// then 메서드는 비동기 작업 결과를 언제든지 불러와서 출력할 수 있다.
// resolve는 출력되지만 reject는 오류가 난다.

//promise.catch((error) => {
//  console.log(error);
//});
// catch는 오류를 출력을 해준다.

// ※ Promise Chaining
//promise
//  .then((value) => {
//    console.log(value);
//  })
// .catch((error) => {
//    console.log(error);
//  });
// ----- 이렇게 합쳐서 써줘도 된다.

add10(0)
  .then((result) => {
    console.log(result);
    return add10(result);
  })
  .then((result) => {
    console.log(result);

    return add10(undefined);
  })
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
