class ProductPage{

    get checkOutbtn(){
        return $("*=Checkout")
    }

    get cards(){
        return $$("div[class='card h-100']")
    }

    //reusable method

    addProductsToCart(products){
        this.cards.filter(card => products.includes(card.$("div h4 a").getText()))
            .map(specificCard => specificCard.$(".card-footer button").click())
    }
    

}
module.exports = new ProductPage()