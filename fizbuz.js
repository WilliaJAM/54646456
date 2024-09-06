
// function multiplo() {
//     const numberMulti = Number ( document.getElementById("inputMultiplo").value);
//     document.getElementById("inputMultiplo").value = "";
//     document.getElementById("inputMultiplo").focus();
//     //el if (){ solo ejecuta si es true} else {si no es true} entonces al poner solo un valor que da true ejecutaria auto la parte true por que es
//     //true no es necesaria especificar demas algo asi de pende del contexto y la tarea que se esta realizando pero es interesante
//     //otra mini aclaracion es que como la primera bloque del if solo ejecuta si es true entonces al poner un solo valor  que da true ejecutaria 
//     //la primera parte del if.
// if(procedimiento3(numberMulti)){
// console.log("FizzBuzz");
// }else if(procedimiento(numberMulti)){
//     console.log("Fizz");

// }else if(procedimiento2(numberMulti)) {
//     console.log("Buzz");
// }
// }
// function procedimiento(valor2){
//     let procedimiento = valor2 / 3; 
//     const valorEntero2 = Number.isInteger(procedimiento);
//     return valorEntero2;
// }
// function procedimiento2(valor3){
//     let procedimiento = valor3 / 5; 
//     const valorEntero2 = Number.isInteger(procedimiento);
//     return valorEntero2;

// }
// function procedimiento3(valor1){
//     return procedimiento(valor1) && procedimiento2(valor1);
// }

// function indeiceMasaCorporal() {
//     let pesoPersona = Number( document.getElementById("inputMultiplo").value);
//     let alturaPersona =  Number (document.getElementById("inputAltura").value);
//     const procedimientoImc = pesoPersona / (alturaPersona ** 2);
//     if (procedimientoImc < 18.5) {
//         console.log("Bajo de peso");
//     } else if (procedimientoImc >= 18.5  && procedimientoImc < 24.9){
//         console.log("Normal");
//     }else if(procedimientoImc> 25 && procedimientoImc < 29.9){
//         console.log("Sobrepeso");
//     }else if (procedimientoImc >= 30){
//         console.log("Obeso");
//     }else if (pesoPersona == ''){
//         console.log("Ingese dato del Peso");
//     }else if (alturaPersona == ''){
//         console.log('Ingrese dato de altura')
//     }
// }

let array = [1,4, 5, 67,7];
function sumarArreglos() {
    for (let  index= 2; index <= 10; index++) {
        const element = index + index
        console.log(element)
        
    }
}
sumarArreglos()
const asd = prompt('asdad');
console.log(asd)
console.log(typeof(asd))