$(function(){
	window.onload = (e) => {
		window.addEventListener('message', (event) => {
			var item = event.data;
			if (item !== undefined && item.type === "ui") {
				if (item.display === true) {
                    $("#calculadora").show();
				} else{
                    $("#calculadora").hide();
                }
			}
		});
	};

});


function insert(num)
{
    var numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + num;

}

function clean()
{
    document.getElementById('resultado').innerHTML = "";
    document.getElementById('resultado2').innerHTML = "";
}

function back()
{
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1)
}

function calcular()
{
    var resultado = document.getElementById('resultado').innerHTML;
    if(resultado)
    {
        document.getElementById('resultado2').innerHTML = eval(resultado)
    }
    else{
        document.getElementById('resultado').innerHTML = ""
    }
    

}