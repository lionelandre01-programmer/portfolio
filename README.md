# Portfolio — Lionel Cristóvão André

Site pessoal/portfólio estático que apresenta informações profissionais, habilidades e projetos em destaque.

## Tecnologias
- HTML5, CSS3, JavaScript
- Bootstrap 5 (CDN)
- Font Awesome (CDN)

## Estrutura do projeto
- index.html — Página principal do portfólio.  
- style.css — Estilos personalizados e regras de responsividade.  
- script.js — Comportamento: navbar encolhendo, animação de entrada (Scroll Reveal) e envio via WhatsApp.  
- imagens/ — Imagens usadas pelo site (foto de perfil e screenshots).

## Como usar
1. Abrir o arquivo [index.html](index.html) em um navegador moderno.  
2. O projeto usa CDN para Bootstrap e Font Awesome — é necessário conexão com a internet para carregar essas dependências.  
3. Para testar o formulário de contato, preencha e envie; o botão abre o WhatsApp com a mensagem formatada.

## Personalização rápida
- Trocar a foto de perfil em `imagens/Passe.png` ou ajustar entrada em [index.html](index.html).  
- Atualizar o número de WhatsApp editando a constante [`numero`](script.js) em [script.js](script.js).  
- Ajustar textos e projetos diretamente em [index.html](index.html).  
- Estilos e animações podem ser alterados em [style.css](style.css).

## Notas técnicas
- A animação de entrada usa a implementação em [script.js](script.js) que observa as seções (`sections`) com um [`IntersectionObserver`](script.js).  
- O formulário com id `whatsapp` tem um handler de envio definido em [script.js](script.js).

## Licença
Conteúdo do repositório livre para uso pessoal e para demonstração de portfólio.
