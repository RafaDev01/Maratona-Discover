const Modal = {
  open(){
    //abrir modal
    //adiconar a classe active ao modal
    document.querySelector('.modal-overlay').classList.add('active');
    
  },
  close(){
    //fechar modal
    //remover a classe active do modal
    document.querySelector('.modal-overlay').classList.remove('active');
  }
}