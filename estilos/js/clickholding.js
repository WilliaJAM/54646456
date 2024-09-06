
// const div = document.getElementById('div');

// const input = document.createElement('input');
// input.placeholder = 'Hola mundo';

// div.appendChild(input);

// const boton = document.createElement('button');
// boton.textContent = 'Enviar';
// div.appendChild(boton)

// const inputSelect = document.getElementById('asdsad');
// let option = document.createElement('option');
// option.textContent = 'hola'
// let option2 = document.createElement('option');
// option2.textContent = 'hola2'

// inputSelect.appendChild(option2)
// inputSelect.appendChild(option)
// div.appendChild(inputSelect)

// let contador = 0;
// boton.addEventListener('click', ()=>{
//     contador = contador  + 1;
//     const h3 = document.getElementById('h3').innerHTML = `Clicks :  ${contador}`;
//     if(contador == 5){
//         alert('uhmm...')
//     }else if(contador == 10){
//         alert(`Presiona Mas rapido`)
//     }else if(contador == 20 ){
//         alert(`Que perdida de tiempo contigo....`)
//     }
// })

// class Humano {
//     constructor(piensa, habla, camina, corre){

//         this._piensa = piensa,
//         this._habla = habla,
//         this._camina = camina,
//         this._corre = corre
//     }
// }
// class superHumano extends Humano{
//     static contad = 0 ;
//     constructor(piensa, habla, camina, corre, salta) {
//         super(piensa, habla, camina, corre)
//         this._salta = salta,
//         this._contador = superHumano.contad ++
//     }
//     saludar(){
//         return console.log(`Hola ${this._camina}`);
//     }
//     get nombre (){
//         return console.log(this._piensa);
//     }
//     set nuevaPropiedad (nombre){
//         this._nombre = nombre
//     }
// }

// let arrayHuman = [];

// let humano = new Humano (true, false, true, false);

// let humano2 = new superHumano (true, false, true, false,true);
// let humano3 = new superHumano (true, false, true, false,true);
// let humano4 = new superHumano (true, false, true, false,true);


let contador = 0;
    const boton = document.getElementById('boton');
    boton.addEventListener('click', ()=>{
        if(localStorage.getItem('confirmacion') == 'true'){
            alert('Ya habias aceptado todo XD')
        }else{
            contador = contador + 1;
            console.log(contador);
            if(contador == 10){
                alert(`Hola no encontre a nadie que clickee el boton`);
                alert(`No importa ya que empezaste clickea :)`);
                alert(`Termina lo que empezaste :v`);
            }else if(contador == 20){
                alert('Esta n poco aburrido aqui');
                let interacion = confirm('Quieres hacer algo?');
                localStorage.setItem('confirmacion', interacion);
                if(interacion == true){
                    alert('OK hagamos algo :3');
                    let input = prompt('Me dices tu nombre?');
                    if(input == ''){
                        alert('Bueno no quieres hablar ase qu te pondre PEPE');
                        localStorage.setItem('nombre', 'PEPE');
                        alert(`Ok ${localStorage.getItem('nombre')} te avisare cuando se me ocurra algo LOL`);
                    }else if(input == null){
                        alert('Por que tan callado te llamaré PEPE');
                        alert(`De aucerdo ${localStorage.getItem('nombre')} te avisare luego`);
                        localStorage.setItem('nombre', 'PEPE');
                    }
                    alert(`Ok ${input} te avisare cuando se me ocurra algo LOL`);
                    localStorage.setItem('nombre', input);
                    
                }else{
                    alert('Que gey 🗣️🔥');
                }
            }
        }

    })

// hacer un selector de operaciones de matematicas con switch