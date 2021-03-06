
let Magix = require('magix');
let Router = Magix.Router;
let Base = require('__test__/example');

module.exports = Base.extend({
    tmpl: '@top.html',
    init() {
        let that = this;
        that.observeLocation(['currentPage', 'pageSize']);
        that.scrollIfNeed('body', ['currentPage', 'pageSize']);

        let list = [], count = 100;
        for (let index = 0; index < count; index++) {
            list.push({
                name: 'name' + (index + 1),
                text: 'text' + (index + 1)
            })
        }

        that.updater.set({
            allList: list,
            count: count,
            contents: [
                '脚手架 boot.ts 中 merge 文件 lib/scroll.js，view 上挂载 scrollIfNeed，该方式监听参数变动返回容器顶部',
                'this.scrollIfNeed(\'相对滚定的节点，如body\',[\'参数1\', \'参数2\']);'
            ].join('<br />')
        })
    },
    render() {
        let that = this;
        let data = that.updater.get();
        let locParams = Router.parse().params;
        let allList = data.allList;
        let currentPage = locParams.currentPage || 1,
            pageSize = locParams.pageSize || 20;

        let list = allList.slice((currentPage - 1) * pageSize, currentPage * pageSize);
        that.updater.digest({
            list,
            currentPage,
            pageSize
        });
    },
    'changePager<change>'(e) {
        // e.page 当前第几页
        // e.size 每页多少条
        Router.to({
            currentPage: e.page,
            pageSize: e.size
        })
    }
});