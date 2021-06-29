class Animales {
 
    constructor(nombre, edad, especie, tipo){
        //atributo this.nombre o edad
        this .nombre = nombre//variable
        this.edad = edad
        this.especie = especie
        this.tipo = tipo
    }
    //metodos
    habla(){
        return `El ${this.especie} hizo un sonido`
    }

    getEdad(){
        return `${this.nombre} tiene ${this.edad} años`
    }

} 

class Humanos extends Animales {

    constructor(nombre, edad, especie, tipo, apellidos, region) {
        super(nombre, edad, especie, tipo);
        this.apellidos = apellidos
        this.region = region
    }

    escribe(){
        return `Hola mi nombre es ${this.nombre} ${this.apellidos} y voy a escribirte algo genial`
    }
}


let gato = new Animales("felix,", 1 , "gato", "mamifero")
let perro = new Animales("Rex", 5, "perro", "mamifero")

let persona = new Humanos("Edwar", 34, "Humano", "mamifero", "Triana", "colombia")

/*console.log(gato.habla())
console.log(perro.habla())
console.log(perro.getEdad())*/
console.log(persona.escribe())
