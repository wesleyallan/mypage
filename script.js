function redirect() {
  window.open('https://github.com/wesleyallan', '_blank');
}

const button = document.getElementById('button');
button.onclick = redirect;

const name = Array.from('Wesley');
const myName = document.getElementById('myName');

name.forEach((letter, index) => {
  setTimeout(() => {
    if (index === 0) {
      myName.innerHTML = letter;
      return;
    }
    myName.innerHTML += letter;
  }, 550 * index);
});
