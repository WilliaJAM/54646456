const num1 = 7;
const num2 = 3;

function suma(a, b) {
   let suma =  a + b;
   console.log(suma);
   return
}
suma(num1, num2);
console.log(`Hola`);

function restar(a, b) {
   let resta = a - b 
   console.log(`${resta}`);
}
restar(num1 ,num2);

class Mascota {

   constructor (nombre , edad , raza){
      this.nombre = nombre
      this.edad = edad
      this.raza = raza
   }

}

let mascota1 = new Mascota (`William`, 12 , 'Perro');
console.log(mascota1);

class Pet2 extends Mascota {
   constructor(nombre , edad , raza, ubicacion){
      super(nombre, edad, raza)
      this.ubicacion = ubicacion
   }
   suma(){
      let suma = 1 + 2;
      console.log(suma); 
   }
}
let nose  = new Pet2 ('nombre' , 'edad ', 'raza', 'ubicacion');