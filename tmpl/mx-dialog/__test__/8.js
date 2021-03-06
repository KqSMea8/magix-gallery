let Magix = require('magix');
let Dialog = require('@../index'); //mixins dialog
let Base = require('__test__/example');
let $ = require('$');
Magix.applyStyle('@../index.less');

module.exports = Base.extend({
    tmpl: '@8.html',
    mixins: [Dialog],
    render() {
        this.updater.digest();
    },
    'open<click>'(e) {
        this.mxDialog('@./demo2', null, {
            height: 200
        });
    }
});