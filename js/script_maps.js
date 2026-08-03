			

			var inicio = L.icon({
			    iconUrl: '../images/location_inicio.png', 
			    shadowUrl: '../images/location_sombra.png',
			    iconSize:     [71, 100], 
			    shadowSize:   [100, 120], 
			    iconAnchor:   [35, 94], 
			    shadowAnchor: [40, 110],  
			    popupAnchor:  [-3, -76] 
			});

			var final = L.icon({
			    iconUrl: '../images/location_final.png', 
			    shadowUrl: '../images/location_sombra.png',
			    iconSize:     [71, 100], 
			    shadowSize:   [100, 120], 
			    iconAnchor:   [35, 94], 
			    shadowAnchor: [40, 110],  
			    popupAnchor:  [-3, -76] 
			});

			var track = L.icon({
			    iconUrl: '../images/location_track.png', 
			    shadowUrl: '../images/location_sombra.png',
			    iconSize:     [71, 100], 
			    shadowSize:   [100, 120], 
			    iconAnchor:   [35, 94], 
			    shadowAnchor: [40, 110],  
			    popupAnchor:  [-3, -76] 
			});

			let options={
				enableHighAccuracy: true,
				timeout: 5000,
				maximumAge: 0 }

			function success(position){
				latitud = position.coords.latitude;
				longitud = position.coords.longitude;

				var mapa = L.map('capa_mapa',{
					center: [latitud, longitud],
					zoom: 12});

				
				L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
			    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(mapa);

			    let control=L.routing.control({
			    	waypoints: [L.latLng(latitud, longitud),
			    				L.latLng(38.3464333, -0.4879453) ],
			    	languaje: "es",
			    	createMarker: function(i, wp, nwps){
			    		switch(i){
				    		case 0: 
				    			return L.marker(wp.latLng, {icon:inicio, draggable: true}).bindPopup("Mi ubicación actual");
				    		case nwps-1: 
				    			return L.marker(wp.latLng, {icon:final, draggable: true}).bindPopup("Empresa EoJA");
				    		default:
				    			return L.marker(wp.latLng, {icon:track, draggable: true}).bindPopup("Paso intermedio");
			    		}
			    	}
			    }).addTo(mapa);

			}

			function error(){
				var mapa = L.map('capa_mapa',{
					center: [38.3464333, -0.4879453],
					zoom: 12});
				
				L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
			    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(mapa);
			}


			if(navigator.geolocation){
				navigator.geolocation.getCurrentPosition(success, error, options);
			}else{
				$("#capa_mapa").html("Los servicios de geoloalización no están disponibles");
			}
