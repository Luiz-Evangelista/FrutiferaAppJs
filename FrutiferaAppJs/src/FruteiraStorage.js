// Importa a classe Fruteira.js
import Fruteira from './Fruteira.js';

//Essa classe aqui vai ser a responsavel por salvar e buscar dados no navegador
export default class FruteiraStorage {

  // Busca todas as frutas salvas aqui no localStorage
  static buscar() {
    return JSON.parse(localStorage.getItem("fruteiras")) || [];
    //Vai pegar os dados salvos e converter de texto pra objeto, se não tiver nada salvo vai retornar vazio
    
  }

  // Salva nova fruta aqui no localStorage
  static salvar(fruteira) {
    const lista = this.buscar();//Busca a lista atual de frutas
    lista.push(fruteira);//Adiciona a nova fruta na lista
    localStorage.setItem("fruteiras", JSON.stringify(lista));
    //Salva a lista atualizada aqui localStorage e tambem converte o array pra texto
  }

}
