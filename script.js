const botao = document.getElementById('botao-interativo');

botao.addEventListener('click', () => {
    document.body.classList.toggle('modo-escuro');
  
    if (document.body.classList.contains('modo-escuro')) {
        botao.textContent = 'Alternar Modo Claro';
    } else {
        botao.textContent = 'Alternar Modo Escuro';
    }
});