console.log('es6-classes!')

class Person {
    constructor(name='Anonymous', age=0) {
        this.name=name
        this.age=age
    }
    getDescription() {
        return `${ this.name } is ${ this.age } year(s) old`
    }
    getGreeting() {
        return `HI! I am ${ this.name }`
    }
}


// class Person {
//     constructor(name='Anonymous') {
//         this.name=name
//     }
//     getGreeting() {
//         // return 'Hi! '+ this.name
//         return `Hi! I am ${ this.name }!`
//     }
// }

// const me = new Person('rithika')
// console.log(me.getGreeting())
// const other = new Person()
// console.log(other.getGreeting())


// class Student extends Person{
//     constructor(name, age, major) {
//         super(name, age)
//         this.major = major
//     }
//     hasMajor() {
//         return !!this.major
//     }
//     getDescription() {
//         let description = super.getDescription()
//         if(this.major) {
//             description = `Their major is ${ this.major }`
//         }
//         return description
//     }
// }


// const me = new Student('rithika', 18, 'cse')
// console.log(me.hasMajor())
// console.log(me.getDescription())
// const other=new Student('jahnavi')
// console.log(other)
// console.log(other.hasMajor())
// console.log(other.getDescription())

class Traveller extends Person {
    constructor(name, age, homeLocation) {
        super(name, age)
        this.homeLocation = homeLocation
    }
    getGreeting() {
        let greeting = super.getGreeting()
        if(this.homeLocation) {
            greeting = greeting.concat(` I'm visiting ${ this.homeLocation }`)
        }
        return greeting
    }
}

const traveller1 = new Traveller('rithika', 18, 'korea')
console.log(traveller1)
console.log(traveller1.getGreeting())
console.log(traveller1.getDescription())

const Traveller2 = new Traveller(undefined, undefined,'nowhere');
console.log(Traveller2)
console.log(Traveller2.getGreeting())
console.log(Traveller2.getDescription())