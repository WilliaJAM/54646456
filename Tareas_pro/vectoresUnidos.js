const array1 = []
const array2 = []
const maxDatos = 5;

function agregarDato() {
    const recibirInput = document.getElementById('placeholder1');
    const numero = parseInt(recibirInput.value);
    if(numero){
        array1.push(numero);
        recibirInput.value = '';
        console.log(array1);
        alert("Numero agregado");
       
    }

}
function agregarDato2() {
    const recibirInput = document.getElementById('placeholder2');
    const numero = parseInt(recibirInput.value);
    if(numero){
        array2.push(numero);
        recibirInput.value = '';
        console.log(array2);
        alert("Numero agregado");
       
    }
}

function unionArrays() {
    const union = array1.concat(array2);
    function comparar(a , b) {
        return a - b;
    }
    
    union.sort(comparar)
    console.log(parseInt(union));
  
    if(union.length === 10){
        document.getElementById("orden").innerHTML=(`Numeros: ${union}`);
        document.getElementById('button2').disabled = false;
    }else{
        alert("Debe de ingresar por lo menos 5 numeros en ambos arreglos");

    }

}
// Definimos un array de ejemplo
const numeros = [2,4,56,9];

// Usamos el método reduce para sumar los elementos del array
const suma = numeros.reduce((total, actual) => total * actual, 0);

console.log("La suma de los elementos es:", suma); // Salida: La suma de los elementos es: 15

