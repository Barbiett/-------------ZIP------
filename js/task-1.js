
const categoryItems = document.querySelectorAll("#categories li.item")
console.log(`Number of categories: ${categoryItems.length}`);
categoryItems.forEach(categoryItem => {
    const categoryName = categoryItem.querySelector("h2").textContent;
    console.log(`Category: ${categoryName}`)
    const categoreElements = categoryItem.querySelectorAll("li").length;
    console.log(`Elements: ${categoreElements}`)
})
