// Constantes

const suma=document.querySelector("#suma");
const resta=document.querySelector("#resta");
const multiplicacion=document.querySelector("#multiplicacion");
const divicion=document.querySelector("#division");
const limpiar= document.querySelector("#limpiar")

const valorUno = document.querySelector("#valor1");
const valorDos = document.querySelector("#valor2");
const resultado = document.querySelector("#resultado");

const txtvalor = document.querySelector(".txtvalor");
const contenedor = document.querySelectorAll(".text");

const seccion = document.querySelector(".contenedor")

//array mensaje
let msg=[];

//creacion etiquetas html
const sigSuma= document.createElement("label")
sigSuma.classList.add("element")
sigSuma.textContent="+";
sigSuma.setAttribute("id","label-sigsuma")

const sigResta= document.createElement("label")
sigResta.classList.add("element")
sigResta.textContent="-";

const sigMultiplicacion= document.createElement("label")
sigMultiplicacion.classList.add("element")
sigMultiplicacion.textContent="x";

const sigDivision= document.createElement("label")
sigDivision.classList.add("element")
sigDivision.textContent="÷";

const sigIgual= document.createElement("label")
sigIgual.classList.add("element")
sigIgual.textContent="=";

const mensaje= document.createElement("label")
mensaje.classList.add("mensaje")

console.log(msg)

for (let i = 0; i < msg.length; i++) {
    console.log(msg[i]);    
}

suma.addEventListener("click",(e)=>{
    
    if(e.target.value){
            contenedor[1].before(sigSuma)
            contenedor[2].before(sigIgual)

            sigResta.remove();
            sigMultiplicacion.remove();
            sigDivision.remove();
            
           if(valorUno.value==="" || valorDos.value===""){
             msg.push("Los campos estan incompletos")
             arreglo();
             seccion.appendChild(mensaje)
           }   else {
            console.log(operacionSuma(parseFloat(valorUno.value),parseFloat(valorDos.value)))

            setTimeout((e) => {
                seccion.removeChild(mensaje)
            }, 2000);

           }  
        }
})

resta.addEventListener("click",(e)=>{
    
    if(e.target.value){
            contenedor[1].before(sigResta)
            contenedor[2].before(sigIgual)

            sigSuma.remove();
            sigMultiplicacion.remove()
            sigDivision.remove();

           if(valorUno.value==="" || valorDos.value===""){
             msg.push("Los campos estan incompletos")
             arreglo();
             seccion.appendChild(mensaje)
           }   else {
            console.log(operacionResta(parseFloat(valorUno.value),parseFloat(valorDos.value)))

            setTimeout((e) => {
                seccion.removeChild(mensaje)
            }, 2000);

           }  
        }
})


multiplicacion.addEventListener("click",(e)=>{
    
    if(e.target.value){
            contenedor[1].before(sigMultiplicacion)
            contenedor[2].before(sigIgual)

            sigSuma.remove();
            sigResta.remove()
            sigDivision.remove();

           if(valorUno.value==="" || valorDos.value===""){
             msg.push("Los campos estan incompletos")
             arreglo();
             seccion.appendChild(mensaje)
           }   else {
            console.log(operacionMultiplicacion(parseFloat(valorUno.value),parseFloat(valorDos.value)))

            setTimeout((e) => {
                seccion.removeChild(mensaje)
            }, 2000);

           }  
        }
})

divicion.addEventListener("click",(e)=>{
    
    if(e.target.value){
            contenedor[1].before(sigDivision)
            contenedor[2].before(sigIgual)

            sigSuma.remove();
            sigResta.remove()
            sigMultiplicacion.remove();

           if(valorUno.value==="" || valorDos.value===""){
             msg.push("Los campos estan incompletos")
             arreglo();
             seccion.appendChild(mensaje)
           }   else {
            console.log(operacionDivision(parseFloat(valorUno.value),parseFloat(valorDos.value)))

            setTimeout((e) => {
                seccion.removeChild(mensaje)
            }, 2000);

           }  
        }
})

limpiar.addEventListener("click",(e)=>{
    valorUno.value="";
    valorDos.value="";
    resultado.value="";

    setTimeout((e) => {
        seccion.removeChild(mensaje)
    }, 1000);
})


//Operaciones aritmeticas

operacionSuma = (a,b) => {
    c = a + b
    return resultado.value = c
}   

operacionResta = (a,b) => {
    c = a - b
    return resultado.value = c
}   

operacionMultiplicacion = (a,b) => {
    c = a * b
    return resultado.value = c
}   

operacionDivision = (a,b) => {
    c = a / b
    return resultado.value = c
}   


function arreglo (){
    msg.forEach(function (valor){
        mensaje.textContent=valor
    }
  )
}