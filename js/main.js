const btn = document.querySelector('.btn');
btn.addEventListener('click', iniciar);
function iniciar() {
    let r1 = ""; 
    let r2 = "";
    let r3 = "";
    let r4 = "";
    let r5 = "";
    let muertes = parseInt(localStorage.getItem('muertes')) || 0; 
    let nombre = document.querySelector('#nombre');
    let edad = document.querySelector('#edad');

    const persona = {
        nombre: nombre.value,
        edad: edad.value,
      };

    const textDiv = document.querySelector('.text');

    const volver = document.createElement('button');
    volver.textContent = 'Volver';
    volver.id = 'volver';
    volver.className = 'active';

    function re5({ nombre, edad }) {
        textDiv.innerHTML = `<p><span class="color">Sun Pin solo podía ganar si te asesinaba en contraataque <br> VICTORIA! Felicidades ${nombre} ganaste esta guerra con tan solo ${edad} años  <br> moriste:${muertes} Veces</span> </p>`;
        textDiv.appendChild(volver);
    }
    
    volver.addEventListener('click', function () {
        textDiv.innerHTML = '';
        re1();
    });

    function re4() {
        textDiv.innerHTML = '<p>Día tras día encienden menos hogueras, el ejercito de Qi retrocede <br> ¿que haces? <br> <span class="color">1 - Atacar </span> <br> <span class="color">2 - Esperar la ofensiva  </span> </p>';

        const primerBotonr4 = document.createElement('button');
        primerBotonr4.textContent = 'Opcion 1';
        primerBotonr4.id = 'boton1r4';
        primerBotonr4.className = 'active';

        const segundoBotonr4 = document.createElement('button');
        segundoBotonr4.textContent = 'Opcion 2';
        segundoBotonr4.id = 'boton2r4';
        segundoBotonr4.className = 'active';

        const elementos = document.querySelectorAll('.active');
        elementos.forEach(elemento => {
            elemento.classList.add('disable');
        });

        textDiv.appendChild(primerBotonr4);
        textDiv.appendChild(segundoBotonr4);

        primerBotonr4.addEventListener('click', function () {
            r4 = 1;
            verificarResultado();
        });

        segundoBotonr4.addEventListener('click', function () {
            r4 = 2;
            verificarResultado();
        });

        function verificarResultado() {
            if (r4 == 1) {
                re5(persona);
            } else {
                textDiv.innerHTML = '<h1>MORISTE, esperaron refuerzos y atacaron !</h1>';
                textDiv.appendChild(volver);
                muertes += 1;
                localStorage.setItem('muertes', muertes.toString());
                console.log('Muertes actualizadas en localStorage:', localStorage.getItem('muertes'));
            }
        }
    }

    volver.addEventListener('click', function () {
        textDiv.innerHTML = '';
        re1();
    });

    function re3() {
        textDiv.innerHTML = '<p>Durante la noche se encienden hogueras en las fronteras de tu territorio <p> Elije: <br> <span class="color">1 - Esperar </span> <br> <span class="color">2 - Ir a investigar </span> </p>';

        const primerBotonr3 = document.createElement('button');
        primerBotonr3.textContent = 'Opcion 1';
        primerBotonr3.id = 'boton1r3';
        primerBotonr3.className = 'active';

        const segundoBotonr3 = document.createElement('button');
        segundoBotonr3.textContent = 'Opcion 2';
        segundoBotonr3.id = 'boton2r3';
        segundoBotonr3.className = 'active';

        const elementos = document.querySelectorAll('.active');
        elementos.forEach(elemento => {
            elemento.classList.add('disable');
        });

        textDiv.appendChild(primerBotonr3);
        textDiv.appendChild(segundoBotonr3);

        primerBotonr3.addEventListener('click', function () {
            r3 = 1;
            verificarResultado();
        });

        segundoBotonr3.addEventListener('click', function () {
            r3 = 2;
            verificarResultado();
        });

        function verificarResultado() {
            if (r3 == 2) {
                re4();
            } else {
                textDiv.innerHTML = '<h1>MORISTE, era una trampa!</h1>';
                textDiv.appendChild(volver);
                muertes += 1;
                localStorage.setItem('muertes', muertes.toString());
            }
        }
    }

    volver.addEventListener('click', function () {
        textDiv.innerHTML = '';
        re1();
    });

    function re2() {
        textDiv.innerHTML = '<p>Tu ejército está listo para atacar <p> Elije: <br> <span class="color">1 - Atacar por la noche </span> <br> <span class="color">2 - Esperar al amanecer </span> </p>';

        const primerBotonr2 = document.createElement('button');
        primerBotonr2.textContent = 'Opcion 1';
        primerBotonr2.id = 'boton1r1';
        primerBotonr2.className = 'active';

        const segundoBotonr2 = document.createElement('button');
        segundoBotonr2.textContent = 'Opcion 2';
        segundoBotonr2.id = 'boton2r1';
        segundoBotonr2.className = 'active';

        const elementos = document.querySelectorAll('.active');
        elementos.forEach(elemento => {
            elemento.classList.add('disable');
        });

        textDiv.appendChild(primerBotonr2);
        textDiv.appendChild(segundoBotonr2);

        primerBotonr2.addEventListener('click', function () {
            r2 = 1;
            verificarResultado();
        });

        segundoBotonr2.addEventListener('click', function () {
            r2 = 2;
            verificarResultado();
        });

        function verificarResultado() {
            if (r2 == 1) {
                re3();
            } else {
                textDiv.innerHTML = '<h1>MORISTE, el ejercito cuestiono tu decicion y te traicionó!</h1>';
                textDiv.appendChild(volver);
                muertes += 1;
                localStorage.setItem('muertes', muertes.toString());
            }
        }
    }

    volver.addEventListener('click', function () {
        textDiv.innerHTML = '';
        re1();
    });

    re1();

    function re1() {
        textDiv.innerHTML = '<p>"Comienza la aventura! <p>Eres el general () del estado de la China antigua (Año 1912) <P>Te enfrentas contra el ejército descendiente de Sun Tzu <p> ¿PODRÁS GANAR LA GUERRA? <p> Tu oponente Sun Pin es el general del estado de Qi y tiene menos tropas <p> El ejército de Qi es conocido por ser cobarde, tus hombres se sienten confiados <p> Elige <br> <span class="color"> 1 - Preparar un ataque </span> <br> <span class="color"> 2 - Esperar al movimiento del enemigo </span></p>';

        const primerBotonr1 = document.createElement('button');
        primerBotonr1.textContent = 'Opcion 1';
        primerBotonr1.id = 'boton1r1';
        primerBotonr1.className = 'active';

        const segundoBotonr1 = document.createElement('button');
        segundoBotonr1.textContent = 'Opcion 2';
        segundoBotonr1.id = 'boton2r1';
        segundoBotonr1.className = 'active';

        const elementos = document.querySelectorAll('.active'); // Corrección: cambiar 'elemento' por 'elementos'
        elementos.forEach(elemento => {
            elemento.classList.add('disable');
        });

        textDiv.appendChild(primerBotonr1);
        textDiv.appendChild(segundoBotonr1);

        primerBotonr1.addEventListener('click', function () {
            r1 = 1;
            verificarResultado();
        });

        segundoBotonr1.addEventListener('click', function () {
            r1 = 2;
            verificarResultado();
        });

        function verificarResultado() {
            if (r1 == 2) {
                re2();
            } else {
                textDiv.innerHTML = '<h1> En el camino eres sorprendido por el ejercito de Qi <br> MORISTE en el escenario 1!</h1>';
                textDiv.appendChild(volver);
                muertes += 1;
                localStorage.setItem('muertes', muertes.toString());
            }
        }
    }

    volver.addEventListener('click', function () {
        textDiv.innerHTML = '';
        Swal.fire({
            position: 'top',
            icon: 'success',
            title: 'Gracias por jugar',
            text: 'Creado por Nicolas Marin - Proyecto Final de Js (CoderHouse)',
            showConfirmButton: true,
            confirmButtonText: 'Reiniciar!'
          })
        const reiniciar = document.querySelector('.swal2-confirm');
        reiniciar.addEventListener('click', iniciar);
    });

    re1();
};


