let Magix = require('magix');
let $ = require('$');

module.exports = Magix.View.extend({
    tmpl: '@demo.html',
    render() {
        this.updater.digest({
            path: 3
        });
    }
});