/*
 * debouncedresize: special jQuery event that happens once after a window resize
 *
 * latest version and complete README available on Github:
 * https://github.com/louisremi/jquery-smartresize
 *
 * Copyright 2012 @louis_remi
 * Licensed under the MIT license.
 *
 * This saved you an hour of work? 
 * Send me music http://www.amazon.co.uk/wishlist/HNTU0468LQON
 *
 * Modified to be compatible with jQuery 1.5.x
 */
(function($) {

var $event = $.event,
  dispatchMethod = $.event.handle ? 'handle' : 'dispatch',
	$special,
	resizeTimeout;

$special = $event.special.debouncedresize = {
	setup: function() {
		$( this ).bind( "resize", $special.handler );
	},
	teardown: function() {
		$( this ).unbind( "resize", $special.handler );
	},
	handler: function( event, execAsap ) {
		// Save the context
		var context = this,
			args = arguments,
			dispatch = function() {
				// set correct event type
				event.type = "debouncedresize";
        $event[ dispatchMethod ].apply( context, args );
			};

		if ( resizeTimeout ) {
			clearTimeout( resizeTimeout );
		}

		execAsap ?
			dispatch() :
			resizeTimeout = setTimeout( dispatch, $special.threshold );
	},
	threshold: 150
};

})(jQuery);
;/**/
/*! matchMedia() polyfill - Test a CSS media type/query in JS. Authors & copyright (c) 2012: Scott Jehl, Paul Irish, Nicholas Zakas. Dual MIT/BSD license */
/*! Respond.js v1.1.0: min/max-width media query polyfill. (c) Scott Jehl. MIT/GPLv2 Lic. j.mp/respondjs  */
(function(a){"use strict";function x(){u(!0)}var b={};if(a.respond=b,b.update=function(){},b.mediaQueriesSupported=a.matchMedia&&a.matchMedia("only all").matches,!b.mediaQueriesSupported){var q,r,t,c=a.document,d=c.documentElement,e=[],f=[],g=[],h={},i=30,j=c.getElementsByTagName("head")[0]||d,k=c.getElementsByTagName("base")[0],l=j.getElementsByTagName("link"),m=[],n=function(){for(var b=0;l.length>b;b++){var c=l[b],d=c.href,e=c.media,f=c.rel&&"stylesheet"===c.rel.toLowerCase();d&&f&&!h[d]&&(c.styleSheet&&c.styleSheet.rawCssText?(p(c.styleSheet.rawCssText,d,e),h[d]=!0):(!/^([a-zA-Z:]*\/\/)/.test(d)&&!k||d.replace(RegExp.$1,"").split("/")[0]===a.location.host)&&m.push({href:d,media:e}))}o()},o=function(){if(m.length){var b=m.shift();v(b.href,function(c){p(c,b.href,b.media),h[b.href]=!0,a.setTimeout(function(){o()},0)})}},p=function(a,b,c){var d=a.match(/@media[^\{]+\{([^\{\}]*\{[^\}\{]*\})+/gi),g=d&&d.length||0;b=b.substring(0,b.lastIndexOf("/"));var h=function(a){return a.replace(/(url\()['"]?([^\/\)'"][^:\)'"]+)['"]?(\))/g,"$1"+b+"$2$3")},i=!g&&c;b.length&&(b+="/"),i&&(g=1);for(var j=0;g>j;j++){var k,l,m,n;i?(k=c,f.push(h(a))):(k=d[j].match(/@media *([^\{]+)\{([\S\s]+?)$/)&&RegExp.$1,f.push(RegExp.$2&&h(RegExp.$2))),m=k.split(","),n=m.length;for(var o=0;n>o;o++)l=m[o],e.push({media:l.split("(")[0].match(/(only\s+)?([a-zA-Z]+)\s?/)&&RegExp.$2||"all",rules:f.length-1,hasquery:l.indexOf("(")>-1,minw:l.match(/\(\s*min\-width\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/)&&parseFloat(RegExp.$1)+(RegExp.$2||""),maxw:l.match(/\(\s*max\-width\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/)&&parseFloat(RegExp.$1)+(RegExp.$2||"")})}u()},s=function(){var a,b=c.createElement("div"),e=c.body,f=!1;return b.style.cssText="position:absolute;font-size:1em;width:1em",e||(e=f=c.createElement("body"),e.style.background="none"),e.appendChild(b),d.insertBefore(e,d.firstChild),a=b.offsetWidth,f?d.removeChild(e):e.removeChild(b),a=t=parseFloat(a)},u=function(b){var h="clientWidth",k=d[h],m="CSS1Compat"===c.compatMode&&k||c.body[h]||k,n={},o=l[l.length-1],p=(new Date).getTime();if(b&&q&&i>p-q)return a.clearTimeout(r),r=a.setTimeout(u,i),void 0;q=p;for(var v in e)if(e.hasOwnProperty(v)){var w=e[v],x=w.minw,y=w.maxw,z=null===x,A=null===y,B="em";x&&(x=parseFloat(x)*(x.indexOf(B)>-1?t||s():1)),y&&(y=parseFloat(y)*(y.indexOf(B)>-1?t||s():1)),w.hasquery&&(z&&A||!(z||m>=x)||!(A||y>=m))||(n[w.media]||(n[w.media]=[]),n[w.media].push(f[w.rules]))}for(var C in g)g.hasOwnProperty(C)&&g[C]&&g[C].parentNode===j&&j.removeChild(g[C]);for(var D in n)if(n.hasOwnProperty(D)){var E=c.createElement("style"),F=n[D].join("\n");E.type="text/css",E.media=D,j.insertBefore(E,o.nextSibling),E.styleSheet?E.styleSheet.cssText=F:E.appendChild(c.createTextNode(F)),g.push(E)}},v=function(a,b){var c=w();c&&(c.open("GET",a,!0),c.onreadystatechange=function(){4!==c.readyState||200!==c.status&&304!==c.status||b(c.responseText)},4!==c.readyState&&c.send(null))},w=function(){var b=!1;try{b=new a.XMLHttpRequest}catch(c){b=new a.ActiveXObject("Microsoft.XMLHTTP")}return function(){return b}}();n(),b.update=n,a.addEventListener?a.addEventListener("resize",x,!1):a.attachEvent&&a.attachEvent("onresize",x)}})(this);
;/**/
/* MediaMatch v.2.0.2 - Testing css media queries in Javascript. Authors & copyright (c) 2013: WebLinc, David Knight. */

window.matchMedia||(window.matchMedia=function(c){var a=c.document,w=a.documentElement,l=[],t=0,x="",h={},G=/\s*(only|not)?\s*(screen|print|[a-z\-]+)\s*(and)?\s*/i,H=/^\s*\(\s*(-[a-z]+-)?(min-|max-)?([a-z\-]+)\s*(:?\s*([0-9]+(\.[0-9]+)?|portrait|landscape)(px|em|dppx|dpcm|rem|%|in|cm|mm|ex|pt|pc|\/([0-9]+(\.[0-9]+)?))?)?\s*\)\s*$/,y=0,A=function(b){var z=-1!==b.indexOf(",")&&b.split(",")||[b],e=z.length-1,j=e,g=null,d=null,c="",a=0,l=!1,m="",f="",g=null,d=0,f=null,k="",p="",q="",n="",r="",k=!1;if(""===
b)return!0;do{g=z[j-e];l=!1;if(d=g.match(G))c=d[0],a=d.index;if(!d||-1===g.substring(0,a).indexOf("(")&&(a||!d[3]&&c!==d.input))k=!1;else{f=g;l="not"===d[1];a||(m=d[2],f=g.substring(c.length));k=m===x||"all"===m||""===m;g=-1!==f.indexOf(" and ")&&f.split(" and ")||[f];d=g.length-1;if(k&&0<=d&&""!==f){do{f=g[d].match(H);if(!f||!h[f[3]]){k=!1;break}k=f[2];n=p=f[5];q=f[7];r=h[f[3]];q&&(n="px"===q?Number(p):"em"===q||"rem"===q?16*p:f[8]?(p/f[8]).toFixed(2):"dppx"===q?96*p:"dpcm"===q?0.3937*p:Number(p));
k="min-"===k&&n?r>=n:"max-"===k&&n?r<=n:n?r===n:!!r;if(!k)break}while(d--)}if(k)break}}while(e--);return l?!k:k},B=function(){var b=c.innerWidth||w.clientWidth,a=c.innerHeight||w.clientHeight,e=c.screen.width,j=c.screen.height,g=c.screen.colorDepth,d=c.devicePixelRatio;h.width=b;h.height=a;h["aspect-ratio"]=(b/a).toFixed(2);h["device-width"]=e;h["device-height"]=j;h["device-aspect-ratio"]=(e/j).toFixed(2);h.color=g;h["color-index"]=Math.pow(2,g);h.orientation=a>=b?"portrait":"landscape";h.resolution=
d&&96*d||c.screen.deviceXDPI||96;h["device-pixel-ratio"]=d||1},C=function(){clearTimeout(y);y=setTimeout(function(){var b=null,a=t-1,e=a,j=!1;if(0<=a){B();do if(b=l[e-a])if((j=A(b.mql.media))&&!b.mql.matches||!j&&b.mql.matches)if(b.mql.matches=j,b.listeners)for(var j=0,g=b.listeners.length;j<g;j++)b.listeners[j]&&b.listeners[j].call(c,b.mql);while(a--)}},10)},D=a.getElementsByTagName("head")[0],a=a.createElement("style"),E=null,u="screen print speech projection handheld tv braille embossed tty".split(" "),
m=0,I=u.length,s="#mediamatchjs { position: relative; z-index: 0; }",v="",F=c.addEventListener||(v="on")&&c.attachEvent;a.type="text/css";a.id="mediamatchjs";D.appendChild(a);for(E=c.getComputedStyle&&c.getComputedStyle(a)||a.currentStyle;m<I;m++)s+="@media "+u[m]+" { #mediamatchjs { position: relative; z-index: "+m+" } }";a.styleSheet?a.styleSheet.cssText=s:a.textContent=s;x=u[1*E.zIndex||0];D.removeChild(a);B();F(v+"resize",C);F(v+"orientationchange",C);return function(a){var c=t,e={matches:!1,
media:a,addListener:function(a){l[c].listeners||(l[c].listeners=[]);a&&l[c].listeners.push(a)},removeListener:function(a){var b=l[c],d=0,e=0;if(b)for(e=b.listeners.length;d<e;d++)b.listeners[d]===a&&b.listeners.splice(d,1)}};if(""===a)return e.matches=!0,e;e.matches=A(a);t=l.push({mql:e,listeners:null});return e}}(window));;/**/
/*!
 * enquire.js v2.1.0 - Awesome Media Queries in JavaScript
 * Copyright (c) 2013 Nick Williams - http://wicky.nillia.ms/enquire.js
 * License: MIT (http://www.opensource.org/licenses/mit-license.php)
 */

(function(t,i,n){var e=i.matchMedia;"undefined"!=typeof module&&module.exports?module.exports=n(e):"function"==typeof define&&define.amd?define(function(){return i[t]=n(e)}):i[t]=n(e)})("enquire",this,function(t){"use strict";function i(t,i){var n,e=0,s=t.length;for(e;s>e&&(n=i(t[e],e),n!==!1);e++);}function n(t){return"[object Array]"===Object.prototype.toString.apply(t)}function e(t){return"function"==typeof t}function s(t){this.options=t,!t.deferSetup&&this.setup()}function o(i,n){this.query=i,this.isUnconditional=n,this.handlers=[],this.mql=t(i);var e=this;this.listener=function(t){e.mql=t,e.assess()},this.mql.addListener(this.listener)}function r(){if(!t)throw Error("matchMedia not present, legacy browsers require a polyfill");this.queries={},this.browserIsIncapable=!t("only all").matches}return s.prototype={setup:function(){this.options.setup&&this.options.setup(),this.initialised=!0},on:function(){!this.initialised&&this.setup(),this.options.match&&this.options.match()},off:function(){this.options.unmatch&&this.options.unmatch()},destroy:function(){this.options.destroy?this.options.destroy():this.off()},equals:function(t){return this.options===t||this.options.match===t}},o.prototype={addHandler:function(t){var i=new s(t);this.handlers.push(i),this.matches()&&i.on()},removeHandler:function(t){var n=this.handlers;i(n,function(i,e){return i.equals(t)?(i.destroy(),!n.splice(e,1)):void 0})},matches:function(){return this.mql.matches||this.isUnconditional},clear:function(){i(this.handlers,function(t){t.destroy()}),this.mql.removeListener(this.listener),this.handlers.length=0},assess:function(){var t=this.matches()?"on":"off";i(this.handlers,function(i){i[t]()})}},r.prototype={register:function(t,s,r){var h=this.queries,u=r&&this.browserIsIncapable;return h[t]||(h[t]=new o(t,u)),e(s)&&(s={match:s}),n(s)||(s=[s]),i(s,function(i){h[t].addHandler(i)}),this},unregister:function(t,i){var n=this.queries[t];return n&&(i?n.removeHandler(i):(n.clear(),delete this.queries[t])),this}},new r});;/**/
/*
 *	jQuery dotdotdot 1.7.2
 *
 *	Copyright (c) Fred Heusschen
 *	www.frebsite.nl
 *
 *	Plugin website:
 *	dotdotdot.frebsite.nl
 *
 *	Licensed under the MIT license.
 *	http://en.wikipedia.org/wiki/MIT_License
 */
!function(t,e){function n(t,e,n){var r=t.children(),o=!1;t.empty();for(var i=0,d=r.length;d>i;i++){var l=r.eq(i);if(t.append(l),n&&t.append(n),a(t,e)){l.remove(),o=!0;break}n&&n.detach()}return o}function r(e,n,i,d,l){var s=!1,c="a table, thead, tbody, tfoot, tr, col, colgroup, object, embed, param, ol, ul, dl, blockquote, select, optgroup, option, textarea, script, style",u="script, .dotdotdot-keep";return e.contents().detach().each(function(){var f=this,h=t(f);if("undefined"==typeof f||3==f.nodeType&&0==t.trim(f.data).length)return!0;if(h.is(u))e.append(h);else{if(s)return!0;e.append(h),!l||h.is(d.after)||h.find(d.after).length||e[e.is(c)?"after":"append"](l),a(i,d)&&(s=3==f.nodeType?o(h,n,i,d,l):r(h,n,i,d,l),s||(h.detach(),s=!0)),s||l&&l.detach()}}),s}function o(e,n,r,o,d){var c=e[0];if(!c)return!1;var f=s(c),h=-1!==f.indexOf(" ")?" ":"　",p="letter"==o.wrap?"":h,g=f.split(p),v=-1,w=-1,b=0,y=g.length-1;for(o.fallbackToLetter&&0==b&&0==y&&(p="",g=f.split(p),y=g.length-1);y>=b&&(0!=b||0!=y);){var m=Math.floor((b+y)/2);if(m==w)break;w=m,l(c,g.slice(0,w+1).join(p)+o.ellipsis),a(r,o)?(y=w,o.fallbackToLetter&&0==b&&0==y&&(p="",g=g[0].split(p),v=-1,w=-1,b=0,y=g.length-1)):(v=w,b=w)}if(-1==v||1==g.length&&0==g[0].length){var x=e.parent();e.detach();var T=d&&d.closest(x).length?d.length:0;x.contents().length>T?c=u(x.contents().eq(-1-T),n):(c=u(x,n,!0),T||x.detach()),c&&(f=i(s(c),o),l(c,f),T&&d&&t(c).parent().append(d))}else f=i(g.slice(0,v+1).join(p),o),l(c,f);return!0}function a(t,e){return t.innerHeight()>e.maxHeight}function i(e,n){for(;t.inArray(e.slice(-1),n.lastCharacter.remove)>-1;)e=e.slice(0,-1);return t.inArray(e.slice(-1),n.lastCharacter.noEllipsis)<0&&(e+=n.ellipsis),e}function d(t){return{width:t.innerWidth(),height:t.innerHeight()}}function l(t,e){t.innerText?t.innerText=e:t.nodeValue?t.nodeValue=e:t.textContent&&(t.textContent=e)}function s(t){return t.innerText?t.innerText:t.nodeValue?t.nodeValue:t.textContent?t.textContent:""}function c(t){do t=t.previousSibling;while(t&&1!==t.nodeType&&3!==t.nodeType);return t}function u(e,n,r){var o,a=e&&e[0];if(a){if(!r){if(3===a.nodeType)return a;if(t.trim(e.text()))return u(e.contents().last(),n)}for(o=c(a);!o;){if(e=e.parent(),e.is(n)||!e.length)return!1;o=c(e[0])}if(o)return u(t(o),n)}return!1}function f(e,n){return e?"string"==typeof e?(e=t(e,n),e.length?e:!1):e.jquery?e:!1:!1}function h(t){for(var e=t.innerHeight(),n=["paddingTop","paddingBottom"],r=0,o=n.length;o>r;r++){var a=parseInt(t.css(n[r]),10);isNaN(a)&&(a=0),e-=a}return e}if(!t.fn.dotdotdot){t.fn.dotdotdot=function(e){if(0==this.length)return t.fn.dotdotdot.debug('No element found for "'+this.selector+'".'),this;if(this.length>1)return this.each(function(){t(this).dotdotdot(e)});var o=this;o.data("dotdotdot")&&o.trigger("destroy.dot"),o.data("dotdotdot-style",o.attr("style")||""),o.css("word-wrap","break-word"),"nowrap"===o.css("white-space")&&o.css("white-space","normal"),o.bind_events=function(){return o.bind("update.dot",function(e,d){e.preventDefault(),e.stopPropagation(),l.maxHeight="number"==typeof l.height?l.height:h(o),l.maxHeight+=l.tolerance,"undefined"!=typeof d&&(("string"==typeof d||d instanceof HTMLElement)&&(d=t("<div />").append(d).contents()),d instanceof t&&(i=d)),g=o.wrapInner('<div class="dotdotdot" />').children(),g.contents().detach().end().append(i.clone(!0)).find("br").replaceWith("  <br />  ").end().css({height:"auto",width:"auto",border:"none",padding:0,margin:0});var c=!1,u=!1;return s.afterElement&&(c=s.afterElement.clone(!0),c.show(),s.afterElement.detach()),a(g,l)&&(u="children"==l.wrap?n(g,l,c):r(g,o,g,l,c)),g.replaceWith(g.contents()),g=null,t.isFunction(l.callback)&&l.callback.call(o[0],u,i),s.isTruncated=u,u}).bind("isTruncated.dot",function(t,e){return t.preventDefault(),t.stopPropagation(),"function"==typeof e&&e.call(o[0],s.isTruncated),s.isTruncated}).bind("originalContent.dot",function(t,e){return t.preventDefault(),t.stopPropagation(),"function"==typeof e&&e.call(o[0],i),i}).bind("destroy.dot",function(t){t.preventDefault(),t.stopPropagation(),o.unwatch().unbind_events().contents().detach().end().append(i).attr("style",o.data("dotdotdot-style")||"").data("dotdotdot",!1)}),o},o.unbind_events=function(){return o.unbind(".dot"),o},o.watch=function(){if(o.unwatch(),"window"==l.watch){var e=t(window),n=e.width(),r=e.height();e.bind("resize.dot"+s.dotId,function(){n==e.width()&&r==e.height()&&l.windowResizeFix||(n=e.width(),r=e.height(),u&&clearInterval(u),u=setTimeout(function(){o.trigger("update.dot")},100))})}else c=d(o),u=setInterval(function(){if(o.is(":visible")){var t=d(o);(c.width!=t.width||c.height!=t.height)&&(o.trigger("update.dot"),c=t)}},500);return o},o.unwatch=function(){return t(window).unbind("resize.dot"+s.dotId),u&&clearInterval(u),o};var i=o.contents(),l=t.extend(!0,{},t.fn.dotdotdot.defaults,e),s={},c={},u=null,g=null;return l.lastCharacter.remove instanceof Array||(l.lastCharacter.remove=t.fn.dotdotdot.defaultArrays.lastCharacter.remove),l.lastCharacter.noEllipsis instanceof Array||(l.lastCharacter.noEllipsis=t.fn.dotdotdot.defaultArrays.lastCharacter.noEllipsis),s.afterElement=f(l.after,o),s.isTruncated=!1,s.dotId=p++,o.data("dotdotdot",!0).bind_events().trigger("update.dot"),l.watch&&o.watch(),o},t.fn.dotdotdot.defaults={ellipsis:"... ",wrap:"word",fallbackToLetter:!0,lastCharacter:{},tolerance:0,callback:null,after:null,height:null,watch:!1,windowResizeFix:!0},t.fn.dotdotdot.defaultArrays={lastCharacter:{remove:[" ","　",",",";",".","!","?"],noEllipsis:[]}},t.fn.dotdotdot.debug=function(){};var p=1,g=t.fn.html;t.fn.html=function(n){return n!=e&&!t.isFunction(n)&&this.data("dotdotdot")?this.trigger("update",[n]):g.apply(this,arguments)};var v=t.fn.text;t.fn.text=function(n){return n!=e&&!t.isFunction(n)&&this.data("dotdotdot")?(n=t("<div />").text(n).html(),this.trigger("update",[n])):v.apply(this,arguments)}}}(jQuery);
;/**/
/*!
 * jQuery Transit - CSS3 transitions and transformations
 * (c) 2011-2012 Rico Sta. Cruz <rico@ricostacruz.com>
 * MIT Licensed.
 *
 * http://ricostacruz.com/jquery.transit
 * http://github.com/rstacruz/jquery.transit
 */
(function(k){k.transit={version:"0.9.9",propertyMap:{marginLeft:"margin",marginRight:"margin",marginBottom:"margin",marginTop:"margin",paddingLeft:"padding",paddingRight:"padding",paddingBottom:"padding",paddingTop:"padding"},enabled:true,useTransitionEnd:false};var d=document.createElement("div");var q={};function b(v){if(v in d.style){return v}var u=["Moz","Webkit","O","ms"];var r=v.charAt(0).toUpperCase()+v.substr(1);if(v in d.style){return v}for(var t=0;t<u.length;++t){var s=u[t]+r;if(s in d.style){return s}}}function e(){d.style[q.transform]="";d.style[q.transform]="rotateY(90deg)";return d.style[q.transform]!==""}var a=navigator.userAgent.toLowerCase().indexOf("chrome")>-1;q.transition=b("transition");q.transitionDelay=b("transitionDelay");q.transform=b("transform");q.transformOrigin=b("transformOrigin");q.transform3d=e();var i={transition:"transitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd",WebkitTransition:"webkitTransitionEnd",msTransition:"MSTransitionEnd"};var f=q.transitionEnd=i[q.transition]||null;for(var p in q){if(q.hasOwnProperty(p)&&typeof k.support[p]==="undefined"){k.support[p]=q[p]}}d=null;k.cssEase={_default:"ease","in":"ease-in",out:"ease-out","in-out":"ease-in-out",snap:"cubic-bezier(0,1,.5,1)",easeOutCubic:"cubic-bezier(.215,.61,.355,1)",easeInOutCubic:"cubic-bezier(.645,.045,.355,1)",easeInCirc:"cubic-bezier(.6,.04,.98,.335)",easeOutCirc:"cubic-bezier(.075,.82,.165,1)",easeInOutCirc:"cubic-bezier(.785,.135,.15,.86)",easeInExpo:"cubic-bezier(.95,.05,.795,.035)",easeOutExpo:"cubic-bezier(.19,1,.22,1)",easeInOutExpo:"cubic-bezier(1,0,0,1)",easeInQuad:"cubic-bezier(.55,.085,.68,.53)",easeOutQuad:"cubic-bezier(.25,.46,.45,.94)",easeInOutQuad:"cubic-bezier(.455,.03,.515,.955)",easeInQuart:"cubic-bezier(.895,.03,.685,.22)",easeOutQuart:"cubic-bezier(.165,.84,.44,1)",easeInOutQuart:"cubic-bezier(.77,0,.175,1)",easeInQuint:"cubic-bezier(.755,.05,.855,.06)",easeOutQuint:"cubic-bezier(.23,1,.32,1)",easeInOutQuint:"cubic-bezier(.86,0,.07,1)",easeInSine:"cubic-bezier(.47,0,.745,.715)",easeOutSine:"cubic-bezier(.39,.575,.565,1)",easeInOutSine:"cubic-bezier(.445,.05,.55,.95)",easeInBack:"cubic-bezier(.6,-.28,.735,.045)",easeOutBack:"cubic-bezier(.175, .885,.32,1.275)",easeInOutBack:"cubic-bezier(.68,-.55,.265,1.55)"};k.cssHooks["transit:transform"]={get:function(r){return k(r).data("transform")||new j()},set:function(s,r){var t=r;if(!(t instanceof j)){t=new j(t)}if(q.transform==="WebkitTransform"&&!a){s.style[q.transform]=t.toString(true)}else{s.style[q.transform]=t.toString()}k(s).data("transform",t)}};k.cssHooks.transform={set:k.cssHooks["transit:transform"].set};if(k.fn.jquery<"1.8"){k.cssHooks.transformOrigin={get:function(r){return r.style[q.transformOrigin]},set:function(r,s){r.style[q.transformOrigin]=s}};k.cssHooks.transition={get:function(r){return r.style[q.transition]},set:function(r,s){r.style[q.transition]=s}}}n("scale");n("translate");n("rotate");n("rotateX");n("rotateY");n("rotate3d");n("perspective");n("skewX");n("skewY");n("x",true);n("y",true);function j(r){if(typeof r==="string"){this.parse(r)}return this}j.prototype={setFromString:function(t,s){var r=(typeof s==="string")?s.split(","):(s.constructor===Array)?s:[s];r.unshift(t);j.prototype.set.apply(this,r)},set:function(s){var r=Array.prototype.slice.apply(arguments,[1]);if(this.setter[s]){this.setter[s].apply(this,r)}else{this[s]=r.join(",")}},get:function(r){if(this.getter[r]){return this.getter[r].apply(this)}else{return this[r]||0}},setter:{rotate:function(r){this.rotate=o(r,"deg")},rotateX:function(r){this.rotateX=o(r,"deg")},rotateY:function(r){this.rotateY=o(r,"deg")},scale:function(r,s){if(s===undefined){s=r}this.scale=r+","+s},skewX:function(r){this.skewX=o(r,"deg")},skewY:function(r){this.skewY=o(r,"deg")},perspective:function(r){this.perspective=o(r,"px")},x:function(r){this.set("translate",r,null)},y:function(r){this.set("translate",null,r)},translate:function(r,s){if(this._translateX===undefined){this._translateX=0}if(this._translateY===undefined){this._translateY=0}if(r!==null&&r!==undefined){this._translateX=o(r,"px")}if(s!==null&&s!==undefined){this._translateY=o(s,"px")}this.translate=this._translateX+","+this._translateY}},getter:{x:function(){return this._translateX||0},y:function(){return this._translateY||0},scale:function(){var r=(this.scale||"1,1").split(",");if(r[0]){r[0]=parseFloat(r[0])}if(r[1]){r[1]=parseFloat(r[1])}return(r[0]===r[1])?r[0]:r},rotate3d:function(){var t=(this.rotate3d||"0,0,0,0deg").split(",");for(var r=0;r<=3;++r){if(t[r]){t[r]=parseFloat(t[r])}}if(t[3]){t[3]=o(t[3],"deg")}return t}},parse:function(s){var r=this;s.replace(/([a-zA-Z0-9]+)\((.*?)\)/g,function(t,v,u){r.setFromString(v,u)})},toString:function(t){var s=[];for(var r in this){if(this.hasOwnProperty(r)){if((!q.transform3d)&&((r==="rotateX")||(r==="rotateY")||(r==="perspective")||(r==="transformOrigin"))){continue}if(r[0]!=="_"){if(t&&(r==="scale")){s.push(r+"3d("+this[r]+",1)")}else{if(t&&(r==="translate")){s.push(r+"3d("+this[r]+",0)")}else{s.push(r+"("+this[r]+")")}}}}}return s.join(" ")}};function m(s,r,t){if(r===true){s.queue(t)}else{if(r){s.queue(r,t)}else{t()}}}function h(s){var r=[];k.each(s,function(t){t=k.camelCase(t);t=k.transit.propertyMap[t]||k.cssProps[t]||t;t=c(t);if(k.inArray(t,r)===-1){r.push(t)}});return r}function g(s,v,x,r){var t=h(s);if(k.cssEase[x]){x=k.cssEase[x]}var w=""+l(v)+" "+x;if(parseInt(r,10)>0){w+=" "+l(r)}var u=[];k.each(t,function(z,y){u.push(y+" "+w)});return u.join(", ")}k.fn.transition=k.fn.transit=function(z,s,y,C){var D=this;var u=0;var w=true;if(typeof s==="function"){C=s;s=undefined}if(typeof y==="function"){C=y;y=undefined}if(typeof z.easing!=="undefined"){y=z.easing;delete z.easing}if(typeof z.duration!=="undefined"){s=z.duration;delete z.duration}if(typeof z.complete!=="undefined"){C=z.complete;delete z.complete}if(typeof z.queue!=="undefined"){w=z.queue;delete z.queue}if(typeof z.delay!=="undefined"){u=z.delay;delete z.delay}if(typeof s==="undefined"){s=k.fx.speeds._default}if(typeof y==="undefined"){y=k.cssEase._default}s=l(s);var E=g(z,s,y,u);var B=k.transit.enabled&&q.transition;var t=B?(parseInt(s,10)+parseInt(u,10)):0;if(t===0){var A=function(F){D.css(z);if(C){C.apply(D)}if(F){F()}};m(D,w,A);return D}var x={};var r=function(H){var G=false;var F=function(){if(G){D.unbind(f,F)}if(t>0){D.each(function(){this.style[q.transition]=(x[this]||null)})}if(typeof C==="function"){C.apply(D)}if(typeof H==="function"){H()}};if((t>0)&&(f)&&(k.transit.useTransitionEnd)){G=true;D.bind(f,F)}else{window.setTimeout(F,t)}D.each(function(){if(t>0){this.style[q.transition]=E}k(this).css(z)})};var v=function(F){this.offsetWidth;r(F)};m(D,w,v);return this};function n(s,r){if(!r){k.cssNumber[s]=true}k.transit.propertyMap[s]=q.transform;k.cssHooks[s]={get:function(v){var u=k(v).css("transit:transform");return u.get(s)},set:function(v,w){var u=k(v).css("transit:transform");u.setFromString(s,w);k(v).css({"transit:transform":u})}}}function c(r){return r.replace(/([A-Z])/g,function(s){return"-"+s.toLowerCase()})}function o(s,r){if((typeof s==="string")&&(!s.match(/^[\-0-9\.]+$/))){return s}else{return""+s+r}}function l(s){var r=s;if(k.fx.speeds[r]){r=k.fx.speeds[r]}return o(r,"ms")}k.transit.getTransitionValue=g})(jQuery);;/**/
// Prevent breaks if console.log does not exist.
if (typeof console === "undefined") {
  console = {
    log: function (msg) {}
  };
}

(function ($, Drupal) {
  // Delegate .transition() calls to .animate()
  // if the browser can't do CSS transitions.
  if (!$.support.transition) {
    $.fn.transition = $.fn.animate;
  }

  var $window = $(window);

  Drupal.platinumResponsive = {};

  Drupal.platinumResponsive.breakpoints = {
    sizeSmallX: 320,
    sizeSmall: 480,
    sizeMedium: 768,
    sizeLarge: 960,
    sizeLargeX: 1024,
    sizeVertRC: 785,
    sizeVertFront: 650
  };

  Drupal.platinumResponsive.mediaQueries = {
    smallDownMq: 'only all and (max-width:' + (Drupal.platinumResponsive.breakpoints.sizeSmall - 1) + 'px)',
    smallUpMq: 'only all and (min-width:' + Drupal.platinumResponsive.breakpoints.sizeSmall + 'px)',
    mediumDownMq: 'only all and (max-width:' + (Drupal.platinumResponsive.breakpoints.sizeMedium - 1) + 'px)',
    mediumUpMq: 'only all and (min-width:' + Drupal.platinumResponsive.breakpoints.sizeMedium + 'px)',
    largeDownMq: 'only all and (max-width:' + (Drupal.platinumResponsive.breakpoints.sizeLarge - 1) + 'px)',
    largeUpMq: 'only all and (min-width:' + Drupal.platinumResponsive.breakpoints.sizeLarge + 'px)',
    mediumUpVertRCUpMq: 'only all and (min-width:' + Drupal.platinumResponsive.breakpoints.sizeMedium + 'px) and (min-height:' + Drupal.platinumResponsive.breakpoints.sizeVertRC + 'px)',
    mediumUpVertFrontUpMq: 'only all and (min-width:' + Drupal.platinumResponsive.breakpoints.sizeMedium + 'px) and (min-height:' + Drupal.platinumResponsive.breakpoints.sizeVertFront + 'px)'
  };

  // Stores data about the currently browsing device.
  Drupal.platinumResponsive.devices = {};

  Drupal.youtubeReady = false;

  window.onYouTubeIframeAPIReady = function () {
    Drupal.youtubeReady = true;
  };

  // Adds and extra blank select after the empty primary option.
  $(document).bind('shsAfterTermChildrenAjax', function(event, $element, settings, parent_value, default_value, base_id, data) {
    if (parent_value == 0 || (parent_value == 'All' && $element.hasClass('shs-select-level-2'))) {
      var $select = $('<select>');
      $select
        .addClass('shs-tmp-select')
        .append('<option>-</option>');
      $element.parent().append($select);
    }
    else {
      $('.shs-tmp-select', $element.parent()).remove();
    }
  });

  // @TODO: [js-refactor] Extract page specific behaviors into separate behavior objects.
  Drupal.behaviors.platinumTheme = {
    attach: function (context, settings) {
      var $html = $('html');
      var $body = $('body');
      var $megaMenuMobileMiniMenuWrapper = $('#megamenu-mobile-mini');
      var $megaMenuMobileMiniMenu = $megaMenuMobileMiniMenuWrapper.find('.menu').first();

      // If device is mobile (or tablet).
      Drupal.platinumResponsive.devices.isMobile = $body.hasClass('mobile');

      // If device is desktop.
      Drupal.platinumResponsive.devices.isDesktop = !Drupal.platinumResponsive.devices.isMobile || $body.hasClass('desktop');

      // Apply accordion to mini mobile menu.
      $body.once('mobile-menu-accordion', function () {
        enquire.register(Drupal.platinumResponsive.mediaQueries.mediumDownMq, {
          deferSetup: true,
          setup: function () {
            // Make sure the behavior is only applied once.
            $megaMenuMobileMiniMenu.once('sbs-platinum-theme-behavior-mobile-menu', function () {
              Drupal.platinumTheme.applyAccordionToMenu($megaMenuMobileMiniMenu);

              // Remove what we don't need for this menu.
              $megaMenuMobileMiniMenu.find('.mm-section-wrapper > a').unbind();

              // Handle clicking on section titles.
              $megaMenuMobileMiniMenu.find('.mm-section-title').click(function (event) {
                var $this = $(this);
                var $thisWrapper = $this.next('.mm-section-wrapper');
                $megaMenuMobileMiniMenu.find('.mm-section-wrapper').not($thisWrapper).slideUp();
                $thisWrapper.slideToggle();
              });

              // Mobile Menu Show.
              $body.delegate('#mobile-nav-trigger, #mobile-nav-trigger-nested, #mobile-nav-footer-trigger, #megamenu-mobile-mini-blocker', 'click', function () {
                $html.toggleClass('mobile-menu-open');
              });

              function setOverflow() {
                $megaMenuMobileMiniMenuWrapper.addClass('platinum-theme-scrollable');
              }

              function resizeHandler() {
                $megaMenuMobileMiniMenuWrapper.removeClass('platinum-theme-scrollable');
                setTimeout(setOverflow, 10);
              }

              /**
               * We need to do this, because of the following bug with
               * "-webkit-overflow-scroll: touch":
               *
               * @see {@link https://ps.acquia.com/redmine/issues/8158}
               * @see {@link http://stackoverflow.com/questions/9084118/webkit-overflow-scrolling-touch-css-bug-on-ipad}
               */
              $window.bind("debouncedresize", function (event) {
                resizeHandler();
              });
            });
          },
          match: function () {
          },
          unmatch: function () {
          }
        });
      });

      //
      // Truncate texts on mobile width.
      //

      var $truncateTileDescriptions = $("body.node-type-school-landing-page, body.node-type-programme-landing-page").find(".field-name-field-article-tile-description .field-items .field-item");
      var $truncateReadMoreLinks = $("body.page-ideas-and-impact .node-tile .more a");

      $body.once('text-truncate-mobile', function () {
        enquire.register(Drupal.platinumResponsive.mediaQueries.mediumDownMq, {
          deferSetup: true,
          setup: function () {
          },
          match: function () {
            // Limit tile descriptions on school landing pages and programme landing pages.
            $truncateTileDescriptions
              .once('sbs-platinum-theme-truncate-text')
              .dotdotdot({
                height: 60,
                wrap: 'letter'
              });

            // Limit tile read more links on ideas and impact page.
            $truncateReadMoreLinks
              .once('sbs-platinum-theme-truncate-text')
              .dotdotdot({
                height: 19,
                wrap: 'letter'
              });
          },
          unmatch: function () {
            // Remove truncation.
            $truncateTileDescriptions
              .removeOnce('sbs-platinum-theme-truncate-text')
              .trigger('destroy.dot');
            $truncateReadMoreLinks
              .removeOnce('sbs-platinum-theme-truncate-text')
              .trigger('destroy.dot');
          }
        });
      });


      //
      // Truncate texts on desktop width.
      //

      var $truncateWideTileText = $("body.node-type-school-landing-page, body.node-type-programme-landing-page").find(".tile-double h2 a");

      $body.once('text-truncate-desktop', function () {
        enquire.register(Drupal.platinumResponsive.mediaQueries.mediumUpMq, {
          deferSetup: true,
          setup: function () {
          },
          match: function () {
            // Limit wide tile text on school landing pages and programme landing pages.
            $truncateWideTileText
              .once('sbs-platinum-theme-truncate-text')
              .dotdotdot({
                height: 32,
                wrap: 'letter'
              });
          },
          unmatch: function () {
            // Remove truncation.
            $truncateWideTileText
              .removeOnce('sbs-platinum-theme-truncate-text')
              .trigger('destroy.dot');
          }
        });

        $('.field-name-field-faq-questions').once('faq-questions', function () {
          var allQuestions = $('.field-name-field-faq-question');
          $('.field-name-field-faq-question', this).click(function () {
            $('.field-name-field-faq-answer').not($('.field-name-field-faq-answer', $(this).parent())).slideUp();
            $('.field-name-field-faq-answer', $(this).parent()).slideToggle();
            allQuestions.not($(this)).removeClass('open');
            $(this).toggleClass('open');
          });
        });
        $('.backtotop').click(function () {
          $('html,body').animate({
            scrollTop: 0
          }, 500);
        });
      });

      //
      // Programme carousel behaviours.
      //

      var $programmeTypeCarousel = $('.view-programme-type-carousel-item-lister', context);
      var $programmeTypeCarouselOriginalContent = $programmeTypeCarousel.find('.view-content').clone(true);

      // Programme carousel on mobile.
      $programmeTypeCarousel.once('programme-carousel-mobile', function () {
        enquire.register(Drupal.platinumResponsive.mediaQueries.mediumDownMq, {
          deferSetup: true,
          setup: function () {
            var $programmeTypeCarouselMobile = $programmeTypeCarouselOriginalContent.clone(true);
            $programmeTypeCarouselMobile.removeClass('view-content');
            $programmeTypeCarouselMobile.addClass('programme-carousel-mobile');

            var $carouselTabs = $programmeTypeCarouselMobile.find('.carousel-tab');
            var $carouselItems = $programmeTypeCarouselMobile.find('.carousel-item');

            // Init carousel.
            $carouselTabs.each(function () {
              var $thisTab = $(this);
              var thisTabIndex = $thisTab.attr('class').match(/(item-\d)/)[1];
              var $thisData = $carouselItems.filter('.' + thisTabIndex);

              // Rearrange fields a bit.
              $thisTab.find('.field-name-field-carousel-sub-title').prependTo($thisData);
              $thisTab.find('h2').clone().prependTo($thisData);
              $thisData.find('.desc a').append('<span class="read-more">' + Drupal.t('Read more') + '</span>');
              $thisData.insertAfter($thisTab);
            });

            // Remove unused element.
            $programmeTypeCarouselMobile.find('#carousel-data').remove();

            // Carousel tabs are closed by default.
            $carouselTabs.removeClass('active');
            $carouselItems.removeClass('active');

            // Handle clicking tab headers.
            $carouselTabs.click(function (event) {
              var $thisTab = $(this);
              var thisTabIndex = $thisTab.attr('class').match(/(item-\d)/)[1];
              var $thisData = $carouselItems.filter('.' + thisTabIndex);

              $carouselTabs.not($thisTab).removeClass('active');
              $carouselItems.not($thisData).removeClass('active');
              $thisTab.toggleClass('active');
              $thisData.toggleClass('active');
            });

            $programmeTypeCarousel.find('.view-content').hide();
            $programmeTypeCarousel.append($programmeTypeCarouselMobile);
          },
          match: function () {
            $programmeTypeCarousel.show();
            $programmeTypeCarousel.find('.programme-carousel-mobile').show();
          },
          unmatch: function () {
            $programmeTypeCarousel.find('.programme-carousel-mobile').hide();
          }
        });
      });

      // Programme carousel on desktop.
      $programmeTypeCarousel.once('programme-carousel', function () {
        enquire.register(Drupal.platinumResponsive.mediaQueries.mediumUpMq, {
          deferSetup: true,
          setup: function () {
            $programmeTypeCarousel.find('.view-content').addClass('programme-carousel-desktop');

            var $allTabs = $programmeTypeCarousel.find('.carousel-tab');
            var $carouselItems = $programmeTypeCarousel.find('#carousel-data .carousel-item');

            $allTabs.click(function () {
              var $thisTab = $(this);
              var itemNo = $thisTab.index();

              $allTabs.removeClass('active');
              $thisTab.addClass('active');

              $carouselItems.hide();
              $carouselItems.eq(itemNo).show();
            });

            // Dynamically adjust the height of the carousel container,
            // to fit content.
            $window.smartresize(function () {
              $programmeTypeCarousel.find('.view-content').height($programmeTypeCarousel.find('#carousel-data .carousel-item.active').height());
            });
          },
          match: function () {
            $programmeTypeCarousel.find('.programme-carousel-desktop').show();
          },
          unmatch: function () {
            $programmeTypeCarousel.find('.programme-carousel-desktop').hide();
          }
        });
      });

      // How to apply page tabs and behaviour.
      $('.node-type-how-to-apply', context).once('apply-page-tabs', function (){
        var keyDates = $('.right .field-name-field-hta-step-by-step-pages > .field-items > .field-item');
        var tabs = $('.content-col-2 > .field-name-field-hta-step-by-step-pages > .field-items > .field-item');
        var content = $('.left .field-name-field-hta-step-by-step-pages > .field-items > .field-item');
        var finalLink = $('.field-name-field-hta-final-link-url');

        // Main next link function.
        $('.left .field-name-field-hta-next-step-link-text').click(function (){
          $('.content-col-2 > .field-name-field-hta-page-title').removeClass('active');
          $('.field-name-field-hta-page-title, .field-name-field-hta-body-content, .field-name-field-hta-next-step-link-text', $(this).parent()).hide();
          content.eq(0).show();
          if (content.eq(0).hasClass('item-last')) {
            finalLink.show();
          }
          tabs.eq(0).addClass('active');
          $('.field-type-datetime', keyDates.eq(0)).addClass('active');
        });

        // Main tab function.
        $('.content-col-2 > .field-name-field-hta-page-title').click(function (){
          content.hide();
          $(this).addClass('active');
          tabs.removeClass('active');
          finalLink.hide();
          $('.field-type-datetime', keyDates).removeClass('active past');
          $('.field-name-field-hta-page-title, .field-name-field-hta-body-content, .field-name-field-hta-next-step-link-text').show();
        });

        // Steps next links.
        $('.left .field-name-field-hta-step-next-text').click(function (){
          var itemNo = $(this).parent().index()+1;
          content.hide();
          content.eq(itemNo).show();
          if (content.eq(itemNo).hasClass('item-last')) {
            finalLink.show();
          }
          tabs.removeClass('active');
          tabs.eq(itemNo).addClass('active');
          $('.field-type-datetime', keyDates).removeClass('active');
          $('.field-type-datetime', keyDates.eq(itemNo-1)).addClass('past');
          $('.field-type-datetime', keyDates.eq(itemNo)).addClass('active');
        });

        // Steps tabs function.
        $('.content-col-2 > .field-name-field-hta-step-by-step-pages > .field-items > .field-item').click(function (){
          var itemNo = $(this).index();
          content.hide();
          content.eq(itemNo).show();
          finalLink.hide();
          if (content.eq(itemNo).hasClass('item-last')) {
            finalLink.show();
          }
          tabs.removeClass('active');
          $(this).addClass('active');
          $('.content-col-2 > .field-name-field-hta-page-title').removeClass('active');
          $('.field-name-field-hta-page-title, .field-name-field-hta-body-content, .field-name-field-hta-next-step-link-text', '.left').hide();
          $('.field-type-datetime', keyDates).removeClass('active past');
          // if (itemNo > 0) {
            //$('.field-type-datetime', keyDates.eq(itemNo-1)).addClass('past');
            $('.field-type-datetime', keyDates.slice(0, itemNo)).addClass('past');
          // }
          $('.field-type-datetime', keyDates.eq(itemNo)).addClass('active');
        });

      });

      if ($body.hasClass('page-ideas-and-impact')) {
        $('#ideas-and-impact-results').once('ideas-and-impact-isotope', function (){
          $(this).isotope({
            itemSelector:'.node-tile',
            animationEngine: (Drupal.platinumResponsive.devices.isMobile ? 'best-available' : 'jquery')
          });
        });
      }

      $('#dashboard', context).once('dashboard-tabs', function (){

        var dashboard = $(this);
        var dashboardTabs = $('.dashboard-tab', dashboard);
        var dashboardElements = $('.dashboard', dashboard);
        $('.dashboard-inner', dashboard).each(function (){
          $(this).isotope({
            itemSelector:'.entity-dashboard-tactical-box',
            animationEngine: 'best-available'
          });
        });

        dashboardTabs.eq(0).addClass('active');
        dashboardElements.not(':eq(0)').hide();
        dashboardTabs.click(function (){
          $('html,body').animate({
            scrollTop: $(window).height()
          }, 500);

          var clickedTab = $(this);
          var index = dashboardTabs.index(clickedTab);
          var $isotope = $('.isotope', dashboardElements.eq(index));

          dashboardTabs.removeClass('active');
          clickedTab.addClass('active');
          dashboardElements.hide();
          dashboardElements.eq(index).show();

          // Trigger the custom event, lay out tiles properly.
          $window.trigger('responsiveIsotope');
        });
      });

      // Gallery, full node.
      $('.gallery').once('full-node-gallery', function (){
        var thumbs = $('.view-display-id-full_gallery_attachment li, .view-display-id-article_gallery_attachment li, .view-display-id-article_banner_gallery_attachment li, .view-display-id-event_news_gallery_attachment li');
        var count = thumbs.length;
        var images = $('.view-display-id-full_gallery li, .view-display-id-article_gallery li, .view-display-id-event_news_gallery li, .view-display-id-article_banner_gallery li');
        var countHolder = $('#count .all');
        var posHolder = $('#count .current');
        var thumbsHolder = $('#thumbs');
        var allThumbs = $('.item-list ul' ,thumbsHolder);
        var thumbWidth = 130;

        if (count > 1) {
          $('#main_right').show().addClass('clickable');
        }

        if (thumbsHolder.width() < count * thumbWidth) {
          $('#thumbs_right').show().addClass('clickable');
        }

        thumbs.eq(0).addClass('active');
        images.eq(0).addClass('active');
        countHolder.text(count);
        posHolder.text('1');

        // Thumbnail images onclick.
        thumbs.click(function (){
          var clickedThumb = $(this);
          var index = thumbs.index(clickedThumb);
          images.hide().removeClass('active');
          images.eq(index).show().addClass('active');
          thumbs.removeClass('active');
          clickedThumb.addClass('active');
          posHolder.text(index+1);
          if (index+1 == count) {
            $('#main_right').hide();
          }
          else {
            $('#main_right').show().addClass('clickable');
          }
          if (index == 0) {
            $('#main_left').hide();
          }
          else {
            $('#main_left').show().addClass('clickable');
          }
        });

        // Thumbnail navigation.
        $('#thumbs_right.clickable').live('click', function (){
          $(this).removeClass('clickable');
          allThumbs.animate({
            left: '-=130'
          }, 200, function (){
            $('#thumbs_left').show().addClass('clickable');
            var allThumbsPos = allThumbs.position();
            if (allThumbsPos.left + count * thumbWidth <= thumbsHolder.width()) {
              $('#thumbs_right').hide();
            }
            else {
              $('#thumbs_right').addClass('clickable');
            }
          })
        });

        $('#thumbs_left.clickable').live('click', function (){
          $(this).removeClass('clickable');
          allThumbs.animate({
            left: '+=130'
          }, 200, function (){
            var allThumbsPos = allThumbs.position();
            if (allThumbsPos.left == 0) {
              $('#thumbs_left').hide();
            }
            else {
              $('#thumbs_left').addClass('clickable');
            }
            if (allThumbsPos.left + count * thumbWidth > thumbsHolder.width()) {
              $('#thumbs_right').show().addClass('clickable');
            }
          });
        });

        // Main navigation.
        $('#main_right.clickable').live('click', function (){
          $(this).removeClass('clickable');
          var current = $('li.active', images.parent());
          var index = images.index(current);
          if (index+2 == count) {
            $('#main_right').hide();
          }
          else {
            $(this).addClass('clickable');
          }
          $('#main_left').show().addClass('clickable');
          current.hide().removeClass('active');
          images.eq(index+1).show().addClass('active');
          thumbs.removeClass('active');
          thumbs.eq(index+1).addClass('active');
          posHolder.text(index+2);
        });

        $('#main_left.clickable').live('click', function (){
          $(this).removeClass('clickable');
          var current = $('li.active', images.parent());
          var index = images.index(current);
          if (index == 1) {
            $('#main_left').hide();
          }
          else {
            $(this).addClass('clickable');
          }
          $('#main_right').show().addClass('clickable');
          current.hide().removeClass('active');
          images.eq(index-1).show().addClass('active');
          thumbs.removeClass('active');
          thumbs.eq(index-1).addClass('active');
          posHolder.text(index);
        });
      });

      $('.node-type-programme-landing-page', context).once('prog-landing', function (){
        var background = $('#background').data('url');
        $('#background').height($(document).height());
        $("#background").backstretch(background);
      });

      $('.node-type-feature-page', context).once('feat-page', function (){
        var background = $('#background').data('url');
        $('#background').height($(document).height()-160);
        $("#background").backstretch(background);

        // Move the big tile in the main content of the view and initialize isotope
        var $node = $('#section-inner > .node');
        $('#section-inner > .view > .view-content').prepend($node);
        var isotopeSetup = {
          name: 'feature_page_tiles',
          options: {
            grid_width: 240
          }
        };
        Drupal.isotopeConnector.applyIsotope($('#tiles .view-content'), isotopeSetup);
      });

      $('.page-events, .page-og-events, .page-ideas-and-impact-events, .page-community-events').once('page-events', function () {
        var qTabs = $('.qtab', $(this));
        var tabBtn = $('h2.pane-title', qTabs);
        var subURL = document.URL.split(/[_=]/);
        if ($.inArray("past", subURL) === -1) {
          past = false;
        } else {
          past = true;
        }
        $('.view-events-listing, .view-section-event-listing', qTabs.eq(1)).hide();
        tabBtn.eq(0).after(tabBtn.eq(1)).addClass('active');
        tabBtn.click(function() {
            var clicked = $(this);
            var idx = tabBtn.index(clicked);
            $('.view-events-listing, .view-section-event-listing', qTabs).hide();
            $('.view-events-listing, .view-section-event-listing', qTabs.eq(idx)).show();
            tabBtn.removeClass('active');
            clicked.addClass('active');
        });
        if (past) {
          $('.view-events-listing, .view-section-event-listing', qTabs.eq(0)).hide();
          $('.view-events-listing, .view-section-event-listing', qTabs.eq(1)).show();
          tabBtn.eq(0).removeClass('active');
          tabBtn.eq(1).addClass('active');
        }
      });

      $('.page-oxford').once('page-oxford', function (){
        var background = $('#background-data').data('url');
        docHeight = $(document).height();
        $('#parallax-container').height(docHeight - 130);
        $("#oxford-background").backstretch(background);
      });

      // Research center carousel.
      $('#rc-carousel', context).once('rc-carousel', function (){
        var holder = $(this);
        var wrapper = $('.carousel-wrapper', this);
        var pages = $('.carousel-page', wrapper);
        var pagesCount = pages.length;
        var currentpage = 0;

        if (pagesCount > 1) {
          pages.hide();
          pages.eq(0).addClass('active').show();
          holder.prepend('<div id="c-up"></div>').append('<div id="c-down"></div>');

          function showPage(pageIndex) {
            pages.hide();
            pages.eq(pageIndex).fadeIn();
            currentpage = pageIndex;
          }

          $('#c-up').click(function (){
            if (currentpage - 1 < 0) {
              showPage(pagesCount - 1);
            }
            else {
              showPage(currentpage - 1);
            }
          });

          $('#c-down').click(function (){
            if (currentpage + 1 == pagesCount) {
              showPage(0);
            }
            else {
              showPage(currentpage + 1);
            }
          });
        }
      });

      // Site Search make a select
      if ($body.hasClass('page-site-search')) {
        $body.once('site-search-select-mobile', function () {
          enquire.register(Drupal.platinumResponsive.mediaQueries.mediumDownMq, {
            deferSetup: true,
            setup: function () {
              $('#section-inner ul.menu').each(function () {
                var select = $(document.createElement('select')).insertAfter('#platinum-search-search-box--3 > div').addClass('mobile-list');

                // Aggregate option elements
                $('> li a:not(.no-results)', this).each(function () {
                  var a = $(this).click(function () {
                      if ($(this).attr('target') === '_self') {
                        window.open(this.href);
                      }
                      else {
                        window.location.href = this.href;
                      }
                    }),
                    option = $(document.createElement('option')).appendTo(select).val(this.href).html($(this).text()).click(function () {
                      a.click();
                    });
                  if ($(this).hasClass('active')) {
                    option.attr('selected', 'selected');
                  }
                });

                $('.mobile-list').change(function () {
                  var url = $(".mobile-list option:selected").val();
                  window.open(url, "_self");
                });
              });
            },
            match: function () {
              $('.mobile-list').show();
            },
            unmatch: function () {
              $('.mobile-list').hide();
            }
          });
        });
      }

      // sitemap behaviour
      $(".human-sitemap").each(function() {
        var $tabs = $(this).find(".views-row"),
          $sitemap_container = $(this),
          $title_container = $("<div class='sitemap-navigation' />").insertBefore($(this).find(".view-platinum-main-menu"));
        $tabs.each(function() {
          var $title = $(this).find("> .views-field-title").detach(),
            $links = $(this);
          $title.appendTo($title_container);
          $(this).hide();

          $title.click(function() {
            $links.show().siblings().hide();
            $(this).addClass("active").siblings().removeClass("active");
          });
        });
      });

      $(".front .field-name-field-home-news").find(".field-name-field-home-news-date").each(function() {
        $(this).nextUntil(".field-name-field-home-news-date").andSelf().wrapAll("<div class='news-item' />");
      });
      $(".front .field-name-field-home-events").find(".field-name-field-home-events-date").each(function() {
        $(this).nextUntil(".field-name-field-home-events-date").andSelf().wrapAll("<div class='events-item' />");
      });

      $(".front").find(".news-item, .events-item").click(function() {
        location.href = $(this).find("a").get(0).href;
      });
      $(".front").find(".field-name-field-home-tactical-box > .field-items > .field-item, .field-name-field-home-tactical-box-row-2 > .field-items > .field-item").click(function() {
        location.href = $(this).find("a").get(0).href;
      }).css("cursor", "pointer");

      $(".front .field-name-field-home-news").wrap("<div class='content-wrapper' />").append("<div class='field-name-field-home-tac-read-more-link'><a href='/school/news'>See all news stories</a></div>");
      $(".front .field-name-field-home-events").wrap("<div class='content-wrapper' />").append("<div class='field-name-field-home-tac-read-more-link'><a class='read-more' href='/school/events-1'>See all events</a></div>");

      $window.resize();
    },

    detach:function (context, settings, trigger) {
      if (trigger === 'unload') {
        $.waypoints('destroy');
      }
    }
  };

  Drupal.behaviors.schoolNews = {
    attach: function (context) {

      // The school news page topvideos autoplay.
      $('#school-news-top-videos', context).once('school-top-autoplay', function () {
        var $schoolNewsTopVideos = $(this);
        var $videos = $('.video', this);

        $videos.each(function () {
          var $thisVideo = $(this);
          Drupal.platinumTheme.applyVideoAutoplay({
            videoField: $thisVideo,
            previewElement: $thisVideo.find('.field-name-field-sn-video-thumbnail, .field-name-field-sn-video-caption-text')
          });
        });

        // Add the 'features' toogle on mobile version.
        enquire.register(Drupal.platinumResponsive.mediaQueries.largeDownMq, {
          deferSetup: true,
          setup: function () {
            $schoolNewsTopVideos.wrap('<div class="mobile-features-wrapper"/>');

            var $wrapper = $schoolNewsTopVideos.parent();

            // Calculate the correct height of the videos wrapper element.
            function calculateVideosHeight() {
              var newHeight;

              if (Modernizr.mq(Drupal.platinumResponsive.mediaQueries.mediumDownMq)) {
                newHeight = 0;
                $videos.each(function () {
                  newHeight += $(this).height();
                });
              }
              else {
                newHeight = $videos.first().height();
              }

              return newHeight;
            }

            var $features = $('<div class="mobile-features-title"/>')
              .text(Drupal.t('Features'))
              .bind('click', function () {
                $wrapper.toggleClass('features-open');

                if ($wrapper.is('.features-open')) {
                  $schoolNewsTopVideos.transition({
                    duration: 500,
                    height: calculateVideosHeight()
                  });
                }
                else {
                  $schoolNewsTopVideos.transition({
                    duration: 500,
                    height: 0
                  });
                }
              });

            $wrapper.prepend($features);
            $schoolNewsTopVideos.data('mobileFeaturesToggle', $features);

            // Handle page resizing (orientation)
            if (!!$.fn.smartresize) {
              $window.smartresize(function (event) {
                if ($wrapper.is('.features-open')) {
                  $schoolNewsTopVideos.transition({
                    duration: 500,
                    height: calculateVideosHeight()
                  });
                }
              });
            }
          },
          match: function () {
            $schoolNewsTopVideos.data('mobileFeaturesToggle').show();
          },
          unmatch: function () {
            $schoolNewsTopVideos.data('mobileFeaturesToggle').hide();
            $schoolNewsTopVideos.css('height', '');
          }
        });
      });

      var mostPopularLinks = $('.node-type-the-school-news', context)
        .find('.view-display-id-most_popular_news')
        .find('div.node')
        .find('h2')
        .find('a');
      var mostPopularLinksHeight = parseInt(mostPopularLinks.first().css('line-height'), 10) * 3;
      mostPopularLinks.each(function () {
        var $this = $(this);
        $this.once('school-news-most-populat-truncation').dotdotdot({
          height: mostPopularLinksHeight,
          tolerance: 5,
          watch: true,
          wrap: 'letter',
          ellipsis: ' (...)',
          callback: function (isTruncated, orgContent) {
            $this.attr('title', orgContent.text());
          }
        });
      });
    }
  };

  Drupal.platinumTheme = {
    oldNodeTiles: {},
    newNodeTiles: {},
    oldListElements: {},
    newListElements: {}
  };

  /**
   * Temporary solution for the "wait until custom fonts are loaded" problem.
   *
   * Better solution would be to make use of Google/Typekit's Webfont Loader
   * library, and build upon its provided font loading events.
   *
   * @todo Replace with Webfont Loader libraray, use its events.
   * @see {@link https://github.com/typekit/webfontloader}
   */
  Drupal.platinumTheme.waitForResources = function (callback) {
    if (document.readyState === 'complete') {
      callback();
    }
    else {
      $(document).bind('readystatechange', function () {
        if (document.readyState === 'complete') {
          callback();
        }
      });
    }
  };

  /**
   * React on the global ajaxSend event.
   */
  $(document).ajaxSend(function (event, xhr, settings) {
    if (settings.url && settings.url === '/system/ajax') {
      if (settings.data && !!$.deparam && !!$.deparam.querystring) {
        // Use jQuery.bbq for parsing the query string.
        var dataParsed = $.deparam.querystring(settings.data);

        if (dataParsed && dataParsed.hasOwnProperty('form_id')) {
          var formId = dataParsed['form_id'];
          var triggeringElementName = dataParsed['_triggering_element_name'] || '';

          // If the event is triggered by the 'ideas_and_impact_search_form'
          // form.
          if (formId === 'ideas_and_impact_search_form') {
            var results = $('#ideas-and-impact-results');
            results.fadeTo(600, 0);
            $('.node', results).addClass('flipout');
            $('.node', results).each(function (){
              var delay = Math.floor((Math.random()*100)+1) + 'ms';
              $(this).css({
                '-webkit-transition-delay': delay,
                'transition-delay': delay
              });
            });

          }
          else if (formId === 'views_exposed_form' && triggeringElementName === 'field_profile_role_tid') {
            $('.community-filter-page .view-comminty-landing-page .view-filters form').fadeTo(300, 0.25);
          }
        }
      }
    }
  });

  /**
   * React on the global ajaxSend event.
   */
  $(document).ajaxComplete(function (event, xhr, settings) {
    if (settings.url && settings.url === '/system/ajax') {
      if (settings.data && !!$.deparam && !!$.deparam.querystring) {
        // Use jQuery.bbq for parsing the query string.
        var dataParsed = $.deparam.querystring(settings.data);

        if (dataParsed && dataParsed.hasOwnProperty('form_id')) {
          var formId = dataParsed['form_id'];
          var triggeringElementName = dataParsed['_triggering_element_name'] || '';

          if (formId === 'ideas_and_impact_search_form') {
            $('#ideas-and-impact-results').hide().fadeTo(600, 1);
            $('#ideas-and-impact-results .node').addClass('flipback');
          }
          else if (formId === 'views_exposed_form' && triggeringElementName === 'field_profile_role_tid') {
            $('.community-filter-page .view-comminty-landing-page .view-filters form').fadeTo(300, 1  );
          }
        }
      }
    }
  });

  /**
   * Research centre.
   */
  Drupal.behaviors.researchCentre = {
    attach: function (context, settings) {
      // Research center bottom tabs.
      $('.node-type-research-center', context).once('research-tabs', function () {
        Drupal.platinumTheme.waitForResources(function () {
          var background = $('#background').data('url');

          enquire.register(Drupal.platinumResponsive.mediaQueries.mediumUpVertRCUpMq, {
            deferSetup: true,
            setup: function () {
            },
            match: function () {
              var footerOffset = $('footer.research-center').offset();
              var windowHeight = $(window).height();
              var tabsHeight = $('#footer-top .tabs').height();

              // Adjust footer top margin, so that the tactical box tabs are just visible at the bottom.
              $('footer').css('margin-top', $window.height() - footerOffset.top - tabsHeight);
            },
            unmatch: function () {
              $('footer').css('margin-top', '');
            }
          });

          $('#background').height($(document).height());
          $("#background").backstretch(background);
        });
      });

      $('.field-name-field-nested-tactital-header', context).click(function () {
        $('html,body').animate({
          scrollTop: $(window).height()
        }, 500);
      });
    },

    detach: function (context, settings, trigger) {
    }
  };

  /**
   * Mega menu.
   */
  Drupal.behaviors.megaMenu = {
    attach: function (context, settings) {
      var $body = $('body');
      var $megaMenuMenuParents = $('#megamenu .views-row', context);

      if (!$body.once('megamenu').length) {
        return;
      }

      $("#megamenu .highlighted-primary").click(function() {
        var href = $(this).find("a").get(0).href;
        location.href = href;
      });

      // Quick links toggler behaviour.
      $('#quick-links .toggler', context).click(function () {
        $('.menu', $(this).parent()).slideToggle(200);
        $(this).toggleClass('open');
      });

      // Megamenu parent links behaviour on mobile, show on click.
      if (Drupal.platinumResponsive.devices.isMobile) {
        var enquireHandlerMediumUp = {
          deferSetup: true,
          setup: function () {
            $megaMenuMenuParents.find('> .views-field-title').click(function (event) {
              var $clickedMegaMenu = $(this).parent().find('.megamenu');

              $megaMenuMenuParents.find('.megamenu').not($clickedMegaMenu).fadeOut(200);
              $clickedMegaMenu.fadeToggle(200);

              event.stopPropagation();
            });

            $('#content, footer').click(function (event) {
              $megaMenuMenuParents.find('.megamenu').fadeOut(200);
            });
          },
          match: function () {
          },
          unmatch: function () {
          }
        };

        enquire.register(Drupal.platinumResponsive.mediaQueries.mediumUpMq, enquireHandlerMediumUp);
      }

      if (Drupal.platinumResponsive.devices.isDesktop) {
        // Megamenu parent links behaviour on desktop, show on hover.
        $megaMenuMenuParents.hoverIntent(function (event) {
          $('.megamenu', $(this)).fadeIn(200);
        }, function (event) {
          $('.megamenu', $(this)).fadeOut(200);
        });
      }

      // Behaviours inside a megamenu.
      $megaMenuMenuParents.each(function () {
        var megamenuTab = $('.field-name-field-megamenu-tab-title');

        // Set first tab and first menucontent active.
        $('.field-name-field-megamenu-tab-title:first-child', $(this)).addClass('active');
        $('.megamenu-content .field-collection-container:first-child', $(this)).show().addClass('active');

        megamenuTab.click(function () {
          var clickedTab = $(this);
          var clickedTabContainer = clickedTab.parents('.tabs.field-type-field-collection');
          $('.field-name-field-megamenu-tab-title', $(this).parent()).removeClass('active');
          clickedTab.addClass('active');
          var index = clickedTab.index();

          $('.megamenu-content .field-collection-container', clickedTabContainer).removeClass('active').hide();
          $('.megamenu-content .field-collection-container:eq(' + index + ')', clickedTabContainer).addClass('active').show();
        });

        // Spotlight slider.
        var spotLightItems = $('.spotlight-items', $(this));
        var spotlightItemCount = $('.spotlight-item', $(this)).size();
        var itemsHeight = spotlightItemCount * 215;
        var spotLightScrollUp = $('.scroll-up', $(this));
        var spotLightScrollDown = $('.scroll-down', $(this));
        spotLightScrollUp.fadeTo('fast', 0.4).addClass('disabled');
        if (itemsHeight <= 430) {
          spotLightScrollDown.fadeTo('fast', 0.4).addClass('disabled');
        }

        spotLightScrollUp.click(function () {
          var offset = spotLightItems.position();
          if (itemsHeight > 430 && offset.top != 0) {
            spotLightScrollDown.fadeTo('fast', 1).removeClass('disabled');
            spotLightItems.animate({
              top: '+=215'
            }, 500, function () {
              offset = spotLightItems.position();
              if (offset.top === 0) {
                spotLightScrollUp.fadeTo('fast', 0.4).addClass('disabled');
              }
            })
          }
        });

        spotLightScrollDown.click(function () {
          var offset = spotLightItems.position();
          if (itemsHeight > 430 && offset.top != (-itemsHeight + 430)) {
            spotLightScrollUp.fadeTo('fast', 1).removeClass('disabled');
            spotLightItems.animate({
              top: '-=215'
            }, 500, function () {
              offset = spotLightItems.position();
              if (offset.top === (-itemsHeight + 430)) {
                spotLightScrollDown.fadeTo('fast', 0.4).addClass('disabled');
              }
            })
          }
        });
      });
    },

    detach: function (context, settings, trigger) {
    }
  };

  /**
   * Nested menu.
   *
   * Main header show/hide, nested menu click/hover open.
   */
  Drupal.behaviors.nestedMenu = {
    attach: function (context, settings) {
      var $body = $('body');

      // Nested menu behaviours.
      $('#nested-menu', context).once('nested-menu', function () {
        var $nestedMenu = $(this);
        var $nestedMenuMenu = $nestedMenu.find('#nested-header-left > .menu');
        var $nestedMenuMainLinks = $nestedMenuMenu.find('> li');
        var $nestedMenuParentLinks = $nestedMenuMenu.find('li.expanded > span > a');
        var $nestedMenuChildrenMenus = $nestedMenuMenu.find('li.expanded > span > .menu');
        var $headerTop = $('#header-top');
        var navTimer = null;

        // Correction needed to position.top if admin is present, and if the
        // position css property is set to 'fixed' on '#header-top'.
        function getCorrectHeaderTopPositionTop() {
          var nestedMenuPosition = $nestedMenu.position();
          var isFixed = $headerTop.css('position') === 'fixed';
          var isAdminMenu = $body.is('.admin-menu');
          var correctPositionTop = 0;

          if (isFixed) {
            if (isAdminMenu) {
              correctPositionTop = $('#admin-menu').height();
            }
            else {
              correctPositionTop = 0;
            }
          }
          else {
            correctPositionTop = nestedMenuPosition.top;
          }

          return correctPositionTop;
        }

        function hideMainHeader() {
          if ($headerTop.hasClass('header-hidden')) {
            return;
          }

          var headerTopHeight = $headerTop.height();

          $headerTop.animate({
            top: -headerTopHeight
          }, 800);

          $headerTop.addClass('header-hidden');
        }

        function showMainHeader() {
          if (!$headerTop.hasClass('header-hidden')) {
            return;
          }

          $headerTop.animate({
            top: getCorrectHeaderTopPositionTop()
          }, 800);

          $headerTop.removeClass('header-hidden');
        }

        // Reset nested menu state: hide open nested menus, reset nested menu
        // parent click counter.
        function resetStateNestedMenu() {
          $nestedMenuChildrenMenus.hide();
          $nestedMenuParentLinks.data('clicks', false);
        }

        // Wide mobile device behaviour.
        var enquireHandlerMediumUpMobile = {
          deferSetup: true,
          setup: function () {
          },
          match: function () {
            // Close main navigation or nested menu, when clicked anywhere other
            // than the header.
            $('#content, footer').bind('click.nestedMenuWideMobile', function (event) {
              hideMainHeader();
              resetStateNestedMenu();
            });

            // Nested menu links with children mobile behaviour, open on click
            // (tap), navigate to on second click.
            $nestedMenuParentLinks.bind('click.nestedMenuWideMobile', function (event) {
              var $this = $(this);
              var $clickedMenu = $this.next('.menu').first();
              var $clickedSubTreeLinks = $this.parentsUntil($nestedMenuMenu.selector, 'li').find('> span > a');
              var $clickedSubTreeMenus = $this.parentsUntil($nestedMenuMenu.selector, '.menu');

              // Reset clicks data on all links other than the clicked and its
              // parents.
              $nestedMenuParentLinks.not($clickedSubTreeLinks).data('clicks', false);

              // First click opens menu, prevents navigation.
              // Second click navigates.
              var clicks = $this.data('clicks');
              if (!clicks) {
                // Even clicks (first click).

                // Show and hide the menu on click.
                $nestedMenuChildrenMenus.not($clickedSubTreeMenus).hide();
                $clickedMenu.fadeIn(200);

                event.preventDefault();
              }

              // Invert clicks data.
              $this.data("clicks", !clicks);
            });
          },
          unmatch: function () {
            $('#content, footer').unbind('click.nestedMenuWideMobile');
            $nestedMenuParentLinks.unbind('click.nestedMenuWideMobile');
            resetStateNestedMenu();
          }
        };

        // General behaviour, hide main header if visible.
        var enquireHandlerMediumUp = {
          deferSetup: true,
          setup: function () {
          },
          match: function () {
            if (!$headerTop.hasClass('header-hidden')) {
              navTimer = setTimeout(hideMainHeader, 2000);
            }
          },
          unmatch: function () {
          }
        };

        // General nested menu behavior.
        enquire.register(Drupal.platinumResponsive.mediaQueries.mediumUpMq, enquireHandlerMediumUp);

        // Nested menu behaviour on wide mobile device.
        if (Drupal.platinumResponsive.devices.isMobile) {
          enquire.register(Drupal.platinumResponsive.mediaQueries.mediumUpMq, enquireHandlerMediumUpMobile);
        }

        // Main header show toggler:
        //   - on hover on desktop,
        //   - on click on mobile.
        $('#main-nav-toggler').bind(Drupal.platinumResponsive.devices.isMobile ? 'click' : 'mouseenter', function (event) {
          showMainHeader();
        });

        // Main header hide behaviour on desktop.
        if (Drupal.platinumResponsive.devices.isDesktop) {
          // Let the main header stay.
          $headerTop.mouseenter(function () {
            clearTimeout(navTimer);
          });

          // Hide the main header.
          $headerTop.mouseleave(function () {
            hideMainHeader();
          });

          // Nested menu parent links desktop behaviour, open on hover.
          $nestedMenuMainLinks.hoverIntent(function () {
            $('span .menu', $(this)).fadeIn(200);
          }, function () {
            $('span .menu', $(this)).fadeOut(200);
          });
        }
      });
    },

    detach: function (context, settings, trigger) {
    }
  };

  /**
   * Section menus on mobile.
   *
   * Create a mobile specific section menu out of nested menu (if any),
   * or use the existing section menu, and apply mobile specific accordion menu
   * behaviour on it, responsively (only on mobile width).
   *
   * @see Drupal.platinumResponsive.mediaQueries.mediumDownMq
   */
  Drupal.behaviors.sectionMobileMenu = {
    attach: function () {
      var $sectionMenuToggler = $('#section-menu-toggler');
      var $nestedMenu = $('#nested-menu .menu').first();

      if (!$('body').once('section-menu-mobile').length) {
        return;
      }

      var enquireHandlerMediumDown = {
        deferSetup: true,
        setup: function () {
          if (!!$nestedMenu.length) {
            if (!!$sectionMenuToggler.length) {
              // Replace menu for non-menu-block section navigations.
              Drupal.platinumTheme.copyMenu($nestedMenu, $sectionMenuToggler.parent());
            }
            else if ($('body').is('.node-type-research-center, .node-type-programme-landing-page')) {
              // We are on a RC or programme landing page, repurpose menu from header.
              var $sectionMenuWrapper = $('<div></div>', {
                'id': 'section-menu-wrapper'
              }).prependTo($('#section-inner'));

              var $copyMenu = Drupal.platinumTheme.copyMenu($nestedMenu, $sectionMenuWrapper);

              $sectionMenuToggler = $('<div></div>', {
                'id': 'section-menu-toggler',
                text: 'Sections'
              }).insertAfter($copyMenu);
            }
          }

          $('#section-menu-wrapper').find('> .menu, .menu-block-wrapper > .menu').first().addClass('section-mobile-menu');

          // Toggler behaviour.
          $sectionMenuToggler.once(function () {
            var $sectionMenu = $sectionMenuToggler.parent().find('.menu').first();
            $sectionMenuToggler.click(function () {
              $sectionMenu.slideToggle();
              $sectionMenuToggler.toggleClass('open');
            });
          });
        },
        match: function () {
          var $sectionMenu = $('#section-menu-wrapper').find('.section-mobile-menu');
          Drupal.platinumTheme.applyAccordionToMenu($sectionMenu);
          $sectionMenu.hide();
        },
        unmatch: function () {
          var $sectionMenu = $('#section-menu-wrapper').find('.section-mobile-menu');
          var $sectionMenuToggler = $('#section-menu-toggler');
          Drupal.platinumTheme.removeAccordionFromMenu($sectionMenu);

          if (!!$nestedMenu.length) {
            $sectionMenu.hide();
            $sectionMenuToggler.removeClass('open');
          }
          else {
            $sectionMenu.show();
            $sectionMenuToggler.addClass('open');
          }
        }
      };

      // Mobile section menu behaviour.
      enquire.register(Drupal.platinumResponsive.mediaQueries.mediumDownMq, enquireHandlerMediumDown);
    }
  };

  Drupal.platinumTheme.copyMenu = function($sourceMenu, $destinationContainer) {
    var $clone = $sourceMenu.clone();
    $clone.prependTo($destinationContainer);
    return $clone;
  };

  Drupal.platinumTheme.applyAccordionToMenu = function($menuUlElement) {
    $menuUlElement = $menuUlElement.first();
    $menuUlElement.once('accordion-menu-behaviour', function () {
      // Store variables

      var $parentItems = $menuUlElement.find('li.expanded > a, li.expanded > span > a');
      var $childrenMenus = $menuUlElement.find('li.expanded > .menu, li.expanded > span > .menu');

      // Open the the active trail on load
      $childrenMenus.hide();
      $parentItems.filter('.active-trail').addClass('acc-active').next('.menu').show();

      // Click function
      $parentItems.bind('click.menuAccordion', function (event) {
        var $this = $(this);
        var $thisMenu = $this.next('.menu');
        var $clickedSubTreeLinks = $this.parentsUntil($menuUlElement.selector, 'li').find('> a, > span > a');
        var $clickedSubTreeMenus = $this.parentsUntil($menuUlElement.selector, '.menu');

        // Reset clicks data on all links other than the clicked and its parents.
        $parentItems.not($clickedSubTreeLinks).data('clicks', false);

        var clicks = $this.data('clicks');
        if (!clicks && !$this.hasClass('acc-active')) {
          // Even clicks (first click).

          // Show and hide the tabs on click.
          $childrenMenus.not($clickedSubTreeMenus).slideUp();

          while ($thisMenu.queue().length) {
            $thisMenu.stop(false, true);
          }

          $thisMenu.slideDown();
          $parentItems.removeClass('acc-active');
          $clickedSubTreeLinks.addClass('acc-active');

          // Disable header links on first click.
          event.preventDefault();
        } else {
          // Odd clicks (second click).

        }
        $this.data("clicks", !clicks);
      });
    });
  };

  Drupal.platinumTheme.removeAccordionFromMenu = function($menuUlElement) {
    $menuUlElement = $menuUlElement.first();
    $menuUlElement.removeOnce('accordion-menu-behaviour', function () {
      var $parentItems = $menuUlElement.find('li.expanded > a, li.expanded > span > a');
      var $childrenMenus = $menuUlElement.find('li.expanded > .menu, li.expanded > span > .menu');
      $parentItems.data('clicks', false);
      $parentItems.removeClass('acc-active');
      $parentItems.unbind('click.menuAccordion');
      $childrenMenus.show();
    });
  };

  // Isotope related variables and helpers.
  Drupal.platinumIsotope = {};

  Drupal.platinumIsotope.getPageDataMqByKey = function (pageKey) {
    var pageData = Drupal.platinumIsotope.pageColumnNumMapping[pageKey] || false;

    if (pageData) {
      if (Modernizr.mq(Drupal.platinumResponsive.mediaQueries.smallDownMq)) {
        return pageData.smallDownMq;
      }
      else if (Modernizr.mq(Drupal.platinumResponsive.mediaQueries.mediumDownMq)) {
        return pageData.mediumDownMq;
      }
      else if (Modernizr.mq(Drupal.platinumResponsive.mediaQueries.largeDownMq)) {
        return pageData.largeDownMq;
      }
      else if (Modernizr.mq(Drupal.platinumResponsive.mediaQueries.largeUpMq)) {
        return pageData.largeUpMq;
      }
    }

    return false;
  };

  /**
   * Page key - responsive state (media query) - column number mapping.
   *
   * Possible column number values and their meaning:
   * - integer: number of columns (fluid width with css)
   * - 'centered': use 'centeredMasonry' layout with fixed tile width (from css)
   * - 'fixed': fixed width tiles (from css)
   */
  Drupal.platinumIsotope.pageColumnNumMapping = {
    'homepage': {
      smallDownMq: 1,
      mediumDownMq: 'centered',
      largeDownMq: 'centered',
      largeUpMq: 4
    },
    'programmeLanding': {
      smallDownMq: 1,
      mediumDownMq: 1,
      largeDownMq: 'centered',
      largeUpMq: 4
    },
    'programmeTypeLanding': {
      smallDownMq: 1,
      mediumDownMq: 1,
      largeDownMq: 'centered',
      largeUpMq: 4
    },
    'programmeSpecificLanding': {
      smallDownMq: {
        mode: 'centered',
        gutter: 6
      },
      mediumDownMq: {
        mode: 'centered',
        gutter: 12
      },
      largeDownMq: {
        mode: 'centered',
        gutter: 8
      },
      largeUpMq: 4
    },
    'communityLanding': {
      smallDownMq: 'centered',
      mediumDownMq: 'centered',
      largeDownMq: 'centered',
      largeUpMq: 'fixed'
    },
    'communityFiltered': {
      smallDownMq: 1,
      mediumDownMq: 1,
      largeDownMq: 'centered',
      largeUpMq: 'fixed'
    },
    'peopleFinder': {
      smallDownMq: 1,
      mediumDownMq: 1,
      largeDownMq: 'centered',
      largeUpMq: 'fixed'
    },
    'ideasAndImpactLanding': {
      smallDownMq: 'centered',
      mediumDownMq: 'centered',
      largeDownMq: 'centered',
      largeUpMq: 'centered'
    },
    'schoolLanding': {
      smallDownMq: {
        mode: 'centered',
        gutter: 6
      },
      mediumDownMq: {
        mode: 'centered',
        gutter: 12
      },
      largeDownMq: {
        mode: 'centered',
        gutter: 8
      },
      largeUpMq: {
        mode: 'centered',
        gutter: 8
      }
    },
    'schoolNews': {
      smallDownMq: {
        mode: 'centered',
        gutter: 10
      },
      mediumDownMq: {
        mode: 'centered',
        gutter: 15
      },
      largeDownMq: 'centered',
      largeUpMq: 4
    },
    'researchCentre': {
      smallDownMq: 'centered',
      mediumDownMq: 'centered',
      largeDownMq: 'centered',
      largeUpMq: 'centered'
    },
    'feature': {
      smallDownMq: {
        mode: 'centered',
        gutter: 6
      },
      mediumDownMq: {
        mode: 'centered',
        gutter: 12
      },
      largeDownMq: {
        mode: 'centered',
        gutter: 8
      },
      largeUpMq: 4
    }
  };

  /**
   * Selector - page key mapping.
   *
   * - homepage - .front #dashboard
   * - programme landing (finder) page - .view-programm-finder-tiles
   * - programme type landing page - .view-programme-type-lister
   * - programme specific landing page - .view-programme-specific-landing-page-tiles
   * - community landing page - .community-simple-page .view-comminty-landing-page
   * - community filtered page - .community-filter-page .view-comminty-landing-page
   * - people finder - .view-people-lister
   * - ideas and impact landing page - #ideas-and-impact-results
   * - school landing page - .view-school-landing-page-tiles
   * - school news - .view-school-news-tiles
   * - research centre homepage - .node-type-research-center .tactical-boxes .boxes
   * - feature page - .view-feature-page-tiles
   */
  Drupal.platinumIsotope.getPageKey = function() {
    if (!!$('.front #dashboard').length) {
      return 'homepage';
    }
    else if (!!$('.view-programm-finder-tiles').length) {
      return 'programmeLanding';
    }
    else if (!!$('.view-programme-type-lister').length) {
      return 'programmeTypeLanding';
    }
    else if (!!$('.view-programme-specific-landing-page-tiles').length) {
      return 'programmeSpecificLanding';
    }
    else if (!!$('.community-simple-page .view-comminty-landing-page').length) {
      return 'communityLanding';
    }
    else if (!!$('.community-filter-page .view-comminty-landing-page').length) {
      return 'communityFiltered';
    }
    else if (!!$('.view-people-lister').length) {
      return 'peopleFinder';
    }
    else if (!!$('#ideas-and-impact-results').length) {
      return 'ideasAndImpactLanding';
    }
    else if (!!$('.view-school-landing-page-tiles').length) {
      return 'schoolLanding';
    }
    else if (!!$('.node-type-research-center .tactical-boxes .boxes').length) {
      return 'researchCentre';
    }
    else if (!!$('.view-feature-page-tiles').length) {
      return 'feature';
    }
    else if (!!$('.view-school-news-tiles').length) {
      return 'schoolNews';
    }
    else {
      return false;
    }
  };

  /**
   * Responsive isotope behavior.
   */
  Drupal.behaviors.responsiveIsotope = {
    attach: function () {
      if (!!$.fn.isotope) {
        $('body').once('responsive-isotope', function () {
          var pageKey = Drupal.platinumIsotope.getPageKey();

          $window.bind('load.responsiveIsotope', function () {
            $('.isotope').isotope('reLayout');
          });

          // Bind to custom event, so that anything can trigger this behavior.
          $window.bind('responsiveIsotope', function () {
            var $isotopes = $('.isotope:visible');

            if (!!$isotopes.length) {
              var pageDataMq = Drupal.platinumIsotope.getPageDataMqByKey(pageKey);

              if (!!pageDataMq) {
                var isCentered = pageDataMq.mode === 'centered' || pageDataMq === 'centered';
                var isFixed = pageDataMq === 'fixed';
                var numOfCols = isCentered || isFixed ? false : pageDataMq;
                var layoutMode = isCentered ? 'centeredMasonry' : 'masonry';
                var gutterWidth = pageDataMq.gutter || 0;

                $isotopes.each(function () {
                  var $this = $(this);
                  var isotopeData = $this.data('isotope');

                  // Reset width of the isotope element.
                  $this.width($this.parent().width());

                  if (isCentered) {
                    $this.addClass('isotope-centered-masonry');
                  }
                  else {
                    $this.removeClass('isotope-centered-masonry');
                  }

                  // Responsive isotope: update masonry columnWidth.
                  var columnWidth;
                  if (numOfCols) {
                    columnWidth = $this.width() / numOfCols;
                  }
                  else {
                    columnWidth = Math.min.apply(Math, isotopeData.$filteredAtoms.map(function () {
                      return $(this).outerWidth(true);
                    }).get());
                  }

                  var isotopeOptions = {
                    resizable: false,
                    layoutMode: layoutMode,
                    masonry: {
                      columnWidth: columnWidth,
                      gutterWidth: gutterWidth
                    }
                  };
                  $this.isotope('option', isotopeOptions);
                  $this.isotope('reLayout');
                });
              }
              else {
                $isotopes.isotope('reLayout')
              }
            }
          });

          // Trigger the custom event on window resize.
          $window.smartresize(function () {
            $window.trigger('responsiveIsotope');
          });
        });
      }
    }
  };

  /**
   * Remove tactical border if only one button.
   */
  Drupal.behaviors.tacticalboxNoborder = {
    attach: function (context, settings) {
      $(".tactical-box .field-name-field-tactical-button", context).each(function() {
        if ($(".field", $(this).closest(".tactical-box")).length == 1) {
          $(this).closest(".tactical-box").addClass("noborder");
        }
      });
    }
  };

  /**
   * Helper for applying autoplay behaviour on embedded Youtube videos.
   *
   * Falls back to redirecting to the video url on mobile devices.
   */
  Drupal.platinumTheme.applyVideoAutoplay = function (options) {
    if (!options.hasOwnProperty('videoField') || !options.hasOwnProperty('previewElement')) {
      return;
    }

    if (!options.hasOwnProperty('previewHideOrRemove')) {
      options.previewHideOrRemove = 'hide';
    }
    else if (options.previewHideOrRemove !== 'hide') {
      options.previewHideOrRemove = 'remove';
    }

    if (!options.hasOwnProperty('callbackClickDesktop')) {
      options.callbackClickDesktop = $.noop;
    }

    var $iframe = options.videoField.find('iframe');

    $iframe.ready(function () {
      var oldIframeSrc = $iframe.attr('src');
      var newIframeSrc = oldIframeSrc + '&enablejsapi=1';

      $iframe.attr('src', newIframeSrc);

      var iframe = $iframe[0];

      options.previewElement.click(function () {
        if (Drupal.platinumResponsive.devices.isMobile) {
          var videoID = $iframe.attr('src').match(/\/embed\/([a-zA-Z0-9_-]+)?/)[1];
          window.location = 'http://youtube.com/watch?v=' + videoID;
        }
        else {
          options.callbackClickDesktop();
          options.previewElement[options.previewHideOrRemove]();
          iframe.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
        }
      });
    });
  };

  Drupal.behaviors.platinumThemeVideoAutoplay = {
    attach: function (context, settings) {

      // Article top video autoplay.
      $('.field-name-field-article-top-video', context).once('article-top-autoplay', function () {
        var $this = $(this);
        Drupal.platinumTheme.applyVideoAutoplay({
          videoField: $this,
          previewElement: $this.find('.preview'),
          previewHideOrRemove: 'remove'
        });
      });

      // Feature page big tile video autoplay.
      $('.field-name-field-feature-page-tile-video', context).once('big-tile-autoplay', function () {
        var $this = $(this);

        Drupal.platinumTheme.applyVideoAutoplay({
          videoField: $this,
          previewElement: $this.siblings('.preview'),
          previewHideOrRemove: 'remove'
        });
      });

      // Ideas and impact top video autoplay.
      $('.view-ideas-and-impact-videos', context).once('ideas-top-autoplay', function () {
        var $mainVideo = $('.views-row-1 .entity-ideas-and-impact-videos', this);
        var mainVideoContent = $('.head, .content', $mainVideo);
        var rewatch = $('.rewatch', $mainVideo.parents('.views-row-1'));
        var listHeaders = $('.views-row-2 .head, .views-row-3 .head, .views-row-4 .head');

        // Apply video autoplay behaviour on the main video.
        Drupal.platinumTheme.applyVideoAutoplay({
          videoField: $mainVideo,
          previewElement: $mainVideo.find('.head, .field-name-field-iai-video-preview')
        });

        // When clicking on video list header, modify the DOM, so that the main
        // video is replaced by the video corresponding to the clicked header.
        listHeaders.click(function () {
          var $thisHeader = $(this);
          var $thisHeaderParent = $thisHeader.parent();

          if (Drupal.platinumResponsive.devices.isMobile) {
            var videoID = $thisHeaderParent.find('.field-name-field-iai-video').find('iframe').attr('src').match(/\/embed\/([a-zA-Z0-9_-]+)?/)[1];
            window.location = 'http://youtube.com/watch?v=' + videoID;
          }
          else {
            var clickedVideo = $thisHeaderParent.clone();
            var $thisHeaderVideo = clickedVideo.find('.field-name-field-iai-video');
            var $thisHeaderVideoPreview = clickedVideo.find('.head, .field-name-field-iai-video-preview');

            listHeaders.removeClass('active');
            rewatch.show();
            $thisHeader.addClass('active');
            $('.head, .content', $mainVideo).remove();

            // Apply video autoplay behaviour on the video replacing the main video.
            Drupal.platinumTheme.applyVideoAutoplay({
              videoField: $thisHeaderVideo,
              previewElement: $thisHeaderVideoPreview
            });

            $('.head, .content', clickedVideo).appendTo($mainVideo).show();
          }
        });

        // When clicking the 'Watch our introduction video again' action,
        // manipulate the dom, so that the original main video is visible again.
        rewatch.click(function () {
          listHeaders.removeClass('active');
          rewatch.hide();
          $('.head, .content', $mainVideo).remove();
          mainVideoContent.appendTo($mainVideo);

          // Apply video autoplay behaviour on the readded main video.
          Drupal.platinumTheme.applyVideoAutoplay({
            videoField: $mainVideo,
            previewElement: $mainVideo.find('.head, .field-name-field-iai-video-preview')
          });

          $('.head, .field-name-field-iai-video-preview', $mainVideo).show();
        });
      });
    }
  };

  /**
   *  Themeable dropdown buildingk.
   */
  Drupal.behaviors.buildDropdown = {
    /**
     * Ignore selects on these pages (class on body).
     */
    ignorePages: [
      '.page-events',
      '.page-og-events',
      '.page-ideas-and-impact-events',
      '.page-news',
      '.page-og-news',
      '.page-ideas-and-impact-news',
      '.page-community-people-finder',
      '.page-og-people-finder'
    ],

    /**
     * Obtain the select elements that would be built into themeable dropdowns.
     *
     * @returns {jQuery}
     */
    getSelectsToBuild: function () {
      var ignorePagesSelector = Drupal.behaviors.buildDropdown.ignorePages.join(', ');
      var $selectsIgnoredbyBuildDropdown = $(ignorePagesSelector).find('.views-exposed-widget select, .views-exposed-form select');
      var $selectsToDropdown = $('.views-exposed-widget select, .views-exposed-form select, .form-item-sort select, .form-item-subject select, .form-item-theme select');

      return $selectsToDropdown.not($selectsIgnoredbyBuildDropdown);
    },

    enquireHandlerMediumUpPageLoad: {
      deferSetup: true,
      setup: function () {
        var $selectsToBuild = Drupal.behaviors.buildDropdown.getSelectsToBuild();

        $selectsToBuild.each(function () {
          var $thisSelect = $(this);

          if ($thisSelect.attr('id') == 'edit-field-profile-role-tid' && $thisSelect.attr('id') == 'edit-category') {
            Drupal.platinumTheme.buildDropdown($thisSelect, '1');
          }
          else if ($thisSelect.attr('id') == 'edit-field-profile-area-of-work-tid') {
            Drupal.platinumTheme.buildDropdown($thisSelect);
          }
          else {
            Drupal.platinumTheme.buildDropdown($thisSelect);
          }

          Drupal.platinumTheme.fitDropdownWidth($thisSelect.not($('.form-item-subject select, .form-item-theme select')));
        });

        Drupal.platinumTheme.truncateDropdownSelectText($('.form-item-subject .dropdown .select, .form-item-theme .dropdown .select'));
      },
      match: function () {
      },
      unmatch: function () {
      }
    },

    enquireHandlerLargeUpPageLoad: {
      deferSetup: true,
      setup: function () {
      },
      match: function () {
        var $selectsToFit = $('.form-item-subject select, .form-item-theme select');
        if (!!$selectsToFit.length) {
          $selectsToFit.each(function () {
            var $thisSelect = $(this);

            Drupal.platinumTheme.fitDropdownWidth($thisSelect);
          });
        }
      },
      unmatch: function () {
        var $selectsToUnFit = $('.form-item-subject select, .form-item-theme select');
        if (!!$selectsToUnFit.length) {
          $selectsToUnFit.each(function () {
            var $thisSelect = $(this);

            Drupal.platinumTheme.unFitDropdownWidth($thisSelect);
          });
        }
      }
    },

    enquireHandlerMediumUpAjaxLoad: {
      deferSetup: true,
      setup: function () {
        var $selectsToBuild = Drupal.behaviors.buildDropdown.getSelectsToBuild();

        $selectsToBuild.each(function () {
          var $thisSelect = $(this);

          if ($thisSelect.attr('id') == 'edit-field-profile-role-tid' && $thisSelect.attr('id') == 'edit-category') {
            Drupal.platinumTheme.buildDropdown($thisSelect, '1');
          }
          else if ($thisSelect.attr('id') == 'edit-field-profile-area-of-work-tid') {
            Drupal.platinumTheme.buildDropdown($thisSelect);
          }
          else {
            Drupal.platinumTheme.buildDropdown($thisSelect);
          }

          Drupal.platinumTheme.fitDropdownWidth($thisSelect.not($('.form-item-subject select, .form-item-theme select')));
        });

        Drupal.platinumTheme.truncateDropdownSelectText($('.form-item-subject .dropdown .select, .form-item-theme .dropdown .select'));
      },
      match: function () {
      },
      unmatch: function () {
      }
    },

    attach: function (context, settings) {
      var $selectsToBuild = Drupal.behaviors.buildDropdown.getSelectsToBuild();

      if (!$selectsToBuild.length) {
        return;
      }

      // When the Drupal.behaviors.*.attach functions are called for the first
      // time (on page load), the context is the document itself.
      if (context === document) {
        $('body').once('build-dropdown-pageload', function () {
          Drupal.platinumTheme.waitForResources(function () {
            // Build themeable dropdowns out of the views exposed filter selects.
            enquire.register(Drupal.platinumResponsive.mediaQueries.mediumUpMq, Drupal.behaviors.buildDropdown.enquireHandlerMediumUpPageLoad);
            enquire.register(Drupal.platinumResponsive.mediaQueries.largeUpMq, Drupal.behaviors.buildDropdown.enquireHandlerLargeUpPageLoad);
          });
        });
      }

      // When the Drupal.behaviors.*.attach functions are called for the first
      // time, the context is the document itself. The following code should
      // run only on subsequent calls (e.g. after loading elements via ajax).
      if (context !== document) {
        $('body').once('build-dropdown-ajaxload', function () {
          enquire.register(Drupal.platinumResponsive.mediaQueries.mediumUpMq, Drupal.behaviors.buildDropdown.enquireHandlerMediumUpAjaxLoad);
        });
      }
    },

    detach: function (context, settings, trigger) {
      var $selectsToBuild = Drupal.behaviors.buildDropdown.getSelectsToBuild();

      if (!$selectsToBuild.length) {
        return;
      }

      $('body').removeOnce('build-dropdown-ajaxload', function () {
        enquire.unregister(Drupal.platinumResponsive.mediaQueries.mediumUpMq, Drupal.behaviors.buildDropdown.enquireHandlerMediumUpAjaxLoad);
      });
    }
  }
})(jQuery, Drupal);
;/**/
(function ($, Drupal) {

  "use strict";

  Drupal.behaviors.infiniteScroll = {
    attach: function (context, settings) {

      // Infinite scroll.
      var tiles = [
        '.view-programme-specific-landing-page-tiles',
        '.view-display-id-global_people_finder',
        '.view-school-news-tiles',
        '.view-school-landing-page-tiles',
        '.node-type-feature-page #tiles',
        '.view-programm-finder-tiles',
        '.view-programme-type-lister'
      ];
      var $isotopeViews = $(tiles.join(','));
      var $listingViews = $('.view-news-listing, .section-event-listing-infinite-scroll');
      var $isotopeCommunity = $('.view-comminty-landing-page');

      if (Drupal.settings && Drupal.settings.views && Drupal.settings.views.ajaxViews) {
        // For views with isotope.
        $isotopeViews.once('platinum-infinite-scroll', function () {
          var $exploreView = $(this);
          var containerSelector = '#tiles .view-content';
          if (!$('body').hasClass('node-type-feature-page')) {
            var viewDomID = $exploreView.attr('class').match(/view-dom-id-[a-zA-Z0-9]{32}/);
            // Exclude attached views.
            containerSelector = '.' + viewDomID + ' .view-content:has(> .node-tile)';
          }

          if ($exploreView.find('.pager-next a').length) {
            $exploreView.waypoint('infinite', {
              container: containerSelector,
              items: '.node-tile:not(.large-tile)',
              more: '.pager-next a',
              loadingClass: 'platinum-infinite-loading',
              onBeforePageLoad: function () {
                var $viewContent = $exploreView.find('.view-content:has(.node-tile), .view-empty');
                Drupal.platinumTheme.oldNodeTiles = $viewContent.find('.node-tile');
              },
              onAfterPageLoad: function () {
                var $viewContent = $exploreView.find('.view-content:has(.node-tile), .view-empty');
                Drupal.attachBehaviors($viewContent, settings);
                Drupal.platinumTheme.newNodeTiles = $viewContent.find('.node-tile').not(Drupal.platinumTheme.oldNodeTiles);
              }
            });
          }
        });

        // For views with simple row plugin.
        $listingViews.once('platinum-infinite-scroll', function () {
          var $listingView = $(this);
          var viewDomID = $listingView.attr('class').match(/view-dom-id-[a-zA-Z0-9]{32}/);
          var containerSelector = '.' + viewDomID + ' .view-content';
          var viewId = $listingView.attr('class').split(' ')[2];
          var viewDisplayId = $listingView.attr('class').split(' ')[3];
          var items = '.' + viewId + '.' + viewDisplayId + ' .views-row';

          if ($listingView.find('.pager-next a').length > 0) {
            $listingView.waypoint('infinite', {
              container: containerSelector,
              items: items,
              more: '.pager-next a',
              offset: 'bottom-in-view',
              loadingClass: 'platinum-infinite-loading',
              onBeforePageLoad: function () {
                var viewContent = $listingView.find('.view-content:has(.node-tile), .view-empty');
                Drupal.platinumTheme.oldListElements = $('.node-tile', viewContent);
              },
              onAfterPageLoad: function () {
                var $viewContent =  $listingView.find('.view-content:has(.node-tile), .view-empty');
                // Drupal.attachBehaviors(viewContent, settings);
                Drupal.platinumTheme.newListElements = $viewContent.find('.node-tile').not(Drupal.platinumTheme.oldListElements);
              }
            });
          }
        });

        $isotopeCommunity.once('platinum-load-more', function () {
          var $view = $(this);
          var $viewContent = $view.find('.view-content:has(.node-tile), .view-empty');

          if ($view.find('.pager-next a').length) {
            $('.pager-next a').click(function () {
              Drupal.platinumTheme.oldNodeTiles = $viewContent.find('.node-tile:not(.big)');
            });
          }
        });
      }

      // Add event handling upon ajaxSend and ajaxComplete events.
      $isotopeViews.once('isotope-ajax-init', function () {
        var $exploreView = $(this);
        var isotopeViewContent = $exploreView.find('.view-content:has(.node-tile), .view-empty');

        // Reloading of isotope layout when Views ajax is
        // triggered.
        isotopeViewContent.ajaxComplete(function (event, xhr, ajaxOptions) {
          var isotopeElement = $('.isotope');
          if (ajaxOptions.url === '/views/ajax') {
            isotopeElement.isotope('reloadItems');
          }
          else {
            isotopeElement.isotope('appended', Drupal.platinumTheme.newNodeTiles);
          }
        });
      });

      // Community landing page load more.
      $isotopeCommunity.once('community-isotope', function () {
        var $view = $(this);

        $isotopeCommunity.ajaxComplete(function (event, xhr, ajaxOptions) {
          var isotopeElement = $('.isotope');
          if (ajaxOptions.url === '/views/ajax') {

            Drupal.platinumTheme.newNodeTiles = $('.node-tile', isotopeViewContent).not(Drupal.platinumTheme.oldNodeTiles);
            Drupal.platinumTheme.allNodeTiles = Drupal.platinumTheme.newNodeTiles.add(Drupal.platinumTheme.oldNodeTiles);

            var isotopeViewContent = $view.find('.view-content:has(.node-tile), .view-empty');

            isotopeViewContent.isotope('insert', Drupal.platinumTheme.allNodeTiles);
            Drupal.attachBehaviors(isotopeViewContent, settings);

          }
          else {
            isotopeElement.isotope('insert', Drupal.platinumTheme.newNodeTiles);
          }
        });
      });

    }
  };

}(jQuery, Drupal));
;/**/
(function ($, Drupal) {

  "use strict";

  Drupal.platinumTheme.buildDropdown = function ($originalSelect, ratio) {
    // Bail out if already processed.
    if (!!$originalSelect.attr('multiple') || !$originalSelect.once('dropdown').length) {
      return;
    }

    // Append div after select.
    $originalSelect.after('<div class="dropdown" />');

    // Get the 'dropdown' element.
    var $dropdown = $originalSelect.next('.dropdown');

    var $select = $('<div class="select"></div>').text($originalSelect.find(':selected').text());
    var $options = $('<div class="options"></div>');

    // Toggle dropdown overlay effect.
    function dropdownOverlay(ev) {
      var $overlay = $('#overlay');
      var docHeight = $('#main-wrapper').height();

      if (($overlay.length>0) || (ev == 1)) {
        $overlay.fadeOut('fast', 'swing', function () {
          $overlay.remove();
          $('header, .form-type-select, .views-exposed-widget, #views-exposed-form-comminty-landing-page-panel-pane-1, #views-exposed-form-comminty-landing-page-panel-pane-3').css({
            'position': 'static'
          });
        });

      }
      else {
        $overlay =  $("<div id='overlay'></div>").appendTo("#content");

        $('header').css({
          'z-index': +550,
          'position': 'relative'
        });

        $('.form-type-select, .views-exposed-widget, #views-exposed-form-comminty-landing-page-panel-pane-1, #views-exposed-form-comminty-landing-page-panel-pane-3').each(function(index) {
          $(this).css({
            'z-index': +(510 - index),
            'position': 'relative'
          });
        });

        $overlay
            .height(docHeight)
            .css({
              'opacity' : 0.8,
              'position': 'absolute',
              'top': 0,
              'left': 0,
              'background-color': 'black',
              'width': '100%',
              'display': 'none',
              'z-index': 500
            });

        $overlay.fadeIn('fast', 'swing');
      }
    }

    // Add 'select' and 'options' div to 'dropdown' element.
    $dropdown
      .append($select)
      .append($options);

    $originalSelect.data('platinumThemeDropdown', $dropdown);

    // It is possible to include description text for options, in a generic
    // way. This depends on the availability of a 'data-description-source'
    // attribute and the availability of the keys in Drupal.settings
    // encoded in this data attribute.
    var descriptionSource = $originalSelect.data('description-source');
    var optionsDescriptions;

    if (descriptionSource) {
      descriptionSource = descriptionSource.split(':');
      var descriptionSourceSettingsModuleKey = descriptionSource[0];
      var descriptionSourceSettingsDescriptionKey = descriptionSource[1];
      optionsDescriptions = Drupal.settings[descriptionSourceSettingsModuleKey] && Drupal.settings[descriptionSourceSettingsModuleKey][descriptionSourceSettingsDescriptionKey];
    }

    // For each option in the original select element, create corresponding
    // fake option (anchors) in the fake 'select' element.
    $originalSelect.find('option').each(function () {
      var option = $(this);
      var optionVal = option.val();
      var newOption = $('<a></a>', {
        href: "#"
      });

      newOption.append($('<div></div>', {
        'class': 'option-text',
        text: option.text()
      }));

      // If a description is available for this option, append it.
      if (optionsDescriptions && optionsDescriptions.hasOwnProperty(optionVal)) {
        var optionDescription = optionsDescriptions[optionVal];

        newOption.append($('<div></div>', {
          'class': 'option-description',
          text: optionDescription
        }));
      }

      newOption.data('option-value', optionVal);
      $options.append(newOption);
    });

    // Show fake 'options' when fake 'select' is clicked.
    $select.click(function () {
      $options.slideToggle(200);
      $dropdown.toggleClass('down');
      dropdownOverlay(0);
    });

    $dropdown.mouseleave(function () {
      // Hide select options if hovered out of fake 'select'.
      $options.slideUp(200);
      $dropdown.removeClass('down');
      dropdownOverlay(1);
    });

    var width = $options.width();

    // If second parameter not specified, trigger default ratio (font size ratio between dropdown optins and selected).
    if (typeof ratio == 'undefined') {
      ratio = 1.55;
    }
    $select.width(width * ratio);
    $select.data('original-width', width * ratio);
    $options.width($select.outerWidth());

    // Add correct behaviour to fake options in fake select.
    $options.delegate('a', 'click', function () {
      var anchorElement = $(this);
      var value = anchorElement.data('option-value');
      var text = anchorElement.find('.option-text').text();

      // Set the value of the original select.
      $originalSelect.val(value).change();
      $select.text(text);
      $options.slideUp(200);
      $dropdown.removeClass('down');
      dropdownOverlay(1);
      return false;
    });
  };

  Drupal.platinumTheme.destroyDropdown = function ($originalSelect) {
    if (!$originalSelect.removeOnce('dropdown').length) { return; }

    $originalSelect.next('.dropdown').remove();
  };


  /**
   * Adjust the width of the select in the dropdown (built with our custom
   * select builder function) to fit the the remaining space in its container.
   *
   * @see Drupal.platinumTheme.buildDropdown()
   *
   * Ticket #6493
   */
  Drupal.platinumTheme.fitDropdownWidth = function ($selectWithDropdown) {
    var $dropdown = $selectWithDropdown.data('platinumThemeDropdown');

    if (!($dropdown instanceof jQuery)) {
      return;
    }

    var $parentFormItem = $selectWithDropdown.closest('.form-item');
    var $dropdownSelect = $dropdown.find('.select');

    var dropdownSelectOriginalWidth = $dropdownSelect.outerWidth(true);
    var dropdownSelectOriginalPadding = dropdownSelectOriginalWidth - $dropdownSelect.width();
    var parentFormItemWidth = $parentFormItem.width();
    var fieldPrefixWidth = $parentFormItem.find('.field-prefix').outerWidth(true) || 0;
    var widthMax = parentFormItemWidth - fieldPrefixWidth;
    var widthDifference = dropdownSelectOriginalWidth - widthMax;
    var widthNew = Math.floor(dropdownSelectOriginalWidth - widthDifference - dropdownSelectOriginalPadding);
    var dropdownSelectLineHeight = parseInt($dropdownSelect.css('line-height'), 10);

    $dropdownSelect.width(widthNew);

    Drupal.platinumTheme.truncateDropdownSelectText($dropdownSelect);
  };

  Drupal.platinumTheme.unFitDropdownWidth = function ($selectWithDropdown) {
    var $dropdown = $selectWithDropdown.data('platinumThemeDropdown');

    if (!($dropdown instanceof jQuery)) {
      return;
    }

    var $dropdownSelect = $dropdown.find('.select');
    var originalWidth = $dropdownSelect.data('original-width');

    if (originalWidth) {
      $dropdownSelect.width(originalWidth);
    }
  };

  Drupal.platinumTheme.fitMultiDropdownWidth = function ($multiSelectWithDropdown) {
    var $parentFormItem = $multiSelectWithDropdown.closest('.form-item');
    var $dropdownSelect = $('button.ui-multiselect', $parentFormItem);

    if (!($dropdownSelect instanceof jQuery)) {
      return;
    }

    var dropdownSelectOriginalWidth = $dropdownSelect.outerWidth(true);
    var parentFormItemWidth = $parentFormItem.width();
    var fieldPrefixWidth = $parentFormItem.find('.field-prefix').outerWidth(true) || 0;
    var widthMax = parentFormItemWidth - fieldPrefixWidth;
    var widthDifference = dropdownSelectOriginalWidth - widthMax;
    var widthNew = Math.floor(dropdownSelectOriginalWidth - widthDifference);
    var dropdownSelectLineHeight = parseInt($dropdownSelect.css('line-height'), 10);

    if (widthNew > 0) {
      $dropdownSelect.width(widthNew);
    }

    Drupal.platinumTheme.truncateDropdownSelectText($dropdownSelect, { ellipsis: ' (...)' });
  };

  Drupal.platinumTheme.truncateDropdownSelectText = function ($dropdownSelect, dotdotdotOptions) {
    if ($dropdownSelect.data('dotdotdot')) {
      return;
    }

    var dropdownSelectLineHeight = parseInt($dropdownSelect.css('line-height'), 10);

    var defaultOptions = {
      height: dropdownSelectLineHeight,
      tolerance: 5,
      watch: 'window',
      wrap: 'letter'
    };

    var options = $.extend({}, defaultOptions, dotdotdotOptions);

    $dropdownSelect.dotdotdot(options);
  }

}(jQuery, Drupal));
;/**/
// Generated by CoffeeScript 1.4.0
/*
jQuery Waypoints - v2.0.2
Copyright (c) 2011-2013 Caleb Troughton
Dual licensed under the MIT license and GPL license.
https://github.com/imakewebthings/jquery-waypoints/blob/master/licenses.txt
*/
(function(){var t=[].indexOf||function(t){for(var e=0,n=this.length;e<n;e++){if(e in this&&this[e]===t)return e}return-1},e=[].slice;(function(t,e){if(typeof define==="function"&&define.amd){return define("waypoints",["jquery"],function(n){return e(n,t)})}else{return e(t.jQuery,t)}})(this,function(n,r){var i,o,l,s,f,u,a,c,h,d,p,y,v,w,g,m;i=n(r);c=t.call(r,"ontouchstart")>=0;s={horizontal:{},vertical:{}};f=1;a={};u="waypoints-context-id";p="resize.waypoints";y="scroll.waypoints";v=1;w="waypoints-waypoint-ids";g="waypoint";m="waypoints";o=function(){function t(t){var e=this;this.$element=t;this.element=t[0];this.didResize=false;this.didScroll=false;this.id="context"+f++;this.oldScroll={x:t.scrollLeft(),y:t.scrollTop()};this.waypoints={horizontal:{},vertical:{}};t.data(u,this.id);a[this.id]=this;t.bind(y,function(){var t;if(!(e.didScroll||c)){e.didScroll=true;t=function(){e.doScroll();return e.didScroll=false};return r.setTimeout(t,n[m].settings.scrollThrottle)}});t.bind(p,function(){var t;if(!e.didResize){e.didResize=true;t=function(){n[m]("refresh");return e.didResize=false};return r.setTimeout(t,n[m].settings.resizeThrottle)}})}t.prototype.doScroll=function(){var t,e=this;t={horizontal:{newScroll:this.$element.scrollLeft(),oldScroll:this.oldScroll.x,forward:"right",backward:"left"},vertical:{newScroll:this.$element.scrollTop(),oldScroll:this.oldScroll.y,forward:"down",backward:"up"}};if(c&&(!t.vertical.oldScroll||!t.vertical.newScroll)){n[m]("refresh")}n.each(t,function(t,r){var i,o,l;l=[];o=r.newScroll>r.oldScroll;i=o?r.forward:r.backward;n.each(e.waypoints[t],function(t,e){var n,i;if(r.oldScroll<(n=e.offset)&&n<=r.newScroll){return l.push(e)}else if(r.newScroll<(i=e.offset)&&i<=r.oldScroll){return l.push(e)}});l.sort(function(t,e){return t.offset-e.offset});if(!o){l.reverse()}return n.each(l,function(t,e){if(e.options.continuous||t===l.length-1){return e.trigger([i])}})});return this.oldScroll={x:t.horizontal.newScroll,y:t.vertical.newScroll}};t.prototype.refresh=function(){var t,e,r,i=this;r=n.isWindow(this.element);e=this.$element.offset();this.doScroll();t={horizontal:{contextOffset:r?0:e.left,contextScroll:r?0:this.oldScroll.x,contextDimension:this.$element.width(),oldScroll:this.oldScroll.x,forward:"right",backward:"left",offsetProp:"left"},vertical:{contextOffset:r?0:e.top,contextScroll:r?0:this.oldScroll.y,contextDimension:r?n[m]("viewportHeight"):this.$element.height(),oldScroll:this.oldScroll.y,forward:"down",backward:"up",offsetProp:"top"}};return n.each(t,function(t,e){return n.each(i.waypoints[t],function(t,r){var i,o,l,s,f;i=r.options.offset;l=r.offset;o=n.isWindow(r.element)?0:r.$element.offset()[e.offsetProp];if(n.isFunction(i)){i=i.apply(r.element)}else if(typeof i==="string"){i=parseFloat(i);if(r.options.offset.indexOf("%")>-1){i=Math.ceil(e.contextDimension*i/100)}}r.offset=o-e.contextOffset+e.contextScroll-i;if(r.options.onlyOnScroll&&l!=null||!r.enabled){return}if(l!==null&&l<(s=e.oldScroll)&&s<=r.offset){return r.trigger([e.backward])}else if(l!==null&&l>(f=e.oldScroll)&&f>=r.offset){return r.trigger([e.forward])}else if(l===null&&e.oldScroll>=r.offset){return r.trigger([e.forward])}})})};t.prototype.checkEmpty=function(){if(n.isEmptyObject(this.waypoints.horizontal)&&n.isEmptyObject(this.waypoints.vertical)){this.$element.unbind([p,y].join(" "));return delete a[this.id]}};return t}();l=function(){function t(t,e,r){var i,o;r=n.extend({},n.fn[g].defaults,r);if(r.offset==="bottom-in-view"){r.offset=function(){var t;t=n[m]("viewportHeight");if(!n.isWindow(e.element)){t=e.$element.height()}return t-n(this).outerHeight()}}this.$element=t;this.element=t[0];this.axis=r.horizontal?"horizontal":"vertical";this.callback=r.handler;this.context=e;this.enabled=r.enabled;this.id="waypoints"+v++;this.offset=null;this.options=r;e.waypoints[this.axis][this.id]=this;s[this.axis][this.id]=this;i=(o=t.data(w))!=null?o:[];i.push(this.id);t.data(w,i)}t.prototype.trigger=function(t){if(!this.enabled){return}if(this.callback!=null){this.callback.apply(this.element,t)}if(this.options.triggerOnce){return this.destroy()}};t.prototype.disable=function(){return this.enabled=false};t.prototype.enable=function(){this.context.refresh();return this.enabled=true};t.prototype.destroy=function(){delete s[this.axis][this.id];delete this.context.waypoints[this.axis][this.id];return this.context.checkEmpty()};t.getWaypointsByElement=function(t){var e,r;r=n(t).data(w);if(!r){return[]}e=n.extend({},s.horizontal,s.vertical);return n.map(r,function(t){return e[t]})};return t}();d={init:function(t,e){var r;if(e==null){e={}}if((r=e.handler)==null){e.handler=t}this.each(function(){var t,r,i,s;t=n(this);i=(s=e.context)!=null?s:n.fn[g].defaults.context;if(!n.isWindow(i)){i=t.closest(i)}i=n(i);r=a[i.data(u)];if(!r){r=new o(i)}return new l(t,r,e)});n[m]("refresh");return this},disable:function(){return d._invoke(this,"disable")},enable:function(){return d._invoke(this,"enable")},destroy:function(){return d._invoke(this,"destroy")},prev:function(t,e){return d._traverse.call(this,t,e,function(t,e,n){if(e>0){return t.push(n[e-1])}})},next:function(t,e){return d._traverse.call(this,t,e,function(t,e,n){if(e<n.length-1){return t.push(n[e+1])}})},_traverse:function(t,e,i){var o,l;if(t==null){t="vertical"}if(e==null){e=r}l=h.aggregate(e);o=[];this.each(function(){var e;e=n.inArray(this,l[t]);return i(o,e,l[t])});return this.pushStack(o)},_invoke:function(t,e){t.each(function(){var t;t=l.getWaypointsByElement(this);return n.each(t,function(t,n){n[e]();return true})});return this}};n.fn[g]=function(){var t,r;r=arguments[0],t=2<=arguments.length?e.call(arguments,1):[];if(d[r]){return d[r].apply(this,t)}else if(n.isFunction(r)){return d.init.apply(this,arguments)}else if(n.isPlainObject(r)){return d.init.apply(this,[null,r])}else if(!r){return n.error("jQuery Waypoints needs a callback function or handler option.")}else{return n.error("The "+r+" method does not exist in jQuery Waypoints.")}};n.fn[g].defaults={context:r,continuous:true,enabled:true,horizontal:false,offset:0,triggerOnce:false};h={refresh:function(){return n.each(a,function(t,e){return e.refresh()})},viewportHeight:function(){var t;return(t=r.innerHeight)!=null?t:i.height()},aggregate:function(t){var e,r,i;e=s;if(t){e=(i=a[n(t).data(u)])!=null?i.waypoints:void 0}if(!e){return[]}r={horizontal:[],vertical:[]};n.each(r,function(t,i){n.each(e[t],function(t,e){return i.push(e)});i.sort(function(t,e){return t.offset-e.offset});r[t]=n.map(i,function(t){return t.element});return r[t]=n.unique(r[t])});return r},above:function(t){if(t==null){t=r}return h._filter(t,"vertical",function(t,e){return e.offset<=t.oldScroll.y})},below:function(t){if(t==null){t=r}return h._filter(t,"vertical",function(t,e){return e.offset>t.oldScroll.y})},left:function(t){if(t==null){t=r}return h._filter(t,"horizontal",function(t,e){return e.offset<=t.oldScroll.x})},right:function(t){if(t==null){t=r}return h._filter(t,"horizontal",function(t,e){return e.offset>t.oldScroll.x})},enable:function(){return h._invoke("enable")},disable:function(){return h._invoke("disable")},destroy:function(){return h._invoke("destroy")},extendFn:function(t,e){return d[t]=e},_invoke:function(t){var e;e=n.extend({},s.vertical,s.horizontal);return n.each(e,function(e,n){n[t]();return true})},_filter:function(t,e,r){var i,o;i=a[n(t).data(u)];if(!i){return[]}o=[];n.each(i.waypoints[e],function(t,e){if(r(i,e)){return o.push(e)}});o.sort(function(t,e){return t.offset-e.offset});return n.map(o,function(t){return t.element})}};n[m]=function(){var t,n;n=arguments[0],t=2<=arguments.length?e.call(arguments,1):[];if(h[n]){return h[n].apply(null,t)}else{return h.aggregate.call(null,n)}};n[m].settings={resizeThrottle:100,scrollThrottle:30};return i.load(function(){return n[m]("refresh")})})}).call(this);;/**/
// Generated by CoffeeScript 1.4.0
/*
Infinite Scroll Shortcut for jQuery Waypoints - v2.0.2
Copyright (c) 2011-2013 Caleb Troughton
Dual licensed under the MIT license and GPL license.
https://github.com/imakewebthings/jquery-waypoints/blob/master/licenses.txt
*/
(function(){(function(n,e){if(typeof define==="function"&&define.amd){return define(["jquery","waypoints"],e)}else{return e(n.jQuery)}})(this,function(n){var e;e={container:"auto",items:".infinite-item",more:".infinite-more-link",offset:"bottom-in-view",loadingClass:"infinite-loading",onBeforePageLoad:n.noop,onAfterPageLoad:n.noop};return n.waypoints("extendFn","infinite",function(i){var t;i=n.extend({},n.fn.waypoint.defaults,e,i);t=i.container==="auto"?this:n(i.container);i.handler=function(e){var o;if(e==="down"||e==="right"){o=n(this);i.onBeforePageLoad();o.waypoint("disable");t.addClass(i.loadingClass);return n.get(n(i.more).attr("href"),function(e){var a,r,f;a=n(e);r=n(i.more);f=a.find(i.more);t.append(a.find(i.items));t.removeClass(i.loadingClass);if(f.length){r.replaceWith(f);o.waypoint("enable")}else{o.waypoint("destroy")}return i.onAfterPageLoad()})}};return this.waypoint(i)})})}).call(this);;/**/
﻿/**
* hoverIntent is similar to jQuery's built-in "hover" function except that
* instead of firing the onMouseOver event immediately, hoverIntent checks
* to see if the user's mouse has slowed down (beneath the sensitivity
* threshold) before firing the onMouseOver event.
* 
* hoverIntent r6 // 2011.02.26 // jQuery 1.5.1+
* <http://cherne.net/brian/resources/jquery.hoverIntent.html>
* 
* hoverIntent is currently available for use in all personal or commercial 
* projects under both MIT and GPL licenses. This means that you can choose 
* the license that best suits your project, and use it accordingly.
* 
* // basic usage (just like .hover) receives onMouseOver and onMouseOut functions
* $("ul li").hoverIntent( showNav , hideNav );
* 
* // advanced usage receives configuration object only
* $("ul li").hoverIntent({
*	sensitivity: 7, // number = sensitivity threshold (must be 1 or higher)
*	interval: 100,   // number = milliseconds of polling interval
*	over: showNav,  // function = onMouseOver callback (required)
*	timeout: 0,   // number = milliseconds delay before onMouseOut function call
*	out: hideNav    // function = onMouseOut callback (required)
* });
* 
* @param  f  onMouseOver function || An object with configuration options
* @param  g  onMouseOut function  || Nothing (use configuration options object)
* @author    Brian Cherne <brian(at)cherne(dot)net>
*/
(function($) {
	$.fn.hoverIntent = function(f,g) {
		// default configuration options
		var cfg = {
			sensitivity: 7,
			interval: 100,
			timeout: 0
		};
		// override configuration options with user supplied object
		cfg = $.extend(cfg, g ? { over: f, out: g } : f );

		// instantiate variables
		// cX, cY = current X and Y position of mouse, updated by mousemove event
		// pX, pY = previous X and Y position of mouse, set by mouseover and polling interval
		var cX, cY, pX, pY;

		// A private function for getting mouse position
		var track = function(ev) {
			cX = ev.pageX;
			cY = ev.pageY;
		};

		// A private function for comparing current and previous mouse position
		var compare = function(ev,ob) {
			ob.hoverIntent_t = clearTimeout(ob.hoverIntent_t);
			// compare mouse positions to see if they've crossed the threshold
			if ( ( Math.abs(pX-cX) + Math.abs(pY-cY) ) < cfg.sensitivity ) {
				$(ob).unbind("mousemove",track);
				// set hoverIntent state to true (so mouseOut can be called)
				ob.hoverIntent_s = 1;
				return cfg.over.apply(ob,[ev]);
			} else {
				// set previous coordinates for next time
				pX = cX; pY = cY;
				// use self-calling timeout, guarantees intervals are spaced out properly (avoids JavaScript timer bugs)
				ob.hoverIntent_t = setTimeout( function(){compare(ev, ob);} , cfg.interval );
			}
		};

		// A private function for delaying the mouseOut function
		var delay = function(ev,ob) {
			ob.hoverIntent_t = clearTimeout(ob.hoverIntent_t);
			ob.hoverIntent_s = 0;
			return cfg.out.apply(ob,[ev]);
		};

		// A private function for handling mouse 'hovering'
		var handleHover = function(e) {
			// copy objects to be passed into t (required for event object to be passed in IE)
			var ev = jQuery.extend({},e);
			var ob = this;

			// cancel hoverIntent timer if it exists
			if (ob.hoverIntent_t) { ob.hoverIntent_t = clearTimeout(ob.hoverIntent_t); }

			// if e.type == "mouseenter"
			if (e.type == "mouseenter") {
				// set "previous" X and Y position based on initial entry point
				pX = ev.pageX; pY = ev.pageY;
				// update "current" X and Y position based on mousemove
				$(ob).bind("mousemove",track);
				// start polling interval (self-calling timeout) to compare mouse coordinates over time
				if (ob.hoverIntent_s != 1) { ob.hoverIntent_t = setTimeout( function(){compare(ev,ob);} , cfg.interval );}

			// else e.type == "mouseleave"
			} else {
				// unbind expensive mousemove event
				$(ob).unbind("mousemove",track);
				// if hoverIntent state is true, then call the mouseOut function after the specified delay
				if (ob.hoverIntent_s == 1) { ob.hoverIntent_t = setTimeout( function(){delay(ev,ob);} , cfg.timeout );}
			}
		};

		// bind the function to the two event listeners
		return this.bind('mouseenter',handleHover).bind('mouseleave',handleHover);
	};
})(jQuery);;/**/
/* Placeholders.js v2.1.0 */
!function(a){"use strict";function b(a,b,c){return a.addEventListener?a.addEventListener(b,c,!1):a.attachEvent?a.attachEvent("on"+b,c):void 0}function c(a,b){var c,d;for(c=0,d=a.length;d>c;c++)if(a[c]===b)return!0;return!1}function d(a,b){var c;a.createTextRange?(c=a.createTextRange(),c.move("character",b),c.select()):a.selectionStart&&(a.focus(),a.setSelectionRange(b,b))}function e(a,b){try{return a.type=b,!0}catch(c){return!1}}a.Placeholders={Utils:{addEventListener:b,inArray:c,moveCaret:d,changeType:e}}}(this),function(a){"use strict";function b(){}function c(a){var b;return a.value===a.getAttribute(G)&&"true"===a.getAttribute(H)?(a.setAttribute(H,"false"),a.value="",a.className=a.className.replace(F,""),b=a.getAttribute(I),b&&(a.type=b),!0):!1}function d(a){var b,c=a.getAttribute(G);return""===a.value&&c?(a.setAttribute(H,"true"),a.value=c,a.className+=" "+E,b=a.getAttribute(I),b?a.type="text":"password"===a.type&&R.changeType(a,"text")&&a.setAttribute(I,"password"),!0):!1}function e(a,b){var c,d,e,f,g;if(a&&a.getAttribute(G))b(a);else for(c=a?a.getElementsByTagName("input"):o,d=a?a.getElementsByTagName("textarea"):p,g=0,f=c.length+d.length;f>g;g++)e=g<c.length?c[g]:d[g-c.length],b(e)}function f(a){e(a,c)}function g(a){e(a,d)}function h(a){return function(){q&&a.value===a.getAttribute(G)&&"true"===a.getAttribute(H)?R.moveCaret(a,0):c(a)}}function i(a){return function(){d(a)}}function j(a){return function(b){return s=a.value,"true"===a.getAttribute(H)&&s===a.getAttribute(G)&&R.inArray(C,b.keyCode)?(b.preventDefault&&b.preventDefault(),!1):void 0}}function k(a){return function(){var b;"true"===a.getAttribute(H)&&a.value!==s&&(a.className=a.className.replace(F,""),a.value=a.value.replace(a.getAttribute(G),""),a.setAttribute(H,!1),b=a.getAttribute(I),b&&(a.type=b)),""===a.value&&(a.blur(),R.moveCaret(a,0))}}function l(a){return function(){a===document.activeElement&&a.value===a.getAttribute(G)&&"true"===a.getAttribute(H)&&R.moveCaret(a,0)}}function m(a){return function(){f(a)}}function n(a){a.form&&(x=a.form,x.getAttribute(J)||(R.addEventListener(x,"submit",m(x)),x.setAttribute(J,"true"))),R.addEventListener(a,"focus",h(a)),R.addEventListener(a,"blur",i(a)),q&&(R.addEventListener(a,"keydown",j(a)),R.addEventListener(a,"keyup",k(a)),R.addEventListener(a,"click",l(a))),a.setAttribute(K,"true"),a.setAttribute(G,v),d(a)}var o,p,q,r,s,t,u,v,w,x,y,z,A,B=["text","search","url","tel","email","password","number","textarea"],C=[27,33,34,35,36,37,38,39,40,8,46],D="#ccc",E="placeholdersjs",F=new RegExp("(?:^|\\s)"+E+"(?!\\S)"),G="data-placeholder-value",H="data-placeholder-active",I="data-placeholder-type",J="data-placeholder-submit",K="data-placeholder-bound",L="data-placeholder-focus",M="data-placeholder-live",N=document.createElement("input"),O=document.getElementsByTagName("head")[0],P=document.documentElement,Q=a.Placeholders,R=Q.Utils;if(Q.nativeSupport=void 0!==N.placeholder,!Q.nativeSupport){for(o=document.getElementsByTagName("input"),p=document.getElementsByTagName("textarea"),q="false"===P.getAttribute(L),r="false"!==P.getAttribute(M),t=document.createElement("style"),t.type="text/css",u=document.createTextNode("."+E+" { color:"+D+"; }"),t.styleSheet?t.styleSheet.cssText=u.nodeValue:t.appendChild(u),O.insertBefore(t,O.firstChild),A=0,z=o.length+p.length;z>A;A++)y=A<o.length?o[A]:p[A-o.length],v=y.attributes.placeholder,v&&(v=v.nodeValue,v&&R.inArray(B,y.type)&&n(y));w=setInterval(function(){for(A=0,z=o.length+p.length;z>A;A++)y=A<o.length?o[A]:p[A-o.length],v=y.attributes.placeholder,v&&(v=v.nodeValue,v&&R.inArray(B,y.type)&&(y.getAttribute(K)||n(y),(v!==y.getAttribute(G)||"password"===y.type&&!y.getAttribute(I))&&("password"===y.type&&!y.getAttribute(I)&&R.changeType(y,"text")&&y.setAttribute(I,"password"),y.value===y.getAttribute(G)&&(y.value=v),y.setAttribute(G,v))));r||clearInterval(w)},100)}Q.disable=Q.nativeSupport?b:f,Q.enable=Q.nativeSupport?b:g}(this);;/**/
