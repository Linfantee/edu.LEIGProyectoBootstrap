/**
 * 
 */

var BDDProductos = [];

function verificarContrasenia() {
	let contrasena = document.getElementById("exampleInputPassword").value;
	let contrasena2 = document.getElementById("exampleInputPassword2").value;
	if (contrasena === contrasena2) {
		return true;
	} else {
		alert("Las contraseñas no son iguales, por favor intentelo de nuevo");
		document.getElementById("exampleInputPassword4").focus();
		return false;
	}

}