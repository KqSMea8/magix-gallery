//#exclude=define,before
//#snippet;
'#exclude(define,before)';
!function(e,n,t){function o(e){"undefined"!=typeof window.console&&window.console.error("[anywhere include] "+e)}function r(t){var r,a,i=e.createElement(n),l=e.head||e.documentElement,c="176227",d="tcl_"+c,s="//tce.alicdn.com/api/data.htm?ids="+c+"&callback="+d,u=function(){o("version api request timeout")};window[d]=function(e){e&&e[c]&&e[c].value&&e[c].value.moduleinfo?r=e[c].value.moduleinfo:o("version api response wrong format")},a=setTimeout(u,5e3),i.async=!0,i.src=s,i.onload=i.onreadystatechange=function(){if(!i.readyState||/loaded|complete/.test(i.readyState)){clearTimeout(a),a=null,i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),r?t(r):u("jsonp callback was not called"),i=null,window[d]=null;try{delete window[d]}catch(e){}}},l.insertBefore(i,l.firstChild)}function a(e,n){var t=new RegExp(e+"=([^&]+)").exec(location.search);return t?t[1]:n}e.getElementById(t)||r(function(r){var i=window.location.hostname.indexOf(".daily.")>-1,l=a("prepub",!1),c=i?r.development:l?r.prepub:r.production;if(!c||!c.entryJS||!c.entryCSS)return void o("version api repsponse lost info");var d=e.getElementsByTagName(n)[0],s=e.createElement(n),u=e.createElement("link");s.src=c.entryJS,s.id=t,u.rel="stylesheet",u.href=c.entryCSS,s.charset=u.charset="utf-8",d.parentNode.insertBefore(u,d),d.parentNode.insertBefore(s,d)})}(document,"script","anywhere-sdk");