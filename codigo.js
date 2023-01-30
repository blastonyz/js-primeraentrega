alert("hola");
const nombre = prompt("ingrese un nombre de usuario");
let pass = parseInt(prompt("ingrese una clave numerica"));

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


