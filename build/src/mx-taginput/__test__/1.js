/*
    generate by magix-combine@3.11.10: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-taginput/__test__/1",["magix","__test__/example","$","../index","mx-copy/index","__test__/hl"],(require,exports,module)=>{
/*Magix,Base,$*/
require("../index");
require("mx-copy/index");
require("__test__/hl");
var Magix = require("magix");
var Base = require("__test__/example");
var $ = require("$");
module.exports = Base.extend({
    tmpl: function ($$, $viewId, $$ref) { if (!$$ref)
    $$ref = $$; var $g = '', $_temp, $p = '', $em = { '&': 'amp', '<': 'lt', '>': 'gt', '"': '#34', '\'': '#39', '`': '#96' }, $er = /[&<>"'`]/g, $n = function (v) { return '' + (v == null ? '' : v); }, $ef = function (m) { return "&" + $em[m] + ";"; }, $e = function (v) { return $n(v).replace($er, $ef); }, $um = { '!': '%21', '\'': '%27', '(': '%28', ')': '%29', '*': '%2A' }, $uf = function (m) { return $um[m]; }, $uq = /[!')(*]/g, $eu = function (v) { return encodeURIComponent($n(v)).replace($uq, $uf); }, $qr = /[\\'"]/g, $eq = function (v) { return $n(v).replace($qr, '\\$&'); }, $i = function (v, k, f) { for (f = $$ref[$g]; --f;)
    if ($$ref[k = $g + f] === v)
        return k; $$ref[k = $g + $$ref[$g]++] = v; return k; }, selected = $$.selected, viewId = $$.viewId, list = $$.list, text1 = $$.text1, text2 = $$.text2; var $expr, $art, $line; try {
    $p += '<div mxv mxa="_zs_gallerycm:_" class="_zs_gallery___test___base_-example"><div mxv mxa="_zs_gallerycm:a" class="_zs_gallery___test___base_-eg-content"><div mxs="_zs_gallerycm:_" class="mb10 clearfix"><div class="color-9 fl lh22">以下示例：</div><div class="fl lh22"><div>支持上下键切换，回车选择</div><div>支持键盘delete键删除</div><div>支持输入关键词搜索</div></div></div><div mxa="_zs_gallerycm:b" class="mb20"><a mxs="_zs_gallerycm:a" href="javascript:;" class="btn btn-brand mr20" mx-click="' + $viewId + 'get()">获取选中值</a><span mxs="_zs_gallerycm:b" class="color-9">当前选择：</span><span>';
    $line = 14;
    $art = '=selected';
    ;
    $p += '' + ($expr = '<%=selected%>', $e(selected)) + '</span></div><div mxv mxa="_zs_gallerycm:c" class="mb20"><div mxv="list" id="';
    $line = 17;
    $art = '=viewId';
    ;
    $p += '' + ($expr = '<%=viewId%>', $e(viewId)) + '_taginput" mx-view="mx-taginput/index?list=';
    $line = 18;
    $art = '@list';
    ;
    $p += '' + ($expr = '<%@list%>', $i(list)) + '&selected=';
    $line = 19;
    $art = '=selected';
    ;
    $p += '' + ($expr = '<%!$eu(selected)%>', $eu(selected)) + '&placeholder=%E8%AF%B7%E9%80%89%E6%8B%A9%E9%9C%80%E8%A6%81%E7%9A%84%E5%80%BC"></div></div></div><div mxa="_zs_gallerycm:d" class="_zs_gallery___test___base_-eg-desc"><div mxs="_zs_gallerycm:c" class="_zs_gallery___test___base_-eg-title">HTML Code</div><div class="_zs_gallery___test___base_-desc-oper" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=';
    $line = 25;
    $art = '=viewId';
    ;
    $p += '' + ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_1"><span mxa="_zs_gallerycm:e" class="_zs_gallery___test___base_-desc-tip">';
    $line = 27;
    $art = '!text1';
    ;
    $p += '' + ($expr = '<%!text1%>', $n(text1)) + '</span><i mxs="_zs_gallerycm:d" class="mc-iconfont _zs_gallery___test___base_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="';
    $line = 30;
    $art = '=viewId';
    ;
    $p += '' + ($expr = '<%=viewId%>', $e(viewId)) + '_text_1">\n&lt;mx-taginput id="&#123;&#123;=viewId&#125;&#125;_taginput"\n    list="&#123;&#123;@list&#125;&#125;"\n    selected="&#123;&#123;=selected&#125;&#125;"\n    placeholder="请选择需要的值"/&gt;</pre></div><div mxa="_zs_gallerycm:f" class="_zs_gallery___test___base_-eg-desc"><div mxs="_zs_gallerycm:e" class="_zs_gallery___test___base_-eg-title">JS Code</div><div class="_zs_gallery___test___base_-desc-oper" mx-success="' + $viewId + 'done({id:2})" mx-view="mx-copy/index?copyNode=';
    $line = 38;
    $art = '=viewId';
    ;
    $p += '' + ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_2"><span mxa="_zs_gallerycm:g" class="_zs_gallery___test___base_-desc-tip">';
    $line = 40;
    $art = '!text2';
    ;
    $p += '' + ($expr = '<%!text2%>', $n(text2)) + '</span><i mxs="_zs_gallerycm:d" class="mc-iconfont _zs_gallery___test___base_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="';
    $line = 43;
    $art = '=viewId';
    ;
    $p += '' + ($expr = '<%=viewId%>', $e(viewId)) + '_text_2">\nlet Magix = require(\'magix\');\nlet $ = require(\'$\');\n\nmodule.exports = Magix.View.extend(&#123;\n    tmpl: \'@index.html\',\n    render() &#123;\n        let list = [];\n        for (let index = 0; index &lt; 5; index++) &#123;\n            list.push(&#123;\n                text: \'test\' + index,\n                value: index\n            &#125;)\n        &#125;\n        this.updater.digest(&#123;\n            viewId: this.id,\n            list,\n            selected: \'1,2\'\n        &#125;);\n    &#125;,\n    \'get&lt;click&gt;\'()&#123;\n        let node = $(\'#\' + this.id + \'_taginput\');\n        this.updater.digest(&#123;\n            selected: node.val()\n        &#125;)\n    &#125;\n&#125;);</pre></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-taginput/__test__/1.html';
    throw msg;
} return $p; },
    render: function () {
        var list = [];
        for (var index = 0; index < 5; index++) {
            list.push({
                text: 'test' + index,
                value: index
            });
        }
        this.updater.digest({
            viewId: this.id,
            list: list,
            selected: '1,2'
        });
    },
    'get<click>': function () {
        var node = $('#' + this.id + '_taginput');
        this.updater.digest({
            selected: node.val()
        });
    }
});

});