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

    if(bolaPosition <= 80 && bolaPosition > 0 && sonicPosition < 120){
        bola.style.animation = 'none'
        bola.style.left = `${bolaPosition}px`
    }

},10)

document.addEventListener('keydown', jump)