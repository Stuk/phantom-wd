var phantom = require("../index");

describe("phantom", function () {
    it("starts", function (done) {
        phantom()
        .then(function (browser) {
            expect(browser.get).toBeDefined();
            return browser.quit();
        })
        .then(done, done);
    }, 20000);
});
