

// class Objeto {
//     constructor(nombre, apellido, ciudad, edad,){
//     this._nombre = nombre,
//     this._apellido = apellido,
//     this._ciudad  = ciudad,
//     this._edad = edad
// }
// mostrarDatosHTML() {
//     const datosDiv = document.getElementById('datosPersona');
//     datosDiv.innerHTML = `
//         <p><strong>Nombre:</strong> ${this._nombre}</p>
//         <p><strong>Edad:</strong> ${this._apellido}</p>
//         <p><strong>Ciudad:</strong> ${this._ciudad}</p>
//         <p><strong>Edad:</strong> ${this._edad}</p>
//     `;
// }
// }


// let nombreIngresadoPorUsuario = prompt(`Ingrese su nombre`);
// let apellidoIngresadoPorUsuario = prompt(`Ingrese su apellido`);
// let ciudadIngresadoPorUsuario = prompt(`Ingrese su ciudad de recidencia`);
// let edadIngresadoPorUsuario = prompt(`Ingrese su edad actual`);
// function agregar() {
//     let objetoUsuario = new Objeto (nombreIngresadoPorUsuario);
// }
// function mostar() {
  
//     mostra(objetoUsuario);

//     console.log(objetoUsuario);
   
//     function mostra(variable) {
//         variable.mostrarDatosHTML();
//     }
// }

class Persona {
    constructor(nombre, edad, ocupacion) {
        this.nombre = nombre;
        this.edad = edad;
        this.ocupacion = ocupacion;
    }
}

let personas = [];

function agregarPersona() {
    // Simplemente como ejemplo, se solicitarán los datos mediante prompt
    const nombre = prompt("Ingrese el nombre:");
    const edad = parseInt(prompt("Ingrese la edad:"));
    const ocupacion = prompt("Ingrese la ocupación:");

    // Crear una nueva instancia de la clase Persona
    const nuevaPersona = new Persona(nombre, edad, ocupacion);

    // Agregar la nueva persona al arreglo de personas
    personas.push(nuevaPersona);

    alert("Persona agregada correctamente.");
    console.log(personas)
}

function mostrarDatos() {
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = ''; // Limpiar el contenido anterior

    // Mostrar los datos de cada persona en el arreglo
    personas.forEach(persona => {
        outputDiv.innerHTML += `
            <p><strong>Nombre:</strong> ${persona.nombre}</p>
            <p><strong>Edad:</strong> ${persona.edad}</p>
            <p><strong>Ocupación:</strong> ${persona.ocupacion}</p>
            <hr>
        `;
    });

    if (personas.length === 0) {
        outputDiv.innerHTML = "<p>No hay personas agregadas.</p>";
    }
}


class Prueba {
    constructor(a1, a2 , a3){
        this.a1 = a1,
        this.a2 = a2,
        this.a3 = a3
    }
}

let array =[];

let nuevo = new Prueba (1, 2, 3);
array.push(nuevo);
console.log(nuevo)
