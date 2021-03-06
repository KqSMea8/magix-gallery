/*
    generate by magix-combine@3.11.26: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("__test__/other/update",["magix","$"],(require,exports,module)=>{
/*Magix,$*/

var Magix = require("magix");
var $ = require("$");
Magix.applyStyle("_zs_gallery___test___other_update_","/* @dependent: ./index.less */\n._zs_gallery___test___other_update_-mx-shadow {\n  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.08);\n  border: 1px solid #f5f5f6;\n}\n/*用于覆盖bp的品牌色信息*/\n._zs_gallery___test___other_update_-update {\n  position: relative;\n}\n._zs_gallery___test___other_update_-update::before {\n  content: '';\n  position: absolute;\n  top: 12px;\n  left: 0;\n  width: 0;\n  height: 100%;\n  border-left: 2px solid #e6e6e6;\n}\n._zs_gallery___test___other_update_-update:last-child::before {\n  display: none;\n}\n._zs_gallery___test___other_update_-tag,\n._zs_gallery___test___other_update_-vi {\n  display: inline-block;\n  padding: 0 10px;\n  height: 20px;\n  line-height: 18px;\n  background-color: #f3f4f5;\n  border: 1px solid #eee;\n  text-align: center;\n  border-radius: 2px;\n  overflow: hidden;\n  vertical-align: middle;\n}\n._zs_gallery___test___other_update_-tag {\n  margin: 0 3px;\n}\n._zs_gallery___test___other_update_-ver {\n  position: relative;\n}\n._zs_gallery___test___other_update_-ver::before {\n  content: '';\n  position: absolute;\n  top: 50%;\n  left: -4px;\n  width: 10px;\n  height: 10px;\n  margin-top: -5px;\n  border: 2px solid #e6e6e6;\n  background-color: #fff;\n  border-radius: 50%;\n}\n._zs_gallery___test___other_update_-ver ._zs_gallery___test___other_update_-vt {\n  display: inline-block;\n  font-size: 18px;\n  overflow: hidden;\n  vertical-align: middle;\n}\n._zs_gallery___test___other_update_-ver ._zs_gallery___test___other_update_-vi {\n  margin: 0 10px;\n}\n._zs_gallery___test___other_update_-dot {\n  position: relative;\n  padding-left: 10px;\n}\n._zs_gallery___test___other_update_-dot::before {\n  content: '';\n  position: absolute;\n  top: 50%;\n  left: 0;\n  width: 4px;\n  height: 4px;\n  margin-top: -2px;\n  border: 1px solid #ccc;\n  border-radius: 50%;\n}\n._zs_gallery___test___other_update_-line {\n  line-height: 28px;\n}\n._zs_gallery___test___other_update_-line-icon {\n  position: relative;\n  top: 2px;\n  margin-right: 5px;\n  font-size: 18px;\n}\n");
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
} ; var $g = '', $_temp, $p = '', list = $$.list; var $expr, $art, $line; try {
    $line = 1;
    $art = 'each list as item';
    ;
    $expr = '<%for (var $art_ihsrqlvkhtv$art_i = 0, $art_cwlrnc$art_c = list.length; $art_ihsrqlvkhtv$art_i < $art_cwlrnc$art_c; $art_ihsrqlvkhtv$art_i++) {    var item = list[$art_ihsrqlvkhtv$art_i]%>';
    for (var $art_ihsrqlvkhtv$art_i = 0, $art_cwlrnc$art_c = list.length; $art_ihsrqlvkhtv$art_i < $art_cwlrnc$art_c; $art_ihsrqlvkhtv$art_i++) {
        var item = list[$art_ihsrqlvkhtv$art_i];
        $p += '<div mxa="_zs_galleryg:_" class="_zs_gallery___test___other_update_-update"><div mxa="_zs_galleryg:a" class="_zs_gallery___test___other_update_-ver pl20"><span mxa="_zs_galleryg:b" class="_zs_gallery___test___other_update_-vt">';
        $line = 4;
        $art = '=item.ver';
        ;
        $p += ($expr = '<%=item.ver%>', $e(item.ver)) + '</span><span mxa="_zs_galleryg:c" class="_zs_gallery___test___other_update_-vi">';
        $line = 5;
        $art = '=item.time';
        ;
        $p += ($expr = '<%=item.time%>', $e(item.time)) + '</span></div><div mxa="_zs_galleryg:d" class="pt10 pb30">';
        $line = 8;
        $art = 'each item.subs as s';
        ;
        $expr = '<%for (var $art_ipfmirreu$art_i = 0, $art_objbirqxfdrl$art_obj = item.subs, $art_cwwefabq$art_c = $art_objbirqxfdrl$art_obj.length; $art_ipfmirreu$art_i < $art_cwwefabq$art_c; $art_ipfmirreu$art_i++) {        var s = $art_objbirqxfdrl$art_obj[$art_ipfmirreu$art_i]%>';
        for (var $art_ipfmirreu$art_i = 0, $art_objbirqxfdrl$art_obj = item.subs, $art_cwwefabq$art_c = $art_objbirqxfdrl$art_obj.length; $art_ipfmirreu$art_i < $art_cwwefabq$art_c; $art_ipfmirreu$art_i++) {
            var s = $art_objbirqxfdrl$art_obj[$art_ipfmirreu$art_i];
            $p += '<div mxa="_zs_galleryg:e" class="pl20">';
            $line = 10;
            $art = 'if s.type == \'notice\'';
            ;
            $expr = '<%if (s.type == \'notice\') {%>';
            if (s.type == 'notice') {
                ;
                $p += '<div mxa="_zs_galleryg:f" class="_zs_gallery___test___other_update_-line"><i mxs="_zs_galleryg:_" class="mc-iconfont _zs_gallery___test___other_update_-line-icon color-warn">&#xe66f;</i><span mxa="_zs_galleryg:g" class="fontsize-14">';
                $line = 13;
                $art = '=(s.title ? s.title : \'重要通知\')';
                ;
                $p += ($expr = '<%=(s.title ? s.title : \'重要通知\')%>', $e((s.title ? s.title : '重要通知'))) + '</span></div>';
                $line = 15;
                $art = '/if';
                ;
                $expr = '<%}%>';
            }
            ;
            $p += ' ';
            $line = 17;
            $art = 'if s.type == \'bug\'';
            ;
            $expr = '<%if (s.type == \'bug\') {%>';
            if (s.type == 'bug') {
                ;
                $p += '<div mxa="_zs_galleryg:h" class="_zs_gallery___test___other_update_-line"><i mxs="_zs_galleryg:a" class="mc-iconfont _zs_gallery___test___other_update_-line-icon color-red">&#xe63d;</i><span mxa="_zs_galleryg:i" class="fontsize-14">';
                $line = 20;
                $art = '=(s.title ? s.title : \'bug修复\')';
                ;
                $p += ($expr = '<%=(s.title ? s.title : \'bug修复\')%>', $e((s.title ? s.title : 'bug修复'))) + '</span></div>';
                $line = 22;
                $art = '/if';
                ;
                $expr = '<%}%>';
            }
            ;
            $p += ' ';
            $line = 24;
            $art = 'if s.type == \'add\'';
            ;
            $expr = '<%if (s.type == \'add\') {%>';
            if (s.type == 'add') {
                ;
                $p += '<div mxa="_zs_galleryg:j" class="_zs_gallery___test___other_update_-line"><i mxs="_zs_galleryg:b" class="mc-iconfont _zs_gallery___test___other_update_-line-icon color-green">&#xe616;</i><span mxa="_zs_galleryg:k" class="fontsize-14">';
                $line = 27;
                $art = '=(s.title ? s.title : \'功能上新\')';
                ;
                $p += ($expr = '<%=(s.title ? s.title : \'功能上新\')%>', $e((s.title ? s.title : '功能上新'))) + '</span></div>';
                $line = 29;
                $art = '/if';
                ;
                $expr = '<%}%>';
            }
            ;
            $p += ' ';
            $line = 31;
            $art = 'each s.subs as ss';
            ;
            $expr = '<%for (var $art_ijbvif$art_i = 0, $art_objaasx$art_obj = s.subs, $art_cagxfsimwr$art_c = $art_objaasx$art_obj.length; $art_ijbvif$art_i < $art_cagxfsimwr$art_c; $art_ijbvif$art_i++) {            var ss = $art_objaasx$art_obj[$art_ijbvif$art_i]%>';
            for (var $art_ijbvif$art_i = 0, $art_objaasx$art_obj = s.subs, $art_cagxfsimwr$art_c = $art_objaasx$art_obj.length; $art_ijbvif$art_i < $art_cagxfsimwr$art_c; $art_ijbvif$art_i++) {
                var ss = $art_objaasx$art_obj[$art_ijbvif$art_i];
                $p += '<div mxa="_zs_galleryg:l" class="pl20"><div mxa="_zs_galleryg:m" class="_zs_gallery___test___other_update_-line _zs_gallery___test___other_update_-dot">';
                $line = 33;
                $art = '!ss.title';
                ;
                $p += ($expr = '<%!ss.title%>', $n(ss.title)) + '</div>';
                $line = 34;
                $art = 'if ss.content';
                ;
                $expr = '<%if (ss.content) {%>';
                if (ss.content) {
                    ;
                    $p += ' ';
                    $line = 35;
                    $art = '!ss.content';
                    ;
                    $p += ($expr = '<%!ss.content%>', $n(ss.content)) + ' ';
                    $line = 36;
                    $art = '/if';
                    ;
                    $expr = '<%}%>';
                }
                ;
                $p += ' ';
                $line = 38;
                $art = 'if ss.subs && (ss.subs.length > 0)';
                ;
                $expr = '<%if (ss.subs && (ss.subs.length > 0)) {%>';
                if (ss.subs && (ss.subs.length > 0)) {
                    ;
                    $p += '<div mxa="_zs_galleryg:n" class="pl20">';
                    $line = 40;
                    $art = 'each ss.subs as sss';
                    ;
                    $expr = '<%for (var $art_icjpjots$art_i = 0, $art_objobdppzcij$art_obj = ss.subs, $art_czjeqjfwlbd$art_c = $art_objobdppzcij$art_obj.length; $art_icjpjots$art_i < $art_czjeqjfwlbd$art_c; $art_icjpjots$art_i++) {                    var sss = $art_objobdppzcij$art_obj[$art_icjpjots$art_i]%>';
                    for (var $art_icjpjots$art_i = 0, $art_objobdppzcij$art_obj = ss.subs, $art_czjeqjfwlbd$art_c = $art_objobdppzcij$art_obj.length; $art_icjpjots$art_i < $art_czjeqjfwlbd$art_c; $art_icjpjots$art_i++) {
                        var sss = $art_objobdppzcij$art_obj[$art_icjpjots$art_i];
                        $p += '<div mxa="_zs_galleryg:o" class="_zs_gallery___test___other_update_-line _zs_gallery___test___other_update_-dot">';
                        $line = 41;
                        $art = '!sss';
                        ;
                        $p += ($expr = '<%!sss%>', $n(sss)) + '</div>';
                        $line = 42;
                        $art = '/each';
                        ;
                        $expr = '<%}%>';
                    }
                    ;
                    $p += '</div>';
                    $line = 44;
                    $art = '/if';
                    ;
                    $expr = '<%}%>';
                }
                ;
                $p += '</div>';
                $line = 46;
                $art = '/each';
                ;
                $expr = '<%}%>';
            }
            ;
            $p += '</div>';
            $line = 48;
            $art = '/each';
            ;
            $expr = '<%}%>';
        }
        ;
        $p += '</div></div>';
        $line = 51;
        $art = '/each';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += '<div mxs="_zs_galleryg:c" class="_zs_gallery___test___other_update_-update"><div class="_zs_gallery___test___other_update_-ver pl20"><span class="_zs_gallery___test___other_update_-vt">历史版本</span><span class="_zs_gallery___test___other_update_-vi">···</span></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:__test__/other/update.html';
    throw msg;
} return $p; },
    render: function () {
        var list = [{
                ver: '1.2.9',
                time: '2019-01-04',
                subs: [{
                        type: 'add',
                        subs: [{
                                title: 'mx-indics：支持指标分组。<a href="#!/indics/index" class="color-brand">查看详情</a>'
                            }, {
                                title: 'mx-gtip：全局提示组件。<a href="#!/gtip/index" class="color-brand">查看详情</a>'
                            }]
                    }]
            }, {
                ver: '1.2.8',
                time: '2018-12-28',
                subs: [{
                        type: 'notice',
                        title: '实现调整',
                        subs: [{
                                title: 'mx-grid.title：调整 ${content} 位置，自行控制内容的浮动'
                            }, {
                                title: 'mx-dialog（mxModal）：全屏右出浮层卡片式'
                            }]
                    }, {
                        type: 'add',
                        subs: [{
                                title: 'mx-dropdown：选项可配置tip提示信息'
                            }]
                    }]
            }, {
                ver: '1.2.7',
                time: '2018-12-27',
                subs: [{
                        type: 'bug',
                        subs: [{
                                title: 'mx-switch：修正 mode=text 样式'
                            }, {
                                title: 'mx-tabs.box：修正 mode=hollow 样式'
                            }]
                    }]
            }, {
                ver: '1.2.6',
                time: '2018-12-27',
                subs: [{
                        type: 'add',
                        subs: [{
                                title: 'mx-form支持email校验，包括指定邮箱的校验'
                            }, {
                                title: 'mx-loading支持自定义padding，example：&lt;mx-loading padding="40px" /&gt;'
                            }]
                    }, {
                        type: 'bug',
                        subs: [{
                                title: 'mx-dialog：修复存在滚动条的情况下，打开浮层页面抖动问题'
                            }, {
                                title: 'mx-popover',
                                subs: [
                                    '异常情况说明：tag="a"时，a标签的原生属性type与组件定义的type冲突，此时若设置type="dark"失效',
                                    '如何解决：请使用 <span class="color-brand">view-type</span> 与原生属性type区分来解决该问题'
                                ]
                            }]
                    }, {
                        type: 'notice',
                        title: '实现调整',
                        subs: [{
                                title: '去掉magix combine里的mxMap配置，打散到组件的_config中'
                            }, {
                                title: 'mx-checkbox，包装indeterminate状态调整为只负责对样式进行控制，不修改属性；组件内取消dom操作，避免状态不一致。<a href="#!/checkbox/index" class="color-brand">查看详情</a>'
                            }, {
                                title: 'mx-dropdown.multiple中分组批量选择checkbox调整为mx-checkbox，保留中间态，优化交互'
                            }]
                    }]
            }, {
                ver: '1.2.5',
                time: '2018-12-24',
                subs: [{
                        type: 'bug',
                        title: 'mx-grid',
                        subs: [{
                                title: '修复gutter在动态渲染mx-grid.col时不生效的问题，使用css3变量保留gutter'
                            }]
                    }]
            }, {
                ver: '1.2.4',
                time: '2018-12-24',
                subs: [{
                        type: 'bug',
                        title: 'btn/btn-brand',
                        subs: [{
                                title: '取消渐变按钮的border，避免出现如下情况：',
                                content: '<div class="pl10"><img width="108" src="https://img.alicdn.com/tfs/TB1dtx6xYrpK1RjSZTEXXcWAVXa-500-158.png" /></div>'
                            }]
                    }]
            }, {
                ver: '1.2.3',
                time: '2018-12-24',
                subs: [{
                        type: 'notice',
                        title: '样式细节调整',
                        subs: [{
                                title: '统一所有下拉选项样式，默认态，hover态，选中态，禁选态'
                            }, {
                                title: 'mx-grid细节调整：mx-grid.title字体，间距调整；mx-grid.body默认加clearfix；'
                            }, {
                                title: '统一规范的表单样式，<a href="#!/form/style" class="color-brand">查看详情</a>'
                            }]
                    }]
            }, {
                ver: '1.2.2',
                time: '2018-12-21',
                subs: [{
                        type: 'add',
                        subs: [{
                                title: '全屏右出浮层，<a href="#!/dialog/modal" class="color-brand">查看详情</a>'
                            }, {
                                title: '布局组件，<a href="#!/grid/index" class="color-brand">查看详情</a>'
                            }, {
                                title: 'mx-taginput增加配置max，可限制选择个数上限'
                            }]
                    }, {
                        type: 'notice',
                        title: '全新视觉规范，组件相关调整平滑升级',
                        subs: [{
                                title: '默认按钮样式提取为变量，可在项目中覆盖配置 @btn-text，@btn-text-hover，@btn-border，@btn-border-hover，@btn-bg，@btn-bg-hover'
                            }, {
                                title: '指标默认配置及选择排序（mx-indics）浮层改成全屏右出，<a href="#!/indics/index" class="color-brand">查看详情</a>'
                            }, {
                                title: '开关（mx-switch）增加文字显示版，<a href="#!/switch/index" class="color-brand">查看详情</a>'
                            }, {
                                title: '盒状分组（mx-tabs.box）增加空心显示显示版，<a href="#!/tabs/box" class="color-brand">查看详情</a>'
                            }]
                    }]
            }, {
                ver: '1.2.1',
                time: '2018-12-06',
                subs: [{
                        type: 'add',
                        title: '功能全概览',
                        subs: [{
                                title: '表单',
                                subs: [
                                    '双向绑定',
                                    '丰富的校验类型：必填，checkbox，radio，dropdown必选，refresh，动态添加，正则，字个数，字符个数，数字，数字范围，节点不重复，节点一致等等',
                                    '支持警告类提示场景'
                                ]
                            }, {
                                title: '表格',
                                subs: [
                                    '支持左右分栏，操作项分行，大数据量下依然保持页面简介明了',
                                    '表头可相对任意容器吸顶',
                                    '覆盖了常见的批量选中操作行，排序功能',
                                    '支持普通翻页查看大量数据'
                                ]
                            }, {
                                title: 'dropdown：单选多选自由切换，多选可限制选择上限'
                            }, {
                                title: '日历',
                                subs: [
                                    '单日，单日对比，可细节到时分秒',
                                    '时间段，可细节到时分秒'
                                ]
                            }, {
                                title: '分页：快捷切换分页数，页面；可限制为顺序翻页'
                            }, {
                                title: '分组',
                                subs: [
                                    '盒状分组，常适用于页面筛选',
                                    '底边线分组，常适用于一级分组标题'
                                ]
                            }, {
                                title: '内容区域可编辑：支持自定义模板，各种检验轻松加'
                            }, {
                                title: '快捷搜索',
                                subs: [
                                    '单类型搜索，多类型搜索均支持',
                                    '单选，多选自由选中',
                                    '动态加载可搜索内容'
                                ]
                            }, {
                                title: '开关'
                            }, {
                                title: '树形结构',
                                subs: [
                                    '支持级联显示再单选',
                                    '平铺单选多选任意挑',
                                    '内容过长时可展开收起',
                                    '只读'
                                ]
                            }, {
                                title: '标签选择'
                            }, {
                                title: '更多菜单：hover展示，点击展示，右键显示任意选'
                            }, {
                                title: '滑块选择：单值或者范围'
                            }, {
                                title: '指标默认配置及选择排序'
                            }, {
                                title: '状态切换与显示：支持icon或者dropdown两种形式'
                            }, {
                                title: '多样提示反馈：二次确认，hover小提示框，loading；对接集团钉钉，旺旺，万象等等'
                            }, {
                                title: '缩略图和预览：支持图片，视频，html，文件等多种形式，实现懒加载，优化性能'
                            }, {
                                title: '分步流程：侧边导航，顶部导航，将复杂流程简单化'
                            }, {
                                title: '常用样式：打标，提示公告，评分，空状态，进度比例，各种动效等等'
                            }, {
                                title: '业务组件：',
                                subs: [
                                    '阿里妈妈通用吊顶，吊底',
                                    '地域选择',
                                    '时段选择'
                                ]
                            }]
                    }]
            }];
        this.updater.digest({
            list: list
        });
    }
});

});