// Створіть об'єкт calculator з наступними методами:
// read(a, b) - приймає два аргумента і зберігає їх як властивості об'єкта,
// sum() - повертає сумму збереженних значень (з перевіркою на наявність властивостей в об'єкті),
// mult() - перемножає збереженні значення і повертає результат (з перевіркою на наявність властивостей в об'єкті),
// винесіть перевірку на наявність властивостей в об'єкті в окремий метод exist().

// Якщо вказані властивості в обʼєкті відсутні (тобто метод exist повертає false),
// методи sum і mult мають повертати рядок 'No such propeties'

// const calculator = {
//     name : [1,2],
//     read(a,b){
//         this.num1 = a;
//         this.num2 = b;
//     },
//     sum(){
//         if (this.exist()){
//             return this.num1 + this.num2;
//         }else{
//             return 'No such propeties';
//         }
        
//     },
//     mult(){
//         if (!this.exist()){
//             return 'No such propeties';
//         }
//         return this.num1 * this.num2;
//     },
//     exist(){
//         if (this.num1 && this.num2){
//             return true;
//         }else{
//             return false;
//         }
//     },
// }

// calculator.read(2,5);
// console.log(calculator);
// console.log(calculator.sum());
// console.log(calculator.mult());
// console.log(calculator.exist());

//!-------------------------------------------------
// Напишіть функцію calcTotalPrice(fruits, fruitName),
// яка приймає массив об'єктів (fruits) і рядок з назвою фрукта (fruitName).
// Функція рахує і повертає загальну вартість фрукта
// з таким ім'ям, ціною та кількістю з об'єкта.

// Зверніть увагу, що в масиві може бути кілька обʼєктів з однаковою 
// назвою фрукта, це також треба урахувати.

// const fruits = [
//     { name: "Яблуко", price: 45, quantity: 7 },
//     { name: "Апельсин", price: 60, quantity: 4 },
//     { name: "Банан", price: 125, quantity: 8 },
//     { name: "Груша", price: 350, quantity: 2 },
//     { name: "Виноград", price: 440, quantity: 3 },
//     { name: "Банан", price: 125, quantity: 3 },
//   ];

// function calcTotalPrice(arr, fruitName){
//     let sum = 0;
//     for (const fruit of arr){
//         if (fruit.name === fruitName){
//             sum += fruit.price * fruit.quantity;
//         }
//     }
//     return sum;
// }
// console.log(calcTotalPrice(fruits, 'Банан'));

//!-------------------------------------------------
// Створіть телефонну книгу - об'єкт phonebook,
// у якого є властивість contacts (список контактів)
// та методи управління книгою:
// add(data) - приймає об'єкт data, де зберігається
// name, email, category, id, createdAt
// (name i email - обов'язкові параметри, які треба передавати
// при додаванні нового контакта,
// category - може передаватись чи ні, якщо ні - має
// приймати значення "default",
// id та createdAt генеруються відповідними методами:
// generateId() і getDate());
// *не забудь додати перевірку, якщо контакт з таким ім'ям чи імейлом вже є - ми його не додаємо
// list() - виводить список контактів у вигляді таблиці;
// filtered(category) - фільтрує контактів по обраній категорії (друзі, робота і т.д.)
// delete(name) - видаляє контакт з заданим ім'ям;
// updateName(oldName, newName) - зиінює ім'я контакта;

// const phonebook = {
//     contacts: [],
//     add(data) {
//         this.contacts.push({
//             name: data.name,
//             email: data.email,
//             category: data.category || 'default',
//             id: this.generateId(),
//             createdAt: this.getDate(),
//         });
//     },
//     list() {
//         console.table(this.contacts);
//     },
//     filtered(category) {
//         const filt = [];
//         for (const contact of this.contacts){
//             if (contact.category === category){
//                 filt.push(contact);
//             }
//         }
//         return filt;
//     },
//     delete(name) {
//         for (let i = 0; i < this.contacts.length; i++){
//             if (this.contacts[i].name === name){
//                 this.contacts.splice(i,1);
//             }
//         }
//     },
//     updateName(oldName, newName) {
//         for (const contact of this.contacts){
//             if (contact.name === oldName){
//                 contact.name = newName;
//             }
//         }
//     },

//     generateId() {
//       return "#" + Math.random().toString(36).substring(2, 9);
//     },
//     getDate() {
//       return Date.now();
//     },
//   };

//   phonebook.add({
//   name: "Mango",
//   email: "mango@mail.com",
//   category: "friends",
// });

// phonebook.add({
//   name: "Poly",
//   email: "poly@hotmail.com",
// });
// phonebook.add({
//   name: "Katy",
//   email: "katy@hotmail.com",
//   category: "friends",
// });

// console.log(phonebook.contacts);
// phonebook.list();
// console.table(phonebook.filtered('friends'));
// phonebook.delete('Katy');
// phonebook.list();
// phonebook.updateName('Poly','Max');
// phonebook.list();