const animais = [
  { nome: "Rex", tipo: "cachorro", idade: "2 anos", descricao: "Brincalhão", imagem: "imagens/rex.jpg" },
  { nome: "Luna", tipo: "cachorro", idade: "1 ano", descricao: "Carinhosa", imagem: "imagens/luna.jpg" },
  { nome: "Thor", tipo: "cachorro", idade: "3 anos", descricao: "Protetor", imagem: "imagens/thor.jpg" },
  { nome: "Mia", tipo: "gato", idade: "2 anos", descricao: "Tranquila", imagem: "imagens/mia.jpg" },
  { nome: "Simba", tipo: "gato", idade: "1 ano", descricao: "Brincalhão", imagem: "imagens/simba.jpg" },
  { nome: "Nina", tipo: "gato", idade: "4 anos", descricao: "Muito dócil", imagem: "imagens/nina.jpg" }
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