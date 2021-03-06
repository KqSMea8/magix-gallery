/*
    generate by magix-combine@3.11.26: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-table/__test__/8",["magix","__test__/example","mx-table/sort","$","../index","mx-copy/index","__test__/hl"],(require,exports,module)=>{
/*Magix,Base,Sort,$*/
require("../index");
require("mx-copy/index");
require("__test__/hl");
var Magix = require("magix");
var Base = require("__test__/example");
var Sort = require("mx-table/sort");
var $ = require("$");
var CopyText = '复制代码';
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
} ; var $g = '', $_temp, $p = '', list = $$.list, groups = $$.groups, format = $$.format, viewId = $$.viewId, text1 = $$.text1, text2 = $$.text2; var $expr, $art, $line; try {
    $p += '<div mxa="_zs_gallerydP:_" class="_zs_gallery___test___layout_-example"><div mxa="_zs_gallerydP:a" class="_zs_gallery___test___layout_-eg-content"><div mxs="_zs_gallerydP:_" class="mb20 clearfix lh22"><div class="fl color-9">以下示例：</div><div class="fl"><div>需要排序的表头上加上<span class="color-brand">&lt;span sort-trigger="需要排序的字段key值"&gt;&lt;/span&gt;</span>；</div><div class="mt10 mb10"><pre class="tip-content">\n&lt;th class="field-item"&gt;\n    指标&#123;&#123;=field&#125;&#125;\n    &lt;span sort-trigger="&#123;&#123;=field&#125;&#125;"&gt;&lt;/span&gt;\n&lt;/th&gt;\n</pre></div><div>排序参数反应在路由上，orderField（按哪个字段排序），orderBy（desc降序，asc升序）；</div><div>mixins中this.sort为本页排序方法，如果从接口获取排序则忽略此方法</div></div></div><div mxa="_zs_gallerydP:b" mx-view="mx-table/index?sticky=true" class="mb40"><div><table mxa="_zs_gallerydP:c" class="table" left="true" width="400"><thead mxs="_zs_gallerydP:a"><tr><th>固定1</th><th>固定2</th><th>固定3</th></tr></thead><tbody>';
    $line = 30;
    $art = 'each list as item index';
    ;
    $expr = '<%for (var index = 0, $art_cxovstdkr$art_c = list.length; index < $art_cxovstdkr$art_c; index++) {    var item = list[index]%>';
    for (var index = 0, $art_cxovstdkr$art_c = list.length; index < $art_cxovstdkr$art_c; index++) {
        var item = list[index];
        $p += '<tr><td>';
        $line = 32;
        $art = '=item.fixed1';
        ;
        $p += ($expr = '<%=item.fixed1%>', $e(item.fixed1)) + '</td><td>';
        $line = 33;
        $art = '=item.fixed2';
        ;
        $p += ($expr = '<%=item.fixed2%>', $e(item.fixed2)) + '</td><td>';
        $line = 34;
        $art = '=item.fixed3';
        ;
        $p += ($expr = '<%=item.fixed3%>', $e(item.fixed3)) + '</td></tr>';
        $line = 36;
        $art = '/each';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += '</tbody></table></div><div><table mxa="_zs_gallerydP:d" class="table" center="true" width="1200"><thead><tr>';
    $line = 43;
    $art = 'each groups as group';
    ;
    $expr = '<%for (var $art_ixqyqfzhd$art_i = 0, $art_cvqbnacmn$art_c = groups.length; $art_ixqyqfzhd$art_i < $art_cvqbnacmn$art_c; $art_ixqyqfzhd$art_i++) {    var group = groups[$art_ixqyqfzhd$art_i]%>';
    for (var $art_ixqyqfzhd$art_i = 0, $art_cvqbnacmn$art_c = groups.length; $art_ixqyqfzhd$art_i < $art_cvqbnacmn$art_c; $art_ixqyqfzhd$art_i++) {
        var group = groups[$art_ixqyqfzhd$art_i];
        $p += '<th class="field-group" colspan="';
        $line = 44;
        $art = '=group.fields.length';
        ;
        $p += ($expr = '<%=group.fields.length%>', $e(group.fields.length)) + '"><div mxa="_zs_gallerydP:e" class="group-name">';
        $line = 45;
        $art = '=group.name';
        ;
        $p += ($expr = '<%=group.name%>', $e(group.name)) + '</div></th>';
        $line = 47;
        $art = '/each';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += '</tr><tr>';
    $line = 50;
    $art = 'each groups as group';
    ;
    $expr = '<%for (var $art_itgbcuwwiim$art_i = 0, $art_cnlkadlhpr$art_c = groups.length; $art_itgbcuwwiim$art_i < $art_cnlkadlhpr$art_c; $art_itgbcuwwiim$art_i++) {    var group = groups[$art_itgbcuwwiim$art_i]%>';
    for (var $art_itgbcuwwiim$art_i = 0, $art_cnlkadlhpr$art_c = groups.length; $art_itgbcuwwiim$art_i < $art_cnlkadlhpr$art_c; $art_itgbcuwwiim$art_i++) {
        var group = groups[$art_itgbcuwwiim$art_i];
        $p += ' ';
        $line = 51;
        $art = 'each group.fields as field';
        ;
        $expr = '<%for (var $art_isidufhzfe$art_i = 0, $art_objraclcwf$art_obj = group.fields, $art_cvytgydpjc$art_c = $art_objraclcwf$art_obj.length; $art_isidufhzfe$art_i < $art_cvytgydpjc$art_c; $art_isidufhzfe$art_i++) {        var field = $art_objraclcwf$art_obj[$art_isidufhzfe$art_i]%>';
        for (var $art_isidufhzfe$art_i = 0, $art_objraclcwf$art_obj = group.fields, $art_cvytgydpjc$art_c = $art_objraclcwf$art_obj.length; $art_isidufhzfe$art_i < $art_cvytgydpjc$art_c; $art_isidufhzfe$art_i++) {
            var field = $art_objraclcwf$art_obj[$art_isidufhzfe$art_i];
            $p += '<th mxa="_zs_gallerydP:f" class="field-item">指标';
            $line = 53;
            $art = '=field';
            ;
            $p += ($expr = '<%=field%>', $e(field)) + '<span sort-trigger="';
            $line = 54;
            $art = '=field';
            ;
            $p += ($expr = '<%=field%>', $e(field)) + '"></span></th>';
            $line = 56;
            $art = '/each';
            ;
            $expr = '<%}%>';
        }
        ;
        $p += ' ';
        $line = 57;
        $art = '/each';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += '</tr></thead><tbody>';
    $line = 61;
    $art = 'each list as item index';
    ;
    $expr = '<%for (var index = 0, $art_ctixjrbwgak$art_c = list.length; index < $art_ctixjrbwgak$art_c; index++) {    var item = list[index]%>';
    for (var index = 0, $art_ctixjrbwgak$art_c = list.length; index < $art_ctixjrbwgak$art_c; index++) {
        var item = list[index];
        $p += '<tr class="';
        $line = 62;
        $art = '= (index+1==list.length) ? \'last-tr\' : \'\'';
        ;
        $p += ($expr = '<%=(index + 1 == list.length) ? \'last-tr\' : \'\'%>', $e((index + 1 == list.length) ? 'last-tr' : '')) + '">';
        $line = 63;
        $art = 'each groups as group';
        ;
        $expr = '<%for (var $art_inpxoganm$art_i = 0, $art_cxvoxrlcc$art_c = groups.length; $art_inpxoganm$art_i < $art_cxvoxrlcc$art_c; $art_inpxoganm$art_i++) {        var group = groups[$art_inpxoganm$art_i]%>';
        for (var $art_inpxoganm$art_i = 0, $art_cxvoxrlcc$art_c = groups.length; $art_inpxoganm$art_i < $art_cxvoxrlcc$art_c; $art_inpxoganm$art_i++) {
            var group = groups[$art_inpxoganm$art_i];
            $p += ' ';
            $line = 64;
            $art = 'each group.fields as field';
            ;
            $expr = '<%for (var $art_ifbjfewvi$art_i = 0, $art_objqjnsbstxsj$art_obj = group.fields, $art_cjvbvbjpla$art_c = $art_objqjnsbstxsj$art_obj.length; $art_ifbjfewvi$art_i < $art_cjvbvbjpla$art_c; $art_ifbjfewvi$art_i++) {            var field = $art_objqjnsbstxsj$art_obj[$art_ifbjfewvi$art_i]%>';
            for (var $art_ifbjfewvi$art_i = 0, $art_objqjnsbstxsj$art_obj = group.fields, $art_cjvbvbjpla$art_c = $art_objqjnsbstxsj$art_obj.length; $art_ifbjfewvi$art_i < $art_cjvbvbjpla$art_c; $art_ifbjfewvi$art_i++) {
                var field = $art_objqjnsbstxsj$art_obj[$art_ifbjfewvi$art_i];
                $p += '<td>';
                $line = 65;
                $art = '=format(item[field])';
                ;
                $p += ($expr = '<%=format(item[field])%>', $e(format(item[field]))) + '</td>';
                $line = 66;
                $art = '/each';
                ;
                $expr = '<%}%>';
            }
            ;
            $p += ' ';
            $line = 67;
            $art = '/each';
            ;
            $expr = '<%}%>';
        }
        ;
        $p += '</tr>';
        $line = 69;
        $art = '/each';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += '</tbody></table></div></div></div><div mxa="_zs_gallerydP:g" class="clearfix"><div mxa="_zs_gallerydP:h" class="_zs_gallery___test___layout_-eg-desc _zs_gallery___test___layout_-half"><div mxs="_zs_gallerydP:b" class="_zs_gallery___test___layout_-eg-title">HTML Code</div><div class="_zs_gallery___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=';
    $line = 77;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_1"><span mxa="_zs_gallerydP:i" class="_zs_gallery___test___layout_-desc-tip">';
    $line = 79;
    $art = '!text1';
    ;
    $p += ($expr = '<%!text1%>', $n(text1)) + '</span><i mxs="_zs_gallerydP:c" class="mc-iconfont _zs_gallery___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="';
    $line = 82;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_1">\n&lt;mx-table sticky="true" class="mb40"&gt;\n&lt;table class="table" left="true" width="400"&gt;\n    &lt;thead&gt;\n        &lt;tr&gt;\n            &lt;th&gt;固定1&lt;/th&gt;\n            &lt;th&gt;固定2&lt;/th&gt;\n            &lt;th&gt;固定3&lt;/th&gt;\n        &lt;/tr&gt;\n    &lt;/thead&gt;\n    &lt;tbody&gt;\n        &#123;&#123;each list as item index&#125;&#125;\n            &lt;tr&gt;\n                &lt;td&gt;&#123;&#123;=item.fixed1&#125;&#125;&lt;/td&gt;\n                &lt;td&gt;&#123;&#123;=item.fixed2&#125;&#125;&lt;/td&gt;\n                &lt;td&gt;&#123;&#123;=item.fixed3&#125;&#125;&lt;/td&gt;\n            &lt;/tr&gt;\n        &#123;&#123;/each&#125;&#125;\n    &lt;/tbody&gt;\n&lt;/table&gt;\n&lt;!-- 滚动列 --&gt;\n&lt;table class="table" center="true" width="1200"&gt; \n    &lt;thead&gt;\n        &lt;tr&gt;\n            &#123;&#123;each groups as group&#125;&#125;\n                &lt;th class="field-group" \n                    colspan="&#123;&#123;=group.fields.length&#125;&#125;"&gt;\n                    &lt;div class="group-name"&gt;\n                        &#123;&#123;=group.name&#125;&#125;\n                    &lt;/div&gt;\n                &lt;/th&gt;\n            &#123;&#123;/each&#125;&#125;\n        &lt;/tr&gt;\n        &lt;tr&gt;\n            &#123;&#123;each groups as group&#125;&#125;\n                &#123;&#123;each group.fields as field&#125;&#125;\n                &lt;th class="field-item"&gt;\n                    指标&#123;&#123;=field&#125;&#125;\n                    &lt;span sort-trigger="&#123;&#123;=field&#125;&#125;"&gt;&lt;/span&gt;\n                &lt;/th&gt;\n                &#123;&#123;/each&#125;&#125;\n            &#123;&#123;/each&#125;&#125;\n        &lt;/tr&gt;\n    &lt;/thead&gt;\n    &lt;tbody&gt;\n        &#123;&#123;each list as item index&#125;&#125;\n            &lt;tr class="&#123;&#123;= (index+1==list.length) ? \'last-tr\' : \'\'&#125;&#125;"&gt;\n                &#123;&#123;each groups as group&#125;&#125;\n                    &#123;&#123;each group.fields as field&#125;&#125;\n                    &lt;td&gt;&#123;&#123;=format(item[field])&#125;&#125;&lt;/td&gt;\n                    &#123;&#123;/each&#125;&#125;\n                &#123;&#123;/each&#125;&#125;\n            &lt;/tr&gt;\n        &#123;&#123;/each&#125;&#125;\n    &lt;/tbody&gt;\n&lt;/table&gt;\n&lt;/mx-table&gt;</pre></div><div mxa="_zs_gallerydP:j" class="_zs_gallery___test___layout_-eg-desc _zs_gallery___test___layout_-half _zs_gallery___test___layout_-half-right"><div mxs="_zs_gallerydP:d" class="_zs_gallery___test___layout_-eg-title">JS Code</div><div class="_zs_gallery___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:2})" mx-view="mx-copy/index?copyNode=';
    $line = 142;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_2"><span mxa="_zs_gallerydP:k" class="_zs_gallery___test___layout_-desc-tip">';
    $line = 144;
    $art = '!text2';
    ;
    $p += ($expr = '<%!text2%>', $n(text2)) + '</span><i mxs="_zs_gallerydP:c" class="mc-iconfont _zs_gallery___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="';
    $line = 147;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_2">\nlet Magix = require(\'magix\');\nlet Sort = require(\'@../sort\');\nlet $ = require(\'$\');\n\nmodule.exports = Magix.View.extend(&#123;\n    tmpl: \'@index.html\',\n    mixins: [Sort],\n    init() &#123;\n        this.observeLocation([\'orderField\', \'orderBy\']);\n    &#125;,\n    render() &#123;\n        let that = this;\n\n        let groups = [&#123;\n            name: \'组1\',\n            fields: [\'field1\', \'field2\']\n        &#125;, &#123;\n            name: \'组2\',\n            fields: [\'field3\', \'field4\', \'field5\', \'field6\']\n        &#125;, &#123;\n            name: \'组3\',\n            fields: [\'field7\', \'field8\', \'field9\']\n        &#125;]\n        let len = 0;\n        groups.forEach(group =&gt; &#123;\n            len += group.fields.length;\n        &#125;)\n\n        that.updater.digest(&#123;\n            list: that.sort(that.getList()),\n            groups,\n            len,\n            format: (val) =&gt; &#123;\n                if (!val) &#123;\n                    return \'-\';\n                &#125;\n                return val;\n            &#125;\n        &#125;);\n    &#125;,\n    getList() &#123;\n        let list = [];\n        for (var i = 0; i &lt; 5; i++) &#123;\n            let empty = (i == 2 || i == 4);\n            let origin = &#123;\n                fixed1: Magix.guid(\'fixed1-\'),\n                fixed2: Magix.guid(\'fixed2-\'),\n                fixed3: Magix.guid(\'fixed3-\'),\n                field1: empty ? 0 : (i + 9000),\n                field2: empty ? 0 : (i + 3000),\n                field3: empty ? 0 : (i + 1000),\n                field4: i + 412,\n                field5: i + 512,\n                field6: i + 612,\n                field7: i + 7,\n                field8: i + 8,\n                field9: i + 2\n            &#125;\n\n            let item = $.extend(true, &#123;&#125;, origin);\n            list.push(item);\n        &#125;\n        return list;\n    &#125;\n&#125;);\n            </pre></div></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-table/__test__/8.html';
    throw msg;
} return $p; },
    mixins: [Sort],
    init: function () {
        var that = this;
        that.updater.set({
            viewId: that.id,
            text1: CopyText,
            text2: CopyText
        });
        that.observeLocation(['orderField', 'orderBy']);
    },
    render: function () {
        var that = this;
        var groups = [{
                name: '组1',
                fields: ['field1', 'field2']
            }, {
                name: '组2',
                fields: ['field3', 'field4', 'field5', 'field6']
            }, {
                name: '组3',
                fields: ['field7', 'field8', 'field9']
            }];
        var len = 0;
        groups.forEach(function (group) {
            len += group.fields.length;
        });
        that.updater.digest({
            list: that.sort(that.getList()),
            groups: groups,
            len: len,
            format: function (val) {
                if (!val) {
                    return '-';
                }
                return val;
            }
        });
    },
    getList: function () {
        var list = [];
        for (var i = 0; i < 5; i++) {
            var empty = (i == 2 || i == 4);
            var origin = {
                fixed1: Magix.guid('fixed1-'),
                fixed2: Magix.guid('fixed2-'),
                fixed3: Magix.guid('fixed3-'),
                field1: empty ? 0 : (i + 9000),
                field2: empty ? 0 : (i + 3000),
                field3: empty ? 0 : (i + 1000),
                field4: i + 412,
                field5: i + 512,
                field6: i + 612,
                field7: i + 7,
                field8: i + 8,
                field9: i + 2
            };
            var item = $.extend(true, {}, origin);
            list.push(item);
        }
        return list;
    }
});

});