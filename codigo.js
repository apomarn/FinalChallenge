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

//////// Agregando estilos ////////
let body = document.getElementById("body");
body.style.background="black";
body.style.display="flex";
body.style.alignContent="center";
body.style.flexDirection="column";
body.style.margin="10px 20px";
body.style.textAlign= "center";

let titulo = document.getElementById("titulo");
titulo.style.font = "bold 80px arial";
titulo.style.color = "red";

let frase = document.getElementById("frase");
frase.style.color= "#D3D3D3";

let agregarRemover = document.getElementById("agregarRemover");
agregarRemover.style.padding="20px 10px";
agregarRemover.style.background="red";

let filter = document.getElementById("filter");
filter.style.padding="20px 10px";
filter.style.background="blue";

let botones = document.getElementsByClassName("boton");
for (const boton of botones) {
    boton.style.background="gray";
    boton.style.borderRadius="20px";
    boton.style.padding="10px 15px";
    boton.style.color="white"
}


//div de peliculas
let listaPeliculas = document.createElement("div");
listaPeliculas.style.display="flex";
listaPeliculas.style.height="75px";
listaPeliculas.style.justifyContent="center";
listaPeliculas.style.alignItems="space between";
listaPeliculas.style.flexWrap="wrap"




//cada pelicula
for(const pelicula of Netflix.peliculas) {
    let contenedorPelicula = document.createElement("div");
    

    contenedorPelicula.innerHTML = `
       <img class="peliculasImage" src="https://thumbs.dreamstime.com/b/big-open-clapper-board-movie-reel-cinema-icon-set-movie-film-elements-flat-design-cinema-movie-time-flat-icons-f-95500226.jpg">;
       <p class="peliculasNombre">${pelicula.nombre}</p>
    `
   contenedorPelicula.style.margin="30px";
    listaPeliculas.append(contenedorPelicula)
}

let peliculasImage = document.getElementsByClassName("peliculasImage");
setTimeout(function() {
    for (const image of peliculasImage){
        image.style.height= "150px";
        image.style.width="150px";
    }
},0)

let peliculasNombre = document.getElementsByClassName("peliculasNombre");
setTimeout(function() {
    for (const nombre of peliculasNombre){
        nombre.style.height= "50px";
        nombre.style.width="150px";
        nombre.style.color="white";
        nombre.style.fontSize="16px";
      
    }
},0)




let contenedorLista = document.getElementById("listaPeliculas");
contenedorLista.append(listaPeliculas)


/****
 * 1-. printear pelicula nueva
 * 2-. mas opciones en filtrar
 * 3-. eliminar peliculas en el dom
 * 4-. Div para agregar y desaparecer forms para las funciones add & remove,(para ya no usar el prompt)
 * 5-. agregar detalle de cada pelicula o el trailer
 * 6-. inlcuir carousel con Bootstrap
 * 7-.?????
 * 8-.??????
 */