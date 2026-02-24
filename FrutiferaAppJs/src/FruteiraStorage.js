import Fruteira from './Fruteira.js';

export default class FruteiraStorage {

  // Busca todas as frutas salvas
  static buscar() {
    return JSON.parse(localStorage.getItem("fruteiras")) || [];
  }

  // Salva nova fruta
  static salvar(fruteira) {
    const lista = this.buscar();
    lista.push(fruteira);
    localStorage.setItem("fruteiras", JSON.stringify(lista));
  }
  // Apaga o card 
  static remover(id) {
    const lista = this.buscar();
    const novaLista = lista.filter(f => f.id !== id);
    localStorage.setItem("fruteiras", JSON.stringify(novaLista));
  }
}