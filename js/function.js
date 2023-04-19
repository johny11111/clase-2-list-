let total = 0;
let cart_item = []
function itemClick(event) {
  let item = event.target;
  let name = item.dataset.name;
  let price = Number(item.dataset.price);
  let ShoppingCart = document.querySelector("#ul_buy");

  // Check if item already in cart and remove if double clicked
  const existingItem = document.querySelector(`#ul_buy [data-name='${name}']`)
  let newLi = document.createElement('li');
  newLi.innerText = name;
  newLi.dataset.name = name;
  newLi.dataset.price = price;
  newLi.addEventListener('dblclick', (event) => {
    let itemCurt = event.target;
    total -= price;
    const totalElement = document.querySelector("#total");
    totalElement.innerText = `${total}$`;
    itemCurt.remove()
  })
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


function rendercurt(name ,price){
  let li= document.createElement("li");
  li.innerHTML = `
  name: ${name} 
  price: ${price}<br/><br/>
  `
  li.dataset.name= name;
  li.dataset.price = price;
    document.querySelector("#ul_buy").append(li)
  }   



list_items.forEach(item => item.render());

document.querySelectorAll("#ul_items li").forEach(item => {
  item.addEventListener("click", (event) => {
  let ele =  event.target;
  let price = Number(item.dataset.price);
  let nameele = item.dataset.name;
    cart_item.push(new classitems (nameele, price))
    document.querySelector("#ul_buy").innerHTML = ""
    cart_item.forEach( item => {
        rendercurt()
      } );
    if (cart_item === []){
      null     
    }
    else{
      cart_item.forEach( item =>{
        document.querySelector("#ul_buy").innerHTML = ""
        rendercurt(nameele,price)

      } );
    }

   
    
   

    // event.target.classList.add
  });
});




// document.querySelector("#app").addEventListener('dblclick', function(event) {
//   console.log(event.detail);
// });

