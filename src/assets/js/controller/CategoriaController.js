class CategoriaController {

  constructor(){
    this._categoriaService = new CategoriaService()
    this._categoria = new Categoria(0, '')
    this._categorias = new Categorias()
  }

  listarPorId(id){
    this._categoriaService.listarPorId(id).then(categoria => {
      this._categoria.id = categoria.id
      this._categoria.descricao = categoria.descricao
    })
  }

  get categoria(){
    return this._categoria
  }
}
