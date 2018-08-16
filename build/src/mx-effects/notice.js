/*
    generate by magix-combine@3.11.10: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-effects/notice",["magix","$"],(require,exports,module)=>{
/*Magix,$*/

var Magix = require("magix");
var $ = require("$");
Magix.applyStyle("_zs_gallery_mx-effects_notice_","/* @dependent: ./index.less */\n._zs_gallery_mx-effects_notice_-shadow {\n  box-shadow: 0 2px 4px rgba(51, 51, 51, 0.08);\n  border: 1px solid #eee;\n}\n._zs_gallery_mx-effects_notice_-mask {\n  background-color: rgba(33, 33, 33, 0.72);\n}\n/*用于覆盖bp的品牌色信息*/\n._zs_gallery_mx-effects_notice_-notice {\n  padding: 10px;\n  background-color: #fafafa;\n  color: #999;\n  line-height: 18px;\n}\n._zs_gallery_mx-effects_notice_-notice ._zs_gallery_mx-effects_notice_-inner {\n  position: relative;\n  padding-left: 20px;\n}\n._zs_gallery_mx-effects_notice_-notice ._zs_gallery_mx-effects_notice_-inner ._zs_gallery_mx-effects_notice_-icon {\n  position: absolute;\n  top: -2px;\n  left: 0;\n  height: 18px;\n  line-height: 18px;\n}\n._zs_gallery_mx-effects_notice_-notice._zs_gallery_mx-effects_notice_-border {\n  border-width: 1px;\n  border-style: solid;\n  border-color: #e6e6e6;\n  border-radius: 4px;\n}\n._zs_gallery_mx-effects_notice_-notice._zs_gallery_mx-effects_notice_-error {\n  color: #a40100;\n  background-color: #f1d9d9;\n}\n._zs_gallery_mx-effects_notice_-notice._zs_gallery_mx-effects_notice_-error ._zs_gallery_mx-effects_notice_-icon {\n  color: #a40100;\n}\n._zs_gallery_mx-effects_notice_-notice._zs_gallery_mx-effects_notice_-error._zs_gallery_mx-effects_notice_-border {\n  border-color: #a40100;\n}\n._zs_gallery_mx-effects_notice_-notice._zs_gallery_mx-effects_notice_-warn {\n  color: #ffb400;\n  background-color: #fff8e6;\n}\n._zs_gallery_mx-effects_notice_-notice._zs_gallery_mx-effects_notice_-warn ._zs_gallery_mx-effects_notice_-icon {\n  color: #ffb400;\n}\n._zs_gallery_mx-effects_notice_-notice._zs_gallery_mx-effects_notice_-warn._zs_gallery_mx-effects_notice_-border {\n  border-color: #ffb400;\n}\n._zs_gallery_mx-effects_notice_-notice._zs_gallery_mx-effects_notice_-highlight {\n  color: #333;\n}\n._zs_gallery_mx-effects_notice_-notice._zs_gallery_mx-effects_notice_-highlight ._zs_gallery_mx-effects_notice_-icon {\n  color: #4d7fff;\n}\n");
var ClassNames = {
    error: '_zs_gallery_mx-effects_notice_-error',
    warn: '_zs_gallery_mx-effects_notice_-warn',
    highlight: '_zs_gallery_mx-effects_notice_-highlight',
    border: '_zs_gallery_mx-effects_notice_-border',
    notice: '_zs_gallery_mx-effects_notice_-notice'
};
module.exports = Magix.View.extend({
    tmpl: function ($$, $viewId, $$ref) { if (!$$ref)
    $$ref = $$; var $g = '', $_temp, $p = '', $em = { '&': 'amp', '<': 'lt', '>': 'gt', '"': '#34', '\'': '#39', '`': '#96' }, $er = /[&<>"'`]/g, $n = function (v) { return '' + (v == null ? '' : v); }, $ef = function (m) { return "&" + $em[m] + ";"; }, $e = function (v) { return $n(v).replace($er, $ef); }, $um = { '!': '%21', '\'': '%27', '(': '%28', ')': '%29', '*': '%2A' }, $uf = function (m) { return $um[m]; }, $uq = /[!')(*]/g, $eu = function (v) { return encodeURIComponent($n(v)).replace($uq, $uf); }, $qr = /[\\'"]/g, $eq = function (v) { return $n(v).replace($qr, '\\$&'); }, classNames = $$.classNames, textAlign = $$.textAlign, styles = $$.styles, content = $$.content; var $expr, $art, $line; try {
    $p += '<div class="';
    $line = 1;
    $art = '=classNames';
    ;
    $p += '' + ($expr = '<%=classNames%>', $e(classNames)) + '" style="text-align:';
    $line = 1;
    $art = '=textAlign';
    ;
    $p += '' + ($expr = '<%=textAlign%>', $e(textAlign)) + '; ';
    $line = 1;
    $art = '=styles';
    ;
    $p += '' + ($expr = '<%=styles%>', $e(styles)) + '"><span mxa="_zs_galleryaG:_" class="_zs_gallery_mx-effects_notice_-inner"><i mxs="_zs_galleryaG:_" class="mc-iconfont _zs_gallery_mx-effects_notice_-icon">&#xe6ad;</i>';
    $line = 3;
    $art = '=content';
    ;
    $p += '' + ($expr = '<%=content%>', $e(content)) + '</span></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-effects/notice.html';
    throw msg;
} return $p; },
    init: function (extra) {
        // 默认左对齐
        var textAlign = extra.textAlign || 'left';
        var classNames = [ClassNames.notice];
        // 如果用户自定义了色值以自定义色值为准
        var color = extra.color, rgba, styles = [], border = (extra.border + '' === 'true'), type = extra.type;
        if (border) {
            classNames.push(ClassNames.border);
        }
        if (!color) {
            if (type && ClassNames[type]) {
                classNames.push(ClassNames[type]);
            }
        }
        else {
            var result = this.hexToRgb(color);
            rgba = "rgba(" + result.r + ", " + result.g + ", " + result.b + ", 0.2)";
            styles.push('color:' + color, 'background-color:' + rgba);
            if (border) {
                styles.push('border-color:' + color);
            }
        }
        this.updater.set({
            content: extra.content || '提示内容',
            classNames: classNames.join(' '),
            textAlign: textAlign,
            color: color,
            styles: styles.join(';')
        });
    },
    render: function () {
        this.updater.digest();
    },
    hexToRgb: function (hex) {
        if (!hex) {
            return null;
        }
        var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
        hex = hex.replace(shorthandRegex, function (m, r, g, b) {
            return r + r + g + g + b + b;
        });
        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
        } : null;
    }
});

});