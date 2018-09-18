/*
    generate by magix-combine@3.11.18: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-suggest/__test__/index",["magix","$","__test__/subs","mx-title/second","./2","./3","./1","./4","__test__/api"],(require,exports,module)=>{
/*Magix,$*/
require("__test__/subs");
require("mx-title/second");
require("./2");
require("./3");
require("./1");
require("./4");
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
} ; var $g = '', $_temp, $p = '', viewId = $$.viewId, options = $$.options; var $expr, $art, $line; try {
    $p += '<div mxv mxa="_zs_gallerycw:_" class="pr pr120"><div mx-view="__test__/subs?list=';
    $line = 2;
    $art = '@[{\n        name: \'使用示例\',\n        key: viewId + \'_demo\',\n        subs: [{\n            name: \'事件处理\',\n            key: viewId + \'_demo2\'\n        }, {\n            name: \'动态更新数据\',\n            key: viewId + \'_demo1\'\n        }, {\n            name: \'自定义字段\',\n            key: viewId + \'_demo4\'\n        }, {\n            name: \'简单数组\',\n            key: viewId + \'_demo3\'\n        }]\n    }, {\n        name: \'API\',\n        key: viewId + \'_api\'\n    }]';
    ;
    $p += '' + ($expr = '<%@[{            name: \'使用示例\',            key: viewId + \'_demo\',            subs: [{                    name: \'事件处理\',                    key: viewId + \'_demo2\'                }, {                    name: \'动态更新数据\',                    key: viewId + \'_demo1\'                }, {                    name: \'自定义字段\',                    key: viewId + \'_demo4\'                }, {                    name: \'简单数组\',                    key: viewId + \'_demo3\'                }]        }, {            name: \'API\',            key: viewId + \'_api\'        }]%>', $i($$ref, [{ name: '使用示例', key: viewId + '_demo', subs: [{ name: '事件处理', key: viewId + '_demo2' }, { name: '动态更新数据', key: viewId + '_demo1' }, { name: '自定义字段', key: viewId + '_demo4' }, { name: '简单数组', key: viewId + '_demo3' }] }, { name: 'API', key: viewId + '_api' }])) + '"></div><div id="';
    $line = 23;
    $art = '=viewId';
    ;
    $p += '' + ($expr = '<%=viewId%>', $e(viewId)) + '_demo" mx-view="mx-title/second?content=%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B"></div><div mxa="_zs_gallerycw:a" class="clearfix mb20"><div mxa="_zs_gallerycw:b" class="_zs_gallery___test___layout_-half"><div mx-view="mx-suggest/__test__/2" id="';
    $line = 27;
    $art = '=viewId';
    ;
    $p += '' + ($expr = '<%=viewId%>', $e(viewId)) + '_demo2"></div><div mx-view="mx-suggest/__test__/3" id="';
    $line = 28;
    $art = '=viewId';
    ;
    $p += '' + ($expr = '<%=viewId%>', $e(viewId)) + '_demo3"></div></div><div mxa="_zs_gallerycw:c" class="_zs_gallery___test___layout_-half"><div mx-view="mx-suggest/__test__/1" id="';
    $line = 31;
    $art = '=viewId';
    ;
    $p += '' + ($expr = '<%=viewId%>', $e(viewId)) + '_demo1"></div><div mx-view="mx-suggest/__test__/4" id="';
    $line = 32;
    $art = '=viewId';
    ;
    $p += '' + ($expr = '<%=viewId%>', $e(viewId)) + '_demo4"></div></div></div><div id="';
    $line = 36;
    $art = '=viewId';
    ;
    $p += '' + ($expr = '<%=viewId%>', $e(viewId)) + '_api" mx-view="mx-title/second?content=API"></div><div mxv="options" mx-view="__test__/api?options=';
    $line = 37;
    $art = '@options';
    ;
    $p += '' + ($expr = '<%@options%>', $i($$ref, options)) + '"></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-suggest/__test__/index.html';
    throw msg;
} return $p; },
    render: function () {
        var options = [{
                key: 'list',
                desc: "<pre>\u53EF\u641C\u7D20\u7C7B\u578B\u5217\u8868\n\u652F\u6301\u7B80\u5355\u6570\u7EC4\uFF0C\u4F8B\u5982\uFF1A\n[1, 2, 3, 4]\n\n\u6216\u8005\u5BF9\u8C61\u6570\u7EC4\uFF0C\u4F8B\u5982\uFF1A[{\n    text: '\u6587\u6848',\n    value: '\u8DDF\u540E\u7AEF\u4EA4\u4E92\u5B57\u6BB5'\n}]\n</pre>",
                type: 'array',
                def: ''
            }, {
                key: 'list-text',
                desc: '可搜索类型展示文案',
                type: 'string',
                def: 'text'
            }, {
                key: 'list-value',
                desc: '可搜索类型对应的key值',
                type: 'string',
                def: 'value'
            }, {
                key: 'placeholder',
                desc: '空状态提示文案',
                type: 'string',
                def: '搜素'
            }];
        this.updater.digest({
            viewId: this.id,
            options: options
        });
    }
});

});