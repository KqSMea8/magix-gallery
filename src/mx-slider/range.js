define("mx-slider/range",["magix","$","../mx-dragdrop/index","./style"],(e,_,t)=>{var i=e("magix"),a=e("$"),s=e("../mx-dragdrop/index");e("./style"),t.exports=i.View.extend({tmpl:{html:'<div mx-guid="g0" class="_ex<%if($$.vertical){%> _ez<%}\nelse{%> _ey<%}%>" mx-contextmenu="__D()" style="<%if($$.vertical){%>height:<%=$$.height%><%}\nelse{%>width:<%=$$.width%><%}%>px"><div mx-guid="g1" class="_eA<%if($$.vertical){%> _eC<%}\nelse{%> _eB<%}%>"></div><div mx-guid="g2" tabindex="0" mx-keydown="__ep({start:true})" class="_eD<%if($$.vertical){%> _eF<%}\nelse{%> _eE<%}%>" mx-mousedown="__el({start:true})" id="left_<%=$$.viewId%>"></div><div mx-guid="g3" class="_eG<%if($$.vertical){%> _eM<%}\nelse{%> _eL<%}%>" id="leftl_<%=$$.viewId%>"></div><div mx-guid="g4" tabindex="0" mx-keydown="__ep()" class="_eD<%if($$.vertical){%> _eF<%}\nelse{%> _eE<%}%>" mx-mousedown="__el({end:true})" id="right_<%=$$.viewId%>"></div><div mx-guid="g5" class="_eG<%if($$.vertical){%> _eM<%}\nelse{%> _eL<%}%>" id="rightl_<%=$$.viewId%>"></div><div mx-guid="g6" class="<%if($$.vertical){%>_eJ<%}\nelse{%>_eH<%}%>">7</div><div mx-guid="g7" class="<%if($$.vertical){%>_eK<%}\nelse{%>_eI<%}%>">8</div></div>',subs:[{keys:["vertical","height","width"],path:'div[mx-guid="g0"]',attr:'class="_ex<%if($$.vertical){%> _ez<%}\nelse{%> _ey<%}%>" mx-contextmenu="__D()" style="<%if($$.vertical){%>height:<%=$$.height%><%}\nelse{%>width:<%=$$.width%><%}%>px"',attrs:[{n:"class",p:1,f:"className"},{n:"mx-contextmenu"},{n:"style"}]},{keys:["vertical"],path:'div[mx-guid="g1"]',attr:'class="_eA<%if($$.vertical){%> _eC<%}\nelse{%> _eB<%}%>"',attrs:[{n:"class",p:1,f:"className"}]},{keys:["vertical","viewId"],path:'div[mx-guid="g2"]',attr:'class="_eD<%if($$.vertical){%> _eF<%}\nelse{%> _eE<%}%>" mx-mousedown="__el({start:true})" id="left_<%=$$.viewId%>"',attrs:[{n:"class",p:1,f:"className"},{n:"mx-mousedown"},{n:"id",p:1}]},{keys:["vertical","viewId"],path:'div[mx-guid="g3"]',attr:'class="_eG<%if($$.vertical){%> _eM<%}\nelse{%> _eL<%}%>" id="leftl_<%=$$.viewId%>"',attrs:[{n:"class",p:1,f:"className"},{n:"id",p:1}]},{keys:["vertical","viewId"],path:'div[mx-guid="g4"]',attr:'class="_eD<%if($$.vertical){%> _eF<%}\nelse{%> _eE<%}%>" mx-mousedown="__el({end:true})" id="right_<%=$$.viewId%>"',attrs:[{n:"class",p:1,f:"className"},{n:"mx-mousedown"},{n:"id",p:1}]},{keys:["vertical","viewId"],path:'div[mx-guid="g5"]',attr:'class="_eG<%if($$.vertical){%> _eM<%}\nelse{%> _eL<%}%>" id="rightl_<%=$$.viewId%>"',attrs:[{n:"class",p:1,f:"className"},{n:"id",p:1}]},{keys:["vertical","min"],path:'div[mx-guid="g6"]',tmpl:"<%=$$.min%>",s:"7",attr:'class="<%if($$.vertical){%>_eJ<%}\nelse{%>_eH<%}%>"',attrs:[{n:"class",p:1,f:"className"}],mask:"21"},{keys:["vertical","max"],path:'div[mx-guid="g7"]',tmpl:"<%=$$.max%>",s:"8",attr:'class="<%if($$.vertical){%>_eK<%}\nelse{%>_eI<%}%>"',attrs:[{n:"class",p:1,f:"className"}],mask:"21"}]},init:function(e){var _=this,t=a("#"+_.id);t.addClass("_ew"),_.assign(e);var s=function(e){if(!_.__ef&&!_.__bZ){var a=t.offset(),s=_.__eg(),r=-1,d=((r=_.__eh?s.rMax-e.pageY+a.top:e.pageX-a.left)-s.half)/s.max,l=_.__ei(d),n=+_.__aP,h=+_.__aG;Math.abs(n-l)<Math.abs(h-l)?(_.__em(l),_.__aP=l,_.__u(),i.node("left_"+_.id).focus()):(_.__en(l),_.__aG=l,_.__u(),i.node("right_"+_.id).focus())}};t.on("click",s),_.on("destroy",function(){t.off("click",s)}),_.__h=t},assign:function(e){var _=this;_.__cY=+e.width||340,_.__ek=+e.height||340,_.__E=+e.min||0,_.__F=+e.max||100,_.__do=+e.step||1,_.__bZ=e.disabled+""=="true",_.__eh=e.vertical+""=="true";var t=_.__do+"",i=t.indexOf(".");i=i>=0?t.slice(i+1).length:0,_.__dq=i;var a=e.value;return a?(a=(a+"").split(","),_.__aP=+a[0]||0,_.__aG=+a[1]||0):(_.__aP=0,_.__aG=0),!0},render:function(){var e=this;e.updater.digest({min:e.__E.toFixed(e.__dq),max:e.__F.toFixed(e.__dq),viewId:e.id,height:e.__ek,width:e.__cY,vertical:e.__eh}),e.__h[e.__bZ?"addClass":"removeClass"]("_eN"),e.val([e.__aP,e.__aG])},__eg:function(){var e=this,_=e.__h.find("._ex"),t=e.__h.find("._eA"),i=a("#left_"+e.id),s=a("#right_"+e.id),r=e.__eh?_.height():_.width(),d=i.outerWidth()/2,l=r-2*d;return{rail:_,iLeftL:a("#leftl_"+e.id),iRightL:a("#rightl_"+e.id),tracker:t,iLeft:i,iRight:s,left:parseInt(i.css(e.__eh?"bottom":"left"),10),right:parseInt(s.css(e.__eh?"bottom":"left"),10),rMax:r,max:l,half:d}},__em:function(e){var _=this;e=+e;var t=_.__F,i=_.__E;e>t?e=t:e<i&&(e=i);var a=(e-i)/(t-i),s=_.__eg(),r=a*s.max;_.__eh?s.iLeft.css({bottom:r}):s.iLeft.css({left:r}),e=_.__ei(a);var d=s.iLeftL;d.html(e);var l=r+s.half;if(_.__eh){l-=n=d.height()/2,d.css({bottom:l}),s.tracker.css({bottom:r+s.half}).height(s.right-r)}else{var n=d.width()/2;l<n?l=0:l+n>s.rMax?l=s.rMax-2*n:l-=n,d.css({left:l}),s.tracker.css({left:r+s.half}).width(s.right-r)}return e},__en:function(e){var _=this;e=+e;var t=_.__F,i=_.__E;e>t?e=t:e<i&&(e=i);var a=(e-i)/(t-i),s=_.__eg(),r=a*s.max;_.__eh?s.iRight.css({bottom:r}):s.iRight.css({left:r}),e=_.__ei(a);var d=s.iRightL;d.html(e);var l=r+s.half;if(_.__eh){l-=n=d.height()/2,d.css({bottom:l}),s.tracker.height(r-s.left)}else{var n=d.width()/2;l<n?l=0:l+n>s.rMax?l=s.rMax-2*n:l-=n,d.css({left:l}),s.tracker.width(r-s.left)}return e},val:function(e){var _=this;if(e){var t=(e+"").split(","),i=+t[0]||0,a=+t[1]||0;i>a&&(i=(s=[a,i])[0],a=s[1]),_.__h.prop("value",[i,a]),i=_.__em(i),a=_.__en(a),_.__aP==i&&_.__aG==a||(_.__aP=i,_.__aG=a,_.__u())}return[+_.__aP,+_.__aG];var s},__ei:function(e){var _,t=this.__F,i=this.__E,a=this.__do;return 0===e?_=i:1===e?_=t:(_=i+(t-i)*e,_=Math.round(_/a)*a),_=_.toFixed(this.__dq)},__u:function(){var e=[+this.__aP,+this.__aG];this.__h.prop("value",e).trigger({type:"change",value:e,start:+this.__aP,end:+this.__aG})},__eo:function(e,_){var t=this;e==t.__aP&&_==t.__aG||(t.__aP=e,t.__aG=_,t.__u())},"__el<mousedown>":function(e){var _=this;if(!_.__bZ){var t=a(e.eventTarget),r=t.outerWidth(),d=-1;d=_.__eh?t.parent().height()-r:t.parent().width()-r;var l=parseInt(t.css(_.__eh?"bottom":"left"),10),n=_.__aP,h=_.__aG;_.__ej=1,s.begin(e.eventTarget,function(t){s.clear();var a=-1;(a=_.__eh?l+e.pageY-t.pageY:l+t.pageX-e.pageX)<0?a=0:a>d&&(a=d);var r=a/d,c=_.__ei(r),v=+c;if(e.params.end){var f=+_.__aP;v>=f?(_.__aP!=n&&(n=_.__em(f)),h=_.__en(c),i.node("right_"+_.id).focus()):(_.__aP!=h&&(h=_.__en(f)),n=_.__em(c),i.node("left_"+_.id).focus())}else{var o=+_.__aG;v<=o?(_.__aG!=h&&(h=_.__en(o)),n=_.__em(c),i.node("left_"+_.id).focus()):(_.__aG!=n&&(n=_.__em(o)),h=_.__en(c),i.node("right_"+_.id).focus())}},function(){_.__eo(n,h),_.__ef=!0,setTimeout(_.wrapAsync(function(){delete _.__ef}),20),delete _.__ej})}},"__ep<keydown>":function(e){var _,t=this,a=t.__do;if(!t.__ej&&(37==e.keyCode||40==e.keyCode?(e.preventDefault(),a=-a,_=!0):39!=e.keyCode&&38!=e.keyCode||(e.preventDefault(),_=!0),_)){var s=t.__aP,r=+s,d=t.__aG,l=+d,n=e.params.start;n?r+=a:l+=a,r>l?(n?i.node("right_"+t.id).focus():i.node("left_"+t.id).focus(),l!=+s&&(s=t.__em(l)),r!=+d&&(d=t.__en(r))):n?s=t.__em(r):d=t.__en(l),t.__eo(s,d)}},"__D<contextmenu>":function(e){e.preventDefault()}})});