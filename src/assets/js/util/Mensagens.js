class Mensagem{
  
  static mostrarMensagem(msg, classe){
    
    const mensagem = document.querySelector("#mensagem")
    mensagem.innerHTML = msg
    mensagem.className = ''
    mensagem.classList.add('m-3', 'alert', classe)
    
    setTimeout(() => {
      mensagem.innerHTML = ''
      mensagem.className = ''
      mensagem.classList.add('d-none')
    }, 3000)
  }
}
