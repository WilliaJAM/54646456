//Nose si ya escribir estos de las clases
// class Player{
//     constructor(nombre, coloSombrero){
//       this.nombre = nombre,
//       this.coloSombrero = coloSombrero
//     }
//     saludad(){
//         // return es importante para que devuelva el resultado en pantalla o sea que sin esto la funcio / metodo no mostrara nada dira undefined
//       return `Hola causa soy ${this.nombre} y mi color del pen* es ${this.coloSombrero}`
//     }

//   }

// //ASI ES como crea una nueva clase y se llaman los metodos creados de la clase.
// let playe1 = new Player("Mario", "Rojo");

// console.log(playe1.saludad());
// console.log(playe1);


// function Player1(nombre, apellido, edad) {
//   this._nombre = nombre,
//   this._apellido = apellido,
//   this._edad = edad
// }

// let palyer2  = new Player1 ("William", "Marinez", 12);
// console.log(palyer2);


// class Putin {
//   constructor(nombre, edad){
//     this.nombre1 = nombre,
//     this.edad = edad
//   }
// saludar(){
//  return `Hola pendejo de ${this.nombre1}`
//  }
// get mostra (){
//   return this.nombre1
// }
// set ajslda (nombreNuevo){
//   this.nombre1 = nombreNuevo
// }
// }

// let nuevo = new Putin ('William', 14);
// console.log(nuevo.saludar());
// console.log(nuevo);
// console.log(nuevo.nombre1);
// //Crear una clase heredando los atributos de Putin osea clase padre.
// class Putin2 extends Putin{
//   constructor(nombre1, edad, apellido, comia){//en esta parte del constructo se ponen todos los atributos
//  super(nombre1, edad);//se pone super para pasar los atributos de la clase padre
//  this.apellido = apellido;//solo se crea el nuevo atributo
//  this.comia = comia
//   }
// //   //en los metodos no es necesario volver a especificar ya estan aqui por que heredo los atributos de las clase padre
//   get ala (){
//     return this.apellido
//   }
//   set apellidoNew( nuevoApellido){
//     this.apellido = nuevoApellido

//   }
//   get comiaComiendo (){
//     return this.comia
//   }
//   set comiendoAlgo (comiaNueva){
//     this.comia = comiaNueva
//   }
//   saludar(){
//     return super.saludar() +  ' ADEMAS SOY ADICTOAL ' + this.comia //sobre escritura de metodo ademas de mostrar lo que diga el metodo de la clase padre 
//     //concatenaste nuevo texto en la clase hija pro eso se llama sobre esctitura.
//   }
// }
// let newf = new Putin2 ('Williak',14 , 'sajdl', "nom" );
// console.log(newf)
// newf.nombre1  = "CareVerga"
// console.log(newf.nombre1);
// newf.apellido = "ChupaMango"
// console.log(newf.apellido);
// console.log(newf.comia);
// newf.comia = "Cocain"
// console.log(newf.comia)
// console.log(newf.saludar());
// //Los metodo estaticos son aquello que los objetos no pueden heredar, pero si las subclases,
// //Los objetos son aquello que creamos asi let nuevo = new XXX nombre de la clase y el resto que falta, las subclases se
// //crean class Pet5 extends Pet {el resto de cosas} asi se diferencia de los objetos de las clases, por ultimo para verificar si 
// //entendiste es los objetos son las que creamos apartir de una variable y las subclases son aquella que se usa extends y no se usa variable
// //para crear los ejemplo esta aqui abajo.

// class Pet {
//   static colorOjo = "Cafe";
//   static pelo  = "Mono";
//   static contadorPe = 0;
// constructor(edad, nombre, deporte){
// this._nombre = nombre;
// this._edad = edad;
// this._deporte = deporte;
// this._numero = ++ Pet.contadorPe;
// }
// get numeroMostrar (){
//   return this._numero;
// }
// static saludo(){
//   return `Hola ${this._nombre}`
// }
// }
// //Objeto
// let pet1 = new Pet (12," William", "Futbol");
// let pet2 = new Pet (123," Wilsdfliam", "Baskquet");
// let pet3 = new Pet (102," Wilddliam", "Voley");
// let pet4 = new Pet (172," Willasdfm", "Bagmintong");
// console.log(Pet.saludo());
// console.log(pet2);
// console.log(pet3.numeroMostrar);
// console.log(pet4.numeroMostrar);
// //Clase
// class Pet5 extends Pet {
// constructor(edad, nombre, deporte, discapacidad){
// super(edad, nombre, deporte);
// this._discapacidad = discapacidad;
// }
// }
// let vcv = new Pet5 (12, "Yo", "Fortnite", "Le falta la cabeza")
// console.log(Pet5.contadorPe);
//___________________________
//Usando los metodos Get y Set 
//GET sirve para consultar o leer un atributo del objweto
//set SIRVE sirve para modificar el valor del atributo. ede buena practicar usar get y set es importante.
// class Mascota {
//   static cola = 'larga';
//   pelaje = 'lacio'
//   static contador = 0;
//   constructor(nombre, edad){
//       this._nombre = nombre;
//       this._edad = edad;
//       this._nuemroId = ++Mascota.contador 

//   }
//asi es como se escribe set aqui se especifica un parametro osea el cual va ocupar el nuevo valor como si fuera una funcion normal
//   set nuevoNombre (newNombre){
//       this._nombre = newNombre;
//   }
//   get iD (){
//       return this._nuemroId;
//   }
//asie es como se escribe Get se usa return para que devuelva el valor para consultarlo o leerlo.
//   get edadPet (){
//       return this._edad ;
//   }
// }
// let mascota1 = new Mascota ('Hola', -9);
// let mascota2 = new Mascota ('Coacola' , 2345);
// let mascota24 = new Mascota ('Coacola2' , 234);
// mascota1.nuevoNombre = 'Hola2';
// mascota2.nuevoNombre = 'MasaMorra'; asi se usa get se llama el objeto a cambiar y luego la propiedad que se modifico antes (ose la propiedad que se halla especificado en el metodo SET)
// console.log(mascota1._nombre); aqui se llama normal pero lo que cambia es el valor.
// console.log(mascota2._edad); //asi se usa Get solo para saber o consultar la propiedad.
// console.log(mascota2._nombre);

// console.log(Mascota.contador);
// console.log(mascota1._nuemroId);
// console.log(mascota2._nuemroId);
// console.log(mascota24._nuemroId);
//______________________________
// class User {
//   constructor(nombre, edad, año){
//     this._nombre = nombre;
//     this._edad = edad;
//     this._año = año;
//   }
//  saludar (){
//   alert(`Hola como estas ${this._nombre}`);
//  } 
//  numeroEdad(){
//   alert (`Tu edad es ${this._edad}`);
//  }
// }

// class UserVersion2 extends User {
//   constructor(nombre, edad, año, genero ){
//     super(nombre,edad,año)
//     this._genero = genero

//   }
//   mostarGenero(){
//     alert(`Tu genero es ${this._genero}`);
//   }
// }
// function nose() {
//   let nombre = document.getElementById("input1").value
//   let edad = document.getElementById("input2").value
//   let año = document.getElementById("input3").value
//   const nuevo = new User (nombre,edad,año);
//   console.log(nuevo);
//   // alert(`Hola ${nombre} como estas, tu edad es ${edad}, fecha born ${año}`);
//   nuevo.saludar();
//   nuevo.numeroEdad();

// } 


// function claseV2() {
//   let nombre = document.getElementById("input4").value
//   let edad = document.getElementById("input5").value
//   let año = document.getElementById("input6").value
//   let genero = document.getElementById("input7").value
//   const nuevo = new UserVersion2 (nombre, edad, año, genero);
//   console.log(nuevo);
//   nuevo.saludar();
//   nuevo.numeroEdad();
//   nuevo.mostarGenero();
// }
// function comprar() {
// let aceptar = prompt(`Quieres compar la funcion pro? Escriba tal como esta asi :  "Si" "No"`);
// if(aceptar == "Si"){
//   alert(`Incluye:
//   1. Un solo cuadro mas de datos.
//   2.Sin aunucion aunque no los hay.`);
//   let cos = prompt(`Ingrese su numero y listo :)`)

// }else{
// alert('vaya y coma mrd');
// window.close(); //Para cerrar ventanas
// }
// }
// //Constructor de objetos
// function  Objeto(nombre, edad, apellido) {
//   this._nombre = nombre,
//   this._edad = edad,
//   this._apellido = apellido
// }
// let nuevoObjeto = new Objeto ('William', 13,' Marinez');
// nuevoObjeto.estudia = true
// console.log(nuevoObjeto)


// //esto es un objeto

// let usuario = {
//   nombre : 'William',
//   edad : 23,
//   apellido : 'Marinez'
// }
// usuario.estudia = true
// console.log(usuario);
// console.log(usuario.hasOwnProperty('nombre'));
// UNa practica bien mela sobre las clases / aqui practicaste el static, heradacion, 
//una clase hija tuvo otra clase hija osea padre => (heredo)hija  => hija de la hija osea hija pasaria a ser padre de la hija 2 y heredaria todas las propiedades de la clase padre osea quedaria con todo  (hija => hija2)
//osea padre tien algo que hija no y hija2 heredo todo osea fue heredacion,heredacion y clase hija2 se heredo todo.
// let user = prompt('Nombrea');
// let user2 = prompt('Edad');
// let user3 = prompt('Ciudad no se pero XD');
// let mascota1 = new Mascota ( user, user2, user3);
// console.log(mascota1);
// mascota1.cerrarr(user);

// class Rza extends Mascota{
//     static papa = 'papa'
//     constructor(nombre , edad, ciudad, peñol){
//         super(nombre, edad, ciudad);
//         this._peñol = peñol;
//         this._papa = Rza.papa;


//     }
//     saludar2(nombre){
//         console.log(`Hola cmo estas ${nombre}`)
//     }
  

// }
// let prompm = prompt(`Peñol`)
// let user1 = prompt(`asdasd`);
// let mascota2 = new Rza (user1, user2, user3, prompm);
// console.log();
// mascota2.saludar2(user1);
// Rza.saludar(user3);
// console.log(Mascota.papa);


// class Rza2 extends Mascota{
//     constructor(nombre , edad, ciudad, peñol, color){
//         super(nombre , edad, ciudad, peñol)
//         this._color = color;

//     }

// }

// let colo = prompt(`asdadasd`)
// let algo = new Rza2 (user1, user2, user3, prompm, colo)
// console.log(algo);
// algo.saludar2(`${colo} sirve`);
///______________________________
//Aqui te inventaste una funcion que crea clases para no crear varibles por cada clase y ademas anidastes esas clases en un array
// pusiste un contador cuantas clases hay creadas sos un crack tu solitos lo hicistes.

//en esta clase padre solo esta el contador se usa estatic para que no se compartan en las clases hija osea los estatic las heredad clases no objetos (tanto como clase padre e hija)
// class NewMc {
  // class NewMc {
  //   static conta =0
  //   constructor(a, b, c){
  //       this._a = a;
  //       this._b = b;
  //       this._c = c; 
  //       this._contador = ++NewMc.conta;
    
  //   }
  //metodo get para mostrar el nuemro de creacion de la clase es como un id para saber que numero tiene una clase creada.
  // get nuemroCreacion(){
  //   return this._contador;
  // }
  // }
  
  // let array = []
  //funcion que crea clases y los almacena en arrays y les pone el nuemro de creacion que tienen alcrearlo osea el nuemro que se le da el contador osea
  //si creo una le da el numero 1 y asi sucesivamente.
  // function crearClases(a, b , c) {
  //   const nuevo = new NewMc (a, b, c);
  //   array.push(nuevo);
  // //   console.log(nuevo.nuemroCreacion);
  // }
  // crearClases(1, 2, 3);
  // crearClases(34, 222, 43);
  // crearClases(340, 2220, 430);
  // crearClases(340, 2220, 430);
  // crearClases(340, 22202, 430);
  //aqui cuando llamas a un elemento del array que contienen las clases muestra tanto lo que contiene como el nuemro de contador que poseee dos por uno y todo telo inventaste tu solito crack.
  // console.log(array[1]);
  ///al crear una clase hija ella hereda todo absolutamente todo, y si creas un objeto aparti de esta el contador la cuenta osea iugal si la creas
  // de la nueva clase y el objeto igual termina siendo parte del contador sigue aumentando no pasa nada solo aumenta al crearla apartir de la clase hija
  //no pasa nada
  //algo importante sobre las funciones no tiene nada que ver con lo mencionado es que las funciones anonimas no se pueden llamar antes osea no
  //pueden ser llamadas por encima de la funcion anonima osea no goza de hoisting.

  //ejemplo funcion anonima | aqui si sirvira por que la funcion fue llamada des pues de ser declarada si fuese sido antes daria error por que se llamaria la funcion y luego la funcion se clarada
  // let saludar = function (nombre) {
  //   console.log(`Hola ${nombre}`)
  // }
  // saludar('william');

  //ejmplo 2 funcion anonima |aqui dara error pro que al ser funcion anonima no se puede llamar antes y luego la funcion, pero las funciones normales de igual donde la llamemos
  //siempre va aservir por que el si goza de hoisting (osea se puede llamar de cualquier paret del codigo y siuempre funcionara sin ningun error);
  
  // saludar2('william'); //aqui esta el erro se esta llamando antes y es despues. ok todo claro y si no consulte por internet

  // let saludar2 = function (nombre) {
  //   console.log(`Hola ${nombre}`)
  // }

  //para la funciones flechas son funciones anonimas su estructura es 
  // let flecha = (aqui va parametro) => {aqui va lo que se va ejecutar}; //es como una funcion normal pero simplificada
  //para llamarla es asi flecha() nombre de la variable y luego los ()
  //al ser anonima no se puede llamar antes que la funcion lo mismo que una funcion anonima