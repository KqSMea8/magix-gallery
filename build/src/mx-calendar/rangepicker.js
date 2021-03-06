/*
    generate by magix-combine@3.11.26: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-calendar/rangepicker",["magix","$","../mx-monitor/index","mx-calendar/util","mx-medusa/util","./range"],(require,exports,module)=>{
/*Magix,$,Monitor,Util,I18n*/
require("./range");
var Magix = require("magix");
var $ = require("$");
var Monitor = require("../mx-monitor/index");
var Util = require("mx-calendar/util");
var DateFormat = Util.dateFormat;
var GetDefaultDate = Util.getDefaultDate;
var GetQuickInfos = Util.getQuickInfos;
var GetOffsetDate = Util.getOffsetDate;
var I18n = require("mx-medusa/util");
Magix.applyStyle("_zs_gallery_mx-calendar_rangepicker_","/* @dependent: ./index.less */\n._zs_gallery_mx-calendar_rangepicker_-mx-shadow {\n  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.08);\n  border: 1px solid #f5f5f6;\n}\n/*用于覆盖bp的品牌色信息*/\n/* 动画结束停在最后一帧 */\n/**\n* 渐显下拉动画\n*/\n@keyframes _zs_gallery_mx-calendar_rangepicker_-fade-in-down {\n  0% {\n    transform: translate(0, -20%);\n    -ms-transform: translate(0, -20%);\n    -moz-transform: translate(0, -20%);\n    -webkit-transform: translate(0, -20%);\n    -o-transform: translate(0, -20%);\n    opacity: 0;\n  }\n  100% {\n    transform: translate(0, 0);\n    -ms-transform: translate(0, 0);\n    -moz-transform: translate(0, 0);\n    -webkit-transform: translate(0, 0);\n    -o-transform: translate(0, 0);\n    opacity: 1;\n  }\n}\n@-webkit-keyframes _zs_gallery_mx-calendar_rangepicker_-fade-in-down {\n  0% {\n    transform: translate(0, -20%);\n    -ms-transform: translate(0, -20%);\n    -moz-transform: translate(0, -20%);\n    -webkit-transform: translate(0, -20%);\n    -o-transform: translate(0, -20%);\n    opacity: 0;\n  }\n  100% {\n    transform: translate(0, 0);\n    -ms-transform: translate(0, 0);\n    -moz-transform: translate(0, 0);\n    -webkit-transform: translate(0, 0);\n    -o-transform: translate(0, 0);\n    opacity: 1;\n  }\n}\n/**\n* 渐显上拉动画\n*/\n@keyframes _zs_gallery_mx-calendar_rangepicker_-fade-in-up {\n  0% {\n    transform: translate(0, 20%);\n    -ms-transform: translate(0, 20%);\n    -moz-transform: translate(0, 20%);\n    -webkit-transform: translate(0, 20%);\n    -o-transform: translate(0, 20%);\n    opacity: 0;\n  }\n  100% {\n    transform: translate(0, 0);\n    -ms-transform: translate(0, 0);\n    -moz-transform: translate(0, 0);\n    -webkit-transform: translate(0, 0);\n    -o-transform: translate(0, 0);\n    opacity: 1;\n  }\n}\n@-webkit-keyframes _zs_gallery_mx-calendar_rangepicker_-fade-in-up {\n  0% {\n    transform: translate(0, 20%);\n    -ms-transform: translate(0, 20%);\n    -moz-transform: translate(0, 20%);\n    -webkit-transform: translate(0, 20%);\n    -o-transform: translate(0, 20%);\n    opacity: 0;\n  }\n  100% {\n    transform: translate(0, 0);\n    -ms-transform: translate(0, 0);\n    -moz-transform: translate(0, 0);\n    -webkit-transform: translate(0, 0);\n    -o-transform: translate(0, 0);\n    opacity: 1;\n  }\n}\n@keyframes _zs_gallery_mx-calendar_rangepicker_-suspension {\n  0% {\n    transform: translate(0, 0);\n    -ms-transform: translate(0, 0);\n    -moz-transform: translate(0, 0);\n    -webkit-transform: translate(0, 0);\n    -o-transform: translate(0, 0);\n  }\n  25% {\n    transform: translate(0, -15%);\n    -ms-transform: translate(0, -15%);\n    -moz-transform: translate(0, -15%);\n    -webkit-transform: translate(0, -15%);\n    -o-transform: translate(0, -15%);\n  }\n  75% {\n    transform: translate(0, 15%);\n    -ms-transform: translate(0, 15%);\n    -moz-transform: translate(0, 15%);\n    -webkit-transform: translate(0, 15%);\n    -o-transform: translate(0, 15%);\n  }\n  100% {\n    transform: translate(0, 0);\n    -ms-transform: translate(0, 0);\n    -moz-transform: translate(0, 0);\n    -webkit-transform: translate(0, 0);\n    -o-transform: translate(0, 0);\n  }\n}\n@-webkit-keyframes _zs_gallery_mx-calendar_rangepicker_-suspension {\n  0% {\n    transform: translate(0, 0);\n    -ms-transform: translate(0, 0);\n    -moz-transform: translate(0, 0);\n    -webkit-transform: translate(0, 0);\n    -o-transform: translate(0, 0);\n  }\n  25% {\n    transform: translate(0, -15%);\n    -ms-transform: translate(0, -15%);\n    -moz-transform: translate(0, -15%);\n    -webkit-transform: translate(0, -15%);\n    -o-transform: translate(0, -15%);\n  }\n  75% {\n    transform: translate(0, 15%);\n    -ms-transform: translate(0, 15%);\n    -moz-transform: translate(0, 15%);\n    -webkit-transform: translate(0, 15%);\n    -o-transform: translate(0, 15%);\n  }\n  100% {\n    transform: translate(0, 0);\n    -ms-transform: translate(0, 0);\n    -moz-transform: translate(0, 0);\n    -webkit-transform: translate(0, 0);\n    -o-transform: translate(0, 0);\n  }\n}\n/**\n * 按钮中间的loading点动画\n */\n@keyframes _zs_gallery_mx-calendar_rangepicker_-loading-dots {\n  0% {\n    transform: translate(0, 0);\n    -ms-transform: translate(0, 0);\n    -moz-transform: translate(0, 0);\n    -webkit-transform: translate(0, 0);\n    -o-transform: translate(0, 0);\n  }\n  25% {\n    transform: translate(0, 2px);\n    -ms-transform: translate(0, 2px);\n    -moz-transform: translate(0, 2px);\n    -webkit-transform: translate(0, 2px);\n    -o-transform: translate(0, 2px);\n  }\n  50% {\n    transform: translate(0, 0);\n    -ms-transform: translate(0, 0);\n    -moz-transform: translate(0, 0);\n    -webkit-transform: translate(0, 0);\n    -o-transform: translate(0, 0);\n  }\n  75% {\n    transform: translate(0, -2px);\n    -ms-transform: translate(0, -2px);\n    -moz-transform: translate(0, -2px);\n    -webkit-transform: translate(0, -2px);\n    -o-transform: translate(0, -2px);\n  }\n  100% {\n    transform: translate(0, 0);\n    -ms-transform: translate(0, 0);\n    -moz-transform: translate(0, 0);\n    -webkit-transform: translate(0, 0);\n    -o-transform: translate(0, 0);\n  }\n}\n@-webkit-keyframes _zs_gallery_mx-calendar_rangepicker_-loading-dots {\n  0% {\n    transform: translate(0, 0);\n    -ms-transform: translate(0, 0);\n    -moz-transform: translate(0, 0);\n    -webkit-transform: translate(0, 0);\n    -o-transform: translate(0, 0);\n  }\n  25% {\n    transform: translate(0, 2px);\n    -ms-transform: translate(0, 2px);\n    -moz-transform: translate(0, 2px);\n    -webkit-transform: translate(0, 2px);\n    -o-transform: translate(0, 2px);\n  }\n  50% {\n    transform: translate(0, 0);\n    -ms-transform: translate(0, 0);\n    -moz-transform: translate(0, 0);\n    -webkit-transform: translate(0, 0);\n    -o-transform: translate(0, 0);\n  }\n  75% {\n    transform: translate(0, -2px);\n    -ms-transform: translate(0, -2px);\n    -moz-transform: translate(0, -2px);\n    -webkit-transform: translate(0, -2px);\n    -o-transform: translate(0, -2px);\n  }\n  100% {\n    transform: translate(0, 0);\n    -ms-transform: translate(0, 0);\n    -moz-transform: translate(0, 0);\n    -webkit-transform: translate(0, 0);\n    -o-transform: translate(0, 0);\n  }\n}\n@keyframes _zs_gallery_mx-calendar_rangepicker_-loading-dots-rev {\n  0% {\n    transform: translate(0, 0);\n    -ms-transform: translate(0, 0);\n    -moz-transform: translate(0, 0);\n    -webkit-transform: translate(0, 0);\n    -o-transform: translate(0, 0);\n  }\n  25% {\n    transform: translate(0, -2px);\n    -ms-transform: translate(0, -2px);\n    -moz-transform: translate(0, -2px);\n    -webkit-transform: translate(0, -2px);\n    -o-transform: translate(0, -2px);\n  }\n  50% {\n    transform: translate(0, 0);\n    -ms-transform: translate(0, 0);\n    -moz-transform: translate(0, 0);\n    -webkit-transform: translate(0, 0);\n    -o-transform: translate(0, 0);\n  }\n  75% {\n    transform: translate(0, 2px);\n    -ms-transform: translate(0, 2px);\n    -moz-transform: translate(0, 2px);\n    -webkit-transform: translate(0, 2px);\n    -o-transform: translate(0, 2px);\n  }\n  100% {\n    transform: translate(0, 0);\n    -ms-transform: translate(0, 0);\n    -moz-transform: translate(0, 0);\n    -webkit-transform: translate(0, 0);\n    -o-transform: translate(0, 0);\n  }\n}\n@-webkit-keyframes _zs_gallery_mx-calendar_rangepicker_-loading-dots-rev {\n  0% {\n    transform: translate(0, 0);\n    -ms-transform: translate(0, 0);\n    -moz-transform: translate(0, 0);\n    -webkit-transform: translate(0, 0);\n    -o-transform: translate(0, 0);\n  }\n  25% {\n    transform: translate(0, -2px);\n    -ms-transform: translate(0, -2px);\n    -moz-transform: translate(0, -2px);\n    -webkit-transform: translate(0, -2px);\n    -o-transform: translate(0, -2px);\n  }\n  50% {\n    transform: translate(0, 0);\n    -ms-transform: translate(0, 0);\n    -moz-transform: translate(0, 0);\n    -webkit-transform: translate(0, 0);\n    -o-transform: translate(0, 0);\n  }\n  75% {\n    transform: translate(0, 2px);\n    -ms-transform: translate(0, 2px);\n    -moz-transform: translate(0, 2px);\n    -webkit-transform: translate(0, 2px);\n    -o-transform: translate(0, 2px);\n  }\n  100% {\n    transform: translate(0, 0);\n    -ms-transform: translate(0, 0);\n    -moz-transform: translate(0, 0);\n    -webkit-transform: translate(0, 0);\n    -o-transform: translate(0, 0);\n  }\n}\n[mx-view*=\"mx-calendar/rangepicker\"],\n[mx-view*=\"mx-calendar/datepicker\"] {\n  display: inline-block;\n  position: relative;\n  vertical-align: middle;\n}\n[mx-view*=\"mx-calendar/rangepicker\"] ._zs_gallery_mx-calendar_rangepicker_-rangepicker-wrapper,\n[mx-view*=\"mx-calendar/datepicker\"] ._zs_gallery_mx-calendar_rangepicker_-rangepicker-wrapper {\n  display: none;\n  position: absolute;\n  z-index: 1000;\n  min-width: 100%;\n}\n[mx-view*=\"mx-calendar/rangepicker\"] ._zs_gallery_mx-calendar_rangepicker_-rangepicker-wrapper._zs_gallery_mx-calendar_rangepicker_-open,\n[mx-view*=\"mx-calendar/datepicker\"] ._zs_gallery_mx-calendar_rangepicker_-rangepicker-wrapper._zs_gallery_mx-calendar_rangepicker_-open {\n  display: block;\n  -webkit-animation: _zs_gallery_mx-calendar_rangepicker_-fade-in-down 0.25s ease-out;\n          animation: _zs_gallery_mx-calendar_rangepicker_-fade-in-down 0.25s ease-out;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n}\n[mx-view*=\"mx-calendar/rangepicker\"] ._zs_gallery_mx-calendar_rangepicker_-rangepicker-input,\n[mx-view*=\"mx-calendar/datepicker\"] ._zs_gallery_mx-calendar_rangepicker_-rangepicker-input {\n  width: 100%;\n}\n._zs_gallery_mx-calendar_rangepicker_-result {\n  position: relative;\n}\n._zs_gallery_mx-calendar_rangepicker_-result._zs_gallery_mx-calendar_rangepicker_-result-left ._zs_gallery_mx-calendar_rangepicker_-center {\n  padding: 0 5px;\n}\n._zs_gallery_mx-calendar_rangepicker_-result._zs_gallery_mx-calendar_rangepicker_-result-center ._zs_gallery_mx-calendar_rangepicker_-center {\n  position: absolute;\n  top: 0;\n  left: 50%;\n  width: 36px;\n  height: 30px;\n  margin-left: -18px;\n  line-height: 30px;\n  text-align: center;\n}\n._zs_gallery_mx-calendar_rangepicker_-result._zs_gallery_mx-calendar_rangepicker_-result-center ._zs_gallery_mx-calendar_rangepicker_-co {\n  display: inline-block;\n  width: 50%;\n  text-align: center;\n}\n._zs_gallery_mx-calendar_rangepicker_-result._zs_gallery_mx-calendar_rangepicker_-result-center ._zs_gallery_mx-calendar_rangepicker_-co-left {\n  padding-right: 18px;\n}\n._zs_gallery_mx-calendar_rangepicker_-result._zs_gallery_mx-calendar_rangepicker_-result-center ._zs_gallery_mx-calendar_rangepicker_-co-right {\n  padding-left: 18px;\n}\n._zs_gallery_mx-calendar_rangepicker_-result._zs_gallery_mx-calendar_rangepicker_-vs ._zs_gallery_mx-calendar_rangepicker_-co-left {\n  color: #4d7fff;\n}\n._zs_gallery_mx-calendar_rangepicker_-result._zs_gallery_mx-calendar_rangepicker_-vs ._zs_gallery_mx-calendar_rangepicker_-co-right {\n  color: #14c9ce;\n}\n");
var Rangepicker = Magix.View.extend({
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
} ; var $g = '', $_temp, $p = '', viewId = $$.viewId, textAlign = $$.textAlign, rangeInfo = $$.rangeInfo, result = $$.result, show = $$.show, left = $$.left, top = $$.top; var $expr, $art, $line; try {
    $p += '<div class="input _zs_gallery_mx-calendar_rangepicker_-rangepicker-input" id="input_';
    $line = 1;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '" mx-click="' + $viewId + '@{toggle}()" mx-change="' + $viewId + '@{stop}()"><div class="_zs_gallery_mx-calendar_rangepicker_-result ';
    $line = 4;
    $art = '=textAlign';
    ;
    $p += ($expr = '<%=textAlign%>', $e(textAlign)) + ' ';
    $line = 4;
    $art = 'if rangeInfo.vs';
    ;
    $expr = '<%if (rangeInfo.vs) {%>';
    if (rangeInfo.vs) {
        ;
        $p += ' _zs_gallery_mx-calendar_rangepicker_-vs ';
        $line = 4;
        $art = '/if';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += '">';
    $line = 5;
    $art = 'if result.endStr';
    ;
    $expr = '<%if (result.endStr) {%>';
    if (result.endStr) {
        ;
        $p += '<span mxa="_zs_gallery):_" class="_zs_gallery_mx-calendar_rangepicker_-co _zs_gallery_mx-calendar_rangepicker_-co-left">';
        $line = 6;
        $art = '=result.startStr';
        ;
        $p += ($expr = '<%=result.startStr%>', $e(result.startStr)) + '</span><span mxa="_zs_gallery):a" class="_zs_gallery_mx-calendar_rangepicker_-center color-9">';
        $line = 7;
        $art = '=result.centetTip';
        ;
        $p += ($expr = '<%=result.centetTip%>', $e(result.centetTip)) + '</span><span mxa="_zs_gallery):b" class="_zs_gallery_mx-calendar_rangepicker_-co _zs_gallery_mx-calendar_rangepicker_-co-right">';
        $line = 8;
        $art = '=result.endStr';
        ;
        $p += ($expr = '<%=result.endStr%>', $e(result.endStr)) + '</span>';
        $line = 9;
        $art = 'else';
        ;
        $expr = '<%}else {%>';
    }
    else {
        ;
        $p += ' ';
        $line = 10;
        $art = '=result.startStr';
        ;
        $p += ($expr = '<%=result.startStr%>', $e(result.startStr)) + ' ';
        $line = 11;
        $art = '/if';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += '</div></div><div mxv="rangeInfo" class="_zs_gallery_mx-calendar_rangepicker_-rangepicker-wrapper ';
    $line = 15;
    $art = 'if show';
    ;
    $expr = '<%if (show) {%>';
    if (show) {
        ;
        $p += '_zs_gallery_mx-calendar_rangepicker_-open';
        $line = 15;
        $art = '/if';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += '" id="rpcnt_';
    $line = 15;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '" style="left:';
    $line = 16;
    $art = '=left';
    ;
    $p += ($expr = '<%=left%>', $e(left)) + 'px;top:';
    $line = 16;
    $art = '=top';
    ;
    $p += ($expr = '<%=top%>', $e(top)) + 'px;" mx-view="mx-calendar/range?configs=';
    $line = 17;
    $art = '@rangeInfo';
    ;
    $p += ($expr = '<%@rangeInfo%>', $i($$ref, rangeInfo)) + '" mx-change="' + $viewId + '@{range.picked}()" mx-cancel="' + $viewId + '@{hide}()"></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-calendar/rangepicker.html';
    throw msg;
} return $p; },
    init: function (extra) {
        var that = this;
        Monitor['@{setup}']();
        that.on('destroy', function () {
            Monitor['@{remove}'](that);
            Monitor['@{teardown}']();
        });
        //初始化时保存一份当前数据的快照
        that.updater.snapshot();
        that.assign(extra);
    },
    assign: function (extra) {
        var that = this;
        var altered = that.updater.altered();
        var centerClass = '_zs_gallery_mx-calendar_rangepicker_-result-center';
        var classes = {
            left: '_zs_gallery_mx-calendar_rangepicker_-result-left',
            center: centerClass
        };
        var textAlign = classes[extra.textAlign || 'center'] || centerClass;
        // vsEnable 是否可对比，默认关闭
        // vs 对比初始状态 
        // vsSingle 可对比情况下，关闭对比时是选择时间段还是单天
        var vsEnable = (/^true$/i).test(extra.vsenable) || false, vs = false;
        if (vsEnable) {
            vs = (/^true$/i).test(extra.vs) || false;
        }
        var vsSingle = vsEnable ? ((/^true$/i).test(extra.single) || false) : false;
        var timeType = extra.timeType; //可选时分秒
        var formatter = extra.formatter || ('YYYY-MM-dd' + (timeType ? ' hh:mm:ss' : ''));
        var dateType = extra.dateType; //可选年月日
        // 快捷选项
        var startDisabled = (/^true$/i).test(extra.startDisabled) || false; //开始时间是否可选
        var endDisabled = (/^true$/i).test(extra.endDisabled) || false; //结束时间是否可选
        var showShortcuts = !(/^false$/i).test(extra.shortcuts); // 默认开启快捷选项的
        var quickDates = showShortcuts ? (extra.shortkeys || ['today', 'yesterday', 'preWeekMon', 'lastestWeekMon', 'preMonth', 'lastestThisMonth']) : [];
        if (startDisabled) {
            // 开始时间禁止使用的时候，只允许使用动态计算的快捷日期
            // 动态计算的都是依据开始时间计算的
            showShortcuts = false;
            for (var i = 0; i < quickDates.length; i++) {
                if ((quickDates[i].indexOf('dynamic') < 0) && (quickDates[i].indexOf('forever') < 0)) {
                    quickDates.splice(i--, 1);
                }
            }
        }
        if (endDisabled) {
            // 结束时间禁止选择的时候，不允许使用快捷方式
            showShortcuts = false;
            quickDates = [];
        }
        var start = extra.start, end = extra.end, min = extra.min, max = extra.max;
        if (!start) {
            start = GetDefaultDate(min, max, formatter);
        }
        // 包含快捷方式不限的时候end=不限，不需默认初始化
        if (!end && (!showShortcuts || (quickDates.indexOf('forever') < 0))) {
            end = GetDefaultDate(min, max, formatter);
        }
        // 匹配是否为快捷日期
        var dateStart = new Date(DateFormat(start, formatter));
        var dateStartStr = DateFormat(dateStart, formatter);
        var dateEnd, dateEndStr;
        if (end == Util.foreverStr) {
            dateEnd = dateEndStr = Util.foreverStr;
        }
        else {
            dateEnd = new Date(DateFormat(end, formatter));
            dateEndStr = DateFormat(dateEnd, formatter);
        }
        var quickInfos = GetQuickInfos(quickDates, dateStartStr, formatter);
        var quickDateText, quickDateKey;
        // 可能匹配到多个
        for (var index = 0; index < quickInfos.length; index++) {
            var q = quickInfos[index];
            if (q.start == dateStartStr && q.end == dateEndStr) {
                quickDateText = q.text;
                quickDateKey = q.key;
            }
        }
        var dates = {
            start: dateStart,
            startStr: dateStartStr,
            end: dateEnd,
            endStr: dateEndStr,
            formatter: formatter,
            quickDateText: quickDateText,
            quickDateKey: quickDateKey
        };
        var rangeInfo = {
            min: min,
            max: max,
            timeType: timeType,
            dateType: dateType,
            formatter: formatter,
            quickDates: quickDates,
            quickGap: extra.quickGap,
            align: extra.align,
            vsEnable: vsEnable,
            vs: vs,
            vsSingle: vsSingle,
            startDisabled: startDisabled,
            endDisabled: endDisabled,
            dates: dates,
            disabledWeeks: extra.disabledWeeks || []
        };
        that.updater.set({
            viewId: that.id,
            rangeInfo: rangeInfo,
            textAlign: textAlign
        });
        // 双向绑定
        that['@{owner.node}'] = $('#' + that.id);
        that['@{owner.node}'].val(JSON.stringify({
            start: dates.startStr,
            end: dates.endStr,
            vs: vs
        }));
        if (!altered) {
            altered = that.updater.altered();
        }
        if (altered) {
            // 组件有更新，真个节点会全部需要重新初始化
            that.updater.snapshot();
            return true;
        }
        return false;
    },
    render: function () {
        this['@{fill.to.node}']();
    },
    '@{fill.to.node}': function () {
        var that = this;
        var rangeInfo = that.updater.get('rangeInfo');
        var dates = rangeInfo.dates, vs = rangeInfo.vs, vsSingle = rangeInfo.vsSingle, formatter = rangeInfo.formatter;
        var startStr = dates.startStr, endStr = dates.endStr, quickDateText = dates.quickDateText;
        var result = {
            centetTip: vs ? I18n['calendar.vs'] : I18n['calendar.to']
        };
        if (vs) {
            var today = DateFormat(GetOffsetDate(0), formatter);
            var yesterday = DateFormat(GetOffsetDate(-1), formatter);
            var map = {
                today: I18n['calendar.today'],
                yesterday: I18n['calendar.yesterday']
            };
            result.startStr = map[startStr] || startStr;
            result.endStr = map[endStr] || endStr;
        }
        else {
            // 非对比情况
            if (vsSingle) {
                // 选择单日
                result.startStr = startStr;
            }
            else {
                // 选择连续时间
                if (quickDateText) {
                    if (quickDateText == Util.foreverStr) {
                        // 不限的情况显示开始时间
                        result.startStr = startStr;
                        result.endStr = Util.foreverStr;
                    }
                    else {
                        result.startStr = quickDateText;
                    }
                }
                else {
                    result.startStr = startStr;
                    result.endStr = endStr;
                }
            }
        }
        that.updater.digest({
            result: result
        });
    },
    '@{stop}<change,focusin,focusout>': function (e) {
        if (!e.dates) {
            e.stopPropagation();
        }
    },
    '@{toggle}<click>': function (e) {
        e.preventDefault();
        var show = this.updater.get('show');
        if (show) {
            this['@{hide}']();
        }
        else {
            this['@{show}']();
        }
    },
    '@{show}': function () {
        var that = this;
        var updater = that.updater;
        var rangeInfo = updater.get('rangeInfo');
        var show = updater.get('show');
        if (!show) {
            updater.digest({
                show: true
            });
            var inputNode = $('#input_' + that.id), calNode = $('#rpcnt_' + that.id);
            var gap = 10;
            var left = 0, top = inputNode.outerHeight() + gap;
            if (rangeInfo.align == 'right') {
                left = inputNode.outerWidth() - calNode.outerWidth();
            }
            updater.digest({
                top: top,
                left: left
            });
            Monitor['@{add}'](that);
        }
    },
    '@{hide}': function () {
        var that = this;
        var show = that.updater.get('show');
        if (show) {
            that.updater.digest({
                show: false
            });
            Monitor['@{remove}'](that);
        }
    },
    '@{range.picked}<change>': function (e) {
        var that = this;
        e.stopPropagation();
        var rangeInfo = that.updater.get('rangeInfo');
        var dates = e.dates, vs = e.vs;
        Magix.mix(rangeInfo, {
            dates: dates,
            vs: vs
        });
        that['@{fill.to.node}']();
        that['@{hide}']();
        //支持多绑定
        var result = JSON.stringify({
            start: dates.startStr,
            end: dates.endStr,
            vs: vs
        });
        that['@{owner.node}'].val(result).trigger({
            type: 'change',
            start: dates.startStr,
            end: dates.endStr,
            vs: vs,
            dates: dates
        });
    },
    '@{hide}<cancel>': function (e) {
        e.stopPropagation();
        this['@{hide}']();
    },
    '@{inside}': function (node) {
        var that = this;
        var inView = Magix.inside(node, that.id) ||
            Magix.inside(node, that['@{owner.node}'][0]);
        if (!inView) {
            var children = that.owner.children();
            for (var i = children.length - 1; i >= 0; i--) {
                var child = Magix.Vframe.get(children[i]);
                if (child) {
                    inView = child.invoke('@{inside}', [node]);
                }
                if (inView)
                    break;
            }
        }
        return inView;
    }
});
module.exports = Rangepicker;

});