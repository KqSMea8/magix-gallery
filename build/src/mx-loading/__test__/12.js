/*
    generate by magix-combine@3.11.26: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-loading/__test__/12",["magix","__test__/example","$","mx-copy/index","__test__/hl"],(require,exports,module)=>{
/*Magix,Base,$*/
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
    $p += '<div mxa="_zs_galleryb*:_" class="_zs_gallery___test___layout_-example"><div mxs="_zs_galleryb*:_" class="_zs_gallery___test___layout_-eg-content clearfix"><div class="loading" style="padding: 150px 0;"><span class="loading-anim"></span></div><div class="loading" style="padding: 150px 0;"><span class="loading-anim"></span></div><div class="loading" style="padding: 150px 0;"><span class="loading-anim"></span></div><div class="loading" style="padding: 150px 0;"><span class="loading-anim"></span></div></div><div mxa="_zs_galleryb*:a" class="_zs_gallery___test___layout_-eg-desc"><div mxs="_zs_galleryb*:a" class="_zs_gallery___test___layout_-eg-title">HTML Code</div><div class="_zs_gallery___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=';
    $line = 10;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_1"><span mxa="_zs_galleryb*:b" class="_zs_gallery___test___layout_-desc-tip">';
    $line = 12;
    $art = '!text1';
    ;
    $p += ($expr = '<%!text1%>', $n(text1)) + '</span><i mxs="_zs_galleryb*:b" class="mc-iconfont _zs_gallery___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="';
    $line = 15;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_1">\n&lt;!-- 默认 --&gt;\n&lt;mx-loading.anim /&gt;\n\n&lt;!-- 品牌色 --&gt;\n&lt;mx-loading.anim mode="circle-spinner" type="brand" /&gt;\n\n&lt;!-- 自定义尺寸 --&gt;\n&lt;mx-loading.anim mode="circle-spinner" size="40" /&gt;\n\n&lt;!-- 自定义颜色 --&gt;\n&lt;mx-loading.anim mode="circle-spinner" size="40" color="#51a300" /&gt;</pre></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-loading/__test__/12.html';
    throw msg;
} return $p; },
    render: function () {
        this.updater.digest();
    }
});

});