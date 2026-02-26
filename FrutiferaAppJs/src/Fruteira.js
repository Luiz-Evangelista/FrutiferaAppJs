// Exporta a classe Fruteira para poder ser usada em outros arquivos
export default class Fruteira {

  //O construtor é usado para criar uma nova fruta
  constructor(id, nomePopular, nomeCientifico, producaoMedia, dataPlantio) {
    // Os atribudos da fruta
    this.id = id;
    this.nomePopular = nomePopular;
    this.nomeCientifico = nomeCientifico;
    this.producaoMedia = producaoMedia;
    this.dataPlantio = dataPlantio;
  }

  // Esse é o metodo que calcula idade em meses
  calcularIdadeMeses() {
    const partes = this.dataPlantio.split("/");// Separa dia,mês e ano com (/)
    //Cria uma data no formato Dia,Mês e Ano
    const data = new Date(partes[2], partes[1] - 1, partes[0]);
    const hoje = new Date();//Pega a data atual
    
    //Calcula a diferença de anos em meses
    let meses = (hoje.getFullYear() - data.getFullYear()) * 12;
    meses += hoje.getMonth() - data.getMonth();//soma a diferença de meses

    return meses;// Retorna a data em meses
  }


}
