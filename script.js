const animais = [
  {
    nome: "Rex",
    tipo: "cachorro",
    idade: "2 anos",
    descricao: "Brincalhão",
    imagem: "imagens/rex.jpeg",
    contato: {
      nome: "João Silva",
      telefone: "(19) 99999-1111",
      email: "joao@email.com"
    }
  },
  {
    nome: "Luna",
    tipo: "cachorro",
    idade: "1 ano",
    descricao: "Carinhosa",
    imagem: "imagens/luna.jpeg",
    contato: {
      nome: "Maria Souza",
      telefone: "(19) 98888-2222",
      email: "maria@email.com"
    }
  },
  {
    nome: "Thor",
    tipo: "cachorro",
    idade: "3 anos",
    descricao: "Protetor",
    imagem: "imagens/thor.jpeg",
    contato: {
      nome: "Carlos Lima",
      telefone: "(19) 97777-3333",
      email: "carlos@email.com"
    }
  },
  {
    nome: "Mia",
    tipo: "gato",
    idade: "2 anos",
    descricao: "Tranquila",
    imagem: "imagens/mia.jpeg",
    contato: {
      nome: "Ana Paula",
      telefone: "(19) 96666-4444",
      email: "ana@email.com"
    }
  },
  {
    nome: "Simba",
    tipo: "gato",
    idade: "1 ano",
    descricao: "Brincalhão",
    imagem: "imagens/simba.jpeg",
    contato: {
      nome: "Fernanda Rocha",
      telefone: "(19) 95555-5555",
      email: "fernanda@email.com"
    }
  },
  {
    nome: "Nina",
    tipo: "gato",
    idade: "4 anos",
    descricao: "Muito dócil",
    imagem: "imagens/nina.jpeg",
    contato: {
      nome: "Ricardo Alves",
      telefone: "(19) 94444-6666",
      email: "ricardo@email.com"
    }
  },
  {
    nome: "Bob",
    tipo: "cachorro",
    idade: "3 anos",
    descricao: "Muito calmo",
    imagem: "imagens/bob.jpeg",
    contato: {
      nome: "Juliana Martins",
      telefone: "(19) 93333-7777",
      email: "juliana@email.com"
    }
  },
  {
    nome: "Caramelo",
    tipo: "cachorro",
    idade: "4 anos",
    descricao: "Cachorro muito atento",
    imagem: "imagens/caramelo.jpeg",
    contato: {
      nome: "Paulo Henrique",
      telefone: "(19) 92222-8888",
      email: "paulo@email.com"
    }
  },
  {
    nome: "Lulu",
    tipo: "gato",
    idade: "2 anos",
    descricao: "Brincalhão",
    imagem: "imagens/lulu.jpeg",
    contato: {
      nome: "Camila Santos",
      telefone: "(19) 91111-9999",
      email: "camila@email.com"
    }
  },
  {
    nome: "Reis",
    tipo: "cachorro",
    idade: "4 anos",
    descricao: "Fácil de lidar",
    imagem: "imagens/reis.jpeg",
    contato: {
      nome: "Bruno Costa",
      telefone: "(19) 90000-0000",
      email: "bruno@email.com"
    }
  }
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
        <div class="card-inner">
    
        <div class="card-front">
        <img src="${animal.imagem}">
        <h3>${animal.nome}</h3>
        <p>${animal.idade}</p>
        <p>${animal.descricao}</p>
        <button onclick="virarCard(this)">Ver contato</button>
        </div>

        <div class="card-back">
        <h3>Contato</h3>
        <p><strong>Dono:</strong> ${animal.contato.nome}</p>
        <p><strong>Telefone:</strong> ${animal.contato.telefone}</p>
        <p><strong>Email:</strong> ${animal.contato.email}</p>
        <button onclick="virarCard(this)">Voltar</button>
        </div>

        </div>
      `;

      lista.appendChild(card);
    });
}

function adotar(nome) {
  alert(`Você demonstrou interesse em adotar ${nome}!`);
}

function mostrarContato(botao) {
  const contatoDiv = botao.nextElementSibling;

  if (contatoDiv.style.display === "none") {
    contatoDiv.style.display = "block";
    botao.textContent = "Ocultar contato";
  } else {
    contatoDiv.style.display = "none";
    botao.textContent = "Ver contato";
  }
}

function virarCard(botao) {
  const card = botao.closest(".card");
  card.classList.toggle("flip");
}

mostrarAnimais();