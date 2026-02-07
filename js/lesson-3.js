// Знайдіть перше непарне число

// const numbers = [2, 1, 6, 8, 9, 10, 12];

// const findFirst = numbers.find(number => number % 2 !== 0);
// console.log(findFirst);

// const findFirst = (arr, num) => arr.find(elem => elem % num !== 0);
// console.log(findFirst(numbers, 3));

//!===============================

// Дано масив чисел [1, 2, 3, 4, 5]. 
// Застосуйте метод для обчислення суми елементів масиву.

// const numbers = [1, 2, 3, 4, 5];

// const sumArr = numbers.reduce((sum, elem) => sum + elem,0);
// console.log(sumArr);

// const sumArr = (arr,num) => arr.reduce((sum,elem) => sum + elem,num);
// console.log(sumArr(numbers,0));

//!===============================

// Завдання 12:
 // Напиши клас Client який створює об'єкт з властивостями login email.
 // Оголоси приватні властивості #login #email, доступ до яких зроби 
 // через геттер та сеттер login email

//  class Client {
//     #login;
//     #email;



//     set login(log){
//         if (log.trim() !== ""){
//             this.#login = log;
//         }
//     }

//     get login(){
//         return this.#login;
//     }

//     set email(em){
//         if (em.trim() !== "" && em.includes('@')){
//             this.#email = em;
//         }
//     }

//     get email(){
//         return this.#email;
//     }

//  }

//  const user = new Client();
//  user.login = 'skeler';
//  console.log(user.login);
// user.login = '';
//  console.log(user.login);
//  user.email = 'skeler@mail.com';
//   console.log(user.email);
//  user.email = '';
//   console.log(user.email);
//  user.email = 'skelermail.com';
//   console.log(user.email);
//   console.log(user);
  
//!===============================

  //  Наслідування у класах!
  // Cтворіть клас `Person`, який містить наступні властивості:
  //  - `name` - ім'я людини;
  //  - `age`- вік людини;
  //  - `gender` - стать людини;
  //  - `email`- електронна пошта людини.
  
  // Крім того, клас `Person` має мати метод `getDetails()`,
  // який повертає об'єкт з ім'ям, віком, статтю 
  //та електронною поштою людини.
  
  // 
  // Потім Створіть клас `Employee`, який розширює клас `Person` і містить наступні властивості:
  //  - salary - зарплата співробітника;
  //  - department - відділ, в якому працює співробітник.
  // Крім того, клас `Employee` має мати метод `getEmployeeDetails()`, який повертає об'єкт з зарплатою співробітника та відділом, в якому він працює.

// class Person {
//     name;
//     age;
//     gender;
//     email;

//     constructor(params){
//         this.name = params.name;
//         this.age = params.age;
//         this.gender = params.gender;
//         this.email = params.email;
//     }

//     getDetails(){
//         return {name: this.name,
//     age: this.age,
//     gender: this.gender,
//     email: this.email};
//     }
// }
// const data = {
//     name: 'Alex',
//     age: 26,
//     gender: 'Male',
//     email: 'Skeler@gmail.com'
// }
// const pers = new Person(data);
// console.log(pers);

// class Employee extends Person{
//     salary;
//     department;

//     constructor(params){
//         super(params);
//         this.salary = params.salary;
//         this.department = params.department;
//     }
//     getEmployeeDetails(){
//         return {salary: this.salary,department: this.department};
//     }
// }

// data.salary = 10000;
// data.department = 'GoIT';
// const empl = new Employee(data);
// console.log(empl);
// console.log(empl.getEmployeeDetails());
// console.log(empl.getDetails());


//!===============================

//Підрахунок кількості повторень
//Дано масив:
// const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
//Завдання: За допомогою reduce підрахуйте, скільки разів кожен фрукт зустрічається в масиві.
//Очікуваний результат:
//{
 // apple: 3,
 // banana: 2,
 // orange: 1
//}

// const countFruits = fruits.reduce((acc,fruit)=>{
//     acc[fruit] === undefined ? acc[fruit] = 1 : acc[fruit] += 1;
//     return acc
// },{});

// console.log(countFruits);

