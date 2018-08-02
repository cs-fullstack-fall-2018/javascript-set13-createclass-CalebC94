class Product{

    constructor(productName, price, quantity){
        this.productName = productName;
        this.price = price;
        this.quantity = quantity;
    }
    printAllAttributes(){
        return(this.productName + ", price:" + this.price + ", quantity:" + this.quantity);
    }
}

function main(){
    var drinks = new Product("Sprite", 5, 12);
    var noodles = new Product("Beef", 2, 24);

    alert(drinks.printAllAttributes());
    alert(noodles.printAllAttributes());

    console.log(drinks.printAllAttributes());
    console.log(noodles.printAllAttributes());


}

main();