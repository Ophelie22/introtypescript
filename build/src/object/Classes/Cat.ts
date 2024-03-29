import Animal from "./Animal"

export default class Cat extends Animal {
    public meow() {
        console.log(`${this.name} miaule.`)
    }
}