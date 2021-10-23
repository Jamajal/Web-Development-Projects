function alterateClass(){
  const circle = document.querySelector('button')
  
  if(circle.classList.value === ''){
    circle.classList.add('shine')
  }

  else if(circle.classList.value === 'shine'){
    circle.classList.remove('shine')
    circle.classList.add('shineGreen')
  }

  else if(circle.classList.value === 'shineGreen'){
    circle.classList.remove('shineGreen')
    circle.classList.add('shineChaos')
  }

  else if(circle.classList.value === 'shineChaos'){
    circle.classList.remove('shineChaos')
    circle.classList.add('shineLight')
  }

  else
    circle.classList.remove('shineLight')
}