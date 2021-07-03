describe('Ecommerce Application',()=>{
    xit('Login page negative Scenario',()=>{
        //webdriverio code to check title of the page
        browser.url("https://www.rahulshettyacademy.com/loginpagePractise/")
       let title = browser.getTitle()
       console.log("The title of the webpage is : "+title)
       
       expect(browser).toHaveTitleContaining("LoginPage Practise | Rahul Shetty Academy")
       //supports xpath, css, linktext
       $("#username").setValue("rahulshettyacademy")
       $("#password").setValue("learning123")
       $("#signInBtn").click()

       //to wait until any condition is true
       browser.waitUntil(()=>$("#signInBtn").getAttribute('value') === 'Sign In',
        {timeout:4000,timeoutMsg:'Error message not appreared'})
       console.log($(".alert.alert-danger.col-md-12").getText() + "is the text when incorrect credentials")
        $(".text-center.text-white").getText()
        expect($(".text-center.text-white")).toHaveTextContaining("(username is rahulshettyacademy and Password is learning)")
    })

    it('Login page positive Scenario',function(){
      
       // this.retries(2) // this is just a retry mechanism the test will run 3 times if failed
        browser.url("https://www.rahulshettyacademy.com/loginpagePractise/")
       
       $("#username").setValue("rahulshettyacademy")
       $("#password").setValue("learning")
       $("#signInBtn").click()
       var title = browser.getTitle()
       console.log("The title of the webpage is : "+title)
      // expect(browser).toHaveTitleContaining("ProtoCommerce")
       const checkoutBtn = $("*=Checkout")
       checkoutBtn.waitForExist()
       var title = browser.getTitle()
       console.log("The title of the webpage is : "+title)
       expect(browser).toHaveTitleContaining("ProtoCommerce12")

    })

});