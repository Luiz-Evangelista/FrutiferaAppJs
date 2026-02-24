export default class Fruteira {

  constructor(id, nomePopular, nomeCientifico, producaoMedia, dataPlantio) {
    this.id = id;
    this.nomePopular = nomePopular;
    this.nomeCientifico = nomeCientifico;
    this.producaoMedia = producaoMedia;
    this.dataPlantio = dataPlantio;
  }

  // Calcula idade em meses
  calcularIdadeMeses() {
    const partes = this.dataPlantio.split("/");
    const data = new Date(partes[2], partes[1] - 1, partes[0]);
    const hoje = new Date();

    let meses = (hoje.getFullYear() - data.getFullYear()) * 12;
    meses += hoje.getMonth() - data.getMonth();

    return meses;
  }

}