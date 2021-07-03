class ReviewPage{

    get productsPrice(){
        return $$("//td[@class='col-sm-1 col-md-1 text-center'][2]/strong")
    }

    get productValue(){
        return $("h3 strong")
    }

    get successBtn(){
        return $(".btn.btn-success")
    }

    get country(){
        return $("#country")
    }

    get loader(){
        return $(".lds-ellipsis")
    }

    get selectCountry(){
        return $("=India")
    }

    get submitBtn(){
        return $("[type='submit']")
    }

    sumOfProducts(){
       return this.productsPrice.map(price => parseInt(price.getText().split(".")[1].trim()))
                .reduce((total, price) => total + price, 0)
    }

    totalFormattedPrice(){
      return parseInt(this.productValue.getText().split(".")[1].trim())
    }



}
module.exports = new ReviewPage()