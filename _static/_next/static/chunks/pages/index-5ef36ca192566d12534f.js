(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{3646:function(e,t,n){var r=n(7228);e.exports=function(e){if(Array.isArray(e))return r(e)}},9713:function(e){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},6860:function(e){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},8206:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},319:function(e,t,n){var r=n(3646),o=n(6860),i=n(379),a=n(8206);e.exports=function(e){return r(e)||o(e)||i(e)||a()}},302:function(e,t,n){"use strict";var r=n(5893),o=n(7294),i=n(8995),a=n(9669),s=n.n(a),c=n(1664),l=n(4586),u=function(e){return(0,r.jsx)(c.default,{href:"/".concat("tv"===e.mediaType?"tv":"movie","/").concat(e.movieData.id),children:(0,r.jsxs)("div",{className:"media-row__thumbnail",children:[(0,r.jsx)("img",{src:"https://image.tmdb.org/t/p/original".concat(e.movieData.poster_path)}),(0,r.jsx)("div",{className:"media-row__top-layer",children:(0,r.jsx)("i",{className:"fas fa-play"})})]})})},d=function(){return(0,r.jsx)("div",{className:"media-row__thumbnail-skeleton",children:(0,r.jsx)("div",{className:"media-row__thumbnail-skeleton-img"})})};t.Z=function(e){var t=(0,o.useState)(!0),n=t[0],a=t[1],c=(0,o.useState)([]),p=c[0],f=c[1];(0,o.useEffect)((function(){s().get("https://api.themoviedb.org/3/".concat(e.endpoint,"&api_key=d0c1682a8a39232c2e4c32225165dc0d&language=en-US")).then((function(e){f((0,i.S)(e.data.results)),a(!1)})).catch((function(e){console.error(e)}))}),[e.query]);var h;return(0,r.jsxs)("div",{className:"media-row ".concat(e.type),children:[(0,r.jsx)("h3",{className:"media-row__title",children:e.title}),(0,r.jsx)("div",{className:"media-row__thumbnails",children:(h=e.type,n?[(0,r.jsx)(d,{},(0,l.Z)()),(0,r.jsx)(d,{},(0,l.Z)()),(0,r.jsx)(d,{},(0,l.Z)()),(0,r.jsx)(d,{},(0,l.Z)()),(0,r.jsx)(d,{},(0,l.Z)())]:p.map((function(t){return(0,r.jsx)(u,{movieData:t,type:h,mediaType:e.mediaType},(0,l.Z)())})))})]})}},3367:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var o=((r=n(7294))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=o},7845:function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=a,t.useAmp=function(){return a(o.default.useContext(i.AmpStateContext))};var r,o=(r=n(7294))&&r.__esModule?r:{default:r},i=n(3367);function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,o=void 0!==r&&r,i=e.hasQuery,a=void 0!==i&&i;return n||o&&a}},7947:function(e,t,n){"use strict";var r=n(9713);function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}t.__esModule=!0,t.defaultHead=p,t.default=void 0;var i,a=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=d();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(n,o,i):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(n(7294)),s=(i=n(617))&&i.__esModule?i:{default:i},c=n(3367),l=n(4287),u=n(7845);function d(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return d=function(){return e},e}function p(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[a.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(a.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function f(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===a.default.Fragment?e.concat(a.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var h=["name","httpEquiv","charSet","itemProp"];function m(e,t){return e.reduce((function(e,t){var n=a.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(f,[]).reverse().concat(p(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(o){var i=!0,a=!1;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){a=!0;var s=o.key.slice(o.key.indexOf("$")+1);e.has(s)?i=!1:e.add(s)}switch(o.type){case"title":case"base":t.has(o.type)?i=!1:t.add(o.type);break;case"meta":for(var c=0,l=h.length;c<l;c++){var u=h[c];if(o.props.hasOwnProperty(u))if("charSet"===u)n.has(u)?i=!1:n.add(u);else{var d=o.props[u],p=r[u]||new Set;"name"===u&&a||!p.has(d)?(p.add(d),r[u]=p):i=!1}}}return i}}()).reverse().map((function(e,n){var i=e.key||n;if(!t.inAmpMode&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some((function(t){return e.props.href.startsWith(t)}))){var s=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e.props||{});return s["data-href"]=s.href,s.href=void 0,s["data-optimized-fonts"]=!0,a.default.cloneElement(e,s)}return a.default.cloneElement(e,{key:i})}))}function v(e){var t=e.children,n=(0,a.useContext)(c.AmpStateContext),r=(0,a.useContext)(l.HeadManagerContext);return a.default.createElement(s.default,{reduceComponentsToState:m,headManager:r,inAmpMode:(0,u.isInAmpMode)(n)},t)}v.rewind=function(){};var y=v;t.default=y},617:function(e,t,n){"use strict";var r=n(319),o=n(4575),i=n(3913),a=(n(1506),n(2205)),s=n(8585),c=n(9754);function l(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=c(e);if(t){var o=c(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return s(this,n)}}t.__esModule=!0,t.default=void 0;var u=n(7294),d=function(e){a(n,e);var t=l(n);function n(e){var i;return o(this,n),(i=t.call(this,e))._hasHeadManager=void 0,i.emitChange=function(){i._hasHeadManager&&i.props.headManager.updateHead(i.props.reduceComponentsToState(r(i.props.headManager.mountedInstances),i.props))},i._hasHeadManager=i.props.headManager&&i.props.headManager.mountedInstances,i}return i(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(u.Component);t.default=d},8474:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return p}});var r=n(5893),o=(n(9008),n(7294)),i=n(1163),a=n(1216),s=n(5092),c=n(8814),l=n(302),u=n(4867),d=n(8680);function p(){(0,u.F1)(),(0,i.useRouter)();return(0,o.useEffect)((function(){}),[]),(0,r.jsxs)(s.Z,{children:[(0,r.jsx)(c.Z,{mediaUrl:"https://www.youtube.com/embed/NYH2sLid0Zc?autoplay=1&loop=1&start=16&loop=1&mute=1&playlist=NYH2sLid0Zc&",title:"Mortal Kombat",location:"In theaters and on HBO MAX. Streaming throughout May 23.",linkUrl:"/movie/460465",type:"front",mediaType:"movie",mediaId:460465}),(0,r.jsx)(a.ZP,{offset:-200,placeholder:(0,r.jsx)(d.Z,{type:"large-v",title:"Movies"}),children:(0,r.jsx)(l.Z,{title:"Movies",endpoint:"discover/movie?",type:"large-v"})}),(0,r.jsx)(a.ZP,{offset:-200,placeholder:(0,r.jsx)(d.Z,{type:"large-v",title:"TV Shows"}),children:(0,r.jsx)(l.Z,{title:"TV Shows",mediaType:"tv",endpoint:"discover/tv?",type:"large-v"})}),(0,r.jsx)(a.ZP,{offset:-200,placeholder:(0,r.jsx)(d.Z,{type:"small-v",title:"Action"}),children:(0,r.jsx)(l.Z,{title:"Action",endpoint:"discover/movie?with_genres=28",type:"small-v"})}),(0,r.jsx)(a.ZP,{offset:-200,placeholder:(0,r.jsx)(d.Z,{type:"small-v",title:"Horror"}),children:(0,r.jsx)(l.Z,{title:"Horror",endpoint:"discover/movie?with_genres=27",type:"small-v"})}),(0,r.jsx)(a.ZP,{offset:-200,placeholder:(0,r.jsx)(d.Z,{type:"small-v",title:"Sci-fi"}),children:(0,r.jsx)(l.Z,{title:"Sci-fi",endpoint:"discover/movie?with_genres=878",type:"small-v"})}),(0,r.jsx)(a.ZP,{offset:-200,placeholder:(0,r.jsx)(d.Z,{type:"small-v",title:"Mystery"}),children:(0,r.jsx)(l.Z,{title:"Mystery",endpoint:"discover/movie?with_genres=9648",type:"small-v"})}),(0,r.jsx)(a.ZP,{offset:-200,placeholder:(0,r.jsx)(d.Z,{type:"small-v",title:"Thriller"}),children:(0,r.jsx)(l.Z,{title:"Thriller",endpoint:"discover/movie?with_genres=53",type:"small-v"})}),(0,r.jsx)(a.ZP,{offset:-200,placeholder:(0,r.jsx)(d.Z,{type:"small-v",title:"Western"}),children:(0,r.jsx)(l.Z,{title:"Western",endpoint:"discover/movie?with_genres=37",type:"small-v"})}),(0,r.jsx)(a.ZP,{offset:-200,placeholder:(0,r.jsx)(d.Z,{type:"small-v",title:"Comedy"}),children:(0,r.jsx)(l.Z,{title:"Comedy",endpoint:"discover/movie?with_genres=35",type:"small-v"})}),(0,r.jsx)(a.ZP,{offset:-200,placeholder:(0,r.jsx)(d.Z,{type:"small-v",title:"Family"}),children:(0,r.jsx)(l.Z,{title:"Family",endpoint:"discover/movie?with_genres=10751",type:"small-v"})}),(0,r.jsx)(a.ZP,{offset:-200,placeholder:(0,r.jsx)(d.Z,{type:"small-v",title:"History"}),children:(0,r.jsx)(l.Z,{title:"History",endpoint:"discover/movie?with_genres=36",type:"small-v"})})]})}},8581:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(8474)}])},9008:function(e,t,n){n(7947)}},function(e){e.O(0,[774,938,554,888,179],(function(){return t=8581,e(e.s=t);var t}));var t=e.O();_N_E=t}]);