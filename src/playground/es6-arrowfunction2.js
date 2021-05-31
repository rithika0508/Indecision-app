//arguments object
// const add = (a, b) => {
//     // console.log(arguments)
//     return a + b;
// }

// console.log(add(55,56))

//this key word

// const user = {
//     name:'Rithika',
//     cities: ['hyd', 'korea'],
//     printPlacesLived:  () => {
//         console.log(user.name)
//         console.log(user.cities)
//     }
// }
// user.printPlacesLived()

const multiplier = {
    numbers: [2,4,6],
    multiplyBy: 4,
    multiplication() {
        return this.numbers.map((num) => num * this.multiplyBy)
    }
    
}
console.log(multiplier.multiplication())