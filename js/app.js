function comprar()
{
    //recebe a categoria escolhida
    let categoria = document.getElementById('tipo-ingresso').value;
    // recebe a quantidade definida
    let quantidade = document.getElementById('qtd').value;
    // le a quantidade de ingressos disponiveis
    let estoque = document.getElementById(`qtd-${categoria}`);
    
    if(parseInt(estoque.innerText)<quantidade) // avalia a disponibilidade
    {
        alert('Quantidade indisponivel de ingressos');
    }else{
         // receber e filtar o nome da categria escolida
    let lista = document.querySelector(".lista"); // procura o elemento lista
    let tipo = lista.querySelector(`li:has(#qtd-${categoria})`).textContent; // procura o id dentro da categoria lista
    let liTipo = tipo;// retorica da variavel para poder filtar a informação
    liTipo = liTipo.replace(/\d+/g, ''); // filtra o texto para tirar os numeros
    
    
    // faz a operação para contabilizar a nova quantidade de ingressos apos compra
    estoque.textContent =  estoque.innerText - quantidade;
    // aviso da realização da compra
    let palavra = quantidade>1? 'ingressos' : 'ingresso';
    alert(`Você efetuou a compra de ${quantidade} ${palavra} da categoria ${liTipo}`);
    // resetar valor da quantidade
    quantidade = ' ';
    }
}
