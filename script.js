// Simulador astronómico

// Variables
// Constantes en sistema internacional
const CONSTANTE_GRAVEDAD = 6.67430 * (10 ** (-11));
const VELOCIDAD_LUZ = 299792458;
const ACELERACION_TIERRA = 9.80665


//Variables
let cuerpos = [];
let maxCuerpos = 4;

//Funciones

function calcularRadioSchwarzschild(masa){
    let radioSchwarzschild = (2 * CONSTANTE_GRAVEDAD * masa) / (VELOCIDAD_LUZ ** 2);
    return radioSchwarzschild 
}

function calcularVelocidadDeEscape(masa, diametro) {
    let velocidadDeEscape = ((2 * CONSTANTE_GRAVEDAD * masa) / diametro) ** (1/2)
    return velocidadDeEscape
}

function calcularPesoComparadoTierra(masa, diametro) {
    let aceleracionCuerpo = (CONSTANTE_GRAVEDAD * masa) / ((diametro / 2) ** 2)
    return aceleracionCuerpo / ACELERACION_TIERRA 
}


// Usuario ingresa los valores de las masas
for (let i = 0; i<maxCuerpos; i++) {
    let mensaje = `Por favor ingresa la masa del cuerpo ${i + 1} en kg:`;
    let masa;
    do {
        masa = prompt(mensaje);
        if (isNaN(masa) || masa === null) {
            mensaje = `Por favor ingresa un valor válido para la masa del cuerpo ${i + 1} en kg:`
        }
    } while (isNaN(masa) || masa === null);

    masaCuerpos.push(parseFloat(masa));
}



for (let i = 0; i<maxCuerpos; i++){
    mensaje = `El radio de Schwarzschild ${i + 1} es:`;
    console.log(mensaje + calcularRadioSchwarzschild(masaCuerpos[i]));
}

alert("Perfecto, ahora ingresa los diámetros")

// Usuario ingresa los valores de los diametros
for (let i = 0; i<maxCuerpos; i++) {
    let mensaje = `Por favor ingresa el diámetro del cuerpo ${i + 1} en km:`;
    let diametro;
    do {
        diametro = prompt(mensaje);
        if (isNaN(diametro) || diametro === null) {
            mensaje = `Por favor ingresa un valor válido para el diámetro del cuerpo ${i + 1} en km:`
        }
    } while (isNaN(diametro) || diametro === null);

    diametroCuerpos.push(parseFloat(diametro)*1000);
}



for (let i = 0; i<maxCuerpos; i++){
    mensaje = `La velocidad de escape del cuerpo ${i + 1} es:`
    console.log(mensaje + calcularVelocidadDeEscape(masaCuerpos[i], diametroCuerpos[i]));
}

// Peso comparado con la Tierra
for (let i = 0; i<maxCuerpos; i++){
    console.log(`En el cuerpo ${i + 1} serías ` + calcularPesoComparadoTierra(masaCuerpos[i], diametroCuerpos[i]) + " veces más pesado en la Tierra");
}
