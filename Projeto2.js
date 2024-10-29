function criaCartao(Categoria, Pergunta, Resposta){
    let container = document.getElementById('container');
    let cartao = document.createElement('article');
    cartao.className = 'cartao';
    cartao.innerHTML = `<div class="conteudoCartao" onclick="mostraCartao(this)>
    <h3>${Categoria}</h3>
    <div class="perguntaCartao">
        <p>${Pergunta}</p>
    </div>
    <div class="respostaCartao">
        <p>${Resposta}</p>
    </div>
</div>`
container.appendChild(cartao);
}


function mostraCartao(card) {
const Resposta = card.querySelector('.respostaCartao');
if (Resposta.style.display === 'none')
   Resposta.style.display = 'block' ;

else Resposta.style.display = 'none'}