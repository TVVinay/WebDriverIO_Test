//merge parent conf data + add new changes in UAT conf(baseURL,connectionTimeout)
const merge = require('deepmerge')
const parentConf = require('./wdio.conf')

exports.config = merge(parentConf.config,{
    baseUrl : 'https://rahulshettyacademyuat.com',
    waitforTimeOut : 5000

})