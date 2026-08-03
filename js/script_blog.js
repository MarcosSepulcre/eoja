
			var xhttp = new XMLHttpRequest(); 
			
			//función para cargar las noticias de la home 
			function cargar() { 
					xhttp.onreadystatechange = function() { 
							if (this.readyState == 4){
									mostrar(this);
							} 
					}; 
			};

			xhttp.open("GET", "https://www.20minutos.es/sitemap-noticias-incremental.xml", true); 
			xhttp.send(); 


			//función para cargar las noticias en la home
			function mostrar(xml) { 
					var nom, i, objHttp, cadena; 
					objHttp = xml.responseXML; 
					cadena = ""; 
					url = objHttp.getElementsByTagName('url'); // Nodo raíz

					loc = objHttp.getElementsByTagName('loc'); 
					news = objHttp.getElementsByTagName('news:news'); 

					image = objHttp.getElementsByTagName('image:image'); 
					
					limite=20; //limite de noticias para la sección blog

					for (i = 0 ; i <limite; i++) { 
							enlace=loc[i].childNodes[0].nodeValue;
							title = news[i].getElementsByTagName('news:title')[0].textContent; 
							publication_date = new Date(news[i].getElementsByTagName('news:publication_date')[0].textContent);
							fecha= publication_date.toLocaleString();
							image_scr = image[i].getElementsByTagName('image:loc')[0].textContent; 

							cadena = cadena + "<div class='col-12 col-md-6 noticia'><img src='" + image_scr + "' class='img_galeria' alt='" + title +  "' title='" + title +  
							"' width='1920' height='1080'><br/><br/>";
							cadena = cadena + "<em>Fecha de publicación: " + fecha + "</em><br/>"; 
							cadena = cadena + "<b>" + title  + "</b><br/>"; 
							cadena = cadena + "<p class='leer_mas'><a href='"+enlace+"' target='_blank'>Leer más</a></p></div>";
					}

					$("#capa_noticias").html(cadena);  
					
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

	$(document).ready(function(){
		cargar(); 
	});