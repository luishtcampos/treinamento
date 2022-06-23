let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let mediaAritmetica = 0;
let posicaoNumero = 0;
for (let index = 0; index < numbers.length; index++) {
  // mediaAritmetica += numbers[index] / numbers.length;
   if (numbers[index] > numbers[posicaoNumero]) {
    posicaoNumero = index;
    
   }}
console.log(posicaoNumero);
    
    

//console.log(mediaAritmetica);
//console.log('Valor maior que 20');