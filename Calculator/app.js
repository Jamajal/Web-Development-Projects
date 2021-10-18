function insert(num){
  conteudo = document.getElementById('tela').innerHTML
  document.getElementById('tela').innerHTML = conteudo + num
}

function clean(){
  document.getElementById('tela').innerHTML = ""
}

function erase(){
  var conteudo = document.getElementById('tela').innerHTML
  document.getElementById('tela').innerHTML = conteudo.substring(0, conteudo.length -1)
}

function total(){
  var conteudo = document.getElementById('tela').innerHTML
  if(conteudo){
    document.getElementById('tela').innerHTML = eval(conteudo)
  }
}