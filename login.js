import { db } from "./firebase.js";
import { doc, getDoc, setDoc } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

window.entrar = async function () {

try {

let nome = document.getElementById("nomePersonagem").value.trim();

if(nome === ""){
alert("Digite o nome do personagem");
return;
}

// referência no banco
const ref = doc(db, "personagens", nome);

// verifica se personagem já existe
const personagem = await getDoc(ref);

if(!personagem.exists()){

await setDoc(ref,{
nome: nome,
dinheiro: 10000,
rp: 0,
forca: 1,
agilidade: 1,
inteligencia: 1
});

}

// salva no navegador
localStorage.setItem("personagem", nome);

// abre a ficha
window.location.href = "ficha.html";

} catch(error){

console.error("Erro no login:", error);
alert("Erro ao acessar o sistema. Verifique o console.");

}

}
