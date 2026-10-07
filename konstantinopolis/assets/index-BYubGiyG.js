(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function e(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(s){if(s.ep)return;s.ep=!0;const o=e(s);fetch(s.href,o)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const bh="170",Ao={ROTATE:0,DOLLY:1,PAN:2},xo={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},r0=0,rd=1,a0=2,Eh=1,pf=2,zi=3,ys=0,vn=1,En=2,ms=0,Ro=1,ad=2,cd=3,ld=4,c0=5,Fs=100,l0=101,h0=102,d0=103,u0=104,f0=200,p0=201,m0=202,g0=203,Sl=204,bl=205,_0=206,v0=207,M0=208,x0=209,y0=210,S0=211,b0=212,E0=213,w0=214,El=0,wl=1,Tl=2,Bo=3,Al=4,Rl=5,Pl=6,Cl=7,mf=0,T0=1,A0=2,gs=0,R0=1,P0=2,C0=3,gf=4,I0=5,L0=6,D0=7,_f=300,Ho=301,Go=302,Il=303,Ll=304,fc=306,Zi=1e3,Bs=1001,Dl=1002,Nn=1003,U0=1004,ia=1005,Mi=1006,Ac=1007,Hs=1008,Ki=1009,vf=1010,Mf=1011,Rr=1012,wh=1013,Ws=1014,xi=1015,Yr=1016,Th=1017,Ah=1018,Vo=1020,xf=35902,yf=1021,Sf=1022,Kn=1023,bf=1024,Ef=1025,Po=1026,Wo=1027,Rh=1028,Ph=1029,wf=1030,Ch=1031,Ih=1033,Va=33776,Wa=33777,Xa=33778,Ya=33779,Ul=35840,Nl=35841,Ol=35842,Fl=35843,kl=36196,zl=37492,Bl=37496,Hl=37808,Gl=37809,Vl=37810,Wl=37811,Xl=37812,Yl=37813,$l=37814,ql=37815,Zl=37816,Kl=37817,jl=37818,Jl=37819,Ql=37820,th=37821,$a=36492,eh=36494,nh=36495,Tf=36283,ih=36284,sh=36285,oh=36286,N0=3200,O0=3201,Af=0,F0=1,hs="",sn="srgb",$o="srgb-linear",pc="linear",ye="srgb",Js=7680,hd=519,k0=512,z0=513,B0=514,Rf=515,H0=516,G0=517,V0=518,W0=519,dd=35044,ud="300 es",Vi=2e3,tc=2001;class Zs{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const o=s.indexOf(e);o!==-1&&s.splice(o,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const s=i.slice(0);for(let o=0,r=s.length;o<r;o++)s[o].call(this,t);t.target=null}}}const an=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let fd=1234567;const Mr=Math.PI/180,Pr=180/Math.PI;function Ks(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(an[n&255]+an[n>>8&255]+an[n>>16&255]+an[n>>24&255]+"-"+an[t&255]+an[t>>8&255]+"-"+an[t>>16&15|64]+an[t>>24&255]+"-"+an[e&63|128]+an[e>>8&255]+"-"+an[e>>16&255]+an[e>>24&255]+an[i&255]+an[i>>8&255]+an[i>>16&255]+an[i>>24&255]).toLowerCase()}function tn(n,t,e){return Math.max(t,Math.min(e,n))}function Lh(n,t){return(n%t+t)%t}function X0(n,t,e,i,s){return i+(n-t)*(s-i)/(e-t)}function Y0(n,t,e){return n!==t?(e-n)/(t-n):0}function xr(n,t,e){return(1-e)*n+e*t}function $0(n,t,e,i){return xr(n,t,1-Math.exp(-e*i))}function q0(n,t=1){return t-Math.abs(Lh(n,t*2)-t)}function Z0(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function K0(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function j0(n,t){return n+Math.floor(Math.random()*(t-n+1))}function J0(n,t){return n+Math.random()*(t-n)}function Q0(n){return n*(.5-Math.random())}function tm(n){n!==void 0&&(fd=n);let t=fd+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function em(n){return n*Mr}function nm(n){return n*Pr}function im(n){return(n&n-1)===0&&n!==0}function sm(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function om(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function rm(n,t,e,i,s){const o=Math.cos,r=Math.sin,a=o(e/2),c=r(e/2),l=o((t+i)/2),h=r((t+i)/2),d=o((t-i)/2),f=r((t-i)/2),p=o((i-t)/2),m=r((i-t)/2);switch(s){case"XYX":n.set(a*h,c*d,c*f,a*l);break;case"YZY":n.set(c*f,a*h,c*d,a*l);break;case"ZXZ":n.set(c*d,c*f,a*h,a*l);break;case"XZX":n.set(a*h,c*m,c*p,a*l);break;case"YXY":n.set(c*p,a*h,c*m,a*l);break;case"ZYZ":n.set(c*m,c*p,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function _o(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function pn(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const bi={DEG2RAD:Mr,RAD2DEG:Pr,generateUUID:Ks,clamp:tn,euclideanModulo:Lh,mapLinear:X0,inverseLerp:Y0,lerp:xr,damp:$0,pingpong:q0,smoothstep:Z0,smootherstep:K0,randInt:j0,randFloat:J0,randFloatSpread:Q0,seededRandom:tm,degToRad:em,radToDeg:nm,isPowerOfTwo:im,ceilPowerOfTwo:sm,floorPowerOfTwo:om,setQuaternionFromProperEuler:rm,normalize:pn,denormalize:_o};class J{constructor(t=0,e=0){J.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(tn(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),s=Math.sin(e),o=this.x-t.x,r=this.y-t.y;return this.x=o*i-r*s+t.x,this.y=o*s+r*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class jt{constructor(t,e,i,s,o,r,a,c,l){jt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,o,r,a,c,l)}set(t,e,i,s,o,r,a,c,l){const h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=o,h[5]=c,h[6]=i,h[7]=r,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,o=this.elements,r=i[0],a=i[3],c=i[6],l=i[1],h=i[4],d=i[7],f=i[2],p=i[5],m=i[8],v=s[0],_=s[3],g=s[6],S=s[1],x=s[4],M=s[7],C=s[2],T=s[5],R=s[8];return o[0]=r*v+a*S+c*C,o[3]=r*_+a*x+c*T,o[6]=r*g+a*M+c*R,o[1]=l*v+h*S+d*C,o[4]=l*_+h*x+d*T,o[7]=l*g+h*M+d*R,o[2]=f*v+p*S+m*C,o[5]=f*_+p*x+m*T,o[8]=f*g+p*M+m*R,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],s=t[2],o=t[3],r=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*r*h-e*a*l-i*o*h+i*a*c+s*o*l-s*r*c}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],o=t[3],r=t[4],a=t[5],c=t[6],l=t[7],h=t[8],d=h*r-a*l,f=a*c-h*o,p=l*o-r*c,m=e*d+i*f+s*p;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/m;return t[0]=d*v,t[1]=(s*l-h*i)*v,t[2]=(a*i-s*r)*v,t[3]=f*v,t[4]=(h*e-s*c)*v,t[5]=(s*o-a*e)*v,t[6]=p*v,t[7]=(i*c-l*e)*v,t[8]=(r*e-i*o)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,o,r,a){const c=Math.cos(o),l=Math.sin(o);return this.set(i*c,i*l,-i*(c*r+l*a)+r+t,-s*l,s*c,-s*(-l*r+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Rc.makeScale(t,e)),this}rotate(t){return this.premultiply(Rc.makeRotation(-t)),this}translate(t,e){return this.premultiply(Rc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Rc=new jt;function Pf(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function ec(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function am(){const n=ec("canvas");return n.style.display="block",n}const pd={};function mr(n){n in pd||(pd[n]=!0,console.warn(n))}function cm(n,t,e){return new Promise(function(i,s){function o(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(o,e);break;default:i()}}setTimeout(o,e)})}function lm(n){const t=n.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function hm(n){const t=n.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const de={enabled:!0,workingColorSpace:$o,spaces:{},convert:function(n,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===ye&&(n.r=Yi(n.r),n.g=Yi(n.g),n.b=Yi(n.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(n.applyMatrix3(this.spaces[t].toXYZ),n.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===ye&&(n.r=Co(n.r),n.g=Co(n.g),n.b=Co(n.b))),n},fromWorkingColorSpace:function(n,t){return this.convert(n,this.workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===hs?pc:this.spaces[n].transfer},getLuminanceCoefficients:function(n,t=this.workingColorSpace){return n.fromArray(this.spaces[t].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,t,e){return n.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function Yi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Co(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const md=[.64,.33,.3,.6,.15,.06],gd=[.2126,.7152,.0722],_d=[.3127,.329],vd=new jt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Md=new jt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);de.define({[$o]:{primaries:md,whitePoint:_d,transfer:pc,toXYZ:vd,fromXYZ:Md,luminanceCoefficients:gd,workingColorSpaceConfig:{unpackColorSpace:sn},outputColorSpaceConfig:{drawingBufferColorSpace:sn}},[sn]:{primaries:md,whitePoint:_d,transfer:ye,toXYZ:vd,fromXYZ:Md,luminanceCoefficients:gd,outputColorSpaceConfig:{drawingBufferColorSpace:sn}}});let Qs;class dm{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Qs===void 0&&(Qs=ec("canvas")),Qs.width=t.width,Qs.height=t.height;const i=Qs.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=Qs}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=ec("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const s=i.getImageData(0,0,t.width,t.height),o=s.data;for(let r=0;r<o.length;r++)o[r]=Yi(o[r]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Yi(e[i]/255)*255):e[i]=Yi(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let um=0;class Cf{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:um++}),this.uuid=Ks(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let o;if(Array.isArray(s)){o=[];for(let r=0,a=s.length;r<a;r++)s[r].isDataTexture?o.push(Pc(s[r].image)):o.push(Pc(s[r]))}else o=Pc(s);i.url=o}return e||(t.images[this.uuid]=i),i}}function Pc(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?dm.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let fm=0;class hn extends Zs{constructor(t=hn.DEFAULT_IMAGE,e=hn.DEFAULT_MAPPING,i=Bs,s=Bs,o=Mi,r=Hs,a=Kn,c=Ki,l=hn.DEFAULT_ANISOTROPY,h=hs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:fm++}),this.uuid=Ks(),this.name="",this.source=new Cf(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=o,this.minFilter=r,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new J(0,0),this.repeat=new J(1,1),this.center=new J(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new jt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==_f)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Zi:t.x=t.x-Math.floor(t.x);break;case Bs:t.x=t.x<0?0:1;break;case Dl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Zi:t.y=t.y-Math.floor(t.y);break;case Bs:t.y=t.y<0?0:1;break;case Dl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}hn.DEFAULT_IMAGE=null;hn.DEFAULT_MAPPING=_f;hn.DEFAULT_ANISOTROPY=1;class Ue{constructor(t=0,e=0,i=0,s=1){Ue.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,o=this.w,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s+r[12]*o,this.y=r[1]*e+r[5]*i+r[9]*s+r[13]*o,this.z=r[2]*e+r[6]*i+r[10]*s+r[14]*o,this.w=r[3]*e+r[7]*i+r[11]*s+r[15]*o,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,o;const c=t.elements,l=c[0],h=c[4],d=c[8],f=c[1],p=c[5],m=c[9],v=c[2],_=c[6],g=c[10];if(Math.abs(h-f)<.01&&Math.abs(d-v)<.01&&Math.abs(m-_)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+v)<.1&&Math.abs(m+_)<.1&&Math.abs(l+p+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const x=(l+1)/2,M=(p+1)/2,C=(g+1)/2,T=(h+f)/4,R=(d+v)/4,I=(m+_)/4;return x>M&&x>C?x<.01?(i=0,s=.707106781,o=.707106781):(i=Math.sqrt(x),s=T/i,o=R/i):M>C?M<.01?(i=.707106781,s=0,o=.707106781):(s=Math.sqrt(M),i=T/s,o=I/s):C<.01?(i=.707106781,s=.707106781,o=0):(o=Math.sqrt(C),i=R/o,s=I/o),this.set(i,s,o,e),this}let S=Math.sqrt((_-m)*(_-m)+(d-v)*(d-v)+(f-h)*(f-h));return Math.abs(S)<.001&&(S=1),this.x=(_-m)/S,this.y=(d-v)/S,this.z=(f-h)/S,this.w=Math.acos((l+p+g-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class pm extends Zs{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Ue(0,0,t,e),this.scissorTest=!1,this.viewport=new Ue(0,0,t,e);const s={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Mi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const o=new hn(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);o.flipY=!1,o.generateMipmaps=i.generateMipmaps,o.internalFormat=i.internalFormat,this.textures=[];const r=i.count;for(let a=0;a<r;a++)this.textures[a]=o.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,o=this.textures.length;s<o;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Cf(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Xs extends pm{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class If extends hn{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Nn,this.minFilter=Nn,this.wrapR=Bs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class mm extends hn{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Nn,this.minFilter=Nn,this.wrapR=Bs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Fn{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,o,r,a){let c=i[s+0],l=i[s+1],h=i[s+2],d=i[s+3];const f=o[r+0],p=o[r+1],m=o[r+2],v=o[r+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=d;return}if(a===1){t[e+0]=f,t[e+1]=p,t[e+2]=m,t[e+3]=v;return}if(d!==v||c!==f||l!==p||h!==m){let _=1-a;const g=c*f+l*p+h*m+d*v,S=g>=0?1:-1,x=1-g*g;if(x>Number.EPSILON){const C=Math.sqrt(x),T=Math.atan2(C,g*S);_=Math.sin(_*T)/C,a=Math.sin(a*T)/C}const M=a*S;if(c=c*_+f*M,l=l*_+p*M,h=h*_+m*M,d=d*_+v*M,_===1-a){const C=1/Math.sqrt(c*c+l*l+h*h+d*d);c*=C,l*=C,h*=C,d*=C}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,i,s,o,r){const a=i[s],c=i[s+1],l=i[s+2],h=i[s+3],d=o[r],f=o[r+1],p=o[r+2],m=o[r+3];return t[e]=a*m+h*d+c*p-l*f,t[e+1]=c*m+h*f+l*d-a*p,t[e+2]=l*m+h*p+a*f-c*d,t[e+3]=h*m-a*d-c*f-l*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,s=t._y,o=t._z,r=t._order,a=Math.cos,c=Math.sin,l=a(i/2),h=a(s/2),d=a(o/2),f=c(i/2),p=c(s/2),m=c(o/2);switch(r){case"XYZ":this._x=f*h*d+l*p*m,this._y=l*p*d-f*h*m,this._z=l*h*m+f*p*d,this._w=l*h*d-f*p*m;break;case"YXZ":this._x=f*h*d+l*p*m,this._y=l*p*d-f*h*m,this._z=l*h*m-f*p*d,this._w=l*h*d+f*p*m;break;case"ZXY":this._x=f*h*d-l*p*m,this._y=l*p*d+f*h*m,this._z=l*h*m+f*p*d,this._w=l*h*d-f*p*m;break;case"ZYX":this._x=f*h*d-l*p*m,this._y=l*p*d+f*h*m,this._z=l*h*m-f*p*d,this._w=l*h*d+f*p*m;break;case"YZX":this._x=f*h*d+l*p*m,this._y=l*p*d+f*h*m,this._z=l*h*m-f*p*d,this._w=l*h*d-f*p*m;break;case"XZY":this._x=f*h*d-l*p*m,this._y=l*p*d-f*h*m,this._z=l*h*m+f*p*d,this._w=l*h*d+f*p*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],s=e[4],o=e[8],r=e[1],a=e[5],c=e[9],l=e[2],h=e[6],d=e[10],f=i+a+d;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(h-c)*p,this._y=(o-l)*p,this._z=(r-s)*p}else if(i>a&&i>d){const p=2*Math.sqrt(1+i-a-d);this._w=(h-c)/p,this._x=.25*p,this._y=(s+r)/p,this._z=(o+l)/p}else if(a>d){const p=2*Math.sqrt(1+a-i-d);this._w=(o-l)/p,this._x=(s+r)/p,this._y=.25*p,this._z=(c+h)/p}else{const p=2*Math.sqrt(1+d-i-a);this._w=(r-s)/p,this._x=(o+l)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(tn(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,s=t._y,o=t._z,r=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=i*h+r*a+s*l-o*c,this._y=s*h+r*c+o*a-i*l,this._z=o*h+r*l+i*c-s*a,this._w=r*h-i*a-s*c-o*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,s=this._y,o=this._z,r=this._w;let a=r*t._w+i*t._x+s*t._y+o*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=r,this._x=i,this._y=s,this._z=o,this;const c=1-a*a;if(c<=Number.EPSILON){const p=1-e;return this._w=p*r+e*this._w,this._x=p*i+e*this._x,this._y=p*s+e*this._y,this._z=p*o+e*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),d=Math.sin((1-e)*h)/l,f=Math.sin(e*h)/l;return this._w=r*d+this._w*f,this._x=i*d+this._x*f,this._y=s*d+this._y*f,this._z=o*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),o=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),o*Math.sin(e),o*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(t=0,e=0,i=0){L.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(xd.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(xd.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,s=this.z,o=t.elements;return this.x=o[0]*e+o[3]*i+o[6]*s,this.y=o[1]*e+o[4]*i+o[7]*s,this.z=o[2]*e+o[5]*i+o[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,o=t.elements,r=1/(o[3]*e+o[7]*i+o[11]*s+o[15]);return this.x=(o[0]*e+o[4]*i+o[8]*s+o[12])*r,this.y=(o[1]*e+o[5]*i+o[9]*s+o[13])*r,this.z=(o[2]*e+o[6]*i+o[10]*s+o[14])*r,this}applyQuaternion(t){const e=this.x,i=this.y,s=this.z,o=t.x,r=t.y,a=t.z,c=t.w,l=2*(r*s-a*i),h=2*(a*e-o*s),d=2*(o*i-r*e);return this.x=e+c*l+r*d-a*h,this.y=i+c*h+a*l-o*d,this.z=s+c*d+o*h-r*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,s=this.z,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s,this.y=o[1]*e+o[5]*i+o[9]*s,this.z=o[2]*e+o[6]*i+o[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,s=t.y,o=t.z,r=e.x,a=e.y,c=e.z;return this.x=s*c-o*a,this.y=o*r-i*c,this.z=i*a-s*r,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Cc.copy(this).projectOnVector(t),this.sub(Cc)}reflect(t){return this.sub(Cc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(tn(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Cc=new L,xd=new Fn;class Jn{constructor(t=new L(1/0,1/0,1/0),e=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Xn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Xn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=Xn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const o=i.getAttribute("position");if(e===!0&&o!==void 0&&t.isInstancedMesh!==!0)for(let r=0,a=o.count;r<a;r++)t.isMesh===!0?t.getVertexPosition(r,Xn):Xn.fromBufferAttribute(o,r),Xn.applyMatrix4(t.matrixWorld),this.expandByPoint(Xn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),sa.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),sa.copy(i.boundingBox)),sa.applyMatrix4(t.matrixWorld),this.union(sa)}const s=t.children;for(let o=0,r=s.length;o<r;o++)this.expandByObject(s[o],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Xn),Xn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ir),oa.subVectors(this.max,ir),to.subVectors(t.a,ir),eo.subVectors(t.b,ir),no.subVectors(t.c,ir),ns.subVectors(eo,to),is.subVectors(no,eo),As.subVectors(to,no);let e=[0,-ns.z,ns.y,0,-is.z,is.y,0,-As.z,As.y,ns.z,0,-ns.x,is.z,0,-is.x,As.z,0,-As.x,-ns.y,ns.x,0,-is.y,is.x,0,-As.y,As.x,0];return!Ic(e,to,eo,no,oa)||(e=[1,0,0,0,1,0,0,0,1],!Ic(e,to,eo,no,oa))?!1:(ra.crossVectors(ns,is),e=[ra.x,ra.y,ra.z],Ic(e,to,eo,no,oa))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Xn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Xn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Li[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Li[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Li[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Li[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Li[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Li[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Li[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Li[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Li),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Li=[new L,new L,new L,new L,new L,new L,new L,new L],Xn=new L,sa=new Jn,to=new L,eo=new L,no=new L,ns=new L,is=new L,As=new L,ir=new L,oa=new L,ra=new L,Rs=new L;function Ic(n,t,e,i,s){for(let o=0,r=n.length-3;o<=r;o+=3){Rs.fromArray(n,o);const a=s.x*Math.abs(Rs.x)+s.y*Math.abs(Rs.y)+s.z*Math.abs(Rs.z),c=t.dot(Rs),l=e.dot(Rs),h=i.dot(Rs);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const gm=new Jn,sr=new L,Lc=new L;class $r{constructor(t=new L,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):gm.setFromPoints(t).getCenter(i);let s=0;for(let o=0,r=t.length;o<r;o++)s=Math.max(s,i.distanceToSquared(t[o]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;sr.subVectors(t,this.center);const e=sr.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(sr,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Lc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(sr.copy(t.center).add(Lc)),this.expandByPoint(sr.copy(t.center).sub(Lc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Di=new L,Dc=new L,aa=new L,ss=new L,Uc=new L,ca=new L,Nc=new L;class Dh{constructor(t=new L,e=new L(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Di)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Di.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Di.copy(this.origin).addScaledVector(this.direction,e),Di.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){Dc.copy(t).add(e).multiplyScalar(.5),aa.copy(e).sub(t).normalize(),ss.copy(this.origin).sub(Dc);const o=t.distanceTo(e)*.5,r=-this.direction.dot(aa),a=ss.dot(this.direction),c=-ss.dot(aa),l=ss.lengthSq(),h=Math.abs(1-r*r);let d,f,p,m;if(h>0)if(d=r*c-a,f=r*a-c,m=o*h,d>=0)if(f>=-m)if(f<=m){const v=1/h;d*=v,f*=v,p=d*(d+r*f+2*a)+f*(r*d+f+2*c)+l}else f=o,d=Math.max(0,-(r*f+a)),p=-d*d+f*(f+2*c)+l;else f=-o,d=Math.max(0,-(r*f+a)),p=-d*d+f*(f+2*c)+l;else f<=-m?(d=Math.max(0,-(-r*o+a)),f=d>0?-o:Math.min(Math.max(-o,-c),o),p=-d*d+f*(f+2*c)+l):f<=m?(d=0,f=Math.min(Math.max(-o,-c),o),p=f*(f+2*c)+l):(d=Math.max(0,-(r*o+a)),f=d>0?o:Math.min(Math.max(-o,-c),o),p=-d*d+f*(f+2*c)+l);else f=r>0?-o:o,d=Math.max(0,-(r*f+a)),p=-d*d+f*(f+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Dc).addScaledVector(aa,f),p}intersectSphere(t,e){Di.subVectors(t.center,this.origin);const i=Di.dot(this.direction),s=Di.dot(Di)-i*i,o=t.radius*t.radius;if(s>o)return null;const r=Math.sqrt(o-s),a=i-r,c=i+r;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,o,r,a,c;const l=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return l>=0?(i=(t.min.x-f.x)*l,s=(t.max.x-f.x)*l):(i=(t.max.x-f.x)*l,s=(t.min.x-f.x)*l),h>=0?(o=(t.min.y-f.y)*h,r=(t.max.y-f.y)*h):(o=(t.max.y-f.y)*h,r=(t.min.y-f.y)*h),i>r||o>s||((o>i||isNaN(i))&&(i=o),(r<s||isNaN(s))&&(s=r),d>=0?(a=(t.min.z-f.z)*d,c=(t.max.z-f.z)*d):(a=(t.max.z-f.z)*d,c=(t.min.z-f.z)*d),i>c||a>s)||((a>i||i!==i)&&(i=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,Di)!==null}intersectTriangle(t,e,i,s,o){Uc.subVectors(e,t),ca.subVectors(i,t),Nc.crossVectors(Uc,ca);let r=this.direction.dot(Nc),a;if(r>0){if(s)return null;a=1}else if(r<0)a=-1,r=-r;else return null;ss.subVectors(this.origin,t);const c=a*this.direction.dot(ca.crossVectors(ss,ca));if(c<0)return null;const l=a*this.direction.dot(Uc.cross(ss));if(l<0||c+l>r)return null;const h=-a*ss.dot(Nc);return h<0?null:this.at(h/r,o)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class oe{constructor(t,e,i,s,o,r,a,c,l,h,d,f,p,m,v,_){oe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,o,r,a,c,l,h,d,f,p,m,v,_)}set(t,e,i,s,o,r,a,c,l,h,d,f,p,m,v,_){const g=this.elements;return g[0]=t,g[4]=e,g[8]=i,g[12]=s,g[1]=o,g[5]=r,g[9]=a,g[13]=c,g[2]=l,g[6]=h,g[10]=d,g[14]=f,g[3]=p,g[7]=m,g[11]=v,g[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new oe().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,s=1/io.setFromMatrixColumn(t,0).length(),o=1/io.setFromMatrixColumn(t,1).length(),r=1/io.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*o,e[5]=i[5]*o,e[6]=i[6]*o,e[7]=0,e[8]=i[8]*r,e[9]=i[9]*r,e[10]=i[10]*r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,s=t.y,o=t.z,r=Math.cos(i),a=Math.sin(i),c=Math.cos(s),l=Math.sin(s),h=Math.cos(o),d=Math.sin(o);if(t.order==="XYZ"){const f=r*h,p=r*d,m=a*h,v=a*d;e[0]=c*h,e[4]=-c*d,e[8]=l,e[1]=p+m*l,e[5]=f-v*l,e[9]=-a*c,e[2]=v-f*l,e[6]=m+p*l,e[10]=r*c}else if(t.order==="YXZ"){const f=c*h,p=c*d,m=l*h,v=l*d;e[0]=f+v*a,e[4]=m*a-p,e[8]=r*l,e[1]=r*d,e[5]=r*h,e[9]=-a,e[2]=p*a-m,e[6]=v+f*a,e[10]=r*c}else if(t.order==="ZXY"){const f=c*h,p=c*d,m=l*h,v=l*d;e[0]=f-v*a,e[4]=-r*d,e[8]=m+p*a,e[1]=p+m*a,e[5]=r*h,e[9]=v-f*a,e[2]=-r*l,e[6]=a,e[10]=r*c}else if(t.order==="ZYX"){const f=r*h,p=r*d,m=a*h,v=a*d;e[0]=c*h,e[4]=m*l-p,e[8]=f*l+v,e[1]=c*d,e[5]=v*l+f,e[9]=p*l-m,e[2]=-l,e[6]=a*c,e[10]=r*c}else if(t.order==="YZX"){const f=r*c,p=r*l,m=a*c,v=a*l;e[0]=c*h,e[4]=v-f*d,e[8]=m*d+p,e[1]=d,e[5]=r*h,e[9]=-a*h,e[2]=-l*h,e[6]=p*d+m,e[10]=f-v*d}else if(t.order==="XZY"){const f=r*c,p=r*l,m=a*c,v=a*l;e[0]=c*h,e[4]=-d,e[8]=l*h,e[1]=f*d+v,e[5]=r*h,e[9]=p*d-m,e[2]=m*d-p,e[6]=a*h,e[10]=v*d+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(_m,t,vm)}lookAt(t,e,i){const s=this.elements;return Cn.subVectors(t,e),Cn.lengthSq()===0&&(Cn.z=1),Cn.normalize(),os.crossVectors(i,Cn),os.lengthSq()===0&&(Math.abs(i.z)===1?Cn.x+=1e-4:Cn.z+=1e-4,Cn.normalize(),os.crossVectors(i,Cn)),os.normalize(),la.crossVectors(Cn,os),s[0]=os.x,s[4]=la.x,s[8]=Cn.x,s[1]=os.y,s[5]=la.y,s[9]=Cn.y,s[2]=os.z,s[6]=la.z,s[10]=Cn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,o=this.elements,r=i[0],a=i[4],c=i[8],l=i[12],h=i[1],d=i[5],f=i[9],p=i[13],m=i[2],v=i[6],_=i[10],g=i[14],S=i[3],x=i[7],M=i[11],C=i[15],T=s[0],R=s[4],I=s[8],w=s[12],b=s[1],N=s[5],H=s[9],G=s[13],X=s[2],Q=s[6],Y=s[10],rt=s[14],$=s[3],mt=s[7],St=s[11],Rt=s[15];return o[0]=r*T+a*b+c*X+l*$,o[4]=r*R+a*N+c*Q+l*mt,o[8]=r*I+a*H+c*Y+l*St,o[12]=r*w+a*G+c*rt+l*Rt,o[1]=h*T+d*b+f*X+p*$,o[5]=h*R+d*N+f*Q+p*mt,o[9]=h*I+d*H+f*Y+p*St,o[13]=h*w+d*G+f*rt+p*Rt,o[2]=m*T+v*b+_*X+g*$,o[6]=m*R+v*N+_*Q+g*mt,o[10]=m*I+v*H+_*Y+g*St,o[14]=m*w+v*G+_*rt+g*Rt,o[3]=S*T+x*b+M*X+C*$,o[7]=S*R+x*N+M*Q+C*mt,o[11]=S*I+x*H+M*Y+C*St,o[15]=S*w+x*G+M*rt+C*Rt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],s=t[8],o=t[12],r=t[1],a=t[5],c=t[9],l=t[13],h=t[2],d=t[6],f=t[10],p=t[14],m=t[3],v=t[7],_=t[11],g=t[15];return m*(+o*c*d-s*l*d-o*a*f+i*l*f+s*a*p-i*c*p)+v*(+e*c*p-e*l*f+o*r*f-s*r*p+s*l*h-o*c*h)+_*(+e*l*d-e*a*p-o*r*d+i*r*p+o*a*h-i*l*h)+g*(-s*a*h-e*c*d+e*a*f+s*r*d-i*r*f+i*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],o=t[3],r=t[4],a=t[5],c=t[6],l=t[7],h=t[8],d=t[9],f=t[10],p=t[11],m=t[12],v=t[13],_=t[14],g=t[15],S=d*_*l-v*f*l+v*c*p-a*_*p-d*c*g+a*f*g,x=m*f*l-h*_*l-m*c*p+r*_*p+h*c*g-r*f*g,M=h*v*l-m*d*l+m*a*p-r*v*p-h*a*g+r*d*g,C=m*d*c-h*v*c-m*a*f+r*v*f+h*a*_-r*d*_,T=e*S+i*x+s*M+o*C;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/T;return t[0]=S*R,t[1]=(v*f*o-d*_*o-v*s*p+i*_*p+d*s*g-i*f*g)*R,t[2]=(a*_*o-v*c*o+v*s*l-i*_*l-a*s*g+i*c*g)*R,t[3]=(d*c*o-a*f*o-d*s*l+i*f*l+a*s*p-i*c*p)*R,t[4]=x*R,t[5]=(h*_*o-m*f*o+m*s*p-e*_*p-h*s*g+e*f*g)*R,t[6]=(m*c*o-r*_*o-m*s*l+e*_*l+r*s*g-e*c*g)*R,t[7]=(r*f*o-h*c*o+h*s*l-e*f*l-r*s*p+e*c*p)*R,t[8]=M*R,t[9]=(m*d*o-h*v*o-m*i*p+e*v*p+h*i*g-e*d*g)*R,t[10]=(r*v*o-m*a*o+m*i*l-e*v*l-r*i*g+e*a*g)*R,t[11]=(h*a*o-r*d*o-h*i*l+e*d*l+r*i*p-e*a*p)*R,t[12]=C*R,t[13]=(h*v*s-m*d*s+m*i*f-e*v*f-h*i*_+e*d*_)*R,t[14]=(m*a*s-r*v*s-m*i*c+e*v*c+r*i*_-e*a*_)*R,t[15]=(r*d*s-h*a*s+h*i*c-e*d*c-r*i*f+e*a*f)*R,this}scale(t){const e=this.elements,i=t.x,s=t.y,o=t.z;return e[0]*=i,e[4]*=s,e[8]*=o,e[1]*=i,e[5]*=s,e[9]*=o,e[2]*=i,e[6]*=s,e[10]*=o,e[3]*=i,e[7]*=s,e[11]*=o,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),s=Math.sin(e),o=1-i,r=t.x,a=t.y,c=t.z,l=o*r,h=o*a;return this.set(l*r+i,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+i,h*c-s*r,0,l*c-s*a,h*c+s*r,o*c*c+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,o,r){return this.set(1,i,o,0,t,1,r,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){const s=this.elements,o=e._x,r=e._y,a=e._z,c=e._w,l=o+o,h=r+r,d=a+a,f=o*l,p=o*h,m=o*d,v=r*h,_=r*d,g=a*d,S=c*l,x=c*h,M=c*d,C=i.x,T=i.y,R=i.z;return s[0]=(1-(v+g))*C,s[1]=(p+M)*C,s[2]=(m-x)*C,s[3]=0,s[4]=(p-M)*T,s[5]=(1-(f+g))*T,s[6]=(_+S)*T,s[7]=0,s[8]=(m+x)*R,s[9]=(_-S)*R,s[10]=(1-(f+v))*R,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){const s=this.elements;let o=io.set(s[0],s[1],s[2]).length();const r=io.set(s[4],s[5],s[6]).length(),a=io.set(s[8],s[9],s[10]).length();this.determinant()<0&&(o=-o),t.x=s[12],t.y=s[13],t.z=s[14],Yn.copy(this);const l=1/o,h=1/r,d=1/a;return Yn.elements[0]*=l,Yn.elements[1]*=l,Yn.elements[2]*=l,Yn.elements[4]*=h,Yn.elements[5]*=h,Yn.elements[6]*=h,Yn.elements[8]*=d,Yn.elements[9]*=d,Yn.elements[10]*=d,e.setFromRotationMatrix(Yn),i.x=o,i.y=r,i.z=a,this}makePerspective(t,e,i,s,o,r,a=Vi){const c=this.elements,l=2*o/(e-t),h=2*o/(i-s),d=(e+t)/(e-t),f=(i+s)/(i-s);let p,m;if(a===Vi)p=-(r+o)/(r-o),m=-2*r*o/(r-o);else if(a===tc)p=-r/(r-o),m=-r*o/(r-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,s,o,r,a=Vi){const c=this.elements,l=1/(e-t),h=1/(i-s),d=1/(r-o),f=(e+t)*l,p=(i+s)*h;let m,v;if(a===Vi)m=(r+o)*d,v=-2*d;else if(a===tc)m=o*d,v=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=v,c[14]=-m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const io=new L,Yn=new oe,_m=new L(0,0,0),vm=new L(1,1,1),os=new L,la=new L,Cn=new L,yd=new oe,Sd=new Fn;class wi{constructor(t=0,e=0,i=0,s=wi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const s=t.elements,o=s[0],r=s[4],a=s[8],c=s[1],l=s[5],h=s[9],d=s[2],f=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(tn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-r,o)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-tn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,o),this._z=0);break;case"ZXY":this._x=Math.asin(tn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-r,l)):(this._y=0,this._z=Math.atan2(c,o));break;case"ZYX":this._y=Math.asin(-tn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(c,o)):(this._x=0,this._z=Math.atan2(-r,l));break;case"YZX":this._z=Math.asin(tn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-d,o)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-tn(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return yd.makeRotationFromQuaternion(t),this.setFromRotationMatrix(yd,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Sd.setFromEuler(this),this.setFromQuaternion(Sd,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}wi.DEFAULT_ORDER="XYZ";class Uh{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Mm=0;const bd=new L,so=new Fn,Ui=new oe,ha=new L,or=new L,xm=new L,ym=new Fn,Ed=new L(1,0,0),wd=new L(0,1,0),Td=new L(0,0,1),Ad={type:"added"},Sm={type:"removed"},oo={type:"childadded",child:null},Oc={type:"childremoved",child:null};class en extends Zs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Mm++}),this.uuid=Ks(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=en.DEFAULT_UP.clone();const t=new L,e=new wi,i=new Fn,s=new L(1,1,1);function o(){i.setFromEuler(e,!1)}function r(){e.setFromQuaternion(i,void 0,!1)}e._onChange(o),i._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new oe},normalMatrix:{value:new jt}}),this.matrix=new oe,this.matrixWorld=new oe,this.matrixAutoUpdate=en.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=en.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Uh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return so.setFromAxisAngle(t,e),this.quaternion.multiply(so),this}rotateOnWorldAxis(t,e){return so.setFromAxisAngle(t,e),this.quaternion.premultiply(so),this}rotateX(t){return this.rotateOnAxis(Ed,t)}rotateY(t){return this.rotateOnAxis(wd,t)}rotateZ(t){return this.rotateOnAxis(Td,t)}translateOnAxis(t,e){return bd.copy(t).applyQuaternion(this.quaternion),this.position.add(bd.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Ed,t)}translateY(t){return this.translateOnAxis(wd,t)}translateZ(t){return this.translateOnAxis(Td,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ui.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?ha.copy(t):ha.set(t,e,i);const s=this.parent;this.updateWorldMatrix(!0,!1),or.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ui.lookAt(or,ha,this.up):Ui.lookAt(ha,or,this.up),this.quaternion.setFromRotationMatrix(Ui),s&&(Ui.extractRotation(s.matrixWorld),so.setFromRotationMatrix(Ui),this.quaternion.premultiply(so.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Ad),oo.child=t,this.dispatchEvent(oo),oo.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Sm),Oc.child=t,this.dispatchEvent(Oc),Oc.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ui.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ui.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ui),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Ad),oo.child=t,this.dispatchEvent(oo),oo.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){const r=this.children[i].getObjectByProperty(t,e);if(r!==void 0)return r}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const s=this.children;for(let o=0,r=s.length;o<r;o++)s[o].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(or,t,xm),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(or,ym,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let o=0,r=s.length;o<r;o++)s[o].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function o(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=o(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const d=c[l];o(t.shapes,d)}else o(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(o(t.materials,this.material[c]));s.material=a}else s.material=o(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(o(t.animations,c))}}if(e){const a=r(t.geometries),c=r(t.materials),l=r(t.textures),h=r(t.images),d=r(t.shapes),f=r(t.skeletons),p=r(t.animations),m=r(t.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),m.length>0&&(i.nodes=m)}return i.object=s,i;function r(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const s=t.children[i];this.add(s.clone())}return this}}en.DEFAULT_UP=new L(0,1,0);en.DEFAULT_MATRIX_AUTO_UPDATE=!0;en.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const $n=new L,Ni=new L,Fc=new L,Oi=new L,ro=new L,ao=new L,Rd=new L,kc=new L,zc=new L,Bc=new L,Hc=new Ue,Gc=new Ue,Vc=new Ue;class Zn{constructor(t=new L,e=new L,i=new L){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),$n.subVectors(t,e),s.cross($n);const o=s.lengthSq();return o>0?s.multiplyScalar(1/Math.sqrt(o)):s.set(0,0,0)}static getBarycoord(t,e,i,s,o){$n.subVectors(s,e),Ni.subVectors(i,e),Fc.subVectors(t,e);const r=$n.dot($n),a=$n.dot(Ni),c=$n.dot(Fc),l=Ni.dot(Ni),h=Ni.dot(Fc),d=r*l-a*a;if(d===0)return o.set(0,0,0),null;const f=1/d,p=(l*c-a*h)*f,m=(r*h-a*c)*f;return o.set(1-p-m,m,p)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,Oi)===null?!1:Oi.x>=0&&Oi.y>=0&&Oi.x+Oi.y<=1}static getInterpolation(t,e,i,s,o,r,a,c){return this.getBarycoord(t,e,i,s,Oi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(o,Oi.x),c.addScaledVector(r,Oi.y),c.addScaledVector(a,Oi.z),c)}static getInterpolatedAttribute(t,e,i,s,o,r){return Hc.setScalar(0),Gc.setScalar(0),Vc.setScalar(0),Hc.fromBufferAttribute(t,e),Gc.fromBufferAttribute(t,i),Vc.fromBufferAttribute(t,s),r.setScalar(0),r.addScaledVector(Hc,o.x),r.addScaledVector(Gc,o.y),r.addScaledVector(Vc,o.z),r}static isFrontFacing(t,e,i,s){return $n.subVectors(i,e),Ni.subVectors(t,e),$n.cross(Ni).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return $n.subVectors(this.c,this.b),Ni.subVectors(this.a,this.b),$n.cross(Ni).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Zn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Zn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,o){return Zn.getInterpolation(t,this.a,this.b,this.c,e,i,s,o)}containsPoint(t){return Zn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Zn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,s=this.b,o=this.c;let r,a;ro.subVectors(s,i),ao.subVectors(o,i),kc.subVectors(t,i);const c=ro.dot(kc),l=ao.dot(kc);if(c<=0&&l<=0)return e.copy(i);zc.subVectors(t,s);const h=ro.dot(zc),d=ao.dot(zc);if(h>=0&&d<=h)return e.copy(s);const f=c*d-h*l;if(f<=0&&c>=0&&h<=0)return r=c/(c-h),e.copy(i).addScaledVector(ro,r);Bc.subVectors(t,o);const p=ro.dot(Bc),m=ao.dot(Bc);if(m>=0&&p<=m)return e.copy(o);const v=p*l-c*m;if(v<=0&&l>=0&&m<=0)return a=l/(l-m),e.copy(i).addScaledVector(ao,a);const _=h*m-p*d;if(_<=0&&d-h>=0&&p-m>=0)return Rd.subVectors(o,s),a=(d-h)/(d-h+(p-m)),e.copy(s).addScaledVector(Rd,a);const g=1/(_+v+f);return r=v*g,a=f*g,e.copy(i).addScaledVector(ro,r).addScaledVector(ao,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Lf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},rs={h:0,s:0,l:0},da={h:0,s:0,l:0};function Wc(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class Wt{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=sn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,de.toWorkingColorSpace(this,e),this}setRGB(t,e,i,s=de.workingColorSpace){return this.r=t,this.g=e,this.b=i,de.toWorkingColorSpace(this,s),this}setHSL(t,e,i,s=de.workingColorSpace){if(t=Lh(t,1),e=tn(e,0,1),i=tn(i,0,1),e===0)this.r=this.g=this.b=i;else{const o=i<=.5?i*(1+e):i+e-i*e,r=2*i-o;this.r=Wc(r,o,t+1/3),this.g=Wc(r,o,t),this.b=Wc(r,o,t-1/3)}return de.toWorkingColorSpace(this,s),this}setStyle(t,e=sn){function i(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let o;const r=s[1],a=s[2];switch(r){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,e);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,e);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const o=s[1],r=o.length;if(r===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,e);if(r===6)return this.setHex(parseInt(o,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=sn){const i=Lf[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Yi(t.r),this.g=Yi(t.g),this.b=Yi(t.b),this}copyLinearToSRGB(t){return this.r=Co(t.r),this.g=Co(t.g),this.b=Co(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=sn){return de.fromWorkingColorSpace(cn.copy(this),t),Math.round(tn(cn.r*255,0,255))*65536+Math.round(tn(cn.g*255,0,255))*256+Math.round(tn(cn.b*255,0,255))}getHexString(t=sn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=de.workingColorSpace){de.fromWorkingColorSpace(cn.copy(this),e);const i=cn.r,s=cn.g,o=cn.b,r=Math.max(i,s,o),a=Math.min(i,s,o);let c,l;const h=(a+r)/2;if(a===r)c=0,l=0;else{const d=r-a;switch(l=h<=.5?d/(r+a):d/(2-r-a),r){case i:c=(s-o)/d+(s<o?6:0);break;case s:c=(o-i)/d+2;break;case o:c=(i-s)/d+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=de.workingColorSpace){return de.fromWorkingColorSpace(cn.copy(this),e),t.r=cn.r,t.g=cn.g,t.b=cn.b,t}getStyle(t=sn){de.fromWorkingColorSpace(cn.copy(this),t);const e=cn.r,i=cn.g,s=cn.b;return t!==sn?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(rs),this.setHSL(rs.h+t,rs.s+e,rs.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(rs),t.getHSL(da);const i=xr(rs.h,da.h,e),s=xr(rs.s,da.s,e),o=xr(rs.l,da.l,e);return this.setHSL(i,s,o),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,s=this.b,o=t.elements;return this.r=o[0]*e+o[3]*i+o[6]*s,this.g=o[1]*e+o[4]*i+o[7]*s,this.b=o[2]*e+o[5]*i+o[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const cn=new Wt;Wt.NAMES=Lf;let bm=0;class qr extends Zs{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:bm++}),this.uuid=Ks(),this.name="",this.blending=Ro,this.side=ys,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Sl,this.blendDst=bl,this.blendEquation=Fs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Wt(0,0,0),this.blendAlpha=0,this.depthFunc=Bo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=hd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Js,this.stencilZFail=Js,this.stencilZPass=Js,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ro&&(i.blending=this.blending),this.side!==ys&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Sl&&(i.blendSrc=this.blendSrc),this.blendDst!==bl&&(i.blendDst=this.blendDst),this.blendEquation!==Fs&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Bo&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==hd&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Js&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Js&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Js&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(o){const r=[];for(const a in o){const c=o[a];delete c.metadata,r.push(c)}return r}if(e){const o=s(t.textures),r=s(t.images);o.length>0&&(i.textures=o),r.length>0&&(i.images=r)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const s=e.length;i=new Array(s);for(let o=0;o!==s;++o)i[o]=e[o].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Nh extends qr{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Wt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wi,this.combine=mf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ge=new L,ua=new J;class Bn{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=dd,this.updateRanges=[],this.gpuType=xi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,o=this.itemSize;s<o;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)ua.fromBufferAttribute(this,e),ua.applyMatrix3(t),this.setXY(e,ua.x,ua.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Ge.fromBufferAttribute(this,e),Ge.applyMatrix3(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Ge.fromBufferAttribute(this,e),Ge.applyMatrix4(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Ge.fromBufferAttribute(this,e),Ge.applyNormalMatrix(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Ge.fromBufferAttribute(this,e),Ge.transformDirection(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=_o(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=pn(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=_o(e,this.array)),e}setX(t,e){return this.normalized&&(e=pn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=_o(e,this.array)),e}setY(t,e){return this.normalized&&(e=pn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=_o(e,this.array)),e}setZ(t,e){return this.normalized&&(e=pn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=_o(e,this.array)),e}setW(t,e){return this.normalized&&(e=pn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=pn(e,this.array),i=pn(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=pn(e,this.array),i=pn(i,this.array),s=pn(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,o){return t*=this.itemSize,this.normalized&&(e=pn(e,this.array),i=pn(i,this.array),s=pn(s,this.array),o=pn(o,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=o,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==dd&&(t.usage=this.usage),t}}class Df extends Bn{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class Uf extends Bn{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class Bt extends Bn{constructor(t,e,i){super(new Float32Array(t),e,i)}}let Em=0;const zn=new oe,Xc=new en,co=new L,In=new Jn,rr=new Jn,Je=new L;class Le extends Zs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Em++}),this.uuid=Ks(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Pf(t)?Uf:Df)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const o=new jt().getNormalMatrix(t);i.applyNormalMatrix(o),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return zn.makeRotationFromQuaternion(t),this.applyMatrix4(zn),this}rotateX(t){return zn.makeRotationX(t),this.applyMatrix4(zn),this}rotateY(t){return zn.makeRotationY(t),this.applyMatrix4(zn),this}rotateZ(t){return zn.makeRotationZ(t),this.applyMatrix4(zn),this}translate(t,e,i){return zn.makeTranslation(t,e,i),this.applyMatrix4(zn),this}scale(t,e,i){return zn.makeScale(t,e,i),this.applyMatrix4(zn),this}lookAt(t){return Xc.lookAt(t),Xc.updateMatrix(),this.applyMatrix4(Xc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(co).negate(),this.translate(co.x,co.y,co.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let s=0,o=t.length;s<o;s++){const r=t[s];i.push(r.x,r.y,r.z||0)}this.setAttribute("position",new Bt(i,3))}else{for(let i=0,s=e.count;i<s;i++){const o=t[i];e.setXYZ(i,o.x,o.y,o.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Jn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){const o=e[i];In.setFromBufferAttribute(o),this.morphTargetsRelative?(Je.addVectors(this.boundingBox.min,In.min),this.boundingBox.expandByPoint(Je),Je.addVectors(this.boundingBox.max,In.max),this.boundingBox.expandByPoint(Je)):(this.boundingBox.expandByPoint(In.min),this.boundingBox.expandByPoint(In.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new $r);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(t){const i=this.boundingSphere.center;if(In.setFromBufferAttribute(t),e)for(let o=0,r=e.length;o<r;o++){const a=e[o];rr.setFromBufferAttribute(a),this.morphTargetsRelative?(Je.addVectors(In.min,rr.min),In.expandByPoint(Je),Je.addVectors(In.max,rr.max),In.expandByPoint(Je)):(In.expandByPoint(rr.min),In.expandByPoint(rr.max))}In.getCenter(i);let s=0;for(let o=0,r=t.count;o<r;o++)Je.fromBufferAttribute(t,o),s=Math.max(s,i.distanceToSquared(Je));if(e)for(let o=0,r=e.length;o<r;o++){const a=e[o],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Je.fromBufferAttribute(a,l),c&&(co.fromBufferAttribute(t,l),Je.add(co)),s=Math.max(s,i.distanceToSquared(Je))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,s=e.normal,o=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Bn(new Float32Array(4*i.count),4));const r=this.getAttribute("tangent"),a=[],c=[];for(let I=0;I<i.count;I++)a[I]=new L,c[I]=new L;const l=new L,h=new L,d=new L,f=new J,p=new J,m=new J,v=new L,_=new L;function g(I,w,b){l.fromBufferAttribute(i,I),h.fromBufferAttribute(i,w),d.fromBufferAttribute(i,b),f.fromBufferAttribute(o,I),p.fromBufferAttribute(o,w),m.fromBufferAttribute(o,b),h.sub(l),d.sub(l),p.sub(f),m.sub(f);const N=1/(p.x*m.y-m.x*p.y);isFinite(N)&&(v.copy(h).multiplyScalar(m.y).addScaledVector(d,-p.y).multiplyScalar(N),_.copy(d).multiplyScalar(p.x).addScaledVector(h,-m.x).multiplyScalar(N),a[I].add(v),a[w].add(v),a[b].add(v),c[I].add(_),c[w].add(_),c[b].add(_))}let S=this.groups;S.length===0&&(S=[{start:0,count:t.count}]);for(let I=0,w=S.length;I<w;++I){const b=S[I],N=b.start,H=b.count;for(let G=N,X=N+H;G<X;G+=3)g(t.getX(G+0),t.getX(G+1),t.getX(G+2))}const x=new L,M=new L,C=new L,T=new L;function R(I){C.fromBufferAttribute(s,I),T.copy(C);const w=a[I];x.copy(w),x.sub(C.multiplyScalar(C.dot(w))).normalize(),M.crossVectors(T,w);const N=M.dot(c[I])<0?-1:1;r.setXYZW(I,x.x,x.y,x.z,N)}for(let I=0,w=S.length;I<w;++I){const b=S[I],N=b.start,H=b.count;for(let G=N,X=N+H;G<X;G+=3)R(t.getX(G+0)),R(t.getX(G+1)),R(t.getX(G+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Bn(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);const s=new L,o=new L,r=new L,a=new L,c=new L,l=new L,h=new L,d=new L;if(t)for(let f=0,p=t.count;f<p;f+=3){const m=t.getX(f+0),v=t.getX(f+1),_=t.getX(f+2);s.fromBufferAttribute(e,m),o.fromBufferAttribute(e,v),r.fromBufferAttribute(e,_),h.subVectors(r,o),d.subVectors(s,o),h.cross(d),a.fromBufferAttribute(i,m),c.fromBufferAttribute(i,v),l.fromBufferAttribute(i,_),a.add(h),c.add(h),l.add(h),i.setXYZ(m,a.x,a.y,a.z),i.setXYZ(v,c.x,c.y,c.z),i.setXYZ(_,l.x,l.y,l.z)}else for(let f=0,p=e.count;f<p;f+=3)s.fromBufferAttribute(e,f+0),o.fromBufferAttribute(e,f+1),r.fromBufferAttribute(e,f+2),h.subVectors(r,o),d.subVectors(s,o),h.cross(d),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Je.fromBufferAttribute(t,e),Je.normalize(),t.setXYZ(e,Je.x,Je.y,Je.z)}toNonIndexed(){function t(a,c){const l=a.array,h=a.itemSize,d=a.normalized,f=new l.constructor(c.length*h);let p=0,m=0;for(let v=0,_=c.length;v<_;v++){a.isInterleavedBufferAttribute?p=c[v]*a.data.stride+a.offset:p=c[v]*h;for(let g=0;g<h;g++)f[m++]=l[p++]}return new Bn(f,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Le,i=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=t(c,i);e.setAttribute(a,l)}const o=this.morphAttributes;for(const a in o){const c=[],l=o[a];for(let h=0,d=l.length;h<d;h++){const f=l[h],p=t(f,i);c.push(p)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let a=0,c=r.length;a<c;a++){const l=r[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const c in i){const l=i[c];t.data.attributes[c]=l.toJSON(t.data)}const s={};let o=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let d=0,f=l.length;d<f;d++){const p=l[d];h.push(p.toJSON(t.data))}h.length>0&&(s[c]=h,o=!0)}o&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const s=t.attributes;for(const l in s){const h=s[l];this.setAttribute(l,h.clone(e))}const o=t.morphAttributes;for(const l in o){const h=[],d=o[l];for(let f=0,p=d.length;f<p;f++)h.push(d[f].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const r=t.groups;for(let l=0,h=r.length;l<h;l++){const d=r[l];this.addGroup(d.start,d.count,d.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Pd=new oe,Ps=new Dh,fa=new $r,Cd=new L,pa=new L,ma=new L,ga=new L,Yc=new L,_a=new L,Id=new L,va=new L;class be extends en{constructor(t=new Le,e=new Nh){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=s.length;o<r;o++){const a=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(t,e){const i=this.geometry,s=i.attributes.position,o=i.morphAttributes.position,r=i.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(o&&a){_a.set(0,0,0);for(let c=0,l=o.length;c<l;c++){const h=a[c],d=o[c];h!==0&&(Yc.fromBufferAttribute(d,t),r?_a.addScaledVector(Yc,h):_a.addScaledVector(Yc.sub(e),h))}e.add(_a)}return e}raycast(t,e){const i=this.geometry,s=this.material,o=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),fa.copy(i.boundingSphere),fa.applyMatrix4(o),Ps.copy(t.ray).recast(t.near),!(fa.containsPoint(Ps.origin)===!1&&(Ps.intersectSphere(fa,Cd)===null||Ps.origin.distanceToSquared(Cd)>(t.far-t.near)**2))&&(Pd.copy(o).invert(),Ps.copy(t.ray).applyMatrix4(Pd),!(i.boundingBox!==null&&Ps.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Ps)))}_computeIntersections(t,e,i){let s;const o=this.geometry,r=this.material,a=o.index,c=o.attributes.position,l=o.attributes.uv,h=o.attributes.uv1,d=o.attributes.normal,f=o.groups,p=o.drawRange;if(a!==null)if(Array.isArray(r))for(let m=0,v=f.length;m<v;m++){const _=f[m],g=r[_.materialIndex],S=Math.max(_.start,p.start),x=Math.min(a.count,Math.min(_.start+_.count,p.start+p.count));for(let M=S,C=x;M<C;M+=3){const T=a.getX(M),R=a.getX(M+1),I=a.getX(M+2);s=Ma(this,g,t,i,l,h,d,T,R,I),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=_.materialIndex,e.push(s))}}else{const m=Math.max(0,p.start),v=Math.min(a.count,p.start+p.count);for(let _=m,g=v;_<g;_+=3){const S=a.getX(_),x=a.getX(_+1),M=a.getX(_+2);s=Ma(this,r,t,i,l,h,d,S,x,M),s&&(s.faceIndex=Math.floor(_/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(r))for(let m=0,v=f.length;m<v;m++){const _=f[m],g=r[_.materialIndex],S=Math.max(_.start,p.start),x=Math.min(c.count,Math.min(_.start+_.count,p.start+p.count));for(let M=S,C=x;M<C;M+=3){const T=M,R=M+1,I=M+2;s=Ma(this,g,t,i,l,h,d,T,R,I),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=_.materialIndex,e.push(s))}}else{const m=Math.max(0,p.start),v=Math.min(c.count,p.start+p.count);for(let _=m,g=v;_<g;_+=3){const S=_,x=_+1,M=_+2;s=Ma(this,r,t,i,l,h,d,S,x,M),s&&(s.faceIndex=Math.floor(_/3),e.push(s))}}}}function wm(n,t,e,i,s,o,r,a){let c;if(t.side===vn?c=i.intersectTriangle(r,o,s,!0,a):c=i.intersectTriangle(s,o,r,t.side===ys,a),c===null)return null;va.copy(a),va.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(va);return l<e.near||l>e.far?null:{distance:l,point:va.clone(),object:n}}function Ma(n,t,e,i,s,o,r,a,c,l){n.getVertexPosition(a,pa),n.getVertexPosition(c,ma),n.getVertexPosition(l,ga);const h=wm(n,t,e,i,pa,ma,ga,Id);if(h){const d=new L;Zn.getBarycoord(Id,pa,ma,ga,d),s&&(h.uv=Zn.getInterpolatedAttribute(s,a,c,l,d,new J)),o&&(h.uv1=Zn.getInterpolatedAttribute(o,a,c,l,d,new J)),r&&(h.normal=Zn.getInterpolatedAttribute(r,a,c,l,d,new L),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const f={a,b:c,c:l,normal:new L,materialIndex:0};Zn.getNormal(pa,ma,ga,f.normal),h.face=f,h.barycoord=d}return h}class Ti extends Le{constructor(t=1,e=1,i=1,s=1,o=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:o,depthSegments:r};const a=this;s=Math.floor(s),o=Math.floor(o),r=Math.floor(r);const c=[],l=[],h=[],d=[];let f=0,p=0;m("z","y","x",-1,-1,i,e,t,r,o,0),m("z","y","x",1,-1,i,e,-t,r,o,1),m("x","z","y",1,1,t,i,e,s,r,2),m("x","z","y",1,-1,t,i,-e,s,r,3),m("x","y","z",1,-1,t,e,i,s,o,4),m("x","y","z",-1,-1,t,e,-i,s,o,5),this.setIndex(c),this.setAttribute("position",new Bt(l,3)),this.setAttribute("normal",new Bt(h,3)),this.setAttribute("uv",new Bt(d,2));function m(v,_,g,S,x,M,C,T,R,I,w){const b=M/R,N=C/I,H=M/2,G=C/2,X=T/2,Q=R+1,Y=I+1;let rt=0,$=0;const mt=new L;for(let St=0;St<Y;St++){const Rt=St*N-G;for(let $t=0;$t<Q;$t++){const pe=$t*b-H;mt[v]=pe*S,mt[_]=Rt*x,mt[g]=X,l.push(mt.x,mt.y,mt.z),mt[v]=0,mt[_]=0,mt[g]=T>0?1:-1,h.push(mt.x,mt.y,mt.z),d.push($t/R),d.push(1-St/I),rt+=1}}for(let St=0;St<I;St++)for(let Rt=0;Rt<R;Rt++){const $t=f+Rt+Q*St,pe=f+Rt+Q*(St+1),j=f+(Rt+1)+Q*(St+1),ht=f+(Rt+1)+Q*St;c.push($t,pe,ht),c.push(pe,j,ht),$+=6}a.addGroup(p,$,w),p+=$,f+=rt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ti(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Xo(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function gn(n){const t={};for(let e=0;e<n.length;e++){const i=Xo(n[e]);for(const s in i)t[s]=i[s]}return t}function Tm(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Nf(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:de.workingColorSpace}const Of={clone:Xo,merge:gn};var Am=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Rm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ai extends qr{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Am,this.fragmentShader=Rm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Xo(t.uniforms),this.uniformsGroups=Tm(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const r=this.uniforms[s].value;r&&r.isTexture?e.uniforms[s]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?e.uniforms[s]={type:"c",value:r.getHex()}:r&&r.isVector2?e.uniforms[s]={type:"v2",value:r.toArray()}:r&&r.isVector3?e.uniforms[s]={type:"v3",value:r.toArray()}:r&&r.isVector4?e.uniforms[s]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?e.uniforms[s]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?e.uniforms[s]={type:"m4",value:r.toArray()}:e.uniforms[s]={value:r}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class Ff extends en{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new oe,this.projectionMatrix=new oe,this.projectionMatrixInverse=new oe,this.coordinateSystem=Vi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const as=new L,Ld=new J,Dd=new J;class Dn extends Ff{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Pr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Mr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Pr*2*Math.atan(Math.tan(Mr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){as.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(as.x,as.y).multiplyScalar(-t/as.z),as.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(as.x,as.y).multiplyScalar(-t/as.z)}getViewSize(t,e){return this.getViewBounds(t,Ld,Dd),e.subVectors(Dd,Ld)}setViewOffset(t,e,i,s,o,r){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Mr*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,o=-.5*s;const r=this.view;if(this.view!==null&&this.view.enabled){const c=r.fullWidth,l=r.fullHeight;o+=r.offsetX*s/c,e-=r.offsetY*i/l,s*=r.width/c,i*=r.height/l}const a=this.filmOffset;a!==0&&(o+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+s,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const lo=-90,ho=1;class Pm extends en{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Dn(lo,ho,t,e);s.layers=this.layers,this.add(s);const o=new Dn(lo,ho,t,e);o.layers=this.layers,this.add(o);const r=new Dn(lo,ho,t,e);r.layers=this.layers,this.add(r);const a=new Dn(lo,ho,t,e);a.layers=this.layers,this.add(a);const c=new Dn(lo,ho,t,e);c.layers=this.layers,this.add(c);const l=new Dn(lo,ho,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,s,o,r,a,c]=e;for(const l of e)this.remove(l);if(t===Vi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===tc)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[o,r,a,c,l,h]=this.children,d=t.getRenderTarget(),f=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,o),t.setRenderTarget(i,1,s),t.render(e,r),t.setRenderTarget(i,2,s),t.render(e,a),t.setRenderTarget(i,3,s),t.render(e,c),t.setRenderTarget(i,4,s),t.render(e,l),i.texture.generateMipmaps=v,t.setRenderTarget(i,5,s),t.render(e,h),t.setRenderTarget(d,f,p),t.xr.enabled=m,i.texture.needsPMREMUpdate=!0}}class kf extends hn{constructor(t,e,i,s,o,r,a,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:Ho,super(t,e,i,s,o,r,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Cm extends Xs{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new kf(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Mi}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Ti(5,5,5),o=new Ai({name:"CubemapFromEquirect",uniforms:Xo(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:vn,blending:ms});o.uniforms.tEquirect.value=e;const r=new be(s,o),a=e.minFilter;return e.minFilter===Hs&&(e.minFilter=Mi),new Pm(1,10,this).update(t,r),e.minFilter=a,r.geometry.dispose(),r.material.dispose(),this}clear(t,e,i,s){const o=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(e,i,s);t.setRenderTarget(o)}}const $c=new L,Im=new L,Lm=new jt;class ls{constructor(t=new L(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const s=$c.subVectors(i,e).cross(Im.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta($c),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const o=-(t.start.dot(this.normal)+this.constant)/s;return o<0||o>1?null:e.copy(t.start).addScaledVector(i,o)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||Lm.getNormalMatrix(t),s=this.coplanarPoint($c).applyMatrix4(t),o=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(o),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Cs=new $r,xa=new L;class Oh{constructor(t=new ls,e=new ls,i=new ls,s=new ls,o=new ls,r=new ls){this.planes=[t,e,i,s,o,r]}set(t,e,i,s,o,r){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(o),a[5].copy(r),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Vi){const i=this.planes,s=t.elements,o=s[0],r=s[1],a=s[2],c=s[3],l=s[4],h=s[5],d=s[6],f=s[7],p=s[8],m=s[9],v=s[10],_=s[11],g=s[12],S=s[13],x=s[14],M=s[15];if(i[0].setComponents(c-o,f-l,_-p,M-g).normalize(),i[1].setComponents(c+o,f+l,_+p,M+g).normalize(),i[2].setComponents(c+r,f+h,_+m,M+S).normalize(),i[3].setComponents(c-r,f-h,_-m,M-S).normalize(),i[4].setComponents(c-a,f-d,_-v,M-x).normalize(),e===Vi)i[5].setComponents(c+a,f+d,_+v,M+x).normalize();else if(e===tc)i[5].setComponents(a,d,v,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Cs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Cs.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Cs)}intersectsSprite(t){return Cs.center.set(0,0,0),Cs.radius=.7071067811865476,Cs.applyMatrix4(t.matrixWorld),this.intersectsSphere(Cs)}intersectsSphere(t){const e=this.planes,i=t.center,s=-t.radius;for(let o=0;o<6;o++)if(e[o].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const s=e[i];if(xa.x=s.normal.x>0?t.max.x:t.min.x,xa.y=s.normal.y>0?t.max.y:t.min.y,xa.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(xa)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function zf(){let n=null,t=!1,e=null,i=null;function s(o,r){e(o,r),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(o){e=o},setContext:function(o){n=o}}}function Dm(n){const t=new WeakMap;function e(a,c){const l=a.array,h=a.usage,d=l.byteLength,f=n.createBuffer();n.bindBuffer(c,f),n.bufferData(c,l,h),a.onUploadCallback();let p;if(l instanceof Float32Array)p=n.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=n.SHORT;else if(l instanceof Uint32Array)p=n.UNSIGNED_INT;else if(l instanceof Int32Array)p=n.INT;else if(l instanceof Int8Array)p=n.BYTE;else if(l instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,c,l){const h=c.array,d=c.updateRanges;if(n.bindBuffer(l,a),d.length===0)n.bufferSubData(l,0,h);else{d.sort((p,m)=>p.start-m.start);let f=0;for(let p=1;p<d.length;p++){const m=d[f],v=d[p];v.start<=m.start+m.count+1?m.count=Math.max(m.count,v.start+v.count-m.start):(++f,d[f]=v)}d.length=f+1;for(let p=0,m=d.length;p<m;p++){const v=d[p];n.bufferSubData(l,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function o(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(n.deleteBuffer(c.buffer),t.delete(a))}function r(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:s,remove:o,update:r}}class ni extends Le{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};const o=t/2,r=e/2,a=Math.floor(i),c=Math.floor(s),l=a+1,h=c+1,d=t/a,f=e/c,p=[],m=[],v=[],_=[];for(let g=0;g<h;g++){const S=g*f-r;for(let x=0;x<l;x++){const M=x*d-o;m.push(M,-S,0),v.push(0,0,1),_.push(x/a),_.push(1-g/c)}}for(let g=0;g<c;g++)for(let S=0;S<a;S++){const x=S+l*g,M=S+l*(g+1),C=S+1+l*(g+1),T=S+1+l*g;p.push(x,M,T),p.push(M,C,T)}this.setIndex(p),this.setAttribute("position",new Bt(m,3)),this.setAttribute("normal",new Bt(v,3)),this.setAttribute("uv",new Bt(_,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ni(t.width,t.height,t.widthSegments,t.heightSegments)}}var Um=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Nm=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Om=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Fm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,km=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,zm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Bm=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Hm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Gm=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Vm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Wm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Xm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ym=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,$m=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,qm=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Zm=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Km=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,jm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Jm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Qm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,tg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,eg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,ng=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,ig=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,sg=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,og=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,rg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ag=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,cg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,lg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,hg="gl_FragColor = linearToOutputTexel( gl_FragColor );",dg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ug=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,fg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,pg=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,mg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,gg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,_g=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,vg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Mg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,xg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,yg=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Sg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,bg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Eg=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,wg=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Tg=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Ag=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Rg=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Pg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Cg=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ig=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Lg=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Dg=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Ug=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Ng=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Og=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Fg=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,kg=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zg=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Bg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Hg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Gg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Vg=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Wg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Xg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Yg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,$g=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,qg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Zg=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Kg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,jg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Jg=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Qg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,t1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,e1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,n1=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,i1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,s1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,o1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,r1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,a1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,c1=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,l1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,h1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,d1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,u1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,f1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,p1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,m1=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,g1=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,_1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,v1=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,M1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,x1=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,y1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,S1=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,b1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,E1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,w1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,T1=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,A1=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,R1=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,P1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,C1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,I1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,L1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const D1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,U1=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,N1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,O1=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,F1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,k1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,z1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,B1=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,H1=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,G1=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,V1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,W1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,X1=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Y1=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,$1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,q1=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Z1=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,K1=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,j1=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,J1=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Q1=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,t_=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,e_=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,n_=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,i_=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,s_=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,o_=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,r_=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,a_=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,c_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,l_=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,h_=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,d_=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,u_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,te={alphahash_fragment:Um,alphahash_pars_fragment:Nm,alphamap_fragment:Om,alphamap_pars_fragment:Fm,alphatest_fragment:km,alphatest_pars_fragment:zm,aomap_fragment:Bm,aomap_pars_fragment:Hm,batching_pars_vertex:Gm,batching_vertex:Vm,begin_vertex:Wm,beginnormal_vertex:Xm,bsdfs:Ym,iridescence_fragment:$m,bumpmap_pars_fragment:qm,clipping_planes_fragment:Zm,clipping_planes_pars_fragment:Km,clipping_planes_pars_vertex:jm,clipping_planes_vertex:Jm,color_fragment:Qm,color_pars_fragment:tg,color_pars_vertex:eg,color_vertex:ng,common:ig,cube_uv_reflection_fragment:sg,defaultnormal_vertex:og,displacementmap_pars_vertex:rg,displacementmap_vertex:ag,emissivemap_fragment:cg,emissivemap_pars_fragment:lg,colorspace_fragment:hg,colorspace_pars_fragment:dg,envmap_fragment:ug,envmap_common_pars_fragment:fg,envmap_pars_fragment:pg,envmap_pars_vertex:mg,envmap_physical_pars_fragment:Tg,envmap_vertex:gg,fog_vertex:_g,fog_pars_vertex:vg,fog_fragment:Mg,fog_pars_fragment:xg,gradientmap_pars_fragment:yg,lightmap_pars_fragment:Sg,lights_lambert_fragment:bg,lights_lambert_pars_fragment:Eg,lights_pars_begin:wg,lights_toon_fragment:Ag,lights_toon_pars_fragment:Rg,lights_phong_fragment:Pg,lights_phong_pars_fragment:Cg,lights_physical_fragment:Ig,lights_physical_pars_fragment:Lg,lights_fragment_begin:Dg,lights_fragment_maps:Ug,lights_fragment_end:Ng,logdepthbuf_fragment:Og,logdepthbuf_pars_fragment:Fg,logdepthbuf_pars_vertex:kg,logdepthbuf_vertex:zg,map_fragment:Bg,map_pars_fragment:Hg,map_particle_fragment:Gg,map_particle_pars_fragment:Vg,metalnessmap_fragment:Wg,metalnessmap_pars_fragment:Xg,morphinstance_vertex:Yg,morphcolor_vertex:$g,morphnormal_vertex:qg,morphtarget_pars_vertex:Zg,morphtarget_vertex:Kg,normal_fragment_begin:jg,normal_fragment_maps:Jg,normal_pars_fragment:Qg,normal_pars_vertex:t1,normal_vertex:e1,normalmap_pars_fragment:n1,clearcoat_normal_fragment_begin:i1,clearcoat_normal_fragment_maps:s1,clearcoat_pars_fragment:o1,iridescence_pars_fragment:r1,opaque_fragment:a1,packing:c1,premultiplied_alpha_fragment:l1,project_vertex:h1,dithering_fragment:d1,dithering_pars_fragment:u1,roughnessmap_fragment:f1,roughnessmap_pars_fragment:p1,shadowmap_pars_fragment:m1,shadowmap_pars_vertex:g1,shadowmap_vertex:_1,shadowmask_pars_fragment:v1,skinbase_vertex:M1,skinning_pars_vertex:x1,skinning_vertex:y1,skinnormal_vertex:S1,specularmap_fragment:b1,specularmap_pars_fragment:E1,tonemapping_fragment:w1,tonemapping_pars_fragment:T1,transmission_fragment:A1,transmission_pars_fragment:R1,uv_pars_fragment:P1,uv_pars_vertex:C1,uv_vertex:I1,worldpos_vertex:L1,background_vert:D1,background_frag:U1,backgroundCube_vert:N1,backgroundCube_frag:O1,cube_vert:F1,cube_frag:k1,depth_vert:z1,depth_frag:B1,distanceRGBA_vert:H1,distanceRGBA_frag:G1,equirect_vert:V1,equirect_frag:W1,linedashed_vert:X1,linedashed_frag:Y1,meshbasic_vert:$1,meshbasic_frag:q1,meshlambert_vert:Z1,meshlambert_frag:K1,meshmatcap_vert:j1,meshmatcap_frag:J1,meshnormal_vert:Q1,meshnormal_frag:t_,meshphong_vert:e_,meshphong_frag:n_,meshphysical_vert:i_,meshphysical_frag:s_,meshtoon_vert:o_,meshtoon_frag:r_,points_vert:a_,points_frag:c_,shadow_vert:l_,shadow_frag:h_,sprite_vert:d_,sprite_frag:u_},gt={common:{diffuse:{value:new Wt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new jt},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new jt}},envmap:{envMap:{value:null},envMapRotation:{value:new jt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new jt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new jt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new jt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new jt},normalScale:{value:new J(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new jt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new jt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new jt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new jt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Wt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Wt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0},uvTransform:{value:new jt}},sprite:{diffuse:{value:new Wt(16777215)},opacity:{value:1},center:{value:new J(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new jt},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0}}},pi={basic:{uniforms:gn([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.fog]),vertexShader:te.meshbasic_vert,fragmentShader:te.meshbasic_frag},lambert:{uniforms:gn([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,gt.lights,{emissive:{value:new Wt(0)}}]),vertexShader:te.meshlambert_vert,fragmentShader:te.meshlambert_frag},phong:{uniforms:gn([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,gt.lights,{emissive:{value:new Wt(0)},specular:{value:new Wt(1118481)},shininess:{value:30}}]),vertexShader:te.meshphong_vert,fragmentShader:te.meshphong_frag},standard:{uniforms:gn([gt.common,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.roughnessmap,gt.metalnessmap,gt.fog,gt.lights,{emissive:{value:new Wt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:te.meshphysical_vert,fragmentShader:te.meshphysical_frag},toon:{uniforms:gn([gt.common,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.gradientmap,gt.fog,gt.lights,{emissive:{value:new Wt(0)}}]),vertexShader:te.meshtoon_vert,fragmentShader:te.meshtoon_frag},matcap:{uniforms:gn([gt.common,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,{matcap:{value:null}}]),vertexShader:te.meshmatcap_vert,fragmentShader:te.meshmatcap_frag},points:{uniforms:gn([gt.points,gt.fog]),vertexShader:te.points_vert,fragmentShader:te.points_frag},dashed:{uniforms:gn([gt.common,gt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:te.linedashed_vert,fragmentShader:te.linedashed_frag},depth:{uniforms:gn([gt.common,gt.displacementmap]),vertexShader:te.depth_vert,fragmentShader:te.depth_frag},normal:{uniforms:gn([gt.common,gt.bumpmap,gt.normalmap,gt.displacementmap,{opacity:{value:1}}]),vertexShader:te.meshnormal_vert,fragmentShader:te.meshnormal_frag},sprite:{uniforms:gn([gt.sprite,gt.fog]),vertexShader:te.sprite_vert,fragmentShader:te.sprite_frag},background:{uniforms:{uvTransform:{value:new jt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:te.background_vert,fragmentShader:te.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new jt}},vertexShader:te.backgroundCube_vert,fragmentShader:te.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:te.cube_vert,fragmentShader:te.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:te.equirect_vert,fragmentShader:te.equirect_frag},distanceRGBA:{uniforms:gn([gt.common,gt.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:te.distanceRGBA_vert,fragmentShader:te.distanceRGBA_frag},shadow:{uniforms:gn([gt.lights,gt.fog,{color:{value:new Wt(0)},opacity:{value:1}}]),vertexShader:te.shadow_vert,fragmentShader:te.shadow_frag}};pi.physical={uniforms:gn([pi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new jt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new jt},clearcoatNormalScale:{value:new J(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new jt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new jt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new jt},sheen:{value:0},sheenColor:{value:new Wt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new jt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new jt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new jt},transmissionSamplerSize:{value:new J},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new jt},attenuationDistance:{value:0},attenuationColor:{value:new Wt(0)},specularColor:{value:new Wt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new jt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new jt},anisotropyVector:{value:new J},anisotropyMap:{value:null},anisotropyMapTransform:{value:new jt}}]),vertexShader:te.meshphysical_vert,fragmentShader:te.meshphysical_frag};const ya={r:0,b:0,g:0},Is=new wi,f_=new oe;function p_(n,t,e,i,s,o,r){const a=new Wt(0);let c=o===!0?0:1,l,h,d=null,f=0,p=null;function m(S){let x=S.isScene===!0?S.background:null;return x&&x.isTexture&&(x=(S.backgroundBlurriness>0?e:t).get(x)),x}function v(S){let x=!1;const M=m(S);M===null?g(a,c):M&&M.isColor&&(g(M,1),x=!0);const C=n.xr.getEnvironmentBlendMode();C==="additive"?i.buffers.color.setClear(0,0,0,1,r):C==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,r),(n.autoClear||x)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function _(S,x){const M=m(x);M&&(M.isCubeTexture||M.mapping===fc)?(h===void 0&&(h=new be(new Ti(1,1,1),new Ai({name:"BackgroundCubeMaterial",uniforms:Xo(pi.backgroundCube.uniforms),vertexShader:pi.backgroundCube.vertexShader,fragmentShader:pi.backgroundCube.fragmentShader,side:vn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,T,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Is.copy(x.backgroundRotation),Is.x*=-1,Is.y*=-1,Is.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Is.y*=-1,Is.z*=-1),h.material.uniforms.envMap.value=M,h.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(f_.makeRotationFromEuler(Is)),h.material.toneMapped=de.getTransfer(M.colorSpace)!==ye,(d!==M||f!==M.version||p!==n.toneMapping)&&(h.material.needsUpdate=!0,d=M,f=M.version,p=n.toneMapping),h.layers.enableAll(),S.unshift(h,h.geometry,h.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new be(new ni(2,2),new Ai({name:"BackgroundMaterial",uniforms:Xo(pi.background.uniforms),vertexShader:pi.background.vertexShader,fragmentShader:pi.background.fragmentShader,side:ys,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,l.material.toneMapped=de.getTransfer(M.colorSpace)!==ye,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(d!==M||f!==M.version||p!==n.toneMapping)&&(l.material.needsUpdate=!0,d=M,f=M.version,p=n.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function g(S,x){S.getRGB(ya,Nf(n)),i.buffers.color.setClear(ya.r,ya.g,ya.b,x,r)}return{getClearColor:function(){return a},setClearColor:function(S,x=1){a.set(S),c=x,g(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(S){c=S,g(a,c)},render:v,addToRenderList:_}}function m_(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null);let o=s,r=!1;function a(b,N,H,G,X){let Q=!1;const Y=d(G,H,N);o!==Y&&(o=Y,l(o.object)),Q=p(b,G,H,X),Q&&m(b,G,H,X),X!==null&&t.update(X,n.ELEMENT_ARRAY_BUFFER),(Q||r)&&(r=!1,M(b,N,H,G),X!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(X).buffer))}function c(){return n.createVertexArray()}function l(b){return n.bindVertexArray(b)}function h(b){return n.deleteVertexArray(b)}function d(b,N,H){const G=H.wireframe===!0;let X=i[b.id];X===void 0&&(X={},i[b.id]=X);let Q=X[N.id];Q===void 0&&(Q={},X[N.id]=Q);let Y=Q[G];return Y===void 0&&(Y=f(c()),Q[G]=Y),Y}function f(b){const N=[],H=[],G=[];for(let X=0;X<e;X++)N[X]=0,H[X]=0,G[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:H,attributeDivisors:G,object:b,attributes:{},index:null}}function p(b,N,H,G){const X=o.attributes,Q=N.attributes;let Y=0;const rt=H.getAttributes();for(const $ in rt)if(rt[$].location>=0){const St=X[$];let Rt=Q[$];if(Rt===void 0&&($==="instanceMatrix"&&b.instanceMatrix&&(Rt=b.instanceMatrix),$==="instanceColor"&&b.instanceColor&&(Rt=b.instanceColor)),St===void 0||St.attribute!==Rt||Rt&&St.data!==Rt.data)return!0;Y++}return o.attributesNum!==Y||o.index!==G}function m(b,N,H,G){const X={},Q=N.attributes;let Y=0;const rt=H.getAttributes();for(const $ in rt)if(rt[$].location>=0){let St=Q[$];St===void 0&&($==="instanceMatrix"&&b.instanceMatrix&&(St=b.instanceMatrix),$==="instanceColor"&&b.instanceColor&&(St=b.instanceColor));const Rt={};Rt.attribute=St,St&&St.data&&(Rt.data=St.data),X[$]=Rt,Y++}o.attributes=X,o.attributesNum=Y,o.index=G}function v(){const b=o.newAttributes;for(let N=0,H=b.length;N<H;N++)b[N]=0}function _(b){g(b,0)}function g(b,N){const H=o.newAttributes,G=o.enabledAttributes,X=o.attributeDivisors;H[b]=1,G[b]===0&&(n.enableVertexAttribArray(b),G[b]=1),X[b]!==N&&(n.vertexAttribDivisor(b,N),X[b]=N)}function S(){const b=o.newAttributes,N=o.enabledAttributes;for(let H=0,G=N.length;H<G;H++)N[H]!==b[H]&&(n.disableVertexAttribArray(H),N[H]=0)}function x(b,N,H,G,X,Q,Y){Y===!0?n.vertexAttribIPointer(b,N,H,X,Q):n.vertexAttribPointer(b,N,H,G,X,Q)}function M(b,N,H,G){v();const X=G.attributes,Q=H.getAttributes(),Y=N.defaultAttributeValues;for(const rt in Q){const $=Q[rt];if($.location>=0){let mt=X[rt];if(mt===void 0&&(rt==="instanceMatrix"&&b.instanceMatrix&&(mt=b.instanceMatrix),rt==="instanceColor"&&b.instanceColor&&(mt=b.instanceColor)),mt!==void 0){const St=mt.normalized,Rt=mt.itemSize,$t=t.get(mt);if($t===void 0)continue;const pe=$t.buffer,j=$t.type,ht=$t.bytesPerElement,Pt=j===n.INT||j===n.UNSIGNED_INT||mt.gpuType===wh;if(mt.isInterleavedBufferAttribute){const ft=mt.data,Ot=ft.stride,Gt=mt.offset;if(ft.isInstancedInterleavedBuffer){for(let zt=0;zt<$.locationSize;zt++)g($.location+zt,ft.meshPerAttribute);b.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=ft.meshPerAttribute*ft.count)}else for(let zt=0;zt<$.locationSize;zt++)_($.location+zt);n.bindBuffer(n.ARRAY_BUFFER,pe);for(let zt=0;zt<$.locationSize;zt++)x($.location+zt,Rt/$.locationSize,j,St,Ot*ht,(Gt+Rt/$.locationSize*zt)*ht,Pt)}else{if(mt.isInstancedBufferAttribute){for(let ft=0;ft<$.locationSize;ft++)g($.location+ft,mt.meshPerAttribute);b.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=mt.meshPerAttribute*mt.count)}else for(let ft=0;ft<$.locationSize;ft++)_($.location+ft);n.bindBuffer(n.ARRAY_BUFFER,pe);for(let ft=0;ft<$.locationSize;ft++)x($.location+ft,Rt/$.locationSize,j,St,Rt*ht,Rt/$.locationSize*ft*ht,Pt)}}else if(Y!==void 0){const St=Y[rt];if(St!==void 0)switch(St.length){case 2:n.vertexAttrib2fv($.location,St);break;case 3:n.vertexAttrib3fv($.location,St);break;case 4:n.vertexAttrib4fv($.location,St);break;default:n.vertexAttrib1fv($.location,St)}}}}S()}function C(){I();for(const b in i){const N=i[b];for(const H in N){const G=N[H];for(const X in G)h(G[X].object),delete G[X];delete N[H]}delete i[b]}}function T(b){if(i[b.id]===void 0)return;const N=i[b.id];for(const H in N){const G=N[H];for(const X in G)h(G[X].object),delete G[X];delete N[H]}delete i[b.id]}function R(b){for(const N in i){const H=i[N];if(H[b.id]===void 0)continue;const G=H[b.id];for(const X in G)h(G[X].object),delete G[X];delete H[b.id]}}function I(){w(),r=!0,o!==s&&(o=s,l(o.object))}function w(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:I,resetDefaultState:w,dispose:C,releaseStatesOfGeometry:T,releaseStatesOfProgram:R,initAttributes:v,enableAttribute:_,disableUnusedAttributes:S}}function g_(n,t,e){let i;function s(l){i=l}function o(l,h){n.drawArrays(i,l,h),e.update(h,i,1)}function r(l,h,d){d!==0&&(n.drawArraysInstanced(i,l,h,d),e.update(h,i,d))}function a(l,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,h,0,d);let p=0;for(let m=0;m<d;m++)p+=h[m];e.update(p,i,1)}function c(l,h,d,f){if(d===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<l.length;m++)r(l[m],h[m],f[m]);else{p.multiDrawArraysInstancedWEBGL(i,l,0,h,0,f,0,d);let m=0;for(let v=0;v<d;v++)m+=h[v]*f[v];e.update(m,i,1)}}this.setMode=s,this.render=o,this.renderInstances=r,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function __(n,t,e,i){let s;function o(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const R=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function r(R){return!(R!==Kn&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){const I=R===Yr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==Ki&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==xi&&!I)}function c(R){if(R==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const d=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),_=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),g=n.getParameter(n.MAX_VERTEX_ATTRIBS),S=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),x=n.getParameter(n.MAX_VARYING_VECTORS),M=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),C=m>0,T=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:c,textureFormatReadable:r,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:d,reverseDepthBuffer:f,maxTextures:p,maxVertexTextures:m,maxTextureSize:v,maxCubemapSize:_,maxAttributes:g,maxVertexUniforms:S,maxVaryings:x,maxFragmentUniforms:M,vertexTextures:C,maxSamples:T}}function v_(n){const t=this;let e=null,i=0,s=!1,o=!1;const r=new ls,a=new jt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const p=d.length!==0||f||i!==0||s;return s=f,i=d.length,p},this.beginShadows=function(){o=!0,h(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(d,f){e=h(d,f,0)},this.setState=function(d,f,p){const m=d.clippingPlanes,v=d.clipIntersection,_=d.clipShadows,g=n.get(d);if(!s||m===null||m.length===0||o&&!_)o?h(null):l();else{const S=o?0:i,x=S*4;let M=g.clippingState||null;c.value=M,M=h(m,f,x,p);for(let C=0;C!==x;++C)M[C]=e[C];g.clippingState=M,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=S}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(d,f,p,m){const v=d!==null?d.length:0;let _=null;if(v!==0){if(_=c.value,m!==!0||_===null){const g=p+v*4,S=f.matrixWorldInverse;a.getNormalMatrix(S),(_===null||_.length<g)&&(_=new Float32Array(g));for(let x=0,M=p;x!==v;++x,M+=4)r.copy(d[x]).applyMatrix4(S,a),r.normal.toArray(_,M),_[M+3]=r.constant}c.value=_,c.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,_}}function M_(n){let t=new WeakMap;function e(r,a){return a===Il?r.mapping=Ho:a===Ll&&(r.mapping=Go),r}function i(r){if(r&&r.isTexture){const a=r.mapping;if(a===Il||a===Ll)if(t.has(r)){const c=t.get(r).texture;return e(c,r.mapping)}else{const c=r.image;if(c&&c.height>0){const l=new Cm(c.height);return l.fromEquirectangularTexture(n,r),t.set(r,l),r.addEventListener("dispose",s),e(l.texture,r.mapping)}else return null}}return r}function s(r){const a=r.target;a.removeEventListener("dispose",s);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function o(){t=new WeakMap}return{get:i,dispose:o}}class Bf extends Ff{constructor(t=-1,e=1,i=1,s=-1,o=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=o,this.far=r,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,o,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let o=i-t,r=i+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=l*this.view.offsetX,r=o+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(o,r,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const yo=4,Ud=[.125,.215,.35,.446,.526,.582],ks=20,qc=new Bf,Nd=new Wt;let Zc=null,Kc=0,jc=0,Jc=!1;const Ns=(1+Math.sqrt(5))/2,uo=1/Ns,Od=[new L(-Ns,uo,0),new L(Ns,uo,0),new L(-uo,0,Ns),new L(uo,0,Ns),new L(0,Ns,-uo),new L(0,Ns,uo),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)];class Fd{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100){Zc=this._renderer.getRenderTarget(),Kc=this._renderer.getActiveCubeFace(),jc=this._renderer.getActiveMipmapLevel(),Jc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(t,i,s,o),e>0&&this._blur(o,0,0,e),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Bd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=zd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Zc,Kc,jc),this._renderer.xr.enabled=Jc,t.scissorTest=!1,Sa(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ho||t.mapping===Go?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Zc=this._renderer.getRenderTarget(),Kc=this._renderer.getActiveCubeFace(),jc=this._renderer.getActiveMipmapLevel(),Jc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Mi,minFilter:Mi,generateMipmaps:!1,type:Yr,format:Kn,colorSpace:$o,depthBuffer:!1},s=kd(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=kd(t,e,i);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=x_(o)),this._blurMaterial=y_(o,t,e)}return s}_compileMaterial(t){const e=new be(this._lodPlanes[0],t);this._renderer.compile(e,qc)}_sceneToCubeUV(t,e,i,s){const a=new Dn(90,1,e,i),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(Nd),h.toneMapping=gs,h.autoClear=!1;const p=new Nh({name:"PMREM.Background",side:vn,depthWrite:!1,depthTest:!1}),m=new be(new Ti,p);let v=!1;const _=t.background;_?_.isColor&&(p.color.copy(_),t.background=null,v=!0):(p.color.copy(Nd),v=!0);for(let g=0;g<6;g++){const S=g%3;S===0?(a.up.set(0,c[g],0),a.lookAt(l[g],0,0)):S===1?(a.up.set(0,0,c[g]),a.lookAt(0,l[g],0)):(a.up.set(0,c[g],0),a.lookAt(0,0,l[g]));const x=this._cubeSize;Sa(s,S*x,g>2?x:0,x,x),h.setRenderTarget(s),v&&h.render(m,a),h.render(t,a)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=f,h.autoClear=d,t.background=_}_textureToCubeUV(t,e){const i=this._renderer,s=t.mapping===Ho||t.mapping===Go;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Bd()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=zd());const o=s?this._cubemapMaterial:this._equirectMaterial,r=new be(this._lodPlanes[0],o),a=o.uniforms;a.envMap.value=t;const c=this._cubeSize;Sa(e,0,0,3*c,2*c),i.setRenderTarget(e),i.render(r,qc)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let o=1;o<s;o++){const r=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),a=Od[(s-o-1)%Od.length];this._blur(t,o-1,o,r,a)}e.autoClear=i}_blur(t,e,i,s,o){const r=this._pingPongRenderTarget;this._halfBlur(t,r,e,i,s,"latitudinal",o),this._halfBlur(r,t,i,i,s,"longitudinal",o)}_halfBlur(t,e,i,s,o,r,a){const c=this._renderer,l=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new be(this._lodPlanes[s],l),f=l.uniforms,p=this._sizeLods[i]-1,m=isFinite(o)?Math.PI/(2*p):2*Math.PI/(2*ks-1),v=o/m,_=isFinite(o)?1+Math.floor(h*v):ks;_>ks&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${ks}`);const g=[];let S=0;for(let R=0;R<ks;++R){const I=R/v,w=Math.exp(-I*I/2);g.push(w),R===0?S+=w:R<_&&(S+=2*w)}for(let R=0;R<g.length;R++)g[R]=g[R]/S;f.envMap.value=t.texture,f.samples.value=_,f.weights.value=g,f.latitudinal.value=r==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:x}=this;f.dTheta.value=m,f.mipInt.value=x-i;const M=this._sizeLods[s],C=3*M*(s>x-yo?s-x+yo:0),T=4*(this._cubeSize-M);Sa(e,C,T,3*M,2*M),c.setRenderTarget(e),c.render(d,qc)}}function x_(n){const t=[],e=[],i=[];let s=n;const o=n-yo+1+Ud.length;for(let r=0;r<o;r++){const a=Math.pow(2,s);e.push(a);let c=1/a;r>n-yo?c=Ud[r-n+yo-1]:r===0&&(c=0),i.push(c);const l=1/(a-2),h=-l,d=1+l,f=[h,h,d,h,d,d,h,h,d,d,h,d],p=6,m=6,v=3,_=2,g=1,S=new Float32Array(v*m*p),x=new Float32Array(_*m*p),M=new Float32Array(g*m*p);for(let T=0;T<p;T++){const R=T%3*2/3-1,I=T>2?0:-1,w=[R,I,0,R+2/3,I,0,R+2/3,I+1,0,R,I,0,R+2/3,I+1,0,R,I+1,0];S.set(w,v*m*T),x.set(f,_*m*T);const b=[T,T,T,T,T,T];M.set(b,g*m*T)}const C=new Le;C.setAttribute("position",new Bn(S,v)),C.setAttribute("uv",new Bn(x,_)),C.setAttribute("faceIndex",new Bn(M,g)),t.push(C),s>yo&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function kd(n,t,e){const i=new Xs(n,t,e);return i.texture.mapping=fc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Sa(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function y_(n,t,e){const i=new Float32Array(ks),s=new L(0,1,0);return new Ai({name:"SphericalGaussianBlur",defines:{n:ks,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Fh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ms,depthTest:!1,depthWrite:!1})}function zd(){return new Ai({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Fh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ms,depthTest:!1,depthWrite:!1})}function Bd(){return new Ai({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Fh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ms,depthTest:!1,depthWrite:!1})}function Fh(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function S_(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){const c=a.mapping,l=c===Il||c===Ll,h=c===Ho||c===Go;if(l||h){let d=t.get(a);const f=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new Fd(n)),d=l?e.fromEquirectangular(a,d):e.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),d.texture;if(d!==void 0)return d.texture;{const p=a.image;return l&&p&&p.height>0||h&&p&&s(p)?(e===null&&(e=new Fd(n)),d=l?e.fromEquirectangular(a):e.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),a.addEventListener("dispose",o),d.texture):null}}}return a}function s(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function o(a){const c=a.target;c.removeEventListener("dispose",o);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function r(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:r}}function b_(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const s=e(i);return s===null&&mr("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function E_(n,t,e,i){const s={},o=new WeakMap;function r(d){const f=d.target;f.index!==null&&t.remove(f.index);for(const m in f.attributes)t.remove(f.attributes[m]);for(const m in f.morphAttributes){const v=f.morphAttributes[m];for(let _=0,g=v.length;_<g;_++)t.remove(v[_])}f.removeEventListener("dispose",r),delete s[f.id];const p=o.get(f);p&&(t.remove(p),o.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(d,f){return s[f.id]===!0||(f.addEventListener("dispose",r),s[f.id]=!0,e.memory.geometries++),f}function c(d){const f=d.attributes;for(const m in f)t.update(f[m],n.ARRAY_BUFFER);const p=d.morphAttributes;for(const m in p){const v=p[m];for(let _=0,g=v.length;_<g;_++)t.update(v[_],n.ARRAY_BUFFER)}}function l(d){const f=[],p=d.index,m=d.attributes.position;let v=0;if(p!==null){const S=p.array;v=p.version;for(let x=0,M=S.length;x<M;x+=3){const C=S[x+0],T=S[x+1],R=S[x+2];f.push(C,T,T,R,R,C)}}else if(m!==void 0){const S=m.array;v=m.version;for(let x=0,M=S.length/3-1;x<M;x+=3){const C=x+0,T=x+1,R=x+2;f.push(C,T,T,R,R,C)}}else return;const _=new(Pf(f)?Uf:Df)(f,1);_.version=v;const g=o.get(d);g&&t.remove(g),o.set(d,_)}function h(d){const f=o.get(d);if(f){const p=d.index;p!==null&&f.version<p.version&&l(d)}else l(d);return o.get(d)}return{get:a,update:c,getWireframeAttribute:h}}function w_(n,t,e){let i;function s(f){i=f}let o,r;function a(f){o=f.type,r=f.bytesPerElement}function c(f,p){n.drawElements(i,p,o,f*r),e.update(p,i,1)}function l(f,p,m){m!==0&&(n.drawElementsInstanced(i,p,o,f*r,m),e.update(p,i,m))}function h(f,p,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,o,f,0,m);let _=0;for(let g=0;g<m;g++)_+=p[g];e.update(_,i,1)}function d(f,p,m,v){if(m===0)return;const _=t.get("WEBGL_multi_draw");if(_===null)for(let g=0;g<f.length;g++)l(f[g]/r,p[g],v[g]);else{_.multiDrawElementsInstancedWEBGL(i,p,0,o,f,0,v,0,m);let g=0;for(let S=0;S<m;S++)g+=p[S]*v[S];e.update(g,i,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function T_(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(o,r,a){switch(e.calls++,r){case n.TRIANGLES:e.triangles+=a*(o/3);break;case n.LINES:e.lines+=a*(o/2);break;case n.LINE_STRIP:e.lines+=a*(o-1);break;case n.LINE_LOOP:e.lines+=a*o;break;case n.POINTS:e.points+=a*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function A_(n,t,e){const i=new WeakMap,s=new Ue;function o(r,a,c){const l=r.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0;let f=i.get(a);if(f===void 0||f.count!==d){let w=function(){R.dispose(),i.delete(a),a.removeEventListener("dispose",w)};f!==void 0&&f.texture.dispose();const p=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,_=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],S=a.morphAttributes.color||[];let x=0;p===!0&&(x=1),m===!0&&(x=2),v===!0&&(x=3);let M=a.attributes.position.count*x,C=1;M>t.maxTextureSize&&(C=Math.ceil(M/t.maxTextureSize),M=t.maxTextureSize);const T=new Float32Array(M*C*4*d),R=new If(T,M,C,d);R.type=xi,R.needsUpdate=!0;const I=x*4;for(let b=0;b<d;b++){const N=_[b],H=g[b],G=S[b],X=M*C*4*b;for(let Q=0;Q<N.count;Q++){const Y=Q*I;p===!0&&(s.fromBufferAttribute(N,Q),T[X+Y+0]=s.x,T[X+Y+1]=s.y,T[X+Y+2]=s.z,T[X+Y+3]=0),m===!0&&(s.fromBufferAttribute(H,Q),T[X+Y+4]=s.x,T[X+Y+5]=s.y,T[X+Y+6]=s.z,T[X+Y+7]=0),v===!0&&(s.fromBufferAttribute(G,Q),T[X+Y+8]=s.x,T[X+Y+9]=s.y,T[X+Y+10]=s.z,T[X+Y+11]=G.itemSize===4?s.w:1)}}f={count:d,texture:R,size:new J(M,C)},i.set(a,f),a.addEventListener("dispose",w)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",r.morphTexture,e);else{let p=0;for(let v=0;v<l.length;v++)p+=l[v];const m=a.morphTargetsRelative?1:1-p;c.getUniforms().setValue(n,"morphTargetBaseInfluence",m),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",f.texture,e),c.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:o}}function R_(n,t,e,i){let s=new WeakMap;function o(c){const l=i.render.frame,h=c.geometry,d=t.get(c,h);if(s.get(d)!==l&&(t.update(d),s.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(e.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,n.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const f=c.skeleton;s.get(f)!==l&&(f.update(),s.set(f,l))}return d}function r(){s=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:o,dispose:r}}class Hf extends hn{constructor(t,e,i,s,o,r,a,c,l,h=Po){if(h!==Po&&h!==Wo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===Po&&(i=Ws),i===void 0&&h===Wo&&(i=Vo),super(null,s,o,r,a,c,h,i,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Nn,this.minFilter=c!==void 0?c:Nn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Gf=new hn,Hd=new Hf(1,1),Vf=new If,Wf=new mm,Xf=new kf,Gd=[],Vd=[],Wd=new Float32Array(16),Xd=new Float32Array(9),Yd=new Float32Array(4);function qo(n,t,e){const i=n[0];if(i<=0||i>0)return n;const s=t*e;let o=Gd[s];if(o===void 0&&(o=new Float32Array(s),Gd[s]=o),t!==0){i.toArray(o,0);for(let r=1,a=0;r!==t;++r)a+=e,n[r].toArray(o,a)}return o}function Ke(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function je(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function mc(n,t){let e=Vd[t];e===void 0&&(e=new Int32Array(t),Vd[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function P_(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function C_(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ke(e,t))return;n.uniform2fv(this.addr,t),je(e,t)}}function I_(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ke(e,t))return;n.uniform3fv(this.addr,t),je(e,t)}}function L_(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ke(e,t))return;n.uniform4fv(this.addr,t),je(e,t)}}function D_(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ke(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),je(e,t)}else{if(Ke(e,i))return;Yd.set(i),n.uniformMatrix2fv(this.addr,!1,Yd),je(e,i)}}function U_(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ke(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),je(e,t)}else{if(Ke(e,i))return;Xd.set(i),n.uniformMatrix3fv(this.addr,!1,Xd),je(e,i)}}function N_(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ke(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),je(e,t)}else{if(Ke(e,i))return;Wd.set(i),n.uniformMatrix4fv(this.addr,!1,Wd),je(e,i)}}function O_(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function F_(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ke(e,t))return;n.uniform2iv(this.addr,t),je(e,t)}}function k_(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ke(e,t))return;n.uniform3iv(this.addr,t),je(e,t)}}function z_(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ke(e,t))return;n.uniform4iv(this.addr,t),je(e,t)}}function B_(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function H_(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ke(e,t))return;n.uniform2uiv(this.addr,t),je(e,t)}}function G_(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ke(e,t))return;n.uniform3uiv(this.addr,t),je(e,t)}}function V_(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ke(e,t))return;n.uniform4uiv(this.addr,t),je(e,t)}}function W_(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let o;this.type===n.SAMPLER_2D_SHADOW?(Hd.compareFunction=Rf,o=Hd):o=Gf,e.setTexture2D(t||o,s)}function X_(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||Wf,s)}function Y_(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||Xf,s)}function $_(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||Vf,s)}function q_(n){switch(n){case 5126:return P_;case 35664:return C_;case 35665:return I_;case 35666:return L_;case 35674:return D_;case 35675:return U_;case 35676:return N_;case 5124:case 35670:return O_;case 35667:case 35671:return F_;case 35668:case 35672:return k_;case 35669:case 35673:return z_;case 5125:return B_;case 36294:return H_;case 36295:return G_;case 36296:return V_;case 35678:case 36198:case 36298:case 36306:case 35682:return W_;case 35679:case 36299:case 36307:return X_;case 35680:case 36300:case 36308:case 36293:return Y_;case 36289:case 36303:case 36311:case 36292:return $_}}function Z_(n,t){n.uniform1fv(this.addr,t)}function K_(n,t){const e=qo(t,this.size,2);n.uniform2fv(this.addr,e)}function j_(n,t){const e=qo(t,this.size,3);n.uniform3fv(this.addr,e)}function J_(n,t){const e=qo(t,this.size,4);n.uniform4fv(this.addr,e)}function Q_(n,t){const e=qo(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function t2(n,t){const e=qo(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function e2(n,t){const e=qo(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function n2(n,t){n.uniform1iv(this.addr,t)}function i2(n,t){n.uniform2iv(this.addr,t)}function s2(n,t){n.uniform3iv(this.addr,t)}function o2(n,t){n.uniform4iv(this.addr,t)}function r2(n,t){n.uniform1uiv(this.addr,t)}function a2(n,t){n.uniform2uiv(this.addr,t)}function c2(n,t){n.uniform3uiv(this.addr,t)}function l2(n,t){n.uniform4uiv(this.addr,t)}function h2(n,t,e){const i=this.cache,s=t.length,o=mc(e,s);Ke(i,o)||(n.uniform1iv(this.addr,o),je(i,o));for(let r=0;r!==s;++r)e.setTexture2D(t[r]||Gf,o[r])}function d2(n,t,e){const i=this.cache,s=t.length,o=mc(e,s);Ke(i,o)||(n.uniform1iv(this.addr,o),je(i,o));for(let r=0;r!==s;++r)e.setTexture3D(t[r]||Wf,o[r])}function u2(n,t,e){const i=this.cache,s=t.length,o=mc(e,s);Ke(i,o)||(n.uniform1iv(this.addr,o),je(i,o));for(let r=0;r!==s;++r)e.setTextureCube(t[r]||Xf,o[r])}function f2(n,t,e){const i=this.cache,s=t.length,o=mc(e,s);Ke(i,o)||(n.uniform1iv(this.addr,o),je(i,o));for(let r=0;r!==s;++r)e.setTexture2DArray(t[r]||Vf,o[r])}function p2(n){switch(n){case 5126:return Z_;case 35664:return K_;case 35665:return j_;case 35666:return J_;case 35674:return Q_;case 35675:return t2;case 35676:return e2;case 5124:case 35670:return n2;case 35667:case 35671:return i2;case 35668:case 35672:return s2;case 35669:case 35673:return o2;case 5125:return r2;case 36294:return a2;case 36295:return c2;case 36296:return l2;case 35678:case 36198:case 36298:case 36306:case 35682:return h2;case 35679:case 36299:case 36307:return d2;case 35680:case 36300:case 36308:case 36293:return u2;case 36289:case 36303:case 36311:case 36292:return f2}}class m2{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=q_(e.type)}}class g2{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=p2(e.type)}}class _2{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const s=this.seq;for(let o=0,r=s.length;o!==r;++o){const a=s[o];a.setValue(t,e[a.id],i)}}}const Qc=/(\w+)(\])?(\[|\.)?/g;function $d(n,t){n.seq.push(t),n.map[t.id]=t}function v2(n,t,e){const i=n.name,s=i.length;for(Qc.lastIndex=0;;){const o=Qc.exec(i),r=Qc.lastIndex;let a=o[1];const c=o[2]==="]",l=o[3];if(c&&(a=a|0),l===void 0||l==="["&&r+2===s){$d(e,l===void 0?new m2(a,n,t):new g2(a,n,t));break}else{let d=e.map[a];d===void 0&&(d=new _2(a),$d(e,d)),e=d}}}class qa{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const o=t.getActiveUniform(e,s),r=t.getUniformLocation(e,o.name);v2(o,r,this)}}setValue(t,e,i,s){const o=this.map[e];o!==void 0&&o.setValue(t,i,s)}setOptional(t,e,i){const s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let o=0,r=e.length;o!==r;++o){const a=e[o],c=i[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){const i=[];for(let s=0,o=t.length;s!==o;++s){const r=t[s];r.id in e&&i.push(r)}return i}}function qd(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const M2=37297;let x2=0;function y2(n,t){const e=n.split(`
`),i=[],s=Math.max(t-6,0),o=Math.min(t+6,e.length);for(let r=s;r<o;r++){const a=r+1;i.push(`${a===t?">":" "} ${a}: ${e[r]}`)}return i.join(`
`)}const Zd=new jt;function S2(n){de._getMatrix(Zd,de.workingColorSpace,n);const t=`mat3( ${Zd.elements.map(e=>e.toFixed(4))} )`;switch(de.getTransfer(n)){case pc:return[t,"LinearTransferOETF"];case ye:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function Kd(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),s=n.getShaderInfoLog(t).trim();if(i&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const r=parseInt(o[1]);return e.toUpperCase()+`

`+s+`

`+y2(n.getShaderSource(t),r)}else return s}function b2(n,t){const e=S2(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function E2(n,t){let e;switch(t){case R0:e="Linear";break;case P0:e="Reinhard";break;case C0:e="Cineon";break;case gf:e="ACESFilmic";break;case L0:e="AgX";break;case D0:e="Neutral";break;case I0:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const ba=new L;function w2(){de.getLuminanceCoefficients(ba);const n=ba.x.toFixed(4),t=ba.y.toFixed(4),e=ba.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function T2(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(gr).join(`
`)}function A2(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function R2(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const o=n.getActiveAttrib(t,s),r=o.name;let a=1;o.type===n.FLOAT_MAT2&&(a=2),o.type===n.FLOAT_MAT3&&(a=3),o.type===n.FLOAT_MAT4&&(a=4),e[r]={type:o.type,location:n.getAttribLocation(t,r),locationSize:a}}return e}function gr(n){return n!==""}function jd(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Jd(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const P2=/^[ \t]*#include +<([\w\d./]+)>/gm;function rh(n){return n.replace(P2,I2)}const C2=new Map;function I2(n,t){let e=te[t];if(e===void 0){const i=C2.get(t);if(i!==void 0)e=te[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return rh(e)}const L2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Qd(n){return n.replace(L2,D2)}function D2(n,t,e,i){let s="";for(let o=parseInt(t);o<parseInt(e);o++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return s}function tu(n){let t=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function U2(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Eh?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===pf?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===zi&&(t="SHADOWMAP_TYPE_VSM"),t}function N2(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Ho:case Go:t="ENVMAP_TYPE_CUBE";break;case fc:t="ENVMAP_TYPE_CUBE_UV";break}return t}function O2(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Go:t="ENVMAP_MODE_REFRACTION";break}return t}function F2(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case mf:t="ENVMAP_BLENDING_MULTIPLY";break;case T0:t="ENVMAP_BLENDING_MIX";break;case A0:t="ENVMAP_BLENDING_ADD";break}return t}function k2(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function z2(n,t,e,i){const s=n.getContext(),o=e.defines;let r=e.vertexShader,a=e.fragmentShader;const c=U2(e),l=N2(e),h=O2(e),d=F2(e),f=k2(e),p=T2(e),m=A2(o),v=s.createProgram();let _,g,S=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(_=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(gr).join(`
`),_.length>0&&(_+=`
`),g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(gr).join(`
`),g.length>0&&(g+=`
`)):(_=[tu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(gr).join(`
`),g=[tu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==gs?"#define TONE_MAPPING":"",e.toneMapping!==gs?te.tonemapping_pars_fragment:"",e.toneMapping!==gs?E2("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",te.colorspace_pars_fragment,b2("linearToOutputTexel",e.outputColorSpace),w2(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(gr).join(`
`)),r=rh(r),r=jd(r,e),r=Jd(r,e),a=rh(a),a=jd(a,e),a=Jd(a,e),r=Qd(r),a=Qd(a),e.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,_=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,g=["#define varying in",e.glslVersion===ud?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===ud?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const x=S+_+r,M=S+g+a,C=qd(s,s.VERTEX_SHADER,x),T=qd(s,s.FRAGMENT_SHADER,M);s.attachShader(v,C),s.attachShader(v,T),e.index0AttributeName!==void 0?s.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function R(N){if(n.debug.checkShaderErrors){const H=s.getProgramInfoLog(v).trim(),G=s.getShaderInfoLog(C).trim(),X=s.getShaderInfoLog(T).trim();let Q=!0,Y=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(Q=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,v,C,T);else{const rt=Kd(s,C,"vertex"),$=Kd(s,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+H+`
`+rt+`
`+$)}else H!==""?console.warn("THREE.WebGLProgram: Program Info Log:",H):(G===""||X==="")&&(Y=!1);Y&&(N.diagnostics={runnable:Q,programLog:H,vertexShader:{log:G,prefix:_},fragmentShader:{log:X,prefix:g}})}s.deleteShader(C),s.deleteShader(T),I=new qa(s,v),w=R2(s,v)}let I;this.getUniforms=function(){return I===void 0&&R(this),I};let w;this.getAttributes=function(){return w===void 0&&R(this),w};let b=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=s.getProgramParameter(v,M2)),b},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=x2++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=C,this.fragmentShader=T,this}let B2=0;class H2{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),o=this._getShaderStage(i),r=this._getShaderCacheForMaterial(t);return r.has(s)===!1&&(r.add(s),s.usedTimes++),r.has(o)===!1&&(r.add(o),o.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new G2(t),e.set(t,i)),i}}class G2{constructor(t){this.id=B2++,this.code=t,this.usedTimes=0}}function V2(n,t,e,i,s,o,r){const a=new Uh,c=new H2,l=new Set,h=[],d=s.logarithmicDepthBuffer,f=s.vertexTextures;let p=s.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(w){return l.add(w),w===0?"uv":`uv${w}`}function _(w,b,N,H,G){const X=H.fog,Q=G.geometry,Y=w.isMeshStandardMaterial?H.environment:null,rt=(w.isMeshStandardMaterial?e:t).get(w.envMap||Y),$=rt&&rt.mapping===fc?rt.image.height:null,mt=m[w.type];w.precision!==null&&(p=s.getMaxPrecision(w.precision),p!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",p,"instead."));const St=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,Rt=St!==void 0?St.length:0;let $t=0;Q.morphAttributes.position!==void 0&&($t=1),Q.morphAttributes.normal!==void 0&&($t=2),Q.morphAttributes.color!==void 0&&($t=3);let pe,j,ht,Pt;if(mt){const ve=pi[mt];pe=ve.vertexShader,j=ve.fragmentShader}else pe=w.vertexShader,j=w.fragmentShader,c.update(w),ht=c.getVertexShaderID(w),Pt=c.getFragmentShaderID(w);const ft=n.getRenderTarget(),Ot=n.state.buffers.depth.getReversed(),Gt=G.isInstancedMesh===!0,zt=G.isBatchedMesh===!0,ce=!!w.map,et=!!w.matcap,lt=!!rt,D=!!w.aoMap,Ut=!!w.lightMap,it=!!w.bumpMap,wt=!!w.normalMap,pt=!!w.displacementMap,Ft=!!w.emissiveMap,bt=!!w.metalnessMap,P=!!w.roughnessMap,E=w.anisotropy>0,B=w.clearcoat>0,Z=w.dispersion>0,nt=w.iridescence>0,K=w.sheen>0,Ct=w.transmission>0,_t=E&&!!w.anisotropyMap,Et=B&&!!w.clearcoatMap,re=B&&!!w.clearcoatNormalMap,ot=B&&!!w.clearcoatRoughnessMap,Tt=nt&&!!w.iridescenceMap,kt=nt&&!!w.iridescenceThicknessMap,Ht=K&&!!w.sheenColorMap,At=K&&!!w.sheenRoughnessMap,ae=!!w.specularMap,Qt=!!w.specularColorMap,we=!!w.specularIntensityMap,O=Ct&&!!w.transmissionMap,vt=Ct&&!!w.thicknessMap,q=!!w.gradientMap,tt=!!w.alphaMap,yt=w.alphaTest>0,Mt=!!w.alphaHash,Zt=!!w.extensions;let De=gs;w.toneMapped&&(ft===null||ft.isXRRenderTarget===!0)&&(De=n.toneMapping);const rn={shaderID:mt,shaderType:w.type,shaderName:w.name,vertexShader:pe,fragmentShader:j,defines:w.defines,customVertexShaderID:ht,customFragmentShaderID:Pt,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:p,batching:zt,batchingColor:zt&&G._colorsTexture!==null,instancing:Gt,instancingColor:Gt&&G.instanceColor!==null,instancingMorph:Gt&&G.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ft===null?n.outputColorSpace:ft.isXRRenderTarget===!0?ft.texture.colorSpace:$o,alphaToCoverage:!!w.alphaToCoverage,map:ce,matcap:et,envMap:lt,envMapMode:lt&&rt.mapping,envMapCubeUVHeight:$,aoMap:D,lightMap:Ut,bumpMap:it,normalMap:wt,displacementMap:f&&pt,emissiveMap:Ft,normalMapObjectSpace:wt&&w.normalMapType===F0,normalMapTangentSpace:wt&&w.normalMapType===Af,metalnessMap:bt,roughnessMap:P,anisotropy:E,anisotropyMap:_t,clearcoat:B,clearcoatMap:Et,clearcoatNormalMap:re,clearcoatRoughnessMap:ot,dispersion:Z,iridescence:nt,iridescenceMap:Tt,iridescenceThicknessMap:kt,sheen:K,sheenColorMap:Ht,sheenRoughnessMap:At,specularMap:ae,specularColorMap:Qt,specularIntensityMap:we,transmission:Ct,transmissionMap:O,thicknessMap:vt,gradientMap:q,opaque:w.transparent===!1&&w.blending===Ro&&w.alphaToCoverage===!1,alphaMap:tt,alphaTest:yt,alphaHash:Mt,combine:w.combine,mapUv:ce&&v(w.map.channel),aoMapUv:D&&v(w.aoMap.channel),lightMapUv:Ut&&v(w.lightMap.channel),bumpMapUv:it&&v(w.bumpMap.channel),normalMapUv:wt&&v(w.normalMap.channel),displacementMapUv:pt&&v(w.displacementMap.channel),emissiveMapUv:Ft&&v(w.emissiveMap.channel),metalnessMapUv:bt&&v(w.metalnessMap.channel),roughnessMapUv:P&&v(w.roughnessMap.channel),anisotropyMapUv:_t&&v(w.anisotropyMap.channel),clearcoatMapUv:Et&&v(w.clearcoatMap.channel),clearcoatNormalMapUv:re&&v(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ot&&v(w.clearcoatRoughnessMap.channel),iridescenceMapUv:Tt&&v(w.iridescenceMap.channel),iridescenceThicknessMapUv:kt&&v(w.iridescenceThicknessMap.channel),sheenColorMapUv:Ht&&v(w.sheenColorMap.channel),sheenRoughnessMapUv:At&&v(w.sheenRoughnessMap.channel),specularMapUv:ae&&v(w.specularMap.channel),specularColorMapUv:Qt&&v(w.specularColorMap.channel),specularIntensityMapUv:we&&v(w.specularIntensityMap.channel),transmissionMapUv:O&&v(w.transmissionMap.channel),thicknessMapUv:vt&&v(w.thicknessMap.channel),alphaMapUv:tt&&v(w.alphaMap.channel),vertexTangents:!!Q.attributes.tangent&&(wt||E),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!Q.attributes.uv&&(ce||tt),fog:!!X,useFog:w.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:Ot,skinning:G.isSkinnedMesh===!0,morphTargets:Q.morphAttributes.position!==void 0,morphNormals:Q.morphAttributes.normal!==void 0,morphColors:Q.morphAttributes.color!==void 0,morphTargetsCount:Rt,morphTextureStride:$t,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:w.dithering,shadowMapEnabled:n.shadowMap.enabled&&N.length>0,shadowMapType:n.shadowMap.type,toneMapping:De,decodeVideoTexture:ce&&w.map.isVideoTexture===!0&&de.getTransfer(w.map.colorSpace)===ye,decodeVideoTextureEmissive:Ft&&w.emissiveMap.isVideoTexture===!0&&de.getTransfer(w.emissiveMap.colorSpace)===ye,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===En,flipSided:w.side===vn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Zt&&w.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Zt&&w.extensions.multiDraw===!0||zt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return rn.vertexUv1s=l.has(1),rn.vertexUv2s=l.has(2),rn.vertexUv3s=l.has(3),l.clear(),rn}function g(w){const b=[];if(w.shaderID?b.push(w.shaderID):(b.push(w.customVertexShaderID),b.push(w.customFragmentShaderID)),w.defines!==void 0)for(const N in w.defines)b.push(N),b.push(w.defines[N]);return w.isRawShaderMaterial===!1&&(S(b,w),x(b,w),b.push(n.outputColorSpace)),b.push(w.customProgramCacheKey),b.join()}function S(w,b){w.push(b.precision),w.push(b.outputColorSpace),w.push(b.envMapMode),w.push(b.envMapCubeUVHeight),w.push(b.mapUv),w.push(b.alphaMapUv),w.push(b.lightMapUv),w.push(b.aoMapUv),w.push(b.bumpMapUv),w.push(b.normalMapUv),w.push(b.displacementMapUv),w.push(b.emissiveMapUv),w.push(b.metalnessMapUv),w.push(b.roughnessMapUv),w.push(b.anisotropyMapUv),w.push(b.clearcoatMapUv),w.push(b.clearcoatNormalMapUv),w.push(b.clearcoatRoughnessMapUv),w.push(b.iridescenceMapUv),w.push(b.iridescenceThicknessMapUv),w.push(b.sheenColorMapUv),w.push(b.sheenRoughnessMapUv),w.push(b.specularMapUv),w.push(b.specularColorMapUv),w.push(b.specularIntensityMapUv),w.push(b.transmissionMapUv),w.push(b.thicknessMapUv),w.push(b.combine),w.push(b.fogExp2),w.push(b.sizeAttenuation),w.push(b.morphTargetsCount),w.push(b.morphAttributeCount),w.push(b.numDirLights),w.push(b.numPointLights),w.push(b.numSpotLights),w.push(b.numSpotLightMaps),w.push(b.numHemiLights),w.push(b.numRectAreaLights),w.push(b.numDirLightShadows),w.push(b.numPointLightShadows),w.push(b.numSpotLightShadows),w.push(b.numSpotLightShadowsWithMaps),w.push(b.numLightProbes),w.push(b.shadowMapType),w.push(b.toneMapping),w.push(b.numClippingPlanes),w.push(b.numClipIntersection),w.push(b.depthPacking)}function x(w,b){a.disableAll(),b.supportsVertexTextures&&a.enable(0),b.instancing&&a.enable(1),b.instancingColor&&a.enable(2),b.instancingMorph&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),b.alphaHash&&a.enable(18),b.batching&&a.enable(19),b.dispersion&&a.enable(20),b.batchingColor&&a.enable(21),w.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reverseDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),w.push(a.mask)}function M(w){const b=m[w.type];let N;if(b){const H=pi[b];N=Of.clone(H.uniforms)}else N=w.uniforms;return N}function C(w,b){let N;for(let H=0,G=h.length;H<G;H++){const X=h[H];if(X.cacheKey===b){N=X,++N.usedTimes;break}}return N===void 0&&(N=new z2(n,b,w,o),h.push(N)),N}function T(w){if(--w.usedTimes===0){const b=h.indexOf(w);h[b]=h[h.length-1],h.pop(),w.destroy()}}function R(w){c.remove(w)}function I(){c.dispose()}return{getParameters:_,getProgramCacheKey:g,getUniforms:M,acquireProgram:C,releaseProgram:T,releaseShaderCache:R,programs:h,dispose:I}}function W2(){let n=new WeakMap;function t(r){return n.has(r)}function e(r){let a=n.get(r);return a===void 0&&(a={},n.set(r,a)),a}function i(r){n.delete(r)}function s(r,a,c){n.get(r)[a]=c}function o(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:o}}function X2(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function eu(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function nu(){const n=[];let t=0;const e=[],i=[],s=[];function o(){t=0,e.length=0,i.length=0,s.length=0}function r(d,f,p,m,v,_){let g=n[t];return g===void 0?(g={id:d.id,object:d,geometry:f,material:p,groupOrder:m,renderOrder:d.renderOrder,z:v,group:_},n[t]=g):(g.id=d.id,g.object=d,g.geometry=f,g.material=p,g.groupOrder=m,g.renderOrder=d.renderOrder,g.z=v,g.group=_),t++,g}function a(d,f,p,m,v,_){const g=r(d,f,p,m,v,_);p.transmission>0?i.push(g):p.transparent===!0?s.push(g):e.push(g)}function c(d,f,p,m,v,_){const g=r(d,f,p,m,v,_);p.transmission>0?i.unshift(g):p.transparent===!0?s.unshift(g):e.unshift(g)}function l(d,f){e.length>1&&e.sort(d||X2),i.length>1&&i.sort(f||eu),s.length>1&&s.sort(f||eu)}function h(){for(let d=t,f=n.length;d<f;d++){const p=n[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:i,transparent:s,init:o,push:a,unshift:c,finish:h,sort:l}}function Y2(){let n=new WeakMap;function t(i,s){const o=n.get(i);let r;return o===void 0?(r=new nu,n.set(i,[r])):s>=o.length?(r=new nu,o.push(r)):r=o[s],r}function e(){n=new WeakMap}return{get:t,dispose:e}}function $2(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new L,color:new Wt};break;case"SpotLight":e={position:new L,direction:new L,color:new Wt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new L,color:new Wt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new L,skyColor:new Wt,groundColor:new Wt};break;case"RectAreaLight":e={color:new Wt,position:new L,halfWidth:new L,halfHeight:new L};break}return n[t.id]=e,e}}}function q2(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new J};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new J};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new J,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let Z2=0;function K2(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function j2(n){const t=new $2,e=q2(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new L);const s=new L,o=new oe,r=new oe;function a(l){let h=0,d=0,f=0;for(let w=0;w<9;w++)i.probe[w].set(0,0,0);let p=0,m=0,v=0,_=0,g=0,S=0,x=0,M=0,C=0,T=0,R=0;l.sort(K2);for(let w=0,b=l.length;w<b;w++){const N=l[w],H=N.color,G=N.intensity,X=N.distance,Q=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)h+=H.r*G,d+=H.g*G,f+=H.b*G;else if(N.isLightProbe){for(let Y=0;Y<9;Y++)i.probe[Y].addScaledVector(N.sh.coefficients[Y],G);R++}else if(N.isDirectionalLight){const Y=t.get(N);if(Y.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){const rt=N.shadow,$=e.get(N);$.shadowIntensity=rt.intensity,$.shadowBias=rt.bias,$.shadowNormalBias=rt.normalBias,$.shadowRadius=rt.radius,$.shadowMapSize=rt.mapSize,i.directionalShadow[p]=$,i.directionalShadowMap[p]=Q,i.directionalShadowMatrix[p]=N.shadow.matrix,S++}i.directional[p]=Y,p++}else if(N.isSpotLight){const Y=t.get(N);Y.position.setFromMatrixPosition(N.matrixWorld),Y.color.copy(H).multiplyScalar(G),Y.distance=X,Y.coneCos=Math.cos(N.angle),Y.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),Y.decay=N.decay,i.spot[v]=Y;const rt=N.shadow;if(N.map&&(i.spotLightMap[C]=N.map,C++,rt.updateMatrices(N),N.castShadow&&T++),i.spotLightMatrix[v]=rt.matrix,N.castShadow){const $=e.get(N);$.shadowIntensity=rt.intensity,$.shadowBias=rt.bias,$.shadowNormalBias=rt.normalBias,$.shadowRadius=rt.radius,$.shadowMapSize=rt.mapSize,i.spotShadow[v]=$,i.spotShadowMap[v]=Q,M++}v++}else if(N.isRectAreaLight){const Y=t.get(N);Y.color.copy(H).multiplyScalar(G),Y.halfWidth.set(N.width*.5,0,0),Y.halfHeight.set(0,N.height*.5,0),i.rectArea[_]=Y,_++}else if(N.isPointLight){const Y=t.get(N);if(Y.color.copy(N.color).multiplyScalar(N.intensity),Y.distance=N.distance,Y.decay=N.decay,N.castShadow){const rt=N.shadow,$=e.get(N);$.shadowIntensity=rt.intensity,$.shadowBias=rt.bias,$.shadowNormalBias=rt.normalBias,$.shadowRadius=rt.radius,$.shadowMapSize=rt.mapSize,$.shadowCameraNear=rt.camera.near,$.shadowCameraFar=rt.camera.far,i.pointShadow[m]=$,i.pointShadowMap[m]=Q,i.pointShadowMatrix[m]=N.shadow.matrix,x++}i.point[m]=Y,m++}else if(N.isHemisphereLight){const Y=t.get(N);Y.skyColor.copy(N.color).multiplyScalar(G),Y.groundColor.copy(N.groundColor).multiplyScalar(G),i.hemi[g]=Y,g++}}_>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=gt.LTC_FLOAT_1,i.rectAreaLTC2=gt.LTC_FLOAT_2):(i.rectAreaLTC1=gt.LTC_HALF_1,i.rectAreaLTC2=gt.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=f;const I=i.hash;(I.directionalLength!==p||I.pointLength!==m||I.spotLength!==v||I.rectAreaLength!==_||I.hemiLength!==g||I.numDirectionalShadows!==S||I.numPointShadows!==x||I.numSpotShadows!==M||I.numSpotMaps!==C||I.numLightProbes!==R)&&(i.directional.length=p,i.spot.length=v,i.rectArea.length=_,i.point.length=m,i.hemi.length=g,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.pointShadow.length=x,i.pointShadowMap.length=x,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=S,i.pointShadowMatrix.length=x,i.spotLightMatrix.length=M+C-T,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=R,I.directionalLength=p,I.pointLength=m,I.spotLength=v,I.rectAreaLength=_,I.hemiLength=g,I.numDirectionalShadows=S,I.numPointShadows=x,I.numSpotShadows=M,I.numSpotMaps=C,I.numLightProbes=R,i.version=Z2++)}function c(l,h){let d=0,f=0,p=0,m=0,v=0;const _=h.matrixWorldInverse;for(let g=0,S=l.length;g<S;g++){const x=l[g];if(x.isDirectionalLight){const M=i.directional[d];M.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(_),d++}else if(x.isSpotLight){const M=i.spot[p];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(_),M.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(_),p++}else if(x.isRectAreaLight){const M=i.rectArea[m];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(_),r.identity(),o.copy(x.matrixWorld),o.premultiply(_),r.extractRotation(o),M.halfWidth.set(x.width*.5,0,0),M.halfHeight.set(0,x.height*.5,0),M.halfWidth.applyMatrix4(r),M.halfHeight.applyMatrix4(r),m++}else if(x.isPointLight){const M=i.point[f];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(_),f++}else if(x.isHemisphereLight){const M=i.hemi[v];M.direction.setFromMatrixPosition(x.matrixWorld),M.direction.transformDirection(_),v++}}}return{setup:a,setupView:c,state:i}}function iu(n){const t=new j2(n),e=[],i=[];function s(h){l.camera=h,e.length=0,i.length=0}function o(h){e.push(h)}function r(h){i.push(h)}function a(){t.setup(e)}function c(h){t.setupView(e,h)}const l={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:o,pushShadow:r}}function J2(n){let t=new WeakMap;function e(s,o=0){const r=t.get(s);let a;return r===void 0?(a=new iu(n),t.set(s,[a])):o>=r.length?(a=new iu(n),r.push(a)):a=r[o],a}function i(){t=new WeakMap}return{get:e,dispose:i}}class Q2 extends qr{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=N0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class tv extends qr{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const ev=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,nv=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function iv(n,t,e){let i=new Oh;const s=new J,o=new J,r=new Ue,a=new Q2({depthPacking:O0}),c=new tv,l={},h=e.maxTextureSize,d={[ys]:vn,[vn]:ys,[En]:En},f=new Ai({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new J},radius:{value:4}},vertexShader:ev,fragmentShader:nv}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const m=new Le;m.setAttribute("position",new Bn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new be(m,f),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Eh;let g=this.type;this.render=function(T,R,I){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||T.length===0)return;const w=n.getRenderTarget(),b=n.getActiveCubeFace(),N=n.getActiveMipmapLevel(),H=n.state;H.setBlending(ms),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);const G=g!==zi&&this.type===zi,X=g===zi&&this.type!==zi;for(let Q=0,Y=T.length;Q<Y;Q++){const rt=T[Q],$=rt.shadow;if($===void 0){console.warn("THREE.WebGLShadowMap:",rt,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;s.copy($.mapSize);const mt=$.getFrameExtents();if(s.multiply(mt),o.copy($.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(o.x=Math.floor(h/mt.x),s.x=o.x*mt.x,$.mapSize.x=o.x),s.y>h&&(o.y=Math.floor(h/mt.y),s.y=o.y*mt.y,$.mapSize.y=o.y)),$.map===null||G===!0||X===!0){const Rt=this.type!==zi?{minFilter:Nn,magFilter:Nn}:{};$.map!==null&&$.map.dispose(),$.map=new Xs(s.x,s.y,Rt),$.map.texture.name=rt.name+".shadowMap",$.camera.updateProjectionMatrix()}n.setRenderTarget($.map),n.clear();const St=$.getViewportCount();for(let Rt=0;Rt<St;Rt++){const $t=$.getViewport(Rt);r.set(o.x*$t.x,o.y*$t.y,o.x*$t.z,o.y*$t.w),H.viewport(r),$.updateMatrices(rt,Rt),i=$.getFrustum(),M(R,I,$.camera,rt,this.type)}$.isPointLightShadow!==!0&&this.type===zi&&S($,I),$.needsUpdate=!1}g=this.type,_.needsUpdate=!1,n.setRenderTarget(w,b,N)};function S(T,R){const I=t.update(v);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Xs(s.x,s.y)),f.uniforms.shadow_pass.value=T.map.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,n.setRenderTarget(T.mapPass),n.clear(),n.renderBufferDirect(R,null,I,f,v,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,n.setRenderTarget(T.map),n.clear(),n.renderBufferDirect(R,null,I,p,v,null)}function x(T,R,I,w){let b=null;const N=I.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(N!==void 0)b=N;else if(b=I.isPointLight===!0?c:a,n.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const H=b.uuid,G=R.uuid;let X=l[H];X===void 0&&(X={},l[H]=X);let Q=X[G];Q===void 0&&(Q=b.clone(),X[G]=Q,R.addEventListener("dispose",C)),b=Q}if(b.visible=R.visible,b.wireframe=R.wireframe,w===zi?b.side=R.shadowSide!==null?R.shadowSide:R.side:b.side=R.shadowSide!==null?R.shadowSide:d[R.side],b.alphaMap=R.alphaMap,b.alphaTest=R.alphaTest,b.map=R.map,b.clipShadows=R.clipShadows,b.clippingPlanes=R.clippingPlanes,b.clipIntersection=R.clipIntersection,b.displacementMap=R.displacementMap,b.displacementScale=R.displacementScale,b.displacementBias=R.displacementBias,b.wireframeLinewidth=R.wireframeLinewidth,b.linewidth=R.linewidth,I.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const H=n.properties.get(b);H.light=I}return b}function M(T,R,I,w,b){if(T.visible===!1)return;if(T.layers.test(R.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&b===zi)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,T.matrixWorld);const G=t.update(T),X=T.material;if(Array.isArray(X)){const Q=G.groups;for(let Y=0,rt=Q.length;Y<rt;Y++){const $=Q[Y],mt=X[$.materialIndex];if(mt&&mt.visible){const St=x(T,mt,w,b);T.onBeforeShadow(n,T,R,I,G,St,$),n.renderBufferDirect(I,null,G,St,T,$),T.onAfterShadow(n,T,R,I,G,St,$)}}}else if(X.visible){const Q=x(T,X,w,b);T.onBeforeShadow(n,T,R,I,G,Q,null),n.renderBufferDirect(I,null,G,Q,T,null),T.onAfterShadow(n,T,R,I,G,Q,null)}}const H=T.children;for(let G=0,X=H.length;G<X;G++)M(H[G],R,I,w,b)}function C(T){T.target.removeEventListener("dispose",C);for(const I in l){const w=l[I],b=T.target.uuid;b in w&&(w[b].dispose(),delete w[b])}}}const sv={[El]:wl,[Tl]:Pl,[Al]:Cl,[Bo]:Rl,[wl]:El,[Pl]:Tl,[Cl]:Al,[Rl]:Bo};function ov(n,t){function e(){let O=!1;const vt=new Ue;let q=null;const tt=new Ue(0,0,0,0);return{setMask:function(yt){q!==yt&&!O&&(n.colorMask(yt,yt,yt,yt),q=yt)},setLocked:function(yt){O=yt},setClear:function(yt,Mt,Zt,De,rn){rn===!0&&(yt*=De,Mt*=De,Zt*=De),vt.set(yt,Mt,Zt,De),tt.equals(vt)===!1&&(n.clearColor(yt,Mt,Zt,De),tt.copy(vt))},reset:function(){O=!1,q=null,tt.set(-1,0,0,0)}}}function i(){let O=!1,vt=!1,q=null,tt=null,yt=null;return{setReversed:function(Mt){if(vt!==Mt){const Zt=t.get("EXT_clip_control");vt?Zt.clipControlEXT(Zt.LOWER_LEFT_EXT,Zt.ZERO_TO_ONE_EXT):Zt.clipControlEXT(Zt.LOWER_LEFT_EXT,Zt.NEGATIVE_ONE_TO_ONE_EXT);const De=yt;yt=null,this.setClear(De)}vt=Mt},getReversed:function(){return vt},setTest:function(Mt){Mt?ft(n.DEPTH_TEST):Ot(n.DEPTH_TEST)},setMask:function(Mt){q!==Mt&&!O&&(n.depthMask(Mt),q=Mt)},setFunc:function(Mt){if(vt&&(Mt=sv[Mt]),tt!==Mt){switch(Mt){case El:n.depthFunc(n.NEVER);break;case wl:n.depthFunc(n.ALWAYS);break;case Tl:n.depthFunc(n.LESS);break;case Bo:n.depthFunc(n.LEQUAL);break;case Al:n.depthFunc(n.EQUAL);break;case Rl:n.depthFunc(n.GEQUAL);break;case Pl:n.depthFunc(n.GREATER);break;case Cl:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}tt=Mt}},setLocked:function(Mt){O=Mt},setClear:function(Mt){yt!==Mt&&(vt&&(Mt=1-Mt),n.clearDepth(Mt),yt=Mt)},reset:function(){O=!1,q=null,tt=null,yt=null,vt=!1}}}function s(){let O=!1,vt=null,q=null,tt=null,yt=null,Mt=null,Zt=null,De=null,rn=null;return{setTest:function(ve){O||(ve?ft(n.STENCIL_TEST):Ot(n.STENCIL_TEST))},setMask:function(ve){vt!==ve&&!O&&(n.stencilMask(ve),vt=ve)},setFunc:function(ve,Vn,Ci){(q!==ve||tt!==Vn||yt!==Ci)&&(n.stencilFunc(ve,Vn,Ci),q=ve,tt=Vn,yt=Ci)},setOp:function(ve,Vn,Ci){(Mt!==ve||Zt!==Vn||De!==Ci)&&(n.stencilOp(ve,Vn,Ci),Mt=ve,Zt=Vn,De=Ci)},setLocked:function(ve){O=ve},setClear:function(ve){rn!==ve&&(n.clearStencil(ve),rn=ve)},reset:function(){O=!1,vt=null,q=null,tt=null,yt=null,Mt=null,Zt=null,De=null,rn=null}}}const o=new e,r=new i,a=new s,c=new WeakMap,l=new WeakMap;let h={},d={},f=new WeakMap,p=[],m=null,v=!1,_=null,g=null,S=null,x=null,M=null,C=null,T=null,R=new Wt(0,0,0),I=0,w=!1,b=null,N=null,H=null,G=null,X=null;const Q=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,rt=0;const $=n.getParameter(n.VERSION);$.indexOf("WebGL")!==-1?(rt=parseFloat(/^WebGL (\d)/.exec($)[1]),Y=rt>=1):$.indexOf("OpenGL ES")!==-1&&(rt=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),Y=rt>=2);let mt=null,St={};const Rt=n.getParameter(n.SCISSOR_BOX),$t=n.getParameter(n.VIEWPORT),pe=new Ue().fromArray(Rt),j=new Ue().fromArray($t);function ht(O,vt,q,tt){const yt=new Uint8Array(4),Mt=n.createTexture();n.bindTexture(O,Mt),n.texParameteri(O,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(O,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Zt=0;Zt<q;Zt++)O===n.TEXTURE_3D||O===n.TEXTURE_2D_ARRAY?n.texImage3D(vt,0,n.RGBA,1,1,tt,0,n.RGBA,n.UNSIGNED_BYTE,yt):n.texImage2D(vt+Zt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,yt);return Mt}const Pt={};Pt[n.TEXTURE_2D]=ht(n.TEXTURE_2D,n.TEXTURE_2D,1),Pt[n.TEXTURE_CUBE_MAP]=ht(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Pt[n.TEXTURE_2D_ARRAY]=ht(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Pt[n.TEXTURE_3D]=ht(n.TEXTURE_3D,n.TEXTURE_3D,1,1),o.setClear(0,0,0,1),r.setClear(1),a.setClear(0),ft(n.DEPTH_TEST),r.setFunc(Bo),it(!1),wt(rd),ft(n.CULL_FACE),D(ms);function ft(O){h[O]!==!0&&(n.enable(O),h[O]=!0)}function Ot(O){h[O]!==!1&&(n.disable(O),h[O]=!1)}function Gt(O,vt){return d[O]!==vt?(n.bindFramebuffer(O,vt),d[O]=vt,O===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=vt),O===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=vt),!0):!1}function zt(O,vt){let q=p,tt=!1;if(O){q=f.get(vt),q===void 0&&(q=[],f.set(vt,q));const yt=O.textures;if(q.length!==yt.length||q[0]!==n.COLOR_ATTACHMENT0){for(let Mt=0,Zt=yt.length;Mt<Zt;Mt++)q[Mt]=n.COLOR_ATTACHMENT0+Mt;q.length=yt.length,tt=!0}}else q[0]!==n.BACK&&(q[0]=n.BACK,tt=!0);tt&&n.drawBuffers(q)}function ce(O){return m!==O?(n.useProgram(O),m=O,!0):!1}const et={[Fs]:n.FUNC_ADD,[l0]:n.FUNC_SUBTRACT,[h0]:n.FUNC_REVERSE_SUBTRACT};et[d0]=n.MIN,et[u0]=n.MAX;const lt={[f0]:n.ZERO,[p0]:n.ONE,[m0]:n.SRC_COLOR,[Sl]:n.SRC_ALPHA,[y0]:n.SRC_ALPHA_SATURATE,[M0]:n.DST_COLOR,[_0]:n.DST_ALPHA,[g0]:n.ONE_MINUS_SRC_COLOR,[bl]:n.ONE_MINUS_SRC_ALPHA,[x0]:n.ONE_MINUS_DST_COLOR,[v0]:n.ONE_MINUS_DST_ALPHA,[S0]:n.CONSTANT_COLOR,[b0]:n.ONE_MINUS_CONSTANT_COLOR,[E0]:n.CONSTANT_ALPHA,[w0]:n.ONE_MINUS_CONSTANT_ALPHA};function D(O,vt,q,tt,yt,Mt,Zt,De,rn,ve){if(O===ms){v===!0&&(Ot(n.BLEND),v=!1);return}if(v===!1&&(ft(n.BLEND),v=!0),O!==c0){if(O!==_||ve!==w){if((g!==Fs||M!==Fs)&&(n.blendEquation(n.FUNC_ADD),g=Fs,M=Fs),ve)switch(O){case Ro:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ad:n.blendFunc(n.ONE,n.ONE);break;case cd:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case ld:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case Ro:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ad:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case cd:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case ld:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}S=null,x=null,C=null,T=null,R.set(0,0,0),I=0,_=O,w=ve}return}yt=yt||vt,Mt=Mt||q,Zt=Zt||tt,(vt!==g||yt!==M)&&(n.blendEquationSeparate(et[vt],et[yt]),g=vt,M=yt),(q!==S||tt!==x||Mt!==C||Zt!==T)&&(n.blendFuncSeparate(lt[q],lt[tt],lt[Mt],lt[Zt]),S=q,x=tt,C=Mt,T=Zt),(De.equals(R)===!1||rn!==I)&&(n.blendColor(De.r,De.g,De.b,rn),R.copy(De),I=rn),_=O,w=!1}function Ut(O,vt){O.side===En?Ot(n.CULL_FACE):ft(n.CULL_FACE);let q=O.side===vn;vt&&(q=!q),it(q),O.blending===Ro&&O.transparent===!1?D(ms):D(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),r.setFunc(O.depthFunc),r.setTest(O.depthTest),r.setMask(O.depthWrite),o.setMask(O.colorWrite);const tt=O.stencilWrite;a.setTest(tt),tt&&(a.setMask(O.stencilWriteMask),a.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),a.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),Ft(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?ft(n.SAMPLE_ALPHA_TO_COVERAGE):Ot(n.SAMPLE_ALPHA_TO_COVERAGE)}function it(O){b!==O&&(O?n.frontFace(n.CW):n.frontFace(n.CCW),b=O)}function wt(O){O!==r0?(ft(n.CULL_FACE),O!==N&&(O===rd?n.cullFace(n.BACK):O===a0?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ot(n.CULL_FACE),N=O}function pt(O){O!==H&&(Y&&n.lineWidth(O),H=O)}function Ft(O,vt,q){O?(ft(n.POLYGON_OFFSET_FILL),(G!==vt||X!==q)&&(n.polygonOffset(vt,q),G=vt,X=q)):Ot(n.POLYGON_OFFSET_FILL)}function bt(O){O?ft(n.SCISSOR_TEST):Ot(n.SCISSOR_TEST)}function P(O){O===void 0&&(O=n.TEXTURE0+Q-1),mt!==O&&(n.activeTexture(O),mt=O)}function E(O,vt,q){q===void 0&&(mt===null?q=n.TEXTURE0+Q-1:q=mt);let tt=St[q];tt===void 0&&(tt={type:void 0,texture:void 0},St[q]=tt),(tt.type!==O||tt.texture!==vt)&&(mt!==q&&(n.activeTexture(q),mt=q),n.bindTexture(O,vt||Pt[O]),tt.type=O,tt.texture=vt)}function B(){const O=St[mt];O!==void 0&&O.type!==void 0&&(n.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function Z(){try{n.compressedTexImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function nt(){try{n.compressedTexImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function K(){try{n.texSubImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ct(){try{n.texSubImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function _t(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Et(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function re(){try{n.texStorage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ot(){try{n.texStorage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Tt(){try{n.texImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function kt(){try{n.texImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ht(O){pe.equals(O)===!1&&(n.scissor(O.x,O.y,O.z,O.w),pe.copy(O))}function At(O){j.equals(O)===!1&&(n.viewport(O.x,O.y,O.z,O.w),j.copy(O))}function ae(O,vt){let q=l.get(vt);q===void 0&&(q=new WeakMap,l.set(vt,q));let tt=q.get(O);tt===void 0&&(tt=n.getUniformBlockIndex(vt,O.name),q.set(O,tt))}function Qt(O,vt){const tt=l.get(vt).get(O);c.get(vt)!==tt&&(n.uniformBlockBinding(vt,tt,O.__bindingPointIndex),c.set(vt,tt))}function we(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),r.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},mt=null,St={},d={},f=new WeakMap,p=[],m=null,v=!1,_=null,g=null,S=null,x=null,M=null,C=null,T=null,R=new Wt(0,0,0),I=0,w=!1,b=null,N=null,H=null,G=null,X=null,pe.set(0,0,n.canvas.width,n.canvas.height),j.set(0,0,n.canvas.width,n.canvas.height),o.reset(),r.reset(),a.reset()}return{buffers:{color:o,depth:r,stencil:a},enable:ft,disable:Ot,bindFramebuffer:Gt,drawBuffers:zt,useProgram:ce,setBlending:D,setMaterial:Ut,setFlipSided:it,setCullFace:wt,setLineWidth:pt,setPolygonOffset:Ft,setScissorTest:bt,activeTexture:P,bindTexture:E,unbindTexture:B,compressedTexImage2D:Z,compressedTexImage3D:nt,texImage2D:Tt,texImage3D:kt,updateUBOMapping:ae,uniformBlockBinding:Qt,texStorage2D:re,texStorage3D:ot,texSubImage2D:K,texSubImage3D:Ct,compressedTexSubImage2D:_t,compressedTexSubImage3D:Et,scissor:Ht,viewport:At,reset:we}}function su(n,t,e,i){const s=rv(i);switch(e){case yf:return n*t;case bf:return n*t;case Ef:return n*t*2;case Rh:return n*t/s.components*s.byteLength;case Ph:return n*t/s.components*s.byteLength;case wf:return n*t*2/s.components*s.byteLength;case Ch:return n*t*2/s.components*s.byteLength;case Sf:return n*t*3/s.components*s.byteLength;case Kn:return n*t*4/s.components*s.byteLength;case Ih:return n*t*4/s.components*s.byteLength;case Va:case Wa:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Xa:case Ya:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Nl:case Fl:return Math.max(n,16)*Math.max(t,8)/4;case Ul:case Ol:return Math.max(n,8)*Math.max(t,8)/2;case kl:case zl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Bl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Hl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Gl:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case Vl:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case Wl:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Xl:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case Yl:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case $l:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case ql:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case Zl:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case Kl:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case jl:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case Jl:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case Ql:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case th:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case $a:case eh:case nh:return Math.ceil(n/4)*Math.ceil(t/4)*16;case Tf:case ih:return Math.ceil(n/4)*Math.ceil(t/4)*8;case sh:case oh:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function rv(n){switch(n){case Ki:case vf:return{byteLength:1,components:1};case Rr:case Mf:case Yr:return{byteLength:2,components:1};case Th:case Ah:return{byteLength:2,components:4};case Ws:case wh:case xi:return{byteLength:4,components:1};case xf:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function av(n,t,e,i,s,o,r){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new J,h=new WeakMap;let d;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(P,E){return p?new OffscreenCanvas(P,E):ec("canvas")}function v(P,E,B){let Z=1;const nt=bt(P);if((nt.width>B||nt.height>B)&&(Z=B/Math.max(nt.width,nt.height)),Z<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const K=Math.floor(Z*nt.width),Ct=Math.floor(Z*nt.height);d===void 0&&(d=m(K,Ct));const _t=E?m(K,Ct):d;return _t.width=K,_t.height=Ct,_t.getContext("2d").drawImage(P,0,0,K,Ct),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+nt.width+"x"+nt.height+") to ("+K+"x"+Ct+")."),_t}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+nt.width+"x"+nt.height+")."),P;return P}function _(P){return P.generateMipmaps}function g(P){n.generateMipmap(P)}function S(P){return P.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?n.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function x(P,E,B,Z,nt=!1){if(P!==null){if(n[P]!==void 0)return n[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let K=E;if(E===n.RED&&(B===n.FLOAT&&(K=n.R32F),B===n.HALF_FLOAT&&(K=n.R16F),B===n.UNSIGNED_BYTE&&(K=n.R8)),E===n.RED_INTEGER&&(B===n.UNSIGNED_BYTE&&(K=n.R8UI),B===n.UNSIGNED_SHORT&&(K=n.R16UI),B===n.UNSIGNED_INT&&(K=n.R32UI),B===n.BYTE&&(K=n.R8I),B===n.SHORT&&(K=n.R16I),B===n.INT&&(K=n.R32I)),E===n.RG&&(B===n.FLOAT&&(K=n.RG32F),B===n.HALF_FLOAT&&(K=n.RG16F),B===n.UNSIGNED_BYTE&&(K=n.RG8)),E===n.RG_INTEGER&&(B===n.UNSIGNED_BYTE&&(K=n.RG8UI),B===n.UNSIGNED_SHORT&&(K=n.RG16UI),B===n.UNSIGNED_INT&&(K=n.RG32UI),B===n.BYTE&&(K=n.RG8I),B===n.SHORT&&(K=n.RG16I),B===n.INT&&(K=n.RG32I)),E===n.RGB_INTEGER&&(B===n.UNSIGNED_BYTE&&(K=n.RGB8UI),B===n.UNSIGNED_SHORT&&(K=n.RGB16UI),B===n.UNSIGNED_INT&&(K=n.RGB32UI),B===n.BYTE&&(K=n.RGB8I),B===n.SHORT&&(K=n.RGB16I),B===n.INT&&(K=n.RGB32I)),E===n.RGBA_INTEGER&&(B===n.UNSIGNED_BYTE&&(K=n.RGBA8UI),B===n.UNSIGNED_SHORT&&(K=n.RGBA16UI),B===n.UNSIGNED_INT&&(K=n.RGBA32UI),B===n.BYTE&&(K=n.RGBA8I),B===n.SHORT&&(K=n.RGBA16I),B===n.INT&&(K=n.RGBA32I)),E===n.RGB&&B===n.UNSIGNED_INT_5_9_9_9_REV&&(K=n.RGB9_E5),E===n.RGBA){const Ct=nt?pc:de.getTransfer(Z);B===n.FLOAT&&(K=n.RGBA32F),B===n.HALF_FLOAT&&(K=n.RGBA16F),B===n.UNSIGNED_BYTE&&(K=Ct===ye?n.SRGB8_ALPHA8:n.RGBA8),B===n.UNSIGNED_SHORT_4_4_4_4&&(K=n.RGBA4),B===n.UNSIGNED_SHORT_5_5_5_1&&(K=n.RGB5_A1)}return(K===n.R16F||K===n.R32F||K===n.RG16F||K===n.RG32F||K===n.RGBA16F||K===n.RGBA32F)&&t.get("EXT_color_buffer_float"),K}function M(P,E){let B;return P?E===null||E===Ws||E===Vo?B=n.DEPTH24_STENCIL8:E===xi?B=n.DEPTH32F_STENCIL8:E===Rr&&(B=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Ws||E===Vo?B=n.DEPTH_COMPONENT24:E===xi?B=n.DEPTH_COMPONENT32F:E===Rr&&(B=n.DEPTH_COMPONENT16),B}function C(P,E){return _(P)===!0||P.isFramebufferTexture&&P.minFilter!==Nn&&P.minFilter!==Mi?Math.log2(Math.max(E.width,E.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?E.mipmaps.length:1}function T(P){const E=P.target;E.removeEventListener("dispose",T),I(E),E.isVideoTexture&&h.delete(E)}function R(P){const E=P.target;E.removeEventListener("dispose",R),b(E)}function I(P){const E=i.get(P);if(E.__webglInit===void 0)return;const B=P.source,Z=f.get(B);if(Z){const nt=Z[E.__cacheKey];nt.usedTimes--,nt.usedTimes===0&&w(P),Object.keys(Z).length===0&&f.delete(B)}i.remove(P)}function w(P){const E=i.get(P);n.deleteTexture(E.__webglTexture);const B=P.source,Z=f.get(B);delete Z[E.__cacheKey],r.memory.textures--}function b(P){const E=i.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),i.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(E.__webglFramebuffer[Z]))for(let nt=0;nt<E.__webglFramebuffer[Z].length;nt++)n.deleteFramebuffer(E.__webglFramebuffer[Z][nt]);else n.deleteFramebuffer(E.__webglFramebuffer[Z]);E.__webglDepthbuffer&&n.deleteRenderbuffer(E.__webglDepthbuffer[Z])}else{if(Array.isArray(E.__webglFramebuffer))for(let Z=0;Z<E.__webglFramebuffer.length;Z++)n.deleteFramebuffer(E.__webglFramebuffer[Z]);else n.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&n.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&n.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let Z=0;Z<E.__webglColorRenderbuffer.length;Z++)E.__webglColorRenderbuffer[Z]&&n.deleteRenderbuffer(E.__webglColorRenderbuffer[Z]);E.__webglDepthRenderbuffer&&n.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const B=P.textures;for(let Z=0,nt=B.length;Z<nt;Z++){const K=i.get(B[Z]);K.__webglTexture&&(n.deleteTexture(K.__webglTexture),r.memory.textures--),i.remove(B[Z])}i.remove(P)}let N=0;function H(){N=0}function G(){const P=N;return P>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+s.maxTextures),N+=1,P}function X(P){const E=[];return E.push(P.wrapS),E.push(P.wrapT),E.push(P.wrapR||0),E.push(P.magFilter),E.push(P.minFilter),E.push(P.anisotropy),E.push(P.internalFormat),E.push(P.format),E.push(P.type),E.push(P.generateMipmaps),E.push(P.premultiplyAlpha),E.push(P.flipY),E.push(P.unpackAlignment),E.push(P.colorSpace),E.join()}function Q(P,E){const B=i.get(P);if(P.isVideoTexture&&pt(P),P.isRenderTargetTexture===!1&&P.version>0&&B.__version!==P.version){const Z=P.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{j(B,P,E);return}}e.bindTexture(n.TEXTURE_2D,B.__webglTexture,n.TEXTURE0+E)}function Y(P,E){const B=i.get(P);if(P.version>0&&B.__version!==P.version){j(B,P,E);return}e.bindTexture(n.TEXTURE_2D_ARRAY,B.__webglTexture,n.TEXTURE0+E)}function rt(P,E){const B=i.get(P);if(P.version>0&&B.__version!==P.version){j(B,P,E);return}e.bindTexture(n.TEXTURE_3D,B.__webglTexture,n.TEXTURE0+E)}function $(P,E){const B=i.get(P);if(P.version>0&&B.__version!==P.version){ht(B,P,E);return}e.bindTexture(n.TEXTURE_CUBE_MAP,B.__webglTexture,n.TEXTURE0+E)}const mt={[Zi]:n.REPEAT,[Bs]:n.CLAMP_TO_EDGE,[Dl]:n.MIRRORED_REPEAT},St={[Nn]:n.NEAREST,[U0]:n.NEAREST_MIPMAP_NEAREST,[ia]:n.NEAREST_MIPMAP_LINEAR,[Mi]:n.LINEAR,[Ac]:n.LINEAR_MIPMAP_NEAREST,[Hs]:n.LINEAR_MIPMAP_LINEAR},Rt={[k0]:n.NEVER,[W0]:n.ALWAYS,[z0]:n.LESS,[Rf]:n.LEQUAL,[B0]:n.EQUAL,[V0]:n.GEQUAL,[H0]:n.GREATER,[G0]:n.NOTEQUAL};function $t(P,E){if(E.type===xi&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===Mi||E.magFilter===Ac||E.magFilter===ia||E.magFilter===Hs||E.minFilter===Mi||E.minFilter===Ac||E.minFilter===ia||E.minFilter===Hs)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(P,n.TEXTURE_WRAP_S,mt[E.wrapS]),n.texParameteri(P,n.TEXTURE_WRAP_T,mt[E.wrapT]),(P===n.TEXTURE_3D||P===n.TEXTURE_2D_ARRAY)&&n.texParameteri(P,n.TEXTURE_WRAP_R,mt[E.wrapR]),n.texParameteri(P,n.TEXTURE_MAG_FILTER,St[E.magFilter]),n.texParameteri(P,n.TEXTURE_MIN_FILTER,St[E.minFilter]),E.compareFunction&&(n.texParameteri(P,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(P,n.TEXTURE_COMPARE_FUNC,Rt[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Nn||E.minFilter!==ia&&E.minFilter!==Hs||E.type===xi&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||i.get(E).__currentAnisotropy){const B=t.get("EXT_texture_filter_anisotropic");n.texParameterf(P,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,s.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy}}}function pe(P,E){let B=!1;P.__webglInit===void 0&&(P.__webglInit=!0,E.addEventListener("dispose",T));const Z=E.source;let nt=f.get(Z);nt===void 0&&(nt={},f.set(Z,nt));const K=X(E);if(K!==P.__cacheKey){nt[K]===void 0&&(nt[K]={texture:n.createTexture(),usedTimes:0},r.memory.textures++,B=!0),nt[K].usedTimes++;const Ct=nt[P.__cacheKey];Ct!==void 0&&(nt[P.__cacheKey].usedTimes--,Ct.usedTimes===0&&w(E)),P.__cacheKey=K,P.__webglTexture=nt[K].texture}return B}function j(P,E,B){let Z=n.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(Z=n.TEXTURE_2D_ARRAY),E.isData3DTexture&&(Z=n.TEXTURE_3D);const nt=pe(P,E),K=E.source;e.bindTexture(Z,P.__webglTexture,n.TEXTURE0+B);const Ct=i.get(K);if(K.version!==Ct.__version||nt===!0){e.activeTexture(n.TEXTURE0+B);const _t=de.getPrimaries(de.workingColorSpace),Et=E.colorSpace===hs?null:de.getPrimaries(E.colorSpace),re=E.colorSpace===hs||_t===Et?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,re);let ot=v(E.image,!1,s.maxTextureSize);ot=Ft(E,ot);const Tt=o.convert(E.format,E.colorSpace),kt=o.convert(E.type);let Ht=x(E.internalFormat,Tt,kt,E.colorSpace,E.isVideoTexture);$t(Z,E);let At;const ae=E.mipmaps,Qt=E.isVideoTexture!==!0,we=Ct.__version===void 0||nt===!0,O=K.dataReady,vt=C(E,ot);if(E.isDepthTexture)Ht=M(E.format===Wo,E.type),we&&(Qt?e.texStorage2D(n.TEXTURE_2D,1,Ht,ot.width,ot.height):e.texImage2D(n.TEXTURE_2D,0,Ht,ot.width,ot.height,0,Tt,kt,null));else if(E.isDataTexture)if(ae.length>0){Qt&&we&&e.texStorage2D(n.TEXTURE_2D,vt,Ht,ae[0].width,ae[0].height);for(let q=0,tt=ae.length;q<tt;q++)At=ae[q],Qt?O&&e.texSubImage2D(n.TEXTURE_2D,q,0,0,At.width,At.height,Tt,kt,At.data):e.texImage2D(n.TEXTURE_2D,q,Ht,At.width,At.height,0,Tt,kt,At.data);E.generateMipmaps=!1}else Qt?(we&&e.texStorage2D(n.TEXTURE_2D,vt,Ht,ot.width,ot.height),O&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,ot.width,ot.height,Tt,kt,ot.data)):e.texImage2D(n.TEXTURE_2D,0,Ht,ot.width,ot.height,0,Tt,kt,ot.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Qt&&we&&e.texStorage3D(n.TEXTURE_2D_ARRAY,vt,Ht,ae[0].width,ae[0].height,ot.depth);for(let q=0,tt=ae.length;q<tt;q++)if(At=ae[q],E.format!==Kn)if(Tt!==null)if(Qt){if(O)if(E.layerUpdates.size>0){const yt=su(At.width,At.height,E.format,E.type);for(const Mt of E.layerUpdates){const Zt=At.data.subarray(Mt*yt/At.data.BYTES_PER_ELEMENT,(Mt+1)*yt/At.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,q,0,0,Mt,At.width,At.height,1,Tt,Zt)}E.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,q,0,0,0,At.width,At.height,ot.depth,Tt,At.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,q,Ht,At.width,At.height,ot.depth,0,At.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Qt?O&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,q,0,0,0,At.width,At.height,ot.depth,Tt,kt,At.data):e.texImage3D(n.TEXTURE_2D_ARRAY,q,Ht,At.width,At.height,ot.depth,0,Tt,kt,At.data)}else{Qt&&we&&e.texStorage2D(n.TEXTURE_2D,vt,Ht,ae[0].width,ae[0].height);for(let q=0,tt=ae.length;q<tt;q++)At=ae[q],E.format!==Kn?Tt!==null?Qt?O&&e.compressedTexSubImage2D(n.TEXTURE_2D,q,0,0,At.width,At.height,Tt,At.data):e.compressedTexImage2D(n.TEXTURE_2D,q,Ht,At.width,At.height,0,At.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Qt?O&&e.texSubImage2D(n.TEXTURE_2D,q,0,0,At.width,At.height,Tt,kt,At.data):e.texImage2D(n.TEXTURE_2D,q,Ht,At.width,At.height,0,Tt,kt,At.data)}else if(E.isDataArrayTexture)if(Qt){if(we&&e.texStorage3D(n.TEXTURE_2D_ARRAY,vt,Ht,ot.width,ot.height,ot.depth),O)if(E.layerUpdates.size>0){const q=su(ot.width,ot.height,E.format,E.type);for(const tt of E.layerUpdates){const yt=ot.data.subarray(tt*q/ot.data.BYTES_PER_ELEMENT,(tt+1)*q/ot.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,tt,ot.width,ot.height,1,Tt,kt,yt)}E.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ot.width,ot.height,ot.depth,Tt,kt,ot.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Ht,ot.width,ot.height,ot.depth,0,Tt,kt,ot.data);else if(E.isData3DTexture)Qt?(we&&e.texStorage3D(n.TEXTURE_3D,vt,Ht,ot.width,ot.height,ot.depth),O&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ot.width,ot.height,ot.depth,Tt,kt,ot.data)):e.texImage3D(n.TEXTURE_3D,0,Ht,ot.width,ot.height,ot.depth,0,Tt,kt,ot.data);else if(E.isFramebufferTexture){if(we)if(Qt)e.texStorage2D(n.TEXTURE_2D,vt,Ht,ot.width,ot.height);else{let q=ot.width,tt=ot.height;for(let yt=0;yt<vt;yt++)e.texImage2D(n.TEXTURE_2D,yt,Ht,q,tt,0,Tt,kt,null),q>>=1,tt>>=1}}else if(ae.length>0){if(Qt&&we){const q=bt(ae[0]);e.texStorage2D(n.TEXTURE_2D,vt,Ht,q.width,q.height)}for(let q=0,tt=ae.length;q<tt;q++)At=ae[q],Qt?O&&e.texSubImage2D(n.TEXTURE_2D,q,0,0,Tt,kt,At):e.texImage2D(n.TEXTURE_2D,q,Ht,Tt,kt,At);E.generateMipmaps=!1}else if(Qt){if(we){const q=bt(ot);e.texStorage2D(n.TEXTURE_2D,vt,Ht,q.width,q.height)}O&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,Tt,kt,ot)}else e.texImage2D(n.TEXTURE_2D,0,Ht,Tt,kt,ot);_(E)&&g(Z),Ct.__version=K.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function ht(P,E,B){if(E.image.length!==6)return;const Z=pe(P,E),nt=E.source;e.bindTexture(n.TEXTURE_CUBE_MAP,P.__webglTexture,n.TEXTURE0+B);const K=i.get(nt);if(nt.version!==K.__version||Z===!0){e.activeTexture(n.TEXTURE0+B);const Ct=de.getPrimaries(de.workingColorSpace),_t=E.colorSpace===hs?null:de.getPrimaries(E.colorSpace),Et=E.colorSpace===hs||Ct===_t?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Et);const re=E.isCompressedTexture||E.image[0].isCompressedTexture,ot=E.image[0]&&E.image[0].isDataTexture,Tt=[];for(let tt=0;tt<6;tt++)!re&&!ot?Tt[tt]=v(E.image[tt],!0,s.maxCubemapSize):Tt[tt]=ot?E.image[tt].image:E.image[tt],Tt[tt]=Ft(E,Tt[tt]);const kt=Tt[0],Ht=o.convert(E.format,E.colorSpace),At=o.convert(E.type),ae=x(E.internalFormat,Ht,At,E.colorSpace),Qt=E.isVideoTexture!==!0,we=K.__version===void 0||Z===!0,O=nt.dataReady;let vt=C(E,kt);$t(n.TEXTURE_CUBE_MAP,E);let q;if(re){Qt&&we&&e.texStorage2D(n.TEXTURE_CUBE_MAP,vt,ae,kt.width,kt.height);for(let tt=0;tt<6;tt++){q=Tt[tt].mipmaps;for(let yt=0;yt<q.length;yt++){const Mt=q[yt];E.format!==Kn?Ht!==null?Qt?O&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,yt,0,0,Mt.width,Mt.height,Ht,Mt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,yt,ae,Mt.width,Mt.height,0,Mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Qt?O&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,yt,0,0,Mt.width,Mt.height,Ht,At,Mt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,yt,ae,Mt.width,Mt.height,0,Ht,At,Mt.data)}}}else{if(q=E.mipmaps,Qt&&we){q.length>0&&vt++;const tt=bt(Tt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,vt,ae,tt.width,tt.height)}for(let tt=0;tt<6;tt++)if(ot){Qt?O&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,Tt[tt].width,Tt[tt].height,Ht,At,Tt[tt].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,ae,Tt[tt].width,Tt[tt].height,0,Ht,At,Tt[tt].data);for(let yt=0;yt<q.length;yt++){const Zt=q[yt].image[tt].image;Qt?O&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,yt+1,0,0,Zt.width,Zt.height,Ht,At,Zt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,yt+1,ae,Zt.width,Zt.height,0,Ht,At,Zt.data)}}else{Qt?O&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,Ht,At,Tt[tt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,ae,Ht,At,Tt[tt]);for(let yt=0;yt<q.length;yt++){const Mt=q[yt];Qt?O&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,yt+1,0,0,Ht,At,Mt.image[tt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,yt+1,ae,Ht,At,Mt.image[tt])}}}_(E)&&g(n.TEXTURE_CUBE_MAP),K.__version=nt.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function Pt(P,E,B,Z,nt,K){const Ct=o.convert(B.format,B.colorSpace),_t=o.convert(B.type),Et=x(B.internalFormat,Ct,_t,B.colorSpace),re=i.get(E),ot=i.get(B);if(ot.__renderTarget=E,!re.__hasExternalTextures){const Tt=Math.max(1,E.width>>K),kt=Math.max(1,E.height>>K);nt===n.TEXTURE_3D||nt===n.TEXTURE_2D_ARRAY?e.texImage3D(nt,K,Et,Tt,kt,E.depth,0,Ct,_t,null):e.texImage2D(nt,K,Et,Tt,kt,0,Ct,_t,null)}e.bindFramebuffer(n.FRAMEBUFFER,P),wt(E)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Z,nt,ot.__webglTexture,0,it(E)):(nt===n.TEXTURE_2D||nt>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&nt<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Z,nt,ot.__webglTexture,K),e.bindFramebuffer(n.FRAMEBUFFER,null)}function ft(P,E,B){if(n.bindRenderbuffer(n.RENDERBUFFER,P),E.depthBuffer){const Z=E.depthTexture,nt=Z&&Z.isDepthTexture?Z.type:null,K=M(E.stencilBuffer,nt),Ct=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,_t=it(E);wt(E)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,_t,K,E.width,E.height):B?n.renderbufferStorageMultisample(n.RENDERBUFFER,_t,K,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,K,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Ct,n.RENDERBUFFER,P)}else{const Z=E.textures;for(let nt=0;nt<Z.length;nt++){const K=Z[nt],Ct=o.convert(K.format,K.colorSpace),_t=o.convert(K.type),Et=x(K.internalFormat,Ct,_t,K.colorSpace),re=it(E);B&&wt(E)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,re,Et,E.width,E.height):wt(E)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,re,Et,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,Et,E.width,E.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ot(P,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,P),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Z=i.get(E.depthTexture);Z.__renderTarget=E,(!Z.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),Q(E.depthTexture,0);const nt=Z.__webglTexture,K=it(E);if(E.depthTexture.format===Po)wt(E)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,nt,0,K):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,nt,0);else if(E.depthTexture.format===Wo)wt(E)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,nt,0,K):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,nt,0);else throw new Error("Unknown depthTexture format")}function Gt(P){const E=i.get(P),B=P.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==P.depthTexture){const Z=P.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),Z){const nt=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,Z.removeEventListener("dispose",nt)};Z.addEventListener("dispose",nt),E.__depthDisposeCallback=nt}E.__boundDepthTexture=Z}if(P.depthTexture&&!E.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");Ot(E.__webglFramebuffer,P)}else if(B){E.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(e.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer[Z]),E.__webglDepthbuffer[Z]===void 0)E.__webglDepthbuffer[Z]=n.createRenderbuffer(),ft(E.__webglDepthbuffer[Z],P,!1);else{const nt=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,K=E.__webglDepthbuffer[Z];n.bindRenderbuffer(n.RENDERBUFFER,K),n.framebufferRenderbuffer(n.FRAMEBUFFER,nt,n.RENDERBUFFER,K)}}else if(e.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=n.createRenderbuffer(),ft(E.__webglDepthbuffer,P,!1);else{const Z=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,nt=E.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,nt),n.framebufferRenderbuffer(n.FRAMEBUFFER,Z,n.RENDERBUFFER,nt)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function zt(P,E,B){const Z=i.get(P);E!==void 0&&Pt(Z.__webglFramebuffer,P,P.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),B!==void 0&&Gt(P)}function ce(P){const E=P.texture,B=i.get(P),Z=i.get(E);P.addEventListener("dispose",R);const nt=P.textures,K=P.isWebGLCubeRenderTarget===!0,Ct=nt.length>1;if(Ct||(Z.__webglTexture===void 0&&(Z.__webglTexture=n.createTexture()),Z.__version=E.version,r.memory.textures++),K){B.__webglFramebuffer=[];for(let _t=0;_t<6;_t++)if(E.mipmaps&&E.mipmaps.length>0){B.__webglFramebuffer[_t]=[];for(let Et=0;Et<E.mipmaps.length;Et++)B.__webglFramebuffer[_t][Et]=n.createFramebuffer()}else B.__webglFramebuffer[_t]=n.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){B.__webglFramebuffer=[];for(let _t=0;_t<E.mipmaps.length;_t++)B.__webglFramebuffer[_t]=n.createFramebuffer()}else B.__webglFramebuffer=n.createFramebuffer();if(Ct)for(let _t=0,Et=nt.length;_t<Et;_t++){const re=i.get(nt[_t]);re.__webglTexture===void 0&&(re.__webglTexture=n.createTexture(),r.memory.textures++)}if(P.samples>0&&wt(P)===!1){B.__webglMultisampledFramebuffer=n.createFramebuffer(),B.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let _t=0;_t<nt.length;_t++){const Et=nt[_t];B.__webglColorRenderbuffer[_t]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,B.__webglColorRenderbuffer[_t]);const re=o.convert(Et.format,Et.colorSpace),ot=o.convert(Et.type),Tt=x(Et.internalFormat,re,ot,Et.colorSpace,P.isXRRenderTarget===!0),kt=it(P);n.renderbufferStorageMultisample(n.RENDERBUFFER,kt,Tt,P.width,P.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+_t,n.RENDERBUFFER,B.__webglColorRenderbuffer[_t])}n.bindRenderbuffer(n.RENDERBUFFER,null),P.depthBuffer&&(B.__webglDepthRenderbuffer=n.createRenderbuffer(),ft(B.__webglDepthRenderbuffer,P,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(K){e.bindTexture(n.TEXTURE_CUBE_MAP,Z.__webglTexture),$t(n.TEXTURE_CUBE_MAP,E);for(let _t=0;_t<6;_t++)if(E.mipmaps&&E.mipmaps.length>0)for(let Et=0;Et<E.mipmaps.length;Et++)Pt(B.__webglFramebuffer[_t][Et],P,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Et);else Pt(B.__webglFramebuffer[_t],P,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0);_(E)&&g(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Ct){for(let _t=0,Et=nt.length;_t<Et;_t++){const re=nt[_t],ot=i.get(re);e.bindTexture(n.TEXTURE_2D,ot.__webglTexture),$t(n.TEXTURE_2D,re),Pt(B.__webglFramebuffer,P,re,n.COLOR_ATTACHMENT0+_t,n.TEXTURE_2D,0),_(re)&&g(n.TEXTURE_2D)}e.unbindTexture()}else{let _t=n.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(_t=P.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(_t,Z.__webglTexture),$t(_t,E),E.mipmaps&&E.mipmaps.length>0)for(let Et=0;Et<E.mipmaps.length;Et++)Pt(B.__webglFramebuffer[Et],P,E,n.COLOR_ATTACHMENT0,_t,Et);else Pt(B.__webglFramebuffer,P,E,n.COLOR_ATTACHMENT0,_t,0);_(E)&&g(_t),e.unbindTexture()}P.depthBuffer&&Gt(P)}function et(P){const E=P.textures;for(let B=0,Z=E.length;B<Z;B++){const nt=E[B];if(_(nt)){const K=S(P),Ct=i.get(nt).__webglTexture;e.bindTexture(K,Ct),g(K),e.unbindTexture()}}}const lt=[],D=[];function Ut(P){if(P.samples>0){if(wt(P)===!1){const E=P.textures,B=P.width,Z=P.height;let nt=n.COLOR_BUFFER_BIT;const K=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ct=i.get(P),_t=E.length>1;if(_t)for(let Et=0;Et<E.length;Et++)e.bindFramebuffer(n.FRAMEBUFFER,Ct.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Et,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,Ct.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Et,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,Ct.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ct.__webglFramebuffer);for(let Et=0;Et<E.length;Et++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(nt|=n.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(nt|=n.STENCIL_BUFFER_BIT)),_t){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Ct.__webglColorRenderbuffer[Et]);const re=i.get(E[Et]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,re,0)}n.blitFramebuffer(0,0,B,Z,0,0,B,Z,nt,n.NEAREST),c===!0&&(lt.length=0,D.length=0,lt.push(n.COLOR_ATTACHMENT0+Et),P.depthBuffer&&P.resolveDepthBuffer===!1&&(lt.push(K),D.push(K),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,D)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,lt))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),_t)for(let Et=0;Et<E.length;Et++){e.bindFramebuffer(n.FRAMEBUFFER,Ct.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Et,n.RENDERBUFFER,Ct.__webglColorRenderbuffer[Et]);const re=i.get(E[Et]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,Ct.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Et,n.TEXTURE_2D,re,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ct.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&c){const E=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[E])}}}function it(P){return Math.min(s.maxSamples,P.samples)}function wt(P){const E=i.get(P);return P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function pt(P){const E=r.render.frame;h.get(P)!==E&&(h.set(P,E),P.update())}function Ft(P,E){const B=P.colorSpace,Z=P.format,nt=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||B!==$o&&B!==hs&&(de.getTransfer(B)===ye?(Z!==Kn||nt!==Ki)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),E}function bt(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(l.width=P.naturalWidth||P.width,l.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(l.width=P.displayWidth,l.height=P.displayHeight):(l.width=P.width,l.height=P.height),l}this.allocateTextureUnit=G,this.resetTextureUnits=H,this.setTexture2D=Q,this.setTexture2DArray=Y,this.setTexture3D=rt,this.setTextureCube=$,this.rebindTextures=zt,this.setupRenderTarget=ce,this.updateRenderTargetMipmap=et,this.updateMultisampleRenderTarget=Ut,this.setupDepthRenderbuffer=Gt,this.setupFrameBufferTexture=Pt,this.useMultisampledRTT=wt}function cv(n,t){function e(i,s=hs){let o;const r=de.getTransfer(s);if(i===Ki)return n.UNSIGNED_BYTE;if(i===Th)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Ah)return n.UNSIGNED_SHORT_5_5_5_1;if(i===xf)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===vf)return n.BYTE;if(i===Mf)return n.SHORT;if(i===Rr)return n.UNSIGNED_SHORT;if(i===wh)return n.INT;if(i===Ws)return n.UNSIGNED_INT;if(i===xi)return n.FLOAT;if(i===Yr)return n.HALF_FLOAT;if(i===yf)return n.ALPHA;if(i===Sf)return n.RGB;if(i===Kn)return n.RGBA;if(i===bf)return n.LUMINANCE;if(i===Ef)return n.LUMINANCE_ALPHA;if(i===Po)return n.DEPTH_COMPONENT;if(i===Wo)return n.DEPTH_STENCIL;if(i===Rh)return n.RED;if(i===Ph)return n.RED_INTEGER;if(i===wf)return n.RG;if(i===Ch)return n.RG_INTEGER;if(i===Ih)return n.RGBA_INTEGER;if(i===Va||i===Wa||i===Xa||i===Ya)if(r===ye)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(i===Va)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Wa)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Xa)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ya)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(i===Va)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Wa)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Xa)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ya)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ul||i===Nl||i===Ol||i===Fl)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(i===Ul)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Nl)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Ol)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Fl)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===kl||i===zl||i===Bl)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(i===kl||i===zl)return r===ye?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(i===Bl)return r===ye?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Hl||i===Gl||i===Vl||i===Wl||i===Xl||i===Yl||i===$l||i===ql||i===Zl||i===Kl||i===jl||i===Jl||i===Ql||i===th)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(i===Hl)return r===ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Gl)return r===ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Vl)return r===ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Wl)return r===ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Xl)return r===ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Yl)return r===ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===$l)return r===ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===ql)return r===ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Zl)return r===ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Kl)return r===ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===jl)return r===ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Jl)return r===ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Ql)return r===ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===th)return r===ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===$a||i===eh||i===nh)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(i===$a)return r===ye?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===eh)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===nh)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Tf||i===ih||i===sh||i===oh)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(i===$a)return o.COMPRESSED_RED_RGTC1_EXT;if(i===ih)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===sh)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===oh)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Vo?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}class lv extends Dn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class ut extends en{constructor(){super(),this.isGroup=!0,this.type="Group"}}const hv={type:"move"};class tl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ut,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ut,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ut,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,o=null,r=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){r=!0;for(const v of t.hand.values()){const _=e.getJointPose(v,i),g=this._getHandJoint(l,v);_!==null&&(g.matrix.fromArray(_.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=_.radius),g.visible=_!==null}const h=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],f=h.position.distanceTo(d.position),p=.02,m=.005;l.inputState.pinching&&f>p+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&f<=p-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(o=e.getPose(t.gripSpace,i),o!==null&&(c.matrix.fromArray(o.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,o.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(o.linearVelocity)):c.hasLinearVelocity=!1,o.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(o.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&o!==null&&(s=o),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(hv)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=o!==null),l!==null&&(l.visible=r!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new ut;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const dv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,uv=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class fv{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){const s=new hn,o=t.properties.get(s);o.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new Ai({vertexShader:dv,fragmentShader:uv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new be(new ni(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class pv extends Zs{constructor(t,e){super();const i=this;let s=null,o=1,r=null,a="local-floor",c=1,l=null,h=null,d=null,f=null,p=null,m=null;const v=new fv,_=e.getContextAttributes();let g=null,S=null;const x=[],M=[],C=new J;let T=null;const R=new Dn;R.viewport=new Ue;const I=new Dn;I.viewport=new Ue;const w=[R,I],b=new lv;let N=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let ht=x[j];return ht===void 0&&(ht=new tl,x[j]=ht),ht.getTargetRaySpace()},this.getControllerGrip=function(j){let ht=x[j];return ht===void 0&&(ht=new tl,x[j]=ht),ht.getGripSpace()},this.getHand=function(j){let ht=x[j];return ht===void 0&&(ht=new tl,x[j]=ht),ht.getHandSpace()};function G(j){const ht=M.indexOf(j.inputSource);if(ht===-1)return;const Pt=x[ht];Pt!==void 0&&(Pt.update(j.inputSource,j.frame,l||r),Pt.dispatchEvent({type:j.type,data:j.inputSource}))}function X(){s.removeEventListener("select",G),s.removeEventListener("selectstart",G),s.removeEventListener("selectend",G),s.removeEventListener("squeeze",G),s.removeEventListener("squeezestart",G),s.removeEventListener("squeezeend",G),s.removeEventListener("end",X),s.removeEventListener("inputsourceschange",Q);for(let j=0;j<x.length;j++){const ht=M[j];ht!==null&&(M[j]=null,x[j].disconnect(ht))}N=null,H=null,v.reset(),t.setRenderTarget(g),p=null,f=null,d=null,s=null,S=null,pe.stop(),i.isPresenting=!1,t.setPixelRatio(T),t.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){o=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){a=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||r},this.setReferenceSpace=function(j){l=j},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return d},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(j){if(s=j,s!==null){if(g=t.getRenderTarget(),s.addEventListener("select",G),s.addEventListener("selectstart",G),s.addEventListener("selectend",G),s.addEventListener("squeeze",G),s.addEventListener("squeezestart",G),s.addEventListener("squeezeend",G),s.addEventListener("end",X),s.addEventListener("inputsourceschange",Q),_.xrCompatible!==!0&&await e.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(C),s.renderState.layers===void 0){const ht={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:o};p=new XRWebGLLayer(s,e,ht),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new Xs(p.framebufferWidth,p.framebufferHeight,{format:Kn,type:Ki,colorSpace:t.outputColorSpace,stencilBuffer:_.stencil})}else{let ht=null,Pt=null,ft=null;_.depth&&(ft=_.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ht=_.stencil?Wo:Po,Pt=_.stencil?Vo:Ws);const Ot={colorFormat:e.RGBA8,depthFormat:ft,scaleFactor:o};d=new XRWebGLBinding(s,e),f=d.createProjectionLayer(Ot),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),S=new Xs(f.textureWidth,f.textureHeight,{format:Kn,type:Ki,depthTexture:new Hf(f.textureWidth,f.textureHeight,Pt,void 0,void 0,void 0,void 0,void 0,void 0,ht),stencilBuffer:_.stencil,colorSpace:t.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(c),l=null,r=await s.requestReferenceSpace(a),pe.setContext(s),pe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function Q(j){for(let ht=0;ht<j.removed.length;ht++){const Pt=j.removed[ht],ft=M.indexOf(Pt);ft>=0&&(M[ft]=null,x[ft].disconnect(Pt))}for(let ht=0;ht<j.added.length;ht++){const Pt=j.added[ht];let ft=M.indexOf(Pt);if(ft===-1){for(let Gt=0;Gt<x.length;Gt++)if(Gt>=M.length){M.push(Pt),ft=Gt;break}else if(M[Gt]===null){M[Gt]=Pt,ft=Gt;break}if(ft===-1)break}const Ot=x[ft];Ot&&Ot.connect(Pt)}}const Y=new L,rt=new L;function $(j,ht,Pt){Y.setFromMatrixPosition(ht.matrixWorld),rt.setFromMatrixPosition(Pt.matrixWorld);const ft=Y.distanceTo(rt),Ot=ht.projectionMatrix.elements,Gt=Pt.projectionMatrix.elements,zt=Ot[14]/(Ot[10]-1),ce=Ot[14]/(Ot[10]+1),et=(Ot[9]+1)/Ot[5],lt=(Ot[9]-1)/Ot[5],D=(Ot[8]-1)/Ot[0],Ut=(Gt[8]+1)/Gt[0],it=zt*D,wt=zt*Ut,pt=ft/(-D+Ut),Ft=pt*-D;if(ht.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(Ft),j.translateZ(pt),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),Ot[10]===-1)j.projectionMatrix.copy(ht.projectionMatrix),j.projectionMatrixInverse.copy(ht.projectionMatrixInverse);else{const bt=zt+pt,P=ce+pt,E=it-Ft,B=wt+(ft-Ft),Z=et*ce/P*bt,nt=lt*ce/P*bt;j.projectionMatrix.makePerspective(E,B,Z,nt,bt,P),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function mt(j,ht){ht===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(ht.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(s===null)return;let ht=j.near,Pt=j.far;v.texture!==null&&(v.depthNear>0&&(ht=v.depthNear),v.depthFar>0&&(Pt=v.depthFar)),b.near=I.near=R.near=ht,b.far=I.far=R.far=Pt,(N!==b.near||H!==b.far)&&(s.updateRenderState({depthNear:b.near,depthFar:b.far}),N=b.near,H=b.far),R.layers.mask=j.layers.mask|2,I.layers.mask=j.layers.mask|4,b.layers.mask=R.layers.mask|I.layers.mask;const ft=j.parent,Ot=b.cameras;mt(b,ft);for(let Gt=0;Gt<Ot.length;Gt++)mt(Ot[Gt],ft);Ot.length===2?$(b,R,I):b.projectionMatrix.copy(R.projectionMatrix),St(j,b,ft)};function St(j,ht,Pt){Pt===null?j.matrix.copy(ht.matrixWorld):(j.matrix.copy(Pt.matrixWorld),j.matrix.invert(),j.matrix.multiply(ht.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(ht.projectionMatrix),j.projectionMatrixInverse.copy(ht.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=Pr*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(f===null&&p===null))return c},this.setFoveation=function(j){c=j,f!==null&&(f.fixedFoveation=j),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=j)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(b)};let Rt=null;function $t(j,ht){if(h=ht.getViewerPose(l||r),m=ht,h!==null){const Pt=h.views;p!==null&&(t.setRenderTargetFramebuffer(S,p.framebuffer),t.setRenderTarget(S));let ft=!1;Pt.length!==b.cameras.length&&(b.cameras.length=0,ft=!0);for(let Gt=0;Gt<Pt.length;Gt++){const zt=Pt[Gt];let ce=null;if(p!==null)ce=p.getViewport(zt);else{const lt=d.getViewSubImage(f,zt);ce=lt.viewport,Gt===0&&(t.setRenderTargetTextures(S,lt.colorTexture,f.ignoreDepthValues?void 0:lt.depthStencilTexture),t.setRenderTarget(S))}let et=w[Gt];et===void 0&&(et=new Dn,et.layers.enable(Gt),et.viewport=new Ue,w[Gt]=et),et.matrix.fromArray(zt.transform.matrix),et.matrix.decompose(et.position,et.quaternion,et.scale),et.projectionMatrix.fromArray(zt.projectionMatrix),et.projectionMatrixInverse.copy(et.projectionMatrix).invert(),et.viewport.set(ce.x,ce.y,ce.width,ce.height),Gt===0&&(b.matrix.copy(et.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),ft===!0&&b.cameras.push(et)}const Ot=s.enabledFeatures;if(Ot&&Ot.includes("depth-sensing")){const Gt=d.getDepthInformation(Pt[0]);Gt&&Gt.isValid&&Gt.texture&&v.init(t,Gt,s.renderState)}}for(let Pt=0;Pt<x.length;Pt++){const ft=M[Pt],Ot=x[Pt];ft!==null&&Ot!==void 0&&Ot.update(ft,ht,l||r)}Rt&&Rt(j,ht),ht.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ht}),m=null}const pe=new zf;pe.setAnimationLoop($t),this.setAnimationLoop=function(j){Rt=j},this.dispose=function(){}}}const Ls=new wi,mv=new oe;function gv(n,t){function e(_,g){_.matrixAutoUpdate===!0&&_.updateMatrix(),g.value.copy(_.matrix)}function i(_,g){g.color.getRGB(_.fogColor.value,Nf(n)),g.isFog?(_.fogNear.value=g.near,_.fogFar.value=g.far):g.isFogExp2&&(_.fogDensity.value=g.density)}function s(_,g,S,x,M){g.isMeshBasicMaterial||g.isMeshLambertMaterial?o(_,g):g.isMeshToonMaterial?(o(_,g),d(_,g)):g.isMeshPhongMaterial?(o(_,g),h(_,g)):g.isMeshStandardMaterial?(o(_,g),f(_,g),g.isMeshPhysicalMaterial&&p(_,g,M)):g.isMeshMatcapMaterial?(o(_,g),m(_,g)):g.isMeshDepthMaterial?o(_,g):g.isMeshDistanceMaterial?(o(_,g),v(_,g)):g.isMeshNormalMaterial?o(_,g):g.isLineBasicMaterial?(r(_,g),g.isLineDashedMaterial&&a(_,g)):g.isPointsMaterial?c(_,g,S,x):g.isSpriteMaterial?l(_,g):g.isShadowMaterial?(_.color.value.copy(g.color),_.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function o(_,g){_.opacity.value=g.opacity,g.color&&_.diffuse.value.copy(g.color),g.emissive&&_.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(_.map.value=g.map,e(g.map,_.mapTransform)),g.alphaMap&&(_.alphaMap.value=g.alphaMap,e(g.alphaMap,_.alphaMapTransform)),g.bumpMap&&(_.bumpMap.value=g.bumpMap,e(g.bumpMap,_.bumpMapTransform),_.bumpScale.value=g.bumpScale,g.side===vn&&(_.bumpScale.value*=-1)),g.normalMap&&(_.normalMap.value=g.normalMap,e(g.normalMap,_.normalMapTransform),_.normalScale.value.copy(g.normalScale),g.side===vn&&_.normalScale.value.negate()),g.displacementMap&&(_.displacementMap.value=g.displacementMap,e(g.displacementMap,_.displacementMapTransform),_.displacementScale.value=g.displacementScale,_.displacementBias.value=g.displacementBias),g.emissiveMap&&(_.emissiveMap.value=g.emissiveMap,e(g.emissiveMap,_.emissiveMapTransform)),g.specularMap&&(_.specularMap.value=g.specularMap,e(g.specularMap,_.specularMapTransform)),g.alphaTest>0&&(_.alphaTest.value=g.alphaTest);const S=t.get(g),x=S.envMap,M=S.envMapRotation;x&&(_.envMap.value=x,Ls.copy(M),Ls.x*=-1,Ls.y*=-1,Ls.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Ls.y*=-1,Ls.z*=-1),_.envMapRotation.value.setFromMatrix4(mv.makeRotationFromEuler(Ls)),_.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,_.reflectivity.value=g.reflectivity,_.ior.value=g.ior,_.refractionRatio.value=g.refractionRatio),g.lightMap&&(_.lightMap.value=g.lightMap,_.lightMapIntensity.value=g.lightMapIntensity,e(g.lightMap,_.lightMapTransform)),g.aoMap&&(_.aoMap.value=g.aoMap,_.aoMapIntensity.value=g.aoMapIntensity,e(g.aoMap,_.aoMapTransform))}function r(_,g){_.diffuse.value.copy(g.color),_.opacity.value=g.opacity,g.map&&(_.map.value=g.map,e(g.map,_.mapTransform))}function a(_,g){_.dashSize.value=g.dashSize,_.totalSize.value=g.dashSize+g.gapSize,_.scale.value=g.scale}function c(_,g,S,x){_.diffuse.value.copy(g.color),_.opacity.value=g.opacity,_.size.value=g.size*S,_.scale.value=x*.5,g.map&&(_.map.value=g.map,e(g.map,_.uvTransform)),g.alphaMap&&(_.alphaMap.value=g.alphaMap,e(g.alphaMap,_.alphaMapTransform)),g.alphaTest>0&&(_.alphaTest.value=g.alphaTest)}function l(_,g){_.diffuse.value.copy(g.color),_.opacity.value=g.opacity,_.rotation.value=g.rotation,g.map&&(_.map.value=g.map,e(g.map,_.mapTransform)),g.alphaMap&&(_.alphaMap.value=g.alphaMap,e(g.alphaMap,_.alphaMapTransform)),g.alphaTest>0&&(_.alphaTest.value=g.alphaTest)}function h(_,g){_.specular.value.copy(g.specular),_.shininess.value=Math.max(g.shininess,1e-4)}function d(_,g){g.gradientMap&&(_.gradientMap.value=g.gradientMap)}function f(_,g){_.metalness.value=g.metalness,g.metalnessMap&&(_.metalnessMap.value=g.metalnessMap,e(g.metalnessMap,_.metalnessMapTransform)),_.roughness.value=g.roughness,g.roughnessMap&&(_.roughnessMap.value=g.roughnessMap,e(g.roughnessMap,_.roughnessMapTransform)),g.envMap&&(_.envMapIntensity.value=g.envMapIntensity)}function p(_,g,S){_.ior.value=g.ior,g.sheen>0&&(_.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),_.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(_.sheenColorMap.value=g.sheenColorMap,e(g.sheenColorMap,_.sheenColorMapTransform)),g.sheenRoughnessMap&&(_.sheenRoughnessMap.value=g.sheenRoughnessMap,e(g.sheenRoughnessMap,_.sheenRoughnessMapTransform))),g.clearcoat>0&&(_.clearcoat.value=g.clearcoat,_.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(_.clearcoatMap.value=g.clearcoatMap,e(g.clearcoatMap,_.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,e(g.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(_.clearcoatNormalMap.value=g.clearcoatNormalMap,e(g.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===vn&&_.clearcoatNormalScale.value.negate())),g.dispersion>0&&(_.dispersion.value=g.dispersion),g.iridescence>0&&(_.iridescence.value=g.iridescence,_.iridescenceIOR.value=g.iridescenceIOR,_.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(_.iridescenceMap.value=g.iridescenceMap,e(g.iridescenceMap,_.iridescenceMapTransform)),g.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=g.iridescenceThicknessMap,e(g.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),g.transmission>0&&(_.transmission.value=g.transmission,_.transmissionSamplerMap.value=S.texture,_.transmissionSamplerSize.value.set(S.width,S.height),g.transmissionMap&&(_.transmissionMap.value=g.transmissionMap,e(g.transmissionMap,_.transmissionMapTransform)),_.thickness.value=g.thickness,g.thicknessMap&&(_.thicknessMap.value=g.thicknessMap,e(g.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=g.attenuationDistance,_.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(_.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(_.anisotropyMap.value=g.anisotropyMap,e(g.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=g.specularIntensity,_.specularColor.value.copy(g.specularColor),g.specularColorMap&&(_.specularColorMap.value=g.specularColorMap,e(g.specularColorMap,_.specularColorMapTransform)),g.specularIntensityMap&&(_.specularIntensityMap.value=g.specularIntensityMap,e(g.specularIntensityMap,_.specularIntensityMapTransform))}function m(_,g){g.matcap&&(_.matcap.value=g.matcap)}function v(_,g){const S=t.get(g).light;_.referencePosition.value.setFromMatrixPosition(S.matrixWorld),_.nearDistance.value=S.shadow.camera.near,_.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function _v(n,t,e,i){let s={},o={},r=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(S,x){const M=x.program;i.uniformBlockBinding(S,M)}function l(S,x){let M=s[S.id];M===void 0&&(m(S),M=h(S),s[S.id]=M,S.addEventListener("dispose",_));const C=x.program;i.updateUBOMapping(S,C);const T=t.render.frame;o[S.id]!==T&&(f(S),o[S.id]=T)}function h(S){const x=d();S.__bindingPointIndex=x;const M=n.createBuffer(),C=S.__size,T=S.usage;return n.bindBuffer(n.UNIFORM_BUFFER,M),n.bufferData(n.UNIFORM_BUFFER,C,T),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,x,M),M}function d(){for(let S=0;S<a;S++)if(r.indexOf(S)===-1)return r.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(S){const x=s[S.id],M=S.uniforms,C=S.__cache;n.bindBuffer(n.UNIFORM_BUFFER,x);for(let T=0,R=M.length;T<R;T++){const I=Array.isArray(M[T])?M[T]:[M[T]];for(let w=0,b=I.length;w<b;w++){const N=I[w];if(p(N,T,w,C)===!0){const H=N.__offset,G=Array.isArray(N.value)?N.value:[N.value];let X=0;for(let Q=0;Q<G.length;Q++){const Y=G[Q],rt=v(Y);typeof Y=="number"||typeof Y=="boolean"?(N.__data[0]=Y,n.bufferSubData(n.UNIFORM_BUFFER,H+X,N.__data)):Y.isMatrix3?(N.__data[0]=Y.elements[0],N.__data[1]=Y.elements[1],N.__data[2]=Y.elements[2],N.__data[3]=0,N.__data[4]=Y.elements[3],N.__data[5]=Y.elements[4],N.__data[6]=Y.elements[5],N.__data[7]=0,N.__data[8]=Y.elements[6],N.__data[9]=Y.elements[7],N.__data[10]=Y.elements[8],N.__data[11]=0):(Y.toArray(N.__data,X),X+=rt.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,H,N.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(S,x,M,C){const T=S.value,R=x+"_"+M;if(C[R]===void 0)return typeof T=="number"||typeof T=="boolean"?C[R]=T:C[R]=T.clone(),!0;{const I=C[R];if(typeof T=="number"||typeof T=="boolean"){if(I!==T)return C[R]=T,!0}else if(I.equals(T)===!1)return I.copy(T),!0}return!1}function m(S){const x=S.uniforms;let M=0;const C=16;for(let R=0,I=x.length;R<I;R++){const w=Array.isArray(x[R])?x[R]:[x[R]];for(let b=0,N=w.length;b<N;b++){const H=w[b],G=Array.isArray(H.value)?H.value:[H.value];for(let X=0,Q=G.length;X<Q;X++){const Y=G[X],rt=v(Y),$=M%C,mt=$%rt.boundary,St=$+mt;M+=mt,St!==0&&C-St<rt.storage&&(M+=C-St),H.__data=new Float32Array(rt.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=M,M+=rt.storage}}}const T=M%C;return T>0&&(M+=C-T),S.__size=M,S.__cache={},this}function v(S){const x={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(x.boundary=4,x.storage=4):S.isVector2?(x.boundary=8,x.storage=8):S.isVector3||S.isColor?(x.boundary=16,x.storage=12):S.isVector4?(x.boundary=16,x.storage=16):S.isMatrix3?(x.boundary=48,x.storage=48):S.isMatrix4?(x.boundary=64,x.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),x}function _(S){const x=S.target;x.removeEventListener("dispose",_);const M=r.indexOf(x.__bindingPointIndex);r.splice(M,1),n.deleteBuffer(s[x.id]),delete s[x.id],delete o[x.id]}function g(){for(const S in s)n.deleteBuffer(s[S]);r=[],s={},o={}}return{bind:c,update:l,dispose:g}}class vv{constructor(t={}){const{canvas:e=am(),context:i=null,depth:s=!0,stencil:o=!1,alpha:r=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=r;const m=new Uint32Array(4),v=new Int32Array(4);let _=null,g=null;const S=[],x=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=sn,this.toneMapping=gs,this.toneMappingExposure=1;const M=this;let C=!1,T=0,R=0,I=null,w=-1,b=null;const N=new Ue,H=new Ue;let G=null;const X=new Wt(0);let Q=0,Y=e.width,rt=e.height,$=1,mt=null,St=null;const Rt=new Ue(0,0,Y,rt),$t=new Ue(0,0,Y,rt);let pe=!1;const j=new Oh;let ht=!1,Pt=!1;const ft=new oe,Ot=new oe,Gt=new L,zt=new Ue,ce={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let et=!1;function lt(){return I===null?$:1}let D=i;function Ut(A,F){return e.getContext(A,F)}try{const A={alpha:!0,depth:s,stencil:o,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${bh}`),e.addEventListener("webglcontextlost",tt,!1),e.addEventListener("webglcontextrestored",yt,!1),e.addEventListener("webglcontextcreationerror",Mt,!1),D===null){const F="webgl2";if(D=Ut(F,A),D===null)throw Ut(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let it,wt,pt,Ft,bt,P,E,B,Z,nt,K,Ct,_t,Et,re,ot,Tt,kt,Ht,At,ae,Qt,we,O;function vt(){it=new b_(D),it.init(),Qt=new cv(D,it),wt=new __(D,it,t,Qt),pt=new ov(D,it),wt.reverseDepthBuffer&&f&&pt.buffers.depth.setReversed(!0),Ft=new T_(D),bt=new W2,P=new av(D,it,pt,bt,wt,Qt,Ft),E=new M_(M),B=new S_(M),Z=new Dm(D),we=new m_(D,Z),nt=new E_(D,Z,Ft,we),K=new R_(D,nt,Z,Ft),Ht=new A_(D,wt,P),ot=new v_(bt),Ct=new V2(M,E,B,it,wt,we,ot),_t=new gv(M,bt),Et=new Y2,re=new J2(it),kt=new p_(M,E,B,pt,K,p,c),Tt=new iv(M,K,wt),O=new _v(D,Ft,wt,pt),At=new g_(D,it,Ft),ae=new w_(D,it,Ft),Ft.programs=Ct.programs,M.capabilities=wt,M.extensions=it,M.properties=bt,M.renderLists=Et,M.shadowMap=Tt,M.state=pt,M.info=Ft}vt();const q=new pv(M,D);this.xr=q,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const A=it.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=it.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(A){A!==void 0&&($=A,this.setSize(Y,rt,!1))},this.getSize=function(A){return A.set(Y,rt)},this.setSize=function(A,F,V=!0){if(q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Y=A,rt=F,e.width=Math.floor(A*$),e.height=Math.floor(F*$),V===!0&&(e.style.width=A+"px",e.style.height=F+"px"),this.setViewport(0,0,A,F)},this.getDrawingBufferSize=function(A){return A.set(Y*$,rt*$).floor()},this.setDrawingBufferSize=function(A,F,V){Y=A,rt=F,$=V,e.width=Math.floor(A*V),e.height=Math.floor(F*V),this.setViewport(0,0,A,F)},this.getCurrentViewport=function(A){return A.copy(N)},this.getViewport=function(A){return A.copy(Rt)},this.setViewport=function(A,F,V,W){A.isVector4?Rt.set(A.x,A.y,A.z,A.w):Rt.set(A,F,V,W),pt.viewport(N.copy(Rt).multiplyScalar($).round())},this.getScissor=function(A){return A.copy($t)},this.setScissor=function(A,F,V,W){A.isVector4?$t.set(A.x,A.y,A.z,A.w):$t.set(A,F,V,W),pt.scissor(H.copy($t).multiplyScalar($).round())},this.getScissorTest=function(){return pe},this.setScissorTest=function(A){pt.setScissorTest(pe=A)},this.setOpaqueSort=function(A){mt=A},this.setTransparentSort=function(A){St=A},this.getClearColor=function(A){return A.copy(kt.getClearColor())},this.setClearColor=function(){kt.setClearColor.apply(kt,arguments)},this.getClearAlpha=function(){return kt.getClearAlpha()},this.setClearAlpha=function(){kt.setClearAlpha.apply(kt,arguments)},this.clear=function(A=!0,F=!0,V=!0){let W=0;if(A){let k=!1;if(I!==null){const dt=I.texture.format;k=dt===Ih||dt===Ch||dt===Ph}if(k){const dt=I.texture.type,xt=dt===Ki||dt===Ws||dt===Rr||dt===Vo||dt===Th||dt===Ah,It=kt.getClearColor(),Lt=kt.getClearAlpha(),Vt=It.r,Kt=It.g,Dt=It.b;xt?(m[0]=Vt,m[1]=Kt,m[2]=Dt,m[3]=Lt,D.clearBufferuiv(D.COLOR,0,m)):(v[0]=Vt,v[1]=Kt,v[2]=Dt,v[3]=Lt,D.clearBufferiv(D.COLOR,0,v))}else W|=D.COLOR_BUFFER_BIT}F&&(W|=D.DEPTH_BUFFER_BIT),V&&(W|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",tt,!1),e.removeEventListener("webglcontextrestored",yt,!1),e.removeEventListener("webglcontextcreationerror",Mt,!1),Et.dispose(),re.dispose(),bt.dispose(),E.dispose(),B.dispose(),K.dispose(),we.dispose(),O.dispose(),Ct.dispose(),q.dispose(),q.removeEventListener("sessionstart",Jh),q.removeEventListener("sessionend",Qh),Ts.stop()};function tt(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function yt(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;const A=Ft.autoReset,F=Tt.enabled,V=Tt.autoUpdate,W=Tt.needsUpdate,k=Tt.type;vt(),Ft.autoReset=A,Tt.enabled=F,Tt.autoUpdate=V,Tt.needsUpdate=W,Tt.type=k}function Mt(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Zt(A){const F=A.target;F.removeEventListener("dispose",Zt),De(F)}function De(A){rn(A),bt.remove(A)}function rn(A){const F=bt.get(A).programs;F!==void 0&&(F.forEach(function(V){Ct.releaseProgram(V)}),A.isShaderMaterial&&Ct.releaseShaderCache(A))}this.renderBufferDirect=function(A,F,V,W,k,dt){F===null&&(F=ce);const xt=k.isMesh&&k.matrixWorld.determinant()<0,It=i0(A,F,V,W,k);pt.setMaterial(W,xt);let Lt=V.index,Vt=1;if(W.wireframe===!0){if(Lt=nt.getWireframeAttribute(V),Lt===void 0)return;Vt=2}const Kt=V.drawRange,Dt=V.attributes.position;let ue=Kt.start*Vt,Te=(Kt.start+Kt.count)*Vt;dt!==null&&(ue=Math.max(ue,dt.start*Vt),Te=Math.min(Te,(dt.start+dt.count)*Vt)),Lt!==null?(ue=Math.max(ue,0),Te=Math.min(Te,Lt.count)):Dt!=null&&(ue=Math.max(ue,0),Te=Math.min(Te,Dt.count));const Ae=Te-ue;if(Ae<0||Ae===1/0)return;we.setup(k,W,It,V,Lt);let Mn,me=At;if(Lt!==null&&(Mn=Z.get(Lt),me=ae,me.setIndex(Mn)),k.isMesh)W.wireframe===!0?(pt.setLineWidth(W.wireframeLinewidth*lt()),me.setMode(D.LINES)):me.setMode(D.TRIANGLES);else if(k.isLine){let Nt=W.linewidth;Nt===void 0&&(Nt=1),pt.setLineWidth(Nt*lt()),k.isLineSegments?me.setMode(D.LINES):k.isLineLoop?me.setMode(D.LINE_LOOP):me.setMode(D.LINE_STRIP)}else k.isPoints?me.setMode(D.POINTS):k.isSprite&&me.setMode(D.TRIANGLES);if(k.isBatchedMesh)if(k._multiDrawInstances!==null)me.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances);else if(it.get("WEBGL_multi_draw"))me.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{const Nt=k._multiDrawStarts,Ii=k._multiDrawCounts,ge=k._multiDrawCount,Wn=Lt?Z.get(Lt).bytesPerElement:1,js=bt.get(W).currentProgram.getUniforms();for(let Pn=0;Pn<ge;Pn++)js.setValue(D,"_gl_DrawID",Pn),me.render(Nt[Pn]/Wn,Ii[Pn])}else if(k.isInstancedMesh)me.renderInstances(ue,Ae,k.count);else if(V.isInstancedBufferGeometry){const Nt=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,Ii=Math.min(V.instanceCount,Nt);me.renderInstances(ue,Ae,Ii)}else me.render(ue,Ae)};function ve(A,F,V){A.transparent===!0&&A.side===En&&A.forceSinglePass===!1?(A.side=vn,A.needsUpdate=!0,na(A,F,V),A.side=ys,A.needsUpdate=!0,na(A,F,V),A.side=En):na(A,F,V)}this.compile=function(A,F,V=null){V===null&&(V=A),g=re.get(V),g.init(F),x.push(g),V.traverseVisible(function(k){k.isLight&&k.layers.test(F.layers)&&(g.pushLight(k),k.castShadow&&g.pushShadow(k))}),A!==V&&A.traverseVisible(function(k){k.isLight&&k.layers.test(F.layers)&&(g.pushLight(k),k.castShadow&&g.pushShadow(k))}),g.setupLights();const W=new Set;return A.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;const dt=k.material;if(dt)if(Array.isArray(dt))for(let xt=0;xt<dt.length;xt++){const It=dt[xt];ve(It,V,k),W.add(It)}else ve(dt,V,k),W.add(dt)}),x.pop(),g=null,W},this.compileAsync=function(A,F,V=null){const W=this.compile(A,F,V);return new Promise(k=>{function dt(){if(W.forEach(function(xt){bt.get(xt).currentProgram.isReady()&&W.delete(xt)}),W.size===0){k(A);return}setTimeout(dt,10)}it.get("KHR_parallel_shader_compile")!==null?dt():setTimeout(dt,10)})};let Vn=null;function Ci(A){Vn&&Vn(A)}function Jh(){Ts.stop()}function Qh(){Ts.start()}const Ts=new zf;Ts.setAnimationLoop(Ci),typeof self<"u"&&Ts.setContext(self),this.setAnimationLoop=function(A){Vn=A,q.setAnimationLoop(A),A===null?Ts.stop():Ts.start()},q.addEventListener("sessionstart",Jh),q.addEventListener("sessionend",Qh),this.render=function(A,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),q.enabled===!0&&q.isPresenting===!0&&(q.cameraAutoUpdate===!0&&q.updateCamera(F),F=q.getCamera()),A.isScene===!0&&A.onBeforeRender(M,A,F,I),g=re.get(A,x.length),g.init(F),x.push(g),Ot.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),j.setFromProjectionMatrix(Ot),Pt=this.localClippingEnabled,ht=ot.init(this.clippingPlanes,Pt),_=Et.get(A,S.length),_.init(),S.push(_),q.enabled===!0&&q.isPresenting===!0){const dt=M.xr.getDepthSensingMesh();dt!==null&&Tc(dt,F,-1/0,M.sortObjects)}Tc(A,F,0,M.sortObjects),_.finish(),M.sortObjects===!0&&_.sort(mt,St),et=q.enabled===!1||q.isPresenting===!1||q.hasDepthSensing()===!1,et&&kt.addToRenderList(_,A),this.info.render.frame++,ht===!0&&ot.beginShadows();const V=g.state.shadowsArray;Tt.render(V,A,F),ht===!0&&ot.endShadows(),this.info.autoReset===!0&&this.info.reset();const W=_.opaque,k=_.transmissive;if(g.setupLights(),F.isArrayCamera){const dt=F.cameras;if(k.length>0)for(let xt=0,It=dt.length;xt<It;xt++){const Lt=dt[xt];ed(W,k,A,Lt)}et&&kt.render(A);for(let xt=0,It=dt.length;xt<It;xt++){const Lt=dt[xt];td(_,A,Lt,Lt.viewport)}}else k.length>0&&ed(W,k,A,F),et&&kt.render(A),td(_,A,F);I!==null&&(P.updateMultisampleRenderTarget(I),P.updateRenderTargetMipmap(I)),A.isScene===!0&&A.onAfterRender(M,A,F),we.resetDefaultState(),w=-1,b=null,x.pop(),x.length>0?(g=x[x.length-1],ht===!0&&ot.setGlobalState(M.clippingPlanes,g.state.camera)):g=null,S.pop(),S.length>0?_=S[S.length-1]:_=null};function Tc(A,F,V,W){if(A.visible===!1)return;if(A.layers.test(F.layers)){if(A.isGroup)V=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(F);else if(A.isLight)g.pushLight(A),A.castShadow&&g.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||j.intersectsSprite(A)){W&&zt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Ot);const xt=K.update(A),It=A.material;It.visible&&_.push(A,xt,It,V,zt.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||j.intersectsObject(A))){const xt=K.update(A),It=A.material;if(W&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),zt.copy(A.boundingSphere.center)):(xt.boundingSphere===null&&xt.computeBoundingSphere(),zt.copy(xt.boundingSphere.center)),zt.applyMatrix4(A.matrixWorld).applyMatrix4(Ot)),Array.isArray(It)){const Lt=xt.groups;for(let Vt=0,Kt=Lt.length;Vt<Kt;Vt++){const Dt=Lt[Vt],ue=It[Dt.materialIndex];ue&&ue.visible&&_.push(A,xt,ue,V,zt.z,Dt)}}else It.visible&&_.push(A,xt,It,V,zt.z,null)}}const dt=A.children;for(let xt=0,It=dt.length;xt<It;xt++)Tc(dt[xt],F,V,W)}function td(A,F,V,W){const k=A.opaque,dt=A.transmissive,xt=A.transparent;g.setupLightsView(V),ht===!0&&ot.setGlobalState(M.clippingPlanes,V),W&&pt.viewport(N.copy(W)),k.length>0&&ea(k,F,V),dt.length>0&&ea(dt,F,V),xt.length>0&&ea(xt,F,V),pt.buffers.depth.setTest(!0),pt.buffers.depth.setMask(!0),pt.buffers.color.setMask(!0),pt.setPolygonOffset(!1)}function ed(A,F,V,W){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[W.id]===void 0&&(g.state.transmissionRenderTarget[W.id]=new Xs(1,1,{generateMipmaps:!0,type:it.has("EXT_color_buffer_half_float")||it.has("EXT_color_buffer_float")?Yr:Ki,minFilter:Hs,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:de.workingColorSpace}));const dt=g.state.transmissionRenderTarget[W.id],xt=W.viewport||N;dt.setSize(xt.z,xt.w);const It=M.getRenderTarget();M.setRenderTarget(dt),M.getClearColor(X),Q=M.getClearAlpha(),Q<1&&M.setClearColor(16777215,.5),M.clear(),et&&kt.render(V);const Lt=M.toneMapping;M.toneMapping=gs;const Vt=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),g.setupLightsView(W),ht===!0&&ot.setGlobalState(M.clippingPlanes,W),ea(A,V,W),P.updateMultisampleRenderTarget(dt),P.updateRenderTargetMipmap(dt),it.has("WEBGL_multisampled_render_to_texture")===!1){let Kt=!1;for(let Dt=0,ue=F.length;Dt<ue;Dt++){const Te=F[Dt],Ae=Te.object,Mn=Te.geometry,me=Te.material,Nt=Te.group;if(me.side===En&&Ae.layers.test(W.layers)){const Ii=me.side;me.side=vn,me.needsUpdate=!0,nd(Ae,V,W,Mn,me,Nt),me.side=Ii,me.needsUpdate=!0,Kt=!0}}Kt===!0&&(P.updateMultisampleRenderTarget(dt),P.updateRenderTargetMipmap(dt))}M.setRenderTarget(It),M.setClearColor(X,Q),Vt!==void 0&&(W.viewport=Vt),M.toneMapping=Lt}function ea(A,F,V){const W=F.isScene===!0?F.overrideMaterial:null;for(let k=0,dt=A.length;k<dt;k++){const xt=A[k],It=xt.object,Lt=xt.geometry,Vt=W===null?xt.material:W,Kt=xt.group;It.layers.test(V.layers)&&nd(It,F,V,Lt,Vt,Kt)}}function nd(A,F,V,W,k,dt){A.onBeforeRender(M,F,V,W,k,dt),A.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),k.onBeforeRender(M,F,V,W,A,dt),k.transparent===!0&&k.side===En&&k.forceSinglePass===!1?(k.side=vn,k.needsUpdate=!0,M.renderBufferDirect(V,F,W,k,A,dt),k.side=ys,k.needsUpdate=!0,M.renderBufferDirect(V,F,W,k,A,dt),k.side=En):M.renderBufferDirect(V,F,W,k,A,dt),A.onAfterRender(M,F,V,W,k,dt)}function na(A,F,V){F.isScene!==!0&&(F=ce);const W=bt.get(A),k=g.state.lights,dt=g.state.shadowsArray,xt=k.state.version,It=Ct.getParameters(A,k.state,dt,F,V),Lt=Ct.getProgramCacheKey(It);let Vt=W.programs;W.environment=A.isMeshStandardMaterial?F.environment:null,W.fog=F.fog,W.envMap=(A.isMeshStandardMaterial?B:E).get(A.envMap||W.environment),W.envMapRotation=W.environment!==null&&A.envMap===null?F.environmentRotation:A.envMapRotation,Vt===void 0&&(A.addEventListener("dispose",Zt),Vt=new Map,W.programs=Vt);let Kt=Vt.get(Lt);if(Kt!==void 0){if(W.currentProgram===Kt&&W.lightsStateVersion===xt)return sd(A,It),Kt}else It.uniforms=Ct.getUniforms(A),A.onBeforeCompile(It,M),Kt=Ct.acquireProgram(It,Lt),Vt.set(Lt,Kt),W.uniforms=It.uniforms;const Dt=W.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Dt.clippingPlanes=ot.uniform),sd(A,It),W.needsLights=o0(A),W.lightsStateVersion=xt,W.needsLights&&(Dt.ambientLightColor.value=k.state.ambient,Dt.lightProbe.value=k.state.probe,Dt.directionalLights.value=k.state.directional,Dt.directionalLightShadows.value=k.state.directionalShadow,Dt.spotLights.value=k.state.spot,Dt.spotLightShadows.value=k.state.spotShadow,Dt.rectAreaLights.value=k.state.rectArea,Dt.ltc_1.value=k.state.rectAreaLTC1,Dt.ltc_2.value=k.state.rectAreaLTC2,Dt.pointLights.value=k.state.point,Dt.pointLightShadows.value=k.state.pointShadow,Dt.hemisphereLights.value=k.state.hemi,Dt.directionalShadowMap.value=k.state.directionalShadowMap,Dt.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Dt.spotShadowMap.value=k.state.spotShadowMap,Dt.spotLightMatrix.value=k.state.spotLightMatrix,Dt.spotLightMap.value=k.state.spotLightMap,Dt.pointShadowMap.value=k.state.pointShadowMap,Dt.pointShadowMatrix.value=k.state.pointShadowMatrix),W.currentProgram=Kt,W.uniformsList=null,Kt}function id(A){if(A.uniformsList===null){const F=A.currentProgram.getUniforms();A.uniformsList=qa.seqWithValue(F.seq,A.uniforms)}return A.uniformsList}function sd(A,F){const V=bt.get(A);V.outputColorSpace=F.outputColorSpace,V.batching=F.batching,V.batchingColor=F.batchingColor,V.instancing=F.instancing,V.instancingColor=F.instancingColor,V.instancingMorph=F.instancingMorph,V.skinning=F.skinning,V.morphTargets=F.morphTargets,V.morphNormals=F.morphNormals,V.morphColors=F.morphColors,V.morphTargetsCount=F.morphTargetsCount,V.numClippingPlanes=F.numClippingPlanes,V.numIntersection=F.numClipIntersection,V.vertexAlphas=F.vertexAlphas,V.vertexTangents=F.vertexTangents,V.toneMapping=F.toneMapping}function i0(A,F,V,W,k){F.isScene!==!0&&(F=ce),P.resetTextureUnits();const dt=F.fog,xt=W.isMeshStandardMaterial?F.environment:null,It=I===null?M.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:$o,Lt=(W.isMeshStandardMaterial?B:E).get(W.envMap||xt),Vt=W.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Kt=!!V.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Dt=!!V.morphAttributes.position,ue=!!V.morphAttributes.normal,Te=!!V.morphAttributes.color;let Ae=gs;W.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(Ae=M.toneMapping);const Mn=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,me=Mn!==void 0?Mn.length:0,Nt=bt.get(W),Ii=g.state.lights;if(ht===!0&&(Pt===!0||A!==b)){const kn=A===b&&W.id===w;ot.setState(W,A,kn)}let ge=!1;W.version===Nt.__version?(Nt.needsLights&&Nt.lightsStateVersion!==Ii.state.version||Nt.outputColorSpace!==It||k.isBatchedMesh&&Nt.batching===!1||!k.isBatchedMesh&&Nt.batching===!0||k.isBatchedMesh&&Nt.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&Nt.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&Nt.instancing===!1||!k.isInstancedMesh&&Nt.instancing===!0||k.isSkinnedMesh&&Nt.skinning===!1||!k.isSkinnedMesh&&Nt.skinning===!0||k.isInstancedMesh&&Nt.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&Nt.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&Nt.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&Nt.instancingMorph===!1&&k.morphTexture!==null||Nt.envMap!==Lt||W.fog===!0&&Nt.fog!==dt||Nt.numClippingPlanes!==void 0&&(Nt.numClippingPlanes!==ot.numPlanes||Nt.numIntersection!==ot.numIntersection)||Nt.vertexAlphas!==Vt||Nt.vertexTangents!==Kt||Nt.morphTargets!==Dt||Nt.morphNormals!==ue||Nt.morphColors!==Te||Nt.toneMapping!==Ae||Nt.morphTargetsCount!==me)&&(ge=!0):(ge=!0,Nt.__version=W.version);let Wn=Nt.currentProgram;ge===!0&&(Wn=na(W,F,k));let js=!1,Pn=!1,er=!1;const Re=Wn.getUniforms(),oi=Nt.uniforms;if(pt.useProgram(Wn.program)&&(js=!0,Pn=!0,er=!0),W.id!==w&&(w=W.id,Pn=!0),js||b!==A){pt.buffers.depth.getReversed()?(ft.copy(A.projectionMatrix),lm(ft),hm(ft),Re.setValue(D,"projectionMatrix",ft)):Re.setValue(D,"projectionMatrix",A.projectionMatrix),Re.setValue(D,"viewMatrix",A.matrixWorldInverse);const ts=Re.map.cameraPosition;ts!==void 0&&ts.setValue(D,Gt.setFromMatrixPosition(A.matrixWorld)),wt.logarithmicDepthBuffer&&Re.setValue(D,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&Re.setValue(D,"isOrthographic",A.isOrthographicCamera===!0),b!==A&&(b=A,Pn=!0,er=!0)}if(k.isSkinnedMesh){Re.setOptional(D,k,"bindMatrix"),Re.setOptional(D,k,"bindMatrixInverse");const kn=k.skeleton;kn&&(kn.boneTexture===null&&kn.computeBoneTexture(),Re.setValue(D,"boneTexture",kn.boneTexture,P))}k.isBatchedMesh&&(Re.setOptional(D,k,"batchingTexture"),Re.setValue(D,"batchingTexture",k._matricesTexture,P),Re.setOptional(D,k,"batchingIdTexture"),Re.setValue(D,"batchingIdTexture",k._indirectTexture,P),Re.setOptional(D,k,"batchingColorTexture"),k._colorsTexture!==null&&Re.setValue(D,"batchingColorTexture",k._colorsTexture,P));const nr=V.morphAttributes;if((nr.position!==void 0||nr.normal!==void 0||nr.color!==void 0)&&Ht.update(k,V,Wn),(Pn||Nt.receiveShadow!==k.receiveShadow)&&(Nt.receiveShadow=k.receiveShadow,Re.setValue(D,"receiveShadow",k.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(oi.envMap.value=Lt,oi.flipEnvMap.value=Lt.isCubeTexture&&Lt.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&F.environment!==null&&(oi.envMapIntensity.value=F.environmentIntensity),Pn&&(Re.setValue(D,"toneMappingExposure",M.toneMappingExposure),Nt.needsLights&&s0(oi,er),dt&&W.fog===!0&&_t.refreshFogUniforms(oi,dt),_t.refreshMaterialUniforms(oi,W,$,rt,g.state.transmissionRenderTarget[A.id]),qa.upload(D,id(Nt),oi,P)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(qa.upload(D,id(Nt),oi,P),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&Re.setValue(D,"center",k.center),Re.setValue(D,"modelViewMatrix",k.modelViewMatrix),Re.setValue(D,"normalMatrix",k.normalMatrix),Re.setValue(D,"modelMatrix",k.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const kn=W.uniformsGroups;for(let ts=0,es=kn.length;ts<es;ts++){const od=kn[ts];O.update(od,Wn),O.bind(od,Wn)}}return Wn}function s0(A,F){A.ambientLightColor.needsUpdate=F,A.lightProbe.needsUpdate=F,A.directionalLights.needsUpdate=F,A.directionalLightShadows.needsUpdate=F,A.pointLights.needsUpdate=F,A.pointLightShadows.needsUpdate=F,A.spotLights.needsUpdate=F,A.spotLightShadows.needsUpdate=F,A.rectAreaLights.needsUpdate=F,A.hemisphereLights.needsUpdate=F}function o0(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(A,F,V){bt.get(A.texture).__webglTexture=F,bt.get(A.depthTexture).__webglTexture=V;const W=bt.get(A);W.__hasExternalTextures=!0,W.__autoAllocateDepthBuffer=V===void 0,W.__autoAllocateDepthBuffer||it.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,F){const V=bt.get(A);V.__webglFramebuffer=F,V.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(A,F=0,V=0){I=A,T=F,R=V;let W=!0,k=null,dt=!1,xt=!1;if(A){const Lt=bt.get(A);if(Lt.__useDefaultFramebuffer!==void 0)pt.bindFramebuffer(D.FRAMEBUFFER,null),W=!1;else if(Lt.__webglFramebuffer===void 0)P.setupRenderTarget(A);else if(Lt.__hasExternalTextures)P.rebindTextures(A,bt.get(A.texture).__webglTexture,bt.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Dt=A.depthTexture;if(Lt.__boundDepthTexture!==Dt){if(Dt!==null&&bt.has(Dt)&&(A.width!==Dt.image.width||A.height!==Dt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");P.setupDepthRenderbuffer(A)}}const Vt=A.texture;(Vt.isData3DTexture||Vt.isDataArrayTexture||Vt.isCompressedArrayTexture)&&(xt=!0);const Kt=bt.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Kt[F])?k=Kt[F][V]:k=Kt[F],dt=!0):A.samples>0&&P.useMultisampledRTT(A)===!1?k=bt.get(A).__webglMultisampledFramebuffer:Array.isArray(Kt)?k=Kt[V]:k=Kt,N.copy(A.viewport),H.copy(A.scissor),G=A.scissorTest}else N.copy(Rt).multiplyScalar($).floor(),H.copy($t).multiplyScalar($).floor(),G=pe;if(pt.bindFramebuffer(D.FRAMEBUFFER,k)&&W&&pt.drawBuffers(A,k),pt.viewport(N),pt.scissor(H),pt.setScissorTest(G),dt){const Lt=bt.get(A.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+F,Lt.__webglTexture,V)}else if(xt){const Lt=bt.get(A.texture),Vt=F||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,Lt.__webglTexture,V||0,Vt)}w=-1},this.readRenderTargetPixels=function(A,F,V,W,k,dt,xt){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let It=bt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&xt!==void 0&&(It=It[xt]),It){pt.bindFramebuffer(D.FRAMEBUFFER,It);try{const Lt=A.texture,Vt=Lt.format,Kt=Lt.type;if(!wt.textureFormatReadable(Vt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!wt.textureTypeReadable(Kt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=A.width-W&&V>=0&&V<=A.height-k&&D.readPixels(F,V,W,k,Qt.convert(Vt),Qt.convert(Kt),dt)}finally{const Lt=I!==null?bt.get(I).__webglFramebuffer:null;pt.bindFramebuffer(D.FRAMEBUFFER,Lt)}}},this.readRenderTargetPixelsAsync=async function(A,F,V,W,k,dt,xt){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let It=bt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&xt!==void 0&&(It=It[xt]),It){const Lt=A.texture,Vt=Lt.format,Kt=Lt.type;if(!wt.textureFormatReadable(Vt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!wt.textureTypeReadable(Kt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(F>=0&&F<=A.width-W&&V>=0&&V<=A.height-k){pt.bindFramebuffer(D.FRAMEBUFFER,It);const Dt=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Dt),D.bufferData(D.PIXEL_PACK_BUFFER,dt.byteLength,D.STREAM_READ),D.readPixels(F,V,W,k,Qt.convert(Vt),Qt.convert(Kt),0);const ue=I!==null?bt.get(I).__webglFramebuffer:null;pt.bindFramebuffer(D.FRAMEBUFFER,ue);const Te=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await cm(D,Te,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Dt),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,dt),D.deleteBuffer(Dt),D.deleteSync(Te),dt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,F=null,V=0){A.isTexture!==!0&&(mr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),F=arguments[0]||null,A=arguments[1]);const W=Math.pow(2,-V),k=Math.floor(A.image.width*W),dt=Math.floor(A.image.height*W),xt=F!==null?F.x:0,It=F!==null?F.y:0;P.setTexture2D(A,0),D.copyTexSubImage2D(D.TEXTURE_2D,V,0,0,xt,It,k,dt),pt.unbindTexture()},this.copyTextureToTexture=function(A,F,V=null,W=null,k=0){A.isTexture!==!0&&(mr("WebGLRenderer: copyTextureToTexture function signature has changed."),W=arguments[0]||null,A=arguments[1],F=arguments[2],k=arguments[3]||0,V=null);let dt,xt,It,Lt,Vt,Kt,Dt,ue,Te;const Ae=A.isCompressedTexture?A.mipmaps[k]:A.image;V!==null?(dt=V.max.x-V.min.x,xt=V.max.y-V.min.y,It=V.isBox3?V.max.z-V.min.z:1,Lt=V.min.x,Vt=V.min.y,Kt=V.isBox3?V.min.z:0):(dt=Ae.width,xt=Ae.height,It=Ae.depth||1,Lt=0,Vt=0,Kt=0),W!==null?(Dt=W.x,ue=W.y,Te=W.z):(Dt=0,ue=0,Te=0);const Mn=Qt.convert(F.format),me=Qt.convert(F.type);let Nt;F.isData3DTexture?(P.setTexture3D(F,0),Nt=D.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(P.setTexture2DArray(F,0),Nt=D.TEXTURE_2D_ARRAY):(P.setTexture2D(F,0),Nt=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,F.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,F.unpackAlignment);const Ii=D.getParameter(D.UNPACK_ROW_LENGTH),ge=D.getParameter(D.UNPACK_IMAGE_HEIGHT),Wn=D.getParameter(D.UNPACK_SKIP_PIXELS),js=D.getParameter(D.UNPACK_SKIP_ROWS),Pn=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,Ae.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Ae.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Lt),D.pixelStorei(D.UNPACK_SKIP_ROWS,Vt),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Kt);const er=A.isDataArrayTexture||A.isData3DTexture,Re=F.isDataArrayTexture||F.isData3DTexture;if(A.isRenderTargetTexture||A.isDepthTexture){const oi=bt.get(A),nr=bt.get(F),kn=bt.get(oi.__renderTarget),ts=bt.get(nr.__renderTarget);pt.bindFramebuffer(D.READ_FRAMEBUFFER,kn.__webglFramebuffer),pt.bindFramebuffer(D.DRAW_FRAMEBUFFER,ts.__webglFramebuffer);for(let es=0;es<It;es++)er&&D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,bt.get(A).__webglTexture,k,Kt+es),A.isDepthTexture?(Re&&D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,bt.get(F).__webglTexture,k,Te+es),D.blitFramebuffer(Lt,Vt,dt,xt,Dt,ue,dt,xt,D.DEPTH_BUFFER_BIT,D.NEAREST)):Re?D.copyTexSubImage3D(Nt,k,Dt,ue,Te+es,Lt,Vt,dt,xt):D.copyTexSubImage2D(Nt,k,Dt,ue,Te+es,Lt,Vt,dt,xt);pt.bindFramebuffer(D.READ_FRAMEBUFFER,null),pt.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else Re?A.isDataTexture||A.isData3DTexture?D.texSubImage3D(Nt,k,Dt,ue,Te,dt,xt,It,Mn,me,Ae.data):F.isCompressedArrayTexture?D.compressedTexSubImage3D(Nt,k,Dt,ue,Te,dt,xt,It,Mn,Ae.data):D.texSubImage3D(Nt,k,Dt,ue,Te,dt,xt,It,Mn,me,Ae):A.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,k,Dt,ue,dt,xt,Mn,me,Ae.data):A.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,k,Dt,ue,Ae.width,Ae.height,Mn,Ae.data):D.texSubImage2D(D.TEXTURE_2D,k,Dt,ue,dt,xt,Mn,me,Ae);D.pixelStorei(D.UNPACK_ROW_LENGTH,Ii),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,ge),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Wn),D.pixelStorei(D.UNPACK_SKIP_ROWS,js),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Pn),k===0&&F.generateMipmaps&&D.generateMipmap(Nt),pt.unbindTexture()},this.copyTextureToTexture3D=function(A,F,V=null,W=null,k=0){return A.isTexture!==!0&&(mr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),V=arguments[0]||null,W=arguments[1]||null,A=arguments[2],F=arguments[3],k=arguments[4]||0),mr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,F,V,W,k)},this.initRenderTarget=function(A){bt.get(A).__webglFramebuffer===void 0&&P.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?P.setTextureCube(A,0):A.isData3DTexture?P.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?P.setTexture2DArray(A,0):P.setTexture2D(A,0),pt.unbindTexture()},this.resetState=function(){T=0,R=0,I=null,pt.reset(),we.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Vi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=de._getDrawingBufferColorSpace(t),e.unpackColorSpace=de._getUnpackColorSpace()}}class gc{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new Wt(t),this.near=e,this.far=i}clone(){return new gc(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Yf extends en{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new wi,this.environmentIntensity=1,this.environmentRotation=new wi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Mv extends hn{constructor(t=null,e=1,i=1,s,o,r,a,c,l=Nn,h=Nn,d,f){super(null,r,a,c,l,h,s,o,d,f),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ou extends Bn{constructor(t,e,i,s=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const fo=new oe,ru=new oe,Ea=[],au=new Jn,xv=new oe,ar=new be,cr=new $r;class kh extends be{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new ou(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,xv)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Jn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,fo),au.copy(t.boundingBox).applyMatrix4(fo),this.boundingBox.union(au)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new $r),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,fo),cr.copy(t.boundingSphere).applyMatrix4(fo),this.boundingSphere.union(cr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const i=e.morphTargetInfluences,s=this.morphTexture.source.data.data,o=i.length+1,r=t*o+1;for(let a=0;a<i.length;a++)i[a]=s[r+a]}raycast(t,e){const i=this.matrixWorld,s=this.count;if(ar.geometry=this.geometry,ar.material=this.material,ar.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),cr.copy(this.boundingSphere),cr.applyMatrix4(i),t.ray.intersectsSphere(cr)!==!1))for(let o=0;o<s;o++){this.getMatrixAt(o,fo),ru.multiplyMatrices(i,fo),ar.matrixWorld=ru,ar.raycast(t,Ea);for(let r=0,a=Ea.length;r<a;r++){const c=Ea[r];c.instanceId=o,c.object=this,e.push(c)}Ea.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new ou(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const i=e.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new Mv(new Float32Array(s*this.count),s,this.count,Rh,xi));const o=this.morphTexture.source.data.data;let r=0;for(let l=0;l<i.length;l++)r+=i[l];const a=this.geometry.morphTargetsRelative?1:1-r,c=s*t;o[c]=a,o.set(i,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Zr extends hn{constructor(t,e,i,s,o,r,a,c,l){super(t,e,i,s,o,r,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ri{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let i,s=this.getPoint(0),o=0;e.push(0);for(let r=1;r<=t;r++)i=this.getPoint(r/t),o+=i.distanceTo(s),e.push(o),s=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const i=this.getLengths();let s=0;const o=i.length;let r;e?r=e:r=t*i[o-1];let a=0,c=o-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=i[s]-r,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,i[s]===r)return s/(o-1);const h=i[s],f=i[s+1]-h,p=(r-h)/f;return(s+p)/(o-1)}getTangent(t,e){let s=t-1e-4,o=t+1e-4;s<0&&(s=0),o>1&&(o=1);const r=this.getPoint(s),a=this.getPoint(o),c=e||(r.isVector2?new J:new L);return c.copy(a).sub(r).normalize(),c}getTangentAt(t,e){const i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e){const i=new L,s=[],o=[],r=[],a=new L,c=new oe;for(let p=0;p<=t;p++){const m=p/t;s[p]=this.getTangentAt(m,new L)}o[0]=new L,r[0]=new L;let l=Number.MAX_VALUE;const h=Math.abs(s[0].x),d=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=l&&(l=h,i.set(1,0,0)),d<=l&&(l=d,i.set(0,1,0)),f<=l&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),o[0].crossVectors(s[0],a),r[0].crossVectors(s[0],o[0]);for(let p=1;p<=t;p++){if(o[p]=o[p-1].clone(),r[p]=r[p-1].clone(),a.crossVectors(s[p-1],s[p]),a.length()>Number.EPSILON){a.normalize();const m=Math.acos(tn(s[p-1].dot(s[p]),-1,1));o[p].applyMatrix4(c.makeRotationAxis(a,m))}r[p].crossVectors(s[p],o[p])}if(e===!0){let p=Math.acos(tn(o[0].dot(o[t]),-1,1));p/=t,s[0].dot(a.crossVectors(o[0],o[t]))>0&&(p=-p);for(let m=1;m<=t;m++)o[m].applyMatrix4(c.makeRotationAxis(s[m],p*m)),r[m].crossVectors(s[m],o[m])}return{tangents:s,normals:o,binormals:r}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class zh extends Ri{constructor(t=0,e=0,i=1,s=1,o=0,r=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=s,this.aStartAngle=o,this.aEndAngle=r,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new J){const i=e,s=Math.PI*2;let o=this.aEndAngle-this.aStartAngle;const r=Math.abs(o)<Number.EPSILON;for(;o<0;)o+=s;for(;o>s;)o-=s;o<Number.EPSILON&&(r?o=0:o=s),this.aClockwise===!0&&!r&&(o===s?o=-s:o=o-s);const a=this.aStartAngle+t*o;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),f=c-this.aX,p=l-this.aY;c=f*h-p*d+this.aX,l=f*d+p*h+this.aY}return i.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class yv extends zh{constructor(t,e,i,s,o,r){super(t,e,i,i,s,o,r),this.isArcCurve=!0,this.type="ArcCurve"}}function Bh(){let n=0,t=0,e=0,i=0;function s(o,r,a,c){n=o,t=a,e=-3*o+3*r-2*a-c,i=2*o-2*r+a+c}return{initCatmullRom:function(o,r,a,c,l){s(r,a,l*(a-o),l*(c-r))},initNonuniformCatmullRom:function(o,r,a,c,l,h,d){let f=(r-o)/l-(a-o)/(l+h)+(a-r)/h,p=(a-r)/h-(c-r)/(h+d)+(c-a)/d;f*=h,p*=h,s(r,a,f,p)},calc:function(o){const r=o*o,a=r*o;return n+t*o+e*r+i*a}}}const wa=new L,el=new Bh,nl=new Bh,il=new Bh;class _c extends Ri{constructor(t=[],e=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=s}getPoint(t,e=new L){const i=e,s=this.points,o=s.length,r=(o-(this.closed?0:1))*t;let a=Math.floor(r),c=r-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/o)+1)*o:c===0&&a===o-1&&(a=o-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%o]:(wa.subVectors(s[0],s[1]).add(s[0]),l=wa);const d=s[a%o],f=s[(a+1)%o];if(this.closed||a+2<o?h=s[(a+2)%o]:(wa.subVectors(s[o-1],s[o-2]).add(s[o-1]),h=wa),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let m=Math.pow(l.distanceToSquared(d),p),v=Math.pow(d.distanceToSquared(f),p),_=Math.pow(f.distanceToSquared(h),p);v<1e-4&&(v=1),m<1e-4&&(m=v),_<1e-4&&(_=v),el.initNonuniformCatmullRom(l.x,d.x,f.x,h.x,m,v,_),nl.initNonuniformCatmullRom(l.y,d.y,f.y,h.y,m,v,_),il.initNonuniformCatmullRom(l.z,d.z,f.z,h.z,m,v,_)}else this.curveType==="catmullrom"&&(el.initCatmullRom(l.x,d.x,f.x,h.x,this.tension),nl.initCatmullRom(l.y,d.y,f.y,h.y,this.tension),il.initCatmullRom(l.z,d.z,f.z,h.z,this.tension));return i.set(el.calc(c),nl.calc(c),il.calc(c)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(new L().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function cu(n,t,e,i,s){const o=(i-t)*.5,r=(s-e)*.5,a=n*n,c=n*a;return(2*e-2*i+o+r)*c+(-3*e+3*i-2*o-r)*a+o*n+e}function Sv(n,t){const e=1-n;return e*e*t}function bv(n,t){return 2*(1-n)*n*t}function Ev(n,t){return n*n*t}function yr(n,t,e,i){return Sv(n,t)+bv(n,e)+Ev(n,i)}function wv(n,t){const e=1-n;return e*e*e*t}function Tv(n,t){const e=1-n;return 3*e*e*n*t}function Av(n,t){return 3*(1-n)*n*n*t}function Rv(n,t){return n*n*n*t}function Sr(n,t,e,i,s){return wv(n,t)+Tv(n,e)+Av(n,i)+Rv(n,s)}class $f extends Ri{constructor(t=new J,e=new J,i=new J,s=new J){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new J){const i=e,s=this.v0,o=this.v1,r=this.v2,a=this.v3;return i.set(Sr(t,s.x,o.x,r.x,a.x),Sr(t,s.y,o.y,r.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Pv extends Ri{constructor(t=new L,e=new L,i=new L,s=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new L){const i=e,s=this.v0,o=this.v1,r=this.v2,a=this.v3;return i.set(Sr(t,s.x,o.x,r.x,a.x),Sr(t,s.y,o.y,r.y,a.y),Sr(t,s.z,o.z,r.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class qf extends Ri{constructor(t=new J,e=new J){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new J){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new J){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Cv extends Ri{constructor(t=new L,e=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new L){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new L){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Zf extends Ri{constructor(t=new J,e=new J,i=new J){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new J){const i=e,s=this.v0,o=this.v1,r=this.v2;return i.set(yr(t,s.x,o.x,r.x),yr(t,s.y,o.y,r.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Kf extends Ri{constructor(t=new L,e=new L,i=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new L){const i=e,s=this.v0,o=this.v1,r=this.v2;return i.set(yr(t,s.x,o.x,r.x),yr(t,s.y,o.y,r.y),yr(t,s.z,o.z,r.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class jf extends Ri{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new J){const i=e,s=this.points,o=(s.length-1)*t,r=Math.floor(o),a=o-r,c=s[r===0?r:r-1],l=s[r],h=s[r>s.length-2?s.length-1:r+1],d=s[r>s.length-3?s.length-1:r+2];return i.set(cu(a,c.x,l.x,h.x,d.x),cu(a,c.y,l.y,h.y,d.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(new J().fromArray(s))}return this}}var nc=Object.freeze({__proto__:null,ArcCurve:yv,CatmullRomCurve3:_c,CubicBezierCurve:$f,CubicBezierCurve3:Pv,EllipseCurve:zh,LineCurve:qf,LineCurve3:Cv,QuadraticBezierCurve:Zf,QuadraticBezierCurve3:Kf,SplineCurve:jf});class Iv extends Ri{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new nc[i](e,t))}return this}getPoint(t,e){const i=t*this.getLength(),s=this.getCurveLengths();let o=0;for(;o<s.length;){if(s[o]>=i){const r=s[o]-i,a=this.curves[o],c=a.getLength(),l=c===0?0:1-r/c;return a.getPointAt(l,e)}o++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let i=0,s=this.curves.length;i<s;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let i;for(let s=0,o=this.curves;s<o.length;s++){const r=o[s],a=r.isEllipseCurve?t*2:r.isLineCurve||r.isLineCurve3?1:r.isSplineCurve?t*r.points.length:t,c=r.getPoints(a);for(let l=0;l<c.length;l++){const h=c[l];i&&i.equals(h)||(e.push(h),i=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const s=t.curves[e];this.curves.push(new nc[s.type]().fromJSON(s))}return this}}class lu extends Iv{constructor(t){super(),this.type="Path",this.currentPoint=new J,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const i=new qf(this.currentPoint.clone(),new J(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,s){const o=new Zf(this.currentPoint.clone(),new J(t,e),new J(i,s));return this.curves.push(o),this.currentPoint.set(i,s),this}bezierCurveTo(t,e,i,s,o,r){const a=new $f(this.currentPoint.clone(),new J(t,e),new J(i,s),new J(o,r));return this.curves.push(a),this.currentPoint.set(o,r),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),i=new jf(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,s,o,r){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,i,s,o,r),this}absarc(t,e,i,s,o,r){return this.absellipse(t,e,i,i,s,o,r),this}ellipse(t,e,i,s,o,r,a,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,i,s,o,r,a,c),this}absellipse(t,e,i,s,o,r,a,c){const l=new zh(t,e,i,s,o,r,a,c);if(this.curves.length>0){const d=l.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Qi extends Le{constructor(t=1,e=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:s},e=Math.max(3,e);const o=[],r=[],a=[],c=[],l=new L,h=new J;r.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let d=0,f=3;d<=e;d++,f+=3){const p=i+d/e*s;l.x=t*Math.cos(p),l.y=t*Math.sin(p),r.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(r[f]/t+1)/2,h.y=(r[f+1]/t+1)/2,c.push(h.x,h.y)}for(let d=1;d<=e;d++)o.push(d,d+1,0);this.setIndex(o),this.setAttribute("position",new Bt(r,3)),this.setAttribute("normal",new Bt(a,3)),this.setAttribute("uv",new Bt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Qi(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class ji extends Le{constructor(t=1,e=1,i=1,s=32,o=1,r=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:o,openEnded:r,thetaStart:a,thetaLength:c};const l=this;s=Math.floor(s),o=Math.floor(o);const h=[],d=[],f=[],p=[];let m=0;const v=[],_=i/2;let g=0;S(),r===!1&&(t>0&&x(!0),e>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new Bt(d,3)),this.setAttribute("normal",new Bt(f,3)),this.setAttribute("uv",new Bt(p,2));function S(){const M=new L,C=new L;let T=0;const R=(e-t)/i;for(let I=0;I<=o;I++){const w=[],b=I/o,N=b*(e-t)+t;for(let H=0;H<=s;H++){const G=H/s,X=G*c+a,Q=Math.sin(X),Y=Math.cos(X);C.x=N*Q,C.y=-b*i+_,C.z=N*Y,d.push(C.x,C.y,C.z),M.set(Q,R,Y).normalize(),f.push(M.x,M.y,M.z),p.push(G,1-b),w.push(m++)}v.push(w)}for(let I=0;I<s;I++)for(let w=0;w<o;w++){const b=v[w][I],N=v[w+1][I],H=v[w+1][I+1],G=v[w][I+1];(t>0||w!==0)&&(h.push(b,N,G),T+=3),(e>0||w!==o-1)&&(h.push(N,H,G),T+=3)}l.addGroup(g,T,0),g+=T}function x(M){const C=m,T=new J,R=new L;let I=0;const w=M===!0?t:e,b=M===!0?1:-1;for(let H=1;H<=s;H++)d.push(0,_*b,0),f.push(0,b,0),p.push(.5,.5),m++;const N=m;for(let H=0;H<=s;H++){const X=H/s*c+a,Q=Math.cos(X),Y=Math.sin(X);R.x=w*Y,R.y=_*b,R.z=w*Q,d.push(R.x,R.y,R.z),f.push(0,b,0),T.x=Q*.5+.5,T.y=Y*.5*b+.5,p.push(T.x,T.y),m++}for(let H=0;H<s;H++){const G=C+H,X=N+H;M===!0?h.push(X,X+1,G):h.push(X+1,X,G),I+=3}l.addGroup(g,I,M===!0?1:2),g+=I}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ji(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Zo extends ji{constructor(t=1,e=1,i=32,s=1,o=!1,r=0,a=Math.PI*2){super(0,t,e,i,s,o,r,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:s,openEnded:o,thetaStart:r,thetaLength:a}}static fromJSON(t){return new Zo(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Hh extends Le{constructor(t=[],e=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:s};const o=[],r=[];a(s),l(i),h(),this.setAttribute("position",new Bt(o,3)),this.setAttribute("normal",new Bt(o.slice(),3)),this.setAttribute("uv",new Bt(r,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(S){const x=new L,M=new L,C=new L;for(let T=0;T<e.length;T+=3)p(e[T+0],x),p(e[T+1],M),p(e[T+2],C),c(x,M,C,S)}function c(S,x,M,C){const T=C+1,R=[];for(let I=0;I<=T;I++){R[I]=[];const w=S.clone().lerp(M,I/T),b=x.clone().lerp(M,I/T),N=T-I;for(let H=0;H<=N;H++)H===0&&I===T?R[I][H]=w:R[I][H]=w.clone().lerp(b,H/N)}for(let I=0;I<T;I++)for(let w=0;w<2*(T-I)-1;w++){const b=Math.floor(w/2);w%2===0?(f(R[I][b+1]),f(R[I+1][b]),f(R[I][b])):(f(R[I][b+1]),f(R[I+1][b+1]),f(R[I+1][b]))}}function l(S){const x=new L;for(let M=0;M<o.length;M+=3)x.x=o[M+0],x.y=o[M+1],x.z=o[M+2],x.normalize().multiplyScalar(S),o[M+0]=x.x,o[M+1]=x.y,o[M+2]=x.z}function h(){const S=new L;for(let x=0;x<o.length;x+=3){S.x=o[x+0],S.y=o[x+1],S.z=o[x+2];const M=_(S)/2/Math.PI+.5,C=g(S)/Math.PI+.5;r.push(M,1-C)}m(),d()}function d(){for(let S=0;S<r.length;S+=6){const x=r[S+0],M=r[S+2],C=r[S+4],T=Math.max(x,M,C),R=Math.min(x,M,C);T>.9&&R<.1&&(x<.2&&(r[S+0]+=1),M<.2&&(r[S+2]+=1),C<.2&&(r[S+4]+=1))}}function f(S){o.push(S.x,S.y,S.z)}function p(S,x){const M=S*3;x.x=t[M+0],x.y=t[M+1],x.z=t[M+2]}function m(){const S=new L,x=new L,M=new L,C=new L,T=new J,R=new J,I=new J;for(let w=0,b=0;w<o.length;w+=9,b+=6){S.set(o[w+0],o[w+1],o[w+2]),x.set(o[w+3],o[w+4],o[w+5]),M.set(o[w+6],o[w+7],o[w+8]),T.set(r[b+0],r[b+1]),R.set(r[b+2],r[b+3]),I.set(r[b+4],r[b+5]),C.copy(S).add(x).add(M).divideScalar(3);const N=_(C);v(T,b+0,S,N),v(R,b+2,x,N),v(I,b+4,M,N)}}function v(S,x,M,C){C<0&&S.x===1&&(r[x]=S.x-1),M.x===0&&M.z===0&&(r[x]=C/2/Math.PI+.5)}function _(S){return Math.atan2(S.z,-S.x)}function g(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Hh(t.vertices,t.indices,t.radius,t.details)}}class Fe extends lu{constructor(t){super(t),this.uuid=Ks(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let i=0,s=this.holes.length;i<s;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const s=t.holes[e];this.holes.push(new lu().fromJSON(s))}return this}}const Lv={triangulate:function(n,t,e=2){const i=t&&t.length,s=i?t[0]*e:n.length;let o=Jf(n,0,s,e,!0);const r=[];if(!o||o.next===o.prev)return r;let a,c,l,h,d,f,p;if(i&&(o=Fv(n,t,o,e)),n.length>80*e){a=l=n[0],c=h=n[1];for(let m=e;m<s;m+=e)d=n[m],f=n[m+1],d<a&&(a=d),f<c&&(c=f),d>l&&(l=d),f>h&&(h=f);p=Math.max(l-a,h-c),p=p!==0?32767/p:0}return Cr(o,r,e,a,c,p,0),r}};function Jf(n,t,e,i,s){let o,r;if(s===qv(n,t,e,i)>0)for(o=t;o<e;o+=i)r=hu(o,n[o],n[o+1],r);else for(o=e-i;o>=t;o-=i)r=hu(o,n[o],n[o+1],r);return r&&vc(r,r.next)&&(Lr(r),r=r.next),r}function Ys(n,t){if(!n)return n;t||(t=n);let e=n,i;do if(i=!1,!e.steiner&&(vc(e,e.next)||Ie(e.prev,e,e.next)===0)){if(Lr(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function Cr(n,t,e,i,s,o,r){if(!n)return;!r&&o&&Gv(n,i,s,o);let a=n,c,l;for(;n.prev!==n.next;){if(c=n.prev,l=n.next,o?Uv(n,i,s,o):Dv(n)){t.push(c.i/e|0),t.push(n.i/e|0),t.push(l.i/e|0),Lr(n),n=l.next,a=l.next;continue}if(n=l,n===a){r?r===1?(n=Nv(Ys(n),t,e),Cr(n,t,e,i,s,o,2)):r===2&&Ov(n,t,e,i,s,o):Cr(Ys(n),t,e,i,s,o,1);break}}}function Dv(n){const t=n.prev,e=n,i=n.next;if(Ie(t,e,i)>=0)return!1;const s=t.x,o=e.x,r=i.x,a=t.y,c=e.y,l=i.y,h=s<o?s<r?s:r:o<r?o:r,d=a<c?a<l?a:l:c<l?c:l,f=s>o?s>r?s:r:o>r?o:r,p=a>c?a>l?a:l:c>l?c:l;let m=i.next;for(;m!==t;){if(m.x>=h&&m.x<=f&&m.y>=d&&m.y<=p&&So(s,a,o,c,r,l,m.x,m.y)&&Ie(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function Uv(n,t,e,i){const s=n.prev,o=n,r=n.next;if(Ie(s,o,r)>=0)return!1;const a=s.x,c=o.x,l=r.x,h=s.y,d=o.y,f=r.y,p=a<c?a<l?a:l:c<l?c:l,m=h<d?h<f?h:f:d<f?d:f,v=a>c?a>l?a:l:c>l?c:l,_=h>d?h>f?h:f:d>f?d:f,g=ah(p,m,t,e,i),S=ah(v,_,t,e,i);let x=n.prevZ,M=n.nextZ;for(;x&&x.z>=g&&M&&M.z<=S;){if(x.x>=p&&x.x<=v&&x.y>=m&&x.y<=_&&x!==s&&x!==r&&So(a,h,c,d,l,f,x.x,x.y)&&Ie(x.prev,x,x.next)>=0||(x=x.prevZ,M.x>=p&&M.x<=v&&M.y>=m&&M.y<=_&&M!==s&&M!==r&&So(a,h,c,d,l,f,M.x,M.y)&&Ie(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;x&&x.z>=g;){if(x.x>=p&&x.x<=v&&x.y>=m&&x.y<=_&&x!==s&&x!==r&&So(a,h,c,d,l,f,x.x,x.y)&&Ie(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;M&&M.z<=S;){if(M.x>=p&&M.x<=v&&M.y>=m&&M.y<=_&&M!==s&&M!==r&&So(a,h,c,d,l,f,M.x,M.y)&&Ie(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function Nv(n,t,e){let i=n;do{const s=i.prev,o=i.next.next;!vc(s,o)&&Qf(s,i,i.next,o)&&Ir(s,o)&&Ir(o,s)&&(t.push(s.i/e|0),t.push(i.i/e|0),t.push(o.i/e|0),Lr(i),Lr(i.next),i=n=o),i=i.next}while(i!==n);return Ys(i)}function Ov(n,t,e,i,s,o){let r=n;do{let a=r.next.next;for(;a!==r.prev;){if(r.i!==a.i&&Xv(r,a)){let c=tp(r,a);r=Ys(r,r.next),c=Ys(c,c.next),Cr(r,t,e,i,s,o,0),Cr(c,t,e,i,s,o,0);return}a=a.next}r=r.next}while(r!==n)}function Fv(n,t,e,i){const s=[];let o,r,a,c,l;for(o=0,r=t.length;o<r;o++)a=t[o]*i,c=o<r-1?t[o+1]*i:n.length,l=Jf(n,a,c,i,!1),l===l.next&&(l.steiner=!0),s.push(Wv(l));for(s.sort(kv),o=0;o<s.length;o++)e=zv(s[o],e);return e}function kv(n,t){return n.x-t.x}function zv(n,t){const e=Bv(n,t);if(!e)return t;const i=tp(e,n);return Ys(i,i.next),Ys(e,e.next)}function Bv(n,t){let e=t,i=-1/0,s;const o=n.x,r=n.y;do{if(r<=e.y&&r>=e.next.y&&e.next.y!==e.y){const f=e.x+(r-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=o&&f>i&&(i=f,s=e.x<e.next.x?e:e.next,f===o))return s}e=e.next}while(e!==t);if(!s)return null;const a=s,c=s.x,l=s.y;let h=1/0,d;e=s;do o>=e.x&&e.x>=c&&o!==e.x&&So(r<l?o:i,r,c,l,r<l?i:o,r,e.x,e.y)&&(d=Math.abs(r-e.y)/(o-e.x),Ir(e,n)&&(d<h||d===h&&(e.x>s.x||e.x===s.x&&Hv(s,e)))&&(s=e,h=d)),e=e.next;while(e!==a);return s}function Hv(n,t){return Ie(n.prev,n,t.prev)<0&&Ie(t.next,n,n.next)<0}function Gv(n,t,e,i){let s=n;do s.z===0&&(s.z=ah(s.x,s.y,t,e,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,Vv(s)}function Vv(n){let t,e,i,s,o,r,a,c,l=1;do{for(e=n,n=null,o=null,r=0;e;){for(r++,i=e,a=0,t=0;t<l&&(a++,i=i.nextZ,!!i);t++);for(c=l;a>0||c>0&&i;)a!==0&&(c===0||!i||e.z<=i.z)?(s=e,e=e.nextZ,a--):(s=i,i=i.nextZ,c--),o?o.nextZ=s:n=s,s.prevZ=o,o=s;e=i}o.nextZ=null,l*=2}while(r>1);return n}function ah(n,t,e,i,s){return n=(n-e)*s|0,t=(t-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,n|t<<1}function Wv(n){let t=n,e=n;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==n);return e}function So(n,t,e,i,s,o,r,a){return(s-r)*(t-a)>=(n-r)*(o-a)&&(n-r)*(i-a)>=(e-r)*(t-a)&&(e-r)*(o-a)>=(s-r)*(i-a)}function Xv(n,t){return n.next.i!==t.i&&n.prev.i!==t.i&&!Yv(n,t)&&(Ir(n,t)&&Ir(t,n)&&$v(n,t)&&(Ie(n.prev,n,t.prev)||Ie(n,t.prev,t))||vc(n,t)&&Ie(n.prev,n,n.next)>0&&Ie(t.prev,t,t.next)>0)}function Ie(n,t,e){return(t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y)}function vc(n,t){return n.x===t.x&&n.y===t.y}function Qf(n,t,e,i){const s=Aa(Ie(n,t,e)),o=Aa(Ie(n,t,i)),r=Aa(Ie(e,i,n)),a=Aa(Ie(e,i,t));return!!(s!==o&&r!==a||s===0&&Ta(n,e,t)||o===0&&Ta(n,i,t)||r===0&&Ta(e,n,i)||a===0&&Ta(e,t,i))}function Ta(n,t,e){return t.x<=Math.max(n.x,e.x)&&t.x>=Math.min(n.x,e.x)&&t.y<=Math.max(n.y,e.y)&&t.y>=Math.min(n.y,e.y)}function Aa(n){return n>0?1:n<0?-1:0}function Yv(n,t){let e=n;do{if(e.i!==n.i&&e.next.i!==n.i&&e.i!==t.i&&e.next.i!==t.i&&Qf(e,e.next,n,t))return!0;e=e.next}while(e!==n);return!1}function Ir(n,t){return Ie(n.prev,n,n.next)<0?Ie(n,t,n.next)>=0&&Ie(n,n.prev,t)>=0:Ie(n,t,n.prev)<0||Ie(n,n.next,t)<0}function $v(n,t){let e=n,i=!1;const s=(n.x+t.x)/2,o=(n.y+t.y)/2;do e.y>o!=e.next.y>o&&e.next.y!==e.y&&s<(e.next.x-e.x)*(o-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==n);return i}function tp(n,t){const e=new ch(n.i,n.x,n.y),i=new ch(t.i,t.x,t.y),s=n.next,o=t.prev;return n.next=t,t.prev=n,e.next=s,s.prev=e,i.next=e,e.prev=i,o.next=i,i.prev=o,i}function hu(n,t,e,i){const s=new ch(n,t,e);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function Lr(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function ch(n,t,e){this.i=n,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function qv(n,t,e,i){let s=0;for(let o=t,r=e-i;o<e;o+=i)s+=(n[r]-n[o])*(n[o+1]+n[r+1]),r=o;return s}class _s{static area(t){const e=t.length;let i=0;for(let s=e-1,o=0;o<e;s=o++)i+=t[s].x*t[o].y-t[o].x*t[s].y;return i*.5}static isClockWise(t){return _s.area(t)<0}static triangulateShape(t,e){const i=[],s=[],o=[];du(t),uu(i,t);let r=t.length;e.forEach(du);for(let c=0;c<e.length;c++)s.push(r),r+=e[c].length,uu(i,e[c]);const a=Lv.triangulate(i,s);for(let c=0;c<a.length;c+=3)o.push(a.slice(c,c+3));return o}}function du(n){const t=n.length;t>2&&n[t-1].equals(n[0])&&n.pop()}function uu(n,t){for(let e=0;e<t.length;e++)n.push(t[e].x),n.push(t[e].y)}class Rn extends Le{constructor(t=new Fe([new J(.5,.5),new J(-.5,.5),new J(-.5,-.5),new J(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const i=this,s=[],o=[];for(let a=0,c=t.length;a<c;a++){const l=t[a];r(l)}this.setAttribute("position",new Bt(s,3)),this.setAttribute("uv",new Bt(o,2)),this.computeVertexNormals();function r(a){const c=[],l=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,d=e.depth!==void 0?e.depth:1;let f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,p=e.bevelThickness!==void 0?e.bevelThickness:.2,m=e.bevelSize!==void 0?e.bevelSize:p-.1,v=e.bevelOffset!==void 0?e.bevelOffset:0,_=e.bevelSegments!==void 0?e.bevelSegments:3;const g=e.extrudePath,S=e.UVGenerator!==void 0?e.UVGenerator:Zv;let x,M=!1,C,T,R,I;g&&(x=g.getSpacedPoints(h),M=!0,f=!1,C=g.computeFrenetFrames(h,!1),T=new L,R=new L,I=new L),f||(_=0,p=0,m=0,v=0);const w=a.extractPoints(l);let b=w.shape;const N=w.holes;if(!_s.isClockWise(b)){b=b.reverse();for(let et=0,lt=N.length;et<lt;et++){const D=N[et];_s.isClockWise(D)&&(N[et]=D.reverse())}}const G=_s.triangulateShape(b,N),X=b;for(let et=0,lt=N.length;et<lt;et++){const D=N[et];b=b.concat(D)}function Q(et,lt,D){return lt||console.error("THREE.ExtrudeGeometry: vec does not exist"),et.clone().addScaledVector(lt,D)}const Y=b.length,rt=G.length;function $(et,lt,D){let Ut,it,wt;const pt=et.x-lt.x,Ft=et.y-lt.y,bt=D.x-et.x,P=D.y-et.y,E=pt*pt+Ft*Ft,B=pt*P-Ft*bt;if(Math.abs(B)>Number.EPSILON){const Z=Math.sqrt(E),nt=Math.sqrt(bt*bt+P*P),K=lt.x-Ft/Z,Ct=lt.y+pt/Z,_t=D.x-P/nt,Et=D.y+bt/nt,re=((_t-K)*P-(Et-Ct)*bt)/(pt*P-Ft*bt);Ut=K+pt*re-et.x,it=Ct+Ft*re-et.y;const ot=Ut*Ut+it*it;if(ot<=2)return new J(Ut,it);wt=Math.sqrt(ot/2)}else{let Z=!1;pt>Number.EPSILON?bt>Number.EPSILON&&(Z=!0):pt<-Number.EPSILON?bt<-Number.EPSILON&&(Z=!0):Math.sign(Ft)===Math.sign(P)&&(Z=!0),Z?(Ut=-Ft,it=pt,wt=Math.sqrt(E)):(Ut=pt,it=Ft,wt=Math.sqrt(E/2))}return new J(Ut/wt,it/wt)}const mt=[];for(let et=0,lt=X.length,D=lt-1,Ut=et+1;et<lt;et++,D++,Ut++)D===lt&&(D=0),Ut===lt&&(Ut=0),mt[et]=$(X[et],X[D],X[Ut]);const St=[];let Rt,$t=mt.concat();for(let et=0,lt=N.length;et<lt;et++){const D=N[et];Rt=[];for(let Ut=0,it=D.length,wt=it-1,pt=Ut+1;Ut<it;Ut++,wt++,pt++)wt===it&&(wt=0),pt===it&&(pt=0),Rt[Ut]=$(D[Ut],D[wt],D[pt]);St.push(Rt),$t=$t.concat(Rt)}for(let et=0;et<_;et++){const lt=et/_,D=p*Math.cos(lt*Math.PI/2),Ut=m*Math.sin(lt*Math.PI/2)+v;for(let it=0,wt=X.length;it<wt;it++){const pt=Q(X[it],mt[it],Ut);ft(pt.x,pt.y,-D)}for(let it=0,wt=N.length;it<wt;it++){const pt=N[it];Rt=St[it];for(let Ft=0,bt=pt.length;Ft<bt;Ft++){const P=Q(pt[Ft],Rt[Ft],Ut);ft(P.x,P.y,-D)}}}const pe=m+v;for(let et=0;et<Y;et++){const lt=f?Q(b[et],$t[et],pe):b[et];M?(R.copy(C.normals[0]).multiplyScalar(lt.x),T.copy(C.binormals[0]).multiplyScalar(lt.y),I.copy(x[0]).add(R).add(T),ft(I.x,I.y,I.z)):ft(lt.x,lt.y,0)}for(let et=1;et<=h;et++)for(let lt=0;lt<Y;lt++){const D=f?Q(b[lt],$t[lt],pe):b[lt];M?(R.copy(C.normals[et]).multiplyScalar(D.x),T.copy(C.binormals[et]).multiplyScalar(D.y),I.copy(x[et]).add(R).add(T),ft(I.x,I.y,I.z)):ft(D.x,D.y,d/h*et)}for(let et=_-1;et>=0;et--){const lt=et/_,D=p*Math.cos(lt*Math.PI/2),Ut=m*Math.sin(lt*Math.PI/2)+v;for(let it=0,wt=X.length;it<wt;it++){const pt=Q(X[it],mt[it],Ut);ft(pt.x,pt.y,d+D)}for(let it=0,wt=N.length;it<wt;it++){const pt=N[it];Rt=St[it];for(let Ft=0,bt=pt.length;Ft<bt;Ft++){const P=Q(pt[Ft],Rt[Ft],Ut);M?ft(P.x,P.y+x[h-1].y,x[h-1].x+D):ft(P.x,P.y,d+D)}}}j(),ht();function j(){const et=s.length/3;if(f){let lt=0,D=Y*lt;for(let Ut=0;Ut<rt;Ut++){const it=G[Ut];Ot(it[2]+D,it[1]+D,it[0]+D)}lt=h+_*2,D=Y*lt;for(let Ut=0;Ut<rt;Ut++){const it=G[Ut];Ot(it[0]+D,it[1]+D,it[2]+D)}}else{for(let lt=0;lt<rt;lt++){const D=G[lt];Ot(D[2],D[1],D[0])}for(let lt=0;lt<rt;lt++){const D=G[lt];Ot(D[0]+Y*h,D[1]+Y*h,D[2]+Y*h)}}i.addGroup(et,s.length/3-et,0)}function ht(){const et=s.length/3;let lt=0;Pt(X,lt),lt+=X.length;for(let D=0,Ut=N.length;D<Ut;D++){const it=N[D];Pt(it,lt),lt+=it.length}i.addGroup(et,s.length/3-et,1)}function Pt(et,lt){let D=et.length;for(;--D>=0;){const Ut=D;let it=D-1;it<0&&(it=et.length-1);for(let wt=0,pt=h+_*2;wt<pt;wt++){const Ft=Y*wt,bt=Y*(wt+1),P=lt+Ut+Ft,E=lt+it+Ft,B=lt+it+bt,Z=lt+Ut+bt;Gt(P,E,B,Z)}}}function ft(et,lt,D){c.push(et),c.push(lt),c.push(D)}function Ot(et,lt,D){zt(et),zt(lt),zt(D);const Ut=s.length/3,it=S.generateTopUV(i,s,Ut-3,Ut-2,Ut-1);ce(it[0]),ce(it[1]),ce(it[2])}function Gt(et,lt,D,Ut){zt(et),zt(lt),zt(Ut),zt(lt),zt(D),zt(Ut);const it=s.length/3,wt=S.generateSideWallUV(i,s,it-6,it-3,it-2,it-1);ce(wt[0]),ce(wt[1]),ce(wt[3]),ce(wt[1]),ce(wt[2]),ce(wt[3])}function zt(et){s.push(c[et*3+0]),s.push(c[et*3+1]),s.push(c[et*3+2])}function ce(et){o.push(et.x),o.push(et.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,i=this.parameters.options;return Kv(e,i,t)}static fromJSON(t,e){const i=[];for(let o=0,r=t.shapes.length;o<r;o++){const a=e[t.shapes[o]];i.push(a)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new nc[s.type]().fromJSON(s)),new Rn(i,t.options)}}const Zv={generateTopUV:function(n,t,e,i,s){const o=t[e*3],r=t[e*3+1],a=t[i*3],c=t[i*3+1],l=t[s*3],h=t[s*3+1];return[new J(o,r),new J(a,c),new J(l,h)]},generateSideWallUV:function(n,t,e,i,s,o){const r=t[e*3],a=t[e*3+1],c=t[e*3+2],l=t[i*3],h=t[i*3+1],d=t[i*3+2],f=t[s*3],p=t[s*3+1],m=t[s*3+2],v=t[o*3],_=t[o*3+1],g=t[o*3+2];return Math.abs(a-h)<Math.abs(r-l)?[new J(r,1-c),new J(l,1-d),new J(f,1-m),new J(v,1-g)]:[new J(a,1-c),new J(h,1-d),new J(p,1-m),new J(_,1-g)]}};function Kv(n,t,e){if(e.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){const o=n[i];e.shapes.push(o.uuid)}else e.shapes.push(n.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class Ko extends Hh{constructor(t=1,e=0){const i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],o=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,o,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Ko(t.radius,t.detail)}}class Kr extends Le{constructor(t=.5,e=1,i=32,s=1,o=0,r=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:s,thetaStart:o,thetaLength:r},i=Math.max(3,i),s=Math.max(1,s);const a=[],c=[],l=[],h=[];let d=t;const f=(e-t)/s,p=new L,m=new J;for(let v=0;v<=s;v++){for(let _=0;_<=i;_++){const g=o+_/i*r;p.x=d*Math.cos(g),p.y=d*Math.sin(g),c.push(p.x,p.y,p.z),l.push(0,0,1),m.x=(p.x/e+1)/2,m.y=(p.y/e+1)/2,h.push(m.x,m.y)}d+=f}for(let v=0;v<s;v++){const _=v*(i+1);for(let g=0;g<i;g++){const S=g+_,x=S,M=S+i+1,C=S+i+2,T=S+1;a.push(x,M,T),a.push(M,C,T)}}this.setIndex(a),this.setAttribute("position",new Bt(c,3)),this.setAttribute("normal",new Bt(l,3)),this.setAttribute("uv",new Bt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Kr(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class ii extends Le{constructor(t=new Fe([new J(0,.5),new J(-.5,-.5),new J(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const i=[],s=[],o=[],r=[];let a=0,c=0;if(Array.isArray(t)===!1)l(t);else for(let h=0;h<t.length;h++)l(t[h]),this.addGroup(a,c,h),a+=c,c=0;this.setIndex(i),this.setAttribute("position",new Bt(s,3)),this.setAttribute("normal",new Bt(o,3)),this.setAttribute("uv",new Bt(r,2));function l(h){const d=s.length/3,f=h.extractPoints(e);let p=f.shape;const m=f.holes;_s.isClockWise(p)===!1&&(p=p.reverse());for(let _=0,g=m.length;_<g;_++){const S=m[_];_s.isClockWise(S)===!0&&(m[_]=S.reverse())}const v=_s.triangulateShape(p,m);for(let _=0,g=m.length;_<g;_++){const S=m[_];p=p.concat(S)}for(let _=0,g=p.length;_<g;_++){const S=p[_];s.push(S.x,S.y,0),o.push(0,0,1),r.push(S.x,S.y)}for(let _=0,g=v.length;_<g;_++){const S=v[_],x=S[0]+d,M=S[1]+d,C=S[2]+d;i.push(x,M,C),c+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return jv(e,t)}static fromJSON(t,e){const i=[];for(let s=0,o=t.shapes.length;s<o;s++){const r=e[t.shapes[s]];i.push(r)}return new ii(i,t.curveSegments)}}function jv(n,t){if(t.shapes=[],Array.isArray(n))for(let e=0,i=n.length;e<i;e++){const s=n[e];t.shapes.push(s.uuid)}else t.shapes.push(n.uuid);return t}class dn extends Le{constructor(t=1,e=32,i=16,s=0,o=Math.PI*2,r=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:o,thetaStart:r,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const c=Math.min(r+a,Math.PI);let l=0;const h=[],d=new L,f=new L,p=[],m=[],v=[],_=[];for(let g=0;g<=i;g++){const S=[],x=g/i;let M=0;g===0&&r===0?M=.5/e:g===i&&c===Math.PI&&(M=-.5/e);for(let C=0;C<=e;C++){const T=C/e;d.x=-t*Math.cos(s+T*o)*Math.sin(r+x*a),d.y=t*Math.cos(r+x*a),d.z=t*Math.sin(s+T*o)*Math.sin(r+x*a),m.push(d.x,d.y,d.z),f.copy(d).normalize(),v.push(f.x,f.y,f.z),_.push(T+M,1-x),S.push(l++)}h.push(S)}for(let g=0;g<i;g++)for(let S=0;S<e;S++){const x=h[g][S+1],M=h[g][S],C=h[g+1][S],T=h[g+1][S+1];(g!==0||r>0)&&p.push(x,M,T),(g!==i-1||c<Math.PI)&&p.push(M,C,T)}this.setIndex(p),this.setAttribute("position",new Bt(m,3)),this.setAttribute("normal",new Bt(v,3)),this.setAttribute("uv",new Bt(_,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new dn(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Ss extends Le{constructor(t=1,e=.4,i=12,s=48,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:s,arc:o},i=Math.floor(i),s=Math.floor(s);const r=[],a=[],c=[],l=[],h=new L,d=new L,f=new L;for(let p=0;p<=i;p++)for(let m=0;m<=s;m++){const v=m/s*o,_=p/i*Math.PI*2;d.x=(t+e*Math.cos(_))*Math.cos(v),d.y=(t+e*Math.cos(_))*Math.sin(v),d.z=e*Math.sin(_),a.push(d.x,d.y,d.z),h.x=t*Math.cos(v),h.y=t*Math.sin(v),f.subVectors(d,h).normalize(),c.push(f.x,f.y,f.z),l.push(m/s),l.push(p/i)}for(let p=1;p<=i;p++)for(let m=1;m<=s;m++){const v=(s+1)*p+m-1,_=(s+1)*(p-1)+m-1,g=(s+1)*(p-1)+m,S=(s+1)*p+m;r.push(v,_,S),r.push(_,g,S)}this.setIndex(r),this.setAttribute("position",new Bt(a,3)),this.setAttribute("normal",new Bt(c,3)),this.setAttribute("uv",new Bt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ss(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Mc extends Le{constructor(t=new Kf(new L(-1,-1,0),new L(-1,1,0),new L(1,1,0)),e=64,i=1,s=8,o=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:i,radialSegments:s,closed:o};const r=t.computeFrenetFrames(e,o);this.tangents=r.tangents,this.normals=r.normals,this.binormals=r.binormals;const a=new L,c=new L,l=new J;let h=new L;const d=[],f=[],p=[],m=[];v(),this.setIndex(m),this.setAttribute("position",new Bt(d,3)),this.setAttribute("normal",new Bt(f,3)),this.setAttribute("uv",new Bt(p,2));function v(){for(let x=0;x<e;x++)_(x);_(o===!1?e:0),S(),g()}function _(x){h=t.getPointAt(x/e,h);const M=r.normals[x],C=r.binormals[x];for(let T=0;T<=s;T++){const R=T/s*Math.PI*2,I=Math.sin(R),w=-Math.cos(R);c.x=w*M.x+I*C.x,c.y=w*M.y+I*C.y,c.z=w*M.z+I*C.z,c.normalize(),f.push(c.x,c.y,c.z),a.x=h.x+i*c.x,a.y=h.y+i*c.y,a.z=h.z+i*c.z,d.push(a.x,a.y,a.z)}}function g(){for(let x=1;x<=e;x++)for(let M=1;M<=s;M++){const C=(s+1)*(x-1)+(M-1),T=(s+1)*x+(M-1),R=(s+1)*x+M,I=(s+1)*(x-1)+M;m.push(C,T,I),m.push(T,R,I)}}function S(){for(let x=0;x<=e;x++)for(let M=0;M<=s;M++)l.x=x/e,l.y=M/s,p.push(l.x,l.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new Mc(new nc[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class _e extends qr{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Wt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Wt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Af,this.normalScale=new J(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class ep extends en{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Wt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class Jv extends ep{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(en.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Wt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const sl=new oe,fu=new L,pu=new L;class Qv{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new J(512,512),this.map=null,this.mapPass=null,this.matrix=new oe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Oh,this._frameExtents=new J(1,1),this._viewportCount=1,this._viewports=[new Ue(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;fu.setFromMatrixPosition(t.matrixWorld),e.position.copy(fu),pu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(pu),e.updateMatrixWorld(),sl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(sl),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(sl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class tM extends Qv{constructor(){super(new Bf(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class eM extends ep{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(en.DEFAULT_UP),this.updateMatrix(),this.target=new en,this.shadow=new tM}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class nM{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=mu(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=mu();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function mu(){return performance.now()}const gu=new oe;class iM{constructor(t,e,i=0,s=1/0){this.ray=new Dh(t,e),this.near=i,this.far=s,this.camera=null,this.layers=new Uh,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return gu.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(gu),this}intersectObject(t,e=!0,i=[]){return lh(t,this,i,e),i.sort(_u),i}intersectObjects(t,e=!0,i=[]){for(let s=0,o=t.length;s<o;s++)lh(t[s],this,i,e);return i.sort(_u),i}}function _u(n,t){return n.distance-t.distance}function lh(n,t,e,i){let s=!0;if(n.layers.test(t.layers)&&n.raycast(t,e)===!1&&(s=!1),s===!0&&i===!0){const o=n.children;for(let r=0,a=o.length;r<a;r++)lh(o[r],t,e,!0)}}class vu{constructor(t=1,e=0,i=0){return this.radius=t,this.phi=e,this.theta=i,this}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(tn(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class sM extends Zs{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:bh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=bh);const Mu={type:"change"},Gh={type:"start"},np={type:"end"},Ra=new Dh,xu=new ls,oM=Math.cos(70*bi.DEG2RAD),Ye=new L,xn=2*Math.PI,Se={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},ol=1e-6;class ip extends sM{constructor(t,e=null){super(t,e),this.state=Se.NONE,this.enabled=!0,this.target=new L,this.cursor=new L,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ao.ROTATE,MIDDLE:Ao.DOLLY,RIGHT:Ao.PAN},this.touches={ONE:xo.ROTATE,TWO:xo.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new L,this._lastQuaternion=new Fn,this._lastTargetPosition=new L,this._quat=new Fn().setFromUnitVectors(t.up,new L(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new vu,this._sphericalDelta=new vu,this._scale=1,this._panOffset=new L,this._rotateStart=new J,this._rotateEnd=new J,this._rotateDelta=new J,this._panStart=new J,this._panEnd=new J,this._panDelta=new J,this._dollyStart=new J,this._dollyEnd=new J,this._dollyDelta=new J,this._dollyDirection=new L,this._mouse=new J,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=aM.bind(this),this._onPointerDown=rM.bind(this),this._onPointerUp=cM.bind(this),this._onContextMenu=mM.bind(this),this._onMouseWheel=dM.bind(this),this._onKeyDown=uM.bind(this),this._onTouchStart=fM.bind(this),this._onTouchMove=pM.bind(this),this._onMouseDown=lM.bind(this),this._onMouseMove=hM.bind(this),this._interceptControlDown=gM.bind(this),this._interceptControlUp=_M.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Mu),this.update(),this.state=Se.NONE}update(t=null){const e=this.object.position;Ye.copy(e).sub(this.target),Ye.applyQuaternion(this._quat),this._spherical.setFromVector3(Ye),this.autoRotate&&this.state===Se.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=xn:i>Math.PI&&(i-=xn),s<-Math.PI?s+=xn:s>Math.PI&&(s-=xn),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let o=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const r=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),o=r!=this._spherical.radius}if(Ye.setFromSpherical(this._spherical),Ye.applyQuaternion(this._quatInverse),e.copy(this.target).add(Ye),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let r=null;if(this.object.isPerspectiveCamera){const a=Ye.length();r=this._clampDistance(a*this._scale);const c=a-r;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),o=!!c}else if(this.object.isOrthographicCamera){const a=new L(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),o=c!==this.object.zoom;const l=new L(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(a),this.object.updateMatrixWorld(),r=Ye.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;r!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(r).add(this.object.position):(Ra.origin.copy(this.object.position),Ra.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Ra.direction))<oM?this.object.lookAt(this.target):(xu.setFromNormalAndCoplanarPoint(this.object.up,this.target),Ra.intersectPlane(xu,this.target))))}else if(this.object.isOrthographicCamera){const r=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),r!==this.object.zoom&&(this.object.updateProjectionMatrix(),o=!0)}return this._scale=1,this._performCursorZoom=!1,o||this._lastPosition.distanceToSquared(this.object.position)>ol||8*(1-this._lastQuaternion.dot(this.object.quaternion))>ol||this._lastTargetPosition.distanceToSquared(this.target)>ol?(this.dispatchEvent(Mu),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?xn/60*this.autoRotateSpeed*t:xn/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Ye.setFromMatrixColumn(e,0),Ye.multiplyScalar(-t),this._panOffset.add(Ye)}_panUp(t,e){this.screenSpacePanning===!0?Ye.setFromMatrixColumn(e,1):(Ye.setFromMatrixColumn(e,0),Ye.crossVectors(this.object.up,Ye)),Ye.multiplyScalar(t),this._panOffset.add(Ye)}_pan(t,e){const i=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;Ye.copy(s).sub(this.target);let o=Ye.length();o*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*o/i.clientHeight,this.object.matrix),this._panUp(2*e*o/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),s=t-i.left,o=e-i.top,r=i.width,a=i.height;this._mouse.x=s/r*2-1,this._mouse.y=-(o/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(xn*this._rotateDelta.x/e.clientHeight),this._rotateUp(xn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(xn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(-xn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(xn*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(-xn*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(i,s)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,o=Math.sqrt(i*i+s*s);this._dollyStart.set(0,o)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),o=.5*(t.pageY+i.y);this._rotateEnd.set(s,o)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(xn*this._rotateDelta.x/e.clientHeight),this._rotateUp(xn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,o=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,o),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const r=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(r,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new J,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,i={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function rM(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function aM(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function cM(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(np),this.state=Se.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function lM(n){let t;switch(n.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Ao.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=Se.DOLLY;break;case Ao.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=Se.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=Se.ROTATE}break;case Ao.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=Se.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=Se.PAN}break;default:this.state=Se.NONE}this.state!==Se.NONE&&this.dispatchEvent(Gh)}function hM(n){switch(this.state){case Se.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case Se.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case Se.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function dM(n){this.enabled===!1||this.enableZoom===!1||this.state!==Se.NONE||(n.preventDefault(),this.dispatchEvent(Gh),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(np))}function uM(n){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(n)}function fM(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case xo.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=Se.TOUCH_ROTATE;break;case xo.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=Se.TOUCH_PAN;break;default:this.state=Se.NONE}break;case 2:switch(this.touches.TWO){case xo.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=Se.TOUCH_DOLLY_PAN;break;case xo.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=Se.TOUCH_DOLLY_ROTATE;break;default:this.state=Se.NONE}break;default:this.state=Se.NONE}this.state!==Se.NONE&&this.dispatchEvent(Gh)}function pM(n){switch(this._trackPointer(n),this.state){case Se.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case Se.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case Se.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case Se.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=Se.NONE}}function mM(n){this.enabled!==!1&&n.preventDefault()}function gM(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function _M(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const sp=new L(-.55,.55,.62).normalize(),vM=`
  varying vec3 vDirection;
  void main() {
    vDirection = normalize(position);
    vec4 clip = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    gl_Position = clip.xyww;
  }
`,MM=`
  uniform vec3 uTop;
  uniform vec3 uHorizon;
  uniform vec3 uSun;
  uniform vec3 uSunDirection;
  varying vec3 vDirection;
  void main() {
    float height = vDirection.y;
    vec3 color = mix(uHorizon, uTop, smoothstep(-0.02, 0.55, height));
    float sun = max(dot(normalize(vDirection), uSunDirection), 0.0);
    color += uSun * (pow(sun, 18.0) * 0.35 + pow(sun, 600.0) * 1.5);
    gl_FragColor = vec4(color, 1.0);
    #include <colorspace_fragment>
  }
`;function op({top:n=6262719,horizon:t=15785144,sun:e=16767392}={}){const i=new Ai({uniforms:{uTop:{value:new Wt(n)},uHorizon:{value:new Wt(t)},uSun:{value:new Wt(e)},uSunDirection:{value:sp}},vertexShader:vM,fragmentShader:MM,side:vn,depthWrite:!1}),s=new be(new dn(1e3,32,16),i);return s.frustumCulled=!1,s.renderOrder=-1,s}function rp({extent:n,mapSize:t=2048,distance:e=200,intensity:i=2.6}){const s=new ut;s.add(new Jv(13886192,9074262,1.15));const o=new eM(16769205,i);return o.position.copy(sp).multiplyScalar(e),o.castShadow=!0,o.shadow.mapSize.set(t,t),o.shadow.bias=-4e-4,o.shadow.normalBias=.02,s.add(o,o.target),ap(o,n,e),{group:s,sun:o}}function ap(n,t,e){const i=n.shadow.camera;i.left=i.bottom=-t,i.right=i.top=t,i.near=e*.2,i.far=e*2,i.updateProjectionMatrix()}function fn(n=1){let t=n>>>0;const e=()=>{t=t+1831565813|0;let i=Math.imul(t^t>>>15,1|t);return i=i+Math.imul(i^i>>>7,61|i)^i,((i^i>>>14)>>>0)/4294967296};return{next:e,range:(i,s)=>i+(s-i)*e(),int:(i,s)=>Math.floor(i+(s-i+1)*e()),pick:i=>i[Math.floor(e()*i.length)],chance:i=>e()<i}}function cp(n){let t=2166136261;for(let e=0;e<n.length;e++)t^=n.charCodeAt(e),t=Math.imul(t,16777619);return t>>>0}function ke(n,{width:t=256,height:e=t,tile:i=null},s){const o=document.createElement("canvas");o.width=t,o.height=e;const r=o.getContext("2d");s(r,t,e,fn(cp(n)));const a=new Zr(o);return a.colorSpace=sn,a.anisotropy=8,i&&(a.wrapS=a.wrapT=Zi,a.repeat.set(1/i,1/i)),a}const Io=([n,t,e],i=1)=>`rgba(${n|0}, ${t|0}, ${e|0}, ${i})`;function jo(n,t,e,i=1){const s=1+(n.next()-.5)*e;return Io(t.map(o=>Math.min(255,o*s)),i)}function Ce(n,t,e,i){n.fillStyle=Io(i),n.fillRect(0,0,t,e)}function ti(n,t,e,i,{count:s,color:o,amount:r=.3,size:a=2,alpha:c=1}){for(let l=0;l<s;l++){n.fillStyle=jo(i,o,r,c);const h=.6+i.next()*a;n.fillRect(i.next()*t,i.next()*e,h,h)}}function un(n,t,e,i,{count:s,color:o,radius:r,alpha:a}){for(let c=0;c<s;c++){const l=i.next()*t,h=i.next()*e,d=r*(.5+i.next());for(const[f,p]of[[0,0],[-t,0],[t,0],[0,-e],[0,e]]){const m=n.createRadialGradient(l+f,h+p,0,l+f,h+p,d);m.addColorStop(0,jo(i,o,.2,a)),m.addColorStop(1,Io(o,0)),n.fillStyle=m,n.fillRect(l+f-d,h+p-d,d*2,d*2)}}}function xM(n,t,e,i,s,o){n.fillRect(t,e,i,s),t<0&&n.fillRect(t+o,e,i,s),t+i>o&&n.fillRect(t-o,e,i,s)}function Dr(n,t,e,{top:i,bottom:s,courseHeight:o,minLength:r,maxLength:a,mortar:c,color:l,amount:h}){for(let d=i;d<s;d+=o){const f=Math.min(o,s-d)-c;let p=-e.next()*a;for(;p<t;){const m=r+e.next()*(a-r);n.fillStyle=jo(e,l,h),xM(n,p+c/2,d+c/2,m-c,f,t),p+=m}}}const yM=()=>ke("banded",{tile:6},(n,t,e,i)=>{Ce(n,t,e,[176,170,152]),Dr(n,t,i,{top:0,bottom:176,courseHeight:22,minLength:34,maxLength:72,mortar:3,color:[206,200,182],amount:.14}),Dr(n,t,i,{top:176,bottom:256,courseHeight:10,minLength:22,maxLength:30,mortar:3.5,color:[158,66,44],amount:.3}),ti(n,t,e,i,{count:2500,color:[110,90,70],amount:.4,size:1.4,alpha:.18})}),yu=()=>ke("ashlar",{tile:4},(n,t,e,i)=>{Ce(n,t,e,[166,162,150]),Dr(n,t,i,{top:0,bottom:e,courseHeight:32,minLength:40,maxLength:96,mortar:3,color:[198,194,180],amount:.13}),ti(n,t,e,i,{count:3e3,color:[120,105,85],amount:.4,size:1.5,alpha:.2})}),SM=()=>ke("brick",{tile:2},(n,t,e,i)=>{Ce(n,t,e,[196,158,132]),Dr(n,t,i,{top:0,bottom:e,courseHeight:12.8,minLength:38,maxLength:48,mortar:4,color:[160,70,46],amount:.3})}),Su=()=>ke("plaster",{tile:8},(n,t,e,i)=>{Ce(n,t,e,[232,214,182]),un(n,t,e,i,{count:40,color:[205,180,140],radius:40,alpha:.35}),un(n,t,e,i,{count:30,color:[245,232,205],radius:30,alpha:.4}),ti(n,t,e,i,{count:1500,color:[150,125,95],size:1.2,alpha:.2})}),bM=()=>ke("marble",{tile:3},(n,t,e,i)=>{Ce(n,t,e,[246,243,236]),un(n,t,e,i,{count:20,color:[228,224,216],radius:50,alpha:.5}),n.lineWidth=1.2;for(let s=0;s<16;s++){n.strokeStyle=`rgba(120, 112, 104, ${.08+i.next()*.14})`,n.beginPath();const o=i.next()*e;n.moveTo(-10,o),n.bezierCurveTo(t*.3,o+i.range(-60,60),t*.6,o+i.range(-60,60),t+10,o+i.range(-20,20)),n.stroke()}}),EM=()=>ke("granite",{tile:2},(n,t,e,i)=>{Ce(n,t,e,[178,120,106]),ti(n,t,e,i,{count:5e3,color:[70,45,45],size:2,alpha:.5}),ti(n,t,e,i,{count:4e3,color:[235,215,205],size:1.8,alpha:.5})}),wM=()=>ke("roof",{tile:2},(n,t,e,i)=>{Ce(n,t,e,[110,50,32]);const s=16;for(let o=0;o<e/s;o++){const r=o%2?s/2:0;for(let a=-s;a<t+s;a+=s){const c=[184+i.range(-20,20),92+i.range(-15,15),58+i.range(-10,10)],l=n.createLinearGradient(a+r,0,a+r+s,0);l.addColorStop(0,Io(c.map(h=>h*.62))),l.addColorStop(.5,Io(c)),l.addColorStop(1,Io(c.map(h=>h*.62))),n.fillStyle=l,n.fillRect(a+r,o*s,s-1,s-2)}}}),TM=()=>ke("lead",{tile:4},(n,t,e,i)=>{Ce(n,t,e,[140,148,152]),un(n,t,e,i,{count:30,color:[120,130,132],radius:40,alpha:.4});for(let s=0;s<t;s+=32){n.fillStyle="rgba(60, 66, 70, 0.55)",n.fillRect(s,0,2,e),n.fillStyle="rgba(210, 215, 218, 0.35)",n.fillRect(s+2,0,1,e);const o=s/32%2?32:0;for(let r=o;r<e;r+=64)n.fillStyle="rgba(70, 76, 80, 0.4)",n.fillRect(s,r,32,1.5)}}),AM=()=>ke("bronzePlates",{tile:3},(n,t,e,i)=>{Ce(n,t,e,[120,84,40]);const s=64;for(let o=0;o<e;o+=s)for(let r=0;r<t;r+=s){n.fillStyle=jo(i,[214,168,80],.25),n.fillRect(r+2,o+2,s-4,s-4),n.fillStyle="rgba(255, 236, 170, 0.35)",n.fillRect(r+6,o+6,s-20,3),n.fillStyle="rgba(70, 45, 20, 0.8)";for(const[a,c]of[[8,8],[s-10,8],[8,s-10],[s-10,s-10]])n.fillRect(r+a,o+c,3,3)}}),bu=()=>ke("wood",{tile:2},(n,t,e,i)=>{Ce(n,t,e,[92,62,38]);for(let s=0;s<e;s+=16){n.fillStyle=jo(i,[132,92,58],.25),n.fillRect(0,s+1,t,14),n.strokeStyle="rgba(70, 45, 25, 0.35)";for(let o=0;o<3;o++){n.beginPath();const r=s+3+i.next()*10;n.moveTo(0,r),n.bezierCurveTo(t*.3,r+i.range(-2,2),t*.7,r+i.range(-2,2),t,r),n.stroke()}}}),RM=()=>ke("sail",{tile:4},(n,t,e,i)=>{Ce(n,t,e,[238,226,198]),un(n,t,e,i,{count:20,color:[220,204,170],radius:40,alpha:.4});for(let s=0;s<t;s+=32)n.fillStyle="rgba(160, 140, 110, 0.4)",n.fillRect(s,0,1.5,e)}),PM=()=>ke("grass",{tile:6},(n,t,e,i)=>{Ce(n,t,e,[112,132,72]),un(n,t,e,i,{count:50,color:[88,112,58],radius:30,alpha:.45}),un(n,t,e,i,{count:40,color:[150,160,90],radius:26,alpha:.35}),ti(n,t,e,i,{count:5e3,color:[80,100,50],size:1.6,alpha:.35})}),CM=()=>ke("sand",{tile:4},(n,t,e,i)=>{Ce(n,t,e,[216,192,145]),un(n,t,e,i,{count:30,color:[200,172,125],radius:30,alpha:.4}),ti(n,t,e,i,{count:4e3,color:[170,145,105],size:1.3,alpha:.4})}),IM=()=>ke("dirt",{tile:4},(n,t,e,i)=>{Ce(n,t,e,[150,122,90]),un(n,t,e,i,{count:40,color:[120,98,72],radius:30,alpha:.4}),ti(n,t,e,i,{count:4e3,color:[90,75,60],size:2,alpha:.4})}),LM=()=>ke("paving",{tile:3},(n,t,e,i)=>{Ce(n,t,e,[150,140,122]),Dr(n,t,i,{top:0,bottom:e,courseHeight:42.67,minLength:40,maxLength:80,mortar:3,color:[200,190,168],amount:.12}),ti(n,t,e,i,{count:2e3,color:[120,110,95],size:1.3,alpha:.25})}),DM=()=>ke("mosaic",{tile:8,width:512},(n,t,e,i)=>{const s=[[226,214,190],[176,64,46],[52,84,110],[196,150,60],[70,110,70],[40,34,30]];for(let o=0;o<e;o+=4)for(let r=0;r<t;r+=4){const a=r<24||o<24||r>t-28||o>e-28,c=Math.hypot(r-t/2,o-e/2)<70&&i.chance(.7),l=a?s[(r+o>>3)%3===0?1:3]:c?i.pick(s.slice(1)):s[0];n.fillStyle=jo(i,l,.15),n.fillRect(r,o,3.5,3.5)}}),UM=()=>ke("cityGround",{tile:10},(n,t,e,i)=>{Ce(n,t,e,[212,194,156]),un(n,t,e,i,{count:20,color:[198,178,138],radius:60,alpha:.2})}),NM=()=>ke("mapMeadow",{tile:36},(n,t,e,i)=>{Ce(n,t,e,[134,168,84]),un(n,t,e,i,{count:16,color:[118,154,72],radius:80,alpha:.22}),un(n,t,e,i,{count:10,color:[160,178,96],radius:70,alpha:.18})}),OM=()=>ke("mapPines",{tile:36},(n,t,e,i)=>{Ce(n,t,e,[66,104,58]),un(n,t,e,i,{count:18,color:[50,84,46],radius:70,alpha:.3}),un(n,t,e,i,{count:10,color:[104,134,70],radius:50,alpha:.22})}),FM=()=>ke("mapScrub",{tile:36},(n,t,e,i)=>{Ce(n,t,e,[150,126,86]),un(n,t,e,i,{count:14,color:[164,106,72],radius:60,alpha:.3}),un(n,t,e,i,{count:12,color:[118,128,72],radius:45,alpha:.28})}),kM=()=>{const n=ke("hieroglyphs",{width:128,height:1024},(t,e,i,s)=>{Ce(t,e,i,[182,122,106]),ti(t,e,i,s,{count:7e3,color:[80,50,48],size:2,alpha:.45}),ti(t,e,i,s,{count:5e3,color:[236,214,204],size:1.6,alpha:.45}),t.strokeStyle=t.fillStyle="rgba(78, 44, 38, 0.75)",t.lineWidth=3,t.strokeRect(38,40,52,i-60);for(let o=60;o<i-50;o+=38)switch(t.beginPath(),s.int(0,5)){case 0:t.arc(64,o+14,9,0,Math.PI*2),t.stroke();break;case 1:t.ellipse(64,o+16,7,14,0,0,Math.PI*2),t.stroke(),t.fillRect(52,o+30,24,3);break;case 2:t.arc(60,o+8,5,0,Math.PI*2),t.fill(),t.moveTo(60,o+12),t.lineTo(76,o+28),t.lineTo(52,o+28),t.fill();break;case 3:for(let a=0;a<3;a++){t.moveTo(50,o+8+a*8);for(let c=0;c<4;c++)t.lineTo(54+c*8,o+(c%2?4:12)+a*8)}t.stroke();break;case 4:t.arc(64,o+8,6,0,Math.PI*2),t.moveTo(64,o+14),t.lineTo(64,o+32),t.moveTo(54,o+19),t.lineTo(74,o+19),t.stroke();break;default:t.fillRect(50,o+8,28,5),t.fillRect(61,o+15,6,16);break}});return n.wrapS=Zi,n.repeat.set(4,1),n},zM=n=>ke(`flag-${n}`,{width:128,height:80},(t,e,i)=>{switch(n){case"genoa":Ce(t,e,i,[244,240,232]),t.fillStyle="#c0182a",t.fillRect(e*.42,0,e*.16,i),t.fillRect(0,i*.38,e,i*.24);break;case"venice":Ce(t,e,i,[150,22,34]),t.fillStyle="#e9b949",t.beginPath(),t.arc(e*.38,i*.36,11,0,Math.PI*2),t.fill(),t.fillRect(e*.3,i*.45,e*.3,i*.2),t.beginPath(),t.moveTo(e*.45,i*.45),t.lineTo(e*.72,i*.18),t.lineTo(e*.62,i*.5),t.fill(),t.fillRect(e*.32,i*.65,4,14),t.fillRect(e*.54,i*.65,4,14);break;case"imperial":Ce(t,e,i,[92,31,99]),t.fillStyle="#efc458",t.fillRect(e*.45,0,e*.1,i),t.fillRect(0,i*.42,e,i*.16);break;default:Ce(t,e,i,[150,24,36]),t.fillStyle="#efc458",t.fillRect(e*.45,0,e*.1,i),t.fillRect(0,i*.42,e,i*.16),t.font="bold 26px Georgia, serif",t.textAlign="center",t.textBaseline="middle";for(const[s,o]of[[.22,.22],[.78,.22],[.22,.8],[.78,.8]])t.fillText("B",e*s,i*o)}}),BM=`
  #include <fog_pars_vertex>
  varying vec2 vLocal;
  varying vec3 vWorld;
  void main() {
    vLocal = position.xz;
    vec4 world = modelMatrix * vec4(position, 1.0);
    vWorld = world.xyz;
    vec4 mvPosition = viewMatrix * world;
    gl_Position = projectionMatrix * mvPosition;
    #include <fog_vertex>
  }
`,HM=`
  uniform float uTime;
  uniform float uScale;
  uniform vec3 uDeep;
  uniform vec3 uShallow;
  uniform vec3 uSky;
  uniform vec3 uSunDir;
  varying vec2 vLocal;
  varying vec3 vWorld;
  #include <fog_pars_fragment>

  float waves(vec2 p) {
    return sin(p.x * 1.7 + uTime * 0.9) * 0.35
         + sin(p.y * 2.3 - uTime * 0.7) * 0.3
         + sin((p.x * 0.8 + p.y * 1.4) * 2.9 + uTime * 1.6) * 0.18
         + sin((p.y * 0.6 - p.x * 1.9) * 4.1 - uTime * 2.1) * 0.1;
  }

  void main() {
    vec2 p = vLocal * uScale;
    float e = 0.05;
    float h = waves(p);
    vec3 normal = normalize(vec3(
      -(waves(p + vec2(e, 0.0)) - h) / e * 0.1,
      1.0,
      -(waves(p + vec2(0.0, e)) - h) / e * 0.1
    ));
    vec3 view = normalize(cameraPosition - vWorld);
    float fresnel = pow(1.0 - max(dot(normal, view), 0.0), 4.0);
    vec3 color = mix(uDeep, uShallow, 0.4 + 0.25 * h);
    color = mix(color, uSky, fresnel * 0.75);
    float glint = pow(max(dot(reflect(-uSunDir, normal), view), 0.0), 140.0);
    color += vec3(1.0, 0.9, 0.7) * glint * 0.9;
    gl_FragColor = vec4(color, 1.0);
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
    #include <fog_fragment>
  }
`,lp=new Set;function hp({scale:n=1,deep:t=2052200,shallow:e=3968152,sky:i=13032418}={}){const s=new Ai({uniforms:Of.merge([gt.fog,{uTime:{value:0},uScale:{value:n},uDeep:{value:new Wt(t)},uShallow:{value:new Wt(e)},uSky:{value:new Wt(i)},uSunDir:{value:new L(-.55,.55,.62).normalize()}}]),vertexShader:BM,fragmentShader:HM,fog:!0});return lp.add(s),s}function GM(n){for(const t of lp)t.uniforms.uTime.value=n}const le=n=>new _e({roughness:.88,metalness:0,...n}),u={banded:le({map:yM()}),stone:le({map:yu()}),stoneDark:le({map:yu(),color:10195330}),marble:le({map:bM(),roughness:.45}),brick:le({map:SM()}),plaster:le({map:Su()}),plasterOchre:le({map:Su(),color:15778970}),granite:le({map:EM(),roughness:.5}),hieroglyphs:le({map:kM(),roughness:.5}),porphyry:le({color:7218232,roughness:.4}),roof:le({map:wM(),roughness:.75}),lead:le({map:TM(),roughness:.5,metalness:.4}),gold:le({color:14725194,metalness:1,roughness:.28}),bronze:le({color:8804655,metalness:.9,roughness:.42}),gildedBronze:le({map:AM(),metalness:.75,roughness:.35}),iron:le({color:3684155,metalness:.85,roughness:.5}),wood:le({map:bu()}),hull:le({map:bu(),color:13674114,side:En}),sail:le({map:RM(),side:En,roughness:1}),imperialPurple:le({color:6037347,side:En}),rope:le({color:9074002}),opening:le({color:1775122,roughness:1}),fire:new Nh({color:16757575}),grass:le({map:PM()}),sand:le({map:CM()}),dirt:le({map:IM()}),paving:le({map:LM()}),mosaic:le({map:DM(),roughness:.6}),foliage:le({color:3033644}),foliageLight:le({color:5928e3}),trunk:le({color:5980977}),water:hp({scale:.12}),waterSide:le({color:2051939,roughness:.3})},$i=new Map;function Gn(n,t){const e=`${n}:${t}`;if(!$i.has(e)){const i=u[n].clone();i.color=new Wt(t),$i.set(e,i)}return $i.get(e)}function Un(n){const t=`cloth:${n}`;return $i.has(t)||$i.set(t,le({color:n,side:En,roughness:.95})),$i.get(t)}function VM(n){const t=`banner:${n}`;return $i.has(t)||$i.set(t,le({map:zM(n),side:En,roughness:.95})),$i.get(t)}function Jo(n,t=!1){const e=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),o={},r={},a=n[0].morphTargetsRelative,c=new Le;let l=0;for(let h=0;h<n.length;++h){const d=n[h];let f=0;if(e!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const p in d.attributes){if(!i.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;o[p]===void 0&&(o[p]=[]),o[p].push(d.attributes[p]),f++}if(f!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const p in d.morphAttributes){if(!s.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;r[p]===void 0&&(r[p]=[]),r[p].push(d.morphAttributes[p])}if(t){let p;if(e)p=d.index.count;else if(d.attributes.position!==void 0)p=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,p,h),l+=p}}if(e){let h=0;const d=[];for(let f=0;f<n.length;++f){const p=n[f].index;for(let m=0;m<p.count;++m)d.push(p.getX(m)+h);h+=n[f].attributes.position.count}c.setIndex(d)}for(const h in o){const d=Eu(o[h]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,d)}for(const h in r){const d=r[h][0].length;if(d===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let f=0;f<d;++f){const p=[];for(let v=0;v<r[h].length;++v)p.push(r[h][v][f]);const m=Eu(p);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(m)}}return c}function Eu(n){let t,e,i,s=-1,o=0;for(let l=0;l<n.length;++l){const h=n[l];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=h.normalized),i!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;o+=h.count*e}const r=new t(o),a=new Bn(r,e,i);let c=0;for(let l=0;l<n.length;++l){const h=n[l];if(h.isInterleavedBufferAttribute){const d=c/e;for(let f=0,p=h.count;f<p;f++)for(let m=0;m<e;m++){const v=h.getComponent(f,m);a.setComponent(f+d,m,v)}}else r.set(h.array,c);c+=h.count*e}return s!==void 0&&(a.gpuType=s),a}function Qo(n,t,e){const i=n.attributes.uv;for(let s=0;s<i.count;s++)i.setXY(s,i.getX(s)*t,i.getY(s)*e);return n}function nn(n,t,e){const i=new Ti(n,t,e),s=[[e,t],[e,t],[n,e],[n,e],[n,t],[n,t]],o=i.attributes.uv;for(let r=0;r<6;r++)for(let a=0;a<4;a++){const c=r*4+a;o.setXY(c,o.getX(c)*s[r][0],o.getY(c)*s[r][1])}return i.translate(0,t/2,0)}function We(n,t,e,i=16,{open:s=!1,thetaStart:o=0,thetaLength:r=Math.PI*2}={}){const a=new ji(n,t,e,i,1,s,o,r),c=Math.max(n,t),l=(i+1)*2,h=a.attributes.uv;for(let d=0;d<h.count;d++)d<l?h.setXY(d,h.getX(d)*c*r,h.getY(d)*e):h.setXY(d,h.getX(d)*2*c,h.getY(d)*2*c);return a.translate(0,e/2,0)}function Vh(n,t,e=16){const i=new Zo(n,t,e);return Qo(i,Math.PI*2*n,Math.hypot(n,t)),i.translate(0,t/2,0)}function dp(n,{heightScale:t=1,segments:e=24,phiLength:i=Math.PI*2}={}){const s=new dn(n,e,Math.max(4,Math.round(e/3)),0,i,0,Math.PI/2);return Qo(s,n*i,n*Math.PI/2),s.scale(1,t,1)}function WM(n,t,e){const i=new Zo(Math.SQRT1_2,1,4).rotateY(Math.PI/4).scale(n,e,t);return Qo(i,(n+t)*2,Math.hypot(e,Math.max(n,t)/2)),i.translate(0,e/2,0)}function XM(n,t,e,i=.5){const s=t/2+i,o=new Fe([new J(-s,0),new J(s,0),new J(0,e)]);return new Rn(o,{depth:n+i*2,bevelEnabled:!1}).rotateY(Math.PI/2).translate(-(n/2+i),0,0)}function Wh(n,t,e,i=.5){if(n<t)return Wh(t,n,e,i).rotateY(Math.PI/2);const s=n/2+i,o=t/2+i,r=Math.max(s-o,0),a=[-s,0,-o],c=[s,0,-o],l=[s,0,o],h=[-s,0,o],d=[-r,e,0],f=[r,e,0],p=[[h,l,f],[h,f,d],[c,a,d],[c,d,f],[a,h,d],[l,c,f],[a,c,l],[a,l,h]],m=[],v=[];for(const[g,S]of p.entries()){const x=g===4||g===5;for(const[M,C,T]of S)m.push(M,C,T),v.push(x?T:M,C*1.6)}const _=new Le;return _.setAttribute("position",new Bt(m,3)),_.setAttribute("uv",new Bt(v,2)),_.computeVertexNormals(),_}function Ur(n,t,e=0,i=0){const s=n/2,o=new Fe;return o.moveTo(e-s,i),o.lineTo(e+s,i),o.lineTo(e+s,i+t-s),o.absarc(e,i+t-s,s,0,Math.PI,!1),o.lineTo(e-s,i),o}function ne(n,t){return new ii(Ur(n,t),6)}function Tn({length:n,height:t,thickness:e,openings:i=[],curveSegments:s=10}){const o=n/2,r=[...i].sort((l,h)=>l.x-h.x),a=new Fe;a.moveTo(-o,0);for(const{x:l,width:h,bottom:d,spring:f}of r){if(d>0)continue;const p=h/2;a.lineTo(l-p,0),a.lineTo(l-p,f),a.absarc(l,f,p,Math.PI,0,!0),a.lineTo(l+p,0)}a.lineTo(o,0),a.lineTo(o,t),a.lineTo(-o,t),a.lineTo(-o,0);for(const{x:l,width:h,bottom:d,spring:f}of r)d<=0||a.holes.push(Ur(h,f-d+h/2,l,d));return new Rn(a,{depth:e,bevelEnabled:!1,curveSegments:s}).translate(0,0,-e/2)}function qi(n,t,{width:e,bottom:i=0,spring:s,margin:o=0}){const a=(n-o*2)/t;return Array.from({length:t},(c,l)=>({x:-n/2+o+a*(l+.5),width:e,bottom:i,spring:s}))}function ic(n,t,e=t+2){const i=new Fe(n.map(([o,r])=>new J(o,-r)));return new Rn(i,{depth:e,bevelEnabled:!1}).rotateX(-Math.PI/2).translate(0,t-e,0)}function se(n,{merlon:t=.9,gap:e=.7,height:i=1.1,thickness:s=.7}={}){const o=Math.max(1,Math.floor((n+e)/(t+e))),r=o*t+(o-1)*e,a=[];for(let c=0;c<o;c++)a.push(nn(t,i,s).translate(-r/2+t/2+c*(t+e),0,0));return Jo(a)}function $s(n,{count:t=16,merlon:e=.9,height:i=1.1,thickness:s=.7}={}){const o=[];for(let r=0;r<t;r++){const a=r/t*Math.PI*2,c=nn(e,i,s);c.rotateY(Math.PI/2-a),c.translate(Math.cos(a)*n,0,Math.sin(a)*n),o.push(c)}return Jo(o)}function up(n,t,e,i=.6,s=8){const o=[],r=[],a=[];let c=0;for(let d=0;d<=s;d++){a[d]=[];for(let f=0;f<=s-d;f++){const p=d/s,m=f/s,v=1-p-m,_=i*27*p*m*v;o.push(n.x*v+t.x*p+e.x*m,n.y*v+t.y*p+e.y*m,n.z*v+t.z*p+e.z*m+_),r.push(p*4,m*4),a[d][f]=c++}}const l=[];for(let d=0;d<s;d++)for(let f=0;f<s-d;f++)l.push(a[d][f],a[d+1][f],a[d][f+1]),f<s-d-1&&l.push(a[d+1][f],a[d+1][f+1],a[d][f+1]);const h=new Le;return h.setAttribute("position",new Bt(o,3)),h.setAttribute("uv",new Bt(r,2)),h.setIndex(l),h.computeVertexNormals(),h}function YM(n,t,e=.8){const i=new ni(n,t,8,8).translate(0,t/2,0),s=i.attributes.position;for(let o=0;o<s.count;o++){const r=s.getX(o)/n+.5,a=s.getY(o)/t;s.setZ(o,e*Math.sin(Math.PI*r)*Math.sin(Math.PI*Math.min(1,a*1.1)))}return Qo(i,n,t),i.computeVertexNormals(),i}function U(n,t,e=0,i=0,s=0){const o=new be(n,t);return o.position.set(e,i,s),o.castShadow=!0,o.receiveShadow=!0,o}const y=(n,t,e,i,s,o,r)=>U(nn(n,t,e),i,s,o,r),z=(n,t,e,i,s,o,r,a=16,c)=>U(We(n,t,e,a,c),i,s,o,r),tr=(n,t,e,i,s,o,r=16)=>U(Vh(n,t,r),e,i,s,o),Me=(n,t,e,i,s,o)=>U(dp(n,o),t,e,i,s),xc=(n,t,e,i,s,o,r)=>U(WM(n,t,e),i,s,o,r),xe=(n,t,e,i,s,o,r,a)=>U(XM(n,t,e,a),i,s,o,r),Oe=(n,t,e,i,s,o,r,a)=>U(Wh(n,t,e,a),i,s,o,r);function Xt(n,t,e,i=0,s=0,o=0){const r=Qo(new ni(n,t).rotateX(-Math.PI/2),n,t);return U(r,e,i,s,o)}function $M(n,t=3){const e=new ut;return e.add(U(new Qi(n,64).rotateX(-Math.PI/2),u.water)),e.add(U(new ji(n,n,t,64,1,!0).translate(0,-t/2,0),u.waterSide)),e}function Ne(n,t,e){return n.rotation.y=Math.atan2(t,e),n}function qe(n,t,e,i=0,s=0,o=0){return n.position.set(s+Math.cos(t)*e,i,o+Math.sin(t)*e),n.rotation.y=Math.PI/2-t,n}function qt({count:n,spacing:t,width:e,height:i,y:s=0,skip:o=()=>!1,material:r=u.opening}){const a=new ut,c=ne(e,i);for(let l=0;l<n;l++){const h=(l-(n-1)/2)*t;o(h)||a.add(U(c,r,h,s,0))}return a}function He({length:n,count:t,height:e,radius:i=.4,material:s=u.marble,capitalMaterial:o=s}){const r=new ut,a=We(i*.85,i,e-i*1.6,10),c=nn(i*2.4,i*.6,i*2.4),l=We(i*1.6,i*.9,i,10),h=t>1?n/(t-1):0;for(let d=0;d<t;d++){const f=-n/2+h*d;r.add(U(c,s,f,0,0)),r.add(U(a,s,f,i*.6,0)),r.add(U(l,o,f,e-i,0))}return r}function jr(n,t,e,i,s=u.stone){const o=new ut;for(let r=0;r<t;r++)o.add(y(n,e*(r+1),i,s,0,0,r*i+i/2));return o}const qM=Vh(1,1,8),fp=We(.15,.2,1,6),ZM=new Ko(1,1);function ei(n=12,t=0,e=0,i=0){const s=new ut,o=U(fp,u.trunk);o.scale.set(n/12,n*.12,n/12);const r=U(qM,u.foliage,0,n*.1,0);return r.scale.set(n*.13,n*.9,n*.13),s.add(o,r),s.position.set(t,e,i),s}function yi(n=8,t=0,e=0,i=0){const s=new ut,o=U(fp,u.trunk);o.scale.set(n/8,n*.5,n/8);const r=U(ZM,u.foliageLight,0,n*.62,0);return r.scale.set(n*.36,n*.32,n*.36),s.add(o,r),s.position.set(t,e,i),s}function pp({base:n,top:t,height:e,tip:i,strips:s=24}){const o=[{normal:[1,0,0],right:[0,0,-1]},{normal:[0,0,1],right:[1,0,0]},{normal:[-1,0,0],right:[0,0,1]},{normal:[0,0,-1],right:[-1,0,0]}],r=[],a=[],c=new Le,l=({normal:f,right:p},m,v,_)=>[f[0]*m+p[0]*m*v,_,f[2]*m+p[2]*m*v],h=f=>(n+(t-n)*f)/2;o.forEach((f,p)=>{const m=r.length/3;for(let v=0;v<s;v++){const _=v/s,g=(v+1)/s,S=l(f,h(_),-1,e*_),x=l(f,h(_),1,e*_),M=l(f,h(g),1,e*g),C=l(f,h(g),-1,e*g);r.push(...S,...x,...M,...S,...M,...C),a.push(0,_,1,_,1,g,0,_,1,g,0,g)}c.addGroup(m,s*6,p)});const d=r.length/3;for(const f of o)r.push(...l(f,t/2,-1,e),...l(f,t/2,1,e),0,e+i,0),a.push(0,0,1,0,.5,1);return c.addGroup(d,o.length*3,o.length),c.setAttribute("position",new Bt(r,3)),c.setAttribute("uv",new Bt(a,2)),c.computeVertexNormals(),c}function On(n,{width:t=3,height:e=2,pole:i=6}={}){const s=new ut;s.add(z(.08,.1,i,u.wood,0,0,0,6));const o=new ni(t,e,10,4).translate(t/2,0,0),r=new be(o,VM(n));r.position.y=i-e/2-.1,r.castShadow=!0,s.add(r);const a=o.attributes.position.array.slice(),c=o.attributes.position,l=Math.random()*10;return s.userData.animate=h=>{for(let d=0;d<c.count;d++){const f=a[d*3];c.setZ(d,Math.sin(f*1.6-h*4+l)*.12*f)}c.needsUpdate=!0},s}function br([n,t],e=0){return new L(n,e,-t)}function on([n,t],e){let i=!1;for(let s=0,o=e.length-1;s<e.length;o=s++){const[r,a]=e[s],[c,l]=e[o];a>t!=l>t&&n<(c-r)*(t-a)/(l-a)+r&&(i=!i)}return i}function KM([n,t],[e,i],[s,o]){const r=s-e,a=o-i,c=r*r+a*a,l=c===0?0:Math.max(0,Math.min(1,((n-e)*r+(t-i)*a)/c));return Math.hypot(n-(e+l*r),t-(i+l*a))}function jn(n,t,e=!1){let i=1/0;const s=e?t.length:t.length-1;for(let o=0;o<s;o++)i=Math.min(i,KM(n,t[o],t[(o+1)%t.length]));return i}function mp(n,t){const e=[];let i=0,s=0;for(let o=1;o<n.length;o++){const[r,a]=n[o-1],[c,l]=n[o],h=Math.hypot(c-r,l-a),d=[(c-r)/h,(l-a)/h];for(;s<=i+h;){const f=s-i;e.push({point:[r+d[0]*f,a+d[1]*f],dir:d}),s+=t}i+=h}return e}function jM(n,t){return n.map((e,i)=>{const s=n[Math.max(0,i-1)],o=n[Math.min(n.length-1,i+1)],r=o[0]-s[0],a=o[1]-s[1],c=Math.hypot(r,a)||1;return[e[0]-a/c*t,e[1]+r/c*t]})}const yc=.01,An=.3,us=400,bo=[-3,-3],JM=.6,QM=10,gp=n=>1+JM*Math.exp(-((n/QM)**2));function he([n,t]){const[e,i]=[n-bo[0],t-bo[1]],s=gp(Math.hypot(e,i));return[bo[0]+e*s,bo[1]+i*s]}const Xh=([n,t])=>gp(Math.hypot(n-bo[0],t-bo[1])),Xe=n=>n.map(he),rl=n=>[...n].reverse(),Yh=Xe([[-31.9,36.6],[-29.7,35.9],[-27.9,31.4],[-26,29.7],[-25.6,26.4],[-23.3,24.9],[-22.7,22.9],[-19.1,22],[-17.2,19.7],[-16.6,17.8],[-14.4,15.9],[-13.8,14.1],[-12,13.1],[-8.9,12.3],[-7.4,10.8],[-5.9,10.8],[-2.8,9],[1.3,9],[4.3,10.2],[5.5,9.7]]),$h=Xe([[5.5,9.7],[6.6,4.9],[6.4,1.8],[4.9,-2.5],[1.5,-6.2],[-.1,-7.3],[-2,-8.2],[-6,-8.5],[-10.9,-7.2],[-14.5,-7.6],[-20,-8.2],[-26,-8.6],[-31,-8.2],[-34.8,-7.6],[-38,-9.7],[-40.2,-14.8],[-43.5,-19.2],[-46.6,-22.6],[-50.3,-23]]),Wi=Xe([[-50.3,-23],[-50.2,-20.6],[-48.6,-17.6],[-48.8,-16],[-50.1,-9.6],[-49,-3],[-48.3,.4],[-48.8,6.1],[-46.9,11.8],[-42.9,17.3],[-38.6,22.6],[-34,27.4]]),tx=he([-48.7,-17.4]),_p=Xe([[-34,27.4],[-34.5,29.3],[-34.4,32],[-32.7,33.6],[-32.3,34.6],[-31.9,36.6]]),Lo=[...Yh,...$h,...Wi.slice(1),..._p.slice(1,-1)],sc=[...Yh,...$h],oc=Xe([[-9.9,17],[-8.4,19.6],[-5.1,18.9],[-1.6,18.9],[1.2,17.6]]),Nr=Xe([[1.2,17.6],[-2.9,14.7],[-5.1,14.7],[-8.6,15.3],[-9.9,17]]),Do=[...oc,...Nr.slice(1,-1)],ex=he([-5.1,18.9]),nx=[{at:[-4.8,18.6],height:1,radius:3},{at:[-3.5,23.5],height:1.5,radius:4},{at:[1,29.5],height:1.8,radius:5.5}].map(({at:n,height:t,radius:e})=>({at:he(n),height:t,radius:e*Xh(n)})),vp=Xe([[-20.6,28],[-16.2,28.1],[-12.9,24.6],[-10.8,22.6],[-11.9,21.6],[-10.9,18.1],[-9.9,17],[-8.6,15.3],[-5.1,14.7],[-2.9,14.7],[1.2,17.6],[7,21.7],[10,26.7],[11.4,29.3],[13.9,32.1]]),Mp=[...vp,...Xe([[16,36],[12,44],[0,48],[-14,42],[-22,34]])],ix=Xe([[-us,-48],[-86,-38],[-76,-32],[-66,-32.5],[-60.3,-30.3],[-57.5,-25.3],[-54.6,-23.8],[-50.3,-23]]),sx=Xe([[-31.9,36.6],[-32.6,36.9],[-34,37.7],[-35.5,43],[-37.9,45.8],[-37.6,48],[-34.4,51.9],[-28.2,53.7],[-28.7,57.4],[-30,61.5],[-29,63],[-27.6,62.6],[-27.7,59.1],[-26.7,54.4],[-27.3,52.1],[-33.5,48.8],[-34.6,45.3],[-32.5,41],[-28.1,38.3],[-26.5,35.9],[-24.7,32.1],[-23.1,29.7],[-20.6,28],[-16.2,28.1],[-12.9,24.6],[-10.8,22.6],[-11.9,21.6],[-10.9,18.1],[-9.9,17]]),ox=Xe([[1.2,17.6],[7,21.7],[10,26.7],[11.4,29.3],[13.9,32.1],[30.8,38.8],[37.5,43],[44.2,45.7],[47.4,56.6],[50.9,60.3],[52.1,64.6],[55.6,65.9],[53.7,73.8],[54,77],[62.6,80.6],[63.5,85],[64.5,106],[74,124],[66,146],[65,177],[80,240],[100,us]]),xp=[...ix,...rl($h).slice(1),...rl(Yh).slice(1),...sx.slice(1),...rl(Nr).slice(1),...ox.slice(1),[-us,us]],Er=Xe([[110,us],[104,160],[100,135],[83,112],[73,100],[71,83],[70.6,77],[63.7,73.1],[64.5,64.3],[60.7,58.8],[61.4,54.3],[60,50.6],[60.4,44.1],[50.8,38.8],[35.3,26],[31.4,23.7],[27.8,19.6],[24.6,19.3],[22.9,17.2],[22.1,14.3],[23.9,11.8],[25.3,8.3],[26,4.9],[24.9,.7],[25.6,-2.5],[27.6,-6.3],[30.6,-9.8],[33.2,-12.6],[35.2,-14.1],[36.7,-15.6],[36.4,-17.6],[34.6,-20.2],[33.6,-25.9],[33.3,-30.5],[34.6,-33],[37.5,-32.1],[41.4,-32.1],[45,-29.6],[48.7,-33.4],[49.8,-36.4],[48.6,-40.5],[45.8,-42.2],[43.3,-45.3],[45.6,-46.8],[48.2,-44.2],[51.8,-47.7],[54.8,-43.4],[59.3,-44.8],[61.5,-47],[65.6,-49.6],[69.1,-51.7],[76.4,-54.2],[us,-75],[us,us]]),wu=Xe([[24.5,12.5],[31,12.5],[34,22],[28,20]]),Tu=Xe([[36.5,-14.5],[44,-15],[44,-28],[35,-29]]),rx=(n,t=2)=>{let e=n;for(let i=0;i<t;i++)e=e.flatMap((s,o)=>{const r=e[(o+1)%e.length];return[[s[0]*.75+r[0]*.25,s[1]*.75+r[1]*.25],[s[0]*.25+r[0]*.75,s[1]*.25+r[1]*.75]]});return e},Fi=(n,{shore:t,hills:e,bare:i=!1,fade:s=2.5})=>({id:n,shore:rx(Xe(t)),hills:e.map(({at:o,height:r,radius:a})=>({at:he(o),height:r,radius:a*Xh(o)})),bare:i,fade:s}),yp=[Fi("kinaliada",{shore:[[58,-101.9],[65.6,-103],[68.1,-110.8],[63.9,-117.5],[58,-118.6],[54.6,-111.9],[54.6,-105.3]],hills:[{at:[60.9,-110.3],height:2.9,radius:4}],bare:!0,fade:1.5}),Fi("burgazada",{shore:[[68.9,-133.1],[77.3,-135.3],[80.7,-143.1],[76.5,-152],[68.9,-154.2],[63,-148.7],[63.9,-138.6]],hills:[{at:[70.6,-143.1],height:4.2,radius:6}],bare:!1,fade:1.8}),Fi("kasik-adasi",{shore:[[82.8,-146.4],[84.5,-148.7],[84.5,-153.1],[82.8,-154.2],[81.9,-150.9]],hills:[{at:[83.2,-150.1],height:.8,radius:2}],bare:!1,fade:.6}),Fi("heybeliada",{shore:[[89.1,-139.8],[95.8,-138.6],[105.9,-143.1],[107.6,-150.9],[102.5,-158.7],[92.4,-159.8],[87.4,-156.5],[86.6,-147.6]],hills:[{at:[99.2,-147.6],height:3.4,radius:5},{at:[87.4,-149.8],height:2.1,radius:4}],bare:!1,fade:1.8}),Fi("buyukada",{shore:[[115.1,-145.3],[126,-147.6],[132.8,-156.5],[131.9,-167.6],[131.9,-177.6],[126.9,-186.5],[119.3,-188.7],[111.8,-184.3],[110.9,-174.3],[104.2,-168.7],[110.9,-163.1],[110.1,-153.1]],hills:[{at:[122.7,-178.7],height:5,radius:8},{at:[121,-154.2],height:4.1,radius:7}],bare:!1,fade:1.8}),Fi("sedef-adasi",{shore:[[137,-163.1],[142.8,-164.3],[142.8,-170.9],[137.8,-172],[135.3,-167.6]],hills:[{at:[139.5,-167.6],height:1.5,radius:2}],bare:!1,fade:1}),Fi("tavsan-adasi",{shore:[[123.5,-195.4],[126,-196.5],[125.2,-199.9],[122.7,-198.8]],hills:[{at:[124.4,-197.6],height:.5,radius:1}],bare:!1,fade:.6}),Fi("yassiada",{shore:[[11.8,-159.8],[16.8,-160.9],[16.8,-166.5],[12.6,-167.6]],hills:[{at:[14.3,-163.6],height:1,radius:2}],bare:!1,fade:1}),Fi("sivriada",{shore:[[-7.5,-144.2],[-3.3,-145.3],[-4.2,-149.8],[-8.4,-148.7]],hills:[{at:[-5.8,-146.8],height:2.2,radius:2}],bare:!1,fade:.6})],Sp=[-12,1.25],hh=Xe([[-1.5,.3],Sp,[-19.5,4],[-27,1],[-36.3,-5.7],[-43,-12],[-48.7,-17.4]]),dh=Xe([[-19.5,4],[-25.8,11.5],[-32,17],[-38.4,22.8]]),ax=he(Sp),cx=[{at:[2,2],height:1,radius:4},{at:[-11.5,1],height:1.4,radius:3.5},{at:[-14,8.2],height:1.6,radius:4},{at:[-25.8,12],height:1.7,radius:4.5},{at:[-25.8,21],height:1.6,radius:3.5},{at:[-34.5,25.3],height:1.9,radius:4.5},{at:[-38,-6.2],height:1.4,radius:6}].map(({at:n,height:t,radius:e})=>({at:he(n),height:t,radius:e*Xh(n)})),Pa=he([0,9]),Ca=he([-2.4,14.7]),lx=he([20.1,13.9]),hx=Xe([[-3.7,12.5],[-4.4,12.9],[-6.2,13.1],[-7.9,13.6],[-9.5,14.3],[-10.6,15.5],[-11.6,16.7],[-12.6,18],[-13.3,19.4],[-14,21],[-14.5,22.6],[-15.5,23.8],[-16.5,24.9],[-18,25.5],[-19.8,25.7],[-21.5,26.1],[-20.8,24.7],[-18.9,24.5],[-17.5,23.9],[-16.5,22.7],[-15.5,21.6],[-14.9,19.9],[-14.3,18.4],[-13.4,17],[-12.5,15.6],[-11.3,14.6],[-9.6,14.1],[-8,13.5],[-6.5,12.7],[-4.9,12.2]]),Au=Xe([[-50,-32],[-10,-22],[18,-18],[24,-30],[-15,-38]]),Ru=Xe([[14,2],[15,20],[29,32],[42,40],[45,37.5],[33,28],[19,16],[20,2]]);function dx(n){const t=new ut,e=new be(new ni(2e3,2e3).rotateX(-Math.PI/2),hp({scale:.45,deep:1794691,shallow:3839913,sky:11129822}));t.add(e);for(const o of[xp,Er])t.add(Pu(o));for(const{shore:o,bare:r}of yp){const a=r?px:fx;t.add(Pu(o,a),Ia(n,a,{within:o}))}const i=new _e({map:UM(),roughness:.95,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2});for(const o of[Lo,Do])t.add(mx(o,i,.01));t.add(Ia(n,i,{within:Lo}),Ia(n,i,{within:Do})),t.add(Ia(n,bp,{within:Mp,except:Do}));const s=new _e({color:15918792,roughness:.9,polygonOffset:!0,polygonOffsetFactor:-6,polygonOffsetUnits:-6});for(const o of[hh,dh])t.add(U(ux(o,.4,n),s));return t}function Ia(n,t,{within:e,except:i=null}){const o=(T,R)=>(R?Math.ceil(T/.35):Math.floor(T/.35))*.35,r=e.map(([T])=>T),a=e.map(([,T])=>T),[c,l,h,d]=[o(Math.min(...r)),o(Math.max(...r),!0),o(Math.min(...a)),o(Math.max(...a),!0)],f=Math.round((l-c)/.35)+1,p=Math.round((d-h)/.35)+1,m=[],v=[],_=[];for(let T=0;T<p;T++)for(let R=0;R<f;R++){const I=c+R*.35,w=h+T*.35,b=n.heightAt([I,w]);_.push(b),m.push(I,An+.01+b,-w),v.push(I,w)}const g=[],S=(T,R)=>R*f+T,x=(T,R,I)=>{if(Math.max(_[T],_[R],_[I])<.004)return!1;const w=[(m[T*3]+m[R*3]+m[I*3])/3,-(m[T*3+2]+m[R*3+2]+m[I*3+2])/3];return on(w,e)&&!(i&&on(w,i))};for(let T=0;T<p-1;T++)for(let R=0;R<f-1;R++){const[I,w,b,N]=[S(R,T),S(R+1,T),S(R+1,T+1),S(R,T+1)];x(I,w,b)&&g.push(I,w,b),x(I,b,N)&&g.push(I,b,N)}const M=new Le;M.setAttribute("position",new Bt(m,3)),M.setAttribute("uv",new Bt(v,2)),M.setIndex(g),M.computeVertexNormals();const C=new be(M,t.clone());return Object.assign(C.material,{polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-4}),C.receiveShadow=!0,C}function ux(n,t,e){const i=[],s=[];for(const[r,{point:[a,c],dir:[l,h]}]of mp(n,.3).entries()){const d=An+.025+e.heightAt([a,c]),[f,p]=[-h*(t/2),l*(t/2)];if(i.push(a+f,d,-(c+p),a-f,d,-(c-p)),r>0){const m=(r-1)*2;s.push(m,m+1,m+2,m+1,m+3,m+2)}}const o=new Le;return o.setAttribute("position",new Bt(i,3)),o.setIndex(s),o.computeVertexNormals(),o}const bp=new _e({map:NM(),roughness:.95}),fx=new _e({map:OM(),roughness:.95}),px=new _e({map:FM(),roughness:.95});function Pu(n,t=bp){const e=new Fe(n.map(([a,c])=>new J(a,c))),i=2,s=.5,o=new Rn(e,{depth:i,bevelEnabled:!0,bevelThickness:s,bevelSize:.9,bevelSegments:2,curveSegments:1});o.rotateX(-Math.PI/2),o.translate(0,An-i-s,0);const r=new be(o,[t,u.sand]);return r.receiveShadow=!0,r}function mx(n,t,e){const i=new Fe(n.map(([r,a])=>new J(r,a))),s=new ii(i).rotateX(-Math.PI/2),o=new be(s,t);return o.position.y=An+e,o.receiveShadow=!0,o}const La=(n,t,e)=>{const i=Math.min(1,Math.max(0,(e-n)/(t-n)));return i*i*(3-2*i)},Cu=1.2;function gx({footprints:n=[]}={}){const t=([a,c],l)=>l.reduce((h,{at:[d,f],height:p,radius:m})=>h+p*Math.exp(-((a-d)**2+(c-f)**2)/(m*m)),0),e=(a,c)=>La(.6,3,jn(a,c)),i=a=>{if(on(a,Lo)){const c=La(1.2,4,Math.min(jn(a,Wi),jn(a,_p)));return t(a,cx)*e(a,sc)*c}if(on(a,Mp))return t(a,nx)*e(a,vp);for(const{shore:c,hills:l,fade:h}of yp)if(on(a,c))return t(a,l)*La(.3,h,jn(a,c,!0));return 0},s=n.map(({centre:a,distance:c})=>({distance:c,level:i(a)})),o=a=>{let c=i(a);for(const{distance:l,level:h}of s){const d=l(a);d<Cu&&(c+=(h-c)*(1-La(0,Cu,d)))}return c};return{heightAt:o,slopeAt:([a,c])=>[(o([a+.1,c])-o([a-.1,c]))/(2*.1),(o([a,c+.1])-o([a,c-.1]))/(2*.1)]}}const qs=new _e({color:14206882,roughness:.9});function Uo(n,{height:t,thickness:e,y:i=0,offset:s=0,towerSpacing:o=0,towerWidth:r=e*2,towerHeight:a=t*1.5,towerShape:c="square",ground:l=null}){const h=s?jM(n,s):n,d=p=>i+(l?l.heightAt(p):0),f=[];for(let p=1;p<h.length;p++){const[m,v]=h[p-1],[_,g]=h[p],S=Math.hypot(_-m,g-v),x=l?Math.max(1,Math.ceil(S/.4)):1;for(let M=0;M<x;M++){const C=[m+(_-m)*M/x,v+(g-v)*M/x],T=[m+(_-m)*(M+1)/x,v+(g-v)*(M+1)/x],[R,I]=[d(C),d(T)],w=nn(S/x+e,t,e);w.rotateZ(Math.atan2(I-R,S/x)),w.rotateY(Math.atan2(g-v,_-m)),w.translate((C[0]+T[0])/2,(R+I)/2,-(C[1]+T[1])/2),f.push(w)}}if(o>0)for(const{point:p,dir:m}of mp(h,o)){const v=c==="round"?We(r/2,r/2,a,8):nn(r,a,r);v.rotateY(Math.atan2(m[1],m[0])),v.translate(p[0],d(p),-p[1]),f.push(v)}return Jo(f)}function _x(n,{polygon:t,accept:e,orientation:i,builtChance:s=()=>.9,districtSpacing:o=8,block:r=[2.2,1.5],street:a=.26,height:c=[.17,.27],churchChance:l=.08}){const h={houses:[],trees:[],plots:[],churches:[]},d=vx(n,t,o,i),f=Math.ceil(o*1.3/Math.min(...r));for(const p of d)for(let m=-f;m<=f;m++)for(let v=-f;v<=f;v++){const _=vi(p.point,m*r[0],v*r[1],p.angle);!on(_,t)||Mx(d,_)!==p||xx(n,h,{centre:_,angle:p.angle,length:r[0]-a,width:r[1]-a,built:n.next()<s(_),accept:e,polygon:t,height:c,churchChance:l})}return h}function vx(n,t,e,i){const s=t.map(([a])=>a),o=t.map(([,a])=>a),r=[];for(let a=Math.min(...s)+e/2;a<Math.max(...s);a+=e)for(let c=Math.min(...o)+e/2;c<Math.max(...o);c+=e){const l=[a+n.range(-.35,.35)*e,c+n.range(-.35,.35)*e];on(l,t)&&r.push({point:l,angle:i(l)+n.range(-.1,.1)})}if(r.length===0){const a=[s.reduce((c,l)=>c+l)/s.length,o.reduce((c,l)=>c+l)/o.length];r.push({point:a,angle:i(a)})}return r}function Mx(n,t){let e=null,i=1/0;for(const s of n){const o=Math.hypot(t[0]-s.point[0],t[1]-s.point[1]);o<i&&(e=s,i=o)}return e}function vi([n,t],e,i,s){const o=Math.cos(s),r=Math.sin(s);return[n+e*o-i*r,t+e*r+i*o]}function xx(n,t,{centre:e,angle:i,length:s,width:o,built:r,accept:a,polygon:c,height:l,churchChance:h}){const d=[[-1,-1],[1,-1],[1,1],[-1,1]].map(([m,v])=>vi(e,m*s/2,v*o/2,i)),f=d.every(m=>on(m,c));if(!a(e)&&!d.some(a))return;let p=r?"built":n.pick(["garden","garden","orchard","field"]);if(p==="built"&&n.chance(h)&&a(e)&&d.every(a)&&(p="churchyard"),f&&a(e)&&t.plots.push({point:e,angle:i,length:s,width:o,kind:p}),p==="churchyard"){t.churches.push({point:e,angle:0,size:Math.min(.85,o*.75)});for(const m of[-1,1]){const v=vi(e,m*s*.38,-o*.32,i);t.trees.push({point:v,kind:"cypress",size:n.range(.4,.5)})}}else if(p==="built"){yx(n,t,{centre:e,angle:i,length:s,width:o,accept:a,height:l});for(let m=n.int(0,2);m>0;m--){const v=vi(e,n.range(-.25,.25)*s,n.range(-.15,.15)*o,i);a(v)&&t.trees.push({point:v,kind:n.chance(.3)?"cypress":"round",size:n.range(.24,.34)})}}else if(p==="garden"&&a(e))for(let m=n.int(3,7);m>0;m--){const v=vi(e,n.range(-.42,.42)*s,n.range(-.4,.4)*o,i);a(v)&&t.trees.push({point:v,kind:n.chance(.25)?"cypress":"round",size:n.range(.26,.4)})}else if(p==="orchard"&&a(e))for(let v=-s/2+.2;v<s/2-.14;v+=.28)for(let _=-o/2+.2;_<o/2-.14;_+=.28){const g=vi(e,v,_,i);a(g)&&t.trees.push({point:g,kind:"orchard",size:n.range(.15,.19)})}}function yx(n,t,{centre:e,angle:i,length:s,width:o,accept:r,height:a}){const c=n.range(.3,.38),l=[];for(const h of[-1,1])l.push({start:vi(e,-s/2,h*o/2,i),along:0,inward:[0,-h],span:s}),l.push({start:vi(e,h*s/2,-o/2+c,i),along:Math.PI/2,inward:[-h,0],span:o-2*c});for(const{start:h,along:d,inward:f,span:p}of l){const m=i+d;let v=0;for(;v<p-.18;){const _=Math.min(n.range(.32,.5),p-v),g=vi(h,v+_/2,0,m),S=vi(g,f[0]*c/2,f[1]*c/2,i);!n.chance(.05)&&r(S)&&t.houses.push({point:S,angle:m,w:_,d:c,h:n.range(...a),flat:n.chance(.3)}),v+=_+.02}}}function Sx(n){const e=Float32Array.from({length:256},()=>n.next()),i=Uint8Array.from({length:256},(a,c)=>c);for(let a=255;a>0;a--){const c=Math.floor(n.next()*(a+1));[i[a],i[c]]=[i[c],i[a]]}const s=(a,c)=>e[i[i[a&255]+c&255]],o=a=>a*a*(3-2*a),r=(a,c)=>{const l=Math.floor(a),h=Math.floor(c),d=o(a-l),f=o(c-h),p=s(l,h)+(s(l+1,h)-s(l,h))*d,m=s(l,h+1)+(s(l+1,h+1)-s(l,h+1))*d;return p+(m-p)*f};return(a,c,l=1,h=3)=>{let d=0,f=1,p=0;for(let m=0;m<h;m++)d+=r(a*l+m*17.3,c*l-m*9.1)*f,p+=f,f*=.5,l*=2;return d/p}}function bx(n,{bounds:[t,e,i,s],open:o,cemeteries:r=[]}){const a=Sx(n),c=f=>a(f[0],f[1],.045,4),l={houses:[],trees:[],plots:[],churches:[]},h=.55;for(let f=t;f<i;f+=h)for(let p=e;p<s;p+=h){const m=[f+n.range(-.4,.4)*h,p+n.range(-.4,.4)*h],v=c(m);!(v>.57||v>.52&&n.chance(.2))||!o(m,.8)||l.trees.push({point:m,kind:n.chance(.15)?"cypress":"round",size:n.range(.32,.48)})}const d=7;for(let f=t;f<i;f+=d)for(let p=e;p<s;p+=d){const m=[f+n.range(-.3,.3)*d,p+n.range(-.3,.3)*d];c(m)>.44||!o(m,2)||Ex(n,l,m,o)}for(const f of r){o(f,.5)&&l.churches.push({point:f,angle:0,size:.42});for(let p=0;p<22;p++){const m=[f[0]+n.range(-.9,.9),f[1]+n.range(-.9,.9)];Math.hypot(m[0]-f[0],m[1]-f[1])<.45||o(m,.6)&&l.trees.push({point:m,kind:"cypress",size:n.range(.3,.45)})}}return l}function Ex(n,t,e,i){const s=n.range(0,Math.PI),o=Math.cos(s),r=Math.sin(s),a=(p,m)=>[e[0]+p*o-m*r,e[1]+p*r+m*o],c=n.int(2,4),l=n.int(2,3),h=n.range(1.1,1.6),d=n.range(.8,1.2),f=.08;for(let p=0;p<c;p++)for(let m=0;m<l;m++){const v=(p-(c-1)/2)*(h+f),_=(m-(l-1)/2)*(d+f),g=a(v,_);if(i(g,.9)&&(t.plots.push({point:g,angle:s,length:h,width:d,kind:n.pick(["field","field","meadow","fallow"])}),n.chance(.3)))for(let S=-h/2;S<=h/2;S+=.3){const x=a(v+S,_+d/2+f/2);i(x,.6)&&n.chance(.75)&&t.trees.push({point:x,kind:"round",size:n.range(.22,.32)})}}if(n.chance(.4)){const p=a((c+1)/2*(h+f),0),m=[];n.chance(.3)&&i(p,.8)&&(t.churches.push({point:p,angle:0,size:n.range(.45,.55)}),m.push(p));for(let v=n.int(4,9);v>0;v--){const _=[p[0]+n.range(-.55,.55),p[1]+n.range(-.55,.55)];!i(_,.7)||m.some(g=>Math.hypot(_[0]-g[0],_[1]-g[1])<.45)||(m.push(_),t.houses.push({point:_,angle:s+n.pick([0,Math.PI/2]),w:n.range(.28,.4),d:n.range(.22,.3),h:n.range(.12,.18),flat:!1}))}}}function wx({ground:n,keepOut:t=[]}){const e=fn(330),i=h=>!t.some(d=>d(h)),s=(h,d,f)=>jn(h,d)>f,o=[{polygon:Lo,accept:h=>on(h,Lo)&&s(h,sc,.6)&&s(h,Wi,1)&&s(h,hh,.3)&&s(h,dh,.3)&&i(h),orientation:al([hh,dh,sc,Wi]),builtChance:([h])=>.35+.58*bi.smoothstep(h,-44,-22)},{polygon:Do,accept:h=>on(h,Do)&&s(h,oc,.4)&&s(h,Nr,.35)&&i(h),orientation:al([Nr,oc]),districtSpacing:4,block:[1.7,1.25]},...[wu,Tu].map(h=>({polygon:h,accept:d=>on(d,h)&&on(d,Er)&&s(d,Er,.6)&&i(d),orientation:al([Er]),builtChance:()=>.75,districtSpacing:4,block:[1.7,1.25]}))],r={houses:[],trees:[],plots:[],churches:[]},a=h=>{for(const d of Object.keys(r))r[d].push(...h[d])};for(const h of o)a(_x(e,h));const c=h=>[Lo,Do,wu,Tu].every(d=>!on(h,d)&&s(h,d.concat([d[0]]),.3));a(bx(e,{bounds:[-95,-45,85,90],open:(h,d)=>Tx(h,d)&&c(h)&&s(h,Wi,3.2)&&i(h),cemeteries:[[-53.5,-6],[-53,6],[-50.5,15],[-4,24]].map(he)}));for(const h of Object.values(r).flat())h.y=An+n.heightAt(h.point);const l=new ut;return l.add(Lx(e,r.plots,n),Cx(e,r.houses),Nx(e,r.churches),Ix(e,r.trees)),l.add(Ox(),Fx()),l}function al(n){return([t,e])=>{let i=1/0,s=0;for(const o of n)for(let r=1;r<o.length;r++){const[a,c]=o[r-1],[l,h]=o[r],d=jn([t,e],[o[r-1],o[r]]);d<i&&(i=d,s=Math.atan2(h-c,l-a))}return s}}function Tx(n,t){for(const e of[xp,Er])if(on(n,e))return jn(n,e,!0)>t;return!1}const Sn=(...n)=>n.map(t=>new Wt(t)),wr=.06,Iu=Sn(16446178,16115919,16644334,15785920,16180424),Ax=Sn(12870463,12146746,13661260,11489848),Rx={built:Sn(14468506),churchyard:Sn(15260864),garden:Sn(9417306,8825429),orchard:Sn(10271326),field:Sn(13221994,13943668,12107106),meadow:Sn(10009692,9221206),fallow:Sn(12889464,12296816)},Lu={round:Sn(6265408,7251528,5409848,7908686),orchard:Sn(8696400,9484888),cypress:Sn(3104308,3631418,2774320)};function vs(n,t,e=.05){return t[Math.floor(n.next()*t.length)].clone().multiplyScalar(1-e/2+n.next()*e)}function Px(){const n=nn(1,1,1),t=n.attributes.position,e=[];for(let i=0;i<t.count;i++){const s=.7+.3*t.getY(i);e.push(s,s,s)}return n.setAttribute("color",new Bt(e,3)),n}function Ms(n,t,e){const i=new kh(n,t,Math.max(1,e));return i.count=e,i.castShadow=i.receiveShadow=!0,i}function No(n,t,e,i,s,o,r,a){const c=new Fn().setFromAxisAngle(new L(0,1,0),s);return n.compose(new L(t,e,-i),c,new L(o,r,a))}function Cx(n,t){const e=t.filter(l=>!l.flat),i=t.filter(l=>l.flat),s=Ms(Px(),new _e({vertexColors:!0,roughness:.9}),t.length),o=Ms(Wh(2,1,1,0).scale(.5,1,1),new _e({roughness:.75}),e.length),r=Ms(nn(1,1,1),new _e({roughness:.9}),i.length),a=new oe;t.forEach(({point:[l,h],y:d,angle:f,w:p,d:m,h:v},_)=>{s.setMatrixAt(_,No(a,l,d-wr,h,f,p,v+wr,m)),s.setColorAt(_,vs(n,Iu))}),e.forEach(({point:[l,h],y:d,angle:f,w:p,d:m,h:v},_)=>{const[g,S,x]=p>=m?[p,m,0]:[m,p,Math.PI/2];o.setMatrixAt(_,No(a,l,d+v,h,f+x,g*1.08,S*.42,S*1.12)),o.setColorAt(_,vs(n,Ax))}),i.forEach(({point:[l,h],y:d,angle:f,w:p,d:m,h:v},_)=>{r.setMatrixAt(_,No(a,l,d+v,h,f,p*1.02,.012,m*1.02)),r.setColorAt(_,vs(n,Iu).multiplyScalar(.94))});const c=new ut;return c.add(s,o,r),c}function Ix(n,t){const e=t.filter(h=>h.kind!=="cypress"),i=t.filter(h=>h.kind==="cypress"),s=new _e({roughness:.95,flatShading:!0}),o=Ms(new Ko(1,0),s,e.length),r=Ms(Vh(1,1,7),s,i.length),a=Ms(We(.5,.6,1,5),new _e({color:7032888,roughness:1}),e.length),c=new oe;e.forEach(({point:[h,d],y:f,kind:p,size:m},v)=>{const _=m*.35;a.setMatrixAt(v,No(c,h,f-.02,d,0,m*.09,_+.02,m*.09)),o.setMatrixAt(v,No(c,h,f+_+m*.3,d,n.range(0,Math.PI),m*.5,m*.42,m*.5)),o.setColorAt(v,vs(n,Lu[p],.1))}),i.forEach(({point:[h,d],y:f,size:p},m)=>{r.setMatrixAt(m,No(c,h,f-.02,d,n.range(0,Math.PI),p*.16,p*1.3,p*.16)),r.setColorAt(m,vs(n,Lu.cypress,.1))});const l=new ut;return l.add(a,o,r),l}function Lx(n,t,e){const i=Ms(nn(1,1,1),new _e({roughness:1}),t.length);i.castShadow=!1;const s=new oe,o=new L(0,1,0),r=new L,a=new Fn,c=new Fn;return t.forEach(({point:l,y:h,angle:d,length:f,width:p,kind:m},v)=>{const[_,g]=e.slopeAt(l);a.setFromUnitVectors(o,r.set(-_,1,g).normalize()),c.setFromAxisAngle(o,d),s.compose(new L(l[0],h-.02,-l[1]),a.multiply(c),new L(f,.05,p)),i.setMatrixAt(v,s),i.setColorAt(v,vs(n,Rx[m],.06))}),i}const Du=[{name:"body",geometry:nn(1,1,1),offset:[0,0,0],scale:[1,.42,.78]},{name:"nave",geometry:nn(1,1,1),offset:[0,0,0],scale:[1.02,.6,.34]},{name:"transept",geometry:nn(1,1,1),offset:[0,0,0],scale:[.34,.6,.82]},{name:"apse",geometry:We(1,1,1,10),offset:[.5,0,0],scale:[.17,.38,.17]},{name:"drum",geometry:We(1,1,1,12),offset:[0,.6,0],scale:[.16,.13,.16]},{name:"dome",geometry:dp(1,{segments:12}),offset:[0,.73,0],scale:[.165,.16,.165]}],Dx=Sn(14258022,15120778,15917762,13600096),Ux=Sn(9413549,10465464,12870463);function Nx(n,t){const e=new _e({roughness:.85}),i=new _e({roughness:.55,metalness:.2}),s=Du.map(({name:l,geometry:h})=>Ms(h,l==="dome"?i:e,t.length)),o=new oe,r=new oe,a=new Fn;t.forEach(({point:[l,h],y:d,angle:f,size:p},m)=>{o.makeRotationY(f).setPosition(l,d-wr,-h);const v=vs(n,Dx),_=vs(n,Ux);Du.forEach(({name:g,offset:S,scale:x},M)=>{const C=g==="drum"||g==="dome"?wr:0,T=g==="drum"||g==="dome"?x[1]*p:x[1]*p+wr;r.compose(new L(S[0]*p,S[1]*p+C,S[2]*p),a,new L(x[0]*p,T,x[2]*p)),s[M].setMatrixAt(m,r.premultiply(o)),s[M].setColorAt(m,g==="dome"?_:v)})});const c=new ut;return c.add(...s),c}function Ox(){const n=Uo(sc,{height:.38,thickness:.14,y:An,offset:-.4,towerSpacing:2.4,towerWidth:.3,towerHeight:.6});return U(n,qs)}function Fx(){const[n,t]=lx,e=new ut;return e.add(z(.75,.9,.5,u.stoneDark,n,-.1,-t,14)),e.add(z(.22,.22,.9,u.stone,n,.4,-t,10)),e}function Jr({length:n,beam:t,depth:e,bowRise:i=1,sternRise:s=1,fullness:o=.55,segments:r=40,ribs:a=12}){const c=_=>t/2*Math.pow(Math.sin(Math.PI*(.02+.96*_)),o),l=_=>i*Math.pow(Math.max(0,(_-.72)/.28),2)+s*Math.pow(Math.max(0,(.28-_)/.28),2),h=_=>-e*Math.pow(Math.sin(Math.PI*(.03+.94*_)),.35),d=[],f=[],p=[];for(let _=0;_<=r;_++){const g=_/r,S=(g-.5)*n,x=c(g),M=l(g),C=h(g);for(let T=0;T<=a;T++){const R=T/a,I=(R-.5)*Math.PI;d.push(S,M+(C-M)*Math.pow(Math.cos(I),.7),x*Math.sin(I)),f.push(S,R*(t+e*2))}}for(let _=0;_<r;_++)for(let g=0;g<a;g++){const S=_*(a+1)+g,x=S+a+1;p.push(S,x,S+1,x,x+1,S+1)}const m=new Le;return m.setAttribute("position",new Bt(d,3)),m.setAttribute("uv",new Bt(f,2)),m.setIndex(p),m.computeVertexNormals(),{geometry:m,halfBeamAtX:_=>c(Math.min(1,Math.max(0,_/n+.5))),deck:kx(n,c)}}function kx(n,t,e=.94,i=24){const s=[];for(let o=0;o<=i;o++)s.push(new J((o/i-.5)*n,t(o/i)*e));for(let o=i;o>=0;o--)s.push(new J((o/i-.5)*n,-t(o/i)*e));return new ii(new Fe(s)).rotateX(-Math.PI/2)}const zx=["position","normal","uv"];function Bx(n,t){for(let e=n;e&&e!==t;e=e.parent)if(e.userData.animate||e.userData.dynamic)return!0;return!1}function Hx(n){for(const t of Object.values(n.attributes)){const{array:e,itemSize:i}=t;for(let s=0;s<t.count;s+=3)for(let o=0;o<i;o++){const r=(s+1)*i+o,a=(s+2)*i+o;[e[r],e[a]]=[e[a],e[r]]}}}function Gx(n,t){const e=n.geometry.index?n.geometry.toNonIndexed():n.geometry.clone();for(const i of Object.keys(e.attributes))zx.includes(i)||e.deleteAttribute(i);return e.attributes.normal||e.computeVertexNormals(),e.attributes.uv||e.setAttribute("uv",new Bt(new Float32Array(e.attributes.position.count*2),2)),e.clearGroups(),e.applyMatrix4(t),t.determinant()<0&&Hx(e),e}function ze(n){n.updateMatrixWorld(!0);const t=n.matrixWorld.clone().invert(),e=new Map,i=[];n.traverse(s=>{if(!s.isMesh||s.isInstancedMesh||Array.isArray(s.material)||Bx(s,n))return;const o=new oe().multiplyMatrices(t,s.matrixWorld);e.has(s.material)||e.set(s.material,[]),e.get(s.material).push(Gx(s,o)),i.push(s)});for(const s of i)s.removeFromParent();Ep(n);for(const[s,o]of e){const r=new be(Jo(o,!1),s);r.castShadow=!s.isShaderMaterial&&!s.isMeshBasicMaterial,r.receiveShadow=!s.isShaderMaterial,n.add(r)}return n.traverse(s=>{s.isMesh&&!i.includes(s)&&(s.castShadow=!s.material.isShaderMaterial,s.receiveShadow=!0)}),n}function Ep(n){for(const t of[...n.children])Ep(t),t.type==="Group"&&t.children.length===0&&!t.userData.animate&&!t.userData.dynamic&&t.removeFromParent()}function bs({lod:n="detail",banner:t="genoa",sail:e=!0,rig:i="lateen"}={}){const s=n==="detail",o=new ut,r=i==="square",a=r?24:27,c=r?7.5:8.4,l=2.4,{geometry:h,deck:d,halfBeamAtX:f}=Jr({length:a,beam:c,depth:3.6,bowRise:r?1.8:1.4,sternRise:r?2.4:2.8,fullness:.42,segments:s?32:16,ribs:s?12:8});if(o.add(U(h,u.hull,0,l,0)),o.add(U(d,u.wood,0,l-.3,0)),s)for(const g of[-1,1])for(const S of[l-.35,l-1.5])for(let x=-a*.42;x<a*.42;x+=2.4){const M=f(x+1.2)*(S>l-1?1:.93);o.add(y(2.6,.22,.2,u.wood,x+1.2,S,g*(M+.02)))}if(r){o.add(y(5.5,2.2,6.4,u.wood,-7.5,l-.3,0)),o.add(y(6,.35,7,u.wood,-7.5,l+1.9,0)),o.add(cl(o,6,7,-7.5,l+2.25)),o.add(y(3.6,1.6,4.2,u.wood,8.6,l+.4,0)),o.add(y(4,.3,4.6,u.wood,8.6,l+2,0));const g=y(.3,4.6,1.1,u.wood,-a/2+.2,l-4.2,0);g.rotation.z=-.12,o.add(g),o.add(z(.08,.08,3.2,u.wood,-a/2-.3,l+.2,.9,6))}else{o.add(y(6.5,2.6,7,u.wood,-8.5,l-.3,0)),o.add(y(7,.35,7.6,u.wood,-8.5,l+2.3,0)),o.add(cl(o,7,7.6,-8.5,l+2.65)),o.add(y(4.6,2.2,5.4,u.wood,-9.5,l+2.65,0)),o.add(y(5,.3,5.8,u.wood,-9.5,l+4.85,0)),o.add(cl(o,5,5.8,-9.5,l+5.15)),o.add(y(3.2,1.4,4,u.wood,9.6,l+.7,0)),o.add(y(3.6,.3,4.4,u.wood,9.6,l+2.1,0));for(const g of[-1,1]){const S=y(.28,4.6,1.1,u.wood,-11,l-3.9,g*(f(-11)+.25));S.rotation.z=-.45,o.add(S)}}if(s)for(const[g,S,x]of[[1,1.6,!0],[-2,-1.8,!1],[3.5,-1.4,!0],[-3.5,1.9,!1]])o.add(x?z(.5,.5,1.1,u.wood,g,l-.3,S,8):y(1.4,.9,1.1,u.sail,g,l-.3,S));const p=r?[{x:.5,height:17,rake:0}]:[{x:3.5,height:19,rake:.08,yard:24,tilt:.5},{x:-6.5,height:13,rake:.04,yard:15,tilt:.5}];for(const{x:g,height:S,rake:x}of p){const M=z(.18,.3,S,u.wood,g,l-.3,0,8);M.rotation.z=-x,o.add(M),o.add(y(1,1,1,u.wood,g+Math.sin(x)*(S-1.2),l-.3+S-1.6,0))}if(e&&r){const g=z(.12,.12,13,u.wood,0,0,0,6);g.rotation.x=Math.PI/2,g.position.set(.5,l+13.7,-6.5),o.add(g);const S=U(YM(12,10.5,1.4),u.sail,.5,l+3,0);S.rotation.y=Math.PI/2,o.add(S)}else if(e)for(const{x:g,height:S,rake:x,yard:M,tilt:C}of p){const T=new L(g+Math.sin(x)*(S-2),l+S-2.3,.45),R=z(.1,.1,M,u.wood,0,0,0,6);R.geometry.translate(0,-M/2,0),R.rotation.z=Math.PI/2-C,R.position.copy(T),o.add(R);const I=M/2,w=new L(T.x+Math.cos(C)*I,T.y-Math.sin(C)*I,.55),b=new L(T.x-Math.cos(C)*I,T.y+Math.sin(C)*I,.55),N=new L(T.x-I*.5,l+2.2,.55);o.add(U(up(w,b,N,1.1,s?10:5),u.sail))}ze(o);const m=p[0],v=On(t,{width:2.6,height:1.6,pole:3});v.position.set(m.x+Math.sin(m.rake)*m.height,l+m.height-.6,0),o.add(v);const _=Math.random()*10;return o.userData.animate=g=>{o.position.y=Math.sin(g*1.2+_)*.15,o.rotation.x=Math.sin(g*.9+_)*.02},o}function cl(n,t,e,i,s){const o=new ut,r=(a,c)=>o.add(z(.07,.07,1,u.wood,a,s,c,5));for(let a=0;a<=3;a++)r(i-t/2+t/3*a,-e/2),r(i-t/2+t/3*a,e/2);r(i-t/2,0),r(i+t/2,0);for(const a of[-1,1])o.add(y(t,.1,.1,u.wood,i,s+.95,a*e/2));return o}function wp(n,t,{speed:e=1,offset:i=0,y:s=0}={}){const o=new _c(t.map(c=>br(c,s)),!0,"centripetal"),r=o.getLength(),a=new L;return c=>{const l=((c*e/r+i)%1+1)%1;o.getPointAt(l,n.position),o.getTangentAt(l,a),n.rotation.y=Math.atan2(-a.z,a.x)}}const Uu=4*yc,Vx=[{route:Au,banner:"genoa",speed:.55,offset:0},{route:Au,banner:"venice",speed:.55,offset:.45},{route:Ru,banner:"byzantine",speed:.5,offset:.2},{route:Ru,banner:"genoa",speed:.5,offset:.7}],Wx=[{at:he([-5,13.5]),heading:.1,banner:"genoa"},{at:he([.5,15.2]),heading:.6,banner:"genoa"},{at:he([-11,15.2]),heading:.6,banner:"venice"}];function Xx(){const n=new ut;for(const{route:t,banner:e,speed:i,offset:s}of Vx){const o=new ut;o.add(bs({lod:"map",banner:e})),o.scale.setScalar(Uu),o.userData.animate=wp(o,t,{speed:i,offset:s}),n.add(o)}for(const{at:t,heading:e,banner:i}of Wx){const s=new ut;s.add(bs({lod:"map",banner:i,sail:!1})),s.scale.setScalar(Uu),s.position.copy(br(t)),s.rotation.y=e,n.add(s)}return n}class Yx extends en{constructor(t=document.createElement("div")){super(),this.isCSS2DObject=!0,this.element=t,this.element.style.position="absolute",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.center=new J(.5,.5),this.addEventListener("removed",function(){this.traverse(function(e){e.element instanceof e.element.ownerDocument.defaultView.Element&&e.element.parentNode!==null&&e.element.remove()})})}copy(t,e){return super.copy(t,e),this.element=t.element.cloneNode(!0),this.center=t.center,this}}const po=new L,Nu=new oe,Ou=new oe,Fu=new L,ku=new L;class $x{constructor(t={}){const e=this;let i,s,o,r;const a={objects:new WeakMap},c=t.element!==void 0?t.element:document.createElement("div");c.style.overflow="hidden",this.domElement=c,this.getSize=function(){return{width:i,height:s}},this.render=function(m,v){m.matrixWorldAutoUpdate===!0&&m.updateMatrixWorld(),v.parent===null&&v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),Nu.copy(v.matrixWorldInverse),Ou.multiplyMatrices(v.projectionMatrix,Nu),h(m,m,v),p(m)},this.setSize=function(m,v){i=m,s=v,o=i/2,r=s/2,c.style.width=m+"px",c.style.height=v+"px"};function l(m){m.isCSS2DObject&&(m.element.style.display="none");for(let v=0,_=m.children.length;v<_;v++)l(m.children[v])}function h(m,v,_){if(m.visible===!1){l(m);return}if(m.isCSS2DObject){po.setFromMatrixPosition(m.matrixWorld),po.applyMatrix4(Ou);const g=po.z>=-1&&po.z<=1&&m.layers.test(_.layers)===!0,S=m.element;S.style.display=g===!0?"":"none",g===!0&&(m.onBeforeRender(e,v,_),S.style.transform="translate("+-100*m.center.x+"%,"+-100*m.center.y+"%)translate("+(po.x*o+o)+"px,"+(-po.y*r+r)+"px)",S.parentNode!==c&&c.appendChild(S),m.onAfterRender(e,v,_));const x={distanceToCameraSquared:d(_,m)};a.objects.set(m,x)}for(let g=0,S=m.children.length;g<S;g++)h(m.children[g],v,_)}function d(m,v){return Fu.setFromMatrixPosition(m.matrixWorld),ku.setFromMatrixPosition(v.matrixWorld),Fu.distanceToSquared(ku)}function f(m){const v=[];return m.traverseVisible(function(_){_.isCSS2DObject&&v.push(_)}),v}function p(m){const v=f(m).sort(function(g,S){if(g.renderOrder!==S.renderOrder)return S.renderOrder-g.renderOrder;const x=a.objects.get(g).distanceToCameraSquared,M=a.objects.get(S).distanceToCameraSquared;return x-M}),_=v.length;for(let g=0,S=v.length;g<S;g++)v[g].element.style.zIndex=_-g}}}function qx(n,{canvas:t=null}={}){const e=new $x;return e.domElement.className="label-layer",t&&e.domElement.addEventListener("wheel",i=>{i.preventDefault(),t.dispatchEvent(new WheelEvent("wheel",i))},{passive:!1}),n.appendChild(e.domElement),e}function Zx({text:n,sub:t,kind:e,onClick:i,onHover:s,anchorBottom:o=!1,minor:r=!1}){const a=document.createElement("div");a.className=`map-label map-label--${e}${r?" map-label--minor":""}`,i&&(a.setAttribute("role","button"),a.tabIndex=0,a.addEventListener("click",i),a.addEventListener("keydown",l=>{(l.key==="Enter"||l.key===" ")&&(l.preventDefault(),i())})),s&&(a.addEventListener("pointerenter",()=>s(!0)),a.addEventListener("pointerleave",()=>s(!1)));const c=new Yx(a);return o&&c.center.set(.5,1),Tp(c,n,t),c}function Tp(n,t,e){const i=[document.createTextNode(t)];if(e){const s=document.createElement("small");s.textContent=e,i.push(s)}n.element.replaceChildren(...i)}const Kx="modulepreload",jx=function(n,t){return new URL(n,t).href},zu={},Bu=function(t,e,i){let s=Promise.resolve();if(e&&e.length>0){let r=function(h){return Promise.all(h.map(d=>Promise.resolve(d).then(f=>({status:"fulfilled",value:f}),f=>({status:"rejected",reason:f}))))};const a=document.getElementsByTagName("link"),c=document.querySelector("meta[property=csp-nonce]"),l=c?.nonce||c?.getAttribute("nonce");s=r(e.map(h=>{if(h=jx(h,i),h in zu)return;zu[h]=!0;const d=h.endsWith(".css"),f=d?'[rel="stylesheet"]':"";if(!!i)for(let v=a.length-1;v>=0;v--){const _=a[v];if(_.href===h&&(!d||_.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${h}"]${f}`))return;const m=document.createElement("link");if(m.rel=d?"stylesheet":Kx,d||(m.as="script"),m.crossOrigin="",m.href=h,l&&m.setAttribute("nonce",l),document.head.appendChild(m),d)return new Promise((v,_)=>{m.addEventListener("load",v),m.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${h}`)))})}))}function o(r){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=r,window.dispatchEvent(a),!a.defaultPrevented)throw r}return s.then(r=>{for(const a of r||[])a.status==="rejected"&&o(a.reason);return t().catch(o)})},rc={en:()=>Bu(()=>import("./en-Db__K08q.js"),[],import.meta.url),tr:()=>Bu(()=>import("./tr-DoaZge-s.js"),[],import.meta.url)},xs={},Ap="constantinople.language",Jx=[{code:"en",label:"English"},{code:"tr",label:"Türkçe"}],uh=new Set;let Pi=ty();const Qx=Rp(Pi);async function Rp(n){return xs[n]||(xs[n]=(await rc[n]()).default),xs[n]}function ty(){const n=ey();if(n&&n in rc)return n;const t=navigator.languages?.length?navigator.languages:[navigator.language];for(const e of t.flatMap(i=>(i??"").split(","))){const i=e.split(";")[0].trim().toLowerCase().split("-")[0];if(i in rc)return i}return"en"}function ey(){try{return localStorage.getItem(Ap)}catch{return null}}const ny=()=>Pi;let ll=Pi;async function iy(n){if(!(!(n in rc)||n===ll)&&(ll=n,await Rp(n),ll===n)){Pi=n;try{localStorage.setItem(Ap,n)}catch{}for(const t of uh)t(n)}}function sy(n){return uh.add(n),()=>uh.delete(n)}function ee(n,t={}){return xs[Pi].ui[n].replace(/\{(\w+)\}/g,(e,i)=>t[i]??"")}const ac=n=>xs[Pi].landmarks[n],Yo=n=>xs[Pi].regions[n],hl=n=>xs[Pi].events[n],Pp=()=>xs[Pi].sources;function Hi(n,t=!1){const e=n<0?ee("yearBC",{year:-n}):String(n);return t?ee("approximately",{year:e}):e}function oy({from:n,fromApprox:t,to:e,toApprox:i}){return`${Hi(n,t)} – ${e===void 0?ee("present"):Hi(e,i)}`}function Cp(n=document){document.documentElement.lang=Pi,document.title=ee("documentTitle");for(const t of n.querySelectorAll("[data-i18n]"))t.textContent=ee(t.dataset.i18n);for(const t of n.querySelectorAll("[data-i18n-label]")){const e=ee(t.dataset.i18nLabel);t.setAttribute("aria-label",e),t.title&&(t.title=e)}}const qh={inOutCubic:n=>n<.5?4*n*n*n:1-Math.pow(-2*n+2,3)/2,outBack:n=>1+2.4*Math.pow(n-1,3)+1.4*Math.pow(n-1,2)};function fh({duration:n,easing:t=qh.inOutCubic,onUpdate:e}){return new Promise(i=>{const s=performance.now(),o=r=>{const a=Math.min(1,(r-s)/n);e(t(a)),a<1?requestAnimationFrame(o):i()};requestAnimationFrame(o)})}const ry=n=>new Promise(t=>setTimeout(t,n)),dl={start:300,end:1453},Ip=[{year:324,id:"chrysopolis"},{year:330,id:"dedication"},{year:368,id:"aqueduct"},{year:413,id:"walls"},{year:451,id:"council"},{year:532,id:"nika"},{year:537,id:"hagia-sophia"},{year:626,id:"siege-626"},{year:717,id:"arab-siege"},{year:1054,id:"schism"},{year:1082,id:"venice"},{year:1204,id:"crusade"},{year:1261,id:"recovery"},{year:1267,id:"genoa"},{year:1348,id:"galata-tower"},{year:1453,id:"conquest"}];function Lp(n,t){if(t===null)return!0;const{from:e,to:i}=n.period;return t>=e&&(i===void 0||t<=i)}function ay(n){return Ip.filter(t=>t.year<=n).at(-1)??null}function cc(n,t,e,{left:i=0,right:s=0,top:o=0,bottom:r=0}={}){const a=(i-s)/2,c=(o-r)/2,l=t+2*Math.abs(a),h=e+2*Math.abs(c);n.aspect=l/h,a||c?n.setViewOffset(l,h,a>0?0:-2*a,c>0?0:-2*c,t,e):n.clearViewOffset(),n.updateProjectionMatrix()}function cy(){const n=window.matchMedia("(pointer: coarse)").matches,t=navigator.deviceMemory,e=navigator.hardwareConcurrency;return n||t!==void 0&&t<=4||e!==void 0&&e<=4}const ly={high:{tier:"high",maxPixelRatio:1.5,shadowType:pf,mapShadowSize:4096,detailShadowSize:2048},low:{tier:"low",maxPixelRatio:1,shadowType:Eh,mapShadowSize:2048,detailShadowSize:1024}},bn=Object.freeze({...ly[cy()?"low":"high"],reducedMotion:window.matchMedia("(prefers-reduced-motion: reduce)").matches}),hy=()=>Math.min(window.devicePixelRatio||1,bn.maxPixelRatio),Hu=15325110,mo={position:new L(3,94,78),target:new L(3,0,2)};class dy{constructor({renderer:t,container:e,landmarks:i,regions:s,onSelectLandmark:o,onSelectRegion:r}){this.renderer=t,this.onSelectLandmark=o,this.active=!0,this.hovered=null,this.returnView=null,this.dirty=!0,this.shadowDirty=!0,this.scene=new Yf,this.scene.fog=new gc(Hu,100,340),this.camera=new Dn(40,1,.1,3e3),this.camera.position.copy(mo.position),this.controls=new ip(this.camera,t.domElement),Object.assign(this.controls,{enableDamping:!0,dampingFactor:.08,screenSpacePanning:!1,minDistance:2.5,maxDistance:240,maxPolarAngle:1.36}),this.controls.target.copy(mo.target),this.sky=op({horizon:Hu}),this.scene.add(this.sky,rp({extent:70,mapSize:bn.mapShadowSize,distance:180}).group),this.entries=i.map(h=>this.placeLandmark(h));const a=this.entries.filter(h=>h.footprint),c=a.filter(h=>!h.landmark.map.on);this.ground=gx({footprints:c.map(h=>h.footprint)});for(const{landmark:h,holder:d,footprint:f}of a)d.position.y=An+this.ground.heightAt(f.centre)+(h.map.lift??0),d.updateMatrixWorld(!0);const l=[];for(const{holder:h}of this.entries)h.traverse(d=>{d.userData.onGround&&l.push(d)});for(const h of l)h.userData.onGround(this.ground);if(this.scene.add(dx(this.ground)),this.scene.add(wx({ground:this.ground,keepOut:this.entries.flatMap(h=>h.keepOut)})),this.scene.add(Xx()),this.labelRenderer=qx(e,{canvas:t.domElement}),this.addLabels(s,r),this.animated=[],this.scene.traverse(h=>{h.userData.animate&&this.animated.push(h.userData.animate)}),bn.reducedMotion)for(const h of this.animated)h(0,0);this.raycaster=new iM,this.pointer=new J,this.pointerDirty=!1,this.listen(t.domElement)}placeLandmark(t){const{map:e}=t,i=t.create({lod:"map"}),s=new ut;s.userData.landmarkId=t.id,s.add(i);const o=new Jn().setFromObject(i);if(e.absolute||(s.scale.setScalar(e.scale*yc),e.route?(s.userData.animate=wp(s,e.route,{speed:e.speed}),s.userData.animate(0)):(s.position.copy(br(e.at,An)),s.rotation.y=bi.degToRad(e.rotation??0))),this.scene.add(s),s.updateMatrixWorld(!0),s.userData.baseScaleY=s.scale.y,e.absolute||e.route){const l=(i.userData.keepOut??[]).map(([h,d,f])=>([p,m])=>Math.hypot(p-h,m-d)<f);return{landmark:t,holder:s,keepOut:l,footprint:null,label:null}}const r=uy(s,o),a=e.clearance??.25,c=e.on?[]:[l=>r(l)<a];return{landmark:t,holder:s,keepOut:c,footprint:{centre:e.at,distance:r},label:null}}addLabels(t,e){this.labels=[];const i=(o,r,a,c)=>{const l=Zx({...a(),...c});return l.position.copy(r),o.add(l),this.labels.push({label:l,read:a}),l};for(const o of this.entries){const{landmark:r,holder:a}=o,c=new Jn().setFromObject(a),l=c.getCenter(new L).setY(c.max.y+.15);o.label=i(a,a.worldToLocal(l),()=>({text:ac(r.id).name}),{kind:"landmark",minor:!!r.map.on,anchorBottom:!0,onClick:()=>this.onSelectLandmark(r.id),onHover:h=>this.setHovered(h?o:null)})}this.updateLabelVisibility();const s={water:.3,place:1.8};for(const o of t.filter(r=>r.labelAt)){const r=o.labelKind??"region",a=()=>({text:Yo(o.id).name,sub:Yo(o.id).subtitle}),c=r==="region"?3:s[r]+this.ground.heightAt(o.labelAt);i(this.scene,br(o.labelAt,c),a,{kind:r,onClick:()=>e(o.id)})}}refreshLabels(){for(const{label:t,read:e}of this.labels){const{text:i,sub:s}=e();Tp(t,i,s)}this.dirty=!0}updateLabelVisibility(){const t=new L;for(const{landmark:e,holder:i,label:s}of this.entries){const o=e.map.labelWithin;if(!o||!i.visible)continue;s.getWorldPosition(t);const r=t.distanceTo(this.camera.position)<o;r!==s.visible&&(this.dirty=!0),s.visible=r}}listen(t){let e=null;t.addEventListener("pointermove",i=>{const s=t.getBoundingClientRect();this.pointer.set((i.clientX-s.left)/s.width*2-1,-((i.clientY-s.top)/s.height)*2+1),this.pointerDirty=!0}),t.addEventListener("pointerleave",()=>this.setHovered(null)),t.addEventListener("pointerdown",i=>{e=[i.clientX,i.clientY]}),t.addEventListener("pointerup",i=>{if(!this.active||!e)return;const s=Math.hypot(i.clientX-e[0],i.clientY-e[1]);if(e=null,s>6)return;const o=this.pick();o&&this.onSelectLandmark(o.landmark.id)})}pick(){this.raycaster.setFromCamera(this.pointer,this.camera);const t=this.entries.filter(i=>i.holder.visible).map(i=>i.holder),[e]=this.raycaster.intersectObjects(t,!0);if(!e)return null;for(let i=e.object;i;i=i.parent)if(i.userData.landmarkId)return this.entries.find(s=>s.holder===i);return null}setHovered(t){t!==this.hovered&&(this.hovered&&Gu(this.hovered,!1),this.hovered=t,t&&Gu(t,!0),this.renderer.domElement.style.cursor=t?"pointer":"",this.dirty=!0)}setYear(t){for(const e of this.entries){const{holder:i,label:s}=e,o=Lp(e.landmark,t);if(o===i.visible)continue;const r=i.userData.baseScaleY,a=(e.rise??0)+1;e.rise=a,i.visible=s.visible=o,i.scale.y=r,this.invalidate(),o&&!bn.reducedMotion&&fh({duration:600,easing:qh.outBack,onUpdate:c=>{e.rise===a&&(i.scale.y=r*Math.max(.02,c),this.invalidate())}})}this.hovered&&!this.hovered.holder.visible&&this.setHovered(null)}invalidate(){this.dirty=!0,this.shadowDirty=!0}flyTo(t,e,i=1300){const s=this.camera.position.clone(),o=this.controls.target.clone();return this.controls.enabled=!1,fh({duration:i,onUpdate:r=>{this.camera.position.lerpVectors(s,t,r),this.controls.target.lerpVectors(o,e,r),this.dirty=!0}}).then(()=>{this.controls.enabled=this.active})}frame(t,e,i){const s=this.camera.position.clone().sub(this.controls.target).setY(0);s.lengthSq()<1e-6&&s.set(0,0,1),s.normalize().multiplyScalar(Math.cos(i)*e);const o=t.clone().add(s).setY(t.y+Math.sin(i)*e);return this.flyTo(o,t)}focusLandmark(t){const e=this.entries.find(r=>r.landmark.id===t),i=new Jn().setFromObject(e.holder),s=i.getSize(new L),o=Math.max(s.x,s.z,s.y*1.5)/2;return this.returnView||(this.returnView={position:this.camera.position.clone(),target:this.controls.target.clone()}),this.setHovered(null),this.frame(i.getCenter(new L),bi.clamp(o*3.2,5,70),.72)}focusRegion(t){return this.returnView=null,this.frame(br(t.view.target,0),t.view.distance,.95)}restoreView(){const t=this.returnView;return this.returnView=null,t?this.flyTo(t.position,t.target,1100):Promise.resolve()}homeView(){const{width:t,height:e}=this.size??{width:16,height:10},{left:i=0,right:s=0}=this.insets??{},o=bi.clamp(1.27/((t-i-s)/e),1,2.6),r=mo.position.clone().sub(mo.target).multiplyScalar(o);return{position:mo.target.clone().add(r),target:mo.target.clone()}}jumpHome(){const{position:t,target:e}=this.homeView();this.camera.position.copy(t),this.controls.target.copy(e),this.controls.update()}resetView(){this.returnView=null;const{position:t,target:e}=this.homeView();return this.flyTo(t,e)}setActive(t){this.active=t,this.controls.enabled=t,this.dirty=!0,t||this.setHovered(null)}resize(t,e){this.size={width:t,height:e},cc(this.camera,t,e,this.insets),this.labelRenderer.setSize(t,e),this.dirty=!0}setInsets(t){this.insets=t,this.size&&cc(this.camera,this.size.width,this.size.height,t),this.dirty=!0}update(t,e){const i=this.controls.update();if(this.sky.position.copy(this.camera.position),!bn.reducedMotion)for(const o of this.animated)o(t,e);this.updateLabelVisibility(),this.active&&this.pointerDirty&&this.controls.enabled&&(this.pointerDirty=!1,this.setHovered(this.pick()));const s=i||this.dirty;return this.dirty=!1,s}render(t=this.renderer){this.shadowDirty&&(t.shadowMap.needsUpdate=!0,this.shadowDirty=!1),t.render(this.scene,this.camera),this.labelRenderer.render(this.scene,this.camera)}}function uy(n,t){const e=n.matrixWorld.clone().invert(),i=new L;return([s,o])=>{i.set(s,n.position.y,-o).applyMatrix4(e);const r=Math.max(t.min.x-i.x,0,i.x-t.max.x),a=Math.max(t.min.z-i.z,0,i.z-t.max.z);return Math.hypot(r,a)*n.scale.x}}const ul=new Map;function fy(n){if(!ul.has(n)){const t=n.clone();t.emissive&&(t.emissive=new Wt(16758858),t.emissiveIntensity=.42),ul.set(n,t)}return ul.get(n)}function Gu(n,t){n.label.element.classList.toggle("is-hover",t),n.holder.traverse(e=>{!e.isMesh||e.material.isShaderMaterial||(t?(e.userData.restMaterial=e.material,e.material=fy(e.material)):e.userData.restMaterial&&(e.material=e.userData.restMaterial,delete e.userData.restMaterial))})}const Vu=15127470,py=26,Wu=80;class my{constructor({renderer:t}){this.scene=new Yf,this.scene.fog=new gc(Vu,90,260),this.camera=new Dn(38,1,.1,3e3),this.controls=new ip(this.camera,t.domElement),Object.assign(this.controls,{enabled:!1,enableDamping:!0,dampingFactor:.08,autoRotate:!bn.reducedMotion,autoRotateSpeed:.5,maxPolarAngle:1.48}),this.controls.addEventListener("start",()=>{this.controls.autoRotate=!1}),this.dirty=!0,this.shadowDirty=!0,this.sky=op({top:7049140,horizon:Vu});const{group:e,sun:i}=rp({extent:20,mapSize:bn.detailShadowSize,distance:Wu,intensity:2.8});this.sun=i,this.scene.add(this.sky,e);const s=new be(new Qi(600,64).rotateX(-Math.PI/2),new _e({color:14864294,roughness:1}));s.position.y=-2.4,s.receiveShadow=!0,this.plinth=_y(),this.scene.add(s,this.plinth),this.stage=new ut,this.scene.add(this.stage),this.cache=new Map,this.current=null}show(t){this.stage.clear(),this.current=this.cache.get(t.id)??this.build(t),this.cache.set(t.id,this.current);const{wrapper:e,radius:i,height:s}=this.current;this.stage.add(e),this.plinth.scale.set(i*1.04,1,i*1.04);const o=Math.max(Wu,s*1.2);this.sun.position.setLength(o),ap(this.sun,Math.max(i*1.15,s*.6),o);const r=bi.clamp(s/(i*2)-1,0,1),a=(f,p)=>bi.lerp(f,p,r),c=Math.hypot(i,s/2)/Math.sin(this.visibleHalfFov())*a(.88,1.04),l=.75,h=.5,d=s*a(.3,.5);if(this.camera.position.set(Math.sin(l)*Math.cos(h)*c,d+Math.sin(h)*c+s*a(-.1,0),Math.cos(l)*Math.cos(h)*c),this.controls.target.set(0,d,0),this.scene.fog.near=Math.max(90,c*1.3),this.scene.fog.far=this.scene.fog.near+170,this.controls.minDistance=i*.25,this.controls.maxDistance=Math.max(i*4,c*1.6),this.controls.autoRotate=!bn.reducedMotion,this.controls.update(),this.invalidate(),bn.reducedMotion){e.scale.setScalar(1);return}e.scale.setScalar(.8),fh({duration:900,easing:qh.outBack,onUpdate:f=>{e.scale.setScalar(.8+.2*f),this.invalidate()}})}invalidate(){this.dirty=!0,this.shadowDirty=!0}build(t){const e=t.create({lod:"detail"});e.updateMatrixWorld(!0);const i=new Jn().setFromObject(e),s=i.getSize(new L),o=i.getCenter(new L),r=py/Math.max(s.x,s.z),a=new ut;a.add(e),a.scale.setScalar(r),a.position.set(-o.x*r,-i.min.y*r,-o.z*r);const c=new ut;c.add(a);const l=[];if(c.traverse(h=>{h.userData.animate&&l.push(h.userData.animate)}),bn.reducedMotion)for(const h of l)h(0,0);return{wrapper:c,animated:l,radius:gy(e,o)*r,height:s.y*r}}visibleHalfFov(){const{width:t,height:e}=this.size??{width:1,height:1},{left:i=0,right:s=0,top:o=0,bottom:r=0}=this.insets??{},a=Math.tan(bi.degToRad(this.camera.fov/2)),c=Math.max(1,t-i-s),l=Math.max(1,e-o-r);return Math.atan(a*Math.min(l,c)/e)}setActive(t){this.controls.enabled=t,this.dirty=!0}resize(t,e){this.size={width:t,height:e},cc(this.camera,t,e,this.insets),this.dirty=!0}setInsets(t){this.insets=t,this.size&&cc(this.camera,this.size.width,this.size.height,t),this.dirty=!0}update(t,e){const i=this.controls.update(e);if(this.sky.position.copy(this.camera.position),this.current?.animated.length&&!bn.reducedMotion){for(const o of this.current.animated)o(t,e);this.invalidate()}const s=i||this.dirty;return this.dirty=!1,s}render(t){this.shadowDirty&&(t.shadowMap.needsUpdate=!0,this.shadowDirty=!1),t.render(this.scene,this.camera)}}function gy(n,t){const e=new L;let i=0;return n.traverse(s=>{if(!s.isMesh||s.isInstancedMesh)return;const o=s.geometry.attributes.position;for(let r=0;r<o.count;r++)e.fromBufferAttribute(o,r).applyMatrix4(s.matrixWorld),i=Math.max(i,Math.hypot(e.x-t.x,e.z-t.z))}),i}function _y(){const n=new ut,t=new _e({color:4008501,roughness:.55}),e=new be(new ji(1,1.03,2.2,96,1).translate(0,-1.1,0),t);e.receiveShadow=!0;const i=new be(new ji(1.012,1.012,.25,96,1,!0).translate(0,-.15,0),u.gold);return n.add(e,i),n}function st(n,t={},...e){const i=document.createElement(n);for(const[s,o]of Object.entries(t))o==null||o===!1||(s==="class"?i.className=o:s.startsWith("on")?i.addEventListener(s.slice(2).toLowerCase(),o):s in i?i[s]=o:i.setAttribute(s,o));for(const s of e.flat())s==null||s===!1||i.append(s instanceof Node?s:document.createTextNode(String(s)));return i}class vy{constructor(t,{onSelectLandmark:e,onClose:i}){this.element=t,this.onSelectLandmark=e,this.onClose=i,this.showing=null}showLandmark(t,{animate:e=!0}={}){this.showing=()=>this.showLandmark(t,{animate:!1});const i=ac(t.id),{period:s}=t;this.render([st("p",{class:"info-panel__region"},Yo(t.region).name),st("h2",{},i.name),st("p",{class:"info-panel__years"},oy(s)),st("p",{class:"info-panel__subtitle"},i.subtitle),st("dl",{class:"info-panel__stats"},st("dt",{},ee("built")),st("dd",{},i.built),s.to===void 0?[st("dt",{},ee("status")),st("dd",{},i.fate)]:[st("dt",{},ee(s.ending)),st("dd",{},`${Hi(s.to,s.toApprox)} — ${i.fate}`)],st("dt",{},ee("builder")),st("dd",{},i.builder),st("dt",{},ee("purpose")),st("dd",{},i.purpose)),st("div",{class:"info-panel__ornament"}),st("p",{},i.summary),i.legend&&Xu(i.legend),st("h3",{},ee("didYouKnow")),st("ul",{class:"info-panel__facts"},i.facts.map(o=>st("li",{},o))),st("p",{class:"info-panel__today"},st("strong",{},`${ee("today")} `),i.today)],e)}showRegion(t,e,{animate:i=!0}={}){this.showing=()=>this.showRegion(t,e,{animate:!1});const s=Yo(t.id);this.render([st("p",{class:"info-panel__region"},ee("areaOfMap")),st("h2",{},s.name),st("p",{class:"info-panel__subtitle"},s.subtitle),st("div",{class:"info-panel__ornament"}),s.paragraphs.map(o=>st("p",{},o)),s.legend&&Xu(s.legend),s.closing&&st("p",{},s.closing),e.length>0&&[st("h3",{},ee("explore")),st("div",{class:"info-panel__links"},e.map(o=>st("button",{class:"info-panel__link",type:"button",onClick:()=>this.onSelectLandmark(o.id)},ac(o.id).name)))]],i)}refresh(){if(this.element.hidden||!this.showing)return;const{scrollTop:t}=this.element;this.showing(),this.element.scrollTop=t}render(t,e){this.element.replaceChildren(st("button",{class:"info-panel__close",type:"button","aria-label":ee("close"),title:ee("close"),onClick:()=>this.onClose()},"×"),...t.flat(2).filter(Boolean)),this.element.hidden=!1,e&&(this.element.scrollTop=0,this.element.style.animation="none",this.element.offsetWidth,this.element.style.animation="")}hide(){this.element.hidden=!0}}function Xu({title:n,paragraphs:t}){return st("section",{class:"info-panel__legend"},st("h3",{},n),t.map(e=>st("p",{},e)))}const My=["city","shores","waters"],ph=[{id:"constantinople",group:"city",labelAt:he([-32,-2]),view:{target:he([-20,6]),distance:62}},{id:"pera",group:"shores",labelAt:he([-2,28]),view:{target:he([-4,18]),distance:30}},{id:"chrysopolis",group:"shores",labelAt:he([36,22]),view:{target:he([27,16.5]),distance:28}},{id:"chalcedon",group:"shores",labelAt:he([47,-16]),view:{target:he([39,-21]),distance:30}},{id:"golden-horn",group:"waters",labelKind:"water",labelAt:he([-21,25.5]),view:{target:he([-16,21]),distance:42}},{id:"bosphorus",group:"waters",labelKind:"water",labelAt:he([22,30]),view:{target:he([24,36]),distance:90}},{id:"propontis",group:"waters",labelKind:"water",labelAt:he([-18,-25]),view:{target:he([-4,-38]),distance:110}},{id:"princes-islands",group:"waters",labelKind:"water",labelAt:he([88.2,-120.8]),view:{target:he([92,-148]),distance:130}},{id:"mese",group:"city",labelKind:"place",labelAt:he([-44,-10]),view:{target:he([-24,-2]),distance:60}}];class xy{constructor(t,{regions:e,landmarks:i,onSelectRegion:s,onSelectLandmark:o,onToggle:r=()=>{}}){this.element=t,this.options={regions:e,landmarks:i,onSelectRegion:s,onSelectLandmark:o,onToggle:r},this.activeId=null,this.year=null,this.openGroups=new Set,t.classList.toggle("is-collapsed",window.matchMedia("(max-width: 760px)").matches),this.render()}render(){const{regions:t,landmarks:e,onSelectRegion:i,onSelectLandmark:s,onToggle:o}=this.options,{element:r}=this;this.buttons=new Map;let a;const c=st("button",{class:"sidebar__toggle",type:"button","aria-label":ee("landmarks"),title:ee("landmarks"),"aria-expanded":String(!r.classList.contains("is-collapsed"))},st("span",{class:"sidebar__chevron","aria-hidden":"true"},"▾")),l=st("header",{class:"sidebar__title",onClick:()=>{const f=r.classList.contains("is-collapsed");c.setAttribute("aria-expanded",String(f)),f&&r.classList.remove("is-collapsed"),this.slide(a,f,()=>{f||r.classList.add("is-collapsed")}),o()}},st("p",{class:"sidebar__greek",lang:"grc"},"Κωνσταντινούπολις"),st("h1",{class:"sidebar__name"},ee("title")),st("p",{class:"sidebar__sub"},ee("titleSub")),c),h={city:"groupCity",shores:"groupShores",waters:"groupWaters"},d=f=>st("section",{class:"sidebar__region"},st("button",{class:"sidebar__region-button",type:"button",onClick:()=>i(f.id)},Yo(f.id).name,st("span",{class:"sidebar__region-sub"},Yo(f.id).subtitle)),st("ul",{},e.filter(p=>p.region===f.id).map(p=>{const m=st("button",{class:"sidebar__landmark",type:"button",onClick:()=>s(p.id)},ac(p.id).name);return this.buttons.set(p.id,m),st("li",{},m)})));this.groups=new Map,a=st("div",{class:"sidebar__body"},My.map(f=>{const p=this.openGroups.has(f),m=st("summary",{class:"sidebar__group-summary"},ee(h[f]),st("span",{class:"sidebar__group-chevron","aria-hidden":"true"},"▾")),v=st("details",{class:`sidebar__group${p?" is-open":""}`,open:p},m,st("div",{class:"sidebar__group-body"},t.filter(_=>_.group===f).map(d)));return m.addEventListener("click",_=>{_.preventDefault(),this.toggleGroup(f,!v.classList.contains("is-open"))}),this.groups.set(f,v),v})),r.replaceChildren(l,a),this.setActive(this.activeId),this.setYear(this.year)}setYear(t){this.year=t;for(const e of this.options.landmarks){const i=this.buttons.get(e.id),s=!Lp(e,t);i.classList.toggle("is-absent",s),i.title=s?ee("notStanding",{year:Hi(t)}):""}}setActive(t){this.activeId=t;for(const[s,o]of this.buttons)o.classList.toggle("is-active",s===t);const e=this.options.landmarks.find(s=>s.id===t),i=e&&this.options.regions.find(s=>s.id===e.region);i&&this.toggleGroup(i.group,!0)}toggleGroup(t,e){const i=this.groups.get(t);if(i.classList.contains("is-open")!==e){if(e)for(const[s,o]of this.groups)s!==t&&o.classList.contains("is-open")&&this.slideGroup(o,!1);this.slideGroup(i,e),this.openGroups=e?new Set([t]):new Set}}slideGroup(t,e){t.classList.toggle("is-open",e),e&&(t.open=!0),this.slide(t.querySelector(".sidebar__group-body"),e,()=>{e||(t.open=!1)})}slide(t,e,i=()=>{}){t.animation?.cancel();const s=t.scrollHeight;if(window.matchMedia("(prefers-reduced-motion: reduce)").matches){i();return}t.style.overflow="hidden",t.animation=t.animate({height:e?["0px",`${s}px`]:[`${s}px`,"0px"],opacity:e?[0,1]:[1,0]},{duration:280,easing:"cubic-bezier(0.4, 0, 0.2, 1)"}),t.animation.onfinish=()=>{t.style.overflow="",t.animation=null,i()}}}class yy{constructor(t){this.dialog=st("dialog",{class:"settings__dialog sources__dialog","aria-labelledby":"sources-title"}),t.append(this.dialog),this.dialog.addEventListener("click",e=>{e.target===this.dialog&&this.dialog.close()}),this.dialog.addEventListener("close",()=>this.opener?.focus()),this.dialog.addEventListener("keydown",e=>{e.key==="Escape"&&e.stopPropagation()})}open(t){this.opener=t,this.render(),this.dialog.showModal(),this.dialog.scrollTop=0}render(){const t=Pp(),e=({cite:i,covers:s})=>st("li",{class:"sources__entry"},st("span",{class:"sources__cite"},i),st("span",{class:"sources__covers"},s));this.dialog.replaceChildren(st("div",{class:"settings__head"},st("h2",{class:"settings__title",id:"sources-title"},t.title),st("button",{class:"settings__close",type:"button","aria-label":ee("close"),title:ee("close"),onClick:()=>this.dialog.close()},"×")),st("p",{class:"sources__intro"},t.intro),st("h3",{class:"settings__heading sources__heading"},t.ancientHeading),st("ul",{class:"sources__list"},t.ancient.map(e)),st("h3",{class:"settings__heading sources__heading"},t.modernHeading),st("ul",{class:"sources__list"},t.modern.map(e)))}}const Sy=["controlRotate","controlPan","controlZoom","controlSelect","controlTouch"];class by{constructor(t){this.element=t,this.button=t.querySelector(".settings__button"),this.dialog=st("dialog",{class:"settings__dialog","aria-labelledby":"settings-title"}),t.append(this.dialog),this.sources=new yy(t),this.button.addEventListener("click",()=>this.setOpen(!0)),this.dialog.addEventListener("click",e=>{e.target===this.dialog&&this.setOpen(!1)}),this.dialog.addEventListener("close",()=>{this.button.setAttribute("aria-expanded","false"),this.button.focus()}),this.dialog.addEventListener("keydown",e=>{e.key==="Escape"&&e.stopPropagation()}),this.render()}render(){const t=this.dialog.contains(document.activeElement),e=Jx.map(({code:i,label:s})=>st("button",{class:"settings__option",type:"button",lang:i,"aria-pressed":String(i===ny()),onClick:()=>iy(i)},s));this.dialog.replaceChildren(st("div",{class:"settings__head"},st("h2",{class:"settings__title",id:"settings-title"},ee("settings")),st("button",{class:"settings__close",type:"button","aria-label":ee("close"),title:ee("close"),onClick:()=>this.setOpen(!1)},"×")),st("section",{class:"settings__section"},st("h3",{class:"settings__heading",id:"settings-language"},ee("language")),st("div",{class:"settings__options",role:"group","aria-labelledby":"settings-language"},e)),st("section",{class:"settings__section"},st("h3",{class:"settings__heading"},ee("controls")),st("ul",{class:"settings__controls"},Sy.map(i=>st("li",{},ee(i))))),st("section",{class:"settings__section"},st("h3",{class:"settings__heading"},ee("sources")),st("button",{class:"settings__option sources__open",type:"button",onClick:i=>this.sources.open(i.currentTarget)},Pp().title))),this.sources.render(),t&&e.find(i=>i.getAttribute("aria-pressed")==="true")?.focus()}setOpen(t){t!==this.dialog.open&&(t?this.dialog.showModal():this.dialog.close(),this.button.setAttribute("aria-expanded",String(t)))}}const Da=18,Ey=38,wy=40;class Ty{constructor(t,{onChange:e}){this.element=t,this.onChange=e,this.year=null,this.playing=!1,this.frame=0,new ResizeObserver(()=>this.layoutLabels()).observe(t),this.render()}render(){const{start:t,end:e}=dl;this.playButton=st("button",{class:"timeline__button timeline__play",type:"button",onClick:()=>this.playing?this.stop():this.play()}),this.resetButton=st("button",{class:"timeline__button timeline__reset",type:"button","aria-label":ee("reset"),title:ee("reset"),onClick:()=>{this.stop(),this.select(null)}},"⟲"),this.readout=st("p",{class:"timeline__readout","aria-live":"polite"}),this.range=st("input",{class:"timeline__range",type:"range",min:t,max:e,step:1,"aria-label":ee("year"),onInput:()=>{this.stop(),this.select(Number(this.range.value))}}),this.marks=Ip.map(i=>{const s=(i.year-t)/(e-t),o=`${Hi(i.year)}: ${hl(i.id)}`,r=st("button",{class:"timeline__mark",type:"button",title:o,"aria-label":o,onClick:()=>{this.stop(),this.select(i.year)}},st("span",{class:"timeline__tick","aria-hidden":"true"}),st("span",{class:"timeline__label"},Hi(i.year)));return r.style.left=`calc(${Da/2}px + (100% - ${Da}px) * ${s})`,{button:r,position:s,event:i}}),this.element.replaceChildren(st("div",{class:"timeline__head"},this.playButton,this.resetButton,this.readout),st("div",{class:"timeline__track"},this.range,st("div",{class:"timeline__marks"},this.marks.map(({button:i})=>i)))),this.update(),requestAnimationFrame(()=>this.layoutLabels())}select(t){t!==this.year&&(this.year=t,this.update(),this.onChange(t))}play(){if(this.playing)return;const{start:t,end:e}=dl;let i=this.year===null||this.year>=e?t:this.year,s=performance.now();this.playing=!0,this.select(Math.floor(i));const o=r=>{if(this.playing){if(i=Math.min(e,i+Math.max(0,r-s)/1e3*wy),s=r,this.select(Math.floor(i)),i>=e){this.stop();return}this.frame=requestAnimationFrame(o)}};this.frame=requestAnimationFrame(o),this.updatePlayButton()}stop(){this.playing&&(this.playing=!1,cancelAnimationFrame(this.frame),this.updatePlayButton())}updatePlayButton(){const t=ee(this.playing?"pause":"play");this.playButton.textContent=this.playing?"❚❚":"▶",this.playButton.setAttribute("aria-label",t),this.playButton.title=t,this.playButton.setAttribute("aria-pressed",String(this.playing)),this.playButton.classList.toggle("is-playing",this.playing)}update(){const t=this.year===null;this.element.classList.toggle("is-all",t),this.range.value=t?dl.end:this.year;const e=t?null:ay(this.year);let i="";t?i=ee("allErasHint"):e&&(i=e.year===this.year?hl(e.id):`${Hi(e.year)} · ${hl(e.id)}`),this.readout.replaceChildren(...t?[]:[st("strong",{},Hi(this.year))," "],st("span",{},i)),this.range.setAttribute("aria-valuetext",t?ee("allEras"):`${Hi(this.year)}${i?` — ${i}`:""}`);for(const{button:s,event:o}of this.marks)s.classList.toggle("is-current",o===e);this.updatePlayButton()}layoutLabels(){const t=this.element.querySelector(".timeline__marks")?.clientWidth??0;let e=-1/0;for(const{button:i,position:s}of this.marks){const o=Da/2+(t-Da)*s,r=o-e>=Ey;i.classList.toggle("has-label",r),r&&(e=o)}}}function Ay({lod:n="detail"}={}){const t=n==="detail",e=new ut;e.add(y(62,28,72,u.brick,0,0,0)),e.add(y(63,2.6,73,u.stone,0,0,0)),e.add(y(63,1,73,u.marble,0,27.6,0)),e.add(y(62.8,.7,72.8,u.lead,0,28.6,0)),e.add(y(34,12,37,u.brick,0,28,0));for(const s of[-1,1])e.add(Ry(15.6,17.4,3,u.brick,0,24,s*18.5));for(const s of[-1,1])for(const o of[-1,1])e.add(y(8,37,11,u.brick,s*15.5,0,o*21.5)),e.add(y(8.6,.6,11.6,u.lead,s*15.5,37,o*21.5)),e.add(y(8,33,11,u.brick,s*15.5,0,o*32)),e.add(y(8.6,.6,11.6,u.lead,s*15.5,33,o*32)),e.add(y(8.6,1,11.6,u.marble,s*15.5,32.2,o*32));e.add(z(16.6,16.6,4,u.brick,0,40,0,40)),e.add(Me(16.5,u.lead,0,44,0,{heightScale:.52,segments:40}));const i=ne(1.5,2.8);for(let s=0;s<40;s++){const o=s/40*Math.PI*2;e.add(qe(y(1.1,4.4,1.8,u.brick),o,16.9,40)),t&&e.add(qe(U(i,u.opening),o+Math.PI/40,16.63,40.6))}e.add(y(.5,4.2,.5,u.gold,0,52.4,0)),e.add(y(2.4,.5,.5,u.gold,0,55,0));for(const s of[-1,1]){e.add(Ne(Me(15.5,u.lead,s*17,28,0,{heightScale:.86,phiLength:Math.PI,segments:28}),s,0));for(const o of[-1,1])e.add(Ne(Me(7,u.lead,s*25,26,o*10,{heightScale:.9,phiLength:Math.PI,segments:16}),s,o))}e.add(Ne(z(7.5,7.5,22,u.brick,31,0,0,3,{thetaStart:-Math.PI/2,thetaLength:Math.PI}),1,0)),e.add(Ne(z(7.6,7.6,1,u.marble,31,21.3,0,3,{thetaStart:-Math.PI/2,thetaLength:Math.PI}),1,0)),e.add(Ne(Me(7.5,u.lead,31,22.3,0,{heightScale:.8,phiLength:Math.PI,segments:16}),1,0)),e.add(y(10,22,66,u.brick,-36,0,0)),e.add(y(11,1,67,u.marble,-36,21.6,0)),e.add(y(10.8,.6,66.8,u.lead,-36,22.6,0)),e.add(y(7,14,66,u.brick,-44.5,0,0)),e.add(y(8,1,67,u.marble,-44.5,13.6,0)),e.add(y(7.8,.6,66.8,u.lead,-44.5,14.6,0)),e.add(y(50,2.6,67,u.stone,-37,0,0));for(const s of[-1,1])e.add(y(9,24,8,u.brick,-36,0,s*37)),e.add(y(9.4,.6,8.4,u.lead,-36,24,s*37));if(e.add(z(6,6,9,u.brick,36,0,-46,20)),e.add(Me(6,u.lead,36,9,-46,{heightScale:.55})),t){Py(e),Cy(e),e.add(y(150,1,116,u.paving,-25,-1,0));for(const[s,o]of[[40,30],[44,18],[42,-26],[-20,50],[-6,50],[8,-52],[20,-52],[-60,44],[-74,-44]])e.add(ei(13,s,0,o))}else e.add(y(100,.4,90,u.paving,-10,-.4,0));return ze(e)}function Ry(n,t,e,i,s,o,r){const a=new Fe;a.absarc(0,0,t,0,Math.PI,!1),a.lineTo(-n,0),a.absarc(0,0,n,Math.PI,0,!0),a.lineTo(t,0);const c=new Rn(a,{depth:e,bevelEnabled:!1,curveSegments:24});return c.translate(0,0,-e/2),U(c,i,s,o,r)}function Py(n){for(const i of[-1,1]){const s=qt({count:7,spacing:3.6,width:2.1,height:4.5,y:30.5}),o=qt({count:3,spacing:4.6,width:1.6,height:2.8,y:36});for(const r of[s,o])r.position.z=i*18.55,r.rotation.y=i>0?0:Math.PI,n.add(r);for(const r of[5,16]){const a=qt({count:15,spacing:3.8,width:1.9,height:3.8,y:r,skip:c=>Math.abs(Math.abs(c)-14)<5.5});a.position.z=i*36.05,a.rotation.y=i>0?0:Math.PI,n.add(a)}}const t=qt({count:5,spacing:9,width:3,height:6.5,y:0}),e=qt({count:9,spacing:6.5,width:2,height:3.6,y:16});for(const[i,s]of[[t,-48.05],[e,-41.05]])i.position.x=s,i.rotation.y=-Math.PI/2,n.add(i);for(const i of[-Math.PI/3,0,Math.PI/3]){const s=U(ne(1.8,4.5),u.opening);qe(s,i,6.55,9,31,0),n.add(s)}}function Cy(n){for(const r of[-1,1]){n.add(y(48,9,1.5,u.brick,-144/2,0,r*33)),n.add(y(48,.5,8.5,u.lead,-144/2,8.5,r*29.5));const a=He({length:44,count:11,height:8.5,radius:.45});a.position.set(-144/2,0,r*25.8),n.add(a)}n.add(y(1.5,9,67.5,u.brick,-96,0,0)),n.add(y(8.5,.5,58,u.lead,-96+3.5,8.5,0));const s=He({length:50,count:12,height:8.5,radius:.45});s.rotation.y=Math.PI/2,s.position.x=-96+7.5,n.add(s),n.add(z(3.2,3.4,1,u.marble,-72,0,0,20));const o=z(2.7,2.7,.2,u.water,-72,.85,0,20);n.add(o),n.add(z(.3,.3,3,u.marble,-72,1,0,8)),n.add(z(.9,.2,.6,u.marble,-72,3.6,0,10))}const lc=new dn(1,14,10);function Dp(n,{rearing:t=!1}={}){const e=new ut,i=U(lc,n,0,1.3,0);i.scale.set(.85,.36,.3);const s=z(.17,.26,.95,n,.62,1.38,0,8);s.rotation.z=-.62;const o=y(.6,.24,.22,n,1.1,1.85,0);o.rotation.z=-.5;const r=z(.04,.09,.8,n,-.82,.62,0,6);r.rotation.z=.35,e.add(i,s,o,r);for(const[a,c]of[[.55,.16],[.55,-.16],[-.55,.16],[-.55,-.16]]){const l=z(.06,.08,1.1,n,a,0,c,6);t&&a>0&&(l.position.y=.45,l.rotation.z=1),e.add(l)}return e}function Up({horseMaterial:n,carMaterial:t,colorMaterial:e}){const i=new ut;for(const o of[-.9,-.3,.3,.9]){const r=Dp(n);r.position.set(1.6,0,o),r.scale.setScalar(.9),i.add(r)}i.add(z(.75,.75,1,t,-.4,.35,0,12,{thetaStart:0,thetaLength:Math.PI}));for(const o of[-.75,.65]){const r=z(.55,.55,.1,t,-.4,.55,o,12);r.rotation.x=Math.PI/2,i.add(r)}i.add(z(.22,.25,.9,e,-.5,.75,0,8));const s=U(lc,e,-.5,1.8,0);return s.scale.setScalar(.17),i.add(s),i}function Iy(n,t,e){const i=new ut,s=U(lc,n);s.scale.set(.55,.17,.2);const o=U(lc,e,.55,.08,0);o.scale.setScalar(.13);const r=z(0,.06,.16,t,.7,.06,0,6);r.rotation.z=-Math.PI/2;const a=y(.4,.04,.32,n,-.6,0,0);i.add(s,o,r,a);const c=[-1,1].map(h=>{const d=new ut;d.position.set(.05,.05,.12*h);const f=y(.5,.03,1.05,n,0,0,.52*h),p=y(.32,.03,.4,n,-.08,0,1.2*h);return d.add(f,p),i.add(d),{pivot:d,side:h}}),l=Math.random()*10;return i.userData.animate=h=>{const d=Math.sin(h*5+l),f=Math.max(0,Math.sin(h*.6+l));for(const{pivot:p,side:m}of c)p.rotation.x=m*(.15+d*.55*(1-f))},i}const Ly=[{name:"I",subtitle:"The Euphrates crossing",segments:[{glyphs:"𓅃",kinds:"w",reading:"Horus"},{frame:"serekh",glyphs:"𓃒𓂡𓈍𓅓𓌀𓏏𓊖",kinds:"wffwnfw",reading:"Strong Bull, Appearing in Thebes"},{glyphs:"𓇓𓆤",kinds:"nw",reading:"King of Upper and Lower Egypt"},{frame:"cartouche",glyphs:"𓇳𓏠𓆣",kinds:"wfw",reading:"Menkheperre"},{glyphs:"𓍑𓄿𓂻𓊪𓐍𓂋𓅨𓈖𓈖𓉔𓂋𓈖𓈉",kinds:"nwwfffwffwfff",reading:"who crossed the Great Bend of Naharin"},{glyphs:"𓅓𓈖𓆱𓐍𓏏𓂡𓅓𓄊𓋴𓂋𓂡𓁷𓄂𓏏𓀎𓏥𓆑",kinds:"wfffffwnnffwwfwff",reading:"in might and victory, at the head of his army"},{glyphs:"𓁹𓄡𓄿𓇋𓇋𓏏𓀐𓉻𓏏𓇋𓅓𓋴𓈖𓏥",kinds:"fwwnnfwffnwnff",reading:"making a great slaughter among them"}]},{name:"II",subtitle:"The boundary at the Horn of the Earth",segments:[{glyphs:"𓅉𓌂𓄖𓏏𓂦𓈍𓏥",kinds:"wnwfnff",reading:"Golden Horus: Powerful of strength, sacred of appearances"},{glyphs:"𓇓𓆤",kinds:"nw",reading:"King of Upper and Lower Egypt"},{frame:"cartouche",glyphs:"𓇳𓏠𓆣",kinds:"wfw",reading:"Menkheperre"},{glyphs:"𓅭𓇳",kinds:"ww",reading:"Son of Ra"},{frame:"cartouche",glyphs:"𓅝𓄟𓋴𓄤𓆣𓏥",kinds:"wnnwwf",reading:"Thutmose, beautiful of forms"},{glyphs:"𓁹𓈖𓆑𓇾𓈙𓆑𓂋𓄋𓏏𓇾",kinds:"ffffffffff",reading:"who set his boundary at the Horn of the Earth"},{glyphs:"𓊪𓎛𓅱𓈖𓉔𓂋𓈖𓈉",kinds:"fnwfwfff",reading:"and at the marshes of Naharin"}]},{name:"III",subtitle:"Dedication to Amun-Ra",segments:[{glyphs:"𓅃",kinds:"w",reading:"Horus"},{frame:"serekh",glyphs:"𓃒𓂡𓈍𓅓𓌀𓏏𓊖",kinds:"wffwnfw",reading:"Strong Bull, Appearing in Thebes"},{glyphs:"𓅒𓎝𓇓𓏏𓏇𓇳𓅓𓇯",kinds:"wwnfnwwf",reading:"He of the Two Ladies: Enduring of kingship, like Ra in heaven"},{glyphs:"𓇓𓆤",kinds:"nw",reading:"King of Upper and Lower Egypt"},{frame:"cartouche",glyphs:"𓇳𓏠𓆣",kinds:"wfw",reading:"Menkheperre"},{glyphs:"𓁹𓈖𓆑𓅓𓏠𓏌𓅱𓆑𓈖𓇋𓏏𓆑",kinds:"fffwffwffnff",reading:"He made it as his monument for his father"},{glyphs:"𓇋𓏠𓈖𓇳𓎟𓊨𓏥𓇾𓇾",kinds:"nffwfnfff",reading:"Amun-Ra, lord of the thrones of the Two Lands"},{glyphs:"𓋴𓂝𓊢𓂝𓈖𓆑𓏏𓐍𓈖𓉶𓏥𓅨𓂋𓅱𓏥",kinds:"nfnffffffnfwfwf",reading:"erecting for him great obelisks"}]},{name:"IV",subtitle:"Lord of victories",segments:[{glyphs:"𓅉𓌂𓄖𓏏𓂦𓈍𓏥",kinds:"wnwfnff",reading:"Golden Horus: Powerful of strength, sacred of appearances"},{glyphs:"𓅭𓇳",kinds:"ww",reading:"Son of Ra"},{frame:"cartouche",glyphs:"𓅝𓄟𓋴𓄤𓆣𓏥",kinds:"wnnwwf",reading:"Thutmose, beautiful of forms"},{glyphs:"𓌻𓂋𓇋𓏠𓈖𓇳𓎟𓊨𓏥𓇾𓇾",kinds:"wfnffwfnfff",reading:"beloved of Amun-Ra, lord of the thrones of the Two Lands"},{glyphs:"𓎟𓈖𓆱𓐍𓏏𓂡𓏥𓎁𓇾𓏥𓎟",kinds:"fffffffwfff",reading:"lord of victories, who seizes every land"},{glyphs:"𓏙𓋹𓏇𓇳𓆓𓏏𓇿",kinds:"nnnwnff",reading:"Given life, like Ra, forever"}]}],Ua={sky:"𓇯",king:"𓀢",god:"𓊹",amun:"𓀭"},Dy=["DIFFICILIS QVONDAM DOMINIS PARERE SERENIS","IVSSVS ET EXTINCTIS PALMAM PORTARE TYRANNIS","OMNIA THEODOSIO CEDVNT SVBOLIQVE PERENNI","TER DENIS SIC VICTVS EGO DOMITVSQVE DIEBVS","IVDICE SVB PROCLO SVPERAS ELATVS AD AVRAS"],Uy=["ΤΟΤΕΤΡΑΠΛΕΥΡΟΝΘΑΥΜΑΤΩΝΜΕΤΑΡΣΙΩΝ","ΧΡΟΝΩΦΘΑΡΕΝΝΥΝΚΩΝΣΤΑΝΤΙΝΟΣΔΕΣΠΟΤΗΣ","ΟΥΡΩΜΑΝΟΣΠΑΙΣΔΟΞΑΤΗΣΣΚΗΠΤΟΥΧΙΑΣ","ΚΡΕΙΤΤΟΝΝΕΟΥΡΓΕΙΤΗΣΠΑΛΑΙΘΕΩΡΙΑΣ","ΟΓΑΡΚΟΛΟΣΣΟΣΘΑΜΒΟΣΗΝΕΝΤΗΡΟΔΩ","ΚΑΙΧΑΛΚΟΣΟΥΤΟΣΘΑΜΒΟΣΕΣΤΙΝΕΝΘΑΔΕ"],Ny=["ΚΙΟΝΑ ΤΕΤΡΑΠΛΕΥΡΟΝ ΑΕΙ ΧΘΟΝΙ ΚΕΙΜΕΝΟΝ ΑΧΘΟΣ","ΜΟΥΝΟΣ ΑΝΑΣΤΗΣΑΙ ΘΕΥΔΟΣΙΟΣ ΒΑΣΙΛΕΥΣ","ΤΟΛΜΗΣΑΣ ΠΡΟΚΛΟΣ ΕΠΕΚΕΚΛΕΤΟ ΚΑΙ ΤΟΣΟΣ ΕΣΤΗ","ΚΙΩΝ ΗΕΛΙΟΙΣ ΕΝ ΤΡΙΑΚΟΝΤΑ ΔΥΩ"],mh=["north","south","east","west"],hc='"Noto Sans Egyptian Hieroglyphs"',Zh="Cinzel",Or='"EB Garamond"',Oy=[194,132,118],Np=[230,224,212],si="rgba(78, 66, 56, 0.72)",Fy="rgba(70, 58, 48, 0.3)",ky="rgb(242, 238, 228)",zy="rgb(222, 215, 202)",Op="rgba(50, 26, 24, 0.92)",Fp="rgba(246, 206, 192, 0.5)",kp="rgba(62, 54, 46, 0.88)",zp="rgba(250, 247, 240, 0.9)";let Yu=null;function By(){return Yu??=Promise.allSettled([document.fonts.load(`100px ${hc}`,"𓇳𓏠𓆣"),document.fonts.load(`40px ${Zh}`,"AVM"),document.fonts.load(`40px ${Or}`,"ΑΒΓ")]).then(()=>!0),Yu}const Hy=()=>[hc,Zh,Or].every(n=>document.fonts.check(`20px ${n}`));function mi(n,t,e,{tile:i=!1,text:s=!1}={}){const o=document.createElement("canvas");o.width=n,o.height=t;const r=o.getContext("2d"),a=new Zr(o);a.colorSpace=sn,a.anisotropy=8,i&&(a.wrapS=a.wrapT=Zi);const c=h=>{r.setTransform(1,0,0,1,0,0),e(r,n,t,h),a.needsUpdate=!0},l=!s||Hy();return c(l),l||By().then(()=>c(!0)),a}const Fr=([n,t,e],i=1)=>`rgba(${n|0}, ${t|0}, ${e|0}, ${i})`;function Qr(n,t,e,i){n.fillStyle=Fr(i),n.fillRect(0,0,t,e)}function Ei(n,t,e,i,{count:s,color:o,size:r,alpha:a,amount:c=.3}){for(let l=0;l<s;l++){const h=1+(i.next()-.5)*c;n.fillStyle=Fr(o.map(f=>Math.min(255,f*h)),a);const d=.6+i.next()*r;n.fillRect(i.next()*t,i.next()*e,d,d)}}const Hn=(n,t,e,i,s)=>{n.beginPath(),n.moveTo(t,e),n.lineTo(i,s),n.stroke()};function $u(n,t,e,i){Qr(n,t,e,Oy),Ei(n,t,e,i,{count:t*e/55,color:[74,44,44],size:2.2,alpha:.5}),Ei(n,t,e,i,{count:t*e/80,color:[236,214,202],size:1.8,alpha:.5}),Ei(n,t,e,i,{count:t*e/420,color:[38,24,24],size:3,alpha:.6})}function Sc(n,t,e,i){Qr(n,t,e,Np);for(let s=0;s<10;s++){const o=i.next()*t,r=i.next()*e,a=(.2+i.next()*.3)*Math.max(t,e),c=n.createRadialGradient(o,r,0,o,r,a);c.addColorStop(0,"rgba(206, 200, 190, 0.45)"),c.addColorStop(1,"rgba(206, 200, 190, 0)"),n.fillStyle=c,n.fillRect(o-a,r-a,a*2,a*2)}n.lineWidth=1;for(let s=0;s<14;s++){n.strokeStyle=`rgba(118, 124, 132, ${.06+i.next()*.1})`;const o=i.next()*e;n.beginPath(),n.moveTo(-10,o),n.bezierCurveTo(t*.3,o+i.range(-e*.08,e*.08),t*.6,o+i.range(-e*.08,e*.08),t+10,o+i.range(-e*.03,e*.03)),n.stroke()}Ei(n,t,e,i,{count:t*e/600,color:[200,194,184],size:1.5,alpha:.35})}function Gy(n,t,e,i){Qr(n,t,e,[118,58,54]),Ei(n,t,e,i,{count:2600,color:[206,160,152],size:2.6,alpha:.7}),Ei(n,t,e,i,{count:1400,color:[52,20,22],size:2.2,alpha:.6}),Ei(n,t,e,i,{count:300,color:[232,206,196],size:3.6,alpha:.6})}function fs(n,t,e,i,s,o){n.font=`100px ${hc}`,n.textBaseline="alphabetic",n.textAlign="left";const r=n.measureText(t),a=Math.max(1,r.actualBoundingBoxLeft+r.actualBoundingBoxRight),c=Math.max(1,r.actualBoundingBoxAscent+r.actualBoundingBoxDescent),l=Math.min(s/a,o/c);n.font=`${(100*l).toFixed(1)}px ${hc}`;const h=e-(r.actualBoundingBoxRight-r.actualBoundingBoxLeft)/2*l,d=i+(r.actualBoundingBoxAscent-r.actualBoundingBoxDescent)/2*l;n.fillStyle=Fp,n.fillText(t,h+2,d+2),n.fillStyle=Op,n.fillText(t,h,d)}function Os(n,t){n.save(),n.translate(2,2),n.strokeStyle=n.fillStyle=Fp,t(n),n.restore(),n.strokeStyle=n.fillStyle=Op,t(n)}function Vy(n,t){const e=[...n],i=[];for(let s=0;s<e.length;s++)if(t[s]==="f"){const o=[e[s]];for(;o.length<3&&t[s+1]==="f";)o.push(e[++s]);i.push({signs:o,height:[.58,.82,1][o.length-1],stacked:!0})}else s+1<e.length&&t[s+1]!=="f"?(i.push({signs:[e[s],e[s+1]],height:1}),s++):i.push({signs:[e[s]],height:1});return i}function Wy(n,t,e,i,s){const o=t/2,r=i-e;fs(n,Ua.sky,o,e+r*.08,s*.98,r*.1),fs(n,Ua.king,o-s*.3,e+r*.6,s*.34,r*.56),fs(n,Ua.god,o,e+r*.6,s*.16,r*.36),fs(n,Ua.amun,o+s*.3,e+r*.56,s*.36,r*.66),Os(n,a=>a.fillRect(o-s/2,i-8,s,6))}function Xy(n,t,e,i,s){const o=t*.56,r=t/2,a=e*.006,c=e*.082,l=c+e*.014,h=e*.988,d=i.segments.map(g=>({...g,rows:Vy(g.glyphs,g.kinds)})),f=.2,p=g=>g.frame==="cartouche"?.55:g.frame==="serekh"?1.05:0,m=d.reduce((g,S)=>g+S.rows.reduce((x,M)=>x+M.height,0)+f+p(S),0),v=Math.min(t*.4,(h-l)/m);if(!s){let g=l;n.lineWidth=3;for(const S of d){for(const x of S.rows){const M=x.height*v;Os(n,C=>C.strokeRect(r-o*.35,g+4,o*.7,M-8)),g+=M}g+=f*v}return}Wy(n,t,a,c,o);let _=l;for(const g of d){const S=_;g.frame&&(_+=v*.25);const x=g.frame==="cartouche"?v*1.5:g.frame==="serekh"?v*1.3:0,M=x?x*.74:o;for(const C of g.rows){const T=C.height*v;if(C.stacked){const R=T/C.signs.length;C.signs.forEach((I,w)=>fs(n,I,r,_+R*(w+.5),M*.95,R*.86))}else if(C.signs.length===2){const R=M/2-v*.04;fs(n,C.signs[0],r-M/4,_+T/2,R,T*.94),fs(n,C.signs[1],r+M/4,_+T/2,R,T*.94)}else fs(n,C.signs[0],r,_+T/2,M,T*(C.height<1?.86:.96));_+=T}if(n.lineWidth=6,g.frame==="cartouche"){_+=v*.15;const C=S+4,T=_-C;Os(n,R=>{R.beginPath(),R.roundRect(r-x/2,C,x,T,x/2),R.stroke()}),Os(n,R=>R.fillRect(r-x*.62,_+4,x*1.24,8)),_+=v*.15}else if(g.frame==="serekh"){const C=v*.7,T=S+4;Os(n,R=>R.strokeRect(r-x/2,T,x,_-T+C)),Os(n,R=>R.fillRect(r-x/2,_,x,6));for(let R=0;R<7;R++){const I=r-x/2+10+R*(x-20)/6.5;Os(n,w=>w.fillRect(I,_+C*.15,6,C*.75))}_+=C}_+=f*v}}function Yt(n,t,{fill:e=ky,depth:i=3,width:s=1.4}={}){n.save(),n.translate(i*.7,i),n.fillStyle=Fy,n.beginPath(),t(n),n.fill(),n.restore(),n.fillStyle=e,n.strokeStyle=si,n.lineWidth=s,n.beginPath(),t(n),n.fill(),n.stroke()}const Ji=(n,t,e,i)=>s=>s.ellipse(n,t,e,i,0,0,Math.PI*2),Ze=(n,t,e,i)=>s=>s.rect(n,t,e,i),Qn=n=>t=>{t.moveTo(n[0][0],n[0][1]);for(const[e,i]of n.slice(1))t.lineTo(e,i);t.closePath()};function bc(n,t,e,i){Yt(n,Ji(t,e-i*.18,i*1.04,i*.98),{fill:zy,depth:2}),Yt(n,Ji(t,e+i*.12,i*.78,i*.92),{depth:2}),n.fillStyle=si,n.fillRect(t-i*.44,e,i*.24,i*.1),n.fillRect(t+i*.2,e,i*.24,i*.1),n.fillRect(t-i*.16,e+i*.5,i*.32,i*.08)}function Bp(n,t,e,i){Yt(n,s=>{s.moveTo(t-i*1.6,e),s.lineTo(t-i*1.5,e-i*1.2),s.quadraticCurveTo(t,e-i*2.1,t+i*1.5,e-i*1.2),s.lineTo(t+i*1.6,e),s.closePath()}),bc(n,t,e-i*2.3,i)}function gh(n,t,e,i,s){n.strokeStyle="rgba(78, 66, 56, 0.3)",n.lineWidth=1;for(const o of[-.5,-.15,.2,.55])Hn(n,t+o*s*.9,e,t+o*s*1.1,i)}function Xi(n,t,e,i,{arms:s="down"}={}){const o=i*.085,r=e-i+o*2.5,a=o*1.75;if(Yt(n,c=>{c.moveTo(t-a,r),c.quadraticCurveTo(t,r-o*.9,t+a,r),c.lineTo(t+a*1.15,e),c.lineTo(t-a*1.15,e),c.closePath()}),gh(n,t,r+o,e-4,a),s==="raised")for(const c of[-1,1])Yt(n,l=>{l.moveTo(t+c*a*.7,r+o*.4),l.lineTo(t+c*a*1.9,r-o*1.6),l.lineTo(t+c*a*2.2,r-o*1.2),l.lineTo(t+c*a*.9,r+o*1.1),l.closePath()},{depth:2});bc(n,t,r-o*1.15,o)}function Yy(n,t,e,i){const s=i*.1,o=e-i+s*2.5,r=e-i*.4,a=s*1.9;Yt(n,Qn([[t-a,o],[t+a,o],[t+a*1.1,r],[t+a*1.45,r],[t+a*1.45,e],[t-a*1.45,e],[t-a*1.45,r],[t-a*1.1,r]])),gh(n,t,o+s,r-2,a),gh(n,t,r+3,e-3,a*1.3),bc(n,t,o-s*1.15,s)}function qu(n,t,e,i,s){const o=i*.14,r=e-i+o*2.4;Yt(n,Qn([[t-s*o*1.6,e],[t-s*o*1.9,e-i*.45],[t-s*o*.8,r],[t+s*o*1.1,r+o*.3],[t+s*o*1.4,e-i*.4],[t+s*o*.6,e]])),Yt(n,Qn([[t+s*o*.9,r+o],[t+s*o*3.2,r+o*1.4],[t+s*o*3.1,r+o*2],[t+s*o*.8,r+o*1.7]]),{depth:2}),Yt(n,Ji(t+s*o*3.4,r+o*1.3,o*.9,o*.45),{depth:2}),bc(n,t+s*o*.2,r-o*1.1,o)}function lr(n,t,e,i,s,o,r){const a=(e-t)/o;for(let c=s-1;c>=0;c--){const l=i-c*r*1.9,h=c%2?a/2:0;for(let d=0;d<o-c%2;d++)Bp(n,t+a*(d+.5)+h,l,r)}}function $y(n,t,e,i,s,o=24){n.save(),n.beginPath(),n.rect(t,e,i-t,s-e),n.clip(),n.fillStyle="rgba(70, 58, 48, 0.08)",n.fillRect(t,e,i-t,s-e),n.strokeStyle=si,n.lineWidth=1.6;const r=s-e;for(let a=t-r;a<i+r;a+=o)Hn(n,a,e,a+r,s),Hn(n,a+r,e,a,s);n.restore(),Yt(n,Ze(t,e-6,i-t,7),{depth:2}),Yt(n,Ze(t,s-1,i-t,7),{depth:2})}function qy(n,t,e,i,s){Yt(n,Ze(t-s/2,e,s,i-e),{depth:2})}function Tr(n,t,e,i,s){Yt(n,Ze(t-s/2,e+s*.7,s,i-e-s*.7)),Yt(n,Ze(t-s*.95,e,s*1.9,s*.7)),Yt(n,Ze(t-s*.8,i-s*.4,s*1.6,s*.4),{depth:2})}function Zu(n,t,e,i,s,o){const r=(t+e)/2,a=(e-t)/2;Yt(n,c=>{c.ellipse(r,i,a,s,0,Math.PI,0),c.ellipse(r,i,a-o,s-o,0,0,Math.PI,!0),c.closePath()})}function Zy(n,t,e,i){Yt(n,Ji(t,e,i*.84,i)),Yt(n,Ji(t,e,i*.22,i*.26),{depth:2})}function Hp(n,t,e,i){n.strokeStyle=si,n.lineWidth=3,Hn(n,t,e+10,t,i),Yt(n,Qn([[t,e],[t+5,e+14],[t-5,e+14]]),{depth:1})}function Ky(n,t,e,i){Hp(n,t,e,i),Yt(n,Ze(t+3,e+14,30,26),{depth:2}),n.strokeStyle=si,n.lineWidth=1.6,Hn(n,t+10,e+36,t+26,e+18),Hn(n,t+26,e+36,t+10,e+18),Hn(n,t+18,e+16,t+18,e+38),n.beginPath(),n.arc(t+21,e+21,4,Math.PI,Math.PI*2.6),n.stroke()}function jy(n,t,e,i,s,o){const r=(i-e)/o;for(let a=0;a<o;a++)Yt(n,Ze(t-s/2,e+a*r,s,r-2),{depth:2})}function Ku(n,t,e,i,s){Yt(n,Ze(t,e-s*.38,i,s*.38));const o=7,r=(i-8)/o;for(let a=0;a<o;a++){const c=s*.62*(.5+.5*a/(o-1));Yt(n,Ze(t+4+a*r,e-s*.38-c,r-3,c),{depth:2})}}function ju(n,t,e,i){Yt(n,Ji(t,e,i,i*.55)),Yt(n,Ze(t-i*.3,e-i*1.4,i*.6,i*1.4),{depth:2}),n.strokeStyle=si,n.lineWidth=2.5;for(const s of[.3,1.2,2.1,3])Hn(n,t-Math.cos(s)*i*1.5,e-i*1.1-Math.sin(s)*i*.3,t+Math.cos(s)*i*1.5,e-i*1.1+Math.sin(s)*i*.3)}function Jy(n,t,e,i){const s=e-i*.55;Yt(n,Ji(t,s,i*.5,i*.24),{depth:2}),Yt(n,Qn([[t+i*.35,s-i*.1],[t+i*.62,s-i*.5],[t+i*.85,s-i*.42],[t+i*.72,s-i*.2],[t+i*.5,s+i*.05]]),{depth:2}),n.strokeStyle=si,n.lineWidth=3;for(const[o,r]of[[-.36,-.12],[-.22,.1],[.2,-.1],[.36,.14]])Hn(n,t+o*i,s+i*.18,t+(o+r)*i,e)}function Qy(n,t,e,i){for(let s=3;s>=0;s--)Jy(n,t+i*.9+s*i*.12,e-s*3,i*.9);Yt(n,Qn([[t-i*.1,e-i*.5],[t+i*.45,e-i*.5],[t+i*.5,e-i*.2],[t-i*.15,e-i*.2]])),Yt(n,Ji(t+i*.18,e-i*.2,i*.22,i*.22),{depth:2}),n.strokeStyle=si,n.lineWidth=1.5;for(let s=0;s<Math.PI;s+=Math.PI/4)Hn(n,t+i*.18-Math.cos(s)*i*.2,e-i*.2-Math.sin(s)*i*.2,t+i*.18+Math.cos(s)*i*.2,e-i*.2+Math.sin(s)*i*.2);Bp(n,t+i*.18,e-i*.5,i*.11)}function tS(n,t,e,i,s){Sc(n,t,e,s),n.fillStyle="rgba(70, 58, 48, 0.07)",n.fillRect(0,0,t,e*.06),Yt(n,Ze(0,e*.06,t,5),{depth:2});const o=e*.1,r=e*.51,a=e*.53,c=e*.63,l=e*.875,h=t*.3,d=t*.7;Zu(n,h-8,d+8,o+e*.1,e*.09,12),Tr(n,h,o+e*.02,r,14),Tr(n,d,o+e*.02,r,14);const f=[.375,.46,.545,.63].map(m=>t*m),p=i==="south"?2:1;i==="north"?(f.forEach((m,v)=>Xi(n,m,r-6,e*(v===p?.38:.33))),Ky(n,f[p]+30,o+e*.02,r-e*.06)):(f.forEach((m,v)=>Yy(n,m,r-6,e*(v===p?.36:.3))),i==="east"&&Yt(n,Ji(f[p]+e*.07,r-e*.2,e*.025,e*.03),{depth:2})),lr(n,t*.04,t*.27,r-4,2,3,e*.03),lr(n,t*.73,t*.96,r-4,2,3,e*.03);for(const m of[t*.05,t*.95])Hp(n,m+(m<t/2?14:-14),o+e*.03,r-e*.16),i!=="east"&&Zy(n,m,r-e*.11,e*.065);$y(n,t*.02,a,t*.98,c);for(const m of[t*.02+6,h,t/2,d,t*.98-6])qy(n,m,a-8,c+6,10);if(i==="south"&&(n.fillStyle=Fr(Np),n.fillRect(t*.43,a-8,t*.14,c-a+16),jy(n,t/2,a-4,l-e*.1,t*.15,7),Xi(n,t*.405,l,e*.3),Xi(n,t*.595,l,e*.3)),i==="south")lr(n,t*.04,t*.35,l,2,4,e*.028),lr(n,t*.65,t*.96,l,2,4,e*.028),Zu(n,t*.43,t*.57,l,e*.08,8);else if(i==="north")lr(n,t*.04,t*.96,l,2,11,e*.028);else if(i==="east"){Ku(n,t*.04,l,t*.1,e*.2),Ku(n,t*.86,l,t*.1,e*.2);for(let m=0;m<7;m++)Xi(n,t*(.2+m*.1),l,e*.2,{arms:m%2?"raised":"down"})}else{for(let m=0;m<4;m++)qu(n,t*(.1+m*.09),l,e*.18,1);for(let m=0;m<5;m++)qu(n,t*(.9-m*.09),l,e*.18,-1)}Yt(n,Ze(0,l+4,t,5),{depth:2});for(let m=20;m<t;m+=36)Yt(n,Qn([[m,e*.935],[m+9,e*.905],[m+18,e*.935],[m+9,e*.965]]),{depth:1,width:1});Yt(n,Ze(0,e*.975,t,5),{depth:2})}function eS(n,t,e){const i=e*.5;Yt(n,Ze(t*.08,i-6,t*.84,12));for(const s of[t*.12,t*.88])for(const o of[-14,0,14])Yt(n,Qn([[s+o,i-6],[s+o-7,i-6],[s+o-3.5,i-e*.22]]),{depth:2});for(const s of[t*.22,t*.63,t*.8])Tr(n,s,e*.26,i-6,9),Xi(n,s,e*.26,e*.1);for(const s of[t*.32,t*.72])Yt(n,Qn([[s-9,i-6],[s+9,i-6],[s+5,e*.2],[s,e*.15],[s-5,e*.2]]));Tr(n,t*.455,e*.3,i-6,9),Tr(n,t*.545,e*.3,i-6,9),Yt(n,Qn([[t*.43,e*.3],[t*.5,e*.19],[t*.57,e*.3]]));for(let s=0;s<4;s++)Qy(n,t*(.06+s*.235),e*.9,e*.3)}function nS(n,t,e){Yt(n,Qn([[t*.38,e*.4],[t*.42,e*.31],[t*.92,e*.25],[t*.92,e*.55],[t*.42,e*.49]]),{fill:"rgb(226, 206, 196)"}),Yt(n,Ze(t*.42,e*.55,t*.5,e*.035)),Yt(n,i=>{i.ellipse(t*.93,e*.42,t*.03,e*.17,0,-Math.PI/2,Math.PI/2),i.lineTo(t*.92,e*.59),i.lineTo(t*.92,e*.25),i.closePath()});for(const i of[t*.5,t*.58,t*.66])Xi(n,i,e*.29,e*.17);n.strokeStyle=si,n.lineWidth=2;for(const i of[-6,6])Hn(n,t*.38,e*.4+i,t*.21,e*.42+i);ju(n,t*.19,e*.44,e*.07);for(const i of[t*.1,t*.28])Xi(n,i,e*.5,e*.17);Hn(n,t*.04,e*.69,t*.78,e*.69);for(let i=0;i<11;i++)Xi(n,t*(.06+i*.066),e*.92,e*.26,{arms:i%3===1?"raised":"down"});ju(n,t*.86,e*.84,e*.08),Xi(n,t*.95,e*.92,e*.24)}function Ju(n,t,e,i,s,o){const r=t*.165,a=t*.835,c=e*.08,l=e*.78,h=l-c;n.fillStyle="rgba(70, 58, 48, 0.05)",n.fillRect(r,c,a-r,h),n.strokeStyle=si,n.lineWidth=2.4,n.strokeRect(r,c,a-r,h),n.lineWidth=1.3,n.strokeRect(r+8,c+8,a-r-16,h-16);for(const v of[-1,1]){const _=v<0?r:a,g=_+v*t*.055;n.lineWidth=2.4,n.beginPath(),n.moveTo(_,c+h*.18),n.lineTo(g,c+h*.02),n.lineTo(g,l-h*.02),n.lineTo(_,l-h*.18),n.stroke()}if(!o)return;n.textAlign="center",n.textBaseline="middle","letterSpacing"in n&&(n.letterSpacing="0.07em"),n.font=`100px ${s}`;const d=Math.max(...i.map(v=>n.measureText(v).width)),f=Math.min((a-r)*.9*100/d,h*.84/(i.length*1.25));n.font=`${f.toFixed(1)}px ${s}`;const p=f*1.25,m=(c+l)/2-p*(i.length-1)/2;i.forEach((v,_)=>{const g=m+_*p;n.fillStyle=zp,n.fillText(v,t/2+1.5,g+1.5),n.fillStyle=kp,n.fillText(v,t/2,g)}),"letterSpacing"in n&&(n.letterSpacing="0px")}function iS(n,t,e,i,s,o){Sc(n,t,e,s),i==="south"?eS(n,t,e):i==="north"?nS(n,t,e):i==="east"?Ju(n,t,e,Dy,Zh,o):Ju(n,t,e,Ny,Or,o),n.fillStyle="rgba(70, 58, 48, 0.06)",n.fillRect(0,e*.94,t,e*.06),Yt(n,Ze(0,e*.935,t,5),{depth:2})}function sS(n,t,e,i){Sc(n,t,e,i);const s=13,o=t/s;for(let r=0;r<s;r++){const a=o*(r+.5),c=o*.34,l=e*.9,h=e*.42,d=n.createLinearGradient(0,h-c,0,l);d.addColorStop(0,"rgba(60, 50, 42, 0.42)"),d.addColorStop(1,"rgba(60, 50, 42, 0.12)"),n.fillStyle=d,n.strokeStyle=si,n.lineWidth=2,n.beginPath(),n.moveTo(a-c,l),n.lineTo(a-c,h),n.arc(a,h,c,Math.PI,0),n.lineTo(a+c,l),n.closePath(),n.fill(),n.stroke()}Yt(n,Ze(0,e*.06,t,6),{depth:2}),Yt(n,Ze(0,e*.9,t,6),{depth:2})}const oS=[[214,200,174],[200,186,160],[224,214,192],[186,178,162],[206,190,172],[172,168,156]],rS=[138,128,112],aS="rgba(54, 46, 40, 0.92)";function Gp(n,t,e,i){n.fillStyle=aS,n.beginPath(),n.roundRect(t-i/2,e-i/2,i,i,i*.3),n.fill(),n.fillStyle="rgba(255, 255, 255, 0.28)",n.fillRect(t-i/2,e+i/2-1.5,i,1.5)}function cS(n,t,e,i,s,o){const r=t.range(.92,1.06),a=t.pick(oS).map(l=>l*r);n.fillStyle=Fr(a),n.fillRect(e,i,s,o);for(let l=0;l<3;l++)n.fillStyle=Fr(a.map(h=>h*.84),t.range(.12,.4)),n.beginPath(),n.ellipse(e+t.next()*s,i+t.next()*o,s*t.range(.08,.3),o*t.range(.1,.35),0,0,Math.PI*2),n.fill();n.fillStyle="rgba(255, 255, 255, 0.2)",n.fillRect(e,i,s,2),n.fillStyle="rgba(0, 0, 0, 0.2)",n.fillRect(e,i+o-2,s,2);const c=t.chance(.35)?0:t.int(1,3);for(let l=0;l<c;l++)Gp(n,e+t.range(.1,.9)*s,i+t.range(.25,.75)*o,t.range(9,16))}function lS(n,t,e,i,{base:s,top:o,height:r}){Qr(n,t,e,rS);const a=e/r;let c=e;for(;c>0;){const l=s+(o-s)*(1-c/e),h=t/l,d=Math.max(0,c-i.range(.55,.95)*a);let f=-i.range(0,.8)*h;for(;f<t;){const p=i.range(.5,1.7)*h;cS(n,i,f+2,d+2,p-4,c-d-4),f+=p}c=d}Ei(n,t,e,i,{count:t*e/120,color:[120,110,96],size:1.6,alpha:.22}),Ei(n,t,e,i,{count:t*e/200,color:[240,232,216],size:1.4,alpha:.25})}function Qu(n,t,e,i,{inscription:s=null,fonts:o=!0}={}){Sc(n,t,e,i);for(let d=0;d<26;d++)n.fillStyle=`rgba(110, 118, 128, ${i.range(.04,.12)})`,n.fillRect(0,i.next()*e,t,i.range(2,9));const r=s?e*.3:e*.92,a=s?22:64;for(let d=0;d<a;d++)Gp(n,i.range(.03,.97)*t,i.range(.06,1)*r,i.range(16,26));if(!s||!o)return;n.textAlign="center",n.textBaseline="middle",n.font=`100px ${Or}`;const c=Math.max(...s.map(d=>n.measureText(d).width)),l=e*.62/s.length,h=Math.min(t*.9*100/c,l*.8);n.font=`${h.toFixed(1)}px ${Or}`,s.forEach((d,f)=>{const p=e*.36+l*(f+.5);n.fillStyle=zp,n.fillText(d,t/2+1.5,p+1.5),n.fillStyle=kp,n.fillText(d,t/2,p)})}const gi=(n,t)=>(e,i,s,o)=>t(e,i,s,fn(cp(n)),o);let Na=null;function hS(n){return Na||(Na={faces:mh.map(t=>mi(512,4096,gi(`walled-${t}`,(e,i,s,o)=>lS(e,i,s,o,n)))),cap:mi(256,256,gi("walled-cap",(t,e,i,s)=>{Qr(t,e,i,[204,190,166]),Ei(t,e,i,s,{count:1500,color:[150,138,120],size:2,alpha:.3})})),pedestal:mi(1024,428,gi("walled-pedestal",(t,e,i,s)=>Qu(t,e,i,s))),inscribed:mi(1024,428,gi("walled-inscribed",(t,e,i,s,o)=>Qu(t,e,i,s,{inscription:Uy,fonts:o})),{text:!0})},Na)}let Oa=null;function dS(){return Oa||(Oa={faces:Ly.map(n=>mi(512,4096,gi(`face-${n.name}`,(t,e,i,s,o)=>{$u(t,e,i,s),Xy(t,e,i,n,o)}),{text:!0})),upper:Object.fromEntries(mh.map(n=>[n,mi(1024,700,gi(`upper-${n}`,(t,e,i,s)=>tS(t,e,i,n,s)))])),lower:Object.fromEntries(mh.map(n=>[n,mi(1400,460,gi(`lower-${n}`,(t,e,i,s,o)=>iS(t,e,i,n,s,o)),{text:n==="east"||n==="west"})])),arcade:mi(1024,256,gi("arcade",sS)),pyramidion:mi(256,256,gi("pyramidion",$u)),porphyry:mi(256,256,gi("porphyry",Gy),{tile:!0})},Oa)}const uS={steps:[{width:5.6,height:.3},{width:4.8,height:.3}],socle:.25,lower:{width:3.5,height:1.15},arcade:{width:2.5,height:.62},porphyry:.62,upper:{width:3,height:2.15},cornice:.14,cube:{width:.55,height:.5,inset:.95},shaft:{base:2.5,top:1.76,height:17.2},pyramidion:1.35},tf=[[1,1],[1,-1],[-1,1],[-1,-1]];function fS({lod:n="detail"}={}){const t=n==="detail",e=new ut,{steps:i,socle:s,lower:o,arcade:r,porphyry:a,upper:c,cornice:l,cube:h,shaft:d,pyramidion:f}=uS,p=t?pS():null;let m=0;for(const g of i)e.add(y(g.width,g.height,g.width,u.stone,0,m,0)),m+=g.height;e.add(y(o.width+.3,s,o.width+.3,u.marble,0,m,0)),m+=s,e.add(t?fl(o.width,o.height,m,p.lower):y(o.width,o.height,o.width,u.marble,0,m,0)),m+=o.height,e.add(t?fl(r.width,r.height,m,p.arcade):y(r.width,r.height,r.width,u.marble,0,m,0));const v=c.width/2-a/2;for(const[g,S]of tf)e.add(y(a,r.height,a,t?p.porphyry:u.stoneDark,g*v,m,S*v));m+=r.height;const _=c.height-l;e.add(t?fl(c.width,_,m,p.upper):y(c.width,_,c.width,u.marble,0,m,0)),m+=_,e.add(y(c.width+.16,l,c.width+.16,u.marble,0,m,0)),m+=l;for(const[g,S]of tf)e.add(y(h.width,h.height,h.width,t?p.bronze:u.bronze,g*h.inset,m,S*h.inset));if(m+=h.height,t){const g=new be(pp({...d,tip:f}),[...p.faces,p.pyramidion]);g.position.y=m,g.castShadow=g.receiveShadow=!0,e.add(g)}else{const g=M=>M/Math.SQRT2,S=new ji(g(d.top),g(d.base),d.height,4,1).rotateY(Math.PI/4).translate(0,d.height/2,0);e.add(U(S,u.hieroglyphs,0,m,0));const x=new Zo(g(d.top),f,4).rotateY(Math.PI/4).translate(0,f/2,0);e.add(U(x,u.granite,0,m+d.height,0))}return ze(e)}let Fa=null;function pS(){if(Fa)return Fa;const n=dS(),t=o=>new _e({map:o,bumpMap:o,bumpScale:.012,roughness:.6}),e=o=>new _e({map:o,bumpMap:o,bumpScale:.02,roughness:.52}),i=o=>[t(o.north),t(o.south),u.marble,u.marble,t(o.east),t(o.west)],s=t(n.arcade);return Fa={lower:i(n.lower),upper:i(n.upper),arcade:[s,s,u.marble,u.marble,s,s],porphyry:new _e({map:n.porphyry,roughness:.82}),bronze:new _e({color:6059366,metalness:.55,roughness:.55}),faces:n.faces.map(e),pyramidion:new _e({map:n.pyramidion,roughness:.52})},Fa}function fl(n,t,e,i){const s=new be(new Ti(n,t,n),i);return s.position.y=e+t/2,s.castShadow=s.receiveShadow=!0,s}const mS={plinth:{width:3.2,height:.3},capital:{width:1.5,height:.9},shaft:{height:5.4,coils:29,radius:[.26,.2],body:[.085,.115]},neck:{rise:1.5,reach:1.1},head:1.5},Za=new _e({color:6514764,metalness:.55,roughness:.5}),gS=new _e({color:15129780,metalness:.1,roughness:.25});function _S({lod:n="detail"}={}){const t=n==="detail",e=new ut,{plinth:i,capital:s,shaft:o,neck:r,head:a}=mS;e.add(y(i.width,i.height,i.width,u.marble,0,0,0)),e.add(z(s.width*.68,s.width*.5,s.height-.15,u.marble,0,i.height,0,8)),e.add(y(s.width,.15,s.width,u.marble,0,i.height+s.height-.15,0));const c=i.height+s.height,l=o.coils/3,h=t?520:180;for(let d=0;d<3;d++){const f=d/3*Math.PI*2,p=[];for(let M=0;M<=h;M++){const C=M/h,T=f+C*l*Math.PI*2,R=bi.lerp(o.radius[0],o.radius[1],C);p.push(new L(Math.cos(T)*R,c+C*o.height,Math.sin(T)*R))}const m=f+l*Math.PI*2,v=(M,C,T)=>new L(Math.cos(m+M)*C,c+o.height+T,Math.sin(m+M)*C),_=[v(.35,.2,.45),v(.6,.3,.85),v(.72,.55,1.15),v(.78,r.reach,r.rise)],g=new _c([...p,..._],!1,"catmullrom",.5),S=vS(g,t?720:220,t?10:6,M=>bi.lerp(o.body[0],o.body[1],Math.min(1,M*1.08)));e.add(U(S,Za));const x=_.at(-1).clone().sub(_.at(-2));x.y*=.25,e.add(MS(_.at(-1),x.normalize(),a,t))}return ze(e)}function vS(n,t,e,i){const s=new Mc(n,t,1,e,!1),o=s.attributes.position,r=new L,a=new L;for(let c=0;c<=t;c++){n.getPointAt(c/t,a);const l=i(c/t);for(let h=0;h<=e;h++){const d=c*(e+1)+h;r.fromBufferAttribute(o,d).sub(a).multiplyScalar(l).add(a),o.setXYZ(d,r.x,r.y,r.z)}}return s.computeVertexNormals(),s}function MS(n,t,e,i){const s=new ut;s.position.copy(n),s.lookAt(n.clone().add(t)),s.scale.setScalar(e);const o=new dn(1,i?12:8,i?8:6),r=U(o,Za,0,.02,.17);r.scale.set(.15,.085,.27),s.add(r);const a=new ut;a.position.set(0,-.04,0),a.rotation.x=.62;const c=U(o,Za,0,0,.17);if(c.scale.set(.12,.05,.25),a.add(c),s.add(a),!i)return s;for(const h of[-1,1]){const d=y(.07,.022,.1,Za,h*.09,.072,.13);d.rotation.z=-h*.45,s.add(d);const f=U(o,gS,h*.1,.055,.14);f.scale.setScalar(.03),s.add(f)}const l=z(.008,.016,.3,u.bronze,0,-.02,.3,5);l.rotation.x=Math.PI/2,s.add(l);for(const h of[-1,1]){const d=z(.004,.009,.1,u.bronze,h*.02,-.02,.5,4);d.rotation.x=Math.PI/2,d.rotation.z=h*.25,s.add(d)}return s}const Vp={steps:[{width:5.4,height:.4},{width:4.6,height:.4}],slab:{width:4,height:.3},pedestal:{width:3.6,height:1.5},shaft:{base:3.4,top:1.9,height:28.7},cap:.6};function xS({lod:n="detail"}={}){const t=n==="detail",e=new ut,{steps:i,slab:s,pedestal:o,shaft:r,cap:a}=Vp,c=t?yS():null;let l=0;for(const h of i)e.add(y(h.width,h.height,h.width,u.marble,0,l,0)),l+=h.height;if(e.add(y(s.width,s.height,s.width,u.marble,0,l,0)),l+=s.height,t){const h=new be(new Ti(o.width,o.height,o.width),c.pedestal);h.position.y=l+o.height/2,h.castShadow=h.receiveShadow=!0,e.add(h)}else e.add(y(o.width,o.height,o.width,u.marble,0,l,0));if(l+=o.height,t){const h=new be(pp({...r,tip:a}),[...c.faces,c.cap]);h.position.y=l,h.castShadow=h.receiveShadow=!0,e.add(h)}else{const h=m=>m/Math.SQRT2,d=new ji(h(r.top),h(r.base),r.height,4,1).rotateY(Math.PI/4).translate(0,r.height/2,0),f=d.attributes.uv;for(let m=0;m<f.count;m++)f.setXY(m,f.getX(m)*12,f.getY(m)*r.height);e.add(U(d,u.stone,0,l,0));const p=new Zo(h(r.top),a,4).rotateY(Math.PI/4).translate(0,a/2,0);e.add(U(p,u.stone,0,l+r.height,0))}return ze(e)}let ka=null;function yS(){if(ka)return ka;const n=hS(Vp.shaft),t=(i,s)=>new _e({map:i,bumpMap:i,bumpScale:s,roughness:.9}),e=t(n.pedestal,.015);return ka={faces:n.faces.map(i=>t(i,.03)),cap:new _e({map:n.cap,roughness:.9}),pedestal:[e,e,u.marble,u.marble,t(n.inscribed,.012),e]},ka}const Qe=-160,wn=215,Eo=38,di=62,kr=[-114,134],ef=2.6,nf=59.5,pl=16.6,Oo=17,za=6.5,SS=40,ln=1.6,Ar={"obelisk-of-theodosius":{x:72,create:fS},"serpent-column":{x:22,create:_S},"walled-obelisk":{x:-62,create:xS}};function bS({lod:n="detail"}={}){const t=n==="detail",e=new ut;return e.add(y(520,1,190,u.paving,30,-1,0)),e.add(U(new ii(ES(),24).rotateX(-Math.PI/2),u.sand,0,.05,0)),TS(e,t),AS(e,t),t&&RS(e),PS(e,n),CS(e,t),IS(e,t),ze(e),t&&LS(e),e}function ES(){const n=new Fe;return n.moveTo(wn,Eo),n.lineTo(Qe,Eo),n.absarc(Qe,0,Eo,Math.PI/2,Math.PI*1.5,!1),n.lineTo(wn,-Eo),n}function wS(n,t){const e=new Fe;return e.moveTo(wn,t),e.lineTo(Qe,t),e.absarc(Qe,0,t,Math.PI/2,Math.PI*1.5,!1),e.lineTo(wn,-t),e.lineTo(wn,-n),e.lineTo(Qe,-n),e.absarc(Qe,0,n,Math.PI*1.5,Math.PI/2,!0),e.lineTo(wn,n),e.lineTo(wn,t),e}function dc(n,t,e,i,s,o=24){const r=new Rn(wS(n,t),{depth:i,bevelEnabled:!1,curveSegments:o});return U(r.rotateX(-Math.PI/2),s,0,e,0)}function TS(n,t){const e=t?14:3,i=(nf-Eo)/e,s=(pl-ef)/e;for(let o=0;o<e;o++){const r=Eo+o*i,a=t&&o===7;n.add(dc(r,r+i,0,ef+(o+1)*s-(a?s*.5:0),a?u.stone:u.marble,t?28:16))}n.add(dc(nf,di+2,pl,Oo+.5-pl,u.stone,t?28:16))}function AS(n,t){const e=wn-Qe,i=(wn+Qe)/2;for(const r of[-1,1]){const a=t?U(Tn({length:e,height:Oo,thickness:2,openings:[...qi(e,46,{width:4.4,bottom:0,spring:5.5}),...qi(e,46,{width:3.2,bottom:9,spring:13})]}),u.banded):y(e,Oo,2,u.banded);a.position.set(i,0,r*(di+1)),n.add(a)}const s=new Fe;s.moveTo(Qe,di+2),s.absarc(Qe,0,di+2,Math.PI/2,Math.PI*1.5,!1),s.lineTo(Qe,-di+1),s.absarc(Qe,0,di-1,Math.PI*1.5,Math.PI/2,!0),s.lineTo(Qe,di+2);const o=new Rn(s,{depth:Oo,bevelEnabled:!1,curveSegments:32});if(n.add(U(o.rotateX(-Math.PI/2),u.banded)),t){const a=ne(4.4,7.5),c=ne(3,5);for(let l=1;l<=25;l++){const h=Math.PI/2+l/26*Math.PI;n.add(qe(U(a,u.opening),h,di+2.05,0,Qe,0)),n.add(qe(U(c,u.opening),h,di+2.05,10,Qe,0))}}}function RS(n){const t=Oo+.5,e=di+.5,i=7.5,s=wn-Qe,o=Math.round(s/i)+1;for(const d of[-1,1]){const f=He({length:s,count:o,height:za,radius:.5,capitalMaterial:u.marble});f.position.set((wn+Qe)/2,t,d*e),n.add(f)}const r=Math.round(Math.PI*e/i),a=We(.425,.5,za-.8,10),c=nn(1.2,.3,1.2),l=We(.8,.45,.5,10);for(let d=1;d<r;d++){const f=Math.PI/2+d/r*Math.PI,p=Qe+Math.cos(f)*e,m=Math.sin(f)*e;n.add(U(c,u.marble,p,t,m)),n.add(U(a,u.marble,p,t+.3,m)),n.add(U(l,u.marble,p,t+za-.5,m))}const h=t+za;n.add(dc(e-1.6,e+1.6,h,1,u.marble,32)),n.add(dc(e-4.2,e+2.4,h+1,.9,u.roof,32))}function PS(n,t){const[e,i]=kr,s=i-e-8,o=(e+i)/2;n.add(y(s,ln,7,u.marble,o,0,0)),n.add(y(s,.35,7.6,u.marble,o,ln-.35,0));for(const r of kr){n.add(z(3.8,3.8,ln,u.marble,r,0,0,20));for(const a of[-2,0,2])n.add(tr(.8,6,u.gold,r,ln,a,10))}for(const[r,a]of[[-50,-30],[-16,16],[52,64],[80,102]]){const c=(r+a)/2;for(const l of[-2.1,2.1])n.add(y(a-r,.3,.4,u.marble,c,ln,l));for(const l of[r+.2,a-.2])n.add(y(.4,.3,4.6,u.marble,l,ln,0));n.add(y(a-r-.8,.22,3.8,u.waterSide,c,ln,0))}if(t==="detail")for(const{x:r,create:a}of Object.values(Ar)){const c=a({lod:t});c.position.set(r,ln,0),n.add(c)}for(const r of[-96,-24,46,110])n.add(y(1.8,.5,1.8,u.marble,r,ln,0)),n.add(z(.6,.72,8.5,u.marble,r,ln+.5,0,10)),n.add(z(.9,.6,.5,u.marble,r,ln+9,0,10)),n.add(z(.35,.5,2.2,u.bronze,r,ln+9.5,0,8)),n.add(z(.3,.3,.6,u.bronze,r,ln+11.7,0,8));for(const r of[-82,122]){n.add(y(3.2,1.2,2,u.marble,r,ln,0));const a=Dp(u.bronze);a.scale.setScalar(1.2),a.position.set(r,ln+1.2,0),n.add(a)}}function CS(n,t){const e=SS,i=Oo;if(n.add(y(30,i,30,u.banded,e,0,65)),n.add(y(30,.6,30,u.marble,e,i,65)),n.add(y(30,7.5,20,u.banded,e,i+.6,70)),n.add(y(31,1.2,31,u.marble,e,i+8.1,65)),n.add(Oe(31,31,6,u.lead,e,i+9.3,65)),n.add(z(4,4,i+9,u.banded,e+18,0,77,12)),n.add(tr(4.6,3.2,u.lead,e+18,i+9,77,12)),n.add(y(8,5,12,u.banded,e,i-5,86)),n.add(y(9,.6,13,u.lead,e,i,86)),n.add(y(28,7.5,.3,Un(6037347),e,i+.6,60.3)),n.add(y(28,2.2,.3,Un(6037347),e,i+5.9,51.2)),!t)return;const s=He({length:26,count:7,height:7.5,radius:.4,capitalMaterial:u.gold});s.position.set(e,i+.6,51.5),n.add(s);for(const o of[-1,1]){const r=He({length:6,count:2,height:7.5,radius:.4,capitalMaterial:u.gold});r.position.set(e+o*13,i+.6,56),r.rotation.y=Math.PI/2,n.add(r)}n.add(y(2.4,.5,2.4,u.marble,e,i+.6,57)),n.add(y(1.4,1.6,1.2,u.gold,e,i+1.1,57.4))}function IS(n,t){const e=wn+6;n.add(y(12,13,124,u.banded,e,0,0)),n.add(y(14,20,16,u.banded,e,0,0)),n.add(y(16,.8,18,u.marble,e,20,0));for(const a of[-1,1])n.add(y(15,22,15,u.banded,e,0,a*66)),n.add(U(se(15),u.banded,e,22,a*66+7));if(!t)return;const i=Up({horseMaterial:u.gildedBronze,carMaterial:u.gold,colorMaterial:u.gildedBronze});i.scale.setScalar(1.8),i.rotation.y=Math.PI,i.position.set(e+1,20.8,0),n.add(i);const s=qt({count:12,spacing:9.5,width:5,height:8,y:.5,skip:a=>Math.abs(a)<8});s.position.x=wn-.05,s.rotation.y=-Math.PI/2,n.add(s);const o=qt({count:11,spacing:9.5,width:2.4,height:3.2,y:9,skip:a=>Math.abs(a)<8});o.position.x=wn-.05,o.rotation.y=-Math.PI/2,n.add(o);for(const[a,c]of[[-7.05,-Math.PI/2],[7.05,Math.PI/2]]){const l=U(ne(6,11),u.opening,e+a,.5,0);l.rotation.y=c,n.add(l)}const r=qt({count:2,spacing:8,width:2,height:4,y:13.5});r.position.set(e-7.05,0,0),r.rotation.y=-Math.PI/2,n.add(r)}function LS(n){const t=[{color:3104168,lane:15,speed:17,offset:0},{color:3836476,lane:19,speed:16.4,offset:30},{color:11743276,lane:23,speed:16.8,offset:70},{color:15921126,lane:27,speed:16,offset:110}];for(const{color:e,lane:i,speed:s,offset:o}of t){const r=Up({horseMaterial:u.trunk,carMaterial:u.gold,colorMaterial:Un(e)});r.scale.setScalar(1.6),r.position.y=.05;const a=2*(kr[1]-kr[0])+2*Math.PI*i;r.userData.animate=c=>{const{x:l,z:h,heading:d}=DS((c*s+o)%a,i);r.position.x=l,r.position.z=h,r.rotation.y=d},n.add(r)}}function DS(n,t){const[e,i]=kr,s=i-e,o=Math.PI*t;if(n<s)return{x:e+n,z:t,heading:0};if(n-=s,n<o){const a=n/t;return{x:i+t*Math.sin(a),z:t*Math.cos(a),heading:a}}if(n-=o,n<s)return{x:i-n,z:-t,heading:Math.PI};const r=(n-s)/t;return{x:e-t*Math.sin(r),z:-t*Math.cos(r),heading:Math.PI+r}}const ct=20,Jt=11,Ve=5,Pe=88,Wp=6037347,Kh={thetaStart:-Math.PI/2,thetaLength:Math.PI};function US({lod:n="detail"}={}){const t=n==="detail",e=new ut;ml(e,260,92,ct,-56,t),ml(e,260,60,Jt,20,t),ml(e,260,38,Ve,69,t);for(const[s,o,r,a]of[[-110,-10,Jt,ct],[40,50,Ve,Jt],[-20,50,Ve,Jt]]){const c=jr(10,10,(a-r)/10,1.2,u.marble);c.position.set(s,r,o+12),c.rotation.y=Math.PI,e.add(c)}NS(e,t),OS(e,t),FS(e,t),kS(e,t),zS(e,t),BS(e,t),HS(e,t),GS(e,t),VS(e,t),WS(e,t),XS(e,t),YS(e),$S(e,t);const i=t?[[-118,ct,-26],[-108,ct,-18],[-98,ct,-28],[118,ct,-60],[110,ct,-86],[122,ct,-70],[46,ct,-14],[60,ct,-42],[8,ct,-14],[4,ct,-46],[40,ct,-46],[120,ct,-20],[-120,Jt,40],[-118,Jt,14],[66,Jt,38],[80,Jt,44],[122,Jt,40],[124,Jt,4],[-118,Ve,60],[-126,Ve,76],[20,Ve,58],[34,Ve,56]]:[[-110,ct,-30],[118,ct,-60],[66,Jt,36],[-118,Ve,60]];for(const[s,o,r]of i)e.add(Math.abs(s)>100||o===Ve?yi(9,s,o,r):ei(12,s,o,r));return ze(e),t&&ZS(e),e}function ml(n,t,e,i,s,o){if(n.add(y(t,i+2,e,u.banded,0,-2,s)),n.add(Xt(t,e,u.paving,0,i+.03,s)),!o)return;const r=s+e/2,a=i===ct?Jt:i===Jt?Ve:0,c=qt({count:Math.floor(t/9),spacing:9,width:3.2,height:Math.min(6,i-a-1.5),y:.6});c.position.set(0,a,r+.02),n.add(c)}function NS(n,t){if(n.add(Xt(50,40,u.grass,24,ct+.05,-30)),n.add(Xt(36,20,u.grass,-112,ct+.05,-22)),n.add(Xt(24,40,u.grass,118,ct+.05,-74)),n.add(Xt(66,24,u.grass,92,Ve+.05,66)),n.add(Xt(20,40,u.grass,-120,Jt+.05,26)),!!t)for(const e of[62,122])for(const i of[-5,5])n.add(z(.2,.25,3,u.wood,e,Ve,66+i,6))}function Es(n,t,e,i,s,o,r,a,c,l,h=12){n.add(Ne(z(t,t,e,i,o,r,a,h,Kh),c,l)),n.add(Ne(Me(t,s,o,r+e,a,{phiLength:Math.PI,heightScale:.8,segments:h}),c,l))}function gl(n,t,e,i,s,o,r,a=16){const c=We(n,n,t,a,Kh).translate(0,-t/2,0).rotateX(-Math.PI/2);return r&&c.rotateY(Math.PI/2),U(c,e,i,s,o)}function ws(n,t,e,i,s,o,r,{windows:a=0,segments:c=20,heightScale:l=.8,wall:h=u.brick}={}){if(n.add(z(t,t,e,h,s,o,r,c)),n.add(Me(t,i,s,o+e,r,{heightScale:l,segments:c})),a){const d=ne(Math.min(1.2,t*.35),e*.7);for(let f=0;f<a;f++)n.add(qe(U(d,u.opening),f/a*Math.PI*2,t+.03,o+e*.15,s,r))}}function OS(n,t){const[e,i]=[-70,-84];n.add(y(20,16,20,u.marble,e,ct,i)),n.add(y(21,1,21,u.marble,e,ct+15.6,i));for(const o of[-1,1])n.add(y(8,11,18,u.marble,e+o*14,ct,i)),n.add(gl(4,18,u.gildedBronze,e+o*14,ct+11,i,!1));n.add(gl(5,20.5,u.gildedBronze,e,ct+16.6,i,!0)),n.add(gl(5,20.5,u.gildedBronze,e,ct+16.6,i,!1)),ws(n,6,2.5,u.gildedBronze,e,ct+20.5,i,{windows:t?8:0,wall:u.marble,heightScale:.7}),n.add(y(.5,2.6,.5,u.gold,e,ct+27.3,i)),n.add(y(1.6,.4,.5,u.gold,e,ct+29.1,i));const s=i-10.05;n.add(U(ne(5.5,8.5),u.opening,e,ct,s-.02)),n.add(y(5,7.5,.5,u.bronze,e,ct,s-.1)),n.add(y(4,4.6,.5,u.gold,e,ct+9.5,s-.1)),n.add(y(1.6,3.4,.2,Un(3821434),e,ct+10.1,s-.4)),n.add(y(1.1,1.1,.2,Un(15258288),e,ct+12.6,s-.4));for(const o of[-1,1]){const r=On("imperial",t?{width:4,height:2.6,pole:14}:{width:7,height:4.5,pole:18});r.position.set(e+o*24,ct,i-13),n.add(r)}if(n.add(y(9,8,9,u.brick,e+26,ct,i-4)),ws(n,2.6,2,u.lead,e+26,ct+8,i-4,{windows:t?8:0,segments:12}),Es(n,2.2,5.5,u.brick,u.lead,e+30.5,ct,i-4,1,0,8),t)for(const o of[-1,1]){const r=qt({count:3,spacing:4,width:1.4,height:3.6,y:8});r.position.set(e+o*14,ct,s),n.add(r)}}function FS(n,t){for(const[e,i,s]of[[-6,-92,46],[36,-62,16]])if(n.add(y(s,8,12,u.stone,e,ct,i)),n.add(Oe(s,12,3.5,u.roof,e,ct+8,i)),t){const o=qt({count:Math.floor(s/5),spacing:5,width:1.2,height:2.4,y:4});o.position.set(e,ct,i+6.05),n.add(o)}}function kS(n,t){const[e,i,s,o]=[-99,-43,52,14];if(n.add(y(s,12,o,u.stone,e,ct,i)),n.add(xe(s,o,4.5,u.roof,e,ct+12,i)),Es(n,5,9,u.stone,u.lead,e-s/2,ct,i,-1,0),!!t)for(let r=0;r<9;r++){const a=e-s/2+4+r*5.5;for(const c of[-1,1])Es(n,2.2,7,u.stone,u.lead,a,ct,i+c*o/2,0,c,8)}}function zS(n,t){const[e,i]=[-10,-62];n.add(y(70,14,18,u.stone,e,ct,i)),n.add(y(71,.8,19,u.marble,e,ct+7,i)),n.add(Oe(70,18,5,u.roof,e,ct+14,i));const s=e-45;n.add(z(8,8,12,u.stone,s,ct,i,8)),ws(n,6.5,2.5,u.lead,s,ct+12,i,{windows:t?8:0,wall:u.stone,segments:16}),n.add(y(58,6,6,u.stone,-101,ct,i)),n.add(xe(58,6,2.2,u.roof,-101,ct+6,i)),n.add(y(16,.4,6,Un(Wp),e,ct+8.2,i+12));for(const o of[-1,1])n.add(z(.12,.12,8.2,u.wood,e+o*7.8,ct,i+14.8,6));if(t){const o=He({length:66,count:14,height:7,radius:.4});o.position.set(e,ct,i+13),n.add(o),n.add(y(68,.6,5.5,u.roof,e,ct+7,i+12.5));for(const a of[2.4,9.6]){const c=qt({count:14,spacing:4.8,width:1.6,height:3,y:a});c.position.set(e,ct,i+9.05),n.add(c)}const r=qt({count:14,spacing:4.8,width:1.6,height:3,y:9.6});r.position.set(e,ct,i-9.05),r.rotation.y=Math.PI,n.add(r)}}function BS(n,t){const[e,i]=[70,-72];n.add(y(46,11,28,u.stone,e,ct,i)),n.add(y(46,18,14,u.stone,e,ct,i)),n.add(xe(46,14,4,u.roof,e,ct+18,i));for(const s of[-1,1]){const o=y(46.6,.5,7.6,u.roof,e,ct+11,i+s*10.5);o.rotation.x=s*.18,n.add(o)}if(Es(n,6.5,15,u.stone,u.lead,e+23,ct,i,1,0,16),n.add(y(46,9,6,u.stone,e,ct,i-17)),n.add(y(46.6,.5,6.6,u.lead,e,ct+9,i-17)),t){for(const r of[-1,1]){const a=qt({count:8,spacing:5,width:1.8,height:3.2,y:13});a.position.set(e,ct,i+r*7.05),a.rotation.y=r>0?0:Math.PI,n.add(a);const c=qt({count:8,spacing:5,width:1.6,height:3,y:5});c.position.set(e,ct,i+r*14.05),c.rotation.y=r>0?0:Math.PI,n.add(c)}const s=qt({count:3,spacing:9,width:2.6,height:5.5,y:0});s.position.set(e,ct,i-20.05),s.rotation.y=Math.PI,n.add(s);const o=He({length:40,count:9,height:8.5,radius:.45});o.position.set(e,ct,i-22),n.add(o),n.add(y(44,.6,5,u.lead,e,ct+8.5,i-22))}}function HS(n,t){const[e,i]=[22,-28];n.add(z(14,14,15,u.brick,e,ct,i,8)),n.add(z(14.3,14.3,.8,u.marble,e,ct+14.2,i,8));for(let s=0;s<8;s++){const o=s/8*Math.PI*2+Math.PI/8,r=z(5,5,10,u.brick,0,0,0,12,Kh);n.add(qe(r,o,12.6,ct,e,i));const a=Me(5,u.lead,0,0,0,{phiLength:Math.PI,heightScale:.7,segments:12});n.add(qe(a,o,12.6,ct+10,e,i))}if(ws(n,12.5,4,u.lead,e,ct+15,i,{windows:t?16:0,segments:32,heightScale:.55}),n.add(y(.5,3,.5,u.gold,e,ct+25.8,i)),n.add(y(1.8,.5,.5,u.gold,e,ct+27.8,i)),n.add(y(36,9,12,u.stone,-10,ct,i)),n.add(xe(36,12,3.5,u.roof,-10,ct+9,i)),t){const s=qt({count:7,spacing:5,width:1.4,height:2.8,y:4.5});s.position.set(-10,ct,i+6.05),n.add(s)}}function GS(n,t){const[e,i]=[96,-46];n.add(y(16,11,16,u.brick,e,ct,i)),n.add(y(16.5,.5,16.5,u.lead,e,ct+11,i));for(const[r,a]of[[1,0],[-1,0],[0,-1]])Es(n,5,9,u.brick,u.lead,e+r*8,ct,i+a*8,r,a);if(n.add(Xt(28,14,u.mosaic,e,ct+.08,i+15)),!t)return;const s=11;for(let r=0;r<=s;r++){const a=r/s*Math.PI,c=He({length:0,count:1,height:6,radius:.35});n.add(qe(c,a,13,ct,e,i+12))}const o=new Kr(11,15,24,1,Math.PI,Math.PI).rotateX(-Math.PI/2);n.add(U(o,u.roof,e,ct+6.2,i+12))}function VS(n,t){const[e,i]=[-62,18],[s,o,r]=[60,46,9];n.add(Xt(s,o,u.mosaic,e,Jt+.06,i)),n.add(Xt(s-r*2,o-r*2,u.grass,e,Jt+.1,i)),n.add(z(3.2,3.4,1,u.marble,e,Jt,i,16)),n.add(z(2.8,2.8,.3,u.water,e,Jt+.8,i,16));for(const l of[-1,1]){n.add(y(s+2,7,1.2,u.stone,e,Jt,i+l*(o/2+.6))),n.add(y(1.2,7,o,u.stone,e+l*(s/2+.6),Jt,i));const h=y(s+2,.5,r+1,u.roof,e,Jt+7,i+l*(o/2-r/2+.6));h.rotation.x=-l*.14,n.add(h);const d=y(r+1,.5,o-r*2,u.roof,e+l*(s/2-r/2+.6),Jt+7,i);if(d.rotation.z=l*.14,n.add(d),t){const f=He({length:s-r*2,count:11,height:6.5,radius:.35});f.position.set(e,Jt,i+l*(o/2-r)),n.add(f);const p=He({length:o-r*2-5,count:6,height:6.5,radius:.35});p.rotation.y=Math.PI/2,p.position.set(e+l*(s/2-r),Jt,i),n.add(p)}}const[a,c]=[-14,14];if(n.add(y(16,11,30,u.brick,a,Jt,c)),n.add(xe(30,16,4.5,u.roof,a,Jt+11,c).rotateY(Math.PI/2)),Es(n,6,9,u.brick,u.lead,a,Jt,c+15,0,1,14),t){const l=qt({count:4,spacing:6,width:1.6,height:3.4,y:6});l.position.set(a+8.05,Jt,c),l.rotation.y=Math.PI/2,n.add(l)}}function WS(n,t){const[e,i]=[36,16];n.add(y(16,9,16,u.brick,e,Jt,i)),n.add(y(20,12,6.5,u.brick,e,Jt,i)),n.add(y(6.5,12,20,u.brick,e,Jt,i)),ws(n,3.2,3.5,u.lead,e,Jt+12,i,{windows:t?8:0,segments:16});for(const[s,o]of[[-5.5,-5.5],[5.5,-5.5],[-5.5,5.5],[5.5,5.5]])ws(n,1.8,1.8,u.lead,e+s,Jt+9,i+o,{segments:12});if(Es(n,3,8,u.brick,u.lead,e+10,Jt,i,1,0),n.add(y(.3,2,.3,u.gold,e,Jt+18,i)),t){const s=qt({count:3,spacing:2.2,width:1,height:2.4,y:8});s.position.set(e,Jt,i+10.05),n.add(s)}}function XS(n,t){const[e,i]=[96,14];n.add(y(34,7,30,u.banded,e,Jt,i));const s=Jt+7;n.add(y(26,12,24,u.brick,e,s,i)),n.add(y(27,.8,25,u.marble,e,s+6,i)),n.add(y(26.5,.5,24.5,u.lead,e,s+12,i)),n.add(y(10,16,24.5,u.brick,e,s,i)),n.add(y(26.5,16,10,u.brick,e,s,i)),ws(n,5,4.5,u.gildedBronze,e,s+16,i,{windows:t?12:0,segments:20});for(const[c,l]of[[-9,-8],[9,-8],[-9,8],[9,8]])ws(n,2.6,3,u.gildedBronze,e+c,s+12,i+l,{windows:t?8:0,segments:14});for(const c of[-7,0,7])Es(n,c?2.2:4,c?8:11,u.brick,u.lead,e+13,s,i+c,1,0,10);n.add(y(.4,3,.4,u.gold,e,s+25,i)),n.add(y(1.6,.4,.4,u.gold,e,s+27,i));const o=e-25;n.add(Xt(22,30,u.paving,o,s+.04,i)),n.add(y(22,1,30,u.banded,o,Jt+6,i)),n.add(y(22,6,30,u.banded,o,Jt,i));const r=jr(8,7,1,1.4,u.marble);if(r.position.set(o-11-9.8,Jt,i),r.rotation.y=Math.PI/2,n.add(r),!t)return;for(const c of[-7,7])n.add(z(2.2,2.4,.9,u.marble,o,s,i+c,12)),n.add(z(1.9,1.9,.3,u.water,o,s+.7,i+c,12));for(const c of[-1,1]){const l=He({length:20,count:6,height:5.5,radius:.3});l.position.set(o,s,i+c*13.5),n.add(l),n.add(y(22,.4,3,u.roof,o,s+5.5,i+c*13.5))}const a=He({length:24,count:7,height:5.5,radius:.3});a.rotation.y=Math.PI/2,a.position.set(o-9.5,s,i),n.add(a),n.add(y(3,.4,30,u.roof,o-9.5,s+5.5,i))}function YS(n){const[t,e]=[112,Pe-2];n.add(y(11,30,11,u.banded,t,0,e)),n.add(y(12.5,1,12.5,u.stone,t,30,e)),n.add(y(8,6,8,u.stone,t,31,e)),n.add(U(se(12),u.stone,t,31,e+5.9)),n.add(U(se(12),u.stone,t,31,e-5.9)),n.add(U(se(12),u.stone,t+5.9,31,e).rotateY(Math.PI/2)),n.add(U(se(12),u.stone,t-5.9,31,e).rotateY(Math.PI/2));for(const[i,s]of[[-3,-3],[3,-3],[-3,3],[3,3]])n.add(z(.35,.35,4,u.stone,t+i,37,e+s,6));n.add(y(8,.5,8,u.lead,t,41,e)),n.add(Me(3.2,u.lead,t,41.5,e,{heightScale:1.1,segments:12})),n.add(z(2,2.4,2.5,u.fire,t,37,e,12))}function $S(n,t){const[e,i]=[-40,70],s=Ve+6,o=s+10;n.add(y(i,o-Ve,22,u.stone,e,Ve,75)),n.add(y(i+1,.8,23,u.marble,e,o-.8,75)),n.add(Oe(i,22,5,u.roof,e,o,75)),n.add(y(16,o+4-Ve,18,u.stone,e+i/2-2,Ve,76)),n.add(y(17,.6,19,u.lead,e+i/2-2,o+4,76));const r=t?U(Tn({length:i,height:s,thickness:4,openings:[{x:12,width:5,bottom:0,spring:4.5}]}),u.banded):y(i,s,4,u.banded);r.position.set(e,0,Pe),n.add(r);const a=[-12,0,12].map(h=>({x:h,width:5.5,bottom:s+1.5,spring:s+6.5})),c=[-30,-22,22,30].map(h=>({x:h,width:3,bottom:s+2.5,spring:s+5.5})),l=t?U(Tn({length:i,height:10,thickness:4,openings:[...a,...c].map(h=>({...h,bottom:h.bottom-s,spring:h.spring-s}))}),u.banded):y(i,10,4,u.banded);if(l.position.set(e,s,Pe),n.add(l),n.add(y(i,.6,4.4,u.marble,e,o,Pe)),t){for(const{x:h,width:d,bottom:f,spring:p}of a)n.add(y(d+2.2,p-f+d/2+1.2,.5,u.marble,e+h,f-.6,Pe+2.1)),n.add(U(ne(d,p-f+d/2),u.opening,e+h,f,Pe+2.4));for(const{x:h,width:d,bottom:f,spring:p}of c)n.add(y(d+1.2,p-f+d/2+.8,.4,u.marble,e+h,f-.4,Pe+2.05)),n.add(U(ne(d,p-f+d/2),u.opening,e+h,f,Pe+2.3));n.add(y(44,.7,2.6,u.marble,e,s,Pe+3.3));for(let h=-5;h<=5;h++)n.add(y(1,1.6,2.2,u.marble,e+h*4.2,s-1.6,Pe+3));for(let h=-10;h<=10;h++)n.add(y(.35,1.1,.35,u.marble,e+h*2.2,s+.7,Pe+4.4));n.add(y(44,.3,.4,u.marble,e,s+1.8,Pe+4.4))}for(const[h,d]of[[-130,e-i/2],[e+i/2,130]]){const f=d-h;n.add(y(f,Ve+6,4,u.banded,h+f/2,0,Pe)),n.add(U(se(f),u.banded,h+f/2,Ve+6,Pe+1.6))}for(const h of[-120,-80,10,50,90])n.add(y(9,Ve+11,9,u.banded,h,0,Pe+1));if(t){n.add(Xt(320,90,u.water,0,0,Pe+47)),n.add(y(100,1.3,9,u.stone,e,-.3,Pe+6.5));for(const f of[e-52,e+52])n.add(y(5,1.5,40,u.stone,f,-.3,Pe+21));n.add(y(5,1.5,7,u.stone,e-52,1.2,Pe+38));const h=jr(6,8,.5,.8,u.marble);h.position.set(e+12,1,Pe+8.6),h.rotation.y=Math.PI,n.add(h);for(const f of[-1,1])n.add(qS(e+12+f*4.5,1,Pe+7.5,f));n.add(y(4,3,4,u.marble,e-18,1,Pe+7));const d=[y(3,1.4,1,u.marble,e-18.8,4,Pe+7),y(2.4,1.8,1.1,u.marble,e-17,4,Pe+7)];d[1].rotation.z=.5,n.add(...d)}}function qS(n,t,e,i){const s=new ut;return s.add(y(2,.6,3,u.marble,0,0,0)),s.add(y(1.2,1.3,2.2,u.marble,0,.6,-.2)),s.add(y(1.4,1.1,1,u.marble,0,1.4,.8)),s.add(y(.9,.7,.7,u.marble,0,1.6,1.45)),s.add(y(.5,.9,1,u.marble,i*.4,.6,1)),s.position.set(n,t,e),s}function ZS(n){const t=new ut,{geometry:e,deck:i}=Jr({length:16,beam:4,depth:1.4,bowRise:1.2,sternRise:1.6,segments:24,ribs:8});t.add(U(e,u.hull,0,.9,0)),t.add(U(i,u.wood,0,.7,0)),t.add(y(5,2,3,Un(Wp),-3,.7,0)),t.add(xe(5,3,1,u.gold,-3,2.7,0,.2)),t.position.set(-40,0,Pe+24),t.rotation.y=.2,t.userData.animate=s=>{t.position.y=Math.sin(s*1.1)*.12,t.rotation.z=Math.sin(s*.8)*.02},n.add(t)}const yn=138,mn=65,_n=-10,_r=9,fe=2.6,Fo=0,ri=16;function KS({lod:n="detail"}={}){const t=n==="detail",e=new ut,i=t?28:14,s=t?12:6,o=yn/i,r=mn/s,a=f=>-yn/2+o*(f+.5),c=f=>-mn/2+r*(f+.5);e.add(y(yn,.5,mn,u.stone,0,_n-.5,0)),e.add(Xt(yn,mn,u.water,0,_n+.7,0));const l=fe-_n,h=Gn("plaster",14264719);for(const f of[-1,1])e.add(y(yn+8,l,4,u.brick,0,_n,f*(mn/2+2))),e.add(y(4,l,mn,u.brick,f*(yn/2+2),_n,0)),e.add(y(yn,l-.6,.15,h,0,_n,f*(mn/2-.05))),e.add(y(.15,l-.6,mn,h,f*(yn/2-.05),_n,0));if(t)for(const f of[-1,1])e.add(y(yn+8+ri*2,l,ri,u.dirt,0,_n,f*(mn/2+4+ri/2))),e.add(y(ri,l,mn+8,u.dirt,f*(yn/2+4+ri/2),_n,0)),e.add(Xt(yn+8+ri*2,ri,u.paving,0,fe+.02,f*(mn/2+4+ri/2))),e.add(Xt(ri,mn+8,u.paving,f*(yn/2+4+ri/2),fe+.02,0));jS(e,{columnsAlong:i,columnsAcross:s,stepX:o,stepZ:r,columnX:a,columnZ:c,detail:t});const d=yn/2+4-Fo;return e.add(y(d,.6,mn+8,u.brick,Fo+d/2,fe-.6,0)),e.add(Xt(d,mn+8,u.paving,Fo+d/2,fe+.02,0)),tb(e,t),ze(e),JS(e,{columnsAlong:i,columnsAcross:s,columnX:a,columnZ:c,detail:t}),t&&eb(e,a,c),e}function jS(n,{columnsAlong:t,columnsAcross:e,stepX:i,stepZ:s,columnX:o,columnZ:r,detail:a}){const c=fn(532),l=1.3,h=_n+_r,d=fe-.6-h,f=x=>Tn({length:x,height:d,thickness:1,openings:[{x:0,width:x-l,bottom:0,spring:.3}]}),p=f(i),m=f(s),v=Array.from({length:e},()=>Fo-2-c.range(0,9)),_=(x,M)=>x>v[M];for(let x=0;x<e;x++)for(let M=0;M<t-1;M++){const C=o(M)+i/2;_(C,x)&&n.add(U(p,u.brick,C,h,r(x)))}for(let x=0;x<t;x++)for(let M=0;M<e-1;M++){if(!_(o(x),M)||!_(o(x),M+1))continue;const C=U(m,u.brick,o(x),h,r(M)+s/2);C.rotation.y=Math.PI/2,n.add(C)}if(!a)return;const g=Me(1,u.brick,0,0,0,{heightScale:1,segments:8}).geometry.clone().scale(i/2-.3,1.1,s/2-.3);for(let x=0;x<t-1;x++){const M=o(x)+i/2;if(M>Fo+4)break;for(let C=0;C<e-1;C++)!_(M,C)||!_(M,C+1)||!_(o(x),C)||!_(o(x+1),C)||n.add(U(g,u.brick,M,h+.6,r(C)+s/2))}const S=f(s);for(let x=0;x<t;x++)if(_(o(x),0))for(const M of[-1,1]){const C=U(S,u.brick,o(x),h,M*(mn/2-s/4));C.rotation.y=Math.PI/2,C.scale.z=.5,n.add(C)}}function JS(n,{columnsAlong:t,columnsAcross:e,columnX:i,columnZ:s,detail:o}){const r=[{geometry:nn(1.3,.5,1.3),y:0},{geometry:We(.42,.48,_r-1.9,12),y:.5},{geometry:We(.72,.44,.9,12),y:_r-1.4},{geometry:nn(1.3,.5,1.3),y:_r-.5}],a=o?{i:10,j:5}:null,c=o?[[0,0],[1,0]]:[],l=t*e,h=new oe,d=fn(336),f=[16777215,15921128,14473424,13617085,15259596,12170157,14207416,13220272],p=Array.from({length:l},()=>new Wt(d.pick(f)));for(const[v,{geometry:_,y:g}]of r.entries()){const S=new kh(_,u.marble,l);let x=0;for(let M=0;M<t;M++)for(let C=0;C<e;C++){const T=a&&M===a.i&&C===a.j,R=c.some(([I,w])=>I===M&&w===C);h.makeTranslation(i(M),_n+g+(R&&v>0?1.4:0),s(C)),(T||R&&v===0)&&h.scale(new L(0,0,0)),S.setMatrixAt(x,h),S.setColorAt(x,v===1?p[x]:p[x].clone().lerp(new Wt(16777215),.6)),x++}S.castShadow=S.receiveShadow=!0,n.add(S),a&&n.add(U(_,Gn("marble",11057062),i(a.i),_n+g,s(a.j)))}if(!o)return;const m=new dn(.11,6,5).scale(1,1.8,.6);for(let v=0;v<30;v++){const _=v/30*Math.PI*2*3.7,g=_n+1.2+v/30*(_r-3.5);n.add(qe(U(m,Gn("marble",11057062)),_,.45,g,i(a.i),s(a.j)))}[[0,0,Math.PI/2],[1,0,Math.PI]].forEach(([v,_,g])=>{const S=QS();S.position.set(i(v),_n+1.1,s(_)),S.rotation.x=g,n.add(S)})}function QS(){const n=new ut;n.add(y(2.2,2.2,2.2,u.stoneDark,0,-1.1,0));const t=U(new dn(.95,16,12),u.marble,0,0,1);t.scale.set(.9,1,.5),n.add(t);const e=new Ss(.17,.06,6,10);for(let i=0;i<11;i++){const s=i/11*Math.PI*2,o=U(e,u.marble,Math.cos(s)*.85,Math.sin(s)*.85,1.1);o.rotation.y=.4,n.add(o)}for(const i of[-1,1])n.add(U(new dn(.1,6,5),u.opening,i*.3,.15,1.42));return n}function tb(n,t){const e=yn/2+4,i=Fo+2,s=e-i,o=i+s/2;n.add(Xt(s-14,44,u.grass,o,fe+.05,0)),n.add(Xt(s-14,4,u.paving,o,fe+.08,0)),n.add(Xt(4,44,u.paving,o,fe+.08,0)),n.add(y(16,14,60,u.stone,e+8,fe,0)),n.add(y(17,.8,61,u.marble,e+8,fe+7,0));const r=xe(60,16,5,u.roof,e+8,fe+14,0);r.rotation.y=Math.PI/2,n.add(r),n.add(z(8,8,10,u.brick,e+8,fe,-42,8)),n.add(z(6.5,6.5,2.5,u.brick,e+8,fe+10,-42,16)),n.add(Me(6.5,u.lead,e+8,fe+12.5,-42,{heightScale:.8,segments:16}));for(const c of[-1,1]){if(n.add(xe(s,10,3,u.roof,o,fe+7,c*31)),n.add(y(s,7,.8,u.stone,o,fe,c*31)),!t)continue;for(const h of[-5,5]){const d=He({length:s-4,count:14,height:7,radius:.4});d.position.set(o,fe,c*31+h),n.add(d)}const l=Array.from({length:4},(h,d)=>U(ne(2,4),u.opening,i+10+d*16,fe,c*31+.42*-c));for(const h of l)h.rotation.y=c>0?Math.PI:0;n.add(...l)}if(!t)return;for(const c of[2.5,9])for(let l=-4;l<=4;l++){const h=U(ne(1.6,3),u.opening,e-.05,fe+c,l*6);h.rotation.y=-Math.PI/2,n.add(h)}const a=o+6;n.add(y(3,1,3,u.marble,a,fe,0)),n.add(z(.5,.6,9,u.porphyry,a,fe+1,0,12)),n.add(y(1.4,.5,1.4,u.marble,a,fe+10,0)),n.add(y(.7,2.4,.5,u.bronze,a,fe+10.5,0)),n.add(U(new dn(.3,8,6),u.bronze,a,fe+13.1,0));for(const[c,l]of[[i+12,-14],[i+12,14],[e-14,-14],[e-14,14]])n.add(ei(9,c,fe,l));n.add(z(3.5,3.7,.9,u.marble,o-10,fe,0,16)),n.add(z(3.1,3.1,.3,u.water,o-10,fe+.7,0,16)),n.add(y(6,4,8,u.brick,e-10,fe,-24)),n.add(Oe(6,8,1.8,u.roof,e-10,fe+4,-24)),n.add(U(ne(1.8,3),u.opening,e-10,fe,-19.95))}function eb(n,t,e){const i=new dn(.3,8,6);for(const[s,o]of[[2,3],[5,8],[8,5],[11,2],[13,9],[4,10],[9,1]])n.add(U(i,u.fire,t(s)+nb(s),_n+5,e(o)))}const nb=n=>n%2?1.6:-1.6,Xp=[15918022,15257510,16117472,14465422,15323832,14068098];function Ec({w:n=10,d:t=8,h:e=7,color:i=Xp[0],roof:s="hip",windows:o=!0}={}){const r=new ut;if(r.add(y(n,e,t,Gn("plaster",i),0,0,0)),r.add(s==="gable"?xe(n,t,t*.3,u.roof,0,e,0,.4):Oe(n,t,Math.min(n,t)*.3,u.roof,0,e,0,.4)),o){const a=Math.max(1,Math.floor(e/3.4)),c=Math.max(1,Math.floor(n/3));for(let l=0;l<a;l++){const h=qt({count:c,spacing:n/c,width:.9,height:1.5,y:1.2+l*3.2});h.position.z=t/2+.03,r.add(h)}}return r}function ps(n,t,{count:e,area:[i,s,o,r],groundAt:a=()=>0,avoid:c=[],style:l={}}){let h=0;for(let d=0;d<e*20&&h<e;d++){const f=t.range(i,o),p=t.range(s,r);if(c.some(([v,_,g])=>Math.hypot(f-v,p-_)<g))continue;const m=Ec({w:t.range(7,14),d:t.range(6,10),h:t.range(5,11),color:t.pick(Xp),roof:t.chance(.5)?"hip":"gable",...l});m.position.set(f,a(f,p),p),m.rotation.y=t.pick([0,Math.PI/2,Math.PI,-Math.PI/2])+t.range(-.1,.1),n.add(m),c.push([f,p,9]),h++}}const Ee=152,wo=7.7,ko=2,_h=1.75,_i=8,To=12.2,Yp=2,Gs=-1.2,uc=Yp+.6,$p=8.6,Gi=n=>-14*Math.pow(Math.cos(Math.min(Math.abs(n),Ee)/Ee*(Math.PI/2)),1.4);function ib({lod:n="detail"}={}){const t=n==="detail",e=t?Gi:()=>-13,i=new ut,s=new ut;i.add(s);const o=Math.round(Ee*2/wo),r=new Rn(ob(e,o),{depth:_i,bevelEnabled:!1,curveSegments:8});s.add(U(r.translate(0,0,-_i/2),u.stone)),s.add(y(Ee*2+1,.6,_i+.8,u.stone,0,Yp,0)),s.add(y(Ee*2+1,.7,_i+1,u.stone,0,To,0));for(const a of[-1,1])s.add(y(Ee*2,2.2,1.6,u.stone,0,To+.7,a*(_i/2-.8)));if(s.add(y(Ee*2,.4,_i-3.2,u.stone,0,To+.7,0)),s.add(Xt(Ee*2,2.2,u.water,0,To+2.3,0)),t){sb(s,o),s.add(rb()),s.add(Xt(8,160,u.paving,-28,Gi(-28)+.08,0));const a=fn(368),c=[[-28,0,8],...Array.from({length:41},(l,h)=>[-Ee+h*10,0,12])];ps(s,a,{count:26,area:[-Ee,-70,Ee,70],groundAt:l=>Gi(l),avoid:c});for(let l=0;l<14;l++){const h=a.range(-Ee,Ee);s.add(ei(a.range(9,14),h,Gi(h),a.pick([-1,1])*a.range(16,70)))}for(let l=0;l<8;l++){const h=a.range(-Ee+10,Ee-10);s.add(yi(a.range(6,9),h,Gi(h),a.pick([-1,1])*a.range(14,70)))}}else s.position.y=13;return ze(i)}function sb(n,t){const e=sf(_h,$p-uc,.42);for(let i=0;i<t;i++){const s=-Ee+(i+.5)*wo,o=Gi(s)<Gs-2;for(const c of[-1,1]){const l=U(e,u.brick,s,uc,c*(_i/2+.02));if(c<0&&(l.rotation.y=Math.PI),n.add(l),!o)continue;const h=Gi(s),d=U(sf(ko,Gs-h,.5),u.brick,s,h,c*(_i/2+.02));c<0&&(d.rotation.y=Math.PI),n.add(d)}const r=-Ee+i*wo,a=Gi(r);a<Gs-3&&(n.add(y(wo-ko*2+1.2,1.6,_i+1.4,u.stone,r,a-.3,0)),n.add(y(wo-ko*2+.6,.5,_i+.6,u.stone,r,Gs-.5,0)))}}function sf(n,t,e){const i=Ur((n+e)*2,t+n+e,0,0);return i.holes.push(Ur(n*2,t+n,0,0)),new ii(i,8)}function ob(n,t){const e=new Fe;e.moveTo(-Ee,n(-Ee));for(let i=0;i<t;i++){const s=-Ee+(i+.5)*wo,o=s-ko,r=s+ko;e.lineTo(o,n(o)),n(s)<Gs-2&&(e.lineTo(o,Gs),e.absarc(s,Gs,ko,Math.PI,0,!0)),e.lineTo(r,n(r)),e.holes.push(Ur(_h*2,$p-uc+_h,s,uc))}return e.lineTo(Ee,n(Ee)),e.lineTo(Ee,To),e.lineTo(-Ee,To),e.lineTo(-Ee,n(-Ee)),e}function rb(){const n=Ee*2+60,t=160,e=new ni(n,t,96,1).rotateX(-Math.PI/2),i=e.attributes.position;for(let s=0;s<i.count;s++)i.setY(s,Gi(i.getX(s))-.05);return Qo(e,n,t),e.computeVertexNormals(),U(e,u.grass)}const zs=14,qn=7,$e=-122;function ab({lod:n="detail"}={}){const t=n==="detail",e=new ut,i=ub();if(e.add(y(250,3,190,u.grass,5,-3,5)),e.add(y(140,zs,110,i,-50,0,35)),e.add(Xt(140,110,u.grass,-50,zs+.03,35)),e.add(Xt(70,22,u.paving,-45,zs+.05,-9)),e.add(y(130,qn,16,i,-45,0,-28)),e.add(Xt(130,16,u.paving,-45,qn+.03,-28)),e.add(y(130,.5,.8,u.marble,-45,qn,-35.6)),t){for(let s=0;s<20;s++)e.add(y(.5,1.2,.5,u.marble,-108+s*6.6,qn,-35.6));e.add(y(130,.3,.8,u.marble,-45,qn+1.2,-35.6)),e.add(y(10,zs-qn,6,u.stone,-45,qn,-23)),e.add(y(8,qn,6,u.stone,-45,0,-39))}cb(e,t,i),lb(e,t,i),hb(e,t,i),db(e,t);for(const[s,o]of[[-100,86],[-20,70],[2,84],[-112,30],[8,10],[-60,84]])e.add(ei(12,s,zs,o));for(const[s,o]of[[-100,-28],[-80,-28],[-10,-28],[10,-28]])e.add(ei(9,s,qn,o));for(const[s,o]of[[40,20],[60,30],[90,-10],[20,50],[100,40]])e.add(yi(9,s,0,o));return t&&e.add(Xt(320,70,u.water,5,-.4,-125)),ze(e)}function cb(n,t,e){if(n.add(y(5,22,190,e,$e,0,5)),n.add(y(5.6,.5,190,u.stone,$e,21.5,5)),t)for(const s of[-1,1]){const o=U(se(190,{merlon:1.4,gap:.8,height:1.9,thickness:.9}),e,$e+s*2,22,5);o.rotation.y=Math.PI/2,n.add(o)}for(const[s,o]of[-30,6,42,78].entries()){const r=s%2?8:20;if(n.add(z(6.2,6.5,28,e,$e-3,0,o,r)),n.add(z(6.8,6.8,.5,u.stone,$e-3,27.5,o,r)),n.add(U($s(6.2,{count:16,merlon:1.3,height:1.9,thickness:.9}),e,$e-3,28,o)),t)for(const a of[-.8,0,.8]){const c=U(ne(1,2.2),u.opening,$e-3-Math.cos(a)*6.43,22,o+Math.sin(a)*6.43);c.rotation.y=-Math.PI/2+a,n.add(c)}}n.add(y(12,26,12,e,$e,0,96)),n.add(Ka(12,$e,26,96,e));for(const[s,o,r]of[[-56,34,!0],[-70,30,!1]])if(n.add(y(14,o,14,e,$e+2,0,s)),n.add(y(14.6,.5,14.6,u.stone,$e+2,o-.5,s)),n.add(Ka(14,$e+2,o,s,e)),!!t)if(r){for(const a of[-4,0,4]){const c=U(ne(2.2,4.2),u.opening,$e-5.03,o-8.5,s+a);c.rotation.y=-Math.PI/2,n.add(c)}n.add(y(2,.5,9,u.marble,$e-6,o-9,s)),n.add(y(.4,1.2,9,u.marble,$e-6.8,o-8.5,s));for(const a of[-4.3,4.3])n.add(y(2,1.2,.4,u.marble,$e-6,o-8.5,s+a))}else for(const a of[-3.5,3.5]){const c=U(ne(.9,1.8),u.opening,$e-5.03,o-8,s+a);c.rotation.y=-Math.PI/2,n.add(c)}const i=y(7,9,30,e,$e-8.5,0,-63);n.add(i),n.add(y(3.5,4,30,e,$e-6.75,9,-63)),n.add(y(250,10,4,e,5,0,-88)),n.add(y(250.6,.4,4.6,u.stone,5,9.6,-88)),n.add(U(se(250,{merlon:1.2,gap:.8,height:1.6,thickness:.8}),e,5,10,-89.6));for(const s of[-85,-35,15])n.add(z(5.5,5.5,16,e,s,0,-89,6)),n.add(U($s(5.2,{count:12,merlon:1.2,height:1.6,thickness:.8}),e,s,16,-89));for(const s of[65,115])n.add(y(9,15,9,e,s,0,-88)),n.add(Ka(9,s,15,-88,e));n.add(U(ne(4,6),u.opening,40,0,-85.97))}function lb(n,t,e){const i=zs,s=Gn("plaster",15128252);n.add(y(50,18,30,s,-45,i,22)),n.add(y(50.8,.6,30.8,u.marble,-45,i+8.5,22)),n.add(Oe(50,30,7,u.roof,-45,i+18,22)),n.add(y(13,32,13,e,-78,i,4)),n.add(Ka(13,-78,i+32,4,e)),n.add(y(34,13,20,s,-6,i,54)),n.add(y(34.8,.6,20.8,u.marble,-6,i+6,54)),n.add(Oe(34,20,5,u.roof,-6,i+13,54)),n.add(y(16,12,16,u.brick,-8,i,20)),n.add(y(16.6,.5,16.6,u.lead,-8,i+12,20)),n.add(z(4,4,4,u.brick,-8,i+12,20,12)),n.add(Me(4,u.lead,-8,i+16,20,{heightScale:.8})),n.add(Ne(z(3,3,9,u.brick,-8,i,10,10,{thetaStart:-Math.PI/2,thetaLength:Math.PI}),0,-1)),n.add(Ne(Me(3,u.lead,-8,i+9,10,{phiLength:Math.PI,heightScale:.7}),0,-1));const o=t?U(Tn({length:50,height:11,thickness:1.2,openings:qi(50,7,{width:4.4,bottom:0,spring:6.5})}),u.marble):y(50,11,1.2,u.marble);if(o.position.set(-45,i,2.5),n.add(o),n.add(y(50,.6,6,u.lead,-45,i+11,4.5)),n.add(y(50,1,.5,u.marble,-45,i+11.6,2.5)),t){const r=qt({count:9,spacing:5.2,width:2.2,height:4,y:12});r.position.set(-45,i,7.05),n.add(r);const a=qt({count:8,spacing:5.5,width:2,height:3.4,y:12});a.position.set(-45,i,37.05),n.add(a);const c=qt({count:6,spacing:5,width:1.8,height:3,y:7.5});c.position.set(-6,i,64.05),n.add(c);const l=He({length:100,count:18,height:6,radius:.4});l.position.set(-45,qn,-30),n.add(l),n.add(y(102,.5,4,u.lead,-45,qn+6,-29))}}function Ka(n,t,e,i,s){const o=new ut,r={merlon:1.2,gap:.8,height:1.9,thickness:.9};for(const a of[-1,1]){o.add(U(se(n,r),s,t,e,i+a*(n/2-.45)));const c=U(se(n-1.8,r),s,t+a*(n/2-.45),e,i);c.rotation.y=Math.PI/2,o.add(c)}return o}function hb(n,t,e){const[i,s]=[-98,70],o=zs,[r,a,c]=[30,13,20],l=s+a/2;if(n.add(y(r,c,a,e,i,o,s)),n.add(y(r+.8,.5,a+.8,u.marble,i,o+19.5,s)),n.add(xe(r,a,3.6,u.roof,i,o+c,s,.4)),t){const h=U(Tn({length:r,height:c,thickness:1,openings:[...qi(r,4,{width:6,bottom:0,spring:4.6,margin:1.5}),...qi(r,5,{width:2.4,bottom:8.2,spring:10.8,margin:1.5}),...qi(r,7,{width:1.9,bottom:14.2,spring:16.6,margin:1.2})]}),rf());h.position.set(i,o,l-.5),n.add(h);for(let f=1;f<4;f++)n.add(z(.5,.55,4.6,u.marble,i-13.5+f*6.75,o,l-.4,10));n.add(y(r,.4,1.4,u.marble,i,o+7.8,l-.5)),n.add(y(r,.4,1.4,u.marble,i,o+13.8,l-.5));const d=qt({count:7,spacing:4,width:1.9,height:4.3,y:14.2});d.position.set(i,o,s-a/2-.03),d.rotation.y=Math.PI,n.add(d);for(const f of[-1,1]){const p=qt({count:3,spacing:3.6,width:1.9,height:4.3,y:14.2});p.position.set(i+f*(r/2+.03),o,s),p.rotation.y=f*Math.PI/2,n.add(p)}n.add(y(2.4,.5,8,u.marble,i+r/2+1.2,o+13.7,s)),n.add(y(.4,1.1,8,u.marble,i+r/2+2.2,o+14.2,s)),n.add(Xt(r,22,u.paving,i,o+.05,l+11)),n.add(y(r+2,5,1.2,e,i,o,l+22));for(const f of[-1,1])n.add(y(1.2,5,22,e,i+f*(r/2+.4),o,l+11))}else n.add(y(r,c,1,rf(),i,o,l-.5))}function db(n,t){const[e,i]=[52,-46];n.add(y(40,10,26,u.brick,e,0,i)),n.add(y(40,16,13,u.brick,e,0,i)),n.add(xe(40,13,4,u.roof,e,16,i)),n.add(y(40.6,.5,26.6,u.lead,e,10,i)),n.add(z(4.5,4.5,3.5,u.brick,e,18.5,i,16)),n.add(Me(4.5,u.lead,e,22,i,{heightScale:.7})),n.add(Ne(z(6,6,13,u.brick,e+20,0,i,14,{thetaStart:-Math.PI/2,thetaLength:Math.PI}),1,0)),n.add(Ne(Me(6,u.lead,e+20,13,i,{phiLength:Math.PI,heightScale:.8}),1,0));const s=t?U(Tn({length:26,height:8,thickness:6,openings:qi(26,5,{width:3,bottom:0,spring:4.5})}),u.brick):y(26,8,6,u.brick);if(s.rotation.y=Math.PI/2,s.position.set(e-23,0,i),n.add(s),n.add(y(6.6,.5,26.6,u.lead,e-23,8,i)),n.add(z(7.5,7.5,11,u.brick,e-36,0,i+14,16)),n.add(Me(7.5,u.lead,e-36,11,i+14,{heightScale:.65})),n.add(y(7,4,7,u.marble,e+8,0,i+24)),n.add(Me(3.4,u.lead,e+8,4,i+24)),t)for(const o of[-1,1]){const r=qt({count:7,spacing:5,width:1.5,height:2.8,y:11.5});r.position.set(e,0,i+o*6.55),r.rotation.y=o>0?0:Math.PI,n.add(r)}}const _l=new Map;function qp(n,t,e,i={}){if(_l.has(n))return _l.get(n);const s=256,o=document.createElement("canvas");o.width=o.height=s;const r=o.getContext("2d");e(r,s,fn(n.length*1081));const a=new Zr(o);a.colorSpace=sn,a.wrapS=a.wrapT=Zi,a.repeat.set(1/t,1/t),a.anisotropy=8;const c=new _e({map:a,roughness:.9,metalness:0,...i});return _l.set(n,c),c}const vo=(n,t,e)=>{const i=1+(n.next()-.5)*e;return`rgb(${t[0]*i|0}, ${t[1]*i|0}, ${t[2]*i|0})`};function of(n,t,e,i,s,o,r,a,c,l,h){for(let d=i;d<s;d+=o){const f=Math.min(o,s-d)-c;let p=-e.next()*a;for(;p<t;){const m=r+e.next()*(a-r);n.fillStyle=vo(e,l,h),n.fillRect(p+c/2,d+c/2,m-c,f),p<0&&n.fillRect(p+t+c/2,d+c/2,m-c,f),p+m>t&&n.fillRect(p-t+c/2,d+c/2,m-c,f),p+=m}}}function ub(){return qp("blachernae-masonry",3,(n,t,e)=>{n.fillStyle="rgb(168, 160, 142)",n.fillRect(0,0,t,t);const i=t/2;for(const s of[0,i])of(n,t,e,s,s+94,31.3,36,70,3,[208,200,182],.14),of(n,t,e,s+94,s+i,6.8,20,30,2.4,[158,68,46],.3);for(let s=0;s<1800;s++){n.fillStyle=`rgba(100, 85, 65, ${.1+e.next()*.12})`;const o=.6+e.next()*1.4;n.fillRect(e.next()*t,e.next()*t,o,o)}})}function rf(){return qp("tekfur-diaper",2,(n,t,e)=>{const i=[160,66,44],s=[228,220,202];n.fillStyle=vo(e,s,0),n.fillRect(0,0,t,t);for(const r of[0,t-28])for(let a=r;a<r+28;a+=7)for(let c=-8;c<t;c+=24)n.fillStyle=vo(e,i,.25),n.fillRect(c+1+(a%14?12:0),a+1,22,5);const o=64;n.lineWidth=6;for(let r=0;r<=t;r+=o)n.strokeStyle=vo(e,i,.2),n.beginPath(),n.moveTo(r,96),n.lineTo(r+o/2,46),n.lineTo(r+o,96),n.lineTo(r+o/2,146),n.closePath(),n.stroke(),n.fillStyle=vo(e,i,.2),n.fillRect(r+o/2-5,91,10,10);n.lineWidth=7;for(let r=0;r<=t;r+=32)n.strokeStyle=vo(e,i,.2),n.beginPath(),n.moveTo(r,190),n.lineTo(r+16,162),n.lineTo(r+32,190),n.stroke(),n.beginPath(),n.moveTo(r,212),n.lineTo(r+16,184),n.lineTo(r+32,212),n.stroke();n.fillStyle="rgba(150, 140, 125, 0.35)";for(let r=0;r<t;r+=24)n.fillRect(0,r,t,1.5);for(let r=0;r<1200;r++)n.fillStyle=`rgba(110, 95, 80, ${.08+e.next()*.1})`,n.fillRect(e.next()*t,e.next()*t,1.5,1.5)},{roughness:.85})}function fb({lod:n="detail"}={}){return n==="detail"?pb():_b()}const Ln=240,hr=12,Ds=5,ki=17,af=8.5,Ba=[33.5,53.5],cs=8,vh={merlon:1.4,gap:.8,height:1.9,thickness:.9};function pb(){const n=new ut,t=mb();n.add(y(Ln+20,4,113.5,u.grass,0,-4,-23.25)),n.add(Xt(Ln,31,u.dirt,0,.02,18)),n.add(y(Ln+20,4,20,u.dirt,0,-4-cs,43.5)),n.add(y(Ln+20,4,36.5,u.grass,0,-4,71.75));for(const o of[Ba[0]+.5,Ba[1]-.5])n.add(y(Ln+20,cs,1,u.stone,0,-cs,o));n.add(Xt(Ln+20,19,u.water,0,-cs+2.5,43.5));for(const o of[-80,80])n.add(y(2.4,cs+.3,20,u.stone,o,-cs,43.5));const e={x:0,width:6,bottom:0,spring:7.5};n.add(U(Tn({length:Ln,height:hr,thickness:Ds,openings:[e]}),t)),n.add(y(Ln,.5,Ds+.6,u.stone,0,hr-.5,0)),n.add(U(se(Ln,vh),t,0,hr,Ds/2-.45)),n.add(y(Ln,1,.5,t,0,hr,-Ds/2+.25));for(const o of[-85,85]){const r=jr(2.4,10,1.2,1.5,u.stone);r.rotation.y=o<0?Math.PI/2:-Math.PI/2,r.position.set(o+(o<0?7.5:-7.5),0,-Ds/2-1.2),n.add(r)}const i=[[-110,"octagon"],[-55,"square"],[-12,"gate"],[12,"gate"],[55,"square"],[110,"octagon"]];for(const[o,r]of i)if(r==="octagon"){n.add(z(6.4,6.6,19,t,o,0,3.5,8)),n.add(z(6.8,6.8,.5,u.stone,o,18.5,3.5,8)),n.add(U($s(6.4,{count:16,merlon:1.3,height:1.9,thickness:.9}),t,o,19,3.5));for(let a=0;a<3;a++){const c=-Math.PI/4+a*Math.PI/4,l=U(ne(1,2.2),u.opening,o+Math.sin(c)*6.62,14.2,3.5+Math.cos(c)*6.62);l.rotation.y=c,n.add(l)}}else{const a=r==="gate"?12:11,c=13,l=r==="gate"?21:19,h=3.5;n.add(y(a,l,c,t,o,0,h)),n.add(y(a+.6,.5,c+.6,u.stone,o,hr-.5,h)),n.add(y(a+.6,.5,c+.6,u.stone,o,l-.5,h)),n.add(cf(a,c,o,l,h,t));for(const f of[-3,0,3])n.add(U(ne(1.1,2.4),u.opening,o+f,14.5,h+c/2+.03));for(const f of[-1,1]){const p=U(ne(1.1,2.4),u.opening,o+f*(a/2+.03),14.5,h+2);p.rotation.y=f*Math.PI/2,n.add(p)}const d=U(ne(1.8,3.2),u.opening,o,.2,h-c/2-.03);d.rotation.y=Math.PI,n.add(d)}n.add(y(9,1,.8,u.marble,0,10.6,-Ds/2-.3));for(const o of[-1,1])n.add(y(1.2,10.6,.8,u.marble,o*3.6,0,-Ds/2-.3));n.add(U(Tn({length:Ln,height:af,thickness:2,openings:[{x:0,width:5,bottom:0,spring:5.5}]}),t,0,0,ki)),n.add(U(se(Ln,{...vh,height:1.6}),t,0,af,ki+.55));for(const[o,r]of[[-82,!0],[-33,!1],[33,!1],[82,!0]])if(r){n.add(z(4.2,4.4,12.5,t,o,0,ki+1,14,{thetaStart:-Math.PI/2,thetaLength:Math.PI})),n.add(y(8.4,12.5,2,t,o,0,ki));const a=U($s(4,{count:16,merlon:1.1,height:1.6,thickness:.8}),t,o,12.5,ki+1);n.add(a);for(const c of[-.9,0,.9]){const l=U(ne(.9,1.9),u.opening,o+Math.sin(c)*4.33,9.5,ki+1+Math.cos(c)*4.33);l.rotation.y=c,n.add(l)}}else{n.add(y(7,13,7,t,o,0,ki+2.5)),n.add(cf(7,7,o,13,ki+2.5,t));for(const a of[-2,2])n.add(U(ne(.9,1.9),u.opening,o+a,9.5,ki+6.03))}for(const o of[-1,1]){const r=Ln/2-4,a=o*(4+r/2);n.add(y(r,1.6,1.5,u.stone,a,0,Ba[0]-.75)),n.add(U(se(r,{merlon:.8,gap:.8,height:.8,thickness:1.3}),u.stone,a,1.6,Ba[0]-.75))}const s=U(Tn({length:24,height:cs+1,thickness:7,openings:[{x:-5.5,width:7,bottom:0,spring:4.5},{x:5.5,width:7,bottom:0,spring:4.5}]}),u.stone,0,-cs,43.5);s.rotation.y=Math.PI/2,n.add(s);for(const o of[-1,1])n.add(y(1.2,.8,24,u.stone,o*2.9,1,43.5));n.add(Xt(6,36,u.dirt,0,.03,72)),n.add(Xt(6,66,u.dirt,0,.03,-46)),ps(n,fn(413),{count:22,area:[-120,-76,120,-18],avoid:[[0,-40,10],[0,-20,10],[0,-60,10],[-78,-10,8],[78,-10,8]]}),ze(n);for(const o of[-12,12]){const r=On("byzantine",{width:3.2,height:2.2,pole:6});r.position.set(o,21,3.5),n.add(r)}return n}function cf(n,t,e,i,s,o){const r=new ut,a={...vh,merlon:1.2};for(const c of[-1,1]){r.add(U(se(n,a),o,e,i,s+c*(t/2-.45)));const l=U(se(t-1.8,a),o,e+c*(n/2-.45),i,s);l.rotation.y=Math.PI/2,r.add(l)}return r}let Ha=null;function mb(){if(Ha)return Ha;const n=3,t=256,e=document.createElement("canvas");e.width=e.height=t;const i=e.getContext("2d"),s=fn(413),o=(l,h)=>{const d=1+(s.next()-.5)*h;return`rgb(${l[0]*d|0}, ${l[1]*d|0}, ${l[2]*d|0})`};i.fillStyle="rgb(168, 160, 142)",i.fillRect(0,0,t,t);const r=(l,h,d,f,p,m,v,_)=>{for(let g=l;g<h;g+=d){const S=Math.min(d,h-g)-m;let x=-s.next()*p;for(;x<t;){const M=f+s.next()*(p-f);i.fillStyle=o(v,_),i.fillRect(x+m/2,g+m/2,M-m,S),x<0&&i.fillRect(x+t+m/2,g+m/2,M-m,S),x+M>t&&i.fillRect(x-t+m/2,g+m/2,M-m,S),x+=M}}},a=t/2;for(const l of[0,a])r(l,l+94,31.3,36,70,3,[208,200,182],.14),r(l+94,l+a,6.8,20,30,2.4,[158,68,46],.3);for(let l=0;l<1800;l++){i.fillStyle=`rgba(100, 85, 65, ${.1+s.next()*.12})`;const h=.6+s.next()*1.4;i.fillRect(s.next()*t,s.next()*t,h,h)}const c=new Zr(e);return c.colorSpace=sn,c.wrapS=c.wrapT=Zi,c.repeat.set(1/n,1/n),c.anisotropy=8,Ha=new _e({map:c,roughness:.9,metalness:0}),Ha}const gb=new _e({color:3104618,roughness:.3});function _b(){const n=new ut,t=An;n.add(U(Uo(Wi,{height:.75,thickness:.3,y:t,towerSpacing:2.6,towerWidth:.62,towerHeight:1.25}),qs)),n.add(U(Uo(Wi,{height:.5,thickness:.16,y:t,offset:.9,towerSpacing:2.6,towerWidth:.4,towerHeight:.75}),qs)),n.add(U(Uo(Wi,{height:.04,thickness:1.1,y:t-.02,offset:2.1}),gb));const e=new ut;e.add(y(1,1.7,1,u.marble,0,0,-1.1)),e.add(y(1,1.7,1,u.marble,0,0,1.1)),e.add(y(.8,1.2,1.4,u.marble,0,0,0)),e.add(y(.82,.12,1.42,u.gold,0,1.2,0));const[i,s]=tx,[[o,r],[a,c]]=Wi.slice(2,4);return e.position.set(i,t,-s),e.rotation.y=Math.atan2(o-a,c-r),n.add(e),ze(n)}function vb({lod:n="detail"}={}){const t=n==="detail",e=new ut;e.add(y(200,3,t?110:80,u.paving,0,-3,t?15:0)),e.add(U(Tn({length:200,height:10,thickness:3,openings:[{x:-40,width:5,bottom:0,spring:5},{x:30,width:5,bottom:0,spring:5}]}),u.banded,0,0,-30)),e.add(U(se(200),u.banded,0,10,-31.2));for(const o of[-85,-47,-33,23,37,95]){e.add(y(8,14,8,u.banded,o,0,-30));for(const r of[-1,1])e.add(U(se(8,{merlon:.8,gap:.6,height:1}),u.banded,o,14,-30+r*3.65))}e.add(y(200,1.8,14,u.stone,0,-1.2,-38.5));for(const o of[-70,-10,50])if(e.add(y(6,.5,26,u.wood,o,.1,-58)),t){for(let r=0;r<5;r++)for(const a of[-1,1])e.add(z(.25,.25,3.2,u.wood,o+a*2.7,-2.5,-47-r*5.5,6));for(const r of[-1,1])e.add(z(.25,.25,1.6,u.wood,o+r*2.7,.3,-70.5,6));e.add(y(1.3,1,1.1,u.sail,o-1.5,.6,-50)),e.add(z(.5,.5,1.1,u.wood,o+1.6,.6,-56,8))}Mb(e,t),yb(e,t),t&&(Sb(e),bb(e)),t&&(e.add(Xt(280,70,u.water,0,0,-80)),ps(e,fn(1082),{count:26,area:[-95,26,95,66],avoid:[[-55,36,22],[-40,44,9],[-36,28,7]]})),ze(e);const i=On("venice",{width:3.4,height:2.2,pole:6});i.position.set(0,13,-10),e.add(i);const s=On("byzantine",{width:2.6,height:1.8,pole:5});if(s.position.set(30,14,-30),e.add(s),t){const o=bs({banner:"venice"});o.position.set(-40,0,-80),o.rotation.y=.1,e.add(o);const r=bs({banner:"venice",sail:!1});r.position.set(38,0,-62),r.rotation.y=Math.PI/2+.05,e.add(r)}return e}function Mb(n,t){n.add(y(70,12,14,u.plaster,0,0,-10)),n.add(Oe(70,14,4,u.roof,0,12,-10));const e=t?U(Tn({length:70,height:6.5,thickness:1.2,openings:qi(70,10,{width:4.4,bottom:0,spring:3.6})}),u.banded):y(70,6.5,1.2,u.banded);if(e.position.set(0,0,-19.5),n.add(e),n.add(y(70,.5,3.4,u.stone,0,6.5,-18.4)),n.add(y(70,.5,14.6,u.stone,0,11.8,-10)),t){const i=qt({count:12,spacing:5.5,width:1.4,height:2.6,y:8});i.position.set(0,0,-17.05),i.rotation.y=Math.PI,n.add(i);const s=qt({count:12,spacing:5.5,width:1.4,height:2.6,y:8});s.position.set(0,0,-2.95),n.add(s);for(const o of[-25,0,25])n.add(U(new ii(xb(3,4)),u.opening,o,0,-2.95));for(const o of[-32,32])n.add(y(6,7,20,u.plaster,o,0,7)),n.add(xe(6,20,2.4,u.roof,o,7,7,.3));n.add(z(1.2,1.2,1,u.marble,0,0,8,12))}}function xb(n,t){return new Fe([new J(-n/2,0),new J(n/2,0),new J(n/2,t),new J(-n/2,t)])}function yb(n,t){const[e,i]=[-55,36];n.add(y(16,9,16,u.brick,e,0,i)),n.add(y(20,11,6.5,u.brick,e,0,i)),n.add(y(6.5,11,20,u.brick,e,0,i)),n.add(xe(20,6.5,1.6,u.roof,e,11,i,.2));const s=xe(20,6.5,1.6,u.roof,e,11,i,.2);s.rotation.y=Math.PI/2,n.add(s),n.add(Oe(16.4,16.4,1.2,u.roof,e,9,i,0)),n.add(z(3.6,3.6,3.4,u.brick,e,11,i,16)),n.add(Me(3.6,u.lead,e,14.4,i));for(const[a,c]of[[0,2.6],[-5.5,1.5],[5.5,1.5]])n.add(z(c,c,c>2?8:6,u.brick,e+10,0,i+a,10,{thetaStart:-Math.PI/2,thetaLength:Math.PI})),n.add(Me(c,u.lead,e+10,c>2?8:6,i+a,{phiLength:Math.PI,segments:10}));if(t){for(let a=0;a<4;a++){const c=a*Math.PI/2,l=qt({count:3,spacing:1.4,width:.7,height:1.6,y:12});l.rotation.y=c,l.position.set(e+Math.sin(c)*3.62,0,i+Math.cos(c)*3.62),n.add(l);const h=qt({count:2,spacing:2.4,width:1,height:2.6,y:6.5});h.rotation.y=c,h.position.set(e+Math.sin(c)*10.03,0,i+Math.cos(c)*10.03),n.add(h)}for(const[a,c]of[[-13,-4],[-13,3]])n.add(y(4,1.6,4,u.brick,e+a,0,i+c)),n.add(Me(1.9,u.brick,e+a,1.6,i+c,{segments:12})),n.add(y(.7,2.2,.7,u.brick,e+a-1.4,1.8,i+c))}const[o,r]=[e+15,i+8];n.add(y(5.4,28,5.4,u.brick,o,0,r));for(const a of[-1,1])n.add(y(.5,24,5.6,u.brick,o+a*2.6,0,r)),n.add(y(5.6,24,.5,u.brick,o,0,r+a*2.6));if(n.add(y(6,.6,6,u.marble,o,24,r)),n.add(y(6,.6,6,u.marble,o,28,r)),n.add(xc(5.6,5.6,7,u.roof,o,28.6,r)),n.add(z(.08,.08,1.6,u.gold,o,35.4,r,6)),n.add(Me(.45,u.gold,o,36.5,r,{segments:8})),t)for(let a=0;a<4;a++){const c=a*Math.PI/2,l=qt({count:2,spacing:2,width:1.2,height:3,y:24.7});l.rotation.y=c,l.position.set(o+Math.sin(c)*2.73,0,r+Math.cos(c)*2.73),n.add(l);const h=qt({count:1,spacing:0,width:.5,height:1.4,y:14});h.rotation.y=c,h.position.set(o+Math.sin(c)*2.73,0,r+Math.cos(c)*2.73),n.add(h)}}function Sb(n){const e=[10690602,14199091,2772367,3832380,15261900];for(const i of[-1,1]){const s=12+i*10.5,o=i<0?56:120,r=i<0?54:22,a=U(Tn({length:o,height:4.6,thickness:1,openings:qi(o,Math.round(o/5),{width:3.4,bottom:0,spring:2.6})}),u.stone);a.position.set(r,0,s-i*4),n.add(a),n.add(y(o,8.4,9,u.plasterOchre,r,0,s)),n.add(y(o+.4,.4,9.4,u.stone,r,4.6,s)),n.add(xe(o,9,2.8,u.roof,r,8.4,s,.4));const c=qt({count:Math.round(o/4),spacing:4,width:.9,height:1.6,y:5.8});c.position.set(r,0,s-i*4.53),c.rotation.y=i<0?0:Math.PI,n.add(c)}for(let i=0;i<9;i++){const s=-32+i*12,o=12+(i%2?2.5:-2.5);n.add(y(3.6,1,1.8,u.wood,s,0,o));for(const a of[-1.6,1.6])n.add(z(.06,.06,2.6,u.wood,s+a,0,o-1,5));const r=y(4.2,.12,2.8,Un(e[i%e.length]),s,2.6,o-.4);r.rotation.x=.25,n.add(r)}}function bb(n){const t=fn(1204);for(let e=0;e<8;e++){const i=50+e%4*8,s=-20+Math.floor(e/4)*9;n.add(t.chance(.5)?y(1.4,1.1,1.2,u.sail,i,0,s):z(.5,.5,1.1,u.wood,i,0,s,8)),n.add(y(1.2,1,1.2,u.sail,i+1.5,0,s+1.2))}}function Eb({lod:n="detail"}={}){return n==="detail"?wb():Pb()}const vl=new L(-67.5,2.6,0),lf=new L(84.5,2.6,0),Ml=.62,hf=7,Us=9;function wb(){const n=new ut;n.add(Xt(280,150,u.water,0,0,0)),Tb(n,-96),Ab(n,92),ze(n);for(const[t,e,i]of[[-86,29,0],[92,26,0]]){const s=On("byzantine",{width:3,height:2,pole:5});s.position.set(t,e,i),n.add(s)}return n.add(Rb()),n}function Tb(n,t){n.add(y(66,5,80,u.stoneDark,t-3,-3,0)),n.add(y(58,.3,72,u.grass,t-5,2,0));const[e,i,s]=[40,32,12];n.add(y(e,s,i,u.banded,t,2,0)),n.add(y(e-4,1.2,i-4,u.paving,t,2+s-.6,0));for(const c of[-1,1]){n.add(U(se(e),u.banded,t,2+s,c*(i/2-.35)));const l=U(se(i),u.banded,t+c*(e/2-.35),2+s,0);l.rotation.y=Math.PI/2,n.add(l)}for(const[c,l]of[[-1,-1],[-1,1],[1,1],[1,-1]]){const[h,d]=[t+c*(e/2-1),l*(i/2-1)];n.add(z(4,4,s+5,u.banded,h,2,d,12)),n.add(z(4.6,4.6,1.4,u.banded,h,2+s+4,d,12))}const[o,r]=[t+e/2+1,-2];n.add(y(14,24,14,u.banded,o,2,r));for(const c of[-1,1]){n.add(U(se(14),u.banded,o,26,r+c*6.65));const l=U(se(14),u.banded,o+c*6.65,26,r);l.rotation.y=Math.PI/2,n.add(l)}n.add(U(ne(2.4,3.6),u.opening,o+7.02,2,0));for(const c of[10,17]){const l=U(ne(.7,2.2),u.opening,o+7.02,c,r);l.rotation.y=Math.PI/2,n.add(l)}n.add(U(new Ss(1,.22,6,14),u.iron,o+7.1,2.6,0));const a=z(1.4,1.4,8,u.wood,o,29,r,12);a.rotation.x=Math.PI/2,n.add(a);for(const c of[-4.5,.5])n.add(y(1.2,3.2,1.2,u.wood,o,26,r+c));for(const c of[0,Math.PI/3,2*Math.PI/3]){const l=y(7,.3,.3,u.wood,o,29,r+4.2);l.rotation.z=c,n.add(l)}n.add(y(3,8,30,u.banded,t-e/2-1.5,2,-31))}function Ab(n,t){n.add(y(36,5,80,u.stoneDark,t+11,-3,0)),n.add(y(28,.3,72,u.grass,t+15,2,0)),n.add(y(14,22,14,u.banded,t,2,0));for(const i of[-1,1]){n.add(U(se(14),u.banded,t,24,i*6.65));const s=U(se(14),u.banded,t+i*6.65,24,0);s.rotation.y=Math.PI/2,n.add(s)}const e=U(new Ss(1,.22,6,14),u.iron,t-7.1,2.6,0);e.rotation.y=Math.PI/2,n.add(e);for(const i of[9,16]){const s=U(ne(.7,2.2),u.opening,t-7.02,i,0);s.rotation.y=-Math.PI/2,n.add(s)}for(const i of[-1,1]){n.add(y(3.2,11,30,u.banded,t+3,2,i*22));const s=U(se(30),u.banded,t+1.9,13,i*22);s.rotation.y=Math.PI/2,n.add(s),n.add(y(9,16,9,u.banded,t+3,2,i*38))}}function Rb(){const n=new ut;n.userData.dynamic=!0;const t=We(.7,.7,Us,8).rotateZ(Math.PI/2),e=new Ss(.4,.1,5,10),i=hf*Ml,s=[],o=lf.x-vl.x,r=Math.floor((o-i)/(Us+i)),a=vl.x+(o-r*(Us+i)+i)/2+Us/2;for(let T=0;T<r;T++){const R=new be(t,u.wood);R.castShadow=!0,R.position.set(a+T*(Us+i),.1,0);for(const I of[-1,1])R.add(U(e,u.iron,I*(Us/2+.3),.3,0));n.add(R),s.push(R)}const c=new Ss(.2,.08,6,12).scale(Ml/.4,1,1),l=(r+1)*(hf+6)+8,h=new kh(c,u.iron,l);h.castShadow=!0,h.frustumCulled=!1,n.add(h);const d=new oe,f=new Fn,p=new Fn().setFromAxisAngle(new L(1,0,0),Math.PI/2),m=new L(1,1,1),v=new L(1,0,0),_=new L,g=new L,S=new L,x=(T,R,I)=>I.set(T.position.x+R*(Us/2+.6),T.position.y+.3-R*Math.sin(T.rotation.z)*4.5,0),M=new L,C=new L;return n.userData.animate=T=>{for(const[I,w]of s.entries())w.position.y=.1+Math.sin(T*1.3+I*.9)*.14,w.rotation.z=Math.sin(T*.8+I*1.7)*.03,w.rotation.x=Math.sin(T*1.1+I)*.06;let R=0;for(let I=0;I<=s.length;I++){I===0?M.copy(vl):x(s[I-1],1,M),I===s.length?C.copy(lf):x(s[I],-1,C);const w=Math.max(1,Math.round(M.distanceTo(C)/(Ml*.85))),b=Math.min(1.2,M.distanceTo(C)*.05),N=(H,G)=>G.lerpVectors(M,C,H).setY(M.y+(C.y-M.y)*H-b*4*H*(1-H));for(let H=0;H<w&&R<l;H++)N((H+.5)/w,_),N((H+1.5)/w,g),S.subVectors(g,_).normalize(),f.setFromUnitVectors(v,S),R%2&&f.multiply(p),d.compose(_,f,m),h.setMatrixAt(R++,d)}h.count=R,h.instanceMatrix.needsUpdate=!0},n.userData.animate(0),n}function Pb(){const n=new ut,t=new L(Pa[0],.05,-Pa[1]),e=new L(Ca[0],.05,-Ca[1]),i=[];for(let o=0;o<=16;o++)i.push(new L().lerpVectors(t,e,o/16));n.add(U(new Mc(new _c(i),64,.045,5),u.iron));const s=Math.atan2(e.z-t.z,e.x-t.x);for(let o=1;o<12;o++){const r=y(.12,.08,.36,u.wood);r.position.lerpVectors(t,e,o/12).setY(0),r.rotation.y=-s,n.add(r)}return n.add(y(.6,1,.6,qs,Pa[0]+.3,An,-(Pa[1]-.6))),n.add(y(.85,1.3,.85,qs,Ca[0]-.1,An,-(Ca[1]+.6))),ze(n)}const ai=31.5,Cb=4.6,ui=1.5,Be=ui-.3;function Ib({lod:n="detail"}={}){const t=n==="detail",e=new ut;return e.add(Lb(t)),t&&e.add($M(23,3)),e}function Lb(n){const t=new ut,{geometry:e,deck:i,halfBeamAtX:s}=Jr({length:ai,beam:Cb,depth:2.2,bowRise:1,sternRise:3,segments:n?44:20,ribs:n?12:8});if(t.add(U(e,u.hull,0,ui,0)),t.add(U(i,u.wood,0,Be,0)),n){const v=We(.17,.17,.1,8).rotateX(Math.PI/2);for(const _ of[-1,1]){for(let g=-13;g<13;g+=2)t.add(y(2.1,.16,.14,u.wood,g+1,ui-.2,_*(s(g+1)+.02)));for(let g=0;g<25;g++){const S=-10.5+.875*g;t.add(U(v,u.opening,S,.6,_*(s(S)+.03)))}}}const o=z(.14,.3,4.6,u.wood,ai/2-.8,1,0,8);o.rotation.z=-Math.PI/2+.06,t.add(o);const r=tr(.16,.9,u.iron,ai/2+3.75,1.27,0,8);r.rotation.z=-Math.PI/2+.06,t.add(r),t.add(y(3.6,1.1,2.6,u.wood,ai/2-3.6,Be,0)),t.add(y(3.9,.25,2.9,u.wood,ai/2-3.6,Be+1.1,0));for(const[v,_]of[[-1.8,-1.3],[-1.8,1.3],[1.8,-1.3],[1.8,1.3],[0,-1.3],[0,1.3]])t.add(y(.18,1,.18,u.wood,ai/2-3.6+v,Be+1.35,_));for(const v of[-1,1])t.add(y(3.9,.12,.12,u.wood,ai/2-3.6,Be+2.25,v*1.3));t.add(y(1.2,.9,1.1,u.bronze,ai/2-2.4,Be,0));const a=z(.14,.24,2.6,u.bronze,ai/2-.6,Be+.65,0,10);if(a.rotation.z=-Math.PI/2+.12,t.add(a),t.add(U(We(.3,.2,.4,10).rotateZ(-Math.PI/2),u.gold,ai/2+1.9,Be+.95,0)),n)for(const v of[-1,1]){const _=v*(s(2)-1);t.add(y(2.4,2.2,1.6,u.wood,2,Be,_)),t.add(y(2.7,.2,1.9,u.wood,2,Be+2.2,_));for(let g=0;g<3;g++)t.add(y(.5,.5,.15,u.wood,1+g,Be+2.4,_+v*.9))}else t.add(y(2.4,2.2,3.4,u.wood,2,Be,0));for(const[v,_]of[[-1.5,-1.3],[-1.5,1.3],[1.5,-1.3],[1.5,1.3]])t.add(z(.07,.07,1.9,u.wood,-11.5+v,Be+.4,_,6));t.add(y(3.4,.1,2.9,u.imperialPurple,-11.5,Be+2.3,0));const c=U(new Ti(3.4,1.1,.12).rotateX(.6).translate(0,0,-1.3),u.imperialPurple,-11.5,Be+2.3,0);t.add(c);const l=U(new Ti(3.4,1.1,.12).rotateX(-.6).translate(0,0,1.3),u.imperialPurple,-11.5,Be+2.3,0);t.add(l);for(const v of[-1,1]){const _=y(.3,4.4,.9,u.wood,-13.2,-1.6,v*(s(-13.2)+.3));_.rotation.z=-.5,t.add(_);const g=y(1.8,.1,.1,u.wood,-12.6,Be+1.1,v*(s(-13.2)-.4));t.add(g)}const h=We(.42,.42,.08,12).rotateX(Math.PI/2),d=We(.1,.1,.14,8).rotateX(Math.PI/2),f=[Un(10690602),Un(14199091),Un(2772367),Un(15129798)],p=n?16:8;for(let v=0;v<p;v++){const _=-9.5+v*(19.5/(p-1));for(const g of[-1,1]){const S=g*(s(_)+.05);t.add(U(h,f[(v+(g>0?1:0))%4],_,ui+.2,S)),n&&t.add(U(d,u.iron,_,ui+.2,S+g*.05))}}for(const{x:v,height:_,yardLength:g,tilt:S}of[{x:7,height:15,yardLength:20,tilt:.45},{x:-3.5,height:12.5,yardLength:15,tilt:.48}]){t.add(z(.16,.24,_,u.wood,v,Be,0,8)),t.add(y(.7,.6,.7,u.wood,v,Be+_-1.6,0));const x=z(.1,.1,g,u.wood,0,0,0,6);x.geometry.translate(0,-g/2,0),x.rotation.z=Math.PI/2-S,x.position.set(v,ui+_-1.5,.4),t.add(x);const M=g/2,C=new L(v+Math.cos(S)*M,ui+_-1.5-Math.sin(S)*M,.5),T=new L(v-Math.cos(S)*M,ui+_-1.5+Math.sin(S)*M,.5),R=new L(v-M*.55,ui+1.4,.5);t.add(U(up(C,T,R,.9,n?10:5),u.sail))}ze(t);for(const[v,_,g]of[[-13.4,Be+1.8,1.1],[7,Be+14.6,.8]]){const S=On("byzantine",{width:2.4*g,height:1.5*g,pole:2.8});S.position.set(v,_,0),t.add(S)}const m=Db(n,s);return t.add(m.group),t.userData.animate=v=>{m.row(v),t.position.y=Math.sin(v*1.3)*.08,t.rotation.x=Math.sin(v*.9)*.015},t}function Db(n,t){const e=new ut;e.userData.dynamic=!0;const i=n?[{y:.6,count:25,length:7,phase:0},{y:ui+.15,count:25,length:9.5,phase:.35}]:[{y:.9,count:14,length:8,phase:0}],s=[];for(const[r,a]of i.entries()){const c=Jo([We(.05,.06,a.length,5).rotateX(Math.PI/2).translate(0,0,-1),nn(.08,.3,1.3).translate(0,-.15,a.length-1.6)]);for(let l=0;l<a.count;l++){const h=-10.5+21/(a.count-1)*l+(r===0?0:.4);for(const d of[-1,1]){const f=new ut;f.position.set(h,a.y,d*t(h)),f.rotation.order="YXZ";const p=new be(c,u.wood);p.castShadow=!0,f.add(p),e.add(f),s.push({pivot:f,side:d,phase:a.phase})}}}return{group:e,row:r=>{for(const{pivot:a,side:c,phase:l}of s){const h=r*2.4+l,d=Math.sin(h)*.38,f=.32+Math.cos(h)*.12;a.rotation.set(f,c>0?d:Math.PI-d,0)}}}}const ci=8.25,li=7.75,go=46,dr=51.6,xl=62.6;function Ub({lod:n="detail"}={}){const t=n==="detail",e=new ut,i=f=>ci+(li-ci)*(f/go),s=t?36:20;e.add(z(ci+.1,ci+1.4,4,u.stoneDark,0,0,0,s)),e.add(z(li,ci,go,u.stone,0,0,0,s));for(const f of[11,23,35])e.add(z(i(f)+.25,i(f)+.25,.5,u.stoneDark,0,f,0,s));const o=t?36:18;for(let f=0;f<o;f++){const p=f/o*Math.PI*2;e.add(qe(y(.8,1.2,1.4,u.stoneDark),p,li+.4,go-1.2)),e.add(qe(y(.9,1.1,2,u.stoneDark),p,li+.7,go))}e.add(z(li+1.5,li+1.5,dr-go-1.1,u.stone,0,go+1.1,0,s)),e.add(U($s(li+1.15,{count:t?24:14,merlon:1.1,height:1.5,thickness:.7}),u.stone,0,dr,0)),e.add(z(li+.2,li+.2,1.8,u.stone,0,dr-.2,0,s)),e.add(tr(li+.9,xl-dr-1.6,u.lead,0,dr+1.6,0,s)),e.add(z(.3,.45,1.2,u.lead,0,xl-.4,0,8));const r=Math.PI/2;e.add(qe(U(ne(2.2,4),u.opening),r,ci+1.42,.2)),e.add(qe(y(2.6,2.4,.2,u.marble),r,ci+.05,5.2)),e.add(qe(y(.4,1.7,.25,u.stoneDark),r,ci+.12,5.55)),e.add(qe(y(1.2,.4,.25,u.stoneDark),r,ci+.12,6.3));const a=ne(.55,2.2),c=ne(1.3,2.6),l=t?[[8,4,a,.5],[15,5,a,.2],[20,4,a,0],[27,6,a,.5],[32,5,a,.1],[39,6,a,.3],[42.5,12,c,.25]]:[[14,4,a,.5],[27,5,a,.2],[42.5,10,c,.25]];for(const[f,p,m,v]of l)for(let _=0;_<p;_++)e.add(qe(U(m,u.opening),(_+v)/p*Math.PI*2,i(f)+.06,f));const h=t?[[Math.PI*.8,[[0,16,13],[-5,14,12],[-10,10,11]]],[Math.PI*.2,[[0,16,13],[-5,14,12],[-10,10,11]]]]:[[Math.PI*.8,[[0,22,12]]],[Math.PI*.2,[[0,22,12]]]];for(const[f,p]of h){const m=new ut;let v=ci-1;for(const[_,[g,S,x]]of p.entries()){m.add(y(S+1,x-g,3.2,u.stone,v+S/2,g-1,0)),m.add(U(se(S,{merlon:1.1,gap:.8,height:1.3,thickness:.7}),u.stone,v+S/2,x,1.25)),v+=S;const M=_===p.length-1,C=M?x+6:x+3.5,T=M?7:6;m.add(y(T,C-g+1,T,u.stone,v,g-1,0)),m.add(U(se(T,{merlon:.9,gap:.7,height:1.2}),u.stone,v,C,T/2-.35)),m.add(U(se(T,{merlon:.9,gap:.7,height:1.2}),u.stone,v,C,-(T/2-.35))),v+=T/2}m.rotation.y=Math.atan2(-Math.sin(f),Math.cos(f)),e.add(m)}t&&Nb(e),ze(e);const d=On("genoa",{width:4,height:2.6,pole:7});return d.position.y=xl-.2,e.add(d),e}function Nb(n){for(const[i,s]of[[30,-5],[46,-10],[64,-15]])n.add(z(i,i+4,5,u.grass,0,s,0,40));n.add(z(16,16,.3,u.paving,0,-.1,0,32));const t=new ut;t.add(U(new ii(Ob()).rotateX(-Math.PI/2),u.paving,0,.05,0));for(const[i,s,o,r,a]of[[-10,18,20,0,!0],[10,18,20,0,!1],[-20,9,18,Math.PI/2,!1],[20,9,18,Math.PI/2,!1]]){const c=new ut;c.add(y(o,5.5,1.8,u.stone,0,0,0)),c.add(U(se(o,{merlon:.8,gap:.6,height:1,thickness:.5}),u.stone,0,5.5,.65)),a&&c.add(U(ne(3,4.2),u.opening,2,0,.95)),c.position.set(i,0,s),c.rotation.y=r,t.add(c)}for(const[i,s]of[[-20,18],[20,18]])t.add(y(4,8,4,u.stone,i,0,s));n.add(t);const e=[[-26,-20,.2,-5],[26,-24,-.3,-5],[-30,8,1.5,-5],[32,2,1.7,-5],[2,-30,0,-5],[-14,32,.1,-5],[16,33,-.2,-5],[-50,-14,.4,-10],[50,-18,-.5,-10],[-44,32,1.2,-10],[46,30,1.9,-10],[-14,-52,0,-10],[22,-50,.2,-10],[0,54,.1,-10]];for(const[i,s,o,r]of e){const a=Ec({w:9,d:7,h:12,color:15320986,roof:"gable"});a.position.set(i,r,s),a.rotation.y=o,n.add(a)}}function Ob(){const n=new Fe;return n.moveTo(-20,-18),n.lineTo(20,-18),n.lineTo(20,0),n.lineTo(-20,0),n.closePath(),n}function Fb({lod:n="detail"}={}){return n==="detail"?kb():Hb()}const hi=4;function kb(){const n=new ut;n.add(y(210,3,125,u.paving,0,-3,-12)),n.add(y(210,hi,46,u.paving,0,0,-52)),n.add(y(210,hi,1.2,u.stoneDark,0,0,-28.6));const t=jr(10,8,.5,.8,u.stone);t.position.set(-10,0,-21.6),t.rotation.y=Math.PI,n.add(t),n.add(U(Jp({length:200,height:9,thickness:3,openings:[{x:10,width:5.5,bottom:0,height:7}]}),u.stone,0,0,40)),n.add(U(se(200),u.stone,0,9,41.2));for(const s of[-85,-35,55,92])n.add(y(8,13,8,u.stone,s,0,40)),n.add(U(se(8,{merlon:.8,gap:.6,height:1}),u.stone,s,13,3.65+40));n.add(y(200,12,3.5,u.stone,0,hi,-68)),n.add(U(se(200),u.stone,0,hi+12,-69.4));for(const s of[-60,60])n.add(y(9,17,9,u.stone,s,hi,-68)),n.add(U(se(9,{merlon:.8,gap:.6,height:1}),u.stone,s,hi+17,-68-4.15));zb(n,0,hi,-65),n.add(y(210,1.8,13,u.stone,0,-1.2,47.5)),n.add(Xt(280,70,u.water,0,0,89));const e=fn(1267);for(let s=0;s<18;s++){const o=e.range(-90,90),r=e.range(43,52);n.add(e.chance(.5)?z(.6,.6,1.3,u.wood,o,.6,r,10):y(1.4,1.2,1.4,u.sail,o,.6,r))}for(const s of[-20,40])n.add(z(.3,.3,2,u.wood,s,.6,52,6));Zp(n,{x:-35,z:6,detail:!0}),Kp(n,{x:46,z:2,detail:!0});for(const s of[17,29]){const o=He({length:24,count:6,height:7,radius:.45});o.position.set(10,0,s),n.add(o)}n.add(Oe(27,15,3.5,u.roof,10,7,23));const i=[[-35,6,26],[46,2,30],[10,23,18],[10,36,8],[0,-65,16],[-10,-25,8]];return ps(n,e,{count:14,area:[-95,-26,95,32],avoid:i,style:{roof:"gable",w:8,d:7,h:13}}),ps(n,e,{count:10,area:[-95,-26,95,32],avoid:i,style:{roof:"gable",w:10,d:7,h:10}}),ps(n,e,{count:12,area:[-95,-62,95,-36],avoid:i,groundAt:()=>hi,style:{roof:"gable",w:8,d:7,h:12}}),ps(n,e,{count:8,area:[-95,-62,95,-36],avoid:i,groundAt:()=>hi,style:{roof:"gable",w:9,d:7,h:9}}),ze(n),n.add(ur(On("genoa",{width:4,height:2.6,pole:7}),-35,17.5,-2)),n.add(ur(On("genoa",{width:3,height:2,pole:6}),10,9,40)),n.add(ur(On("genoa",{width:4,height:2.6,pole:7}),0,hi+62.4,-65)),n.add(ur(bs({banner:"genoa",rig:"square"}),30,0,70,-.15)),n.add(ur(bs({banner:"genoa",sail:!1}),-55,0,72,Math.PI+.1)),n}function ur(n,t,e,i,s=0){return n.position.set(t,e,i),n.rotation.y=s,n}function zb(n,t,e,i){n.add(z(8.3,9.6,4,u.stoneDark,t,e,i,24)),n.add(z(7.75,8.25,46,u.stone,t,e,i,24));for(let o=0;o<20;o++){const r=qe(y(.9,1.4,2,u.stoneDark),o/20*Math.PI*2,8.4,e+45);r.position.x+=t,r.position.z+=i,n.add(r)}n.add(z(9.2,9.2,4.5,u.stone,t,e+47,i,24)),n.add(U($s(8.85,{count:18,merlon:1.1,height:1.5}),u.stone,t,e+51.5,i)),n.add(tr(8.6,11,u.lead,t,e+51.3,i,24));const s=ne(.55,2.2);for(const[o,r]of[[14,4],[27,5],[40,6]])for(let a=0;a<r;a++){const c=qe(U(s,u.opening),(a+.3)/r*Math.PI*2,8.1,e+o);c.position.x+=t,c.position.z+=i,n.add(c)}}function Zp(n,{x:t,z:e,detail:i}){const[s,o,r]=[36,20,16];if(!i){n.add(y(s,r,o,u.banded,t,0,e)),n.add(y(s+.6,.5,o+.6,u.stone,t,r,e));for(const l of[-1,1])n.add(U(se(s,{merlon:1,gap:.9}),u.stone,t,r+.5,e+l*(o/2-.35)));n.add(Oe(s-3,o-3,3,u.roof,t,r+.5,e,0));return}const a=Array.from({length:7},(l,h)=>({x:-15+h*5,width:3.4,bottom:0,height:5.4}));n.add(U(Jp({length:s,height:r,thickness:1.2,openings:a}),u.banded,t,0,e+o/2-.6)),n.add(y(s,r,o-1.2,u.banded,t,0,e-.6)),n.add(y(s+.8,.5,o+.8,u.stone,t,r,e));for(const l of[-1,1]){n.add(U(df(s+.8),u.stone,t,r+.5,e+l*(o/2+.05)));const h=U(df(o-1),u.stone,t+l*(s/2+.05),r+.5,e);h.rotation.y=Math.PI/2,n.add(h)}n.add(Oe(s-3,o-3,3,u.roof,t,r+.5,e,0)),n.add(y(s,.6,5,u.stone,t,5.6,e+o/2-2.5));const c=ds(.9,2.8);for(const[l,h]of[[7.6,7],[12.2,7]])for(let d=0;d<h;d++){const f=t-15+d*5;n.add(U(ds(2.8,3.6),u.stoneDark,f,l-.3,e+o/2+.02));for(const p of[-.6,.6])n.add(U(c,u.opening,f+p,l,e+o/2+.04));n.add(z(.12,.12,2.3,u.marble,f,l,e+o/2+.05,6))}for(const l of[-1,1])for(const h of[7.6,12.2])for(const d of[-5,0,5]){const f=U(ds(1.4,3),u.opening,t+l*(s/2+.03),h,e+d);f.rotation.y=l*Math.PI/2,n.add(f)}}function Kp(n,{x:t,z:e,detail:i}){n.add(y(10,16,40,u.banded,t,0,e));const a=xe(40,10,4.2,u.roof,t,16,e,.4);a.rotation.y=Math.PI/2,n.add(a);for(const m of[-1,1])n.add(y(5,9,40,u.banded,t+m*15/2,0,e)),n.add(U(Bb(40+.8,5+.6,2.6,m),u.roof,t+m*(10/2+5/2+.3),9,e));n.add(y(10,13,10,u.banded,t,0,e-40/2-5));const c=xe(10,10,3.6,u.roof,t,13,e-40/2-5,.4);c.rotation.y=Math.PI/2,n.add(c);const[l,h]=[t+11,e-19];if(n.add(y(6.5,30,6.5,u.banded,l,0,h)),n.add(y(7.1,.5,7.1,u.stone,l,30,h)),n.add(xc(7.4,7.4,7,u.roof,l,30.5,h)),!i)return;const d=ds(.9,3.6),f=ds(1.1,4.6);for(const m of[-1,1])for(let v=0;v<6;v++){const _=e-20+4+v*6.4,g=U(d,u.opening,t+m*(10/2+.03),11,_);g.rotation.y=m*Math.PI/2,n.add(g);const S=U(f,u.opening,t+m*(10/2+5+.03),3.2,_);S.rotation.y=m*Math.PI/2,n.add(S),n.add(y(1,7.5,1.4,u.stone,t+m*(10/2+5+.4),0,_+3.2))}const p=e+40/2+.03;n.add(U(ds(3,5.5),u.stoneDark,t,0,p)),n.add(U(ds(2.2,4.6),u.opening,t,0,p+.02)),n.add(U(new Kr(2.6,3.1,24),u.stone,t,11.5,p)),n.add(U(new Qi(2.6,24),u.opening,t,11.5,p+.01));for(const m of[-1,1])n.add(U(d,u.opening,t+m*15/2,2.5,p));for(const m of[-1,1]){const v=U(f,u.opening,t+m*2.6,5,e-20-10-.03);v.rotation.y=Math.PI,n.add(v)}for(let m=0;m<4;m++){const v=m*Math.PI/2,_=new ut;for(const g of[-1.3,1.3])_.add(U(ds(1.4,4.2),u.opening,g,23.5,0));_.add(U(d,u.opening,0,16,0)),_.add(U(d,u.opening,0,9,0)),_.rotation.y=v,_.position.set(l+Math.sin(v)*3.28,0,h+Math.cos(v)*3.28),n.add(_)}}function jp(n,t,e=0,i=0){const s=n/2,o=Math.max(.1,t-n*Math.sin(Math.PI/3)),r=new Fe;return r.moveTo(e-s,i),r.lineTo(e+s,i),r.lineTo(e+s,i+o),r.absarc(e-s,i+o,n,0,Math.PI/3,!1),r.absarc(e+s,i+o,n,Math.PI*2/3,Math.PI,!1),r.lineTo(e-s,i),r}function ds(n,t){return new ii(jp(n,t),6)}function Jp({length:n,height:t,thickness:e,openings:i=[]}){const s=n/2,o=[...i].sort((c,l)=>c.x-l.x),r=new Fe;r.moveTo(-s,0);for(const c of o){if(c.bottom>0)continue;const l=c.width/2,h=Math.max(.1,c.height-c.width*Math.sin(Math.PI/3));r.lineTo(c.x-l,0),r.lineTo(c.x-l,h),r.absarc(c.x+l,h,c.width,Math.PI,Math.PI*2/3,!0),r.absarc(c.x-l,h,c.width,Math.PI/3,0,!0),r.lineTo(c.x+l,0)}r.lineTo(s,0),r.lineTo(s,t),r.lineTo(-s,t),r.lineTo(-s,0);for(const c of o)c.bottom<=0||r.holes.push(jp(c.width,c.height,c.x,c.bottom));return new Rn(r,{depth:e,bevelEnabled:!1,curveSegments:8}).translate(0,0,-e/2)}function df(n,{merlon:t=1.4,gap:e=.9,height:i=1.6,thickness:s=.6}={}){const o=Math.max(1,Math.floor((n+e)/(t+e))),r=o*t+(o-1)*e,a=[];for(let c=0;c<o;c++){const l=-r/2+t/2+c*(t+e);a.push(nn(t,i*.55,s).translate(l,0,0));for(const h of[-1,1])a.push(nn(t*.3,i*.45,s).translate(l+h*t*.35,i*.55,0))}return Jo(a)}function Bb(n,t,e,i){const s=new Fe([new J(-t/2*i,e),new J(t/2*i,0),new J(t/2*i,-.3),new J(-t/2*i,-.3)]);return new Rn(s,{depth:n,bevelEnabled:!1}).translate(0,0,-n/2)}function Hb(){const n=new ut,[t,e]=he([-2.2,16.6]),i=[t,e],s=[t-4.75,e+2];return n.userData.keepOut=[[...i,1.4],[...s,1.5]],n.userData.onGround=o=>{n.add(U(Uo(oc,{height:.55,thickness:.2,y:An,towerSpacing:1.7,towerWidth:.42,towerHeight:.85,ground:o}),qs)),n.add(U(Uo(Nr,{height:.35,thickness:.14,y:An,offset:-.35,ground:o}),qs));const r=(a,[c,l])=>{const h=new ut;a(h,{x:0,z:0,detail:!1}),h.scale.setScalar(5*yc),h.position.set(c,An+o.heightAt([c,l]),-l),n.add(h)};r(Zp,i),r(Kp,s),ze(n)},n}const at=3,Mh=at+4,zr=[[-40,-110],[130,-110],[130,110],[40,110],[10,80],[-30,62],[-70,56],[-96,30],[-92,0],[-72,-22],[-62,-60],[-52,-92]],zo=[[-38,-66],[50,-66],[118,-48],[118,40],[50,52],[-38,52]],Gb=[[10,-66],[118,30],[10,52],[-38,30]],Vb=1,Wb={height:7,thickness:2.4},Si={x:82,z:-12,rx:30,rz:36},jh=(n,t)=>Math.hypot((n-Si.x)/Si.rx,(t-Si.z)/Si.rz),Xb=(n,t)=>jh(n,t)<1?Mh:at,Br=[-12,6],Hr=[36,-30],Bi=[14,-83],Gr=[-62,28],Yb=[16050644,16249315,15324078,15850687,14465422,16117472,15124640];function $b({lod:n="detail"}={}){const t=n==="detail",e=new ut,i=fn(685),s=t?Xb:()=>at;if(t){e.add(U(ic(zr,at,6),u.grass)),e.add(Xt(300,220,u.water,-20,.6,0));const o=[];for(let r=0;r<28;r++){const a=r/28*Math.PI*2,c=1+.06*Math.sin(a*3+1)+.04*Math.sin(a*5);o.push([Si.x+Math.cos(a)*Si.rx*c,Si.z+Math.sin(a)*Si.rz*c])}e.add(U(ic(o,Mh,Mh-at+.5),Gn("grass",14208924)))}else e.position.y=-at;return qb(e,t,i),Zb(e),Kb(e,t),jb(e,t),Jb(e,t),Qb(e,t),tE(e,i),eE(e,t),nE(e,i,{detail:t,elevation:s}),iE(e,i,t,s),ze(e),t&&(sE(e),oE(e)),e}function qb(n,t,e){const{height:i,thickness:s}=Wb,o=zo.length,r=(a,c,l,h,d)=>{const f=y(l,h,l,u.stone,a,at,c);if(f.rotation.y=d,n.add(f),t)for(let p=0;p<4;p++){const m=U(se(l-.8,{height:.9,merlon:.8,gap:.6}),u.stone,0,h,0);m.rotation.y=p*Math.PI/2,m.position.x=Math.sin(m.rotation.y)*(l/2-.35),m.position.z=Math.cos(m.rotation.y)*(l/2-.35),f.add(m)}};for(let a=0;a<o;a++){const[c,l]=zo[a],[h,d]=zo[(a+1)%o],f=Math.hypot(h-c,d-l),[p,m]=[(h-c)/f,(d-l)/f],v=Math.atan2(-m,p),_=x=>[c+p*x,l+m*x],g=Gb.map(([x,M])=>({t:(x-c)*p+(M-l)*m,off:Math.abs((x-c)*m-(M-l)*p)})).filter(({t:x,off:M})=>M<.5&&x>0&&x<f).map(({t:x})=>x),S=[0,...g.flatMap(x=>[x-6,x+6]),f];for(let x=0;x<S.length;x+=2){const[M,C]=[S[x],S[x+1]];if(a===Vb){for(let w=M+4;w<C-2;w+=8){if(e.chance(.25))continue;const[b,N]=_(w),H=y(7.6,e.range(1,4.5),s+.6,u.stoneDark,b,at,N);H.rotation.y=v,n.add(H)}continue}const[T,R]=_((M+C)/2),I=y(C-M,i,s,u.stone,T,at,R);if(I.rotation.y=v,n.add(I),t){const w=U(se(C-M),u.stone,T,at+i,R);w.rotation.y=v,n.add(w)}for(let w=M+30;w<C-12;w+=30)r(..._(w),6,i+3,v)}for(const x of g){const[M,C]=_(x),T=y(12,i+3,s+2,u.stone,M,at,C);T.rotation.y=v,n.add(T);const R=y(4.4,5.5,s+2.4,u.opening,M,at,C);R.rotation.y=v,n.add(R);for(const I of[-1,1])r(..._(x+I*9),6,i+4.5,v);if(t){const I=U(se(12),u.stone,M,at+i+3,C);I.rotation.y=v,n.add(I)}}r(c,l,7.5,i+4.5,v)}}function Zb(n){n.add(Xt(6,140,u.paving,10,at+.03,4)),n.add(Xt(180,6,u.paving,40,at+.03,30));const[t,e,i,s]=[10,-70,-34,-83],o=Xt(Math.hypot(i-t,s-e)+4,5,u.paving,(t+i)/2,at+.03,(e+s)/2);o.rotation.y=Math.atan2(-(s-e),i-t),n.add(o)}function Kb(n,t){const[e,i]=Br;n.add(Xt(36,28,u.paving,e,at+.04,i));const s=(o,r,a,c)=>{const l=new ut;l.add(He({length:o-4,count:Math.round(o/3.6),height:6,radius:.36})),l.add(y(o,6,1,u.stone,0,0,-4)),l.add(xe(o+1,6,1.6,u.roof,0,6,-2,.4)),l.position.set(r,at,a),l.rotation.y=c,n.add(l)};s(34,e,i-10,0),s(24,e-14,i+3,Math.PI/2),n.add(y(2.6,1,2.6,u.marble,e+4,at,i+2)),n.add(z(.55,.65,7,u.marble,e+4,at+1,i+2,10)),n.add(z(.9,.6,.6,u.marble,e+4,at+8,i+2,10)),t&&(n.add(y(.7,2.2,.7,u.bronze,e+4,at+8.6,i+2)),n.add(z(2.2,2.4,.8,u.marble,e-6,at,i+8,12)),n.add(U(new Qi(2,12).rotateX(-Math.PI/2),u.water,e-6,at+.7,i+8)))}function uf(n,t,e=16){const i=new Fe;return i.absarc(0,0,n,0,Math.PI,!1),i.closePath(),new Rn(i,{depth:t,bevelEnabled:!1,curveSegments:e}).rotateX(-Math.PI/2)}function jb(n,t){const[e,i]=Hr,s=t?6:4;for(let r=0;r<s;r++){const a=9+(r+1)*(12/s),c=U(uf(a,1.1*(r+1),t?18:10),r===s-1?u.stoneDark:u.stone,e,at,i);c.rotation.y=-Math.PI/2,n.add(c)}const o=U(uf(8.6,.15,16),u.paving,e,at,i);if(o.rotation.y=-Math.PI/2,n.add(o),n.add(y(4,1.3,22,u.stone,e-10.5,at,i)),n.add(y(5,8,28,u.stone,e-15,at,i)),n.add(xe(28,5,1.6,u.roof,e-15,at+8,i,.4).rotateY(Math.PI/2)),t){const r=He({length:20,count:6,height:4.5,radius:.3});r.rotation.y=Math.PI/2,r.position.set(e-12,at+1.3,i),n.add(r);for(let a=0;a<2;a++)n.add(y(2,4.5,3,u.stone,e-11.5,at+1.3,i+(a?12.5:-12.5)))}}function Jb(n,t){const[e,i]=Bi;if(n.add(y(38,8,20,u.brick,e,at,i)),n.add(Oe(38,20,2.4,u.roof,e,at+8,i,.5)),n.add(y(38,15,10,u.brick,e,at,i)),n.add(xe(38,10,3,u.roof,e,at+15,i,.5)),n.add(Ne(z(5,5,10,u.brick,e+19,at,i,14,{thetaStart:-Math.PI/2,thetaLength:Math.PI}),1,0)),n.add(Ne(Me(5,u.roof,e+19,at+10,i,{phiLength:Math.PI,heightScale:.6}),1,0)),n.add(y(.2,2.4,.2,u.gold,e,at+18.2,i)),n.add(y(1.4,.2,.2,u.gold,e,at+19.6,i)),t){for(const p of[-1,1]){const m=qt({count:7,spacing:5,width:1.3,height:2.6,y:at+10.5});m.position.set(e,0,i+p*5.03),m.rotation.y=p>0?0:Math.PI,n.add(m);const v=qt({count:7,spacing:5,width:1,height:2.2,y:at+3.2});v.position.set(e,0,i+p*10.03),v.rotation.y=p>0?0:Math.PI,n.add(v)}const f=qt({count:3,spacing:5.5,width:2.2,height:4.6,y:at});f.rotation.y=-Math.PI/2,f.position.set(e-19.03,0,i),n.add(f)}const[s,o,r,a]=[e-19-14,i,28,20];n.add(Xt(r,a,u.paving,s,at+.04,o));const c=(f,p,m,v)=>{const _=new ut;_.add(He({length:f-3,count:Math.round(f/3.3),height:4.6,radius:.32})),_.add(y(f,.45,3.4,u.roof,0,4.6,-1.4)),_.position.set(p,at,m),_.rotation.y=v,n.add(_)};c(r,s,o+a/2-1.2,Math.PI),c(r,s,o-a/2+1.2,0),c(a,s-r/2+1.2,o,Math.PI/2),n.add(y(r,1,.6,u.stone,s,at,o+a/2)),n.add(y(r,1,.6,u.stone,s,at,o-a/2)),n.add(y(.6,1,a,u.stone,s-r/2,at,o)),t&&(n.add(z(1.8,2,.8,u.marble,s,at,o,12)),n.add(U(new Qi(1.6,12).rotateX(-Math.PI/2),u.water,s,at+.7,o)));const[l,h,d]=[e+6,i-10-6.5,7.5];if(n.add(z(d,d,11,u.brick,l,at,h,20)),n.add(z(d+.4,d+.4,.6,u.marble,l,at+11,h,20)),n.add(z(6,6,3.2,u.brick,l,at+11.6,h,16)),n.add(Me(6,u.lead,l,at+14.8,h,{heightScale:.8})),n.add(y(.2,2.4,.2,u.gold,l,at+19.4,h)),n.add(y(1.4,.2,.2,u.gold,l,at+20.8,h)),n.add(Ne(z(2.6,2.6,6,u.brick,l+d-.3,at,h,10,{thetaStart:-Math.PI/2,thetaLength:Math.PI}),1,0)),n.add(Ne(Me(2.6,u.roof,l+d-.3,at+6,h,{phiLength:Math.PI,heightScale:.6,segments:12}),1,0)),t){for(let f=0;f<8;f++){const p=f/8*Math.PI*2+Math.PI/8,m=U(ne(.9,2.2),u.opening,l+Math.sin(p)*6.03,at+12,h+Math.cos(p)*6.03);m.rotation.y=p,n.add(m)}for(let f=0;f<6;f++){const p=f/6*Math.PI*2+Math.PI/6+Math.PI,m=U(ne(1.1,3.2),u.opening,l+Math.sin(p)*(d+.03),at+5.5,h+Math.cos(p)*(d+.03));m.rotation.y=p,n.add(m)}}for(const[f,p]of[[-38,-16],[-38,8],[26,8],[30,-18]])n.add(ei(11,e+f,at,i+p))}function Qb(n,t){const[e,i]=[-16,-40];if(n.add(y(14,7,14,u.brick,e,at,i)),n.add(Oe(14,14,1.4,u.roof,e,at+7,i,.4)),n.add(y(15,9.5,5.5,u.brick,e,at,i)),n.add(y(5.5,9.5,15,u.brick,e,at,i)),n.add(xe(15,5.5,1.9,u.roof,e,at+9.5,i,.4)),n.add(xe(15,5.5,1.9,u.roof,e,at+9.5,i,.4).rotateY(Math.PI/2)),n.add(Ne(z(2.6,2.6,6,u.brick,e+7,at,i,10,{thetaStart:-Math.PI/2,thetaLength:Math.PI}),1,0)),n.add(Ne(Me(2.6,u.roof,e+7,at+6,i,{phiLength:Math.PI,heightScale:.6,segments:12}),1,0)),n.add(z(2.7,2.7,3.6,u.brick,e,at+11.4,i,12)),n.add(Me(2.7,u.lead,e,at+15,i,{heightScale:.72})),n.add(y(.16,1.8,.16,u.gold,e,at+16.9,i)),n.add(y(1.1,.16,.16,u.gold,e,at+18,i)),t){const s=qt({count:4,spacing:1.4,width:.5,height:1.8,y:at+12.2});s.position.set(e,0,i+2.73),n.add(s)}}function tE(n,t){const[e,i]=Gr;for(let a=0;a<3;a++)n.add(y(22-a*1.2,.6,38-a*1.2,u.marble,e,at+a*.6,i));const s=at+1.8;n.add(y(9,4.5,20,u.marble,e,s,i));const o=Gn("marble",15261647),r=[];for(let a=0;a<6;a++)r.push([e-8.5+a*3.4,i-16.2],[e-8.5+a*3.4,i+16.2]);for(let a=1;a<11;a++)r.push([e-8.5,i-16.2+a*2.95],[e+8.5,i-16.2+a*2.95]);for(const[a,c]of r){if(t.chance(.18))continue;const l=t.chance(.7);n.add(z(.7,.8,l?8.5:t.range(1.5,4.5),o,a,s,c,12))}n.add(y(17.5,1.4,1.8,o,e,s+8.5,i-16.2));for(let a=0;a<6;a++){const c=z(.75,.75,1.6,o,e+t.range(-16,16),at+.75,i+t.range(-24,24),12);c.rotation.set(Math.PI/2,t.range(0,Math.PI),0),n.add(c)}}function eE(n,t){const e=([s,o],[r,a],c)=>{const l=Math.hypot(r-s,a-o),h=y(l,at+1,c,u.stone,(s+r)/2,-1,(o+a)/2);h.rotation.y=Math.atan2(-(a-o),r-s),n.add(h);const d=y(l+.4,.4,c+.4,u.stoneDark,(s+r)/2,at-.05,(o+a)/2);return d.rotation.y=h.rotation.y,n.add(d),h.rotation.y};e([-70,56],[-30,62],8),e([-30,62],[12,81],8),e([16,86],[-24,104],6);const i=[-24,104];if(n.add(z(2.4,2.8,6.5,u.stone,i[0],at-.4,i[1],10)),n.add(z(2.9,2.9,.6,u.stoneDark,i[0],at+6.1,i[1],10)),t){n.add(z(1.3,1.3,.9,u.iron,i[0],at+6.7,i[1],8)),n.add(U(new Ko(1,0),u.fire,i[0],at+8,i[1]));for(const[s,o]of[[-62,60],[-48,62.3],[-36,64],[-21,69.2],[-7,75.6],[5,81]])n.add(z(.45,.5,1.1,u.stoneDark,s,at+.35,o,8))}for(const[s,o,r]of[[-22,59,12],[-6,61,13],[26,72,11]])n.add(y(r,5.5,7,u.brick,s,at,o)),n.add(xe(r,7,2.4,u.roof,s,at+5.5,o,.5)),t&&n.add(U(ne(2.2,3.4),u.opening,s,at,o+3.53))}function nE(n,t,{detail:e,elevation:i}){const s=[[Br[0],Br[1],27],[Hr[0]-4,Hr[1],28],[Bi[0],Bi[1],24],[Bi[0]-33,Bi[1],17],[Bi[0]+6,Bi[1]-16.5,11],[Gr[0],Gr[1],26],[-16,-40,12],[-24,104,6]],o=(r,[a,c,l,h],d)=>{for(let f=0,p=0;f<r*40&&p<r;f++){const m=t.range(a,l),v=t.range(c,h),_=t.range(7,13),g=t.range(6,10),S=Math.max(_,g)/2;if(on([m,v],zo)!==d||jn([m,v],zo,!0)<S+4||!on([m,v],zr)||jn([m,v],zr,!0)<S+3||d&&(Math.abs(m-10)<S+4||Math.abs(v-30)<S+4)||e&&Math.abs(jh(m,v)-1)*Math.min(Si.rx,Si.rz)<S+3||s.some(([C,T,R])=>Math.hypot(m-C,v-T)<R))continue;const x=t.chance(.3),M=Ec({w:_,d:g,h:x?t.range(7.5,10):t.range(4.5,6.5),color:t.pick(Yb),roof:t.chance(.55)?"hip":"gable",windows:e});M.position.set(m,i(m,v),v),M.rotation.y=t.pick([0,Math.PI/2,Math.PI,-Math.PI/2])+t.range(-.12,.12),n.add(M),s.push([m,v,S+5]),p++}};o(e?48:22,[-34,-62,114,48],!0),e&&(o(7,[40,-104,104,-74],!1),o(4,[-70,36,-44,54],!1))}function iE(n,t,e,i){for(let s=0;s<(e?26:8);s++){const o=t.range(-88,126),r=t.range(-104,104);if(!on([o,r],zr)||jn([o,r],zr,!0)<4||jn([o,r],zo,!0)<5||Math.hypot(o-Br[0],r-Br[1])<24||Math.hypot(o-Hr[0],r-Hr[1])<26||Math.hypot(o-Bi[0],r-Bi[1])<26||Math.hypot(o-Gr[0],r-Gr[1])<24||Math.abs(o-10)<6||Math.abs(r-30)<6||e&&Math.abs(jh(o,r)-1)*30<3||r>52&&o>-40&&o<20)continue;const a=i(o,r);n.add(t.chance(.5)?ei(t.range(9,13),o,a,r):yi(t.range(5,8),o,a,r))}if(e)for(let s=0;s<5;s++)for(let o=0;o<5;o++)n.add(yi(4.5,72+s*9+o%2*3,at,64+o*8+s*1.5))}function sE(n){const{geometry:t,deck:e}=Jr({length:9,beam:2.6,depth:1,bowRise:.6,sternRise:.6,segments:16,ribs:8});for(const[s,o,r]of[[-44,70,.3],[-56,66,-.2],[-4,89,2.4]]){const a=new ut;a.add(U(t,u.hull,0,.6,0),U(e,u.wood,0,.4,0)),a.add(z(.08,.1,6,u.wood,.8,.4,0,6)),a.position.set(s,0,o),a.rotation.y=r;const c=s;a.userData.animate=l=>{a.position.y=.4+Math.sin(l*1.3+c)*.12},n.add(a)}const i=bs({banner:"byzantine",sail:!1});i.scale.setScalar(.75),i.position.set(-14,0,84),i.rotation.y=-.42,n.add(i)}function oE(n){const t=Gn("wood",8017462);for(const[e,i,s,o]of[[42,38,.32,0],[30,48,.4,2.4]]){const r=Iy(t,u.gold,Gn("marble",16777215));r.scale.setScalar(4.5);const a=r.userData.animate;r.userData.animate=c=>{a(c);const l=c*s+o;r.position.set(20+Math.cos(l)*e,i+Math.sin(c*.7+o)*3,-10+Math.sin(l)*e),r.rotation.set(.25,-l-Math.PI/2,0,"YXZ")},n.add(r)}}const ie=3,rE=[[-40,-110],[130,-110],[130,110],[-30,110],[-58,84],[-84,62],[-84,20],[-68,4],[-66,-30],[-68,-62],[-58,-92]],fi=-12,Vr=[ie,6,9.5,13,17],ta=[-34,8,50,92],wc=(n,t)=>ta[n]+3.5*Math.sin(t/23+n*1.7)+1.5*Math.sin(t/9+n)+Math.max(0,t-40)*1.4,aE=(n,t)=>{let e=ie;for(let i=0;i<ta.length;i++)n>=wc(i,t)&&(e=Vr[i+1]);return e},Qp=(n,t,e)=>ta.some((i,s)=>Math.abs(n-wc(s,t))<e),fr=[[-110,-40],[-92,-58],[-62,-68],[-30,-66],[4,-68],[20,-84],[62,-84],[84,-58],[110,-30]];function t0(n){for(let t=1;t<fr.length;t++){const[e,i]=fr[t-1],[s,o]=fr[t];if(n<=s)return i+(n-e)/(s-e)*(o-i)}return fr[fr.length-1][1]}const cE=[16050644,16249315,15324078,15850687,14465422,16117472,15124640],Wr=[71,-55],Xr=[-28,78],vr=[-54,24];function lE({lod:n="detail"}={}){const t=n==="detail",e=new ut,i=fn(324),s=t?aE:()=>ie;t?(hE(e),e.add(Xt(340,220,u.water,-40,.6,0))):e.position.y=-ie,dE(e,t),fE(e,t),pE(e,t,s),mE(e,t,s),gE(e,t,s),t&&_E(e);const o=[[-50,-66,12],[-50,-50,12],[-50,-34,12],[-50,-18,12],[-56,2,13],[vr[0],vr[1],19],[Wr[0],Wr[1],32],[Xr[0],Xr[1],27],[-18,-19,7],[-66,52,7],[112,-6,5]];vE(e,i,{count:t?54:22,avoid:o,elevation:s,detail:t}),ME(e,i,t,s),ze(e);const r=On("byzantine",{width:3,height:2,pole:6});return r.position.set(vr[0]-11,ie+14.6,vr[1]+10),e.add(r),t&&(xE(e),yE(e)),e}function hE(n){n.add(U(ic(rE,ie,6),u.grass));const t=Gn("grass",14208924);for(let e=0;e<ta.length;e++){const i=[];for(let o=-110;o<=110;o+=5)i.push([Math.min(130,wc(e,o)),o]);i.push([130,110],[130,-110]);const s=Vr[e+1];n.add(U(ic(i,s,s-Vr[e]+.5),e>=2?t:u.grass))}n.add(Xt(5,70,u.sand,-60.5,ie+.02,-36))}function dE(n,t){n.add(y(7,ie+1,74,u.stone,-66,-1,-36)),n.add(y(7.4,.4,74.4,u.stoneDark,-66,ie-.05,-36));const e=y(6,ie+1.2,42,u.stone,-82,-1,-84);e.rotation.y=.6,n.add(e);const i=[-94,-101];if(n.add(z(2.6,3,7,u.stone,i[0],ie-.4,i[1],10)),n.add(z(3.1,3.1,.6,u.stoneDark,i[0],ie+6.6,i[1],10)),t){n.add(z(1.4,1.4,.9,u.iron,i[0],ie+7.2,i[1],8)),n.add(U(new Ko(1.1,0),u.fire,i[0],ie+8.6,i[1]));for(const s of[-66,-52,-38,-24,-10])n.add(z(.45,.5,1.1,u.stoneDark,-68.5,ie+.35,s,8));for(let s=0;s<4;s++)n.add(y(.8,.6,6,u.stoneDark,-69.9-s*.8,ie-.9-s*.6,-36))}for(const[s,o,r]of[[-66,15,5.5],[-50,17,6],[-34,14,5],[-18,16,6]]){const a=uE(o,10,r,t);a.position.set(-50,ie,s),n.add(a)}if(t){for(const[o,r]of[[-5,12866877],[2,15260864],[9,4157324]]){const a=new ut;for(const[l,h]of[[-2.4,-2.4],[2.4,-2.4],[-2.4,2.4],[2.4,2.4]])a.add(z(.08,.1,3,u.wood,l,0,h,5));const c=U(new ni(5.6,5.6).rotateX(-Math.PI/2),Un(r),0,3,0);c.rotation.z=.12,a.add(c),a.add(y(3.6,.9,1.4,u.wood,0,0,0)),a.position.set(-56,ie,o),n.add(a)}const s=Gn("brick",13208154);for(let o=0;o<7;o++)n.add(z(.3,.42,.9,s,-62+o%3*.9,ie,-14+o*.8,6))}}function uE(n,t,e,i){const s=new ut;if(s.add(y(n,e,t,u.brick,0,0,0)),s.add(xe(n,t,t*.32,u.roof,0,e,0,.5)),i){const o=U(ne(2.4,3.6),u.opening,-n/2-.03,0,0);o.rotation.y=-Math.PI/2,s.add(o);const r=U(ne(.8,1.2),u.opening,-n/2-.03,e-2,0);r.rotation.y=-Math.PI/2,s.add(r)}return s}function fE(n,t){const[e,i]=vr,[s,o,r]=[24,22,5];for(const c of[-1,1])n.add(y(s,r,1.8,u.stone,e,ie,i+c*o/2)),n.add(y(1.8,r,o,u.stone,e+c*s/2,ie,i));const a=[e-s/2+1,i+o/2-1];if(n.add(y(7,12,7,u.stone,a[0],ie,a[1])),n.add(xc(8,8,2.6,u.roof,a[0],ie+12,a[1])),n.add(y(2.4,4.2,3.4,u.opening,e-s/2,ie,i-4)),n.add(y(5,1.2,2.6,u.stone,e-s/2,ie+4.2,i-4)),n.add(y(13,6,9,u.plaster,e+2.5,ie,i)),n.add(Oe(13,9,2.8,u.roof,e+2.5,ie+6,i,.5)),t){for(const d of[-1,1]){n.add(U(se(s-1),u.stone,e,ie+r,i+d*(o/2+.55)));const f=U(se(o-1),u.stone,e+d*(s/2+.55),ie+r,i);f.rotation.y=Math.PI/2,n.add(f)}const c=He({length:8,count:4,height:3.2,radius:.28});c.rotation.y=Math.PI/2,c.position.set(e-5.5,ie,i),n.add(c),n.add(y(3,.4,9.5,u.wood,e-5.5,ie+3.2,i));const l=qt({count:3,spacing:3,width:.8,height:1.4,y:ie+3.6});l.rotation.y=-Math.PI/2,l.position.set(e-4.03,0,i),n.add(l);const h=U(ne(.7,1.6),u.opening,a[0]-3.53,ie+8,a[1]);h.rotation.y=-Math.PI/2,n.add(h)}}function pE(n,t,e){if(!t){n.add(Xt(190,7,u.paving,35,ie+.03,fi));return}const i=ta.map((c,l)=>wc(l,fi));let s=-62;for(let c=0;c<=i.length;c++){const l=c<i.length?i[c]-4:130,h=Vr[c];if(n.add(Xt(l-s,7,u.paving,(s+l)/2,h+.03,fi)),c<i.length){const d=Vr[c+1]-h,f=8,p=y(Math.hypot(f,d)+.6,.5,7,u.paving,0,0,0);p.position.set(i[c],h+d/2-.2,fi),p.rotation.z=Math.atan2(d,f),n.add(p);for(const m of[-1,1])n.add(y(f+2,d+.6,.8,u.stone,i[c],h-.2,fi+m*3.9));s=i[c]+4}}n.add(z(.7,.8,2.6,u.marble,112,e(112,fi+6),fi+6,10));const[o,r]=[-18,fi-7],a=e(o,r);n.add(y(7,1.1,2.6,u.marble,o,a,r)),n.add(y(7.4,.3,3,u.marble,o,a+1.1,r)),n.add(y(6,2.6,.8,u.marble,o,a,r-1.6)),n.add(U(new ni(6.4,2).rotateX(-Math.PI/2),u.water,o,a+1.2,r+.1))}function mE(n,t,e){const[i,s]=Wr,o=e(i,s);n.add(y(16,8,16,u.brick,i,o,s)),n.add(y(18,11,6.5,u.brick,i,o,s)),n.add(y(6.5,11,18,u.brick,i,o,s)),n.add(Oe(16,16,1.5,u.roof,i,o+8,s,.4)),n.add(xe(18,6.5,2.2,u.roof,i,o+11,s,.4));const r=xe(18,6.5,2.2,u.roof,i,o+11,s,.4);r.rotation.y=Math.PI/2,n.add(r);for(const[d,f,p]of[[0,3.2,7],[-5.5,1.5,5],[5.5,1.5,5]])n.add(Ne(z(f,f,p,u.brick,i+8,o,s+d,10,{thetaStart:-Math.PI/2,thetaLength:Math.PI}),1,0)),n.add(Ne(Me(f,u.roof,i+8,o+p,s+d,{phiLength:Math.PI,heightScale:.6,segments:12}),1,0));if(n.add(z(3.2,3.2,4.5,u.brick,i,o+13.2,s,12)),n.add(Me(3.2,u.lead,i,o+17.7,s,{heightScale:.72})),e0(n,i,o+20,s,2.2),n.add(y(4.5,7,16,u.brick,i-10.25,o,s)),n.add(Oe(4.5,16,1.5,u.roof,i-10.25,o+7,s,.4)),t){const d=qt({count:4,spacing:1.6,width:.6,height:2.2,y:o+14.2});d.position.set(i,0,s+3.23),n.add(d);for(const p of[-1,1]){const m=qt({count:3,spacing:2.2,width:.7,height:2.4,y:o+7.8});m.position.set(i,0,s+p*3.28),m.rotation.y=p>0?0:Math.PI,n.add(m)}const f=U(ne(2,3.6),u.opening,i-12.53,o,s);f.rotation.y=-Math.PI/2,n.add(f)}const[a,c,l]=[i,32,48];for(const d of[-1,1])n.add(y(c,3.6,1,u.stone,a,o,s+d*l/2)),n.add(y(1,3.6,l,u.stone,a+d*c/2,o,s));n.add(y(3,5,4,u.stone,a-c/2,o,s+8)),n.add(y(2.2,4,1.4,u.opening,a-c/2,o,s+8));const h=s+l/2-5;if(n.add(y(28,5.5,7,u.plaster,a,o,h)),n.add(xe(28,7,2.4,u.roof,a,o+5.5,h,.5)),n.add(y(12,6,9,u.plaster,a+8,o,s-18.5)),n.add(Oe(12,9,2.6,u.roof,a+8,o+6,s-18.5,.5)),t){const d=He({length:24,count:7,height:3,radius:.26});d.position.set(a,o,h-5.2),n.add(d),n.add(y(26,.4,4,u.roof,a,o+3,h-5.3));const f=qt({count:6,spacing:4.4,width:.7,height:1.2,y:o+3.6});f.position.set(a,0,h-3.47),n.add(f),n.add(z(2,2.2,.9,u.marble,a-8,o,s+6,12))}for(const[d,f]of[[-12,-16],[12,-14],[-12,6],[12,10]])n.add(ei(10,i+d,o,s+f))}function gE(n,t,e){const[i,s]=Xr,o=2.5,r=e(i,s);n.add(y(36,o,32,u.banded,i,r-.5,s)),n.add(Xt(36,32,u.paving,i,r+o-.47,s));const a=r+o-.5;n.add(y(12,12,24,u.plasterOchre,i+4,a,s)),n.add(Oe(12,24,3.4,u.roof,i+4,a+12,s,.6));const c=i-4;for(const l of[0,5.5]){const h=He({length:21,count:7,height:5,radius:.38});h.rotation.y=Math.PI/2,h.position.set(c,a+l,s),n.add(h),n.add(y(4.4,.5,24,u.marble,c,a+l+5,s))}if(n.add(Oe(4.4,24,1.1,u.roof,c,a+11,s,.4)),n.add(y(14,7.5,8,u.plasterOchre,i+8,a,s-11)),n.add(Oe(14,8,2.4,u.roof,i+8,a+7.5,s-11,.5)),n.add(y(7,6.5,7,u.brick,i-10,a,s-11)),n.add(z(2.3,2.3,2.2,u.brick,i-10,a+6.5,s-11,12)),n.add(Me(2.3,u.lead,i-10,a+8.7,s-11,{heightScale:.72})),e0(n,i-10,a+10.3,s-11,1.4),n.add(z(2.4,2.6,.8,u.marble,i-11,a,s+8,16)),n.add(z(.4,.45,2,u.marble,i-11,a,s+8,8)),t){for(const l of[-1,1]){const h=qt({count:4,spacing:5.2,width:1.1,height:2.4,y:a+7.5});h.rotation.y=l>0?Math.PI/2:-Math.PI/2,h.position.set(i+4+l*6.05,0,s),n.add(h)}n.add(U(new Qi(2.2,16).rotateX(-Math.PI/2),u.water,i-11,a+.7,s+8));for(let l=0;l<3;l++)n.add(y(1.3,.7*(3-l),6,u.stone,i-18.6-l*1.3,r,s+2))}for(const[l,h]of[[-16,-14],[-16,14],[16,14],[16,-14]])n.add(ei(9,i+l,a,s+h));for(const[l,h]of[[-15,4],[-6,13],[-14,11]])n.add(yi(5,i+l,a,s+h))}function _E(n){const[t,e]=[-66,52];n.add(y(3,1.2,3,u.marble,t,ie,e)),n.add(z(.6,.7,7,u.marble,t,ie+1.2,e,10)),n.add(z(1,.7,.7,u.marble,t,ie+8.2,e,10));const i=new ut;i.add(y(2.4,1.1,.9,u.bronze,0,.8,0)),i.add(y(.8,.8,.6,u.bronze,1.5,1.2,0));for(const[s,o]of[[-.8,-.25],[-.8,.25],[.8,-.25],[.8,.25]])i.add(y(.22,.8,.22,u.bronze,s,0,o));i.position.set(t,ie+8.9,e),i.rotation.y=Math.PI/2,n.add(i)}function e0(n,t,e,i,s){n.add(y(.18,s,.18,u.gold,t,e,i)),n.add(y(s*.6,.18,.18,u.gold,t,e+s*.62,i))}function vE(n,t,{count:e,avoid:i,elevation:s,detail:o}){let r=0;for(let a=0;a<e*30&&r<e;a++){const c=t.chance(.55)?t.range(-56,20):t.range(20,122),l=t.range(-100,100),h=t.range(7,13),d=t.range(6,10),f=Math.max(h,d)/2;if(c-f<t0(l)+5||Math.abs(l-fi)<f+5||i.some(([v,_,g])=>Math.hypot(c-v,l-_)<g)||o&&Qp(c,l,f+2.5))continue;const p=t.chance(.3),m=Ec({w:h,d,h:p?t.range(7.5,10):t.range(4.5,6.5),color:t.pick(cE),roof:t.chance(.55)?"hip":"gable",windows:o});m.position.set(c,s(c,l),l),m.rotation.y=t.pick([0,Math.PI/2,Math.PI,-Math.PI/2])+t.range(-.12,.12),n.add(m),i.push([c,l,f+5]),r++}}function ME(n,t,e,i){for(let s=0;s<(e?30:10);s++){const o=t.range(-50,126),r=t.range(-104,104);if(Math.abs(r-fi)<8||Math.hypot(o-Wr[0],r-Wr[1])<30||Math.hypot(o-Xr[0],r-Xr[1])<26||o<t0(r)+6||e&&Qp(o,r,3))continue;const a=i(o,r);n.add(o>60?yi(t.range(5,7),o,a,r):t.chance(.5)?ei(t.range(9,13),o,a,r):yi(t.range(6,9),o,a,r))}if(e){for(let s=0;s<4;s++)for(let o=0;o<6;o++){const r=102+s*7,a=-95+o*9+s%2*4;n.add(yi(4.5,r,i(r,a),a))}for(let s=0;s<4;s++)for(let o=0;o<4;o++){const r=62+s*7,a=72+o*9+s%2*4;n.add(yi(4.5,r,i(r,a),a))}}}function xE(n){const[t,e]=[-128,82];n.add(z(12,15,3.4,u.stoneDark,t,-1,e,18)),n.add(z(11.5,11.5,1.4,u.stone,t,2.4,e,18)),n.add(z(10.6,10.6,3.2,u.stone,t,3.8,e,18,{open:!0})),n.add(z(9.6,9.6,3.2,u.stone,t,3.8,e,18,{open:!0})),n.add(U(new Kr(9.6,10.6,18).rotateX(-Math.PI/2),u.stone,t,7,e)),n.add(U($s(10.1,{count:20,merlon:1.2,height:.9,thickness:.7}),u.stone,t,7,e)),n.add(y(6,4.2,4,u.stone,t+10,0,e+2)),n.add(y(2.2,3.2,1.2,u.opening,t+10.2,3.8,e+2)),n.add(z(4.2,4.6,9,u.stone,t,3.8,e,12)),n.add(z(4.6,4.6,.8,u.stoneDark,t,12.8,e,12)),n.add(z(3.9,3.9,5.5,u.wood,t,13.6,e,12)),n.add(z(4.5,4.5,.8,u.wood,t,19.1,e,12)),n.add(xc(6.6,6.6,4.8,u.lead,t,19.9,e));const i=U(ne(.9,1.6),u.opening,t+3.93,15.6,e);i.rotation.y=Math.PI/2,n.add(i),n.add(y(1.4,2.4,.5,u.opening,t+4.3,4.6,e));const s=On("byzantine",{width:2.4,height:1.6,pole:5});s.position.set(t,24.4,e),n.add(s)}function yE(n){const{geometry:t,deck:e}=Jr({length:10,beam:2.8,depth:1.1,bowRise:.6,sternRise:.7,segments:16,ribs:8});for(const[s,o,r,a]of[[-73,-46,1.5,!1],[-74,-26,1.65,!1],[-118,-40,.4,!0],[-72,-8,1.4,!1]]){const c=new ut;c.add(U(t,u.hull,0,.6,0),U(e,u.wood,0,.4,0)),c.add(z(.08,.1,6,u.wood,.8,.4,0,6)),c.position.set(s,0,o),c.rotation.y=r;const l=s+o;c.userData.animate=h=>{c.position.y=.4+Math.sin(h*1.3+l)*.12,a&&(c.position.z=o+Math.sin(h*.15)*22)},n.add(c)}const i=bs({banner:"byzantine",sail:!1});i.scale.setScalar(.75),i.position.set(-84,0,-58),i.rotation.y=Math.PI/2+.15,n.add(i)}const SE=[62,50],xh=6.5,bE=9,EE=15,ja=7.2,Ja=5.4,yh=.8,wE=ja+yh+Ja+.6;function TE({lod:n="detail"}={}){const t=n==="detail",e=new ut,[i,s]=SE,o=[i-xh,s-xh];t&&e.add(y(240,1,190,u.paving,0,-1,0)),e.add(U(NE(i,s),u.marble,0,.03,0)),e.add(Xt(t?240:2*i+20,10,Gn("paving",13218958),0,.06,0));const r=bE/s,a=EE/i,c=[[r,Math.PI/2-a],[Math.PI/2+a,Math.PI-r],[Math.PI+r,Math.PI*2-r]],l=ja+yh;for(const[h,d]of c)if(e.add(pr(i-1.2,s-1.2,i,s,h,d,0,wE,u.stone)),e.add(pr(o[0]-.9,o[1]-.9,i+.2,s+.2,h,d,ja,yh,u.marble)),e.add(pr(o[0]-.9,o[1]-.9,o[0]-.4,o[1]-.4,h,d,l,1,u.marble)),e.add(pr(o[0]-1.2,o[1]-1.2,i+.6,s+.6,h,d,l+Ja,.7,u.marble)),e.add(pr(o[0]-1.4,o[1]-1.4,i+.9,s+.9,h,d,l+Ja+.7,.8,u.roof)),t)for(const[f,p]of OE(...o,4.2,h,d))e.add(Sh(f,0,p,ja,.42)),e.add(Sh(f,l,p,Ja,.32));if(AE(e,t,i),IE(e,t,s),t&&DE(e,s),RE(e,t),t){UE(e,o);const h=fn(330),d=Array.from({length:24},(f,p)=>{const m=p/24*Math.PI*2;return[Math.cos(m)*i,Math.sin(m)*s,16]});ps(e,h,{count:30,area:[-115,-90,115,90],avoid:[[0,0,70],[0,-70,26],[-100,0,10],[100,0,10],...d]})}return ze(e)}function AE(n,t,e){for(const i of[-1,1]){const s=i*(e-2),o=t?U(Tn({length:24,height:17,thickness:9,openings:[{x:0,width:9,bottom:0,spring:10}]}),u.marble):y(24,17,9,u.marble);if(o.rotation.y=Math.PI/2,o.position.x=s,n.add(o),n.add(y(10,1.4,25.5,u.marble,s,17,0)),n.add(y(8.5,3.6,22,u.marble,s,18.4,0)),n.add(y(9.5,.6,23,u.marble,s,22,0)),!!t){for(const r of[-9.5,9.5])for(const a of[-3.5,3.5])n.add(y(1.4,15.5,1.4,u.marble,s+a,0,r));for(const r of[-7,7])n.add(Vs(s,22.6,r,3.4,u.bronze));n.add(Vs(s,22.6,0,3.8,u.bronze))}}}function RE(n,t){const e=t?PE():u.porphyry;for(let c=0;c<5;c++)n.add(y(16-c*1.6,.4*(c+1),16-c*1.6,u.marble,0,0,0));let i=2;if(n.add(y(8.4,.8,8.4,u.marble,0,i,0)),n.add(y(7.2,5.6,7.2,u.marble,0,i+.8,0)),t)for(const c of[-1,1])n.add(y(5.6,1.6,.25,u.gildedBronze,0,i+3,c*3.62)),n.add(y(.25,1.6,5.6,u.gildedBronze,c*3.62,i+3,0));n.add(y(8.4,.8,8.4,u.marble,0,i+6.4,0)),i+=7.2,n.add(z(2.1,2.5,.8,u.marble,0,i,0,24)),i+=.8;const s=t?9:3,o=29.7/s,r=We(1.3,1.45,o,24),a=new Ss(1.5,.22,8,32).rotateX(Math.PI/2);for(let c=0;c<s;c++)n.add(U(r,e,0,i,0)),c>0&&t&&n.add(U(a,u.gildedBronze,0,i,0)),i+=o;n.add(z(1.9,1.3,1.6,u.marble,0,i,0,24)),n.add(y(3.8,.6,3.8,u.marble,0,i+1.6,0)),n.add(CE(t,i+2.2))}let Ga=null;function PE(){if(Ga)return Ga;const n=document.createElement("canvas");n.width=n.height=128;const t=n.getContext("2d");t.fillStyle="rgb(104, 42, 62)",t.fillRect(0,0,128,128);const e=fn(330);for(let s=0;s<1400;s++){const o=e.chance(.75);t.fillStyle=o?`rgba(230, 190, 200, ${.35+e.next()*.4})`:`rgba(60, 20, 36, ${.4+e.next()*.4})`;const r=1+e.next()*2;t.fillRect(e.next()*128,e.next()*128,r,r)}const i=new Zr(n);return i.colorSpace=sn,i.wrapS=i.wrapT=Zi,i.repeat.set(1/1.5,1/1.5),Ga=new _e({map:i,roughness:.42,metalness:0}),Ga}function CE(n,t){const e=new ut;e.add(z(.75,1,4.4,u.gold,0,t,0,12)),e.add(z(1.3,.9,1.3,u.gold,0,t+3.6,0,12)),e.add(U(new dn(.6,14,10),u.gold,0,t+5.4,0));const i=z(.08,.08,7.5,u.gold,1.25,t+.3,0,6);if(i.rotation.z=-.06,e.add(i),e.add(z(.2,.25,2.6,u.gold,-1.3,t+2.6,.3,8)),e.add(U(new dn(.45,12,8),u.gold,-1.3,t+5.1,.3)),n)for(let s=0;s<7;s++){const o=Math.PI*(.05+.9*s/6),r=tr(.1,1.2,u.gold,Math.cos(o)*.55,t+5.5+Math.sin(o)*.45,0,5);r.rotation.z=o-Math.PI/2,e.add(r)}return e}function IE(n,t,e){const i=-(e+13);n.add(y(36,16,24,u.stone,0,0,i)),n.add(xe(36,24,6,u.roof,0,16,i)),n.add(Ne(z(6,6,14,u.stone,0,0,i-12,12,{thetaStart:-Math.PI/2,thetaLength:Math.PI}),0,-1)),n.add(Ne(U(new dn(6.2,12,6,0,Math.PI,0,Math.PI/2).scale(1,.6,1),u.lead,0,14,i-12),0,-1));const s=-(e-1);n.add(y(26,.8,10,u.marble,0,0,s)),n.add(y(26,1.2,10,u.marble,0,12.8,s));const o=xe(10,26,3.4,u.roof,0,14,s,.3);if(o.rotation.y=Math.PI/2,n.add(o),n.add(y(25,2.6,.4,u.marble,0,14,s+5)),n.add(y(6,9,.5,u.bronze,0,.8,-(e+1.1))),t){for(const r of[-9.75,-3.25,3.25,9.75])n.add(Sh(r,.8,s+3.6,12,.6,u.porphyry));n.add(LE(-(e+1.25))),n.add(y(3,3,3,u.marble,-17,0,-(e-6))),n.add(Vs(-17,3,-(e-6),6.5,u.bronze))}}function LE(n){const t=new ut;for(let e=0;e<5;e++)t.add(y(2,3,.3,u.opening,-10+e*5,9,n));return t}function DE(n,t){const e=t-xh-2;n.add(y(22,9,1.6,u.marble,0,0,e+1.4));for(let s=0;s<3;s++){const o=-7+s*7;n.add(y(2.4,5,.6,u.opening,o,2,e+.5)),n.add(Vs(o,2.2,e+.5,2.8,u.marble))}n.add(y(22,.7,2.2,u.marble,0,9,e+1.4)),n.add(Ne(z(7,7,1.2,u.marble,0,0,e-.2,20,{thetaStart:-Math.PI/2,thetaLength:Math.PI}),0,1));const i=U(new Qi(6.2,20,Math.PI,Math.PI).rotateX(-Math.PI/2),u.water,0,.9,e-.2);n.add(i)}function UE(n,t){const e=(o,r,a=2.6)=>n.add(y(a,2.4,a,u.marble,o,0,r));for(const[o,r]of[-2.4,0,2.4].entries())e(-30+r,24,1.8),n.add(Vs(-30+r,2.4,24,2.4+(o===1?.4:0),u.bronze));e(-30,29,1.8),n.add(Vs(-30,2.4,29,2.4,u.bronze));for(const o of[28,36])n.add(y(2.2,1,2.2,u.marble,o,0,22)),n.add(z(.5,.6,7,u.porphyry,o,1,22,12)),n.add(z(.8,.5,.6,u.marble,o,8,22,12)),n.add(y(2.2,1.1,1.2,u.bronze,o,8.6,22)),n.add(z(.3,.4,1.4,u.bronze,o+.9,9.4,22,6));e(30,-24,4);const i=new ut;i.add(y(4.2,2.4,2.2,u.bronze,0,1.8,0));for(const o of[-1.4,1.4])for(const r of[-.7,.7])i.add(z(.32,.38,1.8,u.bronze,o,0,r,8));i.add(U(new dn(1.1,10,8),u.bronze,2.6,3.2,0));const s=z(.14,.3,2.4,u.bronze,3.4,1.4,0,6);s.rotation.z=.2,i.add(s),i.position.set(30,2.4,-24),n.add(i);for(const[o,r]of[[.35,3.2],[2.85,3],[3.9,3.4],[5.6,3.1]]){const a=Math.cos(o)*(t[0]-10),c=-Math.sin(o)*(t[1]-10);e(a,c),n.add(Vs(a,2.4,c,r,u.bronze))}}function Vs(n,t,e,i,s){const o=new ut;return o.add(z(i*.12,i*.17,i*.72,s,0,0,0,10)),o.add(z(i*.2,i*.14,i*.14,s,0,i*.68,0,10)),o.add(U(new dn(i*.1,10,8),s,0,i*.9,0)),o.position.set(n,t,e),o}function Sh(n,t,e,i,s,o=u.marble){const r=new ut;return r.add(y(s*2.6,s*.6,s*2.6,u.marble,0,0,0)),r.add(z(s*.85,s,i-s*1.6,o,0,s*.6,0,10)),r.add(z(s*1.6,s*.9,s,u.marble,0,i-s,0,10)),r.position.set(n,t,e),r}function NE(n,t){const e=new Fe;return e.absellipse(0,0,n,t,0,Math.PI*2,!1),new ii(e,48).rotateX(-Math.PI/2)}function pr(n,t,e,i,s,o,r,a,c){const l=new Fe;l.absellipse(0,0,e,i,s,o,!1),l.lineTo(n*Math.cos(o),t*Math.sin(o)),l.absellipse(0,0,n,t,o,s,!0);const h=new Rn(l,{depth:a,bevelEnabled:!1,curveSegments:40});return U(h.rotateX(-Math.PI/2),c,0,r,0)}function OE(n,t,e,i,s){const o=[];let r=e/2,a=[n*Math.cos(i),t*Math.sin(i)];for(let c=1;c<=400;c++){const l=i+(s-i)*c/400,h=[n*Math.cos(l),t*Math.sin(l)];r+=Math.hypot(h[0]-a[0],h[1]-a[1]),r>=e&&(o.push([h[0],-h[1]]),r=0),a=h}return o}const Mo={at:[-6.6,-4],rotation:60,scale:2.5};function yl(n,t){const e=Mo.scale*yc,i=Mo.rotation*Math.PI/180,s=Ar[n].x*e;return{at:[Mo.at[0]+s*Math.cos(i),Mo.at[1]+s*Math.sin(i)],rotation:Mo.rotation,scale:t,on:"hippodrome",lift:ln*e,labelWithin:18}}const Qa=[{id:"hagia-sophia",region:"constantinople",period:{from:537},create:Ay,map:{at:[3.5,2.5],rotation:-32,scale:7}},{id:"hippodrome",region:"constantinople",period:{from:203,fromApprox:!0,to:1600,toApprox:!0,ending:"demolished"},create:bS,map:Mo},{id:"obelisk-of-theodosius",region:"constantinople",period:{from:390},create:Ar["obelisk-of-theodosius"].create,map:yl("obelisk-of-theodosius",3)},{id:"serpent-column",region:"constantinople",period:{from:330,fromApprox:!0},create:Ar["serpent-column"].create,map:yl("serpent-column",3)},{id:"walled-obelisk",region:"constantinople",period:{from:400,fromApprox:!0},create:Ar["walled-obelisk"].create,map:yl("walled-obelisk",3)},{id:"great-palace",region:"constantinople",period:{from:330,to:1453,toApprox:!0,ending:"demolished"},create:US,map:{at:[.5,-4.6],rotation:48,scale:3}},{id:"basilica-cistern",region:"constantinople",period:{from:532},create:KS,map:{at:[-5,5.15],rotation:0,scale:4.3}},{id:"forum-of-constantine",region:"constantinople",period:{from:330,fromApprox:!0},create:TE,map:{at:ax,rotation:-4,scale:4.9}},{id:"aqueduct-of-valens",region:"constantinople",period:{from:368},create:ib,map:{at:[-21,9.5],rotation:-25,scale:4.2,clearance:.9}},{id:"blachernae",region:"constantinople",period:{from:500,fromApprox:!0},create:ab,map:{at:[-30.8,27.6],rotation:-10,scale:2.9}},{id:"theodosian-walls",region:"constantinople",period:{from:413},create:fb,map:{absolute:!0}},{id:"venetian-quarter",region:"constantinople",period:{from:1082,to:1453,ending:"ended"},create:vb,map:{at:[-7.46,10.4],rotation:-16,scale:4.2}},{id:"horn-chain",region:"golden-horn",period:{from:717,to:1453,ending:"ended"},create:Eb,map:{absolute:!0}},{id:"dromon",region:"golden-horn",period:{from:500,fromApprox:!0,to:1150,toApprox:!0,ending:"ended"},create:Ib,map:{route:hx,speed:.9,scale:8}},{id:"galata-tower",region:"pera",period:{from:1348},create:Ub,map:{at:ex,rotation:0,scale:8.4}},{id:"genoese-quarter",region:"pera",period:{from:1267,to:1453,ending:"ended"},create:Fb,map:{absolute:!0}},{id:"chrysopolis",region:"chrysopolis",period:{from:-500,fromApprox:!0},create:lE,map:{at:[26.3,15.6],rotation:-42,scale:3.6}},{id:"chalcedon",region:"chalcedon",period:{from:-685,fromApprox:!0},create:$b,map:{at:[39.5,-21],rotation:0,scale:4.2}}],FE=n=>Qa.find(t=>t.id===n),kE=340,zE=.25,BE=n=>ph.find(t=>t.id===n);class HE{constructor(t){this.root=t,this.mode="map",this.busy=!1;const e=t.querySelector("#viewport");this.renderer=new vv({antialias:!0}),this.renderer.setPixelRatio(hy()),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=bn.shadowType,this.renderer.shadowMap.autoUpdate=!1,this.renderer.toneMapping=gf,this.renderer.toneMappingExposure=1.05,e.appendChild(this.renderer.domElement),this.mapView=new dy({renderer:this.renderer,container:e,landmarks:Qa,regions:ph,onSelectLandmark:i=>this.openLandmark(i),onSelectRegion:i=>this.openRegion(i)}),this.detailView=new my({renderer:this.renderer}),this.panel=new vy(t.querySelector("#info-panel"),{onSelectLandmark:i=>this.openLandmark(i),onClose:()=>this.mode==="detail"?this.closeLandmark():this.hidePanel()}),this.sidebar=new xy(t.querySelector("#sidebar"),{regions:ph,landmarks:Qa,onSelectRegion:i=>this.openRegion(i),onSelectLandmark:i=>this.openLandmark(i),onToggle:()=>this.updateInsets()}),this.settings=new by(t.querySelector("#settings")),this.timeline=new Ty(t.querySelector("#timeline"),{onChange:i=>{this.mapView.setYear(i),this.sidebar.setYear(i)}}),sy(()=>this.applyLanguage()),this.backButton=t.querySelector("#back-button"),this.backButton.addEventListener("click",()=>this.closeLandmark()),this.fadeLayer=t.querySelector("#fade"),window.addEventListener("keydown",i=>{i.key==="Escape"&&(this.mode==="detail"?this.closeLandmark():this.hidePanel())}),window.addEventListener("resize",()=>this.resize()),this.resize(),this.mapView.jumpHome()}start(){const t=new nM;let e=!0,i=-1/0;this.renderer.setAnimationLoop(()=>{const s=Math.min(t.getDelta(),.1),o=t.elapsedTime,r=this.mode==="map"?this.mapView:this.detailView;bn.reducedMotion||GM(o);const a=r.update(o,s);(!bn.reducedMotion||a||o-i>zE)&&(r.render(this.renderer),i=o),e&&(e=!1,this.root.querySelector("#loading").classList.add("is-done"))})}async openLandmark(t){if(this.busy)return;this.busy=!0;const e=FE(t);this.sidebar.setActive(t),this.timeline.stop(),this.mode==="map"&&(this.hidePanel(),await this.mapView.focusLandmark(t)),await this.fade(!0),this.panel.showLandmark(e),this.setMode("detail"),this.detailView.show(e),await this.fade(!1),this.busy=!1}async closeLandmark(){this.busy||this.mode!=="detail"||(this.busy=!0,this.sidebar.setActive(null),await this.fade(!0),this.panel.hide(),this.setMode("map"),await this.fade(!1),await this.mapView.restoreView(),this.busy=!1)}async openRegion(t){if(this.busy)return;this.mode==="detail"&&(this.busy=!0,await this.fade(!0),this.setMode("map"),await this.fade(!1),this.busy=!1);const e=BE(t);this.sidebar.setActive(null),this.panel.showRegion(e,Qa.filter(i=>i.region===t)),this.updateInsets(),await this.mapView.focusRegion(e)}setMode(t){this.mode=t,this.root.classList.toggle("is-detail",t==="detail"),this.backButton.hidden=t!=="detail",this.mapView.setActive(t==="map"),this.detailView.setActive(t==="detail"),this.updateInsets()}applyLanguage(){Cp(),this.sidebar.render(),this.panel.refresh(),this.mapView.refreshLabels(),this.settings.render(),this.timeline.render(),this.updateInsets()}hidePanel(){this.panel.hide(),this.updateInsets()}updateInsets(){const t=window.matchMedia("(max-width: 760px)").matches,e=this.panel.element,i=this.sidebar.element,s={};e.hidden||(t?s.bottom=e.offsetHeight+10:s.right=e.offsetWidth+18),this.mode==="map"&&!t&&!i.classList.contains("is-collapsed")&&(s.left=i.offsetWidth+18);const o=this.timeline?.element;this.mode==="map"&&o&&getComputedStyle(o).display!=="none"&&(s.bottom=Math.max(s.bottom??0,o.offsetHeight+24)),this.root.classList.toggle("has-panel",!e.hidden),this.mapView.setInsets(s),this.detailView.setInsets(s)}async fade(t){this.fadeLayer.classList.toggle("is-visible",t),await ry(kE)}resize(){const{clientWidth:t,clientHeight:e}=this.root;this.renderer.setSize(t,e),this.mapView.resize(t,e),this.detailView.resize(t,e),this.updateInsets()}}const ff=document.getElementById("app"),n0=()=>new Promise(n=>requestAnimationFrame(n));await Qx;Cp();await n0();await n0();try{new HE(ff).start()}catch(n){const t=ff.querySelector("#loading");throw t.classList.add("is-error"),t.textContent=ee("error",{message:n.message}),n}
