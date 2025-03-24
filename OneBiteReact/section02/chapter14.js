// async/await

// async
// 어떤 함수를 비동기 함수로 만들어주는 키워드
// 함수가 프로미스를 반환하도록 변환해주는 그런 키워드

async function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        name: "박세진",
        id: "gkdltb2",
      });
    }, 1500);
  });
}

// await
// async 함수 내부에서만 사용이 가능 한 키워드
// 비동기 함수가 다 처리되기를 기다리는 역할

// async function printData() {
//   await getData().then((result) => {
//     console.log(result);
//   });
// }

async function printData() {
  const data = await getData();
  console.log(data);
}

printData();

// async와 await를 쓰면 부드럽게 비동기 처리가 가능하다.
// await는 async가 없으면 오류가 난다.
