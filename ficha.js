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
document.getElementById("dinheiro").innerText = ficha.dinheiro;
document.getElementById("rp").innerText = ficha.rp;
document.getElementById("forca").innerText = ficha.forca;
document.getElementById("agilidade").innerText = ficha.agilidade;
document.getElementById("inteligencia").innerText = ficha.inteligencia;

}

}
