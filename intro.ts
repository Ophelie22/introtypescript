// Typage après une const, let , var avec nomVariable: type
const greeting: string = 'Salut les Freki !'
console.log(greeting)

const number: number = 10.15
const boolean: boolean|number = 10

// Typage d'un tableau type[]
const arrayNumber: number[] = [10, 100, 200]
const arrayString: Array<string> = ['salut', 'les', 'freki']
// (number|string)[] = Tableau qui contient des entiers et/ou des chaine de caractères
const arrayMixed: (number|string)[] = [10, 100, 'salut', 'les', 'freki']

// Fonction classique
// Typage des paramètres et du retour de la fonction
function add(a: number, b: number): number {
    return a + b
}

// Fonction fléchée
// Typage des paramètres et du retour de la fonction
const substract = (a: number, b: number): number => {
    return a - b
}
console.log(substract(30, 10));

// Type any prend tous les types possible, utilisation à éviter (partout)
const any: any = 'salut'

// Interface User
// Propriété optionnelle avec "property?: type"
interface User {
    id: number
    name: string
    email: string
    birthday?: Date
}

// Utilisation de l'interface User pour typer une constante
const user: User = {
    id: 10,
    name: 'Jérémy',
    email: 'jeremy@email.fr'
}

console.log(user.birthday)

// Utilisation de l'interface comme retour de la fonction
const getUserById = (id: number): User => {
    return {
        id,
        name: 'Jérémy',
        email: 'jeremy@email.fr'
    }
}

// Tuples
const employee: [number, string, boolean] = [100, 'Jérémy', true]