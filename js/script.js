let list_items = [
   new classitems("banana", "12$"),
   new classitems("kiwi", "10$"),
   new classitems("apple", "22$"),
   new classitems("prange", "15$"),
];
list_items.forEach(item => item.render())

 let total = 0


 function whichitem (item){
    return document.querySelector("#ul_buy").innerHTML = item
 }

// const events = event => {
//     debugger    
// }


// document.c