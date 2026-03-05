import { db } from "./firebase.js";
import { doc, getDoc, setDoc } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

window.entrar = async function () {

let nome = document.getElementById("nomePersonagem").value;

if(nome == ""){
alert("Digite o nome do personagem");
return;
}

const ref = doc(db, "personagens", nome);
const personagem = await getDoc(ref);

if(!personagem.exists()){

await setDoc(ref,{
nome:nome,
dinheiro:10000,
rp:0,
forca:1,
agilidade:1,
inteligencia:1
});

}

localStorage.setItem("personagem", nome);

window.location.href = "ficha.html";

}
