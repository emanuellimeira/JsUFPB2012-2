var globalVar = "Estar é uma variável Global";

var globalFunction = function(paramUm)
    {
    	var localVar = "Esta é uma variável local.";

        var localFunction = function()
            {
                var superLocalVar = "Oi, Mundo!";
                alert(superLocalVar);
                alert(localVar);
                alert(paramUm);
                alert(globalVar);
            };
            
        localFunction();
        
    };

globalFunction(2);