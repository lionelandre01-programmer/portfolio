// Exemplo de JavaScript para dar um toque Pleno
document.addEventListener('DOMContentLoaded', function() {
    // 1. Efeito de Navbar que encolhe (opcional)
    const navbar = document.getElementById('mainNav');
    if (navbar) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 100) {
                navbar.classList.add('navbar-scrolled'); // Adicione uma classe CSS para alterar a aparência
            } else {
                navbar.classList.remove('navbar-scrolled');
            }
        });
    }

    // 2. Animação de entrada (Scroll Reveal Simples)
    const sections = document.querySelectorAll('section');
    
    const options = {
        threshold: 0.1 // 10% da seção deve estar visível
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Para que a animação ocorra apenas uma vez
            }
        });
    }, options);

    sections.forEach(section => {
        section.classList.add('scroll-animate'); // Adiciona classe base para animação
        observer.observe(section);
    });
});

document.getElementById('whatsapp').addEventListener('submit', function(e) {
      e.preventDefault();
      const nome = document.getElementById('nome').value;
      const mensagem = document.getElementById('mensagem').value;
      const texto = encodeURIComponent(`Nome: ${nome}\nMensagem: ${mensagem}`);
      const numero = '244948972536'; // Inclua o código do país (244 para Angola, por exemplo)
      window.open(`https://wa.me/${numero}?text=${texto}`, '_blank');
    });