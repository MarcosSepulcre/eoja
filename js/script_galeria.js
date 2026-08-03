

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


			$(document).ready(function(){
				setInterval(galeria_der, 2000);	
			});

