// З використанням властивостей і методів DOM-елементів, напиши скрипт, який:
//Порахує й виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
//Для li.item у списку ul#categories знайде й виведе в консоль текст заголовка елемента (тегу <h2>) 
//і кількість елементів у категорії(усіх < li >, вкладених у нього).

const listOfCategory = document.querySelector('#categories'); // знаходжу елемент categories
console.log(listOfCategory);
const itemOfCategory = listOfCategory.querySelectorAll('.item'); //знаходжу всі елементи з класом .item і зберігаємо 
console.log(`Number of category: ${itemOfCategory.length}`);
// перебираю кожен елемент .item і зберігаю заголовок в categoryName
// вираховую кількість .li в .item і зберігаю його
// виводжу в консоль категорію і елементи
itemOfCategory.forEach(category => {
    const categoryName = category.querySelector('h2').textContent;
    const categoryItemNumber = category.querySelectorAll('li').length;
    console.log(`Category: ${categoryName}`);
    console.log(`Elements: ${categoryItemNumber}`);
});
