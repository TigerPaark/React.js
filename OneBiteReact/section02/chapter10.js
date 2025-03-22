// Date 객체와 날짜

// 1. Date 객체를 생성하는 방법
let date1 = new Date(); // Date를 생성자라고 한다.(지금시간이다)
// console.log(date1);
// --==>> 현재시간

let date2 = new Date("1997-01-07"); // 1997/01/07 / 1997,01,07
// console.log(date2);
//--==>> Date로 설정한 시간이 출력

// 2. 타임 스탬프
// 특정 시간이 "1970.01.01 00시 00분 00초"로 부터 몇 ms가 지났는지를 의미하는 숫자값
let ts1 = date1.getTime();
// console.log(ts1);
//--==>> 1742622825028

let date4 = new Date(ts1);
//console.log(date1, date4);
//--==>> 똑같은 시간

// 3. 시간 요소들을 추출하는 방법
let year = date1.getFullYear();
let month = date1.getMonth() + 1; // 자바에선 달이 -1로 나오니까 +1을 설정해줘야한다.
let date = date1.getDate();

let hour = date1.getHours();
let minute = date1.getMinutes();
let seconds = date1.getSeconds();

// console.log(year, month, date, hour, minute, seconds);
//--==>> 2025 2 22 14 56 14

// 4. 시간 수정하기
date1.setFullYear(2023);
date1.setMonth(2);
date1.setDate(30);
date1.setHours(23);
date1.setMinutes(59);
date1.setSeconds(59);

// console.log(date1);
//--==>> Thu Mar 30 2023 23:59:59 GMT+0900 (한국 표준시)

// 5. 시간을 여러 포맷으로 출력하기
console.log(date1.toDateString());
//--==>> Thu Mar 30 2023
console.log(date1.toLocaleString());
//--==>> 2023. 3. 30. 오후 11:59:59
