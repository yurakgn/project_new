// let salaries = {
//     John: 100,
//     Anna: 160,
//     Pete: 130,
// }

// function sum(obj) {
//     let i = 0;
//     for (let key in obj) {
//         i += obj[key];
//     }
//     return i;
// }

// console.log(sum(salaries));

// delete salaries.John;
// delete salaries.Anna;
// delete salaries.Pete;

// console.log(sum(salaries));

let menu = {
    width: 200,
    height: 300,
    title: 'My menu',
    height2: 350,
};


function multiplyNumeric(obj) {
    for (let key in obj) {
        if (Number.isInteger(obj[key])) {
            obj[key] *= 2;
            console.log(obj[key]);
        }
    }
}

multiplyNumeric(menu);

console.log(menu);


const obj = Object.create(objPtoto)



