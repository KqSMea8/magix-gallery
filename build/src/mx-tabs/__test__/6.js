/*
    generate by magix-combine@3.11.26: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-tabs/__test__/6",["magix","__test__/example","$","../box","mx-copy/index","__test__/hl"],(require,exports,module)=>{
/*Magix,Base,$*/
require("../box");
require("mx-copy/index");
require("__test__/hl");
var Magix = require("magix");
var Base = require("__test__/example");
var $ = require("$");
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
} ; var $g = '', $_temp, $p = '', viewId = $$.viewId, text1 = $$.text1; var $expr, $art, $line; try {
    $p += '<div mxa="_zs_galleryd#:_" class="_zs_gallery___test___layout_-example"><div mxs="_zs_galleryd#:_" class="_zs_gallery___test___layout_-eg-content"><div class="mb10"><div mx-view="mx-tabs/box?disabled=true&list=%5B%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20text%3A%20%27%E6%A8%A1%E5%9D%971%27%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20value%3A%201%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20text%3A%20%27%E6%A8%A1%E5%9D%972%27%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20value%3A%202%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%5D"></div></div><div mx-view="mx-tabs/box?mode=hollow&disabled=true&list=%5B%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20text%3A%20%27%E6%A8%A1%E5%9D%971%27%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20value%3A%201%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20text%3A%20%27%E6%A8%A1%E5%9D%972%27%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20value%3A%202%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%5D"></div></div><div mxa="_zs_galleryd#:a" class="_zs_gallery___test___layout_-eg-desc"><div mxs="_zs_galleryd#:a" class="_zs_gallery___test___layout_-eg-title">可直接传数组 + 禁用</div><div class="_zs_gallery___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=';
    $line = 28;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_1"><span mxa="_zs_galleryd#:b" class="_zs_gallery___test___layout_-desc-tip">';
    $line = 30;
    $art = '!text1';
    ;
    $p += ($expr = '<%!text1%>', $n(text1)) + '</span><i mxs="_zs_galleryd#:b" class="mc-iconfont _zs_gallery___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="';
    $line = 33;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_1">\n&lt;mx-tabs.box\n    disabled="true"\n    list="[&#123;\n        text: \'模块1\',\n        value: 1\n    &#125;,&#123;\n        text: \'模块2\',\n        value: 2\n    &#125;]"/&gt;</pre></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-tabs/__test__/6.html';
    throw msg;
} return $p; },
    render: function () {
        this.updater.digest();
    }
});

});