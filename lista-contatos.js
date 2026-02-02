const lista = document.getElementById("lista");
let contatos = JSON.parse(localStorage.getItem("contatos")) || [];

function renderizar() {
  lista.innerHTML = "";

  if (contatos.length === 0) {
    lista.innerHTML = `
      <p class="text-center text-muted">
        Nenhum contato cadastrado
      </p>`;
    return;
  }

  contatos.forEach((contato, index) => {
    const card = document.createElement("div");
    card.className = "col-md-4";

    card.innerHTML = `
      <div class="card shadow-sm h-100">
        <div class="card-body">
          <h5 class="card-title">${contato.nome}</h5>
          <p class="card-text">
            <strong>Email:</strong> ${contato.email}<br>
            <strong>Assunto:</strong> ${contato.assunto}<br>
            <strong>Mensagem:</strong> ${contato.mensagem}
          </p>
          <button class="btn btn-danger btn-sm w-100" onclick="excluir(${index})">
            🗑 Excluir
          </button>
        </div>
      </div>
    `;

    lista.appendChild(card);
  });
}

function excluir(index) {
  if (confirm("Deseja realmente excluir este contato?")) {
    contatos.splice(index, 1);
    localStorage.setItem("contatos", JSON.stringify(contatos));
    renderizar();
  }
}

renderizar();
