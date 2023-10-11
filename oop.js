class Human{
    constructor(name, age){
        this.name = name,
        this.age = age
    }

    sayHi(){
        console.log(`This human ${this.name} says hello`)
        return this
    }

    sayGoodbye(){
        console.log(`This human ${this.name} says goodbye`)
        return this
    }
}

const human1 = new Human('Matt', '31')
const human2 = new Human('Naomi', '30')

human1.sayHi().sayGoodbye()
human2.sayHi().sayGoodbye()