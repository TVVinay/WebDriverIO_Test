//import { mobile } from '../pageObjects/devices'
// const device =require('../pageObjects/devices')
describe('To test mobile',()=>{
    it('JioPhone view test',()=>{
      //  browser.setWindowSize(mobile[0],mobile[1])
      browser.emulateDevice('JioPhone 2')
      // or `browser.emulateDevice('iPhone X', true)` if you want to be in landscape mode
        browser.url('/')
        browser.pause(3000) 
    })

    it('iPhoneX view test',()=>{
        //  browser.setWindowSize(mobile[0],mobile[1])
        browser.emulateDevice('iPhone X')
        // or `browser.emulateDevice('iPhone X', true)` if you want to be in landscape mode
          browser.url('/')
          browser.refresh()
          browser.pause(3000) 
      })

})