let tuanimal= document.getElementById("boton_seleccionar");

tuanimal.addEventListener('click', Proceso)

function Proceso() {
    
    
    let AnimalUno = document.getElementById("OctoShnapps");
    let AnimalDos = document.getElementById("CopperGolem");
    let AnimalTres = document.getElementById("FireRatworks");
    let spanAnimal= document.getElementById("animalJugador");

    if (AnimalUno.checked) {

        spanAnimal.innerHTML = "OctoShnapps"

    }

    else if (AnimalDos.checked) {

        spanAnimal.innerHTML = "CopperGolem"

    }

    else if (AnimalTres.checked) {

        spanAnimal.innerHTML = "FireRatworks"
        
    }

    else (alert("Debe elegir un Animal"))

}