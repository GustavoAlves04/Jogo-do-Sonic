const sonic = document.querySelector('.sonic')
const bola = document.querySelector('.bola-de-ferro')


const jump = () => {
    sonic.classList.add('jump')

    setTimeout(()=>{
        sonic.classList.remove('jump')
    },550)
}

const loop = setInterval (()=>{

    const bolaPosition = bola.offsetLeft
    const sonicPosition = +window.getComputedStyle(sonic).bottom.replace('px', '')

    if(bolaPosition <= 120 && bolaPosition > 0 && sonicPosition < 80){
        bola.style.animation = 'none'
        bola.style.left = `${bolaPosition}px`

        sonic.style.animation = 'none'
        sonic.style.left = `${sonicPosition}px`

        sonic.src = './img/sonic-gameover.gif'
        sonic.style.width = '100px'
    }

},10)

document.addEventListener('keydown', jump)