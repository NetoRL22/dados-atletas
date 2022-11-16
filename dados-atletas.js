class Atleta{
  constructor(nome,idade,peso,altura,notas){
    this.nome = nome;
    this.idade = idade;
    this. peso = peso;
    this.altura = altura;
    this.notas = notas;
   
  }
  calculaCategoria(){
   if(this.idade >= 9 && this.idade <= 11){
     return "Infantil";
   }
    else if(this.idade>=12&&this.idade<=13){
     return "Juvenil";
   }
    else if(this.idade>=14&&this.idade<=15){
     return "Intermediário";
   }
    else if(this.idade>=16&&this.idade<=30){
    return "Adulto";
   }
    else{
      return "Sem categoria";
    }
  }
  calculaIMC(){
     return this.peso/(this.altura*this.altura);
  }
  calculaMediaValida(){
     let menorNota = this.notas[0];
  this.notas.forEach(function(nota){
    if (nota < menorNota){
      menorNota = nota;
    }
  })
  
  let maiorNota = this.notas[0];
   this.notas.forEach(function(nota){
    if (nota > maiorNota){
      maiorNota = nota;
    }
  })
  
 let media = this.notas.reduce(function(total,atual){
   return total+atual; 
  },0)-menorNota-maiorNota;
  
  media = media / (this.notas.length - 2);
  return media;
  }
  obtemNomeAtleta(){
    return this.nome;
  }
  obtemIdadeAtleta(){
    return this.idade;
  }
  obtemPesoAtleta(){
    return this.peso;
  }
  obtemNotasAtleta(){
    return this.notas;
  }
  obtemCategoria(){
    return this.calculaCategoria();
  }
  obtemIMC(){
    return this.calculaIMC();
  }
  obtemMediaValida(){
    return this.calculaMediaValida();
  }
}

//exemplo de uso:
let atleta1 = new Atleta("Cesar Abascal",
    30, 80, 1.70,
    [10, 9.34, 8.42, 10, 7.88]);

console.log(atleta1.obtemNomeAtleta());
console.log(atleta1.obtemIdadeAtleta());
console.log(atleta1.obtemPesoAtleta());
console.log(atleta1.obtemNotasAtleta());
console.log(atleta1.obtemCategoria());
console.log(atleta1.obtemIMC());
console.log(atleta1.obtemMediaValida());

// :)
