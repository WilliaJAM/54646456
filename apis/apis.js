
function buscador() {
    const input = document.getElementById('buscador').value;
    if (input > 1025 || input < 1) {
        alert(`Pokemon no encontrado`)
    }else{
        const url = `https://pokeapi.co/api/v2/pokemon/${input}`;
        const nombre = document.getElementById('nombreP');
        const imagen = document.getElementById('imagen');
        const select = document.getElementById('moves');//selector de los movimientos
        const tipoPokemon = document.getElementById('pokemonTypes');
        select.innerHTML= '';
        fetch (url)
        .then(response => response.json())
        .then(data => {

            // sprite 
        imagen.src = data.sprites.front_default
        convertidorMayusculas(data.name);
        nombre.innerHTML = `Name : ${convertidorMayusculas(data.name)}`;
console.log(data)

        //verifica si tiene dos tipos
        if (data.types.length == 2) {
            tipoPokemon.textContent = `Type : ${convertidorMayusculas(data.types[0].type.name)} / ${convertidorMayusculas(data.types[1].type.name)}`
        } else{
            tipoPokemon.textContent = `Type : ${convertidorMayusculas(data.types[0].type.name)}`
        }
        
        console.log(data.moves.length);

        for (let i = 0; i < data.moves.length; i++) {
            const option = document.createElement('option');
            option.textContent = convertidorMayusculas(data.moves[i].move.name);
            
            select.appendChild(option);
            
        }
        })
        .catch(error => console.log(err));
    }
}


//vuelve la primera letra en mayus y el resto del string normal
function convertidorMayusculas(nombre) {

    let nombreRegistrado = nombre;

    //poner la primera letra en mayuscula
    nombreRegistrado = nombreRegistrado.substring(1); // elimina la primera letra del nombre

    const letraMayuscula = nombre.substring(0, 1).toLocaleUpperCase(); //extrae la primera letra y la convierte en mayusculas

        return letraMayuscula + nombreRegistrado; //retorna la palabra con la primers letra en mayus
}


