class Categorias {
  
  constructor(){

    this._categorias = []
  }

  add(categoria){
    this._categorias.push(categoria)
  }

  list(){
    return this._categorias
  }

  clear(){
    this._categorias = []
  }
}
