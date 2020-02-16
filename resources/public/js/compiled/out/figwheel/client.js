// Compiled by ClojureScript 1.10.520 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.19";
figwheel.client.js_stringify = (((((typeof JSON !== 'undefined')) && ((!((JSON.stringify == null))))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return cljs.core.str.cljs$core$IFn$_invoke$arity$1(x);
}catch (e30295){if((e30295 instanceof Error)){
var e = e30295;
return "Error: Unable to stringify";
} else {
throw e30295;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__30298 = arguments.length;
switch (G__30298) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__30296_SHARP_){
if(typeof p1__30296_SHARP_ === 'string'){
return p1__30296_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__30296_SHARP_);
}
}),args)], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__4736__auto__ = [];
var len__4730__auto___30301 = arguments.length;
var i__4731__auto___30302 = (0);
while(true){
if((i__4731__auto___30302 < len__4730__auto___30301)){
args__4736__auto__.push((arguments[i__4731__auto___30302]));

var G__30303 = (i__4731__auto___30302 + (1));
i__4731__auto___30302 = G__30303;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq30300){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30300));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4736__auto__ = [];
var len__4730__auto___30305 = arguments.length;
var i__4731__auto___30306 = (0);
while(true){
if((i__4731__auto___30306 < len__4730__auto___30305)){
args__4736__auto__.push((arguments[i__4731__auto___30306]));

var G__30307 = (i__4731__auto___30306 + (1));
i__4731__auto___30306 = G__30307;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq30304){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30304));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),"Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",(cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF")].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method.
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 * 
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__30308){
var map__30309 = p__30308;
var map__30309__$1 = (((((!((map__30309 == null))))?(((((map__30309.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30309.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30309):map__30309);
var message = cljs.core.get.call(null,map__30309__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__30309__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__4131__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__4120__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__4120__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__4120__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return ((cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts))));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__22259__auto___30388 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22259__auto___30388,ch){
return (function (){
var f__22260__auto__ = (function (){var switch__22236__auto__ = ((function (c__22259__auto___30388,ch){
return (function (state_30360){
var state_val_30361 = (state_30360[(1)]);
if((state_val_30361 === (7))){
var inst_30356 = (state_30360[(2)]);
var state_30360__$1 = state_30360;
var statearr_30362_30389 = state_30360__$1;
(statearr_30362_30389[(2)] = inst_30356);

(statearr_30362_30389[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30361 === (1))){
var state_30360__$1 = state_30360;
var statearr_30363_30390 = state_30360__$1;
(statearr_30363_30390[(2)] = null);

(statearr_30363_30390[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30361 === (4))){
var inst_30313 = (state_30360[(7)]);
var inst_30313__$1 = (state_30360[(2)]);
var state_30360__$1 = (function (){var statearr_30364 = state_30360;
(statearr_30364[(7)] = inst_30313__$1);

return statearr_30364;
})();
if(cljs.core.truth_(inst_30313__$1)){
var statearr_30365_30391 = state_30360__$1;
(statearr_30365_30391[(1)] = (5));

} else {
var statearr_30366_30392 = state_30360__$1;
(statearr_30366_30392[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30361 === (15))){
var inst_30320 = (state_30360[(8)]);
var inst_30335 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_30320);
var inst_30336 = cljs.core.first.call(null,inst_30335);
var inst_30337 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_30336);
var inst_30338 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_30337)].join('');
var inst_30339 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_30338);
var state_30360__$1 = state_30360;
var statearr_30367_30393 = state_30360__$1;
(statearr_30367_30393[(2)] = inst_30339);

(statearr_30367_30393[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30361 === (13))){
var inst_30344 = (state_30360[(2)]);
var state_30360__$1 = state_30360;
var statearr_30368_30394 = state_30360__$1;
(statearr_30368_30394[(2)] = inst_30344);

(statearr_30368_30394[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30361 === (6))){
var state_30360__$1 = state_30360;
var statearr_30369_30395 = state_30360__$1;
(statearr_30369_30395[(2)] = null);

(statearr_30369_30395[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30361 === (17))){
var inst_30342 = (state_30360[(2)]);
var state_30360__$1 = state_30360;
var statearr_30370_30396 = state_30360__$1;
(statearr_30370_30396[(2)] = inst_30342);

(statearr_30370_30396[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30361 === (3))){
var inst_30358 = (state_30360[(2)]);
var state_30360__$1 = state_30360;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30360__$1,inst_30358);
} else {
if((state_val_30361 === (12))){
var inst_30319 = (state_30360[(9)]);
var inst_30333 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_30319,opts);
var state_30360__$1 = state_30360;
if(inst_30333){
var statearr_30371_30397 = state_30360__$1;
(statearr_30371_30397[(1)] = (15));

} else {
var statearr_30372_30398 = state_30360__$1;
(statearr_30372_30398[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30361 === (2))){
var state_30360__$1 = state_30360;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30360__$1,(4),ch);
} else {
if((state_val_30361 === (11))){
var inst_30320 = (state_30360[(8)]);
var inst_30325 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30326 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_30320);
var inst_30327 = cljs.core.async.timeout.call(null,(1000));
var inst_30328 = [inst_30326,inst_30327];
var inst_30329 = (new cljs.core.PersistentVector(null,2,(5),inst_30325,inst_30328,null));
var state_30360__$1 = state_30360;
return cljs.core.async.ioc_alts_BANG_.call(null,state_30360__$1,(14),inst_30329);
} else {
if((state_val_30361 === (9))){
var inst_30320 = (state_30360[(8)]);
var inst_30346 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_30347 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_30320);
var inst_30348 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_30347);
var inst_30349 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_30348)].join('');
var inst_30350 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_30349);
var state_30360__$1 = (function (){var statearr_30373 = state_30360;
(statearr_30373[(10)] = inst_30346);

return statearr_30373;
})();
var statearr_30374_30399 = state_30360__$1;
(statearr_30374_30399[(2)] = inst_30350);

(statearr_30374_30399[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30361 === (5))){
var inst_30313 = (state_30360[(7)]);
var inst_30315 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_30316 = (new cljs.core.PersistentArrayMap(null,2,inst_30315,null));
var inst_30317 = (new cljs.core.PersistentHashSet(null,inst_30316,null));
var inst_30318 = figwheel.client.focus_msgs.call(null,inst_30317,inst_30313);
var inst_30319 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_30318);
var inst_30320 = cljs.core.first.call(null,inst_30318);
var inst_30321 = figwheel.client.autoload_QMARK_.call(null);
var state_30360__$1 = (function (){var statearr_30375 = state_30360;
(statearr_30375[(8)] = inst_30320);

(statearr_30375[(9)] = inst_30319);

return statearr_30375;
})();
if(cljs.core.truth_(inst_30321)){
var statearr_30376_30400 = state_30360__$1;
(statearr_30376_30400[(1)] = (8));

} else {
var statearr_30377_30401 = state_30360__$1;
(statearr_30377_30401[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30361 === (14))){
var inst_30331 = (state_30360[(2)]);
var state_30360__$1 = state_30360;
var statearr_30378_30402 = state_30360__$1;
(statearr_30378_30402[(2)] = inst_30331);

(statearr_30378_30402[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30361 === (16))){
var state_30360__$1 = state_30360;
var statearr_30379_30403 = state_30360__$1;
(statearr_30379_30403[(2)] = null);

(statearr_30379_30403[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30361 === (10))){
var inst_30352 = (state_30360[(2)]);
var state_30360__$1 = (function (){var statearr_30380 = state_30360;
(statearr_30380[(11)] = inst_30352);

return statearr_30380;
})();
var statearr_30381_30404 = state_30360__$1;
(statearr_30381_30404[(2)] = null);

(statearr_30381_30404[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30361 === (8))){
var inst_30319 = (state_30360[(9)]);
var inst_30323 = figwheel.client.reload_file_state_QMARK_.call(null,inst_30319,opts);
var state_30360__$1 = state_30360;
if(cljs.core.truth_(inst_30323)){
var statearr_30382_30405 = state_30360__$1;
(statearr_30382_30405[(1)] = (11));

} else {
var statearr_30383_30406 = state_30360__$1;
(statearr_30383_30406[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__22259__auto___30388,ch))
;
return ((function (switch__22236__auto__,c__22259__auto___30388,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__22237__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__22237__auto____0 = (function (){
var statearr_30384 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30384[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__22237__auto__);

(statearr_30384[(1)] = (1));

return statearr_30384;
});
var figwheel$client$file_reloader_plugin_$_state_machine__22237__auto____1 = (function (state_30360){
while(true){
var ret_value__22238__auto__ = (function (){try{while(true){
var result__22239__auto__ = switch__22236__auto__.call(null,state_30360);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22239__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22239__auto__;
}
break;
}
}catch (e30385){if((e30385 instanceof Object)){
var ex__22240__auto__ = e30385;
var statearr_30386_30407 = state_30360;
(statearr_30386_30407[(5)] = ex__22240__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30360);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30385;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22238__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30408 = state_30360;
state_30360 = G__30408;
continue;
} else {
return ret_value__22238__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__22237__auto__ = function(state_30360){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__22237__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__22237__auto____1.call(this,state_30360);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__22237__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__22237__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__22237__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__22237__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__22237__auto__;
})()
;})(switch__22236__auto__,c__22259__auto___30388,ch))
})();
var state__22261__auto__ = (function (){var statearr_30387 = f__22260__auto__.call(null);
(statearr_30387[(6)] = c__22259__auto___30388);

return statearr_30387;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22261__auto__);
});})(c__22259__auto___30388,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__30409_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__30409_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(figwheel.client.utils.node_env_QMARK_.call(null)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_30415 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_30415){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__30411 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__30412 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__30413 = true;
var _STAR_print_fn_STAR__temp_val__30414 = ((function (_STAR_print_newline_STAR__orig_val__30411,_STAR_print_fn_STAR__orig_val__30412,_STAR_print_newline_STAR__temp_val__30413,sb,base_path_30415){
return (function (x){
return sb.append(x);
});})(_STAR_print_newline_STAR__orig_val__30411,_STAR_print_fn_STAR__orig_val__30412,_STAR_print_newline_STAR__temp_val__30413,sb,base_path_30415))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__30413;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__30414;

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
var result_value__$1 = (((!(typeof result_value === 'string')))?cljs.core.pr_str.call(null,result_value):result_value);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value__$1], null));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__30412;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__30411;
}}catch (e30410){if((e30410 instanceof Error)){
var e = e30410;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_30415], null));
} else {
var e = e30410;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_30415))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__30416){
var map__30417 = p__30416;
var map__30417__$1 = (((((!((map__30417 == null))))?(((((map__30417.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30417.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30417):map__30417);
var opts = map__30417__$1;
var build_id = cljs.core.get.call(null,map__30417__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__30417,map__30417__$1,opts,build_id){
return (function (p__30419){
var vec__30420 = p__30419;
var seq__30421 = cljs.core.seq.call(null,vec__30420);
var first__30422 = cljs.core.first.call(null,seq__30421);
var seq__30421__$1 = cljs.core.next.call(null,seq__30421);
var map__30423 = first__30422;
var map__30423__$1 = (((((!((map__30423 == null))))?(((((map__30423.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30423.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30423):map__30423);
var msg = map__30423__$1;
var msg_name = cljs.core.get.call(null,map__30423__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__30421__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__30420,seq__30421,first__30422,seq__30421__$1,map__30423,map__30423__$1,msg,msg_name,_,map__30417,map__30417__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__30420,seq__30421,first__30422,seq__30421__$1,map__30423,map__30423__$1,msg,msg_name,_,map__30417,map__30417__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__30417,map__30417__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__30425){
var vec__30426 = p__30425;
var seq__30427 = cljs.core.seq.call(null,vec__30426);
var first__30428 = cljs.core.first.call(null,seq__30427);
var seq__30427__$1 = cljs.core.next.call(null,seq__30427);
var map__30429 = first__30428;
var map__30429__$1 = (((((!((map__30429 == null))))?(((((map__30429.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30429.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30429):map__30429);
var msg = map__30429__$1;
var msg_name = cljs.core.get.call(null,map__30429__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__30427__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__30431){
var map__30432 = p__30431;
var map__30432__$1 = (((((!((map__30432 == null))))?(((((map__30432.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30432.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30432):map__30432);
var on_compile_warning = cljs.core.get.call(null,map__30432__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__30432__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__30432,map__30432__$1,on_compile_warning,on_compile_fail){
return (function (p__30434){
var vec__30435 = p__30434;
var seq__30436 = cljs.core.seq.call(null,vec__30435);
var first__30437 = cljs.core.first.call(null,seq__30436);
var seq__30436__$1 = cljs.core.next.call(null,seq__30436);
var map__30438 = first__30437;
var map__30438__$1 = (((((!((map__30438 == null))))?(((((map__30438.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30438.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30438):map__30438);
var msg = map__30438__$1;
var msg_name = cljs.core.get.call(null,map__30438__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__30436__$1;
var pred__30440 = cljs.core._EQ_;
var expr__30441 = msg_name;
if(cljs.core.truth_(pred__30440.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__30441))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__30440.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__30441))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__30432,map__30432__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__22259__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22259__auto__,msg_hist,msg_names,msg){
return (function (){
var f__22260__auto__ = (function (){var switch__22236__auto__ = ((function (c__22259__auto__,msg_hist,msg_names,msg){
return (function (state_30530){
var state_val_30531 = (state_30530[(1)]);
if((state_val_30531 === (7))){
var inst_30450 = (state_30530[(2)]);
var state_30530__$1 = state_30530;
if(cljs.core.truth_(inst_30450)){
var statearr_30532_30579 = state_30530__$1;
(statearr_30532_30579[(1)] = (8));

} else {
var statearr_30533_30580 = state_30530__$1;
(statearr_30533_30580[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30531 === (20))){
var inst_30524 = (state_30530[(2)]);
var state_30530__$1 = state_30530;
var statearr_30534_30581 = state_30530__$1;
(statearr_30534_30581[(2)] = inst_30524);

(statearr_30534_30581[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30531 === (27))){
var inst_30520 = (state_30530[(2)]);
var state_30530__$1 = state_30530;
var statearr_30535_30582 = state_30530__$1;
(statearr_30535_30582[(2)] = inst_30520);

(statearr_30535_30582[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30531 === (1))){
var inst_30443 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_30530__$1 = state_30530;
if(cljs.core.truth_(inst_30443)){
var statearr_30536_30583 = state_30530__$1;
(statearr_30536_30583[(1)] = (2));

} else {
var statearr_30537_30584 = state_30530__$1;
(statearr_30537_30584[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30531 === (24))){
var inst_30522 = (state_30530[(2)]);
var state_30530__$1 = state_30530;
var statearr_30538_30585 = state_30530__$1;
(statearr_30538_30585[(2)] = inst_30522);

(statearr_30538_30585[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30531 === (4))){
var inst_30528 = (state_30530[(2)]);
var state_30530__$1 = state_30530;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30530__$1,inst_30528);
} else {
if((state_val_30531 === (15))){
var inst_30526 = (state_30530[(2)]);
var state_30530__$1 = state_30530;
var statearr_30539_30586 = state_30530__$1;
(statearr_30539_30586[(2)] = inst_30526);

(statearr_30539_30586[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30531 === (21))){
var inst_30479 = (state_30530[(2)]);
var inst_30480 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30481 = figwheel.client.auto_jump_to_error.call(null,opts,inst_30480);
var state_30530__$1 = (function (){var statearr_30540 = state_30530;
(statearr_30540[(7)] = inst_30479);

return statearr_30540;
})();
var statearr_30541_30587 = state_30530__$1;
(statearr_30541_30587[(2)] = inst_30481);

(statearr_30541_30587[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30531 === (31))){
var inst_30509 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_30530__$1 = state_30530;
if(inst_30509){
var statearr_30542_30588 = state_30530__$1;
(statearr_30542_30588[(1)] = (34));

} else {
var statearr_30543_30589 = state_30530__$1;
(statearr_30543_30589[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30531 === (32))){
var inst_30518 = (state_30530[(2)]);
var state_30530__$1 = state_30530;
var statearr_30544_30590 = state_30530__$1;
(statearr_30544_30590[(2)] = inst_30518);

(statearr_30544_30590[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30531 === (33))){
var inst_30505 = (state_30530[(2)]);
var inst_30506 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30507 = figwheel.client.auto_jump_to_error.call(null,opts,inst_30506);
var state_30530__$1 = (function (){var statearr_30545 = state_30530;
(statearr_30545[(8)] = inst_30505);

return statearr_30545;
})();
var statearr_30546_30591 = state_30530__$1;
(statearr_30546_30591[(2)] = inst_30507);

(statearr_30546_30591[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30531 === (13))){
var inst_30464 = figwheel.client.heads_up.clear.call(null);
var state_30530__$1 = state_30530;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30530__$1,(16),inst_30464);
} else {
if((state_val_30531 === (22))){
var inst_30485 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30486 = figwheel.client.heads_up.append_warning_message.call(null,inst_30485);
var state_30530__$1 = state_30530;
var statearr_30547_30592 = state_30530__$1;
(statearr_30547_30592[(2)] = inst_30486);

(statearr_30547_30592[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30531 === (36))){
var inst_30516 = (state_30530[(2)]);
var state_30530__$1 = state_30530;
var statearr_30548_30593 = state_30530__$1;
(statearr_30548_30593[(2)] = inst_30516);

(statearr_30548_30593[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30531 === (29))){
var inst_30496 = (state_30530[(2)]);
var inst_30497 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30498 = figwheel.client.auto_jump_to_error.call(null,opts,inst_30497);
var state_30530__$1 = (function (){var statearr_30549 = state_30530;
(statearr_30549[(9)] = inst_30496);

return statearr_30549;
})();
var statearr_30550_30594 = state_30530__$1;
(statearr_30550_30594[(2)] = inst_30498);

(statearr_30550_30594[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30531 === (6))){
var inst_30445 = (state_30530[(10)]);
var state_30530__$1 = state_30530;
var statearr_30551_30595 = state_30530__$1;
(statearr_30551_30595[(2)] = inst_30445);

(statearr_30551_30595[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30531 === (28))){
var inst_30492 = (state_30530[(2)]);
var inst_30493 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30494 = figwheel.client.heads_up.display_warning.call(null,inst_30493);
var state_30530__$1 = (function (){var statearr_30552 = state_30530;
(statearr_30552[(11)] = inst_30492);

return statearr_30552;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30530__$1,(29),inst_30494);
} else {
if((state_val_30531 === (25))){
var inst_30490 = figwheel.client.heads_up.clear.call(null);
var state_30530__$1 = state_30530;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30530__$1,(28),inst_30490);
} else {
if((state_val_30531 === (34))){
var inst_30511 = figwheel.client.heads_up.flash_loaded.call(null);
var state_30530__$1 = state_30530;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30530__$1,(37),inst_30511);
} else {
if((state_val_30531 === (17))){
var inst_30470 = (state_30530[(2)]);
var inst_30471 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30472 = figwheel.client.auto_jump_to_error.call(null,opts,inst_30471);
var state_30530__$1 = (function (){var statearr_30553 = state_30530;
(statearr_30553[(12)] = inst_30470);

return statearr_30553;
})();
var statearr_30554_30596 = state_30530__$1;
(statearr_30554_30596[(2)] = inst_30472);

(statearr_30554_30596[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30531 === (3))){
var inst_30462 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_30530__$1 = state_30530;
if(inst_30462){
var statearr_30555_30597 = state_30530__$1;
(statearr_30555_30597[(1)] = (13));

} else {
var statearr_30556_30598 = state_30530__$1;
(statearr_30556_30598[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30531 === (12))){
var inst_30458 = (state_30530[(2)]);
var state_30530__$1 = state_30530;
var statearr_30557_30599 = state_30530__$1;
(statearr_30557_30599[(2)] = inst_30458);

(statearr_30557_30599[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30531 === (2))){
var inst_30445 = (state_30530[(10)]);
var inst_30445__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_30530__$1 = (function (){var statearr_30558 = state_30530;
(statearr_30558[(10)] = inst_30445__$1);

return statearr_30558;
})();
if(cljs.core.truth_(inst_30445__$1)){
var statearr_30559_30600 = state_30530__$1;
(statearr_30559_30600[(1)] = (5));

} else {
var statearr_30560_30601 = state_30530__$1;
(statearr_30560_30601[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30531 === (23))){
var inst_30488 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_30530__$1 = state_30530;
if(inst_30488){
var statearr_30561_30602 = state_30530__$1;
(statearr_30561_30602[(1)] = (25));

} else {
var statearr_30562_30603 = state_30530__$1;
(statearr_30562_30603[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30531 === (35))){
var state_30530__$1 = state_30530;
var statearr_30563_30604 = state_30530__$1;
(statearr_30563_30604[(2)] = null);

(statearr_30563_30604[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30531 === (19))){
var inst_30483 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_30530__$1 = state_30530;
if(inst_30483){
var statearr_30564_30605 = state_30530__$1;
(statearr_30564_30605[(1)] = (22));

} else {
var statearr_30565_30606 = state_30530__$1;
(statearr_30565_30606[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30531 === (11))){
var inst_30454 = (state_30530[(2)]);
var state_30530__$1 = state_30530;
var statearr_30566_30607 = state_30530__$1;
(statearr_30566_30607[(2)] = inst_30454);

(statearr_30566_30607[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30531 === (9))){
var inst_30456 = figwheel.client.heads_up.clear.call(null);
var state_30530__$1 = state_30530;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30530__$1,(12),inst_30456);
} else {
if((state_val_30531 === (5))){
var inst_30447 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_30530__$1 = state_30530;
var statearr_30567_30608 = state_30530__$1;
(statearr_30567_30608[(2)] = inst_30447);

(statearr_30567_30608[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30531 === (14))){
var inst_30474 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_30530__$1 = state_30530;
if(inst_30474){
var statearr_30568_30609 = state_30530__$1;
(statearr_30568_30609[(1)] = (18));

} else {
var statearr_30569_30610 = state_30530__$1;
(statearr_30569_30610[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30531 === (26))){
var inst_30500 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_30530__$1 = state_30530;
if(inst_30500){
var statearr_30570_30611 = state_30530__$1;
(statearr_30570_30611[(1)] = (30));

} else {
var statearr_30571_30612 = state_30530__$1;
(statearr_30571_30612[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30531 === (16))){
var inst_30466 = (state_30530[(2)]);
var inst_30467 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30468 = figwheel.client.heads_up.display_exception.call(null,inst_30467);
var state_30530__$1 = (function (){var statearr_30572 = state_30530;
(statearr_30572[(13)] = inst_30466);

return statearr_30572;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30530__$1,(17),inst_30468);
} else {
if((state_val_30531 === (30))){
var inst_30502 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30503 = figwheel.client.heads_up.display_warning.call(null,inst_30502);
var state_30530__$1 = state_30530;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30530__$1,(33),inst_30503);
} else {
if((state_val_30531 === (10))){
var inst_30460 = (state_30530[(2)]);
var state_30530__$1 = state_30530;
var statearr_30573_30613 = state_30530__$1;
(statearr_30573_30613[(2)] = inst_30460);

(statearr_30573_30613[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30531 === (18))){
var inst_30476 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30477 = figwheel.client.heads_up.display_exception.call(null,inst_30476);
var state_30530__$1 = state_30530;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30530__$1,(21),inst_30477);
} else {
if((state_val_30531 === (37))){
var inst_30513 = (state_30530[(2)]);
var state_30530__$1 = state_30530;
var statearr_30574_30614 = state_30530__$1;
(statearr_30574_30614[(2)] = inst_30513);

(statearr_30574_30614[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30531 === (8))){
var inst_30452 = figwheel.client.heads_up.flash_loaded.call(null);
var state_30530__$1 = state_30530;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30530__$1,(11),inst_30452);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__22259__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__22236__auto__,c__22259__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22237__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22237__auto____0 = (function (){
var statearr_30575 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30575[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22237__auto__);

(statearr_30575[(1)] = (1));

return statearr_30575;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22237__auto____1 = (function (state_30530){
while(true){
var ret_value__22238__auto__ = (function (){try{while(true){
var result__22239__auto__ = switch__22236__auto__.call(null,state_30530);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22239__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22239__auto__;
}
break;
}
}catch (e30576){if((e30576 instanceof Object)){
var ex__22240__auto__ = e30576;
var statearr_30577_30615 = state_30530;
(statearr_30577_30615[(5)] = ex__22240__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30530);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30576;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22238__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30616 = state_30530;
state_30530 = G__30616;
continue;
} else {
return ret_value__22238__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22237__auto__ = function(state_30530){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22237__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22237__auto____1.call(this,state_30530);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22237__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22237__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22237__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22237__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22237__auto__;
})()
;})(switch__22236__auto__,c__22259__auto__,msg_hist,msg_names,msg))
})();
var state__22261__auto__ = (function (){var statearr_30578 = f__22260__auto__.call(null);
(statearr_30578[(6)] = c__22259__auto__);

return statearr_30578;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22261__auto__);
});})(c__22259__auto__,msg_hist,msg_names,msg))
);

return c__22259__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__22259__auto___30645 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22259__auto___30645,ch){
return (function (){
var f__22260__auto__ = (function (){var switch__22236__auto__ = ((function (c__22259__auto___30645,ch){
return (function (state_30631){
var state_val_30632 = (state_30631[(1)]);
if((state_val_30632 === (1))){
var state_30631__$1 = state_30631;
var statearr_30633_30646 = state_30631__$1;
(statearr_30633_30646[(2)] = null);

(statearr_30633_30646[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30632 === (2))){
var state_30631__$1 = state_30631;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30631__$1,(4),ch);
} else {
if((state_val_30632 === (3))){
var inst_30629 = (state_30631[(2)]);
var state_30631__$1 = state_30631;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30631__$1,inst_30629);
} else {
if((state_val_30632 === (4))){
var inst_30619 = (state_30631[(7)]);
var inst_30619__$1 = (state_30631[(2)]);
var state_30631__$1 = (function (){var statearr_30634 = state_30631;
(statearr_30634[(7)] = inst_30619__$1);

return statearr_30634;
})();
if(cljs.core.truth_(inst_30619__$1)){
var statearr_30635_30647 = state_30631__$1;
(statearr_30635_30647[(1)] = (5));

} else {
var statearr_30636_30648 = state_30631__$1;
(statearr_30636_30648[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30632 === (5))){
var inst_30619 = (state_30631[(7)]);
var inst_30621 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_30619);
var state_30631__$1 = state_30631;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30631__$1,(8),inst_30621);
} else {
if((state_val_30632 === (6))){
var state_30631__$1 = state_30631;
var statearr_30637_30649 = state_30631__$1;
(statearr_30637_30649[(2)] = null);

(statearr_30637_30649[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30632 === (7))){
var inst_30627 = (state_30631[(2)]);
var state_30631__$1 = state_30631;
var statearr_30638_30650 = state_30631__$1;
(statearr_30638_30650[(2)] = inst_30627);

(statearr_30638_30650[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30632 === (8))){
var inst_30623 = (state_30631[(2)]);
var state_30631__$1 = (function (){var statearr_30639 = state_30631;
(statearr_30639[(8)] = inst_30623);

return statearr_30639;
})();
var statearr_30640_30651 = state_30631__$1;
(statearr_30640_30651[(2)] = null);

(statearr_30640_30651[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__22259__auto___30645,ch))
;
return ((function (switch__22236__auto__,c__22259__auto___30645,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__22237__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__22237__auto____0 = (function (){
var statearr_30641 = [null,null,null,null,null,null,null,null,null];
(statearr_30641[(0)] = figwheel$client$heads_up_plugin_$_state_machine__22237__auto__);

(statearr_30641[(1)] = (1));

return statearr_30641;
});
var figwheel$client$heads_up_plugin_$_state_machine__22237__auto____1 = (function (state_30631){
while(true){
var ret_value__22238__auto__ = (function (){try{while(true){
var result__22239__auto__ = switch__22236__auto__.call(null,state_30631);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22239__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22239__auto__;
}
break;
}
}catch (e30642){if((e30642 instanceof Object)){
var ex__22240__auto__ = e30642;
var statearr_30643_30652 = state_30631;
(statearr_30643_30652[(5)] = ex__22240__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30631);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30642;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22238__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30653 = state_30631;
state_30631 = G__30653;
continue;
} else {
return ret_value__22238__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__22237__auto__ = function(state_30631){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__22237__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__22237__auto____1.call(this,state_30631);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__22237__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__22237__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__22237__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__22237__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__22237__auto__;
})()
;})(switch__22236__auto__,c__22259__auto___30645,ch))
})();
var state__22261__auto__ = (function (){var statearr_30644 = f__22260__auto__.call(null);
(statearr_30644[(6)] = c__22259__auto___30645);

return statearr_30644;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22261__auto__);
});})(c__22259__auto___30645,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__22259__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22259__auto__){
return (function (){
var f__22260__auto__ = (function (){var switch__22236__auto__ = ((function (c__22259__auto__){
return (function (state_30659){
var state_val_30660 = (state_30659[(1)]);
if((state_val_30660 === (1))){
var inst_30654 = cljs.core.async.timeout.call(null,(3000));
var state_30659__$1 = state_30659;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30659__$1,(2),inst_30654);
} else {
if((state_val_30660 === (2))){
var inst_30656 = (state_30659[(2)]);
var inst_30657 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_30659__$1 = (function (){var statearr_30661 = state_30659;
(statearr_30661[(7)] = inst_30656);

return statearr_30661;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30659__$1,inst_30657);
} else {
return null;
}
}
});})(c__22259__auto__))
;
return ((function (switch__22236__auto__,c__22259__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__22237__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__22237__auto____0 = (function (){
var statearr_30662 = [null,null,null,null,null,null,null,null];
(statearr_30662[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__22237__auto__);

(statearr_30662[(1)] = (1));

return statearr_30662;
});
var figwheel$client$enforce_project_plugin_$_state_machine__22237__auto____1 = (function (state_30659){
while(true){
var ret_value__22238__auto__ = (function (){try{while(true){
var result__22239__auto__ = switch__22236__auto__.call(null,state_30659);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22239__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22239__auto__;
}
break;
}
}catch (e30663){if((e30663 instanceof Object)){
var ex__22240__auto__ = e30663;
var statearr_30664_30666 = state_30659;
(statearr_30664_30666[(5)] = ex__22240__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30659);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30663;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22238__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30667 = state_30659;
state_30659 = G__30667;
continue;
} else {
return ret_value__22238__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__22237__auto__ = function(state_30659){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__22237__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__22237__auto____1.call(this,state_30659);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__22237__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__22237__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__22237__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__22237__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__22237__auto__;
})()
;})(switch__22236__auto__,c__22259__auto__))
})();
var state__22261__auto__ = (function (){var statearr_30665 = f__22260__auto__.call(null);
(statearr_30665[(6)] = c__22259__auto__);

return statearr_30665;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22261__auto__);
});})(c__22259__auto__))
);

return c__22259__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__5720__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__5720__auto__)){
var figwheel_version = temp__5720__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__22259__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22259__auto__,figwheel_version,temp__5720__auto__){
return (function (){
var f__22260__auto__ = (function (){var switch__22236__auto__ = ((function (c__22259__auto__,figwheel_version,temp__5720__auto__){
return (function (state_30674){
var state_val_30675 = (state_30674[(1)]);
if((state_val_30675 === (1))){
var inst_30668 = cljs.core.async.timeout.call(null,(2000));
var state_30674__$1 = state_30674;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30674__$1,(2),inst_30668);
} else {
if((state_val_30675 === (2))){
var inst_30670 = (state_30674[(2)]);
var inst_30671 = ["Figwheel Client Version <strong>",figwheel.client._figwheel_version_,"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_30672 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_30671);
var state_30674__$1 = (function (){var statearr_30676 = state_30674;
(statearr_30676[(7)] = inst_30670);

return statearr_30676;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30674__$1,inst_30672);
} else {
return null;
}
}
});})(c__22259__auto__,figwheel_version,temp__5720__auto__))
;
return ((function (switch__22236__auto__,c__22259__auto__,figwheel_version,temp__5720__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22237__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22237__auto____0 = (function (){
var statearr_30677 = [null,null,null,null,null,null,null,null];
(statearr_30677[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22237__auto__);

(statearr_30677[(1)] = (1));

return statearr_30677;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22237__auto____1 = (function (state_30674){
while(true){
var ret_value__22238__auto__ = (function (){try{while(true){
var result__22239__auto__ = switch__22236__auto__.call(null,state_30674);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22239__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22239__auto__;
}
break;
}
}catch (e30678){if((e30678 instanceof Object)){
var ex__22240__auto__ = e30678;
var statearr_30679_30681 = state_30674;
(statearr_30679_30681[(5)] = ex__22240__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30674);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30678;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22238__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30682 = state_30674;
state_30674 = G__30682;
continue;
} else {
return ret_value__22238__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22237__auto__ = function(state_30674){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22237__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22237__auto____1.call(this,state_30674);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22237__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22237__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22237__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22237__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22237__auto__;
})()
;})(switch__22236__auto__,c__22259__auto__,figwheel_version,temp__5720__auto__))
})();
var state__22261__auto__ = (function (){var statearr_30680 = f__22260__auto__.call(null);
(statearr_30680[(6)] = c__22259__auto__);

return statearr_30680;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22261__auto__);
});})(c__22259__auto__,figwheel_version,temp__5720__auto__))
);

return c__22259__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__30683){
var map__30684 = p__30683;
var map__30684__$1 = (((((!((map__30684 == null))))?(((((map__30684.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30684.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30684):map__30684);
var file = cljs.core.get.call(null,map__30684__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__30684__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__30684__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__30686 = "";
var G__30686__$1 = (cljs.core.truth_(file)?[G__30686,"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__30686);
var G__30686__$2 = (cljs.core.truth_(line)?[G__30686__$1," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__30686__$1);
if(cljs.core.truth_((function (){var and__4120__auto__ = line;
if(cljs.core.truth_(and__4120__auto__)){
return column;
} else {
return and__4120__auto__;
}
})())){
return [G__30686__$2,", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__30686__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__30687){
var map__30688 = p__30687;
var map__30688__$1 = (((((!((map__30688 == null))))?(((((map__30688.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30688.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30688):map__30688);
var ed = map__30688__$1;
var exception_data = cljs.core.get.call(null,map__30688__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__30688__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
var message_30691 = (function (){var G__30690 = cljs.core.apply.call(null,cljs.core.str,"Figwheel: Compile Exception ",figwheel.client.format_messages.call(null,exception_data));
if(cljs.core.truth_(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(exception_data))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30690)," Error on ",figwheel.client.file_line_column.call(null,exception_data)].join('');
} else {
return G__30690;
}
})();
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),message_30691);

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__30692){
var map__30693 = p__30692;
var map__30693__$1 = (((((!((map__30693 == null))))?(((((map__30693.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30693.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30693):map__30693);
var w = map__30693__$1;
var message = cljs.core.get.call(null,map__30693__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",figwheel.client.file_line_column.call(null,message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.config_defaults !== 'undefined')){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/compiled/out/figwheel/client.cljs",33,1,362,362,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/compiled/out/figwheel/client.cljs",30,1,355,355,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(figwheel.client.utils.html_env_QMARK_.call(null)){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = (((!(figwheel.client.utils.html_env_QMARK_.call(null))))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__4120__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__4120__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__4120__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_json_message_watch = (function figwheel$client$add_json_message_watch(key,callback){
return figwheel.client.add_message_watch.call(null,key,cljs.core.comp.call(null,callback,cljs.core.clj__GT_js));
});
goog.exportSymbol('figwheel.client.add_json_message_watch', figwheel.client.add_json_message_watch);
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__30695 = cljs.core.seq.call(null,plugins);
var chunk__30696 = null;
var count__30697 = (0);
var i__30698 = (0);
while(true){
if((i__30698 < count__30697)){
var vec__30705 = cljs.core._nth.call(null,chunk__30696,i__30698);
var k = cljs.core.nth.call(null,vec__30705,(0),null);
var plugin = cljs.core.nth.call(null,vec__30705,(1),null);
if(cljs.core.truth_(plugin)){
var pl_30711 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__30695,chunk__30696,count__30697,i__30698,pl_30711,vec__30705,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_30711.call(null,msg_hist);
});})(seq__30695,chunk__30696,count__30697,i__30698,pl_30711,vec__30705,k,plugin))
);
} else {
}


var G__30712 = seq__30695;
var G__30713 = chunk__30696;
var G__30714 = count__30697;
var G__30715 = (i__30698 + (1));
seq__30695 = G__30712;
chunk__30696 = G__30713;
count__30697 = G__30714;
i__30698 = G__30715;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__30695);
if(temp__5720__auto__){
var seq__30695__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30695__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__30695__$1);
var G__30716 = cljs.core.chunk_rest.call(null,seq__30695__$1);
var G__30717 = c__4550__auto__;
var G__30718 = cljs.core.count.call(null,c__4550__auto__);
var G__30719 = (0);
seq__30695 = G__30716;
chunk__30696 = G__30717;
count__30697 = G__30718;
i__30698 = G__30719;
continue;
} else {
var vec__30708 = cljs.core.first.call(null,seq__30695__$1);
var k = cljs.core.nth.call(null,vec__30708,(0),null);
var plugin = cljs.core.nth.call(null,vec__30708,(1),null);
if(cljs.core.truth_(plugin)){
var pl_30720 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__30695,chunk__30696,count__30697,i__30698,pl_30720,vec__30708,k,plugin,seq__30695__$1,temp__5720__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_30720.call(null,msg_hist);
});})(seq__30695,chunk__30696,count__30697,i__30698,pl_30720,vec__30708,k,plugin,seq__30695__$1,temp__5720__auto__))
);
} else {
}


var G__30721 = cljs.core.next.call(null,seq__30695__$1);
var G__30722 = null;
var G__30723 = (0);
var G__30724 = (0);
seq__30695 = G__30721;
chunk__30696 = G__30722;
count__30697 = G__30723;
i__30698 = G__30724;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var G__30726 = arguments.length;
switch (G__30726) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.__figwheel_start_once__ !== 'undefined')){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__30727_30732 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__30728_30733 = null;
var count__30729_30734 = (0);
var i__30730_30735 = (0);
while(true){
if((i__30730_30735 < count__30729_30734)){
var msg_30736 = cljs.core._nth.call(null,chunk__30728_30733,i__30730_30735);
figwheel.client.socket.handle_incoming_message.call(null,msg_30736);


var G__30737 = seq__30727_30732;
var G__30738 = chunk__30728_30733;
var G__30739 = count__30729_30734;
var G__30740 = (i__30730_30735 + (1));
seq__30727_30732 = G__30737;
chunk__30728_30733 = G__30738;
count__30729_30734 = G__30739;
i__30730_30735 = G__30740;
continue;
} else {
var temp__5720__auto___30741 = cljs.core.seq.call(null,seq__30727_30732);
if(temp__5720__auto___30741){
var seq__30727_30742__$1 = temp__5720__auto___30741;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30727_30742__$1)){
var c__4550__auto___30743 = cljs.core.chunk_first.call(null,seq__30727_30742__$1);
var G__30744 = cljs.core.chunk_rest.call(null,seq__30727_30742__$1);
var G__30745 = c__4550__auto___30743;
var G__30746 = cljs.core.count.call(null,c__4550__auto___30743);
var G__30747 = (0);
seq__30727_30732 = G__30744;
chunk__30728_30733 = G__30745;
count__30729_30734 = G__30746;
i__30730_30735 = G__30747;
continue;
} else {
var msg_30748 = cljs.core.first.call(null,seq__30727_30742__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_30748);


var G__30749 = cljs.core.next.call(null,seq__30727_30742__$1);
var G__30750 = null;
var G__30751 = (0);
var G__30752 = (0);
seq__30727_30732 = G__30749;
chunk__30728_30733 = G__30750;
count__30729_30734 = G__30751;
i__30730_30735 = G__30752;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__4736__auto__ = [];
var len__4730__auto___30757 = arguments.length;
var i__4731__auto___30758 = (0);
while(true){
if((i__4731__auto___30758 < len__4730__auto___30757)){
args__4736__auto__.push((arguments[i__4731__auto___30758]));

var G__30759 = (i__4731__auto___30758 + (1));
i__4731__auto___30758 = G__30759;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__30754){
var map__30755 = p__30754;
var map__30755__$1 = (((((!((map__30755 == null))))?(((((map__30755.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30755.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30755):map__30755);
var opts = map__30755__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq30753){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30753));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e30760){if((e30760 instanceof Error)){
var e = e30760;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e30760;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__30761){
var map__30762 = p__30761;
var map__30762__$1 = (((((!((map__30762 == null))))?(((((map__30762.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30762.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30762):map__30762);
var msg_name = cljs.core.get.call(null,map__30762__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1581817898054
