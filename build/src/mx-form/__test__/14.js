/*
    generate by magix-combine@3.11.10: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-form/__test__/14",["magix","__test__/example","mx-form/index","mx-form/validator","$","mx-copy/index","__test__/hl"],(require,exports,module)=>{
/*Magix,Base,Form,Validator,$*/
require("mx-copy/index");
require("__test__/hl");
var Magix = require("magix");
var Base = require("__test__/example");
var Form = require("mx-form/index");
var Validator = require("mx-form/validator");
var $ = require("$");
module.exports = Base.extend({
    tmpl: function ($$, $viewId, $$ref) { if (!$$ref)
    $$ref = $$; var $g = '', $_temp, $p = '', $em = { '&': 'amp', '<': 'lt', '>': 'gt', '"': '#34', '\'': '#39', '`': '#96' }, $er = /[&<>"'`]/g, $n = function (v) { return '' + (v == null ? '' : v); }, $ef = function (m) { return "&" + $em[m] + ";"; }, $e = function (v) { return $n(v).replace($er, $ef); }, $um = { '!': '%21', '\'': '%27', '(': '%28', ')': '%29', '*': '%2A' }, $uf = function (m) { return $um[m]; }, $uq = /[!')(*]/g, $eu = function (v) { return encodeURIComponent($n(v)).replace($uq, $uf); }, $qr = /[\\'"]/g, $eq = function (v) { return $n(v).replace($qr, '\\$&'); }, list = $$.list, viewId = $$.viewId, text1 = $$.text1, text2 = $$.text2; var $expr, $art, $line; try {
    $p += '<div mxv mxa="_zs_gallerycH:_" class="_zs_gallery___test___base_-example"><div mxv mxa="_zs_gallerycH:a" class="_zs_gallery___test___base_-eg-content"><div mxs="_zs_gallerycH:n" class="mb20"><span class="color-9 mr20">动态添加（要求2 ~ 4个字符）：</span><a href="javascript:;" class="link-brand" mx-click="' + $viewId + 'add()">+ 再加一条</a></div><div mxv>';
    $line = 9;
    $art = 'each list as item';
    ;
    $p += '';
    $expr = '<%for(var $art_imygrbpkf$art_i=0;$art_imygrbpkf$art_i<list.length;$art_imygrbpkf$art_i++){var item=list[$art_imygrbpkf$art_i]%>';
    for (var $art_imygrbpkf$art_i = 0; $art_imygrbpkf$art_i < list.length; $art_imygrbpkf$art_i++) {
        var item = list[$art_imygrbpkf$art_i];
        $p += '<input mxe="' + $viewId + '_0_' + ($expr = '<%=$art_imygrbpkf$art_i%>', $e($art_imygrbpkf$art_i)) + '" mxc="[';
        $line = 11;
        $art = ':item.value{required:true,blength:[2,4]}';
        ;
        $p += '{p:\'list.' + ($expr = '<%=$art_imygrbpkf$art_i%>', $e($art_imygrbpkf$art_i)) + '.value\',f:{required:true,blength:[2,4]}}]" class="input mr40 mb20 w120" placeholder="请填写" value="';
        $line = 11;
        $art = ':item.value{required:true,blength:[2,4]}';
        ;
        $p += '' + ($expr = '<%=item.value%>', $e(item.value)) + '"/>';
        $line = 12;
        $art = '/each';
        ;
        $p += '';
        $expr = '<%}%>';
    }
    ;
    $p += '</div></div><div mxa="_zs_gallerycH:c" class="clearfix"><div mxa="_zs_gallerycH:m" class="_zs_gallery___test___base_-eg-desc _zs_gallery___test___base_-half"><div mxs="_zs_gallerycH:c" class="_zs_gallery___test___base_-eg-title">HTML Code</div><div class="_zs_gallery___test___base_-desc-oper" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=';
    $line = 18;
    $art = '=viewId';
    ;
    $p += '' + ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_1"><span mxa="_zs_gallerycH:s" class="_zs_gallery___test___base_-desc-tip">';
    $line = 20;
    $art = '!text1';
    ;
    $p += '' + ($expr = '<%!text1%>', $n(text1)) + '</span><i mxs="_zs_gallerycH:d" class="mc-iconfont _zs_gallery___test___base_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="';
    $line = 23;
    $art = '=viewId';
    ;
    $p += '' + ($expr = '<%=viewId%>', $e(viewId)) + '_text_1">\n&lt;a href="javascript:;"class="link-brand"\n    mx-click="add()"&gt;+ 再加一条&lt;/a&gt;\n\n&#123;&#123;each list as item&#125;&#125;\n&lt;input class="input mr40" placeholder="请填写" \n    value="&#123;&#123;:item.value&#123;required:true,blength:[2,4]&#125;&#125;&#125;"/&gt;\n&#123;&#123;/each&#125;&#125;</pre></div><div mxa="_zs_gallerycH:n" class="_zs_gallery___test___base_-eg-desc _zs_gallery___test___base_-half _zs_gallery___test___base_-half-right"><div mxs="_zs_gallerycH:j" class="_zs_gallery___test___base_-eg-title">JS Code</div><div class="_zs_gallery___test___base_-desc-oper" mx-success="' + $viewId + 'done({id:2})" mx-view="mx-copy/index?copyNode=';
    $line = 34;
    $art = '=viewId';
    ;
    $p += '' + ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_2"><span mxa="_zs_gallerycH:o" class="_zs_gallery___test___base_-desc-tip">';
    $line = 36;
    $art = '!text2';
    ;
    $p += '' + ($expr = '<%!text2%>', $n(text2)) + '</span><i mxs="_zs_gallerycH:d" class="mc-iconfont _zs_gallery___test___base_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="';
    $line = 39;
    $art = '=viewId';
    ;
    $p += '' + ($expr = '<%=viewId%>', $e(viewId)) + '_text_2">\nlet Magix = require(\'magix\');\nlet Form = require(\'@../index\');\nlet Validator = require(\'@../validator\');\nlet $ = require(\'$\');\n\nmodule.exports = Magix.View.extend(&#123;\n    tmpl: \'@index.html\',\n    mixins: [Form, Validator],\n    render() &#123;\n        let list = [];\n        for (let index = 0; index &lt; 2; index++) &#123;\n            list.push(&#123;\n                key: index,\n                value: \'\'\n            &#125;)\n        &#125;\n\n        this.updater.digest(&#123;\n            list\n        &#125;);\n    &#125;,\n    \'add&lt;click&gt;\'(e)&#123;\n        let list = this.updater.get(\'list\');\n        let len = list.length;\n        list.push(&#123;\n            key: len,\n            value: \'test\'\n        &#125;)\n        this.updater.digest(&#123;\n            list\n        &#125;);\n    &#125;\n&#125;);</pre></div></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-form/__test__/14.html';
    throw msg;
} return $p; },
    mixins: [Form, Validator],
    render: function () {
        var list = [];
        for (var index = 0; index < 2; index++) {
            list.push({
                key: index,
                value: ''
            });
        }
        this.updater.digest({
            list: list
        });
    },
    'add<click>': function (e) {
        var list = this.updater.get('list');
        var len = list.length;
        list.push({
            key: len,
            value: 'test'
        });
        this.updater.digest({
            list: list
        });
    }
});

});