// Compiled by ClojureScript 1.10.520 {}
goog.provide('util.core');
goog.require('cljs.core');
util.core.by_id = (function util$core$by_id(id){
return document.getElementById(id);
});
util.core.get_value = (function util$core$get_value(id){
return util.core.by_id.call(null,id).value;
});

//# sourceMappingURL=core.js.map?rel=1581817996311
