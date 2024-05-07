/* este es el js de la segunda entrega. Algunos elementos serán
copy-paste del original, pero cambia la lógica de implementación */

// Constantes
const CONSTANTE_GRAVEDAD = 6.67430 * (10 ** (-11));
const VELOCIDAD_LUZ = 299792458;
const ACELERACION_TIERRA = 9.80665;

// Variables
let maxCuerpos = 4;
let cuerpos = []  // array que contendrá a los objetos


//Clase CuerpoCeleste es la que tendrá todo lo asociado al cuerpo como atributo, y además tiene los métodos que realizan operaciones con estos


class CuerpoCeleste {
    constructor(nombre, masa, diametro) {
        this.nombre = nombre;
        this.masa = parseFloat(masa);
        this.diametro = parseFloat(diametro);
    }

    calcularRadioSchwarzschild(){
        let radioSchwarzschild = (2 * CONSTANTE_GRAVEDAD * this.masa) / (VELOCIDAD_LUZ ** 2);
        return radioSchwarzschild 
    }
    
    calcularVelocidadDeEscape() {
        let velocidadDeEscape = ((2 * CONSTANTE_GRAVEDAD * this.masa) / this.diametro) ** (1/2)
        return velocidadDeEscape
    }

    calcularPesoComparadoTierra() {
        let aceleracionCuerpo = (CONSTANTE_GRAVEDAD * this.masa) / ((this.diametro / 2) ** 2)
        return aceleracionCuerpo / ACELERACION_TIERRA 
    }
}

// funciones y lógica de interacción con el usuario

function agregarObjeto() {

}

function actualizarContador() {
    let contador = document.getElementById('contador');
    contador.textContent = cuerpos.length;
}