class classitems {
    constructor(_name,price ){
        this.name = _name;
        this.price = price;
    }
render(){
    let li= document.createElement("li");
    li.className = "container ";
    li.id = "list_item"
    li.innerHTML = `
    name: ${this.name} 
    price: ${this.price}<br/><br/>
    `
    li.dataset.price = this.price;
    li.dataset.name= this.name;
      document.querySelector("#ul_items").append(li)
    }   
}