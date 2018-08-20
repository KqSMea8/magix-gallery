/*
    generate by magix-combine@3.11.10: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-form/__test__/4",["magix","__test__/example","mx-form/index","mx-form/validator","$","mx-copy/index","__test__/hl"],(require,exports,module)=>{
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
    $$ref = $$; var $g = '', $_temp, $p = '', $em = { '&': 'amp', '<': 'lt', '>': 'gt', '"': '#34', '\'': '#39', '`': '#96' }, $er = /[&<>"'`]/g, $n = function (v) { return '' + (v == null ? '' : v); }, $ef = function (m) { return "&" + $em[m] + ";"; }, $e = function (v) { return $n(v).replace($er, $ef); }, $um = { '!': '%21', '\'': '%27', '(': '%28', ')': '%29', '*': '%2A' }, $uf = function (m) { return $um[m]; }, $uq = /[!')(*]/g, $eu = function (v) { return encodeURIComponent($n(v)).replace($uq, $uf); }, $qr = /[\\'"]/g, $eq = function (v) { return $n(v).replace($qr, '\\$&'); }, number = $$.number, int = $$.int, posint = $$.posint, negint = $$.negint, viewId = $$.viewId, text1 = $$.text1; var $expr, $art, $line; try {
    $p += '<div mxv mxa="_zs_gallerya6:_" class="_zs_gallery___test___base_-example"><div mxv mxa="_zs_gallerya6:a" class="_zs_gallery___test___base_-eg-content"><div mxv mxa="_zs_gallerya6:b" class="clearfix"><input mxe="' + $viewId + '_0" mxc="[';
    $line = 4;
    $art = ':number{number:true}';
    ;
    $p += '{p:\'number\',f:{number:true}}]" class="input mr20 mb20" placeholder="数字" value="';
    $line = 4;
    $art = ':number{number:true}';
    ;
    $p += '' + ($expr = '<%=number%>', $e(number)) + '"/> <input mxe="' + $viewId + '_1" mxc="[';
    $line = 5;
    $art = ':int{int:true}';
    ;
    $p += '{p:\'int\',f:{int:true}}]" class="input mr20 mb20" placeholder="整数" value="';
    $line = 5;
    $art = ':int{int:true}';
    ;
    $p += '' + ($expr = '<%=int%>', $e(int)) + '"/> <input mxe="' + $viewId + '_2" mxc="[';
    $line = 6;
    $art = ':posint{posint:[true,\'自定义提示输入正整数\']}';
    ;
    $p += '{p:\'posint\',f:{posint:[true,\'自定义提示输入正整数\']}}]" class="input mr20 mb20" placeholder="正整数" value="';
    $line = 6;
    $art = ':posint{posint:[true,\'自定义提示输入正整数\']}';
    ;
    $p += '' + ($expr = '<%=posint%>', $e(posint)) + '"/> <input mxe="' + $viewId + '_3" mxc="[';
    $line = 7;
    $art = ':negint{negint:[true,\'自定义提示输入负整数\']}';
    ;
    $p += '{p:\'negint\',f:{negint:[true,\'自定义提示输入负整数\']}}]" class="input mr20 mb20" placeholder="负整数" value="';
    $line = 7;
    $art = ':negint{negint:[true,\'自定义提示输入负整数\']}';
    ;
    $p += '' + ($expr = '<%=negint%>', $e(negint)) + '"/></div></div><div mxa="_zs_gallerya6:c" class="_zs_gallery___test___base_-eg-desc"><div mxs="_zs_gallerya6:b" class="_zs_gallery___test___base_-eg-title">整数</div><div class="_zs_gallery___test___base_-desc-oper" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=';
    $line = 12;
    $art = '=viewId';
    ;
    $p += '' + ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_1"><span mxa="_zs_gallerya6:d" class="_zs_gallery___test___base_-desc-tip">';
    $line = 14;
    $art = '!text1';
    ;
    $p += '' + ($expr = '<%!text1%>', $n(text1)) + '</span><i mxs="_zs_gallerya6:a" class="mc-iconfont _zs_gallery___test___base_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="';
    $line = 17;
    $art = '=viewId';
    ;
    $p += '' + ($expr = '<%=viewId%>', $e(viewId)) + '_text_1">\n&lt;input class="input" placeholder="数字" value="&#123;&#123;:number&#123;number:true&#125;&#125;&#125;"/&gt;\n\n&lt;input class="input" placeholder="整数" value="&#123;&#123;:int&#123;int:true&#125;&#125;&#125;"/&gt;\n\n&lt;input class="input" placeholder="正整数" value="&#123;&#123;:posint&#123;posint:[true,\'自定义提示输入正整数\']&#125;&#125;&#125;"/&gt;\n\n&lt;input class="input" placeholder="负整数" value="&#123;&#123;:negint&#123;negint:[true,\'自定义提示输入负整数\']&#125;&#125;&#125;"/&gt;</pre></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-form/__test__/4.html';
    throw msg;
} return $p; },
    mixins: [Form, Validator],
    render: function () {
        this.updater.digest();
    }
});

});