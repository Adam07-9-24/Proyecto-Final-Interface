
const usuariosRegistrados = [
    { usuario: 'usuario1', correo: 'correo1@dominio.com', dni: '12345678', password: 'password123' },
    { usuario: 'usuario2', correo: 'correo2@dominio.com', dni: '87654321', password: 'password456' }
];


function guardarRegistro(event) {
    event.preventDefault(); 

    const usuario = document.getElementById('usuario').value;
    const correo = document.getElementById('correo').value;
    const dni = document.getElementById('dni').value;
    const password = document.getElementById('password').value;


    const usuarioExistente = usuariosRegistrados.find(u => u.usuario === usuario);

    if (usuarioExistente) {
    
        alert('Usuario ya registrado');
    } else {
    
        usuariosRegistrados.push({ usuario, correo, dni, password });
        alert('Registrado con éxito');
        window.location.href = 'ingreso.html'; 
    }
}


function validarIngreso(event) {
    event.preventDefault(); 

    const usuario = document.getElementById('usuario').value;
    const password = document.getElementById('password').value;


    const usuarioEncontrado = usuariosRegistrados.find(u => u.usuario === usuario && u.password === password);

    if (usuarioEncontrado) {
 
        alert('Ingreso exitoso');
        window.location.href = 'inicio.html'; 
    } else {
    
        alert('Cuenta incorrecta');
    }
}

let currentSlide = 0; 
const slides = document.querySelectorAll('.carousel-slide img');
const totalSlides = slides.length;
const slideContainer = document.querySelector('.carousel-slide'); 

function moveSlide(direction) {
  
  currentSlide += direction;

 
  if (currentSlide < 0) {
    currentSlide = totalSlides - 1; 
  } else if (currentSlide >= totalSlides) {
    currentSlide = 0; 
  }

  
  const slideWidth = slides[0].clientWidth; 
  slideContainer.style.transform = `translateX(${-slideWidth * currentSlide}px)`; 
}
