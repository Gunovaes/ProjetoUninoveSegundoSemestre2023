function buscarProdutos() {
    // Obtém o valor do input de busca
    var termoBusca = document.getElementById("inputBusca").value;
    
    // Lógica de busca dos produtos
    // (substitua esta parte com a sua lógica de busca)
    var resultados = [];
    // Exemplo: busca produtos com o termoBusca no nome
    for (var i = 0; i < produtos.length; i++) {
      if (produtos[i].nome.toLowerCase().indexOf(termoBusca.toLowerCase()) !== -1) {
        resultados.push(produtos[i]);
      }
    }

    // Exibe os resultados na div de resultados
    var divResultados = document.getElementById("resultadosBusca");
    divResultados.innerHTML = ""; // Limpa o conteúdo anterior
    if (resultados.length > 0) {
      for (var i = 0; i < resultados.length; i++) {
        var produto = resultados[i];
        var elementoProduto = document.createElement("div");
        elementoProduto.textContent = "Nome: " + produto.nome + ", Preço: " + produto.preco;
        divResultados.appendChild(elementoProduto);
      }
    } else {
      var mensagem = "Nenhum resultado encontrado.";
      var elementoMensagem = document.createElement("div");
      elementoMensagem.textContent = mensagem;
      divResultados.appendChild(elementoMensagem);
    }

    // Abre o modal com os resultados
    $('#modalResultadosBusca').modal('show');
  }

  // Evento de submit do formulário de busca
  document.getElementById("formBusca").addEventListener("submit", function(event) {
    event.preventDefault(); // Previne o comportamento padrão de submit do formulário
    buscarProdutos();
  });

  const toastTrigger = document.getElementById('liveToastBtn')
  const toastLiveExample = document.getElementById('liveToast')
  
  if (toastTrigger) {
    const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
    toastTrigger.addEventListener('click', () => {
      toastBootstrap.show()
    })
  }