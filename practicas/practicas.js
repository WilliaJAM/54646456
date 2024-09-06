
let arreglo = []
function agregarElementos() {
    let ingresar = document.getElementById('elementosdelArreglo').value;
    if(ingresar == ''){
        alert(`No se ha ingresado llene el campo`);
        
    }else{
        arreglo.push(ingresar);
        console.log(arreglo);
        document.getElementById('elementosdelArreglo').value = ''
        document.getElementById('elementosdelArreglo').focus();


    }
    
}

let ana = {
    "asda" : true,
    "saludar" : 12,
    "asdasd" : [{
        "true" : 12,
        "false" : 23
    }]
}