const categoryUl = document.querySelector("#categories");

const categoryItems = categoryUl.querySelectorAll(".item");
console.dir(`Number of categories: ${categoryItems.length}`);

categoryItems.forEach((category) => {
  const itemName = category.querySelector("h2").textContent;
  console.dir(`Category: ${itemName}`);

  const itemQuantiti = category.querySelectorAll("ul li").length;
  console.dir(`Elements: ${itemQuantiti}`);
});
