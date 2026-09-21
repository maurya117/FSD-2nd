// "use strict";
// window.show = function () {
//   console.log(this === window);
// };window.show(); 
// show();        





// const Person = {
//     name: 'Tripti',
//     age: 20,
//     greet: function() {
//         return this.name;
//     }
// };
// let p1 = Person.greet;
// console.log(p1()); 





// const Person = {
//     name: 'Tripti',
//     age: 20,
//     greet: function() {
//         return this.name;
//     }
// };
// let p1 = Person.greet.bind(Person);
// console.log(p1());



const Person = {
    name: 'Tripti',
    greet() {
        console.log(this.name);
    }
};
setTimeout(Person.greet.bind(Person), 1000); // Tripti