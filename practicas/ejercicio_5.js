

// let bodegaNumero1 = {nombre: 'bodega_1', arroz: 100000}
// let bodegaNumero2 = {nombre: 'bodega_2', arroz: 230000}

let inventario = [
    {nombre: 'Bodega Numero 1', arroz: 100000},
    {nombre: 'Bodega Numero 2', arroz: 230000}
]


const selector = document.getElementById('selectorBodega');

inventario.forEach(element => {
    const option = document.createElement('option');
    option.value = element.arroz;
    option.textContent = element.nombre;
    selector.appendChild(option);
});

function vender() {

    const selector = document.getElementById('selectorBodega').value;
    const asd1 = parseInt(document.getElementById('123').value)
    let asd = inventario.find((element) => element.arroz == selector);
    

}

