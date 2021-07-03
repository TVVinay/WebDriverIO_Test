describe('Windows and Frame Handling',()=>{
    xit('Parent and child windows switch',()=>{
        browser.url("https://rahulshettyacademy.com/AutomationPractice/")
        browser.maximizeWindow()
        $('#openwindow').click()
        let windowHandles = browser.getWindowHandles()
        browser.switchToWindow(windowHandles[1])
        console.log(browser.getTitle())
        browser.closeWindow() // closing the child window
        //switchinBack to Parent window
        browser.switchToWindow(windowHandles[0])
        console.log(browser.getTitle())
        //To open a new window on the fly
        browser.newWindow("https://www.rahulshettyacademy.com/#/index")
        const title = browser.getTitle()
        //Switch back to Original window
        browser.switchWindow("https://rahulshettyacademy.com/AutomationPractice/")
        $('#name').setValue(title)
        browser.pause(3000)
        console.log(browser.getUrl())

    })

    it('Frame handling',()=>{
        browser.url("https://rahulshettyacademy.com/AutomationPractice/")
        $("#mousehover").scrollIntoView()
        //get the Link count on the main page
        console.log($$("a").length)
        browser.switchToFrame(0)
        console.log($$("a").length)
        $(".btn.btn-theme").click()
        browser.pause(2000)
        browser.switchToFrame(null) // this will be switched back to parent window
        console.log($$("a").length) //27

    })

})