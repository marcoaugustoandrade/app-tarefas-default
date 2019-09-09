class CategoriaService extends Service {

  constructor(){
    super()
    this._path = `${this._url}/categorias`
  }

  async listarPorId(id){
    return fetch(`${this._path}/${id}`).then(res => res.json())
  }
}
