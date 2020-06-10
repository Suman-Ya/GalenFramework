// These two values are passed from Galen test
//var Globe_icon = arg.Globe_icon;
//var FranceLng = arg.FranceLng

// Here we click on globe icon for languages on our login page
driver.findElement(By.xpath("//i[contains(@class,'fa fa-globe')]")).click();
driver.findElement(By.xpath("//a[@id='frLink']")).click();
Thread.sleep(3000);

// Submitting the login page
driver.findElement(By.xpath("//i[contains(@class,'fa fa-globe')]")).click();

// Waiting till user profile page is shown
function pageIsLoaded() {
    return driver.findElement(By.xpath("//p[contains(@class,'centered text-white')]")) != null;
}
waitFor(pageIsLoaded);

function waitFor(func) {
    var timeout = 20;

    while(timeout > 0 && !func()) {
        timeout = timeout - 1;
        Thread.sleep(2000);
    }

    if (!func()) {
        throw new Error("Wait timeout");
    }
}
