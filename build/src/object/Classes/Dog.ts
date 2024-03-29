import Animal from './Animal'

export default class Dog extends Animal {
    public bark() {
        console.log(`${this.name} aboie.`)
        this.getColor()
    }
}