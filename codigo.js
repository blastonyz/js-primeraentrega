alert("hola");
const nombre = prompt("ingrese un nombre de usuario");
let pass = parseInt(prompt("ingrese una clave numerica"));
while (isNaN(pass)) {
    alert("caracteres invalidos");
    pass = parseInt(prompt("ingrese una clave numerica"));

}
alert("Gracias,ahora ingrese en el simulador con su usuario y contraseña");
let user= prompt("Nombre de Usuario")
let clave= parseInt(prompt("Contraseña"))

/*registro y validacion*/
for(let i=0;i<2;i=i+1){
    if(nombre==user && pass==clave){
     alert("Usuario y contraseña correctos");
     break;   
    }
    else{
        alert("usuario o contraseña incorrectos");
        user= prompt("Ingrese Nombre de Usuario");
        clave= parseInt(prompt("Contraseña"));

    }
}

let altura = parseInt(prompt("ingrese su altura en centimetros"));
let peso = parseInt(prompt("ingrese su peso en kilos"));    

/*calculo del indice de masa CORPORAL*/
function indicemc(altura,peso){
   altura=altura/100 
   let imc = peso/(altura*altura);
    return imc;
}


let indice = indicemc(altura,peso);
console.log(indice);
alert("su indice de masa corporal es " + indice);


if (18<indice && indice<=24) {
    alert("su IMC se encuentra entre 18 y 24, peso optimo");
}else if(24<indice && indice<=30){
                            alert("su IMC se encuentra entre 24 y 30,peso levemente excedido");
}else if(30<indice && indice<=35){
    alert("su IMC se encuentra entre 30 y 35,peso excedido ");
} 
else if(35<indice && indice<=40){
    alert("su IMC se encuentra entre 30 y 35,peso muy excedido ");
} 
else {
    alert("rango patológico,consulte a un profesional");
}
