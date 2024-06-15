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
    //obtener los valores de los inputs
    const nombre = document.getElementById('nombre').value;
    const masa = document.getElementById('masa').value;
    const diametro = document.getElementById('diametro').value;

    // verificar que se ingresaron todos los datos
    if (nombre.trim()==='' || masa.trim()==='' || diametro.trim()==='') {
        alert("Ingresa todos los datos del cuerpo, por favor");
        return;
    }

    // verificar si se puede añadir al array
    if (cuerpos.length < maxCuerpos) {
        const cuerpo = new CuerpoCeleste(nombre, masa, diametro);
        cuerpos.push(cuerpo);
        actualizarContador();
        actualizarResultados();

        // limpiar los inputs para no confundir. Probablemente hay una manera más elegante
        document.getElementById('nombre').value = '';
        document.getElementById('masa').value = '';
        document.getElementById('diametro').value = '';

    } else {
        alert("Ya has ingresado el máximo número de cuerpos");
    }

}

function actualizarContador() {
    let contador = document.getElementById('contador');
    contador.textContent = maxCuerpos - cuerpos.length;
}

function actualizarResultados() {
    let listaResultados = document.querySelector('#lista-resultados');
    listaResultados.innerHTML = ''; // Limpiar la lista antes de agregar los resultados

    /* acá sería interesante que por cada fila-cuerpo, los métodos aplicados sean una fila nueva. Por ejemplo:
    * El cuerpo Cuerpo1 de masa ...... siguientes:
        * Radio de Schwarzschild: 
        * Velocidad de Escape:
        * Peso comparado con el de la Tierra:
    */
   
    cuerpos.forEach((cuerpo, index) => {
        let item = document.createElement('li');
        item.textContent = `El cuerpo ${cuerpo.nombre} de masa ${cuerpo.masa} y diámetro ${cuerpo.diametro} tiene las siguientes características:\n` +
                           `\tRadio de Schwarzschild: ${cuerpo.calcularRadioSchwarzschild()}\n` +
                           `\tVelocidad de Escape: ${cuerpo.calcularVelocidadDeEscape()}\n` +
                           `\tPeso comparado con el de la Tierra: ${cuerpo.calcularPesoComparadoTierra()}`;
        listaResultados.appendChild(item);
    });
}


const url = "./bd/planetas.json"

fetch(url)
.then(res => res.json())
.then(data => console.log)
