
const assert = require('chai').expect
const loginPage = require('../pageObjects/loginPage')
const productpage = require('../pageObjects/productPage')
const reviewPage = require('../pageObjects/reviewPage')
const fs = require('fs') //to parse Json
let credentials = JSON.parse(fs.readFileSync('test/testData/LoginTest.json'))
let e2eData = JSON.parse(fs.readFileSync('test/testData/e2eTest.json'))

describe('Ecommerce Application',()=>{
    credentials.forEach(({username,password}) =>{
   xit('Login page negative Scenario-smoke',()=>{
        //webdriverio code to check title of the page
        browser.url("/loginpagePractise/")
       let title = browser.getTitle()
       console.log("The title of the webpage is : ",title)
       
       expect(browser).toHaveTitleContaining("LoginPage Practise | Rahul Shetty Academy")
       //supports xpath, css, linktext
       
       loginPage.Login(username,password)

       //to wait until any condition is true
       browser.waitUntil(()=>loginPage.signInBtn.getAttribute('value') === 'Sign In',
        {timeout:4000,timeoutMsg:'Error message not appreared'})
       console.log(loginPage.alert.getText() , "is the text when incorrect credentials")
        expect(loginPage.textInfo).toHaveTextContaining("(username is rahulshettyacademy and Password is learning)")
    })
})

        e2eData.forEach(({productsList})=>{
        it('End to End testing', () => {

            var products = productsList
            console.log(products)
    
            browser.url("https://www.rahulshettyacademy.com/loginpagePractise/")
            loginPage.Login("rahulshettyacademy","learning")
            productpage.checkOutbtn.waitForExist()
            $(".card-footer button").scrollIntoView()
            productpage.addProductsToCart(products)   
            productpage.checkOutbtn.click()

            //let productsPrice = reviewPage.productsPrice
            let sum = reviewPage.sumOfProducts()
            console.log("Totalprice", sum)
            const totalProductValue = reviewPage.totalFormattedPrice()
            console.log("totalProductValue", totalProductValue)
            assert(sum).to.equal(totalProductValue)
            reviewPage.successBtn.click()
            reviewPage.country.setValue("Ind")
            reviewPage.loader.waitForExist({ reverse: true }) // this can be used when you want any element on the screen to  does not exist
            reviewPage.selectCountry.click()
    
            reviewPage.submitBtn.click()
            expect($(".alert.alert-success")).toHaveTextContaining("Success!")
            browser.pause(3000)
        })
    })

})
