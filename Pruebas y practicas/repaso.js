// console.log("Hoal soy un perro que habla");
// const edad = 22
// let nombre = "Holman"

// if (edad<=18) {
//     console.log("Es menor de edad");
// } else {
//     console.log("Es mayor de edad");
// }







// function plata(plataInicial,PlataSuma) {
//     return plataInicial+PlataSuma
// }
// console.log(plata(100000,200));


// for (i = 0; i<= 10; i++) {
    
    
// }







//practica de ParseInt con prompt


// const numeroUno = parseInt(prompt ("Pon un numero 1 para sumarlo"));
// const numeroDos = parseInt(prompt ("Ingrese el seundo numeor"));

// const sumaTotal = numeroDos + numeroUno
// console.log(`El resultado final es: ${sumaTotal}`)



//Ejemplo de un array con el metodo push
// const frutas = []
// const fruta = prompt('🍒 Feria Market 🍉 ¿qué fruta desea comprar?')

// frutas.push(fruta)

// while (confirm('¿Desea agregar otro elemento al 🛒?')) {
//     const fruta = prompt('¿qué fruta desea comprar?')
//     frutas.push(fruta)
// }

// console.log('Ustede compró: ')
// for (let fruta of frutas) {
//     console.log(fruta)
// }
// ----------------------------------------------------------------------------------------------------

//Ejemplo de como usar un afuncion y vincularla el archivo html para que muestre un saludo con el nombre incluido. Lo muestre
// por medio de un alert y tambien borre el nombre que esta en el cuadro de texto y tambien que muestre el nombre en el titulo osea
// aqui se menciono que resultado aparecia en la pantalla como titulo lo que hace innerHTML es reemplazar el titulo (se llama respuesta)por el nombre o cualquier 
// cosa ingresada o puesta.
// function saludar() {
//     const nombreUsuario = document.getElementById('saludo').value 
//     document.getElementById('respuesta').innerHTML=nombreUsuario
//     alert (`hola como esta ${nombreUsuario}`); 
// }
// function borrar() {
//    document.getElementById('saludo').value = ''
// }
//    ---------------------------------------------------------------------------------------------------------- 
// Ejemplo de como usar funciones anclado a un archivo html.

function numero1() {
    return parseInt(document.getElementById('numero1').value)
}
function numero2() {
    return parseInt(document.getElementById('numero2').value)
}
function sumar() {

    document.getElementById('respuesta').innerHTML= numero1()+numero2()
    
    
}
function restar() {
  
    document.getElementById('respuesta').innerHTML=numero1()-numero2()
   
}
function multiplicar() {
    
    document.getElementById('respuesta').innerHTML= numero1()*numero2()
}
function dividir() {
  
     
    document.getElementById('respuesta').innerHTML= numero1()/numero2()
}

function borrar() {
       document.getElementById('numero1').value = ''
       document.getElementById('numero2').value = ''
    }
 








