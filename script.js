const animais = [
  {
    nome: "Rex",
    idade: "2 anos",
    descricao: "Muito brincalhão",
    imagem: "https://placedog.net/300/200"
  },
  {
    nome: "Luna",
    idade: "1 ano",
    descricao: "Carinhosa e calma",
    imagem: "https://placedog.net/301/200"
  }
];

const lista = document.getElementById("lista-animais");

animais.forEach(animal => {
  const card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
    <img src="${animal.imagem}" width="100%">
    <h3>${animal.nome}</h3>
    <p>${animal.idade}</p>
    <p>${animal.descricao}</p>
    <button onclick="adotar('${animal.nome}')">Quero adotar</button>
  `;

  lista.appendChild(card);
});

function adotar(nome) {
  alert(`Você demonstrou interesse em adotar ${nome}!`);
}