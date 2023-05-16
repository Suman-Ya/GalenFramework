var operatingSystems = {
    windows: {
      osName: "Windows"
    }
  };
  
var browsers = {
    firefox: {
      browserName: "Firefox"
    },
    chrome: {
      browserName: "Chrome"
    }
  };

var devicename = {
    mobile: {
      deviceName: "mobile",
      size: "800x1280"
    },
    tablet: {
      deviceName: "tablet",
      size: "412x732"
    },
    desktop: {
      deviceName: "desktop",
      size: "1920x1080"
    }
  };

  forAll(operatingSystems, function () {
    forAll(browsers, function () {
      forAll(devicename, function(){
      test("Test on ", function (os, browser, devicename) {
        var driver = createDriver("https://rfsidm.colt.net/nidp/app/login?",
        device.size);
        checkLayout(driver, "Colt_login.gspec", ["all", "desktop"]);
      });
    }); 
  });
});
