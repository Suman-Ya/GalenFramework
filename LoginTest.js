var userLogin = arg.login;
var userPassword = arg.password

// Here we type user login and password on our login page
driver.findElement(By.cssSelector("#userId")).sendKeys(userLogin);
driver.findElement(By.cssSelector("#password")).sendKeys(userPassword);

// Submitting the login page
driver.findElement(By.xpath("//button[contains(text(),'Login')]")).click();

// Waiting till user profile page is shown
function pageIsLoaded() {
    return driver.findElement(By.cssSelector("#colUserImagePreview")) != null;
}


waitFor(pageIsLoaded);

function waitFor(func) {
    var timeout = 10;

    while(timeout > 0 && !func()) {
        timeout = timeout - 1;
        Thread.sleep(1000);
    }

    if (!func()) {
        throw new Error("Wait timeout");
    }
}
