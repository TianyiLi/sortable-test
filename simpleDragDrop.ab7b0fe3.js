parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"t74H":[function(require,module,exports) {
function e(e){return r(e)||t(e)||a(e)||n()}function n(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function a(e,n){if(e){if("string"==typeof e)return o(e,n);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?o(e,n):void 0}}function t(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function r(e){if(Array.isArray(e))return o(e)}function o(e,n){(null==n||n>e.length)&&(n=e.length);for(var a=0,t=new Array(n);a<n;a++)t[a]=e[a];return t}var c=Array.from({length:20},function(e,n){return{name:n,value:"".concat(n),enabled:!!(n%2)}});function u(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$("#sort-list"),a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:$("#enabled-fields"),t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:c,r=new Map(c.map(function(e){return[e.value,e]})),o=function(e){var n=e.name,t=e.value,r=$('<div data-value="'.concat(t,'" class="col">').concat(n,"</div>")),o=$('<i class="fa fa-times cancel" data-value="'.concat(t,'" aria-hidden="true"></i>'));return o.click(function(e){u({target:a.find('[data-value="'.concat(t,'"]'))[0]})}),r.append(o),r};function u(e){var a=$(e.target),t=a.attr("data-value"),c=r.get(t);c.enabled?(a.removeClass("checked"),n.find('[data-value="'.concat(t,'"]')).remove()):(a.addClass("checked"),n.append(o(c))),c.enabled=!c.enabled}var i=function(e){var n=e.name,a=e.value,t=e.enabled,r=$('<div data-value="'.concat(a,'" class="select ').concat(t?"checked":"",'">').concat(n,"</div>"));return r.click(u),r},l=t.filter(function(e){return e.enabled}).map(function(e){var n=e.value,a=e.name;return o({value:n,name:a})}),d=t.map(function(e){return i(e)});return l.forEach(function(e){return n.append(e)}),d.forEach(function(e){return a.append(e)}),n.sortable({ghostClass:"col-ghost"}),{getValue:function(){return e(r).filter(function(e){return e[1].enabled}).map(function(e){return e[1].value})},addOption:function(e){var t=e.name,c=e.value;return!r.has(c)&&(r.set(c,{name:t,enabled:!0,value:c}),n.append(o({name:t,value:c})),a.append(i({name:t,value:c,enabled:!0})),!0)},removeOption:function(e){var t=r.get(e);return!!t&&(t.enabled&&a.find('[data-value="'.concat(t.value,'"]')).remove(),n.find('[data-value="'.concat(t.value,'"]')).remove(),r.delete(e),!0)}}}window.initializeSimpleDragDrop=u;
},{}]},{},["t74H"], null)
//# sourceMappingURL=simpleDragDrop.ab7b0fe3.js.map