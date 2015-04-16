
// repetição de código

// var i = 0; INICIALIZAÇÃO
// i < 10; TESTA A CONDIÇÃO
// i++ INCREMENTA

/*
// Exemplo 1
for (var i = 1; i < 10; i++) {
	//alert(i);
};

// Exemplo 2
var nomes = ["Emanuel", "Rafaela", "Jorge", "Maria"];

for ( var i = 0, len = nomes.length; i < len;  i++) {
	var nome = nomes[i];
	alert(nome);
};
*/

// Exemplo 3

var nomes = ["Emanuel", "Rafaela", "Jorge", "Maria"];

do{
	var element = nomes.pop();
	alert(element);
} while (nomes.length > 0) {

}



