define("mx-time/index",["magix","$"],(e,t,_)=>{var i=e("magix"),n=e("$");i.applyStyle("_M","._fq{width:58px;float:left;overflow:hidden}._fr{font-size:30px;height:50px;text-align:center;margin-bottom:10px}._fs{width:28px;height:28px;padding:0}._ft{font-size:27px;float:left;line-height:32px;margin-top:8px;font-weight:bolder;display:inline-block;width:30px;text-align:center}");var a=function(e){if(!e){var t=new Date;e=t.getHours()+":"+t.getMinutes()+":"+t.getSeconds()}var _=e.split(":");if(3!=_.length)throw new Error("bad time:"+e);return{__cx:parseInt(_[0],10)||0,__fY:parseInt(_[1],10)||0,__fZ:parseInt(_[2],10)||0}},s=function(e){return e<10?"0"+e:e};_.exports=i.View.extend({tmpl:{html:'<div class="_fq"><input mx-guid="g0" class="_ap _fr" value="<%=$$.format($$.time[\'__cx\'])%>" <%if($$.types[\'__cx\']){%> mx-change="__gb({type:\'__cx\'})" <%}\nelse{%> disabled<%}%> maxlength="2" mx-keydown="__dD({type:\'__cx\'})" autocomplete="off"><button mx-guid="g1" type="button" class="_an _fs _aa" <%if($$.types[\'__cx\']){%> mx-click="__ga({type:\'__cx\'})" mx-mousedown="__dC({type:\'__cx\'})" <%}\nelse{%> disabled<%}%> tabindex="-1"><i class="__">&#xe6df;</i></button><button mx-guid="g2" type="button" class="_an _fs _ab" <%if($$.types[\'__cx\']){%> mx-click="__ga({type:\'__cx\',inc:1})" mx-mousedown="__dC({type:\'__cx\',inc:1})" <%}\nelse{%> disabled<%}%> tabindex="-1"><i class="__">&#xe661;</i></button></div><span class="_ft">:</span><div class="_fq"><input mx-guid="g3" class="_ap _fr" value="<%=$$.format($$.time[\'__fY\'])%>" <%if($$.types[\'__fY\']){%> mx-change="__gb({type:\'__fY\'})" <%}\nelse{%> disabled<%}%> maxlength="2" mx-keydown="__dD({type:\'__fY\'})" autocomplete="off"><button mx-guid="g4" type="button" class="_an _fs _aa" <%if($$.types[\'__fY\']){%> mx-click="__ga({type:\'__fY\'})" mx-mousedown="__dC({type:\'__fY\'})" <%}\nelse{%> disabled<%}%> tabindex="-1"><i class="__">&#xe6df;</i></button><button mx-guid="g5" type="button" class="_an _fs _ab" <%if($$.types[\'__fY\']){%> mx-click="__ga({type:\'__fY\',inc:1})" mx-mousedown="__dC({type:\'__fY\',inc:1})" <%}\nelse{%> disabled<%}%> tabindex="-1"><i class="__">&#xe661;</i></button></div><span class="_ft">:</span><div class="_fq"><input mx-guid="g6" class="_ap _fr" value="<%=$$.format($$.time[\'__fZ\'])%>" <%if($$.types[\'__fZ\']){%> mx-change="__gb({type:\'__fZ\'})" <%}\nelse{%> disabled<%}%> maxlength="2" mx-keydown="__dD({type:\'__fZ\'})" autocomplete="off"><button mx-guid="g7" type="button" class="_an _fs _aa" <%if($$.types[\'__fZ\']){%> mx-click="__ga({type:\'__fZ\'})" mx-mousedown="__dC({type:\'__fZ\'})" <%}\nelse{%> disabled<%}%> tabindex="-1"><i class="__">&#xe6df;</i></button><button mx-guid="g8" type="button" class="_an _fs _ab" <%if($$.types[\'__fZ\']){%> mx-click="__ga({type:\'__fZ\',inc:1})" mx-mousedown="__dC({type:\'__fZ\',inc:1})" <%}\nelse{%> disabled<%}%> tabindex="-1"><i class="__">&#xe661;</i></button></div>',subs:[{keys:["time","types"],path:'input[mx-guid="g0"]',attr:"value=\"<%=$$.format($$.time['__cx'])%>\" <%if($$.types['__cx']){%> mx-change=\"__gb({type:'__cx'})\" <%}\nelse{%> disabled<%}%>",attrs:[{n:"value",q:1,p:1},{n:"mx-change"},{n:"disabled",b:1,p:1}]},{keys:["types"],path:'button[mx-guid="g1"]',attr:"<%if($$.types['__cx']){%> mx-click=\"__ga({type:'__cx'})\" mx-mousedown=\"__dC({type:'__cx'})\" <%}\nelse{%> disabled<%}%>",attrs:[{n:"mx-click"},{n:"mx-mousedown"},{n:"disabled",b:1,p:1}]},{keys:["types"],path:'button[mx-guid="g2"]',attr:"<%if($$.types['__cx']){%> mx-click=\"__ga({type:'__cx',inc:1})\" mx-mousedown=\"__dC({type:'__cx',inc:1})\" <%}\nelse{%> disabled<%}%>",attrs:[{n:"mx-click"},{n:"mx-mousedown"},{n:"disabled",b:1,p:1}]},{keys:["time","types"],path:'input[mx-guid="g3"]',attr:"value=\"<%=$$.format($$.time['__fY'])%>\" <%if($$.types['__fY']){%> mx-change=\"__gb({type:'__fY'})\" <%}\nelse{%> disabled<%}%>",attrs:[{n:"value",q:1,p:1},{n:"mx-change"},{n:"disabled",b:1,p:1}]},{keys:["types"],path:'button[mx-guid="g4"]',attr:"<%if($$.types['__fY']){%> mx-click=\"__ga({type:'__fY'})\" mx-mousedown=\"__dC({type:'__fY'})\" <%}\nelse{%> disabled<%}%>",attrs:[{n:"mx-click"},{n:"mx-mousedown"},{n:"disabled",b:1,p:1}]},{keys:["types"],path:'button[mx-guid="g5"]',attr:"<%if($$.types['__fY']){%> mx-click=\"__ga({type:'__fY',inc:1})\" mx-mousedown=\"__dC({type:'__fY',inc:1})\" <%}\nelse{%> disabled<%}%>",attrs:[{n:"mx-click"},{n:"mx-mousedown"},{n:"disabled",b:1,p:1}]},{keys:["time","types"],path:'input[mx-guid="g6"]',attr:"value=\"<%=$$.format($$.time['__fZ'])%>\" <%if($$.types['__fZ']){%> mx-change=\"__gb({type:'__fZ'})\" <%}\nelse{%> disabled<%}%>",attrs:[{n:"value",q:1,p:1},{n:"mx-change"},{n:"disabled",b:1,p:1}]},{keys:["types"],path:'button[mx-guid="g7"]',attr:"<%if($$.types['__fZ']){%> mx-click=\"__ga({type:'__fZ'})\" mx-mousedown=\"__dC({type:'__fZ'})\" <%}\nelse{%> disabled<%}%>",attrs:[{n:"mx-click"},{n:"mx-mousedown"},{n:"disabled",b:1,p:1}]},{keys:["types"],path:'button[mx-guid="g8"]',attr:"<%if($$.types['__fZ']){%> mx-click=\"__ga({type:'__fZ',inc:1})\" mx-mousedown=\"__dC({type:'__fZ',inc:1})\" <%}\nelse{%> disabled<%}%>",attrs:[{n:"mx-click"},{n:"mx-mousedown"},{n:"disabled",b:1,p:1}]}]},init:function(e){var t=a(e.time),_=function(e){e||(e="all");var t={__cx:!0,__fY:!0,__fZ:!0},_={hour:"__cx",minute:"__fY",second:"__fZ"};if("all"!=e)for(var i in _)-1===e.indexOf(i)&&delete t[_[i]];return t}(e.type);this.updater.set({format:s,time:t,types:_})},render:function(){this.updater.digest()},val:function(e){var t=this.updater;if(e){var _=a(e);t.digest({time:_})}return t.get("time")},__g_:function(e,t){var _=this.updater.get("time"),i="__cx"==e?23:59;t?_[e]++:_[e]--,_[e]>i?_[e]=0:_[e]<0&&(_[e]=i),this.updater.digest({time:_})},__u:function(){var e=n("#"+this.id),t=this.updater.get("time");e.trigger({type:"change",time:s(t.__cx)+":"+s(t.__fY)+":"+s(t.__fZ)})},"__ga<click>":function(e){var t=this;if(!t.__dz){var _=e.params;t.__g_(_.type,_.inc),t.__u()}},"__gb<change>":function(e){e.stopPropagation();var t=e.params.type,_="__cx"==t?23:59,i=e.eventTarget,n=i.value,a=parseInt(n,10),d=this.updater.get("time");a||0===a?(a<0?a=0:a>_&&(a=_),a!==d[t]?(d[t]=a,this.updater.digest({time:d}),this.__u()):i.value=s(a)):i.value=s(d[t])},"__dC<mousedown>":function(e){var t=this,_=e.params;t.__dA=setTimeout(t.wrapAsync(function(){t.__dB=setInterval(t.wrapAsync(function(){t.__dz=!0,t.__g_(_.type,_.inc)}),50)}),300)},"__dD<keydown>":function(e){if(38==e.keyCode||40==e.keyCode){e.preventDefault();var t=this;t.__g_(e.params.type,38==e.keyCode),clearTimeout(t.__gc),t.__gc=setTimeout(t.wrapAsync(function(){t.__u()}),100)}},"$doc<mouseup>":function(){var e=this;clearTimeout(e.__dA),clearInterval(e.__dB),setTimeout(e.wrapAsync(function(){e.__dz&&e.__u(),delete e.__dz}),0)}})});