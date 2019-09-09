class Categoria {

  constructor(id, descricao){
    
    this._id = id
    this._descricao = descricao
  }

  get id(){
    return this._id
  }

  set id(id){
    this._id = id
  }

  get descricao(){
    return this._descricao
  }

  set descricao(descricao){
    this._descricao = descricao
  }
}
