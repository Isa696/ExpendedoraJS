
const precioCoca = 25
const precioPepsi =23
const precioSprite = 20
const PrecioFanta = 22

function comprarCoca(dinero){
    if(dinero > precioCoca){
        let cambio = dinero - precioCoca
        return "compra exitosa aca tenes el cambio: $" + cambio
    }else if(dinero < precioCoca){
        return "olvidate sos un rata"
    }else if(dinero == precioCoca){
        return "compra exitosa"
    }else {
        return "el valor ingresado no es valido, ingrese un numero"
}}

function comprarPepsi(dinero){
    if(dinero > precioPepsi){
        let cambio = dinero - precioPepsi
        return "compra exitosa aca tenes el cambio: $" + cambio
    }else if(dinero < precioPepsi){
        return "olvidate sos un rata"
    }else if(dinero == precioPepsi){
        return "compra exitosa"
    }else {
        return "el valor ingresado no es valido, ingrese un numero"
}}

function comprarSprite(dinero){
    if(dinero > precioSprite){
        let cambio = dinero - precioSprite
        return "compra exitosa aca tenes el cambio: $" + cambio
    }else if(dinero < precioSprite){
        return "olvidate sos un rata"
    }else if(dinero == precioSprite){
        return "compra exitosa"
    }else {
        return "el valor ingresado no es valido, ingrese un numero"
}}

function comprarFanta(dinero){
    if(dinero > PrecioFanta){
        let cambio = dinero - PrecioFanta
        return "compra exitosa aca tenes el cambio: $" + cambio
    }else if(dinero < PrecioFanta){
        return "olvidate sos un rata"
    }else if(dinero == PrecioFanta){
        return "compra exitosa"
    }else {
        return "el valor ingresado no es valido, ingrese un numero"
}}

let comprarBebida = ""

let volverAcomprar = true

do{
    switch(comprarBebida = (prompt("Que bebida desea comprar? Coca, Pepsi, Sprite o Fanta").toLowerCase())){
        case "coca":
            alert(comprarCoca(parseInt(prompt("queres comprar una Coca? (costo $25) Ingresa un numero"))))
            break
        case "pepsi":
            alert(comprarPepsi(parseInt(prompt("queres comprar una Pepsi? (costo $23) Ingresa un numero"))))
            break
        case "sprite":
            alert(comprarSprite(parseInt(prompt("queres comprar una Sprite? (costo $20) Ingresa un numero"))))
            break
        case "fanta":
            alert(comprarFanta(parseInt(prompt("queres comprar una Fanta? (costo $22) Ingresa un numero"))))
            break
    }
    volverAcomprar = confirm("desea volver a intentar?")
}while(volverAcomprar == true)
alert("Hasta luego :)")



