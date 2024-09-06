
//Ejemplo de un objeto. Tambien para acceder
// {}=>se inicia con estas llaves
// se le pone los dos puntos a las propiedades
// objetos anindados esta chorrera
// const gato = { 
//     nombre : "Pachito",
//     edad : 10,
//    enemigos : ["perros" , "agua", "Veneno", "Plomo"],
//  duerme : true,
// comer(){
    //         console.log("Comiendo")
    //      }

// };

// una forma de usar una funcion en un objeto
// comer: function (){
//     console.log("Comiendo")
//  }
// // Forma abreviada
// comer(){
//         console.log("Comiendo")
//      }
//Da igual que use la que sea mas comoda para usted
// console.log(gato.nombre);=> se usa para llamar solo a uno
// console.log(gato["enemigos"][1]);
// console.log(gato.enemigos[1]);

// //CRUD para actualizar datos = gato.edad = 5 , delete para eliminar, leer clg (gato); , crear objetos gato.color = "Naranje"

// gato.color = "Naranja" crear
// console.log(gato); leer
// gato.edad = 5; actualizar
// delete gato.duerme; borrar
// gato.duerme = false actualizar

// A veces es útil comprobar si existe o no la propiedad de un objeto dado. 
// Podemos utilizar el método .hasOwnProperty(propname) para determinar si un objeto tiene una propiedad con ese nombre.
//esto hara que si esxiste cambiara la propiedad y la actualizara

// if (gato.hasOwnProperty("edad")) {
// gato.edad = -1,
//     console.log(gato)
// }


// console.log(gato.hasOwnProperty("Apellido"));

// Para acceder a las propiedades del coso de arriba. Todo sirve
// console.log(gato.otro.favoritos.frio);
// console.log(gato.otro.amigos[1])
// console.log(gato.otro["amigos"][1])



//THIS se comporta como si el fuera el objeto gato tomara las propiedades y sera todas   (es mas que eso falta mas definiciones pero igual es asi)
//sirve para llamar una propiedad sin necesidad de escrbir gato.nombre.
//ejemplo : this.nombre
//Se pueden utilizar funciones de flecha dentro del metodo pero no como un metodo.
//Example
// const gato = { 
//     nombre : "Pachito",
//     edad : 10,
//    enemigos : ["perros" , "agua", "Veneno", "Plomo"],
//  duerme : true,
//  comer(comia) {
//     console.log(`
//     ${this.nombre} esta comiendo ${comia}
//     `)
//  },
//    listarEnemies(){
// this.enemigos.forEach((item)=> console.log(item))
//    },
// };
// gato.listarEnemies ()


//for in : La instrucción for-in itera sobre todas 
// las propiedades enumerables de un objeto que está codificado por cadenas (ignorando los codificados por Símbolos, 
// incluidas las propiedades enumerables heredadas. (no se usa el for of es solo para arrays)
// console.log(gato[propiedad])  es obligatorio el uso de las [] en estos casos.

// const gato2 = { 
//     nombre : "Pachito",
//     edad : 10,
//    enemigos : ["perros" , "agua", "Veneno", "Plomo"],
//  duerme : true,

// };

// for (let propiedad in gato){
//    console.log(gato[propiedad]) 

//  }
    
// aqui aplicaste una funcion usando this y luego llamndo la funcion por medio de gato.hobbie

// const persona = {

//     nombre : "maria",
//     edad : 30,
//     trabjo : "Profesora",
//     hobbie(actividad) { 
    
//         console.log(`${this.nombre} esta ${actividad}`);
//       }
       
      
    
    
//     }
    
//     gato.hobbie("Lavando ropa");
//    -------------------------------------------------------- 
//Esto esta mencionado mas arriba pero este esta mas entendible ambas sirve pero este esta mas entendible
//Aqui usaste hasOwnProperty() para saber si una propiedad del objeto existe si no existe una propiedad arroja false, en cambia si pones 
// una propiedad que exista dentro del objeto arrojara un true el hasOwnProperty() sirve tambien para actualizar datos de las propiedades
// logicamente si ingresas una propiedad que exista cambiara su contenido por ejemplo cambias actividadFavorita de dormir a ponchar usando
// hasOwnProperty() esto es objetos anidados.
// const gato= {
//     nombre: "Negro",
//     actividadFavorita : "Dormir",
//     Enemigo: ["Plomo"," Veneno"],
//     edad : -99,
//     otros : {
//         amigos: ["cobarde"," lucio", "Steve"],
//         comia :{
//             frio: "Salmon",
//             caliente:"bolas de queso",


//         }
    

//     }

// };
// //Aqui esta lo mencionado
// if (gato.hasOwnProperty("actividadFavorita")) {
//     gato.actividadFavorita = "Ponchar";
// }
// // Con esta forma se puede acceder a las propiedades mas profundas si es un array una propiedad para llamar 
// // dicho elemnto se pode el nombre del Array y luego [] y por ultimo el numero que esta ubuicado el elemnto.
// console.log(gato.otros.comia.caliente);
// //Aqui esta lo mencionado siempre un array inicia desde 0.
// console.log(gato.Enemigo[0])
// console.log(gato.otros.amigos[1]);

// const amigo = ["cobarde"," lucio", "Steve"]
// console.log(amigo.length);
// //para saber si llevan [] o () hay que tener encuenta que si es un objetose usa () de lo contrario se usa[]
//------------------------------------
//Esto ya esta escrito mas arriba. (Forma mas entendible) con una funcion de la forma abreviada esta mas arriba 
// hay esta escrito pero este ejemplo esta mas entendible
// const gato = { 
//         nombre : "Pachito",
//         edad : 10,
//        enemigos : ["perros" , "agua", "Veneno", "Plomo"],
//      duerme : true,
//      //Funcion de la forma abrebiada esta mas arriba explicado este es un ejemplo mas entendible
//      comer() {
//         console.log(`${this.nombre} comiendo ${this.enemigos[2]}`);
//      }
     
//     };
//Usando CRUD tal como esta aqui es el ejemplo mas entendible pero ya sabe mas arriba esta escrito de forma explicativa.
// Llamando la funcion
    // gato.comer(); 
    // // Actualizar datos de las propiedades
    // gato.edad=20; 
    // // Creando nuevas propiedades
    // gato.color = "Naranje";
    // //Llamando el objeto gato con las propiedades cambiadas y agregadas
    // console.log(gato);
    // //Agregando mas elementos al array enemigos del gato  
    // gato.enemigos.push("Players LOL", "Brawl Stars");
    // // Para borrar una propiedad del objeto gato
    // delete gato.enemigos
    //-----------------------------
    //Ejemplo de usando un parametro en la funcion comer.
//     const gato = { 
//       nombre : "Pachito",
//       edad : 10,
//      enemigos : ["perros" , "agua", "Veneno", "Plomo"],
//    duerme : true,
   //Funcion de la forma abrebiada esta mas arriba explicado este es un ejemplo mas entendible
//    comer(alimento) {
//       console.log(`${this.nombre} esta comiendo ${alimento}`);
      
//    }
//   };
// //Aqui se llama la funcion.
//  gato.comer("VenenoX2");
//------------------------------------------------
//Ejemplo de usar una funcion de flecha la funcion de flecha no se usa como metodo osea no va en la funcion en si, si no que
// tiene que estar dentro no usarse como principal.(No va dentro de la funcion listarEnemies va dentro de la funcion =this.enemigos.forEach((item)=>console.log(item)))
//Esto lo mencione mas arriba pero ya sabe es un ejemplo mas entendible.
//  const gato = { 
//   nombre : "Pachito",
//   edad : 10,
//  enemigos : ["perros" , "agua", "Veneno", "Plomo"],
// duerme : true,
// //Funcion de la forma abrebiada esta mas arriba explicado este es un ejemplo mas entendible
// listarEnemies() {
//   this.enemigos.forEach((item)=>console.log(item))
  
// }
// };
// gato.listarEnemies()

//(Para intercambiar valores de variables es let a = 4, let b = 6, let temp = a, a=b, b=temp.) Asi se intercambi valores.
//_______________________________________________________________________________________________________
// Metodos bucle while y for
// Version para qe empieze desde el 1
// let  i = 0 ;
// while (i<5) {
//     i ++;
//     console.log(i);
// }
// Version para que empieze de 0
// let contador = 0;
// while (contador<5) {
//     console.log(contador);
//     contador ++
// }
//_______________________________________________
//
// const numeros = [1, 2, 3, 4, 5, 6];

// // Utilizando un bucle for
// const duplicadosFor = [];
// for (let i = 0; i < numeros.length; i++) {
//   duplicadosFor.push(numeros[i] * 2);
// }

// console.log(duplicadosFor); // [2, 4, 6, 8, 10]
// console.log(numeros[3]);
// const suma = numeros[3] + 4;
// Usansdo el metodo map para duplicar los numeros del array. Mas abreviada y rapida es funcion de los arrays.
// const numeros = [1, 2, 3, 4, 5];


// const duplicadosMap = numeros.map(numero => numero * 2);

// console.log(duplicadosMap); // [2, 4, 6, 8, 10]    
// console.log(duplicadosMap[4]);
//_____________________
//Ejemplo de switch 
//En conclusión, la estructura switch en JavaScript es una herramienta fundamental para el manejo de sentencias condicionales que te permite tomar decisiones basadas en el valor de una expresión. En esta clase, 
// hemos desglosado paso a paso cómo declarar y utilizar un switch, 
// la importancia de los casos con etiquetas case, la necesidad de la palabra clave break para controlar la ejecución del código, 
// y cómo incorporar un caso por defecto (default) cuando sea necesario. Con ejemplos prácticos, 
// hemos proporcionado una comprensión sólida de cómo aprovechar al máximo esta estructura en tus programas. Ahora, 
// estás mejor preparado para utilizar switch de manera efectiva y tomar decisiones informadas en tus aplicaciones JavaScript.
// let diaDeLaSemana = "Lunes";

// switch (diaDeLaSemana) {
//   case "Lunes":
//     console.log("Es el primer día de la semana.");
//     break;
//   case "Martes":
//     console.log("Hoy es martes.");
//     break;
//   default:
//     console.log("No es ni lunes ni martes.");
// }
//_______________________________________________
// Usando ciclos
//El ciclo for se usa cuando se sabe cuantos ciclo es.
// for (let index = 1; index <= 10; index++) {
//    console.log( `Nemro ${index}`);
   
//    if(index == 10 ){
//        console.log(`Se cierra sesion por afk`);
   
//    }
//    switch (index) {
//     case 10:
//         console.log(`Sirve switch`);
//         break;
   
//     default:
//         console.log(`No sirve`);
//         break;
//    }
// }
// Aqui tines que tener encuenta los condicionales logicos 
//por que o si no no sirve ni imprime ponga cuidada en eso si no funciona el codigo
//pendiente en la expresion del for. Ademas es ciclos anidados.
// for (let i = 1 ; i <= 4 ; i++) {
//     console.log(`Empiza iteracion ${i}`);
//     for (let j  = 0 ; j < 4 ; j++) {
//         console.log(`${j}`)

//     }
// }

// console.log(`Fin del ciclo`);
// While se usa cuando no se saben cuantos ciclos se hacen.
//While siempre despues de declrar el codigo a ejecutar luego se pone el 
// incrementador por que o si no da ciclo infinito.
// let i = 1
// while (i <=4) {
//     console.log(`iteracio ${i}`);
//     i++;
// }
// do while lo diferente es que ejecuta primero el do y luego evalua el while.
// do {
//     console.log(`Iteracion ${i}`);
//     i++;
// } while (i <= 4);
// Bucle 'while' para imprimir números pares del 2 al 10
// let num = 2;
// while (num <= 10) {
//   console.log(num); // Imprime el número actual
//   num += 2; // Suma 2 al número actual para pasar al siguiente número par
// }
//SWITCH la funcion swicth es facil so que cuando se declaran los casos como en el ejemplo y esta definido en las variable 
// se ejecuta, pero si no esta definida y no esta seleccionada en los case definidos el usa el valor default. Osea el switch verifica
// si en la variable aparece un case por el valor definido y si no esta lo tomara con default y lo ejecutara como definido.
// let opcion ="fORMULA PARA EL CABELLO";

// switch (opcion) {
//     case 1:
//         console.log(`Sir ve we`);
//         break;
//         case 2 :
//             console.log(`En serio`);
//         break;
//         case "fORMULA PARA EL CABELLO" :
//             console.log(`Formula es:
//             Comer veneno.
//             Nada XD.`);
//             break;

//     default:
//         console.log(`Nada`)
//         break;
// }
// nota importantisima cuando quieres que an cualquier cosa se muestre con el texto usa las "", por que si no la usas
// la tomara como una variable o algo y dara erro osea no lo tomara como texto si no como algo ejecutable.
// function saludo(nombre) {
//     console.log(`Hola care pene de ${nombre}`);
// }
// saludo("William");
//Nota sobre return y algunas cositas de function.
//return devuelve un resultado o lo que sea, pero en caso es que para cuando quieres llamarlo para que se muestre tienes que crear una variable para que se pueda llamar.
// Se pueden poner en las funciones valores por defecto ejem: function (a , b = 5), aquí b es 5 por defecto es como crear una variable.
// Para crear variables anónimas se hacer una variable const y luego se pone normal function, luego para llamarlas se pone el nombre de la varible y los ().
// saber llamar funciones dentro de otra ahorra mucho tiempo, por que si necesitas modificar la funcion puedes hacerla donde escribiste esa funcion y 
// lugue las funciones donde este la funcion llamada se actualizaran solas y 
// sin necesidad de hacer una por una. ejem 
// ejemplo con funciones si modificar.
// function saludo(nombre) {
//     console.log(`Hola ${nombre}`);
// }
// function sumar(n1 , n2) {
//     const proceso = n1 + n2
//     console.log(`${proceso}`);
// }
// function llamarFunciones(n1 , n2 , nombre , n3 = false) {
//     if (n3 == false){
//         sumar(n1 ,n2)
//     }else {
//         saludo (nombre)
//     }
// }
// llamarFunciones(12, 6 , "William", true);
//ejemplo con funciones modificadas osea cambie el procedimiento de la suma a una resta y el saludo le agregue mas y solo fue eso
// no tube que modificardonde la llame,nada de una por una en donde la habia llamado solo modificas unas lineas de codigo y ya quedo lista.
// y solo despues tengo que llamar la funcion donde estan las funciones guardadas.
// function saludo2(nombre) {
//     console.log(`Hola  como estas${nombre}`);
// }
// function sumar2(n1 , n2) {
//     const proceso = n1 - n2
//     console.log(`${proceso}`);
// }
// function llamarFunciones2(n1 , n2 , nombre , n3 = false) {
//     if (n3 == false){
//         sumar2(n1 ,n2)
//     }else {
//         saludo2 (nombre)
//     }
// }
// llamarFunciones(12, 6 , "William", false);
//_________________________________________________________
// Usando clases para las clase se nombra primero con la letra mayucula se usan {}
// se pone constructor () donde va a ir las propiedades y luego se llaman con this.id = id
//para que su dato se variado osea no sea fijo.
//el metodo se escribe asi nombrar () {} sin necesidad de escribir function y dentro de el va cualquier cosa

// class Comida {
//     constructor (id , nombre, color){
//         this.id  = id
//         this.nombre = nombre
//         this.color = color

//     }

//     nombrar (){
//         return `asasda ${this.nombre} con sabor a ${this.color}`;
//     }
// }
//Aqui se heredo todas las propiedades de Comida esto ayuda a reutilizar esa clase sin necesidad de crear varias
// para eso y en esta nueva clase se escribe asi como esta abajo se nombra el constructor con el que se esta heredando las
// propiedades y se agrega la nueva propiedad que quieras agregarles y para no llamarlas una por una se pone super () y las propiedades
// de la clase que heredo osea la clase Comida, y solo se tiene que llamar a la nueva propiedad de esa nueva clase.
// class Galletas extends Comida {
//     constructor (id , nombre, color, sabor) {
//         super(id , nombre, color);
//         this.sabor = sabor;

//     }
//     nombrarGalleta (){
//         return`Gallaetas a solo ${this.nombre} con precio de ${this.sabor}`;
//     }
// }
// asi es como se llama y se crea las clases sin necesidad de escribir una por una
// const oreo = new Galletas (1 , "oreo" , "cafe", "choco");
// const festival = new Galletas (23 , "Festival", "Rosado", "Fresa");
//aqui se esta llamando todo para que se muestre en pantalla (consola) muestras las propiedades de comida y agrega la nueva propiedad
// de galletas
// console.log(oreo);
// aqui solo llame la nueva clase festival y llame el metodo nombrarGalleta() para que se muestre en consola
// console.log(festival.nombrarGalleta());

//Operadores de comparación

// console.log(2== "2"); // Igual |No tiene en cuneta el tipo de dato
// console.log(2 === "2")// Igual stricta | Tiene el tipo de dato en cuenta aqui como "2" es string es falso por que no son iguales
// console.log(1!=2); // Diferencia | True porque si son diferentes y su tipo de dato es igual es como lo mismo de == solo que si es diferente
// console.log(1!== "1")//Diferencia Stricta |Sondiferentes y tras de eso son diferente por ser diferentes tipo de dato
// let uno = false;
// let dos = true;
// console.log(uno && dos);// Si lo dos son iguales es true si uno cambia a false sera false (aqui dara tru si ambos son true de resto si es diferente sera false)
// console.log(uno || dos);//Si los dos son false dara false y si uno cambia a treu sera true (aqui todo sera true si uno es diferente al otro osea false o true)

// //El operador ternario es como el if mejor dicho es el if pero abreviado.
// let hola = (30 === 302 ) ?'Es igual' :'no Es igual';
// console.log(hola);
//______________
//Nose si ya escribir estos de las clases
class Player{
    constructor(nombre, coloSombrero){
      this.nombre = nombre,
      this.coloSombrero = coloSombrero
    }
    saludad(){
        // return es importante para que devuelva el resultado en pantalla o sea que sin esto la funcio / metodo no mostrara nada dira undefined
      return `Hola causa soy ${this.nombre} y mi color del pen* es ${this.coloSombrero}`
    }

    get nombre(){
        return this.nombre;
    }
    set nombre (nuevo){
        this.nombre = nuevo
    }
  }

//ASI ES como crea una nueva clase y se llaman los metodos creados de la clase.
let playe1 = new Player("Mario", "Rojo");
console.log(playe1);
console.log(playe1.saludad());

class Player {
  constructor(nombre , colorSombre){
      this._nombre = nombre
      this._colorsombre = colorSombre
  }
  saludar(){
      return `Hola soy ${this._nombre} y mi color de sombrero es ${this._colorsombre}`
  }
}
class Pet extends Player {
  constructor(nombre , colorSombre , colorPiel){
      super(nombre, colorSombre);
      this._colorPiel = colorPiel
  }
  saludar(){
      return super.saludar() + ` Mi color de piel es  ${this._colorPiel}`; //otra cosa es que se puede hacer esto ya que hereda la funciuon saludar
      //lo que se esta haciendo una sobre escritura se esta agregendo el texto anterior y se le añada el nuevo sin necesidad de escribirirlo todo.
      //hereda la funcion saludar de la clase Player, hereda todo atento con eso por que es buena forma de optimizar.
  }
  get colorPiel (){
      return this._colorPiel
  }
  set cambiarnombre (nombreNuve){
      this._nombre = nombreNuve;
  }
}
let player1 = new Player ('William', 'Azul(el copy)');
let pat1 = new Pet ('Hulk', 'No uso sombrero', 'Verde')
pat1.cambiarnombre = 'SAPO';

console.log(pat1.saludar())
console.log(pat1.colorPiel)
console.log(pat1)
//ejemplos de metodos y atributos estaticos, los atributos son las variables que se crea dentro de la clase y los metodos son funciones
class Mascota {
  //aquivan los atributos estaticos simepre y empiezan con Static
  constructor(){

  }
  //aqui los metodos esta especificado que siempre van lo metodos aqui 
}
//Cositas de strings
let saludo = 'hOLA MUNDO!'; //los string son como una especie de array sela puede consultar el valor osea tiene una longitud
// de 11 tambien cuenta los espacios, como es 11 empezaria de 0 y terminaria 10
console.log(saludo.length);//consultar lalongitud del string
console.log(saludo[6]);//aca es como se llamaria
console.log(saludo.toLowerCase()); //para cambiar toda la frase a minusculas
console.log(saludo.toLocaleUpperCase());//para cambiar toda la frase a mayusculas
//los string son inmutavbles osea no se puede cambaiar una letra se tiene que cambair todo ejemplo:
saludo[0] = 'H';
console.log(saludo); //Aqui no
saludo = 'Hola mundo!';
console.log(saludo); //aqui si se cambia la letra que se queria cambiar.

//Subcadenas 
let frase = 'Hola mi nombre es  Sans digo trans es que soy Sigma';
//todo aqui mostrara solo un numero osea le indice de la frase
console.log(frase.indexOf('HTL')); //mostrara -1 por que la palabra no existe no paracese en el indice
console.log(frase.indexOf('Sans')); //mostrara el indice donde se encuentra la palabra.
console.log(frase.indexOf('es', 4)); //mostrara el segundo es que hay en la frase (esto sivra para encontrar una
//palabra que se esta repitiendo se ingresa la palabra y luego el indice donde se quiere empezar).
console.log(frase.lastIndexOf('es')); // me mostrara el segund 'es' por que inicia desde el final de la frase.

//Inculdes , startsWith, endsWidht
console.log(frase.includes('Sans')); //mostrara un true porque la palabra si existe dentro de la frase. (arroja un boolenao)
console.log(frase.includes('Nada')); //mostrara un false porque no existe eso dentro de la frase (string).
console.log(frase.endsWith('Sigma')); //me aparecera un true por que busca si la ultima palabra del string es la que se encuentra dentro 
//del parentesis osea de la frase, la palabra tiene que ser exactamente igual ya que si cambio algo me arrojara un false por que no exisye una
//palabra con es pequeña modificacion asi que atento.

//Substring

console.log(frase.substring(2, 4)); //mostrara las dos letras con el que coninciden en el iundice
console.log(frase.substr(2, 4)); //mostrar la letra con el que coincide el indice y mustra la longitud del string apartir
//del indice establecido hay mismo osea si pongo 2 empieza donde senecuentra el indice 2 y va a mostrar un string de 4 letras osea la longitud que se
//pidio mostrar.

//trim , repeat
frase = frase.trim();//eliminara los espcacion que hayan en el string.
console.log(frase.repeat(3)); //me repetira el string las veces que se halla especificado en repeat osea 3 veces repetira.

focus() // sirve para cuando un input envie un resultado se deselecciona el input el input vuelve a seleccionarse de forma auto osea cuando clickee 
//y envie o algo el se mantrendra seleccionado (sirve oara dar mas completo y comodidad al usuario).


botonCualquiera.disable = true; //para deshabilitar un boton.
//ejemplo(se puede usar en funciones y condicionales y mas)
if(botonCualquiera == false){
  botonCualquiera.disable = true;
} 
recibirInput.value = ''; //esto sirve para cuando quieres vaciar un input despues de haber ingresado un valor 
//ejemplo seleccionas un input y envias y el resultado permanece entonces entra esto y vacia el input y queda limpio (es como el focus para darla mas comodidad al usuario)

function limpiar(id) {
  document.getElementById(id).value = ""
  document.getElementById(id).focus
//esta funcion es dinamica n id se ingresa el id del input y se agrega auto, osea solo se ingresa el id en limpiar y hace el resto
//no esta fijo se puede usar en varias por eso id es una variable.
}
//splice
function eliminar() {
  let newElement = document.getElementById("123").value;
  if( newElement>=frutas.length){
      alert(`No se señor el indice del arreglo se actualiza`);

  }else{

      frutas.splice(newElement , 1); //tener encuenta como se hace, asi se debe usar splice sirve para eliminar elementos de un arreglo , se podra aplicar en objetos almacenados en 
      //un array? //donde esta new element va el numero osea la posicion donde inicia a elininar y el 1 es la cantidad que eliminara
      //ose si pongo 2 entonces empezara a eliminar desde el indice del aaray dos y el uno eliminara un elemento del array. tora cosa es que
      //cuando se escribe el numero del indice en nuewElement y el uno elemina solo ese elemento osea newelement que sea 2 y 1 entonces elimina
      // el elemento que este en el indice de 2 y eleminia ese elemento por eso uno. si pongo do elimina 2 elemento donde empiza y donde termina 
      // la cantidad de elemento a eliminar osea 2, uno donde inicia y el otro que le sigue.
      console.log(frutas);
      alert(`Elementos que estan en el arreglo ${frutas}`);
  }

}

//LocaleStorage
//sirve pues para guardar datos en la memoria del navegador manteniendose hasta que se elimine.
let object = [{
  nombre : "William",
  edad: 19
}]
localStorage.setItem("nombreUser", object); //para guardar los datos en el estorage asi se debe hacer el segundo es lo que sequiere guardar y el primero en
//comillas es el nombre que se le da a eso osea escomo si se estuviera declarando una variable pero esta gurda algo en la memoria.
localStorage.getItem("nombreUser"); //asi es como s llama a lo que se guardo osea lo que se guardo en el Storage se pone el nombre 
// del localStorage que posee.
//en las variables se pueden porner como una especie de condicione aqui le estoy diciendo que li la vrble es = a 1 o 0 logicamente se necesita 
//alguna condicion o funcion para que suceda eso o algo asi pero se puede. es bueno saberlo.
let asda = 1 || 0;

//tener encuenta hacer funciones osea hacer funciones para que cumplan pequeños provblemas osea resuelva problemas y que sea reutilizable.
//una funcion callback es aquella que itera y de vuelve un booleano osea pregunta en un array si existe una propiedad especeifca
//que se este preguntanfo y si existe devuelve true y si no pues false (otra aclaracion es que depende de lo que se este evaluando
//osea de lo que se especifique en la expresion).
//funcion find
// El método find() devuelve el valor del primer elemento del array que cumple la función de prueba proporcionada.
function buscarUser() {
  let username = document.getElementById("floatingInput1").value
  //la funcion find busca dentro del arreglo la propiedad que se busca si no esxite o se encuentra envia undefined
  //ademas la variable en la que se almacena la funcion find se vuelve un arreglo por que devuelve todos los datos
  //relacionado a la busqueda.
  let buscar = baseDeDatos.find(usuario => usuario.nombre == username );
  console.log(buscar);
}
//ejemplo chiqui
const array1 = [5, 12, 8, 130, 44];

const found = array1.find((element) => element > 10);

console.log(found);
// Expected output: 12


//funcion some
//devolvera un booleano cuando evalue la expresion.
let eserLogin = baseDeDatos.some(usuario => usuario.nombre == username && usuario.pw == password);

function buscarUser() {
    let username = document.getElementById("floatingInput1").value
    //la funcion find busca dentro del arreglo la propiedad que se busca si no esxite o se encuentra envia undefined
    //ademas la variable en la que se almacena la funcion find se vuelve un arreglo por que devuelve todos los datos
    //relacionado a la busqueda.
    let buscar = baseDeDatos.find(usuario => usuario.nombre == username );
    console.log(buscar.pw)
  }
  
  //funcion map
  //la funcion map devuelve un nuevo array lo quese quiere hacer osea si quiero un aarrya el de frutas que sea
  // todo mayusculas mostrara el array pero con todas en mayusculas osea modifica el array y devuelve otra con el mod, ademas tambien
  //agrega propiedades que desee.
  let frutas = ["Manzana", "Pera", "Sandia"];
  
  function futrasM() {
    let furtasUpper = frutas.map();
    console.log(furtasUpper)
  }
function futrasM() {
    let username = document.getElementById("floatingInput1").value
    const resetPassWord = baseDeDatos.map(base => {
        return{
            ...base,
            fav: base.edad >= 18 ? "Mayor" : "Menor"
        }
    });
    console.log(resetPassWord);

}
futrasM();

//tablas tr es el espacio osea la celda td es el contenido y las tablas en html 
//empieza desde 0 como un array tabien las columnas

document.createElement() // sirve para crear elementos html en js
//cuando se crea el elemento por ejemplo un boton o como en  de la tabla de producto.
// Para cambiar el contenido de un boton o algo para cambiar el contenido el caso es que se puede cambiar el contenido como el texto
//que contiene el bton o el texto que almacena la tabla se usa
// en JavaScript, puedes utilizar la propiedad innerHTML, innerText o textContent. para cambiar el contenido o asignarle el texto.

//ejemplo se crea un boton y en ese boton se le añade el texto que contienen lo botones y se le pone 'Press me'
const boton = document.createElement('button');

boton.innerHTML = 'Press me';
//esto es de la actividad de la tabla producto puedes ir i añadir esto y se añadira por cada nueva fila creada
// se añade el boto
fila.appendChild(boton)
tablaContenido.appendChild(fila)

// un ejemplo de usar forEach y createElement y lo de cambiar el contenido osea el text
let array= [
  1, 2, 3
]//array con el que se iterara

const select = document.createElement('select');//se crea un select
array.forEach(element =>{ //por cada elemento del array creara un option osea son tre number creara 3 optiones 
    const option = document.createElement('option');//crea un option
    option.textContent = element //contenido del option que va ase el numero del array
    option.value = element;//se le añada el valor osea aqui el mismo elemento es el mismo valor
    select.appendChild(option)//se le añada el option al select creado

    })
    console.log(select)
fila.appendChild(select);
tablaContenido.appendChild(fila)//esto es mas que todo para cuando se creee la file en la tabla seañadira el selct 
// si se pega todo esto donde se añade en las tablas añadira un select con 3 option por cada fila creada (puede intertarlo no cambia nadaaa).

//foreach
// El método forEach() ejecuta la función indicada una vez por cada elemento del array.
array.forEach(element => {
  // lo que sequiere ejecutar osea si por cada elemento de una array sume todo 
  // lo suma
});

//apendchild
tablaContenido.appendChild(fila)//agrega el elemento al html osea como el selct cuando se agraga un option

//ARRAY.FROM()
Array.from()//El método Array.from() crea una nueva instancia de Array a partir de un objeto iterable. Tambien
// convierte osea es como un Parseint convierte string de numero a tipo umber lo mismo array.from convierte algo 
//que sea iterable a un array ejemplo. la actividad de las tablas de producto itera cada celda de total y lo multiplica
//para mas entendimineto del ejemplo valla al archivo y mire otro ej es:
console.log(Array.from('foo'));
// Expected output: Array ["f", "o", "o"]
// convierte ese string a un array y puede ser iterable podria usar forEach y que por cada letra se adjunte un numero y ese numero
// se sume.

//EL MISMO ejemplo del boton anterior pero este primero se crea el espcacio donde estara el boton y luego
//se crea el boton y se le adjunta el boton al td se veria mucho mejor en la tabla ta que al realizar el anterior
//ejemplo del boto cumple con lo que esperó. pero se ve feo y no se esta adjuntando bien a la tabla sirve !si¡ pero aqui 
// solo se añadio el boton al asdad osea al td al espacio en la tabla td = espacio tabla = tr = fila de la tabla
const botonProduct = document.createElement('td')
    const boton = document.createElement('button');
    boton.innerHTML = 'Borrar';
    boton.className = ' btn btn-danger';//AÑADE ESTILOS al boton
    boton.addEventListener('click', ()=>{
        fila.remove()//para eliminar la fila
    })
    botonProduct.appendChild(boton);//se añade el boton al espacio creado en la tabla(td, botonProudct) 
    
    fila.appendChild(botonProduct)//el boton se añada a la fila que se cree
    tablaContenido.appendChild(fila)//la fila se añade a la tabla


    JSON.stringify()
    //El método JSON.stringify() convierte un objeto o valor de JavaScript en una cadena de texto JSON, 
    // opcionalmente reemplaza valores si se indica una función de reemplazo,
    //  o si se especifican las propiedades mediante un array de reemplazo.
JSON.parse()
    //El método JSON.parse() analiza una cadena de texto como JSON, 
    // transformando opcionalmente el valor producido por el análisis.
//usando addeventelistener esta melo no es tan dificil se pone el que va a tener el evento por ejemplo boton y 
//luego lo que se quuiere ejecutar por ejemplo se puede usar una funcin flecha o una anonima y ejecutara el alert
//entonces cuando se clickea el boton mandara un alert con el texto escrito
    boton.addEventListener('click', ()=>{
      alert(`Funcina`)
  })

  // classList.add()agrega una clase y classList.remove() remueve una clase

  //apis metodo fetch se bas en promesas su sintix osea como se escribe es facil
  fetch(url)
  .then(response => response.json()) // esta promesa lo convierte en json ya que al llamarlo 
  //vuelve un string  y esto lo convierte en json
  .then(data => { //aqui solo agarra la promesa anterior y lo pone en esa varibale data y desde aqui ya se
    //puede manipular la api.
    console.log(data)
  })
  .catch(error => console.log(err)) // este catch hace que capture como dise en ingles 
  // el error y muestre el mensaje error.