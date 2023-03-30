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
