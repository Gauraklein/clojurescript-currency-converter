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
var c__22952__auto___23094 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22952__auto___23094){
return (function (){
var f__22953__auto__ = (function (){var switch__22929__auto__ = ((function (c__22952__auto___23094){
return (function (state_23088){
var state_val_23089 = (state_23088[(1)]);
if((state_val_23089 === (1))){
var inst_23067 = API_KEY_NS.API_KEY.call(null);
var inst_23068 = ("https://data.fixer.io/api/symbols?access_key=" + inst_23067);
var inst_23069 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_23070 = [false];
var inst_23071 = cljs.core.PersistentHashMap.fromArrays(inst_23069,inst_23070);
var inst_23072 = cljs_http.client.get.call(null,inst_23068,inst_23071);
var state_23088__$1 = state_23088;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23088__$1,(2),inst_23072);
} else {
if((state_val_23089 === (2))){
var inst_23074 = (state_23088[(2)]);
var inst_23075 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_23076 = [new cljs.core.Keyword(null,"currencies","currencies",2003336181)];
var inst_23077 = (new cljs.core.PersistentVector(null,1,(5),inst_23075,inst_23076,null));
var inst_23078 = cljs.core.sorted_map.call(null);
var inst_23079 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_23080 = [new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Keyword(null,"symbols","symbols",1211743)];
var inst_23081 = (new cljs.core.PersistentVector(null,2,(5),inst_23079,inst_23080,null));
var inst_23082 = cljs.core.get_in.call(null,inst_23074,inst_23081);
var inst_23083 = cljs.core.seq.call(null,inst_23082);
var inst_23084 = cljs.core.sort_by.call(null,cljs.core.first,inst_23083);
var inst_23085 = cljs.core.into.call(null,inst_23078,inst_23084);
var inst_23086 = cljs.core.swap_BANG_.call(null,simpleclojureapp.core.app_state,cljs.core.assoc_in,inst_23077,inst_23085);
var state_23088__$1 = state_23088;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23088__$1,inst_23086);
} else {
return null;
}
}
});})(c__22952__auto___23094))
;
return ((function (switch__22929__auto__,c__22952__auto___23094){
return (function() {
var simpleclojureapp$core$state_machine__22930__auto__ = null;
var simpleclojureapp$core$state_machine__22930__auto____0 = (function (){
var statearr_23090 = [null,null,null,null,null,null,null];
(statearr_23090[(0)] = simpleclojureapp$core$state_machine__22930__auto__);

(statearr_23090[(1)] = (1));

return statearr_23090;
});
var simpleclojureapp$core$state_machine__22930__auto____1 = (function (state_23088){
while(true){
var ret_value__22931__auto__ = (function (){try{while(true){
var result__22932__auto__ = switch__22929__auto__.call(null,state_23088);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22932__auto__;
}
break;
}
}catch (e23091){if((e23091 instanceof Object)){
var ex__22933__auto__ = e23091;
var statearr_23092_23095 = state_23088;
(statearr_23092_23095[(5)] = ex__22933__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23088);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23091;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23096 = state_23088;
state_23088 = G__23096;
continue;
} else {
return ret_value__22931__auto__;
}
break;
}
});
simpleclojureapp$core$state_machine__22930__auto__ = function(state_23088){
switch(arguments.length){
case 0:
return simpleclojureapp$core$state_machine__22930__auto____0.call(this);
case 1:
return simpleclojureapp$core$state_machine__22930__auto____1.call(this,state_23088);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
simpleclojureapp$core$state_machine__22930__auto__.cljs$core$IFn$_invoke$arity$0 = simpleclojureapp$core$state_machine__22930__auto____0;
simpleclojureapp$core$state_machine__22930__auto__.cljs$core$IFn$_invoke$arity$1 = simpleclojureapp$core$state_machine__22930__auto____1;
return simpleclojureapp$core$state_machine__22930__auto__;
})()
;})(switch__22929__auto__,c__22952__auto___23094))
})();
var state__22954__auto__ = (function (){var statearr_23093 = f__22953__auto__.call(null);
(statearr_23093[(6)] = c__22952__auto___23094);

return statearr_23093;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22954__auto__);
});})(c__22952__auto___23094))
);

simpleclojureapp.core.get_conversion_rate = (function simpleclojureapp$core$get_conversion_rate(base_currency,desired_currency){
var c__22952__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22952__auto__){
return (function (){
var f__22953__auto__ = (function (){var switch__22929__auto__ = ((function (c__22952__auto__){
return (function (state_23128){
var state_val_23129 = (state_23128[(1)]);
if((state_val_23129 === (1))){
var inst_23097 = CONVERT_API_KEY_NS.CONVERT_API_KEY.call(null);
var inst_23098 = ["https://free.currconv.com","/api/v7/convert?q=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(base_currency),"_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(desired_currency),"&compact=ultra&apiKey=",inst_23097].join('');
var inst_23099 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_23100 = [false];
var inst_23101 = cljs.core.PersistentHashMap.fromArrays(inst_23099,inst_23100);
var inst_23102 = cljs_http.client.get.call(null,inst_23098,inst_23101);
var state_23128__$1 = state_23128;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23128__$1,(2),inst_23102);
} else {
if((state_val_23129 === (2))){
var inst_23104 = (state_23128[(2)]);
var inst_23105 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(base_currency),"_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(desired_currency)].join('');
var inst_23106 = cljs.core.keyword.call(null,inst_23105);
var inst_23107 = simpleclojureapp.core.query = inst_23106;
var inst_23108 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_23109 = [new cljs.core.Keyword(null,"conversion-rate","conversion-rate",-824166577)];
var inst_23110 = (new cljs.core.PersistentVector(null,1,(5),inst_23108,inst_23109,null));
var inst_23111 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_23104);
var inst_23112 = cljs.core.get.call(null,inst_23111,simpleclojureapp.core.query);
var inst_23113 = cljs.core.swap_BANG_.call(null,simpleclojureapp.core.app_state,cljs.core.assoc_in,inst_23110,inst_23112);
var inst_23114 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_23115 = [new cljs.core.Keyword(null,"converted-amount","converted-amount",-1436014628)];
var inst_23116 = (new cljs.core.PersistentVector(null,1,(5),inst_23114,inst_23115,null));
var inst_23117 = cljs.core.deref.call(null,simpleclojureapp.core.app_state);
var inst_23118 = new cljs.core.Keyword(null,"base-amount","base-amount",-2090522277).cljs$core$IFn$_invoke$arity$1(inst_23117);
var inst_23119 = cljs.core.deref.call(null,simpleclojureapp.core.app_state);
var inst_23120 = new cljs.core.Keyword(null,"conversion-rate","conversion-rate",-824166577).cljs$core$IFn$_invoke$arity$1(inst_23119);
var inst_23121 = (inst_23118 * inst_23120);
var inst_23122 = cljs.core.swap_BANG_.call(null,simpleclojureapp.core.app_state,cljs.core.assoc_in,inst_23116,inst_23121);
var inst_23123 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_23124 = [new cljs.core.Keyword(null,"display-converted-amount","display-converted-amount",-489057037)];
var inst_23125 = (new cljs.core.PersistentVector(null,1,(5),inst_23123,inst_23124,null));
var inst_23126 = cljs.core.swap_BANG_.call(null,simpleclojureapp.core.app_state,cljs.core.assoc_in,inst_23125,true);
var state_23128__$1 = (function (){var statearr_23130 = state_23128;
(statearr_23130[(7)] = inst_23107);

(statearr_23130[(8)] = inst_23113);

(statearr_23130[(9)] = inst_23122);

return statearr_23130;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23128__$1,inst_23126);
} else {
return null;
}
}
});})(c__22952__auto__))
;
return ((function (switch__22929__auto__,c__22952__auto__){
return (function() {
var simpleclojureapp$core$get_conversion_rate_$_state_machine__22930__auto__ = null;
var simpleclojureapp$core$get_conversion_rate_$_state_machine__22930__auto____0 = (function (){
var statearr_23131 = [null,null,null,null,null,null,null,null,null,null];
(statearr_23131[(0)] = simpleclojureapp$core$get_conversion_rate_$_state_machine__22930__auto__);

(statearr_23131[(1)] = (1));

return statearr_23131;
});
var simpleclojureapp$core$get_conversion_rate_$_state_machine__22930__auto____1 = (function (state_23128){
while(true){
var ret_value__22931__auto__ = (function (){try{while(true){
var result__22932__auto__ = switch__22929__auto__.call(null,state_23128);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22932__auto__;
}
break;
}
}catch (e23132){if((e23132 instanceof Object)){
var ex__22933__auto__ = e23132;
var statearr_23133_23135 = state_23128;
(statearr_23133_23135[(5)] = ex__22933__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23128);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23132;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23136 = state_23128;
state_23128 = G__23136;
continue;
} else {
return ret_value__22931__auto__;
}
break;
}
});
simpleclojureapp$core$get_conversion_rate_$_state_machine__22930__auto__ = function(state_23128){
switch(arguments.length){
case 0:
return simpleclojureapp$core$get_conversion_rate_$_state_machine__22930__auto____0.call(this);
case 1:
return simpleclojureapp$core$get_conversion_rate_$_state_machine__22930__auto____1.call(this,state_23128);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
simpleclojureapp$core$get_conversion_rate_$_state_machine__22930__auto__.cljs$core$IFn$_invoke$arity$0 = simpleclojureapp$core$get_conversion_rate_$_state_machine__22930__auto____0;
simpleclojureapp$core$get_conversion_rate_$_state_machine__22930__auto__.cljs$core$IFn$_invoke$arity$1 = simpleclojureapp$core$get_conversion_rate_$_state_machine__22930__auto____1;
return simpleclojureapp$core$get_conversion_rate_$_state_machine__22930__auto__;
})()
;})(switch__22929__auto__,c__22952__auto__))
})();
var state__22954__auto__ = (function (){var statearr_23134 = f__22953__auto__.call(null);
(statearr_23134[(6)] = c__22952__auto__);

return statearr_23134;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22954__auto__);
});})(c__22952__auto__))
);

return c__22952__auto__;
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

//# sourceMappingURL=core.js.map?rel=1581526522077
