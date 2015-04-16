
/*

// Exemplo 1

var foo = new Array(11, "oi", true);

var length = foo.length;

var valor = foo[0];
foo[0] = 12;
foo[1] = 13;

// 12, 13, true
*/

/*
// Exemplo 2

var foo = [11, "brasil", true];

var valor = foo[0];
foo[3] = 15; // add index 3
foo[4] = "whatever"; // add index 4

foo[foo.length] = "um novo valor";
foo.push("um novo valor");

*/

// Exemplo 3

var nomes = ["Emanuel", "Limeira"],
	nomes2 = ["Maria", "Lourdes"];

var pessoa = nomes.concat(nomes2); // contatena

var junta = pessoa.join(" "); // junta ou join

var reversed = pessoa.reverse();

var sorted = pessoa.sort();

alert(pessoa); // concatena

alert(junta); // junta

alert(reversed); // de trás pra frente

alert(sorted); // sorteia
















