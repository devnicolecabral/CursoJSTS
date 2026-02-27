// Operadores 

/**
 * Aritméticos
 * + Adição / Concatenação (unir 2 valores tipo união de 5 + 10 = 510) a concatenação depende do tipo de dado
 * - / *  ** (potenciação)
 * % resto da divisão
 */


/** Ordem de precedencia
 * ()
 *  **
 * *
 * / %
 * + -
 */

//const num1 = 5;
//const num2 = 10;

//console.log(num1 ** num2); 
//console.log(num1 + num2);
//console.log(num1 * num2);
//console.log(num1 / num2);
//console.log(num1 - num2);
//console.log(num1 % num2);

// Operador de incremento ++, pode ser pós fixado (contador++) ou pré-fixado (++ contador)
// Operador de decremento --
//let contador = 1;
//contador ++; // 2
//contador ++; // 3
//contador ++; // 4
//console.log(contador)


const passo = 50; 
let contador = 0;
contador += passo; // contador = contador + 50


//NaN - Not a number --significa que algum tipo de dado não bateu (ou seja, cuidado com os tipos de dados)

//parseInt converte para numero inteiro 
//parseFloat converte para numero de ponto flutuante 
//Number (vai entender o que é dentro da string)

const num1 = 10; 
const num2 = parseInt('5');
console.log(num1 + num2);

