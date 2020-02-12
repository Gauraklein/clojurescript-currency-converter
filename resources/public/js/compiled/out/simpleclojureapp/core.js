// Compiled by ClojureScript 1.10.520 {}
goog.provide('simpleclojureapp.core');
goog.require('cljs.core');
goog.require('API_KEY_NS');
goog.require('CONVERT_API_KEY_NS');
goog.require('components.core');
goog.require('reagent.core');
goog.require('cljs.core.async');
goog.require('cljs_http.client');
cljs.core.enable_console_print_BANG_.call(null);
if((typeof simpleclojureapp !== 'undefined') && (typeof simpleclojureapp.core !== 'undefined') && (typeof simpleclojureapp.core.app_state !== 'undefined')){
} else {
simpleclojureapp.core.app_state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"title","title",636505583),"ClojureScript Currency Converter",new cljs.core.Keyword(null,"base-amount","base-amount",-2090522277),.0002,new cljs.core.Keyword(null,"base-currency-type","base-currency-type",725125251),"string",new cljs.core.Keyword(null,"conversion-rate","conversion-rate",-824166577),.0923,new cljs.core.Keyword(null,"desired-currency-type","desired-currency-type",1681805735),"string",new cljs.core.Keyword(null,"converted-amount","converted-amount",-1436014628),1.1,new cljs.core.Keyword(null,"display-converted-amount","display-converted-amount",-489057037),false,new cljs.core.Keyword(null,"currencies","currencies",2003336181),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"test",new cljs.core.Keyword(null,"display1","display1",-1032048578),"render"], null)], null));
}
var c__23784__auto___26464 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23784__auto___26464){
return (function (){
var f__23785__auto__ = (function (){var switch__23689__auto__ = ((function (c__23784__auto___26464){
return (function (state_26458){
var state_val_26459 = (state_26458[(1)]);
if((state_val_26459 === (1))){
var inst_26437 = API_KEY_NS.API_KEY.call(null);
var inst_26438 = ("http://data.fixer.io/api/symbols?access_key=" + inst_26437);
var inst_26439 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_26440 = [false];
var inst_26441 = cljs.core.PersistentHashMap.fromArrays(inst_26439,inst_26440);
var inst_26442 = cljs_http.client.get.call(null,inst_26438,inst_26441);
var state_26458__$1 = state_26458;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26458__$1,(2),inst_26442);
} else {
if((state_val_26459 === (2))){
var inst_26444 = (state_26458[(2)]);
var inst_26445 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_26446 = [new cljs.core.Keyword(null,"currencies","currencies",2003336181)];
var inst_26447 = (new cljs.core.PersistentVector(null,1,(5),inst_26445,inst_26446,null));
var inst_26448 = cljs.core.sorted_map.call(null);
var inst_26449 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_26450 = [new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Keyword(null,"symbols","symbols",1211743)];
var inst_26451 = (new cljs.core.PersistentVector(null,2,(5),inst_26449,inst_26450,null));
var inst_26452 = cljs.core.get_in.call(null,inst_26444,inst_26451);
var inst_26453 = cljs.core.seq.call(null,inst_26452);
var inst_26454 = cljs.core.sort_by.call(null,cljs.core.first,inst_26453);
var inst_26455 = cljs.core.into.call(null,inst_26448,inst_26454);
var inst_26456 = cljs.core.swap_BANG_.call(null,simpleclojureapp.core.app_state,cljs.core.assoc_in,inst_26447,inst_26455);
var state_26458__$1 = state_26458;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26458__$1,inst_26456);
} else {
return null;
}
}
});})(c__23784__auto___26464))
;
return ((function (switch__23689__auto__,c__23784__auto___26464){
return (function() {
var simpleclojureapp$core$state_machine__23690__auto__ = null;
var simpleclojureapp$core$state_machine__23690__auto____0 = (function (){
var statearr_26460 = [null,null,null,null,null,null,null];
(statearr_26460[(0)] = simpleclojureapp$core$state_machine__23690__auto__);

(statearr_26460[(1)] = (1));

return statearr_26460;
});
var simpleclojureapp$core$state_machine__23690__auto____1 = (function (state_26458){
while(true){
var ret_value__23691__auto__ = (function (){try{while(true){
var result__23692__auto__ = switch__23689__auto__.call(null,state_26458);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23692__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23692__auto__;
}
break;
}
}catch (e26461){if((e26461 instanceof Object)){
var ex__23693__auto__ = e26461;
var statearr_26462_26465 = state_26458;
(statearr_26462_26465[(5)] = ex__23693__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26458);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26461;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23691__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26466 = state_26458;
state_26458 = G__26466;
continue;
} else {
return ret_value__23691__auto__;
}
break;
}
});
simpleclojureapp$core$state_machine__23690__auto__ = function(state_26458){
switch(arguments.length){
case 0:
return simpleclojureapp$core$state_machine__23690__auto____0.call(this);
case 1:
return simpleclojureapp$core$state_machine__23690__auto____1.call(this,state_26458);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
simpleclojureapp$core$state_machine__23690__auto__.cljs$core$IFn$_invoke$arity$0 = simpleclojureapp$core$state_machine__23690__auto____0;
simpleclojureapp$core$state_machine__23690__auto__.cljs$core$IFn$_invoke$arity$1 = simpleclojureapp$core$state_machine__23690__auto____1;
return simpleclojureapp$core$state_machine__23690__auto__;
})()
;})(switch__23689__auto__,c__23784__auto___26464))
})();
var state__23786__auto__ = (function (){var statearr_26463 = f__23785__auto__.call(null);
(statearr_26463[(6)] = c__23784__auto___26464);

return statearr_26463;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23786__auto__);
});})(c__23784__auto___26464))
);

simpleclojureapp.core.get_conversion_rate = (function simpleclojureapp$core$get_conversion_rate(base_currency,desired_currency){
var c__23784__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23784__auto__){
return (function (){
var f__23785__auto__ = (function (){var switch__23689__auto__ = ((function (c__23784__auto__){
return (function (state_26498){
var state_val_26499 = (state_26498[(1)]);
if((state_val_26499 === (1))){
var inst_26467 = CONVERT_API_KEY_NS.CONVERT_API_KEY.call(null);
var inst_26468 = ["https://free.currconv.com","/api/v7/convert?q=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(base_currency),"_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(desired_currency),"&compact=ultra&apiKey=",inst_26467].join('');
var inst_26469 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_26470 = [false];
var inst_26471 = cljs.core.PersistentHashMap.fromArrays(inst_26469,inst_26470);
var inst_26472 = cljs_http.client.get.call(null,inst_26468,inst_26471);
var state_26498__$1 = state_26498;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26498__$1,(2),inst_26472);
} else {
if((state_val_26499 === (2))){
var inst_26474 = (state_26498[(2)]);
var inst_26475 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(base_currency),"_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(desired_currency)].join('');
var inst_26476 = cljs.core.keyword.call(null,inst_26475);
var inst_26477 = simpleclojureapp.core.query = inst_26476;
var inst_26478 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_26479 = [new cljs.core.Keyword(null,"conversion-rate","conversion-rate",-824166577)];
var inst_26480 = (new cljs.core.PersistentVector(null,1,(5),inst_26478,inst_26479,null));
var inst_26481 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_26474);
var inst_26482 = cljs.core.get.call(null,inst_26481,simpleclojureapp.core.query);
var inst_26483 = cljs.core.swap_BANG_.call(null,simpleclojureapp.core.app_state,cljs.core.assoc_in,inst_26480,inst_26482);
var inst_26484 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_26485 = [new cljs.core.Keyword(null,"converted-amount","converted-amount",-1436014628)];
var inst_26486 = (new cljs.core.PersistentVector(null,1,(5),inst_26484,inst_26485,null));
var inst_26487 = cljs.core.deref.call(null,simpleclojureapp.core.app_state);
var inst_26488 = new cljs.core.Keyword(null,"base-amount","base-amount",-2090522277).cljs$core$IFn$_invoke$arity$1(inst_26487);
var inst_26489 = cljs.core.deref.call(null,simpleclojureapp.core.app_state);
var inst_26490 = new cljs.core.Keyword(null,"conversion-rate","conversion-rate",-824166577).cljs$core$IFn$_invoke$arity$1(inst_26489);
var inst_26491 = (inst_26488 * inst_26490);
var inst_26492 = cljs.core.swap_BANG_.call(null,simpleclojureapp.core.app_state,cljs.core.assoc_in,inst_26486,inst_26491);
var inst_26493 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_26494 = [new cljs.core.Keyword(null,"display-converted-amount","display-converted-amount",-489057037)];
var inst_26495 = (new cljs.core.PersistentVector(null,1,(5),inst_26493,inst_26494,null));
var inst_26496 = cljs.core.swap_BANG_.call(null,simpleclojureapp.core.app_state,cljs.core.assoc_in,inst_26495,true);
var state_26498__$1 = (function (){var statearr_26500 = state_26498;
(statearr_26500[(7)] = inst_26477);

(statearr_26500[(8)] = inst_26492);

(statearr_26500[(9)] = inst_26483);

return statearr_26500;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26498__$1,inst_26496);
} else {
return null;
}
}
});})(c__23784__auto__))
;
return ((function (switch__23689__auto__,c__23784__auto__){
return (function() {
var simpleclojureapp$core$get_conversion_rate_$_state_machine__23690__auto__ = null;
var simpleclojureapp$core$get_conversion_rate_$_state_machine__23690__auto____0 = (function (){
var statearr_26501 = [null,null,null,null,null,null,null,null,null,null];
(statearr_26501[(0)] = simpleclojureapp$core$get_conversion_rate_$_state_machine__23690__auto__);

(statearr_26501[(1)] = (1));

return statearr_26501;
});
var simpleclojureapp$core$get_conversion_rate_$_state_machine__23690__auto____1 = (function (state_26498){
while(true){
var ret_value__23691__auto__ = (function (){try{while(true){
var result__23692__auto__ = switch__23689__auto__.call(null,state_26498);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23692__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23692__auto__;
}
break;
}
}catch (e26502){if((e26502 instanceof Object)){
var ex__23693__auto__ = e26502;
var statearr_26503_26505 = state_26498;
(statearr_26503_26505[(5)] = ex__23693__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26498);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26502;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23691__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26506 = state_26498;
state_26498 = G__26506;
continue;
} else {
return ret_value__23691__auto__;
}
break;
}
});
simpleclojureapp$core$get_conversion_rate_$_state_machine__23690__auto__ = function(state_26498){
switch(arguments.length){
case 0:
return simpleclojureapp$core$get_conversion_rate_$_state_machine__23690__auto____0.call(this);
case 1:
return simpleclojureapp$core$get_conversion_rate_$_state_machine__23690__auto____1.call(this,state_26498);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
simpleclojureapp$core$get_conversion_rate_$_state_machine__23690__auto__.cljs$core$IFn$_invoke$arity$0 = simpleclojureapp$core$get_conversion_rate_$_state_machine__23690__auto____0;
simpleclojureapp$core$get_conversion_rate_$_state_machine__23690__auto__.cljs$core$IFn$_invoke$arity$1 = simpleclojureapp$core$get_conversion_rate_$_state_machine__23690__auto____1;
return simpleclojureapp$core$get_conversion_rate_$_state_machine__23690__auto__;
})()
;})(switch__23689__auto__,c__23784__auto__))
})();
var state__23786__auto__ = (function (){var statearr_26504 = f__23785__auto__.call(null);
(statearr_26504[(6)] = c__23784__auto__);

return statearr_26504;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23786__auto__);
});})(c__23784__auto__))
);

return c__23784__auto__;
});
simpleclojureapp.core.convert_currency_fn = (function simpleclojureapp$core$convert_currency_fn(){
cljs.core.swap_BANG_.call(null,simpleclojureapp.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"display-converted-amount","display-converted-amount",-489057037)], null),"loading");

cljs.core.swap_BANG_.call(null,simpleclojureapp.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"base-amount","base-amount",-2090522277)], null),document.getElementById("base-amount").value);

cljs.core.swap_BANG_.call(null,simpleclojureapp.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"base-currency-type","base-currency-type",725125251)], null),document.getElementById("base-currency-type").value);

cljs.core.swap_BANG_.call(null,simpleclojureapp.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"desired-currency-type","desired-currency-type",1681805735)], null),document.getElementById("converted-currency-type").value);

return simpleclojureapp.core.get_conversion_rate.call(null,new cljs.core.Keyword(null,"base-currency-type","base-currency-type",725125251).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,simpleclojureapp.core.app_state)),new cljs.core.Keyword(null,"desired-currency-type","desired-currency-type",1681805735).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,simpleclojureapp.core.app_state)));
});
simpleclojureapp.core.currency_conversion_app = (function simpleclojureapp$core$currency_conversion_app(){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"content"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,simpleclojureapp.core.app_state))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [components.core.base_amount_input], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [components.core.base_currency_select,new cljs.core.Keyword(null,"currencies","currencies",2003336181).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,simpleclojureapp.core.app_state))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"To"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [components.core.converted_currency_select,new cljs.core.Keyword(null,"currencies","currencies",2003336181).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,simpleclojureapp.core.app_state))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"Convert",new cljs.core.Keyword(null,"class","class",-2030961996),"margin",new cljs.core.Keyword(null,"id","id",-1388402092),"button",new cljs.core.Keyword(null,"on-click","on-click",1632826543),simpleclojureapp.core.convert_currency_fn], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"result"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [components.core.render_result_conditionals,new cljs.core.Keyword(null,"display-converted-amount","display-converted-amount",-489057037).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,simpleclojureapp.core.app_state)),new cljs.core.Keyword(null,"converted-amount","converted-amount",-1436014628).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,simpleclojureapp.core.app_state)),new cljs.core.Keyword(null,"desired-currency-type","desired-currency-type",1681805735).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,simpleclojureapp.core.app_state))], null)], null)], null);
});
reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [simpleclojureapp.core.currency_conversion_app], null),document.getElementById("app"));
simpleclojureapp.core.on_js_reload = (function simpleclojureapp$core$on_js_reload(){
return null;
});

//# sourceMappingURL=core.js.map?rel=1581523632334
