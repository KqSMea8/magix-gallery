/*
    generate by magix-combine@3.11.26: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-slider/__test__/8",["magix","__test__/example","$","../range","mx-copy/index","__test__/hl"],(require,exports,module)=>{
/*Magix,Base,$*/
require("../range");
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
} ; var $g = '', $_temp, $p = '', start = $$.start, end = $$.end, viewId = $$.viewId, text1 = $$.text1, text2 = $$.text2; var $expr, $art, $line; try {
    $p += '<div mxa="_zs_galleryc|:_" class="_zs_gallery___test___layout_-example"><div mxa="_zs_galleryc|:a" class="_zs_gallery___test___layout_-eg-content"><div mxa="_zs_galleryc|:b" class="mb20"><span mxs="_zs_galleryc|:_" class="color-9">开始值：</span><span mxa="_zs_galleryc|:c" class="mr20">';
    $line = 5;
    $art = '=start';
    ;
    $p += ($expr = '<%=start%>', $e(start)) + '</span><span mxs="_zs_galleryc|:a" class="color-9">结束值：</span><span>';
    $line = 7;
    $art = '=end';
    ;
    $p += ($expr = '<%=end%>', $e(end)) + '</span></div><div mxa="_zs_galleryc|:d" class="pt20 pb20"><div mx-change="' + $viewId + 'showValue()" mx-view="mx-slider/range?max=200&min=100&value=';
    $line = 13;
    $art = '=start';
    ;
    $p += ($expr = '<%!$eu(start)%>', $eu(start)) + '%2C';
    $line = 13;
    $art = '=end';
    ;
    $p += ($expr = '<%!$eu(end)%>', $eu(end)) + '&step=0.05"></div></div></div><div mxa="_zs_galleryc|:e" class="_zs_gallery___test___layout_-eg-desc"><div mxs="_zs_galleryc|:b" class="_zs_gallery___test___layout_-eg-title">HTML Code</div><div class="_zs_gallery___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=';
    $line = 20;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_1"><span mxa="_zs_galleryc|:f" class="_zs_gallery___test___layout_-desc-tip">';
    $line = 22;
    $art = '!text1';
    ;
    $p += ($expr = '<%!text1%>', $n(text1)) + '</span><i mxs="_zs_galleryc|:c" class="mc-iconfont _zs_gallery___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="';
    $line = 25;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_1">\n&lt;mx-slider.range\n    max="200"\n    min="100"\n    value="&#123;&#123;=start&#125;&#125;,&#123;&#123;=end&#125;&#125;"\n    step="0.05"\n    mx-change="showValue()"/&gt;</pre></div><div mxa="_zs_galleryc|:g" class="_zs_gallery___test___layout_-eg-desc"><div mxs="_zs_galleryc|:d" class="_zs_gallery___test___layout_-eg-title">JS Code</div><div class="_zs_gallery___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:2})" mx-view="mx-copy/index?copyNode=';
    $line = 35;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_2"><span mxa="_zs_galleryc|:h" class="_zs_gallery___test___layout_-desc-tip">';
    $line = 37;
    $art = '!text2';
    ;
    $p += ($expr = '<%!text2%>', $n(text2)) + '</span><i mxs="_zs_galleryc|:c" class="mc-iconfont _zs_gallery___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="';
    $line = 40;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_2">\nlet Magix = require(\'magix\');\nlet $ = require(\'$\');\n\nmodule.exports = Magix.View.extend(&#123;\n    tmpl: \'@index.html\',\n    render() &#123;\n        this.updater.digest(&#123;\n            start: 110,\n            end: 150\n        &#125;);\n    &#125;,\n    \'showValue&lt;change&gt;\' (e) &#123;\n        // 操作结束的时候返回\n        // e.value [array] [min, max]\n        let v = e.value;\n        this.updater.digest(&#123;\n            start: v[0],\n            end: v[1]\n        &#125;)\n    &#125;\n&#125;);</pre></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-slider/__test__/8.html';
    throw msg;
} return $p; },
    render: function () {
        this.updater.digest({
            start: 110,
            end: 150
        });
    },
    'showValue<change>': function (e) {
        // 操作结束的时候返回
        // e.value [array] [min, max]
        var v = e.value;
        this.updater.digest({
            start: v[0],
            end: v[1]
        });
    }
});

});