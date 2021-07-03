const assert = require('chai').expect

describe('Ecommerce Application',()=>{
    xit('UI Controls',()=>{
        browser.url("https://www.rahulshettyacademy.com/loginpagePractise/")
       let title = browser.getTitle()
       console.log("The title of the webpage is : "+title)
       
       expect(browser).toHaveTitleContaining("LoginPage Practise | Rahul Shetty Academy")
       //supports xpath, css, linktext
       $("#username").setValue("rahulshettyacademy")
       $("#password").setValue("learning123")
       const radiobtn = $$(".customradio")
       radiobtn[1].$(".radiotextsty").click()
       const cancelBtn = $("#cancelBtn")
       cancelBtn.waitForDisplayed()
       expect(cancelBtn).toBeDisplayed()
       cancelBtn.click()
       console.log(radiobtn[1].$(".radiotextsty").isSelected())
       radiobtn[1].$(".radiotextsty").click()
       cancelBtn.waitForDisplayed()
       $("#okayBtn").click()
       radiobtn[0].$(".radiotextsty").click()
       console.log(cancelBtn.isDisplayed())
       expect(cancelBtn).not.toBeDisplayed() // not is used to do negation, Since here the button wont be displayed
       const dropDown = $("select.form-control")
       dropDown.selectByAttribute('value','teach')
       dropDown.selectByVisibleText('Consultant')
       dropDown.selectByIndex(0)    
       console.log(dropDown.getValue())   
       //chai is an library which supports assertions
        assert(dropDown.getValue()).to.equal('stud')

    })

    it('Dynamic drop down Controls-smoke',() =>{

        browser.url("/AutomationPractice/")
        $("#autocomplete").setValue("ind")
        browser.pause(2000)
        let items = $$("[class='ui-menu-item'] div")
        const country = items.filter(item => item.getText() === 'India')
        country[0].click();
        browser.pause(2000)
    })

    xit('Checkbox Controls',()=>{
        
        browser.url("https://rahulshettyacademy.com/AutomationPractice/")
        const checkBoxes = $$("input[type='checkbox']") // can also use directly the id/classname
        checkBoxes[1].click();
        console.log(checkBoxes[1].isSelected()) //should return true
        console.log(checkBoxes[2].isSelected()) //should return false
     //   browser.saveScreenshot("Screenshot.png") This will take the screenshot and save in root directory

    })
})