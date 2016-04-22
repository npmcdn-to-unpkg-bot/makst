/*
 * SystemJS v0.19.26
 */
!function(e){function t(e,n){if("string"!=typeof e)throw new TypeError("URL must be a string");var r=String(e).replace(/^\s+|\s+$/g,"").match(/^([^:\/?#]+:)?(?:\/\/(?:([^:@\/?#]*)(?::([^:@\/?#]*))?@)?(([^:\/?#]*)(?::(\d*))?))?([^?#]*)(\?[^#]*)?(#[\s\S]*)?/);if(!r)throw new RangeError("Invalid URL format");var a=r[1]||"",o=r[2]||"",i=r[3]||"",s=r[4]||"",d=r[5]||"",l=r[6]||"",u=r[7]||"",c=r[8]||"",f=r[9]||"";if(void 0!==n){var m=n instanceof t?n:new t(n),p=!a&&!s&&!o;!p||u||c||(c=m.search),p&&"/"!==u[0]&&(u=u?(!m.host&&!m.username||m.pathname?"":"/")+m.pathname.slice(0,m.pathname.lastIndexOf("/")+1)+u:m.pathname);var h=[];u.replace(/^(\.\.?(\/|$))+/,"").replace(/\/(\.(\/|$))+/g,"/").replace(/\/\.\.$/,"/../").replace(/\/?[^\/]*/g,function(e){"/.."===e?h.pop():h.push(e)}),u=h.join("").replace(/^\//,"/"===u[0]?"/":""),p&&(l=m.port,d=m.hostname,s=m.host,i=m.password,o=m.username),a||(a=m.protocol)}"file:"==a&&(u=u.replace(/\\/g,"/")),this.origin=s?a+(""!==a||""!==s?"//":"")+s:"",this.href=a+(a&&s||"file:"==a?"//":"")+(""!==o?o+(""!==i?":"+i:"")+"@":"")+s+u+c+f,this.protocol=a,this.username=o,this.password=i,this.host=s,this.hostname=d,this.port=l,this.pathname=u,this.search=c,this.hash=f}e.URLPolyfill=t}("undefined"!=typeof self?self:global),function(e){function t(e,t){if(!e.originalErr)for(var n=(e.stack||e.message||e).split("\n"),r=[],a=0;a<n.length;a++)("undefined"==typeof $__curScript||-1==n[a].indexOf($__curScript.src))&&r.push(n[a]);var o=(r?r.join("\n	"):e.message)+"\n	"+t;b||(o=o.replace(w?/file:\/\/\//g:/file:\/\//g,""));var i=new Error(o,e.fileName,e.lineNumber);return b?i.stack=null:i.stack=o,i.originalErr=e.originalErr||e,i}function n(e,n,r){try{new Function(e).call(r)}catch(a){throw t(a,"Evaluating "+n)}}function r(){}function a(t){this._loader={loaderObj:this,loads:[],modules:{},importPromises:{},moduleRecords:{}},x(this,"global",{get:function(){return e}})}function o(){a.call(this),this.paths={}}function i(e,t){var n,r="",a=0;for(var o in e){var i=o.split("*");if(i.length>2)throw new TypeError("Only one wildcard in a path is permitted");if(1==i.length){if(t==o)return e[o];if(t.substr(0,o.length-1)==o.substr(0,o.length-1)&&(t.length<o.length||t[o.length-1]==o[o.length-1])&&"/"==e[o][e[o].length-1])return e[o].substr(0,e[o].length-1)+(t.length>o.length?"/"+t.substr(o.length):"")}else{var s=i[0].length;s>=a&&t.substr(0,i[0].length)==i[0]&&t.substr(t.length-i[1].length)==i[1]&&(a=s,r=o,n=t.substr(i[0].length,t.length-i[1].length-i[0].length))}}var d=e[r];return"string"==typeof n&&(d=d.replace("*",n)),d}function s(){}function d(){o.call(this),M.call(this)}function l(){}function u(e,t){d.prototype[e]=t(d.prototype[e]||function(){})}function c(e){M=e(M||function(){})}function f(e){for(var t=[],n=[],r=0,a=e.length;a>r;r++){var o=S.call(t,e[r]);-1===o?(t.push(e[r]),n.push([r])):n[o].push(r)}return{names:t,indices:n}}function m(e){var t={};if("object"==typeof e||"function"==typeof e){var n=e&&e.hasOwnProperty;if(I)for(var r in e)h(t,e,r)||p(t,e,r,n);else for(var r in e)p(t,e,r,n)}return t["default"]=e,x(t,"__useDefault",{value:!0}),t}function p(e,t,n,r){(!r||t.hasOwnProperty(n))&&(e[n]=t[n])}function h(e,t,n){try{var r;return(r=Object.getOwnPropertyDescriptor(t,n))&&x(e,n,r),!0}catch(a){return!1}}function v(e){var t=e.match(D);return t&&"System.register"==e.substr(t[0].length,15)}function g(){return{name:null,deps:null,originalIndices:null,declare:null,execute:null,executingRequire:!1,declarative:!1,normalizedDeps:null,groupIndex:null,evaluated:!1,module:null,esModule:null,esmExports:!1}}var y="undefined"==typeof window&&"undefined"!=typeof self&&"undefined"!=typeof importScripts,b="undefined"!=typeof window&&"undefined"!=typeof document,w="undefined"!=typeof process&&"undefined"!=typeof process.platform&&!!process.platform.match(/^win/);e.console||(e.console={assert:function(){}});var x,S=Array.prototype.indexOf||function(e){for(var t=0,n=this.length;n>t;t++)if(this[t]===e)return t;return-1};!function(){try{Object.defineProperty({},"a",{})&&(x=Object.defineProperty)}catch(e){x=function(e,t,n){try{e[t]=n.value||n.get.call(e)}catch(r){}}}}();var E;if("undefined"!=typeof document&&document.getElementsByTagName){if(E=document.baseURI,!E){var _=document.getElementsByTagName("base");E=_[0]&&_[0].href||window.location.href}E=E.split("#")[0].split("?")[0],E=E.substr(0,E.lastIndexOf("/")+1)}else if("undefined"!=typeof process&&process.cwd)E="file://"+(w?"/":"")+process.cwd()+"/",w&&(E=E.replace(/\\/g,"/"));else{if("undefined"==typeof location)throw new TypeError("No environment baseURI");E=e.location.href}try{var O="test:"==new e.URL("test:///").protocol}catch(j){}var P=O?e.URL:e.URLPolyfill;x(r.prototype,"toString",{value:function(){return"Module"}}),function(){function o(e){return{status:"loading",name:e,linkSets:[],dependencies:[],metadata:{}}}function i(e,t,n){return new Promise(c({step:n.address?"fetch":"locate",loader:e,moduleName:t,moduleMetadata:n&&n.metadata||{},moduleSource:n.source,moduleAddress:n.address}))}function s(e,t,n,r){return new Promise(function(a,o){a(e.loaderObj.normalize(t,n,r))}).then(function(t){var n;if(e.modules[t])return n=o(t),n.status="linked",n.module=e.modules[t],n;for(var r=0,a=e.loads.length;a>r;r++)if(n=e.loads[r],n.name==t)return n;return n=o(t),e.loads.push(n),d(e,n),n})}function d(e,t){l(e,t,Promise.resolve().then(function(){return e.loaderObj.locate({name:t.name,metadata:t.metadata})}))}function l(e,t,n){u(e,t,n.then(function(n){return"loading"==t.status?(t.address=n,e.loaderObj.fetch({name:t.name,metadata:t.metadata,address:n})):void 0}))}function u(t,r,a){a.then(function(a){return"loading"==r.status?Promise.resolve(t.loaderObj.translate({name:r.name,metadata:r.metadata,address:r.address,source:a})).then(function(e){return r.source=e,t.loaderObj.instantiate({name:r.name,metadata:r.metadata,address:r.address,source:e})}).then(function(a){if(void 0===a)return r.address=r.address||"<Anonymous Module "+ ++j+">",r.isDeclarative=!0,O.call(t.loaderObj,r).then(function(t){var a=e.System,o=a.register;a.register=function(e,t,n){"string"!=typeof e&&(n=t,t=e),r.declare=n,r.depsList=t},n(t,r.address,{}),a.register=o});if("object"!=typeof a)throw TypeError("Invalid instantiate return value");r.depsList=a.deps||[],r.execute=a.execute,r.isDeclarative=!1}).then(function(){r.dependencies=[];for(var e=r.depsList,n=[],a=0,o=e.length;o>a;a++)(function(e,a){n.push(s(t,e,r.name,r.address).then(function(t){if(r.dependencies[a]={key:e,value:t.name},"linked"!=t.status)for(var n=r.linkSets.concat([]),o=0,i=n.length;i>o;o++)m(n[o],t)}))})(e[a],a);return Promise.all(n)}).then(function(){r.status="loaded";for(var e=r.linkSets.concat([]),t=0,n=e.length;n>t;t++)h(e[t],r)}):void 0})["catch"](function(e){r.status="failed",r.exception=e;for(var t=r.linkSets.concat([]),n=0,a=t.length;a>n;n++)v(t[n],r,e)})}function c(e){return function(t,n){var r=e.loader,a=e.moduleName,i=e.step;if(r.modules[a])throw new TypeError('"'+a+'" already exists in the module table');for(var s,c=0,m=r.loads.length;m>c;c++)if(r.loads[c].name==a&&(s=r.loads[c],"translate"!=i||s.source||(s.address=e.moduleAddress,u(r,s,Promise.resolve(e.moduleSource))),s.linkSets.length&&s.linkSets[0].loads[0].name==s.name))return s.linkSets[0].done.then(function(){t(s)});var p=s||o(a);p.metadata=e.moduleMetadata;var h=f(r,p);r.loads.push(p),t(h.done),"locate"==i?d(r,p):"fetch"==i?l(r,p,Promise.resolve(e.moduleAddress)):(p.address=e.moduleAddress,u(r,p,Promise.resolve(e.moduleSource)))}}function f(e,t){var n={loader:e,loads:[],startingLoad:t,loadingCount:0};return n.done=new Promise(function(e,t){n.resolve=e,n.reject=t}),m(n,t),n}function m(e,t){if("failed"!=t.status){for(var n=0,r=e.loads.length;r>n;n++)if(e.loads[n]==t)return;e.loads.push(t),t.linkSets.push(e),"loaded"!=t.status&&e.loadingCount++;for(var a=e.loader,n=0,r=t.dependencies.length;r>n;n++)if(t.dependencies[n]){var o=t.dependencies[n].value;if(!a.modules[o])for(var i=0,s=a.loads.length;s>i;i++)if(a.loads[i].name==o){m(e,a.loads[i]);break}}}}function p(e){var t=!1;try{w(e,function(n,r){v(e,n,r),t=!0})}catch(n){v(e,null,n),t=!0}return t}function h(e,t){if(e.loadingCount--,!(e.loadingCount>0)){var n=e.startingLoad;if(e.loader.loaderObj.execute===!1){for(var r=[].concat(e.loads),a=0,o=r.length;o>a;a++){var t=r[a];t.module=t.isDeclarative?{name:t.name,module:P({}),evaluated:!0}:{module:P({})},t.status="linked",g(e.loader,t)}return e.resolve(n)}var i=p(e);i||e.resolve(n)}}function v(e,n,r){var a=e.loader;e:if(n)if(e.loads[0].name==n.name)r=t(r,"Error loading "+n.name);else{for(var o=0;o<e.loads.length;o++)for(var i=e.loads[o],s=0;s<i.dependencies.length;s++){var d=i.dependencies[s];if(d.value==n.name){r=t(r,"Error loading "+n.name+' as "'+d.key+'" from '+i.name);break e}}r=t(r,"Error loading "+n.name+" from "+e.loads[0].name)}else r=t(r,"Error linking "+e.loads[0].name);for(var l=e.loads.concat([]),o=0,u=l.length;u>o;o++){var n=l[o];a.loaderObj.failed=a.loaderObj.failed||[],-1==S.call(a.loaderObj.failed,n)&&a.loaderObj.failed.push(n);var c=S.call(n.linkSets,e);if(n.linkSets.splice(c,1),0==n.linkSets.length){var f=S.call(e.loader.loads,n);-1!=f&&e.loader.loads.splice(f,1)}}e.reject(r)}function g(e,t){if(e.loaderObj.trace){e.loaderObj.loads||(e.loaderObj.loads={});var n={};t.dependencies.forEach(function(e){n[e.key]=e.value}),e.loaderObj.loads[t.name]={name:t.name,deps:t.dependencies.map(function(e){return e.key}),depMap:n,address:t.address,metadata:t.metadata,source:t.source,kind:t.isDeclarative?"declarative":"dynamic"}}t.name&&(e.modules[t.name]=t.module);var r=S.call(e.loads,t);-1!=r&&e.loads.splice(r,1);for(var a=0,o=t.linkSets.length;o>a;a++)r=S.call(t.linkSets[a].loads,t),-1!=r&&t.linkSets[a].loads.splice(r,1);t.linkSets.splice(0,t.linkSets.length)}function y(e,t,n){try{var a=t.execute()}catch(o){return void n(t,o)}return a&&a instanceof r?a:void n(t,new TypeError("Execution must define a Module instance"))}function b(e,t,n){var r=e._loader.importPromises;return r[t]=n.then(function(e){return r[t]=void 0,e},function(e){throw r[t]=void 0,e})}function w(e,t){var n=e.loader;if(e.loads.length)for(var r=e.loads.concat([]),a=0;a<r.length;a++){var o=r[a],i=y(e,o,t);if(!i)return;o.module={name:o.name,module:i},o.status="linked",g(n,o)}}function E(e,t){return t.module.module}function _(){}function O(){throw new TypeError("ES6 transpilation is only provided in the dev module loader build.")}var j=0;a.prototype={constructor:a,define:function(e,t,n){if(this._loader.importPromises[e])throw new TypeError("Module is already loading.");return b(this,e,new Promise(c({step:"translate",loader:this._loader,moduleName:e,moduleMetadata:n&&n.metadata||{},moduleSource:t,moduleAddress:n&&n.address})))},"delete":function(e){var t=this._loader;return delete t.importPromises[e],delete t.moduleRecords[e],t.modules[e]?delete t.modules[e]:!1},get:function(e){return this._loader.modules[e]?(_(this._loader.modules[e],[],this),this._loader.modules[e].module):void 0},has:function(e){return!!this._loader.modules[e]},"import":function(e,t,n){"object"==typeof t&&(t=t.name);var r=this;return Promise.resolve(r.normalize(e,t)).then(function(e){var t=r._loader;return t.modules[e]?(_(t.modules[e],[],t._loader),t.modules[e].module):t.importPromises[e]||b(r,e,i(t,e,{}).then(function(n){return delete t.importPromises[e],E(t,n)}))})},load:function(e){var t=this._loader;return t.modules[e]?Promise.resolve():t.importPromises[e]||b(this,e,new Promise(c({step:"locate",loader:t,moduleName:e,moduleMetadata:{},moduleSource:void 0,moduleAddress:void 0})).then(function(){delete t.importPromises[e]}))},module:function(e,t){var n=o();n.address=t&&t.address;var r=f(this._loader,n),a=Promise.resolve(e),i=this._loader,s=r.done.then(function(){return E(i,n)});return u(i,n,a),s},newModule:function(e){if("object"!=typeof e)throw new TypeError("Expected object");var t=new r,n=[];if(Object.getOwnPropertyNames&&null!=e)n=Object.getOwnPropertyNames(e);else for(var a in e)n.push(a);for(var o=0;o<n.length;o++)(function(n){x(t,n,{configurable:!1,enumerable:!0,get:function(){return e[n]},set:function(){throw new Error("Module exports cannot be changed externally.")}})})(n[o]);return Object.freeze&&Object.freeze(t),t},set:function(e,t){if(!(t instanceof r))throw new TypeError("Loader.set("+e+", module) must be a module");this._loader.modules[e]={module:t}},normalize:function(e,t,n){return e},locate:function(e){return e.name},fetch:function(e){},translate:function(e){return e.source},instantiate:function(e){}};var P=a.prototype.newModule}();var k;s.prototype=a.prototype,o.prototype=new s;var R=/^([^\/]+:\/\/|\/)/;o.prototype.normalize=function(e,t,n){return e=e.match(R)||"."==e[0]?new P(e,t||E).href:new P(i(this.paths,e)||e,E).href},o.prototype.locate=function(e){return e.name},o.prototype.instantiate=function(t){var r=this;return Promise.resolve(r.normalize(r.transpiler)).then(function(a){return t.address===a?{deps:[],execute:function(){var a=e.System,o=e.Reflect.Loader;return n("(function(require,exports,module){"+t.source+"})();",t.address,e),e.System=a,e.Reflect.Loader=o,r.newModule({"default":e[r.transpiler],__useDefault:!0})}}:void 0})},l.prototype=o.prototype,d.prototype=new l,d.prototype.constructor=d,d.prototype.instantiate=function(){};var M,I=!0;try{Object.getOwnPropertyDescriptor({a:0},"a")}catch(j){I=!1}!function(){function t(){if(i&&"interactive"===i.script.readyState)return i.load;for(var e=0;e<l.length;e++)if("interactive"==l[e].script.readyState)return i=l[e],i.load}function n(e,t){return new Promise(function(e,n){t.metadata.integrity&&n(new Error("Subresource integrity checking is not supported in web workers.")),s=t;try{importScripts(t.address)}catch(r){s=null,n(r)}s=null,t.metadata.entry||n(new Error(t.address+" did not call System.register or AMD define")),e("")})}if("undefined"!=typeof document)var r=document.getElementsByTagName("head")[0];var a,o,i,s=null,d=r&&function(){var e=document.createElement("script"),t="undefined"!=typeof opera&&"[object Opera]"===opera.toString();return e.attachEvent&&!(e.attachEvent.toString&&e.attachEvent.toString().indexOf("[native code")<0)&&!t}(),l=[],c=0,f=[];u("pushRegister_",function(e){return function(n){return e.call(this,n)?!1:(s?this.reduceRegister_(s,n):d?this.reduceRegister_(t(),n):c?f.push(n):this.reduceRegister_(null,n),!0)}}),u("fetch",function(t){return function(s){var u=this;return"json"!=s.metadata.format&&s.metadata.scriptLoad&&(b||y)?y?n(u,s):new Promise(function(t,n){function m(e){if(!v.readyState||"loaded"==v.readyState||"complete"==v.readyState){if(c--,s.metadata.entry||f.length){if(!d){for(var r=0;r<f.length;r++)u.reduceRegister_(s,f[r]);f=[]}}else u.reduceRegister_(s);h(),s.metadata.entry||s.metadata.bundle||n(new Error(s.name+" did not call System.register or AMD define. If loading a global module configure the global name via the meta exports property for script injection support.")),t("")}}function p(e){h(),n(new Error("Unable to load script "+s.address))}function h(){if(e.System=a,e.require=o,v.detachEvent){v.detachEvent("onreadystatechange",m);for(var t=0;t<l.length;t++)l[t].script==v&&(i&&i.script==v&&(i=null),l.splice(t,1))}else v.removeEventListener("load",m,!1),v.removeEventListener("error",p,!1);r.removeChild(v)}var v=document.createElement("script");v.async=!0,s.metadata.crossOrigin&&(v.crossOrigin=s.metadata.crossOrigin),s.metadata.integrity&&v.setAttribute("integrity",s.metadata.integrity),d?(v.attachEvent("onreadystatechange",m),l.push({script:v,load:s})):(v.addEventListener("load",m,!1),v.addEventListener("error",p,!1)),c++,a=e.System,o=e.require,v.src=s.address,r.appendChild(v)}):t.call(this,s)}})}();var D=/^(\s*\/\*[^\*]*(\*(?!\/)[^\*]*)*\*\/|\s*\/\/[^\n]*|\s*"[^"]+"\s*;?|\s*'[^']+'\s*;?)*\s*/;!function(){function t(e,n,r){if(r[e.groupIndex]=r[e.groupIndex]||[],-1==S.call(r[e.groupIndex],e)){r[e.groupIndex].push(e);for(var a=0,o=e.normalizedDeps.length;o>a;a++){var i=e.normalizedDeps[a],s=n.defined[i];if(s&&!s.evaluated){var d=e.groupIndex+(s.declarative!=e.declarative);if(null===s.groupIndex||s.groupIndex<d){if(null!==s.groupIndex&&(r[s.groupIndex].splice(S.call(r[s.groupIndex],s),1),0==r[s.groupIndex].length))throw new Error("Mixed dependency cycle detected");s.groupIndex=d}t(s,n,r)}}}}function n(e,n){var r=n.defined[e];if(!r.module){r.groupIndex=0;var a=[];t(r,n,a);for(var o=!!r.declarative==a.length%2,s=a.length-1;s>=0;s--){for(var d=a[s],u=0;u<d.length;u++){var c=d[u];o?i(c,n):l(c,n)}o=!o}}}function a(){}function o(e,t){return t[e]||(t[e]={name:e,dependencies:[],exports:new a,importers:[]})}function i(t,n){if(!t.module){var r=n._loader.moduleRecords,a=t.module=o(t.name,r),s=t.module.exports,d=t.declare.call(e,function(e,t){if(a.locked=!0,"object"==typeof e)for(var n in e)s[n]=e[n];else s[e]=t;for(var r=0,o=a.importers.length;o>r;r++){var i=a.importers[r];if(!i.locked){var d=S.call(i.dependencies,a);i.setters[d](s)}}return a.locked=!1,t},{id:t.name});if(a.setters=d.setters,a.execute=d.execute,!a.setters||!a.execute)throw new TypeError("Invalid System.register form for "+t.name);for(var l=0,u=t.normalizedDeps.length;u>l;l++){var c,f=t.normalizedDeps[l],m=n.defined[f],p=r[f];p?c=p.exports:m&&!m.declarative?c=m.esModule:m?(i(m,n),p=m.module,c=p.exports):c=n.get(f),p&&p.importers?(p.importers.push(a),a.dependencies.push(p)):a.dependencies.push(null);for(var h=t.originalIndices[l],v=0,g=h.length;g>v;++v){var y=h[v];a.setters[y]&&a.setters[y](c)}}}}function s(e,t){var n,r=t.defined[e];if(r)r.declarative?p(e,[],t):r.evaluated||l(r,t),n=r.module.exports;else if(n=t.get(e),!n)throw new Error("Unable to load dependency "+e+".");return(!r||r.declarative)&&n&&n.__useDefault?n["default"]:n}function l(t,n){if(!t.module){var a={},o=t.module={exports:a,id:t.name};if(!t.executingRequire)for(var i=0,d=t.normalizedDeps.length;d>i;i++){var u=t.normalizedDeps[i],c=n.defined[u];c&&l(c,n)}t.evaluated=!0;var f=t.execute.call(e,function(e){for(var r=0,a=t.deps.length;a>r;r++)if(t.deps[r]==e)return s(t.normalizedDeps[r],n);var o=n.normalizeSync(e,t.name);if(-1!=S.call(t.normalizedDeps,o))return s(o,n);throw new Error("Module "+e+" not declared as a dependency of "+t.name)},a,o);f&&(o.exports=f),a=o.exports,a&&(a.__esModule||a instanceof r)?t.esModule=a:t.esmExports&&a!==e?t.esModule=m(a):t.esModule={"default":a}}}function p(t,n,r){var a=r.defined[t];if(a&&!a.evaluated&&a.declarative){n.push(t);for(var o=0,i=a.normalizedDeps.length;i>o;o++){var s=a.normalizedDeps[o];-1==S.call(n,s)&&(r.defined[s]?p(s,n,r):r.get(s))}a.evaluated||(a.evaluated=!0,a.module.execute.call(e))}}d.prototype.register=function(e,t,n){if("string"!=typeof e&&(n=t,t=e,e=null),"boolean"==typeof n)return this.registerDynamic.apply(this,arguments);var r=g();r.name=e&&(this.decanonicalize||this.normalize).call(this,e),r.declarative=!0,r.deps=t,r.declare=n,this.pushRegister_({amd:!1,entry:r})},d.prototype.registerDynamic=function(e,t,n,r){"string"!=typeof e&&(r=n,n=t,t=e,e=null);var a=g();a.name=e&&(this.decanonicalize||this.normalize).call(this,e),a.deps=t,a.execute=r,a.executingRequire=n,this.pushRegister_({amd:!1,entry:a})},u("reduceRegister_",function(){return function(e,t){if(t){var n=t.entry,r=e&&e.metadata;if(n.name&&(n.name in this.defined||(this.defined[n.name]=n),r&&(r.bundle=!0)),!n.name||e&&n.name==e.name){if(!r)throw new TypeError("Invalid System.register call. Anonymous System.register calls can only be made by modules loaded by SystemJS.import and not via script tags.");if(r.entry)throw"register"==r.format?new Error("Multiple anonymous System.register calls in module "+e.name+". If loading a bundle, ensure all the System.register calls are named."):new Error("Module "+e.name+" interpreted as "+r.format+" module format, but called System.register.");r.format||(r.format="register"),r.entry=n}}}}),c(function(e){return function(){e.call(this),this.defined={},this._loader.moduleRecords={}}}),x(a,"toString",{value:function(){return"Module"}}),u("delete",function(e){return function(t){return delete this._loader.moduleRecords[t],delete this.defined[t],e.call(this,t)}}),u("fetch",function(e){return function(t){return this.defined[t.name]?(t.metadata.format="defined",""):(t.metadata.deps=t.metadata.deps||[],e.call(this,t))}}),u("translate",function(e){return function(t){return t.metadata.deps=t.metadata.deps||[],Promise.resolve(e.call(this,t)).then(function(e){return("register"==t.metadata.format||!t.metadata.format&&v(t.source))&&(t.metadata.format="register"),e})}}),u("instantiate",function(e){return function(t){"detect"==t.metadata.format&&(t.metadata.format=void 0),e.call(this,t);var r,a=this;if(a.defined[t.name])r=a.defined[t.name],r.declarative||(r.deps=r.deps.concat(t.metadata.deps));else if(t.metadata.entry)r=t.metadata.entry,r.deps=r.deps.concat(t.metadata.deps);else if(!(a.builder&&t.metadata.bundle||"register"!=t.metadata.format&&"esm"!=t.metadata.format&&"es6"!=t.metadata.format)){if("undefined"!=typeof __exec&&__exec.call(a,t),!t.metadata.entry&&!t.metadata.bundle)throw new Error(t.name+" detected as "+t.metadata.format+" but didn't execute.");r=t.metadata.entry,r&&t.metadata.deps&&(r.deps=r.deps.concat(t.metadata.deps))}r||(r=g(),r.deps=t.metadata.deps,r.execute=function(){}),a.defined[t.name]=r;var o=f(r.deps);r.deps=o.names,r.originalIndices=o.indices,r.name=t.name,r.esmExports=t.metadata.esmExports!==!1;for(var i=[],s=0,d=r.deps.length;d>s;s++)i.push(Promise.resolve(a.normalize(r.deps[s],t.name)));return Promise.all(i).then(function(e){return r.normalizedDeps=e,{deps:r.deps,execute:function(){return n(t.name,a),p(t.name,[],a),a.defined[t.name]=void 0,a.newModule(r.declarative?r.module.exports:r.esModule)}}})}})}(),function(){c(function(e){return function(){e.call(this),this.bundles={},this._loader.loadedBundles={}}}),u("locate",function(e){return function(t){var n=this,r=!1;if(!(t.name in n.defined))for(var a in n.bundles){for(var o=0;o<n.bundles[a].length;o++){var i=n.bundles[a][o];if(i==t.name){r=!0;break}if(-1!=i.indexOf("*")){var s=i.split("*");if(2!=s.length){n.bundles[a].splice(o--,1);continue}if(t.name.substring(0,s[0].length)==s[0]&&t.name.substr(t.name.length-s[1].length,s[1].length)==s[1]&&-1==t.name.substr(s[0].length,t.name.length-s[1].length-s[0].length).indexOf("/")){r=!0;break}}}if(r)return n["import"](a).then(function(){return e.call(n,t)})}return e.call(n,t)}})}(),c(function(t){return function(){t.apply(this,arguments),e.define=this.amdDefine}}),u("fetch",function(e){return function(t){return t.metadata.scriptLoad=!0,e.call(this,t)}}),k=new d,e.SystemJS=k,k.version="0.19.26 Register Only","object"==typeof exports&&(module.exports=a),e.Reflect=e.Reflect||{},e.Reflect.Loader=e.Reflect.Loader||a,e.Reflect.global=e.Reflect.global||e,e.LoaderPolyfill=a,k||(k=new o,k.constructor=o),"object"==typeof exports&&(module.exports=k),e.System=k}("undefined"!=typeof self?self:global);
//# sourceMappingURL=system-register-only.js.map
