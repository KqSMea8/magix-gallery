/*
    generate by magix-combine@3.11.26: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-popover/base",["magix","$"],(require,exports,module)=>{
/*Magix,$*/

var Magix = require("magix");
var Vframe = Magix.Vframe;
var $ = require("$");
module.exports = Magix.View.extend({
    constants: {
        showDelay: 100,
        hideDelay: 200,
        classNames: {
            bottomLeft: '_zs_gallery_mx-popover_index_-bottom-left',
            bottomRight: '_zs_gallery_mx-popover_index_-bottom-right',
            bottomCenter: '_zs_gallery_mx-popover_index_-bottom-center',
            topLeft: '_zs_gallery_mx-popover_index_-top-left',
            topRight: '_zs_gallery_mx-popover_index_-top-right',
            topCenter: '_zs_gallery_mx-popover_index_-top-center',
            leftTop: '_zs_gallery_mx-popover_index_-left-top',
            leftBottom: '_zs_gallery_mx-popover_index_-left-bottom',
            leftCenter: '_zs_gallery_mx-popover_index_-left-center',
            rightTop: '_zs_gallery_mx-popover_index_-right-top',
            rightBottom: '_zs_gallery_mx-popover_index_-right-bottom',
            rightCenter: '_zs_gallery_mx-popover_index_-right-center'
        }
    },
    bindScroll: function () {
        var me = this;
        var scrollWrapper = me['@{scroll.wrapper}'];
        if (!scrollWrapper) {
            return;
        }
        var wrapper;
        if ((typeof scrollWrapper == 'string') && !(/^#/.test(scrollWrapper)) && !(/^\./.test(scrollWrapper))) {
            wrapper = $('#' + scrollWrapper);
        }
        else {
            wrapper = $(scrollWrapper);
        }
        wrapper.scroll(function () {
            if (me['@{pos.show}']) {
                me['@{setPos}']();
            }
        });
    },
    '@{setPos}': function () {
        var me = this;
        var oNode = me['@{owner.node}'];
        var popNode = $('#popover_' + me.id);
        if (!popNode || !popNode.length) {
            return;
        }
        var width = oNode.outerWidth();
        var height = oNode.outerHeight();
        var offset = oNode.offset();
        var rWidth = popNode.outerWidth();
        var rHeight = popNode.outerHeight();
        // 默认下方居中
        var top = offset.top + 10, left = offset.left - (rWidth - width) / 2;
        // 可选组合：
        //     下右中左
        //     上右中左
        //     右上中下
        //     左上中下
        var placement = me['@{pos.placement}'], align = me['@{pos.align}'];
        var place = placement + '_' + align;
        switch (place) {
            case 'top_left':
                top = offset.top - rHeight - 10;
                left = offset.left;
                break;
            case 'top_center':
                top = offset.top - rHeight - 10;
                left = offset.left - (rWidth - width) / 2;
                break;
            case 'top_right':
                top = offset.top - rHeight - 10;
                left = offset.left + width - rWidth;
                break;
            case 'bottom_left':
                top = offset.top + height + 10;
                left = offset.left;
                break;
            case 'bottom_center':
                top = offset.top + height + 10;
                left = offset.left - (rWidth - width) / 2;
                break;
            case 'bottom_right':
                top = offset.top + height + 10;
                left = offset.left + width - rWidth;
                break;
            case 'left_top':
                top = offset.top;
                left = offset.left - rWidth - 10;
                break;
            case 'left_center':
                top = offset.top - (rHeight - height) / 2;
                left = offset.left - rWidth - 10;
                break;
            case 'left_bottom':
                top = offset.top - (rHeight - height);
                left = offset.left - rWidth - 10;
                break;
            case 'right_top':
                top = offset.top;
                left = offset.left + width + 10;
                break;
            case 'right_center':
                top = offset.top - (rHeight - height) / 2;
                left = offset.left + width + 10;
                break;
            case 'right_bottom':
                top = offset.top - (rHeight - height);
                left = offset.left + width + 10;
                break;
        }
        var customOffset = me['@{pos.offset}'] || {};
        if (!$.isEmptyObject(customOffset)) {
            left += customOffset.left;
            top += customOffset.top;
        }
        popNode.css({
            textAlign: me['@{text.align}'],
            left: left,
            top: top
        });
        return popNode;
    },
    /**
     * 页面滚动的时候
     * 如果popover展开则重新定位popover
     */
    '$win<scroll>': function (e) {
        var me = this;
        if (me['@{pos.show}']) {
            me['@{setPos}']();
        }
    },
    /**
     * 浮层中使用dialog
     */
    '$doc<dialogScolll>': function (e) {
        var me = this;
        if (me['@{pos.show}']) {
            me['@{setPos}']();
        }
    }
});

});