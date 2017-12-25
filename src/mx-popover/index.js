define("mx-popover/index",["magix","$"],(e,t,_)=>{var o=e("magix"),i=e("$");o.applyStyle("_D","._en{border-radius:4px;padding:0;-webkit-box-shadow:0 6px 8px rgba(51,51,51,.08);box-shadow:0 6px 8px rgba(51,51,51,.08);position:absolute;border:1px solid rgba(0,0,0,.1);display:none;max-width:276px;background-color:#fff}._eo{line-height:22px;padding:9px 14px}");var a;_.exports=o.View.extend({tmpl:{html:'<div class="_eo"><%!$$.content%></div>',subs:[]},init:function(e){var t=this;t.__I=e.placement||"right",t.__J=e.align,t.__dH=e.content||"",t.__cY=0|e.width,t.on("destroy",function(){t.__h.off("mouseenter mouseleave"),t.__dL&&t.__dL.off("mouseenter mouseleave").remove()})},render:function(){var e=this;e.endUpdate();var t=i("#"+e.id);e.__h=t,t.hover(function(){e.__dM(),e.__dN=setTimeout(e.wrapAsync(function(){e.__e()}),100)},function(){clearTimeout(e.__dN),e.__a()})},__dM:function(){var e=this;if(!e.__dL){var t="popover_"+e.id;e.__h.after('<div class="_en" id="'+t+'" />'),e.updater.to(t),e.updater.digest({content:e.__dH}),e.__dL=i("#"+t),e.__cY&&e.__dL.css({"max-width":e.__cY,width:e.__cY}),e.__dL.hover(function(){clearTimeout(e.__dN)},function(){e.__a()})}},content:function(e){var t=this;if(!e)return t.__dH;t.__dL?(t.__dH=e,t.updater.digest({content:e})):t.__dH=e},__e:function(){var e=this;a&&a!=e&&a.__dO(),a=e,clearTimeout(e.__dN);var t=e.__dL,_=e.__h,o=_.offset(),i=_.outerWidth(),d=_.outerHeight();t.css({display:"block"});var n,r,s=t.outerWidth(),c=t.outerHeight();switch(e.__I){case"top":n=o.left-(s-i)/2,r=o.top-c-10;break;case"right":n=o.left+i+10,r=o.top-(c-d)/2;break;case"bottom":n=o.left-(s-i)/2,r=o.top+d+10;break;case"left":n=o.left-s-10,r=o.top-(c-d)/2}switch(e.__J){case"top":r=o.top;break;case"left":n=o.left;break;case"right":n=o.left-s+i;break;case"bottom":r=o.top-c+d}t.offset({left:n,top:r})},__a:function(){var e=this;clearTimeout(e.__dN),e.__dN=setTimeout(e.wrapAsync(function(){e.__dL.css({display:"none"})}),50)},__dO:function(){clearTimeout(this.__dN),this.__dL.css({display:"none"})}})});