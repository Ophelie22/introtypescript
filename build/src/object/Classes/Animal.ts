import Pet from '../Interfaces/Pet'
import Vomit from '../Interfaces/Vomit'

export default class Animal implements Pet, Vomit {
    // "Ancienne" syntaxe
    /*protected name: string
    public color: string
    protected race: string
    public age: number*/

    // Constructeur
    /*constructor(name: string, color: string, race: string, age: number) {
        this.name = name
        this.color = color
        this.race = race
        this.age = age
    }*/

    // "Nouvelle" syntaxe
    constructor (
        protected name: string,
        private color: string,
        protected race: string,
        public age: number
    ) {}

    // Getter / Accesseur
    public getName(): string {
        return this.name
    }

    public getColor(): string {
        return this.color
    }

    // Setter / Mutateur
    public setColor(color: string): void {
        this.color = color
    }

    // Méthodes
    public walk(): void {
        console.log(`${this.name} marche.`)
    }

    public eat(): void {
        console.log(`${this.name} mange.`)
    }

    public sleep(): void {
        console.log(`${this.name} dort.`)
    }

    public puke(): void {
        console.log(`${this.name} vomit.`)
    }
}