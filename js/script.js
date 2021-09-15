const btn = document.querySelector('button');
const body = document.querySelector('body');

const colors = ['yellow', 'green', 'blue', 'purple'];

body.style.backgroundColor = 'red';

btn.addEventListener('click', changebg);

function changebg() {
  const colorIndex = parseInt(Math.random() * colors.length);
  console.log(body.style.backgroundColor = colors[colorIndex]);
}