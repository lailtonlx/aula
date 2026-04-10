const form = document.querySelector("form");

form.addEventListener("submit", function(event) {
event.preventDefault();
alert
console.log("Formulário enviado!");

const nome = document.getElementById("nome").value;
console.log(nome);
//alert(nome)

if (nome.length < 3) {
alert("O nome deve ter pelo menos 3 caracteres.");
return;
}
if (!email.includes("@")) {
alert("Email inválido.");
return;
}
});
document.getElementById("btnAlerta")
.addEventListener("click", function() {
alert("Olá! JavaScript funcionando!");
});
document.getElementById("btnCor")
.addEventListener("click", function() {
document.body.style.backgroundColor = "lightblue";
});
document.getElementById("btnConteudo")
.addEventListener("click", function() {;
});
document.getElementById("conteudo").innerText =
"conteudo alterado diretamente!";git add .
git commit -m "Aprimorando layout com container e efeitos visuais"