/*
    generate by magix-combine@3.11.26: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-style/__test__/3",["magix","__test__/example","$","mx-copy/index","__test__/hl"],(require,exports,module)=>{
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
    $p += '<div mxv mxa="_zs_gallerydg:_" class="_zs_gallery___test___layout_-example"><div mxv mxa="_zs_gallerydg:a" class="_zs_gallery___test___layout_-eg-content"><div mxv mxa="_zs_gallerydg:b" class="mb20"><span mxs="_zs_gallerydg:_" class="color-9 mr10">动效：</span><label mxv mxa="_zs_gallerydg:c" class="mr20"><input mxs="_zs_gallerydg:a" type="checkbox" class="anim-checkbox" name="cb2" value="1" checked="true"/> 选中</label><label mxv mxa="_zs_gallerydg:d" class="mr20"><input mxs="_zs_gallerydg:b" type="checkbox" class="anim-checkbox" name="cb2" value="2" checked="true" disabled="true"/> 选中禁止选择</label><label mxv mxa="_zs_gallerydg:e" class="mr20"><input mxs="_zs_gallerydg:c" type="checkbox" class="anim-checkbox" name="cb2" value="3"/> 未选中</label><label mxv><input mxs="_zs_gallerydg:d" type="checkbox" class="anim-checkbox" name="cb2" value="4" disabled="true"/> 未选中禁止选择</label></div><div mxv><span mxs="_zs_gallerydg:e" class="color-9 mr10">普通：</span><label mxv mxa="_zs_gallerydg:f" class="mr20"><input mxs="_zs_gallerydg:f" type="checkbox" name="cb1" value="1" checked="true"/> 选中</label><label mxv mxa="_zs_gallerydg:g" class="mr20"><input mxs="_zs_gallerydg:g" type="checkbox" name="cb1" value="2" checked="true" disabled="true"/> 选中禁止选择</label><label mxv mxa="_zs_gallerydg:h" class="mr20"><input mxs="_zs_gallerydg:h" type="checkbox" name="cb1" value="3"/> 未选中</label><label mxv><input mxs="_zs_gallerydg:i" type="checkbox" name="cb1" value="4" disabled="true"/> 未选中禁止选择</label></div></div><div mxa="_zs_gallerydg:i" class="_zs_gallery___test___layout_-eg-desc"><div mxs="_zs_gallerydg:j" class="_zs_gallery___test___layout_-eg-title">Checkbox</div><div class="_zs_gallery___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=';
    $line = 44;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_1"><span mxa="_zs_gallerydg:j" class="_zs_gallery___test___layout_-desc-tip">';
    $line = 46;
    $art = '!text1';
    ;
    $p += ($expr = '<%!text1%>', $n(text1)) + '</span><i mxs="_zs_gallerydg:k" class="mc-iconfont _zs_gallery___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="';
    $line = 49;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_1">\n&lt;label class="mr20"&gt;\n    &lt;input type="checkbox" class="anim-checkbox" \n        name="cb2" value="2" checked="true" /&gt;\n    动效加className（anim-checkbox）\n&lt;/label&gt;\n\n&lt;label class="mr20"&gt;\n    &lt;input type="checkbox"\n        name="cb1" value="1" checked="true" /&gt;\n    普通无动效\n&lt;/label&gt;</pre></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-style/__test__/3.html';
    throw msg;
} return $p; },
    render: function () {
        this.updater.digest();
    }
});

});