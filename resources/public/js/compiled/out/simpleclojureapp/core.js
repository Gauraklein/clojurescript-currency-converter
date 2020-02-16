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
var c__27885__auto___30809 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27885__auto___30809){
return (function (){
var f__27886__auto__ = (function (){var switch__27862__auto__ = ((function (c__27885__auto___30809){
return (function (state_30803){
var state_val_30804 = (state_30803[(1)]);
if((state_val_30804 === (1))){
var inst_30782 = API_KEY_NS.API_KEY.call(null);
var inst_30783 = ("https://data.fixer.io/api/symbols?access_key=" + inst_30782);
var inst_30784 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_30785 = [false];
var inst_30786 = cljs.core.PersistentHashMap.fromArrays(inst_30784,inst_30785);
var inst_30787 = cljs_http.client.get.call(null,inst_30783,inst_30786);
var state_30803__$1 = state_30803;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30803__$1,(2),inst_30787);
} else {
if((state_val_30804 === (2))){
var inst_30789 = (state_30803[(2)]);
var inst_30790 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30791 = [new cljs.core.Keyword(null,"currencies","currencies",2003336181)];
var inst_30792 = (new cljs.core.PersistentVector(null,1,(5),inst_30790,inst_30791,null));
var inst_30793 = cljs.core.sorted_map.call(null);
var inst_30794 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30795 = [new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Keyword(null,"symbols","symbols",1211743)];
var inst_30796 = (new cljs.core.PersistentVector(null,2,(5),inst_30794,inst_30795,null));
var inst_30797 = cljs.core.get_in.call(null,inst_30789,inst_30796);
var inst_30798 = cljs.core.seq.call(null,inst_30797);
var inst_30799 = cljs.core.sort_by.call(null,cljs.core.first,inst_30798);
var inst_30800 = cljs.core.into.call(null,inst_30793,inst_30799);
var inst_30801 = cljs.core.swap_BANG_.call(null,simpleclojureapp.core.app_state,cljs.core.assoc_in,inst_30792,inst_30800);
var state_30803__$1 = state_30803;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30803__$1,inst_30801);
} else {
return null;
}
}
});})(c__27885__auto___30809))
;
return ((function (switch__27862__auto__,c__27885__auto___30809){
return (function() {
var simpleclojureapp$core$state_machine__27863__auto__ = null;
var simpleclojureapp$core$state_machine__27863__auto____0 = (function (){
var statearr_30805 = [null,null,null,null,null,null,null];
(statearr_30805[(0)] = simpleclojureapp$core$state_machine__27863__auto__);

(statearr_30805[(1)] = (1));

return statearr_30805;
});
var simpleclojureapp$core$state_machine__27863__auto____1 = (function (state_30803){
while(true){
var ret_value__27864__auto__ = (function (){try{while(true){
var result__27865__auto__ = switch__27862__auto__.call(null,state_30803);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27865__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27865__auto__;
}
break;
}
}catch (e30806){if((e30806 instanceof Object)){
var ex__27866__auto__ = e30806;
var statearr_30807_30810 = state_30803;
(statearr_30807_30810[(5)] = ex__27866__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30803);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30806;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27864__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30811 = state_30803;
state_30803 = G__30811;
continue;
} else {
return ret_value__27864__auto__;
}
break;
}
});
simpleclojureapp$core$state_machine__27863__auto__ = function(state_30803){
switch(arguments.length){
case 0:
return simpleclojureapp$core$state_machine__27863__auto____0.call(this);
case 1:
return simpleclojureapp$core$state_machine__27863__auto____1.call(this,state_30803);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
simpleclojureapp$core$state_machine__27863__auto__.cljs$core$IFn$_invoke$arity$0 = simpleclojureapp$core$state_machine__27863__auto____0;
simpleclojureapp$core$state_machine__27863__auto__.cljs$core$IFn$_invoke$arity$1 = simpleclojureapp$core$state_machine__27863__auto____1;
return simpleclojureapp$core$state_machine__27863__auto__;
})()
;})(switch__27862__auto__,c__27885__auto___30809))
})();
var state__27887__auto__ = (function (){var statearr_30808 = f__27886__auto__.call(null);
(statearr_30808[(6)] = c__27885__auto___30809);

return statearr_30808;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27887__auto__);
});})(c__27885__auto___30809))
);

simpleclojureapp.core.get_conversion_rate = (function simpleclojureapp$core$get_conversion_rate(base_currency,desired_currency){
var c__27885__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27885__auto__){
return (function (){
var f__27886__auto__ = (function (){var switch__27862__auto__ = ((function (c__27885__auto__){
return (function (state_30835){
var state_val_30836 = (state_30835[(1)]);
if((state_val_30836 === (1))){
var inst_30812 = CONVERT_API_KEY_NS.CONVERT_API_KEY.call(null);
var inst_30813 = ["https://free.currconv.com","/api/v7/convert?q=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(base_currency),"_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(desired_currency),"&compact=ultra&apiKey=",inst_30812].join('');
var inst_30814 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_30815 = [false];
var inst_30816 = cljs.core.PersistentHashMap.fromArrays(inst_30814,inst_30815);
var inst_30817 = cljs_http.client.get.call(null,inst_30813,inst_30816);
var state_30835__$1 = state_30835;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30835__$1,(2),inst_30817);
} else {
if((state_val_30836 === (2))){
var inst_30819 = (state_30835[(2)]);
var inst_30820 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(base_currency),"_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(desired_currency)].join('');
var inst_30821 = cljs.core.keyword.call(null,inst_30820);
var inst_30822 = simpleclojureapp.core.query = inst_30821;
var inst_30823 = [new cljs.core.Keyword(null,"conversion-rate","conversion-rate",-824166577),new cljs.core.Keyword(null,"converted-amount","converted-amount",-1436014628),new cljs.core.Keyword(null,"display-converted-amount","display-converted-amount",-489057037)];
var inst_30824 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_30819);
var inst_30825 = cljs.core.get.call(null,inst_30824,simpleclojureapp.core.query);
var inst_30826 = cljs.core.deref.call(null,simpleclojureapp.core.app_state);
var inst_30827 = new cljs.core.Keyword(null,"base-amount","base-amount",-2090522277).cljs$core$IFn$_invoke$arity$1(inst_30826);
var inst_30828 = cljs.core.deref.call(null,simpleclojureapp.core.app_state);
var inst_30829 = new cljs.core.Keyword(null,"conversion-rate","conversion-rate",-824166577).cljs$core$IFn$_invoke$arity$1(inst_30828);
var inst_30830 = (inst_30827 * inst_30829);
var inst_30831 = [inst_30825,inst_30830,true];
var inst_30832 = cljs.core.PersistentHashMap.fromArrays(inst_30823,inst_30831);
var inst_30833 = cljs.core.swap_BANG_.call(null,simpleclojureapp.core.app_state,cljs.core.merge,inst_30832);
var state_30835__$1 = (function (){var statearr_30837 = state_30835;
(statearr_30837[(7)] = inst_30822);

return statearr_30837;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30835__$1,inst_30833);
} else {
return null;
}
}
});})(c__27885__auto__))
;
return ((function (switch__27862__auto__,c__27885__auto__){
return (function() {
var simpleclojureapp$core$get_conversion_rate_$_state_machine__27863__auto__ = null;
var simpleclojureapp$core$get_conversion_rate_$_state_machine__27863__auto____0 = (function (){
var statearr_30838 = [null,null,null,null,null,null,null,null];
(statearr_30838[(0)] = simpleclojureapp$core$get_conversion_rate_$_state_machine__27863__auto__);

(statearr_30838[(1)] = (1));

return statearr_30838;
});
var simpleclojureapp$core$get_conversion_rate_$_state_machine__27863__auto____1 = (function (state_30835){
while(true){
var ret_value__27864__auto__ = (function (){try{while(true){
var result__27865__auto__ = switch__27862__auto__.call(null,state_30835);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27865__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27865__auto__;
}
break;
}
}catch (e30839){if((e30839 instanceof Object)){
var ex__27866__auto__ = e30839;
var statearr_30840_30842 = state_30835;
(statearr_30840_30842[(5)] = ex__27866__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30835);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30839;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27864__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30843 = state_30835;
state_30835 = G__30843;
continue;
} else {
return ret_value__27864__auto__;
}
break;
}
});
simpleclojureapp$core$get_conversion_rate_$_state_machine__27863__auto__ = function(state_30835){
switch(arguments.length){
case 0:
return simpleclojureapp$core$get_conversion_rate_$_state_machine__27863__auto____0.call(this);
case 1:
return simpleclojureapp$core$get_conversion_rate_$_state_machine__27863__auto____1.call(this,state_30835);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
simpleclojureapp$core$get_conversion_rate_$_state_machine__27863__auto__.cljs$core$IFn$_invoke$arity$0 = simpleclojureapp$core$get_conversion_rate_$_state_machine__27863__auto____0;
simpleclojureapp$core$get_conversion_rate_$_state_machine__27863__auto__.cljs$core$IFn$_invoke$arity$1 = simpleclojureapp$core$get_conversion_rate_$_state_machine__27863__auto____1;
return simpleclojureapp$core$get_conversion_rate_$_state_machine__27863__auto__;
})()
;})(switch__27862__auto__,c__27885__auto__))
})();
var state__27887__auto__ = (function (){var statearr_30841 = f__27886__auto__.call(null);
(statearr_30841[(6)] = c__27885__auto__);

return statearr_30841;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27887__auto__);
});})(c__27885__auto__))
);

return c__27885__auto__;
});
simpleclojureapp.core.convert_currency_fn = (function simpleclojureapp$core$convert_currency_fn(){
cljs.core.swap_BANG_.call(null,simpleclojureapp.core.app_state,cljs.core.merge,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display-converted-amount","display-converted-amount",-489057037),"loading",new cljs.core.Keyword(null,"base-amount","base-amount",-2090522277),document.getElementById("base-amount").value,new cljs.core.Keyword(null,"base-currency-type","base-currency-type",725125251),document.getElementById("base-currency-type").value,new cljs.core.Keyword(null,"desired-currency-type","desired-currency-type",1681805735),document.getElementById("converted-currency-type").value], null));

return simpleclojureapp.core.get_conversion_rate.call(null,new cljs.core.Keyword(null,"base-currency-type","base-currency-type",725125251).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,simpleclojureapp.core.app_state)),new cljs.core.Keyword(null,"desired-currency-type","desired-currency-type",1681805735).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,simpleclojureapp.core.app_state)));
});
simpleclojureapp.core.currency_conversion_app = (function simpleclojureapp$core$currency_conversion_app(){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"content"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,simpleclojureapp.core.app_state))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [components.core.base_amount_input], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [components.core.base_currency_select,new cljs.core.Keyword(null,"currencies","currencies",2003336181).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,simpleclojureapp.core.app_state))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"To"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [components.core.converted_currency_select,new cljs.core.Keyword(null,"currencies","currencies",2003336181).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,simpleclojureapp.core.app_state))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"Convert",new cljs.core.Keyword(null,"class","class",-2030961996),"margin",new cljs.core.Keyword(null,"id","id",-1388402092),"button",new cljs.core.Keyword(null,"on-click","on-click",1632826543),simpleclojureapp.core.convert_currency_fn], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"result"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [components.core.render_result_conditionals,new cljs.core.Keyword(null,"display-converted-amount","display-converted-amount",-489057037).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,simpleclojureapp.core.app_state)),new cljs.core.Keyword(null,"converted-amount","converted-amount",-1436014628).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,simpleclojureapp.core.app_state)),new cljs.core.Keyword(null,"desired-currency-type","desired-currency-type",1681805735).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,simpleclojureapp.core.app_state))], null)], null)], null);
});
reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [simpleclojureapp.core.currency_conversion_app], null),document.getElementById("app"));
simpleclojureapp.core.on_js_reload = (function simpleclojureapp$core$on_js_reload(){
return null;
});

//# sourceMappingURL=core.js.map?rel=1581833680894
