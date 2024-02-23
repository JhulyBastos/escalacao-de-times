function addPlayer() {
  // Valores do input com informacoes do jogador
  // .value serve para pegar o valor que esta no input
  const position = document.getElementById("position").value;
  const name = document.getElementById("name").value;
  const number = document.getElementById("number").value;
  // Mensagem de confirmacao
  const confirmation = confirm("Escalar " + name + " como " + position + "?");
  // Condicional para caso confirme as informacoes, o novo jogador seja adicionado na lista
  if (confirmation) {
    // Criou um elemento "li" na "ul" "teamList"
    const teamList = document.getElementById("teamList");
    const playerItem = document.createElement("li");
    playerItem.id = "player-" + number;
    playerItem.innerText = position + ": " + name + " (" + number + ")";
    teamList.appendChild(playerItem);

    // Limpa os valores adicionados no input para poder adicionar mais outros
    document.getElementById("position").value = "";
    document.getElementById("name").value = "";
    document.getElementById("number").value = "";
  }
}

function removePlayer() {
  const number = document.getElementById("numberToRemove").value;
  // Para pegar qual jogador vai ser removido
  const playerToRemove = document.getElementById("player-" + number);

  const confirmation = confirm(
    "Remover o jogador " + playerToRemove.innerText + "?"
  );

  if (confirmation) {
    document.getElementById("teamList").removeChild(playerToRemove);
    // Limpa os valores adicionados no input
    document.getElementById("numberToRemove").value = "";
  }
}
