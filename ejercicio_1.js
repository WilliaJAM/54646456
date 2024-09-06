let usuarios = [
    { cedula: '123456789', nombre: 'Juan Pérez', telefono: '1234567890', edad: 25 },
    { cedula: '987654321', nombre: 'Ana Gómez', telefono: '0987654321', edad: 17 }
];
 
let registrosExitosos = [];
let registrosRechazados = [];
 
function buscarUsuario(cedula) {
    return usuarios.find(usuario => usuario.cedula === cedula);
}
 
function registrarUsuario(cedula, nombre, telefono, edad) {
    let nuevoUsuario = { cedula, nombre, telefono, edad };
    usuarios.push(nuevoUsuario);
    return nuevoUsuario;
}
 
function validarYRegistrarUsuario(cedula) {
    let usuario = buscarUsuario(cedula);
 
    if (usuario) {
        if (usuario.edad >= 18) {
            registrosExitosos.push(usuario);
            agregarRegistroATabla(usuario, 'Exitoso');
            alert(`Usuario admitido: ${usuario.nombre}`);
        } else {
            registrosRechazados.push(usuario);
            agregarRegistroATabla(usuario, 'Rechazado');
            alert(`Usuario rechazado por edad: ${usuario.nombre}`);
        }
    } else {
        let nombre = prompt('Ingrese el nombre:');
        let telefono = prompt('Ingrese el teléfono:');
        let edad = parseInt(prompt('Ingrese la edad:'));
        usuario = registrarUsuario(cedula, nombre, telefono, edad);
 
        if (usuario.edad >= 18) {
            registrosExitosos.push(usuario);
            agregarRegistroATabla(usuario, 'Exitoso');
            alert(`Usuario admitido: ${usuario.nombre}`);
        } else {
            registrosRechazados.push(usuario);
            agregarRegistroATabla(usuario, 'Rechazado');
            alert(`Usuario rechazado por edad: ${usuario.nombre}`);
        }
    }
 
    actualizarResumen();
}
 
function agregarRegistroATabla(usuario, estado) {
    let tabla = document.getElementById('tablaRegistros');
    let fila = document.createElement('tr');
 
    let celdaCedula = document.createElement('td');
    celdaCedula.textContent = usuario.cedula;
    fila.appendChild(celdaCedula);
 
    let celdaNombre = document.createElement('td');
    celdaNombre.textContent = usuario.nombre;
    fila.appendChild(celdaNombre);
 
    let celdaTelefono = document.createElement('td');
    celdaTelefono.textContent = usuario.telefono;
    fila.appendChild(celdaTelefono);
 
    let celdaEdad = document.createElement('td');
    celdaEdad.textContent = usuario.edad;
    fila.appendChild(celdaEdad);
 
    let celdaEstado = document.createElement('td');
    celdaEstado.textContent = estado;
    fila.appendChild(celdaEstado);
 
    tabla.appendChild(fila);
}
 
function actualizarResumen() {
    let resumen = document.getElementById('resumen');
    resumen.innerHTML = `Registros Exitosos: ${registrosExitosos.length} <br> Registros Rechazados: ${registrosRechazados.length}`;
}
 
function validarUsuario() {
    let cedula = document.getElementById('cedula').value;
    validarYRegistrarUsuario(cedula);
}