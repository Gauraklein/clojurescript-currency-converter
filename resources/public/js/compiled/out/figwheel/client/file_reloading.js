// Compiled by ClojureScript 1.10.520 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('goog.html.legacyconversions');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined')){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__4131__auto__ = ((cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && ((((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string'))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372))));
if(or__4131__auto__){
return or__4131__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return goog.object.get(goog.dependencies_.nameToPath,ns);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return goog.object.get(goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__4131__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = goog.string.startsWith("clojure.",name);
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
return goog.string.startsWith("goog.",name);
}
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__28645_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__28645_SHARP_));
}),goog.object.getKeys(goog.object.get(goog.dependencies_.requires,figwheel.client.file_reloading.name__GT_path.call(null,ns)))));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependency_data !== 'undefined')){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns]));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__28646 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__28647 = null;
var count__28648 = (0);
var i__28649 = (0);
while(true){
if((i__28649 < count__28648)){
var n = cljs.core._nth.call(null,chunk__28647,i__28649);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__28650 = seq__28646;
var G__28651 = chunk__28647;
var G__28652 = count__28648;
var G__28653 = (i__28649 + (1));
seq__28646 = G__28650;
chunk__28647 = G__28651;
count__28648 = G__28652;
i__28649 = G__28653;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__28646);
if(temp__5720__auto__){
var seq__28646__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28646__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__28646__$1);
var G__28654 = cljs.core.chunk_rest.call(null,seq__28646__$1);
var G__28655 = c__4550__auto__;
var G__28656 = cljs.core.count.call(null,c__4550__auto__);
var G__28657 = (0);
seq__28646 = G__28654;
chunk__28647 = G__28655;
count__28648 = G__28656;
i__28649 = G__28657;
continue;
} else {
var n = cljs.core.first.call(null,seq__28646__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__28658 = cljs.core.next.call(null,seq__28646__$1);
var G__28659 = null;
var G__28660 = (0);
var G__28661 = (0);
seq__28646 = G__28658;
chunk__28647 = G__28659;
count__28648 = G__28660;
i__28649 = G__28661;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.in_upper_level_QMARK_ = (function figwheel$client$file_reloading$in_upper_level_QMARK_(topo_state,current_depth,dep){
return cljs.core.some.call(null,(function (p__28662){
var vec__28663 = p__28662;
var _ = cljs.core.nth.call(null,vec__28663,(0),null);
var v = cljs.core.nth.call(null,vec__28663,(1),null);
var and__4120__auto__ = v;
if(cljs.core.truth_(and__4120__auto__)){
return v.call(null,dep);
} else {
return and__4120__auto__;
}
}),cljs.core.filter.call(null,(function (p__28666){
var vec__28667 = p__28666;
var k = cljs.core.nth.call(null,vec__28667,(0),null);
var v = cljs.core.nth.call(null,vec__28667,(1),null);
return (k > current_depth);
}),topo_state));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__28679_28687 = cljs.core.seq.call(null,deps);
var chunk__28680_28688 = null;
var count__28681_28689 = (0);
var i__28682_28690 = (0);
while(true){
if((i__28682_28690 < count__28681_28689)){
var dep_28691 = cljs.core._nth.call(null,chunk__28680_28688,i__28682_28690);
if(cljs.core.truth_((function (){var and__4120__auto__ = dep_28691;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_28691));
} else {
return and__4120__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_28691,(depth + (1)),state);
} else {
}


var G__28692 = seq__28679_28687;
var G__28693 = chunk__28680_28688;
var G__28694 = count__28681_28689;
var G__28695 = (i__28682_28690 + (1));
seq__28679_28687 = G__28692;
chunk__28680_28688 = G__28693;
count__28681_28689 = G__28694;
i__28682_28690 = G__28695;
continue;
} else {
var temp__5720__auto___28696 = cljs.core.seq.call(null,seq__28679_28687);
if(temp__5720__auto___28696){
var seq__28679_28697__$1 = temp__5720__auto___28696;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28679_28697__$1)){
var c__4550__auto___28698 = cljs.core.chunk_first.call(null,seq__28679_28697__$1);
var G__28699 = cljs.core.chunk_rest.call(null,seq__28679_28697__$1);
var G__28700 = c__4550__auto___28698;
var G__28701 = cljs.core.count.call(null,c__4550__auto___28698);
var G__28702 = (0);
seq__28679_28687 = G__28699;
chunk__28680_28688 = G__28700;
count__28681_28689 = G__28701;
i__28682_28690 = G__28702;
continue;
} else {
var dep_28703 = cljs.core.first.call(null,seq__28679_28697__$1);
if(cljs.core.truth_((function (){var and__4120__auto__ = dep_28703;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_28703));
} else {
return and__4120__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_28703,(depth + (1)),state);
} else {
}


var G__28704 = cljs.core.next.call(null,seq__28679_28697__$1);
var G__28705 = null;
var G__28706 = (0);
var G__28707 = (0);
seq__28679_28687 = G__28704;
chunk__28680_28688 = G__28705;
count__28681_28689 = G__28706;
i__28682_28690 = G__28707;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__28683){
var vec__28684 = p__28683;
var seq__28685 = cljs.core.seq.call(null,vec__28684);
var first__28686 = cljs.core.first.call(null,seq__28685);
var seq__28685__$1 = cljs.core.next.call(null,seq__28685);
var x = first__28686;
var xs = seq__28685__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__28684,seq__28685,first__28686,seq__28685__$1,x,xs,get_deps__$1){
return (function (p1__28670_SHARP_){
return clojure.set.difference.call(null,p1__28670_SHARP_,x);
});})(vec__28684,seq__28685,first__28686,seq__28685__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__28708 = cljs.core.seq.call(null,provides);
var chunk__28709 = null;
var count__28710 = (0);
var i__28711 = (0);
while(true){
if((i__28711 < count__28710)){
var prov = cljs.core._nth.call(null,chunk__28709,i__28711);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__28720_28728 = cljs.core.seq.call(null,requires);
var chunk__28721_28729 = null;
var count__28722_28730 = (0);
var i__28723_28731 = (0);
while(true){
if((i__28723_28731 < count__28722_28730)){
var req_28732 = cljs.core._nth.call(null,chunk__28721_28729,i__28723_28731);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28732,prov);


var G__28733 = seq__28720_28728;
var G__28734 = chunk__28721_28729;
var G__28735 = count__28722_28730;
var G__28736 = (i__28723_28731 + (1));
seq__28720_28728 = G__28733;
chunk__28721_28729 = G__28734;
count__28722_28730 = G__28735;
i__28723_28731 = G__28736;
continue;
} else {
var temp__5720__auto___28737 = cljs.core.seq.call(null,seq__28720_28728);
if(temp__5720__auto___28737){
var seq__28720_28738__$1 = temp__5720__auto___28737;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28720_28738__$1)){
var c__4550__auto___28739 = cljs.core.chunk_first.call(null,seq__28720_28738__$1);
var G__28740 = cljs.core.chunk_rest.call(null,seq__28720_28738__$1);
var G__28741 = c__4550__auto___28739;
var G__28742 = cljs.core.count.call(null,c__4550__auto___28739);
var G__28743 = (0);
seq__28720_28728 = G__28740;
chunk__28721_28729 = G__28741;
count__28722_28730 = G__28742;
i__28723_28731 = G__28743;
continue;
} else {
var req_28744 = cljs.core.first.call(null,seq__28720_28738__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28744,prov);


var G__28745 = cljs.core.next.call(null,seq__28720_28738__$1);
var G__28746 = null;
var G__28747 = (0);
var G__28748 = (0);
seq__28720_28728 = G__28745;
chunk__28721_28729 = G__28746;
count__28722_28730 = G__28747;
i__28723_28731 = G__28748;
continue;
}
} else {
}
}
break;
}


var G__28749 = seq__28708;
var G__28750 = chunk__28709;
var G__28751 = count__28710;
var G__28752 = (i__28711 + (1));
seq__28708 = G__28749;
chunk__28709 = G__28750;
count__28710 = G__28751;
i__28711 = G__28752;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__28708);
if(temp__5720__auto__){
var seq__28708__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28708__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__28708__$1);
var G__28753 = cljs.core.chunk_rest.call(null,seq__28708__$1);
var G__28754 = c__4550__auto__;
var G__28755 = cljs.core.count.call(null,c__4550__auto__);
var G__28756 = (0);
seq__28708 = G__28753;
chunk__28709 = G__28754;
count__28710 = G__28755;
i__28711 = G__28756;
continue;
} else {
var prov = cljs.core.first.call(null,seq__28708__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__28724_28757 = cljs.core.seq.call(null,requires);
var chunk__28725_28758 = null;
var count__28726_28759 = (0);
var i__28727_28760 = (0);
while(true){
if((i__28727_28760 < count__28726_28759)){
var req_28761 = cljs.core._nth.call(null,chunk__28725_28758,i__28727_28760);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28761,prov);


var G__28762 = seq__28724_28757;
var G__28763 = chunk__28725_28758;
var G__28764 = count__28726_28759;
var G__28765 = (i__28727_28760 + (1));
seq__28724_28757 = G__28762;
chunk__28725_28758 = G__28763;
count__28726_28759 = G__28764;
i__28727_28760 = G__28765;
continue;
} else {
var temp__5720__auto___28766__$1 = cljs.core.seq.call(null,seq__28724_28757);
if(temp__5720__auto___28766__$1){
var seq__28724_28767__$1 = temp__5720__auto___28766__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28724_28767__$1)){
var c__4550__auto___28768 = cljs.core.chunk_first.call(null,seq__28724_28767__$1);
var G__28769 = cljs.core.chunk_rest.call(null,seq__28724_28767__$1);
var G__28770 = c__4550__auto___28768;
var G__28771 = cljs.core.count.call(null,c__4550__auto___28768);
var G__28772 = (0);
seq__28724_28757 = G__28769;
chunk__28725_28758 = G__28770;
count__28726_28759 = G__28771;
i__28727_28760 = G__28772;
continue;
} else {
var req_28773 = cljs.core.first.call(null,seq__28724_28767__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28773,prov);


var G__28774 = cljs.core.next.call(null,seq__28724_28767__$1);
var G__28775 = null;
var G__28776 = (0);
var G__28777 = (0);
seq__28724_28757 = G__28774;
chunk__28725_28758 = G__28775;
count__28726_28759 = G__28776;
i__28727_28760 = G__28777;
continue;
}
} else {
}
}
break;
}


var G__28778 = cljs.core.next.call(null,seq__28708__$1);
var G__28779 = null;
var G__28780 = (0);
var G__28781 = (0);
seq__28708 = G__28778;
chunk__28709 = G__28779;
count__28710 = G__28780;
i__28711 = G__28781;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__28782_28786 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__28783_28787 = null;
var count__28784_28788 = (0);
var i__28785_28789 = (0);
while(true){
if((i__28785_28789 < count__28784_28788)){
var ns_28790 = cljs.core._nth.call(null,chunk__28783_28787,i__28785_28789);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_28790);


var G__28791 = seq__28782_28786;
var G__28792 = chunk__28783_28787;
var G__28793 = count__28784_28788;
var G__28794 = (i__28785_28789 + (1));
seq__28782_28786 = G__28791;
chunk__28783_28787 = G__28792;
count__28784_28788 = G__28793;
i__28785_28789 = G__28794;
continue;
} else {
var temp__5720__auto___28795 = cljs.core.seq.call(null,seq__28782_28786);
if(temp__5720__auto___28795){
var seq__28782_28796__$1 = temp__5720__auto___28795;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28782_28796__$1)){
var c__4550__auto___28797 = cljs.core.chunk_first.call(null,seq__28782_28796__$1);
var G__28798 = cljs.core.chunk_rest.call(null,seq__28782_28796__$1);
var G__28799 = c__4550__auto___28797;
var G__28800 = cljs.core.count.call(null,c__4550__auto___28797);
var G__28801 = (0);
seq__28782_28786 = G__28798;
chunk__28783_28787 = G__28799;
count__28784_28788 = G__28800;
i__28785_28789 = G__28801;
continue;
} else {
var ns_28802 = cljs.core.first.call(null,seq__28782_28796__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_28802);


var G__28803 = cljs.core.next.call(null,seq__28782_28796__$1);
var G__28804 = null;
var G__28805 = (0);
var G__28806 = (0);
seq__28782_28786 = G__28803;
chunk__28783_28787 = G__28804;
count__28784_28788 = G__28805;
i__28785_28789 = G__28806;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__4131__auto__ = goog.require__;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__28807__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__28807 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28808__i = 0, G__28808__a = new Array(arguments.length -  0);
while (G__28808__i < G__28808__a.length) {G__28808__a[G__28808__i] = arguments[G__28808__i + 0]; ++G__28808__i;}
  args = new cljs.core.IndexedSeq(G__28808__a,0,null);
} 
return G__28807__delegate.call(this,args);};
G__28807.cljs$lang$maxFixedArity = 0;
G__28807.cljs$lang$applyTo = (function (arglist__28809){
var args = cljs.core.seq(arglist__28809);
return G__28807__delegate(args);
});
G__28807.cljs$core$IFn$_invoke$arity$variadic = G__28807__delegate;
return G__28807;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined')){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.gloader = (((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.safeLoad !== 'undefined'))?(function (p1__28810_SHARP_,p2__28811_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__28810_SHARP_)),p2__28811_SHARP_);
}):(((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.load !== 'undefined'))?(function (p1__28812_SHARP_,p2__28813_SHARP_){
return goog.net.jsloader.load(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__28812_SHARP_),p2__28813_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__28814 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__28814.addCallback(((function (G__28814){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__28814))
);

G__28814.addErrback(((function (G__28814){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__28814))
);

return G__28814;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e28815){if((e28815 instanceof Error)){
var e = e28815;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e28815;

}
}})());
});
goog.exportSymbol('figwheel.client.file_reloading.worker_import_script', figwheel.client.file_reloading.worker_import_script);
figwheel.client.file_reloading.create_node_script_import_fn = (function figwheel$client$file_reloading$create_node_script_import_fn(){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e28816){if((e28816 instanceof Error)){
var e = e28816;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e28816;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__28817 = cljs.core._EQ_;
var expr__28818 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__28817.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__28818))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__28817.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__28818))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__28817.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__28818))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__28817,expr__28818){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__28817,expr__28818))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__28820,callback){
var map__28821 = p__28820;
var map__28821__$1 = (((((!((map__28821 == null))))?(((((map__28821.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28821.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28821):map__28821);
var file_msg = map__28821__$1;
var request_url = cljs.core.get.call(null,map__28821__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__4131__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__28821,map__28821__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__28821,map__28821__$1,file_msg,request_url))
);
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_chan !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined')){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined')){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reloader_loop !== 'undefined')){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__22259__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22259__auto__){
return (function (){
var f__22260__auto__ = (function (){var switch__22236__auto__ = ((function (c__22259__auto__){
return (function (state_28859){
var state_val_28860 = (state_28859[(1)]);
if((state_val_28860 === (7))){
var inst_28855 = (state_28859[(2)]);
var state_28859__$1 = state_28859;
var statearr_28861_28887 = state_28859__$1;
(statearr_28861_28887[(2)] = inst_28855);

(statearr_28861_28887[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28860 === (1))){
var state_28859__$1 = state_28859;
var statearr_28862_28888 = state_28859__$1;
(statearr_28862_28888[(2)] = null);

(statearr_28862_28888[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28860 === (4))){
var inst_28825 = (state_28859[(7)]);
var inst_28825__$1 = (state_28859[(2)]);
var state_28859__$1 = (function (){var statearr_28863 = state_28859;
(statearr_28863[(7)] = inst_28825__$1);

return statearr_28863;
})();
if(cljs.core.truth_(inst_28825__$1)){
var statearr_28864_28889 = state_28859__$1;
(statearr_28864_28889[(1)] = (5));

} else {
var statearr_28865_28890 = state_28859__$1;
(statearr_28865_28890[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28860 === (15))){
var inst_28838 = (state_28859[(8)]);
var inst_28840 = (state_28859[(9)]);
var inst_28842 = inst_28840.call(null,inst_28838);
var state_28859__$1 = state_28859;
var statearr_28866_28891 = state_28859__$1;
(statearr_28866_28891[(2)] = inst_28842);

(statearr_28866_28891[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28860 === (13))){
var inst_28849 = (state_28859[(2)]);
var state_28859__$1 = state_28859;
var statearr_28867_28892 = state_28859__$1;
(statearr_28867_28892[(2)] = inst_28849);

(statearr_28867_28892[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28860 === (6))){
var state_28859__$1 = state_28859;
var statearr_28868_28893 = state_28859__$1;
(statearr_28868_28893[(2)] = null);

(statearr_28868_28893[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28860 === (17))){
var inst_28846 = (state_28859[(2)]);
var state_28859__$1 = state_28859;
var statearr_28869_28894 = state_28859__$1;
(statearr_28869_28894[(2)] = inst_28846);

(statearr_28869_28894[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28860 === (3))){
var inst_28857 = (state_28859[(2)]);
var state_28859__$1 = state_28859;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28859__$1,inst_28857);
} else {
if((state_val_28860 === (12))){
var state_28859__$1 = state_28859;
var statearr_28870_28895 = state_28859__$1;
(statearr_28870_28895[(2)] = null);

(statearr_28870_28895[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28860 === (2))){
var state_28859__$1 = state_28859;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28859__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_28860 === (11))){
var inst_28830 = (state_28859[(10)]);
var inst_28836 = figwheel.client.file_reloading.blocking_load.call(null,inst_28830);
var state_28859__$1 = state_28859;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28859__$1,(14),inst_28836);
} else {
if((state_val_28860 === (9))){
var inst_28830 = (state_28859[(10)]);
var state_28859__$1 = state_28859;
if(cljs.core.truth_(inst_28830)){
var statearr_28871_28896 = state_28859__$1;
(statearr_28871_28896[(1)] = (11));

} else {
var statearr_28872_28897 = state_28859__$1;
(statearr_28872_28897[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28860 === (5))){
var inst_28831 = (state_28859[(11)]);
var inst_28825 = (state_28859[(7)]);
var inst_28830 = cljs.core.nth.call(null,inst_28825,(0),null);
var inst_28831__$1 = cljs.core.nth.call(null,inst_28825,(1),null);
var state_28859__$1 = (function (){var statearr_28873 = state_28859;
(statearr_28873[(11)] = inst_28831__$1);

(statearr_28873[(10)] = inst_28830);

return statearr_28873;
})();
if(cljs.core.truth_(inst_28831__$1)){
var statearr_28874_28898 = state_28859__$1;
(statearr_28874_28898[(1)] = (8));

} else {
var statearr_28875_28899 = state_28859__$1;
(statearr_28875_28899[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28860 === (14))){
var inst_28840 = (state_28859[(9)]);
var inst_28830 = (state_28859[(10)]);
var inst_28838 = (state_28859[(2)]);
var inst_28839 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_28840__$1 = cljs.core.get.call(null,inst_28839,inst_28830);
var state_28859__$1 = (function (){var statearr_28876 = state_28859;
(statearr_28876[(8)] = inst_28838);

(statearr_28876[(9)] = inst_28840__$1);

return statearr_28876;
})();
if(cljs.core.truth_(inst_28840__$1)){
var statearr_28877_28900 = state_28859__$1;
(statearr_28877_28900[(1)] = (15));

} else {
var statearr_28878_28901 = state_28859__$1;
(statearr_28878_28901[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28860 === (16))){
var inst_28838 = (state_28859[(8)]);
var inst_28844 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_28838);
var state_28859__$1 = state_28859;
var statearr_28879_28902 = state_28859__$1;
(statearr_28879_28902[(2)] = inst_28844);

(statearr_28879_28902[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28860 === (10))){
var inst_28851 = (state_28859[(2)]);
var state_28859__$1 = (function (){var statearr_28880 = state_28859;
(statearr_28880[(12)] = inst_28851);

return statearr_28880;
})();
var statearr_28881_28903 = state_28859__$1;
(statearr_28881_28903[(2)] = null);

(statearr_28881_28903[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28860 === (8))){
var inst_28831 = (state_28859[(11)]);
var inst_28833 = eval(inst_28831);
var state_28859__$1 = state_28859;
var statearr_28882_28904 = state_28859__$1;
(statearr_28882_28904[(2)] = inst_28833);

(statearr_28882_28904[(1)] = (10));


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
});})(c__22259__auto__))
;
return ((function (switch__22236__auto__,c__22259__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__22237__auto__ = null;
var figwheel$client$file_reloading$state_machine__22237__auto____0 = (function (){
var statearr_28883 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28883[(0)] = figwheel$client$file_reloading$state_machine__22237__auto__);

(statearr_28883[(1)] = (1));

return statearr_28883;
});
var figwheel$client$file_reloading$state_machine__22237__auto____1 = (function (state_28859){
while(true){
var ret_value__22238__auto__ = (function (){try{while(true){
var result__22239__auto__ = switch__22236__auto__.call(null,state_28859);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22239__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22239__auto__;
}
break;
}
}catch (e28884){if((e28884 instanceof Object)){
var ex__22240__auto__ = e28884;
var statearr_28885_28905 = state_28859;
(statearr_28885_28905[(5)] = ex__22240__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28859);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28884;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22238__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28906 = state_28859;
state_28859 = G__28906;
continue;
} else {
return ret_value__22238__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__22237__auto__ = function(state_28859){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__22237__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__22237__auto____1.call(this,state_28859);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__22237__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__22237__auto____0;
figwheel$client$file_reloading$state_machine__22237__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__22237__auto____1;
return figwheel$client$file_reloading$state_machine__22237__auto__;
})()
;})(switch__22236__auto__,c__22259__auto__))
})();
var state__22261__auto__ = (function (){var statearr_28886 = f__22260__auto__.call(null);
(statearr_28886[(6)] = c__22259__auto__);

return statearr_28886;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22261__auto__);
});})(c__22259__auto__))
);

return c__22259__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__28908 = arguments.length;
switch (G__28908) {
case 1:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1 = (function (url){
return figwheel.client.file_reloading.queued_file_reload.call(null,url,null);
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2 = (function (url,opt_source_text){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [url,opt_source_text], null));
});

figwheel.client.file_reloading.queued_file_reload.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__28910,callback){
var map__28911 = p__28910;
var map__28911__$1 = (((((!((map__28911 == null))))?(((((map__28911.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28911.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28911):map__28911);
var file_msg = map__28911__$1;
var namespace = cljs.core.get.call(null,map__28911__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__28911,map__28911__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__28911,map__28911__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__28913){
var map__28914 = p__28913;
var map__28914__$1 = (((((!((map__28914 == null))))?(((((map__28914.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28914.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28914):map__28914);
var file_msg = map__28914__$1;
var namespace = cljs.core.get.call(null,map__28914__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return (!((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null)));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__28916){
var map__28917 = p__28916;
var map__28917__$1 = (((((!((map__28917 == null))))?(((((map__28917.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28917.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28917):map__28917);
var file_msg = map__28917__$1;
var namespace = cljs.core.get.call(null,map__28917__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__4120__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__4120__auto__){
var or__4131__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
var or__4131__auto____$2 = figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
if(cljs.core.truth_(or__4131__auto____$2)){
return or__4131__auto____$2;
} else {
return figwheel.client.file_reloading.ns_exists_QMARK_.call(null,namespace);
}
}
}
} else {
return and__4120__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__28919,callback){
var map__28920 = p__28919;
var map__28920__$1 = (((((!((map__28920 == null))))?(((((map__28920.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28920.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28920):map__28920);
var file_msg = map__28920__$1;
var request_url = cljs.core.get.call(null,map__28920__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__28920__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__22259__auto___28970 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22259__auto___28970,out){
return (function (){
var f__22260__auto__ = (function (){var switch__22236__auto__ = ((function (c__22259__auto___28970,out){
return (function (state_28955){
var state_val_28956 = (state_28955[(1)]);
if((state_val_28956 === (1))){
var inst_28929 = cljs.core.seq.call(null,files);
var inst_28930 = cljs.core.first.call(null,inst_28929);
var inst_28931 = cljs.core.next.call(null,inst_28929);
var inst_28932 = files;
var state_28955__$1 = (function (){var statearr_28957 = state_28955;
(statearr_28957[(7)] = inst_28931);

(statearr_28957[(8)] = inst_28932);

(statearr_28957[(9)] = inst_28930);

return statearr_28957;
})();
var statearr_28958_28971 = state_28955__$1;
(statearr_28958_28971[(2)] = null);

(statearr_28958_28971[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28956 === (2))){
var inst_28938 = (state_28955[(10)]);
var inst_28932 = (state_28955[(8)]);
var inst_28937 = cljs.core.seq.call(null,inst_28932);
var inst_28938__$1 = cljs.core.first.call(null,inst_28937);
var inst_28939 = cljs.core.next.call(null,inst_28937);
var inst_28940 = (inst_28938__$1 == null);
var inst_28941 = cljs.core.not.call(null,inst_28940);
var state_28955__$1 = (function (){var statearr_28959 = state_28955;
(statearr_28959[(10)] = inst_28938__$1);

(statearr_28959[(11)] = inst_28939);

return statearr_28959;
})();
if(inst_28941){
var statearr_28960_28972 = state_28955__$1;
(statearr_28960_28972[(1)] = (4));

} else {
var statearr_28961_28973 = state_28955__$1;
(statearr_28961_28973[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28956 === (3))){
var inst_28953 = (state_28955[(2)]);
var state_28955__$1 = state_28955;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28955__$1,inst_28953);
} else {
if((state_val_28956 === (4))){
var inst_28938 = (state_28955[(10)]);
var inst_28943 = figwheel.client.file_reloading.reload_js_file.call(null,inst_28938);
var state_28955__$1 = state_28955;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28955__$1,(7),inst_28943);
} else {
if((state_val_28956 === (5))){
var inst_28949 = cljs.core.async.close_BANG_.call(null,out);
var state_28955__$1 = state_28955;
var statearr_28962_28974 = state_28955__$1;
(statearr_28962_28974[(2)] = inst_28949);

(statearr_28962_28974[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28956 === (6))){
var inst_28951 = (state_28955[(2)]);
var state_28955__$1 = state_28955;
var statearr_28963_28975 = state_28955__$1;
(statearr_28963_28975[(2)] = inst_28951);

(statearr_28963_28975[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28956 === (7))){
var inst_28939 = (state_28955[(11)]);
var inst_28945 = (state_28955[(2)]);
var inst_28946 = cljs.core.async.put_BANG_.call(null,out,inst_28945);
var inst_28932 = inst_28939;
var state_28955__$1 = (function (){var statearr_28964 = state_28955;
(statearr_28964[(8)] = inst_28932);

(statearr_28964[(12)] = inst_28946);

return statearr_28964;
})();
var statearr_28965_28976 = state_28955__$1;
(statearr_28965_28976[(2)] = null);

(statearr_28965_28976[(1)] = (2));


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
});})(c__22259__auto___28970,out))
;
return ((function (switch__22236__auto__,c__22259__auto___28970,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__22237__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__22237__auto____0 = (function (){
var statearr_28966 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28966[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__22237__auto__);

(statearr_28966[(1)] = (1));

return statearr_28966;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__22237__auto____1 = (function (state_28955){
while(true){
var ret_value__22238__auto__ = (function (){try{while(true){
var result__22239__auto__ = switch__22236__auto__.call(null,state_28955);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22239__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22239__auto__;
}
break;
}
}catch (e28967){if((e28967 instanceof Object)){
var ex__22240__auto__ = e28967;
var statearr_28968_28977 = state_28955;
(statearr_28968_28977[(5)] = ex__22240__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28955);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28967;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22238__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28978 = state_28955;
state_28955 = G__28978;
continue;
} else {
return ret_value__22238__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__22237__auto__ = function(state_28955){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__22237__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__22237__auto____1.call(this,state_28955);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__22237__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__22237__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__22237__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__22237__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__22237__auto__;
})()
;})(switch__22236__auto__,c__22259__auto___28970,out))
})();
var state__22261__auto__ = (function (){var statearr_28969 = f__22260__auto__.call(null);
(statearr_28969[(6)] = c__22259__auto___28970);

return statearr_28969;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22261__auto__);
});})(c__22259__auto___28970,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__28979,opts){
var map__28980 = p__28979;
var map__28980__$1 = (((((!((map__28980 == null))))?(((((map__28980.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28980.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28980):map__28980);
var eval_body = cljs.core.get.call(null,map__28980__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__28980__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__4120__auto__ = eval_body;
if(cljs.core.truth_(and__4120__auto__)){
return typeof eval_body === 'string';
} else {
return and__4120__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e28982){var e = e28982;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__5718__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__28983_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__28983_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__5718__auto__)){
var file_msg = temp__5718__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__28984){
var vec__28985 = p__28984;
var k = cljs.core.nth.call(null,vec__28985,(0),null);
var v = cljs.core.nth.call(null,vec__28985,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__28988){
var vec__28989 = p__28988;
var k = cljs.core.nth.call(null,vec__28989,(0),null);
var v = cljs.core.nth.call(null,vec__28989,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__28995,p__28996){
var map__28997 = p__28995;
var map__28997__$1 = (((((!((map__28997 == null))))?(((((map__28997.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28997.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28997):map__28997);
var opts = map__28997__$1;
var before_jsload = cljs.core.get.call(null,map__28997__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__28997__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__28997__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__28998 = p__28996;
var map__28998__$1 = (((((!((map__28998 == null))))?(((((map__28998.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28998.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28998):map__28998);
var msg = map__28998__$1;
var files = cljs.core.get.call(null,map__28998__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__28998__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__28998__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__22259__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22259__auto__,map__28997,map__28997__$1,opts,before_jsload,on_jsload,reload_dependents,map__28998,map__28998__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__22260__auto__ = (function (){var switch__22236__auto__ = ((function (c__22259__auto__,map__28997,map__28997__$1,opts,before_jsload,on_jsload,reload_dependents,map__28998,map__28998__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_29152){
var state_val_29153 = (state_29152[(1)]);
if((state_val_29153 === (7))){
var inst_29015 = (state_29152[(7)]);
var inst_29014 = (state_29152[(8)]);
var inst_29013 = (state_29152[(9)]);
var inst_29012 = (state_29152[(10)]);
var inst_29020 = cljs.core._nth.call(null,inst_29013,inst_29015);
var inst_29021 = figwheel.client.file_reloading.eval_body.call(null,inst_29020,opts);
var inst_29022 = (inst_29015 + (1));
var tmp29154 = inst_29014;
var tmp29155 = inst_29013;
var tmp29156 = inst_29012;
var inst_29012__$1 = tmp29156;
var inst_29013__$1 = tmp29155;
var inst_29014__$1 = tmp29154;
var inst_29015__$1 = inst_29022;
var state_29152__$1 = (function (){var statearr_29157 = state_29152;
(statearr_29157[(11)] = inst_29021);

(statearr_29157[(7)] = inst_29015__$1);

(statearr_29157[(8)] = inst_29014__$1);

(statearr_29157[(9)] = inst_29013__$1);

(statearr_29157[(10)] = inst_29012__$1);

return statearr_29157;
})();
var statearr_29158_29241 = state_29152__$1;
(statearr_29158_29241[(2)] = null);

(statearr_29158_29241[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29153 === (20))){
var inst_29055 = (state_29152[(12)]);
var inst_29063 = figwheel.client.file_reloading.sort_files.call(null,inst_29055);
var state_29152__$1 = state_29152;
var statearr_29159_29242 = state_29152__$1;
(statearr_29159_29242[(2)] = inst_29063);

(statearr_29159_29242[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29153 === (27))){
var state_29152__$1 = state_29152;
var statearr_29160_29243 = state_29152__$1;
(statearr_29160_29243[(2)] = null);

(statearr_29160_29243[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29153 === (1))){
var inst_29004 = (state_29152[(13)]);
var inst_29001 = before_jsload.call(null,files);
var inst_29002 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_29003 = (function (){return ((function (inst_29004,inst_29001,inst_29002,state_val_29153,c__22259__auto__,map__28997,map__28997__$1,opts,before_jsload,on_jsload,reload_dependents,map__28998,map__28998__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__28992_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__28992_SHARP_);
});
;})(inst_29004,inst_29001,inst_29002,state_val_29153,c__22259__auto__,map__28997,map__28997__$1,opts,before_jsload,on_jsload,reload_dependents,map__28998,map__28998__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29004__$1 = cljs.core.filter.call(null,inst_29003,files);
var inst_29005 = cljs.core.not_empty.call(null,inst_29004__$1);
var state_29152__$1 = (function (){var statearr_29161 = state_29152;
(statearr_29161[(14)] = inst_29001);

(statearr_29161[(15)] = inst_29002);

(statearr_29161[(13)] = inst_29004__$1);

return statearr_29161;
})();
if(cljs.core.truth_(inst_29005)){
var statearr_29162_29244 = state_29152__$1;
(statearr_29162_29244[(1)] = (2));

} else {
var statearr_29163_29245 = state_29152__$1;
(statearr_29163_29245[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29153 === (24))){
var state_29152__$1 = state_29152;
var statearr_29164_29246 = state_29152__$1;
(statearr_29164_29246[(2)] = null);

(statearr_29164_29246[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29153 === (39))){
var inst_29105 = (state_29152[(16)]);
var state_29152__$1 = state_29152;
var statearr_29165_29247 = state_29152__$1;
(statearr_29165_29247[(2)] = inst_29105);

(statearr_29165_29247[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29153 === (46))){
var inst_29147 = (state_29152[(2)]);
var state_29152__$1 = state_29152;
var statearr_29166_29248 = state_29152__$1;
(statearr_29166_29248[(2)] = inst_29147);

(statearr_29166_29248[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29153 === (4))){
var inst_29049 = (state_29152[(2)]);
var inst_29050 = cljs.core.List.EMPTY;
var inst_29051 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_29050);
var inst_29052 = (function (){return ((function (inst_29049,inst_29050,inst_29051,state_val_29153,c__22259__auto__,map__28997,map__28997__$1,opts,before_jsload,on_jsload,reload_dependents,map__28998,map__28998__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__28993_SHARP_){
var and__4120__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__28993_SHARP_);
if(cljs.core.truth_(and__4120__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__28993_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__28993_SHARP_))));
} else {
return and__4120__auto__;
}
});
;})(inst_29049,inst_29050,inst_29051,state_val_29153,c__22259__auto__,map__28997,map__28997__$1,opts,before_jsload,on_jsload,reload_dependents,map__28998,map__28998__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29053 = cljs.core.filter.call(null,inst_29052,files);
var inst_29054 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_29055 = cljs.core.concat.call(null,inst_29053,inst_29054);
var state_29152__$1 = (function (){var statearr_29167 = state_29152;
(statearr_29167[(17)] = inst_29049);

(statearr_29167[(18)] = inst_29051);

(statearr_29167[(12)] = inst_29055);

return statearr_29167;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_29168_29249 = state_29152__$1;
(statearr_29168_29249[(1)] = (16));

} else {
var statearr_29169_29250 = state_29152__$1;
(statearr_29169_29250[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29153 === (15))){
var inst_29039 = (state_29152[(2)]);
var state_29152__$1 = state_29152;
var statearr_29170_29251 = state_29152__$1;
(statearr_29170_29251[(2)] = inst_29039);

(statearr_29170_29251[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29153 === (21))){
var inst_29065 = (state_29152[(19)]);
var inst_29065__$1 = (state_29152[(2)]);
var inst_29066 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_29065__$1);
var state_29152__$1 = (function (){var statearr_29171 = state_29152;
(statearr_29171[(19)] = inst_29065__$1);

return statearr_29171;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29152__$1,(22),inst_29066);
} else {
if((state_val_29153 === (31))){
var inst_29150 = (state_29152[(2)]);
var state_29152__$1 = state_29152;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29152__$1,inst_29150);
} else {
if((state_val_29153 === (32))){
var inst_29105 = (state_29152[(16)]);
var inst_29110 = inst_29105.cljs$lang$protocol_mask$partition0$;
var inst_29111 = (inst_29110 & (64));
var inst_29112 = inst_29105.cljs$core$ISeq$;
var inst_29113 = (cljs.core.PROTOCOL_SENTINEL === inst_29112);
var inst_29114 = ((inst_29111) || (inst_29113));
var state_29152__$1 = state_29152;
if(cljs.core.truth_(inst_29114)){
var statearr_29172_29252 = state_29152__$1;
(statearr_29172_29252[(1)] = (35));

} else {
var statearr_29173_29253 = state_29152__$1;
(statearr_29173_29253[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29153 === (40))){
var inst_29127 = (state_29152[(20)]);
var inst_29126 = (state_29152[(2)]);
var inst_29127__$1 = cljs.core.get.call(null,inst_29126,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_29128 = cljs.core.get.call(null,inst_29126,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_29129 = cljs.core.not_empty.call(null,inst_29127__$1);
var state_29152__$1 = (function (){var statearr_29174 = state_29152;
(statearr_29174[(20)] = inst_29127__$1);

(statearr_29174[(21)] = inst_29128);

return statearr_29174;
})();
if(cljs.core.truth_(inst_29129)){
var statearr_29175_29254 = state_29152__$1;
(statearr_29175_29254[(1)] = (41));

} else {
var statearr_29176_29255 = state_29152__$1;
(statearr_29176_29255[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29153 === (33))){
var state_29152__$1 = state_29152;
var statearr_29177_29256 = state_29152__$1;
(statearr_29177_29256[(2)] = false);

(statearr_29177_29256[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29153 === (13))){
var inst_29025 = (state_29152[(22)]);
var inst_29029 = cljs.core.chunk_first.call(null,inst_29025);
var inst_29030 = cljs.core.chunk_rest.call(null,inst_29025);
var inst_29031 = cljs.core.count.call(null,inst_29029);
var inst_29012 = inst_29030;
var inst_29013 = inst_29029;
var inst_29014 = inst_29031;
var inst_29015 = (0);
var state_29152__$1 = (function (){var statearr_29178 = state_29152;
(statearr_29178[(7)] = inst_29015);

(statearr_29178[(8)] = inst_29014);

(statearr_29178[(9)] = inst_29013);

(statearr_29178[(10)] = inst_29012);

return statearr_29178;
})();
var statearr_29179_29257 = state_29152__$1;
(statearr_29179_29257[(2)] = null);

(statearr_29179_29257[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29153 === (22))){
var inst_29065 = (state_29152[(19)]);
var inst_29068 = (state_29152[(23)]);
var inst_29069 = (state_29152[(24)]);
var inst_29073 = (state_29152[(25)]);
var inst_29068__$1 = (state_29152[(2)]);
var inst_29069__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_29068__$1);
var inst_29070 = (function (){var all_files = inst_29065;
var res_SINGLEQUOTE_ = inst_29068__$1;
var res = inst_29069__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_29065,inst_29068,inst_29069,inst_29073,inst_29068__$1,inst_29069__$1,state_val_29153,c__22259__auto__,map__28997,map__28997__$1,opts,before_jsload,on_jsload,reload_dependents,map__28998,map__28998__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__28994_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__28994_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_29065,inst_29068,inst_29069,inst_29073,inst_29068__$1,inst_29069__$1,state_val_29153,c__22259__auto__,map__28997,map__28997__$1,opts,before_jsload,on_jsload,reload_dependents,map__28998,map__28998__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29071 = cljs.core.filter.call(null,inst_29070,inst_29068__$1);
var inst_29072 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_29073__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_29072);
var inst_29074 = cljs.core.not_empty.call(null,inst_29073__$1);
var state_29152__$1 = (function (){var statearr_29180 = state_29152;
(statearr_29180[(23)] = inst_29068__$1);

(statearr_29180[(24)] = inst_29069__$1);

(statearr_29180[(26)] = inst_29071);

(statearr_29180[(25)] = inst_29073__$1);

return statearr_29180;
})();
if(cljs.core.truth_(inst_29074)){
var statearr_29181_29258 = state_29152__$1;
(statearr_29181_29258[(1)] = (23));

} else {
var statearr_29182_29259 = state_29152__$1;
(statearr_29182_29259[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29153 === (36))){
var state_29152__$1 = state_29152;
var statearr_29183_29260 = state_29152__$1;
(statearr_29183_29260[(2)] = false);

(statearr_29183_29260[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29153 === (41))){
var inst_29127 = (state_29152[(20)]);
var inst_29131 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_29132 = cljs.core.map.call(null,inst_29131,inst_29127);
var inst_29133 = cljs.core.pr_str.call(null,inst_29132);
var inst_29134 = ["figwheel-no-load meta-data: ",inst_29133].join('');
var inst_29135 = figwheel.client.utils.log.call(null,inst_29134);
var state_29152__$1 = state_29152;
var statearr_29184_29261 = state_29152__$1;
(statearr_29184_29261[(2)] = inst_29135);

(statearr_29184_29261[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29153 === (43))){
var inst_29128 = (state_29152[(21)]);
var inst_29138 = (state_29152[(2)]);
var inst_29139 = cljs.core.not_empty.call(null,inst_29128);
var state_29152__$1 = (function (){var statearr_29185 = state_29152;
(statearr_29185[(27)] = inst_29138);

return statearr_29185;
})();
if(cljs.core.truth_(inst_29139)){
var statearr_29186_29262 = state_29152__$1;
(statearr_29186_29262[(1)] = (44));

} else {
var statearr_29187_29263 = state_29152__$1;
(statearr_29187_29263[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29153 === (29))){
var inst_29105 = (state_29152[(16)]);
var inst_29065 = (state_29152[(19)]);
var inst_29068 = (state_29152[(23)]);
var inst_29069 = (state_29152[(24)]);
var inst_29071 = (state_29152[(26)]);
var inst_29073 = (state_29152[(25)]);
var inst_29101 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_29104 = (function (){var all_files = inst_29065;
var res_SINGLEQUOTE_ = inst_29068;
var res = inst_29069;
var files_not_loaded = inst_29071;
var dependencies_that_loaded = inst_29073;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29105,inst_29065,inst_29068,inst_29069,inst_29071,inst_29073,inst_29101,state_val_29153,c__22259__auto__,map__28997,map__28997__$1,opts,before_jsload,on_jsload,reload_dependents,map__28998,map__28998__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__29103){
var map__29188 = p__29103;
var map__29188__$1 = (((((!((map__29188 == null))))?(((((map__29188.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29188.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29188):map__29188);
var namespace = cljs.core.get.call(null,map__29188__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29105,inst_29065,inst_29068,inst_29069,inst_29071,inst_29073,inst_29101,state_val_29153,c__22259__auto__,map__28997,map__28997__$1,opts,before_jsload,on_jsload,reload_dependents,map__28998,map__28998__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29105__$1 = cljs.core.group_by.call(null,inst_29104,inst_29071);
var inst_29107 = (inst_29105__$1 == null);
var inst_29108 = cljs.core.not.call(null,inst_29107);
var state_29152__$1 = (function (){var statearr_29190 = state_29152;
(statearr_29190[(16)] = inst_29105__$1);

(statearr_29190[(28)] = inst_29101);

return statearr_29190;
})();
if(inst_29108){
var statearr_29191_29264 = state_29152__$1;
(statearr_29191_29264[(1)] = (32));

} else {
var statearr_29192_29265 = state_29152__$1;
(statearr_29192_29265[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29153 === (44))){
var inst_29128 = (state_29152[(21)]);
var inst_29141 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_29128);
var inst_29142 = cljs.core.pr_str.call(null,inst_29141);
var inst_29143 = ["not required: ",inst_29142].join('');
var inst_29144 = figwheel.client.utils.log.call(null,inst_29143);
var state_29152__$1 = state_29152;
var statearr_29193_29266 = state_29152__$1;
(statearr_29193_29266[(2)] = inst_29144);

(statearr_29193_29266[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29153 === (6))){
var inst_29046 = (state_29152[(2)]);
var state_29152__$1 = state_29152;
var statearr_29194_29267 = state_29152__$1;
(statearr_29194_29267[(2)] = inst_29046);

(statearr_29194_29267[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29153 === (28))){
var inst_29071 = (state_29152[(26)]);
var inst_29098 = (state_29152[(2)]);
var inst_29099 = cljs.core.not_empty.call(null,inst_29071);
var state_29152__$1 = (function (){var statearr_29195 = state_29152;
(statearr_29195[(29)] = inst_29098);

return statearr_29195;
})();
if(cljs.core.truth_(inst_29099)){
var statearr_29196_29268 = state_29152__$1;
(statearr_29196_29268[(1)] = (29));

} else {
var statearr_29197_29269 = state_29152__$1;
(statearr_29197_29269[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29153 === (25))){
var inst_29069 = (state_29152[(24)]);
var inst_29085 = (state_29152[(2)]);
var inst_29086 = cljs.core.not_empty.call(null,inst_29069);
var state_29152__$1 = (function (){var statearr_29198 = state_29152;
(statearr_29198[(30)] = inst_29085);

return statearr_29198;
})();
if(cljs.core.truth_(inst_29086)){
var statearr_29199_29270 = state_29152__$1;
(statearr_29199_29270[(1)] = (26));

} else {
var statearr_29200_29271 = state_29152__$1;
(statearr_29200_29271[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29153 === (34))){
var inst_29121 = (state_29152[(2)]);
var state_29152__$1 = state_29152;
if(cljs.core.truth_(inst_29121)){
var statearr_29201_29272 = state_29152__$1;
(statearr_29201_29272[(1)] = (38));

} else {
var statearr_29202_29273 = state_29152__$1;
(statearr_29202_29273[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29153 === (17))){
var state_29152__$1 = state_29152;
var statearr_29203_29274 = state_29152__$1;
(statearr_29203_29274[(2)] = recompile_dependents);

(statearr_29203_29274[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29153 === (3))){
var state_29152__$1 = state_29152;
var statearr_29204_29275 = state_29152__$1;
(statearr_29204_29275[(2)] = null);

(statearr_29204_29275[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29153 === (12))){
var inst_29042 = (state_29152[(2)]);
var state_29152__$1 = state_29152;
var statearr_29205_29276 = state_29152__$1;
(statearr_29205_29276[(2)] = inst_29042);

(statearr_29205_29276[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29153 === (2))){
var inst_29004 = (state_29152[(13)]);
var inst_29011 = cljs.core.seq.call(null,inst_29004);
var inst_29012 = inst_29011;
var inst_29013 = null;
var inst_29014 = (0);
var inst_29015 = (0);
var state_29152__$1 = (function (){var statearr_29206 = state_29152;
(statearr_29206[(7)] = inst_29015);

(statearr_29206[(8)] = inst_29014);

(statearr_29206[(9)] = inst_29013);

(statearr_29206[(10)] = inst_29012);

return statearr_29206;
})();
var statearr_29207_29277 = state_29152__$1;
(statearr_29207_29277[(2)] = null);

(statearr_29207_29277[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29153 === (23))){
var inst_29065 = (state_29152[(19)]);
var inst_29068 = (state_29152[(23)]);
var inst_29069 = (state_29152[(24)]);
var inst_29071 = (state_29152[(26)]);
var inst_29073 = (state_29152[(25)]);
var inst_29076 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_29078 = (function (){var all_files = inst_29065;
var res_SINGLEQUOTE_ = inst_29068;
var res = inst_29069;
var files_not_loaded = inst_29071;
var dependencies_that_loaded = inst_29073;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29065,inst_29068,inst_29069,inst_29071,inst_29073,inst_29076,state_val_29153,c__22259__auto__,map__28997,map__28997__$1,opts,before_jsload,on_jsload,reload_dependents,map__28998,map__28998__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__29077){
var map__29208 = p__29077;
var map__29208__$1 = (((((!((map__29208 == null))))?(((((map__29208.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29208.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29208):map__29208);
var request_url = cljs.core.get.call(null,map__29208__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29065,inst_29068,inst_29069,inst_29071,inst_29073,inst_29076,state_val_29153,c__22259__auto__,map__28997,map__28997__$1,opts,before_jsload,on_jsload,reload_dependents,map__28998,map__28998__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29079 = cljs.core.reverse.call(null,inst_29073);
var inst_29080 = cljs.core.map.call(null,inst_29078,inst_29079);
var inst_29081 = cljs.core.pr_str.call(null,inst_29080);
var inst_29082 = figwheel.client.utils.log.call(null,inst_29081);
var state_29152__$1 = (function (){var statearr_29210 = state_29152;
(statearr_29210[(31)] = inst_29076);

return statearr_29210;
})();
var statearr_29211_29278 = state_29152__$1;
(statearr_29211_29278[(2)] = inst_29082);

(statearr_29211_29278[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29153 === (35))){
var state_29152__$1 = state_29152;
var statearr_29212_29279 = state_29152__$1;
(statearr_29212_29279[(2)] = true);

(statearr_29212_29279[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29153 === (19))){
var inst_29055 = (state_29152[(12)]);
var inst_29061 = figwheel.client.file_reloading.expand_files.call(null,inst_29055);
var state_29152__$1 = state_29152;
var statearr_29213_29280 = state_29152__$1;
(statearr_29213_29280[(2)] = inst_29061);

(statearr_29213_29280[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29153 === (11))){
var state_29152__$1 = state_29152;
var statearr_29214_29281 = state_29152__$1;
(statearr_29214_29281[(2)] = null);

(statearr_29214_29281[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29153 === (9))){
var inst_29044 = (state_29152[(2)]);
var state_29152__$1 = state_29152;
var statearr_29215_29282 = state_29152__$1;
(statearr_29215_29282[(2)] = inst_29044);

(statearr_29215_29282[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29153 === (5))){
var inst_29015 = (state_29152[(7)]);
var inst_29014 = (state_29152[(8)]);
var inst_29017 = (inst_29015 < inst_29014);
var inst_29018 = inst_29017;
var state_29152__$1 = state_29152;
if(cljs.core.truth_(inst_29018)){
var statearr_29216_29283 = state_29152__$1;
(statearr_29216_29283[(1)] = (7));

} else {
var statearr_29217_29284 = state_29152__$1;
(statearr_29217_29284[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29153 === (14))){
var inst_29025 = (state_29152[(22)]);
var inst_29034 = cljs.core.first.call(null,inst_29025);
var inst_29035 = figwheel.client.file_reloading.eval_body.call(null,inst_29034,opts);
var inst_29036 = cljs.core.next.call(null,inst_29025);
var inst_29012 = inst_29036;
var inst_29013 = null;
var inst_29014 = (0);
var inst_29015 = (0);
var state_29152__$1 = (function (){var statearr_29218 = state_29152;
(statearr_29218[(32)] = inst_29035);

(statearr_29218[(7)] = inst_29015);

(statearr_29218[(8)] = inst_29014);

(statearr_29218[(9)] = inst_29013);

(statearr_29218[(10)] = inst_29012);

return statearr_29218;
})();
var statearr_29219_29285 = state_29152__$1;
(statearr_29219_29285[(2)] = null);

(statearr_29219_29285[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29153 === (45))){
var state_29152__$1 = state_29152;
var statearr_29220_29286 = state_29152__$1;
(statearr_29220_29286[(2)] = null);

(statearr_29220_29286[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29153 === (26))){
var inst_29065 = (state_29152[(19)]);
var inst_29068 = (state_29152[(23)]);
var inst_29069 = (state_29152[(24)]);
var inst_29071 = (state_29152[(26)]);
var inst_29073 = (state_29152[(25)]);
var inst_29088 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_29090 = (function (){var all_files = inst_29065;
var res_SINGLEQUOTE_ = inst_29068;
var res = inst_29069;
var files_not_loaded = inst_29071;
var dependencies_that_loaded = inst_29073;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29065,inst_29068,inst_29069,inst_29071,inst_29073,inst_29088,state_val_29153,c__22259__auto__,map__28997,map__28997__$1,opts,before_jsload,on_jsload,reload_dependents,map__28998,map__28998__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__29089){
var map__29221 = p__29089;
var map__29221__$1 = (((((!((map__29221 == null))))?(((((map__29221.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29221.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29221):map__29221);
var namespace = cljs.core.get.call(null,map__29221__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__29221__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29065,inst_29068,inst_29069,inst_29071,inst_29073,inst_29088,state_val_29153,c__22259__auto__,map__28997,map__28997__$1,opts,before_jsload,on_jsload,reload_dependents,map__28998,map__28998__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29091 = cljs.core.map.call(null,inst_29090,inst_29069);
var inst_29092 = cljs.core.pr_str.call(null,inst_29091);
var inst_29093 = figwheel.client.utils.log.call(null,inst_29092);
var inst_29094 = (function (){var all_files = inst_29065;
var res_SINGLEQUOTE_ = inst_29068;
var res = inst_29069;
var files_not_loaded = inst_29071;
var dependencies_that_loaded = inst_29073;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29065,inst_29068,inst_29069,inst_29071,inst_29073,inst_29088,inst_29090,inst_29091,inst_29092,inst_29093,state_val_29153,c__22259__auto__,map__28997,map__28997__$1,opts,before_jsload,on_jsload,reload_dependents,map__28998,map__28998__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29065,inst_29068,inst_29069,inst_29071,inst_29073,inst_29088,inst_29090,inst_29091,inst_29092,inst_29093,state_val_29153,c__22259__auto__,map__28997,map__28997__$1,opts,before_jsload,on_jsload,reload_dependents,map__28998,map__28998__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29095 = setTimeout(inst_29094,(10));
var state_29152__$1 = (function (){var statearr_29223 = state_29152;
(statearr_29223[(33)] = inst_29093);

(statearr_29223[(34)] = inst_29088);

return statearr_29223;
})();
var statearr_29224_29287 = state_29152__$1;
(statearr_29224_29287[(2)] = inst_29095);

(statearr_29224_29287[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29153 === (16))){
var state_29152__$1 = state_29152;
var statearr_29225_29288 = state_29152__$1;
(statearr_29225_29288[(2)] = reload_dependents);

(statearr_29225_29288[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29153 === (38))){
var inst_29105 = (state_29152[(16)]);
var inst_29123 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29105);
var state_29152__$1 = state_29152;
var statearr_29226_29289 = state_29152__$1;
(statearr_29226_29289[(2)] = inst_29123);

(statearr_29226_29289[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29153 === (30))){
var state_29152__$1 = state_29152;
var statearr_29227_29290 = state_29152__$1;
(statearr_29227_29290[(2)] = null);

(statearr_29227_29290[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29153 === (10))){
var inst_29025 = (state_29152[(22)]);
var inst_29027 = cljs.core.chunked_seq_QMARK_.call(null,inst_29025);
var state_29152__$1 = state_29152;
if(inst_29027){
var statearr_29228_29291 = state_29152__$1;
(statearr_29228_29291[(1)] = (13));

} else {
var statearr_29229_29292 = state_29152__$1;
(statearr_29229_29292[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29153 === (18))){
var inst_29059 = (state_29152[(2)]);
var state_29152__$1 = state_29152;
if(cljs.core.truth_(inst_29059)){
var statearr_29230_29293 = state_29152__$1;
(statearr_29230_29293[(1)] = (19));

} else {
var statearr_29231_29294 = state_29152__$1;
(statearr_29231_29294[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29153 === (42))){
var state_29152__$1 = state_29152;
var statearr_29232_29295 = state_29152__$1;
(statearr_29232_29295[(2)] = null);

(statearr_29232_29295[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29153 === (37))){
var inst_29118 = (state_29152[(2)]);
var state_29152__$1 = state_29152;
var statearr_29233_29296 = state_29152__$1;
(statearr_29233_29296[(2)] = inst_29118);

(statearr_29233_29296[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29153 === (8))){
var inst_29025 = (state_29152[(22)]);
var inst_29012 = (state_29152[(10)]);
var inst_29025__$1 = cljs.core.seq.call(null,inst_29012);
var state_29152__$1 = (function (){var statearr_29234 = state_29152;
(statearr_29234[(22)] = inst_29025__$1);

return statearr_29234;
})();
if(inst_29025__$1){
var statearr_29235_29297 = state_29152__$1;
(statearr_29235_29297[(1)] = (10));

} else {
var statearr_29236_29298 = state_29152__$1;
(statearr_29236_29298[(1)] = (11));

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
});})(c__22259__auto__,map__28997,map__28997__$1,opts,before_jsload,on_jsload,reload_dependents,map__28998,map__28998__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__22236__auto__,c__22259__auto__,map__28997,map__28997__$1,opts,before_jsload,on_jsload,reload_dependents,map__28998,map__28998__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__22237__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__22237__auto____0 = (function (){
var statearr_29237 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29237[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__22237__auto__);

(statearr_29237[(1)] = (1));

return statearr_29237;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__22237__auto____1 = (function (state_29152){
while(true){
var ret_value__22238__auto__ = (function (){try{while(true){
var result__22239__auto__ = switch__22236__auto__.call(null,state_29152);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22239__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22239__auto__;
}
break;
}
}catch (e29238){if((e29238 instanceof Object)){
var ex__22240__auto__ = e29238;
var statearr_29239_29299 = state_29152;
(statearr_29239_29299[(5)] = ex__22240__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29152);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29238;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22238__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29300 = state_29152;
state_29152 = G__29300;
continue;
} else {
return ret_value__22238__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__22237__auto__ = function(state_29152){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__22237__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__22237__auto____1.call(this,state_29152);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__22237__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__22237__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__22237__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__22237__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__22237__auto__;
})()
;})(switch__22236__auto__,c__22259__auto__,map__28997,map__28997__$1,opts,before_jsload,on_jsload,reload_dependents,map__28998,map__28998__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__22261__auto__ = (function (){var statearr_29240 = f__22260__auto__.call(null);
(statearr_29240[(6)] = c__22259__auto__);

return statearr_29240;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22261__auto__);
});})(c__22259__auto__,map__28997,map__28997__$1,opts,before_jsload,on_jsload,reload_dependents,map__28998,map__28998__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__22259__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__29303,link){
var map__29304 = p__29303;
var map__29304__$1 = (((((!((map__29304 == null))))?(((((map__29304.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29304.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29304):map__29304);
var file = cljs.core.get.call(null,map__29304__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5720__auto__ = link.href;
if(cljs.core.truth_(temp__5720__auto__)){
var link_href = temp__5720__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5720__auto__,map__29304,map__29304__$1,file){
return (function (p1__29301_SHARP_,p2__29302_SHARP_){
if(cljs.core._EQ_.call(null,p1__29301_SHARP_,p2__29302_SHARP_)){
return p1__29301_SHARP_;
} else {
return false;
}
});})(link_href,temp__5720__auto__,map__29304,map__29304__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__5720__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__29307){
var map__29308 = p__29307;
var map__29308__$1 = (((((!((map__29308 == null))))?(((((map__29308.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29308.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29308):map__29308);
var match_length = cljs.core.get.call(null,map__29308__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__29308__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__29306_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__29306_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__5720__auto__)){
var res = temp__5720__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__29310_SHARP_,p2__29311_SHARP_){
return cljs.core.assoc.call(null,p1__29310_SHARP_,cljs.core.get.call(null,p2__29311_SHARP_,key),p2__29311_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__5718__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__5718__auto__)){
var link = temp__5718__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__5718__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__5718__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_29312 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_29312);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_29312);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__29313,p__29314){
var map__29315 = p__29313;
var map__29315__$1 = (((((!((map__29315 == null))))?(((((map__29315.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29315.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29315):map__29315);
var on_cssload = cljs.core.get.call(null,map__29315__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__29316 = p__29314;
var map__29316__$1 = (((((!((map__29316 == null))))?(((((map__29316.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29316.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29316):map__29316);
var files_msg = map__29316__$1;
var files = cljs.core.get.call(null,map__29316__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(figwheel.client.utils.html_env_QMARK_.call(null)){
var temp__5720__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__5720__auto__)){
var f_datas = temp__5720__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1581817896348
