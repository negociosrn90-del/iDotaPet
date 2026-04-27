const animais = [
  { nome: "Rex", tipo: "cachorro", idade: "2 anos", descricao: "Brincalhão", imagem: "https://placedog.net/300/200?id=1" },
  { nome: "Luna", tipo: "cachorro", idade: "1 ano", descricao: "Carinhosa", imagem: "https://placedog.net/300/200?id=2" },
  { nome: "Thor", tipo: "cachorro", idade: "3 anos", descricao: "Protetor", imagem: "https://placedog.net/300/200?id=3" },
  { nome: "Mia", tipo: "gato", idade: "2 anos", descricao: "Tranquila", imagem: "https://cataas.com/cat?width=300&height=200" },
  { nome: "Simba", tipo: "gato", idade: "1 ano", descricao: "Brincalhão", imagem: "https://cataas.com/cat?width=301&height=200" },
  { nome: "Nina", tipo: "gato", idade: "4 anos", descricao: "Muito dócil", imagem: "https://cataas.com/cat?width=302&height=200" }
];

const lista = document.getElementById("lista-animais");

function mostrarAnimais(filtro = "todos") {
  lista.innerHTML = "";

  animais
    .filter(a => filtro === "todos" || a.tipo === filtro)
    .forEach(animal => {
      const card = document.createElement("div");
      card.className = "card";

      card.innerHTML = `
        <img src="${animal.imagem}" width="100%">
        <h3>${animal.nome}</h3>
        <p>${animal.idade}</p>
        <p>${animal.descricao}</p>
        <button class="adotar" onclick="adotar('${animal.nome}')">Quero adotar</button>
      `;

      lista.appendChild(card);
    });
}

function adotar(nome) {
  alert(`Você demonstrou interesse em adotar ${nome}!`);
}

mostrarAnimais();