
const ages = [];
const maxAges = 10;

function addAge() {
    const ageInput = document.getElementById('ageInput');
    const age = parseInt(ageInput.value);
    if (age >= 1 && age <= 120) {
        ages.push(age);
        ageInput.value = '';
        updateAgeList();
        if (ages.length === maxAges) {
            document.getElementById('analyzeButton').disabled = false;
        }
    } else {
        alert('Por favor, ingrese una edad válida entre 1 y 120 años.');
    }
}

function updateAgeList() {
    const ageList = document.getElementById('ageList');
    ageList.innerHTML = ''; // Limpiar lista existente
    ages.forEach((age, index) => {
        const li = document.createElement('li');
        li.textContent = `Persona ${index + 1}: ${age} años`;
        ageList.appendChild(li);
    });
}

function analyzeAges() {
    const menoress = ages.filter(age => age < 18).length;
    const adultos = ages.filter(age => age >= 18 && age < 60).length;
    const señores = ages.filter(age => age >= 60).length;
    const edadMenor = Math.min(...ages);
    const mayorEdad = Math.max(...ages);
    const promedio = ages.reduce((acc, age) => acc + age, 0) / ages.length;

    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = `
        <h3>Análisis de Edades:</h3>
        <p>Menores de edad: ${menoress}</p>
        <p>Mayores de edad: ${adultos}</p>
        <p>Adultos mayores: ${señores}</p>
        <p>Edad más baja: ${edadMenor}</p>
        <p>Edad más alta: ${mayorEdad}</p>
        <p>Promedio de edades: ${promedio.toFixed(2)}</p>
    `;
}


