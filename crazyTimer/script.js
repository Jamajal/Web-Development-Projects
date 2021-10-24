const tensScreen = document.getElementById('tens')
const secondsScreen = document.getElementById('seconds')
const start = document.querySelector('#start')
const stop = document.querySelector('#stop')
const reset = document.querySelector('#reset')
const titulo = document.querySelector('h1')
const tela = document.querySelector('p')
const timer = document.querySelector('.stopwatch')
var seconds = 00
var tens = 00
var interval

console.log(start)

function startTimer(){
  tens++
  
  if(tens <= 9)
    tensScreen.innerHTML = "0" + tens

  if(tens > 9)
    tensScreen.innerHTML = tens

  if(tens > 99){
    seconds++
    tens = 0
    secondsScreen.innerHTML = "0" + seconds
  }

  if(seconds > 9)
  secondsScreen.innerHTML = seconds
}

start.addEventListener('click', () => {
  clearInterval(interval)
  interval = setInterval(startTimer, 10)
  titulo.classList.add('shiningH1')
  tela.classList.add('shiningP')
  timer.classList.add('shiningStopwatch')
  start.classList.add('shiningButtons')
  reset.classList.add('shiningButtons')
  stop.classList.add('shiningButtons')
  document.body.classList.add('shiningBody')
})

stop.addEventListener('click', () => {
  clearInterval(interval)
  start.classList.remove('shiningButtons')
  reset.classList.remove('shiningButtons')
  stop.classList.remove('shiningButtons')
  titulo.classList.remove('shiningH1')
  tela.classList.remove('shiningP')
  timer.classList.remove('shiningStopwatch')
  document.body.classList.remove('shiningBody')
})

reset.addEventListener('click', () => {
  clearInterval(interval)
  seconds = "00";
  tens = "00";
  secondsScreen.innerHTML = seconds
  tensScreen.innerHTML = tens
  start.classList.remove('shiningButtons')
  reset.classList.remove('shiningButtons')
  stop.classList.remove('shiningButtons')
  titulo.classList.remove('shiningH1')
  tela.classList.remove('shiningP')
  timer.classList.remove('shiningStopwatch')
  document.body.classList.remove('shiningBody')
})

