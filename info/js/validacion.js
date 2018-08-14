(function(){
$(document).ready(function(){
	//Efecto Menu
	
	$('.menu ul li a').each(function(index, elemento){

		$(this).css({
			'top':'-200px'
		});

		$(this).animate({ 
			top:'0'
		}, 2000 + (index * 500) );
	});

	

	//scroll Elementos Menu

	var nosotros = $('#seccionUno').offset().top;

	$('#btn-seccionUno').on('click',function(){
			$('html, body').animate({
				scrollTop:nosotros
			},2000);
	});


	var platillos = $('#seccionDos').offset().top;

	$('#btn-seccionDos').on('click',function(){
			$('html, body').animate({
				scrollTop:platillos
			},2000);
	});

	var galeria = $('#seccionTres').offset().top;

	$('#btn-seccionTres').on('click',function(){
			$('html, body').animate({
				scrollTop:galeria
			},2000);
	});

	var contacto = $('#seccionCuatro').offset().top;

	$('#btn-seccionCuatro').on('click',function(){
			$('html, body').animate({
				scrollTop:contacto
			},2000);
	});


//Validacion del Formulario

	var formulario = document.getElementById('formulario');
	var nombre = formulario.nombre;
	var email = formulario.email;
	var mensaje = formulario.mensaje;
	var error = document.getElementById('error');

	var ok1 = 'no valido';
	var ok2 = 'no valido';
	var ok3 = 'no valido';
	var expresionTexto=/^[A-Za-z\_\-\.\s\xF1\xD1]+$/;
	function validarNombre(e){
		if (nombre.value === '' || nombre.value == null || !expresionTexto.test(nombre.value)){ 
			error.style.display='block';
			error.innerHTML = error.innerHTML + '<li>Por favor completa solo con letras</li>';
			e.preventDefault();
		
		}else{error.style.display='none';
			ok1 = 'valido';
			
			
			}
	}
	var expresionCorreo = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
	function validarEmail(e){
		if(email.value == '' || email.value == null || !expresionCorreo.test(email.value)){
			error.style.display='block';
			error.innerHTML = error.innerHTML + '<li>Ingresa un email valido</li>';
			e.preventDefault();
		}else{error.style.display='none';
			ok2 = 'valido';
			
			
			
			}
	}

	function validarMensaje(e){

		if(mensaje.value == '' || mensaje.value==null || !expresionTexto.test(nombre.value) ){
			error.style.display='block';
			error.innerHTML = error.innerHTML + '<li>Ingresa un Mensaje</li>';
			e.preventDefault();

		}else{error.style.display='none';
			ok3 = 'valido';
			
			
			}

	}

	function mostrarVentana()
	{
    	/*swal("Mucas Gracias!", "Te contactamos pronto!", "success");*/
	}

	function validar(e){
		
		if(ok3 === 'no valido' || ok2 === 'no valido' || ok1 === 'no valido'){
		error.innerHTML=""; /*para resetear los errores*/
		validarNombre(e);
		validarEmail(e);
		validarMensaje(e);
		}
		if(ok3 === 'valido' && ok2 === 'valido' && ok1 === 'valido'){
				alert('todo ok');


			}
		
		
	}

	formulario.addEventListener('submit', validar);

	

	
	

});


}());