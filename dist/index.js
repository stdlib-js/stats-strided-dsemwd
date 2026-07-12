"use strict";var s=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(a){throw (r=0, a)}};};var t=s(function(k,n){
var f=require('@stdlib/stats-strided-dvariancewd/dist').ndarray,p=require('@stdlib/math-base-special-sqrt/dist');function w(e,r,a,i,y){return p(f(e,r,a,i,y)/e)}n.exports=w
});var v=s(function(z,d){
var x=require('@stdlib/strided-base-stride2offset/dist'),j=t();function l(e,r,a,i){return j(e,r,a,i,x(e,i))}d.exports=l
});var c=s(function(A,o){
var R=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),q=v(),_=t();R(q,"ndarray",_);o.exports=q
});var E=require("path").join,O=require('@stdlib/utils-try-require/dist'),b=require('@stdlib/assert-is-error/dist'),g=c(),u,m=O(E(__dirname,"./native.js"));b(m)?u=g:u=m;module.exports=u;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
