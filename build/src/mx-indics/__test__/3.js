/*
    generate by magix-combine@3.11.26: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-indics/__test__/3",["magix","__test__/example","$","../index","mx-copy/index","__test__/hl"],(require,exports,module)=>{
/*Magix,Base,$*/
require("../index");
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
} if (!$i) {
    $i = function (ref, v, k, f) { for (f = ref[$g]; --f;)
        if (ref[k = $g + f] === v)
            return k; ref[k = $g + ref[$g]++] = v; return k; };
} ; var $g = '', $_temp, $p = '', viewId = $$.viewId, text1 = $$.text1, text2 = $$.text2; var $expr, $art, $line; try {
    $p += '<div mxa="_zs_galleryb9:_" class="_zs_gallery___test___layout_-example"><div mxa="_zs_galleryb9:a" class="_zs_gallery___test___layout_-eg-content"><div mxa="_zs_galleryb9:b" class="clearfix mb20"><div mxa="_zs_galleryb9:c" class="_zs_gallery___test___layout_-half"><div mxs="_zs_galleryb9:_" class="clearfix lh22 mb20"><div class="fl color-9">以下示例：</div><div class="fl">不限制可选择个数 + 指标不需排序 + 无分组</div></div><div mx-view="mx-indics/index?fields=';
    $line = 10;
    $art = '@[{\n                        value: 1, text: \'消耗\', tip: \'消耗提示文案\'\n                    }, {\n                        value: 2, text: \'展现量\'\n                    }, {\n                        value: 3, text: \'点击量\'\n                    }, {\n                        value: 4, text: \'点击率\'\n                    }, {\n                        value: 5, text: \'平均点击单价\', tip: \'平均点击单价提示文案\'\n                    }, {\n                        value: 6, text: \'点击转化率\'\n                    }, {\n                        value: 7, text: \'成交笔数\'\n                    }, {\n                        value: 8, text: \'千次展现成本\'\n                    }, {\n                        value: 9, text: \'投资回报率\'\n                    }, {\n                        value: 10, text: \'访问页面数\'\n                    }]';
    ;
    $p += ($expr = '<%@[{            value: 1, text: \'消耗\', tip: \'消耗提示文案\'        }, {            value: 2, text: \'展现量\'        }, {            value: 3, text: \'点击量\'        }, {            value: 4, text: \'点击率\'        }, {            value: 5, text: \'平均点击单价\', tip: \'平均点击单价提示文案\'        }, {            value: 6, text: \'点击转化率\'        }, {            value: 7, text: \'成交笔数\'        }, {            value: 8, text: \'千次展现成本\'        }, {            value: 9, text: \'投资回报率\'        }, {            value: 10, text: \'访问页面数\'        }]%>', $i($$ref, [{ value: 1, text: '消耗', tip: '消耗提示文案' }, { value: 2, text: '展现量' }, { value: 3, text: '点击量' }, { value: 4, text: '点击率' }, { value: 5, text: '平均点击单价', tip: '平均点击单价提示文案' }, { value: 6, text: '点击转化率' }, { value: 7, text: '成交笔数' }, { value: 8, text: '千次展现成本' }, { value: 9, text: '投资回报率' }, { value: 10, text: '访问页面数' }])) + '&defaults=';
    $line = 31;
    $art = '@[1,2,3]';
    ;
    $p += ($expr = '<%@[1, 2, 3]%>', $i($$ref, [1, 2, 3])) + '"></div></div><div mxa="_zs_galleryb9:d" class="_zs_gallery___test___layout_-half"><div mxs="_zs_galleryb9:a" class="clearfix lh22 mb20"><div class="fl color-9">以下示例：</div><div class="fl">不限制可选择个数 + 指标不需排序 + 有分组</div></div><div mx-view="mx-indics/index?parents=';
    $line = 40;
    $art = '@[{\n                        value: 1, text: \'组1\'\n                    }, {\n                        value: 2, text: \'组2\'\n                    }]';
    ;
    $p += ($expr = '<%@[{            value: 1, text: \'组1\'        }, {            value: 2, text: \'组2\'        }]%>', $i($$ref, [{ value: 1, text: '组1' }, { value: 2, text: '组2' }])) + '&fields=';
    $line = 45;
    $art = '@[{\n                        value: 1, text: \'消耗\', pValue: 1, tip: \'消耗提示文案\'\n                    }, {\n                        value: 2, text: \'展现量\', pValue: 1\n                    }, {\n                        value: 3, text: \'点击量\', pValue: 1\n                    }, {\n                        value: 4, text: \'点击率\', pValue: 1\n                    }, {\n                        value: 5, text: \'平均点击单价\', pValue: 1, tip: \'平均点击单价提示文案\'\n                    }, {\n                        value: 6, text: \'点击转化率\', pValue: 2\n                    }, {\n                        value: 7, text: \'成交笔数\', pValue: 2\n                    }, {\n                        value: 8, text: \'千次展现成本\', pValue: 2\n                    }, {\n                        value: 9, text: \'投资回报率\', pValue: 2\n                    }, {\n                        value: 10, text: \'访问页面数\', pValue: 2\n                    }]';
    ;
    $p += ($expr = '<%@[{            value: 1, text: \'消耗\', pValue: 1, tip: \'消耗提示文案\'        }, {            value: 2, text: \'展现量\', pValue: 1        }, {            value: 3, text: \'点击量\', pValue: 1        }, {            value: 4, text: \'点击率\', pValue: 1        }, {            value: 5, text: \'平均点击单价\', pValue: 1, tip: \'平均点击单价提示文案\'        }, {            value: 6, text: \'点击转化率\', pValue: 2        }, {            value: 7, text: \'成交笔数\', pValue: 2        }, {            value: 8, text: \'千次展现成本\', pValue: 2        }, {            value: 9, text: \'投资回报率\', pValue: 2        }, {            value: 10, text: \'访问页面数\', pValue: 2        }]%>', $i($$ref, [{ value: 1, text: '消耗', pValue: 1, tip: '消耗提示文案' }, { value: 2, text: '展现量', pValue: 1 }, { value: 3, text: '点击量', pValue: 1 }, { value: 4, text: '点击率', pValue: 1 }, { value: 5, text: '平均点击单价', pValue: 1, tip: '平均点击单价提示文案' }, { value: 6, text: '点击转化率', pValue: 2 }, { value: 7, text: '成交笔数', pValue: 2 }, { value: 8, text: '千次展现成本', pValue: 2 }, { value: 9, text: '投资回报率', pValue: 2 }, { value: 10, text: '访问页面数', pValue: 2 }])) + '&defaults=';
    $line = 66;
    $art = '@[1,2,3]';
    ;
    $p += ($expr = '<%@[1, 2, 3]%>', $i($$ref, [1, 2, 3])) + '"></div></div></div></div><div mxa="_zs_galleryb9:e" class="clearfix"><div mxa="_zs_galleryb9:f" class="_zs_gallery___test___layout_-eg-desc _zs_gallery___test___layout_-half"><div mxs="_zs_galleryb9:b" class="_zs_gallery___test___layout_-eg-title">HTML Code</div><div class="_zs_gallery___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=';
    $line = 73;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_1"><span mxa="_zs_galleryb9:g" class="_zs_gallery___test___layout_-desc-tip">';
    $line = 75;
    $art = '!text1';
    ;
    $p += ($expr = '<%!text1%>', $n(text1)) + '</span><i mxs="_zs_galleryb9:c" class="mc-iconfont _zs_gallery___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="';
    $line = 78;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_1">\n&lt;mx-indics \n    fields="&#123;&#123;@[&#123;\n        value: 1, text: \'消耗\', tip: \'消耗提示文案\'\n    &#125;, &#123;\n        value: 2, text: \'展现量\'\n    &#125;, &#123;\n        value: 3, text: \'点击量\'\n    &#125;, &#123;\n        value: 4, text: \'点击率\'\n    &#125;, &#123;\n        value: 5, text: \'平均点击单价\', tip: \'平均点击单价提示文案\'\n    &#125;, &#123;\n        value: 6, text: \'点击转化率\'\n    &#125;, &#123;\n        value: 7, text: \'成交笔数\'\n    &#125;, &#123;\n        value: 8, text: \'千次展现成本\'\n    &#125;, &#123;\n        value: 9, text: \'投资回报率\'\n    &#125;, &#123;\n        value: 10, text: \'访问页面数\'\n    &#125;]&#125;&#125;" \n    defaults="&#123;&#123;@[1,2,3]&#125;&#125;"/&gt;\n            </pre></div><div mxa="_zs_galleryb9:h" class="_zs_gallery___test___layout_-eg-desc _zs_gallery___test___layout_-half _zs_gallery___test___layout_-half-right"><div mxs="_zs_galleryb9:b" class="_zs_gallery___test___layout_-eg-title">HTML Code</div><div class="_zs_gallery___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:2})" mx-view="mx-copy/index?copyNode=';
    $line = 106;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_2"><span mxa="_zs_galleryb9:i" class="_zs_gallery___test___layout_-desc-tip">';
    $line = 108;
    $art = '!text2';
    ;
    $p += ($expr = '<%!text2%>', $n(text2)) + '</span><i mxs="_zs_galleryb9:c" class="mc-iconfont _zs_gallery___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="';
    $line = 111;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_2">\n&lt;mx-indics \n    parents="&#123;&#123;@[&#123;\n        value: 1, text: \'组1\'\n    &#125;, &#123;\n        value: 2, text: \'组2\'\n    &#125;]&#125;&#125;"\n    fields="&#123;&#123;@[&#123;\n        value: 1, text: \'消耗\', pValue: 1, tip: \'消耗提示文案\'\n    &#125;, &#123;\n        value: 2, text: \'展现量\', pValue: 1\n    &#125;, &#123;\n        value: 3, text: \'点击量\', pValue: 1\n    &#125;, &#123;\n        value: 4, text: \'点击率\', pValue: 1\n    &#125;, &#123;\n        value: 5, text: \'平均点击单价\', pValue: 1, tip: \'平均点击单价提示文案\'\n    &#125;, &#123;\n        value: 6, text: \'点击转化率\', pValue: 2\n    &#125;, &#123;\n        value: 7, text: \'成交笔数\', pValue: 2\n    &#125;, &#123;\n        value: 8, text: \'千次展现成本\', pValue: 2\n    &#125;, &#123;\n        value: 9, text: \'投资回报率\', pValue: 2\n    &#125;, &#123;\n        value: 10, text: \'访问页面数\', pValue: 2\n    &#125;]&#125;&#125;" \n    defaults="&#123;&#123;@[1,2,3]&#125;&#125;"/&gt;\n            </pre></div></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-indics/__test__/3.html';
    throw msg;
} return $p; },
    render: function () {
        this.updater.digest({});
    }
});

});