//agregar
//borrar
//ordenar por año
//recomendar por rate 
//contador de lista final de peliculas 


console.log(peliculas)

class Pelicula {
    constructor(pelicula){
        this.id=pelicula.id;
        this.nombre=pelicula.nombre;
        this.duracionHoras=pelicula.duracionHoras;
        this.categoria=pelicula.categoria;
        this.año=pelicula.año;
        this.rate=pelicula.rate;
    }
}

class Producer {
    constructor(peliculas) {
        this.peliculas = peliculas
    }

    add(){
        let id = prompt("Agrega el numero de id para tu pelicula")
        let nombre=prompt("Agrega el nuevo nombre de una pelicula");
        let duracionHoras=prompt("Cuanto dura la pelicula?");
        let categoria=prompt("Que categoria es esa pelicula?");
        let año=prompt("De que año es esa pelicula?");
        let rate=prompt("Que rate tiene la pelicula? (Escribe del 1 al 5)")

        this.peliculas.push(new Pelicula({id, nombre, duracionHoras, categoria, año, rate}))
    }
    
    remove(){
        let toRemove = parseInt(prompt("Ingresa el ID de la pelicula que deseas eliminar"));

       for(const unaPelicula of peliculas){
           console.log(unaPelicula.id)
           if(unaPelicula.id == null) {
               prompt("Porfavor vuelva a ingresar el numero ID de la pelicula que deseas eliminar")
           } else {
               const index = peliculas.findIndex(function (pelicula) {
                return pelicula.id === toRemove
            })

           return  this.peliculas.splice(index, 1);

            }

        }   
    }

    orderPerYear(){
        return this.peliculas.sort((a, b) => {
            const añoA = a.año;
            const añoB = b.año;
    
            let comparison = 0;

            if (añoA > añoB) {
                comparison = 1;
            } else if (añoA < añoB) {
                comparison = -1;
            }

            return comparison
        });
    }

    recommended(){

        let recomendados = []
        for (const pelicula of this.peliculas) {
            if(pelicula.rate === 4 || pelicula.rate ===5) {
                recomendados.push(pelicula)
            }
        }

        return recomendados
    }

    movieQuantity(){
        let quantity = this.peliculas.length;
        console.log("El total de la lista de peliculas es " + quantity)
        return console.table(this.peliculas);

    }

    
}



let Netflix = new Producer(peliculas)
