

	
	
			
			var xhttp = new XMLHttpRequest(); 
			
			//función para cargar las noticias de la home 
			function cargar(seccion) { 
					xhttp.onreadystatechange = function() { 
							if (this.readyState == 4){
									mostrar(this, seccion);
							} 
					}; 
			};

			xhttp.open("GET", "https://www.20minutos.es/sitemap-noticias-incremental.xml", true); 
			xhttp.send(); 


			//función para cargar las noticias en la home
			function mostrar(xml, seccion) { 
					var nom, i, objHttp, cadena; 
					objHttp = xml.responseXML; 
					cadena = ""; 
					url = objHttp.getElementsByTagName('url'); // Nodo raíz

					loc = objHttp.getElementsByTagName('loc'); 
					news = objHttp.getElementsByTagName('news:news'); 

					image = objHttp.getElementsByTagName('image:image'); 
					
					if(seccion=="home") limite=8;
					if(seccion=="blog") limite=20; //limite=loc.length;

					for (i = 0 ; i <limite; i++) { 
							enlace=loc[i].childNodes[0].nodeValue;
							title = news[i].getElementsByTagName('news:title')[0].textContent; 
							publication_date = new Date(news[i].getElementsByTagName('news:publication_date')[0].textContent);
							fecha= publication_date.toLocaleString();
							image_scr = image[i].getElementsByTagName('image:loc')[0].textContent; 

							cadena = cadena + "<div class='col-12 col-md-6 noticia'><img src='" + image_scr + "' class='img_galeria' alt='" + title + "'><br/><br/>";
							cadena = cadena + "<em>Fecha de publicación: " + fecha + "</em><br/>"; 
							cadena = cadena + "<b>" + title  + "</b><br/>"; 
							cadena = cadena + "<p class='leer_mas'><a href='"+enlace+"' target='_blank'>Leer más</a></p></div>";
					}

					if(seccion=="home")
							cadena = cadena + "<div class='col-12'><p class='leer_mas'><a href='views/blog.html'>Ir a la sección Blog</a></p></div";
					
					document.getElementById("capa_noticias").innerHTML = cadena; 
					
			}




			//funcion que gira el carrusel de fotos
			var contador=1; // Inicializo la variable que llevará el conteo de las fotos del carrusel

			function carrusel(){
				
				if(contador==7) contador=1;

				punto_seleccionado="#punto"+contador;
				img_seleccionada="images/home"+contador+".jpg";

				for(i=1; i<7; i++)
					$("#punto"+i).attr("src","images/punto-gris.png");

				$(punto_seleccionado).attr("src","images/punto-azul.png");
				$("#imagen_carrusel").attr("src",img_seleccionada);

				contador++;

			}


			// funcion que cambia foto en el carrusel
			function cambia_foto(valor){
				
				//Le doy el valor del punto seleccionado a la variable contador para que siga avanzando el carrusel automáticamente a partir de la foto seleccionada
				contador=valor;

				punto_seleccionado="#punto"+valor;
				img_seleccionada="images/home"+valor+".jpg";

				for(i=1; i<7; i++)
					$("#punto"+i).attr("src","images/punto-gris.png")

				$(punto_seleccionado).attr("src","images/punto-azul.png");
				$("#imagen_carrusel").attr("src",img_seleccionada);

			}


			//funciones para mover la galería
			function galeria_izq(){
					objeto_central=$("#galeria_central");

					objeto_img1=$("#galeria1");
					objeto_img2=$("#galeria2");
					objeto_img3=$("#galeria3");
					objeto_img4=$("#galeria4");
					objeto_img5=$("#galeria5");

					imagen1=objeto_img1.attr("src");

					objeto_img1.attr("src", objeto_img2.attr("src"));
					objeto_img2.attr("src", objeto_img3.attr("src"));
					objeto_img3.attr("src", objeto_img4.attr("src"));
					objeto_img4.attr("src", objeto_img5.attr("src"));
					objeto_img5.attr("src", imagen1);

					objeto_central.attr("src", objeto_img3.attr("src"));
			}

			function galeria_der(){

					objeto_central=$("#galeria_central");

					objeto_img1=$("#galeria1");
					objeto_img2=$("#galeria2");
					objeto_img3=$("#galeria3");
					objeto_img4=$("#galeria4");
					objeto_img5=$("#galeria5");

					imagen5=objeto_img5.attr("src");

					objeto_img5.attr("src", objeto_img4.attr("src"));
					objeto_img4.attr("src", objeto_img3.attr("src"));
					objeto_img3.attr("src", objeto_img2.attr("src"));
					objeto_img2.attr("src", objeto_img1.attr("src"));
					objeto_img1.attr("src", imagen5);

					objeto_central.attr("src", objeto_img3.attr("src"));
			}


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

				//campos de los datos del usuario
				nombre=document.getElementById("nombre").value;
				apellidos=document.getElementById("apellidos").value;
				telefono=document.getElementById("telefono").value;
				email=document.getElementById("email").value;
			  
				if(nombre=="" || !validarCadena(nombre)){
					alert('Debes de introducir tu nombre con un máximo de 15 letras.');
					document.getElementById("nombre").focus();
					return false;
				}
				if(apellidos=="" || !validarCadena(apellidos)){
					alert('Debes de introducir tus apellidos con un máximo de 40 letras.');
					document.getElementById("apellidos").focus();
					return false;
				}
				if(telefono=="" || !validarTelefono(telefono)){
					alert('Debes de introducir un teléfono de 9 dígitos.');
					document.getElementById("telefono").focus();
					return false;
				}
				if(email=="" || !validarEmail(email)){
					alert('Debes de introducir un email valido.');
					document.getElementById("email").focus();
					return false;
				}
				
				if(plazo<=0 || plazo>12){
						alert('El plazo para el desarollo del proyecto debe de ser máximo de 12 meses.');
						return false;
				}
				
				if(!document.getElementById('privacidad').checked){
						alert("Debes de aceptar las condiciones de privacidad");
						return false;
				}

				alert("Felicidades! Formulario rellenado correctamente!");
				return false;

		}

		// función para calcular el presupuesto
		function calcula_presupuesto(){

				presupuesto=0;
				descuento=0;
				porcentajeDescuento=0;
				plazo=0;

				producto1=document.getElementById("producto1").checked;
				producto2=document.getElementById("producto2").checked;
				producto3=document.getElementById("producto3").checked;

				extra1=document.getElementById("extra1").checked;
				extra2=document.getElementById("extra2").checked;
				extra3=document.getElementById("extra3").checked;
				extra4=document.getElementById("extra4").checked;
				extra5=document.getElementById("extra5").checked;

				plazo=document.getElementById("plazo").value;

				if(producto1) presupuesto+=1200;
				if(producto2) presupuesto+=1600;
				if(producto3) presupuesto+=2400;

				if(extra1) presupuesto+=120;
				if(extra2) presupuesto+=60;
				if(extra3) presupuesto+=140;
				if(extra4) presupuesto+=80;
				if(extra5) presupuesto+=130;

				if(plazo!=""){
					if(plazo<=0){
							alert('El plazo para el desarollo del proyecto debe de ser mínimo de 1 mes.');
							plazo=1;
							document.getElementById("plazo").value=1;
					}
					if(plazo>12){
							alert('El plazo para el desarollo del proyecto debe de ser máximo de 12 meses.');
							plazo=12;
							document.getElementById("plazo").value=12;
					}					
				}

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


				document.getElementById("presupuesto").innerHTML=presupuestoEuro+"<br>"+descuentoEuro+"<br>"+totalEuro;
				document.getElementById("titulo_presupuesto").innerHTML="Subtotal:<br> Descuento ("+porcentajeDescuento+"%): <br>Total";

		}

		function limpiar_formulario(){
			document.getElementById('formulario').reset()
			document.getElementById("presupuesto").innerHTML="0,00€<br>0,00€<br>0,00€";
			document.getElementById("titulo_presupuesto").innerHTML="Subtotal:<br> Descuento (0%): <br>Total";
		}


