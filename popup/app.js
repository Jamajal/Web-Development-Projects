const button = document.querySelector("button")
const wrapper = document.querySelector(".popup-wrapper")
const close = document.querySelector(".popup-close")
const body = document.querySelector("body")
const popup = document.querySelector("popup")

button.addEventListener("click", () => {
  wrapper.style.display = "block"
})

wrapper.addEventListener("click", event => {
  const classNameOfClickedElement = event.target.classList[0]
  const classNames = ["popup-close", "popup-wrapper", "popup-link"]
  const shouldClosePopup = classNames.some(className => className === classNameOfClickedElement)
  
  if(shouldClosePopup)
    wrapper.style.display = "none"
})

    
