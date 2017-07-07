var number1 = 12;
// console.log('一開始number1 = ' + number1);

number1 = 25;
/*
console.log('現在number1 = ' + number1);
console.log(typeof number1);
*/

number1 = number1 + 1;
// console.log('現在number1 = ' + number1 + '型別是' + typeof number1);

number1 = number1 + '1';
// console.log(number1);
// console.log(typeof number1);

// 判斷
// console.log(1 === '1');
// console.log(5 !== '5');

// 判斷式
var number2 = 40;
var number3 = 20;

if (number2 > number3) {
    console.log('number2有大於number3');
} else if (number2 < number3) {
    console.log('number2有小於number3');
} else {
    console.log('number2等於number3');
}

console.log(number2 < number3);

console.log(typeof true);

var list = [1, 5, 10, 15, 'text'];

console.log(list);
console.log(list[4]);

console.log(list.length); //5

//迴圈 for
for (var i = 0; i < list.length; i++) {
    console.log(list[i]); //印出 
}

//function 方法
function addNumber(a, b) {
    var number = a + b;
    console.log(number);
}

addNumber(10, 50);

//物件
/*var dog = {
    name: '小黃',
    age: 6,
    breed: '黃金獵犬',
    hasPuppy: true

};
console.log(dog);
console.log(dog.name);*/


var Dog = function (name, age, breed, hasPuppy) {
    this.name = name;
    this.age = age;
    this.breed = breed;
    this.hasPuppy = hasPuppy;
}

var dog1 = new Dog('小黃', 10, '黃金獵犬', 'true');
var dog2 = new Dog('小白', 50, '黃金獵犬', 'true');
var dog3 = new Dog('小白', 70, '黃金獵犬', 'true');

var dogs = [dog1, dog2, dog3];
console.table(dogs);
console.log(dog2);
