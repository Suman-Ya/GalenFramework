var operatingSystems = {
    windows: {
      osName: "Windows"
    }
  };
  
var browsers = {
    chrome: {
      browserName: "Chrome"
    }
  };

var devicename = {
    desktop: {
      devicename: "desktop",
      size: "1920x1080"
    }
  };

  forAll(operatingSystems, function () {
    forAll(browsers, function () {
      forAll(devicename, function(){
      test("Test on ", function (os, browsers, devicename) {
        var driver = createDriver("https://rfsidm.colt.net/nidp/app/login?",
        devicename.size);
        var properties = loadProperties("common.properties");
        checkLayout(driver, "Colt_login.gspec", ["desktop"]);
      });
    }); 
  });
});
