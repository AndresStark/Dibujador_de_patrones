var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("botoncito");
boton.addEventListener("click", dibujoPorClick);

var d = document.getElementById("dibujito");
var ancho = d.width;
var lienzo = d.getContext("2d");

/*
for(l = 0; l < lineas; l++){
	yi = 10 * l;
	xf = 10 * (l + 1);
	dibujarLinea(colorcito, 0, yi, xf, 1000);
	console.log("linea " + l);
}
for(l = 0; l < lineas; l++){
	yi = 10 * l;
	xf = 10 * (l + 1);
	dibujarLinea(colorcito, yi, 0, 1000, xf);
	console.log("linea " + l);
}
for(l = 0; l < lineas; l++){
	xi = 1000 - (l * 10);
	yf = 10 * (l + 1);
	dibujarLinea(colorcito, xi, 0, 0, yf);
	console.log("linea " + l);
}
for(l = 0; l < lineas; l++){
	xi = 1000 - (l * 10);
	yf = 10 * (l + 1);
	dibujarLinea(colorcito, yf, 1000, 1000, xi);
	console.log("linea " + l);
}
*/


function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal){
	lienzo.beginPath();
	lienzo.strokeStyle = color;
	lienzo.moveTo(xinicial,yinicial);
	lienzo.lineTo(xfinal,yfinal);
	lienzo.stroke();
	lienzo.closePath();
}

function dibujoPorClick(){
	var lineas = parseInt(texto.value);
	var l = 0;
	var yi, yf, xi, xf;
	var colorcito = "#FAA";
	var espacio = ancho/lineas;

	for(l = 0; l < lineas; l++){
		yi = espacio * l;
		xf = espacio * (l + 1);
		dibujarLinea(colorcito, 0, yi, xf, 1000);
		console.log("linea " + l);
	}
	for(l = 0; l < lineas; l++){
		yi = espacio * l;
		xf = espacio * (l + 1);
		dibujarLinea(colorcito, yi, 0, 1000, xf);
		console.log("linea " + l);
	}

}
