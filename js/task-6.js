

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector('input[type="number"]');
const buttonCreate = document.querySelector('[data-create]');
const buttonDestroy = document.querySelector('[data-destroy]');
const createBoxesContainer = document.getElementById('boxes');

buttonCreate.addEventListener('click', function() {
 const amountBoxes = input.value;
if (amountBoxes >= 1 && amountBoxes <= 100)
 {
    createBoxes(amountBoxes);
    } else {
  alert
    ('Не вірно введене значення. Кількість має бути від 1 до 100')
    }
}); 

function createBoxes(amount) {
  
  const accumulationDivs = document.createDocumentFragment();

  for (let i = 0; i < amount; i++) {
    const div = document.createElement('div');
    const size = 30 + 10 * i;
    div.style.width = `${size}px`;
    div.style.height = `${size}px`;
    div.style.backgroundColor = getRandomHexColor();
    accumulationDivs.appendChild(div);
  }
  createBoxesContainer.appendChild(accumulationDivs);
  }
  buttonDestroy.addEventListener("click", destroyBoxes);

 function destroyBoxes() {
  createBoxesContainer.innerHTML = '';
 }; 


