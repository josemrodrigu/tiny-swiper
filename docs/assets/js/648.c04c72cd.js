(self.webpackChunktiny_swiper_website=self.webpackChunktiny_swiper_website||[]).push([[648],{3905:function(e,t,n){"use strict";n.d(t,{kt:function(){return f}});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),c=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),f=c(n),p=r,m=f["".concat(s,".").concat(p)]||f[p]||u[p]||o;return n?i.createElement(m,a(a({ref:t},d),{},{components:n})):i.createElement(m,a({ref:t},d))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var c=2;c<o;c++)a[c]=n[c];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3007:function(e,t,n){"use strict";function i(e,t){void 0===t&&(t=[]),Array.isArray(t)||(t=[t]),t.forEach((function(t){return!e.classList.contains(t)&&e.classList.add(t)}))}function r(e,t){void 0===t&&(t=[]),Array.isArray(t)||(t=[t]),t.forEach((function(t){return e.classList.contains(t)&&e.classList.remove(t)}))}function o(e,t,n,i){e.addEventListener(t,n,i)}function a(e,t,n){e.removeEventListener(t,n)}function l(e,t,n){return void 0===n&&(n=""),e.setAttribute(t,n),e}function s(e,t,n){return Object.keys(t).forEach((function(n){e.style[n]=t[n]})),n&&getComputedStyle(e),e}n.d(t,{fk:function(){return h},aX:function(){return c},$z:function(){return y},UI:function(){return b},QU:function(){return u}});var c=function(e,t){var n=Boolean(t.lazyload),o=Object.assign({loadPrevNext:!1,loadPrevNextAmount:1,loadOnTransitionStart:!1,elementClass:"swiper-lazy",loadingClass:"swiper-lazy-loading",loadedClass:"swiper-lazy-loaded",preloaderClass:"swiper-lazy-preloader"},t.lazyload),a={load:function(t){var n=e.env.element.$list[t];if(n){var a=[].slice.call(n.getElementsByClassName(o.elementClass)),l=[].slice.call(n.getElementsByClassName(o.preloaderClass));a.forEach((function(e){if(e.hasAttribute("data-src")){var t=e.getAttribute("data-src");i(e,[o.loadingClass]),r(e,[o.loadedClass]),e.src=t,e.onload=function(){return s(e)},e.onerror=function(){return s(e)}}}))}function s(e){e.removeAttribute("data-src"),i(e,[o.loadedClass]),r(e,[o.loadingClass]),e.onload=null,e.onerror=null,e.isLoaded=!0,a.every((function(e){return e.isLoaded}))&&l.forEach((function(e){e.parentElement.removeChild(e)}))}},loadRange:function(e,t){if(a.load(e),o.loadPrevNext&&t>=1)for(var n=1;n<=t;n++)a.load(e+n),a.load(e-n)}};n&&(e.on("before-init",(function(){e.lazyload=a})),o.loadOnTransitionStart?e.on("before-slide",(function(e,t,n){a.loadRange(n,o.loadPrevNextAmount)})):e.on("after-slide",(function(e){a.loadRange(e,o.loadPrevNextAmount)})),e.on("after-destroy",(function(){e.lazyload&&delete e.lazyload})))},u=function(e,t){var n=Boolean(t.pagination),o=Object.assign({clickable:!1,bulletClass:"swiper-pagination-bullet",bulletActiveClass:"swiper-pagination-bullet-active"},t.pagination),a={$pageList:[],$pagination:null};n&&(e.on("after-init",(function(){var n=o.bulletClass,r=o.bulletActiveClass,l=e.env.element.$list,s="string"==typeof o.el?document.body.querySelector(o.el):o.el,c=[],u=document.createDocumentFragment(),d=l.length-Math.ceil(t.slidesPerView)+1;t.excludeElements.push(s),a.$pagination=s,a.$pageList=c;for(var f=0;f<d;f++){var p=document.createElement("div");i(p,f===e.state.index?[n,r]:n),c.push(p),u.appendChild(p)}s.appendChild(u),o.clickable&&s.addEventListener("click",(function(t){e.slideTo(c.indexOf(t.target)),t.stopPropagation()}))})),e.on("after-destroy",(function(){n&&(a.$pagination.innerHTML="",a.$pageList=[],a.$pagination=null)})),e.on("after-slide",(function(e){var t=o.bulletActiveClass;a.$pageList&&a.$pageList.forEach((function(n,o){o===e?i(n,t):r(n,t)}))})))},d="ArrowUp",f="ArrowRight",p="ArrowDown",m="ArrowLeft";function v(e){if(!e)return!1;var t=getComputedStyle(e);return!("hidden"===t.visibility||"none"===t.display)&&(!e.parentElement||1!==e.parentElement.nodeType||v(e.parentElement))}function g(e){var t=v(e),n=e.getBoundingClientRect();return n.top>=0&&n.bottom<=window.innerHeight&&n.left>=0&&n.right<=window.innerWidth&&t}var h=function(e,t){var n=Boolean(t.keyboard),i=Object.assign({enabled:!0,onlyInViewport:!0},t.keyboard),r={enable:function(){i.enabled=!0},disable:function(){i.enabled=!1},onKeyDown:function(n){var r=n.key;i.onlyInViewport&&!g(e.env.element.$el)||!i.enabled||(t.isHorizontal?r===m?e.slideTo(e.state.index-1):r===f&&e.slideTo(e.state.index+1):r===p?e.slideTo(e.state.index-1):r===d&&e.slideTo(e.state.index+1))}};n&&(e.on("before-init",(function(){e.keyboard=r,o(window,"keydown",r.onKeyDown)})),e.on("after-destroy",(function(){e.keyboard&&(a(window,"keydown",r.onKeyDown),delete e.keyboard)})))},y=function(e,t){var n=Boolean(t.mousewheel),i=Object.assign({invert:!1,sensitivity:1,interval:400},t.mousewheel),r={$el:null},l={wheeling:!1,wheelDelta:0,wheelingTimer:0},s=function(n){var r=Math.abs(n.deltaX)>Math.abs(n.deltaY);if(t.isHorizontal===r){var o=r?n.deltaX:n.deltaY,a=e.state.index;if(Math.abs(o)-Math.abs(l.wheelDelta)>0&&!l.wheeling&&Math.abs(o)>=i.sensitivity){var s=i.invert?1:-1;e.slideTo(o>0?a-s:a+s),l.wheeling=!0,l.wheelingTimer=setTimeout((function(){l.wheeling=!1}),i.interval)}l.wheelDelta=o,n.preventDefault(),n.stopPropagation()}};e.on("after-init",(function(){if(n){var t=e.env.element.$el;r.$el=t,o(t,"wheel",s)}})),e.on("after-destroy",(function(){n&&(a(r.$el,"wheel",s),delete r.$el)}))},b=function(e,t){var n=Boolean(t.navigation),i={nextEl:null,prevEl:null},r=Object.assign({disabledClass:"swiper-button-disabled"},t.navigation),l=function(e){c(e.target,"next")},s=function(e){c(e.target,"prev")},c=function(t,n){if(!u(t)||e.options.loop){var i=e.state.index;"next"===n&&e.slideTo(i+1),"prev"===n&&e.slideTo(i-1)}},u=function(e){return e.classList.contains(r.disabledClass)};e.on("before-slide",(function(t,n,o){var a,l,s,c;e.options.loop||(a=o,l=e.env.limitation,s=l.minIndex,c=l.maxIndex,i&&i.prevEl&&i.nextEl&&(i.nextEl.classList.contains(r.disabledClass)&&a>=s&&i.nextEl.classList.remove(r.disabledClass),i.prevEl.classList.contains(r.disabledClass)&&a<=c&&i.prevEl.classList.remove(r.disabledClass),a===s&&i.prevEl.classList.add(r.disabledClass),a===c&&i.nextEl.classList.add(r.disabledClass)))})),e.on("after-init",(function(){var t,a,c;n&&(i.nextEl="string"==typeof r.nextEl?document.body.querySelector(r.nextEl):r.nextEl,i.prevEl="string"==typeof r.prevEl?document.body.querySelector(r.prevEl):r.prevEl,e.options.loop||(t=e.state.index,a=e.env.element.$list,c=e.env.limitation.minIndex,t===c&&i.prevEl&&i.prevEl.classList.add(r.disabledClass),a.length===c&&i.nextEl&&i.nextEl.classList.add(r.disabledClass)),o(i.nextEl,"click",l),o(i.prevEl,"click",s))})),e.on("after-destroy",(function(){i&&i.prevEl&&i.nextEl&&(a(i.nextEl,"click",l),a(i.prevEl,"click",s),delete i.nextEl,delete i.prevEl)}))};function x(){return(x=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}var w={direction:"horizontal",touchRatio:1,touchAngle:45,longSwipesRatio:.5,initialSlide:0,loop:!1,freeMode:!1,passiveListeners:!0,resistance:!0,resistanceRatio:.85,speed:300,longSwipesMs:300,spaceBetween:0,slidesPerView:1,centeredSlides:!1,slidePrevClass:"swiper-slide-prev",slideNextClass:"swiper-slide-next",slideActiveClass:"swiper-slide-active",slideClass:"swiper-slide",wrapperClass:"swiper-wrapper",touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchMoveStopPropagation:!1,excludeElements:[],injections:{translate:function(e,t,n,i){s(t.element.$wrapper,{transition:e.isStart?"none":"transform ease "+i+"ms",transform:n.isHorizontal?"translate3d("+e.transforms+"px, 0, 0)":"translate3d(0, "+e.transforms+"px, 0)"})}}};var E="before-init",S="after-init",C="before-slide",O="scroll",T="after-slide",z="before-destroy",P="after-destroy";var $=180/Math.PI;function A(){var e=[];return{getDuration:function(){var t=e[0],n=e[e.length-1];return t?n.time-t.time:0},getOffset:function(){var t=e[0],n=e[e.length-1];return t?{x:n.x-t.x,y:n.y-t.y}:{x:0,y:0}},getLogs:function(){return e},vector:function(){return function(e,t){var n=e[t],i=e[t-1]||n,r={x:n.x-i.x,y:n.y-i.y},o=n.time-i.time,a=r.x/o||0,l=r.y/o||0;return x({},r,{angle:Math.atan2(Math.abs(r.y),Math.abs(r.x))*$,velocityX:a,velocityY:l})}(e,e.length-1)},clear:function(){e=[]},push:function(t){e.push(x({time:Date.now()},t))}}}function k(){return performance?performance.now():Date.now()}function M(){var e,t,n,i,r=(n=requestAnimationFrame||webkitRequestAnimationFrame||setTimeout,i=cancelAnimationFrame||webkitCancelAnimationFrame||clearTimeout,{run:function(i){e=void 0===e?k():e,t=n((function(){var t=k(),n=t-e;e=t,i(n)}))},stop:function(){e=void 0,i(t)}});return{run:function e(t){r.run((function(n){e(t),t(n)}))},stop:function(){r.stop()}}}function L(e,t){var n=e.tracker,i=t.initStatus;n.clear(),i()}function j(e,t,n,i){var r=e.touchable,l=["INPUT","SELECT","OPTION","TEXTAREA","BUTTON","VIDEO"],s=function(e,t,n,i){var r=i.initLayout,o=i.initStatus,a=i.render,l=i.scrollPixel,s=i.slideTo,c=i.getOffsetSteps,u=M();return{preheat:function(e,t){var i=n.tracker;u.stop(),i.clear(),i.push(e),r(t),o(t),n.isStart=!0,a()},move:function(t){var i=n.tracker,r=e.touchRatio,o=e.touchAngle,s=e.isHorizontal;if(n.isStart&&!n.isScrolling){i.push(t);var c=i.vector(),u=i.getOffset();if(u.x||u.y)if(s&&c.angle<o||!s&&90-c.angle<o||n.isTouching){var d=c[s?"x":"y"]*r;n.isTouching=!0,l(d),a()}else n.isScrolling=!0,i.clear()}},stop:function(){var r=n.index,o=n.tracker,d=t.measure;if(n.isStart)if(n.isStart=!1,e.freeMode){var f=o.vector()[e.isHorizontal?"velocityX":"velocityY"];u.run((function(e){var t=f*e;f*=.98,Math.abs(t)<.01?(u.stop(),L(n,i)):(l(t),a(0))}))}else{var p=o.getDuration(),m=o.getOffset()[e.isHorizontal?"x":"y"],v=Math.ceil(Math.abs(m)/d.boxSize),g=c(m);p>e.longSwipesMs?s(r+g*(m>0?-1:1)):s(m>0?r-v:r+v),L(n,i)}}}}(n,e,t,i),c=s.preheat,u=s.move,d=s.stop;function f(e){var t=r?e.changedTouches[0]:e;return{x:t.pageX,y:t.pageY}}function p(t){for(var i=0;i<n.excludeElements.length;i++)if(n.excludeElements[i].contains(t.target))return;var o,a,s,u,d=e.element.$wrapper,p=n.touchStartPreventDefault&&-1===l.indexOf(t.target.nodeName)||n.touchStartForcePreventDefault;!r&&p&&t.preventDefault(),c(f(t),(o=d,a=n.isHorizontal,s=getComputedStyle(o).transform.replace(/[a-z]|\(|\)|\s/g,"").split(",").map(parseFloat),u=[],16===s.length?u=s.slice(12,14):6===s.length&&(u=s.slice(4,6)),u[a?0:1]||0))}function m(e){n.touchMoveStopPropagation&&e.stopPropagation(),u(f(e)),t.isTouching&&!1!==e.cancelable&&e.preventDefault()}function v(){d()}return{attach:function(){var t=e.element.$el;r?(o(t,"touchstart",p,{passive:n.passiveListeners,capture:!1}),o(t,"touchmove",m),o(t,"touchend",v),o(t,"touchcancel",v)):(o(t,"mousedown",p),o(document,"mousemove",m),o(document,"mouseup",v))},detach:function(){var t=e.element.$el;a(t,"touchstart",p),a(t,"touchmove",m),a(t,"touchend",v),a(t,"touchcancel",v),a(t,"mousedown",p),a(document,"mousemove",m),a(document,"mouseup",v)}}}function D(e,t,n){var i=e.$list,r=t.viewSize,o=t.slideSize,a=t.boxSize,l=function(e){return e.loop?Math.ceil(e.slidesPerView):0}(n),s=l*a,c=-s+(n.centeredSlides?(r-o)/2:0);return{max:c,min:n.spaceBetween+(n.loop?o:r)+c-a*i.length,base:c,expand:l,buffer:s,minIndex:0,maxIndex:i.length-(n.centeredSlides||n.loop?1:Math.ceil(n.slidesPerView))}}function I(e,t){var n={};function i(e){var i=function(e,t){var n=t.$el,i=e.isHorizontal?n.offsetWidth:n.offsetHeight,r=(i-Math.ceil(e.slidesPerView-1)*e.spaceBetween)/e.slidesPerView;return{boxSize:r+e.spaceBetween,viewSize:i,slideSize:r}}(t,e),r=D(e,i,t),o=Boolean("ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0||window.DocumentTouch&&document instanceof DocumentTouch);Object.assign(n,{touchable:o,element:e,measure:i,limitation:r})}return n.update=i,i(e),n}var N="data-shallow-slider",B="data-slider";function H(e,t){function n(){e.element.$wrapper.querySelectorAll("["+N+"]").forEach((function(t){return e.element.$wrapper.removeChild(t)}))}function o(){e.element.$list.forEach((function(e,t){return l(e,B,t)})),n(),function(){if(t.loop){var n=e.element,i=e.limitation,r=n.$list,o=n.$wrapper,a=i.expand,s=r.slice(-a).map((function(e){return e.cloneNode(!0)})),c=r.slice(0,a).map((function(e){return e.cloneNode(!0)}));s.forEach((function(e,t){o.appendChild(l(c[t],N)),o.insertBefore(l(s[t],N),r[0])}))}}()}function a(){var n,i=e.element,r=e.measure,o=i.$wrapper,a={display:"flex",willChange:"transform",flexDirection:t.isHorizontal?"row":"column"},l=((n={})[t.isHorizontal?"width":"height"]=r.slideSize+"px",n[t.isHorizontal?"margin-right":"margin-bottom"]=t.spaceBetween+"px",n);s(o,a),o.querySelectorAll("[data-slider]").forEach((function(e){return s(e,l)}))}return{init:function(){o(),a()},render:function(n,o,a,l){var s=e.element.$wrapper,c=void 0===o?t.speed:o;t.injections.translate(n,e,t,c),n.isStart||function(n){var o=e.element.$wrapper,a=n.index;o.querySelectorAll("[data-slider]").forEach((function(e){var n=~~e.getAttribute(B);r(e,[t.slidePrevClass,t.slideNextClass,t.slideActiveClass]),n===a&&i(e,t.slideActiveClass),n===a-1&&i(e,t.slidePrevClass),n===a+1&&i(e,t.slideNextClass)}))}(n),l&&getComputedStyle(s).transform,a&&setTimeout(a,c)},destroy:function(){var i=e.element,r=i.$list,o=i.$wrapper,a=t.isHorizontal?"margin-right":"margin-bottom";["display","will-change","flex-direction"].forEach((function(e){o.style.removeProperty(e)})),r.forEach((function(e){return e.style.removeProperty(a)})),n()},updateSize:a}}function R(e,t){var n=e-t.max,i=e-t.min;return n>0?n:i<0?i:0}function q(e,t,n,i,r){function o(t){var i=e.measure;return Math.ceil(Math.abs(t)/i.boxSize-n.longSwipesRatio)}function a(e,n,r){i.render(t,e,n,r)}function l(i){var o,a=e.limitation,l=a.min,s=a.max,c=s-l+(n.loop?e.measure.boxSize:0),u=c+1;t.transforms=i,n.loop?(o=(s-i)%u/c,t.progress=o<0?1+o:o>1?o-1:o):(o=(s-i)/c,t.progress=o<0?0:o>1?1:o),r.emit(O,x({},t))}function s(i,s){var c=e.measure,u=e.limitation,d=u.maxIndex-u.minIndex+1,f=n.loop?(i%d+d)%d:i>u.maxIndex?u.maxIndex:i<u.minIndex?u.minIndex:i,p=-f*c.boxSize+u.base;if(0!==o(p-t.transforms)&&n.loop){var m=R(t.transforms,u),v=f-t.index,g=function(e,t,n,i){var r=n.maxIndex,o=(i>0?1:-1)*(n.minIndex-r-1)+t-e;return Math.abs(i)>Math.abs(o)?o:i}(t.index,f,u,v);g===v||m?t.index===f&&l(m>0?u.min-c.boxSize+m:u.max+c.boxSize+m):l(g<0?u.min-c.boxSize:u.max+c.boxSize),a(0,void 0,!0)}r.emit(C,t.index,t,f),t.index=f,l(p),a(s,(function(){r.emit(T,f,t)}))}return{update:function(){s(t.index,0),i.updateSize()},render:a,transform:l,slideTo:s,scrollPixel:function(i){var r=t.transforms,o=e.measure,a=e.limitation,s=Number(i.toExponential().split("e")[1]),c=s<=0?Math.pow(10,-(s-1)):1,u=r;if(n.resistance&&!n.loop&&(i>0&&r>=a.max?i-=Math.pow(i*c,n.resistanceRatio)/c:i<0&&r<=a.min&&(i+=Math.pow(-i*c,n.resistanceRatio)/c)),u+=i,n.loop){var d=t.tracker.vector(),f=n.isHorizontal?d.velocityX:d.velocityY,p=R(r,a);p&&function(e,t,n){return e>0&&t>n.max||e<0&&t<n.min}(f,r,a)&&(u=p>0?a.min-o.boxSize+p:a.max+o.boxSize+p)}l(u)},initStatus:function(e){void 0===e&&(e=0),t.startTransform=e,t.isStart=!1,t.isScrolling=!1,t.isTouching=!1},initLayout:function(e){l(e)},getOffsetSteps:o}}function F(e,t){var n="string"==typeof e?document.body.querySelector(e):e,i=n.querySelector("."+t.wrapperClass),r=[].slice.call(n.getElementsByClassName(t.slideClass));return{$el:n,$wrapper:i,$list:r}}var V=function e(t,n){var i,r=function(e){var t=x({},w,e);return x({},t,{isHorizontal:"horizontal"===t.direction})}(n),o=(i={},{on:function(e,t){i[e]?i[e].push(t):i[e]=[t]},off:function(e,t){if(i[e]){var n=i[e].indexOf(t);n>-1&&i[e].splice(n,1)}},emit:function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];i[e]&&i[e].forEach((function(e){return e.apply(void 0,n)}))},clear:function(){i={}}}),a=I(F(t,r),r),l={tracker:A(),index:0,startTransform:0,isStart:!1,isScrolling:!1,isTouching:!1,transforms:0,progress:0},s=o.on,c=o.off,u=o.emit,d={on:s,off:c,env:a,state:l,options:r};(r.plugins||e.plugins||[]).forEach((function(e){return e(d,r)})),u(E,d);var f=H(a,r),p=q(a,l,r,f,o),m=j(a,l,r,p);var v=p.slideTo;return Object.assign(d,{update:function(){f.destroy(),a.update(F(t,r)),f.init(),p.update()},destroy:function(){u(z,d),m.detach(),f.destroy(),u(P,d),o.clear()},slideTo:v,updateSize:function(){a.update(F(t,r)),p.update()}}),f.init(),m.attach(),v(r.initialSlide,0),u(S,d),d};V.use=function(e){V.plugins=e},t.ZP=V}}]);