/*
    generate by magix-combine@3.11.18: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-checkbox/__test__/index",["magix","$","__test__/subs","mx-title/second","./1","./2","__test__/api","./desc"],(require,exports,module)=>{
/*Magix,$*/
require("__test__/subs");
require("mx-title/second");
require("./1");
require("./2");
require("__test__/api");
require("./desc");
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
} ; var $g = '', $_temp, $p = '', viewId = $$.viewId, options = $$.options; var $expr, $art, $line; try {
    $p += '<div mxv mxa="_zs_gallery::_" class="pr pr120"><div mx-view="__test__/subs?list=';
    $line = 2;
    $art = '@[{\n        name: \'使用示例\',\n        key: viewId + \'_demo\'\n    }, {\n        name: \'API\',\n        key: viewId + \'_api\'\n    }, {\n        name: \'_config说明\',\n        key: viewId + \'_config\'\n    }]';
    ;
    $p += '' + ($expr = '<%@[{            name: \'使用示例\',            key: viewId + \'_demo\'        }, {            name: \'API\',            key: viewId + \'_api\'        }, {            name: \'_config说明\',            key: viewId + \'_config\'        }]%>', $i($$ref, [{ name: '使用示例', key: viewId + '_demo' }, { name: 'API', key: viewId + '_api' }, { name: '_config说明', key: viewId + '_config' }])) + '"></div><div id="';
    $line = 13;
    $art = '=viewId';
    ;
    $p += '' + ($expr = '<%=viewId%>', $e(viewId)) + '_demo" mx-view="mx-title/second?content=%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B"></div><div mxs="_zs_gallery::_" class="clearfix mb20"><div class="_zs_gallery___test___layout_-half"><div mx-view="mx-checkbox/__test__/1"></div></div><div class="_zs_gallery___test___layout_-half"><div mx-view="mx-checkbox/__test__/2"></div></div></div><div id="';
    $line = 23;
    $art = '=viewId';
    ;
    $p += '' + ($expr = '<%=viewId%>', $e(viewId)) + '_api" mx-view="mx-title/second?content=API"></div><div mxv="options" mx-view="__test__/api?options=';
    $line = 24;
    $art = '@options';
    ;
    $p += '' + ($expr = '<%@options%>', $i($$ref, options)) + '" class="mb40"></div><div id="';
    $line = 26;
    $art = '=viewId';
    ;
    $p += '' + ($expr = '<%=viewId%>', $e(viewId)) + '_config" mx-view="mx-title/second?content=%E5%85%B3%E4%BA%8E%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6%20_config%20%E7%9A%84%E8%AF%B4%E6%98%8E"></div><div mxs="_zs_gallery::a" mx-view="mx-checkbox/__test__/desc" class="mb40 pr20"></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-checkbox/__test__/index.html';
    throw msg;
} return $p; },
    render: function () {
        this.updater.digest({
            viewId: this.id,
            options: [{
                    key: 'view-checked',
                    desc: '是否选中',
                    type: 'boolean',
                    def: 'false'
                }, {
                    key: 'view-disabled',
                    desc: '是否禁用',
                    type: 'boolean',
                    def: 'false'
                }, {
                    key: 'view-indeterminate',
                    desc: '是否部分选中',
                    type: 'boolean',
                    def: 'false'
                }]
        });
    }
});

});