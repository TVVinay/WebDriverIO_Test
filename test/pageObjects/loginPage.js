class LoginPage{

    get username(){
        return $("#username")
    }

    get password(){
        return $("#password")
    }

    get signInBtn(){
        return $("#signInBtn")
    }

    get alert(){
        return $(".alert.alert-danger.col-md-12")
    }

    get textInfo(){
        return $("p")
    }

    Login(username,pass){
          this.username.setValue(username)
          this.password.setValue(pass)
          this.signInBtn.click()  
    }

}

module.exports = new LoginPage()