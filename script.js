const sonic = document.querySelector('.sonic');
const bola = document.querySelector('.bola-de-ferro');

const jump = () => {
  sonic.classList.add('jump');

  setTimeout(() => {
    sonic.classList.remove('jump');
  }, 500);

  if (sonic.classList.add('jump')) {
    sonic.src = './img/sonic-rolling.gif';
  }
};

const loop = setInterval(() => {
  const bolaPosition = bola.offsetLeft;
  const sonicPosition = +window
    .getComputedStyle(sonic)
    .bottom.replace('px', '');

  if (bolaPosition <= 140 && bolaPosition > 0 && sonicPosition < 120) {
    bola.style.animation = 'none';
    bola.style.left = `${bolaPosition}px`;

    sonic.style.animation = 'none';
    sonic.style.bottom = `${sonicPosition}px`;

    sonic.src = './img/sonic-gameover.gif';
    sonic.style.width = '100px';
    sonic.style.marginLeft = '50px';

    clearInterval(loop);
  }
}, 10);

document.addEventListener('keydown', jump);
