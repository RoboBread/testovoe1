let burger = document.querySelector('.burger')
let menu = document.querySelector('.descktop-menu')
burger.addEventListener('click',function(){
    this.classList.toggle('burger-active')
    menu.classList.toggle('menu-active')
})
