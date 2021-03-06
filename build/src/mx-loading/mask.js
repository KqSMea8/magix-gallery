/*
    generate by magix-combine@3.11.26: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-loading/mask",["$","magix","./base"],(require,exports,module)=>{
/*$,Magix,Base*/

var $ = require("$");
var Magix = require("magix");
Magix.applyStyle("_zs_gallery_mx-loading_index_","/* @dependent: ./index.less */\n._zs_gallery_mx-loading_index_-mx-shadow {\n  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.08);\n  border: 1px solid #f5f5f6;\n}\n/*用于覆盖bp的品牌色信息*/\n._zs_gallery_mx-loading_index_-mask-loading {\n  display: none;\n  position: fixed;\n  z-index: 999999;\n  background-color: rgba(0, 0, 0, 0.5);\n  border-radius: 4px;\n}\n._zs_gallery_mx-loading_index_-mask-loading-backdrop {\n  display: none;\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 999998;\n  width: 100%;\n  height: 100%;\n  background: transparent;\n}\n._zs_gallery_mx-loading_index_-full-loading {\n  display: none;\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 999999;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.5);\n}\n._zs_gallery_mx-loading_index_-full-loading ._zs_gallery_mx-loading_index_-loading-overwite {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 160px;\n  height: 36px;\n  margin-top: -18px;\n  margin-left: -80px;\n}\n");
var Tmpl = function ($$, $viewId, $$ref, $e, $n, $eu, $i, $eq) { if (!$$ref)
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
} ; var $g = '', $_temp, $p = '', id = $$.id; var $expr, $art, $line; try {
    $p += '<div id="';
    $line = 1;
    $art = '=id';
    ;
    $p += ($expr = '<%=id%>', $e(id)) + '" class="_zs_gallery_mx-loading_index_-full-loading"><div mxs="_zs_galleryb`:_" class="loading _zs_gallery_mx-loading_index_-loading-overwite" style="padding: 10px 0;"><span class="loading-anim"></span></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-loading/mask.html';
    throw msg;
} return $p; };
var Base = require("./base");
module.exports = Magix.mix({
    '@{loading.build}': function () {
        var me = this;
        var maskId = me.id + '_loading';
        var node = $('#' + maskId);
        if (!node.length) {
            var tmpl = $.isFunction(Tmpl) ? Tmpl({
                id: maskId
            }, me.id) : Tmpl;
            $(document.body).append(tmpl);
            node = $('#' + maskId);
        }
        return node;
    },
    showLoading: function () {
        var me = this;
        var node = me['@{loading.build}']();
        node.show();
    }
}, Base);

});