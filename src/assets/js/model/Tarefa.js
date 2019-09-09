class Tarefa{

  constructor(id, descricao, datahorario, realizado, categoria){

    this._id = id
    this._descricao = descricao
    this._datahorario = datahorario
    this._realizado = realizado
    this._categoria = categoria
  }

  get id(){
    return this._id
  }

  get descricao(){
    return this._descricao
  }

  get datahorario(){
    return this._datahorario
  }

  get realizado(){
    return this._realizado
  }
  
  get categoria(){
    return this._categoria
  }
}
