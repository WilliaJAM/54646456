
let arrayEnds = [];
console.log(arrayEnds);
function iniciar() {
    let prompt1 = prompt(`Ingrese su nombre de "USUARIO"`);
    if(prompt1 == "USUARIO"){
        alert(`Pensaste fuera de la caja WOW esta viendo las cosas de otra forma`);
            let end1 = confirm(`Secret ending: Rompiste el programa (OSEA no seguiste la programación.)`);
            if(end1 == true){
            end1 = 1;
            arrayEnds.push(end1);
            return;
            }
        
        return;
    }
    console.log(prompt1);
    if(prompt1 === null){
        alert(`Esto es un juego serio Pendejo >:v empieza de nuevo`);
        return;
    } else if(prompt1 === ''){
        alert(`Esto es un juego serio Pendejo >:v empieza de nuevo`);
        return;

    }
    alertas(`Hola ${prompt1}`);
    alertas(`Esto es simplemente un juego de lo que salga del codigo programado`);
    let confirmar = confirm(`Empezamos?`);
    if (confirmar == true){
        alertas(`Primer mini juego crack`);
    }else{
        alertas(`Bueno hasta luego... (empiezas de nuevo.)`);
        return;
    }
    //Remember Name
    let adivinar = prompt(`Recuerdas como te llamas?`); //1
    while (adivinar != prompt1) {
        alert(`Mal mal`);
        adivinar = prompt(`Intentalo otra vez`);
    
    }
    //Palabra escribir
    alertas(`Bueno la siguiente es... (2)`);
    let escribe = prompt(`Escribe "Paranguacitirimicuaro"`); //2
    while (escribe != "Paranguacitirimicuaro") {
        alert(`Mal mal`);
        escribe = prompt(`Intentalo otra vez ("Paranguacitirimicuaro")`);
    
    }
    //Numero pensado aleatorio
    alert(`Bien el el 3 es:`)
    let numeroUser = prompt(`Ingresa un numero del 1 al 5 que estoy pensando(te va acostar un poquito ;))`);//3
    function generarNumeroAleatorio(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
        }
    
    let numeroGenerado = generarNumeroAleatorio(1, 5);
        
        while (numeroUser != numeroGenerado){
        alert(`Casi pero no`);
        numeroUser = prompt(`Intentalo de nuevo`);
}
alert(`Bien, eres la Goat.`);
alert(`Bueno hasta ahora no hemos acabado`);
alert(`Con lo facil claro`);
alert(`The next minigame is....`)
alert(`Ufff a level of english very high`);
alert(`Dejemos lo ingles por ahora jejeje`);
let inputUser = prompt(`Enter your age:`); //4
if(inputUser >= 18){
    alert(`You are old XD`);

}else {
    alert(`You are kid, exit the page web 💀`);
    return;
}

alert(`If you old very well `);
alert(`The next test is...`);
let enterUser = prompt(`De que color son los platanos`); //5
while(enterUser != "amarillo"){
    alert(`Bas very Bad :(`);
    enterUser = prompt(`Enserio no sabes? XD que bruto`);

}
alert(`Bien very good`);
alert(`The next is...`);
let enterUser2 = prompt(`ingresa 5  objetos ramdoms`); //6
let fristArray = []
let contador = 5
while(fristArray.length < 5 ){
        alert(`Ingresado...`);
            let contador2 = --contador;
            enterUser2 = prompt(`Ingresa algo faltan: ${contador2}`);
            fristArray.push(enterUser2);
    }
    alert(`Bien esos 5 objetos son bian lol`);
    alert(`la siguiente prueb es...`);
    alert(`Sabes aumentemos  la dificultad OK?`)
    let input1 = prompt(`Seleccione la dificultad: 
    1) Facil
    2) Dificil`)
    switch (input1) {
        case "1":
            alert(`Que gey`);
            
            break;
            case "2":
            alert(`Que pro`);
            alert(`Ok aceptastes perder tu alma al diablo XD`);
            let input11 = prompt(`Quieres saber mi historia?`);
            switch (input11) {
                case 'si':
                    alert(`Que bien alguien que quiere conocerme`);
                    let sumaExam =parseInt(prompt(`Cuanto es el resultado de: 1 + 34 - 35`)); 
                    if(sumaExam === 15){
                        alert(`Ok, are you smart LOL`);
                    }else{
                        alert(`Que burro`);
                    }
                    
                    break;
                    case 'no':
                        alert(`Maldito egoista ojala se muera su pene XD jajajja >:v`);
                        alert(`Empiezas de nuevo ajajajaj`)

                    break;
            
            
                default:
                    alert(`Adios`);
                    break;
            }


            break;
    
        default:
            break;
    }
console.log(fristArray);
}
let alertas = (text) => {alert(text);}
let link = () => {window.open("https://www.youtube.com/watch?v=IOLvm_KSe7c")};
let xd = () => {alert(`XDXDXDXDXDXDXDXDD`), window.close()};

document.getElementById("mostrarGif").addEventListener("click", function() {
    document.getElementById('hola').innerHTML = ('Hola soy trans.. digo Sans');
    document.getElementById("gif").src = document.getElementById("gifSrc").src;
    
    
    
});
let nuemro = 5; 
let txt = document.getElementById('sensibity');
function mostrarMelo() {
    let tiempoPlay = setInterval(()=>{
        // alert(`Hoal ${nuemro}`);
        txt.innerHTML = `${nuemro}`
        --nuemro;
        if (nuemro == 0) {
            clearInterval(tiempoPlay);
        txtinnerHTML = `Let's Go`;
        window.open("https://www.youtube.com/watch?v=GPVIxpW9N8s");
        }
        if( nuemro < 0){
            clearInterval(tiempoPlay);
        }
    }, 1000);
}

