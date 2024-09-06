
// agregar();

// console.log(`area: ${area(10)}`);
// function llamar() {
//     let input = prompt('Llame');
//     alert("llamdo" + miArray[input]);
// }

// import { area, agregar, miArray } from "./asdsad.js";

// function saludar(nombre = "Persona") {
//     console.log(`Hola ${nombre}`)
    
// }

// saludar("William");
// let saludo = (nombrwe)=>{console.log(`hola ${nombrwe} version 2`)}
// saludo('William');
let fecha = new Date();
console.log(fecha)
// console.log(fecha.getDay());
// console.log(fecha.getDate(0));
// console.log(fecha.getMonth());
// console.log(fecha.getFullYear());
console.log(fecha.setFullYear(2002))
let arrayDias = ['Domingo', 'Lunes', 'Martes',' Miercoles', 'Jueves', 'Sabado'];
let arrayMes = ['Enero', 'Febrero', 'Marzo' , 'abril', 'mayo', 'junio', 'julio', 'agoto', 'septiembre', 'octubre', 'noviembre', 'Diciembre'];
// console.log(arrayDias[fecha.getDay()]);

console.log(arrayMes[fecha.getMonth()]);
console.log(`${arrayDias[fecha.getDay()]}, ${fecha.getDate()} ${arrayMes[fecha.getMonth()]}  ${fecha.getFullYear()}`);

let hora = new Date();
console.log(hora.toLocaleTimeString());
console.log(hora.getTime());
console.log(Date.now());
console.log(+hora);

// let fechaTimeStamp = new Date(0);
// console.log(fechaTimeStamp);
// function saludar(){
//     console.log(23)
// }
// setTimeout(saludar, 10000, );

let nuemro = 5;
// function nose() {
//     console.log(`Hoal ${nuemro}`);
//     --nuemro;
//     if (nuemro === 0) {
//         clearInterval(tiempoPlay);
//     } else if (nuemro == 0){
//         console.log(`xdxdxdxdxd`);

//     }
// }


let fechaHtml = document.getElementById('fecha');
let relojaHtml = document.getElementById('reloj');
let hope = document.getElementById('hope');
//este ejemplo pone que un array tiene los dias y los meses ambas cosas empiezan de 0 osea domingo 00, lunes 1 y asi sucesivamente lo mismo 
//para los meses y esos coincide con el indice de los array siempre el array empieza de 0 (el inidice). en tonces al poner datos dentro 
// los .getDay y etc esos numero llaman al elemento con ese nuemro eje, arrayDia[fechaJs.getDay()]} este esta con la fecha actual osea si hoy es
//martes entonces en le array seria 2 y el dato del getDay esa de arriba deberia ser 2 para que llame al elemento del array.
let fechaJs = new Date ();
let arrayDia = ['Domingo', 'Lunes', 'Martes',' Miercoles', 'Jueves','Viernes', 'Sabado']
// let arrayDia = ['Domingo' (0), 'Lunes' (1), 'Martes' (2),' Miercoles' (3), 'Jueves' (4), 'Viernes (5)', 'Sabado' (6)] esto es del concepto explicado 
//para que quede mas claro es como visual es mejor.

let arrayMeses = ['Enero', 'Febrero', 'Marzo' , 'abril', 'mayo', 'junio', 'julio', 'agoto', 'septiembre', 'octubre', 'noviembre', 'Diciembre'];
//lo mismo aqui en los mese enero 0 y asi sucesivamente (me da pereza hacer todo eso)

fechaHtml.innerHTML = `${arrayDia[fechaJs.getDay()]} ${fechaJs.getDate()} de ${arrayMeses[fechaJs.getMonth()]} ${fechaJs.getFullYear()}`
setInterval(()=>{
    let hora = new Date ()
    relojaHtml.innerHTML = `${hora.toLocaleTimeString()}`//toLocaleTimeString es que muestra la hora en el formato deseado ejemplo como estoy en colombia me mostrara la hora actual de colombia.
}, 1000)

function mostrarMelo() {
    let tiempoPlay = setInterval(()=>{
        // alert(`Hoal ${nuemro}`);
        hope.innerHTML = `${nuemro}`
        --nuemro;
        if (nuemro == 0) {
            clearInterval(tiempoPlay);
        hope.innerHTML = `Let's Go`;
        window.open("https://www.youtube.com/watch?v=GPVIxpW9N8s");
           
        }
        if( nuemro < 0){
            clearInterval(tiempoPlay);
        }
    }, 1000);
}



let geet = document.getElementById(`heading1`);

function iniciar() {
    let hola34= document.getElementById('user').value; 
    let hola35=document.getElementById('user2').value; 

    let tiempoContador =setInterval( () => {
    geet.innerHTML = `${hola34}`
    hola34++;
    if(hola34 > hola35){
        clearInterval(tiempoContador);
    } 
}, 1000);
if(hola34 > hola35){
    flcehaFunction()
}
    
}


let flcehaFunction = () => {
        let hola34= document.getElementById('user').value; 
        let hola35=document.getElementById('user2').value; 
    
            let tiempoContador =setInterval( () => {
                geet.innerHTML = `${hola34}`
                hola34--;
                if(hola34 < hola35){
                    clearInterval(tiempoContador);
                } 
                }, 1000);
    }

    let numeroStart = 0;
    let detener = ()=>{
        
        let confirmBtn = confirm(`Detener?`);
    }
    function contador() {
        let contadorBoton = setInterval(() =>{
        hope.innerHTML = `${numeroStart}`;
        numeroStart++;
        }, 1000);
    }
//Time Stamp es como la cantidad de milisegundos transcurridos del año 1970 hasta la actualidad.
let fechactual = new Date();
console.log(fechactual);
console.log(Date.now());
console.log(+fechactual); //otra forma de hacer un time stamp
//con para metros Date (año , mes , fecha, horas, min , segundos, ms) si es mucho texto como minimo el años y el mes deben estar expresados

let anyo = prompt(`Inster years`);
let month  = prompt(`Month insert`);
let date = prompt(`Insert Date`)
let fechaConParametros = new Date (anyo, month, date );
console.log(fechaConParametros);
// setters con set y algo se puede cambiar la fecha el dia , año, mes con los set.Loquesea que valla en el visual code ej . setFullYear(el año que desea ingresar luego la fecha antes puesta se actualiza por la fecha ingresda aqui.)
let fechaConParametros2 = new Date (1990 , 4, 12 ,2 ,3 );

fechaConParametros2.setFullYear(2025);
console.log(fechaConParametros2)