function formulaTriangulo() {
    //Perimetro
    let valorTriangulo1 = parseInt(document.getElementById("valor1").value);
    let valorTriangulo2 = parseInt(document.getElementById("valor2").value);
    let valorTriangulo3 = parseInt(document.getElementById("valor3").value);
//Area
    let valorTrianguloArea = parseInt(document.getElementById("valorArea").value);
    let valorTrianguloArea2 =  parseInt(document.getElementById("valorArea2").value);
    
    let procedimiento1 = valorTriangulo1 + valorTriangulo2 + valorTriangulo3
    document.getElementById("resultado1").innerHTML= procedimiento1;

    if (valorTrianguloArea === valorTriangulo2){
        
        let procedimiento2 = (valorTrianguloArea * valorTrianguloArea2) / 2
        document.getElementById("resultado2").innerHTML= procedimiento2;

    }else {
        alert ("Los valores del triangulo no coinciden ( verifique si la base coinciden).")

    }
}

function formulaCuadradoR() {
    //Perimetro
    let valorCuadrado1 = parseInt(document.getElementById("valorAreaR").value);
    let valorCuadrado2 = parseInt(document.getElementById("valorAreaR2").value);

    //Area
    let valorCuadrado3 = parseInt(document.getElementById("valorR1").value);
    let valorCuadrado4 = parseInt(document.getElementById("valorR2").value);

    if (valorCuadrado1 === valorCuadrado3 && valorCuadrado2 === valorCuadrado4){
        let procedimientoCuadrado1 = 2 * (valorCuadrado1 + valorCuadrado2);
        document.getElementById("resultadoRectangulo").innerHTML=procedimientoCuadrado1
        let procedimientoCuadrado2 = valorCuadrado3 + valorCuadrado4
        document.getElementById("resultadoRectangulo2").innerHTML=procedimientoCuadrado2  

    }else {
        alert ("Los valores del cuadrado rectangulo no coinciden (verifique que los valores son los mismos).")

    }
}
function formulaCuadrado() {
    //Perimetro
    let valorCuadrado1 = parseInt(document.getElementById("valorCuadrado").value);

    //Area
    let valorCuadrado2 = parseInt(document.getElementById("valorC").value);
    

    if (valorCuadrado1 === valorCuadrado2){
        let procedimientoCuadrado1 = Math.trunc (4 * valorCuadrado1);
        document.getElementById("resultadoC").innerHTML=procedimientoCuadrado1
        let procedimientoCuadrado2 = Math.trunc ( 2 ** valorCuadrado2 );
        document.getElementById("resultadoC2").innerHTML=procedimientoCuadrado2  
        
        
    }else {
       alert ("Los valores del cuadrado no coinciden (verifique que los valores son los mismos).")
    }
    
}
function formulaCirculo() {
     //Perimetro
     let valorCuadrado1 = parseInt(document.getElementById("valorCirculo").value);

     //Area
     let valorCuadrado2 = parseInt(document.getElementById("valorCirculo2").value);
     
 
     if (valorCuadrado1 == valorCuadrado2){
         let procedimientoCuadrado1 = Math.trunc (2 * Math.PI * (valorCuadrado1 ** 2 ));
         document.getElementById("resultadoCirculo").innerHTML=procedimientoCuadrado1
         let procedimientoCuadrado2 =  Math.trunc (Math.PI * (valorCuadrado2 ** 2));
         document.getElementById("resultadoCirculo2").innerHTML=procedimientoCuadrado2  
         
     }else {
        alert ("Los valores del circulo no coinciden (verificar si los valores coinciden).")
     }
    
}

