let confirmar = confirm("Hola quieres saber? UwU");
if (confirmar=== true){
    let nobre = prompt("Ingrese su nombre:");
    let edad = prompt("Ingrese su edad:");
    let año = prompt("Ingrese año");
    let asd = año - edad
    document.write(`Hola ${nobre}, su edad es ${edad} y naciste ${asd}`)

}else{
    document.write("Pierdete >:v")
}