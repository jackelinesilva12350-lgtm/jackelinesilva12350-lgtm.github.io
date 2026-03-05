import { db } from "./firebase.js";
import { doc, getDoc } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const nome = localStorage.getItem("personagem");

const ref = doc(db,"personagens",nome);

const snap = await getDoc(ref);

const data = snap.data();

document.getElementById("dados").innerHTML = `
Nome: ${data.nome} <br>
Dinheiro: ${data.dinheiro} <br>
RP: ${data.rp} <br>
Força: ${data.forca} <br>
Agilidade: ${data.agilidade} <br>
Inteligência: ${data.inteligencia}
`;
