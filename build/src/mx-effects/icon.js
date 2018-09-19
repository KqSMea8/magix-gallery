/*
    generate by magix-combine@3.11.21: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-effects/icon",["magix","$"],(require,exports,module)=>{
/*Magix,$*/

var Magix = require("magix");
var $ = require("$");
Magix.applyStyle("_zs_gallery_mx-effects_icon_","/* @dependent: ./index.less */\n._zs_gallery_mx-effects_icon_-shadow {\n  box-shadow: 0 2px 4px rgba(51, 51, 51, 0.08);\n  border: 1px solid #eee;\n}\n._zs_gallery_mx-effects_icon_-mask {\n  background-color: rgba(33, 33, 33, 0.72);\n}\n/*用于覆盖bp的品牌色信息*/\n/*实心打标icon*/\n._zs_gallery_mx-effects_icon_-solid-icon {\n  display: inline-block;\n  height: 20px;\n  padding: 0 6px;\n  border-radius: 4px;\n  font-size: 12px;\n  color: #fff;\n  text-align: center;\n  line-height: 20px;\n  font-weight: bold;\n}\n._zs_gallery_mx-effects_icon_-solid-icon._zs_gallery_mx-effects_icon_-common {\n  background-color: #ccc;\n}\n._zs_gallery_mx-effects_icon_-solid-icon._zs_gallery_mx-effects_icon_-error {\n  background-color: #a40100;\n}\n._zs_gallery_mx-effects_icon_-solid-icon._zs_gallery_mx-effects_icon_-warn {\n  background-color: #ffb400;\n}\n._zs_gallery_mx-effects_icon_-solid-icon._zs_gallery_mx-effects_icon_-highlight {\n  background-color: #4d7fff;\n}\n/*空心打标*/\n._zs_gallery_mx-effects_icon_-hollow-icon {\n  display: inline-block;\n  height: 18px;\n  padding: 0 6px;\n  border-radius: 9px;\n  font-size: 12px;\n  text-align: center;\n  font-weight: bold;\n  line-height: 16px;\n}\n._zs_gallery_mx-effects_icon_-hollow-icon._zs_gallery_mx-effects_icon_-common {\n  border: 1px solid #ccc;\n  color: #999;\n}\n._zs_gallery_mx-effects_icon_-hollow-icon._zs_gallery_mx-effects_icon_-error {\n  border: 1px solid #a40100;\n  color: #a40100;\n}\n._zs_gallery_mx-effects_icon_-hollow-icon._zs_gallery_mx-effects_icon_-warn {\n  border: 1px solid #ffb400;\n  color: #ffb400;\n}\n._zs_gallery_mx-effects_icon_-hollow-icon._zs_gallery_mx-effects_icon_-highlight {\n  border: 1px solid #4d7fff;\n  color: #4d7fff;\n}\n");
var ClassNames = {
    solid: '_zs_gallery_mx-effects_icon_-solid-icon',
    hollow: '_zs_gallery_mx-effects_icon_-hollow-icon',
    common: '_zs_gallery_mx-effects_icon_-common',
    error: '_zs_gallery_mx-effects_icon_-error',
    warn: '_zs_gallery_mx-effects_icon_-warn',
    highlight: '_zs_gallery_mx-effects_icon_-highlight'
};
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
} ; var $g = '', $_temp, $p = '', classNames = $$.classNames, styles = $$.styles, content = $$.content; var $expr, $art, $line; try {
    $p += '<span class="';
    $line = 1;
    $art = '=classNames';
    ;
    $p += ($expr = '<%=classNames%>', $e(classNames)) + '" style="';
    $line = 1;
    $art = '=styles';
    ;
    $p += ($expr = '<%=styles%>', $e(styles)) + '">';
    $line = 1;
    $art = '=content';
    ;
    $p += ($expr = '<%=content%>', $e(content)) + '</span>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-effects/icon.html';
    throw msg;
} return $p; },
    init: function (extra) {
        // 如果用户自定义了色值以自定义色值为准
        var color = extra.color, styles = [], mode = extra.mode || 'solid', type = extra.type || 'common';
        var classNames = [];
        if (ClassNames[mode]) {
            classNames.push(ClassNames[mode]);
        }
        if (ClassNames[type]) {
            classNames.push(ClassNames[type]);
        }
        // 自定义颜色
        if (color) {
            switch (mode) {
                case 'solid':
                    styles.push('background-color:' + color);
                    break;
                case 'hollow':
                    styles.push('color:' + color, 'border: 1px solid ' + color);
                    break;
            }
        }
        this.updater.set({
            content: extra.content || 'icon',
            classNames: classNames.join(' '),
            styles: styles.join(';')
        });
    },
    render: function () {
        this.updater.digest();
    }
});

});