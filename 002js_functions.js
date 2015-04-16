/* config um
var foo = 2 + 3; // 5
foo = foo + 1; // foo = 6
foo = foo * 8;  // foo = 6 * 8 = 48

// config dois
var bar = 3 + 3; // 6
bar = bar + 1; // 7
bar = bar * 8; // 56
*/




/*

// não está retornando o valor

function fazerAlgo(paramUm) {

	paramUm = paramUm + 3;
	paramUm = paramUm + 1; 
	paramUm = paramUm * 8; 
}

// utilizando a função adicionado na variável foo

var foo = fazerAlgo(3);  //56

// utilizando a função adicionado na variável bar

var bar = fazerAlgo(2);  //48

alert(foo);
alert(bar);

*/

/*

// pode ser utilizado vários parâmetros

function fazerAlgo(paramUm, paramDois) {

	paramUm = paramUm + 3;
	paramUm = paramUm + 1; 
	paramUm = paramUm * 8;

	return paramUm * paramDois; // retorna o valor
}

// utilizando a função adicionado na variável foo

var foo = fazerAlgo(3, 2);  //112

// utilizando a função adicionado na variável bar

var bar = fazerAlgo(2, 2);  //96

alert(foo);
alert(bar);
*/

/*


// função anônima

var fazerAlgo = function(paramUm, paramDois) {

	paramUm = paramUm + 3;
	paramUm = paramUm + 1; 
	paramUm = paramUm * 8;

	return paramUm * paramDois; // retorna o valor
}

// utilizando a função adicionado na variável foo

var foo = fazerAlgo(3, 2);  //112

// utilizando a função adicionado na variável bar

var bar = fazerAlgo(2, 2);  //96

alert(foo);
alert(bar);

 */


// função anônima

var fazerAlgo = function(paramUm, paramDois, fn) {

	paramUm = paramUm + 3;
	paramUm = paramUm + 1; 
	paramUm = paramUm * 8;

	return fn(paramUm * paramDois); // retorna o valor
};

function sum(paramUm, paramDois) {
	return paramUm + paramDois;
};

function produto(paramUm, paramDois) {
	return paramUm * paramDois;
};

// utilizando a função adicionado na variável foo

var foo = fazerAlgo(3, 2, sum);  //112

// utilizando a função adicionado na variável bar

var bar = fazerAlgo(2, 2, produto);  //96

alert(foo);
alert(bar);



