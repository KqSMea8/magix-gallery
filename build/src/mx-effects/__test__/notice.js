/*
    generate by magix-combine@3.11.26: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-effects/__test__/notice",["magix","$","mx-title/second","./3","./4","./5","./6","./7","__test__/api"],(require,exports,module)=>{
/*Magix,$*/
require("mx-title/second");
require("./3");
require("./4");
require("./5");
require("./6");
require("./7");
require("__test__/api");
var Magix = require("magix");
var $ = require("$");
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
} if (!$i) {
    $i = function (ref, v, k, f) { for (f = ref[$g]; --f;)
        if (ref[k = $g + f] === v)
            return k; ref[k = $g + ref[$g]++] = v; return k; };
} ; var $g = '', $_temp, $p = '', options = $$.options; var $expr, $art, $line; try {
    $p += '<div mxs="_zs_gallerya::_" mx-view="mx-title/second?content=%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B"></div><div mxs="_zs_gallerya::a" class="clearfix mb20"><div class="_zs_gallery___test___layout_-half"><div mx-view="mx-effects/__test__/3"></div><div mx-view="mx-effects/__test__/4"></div></div><div class="_zs_gallery___test___layout_-half"><div mx-view="mx-effects/__test__/5"></div><div mx-view="mx-effects/__test__/6"></div><div mx-view="mx-effects/__test__/7"></div></div></div><div mxs="_zs_gallerya::b" mx-view="mx-title/second?content=API"></div><div mxv="options" mx-view="__test__/api?options=';
    $line = 15;
    $art = '@options';
    ;
    $p += ($expr = '<%@options%>', $i($$ref, options)) + '"></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-effects/__test__/notice.html';
    throw msg;
} return $p; },
    render: function () {
        var options = [{
                key: 'type',
                desc: [
                    '展示类型',
                    'error：红色错误类型提示',
                    'warn：黄色警告类型提示',
                    'highlight：品牌色图标强调提示'
                ].join('<br>'),
                type: 'string',
                def: '默认灰色提示'
            }, {
                key: 'border',
                desc: '是否带边框 + 圆角',
                type: 'boolean',
                def: 'false'
            }, {
                key: 'text-align',
                desc: '文字对齐方式，left，center，right',
                type: 'string',
                def: 'left'
            }, {
                key: 'color',
                desc: '自定义颜色，#4d7fff 或者 rgb(77, 127, 255)均可，背景色根据自定义颜色计算透明度<br/>配置了color的时候忽略type的配置',
                type: 'string',
                def: ''
            }, {
                key: 'icon',
                desc: '是否有警告icon',
                type: 'boolean',
                def: 'true'
            }];
        this.updater.digest({
            options: options
        });
    }
});

});