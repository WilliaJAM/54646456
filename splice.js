

let array = ["frutas", "carbes", "aseo",1 ,2, 3, 4];

function agregar(nombre) {
    nombre = nombre.trim();
    if(nombre !== ""){
        array.push(nombre);
        console.log(array)
    }else{
        console.log("No")
    }
}
agregar("Guayaba");


array.splice(1 , 3);
console.log(array)


//Ejmplo de storage con nombre que se le puede poner y valor tambien.
function storag() {
    let loGuardado = document.getElementById("segau").value
let input = document.getElementById("asada").value

localStorage.setItem(input, loGuardado);
console.log("Guardado");
}

class Perro {
    static  contador = 0;
    constructor(nombre , raza, edad){
        this._nombre = nombre,
        this._raza = raza,
        this._edad = edad
        this._contador = Perro.contador ++;
    }
}
let sd = new Perro ("as", "a", 12);
let sd3 = new Perro ("as", "a", 12);
let sd4 = new Perro ("as", "a", 12);

console.log(Perro.contador)
dd