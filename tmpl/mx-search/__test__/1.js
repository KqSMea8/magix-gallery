let Magix = require('magix');
let Base = require('__test__/example');
let $ = require('$');

module.exports = Base.extend({
    tmpl: '@1.html',
    render() {
        this.updater.digest({
            list: [{
                text: '计划',
                value: 'campaignId'
            }, {
                text: '单元',
                value: 'adgroupId'
            }],
            searchKey: '',
            searchValue: ''
        });
    },
    'change<search>' (e) {
        e.preventDefault();
        // e.searchKey 搜索对应的key值
        // e.searchValue input文本框输入的对应的内容
        this.updater.digest({
            searchKey: e.searchKey,
            searchValue: e.searchValue
        })
    }
});