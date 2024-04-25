
// потрібно написати скрипт для створення і очищення колекції елементів
// Є input, у який користувач вводить к-сть елементів. Після натискання на кнопку Create має рендеритися 
//(додаватися в DOM) колекція з відповідною к-стю ел. і очищатися значення в інпуті.
//При повторному натисканні на кнопку Create поверх старої колекції має рендеритись нова.
//Після натискання на кнопку Destroy колекція елементів має очищатися.
//Функція має створювати стільки <div> елементів, скільки вказано в параметрі amount і додавати їх у DOM дочірніми елементами для div#boxes.
//Розміри першого <div> елемента мають бути 30px на 30px., наступний елемент повинен бути ширшим і вищим від попереднього на 10px.
//Усі елементи повинні мати випадковий колір фону. Використовуй готову функцію getRandomHexColor() для отримання випадкового кольору.
//
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
 const amountBoxes = input.value;//отримала кількість квадратів
if (amountBoxes >= 1 && amountBoxes <= 100)//перевірила чи проходить ця кількість валідацію від 1 до 100 включно 
 {
    createBoxes(amountBoxes);
   } else {
    alert('Не вірно введене значення. Кількість має бути від 1 до 100')
   }
}); 

function createBoxes(amount) {
  //додаю отриману вище кількість квадратів, колір квадратів = getRandomHexColor, розмір квадратів 30х30пікс ++10пікс 
  for (let i = 0; i < amount; i += 1) {
    createBoxesContainer.insertAdjacentHTML(
      "beforeend",
      `<div style="width: ${30 + 10 * i}px; height: ${30 + 10 * i}px; background-color: ${getRandomHexColor()};"></div>`
    );
  }
}
  buttonDestroy.addEventListener("click", destroyBoxes);
//очищаю контейнер з квадратами
 function destroyBoxes() {
  createBoxesContainer.innerHTML = '';
 }; 


