<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Meu Primeiro Web Site</title>
    
    <link rel="stylesheet" href="style.css">
    
    <script src="script.js" defer></script>
</head>
<body>

    <header> 
        <h1>Meu Primeiro Web Site</h1>
        <p>Irei assistir e codar</p>
        
        <button id="botao-interativo">Alternar Modo Escuro</button>
    </header> 

    <main> 
        <h2>Meu primeiro teste</h2>   
        <p>Boas-vindas ao que eu sei!</p>
        
        <img class="imagem-site" src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&w=800&q=80" alt="Código de programação em uma tela">

        <p>Este é o começo da minha jornada como desenvolvedor
        <div class="container-interacoes">
            <button id="btn-like" class="btn-like">
                <span id="icone-like">🤍</span> 
                <span id="texto-like">Curtir</span> 
                (<span id="contador-likes">0</span>)
            </button>

            <div class="container-reacoes">
                <button class="btn-reacao">🔥 <span class="qtd-reacao">0</span></button>
                <button class="btn-reacao">🚀 <span class="qtd-reacao">0</span></button>
                <button class="btn-reacao"> <span class="qtd-reacao">0</span>