const pi = 3.14;
export let miArray = []
export function area(radio) {
    return pi*radio**2;
}
export function agregar() {
    let input = prompt(`a`)
    miArray.push(input);
    console.log(miArray);
    while(confirm(`Agregar mas?`)){
        let input = prompt(`Agregue`);
        miArray.push(input);

    }
}

