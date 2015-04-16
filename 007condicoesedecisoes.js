/* 

// Exemplo 1

var foo = 5 < 6; // 5 (menor que) 6 = true

var foo = 5 > 6; // 5 (maior que) 6 = false

var foo = 5 >= 6; // 5 (maior ou igual) 6 = false

var foo = 6 >= 6; // 6 (maior ou igual) 6 = true

var foo = 6 <= 6; // 6 (menor ou igual) 6 = true

var foo = 6 == 6; // 6 (igual) 6 = true

var foo = 6 != 6; // 6 (nãp é igual) 6 = false

var foo = 5 != 6; // 5 (nãp é igual) 6 = true

var foo = "6" == 6; // "6" (é igual) 6 = true [mesmo sendo string o primeiro]

var foo = "6" === 6; // "6" (identico) 6 = false

var foo = "6" !== 6; // "6" (não identico) 6 = true

var foo = "oi" === "Oi"; // "oi" (identico) "Oi" = false

*/

/*

// Exemplo 2



var brasil = "Brasil";

	if (brasil === "brasil") {

		alert("brasil");

		// só vemos o alert se a condição for satisfeita
		
	} else if (brasil === "Brasil")	{

		// "senão se" vemos essa condição
		 
	 	alert("Brasil");

	} else  if (brasil === "bRasil")	{

		// "senão se" vemos essa condição
	 	
	 	alert("bRasil");

	} else {
		alert("Nenhum resultado foi encontrado.");
	}; 

alert("Isto está fora da condição.");

 */

// Exemplo 3

// Operadores Lógicos






// logico AND &&
// Você quer manga AND maçã?
// 
// true && true = true
// false && true = false
// true && false = false
// false && false = false

var foo = "hello",
	bar = 5;

if (foo === "hello" && bar < 6) {
	alert("true");
};



// logico OR ||
// Você quer manga OR maçã?
// 
// true || true = true
// false || true = true
// true || false = true
// false || false = false

var foo = "hello",
	bar = 5;

if (foo === "hello" || bar < 6) {
	alert("true");
};


// NOT = switch conditions or multiple conditions
// logico NOT !
// 
// !true = false
// !false = true


var foo = "hello";

if (!(foo !== "hello")) {
	alert("true");
};

// true or false

if (1) {
	alert("true");
};


if (0) {
	alert("false");
};

if ("") {
	alert("false");
};

if (" ") {
	alert("true");
};

if ([]) { // arrays
	alert("Oi");
};


if ({}) { // objects
	alert("Oi");
};

if (undefined) { // undefined protected method
	alert("Oi");
};

var foo = null; // undefined

if (foo) { // null object
	alert("Oi");
};

















