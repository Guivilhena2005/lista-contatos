const form = document.getElementById("formContato");

if (!form) {
  console.error("Formulário não encontrado");
} else {
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const contato = {
      nome: document.getElementById("nome").value,
      email: document.getElementById("email").value,
      senha: document.getElementById("senha").value,
      assunto: document.getElementById("assunto").value,
      mensagem: document.getElementById("mensagem").value
    };

    let contatos = JSON.parse(localStorage.getItem("contatos")) || [];
    contatos.push(contato);

    localStorage.setItem("contatos", JSON.stringify(contatos));

    alert("Contato salvo com sucesso!");
    form.reset();
  });
}
