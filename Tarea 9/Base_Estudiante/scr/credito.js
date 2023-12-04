
        function calcularCotizacion() {
            const zona = document.getElementById('ubicacion').value;
            const acabado = document.getElementById('lujo').checked;
            const numBanos = parseInt(document.getElementById('Banos').value);
            const cochera = parseInt(document.getElementById('cochera').value);
            const balcon = document.getElementById('balcon').checked;
            const piscina = document.getElementById('piscina').checked;
            const parrilla = document.getElementById('parrilla').checked;
            const terraza = document.getElementById('terraza').checked;

            // Precios por metro cuadrado
            const precioTerreno = (zona === 'rural') ? 50000 : 120000;
            const precioConstruccion = 500; // en dólares, puedes ajustarlo según el tipo de cambio
            const aumentoAcabado = (acabado) ? 0.20 : 0;

            // Cálculo de la cotización
            const precioTerrenoTotal = precioTerreno * 100; // Supongamos que la casa tiene 100 metros cuadrados de terreno
            const precioConstruccionTotal = precioConstruccion * 100; // Supongamos que la casa tiene 100 metros cuadrados de construcción

            // Aumento por acabado de lujo
            const precioConstruccionTotalConAcabado = precioConstruccionTotal * (1 + aumentoAcabado);

            // Costo de baños completos
            const costoBanos = numBanos * 1000000;

            // Costo de cochera
            let costoCochera = 0;
            if (cochera === 1) {
                costoCochera = 1300000;
            } else if (cochera === 2) {
                costoCochera = 2000000;
            } else if (cochera === 3) {
                costoCochera = 2500000;
            }

            // Costo de extras
            const costoExtras = (balcon ? 1200000 : 0) + (piscina ? 10000000 : 0) + (parrilla ? 1000000 : 0) + (terraza ? 2500000 : 0);

            // Precio total
            const precioTotal = precioTerrenoTotal + precioConstruccionTotalConAcabado + costoBanos + costoCochera + costoExtras;

            // Guardar datos en LocalStorage
            localStorage.setItem('ubicacion', zona);
            localStorage.setItem('lujo', acabado);
            localStorage.setItem('Banos', numBanos);
            localStorage.setItem('cochera', cochera);
            localStorage.setItem('balcon', balcon);
            localStorage.setItem('piscina', piscina);
            localStorage.setItem('parrilla', parrilla);
            localStorage.setItem('terraza', terraza);

            // Mostrar resultado
            document.getElementById('resultado').innerHTML = `Precio de la casa: ${precioTotal} colones`;

            // Verificar financiamiento
            const montoPrima = precioTotal * 0.25;
            const aplicaFinanciamiento = montoPrima <= 0 ? false : true;

            // Mostrar mensaje de financiamiento
            document.getElementById('resultado').innerHTML += `<br>Aplica para financiamiento: ${aplicaFinanciamiento ? 'Sí' : 'No'}`;

            // Verificar aprobación de financiamiento
            const aprobacionFinanciamiento = aplicaFinanciamiento ? (montoPrima >= precioTotal * 0.25) : false;

            // Mostrar mensaje de aprobación de financiamiento
            document.getElementById('resultado').innerHTML += `<br>Se aprueba el financiamiento: ${aprobacionFinanciamiento ? 'Sí' : 'No'}`;
        }

        // Cargar datos desde LocalStorage al cargar la página
        document.getElementById('ubicacion').value = localStorage.getItem('ubicacion') || 'rural';
        document.getElementById('lujo').checked = (localStorage.getItem('lijo') === 'true');
        document.getElementById('Banos').value = localStorage.getItem('Banos') || 0;
        document.getElementById('cochera').value = localStorage.getItem('cochera') || 0;
        document.getElementById('balcon').checked = (localStorage.getItem('balcon') === 'true');
        document.getElementById('piscina').checked = (localStorage.getItem('piscina') === 'true');
        document.getElementById('parrilla').checked = (localStorage.getItem('parrilla') === 'true');
        document.getElementById('terraza').checked = (localStorage.getItem('terraza') === 'true');


        function mostrarCotizacion() {
            // Recuperar datos almacenados en LocalStorage
            const zona = localStorage.getItem('ubicacion') || 'rural';
            const acabado = localStorage.getItem('lujo') === 'true';
            const numBanos = parseInt(localStorage.getItem('Banos')) || 0;
            const cochera = parseInt(localStorage.getItem('cochera')) || 0;
            const balcon = localStorage.getItem('balcon') === 'true';
            const piscina = localStorage.getItem('piscina') === 'true';
            const parrilla = localStorage.getItem('parrilla') === 'true';
            const terraza = localStorage.getItem('terraza') === 'true';

            // (código de cálculo)

            // Mostrar resultado
            document.getElementById('resultado').innerHTML = `Precio de la casa: ${precioTotal} colones`;

            // Verificar financiamiento
            const montoPrima = precioTotal * 0.25;
            const aplicaFinanciamiento = montoPrima <= 0 ? false : true;

            // Mostrar mensaje de financiamiento
            document.getElementById('resultado').innerHTML += `<br>Aplica para financiamiento: ${aplicaFinanciamiento ? 'Sí' : 'No'}`;

            // Verificar aprobación de financiamiento
            const aprobacionFinanciamiento = aplicaFinanciamiento ? (montoPrima >= precioTotal * 0.25) : false;

            // Mostrar mensaje de aprobación de financiamiento
            document.getElementById('resultado').innerHTML += `<br>Se aprueba el financiamiento: ${aprobacionFinanciamiento ? 'Sí' : 'No'}`;
        }
  