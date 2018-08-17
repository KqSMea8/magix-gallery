/*
    generate by magix-combine@3.11.10: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-form/__test__/10",["magix","__test__/example","mx-form/index","mx-form/validator","$","mx-copy/index","__test__/hl"],(require,exports,module)=>{
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
    $$ref = $$; var $g = '', $_temp, $p = '', $em = { '&': 'amp', '<': 'lt', '>': 'gt', '"': '#34', '\'': '#39', '`': '#96' }, $er = /[&<>"'`]/g, $n = function (v) { return '' + (v == null ? '' : v); }, $ef = function (m) { return "&" + $em[m] + ";"; }, $e = function (v) { return $n(v).replace($er, $ef); }, $um = { '!': '%21', '\'': '%27', '(': '%28', ')': '%29', '*': '%2A' }, $uf = function (m) { return $um[m]; }, $uq = /[!')(*]/g, $eu = function (v) { return encodeURIComponent($n(v)).replace($uq, $uf); }, $qr = /[\\'"]/g, $eq = function (v) { return $n(v).replace($qr, '\\$&'); }, url = $$.url, english = $$.english, chinese = $$.chinese, mobile = $$.mobile, currency = $$.currency, viewId = $$.viewId, text1 = $$.text1; var $expr, $art, $line; try {
    $p += '<div mxv mxa="_zs_galleryaW:_" class="_zs_gallery___test___base_-example"><div mxv mxa="_zs_galleryaW:a" class="_zs_gallery___test___base_-eg-content"><div mxv mxa="_zs_galleryaW:b" class="mb20"><input mxe="' + $viewId + '_0" mxc="[';
    $line = 4;
    $art = ':url{url:true}';
    ;
    $p += '{p:\'url\',f:{url:true}}]" class="input mr60" placeholder="url链接" value="';
    $line = 4;
    $art = ':url{url:true}';
    ;
    $p += '' + ($expr = '<%=url%>', $e(url)) + '"/> <input mxe="' + $viewId + '_1" mxc="[';
    $line = 5;
    $art = ':english{english:true}';
    ;
    $p += '{p:\'english\',f:{english:true}}]" class="input mr60" placeholder="只英文" value="';
    $line = 5;
    $art = ':english{english:true}';
    ;
    $p += '' + ($expr = '<%=english%>', $e(english)) + '"/> <input mxe="' + $viewId + '_2" mxc="[';
    $line = 6;
    $art = ':chinese{chinese:true}';
    ;
    $p += '{p:\'chinese\',f:{chinese:true}}]" class="input mr60" placeholder="只中文" value="';
    $line = 6;
    $art = ':chinese{chinese:true}';
    ;
    $p += '' + ($expr = '<%=chinese%>', $e(chinese)) + '"/></div><div mxv mxa="_zs_galleryaW:c" class="mb20"><input mxe="' + $viewId + '_3" mxc="[';
    $line = 9;
    $art = ':mobile{mobile:true}';
    ;
    $p += '{p:\'mobile\',f:{mobile:true}}]" class="input mr60" placeholder="电话号码" value="';
    $line = 9;
    $art = ':mobile{mobile:true}';
    ;
    $p += '' + ($expr = '<%=mobile%>', $e(mobile)) + '"/> <input mxe="' + $viewId + '_4" mxc="[';
    $line = 10;
    $art = ':currency{currency:true}';
    ;
    $p += '{p:\'currency\',f:{currency:true}}]" class="input mr60" placeholder="金额" value="';
    $line = 10;
    $art = ':currency{currency:true}';
    ;
    $p += '' + ($expr = '<%=currency%>', $e(currency)) + '"/></div></div><div mxa="_zs_galleryaW:d" class="_zs_gallery___test___base_-eg-desc"><div mxs="_zs_galleryaW:_" class="_zs_gallery___test___base_-eg-title">字个数</div><div class="_zs_gallery___test___base_-desc-oper" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=';
    $line = 15;
    $art = '=viewId';
    ;
    $p += '' + ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_1"><span mxa="_zs_galleryaW:e" class="_zs_gallery___test___base_-desc-tip">';
    $line = 17;
    $art = '!text1';
    ;
    $p += '' + ($expr = '<%!text1%>', $n(text1)) + '</span><i mxs="_zs_galleryaW:a" class="mc-iconfont _zs_gallery___test___base_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="';
    $line = 20;
    $art = '=viewId';
    ;
    $p += '' + ($expr = '<%=viewId%>', $e(viewId)) + '_text_1">\n&lt;input class="input" placeholder="url链接" value="&#123;&#123;:url&#123;url:true&#125;&#125;&#125;"/&gt;\n\n&lt;input class="input" placeholder="只英文" value="&#123;&#123;:english&#123;english:true&#125;&#125;&#125;"/&gt;\n\n&lt;input class="input" placeholder="只中文" value="&#123;&#123;:chinese&#123;chinese:true&#125;&#125;&#125;"/&gt;\n\n&lt;input class="input" placeholder="电话号码" value="&#123;&#123;:mobile&#123;mobile:true&#125;&#125;&#125;"/&gt;\n\n&lt;input class="input" placeholder="金额" value="&#123;&#123;:currency&#123;currency:true&#125;&#125;&#125;"/&gt;</pre></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-form/__test__/10.html';
    throw msg;
} return $p; },
    mixins: [Form, Validator],
    render: function () {
        this.updater.digest();
    }
});

});