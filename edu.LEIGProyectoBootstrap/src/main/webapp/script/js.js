/**
 * 
 */

var Productos = [];

function verificarTarjeta() {
    const numeroTarjeta = document.getElementById('numeroTarjeta').value;
    const fechaCaducidad = document.getElementById('fechaCaducidad').value;
    const cvc = document.getElementById('cvc').value;
    
    
   
    if (numeroTarjeta.trim() === '' || fechaCaducidad.trim() === '' || cvc.trim() === '') {
        alert('Debe completar todos los campos para realizar la compra.');
        return;
    }

    let fechaHoy = new Date();
    let mes = fechaHoy.getMonth() + 1;
    let anyo = fechaHoy.getFullYear() % 100;
    let [mesTarjeta, anyoTarjeta] = fechaCaducidad.split('/').map(val => parseInt(val));

    if (anyoTarjeta < anyo || (anyoTarjeta === anyo && mesTarjeta < mes)) {
        alert('La tarjeta está caducada. Por favor, ingresa una tarjeta válida.');
        return;
    }
    
     const mensaje = `Venta completada: \n\nNúmero tarjeta: ${numeroTarjeta}\nFecha caducidad: ${fechaCaducidad}\nCVC: ${cvc}`;
    alert(mensaje);


}

function verificarContrasenia() {
	let contrasenia1 = document.getElementById("exampleInputPassword1").value;
	let contrasenia2 = document.getElementById("exampleInputPassword2").value;
	if (contrasenia1 === contrasenia2) {
		return true;
	} else {
		alert("Las contraseñas no son iguales, por favor intentelo de nuevo");
		document.getElementById("exampleInputPassword2").focus();
		return false;
	}
}