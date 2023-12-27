// encontrar o botão adicionar tarefa
const btnAdicionarTarefa = document.querySelector('.app__button--add-task')
const formAdiconarTarefa = document.querySelector('.app__form-add-task')
const textarea = document.querySelector('.app__form-textarea')

const tarefas = []

btnAdicionarTarefa.addEventListener('click', ()=>{
    // alteração da classe hiddden
    formAdiconarTarefa.classList.toggle('hidden')
})

formAdiconarTarefa.addEventListener('submit', (evento) => {
    // preventDefault = impedir o comportamento padrão (recarregar a página)
    evento.preventDefault();
    const tarefa = {
        descricao: textarea.value
    }
    tarefas.push(tarefa)
    localStorage.setItem('tarefas', JSON.stringify(tarefas))
})