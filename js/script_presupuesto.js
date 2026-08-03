

			//funciones para mover los patrocinadores
			function mover_izq(){
				objeto_img1=$("#patrocinador1");
				objeto_img2=$("#patrocinador2");
				objeto_img3=$("#patrocinador3");
				objeto_img4=$("#patrocinador4");

				imagen1=objeto_img1.attr("src");

				objeto_img1.attr("src", objeto_img2.attr("src"));
				objeto_img2.attr("src", objeto_img3.attr("src"));
				objeto_img3.attr("src", objeto_img4.attr("src"));
				objeto_img4.attr("src", imagen1);
			}

			function mover_der(){
				objeto_img1=$("#patrocinador1");
				objeto_img2=$("#patrocinador2");
				objeto_img3=$("#patrocinador3");
				objeto_img4=$("#patrocinador4");

				imagen4=objeto_img4.attr("src");

				objeto_img4.attr("src", objeto_img3.attr("src"));
				objeto_img3.attr("src", objeto_img2.attr("src"));
				objeto_img2.attr("src", objeto_img1.attr("src"));
				objeto_img1.attr("src", imagen4);
			}



			// función para validar el email
			function validarEmail(valor) {
			  regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
			  if(regex.test(valor))
			  		return true;
			  	else
			  		return false;
			}

			// función para validar el teléfono
			function validarTelefono(valor){
					regex = /^(?:\+\d{1,3}|00\d{1,3})?[\s-]?\d{9}$/;
			  	if(regex.test(valor))
			  		return true;
			  	else
			  		return false;
			}

			// función para validar el teléfono
			function validarCadena(valor){
				regex = /^[A-Z a-z]+$/;
			  	if(regex.test(valor))
			  		return true;
			  	else
			  		return false;
			}


			// función para validar el formulario de presupuesto
			function validar_presupuesto(){

				error=0;

				//campos de los datos del usuario
				nombre=$("#nombre").val();
				apellidos=$("#apellidos").val();
				telefono=$("#telefono").val();
				email=$("#email").val();
				plazo=$("#plazo").val();

				producto1=$("#producto1").prop('checked');
				producto2=$("#producto2").prop('checked');
				producto3=$("#producto3").prop('checked');

			  
				if(nombre=="" || !validarCadena(nombre)){
					$("#error_nombre").html("Debes de introducir tu nombre con un máximo de 15 letras");
					$("#nombre").addClass("input_error");
					error=1;
				}else{
					$("#error_nombre").html("");
					$("#nombre").removeClass("input_error");
				}
				
				if(apellidos=="" || !validarCadena(apellidos)){
					$("#error_apellidos").html("Debes de introducir tus apellidos con un máximo de 40 letras");
					$("#apellidos").addClass("input_error");
					error=1;
				}else{
					$("#error_apellidos").html("");
					$("#apellidos").removeClass("input_error");
				}

				if(telefono=="" || !validarTelefono(telefono)){
					$("#error_telefono").html("Debes de introducir un teléfono de 9 dígitos");
					$("#telefono").addClass("input_error");
					error=1;
				}else{
					$("#error_telefono").html("");
					$("#telefono").removeClass("input_error");
				}

				if(email=="" || !validarEmail(email)){
					$("#error_email").html("Debes de introducir un email valido");
					$("#email").addClass("input_error");
					error=1;
				}else{
					$("#error_email").html("");
					$("#email").removeClass("input_error");
				}

				if(!producto1 && !producto2 && !producto3){
					$("#error_producto").html("Debes de seleccionar un producto");
					$("#capa_productos").addClass("capa_productos_error");
					error=1;
				}else{
					$("#error_producto").html("");
					$("#capa_productos").removeClass("capa_productos_error");
				}

				if(plazo=="" || plazo<=0 || plazo>12){
					$("#error_plazo").html("El plazo para el desarollo del proyecto debe de ser máximo de 12 meses");
					$("#plazo").addClass("input_error");
					error=1;
				}else{
					$("#error_plazo").html("");
					$("#plazo").removeClass("input_error");
				}

				if(!$("#privacidad").prop('checked')){
					$("#error_privacidad").html("Debes de aceptar las condiciones de privacidad");
					$("#privacidad").addClass("input_error");
					error=1;
				}else{
					$("#error_privacidad").html("");
					$("#privacidad").removeClass("input_error");
				}

				if(error==1){
					$("#resultado_formulario").html("Formulario no enviado. Por favor, corrija los errores.");
					$("#privacidad").removeClass("color_verde");
					$("#resultado_formulario").addClass("color_rojo");
					return false;
				}else{
					$("#resultado_formulario").html("Felicidades! Formulario rellenado correctamente!");
					$("#privacidad").removeClass("color_rojo");
					$("#resultado_formulario").addClass("color_verde");
					return false;
				}

		}

		// función para calcular el presupuesto
		function calcula_presupuesto(){

				presupuesto=0;
				descuento=0;
				porcentajeDescuento=0;
				plazo=0;

				producto1=$("#producto1").prop('checked');
				producto2=$("#producto2").prop('checked');
				producto3=$("#producto3").prop('checked');

				extra1=$("#extra1").prop('checked');
				extra2=$("#extra2").prop('checked');
				extra3=$("#extra3").prop('checked');
				extra4=$("#extra4").prop('checked');
				extra5=$("#extra5").prop('checked');

				plazo=$("#plazo").val();


				if(producto1) presupuesto+=1200;
				if(producto2) presupuesto+=1600;
				if(producto3) presupuesto+=2400;

				if(extra1) presupuesto+=120;
				if(extra2) presupuesto+=60;
				if(extra3) presupuesto+=140;
				if(extra4) presupuesto+=80;
				if(extra5) presupuesto+=130;

				if(plazo>0 && plazo<=3){ porcentajeDescuento=10; descuento=presupuesto*0.10;}
				if(plazo>=4 && plazo<=6){ porcentajeDescuento=20;  descuento=presupuesto*0.20;}
				if(plazo>=7 && plazo<=12){ porcentajeDescuento=30;  descuento=presupuesto*0.30;}

				const descuentoEuro = new Intl.NumberFormat('es-ES', {
				  style: 'currency',
				  currency: 'EUR'
				}).format(descuento);

				const presupuestoEuro = new Intl.NumberFormat('es-ES', {
				  style: 'currency',
				  currency: 'EUR'
				}).format(presupuesto);

				total=presupuesto-descuento;

				const totalEuro = new Intl.NumberFormat('es-ES', {
				  style: 'currency',
				  currency: 'EUR'
				}).format(total);

				$("#presupuesto").html(presupuestoEuro+"<br>"+descuentoEuro+"<br>"+totalEuro);
				$("#titulo_presupuesto").html("Subtotal:<br> Descuento ("+porcentajeDescuento+"%): <br>Total");

		}

		function limpiar_formulario(){
			$("#formulario")[0].reset();
			$(".form-control").removeClass("input_error");
			$(".capa_error").html("");

			$("#presupuesto").html("0,00€<br>0,00€<br>0,00€");
			$("#titulo_presupuesto").html("Subtotal:<br> Descuento (0%): <br>Total");

		}


