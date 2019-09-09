class TarefaService extends Service{

  constructor(){
    super()
    this._path = `${this._url}/tarefas`
  }

  async listarTodas(){
    return fetch(`${this._path}`).then(res =>res.json())
  }

  async listarPorDescricao(descricao){
    return fetch(`${this._path}?f=${descricao}`).then(res =>res.json())
  }

  async listarPorId(id) {
    return fetch(`${this._path}/${id}`).then(res => res.json())
  }

  async inserir(tarefa){
    return fetch(`${this._path}`, {
      method: 'POST',
      body: tarefa
    }).then(res => res.json()).then(res => console.log(res))
  }

  async alterar(tarefa){

  }

  async deletar(tarefa){

  }
}

// async function listarPorId() {
//   const res = await fetch(`http://localhost:3009/api/tarefas/1`);
//   return await res.json();
// }
