// Compiled by ClojureScript 1.10.520 {}
goog.provide('api.core');
goog.require('cljs.core');
goog.require('API_KEY_NS');
goog.require('CONVERT_API_KEY_NS');
goog.require('simpleclojureapp.core');
goog.require('cljs.core.async');
goog.require('cljs_http.client');
var c__27885__auto___31349 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27885__auto___31349){
return (function (){
var f__27886__auto__ = (function (){var switch__27862__auto__ = ((function (c__27885__auto___31349){
return (function (state_31343){
var state_val_31344 = (state_31343[(1)]);
if((state_val_31344 === (1))){
var inst_31322 = API_KEY_NS.API_KEY.call(null);
var inst_31323 = ("https://data.fixer.io/api/symbols?access_key=" + inst_31322);
var inst_31324 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_31325 = [false];
var inst_31326 = cljs.core.PersistentHashMap.fromArrays(inst_31324,inst_31325);
var inst_31327 = cljs_http.client.get.call(null,inst_31323,inst_31326);
var state_31343__$1 = state_31343;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31343__$1,(2),inst_31327);
} else {
if((state_val_31344 === (2))){
var inst_31329 = (state_31343[(2)]);
var inst_31330 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_31331 = [new cljs.core.Keyword(null,"currencies","currencies",2003336181)];
var inst_31332 = (new cljs.core.PersistentVector(null,1,(5),inst_31330,inst_31331,null));
var inst_31333 = cljs.core.sorted_map.call(null);
var inst_31334 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_31335 = [new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Keyword(null,"symbols","symbols",1211743)];
var inst_31336 = (new cljs.core.PersistentVector(null,2,(5),inst_31334,inst_31335,null));
var inst_31337 = cljs.core.get_in.call(null,inst_31329,inst_31336);
var inst_31338 = cljs.core.seq.call(null,inst_31337);
var inst_31339 = cljs.core.sort_by.call(null,cljs.core.first,inst_31338);
var inst_31340 = cljs.core.into.call(null,inst_31333,inst_31339);
var inst_31341 = cljs.core.swap_BANG_.call(null,simpleclojureapp.core.app_state,cljs.core.assoc_in,inst_31332,inst_31340);
var state_31343__$1 = state_31343;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31343__$1,inst_31341);
} else {
return null;
}
}
});})(c__27885__auto___31349))
;
return ((function (switch__27862__auto__,c__27885__auto___31349){
return (function() {
var api$core$state_machine__27863__auto__ = null;
var api$core$state_machine__27863__auto____0 = (function (){
var statearr_31345 = [null,null,null,null,null,null,null];
(statearr_31345[(0)] = api$core$state_machine__27863__auto__);

(statearr_31345[(1)] = (1));

return statearr_31345;
});
var api$core$state_machine__27863__auto____1 = (function (state_31343){
while(true){
var ret_value__27864__auto__ = (function (){try{while(true){
var result__27865__auto__ = switch__27862__auto__.call(null,state_31343);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27865__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27865__auto__;
}
break;
}
}catch (e31346){if((e31346 instanceof Object)){
var ex__27866__auto__ = e31346;
var statearr_31347_31350 = state_31343;
(statearr_31347_31350[(5)] = ex__27866__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31343);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31346;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27864__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31351 = state_31343;
state_31343 = G__31351;
continue;
} else {
return ret_value__27864__auto__;
}
break;
}
});
api$core$state_machine__27863__auto__ = function(state_31343){
switch(arguments.length){
case 0:
return api$core$state_machine__27863__auto____0.call(this);
case 1:
return api$core$state_machine__27863__auto____1.call(this,state_31343);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
api$core$state_machine__27863__auto__.cljs$core$IFn$_invoke$arity$0 = api$core$state_machine__27863__auto____0;
api$core$state_machine__27863__auto__.cljs$core$IFn$_invoke$arity$1 = api$core$state_machine__27863__auto____1;
return api$core$state_machine__27863__auto__;
})()
;})(switch__27862__auto__,c__27885__auto___31349))
})();
var state__27887__auto__ = (function (){var statearr_31348 = f__27886__auto__.call(null);
(statearr_31348[(6)] = c__27885__auto___31349);

return statearr_31348;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27887__auto__);
});})(c__27885__auto___31349))
);

api.core.get_conversion_rate = (function api$core$get_conversion_rate(base_currency,desired_currency){
var c__27885__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27885__auto__){
return (function (){
var f__27886__auto__ = (function (){var switch__27862__auto__ = ((function (c__27885__auto__){
return (function (state_31375){
var state_val_31376 = (state_31375[(1)]);
if((state_val_31376 === (1))){
var inst_31352 = CONVERT_API_KEY_NS.CONVERT_API_KEY.call(null);
var inst_31353 = ["https://free.currconv.com","/api/v7/convert?q=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(base_currency),"_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(desired_currency),"&compact=ultra&apiKey=",inst_31352].join('');
var inst_31354 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_31355 = [false];
var inst_31356 = cljs.core.PersistentHashMap.fromArrays(inst_31354,inst_31355);
var inst_31357 = cljs_http.client.get.call(null,inst_31353,inst_31356);
var state_31375__$1 = state_31375;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31375__$1,(2),inst_31357);
} else {
if((state_val_31376 === (2))){
var inst_31359 = (state_31375[(2)]);
var inst_31360 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(base_currency),"_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(desired_currency)].join('');
var inst_31361 = cljs.core.keyword.call(null,inst_31360);
var inst_31362 = api.core.query = inst_31361;
var inst_31363 = [new cljs.core.Keyword(null,"conversion-rate","conversion-rate",-824166577),new cljs.core.Keyword(null,"converted-amount","converted-amount",-1436014628),new cljs.core.Keyword(null,"display-converted-amount","display-converted-amount",-489057037)];
var inst_31364 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_31359);
var inst_31365 = cljs.core.get.call(null,inst_31364,api.core.query);
var inst_31366 = cljs.core.deref.call(null,simpleclojureapp.core.app_state);
var inst_31367 = new cljs.core.Keyword(null,"base-amount","base-amount",-2090522277).cljs$core$IFn$_invoke$arity$1(inst_31366);
var inst_31368 = cljs.core.deref.call(null,simpleclojureapp.core.app_state);
var inst_31369 = new cljs.core.Keyword(null,"conversion-rate","conversion-rate",-824166577).cljs$core$IFn$_invoke$arity$1(inst_31368);
var inst_31370 = (inst_31367 * inst_31369);
var inst_31371 = [inst_31365,inst_31370,true];
var inst_31372 = cljs.core.PersistentHashMap.fromArrays(inst_31363,inst_31371);
var inst_31373 = cljs.core.swap_BANG_.call(null,simpleclojureapp.core.app_state,cljs.core.merge,inst_31372);
var state_31375__$1 = (function (){var statearr_31377 = state_31375;
(statearr_31377[(7)] = inst_31362);

return statearr_31377;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31375__$1,inst_31373);
} else {
return null;
}
}
});})(c__27885__auto__))
;
return ((function (switch__27862__auto__,c__27885__auto__){
return (function() {
var api$core$get_conversion_rate_$_state_machine__27863__auto__ = null;
var api$core$get_conversion_rate_$_state_machine__27863__auto____0 = (function (){
var statearr_31378 = [null,null,null,null,null,null,null,null];
(statearr_31378[(0)] = api$core$get_conversion_rate_$_state_machine__27863__auto__);

(statearr_31378[(1)] = (1));

return statearr_31378;
});
var api$core$get_conversion_rate_$_state_machine__27863__auto____1 = (function (state_31375){
while(true){
var ret_value__27864__auto__ = (function (){try{while(true){
var result__27865__auto__ = switch__27862__auto__.call(null,state_31375);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27865__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27865__auto__;
}
break;
}
}catch (e31379){if((e31379 instanceof Object)){
var ex__27866__auto__ = e31379;
var statearr_31380_31382 = state_31375;
(statearr_31380_31382[(5)] = ex__27866__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31375);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31379;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27864__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31383 = state_31375;
state_31375 = G__31383;
continue;
} else {
return ret_value__27864__auto__;
}
break;
}
});
api$core$get_conversion_rate_$_state_machine__27863__auto__ = function(state_31375){
switch(arguments.length){
case 0:
return api$core$get_conversion_rate_$_state_machine__27863__auto____0.call(this);
case 1:
return api$core$get_conversion_rate_$_state_machine__27863__auto____1.call(this,state_31375);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
api$core$get_conversion_rate_$_state_machine__27863__auto__.cljs$core$IFn$_invoke$arity$0 = api$core$get_conversion_rate_$_state_machine__27863__auto____0;
api$core$get_conversion_rate_$_state_machine__27863__auto__.cljs$core$IFn$_invoke$arity$1 = api$core$get_conversion_rate_$_state_machine__27863__auto____1;
return api$core$get_conversion_rate_$_state_machine__27863__auto__;
})()
;})(switch__27862__auto__,c__27885__auto__))
})();
var state__27887__auto__ = (function (){var statearr_31381 = f__27886__auto__.call(null);
(statearr_31381[(6)] = c__27885__auto__);

return statearr_31381;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27887__auto__);
});})(c__27885__auto__))
);

return c__27885__auto__;
});
api.core.convert_currency_fn = (function api$core$convert_currency_fn(){
cljs.core.swap_BANG_.call(null,simpleclojureapp.core.app_state,cljs.core.merge,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display-converted-amount","display-converted-amount",-489057037),"loading",new cljs.core.Keyword(null,"base-amount","base-amount",-2090522277),document.getElementById("base-amount").value,new cljs.core.Keyword(null,"base-currency-type","base-currency-type",725125251),document.getElementById("base-currency-type").value,new cljs.core.Keyword(null,"desired-currency-type","desired-currency-type",1681805735),document.getElementById("converted-currency-type").value], null));

return api.core.get_conversion_rate.call(null,new cljs.core.Keyword(null,"base-currency-type","base-currency-type",725125251).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,simpleclojureapp.core.app_state)),new cljs.core.Keyword(null,"desired-currency-type","desired-currency-type",1681805735).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,simpleclojureapp.core.app_state)));
});

//# sourceMappingURL=core.js.map?rel=1581834165678
