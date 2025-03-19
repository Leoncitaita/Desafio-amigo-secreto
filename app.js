// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la 
// lógica para resolver el problema.

let amigos = [];
let listaAmigo = document.getElementById('listaAmigos');
let resultado = document.getElementById('resultado');

function agregarAmigo() {
    
    let input = document.getElementById('amigo');
    let nombres = input.value.trim();
    
    if (nombres === "") {
        alert('Por favor, inserte un nombre.');
        return;
       limpiarCaja();
        
    } 
    
    if (amigos.includes(nombres)){
        alert (` ${nombres} ya fue ingresado`)
        input.value = "";
        return ;
    } 
    
    amigos.push(nombres);
    console.log(amigos);
    limpiarCaja();
}

/*for (let i = 0; i < amigos.length; i++) {
        let nuevoAmigo = document.createElement('li');
        document.querySelector("#listaAmigos").innerHTML += "<li>"+nuevoAmigo+"</li>";
        //nuevoAmigo.textContent = amigos[i];
        //lista.appendChild(nuevoAmigo);
    }
    limpiarCaja();*/

function sortearAmigo() {
   
    if (amigos.length == 0) {
        alert('No hay amigos disponibles para sortear');
        return;
    }

    let aleatorio = Math.floor(Math.random() * amigos.length);

    let amigoSorteado = amigos[aleatorio];

    
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li> El amigo sorteado es: ${amigoSorteado}</li>`;
}

function limpiarCaja () {
    document.getElementById ('amigo').value = ' ';
}


function listar(){
    document.querySelector("#listaAmigos").addEventListener("click", nuevoAmigo);
}

function nuevoAmigo(){
    let usuario = document.querySelector("#amigo").value;
    document.querySelector("#listaAmigos").innerHTML += "<li>"+usuario+"</li>";
    return usuario;
}


agregarAmigo();
limpiarCaja();
listar();
nuevoAmigo();
