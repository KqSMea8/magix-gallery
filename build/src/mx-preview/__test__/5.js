/*
    generate by magix-combine@3.11.26: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-preview/__test__/5",["magix","__test__/example","$","../index","mx-copy/index","__test__/hl"],(require,exports,module)=>{
/*Magix,Base,$*/
require("../index");
require("mx-copy/index");
require("__test__/hl");
var Magix = require("magix");
var Base = require("__test__/example");
var $ = require("$");
Magix.applyStyle("_zs_gallery_mx-preview___test___index_","/* @dependent: ./index.less */\n._zs_gallery_mx-preview___test___index_-mx-shadow {\n  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.08);\n  border: 1px solid #f5f5f6;\n}\n/*用于覆盖bp的品牌色信息*/\n._zs_gallery_mx-preview___test___index_-demo {\n  margin-right: 20px;\n  margin-bottom: 20px;\n  border: 1px solid #e6e6e6;\n  background-color: #fafafa;\n}\n._zs_gallery_mx-preview___test___index_-scroll {\n  width: 400px;\n  height: 220px;\n  padding: 10px;\n  border-radius: 4px;\n  overflow-y: auto;\n  border: 1px solid #e6e6e6;\n}\n");
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
    $p += '<div mxa="_zs_galleryc0:_" class="_zs_gallery___test___layout_-example"><div mxs="_zs_galleryc0:_" class="_zs_gallery___test___layout_-eg-content"><div class="_zs_gallery_mx-preview___test___index_-demo" mx-view="mx-preview/index?format=23&datuUrl=%2F%2Fimg.alicdn.com%2Fsimba%2Fimg%2FTB1HcdJr49YBuNjy0Ffwu0IsVXa.png&xiaotuUrl=%2F%2Fimg.alicdn.com%2Fsimba%2Fimg%2FTB1pJkOrGSWBuNjSsrbwu10mVXa.png&clickUrl=%2F%2Fa1.alicdn.com%2Fcreation%2Fhtml%2F2017%2F06%2F13%2Fcreation-2480Wzuixl78VWkc-10131895.html&width=190&height=43&maxWidth=100&maxHeight=100"></div></div><div mxa="_zs_galleryc0:a" class="_zs_gallery___test___layout_-eg-desc"><div mxs="_zs_galleryc0:a" class="_zs_gallery___test___layout_-eg-title">套图（业务场景大小图）预览</div><div class="_zs_gallery___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=';
    $line = 15;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_1"><span mxa="_zs_galleryc0:b" class="_zs_gallery___test___layout_-desc-tip">';
    $line = 17;
    $art = '!text1';
    ;
    $p += ($expr = '<%!text1%>', $n(text1)) + '</span><i mxs="_zs_galleryc0:b" class="mc-iconfont _zs_gallery___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="';
    $line = 20;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_1">\n&lt;mx-preview class="demo"\n    format="23"\n    datu-url="//img.alicdn.com/simba/img/TB1HcdJr49YBuNjy0Ffwu0IsVXa.png"\n    xiaotu-url="//img.alicdn.com/simba/img/TB1pJkOrGSWBuNjSsrbwu10mVXa.png"\n    click-url="//a1.alicdn.com/creation/html/2017/06/13/creation-2480Wzuixl78VWkc-10131895.html"\n    width="190"\n    height="43"\n    max-width="100"\n    max-height="100"/&gt;</pre></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-preview/__test__/5.html';
    throw msg;
} return $p; },
    render: function () {
        this.updater.digest();
    }
});

});