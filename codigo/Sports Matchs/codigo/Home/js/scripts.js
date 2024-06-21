document.addEventListener('DOMContentLoaded', function() {
    fetch('json/dados.json')
        .then(response => response.json())
        .then(data => renderPartidas(data.usuarios))
        .catch(error => console.error('Erro ao carregar o JSON:', error));
});

function renderPartidas(partidas) {
    const container = document.getElementById('partidas-container');
    container.innerHTML = ''; // Limpa o container antes de adicionar os novos elementos

    partidas.forEach(partida => {
        const card = document.createElement('div');
        card.classList.add('card');

        const esquerda = document.createElement('div');
        esquerda.className ='esquerda','.card .left';

        const rating = document.createElement('p');
        rating.textContent = `${'⭐'.repeat(partida.rating)}`;

        const direita = document.createElement('div');
        direita.className.add ='direita','card .right';
        
        const imagem = document.createElement('img');
        imagem.src = partida.imagem;
        imagem.alt = `Imagem da partida ${partida.nome_da_partida}`;
        imagem.classList.add('descricao__imagem');

        const botoes = document.createElement('li');
        botoes.classList.add('icon','card__botões','heartIcon', 'heartIcon.filled');
        botoes.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><path d="M16,29A13,13,0,1,1,29,16,13,13,0,0,1,16,29ZM16,5A11,11,0,1,0,27,16,11,11,0,0,0,16,5Z" fill="#00BF63" /><path d="M16,23a1,1,0,0,1-1-1V10a1,1,0,0,1,2,0V22A1,1,0,0,1,16,23Z" fill="#00BF63"/><path d="M22,17H10a1,1,0,0,1,0-2H22a1,1,0,0,1,0,2Z" fill="#00BF63"/></svg>';
        botoes.href = partida.link;
        botoes.addEventListener('click', function() {
        });

        const moreInfoButton = document.createElement('a');
        moreInfoButton.textContent = 'Veja Mais';
        moreInfoButton.classList.add('botao__more');
        moreInfoButton.href = partida.link;
        moreInfoButton.addEventListener('click', function() {
        });
        
        const title = document.createElement('h3'); 
        title.textContent = partida.nome_da_partida;
        title.classList.add('descricao__titulo');

        const name = document.createElement('h2');
        name.textContent = partida.nome;
        name.classList.add('card__titulo');
        
        const details = document.createElement('p');
        details.textContent = `${partida.descricao} ${partida.cidade}`;
        details.classList.add('descricao__texto');

/*         const favorito = document.getElementById('heartIcon').addEventListener('click', function() {
            this.classList.toggle('filled');})
        
            document.getElementById('heartIcon2').addEventListener('click', function() {
            this.classList.toggle('filled');})
        
            document.getElementById('heartIcon3').addEventListener('click', function() {
            this.classList.toggle('filled');})
        
            document.getElementById('heartIcon4').addEventListener('click', function() {
            this.classList.toggle('filled');
        }); */
    
        card.appendChild(esquerda);
        card.appendChild(direita);

        esquerda.appendChild(rating);
        esquerda.appendChild(title);
        esquerda.appendChild(name);
        esquerda.appendChild(details);
        card.appendChild(botoes);
        
        

        direita.appendChild(imagem);
        card.appendChild(moreInfoButton);


        container.appendChild(card);
    });
}
