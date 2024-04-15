// Simulador de vuelos

// Continentes adminitidos
let continentes = ["africa", "america", "asia", "europa", "oceania"]

let coincidencia = false
let inicio = null
let fin = null

while (coincidencia==false){
    inicio = prompt("Ingresa tu continente de partida sin tildes:")
    if(continentes.includes(inicio.toLowerCase())){
        console.log("En la lista");
        coincidencia = true;
    }
    else{
        console.log("No está en la lista");
    }
}
