var util = require('util');
var Writable = require('stream').Writable;

/**
 * This is a writable stream that searches the stream for the characters given
 * in `options.match`, and when found calls `options.matchedCallback`.
 * It also takes an optional `options.out` to continue writing the chunks to
 * (e.g. stdout)
 * @param {object} options
 */
module.exports = SearchStream;
function SearchStream(options) {
    Writable.call(this, options);
    this._out = options.out;
    this._match = options.match;
    this._matchedCallback = options.matchedCallback;
    this._found = false;
}
util.inherits(SearchStream, Writable);

Writable.prototype._write = function (chunk, encoding, callback) {
    if (!this._found) {
        var string = chunk.toString("utf8");
        if (string.indexOf(this._match) !== -1) {
            this._found = true;
            this._matchedCallback(string);
        }
    }

    if (this._out) {
        this._out.write(chunk, encoding, callback);
    } else {
        callback();
    }
};
