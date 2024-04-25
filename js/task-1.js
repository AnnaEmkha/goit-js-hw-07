const listOfCategory = document.querySelector('#categories');
console.log(listOfCategory);
const itemOfCategory = listOfCategory.querySelectorAll('.item');
console.log(`Number of category: ${itemOfCategory.length}`);
itemOfCategory.forEach(category => {
    const categoryName = category.querySelector('h2').textContent;
    const categoryItemNumber = category.querySelectorAll('li').length;
    console.log(`Category: ${categoryName}`);
    console.log(`Elements: ${categoryItemNumber}`);
});
