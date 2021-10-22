function Email(){
  const email = document.querySelector('input[name=_email]')

  const alterateEmail = document.querySelector('form')

  alterateEmail.action = `https://formsubmit.co/${email.value}`
}