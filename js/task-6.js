const input = document.querySelector('input[type="number"]');
const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
const boxesContainer = document.querySelector('#boxes');

createBtn.addEventListener('click', handleCreate);
destroyBtn.addEventListener('click', destroyBoxes);

function handleCreate() {
  const amount = input.value;
  
  if (amount < 1 || amount > 100) {
    return;
  }
  
  clearBoxes();
  createBoxes(amount);
  input.value = '';
}

function createBoxes(amount) {
  const initialSize = 30;
  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    const size = initialSize + i * 10;
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxesContainer.appendChild(box);
  }
}

function clearBoxes() {
  boxesContainer.innerHTML = '';
}

function destroyBoxes() {
  clearBoxes();
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
}
