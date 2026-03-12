import { db } from "./firebase.js";
import { doc, getDoc } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

window.onload = async function(){

let usuario = localStorage.getItem("usuario");
let personagem = localStorage.getItem("personagem");

if(!usuario || !personagem){
alert("Personagem não encontrado");
window.location.href = "login.html";
return;
}

const ref = doc(db,"usuarios",usuario,"personagens",personagem);
const dados = await getDoc(ref);

if(dados.exists()){

let ficha = dados.data();

document.getElementById("nome").innerText = ficha.nome;
document.getElementById("idade").innerText = ficha.idade || "-";
document.getElementById("codinome").innerText = ficha.codinome || "-";
document.getElementById("equipe").innerText = ficha.equipe || "-";
document.getElementById("poder").innerText = ficha.poder || "-";

document.getElementById("vida").innerText = ficha.vida || "50/50";
document.getElementById("energia").innerText = ficha.energia || "50/50";

document.getElementById("combate").innerText = ficha.combate || 1;
document.getElementById("intelecto").innerText = ficha.intelecto || 1;
document.getElementById("carisma").innerText = ficha.carisma || 1;
document.getElementById("vigor").innerText = ficha.vigor || 1;
document.getElementById("mobilidade").innerText = ficha.mobilidade || 1;

document.getElementById("dinheiro").innerText = ficha.dinheiro || 0;

}

}
