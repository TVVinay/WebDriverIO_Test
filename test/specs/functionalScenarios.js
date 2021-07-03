const assert  = require("chai").expect

describe('Functional Testin on Application',()=>{
    xit('Scrolling and mousehover-smoke',()=>{
        browser.url("/AutomationPractice/")
        $("#mousehover").scrollIntoView()
        browser.pause(2000)
        $("#mousehover").moveTo()
        browser.pause(2000)
        $("=Top").click()
        browser.pause(2000)
        
    })

    it('Double tap and accept alert',()=>{

        browser.url("http://only-testing-blog.blogspot.com/")
        $("button[ondblclick='myFunction()']").scrollIntoView()
        $("button[ondblclick='myFunction()']").doubleClick()
        console.log(browser.isAlertOpen())
        console.log(browser.getAlertText())
        assert(browser.getAlertText()).to.equal("Press 'OK' or 'Cancel' button!")
        browser.acceptAlert()
        console.log($("//div[@id='post-body-7297556448793668582']//div[@id='demo']").getText())

    })

    xit('Web Tables Validations',()=>{
        browser.url("https://rahulshettyacademy.com/seleniumPractise/#/offers")
        $('thead tr th:nth-child(1)').click()
        //retrive the list of vegetables in the array & sort the array
        const veggieLocators = $$('tr td:nth-child(1)')
        const vegList = veggieLocators.map(veggieLocator => veggieLocator.getText())
        console.log(vegList)
        //Arrays in JS pass by reference not by value
        veggies = vegList.slice() // to copy the array into new arraylist
        const sortedVeggies = veggies.sort()
        console.log(sortedVeggies)
        assert(vegList).to.equal(sortedVeggies)
    })

        it('Web Table Filter search',()=>{
            browser.url("https://rahulshettyacademy.com/seleniumPractise/#/offers")
            $('#search-field').setValue("Tomato")
            const veggieLocators = $$('tr td:nth-child(1)')
            console.log(veggieLocators.length)
            expect(veggieLocators).toBeElementsArrayOfSize({eq:1})
            expect(veggieLocators[0]).toHaveTextContaining("Tomato")

        })

})