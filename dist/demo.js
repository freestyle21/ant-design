!function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return e[r].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}({0:function(e,t,n){"use strict";window["css-animation"]=n(105),window["react-router"]=window.ReactRouter;var r=n(274),o=n(66);r(function(){var e=antd.Select,t=e.Option,n=window.ANT_COMPONENTS,r=o.createClass({displayName:"AutoComplete",getOptions:function(){return n.map(function(e){return o.createElement(t,{sData:e,key:e.title},o.createElement("strong",null,e.title)," ",o.createElement("span",null,e.desc))})},handleSelect:function(e){location.pathname="/components/"+e.replace(/([a-z])([A-Z])/g,function(e,t,n){return t+"-"+n}).toLowerCase()},filterOption:function(e,t){return-1!==t.props.sData.title.toLowerCase().indexOf(e.toLowerCase())||-1!==t.props.sData.desc.indexOf(e)},render:function(){return o.createElement(e,{combobox:!0,style:{width:200},onSelect:this.handleSelect,dropdownMenuStyle:{maxHeight:200,overflow:"auto"},searchPlaceholder:"搜索组件...",renderDropdownToBody:!0,filterOption:this.filterOption},this.getOptions())}});o.render(o.createElement(r,null),document.getElementById("autoComplete"))})},66:function(e,t){e.exports=React},105:function(e,t,n){"use strict";var r=n(106),o=n(107),i=function(e,t,n){var i=t,a=i+"-active";e.rcEndListener&&e.rcEndListener(),e.rcEndListener=function(t){t&&t.target!==e||(e.rcAnimTimeout&&(clearTimeout(e.rcAnimTimeout),e.rcAnimTimeout=null),o.removeClass(e,i),o.removeClass(e,a),r.removeEndEventListener(e,e.rcEndListener),e.rcEndListener=null,n&&n())},r.addEndEventListener(e,e.rcEndListener),o.addClass(e,i),e.rcAnimTimeout=setTimeout(function(){o.addClass(e,a),e.rcAnimTimeout=null},0)};i.style=function(e,t,n){e.rcEndListener&&e.rcEndListener(),e.rcEndListener=function(t){t&&t.target!==e||(e.rcAnimTimeout&&(clearTimeout(e.rcAnimTimeout),e.rcAnimTimeout=null),r.removeEndEventListener(e,e.rcEndListener),e.rcEndListener=null,n&&n())},r.addEndEventListener(e,e.rcEndListener),e.rcAnimTimeout=setTimeout(function(){for(var n in t)e.style[n]=t[n];e.rcAnimTimeout=null},0)},i.setTransition=function(e,t,n){t=t||"",["Webkit","Moz","O","ms"].forEach(function(r){e.style[r+"Transition"+t]=n})},i.addClass=o.addClass,i.removeClass=o.removeClass,e.exports=i},106:function(e,t){"use strict";function n(){var e=document.createElement("div"),t=e.style;"AnimationEvent"in window||delete i.animationend.animation,"TransitionEvent"in window||delete i.transitionend.transition;for(var n in i){var r=i[n];for(var o in r)if(o in t){a.push(r[o]);break}}}function r(e,t,n){e.addEventListener(t,n,!1)}function o(e,t,n){e.removeEventListener(t,n,!1)}var i={transitionend:{transition:"transitionend",WebkitTransition:"webkitTransitionEnd",MozTransition:"mozTransitionEnd",OTransition:"oTransitionEnd",msTransition:"MSTransitionEnd"},animationend:{animation:"animationend",WebkitAnimation:"webkitAnimationEnd",MozAnimation:"mozAnimationEnd",OAnimation:"oAnimationEnd",msAnimation:"MSAnimationEnd"}},a=[];"undefined"!=typeof window&&n();var s={addEndEventListener:function(e,t){return 0===a.length?void window.setTimeout(t,0):void a.forEach(function(n){r(e,n,t)})},endEvents:a,removeEndEventListener:function(e,t){0!==a.length&&a.forEach(function(n){o(e,n,t)})}};e.exports=s},107:function(e,t){"use strict";var n=" ",r=/[\n\t\r]/g,o=function(e){return(n+e+n).replace(r,n)};e.exports={addClass:function(e,t){e.className+=" "+t},removeClass:function(e,t){var r=e.className.trim(),i=o(r);for(t=t.trim(),t=n+t+n;i.indexOf(t)>=0;)i=i.replace(t,n);e.className=i.trim()}}},274:function(e,t){e.exports=jQuery}});
//# sourceMappingURL=demo.js.map