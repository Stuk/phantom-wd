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

    it("starts with a custom port", function (done) {
        phantom({port: "8888"})
        .then(function (browser) {
            expect(browser.get).toBeDefined();
            return browser.quit();
        })
        .then(done, done);
    }, 20000);
});
