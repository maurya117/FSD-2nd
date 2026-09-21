// //1
// console.log(one(2));
// function one(n) {
//     return (n+1);
// }
// console.log(one(2));
// const two = function(n) {
//     return (n+2);
// };

//2

// setTimeout(function(){
//     console.log('CSE-34');}
// , 2000);

//3

// (function(){
//     console.log('Hello, World!')})();
// (function(){
//     console.log('database connected');
// })();

//4

// const Person = {
//     name: 'Tripti',
//     age: 20,
//     greet: function() {
//         console.log(`${Person.name} ${Person.age}`);
//     }
// };
// Person.greet();

//5

// const Person = {
//     name: 'Tripti',
//     age: 20,
//     greet: function() {
//         console.log(this);
//     }
// };
// Person.greet();
// Person.name='Tripti';
// Person.age=20;
// Person.greet();

//6

function show(){
    console.log(this);}
    show();

//7

const Person = {
    name: 'Tripti',
    greet: function() {
        return(this);
    }
};
Person.greet();
console.log(this);