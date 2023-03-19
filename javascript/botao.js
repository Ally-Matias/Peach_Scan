let botoes = document.querySelectorAll('.botao');

botoes.forEach(botao => {
    botao.addEventListener('click', () => {
        // Remove a classe 'botao-selecionado' de todos os botões
        botoes.forEach(b => {
            b.classList.remove('botao-selecionado');
        });
        // Adiciona a classe 'botao-selecionado' ao botão selecionado
        botao.classList.add('botao-selecionado');
    });
});