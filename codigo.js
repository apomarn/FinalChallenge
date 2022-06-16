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
        this.image=pelicula.image;
        this.duracionHoras=pelicula.duracionHoras;
        this.categoria=pelicula.categoria;
        this.año=pelicula.año;
        this.rate=pelicula.rate;
    }
}

//form agregar


function eraseAddForm() {
    const agregarPelicula = document.getElementById("agregarPelicula");
    agregarPelicula.innerHTML = ``
}

function eraseRemoveForm(){
    const removePelicula = document.getElementById("removerPelicula");
    removePelicula.innerHTML = ``
}

function hideButtons() {
    const agregarRemover = document.getElementById("agregarRemover");
    agregarRemover.style.display = "none";
}
function showButtons() {
    const agregarRemover = document.getElementById("agregarRemover");
    agregarRemover.style.display = "block";
}



class Producer {
    constructor(peliculas) {
        this.peliculas = peliculas
    }
    
    add(){
        
        this.showForm();
        hideButtons();
    
            
    }
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

                <input class="boton" type="button" value="Agregar Pelicula" onclick="Netflix.onSubmitAdd()"></input>

            </form>
                `

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
                    input.display.transition= "border-color 0.2s";
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
            
                
                    console.log({id, nombre, image, duracionHoras, categoria, año, rate})
            
                this.peliculas.push( new Pelicula({id, nombre, image, duracionHoras, categoria, año, rate}))
                updatingPeliculas(this.peliculas);
                this.movieQuantity();
                eraseAddForm();
                showButtons();
    }
    
    remove(){

        hideButtons();

        let checkboxes = ''
        for(const pelicula of this.peliculas) {
            checkboxes += `<input type="checkbox" class="listaRemover" value="${pelicula.nombre}">${pelicula.nombre}</input>`
        }
        console.log(checkboxes)
        let toRemove = document.getElementById("removerPelicula");
        toRemove.innerHTML = `
        <form>
            <p class="labels" >Cual de las peliculas deseas borrar?</p>
            ${checkboxes}
            <input class="boton" type="button" value="Borrar Pelicula" onclick="Netflix.onSubmitRemove()"></input>
        </form>
    `
   
    }

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

 
         updatingPeliculas(this.peliculas);
         this.movieQuantity();
         eraseRemoveForm();
         showButtons();
           
    }
 
    orderPerYear(){
       
        let sorted = this.peliculas.sort((a, b) => {
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

    recommended(){

        let recomendados = []
        for (const pelicula of this.peliculas) {
            if(pelicula.rate === 4 || pelicula.rate === 5) {
                recomendados.push(pelicula)
            }
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

        let contenedorPelicula = document.createElement("div");
        
    
        contenedorPelicula.innerHTML = `
           <img class="peliculasImage" src="${pelicula.image}">;
           <p class="peliculasNombre">${pelicula.nombre}</p>
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