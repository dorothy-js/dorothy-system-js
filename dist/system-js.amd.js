/* @pollon/system-js - v1.0.0
* https://github.com/pollon-js/system-js#readme
* 2020 Francesco Lasaracina. Licensed ISC */
define((function(){"use strict";function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(){function n(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n)}var t,r,u;return t=n,(r=[{key:"resolveURI",value:function(e){return null==e?null:e}},{key:"resolveTextURI",value:function(e){return e=this.resolveURI(e)}},{key:"resolvePluginURI",value:function(e,n){return null===(n=this.resolveURI(n))?e:n+e}},{key:"load",value:function(e){return System.import(e).then((function(e){return e}))}},{key:"loadPlugins",value:function(e){var n=this;return Promise.all(e.map((function(e){return e=n.resolveURI(e),System.import(e).then((function(e){return e[Object.keys(e)[0]]}))})))}},{key:"loadText",value:function(e){return e=this.resolveTextURI(e),System.import(e).then((function(e){return e.default}))}},{key:"loadModule",value:function(e,n){var t=e.baseUrl||"";return System.import(t+n).then((function(e){return e[Object.keys(e)[0]]}))}}])&&e(t.prototype,r),u&&e(t,u),n}()}));
