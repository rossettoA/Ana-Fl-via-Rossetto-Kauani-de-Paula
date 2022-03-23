
class Noticia{
  constructor(titulo, data_de_publicacao, resumo, texto){
    this.titulo = titulo;
    this.data_de_publicacao = data_de_publicacao;
    this.resumo = resumo
    this.texto = texto;
  }
  mostrarNoticia(){
    return this.titulo + "\n" + this.data_de_publicacao + "\n" + this.resumo + "\n" + this.texto;
  }
}
let noticia = new Noticia ("Aprovados a UFPR", "04/04/2005", "Lista de Alunos Aprobados", "Ana Flávia Rossetto, Kauani de Paula");
console.log(noticia.mostrarNoticia())