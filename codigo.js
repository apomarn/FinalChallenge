
// 1-. carusel muestra peliculas con 4 o mas de rating
// 2-. agrega peliculas
// 3-. borra peliculas
// 4-. ordena por peliculas por anio
// 5-. conteo de peliculas


//funcion que llama a mi json de peliculas
async function obtenerPeliculas () {
   const miJSON = "/peliculas.json"
   const resp = await fetch(miJSON);
   const peliculas = await resp.json()



   console.log(peliculas)



    //constrictor modelo de la info de las peliculas
   class Pelicula {
    constructor(pelicula){
        this.id=pelicula.id;
        this.nombre=pelicula.nombre;
        this.image=pelicula.image;
        this.duracionHoras=pelicula.duracionHoras;
        this.categoria=pelicula.categoria;
        this.año=pelicula.año;
        this.rate=pelicula.rate;
    }
}


// Las siguientes dos funciones hacen que los forms desaparescan

function eraseAddForm() {
    const agregarPelicula = document.getElementById("agregarPelicula");
    agregarPelicula.innerHTML = ``
}

function eraseRemoveForm(){
    const removePelicula = document.getElementById("removerPelicula");
    removePelicula.innerHTML = ``
}


//desaparece el div rojo conteniendo los botones de agregar y borrar

function hideButtons() {
    const agregarRemover = document.getElementById("agregarRemover");
    agregarRemover.style.display = "none";
}
//agrega el div rojo conteniendo los botones de agregar y borrar

function showButtons() {
    const agregarRemover = document.getElementById("agregarRemover");
    agregarRemover.style.display = "block";
}



class Producer {
    constructor(peliculas) {
        console.log(peliculas);

        const local = localStorage.getItem("peliculas");
        // console.log(local)
        if(!local) {
            this.peliculas = JSON.stringify(peliculas);
            localStorage.setItem("peliculas", this.peliculas)
            
            
            console.log(this.peliculas)
        } else {
            
            this.peliculas = JSON.parse(local);
            console.log(this.peliculas)
        }

       

    }
    
    //funcion que desaparece los botones de agregar y borrar, y llama al formulario
    add(){
        
        this.showForm();
        hideButtons();
    
            
    }

    //el form para agregar una pelicula
    showForm() {

        const agregarPelicula = document.getElementById("agregarPelicula")
                agregarPelicula.innerHTML = `
                <form id="form">

                <p>Entra los detalles de tu pelicula</p>
                <label class="labels" name="id">Ingresa el numero ID de tu pelicula</label><br>
                <input class="inputs" type="number" id="id" name="id"></input><br>
        
                <label class="labels"  name="nombre">Ingresa el nombre de tu pelicula</label><br>
                <input class="inputs" type="text" id="nombre" name="nombre"></input><br>
        
                <label class="labels" name="image">Ingresa el link de la imagen de tu pelicula</label><br>
                <input class="inputs" type="text" id="image" name="image"></input><br>
        
                <label class="labels" name="duracionHoras">Ingresa la duracion de tu pelicula en horas</label><br>
                <input class="inputs" type="number" id="duracionHoras" name="duracionHoras"></input><br>
        
                <label class="labels" name="categoria">Ingresa la categoria de tu pelicula</label><br>
                <input type="checkbox" class="categorias labels" value="accion" name="accion">Accion</input><br>
                <input type="checkbox" class="categorias labels" value="comedia" name="comedia">Comedia</input><br>
                <input type="checkbox" class="categorias labels" value="documental" name="documental">Documental</input><br>
                <input type="checkbox" class="categorias labels" value="drama" name="drama">Drama</input><br>
                <input type="checkbox" class="categorias labels" value="infantil" name="infantil">Infantil</input><br>
                <input type="checkbox" class="categorias labels" value="terror" name="terror">Terror</input><br>
        
                <label class="labels" name="año">Ingresa el año de tu pelicula</label><br>
                <input class="inputs" type="number" id="año" name="año"></input><br>
        
                <label class="labels" name="rate">Ingresa el rate de tu pelicula</label><br>
                <input class="rates inputs" type="checkbox" value="rate1" name="rate1">1</input><br>
                <input class="rates inputs" type="checkbox" value="rate2" name="rate2">2</input><br>
                <input class="rates inputs" type="checkbox" value="rate3" name="rate3">3</input><br>
                <input class="rates inputs" type="checkbox" value="rate4" name="rate4">4</input><br>
                <input class="rates inputs" type="checkbox" value="rate5" name="rate5">5</input><br>

                <input id="myBtn" class="boton" type="button" value="Agregar Pelicula" onclick="Netflix.onSubmitAdd()"></input>

            </form>
                `

                //css para el form
            let form = document.getElementById("form");
            form.style.display="flex";
            form.style.flexDirection="column";
            form.style.width="auto";
            form.style.alignItems="center";
            form.style.background="white";


            let labels = document.getElementsByClassName("labels");
                for (const label of labels) {
                    label.style.color="red";
                    label.style.margin="0px";
                    label.style.padding="0px"
                }
            
            let inputs = document.getElementsByClassName("inputs");
                for (const input of inputs){
                    input.style.background="transparent";
                    input.style.border="0";
                    input.style.borderBottom="2px solid red";
                    input.style.transition= "border-color 0.2s";
                }

    
    }
    
    
    inputChecked (array) {
        console.log(array)
        let peliculaChecked = [];
        for (const isItChecked of array) {
            if(isItChecked.checked === true) {
                peliculaChecked.push(isItChecked.value);
                }
            }

            return peliculaChecked;
    }

    //agarrando la info de los inputs y guardandolo en el local storage
    onSubmitAdd(){

        console.log("onsubmit")
      
    
        let id = document.getElementById("id").value;
                    let nombre= document.getElementById("nombre").value;
                    let image=document.getElementById("image").value;
                    let duracionHoras=document.getElementById("duracionHoras").value;
                    let categorias=  document.getElementsByClassName("categorias");
                    let categoria = this.inputChecked(categorias);
                    let año=document.getElementById("duracionHoras").value;
                    let rates= document.getElementsByClassName("rates");
                    let rate=this.inputChecked(rates);

                    

                        Swal.fire({
                         title: 'Genial!',
                         text: 'Agregaste una pelicula!',
                         icon: 'success',
                         confirmButtonText: 'Cool'
                        })
                    
            
                
                let newPelicula={id, nombre, image, duracionHoras, categoria, año, rate};
                
                this.peliculas = [...this.peliculas, new Pelicula(newPelicula)]
                
                localStorage.setItem("peliculas", JSON.stringify(this.peliculas))
                
                



                updatingPeliculas(this.peliculas);
                this.movieQuantity();
                eraseAddForm();
                showButtons();
    }
    

    //form para elimina las peliculas
    remove(){

        hideButtons();

        let checkboxes = ''
        for(const pelicula of this.peliculas) {
            checkboxes += `<input type="checkbox" class="listaRemover" value="${pelicula.nombre}">${pelicula.nombre}</input>`
        }
        console.log(checkboxes)
        let toRemove = document.getElementById("removerPelicula");
        toRemove.innerHTML = `
        <form id="form">
            <p class="labels" >Cual de las peliculas deseas borrar?</p>
            <p class="checkboxes">
            ${checkboxes}
            </p>
            <input id="myBtn" class="boton" type="button" value="Borrar Pelicula" onclick="Netflix.onSubmitRemove()"></input>
        </form>
    `

    let form = document.getElementById("form");
    form.style.display="flex";
    form.style.flexDirection="column";
    form.style.width="auto";
    form.style.alignItems="center";
    form.style.background="white";

    let allcheckboxes = document.getElementsByClassName("checkboxes");

    for (const checkbox of allcheckboxes) {
        checkbox.style.display="flex";
        checkbox.style.flexDirection="column";
        checkbox.style.margin="0px";
        checkbox.style.padding="25px";
        checkbox.style.borderBottom="1px solid red";
        checkbox.style.borderTop="1px solid red"
    }
   



    let labels = document.getElementsByClassName("labels");
        for (const label of labels) {
            label.style.color="red";
            label.style.margin="15px 0px";
            label.style.padding="0px"
        }
   
    }

    //funcion que elimina las peliculas
    onSubmitRemove () {
        let removeArray = document.getElementsByClassName("listaRemover");
        let removeChecked = this.inputChecked(removeArray);

        let leftPeliculas = []

        for (const pelicula of this.peliculas) {
            if(removeChecked.includes(pelicula.nombre) === false) {
                leftPeliculas.push(pelicula)
            }
        }

       

        this.peliculas = leftPeliculas
        localStorage.setItem("peliculas", JSON.stringify(this.peliculas))

        //confirmacion de borrado
        Swal.fire({
            title: 'Genial!',
            text: 'Borraste una pelicula!',
            icon: 'success',
            confirmButtonText: 'Cool'
           })

         //despues de eliminar hago update de las peliculas en display, y update de el contado, borra el formulario y agrega el div rojo  
         updatingPeliculas(this.peliculas);
         this.movieQuantity();
         eraseRemoveForm();
         showButtons();
           
    }
 
    //ordena las peliculas por anio
    orderPerYear(){
       
        let sorted = peliculas.sort((a, b) => {
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
       updatingPeliculas(sorted);
    }


    //en el carusel de bootstrap solo se mjuestra las peliculas recomendadas basadas en su rating de 4 puntos a mas.
    recommended(){

        let recomendados = []
        for (const pelicula of this.peliculas) {

            pelicula.rate === 4 || pelicula.rate === 5 ? recomendados.push(pelicula): undefined;
            // if(pelicula.rate === 4 || pelicula.rate === 5) {
            //     recomendados.push(pelicula)
            // }
        }

        let carousel = document.getElementsByClassName("cadaRecomendado")[0]

        for (const unRecomendado of recomendados) {
            carousel.innerHTML += `
            <div class="carousel-item active" data-bs-interval="2000" >
                <img
                src="${unRecomendado.image}"
                class="d-block w-100"
                alt="${unRecomendado.nombre}"
                />
                <p style="color: white;">${unRecomendado.nombre}</p>
            </div>
            
            `
        }
       

        
    }
    
    //funcion que muestra el total de peliculas
    movieQuantity(){
    let quantity = document.getElementById("movieQuantity");
    quantity.style.background="pink";
    quantity.style.height="100px";
    quantity.style.width="100px";
    quantity.style.color="black";
    return quantity.innerHTML = `

        <p> Total de Peliculas: ${this.peliculas.length}</p>
        `

    }

}

console.log(peliculas);

//incluyo nueva pelicula 
Netflix = new Producer(peliculas)



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


function borrarTodasPeliculas (parent) {
    while(parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}


updatingPeliculas(Netflix.peliculas);
Netflix.movieQuantity()
Netflix.orderPerYear()
Netflix.recommended()


//container con todas las peliculas

function updatingPeliculas(movies){
    const listaPeliculass = document.getElementById("listaPeliculas");
    listaPeliculass.style.display="flex";
    listaPeliculass.style.height="75px";
    listaPeliculass.style.justifyContent="center";
    listaPeliculass.style.alignItems="space between";
    listaPeliculass.style.flexWrap="wrap"

    borrarTodasPeliculas(listaPeliculass);

    for(const pelicula of movies) {

        const {image, nombre} = pelicula;
        let contenedorPelicula = document.createElement("div");
        
    
        contenedorPelicula.innerHTML = `
           <img class="peliculasImage" src="${image}">;
           <p class="peliculasNombre">${nombre}</p>
        `
       contenedorPelicula.style.margin="30px";
        listaPeliculass.append(contenedorPelicula)
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

}


let contenedorLista = document.getElementById("listaPeliculas");
contenedorLista.append(listaPeliculas)




}


obtenerPeliculas();








