// --- 1. Lógica do Modo Escuro/Claro ---
const botaoTema = document.getElementById('botao-interativo');

botaoTema.addEventListener('click', () => {
    document.body.classList.toggle('modo-escuro');
  
    if (document.body.classList.contains('modo-escuro')) {
        botaoTema.textContent = 'Alternar Modo Claro';
    } else {
        botaoTema.textContent = 'Alternar Modo Escuro';
    }
});

// --- 2. Lógica de Curtir e Descurtir ---
const btnLike = document.getElementById('btn-like');
const iconeLike = document.getElementById('icone-like');
const textoLike = document.getElementById('texto-like');
const contadorLikes = document.getElementById('contador-likes');

let likes = 0;
let jaCurtiu = false;

btnLike.addEventListener('click', () => {
    if (!jaCurtiu) {
        // Ação de CURTIR
        likes++;
        jaCurtiu = true;
        
        iconeLike.textContent = '❤️';
        textoLike.textContent = 'Curtido';
        btnLike.classList.add('curtido');
    } else {
        // Ação de DESCURTIR
        likes--;
        jaCurtiu = false;
        
        iconeLike.textContent = '🤍';
        textoLike.textContent = 'Curtir';
        btnLike.classList.remove('curtido');
    }

    // Atualiza o valor na tela
    contadorLikes.textContent = likes;
});

// --- 3. Lógica das Reações em Emojis ---
const botoesReacao = document.querySelectorAll('.btn-reacao');

botoesReacao.forEach(botao => {
    botao.addEventListener('click', () => {
        const contador = botao.querySelector('.qtd-reacao');
        let valorAtual = parseInt(contador.textContent);
        contador.textContent = valorAtual + 1;
    });
});