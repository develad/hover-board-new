const board = document.querySelector('#board');
const clearScreen = document.querySelector('#claer-screen');
const randomPaint = document.querySelector('#random-paint');
const paintingMode = document.querySelector('#painting-mode');
let isDrowing = false;

const SQURE_NUM = 2695;

const colors = [
  'rgb(147, 112, 219)',
  'rgb(0, 250, 154)',
  'rgb(119, 136, 153)',
  'rgb(219, 112, 147)',
  'rgb(64, 224, 208)',
];

window.addEventListener('DOMContentLoaded', () => {
  const customClick = new CustomEvent('click');
  clearScreen.dispatchEvent(customClick);
});

for (let i = 0; i < SQURE_NUM; i++) {
  const squre = document.createElement('div');
  squre.classList.add('squre');
  squre.addEventListener('mouseenter', () => {
    if (isDrowing) {
      paintingMode.innerHTML =
        'painting mode: on 🎇 <small style="color: crimson;">Click to change</small>';
      if (squre.style.backgroundColor === 'rgb(60, 64, 65)') {
        const randomColor = getRandomColor();
        squre.style.backgroundColor = randomColor;
      }
    } else {
      paintingMode.innerHTML =
        'painting mode: off 🎆 <small style="color: lawngreen">Click to change</small>';
    }
  });
  board.appendChild(squre);
}

board.addEventListener('click', () => {
  isDrowing = !isDrowing;
});

clearScreen.addEventListener('click', () => {
  const arraySqure = document.querySelectorAll('.squre');
  arraySqure.forEach((item) => {
    item.style.backgroundColor = 'rgb(60, 64, 65)';
  });
});

randomPaint.addEventListener('click', () => {
  const arraySqure = document.querySelectorAll('.squre');
  arraySqure.forEach((squre) => {
    const randomColor = getRandomColor();
    squre.style.backgroundColor = randomColor;
  });
});

const getRandomColor = () => {
  return colors[Math.floor(Math.random() * colors.length)];
};
