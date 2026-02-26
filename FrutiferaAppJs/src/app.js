// Importa as classes
import Fruteira from './Fruteira.js';
import FruteiraStorage from './FruteiraStorage.js';

// Aqui o DOM vai executar o código somente após o html ser carregado
document.addEventListener("DOMContentLoaded", () => {
  
//Carrega as frutas que ja tem salvas 
  carregarFruteiras();
  
//Chama a função que carrega e exibe as frutas já cadastradas.
  const form = document.getElementById("formFruteira");
  
//Quando o usuário enviar o formulário, executa a função cadastrarFruteira
  if (form) {
    form.addEventListener("submit", cadastrarFruteira);
  }

});

//Essa função é responsavel por cadastrar uma nova fruta
function cadastrarFruteira(e) {
  e.preventDefault(); // Vai impedir de recarregar e perder os dados

  //Captura os valores digitados pelo usuário nos campos do formulário.
  const nomePopular = document.getElementById("especie").value;
  const nomeCientifico = document.getElementById("nomeCientifico").value;
  const producaoMedia = document.getElementById("producao").value;
  const dataPlantio = document.getElementById("dataPlantio").value;

  // Vai validar a data
  if (!/^\d{2}\/\d{2}\/\d{4}$/.test(dataPlantio)) {
    alert("Data inválida! Use dd/mm/aaaa");
    return;
  }

  //  Geração automática do ID numérico e único
  const id = Date.now();
  
  // Cria o novo objeto  fruteira
  const fruteira = new Fruteira(
    id,
    nomePopular,
    nomeCientifico,
    producaoMedia,
    dataPlantio
  );
  
  //Salva no LocalStorage
  FruteiraStorage.salvar(fruteira);

  //Limpa todos os campos após o cadastro
  document.getElementById("formFruteira").reset();

  //Fecha o modal após cadastrar
  const modal = bootstrap.Modal.getInstance(
    document.getElementById("modalFruta")
  );

  if (modal) modal.hide();

  //Mostrar a nova fruta cadastrada
  carregarFruteiras();
}

//Essa função vai listar as frutas
function carregarFruteiras() {

  //Vai selecioonar onde os cards vão ser exibidos
  const container = document.getElementById("listaFrutas");
  container.innerHTML = "";

  //Busca todas as frutas salvas la no localStorege
  const fruteiras = FruteiraStorage.buscar();

  //Se não tiver fruta cadastrada ainda
  if (fruteiras.length === 0) {
    container.innerHTML = '<p class="text-muted">Nenhuma fruta cadastrada.</p>';
    return;
  }
  
  //Percorre as frutas salvas 
  fruteiras.forEach(f => {

    //Vai criar um novo objeto pra calcular a idade
    const frut = new Fruteira(
      f.id,
      f.nomePopular,
      f.nomeCientifico,
      f.producaoMedia,
      f.dataPlantio
    );
   
    //Adiciona um card la no HTML para cada fruta
  container.innerHTML += `
  <div class="col-md-4 mb-3">
    <div class="card shadow-sm">

      <div class="card-header fw-bold">
        ${f.nomePopular}
      </div>

      <ul class="list-group list-group-flush">
        <li class="list-group-item"><strong>ID:</strong> ${f.id}</li>
        <li class="list-group-item"><strong>Científico:</strong> ${f.nomeCientifico}</li>
        <li class="list-group-item"><strong>Produção:</strong> ${f.producaoMedia} Kg</li>
        <li class="list-group-item"><strong>Plantio:</strong> ${f.dataPlantio}</li>
        <li class="list-group-item">
          <strong>Idade:</strong> ${frut.calcularIdadeMeses()} meses
        </li>
      </ul>

    </div>
  </div>
`;
  });
}


