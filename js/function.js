let total = 0;
function itemClick(event) {
    let item = event.target;
    let name = item.dataset.name;
    let price = Number(item.dataset.price);
    let ShoppingCart = document.querySelector("#ul_buy");
    let newLi = document.createElement('li');

    newLi.innerText = name;
    ShoppingCart.append(newLi); 
    total += price;
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
});
  function itemClicked() {
    const items = document.querySelectorAll("#ul_items li");
    items.forEach(item => {
      item.addEventListener("click", event => {
        itemClick(event);
      });
    });
  }