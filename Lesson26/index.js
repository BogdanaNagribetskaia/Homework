const shopList = [
  {
    name: "Bread",
    price: 16,
    isBought: false,
    quantity: 4,
  },
  {
    name: "Meat",
    price: 80,
    isBought: false,
    quantity: 2,
  },
  {
    name: "Butter",
    price: 56,
    isBought: false,
    quantity: 6,
  },
  {
    name: "Chocolate",
    price: 35,
    isBought: true,
    quantity: 3,
  },
];

// !Вычисление Total,Amount
// function calculateTotalAmount(list) {
//   return list.reduce((total, product) => {
//     total = total + calculateAmount(product);
//     return total;
//   }, 0);
// }
// console.log(calculateTotalAmount(shopList));

// function calculateAmount(product) {
//   return product.price * product.quantity;
// }
// console.log(calculateAmount(shopList[0]));

// !For Each
// !Вывод списка
// for (let i = 0; i < shopList.length; i++) {
//   console.log(shopList[i]);
// }
// shopList.forEach(function (products) {
//   console.log(products);
// });
// shopList.forEach((products) => console.log(products));

// !Push/pop
// shopList.push({ name: "Biscuit", price: 25, isBought: true, quantity: 5 });
// console.log(shopList);
// shopList.pop();
// console.log(shopList);

// !Map
// const newList = shopList.map(
//   (product) => `${product.name} (${product.price * product.quantity})`
// );
// console.log(newList);

// !Filter
// const expensive = [];
// for (let i = 0; i < shopList.length; i++) {
//   if (shopList[i].price >= 30) {
//     expensive.push(shopList[i]);
//   }
// }
// console.log(expensive);

// const expensive = shopList.filter(products => products.price >= 30);
// console.log(expensive);

// !Reduce
// let amount = 0;
// for (let i = 0; i < shopList.length; i++) {
//   amount += shopList[i].quantity;
// }

// console.log(amount);

// const amount = shopList.reduce((total, products) => {
//   return total + products.quantity;
// }, 0);
// console.log(amount);

// const amount = shopList.reduce(
//   (total, products) => total + products.quantity,
//   0
// );
// console.log(amount);

// !Find
// const bread = shopList.find((products) => products.name === "Bread");
// console.log(bread);

// !FindIndex
// const breadIndex = shopList.findIndex((products) => products.name === "Bread");
// console.log(breadIndex);
