// Simulador astronómico

// Variables
// Constantes en sistema internacional
const CONSTANTE_GRAVEDAD = 6.67430 * (10 ** (-11));
const VELOCIDAD_LUZ = 299792458;


//Variables
let masaCuerpos = [];
let maxCuerpos = 4;

//Funciones

function CalcularRadioSchwarzschild(masa){
    let radioSchwarzschild = (2 * CONSTANTE_GRAVEDAD * masa) / (VELOCIDAD_LUZ ** 2);
    return radioSchwarzschild 
}

for (let i = 0; i<maxCuerpos; i++) {
    let mensaje = `Por favor ingresa la masa del cuerpo ${i + 1} en kg:`;
    let masa;
    do {
        masa = prompt(mensaje);
        if (isNaN(masa) || masa === null) {
            mensaje = `Por favor ingresa un valor válido para la masa del cuerpo ${i + 1} en kg:`
        }
    } while (isNaN(masa) || masa === null)

    masaCuerpos.push(parseFloat(masa))
}