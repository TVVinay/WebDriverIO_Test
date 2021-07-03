const assert = require('chai').expect
describe('End to End Testing for Ecommerce App', () => {
    it('End to End testing', () => {
        var products = ["Blackberry", "Nokia Edge"]

        browser.url("https://www.rahulshettyacademy.com/loginpagePractise/")
        $("#username").setValue("rahulshettyacademy")
        $("#password").setValue("learning")
        $("#signInBtn").click()
        const checkoutBtn = $("*=Checkout")
        checkoutBtn.waitForExist()
        $(".card-footer button").scrollIntoView()
        cards = $$("div[class='card h-100']")
        cards.filter(card => products.includes(card.$("div h4 a").getText()))
            .map(specificCard => specificCard.$(".card-footer button").click())

        checkoutBtn.click()


        let productsPrice = $$("//td[@class='col-sm-1 col-md-1 text-center'][2]/strong")
        let sum = productsPrice.map(price => parseInt(price.getText().split(".")[1].trim()))
            .reduce((total, price) => total + price, 0)
        console.log("Totalprice", sum)
        const totalProductValue = parseInt($("h3 strong").getText().split(".")[1].trim())
        console.log("totalProductValue", totalProductValue)
        assert(sum).to.equal(totalProductValue)
        $(".btn.btn-success").click()
        $("#country").setValue("Ind")
        $(".lds-ellipsis").waitForExist({ reverse: true }) // this can be used when you want to until it does not exist
        $("=India").click()

        $("[type='submit']").click()
        expect($(".alert.alert-success")).toHaveTextContaining("Success!")
        browser.pause(3000)




    })

    xit('End to End BMS', () => {
        browser.url("https://in.bookmyshow.com/")
        $("#wzrk-cancel").waitForExist()
        $("#wzrk-cancel").click()
        let citiesList = $$("span.sc-dEfkYy.kgktjs")
        citiesList.filter(city => city.getText() === "Mumbai").map(specificCity => specificCity.click())
        $(".sc-dEoRIm.cTgmVo a:nth-child(1)").click()
        browser.pause(3000)



    })

})