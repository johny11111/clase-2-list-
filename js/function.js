let total = 0;
function itemClick(event) {
  let item = event.target;
  let name = item.dataset.name;
  let price = Number(item.dataset.price);
  let ShoppingCart = document.querySelector("#ul_buy");
  
  // Check if item already in cart and remove if double clicked
  const existingItem = document.querySelector(`#ul_buy [data-name='${name}']`);
  if (existingItem && event.detail === 2) {
    total -= price;
    existingItem.remove();
  } else {
    let newLi = document.createElement('li');
    newLi.innerText = name;
    newLi.dataset.name = name;
    newLi.dataset.price = price;
    ShoppingCart.append(newLi);
    total += price;
  }

  const totalElement = document.querySelector("#total");
  totalElement.innerText = `${total}$`;
}

const list_items = [
  new classitems("banana", "12.5"),
  new classitems("kiwi", "10"),
  new classitems("apple", "22"),
  new classitems("orange", "15"),
];

list_items.forEach(item => item.render());

document.querySelectorAll("#ul_items li").forEach(item => {
   item.addEventListener("click", itemClick);
   item.addEventListener("dblclick", itemClick);
});
