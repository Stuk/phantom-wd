# phantom-wd

A webdriver (using [wd](https://github.com/admc/wd)) wrapper around [PhantomJS](http://phantomjs.org/).

PhantomJS must be installed and available on the `PATH` for this package to work.

## Usage

```javascript
var phantom = require("phantom-wd");

var browserPromise = phantom({
    debug: false       // boolean, console.log PhantomJS output
    port:  8910        // number, which port PhantomJS should listen on
});
```

`browserPromise` is a promise for `wd.promiseRemote`.

```javascript
phantom()
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
.done();
```

## License

BSD 2-Clause
