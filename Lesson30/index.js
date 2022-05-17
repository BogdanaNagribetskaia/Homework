// !Запитай у користувача його вік і визначи, ким він є: дитиною (0-11), підлітком (12-17), дорослим (18_59) або пенсіонером (60 ...), передбач можливість введення невірних даних.
// let ageUser = prompt("Введите свой возраст: ");
// if (ageUser >= 0 && ageUser <= 100 && ageUser !== null && ageUser !== "") {
//   if (ageUser >= 0 && ageUser <= 11) {
//     alert("Вы ребенок)");
//   } else if (ageUser >= 12 && ageUser <= 17) {
//     alert("Вы подросток");
//   } else if (ageUser >= 18 && ageUser <= 59) {
//     alert("Вы взрослый человек)");
//   } else if (ageUser >= 60) {
//     alert("Вы пенсионер");
//   }
// } else {
//   alert("Вы ввели неправильные данные!");
// }

// !Запитай у користувача число від 0 до 9 і виведи йому спецсимвол, який розташований на цій клавіші (1 !, 2 @, 3 # і т. д).
// let numberUser = prompt('Введите число от 0 до 9:');
// switch (+numberUser) {
//   case 1:
//     alert('Спецсимвол !');
//     break;
//   case 2:
//     alert('Спецсимвол @');
//     break;
//   case 3:
//     alert('Спецсимвол #');
//     break;
//   case 4:
//     alert('Спецсимвол $');
//     break;
//   case 5:
//     alert('Спецсимвол %');
//     break;
//   case 6:
//     alert('Спецсимвол ^');
//     break;
//   case 7:
//     alert('Спецсимвол &');
//     break;
//   case 8:
//     alert('Спецсимвол *');
//     break;
//   case 9:
//     alert('Спецсимвол (');
//     break;
//   default:
//     alert('Вы ввели неправильные данные!');
// }

// !Запитай у користувача суму покупки і виведи суму до оплати зі знижкою: від 200 до 300 - знижка буде 3%; від 300 до 500 - 5%; від 500 і вище - 7%.

// let productPrice = +prompt('Сколько стоила покупка?');
// let priceAfterDicsount;

// if (productPrice >= 200 && productPrice < 300) {
//   priceAfterDicsount = productPrice - (3 * productPrice) / 100;
// } else if (productPrice >= 300 && productPrice < 500) {
//   priceAfterDicsount = productPrice - (5 * productPrice) / 100;
// } else if (productPrice >= 500) {
//   priceAfterDicsount = productPrice - (7 * productPrice) / 100;
// } else {
//   priceAfterDicsount = productPrice;
// }

// alert(`Ваша покупка после скидки: ${priceAfterDicsount}`);

// ! Виведи таблицю множення для всіх чисел від 2 до 9.
// ! Кожне число необхідно помножити на числа від 1 до 10.

// for (let i = 2; i <= 9; i++) {
//   console.log(`Таблица умножения для ${i}`);
//   for (let j = 1; j <= 10; j++) {
//     console.log(i * j);
//   }
// }
