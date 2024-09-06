
function resultado() {
    const selectorOperaciones = parseInt(document.getElementById('selector').value)
    const numero1 = parseInt(document.getElementById('input1').value);
    const numero2 = parseInt(document.getElementById('input2').value);

    if(numero1 != 0 && numero2 != 0){
        switch (selectorOperaciones) {
            case 1:
                sumar(numero1 , numero2);
                break;
                case 2:
                restar(numero1 , numero2);
                break;
                case 3:
                multiplicar(numero1 , numero2);
                break;
                case 4:
                    dividir(numero1 , numero2);
                    break;
        }
    }else{
        alert(`Ingrese numeros`)
    }
}

//funcion para mostrar el resultado
function mostarResult(variable, procedimiento) {
    const text = document.getElementById(variable)
    text.innerHTML = `Resultado : ${procedimiento}`
}
//funciuones con las operaciones
function sumar(a , b) {
    const procedimiento  = a + b
    console.log(procedimiento);
    mostarResult('document', procedimiento)
}
function restar(a , b) {
    const procedimiento  = a  - b
    console.log(procedimiento);
    mostarResult('document', procedimiento)
}function multiplicar(a , b) {
    const procedimiento  = a * b
    console.log(procedimiento);
    mostarResult('document', procedimiento)

}function dividir(a , b) {
    const procedimiento  = a / b
    console.log(procedimiento);
    mostarResult('document', procedimiento)
}