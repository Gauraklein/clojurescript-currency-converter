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
var c__27885__auto___30736 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27885__auto___30736){
return (function (){
var f__27886__auto__ = (function (){var switch__27862__auto__ = ((function (c__27885__auto___30736){
return (function (state_30730){
var state_val_30731 = (state_30730[(1)]);
if((state_val_30731 === (1))){
var inst_30709 = API_KEY_NS.API_KEY.call(null);
var inst_30710 = ("https://data.fixer.io/api/symbols?access_key=" + inst_30709);
var inst_30711 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_30712 = [false];
var inst_30713 = cljs.core.PersistentHashMap.fromArrays(inst_30711,inst_30712);
var inst_30714 = cljs_http.client.get.call(null,inst_30710,inst_30713);
var state_30730__$1 = state_30730;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30730__$1,(2),inst_30714);
} else {
if((state_val_30731 === (2))){
var inst_30716 = (state_30730[(2)]);
var inst_30717 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30718 = [new cljs.core.Keyword(null,"currencies","currencies",2003336181)];
var inst_30719 = (new cljs.core.PersistentVector(null,1,(5),inst_30717,inst_30718,null));
var inst_30720 = cljs.core.sorted_map.call(null);
var inst_30721 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30722 = [new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Keyword(null,"symbols","symbols",1211743)];
var inst_30723 = (new cljs.core.PersistentVector(null,2,(5),inst_30721,inst_30722,null));
var inst_30724 = cljs.core.get_in.call(null,inst_30716,inst_30723);
var inst_30725 = cljs.core.seq.call(null,inst_30724);
var inst_30726 = cljs.core.sort_by.call(null,cljs.core.first,inst_30725);
var inst_30727 = cljs.core.into.call(null,inst_30720,inst_30726);
var inst_30728 = cljs.core.swap_BANG_.call(null,simpleclojureapp.core.app_state,cljs.core.assoc_in,inst_30719,inst_30727);
var state_30730__$1 = state_30730;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30730__$1,inst_30728);
} else {
return null;
}
}
});})(c__27885__auto___30736))
;
return ((function (switch__27862__auto__,c__27885__auto___30736){
return (function() {
var simpleclojureapp$core$state_machine__27863__auto__ = null;
var simpleclojureapp$core$state_machine__27863__auto____0 = (function (){
var statearr_30732 = [null,null,null,null,null,null,null];
(statearr_30732[(0)] = simpleclojureapp$core$state_machine__27863__auto__);

(statearr_30732[(1)] = (1));

return statearr_30732;
});
var simpleclojureapp$core$state_machine__27863__auto____1 = (function (state_30730){
while(true){
var ret_value__27864__auto__ = (function (){try{while(true){
var result__27865__auto__ = switch__27862__auto__.call(null,state_30730);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27865__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27865__auto__;
}
break;
}
}catch (e30733){if((e30733 instanceof Object)){
var ex__27866__auto__ = e30733;
var statearr_30734_30737 = state_30730;
(statearr_30734_30737[(5)] = ex__27866__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30730);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30733;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27864__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30738 = state_30730;
state_30730 = G__30738;
continue;
} else {
return ret_value__27864__auto__;
}
break;
}
});
simpleclojureapp$core$state_machine__27863__auto__ = function(state_30730){
switch(arguments.length){
case 0:
return simpleclojureapp$core$state_machine__27863__auto____0.call(this);
case 1:
return simpleclojureapp$core$state_machine__27863__auto____1.call(this,state_30730);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
simpleclojureapp$core$state_machine__27863__auto__.cljs$core$IFn$_invoke$arity$0 = simpleclojureapp$core$state_machine__27863__auto____0;
simpleclojureapp$core$state_machine__27863__auto__.cljs$core$IFn$_invoke$arity$1 = simpleclojureapp$core$state_machine__27863__auto____1;
return simpleclojureapp$core$state_machine__27863__auto__;
})()
;})(switch__27862__auto__,c__27885__auto___30736))
})();
var state__27887__auto__ = (function (){var statearr_30735 = f__27886__auto__.call(null);
(statearr_30735[(6)] = c__27885__auto___30736);

return statearr_30735;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27887__auto__);
});})(c__27885__auto___30736))
);

simpleclojureapp.core.get_conversion_rate = (function simpleclojureapp$core$get_conversion_rate(base_currency,desired_currency){
var c__27885__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27885__auto__){
return (function (){
var f__27886__auto__ = (function (){var switch__27862__auto__ = ((function (c__27885__auto__){
return (function (state_30770){
var state_val_30771 = (state_30770[(1)]);
if((state_val_30771 === (1))){
var inst_30739 = CONVERT_API_KEY_NS.CONVERT_API_KEY.call(null);
var inst_30740 = ["https://free.currconv.com","/api/v7/convert?q=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(base_currency),"_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(desired_currency),"&compact=ultra&apiKey=",inst_30739].join('');
var inst_30741 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_30742 = [false];
var inst_30743 = cljs.core.PersistentHashMap.fromArrays(inst_30741,inst_30742);
var inst_30744 = cljs_http.client.get.call(null,inst_30740,inst_30743);
var state_30770__$1 = state_30770;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30770__$1,(2),inst_30744);
} else {
if((state_val_30771 === (2))){
var inst_30746 = (state_30770[(2)]);
var inst_30747 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(base_currency),"_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(desired_currency)].join('');
var inst_30748 = cljs.core.keyword.call(null,inst_30747);
var inst_30749 = simpleclojureapp.core.query = inst_30748;
var inst_30750 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30751 = [new cljs.core.Keyword(null,"conversion-rate","conversion-rate",-824166577)];
var inst_30752 = (new cljs.core.PersistentVector(null,1,(5),inst_30750,inst_30751,null));
var inst_30753 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_30746);
var inst_30754 = cljs.core.get.call(null,inst_30753,simpleclojureapp.core.query);
var inst_30755 = cljs.core.swap_BANG_.call(null,simpleclojureapp.core.app_state,cljs.core.assoc_in,inst_30752,inst_30754);
var inst_30756 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30757 = [new cljs.core.Keyword(null,"converted-amount","converted-amount",-1436014628)];
var inst_30758 = (new cljs.core.PersistentVector(null,1,(5),inst_30756,inst_30757,null));
var inst_30759 = cljs.core.deref.call(null,simpleclojureapp.core.app_state);
var inst_30760 = new cljs.core.Keyword(null,"base-amount","base-amount",-2090522277).cljs$core$IFn$_invoke$arity$1(inst_30759);
var inst_30761 = cljs.core.deref.call(null,simpleclojureapp.core.app_state);
var inst_30762 = new cljs.core.Keyword(null,"conversion-rate","conversion-rate",-824166577).cljs$core$IFn$_invoke$arity$1(inst_30761);
var inst_30763 = (inst_30760 * inst_30762);
var inst_30764 = cljs.core.swap_BANG_.call(null,simpleclojureapp.core.app_state,cljs.core.assoc_in,inst_30758,inst_30763);
var inst_30765 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30766 = [new cljs.core.Keyword(null,"display-converted-amount","display-converted-amount",-489057037)];
var inst_30767 = (new cljs.core.PersistentVector(null,1,(5),inst_30765,inst_30766,null));
var inst_30768 = cljs.core.swap_BANG_.call(null,simpleclojureapp.core.app_state,cljs.core.assoc_in,inst_30767,true);
var state_30770__$1 = (function (){var statearr_30772 = state_30770;
(statearr_30772[(7)] = inst_30755);

(statearr_30772[(8)] = inst_30764);

(statearr_30772[(9)] = inst_30749);

return statearr_30772;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30770__$1,inst_30768);
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
var statearr_30773 = [null,null,null,null,null,null,null,null,null,null];
(statearr_30773[(0)] = simpleclojureapp$core$get_conversion_rate_$_state_machine__27863__auto__);

(statearr_30773[(1)] = (1));

return statearr_30773;
});
var simpleclojureapp$core$get_conversion_rate_$_state_machine__27863__auto____1 = (function (state_30770){
while(true){
var ret_value__27864__auto__ = (function (){try{while(true){
var result__27865__auto__ = switch__27862__auto__.call(null,state_30770);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27865__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27865__auto__;
}
break;
}
}catch (e30774){if((e30774 instanceof Object)){
var ex__27866__auto__ = e30774;
var statearr_30775_30777 = state_30770;
(statearr_30775_30777[(5)] = ex__27866__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30770);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30774;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27864__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30778 = state_30770;
state_30770 = G__30778;
continue;
} else {
return ret_value__27864__auto__;
}
break;
}
});
simpleclojureapp$core$get_conversion_rate_$_state_machine__27863__auto__ = function(state_30770){
switch(arguments.length){
case 0:
return simpleclojureapp$core$get_conversion_rate_$_state_machine__27863__auto____0.call(this);
case 1:
return simpleclojureapp$core$get_conversion_rate_$_state_machine__27863__auto____1.call(this,state_30770);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
simpleclojureapp$core$get_conversion_rate_$_state_machine__27863__auto__.cljs$core$IFn$_invoke$arity$0 = simpleclojureapp$core$get_conversion_rate_$_state_machine__27863__auto____0;
simpleclojureapp$core$get_conversion_rate_$_state_machine__27863__auto__.cljs$core$IFn$_invoke$arity$1 = simpleclojureapp$core$get_conversion_rate_$_state_machine__27863__auto____1;
return simpleclojureapp$core$get_conversion_rate_$_state_machine__27863__auto__;
})()
;})(switch__27862__auto__,c__27885__auto__))
})();
var state__27887__auto__ = (function (){var statearr_30776 = f__27886__auto__.call(null);
(statearr_30776[(6)] = c__27885__auto__);

return statearr_30776;
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

//# sourceMappingURL=core.js.map?rel=1581833514798
