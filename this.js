'use strict'

function Calculator() {
    this.read = function() {
        this.a = +prompt('a=', '0');
        this.b = +prompt('b=', '0'); 
    },
    this.sum = function() {
        return this.a + this.b;
    },
    this.mult = function() {
        return this.a * this.b;
    }
};

let calculator = new Calculator();
calculator.read();

alert('Sum=' + calculator.sum());
alert('Mult=' + calculator.mult());

console.log(calculator);


function Accumulator(startingValue) {
    this.value = startingValue,
    this.read = function() {
        this.a = +prompt('Число =', '0');
        this.value = this.a + this.value;
        return this.value;
    }

    // this.startingValue + this.a
    // this.value = this.startingValue,
    // this.b = this.a
};

let accumulator = new Accumulator(1);

console.log(accumulator);

accumulator.read(); // прибавит ввод prompt к текущему значению
console.log(accumulator);
accumulator.read(); // прибавит ввод prompt к текущему значению
console.log(accumulator);

console.log(accumulator.value); // выведет сумму этих значений



let user1 = {
    name: 'Yury',
    money: 500,
    age: 35,
    likeColor: 'blue',

    [Symbol.toPrimitive](hint) {
        console.log(hint);
        return hint == 'string' ? this.name : this.money;
        
    }
};

let user1 = {
    name: 'Yury',
    money: 500,
    age: 35,
    likeColor: 'blue',

    toString () {
        return this.name;
    },

    valueOf() {
        return this.age;
    }
};



alert(user1);
alert(+user1);
alert(user1 + 5);


// console.log(user1[Symbol.toPrimitive] = function (hint) {
//             console.log(hint);
// });
// alert(user1);
// alert(+user1);
// alert(toString(user1) + 'asd');

