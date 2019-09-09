class Tarefas{

  constructor(){

    this._tarefas = []
  }

  add(tarefa){
    this._tarefas.push(tarefa)
  }

  list(){
    return this._tarefas
  }
}
