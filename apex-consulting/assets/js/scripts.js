
document.addEventListener('DOMContentLoaded', () => {
    const enlaces = document.querySelectorAll('a[href^="#"]');
    enlaces.forEach(enlace => {
        enlace.addEventListener('click', function(e) {
            e.preventDefault();
            const destino = document.querySelector(this.getAttribute('href'));
            window.scrollTo({
                top: destino.offsetTop - 80,
                behavior: 'smooth'
            });
        });
    });

    const elementos = document.querySelectorAll('.fade-in');
    const aparecerEnVista = () => {
        const posicionPantalla = window.innerHeight;
        elementos.forEach(elemento => {
            const posicionElemento = elemento.getBoundingClientRect().top;
            if (posicionElemento < posicionPantalla) {
                elemento.classList.add('visible');
            }
        });
    };
    window.addEventListener('scroll', aparecerEnVista);
    aparecerEnVista();
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('bg-light', 'shadow');
        } else {
            navbar.classList.remove('bg-light', 'shadow');
        }
    });
    const formulario = document.querySelector('form');
    if (formulario) {
        formulario.addEventListener('submit', (e) => {
            e.preventDefault();
            const nombre = document.getElementById('nombre').value;
            const email = document.getElementById('email').value;
            const mensaje = document.getElementById('mensaje').value;
            if (nombre && email && mensaje) {
                alert('Formulario enviado exitosamente!');
                formulario.reset();
            } else {
                alert('Por favor, completa todos los campos');
            }
        });
    }
});

window.onscroll = function() {
    const backToTop = document.getElementById("backToTop");
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        backToTop.style.display = "block"; 
    } else {
        backToTop.style.display = "none";  
    }
};
document.getElementById("backToTop").addEventListener("click", function(event) {
    event.preventDefault();
    window.scrollTo({
    top: 0,
    behavior: "smooth" 
    });
});
