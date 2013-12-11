var phantom = require("../index");

describe("readme", function () {
    it("works", function (done) {
        var browserPromise = phantom({
            debug: false       // boolean, console.log Phantom output
        });

        browserPromise
        .then(function (browser) {
            return browser.get("http://admc.io/wd/test-pages/guinea-pig.html")
            .then(function () {
                return browser.execute("return document.title");
            })
            .then(function (title) {
                expect(title).toEqual("WD Tests");

                // This both shuts down the webdriver connection and kills PhantomJS
                return browser.quit();
            });
        })
        .done(done, done);
    });
});
