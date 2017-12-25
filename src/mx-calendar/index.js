define("mx-calendar/index",["magix","$","mx-time/index"],(e,t,a)=>{e("mx-time/index");var i=e("magix");i.applyStyle("_g","._aS{background-color:#fff;display:inline-block;border:1px solid #e6e6e6;padding:0;border-radius:4px;overflow-y:hidden;z-index:10;color:#333;text-align:center;position:relative}._aT{color:#777}._aU{height:32px;line-height:32px;padding:1px}._aV,._aW{color:#ccc;display:inline-block;padding:6px 7px;line-height:100%;vertical-align:top;cursor:pointer}._aV:focus,._aV:hover,._aW:focus,._aW:hover{color:#f96447}._aX{display:inline-block;cursor:pointer;padding:5px 10px;border-radius:4px;line-height:1}._aX:hover{background-color:#eee}._aY{width:245px}._aZ{color:#333;background-color:#fafafa;padding:0 10px}._b_{padding:10px}._ba,._bb{padding:1px 0;position:absolute;top:-100%;left:0;right:0;-webkit-transition:top .15s;transition:top .15s;background-color:#fff}._bc{top:0}._bd{height:59px;margin:2px;float:left;width:77px;cursor:pointer;line-height:59px;border-radius:4px;font-size:16px}._be:hover,._bd:hover{background:#f0f0f0}._be,._bf{width:28px;height:28px;line-height:28px;margin:3px 2px;float:left;border-radius:4px;cursor:pointer}._bg,._bg:hover{color:#fff;background-color:#f96447}._bh,._bh:hover{color:#eee;cursor:not-allowed;background:#fff}._bi{padding:5px}._bj,._bi{border-top:1px solid #e6e6e6}._bj{margin:10px;padding:10px 0 0;text-align:left}._bk{-webkit-transform:scaleX(-1);transform:scaleX(-1)}");var s=e("$"),n=function(e,t){return 32-new Date(e,t-1,32).getDate()},r=["日","一","二","三","四","五","六"],_=function(e){return("0"+e).slice(-2)},d=function(e,t,a){var i,s=e.getTime();return t&&(i=s<t.getTime()),i||(i=!!a&&s>a.getTime()),i},l=function(e,t,a,i){var s,n=parseInt(e+_(t),10);return a&&(s=n<(a=parseInt(a.getFullYear()+_(a.getMonth()),10))),!s&&i&&(s=n>(i=parseInt(i.getFullYear()+_(i.getMonth()),10))),s},o=function(e,t,a){var i;return t&&(i=e<t.getFullYear()),!i&&a&&(i=e>a.getFullYear()),i},c={y:{reg:/y+/gi,fn:function(e,t){return String(t.getFullYear()).slice(-e.length)}},M:{reg:/M+/g,fn:function(e,t,a){return a=t.getMonth()+1,_(a).slice(-e.length)}},d:{reg:/d+/gi,fn:function(e,t,a){return a=t.getDate(),_(a).slice(-e.length)}},h:{reg:/h+/gi,fn:function(e,t,a){return a=t.getHours(),_(a).slice(-e.length)}},m:{reg:/m+/g,fn:function(e,t,a){return a=t.getMinutes(),_(a).slice(-e.length)}},s:{reg:/s+/g,fn:function(e,t,a){return a=t.getSeconds(),_(a).slice(-e.length)}},S:{reg:/S+/g,fn:function(e,t,a){return a=t.getMilliseconds(),String(a).substring(0,e.length)}}},p=function(e){return e instanceof Date?e:(e=new Date(Date.parse(String(e).replace(/-/g,"/"))))instanceof Date&&"Invalid Date"!=e&&!isNaN(e)?e:null},g=function(e,t){e=p(e),t=t||"YYYY-MM-dd";var a,i=function(t){return c[a].fn(t,e)};for(a in c)t=t.replace(c[a].reg,i);return t};a.exports=i.View.extend({tmpl:{html:'<div mx-guid="g0" class="_aS _aj" mx-contextmenu="__D()">1</div>',subs:[{keys:["types"],path:'div[mx-guid="g0"]',tmpl:'<%if($$.types.day){%><div mx-guid="g1" id="days_<%=$$.id%>" class="_ai">2</div><%}if($$.types.month){%><div id="months_<%=$$.id%>" class="_ai<%if($$.types.day){%> _ba<%}%>"><div class="_aU"><span class="__ _aV _aa" mx-click="__w()">&#xe61e;</span><h4 mx-guid="g7" mx-click="__y()" class="_aX">8</h4><span class="__ _aW _ab _bk" mx-click="__w({next:true})">&#xe61e;</span></div><div mx-guid="g8" class="_aY _ai">9</div></div><%}if($$.types.year){%><div id="years_<%=$$.id%>" class="_ai<%if($$.types.day||$$.types.month){%> _bb<%}%>"><div class="_aU"><span class="__ _aV _aa" mx-click="__w({range:true})">&#xe61e;</span><h4 mx-guid="ga" class="_aX">11</h4><span class="__ _aW _ab _bk" mx-click="__w({range:true,next:true})">&#xe61e;</span></div><div mx-guid="gb" class="_aY _ai">12</div></div><%}%>',s:"1"},{keys:["timeType","hasBtn"],path:'div[mx-guid="g1"]',pKeys:["types"],tmpl:'<div class="_aU"><span class="__ _aV _aa" mx-click="__v()">&#xe61e;</span><h4 mx-guid="g2" mx-click="<%if($$.types.month){%>__x<%}\nelse{%>__y<%}%>()" class="_aX">3</h4><span class="__ _aW _bk _ab" mx-click="__v({next:true})">&#xe61e;</span></div><div class="_aY"><div mx-guid="g3" class="_aZ _ai">4</div><div mx-guid="g4" class="_b_ _ai">5</div></div><%if($$.timeType){%><div mx-guid="g5" class="_ai _bi" mx-change="__C()" mx-view="mx-time/index?time=<%!$eu($$.timeValue)%>&type=<%!$eu($$.timeType)%>"></div><%if($$.hasBtn){%><div class="_bj"><button type="button" class="_an _ao" mx-click="__a({enter:true})">确定</button><button type="button" class="_an _s" mx-click="__a()">取消</button></div><%}}%>',s:"2"},{keys:["types","year","month"],path:'h4[mx-guid="g2"]',tmpl:"<%=$$.year%>-<%=('0'+$$.month).slice(-2)%>",s:"3",attr:'mx-click="<%if($$.types.month){%>__x<%}\nelse{%>__y<%}%>()"',attrs:[{n:"mx-click"}],mask:"211"},{keys:["weekText"],path:'div[mx-guid="g3"]',tmpl:'<%for(var _=0;_<$$.weekText.length;_++){%><span class="_bf"><%=$$.weekText[_]%></span><%}%>',s:"4"},{keys:["days"],path:'div[mx-guid="g4"]',tmpl:'<%for(var a=0;a<$$.days.length;a++){var b=$$.days[a];for(var c=0;c<b.length;c++){%><span class="_be<%if(b[c].otherMonth){%> _aT<%}if(b[c].disabled){%> _bh<%}if(b[c].selected){%> _bg<%}%>" <%if(!b[c].disabled){%> mx-click="__B({toMonth:<%=b[c].month%>,date:\'<%=$eq(b[c].full)%>\'})" <%}%> title="<%=b[c].full%>"><%=b[c].day%></span><%}}%>',s:"5"},{keys:["timeValue"],path:'div[mx-guid="g5"]',pKeys:["types","timeType","hasBtn"],attr:'mx-view="mx-time/index?time=<%!$eu($$.timeValue)%>&type=<%!$eu($$.timeType)%>"',attrs:[{n:"mx-view",v:1}]},{keys:["year"],path:'h4[mx-guid="g7"]',tmpl:"<%=$$.year%>",s:"8"},{keys:["months"],path:'div[mx-guid="g8"]',pKeys:["types"],tmpl:'<%for(var d=0,e;d<$$.months.length;d++){e=$$.months[d]%><span class="_bd<%if(e.disabled){%> _bh<%}if(e.selected){%> _bg<%}%>" <%if(!e.disabled){%> mx-click="__A({month:\'<%=$eq(e.month)%>\'})" <%}%>><%=e.month%></span><%}%>',s:"9"},{keys:["startYear","endYear"],path:'h4[mx-guid="ga"]',tmpl:"<%=$$.startYear%>-<%=$$.endYear%>",s:"11"},{keys:["years"],path:'div[mx-guid="gb"]',pKeys:["types"],tmpl:'<%for(var f=0,g;f<$$.years.length;f++){g=$$.years[f]%><span class="_bd<%if(g.selected){%> _bg<%}if(g.disabled){%> _bh<%}if(!f||f==$$.years.length-1){%> _aT<%}%>" <%if(!g.disabled){%> mx-click="__z({year:\'<%=$eq(g.year)%>\'})" <%}%>><%=g.year%></span><%}%>',s:"12"}]},init:function(e){this.__c=e},render:function(){this.update(this.__c)},__m:function(){var e=this;s("#years_"+e.id).removeClass("_bc"),s("#months_"+e.id).removeClass("_bc");var t=e.updater;if(t.get().timeType){var a=!1;e.__o&&(e.__p(e.__o),e.__q(),e.__r(),e.__s(),a=!0,delete e.__o),e.__t&&(t.set({timeValue:e.__t}),a=!0,delete e.__t),a&&t.digest()}},update:function(e){(e=e||{}).selected||(e.selected=new Date);var t=function(e){e||(e="all");var t={year:!0,month:!0,day:!0};if("all"!=e)for(var a in t)-1===e.indexOf(a)&&delete t[a];return t}(e.dateType),a=0|e.weekStart,i=p(e.selected),s=this,n=s.updater,_=p(e.max),d=p(e.min),l=e.timeType,o=g(i,"hh:mm:ss");n.set({types:t,timeType:l,timeValue:o,hasBtn:e.hasBtn,dateValue:g(i,e.formatter),max:_,min:d,id:s.id,weekStart:a,weekText:function(e){for(var t=[],a=0;a<7;a++)t[a]=r[(a+e)%7];return t}(a)}),s.__p(i),s.__q(),s.__r(),s.__s(!0)},__p:function(e){var t=this.updater;(e=p(e))&&t.set({year:e.getFullYear(),month:e.getMonth()+1,selectedYear:e.getFullYear(),selectedMonth:e.getMonth()+1,selected:g(e)})},__q:function(e){for(var t=this.updater,a=t.get(),i=a.year,s=a.min,n=a.max,r=i-i%10-1,_=r+11,d=[],l=r;l<=_;l++)d.push({year:l,selected:l==a.selectedYear,disabled:o(l,s,n)});t.set({startYear:r,endYear:_,years:d}),e&&t.digest()},__r:function(e){for(var t=[],a=this.updater,i=a.get(),s=i.year,n=i.min,r=i.max,_=1;_<=12;_++)t.push({month:_,selected:s==i.selectedYear&&_==i.selectedMonth,disabled:l(s,_-1,n,r)});a.set({months:t}),e&&a.digest()},__s:function(e){var t,a,i,s,r=[],_=this.updater,l=_.get("weekStart"),o=_.get("year"),c=_.get("month"),p=(7-l+new Date(o,c-1,1).getDay())%7,u=[],h=n(o,c),m=n(o,c-1),f=_.get("max"),x=_.get("min"),y=_.get("selected");for(t=1;t<=p;t++)a=m-(p-t),i=new Date(o,c-2,a),u.push({month:c-1,full:g(i),day:a,otherMonth:!0,disabled:d(i,x,f)});for(t=1;t<=h;t++)i=new Date(o,c-1,t),s=g(i),u.push({selected:s==y,day:t,month:c,full:s,disabled:d(i,x,f)}),(t+p)%7==0&&(r.push(u),u=[]);var b=u.length;for(t=b;t<14&&(a=t-b+1,i=new Date(o,c,a),u.push({month:c+1,day:a,otherMonth:!0,full:g(i),disabled:d(i,x,f)}),(t+1)%7!=0||(r.push(u),u=[],6!=r.length));t++);_.set({days:r}),e&&_.digest()},__u:function(e){var t=this,a=t.updater.get();a.types.day?a.timeType&&a.hasBtn?e&&s("#"+t.id).trigger({type:"change",date:a.dateValue,time:a.timeType?a.timeValue:null}):s("#"+t.id).trigger({type:"change",date:a.dateValue,time:a.timeType?a.timeValue:null}):s("#"+t.id).trigger({type:"change",date:a.selectedYear+(a.types.month?"-"+("0"+a.selectedMonth).slice(-2):"")})},"__v<click>":function(e){var t=this.updater,a=t.get("month"),i=t.get("year");e.params.next?(a+=1)>12&&(a=1,i++):(a-=1)<1&&(a=12,i--),t.set({year:i,month:a}),this.__s(!0)},"__w<click>":function(e){var t=this,a=e.params,i=t.updater,s=i.get("year");a.range?s+=a.next?10:-10:s+=a.next?1:-1,i.set({year:s}),a.range?t.__q(!0):t.__r(!0)},"__x<click>":function(){s("#months_"+this.id).addClass("_bc"),this.__r(!0)},"__y<click>":function(){s("#years_"+this.id).addClass("_bc"),this.__q(!0)},"__z<click>":function(e){var t=e.params.year,a=this,i=a.updater.get().types;i.day||i.month?(a.updater.set({year:+t}),s("#years_"+a.id).removeClass("_bc"),i.month?a.__r(!0):a.__s(!0)):(a.__p(t+"-01-01"),a.__q(!0),a.__u())},"__A<click>":function(e){var t=e.params.month,a=this,i=a.updater,n=i.get();n.types.day?(i.set({month:+t}),s("#months_"+a.id).removeClass("_bc"),a.__s(!0)):(a.__p(n.year+"-"+t+"-01"),a.__r(!0),a.__u())},"__B<click>":function(e){var t=this;s("#days_"+t.id+" span").removeClass("_bg"),s(e.eventTarget).addClass("_bg");var a=t.updater,i=a.get("month"),n=e.params.toMonth!=i;t.__p(e.params.date),n&&(t.__q(),t.__r(),t.__s(!0)),t.__o||(t.__o=a.get("dateValue")),a.set({dateValue:e.params.date}),t.__u()},"__C<change>":function(e){e.stopPropagation();var t=this;t.__t||(t.__t=t.updater.get("timeValue")),t.updater.set({timeValue:e.time}),t.__u()},"__a<click>":function(e){var t=this;if(e.params.enter)return delete t.__o,delete t.__t,void t.__u(!0);s("#"+t.id).trigger("cancel")},"__D<contextmenu>":function(e){e.preventDefault()}},{parse:p,format:g,dateDisabled:d})});