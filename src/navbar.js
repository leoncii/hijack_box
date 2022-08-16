document.addEventListener('DOMContentLoaded', () => {
  /* const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0)
 */
  const navbarBurgers = document.querySelector('.navbar-burger')
  //$navbarBurgers.forEach( el => {
    navbarBurgers.addEventListener('click', () => {
      const target = navbarBurgers.dataset.target
      const $target = document.getElementById(target)
      navbarBurgers.classList.toggle('is-active')
      $target.classList.toggle('is-active')
    })
  //})
})