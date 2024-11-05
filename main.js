function criaCartao(Categoria, Pergunta, Resposta){
    let container = document.getElementById('container');
    let cartao = document.createElement('article');
    cartao.className = 'cartao';
    cartao.innerHTML = `<div class="conteudoCartao">
    <h3>${Categoria}</h3>
    <div class="perguntaCartao">
        <p>${Pergunta}</p>
    </div>
    <div class="respostaCartao">
        <p>${Resposta}</p>
    </div>
</div>`
container.appendChild(cartao);

let RespostaVisivel = false;
function viraCartao(){
    RespostaVisivel = !RespostaVisivel
    cartao.classList.toggle('.cartao:active', RespostaVisivel)
}

cartao.addEventListener('click', viraCartao);

container.appendChild(cartao)

}
