//Selecionando elemento
let campoTarefa = document.querySelector('#campo-tarefa');
let adicionar = document.querySelector('#botao-adicionar');
let listaTarefas = document.querySelector('#lista-tarefas');

//Adicionando o Evento
adicionar.addEventListener('click', adicionarTarefa);

//Adiconando tarefa com a tecla enter
campoTarefa.addEventListener('keyup', function (enter) {
    if (enter.key === 'Enter') {
        adicionarTarefa();
    }
})

//Criando e Adicionando elementos
function adicionarTarefa() {
    //Pegar o valor do campo de texto
    let nomeTarefa = campoTarefa.value;
    //Criando um elemento li
    let novaTarefa = document.createElement('li');
    //Definindo o conteúdo do elemento li
    novaTarefa.innerText = nomeTarefa;
    //Adicionar o item da lista ao final da lista
    listaTarefas.appendChild(novaTarefa);
    //Adicionar um ouvinte ao item da lista
    novaTarefa.addEventListener('click', function () {
        novaTarefa.classList.toggle('concluida')
    })
    novaTarefa.className = "tarefa"

    //Removendo Elementos
    //Criar botão excluir
    let botaoExcluir = document.createElement('button');

    //Definir o texto do botão excluir
    botaoExcluir.innerText = "Remover";

    //Adicionar um ouvinte ao botão excluir
    botaoExcluir.addEventListener('click', function () {
        listaTarefas.removeChild(novaTarefa);
    })

    //Adicionar o botão excluir
    novaTarefa.appendChild(botaoExcluir);
    campoTarefa.value = null;
    botaoExcluir.className = "botaoExcluir";
}