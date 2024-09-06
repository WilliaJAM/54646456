
// function leerEdad(){
//     let edadUsuario = document.getElementById("guardarEdad").value

//     if (edadUsuario>=18 && edadUsuario <=20) {
//         alert ('Edad aceptada');
//     }else {
//         alert ('Edad denegada');
//     }
// }
//_______________________________________________________________________________________

// function numeros() {
//     let number1 = document.getElementById("numero1").value
//     let number2 = document.getElementById("numero2").value
//    if (number1>number2) {
//     alert(` ${number1} es el mayor y ${number2} es el menor`);
    
//    } else {
//     if (number2>number1){
//         alert (`${number2} es mayor y ${number1} es el menor`);

//     }else{
//         if (number1===number2) {
//             alert(`Son iguales`);
//         }

//     }
//    }
// }

//_______________________________________________________________________________________________

// function numeroEnteroPositivo() {
//     let numeroUno = parseInt(document.getElementById("primerNumero").value);
//     document.getElementById('numeroPuesto').innerHTML=numeroUno;
//     const numeroAumentado = numeroUno + 1;
//     document.getElementById('numeroSumado1').innerHTML=numeroAumentado;
//     if (numeroUno<0) {
//         alert ("Numero no permitido debe de ser entero");
//     }
// }
//_______________________________________________________________________________________________________

// function salarioHorasExtras() {
//     let horasLaboradas = document.getElementById('horasLaboradas').value
//     let precio8hours = 5000;
    
//     if (horasLaboradas>8) {
//         let procedimiento1 = horasLaboradas - 8
//     let procedimiento2 =  procedimiento1 * 1000;
//     let procedimiento3 =procedimiento2 + precio8hours
//     document.getElementById('salario').innerHTML=procedimiento3
//     }else { 
    
//     if (horasLaboradas==8) {
//        alert("No trabajo horas extra");
//     }
//      }
//      }

//______________________________________________________________________________________________________

// function intercambioVar() {
//     let valorUno = document.getElementById('valorA').value
//     let valorDos = document.getElementById('valorB').value
//     let cambio = valorUno;
//     valorUno = valorDos;
//     valorDos = cambio;
//     document.getElementById('valor').innerHTML=valorUno
//     document.getElementById('valor2.1').innerHTML=valorDos

// }

//_______________________________________________________________________________________________________
// let nombreTrabajador = "Wilmer";
// let horaLaboral = 3200;
// let horaExtra = 4300;
// let horas = 8;

// if (horas>8) {
//     let proceso2 = horas - 8;
//     let proceso3 = proceso2 * horaExtra;
//     let proceso4 = horaLaboral * 8;
//     let proceso5 = proceso3 + proceso4;
//     let descuento = proceso5 - 0.5;
//     let descuento2 = descuento - 0.1 * 100;
//     let descuento3 = descuento2 + 0.8;
//     console.log(`El precio total a pagar es $${Math.trunc(descuento3)} al Trabajador ${nombreTrabajador}`);
// } else {
//     let proceso6 = 8 * horaLaboral;
//     let descuentoUno = proceso6 - 0.5;
//     let descuentoDos = descuentoUno - 0.1 * 100;
//     let descuentoTres = descuentoDos + 0.8
//     console.log(`No trabajo ${nombreTrabajador} horas extra la paga es $${Math.trunc(descuentoTres)}`);
// }

//______________________________________________________________________


// let hora = prompt("Ingresa el dia LOL");
// switch (hora) {
//     case '1':
//         document.write("Es lunes zzzzz <br>");
//         let algo = prompt('Escribe ""hola"');
//         if (algo === "hola") {
//             document.write("Bien crack");
            
//         }else{
//             document.write("Ala sioguasddsa");
//         }
//         break;
//         case '2':
//             document.write("Es martes zzzzz");
//         break;
//         case '3':
//             document.write("Es miercoles :)");
//         break;
//         case '4':
//             document.write("Es jueves god");
//         break;
//         case '5':
//             document.write("Es viernes siasias");
//         break;
//         case '6':
//             document.write("Es sabado de fortinaiti");
//         break;
//         case '7':
//             document.write("DESCANSO MUY GOOD")
//         break;

//     default:
//         document.write("Vives en marte? por que no existe este dia XD");
//         break;
// }
//__________________________________________________________
// let numero = 1
// let numDos = 1
// function contador() {
//     // while (numero<=10) {
//     //     const suma = numero ++;
//     //     let mostrar = document.write(`Numero <br>${suma}`);
//     //     console.log(mostrar);
    
//     // }
//     // do {
//     //     const suma = numero++;
//     //     document.write(`${suma}`);
//     // } while (numero<=10);
//     for (numero; numero <= 10; numero++) {
//         document.write(`Numero ${numero}<br>`);
//     }
// }

// function ciclos() {
// let input = parseInt (document.getElementById("placeholderCiclos").value)
// let inputBreak = parseInt (document.getElementById("break").value)

// if(input >=101){
//     alert(`No sobre pases el limite pls`);

// } else if(input < 0){
//     alert(`No sobre pases el limite pls`);
// }else{
//     for (input; input<=100; input++ ) {
//         console.log(input);
//         console.log(`Numero: ${input}`)
//     }

// }
// }
//____________________________________________________________
//Manejando arrays
// let array = [];
// function agragandDatosArreglos(){
//     let input = document.getElementById("input").value 
//     array.push(input);
    

// }

// function mostrar() {
//     document.getElementById("hola").innerHTML=(`${array}`);
//     document.getElementById("hola2").innerHTML=(array.length);
//     console.log(array);
//     //  Esta cosita de la inventaste sdhaksdh siiii soy un genio lo des if y tambien todooo jajajajaj
//     if (array.length == 0) {
//         alert(`El array esta vacio`);
//     }
// }
// function eliminar() {
//     if (array.length == 0) {
//         alert(`Presiona "mostrar" para ver los resultados`);
//     }
    
// }

// function llamarElemento() {
//     let input = document.getElementById("llamar").value
//     document.getElementById("llamar2").innerHTML=(array[input]);
    
// }
// let objeto = {
//     nombre : 

// }


function Objeto(nombre, apellido, edad) {
    this.nombre = nombre ,
    this.apellido = apellido,
    this.edad = edad
}
function crear() {
    let uno = document.getElementById("placeholder").value
    let dos = document.getElementById("placeholder2").value
    let tres = document.getElementById("placeholder3").value
    if (uno != '' && dos != '' && tres != '') {
        let crear = new Objeto(uno, dos, tres);
        console.log(crear);
        let asd = JSON.stringify(crear);
        let asds = JSON.parse(asd)
        localStorage.setItem('json', JSON.stringify(asds));
        console.log(asds)

        
    }else{
        alert('Llene todos los campos')
    }
    


}

