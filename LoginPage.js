this.LoginPage = function (driver) {
    GalenPages.extendPage(this, driver, {
        username: "#userId",
        password: "#password",
        forgot_password: "xpath  //a[contains(text(),'I forgot my password')]",
        username_Img_icon: "xpath //i[@class='fa fa-user']",
        eyeIcon_password: "xpath //i[@class='fa fa-eye-slash']",
        login_btn: "xpath //button[@class='btn btn-danger btn-block btn-lg']",
        register_btn: "xpath //button[@class='btn btn-secondary btn-block btn-lg']",
        login_txt: "xpath //div[@class='row terms']//p[1]",

    loginAs: function () {
        this.username.typeText(userName);
        this.password.typeText(password);
        this.login_btn.click();
        }
    });
};
module.exports = new LoginPage();