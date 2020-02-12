// Compiled by ClojureScript 1.10.520 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('goog.array');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__23844 = arguments.length;
switch (G__23844) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async23845 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23845 = (function (f,blockable,meta23846){
this.f = f;
this.blockable = blockable;
this.meta23846 = meta23846;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async23845.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23847,meta23846__$1){
var self__ = this;
var _23847__$1 = this;
return (new cljs.core.async.t_cljs$core$async23845(self__.f,self__.blockable,meta23846__$1));
});

cljs.core.async.t_cljs$core$async23845.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23847){
var self__ = this;
var _23847__$1 = this;
return self__.meta23846;
});

cljs.core.async.t_cljs$core$async23845.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23845.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async23845.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async23845.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async23845.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta23846","meta23846",133755763,null)], null);
});

cljs.core.async.t_cljs$core$async23845.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23845.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23845";

cljs.core.async.t_cljs$core$async23845.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async23845");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async23845.
 */
cljs.core.async.__GT_t_cljs$core$async23845 = (function cljs$core$async$__GT_t_cljs$core$async23845(f__$1,blockable__$1,meta23846){
return (new cljs.core.async.t_cljs$core$async23845(f__$1,blockable__$1,meta23846));
});

}

return (new cljs.core.async.t_cljs$core$async23845(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__23851 = arguments.length;
switch (G__23851) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__23854 = arguments.length;
switch (G__23854) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__23857 = arguments.length;
switch (G__23857) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_23859 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_23859);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_23859,ret){
return (function (){
return fn1.call(null,val_23859);
});})(val_23859,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__23861 = arguments.length;
switch (G__23861) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5718__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5718__auto__)){
var ret = temp__5718__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5718__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5718__auto__)){
var retb = temp__5718__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__5718__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__5718__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4607__auto___23863 = n;
var x_23864 = (0);
while(true){
if((x_23864 < n__4607__auto___23863)){
(a[x_23864] = x_23864);

var G__23865 = (x_23864 + (1));
x_23864 = G__23865;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async23866 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23866 = (function (flag,meta23867){
this.flag = flag;
this.meta23867 = meta23867;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async23866.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_23868,meta23867__$1){
var self__ = this;
var _23868__$1 = this;
return (new cljs.core.async.t_cljs$core$async23866(self__.flag,meta23867__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async23866.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_23868){
var self__ = this;
var _23868__$1 = this;
return self__.meta23867;
});})(flag))
;

cljs.core.async.t_cljs$core$async23866.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23866.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async23866.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async23866.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async23866.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta23867","meta23867",594792206,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async23866.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23866.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23866";

cljs.core.async.t_cljs$core$async23866.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async23866");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async23866.
 */
cljs.core.async.__GT_t_cljs$core$async23866 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async23866(flag__$1,meta23867){
return (new cljs.core.async.t_cljs$core$async23866(flag__$1,meta23867));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async23866(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async23869 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23869 = (function (flag,cb,meta23870){
this.flag = flag;
this.cb = cb;
this.meta23870 = meta23870;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async23869.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23871,meta23870__$1){
var self__ = this;
var _23871__$1 = this;
return (new cljs.core.async.t_cljs$core$async23869(self__.flag,self__.cb,meta23870__$1));
});

cljs.core.async.t_cljs$core$async23869.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23871){
var self__ = this;
var _23871__$1 = this;
return self__.meta23870;
});

cljs.core.async.t_cljs$core$async23869.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23869.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async23869.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async23869.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async23869.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta23870","meta23870",71138118,null)], null);
});

cljs.core.async.t_cljs$core$async23869.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23869.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23869";

cljs.core.async.t_cljs$core$async23869.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async23869");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async23869.
 */
cljs.core.async.__GT_t_cljs$core$async23869 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async23869(flag__$1,cb__$1,meta23870){
return (new cljs.core.async.t_cljs$core$async23869(flag__$1,cb__$1,meta23870));
});

}

return (new cljs.core.async.t_cljs$core$async23869(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count.call(null,ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__23872_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23872_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__23873_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23873_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__4131__auto__ = wport;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return port;
}
})()], null));
} else {
var G__23874 = (i + (1));
i = G__23874;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4131__auto__ = ret;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5720__auto__ = (function (){var and__4120__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_(temp__5720__auto__)){
var got = temp__5720__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___23880 = arguments.length;
var i__4731__auto___23881 = (0);
while(true){
if((i__4731__auto___23881 < len__4730__auto___23880)){
args__4736__auto__.push((arguments[i__4731__auto___23881]));

var G__23882 = (i__4731__auto___23881 + (1));
i__4731__auto___23881 = G__23882;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__23877){
var map__23878 = p__23877;
var map__23878__$1 = (((((!((map__23878 == null))))?(((((map__23878.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23878.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23878):map__23878);
var opts = map__23878__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq23875){
var G__23876 = cljs.core.first.call(null,seq23875);
var seq23875__$1 = cljs.core.next.call(null,seq23875);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23876,seq23875__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__23884 = arguments.length;
switch (G__23884) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__23784__auto___23930 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23784__auto___23930){
return (function (){
var f__23785__auto__ = (function (){var switch__23689__auto__ = ((function (c__23784__auto___23930){
return (function (state_23908){
var state_val_23909 = (state_23908[(1)]);
if((state_val_23909 === (7))){
var inst_23904 = (state_23908[(2)]);
var state_23908__$1 = state_23908;
var statearr_23910_23931 = state_23908__$1;
(statearr_23910_23931[(2)] = inst_23904);

(statearr_23910_23931[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23909 === (1))){
var state_23908__$1 = state_23908;
var statearr_23911_23932 = state_23908__$1;
(statearr_23911_23932[(2)] = null);

(statearr_23911_23932[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23909 === (4))){
var inst_23887 = (state_23908[(7)]);
var inst_23887__$1 = (state_23908[(2)]);
var inst_23888 = (inst_23887__$1 == null);
var state_23908__$1 = (function (){var statearr_23912 = state_23908;
(statearr_23912[(7)] = inst_23887__$1);

return statearr_23912;
})();
if(cljs.core.truth_(inst_23888)){
var statearr_23913_23933 = state_23908__$1;
(statearr_23913_23933[(1)] = (5));

} else {
var statearr_23914_23934 = state_23908__$1;
(statearr_23914_23934[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23909 === (13))){
var state_23908__$1 = state_23908;
var statearr_23915_23935 = state_23908__$1;
(statearr_23915_23935[(2)] = null);

(statearr_23915_23935[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23909 === (6))){
var inst_23887 = (state_23908[(7)]);
var state_23908__$1 = state_23908;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23908__$1,(11),to,inst_23887);
} else {
if((state_val_23909 === (3))){
var inst_23906 = (state_23908[(2)]);
var state_23908__$1 = state_23908;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23908__$1,inst_23906);
} else {
if((state_val_23909 === (12))){
var state_23908__$1 = state_23908;
var statearr_23916_23936 = state_23908__$1;
(statearr_23916_23936[(2)] = null);

(statearr_23916_23936[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23909 === (2))){
var state_23908__$1 = state_23908;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23908__$1,(4),from);
} else {
if((state_val_23909 === (11))){
var inst_23897 = (state_23908[(2)]);
var state_23908__$1 = state_23908;
if(cljs.core.truth_(inst_23897)){
var statearr_23917_23937 = state_23908__$1;
(statearr_23917_23937[(1)] = (12));

} else {
var statearr_23918_23938 = state_23908__$1;
(statearr_23918_23938[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23909 === (9))){
var state_23908__$1 = state_23908;
var statearr_23919_23939 = state_23908__$1;
(statearr_23919_23939[(2)] = null);

(statearr_23919_23939[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23909 === (5))){
var state_23908__$1 = state_23908;
if(cljs.core.truth_(close_QMARK_)){
var statearr_23920_23940 = state_23908__$1;
(statearr_23920_23940[(1)] = (8));

} else {
var statearr_23921_23941 = state_23908__$1;
(statearr_23921_23941[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23909 === (14))){
var inst_23902 = (state_23908[(2)]);
var state_23908__$1 = state_23908;
var statearr_23922_23942 = state_23908__$1;
(statearr_23922_23942[(2)] = inst_23902);

(statearr_23922_23942[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23909 === (10))){
var inst_23894 = (state_23908[(2)]);
var state_23908__$1 = state_23908;
var statearr_23923_23943 = state_23908__$1;
(statearr_23923_23943[(2)] = inst_23894);

(statearr_23923_23943[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23909 === (8))){
var inst_23891 = cljs.core.async.close_BANG_.call(null,to);
var state_23908__$1 = state_23908;
var statearr_23924_23944 = state_23908__$1;
(statearr_23924_23944[(2)] = inst_23891);

(statearr_23924_23944[(1)] = (10));


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
});})(c__23784__auto___23930))
;
return ((function (switch__23689__auto__,c__23784__auto___23930){
return (function() {
var cljs$core$async$state_machine__23690__auto__ = null;
var cljs$core$async$state_machine__23690__auto____0 = (function (){
var statearr_23925 = [null,null,null,null,null,null,null,null];
(statearr_23925[(0)] = cljs$core$async$state_machine__23690__auto__);

(statearr_23925[(1)] = (1));

return statearr_23925;
});
var cljs$core$async$state_machine__23690__auto____1 = (function (state_23908){
while(true){
var ret_value__23691__auto__ = (function (){try{while(true){
var result__23692__auto__ = switch__23689__auto__.call(null,state_23908);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23692__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23692__auto__;
}
break;
}
}catch (e23926){if((e23926 instanceof Object)){
var ex__23693__auto__ = e23926;
var statearr_23927_23945 = state_23908;
(statearr_23927_23945[(5)] = ex__23693__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23908);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23926;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23691__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23946 = state_23908;
state_23908 = G__23946;
continue;
} else {
return ret_value__23691__auto__;
}
break;
}
});
cljs$core$async$state_machine__23690__auto__ = function(state_23908){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23690__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23690__auto____1.call(this,state_23908);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23690__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23690__auto____0;
cljs$core$async$state_machine__23690__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23690__auto____1;
return cljs$core$async$state_machine__23690__auto__;
})()
;})(switch__23689__auto__,c__23784__auto___23930))
})();
var state__23786__auto__ = (function (){var statearr_23928 = f__23785__auto__.call(null);
(statearr_23928[(6)] = c__23784__auto___23930);

return statearr_23928;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23786__auto__);
});})(c__23784__auto___23930))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__23947){
var vec__23948 = p__23947;
var v = cljs.core.nth.call(null,vec__23948,(0),null);
var p = cljs.core.nth.call(null,vec__23948,(1),null);
var job = vec__23948;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__23784__auto___24119 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23784__auto___24119,res,vec__23948,v,p,job,jobs,results){
return (function (){
var f__23785__auto__ = (function (){var switch__23689__auto__ = ((function (c__23784__auto___24119,res,vec__23948,v,p,job,jobs,results){
return (function (state_23955){
var state_val_23956 = (state_23955[(1)]);
if((state_val_23956 === (1))){
var state_23955__$1 = state_23955;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23955__$1,(2),res,v);
} else {
if((state_val_23956 === (2))){
var inst_23952 = (state_23955[(2)]);
var inst_23953 = cljs.core.async.close_BANG_.call(null,res);
var state_23955__$1 = (function (){var statearr_23957 = state_23955;
(statearr_23957[(7)] = inst_23952);

return statearr_23957;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23955__$1,inst_23953);
} else {
return null;
}
}
});})(c__23784__auto___24119,res,vec__23948,v,p,job,jobs,results))
;
return ((function (switch__23689__auto__,c__23784__auto___24119,res,vec__23948,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23690__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23690__auto____0 = (function (){
var statearr_23958 = [null,null,null,null,null,null,null,null];
(statearr_23958[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23690__auto__);

(statearr_23958[(1)] = (1));

return statearr_23958;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23690__auto____1 = (function (state_23955){
while(true){
var ret_value__23691__auto__ = (function (){try{while(true){
var result__23692__auto__ = switch__23689__auto__.call(null,state_23955);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23692__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23692__auto__;
}
break;
}
}catch (e23959){if((e23959 instanceof Object)){
var ex__23693__auto__ = e23959;
var statearr_23960_24120 = state_23955;
(statearr_23960_24120[(5)] = ex__23693__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23955);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23959;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23691__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24121 = state_23955;
state_23955 = G__24121;
continue;
} else {
return ret_value__23691__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23690__auto__ = function(state_23955){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23690__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23690__auto____1.call(this,state_23955);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23690__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23690__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23690__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23690__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23690__auto__;
})()
;})(switch__23689__auto__,c__23784__auto___24119,res,vec__23948,v,p,job,jobs,results))
})();
var state__23786__auto__ = (function (){var statearr_23961 = f__23785__auto__.call(null);
(statearr_23961[(6)] = c__23784__auto___24119);

return statearr_23961;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23786__auto__);
});})(c__23784__auto___24119,res,vec__23948,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__23962){
var vec__23963 = p__23962;
var v = cljs.core.nth.call(null,vec__23963,(0),null);
var p = cljs.core.nth.call(null,vec__23963,(1),null);
var job = vec__23963;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__4607__auto___24122 = n;
var __24123 = (0);
while(true){
if((__24123 < n__4607__auto___24122)){
var G__23966_24124 = type;
var G__23966_24125__$1 = (((G__23966_24124 instanceof cljs.core.Keyword))?G__23966_24124.fqn:null);
switch (G__23966_24125__$1) {
case "compute":
var c__23784__auto___24127 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__24123,c__23784__auto___24127,G__23966_24124,G__23966_24125__$1,n__4607__auto___24122,jobs,results,process,async){
return (function (){
var f__23785__auto__ = (function (){var switch__23689__auto__ = ((function (__24123,c__23784__auto___24127,G__23966_24124,G__23966_24125__$1,n__4607__auto___24122,jobs,results,process,async){
return (function (state_23979){
var state_val_23980 = (state_23979[(1)]);
if((state_val_23980 === (1))){
var state_23979__$1 = state_23979;
var statearr_23981_24128 = state_23979__$1;
(statearr_23981_24128[(2)] = null);

(statearr_23981_24128[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23980 === (2))){
var state_23979__$1 = state_23979;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23979__$1,(4),jobs);
} else {
if((state_val_23980 === (3))){
var inst_23977 = (state_23979[(2)]);
var state_23979__$1 = state_23979;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23979__$1,inst_23977);
} else {
if((state_val_23980 === (4))){
var inst_23969 = (state_23979[(2)]);
var inst_23970 = process.call(null,inst_23969);
var state_23979__$1 = state_23979;
if(cljs.core.truth_(inst_23970)){
var statearr_23982_24129 = state_23979__$1;
(statearr_23982_24129[(1)] = (5));

} else {
var statearr_23983_24130 = state_23979__$1;
(statearr_23983_24130[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23980 === (5))){
var state_23979__$1 = state_23979;
var statearr_23984_24131 = state_23979__$1;
(statearr_23984_24131[(2)] = null);

(statearr_23984_24131[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23980 === (6))){
var state_23979__$1 = state_23979;
var statearr_23985_24132 = state_23979__$1;
(statearr_23985_24132[(2)] = null);

(statearr_23985_24132[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23980 === (7))){
var inst_23975 = (state_23979[(2)]);
var state_23979__$1 = state_23979;
var statearr_23986_24133 = state_23979__$1;
(statearr_23986_24133[(2)] = inst_23975);

(statearr_23986_24133[(1)] = (3));


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
});})(__24123,c__23784__auto___24127,G__23966_24124,G__23966_24125__$1,n__4607__auto___24122,jobs,results,process,async))
;
return ((function (__24123,switch__23689__auto__,c__23784__auto___24127,G__23966_24124,G__23966_24125__$1,n__4607__auto___24122,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23690__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23690__auto____0 = (function (){
var statearr_23987 = [null,null,null,null,null,null,null];
(statearr_23987[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23690__auto__);

(statearr_23987[(1)] = (1));

return statearr_23987;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23690__auto____1 = (function (state_23979){
while(true){
var ret_value__23691__auto__ = (function (){try{while(true){
var result__23692__auto__ = switch__23689__auto__.call(null,state_23979);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23692__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23692__auto__;
}
break;
}
}catch (e23988){if((e23988 instanceof Object)){
var ex__23693__auto__ = e23988;
var statearr_23989_24134 = state_23979;
(statearr_23989_24134[(5)] = ex__23693__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23979);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23988;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23691__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24135 = state_23979;
state_23979 = G__24135;
continue;
} else {
return ret_value__23691__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23690__auto__ = function(state_23979){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23690__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23690__auto____1.call(this,state_23979);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23690__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23690__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23690__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23690__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23690__auto__;
})()
;})(__24123,switch__23689__auto__,c__23784__auto___24127,G__23966_24124,G__23966_24125__$1,n__4607__auto___24122,jobs,results,process,async))
})();
var state__23786__auto__ = (function (){var statearr_23990 = f__23785__auto__.call(null);
(statearr_23990[(6)] = c__23784__auto___24127);

return statearr_23990;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23786__auto__);
});})(__24123,c__23784__auto___24127,G__23966_24124,G__23966_24125__$1,n__4607__auto___24122,jobs,results,process,async))
);


break;
case "async":
var c__23784__auto___24136 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__24123,c__23784__auto___24136,G__23966_24124,G__23966_24125__$1,n__4607__auto___24122,jobs,results,process,async){
return (function (){
var f__23785__auto__ = (function (){var switch__23689__auto__ = ((function (__24123,c__23784__auto___24136,G__23966_24124,G__23966_24125__$1,n__4607__auto___24122,jobs,results,process,async){
return (function (state_24003){
var state_val_24004 = (state_24003[(1)]);
if((state_val_24004 === (1))){
var state_24003__$1 = state_24003;
var statearr_24005_24137 = state_24003__$1;
(statearr_24005_24137[(2)] = null);

(statearr_24005_24137[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24004 === (2))){
var state_24003__$1 = state_24003;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24003__$1,(4),jobs);
} else {
if((state_val_24004 === (3))){
var inst_24001 = (state_24003[(2)]);
var state_24003__$1 = state_24003;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24003__$1,inst_24001);
} else {
if((state_val_24004 === (4))){
var inst_23993 = (state_24003[(2)]);
var inst_23994 = async.call(null,inst_23993);
var state_24003__$1 = state_24003;
if(cljs.core.truth_(inst_23994)){
var statearr_24006_24138 = state_24003__$1;
(statearr_24006_24138[(1)] = (5));

} else {
var statearr_24007_24139 = state_24003__$1;
(statearr_24007_24139[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24004 === (5))){
var state_24003__$1 = state_24003;
var statearr_24008_24140 = state_24003__$1;
(statearr_24008_24140[(2)] = null);

(statearr_24008_24140[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24004 === (6))){
var state_24003__$1 = state_24003;
var statearr_24009_24141 = state_24003__$1;
(statearr_24009_24141[(2)] = null);

(statearr_24009_24141[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24004 === (7))){
var inst_23999 = (state_24003[(2)]);
var state_24003__$1 = state_24003;
var statearr_24010_24142 = state_24003__$1;
(statearr_24010_24142[(2)] = inst_23999);

(statearr_24010_24142[(1)] = (3));


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
});})(__24123,c__23784__auto___24136,G__23966_24124,G__23966_24125__$1,n__4607__auto___24122,jobs,results,process,async))
;
return ((function (__24123,switch__23689__auto__,c__23784__auto___24136,G__23966_24124,G__23966_24125__$1,n__4607__auto___24122,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23690__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23690__auto____0 = (function (){
var statearr_24011 = [null,null,null,null,null,null,null];
(statearr_24011[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23690__auto__);

(statearr_24011[(1)] = (1));

return statearr_24011;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23690__auto____1 = (function (state_24003){
while(true){
var ret_value__23691__auto__ = (function (){try{while(true){
var result__23692__auto__ = switch__23689__auto__.call(null,state_24003);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23692__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23692__auto__;
}
break;
}
}catch (e24012){if((e24012 instanceof Object)){
var ex__23693__auto__ = e24012;
var statearr_24013_24143 = state_24003;
(statearr_24013_24143[(5)] = ex__23693__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24003);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24012;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23691__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24144 = state_24003;
state_24003 = G__24144;
continue;
} else {
return ret_value__23691__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23690__auto__ = function(state_24003){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23690__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23690__auto____1.call(this,state_24003);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23690__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23690__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23690__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23690__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23690__auto__;
})()
;})(__24123,switch__23689__auto__,c__23784__auto___24136,G__23966_24124,G__23966_24125__$1,n__4607__auto___24122,jobs,results,process,async))
})();
var state__23786__auto__ = (function (){var statearr_24014 = f__23785__auto__.call(null);
(statearr_24014[(6)] = c__23784__auto___24136);

return statearr_24014;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23786__auto__);
});})(__24123,c__23784__auto___24136,G__23966_24124,G__23966_24125__$1,n__4607__auto___24122,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__23966_24125__$1)].join('')));

}

var G__24145 = (__24123 + (1));
__24123 = G__24145;
continue;
} else {
}
break;
}

var c__23784__auto___24146 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23784__auto___24146,jobs,results,process,async){
return (function (){
var f__23785__auto__ = (function (){var switch__23689__auto__ = ((function (c__23784__auto___24146,jobs,results,process,async){
return (function (state_24036){
var state_val_24037 = (state_24036[(1)]);
if((state_val_24037 === (7))){
var inst_24032 = (state_24036[(2)]);
var state_24036__$1 = state_24036;
var statearr_24038_24147 = state_24036__$1;
(statearr_24038_24147[(2)] = inst_24032);

(statearr_24038_24147[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24037 === (1))){
var state_24036__$1 = state_24036;
var statearr_24039_24148 = state_24036__$1;
(statearr_24039_24148[(2)] = null);

(statearr_24039_24148[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24037 === (4))){
var inst_24017 = (state_24036[(7)]);
var inst_24017__$1 = (state_24036[(2)]);
var inst_24018 = (inst_24017__$1 == null);
var state_24036__$1 = (function (){var statearr_24040 = state_24036;
(statearr_24040[(7)] = inst_24017__$1);

return statearr_24040;
})();
if(cljs.core.truth_(inst_24018)){
var statearr_24041_24149 = state_24036__$1;
(statearr_24041_24149[(1)] = (5));

} else {
var statearr_24042_24150 = state_24036__$1;
(statearr_24042_24150[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24037 === (6))){
var inst_24017 = (state_24036[(7)]);
var inst_24022 = (state_24036[(8)]);
var inst_24022__$1 = cljs.core.async.chan.call(null,(1));
var inst_24023 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_24024 = [inst_24017,inst_24022__$1];
var inst_24025 = (new cljs.core.PersistentVector(null,2,(5),inst_24023,inst_24024,null));
var state_24036__$1 = (function (){var statearr_24043 = state_24036;
(statearr_24043[(8)] = inst_24022__$1);

return statearr_24043;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24036__$1,(8),jobs,inst_24025);
} else {
if((state_val_24037 === (3))){
var inst_24034 = (state_24036[(2)]);
var state_24036__$1 = state_24036;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24036__$1,inst_24034);
} else {
if((state_val_24037 === (2))){
var state_24036__$1 = state_24036;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24036__$1,(4),from);
} else {
if((state_val_24037 === (9))){
var inst_24029 = (state_24036[(2)]);
var state_24036__$1 = (function (){var statearr_24044 = state_24036;
(statearr_24044[(9)] = inst_24029);

return statearr_24044;
})();
var statearr_24045_24151 = state_24036__$1;
(statearr_24045_24151[(2)] = null);

(statearr_24045_24151[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24037 === (5))){
var inst_24020 = cljs.core.async.close_BANG_.call(null,jobs);
var state_24036__$1 = state_24036;
var statearr_24046_24152 = state_24036__$1;
(statearr_24046_24152[(2)] = inst_24020);

(statearr_24046_24152[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24037 === (8))){
var inst_24022 = (state_24036[(8)]);
var inst_24027 = (state_24036[(2)]);
var state_24036__$1 = (function (){var statearr_24047 = state_24036;
(statearr_24047[(10)] = inst_24027);

return statearr_24047;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24036__$1,(9),results,inst_24022);
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
});})(c__23784__auto___24146,jobs,results,process,async))
;
return ((function (switch__23689__auto__,c__23784__auto___24146,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23690__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23690__auto____0 = (function (){
var statearr_24048 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24048[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23690__auto__);

(statearr_24048[(1)] = (1));

return statearr_24048;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23690__auto____1 = (function (state_24036){
while(true){
var ret_value__23691__auto__ = (function (){try{while(true){
var result__23692__auto__ = switch__23689__auto__.call(null,state_24036);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23692__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23692__auto__;
}
break;
}
}catch (e24049){if((e24049 instanceof Object)){
var ex__23693__auto__ = e24049;
var statearr_24050_24153 = state_24036;
(statearr_24050_24153[(5)] = ex__23693__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24036);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24049;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23691__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24154 = state_24036;
state_24036 = G__24154;
continue;
} else {
return ret_value__23691__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23690__auto__ = function(state_24036){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23690__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23690__auto____1.call(this,state_24036);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23690__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23690__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23690__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23690__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23690__auto__;
})()
;})(switch__23689__auto__,c__23784__auto___24146,jobs,results,process,async))
})();
var state__23786__auto__ = (function (){var statearr_24051 = f__23785__auto__.call(null);
(statearr_24051[(6)] = c__23784__auto___24146);

return statearr_24051;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23786__auto__);
});})(c__23784__auto___24146,jobs,results,process,async))
);


var c__23784__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23784__auto__,jobs,results,process,async){
return (function (){
var f__23785__auto__ = (function (){var switch__23689__auto__ = ((function (c__23784__auto__,jobs,results,process,async){
return (function (state_24089){
var state_val_24090 = (state_24089[(1)]);
if((state_val_24090 === (7))){
var inst_24085 = (state_24089[(2)]);
var state_24089__$1 = state_24089;
var statearr_24091_24155 = state_24089__$1;
(statearr_24091_24155[(2)] = inst_24085);

(statearr_24091_24155[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24090 === (20))){
var state_24089__$1 = state_24089;
var statearr_24092_24156 = state_24089__$1;
(statearr_24092_24156[(2)] = null);

(statearr_24092_24156[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24090 === (1))){
var state_24089__$1 = state_24089;
var statearr_24093_24157 = state_24089__$1;
(statearr_24093_24157[(2)] = null);

(statearr_24093_24157[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24090 === (4))){
var inst_24054 = (state_24089[(7)]);
var inst_24054__$1 = (state_24089[(2)]);
var inst_24055 = (inst_24054__$1 == null);
var state_24089__$1 = (function (){var statearr_24094 = state_24089;
(statearr_24094[(7)] = inst_24054__$1);

return statearr_24094;
})();
if(cljs.core.truth_(inst_24055)){
var statearr_24095_24158 = state_24089__$1;
(statearr_24095_24158[(1)] = (5));

} else {
var statearr_24096_24159 = state_24089__$1;
(statearr_24096_24159[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24090 === (15))){
var inst_24067 = (state_24089[(8)]);
var state_24089__$1 = state_24089;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24089__$1,(18),to,inst_24067);
} else {
if((state_val_24090 === (21))){
var inst_24080 = (state_24089[(2)]);
var state_24089__$1 = state_24089;
var statearr_24097_24160 = state_24089__$1;
(statearr_24097_24160[(2)] = inst_24080);

(statearr_24097_24160[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24090 === (13))){
var inst_24082 = (state_24089[(2)]);
var state_24089__$1 = (function (){var statearr_24098 = state_24089;
(statearr_24098[(9)] = inst_24082);

return statearr_24098;
})();
var statearr_24099_24161 = state_24089__$1;
(statearr_24099_24161[(2)] = null);

(statearr_24099_24161[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24090 === (6))){
var inst_24054 = (state_24089[(7)]);
var state_24089__$1 = state_24089;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24089__$1,(11),inst_24054);
} else {
if((state_val_24090 === (17))){
var inst_24075 = (state_24089[(2)]);
var state_24089__$1 = state_24089;
if(cljs.core.truth_(inst_24075)){
var statearr_24100_24162 = state_24089__$1;
(statearr_24100_24162[(1)] = (19));

} else {
var statearr_24101_24163 = state_24089__$1;
(statearr_24101_24163[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24090 === (3))){
var inst_24087 = (state_24089[(2)]);
var state_24089__$1 = state_24089;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24089__$1,inst_24087);
} else {
if((state_val_24090 === (12))){
var inst_24064 = (state_24089[(10)]);
var state_24089__$1 = state_24089;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24089__$1,(14),inst_24064);
} else {
if((state_val_24090 === (2))){
var state_24089__$1 = state_24089;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24089__$1,(4),results);
} else {
if((state_val_24090 === (19))){
var state_24089__$1 = state_24089;
var statearr_24102_24164 = state_24089__$1;
(statearr_24102_24164[(2)] = null);

(statearr_24102_24164[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24090 === (11))){
var inst_24064 = (state_24089[(2)]);
var state_24089__$1 = (function (){var statearr_24103 = state_24089;
(statearr_24103[(10)] = inst_24064);

return statearr_24103;
})();
var statearr_24104_24165 = state_24089__$1;
(statearr_24104_24165[(2)] = null);

(statearr_24104_24165[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24090 === (9))){
var state_24089__$1 = state_24089;
var statearr_24105_24166 = state_24089__$1;
(statearr_24105_24166[(2)] = null);

(statearr_24105_24166[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24090 === (5))){
var state_24089__$1 = state_24089;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24106_24167 = state_24089__$1;
(statearr_24106_24167[(1)] = (8));

} else {
var statearr_24107_24168 = state_24089__$1;
(statearr_24107_24168[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24090 === (14))){
var inst_24069 = (state_24089[(11)]);
var inst_24067 = (state_24089[(8)]);
var inst_24067__$1 = (state_24089[(2)]);
var inst_24068 = (inst_24067__$1 == null);
var inst_24069__$1 = cljs.core.not.call(null,inst_24068);
var state_24089__$1 = (function (){var statearr_24108 = state_24089;
(statearr_24108[(11)] = inst_24069__$1);

(statearr_24108[(8)] = inst_24067__$1);

return statearr_24108;
})();
if(inst_24069__$1){
var statearr_24109_24169 = state_24089__$1;
(statearr_24109_24169[(1)] = (15));

} else {
var statearr_24110_24170 = state_24089__$1;
(statearr_24110_24170[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24090 === (16))){
var inst_24069 = (state_24089[(11)]);
var state_24089__$1 = state_24089;
var statearr_24111_24171 = state_24089__$1;
(statearr_24111_24171[(2)] = inst_24069);

(statearr_24111_24171[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24090 === (10))){
var inst_24061 = (state_24089[(2)]);
var state_24089__$1 = state_24089;
var statearr_24112_24172 = state_24089__$1;
(statearr_24112_24172[(2)] = inst_24061);

(statearr_24112_24172[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24090 === (18))){
var inst_24072 = (state_24089[(2)]);
var state_24089__$1 = state_24089;
var statearr_24113_24173 = state_24089__$1;
(statearr_24113_24173[(2)] = inst_24072);

(statearr_24113_24173[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24090 === (8))){
var inst_24058 = cljs.core.async.close_BANG_.call(null,to);
var state_24089__$1 = state_24089;
var statearr_24114_24174 = state_24089__$1;
(statearr_24114_24174[(2)] = inst_24058);

(statearr_24114_24174[(1)] = (10));


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
});})(c__23784__auto__,jobs,results,process,async))
;
return ((function (switch__23689__auto__,c__23784__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23690__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23690__auto____0 = (function (){
var statearr_24115 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24115[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23690__auto__);

(statearr_24115[(1)] = (1));

return statearr_24115;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23690__auto____1 = (function (state_24089){
while(true){
var ret_value__23691__auto__ = (function (){try{while(true){
var result__23692__auto__ = switch__23689__auto__.call(null,state_24089);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23692__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23692__auto__;
}
break;
}
}catch (e24116){if((e24116 instanceof Object)){
var ex__23693__auto__ = e24116;
var statearr_24117_24175 = state_24089;
(statearr_24117_24175[(5)] = ex__23693__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24089);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24116;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23691__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24176 = state_24089;
state_24089 = G__24176;
continue;
} else {
return ret_value__23691__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23690__auto__ = function(state_24089){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23690__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23690__auto____1.call(this,state_24089);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23690__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23690__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23690__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23690__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23690__auto__;
})()
;})(switch__23689__auto__,c__23784__auto__,jobs,results,process,async))
})();
var state__23786__auto__ = (function (){var statearr_24118 = f__23785__auto__.call(null);
(statearr_24118[(6)] = c__23784__auto__);

return statearr_24118;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23786__auto__);
});})(c__23784__auto__,jobs,results,process,async))
);

return c__23784__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__24178 = arguments.length;
switch (G__24178) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__24181 = arguments.length;
switch (G__24181) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__24184 = arguments.length;
switch (G__24184) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__23784__auto___24233 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23784__auto___24233,tc,fc){
return (function (){
var f__23785__auto__ = (function (){var switch__23689__auto__ = ((function (c__23784__auto___24233,tc,fc){
return (function (state_24210){
var state_val_24211 = (state_24210[(1)]);
if((state_val_24211 === (7))){
var inst_24206 = (state_24210[(2)]);
var state_24210__$1 = state_24210;
var statearr_24212_24234 = state_24210__$1;
(statearr_24212_24234[(2)] = inst_24206);

(statearr_24212_24234[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24211 === (1))){
var state_24210__$1 = state_24210;
var statearr_24213_24235 = state_24210__$1;
(statearr_24213_24235[(2)] = null);

(statearr_24213_24235[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24211 === (4))){
var inst_24187 = (state_24210[(7)]);
var inst_24187__$1 = (state_24210[(2)]);
var inst_24188 = (inst_24187__$1 == null);
var state_24210__$1 = (function (){var statearr_24214 = state_24210;
(statearr_24214[(7)] = inst_24187__$1);

return statearr_24214;
})();
if(cljs.core.truth_(inst_24188)){
var statearr_24215_24236 = state_24210__$1;
(statearr_24215_24236[(1)] = (5));

} else {
var statearr_24216_24237 = state_24210__$1;
(statearr_24216_24237[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24211 === (13))){
var state_24210__$1 = state_24210;
var statearr_24217_24238 = state_24210__$1;
(statearr_24217_24238[(2)] = null);

(statearr_24217_24238[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24211 === (6))){
var inst_24187 = (state_24210[(7)]);
var inst_24193 = p.call(null,inst_24187);
var state_24210__$1 = state_24210;
if(cljs.core.truth_(inst_24193)){
var statearr_24218_24239 = state_24210__$1;
(statearr_24218_24239[(1)] = (9));

} else {
var statearr_24219_24240 = state_24210__$1;
(statearr_24219_24240[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24211 === (3))){
var inst_24208 = (state_24210[(2)]);
var state_24210__$1 = state_24210;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24210__$1,inst_24208);
} else {
if((state_val_24211 === (12))){
var state_24210__$1 = state_24210;
var statearr_24220_24241 = state_24210__$1;
(statearr_24220_24241[(2)] = null);

(statearr_24220_24241[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24211 === (2))){
var state_24210__$1 = state_24210;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24210__$1,(4),ch);
} else {
if((state_val_24211 === (11))){
var inst_24187 = (state_24210[(7)]);
var inst_24197 = (state_24210[(2)]);
var state_24210__$1 = state_24210;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24210__$1,(8),inst_24197,inst_24187);
} else {
if((state_val_24211 === (9))){
var state_24210__$1 = state_24210;
var statearr_24221_24242 = state_24210__$1;
(statearr_24221_24242[(2)] = tc);

(statearr_24221_24242[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24211 === (5))){
var inst_24190 = cljs.core.async.close_BANG_.call(null,tc);
var inst_24191 = cljs.core.async.close_BANG_.call(null,fc);
var state_24210__$1 = (function (){var statearr_24222 = state_24210;
(statearr_24222[(8)] = inst_24190);

return statearr_24222;
})();
var statearr_24223_24243 = state_24210__$1;
(statearr_24223_24243[(2)] = inst_24191);

(statearr_24223_24243[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24211 === (14))){
var inst_24204 = (state_24210[(2)]);
var state_24210__$1 = state_24210;
var statearr_24224_24244 = state_24210__$1;
(statearr_24224_24244[(2)] = inst_24204);

(statearr_24224_24244[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24211 === (10))){
var state_24210__$1 = state_24210;
var statearr_24225_24245 = state_24210__$1;
(statearr_24225_24245[(2)] = fc);

(statearr_24225_24245[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24211 === (8))){
var inst_24199 = (state_24210[(2)]);
var state_24210__$1 = state_24210;
if(cljs.core.truth_(inst_24199)){
var statearr_24226_24246 = state_24210__$1;
(statearr_24226_24246[(1)] = (12));

} else {
var statearr_24227_24247 = state_24210__$1;
(statearr_24227_24247[(1)] = (13));

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
});})(c__23784__auto___24233,tc,fc))
;
return ((function (switch__23689__auto__,c__23784__auto___24233,tc,fc){
return (function() {
var cljs$core$async$state_machine__23690__auto__ = null;
var cljs$core$async$state_machine__23690__auto____0 = (function (){
var statearr_24228 = [null,null,null,null,null,null,null,null,null];
(statearr_24228[(0)] = cljs$core$async$state_machine__23690__auto__);

(statearr_24228[(1)] = (1));

return statearr_24228;
});
var cljs$core$async$state_machine__23690__auto____1 = (function (state_24210){
while(true){
var ret_value__23691__auto__ = (function (){try{while(true){
var result__23692__auto__ = switch__23689__auto__.call(null,state_24210);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23692__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23692__auto__;
}
break;
}
}catch (e24229){if((e24229 instanceof Object)){
var ex__23693__auto__ = e24229;
var statearr_24230_24248 = state_24210;
(statearr_24230_24248[(5)] = ex__23693__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24210);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24229;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23691__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24249 = state_24210;
state_24210 = G__24249;
continue;
} else {
return ret_value__23691__auto__;
}
break;
}
});
cljs$core$async$state_machine__23690__auto__ = function(state_24210){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23690__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23690__auto____1.call(this,state_24210);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23690__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23690__auto____0;
cljs$core$async$state_machine__23690__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23690__auto____1;
return cljs$core$async$state_machine__23690__auto__;
})()
;})(switch__23689__auto__,c__23784__auto___24233,tc,fc))
})();
var state__23786__auto__ = (function (){var statearr_24231 = f__23785__auto__.call(null);
(statearr_24231[(6)] = c__23784__auto___24233);

return statearr_24231;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23786__auto__);
});})(c__23784__auto___24233,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__23784__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23784__auto__){
return (function (){
var f__23785__auto__ = (function (){var switch__23689__auto__ = ((function (c__23784__auto__){
return (function (state_24270){
var state_val_24271 = (state_24270[(1)]);
if((state_val_24271 === (7))){
var inst_24266 = (state_24270[(2)]);
var state_24270__$1 = state_24270;
var statearr_24272_24290 = state_24270__$1;
(statearr_24272_24290[(2)] = inst_24266);

(statearr_24272_24290[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24271 === (1))){
var inst_24250 = init;
var state_24270__$1 = (function (){var statearr_24273 = state_24270;
(statearr_24273[(7)] = inst_24250);

return statearr_24273;
})();
var statearr_24274_24291 = state_24270__$1;
(statearr_24274_24291[(2)] = null);

(statearr_24274_24291[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24271 === (4))){
var inst_24253 = (state_24270[(8)]);
var inst_24253__$1 = (state_24270[(2)]);
var inst_24254 = (inst_24253__$1 == null);
var state_24270__$1 = (function (){var statearr_24275 = state_24270;
(statearr_24275[(8)] = inst_24253__$1);

return statearr_24275;
})();
if(cljs.core.truth_(inst_24254)){
var statearr_24276_24292 = state_24270__$1;
(statearr_24276_24292[(1)] = (5));

} else {
var statearr_24277_24293 = state_24270__$1;
(statearr_24277_24293[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24271 === (6))){
var inst_24253 = (state_24270[(8)]);
var inst_24257 = (state_24270[(9)]);
var inst_24250 = (state_24270[(7)]);
var inst_24257__$1 = f.call(null,inst_24250,inst_24253);
var inst_24258 = cljs.core.reduced_QMARK_.call(null,inst_24257__$1);
var state_24270__$1 = (function (){var statearr_24278 = state_24270;
(statearr_24278[(9)] = inst_24257__$1);

return statearr_24278;
})();
if(inst_24258){
var statearr_24279_24294 = state_24270__$1;
(statearr_24279_24294[(1)] = (8));

} else {
var statearr_24280_24295 = state_24270__$1;
(statearr_24280_24295[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24271 === (3))){
var inst_24268 = (state_24270[(2)]);
var state_24270__$1 = state_24270;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24270__$1,inst_24268);
} else {
if((state_val_24271 === (2))){
var state_24270__$1 = state_24270;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24270__$1,(4),ch);
} else {
if((state_val_24271 === (9))){
var inst_24257 = (state_24270[(9)]);
var inst_24250 = inst_24257;
var state_24270__$1 = (function (){var statearr_24281 = state_24270;
(statearr_24281[(7)] = inst_24250);

return statearr_24281;
})();
var statearr_24282_24296 = state_24270__$1;
(statearr_24282_24296[(2)] = null);

(statearr_24282_24296[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24271 === (5))){
var inst_24250 = (state_24270[(7)]);
var state_24270__$1 = state_24270;
var statearr_24283_24297 = state_24270__$1;
(statearr_24283_24297[(2)] = inst_24250);

(statearr_24283_24297[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24271 === (10))){
var inst_24264 = (state_24270[(2)]);
var state_24270__$1 = state_24270;
var statearr_24284_24298 = state_24270__$1;
(statearr_24284_24298[(2)] = inst_24264);

(statearr_24284_24298[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24271 === (8))){
var inst_24257 = (state_24270[(9)]);
var inst_24260 = cljs.core.deref.call(null,inst_24257);
var state_24270__$1 = state_24270;
var statearr_24285_24299 = state_24270__$1;
(statearr_24285_24299[(2)] = inst_24260);

(statearr_24285_24299[(1)] = (10));


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
});})(c__23784__auto__))
;
return ((function (switch__23689__auto__,c__23784__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__23690__auto__ = null;
var cljs$core$async$reduce_$_state_machine__23690__auto____0 = (function (){
var statearr_24286 = [null,null,null,null,null,null,null,null,null,null];
(statearr_24286[(0)] = cljs$core$async$reduce_$_state_machine__23690__auto__);

(statearr_24286[(1)] = (1));

return statearr_24286;
});
var cljs$core$async$reduce_$_state_machine__23690__auto____1 = (function (state_24270){
while(true){
var ret_value__23691__auto__ = (function (){try{while(true){
var result__23692__auto__ = switch__23689__auto__.call(null,state_24270);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23692__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23692__auto__;
}
break;
}
}catch (e24287){if((e24287 instanceof Object)){
var ex__23693__auto__ = e24287;
var statearr_24288_24300 = state_24270;
(statearr_24288_24300[(5)] = ex__23693__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24270);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24287;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23691__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24301 = state_24270;
state_24270 = G__24301;
continue;
} else {
return ret_value__23691__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__23690__auto__ = function(state_24270){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__23690__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__23690__auto____1.call(this,state_24270);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__23690__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__23690__auto____0;
cljs$core$async$reduce_$_state_machine__23690__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__23690__auto____1;
return cljs$core$async$reduce_$_state_machine__23690__auto__;
})()
;})(switch__23689__auto__,c__23784__auto__))
})();
var state__23786__auto__ = (function (){var statearr_24289 = f__23785__auto__.call(null);
(statearr_24289[(6)] = c__23784__auto__);

return statearr_24289;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23786__auto__);
});})(c__23784__auto__))
);

return c__23784__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__23784__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23784__auto__,f__$1){
return (function (){
var f__23785__auto__ = (function (){var switch__23689__auto__ = ((function (c__23784__auto__,f__$1){
return (function (state_24307){
var state_val_24308 = (state_24307[(1)]);
if((state_val_24308 === (1))){
var inst_24302 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_24307__$1 = state_24307;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24307__$1,(2),inst_24302);
} else {
if((state_val_24308 === (2))){
var inst_24304 = (state_24307[(2)]);
var inst_24305 = f__$1.call(null,inst_24304);
var state_24307__$1 = state_24307;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24307__$1,inst_24305);
} else {
return null;
}
}
});})(c__23784__auto__,f__$1))
;
return ((function (switch__23689__auto__,c__23784__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__23690__auto__ = null;
var cljs$core$async$transduce_$_state_machine__23690__auto____0 = (function (){
var statearr_24309 = [null,null,null,null,null,null,null];
(statearr_24309[(0)] = cljs$core$async$transduce_$_state_machine__23690__auto__);

(statearr_24309[(1)] = (1));

return statearr_24309;
});
var cljs$core$async$transduce_$_state_machine__23690__auto____1 = (function (state_24307){
while(true){
var ret_value__23691__auto__ = (function (){try{while(true){
var result__23692__auto__ = switch__23689__auto__.call(null,state_24307);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23692__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23692__auto__;
}
break;
}
}catch (e24310){if((e24310 instanceof Object)){
var ex__23693__auto__ = e24310;
var statearr_24311_24313 = state_24307;
(statearr_24311_24313[(5)] = ex__23693__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24307);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24310;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23691__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24314 = state_24307;
state_24307 = G__24314;
continue;
} else {
return ret_value__23691__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__23690__auto__ = function(state_24307){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__23690__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__23690__auto____1.call(this,state_24307);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__23690__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__23690__auto____0;
cljs$core$async$transduce_$_state_machine__23690__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__23690__auto____1;
return cljs$core$async$transduce_$_state_machine__23690__auto__;
})()
;})(switch__23689__auto__,c__23784__auto__,f__$1))
})();
var state__23786__auto__ = (function (){var statearr_24312 = f__23785__auto__.call(null);
(statearr_24312[(6)] = c__23784__auto__);

return statearr_24312;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23786__auto__);
});})(c__23784__auto__,f__$1))
);

return c__23784__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__24316 = arguments.length;
switch (G__24316) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__23784__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23784__auto__){
return (function (){
var f__23785__auto__ = (function (){var switch__23689__auto__ = ((function (c__23784__auto__){
return (function (state_24341){
var state_val_24342 = (state_24341[(1)]);
if((state_val_24342 === (7))){
var inst_24323 = (state_24341[(2)]);
var state_24341__$1 = state_24341;
var statearr_24343_24364 = state_24341__$1;
(statearr_24343_24364[(2)] = inst_24323);

(statearr_24343_24364[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24342 === (1))){
var inst_24317 = cljs.core.seq.call(null,coll);
var inst_24318 = inst_24317;
var state_24341__$1 = (function (){var statearr_24344 = state_24341;
(statearr_24344[(7)] = inst_24318);

return statearr_24344;
})();
var statearr_24345_24365 = state_24341__$1;
(statearr_24345_24365[(2)] = null);

(statearr_24345_24365[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24342 === (4))){
var inst_24318 = (state_24341[(7)]);
var inst_24321 = cljs.core.first.call(null,inst_24318);
var state_24341__$1 = state_24341;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24341__$1,(7),ch,inst_24321);
} else {
if((state_val_24342 === (13))){
var inst_24335 = (state_24341[(2)]);
var state_24341__$1 = state_24341;
var statearr_24346_24366 = state_24341__$1;
(statearr_24346_24366[(2)] = inst_24335);

(statearr_24346_24366[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24342 === (6))){
var inst_24326 = (state_24341[(2)]);
var state_24341__$1 = state_24341;
if(cljs.core.truth_(inst_24326)){
var statearr_24347_24367 = state_24341__$1;
(statearr_24347_24367[(1)] = (8));

} else {
var statearr_24348_24368 = state_24341__$1;
(statearr_24348_24368[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24342 === (3))){
var inst_24339 = (state_24341[(2)]);
var state_24341__$1 = state_24341;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24341__$1,inst_24339);
} else {
if((state_val_24342 === (12))){
var state_24341__$1 = state_24341;
var statearr_24349_24369 = state_24341__$1;
(statearr_24349_24369[(2)] = null);

(statearr_24349_24369[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24342 === (2))){
var inst_24318 = (state_24341[(7)]);
var state_24341__$1 = state_24341;
if(cljs.core.truth_(inst_24318)){
var statearr_24350_24370 = state_24341__$1;
(statearr_24350_24370[(1)] = (4));

} else {
var statearr_24351_24371 = state_24341__$1;
(statearr_24351_24371[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24342 === (11))){
var inst_24332 = cljs.core.async.close_BANG_.call(null,ch);
var state_24341__$1 = state_24341;
var statearr_24352_24372 = state_24341__$1;
(statearr_24352_24372[(2)] = inst_24332);

(statearr_24352_24372[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24342 === (9))){
var state_24341__$1 = state_24341;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24353_24373 = state_24341__$1;
(statearr_24353_24373[(1)] = (11));

} else {
var statearr_24354_24374 = state_24341__$1;
(statearr_24354_24374[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24342 === (5))){
var inst_24318 = (state_24341[(7)]);
var state_24341__$1 = state_24341;
var statearr_24355_24375 = state_24341__$1;
(statearr_24355_24375[(2)] = inst_24318);

(statearr_24355_24375[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24342 === (10))){
var inst_24337 = (state_24341[(2)]);
var state_24341__$1 = state_24341;
var statearr_24356_24376 = state_24341__$1;
(statearr_24356_24376[(2)] = inst_24337);

(statearr_24356_24376[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24342 === (8))){
var inst_24318 = (state_24341[(7)]);
var inst_24328 = cljs.core.next.call(null,inst_24318);
var inst_24318__$1 = inst_24328;
var state_24341__$1 = (function (){var statearr_24357 = state_24341;
(statearr_24357[(7)] = inst_24318__$1);

return statearr_24357;
})();
var statearr_24358_24377 = state_24341__$1;
(statearr_24358_24377[(2)] = null);

(statearr_24358_24377[(1)] = (2));


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
});})(c__23784__auto__))
;
return ((function (switch__23689__auto__,c__23784__auto__){
return (function() {
var cljs$core$async$state_machine__23690__auto__ = null;
var cljs$core$async$state_machine__23690__auto____0 = (function (){
var statearr_24359 = [null,null,null,null,null,null,null,null];
(statearr_24359[(0)] = cljs$core$async$state_machine__23690__auto__);

(statearr_24359[(1)] = (1));

return statearr_24359;
});
var cljs$core$async$state_machine__23690__auto____1 = (function (state_24341){
while(true){
var ret_value__23691__auto__ = (function (){try{while(true){
var result__23692__auto__ = switch__23689__auto__.call(null,state_24341);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23692__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23692__auto__;
}
break;
}
}catch (e24360){if((e24360 instanceof Object)){
var ex__23693__auto__ = e24360;
var statearr_24361_24378 = state_24341;
(statearr_24361_24378[(5)] = ex__23693__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24341);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24360;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23691__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24379 = state_24341;
state_24341 = G__24379;
continue;
} else {
return ret_value__23691__auto__;
}
break;
}
});
cljs$core$async$state_machine__23690__auto__ = function(state_24341){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23690__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23690__auto____1.call(this,state_24341);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23690__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23690__auto____0;
cljs$core$async$state_machine__23690__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23690__auto____1;
return cljs$core$async$state_machine__23690__auto__;
})()
;})(switch__23689__auto__,c__23784__auto__))
})();
var state__23786__auto__ = (function (){var statearr_24362 = f__23785__auto__.call(null);
(statearr_24362[(6)] = c__23784__auto__);

return statearr_24362;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23786__auto__);
});})(c__23784__auto__))
);

return c__23784__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4433__auto__ = (((_ == null))?null:_);
var m__4434__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,_);
} else {
var m__4431__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__4431__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,ch);
} else {
var m__4431__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m);
} else {
var m__4431__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24380 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24380 = (function (ch,cs,meta24381){
this.ch = ch;
this.cs = cs;
this.meta24381 = meta24381;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24380.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_24382,meta24381__$1){
var self__ = this;
var _24382__$1 = this;
return (new cljs.core.async.t_cljs$core$async24380(self__.ch,self__.cs,meta24381__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async24380.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_24382){
var self__ = this;
var _24382__$1 = this;
return self__.meta24381;
});})(cs))
;

cljs.core.async.t_cljs$core$async24380.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24380.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async24380.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24380.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async24380.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async24380.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async24380.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta24381","meta24381",1011429741,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async24380.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24380.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24380";

cljs.core.async.t_cljs$core$async24380.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async24380");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24380.
 */
cljs.core.async.__GT_t_cljs$core$async24380 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async24380(ch__$1,cs__$1,meta24381){
return (new cljs.core.async.t_cljs$core$async24380(ch__$1,cs__$1,meta24381));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async24380(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__23784__auto___24602 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23784__auto___24602,cs,m,dchan,dctr,done){
return (function (){
var f__23785__auto__ = (function (){var switch__23689__auto__ = ((function (c__23784__auto___24602,cs,m,dchan,dctr,done){
return (function (state_24517){
var state_val_24518 = (state_24517[(1)]);
if((state_val_24518 === (7))){
var inst_24513 = (state_24517[(2)]);
var state_24517__$1 = state_24517;
var statearr_24519_24603 = state_24517__$1;
(statearr_24519_24603[(2)] = inst_24513);

(statearr_24519_24603[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24518 === (20))){
var inst_24416 = (state_24517[(7)]);
var inst_24428 = cljs.core.first.call(null,inst_24416);
var inst_24429 = cljs.core.nth.call(null,inst_24428,(0),null);
var inst_24430 = cljs.core.nth.call(null,inst_24428,(1),null);
var state_24517__$1 = (function (){var statearr_24520 = state_24517;
(statearr_24520[(8)] = inst_24429);

return statearr_24520;
})();
if(cljs.core.truth_(inst_24430)){
var statearr_24521_24604 = state_24517__$1;
(statearr_24521_24604[(1)] = (22));

} else {
var statearr_24522_24605 = state_24517__$1;
(statearr_24522_24605[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24518 === (27))){
var inst_24385 = (state_24517[(9)]);
var inst_24458 = (state_24517[(10)]);
var inst_24465 = (state_24517[(11)]);
var inst_24460 = (state_24517[(12)]);
var inst_24465__$1 = cljs.core._nth.call(null,inst_24458,inst_24460);
var inst_24466 = cljs.core.async.put_BANG_.call(null,inst_24465__$1,inst_24385,done);
var state_24517__$1 = (function (){var statearr_24523 = state_24517;
(statearr_24523[(11)] = inst_24465__$1);

return statearr_24523;
})();
if(cljs.core.truth_(inst_24466)){
var statearr_24524_24606 = state_24517__$1;
(statearr_24524_24606[(1)] = (30));

} else {
var statearr_24525_24607 = state_24517__$1;
(statearr_24525_24607[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24518 === (1))){
var state_24517__$1 = state_24517;
var statearr_24526_24608 = state_24517__$1;
(statearr_24526_24608[(2)] = null);

(statearr_24526_24608[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24518 === (24))){
var inst_24416 = (state_24517[(7)]);
var inst_24435 = (state_24517[(2)]);
var inst_24436 = cljs.core.next.call(null,inst_24416);
var inst_24394 = inst_24436;
var inst_24395 = null;
var inst_24396 = (0);
var inst_24397 = (0);
var state_24517__$1 = (function (){var statearr_24527 = state_24517;
(statearr_24527[(13)] = inst_24396);

(statearr_24527[(14)] = inst_24397);

(statearr_24527[(15)] = inst_24394);

(statearr_24527[(16)] = inst_24435);

(statearr_24527[(17)] = inst_24395);

return statearr_24527;
})();
var statearr_24528_24609 = state_24517__$1;
(statearr_24528_24609[(2)] = null);

(statearr_24528_24609[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24518 === (39))){
var state_24517__$1 = state_24517;
var statearr_24532_24610 = state_24517__$1;
(statearr_24532_24610[(2)] = null);

(statearr_24532_24610[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24518 === (4))){
var inst_24385 = (state_24517[(9)]);
var inst_24385__$1 = (state_24517[(2)]);
var inst_24386 = (inst_24385__$1 == null);
var state_24517__$1 = (function (){var statearr_24533 = state_24517;
(statearr_24533[(9)] = inst_24385__$1);

return statearr_24533;
})();
if(cljs.core.truth_(inst_24386)){
var statearr_24534_24611 = state_24517__$1;
(statearr_24534_24611[(1)] = (5));

} else {
var statearr_24535_24612 = state_24517__$1;
(statearr_24535_24612[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24518 === (15))){
var inst_24396 = (state_24517[(13)]);
var inst_24397 = (state_24517[(14)]);
var inst_24394 = (state_24517[(15)]);
var inst_24395 = (state_24517[(17)]);
var inst_24412 = (state_24517[(2)]);
var inst_24413 = (inst_24397 + (1));
var tmp24529 = inst_24396;
var tmp24530 = inst_24394;
var tmp24531 = inst_24395;
var inst_24394__$1 = tmp24530;
var inst_24395__$1 = tmp24531;
var inst_24396__$1 = tmp24529;
var inst_24397__$1 = inst_24413;
var state_24517__$1 = (function (){var statearr_24536 = state_24517;
(statearr_24536[(13)] = inst_24396__$1);

(statearr_24536[(14)] = inst_24397__$1);

(statearr_24536[(15)] = inst_24394__$1);

(statearr_24536[(18)] = inst_24412);

(statearr_24536[(17)] = inst_24395__$1);

return statearr_24536;
})();
var statearr_24537_24613 = state_24517__$1;
(statearr_24537_24613[(2)] = null);

(statearr_24537_24613[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24518 === (21))){
var inst_24439 = (state_24517[(2)]);
var state_24517__$1 = state_24517;
var statearr_24541_24614 = state_24517__$1;
(statearr_24541_24614[(2)] = inst_24439);

(statearr_24541_24614[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24518 === (31))){
var inst_24465 = (state_24517[(11)]);
var inst_24469 = done.call(null,null);
var inst_24470 = cljs.core.async.untap_STAR_.call(null,m,inst_24465);
var state_24517__$1 = (function (){var statearr_24542 = state_24517;
(statearr_24542[(19)] = inst_24469);

return statearr_24542;
})();
var statearr_24543_24615 = state_24517__$1;
(statearr_24543_24615[(2)] = inst_24470);

(statearr_24543_24615[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24518 === (32))){
var inst_24457 = (state_24517[(20)]);
var inst_24459 = (state_24517[(21)]);
var inst_24458 = (state_24517[(10)]);
var inst_24460 = (state_24517[(12)]);
var inst_24472 = (state_24517[(2)]);
var inst_24473 = (inst_24460 + (1));
var tmp24538 = inst_24457;
var tmp24539 = inst_24459;
var tmp24540 = inst_24458;
var inst_24457__$1 = tmp24538;
var inst_24458__$1 = tmp24540;
var inst_24459__$1 = tmp24539;
var inst_24460__$1 = inst_24473;
var state_24517__$1 = (function (){var statearr_24544 = state_24517;
(statearr_24544[(22)] = inst_24472);

(statearr_24544[(20)] = inst_24457__$1);

(statearr_24544[(21)] = inst_24459__$1);

(statearr_24544[(10)] = inst_24458__$1);

(statearr_24544[(12)] = inst_24460__$1);

return statearr_24544;
})();
var statearr_24545_24616 = state_24517__$1;
(statearr_24545_24616[(2)] = null);

(statearr_24545_24616[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24518 === (40))){
var inst_24485 = (state_24517[(23)]);
var inst_24489 = done.call(null,null);
var inst_24490 = cljs.core.async.untap_STAR_.call(null,m,inst_24485);
var state_24517__$1 = (function (){var statearr_24546 = state_24517;
(statearr_24546[(24)] = inst_24489);

return statearr_24546;
})();
var statearr_24547_24617 = state_24517__$1;
(statearr_24547_24617[(2)] = inst_24490);

(statearr_24547_24617[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24518 === (33))){
var inst_24476 = (state_24517[(25)]);
var inst_24478 = cljs.core.chunked_seq_QMARK_.call(null,inst_24476);
var state_24517__$1 = state_24517;
if(inst_24478){
var statearr_24548_24618 = state_24517__$1;
(statearr_24548_24618[(1)] = (36));

} else {
var statearr_24549_24619 = state_24517__$1;
(statearr_24549_24619[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24518 === (13))){
var inst_24406 = (state_24517[(26)]);
var inst_24409 = cljs.core.async.close_BANG_.call(null,inst_24406);
var state_24517__$1 = state_24517;
var statearr_24550_24620 = state_24517__$1;
(statearr_24550_24620[(2)] = inst_24409);

(statearr_24550_24620[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24518 === (22))){
var inst_24429 = (state_24517[(8)]);
var inst_24432 = cljs.core.async.close_BANG_.call(null,inst_24429);
var state_24517__$1 = state_24517;
var statearr_24551_24621 = state_24517__$1;
(statearr_24551_24621[(2)] = inst_24432);

(statearr_24551_24621[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24518 === (36))){
var inst_24476 = (state_24517[(25)]);
var inst_24480 = cljs.core.chunk_first.call(null,inst_24476);
var inst_24481 = cljs.core.chunk_rest.call(null,inst_24476);
var inst_24482 = cljs.core.count.call(null,inst_24480);
var inst_24457 = inst_24481;
var inst_24458 = inst_24480;
var inst_24459 = inst_24482;
var inst_24460 = (0);
var state_24517__$1 = (function (){var statearr_24552 = state_24517;
(statearr_24552[(20)] = inst_24457);

(statearr_24552[(21)] = inst_24459);

(statearr_24552[(10)] = inst_24458);

(statearr_24552[(12)] = inst_24460);

return statearr_24552;
})();
var statearr_24553_24622 = state_24517__$1;
(statearr_24553_24622[(2)] = null);

(statearr_24553_24622[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24518 === (41))){
var inst_24476 = (state_24517[(25)]);
var inst_24492 = (state_24517[(2)]);
var inst_24493 = cljs.core.next.call(null,inst_24476);
var inst_24457 = inst_24493;
var inst_24458 = null;
var inst_24459 = (0);
var inst_24460 = (0);
var state_24517__$1 = (function (){var statearr_24554 = state_24517;
(statearr_24554[(27)] = inst_24492);

(statearr_24554[(20)] = inst_24457);

(statearr_24554[(21)] = inst_24459);

(statearr_24554[(10)] = inst_24458);

(statearr_24554[(12)] = inst_24460);

return statearr_24554;
})();
var statearr_24555_24623 = state_24517__$1;
(statearr_24555_24623[(2)] = null);

(statearr_24555_24623[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24518 === (43))){
var state_24517__$1 = state_24517;
var statearr_24556_24624 = state_24517__$1;
(statearr_24556_24624[(2)] = null);

(statearr_24556_24624[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24518 === (29))){
var inst_24501 = (state_24517[(2)]);
var state_24517__$1 = state_24517;
var statearr_24557_24625 = state_24517__$1;
(statearr_24557_24625[(2)] = inst_24501);

(statearr_24557_24625[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24518 === (44))){
var inst_24510 = (state_24517[(2)]);
var state_24517__$1 = (function (){var statearr_24558 = state_24517;
(statearr_24558[(28)] = inst_24510);

return statearr_24558;
})();
var statearr_24559_24626 = state_24517__$1;
(statearr_24559_24626[(2)] = null);

(statearr_24559_24626[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24518 === (6))){
var inst_24449 = (state_24517[(29)]);
var inst_24448 = cljs.core.deref.call(null,cs);
var inst_24449__$1 = cljs.core.keys.call(null,inst_24448);
var inst_24450 = cljs.core.count.call(null,inst_24449__$1);
var inst_24451 = cljs.core.reset_BANG_.call(null,dctr,inst_24450);
var inst_24456 = cljs.core.seq.call(null,inst_24449__$1);
var inst_24457 = inst_24456;
var inst_24458 = null;
var inst_24459 = (0);
var inst_24460 = (0);
var state_24517__$1 = (function (){var statearr_24560 = state_24517;
(statearr_24560[(29)] = inst_24449__$1);

(statearr_24560[(20)] = inst_24457);

(statearr_24560[(21)] = inst_24459);

(statearr_24560[(10)] = inst_24458);

(statearr_24560[(30)] = inst_24451);

(statearr_24560[(12)] = inst_24460);

return statearr_24560;
})();
var statearr_24561_24627 = state_24517__$1;
(statearr_24561_24627[(2)] = null);

(statearr_24561_24627[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24518 === (28))){
var inst_24457 = (state_24517[(20)]);
var inst_24476 = (state_24517[(25)]);
var inst_24476__$1 = cljs.core.seq.call(null,inst_24457);
var state_24517__$1 = (function (){var statearr_24562 = state_24517;
(statearr_24562[(25)] = inst_24476__$1);

return statearr_24562;
})();
if(inst_24476__$1){
var statearr_24563_24628 = state_24517__$1;
(statearr_24563_24628[(1)] = (33));

} else {
var statearr_24564_24629 = state_24517__$1;
(statearr_24564_24629[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24518 === (25))){
var inst_24459 = (state_24517[(21)]);
var inst_24460 = (state_24517[(12)]);
var inst_24462 = (inst_24460 < inst_24459);
var inst_24463 = inst_24462;
var state_24517__$1 = state_24517;
if(cljs.core.truth_(inst_24463)){
var statearr_24565_24630 = state_24517__$1;
(statearr_24565_24630[(1)] = (27));

} else {
var statearr_24566_24631 = state_24517__$1;
(statearr_24566_24631[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24518 === (34))){
var state_24517__$1 = state_24517;
var statearr_24567_24632 = state_24517__$1;
(statearr_24567_24632[(2)] = null);

(statearr_24567_24632[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24518 === (17))){
var state_24517__$1 = state_24517;
var statearr_24568_24633 = state_24517__$1;
(statearr_24568_24633[(2)] = null);

(statearr_24568_24633[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24518 === (3))){
var inst_24515 = (state_24517[(2)]);
var state_24517__$1 = state_24517;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24517__$1,inst_24515);
} else {
if((state_val_24518 === (12))){
var inst_24444 = (state_24517[(2)]);
var state_24517__$1 = state_24517;
var statearr_24569_24634 = state_24517__$1;
(statearr_24569_24634[(2)] = inst_24444);

(statearr_24569_24634[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24518 === (2))){
var state_24517__$1 = state_24517;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24517__$1,(4),ch);
} else {
if((state_val_24518 === (23))){
var state_24517__$1 = state_24517;
var statearr_24570_24635 = state_24517__$1;
(statearr_24570_24635[(2)] = null);

(statearr_24570_24635[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24518 === (35))){
var inst_24499 = (state_24517[(2)]);
var state_24517__$1 = state_24517;
var statearr_24571_24636 = state_24517__$1;
(statearr_24571_24636[(2)] = inst_24499);

(statearr_24571_24636[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24518 === (19))){
var inst_24416 = (state_24517[(7)]);
var inst_24420 = cljs.core.chunk_first.call(null,inst_24416);
var inst_24421 = cljs.core.chunk_rest.call(null,inst_24416);
var inst_24422 = cljs.core.count.call(null,inst_24420);
var inst_24394 = inst_24421;
var inst_24395 = inst_24420;
var inst_24396 = inst_24422;
var inst_24397 = (0);
var state_24517__$1 = (function (){var statearr_24572 = state_24517;
(statearr_24572[(13)] = inst_24396);

(statearr_24572[(14)] = inst_24397);

(statearr_24572[(15)] = inst_24394);

(statearr_24572[(17)] = inst_24395);

return statearr_24572;
})();
var statearr_24573_24637 = state_24517__$1;
(statearr_24573_24637[(2)] = null);

(statearr_24573_24637[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24518 === (11))){
var inst_24394 = (state_24517[(15)]);
var inst_24416 = (state_24517[(7)]);
var inst_24416__$1 = cljs.core.seq.call(null,inst_24394);
var state_24517__$1 = (function (){var statearr_24574 = state_24517;
(statearr_24574[(7)] = inst_24416__$1);

return statearr_24574;
})();
if(inst_24416__$1){
var statearr_24575_24638 = state_24517__$1;
(statearr_24575_24638[(1)] = (16));

} else {
var statearr_24576_24639 = state_24517__$1;
(statearr_24576_24639[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24518 === (9))){
var inst_24446 = (state_24517[(2)]);
var state_24517__$1 = state_24517;
var statearr_24577_24640 = state_24517__$1;
(statearr_24577_24640[(2)] = inst_24446);

(statearr_24577_24640[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24518 === (5))){
var inst_24392 = cljs.core.deref.call(null,cs);
var inst_24393 = cljs.core.seq.call(null,inst_24392);
var inst_24394 = inst_24393;
var inst_24395 = null;
var inst_24396 = (0);
var inst_24397 = (0);
var state_24517__$1 = (function (){var statearr_24578 = state_24517;
(statearr_24578[(13)] = inst_24396);

(statearr_24578[(14)] = inst_24397);

(statearr_24578[(15)] = inst_24394);

(statearr_24578[(17)] = inst_24395);

return statearr_24578;
})();
var statearr_24579_24641 = state_24517__$1;
(statearr_24579_24641[(2)] = null);

(statearr_24579_24641[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24518 === (14))){
var state_24517__$1 = state_24517;
var statearr_24580_24642 = state_24517__$1;
(statearr_24580_24642[(2)] = null);

(statearr_24580_24642[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24518 === (45))){
var inst_24507 = (state_24517[(2)]);
var state_24517__$1 = state_24517;
var statearr_24581_24643 = state_24517__$1;
(statearr_24581_24643[(2)] = inst_24507);

(statearr_24581_24643[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24518 === (26))){
var inst_24449 = (state_24517[(29)]);
var inst_24503 = (state_24517[(2)]);
var inst_24504 = cljs.core.seq.call(null,inst_24449);
var state_24517__$1 = (function (){var statearr_24582 = state_24517;
(statearr_24582[(31)] = inst_24503);

return statearr_24582;
})();
if(inst_24504){
var statearr_24583_24644 = state_24517__$1;
(statearr_24583_24644[(1)] = (42));

} else {
var statearr_24584_24645 = state_24517__$1;
(statearr_24584_24645[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24518 === (16))){
var inst_24416 = (state_24517[(7)]);
var inst_24418 = cljs.core.chunked_seq_QMARK_.call(null,inst_24416);
var state_24517__$1 = state_24517;
if(inst_24418){
var statearr_24585_24646 = state_24517__$1;
(statearr_24585_24646[(1)] = (19));

} else {
var statearr_24586_24647 = state_24517__$1;
(statearr_24586_24647[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24518 === (38))){
var inst_24496 = (state_24517[(2)]);
var state_24517__$1 = state_24517;
var statearr_24587_24648 = state_24517__$1;
(statearr_24587_24648[(2)] = inst_24496);

(statearr_24587_24648[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24518 === (30))){
var state_24517__$1 = state_24517;
var statearr_24588_24649 = state_24517__$1;
(statearr_24588_24649[(2)] = null);

(statearr_24588_24649[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24518 === (10))){
var inst_24397 = (state_24517[(14)]);
var inst_24395 = (state_24517[(17)]);
var inst_24405 = cljs.core._nth.call(null,inst_24395,inst_24397);
var inst_24406 = cljs.core.nth.call(null,inst_24405,(0),null);
var inst_24407 = cljs.core.nth.call(null,inst_24405,(1),null);
var state_24517__$1 = (function (){var statearr_24589 = state_24517;
(statearr_24589[(26)] = inst_24406);

return statearr_24589;
})();
if(cljs.core.truth_(inst_24407)){
var statearr_24590_24650 = state_24517__$1;
(statearr_24590_24650[(1)] = (13));

} else {
var statearr_24591_24651 = state_24517__$1;
(statearr_24591_24651[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24518 === (18))){
var inst_24442 = (state_24517[(2)]);
var state_24517__$1 = state_24517;
var statearr_24592_24652 = state_24517__$1;
(statearr_24592_24652[(2)] = inst_24442);

(statearr_24592_24652[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24518 === (42))){
var state_24517__$1 = state_24517;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24517__$1,(45),dchan);
} else {
if((state_val_24518 === (37))){
var inst_24385 = (state_24517[(9)]);
var inst_24476 = (state_24517[(25)]);
var inst_24485 = (state_24517[(23)]);
var inst_24485__$1 = cljs.core.first.call(null,inst_24476);
var inst_24486 = cljs.core.async.put_BANG_.call(null,inst_24485__$1,inst_24385,done);
var state_24517__$1 = (function (){var statearr_24593 = state_24517;
(statearr_24593[(23)] = inst_24485__$1);

return statearr_24593;
})();
if(cljs.core.truth_(inst_24486)){
var statearr_24594_24653 = state_24517__$1;
(statearr_24594_24653[(1)] = (39));

} else {
var statearr_24595_24654 = state_24517__$1;
(statearr_24595_24654[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24518 === (8))){
var inst_24396 = (state_24517[(13)]);
var inst_24397 = (state_24517[(14)]);
var inst_24399 = (inst_24397 < inst_24396);
var inst_24400 = inst_24399;
var state_24517__$1 = state_24517;
if(cljs.core.truth_(inst_24400)){
var statearr_24596_24655 = state_24517__$1;
(statearr_24596_24655[(1)] = (10));

} else {
var statearr_24597_24656 = state_24517__$1;
(statearr_24597_24656[(1)] = (11));

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
});})(c__23784__auto___24602,cs,m,dchan,dctr,done))
;
return ((function (switch__23689__auto__,c__23784__auto___24602,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__23690__auto__ = null;
var cljs$core$async$mult_$_state_machine__23690__auto____0 = (function (){
var statearr_24598 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24598[(0)] = cljs$core$async$mult_$_state_machine__23690__auto__);

(statearr_24598[(1)] = (1));

return statearr_24598;
});
var cljs$core$async$mult_$_state_machine__23690__auto____1 = (function (state_24517){
while(true){
var ret_value__23691__auto__ = (function (){try{while(true){
var result__23692__auto__ = switch__23689__auto__.call(null,state_24517);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23692__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23692__auto__;
}
break;
}
}catch (e24599){if((e24599 instanceof Object)){
var ex__23693__auto__ = e24599;
var statearr_24600_24657 = state_24517;
(statearr_24600_24657[(5)] = ex__23693__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24517);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24599;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23691__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24658 = state_24517;
state_24517 = G__24658;
continue;
} else {
return ret_value__23691__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__23690__auto__ = function(state_24517){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__23690__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__23690__auto____1.call(this,state_24517);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__23690__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__23690__auto____0;
cljs$core$async$mult_$_state_machine__23690__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__23690__auto____1;
return cljs$core$async$mult_$_state_machine__23690__auto__;
})()
;})(switch__23689__auto__,c__23784__auto___24602,cs,m,dchan,dctr,done))
})();
var state__23786__auto__ = (function (){var statearr_24601 = f__23785__auto__.call(null);
(statearr_24601[(6)] = c__23784__auto___24602);

return statearr_24601;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23786__auto__);
});})(c__23784__auto___24602,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__24660 = arguments.length;
switch (G__24660) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,ch);
} else {
var m__4431__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,ch);
} else {
var m__4431__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m);
} else {
var m__4431__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,state_map);
} else {
var m__4431__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,mode);
} else {
var m__4431__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___24672 = arguments.length;
var i__4731__auto___24673 = (0);
while(true){
if((i__4731__auto___24673 < len__4730__auto___24672)){
args__4736__auto__.push((arguments[i__4731__auto___24673]));

var G__24674 = (i__4731__auto___24673 + (1));
i__4731__auto___24673 = G__24674;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__24666){
var map__24667 = p__24666;
var map__24667__$1 = (((((!((map__24667 == null))))?(((((map__24667.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24667.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24667):map__24667);
var opts = map__24667__$1;
var statearr_24669_24675 = state;
(statearr_24669_24675[(1)] = cont_block);


var temp__5720__auto__ = cljs.core.async.do_alts.call(null,((function (map__24667,map__24667__$1,opts){
return (function (val){
var statearr_24670_24676 = state;
(statearr_24670_24676[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__24667,map__24667__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5720__auto__)){
var cb = temp__5720__auto__;
var statearr_24671_24677 = state;
(statearr_24671_24677[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq24662){
var G__24663 = cljs.core.first.call(null,seq24662);
var seq24662__$1 = cljs.core.next.call(null,seq24662);
var G__24664 = cljs.core.first.call(null,seq24662__$1);
var seq24662__$2 = cljs.core.next.call(null,seq24662__$1);
var G__24665 = cljs.core.first.call(null,seq24662__$2);
var seq24662__$3 = cljs.core.next.call(null,seq24662__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24663,G__24664,G__24665,seq24662__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_.call(null,solos))))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24678 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24678 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta24679){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta24679 = meta24679;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24678.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_24680,meta24679__$1){
var self__ = this;
var _24680__$1 = this;
return (new cljs.core.async.t_cljs$core$async24678(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta24679__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24678.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_24680){
var self__ = this;
var _24680__$1 = this;
return self__.meta24679;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24678.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24678.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24678.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24678.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24678.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24678.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24678.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24678.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24678.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta24679","meta24679",1331377822,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24678.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24678.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24678";

cljs.core.async.t_cljs$core$async24678.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async24678");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24678.
 */
cljs.core.async.__GT_t_cljs$core$async24678 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async24678(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta24679){
return (new cljs.core.async.t_cljs$core$async24678(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta24679));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async24678(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__23784__auto___24842 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23784__auto___24842,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__23785__auto__ = (function (){var switch__23689__auto__ = ((function (c__23784__auto___24842,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_24782){
var state_val_24783 = (state_24782[(1)]);
if((state_val_24783 === (7))){
var inst_24697 = (state_24782[(2)]);
var state_24782__$1 = state_24782;
var statearr_24784_24843 = state_24782__$1;
(statearr_24784_24843[(2)] = inst_24697);

(statearr_24784_24843[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24783 === (20))){
var inst_24709 = (state_24782[(7)]);
var state_24782__$1 = state_24782;
var statearr_24785_24844 = state_24782__$1;
(statearr_24785_24844[(2)] = inst_24709);

(statearr_24785_24844[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24783 === (27))){
var state_24782__$1 = state_24782;
var statearr_24786_24845 = state_24782__$1;
(statearr_24786_24845[(2)] = null);

(statearr_24786_24845[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24783 === (1))){
var inst_24684 = (state_24782[(8)]);
var inst_24684__$1 = calc_state.call(null);
var inst_24686 = (inst_24684__$1 == null);
var inst_24687 = cljs.core.not.call(null,inst_24686);
var state_24782__$1 = (function (){var statearr_24787 = state_24782;
(statearr_24787[(8)] = inst_24684__$1);

return statearr_24787;
})();
if(inst_24687){
var statearr_24788_24846 = state_24782__$1;
(statearr_24788_24846[(1)] = (2));

} else {
var statearr_24789_24847 = state_24782__$1;
(statearr_24789_24847[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24783 === (24))){
var inst_24742 = (state_24782[(9)]);
var inst_24756 = (state_24782[(10)]);
var inst_24733 = (state_24782[(11)]);
var inst_24756__$1 = inst_24733.call(null,inst_24742);
var state_24782__$1 = (function (){var statearr_24790 = state_24782;
(statearr_24790[(10)] = inst_24756__$1);

return statearr_24790;
})();
if(cljs.core.truth_(inst_24756__$1)){
var statearr_24791_24848 = state_24782__$1;
(statearr_24791_24848[(1)] = (29));

} else {
var statearr_24792_24849 = state_24782__$1;
(statearr_24792_24849[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24783 === (4))){
var inst_24700 = (state_24782[(2)]);
var state_24782__$1 = state_24782;
if(cljs.core.truth_(inst_24700)){
var statearr_24793_24850 = state_24782__$1;
(statearr_24793_24850[(1)] = (8));

} else {
var statearr_24794_24851 = state_24782__$1;
(statearr_24794_24851[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24783 === (15))){
var inst_24727 = (state_24782[(2)]);
var state_24782__$1 = state_24782;
if(cljs.core.truth_(inst_24727)){
var statearr_24795_24852 = state_24782__$1;
(statearr_24795_24852[(1)] = (19));

} else {
var statearr_24796_24853 = state_24782__$1;
(statearr_24796_24853[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24783 === (21))){
var inst_24732 = (state_24782[(12)]);
var inst_24732__$1 = (state_24782[(2)]);
var inst_24733 = cljs.core.get.call(null,inst_24732__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_24734 = cljs.core.get.call(null,inst_24732__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_24735 = cljs.core.get.call(null,inst_24732__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_24782__$1 = (function (){var statearr_24797 = state_24782;
(statearr_24797[(11)] = inst_24733);

(statearr_24797[(12)] = inst_24732__$1);

(statearr_24797[(13)] = inst_24734);

return statearr_24797;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_24782__$1,(22),inst_24735);
} else {
if((state_val_24783 === (31))){
var inst_24764 = (state_24782[(2)]);
var state_24782__$1 = state_24782;
if(cljs.core.truth_(inst_24764)){
var statearr_24798_24854 = state_24782__$1;
(statearr_24798_24854[(1)] = (32));

} else {
var statearr_24799_24855 = state_24782__$1;
(statearr_24799_24855[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24783 === (32))){
var inst_24741 = (state_24782[(14)]);
var state_24782__$1 = state_24782;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24782__$1,(35),out,inst_24741);
} else {
if((state_val_24783 === (33))){
var inst_24732 = (state_24782[(12)]);
var inst_24709 = inst_24732;
var state_24782__$1 = (function (){var statearr_24800 = state_24782;
(statearr_24800[(7)] = inst_24709);

return statearr_24800;
})();
var statearr_24801_24856 = state_24782__$1;
(statearr_24801_24856[(2)] = null);

(statearr_24801_24856[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24783 === (13))){
var inst_24709 = (state_24782[(7)]);
var inst_24716 = inst_24709.cljs$lang$protocol_mask$partition0$;
var inst_24717 = (inst_24716 & (64));
var inst_24718 = inst_24709.cljs$core$ISeq$;
var inst_24719 = (cljs.core.PROTOCOL_SENTINEL === inst_24718);
var inst_24720 = ((inst_24717) || (inst_24719));
var state_24782__$1 = state_24782;
if(cljs.core.truth_(inst_24720)){
var statearr_24802_24857 = state_24782__$1;
(statearr_24802_24857[(1)] = (16));

} else {
var statearr_24803_24858 = state_24782__$1;
(statearr_24803_24858[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24783 === (22))){
var inst_24741 = (state_24782[(14)]);
var inst_24742 = (state_24782[(9)]);
var inst_24740 = (state_24782[(2)]);
var inst_24741__$1 = cljs.core.nth.call(null,inst_24740,(0),null);
var inst_24742__$1 = cljs.core.nth.call(null,inst_24740,(1),null);
var inst_24743 = (inst_24741__$1 == null);
var inst_24744 = cljs.core._EQ_.call(null,inst_24742__$1,change);
var inst_24745 = ((inst_24743) || (inst_24744));
var state_24782__$1 = (function (){var statearr_24804 = state_24782;
(statearr_24804[(14)] = inst_24741__$1);

(statearr_24804[(9)] = inst_24742__$1);

return statearr_24804;
})();
if(cljs.core.truth_(inst_24745)){
var statearr_24805_24859 = state_24782__$1;
(statearr_24805_24859[(1)] = (23));

} else {
var statearr_24806_24860 = state_24782__$1;
(statearr_24806_24860[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24783 === (36))){
var inst_24732 = (state_24782[(12)]);
var inst_24709 = inst_24732;
var state_24782__$1 = (function (){var statearr_24807 = state_24782;
(statearr_24807[(7)] = inst_24709);

return statearr_24807;
})();
var statearr_24808_24861 = state_24782__$1;
(statearr_24808_24861[(2)] = null);

(statearr_24808_24861[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24783 === (29))){
var inst_24756 = (state_24782[(10)]);
var state_24782__$1 = state_24782;
var statearr_24809_24862 = state_24782__$1;
(statearr_24809_24862[(2)] = inst_24756);

(statearr_24809_24862[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24783 === (6))){
var state_24782__$1 = state_24782;
var statearr_24810_24863 = state_24782__$1;
(statearr_24810_24863[(2)] = false);

(statearr_24810_24863[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24783 === (28))){
var inst_24752 = (state_24782[(2)]);
var inst_24753 = calc_state.call(null);
var inst_24709 = inst_24753;
var state_24782__$1 = (function (){var statearr_24811 = state_24782;
(statearr_24811[(15)] = inst_24752);

(statearr_24811[(7)] = inst_24709);

return statearr_24811;
})();
var statearr_24812_24864 = state_24782__$1;
(statearr_24812_24864[(2)] = null);

(statearr_24812_24864[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24783 === (25))){
var inst_24778 = (state_24782[(2)]);
var state_24782__$1 = state_24782;
var statearr_24813_24865 = state_24782__$1;
(statearr_24813_24865[(2)] = inst_24778);

(statearr_24813_24865[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24783 === (34))){
var inst_24776 = (state_24782[(2)]);
var state_24782__$1 = state_24782;
var statearr_24814_24866 = state_24782__$1;
(statearr_24814_24866[(2)] = inst_24776);

(statearr_24814_24866[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24783 === (17))){
var state_24782__$1 = state_24782;
var statearr_24815_24867 = state_24782__$1;
(statearr_24815_24867[(2)] = false);

(statearr_24815_24867[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24783 === (3))){
var state_24782__$1 = state_24782;
var statearr_24816_24868 = state_24782__$1;
(statearr_24816_24868[(2)] = false);

(statearr_24816_24868[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24783 === (12))){
var inst_24780 = (state_24782[(2)]);
var state_24782__$1 = state_24782;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24782__$1,inst_24780);
} else {
if((state_val_24783 === (2))){
var inst_24684 = (state_24782[(8)]);
var inst_24689 = inst_24684.cljs$lang$protocol_mask$partition0$;
var inst_24690 = (inst_24689 & (64));
var inst_24691 = inst_24684.cljs$core$ISeq$;
var inst_24692 = (cljs.core.PROTOCOL_SENTINEL === inst_24691);
var inst_24693 = ((inst_24690) || (inst_24692));
var state_24782__$1 = state_24782;
if(cljs.core.truth_(inst_24693)){
var statearr_24817_24869 = state_24782__$1;
(statearr_24817_24869[(1)] = (5));

} else {
var statearr_24818_24870 = state_24782__$1;
(statearr_24818_24870[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24783 === (23))){
var inst_24741 = (state_24782[(14)]);
var inst_24747 = (inst_24741 == null);
var state_24782__$1 = state_24782;
if(cljs.core.truth_(inst_24747)){
var statearr_24819_24871 = state_24782__$1;
(statearr_24819_24871[(1)] = (26));

} else {
var statearr_24820_24872 = state_24782__$1;
(statearr_24820_24872[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24783 === (35))){
var inst_24767 = (state_24782[(2)]);
var state_24782__$1 = state_24782;
if(cljs.core.truth_(inst_24767)){
var statearr_24821_24873 = state_24782__$1;
(statearr_24821_24873[(1)] = (36));

} else {
var statearr_24822_24874 = state_24782__$1;
(statearr_24822_24874[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24783 === (19))){
var inst_24709 = (state_24782[(7)]);
var inst_24729 = cljs.core.apply.call(null,cljs.core.hash_map,inst_24709);
var state_24782__$1 = state_24782;
var statearr_24823_24875 = state_24782__$1;
(statearr_24823_24875[(2)] = inst_24729);

(statearr_24823_24875[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24783 === (11))){
var inst_24709 = (state_24782[(7)]);
var inst_24713 = (inst_24709 == null);
var inst_24714 = cljs.core.not.call(null,inst_24713);
var state_24782__$1 = state_24782;
if(inst_24714){
var statearr_24824_24876 = state_24782__$1;
(statearr_24824_24876[(1)] = (13));

} else {
var statearr_24825_24877 = state_24782__$1;
(statearr_24825_24877[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24783 === (9))){
var inst_24684 = (state_24782[(8)]);
var state_24782__$1 = state_24782;
var statearr_24826_24878 = state_24782__$1;
(statearr_24826_24878[(2)] = inst_24684);

(statearr_24826_24878[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24783 === (5))){
var state_24782__$1 = state_24782;
var statearr_24827_24879 = state_24782__$1;
(statearr_24827_24879[(2)] = true);

(statearr_24827_24879[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24783 === (14))){
var state_24782__$1 = state_24782;
var statearr_24828_24880 = state_24782__$1;
(statearr_24828_24880[(2)] = false);

(statearr_24828_24880[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24783 === (26))){
var inst_24742 = (state_24782[(9)]);
var inst_24749 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_24742);
var state_24782__$1 = state_24782;
var statearr_24829_24881 = state_24782__$1;
(statearr_24829_24881[(2)] = inst_24749);

(statearr_24829_24881[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24783 === (16))){
var state_24782__$1 = state_24782;
var statearr_24830_24882 = state_24782__$1;
(statearr_24830_24882[(2)] = true);

(statearr_24830_24882[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24783 === (38))){
var inst_24772 = (state_24782[(2)]);
var state_24782__$1 = state_24782;
var statearr_24831_24883 = state_24782__$1;
(statearr_24831_24883[(2)] = inst_24772);

(statearr_24831_24883[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24783 === (30))){
var inst_24742 = (state_24782[(9)]);
var inst_24733 = (state_24782[(11)]);
var inst_24734 = (state_24782[(13)]);
var inst_24759 = cljs.core.empty_QMARK_.call(null,inst_24733);
var inst_24760 = inst_24734.call(null,inst_24742);
var inst_24761 = cljs.core.not.call(null,inst_24760);
var inst_24762 = ((inst_24759) && (inst_24761));
var state_24782__$1 = state_24782;
var statearr_24832_24884 = state_24782__$1;
(statearr_24832_24884[(2)] = inst_24762);

(statearr_24832_24884[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24783 === (10))){
var inst_24684 = (state_24782[(8)]);
var inst_24705 = (state_24782[(2)]);
var inst_24706 = cljs.core.get.call(null,inst_24705,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_24707 = cljs.core.get.call(null,inst_24705,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_24708 = cljs.core.get.call(null,inst_24705,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_24709 = inst_24684;
var state_24782__$1 = (function (){var statearr_24833 = state_24782;
(statearr_24833[(16)] = inst_24708);

(statearr_24833[(17)] = inst_24706);

(statearr_24833[(18)] = inst_24707);

(statearr_24833[(7)] = inst_24709);

return statearr_24833;
})();
var statearr_24834_24885 = state_24782__$1;
(statearr_24834_24885[(2)] = null);

(statearr_24834_24885[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24783 === (18))){
var inst_24724 = (state_24782[(2)]);
var state_24782__$1 = state_24782;
var statearr_24835_24886 = state_24782__$1;
(statearr_24835_24886[(2)] = inst_24724);

(statearr_24835_24886[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24783 === (37))){
var state_24782__$1 = state_24782;
var statearr_24836_24887 = state_24782__$1;
(statearr_24836_24887[(2)] = null);

(statearr_24836_24887[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24783 === (8))){
var inst_24684 = (state_24782[(8)]);
var inst_24702 = cljs.core.apply.call(null,cljs.core.hash_map,inst_24684);
var state_24782__$1 = state_24782;
var statearr_24837_24888 = state_24782__$1;
(statearr_24837_24888[(2)] = inst_24702);

(statearr_24837_24888[(1)] = (10));


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
});})(c__23784__auto___24842,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__23689__auto__,c__23784__auto___24842,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__23690__auto__ = null;
var cljs$core$async$mix_$_state_machine__23690__auto____0 = (function (){
var statearr_24838 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24838[(0)] = cljs$core$async$mix_$_state_machine__23690__auto__);

(statearr_24838[(1)] = (1));

return statearr_24838;
});
var cljs$core$async$mix_$_state_machine__23690__auto____1 = (function (state_24782){
while(true){
var ret_value__23691__auto__ = (function (){try{while(true){
var result__23692__auto__ = switch__23689__auto__.call(null,state_24782);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23692__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23692__auto__;
}
break;
}
}catch (e24839){if((e24839 instanceof Object)){
var ex__23693__auto__ = e24839;
var statearr_24840_24889 = state_24782;
(statearr_24840_24889[(5)] = ex__23693__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24782);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24839;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23691__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24890 = state_24782;
state_24782 = G__24890;
continue;
} else {
return ret_value__23691__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__23690__auto__ = function(state_24782){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__23690__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__23690__auto____1.call(this,state_24782);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__23690__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__23690__auto____0;
cljs$core$async$mix_$_state_machine__23690__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__23690__auto____1;
return cljs$core$async$mix_$_state_machine__23690__auto__;
})()
;})(switch__23689__auto__,c__23784__auto___24842,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__23786__auto__ = (function (){var statearr_24841 = f__23785__auto__.call(null);
(statearr_24841[(6)] = c__23784__auto___24842);

return statearr_24841;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23786__auto__);
});})(c__23784__auto___24842,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__4431__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,p,v,ch);
} else {
var m__4431__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__24892 = arguments.length;
switch (G__24892) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,p);
} else {
var m__4431__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,p,v);
} else {
var m__4431__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__24896 = arguments.length;
switch (G__24896) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__4131__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__4131__auto__,mults){
return (function (p1__24894_SHARP_){
if(cljs.core.truth_(p1__24894_SHARP_.call(null,topic))){
return p1__24894_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__24894_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4131__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24897 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24897 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta24898){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta24898 = meta24898;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24897.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_24899,meta24898__$1){
var self__ = this;
var _24899__$1 = this;
return (new cljs.core.async.t_cljs$core$async24897(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta24898__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24897.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_24899){
var self__ = this;
var _24899__$1 = this;
return self__.meta24898;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24897.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24897.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24897.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24897.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24897.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5720__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5720__auto__)){
var m = temp__5720__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24897.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24897.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24897.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta24898","meta24898",-2112222469,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24897.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24897.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24897";

cljs.core.async.t_cljs$core$async24897.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async24897");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24897.
 */
cljs.core.async.__GT_t_cljs$core$async24897 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async24897(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta24898){
return (new cljs.core.async.t_cljs$core$async24897(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta24898));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async24897(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__23784__auto___25017 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23784__auto___25017,mults,ensure_mult,p){
return (function (){
var f__23785__auto__ = (function (){var switch__23689__auto__ = ((function (c__23784__auto___25017,mults,ensure_mult,p){
return (function (state_24971){
var state_val_24972 = (state_24971[(1)]);
if((state_val_24972 === (7))){
var inst_24967 = (state_24971[(2)]);
var state_24971__$1 = state_24971;
var statearr_24973_25018 = state_24971__$1;
(statearr_24973_25018[(2)] = inst_24967);

(statearr_24973_25018[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24972 === (20))){
var state_24971__$1 = state_24971;
var statearr_24974_25019 = state_24971__$1;
(statearr_24974_25019[(2)] = null);

(statearr_24974_25019[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24972 === (1))){
var state_24971__$1 = state_24971;
var statearr_24975_25020 = state_24971__$1;
(statearr_24975_25020[(2)] = null);

(statearr_24975_25020[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24972 === (24))){
var inst_24950 = (state_24971[(7)]);
var inst_24959 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_24950);
var state_24971__$1 = state_24971;
var statearr_24976_25021 = state_24971__$1;
(statearr_24976_25021[(2)] = inst_24959);

(statearr_24976_25021[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24972 === (4))){
var inst_24902 = (state_24971[(8)]);
var inst_24902__$1 = (state_24971[(2)]);
var inst_24903 = (inst_24902__$1 == null);
var state_24971__$1 = (function (){var statearr_24977 = state_24971;
(statearr_24977[(8)] = inst_24902__$1);

return statearr_24977;
})();
if(cljs.core.truth_(inst_24903)){
var statearr_24978_25022 = state_24971__$1;
(statearr_24978_25022[(1)] = (5));

} else {
var statearr_24979_25023 = state_24971__$1;
(statearr_24979_25023[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24972 === (15))){
var inst_24944 = (state_24971[(2)]);
var state_24971__$1 = state_24971;
var statearr_24980_25024 = state_24971__$1;
(statearr_24980_25024[(2)] = inst_24944);

(statearr_24980_25024[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24972 === (21))){
var inst_24964 = (state_24971[(2)]);
var state_24971__$1 = (function (){var statearr_24981 = state_24971;
(statearr_24981[(9)] = inst_24964);

return statearr_24981;
})();
var statearr_24982_25025 = state_24971__$1;
(statearr_24982_25025[(2)] = null);

(statearr_24982_25025[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24972 === (13))){
var inst_24926 = (state_24971[(10)]);
var inst_24928 = cljs.core.chunked_seq_QMARK_.call(null,inst_24926);
var state_24971__$1 = state_24971;
if(inst_24928){
var statearr_24983_25026 = state_24971__$1;
(statearr_24983_25026[(1)] = (16));

} else {
var statearr_24984_25027 = state_24971__$1;
(statearr_24984_25027[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24972 === (22))){
var inst_24956 = (state_24971[(2)]);
var state_24971__$1 = state_24971;
if(cljs.core.truth_(inst_24956)){
var statearr_24985_25028 = state_24971__$1;
(statearr_24985_25028[(1)] = (23));

} else {
var statearr_24986_25029 = state_24971__$1;
(statearr_24986_25029[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24972 === (6))){
var inst_24952 = (state_24971[(11)]);
var inst_24902 = (state_24971[(8)]);
var inst_24950 = (state_24971[(7)]);
var inst_24950__$1 = topic_fn.call(null,inst_24902);
var inst_24951 = cljs.core.deref.call(null,mults);
var inst_24952__$1 = cljs.core.get.call(null,inst_24951,inst_24950__$1);
var state_24971__$1 = (function (){var statearr_24987 = state_24971;
(statearr_24987[(11)] = inst_24952__$1);

(statearr_24987[(7)] = inst_24950__$1);

return statearr_24987;
})();
if(cljs.core.truth_(inst_24952__$1)){
var statearr_24988_25030 = state_24971__$1;
(statearr_24988_25030[(1)] = (19));

} else {
var statearr_24989_25031 = state_24971__$1;
(statearr_24989_25031[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24972 === (25))){
var inst_24961 = (state_24971[(2)]);
var state_24971__$1 = state_24971;
var statearr_24990_25032 = state_24971__$1;
(statearr_24990_25032[(2)] = inst_24961);

(statearr_24990_25032[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24972 === (17))){
var inst_24926 = (state_24971[(10)]);
var inst_24935 = cljs.core.first.call(null,inst_24926);
var inst_24936 = cljs.core.async.muxch_STAR_.call(null,inst_24935);
var inst_24937 = cljs.core.async.close_BANG_.call(null,inst_24936);
var inst_24938 = cljs.core.next.call(null,inst_24926);
var inst_24912 = inst_24938;
var inst_24913 = null;
var inst_24914 = (0);
var inst_24915 = (0);
var state_24971__$1 = (function (){var statearr_24991 = state_24971;
(statearr_24991[(12)] = inst_24912);

(statearr_24991[(13)] = inst_24915);

(statearr_24991[(14)] = inst_24914);

(statearr_24991[(15)] = inst_24913);

(statearr_24991[(16)] = inst_24937);

return statearr_24991;
})();
var statearr_24992_25033 = state_24971__$1;
(statearr_24992_25033[(2)] = null);

(statearr_24992_25033[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24972 === (3))){
var inst_24969 = (state_24971[(2)]);
var state_24971__$1 = state_24971;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24971__$1,inst_24969);
} else {
if((state_val_24972 === (12))){
var inst_24946 = (state_24971[(2)]);
var state_24971__$1 = state_24971;
var statearr_24993_25034 = state_24971__$1;
(statearr_24993_25034[(2)] = inst_24946);

(statearr_24993_25034[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24972 === (2))){
var state_24971__$1 = state_24971;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24971__$1,(4),ch);
} else {
if((state_val_24972 === (23))){
var state_24971__$1 = state_24971;
var statearr_24994_25035 = state_24971__$1;
(statearr_24994_25035[(2)] = null);

(statearr_24994_25035[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24972 === (19))){
var inst_24952 = (state_24971[(11)]);
var inst_24902 = (state_24971[(8)]);
var inst_24954 = cljs.core.async.muxch_STAR_.call(null,inst_24952);
var state_24971__$1 = state_24971;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24971__$1,(22),inst_24954,inst_24902);
} else {
if((state_val_24972 === (11))){
var inst_24912 = (state_24971[(12)]);
var inst_24926 = (state_24971[(10)]);
var inst_24926__$1 = cljs.core.seq.call(null,inst_24912);
var state_24971__$1 = (function (){var statearr_24995 = state_24971;
(statearr_24995[(10)] = inst_24926__$1);

return statearr_24995;
})();
if(inst_24926__$1){
var statearr_24996_25036 = state_24971__$1;
(statearr_24996_25036[(1)] = (13));

} else {
var statearr_24997_25037 = state_24971__$1;
(statearr_24997_25037[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24972 === (9))){
var inst_24948 = (state_24971[(2)]);
var state_24971__$1 = state_24971;
var statearr_24998_25038 = state_24971__$1;
(statearr_24998_25038[(2)] = inst_24948);

(statearr_24998_25038[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24972 === (5))){
var inst_24909 = cljs.core.deref.call(null,mults);
var inst_24910 = cljs.core.vals.call(null,inst_24909);
var inst_24911 = cljs.core.seq.call(null,inst_24910);
var inst_24912 = inst_24911;
var inst_24913 = null;
var inst_24914 = (0);
var inst_24915 = (0);
var state_24971__$1 = (function (){var statearr_24999 = state_24971;
(statearr_24999[(12)] = inst_24912);

(statearr_24999[(13)] = inst_24915);

(statearr_24999[(14)] = inst_24914);

(statearr_24999[(15)] = inst_24913);

return statearr_24999;
})();
var statearr_25000_25039 = state_24971__$1;
(statearr_25000_25039[(2)] = null);

(statearr_25000_25039[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24972 === (14))){
var state_24971__$1 = state_24971;
var statearr_25004_25040 = state_24971__$1;
(statearr_25004_25040[(2)] = null);

(statearr_25004_25040[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24972 === (16))){
var inst_24926 = (state_24971[(10)]);
var inst_24930 = cljs.core.chunk_first.call(null,inst_24926);
var inst_24931 = cljs.core.chunk_rest.call(null,inst_24926);
var inst_24932 = cljs.core.count.call(null,inst_24930);
var inst_24912 = inst_24931;
var inst_24913 = inst_24930;
var inst_24914 = inst_24932;
var inst_24915 = (0);
var state_24971__$1 = (function (){var statearr_25005 = state_24971;
(statearr_25005[(12)] = inst_24912);

(statearr_25005[(13)] = inst_24915);

(statearr_25005[(14)] = inst_24914);

(statearr_25005[(15)] = inst_24913);

return statearr_25005;
})();
var statearr_25006_25041 = state_24971__$1;
(statearr_25006_25041[(2)] = null);

(statearr_25006_25041[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24972 === (10))){
var inst_24912 = (state_24971[(12)]);
var inst_24915 = (state_24971[(13)]);
var inst_24914 = (state_24971[(14)]);
var inst_24913 = (state_24971[(15)]);
var inst_24920 = cljs.core._nth.call(null,inst_24913,inst_24915);
var inst_24921 = cljs.core.async.muxch_STAR_.call(null,inst_24920);
var inst_24922 = cljs.core.async.close_BANG_.call(null,inst_24921);
var inst_24923 = (inst_24915 + (1));
var tmp25001 = inst_24912;
var tmp25002 = inst_24914;
var tmp25003 = inst_24913;
var inst_24912__$1 = tmp25001;
var inst_24913__$1 = tmp25003;
var inst_24914__$1 = tmp25002;
var inst_24915__$1 = inst_24923;
var state_24971__$1 = (function (){var statearr_25007 = state_24971;
(statearr_25007[(12)] = inst_24912__$1);

(statearr_25007[(17)] = inst_24922);

(statearr_25007[(13)] = inst_24915__$1);

(statearr_25007[(14)] = inst_24914__$1);

(statearr_25007[(15)] = inst_24913__$1);

return statearr_25007;
})();
var statearr_25008_25042 = state_24971__$1;
(statearr_25008_25042[(2)] = null);

(statearr_25008_25042[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24972 === (18))){
var inst_24941 = (state_24971[(2)]);
var state_24971__$1 = state_24971;
var statearr_25009_25043 = state_24971__$1;
(statearr_25009_25043[(2)] = inst_24941);

(statearr_25009_25043[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24972 === (8))){
var inst_24915 = (state_24971[(13)]);
var inst_24914 = (state_24971[(14)]);
var inst_24917 = (inst_24915 < inst_24914);
var inst_24918 = inst_24917;
var state_24971__$1 = state_24971;
if(cljs.core.truth_(inst_24918)){
var statearr_25010_25044 = state_24971__$1;
(statearr_25010_25044[(1)] = (10));

} else {
var statearr_25011_25045 = state_24971__$1;
(statearr_25011_25045[(1)] = (11));

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
});})(c__23784__auto___25017,mults,ensure_mult,p))
;
return ((function (switch__23689__auto__,c__23784__auto___25017,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__23690__auto__ = null;
var cljs$core$async$state_machine__23690__auto____0 = (function (){
var statearr_25012 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25012[(0)] = cljs$core$async$state_machine__23690__auto__);

(statearr_25012[(1)] = (1));

return statearr_25012;
});
var cljs$core$async$state_machine__23690__auto____1 = (function (state_24971){
while(true){
var ret_value__23691__auto__ = (function (){try{while(true){
var result__23692__auto__ = switch__23689__auto__.call(null,state_24971);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23692__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23692__auto__;
}
break;
}
}catch (e25013){if((e25013 instanceof Object)){
var ex__23693__auto__ = e25013;
var statearr_25014_25046 = state_24971;
(statearr_25014_25046[(5)] = ex__23693__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24971);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25013;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23691__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25047 = state_24971;
state_24971 = G__25047;
continue;
} else {
return ret_value__23691__auto__;
}
break;
}
});
cljs$core$async$state_machine__23690__auto__ = function(state_24971){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23690__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23690__auto____1.call(this,state_24971);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23690__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23690__auto____0;
cljs$core$async$state_machine__23690__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23690__auto____1;
return cljs$core$async$state_machine__23690__auto__;
})()
;})(switch__23689__auto__,c__23784__auto___25017,mults,ensure_mult,p))
})();
var state__23786__auto__ = (function (){var statearr_25015 = f__23785__auto__.call(null);
(statearr_25015[(6)] = c__23784__auto___25017);

return statearr_25015;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23786__auto__);
});})(c__23784__auto___25017,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__25049 = arguments.length;
switch (G__25049) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__25052 = arguments.length;
switch (G__25052) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__25055 = arguments.length;
switch (G__25055) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__23784__auto___25122 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23784__auto___25122,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__23785__auto__ = (function (){var switch__23689__auto__ = ((function (c__23784__auto___25122,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_25094){
var state_val_25095 = (state_25094[(1)]);
if((state_val_25095 === (7))){
var state_25094__$1 = state_25094;
var statearr_25096_25123 = state_25094__$1;
(statearr_25096_25123[(2)] = null);

(statearr_25096_25123[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25095 === (1))){
var state_25094__$1 = state_25094;
var statearr_25097_25124 = state_25094__$1;
(statearr_25097_25124[(2)] = null);

(statearr_25097_25124[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25095 === (4))){
var inst_25058 = (state_25094[(7)]);
var inst_25060 = (inst_25058 < cnt);
var state_25094__$1 = state_25094;
if(cljs.core.truth_(inst_25060)){
var statearr_25098_25125 = state_25094__$1;
(statearr_25098_25125[(1)] = (6));

} else {
var statearr_25099_25126 = state_25094__$1;
(statearr_25099_25126[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25095 === (15))){
var inst_25090 = (state_25094[(2)]);
var state_25094__$1 = state_25094;
var statearr_25100_25127 = state_25094__$1;
(statearr_25100_25127[(2)] = inst_25090);

(statearr_25100_25127[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25095 === (13))){
var inst_25083 = cljs.core.async.close_BANG_.call(null,out);
var state_25094__$1 = state_25094;
var statearr_25101_25128 = state_25094__$1;
(statearr_25101_25128[(2)] = inst_25083);

(statearr_25101_25128[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25095 === (6))){
var state_25094__$1 = state_25094;
var statearr_25102_25129 = state_25094__$1;
(statearr_25102_25129[(2)] = null);

(statearr_25102_25129[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25095 === (3))){
var inst_25092 = (state_25094[(2)]);
var state_25094__$1 = state_25094;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25094__$1,inst_25092);
} else {
if((state_val_25095 === (12))){
var inst_25080 = (state_25094[(8)]);
var inst_25080__$1 = (state_25094[(2)]);
var inst_25081 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_25080__$1);
var state_25094__$1 = (function (){var statearr_25103 = state_25094;
(statearr_25103[(8)] = inst_25080__$1);

return statearr_25103;
})();
if(cljs.core.truth_(inst_25081)){
var statearr_25104_25130 = state_25094__$1;
(statearr_25104_25130[(1)] = (13));

} else {
var statearr_25105_25131 = state_25094__$1;
(statearr_25105_25131[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25095 === (2))){
var inst_25057 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_25058 = (0);
var state_25094__$1 = (function (){var statearr_25106 = state_25094;
(statearr_25106[(9)] = inst_25057);

(statearr_25106[(7)] = inst_25058);

return statearr_25106;
})();
var statearr_25107_25132 = state_25094__$1;
(statearr_25107_25132[(2)] = null);

(statearr_25107_25132[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25095 === (11))){
var inst_25058 = (state_25094[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_25094,(10),Object,null,(9));
var inst_25067 = chs__$1.call(null,inst_25058);
var inst_25068 = done.call(null,inst_25058);
var inst_25069 = cljs.core.async.take_BANG_.call(null,inst_25067,inst_25068);
var state_25094__$1 = state_25094;
var statearr_25108_25133 = state_25094__$1;
(statearr_25108_25133[(2)] = inst_25069);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25094__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25095 === (9))){
var inst_25058 = (state_25094[(7)]);
var inst_25071 = (state_25094[(2)]);
var inst_25072 = (inst_25058 + (1));
var inst_25058__$1 = inst_25072;
var state_25094__$1 = (function (){var statearr_25109 = state_25094;
(statearr_25109[(10)] = inst_25071);

(statearr_25109[(7)] = inst_25058__$1);

return statearr_25109;
})();
var statearr_25110_25134 = state_25094__$1;
(statearr_25110_25134[(2)] = null);

(statearr_25110_25134[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25095 === (5))){
var inst_25078 = (state_25094[(2)]);
var state_25094__$1 = (function (){var statearr_25111 = state_25094;
(statearr_25111[(11)] = inst_25078);

return statearr_25111;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25094__$1,(12),dchan);
} else {
if((state_val_25095 === (14))){
var inst_25080 = (state_25094[(8)]);
var inst_25085 = cljs.core.apply.call(null,f,inst_25080);
var state_25094__$1 = state_25094;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25094__$1,(16),out,inst_25085);
} else {
if((state_val_25095 === (16))){
var inst_25087 = (state_25094[(2)]);
var state_25094__$1 = (function (){var statearr_25112 = state_25094;
(statearr_25112[(12)] = inst_25087);

return statearr_25112;
})();
var statearr_25113_25135 = state_25094__$1;
(statearr_25113_25135[(2)] = null);

(statearr_25113_25135[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25095 === (10))){
var inst_25062 = (state_25094[(2)]);
var inst_25063 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_25094__$1 = (function (){var statearr_25114 = state_25094;
(statearr_25114[(13)] = inst_25062);

return statearr_25114;
})();
var statearr_25115_25136 = state_25094__$1;
(statearr_25115_25136[(2)] = inst_25063);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25094__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25095 === (8))){
var inst_25076 = (state_25094[(2)]);
var state_25094__$1 = state_25094;
var statearr_25116_25137 = state_25094__$1;
(statearr_25116_25137[(2)] = inst_25076);

(statearr_25116_25137[(1)] = (5));


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
});})(c__23784__auto___25122,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__23689__auto__,c__23784__auto___25122,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__23690__auto__ = null;
var cljs$core$async$state_machine__23690__auto____0 = (function (){
var statearr_25117 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25117[(0)] = cljs$core$async$state_machine__23690__auto__);

(statearr_25117[(1)] = (1));

return statearr_25117;
});
var cljs$core$async$state_machine__23690__auto____1 = (function (state_25094){
while(true){
var ret_value__23691__auto__ = (function (){try{while(true){
var result__23692__auto__ = switch__23689__auto__.call(null,state_25094);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23692__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23692__auto__;
}
break;
}
}catch (e25118){if((e25118 instanceof Object)){
var ex__23693__auto__ = e25118;
var statearr_25119_25138 = state_25094;
(statearr_25119_25138[(5)] = ex__23693__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25094);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25118;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23691__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25139 = state_25094;
state_25094 = G__25139;
continue;
} else {
return ret_value__23691__auto__;
}
break;
}
});
cljs$core$async$state_machine__23690__auto__ = function(state_25094){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23690__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23690__auto____1.call(this,state_25094);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23690__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23690__auto____0;
cljs$core$async$state_machine__23690__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23690__auto____1;
return cljs$core$async$state_machine__23690__auto__;
})()
;})(switch__23689__auto__,c__23784__auto___25122,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__23786__auto__ = (function (){var statearr_25120 = f__23785__auto__.call(null);
(statearr_25120[(6)] = c__23784__auto___25122);

return statearr_25120;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23786__auto__);
});})(c__23784__auto___25122,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__25142 = arguments.length;
switch (G__25142) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23784__auto___25196 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23784__auto___25196,out){
return (function (){
var f__23785__auto__ = (function (){var switch__23689__auto__ = ((function (c__23784__auto___25196,out){
return (function (state_25174){
var state_val_25175 = (state_25174[(1)]);
if((state_val_25175 === (7))){
var inst_25153 = (state_25174[(7)]);
var inst_25154 = (state_25174[(8)]);
var inst_25153__$1 = (state_25174[(2)]);
var inst_25154__$1 = cljs.core.nth.call(null,inst_25153__$1,(0),null);
var inst_25155 = cljs.core.nth.call(null,inst_25153__$1,(1),null);
var inst_25156 = (inst_25154__$1 == null);
var state_25174__$1 = (function (){var statearr_25176 = state_25174;
(statearr_25176[(9)] = inst_25155);

(statearr_25176[(7)] = inst_25153__$1);

(statearr_25176[(8)] = inst_25154__$1);

return statearr_25176;
})();
if(cljs.core.truth_(inst_25156)){
var statearr_25177_25197 = state_25174__$1;
(statearr_25177_25197[(1)] = (8));

} else {
var statearr_25178_25198 = state_25174__$1;
(statearr_25178_25198[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25175 === (1))){
var inst_25143 = cljs.core.vec.call(null,chs);
var inst_25144 = inst_25143;
var state_25174__$1 = (function (){var statearr_25179 = state_25174;
(statearr_25179[(10)] = inst_25144);

return statearr_25179;
})();
var statearr_25180_25199 = state_25174__$1;
(statearr_25180_25199[(2)] = null);

(statearr_25180_25199[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25175 === (4))){
var inst_25144 = (state_25174[(10)]);
var state_25174__$1 = state_25174;
return cljs.core.async.ioc_alts_BANG_.call(null,state_25174__$1,(7),inst_25144);
} else {
if((state_val_25175 === (6))){
var inst_25170 = (state_25174[(2)]);
var state_25174__$1 = state_25174;
var statearr_25181_25200 = state_25174__$1;
(statearr_25181_25200[(2)] = inst_25170);

(statearr_25181_25200[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25175 === (3))){
var inst_25172 = (state_25174[(2)]);
var state_25174__$1 = state_25174;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25174__$1,inst_25172);
} else {
if((state_val_25175 === (2))){
var inst_25144 = (state_25174[(10)]);
var inst_25146 = cljs.core.count.call(null,inst_25144);
var inst_25147 = (inst_25146 > (0));
var state_25174__$1 = state_25174;
if(cljs.core.truth_(inst_25147)){
var statearr_25183_25201 = state_25174__$1;
(statearr_25183_25201[(1)] = (4));

} else {
var statearr_25184_25202 = state_25174__$1;
(statearr_25184_25202[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25175 === (11))){
var inst_25144 = (state_25174[(10)]);
var inst_25163 = (state_25174[(2)]);
var tmp25182 = inst_25144;
var inst_25144__$1 = tmp25182;
var state_25174__$1 = (function (){var statearr_25185 = state_25174;
(statearr_25185[(11)] = inst_25163);

(statearr_25185[(10)] = inst_25144__$1);

return statearr_25185;
})();
var statearr_25186_25203 = state_25174__$1;
(statearr_25186_25203[(2)] = null);

(statearr_25186_25203[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25175 === (9))){
var inst_25154 = (state_25174[(8)]);
var state_25174__$1 = state_25174;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25174__$1,(11),out,inst_25154);
} else {
if((state_val_25175 === (5))){
var inst_25168 = cljs.core.async.close_BANG_.call(null,out);
var state_25174__$1 = state_25174;
var statearr_25187_25204 = state_25174__$1;
(statearr_25187_25204[(2)] = inst_25168);

(statearr_25187_25204[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25175 === (10))){
var inst_25166 = (state_25174[(2)]);
var state_25174__$1 = state_25174;
var statearr_25188_25205 = state_25174__$1;
(statearr_25188_25205[(2)] = inst_25166);

(statearr_25188_25205[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25175 === (8))){
var inst_25155 = (state_25174[(9)]);
var inst_25153 = (state_25174[(7)]);
var inst_25154 = (state_25174[(8)]);
var inst_25144 = (state_25174[(10)]);
var inst_25158 = (function (){var cs = inst_25144;
var vec__25149 = inst_25153;
var v = inst_25154;
var c = inst_25155;
return ((function (cs,vec__25149,v,c,inst_25155,inst_25153,inst_25154,inst_25144,state_val_25175,c__23784__auto___25196,out){
return (function (p1__25140_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__25140_SHARP_);
});
;})(cs,vec__25149,v,c,inst_25155,inst_25153,inst_25154,inst_25144,state_val_25175,c__23784__auto___25196,out))
})();
var inst_25159 = cljs.core.filterv.call(null,inst_25158,inst_25144);
var inst_25144__$1 = inst_25159;
var state_25174__$1 = (function (){var statearr_25189 = state_25174;
(statearr_25189[(10)] = inst_25144__$1);

return statearr_25189;
})();
var statearr_25190_25206 = state_25174__$1;
(statearr_25190_25206[(2)] = null);

(statearr_25190_25206[(1)] = (2));


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
});})(c__23784__auto___25196,out))
;
return ((function (switch__23689__auto__,c__23784__auto___25196,out){
return (function() {
var cljs$core$async$state_machine__23690__auto__ = null;
var cljs$core$async$state_machine__23690__auto____0 = (function (){
var statearr_25191 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25191[(0)] = cljs$core$async$state_machine__23690__auto__);

(statearr_25191[(1)] = (1));

return statearr_25191;
});
var cljs$core$async$state_machine__23690__auto____1 = (function (state_25174){
while(true){
var ret_value__23691__auto__ = (function (){try{while(true){
var result__23692__auto__ = switch__23689__auto__.call(null,state_25174);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23692__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23692__auto__;
}
break;
}
}catch (e25192){if((e25192 instanceof Object)){
var ex__23693__auto__ = e25192;
var statearr_25193_25207 = state_25174;
(statearr_25193_25207[(5)] = ex__23693__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25174);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25192;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23691__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25208 = state_25174;
state_25174 = G__25208;
continue;
} else {
return ret_value__23691__auto__;
}
break;
}
});
cljs$core$async$state_machine__23690__auto__ = function(state_25174){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23690__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23690__auto____1.call(this,state_25174);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23690__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23690__auto____0;
cljs$core$async$state_machine__23690__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23690__auto____1;
return cljs$core$async$state_machine__23690__auto__;
})()
;})(switch__23689__auto__,c__23784__auto___25196,out))
})();
var state__23786__auto__ = (function (){var statearr_25194 = f__23785__auto__.call(null);
(statearr_25194[(6)] = c__23784__auto___25196);

return statearr_25194;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23786__auto__);
});})(c__23784__auto___25196,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__25210 = arguments.length;
switch (G__25210) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23784__auto___25255 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23784__auto___25255,out){
return (function (){
var f__23785__auto__ = (function (){var switch__23689__auto__ = ((function (c__23784__auto___25255,out){
return (function (state_25234){
var state_val_25235 = (state_25234[(1)]);
if((state_val_25235 === (7))){
var inst_25216 = (state_25234[(7)]);
var inst_25216__$1 = (state_25234[(2)]);
var inst_25217 = (inst_25216__$1 == null);
var inst_25218 = cljs.core.not.call(null,inst_25217);
var state_25234__$1 = (function (){var statearr_25236 = state_25234;
(statearr_25236[(7)] = inst_25216__$1);

return statearr_25236;
})();
if(inst_25218){
var statearr_25237_25256 = state_25234__$1;
(statearr_25237_25256[(1)] = (8));

} else {
var statearr_25238_25257 = state_25234__$1;
(statearr_25238_25257[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25235 === (1))){
var inst_25211 = (0);
var state_25234__$1 = (function (){var statearr_25239 = state_25234;
(statearr_25239[(8)] = inst_25211);

return statearr_25239;
})();
var statearr_25240_25258 = state_25234__$1;
(statearr_25240_25258[(2)] = null);

(statearr_25240_25258[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25235 === (4))){
var state_25234__$1 = state_25234;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25234__$1,(7),ch);
} else {
if((state_val_25235 === (6))){
var inst_25229 = (state_25234[(2)]);
var state_25234__$1 = state_25234;
var statearr_25241_25259 = state_25234__$1;
(statearr_25241_25259[(2)] = inst_25229);

(statearr_25241_25259[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25235 === (3))){
var inst_25231 = (state_25234[(2)]);
var inst_25232 = cljs.core.async.close_BANG_.call(null,out);
var state_25234__$1 = (function (){var statearr_25242 = state_25234;
(statearr_25242[(9)] = inst_25231);

return statearr_25242;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25234__$1,inst_25232);
} else {
if((state_val_25235 === (2))){
var inst_25211 = (state_25234[(8)]);
var inst_25213 = (inst_25211 < n);
var state_25234__$1 = state_25234;
if(cljs.core.truth_(inst_25213)){
var statearr_25243_25260 = state_25234__$1;
(statearr_25243_25260[(1)] = (4));

} else {
var statearr_25244_25261 = state_25234__$1;
(statearr_25244_25261[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25235 === (11))){
var inst_25211 = (state_25234[(8)]);
var inst_25221 = (state_25234[(2)]);
var inst_25222 = (inst_25211 + (1));
var inst_25211__$1 = inst_25222;
var state_25234__$1 = (function (){var statearr_25245 = state_25234;
(statearr_25245[(10)] = inst_25221);

(statearr_25245[(8)] = inst_25211__$1);

return statearr_25245;
})();
var statearr_25246_25262 = state_25234__$1;
(statearr_25246_25262[(2)] = null);

(statearr_25246_25262[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25235 === (9))){
var state_25234__$1 = state_25234;
var statearr_25247_25263 = state_25234__$1;
(statearr_25247_25263[(2)] = null);

(statearr_25247_25263[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25235 === (5))){
var state_25234__$1 = state_25234;
var statearr_25248_25264 = state_25234__$1;
(statearr_25248_25264[(2)] = null);

(statearr_25248_25264[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25235 === (10))){
var inst_25226 = (state_25234[(2)]);
var state_25234__$1 = state_25234;
var statearr_25249_25265 = state_25234__$1;
(statearr_25249_25265[(2)] = inst_25226);

(statearr_25249_25265[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25235 === (8))){
var inst_25216 = (state_25234[(7)]);
var state_25234__$1 = state_25234;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25234__$1,(11),out,inst_25216);
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
});})(c__23784__auto___25255,out))
;
return ((function (switch__23689__auto__,c__23784__auto___25255,out){
return (function() {
var cljs$core$async$state_machine__23690__auto__ = null;
var cljs$core$async$state_machine__23690__auto____0 = (function (){
var statearr_25250 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25250[(0)] = cljs$core$async$state_machine__23690__auto__);

(statearr_25250[(1)] = (1));

return statearr_25250;
});
var cljs$core$async$state_machine__23690__auto____1 = (function (state_25234){
while(true){
var ret_value__23691__auto__ = (function (){try{while(true){
var result__23692__auto__ = switch__23689__auto__.call(null,state_25234);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23692__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23692__auto__;
}
break;
}
}catch (e25251){if((e25251 instanceof Object)){
var ex__23693__auto__ = e25251;
var statearr_25252_25266 = state_25234;
(statearr_25252_25266[(5)] = ex__23693__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25234);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25251;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23691__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25267 = state_25234;
state_25234 = G__25267;
continue;
} else {
return ret_value__23691__auto__;
}
break;
}
});
cljs$core$async$state_machine__23690__auto__ = function(state_25234){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23690__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23690__auto____1.call(this,state_25234);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23690__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23690__auto____0;
cljs$core$async$state_machine__23690__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23690__auto____1;
return cljs$core$async$state_machine__23690__auto__;
})()
;})(switch__23689__auto__,c__23784__auto___25255,out))
})();
var state__23786__auto__ = (function (){var statearr_25253 = f__23785__auto__.call(null);
(statearr_25253[(6)] = c__23784__auto___25255);

return statearr_25253;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23786__auto__);
});})(c__23784__auto___25255,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25269 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25269 = (function (f,ch,meta25270){
this.f = f;
this.ch = ch;
this.meta25270 = meta25270;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25269.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25271,meta25270__$1){
var self__ = this;
var _25271__$1 = this;
return (new cljs.core.async.t_cljs$core$async25269(self__.f,self__.ch,meta25270__$1));
});

cljs.core.async.t_cljs$core$async25269.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25271){
var self__ = this;
var _25271__$1 = this;
return self__.meta25270;
});

cljs.core.async.t_cljs$core$async25269.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25269.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25269.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25269.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25269.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25272 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25272 = (function (f,ch,meta25270,_,fn1,meta25273){
this.f = f;
this.ch = ch;
this.meta25270 = meta25270;
this._ = _;
this.fn1 = fn1;
this.meta25273 = meta25273;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25272.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_25274,meta25273__$1){
var self__ = this;
var _25274__$1 = this;
return (new cljs.core.async.t_cljs$core$async25272(self__.f,self__.ch,self__.meta25270,self__._,self__.fn1,meta25273__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async25272.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_25274){
var self__ = this;
var _25274__$1 = this;
return self__.meta25273;
});})(___$1))
;

cljs.core.async.t_cljs$core$async25272.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25272.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async25272.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async25272.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__25268_SHARP_){
return f1.call(null,(((p1__25268_SHARP_ == null))?null:self__.f.call(null,p1__25268_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async25272.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25270","meta25270",-2106600825,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async25269","cljs.core.async/t_cljs$core$async25269",1087520556,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta25273","meta25273",1127869,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async25272.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25272.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25272";

cljs.core.async.t_cljs$core$async25272.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async25272");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25272.
 */
cljs.core.async.__GT_t_cljs$core$async25272 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async25272(f__$1,ch__$1,meta25270__$1,___$2,fn1__$1,meta25273){
return (new cljs.core.async.t_cljs$core$async25272(f__$1,ch__$1,meta25270__$1,___$2,fn1__$1,meta25273));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async25272(self__.f,self__.ch,self__.meta25270,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4120__auto__ = ret;
if(cljs.core.truth_(and__4120__auto__)){
return (!((cljs.core.deref.call(null,ret) == null)));
} else {
return and__4120__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async25269.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25269.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async25269.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25270","meta25270",-2106600825,null)], null);
});

cljs.core.async.t_cljs$core$async25269.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25269.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25269";

cljs.core.async.t_cljs$core$async25269.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async25269");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25269.
 */
cljs.core.async.__GT_t_cljs$core$async25269 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async25269(f__$1,ch__$1,meta25270){
return (new cljs.core.async.t_cljs$core$async25269(f__$1,ch__$1,meta25270));
});

}

return (new cljs.core.async.t_cljs$core$async25269(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25275 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25275 = (function (f,ch,meta25276){
this.f = f;
this.ch = ch;
this.meta25276 = meta25276;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25275.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25277,meta25276__$1){
var self__ = this;
var _25277__$1 = this;
return (new cljs.core.async.t_cljs$core$async25275(self__.f,self__.ch,meta25276__$1));
});

cljs.core.async.t_cljs$core$async25275.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25277){
var self__ = this;
var _25277__$1 = this;
return self__.meta25276;
});

cljs.core.async.t_cljs$core$async25275.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25275.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25275.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25275.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async25275.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25275.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async25275.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25276","meta25276",-1863931124,null)], null);
});

cljs.core.async.t_cljs$core$async25275.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25275.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25275";

cljs.core.async.t_cljs$core$async25275.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async25275");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25275.
 */
cljs.core.async.__GT_t_cljs$core$async25275 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async25275(f__$1,ch__$1,meta25276){
return (new cljs.core.async.t_cljs$core$async25275(f__$1,ch__$1,meta25276));
});

}

return (new cljs.core.async.t_cljs$core$async25275(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25278 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25278 = (function (p,ch,meta25279){
this.p = p;
this.ch = ch;
this.meta25279 = meta25279;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25278.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25280,meta25279__$1){
var self__ = this;
var _25280__$1 = this;
return (new cljs.core.async.t_cljs$core$async25278(self__.p,self__.ch,meta25279__$1));
});

cljs.core.async.t_cljs$core$async25278.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25280){
var self__ = this;
var _25280__$1 = this;
return self__.meta25279;
});

cljs.core.async.t_cljs$core$async25278.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25278.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25278.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25278.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25278.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async25278.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25278.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async25278.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25279","meta25279",-419311101,null)], null);
});

cljs.core.async.t_cljs$core$async25278.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25278.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25278";

cljs.core.async.t_cljs$core$async25278.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async25278");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25278.
 */
cljs.core.async.__GT_t_cljs$core$async25278 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async25278(p__$1,ch__$1,meta25279){
return (new cljs.core.async.t_cljs$core$async25278(p__$1,ch__$1,meta25279));
});

}

return (new cljs.core.async.t_cljs$core$async25278(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__25282 = arguments.length;
switch (G__25282) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23784__auto___25322 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23784__auto___25322,out){
return (function (){
var f__23785__auto__ = (function (){var switch__23689__auto__ = ((function (c__23784__auto___25322,out){
return (function (state_25303){
var state_val_25304 = (state_25303[(1)]);
if((state_val_25304 === (7))){
var inst_25299 = (state_25303[(2)]);
var state_25303__$1 = state_25303;
var statearr_25305_25323 = state_25303__$1;
(statearr_25305_25323[(2)] = inst_25299);

(statearr_25305_25323[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25304 === (1))){
var state_25303__$1 = state_25303;
var statearr_25306_25324 = state_25303__$1;
(statearr_25306_25324[(2)] = null);

(statearr_25306_25324[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25304 === (4))){
var inst_25285 = (state_25303[(7)]);
var inst_25285__$1 = (state_25303[(2)]);
var inst_25286 = (inst_25285__$1 == null);
var state_25303__$1 = (function (){var statearr_25307 = state_25303;
(statearr_25307[(7)] = inst_25285__$1);

return statearr_25307;
})();
if(cljs.core.truth_(inst_25286)){
var statearr_25308_25325 = state_25303__$1;
(statearr_25308_25325[(1)] = (5));

} else {
var statearr_25309_25326 = state_25303__$1;
(statearr_25309_25326[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25304 === (6))){
var inst_25285 = (state_25303[(7)]);
var inst_25290 = p.call(null,inst_25285);
var state_25303__$1 = state_25303;
if(cljs.core.truth_(inst_25290)){
var statearr_25310_25327 = state_25303__$1;
(statearr_25310_25327[(1)] = (8));

} else {
var statearr_25311_25328 = state_25303__$1;
(statearr_25311_25328[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25304 === (3))){
var inst_25301 = (state_25303[(2)]);
var state_25303__$1 = state_25303;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25303__$1,inst_25301);
} else {
if((state_val_25304 === (2))){
var state_25303__$1 = state_25303;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25303__$1,(4),ch);
} else {
if((state_val_25304 === (11))){
var inst_25293 = (state_25303[(2)]);
var state_25303__$1 = state_25303;
var statearr_25312_25329 = state_25303__$1;
(statearr_25312_25329[(2)] = inst_25293);

(statearr_25312_25329[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25304 === (9))){
var state_25303__$1 = state_25303;
var statearr_25313_25330 = state_25303__$1;
(statearr_25313_25330[(2)] = null);

(statearr_25313_25330[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25304 === (5))){
var inst_25288 = cljs.core.async.close_BANG_.call(null,out);
var state_25303__$1 = state_25303;
var statearr_25314_25331 = state_25303__$1;
(statearr_25314_25331[(2)] = inst_25288);

(statearr_25314_25331[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25304 === (10))){
var inst_25296 = (state_25303[(2)]);
var state_25303__$1 = (function (){var statearr_25315 = state_25303;
(statearr_25315[(8)] = inst_25296);

return statearr_25315;
})();
var statearr_25316_25332 = state_25303__$1;
(statearr_25316_25332[(2)] = null);

(statearr_25316_25332[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25304 === (8))){
var inst_25285 = (state_25303[(7)]);
var state_25303__$1 = state_25303;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25303__$1,(11),out,inst_25285);
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
});})(c__23784__auto___25322,out))
;
return ((function (switch__23689__auto__,c__23784__auto___25322,out){
return (function() {
var cljs$core$async$state_machine__23690__auto__ = null;
var cljs$core$async$state_machine__23690__auto____0 = (function (){
var statearr_25317 = [null,null,null,null,null,null,null,null,null];
(statearr_25317[(0)] = cljs$core$async$state_machine__23690__auto__);

(statearr_25317[(1)] = (1));

return statearr_25317;
});
var cljs$core$async$state_machine__23690__auto____1 = (function (state_25303){
while(true){
var ret_value__23691__auto__ = (function (){try{while(true){
var result__23692__auto__ = switch__23689__auto__.call(null,state_25303);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23692__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23692__auto__;
}
break;
}
}catch (e25318){if((e25318 instanceof Object)){
var ex__23693__auto__ = e25318;
var statearr_25319_25333 = state_25303;
(statearr_25319_25333[(5)] = ex__23693__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25303);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25318;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23691__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25334 = state_25303;
state_25303 = G__25334;
continue;
} else {
return ret_value__23691__auto__;
}
break;
}
});
cljs$core$async$state_machine__23690__auto__ = function(state_25303){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23690__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23690__auto____1.call(this,state_25303);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23690__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23690__auto____0;
cljs$core$async$state_machine__23690__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23690__auto____1;
return cljs$core$async$state_machine__23690__auto__;
})()
;})(switch__23689__auto__,c__23784__auto___25322,out))
})();
var state__23786__auto__ = (function (){var statearr_25320 = f__23785__auto__.call(null);
(statearr_25320[(6)] = c__23784__auto___25322);

return statearr_25320;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23786__auto__);
});})(c__23784__auto___25322,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__25336 = arguments.length;
switch (G__25336) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__23784__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23784__auto__){
return (function (){
var f__23785__auto__ = (function (){var switch__23689__auto__ = ((function (c__23784__auto__){
return (function (state_25399){
var state_val_25400 = (state_25399[(1)]);
if((state_val_25400 === (7))){
var inst_25395 = (state_25399[(2)]);
var state_25399__$1 = state_25399;
var statearr_25401_25439 = state_25399__$1;
(statearr_25401_25439[(2)] = inst_25395);

(statearr_25401_25439[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25400 === (20))){
var inst_25365 = (state_25399[(7)]);
var inst_25376 = (state_25399[(2)]);
var inst_25377 = cljs.core.next.call(null,inst_25365);
var inst_25351 = inst_25377;
var inst_25352 = null;
var inst_25353 = (0);
var inst_25354 = (0);
var state_25399__$1 = (function (){var statearr_25402 = state_25399;
(statearr_25402[(8)] = inst_25376);

(statearr_25402[(9)] = inst_25353);

(statearr_25402[(10)] = inst_25354);

(statearr_25402[(11)] = inst_25351);

(statearr_25402[(12)] = inst_25352);

return statearr_25402;
})();
var statearr_25403_25440 = state_25399__$1;
(statearr_25403_25440[(2)] = null);

(statearr_25403_25440[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25400 === (1))){
var state_25399__$1 = state_25399;
var statearr_25404_25441 = state_25399__$1;
(statearr_25404_25441[(2)] = null);

(statearr_25404_25441[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25400 === (4))){
var inst_25340 = (state_25399[(13)]);
var inst_25340__$1 = (state_25399[(2)]);
var inst_25341 = (inst_25340__$1 == null);
var state_25399__$1 = (function (){var statearr_25405 = state_25399;
(statearr_25405[(13)] = inst_25340__$1);

return statearr_25405;
})();
if(cljs.core.truth_(inst_25341)){
var statearr_25406_25442 = state_25399__$1;
(statearr_25406_25442[(1)] = (5));

} else {
var statearr_25407_25443 = state_25399__$1;
(statearr_25407_25443[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25400 === (15))){
var state_25399__$1 = state_25399;
var statearr_25411_25444 = state_25399__$1;
(statearr_25411_25444[(2)] = null);

(statearr_25411_25444[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25400 === (21))){
var state_25399__$1 = state_25399;
var statearr_25412_25445 = state_25399__$1;
(statearr_25412_25445[(2)] = null);

(statearr_25412_25445[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25400 === (13))){
var inst_25353 = (state_25399[(9)]);
var inst_25354 = (state_25399[(10)]);
var inst_25351 = (state_25399[(11)]);
var inst_25352 = (state_25399[(12)]);
var inst_25361 = (state_25399[(2)]);
var inst_25362 = (inst_25354 + (1));
var tmp25408 = inst_25353;
var tmp25409 = inst_25351;
var tmp25410 = inst_25352;
var inst_25351__$1 = tmp25409;
var inst_25352__$1 = tmp25410;
var inst_25353__$1 = tmp25408;
var inst_25354__$1 = inst_25362;
var state_25399__$1 = (function (){var statearr_25413 = state_25399;
(statearr_25413[(14)] = inst_25361);

(statearr_25413[(9)] = inst_25353__$1);

(statearr_25413[(10)] = inst_25354__$1);

(statearr_25413[(11)] = inst_25351__$1);

(statearr_25413[(12)] = inst_25352__$1);

return statearr_25413;
})();
var statearr_25414_25446 = state_25399__$1;
(statearr_25414_25446[(2)] = null);

(statearr_25414_25446[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25400 === (22))){
var state_25399__$1 = state_25399;
var statearr_25415_25447 = state_25399__$1;
(statearr_25415_25447[(2)] = null);

(statearr_25415_25447[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25400 === (6))){
var inst_25340 = (state_25399[(13)]);
var inst_25349 = f.call(null,inst_25340);
var inst_25350 = cljs.core.seq.call(null,inst_25349);
var inst_25351 = inst_25350;
var inst_25352 = null;
var inst_25353 = (0);
var inst_25354 = (0);
var state_25399__$1 = (function (){var statearr_25416 = state_25399;
(statearr_25416[(9)] = inst_25353);

(statearr_25416[(10)] = inst_25354);

(statearr_25416[(11)] = inst_25351);

(statearr_25416[(12)] = inst_25352);

return statearr_25416;
})();
var statearr_25417_25448 = state_25399__$1;
(statearr_25417_25448[(2)] = null);

(statearr_25417_25448[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25400 === (17))){
var inst_25365 = (state_25399[(7)]);
var inst_25369 = cljs.core.chunk_first.call(null,inst_25365);
var inst_25370 = cljs.core.chunk_rest.call(null,inst_25365);
var inst_25371 = cljs.core.count.call(null,inst_25369);
var inst_25351 = inst_25370;
var inst_25352 = inst_25369;
var inst_25353 = inst_25371;
var inst_25354 = (0);
var state_25399__$1 = (function (){var statearr_25418 = state_25399;
(statearr_25418[(9)] = inst_25353);

(statearr_25418[(10)] = inst_25354);

(statearr_25418[(11)] = inst_25351);

(statearr_25418[(12)] = inst_25352);

return statearr_25418;
})();
var statearr_25419_25449 = state_25399__$1;
(statearr_25419_25449[(2)] = null);

(statearr_25419_25449[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25400 === (3))){
var inst_25397 = (state_25399[(2)]);
var state_25399__$1 = state_25399;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25399__$1,inst_25397);
} else {
if((state_val_25400 === (12))){
var inst_25385 = (state_25399[(2)]);
var state_25399__$1 = state_25399;
var statearr_25420_25450 = state_25399__$1;
(statearr_25420_25450[(2)] = inst_25385);

(statearr_25420_25450[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25400 === (2))){
var state_25399__$1 = state_25399;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25399__$1,(4),in$);
} else {
if((state_val_25400 === (23))){
var inst_25393 = (state_25399[(2)]);
var state_25399__$1 = state_25399;
var statearr_25421_25451 = state_25399__$1;
(statearr_25421_25451[(2)] = inst_25393);

(statearr_25421_25451[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25400 === (19))){
var inst_25380 = (state_25399[(2)]);
var state_25399__$1 = state_25399;
var statearr_25422_25452 = state_25399__$1;
(statearr_25422_25452[(2)] = inst_25380);

(statearr_25422_25452[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25400 === (11))){
var inst_25365 = (state_25399[(7)]);
var inst_25351 = (state_25399[(11)]);
var inst_25365__$1 = cljs.core.seq.call(null,inst_25351);
var state_25399__$1 = (function (){var statearr_25423 = state_25399;
(statearr_25423[(7)] = inst_25365__$1);

return statearr_25423;
})();
if(inst_25365__$1){
var statearr_25424_25453 = state_25399__$1;
(statearr_25424_25453[(1)] = (14));

} else {
var statearr_25425_25454 = state_25399__$1;
(statearr_25425_25454[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25400 === (9))){
var inst_25387 = (state_25399[(2)]);
var inst_25388 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_25399__$1 = (function (){var statearr_25426 = state_25399;
(statearr_25426[(15)] = inst_25387);

return statearr_25426;
})();
if(cljs.core.truth_(inst_25388)){
var statearr_25427_25455 = state_25399__$1;
(statearr_25427_25455[(1)] = (21));

} else {
var statearr_25428_25456 = state_25399__$1;
(statearr_25428_25456[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25400 === (5))){
var inst_25343 = cljs.core.async.close_BANG_.call(null,out);
var state_25399__$1 = state_25399;
var statearr_25429_25457 = state_25399__$1;
(statearr_25429_25457[(2)] = inst_25343);

(statearr_25429_25457[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25400 === (14))){
var inst_25365 = (state_25399[(7)]);
var inst_25367 = cljs.core.chunked_seq_QMARK_.call(null,inst_25365);
var state_25399__$1 = state_25399;
if(inst_25367){
var statearr_25430_25458 = state_25399__$1;
(statearr_25430_25458[(1)] = (17));

} else {
var statearr_25431_25459 = state_25399__$1;
(statearr_25431_25459[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25400 === (16))){
var inst_25383 = (state_25399[(2)]);
var state_25399__$1 = state_25399;
var statearr_25432_25460 = state_25399__$1;
(statearr_25432_25460[(2)] = inst_25383);

(statearr_25432_25460[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25400 === (10))){
var inst_25354 = (state_25399[(10)]);
var inst_25352 = (state_25399[(12)]);
var inst_25359 = cljs.core._nth.call(null,inst_25352,inst_25354);
var state_25399__$1 = state_25399;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25399__$1,(13),out,inst_25359);
} else {
if((state_val_25400 === (18))){
var inst_25365 = (state_25399[(7)]);
var inst_25374 = cljs.core.first.call(null,inst_25365);
var state_25399__$1 = state_25399;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25399__$1,(20),out,inst_25374);
} else {
if((state_val_25400 === (8))){
var inst_25353 = (state_25399[(9)]);
var inst_25354 = (state_25399[(10)]);
var inst_25356 = (inst_25354 < inst_25353);
var inst_25357 = inst_25356;
var state_25399__$1 = state_25399;
if(cljs.core.truth_(inst_25357)){
var statearr_25433_25461 = state_25399__$1;
(statearr_25433_25461[(1)] = (10));

} else {
var statearr_25434_25462 = state_25399__$1;
(statearr_25434_25462[(1)] = (11));

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
});})(c__23784__auto__))
;
return ((function (switch__23689__auto__,c__23784__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__23690__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__23690__auto____0 = (function (){
var statearr_25435 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25435[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__23690__auto__);

(statearr_25435[(1)] = (1));

return statearr_25435;
});
var cljs$core$async$mapcat_STAR__$_state_machine__23690__auto____1 = (function (state_25399){
while(true){
var ret_value__23691__auto__ = (function (){try{while(true){
var result__23692__auto__ = switch__23689__auto__.call(null,state_25399);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23692__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23692__auto__;
}
break;
}
}catch (e25436){if((e25436 instanceof Object)){
var ex__23693__auto__ = e25436;
var statearr_25437_25463 = state_25399;
(statearr_25437_25463[(5)] = ex__23693__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25399);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25436;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23691__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25464 = state_25399;
state_25399 = G__25464;
continue;
} else {
return ret_value__23691__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__23690__auto__ = function(state_25399){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__23690__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__23690__auto____1.call(this,state_25399);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__23690__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__23690__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__23690__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__23690__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__23690__auto__;
})()
;})(switch__23689__auto__,c__23784__auto__))
})();
var state__23786__auto__ = (function (){var statearr_25438 = f__23785__auto__.call(null);
(statearr_25438[(6)] = c__23784__auto__);

return statearr_25438;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23786__auto__);
});})(c__23784__auto__))
);

return c__23784__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__25466 = arguments.length;
switch (G__25466) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__25469 = arguments.length;
switch (G__25469) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__25472 = arguments.length;
switch (G__25472) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23784__auto___25519 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23784__auto___25519,out){
return (function (){
var f__23785__auto__ = (function (){var switch__23689__auto__ = ((function (c__23784__auto___25519,out){
return (function (state_25496){
var state_val_25497 = (state_25496[(1)]);
if((state_val_25497 === (7))){
var inst_25491 = (state_25496[(2)]);
var state_25496__$1 = state_25496;
var statearr_25498_25520 = state_25496__$1;
(statearr_25498_25520[(2)] = inst_25491);

(statearr_25498_25520[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25497 === (1))){
var inst_25473 = null;
var state_25496__$1 = (function (){var statearr_25499 = state_25496;
(statearr_25499[(7)] = inst_25473);

return statearr_25499;
})();
var statearr_25500_25521 = state_25496__$1;
(statearr_25500_25521[(2)] = null);

(statearr_25500_25521[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25497 === (4))){
var inst_25476 = (state_25496[(8)]);
var inst_25476__$1 = (state_25496[(2)]);
var inst_25477 = (inst_25476__$1 == null);
var inst_25478 = cljs.core.not.call(null,inst_25477);
var state_25496__$1 = (function (){var statearr_25501 = state_25496;
(statearr_25501[(8)] = inst_25476__$1);

return statearr_25501;
})();
if(inst_25478){
var statearr_25502_25522 = state_25496__$1;
(statearr_25502_25522[(1)] = (5));

} else {
var statearr_25503_25523 = state_25496__$1;
(statearr_25503_25523[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25497 === (6))){
var state_25496__$1 = state_25496;
var statearr_25504_25524 = state_25496__$1;
(statearr_25504_25524[(2)] = null);

(statearr_25504_25524[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25497 === (3))){
var inst_25493 = (state_25496[(2)]);
var inst_25494 = cljs.core.async.close_BANG_.call(null,out);
var state_25496__$1 = (function (){var statearr_25505 = state_25496;
(statearr_25505[(9)] = inst_25493);

return statearr_25505;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25496__$1,inst_25494);
} else {
if((state_val_25497 === (2))){
var state_25496__$1 = state_25496;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25496__$1,(4),ch);
} else {
if((state_val_25497 === (11))){
var inst_25476 = (state_25496[(8)]);
var inst_25485 = (state_25496[(2)]);
var inst_25473 = inst_25476;
var state_25496__$1 = (function (){var statearr_25506 = state_25496;
(statearr_25506[(10)] = inst_25485);

(statearr_25506[(7)] = inst_25473);

return statearr_25506;
})();
var statearr_25507_25525 = state_25496__$1;
(statearr_25507_25525[(2)] = null);

(statearr_25507_25525[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25497 === (9))){
var inst_25476 = (state_25496[(8)]);
var state_25496__$1 = state_25496;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25496__$1,(11),out,inst_25476);
} else {
if((state_val_25497 === (5))){
var inst_25473 = (state_25496[(7)]);
var inst_25476 = (state_25496[(8)]);
var inst_25480 = cljs.core._EQ_.call(null,inst_25476,inst_25473);
var state_25496__$1 = state_25496;
if(inst_25480){
var statearr_25509_25526 = state_25496__$1;
(statearr_25509_25526[(1)] = (8));

} else {
var statearr_25510_25527 = state_25496__$1;
(statearr_25510_25527[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25497 === (10))){
var inst_25488 = (state_25496[(2)]);
var state_25496__$1 = state_25496;
var statearr_25511_25528 = state_25496__$1;
(statearr_25511_25528[(2)] = inst_25488);

(statearr_25511_25528[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25497 === (8))){
var inst_25473 = (state_25496[(7)]);
var tmp25508 = inst_25473;
var inst_25473__$1 = tmp25508;
var state_25496__$1 = (function (){var statearr_25512 = state_25496;
(statearr_25512[(7)] = inst_25473__$1);

return statearr_25512;
})();
var statearr_25513_25529 = state_25496__$1;
(statearr_25513_25529[(2)] = null);

(statearr_25513_25529[(1)] = (2));


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
});})(c__23784__auto___25519,out))
;
return ((function (switch__23689__auto__,c__23784__auto___25519,out){
return (function() {
var cljs$core$async$state_machine__23690__auto__ = null;
var cljs$core$async$state_machine__23690__auto____0 = (function (){
var statearr_25514 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25514[(0)] = cljs$core$async$state_machine__23690__auto__);

(statearr_25514[(1)] = (1));

return statearr_25514;
});
var cljs$core$async$state_machine__23690__auto____1 = (function (state_25496){
while(true){
var ret_value__23691__auto__ = (function (){try{while(true){
var result__23692__auto__ = switch__23689__auto__.call(null,state_25496);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23692__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23692__auto__;
}
break;
}
}catch (e25515){if((e25515 instanceof Object)){
var ex__23693__auto__ = e25515;
var statearr_25516_25530 = state_25496;
(statearr_25516_25530[(5)] = ex__23693__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25496);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25515;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23691__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25531 = state_25496;
state_25496 = G__25531;
continue;
} else {
return ret_value__23691__auto__;
}
break;
}
});
cljs$core$async$state_machine__23690__auto__ = function(state_25496){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23690__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23690__auto____1.call(this,state_25496);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23690__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23690__auto____0;
cljs$core$async$state_machine__23690__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23690__auto____1;
return cljs$core$async$state_machine__23690__auto__;
})()
;})(switch__23689__auto__,c__23784__auto___25519,out))
})();
var state__23786__auto__ = (function (){var statearr_25517 = f__23785__auto__.call(null);
(statearr_25517[(6)] = c__23784__auto___25519);

return statearr_25517;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23786__auto__);
});})(c__23784__auto___25519,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__25533 = arguments.length;
switch (G__25533) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23784__auto___25599 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23784__auto___25599,out){
return (function (){
var f__23785__auto__ = (function (){var switch__23689__auto__ = ((function (c__23784__auto___25599,out){
return (function (state_25571){
var state_val_25572 = (state_25571[(1)]);
if((state_val_25572 === (7))){
var inst_25567 = (state_25571[(2)]);
var state_25571__$1 = state_25571;
var statearr_25573_25600 = state_25571__$1;
(statearr_25573_25600[(2)] = inst_25567);

(statearr_25573_25600[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25572 === (1))){
var inst_25534 = (new Array(n));
var inst_25535 = inst_25534;
var inst_25536 = (0);
var state_25571__$1 = (function (){var statearr_25574 = state_25571;
(statearr_25574[(7)] = inst_25535);

(statearr_25574[(8)] = inst_25536);

return statearr_25574;
})();
var statearr_25575_25601 = state_25571__$1;
(statearr_25575_25601[(2)] = null);

(statearr_25575_25601[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25572 === (4))){
var inst_25539 = (state_25571[(9)]);
var inst_25539__$1 = (state_25571[(2)]);
var inst_25540 = (inst_25539__$1 == null);
var inst_25541 = cljs.core.not.call(null,inst_25540);
var state_25571__$1 = (function (){var statearr_25576 = state_25571;
(statearr_25576[(9)] = inst_25539__$1);

return statearr_25576;
})();
if(inst_25541){
var statearr_25577_25602 = state_25571__$1;
(statearr_25577_25602[(1)] = (5));

} else {
var statearr_25578_25603 = state_25571__$1;
(statearr_25578_25603[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25572 === (15))){
var inst_25561 = (state_25571[(2)]);
var state_25571__$1 = state_25571;
var statearr_25579_25604 = state_25571__$1;
(statearr_25579_25604[(2)] = inst_25561);

(statearr_25579_25604[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25572 === (13))){
var state_25571__$1 = state_25571;
var statearr_25580_25605 = state_25571__$1;
(statearr_25580_25605[(2)] = null);

(statearr_25580_25605[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25572 === (6))){
var inst_25536 = (state_25571[(8)]);
var inst_25557 = (inst_25536 > (0));
var state_25571__$1 = state_25571;
if(cljs.core.truth_(inst_25557)){
var statearr_25581_25606 = state_25571__$1;
(statearr_25581_25606[(1)] = (12));

} else {
var statearr_25582_25607 = state_25571__$1;
(statearr_25582_25607[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25572 === (3))){
var inst_25569 = (state_25571[(2)]);
var state_25571__$1 = state_25571;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25571__$1,inst_25569);
} else {
if((state_val_25572 === (12))){
var inst_25535 = (state_25571[(7)]);
var inst_25559 = cljs.core.vec.call(null,inst_25535);
var state_25571__$1 = state_25571;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25571__$1,(15),out,inst_25559);
} else {
if((state_val_25572 === (2))){
var state_25571__$1 = state_25571;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25571__$1,(4),ch);
} else {
if((state_val_25572 === (11))){
var inst_25551 = (state_25571[(2)]);
var inst_25552 = (new Array(n));
var inst_25535 = inst_25552;
var inst_25536 = (0);
var state_25571__$1 = (function (){var statearr_25583 = state_25571;
(statearr_25583[(10)] = inst_25551);

(statearr_25583[(7)] = inst_25535);

(statearr_25583[(8)] = inst_25536);

return statearr_25583;
})();
var statearr_25584_25608 = state_25571__$1;
(statearr_25584_25608[(2)] = null);

(statearr_25584_25608[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25572 === (9))){
var inst_25535 = (state_25571[(7)]);
var inst_25549 = cljs.core.vec.call(null,inst_25535);
var state_25571__$1 = state_25571;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25571__$1,(11),out,inst_25549);
} else {
if((state_val_25572 === (5))){
var inst_25544 = (state_25571[(11)]);
var inst_25539 = (state_25571[(9)]);
var inst_25535 = (state_25571[(7)]);
var inst_25536 = (state_25571[(8)]);
var inst_25543 = (inst_25535[inst_25536] = inst_25539);
var inst_25544__$1 = (inst_25536 + (1));
var inst_25545 = (inst_25544__$1 < n);
var state_25571__$1 = (function (){var statearr_25585 = state_25571;
(statearr_25585[(11)] = inst_25544__$1);

(statearr_25585[(12)] = inst_25543);

return statearr_25585;
})();
if(cljs.core.truth_(inst_25545)){
var statearr_25586_25609 = state_25571__$1;
(statearr_25586_25609[(1)] = (8));

} else {
var statearr_25587_25610 = state_25571__$1;
(statearr_25587_25610[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25572 === (14))){
var inst_25564 = (state_25571[(2)]);
var inst_25565 = cljs.core.async.close_BANG_.call(null,out);
var state_25571__$1 = (function (){var statearr_25589 = state_25571;
(statearr_25589[(13)] = inst_25564);

return statearr_25589;
})();
var statearr_25590_25611 = state_25571__$1;
(statearr_25590_25611[(2)] = inst_25565);

(statearr_25590_25611[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25572 === (10))){
var inst_25555 = (state_25571[(2)]);
var state_25571__$1 = state_25571;
var statearr_25591_25612 = state_25571__$1;
(statearr_25591_25612[(2)] = inst_25555);

(statearr_25591_25612[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25572 === (8))){
var inst_25544 = (state_25571[(11)]);
var inst_25535 = (state_25571[(7)]);
var tmp25588 = inst_25535;
var inst_25535__$1 = tmp25588;
var inst_25536 = inst_25544;
var state_25571__$1 = (function (){var statearr_25592 = state_25571;
(statearr_25592[(7)] = inst_25535__$1);

(statearr_25592[(8)] = inst_25536);

return statearr_25592;
})();
var statearr_25593_25613 = state_25571__$1;
(statearr_25593_25613[(2)] = null);

(statearr_25593_25613[(1)] = (2));


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
});})(c__23784__auto___25599,out))
;
return ((function (switch__23689__auto__,c__23784__auto___25599,out){
return (function() {
var cljs$core$async$state_machine__23690__auto__ = null;
var cljs$core$async$state_machine__23690__auto____0 = (function (){
var statearr_25594 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25594[(0)] = cljs$core$async$state_machine__23690__auto__);

(statearr_25594[(1)] = (1));

return statearr_25594;
});
var cljs$core$async$state_machine__23690__auto____1 = (function (state_25571){
while(true){
var ret_value__23691__auto__ = (function (){try{while(true){
var result__23692__auto__ = switch__23689__auto__.call(null,state_25571);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23692__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23692__auto__;
}
break;
}
}catch (e25595){if((e25595 instanceof Object)){
var ex__23693__auto__ = e25595;
var statearr_25596_25614 = state_25571;
(statearr_25596_25614[(5)] = ex__23693__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25571);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25595;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23691__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25615 = state_25571;
state_25571 = G__25615;
continue;
} else {
return ret_value__23691__auto__;
}
break;
}
});
cljs$core$async$state_machine__23690__auto__ = function(state_25571){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23690__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23690__auto____1.call(this,state_25571);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23690__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23690__auto____0;
cljs$core$async$state_machine__23690__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23690__auto____1;
return cljs$core$async$state_machine__23690__auto__;
})()
;})(switch__23689__auto__,c__23784__auto___25599,out))
})();
var state__23786__auto__ = (function (){var statearr_25597 = f__23785__auto__.call(null);
(statearr_25597[(6)] = c__23784__auto___25599);

return statearr_25597;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23786__auto__);
});})(c__23784__auto___25599,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__25617 = arguments.length;
switch (G__25617) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23784__auto___25687 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23784__auto___25687,out){
return (function (){
var f__23785__auto__ = (function (){var switch__23689__auto__ = ((function (c__23784__auto___25687,out){
return (function (state_25659){
var state_val_25660 = (state_25659[(1)]);
if((state_val_25660 === (7))){
var inst_25655 = (state_25659[(2)]);
var state_25659__$1 = state_25659;
var statearr_25661_25688 = state_25659__$1;
(statearr_25661_25688[(2)] = inst_25655);

(statearr_25661_25688[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25660 === (1))){
var inst_25618 = [];
var inst_25619 = inst_25618;
var inst_25620 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_25659__$1 = (function (){var statearr_25662 = state_25659;
(statearr_25662[(7)] = inst_25619);

(statearr_25662[(8)] = inst_25620);

return statearr_25662;
})();
var statearr_25663_25689 = state_25659__$1;
(statearr_25663_25689[(2)] = null);

(statearr_25663_25689[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25660 === (4))){
var inst_25623 = (state_25659[(9)]);
var inst_25623__$1 = (state_25659[(2)]);
var inst_25624 = (inst_25623__$1 == null);
var inst_25625 = cljs.core.not.call(null,inst_25624);
var state_25659__$1 = (function (){var statearr_25664 = state_25659;
(statearr_25664[(9)] = inst_25623__$1);

return statearr_25664;
})();
if(inst_25625){
var statearr_25665_25690 = state_25659__$1;
(statearr_25665_25690[(1)] = (5));

} else {
var statearr_25666_25691 = state_25659__$1;
(statearr_25666_25691[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25660 === (15))){
var inst_25649 = (state_25659[(2)]);
var state_25659__$1 = state_25659;
var statearr_25667_25692 = state_25659__$1;
(statearr_25667_25692[(2)] = inst_25649);

(statearr_25667_25692[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25660 === (13))){
var state_25659__$1 = state_25659;
var statearr_25668_25693 = state_25659__$1;
(statearr_25668_25693[(2)] = null);

(statearr_25668_25693[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25660 === (6))){
var inst_25619 = (state_25659[(7)]);
var inst_25644 = inst_25619.length;
var inst_25645 = (inst_25644 > (0));
var state_25659__$1 = state_25659;
if(cljs.core.truth_(inst_25645)){
var statearr_25669_25694 = state_25659__$1;
(statearr_25669_25694[(1)] = (12));

} else {
var statearr_25670_25695 = state_25659__$1;
(statearr_25670_25695[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25660 === (3))){
var inst_25657 = (state_25659[(2)]);
var state_25659__$1 = state_25659;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25659__$1,inst_25657);
} else {
if((state_val_25660 === (12))){
var inst_25619 = (state_25659[(7)]);
var inst_25647 = cljs.core.vec.call(null,inst_25619);
var state_25659__$1 = state_25659;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25659__$1,(15),out,inst_25647);
} else {
if((state_val_25660 === (2))){
var state_25659__$1 = state_25659;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25659__$1,(4),ch);
} else {
if((state_val_25660 === (11))){
var inst_25627 = (state_25659[(10)]);
var inst_25623 = (state_25659[(9)]);
var inst_25637 = (state_25659[(2)]);
var inst_25638 = [];
var inst_25639 = inst_25638.push(inst_25623);
var inst_25619 = inst_25638;
var inst_25620 = inst_25627;
var state_25659__$1 = (function (){var statearr_25671 = state_25659;
(statearr_25671[(11)] = inst_25639);

(statearr_25671[(7)] = inst_25619);

(statearr_25671[(12)] = inst_25637);

(statearr_25671[(8)] = inst_25620);

return statearr_25671;
})();
var statearr_25672_25696 = state_25659__$1;
(statearr_25672_25696[(2)] = null);

(statearr_25672_25696[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25660 === (9))){
var inst_25619 = (state_25659[(7)]);
var inst_25635 = cljs.core.vec.call(null,inst_25619);
var state_25659__$1 = state_25659;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25659__$1,(11),out,inst_25635);
} else {
if((state_val_25660 === (5))){
var inst_25627 = (state_25659[(10)]);
var inst_25623 = (state_25659[(9)]);
var inst_25620 = (state_25659[(8)]);
var inst_25627__$1 = f.call(null,inst_25623);
var inst_25628 = cljs.core._EQ_.call(null,inst_25627__$1,inst_25620);
var inst_25629 = cljs.core.keyword_identical_QMARK_.call(null,inst_25620,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_25630 = ((inst_25628) || (inst_25629));
var state_25659__$1 = (function (){var statearr_25673 = state_25659;
(statearr_25673[(10)] = inst_25627__$1);

return statearr_25673;
})();
if(cljs.core.truth_(inst_25630)){
var statearr_25674_25697 = state_25659__$1;
(statearr_25674_25697[(1)] = (8));

} else {
var statearr_25675_25698 = state_25659__$1;
(statearr_25675_25698[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25660 === (14))){
var inst_25652 = (state_25659[(2)]);
var inst_25653 = cljs.core.async.close_BANG_.call(null,out);
var state_25659__$1 = (function (){var statearr_25677 = state_25659;
(statearr_25677[(13)] = inst_25652);

return statearr_25677;
})();
var statearr_25678_25699 = state_25659__$1;
(statearr_25678_25699[(2)] = inst_25653);

(statearr_25678_25699[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25660 === (10))){
var inst_25642 = (state_25659[(2)]);
var state_25659__$1 = state_25659;
var statearr_25679_25700 = state_25659__$1;
(statearr_25679_25700[(2)] = inst_25642);

(statearr_25679_25700[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25660 === (8))){
var inst_25619 = (state_25659[(7)]);
var inst_25627 = (state_25659[(10)]);
var inst_25623 = (state_25659[(9)]);
var inst_25632 = inst_25619.push(inst_25623);
var tmp25676 = inst_25619;
var inst_25619__$1 = tmp25676;
var inst_25620 = inst_25627;
var state_25659__$1 = (function (){var statearr_25680 = state_25659;
(statearr_25680[(7)] = inst_25619__$1);

(statearr_25680[(14)] = inst_25632);

(statearr_25680[(8)] = inst_25620);

return statearr_25680;
})();
var statearr_25681_25701 = state_25659__$1;
(statearr_25681_25701[(2)] = null);

(statearr_25681_25701[(1)] = (2));


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
});})(c__23784__auto___25687,out))
;
return ((function (switch__23689__auto__,c__23784__auto___25687,out){
return (function() {
var cljs$core$async$state_machine__23690__auto__ = null;
var cljs$core$async$state_machine__23690__auto____0 = (function (){
var statearr_25682 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25682[(0)] = cljs$core$async$state_machine__23690__auto__);

(statearr_25682[(1)] = (1));

return statearr_25682;
});
var cljs$core$async$state_machine__23690__auto____1 = (function (state_25659){
while(true){
var ret_value__23691__auto__ = (function (){try{while(true){
var result__23692__auto__ = switch__23689__auto__.call(null,state_25659);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23692__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23692__auto__;
}
break;
}
}catch (e25683){if((e25683 instanceof Object)){
var ex__23693__auto__ = e25683;
var statearr_25684_25702 = state_25659;
(statearr_25684_25702[(5)] = ex__23693__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25659);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25683;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23691__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25703 = state_25659;
state_25659 = G__25703;
continue;
} else {
return ret_value__23691__auto__;
}
break;
}
});
cljs$core$async$state_machine__23690__auto__ = function(state_25659){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23690__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23690__auto____1.call(this,state_25659);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23690__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23690__auto____0;
cljs$core$async$state_machine__23690__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23690__auto____1;
return cljs$core$async$state_machine__23690__auto__;
})()
;})(switch__23689__auto__,c__23784__auto___25687,out))
})();
var state__23786__auto__ = (function (){var statearr_25685 = f__23785__auto__.call(null);
(statearr_25685[(6)] = c__23784__auto___25687);

return statearr_25685;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23786__auto__);
});})(c__23784__auto___25687,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1581523630970
