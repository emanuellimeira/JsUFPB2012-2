// Object
// String
// Number
// Boolean



// Ex 01
// var num = 8,
// 	str = num + ""; // "8"



// Ex 02
// var num = 8,
// 	str = num.toString(); // "8"


// Herança
/*

// Exemplo 1

var pessoa = new Object();  // cria objeto

// var str = new String('Oi, Mundo!');

pessoa.nome = "Emanuel";
pessoa.sobreNome = "Limeira";

pessoa.pegaNomeCompleto = function() {
	// this referencia pessoa
	return this.nome + " " + this.sobreNome;

};

alert(pessoa.pegaNomeCompleto());

*/

// Exemplo 2

var pessoa = { // cria objeto
	
	nome : "Emanuel",
	sobreNome : "Limeira",
	pegaNomeCompleto : function() {
		return this.nome + " " + this.sobreNome;
	}

};  

alert(pessoa.pegaNomeCompleto());









