const body = document.querySelector('body')
const skull = document.querySelector('.skull-container')


if (window.matchMedia("(min-width: 1024px)").matches) {
  for (let index = 0; index < 17; index++) {
    const newSkull = skull.cloneNode()
    newSkull.innerHTML = skull.innerHTML
    if (6 <= index && index <= 9) {
      newSkull.classList.add('rotate')
    }
    body.appendChild(newSkull)
  }
}
