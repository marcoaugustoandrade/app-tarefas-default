class TarefaView{
  
  constructor(){
    this._grid = ''
  }

  _limparFormulario(){

  }

  templateGrid(tarefa){
    return `
      <section class="task-background d-flex m-3">
        <div>
          <input type="checkbox" class="mt-1">
        </div>
        <div class="flex-fill ml-2 mr-2">
          <div><a href="#" class="link-task">${tarefa.descricao}</a></div>
          <div class="text-muted font-text">${tarefa.datahorario}</div>
          <div class="mt-2 font-text"><img src="assets/images/blue.svg" alt="" class="mr-1"> Trabalho</div>
        </div>
        <div>
          <a href="#"><img src="assets/images/delete.svg" alt=""></a>
        </div>
      </section>    
    `
  }

  montarGrid(tarefas){
    // console.log(tarefas)
    // Adicionar cada tarefa no
    tarefas.list().forEach(tarefa => {
      console.log(tarefa)

    })
  }
}
