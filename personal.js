    document.getElementById('whatsappForm').addEventListener('submit', function(e) {
      e.preventDefault();
      const nome = document.getElementById('nome').value;
      const mensagem = document.getElementById('mensagem').value;
      const texto = encodeURIComponent(`Nome: ${nome}\nMensagem: ${mensagem}`);
      const numero = '244948972536'; // Inclua o código do país (244 para Angola, por exemplo)
      window.open(`https://wa.me/${numero}?text=${texto}`, '_blank');
    });