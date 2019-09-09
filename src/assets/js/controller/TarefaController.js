class TarefaController{

  constructor(){
    this._tarefaService = new TarefaService()
    this._tarefaView = new TarefaView()
    this._tarefas = new Tarefas()
  }

  listarTodas(){
    this._tarefas.clear()
    this._tarefaService.listarTodas()
      .then(tarefas => {
        tarefas.forEach(tarefa => {
          this._tarefas.add(tarefa)
        })})
      .then(() => this._tarefaView.montarGrid(this._tarefas))
  }

  // listarPorDescricao(){

  // }

  // listarPorId(id){
    

    // document.querySelector('#btn-novo').addEventListener('click', (event) => {
    //   event.preventDefault()
      // const tarefaService = new TarefaService()
      // this._tarefaService.listarPorId(id).then(data => console.log(data.descricao))
    // })
  // }

  // inserir(){
  //   const descricao = "Comprar tinta"
  //   const datahorario = "2010-10-10 14:00:00"
  //   const realizado = false
  //   const categoria_id = 3
  //   const tarefa = new Tarefa(0, descricao, datahorario, realizado, categoria_id)
  //   this._tarefaService.inserir(tarefa)
  // }

  // alterar(){

  // }

  // deletar(){

  // }

}

