/*let usuario = {
    id: 99,
    email: 'jakeperalta@gmail.com',
    infoPessoal: {
      nome: 'Jake',
      sobrenome: 'Peralta',
      endereco: {
        rua: 'Smith Street',
        bairro: 'Brooklyn',
        cidade: 'Nova Iorque',
        estado: 'Nova Iorque',
      },
    },
  };
  
  console.log(usuario['id']); // 99
  console.log(usuario.email); // jakeperalta@gmail.com
  
  console.log(usuario.infoPessoal.endereco.rua); // Smith Street
  console.log(usuario['infoPessoal']['endereco']['cidade']); // Nova Iorque */

 /* let moradores = [
    {
      nome: 'Luiza',
      sobrenome: 'Guimarães',
      andar: 10,
      apartamento: 1005,
    },
    {
      nome: 'William',
      sobrenome: 'Albuquerque',
      andar: 5,
      apartamento: 502,
    },
    {
      nome: 'Murilo',
      sobrenome: 'Ferraz',
      andar: 8,
      apartamento: 804,
    },
    {
      nome: 'Zoey',
      sobrenome: 'Brooks',
      andar: 1,
      apartamento: 101,
    },
  ];
  
  let primeiroMorador = moradores[0];
  console.log(primeiroMorador); // { nome: 'Luiza', sobrenome: 'Guimarães', andar: 10, apartamento: 1005 }
  console.log(primeiroMorador['andar']); // 10
  
  let ultimoMorador = moradores[moradores.length - 1];
  console.log(ultimoMorador); // { nome: 'Zoey', sobrenome: 'Brooks', andar: 1, apartamento: 101 }
  console.log(ultimoMorador.nome); // Zoey*/
  
 /* let name = 'Marta';
let lastName = 'Silva';
let age = 34;
let medals = { golden: 2, silver: 3 };*/

/*let player = {
  name: 'Marta',
  lastname: 'Silva',
  age: 34,
  medals:{
    golden: 2,
    silver: 3,
  },
  bestInTheWorld:[2006, 2007, 2008, 2009, 2010, 2018]
  
};
console.log('a jogadora ' + player.name + ' ' + player.lastname + ' tem ' + player.age + ' anos de idade');
console.log('a jogadora ' + player.name + + ' ' + player.lastname + 'foi eleita a melhor do mundo por ' + player.bestInTheWorld.length + ' vezes')
console.log('a jogadora possui ' + player.medals.golden + ' medalhas de ouro e ' + player.medals.silver + ' medalhas de prata')*/

/*let car = {
  type: 'Fiat',
  model: '500',
  color: 'white',
};

for (let index in car) {
  console.log(index, car[index]);
}*/

/*let food = ['hamburguer', 'bife', 'acarajé'];
for (let index in food) {
  console.log(index);
};
//resultado: 0, 1, 2;*/

/*let food = ['hamburguer', 'bife', 'acarajé'];
for (let value of food) {
  console.log(value);
};
//resultado: hamburguer, bife, acarajé;*/

/*let names = {
  person1: 'João',
  person2: 'Maria',
  person3: 'Jorge',
};
for (let key in names) {
  console.log('Olá' + ' ' + names[key])
    
  }
// posso usar o espaço no olá tambem, tipo 'Olá '*/

/*let car = {
  model: 'A3 Sedan',
  manufacturer: 'Audi',
  year: 2020
};
for (let key in car) {
  console.log(key, car[key])
 
    
  }*/
/*let statusCarro = "Desligado";
let aceleracao = 0
let rotacaoDoVolante = 0;
  function ligarDesligar() {
    if (statusCarro === "Desligado") {
      statusCarro = "Ligado";
    }else{
      statusCarro = "Desligado";
    }
      return statusCarro;
    }
    function acelerar(incremento) {
      aceleracao = aceleracao + incremento
      return 'acelerando a ' + aceleracao + 'm/s²';

      function frear(decremento) {
        aceleracao = aceleracao - decremento;
        return 'Desacelerando para ' + aceleracao + 'm/s²';

        function girarVolante(anguloRotacao) {
          rotacaoDoVolante = anguloRotacao // apenas atualizar o valor da variavel rotacao do volante, retornando uma string do angulo de rotacao atual
          return rotacaoDoVolante + 'º';

          
        }
        
      }
      
    }
    ligarDesligar();
    acelerar(20);
    girarVolante(-45);
    frear(5);
    girarVolante(0);
    frear(15);
    ligarDesligar();*/

  
/*// Sem função
let nome = 'João';

console.log('Bom dia, ' + nome);*/


// Com função
/*function bomDiaTryber(nome) {
  console.log('Bom dia, ' + nome);
}

bomDiaTryber('João'); // Bom dia, João
bomDiaTryber('Julia'); // Bom dia, Julia
bomDiaTryber('Marcelo'); // Bom dia, Marcelo "quando a função é chamada, ela ja incrementa uma string nova ao parametro nome (assim eu entendi)"*/

/*function bomDia() {
  return 'Bom dia!';
}

console.log(bomDia()); // Bom dia! "Este eh um exemplo sem parametros"*/

/*let status = 'deslogado';

function logarDeslogar() {
  if (status === 'deslogado') {
    status = 'logado';
  } else {
    status = 'deslogado';
  }
}

console.log(status); // deslogado

logarDeslogar();
console.log(status); // logado

logarDeslogar();
console.log(status); // deslogado

console.log('O usuário está ' + status); // O usuário está deslogado "Um bom exemplo para treinar nos exercicios obs : sem parametros" */

// Com parametros
/*function soma(a, b) {
  return a + b;
}

console.log(soma(5, 2)); // 7 "Tipo uma calculadora de dois numeros apenas"*/

/*function maiorNum(primeiroNum, segundoNum) {
  if (primeiroNum > segundoNum) {
    return primeiroNum + ' é maior que ' + segundoNum;
  } else if (segundoNum > primeiroNum) {
    return segundoNum + ' é maior que ' + primeiroNum;
  } else {
    return 'Os números são iguais';
  }
}

console.log(maiorNum(10, 20)); // 20 é maior que 10
console.log(maiorNum(2, -5)); // 2 é maior que -5
console.log(maiorNum(1, 1)); // Os números são iguais "usando uma funçao apenas para comparar numeros que eu mesmo crio"*/

/*const object = { a: 1, b: 2, c: 3 };

for (const property in object) {
  console.log(property + ' = ' + object[property]);
}  // entendendo o exercicio de fixaçao*/

/*function sum(a, b) {
  return a + b;
}
console.log(sum(1, 2)); // Funcao usada novamente para somar dois numeros apenas (errei isso no quizz de conhecimento kkk sem o return)*/

/* COMEÇO DOS EXERCICIOS DO DIA 4.4 */

  

let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};
function boasVindas(nome) {
  console.log('Bem-Vinda', info.personagem)
}
return boasVindas(info.personagem);









