let tarhetasDescubiertas = 0;

let tarjeta1 = null;
let tarjeta2 = null;


let numbersRamdon = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8]
numbersRamdon = numbersRamdon.sort(()=>{return Math.random()-0.5});
console.log(numbersRamdon);

function descubrir(id) {
    tarhetasDescubiertas++;


    if (tarhetasDescubiertas == 1){
        tarjeta1 = document.getElementById(id)
    }
}
descubrir();