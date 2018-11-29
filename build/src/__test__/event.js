/*
    generate by magix-combine@3.11.21: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("__test__/event",["magix","$"],(require,exports,module)=>{
/*Magix,$*/

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
} ; var $g = '', $_temp, $p = '', options = $$.options; var $expr, $art, $line; try {
    $p += '<div mxa="_zs_galleryc:_" class="pr20"><table mxa="_zs_galleryc:a" class="table _zs_gallery___test___layout_-desc-table"><thead mxs="_zs_galleryc:_"><tr><th width="120">事件</th><th width="100">返回参数</th><th width="200">参数说明</th><th width="100">参数类型</th></tr></thead><tbody>';
    $line = 12;
    $art = 'each options as option';
    ;
    $expr = '<%for (var $art_iftbczxrpeo$art_i = 0, $art_cophtbaz$art_c = options.length; $art_iftbczxrpeo$art_i < $art_cophtbaz$art_c; $art_iftbczxrpeo$art_i++) {    var option = options[$art_iftbczxrpeo$art_i]%>';
    for (var $art_iftbczxrpeo$art_i = 0, $art_cophtbaz$art_c = options.length; $art_iftbczxrpeo$art_i < $art_cophtbaz$art_c; $art_iftbczxrpeo$art_i++) {
        var option = options[$art_iftbczxrpeo$art_i];
        $p += ' ';
        $line = 13;
        $art = 'each option.params as param index';
        ;
        $expr = '<%for (var index = 0, $art_objvlyoyyyagg$art_obj = option.params, $art_cffmktam$art_c = $art_objvlyoyyyagg$art_obj.length; index < $art_cffmktam$art_c; index++) {        var param = $art_objvlyoyyyagg$art_obj[index]%>';
        for (var index = 0, $art_objvlyoyyyagg$art_obj = option.params, $art_cffmktam$art_c = $art_objvlyoyyyagg$art_obj.length; index < $art_cffmktam$art_c; index++) {
            var param = $art_objvlyoyyyagg$art_obj[index];
            $p += '<tr>';
            $line = 15;
            $art = 'if (index == 0)';
            ;
            $expr = '<%if (index == 0) {%>';
            if (index == 0) {
                ;
                $p += '<td rowspan="';
                $line = 16;
                $art = '=option.params.length';
                ;
                $p += ($expr = '<%=option.params.length%>', $e(option.params.length)) + '">';
                $line = 16;
                $art = '=option.type';
                ;
                $p += ($expr = '<%=option.type%>', $e(option.type)) + '</td>';
                $line = 17;
                $art = '/if';
                ;
                $expr = '<%}%>';
            }
            ;
            $p += '<td>';
            $line = 19;
            $art = '=param.key';
            ;
            $p += ($expr = '<%=param.key%>', $e(param.key)) + '</td><td>';
            $line = 20;
            $art = '!param.desc';
            ;
            $p += ($expr = '<%!param.desc%>', $n(param.desc)) + '</td><td>';
            $line = 21;
            $art = '!param.type';
            ;
            $p += ($expr = '<%!param.type%>', $n(param.type)) + '</td></tr>';
            $line = 23;
            $art = '/each';
            ;
            $expr = '<%}%>';
        }
        ;
        $p += ' ';
        $line = 24;
        $art = '/each';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += '</tbody></table></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:__test__/event.html';
    throw msg;
} return $p; },
    init: function (options) {
        this.updater.digest(options);
    },
    render: function () {
        this.updater.digest();
    },
    'to<click>': function (e) {
        var node = $('#' + e.params.id);
        $(window).scrollTop(node.offset().top);
    }
});

});