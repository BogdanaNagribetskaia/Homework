let userName = "Артур";

let userYears = +prompt(`Привет, ${userName}, введи год, когда ты родился?`);
alert(`Тебе ${2022 - userYears}`);

let squarePerimetr = +prompt(
  "Посчитаем периметр квадрата? Введи длинну стороны своего квадрата"
);
alert(`Периметр твоего квадрата ${squarePerimetr * 4}`);

let areaCircle = +prompt("Посчитаем площадь круга? Введи радуис");
alert(`Площадь твоего круга ${Math.PI * (areaCircle * areaCircle)}`);

let mooving = confirm("Давай спланируем поездку в Одессу?");
if (mooving == true) {
  let lenght = +prompt("Укажи в км какое расстояние нужно проехать");
  let time = +prompt("Сколько часов планируешь потратить на дорогу??");
  let speed = lenght / time;
  alert(
    `Тебе нужно ехать со скоростью - ${speed} км/час. Счастливого пути, ${userName}!`
  );
} else alert("Ну и ладно");
