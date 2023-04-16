class classitems {
    constructor(_name,price ){
        this.name = _name;
        this.price = price;
    }
render(){
    let li= document.createElement("li");
    li.className = "container";
    li.id = "list_item"
    li.innerHTML = `
    name: ${this.name}<br/>
    price: ${this.price}<br/><br/>
    `
    
      document.querySelector("#ul_items").append(li)
}
}