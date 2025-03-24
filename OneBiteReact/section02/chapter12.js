// 비동기 처리
function orderFood(callback) {
  setTimeout(() => {
    const food = "제육";
    callback(food);
  }, 3000);
}

function cooldownFood(food, callback) {
  setTimeout(() => {
    const cooldownedFood = `식은 ${food}`;
    callback(cooldownedFood);
  }, 2000);
}

function freeze(food, callback) {
  setTimeout(() => {
    const freezed = `냉동된 ${food}`;
    callback(freezed);
  }, 1500);
}

orderFood((food) => {
  console.log(food);

  cooldownFood(food, (cooldownedFood) => {
    console.log(cooldownedFood);

    freeze(cooldownedFood, (freezed) => {
      console.log(freezed);
    });
  });
});
// 콜백 지옥이라고 한다.
// 다음시간에 promise를 활용하여 좀 줄이게 될 수 있다.
