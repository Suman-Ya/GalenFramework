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
  
  forAll(operatingSystems, function () {
    forAll(browsers, function () {
      test("Test on ", function (os, browser) {
        var driver = createDriver("http://galenframework.com",
        "640x480", "firefox");
        checkLayout(driver, "Colt_login.gspec", ["all", "desktop"]);
      });
    }); 
  });
