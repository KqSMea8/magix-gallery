/*
ver:1.3.10
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
let Magix = require('magix');
let Form = require('../index');
module.exports = Magix.View.extend({
    tmpl: '@sub1.html',
    mixins: [Form],
    render() {
        let me = this;
        me.updater.digest();
    }
});