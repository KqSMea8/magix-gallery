/*
    generate by magix-combine@3.11.26: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-tree/__test__/1",["magix","__test__/example","$","../index","mx-pagination/index","mx-copy/index","__test__/hl"],(require,exports,module)=>{
/*Magix,Base,$*/
require("../index");
require("mx-pagination/index");
require("mx-copy/index");
require("__test__/hl");
var Magix = require("magix");
var Vframe = Magix.Vframe;
var Base = require("__test__/example");
var $ = require("$");
Magix.applyStyle("_zs_gallery_mx-tree___test___index_","/* @dependent: ./index.less */\n._zs_gallery_mx-tree___test___index_-mx-shadow {\n  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.08);\n  border: 1px solid #f5f5f6;\n}\n/*用于覆盖bp的品牌色信息*/\n._zs_gallery_mx-tree___test___index_-wrapper {\n  width: 300px;\n  border: 1px solid #e6e6e6;\n}\n._zs_gallery_mx-tree___test___index_-wrapper ._zs_gallery_mx-tree___test___index_-content {\n  padding: 20px 20px 5px 20px;\n}\n");
module.exports = Base.extend({
    tmpl: function ($$, $viewId, $$ref, $e, $n, $eu, $i, $eq) { if (!$$ref)
    $$ref = $$; if (!$n) {
    var $em_1 = { '&': 'amp', '<': 'lt', '>': 'gt', '"': '#34', '\'': '#39', '`': '#96' }, $er_1 = /[&<>"'`]/g, $ef_1 = function (m) { return "&" + $em_1[m] + ";"; };
    $n = function (v) { return '' + (v == null ? '' : v); };
    $e = function (v) { return $n(v).replace($er_1, $ef_1); };
} if (!$eu) {
    var $um_1 = { '!': '%21', '\'': '%27', '(': '%28', ')': '%29', '*': '%2A' }, $uf_1 = function (m) { return $um_1[m]; }, $uq_1 = /[!')(*]/g;
    $eu = function (v) { return encodeURIComponent($n(v)).replace($uq_1, $uf_1); };
} if (!$eq) {
    var $qr_1 = /[\\'"]/g;
    $eq = function (v) { return $n(v).replace($qr_1, '\\$&'); };
} if (!$i) {
    $i = function (ref, v, k, f) { for (f = ref[$g]; --f;)
        if (ref[k = $g + f] === v)
            return k; ref[k = $g + ref[$g]++] = v; return k; };
} ; var $g = '', $_temp, $p = '', selected = $$.selected, viewId = $$.viewId, list = $$.list, text1 = $$.text1, text2 = $$.text2; var $expr, $art, $line; try {
    $p += '<div mxv mxa="_zs_galleryd~:_" class="_zs_gallery___test___layout_-example"><div mxv mxa="_zs_galleryd~:a" class="_zs_gallery___test___layout_-eg-content"><div mxs="_zs_galleryd~:_" class="mb10"><span class="color-9">使用场景：</span>切换页码的时候保留历史选中项，非实时反馈选中结果</div><div mxa="_zs_galleryd~:b" class="mb20"><span mxs="_zs_galleryd~:a" class="color-9">当前选中单元：</span>';
    $line = 9;
    $art = '=selected';
    ;
    $p += ($expr = '<%=selected%>', $e(selected)) + '</div><div mxv mxa="_zs_galleryd~:c" class="_zs_gallery_mx-tree___test___index_-wrapper"><div mxv mxa="_zs_galleryd~:d" class="_zs_gallery_mx-tree___test___index_-content"><div mxv="selected,list" id="';
    $line = 13;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_tree" mx-view="mx-tree/index?bottomValues=';
    $line = 14;
    $art = '@selected';
    ;
    $p += ($expr = '<%@selected%>', $i($$ref, selected)) + '&list=';
    $line = 15;
    $art = '@list';
    ;
    $p += ($expr = '<%@list%>', $i($$ref, list)) + '&needAll=true"></div></div><div mxs="_zs_galleryd~:b" class="table-pager-wrapper" mx-change="' + $viewId + 'changePager()" mx-view="mx-pagination/index?total=10&size=5&page=1&mini=true&jump=false"></div></div></div><div mxa="_zs_galleryd~:e" class="_zs_gallery___test___layout_-eg-desc"><div mxs="_zs_galleryd~:c" class="_zs_gallery___test___layout_-eg-title">HTML Code</div><div class="_zs_gallery___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=';
    $line = 29;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_1"><span mxa="_zs_galleryd~:f" class="_zs_gallery___test___layout_-desc-tip">';
    $line = 31;
    $art = '!text1';
    ;
    $p += ($expr = '<%!text1%>', $n(text1)) + '</span><i mxs="_zs_galleryd~:d" class="mc-iconfont _zs_gallery___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="';
    $line = 34;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_1">\n&lt;mx-tree id="&#123;&#123;=viewId&#125;&#125;_tree"\n    bottom-values="&#123;&#123;@selected&#125;&#125;"\n    list="&#123;&#123;@list&#125;&#125;"\n    need-all="true"&gt;&lt;/mx-tree&gt;\n\n&lt;mx-pagination class="table-pager-wrapper"\n    total="10" \n    size="5" \n    page="1"\n    mini="true"\n    jump="false"\n    mx-change="changePager()"/&gt;</pre></div><div mxa="_zs_galleryd~:g" class="_zs_gallery___test___layout_-eg-desc"><div mxs="_zs_galleryd~:e" class="_zs_gallery___test___layout_-eg-title">JS Code</div><div class="_zs_gallery___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:2})" mx-view="mx-copy/index?copyNode=';
    $line = 50;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_2"><span mxa="_zs_galleryd~:h" class="_zs_gallery___test___layout_-desc-tip">';
    $line = 52;
    $art = '!text2';
    ;
    $p += ($expr = '<%!text2%>', $n(text2)) + '</span><i mxs="_zs_galleryd~:d" class="mc-iconfont _zs_gallery___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="';
    $line = 55;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_2">\nlet Magix = require(\'magix\');\nlet Vframe = Magix.Vframe;\nlet $ = require(\'$\');\n\nmodule.exports = Magix.View.extend(&#123;\n    tmpl: \'@index.html\',\n    render() &#123;\n        let list1 = [&#123;\n            value: 1,\n            pValue: \'\',\n            text: \'计划1\'\n        &#125;, &#123;\n            value: 2,\n            pValue: \'\',\n            text: \'计划2\'\n        &#125;, &#123;\n            value: 11,\n            pValue: 1,\n            text: \'单元1-1\'\n        &#125;, &#123;\n            value: 12,\n            pValue: 1,\n            text: \'单元1-2\'\n        &#125;, &#123;\n            value: 21,\n            pValue: 2,\n            text: \'单元2-1\'\n        &#125;, &#123;\n            value: 22,\n            pValue: 2,\n            text: \'单元2-2\'\n        &#125;]\n        \n        var list2 = [&#123;\n            value: 3,\n            pValue: \'\',\n            text: \'计划3\'\n        &#125;, &#123;\n            value: 4,\n            pValue: \'\',\n            text: \'计划4\'\n        &#125;, &#123;\n            value: 31,\n            pValue: 3,\n            text: \'单元3-1\'\n        &#125;, &#123;\n            value: 32,\n            pValue: 3,\n            text: \'单元3-2\'\n        &#125;, &#123;\n            value: 41,\n            pValue: 4,\n            text: \'单元4-1\'\n        &#125;, &#123;\n            value: 42,\n            pValue: 4,\n            text: \'单元4-2\'\n        &#125;]\n\n        this.updater.digest(&#123;\n            viewId: this.id,\n            list1,\n            list2,\n            list: $.extend(true, [], list1),\n            results: &#123;&#125;,\n            selected: []\n        &#125;);\n    &#125;,\n    \'changePager&lt;change&gt;\' (e) &#123;\n        let page = e.page;\n\n        let that = this;\n        let data = this.updater.get();\n\n        let tree = Vframe.get(that.id + \'_tree\');\n        let result = tree.invoke(\'getBottomValues\');\n        \n        // 缓存已选中的节点，下次页面切换时依然选中原先选中的\n        let results = data.results || &#123;&#125;;\n        results[page] = result;\n        let selected = [];\n        for(var p in results)&#123;\n            selected = selected.concat(results[p]);\n        &#125;\n\n        // 更新list\n        let list = $.extend(true, [], data[\'list\' + page]);\n        this.updater.digest(&#123;\n            list: list,\n            selected\n        &#125;)\n    &#125;\n&#125;);</pre></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-tree/__test__/1.html';
    throw msg;
} return $p; },
    render: function () {
        var list1 = [{
                value: 1,
                pValue: '',
                text: '计划1'
            }, {
                value: 2,
                pValue: '',
                text: '计划2'
            }, {
                value: 11,
                pValue: 1,
                text: '单元1-1'
            }, {
                value: 12,
                pValue: 1,
                text: '单元1-2'
            }, {
                value: 21,
                pValue: 2,
                text: '单元2-1'
            }, {
                value: 22,
                pValue: 2,
                text: '单元2-2'
            }];
        var list2 = [{
                value: 3,
                pValue: '',
                text: '计划3'
            }, {
                value: 4,
                pValue: '',
                text: '计划4'
            }, {
                value: 31,
                pValue: 3,
                text: '单元3-1'
            }, {
                value: 32,
                pValue: 3,
                text: '单元3-2'
            }, {
                value: 41,
                pValue: 4,
                text: '单元4-1'
            }, {
                value: 42,
                pValue: 4,
                text: '单元4-2'
            }];
        this.updater.digest({
            list1: list1,
            list2: list2,
            list: $.extend(true, [], list1),
            results: {},
            selected: []
        });
    },
    'changePager<change>': function (e) {
        var page = e.page;
        var that = this;
        var data = this.updater.get();
        var tree = Vframe.get(that.id + '_tree');
        var result = tree.invoke('getBottomValues');
        // 缓存已选中的节点，下次页面切换时依然选中原先选中的
        var results = data.results || {};
        results[page] = result;
        var selected = [];
        for (var p in results) {
            selected = selected.concat(results[p]);
        }
        // 更新list
        var list = $.extend(true, [], data['list' + page]);
        this.updater.digest({
            list: list,
            selected: selected
        });
    }
});

});