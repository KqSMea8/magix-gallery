/*
    generate by magix-combine@3.11.21: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-popmenu/content",["magix"],(require,exports,module)=>{
/*Magix*/

var Magix = require("magix");
Magix.applyStyle("_zs_gallery_mx-popmenu_content_","/* @dependent: ./index.less */\n._zs_gallery_mx-popmenu_content_-mx-shadow {\n  box-shadow: 0 2px 4px rgba(51, 51, 51, 0.08);\n  border: 1px solid #eee;\n}\n/*用于覆盖bp的品牌色信息*/\n._zs_gallery_mx-popmenu_content_-menu {\n  padding: 8px 10px;\n  overflow: auto;\n}\n._zs_gallery_mx-popmenu_content_-menu ._zs_gallery_mx-popmenu_content_-item {\n  padding: 2px 0;\n}\n._zs_gallery_mx-popmenu_content_-menu ._zs_gallery_mx-popmenu_content_-item ._zs_gallery_mx-popmenu_content_-item-link {\n  display: block;\n  width: 100%;\n  padding: 0 8px;\n  cursor: pointer;\n  height: 26px;\n  line-height: 26px;\n  border-radius: 4px;\n  transition: all 0.25s;\n}\n._zs_gallery_mx-popmenu_content_-menu ._zs_gallery_mx-popmenu_content_-item ._zs_gallery_mx-popmenu_content_-item-link:hover {\n  background-color: #f0f0f0;\n}\n._zs_gallery_mx-popmenu_content_-menu ._zs_gallery_mx-popmenu_content_-item ._zs_gallery_mx-popmenu_content_-item-link._zs_gallery_mx-popmenu_content_-active,\n._zs_gallery_mx-popmenu_content_-menu ._zs_gallery_mx-popmenu_content_-item ._zs_gallery_mx-popmenu_content_-item-link._zs_gallery_mx-popmenu_content_-active:hover,\n._zs_gallery_mx-popmenu_content_-menu ._zs_gallery_mx-popmenu_content_-item ._zs_gallery_mx-popmenu_content_-item-link._zs_gallery_mx-popmenu_content_-active:active,\n._zs_gallery_mx-popmenu_content_-menu ._zs_gallery_mx-popmenu_content_-item ._zs_gallery_mx-popmenu_content_-item-link._zs_gallery_mx-popmenu_content_-active:focus {\n  color: #4d7fff;\n  background-color: #f6f9ff;\n}\n");
module.exports = Magix.View.extend({
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
} ; var $g = '', $_temp, $p = '', menus = $$.menus; var $expr, $art, $line; try {
    $p += '<div mxa="_zs_galleryce:_" class="_zs_gallery_mx-popmenu_content_-menu">';
    $line = 2;
    $art = 'each menus as item';
    ;
    $expr = '<%for (var $art_ihrbxalleys$art_i = 0, $art_cojaijagqk$art_c = menus.length; $art_ihrbxalleys$art_i < $art_cojaijagqk$art_c; $art_ihrbxalleys$art_i++) {    var item = menus[$art_ihrbxalleys$art_i]%>';
    for (var $art_ihrbxalleys$art_i = 0, $art_cojaijagqk$art_c = menus.length; $art_ihrbxalleys$art_i < $art_cojaijagqk$art_c; $art_ihrbxalleys$art_i++) {
        var item = menus[$art_ihrbxalleys$art_i];
        $p += '<div mxa="_zs_galleryce:a" class="_zs_gallery_mx-popmenu_content_-item"><span class="_zs_gallery_mx-popmenu_content_-item-link ellipsis" mx-click="' + $viewId + 'submit({value:';
        $line = 5;
        $art = '=item.value';
        ;
        $p += ($expr = '<%=item.value%>', $e(item.value)) + '})">';
        $line = 6;
        $art = '=item.text';
        ;
        $p += ($expr = '<%=item.text%>', $e(item.text)) + '</span></div>';
        $line = 9;
        $art = '/each';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += '</div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-popmenu/content.html';
    throw msg;
} return $p; },
    init: function (e) {
        this.viewOptions = e;
        var data = e.data || {};
        this.updater.set({
            menus: data.menus
        });
    },
    render: function () {
        this.updater.digest({});
    },
    'submit<click>': function (e) {
        var viewOptions = this.viewOptions;
        if (viewOptions.submit) {
            viewOptions.submit(e.params.value);
        }
    }
});

});