# phantom-wd

A webdriver (using [wd](https://github.com/admc/wd)) wrapper around [PhantomJS]().

PhantomJS must be installed and available on the `PATH` for this package to work.

## Usage

``javascript
var phantom = require("phantom-wd");

var browserPromise = phantom({
    debug: false       // boolean, console.log Phantom output
});
```

`browserPromise` is a promise for `wd.promiseRemote`.

```javascript
browserPromise
.then(function (browser) {
    return browser.get("http://google.com/")
    .then(function () {
        return browser.execute("return window.title");
    })
    .then(function (title) {
        console.log(title);

        // This both shuts down the webdriver connection and kills PhantomJS
        return browser.quit()
    })
})
.done();
```

## License

BSD 2-Clause
