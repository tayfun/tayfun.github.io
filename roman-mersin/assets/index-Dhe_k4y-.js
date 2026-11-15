(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const nc="170",js={ROTATE:0,DOLLY:1,PAN:2},Ys={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Ru=0,Gc=1,Pu=2,gh=1,_h=2,Ri=3,$i=0,dn=1,De=2,Ki=0,$s=1,rl=2,Vc=3,Wc=4,Du=5,cs=100,Lu=101,ku=102,Iu=103,Uu=104,Nu=200,Ou=201,Fu=202,zu=203,al=204,ol=205,Bu=206,Hu=207,Gu=208,Vu=209,Wu=210,Xu=211,Yu=212,qu=213,Zu=214,ll=0,cl=1,hl=2,er=3,ul=4,dl=5,fl=6,pl=7,vh=0,Ku=1,ju=2,ji=0,$u=1,Ju=2,Qu=3,yh=4,td=5,ed=6,nd=7,xh=300,nr=301,ir=302,ml=303,gl=304,io=306,Ka=1e3,us=1001,_l=1002,In=1003,id=1004,ea=1005,Qn=1006,mo=1007,ds=1008,Ui=1009,Mh=1010,bh=1011,zr=1012,ic=1013,ms=1014,ui=1015,qr=1016,sc=1017,rc=1018,sr=1020,Sh=35902,wh=1021,Eh=1022,Wn=1023,Th=1024,Ah=1025,Js=1026,rr=1027,ac=1028,oc=1029,Ch=1030,lc=1031,cc=1033,Oa=33776,Fa=33777,za=33778,Ba=33779,vl=35840,yl=35841,xl=35842,Ml=35843,bl=36196,Sl=37492,wl=37496,El=37808,Tl=37809,Al=37810,Cl=37811,Rl=37812,Pl=37813,Dl=37814,Ll=37815,kl=37816,Il=37817,Ul=37818,Nl=37819,Ol=37820,Fl=37821,Ha=36492,zl=36494,Bl=36495,Rh=36283,Hl=36284,Gl=36285,Vl=36286,sd=3200,rd=3201,Ph=0,ad=1,ci="",Rn="srgb",hr="srgb-linear",so="linear",ve="srgb",ws=7680,Xc=519,od=512,ld=513,cd=514,Dh=515,hd=516,ud=517,dd=518,fd=519,Wl=35044,Yc="300 es",Di=2e3,ja=2001;class vs{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const en=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let qc=1234567;const Lr=Math.PI/180,Br=180/Math.PI;function fi(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(en[n&255]+en[n>>8&255]+en[n>>16&255]+en[n>>24&255]+"-"+en[t&255]+en[t>>8&255]+"-"+en[t>>16&15|64]+en[t>>24&255]+"-"+en[e&63|128]+en[e>>8&255]+"-"+en[e>>16&255]+en[e>>24&255]+en[i&255]+en[i>>8&255]+en[i>>16&255]+en[i>>24&255]).toLowerCase()}function Fe(n,t,e){return Math.max(t,Math.min(e,n))}function hc(n,t){return(n%t+t)%t}function pd(n,t,e,i,s){return i+(n-t)*(s-i)/(e-t)}function md(n,t,e){return n!==t?(e-n)/(t-n):0}function kr(n,t,e){return(1-e)*n+e*t}function gd(n,t,e,i){return kr(n,t,1-Math.exp(-e*i))}function _d(n,t=1){return t-Math.abs(hc(n,t*2)-t)}function vd(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function yd(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function xd(n,t){return n+Math.floor(Math.random()*(t-n+1))}function Md(n,t){return n+Math.random()*(t-n)}function bd(n){return n*(.5-Math.random())}function Sd(n){n!==void 0&&(qc=n);let t=qc+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function wd(n){return n*Lr}function Ed(n){return n*Br}function Td(n){return(n&n-1)===0&&n!==0}function Ad(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Cd(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Rd(n,t,e,i,s){const r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+i)/2),h=a((t+i)/2),f=r((t-i)/2),u=a((t-i)/2),d=r((i-t)/2),y=a((i-t)/2);switch(s){case"XYX":n.set(o*h,l*f,l*u,o*c);break;case"YZY":n.set(l*u,o*h,l*f,o*c);break;case"ZXZ":n.set(l*f,l*u,o*h,o*c);break;case"XZX":n.set(o*h,l*y,l*d,o*c);break;case"YXY":n.set(l*d,o*h,l*y,o*c);break;case"ZYZ":n.set(l*y,l*d,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Jn(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function _e(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Pe={DEG2RAD:Lr,RAD2DEG:Br,generateUUID:fi,clamp:Fe,euclideanModulo:hc,mapLinear:pd,inverseLerp:md,lerp:kr,damp:gd,pingpong:_d,smoothstep:vd,smootherstep:yd,randInt:xd,randFloat:Md,randFloatSpread:bd,seededRandom:Sd,degToRad:wd,radToDeg:Ed,isPowerOfTwo:Td,ceilPowerOfTwo:Ad,floorPowerOfTwo:Cd,setQuaternionFromProperEuler:Rd,normalize:_e,denormalize:Jn};class ot{constructor(t=0,e=0){ot.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Fe(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*i-a*s+t.x,this.y=r*s+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ne{constructor(t,e,i,s,r,a,o,l,c){ne.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,l,c)}set(t,e,i,s,r,a,o,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],f=i[7],u=i[2],d=i[5],y=i[8],_=s[0],p=s[3],g=s[6],S=s[1],b=s[4],M=s[7],P=s[2],C=s[5],A=s[8];return r[0]=a*_+o*S+l*P,r[3]=a*p+o*b+l*C,r[6]=a*g+o*M+l*A,r[1]=c*_+h*S+f*P,r[4]=c*p+h*b+f*C,r[7]=c*g+h*M+f*A,r[2]=u*_+d*S+y*P,r[5]=u*p+d*b+y*C,r[8]=u*g+d*M+y*A,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-i*r*h+i*o*l+s*r*c-s*a*l}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],f=h*a-o*c,u=o*l-h*r,d=c*r-a*l,y=e*f+i*u+s*d;if(y===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/y;return t[0]=f*_,t[1]=(s*c-h*i)*_,t[2]=(o*i-s*a)*_,t[3]=u*_,t[4]=(h*e-s*l)*_,t[5]=(s*r-o*e)*_,t[6]=d*_,t[7]=(i*l-c*e)*_,t[8]=(a*e-i*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(go.makeScale(t,e)),this}rotate(t){return this.premultiply(go.makeRotation(-t)),this}translate(t,e){return this.premultiply(go.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const go=new ne;function Lh(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function $a(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Pd(){const n=$a("canvas");return n.style.display="block",n}const Zc={};function Ar(n){n in Zc||(Zc[n]=!0,console.warn(n))}function Dd(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}function Ld(n){const t=n.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function kd(n){const t=n.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const he={enabled:!0,workingColorSpace:hr,spaces:{},convert:function(n,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===ve&&(n.r=Li(n.r),n.g=Li(n.g),n.b=Li(n.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(n.applyMatrix3(this.spaces[t].toXYZ),n.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===ve&&(n.r=Qs(n.r),n.g=Qs(n.g),n.b=Qs(n.b))),n},fromWorkingColorSpace:function(n,t){return this.convert(n,this.workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===ci?so:this.spaces[n].transfer},getLuminanceCoefficients:function(n,t=this.workingColorSpace){return n.fromArray(this.spaces[t].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,t,e){return n.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function Li(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Qs(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const Kc=[.64,.33,.3,.6,.15,.06],jc=[.2126,.7152,.0722],$c=[.3127,.329],Jc=new ne().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Qc=new ne().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);he.define({[hr]:{primaries:Kc,whitePoint:$c,transfer:so,toXYZ:Jc,fromXYZ:Qc,luminanceCoefficients:jc,workingColorSpaceConfig:{unpackColorSpace:Rn},outputColorSpaceConfig:{drawingBufferColorSpace:Rn}},[Rn]:{primaries:Kc,whitePoint:$c,transfer:ve,toXYZ:Jc,fromXYZ:Qc,luminanceCoefficients:jc,outputColorSpaceConfig:{drawingBufferColorSpace:Rn}}});let Es;class Id{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Es===void 0&&(Es=$a("canvas")),Es.width=t.width,Es.height=t.height;const i=Es.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=Es}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=$a("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Li(r[a]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Li(e[i]/255)*255):e[i]=Li(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Ud=0;class kh{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ud++}),this.uuid=fi(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(_o(s[a].image)):r.push(_o(s[a]))}else r=_o(s);i.url=r}return e||(t.images[this.uuid]=i),i}}function _o(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Id.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Nd=0;class an extends vs{constructor(t=an.DEFAULT_IMAGE,e=an.DEFAULT_MAPPING,i=us,s=us,r=Qn,a=ds,o=Wn,l=Ui,c=an.DEFAULT_ANISOTROPY,h=ci){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Nd++}),this.uuid=fi(),this.name="",this.source=new kh(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ot(0,0),this.repeat=new ot(1,1),this.center=new ot(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ne,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==xh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ka:t.x=t.x-Math.floor(t.x);break;case us:t.x=t.x<0?0:1;break;case _l:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ka:t.y=t.y-Math.floor(t.y);break;case us:t.y=t.y<0?0:1;break;case _l:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}an.DEFAULT_IMAGE=null;an.DEFAULT_MAPPING=xh;an.DEFAULT_ANISOTROPY=1;class ue{constructor(t=0,e=0,i=0,s=1){ue.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*i+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r;const l=t.elements,c=l[0],h=l[4],f=l[8],u=l[1],d=l[5],y=l[9],_=l[2],p=l[6],g=l[10];if(Math.abs(h-u)<.01&&Math.abs(f-_)<.01&&Math.abs(y-p)<.01){if(Math.abs(h+u)<.1&&Math.abs(f+_)<.1&&Math.abs(y+p)<.1&&Math.abs(c+d+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const b=(c+1)/2,M=(d+1)/2,P=(g+1)/2,C=(h+u)/4,A=(f+_)/4,U=(y+p)/4;return b>M&&b>P?b<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(b),s=C/i,r=A/i):M>P?M<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),i=C/s,r=U/s):P<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(P),i=A/r,s=U/r),this.set(i,s,r,e),this}let S=Math.sqrt((p-y)*(p-y)+(f-_)*(f-_)+(u-h)*(u-h));return Math.abs(S)<.001&&(S=1),this.x=(p-y)/S,this.y=(f-_)/S,this.z=(u-h)/S,this.w=Math.acos((c+d+g-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Od extends vs{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ue(0,0,t,e),this.scissorTest=!1,this.viewport=new ue(0,0,t,e);const s={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Qn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const r=new an(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new kh(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class gs extends Od{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class Ih extends an{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=In,this.minFilter=In,this.wrapR=us,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Fd extends an{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=In,this.minFilter=In,this.wrapR=us,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ni{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,a,o){let l=i[s+0],c=i[s+1],h=i[s+2],f=i[s+3];const u=r[a+0],d=r[a+1],y=r[a+2],_=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=f;return}if(o===1){t[e+0]=u,t[e+1]=d,t[e+2]=y,t[e+3]=_;return}if(f!==_||l!==u||c!==d||h!==y){let p=1-o;const g=l*u+c*d+h*y+f*_,S=g>=0?1:-1,b=1-g*g;if(b>Number.EPSILON){const P=Math.sqrt(b),C=Math.atan2(P,g*S);p=Math.sin(p*C)/P,o=Math.sin(o*C)/P}const M=o*S;if(l=l*p+u*M,c=c*p+d*M,h=h*p+y*M,f=f*p+_*M,p===1-o){const P=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=P,c*=P,h*=P,f*=P}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=f}static multiplyQuaternionsFlat(t,e,i,s,r,a){const o=i[s],l=i[s+1],c=i[s+2],h=i[s+3],f=r[a],u=r[a+1],d=r[a+2],y=r[a+3];return t[e]=o*y+h*f+l*d-c*u,t[e+1]=l*y+h*u+c*f-o*d,t[e+2]=c*y+h*d+o*u-l*f,t[e+3]=h*y-o*f-l*u-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(s/2),f=o(r/2),u=l(i/2),d=l(s/2),y=l(r/2);switch(a){case"XYZ":this._x=u*h*f+c*d*y,this._y=c*d*f-u*h*y,this._z=c*h*y+u*d*f,this._w=c*h*f-u*d*y;break;case"YXZ":this._x=u*h*f+c*d*y,this._y=c*d*f-u*h*y,this._z=c*h*y-u*d*f,this._w=c*h*f+u*d*y;break;case"ZXY":this._x=u*h*f-c*d*y,this._y=c*d*f+u*h*y,this._z=c*h*y+u*d*f,this._w=c*h*f-u*d*y;break;case"ZYX":this._x=u*h*f-c*d*y,this._y=c*d*f+u*h*y,this._z=c*h*y-u*d*f,this._w=c*h*f+u*d*y;break;case"YZX":this._x=u*h*f+c*d*y,this._y=c*d*f+u*h*y,this._z=c*h*y-u*d*f,this._w=c*h*f-u*d*y;break;case"XZY":this._x=u*h*f-c*d*y,this._y=c*d*f-u*h*y,this._z=c*h*y+u*d*f,this._w=c*h*f+u*d*y;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],f=e[10],u=i+o+f;if(u>0){const d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(a-s)*d}else if(i>o&&i>f){const d=2*Math.sqrt(1+i-o-f);this._w=(h-l)/d,this._x=.25*d,this._y=(s+a)/d,this._z=(r+c)/d}else if(o>f){const d=2*Math.sqrt(1+o-i-f);this._w=(r-c)/d,this._x=(s+a)/d,this._y=.25*d,this._z=(l+h)/d}else{const d=2*Math.sqrt(1+f-i-o);this._w=(a-s)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Fe(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=i*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-i*c,this._z=r*h+a*c+i*l-s*o,this._w=a*h-i*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,s=this._y,r=this._z,a=this._w;let o=a*t._w+i*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=i,this._y=s,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const d=1-e;return this._w=d*a+e*this._w,this._x=d*i+e*this._x,this._y=d*s+e*this._y,this._z=d*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),f=Math.sin((1-e)*h)/c,u=Math.sin(e*h)/c;return this._w=a*f+this._w*u,this._x=i*f+this._x*u,this._y=s*f+this._y*u,this._z=r*f+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class X{constructor(t=0,e=0,i=0){X.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(t0.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(t0.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,i=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*i),h=2*(o*e-r*s),f=2*(r*i-a*e);return this.x=e+l*c+a*f-o*h,this.y=i+l*h+o*c-r*f,this.z=s+l*f+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return vo.copy(this).projectOnVector(t),this.sub(vo)}reflect(t){return this.sub(vo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Fe(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const vo=new X,t0=new Ni;class vi{constructor(t=new X(1/0,1/0,1/0),e=new X(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Zn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Zn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=Zn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Zn):Zn.fromBufferAttribute(r,a),Zn.applyMatrix4(t.matrixWorld),this.expandByPoint(Zn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),na.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),na.copy(i.boundingBox)),na.applyMatrix4(t.matrixWorld),this.union(na)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Zn),Zn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(_r),ia.subVectors(this.max,_r),Ts.subVectors(t.a,_r),As.subVectors(t.b,_r),Cs.subVectors(t.c,_r),Bi.subVectors(As,Ts),Hi.subVectors(Cs,As),es.subVectors(Ts,Cs);let e=[0,-Bi.z,Bi.y,0,-Hi.z,Hi.y,0,-es.z,es.y,Bi.z,0,-Bi.x,Hi.z,0,-Hi.x,es.z,0,-es.x,-Bi.y,Bi.x,0,-Hi.y,Hi.x,0,-es.y,es.x,0];return!yo(e,Ts,As,Cs,ia)||(e=[1,0,0,0,1,0,0,0,1],!yo(e,Ts,As,Cs,ia))?!1:(sa.crossVectors(Bi,Hi),e=[sa.x,sa.y,sa.z],yo(e,Ts,As,Cs,ia))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Zn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Zn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Si[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Si[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Si[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Si[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Si[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Si[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Si[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Si[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Si),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Si=[new X,new X,new X,new X,new X,new X,new X,new X],Zn=new X,na=new vi,Ts=new X,As=new X,Cs=new X,Bi=new X,Hi=new X,es=new X,_r=new X,ia=new X,sa=new X,ns=new X;function yo(n,t,e,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){ns.fromArray(n,r);const o=s.x*Math.abs(ns.x)+s.y*Math.abs(ns.y)+s.z*Math.abs(ns.z),l=t.dot(ns),c=e.dot(ns),h=i.dot(ns);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const zd=new vi,vr=new X,xo=new X;class ys{constructor(t=new X,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):zd.setFromPoints(t).getCenter(i);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;vr.subVectors(t,this.center);const e=vr.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(vr,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(xo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(vr.copy(t.center).add(xo)),this.expandByPoint(vr.copy(t.center).sub(xo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const wi=new X,Mo=new X,ra=new X,Gi=new X,bo=new X,aa=new X,So=new X;class uc{constructor(t=new X,e=new X(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,wi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=wi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(wi.copy(this.origin).addScaledVector(this.direction,e),wi.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){Mo.copy(t).add(e).multiplyScalar(.5),ra.copy(e).sub(t).normalize(),Gi.copy(this.origin).sub(Mo);const r=t.distanceTo(e)*.5,a=-this.direction.dot(ra),o=Gi.dot(this.direction),l=-Gi.dot(ra),c=Gi.lengthSq(),h=Math.abs(1-a*a);let f,u,d,y;if(h>0)if(f=a*l-o,u=a*o-l,y=r*h,f>=0)if(u>=-y)if(u<=y){const _=1/h;f*=_,u*=_,d=f*(f+a*u+2*o)+u*(a*f+u+2*l)+c}else u=r,f=Math.max(0,-(a*u+o)),d=-f*f+u*(u+2*l)+c;else u=-r,f=Math.max(0,-(a*u+o)),d=-f*f+u*(u+2*l)+c;else u<=-y?(f=Math.max(0,-(-a*r+o)),u=f>0?-r:Math.min(Math.max(-r,-l),r),d=-f*f+u*(u+2*l)+c):u<=y?(f=0,u=Math.min(Math.max(-r,-l),r),d=u*(u+2*l)+c):(f=Math.max(0,-(a*r+o)),u=f>0?r:Math.min(Math.max(-r,-l),r),d=-f*f+u*(u+2*l)+c);else u=a>0?-r:r,f=Math.max(0,-(a*u+o)),d=-f*f+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(Mo).addScaledVector(ra,u),d}intersectSphere(t,e){wi.subVectors(t.center,this.origin);const i=wi.dot(this.direction),s=wi.dot(wi)-i*i,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,u=this.origin;return c>=0?(i=(t.min.x-u.x)*c,s=(t.max.x-u.x)*c):(i=(t.max.x-u.x)*c,s=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,a=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,a=(t.min.y-u.y)*h),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),f>=0?(o=(t.min.z-u.z)*f,l=(t.max.z-u.z)*f):(o=(t.max.z-u.z)*f,l=(t.min.z-u.z)*f),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,wi)!==null}intersectTriangle(t,e,i,s,r){bo.subVectors(e,t),aa.subVectors(i,t),So.crossVectors(bo,aa);let a=this.direction.dot(So),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Gi.subVectors(this.origin,t);const l=o*this.direction.dot(aa.crossVectors(Gi,aa));if(l<0)return null;const c=o*this.direction.dot(bo.cross(Gi));if(c<0||l+c>a)return null;const h=-o*Gi.dot(So);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class oe{constructor(t,e,i,s,r,a,o,l,c,h,f,u,d,y,_,p){oe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,l,c,h,f,u,d,y,_,p)}set(t,e,i,s,r,a,o,l,c,h,f,u,d,y,_,p){const g=this.elements;return g[0]=t,g[4]=e,g[8]=i,g[12]=s,g[1]=r,g[5]=a,g[9]=o,g[13]=l,g[2]=c,g[6]=h,g[10]=f,g[14]=u,g[3]=d,g[7]=y,g[11]=_,g[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new oe().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,s=1/Rs.setFromMatrixColumn(t,0).length(),r=1/Rs.setFromMatrixColumn(t,1).length(),a=1/Rs.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,s=t.y,r=t.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){const u=a*h,d=a*f,y=o*h,_=o*f;e[0]=l*h,e[4]=-l*f,e[8]=c,e[1]=d+y*c,e[5]=u-_*c,e[9]=-o*l,e[2]=_-u*c,e[6]=y+d*c,e[10]=a*l}else if(t.order==="YXZ"){const u=l*h,d=l*f,y=c*h,_=c*f;e[0]=u+_*o,e[4]=y*o-d,e[8]=a*c,e[1]=a*f,e[5]=a*h,e[9]=-o,e[2]=d*o-y,e[6]=_+u*o,e[10]=a*l}else if(t.order==="ZXY"){const u=l*h,d=l*f,y=c*h,_=c*f;e[0]=u-_*o,e[4]=-a*f,e[8]=y+d*o,e[1]=d+y*o,e[5]=a*h,e[9]=_-u*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const u=a*h,d=a*f,y=o*h,_=o*f;e[0]=l*h,e[4]=y*c-d,e[8]=u*c+_,e[1]=l*f,e[5]=_*c+u,e[9]=d*c-y,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const u=a*l,d=a*c,y=o*l,_=o*c;e[0]=l*h,e[4]=_-u*f,e[8]=y*f+d,e[1]=f,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=d*f+y,e[10]=u-_*f}else if(t.order==="XZY"){const u=a*l,d=a*c,y=o*l,_=o*c;e[0]=l*h,e[4]=-f,e[8]=c*h,e[1]=u*f+_,e[5]=a*h,e[9]=d*f-y,e[2]=y*f-d,e[6]=o*h,e[10]=_*f+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Bd,t,Hd)}lookAt(t,e,i){const s=this.elements;return Tn.subVectors(t,e),Tn.lengthSq()===0&&(Tn.z=1),Tn.normalize(),Vi.crossVectors(i,Tn),Vi.lengthSq()===0&&(Math.abs(i.z)===1?Tn.x+=1e-4:Tn.z+=1e-4,Tn.normalize(),Vi.crossVectors(i,Tn)),Vi.normalize(),oa.crossVectors(Tn,Vi),s[0]=Vi.x,s[4]=oa.x,s[8]=Tn.x,s[1]=Vi.y,s[5]=oa.y,s[9]=Tn.y,s[2]=Vi.z,s[6]=oa.z,s[10]=Tn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],f=i[5],u=i[9],d=i[13],y=i[2],_=i[6],p=i[10],g=i[14],S=i[3],b=i[7],M=i[11],P=i[15],C=s[0],A=s[4],U=s[8],v=s[12],m=s[1],E=s[5],I=s[9],z=s[13],L=s[2],F=s[6],D=s[10],N=s[14],T=s[3],R=s[7],x=s[11],k=s[15];return r[0]=a*C+o*m+l*L+c*T,r[4]=a*A+o*E+l*F+c*R,r[8]=a*U+o*I+l*D+c*x,r[12]=a*v+o*z+l*N+c*k,r[1]=h*C+f*m+u*L+d*T,r[5]=h*A+f*E+u*F+d*R,r[9]=h*U+f*I+u*D+d*x,r[13]=h*v+f*z+u*N+d*k,r[2]=y*C+_*m+p*L+g*T,r[6]=y*A+_*E+p*F+g*R,r[10]=y*U+_*I+p*D+g*x,r[14]=y*v+_*z+p*N+g*k,r[3]=S*C+b*m+M*L+P*T,r[7]=S*A+b*E+M*F+P*R,r[11]=S*U+b*I+M*D+P*x,r[15]=S*v+b*z+M*N+P*k,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],f=t[6],u=t[10],d=t[14],y=t[3],_=t[7],p=t[11],g=t[15];return y*(+r*l*f-s*c*f-r*o*u+i*c*u+s*o*d-i*l*d)+_*(+e*l*d-e*c*u+r*a*u-s*a*d+s*c*h-r*l*h)+p*(+e*c*f-e*o*d-r*a*f+i*a*d+r*o*h-i*c*h)+g*(-s*o*h-e*l*f+e*o*u+s*a*f-i*a*u+i*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],f=t[9],u=t[10],d=t[11],y=t[12],_=t[13],p=t[14],g=t[15],S=f*p*c-_*u*c+_*l*d-o*p*d-f*l*g+o*u*g,b=y*u*c-h*p*c-y*l*d+a*p*d+h*l*g-a*u*g,M=h*_*c-y*f*c+y*o*d-a*_*d-h*o*g+a*f*g,P=y*f*l-h*_*l-y*o*u+a*_*u+h*o*p-a*f*p,C=e*S+i*b+s*M+r*P;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/C;return t[0]=S*A,t[1]=(_*u*r-f*p*r-_*s*d+i*p*d+f*s*g-i*u*g)*A,t[2]=(o*p*r-_*l*r+_*s*c-i*p*c-o*s*g+i*l*g)*A,t[3]=(f*l*r-o*u*r-f*s*c+i*u*c+o*s*d-i*l*d)*A,t[4]=b*A,t[5]=(h*p*r-y*u*r+y*s*d-e*p*d-h*s*g+e*u*g)*A,t[6]=(y*l*r-a*p*r-y*s*c+e*p*c+a*s*g-e*l*g)*A,t[7]=(a*u*r-h*l*r+h*s*c-e*u*c-a*s*d+e*l*d)*A,t[8]=M*A,t[9]=(y*f*r-h*_*r-y*i*d+e*_*d+h*i*g-e*f*g)*A,t[10]=(a*_*r-y*o*r+y*i*c-e*_*c-a*i*g+e*o*g)*A,t[11]=(h*o*r-a*f*r-h*i*c+e*f*c+a*i*d-e*o*d)*A,t[12]=P*A,t[13]=(h*_*s-y*f*s+y*i*u-e*_*u-h*i*p+e*f*p)*A,t[14]=(y*o*s-a*_*s-y*i*l+e*_*l+a*i*p-e*o*p)*A,t[15]=(a*f*s-h*o*s+h*i*l-e*f*l-a*i*u+e*o*u)*A,this}scale(t){const e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),s=Math.sin(e),r=1-i,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+i,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+i,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,a){return this.set(1,i,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){const s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,f=o+o,u=r*c,d=r*h,y=r*f,_=a*h,p=a*f,g=o*f,S=l*c,b=l*h,M=l*f,P=i.x,C=i.y,A=i.z;return s[0]=(1-(_+g))*P,s[1]=(d+M)*P,s[2]=(y-b)*P,s[3]=0,s[4]=(d-M)*C,s[5]=(1-(u+g))*C,s[6]=(p+S)*C,s[7]=0,s[8]=(y+b)*A,s[9]=(p-S)*A,s[10]=(1-(u+_))*A,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){const s=this.elements;let r=Rs.set(s[0],s[1],s[2]).length();const a=Rs.set(s[4],s[5],s[6]).length(),o=Rs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Kn.copy(this);const c=1/r,h=1/a,f=1/o;return Kn.elements[0]*=c,Kn.elements[1]*=c,Kn.elements[2]*=c,Kn.elements[4]*=h,Kn.elements[5]*=h,Kn.elements[6]*=h,Kn.elements[8]*=f,Kn.elements[9]*=f,Kn.elements[10]*=f,e.setFromRotationMatrix(Kn),i.x=r,i.y=a,i.z=o,this}makePerspective(t,e,i,s,r,a,o=Di){const l=this.elements,c=2*r/(e-t),h=2*r/(i-s),f=(e+t)/(e-t),u=(i+s)/(i-s);let d,y;if(o===Di)d=-(a+r)/(a-r),y=-2*a*r/(a-r);else if(o===ja)d=-a/(a-r),y=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=h,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=y,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,s,r,a,o=Di){const l=this.elements,c=1/(e-t),h=1/(i-s),f=1/(a-r),u=(e+t)*c,d=(i+s)*h;let y,_;if(o===Di)y=(a+r)*f,_=-2*f;else if(o===ja)y=r*f,_=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=_,l[14]=-y,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const Rs=new X,Kn=new oe,Bd=new X(0,0,0),Hd=new X(1,1,1),Vi=new X,oa=new X,Tn=new X,e0=new oe,n0=new Ni;class ei{constructor(t=0,e=0,i=0,s=ei.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],f=s[2],u=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(Fe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Fe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(Fe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Fe(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Fe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-Fe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return e0.makeRotationFromQuaternion(t),this.setFromRotationMatrix(e0,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return n0.setFromEuler(this),this.setFromQuaternion(n0,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ei.DEFAULT_ORDER="XYZ";class dc{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Gd=0;const i0=new X,Ps=new Ni,Ei=new oe,la=new X,yr=new X,Vd=new X,Wd=new Ni,s0=new X(1,0,0),r0=new X(0,1,0),a0=new X(0,0,1),o0={type:"added"},Xd={type:"removed"},Ds={type:"childadded",child:null},wo={type:"childremoved",child:null};class Ze extends vs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Gd++}),this.uuid=fi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ze.DEFAULT_UP.clone();const t=new X,e=new ei,i=new Ni,s=new X(1,1,1);function r(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new oe},normalMatrix:{value:new ne}}),this.matrix=new oe,this.matrixWorld=new oe,this.matrixAutoUpdate=Ze.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ze.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new dc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ps.setFromAxisAngle(t,e),this.quaternion.multiply(Ps),this}rotateOnWorldAxis(t,e){return Ps.setFromAxisAngle(t,e),this.quaternion.premultiply(Ps),this}rotateX(t){return this.rotateOnAxis(s0,t)}rotateY(t){return this.rotateOnAxis(r0,t)}rotateZ(t){return this.rotateOnAxis(a0,t)}translateOnAxis(t,e){return i0.copy(t).applyQuaternion(this.quaternion),this.position.add(i0.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(s0,t)}translateY(t){return this.translateOnAxis(r0,t)}translateZ(t){return this.translateOnAxis(a0,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ei.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?la.copy(t):la.set(t,e,i);const s=this.parent;this.updateWorldMatrix(!0,!1),yr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ei.lookAt(yr,la,this.up):Ei.lookAt(la,yr,this.up),this.quaternion.setFromRotationMatrix(Ei),s&&(Ei.extractRotation(s.matrixWorld),Ps.setFromRotationMatrix(Ei),this.quaternion.premultiply(Ps.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(o0),Ds.child=t,this.dispatchEvent(Ds),Ds.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Xd),wo.child=t,this.dispatchEvent(wo),wo.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ei.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ei.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ei),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(o0),Ds.child=t,this.dispatchEvent(Ds),Ds.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){const a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(yr,t,Vd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(yr,Wd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const f=l[c];r(t.shapes,f)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),f=a(t.shapes),u=a(t.skeletons),d=a(t.animations),y=a(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),f.length>0&&(i.shapes=f),u.length>0&&(i.skeletons=u),d.length>0&&(i.animations=d),y.length>0&&(i.nodes=y)}return i.object=s,i;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const s=t.children[i];this.add(s.clone())}return this}}Ze.DEFAULT_UP=new X(0,1,0);Ze.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ze.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const jn=new X,Ti=new X,Eo=new X,Ai=new X,Ls=new X,ks=new X,l0=new X,To=new X,Ao=new X,Co=new X,Ro=new ue,Po=new ue,Do=new ue;class Vn{constructor(t=new X,e=new X,i=new X){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),jn.subVectors(t,e),s.cross(jn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){jn.subVectors(s,e),Ti.subVectors(i,e),Eo.subVectors(t,e);const a=jn.dot(jn),o=jn.dot(Ti),l=jn.dot(Eo),c=Ti.dot(Ti),h=Ti.dot(Eo),f=a*c-o*o;if(f===0)return r.set(0,0,0),null;const u=1/f,d=(c*l-o*h)*u,y=(a*h-o*l)*u;return r.set(1-d-y,y,d)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,Ai)===null?!1:Ai.x>=0&&Ai.y>=0&&Ai.x+Ai.y<=1}static getInterpolation(t,e,i,s,r,a,o,l){return this.getBarycoord(t,e,i,s,Ai)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Ai.x),l.addScaledVector(a,Ai.y),l.addScaledVector(o,Ai.z),l)}static getInterpolatedAttribute(t,e,i,s,r,a){return Ro.setScalar(0),Po.setScalar(0),Do.setScalar(0),Ro.fromBufferAttribute(t,e),Po.fromBufferAttribute(t,i),Do.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Ro,r.x),a.addScaledVector(Po,r.y),a.addScaledVector(Do,r.z),a}static isFrontFacing(t,e,i,s){return jn.subVectors(i,e),Ti.subVectors(t,e),jn.cross(Ti).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return jn.subVectors(this.c,this.b),Ti.subVectors(this.a,this.b),jn.cross(Ti).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Vn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Vn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return Vn.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return Vn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Vn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,s=this.b,r=this.c;let a,o;Ls.subVectors(s,i),ks.subVectors(r,i),To.subVectors(t,i);const l=Ls.dot(To),c=ks.dot(To);if(l<=0&&c<=0)return e.copy(i);Ao.subVectors(t,s);const h=Ls.dot(Ao),f=ks.dot(Ao);if(h>=0&&f<=h)return e.copy(s);const u=l*f-h*c;if(u<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(i).addScaledVector(Ls,a);Co.subVectors(t,r);const d=Ls.dot(Co),y=ks.dot(Co);if(y>=0&&d<=y)return e.copy(r);const _=d*c-l*y;if(_<=0&&c>=0&&y<=0)return o=c/(c-y),e.copy(i).addScaledVector(ks,o);const p=h*y-d*f;if(p<=0&&f-h>=0&&d-y>=0)return l0.subVectors(r,s),o=(f-h)/(f-h+(d-y)),e.copy(s).addScaledVector(l0,o);const g=1/(p+_+u);return a=_*g,o=u*g,e.copy(i).addScaledVector(Ls,a).addScaledVector(ks,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Uh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Wi={h:0,s:0,l:0},ca={h:0,s:0,l:0};function Lo(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class Mt{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Rn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,he.toWorkingColorSpace(this,e),this}setRGB(t,e,i,s=he.workingColorSpace){return this.r=t,this.g=e,this.b=i,he.toWorkingColorSpace(this,s),this}setHSL(t,e,i,s=he.workingColorSpace){if(t=hc(t,1),e=Fe(e,0,1),i=Fe(i,0,1),e===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+e):i+e-i*e,a=2*i-r;this.r=Lo(a,r,t+1/3),this.g=Lo(a,r,t),this.b=Lo(a,r,t-1/3)}return he.toWorkingColorSpace(this,s),this}setStyle(t,e=Rn){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Rn){const i=Uh[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Li(t.r),this.g=Li(t.g),this.b=Li(t.b),this}copyLinearToSRGB(t){return this.r=Qs(t.r),this.g=Qs(t.g),this.b=Qs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Rn){return he.fromWorkingColorSpace(nn.copy(this),t),Math.round(Fe(nn.r*255,0,255))*65536+Math.round(Fe(nn.g*255,0,255))*256+Math.round(Fe(nn.b*255,0,255))}getHexString(t=Rn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=he.workingColorSpace){he.fromWorkingColorSpace(nn.copy(this),e);const i=nn.r,s=nn.g,r=nn.b,a=Math.max(i,s,r),o=Math.min(i,s,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=h<=.5?f/(a+o):f/(2-a-o),a){case i:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-i)/f+2;break;case r:l=(i-s)/f+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=he.workingColorSpace){return he.fromWorkingColorSpace(nn.copy(this),e),t.r=nn.r,t.g=nn.g,t.b=nn.b,t}getStyle(t=Rn){he.fromWorkingColorSpace(nn.copy(this),t);const e=nn.r,i=nn.g,s=nn.b;return t!==Rn?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(Wi),this.setHSL(Wi.h+t,Wi.s+e,Wi.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Wi),t.getHSL(ca);const i=kr(Wi.h,ca.h,e),s=kr(Wi.s,ca.s,e),r=kr(Wi.l,ca.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const nn=new Mt;Mt.NAMES=Uh;let Yd=0;class ur extends vs{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Yd++}),this.uuid=fi(),this.name="",this.blending=$s,this.side=$i,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=al,this.blendDst=ol,this.blendEquation=cs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Mt(0,0,0),this.blendAlpha=0,this.depthFunc=er,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Xc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ws,this.stencilZFail=ws,this.stencilZPass=ws,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==$s&&(i.blending=this.blending),this.side!==$i&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==al&&(i.blendSrc=this.blendSrc),this.blendDst!==ol&&(i.blendDst=this.blendDst),this.blendEquation!==cs&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==er&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Xc&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ws&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ws&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ws&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class tr extends ur{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Mt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ei,this.combine=vh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Oe=new X,ha=new ot;class fn{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Wl,this.updateRanges=[],this.gpuType=ui,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)ha.fromBufferAttribute(this,e),ha.applyMatrix3(t),this.setXY(e,ha.x,ha.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Oe.fromBufferAttribute(this,e),Oe.applyMatrix3(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Oe.fromBufferAttribute(this,e),Oe.applyMatrix4(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Oe.fromBufferAttribute(this,e),Oe.applyNormalMatrix(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Oe.fromBufferAttribute(this,e),Oe.transformDirection(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Jn(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=_e(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Jn(e,this.array)),e}setX(t,e){return this.normalized&&(e=_e(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Jn(e,this.array)),e}setY(t,e){return this.normalized&&(e=_e(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Jn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=_e(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Jn(e,this.array)),e}setW(t,e){return this.normalized&&(e=_e(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=_e(e,this.array),i=_e(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=_e(e,this.array),i=_e(i,this.array),s=_e(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=_e(e,this.array),i=_e(i,this.array),s=_e(s,this.array),r=_e(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Wl&&(t.usage=this.usage),t}}class Nh extends fn{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class Oh extends fn{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class Bt extends fn{constructor(t,e,i){super(new Float32Array(t),e,i)}}let qd=0;const zn=new oe,ko=new Ze,Is=new X,An=new vi,xr=new vi,Xe=new X;class Me extends vs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:qd++}),this.uuid=fi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Lh(t)?Oh:Nh)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new ne().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return zn.makeRotationFromQuaternion(t),this.applyMatrix4(zn),this}rotateX(t){return zn.makeRotationX(t),this.applyMatrix4(zn),this}rotateY(t){return zn.makeRotationY(t),this.applyMatrix4(zn),this}rotateZ(t){return zn.makeRotationZ(t),this.applyMatrix4(zn),this}translate(t,e,i){return zn.makeTranslation(t,e,i),this.applyMatrix4(zn),this}scale(t,e,i){return zn.makeScale(t,e,i),this.applyMatrix4(zn),this}lookAt(t){return ko.lookAt(t),ko.updateMatrix(),this.applyMatrix4(ko.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Is).negate(),this.translate(Is.x,Is.y,Is.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let s=0,r=t.length;s<r;s++){const a=t[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Bt(i,3))}else{for(let i=0,s=e.count;i<s;i++){const r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new vi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new X(-1/0,-1/0,-1/0),new X(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){const r=e[i];An.setFromBufferAttribute(r),this.morphTargetsRelative?(Xe.addVectors(this.boundingBox.min,An.min),this.boundingBox.expandByPoint(Xe),Xe.addVectors(this.boundingBox.max,An.max),this.boundingBox.expandByPoint(Xe)):(this.boundingBox.expandByPoint(An.min),this.boundingBox.expandByPoint(An.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ys);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new X,1/0);return}if(t){const i=this.boundingSphere.center;if(An.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];xr.setFromBufferAttribute(o),this.morphTargetsRelative?(Xe.addVectors(An.min,xr.min),An.expandByPoint(Xe),Xe.addVectors(An.max,xr.max),An.expandByPoint(Xe)):(An.expandByPoint(xr.min),An.expandByPoint(xr.max))}An.getCenter(i);let s=0;for(let r=0,a=t.count;r<a;r++)Xe.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(Xe));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Xe.fromBufferAttribute(o,c),l&&(Is.fromBufferAttribute(t,c),Xe.add(Is)),s=Math.max(s,i.distanceToSquared(Xe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new fn(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let U=0;U<i.count;U++)o[U]=new X,l[U]=new X;const c=new X,h=new X,f=new X,u=new ot,d=new ot,y=new ot,_=new X,p=new X;function g(U,v,m){c.fromBufferAttribute(i,U),h.fromBufferAttribute(i,v),f.fromBufferAttribute(i,m),u.fromBufferAttribute(r,U),d.fromBufferAttribute(r,v),y.fromBufferAttribute(r,m),h.sub(c),f.sub(c),d.sub(u),y.sub(u);const E=1/(d.x*y.y-y.x*d.y);isFinite(E)&&(_.copy(h).multiplyScalar(y.y).addScaledVector(f,-d.y).multiplyScalar(E),p.copy(f).multiplyScalar(d.x).addScaledVector(h,-y.x).multiplyScalar(E),o[U].add(_),o[v].add(_),o[m].add(_),l[U].add(p),l[v].add(p),l[m].add(p))}let S=this.groups;S.length===0&&(S=[{start:0,count:t.count}]);for(let U=0,v=S.length;U<v;++U){const m=S[U],E=m.start,I=m.count;for(let z=E,L=E+I;z<L;z+=3)g(t.getX(z+0),t.getX(z+1),t.getX(z+2))}const b=new X,M=new X,P=new X,C=new X;function A(U){P.fromBufferAttribute(s,U),C.copy(P);const v=o[U];b.copy(v),b.sub(P.multiplyScalar(P.dot(v))).normalize(),M.crossVectors(C,v);const E=M.dot(l[U])<0?-1:1;a.setXYZW(U,b.x,b.y,b.z,E)}for(let U=0,v=S.length;U<v;++U){const m=S[U],E=m.start,I=m.count;for(let z=E,L=E+I;z<L;z+=3)A(t.getX(z+0)),A(t.getX(z+1)),A(t.getX(z+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new fn(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let u=0,d=i.count;u<d;u++)i.setXYZ(u,0,0,0);const s=new X,r=new X,a=new X,o=new X,l=new X,c=new X,h=new X,f=new X;if(t)for(let u=0,d=t.count;u<d;u+=3){const y=t.getX(u+0),_=t.getX(u+1),p=t.getX(u+2);s.fromBufferAttribute(e,y),r.fromBufferAttribute(e,_),a.fromBufferAttribute(e,p),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),o.fromBufferAttribute(i,y),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,p),o.add(h),l.add(h),c.add(h),i.setXYZ(y,o.x,o.y,o.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let u=0,d=e.count;u<d;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Xe.fromBufferAttribute(t,e),Xe.normalize(),t.setXYZ(e,Xe.x,Xe.y,Xe.z)}toNonIndexed(){function t(o,l){const c=o.array,h=o.itemSize,f=o.normalized,u=new c.constructor(l.length*h);let d=0,y=0;for(let _=0,p=l.length;_<p;_++){o.isInterleavedBufferAttribute?d=l[_]*o.data.stride+o.offset:d=l[_]*h;for(let g=0;g<h;g++)u[y++]=c[d++]}return new fn(u,h,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Me,i=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=t(l,i);e.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,f=c.length;h<f;h++){const u=c[h],d=t(u,i);l.push(d)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let f=0,u=c.length;f<u;f++){const d=c[f];h.push(d.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],f=r[c];for(let u=0,d=f.length;u<d;u++)h.push(f[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,h=a.length;c<h;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const c0=new oe,is=new uc,ua=new ys,h0=new X,da=new X,fa=new X,pa=new X,Io=new X,ma=new X,u0=new X,ga=new X;class xe extends Ze{constructor(t=new Me,e=new tr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){ma.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],f=r[l];h!==0&&(Io.fromBufferAttribute(f,t),a?ma.addScaledVector(Io,h):ma.addScaledVector(Io.sub(e),h))}e.add(ma)}return e}raycast(t,e){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ua.copy(i.boundingSphere),ua.applyMatrix4(r),is.copy(t.ray).recast(t.near),!(ua.containsPoint(is.origin)===!1&&(is.intersectSphere(ua,h0)===null||is.origin.distanceToSquared(h0)>(t.far-t.near)**2))&&(c0.copy(r).invert(),is.copy(t.ray).applyMatrix4(c0),!(i.boundingBox!==null&&is.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,is)))}_computeIntersections(t,e,i){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,u=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let y=0,_=u.length;y<_;y++){const p=u[y],g=a[p.materialIndex],S=Math.max(p.start,d.start),b=Math.min(o.count,Math.min(p.start+p.count,d.start+d.count));for(let M=S,P=b;M<P;M+=3){const C=o.getX(M),A=o.getX(M+1),U=o.getX(M+2);s=_a(this,g,t,i,c,h,f,C,A,U),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const y=Math.max(0,d.start),_=Math.min(o.count,d.start+d.count);for(let p=y,g=_;p<g;p+=3){const S=o.getX(p),b=o.getX(p+1),M=o.getX(p+2);s=_a(this,a,t,i,c,h,f,S,b,M),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let y=0,_=u.length;y<_;y++){const p=u[y],g=a[p.materialIndex],S=Math.max(p.start,d.start),b=Math.min(l.count,Math.min(p.start+p.count,d.start+d.count));for(let M=S,P=b;M<P;M+=3){const C=M,A=M+1,U=M+2;s=_a(this,g,t,i,c,h,f,C,A,U),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const y=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let p=y,g=_;p<g;p+=3){const S=p,b=p+1,M=p+2;s=_a(this,a,t,i,c,h,f,S,b,M),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}}function Zd(n,t,e,i,s,r,a,o){let l;if(t.side===dn?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,t.side===$i,o),l===null)return null;ga.copy(o),ga.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(ga);return c<e.near||c>e.far?null:{distance:c,point:ga.clone(),object:n}}function _a(n,t,e,i,s,r,a,o,l,c){n.getVertexPosition(o,da),n.getVertexPosition(l,fa),n.getVertexPosition(c,pa);const h=Zd(n,t,e,i,da,fa,pa,u0);if(h){const f=new X;Vn.getBarycoord(u0,da,fa,pa,f),s&&(h.uv=Vn.getInterpolatedAttribute(s,o,l,c,f,new ot)),r&&(h.uv1=Vn.getInterpolatedAttribute(r,o,l,c,f,new ot)),a&&(h.normal=Vn.getInterpolatedAttribute(a,o,l,c,f,new X),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new X,materialIndex:0};Vn.getNormal(da,fa,pa,u.normal),h.face=u,h.barycoord=f}return h}class rn extends Me{constructor(t=1,e=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],f=[];let u=0,d=0;y("z","y","x",-1,-1,i,e,t,a,r,0),y("z","y","x",1,-1,i,e,-t,a,r,1),y("x","z","y",1,1,t,i,e,s,a,2),y("x","z","y",1,-1,t,i,-e,s,a,3),y("x","y","z",1,-1,t,e,i,s,r,4),y("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Bt(c,3)),this.setAttribute("normal",new Bt(h,3)),this.setAttribute("uv",new Bt(f,2));function y(_,p,g,S,b,M,P,C,A,U,v){const m=M/A,E=P/U,I=M/2,z=P/2,L=C/2,F=A+1,D=U+1;let N=0,T=0;const R=new X;for(let x=0;x<D;x++){const k=x*E-z;for(let W=0;W<F;W++){const J=W*m-I;R[_]=J*S,R[p]=k*b,R[g]=L,c.push(R.x,R.y,R.z),R[_]=0,R[p]=0,R[g]=C>0?1:-1,h.push(R.x,R.y,R.z),f.push(W/A),f.push(1-x/U),N+=1}}for(let x=0;x<U;x++)for(let k=0;k<A;k++){const W=u+k+F*x,J=u+k+F*(x+1),Y=u+(k+1)+F*(x+1),H=u+(k+1)+F*x;l.push(W,J,H),l.push(J,Y,H),T+=6}o.addGroup(d,T,v),d+=T,u+=N}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new rn(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function ar(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function ln(n){const t={};for(let e=0;e<n.length;e++){const i=ar(n[e]);for(const s in i)t[s]=i[s]}return t}function Kd(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Fh(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:he.workingColorSpace}const fc={clone:ar,merge:ln};var jd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,$d=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ni extends ur{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=jd,this.fragmentShader=$d,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ar(t.uniforms),this.uniformsGroups=Kd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class zh extends Ze{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new oe,this.projectionMatrix=new oe,this.projectionMatrixInverse=new oe,this.coordinateSystem=Di}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Xi=new X,d0=new ot,f0=new ot;class Pn extends zh{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Br*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Lr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Br*2*Math.atan(Math.tan(Lr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Xi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Xi.x,Xi.y).multiplyScalar(-t/Xi.z),Xi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Xi.x,Xi.y).multiplyScalar(-t/Xi.z)}getViewSize(t,e){return this.getViewBounds(t,d0,f0),e.subVectors(f0,d0)}setViewOffset(t,e,i,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Lr*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*i/c,s*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Us=-90,Ns=1;class Jd extends Ze{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Pn(Us,Ns,t,e);s.layers=this.layers,this.add(s);const r=new Pn(Us,Ns,t,e);r.layers=this.layers,this.add(r);const a=new Pn(Us,Ns,t,e);a.layers=this.layers,this.add(a);const o=new Pn(Us,Ns,t,e);o.layers=this.layers,this.add(o);const l=new Pn(Us,Ns,t,e);l.layers=this.layers,this.add(l);const c=new Pn(Us,Ns,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,s,r,a,o,l]=e;for(const c of e)this.remove(c);if(t===Di)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===ja)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,f=t.getRenderTarget(),u=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),y=t.xr.enabled;t.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,r),t.setRenderTarget(i,1,s),t.render(e,a),t.setRenderTarget(i,2,s),t.render(e,o),t.setRenderTarget(i,3,s),t.render(e,l),t.setRenderTarget(i,4,s),t.render(e,c),i.texture.generateMipmaps=_,t.setRenderTarget(i,5,s),t.render(e,h),t.setRenderTarget(f,u,d),t.xr.enabled=y,i.texture.needsPMREMUpdate=!0}}class Bh extends an{constructor(t,e,i,s,r,a,o,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:nr,super(t,e,i,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Qd extends gs{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new Bh(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Qn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new rn(5,5,5),r=new ni({name:"CubemapFromEquirect",uniforms:ar(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:dn,blending:Ki});r.uniforms.tEquirect.value=e;const a=new xe(s,r),o=e.minFilter;return e.minFilter===ds&&(e.minFilter=Qn),new Jd(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,i,s){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,s);t.setRenderTarget(r)}}const Uo=new X,tf=new X,ef=new ne;class qi{constructor(t=new X(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const s=Uo.subVectors(i,e).cross(tf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(Uo),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||ef.getNormalMatrix(t),s=this.coplanarPoint(Uo).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ss=new ys,va=new X;class pc{constructor(t=new qi,e=new qi,i=new qi,s=new qi,r=new qi,a=new qi){this.planes=[t,e,i,s,r,a]}set(t,e,i,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Di){const i=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],h=s[5],f=s[6],u=s[7],d=s[8],y=s[9],_=s[10],p=s[11],g=s[12],S=s[13],b=s[14],M=s[15];if(i[0].setComponents(l-r,u-c,p-d,M-g).normalize(),i[1].setComponents(l+r,u+c,p+d,M+g).normalize(),i[2].setComponents(l+a,u+h,p+y,M+S).normalize(),i[3].setComponents(l-a,u-h,p-y,M-S).normalize(),i[4].setComponents(l-o,u-f,p-_,M-b).normalize(),e===Di)i[5].setComponents(l+o,u+f,p+_,M+b).normalize();else if(e===ja)i[5].setComponents(o,f,_,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ss.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ss.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ss)}intersectsSprite(t){return ss.center.set(0,0,0),ss.radius=.7071067811865476,ss.applyMatrix4(t.matrixWorld),this.intersectsSphere(ss)}intersectsSphere(t){const e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const s=e[i];if(va.x=s.normal.x>0?t.max.x:t.min.x,va.y=s.normal.y>0?t.max.y:t.min.y,va.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(va)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Hh(){let n=null,t=!1,e=null,i=null;function s(r,a){e(r,a),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function nf(n){const t=new WeakMap;function e(o,l){const c=o.array,h=o.usage,f=c.byteLength,u=n.createBuffer();n.bindBuffer(l,u),n.bufferData(l,c,h),o.onUploadCallback();let d;if(c instanceof Float32Array)d=n.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=n.SHORT;else if(c instanceof Uint32Array)d=n.UNSIGNED_INT;else if(c instanceof Int32Array)d=n.INT;else if(c instanceof Int8Array)d=n.BYTE;else if(c instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function i(o,l,c){const h=l.array,f=l.updateRanges;if(n.bindBuffer(c,o),f.length===0)n.bufferSubData(c,0,h);else{f.sort((d,y)=>d.start-y.start);let u=0;for(let d=1;d<f.length;d++){const y=f[u],_=f[d];_.start<=y.start+y.count+1?y.count=Math.max(y.count,_.start+_.count-y.start):(++u,f[u]=_)}f.length=u+1;for(let d=0,y=f.length;d<y;d++){const _=f[d];n.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(n.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}class On extends Me{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(i),l=Math.floor(s),c=o+1,h=l+1,f=t/o,u=e/l,d=[],y=[],_=[],p=[];for(let g=0;g<h;g++){const S=g*u-a;for(let b=0;b<c;b++){const M=b*f-r;y.push(M,-S,0),_.push(0,0,1),p.push(b/o),p.push(1-g/l)}}for(let g=0;g<l;g++)for(let S=0;S<o;S++){const b=S+c*g,M=S+c*(g+1),P=S+1+c*(g+1),C=S+1+c*g;d.push(b,M,C),d.push(M,P,C)}this.setIndex(d),this.setAttribute("position",new Bt(y,3)),this.setAttribute("normal",new Bt(_,3)),this.setAttribute("uv",new Bt(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new On(t.width,t.height,t.widthSegments,t.heightSegments)}}var sf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,rf=`#ifdef USE_ALPHAHASH
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
#endif`,af=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,of=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,lf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,cf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,hf=`#ifdef USE_AOMAP
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
#endif`,uf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,df=`#ifdef USE_BATCHING
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
#endif`,ff=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,pf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,mf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,gf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,_f=`#ifdef USE_IRIDESCENCE
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
#endif`,vf=`#ifdef USE_BUMPMAP
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
#endif`,yf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,xf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Mf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,bf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Sf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,wf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ef=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Tf=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Af=`#define PI 3.141592653589793
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
} // validated`,Cf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Rf=`vec3 transformedNormal = objectNormal;
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
#endif`,Pf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Df=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Lf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,kf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,If="gl_FragColor = linearToOutputTexel( gl_FragColor );",Uf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Nf=`#ifdef USE_ENVMAP
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
#endif`,Of=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ff=`#ifdef USE_ENVMAP
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
#endif`,zf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Bf=`#ifdef USE_ENVMAP
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
#endif`,Hf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Gf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Vf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Wf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Xf=`#ifdef USE_GRADIENTMAP
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
}`,Yf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,qf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Zf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Kf=`uniform bool receiveShadow;
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
#endif`,jf=`#ifdef USE_ENVMAP
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
#endif`,$f=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Jf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Qf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,tp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ep=`PhysicalMaterial material;
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
#endif`,np=`struct PhysicalMaterial {
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
}`,ip=`
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
#endif`,sp=`#if defined( RE_IndirectDiffuse )
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
#endif`,rp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ap=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,op=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,lp=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cp=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,hp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,up=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,dp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,fp=`#if defined( USE_POINTS_UV )
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
#endif`,pp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,mp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,gp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,_p=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,vp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,yp=`#ifdef USE_MORPHTARGETS
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
#endif`,xp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Mp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,bp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Sp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ep=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Tp=`#ifdef USE_NORMALMAP
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
#endif`,Ap=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Cp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Rp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Pp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Dp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Lp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,kp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ip=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Up=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Np=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Op=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Fp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,zp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Bp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Hp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Gp=`float getShadowMask() {
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
}`,Vp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Wp=`#ifdef USE_SKINNING
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
#endif`,Xp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Yp=`#ifdef USE_SKINNING
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
#endif`,qp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Zp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Kp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,jp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,$p=`#ifdef USE_TRANSMISSION
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
#endif`,Jp=`#ifdef USE_TRANSMISSION
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
#endif`,Qp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,tm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,em=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,nm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const im=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,sm=`uniform sampler2D t2D;
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
}`,rm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,am=`#ifdef ENVMAP_TYPE_CUBE
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
}`,om=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cm=`#include <common>
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
}`,hm=`#if DEPTH_PACKING == 3200
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
}`,um=`#define DISTANCE
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
}`,dm=`#define DISTANCE
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
}`,fm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,pm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mm=`uniform float scale;
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
}`,gm=`uniform vec3 diffuse;
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
}`,_m=`#include <common>
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
}`,vm=`uniform vec3 diffuse;
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
}`,ym=`#define LAMBERT
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
}`,xm=`#define LAMBERT
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
}`,Mm=`#define MATCAP
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
}`,bm=`#define MATCAP
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
}`,Sm=`#define NORMAL
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
}`,wm=`#define NORMAL
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
}`,Em=`#define PHONG
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
}`,Tm=`#define PHONG
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
}`,Am=`#define STANDARD
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
}`,Cm=`#define STANDARD
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
}`,Rm=`#define TOON
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
}`,Pm=`#define TOON
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
}`,Dm=`uniform float size;
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
}`,Lm=`uniform vec3 diffuse;
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
}`,km=`#include <common>
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
}`,Im=`uniform vec3 color;
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
}`,Um=`uniform float rotation;
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
}`,Nm=`uniform vec3 diffuse;
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
}`,se={alphahash_fragment:sf,alphahash_pars_fragment:rf,alphamap_fragment:af,alphamap_pars_fragment:of,alphatest_fragment:lf,alphatest_pars_fragment:cf,aomap_fragment:hf,aomap_pars_fragment:uf,batching_pars_vertex:df,batching_vertex:ff,begin_vertex:pf,beginnormal_vertex:mf,bsdfs:gf,iridescence_fragment:_f,bumpmap_pars_fragment:vf,clipping_planes_fragment:yf,clipping_planes_pars_fragment:xf,clipping_planes_pars_vertex:Mf,clipping_planes_vertex:bf,color_fragment:Sf,color_pars_fragment:wf,color_pars_vertex:Ef,color_vertex:Tf,common:Af,cube_uv_reflection_fragment:Cf,defaultnormal_vertex:Rf,displacementmap_pars_vertex:Pf,displacementmap_vertex:Df,emissivemap_fragment:Lf,emissivemap_pars_fragment:kf,colorspace_fragment:If,colorspace_pars_fragment:Uf,envmap_fragment:Nf,envmap_common_pars_fragment:Of,envmap_pars_fragment:Ff,envmap_pars_vertex:zf,envmap_physical_pars_fragment:jf,envmap_vertex:Bf,fog_vertex:Hf,fog_pars_vertex:Gf,fog_fragment:Vf,fog_pars_fragment:Wf,gradientmap_pars_fragment:Xf,lightmap_pars_fragment:Yf,lights_lambert_fragment:qf,lights_lambert_pars_fragment:Zf,lights_pars_begin:Kf,lights_toon_fragment:$f,lights_toon_pars_fragment:Jf,lights_phong_fragment:Qf,lights_phong_pars_fragment:tp,lights_physical_fragment:ep,lights_physical_pars_fragment:np,lights_fragment_begin:ip,lights_fragment_maps:sp,lights_fragment_end:rp,logdepthbuf_fragment:ap,logdepthbuf_pars_fragment:op,logdepthbuf_pars_vertex:lp,logdepthbuf_vertex:cp,map_fragment:hp,map_pars_fragment:up,map_particle_fragment:dp,map_particle_pars_fragment:fp,metalnessmap_fragment:pp,metalnessmap_pars_fragment:mp,morphinstance_vertex:gp,morphcolor_vertex:_p,morphnormal_vertex:vp,morphtarget_pars_vertex:yp,morphtarget_vertex:xp,normal_fragment_begin:Mp,normal_fragment_maps:bp,normal_pars_fragment:Sp,normal_pars_vertex:wp,normal_vertex:Ep,normalmap_pars_fragment:Tp,clearcoat_normal_fragment_begin:Ap,clearcoat_normal_fragment_maps:Cp,clearcoat_pars_fragment:Rp,iridescence_pars_fragment:Pp,opaque_fragment:Dp,packing:Lp,premultiplied_alpha_fragment:kp,project_vertex:Ip,dithering_fragment:Up,dithering_pars_fragment:Np,roughnessmap_fragment:Op,roughnessmap_pars_fragment:Fp,shadowmap_pars_fragment:zp,shadowmap_pars_vertex:Bp,shadowmap_vertex:Hp,shadowmask_pars_fragment:Gp,skinbase_vertex:Vp,skinning_pars_vertex:Wp,skinning_vertex:Xp,skinnormal_vertex:Yp,specularmap_fragment:qp,specularmap_pars_fragment:Zp,tonemapping_fragment:Kp,tonemapping_pars_fragment:jp,transmission_fragment:$p,transmission_pars_fragment:Jp,uv_pars_fragment:Qp,uv_pars_vertex:tm,uv_vertex:em,worldpos_vertex:nm,background_vert:im,background_frag:sm,backgroundCube_vert:rm,backgroundCube_frag:am,cube_vert:om,cube_frag:lm,depth_vert:cm,depth_frag:hm,distanceRGBA_vert:um,distanceRGBA_frag:dm,equirect_vert:fm,equirect_frag:pm,linedashed_vert:mm,linedashed_frag:gm,meshbasic_vert:_m,meshbasic_frag:vm,meshlambert_vert:ym,meshlambert_frag:xm,meshmatcap_vert:Mm,meshmatcap_frag:bm,meshnormal_vert:Sm,meshnormal_frag:wm,meshphong_vert:Em,meshphong_frag:Tm,meshphysical_vert:Am,meshphysical_frag:Cm,meshtoon_vert:Rm,meshtoon_frag:Pm,points_vert:Dm,points_frag:Lm,shadow_vert:km,shadow_frag:Im,sprite_vert:Um,sprite_frag:Nm},xt={common:{diffuse:{value:new Mt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ne},alphaMap:{value:null},alphaMapTransform:{value:new ne},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ne}},envmap:{envMap:{value:null},envMapRotation:{value:new ne},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ne}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ne}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ne},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ne},normalScale:{value:new ot(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ne},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ne}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ne}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ne}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Mt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Mt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ne},alphaTest:{value:0},uvTransform:{value:new ne}},sprite:{diffuse:{value:new Mt(16777215)},opacity:{value:1},center:{value:new ot(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ne},alphaMap:{value:null},alphaMapTransform:{value:new ne},alphaTest:{value:0}}},bn={basic:{uniforms:ln([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.fog]),vertexShader:se.meshbasic_vert,fragmentShader:se.meshbasic_frag},lambert:{uniforms:ln([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,xt.lights,{emissive:{value:new Mt(0)}}]),vertexShader:se.meshlambert_vert,fragmentShader:se.meshlambert_frag},phong:{uniforms:ln([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,xt.lights,{emissive:{value:new Mt(0)},specular:{value:new Mt(1118481)},shininess:{value:30}}]),vertexShader:se.meshphong_vert,fragmentShader:se.meshphong_frag},standard:{uniforms:ln([xt.common,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.roughnessmap,xt.metalnessmap,xt.fog,xt.lights,{emissive:{value:new Mt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:se.meshphysical_vert,fragmentShader:se.meshphysical_frag},toon:{uniforms:ln([xt.common,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.gradientmap,xt.fog,xt.lights,{emissive:{value:new Mt(0)}}]),vertexShader:se.meshtoon_vert,fragmentShader:se.meshtoon_frag},matcap:{uniforms:ln([xt.common,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,{matcap:{value:null}}]),vertexShader:se.meshmatcap_vert,fragmentShader:se.meshmatcap_frag},points:{uniforms:ln([xt.points,xt.fog]),vertexShader:se.points_vert,fragmentShader:se.points_frag},dashed:{uniforms:ln([xt.common,xt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:se.linedashed_vert,fragmentShader:se.linedashed_frag},depth:{uniforms:ln([xt.common,xt.displacementmap]),vertexShader:se.depth_vert,fragmentShader:se.depth_frag},normal:{uniforms:ln([xt.common,xt.bumpmap,xt.normalmap,xt.displacementmap,{opacity:{value:1}}]),vertexShader:se.meshnormal_vert,fragmentShader:se.meshnormal_frag},sprite:{uniforms:ln([xt.sprite,xt.fog]),vertexShader:se.sprite_vert,fragmentShader:se.sprite_frag},background:{uniforms:{uvTransform:{value:new ne},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:se.background_vert,fragmentShader:se.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ne}},vertexShader:se.backgroundCube_vert,fragmentShader:se.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:se.cube_vert,fragmentShader:se.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:se.equirect_vert,fragmentShader:se.equirect_frag},distanceRGBA:{uniforms:ln([xt.common,xt.displacementmap,{referencePosition:{value:new X},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:se.distanceRGBA_vert,fragmentShader:se.distanceRGBA_frag},shadow:{uniforms:ln([xt.lights,xt.fog,{color:{value:new Mt(0)},opacity:{value:1}}]),vertexShader:se.shadow_vert,fragmentShader:se.shadow_frag}};bn.physical={uniforms:ln([bn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ne},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ne},clearcoatNormalScale:{value:new ot(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ne},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ne},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ne},sheen:{value:0},sheenColor:{value:new Mt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ne},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ne},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ne},transmissionSamplerSize:{value:new ot},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ne},attenuationDistance:{value:0},attenuationColor:{value:new Mt(0)},specularColor:{value:new Mt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ne},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ne},anisotropyVector:{value:new ot},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ne}}]),vertexShader:se.meshphysical_vert,fragmentShader:se.meshphysical_frag};const ya={r:0,b:0,g:0},rs=new ei,Om=new oe;function Fm(n,t,e,i,s,r,a){const o=new Mt(0);let l=r===!0?0:1,c,h,f=null,u=0,d=null;function y(S){let b=S.isScene===!0?S.background:null;return b&&b.isTexture&&(b=(S.backgroundBlurriness>0?e:t).get(b)),b}function _(S){let b=!1;const M=y(S);M===null?g(o,l):M&&M.isColor&&(g(M,1),b=!0);const P=n.xr.getEnvironmentBlendMode();P==="additive"?i.buffers.color.setClear(0,0,0,1,a):P==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||b)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function p(S,b){const M=y(b);M&&(M.isCubeTexture||M.mapping===io)?(h===void 0&&(h=new xe(new rn(1,1,1),new ni({name:"BackgroundCubeMaterial",uniforms:ar(bn.backgroundCube.uniforms),vertexShader:bn.backgroundCube.vertexShader,fragmentShader:bn.backgroundCube.fragmentShader,side:dn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(P,C,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),rs.copy(b.backgroundRotation),rs.x*=-1,rs.y*=-1,rs.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(rs.y*=-1,rs.z*=-1),h.material.uniforms.envMap.value=M,h.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Om.makeRotationFromEuler(rs)),h.material.toneMapped=he.getTransfer(M.colorSpace)!==ve,(f!==M||u!==M.version||d!==n.toneMapping)&&(h.material.needsUpdate=!0,f=M,u=M.version,d=n.toneMapping),h.layers.enableAll(),S.unshift(h,h.geometry,h.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new xe(new On(2,2),new ni({name:"BackgroundMaterial",uniforms:ar(bn.background.uniforms),vertexShader:bn.background.vertexShader,fragmentShader:bn.background.fragmentShader,side:$i,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.toneMapped=he.getTransfer(M.colorSpace)!==ve,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(f!==M||u!==M.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,f=M,u=M.version,d=n.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function g(S,b){S.getRGB(ya,Fh(n)),i.buffers.color.setClear(ya.r,ya.g,ya.b,b,a)}return{getClearColor:function(){return o},setClearColor:function(S,b=1){o.set(S),l=b,g(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(S){l=S,g(o,l)},render:_,addToRenderList:p}}function zm(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=u(null);let r=s,a=!1;function o(m,E,I,z,L){let F=!1;const D=f(z,I,E);r!==D&&(r=D,c(r.object)),F=d(m,z,I,L),F&&y(m,z,I,L),L!==null&&t.update(L,n.ELEMENT_ARRAY_BUFFER),(F||a)&&(a=!1,M(m,E,I,z),L!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(L).buffer))}function l(){return n.createVertexArray()}function c(m){return n.bindVertexArray(m)}function h(m){return n.deleteVertexArray(m)}function f(m,E,I){const z=I.wireframe===!0;let L=i[m.id];L===void 0&&(L={},i[m.id]=L);let F=L[E.id];F===void 0&&(F={},L[E.id]=F);let D=F[z];return D===void 0&&(D=u(l()),F[z]=D),D}function u(m){const E=[],I=[],z=[];for(let L=0;L<e;L++)E[L]=0,I[L]=0,z[L]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:E,enabledAttributes:I,attributeDivisors:z,object:m,attributes:{},index:null}}function d(m,E,I,z){const L=r.attributes,F=E.attributes;let D=0;const N=I.getAttributes();for(const T in N)if(N[T].location>=0){const x=L[T];let k=F[T];if(k===void 0&&(T==="instanceMatrix"&&m.instanceMatrix&&(k=m.instanceMatrix),T==="instanceColor"&&m.instanceColor&&(k=m.instanceColor)),x===void 0||x.attribute!==k||k&&x.data!==k.data)return!0;D++}return r.attributesNum!==D||r.index!==z}function y(m,E,I,z){const L={},F=E.attributes;let D=0;const N=I.getAttributes();for(const T in N)if(N[T].location>=0){let x=F[T];x===void 0&&(T==="instanceMatrix"&&m.instanceMatrix&&(x=m.instanceMatrix),T==="instanceColor"&&m.instanceColor&&(x=m.instanceColor));const k={};k.attribute=x,x&&x.data&&(k.data=x.data),L[T]=k,D++}r.attributes=L,r.attributesNum=D,r.index=z}function _(){const m=r.newAttributes;for(let E=0,I=m.length;E<I;E++)m[E]=0}function p(m){g(m,0)}function g(m,E){const I=r.newAttributes,z=r.enabledAttributes,L=r.attributeDivisors;I[m]=1,z[m]===0&&(n.enableVertexAttribArray(m),z[m]=1),L[m]!==E&&(n.vertexAttribDivisor(m,E),L[m]=E)}function S(){const m=r.newAttributes,E=r.enabledAttributes;for(let I=0,z=E.length;I<z;I++)E[I]!==m[I]&&(n.disableVertexAttribArray(I),E[I]=0)}function b(m,E,I,z,L,F,D){D===!0?n.vertexAttribIPointer(m,E,I,L,F):n.vertexAttribPointer(m,E,I,z,L,F)}function M(m,E,I,z){_();const L=z.attributes,F=I.getAttributes(),D=E.defaultAttributeValues;for(const N in F){const T=F[N];if(T.location>=0){let R=L[N];if(R===void 0&&(N==="instanceMatrix"&&m.instanceMatrix&&(R=m.instanceMatrix),N==="instanceColor"&&m.instanceColor&&(R=m.instanceColor)),R!==void 0){const x=R.normalized,k=R.itemSize,W=t.get(R);if(W===void 0)continue;const J=W.buffer,Y=W.type,H=W.bytesPerElement,Z=Y===n.INT||Y===n.UNSIGNED_INT||R.gpuType===ic;if(R.isInterleavedBufferAttribute){const Q=R.data,ht=Q.stride,vt=R.offset;if(Q.isInstancedInterleavedBuffer){for(let mt=0;mt<T.locationSize;mt++)g(T.location+mt,Q.meshPerAttribute);m.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let mt=0;mt<T.locationSize;mt++)p(T.location+mt);n.bindBuffer(n.ARRAY_BUFFER,J);for(let mt=0;mt<T.locationSize;mt++)b(T.location+mt,k/T.locationSize,Y,x,ht*H,(vt+k/T.locationSize*mt)*H,Z)}else{if(R.isInstancedBufferAttribute){for(let Q=0;Q<T.locationSize;Q++)g(T.location+Q,R.meshPerAttribute);m.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=R.meshPerAttribute*R.count)}else for(let Q=0;Q<T.locationSize;Q++)p(T.location+Q);n.bindBuffer(n.ARRAY_BUFFER,J);for(let Q=0;Q<T.locationSize;Q++)b(T.location+Q,k/T.locationSize,Y,x,k*H,k/T.locationSize*Q*H,Z)}}else if(D!==void 0){const x=D[N];if(x!==void 0)switch(x.length){case 2:n.vertexAttrib2fv(T.location,x);break;case 3:n.vertexAttrib3fv(T.location,x);break;case 4:n.vertexAttrib4fv(T.location,x);break;default:n.vertexAttrib1fv(T.location,x)}}}}S()}function P(){U();for(const m in i){const E=i[m];for(const I in E){const z=E[I];for(const L in z)h(z[L].object),delete z[L];delete E[I]}delete i[m]}}function C(m){if(i[m.id]===void 0)return;const E=i[m.id];for(const I in E){const z=E[I];for(const L in z)h(z[L].object),delete z[L];delete E[I]}delete i[m.id]}function A(m){for(const E in i){const I=i[E];if(I[m.id]===void 0)continue;const z=I[m.id];for(const L in z)h(z[L].object),delete z[L];delete I[m.id]}}function U(){v(),a=!0,r!==s&&(r=s,c(r.object))}function v(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:U,resetDefaultState:v,dispose:P,releaseStatesOfGeometry:C,releaseStatesOfProgram:A,initAttributes:_,enableAttribute:p,disableUnusedAttributes:S}}function Bm(n,t,e){let i;function s(c){i=c}function r(c,h){n.drawArrays(i,c,h),e.update(h,i,1)}function a(c,h,f){f!==0&&(n.drawArraysInstanced(i,c,h,f),e.update(h,i,f))}function o(c,h,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,f);let d=0;for(let y=0;y<f;y++)d+=h[y];e.update(d,i,1)}function l(c,h,f,u){if(f===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let y=0;y<c.length;y++)a(c[y],h[y],u[y]);else{d.multiDrawArraysInstancedWEBGL(i,c,0,h,0,u,0,f);let y=0;for(let _=0;_<f;_++)y+=h[_]*u[_];e.update(y,i,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Hm(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const A=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(A){return!(A!==Wn&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){const U=A===qr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==Ui&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==ui&&!U)}function l(A){if(A==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const f=e.logarithmicDepthBuffer===!0,u=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),y=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),p=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),g=n.getParameter(n.MAX_VERTEX_ATTRIBS),S=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),b=n.getParameter(n.MAX_VARYING_VECTORS),M=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),P=y>0,C=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:u,maxTextures:d,maxVertexTextures:y,maxTextureSize:_,maxCubemapSize:p,maxAttributes:g,maxVertexUniforms:S,maxVaryings:b,maxFragmentUniforms:M,vertexTextures:P,maxSamples:C}}function Gm(n){const t=this;let e=null,i=0,s=!1,r=!1;const a=new qi,o=new ne,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){const d=f.length!==0||u||i!==0||s;return s=u,i=f.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,u){e=h(f,u,0)},this.setState=function(f,u,d){const y=f.clippingPlanes,_=f.clipIntersection,p=f.clipShadows,g=n.get(f);if(!s||y===null||y.length===0||r&&!p)r?h(null):c();else{const S=r?0:i,b=S*4;let M=g.clippingState||null;l.value=M,M=h(y,u,b,d);for(let P=0;P!==b;++P)M[P]=e[P];g.clippingState=M,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(f,u,d,y){const _=f!==null?f.length:0;let p=null;if(_!==0){if(p=l.value,y!==!0||p===null){const g=d+_*4,S=u.matrixWorldInverse;o.getNormalMatrix(S),(p===null||p.length<g)&&(p=new Float32Array(g));for(let b=0,M=d;b!==_;++b,M+=4)a.copy(f[b]).applyMatrix4(S,o),a.normal.toArray(p,M),p[M+3]=a.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,p}}function Vm(n){let t=new WeakMap;function e(a,o){return o===ml?a.mapping=nr:o===gl&&(a.mapping=ir),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===ml||o===gl)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Qd(l.height);return c.fromEquirectangularTexture(n,a),t.set(a,c),a.addEventListener("dispose",s),e(c.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}class Gh extends zh{constructor(t=-1,e=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-t,a=i+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const qs=4,p0=[.125,.215,.35,.446,.526,.582],hs=20,No=new Gh,m0=new Mt;let Oo=null,Fo=0,zo=0,Bo=!1;const os=(1+Math.sqrt(5))/2,Os=1/os,g0=[new X(-os,Os,0),new X(os,Os,0),new X(-Os,0,os),new X(Os,0,os),new X(0,os,-Os),new X(0,os,Os),new X(-1,1,-1),new X(1,1,-1),new X(-1,1,1),new X(1,1,1)];class _0{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100){Oo=this._renderer.getRenderTarget(),Fo=this._renderer.getActiveCubeFace(),zo=this._renderer.getActiveMipmapLevel(),Bo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,i,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=x0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=y0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Oo,Fo,zo),this._renderer.xr.enabled=Bo,t.scissorTest=!1,xa(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===nr||t.mapping===ir?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Oo=this._renderer.getRenderTarget(),Fo=this._renderer.getActiveCubeFace(),zo=this._renderer.getActiveMipmapLevel(),Bo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Qn,minFilter:Qn,generateMipmaps:!1,type:qr,format:Wn,colorSpace:hr,depthBuffer:!1},s=v0(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=v0(t,e,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Wm(r)),this._blurMaterial=Xm(r,t,e)}return s}_compileMaterial(t){const e=new xe(this._lodPlanes[0],t);this._renderer.compile(e,No)}_sceneToCubeUV(t,e,i,s){const o=new Pn(90,1,e,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,u=h.toneMapping;h.getClearColor(m0),h.toneMapping=ji,h.autoClear=!1;const d=new tr({name:"PMREM.Background",side:dn,depthWrite:!1,depthTest:!1}),y=new xe(new rn,d);let _=!1;const p=t.background;p?p.isColor&&(d.color.copy(p),t.background=null,_=!0):(d.color.copy(m0),_=!0);for(let g=0;g<6;g++){const S=g%3;S===0?(o.up.set(0,l[g],0),o.lookAt(c[g],0,0)):S===1?(o.up.set(0,0,l[g]),o.lookAt(0,c[g],0)):(o.up.set(0,l[g],0),o.lookAt(0,0,c[g]));const b=this._cubeSize;xa(s,S*b,g>2?b:0,b,b),h.setRenderTarget(s),_&&h.render(y,o),h.render(t,o)}y.geometry.dispose(),y.material.dispose(),h.toneMapping=u,h.autoClear=f,t.background=p}_textureToCubeUV(t,e){const i=this._renderer,s=t.mapping===nr||t.mapping===ir;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=x0()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=y0());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new xe(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const l=this._cubeSize;xa(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(a,No)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=g0[(s-r-1)%g0.length];this._blur(t,r-1,r,a,o)}e.autoClear=i}_blur(t,e,i,s,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,i,s,"latitudinal",r),this._halfBlur(a,t,i,i,s,"longitudinal",r)}_halfBlur(t,e,i,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,f=new xe(this._lodPlanes[s],c),u=c.uniforms,d=this._sizeLods[i]-1,y=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*hs-1),_=r/y,p=isFinite(r)?1+Math.floor(h*_):hs;p>hs&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${hs}`);const g=[];let S=0;for(let A=0;A<hs;++A){const U=A/_,v=Math.exp(-U*U/2);g.push(v),A===0?S+=v:A<p&&(S+=2*v)}for(let A=0;A<g.length;A++)g[A]=g[A]/S;u.envMap.value=t.texture,u.samples.value=p,u.weights.value=g,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);const{_lodMax:b}=this;u.dTheta.value=y,u.mipInt.value=b-i;const M=this._sizeLods[s],P=3*M*(s>b-qs?s-b+qs:0),C=4*(this._cubeSize-M);xa(e,P,C,3*M,2*M),l.setRenderTarget(e),l.render(f,No)}}function Wm(n){const t=[],e=[],i=[];let s=n;const r=n-qs+1+p0.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let l=1/o;a>n-qs?l=p0[a-n+qs-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),h=-c,f=1+c,u=[h,h,f,h,f,f,h,h,f,f,h,f],d=6,y=6,_=3,p=2,g=1,S=new Float32Array(_*y*d),b=new Float32Array(p*y*d),M=new Float32Array(g*y*d);for(let C=0;C<d;C++){const A=C%3*2/3-1,U=C>2?0:-1,v=[A,U,0,A+2/3,U,0,A+2/3,U+1,0,A,U,0,A+2/3,U+1,0,A,U+1,0];S.set(v,_*y*C),b.set(u,p*y*C);const m=[C,C,C,C,C,C];M.set(m,g*y*C)}const P=new Me;P.setAttribute("position",new fn(S,_)),P.setAttribute("uv",new fn(b,p)),P.setAttribute("faceIndex",new fn(M,g)),t.push(P),s>qs&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function v0(n,t,e){const i=new gs(n,t,e);return i.texture.mapping=io,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function xa(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function Xm(n,t,e){const i=new Float32Array(hs),s=new X(0,1,0);return new ni({name:"SphericalGaussianBlur",defines:{n:hs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:mc(),fragmentShader:`

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
		`,blending:Ki,depthTest:!1,depthWrite:!1})}function y0(){return new ni({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:mc(),fragmentShader:`

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
		`,blending:Ki,depthTest:!1,depthWrite:!1})}function x0(){return new ni({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:mc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ki,depthTest:!1,depthWrite:!1})}function mc(){return`

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
	`}function Ym(n){let t=new WeakMap,e=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===ml||l===gl,h=l===nr||l===ir;if(c||h){let f=t.get(o);const u=f!==void 0?f.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==u)return e===null&&(e=new _0(n)),f=c?e.fromEquirectangular(o,f):e.fromCubemap(o,f),f.texture.pmremVersion=o.pmremVersion,t.set(o,f),f.texture;if(f!==void 0)return f.texture;{const d=o.image;return c&&d&&d.height>0||h&&d&&s(d)?(e===null&&(e=new _0(n)),f=c?e.fromEquirectangular(o):e.fromCubemap(o),f.texture.pmremVersion=o.pmremVersion,t.set(o,f),o.addEventListener("dispose",r),f.texture):null}}}return o}function s(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:a}}function qm(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const s=e(i);return s===null&&Ar("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function Zm(n,t,e,i){const s={},r=new WeakMap;function a(f){const u=f.target;u.index!==null&&t.remove(u.index);for(const y in u.attributes)t.remove(u.attributes[y]);for(const y in u.morphAttributes){const _=u.morphAttributes[y];for(let p=0,g=_.length;p<g;p++)t.remove(_[p])}u.removeEventListener("dispose",a),delete s[u.id];const d=r.get(u);d&&(t.remove(d),r.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function o(f,u){return s[u.id]===!0||(u.addEventListener("dispose",a),s[u.id]=!0,e.memory.geometries++),u}function l(f){const u=f.attributes;for(const y in u)t.update(u[y],n.ARRAY_BUFFER);const d=f.morphAttributes;for(const y in d){const _=d[y];for(let p=0,g=_.length;p<g;p++)t.update(_[p],n.ARRAY_BUFFER)}}function c(f){const u=[],d=f.index,y=f.attributes.position;let _=0;if(d!==null){const S=d.array;_=d.version;for(let b=0,M=S.length;b<M;b+=3){const P=S[b+0],C=S[b+1],A=S[b+2];u.push(P,C,C,A,A,P)}}else if(y!==void 0){const S=y.array;_=y.version;for(let b=0,M=S.length/3-1;b<M;b+=3){const P=b+0,C=b+1,A=b+2;u.push(P,C,C,A,A,P)}}else return;const p=new(Lh(u)?Oh:Nh)(u,1);p.version=_;const g=r.get(f);g&&t.remove(g),r.set(f,p)}function h(f){const u=r.get(f);if(u){const d=f.index;d!==null&&u.version<d.version&&c(f)}else c(f);return r.get(f)}return{get:o,update:l,getWireframeAttribute:h}}function Km(n,t,e){let i;function s(u){i=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function l(u,d){n.drawElements(i,d,r,u*a),e.update(d,i,1)}function c(u,d,y){y!==0&&(n.drawElementsInstanced(i,d,r,u*a,y),e.update(d,i,y))}function h(u,d,y){if(y===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,r,u,0,y);let p=0;for(let g=0;g<y;g++)p+=d[g];e.update(p,i,1)}function f(u,d,y,_){if(y===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<u.length;g++)c(u[g]/a,d[g],_[g]);else{p.multiDrawElementsInstancedWEBGL(i,d,0,r,u,0,_,0,y);let g=0;for(let S=0;S<y;S++)g+=d[S]*_[S];e.update(g,i,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=f}function jm(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(e.calls++,a){case n.TRIANGLES:e.triangles+=o*(r/3);break;case n.LINES:e.lines+=o*(r/2);break;case n.LINE_STRIP:e.lines+=o*(r-1);break;case n.LINE_LOOP:e.lines+=o*r;break;case n.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function $m(n,t,e){const i=new WeakMap,s=new ue;function r(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=h!==void 0?h.length:0;let u=i.get(o);if(u===void 0||u.count!==f){let m=function(){U.dispose(),i.delete(o),o.removeEventListener("dispose",m)};var d=m;u!==void 0&&u.texture.dispose();const y=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,p=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],S=o.morphAttributes.normal||[],b=o.morphAttributes.color||[];let M=0;y===!0&&(M=1),_===!0&&(M=2),p===!0&&(M=3);let P=o.attributes.position.count*M,C=1;P>t.maxTextureSize&&(C=Math.ceil(P/t.maxTextureSize),P=t.maxTextureSize);const A=new Float32Array(P*C*4*f),U=new Ih(A,P,C,f);U.type=ui,U.needsUpdate=!0;const v=M*4;for(let E=0;E<f;E++){const I=g[E],z=S[E],L=b[E],F=P*C*4*E;for(let D=0;D<I.count;D++){const N=D*v;y===!0&&(s.fromBufferAttribute(I,D),A[F+N+0]=s.x,A[F+N+1]=s.y,A[F+N+2]=s.z,A[F+N+3]=0),_===!0&&(s.fromBufferAttribute(z,D),A[F+N+4]=s.x,A[F+N+5]=s.y,A[F+N+6]=s.z,A[F+N+7]=0),p===!0&&(s.fromBufferAttribute(L,D),A[F+N+8]=s.x,A[F+N+9]=s.y,A[F+N+10]=s.z,A[F+N+11]=L.itemSize===4?s.w:1)}}u={count:f,texture:U,size:new ot(P,C)},i.set(o,u),o.addEventListener("dispose",m)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,e);else{let y=0;for(let p=0;p<c.length;p++)y+=c[p];const _=o.morphTargetsRelative?1:1-y;l.getUniforms().setValue(n,"morphTargetBaseInfluence",_),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",u.size)}return{update:r}}function Jm(n,t,e,i){let s=new WeakMap;function r(l){const c=i.render.frame,h=l.geometry,f=t.get(l,h);if(s.get(f)!==c&&(t.update(f),s.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const u=l.skeleton;s.get(u)!==c&&(u.update(),s.set(u,c))}return f}function a(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}class Vh extends an{constructor(t,e,i,s,r,a,o,l,c,h=Js){if(h!==Js&&h!==rr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===Js&&(i=ms),i===void 0&&h===rr&&(i=sr),super(null,s,r,a,o,l,h,i,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:In,this.minFilter=l!==void 0?l:In,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Wh=new an,M0=new Vh(1,1),Xh=new Ih,Yh=new Fd,qh=new Bh,b0=[],S0=[],w0=new Float32Array(16),E0=new Float32Array(9),T0=new Float32Array(4);function dr(n,t,e){const i=n[0];if(i<=0||i>0)return n;const s=t*e;let r=b0[s];if(r===void 0&&(r=new Float32Array(s),b0[s]=r),t!==0){i.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,n[a].toArray(r,o)}return r}function Ve(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function We(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function ro(n,t){let e=S0[t];e===void 0&&(e=new Int32Array(t),S0[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function Qm(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function t1(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ve(e,t))return;n.uniform2fv(this.addr,t),We(e,t)}}function e1(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ve(e,t))return;n.uniform3fv(this.addr,t),We(e,t)}}function n1(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ve(e,t))return;n.uniform4fv(this.addr,t),We(e,t)}}function i1(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ve(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),We(e,t)}else{if(Ve(e,i))return;T0.set(i),n.uniformMatrix2fv(this.addr,!1,T0),We(e,i)}}function s1(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ve(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),We(e,t)}else{if(Ve(e,i))return;E0.set(i),n.uniformMatrix3fv(this.addr,!1,E0),We(e,i)}}function r1(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ve(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),We(e,t)}else{if(Ve(e,i))return;w0.set(i),n.uniformMatrix4fv(this.addr,!1,w0),We(e,i)}}function a1(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function o1(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ve(e,t))return;n.uniform2iv(this.addr,t),We(e,t)}}function l1(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ve(e,t))return;n.uniform3iv(this.addr,t),We(e,t)}}function c1(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ve(e,t))return;n.uniform4iv(this.addr,t),We(e,t)}}function h1(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function u1(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ve(e,t))return;n.uniform2uiv(this.addr,t),We(e,t)}}function d1(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ve(e,t))return;n.uniform3uiv(this.addr,t),We(e,t)}}function f1(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ve(e,t))return;n.uniform4uiv(this.addr,t),We(e,t)}}function p1(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(M0.compareFunction=Dh,r=M0):r=Wh,e.setTexture2D(t||r,s)}function m1(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||Yh,s)}function g1(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||qh,s)}function _1(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||Xh,s)}function v1(n){switch(n){case 5126:return Qm;case 35664:return t1;case 35665:return e1;case 35666:return n1;case 35674:return i1;case 35675:return s1;case 35676:return r1;case 5124:case 35670:return a1;case 35667:case 35671:return o1;case 35668:case 35672:return l1;case 35669:case 35673:return c1;case 5125:return h1;case 36294:return u1;case 36295:return d1;case 36296:return f1;case 35678:case 36198:case 36298:case 36306:case 35682:return p1;case 35679:case 36299:case 36307:return m1;case 35680:case 36300:case 36308:case 36293:return g1;case 36289:case 36303:case 36311:case 36292:return _1}}function y1(n,t){n.uniform1fv(this.addr,t)}function x1(n,t){const e=dr(t,this.size,2);n.uniform2fv(this.addr,e)}function M1(n,t){const e=dr(t,this.size,3);n.uniform3fv(this.addr,e)}function b1(n,t){const e=dr(t,this.size,4);n.uniform4fv(this.addr,e)}function S1(n,t){const e=dr(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function w1(n,t){const e=dr(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function E1(n,t){const e=dr(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function T1(n,t){n.uniform1iv(this.addr,t)}function A1(n,t){n.uniform2iv(this.addr,t)}function C1(n,t){n.uniform3iv(this.addr,t)}function R1(n,t){n.uniform4iv(this.addr,t)}function P1(n,t){n.uniform1uiv(this.addr,t)}function D1(n,t){n.uniform2uiv(this.addr,t)}function L1(n,t){n.uniform3uiv(this.addr,t)}function k1(n,t){n.uniform4uiv(this.addr,t)}function I1(n,t,e){const i=this.cache,s=t.length,r=ro(e,s);Ve(i,r)||(n.uniform1iv(this.addr,r),We(i,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||Wh,r[a])}function U1(n,t,e){const i=this.cache,s=t.length,r=ro(e,s);Ve(i,r)||(n.uniform1iv(this.addr,r),We(i,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Yh,r[a])}function N1(n,t,e){const i=this.cache,s=t.length,r=ro(e,s);Ve(i,r)||(n.uniform1iv(this.addr,r),We(i,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||qh,r[a])}function O1(n,t,e){const i=this.cache,s=t.length,r=ro(e,s);Ve(i,r)||(n.uniform1iv(this.addr,r),We(i,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Xh,r[a])}function F1(n){switch(n){case 5126:return y1;case 35664:return x1;case 35665:return M1;case 35666:return b1;case 35674:return S1;case 35675:return w1;case 35676:return E1;case 5124:case 35670:return T1;case 35667:case 35671:return A1;case 35668:case 35672:return C1;case 35669:case 35673:return R1;case 5125:return P1;case 36294:return D1;case 36295:return L1;case 36296:return k1;case 35678:case 36198:case 36298:case 36306:case 35682:return I1;case 35679:case 36299:case 36307:return U1;case 35680:case 36300:case 36308:case 36293:return N1;case 36289:case 36303:case 36311:case 36292:return O1}}class z1{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=v1(e.type)}}class B1{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=F1(e.type)}}class H1{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],i)}}}const Ho=/(\w+)(\])?(\[|\.)?/g;function A0(n,t){n.seq.push(t),n.map[t.id]=t}function G1(n,t,e){const i=n.name,s=i.length;for(Ho.lastIndex=0;;){const r=Ho.exec(i),a=Ho.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){A0(e,c===void 0?new z1(o,n,t):new B1(o,n,t));break}else{let f=e.map[o];f===void 0&&(f=new H1(o),A0(e,f)),e=f}}}class Ga{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);G1(r,a,this)}}setValue(t,e,i,s){const r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){const s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){const i=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&i.push(a)}return i}}function C0(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const V1=37297;let W1=0;function X1(n,t){const e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;i.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return i.join(`
`)}const R0=new ne;function Y1(n){he._getMatrix(R0,he.workingColorSpace,n);const t=`mat3( ${R0.elements.map(e=>e.toFixed(4))} )`;switch(he.getTransfer(n)){case so:return[t,"LinearTransferOETF"];case ve:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function P0(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),s=n.getShaderInfoLog(t).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+X1(n.getShaderSource(t),a)}else return s}function q1(n,t){const e=Y1(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Z1(n,t){let e;switch(t){case $u:e="Linear";break;case Ju:e="Reinhard";break;case Qu:e="Cineon";break;case yh:e="ACESFilmic";break;case ed:e="AgX";break;case nd:e="Neutral";break;case td:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Ma=new X;function K1(){he.getLuminanceCoefficients(Ma);const n=Ma.x.toFixed(4),t=Ma.y.toFixed(4),e=Ma.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function j1(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Cr).join(`
`)}function $1(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function J1(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(t,s),a=r.name;let o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:n.getAttribLocation(t,a),locationSize:o}}return e}function Cr(n){return n!==""}function D0(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function L0(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Q1=/^[ \t]*#include +<([\w\d./]+)>/gm;function Xl(n){return n.replace(Q1,eg)}const tg=new Map;function eg(n,t){let e=se[t];if(e===void 0){const i=tg.get(t);if(i!==void 0)e=se[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Xl(e)}const ng=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function k0(n){return n.replace(ng,ig)}function ig(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function I0(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}function sg(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===gh?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===_h?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Ri&&(t="SHADOWMAP_TYPE_VSM"),t}function rg(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case nr:case ir:t="ENVMAP_TYPE_CUBE";break;case io:t="ENVMAP_TYPE_CUBE_UV";break}return t}function ag(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case ir:t="ENVMAP_MODE_REFRACTION";break}return t}function og(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case vh:t="ENVMAP_BLENDING_MULTIPLY";break;case Ku:t="ENVMAP_BLENDING_MIX";break;case ju:t="ENVMAP_BLENDING_ADD";break}return t}function lg(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function cg(n,t,e,i){const s=n.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=sg(e),c=rg(e),h=ag(e),f=og(e),u=lg(e),d=j1(e),y=$1(r),_=s.createProgram();let p,g,S=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,y].filter(Cr).join(`
`),p.length>0&&(p+=`
`),g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,y].filter(Cr).join(`
`),g.length>0&&(g+=`
`)):(p=[I0(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,y,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Cr).join(`
`),g=[I0(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,y,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+f:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ji?"#define TONE_MAPPING":"",e.toneMapping!==ji?se.tonemapping_pars_fragment:"",e.toneMapping!==ji?Z1("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",se.colorspace_pars_fragment,q1("linearToOutputTexel",e.outputColorSpace),K1(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Cr).join(`
`)),a=Xl(a),a=D0(a,e),a=L0(a,e),o=Xl(o),o=D0(o,e),o=L0(o,e),a=k0(a),o=k0(o),e.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,p=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,g=["#define varying in",e.glslVersion===Yc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Yc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const b=S+p+a,M=S+g+o,P=C0(s,s.VERTEX_SHADER,b),C=C0(s,s.FRAGMENT_SHADER,M);s.attachShader(_,P),s.attachShader(_,C),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function A(E){if(n.debug.checkShaderErrors){const I=s.getProgramInfoLog(_).trim(),z=s.getShaderInfoLog(P).trim(),L=s.getShaderInfoLog(C).trim();let F=!0,D=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(F=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,_,P,C);else{const N=P0(s,P,"vertex"),T=P0(s,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+E.name+`
Material Type: `+E.type+`

Program Info Log: `+I+`
`+N+`
`+T)}else I!==""?console.warn("THREE.WebGLProgram: Program Info Log:",I):(z===""||L==="")&&(D=!1);D&&(E.diagnostics={runnable:F,programLog:I,vertexShader:{log:z,prefix:p},fragmentShader:{log:L,prefix:g}})}s.deleteShader(P),s.deleteShader(C),U=new Ga(s,_),v=J1(s,_)}let U;this.getUniforms=function(){return U===void 0&&A(this),U};let v;this.getAttributes=function(){return v===void 0&&A(this),v};let m=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return m===!1&&(m=s.getProgramParameter(_,V1)),m},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=W1++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=P,this.fragmentShader=C,this}let hg=0;class ug{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(i),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new dg(t),e.set(t,i)),i}}class dg{constructor(t){this.id=hg++,this.code=t,this.usedTimes=0}}function fg(n,t,e,i,s,r,a){const o=new dc,l=new ug,c=new Set,h=[],f=s.logarithmicDepthBuffer,u=s.vertexTextures;let d=s.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(v){return c.add(v),v===0?"uv":`uv${v}`}function p(v,m,E,I,z){const L=I.fog,F=z.geometry,D=v.isMeshStandardMaterial?I.environment:null,N=(v.isMeshStandardMaterial?e:t).get(v.envMap||D),T=N&&N.mapping===io?N.image.height:null,R=y[v.type];v.precision!==null&&(d=s.getMaxPrecision(v.precision),d!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",d,"instead."));const x=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,k=x!==void 0?x.length:0;let W=0;F.morphAttributes.position!==void 0&&(W=1),F.morphAttributes.normal!==void 0&&(W=2),F.morphAttributes.color!==void 0&&(W=3);let J,Y,H,Z;if(R){const ge=bn[R];J=ge.vertexShader,Y=ge.fragmentShader}else J=v.vertexShader,Y=v.fragmentShader,l.update(v),H=l.getVertexShaderID(v),Z=l.getFragmentShaderID(v);const Q=n.getRenderTarget(),ht=n.state.buffers.depth.getReversed(),vt=z.isInstancedMesh===!0,mt=z.isBatchedMesh===!0,Gt=!!v.map,st=!!v.matcap,ft=!!N,q=!!v.aoMap,Ft=!!v.lightMap,dt=!!v.bumpMap,Dt=!!v.normalMap,yt=!!v.displacementMap,Wt=!!v.emissiveMap,Rt=!!v.metalnessMap,G=!!v.roughnessMap,O=v.anisotropy>0,tt=v.clearcoat>0,rt=v.dispersion>0,ut=v.iridescence>0,at=v.sheen>0,It=v.transmission>0,St=O&&!!v.anisotropyMap,Pt=tt&&!!v.clearcoatMap,re=tt&&!!v.clearcoatNormalMap,gt=tt&&!!v.clearcoatRoughnessMap,Lt=ut&&!!v.iridescenceMap,Xt=ut&&!!v.iridescenceThicknessMap,jt=at&&!!v.sheenColorMap,kt=at&&!!v.sheenRoughnessMap,le=!!v.specularMap,ie=!!v.specularColorMap,Se=!!v.specularIntensityMap,K=It&&!!v.transmissionMap,wt=It&&!!v.thicknessMap,it=!!v.gradientMap,ct=!!v.alphaMap,At=v.alphaTest>0,Et=!!v.alphaHash,te=!!v.extensions;let Ie=ji;v.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(Ie=n.toneMapping);const tn={shaderID:R,shaderType:v.type,shaderName:v.name,vertexShader:J,fragmentShader:Y,defines:v.defines,customVertexShaderID:H,customFragmentShaderID:Z,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:d,batching:mt,batchingColor:mt&&z._colorsTexture!==null,instancing:vt,instancingColor:vt&&z.instanceColor!==null,instancingMorph:vt&&z.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:Q===null?n.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:hr,alphaToCoverage:!!v.alphaToCoverage,map:Gt,matcap:st,envMap:ft,envMapMode:ft&&N.mapping,envMapCubeUVHeight:T,aoMap:q,lightMap:Ft,bumpMap:dt,normalMap:Dt,displacementMap:u&&yt,emissiveMap:Wt,normalMapObjectSpace:Dt&&v.normalMapType===ad,normalMapTangentSpace:Dt&&v.normalMapType===Ph,metalnessMap:Rt,roughnessMap:G,anisotropy:O,anisotropyMap:St,clearcoat:tt,clearcoatMap:Pt,clearcoatNormalMap:re,clearcoatRoughnessMap:gt,dispersion:rt,iridescence:ut,iridescenceMap:Lt,iridescenceThicknessMap:Xt,sheen:at,sheenColorMap:jt,sheenRoughnessMap:kt,specularMap:le,specularColorMap:ie,specularIntensityMap:Se,transmission:It,transmissionMap:K,thicknessMap:wt,gradientMap:it,opaque:v.transparent===!1&&v.blending===$s&&v.alphaToCoverage===!1,alphaMap:ct,alphaTest:At,alphaHash:Et,combine:v.combine,mapUv:Gt&&_(v.map.channel),aoMapUv:q&&_(v.aoMap.channel),lightMapUv:Ft&&_(v.lightMap.channel),bumpMapUv:dt&&_(v.bumpMap.channel),normalMapUv:Dt&&_(v.normalMap.channel),displacementMapUv:yt&&_(v.displacementMap.channel),emissiveMapUv:Wt&&_(v.emissiveMap.channel),metalnessMapUv:Rt&&_(v.metalnessMap.channel),roughnessMapUv:G&&_(v.roughnessMap.channel),anisotropyMapUv:St&&_(v.anisotropyMap.channel),clearcoatMapUv:Pt&&_(v.clearcoatMap.channel),clearcoatNormalMapUv:re&&_(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:gt&&_(v.clearcoatRoughnessMap.channel),iridescenceMapUv:Lt&&_(v.iridescenceMap.channel),iridescenceThicknessMapUv:Xt&&_(v.iridescenceThicknessMap.channel),sheenColorMapUv:jt&&_(v.sheenColorMap.channel),sheenRoughnessMapUv:kt&&_(v.sheenRoughnessMap.channel),specularMapUv:le&&_(v.specularMap.channel),specularColorMapUv:ie&&_(v.specularColorMap.channel),specularIntensityMapUv:Se&&_(v.specularIntensityMap.channel),transmissionMapUv:K&&_(v.transmissionMap.channel),thicknessMapUv:wt&&_(v.thicknessMap.channel),alphaMapUv:ct&&_(v.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(Dt||O),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!F.attributes.uv&&(Gt||ct),fog:!!L,useFog:v.fog===!0,fogExp2:!!L&&L.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:ht,skinning:z.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:k,morphTextureStride:W,numDirLights:m.directional.length,numPointLights:m.point.length,numSpotLights:m.spot.length,numSpotLightMaps:m.spotLightMap.length,numRectAreaLights:m.rectArea.length,numHemiLights:m.hemi.length,numDirLightShadows:m.directionalShadowMap.length,numPointLightShadows:m.pointShadowMap.length,numSpotLightShadows:m.spotShadowMap.length,numSpotLightShadowsWithMaps:m.numSpotLightShadowsWithMaps,numLightProbes:m.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:v.dithering,shadowMapEnabled:n.shadowMap.enabled&&E.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ie,decodeVideoTexture:Gt&&v.map.isVideoTexture===!0&&he.getTransfer(v.map.colorSpace)===ve,decodeVideoTextureEmissive:Wt&&v.emissiveMap.isVideoTexture===!0&&he.getTransfer(v.emissiveMap.colorSpace)===ve,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===De,flipSided:v.side===dn,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:te&&v.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(te&&v.extensions.multiDraw===!0||mt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return tn.vertexUv1s=c.has(1),tn.vertexUv2s=c.has(2),tn.vertexUv3s=c.has(3),c.clear(),tn}function g(v){const m=[];if(v.shaderID?m.push(v.shaderID):(m.push(v.customVertexShaderID),m.push(v.customFragmentShaderID)),v.defines!==void 0)for(const E in v.defines)m.push(E),m.push(v.defines[E]);return v.isRawShaderMaterial===!1&&(S(m,v),b(m,v),m.push(n.outputColorSpace)),m.push(v.customProgramCacheKey),m.join()}function S(v,m){v.push(m.precision),v.push(m.outputColorSpace),v.push(m.envMapMode),v.push(m.envMapCubeUVHeight),v.push(m.mapUv),v.push(m.alphaMapUv),v.push(m.lightMapUv),v.push(m.aoMapUv),v.push(m.bumpMapUv),v.push(m.normalMapUv),v.push(m.displacementMapUv),v.push(m.emissiveMapUv),v.push(m.metalnessMapUv),v.push(m.roughnessMapUv),v.push(m.anisotropyMapUv),v.push(m.clearcoatMapUv),v.push(m.clearcoatNormalMapUv),v.push(m.clearcoatRoughnessMapUv),v.push(m.iridescenceMapUv),v.push(m.iridescenceThicknessMapUv),v.push(m.sheenColorMapUv),v.push(m.sheenRoughnessMapUv),v.push(m.specularMapUv),v.push(m.specularColorMapUv),v.push(m.specularIntensityMapUv),v.push(m.transmissionMapUv),v.push(m.thicknessMapUv),v.push(m.combine),v.push(m.fogExp2),v.push(m.sizeAttenuation),v.push(m.morphTargetsCount),v.push(m.morphAttributeCount),v.push(m.numDirLights),v.push(m.numPointLights),v.push(m.numSpotLights),v.push(m.numSpotLightMaps),v.push(m.numHemiLights),v.push(m.numRectAreaLights),v.push(m.numDirLightShadows),v.push(m.numPointLightShadows),v.push(m.numSpotLightShadows),v.push(m.numSpotLightShadowsWithMaps),v.push(m.numLightProbes),v.push(m.shadowMapType),v.push(m.toneMapping),v.push(m.numClippingPlanes),v.push(m.numClipIntersection),v.push(m.depthPacking)}function b(v,m){o.disableAll(),m.supportsVertexTextures&&o.enable(0),m.instancing&&o.enable(1),m.instancingColor&&o.enable(2),m.instancingMorph&&o.enable(3),m.matcap&&o.enable(4),m.envMap&&o.enable(5),m.normalMapObjectSpace&&o.enable(6),m.normalMapTangentSpace&&o.enable(7),m.clearcoat&&o.enable(8),m.iridescence&&o.enable(9),m.alphaTest&&o.enable(10),m.vertexColors&&o.enable(11),m.vertexAlphas&&o.enable(12),m.vertexUv1s&&o.enable(13),m.vertexUv2s&&o.enable(14),m.vertexUv3s&&o.enable(15),m.vertexTangents&&o.enable(16),m.anisotropy&&o.enable(17),m.alphaHash&&o.enable(18),m.batching&&o.enable(19),m.dispersion&&o.enable(20),m.batchingColor&&o.enable(21),v.push(o.mask),o.disableAll(),m.fog&&o.enable(0),m.useFog&&o.enable(1),m.flatShading&&o.enable(2),m.logarithmicDepthBuffer&&o.enable(3),m.reverseDepthBuffer&&o.enable(4),m.skinning&&o.enable(5),m.morphTargets&&o.enable(6),m.morphNormals&&o.enable(7),m.morphColors&&o.enable(8),m.premultipliedAlpha&&o.enable(9),m.shadowMapEnabled&&o.enable(10),m.doubleSided&&o.enable(11),m.flipSided&&o.enable(12),m.useDepthPacking&&o.enable(13),m.dithering&&o.enable(14),m.transmission&&o.enable(15),m.sheen&&o.enable(16),m.opaque&&o.enable(17),m.pointsUvs&&o.enable(18),m.decodeVideoTexture&&o.enable(19),m.decodeVideoTextureEmissive&&o.enable(20),m.alphaToCoverage&&o.enable(21),v.push(o.mask)}function M(v){const m=y[v.type];let E;if(m){const I=bn[m];E=fc.clone(I.uniforms)}else E=v.uniforms;return E}function P(v,m){let E;for(let I=0,z=h.length;I<z;I++){const L=h[I];if(L.cacheKey===m){E=L,++E.usedTimes;break}}return E===void 0&&(E=new cg(n,m,v,r),h.push(E)),E}function C(v){if(--v.usedTimes===0){const m=h.indexOf(v);h[m]=h[h.length-1],h.pop(),v.destroy()}}function A(v){l.remove(v)}function U(){l.dispose()}return{getParameters:p,getProgramCacheKey:g,getUniforms:M,acquireProgram:P,releaseProgram:C,releaseShaderCache:A,programs:h,dispose:U}}function pg(){let n=new WeakMap;function t(a){return n.has(a)}function e(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,l){n.get(a)[o]=l}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function mg(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function U0(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function N0(){const n=[];let t=0;const e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function a(f,u,d,y,_,p){let g=n[t];return g===void 0?(g={id:f.id,object:f,geometry:u,material:d,groupOrder:y,renderOrder:f.renderOrder,z:_,group:p},n[t]=g):(g.id=f.id,g.object=f,g.geometry=u,g.material=d,g.groupOrder=y,g.renderOrder=f.renderOrder,g.z=_,g.group=p),t++,g}function o(f,u,d,y,_,p){const g=a(f,u,d,y,_,p);d.transmission>0?i.push(g):d.transparent===!0?s.push(g):e.push(g)}function l(f,u,d,y,_,p){const g=a(f,u,d,y,_,p);d.transmission>0?i.unshift(g):d.transparent===!0?s.unshift(g):e.unshift(g)}function c(f,u){e.length>1&&e.sort(f||mg),i.length>1&&i.sort(u||U0),s.length>1&&s.sort(u||U0)}function h(){for(let f=t,u=n.length;f<u;f++){const d=n[f];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function gg(){let n=new WeakMap;function t(i,s){const r=n.get(i);let a;return r===void 0?(a=new N0,n.set(i,[a])):s>=r.length?(a=new N0,r.push(a)):a=r[s],a}function e(){n=new WeakMap}return{get:t,dispose:e}}function _g(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new X,color:new Mt};break;case"SpotLight":e={position:new X,direction:new X,color:new Mt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new X,color:new Mt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new X,skyColor:new Mt,groundColor:new Mt};break;case"RectAreaLight":e={color:new Mt,position:new X,halfWidth:new X,halfHeight:new X};break}return n[t.id]=e,e}}}function vg(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let yg=0;function xg(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function Mg(n){const t=new _g,e=vg(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new X);const s=new X,r=new oe,a=new oe;function o(c){let h=0,f=0,u=0;for(let v=0;v<9;v++)i.probe[v].set(0,0,0);let d=0,y=0,_=0,p=0,g=0,S=0,b=0,M=0,P=0,C=0,A=0;c.sort(xg);for(let v=0,m=c.length;v<m;v++){const E=c[v],I=E.color,z=E.intensity,L=E.distance,F=E.shadow&&E.shadow.map?E.shadow.map.texture:null;if(E.isAmbientLight)h+=I.r*z,f+=I.g*z,u+=I.b*z;else if(E.isLightProbe){for(let D=0;D<9;D++)i.probe[D].addScaledVector(E.sh.coefficients[D],z);A++}else if(E.isDirectionalLight){const D=t.get(E);if(D.color.copy(E.color).multiplyScalar(E.intensity),E.castShadow){const N=E.shadow,T=e.get(E);T.shadowIntensity=N.intensity,T.shadowBias=N.bias,T.shadowNormalBias=N.normalBias,T.shadowRadius=N.radius,T.shadowMapSize=N.mapSize,i.directionalShadow[d]=T,i.directionalShadowMap[d]=F,i.directionalShadowMatrix[d]=E.shadow.matrix,S++}i.directional[d]=D,d++}else if(E.isSpotLight){const D=t.get(E);D.position.setFromMatrixPosition(E.matrixWorld),D.color.copy(I).multiplyScalar(z),D.distance=L,D.coneCos=Math.cos(E.angle),D.penumbraCos=Math.cos(E.angle*(1-E.penumbra)),D.decay=E.decay,i.spot[_]=D;const N=E.shadow;if(E.map&&(i.spotLightMap[P]=E.map,P++,N.updateMatrices(E),E.castShadow&&C++),i.spotLightMatrix[_]=N.matrix,E.castShadow){const T=e.get(E);T.shadowIntensity=N.intensity,T.shadowBias=N.bias,T.shadowNormalBias=N.normalBias,T.shadowRadius=N.radius,T.shadowMapSize=N.mapSize,i.spotShadow[_]=T,i.spotShadowMap[_]=F,M++}_++}else if(E.isRectAreaLight){const D=t.get(E);D.color.copy(I).multiplyScalar(z),D.halfWidth.set(E.width*.5,0,0),D.halfHeight.set(0,E.height*.5,0),i.rectArea[p]=D,p++}else if(E.isPointLight){const D=t.get(E);if(D.color.copy(E.color).multiplyScalar(E.intensity),D.distance=E.distance,D.decay=E.decay,E.castShadow){const N=E.shadow,T=e.get(E);T.shadowIntensity=N.intensity,T.shadowBias=N.bias,T.shadowNormalBias=N.normalBias,T.shadowRadius=N.radius,T.shadowMapSize=N.mapSize,T.shadowCameraNear=N.camera.near,T.shadowCameraFar=N.camera.far,i.pointShadow[y]=T,i.pointShadowMap[y]=F,i.pointShadowMatrix[y]=E.shadow.matrix,b++}i.point[y]=D,y++}else if(E.isHemisphereLight){const D=t.get(E);D.skyColor.copy(E.color).multiplyScalar(z),D.groundColor.copy(E.groundColor).multiplyScalar(z),i.hemi[g]=D,g++}}p>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=xt.LTC_FLOAT_1,i.rectAreaLTC2=xt.LTC_FLOAT_2):(i.rectAreaLTC1=xt.LTC_HALF_1,i.rectAreaLTC2=xt.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=f,i.ambient[2]=u;const U=i.hash;(U.directionalLength!==d||U.pointLength!==y||U.spotLength!==_||U.rectAreaLength!==p||U.hemiLength!==g||U.numDirectionalShadows!==S||U.numPointShadows!==b||U.numSpotShadows!==M||U.numSpotMaps!==P||U.numLightProbes!==A)&&(i.directional.length=d,i.spot.length=_,i.rectArea.length=p,i.point.length=y,i.hemi.length=g,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.pointShadow.length=b,i.pointShadowMap.length=b,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=S,i.pointShadowMatrix.length=b,i.spotLightMatrix.length=M+P-C,i.spotLightMap.length=P,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=A,U.directionalLength=d,U.pointLength=y,U.spotLength=_,U.rectAreaLength=p,U.hemiLength=g,U.numDirectionalShadows=S,U.numPointShadows=b,U.numSpotShadows=M,U.numSpotMaps=P,U.numLightProbes=A,i.version=yg++)}function l(c,h){let f=0,u=0,d=0,y=0,_=0;const p=h.matrixWorldInverse;for(let g=0,S=c.length;g<S;g++){const b=c[g];if(b.isDirectionalLight){const M=i.directional[f];M.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(p),f++}else if(b.isSpotLight){const M=i.spot[d];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(p),M.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(p),d++}else if(b.isRectAreaLight){const M=i.rectArea[y];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(p),a.identity(),r.copy(b.matrixWorld),r.premultiply(p),a.extractRotation(r),M.halfWidth.set(b.width*.5,0,0),M.halfHeight.set(0,b.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),y++}else if(b.isPointLight){const M=i.point[u];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(p),u++}else if(b.isHemisphereLight){const M=i.hemi[_];M.direction.setFromMatrixPosition(b.matrixWorld),M.direction.transformDirection(p),_++}}}return{setup:o,setupView:l,state:i}}function O0(n){const t=new Mg(n),e=[],i=[];function s(h){c.camera=h,e.length=0,i.length=0}function r(h){e.push(h)}function a(h){i.push(h)}function o(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function bg(n){let t=new WeakMap;function e(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new O0(n),t.set(s,[o])):r>=a.length?(o=new O0(n),a.push(o)):o=a[r],o}function i(){t=new WeakMap}return{get:e,dispose:i}}class Sg extends ur{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=sd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class wg extends ur{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Eg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Tg=`uniform sampler2D shadow_pass;
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
}`;function Ag(n,t,e){let i=new pc;const s=new ot,r=new ot,a=new ue,o=new Sg({depthPacking:rd}),l=new wg,c={},h=e.maxTextureSize,f={[$i]:dn,[dn]:$i,[De]:De},u=new ni({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ot},radius:{value:4}},vertexShader:Eg,fragmentShader:Tg}),d=u.clone();d.defines.HORIZONTAL_PASS=1;const y=new Me;y.setAttribute("position",new fn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new xe(y,u),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=gh;let g=this.type;this.render=function(C,A,U){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||C.length===0)return;const v=n.getRenderTarget(),m=n.getActiveCubeFace(),E=n.getActiveMipmapLevel(),I=n.state;I.setBlending(Ki),I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const z=g!==Ri&&this.type===Ri,L=g===Ri&&this.type!==Ri;for(let F=0,D=C.length;F<D;F++){const N=C[F],T=N.shadow;if(T===void 0){console.warn("THREE.WebGLShadowMap:",N,"has no shadow.");continue}if(T.autoUpdate===!1&&T.needsUpdate===!1)continue;s.copy(T.mapSize);const R=T.getFrameExtents();if(s.multiply(R),r.copy(T.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/R.x),s.x=r.x*R.x,T.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/R.y),s.y=r.y*R.y,T.mapSize.y=r.y)),T.map===null||z===!0||L===!0){const k=this.type!==Ri?{minFilter:In,magFilter:In}:{};T.map!==null&&T.map.dispose(),T.map=new gs(s.x,s.y,k),T.map.texture.name=N.name+".shadowMap",T.camera.updateProjectionMatrix()}n.setRenderTarget(T.map),n.clear();const x=T.getViewportCount();for(let k=0;k<x;k++){const W=T.getViewport(k);a.set(r.x*W.x,r.y*W.y,r.x*W.z,r.y*W.w),I.viewport(a),T.updateMatrices(N,k),i=T.getFrustum(),M(A,U,T.camera,N,this.type)}T.isPointLightShadow!==!0&&this.type===Ri&&S(T,U),T.needsUpdate=!1}g=this.type,p.needsUpdate=!1,n.setRenderTarget(v,m,E)};function S(C,A){const U=t.update(_);u.defines.VSM_SAMPLES!==C.blurSamples&&(u.defines.VSM_SAMPLES=C.blurSamples,d.defines.VSM_SAMPLES=C.blurSamples,u.needsUpdate=!0,d.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new gs(s.x,s.y)),u.uniforms.shadow_pass.value=C.map.texture,u.uniforms.resolution.value=C.mapSize,u.uniforms.radius.value=C.radius,n.setRenderTarget(C.mapPass),n.clear(),n.renderBufferDirect(A,null,U,u,_,null),d.uniforms.shadow_pass.value=C.mapPass.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,n.setRenderTarget(C.map),n.clear(),n.renderBufferDirect(A,null,U,d,_,null)}function b(C,A,U,v){let m=null;const E=U.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(E!==void 0)m=E;else if(m=U.isPointLight===!0?l:o,n.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const I=m.uuid,z=A.uuid;let L=c[I];L===void 0&&(L={},c[I]=L);let F=L[z];F===void 0&&(F=m.clone(),L[z]=F,A.addEventListener("dispose",P)),m=F}if(m.visible=A.visible,m.wireframe=A.wireframe,v===Ri?m.side=A.shadowSide!==null?A.shadowSide:A.side:m.side=A.shadowSide!==null?A.shadowSide:f[A.side],m.alphaMap=A.alphaMap,m.alphaTest=A.alphaTest,m.map=A.map,m.clipShadows=A.clipShadows,m.clippingPlanes=A.clippingPlanes,m.clipIntersection=A.clipIntersection,m.displacementMap=A.displacementMap,m.displacementScale=A.displacementScale,m.displacementBias=A.displacementBias,m.wireframeLinewidth=A.wireframeLinewidth,m.linewidth=A.linewidth,U.isPointLight===!0&&m.isMeshDistanceMaterial===!0){const I=n.properties.get(m);I.light=U}return m}function M(C,A,U,v,m){if(C.visible===!1)return;if(C.layers.test(A.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&m===Ri)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,C.matrixWorld);const z=t.update(C),L=C.material;if(Array.isArray(L)){const F=z.groups;for(let D=0,N=F.length;D<N;D++){const T=F[D],R=L[T.materialIndex];if(R&&R.visible){const x=b(C,R,v,m);C.onBeforeShadow(n,C,A,U,z,x,T),n.renderBufferDirect(U,null,z,x,C,T),C.onAfterShadow(n,C,A,U,z,x,T)}}}else if(L.visible){const F=b(C,L,v,m);C.onBeforeShadow(n,C,A,U,z,F,null),n.renderBufferDirect(U,null,z,F,C,null),C.onAfterShadow(n,C,A,U,z,F,null)}}const I=C.children;for(let z=0,L=I.length;z<L;z++)M(I[z],A,U,v,m)}function P(C){C.target.removeEventListener("dispose",P);for(const U in c){const v=c[U],m=C.target.uuid;m in v&&(v[m].dispose(),delete v[m])}}}const Cg={[ll]:cl,[hl]:fl,[ul]:pl,[er]:dl,[cl]:ll,[fl]:hl,[pl]:ul,[dl]:er};function Rg(n,t){function e(){let K=!1;const wt=new ue;let it=null;const ct=new ue(0,0,0,0);return{setMask:function(At){it!==At&&!K&&(n.colorMask(At,At,At,At),it=At)},setLocked:function(At){K=At},setClear:function(At,Et,te,Ie,tn){tn===!0&&(At*=Ie,Et*=Ie,te*=Ie),wt.set(At,Et,te,Ie),ct.equals(wt)===!1&&(n.clearColor(At,Et,te,Ie),ct.copy(wt))},reset:function(){K=!1,it=null,ct.set(-1,0,0,0)}}}function i(){let K=!1,wt=!1,it=null,ct=null,At=null;return{setReversed:function(Et){if(wt!==Et){const te=t.get("EXT_clip_control");wt?te.clipControlEXT(te.LOWER_LEFT_EXT,te.ZERO_TO_ONE_EXT):te.clipControlEXT(te.LOWER_LEFT_EXT,te.NEGATIVE_ONE_TO_ONE_EXT);const Ie=At;At=null,this.setClear(Ie)}wt=Et},getReversed:function(){return wt},setTest:function(Et){Et?Q(n.DEPTH_TEST):ht(n.DEPTH_TEST)},setMask:function(Et){it!==Et&&!K&&(n.depthMask(Et),it=Et)},setFunc:function(Et){if(wt&&(Et=Cg[Et]),ct!==Et){switch(Et){case ll:n.depthFunc(n.NEVER);break;case cl:n.depthFunc(n.ALWAYS);break;case hl:n.depthFunc(n.LESS);break;case er:n.depthFunc(n.LEQUAL);break;case ul:n.depthFunc(n.EQUAL);break;case dl:n.depthFunc(n.GEQUAL);break;case fl:n.depthFunc(n.GREATER);break;case pl:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ct=Et}},setLocked:function(Et){K=Et},setClear:function(Et){At!==Et&&(wt&&(Et=1-Et),n.clearDepth(Et),At=Et)},reset:function(){K=!1,it=null,ct=null,At=null,wt=!1}}}function s(){let K=!1,wt=null,it=null,ct=null,At=null,Et=null,te=null,Ie=null,tn=null;return{setTest:function(ge){K||(ge?Q(n.STENCIL_TEST):ht(n.STENCIL_TEST))},setMask:function(ge){wt!==ge&&!K&&(n.stencilMask(ge),wt=ge)},setFunc:function(ge,Yn,Mi){(it!==ge||ct!==Yn||At!==Mi)&&(n.stencilFunc(ge,Yn,Mi),it=ge,ct=Yn,At=Mi)},setOp:function(ge,Yn,Mi){(Et!==ge||te!==Yn||Ie!==Mi)&&(n.stencilOp(ge,Yn,Mi),Et=ge,te=Yn,Ie=Mi)},setLocked:function(ge){K=ge},setClear:function(ge){tn!==ge&&(n.clearStencil(ge),tn=ge)},reset:function(){K=!1,wt=null,it=null,ct=null,At=null,Et=null,te=null,Ie=null,tn=null}}}const r=new e,a=new i,o=new s,l=new WeakMap,c=new WeakMap;let h={},f={},u=new WeakMap,d=[],y=null,_=!1,p=null,g=null,S=null,b=null,M=null,P=null,C=null,A=new Mt(0,0,0),U=0,v=!1,m=null,E=null,I=null,z=null,L=null;const F=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let D=!1,N=0;const T=n.getParameter(n.VERSION);T.indexOf("WebGL")!==-1?(N=parseFloat(/^WebGL (\d)/.exec(T)[1]),D=N>=1):T.indexOf("OpenGL ES")!==-1&&(N=parseFloat(/^OpenGL ES (\d)/.exec(T)[1]),D=N>=2);let R=null,x={};const k=n.getParameter(n.SCISSOR_BOX),W=n.getParameter(n.VIEWPORT),J=new ue().fromArray(k),Y=new ue().fromArray(W);function H(K,wt,it,ct){const At=new Uint8Array(4),Et=n.createTexture();n.bindTexture(K,Et),n.texParameteri(K,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(K,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let te=0;te<it;te++)K===n.TEXTURE_3D||K===n.TEXTURE_2D_ARRAY?n.texImage3D(wt,0,n.RGBA,1,1,ct,0,n.RGBA,n.UNSIGNED_BYTE,At):n.texImage2D(wt+te,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,At);return Et}const Z={};Z[n.TEXTURE_2D]=H(n.TEXTURE_2D,n.TEXTURE_2D,1),Z[n.TEXTURE_CUBE_MAP]=H(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[n.TEXTURE_2D_ARRAY]=H(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Z[n.TEXTURE_3D]=H(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),Q(n.DEPTH_TEST),a.setFunc(er),dt(!1),Dt(Gc),Q(n.CULL_FACE),q(Ki);function Q(K){h[K]!==!0&&(n.enable(K),h[K]=!0)}function ht(K){h[K]!==!1&&(n.disable(K),h[K]=!1)}function vt(K,wt){return f[K]!==wt?(n.bindFramebuffer(K,wt),f[K]=wt,K===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=wt),K===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=wt),!0):!1}function mt(K,wt){let it=d,ct=!1;if(K){it=u.get(wt),it===void 0&&(it=[],u.set(wt,it));const At=K.textures;if(it.length!==At.length||it[0]!==n.COLOR_ATTACHMENT0){for(let Et=0,te=At.length;Et<te;Et++)it[Et]=n.COLOR_ATTACHMENT0+Et;it.length=At.length,ct=!0}}else it[0]!==n.BACK&&(it[0]=n.BACK,ct=!0);ct&&n.drawBuffers(it)}function Gt(K){return y!==K?(n.useProgram(K),y=K,!0):!1}const st={[cs]:n.FUNC_ADD,[Lu]:n.FUNC_SUBTRACT,[ku]:n.FUNC_REVERSE_SUBTRACT};st[Iu]=n.MIN,st[Uu]=n.MAX;const ft={[Nu]:n.ZERO,[Ou]:n.ONE,[Fu]:n.SRC_COLOR,[al]:n.SRC_ALPHA,[Wu]:n.SRC_ALPHA_SATURATE,[Gu]:n.DST_COLOR,[Bu]:n.DST_ALPHA,[zu]:n.ONE_MINUS_SRC_COLOR,[ol]:n.ONE_MINUS_SRC_ALPHA,[Vu]:n.ONE_MINUS_DST_COLOR,[Hu]:n.ONE_MINUS_DST_ALPHA,[Xu]:n.CONSTANT_COLOR,[Yu]:n.ONE_MINUS_CONSTANT_COLOR,[qu]:n.CONSTANT_ALPHA,[Zu]:n.ONE_MINUS_CONSTANT_ALPHA};function q(K,wt,it,ct,At,Et,te,Ie,tn,ge){if(K===Ki){_===!0&&(ht(n.BLEND),_=!1);return}if(_===!1&&(Q(n.BLEND),_=!0),K!==Du){if(K!==p||ge!==v){if((g!==cs||M!==cs)&&(n.blendEquation(n.FUNC_ADD),g=cs,M=cs),ge)switch(K){case $s:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case rl:n.blendFunc(n.ONE,n.ONE);break;case Vc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Wc:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",K);break}else switch(K){case $s:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case rl:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Vc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Wc:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",K);break}S=null,b=null,P=null,C=null,A.set(0,0,0),U=0,p=K,v=ge}return}At=At||wt,Et=Et||it,te=te||ct,(wt!==g||At!==M)&&(n.blendEquationSeparate(st[wt],st[At]),g=wt,M=At),(it!==S||ct!==b||Et!==P||te!==C)&&(n.blendFuncSeparate(ft[it],ft[ct],ft[Et],ft[te]),S=it,b=ct,P=Et,C=te),(Ie.equals(A)===!1||tn!==U)&&(n.blendColor(Ie.r,Ie.g,Ie.b,tn),A.copy(Ie),U=tn),p=K,v=!1}function Ft(K,wt){K.side===De?ht(n.CULL_FACE):Q(n.CULL_FACE);let it=K.side===dn;wt&&(it=!it),dt(it),K.blending===$s&&K.transparent===!1?q(Ki):q(K.blending,K.blendEquation,K.blendSrc,K.blendDst,K.blendEquationAlpha,K.blendSrcAlpha,K.blendDstAlpha,K.blendColor,K.blendAlpha,K.premultipliedAlpha),a.setFunc(K.depthFunc),a.setTest(K.depthTest),a.setMask(K.depthWrite),r.setMask(K.colorWrite);const ct=K.stencilWrite;o.setTest(ct),ct&&(o.setMask(K.stencilWriteMask),o.setFunc(K.stencilFunc,K.stencilRef,K.stencilFuncMask),o.setOp(K.stencilFail,K.stencilZFail,K.stencilZPass)),Wt(K.polygonOffset,K.polygonOffsetFactor,K.polygonOffsetUnits),K.alphaToCoverage===!0?Q(n.SAMPLE_ALPHA_TO_COVERAGE):ht(n.SAMPLE_ALPHA_TO_COVERAGE)}function dt(K){m!==K&&(K?n.frontFace(n.CW):n.frontFace(n.CCW),m=K)}function Dt(K){K!==Ru?(Q(n.CULL_FACE),K!==E&&(K===Gc?n.cullFace(n.BACK):K===Pu?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ht(n.CULL_FACE),E=K}function yt(K){K!==I&&(D&&n.lineWidth(K),I=K)}function Wt(K,wt,it){K?(Q(n.POLYGON_OFFSET_FILL),(z!==wt||L!==it)&&(n.polygonOffset(wt,it),z=wt,L=it)):ht(n.POLYGON_OFFSET_FILL)}function Rt(K){K?Q(n.SCISSOR_TEST):ht(n.SCISSOR_TEST)}function G(K){K===void 0&&(K=n.TEXTURE0+F-1),R!==K&&(n.activeTexture(K),R=K)}function O(K,wt,it){it===void 0&&(R===null?it=n.TEXTURE0+F-1:it=R);let ct=x[it];ct===void 0&&(ct={type:void 0,texture:void 0},x[it]=ct),(ct.type!==K||ct.texture!==wt)&&(R!==it&&(n.activeTexture(it),R=it),n.bindTexture(K,wt||Z[K]),ct.type=K,ct.texture=wt)}function tt(){const K=x[R];K!==void 0&&K.type!==void 0&&(n.bindTexture(K.type,null),K.type=void 0,K.texture=void 0)}function rt(){try{n.compressedTexImage2D.apply(n,arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function ut(){try{n.compressedTexImage3D.apply(n,arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function at(){try{n.texSubImage2D.apply(n,arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function It(){try{n.texSubImage3D.apply(n,arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function St(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function Pt(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function re(){try{n.texStorage2D.apply(n,arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function gt(){try{n.texStorage3D.apply(n,arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function Lt(){try{n.texImage2D.apply(n,arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function Xt(){try{n.texImage3D.apply(n,arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function jt(K){J.equals(K)===!1&&(n.scissor(K.x,K.y,K.z,K.w),J.copy(K))}function kt(K){Y.equals(K)===!1&&(n.viewport(K.x,K.y,K.z,K.w),Y.copy(K))}function le(K,wt){let it=c.get(wt);it===void 0&&(it=new WeakMap,c.set(wt,it));let ct=it.get(K);ct===void 0&&(ct=n.getUniformBlockIndex(wt,K.name),it.set(K,ct))}function ie(K,wt){const ct=c.get(wt).get(K);l.get(wt)!==ct&&(n.uniformBlockBinding(wt,ct,K.__bindingPointIndex),l.set(wt,ct))}function Se(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},R=null,x={},f={},u=new WeakMap,d=[],y=null,_=!1,p=null,g=null,S=null,b=null,M=null,P=null,C=null,A=new Mt(0,0,0),U=0,v=!1,m=null,E=null,I=null,z=null,L=null,J.set(0,0,n.canvas.width,n.canvas.height),Y.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:Q,disable:ht,bindFramebuffer:vt,drawBuffers:mt,useProgram:Gt,setBlending:q,setMaterial:Ft,setFlipSided:dt,setCullFace:Dt,setLineWidth:yt,setPolygonOffset:Wt,setScissorTest:Rt,activeTexture:G,bindTexture:O,unbindTexture:tt,compressedTexImage2D:rt,compressedTexImage3D:ut,texImage2D:Lt,texImage3D:Xt,updateUBOMapping:le,uniformBlockBinding:ie,texStorage2D:re,texStorage3D:gt,texSubImage2D:at,texSubImage3D:It,compressedTexSubImage2D:St,compressedTexSubImage3D:Pt,scissor:jt,viewport:kt,reset:Se}}function F0(n,t,e,i){const s=Pg(i);switch(e){case wh:return n*t;case Th:return n*t;case Ah:return n*t*2;case ac:return n*t/s.components*s.byteLength;case oc:return n*t/s.components*s.byteLength;case Ch:return n*t*2/s.components*s.byteLength;case lc:return n*t*2/s.components*s.byteLength;case Eh:return n*t*3/s.components*s.byteLength;case Wn:return n*t*4/s.components*s.byteLength;case cc:return n*t*4/s.components*s.byteLength;case Oa:case Fa:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case za:case Ba:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case yl:case Ml:return Math.max(n,16)*Math.max(t,8)/4;case vl:case xl:return Math.max(n,8)*Math.max(t,8)/2;case bl:case Sl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case wl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case El:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Tl:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case Al:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case Cl:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Rl:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case Pl:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case Dl:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case Ll:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case kl:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case Il:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case Ul:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case Nl:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case Ol:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case Fl:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case Ha:case zl:case Bl:return Math.ceil(n/4)*Math.ceil(t/4)*16;case Rh:case Hl:return Math.ceil(n/4)*Math.ceil(t/4)*8;case Gl:case Vl:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Pg(n){switch(n){case Ui:case Mh:return{byteLength:1,components:1};case zr:case bh:case qr:return{byteLength:2,components:1};case sc:case rc:return{byteLength:2,components:4};case ms:case ic:case ui:return{byteLength:4,components:1};case Sh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function Dg(n,t,e,i,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ot,h=new WeakMap;let f;const u=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(G,O){return d?new OffscreenCanvas(G,O):$a("canvas")}function _(G,O,tt){let rt=1;const ut=Rt(G);if((ut.width>tt||ut.height>tt)&&(rt=tt/Math.max(ut.width,ut.height)),rt<1)if(typeof HTMLImageElement<"u"&&G instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&G instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&G instanceof ImageBitmap||typeof VideoFrame<"u"&&G instanceof VideoFrame){const at=Math.floor(rt*ut.width),It=Math.floor(rt*ut.height);f===void 0&&(f=y(at,It));const St=O?y(at,It):f;return St.width=at,St.height=It,St.getContext("2d").drawImage(G,0,0,at,It),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ut.width+"x"+ut.height+") to ("+at+"x"+It+")."),St}else return"data"in G&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ut.width+"x"+ut.height+")."),G;return G}function p(G){return G.generateMipmaps}function g(G){n.generateMipmap(G)}function S(G){return G.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:G.isWebGL3DRenderTarget?n.TEXTURE_3D:G.isWebGLArrayRenderTarget||G.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function b(G,O,tt,rt,ut=!1){if(G!==null){if(n[G]!==void 0)return n[G];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+G+"'")}let at=O;if(O===n.RED&&(tt===n.FLOAT&&(at=n.R32F),tt===n.HALF_FLOAT&&(at=n.R16F),tt===n.UNSIGNED_BYTE&&(at=n.R8)),O===n.RED_INTEGER&&(tt===n.UNSIGNED_BYTE&&(at=n.R8UI),tt===n.UNSIGNED_SHORT&&(at=n.R16UI),tt===n.UNSIGNED_INT&&(at=n.R32UI),tt===n.BYTE&&(at=n.R8I),tt===n.SHORT&&(at=n.R16I),tt===n.INT&&(at=n.R32I)),O===n.RG&&(tt===n.FLOAT&&(at=n.RG32F),tt===n.HALF_FLOAT&&(at=n.RG16F),tt===n.UNSIGNED_BYTE&&(at=n.RG8)),O===n.RG_INTEGER&&(tt===n.UNSIGNED_BYTE&&(at=n.RG8UI),tt===n.UNSIGNED_SHORT&&(at=n.RG16UI),tt===n.UNSIGNED_INT&&(at=n.RG32UI),tt===n.BYTE&&(at=n.RG8I),tt===n.SHORT&&(at=n.RG16I),tt===n.INT&&(at=n.RG32I)),O===n.RGB_INTEGER&&(tt===n.UNSIGNED_BYTE&&(at=n.RGB8UI),tt===n.UNSIGNED_SHORT&&(at=n.RGB16UI),tt===n.UNSIGNED_INT&&(at=n.RGB32UI),tt===n.BYTE&&(at=n.RGB8I),tt===n.SHORT&&(at=n.RGB16I),tt===n.INT&&(at=n.RGB32I)),O===n.RGBA_INTEGER&&(tt===n.UNSIGNED_BYTE&&(at=n.RGBA8UI),tt===n.UNSIGNED_SHORT&&(at=n.RGBA16UI),tt===n.UNSIGNED_INT&&(at=n.RGBA32UI),tt===n.BYTE&&(at=n.RGBA8I),tt===n.SHORT&&(at=n.RGBA16I),tt===n.INT&&(at=n.RGBA32I)),O===n.RGB&&tt===n.UNSIGNED_INT_5_9_9_9_REV&&(at=n.RGB9_E5),O===n.RGBA){const It=ut?so:he.getTransfer(rt);tt===n.FLOAT&&(at=n.RGBA32F),tt===n.HALF_FLOAT&&(at=n.RGBA16F),tt===n.UNSIGNED_BYTE&&(at=It===ve?n.SRGB8_ALPHA8:n.RGBA8),tt===n.UNSIGNED_SHORT_4_4_4_4&&(at=n.RGBA4),tt===n.UNSIGNED_SHORT_5_5_5_1&&(at=n.RGB5_A1)}return(at===n.R16F||at===n.R32F||at===n.RG16F||at===n.RG32F||at===n.RGBA16F||at===n.RGBA32F)&&t.get("EXT_color_buffer_float"),at}function M(G,O){let tt;return G?O===null||O===ms||O===sr?tt=n.DEPTH24_STENCIL8:O===ui?tt=n.DEPTH32F_STENCIL8:O===zr&&(tt=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):O===null||O===ms||O===sr?tt=n.DEPTH_COMPONENT24:O===ui?tt=n.DEPTH_COMPONENT32F:O===zr&&(tt=n.DEPTH_COMPONENT16),tt}function P(G,O){return p(G)===!0||G.isFramebufferTexture&&G.minFilter!==In&&G.minFilter!==Qn?Math.log2(Math.max(O.width,O.height))+1:G.mipmaps!==void 0&&G.mipmaps.length>0?G.mipmaps.length:G.isCompressedTexture&&Array.isArray(G.image)?O.mipmaps.length:1}function C(G){const O=G.target;O.removeEventListener("dispose",C),U(O),O.isVideoTexture&&h.delete(O)}function A(G){const O=G.target;O.removeEventListener("dispose",A),m(O)}function U(G){const O=i.get(G);if(O.__webglInit===void 0)return;const tt=G.source,rt=u.get(tt);if(rt){const ut=rt[O.__cacheKey];ut.usedTimes--,ut.usedTimes===0&&v(G),Object.keys(rt).length===0&&u.delete(tt)}i.remove(G)}function v(G){const O=i.get(G);n.deleteTexture(O.__webglTexture);const tt=G.source,rt=u.get(tt);delete rt[O.__cacheKey],a.memory.textures--}function m(G){const O=i.get(G);if(G.depthTexture&&(G.depthTexture.dispose(),i.remove(G.depthTexture)),G.isWebGLCubeRenderTarget)for(let rt=0;rt<6;rt++){if(Array.isArray(O.__webglFramebuffer[rt]))for(let ut=0;ut<O.__webglFramebuffer[rt].length;ut++)n.deleteFramebuffer(O.__webglFramebuffer[rt][ut]);else n.deleteFramebuffer(O.__webglFramebuffer[rt]);O.__webglDepthbuffer&&n.deleteRenderbuffer(O.__webglDepthbuffer[rt])}else{if(Array.isArray(O.__webglFramebuffer))for(let rt=0;rt<O.__webglFramebuffer.length;rt++)n.deleteFramebuffer(O.__webglFramebuffer[rt]);else n.deleteFramebuffer(O.__webglFramebuffer);if(O.__webglDepthbuffer&&n.deleteRenderbuffer(O.__webglDepthbuffer),O.__webglMultisampledFramebuffer&&n.deleteFramebuffer(O.__webglMultisampledFramebuffer),O.__webglColorRenderbuffer)for(let rt=0;rt<O.__webglColorRenderbuffer.length;rt++)O.__webglColorRenderbuffer[rt]&&n.deleteRenderbuffer(O.__webglColorRenderbuffer[rt]);O.__webglDepthRenderbuffer&&n.deleteRenderbuffer(O.__webglDepthRenderbuffer)}const tt=G.textures;for(let rt=0,ut=tt.length;rt<ut;rt++){const at=i.get(tt[rt]);at.__webglTexture&&(n.deleteTexture(at.__webglTexture),a.memory.textures--),i.remove(tt[rt])}i.remove(G)}let E=0;function I(){E=0}function z(){const G=E;return G>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+G+" texture units while this GPU supports only "+s.maxTextures),E+=1,G}function L(G){const O=[];return O.push(G.wrapS),O.push(G.wrapT),O.push(G.wrapR||0),O.push(G.magFilter),O.push(G.minFilter),O.push(G.anisotropy),O.push(G.internalFormat),O.push(G.format),O.push(G.type),O.push(G.generateMipmaps),O.push(G.premultiplyAlpha),O.push(G.flipY),O.push(G.unpackAlignment),O.push(G.colorSpace),O.join()}function F(G,O){const tt=i.get(G);if(G.isVideoTexture&&yt(G),G.isRenderTargetTexture===!1&&G.version>0&&tt.__version!==G.version){const rt=G.image;if(rt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(rt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(tt,G,O);return}}e.bindTexture(n.TEXTURE_2D,tt.__webglTexture,n.TEXTURE0+O)}function D(G,O){const tt=i.get(G);if(G.version>0&&tt.__version!==G.version){Y(tt,G,O);return}e.bindTexture(n.TEXTURE_2D_ARRAY,tt.__webglTexture,n.TEXTURE0+O)}function N(G,O){const tt=i.get(G);if(G.version>0&&tt.__version!==G.version){Y(tt,G,O);return}e.bindTexture(n.TEXTURE_3D,tt.__webglTexture,n.TEXTURE0+O)}function T(G,O){const tt=i.get(G);if(G.version>0&&tt.__version!==G.version){H(tt,G,O);return}e.bindTexture(n.TEXTURE_CUBE_MAP,tt.__webglTexture,n.TEXTURE0+O)}const R={[Ka]:n.REPEAT,[us]:n.CLAMP_TO_EDGE,[_l]:n.MIRRORED_REPEAT},x={[In]:n.NEAREST,[id]:n.NEAREST_MIPMAP_NEAREST,[ea]:n.NEAREST_MIPMAP_LINEAR,[Qn]:n.LINEAR,[mo]:n.LINEAR_MIPMAP_NEAREST,[ds]:n.LINEAR_MIPMAP_LINEAR},k={[od]:n.NEVER,[fd]:n.ALWAYS,[ld]:n.LESS,[Dh]:n.LEQUAL,[cd]:n.EQUAL,[dd]:n.GEQUAL,[hd]:n.GREATER,[ud]:n.NOTEQUAL};function W(G,O){if(O.type===ui&&t.has("OES_texture_float_linear")===!1&&(O.magFilter===Qn||O.magFilter===mo||O.magFilter===ea||O.magFilter===ds||O.minFilter===Qn||O.minFilter===mo||O.minFilter===ea||O.minFilter===ds)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(G,n.TEXTURE_WRAP_S,R[O.wrapS]),n.texParameteri(G,n.TEXTURE_WRAP_T,R[O.wrapT]),(G===n.TEXTURE_3D||G===n.TEXTURE_2D_ARRAY)&&n.texParameteri(G,n.TEXTURE_WRAP_R,R[O.wrapR]),n.texParameteri(G,n.TEXTURE_MAG_FILTER,x[O.magFilter]),n.texParameteri(G,n.TEXTURE_MIN_FILTER,x[O.minFilter]),O.compareFunction&&(n.texParameteri(G,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(G,n.TEXTURE_COMPARE_FUNC,k[O.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(O.magFilter===In||O.minFilter!==ea&&O.minFilter!==ds||O.type===ui&&t.has("OES_texture_float_linear")===!1)return;if(O.anisotropy>1||i.get(O).__currentAnisotropy){const tt=t.get("EXT_texture_filter_anisotropic");n.texParameterf(G,tt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(O.anisotropy,s.getMaxAnisotropy())),i.get(O).__currentAnisotropy=O.anisotropy}}}function J(G,O){let tt=!1;G.__webglInit===void 0&&(G.__webglInit=!0,O.addEventListener("dispose",C));const rt=O.source;let ut=u.get(rt);ut===void 0&&(ut={},u.set(rt,ut));const at=L(O);if(at!==G.__cacheKey){ut[at]===void 0&&(ut[at]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,tt=!0),ut[at].usedTimes++;const It=ut[G.__cacheKey];It!==void 0&&(ut[G.__cacheKey].usedTimes--,It.usedTimes===0&&v(O)),G.__cacheKey=at,G.__webglTexture=ut[at].texture}return tt}function Y(G,O,tt){let rt=n.TEXTURE_2D;(O.isDataArrayTexture||O.isCompressedArrayTexture)&&(rt=n.TEXTURE_2D_ARRAY),O.isData3DTexture&&(rt=n.TEXTURE_3D);const ut=J(G,O),at=O.source;e.bindTexture(rt,G.__webglTexture,n.TEXTURE0+tt);const It=i.get(at);if(at.version!==It.__version||ut===!0){e.activeTexture(n.TEXTURE0+tt);const St=he.getPrimaries(he.workingColorSpace),Pt=O.colorSpace===ci?null:he.getPrimaries(O.colorSpace),re=O.colorSpace===ci||St===Pt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,O.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,O.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,re);let gt=_(O.image,!1,s.maxTextureSize);gt=Wt(O,gt);const Lt=r.convert(O.format,O.colorSpace),Xt=r.convert(O.type);let jt=b(O.internalFormat,Lt,Xt,O.colorSpace,O.isVideoTexture);W(rt,O);let kt;const le=O.mipmaps,ie=O.isVideoTexture!==!0,Se=It.__version===void 0||ut===!0,K=at.dataReady,wt=P(O,gt);if(O.isDepthTexture)jt=M(O.format===rr,O.type),Se&&(ie?e.texStorage2D(n.TEXTURE_2D,1,jt,gt.width,gt.height):e.texImage2D(n.TEXTURE_2D,0,jt,gt.width,gt.height,0,Lt,Xt,null));else if(O.isDataTexture)if(le.length>0){ie&&Se&&e.texStorage2D(n.TEXTURE_2D,wt,jt,le[0].width,le[0].height);for(let it=0,ct=le.length;it<ct;it++)kt=le[it],ie?K&&e.texSubImage2D(n.TEXTURE_2D,it,0,0,kt.width,kt.height,Lt,Xt,kt.data):e.texImage2D(n.TEXTURE_2D,it,jt,kt.width,kt.height,0,Lt,Xt,kt.data);O.generateMipmaps=!1}else ie?(Se&&e.texStorage2D(n.TEXTURE_2D,wt,jt,gt.width,gt.height),K&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,gt.width,gt.height,Lt,Xt,gt.data)):e.texImage2D(n.TEXTURE_2D,0,jt,gt.width,gt.height,0,Lt,Xt,gt.data);else if(O.isCompressedTexture)if(O.isCompressedArrayTexture){ie&&Se&&e.texStorage3D(n.TEXTURE_2D_ARRAY,wt,jt,le[0].width,le[0].height,gt.depth);for(let it=0,ct=le.length;it<ct;it++)if(kt=le[it],O.format!==Wn)if(Lt!==null)if(ie){if(K)if(O.layerUpdates.size>0){const At=F0(kt.width,kt.height,O.format,O.type);for(const Et of O.layerUpdates){const te=kt.data.subarray(Et*At/kt.data.BYTES_PER_ELEMENT,(Et+1)*At/kt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,it,0,0,Et,kt.width,kt.height,1,Lt,te)}O.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,it,0,0,0,kt.width,kt.height,gt.depth,Lt,kt.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,it,jt,kt.width,kt.height,gt.depth,0,kt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ie?K&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,it,0,0,0,kt.width,kt.height,gt.depth,Lt,Xt,kt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,it,jt,kt.width,kt.height,gt.depth,0,Lt,Xt,kt.data)}else{ie&&Se&&e.texStorage2D(n.TEXTURE_2D,wt,jt,le[0].width,le[0].height);for(let it=0,ct=le.length;it<ct;it++)kt=le[it],O.format!==Wn?Lt!==null?ie?K&&e.compressedTexSubImage2D(n.TEXTURE_2D,it,0,0,kt.width,kt.height,Lt,kt.data):e.compressedTexImage2D(n.TEXTURE_2D,it,jt,kt.width,kt.height,0,kt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ie?K&&e.texSubImage2D(n.TEXTURE_2D,it,0,0,kt.width,kt.height,Lt,Xt,kt.data):e.texImage2D(n.TEXTURE_2D,it,jt,kt.width,kt.height,0,Lt,Xt,kt.data)}else if(O.isDataArrayTexture)if(ie){if(Se&&e.texStorage3D(n.TEXTURE_2D_ARRAY,wt,jt,gt.width,gt.height,gt.depth),K)if(O.layerUpdates.size>0){const it=F0(gt.width,gt.height,O.format,O.type);for(const ct of O.layerUpdates){const At=gt.data.subarray(ct*it/gt.data.BYTES_PER_ELEMENT,(ct+1)*it/gt.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ct,gt.width,gt.height,1,Lt,Xt,At)}O.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,gt.width,gt.height,gt.depth,Lt,Xt,gt.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,jt,gt.width,gt.height,gt.depth,0,Lt,Xt,gt.data);else if(O.isData3DTexture)ie?(Se&&e.texStorage3D(n.TEXTURE_3D,wt,jt,gt.width,gt.height,gt.depth),K&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,gt.width,gt.height,gt.depth,Lt,Xt,gt.data)):e.texImage3D(n.TEXTURE_3D,0,jt,gt.width,gt.height,gt.depth,0,Lt,Xt,gt.data);else if(O.isFramebufferTexture){if(Se)if(ie)e.texStorage2D(n.TEXTURE_2D,wt,jt,gt.width,gt.height);else{let it=gt.width,ct=gt.height;for(let At=0;At<wt;At++)e.texImage2D(n.TEXTURE_2D,At,jt,it,ct,0,Lt,Xt,null),it>>=1,ct>>=1}}else if(le.length>0){if(ie&&Se){const it=Rt(le[0]);e.texStorage2D(n.TEXTURE_2D,wt,jt,it.width,it.height)}for(let it=0,ct=le.length;it<ct;it++)kt=le[it],ie?K&&e.texSubImage2D(n.TEXTURE_2D,it,0,0,Lt,Xt,kt):e.texImage2D(n.TEXTURE_2D,it,jt,Lt,Xt,kt);O.generateMipmaps=!1}else if(ie){if(Se){const it=Rt(gt);e.texStorage2D(n.TEXTURE_2D,wt,jt,it.width,it.height)}K&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,Lt,Xt,gt)}else e.texImage2D(n.TEXTURE_2D,0,jt,Lt,Xt,gt);p(O)&&g(rt),It.__version=at.version,O.onUpdate&&O.onUpdate(O)}G.__version=O.version}function H(G,O,tt){if(O.image.length!==6)return;const rt=J(G,O),ut=O.source;e.bindTexture(n.TEXTURE_CUBE_MAP,G.__webglTexture,n.TEXTURE0+tt);const at=i.get(ut);if(ut.version!==at.__version||rt===!0){e.activeTexture(n.TEXTURE0+tt);const It=he.getPrimaries(he.workingColorSpace),St=O.colorSpace===ci?null:he.getPrimaries(O.colorSpace),Pt=O.colorSpace===ci||It===St?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,O.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,O.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pt);const re=O.isCompressedTexture||O.image[0].isCompressedTexture,gt=O.image[0]&&O.image[0].isDataTexture,Lt=[];for(let ct=0;ct<6;ct++)!re&&!gt?Lt[ct]=_(O.image[ct],!0,s.maxCubemapSize):Lt[ct]=gt?O.image[ct].image:O.image[ct],Lt[ct]=Wt(O,Lt[ct]);const Xt=Lt[0],jt=r.convert(O.format,O.colorSpace),kt=r.convert(O.type),le=b(O.internalFormat,jt,kt,O.colorSpace),ie=O.isVideoTexture!==!0,Se=at.__version===void 0||rt===!0,K=ut.dataReady;let wt=P(O,Xt);W(n.TEXTURE_CUBE_MAP,O);let it;if(re){ie&&Se&&e.texStorage2D(n.TEXTURE_CUBE_MAP,wt,le,Xt.width,Xt.height);for(let ct=0;ct<6;ct++){it=Lt[ct].mipmaps;for(let At=0;At<it.length;At++){const Et=it[At];O.format!==Wn?jt!==null?ie?K&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,At,0,0,Et.width,Et.height,jt,Et.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,At,le,Et.width,Et.height,0,Et.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ie?K&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,At,0,0,Et.width,Et.height,jt,kt,Et.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,At,le,Et.width,Et.height,0,jt,kt,Et.data)}}}else{if(it=O.mipmaps,ie&&Se){it.length>0&&wt++;const ct=Rt(Lt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,wt,le,ct.width,ct.height)}for(let ct=0;ct<6;ct++)if(gt){ie?K&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,0,0,Lt[ct].width,Lt[ct].height,jt,kt,Lt[ct].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,le,Lt[ct].width,Lt[ct].height,0,jt,kt,Lt[ct].data);for(let At=0;At<it.length;At++){const te=it[At].image[ct].image;ie?K&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,At+1,0,0,te.width,te.height,jt,kt,te.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,At+1,le,te.width,te.height,0,jt,kt,te.data)}}else{ie?K&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,0,0,jt,kt,Lt[ct]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,le,jt,kt,Lt[ct]);for(let At=0;At<it.length;At++){const Et=it[At];ie?K&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,At+1,0,0,jt,kt,Et.image[ct]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,At+1,le,jt,kt,Et.image[ct])}}}p(O)&&g(n.TEXTURE_CUBE_MAP),at.__version=ut.version,O.onUpdate&&O.onUpdate(O)}G.__version=O.version}function Z(G,O,tt,rt,ut,at){const It=r.convert(tt.format,tt.colorSpace),St=r.convert(tt.type),Pt=b(tt.internalFormat,It,St,tt.colorSpace),re=i.get(O),gt=i.get(tt);if(gt.__renderTarget=O,!re.__hasExternalTextures){const Lt=Math.max(1,O.width>>at),Xt=Math.max(1,O.height>>at);ut===n.TEXTURE_3D||ut===n.TEXTURE_2D_ARRAY?e.texImage3D(ut,at,Pt,Lt,Xt,O.depth,0,It,St,null):e.texImage2D(ut,at,Pt,Lt,Xt,0,It,St,null)}e.bindFramebuffer(n.FRAMEBUFFER,G),Dt(O)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,rt,ut,gt.__webglTexture,0,dt(O)):(ut===n.TEXTURE_2D||ut>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ut<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,rt,ut,gt.__webglTexture,at),e.bindFramebuffer(n.FRAMEBUFFER,null)}function Q(G,O,tt){if(n.bindRenderbuffer(n.RENDERBUFFER,G),O.depthBuffer){const rt=O.depthTexture,ut=rt&&rt.isDepthTexture?rt.type:null,at=M(O.stencilBuffer,ut),It=O.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,St=dt(O);Dt(O)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,St,at,O.width,O.height):tt?n.renderbufferStorageMultisample(n.RENDERBUFFER,St,at,O.width,O.height):n.renderbufferStorage(n.RENDERBUFFER,at,O.width,O.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,It,n.RENDERBUFFER,G)}else{const rt=O.textures;for(let ut=0;ut<rt.length;ut++){const at=rt[ut],It=r.convert(at.format,at.colorSpace),St=r.convert(at.type),Pt=b(at.internalFormat,It,St,at.colorSpace),re=dt(O);tt&&Dt(O)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,re,Pt,O.width,O.height):Dt(O)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,re,Pt,O.width,O.height):n.renderbufferStorage(n.RENDERBUFFER,Pt,O.width,O.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ht(G,O){if(O&&O.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,G),!(O.depthTexture&&O.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const rt=i.get(O.depthTexture);rt.__renderTarget=O,(!rt.__webglTexture||O.depthTexture.image.width!==O.width||O.depthTexture.image.height!==O.height)&&(O.depthTexture.image.width=O.width,O.depthTexture.image.height=O.height,O.depthTexture.needsUpdate=!0),F(O.depthTexture,0);const ut=rt.__webglTexture,at=dt(O);if(O.depthTexture.format===Js)Dt(O)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ut,0,at):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ut,0);else if(O.depthTexture.format===rr)Dt(O)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ut,0,at):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ut,0);else throw new Error("Unknown depthTexture format")}function vt(G){const O=i.get(G),tt=G.isWebGLCubeRenderTarget===!0;if(O.__boundDepthTexture!==G.depthTexture){const rt=G.depthTexture;if(O.__depthDisposeCallback&&O.__depthDisposeCallback(),rt){const ut=()=>{delete O.__boundDepthTexture,delete O.__depthDisposeCallback,rt.removeEventListener("dispose",ut)};rt.addEventListener("dispose",ut),O.__depthDisposeCallback=ut}O.__boundDepthTexture=rt}if(G.depthTexture&&!O.__autoAllocateDepthBuffer){if(tt)throw new Error("target.depthTexture not supported in Cube render targets");ht(O.__webglFramebuffer,G)}else if(tt){O.__webglDepthbuffer=[];for(let rt=0;rt<6;rt++)if(e.bindFramebuffer(n.FRAMEBUFFER,O.__webglFramebuffer[rt]),O.__webglDepthbuffer[rt]===void 0)O.__webglDepthbuffer[rt]=n.createRenderbuffer(),Q(O.__webglDepthbuffer[rt],G,!1);else{const ut=G.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,at=O.__webglDepthbuffer[rt];n.bindRenderbuffer(n.RENDERBUFFER,at),n.framebufferRenderbuffer(n.FRAMEBUFFER,ut,n.RENDERBUFFER,at)}}else if(e.bindFramebuffer(n.FRAMEBUFFER,O.__webglFramebuffer),O.__webglDepthbuffer===void 0)O.__webglDepthbuffer=n.createRenderbuffer(),Q(O.__webglDepthbuffer,G,!1);else{const rt=G.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ut=O.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ut),n.framebufferRenderbuffer(n.FRAMEBUFFER,rt,n.RENDERBUFFER,ut)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function mt(G,O,tt){const rt=i.get(G);O!==void 0&&Z(rt.__webglFramebuffer,G,G.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),tt!==void 0&&vt(G)}function Gt(G){const O=G.texture,tt=i.get(G),rt=i.get(O);G.addEventListener("dispose",A);const ut=G.textures,at=G.isWebGLCubeRenderTarget===!0,It=ut.length>1;if(It||(rt.__webglTexture===void 0&&(rt.__webglTexture=n.createTexture()),rt.__version=O.version,a.memory.textures++),at){tt.__webglFramebuffer=[];for(let St=0;St<6;St++)if(O.mipmaps&&O.mipmaps.length>0){tt.__webglFramebuffer[St]=[];for(let Pt=0;Pt<O.mipmaps.length;Pt++)tt.__webglFramebuffer[St][Pt]=n.createFramebuffer()}else tt.__webglFramebuffer[St]=n.createFramebuffer()}else{if(O.mipmaps&&O.mipmaps.length>0){tt.__webglFramebuffer=[];for(let St=0;St<O.mipmaps.length;St++)tt.__webglFramebuffer[St]=n.createFramebuffer()}else tt.__webglFramebuffer=n.createFramebuffer();if(It)for(let St=0,Pt=ut.length;St<Pt;St++){const re=i.get(ut[St]);re.__webglTexture===void 0&&(re.__webglTexture=n.createTexture(),a.memory.textures++)}if(G.samples>0&&Dt(G)===!1){tt.__webglMultisampledFramebuffer=n.createFramebuffer(),tt.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,tt.__webglMultisampledFramebuffer);for(let St=0;St<ut.length;St++){const Pt=ut[St];tt.__webglColorRenderbuffer[St]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,tt.__webglColorRenderbuffer[St]);const re=r.convert(Pt.format,Pt.colorSpace),gt=r.convert(Pt.type),Lt=b(Pt.internalFormat,re,gt,Pt.colorSpace,G.isXRRenderTarget===!0),Xt=dt(G);n.renderbufferStorageMultisample(n.RENDERBUFFER,Xt,Lt,G.width,G.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+St,n.RENDERBUFFER,tt.__webglColorRenderbuffer[St])}n.bindRenderbuffer(n.RENDERBUFFER,null),G.depthBuffer&&(tt.__webglDepthRenderbuffer=n.createRenderbuffer(),Q(tt.__webglDepthRenderbuffer,G,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(at){e.bindTexture(n.TEXTURE_CUBE_MAP,rt.__webglTexture),W(n.TEXTURE_CUBE_MAP,O);for(let St=0;St<6;St++)if(O.mipmaps&&O.mipmaps.length>0)for(let Pt=0;Pt<O.mipmaps.length;Pt++)Z(tt.__webglFramebuffer[St][Pt],G,O,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+St,Pt);else Z(tt.__webglFramebuffer[St],G,O,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+St,0);p(O)&&g(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(It){for(let St=0,Pt=ut.length;St<Pt;St++){const re=ut[St],gt=i.get(re);e.bindTexture(n.TEXTURE_2D,gt.__webglTexture),W(n.TEXTURE_2D,re),Z(tt.__webglFramebuffer,G,re,n.COLOR_ATTACHMENT0+St,n.TEXTURE_2D,0),p(re)&&g(n.TEXTURE_2D)}e.unbindTexture()}else{let St=n.TEXTURE_2D;if((G.isWebGL3DRenderTarget||G.isWebGLArrayRenderTarget)&&(St=G.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(St,rt.__webglTexture),W(St,O),O.mipmaps&&O.mipmaps.length>0)for(let Pt=0;Pt<O.mipmaps.length;Pt++)Z(tt.__webglFramebuffer[Pt],G,O,n.COLOR_ATTACHMENT0,St,Pt);else Z(tt.__webglFramebuffer,G,O,n.COLOR_ATTACHMENT0,St,0);p(O)&&g(St),e.unbindTexture()}G.depthBuffer&&vt(G)}function st(G){const O=G.textures;for(let tt=0,rt=O.length;tt<rt;tt++){const ut=O[tt];if(p(ut)){const at=S(G),It=i.get(ut).__webglTexture;e.bindTexture(at,It),g(at),e.unbindTexture()}}}const ft=[],q=[];function Ft(G){if(G.samples>0){if(Dt(G)===!1){const O=G.textures,tt=G.width,rt=G.height;let ut=n.COLOR_BUFFER_BIT;const at=G.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,It=i.get(G),St=O.length>1;if(St)for(let Pt=0;Pt<O.length;Pt++)e.bindFramebuffer(n.FRAMEBUFFER,It.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Pt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,It.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Pt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,It.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,It.__webglFramebuffer);for(let Pt=0;Pt<O.length;Pt++){if(G.resolveDepthBuffer&&(G.depthBuffer&&(ut|=n.DEPTH_BUFFER_BIT),G.stencilBuffer&&G.resolveStencilBuffer&&(ut|=n.STENCIL_BUFFER_BIT)),St){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,It.__webglColorRenderbuffer[Pt]);const re=i.get(O[Pt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,re,0)}n.blitFramebuffer(0,0,tt,rt,0,0,tt,rt,ut,n.NEAREST),l===!0&&(ft.length=0,q.length=0,ft.push(n.COLOR_ATTACHMENT0+Pt),G.depthBuffer&&G.resolveDepthBuffer===!1&&(ft.push(at),q.push(at),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,q)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ft))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),St)for(let Pt=0;Pt<O.length;Pt++){e.bindFramebuffer(n.FRAMEBUFFER,It.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Pt,n.RENDERBUFFER,It.__webglColorRenderbuffer[Pt]);const re=i.get(O[Pt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,It.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Pt,n.TEXTURE_2D,re,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,It.__webglMultisampledFramebuffer)}else if(G.depthBuffer&&G.resolveDepthBuffer===!1&&l){const O=G.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[O])}}}function dt(G){return Math.min(s.maxSamples,G.samples)}function Dt(G){const O=i.get(G);return G.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&O.__useRenderToTexture!==!1}function yt(G){const O=a.render.frame;h.get(G)!==O&&(h.set(G,O),G.update())}function Wt(G,O){const tt=G.colorSpace,rt=G.format,ut=G.type;return G.isCompressedTexture===!0||G.isVideoTexture===!0||tt!==hr&&tt!==ci&&(he.getTransfer(tt)===ve?(rt!==Wn||ut!==Ui)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",tt)),O}function Rt(G){return typeof HTMLImageElement<"u"&&G instanceof HTMLImageElement?(c.width=G.naturalWidth||G.width,c.height=G.naturalHeight||G.height):typeof VideoFrame<"u"&&G instanceof VideoFrame?(c.width=G.displayWidth,c.height=G.displayHeight):(c.width=G.width,c.height=G.height),c}this.allocateTextureUnit=z,this.resetTextureUnits=I,this.setTexture2D=F,this.setTexture2DArray=D,this.setTexture3D=N,this.setTextureCube=T,this.rebindTextures=mt,this.setupRenderTarget=Gt,this.updateRenderTargetMipmap=st,this.updateMultisampleRenderTarget=Ft,this.setupDepthRenderbuffer=vt,this.setupFrameBufferTexture=Z,this.useMultisampledRTT=Dt}function Lg(n,t){function e(i,s=ci){let r;const a=he.getTransfer(s);if(i===Ui)return n.UNSIGNED_BYTE;if(i===sc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===rc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Sh)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Mh)return n.BYTE;if(i===bh)return n.SHORT;if(i===zr)return n.UNSIGNED_SHORT;if(i===ic)return n.INT;if(i===ms)return n.UNSIGNED_INT;if(i===ui)return n.FLOAT;if(i===qr)return n.HALF_FLOAT;if(i===wh)return n.ALPHA;if(i===Eh)return n.RGB;if(i===Wn)return n.RGBA;if(i===Th)return n.LUMINANCE;if(i===Ah)return n.LUMINANCE_ALPHA;if(i===Js)return n.DEPTH_COMPONENT;if(i===rr)return n.DEPTH_STENCIL;if(i===ac)return n.RED;if(i===oc)return n.RED_INTEGER;if(i===Ch)return n.RG;if(i===lc)return n.RG_INTEGER;if(i===cc)return n.RGBA_INTEGER;if(i===Oa||i===Fa||i===za||i===Ba)if(a===ve)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Oa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Fa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===za)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ba)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Oa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Fa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===za)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ba)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===vl||i===yl||i===xl||i===Ml)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===vl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===yl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===xl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ml)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===bl||i===Sl||i===wl)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===bl||i===Sl)return a===ve?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===wl)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===El||i===Tl||i===Al||i===Cl||i===Rl||i===Pl||i===Dl||i===Ll||i===kl||i===Il||i===Ul||i===Nl||i===Ol||i===Fl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===El)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Tl)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Al)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Cl)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Rl)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Pl)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Dl)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ll)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===kl)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Il)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Ul)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Nl)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Ol)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Fl)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ha||i===zl||i===Bl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===Ha)return a===ve?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===zl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Bl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Rh||i===Hl||i===Gl||i===Vl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===Ha)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Hl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Gl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Vl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===sr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}class kg extends Pn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Ht extends Ze{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Ig={type:"move"};class Go{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ht,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ht,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new X,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new X),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ht,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new X,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new X),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const _ of t.hand.values()){const p=e.getJointPose(_,i),g=this._getHandJoint(c,_);p!==null&&(g.matrix.fromArray(p.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=p.radius),g.visible=p!==null}const h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],u=h.position.distanceTo(f.position),d=.02,y=.005;c.inputState.pinching&&u>d+y?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=d-y&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Ig)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new Ht;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const Ug=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ng=`
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

}`;class Og{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){const s=new an,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new ni({vertexShader:Ug,fragmentShader:Ng,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new xe(new On(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Fg extends vs{constructor(t,e){super();const i=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,f=null,u=null,d=null,y=null;const _=new Og,p=e.getContextAttributes();let g=null,S=null;const b=[],M=[],P=new ot;let C=null;const A=new Pn;A.viewport=new ue;const U=new Pn;U.viewport=new ue;const v=[A,U],m=new kg;let E=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let H=b[Y];return H===void 0&&(H=new Go,b[Y]=H),H.getTargetRaySpace()},this.getControllerGrip=function(Y){let H=b[Y];return H===void 0&&(H=new Go,b[Y]=H),H.getGripSpace()},this.getHand=function(Y){let H=b[Y];return H===void 0&&(H=new Go,b[Y]=H),H.getHandSpace()};function z(Y){const H=M.indexOf(Y.inputSource);if(H===-1)return;const Z=b[H];Z!==void 0&&(Z.update(Y.inputSource,Y.frame,c||a),Z.dispatchEvent({type:Y.type,data:Y.inputSource}))}function L(){s.removeEventListener("select",z),s.removeEventListener("selectstart",z),s.removeEventListener("selectend",z),s.removeEventListener("squeeze",z),s.removeEventListener("squeezestart",z),s.removeEventListener("squeezeend",z),s.removeEventListener("end",L),s.removeEventListener("inputsourceschange",F);for(let Y=0;Y<b.length;Y++){const H=M[Y];H!==null&&(M[Y]=null,b[Y].disconnect(H))}E=null,I=null,_.reset(),t.setRenderTarget(g),d=null,u=null,f=null,s=null,S=null,J.stop(),i.isPresenting=!1,t.setPixelRatio(C),t.setSize(P.width,P.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return f},this.getFrame=function(){return y},this.getSession=function(){return s},this.setSession=async function(Y){if(s=Y,s!==null){if(g=t.getRenderTarget(),s.addEventListener("select",z),s.addEventListener("selectstart",z),s.addEventListener("selectend",z),s.addEventListener("squeeze",z),s.addEventListener("squeezestart",z),s.addEventListener("squeezeend",z),s.addEventListener("end",L),s.addEventListener("inputsourceschange",F),p.xrCompatible!==!0&&await e.makeXRCompatible(),C=t.getPixelRatio(),t.getSize(P),s.renderState.layers===void 0){const H={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,H),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),S=new gs(d.framebufferWidth,d.framebufferHeight,{format:Wn,type:Ui,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil})}else{let H=null,Z=null,Q=null;p.depth&&(Q=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,H=p.stencil?rr:Js,Z=p.stencil?sr:ms);const ht={colorFormat:e.RGBA8,depthFormat:Q,scaleFactor:r};f=new XRWebGLBinding(s,e),u=f.createProjectionLayer(ht),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),S=new gs(u.textureWidth,u.textureHeight,{format:Wn,type:Ui,depthTexture:new Vh(u.textureWidth,u.textureHeight,Z,void 0,void 0,void 0,void 0,void 0,void 0,H),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),J.setContext(s),J.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function F(Y){for(let H=0;H<Y.removed.length;H++){const Z=Y.removed[H],Q=M.indexOf(Z);Q>=0&&(M[Q]=null,b[Q].disconnect(Z))}for(let H=0;H<Y.added.length;H++){const Z=Y.added[H];let Q=M.indexOf(Z);if(Q===-1){for(let vt=0;vt<b.length;vt++)if(vt>=M.length){M.push(Z),Q=vt;break}else if(M[vt]===null){M[vt]=Z,Q=vt;break}if(Q===-1)break}const ht=b[Q];ht&&ht.connect(Z)}}const D=new X,N=new X;function T(Y,H,Z){D.setFromMatrixPosition(H.matrixWorld),N.setFromMatrixPosition(Z.matrixWorld);const Q=D.distanceTo(N),ht=H.projectionMatrix.elements,vt=Z.projectionMatrix.elements,mt=ht[14]/(ht[10]-1),Gt=ht[14]/(ht[10]+1),st=(ht[9]+1)/ht[5],ft=(ht[9]-1)/ht[5],q=(ht[8]-1)/ht[0],Ft=(vt[8]+1)/vt[0],dt=mt*q,Dt=mt*Ft,yt=Q/(-q+Ft),Wt=yt*-q;if(H.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(Wt),Y.translateZ(yt),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),ht[10]===-1)Y.projectionMatrix.copy(H.projectionMatrix),Y.projectionMatrixInverse.copy(H.projectionMatrixInverse);else{const Rt=mt+yt,G=Gt+yt,O=dt-Wt,tt=Dt+(Q-Wt),rt=st*Gt/G*Rt,ut=ft*Gt/G*Rt;Y.projectionMatrix.makePerspective(O,tt,rt,ut,Rt,G),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function R(Y,H){H===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(H.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(s===null)return;let H=Y.near,Z=Y.far;_.texture!==null&&(_.depthNear>0&&(H=_.depthNear),_.depthFar>0&&(Z=_.depthFar)),m.near=U.near=A.near=H,m.far=U.far=A.far=Z,(E!==m.near||I!==m.far)&&(s.updateRenderState({depthNear:m.near,depthFar:m.far}),E=m.near,I=m.far),A.layers.mask=Y.layers.mask|2,U.layers.mask=Y.layers.mask|4,m.layers.mask=A.layers.mask|U.layers.mask;const Q=Y.parent,ht=m.cameras;R(m,Q);for(let vt=0;vt<ht.length;vt++)R(ht[vt],Q);ht.length===2?T(m,A,U):m.projectionMatrix.copy(A.projectionMatrix),x(Y,m,Q)};function x(Y,H,Z){Z===null?Y.matrix.copy(H.matrixWorld):(Y.matrix.copy(Z.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(H.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(H.projectionMatrix),Y.projectionMatrixInverse.copy(H.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Br*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return m},this.getFoveation=function(){if(!(u===null&&d===null))return l},this.setFoveation=function(Y){l=Y,u!==null&&(u.fixedFoveation=Y),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Y)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(m)};let k=null;function W(Y,H){if(h=H.getViewerPose(c||a),y=H,h!==null){const Z=h.views;d!==null&&(t.setRenderTargetFramebuffer(S,d.framebuffer),t.setRenderTarget(S));let Q=!1;Z.length!==m.cameras.length&&(m.cameras.length=0,Q=!0);for(let vt=0;vt<Z.length;vt++){const mt=Z[vt];let Gt=null;if(d!==null)Gt=d.getViewport(mt);else{const ft=f.getViewSubImage(u,mt);Gt=ft.viewport,vt===0&&(t.setRenderTargetTextures(S,ft.colorTexture,u.ignoreDepthValues?void 0:ft.depthStencilTexture),t.setRenderTarget(S))}let st=v[vt];st===void 0&&(st=new Pn,st.layers.enable(vt),st.viewport=new ue,v[vt]=st),st.matrix.fromArray(mt.transform.matrix),st.matrix.decompose(st.position,st.quaternion,st.scale),st.projectionMatrix.fromArray(mt.projectionMatrix),st.projectionMatrixInverse.copy(st.projectionMatrix).invert(),st.viewport.set(Gt.x,Gt.y,Gt.width,Gt.height),vt===0&&(m.matrix.copy(st.matrix),m.matrix.decompose(m.position,m.quaternion,m.scale)),Q===!0&&m.cameras.push(st)}const ht=s.enabledFeatures;if(ht&&ht.includes("depth-sensing")){const vt=f.getDepthInformation(Z[0]);vt&&vt.isValid&&vt.texture&&_.init(t,vt,s.renderState)}}for(let Z=0;Z<b.length;Z++){const Q=M[Z],ht=b[Z];Q!==null&&ht!==void 0&&ht.update(Q,H,c||a)}k&&k(Y,H),H.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:H}),y=null}const J=new Hh;J.setAnimationLoop(W),this.setAnimationLoop=function(Y){k=Y},this.dispose=function(){}}}const as=new ei,zg=new oe;function Bg(n,t){function e(p,g){p.matrixAutoUpdate===!0&&p.updateMatrix(),g.value.copy(p.matrix)}function i(p,g){g.color.getRGB(p.fogColor.value,Fh(n)),g.isFog?(p.fogNear.value=g.near,p.fogFar.value=g.far):g.isFogExp2&&(p.fogDensity.value=g.density)}function s(p,g,S,b,M){g.isMeshBasicMaterial||g.isMeshLambertMaterial?r(p,g):g.isMeshToonMaterial?(r(p,g),f(p,g)):g.isMeshPhongMaterial?(r(p,g),h(p,g)):g.isMeshStandardMaterial?(r(p,g),u(p,g),g.isMeshPhysicalMaterial&&d(p,g,M)):g.isMeshMatcapMaterial?(r(p,g),y(p,g)):g.isMeshDepthMaterial?r(p,g):g.isMeshDistanceMaterial?(r(p,g),_(p,g)):g.isMeshNormalMaterial?r(p,g):g.isLineBasicMaterial?(a(p,g),g.isLineDashedMaterial&&o(p,g)):g.isPointsMaterial?l(p,g,S,b):g.isSpriteMaterial?c(p,g):g.isShadowMaterial?(p.color.value.copy(g.color),p.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(p,g){p.opacity.value=g.opacity,g.color&&p.diffuse.value.copy(g.color),g.emissive&&p.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(p.map.value=g.map,e(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,e(g.alphaMap,p.alphaMapTransform)),g.bumpMap&&(p.bumpMap.value=g.bumpMap,e(g.bumpMap,p.bumpMapTransform),p.bumpScale.value=g.bumpScale,g.side===dn&&(p.bumpScale.value*=-1)),g.normalMap&&(p.normalMap.value=g.normalMap,e(g.normalMap,p.normalMapTransform),p.normalScale.value.copy(g.normalScale),g.side===dn&&p.normalScale.value.negate()),g.displacementMap&&(p.displacementMap.value=g.displacementMap,e(g.displacementMap,p.displacementMapTransform),p.displacementScale.value=g.displacementScale,p.displacementBias.value=g.displacementBias),g.emissiveMap&&(p.emissiveMap.value=g.emissiveMap,e(g.emissiveMap,p.emissiveMapTransform)),g.specularMap&&(p.specularMap.value=g.specularMap,e(g.specularMap,p.specularMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest);const S=t.get(g),b=S.envMap,M=S.envMapRotation;b&&(p.envMap.value=b,as.copy(M),as.x*=-1,as.y*=-1,as.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(as.y*=-1,as.z*=-1),p.envMapRotation.value.setFromMatrix4(zg.makeRotationFromEuler(as)),p.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=g.reflectivity,p.ior.value=g.ior,p.refractionRatio.value=g.refractionRatio),g.lightMap&&(p.lightMap.value=g.lightMap,p.lightMapIntensity.value=g.lightMapIntensity,e(g.lightMap,p.lightMapTransform)),g.aoMap&&(p.aoMap.value=g.aoMap,p.aoMapIntensity.value=g.aoMapIntensity,e(g.aoMap,p.aoMapTransform))}function a(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,g.map&&(p.map.value=g.map,e(g.map,p.mapTransform))}function o(p,g){p.dashSize.value=g.dashSize,p.totalSize.value=g.dashSize+g.gapSize,p.scale.value=g.scale}function l(p,g,S,b){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.size.value=g.size*S,p.scale.value=b*.5,g.map&&(p.map.value=g.map,e(g.map,p.uvTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,e(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function c(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.rotation.value=g.rotation,g.map&&(p.map.value=g.map,e(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,e(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function h(p,g){p.specular.value.copy(g.specular),p.shininess.value=Math.max(g.shininess,1e-4)}function f(p,g){g.gradientMap&&(p.gradientMap.value=g.gradientMap)}function u(p,g){p.metalness.value=g.metalness,g.metalnessMap&&(p.metalnessMap.value=g.metalnessMap,e(g.metalnessMap,p.metalnessMapTransform)),p.roughness.value=g.roughness,g.roughnessMap&&(p.roughnessMap.value=g.roughnessMap,e(g.roughnessMap,p.roughnessMapTransform)),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)}function d(p,g,S){p.ior.value=g.ior,g.sheen>0&&(p.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),p.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(p.sheenColorMap.value=g.sheenColorMap,e(g.sheenColorMap,p.sheenColorMapTransform)),g.sheenRoughnessMap&&(p.sheenRoughnessMap.value=g.sheenRoughnessMap,e(g.sheenRoughnessMap,p.sheenRoughnessMapTransform))),g.clearcoat>0&&(p.clearcoat.value=g.clearcoat,p.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(p.clearcoatMap.value=g.clearcoatMap,e(g.clearcoatMap,p.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,e(g.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(p.clearcoatNormalMap.value=g.clearcoatNormalMap,e(g.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===dn&&p.clearcoatNormalScale.value.negate())),g.dispersion>0&&(p.dispersion.value=g.dispersion),g.iridescence>0&&(p.iridescence.value=g.iridescence,p.iridescenceIOR.value=g.iridescenceIOR,p.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(p.iridescenceMap.value=g.iridescenceMap,e(g.iridescenceMap,p.iridescenceMapTransform)),g.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=g.iridescenceThicknessMap,e(g.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),g.transmission>0&&(p.transmission.value=g.transmission,p.transmissionSamplerMap.value=S.texture,p.transmissionSamplerSize.value.set(S.width,S.height),g.transmissionMap&&(p.transmissionMap.value=g.transmissionMap,e(g.transmissionMap,p.transmissionMapTransform)),p.thickness.value=g.thickness,g.thicknessMap&&(p.thicknessMap.value=g.thicknessMap,e(g.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=g.attenuationDistance,p.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(p.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(p.anisotropyMap.value=g.anisotropyMap,e(g.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=g.specularIntensity,p.specularColor.value.copy(g.specularColor),g.specularColorMap&&(p.specularColorMap.value=g.specularColorMap,e(g.specularColorMap,p.specularColorMapTransform)),g.specularIntensityMap&&(p.specularIntensityMap.value=g.specularIntensityMap,e(g.specularIntensityMap,p.specularIntensityMapTransform))}function y(p,g){g.matcap&&(p.matcap.value=g.matcap)}function _(p,g){const S=t.get(g).light;p.referencePosition.value.setFromMatrixPosition(S.matrixWorld),p.nearDistance.value=S.shadow.camera.near,p.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Hg(n,t,e,i){let s={},r={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,b){const M=b.program;i.uniformBlockBinding(S,M)}function c(S,b){let M=s[S.id];M===void 0&&(y(S),M=h(S),s[S.id]=M,S.addEventListener("dispose",p));const P=b.program;i.updateUBOMapping(S,P);const C=t.render.frame;r[S.id]!==C&&(u(S),r[S.id]=C)}function h(S){const b=f();S.__bindingPointIndex=b;const M=n.createBuffer(),P=S.__size,C=S.usage;return n.bindBuffer(n.UNIFORM_BUFFER,M),n.bufferData(n.UNIFORM_BUFFER,P,C),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,b,M),M}function f(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(S){const b=s[S.id],M=S.uniforms,P=S.__cache;n.bindBuffer(n.UNIFORM_BUFFER,b);for(let C=0,A=M.length;C<A;C++){const U=Array.isArray(M[C])?M[C]:[M[C]];for(let v=0,m=U.length;v<m;v++){const E=U[v];if(d(E,C,v,P)===!0){const I=E.__offset,z=Array.isArray(E.value)?E.value:[E.value];let L=0;for(let F=0;F<z.length;F++){const D=z[F],N=_(D);typeof D=="number"||typeof D=="boolean"?(E.__data[0]=D,n.bufferSubData(n.UNIFORM_BUFFER,I+L,E.__data)):D.isMatrix3?(E.__data[0]=D.elements[0],E.__data[1]=D.elements[1],E.__data[2]=D.elements[2],E.__data[3]=0,E.__data[4]=D.elements[3],E.__data[5]=D.elements[4],E.__data[6]=D.elements[5],E.__data[7]=0,E.__data[8]=D.elements[6],E.__data[9]=D.elements[7],E.__data[10]=D.elements[8],E.__data[11]=0):(D.toArray(E.__data,L),L+=N.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,I,E.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(S,b,M,P){const C=S.value,A=b+"_"+M;if(P[A]===void 0)return typeof C=="number"||typeof C=="boolean"?P[A]=C:P[A]=C.clone(),!0;{const U=P[A];if(typeof C=="number"||typeof C=="boolean"){if(U!==C)return P[A]=C,!0}else if(U.equals(C)===!1)return U.copy(C),!0}return!1}function y(S){const b=S.uniforms;let M=0;const P=16;for(let A=0,U=b.length;A<U;A++){const v=Array.isArray(b[A])?b[A]:[b[A]];for(let m=0,E=v.length;m<E;m++){const I=v[m],z=Array.isArray(I.value)?I.value:[I.value];for(let L=0,F=z.length;L<F;L++){const D=z[L],N=_(D),T=M%P,R=T%N.boundary,x=T+R;M+=R,x!==0&&P-x<N.storage&&(M+=P-x),I.__data=new Float32Array(N.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=M,M+=N.storage}}}const C=M%P;return C>0&&(M+=P-C),S.__size=M,S.__cache={},this}function _(S){const b={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(b.boundary=4,b.storage=4):S.isVector2?(b.boundary=8,b.storage=8):S.isVector3||S.isColor?(b.boundary=16,b.storage=12):S.isVector4?(b.boundary=16,b.storage=16):S.isMatrix3?(b.boundary=48,b.storage=48):S.isMatrix4?(b.boundary=64,b.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),b}function p(S){const b=S.target;b.removeEventListener("dispose",p);const M=a.indexOf(b.__bindingPointIndex);a.splice(M,1),n.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function g(){for(const S in s)n.deleteBuffer(s[S]);a=[],s={},r={}}return{bind:l,update:c,dispose:g}}class Gg{constructor(t={}){const{canvas:e=Pd(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:u=!1}=t;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=a;const y=new Uint32Array(4),_=new Int32Array(4);let p=null,g=null;const S=[],b=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Rn,this.toneMapping=ji,this.toneMappingExposure=1;const M=this;let P=!1,C=0,A=0,U=null,v=-1,m=null;const E=new ue,I=new ue;let z=null;const L=new Mt(0);let F=0,D=e.width,N=e.height,T=1,R=null,x=null;const k=new ue(0,0,D,N),W=new ue(0,0,D,N);let J=!1;const Y=new pc;let H=!1,Z=!1;const Q=new oe,ht=new oe,vt=new X,mt=new ue,Gt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let st=!1;function ft(){return U===null?T:1}let q=i;function Ft(B,j){return e.getContext(B,j)}try{const B={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${nc}`),e.addEventListener("webglcontextlost",ct,!1),e.addEventListener("webglcontextrestored",At,!1),e.addEventListener("webglcontextcreationerror",Et,!1),q===null){const j="webgl2";if(q=Ft(j,B),q===null)throw Ft(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(B){throw console.error("THREE.WebGLRenderer: "+B.message),B}let dt,Dt,yt,Wt,Rt,G,O,tt,rt,ut,at,It,St,Pt,re,gt,Lt,Xt,jt,kt,le,ie,Se,K;function wt(){dt=new qm(q),dt.init(),ie=new Lg(q,dt),Dt=new Hm(q,dt,t,ie),yt=new Rg(q,dt),Dt.reverseDepthBuffer&&u&&yt.buffers.depth.setReversed(!0),Wt=new jm(q),Rt=new pg,G=new Dg(q,dt,yt,Rt,Dt,ie,Wt),O=new Vm(M),tt=new Ym(M),rt=new nf(q),Se=new zm(q,rt),ut=new Zm(q,rt,Wt,Se),at=new Jm(q,ut,rt,Wt),jt=new $m(q,Dt,G),gt=new Gm(Rt),It=new fg(M,O,tt,dt,Dt,Se,gt),St=new Bg(M,Rt),Pt=new gg,re=new bg(dt),Xt=new Fm(M,O,tt,yt,at,d,l),Lt=new Ag(M,at,Dt),K=new Hg(q,Wt,Dt,yt),kt=new Bm(q,dt,Wt),le=new Km(q,dt,Wt),Wt.programs=It.programs,M.capabilities=Dt,M.extensions=dt,M.properties=Rt,M.renderLists=Pt,M.shadowMap=Lt,M.state=yt,M.info=Wt}wt();const it=new Fg(M,q);this.xr=it,this.getContext=function(){return q},this.getContextAttributes=function(){return q.getContextAttributes()},this.forceContextLoss=function(){const B=dt.get("WEBGL_lose_context");B&&B.loseContext()},this.forceContextRestore=function(){const B=dt.get("WEBGL_lose_context");B&&B.restoreContext()},this.getPixelRatio=function(){return T},this.setPixelRatio=function(B){B!==void 0&&(T=B,this.setSize(D,N,!1))},this.getSize=function(B){return B.set(D,N)},this.setSize=function(B,j,et=!0){if(it.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}D=B,N=j,e.width=Math.floor(B*T),e.height=Math.floor(j*T),et===!0&&(e.style.width=B+"px",e.style.height=j+"px"),this.setViewport(0,0,B,j)},this.getDrawingBufferSize=function(B){return B.set(D*T,N*T).floor()},this.setDrawingBufferSize=function(B,j,et){D=B,N=j,T=et,e.width=Math.floor(B*et),e.height=Math.floor(j*et),this.setViewport(0,0,B,j)},this.getCurrentViewport=function(B){return B.copy(E)},this.getViewport=function(B){return B.copy(k)},this.setViewport=function(B,j,et,nt){B.isVector4?k.set(B.x,B.y,B.z,B.w):k.set(B,j,et,nt),yt.viewport(E.copy(k).multiplyScalar(T).round())},this.getScissor=function(B){return B.copy(W)},this.setScissor=function(B,j,et,nt){B.isVector4?W.set(B.x,B.y,B.z,B.w):W.set(B,j,et,nt),yt.scissor(I.copy(W).multiplyScalar(T).round())},this.getScissorTest=function(){return J},this.setScissorTest=function(B){yt.setScissorTest(J=B)},this.setOpaqueSort=function(B){R=B},this.setTransparentSort=function(B){x=B},this.getClearColor=function(B){return B.copy(Xt.getClearColor())},this.setClearColor=function(){Xt.setClearColor.apply(Xt,arguments)},this.getClearAlpha=function(){return Xt.getClearAlpha()},this.setClearAlpha=function(){Xt.setClearAlpha.apply(Xt,arguments)},this.clear=function(B=!0,j=!0,et=!0){let nt=0;if(B){let $=!1;if(U!==null){const _t=U.texture.format;$=_t===cc||_t===lc||_t===oc}if($){const _t=U.texture.type,Tt=_t===Ui||_t===ms||_t===zr||_t===sr||_t===sc||_t===rc,Ut=Xt.getClearColor(),Nt=Xt.getClearAlpha(),$t=Ut.r,ee=Ut.g,Ot=Ut.b;Tt?(y[0]=$t,y[1]=ee,y[2]=Ot,y[3]=Nt,q.clearBufferuiv(q.COLOR,0,y)):(_[0]=$t,_[1]=ee,_[2]=Ot,_[3]=Nt,q.clearBufferiv(q.COLOR,0,_))}else nt|=q.COLOR_BUFFER_BIT}j&&(nt|=q.DEPTH_BUFFER_BIT),et&&(nt|=q.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),q.clear(nt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ct,!1),e.removeEventListener("webglcontextrestored",At,!1),e.removeEventListener("webglcontextcreationerror",Et,!1),Pt.dispose(),re.dispose(),Rt.dispose(),O.dispose(),tt.dispose(),at.dispose(),Se.dispose(),K.dispose(),It.dispose(),it.dispose(),it.removeEventListener("sessionstart",Ic),it.removeEventListener("sessionend",Uc),ts.stop()};function ct(B){B.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function At(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;const B=Wt.autoReset,j=Lt.enabled,et=Lt.autoUpdate,nt=Lt.needsUpdate,$=Lt.type;wt(),Wt.autoReset=B,Lt.enabled=j,Lt.autoUpdate=et,Lt.needsUpdate=nt,Lt.type=$}function Et(B){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",B.statusMessage)}function te(B){const j=B.target;j.removeEventListener("dispose",te),Ie(j)}function Ie(B){tn(B),Rt.remove(B)}function tn(B){const j=Rt.get(B).programs;j!==void 0&&(j.forEach(function(et){It.releaseProgram(et)}),B.isShaderMaterial&&It.releaseShaderCache(B))}this.renderBufferDirect=function(B,j,et,nt,$,_t){j===null&&(j=Gt);const Tt=$.isMesh&&$.matrixWorld.determinant()<0,Ut=Tu(B,j,et,nt,$);yt.setMaterial(nt,Tt);let Nt=et.index,$t=1;if(nt.wireframe===!0){if(Nt=ut.getWireframeAttribute(et),Nt===void 0)return;$t=2}const ee=et.drawRange,Ot=et.attributes.position;let de=ee.start*$t,we=(ee.start+ee.count)*$t;_t!==null&&(de=Math.max(de,_t.start*$t),we=Math.min(we,(_t.start+_t.count)*$t)),Nt!==null?(de=Math.max(de,0),we=Math.min(we,Nt.count)):Ot!=null&&(de=Math.max(de,0),we=Math.min(we,Ot.count));const Ae=we-de;if(Ae<0||Ae===1/0)return;Se.setup($,nt,Ut,et,Nt);let _n,pe=kt;if(Nt!==null&&(_n=rt.get(Nt),pe=le,pe.setIndex(_n)),$.isMesh)nt.wireframe===!0?(yt.setLineWidth(nt.wireframeLinewidth*ft()),pe.setMode(q.LINES)):pe.setMode(q.TRIANGLES);else if($.isLine){let zt=nt.linewidth;zt===void 0&&(zt=1),yt.setLineWidth(zt*ft()),$.isLineSegments?pe.setMode(q.LINES):$.isLineLoop?pe.setMode(q.LINE_LOOP):pe.setMode(q.LINE_STRIP)}else $.isPoints?pe.setMode(q.POINTS):$.isSprite&&pe.setMode(q.TRIANGLES);if($.isBatchedMesh)if($._multiDrawInstances!==null)pe.renderMultiDrawInstances($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount,$._multiDrawInstances);else if(dt.get("WEBGL_multi_draw"))pe.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{const zt=$._multiDrawStarts,bi=$._multiDrawCounts,me=$._multiDrawCount,qn=Nt?rt.get(Nt).bytesPerElement:1,Ss=Rt.get(nt).currentProgram.getUniforms();for(let En=0;En<me;En++)Ss.setValue(q,"_gl_DrawID",En),pe.render(zt[En]/qn,bi[En])}else if($.isInstancedMesh)pe.renderInstances(de,Ae,$.count);else if(et.isInstancedBufferGeometry){const zt=et._maxInstanceCount!==void 0?et._maxInstanceCount:1/0,bi=Math.min(et.instanceCount,zt);pe.renderInstances(de,Ae,bi)}else pe.render(de,Ae)};function ge(B,j,et){B.transparent===!0&&B.side===De&&B.forceSinglePass===!1?(B.side=dn,B.needsUpdate=!0,ta(B,j,et),B.side=$i,B.needsUpdate=!0,ta(B,j,et),B.side=De):ta(B,j,et)}this.compile=function(B,j,et=null){et===null&&(et=B),g=re.get(et),g.init(j),b.push(g),et.traverseVisible(function($){$.isLight&&$.layers.test(j.layers)&&(g.pushLight($),$.castShadow&&g.pushShadow($))}),B!==et&&B.traverseVisible(function($){$.isLight&&$.layers.test(j.layers)&&(g.pushLight($),$.castShadow&&g.pushShadow($))}),g.setupLights();const nt=new Set;return B.traverse(function($){if(!($.isMesh||$.isPoints||$.isLine||$.isSprite))return;const _t=$.material;if(_t)if(Array.isArray(_t))for(let Tt=0;Tt<_t.length;Tt++){const Ut=_t[Tt];ge(Ut,et,$),nt.add(Ut)}else ge(_t,et,$),nt.add(_t)}),b.pop(),g=null,nt},this.compileAsync=function(B,j,et=null){const nt=this.compile(B,j,et);return new Promise($=>{function _t(){if(nt.forEach(function(Tt){Rt.get(Tt).currentProgram.isReady()&&nt.delete(Tt)}),nt.size===0){$(B);return}setTimeout(_t,10)}dt.get("KHR_parallel_shader_compile")!==null?_t():setTimeout(_t,10)})};let Yn=null;function Mi(B){Yn&&Yn(B)}function Ic(){ts.stop()}function Uc(){ts.start()}const ts=new Hh;ts.setAnimationLoop(Mi),typeof self<"u"&&ts.setContext(self),this.setAnimationLoop=function(B){Yn=B,it.setAnimationLoop(B),B===null?ts.stop():ts.start()},it.addEventListener("sessionstart",Ic),it.addEventListener("sessionend",Uc),this.render=function(B,j){if(j!==void 0&&j.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),it.enabled===!0&&it.isPresenting===!0&&(it.cameraAutoUpdate===!0&&it.updateCamera(j),j=it.getCamera()),B.isScene===!0&&B.onBeforeRender(M,B,j,U),g=re.get(B,b.length),g.init(j),b.push(g),ht.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),Y.setFromProjectionMatrix(ht),Z=this.localClippingEnabled,H=gt.init(this.clippingPlanes,Z),p=Pt.get(B,S.length),p.init(),S.push(p),it.enabled===!0&&it.isPresenting===!0){const _t=M.xr.getDepthSensingMesh();_t!==null&&po(_t,j,-1/0,M.sortObjects)}po(B,j,0,M.sortObjects),p.finish(),M.sortObjects===!0&&p.sort(R,x),st=it.enabled===!1||it.isPresenting===!1||it.hasDepthSensing()===!1,st&&Xt.addToRenderList(p,B),this.info.render.frame++,H===!0&&gt.beginShadows();const et=g.state.shadowsArray;Lt.render(et,B,j),H===!0&&gt.endShadows(),this.info.autoReset===!0&&this.info.reset();const nt=p.opaque,$=p.transmissive;if(g.setupLights(),j.isArrayCamera){const _t=j.cameras;if($.length>0)for(let Tt=0,Ut=_t.length;Tt<Ut;Tt++){const Nt=_t[Tt];Oc(nt,$,B,Nt)}st&&Xt.render(B);for(let Tt=0,Ut=_t.length;Tt<Ut;Tt++){const Nt=_t[Tt];Nc(p,B,Nt,Nt.viewport)}}else $.length>0&&Oc(nt,$,B,j),st&&Xt.render(B),Nc(p,B,j);U!==null&&(G.updateMultisampleRenderTarget(U),G.updateRenderTargetMipmap(U)),B.isScene===!0&&B.onAfterRender(M,B,j),Se.resetDefaultState(),v=-1,m=null,b.pop(),b.length>0?(g=b[b.length-1],H===!0&&gt.setGlobalState(M.clippingPlanes,g.state.camera)):g=null,S.pop(),S.length>0?p=S[S.length-1]:p=null};function po(B,j,et,nt){if(B.visible===!1)return;if(B.layers.test(j.layers)){if(B.isGroup)et=B.renderOrder;else if(B.isLOD)B.autoUpdate===!0&&B.update(j);else if(B.isLight)g.pushLight(B),B.castShadow&&g.pushShadow(B);else if(B.isSprite){if(!B.frustumCulled||Y.intersectsSprite(B)){nt&&mt.setFromMatrixPosition(B.matrixWorld).applyMatrix4(ht);const Tt=at.update(B),Ut=B.material;Ut.visible&&p.push(B,Tt,Ut,et,mt.z,null)}}else if((B.isMesh||B.isLine||B.isPoints)&&(!B.frustumCulled||Y.intersectsObject(B))){const Tt=at.update(B),Ut=B.material;if(nt&&(B.boundingSphere!==void 0?(B.boundingSphere===null&&B.computeBoundingSphere(),mt.copy(B.boundingSphere.center)):(Tt.boundingSphere===null&&Tt.computeBoundingSphere(),mt.copy(Tt.boundingSphere.center)),mt.applyMatrix4(B.matrixWorld).applyMatrix4(ht)),Array.isArray(Ut)){const Nt=Tt.groups;for(let $t=0,ee=Nt.length;$t<ee;$t++){const Ot=Nt[$t],de=Ut[Ot.materialIndex];de&&de.visible&&p.push(B,Tt,de,et,mt.z,Ot)}}else Ut.visible&&p.push(B,Tt,Ut,et,mt.z,null)}}const _t=B.children;for(let Tt=0,Ut=_t.length;Tt<Ut;Tt++)po(_t[Tt],j,et,nt)}function Nc(B,j,et,nt){const $=B.opaque,_t=B.transmissive,Tt=B.transparent;g.setupLightsView(et),H===!0&&gt.setGlobalState(M.clippingPlanes,et),nt&&yt.viewport(E.copy(nt)),$.length>0&&Qr($,j,et),_t.length>0&&Qr(_t,j,et),Tt.length>0&&Qr(Tt,j,et),yt.buffers.depth.setTest(!0),yt.buffers.depth.setMask(!0),yt.buffers.color.setMask(!0),yt.setPolygonOffset(!1)}function Oc(B,j,et,nt){if((et.isScene===!0?et.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[nt.id]===void 0&&(g.state.transmissionRenderTarget[nt.id]=new gs(1,1,{generateMipmaps:!0,type:dt.has("EXT_color_buffer_half_float")||dt.has("EXT_color_buffer_float")?qr:Ui,minFilter:ds,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:he.workingColorSpace}));const _t=g.state.transmissionRenderTarget[nt.id],Tt=nt.viewport||E;_t.setSize(Tt.z,Tt.w);const Ut=M.getRenderTarget();M.setRenderTarget(_t),M.getClearColor(L),F=M.getClearAlpha(),F<1&&M.setClearColor(16777215,.5),M.clear(),st&&Xt.render(et);const Nt=M.toneMapping;M.toneMapping=ji;const $t=nt.viewport;if(nt.viewport!==void 0&&(nt.viewport=void 0),g.setupLightsView(nt),H===!0&&gt.setGlobalState(M.clippingPlanes,nt),Qr(B,et,nt),G.updateMultisampleRenderTarget(_t),G.updateRenderTargetMipmap(_t),dt.has("WEBGL_multisampled_render_to_texture")===!1){let ee=!1;for(let Ot=0,de=j.length;Ot<de;Ot++){const we=j[Ot],Ae=we.object,_n=we.geometry,pe=we.material,zt=we.group;if(pe.side===De&&Ae.layers.test(nt.layers)){const bi=pe.side;pe.side=dn,pe.needsUpdate=!0,Fc(Ae,et,nt,_n,pe,zt),pe.side=bi,pe.needsUpdate=!0,ee=!0}}ee===!0&&(G.updateMultisampleRenderTarget(_t),G.updateRenderTargetMipmap(_t))}M.setRenderTarget(Ut),M.setClearColor(L,F),$t!==void 0&&(nt.viewport=$t),M.toneMapping=Nt}function Qr(B,j,et){const nt=j.isScene===!0?j.overrideMaterial:null;for(let $=0,_t=B.length;$<_t;$++){const Tt=B[$],Ut=Tt.object,Nt=Tt.geometry,$t=nt===null?Tt.material:nt,ee=Tt.group;Ut.layers.test(et.layers)&&Fc(Ut,j,et,Nt,$t,ee)}}function Fc(B,j,et,nt,$,_t){B.onBeforeRender(M,j,et,nt,$,_t),B.modelViewMatrix.multiplyMatrices(et.matrixWorldInverse,B.matrixWorld),B.normalMatrix.getNormalMatrix(B.modelViewMatrix),$.onBeforeRender(M,j,et,nt,B,_t),$.transparent===!0&&$.side===De&&$.forceSinglePass===!1?($.side=dn,$.needsUpdate=!0,M.renderBufferDirect(et,j,nt,$,B,_t),$.side=$i,$.needsUpdate=!0,M.renderBufferDirect(et,j,nt,$,B,_t),$.side=De):M.renderBufferDirect(et,j,nt,$,B,_t),B.onAfterRender(M,j,et,nt,$,_t)}function ta(B,j,et){j.isScene!==!0&&(j=Gt);const nt=Rt.get(B),$=g.state.lights,_t=g.state.shadowsArray,Tt=$.state.version,Ut=It.getParameters(B,$.state,_t,j,et),Nt=It.getProgramCacheKey(Ut);let $t=nt.programs;nt.environment=B.isMeshStandardMaterial?j.environment:null,nt.fog=j.fog,nt.envMap=(B.isMeshStandardMaterial?tt:O).get(B.envMap||nt.environment),nt.envMapRotation=nt.environment!==null&&B.envMap===null?j.environmentRotation:B.envMapRotation,$t===void 0&&(B.addEventListener("dispose",te),$t=new Map,nt.programs=$t);let ee=$t.get(Nt);if(ee!==void 0){if(nt.currentProgram===ee&&nt.lightsStateVersion===Tt)return Bc(B,Ut),ee}else Ut.uniforms=It.getUniforms(B),B.onBeforeCompile(Ut,M),ee=It.acquireProgram(Ut,Nt),$t.set(Nt,ee),nt.uniforms=Ut.uniforms;const Ot=nt.uniforms;return(!B.isShaderMaterial&&!B.isRawShaderMaterial||B.clipping===!0)&&(Ot.clippingPlanes=gt.uniform),Bc(B,Ut),nt.needsLights=Cu(B),nt.lightsStateVersion=Tt,nt.needsLights&&(Ot.ambientLightColor.value=$.state.ambient,Ot.lightProbe.value=$.state.probe,Ot.directionalLights.value=$.state.directional,Ot.directionalLightShadows.value=$.state.directionalShadow,Ot.spotLights.value=$.state.spot,Ot.spotLightShadows.value=$.state.spotShadow,Ot.rectAreaLights.value=$.state.rectArea,Ot.ltc_1.value=$.state.rectAreaLTC1,Ot.ltc_2.value=$.state.rectAreaLTC2,Ot.pointLights.value=$.state.point,Ot.pointLightShadows.value=$.state.pointShadow,Ot.hemisphereLights.value=$.state.hemi,Ot.directionalShadowMap.value=$.state.directionalShadowMap,Ot.directionalShadowMatrix.value=$.state.directionalShadowMatrix,Ot.spotShadowMap.value=$.state.spotShadowMap,Ot.spotLightMatrix.value=$.state.spotLightMatrix,Ot.spotLightMap.value=$.state.spotLightMap,Ot.pointShadowMap.value=$.state.pointShadowMap,Ot.pointShadowMatrix.value=$.state.pointShadowMatrix),nt.currentProgram=ee,nt.uniformsList=null,ee}function zc(B){if(B.uniformsList===null){const j=B.currentProgram.getUniforms();B.uniformsList=Ga.seqWithValue(j.seq,B.uniforms)}return B.uniformsList}function Bc(B,j){const et=Rt.get(B);et.outputColorSpace=j.outputColorSpace,et.batching=j.batching,et.batchingColor=j.batchingColor,et.instancing=j.instancing,et.instancingColor=j.instancingColor,et.instancingMorph=j.instancingMorph,et.skinning=j.skinning,et.morphTargets=j.morphTargets,et.morphNormals=j.morphNormals,et.morphColors=j.morphColors,et.morphTargetsCount=j.morphTargetsCount,et.numClippingPlanes=j.numClippingPlanes,et.numIntersection=j.numClipIntersection,et.vertexAlphas=j.vertexAlphas,et.vertexTangents=j.vertexTangents,et.toneMapping=j.toneMapping}function Tu(B,j,et,nt,$){j.isScene!==!0&&(j=Gt),G.resetTextureUnits();const _t=j.fog,Tt=nt.isMeshStandardMaterial?j.environment:null,Ut=U===null?M.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:hr,Nt=(nt.isMeshStandardMaterial?tt:O).get(nt.envMap||Tt),$t=nt.vertexColors===!0&&!!et.attributes.color&&et.attributes.color.itemSize===4,ee=!!et.attributes.tangent&&(!!nt.normalMap||nt.anisotropy>0),Ot=!!et.morphAttributes.position,de=!!et.morphAttributes.normal,we=!!et.morphAttributes.color;let Ae=ji;nt.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(Ae=M.toneMapping);const _n=et.morphAttributes.position||et.morphAttributes.normal||et.morphAttributes.color,pe=_n!==void 0?_n.length:0,zt=Rt.get(nt),bi=g.state.lights;if(H===!0&&(Z===!0||B!==m)){const Fn=B===m&&nt.id===v;gt.setState(nt,B,Fn)}let me=!1;nt.version===zt.__version?(zt.needsLights&&zt.lightsStateVersion!==bi.state.version||zt.outputColorSpace!==Ut||$.isBatchedMesh&&zt.batching===!1||!$.isBatchedMesh&&zt.batching===!0||$.isBatchedMesh&&zt.batchingColor===!0&&$.colorTexture===null||$.isBatchedMesh&&zt.batchingColor===!1&&$.colorTexture!==null||$.isInstancedMesh&&zt.instancing===!1||!$.isInstancedMesh&&zt.instancing===!0||$.isSkinnedMesh&&zt.skinning===!1||!$.isSkinnedMesh&&zt.skinning===!0||$.isInstancedMesh&&zt.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&zt.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&zt.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&zt.instancingMorph===!1&&$.morphTexture!==null||zt.envMap!==Nt||nt.fog===!0&&zt.fog!==_t||zt.numClippingPlanes!==void 0&&(zt.numClippingPlanes!==gt.numPlanes||zt.numIntersection!==gt.numIntersection)||zt.vertexAlphas!==$t||zt.vertexTangents!==ee||zt.morphTargets!==Ot||zt.morphNormals!==de||zt.morphColors!==we||zt.toneMapping!==Ae||zt.morphTargetsCount!==pe)&&(me=!0):(me=!0,zt.__version=nt.version);let qn=zt.currentProgram;me===!0&&(qn=ta(nt,j,$));let Ss=!1,En=!1,mr=!1;const Ce=qn.getUniforms(),ii=zt.uniforms;if(yt.useProgram(qn.program)&&(Ss=!0,En=!0,mr=!0),nt.id!==v&&(v=nt.id,En=!0),Ss||m!==B){yt.buffers.depth.getReversed()?(Q.copy(B.projectionMatrix),Ld(Q),kd(Q),Ce.setValue(q,"projectionMatrix",Q)):Ce.setValue(q,"projectionMatrix",B.projectionMatrix),Ce.setValue(q,"viewMatrix",B.matrixWorldInverse);const Fi=Ce.map.cameraPosition;Fi!==void 0&&Fi.setValue(q,vt.setFromMatrixPosition(B.matrixWorld)),Dt.logarithmicDepthBuffer&&Ce.setValue(q,"logDepthBufFC",2/(Math.log(B.far+1)/Math.LN2)),(nt.isMeshPhongMaterial||nt.isMeshToonMaterial||nt.isMeshLambertMaterial||nt.isMeshBasicMaterial||nt.isMeshStandardMaterial||nt.isShaderMaterial)&&Ce.setValue(q,"isOrthographic",B.isOrthographicCamera===!0),m!==B&&(m=B,En=!0,mr=!0)}if($.isSkinnedMesh){Ce.setOptional(q,$,"bindMatrix"),Ce.setOptional(q,$,"bindMatrixInverse");const Fn=$.skeleton;Fn&&(Fn.boneTexture===null&&Fn.computeBoneTexture(),Ce.setValue(q,"boneTexture",Fn.boneTexture,G))}$.isBatchedMesh&&(Ce.setOptional(q,$,"batchingTexture"),Ce.setValue(q,"batchingTexture",$._matricesTexture,G),Ce.setOptional(q,$,"batchingIdTexture"),Ce.setValue(q,"batchingIdTexture",$._indirectTexture,G),Ce.setOptional(q,$,"batchingColorTexture"),$._colorsTexture!==null&&Ce.setValue(q,"batchingColorTexture",$._colorsTexture,G));const gr=et.morphAttributes;if((gr.position!==void 0||gr.normal!==void 0||gr.color!==void 0)&&jt.update($,et,qn),(En||zt.receiveShadow!==$.receiveShadow)&&(zt.receiveShadow=$.receiveShadow,Ce.setValue(q,"receiveShadow",$.receiveShadow)),nt.isMeshGouraudMaterial&&nt.envMap!==null&&(ii.envMap.value=Nt,ii.flipEnvMap.value=Nt.isCubeTexture&&Nt.isRenderTargetTexture===!1?-1:1),nt.isMeshStandardMaterial&&nt.envMap===null&&j.environment!==null&&(ii.envMapIntensity.value=j.environmentIntensity),En&&(Ce.setValue(q,"toneMappingExposure",M.toneMappingExposure),zt.needsLights&&Au(ii,mr),_t&&nt.fog===!0&&St.refreshFogUniforms(ii,_t),St.refreshMaterialUniforms(ii,nt,T,N,g.state.transmissionRenderTarget[B.id]),Ga.upload(q,zc(zt),ii,G)),nt.isShaderMaterial&&nt.uniformsNeedUpdate===!0&&(Ga.upload(q,zc(zt),ii,G),nt.uniformsNeedUpdate=!1),nt.isSpriteMaterial&&Ce.setValue(q,"center",$.center),Ce.setValue(q,"modelViewMatrix",$.modelViewMatrix),Ce.setValue(q,"normalMatrix",$.normalMatrix),Ce.setValue(q,"modelMatrix",$.matrixWorld),nt.isShaderMaterial||nt.isRawShaderMaterial){const Fn=nt.uniformsGroups;for(let Fi=0,zi=Fn.length;Fi<zi;Fi++){const Hc=Fn[Fi];K.update(Hc,qn),K.bind(Hc,qn)}}return qn}function Au(B,j){B.ambientLightColor.needsUpdate=j,B.lightProbe.needsUpdate=j,B.directionalLights.needsUpdate=j,B.directionalLightShadows.needsUpdate=j,B.pointLights.needsUpdate=j,B.pointLightShadows.needsUpdate=j,B.spotLights.needsUpdate=j,B.spotLightShadows.needsUpdate=j,B.rectAreaLights.needsUpdate=j,B.hemisphereLights.needsUpdate=j}function Cu(B){return B.isMeshLambertMaterial||B.isMeshToonMaterial||B.isMeshPhongMaterial||B.isMeshStandardMaterial||B.isShadowMaterial||B.isShaderMaterial&&B.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(B,j,et){Rt.get(B.texture).__webglTexture=j,Rt.get(B.depthTexture).__webglTexture=et;const nt=Rt.get(B);nt.__hasExternalTextures=!0,nt.__autoAllocateDepthBuffer=et===void 0,nt.__autoAllocateDepthBuffer||dt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),nt.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(B,j){const et=Rt.get(B);et.__webglFramebuffer=j,et.__useDefaultFramebuffer=j===void 0},this.setRenderTarget=function(B,j=0,et=0){U=B,C=j,A=et;let nt=!0,$=null,_t=!1,Tt=!1;if(B){const Nt=Rt.get(B);if(Nt.__useDefaultFramebuffer!==void 0)yt.bindFramebuffer(q.FRAMEBUFFER,null),nt=!1;else if(Nt.__webglFramebuffer===void 0)G.setupRenderTarget(B);else if(Nt.__hasExternalTextures)G.rebindTextures(B,Rt.get(B.texture).__webglTexture,Rt.get(B.depthTexture).__webglTexture);else if(B.depthBuffer){const Ot=B.depthTexture;if(Nt.__boundDepthTexture!==Ot){if(Ot!==null&&Rt.has(Ot)&&(B.width!==Ot.image.width||B.height!==Ot.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");G.setupDepthRenderbuffer(B)}}const $t=B.texture;($t.isData3DTexture||$t.isDataArrayTexture||$t.isCompressedArrayTexture)&&(Tt=!0);const ee=Rt.get(B).__webglFramebuffer;B.isWebGLCubeRenderTarget?(Array.isArray(ee[j])?$=ee[j][et]:$=ee[j],_t=!0):B.samples>0&&G.useMultisampledRTT(B)===!1?$=Rt.get(B).__webglMultisampledFramebuffer:Array.isArray(ee)?$=ee[et]:$=ee,E.copy(B.viewport),I.copy(B.scissor),z=B.scissorTest}else E.copy(k).multiplyScalar(T).floor(),I.copy(W).multiplyScalar(T).floor(),z=J;if(yt.bindFramebuffer(q.FRAMEBUFFER,$)&&nt&&yt.drawBuffers(B,$),yt.viewport(E),yt.scissor(I),yt.setScissorTest(z),_t){const Nt=Rt.get(B.texture);q.framebufferTexture2D(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_CUBE_MAP_POSITIVE_X+j,Nt.__webglTexture,et)}else if(Tt){const Nt=Rt.get(B.texture),$t=j||0;q.framebufferTextureLayer(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,Nt.__webglTexture,et||0,$t)}v=-1},this.readRenderTargetPixels=function(B,j,et,nt,$,_t,Tt){if(!(B&&B.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ut=Rt.get(B).__webglFramebuffer;if(B.isWebGLCubeRenderTarget&&Tt!==void 0&&(Ut=Ut[Tt]),Ut){yt.bindFramebuffer(q.FRAMEBUFFER,Ut);try{const Nt=B.texture,$t=Nt.format,ee=Nt.type;if(!Dt.textureFormatReadable($t)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Dt.textureTypeReadable(ee)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=B.width-nt&&et>=0&&et<=B.height-$&&q.readPixels(j,et,nt,$,ie.convert($t),ie.convert(ee),_t)}finally{const Nt=U!==null?Rt.get(U).__webglFramebuffer:null;yt.bindFramebuffer(q.FRAMEBUFFER,Nt)}}},this.readRenderTargetPixelsAsync=async function(B,j,et,nt,$,_t,Tt){if(!(B&&B.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ut=Rt.get(B).__webglFramebuffer;if(B.isWebGLCubeRenderTarget&&Tt!==void 0&&(Ut=Ut[Tt]),Ut){const Nt=B.texture,$t=Nt.format,ee=Nt.type;if(!Dt.textureFormatReadable($t))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Dt.textureTypeReadable(ee))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(j>=0&&j<=B.width-nt&&et>=0&&et<=B.height-$){yt.bindFramebuffer(q.FRAMEBUFFER,Ut);const Ot=q.createBuffer();q.bindBuffer(q.PIXEL_PACK_BUFFER,Ot),q.bufferData(q.PIXEL_PACK_BUFFER,_t.byteLength,q.STREAM_READ),q.readPixels(j,et,nt,$,ie.convert($t),ie.convert(ee),0);const de=U!==null?Rt.get(U).__webglFramebuffer:null;yt.bindFramebuffer(q.FRAMEBUFFER,de);const we=q.fenceSync(q.SYNC_GPU_COMMANDS_COMPLETE,0);return q.flush(),await Dd(q,we,4),q.bindBuffer(q.PIXEL_PACK_BUFFER,Ot),q.getBufferSubData(q.PIXEL_PACK_BUFFER,0,_t),q.deleteBuffer(Ot),q.deleteSync(we),_t}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(B,j=null,et=0){B.isTexture!==!0&&(Ar("WebGLRenderer: copyFramebufferToTexture function signature has changed."),j=arguments[0]||null,B=arguments[1]);const nt=Math.pow(2,-et),$=Math.floor(B.image.width*nt),_t=Math.floor(B.image.height*nt),Tt=j!==null?j.x:0,Ut=j!==null?j.y:0;G.setTexture2D(B,0),q.copyTexSubImage2D(q.TEXTURE_2D,et,0,0,Tt,Ut,$,_t),yt.unbindTexture()},this.copyTextureToTexture=function(B,j,et=null,nt=null,$=0){B.isTexture!==!0&&(Ar("WebGLRenderer: copyTextureToTexture function signature has changed."),nt=arguments[0]||null,B=arguments[1],j=arguments[2],$=arguments[3]||0,et=null);let _t,Tt,Ut,Nt,$t,ee,Ot,de,we;const Ae=B.isCompressedTexture?B.mipmaps[$]:B.image;et!==null?(_t=et.max.x-et.min.x,Tt=et.max.y-et.min.y,Ut=et.isBox3?et.max.z-et.min.z:1,Nt=et.min.x,$t=et.min.y,ee=et.isBox3?et.min.z:0):(_t=Ae.width,Tt=Ae.height,Ut=Ae.depth||1,Nt=0,$t=0,ee=0),nt!==null?(Ot=nt.x,de=nt.y,we=nt.z):(Ot=0,de=0,we=0);const _n=ie.convert(j.format),pe=ie.convert(j.type);let zt;j.isData3DTexture?(G.setTexture3D(j,0),zt=q.TEXTURE_3D):j.isDataArrayTexture||j.isCompressedArrayTexture?(G.setTexture2DArray(j,0),zt=q.TEXTURE_2D_ARRAY):(G.setTexture2D(j,0),zt=q.TEXTURE_2D),q.pixelStorei(q.UNPACK_FLIP_Y_WEBGL,j.flipY),q.pixelStorei(q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),q.pixelStorei(q.UNPACK_ALIGNMENT,j.unpackAlignment);const bi=q.getParameter(q.UNPACK_ROW_LENGTH),me=q.getParameter(q.UNPACK_IMAGE_HEIGHT),qn=q.getParameter(q.UNPACK_SKIP_PIXELS),Ss=q.getParameter(q.UNPACK_SKIP_ROWS),En=q.getParameter(q.UNPACK_SKIP_IMAGES);q.pixelStorei(q.UNPACK_ROW_LENGTH,Ae.width),q.pixelStorei(q.UNPACK_IMAGE_HEIGHT,Ae.height),q.pixelStorei(q.UNPACK_SKIP_PIXELS,Nt),q.pixelStorei(q.UNPACK_SKIP_ROWS,$t),q.pixelStorei(q.UNPACK_SKIP_IMAGES,ee);const mr=B.isDataArrayTexture||B.isData3DTexture,Ce=j.isDataArrayTexture||j.isData3DTexture;if(B.isRenderTargetTexture||B.isDepthTexture){const ii=Rt.get(B),gr=Rt.get(j),Fn=Rt.get(ii.__renderTarget),Fi=Rt.get(gr.__renderTarget);yt.bindFramebuffer(q.READ_FRAMEBUFFER,Fn.__webglFramebuffer),yt.bindFramebuffer(q.DRAW_FRAMEBUFFER,Fi.__webglFramebuffer);for(let zi=0;zi<Ut;zi++)mr&&q.framebufferTextureLayer(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,Rt.get(B).__webglTexture,$,ee+zi),B.isDepthTexture?(Ce&&q.framebufferTextureLayer(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,Rt.get(j).__webglTexture,$,we+zi),q.blitFramebuffer(Nt,$t,_t,Tt,Ot,de,_t,Tt,q.DEPTH_BUFFER_BIT,q.NEAREST)):Ce?q.copyTexSubImage3D(zt,$,Ot,de,we+zi,Nt,$t,_t,Tt):q.copyTexSubImage2D(zt,$,Ot,de,we+zi,Nt,$t,_t,Tt);yt.bindFramebuffer(q.READ_FRAMEBUFFER,null),yt.bindFramebuffer(q.DRAW_FRAMEBUFFER,null)}else Ce?B.isDataTexture||B.isData3DTexture?q.texSubImage3D(zt,$,Ot,de,we,_t,Tt,Ut,_n,pe,Ae.data):j.isCompressedArrayTexture?q.compressedTexSubImage3D(zt,$,Ot,de,we,_t,Tt,Ut,_n,Ae.data):q.texSubImage3D(zt,$,Ot,de,we,_t,Tt,Ut,_n,pe,Ae):B.isDataTexture?q.texSubImage2D(q.TEXTURE_2D,$,Ot,de,_t,Tt,_n,pe,Ae.data):B.isCompressedTexture?q.compressedTexSubImage2D(q.TEXTURE_2D,$,Ot,de,Ae.width,Ae.height,_n,Ae.data):q.texSubImage2D(q.TEXTURE_2D,$,Ot,de,_t,Tt,_n,pe,Ae);q.pixelStorei(q.UNPACK_ROW_LENGTH,bi),q.pixelStorei(q.UNPACK_IMAGE_HEIGHT,me),q.pixelStorei(q.UNPACK_SKIP_PIXELS,qn),q.pixelStorei(q.UNPACK_SKIP_ROWS,Ss),q.pixelStorei(q.UNPACK_SKIP_IMAGES,En),$===0&&j.generateMipmaps&&q.generateMipmap(zt),yt.unbindTexture()},this.copyTextureToTexture3D=function(B,j,et=null,nt=null,$=0){return B.isTexture!==!0&&(Ar("WebGLRenderer: copyTextureToTexture3D function signature has changed."),et=arguments[0]||null,nt=arguments[1]||null,B=arguments[2],j=arguments[3],$=arguments[4]||0),Ar('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(B,j,et,nt,$)},this.initRenderTarget=function(B){Rt.get(B).__webglFramebuffer===void 0&&G.setupRenderTarget(B)},this.initTexture=function(B){B.isCubeTexture?G.setTextureCube(B,0):B.isData3DTexture?G.setTexture3D(B,0):B.isDataArrayTexture||B.isCompressedArrayTexture?G.setTexture2DArray(B,0):G.setTexture2D(B,0),yt.unbindTexture()},this.resetState=function(){C=0,A=0,U=null,yt.reset(),Se.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Di}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=he._getDrawingBufferColorSpace(t),e.unpackColorSpace=he._getUnpackColorSpace()}}class gc{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Mt(t),this.density=e}clone(){return new gc(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Vg extends Ze{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ei,this.environmentIntensity=1,this.environmentRotation=new ei,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Zh{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Wl,this.updateRanges=[],this.version=0,this.uuid=fi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[i+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=fi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=fi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const on=new X;class di{constructor(t,e,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)on.fromBufferAttribute(this,e),on.applyMatrix4(t),this.setXYZ(e,on.x,on.y,on.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)on.fromBufferAttribute(this,e),on.applyNormalMatrix(t),this.setXYZ(e,on.x,on.y,on.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)on.fromBufferAttribute(this,e),on.transformDirection(t),this.setXYZ(e,on.x,on.y,on.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=Jn(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=_e(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=_e(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=_e(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=_e(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=_e(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Jn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Jn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Jn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Jn(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=_e(e,this.array),i=_e(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=_e(e,this.array),i=_e(i,this.array),s=_e(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=_e(e,this.array),i=_e(i,this.array),s=_e(s,this.array),r=_e(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new fn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new di(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Kh extends ur{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new Mt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Fs;const Mr=new X,zs=new X,Bs=new X,Hs=new ot,br=new ot,jh=new oe,ba=new X,Sr=new X,Sa=new X,z0=new ot,Vo=new ot,B0=new ot;class Wg extends Ze{constructor(t=new Kh){if(super(),this.isSprite=!0,this.type="Sprite",Fs===void 0){Fs=new Me;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Zh(e,5);Fs.setIndex([0,1,2,0,2,3]),Fs.setAttribute("position",new di(i,3,0,!1)),Fs.setAttribute("uv",new di(i,2,3,!1))}this.geometry=Fs,this.material=t,this.center=new ot(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),zs.setFromMatrixScale(this.matrixWorld),jh.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Bs.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&zs.multiplyScalar(-Bs.z);const i=this.material.rotation;let s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));const a=this.center;wa(ba.set(-.5,-.5,0),Bs,a,zs,s,r),wa(Sr.set(.5,-.5,0),Bs,a,zs,s,r),wa(Sa.set(.5,.5,0),Bs,a,zs,s,r),z0.set(0,0),Vo.set(1,0),B0.set(1,1);let o=t.ray.intersectTriangle(ba,Sr,Sa,!1,Mr);if(o===null&&(wa(Sr.set(-.5,.5,0),Bs,a,zs,s,r),Vo.set(0,1),o=t.ray.intersectTriangle(ba,Sa,Sr,!1,Mr),o===null))return;const l=t.ray.origin.distanceTo(Mr);l<t.near||l>t.far||e.push({distance:l,point:Mr.clone(),uv:Vn.getInterpolation(Mr,ba,Sr,Sa,z0,Vo,B0,new ot),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function wa(n,t,e,i,s,r){Hs.subVectors(n,e).addScalar(.5).multiply(i),s!==void 0?(br.x=r*Hs.x-s*Hs.y,br.y=s*Hs.x+r*Hs.y):br.copy(Hs),n.copy(t),n.x+=br.x,n.y+=br.y,n.applyMatrix4(jh)}class $h extends an{constructor(t=null,e=1,i=1,s,r,a,o,l,c=In,h=In,f,u){super(null,a,o,l,c,h,s,r,f,u),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class H0 extends fn{constructor(t,e,i,s=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Gs=new oe,G0=new oe,Ea=[],V0=new vi,Xg=new oe,wr=new xe,Er=new ys;class Yg extends xe{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new H0(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,Xg)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new vi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Gs),V0.copy(t.boundingBox).applyMatrix4(Gs),this.boundingBox.union(V0)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new ys),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Gs),Er.copy(t.boundingSphere).applyMatrix4(Gs),this.boundingSphere.union(Er)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const i=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,a=t*r+1;for(let o=0;o<i.length;o++)i[o]=s[a+o]}raycast(t,e){const i=this.matrixWorld,s=this.count;if(wr.geometry=this.geometry,wr.material=this.material,wr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Er.copy(this.boundingSphere),Er.applyMatrix4(i),t.ray.intersectsSphere(Er)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Gs),G0.multiplyMatrices(i,Gs),wr.matrixWorld=G0,wr.raycast(t,Ea);for(let a=0,o=Ea.length;a<o;a++){const l=Ea[a];l.instanceId=r,l.object=this,e.push(l)}Ea.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new H0(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const i=e.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new $h(new Float32Array(s*this.count),s,this.count,ac,ui));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<i.length;c++)a+=i[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=s*t;r[l]=o,r.set(i,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class _c extends an{constructor(t,e,i,s,r,a,o,l,c){super(t,e,i,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class yi{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let i,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)i=this.getPoint(a/t),r+=i.distanceTo(s),e.push(r),s=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const i=this.getLengths();let s=0;const r=i.length;let a;e?a=e:a=t*i[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=i[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===a)return s/(r-1);const h=i[s],u=i[s+1]-h,d=(a-h)/u;return(s+d)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new ot:new X);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){const i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e){const i=new X,s=[],r=[],a=[],o=new X,l=new oe;for(let d=0;d<=t;d++){const y=d/t;s[d]=this.getTangentAt(y,new X)}r[0]=new X,a[0]=new X;let c=Number.MAX_VALUE;const h=Math.abs(s[0].x),f=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,i.set(1,0,0)),f<=c&&(c=f,i.set(0,1,0)),u<=c&&i.set(0,0,1),o.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(s[d-1],s[d]),o.length()>Number.EPSILON){o.normalize();const y=Math.acos(Fe(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(o,y))}a[d].crossVectors(s[d],r[d])}if(e===!0){let d=Math.acos(Fe(r[0].dot(r[t]),-1,1));d/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(d=-d);for(let y=1;y<=t;y++)r[y].applyMatrix4(l.makeRotationAxis(s[y],d*y)),a[y].crossVectors(s[y],r[y])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class vc extends yi{constructor(t=0,e=0,i=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new ot){const i=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);const o=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),f=Math.sin(this.aRotation),u=l-this.aX,d=c-this.aY;l=u*h-d*f+this.aX,c=u*f+d*h+this.aY}return i.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class qg extends vc{constructor(t,e,i,s,r,a){super(t,e,i,i,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function yc(){let n=0,t=0,e=0,i=0;function s(r,a,o,l){n=r,t=o,e=-3*r+3*a-2*o-l,i=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,f){let u=(a-r)/c-(o-r)/(c+h)+(o-a)/h,d=(o-a)/h-(l-a)/(h+f)+(l-o)/f;u*=h,d*=h,s(a,o,u,d)},calc:function(r){const a=r*r,o=a*r;return n+t*r+e*a+i*o}}}const Ta=new X,Wo=new yc,Xo=new yc,Yo=new yc;class ao extends yi{constructor(t=[],e=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=s}getPoint(t,e=new X){const i=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(Ta.subVectors(s[0],s[1]).add(s[0]),c=Ta);const f=s[o%r],u=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(Ta.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Ta),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let y=Math.pow(c.distanceToSquared(f),d),_=Math.pow(f.distanceToSquared(u),d),p=Math.pow(u.distanceToSquared(h),d);_<1e-4&&(_=1),y<1e-4&&(y=_),p<1e-4&&(p=_),Wo.initNonuniformCatmullRom(c.x,f.x,u.x,h.x,y,_,p),Xo.initNonuniformCatmullRom(c.y,f.y,u.y,h.y,y,_,p),Yo.initNonuniformCatmullRom(c.z,f.z,u.z,h.z,y,_,p)}else this.curveType==="catmullrom"&&(Wo.initCatmullRom(c.x,f.x,u.x,h.x,this.tension),Xo.initCatmullRom(c.y,f.y,u.y,h.y,this.tension),Yo.initCatmullRom(c.z,f.z,u.z,h.z,this.tension));return i.set(Wo.calc(l),Xo.calc(l),Yo.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(new X().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function W0(n,t,e,i,s){const r=(i-t)*.5,a=(s-e)*.5,o=n*n,l=n*o;return(2*e-2*i+r+a)*l+(-3*e+3*i-2*r-a)*o+r*n+e}function Zg(n,t){const e=1-n;return e*e*t}function Kg(n,t){return 2*(1-n)*n*t}function jg(n,t){return n*n*t}function Ir(n,t,e,i){return Zg(n,t)+Kg(n,e)+jg(n,i)}function $g(n,t){const e=1-n;return e*e*e*t}function Jg(n,t){const e=1-n;return 3*e*e*n*t}function Qg(n,t){return 3*(1-n)*n*n*t}function t_(n,t){return n*n*n*t}function Ur(n,t,e,i,s){return $g(n,t)+Jg(n,e)+Qg(n,i)+t_(n,s)}class Jh extends yi{constructor(t=new ot,e=new ot,i=new ot,s=new ot){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new ot){const i=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(Ur(t,s.x,r.x,a.x,o.x),Ur(t,s.y,r.y,a.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class e_ extends yi{constructor(t=new X,e=new X,i=new X,s=new X){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new X){const i=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(Ur(t,s.x,r.x,a.x,o.x),Ur(t,s.y,r.y,a.y,o.y),Ur(t,s.z,r.z,a.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Qh extends yi{constructor(t=new ot,e=new ot){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ot){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ot){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class n_ extends yi{constructor(t=new X,e=new X){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new X){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new X){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class tu extends yi{constructor(t=new ot,e=new ot,i=new ot){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new ot){const i=e,s=this.v0,r=this.v1,a=this.v2;return i.set(Ir(t,s.x,r.x,a.x),Ir(t,s.y,r.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class eu extends yi{constructor(t=new X,e=new X,i=new X){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new X){const i=e,s=this.v0,r=this.v1,a=this.v2;return i.set(Ir(t,s.x,r.x,a.x),Ir(t,s.y,r.y,a.y),Ir(t,s.z,r.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class nu extends yi{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ot){const i=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],f=s[a>s.length-3?s.length-1:a+2];return i.set(W0(o,l.x,c.x,h.x,f.x),W0(o,l.y,c.y,h.y,f.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(new ot().fromArray(s))}return this}}var Ja=Object.freeze({__proto__:null,ArcCurve:qg,CatmullRomCurve3:ao,CubicBezierCurve:Jh,CubicBezierCurve3:e_,EllipseCurve:vc,LineCurve:Qh,LineCurve3:n_,QuadraticBezierCurve:tu,QuadraticBezierCurve3:eu,SplineCurve:nu});class i_ extends yi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ja[i](e,t))}return this}getPoint(t,e){const i=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=i){const a=s[r]-i,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let i=0,s=this.curves.length;i<s;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let i;for(let s=0,r=this.curves;s<r.length;s++){const a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){const h=l[c];i&&i.equals(h)||(e.push(h),i=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const s=t.curves[e];this.curves.push(new Ja[s.type]().fromJSON(s))}return this}}class Hr extends i_{constructor(t){super(),this.type="Path",this.currentPoint=new ot,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const i=new Qh(this.currentPoint.clone(),new ot(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,s){const r=new tu(this.currentPoint.clone(),new ot(t,e),new ot(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(t,e,i,s,r,a){const o=new Jh(this.currentPoint.clone(),new ot(t,e),new ot(i,s),new ot(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),i=new nu(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,s,r,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,i,s,r,a),this}absarc(t,e,i,s,r,a){return this.absellipse(t,e,i,i,s,r,a),this}ellipse(t,e,i,s,r,a,o,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,i,s,r,a,o,l),this}absellipse(t,e,i,s,r,a,o,l){const c=new vc(t,e,i,s,r,a,o,l);if(this.curves.length>0){const f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class gi extends Me{constructor(t=[new ot(0,-.5),new ot(.5,0),new ot(0,.5)],e=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:i,phiLength:s},e=Math.floor(e),s=Fe(s,0,Math.PI*2);const r=[],a=[],o=[],l=[],c=[],h=1/e,f=new X,u=new ot,d=new X,y=new X,_=new X;let p=0,g=0;for(let S=0;S<=t.length-1;S++)switch(S){case 0:p=t[S+1].x-t[S].x,g=t[S+1].y-t[S].y,d.x=g*1,d.y=-p,d.z=g*0,_.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case t.length-1:l.push(_.x,_.y,_.z);break;default:p=t[S+1].x-t[S].x,g=t[S+1].y-t[S].y,d.x=g*1,d.y=-p,d.z=g*0,y.copy(d),d.x+=_.x,d.y+=_.y,d.z+=_.z,d.normalize(),l.push(d.x,d.y,d.z),_.copy(y)}for(let S=0;S<=e;S++){const b=i+S*h*s,M=Math.sin(b),P=Math.cos(b);for(let C=0;C<=t.length-1;C++){f.x=t[C].x*M,f.y=t[C].y,f.z=t[C].x*P,a.push(f.x,f.y,f.z),u.x=S/e,u.y=C/(t.length-1),o.push(u.x,u.y);const A=l[3*C+0]*M,U=l[3*C+1],v=l[3*C+0]*P;c.push(A,U,v)}}for(let S=0;S<e;S++)for(let b=0;b<t.length-1;b++){const M=b+S*t.length,P=M,C=M+t.length,A=M+t.length+1,U=M+1;r.push(P,C,U),r.push(A,U,C)}this.setIndex(r),this.setAttribute("position",new Bt(a,3)),this.setAttribute("uv",new Bt(o,2)),this.setAttribute("normal",new Bt(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new gi(t.points,t.segments,t.phiStart,t.phiLength)}}class Zr extends gi{constructor(t=1,e=1,i=4,s=8){const r=new Hr;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(i),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:i,radialSegments:s}}static fromJSON(t){return new Zr(t.radius,t.length,t.capSegments,t.radialSegments)}}class xs extends Me{constructor(t=1,e=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:s},e=Math.max(3,e);const r=[],a=[],o=[],l=[],c=new X,h=new ot;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let f=0,u=3;f<=e;f++,u+=3){const d=i+f/e*s;c.x=t*Math.cos(d),c.y=t*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[u]/t+1)/2,h.y=(a[u+1]/t+1)/2,l.push(h.x,h.y)}for(let f=1;f<=e;f++)r.push(f,f+1,0);this.setIndex(r),this.setAttribute("position",new Bt(a,3)),this.setAttribute("normal",new Bt(o,3)),this.setAttribute("uv",new Bt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new xs(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Yt extends Me{constructor(t=1,e=1,i=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const h=[],f=[],u=[],d=[];let y=0;const _=[],p=i/2;let g=0;S(),a===!1&&(t>0&&b(!0),e>0&&b(!1)),this.setIndex(h),this.setAttribute("position",new Bt(f,3)),this.setAttribute("normal",new Bt(u,3)),this.setAttribute("uv",new Bt(d,2));function S(){const M=new X,P=new X;let C=0;const A=(e-t)/i;for(let U=0;U<=r;U++){const v=[],m=U/r,E=m*(e-t)+t;for(let I=0;I<=s;I++){const z=I/s,L=z*l+o,F=Math.sin(L),D=Math.cos(L);P.x=E*F,P.y=-m*i+p,P.z=E*D,f.push(P.x,P.y,P.z),M.set(F,A,D).normalize(),u.push(M.x,M.y,M.z),d.push(z,1-m),v.push(y++)}_.push(v)}for(let U=0;U<s;U++)for(let v=0;v<r;v++){const m=_[v][U],E=_[v+1][U],I=_[v+1][U+1],z=_[v][U+1];(t>0||v!==0)&&(h.push(m,E,z),C+=3),(e>0||v!==r-1)&&(h.push(E,I,z),C+=3)}c.addGroup(g,C,0),g+=C}function b(M){const P=y,C=new ot,A=new X;let U=0;const v=M===!0?t:e,m=M===!0?1:-1;for(let I=1;I<=s;I++)f.push(0,p*m,0),u.push(0,m,0),d.push(.5,.5),y++;const E=y;for(let I=0;I<=s;I++){const L=I/s*l+o,F=Math.cos(L),D=Math.sin(L);A.x=v*D,A.y=p*m,A.z=v*F,f.push(A.x,A.y,A.z),u.push(0,m,0),C.x=F*.5+.5,C.y=D*.5*m+.5,d.push(C.x,C.y),y++}for(let I=0;I<s;I++){const z=P+I,L=E+I;M===!0?h.push(L,L+1,z):h.push(L+1,L,z),U+=3}c.addGroup(g,U,M===!0?1:2),g+=U}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Yt(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class pn extends Yt{constructor(t=1,e=1,i=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,i,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new pn(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class oo extends Me{constructor(t=[],e=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:s};const r=[],a=[];o(s),c(i),h(),this.setAttribute("position",new Bt(r,3)),this.setAttribute("normal",new Bt(r.slice(),3)),this.setAttribute("uv",new Bt(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(S){const b=new X,M=new X,P=new X;for(let C=0;C<e.length;C+=3)d(e[C+0],b),d(e[C+1],M),d(e[C+2],P),l(b,M,P,S)}function l(S,b,M,P){const C=P+1,A=[];for(let U=0;U<=C;U++){A[U]=[];const v=S.clone().lerp(M,U/C),m=b.clone().lerp(M,U/C),E=C-U;for(let I=0;I<=E;I++)I===0&&U===C?A[U][I]=v:A[U][I]=v.clone().lerp(m,I/E)}for(let U=0;U<C;U++)for(let v=0;v<2*(C-U)-1;v++){const m=Math.floor(v/2);v%2===0?(u(A[U][m+1]),u(A[U+1][m]),u(A[U][m])):(u(A[U][m+1]),u(A[U+1][m+1]),u(A[U+1][m]))}}function c(S){const b=new X;for(let M=0;M<r.length;M+=3)b.x=r[M+0],b.y=r[M+1],b.z=r[M+2],b.normalize().multiplyScalar(S),r[M+0]=b.x,r[M+1]=b.y,r[M+2]=b.z}function h(){const S=new X;for(let b=0;b<r.length;b+=3){S.x=r[b+0],S.y=r[b+1],S.z=r[b+2];const M=p(S)/2/Math.PI+.5,P=g(S)/Math.PI+.5;a.push(M,1-P)}y(),f()}function f(){for(let S=0;S<a.length;S+=6){const b=a[S+0],M=a[S+2],P=a[S+4],C=Math.max(b,M,P),A=Math.min(b,M,P);C>.9&&A<.1&&(b<.2&&(a[S+0]+=1),M<.2&&(a[S+2]+=1),P<.2&&(a[S+4]+=1))}}function u(S){r.push(S.x,S.y,S.z)}function d(S,b){const M=S*3;b.x=t[M+0],b.y=t[M+1],b.z=t[M+2]}function y(){const S=new X,b=new X,M=new X,P=new X,C=new ot,A=new ot,U=new ot;for(let v=0,m=0;v<r.length;v+=9,m+=6){S.set(r[v+0],r[v+1],r[v+2]),b.set(r[v+3],r[v+4],r[v+5]),M.set(r[v+6],r[v+7],r[v+8]),C.set(a[m+0],a[m+1]),A.set(a[m+2],a[m+3]),U.set(a[m+4],a[m+5]),P.copy(S).add(b).add(M).divideScalar(3);const E=p(P);_(C,m+0,S,E),_(A,m+2,b,E),_(U,m+4,M,E)}}function _(S,b,M,P){P<0&&S.x===1&&(a[b]=S.x-1),M.x===0&&M.z===0&&(a[b]=P/2/Math.PI+.5)}function p(S){return Math.atan2(S.z,-S.x)}function g(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new oo(t.vertices,t.indices,t.radius,t.details)}}class Ms extends oo{constructor(t=1,e=0){const i=(1+Math.sqrt(5))/2,s=1/i,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-i,0,-s,i,0,s,-i,0,s,i,-s,-i,0,-s,i,0,s,-i,0,s,i,0,-i,0,-s,i,0,-s,-i,0,s,i,0,s],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Ms(t.radius,t.detail)}}class bs extends Hr{constructor(t){super(t),this.uuid=fi(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let i=0,s=this.holes.length;i<s;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const s=t.holes[e];this.holes.push(new Hr().fromJSON(s))}return this}}const s_={triangulate:function(n,t,e=2){const i=t&&t.length,s=i?t[0]*e:n.length;let r=iu(n,0,s,e,!0);const a=[];if(!r||r.next===r.prev)return a;let o,l,c,h,f,u,d;if(i&&(r=c_(n,t,r,e)),n.length>80*e){o=c=n[0],l=h=n[1];for(let y=e;y<s;y+=e)f=n[y],u=n[y+1],f<o&&(o=f),u<l&&(l=u),f>c&&(c=f),u>h&&(h=u);d=Math.max(c-o,h-l),d=d!==0?32767/d:0}return Gr(r,a,e,o,l,d,0),a}};function iu(n,t,e,i,s){let r,a;if(s===x_(n,t,e,i)>0)for(r=t;r<e;r+=i)a=X0(r,n[r],n[r+1],a);else for(r=e-i;r>=t;r-=i)a=X0(r,n[r],n[r+1],a);return a&&lo(a,a.next)&&(Wr(a),a=a.next),a}function _s(n,t){if(!n)return n;t||(t=n);let e=n,i;do if(i=!1,!e.steiner&&(lo(e,e.next)||Le(e.prev,e,e.next)===0)){if(Wr(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function Gr(n,t,e,i,s,r,a){if(!n)return;!a&&r&&p_(n,i,s,r);let o=n,l,c;for(;n.prev!==n.next;){if(l=n.prev,c=n.next,r?a_(n,i,s,r):r_(n)){t.push(l.i/e|0),t.push(n.i/e|0),t.push(c.i/e|0),Wr(n),n=c.next,o=c.next;continue}if(n=c,n===o){a?a===1?(n=o_(_s(n),t,e),Gr(n,t,e,i,s,r,2)):a===2&&l_(n,t,e,i,s,r):Gr(_s(n),t,e,i,s,r,1);break}}}function r_(n){const t=n.prev,e=n,i=n.next;if(Le(t,e,i)>=0)return!1;const s=t.x,r=e.x,a=i.x,o=t.y,l=e.y,c=i.y,h=s<r?s<a?s:a:r<a?r:a,f=o<l?o<c?o:c:l<c?l:c,u=s>r?s>a?s:a:r>a?r:a,d=o>l?o>c?o:c:l>c?l:c;let y=i.next;for(;y!==t;){if(y.x>=h&&y.x<=u&&y.y>=f&&y.y<=d&&Zs(s,o,r,l,a,c,y.x,y.y)&&Le(y.prev,y,y.next)>=0)return!1;y=y.next}return!0}function a_(n,t,e,i){const s=n.prev,r=n,a=n.next;if(Le(s,r,a)>=0)return!1;const o=s.x,l=r.x,c=a.x,h=s.y,f=r.y,u=a.y,d=o<l?o<c?o:c:l<c?l:c,y=h<f?h<u?h:u:f<u?f:u,_=o>l?o>c?o:c:l>c?l:c,p=h>f?h>u?h:u:f>u?f:u,g=Yl(d,y,t,e,i),S=Yl(_,p,t,e,i);let b=n.prevZ,M=n.nextZ;for(;b&&b.z>=g&&M&&M.z<=S;){if(b.x>=d&&b.x<=_&&b.y>=y&&b.y<=p&&b!==s&&b!==a&&Zs(o,h,l,f,c,u,b.x,b.y)&&Le(b.prev,b,b.next)>=0||(b=b.prevZ,M.x>=d&&M.x<=_&&M.y>=y&&M.y<=p&&M!==s&&M!==a&&Zs(o,h,l,f,c,u,M.x,M.y)&&Le(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;b&&b.z>=g;){if(b.x>=d&&b.x<=_&&b.y>=y&&b.y<=p&&b!==s&&b!==a&&Zs(o,h,l,f,c,u,b.x,b.y)&&Le(b.prev,b,b.next)>=0)return!1;b=b.prevZ}for(;M&&M.z<=S;){if(M.x>=d&&M.x<=_&&M.y>=y&&M.y<=p&&M!==s&&M!==a&&Zs(o,h,l,f,c,u,M.x,M.y)&&Le(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function o_(n,t,e){let i=n;do{const s=i.prev,r=i.next.next;!lo(s,r)&&su(s,i,i.next,r)&&Vr(s,r)&&Vr(r,s)&&(t.push(s.i/e|0),t.push(i.i/e|0),t.push(r.i/e|0),Wr(i),Wr(i.next),i=n=r),i=i.next}while(i!==n);return _s(i)}function l_(n,t,e,i,s,r){let a=n;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&__(a,o)){let l=ru(a,o);a=_s(a,a.next),l=_s(l,l.next),Gr(a,t,e,i,s,r,0),Gr(l,t,e,i,s,r,0);return}o=o.next}a=a.next}while(a!==n)}function c_(n,t,e,i){const s=[];let r,a,o,l,c;for(r=0,a=t.length;r<a;r++)o=t[r]*i,l=r<a-1?t[r+1]*i:n.length,c=iu(n,o,l,i,!1),c===c.next&&(c.steiner=!0),s.push(g_(c));for(s.sort(h_),r=0;r<s.length;r++)e=u_(s[r],e);return e}function h_(n,t){return n.x-t.x}function u_(n,t){const e=d_(n,t);if(!e)return t;const i=ru(e,n);return _s(i,i.next),_s(e,e.next)}function d_(n,t){let e=t,i=-1/0,s;const r=n.x,a=n.y;do{if(a<=e.y&&a>=e.next.y&&e.next.y!==e.y){const u=e.x+(a-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=r&&u>i&&(i=u,s=e.x<e.next.x?e:e.next,u===r))return s}e=e.next}while(e!==t);if(!s)return null;const o=s,l=s.x,c=s.y;let h=1/0,f;e=s;do r>=e.x&&e.x>=l&&r!==e.x&&Zs(a<c?r:i,a,l,c,a<c?i:r,a,e.x,e.y)&&(f=Math.abs(a-e.y)/(r-e.x),Vr(e,n)&&(f<h||f===h&&(e.x>s.x||e.x===s.x&&f_(s,e)))&&(s=e,h=f)),e=e.next;while(e!==o);return s}function f_(n,t){return Le(n.prev,n,t.prev)<0&&Le(t.next,n,n.next)<0}function p_(n,t,e,i){let s=n;do s.z===0&&(s.z=Yl(s.x,s.y,t,e,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,m_(s)}function m_(n){let t,e,i,s,r,a,o,l,c=1;do{for(e=n,n=null,r=null,a=0;e;){for(a++,i=e,o=0,t=0;t<c&&(o++,i=i.nextZ,!!i);t++);for(l=c;o>0||l>0&&i;)o!==0&&(l===0||!i||e.z<=i.z)?(s=e,e=e.nextZ,o--):(s=i,i=i.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;e=i}r.nextZ=null,c*=2}while(a>1);return n}function Yl(n,t,e,i,s){return n=(n-e)*s|0,t=(t-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,n|t<<1}function g_(n){let t=n,e=n;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==n);return e}function Zs(n,t,e,i,s,r,a,o){return(s-a)*(t-o)>=(n-a)*(r-o)&&(n-a)*(i-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(i-o)}function __(n,t){return n.next.i!==t.i&&n.prev.i!==t.i&&!v_(n,t)&&(Vr(n,t)&&Vr(t,n)&&y_(n,t)&&(Le(n.prev,n,t.prev)||Le(n,t.prev,t))||lo(n,t)&&Le(n.prev,n,n.next)>0&&Le(t.prev,t,t.next)>0)}function Le(n,t,e){return(t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y)}function lo(n,t){return n.x===t.x&&n.y===t.y}function su(n,t,e,i){const s=Ca(Le(n,t,e)),r=Ca(Le(n,t,i)),a=Ca(Le(e,i,n)),o=Ca(Le(e,i,t));return!!(s!==r&&a!==o||s===0&&Aa(n,e,t)||r===0&&Aa(n,i,t)||a===0&&Aa(e,n,i)||o===0&&Aa(e,t,i))}function Aa(n,t,e){return t.x<=Math.max(n.x,e.x)&&t.x>=Math.min(n.x,e.x)&&t.y<=Math.max(n.y,e.y)&&t.y>=Math.min(n.y,e.y)}function Ca(n){return n>0?1:n<0?-1:0}function v_(n,t){let e=n;do{if(e.i!==n.i&&e.next.i!==n.i&&e.i!==t.i&&e.next.i!==t.i&&su(e,e.next,n,t))return!0;e=e.next}while(e!==n);return!1}function Vr(n,t){return Le(n.prev,n,n.next)<0?Le(n,t,n.next)>=0&&Le(n,n.prev,t)>=0:Le(n,t,n.prev)<0||Le(n,n.next,t)<0}function y_(n,t){let e=n,i=!1;const s=(n.x+t.x)/2,r=(n.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==n);return i}function ru(n,t){const e=new ql(n.i,n.x,n.y),i=new ql(t.i,t.x,t.y),s=n.next,r=t.prev;return n.next=t,t.prev=n,e.next=s,s.prev=e,i.next=e,e.prev=i,r.next=i,i.prev=r,i}function X0(n,t,e,i){const s=new ql(n,t,e);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function Wr(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function ql(n,t,e){this.i=n,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function x_(n,t,e,i){let s=0;for(let r=t,a=e-i;r<e;r+=i)s+=(n[a]-n[r])*(n[r+1]+n[a+1]),a=r;return s}class Nr{static area(t){const e=t.length;let i=0;for(let s=e-1,r=0;r<e;s=r++)i+=t[s].x*t[r].y-t[r].x*t[s].y;return i*.5}static isClockWise(t){return Nr.area(t)<0}static triangulateShape(t,e){const i=[],s=[],r=[];Y0(t),q0(i,t);let a=t.length;e.forEach(Y0);for(let l=0;l<e.length;l++)s.push(a),a+=e[l].length,q0(i,e[l]);const o=s_.triangulate(i,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}}function Y0(n){const t=n.length;t>2&&n[t-1].equals(n[0])&&n.pop()}function q0(n,t){for(let e=0;e<t.length;e++)n.push(t[e].x),n.push(t[e].y)}class Qi extends Me{constructor(t=new bs([new ot(.5,.5),new ot(-.5,.5),new ot(-.5,-.5),new ot(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const i=this,s=[],r=[];for(let o=0,l=t.length;o<l;o++){const c=t[o];a(c)}this.setAttribute("position",new Bt(s,3)),this.setAttribute("uv",new Bt(r,2)),this.computeVertexNormals();function a(o){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,f=e.depth!==void 0?e.depth:1;let u=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,y=e.bevelSize!==void 0?e.bevelSize:d-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,p=e.bevelSegments!==void 0?e.bevelSegments:3;const g=e.extrudePath,S=e.UVGenerator!==void 0?e.UVGenerator:M_;let b,M=!1,P,C,A,U;g&&(b=g.getSpacedPoints(h),M=!0,u=!1,P=g.computeFrenetFrames(h,!1),C=new X,A=new X,U=new X),u||(p=0,d=0,y=0,_=0);const v=o.extractPoints(c);let m=v.shape;const E=v.holes;if(!Nr.isClockWise(m)){m=m.reverse();for(let st=0,ft=E.length;st<ft;st++){const q=E[st];Nr.isClockWise(q)&&(E[st]=q.reverse())}}const z=Nr.triangulateShape(m,E),L=m;for(let st=0,ft=E.length;st<ft;st++){const q=E[st];m=m.concat(q)}function F(st,ft,q){return ft||console.error("THREE.ExtrudeGeometry: vec does not exist"),st.clone().addScaledVector(ft,q)}const D=m.length,N=z.length;function T(st,ft,q){let Ft,dt,Dt;const yt=st.x-ft.x,Wt=st.y-ft.y,Rt=q.x-st.x,G=q.y-st.y,O=yt*yt+Wt*Wt,tt=yt*G-Wt*Rt;if(Math.abs(tt)>Number.EPSILON){const rt=Math.sqrt(O),ut=Math.sqrt(Rt*Rt+G*G),at=ft.x-Wt/rt,It=ft.y+yt/rt,St=q.x-G/ut,Pt=q.y+Rt/ut,re=((St-at)*G-(Pt-It)*Rt)/(yt*G-Wt*Rt);Ft=at+yt*re-st.x,dt=It+Wt*re-st.y;const gt=Ft*Ft+dt*dt;if(gt<=2)return new ot(Ft,dt);Dt=Math.sqrt(gt/2)}else{let rt=!1;yt>Number.EPSILON?Rt>Number.EPSILON&&(rt=!0):yt<-Number.EPSILON?Rt<-Number.EPSILON&&(rt=!0):Math.sign(Wt)===Math.sign(G)&&(rt=!0),rt?(Ft=-Wt,dt=yt,Dt=Math.sqrt(O)):(Ft=yt,dt=Wt,Dt=Math.sqrt(O/2))}return new ot(Ft/Dt,dt/Dt)}const R=[];for(let st=0,ft=L.length,q=ft-1,Ft=st+1;st<ft;st++,q++,Ft++)q===ft&&(q=0),Ft===ft&&(Ft=0),R[st]=T(L[st],L[q],L[Ft]);const x=[];let k,W=R.concat();for(let st=0,ft=E.length;st<ft;st++){const q=E[st];k=[];for(let Ft=0,dt=q.length,Dt=dt-1,yt=Ft+1;Ft<dt;Ft++,Dt++,yt++)Dt===dt&&(Dt=0),yt===dt&&(yt=0),k[Ft]=T(q[Ft],q[Dt],q[yt]);x.push(k),W=W.concat(k)}for(let st=0;st<p;st++){const ft=st/p,q=d*Math.cos(ft*Math.PI/2),Ft=y*Math.sin(ft*Math.PI/2)+_;for(let dt=0,Dt=L.length;dt<Dt;dt++){const yt=F(L[dt],R[dt],Ft);Q(yt.x,yt.y,-q)}for(let dt=0,Dt=E.length;dt<Dt;dt++){const yt=E[dt];k=x[dt];for(let Wt=0,Rt=yt.length;Wt<Rt;Wt++){const G=F(yt[Wt],k[Wt],Ft);Q(G.x,G.y,-q)}}}const J=y+_;for(let st=0;st<D;st++){const ft=u?F(m[st],W[st],J):m[st];M?(A.copy(P.normals[0]).multiplyScalar(ft.x),C.copy(P.binormals[0]).multiplyScalar(ft.y),U.copy(b[0]).add(A).add(C),Q(U.x,U.y,U.z)):Q(ft.x,ft.y,0)}for(let st=1;st<=h;st++)for(let ft=0;ft<D;ft++){const q=u?F(m[ft],W[ft],J):m[ft];M?(A.copy(P.normals[st]).multiplyScalar(q.x),C.copy(P.binormals[st]).multiplyScalar(q.y),U.copy(b[st]).add(A).add(C),Q(U.x,U.y,U.z)):Q(q.x,q.y,f/h*st)}for(let st=p-1;st>=0;st--){const ft=st/p,q=d*Math.cos(ft*Math.PI/2),Ft=y*Math.sin(ft*Math.PI/2)+_;for(let dt=0,Dt=L.length;dt<Dt;dt++){const yt=F(L[dt],R[dt],Ft);Q(yt.x,yt.y,f+q)}for(let dt=0,Dt=E.length;dt<Dt;dt++){const yt=E[dt];k=x[dt];for(let Wt=0,Rt=yt.length;Wt<Rt;Wt++){const G=F(yt[Wt],k[Wt],Ft);M?Q(G.x,G.y+b[h-1].y,b[h-1].x+q):Q(G.x,G.y,f+q)}}}Y(),H();function Y(){const st=s.length/3;if(u){let ft=0,q=D*ft;for(let Ft=0;Ft<N;Ft++){const dt=z[Ft];ht(dt[2]+q,dt[1]+q,dt[0]+q)}ft=h+p*2,q=D*ft;for(let Ft=0;Ft<N;Ft++){const dt=z[Ft];ht(dt[0]+q,dt[1]+q,dt[2]+q)}}else{for(let ft=0;ft<N;ft++){const q=z[ft];ht(q[2],q[1],q[0])}for(let ft=0;ft<N;ft++){const q=z[ft];ht(q[0]+D*h,q[1]+D*h,q[2]+D*h)}}i.addGroup(st,s.length/3-st,0)}function H(){const st=s.length/3;let ft=0;Z(L,ft),ft+=L.length;for(let q=0,Ft=E.length;q<Ft;q++){const dt=E[q];Z(dt,ft),ft+=dt.length}i.addGroup(st,s.length/3-st,1)}function Z(st,ft){let q=st.length;for(;--q>=0;){const Ft=q;let dt=q-1;dt<0&&(dt=st.length-1);for(let Dt=0,yt=h+p*2;Dt<yt;Dt++){const Wt=D*Dt,Rt=D*(Dt+1),G=ft+Ft+Wt,O=ft+dt+Wt,tt=ft+dt+Rt,rt=ft+Ft+Rt;vt(G,O,tt,rt)}}}function Q(st,ft,q){l.push(st),l.push(ft),l.push(q)}function ht(st,ft,q){mt(st),mt(ft),mt(q);const Ft=s.length/3,dt=S.generateTopUV(i,s,Ft-3,Ft-2,Ft-1);Gt(dt[0]),Gt(dt[1]),Gt(dt[2])}function vt(st,ft,q,Ft){mt(st),mt(ft),mt(Ft),mt(ft),mt(q),mt(Ft);const dt=s.length/3,Dt=S.generateSideWallUV(i,s,dt-6,dt-3,dt-2,dt-1);Gt(Dt[0]),Gt(Dt[1]),Gt(Dt[3]),Gt(Dt[1]),Gt(Dt[2]),Gt(Dt[3])}function mt(st){s.push(l[st*3+0]),s.push(l[st*3+1]),s.push(l[st*3+2])}function Gt(st){r.push(st.x),r.push(st.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,i=this.parameters.options;return b_(e,i,t)}static fromJSON(t,e){const i=[];for(let r=0,a=t.shapes.length;r<a;r++){const o=e[t.shapes[r]];i.push(o)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Ja[s.type]().fromJSON(s)),new Qi(i,t.options)}}const M_={generateTopUV:function(n,t,e,i,s){const r=t[e*3],a=t[e*3+1],o=t[i*3],l=t[i*3+1],c=t[s*3],h=t[s*3+1];return[new ot(r,a),new ot(o,l),new ot(c,h)]},generateSideWallUV:function(n,t,e,i,s,r){const a=t[e*3],o=t[e*3+1],l=t[e*3+2],c=t[i*3],h=t[i*3+1],f=t[i*3+2],u=t[s*3],d=t[s*3+1],y=t[s*3+2],_=t[r*3],p=t[r*3+1],g=t[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new ot(a,1-l),new ot(c,1-f),new ot(u,1-y),new ot(_,1-g)]:[new ot(o,1-l),new ot(h,1-f),new ot(d,1-y),new ot(p,1-g)]}};function b_(n,t,e){if(e.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){const r=n[i];e.shapes.push(r.uuid)}else e.shapes.push(n.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class Kr extends oo{constructor(t=1,e=0){const i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Kr(t.radius,t.detail)}}class xc extends Me{constructor(t=.5,e=1,i=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:a},i=Math.max(3,i),s=Math.max(1,s);const o=[],l=[],c=[],h=[];let f=t;const u=(e-t)/s,d=new X,y=new ot;for(let _=0;_<=s;_++){for(let p=0;p<=i;p++){const g=r+p/i*a;d.x=f*Math.cos(g),d.y=f*Math.sin(g),l.push(d.x,d.y,d.z),c.push(0,0,1),y.x=(d.x/e+1)/2,y.y=(d.y/e+1)/2,h.push(y.x,y.y)}f+=u}for(let _=0;_<s;_++){const p=_*(i+1);for(let g=0;g<i;g++){const S=g+p,b=S,M=S+i+1,P=S+i+2,C=S+1;o.push(b,M,C),o.push(M,P,C)}}this.setIndex(o),this.setAttribute("position",new Bt(l,3)),this.setAttribute("normal",new Bt(c,3)),this.setAttribute("uv",new Bt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new xc(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Ee extends Me{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let c=0;const h=[],f=new X,u=new X,d=[],y=[],_=[],p=[];for(let g=0;g<=i;g++){const S=[],b=g/i;let M=0;g===0&&a===0?M=.5/e:g===i&&l===Math.PI&&(M=-.5/e);for(let P=0;P<=e;P++){const C=P/e;f.x=-t*Math.cos(s+C*r)*Math.sin(a+b*o),f.y=t*Math.cos(a+b*o),f.z=t*Math.sin(s+C*r)*Math.sin(a+b*o),y.push(f.x,f.y,f.z),u.copy(f).normalize(),_.push(u.x,u.y,u.z),p.push(C+M,1-b),S.push(c++)}h.push(S)}for(let g=0;g<i;g++)for(let S=0;S<e;S++){const b=h[g][S+1],M=h[g][S],P=h[g+1][S],C=h[g+1][S+1];(g!==0||a>0)&&d.push(b,M,C),(g!==i-1||l<Math.PI)&&d.push(M,P,C)}this.setIndex(d),this.setAttribute("position",new Bt(y,3)),this.setAttribute("normal",new Bt(_,3)),this.setAttribute("uv",new Bt(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ee(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Dn extends Me{constructor(t=1,e=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);const a=[],o=[],l=[],c=[],h=new X,f=new X,u=new X;for(let d=0;d<=i;d++)for(let y=0;y<=s;y++){const _=y/s*r,p=d/i*Math.PI*2;f.x=(t+e*Math.cos(p))*Math.cos(_),f.y=(t+e*Math.cos(p))*Math.sin(_),f.z=e*Math.sin(p),o.push(f.x,f.y,f.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),u.subVectors(f,h).normalize(),l.push(u.x,u.y,u.z),c.push(y/s),c.push(d/i)}for(let d=1;d<=i;d++)for(let y=1;y<=s;y++){const _=(s+1)*d+y-1,p=(s+1)*(d-1)+y-1,g=(s+1)*(d-1)+y,S=(s+1)*d+y;a.push(_,p,S),a.push(p,g,S)}this.setIndex(a),this.setAttribute("position",new Bt(o,3)),this.setAttribute("normal",new Bt(l,3)),this.setAttribute("uv",new Bt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Dn(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Mc extends Me{constructor(t=new eu(new X(-1,-1,0),new X(-1,1,0),new X(1,1,0)),e=64,i=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:i,radialSegments:s,closed:r};const a=t.computeFrenetFrames(e,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const o=new X,l=new X,c=new ot;let h=new X;const f=[],u=[],d=[],y=[];_(),this.setIndex(y),this.setAttribute("position",new Bt(f,3)),this.setAttribute("normal",new Bt(u,3)),this.setAttribute("uv",new Bt(d,2));function _(){for(let b=0;b<e;b++)p(b);p(r===!1?e:0),S(),g()}function p(b){h=t.getPointAt(b/e,h);const M=a.normals[b],P=a.binormals[b];for(let C=0;C<=s;C++){const A=C/s*Math.PI*2,U=Math.sin(A),v=-Math.cos(A);l.x=v*M.x+U*P.x,l.y=v*M.y+U*P.y,l.z=v*M.z+U*P.z,l.normalize(),u.push(l.x,l.y,l.z),o.x=h.x+i*l.x,o.y=h.y+i*l.y,o.z=h.z+i*l.z,f.push(o.x,o.y,o.z)}}function g(){for(let b=1;b<=e;b++)for(let M=1;M<=s;M++){const P=(s+1)*(b-1)+(M-1),C=(s+1)*b+(M-1),A=(s+1)*b+M,U=(s+1)*(b-1)+M;y.push(P,C,U),y.push(C,A,U)}}function S(){for(let b=0;b<=e;b++)for(let M=0;M<=s;M++)c.x=b/e,c.y=M/s,d.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new Mc(new Ja[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class S_ extends Me{constructor(t=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:t},t!==null){const e=[],i=new Set,s=new X,r=new X;if(t.index!==null){const a=t.attributes.position,o=t.index;let l=t.groups;l.length===0&&(l=[{start:0,count:o.count,materialIndex:0}]);for(let c=0,h=l.length;c<h;++c){const f=l[c],u=f.start,d=f.count;for(let y=u,_=u+d;y<_;y+=3)for(let p=0;p<3;p++){const g=o.getX(y+p),S=o.getX(y+(p+1)%3);s.fromBufferAttribute(a,g),r.fromBufferAttribute(a,S),Z0(s,r,i)===!0&&(e.push(s.x,s.y,s.z),e.push(r.x,r.y,r.z))}}}else{const a=t.attributes.position;for(let o=0,l=a.count/3;o<l;o++)for(let c=0;c<3;c++){const h=3*o+c,f=3*o+(c+1)%3;s.fromBufferAttribute(a,h),r.fromBufferAttribute(a,f),Z0(s,r,i)===!0&&(e.push(s.x,s.y,s.z),e.push(r.x,r.y,r.z))}}this.setAttribute("position",new Bt(e,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}function Z0(n,t,e){const i=`${n.x},${n.y},${n.z}-${t.x},${t.y},${t.z}`,s=`${t.x},${t.y},${t.z}-${n.x},${n.y},${n.z}`;return e.has(i)===!0||e.has(s)===!0?!1:(e.add(i),e.add(s),!0)}class Xn extends ur{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Mt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Mt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ph,this.normalScale=new ot(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ei,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class bc extends Ze{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Mt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class w_ extends bc{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ze.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Mt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const qo=new oe,K0=new X,j0=new X;class au{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ot(512,512),this.map=null,this.mapPass=null,this.matrix=new oe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new pc,this._frameExtents=new ot(1,1),this._viewportCount=1,this._viewports=[new ue(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;K0.setFromMatrixPosition(t.matrixWorld),e.position.copy(K0),j0.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(j0),e.updateMatrixWorld(),qo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(qo),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(qo)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const $0=new oe,Tr=new X,Zo=new X;class E_ extends au{constructor(){super(new Pn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ot(4,2),this._viewportCount=6,this._viewports=[new ue(2,1,1,1),new ue(0,1,1,1),new ue(3,1,1,1),new ue(1,1,1,1),new ue(3,0,1,1),new ue(1,0,1,1)],this._cubeDirections=[new X(1,0,0),new X(-1,0,0),new X(0,0,1),new X(0,0,-1),new X(0,1,0),new X(0,-1,0)],this._cubeUps=[new X(0,1,0),new X(0,1,0),new X(0,1,0),new X(0,1,0),new X(0,0,1),new X(0,0,-1)]}updateMatrices(t,e=0){const i=this.camera,s=this.matrix,r=t.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),Tr.setFromMatrixPosition(t.matrixWorld),i.position.copy(Tr),Zo.copy(i.position),Zo.add(this._cubeDirections[e]),i.up.copy(this._cubeUps[e]),i.lookAt(Zo),i.updateMatrixWorld(),s.makeTranslation(-Tr.x,-Tr.y,-Tr.z),$0.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix($0)}}class T_ extends bc{constructor(t,e,i=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new E_}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class A_ extends au{constructor(){super(new Gh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class C_ extends bc{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ze.DEFAULT_UP),this.updateMatrix(),this.target=new Ze,this.shadow=new A_}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class R_ extends Me{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){const t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}}class P_{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=J0(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=J0();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function J0(){return performance.now()}class Zl extends Zh{constructor(t,e,i=1){super(t,e),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}clone(t){const e=super.clone(t);return e.meshPerAttribute=this.meshPerAttribute,e}toJSON(t){const e=super.toJSON(t);return e.isInstancedInterleavedBuffer=!0,e.meshPerAttribute=this.meshPerAttribute,e}}const Q0=new oe;class D_{constructor(t,e,i=0,s=1/0){this.ray=new uc(t,e),this.near=i,this.far=s,this.camera=null,this.layers=new dc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Q0.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Q0),this}intersectObject(t,e=!0,i=[]){return Kl(t,this,i,e),i.sort(th),i}intersectObjects(t,e=!0,i=[]){for(let s=0,r=t.length;s<r;s++)Kl(t[s],this,i,e);return i.sort(th),i}}function th(n,t){return n.distance-t.distance}function Kl(n,t,e,i){let s=!0;if(n.layers.test(t.layers)&&n.raycast(t,e)===!1&&(s=!1),s===!0&&i===!0){const r=n.children;for(let a=0,o=r.length;a<o;a++)Kl(r[a],t,e,!0)}}class eh{constructor(t=1,e=0,i=0){return this.radius=t,this.phi=e,this.theta=i,this}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(Fe(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const nh=new X,Ra=new X;class L_{constructor(t=new X,e=new X){this.start=t,this.end=e}set(t,e){return this.start.copy(t),this.end.copy(e),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,e){return this.delta(e).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,e){nh.subVectors(t,this.start),Ra.subVectors(this.end,this.start);const i=Ra.dot(Ra);let r=Ra.dot(nh)/i;return e&&(r=Fe(r,0,1)),r}closestPointToPoint(t,e,i){const s=this.closestPointToPointParameter(t,e);return this.delta(i).multiplyScalar(s).add(this.start)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}class k_ extends vs{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:nc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=nc);const ih={type:"change"},Sc={type:"start"},ou={type:"end"},Pa=new uc,sh=new qi,I_=Math.cos(70*Pe.DEG2RAD),Be=new X,vn=2*Math.PI,ye={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Ko=1e-6;class U_ extends k_{constructor(t,e=null){super(t,e),this.state=ye.NONE,this.enabled=!0,this.target=new X,this.cursor=new X,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:js.ROTATE,MIDDLE:js.DOLLY,RIGHT:js.PAN},this.touches={ONE:Ys.ROTATE,TWO:Ys.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new X,this._lastQuaternion=new Ni,this._lastTargetPosition=new X,this._quat=new Ni().setFromUnitVectors(t.up,new X(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new eh,this._sphericalDelta=new eh,this._scale=1,this._panOffset=new X,this._rotateStart=new ot,this._rotateEnd=new ot,this._rotateDelta=new ot,this._panStart=new ot,this._panEnd=new ot,this._panDelta=new ot,this._dollyStart=new ot,this._dollyEnd=new ot,this._dollyDelta=new ot,this._dollyDirection=new X,this._mouse=new ot,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=O_.bind(this),this._onPointerDown=N_.bind(this),this._onPointerUp=F_.bind(this),this._onContextMenu=X_.bind(this),this._onMouseWheel=H_.bind(this),this._onKeyDown=G_.bind(this),this._onTouchStart=V_.bind(this),this._onTouchMove=W_.bind(this),this._onMouseDown=z_.bind(this),this._onMouseMove=B_.bind(this),this._interceptControlDown=Y_.bind(this),this._interceptControlUp=q_.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(ih),this.update(),this.state=ye.NONE}update(t=null){const e=this.object.position;Be.copy(e).sub(this.target),Be.applyQuaternion(this._quat),this._spherical.setFromVector3(Be),this.autoRotate&&this.state===ye.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=vn:i>Math.PI&&(i-=vn),s<-Math.PI?s+=vn:s>Math.PI&&(s-=vn),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(Be.setFromSpherical(this._spherical),Be.applyQuaternion(this._quatInverse),e.copy(this.target).add(Be),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=Be.length();a=this._clampDistance(o*this._scale);const l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const o=new X(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new X(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=Be.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(Pa.origin.copy(this.object.position),Pa.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Pa.direction))<I_?this.object.lookAt(this.target):(sh.setFromNormalAndCoplanarPoint(this.object.up,this.target),Pa.intersectPlane(sh,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Ko||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Ko||this._lastTargetPosition.distanceToSquared(this.target)>Ko?(this.dispatchEvent(ih),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?vn/60*this.autoRotateSpeed*t:vn/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Be.setFromMatrixColumn(e,0),Be.multiplyScalar(-t),this._panOffset.add(Be)}_panUp(t,e){this.screenSpacePanning===!0?Be.setFromMatrixColumn(e,1):(Be.setFromMatrixColumn(e,0),Be.crossVectors(this.object.up,Be)),Be.multiplyScalar(t),this._panOffset.add(Be)}_pan(t,e){const i=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;Be.copy(s).sub(this.target);let r=Be.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/i.clientHeight,this.object.matrix),this._panUp(2*e*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),s=t-i.left,r=e-i.top,a=i.width,o=i.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(vn*this._rotateDelta.x/e.clientHeight),this._rotateUp(vn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(vn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(-vn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(vn*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(-vn*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(i,s)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),r=.5*(t.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(vn*this._rotateDelta.x/e.clientHeight),this._rotateUp(vn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(t.pageX+e.x)*.5,o=(t.pageY+e.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new ot,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,i={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function N_(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function O_(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function F_(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(ou),this.state=ye.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function z_(n){let t;switch(n.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case js.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=ye.DOLLY;break;case js.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=ye.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=ye.ROTATE}break;case js.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=ye.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=ye.PAN}break;default:this.state=ye.NONE}this.state!==ye.NONE&&this.dispatchEvent(Sc)}function B_(n){switch(this.state){case ye.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case ye.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case ye.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function H_(n){this.enabled===!1||this.enableZoom===!1||this.state!==ye.NONE||(n.preventDefault(),this.dispatchEvent(Sc),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(ou))}function G_(n){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(n)}function V_(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case Ys.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=ye.TOUCH_ROTATE;break;case Ys.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=ye.TOUCH_PAN;break;default:this.state=ye.NONE}break;case 2:switch(this.touches.TWO){case Ys.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=ye.TOUCH_DOLLY_PAN;break;case Ys.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=ye.TOUCH_DOLLY_ROTATE;break;default:this.state=ye.NONE}break;default:this.state=ye.NONE}this.state!==ye.NONE&&this.dispatchEvent(Sc)}function W_(n){switch(this._trackPointer(n),this.state){case ye.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case ye.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case ye.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case ye.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=ye.NONE}}function X_(n){this.enabled!==!1&&n.preventDefault()}function Y_(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function q_(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const rh=new vi,Da=new X;class lu extends R_{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";const t=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],e=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],i=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(i),this.setAttribute("position",new Bt(t,3)),this.setAttribute("uv",new Bt(e,2))}applyMatrix4(t){const e=this.attributes.instanceStart,i=this.attributes.instanceEnd;return e!==void 0&&(e.applyMatrix4(t),i.applyMatrix4(t),e.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(t){let e;t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t));const i=new Zl(e,6,1);return this.setAttribute("instanceStart",new di(i,3,0)),this.setAttribute("instanceEnd",new di(i,3,3)),this.instanceCount=this.attributes.instanceStart.count,this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(t){let e;t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t));const i=new Zl(e,6,1);return this.setAttribute("instanceColorStart",new di(i,3,0)),this.setAttribute("instanceColorEnd",new di(i,3,3)),this}fromWireframeGeometry(t){return this.setPositions(t.attributes.position.array),this}fromEdgesGeometry(t){return this.setPositions(t.attributes.position.array),this}fromMesh(t){return this.fromWireframeGeometry(new S_(t.geometry)),this}fromLineSegments(t){const e=t.geometry;return this.setPositions(e.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new vi);const t=this.attributes.instanceStart,e=this.attributes.instanceEnd;t!==void 0&&e!==void 0&&(this.boundingBox.setFromBufferAttribute(t),rh.setFromBufferAttribute(e),this.boundingBox.union(rh))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ys),this.boundingBox===null&&this.computeBoundingBox();const t=this.attributes.instanceStart,e=this.attributes.instanceEnd;if(t!==void 0&&e!==void 0){const i=this.boundingSphere.center;this.boundingBox.getCenter(i);let s=0;for(let r=0,a=t.count;r<a;r++)Da.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(Da)),Da.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Da));this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}applyMatrix(t){return console.warn("THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4()."),this.applyMatrix4(t)}}xt.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new ot(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};bn.line={uniforms:fc.merge([xt.common,xt.fog,xt.line]),vertexShader:`
		#include <common>
		#include <color_pars_vertex>
		#include <fog_pars_vertex>
		#include <logdepthbuf_pars_vertex>
		#include <clipping_planes_pars_vertex>

		uniform float linewidth;
		uniform vec2 resolution;

		attribute vec3 instanceStart;
		attribute vec3 instanceEnd;

		attribute vec3 instanceColorStart;
		attribute vec3 instanceColorEnd;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#ifdef USE_DASH

			uniform float dashScale;
			attribute float instanceDistanceStart;
			attribute float instanceDistanceEnd;
			varying float vLineDistance;

		#endif

		void trimSegment( const in vec4 start, inout vec4 end ) {

			// trim end segment so it terminates between the camera plane and the near plane

			// conservative estimate of the near plane
			float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
			float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column
			float nearEstimate = - 0.5 * b / a;

			float alpha = ( nearEstimate - start.z ) / ( end.z - start.z );

			end.xyz = mix( start.xyz, end.xyz, alpha );

		}

		void main() {

			#ifdef USE_COLOR

				vColor.xyz = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

			#endif

			#ifdef USE_DASH

				vLineDistance = ( position.y < 0.5 ) ? dashScale * instanceDistanceStart : dashScale * instanceDistanceEnd;
				vUv = uv;

			#endif

			float aspect = resolution.x / resolution.y;

			// camera space
			vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
			vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

			#ifdef WORLD_UNITS

				worldStart = start.xyz;
				worldEnd = end.xyz;

			#else

				vUv = uv;

			#endif

			// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
			// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
			// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
			// perhaps there is a more elegant solution -- WestLangley

			bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

			if ( perspective ) {

				if ( start.z < 0.0 && end.z >= 0.0 ) {

					trimSegment( start, end );

				} else if ( end.z < 0.0 && start.z >= 0.0 ) {

					trimSegment( end, start );

				}

			}

			// clip space
			vec4 clipStart = projectionMatrix * start;
			vec4 clipEnd = projectionMatrix * end;

			// ndc space
			vec3 ndcStart = clipStart.xyz / clipStart.w;
			vec3 ndcEnd = clipEnd.xyz / clipEnd.w;

			// direction
			vec2 dir = ndcEnd.xy - ndcStart.xy;

			// account for clip-space aspect ratio
			dir.x *= aspect;
			dir = normalize( dir );

			#ifdef WORLD_UNITS

				vec3 worldDir = normalize( end.xyz - start.xyz );
				vec3 tmpFwd = normalize( mix( start.xyz, end.xyz, 0.5 ) );
				vec3 worldUp = normalize( cross( worldDir, tmpFwd ) );
				vec3 worldFwd = cross( worldDir, worldUp );
				worldPos = position.y < 0.5 ? start: end;

				// height offset
				float hw = linewidth * 0.5;
				worldPos.xyz += position.x < 0.0 ? hw * worldUp : - hw * worldUp;

				// don't extend the line if we're rendering dashes because we
				// won't be rendering the endcaps
				#ifndef USE_DASH

					// cap extension
					worldPos.xyz += position.y < 0.5 ? - hw * worldDir : hw * worldDir;

					// add width to the box
					worldPos.xyz += worldFwd * hw;

					// endcaps
					if ( position.y > 1.0 || position.y < 0.0 ) {

						worldPos.xyz -= worldFwd * 2.0 * hw;

					}

				#endif

				// project the worldpos
				vec4 clip = projectionMatrix * worldPos;

				// shift the depth of the projected points so the line
				// segments overlap neatly
				vec3 clipPose = ( position.y < 0.5 ) ? ndcStart : ndcEnd;
				clip.z = clipPose.z * clip.w;

			#else

				vec2 offset = vec2( dir.y, - dir.x );
				// undo aspect ratio adjustment
				dir.x /= aspect;
				offset.x /= aspect;

				// sign flip
				if ( position.x < 0.0 ) offset *= - 1.0;

				// endcaps
				if ( position.y < 0.0 ) {

					offset += - dir;

				} else if ( position.y > 1.0 ) {

					offset += dir;

				}

				// adjust for linewidth
				offset *= linewidth;

				// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
				offset /= resolution.y;

				// select end
				vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

				// back to clip space
				offset *= clip.w;

				clip.xy += offset;

			#endif

			gl_Position = clip;

			vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

			#include <logdepthbuf_vertex>
			#include <clipping_planes_vertex>
			#include <fog_vertex>

		}
		`,fragmentShader:`
		uniform vec3 diffuse;
		uniform float opacity;
		uniform float linewidth;

		#ifdef USE_DASH

			uniform float dashOffset;
			uniform float dashSize;
			uniform float gapSize;

		#endif

		varying float vLineDistance;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#include <common>
		#include <color_pars_fragment>
		#include <fog_pars_fragment>
		#include <logdepthbuf_pars_fragment>
		#include <clipping_planes_pars_fragment>

		vec2 closestLineToLine(vec3 p1, vec3 p2, vec3 p3, vec3 p4) {

			float mua;
			float mub;

			vec3 p13 = p1 - p3;
			vec3 p43 = p4 - p3;

			vec3 p21 = p2 - p1;

			float d1343 = dot( p13, p43 );
			float d4321 = dot( p43, p21 );
			float d1321 = dot( p13, p21 );
			float d4343 = dot( p43, p43 );
			float d2121 = dot( p21, p21 );

			float denom = d2121 * d4343 - d4321 * d4321;

			float numer = d1343 * d4321 - d1321 * d4343;

			mua = numer / denom;
			mua = clamp( mua, 0.0, 1.0 );
			mub = ( d1343 + d4321 * ( mua ) ) / d4343;
			mub = clamp( mub, 0.0, 1.0 );

			return vec2( mua, mub );

		}

		void main() {

			#include <clipping_planes_fragment>

			#ifdef USE_DASH

				if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

				if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

			#endif

			float alpha = opacity;

			#ifdef WORLD_UNITS

				// Find the closest points on the view ray and the line segment
				vec3 rayEnd = normalize( worldPos.xyz ) * 1e5;
				vec3 lineDir = worldEnd - worldStart;
				vec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );

				vec3 p1 = worldStart + lineDir * params.x;
				vec3 p2 = rayEnd * params.y;
				vec3 delta = p1 - p2;
				float len = length( delta );
				float norm = len / linewidth;

				#ifndef USE_DASH

					#ifdef USE_ALPHA_TO_COVERAGE

						float dnorm = fwidth( norm );
						alpha = 1.0 - smoothstep( 0.5 - dnorm, 0.5 + dnorm, norm );

					#else

						if ( norm > 0.5 ) {

							discard;

						}

					#endif

				#endif

			#else

				#ifdef USE_ALPHA_TO_COVERAGE

					// artifacts appear on some hardware if a derivative is taken within a conditional
					float a = vUv.x;
					float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
					float len2 = a * a + b * b;
					float dlen = fwidth( len2 );

					if ( abs( vUv.y ) > 1.0 ) {

						alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );

					}

				#else

					if ( abs( vUv.y ) > 1.0 ) {

						float a = vUv.x;
						float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
						float len2 = a * a + b * b;

						if ( len2 > 1.0 ) discard;

					}

				#endif

			#endif

			vec4 diffuseColor = vec4( diffuse, alpha );

			#include <logdepthbuf_fragment>
			#include <color_fragment>

			gl_FragColor = vec4( diffuseColor.rgb, alpha );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>
			#include <fog_fragment>
			#include <premultiplied_alpha_fragment>

		}
		`};class co extends ni{static get type(){return"LineMaterial"}constructor(t){super({uniforms:fc.clone(bn.line.uniforms),vertexShader:bn.line.vertexShader,fragmentShader:bn.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(t)}get color(){return this.uniforms.diffuse.value}set color(t){this.uniforms.diffuse.value=t}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(t){t===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(t){this.uniforms.linewidth&&(this.uniforms.linewidth.value=t)}get dashed(){return"USE_DASH"in this.defines}set dashed(t){t===!0!==this.dashed&&(this.needsUpdate=!0),t===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(t){this.uniforms.dashScale.value=t}get dashSize(){return this.uniforms.dashSize.value}set dashSize(t){this.uniforms.dashSize.value=t}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(t){this.uniforms.dashOffset.value=t}get gapSize(){return this.uniforms.gapSize.value}set gapSize(t){this.uniforms.gapSize.value=t}get opacity(){return this.uniforms.opacity.value}set opacity(t){this.uniforms&&(this.uniforms.opacity.value=t)}get resolution(){return this.uniforms.resolution.value}set resolution(t){this.uniforms.resolution.value.copy(t)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(t){this.defines&&(t===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),t===!0?this.defines.USE_ALPHA_TO_COVERAGE="":delete this.defines.USE_ALPHA_TO_COVERAGE)}}const jo=new ue,ah=new X,oh=new X,je=new ue,$e=new ue,si=new ue,$o=new X,Jo=new oe,Je=new L_,lh=new X,La=new vi,ka=new ys,ri=new ue;let hi,ps;function ch(n,t,e){return ri.set(0,0,-t,1).applyMatrix4(n.projectionMatrix),ri.multiplyScalar(1/ri.w),ri.x=ps/e.width,ri.y=ps/e.height,ri.applyMatrix4(n.projectionMatrixInverse),ri.multiplyScalar(1/ri.w),Math.abs(Math.max(ri.x,ri.y))}function Z_(n,t){const e=n.matrixWorld,i=n.geometry,s=i.attributes.instanceStart,r=i.attributes.instanceEnd,a=Math.min(i.instanceCount,s.count);for(let o=0,l=a;o<l;o++){Je.start.fromBufferAttribute(s,o),Je.end.fromBufferAttribute(r,o),Je.applyMatrix4(e);const c=new X,h=new X;hi.distanceSqToSegment(Je.start,Je.end,h,c),h.distanceTo(c)<ps*.5&&t.push({point:h,pointOnLine:c,distance:hi.origin.distanceTo(h),object:n,face:null,faceIndex:o,uv:null,uv1:null})}}function K_(n,t,e){const i=t.projectionMatrix,r=n.material.resolution,a=n.matrixWorld,o=n.geometry,l=o.attributes.instanceStart,c=o.attributes.instanceEnd,h=Math.min(o.instanceCount,l.count),f=-t.near;hi.at(1,si),si.w=1,si.applyMatrix4(t.matrixWorldInverse),si.applyMatrix4(i),si.multiplyScalar(1/si.w),si.x*=r.x/2,si.y*=r.y/2,si.z=0,$o.copy(si),Jo.multiplyMatrices(t.matrixWorldInverse,a);for(let u=0,d=h;u<d;u++){if(je.fromBufferAttribute(l,u),$e.fromBufferAttribute(c,u),je.w=1,$e.w=1,je.applyMatrix4(Jo),$e.applyMatrix4(Jo),je.z>f&&$e.z>f)continue;if(je.z>f){const b=je.z-$e.z,M=(je.z-f)/b;je.lerp($e,M)}else if($e.z>f){const b=$e.z-je.z,M=($e.z-f)/b;$e.lerp(je,M)}je.applyMatrix4(i),$e.applyMatrix4(i),je.multiplyScalar(1/je.w),$e.multiplyScalar(1/$e.w),je.x*=r.x/2,je.y*=r.y/2,$e.x*=r.x/2,$e.y*=r.y/2,Je.start.copy(je),Je.start.z=0,Je.end.copy($e),Je.end.z=0;const _=Je.closestPointToPointParameter($o,!0);Je.at(_,lh);const p=Pe.lerp(je.z,$e.z,_),g=p>=-1&&p<=1,S=$o.distanceTo(lh)<ps*.5;if(g&&S){Je.start.fromBufferAttribute(l,u),Je.end.fromBufferAttribute(c,u),Je.start.applyMatrix4(a),Je.end.applyMatrix4(a);const b=new X,M=new X;hi.distanceSqToSegment(Je.start,Je.end,M,b),e.push({point:M,pointOnLine:b,distance:hi.origin.distanceTo(M),object:n,face:null,faceIndex:u,uv:null,uv1:null})}}}class j_ extends xe{constructor(t=new lu,e=new co({color:Math.random()*16777215})){super(t,e),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){const t=this.geometry,e=t.attributes.instanceStart,i=t.attributes.instanceEnd,s=new Float32Array(2*e.count);for(let a=0,o=0,l=e.count;a<l;a++,o+=2)ah.fromBufferAttribute(e,a),oh.fromBufferAttribute(i,a),s[o]=o===0?0:s[o-1],s[o+1]=s[o]+ah.distanceTo(oh);const r=new Zl(s,2,1);return t.setAttribute("instanceDistanceStart",new di(r,1,0)),t.setAttribute("instanceDistanceEnd",new di(r,1,1)),this}raycast(t,e){const i=this.material.worldUnits,s=t.camera;s===null&&!i&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');const r=t.params.Line2!==void 0&&t.params.Line2.threshold||0;hi=t.ray;const a=this.matrixWorld,o=this.geometry,l=this.material;ps=l.linewidth+r,o.boundingSphere===null&&o.computeBoundingSphere(),ka.copy(o.boundingSphere).applyMatrix4(a);let c;if(i)c=ps*.5;else{const f=Math.max(s.near,ka.distanceToPoint(hi.origin));c=ch(s,f,l.resolution)}if(ka.radius+=c,hi.intersectsSphere(ka)===!1)return;o.boundingBox===null&&o.computeBoundingBox(),La.copy(o.boundingBox).applyMatrix4(a);let h;if(i)h=ps*.5;else{const f=Math.max(s.near,La.distanceToPoint(hi.origin));h=ch(s,f,l.resolution)}La.expandByScalar(h),hi.intersectsBox(La)!==!1&&(i?Z_(this,e):K_(this,s,e))}onBeforeRender(t){const e=this.material.uniforms;e&&e.resolution&&(t.getViewport(jo),this.material.uniforms.resolution.value.set(jo.z,jo.w))}}class wc extends lu{constructor(){super(),this.isLineGeometry=!0,this.type="LineGeometry"}setPositions(t){const e=t.length-3,i=new Float32Array(2*e);for(let s=0;s<e;s+=3)i[2*s]=t[s],i[2*s+1]=t[s+1],i[2*s+2]=t[s+2],i[2*s+3]=t[s+3],i[2*s+4]=t[s+4],i[2*s+5]=t[s+5];return super.setPositions(i),this}setColors(t){const e=t.length-3,i=new Float32Array(2*e);for(let s=0;s<e;s+=3)i[2*s]=t[s],i[2*s+1]=t[s+1],i[2*s+2]=t[s+2],i[2*s+3]=t[s+3],i[2*s+4]=t[s+4],i[2*s+5]=t[s+5];return super.setColors(i),this}fromLine(t){const e=t.geometry;return this.setPositions(e.attributes.position.array),this}}class cu extends j_{constructor(t=new wc,e=new co({color:Math.random()*16777215})){super(t,e),this.isLine2=!0,this.type="Line2"}}function Rr(n,t=!1){const e=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},a={},o=n[0].morphTargetsRelative,l=new Me;let c=0;for(let h=0;h<n.length;++h){const f=n[h];let u=0;if(e!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const d in f.attributes){if(!i.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(f.attributes[d]),u++}if(u!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const d in f.morphAttributes){if(!s.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[d]===void 0&&(a[d]=[]),a[d].push(f.morphAttributes[d])}if(t){let d;if(e)d=f.index.count;else if(f.attributes.position!==void 0)d=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,d,h),c+=d}}if(e){let h=0;const f=[];for(let u=0;u<n.length;++u){const d=n[u].index;for(let y=0;y<d.count;++y)f.push(d.getX(y)+h);h+=n[u].attributes.position.count}l.setIndex(f)}for(const h in r){const f=hh(r[h]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,f)}for(const h in a){const f=a[h][0].length;if(f===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let u=0;u<f;++u){const d=[];for(let _=0;_<a[h].length;++_)d.push(a[h][_][u]);const y=hh(d);if(!y)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(y)}}return l}function hh(n){let t,e,i,s=-1,r=0;for(let c=0;c<n.length;++c){const h=n[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=h.normalized),i!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}const a=new t(r),o=new fn(a,e,i);let l=0;for(let c=0;c<n.length;++c){const h=n[c];if(h.isInterleavedBufferAttribute){const f=l/e;for(let u=0,d=h.count;u<d;u++)for(let y=0;y<e;y++){const _=h.getComponent(u,y);o.setComponent(u+f,y,_)}}else a.set(h.array,l);l+=h.count*e}return s!==void 0&&(o.gpuType=s),o}const Gn={W:32.35,S:35.85,E:35.35,N:37.5},qe={w:800,h:574},$_=3e3,J_=2.6,hu=111.2,Q_=hu*Math.cos((Gn.N+Gn.S)/2*Math.PI/180),He={w:(Gn.E-Gn.W)*Q_,d:(Gn.N-Gn.S)*hu};function ho(n,t){return[((n-Gn.W)/(Gn.E-Gn.W)-.5)*He.w,((Gn.N-t)/(Gn.N-Gn.S)-.5)*He.d]}const Qa=n=>n/1e3*J_;async function tv(n){const t=new Image;t.src=n,await t.decode();const e=document.createElement("canvas");e.width=qe.w,e.height=qe.h;const i=e.getContext("2d",{willReadFrequently:!0});i.drawImage(t,0,0);const s=i.getImageData(0,0,qe.w,qe.h).data,r=new Float32Array(qe.w*qe.h);for(let a=0;a<r.length;a++)r[a]=s[a*4]*256+s[a*4+1]-$_;return r}function ev(n){return(t,e)=>{const i=(t/He.w+.5)*(qe.w-1),s=(e/He.d+.5)*(qe.h-1),r=Math.max(0,Math.min(qe.w-2,Math.floor(i))),a=Math.max(0,Math.min(qe.h-2,Math.floor(s))),o=Math.min(1,Math.max(0,i-r)),l=Math.min(1,Math.max(0,s-a)),c=a*qe.w+r;return n[c]*(1-o)*(1-l)+n[c+1]*o*(1-l)+n[c+qe.w]*(1-o)*l+n[c+qe.w+1]*o*l}}const cn=n=>new Mt(n),$n=[[-400,cn(1850709)],[-60,cn(4030346)],[-4,cn(13483919)],[1,cn(13944212)],[25,cn(12039798)],[120,cn(9675610)],[450,cn(7637322)],[1e3,cn(5599807)],[1500,cn(7109196)],[1900,cn(10129513)],[2400,cn(10722444)],[2800,cn(13618630)],[3100,cn(16184816)]],nv=cn(10128500);function iv(n,t){if(n<=$n[0][0])return t.copy($n[0][1]);for(let e=1;e<$n.length;e++)if(n<=$n[e][0]){const i=(n-$n[e-1][0])/($n[e][0]-$n[e-1][0]);return t.copy($n[e-1][1]).lerp($n[e][1],i)}return t.copy($n[$n.length-1][1])}const sv=(n,t)=>{const e=Math.sin(n*127.1+t*311.7)*43758.5453;return e-Math.floor(e)};function rv(n){const{w:t,h:e}=qe,i=new Float32Array(t*e),s=He.w/(t-1),r=s,a=s*1.414;for(let o=0;o<i.length;o++)i[o]=n[o]>=.5?0:1e6;for(let o=0;o<e;o++)for(let l=0;l<t;l++){const c=o*t+l;let h=i[c];l>0&&(h=Math.min(h,i[c-1]+r)),o>0&&(h=Math.min(h,i[c-t]+r),l>0&&(h=Math.min(h,i[c-t-1]+a)),l<t-1&&(h=Math.min(h,i[c-t+1]+a))),i[c]=h}for(let o=e-1;o>=0;o--)for(let l=t-1;l>=0;l--){const c=o*t+l;let h=i[c];l<t-1&&(h=Math.min(h,i[c+1]+r)),o<e-1&&(h=Math.min(h,i[c+t]+r),l<t-1&&(h=Math.min(h,i[c+t+1]+a)),l>0&&(h=Math.min(h,i[c+t-1]+a))),i[c]=h}return i}function av(n,t,e=1){const i=Math.floor((qe.w-1)/e)+1,s=Math.floor((qe.h-1)/e)+1,r=new Float32Array(i*s);for(let p=0;p<s;p++)for(let g=0;g<i;g++){const S=p*e*qe.w+g*e;r[p*i+g]=n[S]>=.5?n[S]:-Math.min(400,t[S]*28)-1}const a=new On(He.w,He.d,i-1,s-1);a.rotateX(-Math.PI/2);const o=a.attributes.position,l=new Float32Array(o.count*3),c=new Mt,h=He.w/(i-1)*1e3,f=(p,g)=>sv(p*e,g*e);for(let p=0;p<s;p++)for(let g=0;g<i;g++){const S=p*i+g,b=r[S];o.setY(S,b<.5?Qa(b)-.04:Qa(b));const M=r[S-(g>0?1:0)],P=r[S+(g<i-1?1:0)],C=r[S-(p>0?i:0)],A=r[S+(p<s-1?i:0)],U=Math.hypot(P-M,A-C)/(2*h);if(iv(b,c),b>1){c.lerp(nv,Pe.smoothstep(U,.28,.75)*.75);const v=Pe.smoothstep(-p/s+.42+g/i*.18,0,.25);b>900&&b<2300&&c.lerp(cn(11772531),v*.55);const m=(f(g,p)-.5)*.07+(f(g>>3,p>>3)-.5)*.05;c.offsetHSL(0,0,m)}l[S*3]=c.r,l[S*3+1]=c.g,l[S*3+2]=c.b}a.setAttribute("color",new fn(l,3)),a.computeVertexNormals();const u=new Xn({vertexColors:!0,roughness:.95,metalness:0});u.onBeforeCompile=p=>{p.vertexShader=p.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vWp;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vWp = (modelMatrix * vec4(transformed, 1.0)).xyz;`),p.fragmentShader=p.fragmentShader.replace("#include <common>",`#include <common>
        varying vec3 vWp;
        float h21(vec2 p){ p = fract(p*vec2(123.34, 456.21)); p += dot(p, p+45.32); return fract(p.x*p.y); }
        float vn(vec2 p){ vec2 i = floor(p), f = fract(p); f = f*f*(3.0-2.0*f);
          return mix(mix(h21(i), h21(i+vec2(1,0)), f.x), mix(h21(i+vec2(0,1)), h21(i+vec2(1,1)), f.x), f.y); }`).replace("#include <color_fragment>",`#include <color_fragment>
        float dd = length(cameraPosition - vWp);
        float fade = 1.0 - smoothstep(18.0, 110.0, dd);
        float n = vn(vWp.xz*1.1)*0.45 + vn(vWp.xz*4.7)*0.33 + vn(vWp.xz*19.0)*0.22;
        diffuseColor.rgb *= mix(1.0, 0.74 + 0.52*n, fade);
        float veg = smoothstep(0.03, 0.12, vWp.y) * (1.0 - smoothstep(4.2, 5.2, vWp.y));
        float scrub = smoothstep(0.55, 0.75, vn(vWp.xz*34.0)) * smoothstep(0.35, 0.6, vn(vWp.xz*2.3+7.0));
        diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.16, 0.27, 0.13), scrub*veg*0.55*(1.0 - smoothstep(10.0, 45.0, dd)));`)};const d=new xe(a,u);d.receiveShadow=!0;const y=new xe(new rn(He.w+5,5,He.d+5),new Xn({color:2826520,roughness:.7}));y.position.y=-3.9;const _=new Ht;return _.add(d,y),{group:_,land:d}}function ov(n,t){const{w:e,h:i}=qe,s=new Uint8Array(e*i*4);for(let l=0;l<e*i;l++){const c=n[l];s[l*4]=c<.5?Math.min(255,t[l]/14*255):0,s[l*4+1]=c>=.5?255:0,s[l*4+3]=255}const r=new $h(s,e,i,Wn);r.magFilter=r.minFilter=Qn,r.flipY=!0,r.needsUpdate=!0;const a=new ni({transparent:!0,uniforms:{uTime:{value:0},uMap:{value:r},uShallow:{value:new Mt(6279368)},uDeep:{value:new Mt(869488)},uSun:{value:new Mt(16777215)},uLight:{value:1},fogColor:{value:new Mt},fogDensity:{value:0}},vertexShader:`
      varying vec2 vUv; varying vec3 vWorld;
      void main(){ vUv = uv; vec4 wp = modelMatrix * vec4(position,1.0); vWorld = wp.xyz; gl_Position = projectionMatrix * viewMatrix * wp; }`,fragmentShader:`
      uniform float uTime, uLight, fogDensity; uniform sampler2D uMap;
      uniform vec3 uShallow, uDeep, uSun, fogColor;
      varying vec2 vUv; varying vec3 vWorld;
      float wave(vec2 p){ return sin(p.x*1.7+uTime*0.9)*sin(p.y*2.1-uTime*0.7) + 0.5*sin(p.x*4.3-uTime*1.3+p.y*3.1); }
      void main(){
        vec4 m = texture2D(uMap, vUv);
        float depth = m.r, land = m.g;
        vec3 c = mix(uShallow, uDeep, smoothstep(0.0, 0.55, depth));
        float d = length(cameraPosition - vWorld);
        c += 0.03*wave(vWorld.xz*0.9) * (1.0 - smoothstep(30.0, 110.0, d)); // ripples only where they resolve
        // sun glitter
        vec3 v = normalize(cameraPosition - vWorld);
        float gl = pow(max(0.0, wave(vWorld.xz*6.0+3.0)*wave(vWorld.zx*3.7-1.0)*0.5+0.5), 9.0) * (0.3+0.7*pow(1.0-v.y,2.0));
        c += uSun * gl * 0.28 * (1.0 - smoothstep(8.0, 45.0, d)); // fades out before it can alias
        // surf line breathing against the shore
        float shore = smoothstep(0.15, 0.6, land);
        float foam = smoothstep(0.55, 0.9, shore + 0.18*sin(uTime*1.4 + vWorld.x*1.3 + vWorld.z*1.7)) * (1.0-smoothstep(0.9,1.0,land));
        c = mix(c, vec3(1.0), foam*0.75);
        c *= uLight;
        float a = mix(0.62, 0.97, smoothstep(0.0, 0.12, depth));
        c = mix(c, fogColor, 1.0 - exp(-fogDensity*fogDensity*d*d));
        gl_FragColor = vec4(c, a);
      }`}),o=new xe(new On(He.w,He.d),a);return o.rotation.x=-Math.PI/2,o.position.y=-.02,o}const lv=.066,qt=Math.PI,Qo=(n,t)=>{const e=Math.sin(n*127.1+t*311.7)*43758.5453;return e-Math.floor(e)},Hn=(n,t,e)=>n+(t-n)*e,Yi=n=>Math.min(1,Math.max(0,n)),tl={},el={},Qt=(n,t)=>tl[n]||(tl[n]=t()),sn=(n,t,e={})=>el[n]||(el[n]=new Xn({color:t,roughness:.88,metalness:0,...e})),Ci=(n,t)=>sn(n,t,{side:De}),pt={get toga(){return Ci("toga",16051933)},get tunic(){return Ci("tunic",14997692)},get purple(){return Ci("purple",7217480)},get red(){return Ci("red",10693154)},get undyed(){return Ci("undyed",10519127)},get cloak(){return Ci("cloak",5982007)},get steel(){return sn("steel",13225425,{roughness:.42,metalness:.3})},get brass(){return sn("brass",14265669,{roughness:.45,metalness:.3})},get leather(){return sn("leather",5978658)},get redLeather(){return sn("redLeather",8137246)},get wood(){return sn("figwood",7162924)},get terracotta(){return sn("terracotta",11887930)},get straw(){return Ci("straw",14204282)},get felt(){return Ci("felt",11111522)},get mail(){return sn("mail",9409947,{roughness:.6,metalness:.25})},get auxShield(){return sn("auxShield",3103354,{roughness:.7})},get sole(){return sn("sole",8017462)},get dark(){return sn("eye",2759958,{roughness:.6})},get scutum(){return sn("scutum",10495520,{roughness:.7,side:De})},skin(n){return sn("skin"+n,[14461830,13209446,11893330][n])},hair(n){return sn("hair"+n,[3022872,4862755,1840402,10327951][n])},dye(n){return n=(n%7+7)%7,Ci("dye"+n,[13208107,3107468,6261334,11027806,4165514,13676640,9194028][n])}},uu=[[0,.19],[.1,.176],[.42,.132],[.56,.126],[.7,.15],[.79,.166],[.835,.12],[.862,.05]];function yn(n,t=uu){if(n<=t[0][0])return t[0][1];for(let e=1;e<t.length;e++)if(n<=t[e][0])return Hn(t[e-1][1],t[e][1],(n-t[e-1][0])/(t[e][0]-t[e-1][0]));return t[t.length-1][1]}const Va=.74,du=(n,t,e)=>[e*Math.sin(n),t,e*Math.cos(n)*Va];function xn(n,{t0:t=-qt,t1:e=qt,top:i,bot:s,rad:r,n:a=20,m:o=8}){return Qt(n,()=>{const l=[],c=[];for(let f=0;f<=a;f++){const u=Hn(t,e,f/a),d=s(u),y=i(u);for(let _=0;_<=o;_++){const p=Hn(d,y,_/o);l.push(...du(u,p,r(u,p,_/o)))}}for(let f=0;f<a;f++)for(let u=0;u<o;u++){const d=f*(o+1)+u,y=d+o+1;c.push(d,y,d+1,y,y+1,d+1)}const h=new Me;return h.setAttribute("position",new Bt(l,3)),h.setAttribute("uv",new Bt(new Float32Array(l.length/3*2),2)),h.setIndex(c),h.computeVertexNormals(),h})}function Ia(n,t,e,i,s,r=!1){return Qt(n,()=>{const a=[];for(let o=0;o<(r?28:29);o++){const l=Hn(e,i,o/28);a.push(new X(...du(l,...t(l))))}return new Mc(new ao(a,r),28,s,4,r)})}const Ua=(n,t,e,i,s=11)=>1+i*Math.sin(n*s)*Yi((.62-t)/(.62-e));function mn(n,t,e,i=0,s=0,r=1){const a=new Ht,o=Qo(t*91.7+s,e*57.3),l=Qo(e*33.1,t*71.9+s),c=Qo(t*13.3+e*7.7,s+2.5),h=(s%6+6)%6;a.position.set(t,i,e),a.scale.setScalar(lv*r*(.94+l*.12)),a.rotation.y=o*qt*2,n.add(a);let f=a;const u=(N,T,R=0,x=0,k=0)=>lt(f,N,T,R,x,k),d=N=>{const T=new Ht;T.position.y=.034,a.add(T),f=T,N(),f=a},y=Qt("sph",()=>new Ee(1,8,6)),_=pt.skin(Math.floor(c*3)),p=(N,T,R,x,k,W=k,J=k)=>{const Y=u(y,N,T,R,x);return Y.scale.set(k,W,J),Y},g=(N,T,R,x)=>{const k=new X(...R),W=new X(...x),J=k.distanceTo(W),Y=u(Qt("limb"+T,()=>new Zr(T,1,2,6)),N,(R[0]+x[0])/2,(R[1]+x[1])/2,(R[2]+x[2])/2);Y.scale.y=J/(1+2*T),Y.quaternion.setFromUnitVectors(new X(0,1,0),W.sub(k).normalize())},S=(N,T,R,x,k=.043)=>{const W=[N*.168,.775,0],J=[W[0]+N*R[0],R[1],R[2]],Y=[W[0]+N*x[0],x[1],x[2]];return g(T||_,T?k:.032,W,J),g(_,T?.029:.031,J,Y),p(_,Y[0],Y[1],Y[2],.036,.04,.034),T||p(_,J[0],J[1],J[2],.0315),Y},b=(N,T=.05,R=.035)=>u(xn("long"+T+R,{top:()=>.862,bot:()=>R,rad:(x,k)=>yn(k)*Ua(x,k,R,T),m:8}),N),M=(N,T=.36,R=.05)=>u(xn("short"+T,{top:()=>.862,bot:()=>T,rad:(x,k)=>(k<.56?Hn(.17,.127,(k-T)/(.56-T)):yn(k))*Ua(x,k,T,R,9),m:9}),N),P=(N,T)=>p(N,T*.158,.782,0,.046,.046,.052),C=(N,T=.565,R=.131,x=.017)=>{const k=u(Qt("belt"+x,()=>new Dn(1,x/.131,6,18)),N,0,T,0);k.rotation.x=qt/2,k.scale.set(R,R*Va,R)},A=N=>{for(const T of[-1,1])g(_,.032,[T*.07,.2,.02],[T*.07,.05,.05]),p(N,T*.07,.026,.085,.038,.028,.08).rotation.y=T*-.12},U=N=>{for(const T of[-1,1]){const R=T*.072,x=N==="boot"?pt.leather:_;if(g(_,.042,[T*.066,.42,0],[R,.07,0]),p(_,R,.28,-.006,.044,.085,.046),p(x,R,.034,.04,.038,.028,.084).rotation.y=T*-.12,p(pt.sole,R,.006,.04,.041,.007,.09).rotation.y=T*-.12,N==="boot"){p(pt.leather,R,.085,0,.047,.05,.05);continue}for(const[k,W]of[[.085,.048],[.035,.056]])u(Qt("strap",()=>new rn(.074,.01,.014)),pt.leather,R,W,k);u(Qt("strapL",()=>new rn(.012,.01,.1)),pt.leather,R,.062,.06);for(const k of N==="caliga"?[.08,.108]:[.085]){const W=u(Qt("wrap",()=>new Dn(.044,.006,4,10)),pt.leather,R,k,0);W.rotation.x=qt/2}}},v=(N,T)=>R=>Hn(N,T,Math.pow((Math.sin(R)+1)/2,.75)),m=(N,T,{lo:R=.5,hi:x=.84,hem:k=.07,lift:W=.1,out:J=.028,border:Y=null,roll:H=.008})=>{const Z=v(R,x),Q=vt=>k+W*Yi(Math.cos(vt+.9))**2,ht=(vt,mt,Gt=0)=>yn(mt)+J*(1-.5*Gt*Gt)+.012*(1-Gt*Gt)*Math.sin(17*mt+2.2*vt)+.006*Math.sin(9*vt);return u(xn(N,{top:Z,bot:Q,rad:ht,m:8,n:24}),T),u(xn(N+"fold",{top:vt=>Z(vt)+.006,bot:vt=>Z(vt)-.05,rad:(vt,mt)=>ht(vt,mt,.9)+.011,m:2,n:24}),T),Y&&u(xn(N+"bT",{top:vt=>Z(vt)-.012,bot:vt=>Z(vt)-.04,rad:(vt,mt)=>ht(vt,mt,.9)+.017,m:1,n:24}),Y),{top:Z,rad:ht}},E=(N,T)=>{const k=H=>Hn(.47,.66,(Math.sin(H*.9)+1)/2),W=H=>(.2+.1*Math.cos(H*.8))*Math.sqrt(Math.sin(qt*Yi((H- -1.75)/3.2))+.02),J=H=>Math.sqrt(Math.sin(qt*Yi((H- -1.75)/3.2))+.001);u(xn("sinus",{t0:-1.75,t1:1.45,top:k,bot:H=>k(H)-W(H),rad:(H,Z,Q)=>yn(Z)+.034+(.02+.03*(1-Q))*J(H)+.006*Math.sin(20*Z+H),m:6,n:26}),N)},I=(N,T,R=.42,x=!0)=>{if(!x)return;p(N,.2,.632,.13,.042,.034,.09),u(((J,Y,H)=>Qt(J,()=>{const Z=new On(.1,Y,12,5),Q=Z.attributes.position;for(let ht=0;ht<Q.count;ht++){const vt=Q.getX(ht)/.1+.5,mt=.5-Q.getY(ht)/Y;Q.setZ(ht,(.02+.022*mt)*Math.sin(vt*14+mt*1.5)),Q.setX(ht,Q.getX(ht)*(1-.45*mt)+.02*mt*mt),Q.setY(ht,Q.getY(ht)-.03*mt*Math.sin(vt*qt))}return Z.computeVertexNormals(),Z}))("lacinia"+R,R),N,.2,.625-R/2,.125).rotation.set(0,qt/2-.2,.03)},z=N=>d(()=>L(N)),L=({hair:N=-1,bald:T=!1,beard:R=!1,woman:x=!1,veiled:k=!1,helmet:W=!1}={})=>{p(_,0,.928,0,.079,.09,.084),u(Qt("neck",()=>new Yt(.036,.044,.1,8)),_,0,.84,0),p(_,0,.92,.084,.012,.02,.014);for(const H of[-1,1])p(pt.dark,H*.031,.94,.074,.0105,.008,.007),p(_,H*.08,.925,.004,.012,.02,.014);u(Qt("mouth",()=>new rn(.032,.007,.01)),sn("mouth",8010544),0,.888,.077);const J=pt.hair(N<0?Math.floor(l*3):N),Y=()=>{u(Qt("nape",()=>new Ee(1,10,3,qt*1.08,qt*.84,qt*.45,qt*.24)),J,0,.932,-.008).scale.set(.085,.092,.09)};if(!W)if(T)Y();else{const H=u(Qt("hair",()=>new Ee(1,12,6,0,qt*2,0,qt*.46)),J,0,.94,-.014);if(H.scale.set(.085,.088,.09),H.rotation.x=-.12-o*.2,k||Y(),!x&&o>.35)for(let Z=-2;Z<=2;Z++)p(J,Z*.027,.988-Math.abs(Z)*.012,.056-Math.abs(Z)*.012,.02,.013,.014)}if(x){for(const H of[-1,1])p(J,H*.046,.955,0,.044,.05,.078);k||p(J,0,.93,-.095,.045,.04,.04)}R&&u(Qt("beard",()=>new Ee(1,10,3,qt*.2,qt*.6,qt*.64,qt*.3)),N===3?J:sn("beard",7033152),0,.93,0).scale.set(.0805,.094,.0865)},F=N=>d(()=>D(N)),D=N=>{u(Qt("veil",()=>new Ee(1,14,8,qt*.8,qt*1.4,0,qt*.62)),N,0,.93,-.012).scale.set(.106,.116,.112),u(xn("veilFall",{t0:qt*.42,t1:qt*1.58,top:()=>.955,bot:()=>.74,rad:(R,x)=>Hn(.205,.114,Math.sqrt((x-.74)/.215))+.006*Math.sin(R*8),m:5,n:14}),N)};if(h===0||h===4){const N=h===0&&o>.5,T=h===4&&l>.6,R=h===4?pt.purple:null;if(b(N?pt.dye(Math.floor(c*7)):pt.tunic,.04,N?.06:.1),!N)for(const k of[-1])for(const W of[1])u(xn("clavus"+k+W,{t0:(W>0?0:qt)+k*.42-.07,t1:(W>0?0:qt)+k*.42+.07,top:()=>.79,bot:()=>.105,rad:(J,Y)=>yn(Y)*1.02+.006,m:8,n:2}),pt.purple);const x=N?pt.dye(Math.floor(c*7)+3):pt.toga;if(m(N?"himation":"toga",x,N?{hem:.2,lift:.06,lo:.52}:{border:R,hem:.035,lift:.035}),N||E(x),I(x,R,N?.3:.44),P(N?pt.dye(Math.floor(c*7)):pt.tunic,-1),z({hair:h===4?3:-1,bald:h===4&&!T&&c>.55,beard:N}),T&&F(x),S(1,x,[.03,.6,.07],[.04,.63,.2],.05),h===4){const k=S(-1,pt.tunic,[.09,.7,.12],T?[.12,.66,.26]:[-.05,.7,.2]);if(T){const W=u(Qt("patera",()=>new Yt(.06,.035,.018,10)),pt.brass,k[0],k[1]+.03,k[2]+.02);W.rotation.x=.2}else{const W=u(Qt("scroll",()=>new Yt(.02,.02,.15,7)),pt.toga,k[0],k[1]+.02,k[2]+.02);W.rotation.z=-.9}A(pt.leather)}else{if(N){const k=S(-1,pt.dye(Math.floor(c*7)),[.04,.6,.05],[.07,.56,.2]);u(Qt("staff",()=>new Yt(.013,.016,.98,6)),pt.wood,k[0],.49,k[2]+.02)}else S(-1,pt.tunic,[.035,.58,.03],[.03,.43,.08]);A(pt.leather)}}else if(h===1){const N=Math.floor(l*7),T=pt.dye(N),R=pt.dye(N+2+Math.floor(o*3));b(T,.075,.03),u(xn("institia",{top:()=>.085,bot:()=>.025,rad:(k,W)=>yn(W)*Ua(k,W,.03,.075)+.006,m:1}),R),C(pt.brass,.655,.146,.011),m("palla",R,{hem:.3,lift:.1,lo:.5,out:.042}),I(R,null,.3,!1),z({woman:!0,veiled:c>.35}),c>.35&&F(R),d(()=>{for(const k of[-1,1])p(pt.brass,k*.083,.895,.01,.011)}),S(1,R,[.02,.6,.08],[-.05,.64,.19],.05),P(T,-1);const x=S(-1,T,[.035,.6,.04],o>.5?[.05,.5,.17]:[.03,.44,.07]);o>.5&&(p(pt.terracotta,x[0],x[1]+.02,x[2]+.05,.05,.06,.05),u(Qt("jugNeck",()=>new Yt(.02,.026,.07,7)),pt.terracotta,x[0],x[1]+.1,x[2]+.05)),A(pt.leather)}else if(h===2){M(pt.red,.33),U("caliga");const N=c<.45;if(N){u(xn("mail",{top:()=>.862,bot:()=>.41,rad:(Y,H)=>yn(H)+.02+(H<.52?.035*(.52-H)/.11:0),m:10,n:22}),pt.mail);for(const Y of[-1,1])p(pt.mail,Y*.165,.79,0,.06,.04,.066)}else{for(let Y=0;Y<6;Y++){const H=.5+Y*.047;u(xn("hoop"+Y,{top:()=>H+.052,bot:()=>H,rad:(Z,Q)=>yn(Q)+.03-(Q-H)*.36,m:1,n:20}),pt.steel)}u(xn("breast",{top:()=>.86,bot:()=>.775,rad:(Y,H)=>yn(H)+.02,m:3,n:20}),pt.steel);for(const Y of[-1,1])for(let H=0;H<3;H++)p(pt.steel,Y*(.15+H*.022),.815-H*.022,0,.066-H*.004,.022,.085-H*.006)}p(pt.red,0,.862,.01,.06,.022,.058),C(pt.leather,.5,.152,.02);for(let Y=-2;Y<=2;Y++)u(Qt("apron",()=>new rn(.016,.14,.01)),pt.leather,Y*.027,.42,.12),p(pt.brass,Y*.027,.355,.122,.011);for(let Y=-3;Y<=3;Y++)p(pt.brass,Math.sin(Y*.3)*.155,.5,Math.cos(Y*.3)*.155*Va+.012,.012);z({helmet:!0}),d(()=>{u(Qt("helm",()=>new Ee(1,12,6,0,qt*2,0,qt*.47)),pt.steel,0,.955,-.004).scale.set(.09,.09,.096);const H=u(Qt("brow",()=>new Dn(.09,.01,5,14,qt)),pt.brass,0,.952,.004);H.rotation.x=-qt/2+.12,u(Qt("helmBack",()=>new Ee(1,10,4,qt*1.02,qt*.96,qt*.46,qt*.3)),pt.steel,0,.955,-.004).scale.set(.09,.09,.096);const Q=p(pt.steel,0,.872,-.078,.066,.01,.04);Q.rotation.x=-.85;for(const ht of[-1,1])p(pt.mail,ht*.077,.915,.028,.007,.044,.034);p(pt.brass,0,1.05,-.004,.013,.016,.013)}),S(1,pt.red,[.04,.6,.04],[.05,.55,.12]);const T=.95,R=.24,x=[.265-R*Math.sin(T),.5,.15-R*Math.cos(T)],k=(Y,H,Z,Q,ht,vt=0,mt=0)=>u(Qt(Y,()=>new Yt(H,H,Z,10,1,!0,T+mt-Q/2,Q)),ht,x[0],x[1]+vt,x[2]);if(N){const Y=u(Qt("oval",()=>new Yt(1,1,.02,16)),pt.auxShield,.25,.5,.13);Y.rotation.set(qt/2,0,-T,"YXZ"),Y.rotation.y=T,Y.rotation.z=0,Y.scale.set(.15,1,.3);const H=u(Qt("ovalRim",()=>new Dn(1,.035,4,18)),pt.brass,.25,.5,.13);H.rotation.y=T,H.scale.set(.15,.3,.3),p(pt.brass,.25+.02*Math.sin(T),.5,.13+.02*Math.cos(T),.035)}else{k("scutum",R,.6,1.1,pt.scutum);for(const Y of[-.29,.29])k("scRim"+Y,R+.003,.025,1.12,pt.brass,Y);for(const Y of[-.55,.55])k("scEdge"+Y,R+.003,.6,.05,pt.brass,0,Y);k("scTab",R+.004,.11,.2,pt.brass);for(const Y of[-1,1])for(let H=0;H<4;H++){const Z=.3-H*.055;k("scWing"+Y+H,R+.004,.02,Z,pt.brass,.085-H*.032,Y*(.11+Z/2))}for(const Y of[-1,1])k("scBolt"+Y,R+.004,.15,.03,pt.brass,Y*.15),k("scBarb"+Y,R+.004,.02,.12,pt.brass,Y*.2),k("scBarb2"+Y,R+.004,.02,.07,pt.brass,Y*.235);p(pt.steel,x[0]+(R+.01)*Math.sin(T),.5,x[2]+(R+.01)*Math.cos(T),.04)}const W=S(-1,pt.red,[.05,.62,.05],[.1,.6,.14]);if(N){u(Qt("hasta",()=>new Yt(.012,.012,1.25,6)),pt.wood,W[0],.625,W[2]+.01);const Y=u(Qt("hastaTip",()=>new pn(.024,.12,4)),pt.steel,W[0],1.31,W[2]+.01);Y.scale.z=.4}else u(Qt("pilumShaft",()=>new Yt(.013,.013,.86,6)),pt.wood,W[0],.43,W[2]+.01),u(Qt("pilumBlock",()=>new rn(.04,.07,.04)),pt.wood,W[0],.88,W[2]+.01),u(Qt("pilumShank",()=>new Yt(.006,.006,.4,5)),pt.steel,W[0],1.1,W[2]+.01),u(Qt("pilumTip",()=>new pn(.014,.06,4)),pt.steel,W[0],1.33,W[2]+.01);const J=u(Qt("gladius",()=>new rn(.03,.26,.05)),pt.leather,-.175,.41,-.01);J.rotation.x=.18,p(pt.brass,-.175,.265,-.035,.022),p(pt.wood,-.175,.575,.02,.022,.03,.022),u(Ia("baldric",Y=>{const H=Hn(.52,.83,Math.pow((Math.sin(Y)+1)/2,.8));return[H,yn(H)+.034]},-qt,qt,.011,!0),pt.leather)}else if(h===3){U("sandal"),u(Qt("torso",()=>new gi(uu.filter(([x])=>x>=.42).map(([x,k])=>new ot(k*.94,x)),12)),_).scale.z=Va;const N=l>.5?pt.undyed:pt.dye(6),T=x=>Hn(.6,.85,Math.pow(Yi((Math.sin(x-.25)+1)/2),1.6));if(u(xn("exomis",{top:T,bot:()=>.34,rad:(x,k)=>(k<.56?Hn(.172,.13,(k-.34)/.22):yn(k)+.004)*Ua(x,k,.34,.05,9),m:9}),N),u(Ia("exomisRoll",x=>[T(x),yn(T(x))+.004],-qt,qt,.007,!0),N),C(pt.leather,.555,.134,.014),z({beard:c>.5}),o>.45){const x=new Ht;x.position.set(.03,.62,.2),x.rotation.set(.22,0,-.12),a.add(x),lt(x,Qt("amphora",()=>new gi([[0,-.2],[.016,-.185],[.024,-.14],[.062,-.07],[.085,.01],[.082,.075],[.05,.125],[.03,.145],[.027,.225],[.042,.232],[.042,.25],[.025,.25]].map(([k,W])=>new ot(k,W)),12)),pt.terracotta);for(const k of[-1,1]){const W=lt(x,Qt("amHandle",()=>new Dn(.05,.01,5,8,qt)),pt.terracotta,k*.03,.165,0);W.rotation.z=k*-qt/2}S(1,null,[.05,.6,.1],[-.04,.6,.27]),S(-1,null,[.05,.58,.1],[-.06,.52,.27])}else{const x=S(-1,null,[.05,.62,.08],[.02,.74,.17]),k=new Ht;k.position.set(x[0]-.012,x[1],x[2]),k.rotation.x=-.95,a.add(k),lt(k,Qt("haft",()=>new Yt(.012,.012,.72,6)),pt.wood,0,.26,0),lt(k,Qt("mattock",()=>new rn(.075,.012,.1)),pt.steel,0,.6,-.05).rotation.x=.5,S(1,null,[.04,.6,.03],[.03,.45,.08])}l<.6&&d(()=>{u(Qt("pileus",()=>new Ee(1,12,6,0,qt*2,0,qt*.5)),pt.felt,0,.962,-.008).scale.set(.088,.135,.092)})}else{M(pt.undyed,.36),U("boot");const N=l>.5?pt.cloak:pt.dye(l>.25?2:6),T=[[.25,.235],[.45,.222],[.66,.2],[.79,.188],[.85,.13],[.878,.05]];u(xn("paenula",{top:()=>.878,bot:x=>.34-.09*Yi(Math.cos(x))**3-.05*Yi(-Math.cos(x))**3,rad:(x,k)=>yn(k,T)*(1+.075*Math.sin(x*8)*Yi((.8-k)/.45)),m:10}),N).scale.z=1.12,p(N,0,.84,-.095,.07,.04,.05),u(Ia("paenulaNeck",()=>[.868,.075],-qt,qt,.022,!0),N),z({hair:o>.5?-1:3,beard:c>.4}),c>.5&&d(()=>{const x=u(Qt("petasos",()=>new Yt(.17,.18,.012,14)),pt.straw,0,1,0);x.rotation.x=-.06,p(pt.straw,0,1.005,0,.085,.045,.085)});const R=S(-1,N,[.07,.62,.09],[.12,.66,.19],.05);u(Qt("walkstaff",()=>new Yt(.014,.018,1.08,6)),pt.wood,R[0],.54,R[2]+.01),u(Ia("satStrap",x=>{const k=Hn(.47,.845,Math.pow((1-Math.sin(x))/2,.8));return[k,yn(k,T)*1.005+.003]},-qt,qt,.007,!0),pt.leather).scale.z=1.12,u(Qt("satchel",()=>new rn(.03,.11,.14)),pt.leather,.232,.43,.02),u(Qt("satFlap",()=>new rn(.034,.06,.146)),pt.sole,.234,.457,.02)}return a}const bt=(n,t,e)=>{const i=Math.min(1,Math.max(0,(e-n)/(t-n)));return i*i*(3-2*i)},Te=(n,t,e)=>n+(t-n)*e,Ln=(n,t)=>{const e=Math.sin(n*127.1+t*311.7)*43758.5453;return e-Math.floor(e)};function Or(n,t){const e=Math.floor(n),i=Math.floor(t),s=n-e,r=t-i,a=s*s*(3-2*s),o=r*r*(3-2*r);return Te(Te(Ln(e,i),Ln(e+1,i),a),Te(Ln(e,i+1),Ln(e+1,i+1),a),o)}const Jt=(n,t)=>Or(n,t)*.5+Or(n*2.1,t*2.1)*.3+Or(n*4.3,t*4.3)*.2,Oi=(n,t,e,i,s,r)=>r*Math.exp(-((n-e)**2+(t-i)**2)/(s*s));function ki(n,t,e,i,s,r,a=0){const o=Math.cos(a),l=Math.sin(a),c=n-e,h=t-i;return Math.hypot((c*o+h*l)/s,(-c*l+h*o)/r)}function Mn(n=1){let t=n*9301+49297;return()=>(t=t*16807%2147483647,t/2147483647)}function Cn(n,t,e=1){const i=document.createElement("canvas");i.width=i.height=n,t(i.getContext("2d"),n);const s=new _c(i);return s.wrapS=s.wrapT=Ka,s.repeat.set(e,e),s.colorSpace=Rn,s.anisotropy=4,s}const ls=(n,t,e,i,s=!0)=>{const r=Mn(e);for(let a=0;a<e;a++)n.fillStyle=`rgba(${s?"40,30,20":"255,250,240"},${r()*i})`,n.fillRect(r()*t,r()*t,1+r()*2.5,1+r()*2.5)},Xs=(n,t,e,i,s)=>{const r=Mn(s);for(let a=0;a<e;a++){const o=r()*t,l=r()*t,c=8+r()*40,h=n.createRadialGradient(o,l,0,o,l,c),f=r()>.5;h.addColorStop(0,`rgba(${f?"60,45,30":"255,255,245"},${i*r()})`),h.addColorStop(1,"rgba(0,0,0,0)"),n.fillStyle=h,n.fillRect(o-c,l-c,c*2,c*2),o<c&&(n.translate(t,0),n.fillRect(o-c,l-c,c*2,c*2),n.translate(-t,0)),l<c&&(n.translate(0,t),n.fillRect(o-c,l-c,c*2,c*2),n.translate(0,-t))}};function Vs(n,t,e,i,s){return Cn(256,(r,a)=>{const o=Mn(s),l=a/e;r.fillStyle=t,r.fillRect(0,0,a,a);const c=new Mt(n),h={};c.getHSL(h);for(let f=0;f<e;f++){let u=-o()*40;for(;u<a;){const d=l*(1.3+o()*1.5),y=new Mt().setHSL(h.h+(o()-.5)*.02,h.s*(.8+o()*.4),h.l+(o()-.5)*i);r.fillStyle="#"+y.getHexString(),r.fillRect(u+1,f*l+1,d-2,l-2),r.fillStyle="rgba(255,255,255,0.12)",r.fillRect(u+1,f*l+1,d-2,2),r.fillStyle="rgba(0,0,0,0.14)",r.fillRect(u+1,(f+1)*l-3,d-2,2),u+=d}}Xs(r,a,26,.16,s+3),ls(r,a,900,.18)})}const nl={},Ye=(n,t)=>nl[n]||(nl[n]=t()),Re={limestone:()=>Ye("lime",()=>Vs(14272415,"#8f7f62",8,.1,3)),honey:()=>Ye("honey",()=>Vs(13478003,"#7d6744",8,.12,5)),grey:()=>Ye("grey",()=>Vs(11117204,"#6a655c",9,.1,7)),rubble:()=>Ye("rubble",()=>Vs(11050376,"#857a69",44,.16,9)),cobble:()=>Ye("cobble",()=>Vs(11773324,"#6b5f4c",18,.14,15)),brick:()=>Ye("brick",()=>Cn(256,(n,t)=>{n.drawImage(Re.rubble().image,0,0);const e=Mn(61);for(const i of[40,126,212])for(let s=0;s<3;s++){let r=-e()*20;for(;r<t;){const a=18+e()*8;n.fillStyle=`hsl(${12+e()*8},${45+e()*15}%,${36+e()*12}%)`,n.fillRect(r+1,i+s*7+1,a-2,5),r+=a}}})),karst:()=>Ye("karst",()=>Cn(512,(n,t)=>{n.fillStyle="#b9b0a2",n.fillRect(0,0,t,t),Xs(n,t,160,.2,71);const e=Mn(67);n.lineWidth=1.2;for(let i=0;i<5;i++){const s=(i+.3+e()*.4)*t/5;n.strokeStyle=`rgba(70,60,50,${.12+e()*.12})`,n.beginPath();for(let r=0;r<=t;r+=16)n.lineTo(r,s+Math.sin(r*.02+i)*5+Math.sin(r*.07+i*3)*2);n.stroke()}for(let i=0;i<64;i++){const s=e()*t,r=e()*t*.6,a=90+e()*300,o=3+e()*10,l=e()>.3,c=.1+e()*.12,h=(e()-.5)*10;for(let f=0;f<3;f++){const u=o*(1-f*.3),d=n.createLinearGradient(0,r,0,r+a),y=l?`rgba(172,86,46,${c*.85})`:`rgba(44,40,36,${c*.7})`;d.addColorStop(0,"rgba(0,0,0,0)"),d.addColorStop(.08,y),d.addColorStop(1,"rgba(0,0,0,0)"),n.fillStyle=d,n.beginPath(),n.moveTo(s-u,r),n.lineTo(s+u,r),n.quadraticCurveTo(s+u*.5+h,r+a*.5,s+h,r+a),n.quadraticCurveTo(s-u*.5+h,r+a*.5,s-u,r),n.fill()}}for(let i=0;i<9;i++){n.strokeStyle=`rgba(40,34,28,${.25+e()*.2})`,n.lineWidth=.8+e(),n.beginPath();let s=e()*t,r=e()*t;n.moveTo(s,r);for(let a=0;a<7;a++)s+=(e()-.5)*14,r+=12+e()*22,n.lineTo(s,r);n.stroke()}for(let i=0;i<9;i++){const s=e()*t,r=e()*t,a=20+e()*50,o=n.createRadialGradient(s,r,0,s,r,a);o.addColorStop(0,`rgba(176,104,62,${.1+e()*.14})`),o.addColorStop(1,"rgba(0,0,0,0)"),n.fillStyle=o,n.fillRect(s-a,r-a,a*2,a*2)}ls(n,t,2600,.14)})),concrete:()=>Ye("concrete",()=>Cn(256,(n,t)=>{n.fillStyle="#84766a",n.fillRect(0,0,t,t);const e=Mn(11);for(let i=0;i<2600;i++)n.fillStyle=`hsl(${24+e()*16},${8+e()*12}%,${30+e()*34}%)`,n.beginPath(),n.arc(e()*t,e()*t,.8+e()*2.2,0,7),n.fill();for(let i=0;i<9;i++)n.fillStyle="rgba(40,30,20,0.16)",n.fillRect(0,i*t/9+e()*6,t,2);Xs(n,t,40,.22,13)})),marble:()=>Ye("marble",()=>Cn(256,(n,t)=>{n.fillStyle="#efe6d3",n.fillRect(0,0,t,t),Xs(n,t,40,.14,17);const e=Mn(19);n.strokeStyle="rgba(150,135,110,0.25)",n.lineWidth=1;for(let i=0;i<9;i++){n.beginPath();let s=e()*t,r=0;for(n.moveTo(s,r);r<t;)s+=(e()-.5)*26,r+=14+e()*20,n.lineTo(s,r);n.stroke()}ls(n,t,500,.12)})),shaft:()=>Ye("shaft",()=>Cn(256,(n,t)=>{n.fillStyle="#ece2cc",n.fillRect(0,0,t,t),Xs(n,t,30,.16,23);for(let i=0;i<4;i++)n.fillStyle="rgba(90,75,55,0.26)",n.fillRect(0,i*t/4+6*(i%2),t,2);const e=Mn(29);for(let i=0;i<26;i++)n.fillStyle=`rgba(110,90,60,${.05+e()*.1})`,n.fillRect(e()*t,0,2+e()*5,t);ls(n,t,400,.12)})),flutes:()=>Ye("flutes",()=>{const n=Cn(256,(t,e)=>{const s=e/20;for(let r=0;r<20;r++){const a=t.createLinearGradient(r*s,0,(r+1)*s,0);a.addColorStop(0,"#fff"),a.addColorStop(.5,"#555"),a.addColorStop(1,"#fff"),t.fillStyle=a,t.fillRect(r*s,0,s+1,e)}});return n.colorSpace=ci,n}),basalt:()=>Ye("basalt",()=>Cn(256,(n,t)=>{n.fillStyle="#26262a",n.fillRect(0,0,t,t);const e=Mn(31),i=7,s=t/i;for(let r=0;r<i;r++)for(let a=0;a<i;a++){const o=a*s+r%2*s*.5,l=r*s;n.fillStyle=`hsl(${220+e()*30},${4+e()*6}%,${26+e()*16}%)`,n.beginPath();for(let c=0;c<6;c++){const h=c/6*6.283+e()*.5,f=s*(.42+e()*.12);n.lineTo(o+Math.cos(h)*f+s/2,l+Math.sin(h)*f+s/2)}n.fill()}ls(n,t,500,.15,!1)})),paving:()=>Ye("paving",()=>Vs(13616038,"#8a7d66",6,.12,37)),ground:()=>Ye("ground",()=>Cn(256,(n,t)=>{n.fillStyle="#d8d8d8",n.fillRect(0,0,t,t),ls(n,t,3200,.26),ls(n,t,1200,.26,!1)},5)),strata:()=>Ye("strata",()=>Cn(256,(n,t)=>{const e=Mn(43);let i=0;for(;i<t;){const s=6+e()*22;n.fillStyle=`hsl(28,${10+e()*18}%,${58+e()*30}%)`,n.fillRect(0,i,t,s),n.fillStyle="rgba(50,35,25,0.4)",n.fillRect(0,i+s-2,t,2),i+=s}for(let s=0;s<40;s++)n.fillStyle=`rgba(40,30,20,${.1+e()*.2})`,n.fillRect(e()*t,e()*t,2,8+e()*40);Xs(n,t,40,.25,47)},1)),tiles:()=>Ye("tiles",()=>Cn(128,(n,t)=>{n.fillStyle="#a84f33",n.fillRect(0,0,t,t);for(let e=0;e<8;e++){const i=n.createLinearGradient(e*16,0,e*16+16,0);i.addColorStop(0,"rgba(0,0,0,0.35)"),i.addColorStop(.5,"rgba(255,200,160,0.25)"),i.addColorStop(1,"rgba(0,0,0,0.35)"),n.fillStyle=i,n.fillRect(e*16,0,16,t)}for(let e=0;e<6;e++)n.fillStyle="rgba(60,20,10,0.4)",n.fillRect(0,e*t/6,t,2)})),mosaic:()=>Ye("mosaic",()=>Cn(256,(n,t)=>{n.fillStyle="#e9dfc6",n.fillRect(0,0,t,t);const e=["#7a2f22","#2f4a5c","#c29a3b","#3d3a36"];n.lineWidth=10,n.strokeStyle=e[0],n.strokeRect(10,10,t-20,t-20),n.lineWidth=4,n.strokeStyle=e[3],n.strokeRect(24,24,t-48,t-48);for(let i=0;i<5;i++)for(let s=0;s<5;s++){const r=44+s*34+17,a=44+i*34+17;n.fillStyle=e[(s+i)%4],n.beginPath(),n.moveTo(r,a-14),n.lineTo(r+14,a),n.lineTo(r,a+14),n.lineTo(r-14,a),n.fill(),n.fillStyle="#e9dfc6",n.beginPath(),n.arc(r,a,4,0,7),n.fill()}n.strokeStyle="rgba(60,50,40,0.25)",n.lineWidth=1;for(let i=0;i<t;i+=6)n.beginPath(),n.moveTo(i,0),n.lineTo(i,t),n.moveTo(0,i),n.lineTo(t,i),n.stroke()})),water:()=>Ye("water",()=>{const n=Cn(256,(t,e)=>{t.fillStyle="#808080",t.fillRect(0,0,e,e);const i=Mn(53);for(let s=0;s<260;s++){const r=i()*e,a=i()*e,o=10+i()*30;t.strokeStyle=`rgba(${i()>.5?"255,255,255":"0,0,0"},${.15+i()*.25})`,t.lineWidth=1+i()*1.5,t.beginPath(),t.moveTo(r,a),t.quadraticCurveTo(r+o/2,a-3-i()*3,r+o,a),t.stroke()}},6);return n.colorSpace=ci,n})},ae=n=>new Xn({roughness:.9,metalness:0,...n}),Bn=(n,t={})=>ae({map:Re[n](),bumpMap:Re[n](),bumpScale:1.6,...t}),il={},Vt=(n,t)=>il[n]||(il[n]=t()),w={get limestone(){return Vt("limestone",()=>Bn("limestone"))},get limestoneDS(){return Vt("limestoneDS",()=>Bn("limestone",{side:De}))},get honey(){return Vt("honey",()=>Bn("honey"))},get honeyDS(){return Vt("honeyDS",()=>Bn("honey",{side:De}))},get grey(){return Vt("grey",()=>Bn("grey"))},get rubble(){return Vt("rubble",()=>Bn("rubble"))},get rubbleDS(){return Vt("rubbleDS",()=>Bn("rubble",{side:De}))},get concrete(){return Vt("concrete",()=>Bn("concrete",{bumpScale:2.5}))},get capital(){return Vt("capital",()=>ae({map:Re.marble(),color:15326403,roughness:.7,flatShading:!0}))},get weathered(){return Vt("weathered",()=>ae({map:Re.marble(),color:14471092,roughness:.8}))},get karst(){return Vt("karst",()=>ae({map:Re.karst(),bumpMap:Re.karst(),bumpScale:.8,side:De}))},get relief(){return Vt("relief",()=>ae({color:14208440,roughness:.9}))},get karstFlat(){return Vt("karstFlat",()=>ae({map:Re.ground(),color:13024686,roughness:.9,flatShading:!0}))},get karstDark(){return Vt("karstDark",()=>ae({map:Re.karst(),color:7168600}))},get brick(){return Vt("brick",()=>Bn("brick"))},get brickDS(){return Vt("brickDS",()=>Bn("brick",{side:De}))},get greyGranite(){return Vt("greyGranite",()=>ae({map:Re.marble(),color:10721942,roughness:.45}))},get reed(){return Vt("reed",()=>ae({color:9083470,flatShading:!0}))},get oak(){return Vt("oak",()=>ae({color:6257210,flatShading:!0}))},get marble(){return Vt("marble",()=>ae({map:Re.marble(),roughness:.6}))},get shaft(){return Vt("shaft",()=>ae({map:Re.shaft(),bumpMap:Re.flutes(),bumpScale:2.2,roughness:.62}))},get shaftWarm(){return Vt("shaftWarm",()=>ae({map:Re.shaft(),bumpMap:Re.flutes(),bumpScale:2.2,color:14469798,roughness:.75}))},get basalt(){return Vt("basalt",()=>Bn("basalt",{roughness:.7}))},get paving(){return Vt("paving",()=>Bn("paving"))},get strata(){return Vt("strata",()=>ae({map:Re.strata(),bumpMap:Re.strata(),bumpScale:3,color:14267546,flatShading:!0}))},get rock(){return Vt("rock",()=>ae({map:Re.strata(),color:13351842,flatShading:!0}))},get tiles(){return Vt("tiles",()=>ae({map:Re.tiles(),roughness:.8}))},get mosaic(){return Vt("mosaic",()=>ae({map:Re.mosaic(),roughness:.55}))},get plaster(){return Vt("plaster",()=>ae({color:15326402,map:Re.ground()}))},get dark(){return Vt("dark",()=>ae({color:1906450}))},get wood(){return Vt("wood",()=>ae({color:7031339,roughness:.75}))},get bronze(){return Vt("bronze",()=>ae({color:12159548,roughness:.35,metalness:.85}))},get trunk(){return Vt("trunk",()=>ae({color:5981746}))},get olive(){return Vt("olive",()=>ae({color:8163170,flatShading:!0}))},get pine(){return Vt("pine",()=>ae({color:4155958,flatShading:!0}))},get cedar(){return Vt("cedar",()=>ae({color:4022090,flatShading:!0}))},get palm(){return Vt("palm",()=>ae({color:5208628,flatShading:!0,side:De}))},get palmDry(){return Vt("palmDry",()=>ae({color:10126420,flatShading:!0,side:De}))},get cypress(){return Vt("cypress",()=>ae({color:3100463,flatShading:!0}))},get citrus(){return Vt("citrus",()=>ae({color:3107628,flatShading:!0}))},get shrub(){return Vt("shrub",()=>ae({color:5665850,flatShading:!0}))},get orange(){return Vt("orange",()=>ae({color:15763996,roughness:.5}))},get white(){return Vt("white",()=>ae({color:16118246}))},get sail(){return Vt("sail",()=>ae({color:13189423,side:De}))},get purple(){return Vt("purple",()=>ae({color:8006799,side:De}))},get gold(){return Vt("gold",()=>ae({color:14725184,roughness:.3,metalness:.9}))},get saffron(){return Vt("saffron",()=>ae({color:10115798,emissive:2756426}))},get water(){return Vt("water",()=>new Xn({color:3120560,transparent:!0,opacity:.8,roughness:.12,metalness:.25,bumpMap:Re.water(),bumpScale:1.2}))},get river(){return Vt("river",()=>new Xn({color:5218222,roughness:.15,metalness:.2,bumpMap:Re.water(),bumpScale:1}))}},ke=.3;function lt(n,t,e,i=0,s=0,r=0,a=0){const o=new xe(t,e);return o.position.set(i,s,r),o.rotation.y=a,n.add(o),o}function cv(n,t,e){const i=new rn(n,t,e),s=i.attributes.uv,r=[[e,t],[e,t],[n,e],[n,e],[n,t],[n,t]];for(let a=0;a<6;a++)for(let o=0;o<4;o++){const l=a*4+o;s.setXY(l,s.getX(l)*r[a][0]/ke,s.getY(l)*r[a][1]/ke)}return i}const V=(n,t,e,i,s,r=0,a=0,o=0,l=0)=>lt(n,cv(e,i,s),t,r,a+i/2,o,l);function Ji(n,t,e,i,s,r=0,a=0,o=0,l=16,c=!1){const h=new Yt(e,i,s,l,1,c),f=h.attributes.uv,u=(l+1)*2;for(let d=0;d<u;d++)f.setXY(d,f.getX(d)*6.283*Math.max(e,i)/ke,f.getY(d)*s/ke);return lt(n,h,t,r,a+s/2,o)}const be={};function ze(n,t,e,i,s={}){const{r=.021,y:a=0,style:o="cor",broken:l=!1,shaft:c=w.shaft,cap:h=w.capital,bracket:f=0,seed:u=1}=s,d=new Ht;d.position.set(t,a,e),n.add(d);const y=r*.7,_=o==="cor"?r*2.3:r*1,p=Math.max(.01,(l?i:i-_)-y);V(d,h,r*2.7,r*.3,r*2.7,0,0,0),lt(d,be.base||(be.base=new Yt(1.08,1.3,1,14)),h,0,r*.3+y*.3,0).scale.set(r,y*.6,r);const g=lt(d,be.shaft||(be.shaft=new Yt(.86,1,1,16,1,!1)),c,0,y+p/2,0);if(g.scale.set(r,p,r),g.rotation.y=u*1.7,l){const S=lt(d,be.brk||(be.brk=new Yt(.8,.86,1,7)),w.weathered,r*.04,y+p+r*.1,0);S.scale.set(r,r*.35,r),S.rotation.set(.22,u,.16)}else if(o==="cor"){lt(d,be.bell||(be.bell=new Yt(1.25,.88,1,12)),h,0,y+p+_*.42,0).scale.set(r,_*.84,r);const S=lt(d,be.ring||(be.ring=new Dn(.95,.14,6,14)),h,0,y+p+_*.06,0);S.scale.setScalar(r),S.rotation.x=Math.PI/2;for(let b=0;b<2;b++)for(let M=0;M<8;M++){const P=(M+b*.5)/8*6.283,C=r*(1.05+b*.22),A=lt(d,be.leaf||(be.leaf=new pn(.3,1,4)),h,Math.cos(P)*C,y+p+_*(.24+b*.3),Math.sin(P)*C);A.scale.set(r,_*.42,r*.5),A.rotation.set(0,-P+Math.PI/2,0),A.rotateX(.45+b*.15)}for(let b=0;b<4;b++){const M=b*Math.PI/2+Math.PI/4,P=lt(d,be.vol||(be.vol=new Ee(.33,8,6)),h,Math.cos(M)*r*1.38,y+p+_*.72,Math.sin(M)*r*1.38);P.scale.set(r,r,r*.45),P.rotation.y=-M+Math.PI/2}V(d,h,r*2.7,_*.12,r*2.7,0,y+p+_*.86,0),V(d,h,r*2.5,_*.05,r*2.5,0,y+p+_*.81,0)}else lt(d,be.ech||(be.ech=new Yt(1.35,.88,1,14)),h,0,y+p+_*.3,0).scale.set(r,_*.6,r),V(d,h,r*2.9,_*.4,r*2.9,0,y+p+_*.6,0);return f&&!l&&(V(d,h,r*1.5,r*.5,r*1.3,f*r*1.3,y+p*.56,0),V(d,h,r*.8,r*.5,r*1.1,f*r*1.1,y+p*.56-r*.5,0)),d}function Ks(n,t,e,i,s,r,a=.055,o=.04,l=w.marble){const c=Math.hypot(i-t,s-e)+a,h=-Math.atan2(s-e,i-t),f=(t+i)/2,u=(e+s)/2;V(n,l,c,o*.62,a,f,r,u,h),V(n,l,c+a*.25,o*.38,a*1.3,f,r+o*.62,u,h)}function Ii(n,t,e,i,s=.021,r=1,a=0,o=w.weathered){const l=Mn(r);for(let c=0;c<i;c++){const h=s*(1.5+l()*2.5),f=lt(n,be.drum||(be.drum=new Yt(1,1,1,12)),o,t+(l()-.5)*s*9,a+s,e+(l()-.5)*s*9);f.scale.set(s,h,s),f.rotation.set(Math.PI/2,0,l()*3.1)}}function Qe(n,t,e,i,s,r,a=w.limestone,o=1,l=()=>0){const c=Mn(o);for(let h=0;h<i;h++){const f=t+(c()-.5)*s,u=e+(c()-.5)*s,d=r*(.6+c()),y=V(n,a,d*(1+c()),d*.7,d,f,l(f,u)-d*.1,u,c()*3);y.rotation.z=(c()-.5)*.3}}function Ue(n,t,e,i,s,r,a=0,o=0,l=0,c=0){const h=new bs;h.moveTo(-e/2,0),h.lineTo(e/2,0),h.lineTo(e/2,i),h.lineTo(-e/2,i),h.closePath();for(const d of r){const y=new Hr,_=d.w/2,p=d.sill||0;y.moveTo(d.x-_,p),y.lineTo(d.x-_,d.h-_),y.absarc(d.x,d.h-_,_,Math.PI,0,!0),y.lineTo(d.x+_,p),y.closePath(),h.holes.push(y)}const f=new Qi(h,{depth:s,bevelEnabled:!1,curveSegments:10});f.translate(0,0,-s/2);const u=f.attributes.uv;for(let d=0;d<u.count;d++)u.setXY(d,u.getX(d)/ke,u.getY(d)/ke);return lt(n,f,t,a,o,l,c)}function li(n,t,e,i,s,r=0,a=0,o=0,l=0,c=1){const h=new Ht;h.position.set(r,a,o),h.rotation.y=l,n.add(h);const f=Math.max(.012,e*.12);V(h,t,f,s,i,-e/2+f/2,0,0),V(h,t,f,s,i,e/2-f/2,0,0);const u=new Yt(e/2,e/2,i,14,1,!0,-Math.PI/2,Math.PI),d=u.attributes.uv;for(let p=0;p<d.count;p++)d.setXY(p,d.getX(p)*e*1.57/ke,d.getY(p)*i/ke);const y=lt(h,u,t,0,s,0);y.rotation.x=-Math.PI/2;const _=(p,g)=>{const S=new bs;if(S.moveTo(-e/2,0),S.lineTo(e/2,0),S.lineTo(e/2,s),S.absarc(0,s,e/2,0,Math.PI,!1),S.lineTo(-e/2,0),g){const P=new Hr,C=e*.2,A=s*.8;P.moveTo(-C,0),P.lineTo(-C,A-C),P.absarc(0,A-C,C,Math.PI,0,!0),P.lineTo(C,0),P.closePath(),S.holes.push(P)}const b=new Qi(S,{depth:f,bevelEnabled:!1,curveSegments:10});b.translate(0,0,-f/2);const M=b.attributes.uv;for(let P=0;P<M.count;P++)M.setXY(P,M.getX(P)/ke,M.getY(P)/ke);lt(h,b,t,0,0,p)};return c&&_(i/2-f/2,!0),c>1&&_(-i/2+f/2,!1),h}function to(n,{r0:t=.16,r1:e=.55,rows:i=10,arc:s=Math.PI,stairs:r=5,material:a=w.limestone,ruin:o=0,x:l=0,y:c=0,z:h=0,ry:f=0}={}){const u=new Ht;u.position.set(l,c,h),u.rotation.y=f,n.add(u);const d=(e-t)/i,y=d*.62,_=[new ot(t,0)];for(let M=0;M<i;M++)_.push(new ot(t+M*d,(M+1)*y),new ot(t+(M+1)*d,(M+1)*y));_.push(new ot(e+d*.6,i*y));const p=new gi(_,48,Math.PI-s/2,s);{const M=e+d*.6,P=i*y,C=new Yt(M,M,P,48,1,!0,Math.PI-s/2,s),A=C.attributes.uv;for(let U=0;U<A.count;U++)A.setXY(U,A.getX(U)*s*M/ke,A.getY(U)*P/ke);lt(u,C,a===w.honey?w.honeyDS:a===w.limestone?w.limestoneDS:w.rubbleDS,0,P/2,0)}const g=p.attributes.uv;for(let M=0;M<g.count;M++)g.setXY(M,g.getX(M)*s*e/ke,g.getY(M)*3);const S=a===w.limestone?w.limestoneDS:a===w.honey?w.honeyDS:w.rubbleDS;lt(u,p,S);for(let M=0;M<r;M++){const P=-s/2+s*(M+.5)/r+Math.PI/2;for(let C=0;C<i;C++){const A=t+(C+.25)*d,U=V(u,w.marble,d*.52,y*.5,.03,Math.cos(P)*A,(C+1)*y-y*.5+.001,-Math.sin(P)*A,P);U.scale.y=1}}const b=lt(u,new xs(t,32),w.paving,0,.004,0);b.rotation.x=-Math.PI/2;for(const M of[-1,1]){const P=Math.PI/2+M*s/2,C=new bs;C.moveTo(t,0);for(let v=0;v<i;v++)C.lineTo(t+v*d,(v+1)*y+.004),C.lineTo(t+(v+1)*d,(v+1)*y+.004);C.lineTo(e+d*.62,i*y+.004),C.lineTo(e+d*.62,0),C.closePath();const A=new Qi(C,{depth:.024,bevelEnabled:!1});A.translate(0,0,-.012);const U=A.attributes.uv;for(let v=0;v<U.count;v++)U.setXY(v,U.getX(v)/ke,U.getY(v)/ke);lt(u,A,a,0,0,0,P)}return u.userData={top:i*y,dr:d,dy:y},u}const Zt={},sl=(n,t,e,i)=>Zt[n]||(Zt[n]=(()=>{const s=t.attributes.position;for(let r=0;r<s.count;r++){const a=1+e*(Ln(s.getX(r)*31.7+i,s.getY(r)*17.3+s.getZ(r)*23.1)-.5)*2;s.setXYZ(r,s.getX(r)*a,s.getY(r),s.getZ(r)*a)}return t.computeVertexNormals(),t})()),hv=()=>Zt.frond2||(Zt.frond2=(()=>{const t=[],e=[];for(let s=0;s<=5;s++){const r=s/5,a=r*.2,o=.07*Math.sin(r*2.6)-.1*r*r,l=.028*Math.sin(Math.PI*Math.min(1,r*1.15+.08));t.push(a,o+.012,-l,a,o,0,a,o+.012,l)}for(let s=0;s<5;s++){const r=s*3;e.push(r,r+3,r+1,r+3,r+4,r+1,r+1,r+4,r+2,r+4,r+5,r+2)}const i=new Me;return i.setAttribute("position",new Bt(t,3)),i.setAttribute("uv",new Bt(new Float32Array(t.length/3*2),2)),i.setIndex(e),i.computeVertexNormals(),i})());function Ne(n,t,e,i,s=1,r=0,a=1){const o=new Ht;o.position.set(e,r,i),o.rotation.y=a*2.4,o.scale.setScalar(s*.72),n.add(o);const l=Math.floor(Ln(a,7.7)*3),c=Ln(a,3.1),h=Ln(a,9.4),f=Zt.trunk||(Zt.trunk=new Yt(.62,1,1,5)),u=(_,p=.012)=>{const g=lt(o,f,w.trunk,0,_/2,0);return g.scale.set(p,_,p),g},d=(_,p,g,S,b,M,P)=>{const C=new X(_,p,g),A=new X(S,b,M),U=lt(o,f,w.trunk,(_+S)/2,(p+b)/2,(g+M)/2);return U.scale.set(P,C.distanceTo(A),P),U.quaternion.setFromUnitVectors(new X(0,1,0),A.sub(C).normalize()),U},y=(_,p,g,S,b,M=.75,P=0)=>{const C=lt(o,sl("blob"+(l+P)%3,new Ms(1,0),.2,(l+P)%3),_,p,g,S);return C.scale.set(b,b*M,b),C.rotation.y=P*1.7+a,C};if(t==="cypress")u(.05,.009),lt(o,sl("cyp"+l,new gi([[.012,.03],[.027,.07],[.034,.14],[.031,.22],[.021,.3],[.008,.355],[0,.375]].map(([p,g])=>new ot(p,g)),7),.14,l),w.cypress).scale.set(.9+c*.3,.9+h*.25,.9+c*.3),h>.6&&lt(o,Zt.cypTip||(Zt.cypTip=new pn(.012,.09,5)),w.cypress,.014,.3*(.9+h*.25),.006);else if(t==="pine"){const _=.03*(c-.5),p=.165;d(0,0,0,_,p*.62,0,.014);for(const[g,S]of[[.045,.02],[-.04,.03],[0,-.045]])d(_,p*.6,0,_+g,p,S,.007);for(const[g,S,b,M,P]of[[0,.205,0,.075,0],[.06,.19,.03,.055,1],[-.055,.192,.035,.055,2],[0,.188,-.06,.05,1],[.035,.215,-.02,.045,2]])y(w.pine,_+g,S,b,M,.42,P)}else if(t==="olive"){d(0,0,0,.008,.045,.004,.02);for(const[_,p]of[[.04,.012],[-.035,.02],[.004,-.04]])d(.008,.04,.004,_,.085,p,.009);for(const[_,p,g,S,b]of[[.045,.105,.015,.045,0],[-.04,.1,.025,.046,1],[0,.098,-.045,.042,2],[0,.125,0,.048,1],[.03,.09,-.03,.03,0]])y(w.olive,_,p,g,S,.72,b)}else if(t==="citrus"){u(.04,.009),y(w.citrus,0,.078,0,.05,.9),y(w.citrus,.02,.066,.015,.035,.85,1);for(let _=0;_<6;_++){const p=_*1.3+a;lt(o,Zt.fruit||(Zt.fruit=new Ee(1,5,4)),w.orange,Math.cos(p)*.046,.058+.014*(_%3),Math.sin(p)*.046).scale.setScalar(.0085)}}else if(t==="palm"){const _=.2+c*.05;let p=0,g=0;for(let b=0;b<4;b++){const M=p+.012*(b+1)*.6,P=g+_/4;d(p,g,0,M,P+.004,0,.0125-b*.001),p=M,g=P}lt(o,Zt.palmHead||(Zt.palmHead=new Kr(1,0)),w.trunk,p,g,0).scale.set(.02,.016,.02);const S=hv();for(let b=0;b<9;b++){const M=b/9*6.283+h,P=lt(o,S,w.palm,p,g+.005,0);P.rotation.set(0,-M,.55-b%3*.32),P.scale.setScalar(.85+b%2*.2)}for(let b=0;b<4;b++){const M=b/4*6.283+.6+h,P=lt(o,S,w.palmDry,p,g-.004,0);P.rotation.set(0,-M,-.95),P.scale.setScalar(.6)}for(let b=0;b<2;b++)lt(o,Zt.fruit||(Zt.fruit=new Ee(1,5,4)),w.orange,p+Math.cos(b*3+c*6)*.022,g-.02,Math.sin(b*3+c*6)*.022).scale.set(.01,.016,.01)}else if(t==="oak"){d(0,0,0,.005,.04,0,.016);for(const[_,p]of[[.035,.015],[-.035,-.01]])d(.005,.035,0,_,.07,p,.009);for(const[_,p,g,S,b]of[[0,.09,0,.068,0],[.045,.076,.03,.048,1],[-.05,.08,-.02,.052,2],[0,.07,-.05,.04,1]])y(w.oak,_,p,g,S,.82,b)}else if(t==="cedar"){u(.3,.012);const _=Zt.cedarTier||(Zt.cedarTier=sl("cedarTier",new pn(1,1,8,1),.2,5));for(let p=0;p<5;p++){const g=.098-p*.016+p%2*.008,S=lt(o,_,w.cedar,(Ln(a,p)-.5)*.012,.085+p*.05,(Ln(p,a)-.5)*.012);S.scale.set(g,.05,g),S.rotation.y=p*.9}lt(o,_,w.cedar,0,.325,0).scale.set(.03,.03,.03)}else if(t==="reed"){for(let _=0;_<7;_++){const p=lt(o,Zt.reedB||(Zt.reedB=new pn(1,1,4)),w.reed,Math.cos(_*2.4)*.014,.035+_%3*.006,Math.sin(_*2.4)*.014);p.scale.set(.005,.07+_%3*.012,.005),p.rotation.set(Math.sin(_*2.4)*.16,0,-Math.cos(_*2.4)*.16)}for(let _=0;_<2;_++)lt(o,Zt.reedB,w.palmDry,_*.016-.008,.095,.004).scale.set(.008,.03,.008)}else y(w.shrub,0,.02,0,.034,.75),c>.5&&y(w.shrub,.025,.016,.012,.022,.75,1);return o}function gn(n,t,e,i,s,r=1,a=.7,o=1.2,l=()=>!0){const c=Mn(r);let h=0;for(let f=0;f<e*6&&h<e;f++){const u=Te(i[0],i[2],c()),d=Te(i[1],i[3],c());Math.hypot(u,d)>.93||!l(u,d)||(Ne(n,Array.isArray(t)?t[Math.floor(c()*t.length)]:t,u,d,Te(a,o,c()),s(u,d)-.004,f),h++)}}function pi(n,t,e,i,s,r=1,a=w.rock){const o=lt(n,Zt.boulder||(Zt.boulder=new Ms(1,0)),a,t,e,i);return o.scale.set(s*(.8+Ln(r,1)*.6),s*(.5+Ln(r,2)*.5),s*(.8+Ln(r,3)*.6)),o.rotation.set(r,r*2.3,r*.7),o}function or(n=w.sail,t=1){const e=new Ht;lt(e,new Ee(.5,14,8),w.wood,0,.03,0).scale.set(1.5,.3,.32),V(e,w.trunk,1.1,.02,.22,0,.1,0),lt(e,new pn(.05,.36,6),w.bronze,.86,.04,0).rotation.z=-Math.PI/2;const s=lt(e,new Dn(.17,.03,6,10,Math.PI),w.wood,-.7,.17,0);s.rotation.z=Math.PI/2.4,lt(e,new Yt(.018,.02,.75,6),w.wood,.05,.47,0),lt(e,new Yt(.012,.012,.66,6),w.wood,.05,.78,0).rotation.x=Math.PI/2;const r=new On(.62,.42,6,1),a=r.attributes.position;for(let o=0;o<a.count;o++)a.setZ(o,.09*Math.cos(a.getX(o)*4.2));r.computeVertexNormals(),lt(e,r,n,.1,.56,0,Math.PI/2);for(let o=0;o<7;o++)for(const l of[-1,1]){const c=lt(e,new Yt(.007,.007,.36,4),w.wood,-.45+o*.15,.03,l*.25);c.rotation.x=l*1.1}return e.scale.setScalar(t),e}const uv=n=>n===w.honey?w.honeyDS:n===w.limestone?w.limestoneDS:n===w.rubble?w.rubbleDS:n===w.brick?w.brickDS:n;function Un(n,t,e,i,s=0,r=0,a=0,o=0){const l=new Yt(e,e,i,16,1,!0,Math.PI/2,Math.PI),c=l.attributes.uv;for(let h=0;h<c.count;h++)c.setXY(h,c.getX(h)*3.14*e/ke,c.getY(h)*i/ke);return lt(n,l,uv(t),s,r+i/2,a,o)}function jr(n,t,e,i,s,r=0,a=0,o=0,l=0){const c=new bs;c.moveTo(-e/2,0),c.lineTo(e/2,0),c.lineTo(0,s),c.closePath();const h=new Qi(c,{depth:i,bevelEnabled:!1});h.translate(0,0,-i/2);const f=h.attributes.uv;for(let u=0;u<f.count;u++)f.setXY(u,f.getX(u)/ke*2,f.getY(u)/ke*2);return lt(n,h,t,r,a,o,l)}function lr(n,t,e,i=0,s=1,r=0,a=w.limestone){const o=new Ht;o.position.set(t,i,e),o.rotation.y=r,o.scale.setScalar(s),n.add(o),V(o,a,.05,.012,.085,0,0,0),V(o,a,.04,.03,.075,0,.012,0),jr(o,a,.048,.082,.018,0,.042,0);for(const l of[-1,1])for(const c of[-1,1])V(o,a,.01,.014,.01,l*.02,.042,c*.037);return o}function Xr(n,t,e,i,s,r,a,o=0,l=w.plaster){const c=new Ht;return c.position.set(t,i,e),c.rotation.y=o,n.add(c),V(c,l,s,a,r,0,0,0),jr(c,w.tiles,s*1.12,r*1.08,s*.3,0,a,0),V(c,w.dark,s*.18,a*.5,.004,0,0,r/2),V(c,w.dark,s*.14,a*.2,.004,s*.28,a*.5,r/2),V(c,w.dark,s*.14,a*.2,.004,-s*.28,a*.5,r/2),c}function Zi(n,t,e,i,s=.025,r={}){const{closed:a=!0,tower:o="square",tr:l=.035,th:c=i*1.35,Y:h=()=>0,skip:f=[],merlons:u=!0}=r,d=e.length;for(let y=0;y<(a?d:d-1);y++){const[_,p]=e[y],[g,S]=e[(y+1)%d];if(!f.includes(y)){const b=Math.hypot(g-_,S-p),M=-Math.atan2(S-p,g-_),P=(_+g)/2,C=(p+S)/2,A=Math.min(h(_,p),h(g,S),h(P,C))-.01;V(n,t,b,i,s,P,A,C,M);const U=Math.max(2,Math.round(b/.017));if(u)for(let v=0;v<U;v+=2){const m=(v+.5)/U-.5;V(n,t,b/U,.007,s,P+Math.cos(-M)*m*b,A+i,C+Math.sin(-M)*m*b,M)}else for(let v=0;v<4;v++){const m=(v+.5)/4-.5,E=i*.4*Math.max(0,Jt(P*9+v*1.7,C*9+y)-.25);E>.002&&V(n,t,b/4,E,s,P+Math.cos(-M)*m*b,A+i,C+Math.sin(-M)*m*b,M)}}}if(o)for(const[y,_]of e){const p=h(y,_)-.01;if(o==="round"){Ji(n,t,l,l*1.05,c,y,p,_,12);for(let g=0;g<6;g++){const S=g/6*6.283;V(n,t,l*.55,.012,l*.35,y+Math.cos(S)*l*.82,p+c,_+Math.sin(S)*l*.82,-S+Math.PI/2)}}else{V(n,t,l*2,c,l*2,y,p,_);for(const[g,S]of[[-1,-1],[1,-1],[-1,1],[1,1],[0,-1],[0,1],[-1,0],[1,0]])V(n,t,l*.36,.008,l*.36,y+g*l*.8,p+c,_+S*l*.8)}}}function dv(n,t,e,i){Ji(n,w.trunk,.03,.018,.014,t,e,i,8),lt(n,Zt.sbody||(Zt.sbody=new Ee(1,8,6)),w.white,t,e+.03,i).scale.set(.012,.01,.02),lt(n,Zt.sneck||(Zt.sneck=new Yt(1,1,1,5)),w.white,t,e+.045,i+.014).scale.set(.003,.03,.003),lt(n,Zt.sbeak||(Zt.sbeak=new pn(1,1,4)),w.orange,t,e+.058,i+.024).scale.set(.003,.018,.003),n.children[n.children.length-1].rotation.x=Math.PI/2;for(const s of[-1,1])lt(n,Zt.sneck,w.orange,t+s*.004,e+.015,i).scale.set(.0015,.02,.0015)}function jl(n,t,e,i,s,r,a={}){const{level:o=.97,rmax:l=1.2,seg:c=160,tiers:h=4,step:f=.022,amp:u=.014,material:d=w.karst,overhang:y=0,seed:_=1,mask:p=null,cap:g=.014}=a,S=[],b=[],M=[],P=h*2+1;let C=0,A=null,U=null;for(let E=0;E<=c;E++){const I=E%c/c*Math.PI*2,z=Math.cos(I),L=Math.sin(I);let F=0,D=l;for(let k=0;k<22;k++){const W=(F+D)/2;t(e+z*W,i+L*W)<o?F=W:D=W}const N=F,T=e+z*N,R=i+L*N,x=s(e+z*(N+g+.014),i+L*(N+g+.014))+.004;A!==null&&(C+=Math.hypot(T-A,R-U)),A=T,U=R,S.push(e+z*(N+g),x+.002,i+L*(N+g)),b.push(C/ke*.42,(x-r+g)/ke*.42);for(let k=0;k<P;k++){const W=k/(P-1),J=Math.floor((k+1)/2);let Y=0;for(let Q=1;Q<=J;Q++)Y+=f*2*Math.max(0,Jt(I*2.3+_+Q*5.1,Q*1.3)-.15);Y+=-y*(1-W)*2+(Jt(I*5+_,W*2.5)-.5)*u*2*Math.min(1,k)+Math.sin(I*9+_)*u*.5*Math.min(1,k);const H=Math.max(.01,N-Y),Z=x+(r-x)*(W+(k%2?(Jt(I*3+k,_)-.5)*.5/P:0));S.push(e+z*H,Z,i+L*H),b.push(C/ke*.42,(1-W)*(x-r)/ke*.42)}}const v=P+1;for(let E=0;E<c;E++)if(!(p&&!p((E+.5)/c*Math.PI*2)))for(let I=0;I<v-1;I++){const z=E*v+I,L=z+v;M.push(z,z+1,L,L,z+1,L+1)}const m=new Me;return m.setAttribute("position",new Bt(S,3)),m.setAttribute("uv",new Bt(b,2)),m.setIndex(M),m.computeVertexNormals(),lt(n,m,d)}function ti(n,t,e,i,s,r=0,a=0,o=0,l=0,c=9){const h=new Ht;h.position.set(r,a,o),h.rotation.y=l,n.add(h);const f=e/2,u=i-f,d=Math.max(.012,e*.16);for(let y=0;y<c;y++){const _=Math.PI*(y+.5)/c,p=V(h,t,d,Math.PI*f/c*1.05,s,Math.cos(_)*(f+d/2),u+Math.sin(_)*(f+d/2)-Math.PI*f/c*.52,0);p.rotation.z=_}for(const y of[-1,1])V(h,t,d*1.5,d*.7,s*1.05,y*(f+d/2),u-d*.7,0);return h}function eo(n,t,e,i=.022,s=w.wood){for(let r=0;r<t.length-1;r++){const[a,o]=t[r],[l,c]=t[r+1],h=Math.hypot(l-a,c-o),f=-Math.atan2(c-o,l-a),u=(a+l)/2,d=(o+c)/2,y=Math.max(e(a,o),e(l,c));V(n,s,.004,i,.004,a,e(a,o),o),V(n,s,h,.003,.003,u,y+i,d,f),V(n,s,h,.003,.003,u,y+i*.55,d,f)}}function fv(n,t,e,i=0,s=0,r=1){const a=new Ht;a.position.set(t,i,e),a.rotation.y=s,a.scale.setScalar(r),n.add(a),V(a,w.limestone,.034,.03,.06,0,0,0),lt(a,Zt.lbody||(Zt.lbody=new Ee(1,10,8)),w.weathered,0,.042,-.006).scale.set(.012,.012,.024),lt(a,Zt.lbody,w.weathered,0,.052,.014).scale.set(.013,.014,.012),lt(a,Zt.lbody,w.weathered,0,.056,.024).scale.set(.008,.008,.009);for(const o of[-1,1])V(a,w.weathered,.006,.006,.018,o*.008,.03,.02);return V(a,w.limestone,.04,.014,.022,0,0,.042),V(a,w.river,.03,.002,.014,0,.014,.042),a}const ai=-.3,Wa=-.5,pv=-Wa,oi={grass:new Mt(8229968),grass2:new Mt(10134366),dry:new Mt(12036464),earth:new Mt(11770476),sand:new Mt(14996386),rock:new Mt(11114368),red:new Mt(11037260),seabed:new Mt(4030342),deep:new Mt(2054768)};function xi(n,t={}){const{h:e=()=>.02,water:i=!1,tint:s,dry:r=.35,N:a=88}=t,o=(L,F)=>{const D=Math.hypot(L,F);return D>.999&&(L*=.999/D,F*=.999/D),e(L,F)},l=[],c=[],h=[],f=[],u=new Mt;for(let L=0;L<=a;L++)for(let F=0;F<=a;F++){let D=F/a*2-1,N=L/a*2-1;const T=Math.hypot(D,N);T>1&&(D/=T,N/=T);const R=o(D,N),x=.012,k=Math.hypot(o(D+x,N)-o(D-x,N),o(D,N+x)-o(D,N-x))/(2*x),W=Jt(D*3.1+7,N*3.1+3),J=Or(D*9,N*9);u.copy(oi.grass).lerp(oi.grass2,J).lerp(oi.dry,bt(.35,.7,W)*r*2).lerp(oi.earth,bt(.55,.8,Or(D*5+20,N*5))*.6),u.lerp(oi.rock,bt(.7,1.5,k)),i&&(u.lerp(oi.sand,1-bt(.004,.03,R)),R<0&&u.copy(oi.sand).lerp(oi.seabed,bt(0,-.035,R)).lerp(oi.deep,bt(-.03,-.12,R))),s&&s(D,N,R,k,u,oi),l.push(D,R,N),c.push(u.r,u.g,u.b),h.push(D,N)}for(let L=0;L<a;L++)for(let F=0;F<a;F++){const D=L*(a+1)+F;f.push(D,D+a+1,D+1,D+1,D+a+1,D+a+2)}const d=new Me;d.setAttribute("position",new Bt(l,3)),d.setAttribute("color",new Bt(c,3)),d.setAttribute("uv",new Bt(h,2)),d.setIndex(f),d.computeVertexNormals();const y=new xe(d,new Xn({vertexColors:!0,map:Re.ground(),roughness:.95}));y.userData.keep=!0,y.receiveShadow=!0,y.castShadow=!0,n.add(y);const _=[],p=[],g=[],S=[],b=120,M=new Mt(11901554),P=new Mt(9072466),C=new Mt(5222592),A=new Mt(2783376);for(let L=0;L<=b;L++){const F=L/b*Math.PI*2,D=Math.cos(F),N=Math.sin(F),T=o(D,N),R=i&&T<0,x=R?0:T;_.push(D,x,N,D,ai,N),S.push(L/b*12,x*2,L/b*12,ai*2);const k=R?C:M,W=R?A:P;p.push(k.r,k.g,k.b,W.r,W.g,W.b),L<b&&g.push(L*2,L*2+2,L*2+1,L*2+1,L*2+2,L*2+3)}const U=new Me;U.setAttribute("position",new Bt(_,3)),U.setAttribute("color",new Bt(p,3)),U.setAttribute("uv",new Bt(S,2)),U.setIndex(g),U.computeVertexNormals();const v=new xe(U,new Xn({vertexColors:!0,map:Re.strata(),roughness:.9,side:De}));if(v.userData.keep=!0,n.add(v),i){const L=new xe(new xs(.997,72),w.water);L.rotation.x=-Math.PI/2,L.position.y=0,L.userData.keep=!0,L.renderOrder=1,n.add(L)}const m=[[1,ai],[1.035,ai],[1.045,ai-.02],[1.03,ai-.04]].map(([L,F])=>new ot(L,F)),E=new xe(new gi(m.reverse(),72),w.bronze);E.userData.keep=!0,n.add(E);const I=[[1.03,ai-.04],[1.07,ai-.06],[1.085,ai-.12],[1.07,ai-.15],[1.1,Wa+.02],[1.1,Wa],[0,Wa]].map(([L,F])=>new ot(L,F)),z=new xe(new gi(I.reverse(),72),new Xn({color:4861724,roughness:.5}));return z.userData.keep=!0,z.castShadow=!0,n.add(z),o}function mv(n){n.updateMatrixWorld(!0);const t=new oe().copy(n.matrixWorld).invert(),e=new Map,i=[];n.traverse(r=>{if(!r.isMesh)return;if(r.userData.keep){i.push(r);return}let a=r.geometry.clone();a.index&&(a=a.toNonIndexed());for(const o of Object.keys(a.attributes))["position","normal","uv"].includes(o)||a.deleteAttribute(o);a.applyMatrix4(new oe().multiplyMatrices(t,r.matrixWorld)),(e.get(r.material)||e.set(r.material,[]).get(r.material)).push(a)});const s=new Ht;for(const r of i)r.applyMatrix4(new oe),s.add(r);for(const[r,a]of e){const o=new xe(Rr(a,!1),r);o.castShadow=!r.transparent,o.receiveShadow=!0,s.add(o)}return s}function gv(n){const t=(v,m)=>ki(v,m,0,.7,.44,.23),e=(v,m)=>ki(v,m,-.6,.12,.27,.22,.3),i=[[-.62,.08,.1,.08],[-.52,.18,.07,.06],[-.7,.2,.06,.07]],s=(v,m)=>i.some(([E,I,z,L])=>Math.abs(v-E)<z/2&&Math.abs(m-I)<L/2),r=xi(n,{water:!0,h:(v,m)=>{let E=.04+Jt(v*2+5,m*2)*.018-bt(.5,.74,m+Jt(v*3,1)*.06)*.17;E=Te(-.06,E,bt(.8,1.08,t(v,m)));const I=e(v,m);return I<1.2&&(E=Math.max(E,.04+.17*(1-bt(.62,1.12,I))+Jt(v*9,m*9)*.006)),s(v,m)&&(E-=.032),Math.abs(v)<.24&&m<.5&&(E=Math.min(E,.034)),I<1.1&&v>-.44&&Math.abs(m-.1)<.035&&(E=Math.min(E,.06+Math.floor((-.36-v)/.03+4)*.028)),E},tint:(v,m,E,I,z,L)=>{Math.abs(v)<.24&&m<.5&&E>.01&&z.lerp(L.earth,.75);const F=e(v,m);F<1.15&&F>.5&&z.lerp(L.earth,.6),(s(v,m)||F<1.1&&v>-.44&&Math.abs(m-.1)<.035)&&z.copy(L.earth).multiplyScalar(.8),m>.38&&E>0&&E<.05&&z.lerp(L.sand,.8),Math.abs(v-.52-.05*Math.sin(m*4))<.016&&m<.45&&z.lerp(L.sand,.7),t(v,m)<1&&E<0&&z.lerp(new Mt(5222046),.35)}}),a=.15,o=19,l=.07,c=-.84,h=.29,f=.0175,u=.047,d=c+(o-1)*l/2,y=o*l+.04;V(n,w.paving,2*a-.05,.012,y,0,u-.008,d),V(n,w.grey,.012,.014,y,0,u-.008,d);for(const v of[-1,1]){V(n,w.limestone,.09,.022,y,v*(a+.02),u-.008,d);const m=[.1,.16,.07,.2,.12,.09,.15];let E=c+.03;m.forEach((I,z)=>{(z+(v>0?1:0))%3&&V(n,w.rubble,.016,.02+z*37%5*.009,I,v*(a+.075),u,E+I/2),z%2&&V(n,w.rubble,.07,.018+z%3*.008,.014,v*(a+.11),u,E),E+=I+.035})}const _=[1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,0,1,1,0],p=[1,1,0,0,1,1,1,0,1,1,0,0,1,1,1,0,0,1,0],g=new Set(["-1:4","-1:12","1:5","1:13","-1:17"]),S=u+.014;for(const[v,m]of[[-1,_],[1,p]])for(let E=0;E<o;E++){const I=c+E*l,z=m[E],L=g.has(v+":"+E),F=z&&(v<0?E%2===0||E<9:E%2===1);if(ze(n,v*a,I,z?L?h*.9:h:.03+E*7%4*.02,{y:S,r:f,broken:!z||L,bracket:F?-v:0,seed:E+v}),F&&(E*5+(v>0?2:0))%6===0){const D=S+f*.7+(h-f*3)*.56+f*.5,N=v*a-v*f*1.35;V(n,w.weathered,.012,.016,.01,N,D,I),lt(n,new Ee(.0065,8,6),w.weathered,N,D+.022,I)}if(!z&&E%3===0){const D=2+(E*7+(v>0?1:0))%4,N=(E*13%9-4)*.1;for(let T=0;T<D;T++){const R=a+.15+T*(.05+T*E%3*.008),x=v*R,k=I+Math.sin(N)*(R-a)+((T*5+E)%3-1)*.008;if(Math.hypot(x,k)>.9||e(x,k)<1.25)continue;const W=lt(n,new Yt(f*.95,f*.95,.044,12),w.shaft,x,r(x,k)+f*.9,k);T===D-1&&E%2?W.position.y=r(x,k)+.022:(W.rotation.z=Math.PI/2,W.rotation.y=N*v+.12*(T-1.5))}if(E%2===0){const T=lt(n,new Yt(f*1.3,f*.9,f*2.2,10),w.capital,v*(a+.15+D*.056),r(v*(a+.3),I)+f,I+Math.sin(N)*.2);T.rotation.z=Math.PI/2*v}}}for(const[v,m,E]of[[-1,0,2],[-1,5,7],[1,4,6]])Ks(n,v*a,c+m*l,v*a,c+E*l,S+h,f*2.7,.022,w.capital);const b=V(n,w.capital,.11,.022,.04,-a+.085,u+.004,c+9*l,.5);b.rotation.z=.12,lt(n,new Yt(f*1.3,f*.9,f*2.2,10),w.capital,a-.06,u+.02,c+7.3*l).rotation.set(1.2,.4,0),Qe(n,-a-.05,c+15*l,4,.08,.016,w.weathered,4,r),Qe(n,a+.06,c+10.5*l,5,.1,.016,w.weathered,6,r);for(let v=0;v<4;v++)V(n,w.limestone,.2-v*.012,.012,.026,0,u-.012-v*.012,c+y-.012+v*.026);const P=.52;for(let v=0;v<9;v++){const m=Math.PI*(v+.5)/9,E=Math.cos(m)*.44,I=P+.065-Math.sin(m)*.065;V(n,w.limestone,.105,.04,.04,E,-.016,I,m-Math.PI/2),V(n,w.concrete,.105,.006,.05,E,.022,I,m-Math.PI/2)}const C=(v,m)=>[v*(.44+.015*Math.sin(m*2.4)-.3*bt(.5,1,m)),P+.06+m*.34-.06*bt(.62,1,m)];for(const v of[-1,1])for(let E=0;E<18;E++){const[I,z]=C(v,E/17),[L,F]=C(v,(E+1)/17),D=-Math.atan2(F-z,L-I),N=v>0&&(E>5&&E<10||E===13||E===14);if(!(Math.hypot(I,z)>.945)){if(N){E%2&&lt(n,new Ms(.022,0),w.concrete,I+.01*Math.sin(E),-.012,z);continue}V(n,w.limestone,.05,.04,.07,I,-.018,z,D),V(n,w.concrete,.052,.006,.062,I,.022,z,D)}}{const[v,m]=C(-1,1);Ji(n,w.limestone,.022,.028,.06,v,.022,m,10)}const A=or(w.sail,.12);A.position.set(.1,0,.72),A.rotation.y=.5,n.add(A);const U=or(w.white,.075);U.position.set(-.2,0,.66),U.rotation.y=.2,n.add(U),lt(n,new pn(.035,.03,8),w.plaster,-.5,r(-.5,.05)+.012,.05);for(const[v,m]of[[-1,-1],[1,-1],[-1,1],[1,1]])V(n,w.wood,.004,.05,.004,-.62+v*.05,r(-.62,.08)+.03,.08+m*.04);V(n,w.white,.11,.003,.09,-.62,r(-.62,.08)+.08,.08),V(n,w.wood,.006,.05,.003,-.52,r(-.52,.18),.2).rotation.x=.3,eo(n,[[-.32,-.06],[-.3,.1],[-.33,.26]],r,.018);for(let v=0;v<5;v++)for(let m=0;m<6;m++){const E=-.86+v*.1,I=-.66+m*.105;Math.hypot(E,I)<.9&&e(E,I)>1.35&&Ne(n,"citrus",E,I,1.25,r(E,I),v*7+m)}for(let v=0;v<4;v++)for(let m=0;m<7;m++){const E=.62+v*.095,I=-.5+m*.105;Math.hypot(E,I)<.9&&Ne(n,"citrus",E,I,1.25,r(E,I),v*5+m*3)}for(const[v,m]of[[-.36,-.86],[.36,-.86],[.5,.36],[.47,-.2]])Ne(n,"cypress",v,m,1.2,r(v,m),v*9);for(const[v,m]of[[.42,.47],[.72,.36]])Ne(n,"palm",v,m,1.1,r(v,m),m*5);Xr(n,-.5,-.76,r(-.5,-.76)-.004,.08,.09,.05,.2),Xr(n,.5,-.78,r(.5,-.78)-.004,.075,.085,.048,-.3),Qe(n,0,c-.045,6,.3,.02,w.limestone,11,r);for(let v=0;v<22;v++){const m=-.9+v*.377%1*1.8,E=-.3+v*.619%1*.72;Math.hypot(m,E)<.9&&Math.abs(m)>.3&&e(m,E)>1.3&&r(m,E)>.03&&!(m>.56&&E<.2)&&!(m<-.36&&E<0)&&Ne(n,v%3?"shrub":"reed",m,E,.9,r(m,E),v)}for(const[v,m,E]of[[.02,-.62,0],[-.03,-.57,1],[.05,-.1,2],[0,.3,3],[-.04,.34,4],[-.6,0,5],[.06,.5,1]])mn(n,v,m,r(v,m)+(Math.abs(v)<.12&&m<.48?.008:.002),E)}function _v(n){const t={x:-.06,z:-.18,r0:.1,r1:.43,rows:14,y:.09},e=(t.r1-t.r0)/t.rows,i=e*.62,s=t.rows*i,r={x:-.68,z:.26},a=(P,C)=>ki(P,C,.28,.74,.36,.17,-.2)+(Jt(P*7,C*7)-.5)*.3,o=xi(n,{water:!0,h:(P,C)=>{let A=.05+Jt(P*2.3,C*2.3+4)*.02;A+=Oi(P,C,-.06,-.6,.5,.4)+Oi(P,C,.66,-.52,.3,.13),A=Te(A,.13,1-bt(.16,.28,Math.hypot(P-r.x,C-r.z)));{const m=Math.max(Math.abs(P-.52)/.2,Math.abs(C-.06)/.17);m<1.4&&(A=Te(.066,A,bt(1,1.4,m)))}const U=.46+.09*Math.sin(P*4.2+.8)+Jt(P*4,2)*.05;A-=bt(U-.06,U+.16,C)*.2,A=Math.max(A,.045*(1-bt(.5,1.1,a(P,C)))-.012),A=Math.max(A,.02-ki(P,C,.24,.56,.11,.13)*.03);const v=Math.hypot(P-t.x,C-t.z);return v<t.r1?A=Math.min(A,t.y-.012+Math.max(0,(v-t.r0)/(t.r1-t.r0))*s):v<t.r1+.22&&(C<t.z+.05||P<t.x)&&(A=Math.min(A,Te(t.y+s-.012,A,bt(t.r1,t.r1+.22,v)))),C>t.z&&C<t.z+.34&&Math.abs(P-t.x)<.5&&(A=Math.min(A,Te(t.y-.012,A,Math.max(bt(.42,.5,Math.abs(P-t.x)),bt(t.z+.26,t.z+.34,C))))),A},tint:(P,C,A,U,v,m)=>{Math.abs(C-.31-.04*Math.sin(P*3))<.026&&A>.012&&v.copy(m.sand).multiplyScalar(.95),(a(P,C)<1.2||ki(P,C,.24,.56,.13,.16)<1)&&A>0&&v.lerp(m.sand,.8),P>.36&&C<-.36&&Math.abs(C+.5-.1*(P-.4))<.02&&v.lerp(m.earth,.8)}});to(n,{...t,arc:Math.PI*1.1,stairs:6,material:w.limestone});for(let P=0;P<16;P++){const C=Math.PI*(-.05+1.1*(P+.5)/16),A=t.r1+e*.3;(P%3===0||P===7)&&V(n,w.limestone,.05+P%4*.02,.01+P*13%5*.01,.03,t.x+Math.cos(C)*A,t.y+s,t.z-Math.sin(C)*A,C+Math.PI/2)}const l=t.z+t.r0+.05,c=.66;V(n,w.limestone,c,.03,.08,t.x,t.y-.012,l+.04),Ue(n,w.limestone,c,.032,.012,[-.24,-.12,0,.12,.24].map(P=>({x:P,w:.035,h:.026})),t.x,t.y-.006,l),Ue(n,w.limestone,c+.04,.085,.03,[{x:-.18,w:.05,h:.065},{x:0,w:.07,h:.075},{x:.18,w:.05,h:.065}],t.x,t.y-.012,l+.1),V(n,w.limestone,.16,.05,.03,t.x-.27,t.y+.073,l+.1),V(n,w.limestone,.07,.03,.03,t.x-.31,t.y+.123,l+.1);for(const P of[-1,1])V(n,w.limestone,.04,.1,.13,t.x+P*(c/2+.04),t.y-.012,l+.05),P<0&&V(n,w.limestone,.1,.045,.03,t.x+P*(c/2+.1),t.y-.012,l+.1);for(let P=0;P<6;P++)ze(n,t.x-.26+P*.104,l+.075,P===4?.13:.03+P%2*.025,{y:t.y+.018,r:.012,broken:!0,seed:P});Ii(n,t.x+.12,l+.2,4,.012,4,o(t.x+.12,l+.2)),Qe(n,t.x-.2,l+.2,6,.2,.018,w.limestone,3,o);const h=.52,f=.06,u=o(h,f)-.004;V(n,w.paving,.34,.01,.28,h,u,f);for(const[P,C,A,U,v]of[[0,-.14,.36,.02,.085],[.07,.14,.2,.02,.04],[-.17,-.02,.02,.24,.06],[.17,0,.02,.28,.1]])V(n,w.limestone,A,v,U,h+P,u,f+C);const d=f-.045;V(n,w.honey,.2,.085,.014,h,u,d-.05),V(n,w.honey,.2,.04,.014,h,u,d+.05),Un(n,w.honey,.05,.11,h+.1,u,d,-Math.PI/2),Un(n,w.honey,.05,.07,h-.1,u,d,Math.PI/2),lt(n,new On(.19,.085),w.mosaic,h,u+.012,d).rotation.x=-Math.PI/2;for(let P=0;P<4;P++)for(const C of[-1,1])ze(n,h-.06+P*.04,d+C*.022,(P+(C>0?1:0))%3===0?.06:.018,{y:u+.012,r:.005,broken:!0,shaft:w.weathered});Ji(n,w.marble,.03,.032,.02,h+.06,u+.01,f+.08,14);for(let P=0;P<5;P++)ze(n,h+.06+Math.cos(P*1.26)*.024,f+.08+Math.sin(P*1.26)*.024,P<2?.07:.02,{y:u+.03,r:.005,broken:P>=2});for(const P of[-1,1])fv(n,h-.09+P*.04,f+.17,u,0,1.15);const y=-.32,_=.16,p=o(y,_)-.008,g=new Ht;g.position.set(y,p,_),g.rotation.y=.12,n.add(g),Ue(g,w.brick,.3,.17,.03,[{x:-.08,w:.07,h:.12},{x:.06,w:.07,h:.12}],0,0,-.08),ti(g,w.brick,.07,.12,.034,-.08,0,-.08,0,9),ti(g,w.brick,.07,.12,.034,.06,0,-.08,0,9),li(g,w.brickDS,.12,.16,.1,-.08,0,0,0,0),V(g,w.brick,.03,.13,.16,.14,0,0),V(g,w.brick,.03,.07,.1,.02,0,.03),Un(g,w.brick,.055,.1,.07,0,.09,Math.PI),Qe(g,.06,.12,7,.14,.02,w.brick,9);const S=new Ht;S.position.set(r.x,.122,r.z),S.rotation.y=.5,n.add(S),V(S,w.rubble,.215,.14,.355,0,-.14,0),V(S,w.limestone,.2,.03,.34,0,0,0),V(S,w.marble,.17,.018,.31,0,.03,0);for(let P=0;P<6;P++)for(let C=0;C<12;C++){if(P>0&&P<5&&C>0&&C<11)continue;const A=-.075+P*.03,U=-.143+C*.026,v=P*12+C;C===11&&(P===1||P===2)?ze(S,A,U,.18,{y:.048,r:.0125}):v%3===0&&ze(S,A,U,.02+v%4*.012,{y:.048,r:.0125,broken:!0,seed:v})}Ks(S,-.045,.143,-.015,.143,.228,.034,.022,w.capital),Ii(n,r.x+.14,r.z+.02,4,.0125,7,o(r.x+.14,r.z+.02));for(let P=0;P<2;P++){const C=.58+P*.215,A=-.2-P*.045,U=o(C,A)-.02;Ue(n,w.honey,.24,.2-P*.03,.035,[-.078,0,.078].map(v=>({x:v,w:.056,h:.15-P*.03})),C,U,A,.2)}V(n,w.honey,.035,.12,.035,.44,o(.44,-.17)-.02,-.168,.2);const b=o(.28,.74)-.008;V(n,w.rubble,.4,.035,.014,.28,b,.65,.2),V(n,w.rubble,.014,.045,.14,.5,b,.68,.2),V(n,w.rubble,.16,.03,.014,.12,b,.8,.2),li(n,w.rubbleDS,.06,.1,.03,.2,b,.76,1.3,1),V(n,w.rubble,.1,.05,.08,.38,b,.78,.4),V(n,w.rubble,.07,.03,.05,.3,b,.7,.2);for(let P=0;P<7;P++){const C=.4+P*.3;ze(n,.3+Math.cos(C)*.1,.82-Math.sin(C)*.05,P%3===1?.07:.025,{y:b,r:.006,broken:!0,shaft:w.weathered})}for(let P=0;P<8;P++)V(n,w.concrete,.042,.03,.035,0-P*.038,-.02,.83-P*.012,.3);for(let P=0;P<9;P++){const C=.42+P%5*.1,A=P<5?-1:1,U=-.5+.1*(C-.4)+A*.075;if(Math.hypot(C,U)>.9)continue;const v=new Ht;v.position.set(C,o(C,U)-.01,U),v.rotation.y=A>0?Math.PI:0,n.add(v);const m=.058+P%3*.008;V(v,w.limestone,m+.012,.012,m*1.3+.012,0,0,0),V(v,w.limestone,m,.055,m*1.25,0,.012,0),jr(v,w.limestone,m*1.1,m*1.32,.022,0,.067,0),V(v,w.dark,m*.3,.032,.004,0,.012,m*.63)}for(const[P,C,A]of[[.47,0,.2],[.67,.005,-.3],[.86,-0,.5]]){const U=-.5+.1*(P-.4)+C;Math.hypot(P,U)<.9&&lr(n,P,U,o(P,U)-.004,1.05,A+1.5)}for(let P=0;P<3;P++)for(let C=0;C<3;C++){const A=-.62+P*.075,U=-.02+C*.075;Ne(n,"citrus",A,U,1.1,o(A,U),P+C*5)}gn(n,["olive","olive","shrub","oak"],22,[-.95,-.95,.95,0],o,5,.75,1.15,(P,C)=>Math.hypot(P-t.x,C-t.z)>t.r1+.09&&!(P>.36&&C<-.36)&&o(P,C)>.03&&!(Math.abs(P+.55)<.14&&C>-.1)),gn(n,"shrub",9,[-.95,.2,.95,.9],o,8,.6,1,(P,C)=>o(P,C)>.02&&Math.hypot(P-y,C-_)>.24&&Math.hypot(P-r.x,C-r.z)>.2&&Math.abs(C-.31)>.05&&!(Math.abs(P-h)<.22&&C<.26));const M=(P,C)=>[t.x+Math.cos(C)*(t.r0+(P+.5)*e),t.z-Math.sin(C)*(t.r0+(P+.5)*e),t.y+(P+1)*i];for(const[P,C,A]of[[3,1.2,0],[3,1.3,2],[8,2.1,3],[6,.7,4]]){const[U,v,m]=M(P,C);mn(n,U,v,m,A)}for(const[P,C,A]of[[t.x,t.z+.02,1],[t.x+.05,t.z+.05,5],[.2,.31,0],[.45,.2,4],[r.x+.02,r.z+.2,5],[.28,.62,2]])mn(n,P,C,Math.max(o(P,C),(t.y-.012>o(P,C),o(P,C)))+.004,A)}function vv(n){const s=(H,Z)=>(H-.08)*Math.sin(-.35)+(Z- -.08)*Math.cos(-.35),r=(H,Z)=>(H-.08)*Math.cos(-.35)-(Z- -.08)*Math.sin(-.35),l=(H,Z,Q=0)=>Math.abs(r(H,Z))<.15+Q&&Math.abs(s(H,Z))<.38+Q,c=H=>.66+.05*Math.sin(H*3.2),h=(H,Z)=>H-c(Z),y=(H,Z)=>Math.hypot(H+.62,Z-.05)<.3,_=xi(n,{water:!0,dry:.5,h:(H,Z)=>{let Q=.1+Jt(H*2+1,Z*2)*.012;return Q-=(1-bt(.156,.18,Math.abs(r(H,Z))))*(1-bt(.386,.41000000000000003,Math.abs(s(H,Z))))*.092,Q-=(1-bt(.07,.2,Math.abs(h(H,Z))))*.125,Q},tint:(H,Z,Q,ht,vt,mt)=>{l(H,Z,.07)&&!l(H,Z)&&vt.copy(mt.sand).lerp(mt.rock,.4),l(H,Z)&&vt.lerp(mt.earth,.85);const Gt=-.34+(Z-.5)*Math.tan(.18)-bt(.34,0,Z)*.16;Math.abs(H-Gt)<.045&&Z>.02&&Q>.05&&vt.lerp(mt.sand,.85),y(H,Z)&&vt.lerp(mt.earth,.55).lerp(mt.rock,.25),Q>0&&Q<.03&&vt.lerp(mt.sand,.6)}}),p=new Ht;p.position.set(-.34,_(-.34,.5)-.006,.5),p.rotation.y=.18,n.add(p);const g=.42,S=.3,b=.22,M=.19,P=.235;Ue(p,w.limestone,g,S,b,[{x:0,w:M,h:P}],0,0,0);for(const H of[-1,1])ti(p,w.limestone,M,P,.012,0,0,H*(b/2+.004),0,11);for(const H of[-1,1])V(p,w.limestone,.125,.014,b+.02,H*(g/2-.058),P-M/2-.014,0),V(p,w.limestone,.13,.03,b+.03,H*(g/2-.058),0,0);[[-.13,.03,.17],[.03,.045,.2],[.16,.022,.1],[-.04,.02,.12]].forEach(([H,Z,Q],ht)=>V(p,w.limestone,Q,Z,b-.012-ht%2*.03,H,ht===3?S+.03:S,0,(ht-1.5)*.02));for(const H of[-1,1])[.16,.09].forEach((Z,Q)=>V(p,w.limestone,.075,Z,.12,H*(g/2+.037+Q*.075),0,0));const C=new Ht;C.position.set(.08,.014,-.08),C.rotation.y=-.35,n.add(C),V(C,w.basalt,.17,.012,.38*2-.02,0,0,0),V(C,w.basalt,.1,.006,.38*2-.02,0,.012,0),V(C,w.grey,.016,.004,.38*2-.02,0,.018,0);for(const H of[-1,1]){V(C,w.limestone,.03,.02,.38*2-.02,H*.1,0,0);for(let Z=0;Z<9;Z++){const Q=H<0&&Z===2||H>0&&Z===6;ze(C,H*.1,-.38+.06+Z*.09,Q?.11:.018+Z%3*.012,{y:.02,r:.013,broken:!0,shaft:w.weathered,cap:w.weathered,seed:Z})}lt(C,new On(.028,.26),w.mosaic,H*.132,.004,H*.1).rotation.x=-Math.PI/2,V(C,w.rubble,.056,.102,.38*2+.09,H*(.15+.017),-.008,0),V(C,w.limestone,.062,.006,.38*2+.096,H*(.15+.017),.094,0)}for(const H of[-1,1])V(C,w.rubble,.15*2,.102,.056,0,-.008,H*(.38+.017)),V(C,w.limestone,.15*2+.09,.006,.062,0,.094,H*(.38+.017));lt(C,new Yt(.02,.013,.026,10),w.weathered,.06,.03,.2).rotation.set(1.3,.3,0),Ii(C,-.05,-.2,3,.013,3,.014);for(let H=0;H<7;H++)V(C,w.limestone,.05,.008,.016,-.15+.03,.094-.006-H*.012,.38-.03-H*.016);const U=[];for(const[H,Z]of[[-1,-1],[1,-1],[1,1],[-1,1],[-1,-1]]){const Q=H*.205,ht=Z*(.38+.055);U.push([.08+Q*Math.cos(-.35)+ht*Math.sin(-.35),-.08-Q*Math.sin(-.35)+ht*Math.cos(-.35)])}for(let H=0;H<4;H++){const[Z,Q]=U[H],[ht,vt]=U[H+1],mt=6,Gt=[];for(let st=0;st<=mt;st++)Gt.push([Z+(ht-Z)*st/mt,Q+(vt-Q)*st/mt]);eo(n,Gt,()=>.112,.02,w.dark)}const v=-.02,m=-.66,E=_(v,m)-.01,I=new Ht;I.position.set(v,E,m),I.rotation.y=.1,n.add(I);const z=(H,Z,Q,ht,vt=.1)=>{V(I,w.concrete,Z-H,ht,vt,(H+Z)/2,0,Q,.012*Math.sin(H*40));const mt=Math.round((Z-H)/.05);for(let Gt=0;Gt<mt;Gt++){const st=H+(Gt+.5)*(Z-H)/mt,ft=lt(I,new Ms(.03,0),w.concrete,st,ht+.004,Q+Math.sin(Gt*2.3)*.02);ft.scale.set(1.2,.35+Gt%3*.12,1.5),ft.rotation.y=Gt}},L=(H,Z,Q,ht)=>[.75,.5,.28,.12].forEach((vt,mt)=>V(I,w.concrete,.035,ht*vt,.1-mt*.012,H+Z*(mt+.5)*.035,0,Q));z(-.42,.36,-.14,.2),z(-.42,-.02,.14,.2),L(-.02,1,.14,.2),L(.2,-1,.14,.19),z(.2,.36,.14,.19),z(-.47,-.37,0,.2,.38),V(I,w.concrete,.1,.19,.16,.36,0,-.07),[.12,.06].forEach((H,Z)=>V(I,w.concrete,.09-Z*.02,H,.05,.36,0,.03+Z*.05)),V(I,w.concrete,.36,.09,.12,-.1,0,0),V(I,w.concrete,.14,.13,.1,.18,0,0),V(I,w.limestone,.36,.045,.012,-.22,0,.196),V(I,w.limestone,.2,.022,.012,-.28,.045,.196),Qe(I,.11,.17,6,.1,.024,w.concrete,5),Qe(I,-.3,.23,3,.06,.02,w.marble,8);for(const[H,Z,Q]of[[-.3,-.14,.215],[.05,-.14,.215],[.33,.14,.205],[-.2,.14,.215],[-.42,.05,.215],[.2,-.14,.215]])Ne(I,"shrub",H,Z,1,Q,H*9);const F=-.71,D=-.37,N=_(F,D)-.01,T=new Ht;T.position.set(F,N,D),T.rotation.y=.5,n.add(T),Ue(T,w.brick,.34,.26,.09,[{x:-.03,w:.11,h:.16}],0,0,0);for(const H of[-1,1])ti(T,w.brick,.11,.16,.01,-.03,0,H*.049,0,9);[[-.13,.07,.09],[-.045,.055,.07],[.02,.018,.06],[.09,.034,.08]].forEach(([H,Z,Q])=>V(T,w.brick,Q,Z,.085,H,.26,0)),[[.02,.2],[.04,.215],[.065,.225]].forEach(([H,Z])=>V(T,w.brick,.2,.016,.03,-.03,Z,.045+H)),V(T,w.brick,.07,.15,.16,.2,0,.06),Qe(T,0,.14,5,.2,.024,w.brick,3);const R=-.6,x=.08,k=_(R,x);V(n,w.paving,.17,.006,.15,R,k-.002,x);for(const[H,Z,Q,ht]of[[0,-.075,.17,.012],[-.085,0,.012,.15]])V(n,w.limestone,Q,.03,ht,R+H,k,x+Z);Ji(n,w.limestone,.036,.04,.035,R,k,x,14),lt(n,new xs(.027,14),w.dark,R,k+.036,x).rotation.x=-Math.PI/2;for(const H of[-1,1])V(n,w.wood,.007,.075,.007,R+H*.042,k,x);V(n,w.wood,.1,.007,.012,R,k+.075,x),Ji(n,w.wood,.008,.008,.05,R,k+.05,x,6).rotation.z=Math.PI/2,[[-.8,.12,.2,.09,.11,.11],[-.74,-.06,.2,.08,.1,.095],[-.66,-.06,.2,.075,.1,.12],[-.76,.3,.1,.1,.09,.09],[-.5,-.14,-.4,.08,.095,.1],[-.86,-.24,.3,.085,.1,.085]].forEach(([H,Z,Q,ht,vt,mt])=>{const Gt=_(H,Z)-.005,st=Xr(n,H,Z,Gt,ht,vt,mt,Q);V(st,w.honey,ht+.004,mt*.42,vt+.004,0,0,0),V(st,w.dark,ht*.2,mt*.3,.004,ht*.2,0,vt/2+.003),V(st,w.wood,ht*.9,mt*.4,.03,0,mt*.5,vt/2+.014);for(const ft of[-.25,0,.25])V(st,w.dark,ht*.16,mt*.18,.003,ft*ht,mt*.62,vt/2+.03)});const W=.2,J=c(W);Ue(n,w.limestone,.32,.075,.07,[{x:-.095,w:.066,h:.052},{x:0,w:.082,h:.06},{x:.095,w:.066,h:.052}],J,-.01,W,0),V(n,w.paving,.32,.008,.07,J,.065,W);for(const H of[-1,1])V(n,w.limestone,.32,.014,.008,J,.073,W+H*.033);for(const H of[-.048,.048])for(const Z of[-1,1]){const Q=lt(n,new Yt(.016,.018,.05,3),w.limestone,J+H,.014,W+Z*.045);Q.rotation.y=Z>0?Math.PI/2:-Math.PI/2}const Y=or(w.purple,.19);Y.position.set(c(-.25),0,-.25),Y.rotation.y=Math.PI/2+.12,n.add(Y),V(n,w.gold,.035,.022,.045,c(-.14)+.005,.022,-.135);for(let H=0;H<12;H++){const Z=-.85+H*.15,Q=c(Z)+(H%2?.17:-.17);Math.hypot(Q,Z)<.93&&Math.abs(Z-W)>.08&&Ne(n,"reed",Q,Z,1.2,_(Q,Z),H)}for(let H=0;H<3;H++)for(let Z=0;Z<3;Z++){const Q=.26+H*.1+Z%2*.02,ht=.5+Z*.1+H%2*.02;Math.hypot(Q,ht)<.9&&Math.abs(h(Q,ht))>.2&&Ne(n,"citrus",Q,ht,1.25,_(Q,ht),H*3+Z)}for(const[H,Z]of[[.46,.3],[.9,-.05],[-.83,.38],[.46,-.36],[.02,.84]])Ne(n,"palm",H,Z,1.15,_(H,Z),H*7);for(const[H,Z]of[[-.5,-.82],[-.92,-.05]])Ne(n,"cypress",H,Z,1.1,_(H,Z),Z*3);gn(n,["olive","shrub","oak"],9,[-.95,-.95,.5,.95],_,21,.8,1.1,(H,Z)=>!l(H,Z,.1)&&Math.hypot(H-v,Z-m)>.5&&Math.hypot(H- -.34,Z-.5)>.34&&!y(H,Z)&&Math.hypot(H-F,Z-D)>.25&&!(H>.12&&Z>.42)&&!(Math.abs(H- -.34)<.2&&Z>.3));for(const[H,Z,Q]of[[.06,-.02,0],[.12,-.2,2],[.02,.14,4],[-.34-.01,.5+.02,3],[-.34+.05,.5+.2,1],[-.34-.1,.5-.22,0],[-.34-.02,.5+.34,2],[R+.06,x+.03,4],[F-.02,D+.02,5],[.2,-.46,5]])mn(n,H,Z,_(H,Z)+(l(H,Z)?.03:.002),Q);mn(n,J,W,.073,1)}function yv(n){const t=T=>-.62+.06*Math.sin(T*2.4+.5),s=(T,R)=>ki(T,R,-.5,.08,.28,.14,-.12),r=(T,R)=>bt(.12,.18,R)*bt(.25,.17,Math.abs(T- -.5)),a={x:-.13,z:-.1,w:.22,d:.115,depth:.1,top:.128},o=(T,R)=>Math.max(Math.abs(T-a.x)/(a.w/2),Math.abs(R-a.z)/(a.d/2)),l=xi(n,{water:!0,h:(T,R)=>{const x=s(T,R);let k=.07+Jt(T*2+9,R*2)*.02+Oi(T,R,a.x,a.z,.2,.056);return k+=.27*(1-bt(.85,1.55,x))*bt(.99,.84,Math.hypot(T,R)),k-=.022*bt(1,1.08,x)*bt(1.22,1.12,x),k+=.05*bt(1.5,1.44,x)*bt(1.2,1.36,x)*r(T,R),k-=(1-bt(.11,.23,Math.abs(R-t(T))))*.15,o(T,R)<1.02&&(k=Math.min(k,a.top-a.depth)),k},tint:(T,R,x,k,W,J)=>{const Y=s(T,R);Math.abs(T-.3)<.02&&R>-.95&&R<.9&&x>.02&&W.lerp(J.sand,.7),Y<1.22&&Y>.98?W.copy(J.rock).lerp(J.earth,.3):Y<1.55&&k>.5&&W.lerp(J.rock,.5),x>0&&x<.03&&W.lerp(J.sand,.5)}}),c=.2,h=.28,f=l(c,h)-.012,u=new Ht;u.position.set(c,f,h),u.rotation.y=.08,n.add(u);const d=.64,y=.36,_=.11;V(u,w.limestone,d+.08,.04,y+.08,0,0,0),V(u,w.limestone,d+.045,.04,y+.045,0,.04,0),V(u,w.marble,d+.015,.03,y+.015,0,.08,0);for(let T=0;T<5;T++)V(u,w.limestone,.028,_-T*.022,y*.62,d/2+.03+T*.028,0,0);for(const[T,R,x,k,W]of[[-.04,-.105,.4,.02,.07],[-.08,.105,.3,.02,.05],[-.24,0,.02,.23,.06],[.1,0,.02,.1,.045]])V(u,w.limestone,x,W,k,T,_,R);const p=d/13,g=y/7;for(let T=0;T<14;T++)for(let R=0;R<8;R++){if(T>0&&T<13&&R>0&&R<7)continue;const x=-d/2+T*p,k=-y/2+R*g,W=T*8+R;R===7&&T===4?(ze(u,x,k,.31,{y:_,r:.024}),dv(u,x,_+.315,k)):R===7&&(T===3||T===5||T===6)?ze(u,x,k,[.13,.16,.09][T===3?0:T-4],{y:_,r:.024,broken:!0,seed:T}):W%9===0?ze(u,x,k,[.03,.075,.05,.11][W/9%4],{y:_,r:.024,broken:!0,seed:W}):W%5!==1&&V(u,w.weathered,.058,.012,.058,x,_,k)}V(u,w.capital,.11,.035,.05,-d/2+5.5*p,_,y/2-.06,.3),Ii(u,.02,.32,5,.024,4,0),Ii(u,-.32,.3,3,.024,6,0),Ii(u,.1,-.03,2,.024,9,_),Qe(u,.12,0,6,.3,.026,w.weathered,3,()=>_);const S=new Ht;S.position.set(-.2,.03,.31),S.rotation.set(1.25,.2,.3),u.add(S),lt(S,new Yt(.03,.021,.045,10),w.capital,0,0,0),V(S,w.capital,.066,.008,.066,0,.022,0);const b=[],M=11;for(let T=0;T<M;T++){const R=T/M*6.283+.2,x=Math.cos(-.12),k=Math.sin(-.12),W=Math.cos(R)*.225,J=Math.sin(R)*.085;b.push([-.5+W*x-J*k,.08+W*k+J*x])}Zi(n,w.limestone,b,.055,.018,{tower:!1,Y:l,skip:[3,8]}),b.forEach(([T,R],x)=>{const k=l(T,R)-.01,W=[.085,.07,.095,.04,.08,.1,.075,.09,.045,.085,.07][x];if(x%4===1){if(V(n,w.limestone,.042,W,.042,T,k,R,-.12),W>.06)for(const[J,Y]of[[-1,-1],[1,-1],[-1,1],[1,1]])V(n,w.limestone,.012,.01,.012,T+J*.015,k+W,R+Y*.015,-.12)}else if(Ji(n,w.limestone,.021,.023,W,T,k,R,12),W>.06)for(let J=0;J<5;J++){const Y=J/5*6.283;V(n,w.limestone,.012,.01,.008,T+Math.cos(Y)*.017,k+W,R+Math.sin(Y)*.017,-Y+Math.PI/2)}}),V(n,w.rubble,.1,.04,.05,-.5+.02,l(-.5,.08)-.005,.08,-.12),V(n,w.rubble,.05,.03,.07,-.5-.1,l(-.5,.08)-.005,.08+.01,-.12);const P=T=>{let R=.18,x=.08+.4;for(let k=0;k<20;k++){const W=(R+x)/2;s(T,W)<1.47?R=W:x=W}return R},C=[],A=[],U=[],v=28,m=-.5-.17,E=-.5+.17;for(let T=0;T<=3;T++)for(let R=0;R<=v;R++){const x=m+(E-m)*R/v,k=P(x),W=l(x,k+.035)-.008,J=W+(.07+Jt(x*9,3)*.02)*Math.min(1,R/3,(v-R)/3);C.push(x,W+(J-W)*T/3,k+.012-T*.008+(Jt(x*12,T*3)-.5)*.008),A.push(x*1.4,T*.05)}for(let T=0;T<3;T++)for(let R=0;R<v;R++){const x=T*(v+1)+R;U.push(x,x+1,x+v+1,x+1,x+v+2,x+v+1)}const I=new Me;I.setAttribute("position",new Bt(C,3)),I.setAttribute("uv",new Bt(A,2)),I.setIndex(U),I.computeVertexNormals(),lt(n,I,w.karst);for(let T=0;T<6;T++){const R=-.65+T*.06,x=P(R)+.013,k=l(R,x+.035)+.006+T%2*.022;if(V(n,w.dark,.024,.03,.004,R,k,x),V(n,w.karstFlat,.034,.006,.008,R,k+.03,x),T%3===0){const W=lt(n,new Dn(.014,.004,4,8,Math.PI),w.karstFlat,R,k+.03,x+.001);W.scale.y=.8}}lr(n,-.5-.06,P(-.5-.06)+.06,l(-.5-.06,P(-.5-.06)+.06)-.004,.75,1.4,w.karstFlat),lr(n,-.5+.1,P(-.5+.1)+.055,l(-.5+.1,P(-.5+.1)+.055)-.004,.7,1.7,w.karstFlat);const z=a.top-a.depth;V(n,w.paving,a.w,.006,a.d,a.x,z-.002,a.z);for(const[T,R,x,k]of[[0,-.115/2,a.w+.02,.012],[0,a.d/2,a.w+.02,.012],[-.22/2,0,.012,a.d],[a.w/2,0,.012,a.d]])V(n,w.limestone,x,a.depth+.008,k,a.x+T,z,a.z+R),V(n,w.weathered,x+.012,.007,k+.014,a.x+T,z+a.depth+.008,a.z+R);for(let T=0;T<8;T++){const R=a.x-a.w/2+(T+.5)*a.w/8;V(n,w.dark,.014,.05,.003,R,z+.02,a.z-a.d/2+.0075),lt(n,new xs(.007,8,0,Math.PI),w.dark,R,z+.07,a.z-a.d/2+.0076)}for(let T=0;T<5;T++)V(n,w.dark,.003,.05,.012,a.x-a.w/2+.0075,z+.02,a.z-a.d/2+(T+.5)*a.d/5);for(let T=0;T<10;T++)V(n,w.limestone,.022,.006+T*.0095,.0105,a.x+a.w/2-.017,z,a.z+a.d/2-.012-T*.0105);const L=.3,F=t(L),D=[[-.228,.04],[-.158,.05],[-.084,.058],[0,.08],[.084,.058],[.158,.05],[.228,.04]];Ue(n,w.limestone,.56,.1,.07,D.map(([T,R])=>({x:T,w:R,h:.05+R*.5})),L,-.012,F,Math.PI/2);for(let T=0;T<9;T++){const R=(T-4)/4,x=.068;V(n,w.paving,.062,.006,x,L,.086+.01*(1-R*R),F+(T-4)*.066,0).rotation.x=R*.09}for(const T of[-1,1])for(let R=0;R<9;R++){const x=(R-4)/4;V(n,w.limestone,.005,.011,.068,L+T*.033,.09+.01*(1-x*x),F+(R-4)*.066).rotation.x=x*.09}for(const T of[-.193,-.121,-.046,.046,.121,.193])for(const R of[-1,1]){const x=lt(n,new Yt(.016,.018,.06,3),w.limestone,L+R*.046,.018,F+T);x.rotation.y=R>0?0:Math.PI}const N=[[.62,-.2],[.72,-.08],[.6,-.02],[.75,.1],[.62,.14],[.8,-.24],[.66,-.34],[.84,0],[.72,.26],[.74,.5],[.62,.62],[.82,.3],[-.3,.82],[-.52,.66],[.42,-.88],[.52,-.82],[.18,-.88],[.1,-.8],[.3,-.92]];N.forEach(([T,R],x)=>{Math.hypot(T,R)<.92&&Xr(n,T,R,l(T,R)-.005,.06+x%3*.01,.065+x%2*.015,x%6===2?.075:.042+x%4*.009,x%5*.35-.6)});for(let T=0;T<16;T++){const R=-.9+T*.118,x=t(R)+(T%2?.2:-.19);Math.abs(R-L)>.08&&Math.hypot(R,x)<.93&&Ne(n,"reed",R,x,1.2,l(R,x),T)}for(const[T,R]of[[.86,.4],[-.86,-.3],[-.78,-.4],[.9,-.36]])Ne(n,"cypress",T,R,1.1,l(T,R),T*5);gn(n,["olive","pine","shrub"],12,[-.95,-.5,.95,.95],l,31,.75,1.1,(T,R)=>!(Math.abs(T-c)<.5&&R>-.02&&R<.72)&&o(T,R)>2.8&&s(T,R)>1.75&&l(T,R)>.05&&Math.abs(T-.3)>.06&&!N.some(([x,k])=>Math.hypot(T-x,R-k)<.09)&&!(Math.abs(T- -.5)<.26&&R>.08)),gn(n,["pine","shrub","oak","shrub"],16,[-.92,-.2,-.1,.34],l,12,.6,.95,(T,R)=>s(T,R)>1.25&&s(T,R)<1.8&&r(T,R)<.05&&o(T,R)>2.8);for(const[T,R,x]of[[.3,.02,3],[0,.56,4],[.07,.6,1],[a.x+.15,a.z+.03,5],[-.5,.08+.02,3],[-.5+.02,P(-.5+.02)+.07,0]])mn(n,T,R,l(T,R)+.003,x);mn(n,L,F-.05,.1,0),mn(n,L,F+.12,.096,2)}function xv(n){const t={x:.56,z:.38,r0:.07,r1:.24,rows:9,y:.07},e=(t.r1-t.r0)*.62,i=-.6,s=-.1,r={x:-.44,z:-.58},a={x:.5,z:-.56},o=xi(n,{dry:.3,h:(R,x)=>{let k=.07+Jt(R*2.2+3,x*2.2)*.03+Oi(R,x,.82,.22,.26,.16)+Oi(R,x,-.75,.75,.3,.06);const W=Math.hypot(R-t.x,x-t.z),J=(R-t.x)*Math.sin(i)+(x-t.z)*Math.cos(i),Y=W<t.r1+.14?Te(t.y-.012,k,bt(t.r1+.02,t.r1+.14,W)):k,H=W<t.r1?Math.min(k,t.y-.01+Math.max(0,(W-t.r0)/(t.r1-t.r0))*e):W<t.r1+.16?Math.min(k,Te(t.y+e-.01,k,bt(t.r1,t.r1+.16,W))):k;return k=J>-.035&&W<t.r1+.14?Math.min(Y,Te(H,Y,bt(-.035,-.012,J))):H,k},tint:(R,x,k,W,J,Y)=>{Math.abs(x-s)<.05&&R>-.86&&R<.9&&J.lerp(Y.earth,.85);const H=bt(s,r.z,x),Z=Te(-.72,r.x,H);x<s&&x>-.95&&Math.abs(R-Z)<.04&&J.lerp(Y.sand,.8),J.lerp(Y.rock,Jt(R*6+2,x*6)>.62?.5:0)}});V(n,w.paving,1.62,.008,.085,.02,o(0,s)-.004,s);for(let R=0;R<16;R++)for(const x of[-1,1]){const k=-.66+R*.075+(x>0?.03:0),W=s+x*.058,J=R*2+(x>0?1:0);Math.abs(k-.5)<.06||J%3===0||ze(n,k,W,J%7===1?.17:.02+J%4*.012,{y:o(k,W)-.004,r:.01,broken:!0,shaft:w.shaftWarm,cap:w.weathered,seed:J})}const l=o(.12,s-.13)-.006;for(const[R,x,k,W,J]of[[0,-.045,.16,.018,.085],[-.08,0,.018,.09,.07],[.08,0,.018,.09,.05]])V(n,w.limestone,k,J,W,.12+R,l,s-.14+x);V(n,w.limestone,.14,.022,.05,.12,l,s-.115),V(n,w.karstDark,.12,.004,.035,.12,l+.02,s-.115);const c=-.16,h=.24,f=o(c,h)-.01,u=new Ht;u.position.set(c,f,h),n.add(u);const d=.68,y=.3,_=d/11,p=y/5,g=.3,S=.0135;V(u,w.limestone,d+.1,.02,y+.1,0,0,0),V(u,w.limestone,d+.07,.02,y+.07,0,.02,0),V(u,w.weathered,d+.04,.02,y+.04,0,.04,0);const b=new Set(["0-5","4-0","5-0","11-2","9-5"]),M=new Set(["2-5","3-5","7-5","1-0","8-0","11-4"]);for(let R=0;R<12;R++)for(let x=0;x<6;x++){if(R>0&&R<11&&x>0&&x<5)continue;const k=-d/2+R*_,W=-y/2+x*p,J=R+"-"+x,Y=!b.has(J),H=M.has(J);ze(u,k,W,Y?H?g:g*(.8+(R*5+x*3)%4*.045):.05,{y:.06,r:S,broken:!H,shaft:w.shaftWarm,cap:w.weathered,seed:R+x})}Ks(u,-d/2+2*_,y/2,-d/2+3*_,y/2,.06+g,.036,.024,w.weathered),Un(u,w.limestone,.09,.105,d/2-.09,.06,0,-Math.PI/2),V(u,w.limestone,.016,.03,.07,d/2-.002,.165,.03);for(const[R,x,k,W]of[[2,5,0,.12],[6,9,0,.08],[3,6,5,.06]])V(u,w.limestone,(x-R)*_,W,.014,-d/2+(R+x)/2*_,.06,-y/2+k*p);Ue(u,w.limestone,y*.7,.13,.014,[{x:0,w:.05,h:.09}],-d/2+_*.5,.06,0,Math.PI/2),Ii(u,-.1,-.24,5,S,3,0),Ii(u,.3,.26,3,S,8,0),Qe(u,.36,-.22,6,.16,.022,w.weathered,5);const P=.5,C=o(P,s)-.006;for(let R=0;R<6;R++){const x=s-.19+R*.076,k=R!==3;ze(n,P,x,k?.25:.05,{y:C,r:.014,broken:!k,bracket:k?-1:0,shaft:w.shaftWarm,seed:R})}Ks(n,P,s-.19,P,s-.114,C+.25,.04,.026,w.weathered),Ks(n,P,s+.114,P,s+.19,C+.25,.04,.026,w.weathered);const A=-.78,U=o(A,s)-.008;V(n,w.limestone,.14,.035,.34,A,U,s);for(let R=0;R<5;R++)ze(n,A+.03,s-.12+R*.06,.215,{y:U+.035,r:.013,shaft:w.greyGranite,seed:R});Ks(n,A+.03,s-.12,A+.03,s+.12,U+.25,.036,.026,w.weathered);for(const[R,x,k,W]of[[-.07,-.1,.1,.014],[-.07,.1,.1,.014],[-.12,0,.014,.2]])V(n,w.limestone,k,.05,W,A+R,o(A-.07,s)-.006,s+x);const v=new Ht;v.position.set(r.x,o(r.x,r.z)-.008,r.z),v.rotation.y=.25,n.add(v),Ue(v,w.limestone,.44,.27,.07,[{x:-.14,w:.075,h:.14},{x:0,w:.115,h:.2},{x:.14,w:.075,h:.14}],0,0,0);for(const R of[-1,1])ti(v,w.weathered,.115,.2,.01,0,0,R*.04,0,9),ti(v,w.weathered,.075,.14,.01,-.14,0,R*.04,0,7),ti(v,w.weathered,.075,.14,.01,.14,0,R*.04,0,7);V(v,w.limestone,.3,.02,.09,-.07,.27,0),V(v,w.limestone,.16,.03,.07,-.13,.29,0);for(const R of[-1,1])[.16,.1,.05].forEach((x,k)=>V(v,w.limestone,.09,x,.04,R*(.265+k*.09),0,0));const m=new Ht;m.position.set(a.x,o(a.x,a.z)-.008,a.z),m.rotation.y=.2,n.add(m);const E=.28,I=.23,z=.52;V(m,w.limestone,E+.02,.03,I+.02,0,0,0),V(m,w.limestone,E,z,I,0,.03,0);for(let R=1;R<5;R++)V(m,w.weathered,E+.008,.007,I+.008,0,.03+R*z/5,0);for(let R=0;R<5;R++)R&&V(m,w.dark,.012,.035,.004,.05-R%2*.1,.06+R*z/5,I/2+.001),V(m,w.dark,.004,.035,.012,-E/2-.001,.06+R*z/5,.04-R%2*.08);V(m,w.dark,.04,.065,.004,0,.03,I/2+.001),[[-.09,-.075,.1,.08,.07],[.02,-.085,.12,.06,.045],[-.105,.03,.07,.13,.04],[.1,-.03,.08,.09,.02]].forEach(([R,x,k,W,J])=>V(m,w.limestone,k,J,W,R,.03+z,x)),Qe(m,.05,.19,6,.2,.026,w.limestone,7),to(n,{...t,arc:Math.PI*1.02,stairs:4,ry:i});const L=t.x+Math.sin(i)*(t.r0+.07),F=t.z+Math.cos(i)*(t.r0+.07);V(n,w.limestone,.34,.05,.03,L,t.y-.012,F,i),V(n,w.limestone,.38,.022,.05,L+Math.sin(i)*.045,t.y-.012,F+Math.cos(i)*.045,i);for(const R of[-.1,-.03,.03,.1])V(n,w.limestone,.016,.085,.032,L+Math.cos(i)*R,t.y-.012,F-Math.sin(i)*R,i);[[-.52,-.32,.2],[-.62,-.4,-.3],[-.2,-.72,.1],[.2,-.56,.3],[.14,-.72,-.1],[.84,-.3,.4],[-.72,-.5,.1]].forEach(([R,x,k],W)=>Xr(n,R,x,o(R,x)-.005,.065+W%3*.012,.075+W%2*.02,.042+W%3*.01,k,W%2?w.limestone:w.plaster));const D=R=>R.slice(1).forEach(([x,k],W)=>{const[J,Y]=R[W],H=Math.hypot(x-J,k-Y);V(n,w.rubble,H,.014,.012,(J+x)/2,o((J+x)/2,(Y+k)/2)-.003,(Y+k)/2,-Math.atan2(k-Y,x-J))});D([[-.7,.62],[-.4,.7],[-.1,.66],[.2,.74]]),D([[-.4,.7],[-.44,.88]]),D([[-.1,.66],[-.06,.86]]);for(const[R,x,k]of[[-.42,.58,.3],[.05,.56,1.2],[.24,.6,.5]])lr(n,R,x,o(R,x)-.004,.9,k);Ii(n,-.2,.56,4,S,14,o(-.2,.56));for(const[R,x]of[[-.56,.8],[-.24,.8],[.08,.8],[.34,.84]])Ne(n,"olive",R,x,.9,o(R,x),R*9);const N=new Ht;N.position.set(-.6,o(-.6,.5)-.006,.5),N.rotation.y=.3,n.add(N),V(N,w.limestone,.08,.012,.08,0,0,0),V(N,w.limestone,.066,.1,.066,0,.012,0),V(N,w.weathered,.074,.008,.074,0,.112,0),lt(N,new pn(.05,.05,4),w.limestone,0,.145,0).rotation.y=Math.PI/4,gn(n,["oak","cedar","oak","shrub","shrub"],22,[-.95,-.95,.95,.95],o,7,.7,1.05,(R,x)=>Math.abs(x-s)>.12&&!(Math.abs(R-c)<.48&&Math.abs(x-h)<.3)&&!(x>.36)&&Math.hypot(R-t.x,x-t.z)>.36&&Math.hypot(R-r.x,x-r.z)>.33&&Math.hypot(R-a.x,x-a.z)>.3&&Math.hypot(R-A,x-s)>.24&&!(Math.abs(R-.12)<.14&&x<s&&x>-.36));for(const[R,x,k]of[[.1,s,0],[.16,s+.02,1],[.44,s-.02,2],[-.2,.48,3],[-.62,s,4],[r.x+.03,r.z+.1,5],[t.x-.02,t.z+.02,2],[a.x-.02,a.z+.16,0]])mn(n,R,x,o(R,x)+.002,k)}function Mv(n){const t={x:-.34,z:-.02,r0:.07,r1:.26,rows:9,y:.19},e=(t.r1-t.r0)*.62,i=m=>.6+.07*Math.sin(m*3.1+1)+Jt(m*4,3)*.05,s=xi(n,{water:!0,dry:.8,h:(m,E)=>{let I=.035+bt(.35,-1,m)*.27+Jt(m*2.4,E*2.4+8)*.022;I+=Oi(m,E,.1,.86,.17,.21);const z=Math.max(Math.abs(m-.3)/.17,Math.abs(E-.42)/.16);z<1.3&&(I=Te(.062,I,bt(1,1.3,z))),I-=bt(i(E)-.05,i(E)+.2,m)*.22;const L=Math.hypot(m-t.x,E-t.z);return L<t.r1+.03&&m<t.x+.04?I=Math.min(I,t.y-.01+Math.max(0,(L-t.r0)/(t.r1-t.r0))*e):L<t.r0+.1&&(I=Te(t.y-.01,I,bt(t.r0,t.r0+.1,L))),I},tint:(m,E,I,z,L,F)=>{L.lerp(F.rock,.25+bt(.04,.12,Oi(m,E,.1,.86,.17,.21))*.6),Math.abs(m-.3-.03*Math.sin(E*5))<.026&&E>-.9&&E<.24&&I>.02&&L.setHex(13616818),m>i(E)-.13&&I>0&&L.lerp(F.sand,bt(i(E)-.13,i(E)-.04,m))}});to(n,{...t,arc:Math.PI*1.04,stairs:4,ry:Math.PI/2,material:w.limestone});for(let m=0;m<11;m++){const E=Math.PI*(.48+1.04*(m+.5)/11),I=t.r1+.012;m%3&&V(n,w.rubble,.06,.012+m*7%4*.01,.03,t.x+Math.cos(E)*I,t.y+e-.006,t.z+Math.sin(E)*I,-E+Math.PI/2)}V(n,w.rubble,.03,.045,.34,t.x+t.r0+.05,s(t.x+t.r0+.05,t.z)-.006,t.z);const r=0,a=-.04,o=s(r,a)-.006,l=new Ht;l.position.set(r,o,a),n.add(l),to(l,{r0:.045,r1:.14,rows:7,arc:Math.PI,stairs:3,ry:-Math.PI/2,material:w.limestone}),[[.02,.085],[.09,.06],[-.06,.07]].forEach(([m,E],I)=>V(l,w.rubble,.022,E,.1+(I===0?.02:0),.165,0,-.1+I*.105)),[[-.11,.16,.1],[0,.12,.12],[.11,.075,.1]].forEach(([m,E,I])=>V(l,w.rubble,I,E,.022,m,0,-.17)),[[-.1,.13,.12],[.02,.09,.12],[.12,.05,.08]].forEach(([m,E,I])=>V(l,w.rubble,I,E,.022,m,0,.17)),Ue(l,w.rubble,.34,.15,.022,[-.1,0,.1].map(m=>({x:m,w:.055,h:.1})),-.155,0,0,Math.PI/2);for(const m of[-.1,0,.1])ti(l,w.brick,.055,.1,.006,m,0,0,0,7).position.set(-.168,0,-m),l.children[l.children.length-1].rotation.y=Math.PI/2;lt(l,new On(.08,.08),w.mosaic,-.08,.008,0).rotation.x=-Math.PI/2;const c=0,h=.42,f=.054,u=new Ht;u.position.set(c,f,h),u.rotation.y=-Math.PI/2,n.add(u);const d=.115,y=.21;[.26,.26,.13].forEach((m,E)=>li(u,w.rubbleDS,d,m,y,-d+E*d,0,(.26-m)/2,0,0)),[[-d,.27],[0,.24],[d,.2]].forEach(([m,E])=>V(u,w.rubble,d+.004,E,.022,m,0,.13));for(const m of[-.07,0,.07])V(u,w.dark,.004,.06,.03,d*1.5+.001,.09,m),ti(u,w.brick,.03,.15,.004,0,0,0,0,7).position.set(d*1.5+.003,0,m),u.children[u.children.length-1].rotation.y=Math.PI/2;Ue(u,w.rubble,d*3+.01,y+.03,.024,[-d,0,d].map(m=>({x:m,w:.07,h:.15})).concat([-d,0,d].map(m=>({x:m,w:.03,h:.2,sill:.165}))),0,0,-.13);for(const m of[-d,0,d])ti(u,w.brick,.07,.15,.006,m,0,-.144,0,9);[[-d*1.1,.05,.1],[-.02,.025,.08],[d*.9,.012,.07]].forEach(([m,E,I])=>V(u,w.rubble,I,E,.024,m,y+.03,-.13)),Un(u,w.rubble,.05,.14,-d*1.5-.01,0,.04,Math.PI/2),Qe(u,d,-.02,6,.1,.022,w.rubble,4);const _=-.27,p=.004;lt(u,new On(.28,.2),w.mosaic,0,p+.006,_).rotation.x=-Math.PI/2;for(const[m,E,I,z]of[[0,-.108,.32,.014],[-.155,0,.014,.22],[.155,0,.014,.22]])V(u,w.rubble,I,.04,z,m,0,_+E);for(let m=0;m<7;m++)ze(u,-.126+m*.042,_-.085,m===2||m===3||m===5?.13:.025,{y:p,r:.009,broken:!(m===2||m===3||m===5),shaft:w.weathered});for(let m=0;m<4;m++)ze(u,-.126,_-.04+m*.042,m===1?.13:.025,{y:p,r:.009,broken:m!==1,shaft:w.weathered});const g=[];for(let m=0;m<=10;m++){const E=-.5+m*.105;g.push([i(E)-.085,E])}Zi(n,w.rubble,g,.045,.02,{closed:!1,tower:!1,Y:s,skip:[3,7],merlons:!1}),li(n,w.rubbleDS,.08,.13,.08,.42,s(.42,-.22)-.006,-.22,Math.PI/2,2),li(n,w.rubbleDS,.07,.11,.07,.42,s(.42,-.135)-.006,-.135,Math.PI/2,1);const S=.4,b=.12,M=s(S,b)-.006;Un(n,w.rubble,.045,.1,S+.07,M,b,-Math.PI/2),V(n,w.rubble,.16,.06,.014,S-.01,M,b-.047),V(n,w.rubble,.16,.04,.014,S-.01,M,b+.047);const P=[];for(let m=0;m<=6;m++)P.push([.48-m*.22,-.4-.03*Math.sin(m*1.3)]);Zi(n,w.rubble,P,.06,.02,{closed:!1,tower:!1,Y:s,skip:[2],merlons:!1}),P.forEach(([m,E],I)=>V(n,w.rubble,.044,[.085,.05,.09,.035,.075,.06,.08][I],.044,m,s(m,E)-.01,E));let C=0;const A=[];for(let m=0;m<4;m++)for(let E=0;E<9;E++,C++){const I=-.82+E*.165+m%2*.08+Math.sin(C*3.3)*.04,z=-.53-m*.105-Math.cos(C*2.1)*.03,L=.052+C%3*.01;if(Math.hypot(I,z)>.92||I>.5||A.some(([R,x,k])=>Math.hypot(I-R,z-x)<(L+k)*.95))continue;A.push([I,z,L]);const F=s(I,z)-.01,D=Math.PI/2+.5*Math.sin(C*1.7),N=C%4===0,T=li(n,w.rubbleDS,L,L*1.35,N?.05:.036,I,F,z,D,2);if(N&&li(T,w.rubbleDS,L*.8,L*1,.03,0,.05+L/2-.006,-L*.12,0,2),C%3===1){V(T,w.rubble,L*1.3,.02,.01,0,0,L*1.25);for(const R of[-1,1])V(T,w.rubble,.01,.02,L*.6,R*L*.65,0,L*.97)}}const U=[[-.08,.78],[0,.75],[.1,.765],[.2,.75],[.28,.79]];Zi(n,w.rubble,U,.05,.018,{closed:!1,tower:!1,Y:s});for(const m of[1,3]){const[E,I]=U[m],z=s(E,I)-.01;V(n,w.rubble,.05,.09,.05,E,z,I,.2);for(const[L,F]of[[-1,-1],[1,-1],[-1,1],[1,1]])V(n,w.rubble,.012,.008,.012,E+L*.018,z+.09,I+F*.018,.2)}{const m=s(.1,.86)-.012;V(n,w.rubble,.075,.14,.065,.1,m,.86,.3);for(const[E,I]of[[-1,-1],[1,-1],[-1,1],[1,1],[0,1],[0,-1]])V(n,w.rubble,.014,.01,.014,.1+E*.028,m+.14,.86+I*.024,.3);V(n,w.dark,.012,.03,.003,.092,m+.07,.892,.3)}const v=[];for(let m=0;m<=8;m++)v.push([-.74+.03*Math.sin(m),-.36+m*.1]);Zi(n,w.rubble,v.filter(([m,E])=>Math.hypot(m,E)<.92),.022,.014,{closed:!1,tower:!1,Y:s,skip:[4],merlons:!1}),Ue(n,w.rubble,.11,.05,.016,[{x:-.025,w:.03,h:.036},{x:.025,w:.03,h:.036}],-.725,s(-.725,.09)-.02,.09,Math.PI/2);for(let m=0;m<11;m++){const E=.22+m%2*.15+Math.sin(m*2.1)*.012,I=-.34+Math.floor(m/2)*.1+m%2*.03,z=.07+m%3*.012,L=.06+m%2*.015,F=s(E,I)-.006,D=new Ht;D.position.set(E,F,I),D.rotation.y=.1*Math.sin(m),n.add(D),V(D,w.rubble,z,.02+m%4*.01,.01,0,0,-L/2),V(D,w.rubble,z,.016+m%3*.008,.01,0,0,L/2),V(D,w.rubble,.01,.035-m%3*.008,L,-z/2,0,0),V(D,w.rubble,.01,.02,L*.6,z/2,0,-L*.2),m%4===1&&V(D,w.rubble,.01,.02,L,0,0,0)}li(n,w.rubbleDS,.075,.12,.075,-.06,s(-.06,-.3)-.006,-.3,Math.PI/2,2),li(n,w.rubbleDS,.06,.1,.06,-.06,s(-.06,-.225)-.006,-.225,Math.PI/2,1),Qe(n,.22,.12,8,.4,.02,w.rubble,5,s),gn(n,["shrub","shrub","shrub","olive"],26,[-.95,-.4,.5,.95],s,9,.6,.85,(m,E)=>!(m>-.2&&m<.5&&E>.58)&&s(m,E)>.04&&Math.hypot(m-t.x,E-t.z)>.33&&Math.hypot(m-r,E-a)>.24&&!(m>-.2&&m<.5&&E>.2&&E<.62)&&!(m>.14&&m<.46&&E<.2)&&Math.hypot(m-S,E-b)>.13&&Math.abs(m-.3)>.04);for(const[m,E,I]of[[-.24,-.02,0],[-.2,.02,1],[.3,.44,2],[.31,-.1,3],[.26,.38,4],[-.2,-.62,5],[.56,.3,2],[.3,-.5,1]])mn(n,m,E,s(m,E)+.004,I)}function bv(n){const i=(A,U)=>ki(A,U,0,.04,.56,.43,.15)+(Jt(A*2.3+4,U*2.3)-.5)*.34-.07*Math.exp(-((A-.42)**2+(U-.34)**2)/.02),s=(A,U=1)=>{let v=0,m=1.2;for(let E=0;E<22;E++){const I=(v+m)/2;i(0+Math.cos(A)*I,.04+Math.sin(A)*I)<U?v=I:m=I}return[0+Math.cos(A)*v,.04+Math.sin(A)*v,v]},r=(A,U)=>.08+Jt(A*2.5+2,U*2.5)*.025+Oi(A,U,.62,-.52,.16,.05),a=xi(n,{dry:.7,h:(A,U)=>{const v=i(A,U),m=r(A,U);if(v>=1.04)return m;const E=-.43+Jt(A*4,U*4+5)*.04+bt(.15,.95,v)*.16;return Math.min(m,E+bt(.995,1.04,v)*.56)},tint:(A,U,v,m,E,I)=>{const z=i(A,U);E.lerp(I.rock,.35+(Jt(A*7,U*7)>.6?.4:0)),z<1.24&&z>=1.04&&E.copy(I.rock).lerp(I.sand,.3),z<1.04&&(E.setHex(12169378),v<-.24&&(E.copy(I.grass).multiplyScalar(.5+Jt(A*9,U*9)*.35).lerp(I.earth,.2+Jt(A*5+3,U*5)*.3),Jt(A*6+9,U*6)>.58&&E.copy(I.rock).lerp(I.earth,.5),E.multiplyScalar(1-bt(.6,.95,z)*.35)))}});jl(n,i,0,.04,a,-.4,{level:.925,tiers:4,step:.022,amp:.018,seed:3,cap:.075});for(let A=0;A<34;A++){const U=A*.19+.2*Math.sin(A),[v,m]=s(U,.74+A%4*.05);pi(n,v,a(v,m)+.01,m,.022+A%5*.009,A,w.karstFlat)}for(let A=0;A<16;A++){const U=A*.4+.1,[v,m]=s(U,.9);for(let E=0;E<2;E++)Ne(n,"oak",v+E*.012,m+E*.008,.38-E*.1,-.09-A%3*.09-E*.012,A+E)}const o=(A,U)=>{const[v,m,E]=s(A,1);return[0+Math.cos(A)*(E+U),.04+Math.sin(A)*(E+U)]},l=2.42,[c,h]=o(l,.09),f=a(c,h)-.008,u=new Ht;u.position.set(c,f,h),u.rotation.y=.3,n.add(u),V(u,w.limestone,.19,.02,.14,0,0,0),V(u,w.limestone,.17,.24,.12,0,.02,0);for(let A=1;A<3;A++)V(u,w.weathered,.176,.006,.126,0,.02+A*.08,0);[[-.055,-.03,.06,.06,.06],[.02,-.035,.085,.05,.04],[-.06,.03,.05,.06,.03],[.065,-.04,.04,.04,.015]].forEach(([A,U,v,m,E])=>V(u,w.limestone,v,E,m,A,.26,U)),V(u,w.dark,.03,.05,.004,.03,.02,.061);for(let A=0;A<2;A++)V(u,w.dark,.01,.03,.004,-.03+A*.06,.13+A*.07,.061);V(u,w.weathered,.05,.026,.003,-.04,.085,.061),V(u,w.weathered,.016,.016,.004,.07,.21,.0615),Qe(u,0,.11,4,.14,.022,w.limestone,3);const d=(A,U,v,m,E)=>{const[I,z]=s(A-.09,.84),[L,F]=s(A+.09,.84),D=new Ht;D.position.set((I+L)/2,U,(z+F)/2),D.rotation.y=Math.atan2(L-I,F-z)-Math.PI/2,n.add(D),Math.hypot(D.position.x+Math.sin(D.rotation.y)*.1-0,D.position.z+Math.cos(D.rotation.y)*.1-.04)>Math.hypot(D.position.x-0,D.position.z-.04)&&(D.rotation.y+=Math.PI),V(D,w.karstFlat,v+.05,m+.07,.12,0,-.035,-.062),V(D,w.karstDark,v,m,.004,0,0,0);for(const N of[-1,1])V(D,w.limestone,.008,m+.008,.006,N*(v/2+.004),0,.001);V(D,w.limestone,v+.016,.008,.006,0,m,.001);for(let N=0;N<E;N++){const T=E===6&&N<2,R=T?m*.66:m*(N>3?.62:.84),x=-v/2+(N+.5)*v/E,k=lt(D,new Zr(v/E*.3,R-v/E*.6,3,8),w.relief,x,R/2+.003,.006);k.scale.z=.5,lt(D,new Ee(v/E*.26,8,6),w.relief,x,R+v/E*.2,.006).scale.z=.6,T&&V(D,w.relief,v/E*.8,R*.35,.008,x,.003,.005)}};d(l+.6,-.1,.2,.1,6),d(l+1.3,-.1,.045,.095,1);function y(A,U,v,m,E,I){const[z,L]=o(A,U),F=new Ht;F.position.set(z,a(z,L)-.008,L),F.rotation.y=I==="IV"?.1:A*3%.4-.2,n.add(F);const D=(N,T,R)=>Array.from({length:N},(x,k)=>({x:-v/2+(k+.5)*v/N,w:v/(N*2.1),h:T,sill:R}));if(I==="IV"){Ue(F,w.limestone,v,E*1.15,.022,D(5,E*.5,E*.2).concat(D(5,E*1,E*.72)),0,0,-m/2),[[-.4,.42],[-.22,.2],[0,.12],[.2,.16]].forEach(([T,R])=>V(F,w.limestone,v*.2,E*R,.022,v*T,0,m/2)),Un(F,w.limestone,m*.3,E*.9,v/2,0,0,-Math.PI/2);const N=lt(F,new Ee(m*.3,16,8,0,Math.PI,0,Math.PI/2),w.limestoneDS,v/2,E*.9,0);N.rotation.y=0;for(const T of[-1,1]){const R=T<0?1.05:.5;Ue(F,w.limestone,m*.34,E*R,.022,T<0?[{x:0,w:m*.1,h:E*.42,sill:E*.18},{x:0,w:m*.1,h:E*.9,sill:E*.66}]:[{x:0,w:m*.1,h:E*.4,sill:E*.16}],v/2,0,T*m*.33,Math.PI/2),V(F,w.limestone,.09,E*R*.9,.02,v/2+.045,0,T*m*.5)}for(const T of[-.03,.03])V(F,w.dark,.012,.03,.004,v/2+m*.3+.002,E*.45,T).rotation.y=Math.PI/2;Ue(F,w.limestone,m,E*.75,.022,[{x:0,w:m*.2,h:E*.5},{x:-m*.3,w:m*.13,h:E*.4},{x:m*.3,w:m*.13,h:E*.4}],-v/2,0,0,Math.PI/2);for(const T of[-m*.3,.02,m*.3])V(F,w.limestone,.022,.03+Math.abs(T)*.2,m*.2,-v/2,E*.75,T);for(let T=0;T<5;T++)for(const R of[-1,1])ze(F,-v/2+(T+1)*v/6,R*m*.2,T%2?E*.5:.03,{r:.009,broken:T%2===0,shaft:w.weathered,seed:T})}else{const N=I==="apse"?[.5,.25]:[.75,.45];Ue(F,w.limestone,v,E*N[0],.02,I==="apse"?[]:D(4,E*N[0]*.8,E*N[0]*.35),0,0,-m/2),V(F,w.limestone,v*(I==="apse"?.4:.8),E*N[1],.02,-v*.1,0,m/2),Un(F,w.limestone,m*.3,E*(I==="apse"?1:.8),v/2,0,0,-Math.PI/2);for(const T of[-1,1])V(F,w.limestone,.02,E*.7,m*.2,v/2,0,T*m*.4);I==="narthex"&&(V(F,w.limestone,.02,E*.5,m,-v/2,0,0),V(F,w.limestone,.02,E*.3,m,-v/2-.06,0,0));for(let T=0;T<3;T++)for(const R of[-1,1])ze(F,-v/2+(T+1)*v/4,R*m*.2,.025+T%2*.03,{r:.008,broken:!0,shaft:w.weathered,seed:T})}return Qe(F,0,0,5,m,.018,w.limestone,A*10),[z,L]}const _=y(-1.5,.13,.3,.19,.2,"IV"),p=y(l+.55,.12,.22,.15,.13,"narthex"),g=y(0,.16,.2,.14,.12,"plain"),S=y(-.62,.12,.2,.14,.13,"apse"),b=.62,M=-.52,P=new Ht;P.position.set(b,a(b,M)-.006,M),P.rotation.y=.5,P.scale.setScalar(.8),n.add(P),V(P,w.limestone,.17,.02,.2,0,0,0),V(P,w.limestone,.14,.13,.17,0,.02,0);for(const A of[-1,1])for(const U of[-1,1])V(P,w.weathered,.02,.13,.02,A*.066,.02,U*.081);V(P,w.weathered,.155,.014,.185,0,.15,0),jr(P,w.limestone,.16,.19,.045,0,.164,0),Ue(P,w.weathered,.06,.085,.006,[{x:0,w:.036,h:.07}],0,.02,.087),V(P,w.dark,.036,.06,.003,0,.02,.086);for(let A=0;A<8;A++){const U=.2+A*.075,v=-.84+Math.abs(A-3)*.03+A%2*.05;Math.hypot(U,v)<.92&&lr(n,U,v,a(U,v)-.004,.95,A*.5)}[[-.5,-.66,.3,.14,.11],[-.72,-.3,.1,.1,.13],[.72,.52,.6,.12,.09],[.4,.78,.2,.16,.08],[-.42,.74,-.2,.11,.12]].forEach(([A,U,v,m,E],I)=>{const z=a(A,U)-.006,L=new Ht;L.position.set(A,z,U),L.rotation.y=v,n.add(L),V(L,w.rubble,m,.03+I%3*.015,.014,0,0,-E/2),V(L,w.rubble,.014,.05-I%2*.02,E,m/2,0,0),I%2?V(L,w.rubble,m*.6,.025,.014,-m*.2,0,E/2):V(L,w.rubble,.014,.03,E*.5,-m/2,0,-E*.25)});for(let A=0;A<14;A++){const U=A*.47,v=.72+A%3*.07,m=Math.cos(U)*v,E=Math.sin(U)*v;i(m,E)>1.25&&pi(n,m,a(m,E)+.004,E,.018+A%3*.008,A+5,w.karstFlat)}const C=[[c,h,.16],_.concat(.24),p.concat(.18),g.concat(.17),S.concat(.17),[b,M,.17]];gn(n,["oak","olive","shrub","oak","shrub"],34,[-.44,-.3,.46,.36],a,5,.5,.9,(A,U)=>i(A,U)<.72),gn(n,["shrub","shrub","olive"],24,[-.95,-.95,.95,.95],a,9,.55,.8,(A,U)=>i(A,U)>1.3&&C.every(([v,m,E])=>Math.hypot(A-v,U-m)>E)&&!(U>.5&&Math.abs(A)<.3));for(let A=0;A<12;A++){const U=A/11,v=.1-U*(.1-c-.12),m=.9-U*(.9-h-.1);Math.hypot(v,m)<.93&&V(n,w.paving,.03,.004,.022,v,a(v,m)+.001,m,.4+Math.sin(A)*.2)}V(n,w.karstFlat,.09,.012,.07,.3,a(.3,.72)-.002,.72,.2),V(n,w.dark,.05,.004,.035,.3,a(.3,.72)+.009,.72,.2);for(const[A,U]of[[.52,.7],[-.1,.8],[.72,.36],[-.5,.82]])Ne(n,"olive",A,U,.9,a(A,U),A*7);for(const[A,U,v]of[[c+.1,h+.1,0],[c+.14,h+.08,1],[_[0]-.05,_[1]+.02,3],[.05,0,4],[b-.1,M+.1,5],[.3,.62,2]])mn(n,A,U,a(A,U)+.003,v,.8)}function Sv(n){const r=(I,z)=>ki(I,z,-.14,.06,.34,.52,-.12)+(Jt(I*3+3,z*3)-.5)*.22,a=(I,z)=>ki(I,z,.52,-.5,.2,.165,.3)+(Jt(I*6,z*6)-.5)*.14,o=(I,z)=>bt(-.12,-.36,z-.06),l=(I,z)=>.08+Jt(I*2.5,z*2.5+6)*.025,c=(I,z)=>-.2-bt(-.3,.42,z-.06)*.22+Jt(I*5,z*5)*.025,h=xi(n,{dry:.6,h:(I,z)=>{const L=r(I,z),F=a(I,z);let D=l(I,z);if(L<1){const N=o(I,z),T=Te(.93,.3,N);D=Math.min(D,Te(c(I,z),D,bt(T,1,L)**Te(1,1.4,N)))}return F<1&&(D=Math.min(D,-.47+bt(.9,1,F)*.56)),D},tint:(I,z,L,F,D,N)=>{const T=r(I,z),R=a(I,z);D.lerp(N.rock,.3),(T<1.2&&T>=1||R<1.25&&R>=1)&&D.copy(N.rock).lerp(N.sand,.3),T<1&&(D.copy(N.rock).lerp(N.red,.25),F<.9&&D.copy(N.grass).multiplyScalar(.5+Jt(I*9,z*9)*.35-bt(.2,.42,z-.06)*.25).lerp(N.earth,o(I,z)*.5)),R<1&&D.copy(N.red).multiplyScalar(.25+bt(-.47,.05,L)*.6)}});jl(n,r,-.14,.06,h,-.44,{level:.985,tiers:4,step:.022,amp:.034,seed:2,mask:I=>!(I>3.75&&I<5.5)});for(const I of[3.72,5.53])for(let z=0;z<5;z++){let L=0,F=.8;const D=I+(z-2)*.03;for(let R=0;R<18;R++){const x=(L+F)/2;r(-.14+Math.cos(D)*x,.06+Math.sin(D)*x)<.97?L=x:F=x}const N=-.14+Math.cos(D)*L,T=.06+Math.sin(D)*L;pi(n,N,h(N,T)-.02-z*.05,T,.05-z*.004,z+I,w.karstFlat)}for(let I=0;I<14;I++){const z=.2+I*.26+(I>9?2.2:0);let L=0,F=.8;for(let D=0;D<18;D++){const N=(L+F)/2;r(-.14+Math.cos(z)*N,.06+Math.sin(z)*N)<.9?L=N:F=N}Ne(n,"shrub",-.14+Math.cos(z)*L,.06+Math.sin(z)*L,1.2,-.06-I%3*.09,I)}jl(n,a,.52,-.5,h,-.47,{level:.99,tiers:3,step:.004,amp:.012,seed:7,overhang:.012,material:w.strata}),lt(n,new xs(.2,24),w.dark,.52,-.455,-.5).rotation.x=-Math.PI/2;const f=-.14+.03,u=.06+.44,d=c(f,u)-.02;lt(n,new Ee(1,20,14),w.dark,f,d,u+.04).scale.set(.22,.21,.12),[[-.2,.1,.07],[-.1,.19,.08],[.03,.225,.09],[.15,.17,.075],[.22,.07,.06]].forEach(([I,z,L],F)=>{const D=pi(n,f+I,d+z,u-.02,L,F+2,w.karstFlat);D.scale.y*=.6});for(let I=0;I<7;I++)lt(n,new pn(.009,.04+I%3*.02,5),w.karstFlat,f-.13+I*.043,d+.17-Math.abs(I-3)*.022,u-.03).rotation.x=Math.PI;const _=f-.01,p=u-.24,g=h(_,p)-.008,S=new Ht;S.position.set(_,g,p),S.rotation.y=.1,n.add(S),V(S,w.limestone,.2,.07,.016,0,0,-.065),V(S,w.limestone,.2,.085,.016,0,0,.065),V(S,w.limestone,.016,.1,.146,-.1,0,0),Un(S,w.limestone,.058,.09,.1,0,0,-Math.PI/2),V(S,w.dark,.004,.06,.03,-.109,0,0);for(const I of[-1,1])for(const z of[-.055,0,.055])V(S,w.dark,.016,.028,.004,z,.032,I*.074);V(S,w.paving,.19,.004,.12,0,.001,0);const b=[[-.02,-.34],[-.3,-.27],[-.04,-.2],[-.28,-.13],[-.1,-.06],[-.2,.04],[_-.14,p+0]],M=(I,z)=>b.some(([L,F],D)=>{if(D===b.length-1)return!1;const[N,T]=b[D+1],R=Math.max(0,Math.min(1,((I-L)*(N-L)+(z-F)*(T-F))/((N-L)**2+(T-F)**2)));return Math.hypot(I-L-R*(N-L),z-F-R*(T-F))<.075});for(let I=0;I<b.length-1;I++){const[z,L]=b[I],[F,D]=b[I+1],N=Math.hypot(F-z,D-L),T=Math.round(N/.015),R=-Math.atan2(D-L,F-z);for(let x=0;x<T;x++){const k=(x+.5)/T,W=z+(F-z)*k,J=L+(D-L)*k;V(n,w.limestone,.013,.006,.034,W,h(W,J)+.001,J,R)}V(n,w.limestone,.036,.008,.04,F,h(F,D)+.001,D,R)}eo(n,[[.06,-.42],[0,-.37],[-.02,-.34]],h,.02);const P=[];for(let I=0;I<=22;I++){const z=I/22*6.283;let L=0,F=.5;for(let T=0;T<18;T++){const R=(L+F)/2;a(.52+Math.cos(z)*R,-.5+Math.sin(z)*R)<1.12?L=R:F=R}const D=.52+Math.cos(z)*L,N=-.5+Math.sin(z)*L;Math.hypot(D,N)<.97&&P.push([D,N])}eo(n,P,h,.022);const C=new Ht;C.position.set(.52-.19,h(.52-.26,-.5+.02),-.5+.04),C.rotation.y=.2,n.add(C),V(C,w.wood,.11,.006,.07,.02,0,0);for(const I of[-1,1]){V(C,w.wood,.11,.003,.003,.02,.024,I*.034);for(let z=0;z<4;z++)V(C,w.wood,.003,.024,.003,-.03+z*.033,0,I*.034)}V(C,w.wood,.003,.003,.07,.075,.024,0);const A=-.14+.06,U=.06+.66,v=h(A,U)-.008,m=new Ht;m.position.set(A,v,U),m.rotation.y=.1,n.add(m),V(m,w.limestone,.34,.014,.19,0,0,0),[[-.11,.13],[0,.1],[.11,.115]].forEach(([I,z])=>V(m,w.limestone,.11,z,.02,I,.014,.078)),[[-.1,.06],[.03,.04],[.12,.07]].forEach(([I,z])=>V(m,w.limestone,.1,z,.02,I,.014,-.078)),V(m,w.limestone,.02,.11,.176,-.16,.014,0),Un(m,w.rubble,.062,.1,.16,.014,0,-Math.PI/2),V(m,w.marble,.02,.12,.028,-.16,.014,-.1),V(m,w.dark,.004,.05,.03,-.171,.014,.02);const E=lt(m,new Yt(.012,.012,.04,10),w.weathered,.02,.03,0);E.rotation.z=Math.PI/2,Qe(m,.05,.16,6,.2,.02,w.limestone,4);for(const[I,z,L]of[[.42,.52,12],[.6,.3,9],[-.62,.5,8]])for(let F=0;F<L;F++){const D=I+Math.sin(F*2.4)*.07*Math.sqrt(F/L),N=z+Math.cos(F*2.4)*.05*Math.sqrt(F/L),T=h(D,N);if(!(Math.hypot(D,N)>.93)){for(let R=0;R<3;R++)lt(n,new Ee(.005,5,4),w.saffron,D+Math.cos(R*2.1)*.004,T+.007,N+Math.sin(R*2.1)*.004).scale.set(.7,1.3,.7);lt(n,new Ee(.0025,5,4),w.orange,D,T+.012,N)}}for(let I=0;I<14;I++){const z=I*.83+Math.sin(I)*.3,L=.62+I%4*.07,F=Math.cos(z)*L,D=Math.sin(z)*L;r(F,D)>1.15&&a(F,D)>1.3&&Math.hypot(F,D)<.93&&pi(n,F,h(F,D)+.004,D,.015+I%4*.007,I+3,w.karstFlat)}gn(n,["oak","shrub","olive","oak","shrub"],44,[-.44,-.14,.18,.4],h,7,.45,.75,(I,z)=>r(I,z)<.62&&!M(I,z)&&Math.hypot(I-_,z-p)>.16&&!(Math.abs(I-f)<.16&&z>p)),gn(n,["shrub","olive","shrub","oak"],30,[-.95,-.95,.95,.95],h,13,.5,.8,(I,z)=>r(I,z)>1.25&&a(I,z)>1.45&&!(Math.abs(I-A)<.24&&Math.abs(z-U)<.16)&&!(z<-.3&&I>.1&&I<.5)),Ne(n,"pine",-.62,-.5,1.1,h(-.62,-.5),3),Ne(n,"pine",.78,.12,1,h(.78,.12),5);for(const[I,z,L]of[[-.16,-.29,0],[-.17,-.16,1],[-.15,-.02,2],[_-.14,p+.02,3],[.52-.2,-.5+.04,4],[.52-.16,-.5+.06,5],[A-.2,U-.05,1],[.04,-.4,0]])mn(n,I,z,h(I,z)+.008,L,.9)}function wv(n){const t=L=>.12+.1*Math.sin(L*2.3+.4),i=L=>.45+.045*Math.sin(L*3.1+1)+.02*Math.sin(L*7.3),s=L=>-Math.atan(.23*Math.cos(L*2.3+.4)),r=[[-.66,.1,.13,.105,"banquet",0],[-.5,.17,.07,.125,"soldier",1],[-.345,.085,.105,.12,"couple",2],[-.165,.16,.145,.115,"banquet2",1],[.005,.09,.07,.125,"soldier",0],[.165,.175,.13,.12,"family",2],[.33,.1,.095,.12,"men",0],[.49,.18,.115,.12,"ibex",0],[.655,.115,.095,.12,"men",2]],a=.028,o=(L,F)=>{let D=0;for(const[N,T,R,x]of r)D=Math.max(D,bt(R/2+.014,R/2+.002,Math.abs(L-N))*bt(T-.014,T-.002,F)*bt(T+x+.014,T+x+.002,F));return D},l=(L,F)=>{let D=0;for(const[N,T,R,x]of r)D=Math.max(D,bt(R/2+.04,R/2+.008,Math.abs(L-N))*bt(T-.04,T-.008,F)*bt(T+x+.05,T+x+.01,F));return D},c=xi(n,{dry:.7,h:(L,F)=>{const D=F-t(L),N=Jt(L*3,F*3+2)*.04,T=i(L)+N*bt(-.26,-.4,D)+bt(-.2,-1,F)*.05,R=.1+N;if(D<-.26)return T;if(D>.22)return Te(R,-.28,1-bt(.22,.4,D));const x=-.3+Math.abs(D)*.25+Jt(L*8,F*8)*.02;return D<0?Math.max(x,T-bt(-.26,-.215,D)*.9):x},tint:(L,F,D,N,T,R)=>{const x=F-t(L);T.lerp(R.rock,.3),Math.abs(x)<.05&&D<-.22?T.copy(R.sand).multiplyScalar(.92):D<.4&&x<.42&&x>-.27&&T.copy(R.rock).lerp(R.sand,.2+Jt(L*9,F*9)*.3)}}),h=220,f=60,u=-.31,d=[],y=[],_=[],p=[-.82,-.29,.085,.41,.8];for(let L=0;L<=f;L++)for(let F=0;F<=h;F++){let D=Te(-.985,.985,F/h);const N=i(D)+.012,T=Te(u,N,L/f),R=o(D,T),x=bt(.04,.08,T)*(1-bt(.3,.36,T)),k=Te(.03,.01,x);let W=t(D)+-.17+(Jt(D*6+1,T*6)-.5)*k*2+(Jt(D*17,T*9+4)-.5)*k*.8;W-=bt(.3,N,T)*.035+(T>N-.05?Jt(D*11,3)*.03:0),W+=bt(-.1,-.3,T)*.05,W+=.05*bt(0,.05,T)*bt(.085,.065,T)*(.6+Jt(D*7,9)*.8);for(const Y of p)W-=.035*Math.exp(-((D-Y-Math.sin(T*9)*.01)**2)/25e-5)*(1-R);W=Te(W,t(D)+-.17,bt(0,.25,l(D,T))),W=Te(W,t(D)+-.17-a,R),W-=bt(.9,.985,Math.abs(D))*.13;const J=Math.hypot(D,W);J>.992&&(D*=.992/J,W*=.992/J),d.push(D,T,W),y.push(D*1.15,T*1.15)}for(let L=0;L<f;L++)for(let F=0;F<h;F++){const D=L*(h+1)+F;_.push(D,D+1,D+h+1,D+1,D+h+2,D+h+1)}const g=new Me;g.setAttribute("position",new Bt(d,3)),g.setAttribute("uv",new Bt(y,2)),g.setIndex(_),g.computeVertexNormals(),lt(n,g,w.karst);const S=w.relief,b=new Yt(.78,1,1,10),M=new Ee(1,10,8),P=new Yt(.5,1.25,1,12),C=(L,F,D,N,T,R,x=0)=>{const k=lt(L,F,S,D,N,.006);return k.scale.set(T,R,T*.5),k.rotation.z=x,k},A=(L,F,D,N)=>{for(const T of[-1,1])V(L,S,N*.07,N*.035,.008,F+T*N*.055,D,.006)},U=(L,F,D,N=0)=>{A(L,F,N,D),C(L,b,F,N+D*.42,D*.13,D*.74),C(L,M,F,N+D*.75,D*.125,D*.045),C(L,M,F,N+D*.9,D*.078,D*.09);const T=V(L,S,D*.045,D*.52,.004,F-D*.01,N+D*.32,.012);T.rotation.z=.5,V(L,S,D*.25,D*.02,.004,F,N+D*.1,.012)},v=(L,F,D,N=0)=>{C(L,P,F,N+D*.36,D*.16,D*.72),C(L,M,F,N+D*.86,D*.07,D*.08),lt(L,M,S,F,N+D*.82,.004).scale.set(D*.13,D*.17,D*.035)},m=(L,F,D,N=0)=>{A(L,F,N,D),C(L,b,F,N+D*.36,D*.16,D*.62),C(L,M,F,N+D*.82,D*.13,D*.14)},E=(L,F,D)=>{for(const R of[-1,1])C(L,b,F+R*D*.06,D*.2,D*.04,D*.4);C(L,P,F,D*.55,D*.13,D*.34),V(L,S,D*.3,D*.07,.006,F,D*.73,.009),C(L,M,F,D*.88,D*.08,D*.09),V(L,S,D*.028,D*.1,.005,F,D*.98,.007);const N=V(L,S,.0032,D*1.1,.004,F+D*.25,0,.008);N.rotation.z=-.04;const T=lt(L,new Yt(D*.16,D*.16,.005,18),S,F-D*.2,D*.52,.012);T.rotation.x=Math.PI/2},I=(L,F,D)=>{V(L,S,F*.7,.01,.012,F*.06,.03,.008);for(const N of[-1,1])V(L,S,.007,.03,.01,F*.06+N*F*.32,0,.008);V(L,S,F*.18,.012,.012,F*.31,.04,.009),C(L,b,-F*.02,.05,.011,F*.4,Math.PI/2),C(L,b,F*.21,.07,.013,.056,-.62),C(L,M,F*.26,.102,.0105,.0115),V(L,S,.012,.007,.006,F*.12,.078,.011),v(L,-F*.38,.078,.004),D&&m(L,F*.43,.05,0)},z=(L,F,D,N)=>{lt(L,M,S,F,D+.014,.006).scale.set(.007,.014,.005);for(const x of[-1,1]){const k=lt(L,M,S,F+x*.009,D+.012,.005);k.scale.set(.0045,.013,.003),k.rotation.z=x*.35}lt(L,M,S,F+N*.002,D+.03,.006).scale.setScalar(.0045);const R=lt(L,new pn(.002,.007,4),S,F+N*.007,D+.03,.006);R.rotation.z=-N*Math.PI/2};r.forEach(([L,F,D,N,T,R])=>{const x=new Ht;x.position.set(L,F,t(L)+-.17-a+.004),x.rotation.y=s(L),n.add(x),V(x,w.karstDark,D+.006,N+.006,.003,0,-.003,0);const k=.006,W=a-.006;for(const J of[-1,1])V(x,w.karstFlat,k,N+k,.003,J*(D/2+k/2),0,W);if(V(x,w.karstFlat,D+k*2,k,.003,0,-k,W),V(x,w.karstFlat,D+k*2,k,.003,0,N,W),R===1){const J=new bs;J.moveTo(-D/2-.012,0),J.lineTo(D/2+.012,0),J.lineTo(0,.03),J.closePath(),lt(x,new Qi(J,{depth:.006,bevelEnabled:!1}),w.karstFlat,0,N+k,W-.003)}if(R===2){const J=lt(x,new Dn(D/2,.005,5,14,Math.PI),w.karstFlat,0,N,W);J.scale.y=.3}if(T==="banquet")I(x,D,!1);else if(T==="banquet2"){I(x,D,!0);for(const J of[-1,1]){const Y=new Ht;Y.position.set(J*(D/2+.002),N+k+.004,W),Y.scale.setScalar(1.6),x.add(Y),z(Y,0,0,-J)}}else if(T==="soldier")E(x,-.005,N*.8);else if(T==="couple")U(x,-.026,N*.86),v(x,.027,N*.76);else if(T==="family")U(x,-.04,N*.86),v(x,.006,N*.76),m(x,.045,N*.44);else if(T==="men")U(x,-.023,N*.86),U(x,.024,N*.8);else if(T==="ibex"){U(x,-.032,N*.86);const J=new Ht;J.position.set(.025,.036,.008),x.add(J),lt(J,M,S,0,0,0).scale.set(.024,.011,.006);for(const Z of[-.015,-.007,.01,.017])V(J,S,.004,.032,.004,Z,-.036,0);const H=V(J,S,.008,.02,.005,.02,.004,0);H.rotation.z=-.5,lt(J,M,S,.029,.022,0).scale.set(.008,.006,.004);for(const Z of[0,1]){const Q=lt(J,new Dn(.014,.002,4,10,2),S,.02,.03,.001+Z*.003);Q.rotation.z=.5}}});for(const[L,F]of[[-.42,0],[.25,3],[.58,4]])mn(n,L,t(L)+-.17+.035,.066,F,1.25);for(const[L,F]of[[-.86,.3],[-.58,.37],[-.3,.4],[.085,.38],[.41,.36],[.8,.3],[-.4,-.08],[.2,-.1],[.6,-.06]]){const D=t(L)+-.17+.006;for(let N=0;N<3;N++)lt(n,new Kr(.014-N*.003,0),w.shrub,L+(N-1)*.012,F-N*.014,D+.004).scale.set(1.3,.8,.6)}for(let L=0;L<16;L++){const F=-.85+L*.11+Math.sin(L*3)*.03,D=t(F)+Math.sin(L*1.9)*.05;Math.hypot(F,D)<.94&&pi(n,F,c(F,D)+.01,D,.02+L%3*.012,L,w.karstFlat)}for(let L=0;L<22;L++){const F=-.88+L*.083,D=t(F)+.2+L%4*.045;Math.hypot(F,D)<.93&&pi(n,F,c(F,D)+.004,D,.016+L%5*.009,L+20,w.karstFlat)}gn(n,["shrub","reed","shrub"],12,[-.9,-.1,.9,.45],c,4,.7,1,(L,F)=>Math.abs(F-t(L))<.14&&Math.abs(F-t(L))>.03),gn(n,["pine","oak","shrub","olive"],20,[-.95,-.95,.95,-.15],c,6,.8,1.2,(L,F)=>F-t(L)<-.34),gn(n,["shrub","shrub","oak"],16,[-.95,.4,.95,.95],c,8,.5,.75,(L,F)=>F-t(L)>.44&&(Math.abs(L)>.62||F-t(L)>.62));for(let L=0;L<22;L++){const F=-.7+L*.065,D=t(F)+.5+Math.sin(L)*.015;Math.hypot(F,D)<.93&&V(n,w.limestone,.022,.004,.014,F,c(F,D)+.001,D,.3*Math.sin(L))}for(const[L,F,D]of[[-.2,.47,1],[-.15,.48,2],[.3,.46,5],[.1,.02,3]])mn(n,L,t(L)+F,c(L,t(L)+F)+.004,D)}function Ev(n){const a=x=>.3+.08*Math.sin(x*3+2.2)+Jt(x*4,5)*.03-.11*Math.exp(-(((x- -.36)/.3)**2)),o=x=>-.44-.04*Math.sin(x*4)-.03*Math.sin(x*9+1),l=x=>.06+Jt(x*5+2,7)*.07,c=(x,k)=>Math.abs(x-.76)<.075&&k>-.21999999999999997&&k<.5,h=xi(n,{water:!0,dry:.65,h:(x,k)=>{let W=.045+Jt(x*2.3+4,k*2.3)*.018+bt(-.1,-.9,k)*.05;return x>-.6&&x<.5&&(W+=(l(x)+Jt(x*6,k*6)*.02)*bt(o(x)+.012,o(x)-.012,k)*bt(-.6,-.4,x)*bt(.5,.3,x)*bt(-.98,-.7,k)),W-=bt(a(x)-.05,a(x)+.2,k)*.22,k>-.16999999999999998&&(W-=(1-bt(.022,.03,Math.abs(x-.76)))*.11),Math.max(W,Oi(x,k,-.36,.58,.175,.11)-.04+Jt(x*14,k*14)*.006)},tint:(x,k,W,J,Y,H)=>{Y.lerp(H.rock,.2),Math.abs(k+.14-.05*Math.sin(x*3))<.022&&W>.02&&Y.lerp(H.earth,.85),k>a(x)-.16&&W>0&&Y.lerp(H.sand,bt(a(x)-.16,a(x)-.06,k)),Math.hypot(x- -.36,k-.58)<.24&&W>0&&Y.copy(H.rock).lerp(H.sand,.25),Math.abs(x-.76)<.04&&k>-.19&&W<.05&&Y.copy(H.rock)}}),f=(x,k,W,J,Y=0)=>V(x,w.dark,.006,.026,.004,k,W,J,Y),u=[[-.29,-.2],[0,-.21],[.29,-.2],[.3,-.02],[.29,.17],[0,.18],[-.29,.17],[-.3,-.02]].map(([x,k])=>[.36+x,.08+k]);Zi(n,w.limestone,u,.095,.024,{tower:"square",tr:.034,th:.14,Y:h,skip:[4]});const d=[[-.19,-.11],[.19,-.11],[.19,.08],[-.19,.08]].map(([x,k])=>[.36+x,.08+k]);Zi(n,w.limestone,d,.125,.024,{tower:"square",tr:.036,th:.185,Y:h});const y=h(.36,.08+.18)-.008;for(let x=0;x<3;x++)f(n,.36-.24+x*.085,y+.07,.08+.188);for(const[x,k]of[u[4],u[6],d[2],d[3]])f(n,x,h(x,k)+.07,k+.036);V(n,w.limestone,.075,.07,.024,.36+.245,y,.08+.176),V(n,w.limestone,.06,.07,.024,.36+.035,y,.08+.178);for(let x=0;x<2;x++)for(let k=0;k<7;k++){const W=lt(n,new Yt(.008,.008,.006,10),w.grey,.09999999999999998+k*.034+x*.017,y+.035+x*.024,.266);W.rotation.x=Math.PI/2}for(let x=0;x<3;x++){const k=lt(n,new Yt(.008,.008,.006,10),w.grey,u[6][0]-.012+x*.012,y+.05+x%2*.02,u[6][1]+.036);k.rotation.x=Math.PI/2}const _=new Ht;_.position.set(.36+.14,y,.08+.178),_.scale.setScalar(1.25),n.add(_),Ue(_,w.honey,.13,.115,.045,[{x:0,w:.06,h:.085}],0,0,0),V(_,w.dark,.058,.082,.004,0,0,-.018),ti(_,w.marble,.06,.085,.008,0,0,.024,0,9);for(const x of[-1,1])V(_,w.marble,.014,.1,.008,x*.056,0,.024);V(_,w.weathered,.14,.008,.036,0,.115,.004),V(_,w.weathered,.07,.012,.004,0,.098,.0245);for(let x=0;x<3;x++)V(_,w.dark,.06,.0012,.001,0,.1005+x*.0035,.027);const p=h(.36,.08)-.006;for(const[x,k,W]of[[-.07,-.03,.08],[.09,.02,.06]])V(n,w.limestone,W,.05,.045,.36+x,p,.08+k),jr(n,w.tiles,.05,W+.008,.016,.36+x,p+.05,.08+k,Math.PI/2),Un(n,w.limestone,.02,.05,.36+x+W/2,p,.08+k,-Math.PI/2);for(let x=0;x<7;x++){const k=(x+1)/11,W=.36-.3,J=a(W)+.03,Y=W+(-.36+.2-W)*k,H=J+(.58-.06-J)*k;pi(n,Y,x>3?-.014:-.004,H,.018+x%3*.006,x,w.karstFlat)}const g=[-.36-.13,.58+.13],S=.26,b=.028,M=[g,[g[0]+S/2,g[1]],[g[0]+S,g[1]]];for(let x=1;x<=4;x++){const k=-x*Math.PI/8;M.push([g[0]+Math.cos(k)*S,g[1]+Math.sin(k)*S])}M.push([g[0],g[1]-S*.5]),Zi(n,w.honey,M,.08,.024,{tower:!1,Y:()=>b+.01}),M.forEach(([x,k],W)=>{const J=[.12,.1,.18,.11,.12,.1,.145,.11][W];if(W<3){V(n,w.honey,.064,J,.064,x,b,k);for(const[Y,H]of[[-1,-1],[1,-1],[-1,1],[1,1],[0,1],[0,-1],[1,0],[-1,0]])V(n,w.honey,.012,.008,.012,x+Y*.026,b+J,k+H*.026);f(n,x,b+J*.6,k+.033)}else{Ji(n,w.honey,.032,.035,J,x,b,k,14);for(let Y=0;Y<8;Y++){const H=Y/8*6.283;V(n,w.honey,.011,.008,.008,x+Math.cos(H)*.028,b+J,k+Math.sin(H)*.028,-H+Math.PI/2)}}}),Ue(n,w.honey,.07,.08,.026,[{x:0,w:.03,h:.05}],(M[5][0]+M[6][0])/2,b,(M[5][1]+M[6][1])/2,Math.PI*.1),li(n,w.honeyDS,.04,.07,.028,-.36-.02,b+.012,.58+.02,.4,2);for(let x=0;x<12;x++){const k=x/12*6.283,W=-.36+Math.cos(k)*.215,J=.58+Math.sin(k)*.2;Math.hypot(W,J)<.9&&lt(n,new Ms(.016+x%3*.007,0),w.karstFlat,W,0,J)}const P=[],C=[],A=[],U=60,v=-.52,m=.42;for(let x=0;x<=4;x++)for(let k=0;k<=U;k++){const W=v+k*(m-v)/U,J=h(W,o(W)+.05)-.012,Y=J+(h(W,o(W)-.03)+.004-J)*Math.min(1,k/8,(U-k)/8);P.push(W,J+(Y-J)*x/4,o(W)+.018+(Jt(W*9,x*2)-.5)*.036-x*.005-(1-Math.min(1,k/8,(U-k)/8))*.02),C.push(W*1.3,x*.04)}for(let x=0;x<4;x++)for(let k=0;k<U;k++){const W=x*(U+1)+k;A.push(W,W+1,W+U+1,W+1,W+U+2,W+U+1)}const E=new Me;E.setAttribute("position",new Bt(P,3)),E.setAttribute("uv",new Bt(C,2)),E.setIndex(A),E.computeVertexNormals(),lt(n,E,w.karst),[[-.4,.024,.032],[-.29,.03,.04],[-.2,.02,.03],[.02,.034,.044],[.12,.022,.032],[.27,.028,.038]].forEach(([x,k,W],J)=>{const Y=o(x)+.021,H=h(x,Y+.04)+.004+J%2*.012;if(V(n,w.dark,k,W,.004,x,H,Y),V(n,w.karstFlat,k+.012,.005,.008,x,H+W,Y+.002),J%3===1){const Z=new bs;Z.moveTo(-k/2-.008,0),Z.lineTo(k/2+.008,0),Z.lineTo(0,.014),Z.closePath(),lt(n,new Qi(Z,{depth:.006,bevelEnabled:!1}),w.karstFlat,x,H+W+.005,Y-.001)}});{const k=o(-.09)+.022,W=h(-.09,k+.04)+.008;V(n,w.karstDark,.05,.06,.003,-.09,W,k),lt(n,new Dn(.025,.004,4,10,Math.PI),w.karstFlat,-.09,W+.06,k+.002);const J=lt(n,new Zr(.008,.026,3,8),w.relief,-.09,W+.024,k+.004);J.scale.z=.5,lt(n,new Ee(.007,8,6),w.relief,-.09,W+.05,k+.004).scale.z=.6;const Y=V(n,w.relief,.004,.02,.003,-.09+.011,W+.038,k+.004);Y.rotation.z=-.7;const H=V(n,w.relief,.003,.026,.002,-.09+.02,W+.05,k+.004);H.rotation.z=.3}for(let x=0;x<12;x++){const k=v+.04+x*.078,W=o(k)+.05+x%3*.012;pi(n,k,h(k,W)+.004,W,.014+x%4*.006,x,w.karstFlat)}for(const x of[v+.01,m-.01])pi(n,x,h(x,o(x)+.03)+.015,o(x)+.02,.045,x*9,w.karstFlat);for(let x=0;x<9;x++){const k=v+.09+x*.092;V(n,w.karstFlat,.06+x%3*.02,.006,.022,k,h(k,o(k)+.05)+.03+x%3*.018,o(k)+.012,x%2?.05:-.05)}let I=0;for(let x=0;x<15;x++)for(const k of[-1,1]){const W=-.82+x*.118+(k>0?.05:0),J=-.14+.05*Math.sin(W*3)+k*(.06+x%3*.012);if(I++,Math.hypot(W,J)>.93||Math.abs(W-.36)<.43&&J>.08-.3||c(W,J))continue;const Y=lr(n,W,J,h(W,J)-.004,.8,I%4*.25-.3+(k>0?0:Math.PI));I%5===0&&(Y.children[2].rotation.z=.5,Y.children[2].position.x=.02)}const z=.64,L=-.47,F=h(z,L)-.008,D=new Ht;D.position.set(z,F,L),D.rotation.y=.1,D.scale.setScalar(.85),n.add(D),Ue(D,w.limestone,.3,.13,.018,[-.1,-.035,.03,.095].map(x=>({x,w:.03,h:.1,sill:.05})),0,0,-.09),V(D,w.limestone,.22,.05,.018,-.04,0,.09),V(D,w.limestone,.018,.07,.18,-.15,0,0),Un(D,w.limestone,.05,.11,.15,0,0,-Math.PI/2),lt(D,new Ee(.05,12,8,0,Math.PI,0,Math.PI/2),w.limestoneDS,.15,.11,0);for(let x=0;x<5;x++)for(const k of[-1,1])ze(D,-.11+x*.05,k*.035,(x+(k>0?1:0))%3===0?.09:.025,{r:.007,broken:(x+(k>0?1:0))%3!==0,shaft:w.weathered});Qe(D,0,.15,6,.2,.018,w.limestone,6);const N=new Ht;N.position.set(.76,h(.76,-.24)-.008,-.24),N.rotation.y=-.1,n.add(N),Un(N,w.limestone,.04,.09,.07,0,0,-Math.PI/2),V(N,w.limestone,.14,.05,.014,0,0,-.045),V(N,w.limestone,.1,.03,.014,-.02,0,.045);const T=or(w.sail,.13);T.position.set(.26,0,.72),T.rotation.y=.35,n.add(T);const R=or(w.white,.075);R.position.set(-.72,0,.46),R.rotation.y=-.5,n.add(R),gn(n,["shrub","shrub","olive","oak"],26,[-.95,-.95,.95,.2],h,15,.55,.8,(x,k)=>h(x,k)>.05&&Math.abs(k+.14-.05*Math.sin(x*3))>.13&&!(Math.abs(x-.36)<.42&&Math.abs(k-.08)<.3)&&Math.hypot(x-z,k-L)>.24&&!(x>-.56&&x<.46&&k<o(x)+.12&&k>o(x)-.03)),Ne(n,"palm",-.2,.2,.9,h(-.2,.2),3);for(const[x,k,W]of[[-.3,.27,0],[-.22,.3,1],[-.5,.25,2],[-.3,-.13,3],[0,-.12,4],[.36+.14,.08+.24,5],[-.36+.02,.58-.02,2],[-.2,o(-.2)+.07,1]])mn(n,x,k,Math.max(h(x,k),0)+.004,W,.9)}const uh={soli:gv,elaiussa:_v,tarsus:vv,seleucia:yv,diocaesarea:xv,anemurium:Mv,kanlidivane:bv,cennet:Sv,adamkayalar:wv,korykos:Ev};function Tv(n){const t=new Ht;return(uh[n]||uh.soli)(t),mv(t)}const dh={soliWiki:{label:"Wikipedia — Soli, Cilicia",url:"https://en.wikipedia.org/wiki/Soli,_Cilicia"},soliHDN:{label:"Hürriyet Daily News — Roman streets of ancient Soli gradually unearthed",url:"https://hurriyetdailynews.com/roman-streets-of-ancient-soli-gradually-unearthed--85266"},soliHarbor:{label:"Hürriyet Daily News — Ancient harbor comes to surface",url:"https://hurriyetdailynews.com/ancient-harbor-comes-to-surface-175934"},soliDergi:{label:"DergiPark article on the Soli-Pompeiopolis colonnaded street",url:"https://dergipark.org.tr/en/download/article-file/316007"},elaiussaSapienza:{label:"Sapienza Università di Roma — Elaiussa Sebaste: the theatre",url:"https://www.antichita.uniroma1.it/eng/node/521"},elaiussaWiki:{label:"Wikipedia — Elaiussa Sebaste",url:"https://en.wikipedia.org/wiki/Elaiussa_Sebaste"},elaiussaVici:{label:"Vici.org — Elaiussa Sebaste theatre",url:"https://vici.org/vici/17238/"},kanliWiki:{label:"Wikipedia — Kanlıdivane",url:"https://en.wikipedia.org/wiki/Kanl%C4%B1divane"},kanliMuseum:{label:"Turkish Museums — Kanlı Divane (Kanytelleis) Archaeological Site",url:"https://turkishmuseums.com/museum/detail/2163-mersin-kanli-divane-kanytelleis-archaeological-site/2163/4"},corycusWiki:{label:"Wikipedia — Corycus",url:"https://en.wikipedia.org/wiki/Corycus"},cennetWiki:{label:"Wikipedia — Cennet and Cehennem",url:"https://en.wikipedia.org/wiki/Cennet_and_Cehennem"},strabo:{label:"Strabo, Geography 14.5.5 (Perseus)",url:"http://www.perseus.tufts.edu/hopper/text?doc=Perseus:text:1999.01.0198:book=14:chapter=5:section=5"},jupiterWiki:{label:"Wikipedia — Temple of Jupiter (Silifke)",url:"https://en.wikipedia.org/wiki/Temple_of_Jupiter_(Silifke)"},silifkeTPG:{label:'Turkey Photo Guide — Silifke (the "Temple of Storks")',url:"https://turkeyphotoguide.com/silifke"},cennetShow:{label:"Showcaves.com — Cennet ve Cehennem Çökükleri",url:"https://showcaves.com/english/tr/showcaves/CennetCehennem.html"},cennetHDN:{label:"Hürriyet Daily News — Cennet and Cehennem caves",url:"https://www.hurriyetdailynews.com/cennet-and-cehennem-caves-49099"},corycusBattle:{label:"Wikipedia — Battle of Corycus (fought off Ionia, not here)",url:"https://en.wikipedia.org/wiki/Battle_of_Corycus"},silifkeWiki:{label:"Wikipedia — Silifke",url:"https://en.wikipedia.org/wiki/Silifke"},seleuciaBrit:{label:"Britannica — Seleucia Tracheotis",url:"https://www.britannica.com/place/Seleucia-Tracheotis"},uzunWiki:{label:"Wikipedia — Uzuncaburç (Diokaisareia)",url:"https://en.wikipedia.org/wiki/Uzuncabur%C3%A7_(Diokaisareia)"},uzunMuseum:{label:"Turkish Museums — Uzuncaburç (Diokaisareia) Archaeological Site",url:"https://turkishmuseums.com/museum/detail/2167-mersin-uzuncaburc-diokaisareia-archaeological-site/2167/4"},uzunLivius:{label:"Livius.org — Olba / Diocaesarea",url:"https://livius.org/articles/place/olba-diocaesarea"},anemWiki:{label:"Wikipedia — Anemurium",url:"https://en.wikipedia.org/wiki/Anemurium"},anemMuseum:{label:"Turkish Museums — Anemurium Archaeological Site",url:"https://turkishmuseums.com/museum/detail/2158-mersin-anamorium-archaeological-site/2158/4"},anemLivius:{label:"Livius.org — Anemurium (Anamur)",url:"https://livius.org/articles/place/anemurium-anamur"},tarsusWiki:{label:"Wikipedia — Tarsus, Mersin",url:"https://en.wikipedia.org/wiki/Tarsus,_Mersin"},tarsusKTB:{label:"T.C. Ministry of Culture and Tourism — Tarsus: where to visit",url:"https://ktb.gov.tr/EN-36260/where-to-visit.html"},donuktas:{label:"Wikipedia — Donuktaş",url:"https://en.wikipedia.org/wiki/Donukta%C5%9F"},tarsusWHE:{label:"World History Encyclopedia — Tarsus",url:"https://www.worldhistory.org/Tarsus"},adamSabah:{label:'Daily Sabah — Ancient site "Men of Rock" in Anatolia unveils unique reliefs',url:"https://www.dailysabah.com/arts/ancient-site-men-of-rock-in-anatolia-unveils-unique-reliefs/news"},adamWiki:{label:"Wikipedia — Adamkayalar",url:"https://en.wikipedia.org/wiki/Adamkayalar"}},Nn=[{id:"anemurium",model:"anemurium",name:"Anemurium",modern:"Anamur · Eski Anamur",lat:36.0244,lon:32.8031,tagline:"A whole Roman town left standing on the southern tip of Anatolia.",era:["Roman Imperial","1st–4th c. AD","abandoned c. 7th c."],body:["Anemurium sits on Cape Anamur, the southernmost point of Asia Minor, looking straight across to Cyprus. Because nobody ever built a modern town on top of it, the city survives as streets of roofless but still-vaulted buildings climbing from the beach to the slope behind.","Its heyday was the 2nd–3rd centuries AD. It faded in late antiquity and was abandoned around the 7th century, the time of the Arab raids on this coast."],look:["A large theatre and, facing it, a small roofed odeon that doubled as the council chamber","Three large public baths and one small one; the best-preserved has a mosaic-floored palaestra","A necropolis of roughly 350 house-like barrel-vaulted tombs, 1st–4th c. AD, some still painted inside"],evidence:"Excavated from the 1960s by Canadian teams (Elisabeth Alföldi-Rosenbaum, then James Russell, University of British Columbia); the first final-publication volume appeared in 2021. On Türkiye’s UNESCO Tentative List track.",fun:'The name comes from Greek anemos — "wind". Stand on the cape and you will understand why.',sources:["anemWiki","anemMuseum","anemLivius"]},{id:"seleucia",model:"seleucia",name:"Seleucia ad Calycadnum",modern:"Silifke",lat:36.3775,lon:33.929,tagline:"A lone Corinthian column, a stork’s nest, and a bridge signed by Vespasian’s governor.",era:["Founded c. 296–280 BC","Roman bridge AD 77–78","Temple 2nd c. AD"],body:["Seleucus I Nicator founded the city on the Calycadnus (Göksu) river and moved in the people of the nearby port of Holmi. Under Rome it remained one of the main cities of Rough Cilicia.","Modern Silifke covers most of it, but the Roman city still pokes through: a 2nd-century temple usually called the Temple of Jupiter (originally 8 × 14 Corinthian columns, later a church), a rock-cut cistern (Tekir Ambarı), a rock-cut necropolis, and a river crossing first bridged in stone in AD 77–78 by the governor L. Octavius Memor."],look:["The Temple of Jupiter: its podium and the single column that survives, in the middle of town","The stone bridge over the Göksu — heavily rebuilt, but on Roman foundations","Aya Thekla, the cave church of St Thecla, just south of town"],evidence:"The bridge’s date and builder come from its dedicatory inscription. The temple’s dedication to Jupiter/Zeus is traditional rather than proven by an inscription, and one source argues for an earlier, Seleucid origin.",fun:"Storks nest on the surviving column, so locals also call it the Temple of Storks.",sources:["silifkeWiki","jupiterWiki","silifkeTPG","seleuciaBrit"]},{id:"diocaesarea",model:"diocaesarea",name:"Diocaesarea",modern:"Uzuncaburç",lat:36.5808,lon:33.9253,tagline:"A temple city at 1,200 m in the Taurus, around a Hellenistic temple of Zeus.",era:["Hellenistic sanctuary","A city under Vespasian","Theatre AD 161–169"],body:["This was the sanctuary of Zeus Olbios, ruled by the priest-kings of Olba. Under Vespasian (AD 69–79) it was separated from Olba as a city in its own right, and took the name Diocaesarea. The Roman town was then laid out around the old temple: colonnaded street, ceremonial gate, theatre, fountain house.",'The Turkish name means "tall tower" after the tall Hellenistic tower that still stands over the village.'],look:["Temple of Zeus Olbios — Hellenistic, peripteral, some thirty columns still upright; later turned into a church","Temple of Tyche (1st c. AD), a gift to the city from Oppius and Kyria, whose tall columns still carry part of the architrave","The theatre (reign of Marcus Aurelius and Lucius Verus, c. 2,500 seats) and the monumental gate"],evidence:"Dating of the Zeus temple to the early Hellenistic period (sometimes attributed to Seleucus I) rests on architectural style; the theatre is dated by its inscription. The 2,500-seat figure is a guidebook estimate. City status is dated to Vespasian’s reign (AD 69–79), with no exact year; the temple became a church in the 5th century.",fun:"The paved road down to Seleucia still has Roman tomb-monuments standing beside it at Demircili (ancient Imbriogon).",sources:["uzunWiki","uzunMuseum","uzunLivius"]},{id:"cennet",model:"cennet",view:{polar:42,az:Math.PI+.25},name:"Corycian Cave",modern:'Cennet & Cehennem ("Heaven & Hell")',lat:36.4525,lon:34.1056,tagline:"Two giant sinkholes where Zeus is said to have jailed the monster Typhon.",era:["Sacred since Hellenistic times","Roman sanctuary","Chapel 5th c. AD"],body:['Cennet ("Heaven") is a collapsed cavern 250 × 110 m across and about 70 m deep; a short walk away Cehennem ("Hell") is a sheer-sided shaft 70 × 50 m wide and 128 m deep that cannot be entered at all.',"Ancient writers knew it as the Corycian Cave. Strabo says the best saffron in the world grew here; Pomponius Mela describes the descent in loving detail. Myth made Cehennem the temporary prison of Typhon before Zeus buried him under Etna."],look:['The "temple-church" a few metres from the southern rim: a temple of Zeus turned into a church in the 5th century',"About 300 steps down into Cennet to the 5th-century chapel of the Virgin Mary at the cave mouth","The roar of an underground river inside the cave"],evidence:"Sinkhole dimensions are modern survey figures. The identification with the Corycian Cave of Strabo (14.5.5) and Mela is generally accepted.",fun:'Pindar and Aeschylus both mention "the Cilician cave" as Typhon’s lair — this is a 2,500-year-old tourist attraction.',sources:["cennetWiki","cennetShow","cennetHDN","corycusWiki","strabo"]},{id:"adamkayalar",model:"adamkayalar",view:{polar:68,az:.25},name:"Adamkayalar",modern:'"Man-rocks" · Şeytan Deresi canyon',lat:36.525,lon:34.0542,tagline:"Roman-era ancestors carved into a canyon wall, watching the gorge for 1,800 years.",era:["Probably 2nd c. AD"],body:['High on the cliff of the Şeytan Deresi ("Devil’s Creek") gorge, about 7 km inland from Kızkalesi, nine niches hold eighteen carved figures: eleven men, four women, two children and an ibex. Some recline as at a funeral banquet, others are shown as soldiers; two Roman eagles sit on a pediment.',"Little is recorded about who they were. They are usually read as funerary memorials to local notables, carved over several generations."],look:["The banquet scenes — the dead reclining on couches, family beside them","The standing soldier figures","The view down the canyon (the path is steep and exposed)"],evidence:"The 2nd-century date is a stylistic estimate. In 2019 treasure hunters badly damaged several figures, believing gold was hidden inside.",fun:'Locals simply called them "the man rocks". The name stuck.',sources:["adamWiki","adamSabah"]},{id:"korykos",model:"korykos",name:"Corycus",modern:"Kızkalesi",lat:36.4653,lon:34.1542,tagline:"Rome’s anti-pirate naval base — later crowned by a castle floating on the sea.",era:["Roman port & mint","Imperial fleet station","Castles 12th–13th c."],body:["Corycus was the harbour town for this stretch of coast. Under Rome it kept its own laws and struck its own coins, and the emperors stationed warships here to watch for pirates. The Corycian Cave, an hour’s walk west, took its name from the town.",'What you see first today is medieval: the land castle and the famous sea castle (Kızkalesi, "Maiden’s Castle"), re-fortified by the Byzantines in the early 12th century and then held by Armenian Cilicia. But the land castle is literally built out of the Roman city — column drums and inscribed blocks are everywhere in its walls.'],look:["A Roman arch/gate reused in the land castle","The huge rock-cut and sarcophagus necropolis running inland","Early Christian basilicas north-east of the castle"],evidence:"The castles are medieval, not Roman — shown on the model because they are the landmark, and labelled as such. Roman-period remains listed here follow published site descriptions. (The naval Battle of Corycus of 191 BC, sometimes placed here, was fought off the other Corycus, in Ionia.)",fun:"The legend: a king, told his daughter would die of a snakebite, built her a castle in the sea. The snake arrived in a basket of grapes.",sources:["corycusWiki","corycusBattle"]},{id:"elaiussa",model:"elaiussa",name:"Elaiussa Sebaste",modern:"Ayaş",lat:36.4836,lon:34.1737,tagline:"The Roman theatre on the coast: 2,300 seats above an island city named for Augustus.",era:["Founded 2nd c. BC","Refounded under Augustus","Theatre c. AD 100–169"],body:['Elaiussa ("olive-town") began on a small island joined to the shore by a sandbar. King Archelaus of Cappadocia, a client of Augustus, built a new city here and renamed it Sebaste — Greek for "Augusta". It boomed after the coast was secured in the 70s AD.',"The theatre is cut into the hill directly above the coast road. Sapienza University of Rome excavated it in 1995–1999: construction began in the first half of the 2nd century and was finished under Marcus Aurelius and Lucius Verus (161–169). The plan is a little more than a half-circle, 55 m across, for about 2,300 spectators. By about AD 300 it was already partly in ruins."],look:["The theatre, with the agora and its Byzantine church right across the road","A promontory temple that once had 6 × 12 columns","Aqueducts that brought water from the Lamos river, and a necropolis of around a hundred monumental tombs"],evidence:"Dates, diameter and capacity are from the Sapienza excavation (E. Equini Schneider; theatre published by E. Borgia). The capacity is a reconstruction estimate.",fun:"The ancient island is now a peninsula — the harbour silted up and the sea retreated.",sources:["elaiussaSapienza","elaiussaWiki","elaiussaVici"]},{id:"kanlidivane",model:"kanlidivane",view:{polar:46},name:"Canytelis",modern:"Kanlıdivane",lat:36.5256,lon:34.1792,tagline:"A town built around the lip of a sinkhole some 70 metres deep.",era:["Olban tower, Hellenistic","Roman tombs","Rebuilt as Neapolis, 5th c. AD"],body:['Canytelis belonged to the priest-kingdom of Olba. Its oldest building, a tower on the south-west rim, carries an inscription read as "Built by Teukros, the son of priest king Tarkyaris of Olba, for Zeus". Under Rome the place grew into a small town; under Theodosius II it was rebuilt as a Christian centre called Neapolis.',"Everything is arranged around the sinkhole — about 130 m on its long axis by one account, 170 × 200 m by another, and 60–70 m deep. Reliefs of local families are carved into its inner walls."],look:["The Olban tower and the roofless basilicas standing on the rim","The temple-tomb that a woman named Aba built for her husband and sons","Rock reliefs inside the sinkhole, and a necropolis of sarcophagi to the north"],evidence:"Dimensions follow published descriptions (depth is given as 60 m or 70 m). The tower dedication and the Aba tomb are known from their inscriptions.",fun:'Kanlıdivane roughly means "bloody place of madness" — folklore says criminals were thrown to wild animals in the pit. The red-stained rock is the likelier culprit.',sources:["kanliWiki","kanliMuseum"]},{id:"soli",model:"soli",name:"Soli-Pompeiopolis",modern:"Viranşehir, Mezitli (Mersin)",lat:36.7419,lon:34.54,tagline:"Pompey’s city for retired pirates, with a colonnaded avenue marching to the sea.",era:["Greek colony c. 700 BC","Refounded by Pompey 67 BC","Colonnade 2nd–3rd c. AD"],body:["Soli was an old Greek colony, emptied by Tigranes of Armenia in 83 BC. In 67 BC Pompey, fresh from sweeping the pirates off the sea, resettled some of the surrendered pirates here and gave the city his own name.","Its showpiece is the colonnaded street running from the city to the harbour: 14.5 m wide, with some 200 Corinthian columns in two rows. Published lengths vary (350–450 m), and so does the count of columns standing — roughly 33 to 47, because excavators keep re-erecting them. Brackets on the shafts once carried statues of emperors and local worthies."],look:["The colonnade — look for the consoles halfway up the columns","The Roman-concrete harbour moles, renovated around AD 130","Soli Höyük, the mound with layers back to the Bronze Age"],evidence:"Excavated since 1999 under Remzi Yağcı (Dokuz Eylül University). Harbour dating is from the ROMACONS concrete-coring project. The city was levelled by an earthquake in AD 525.",fun:'The word "solecism" — a grammatical blunder — comes from Soli, whose colonists were mocked for their mangled Greek.',sources:["soliWiki","soliHDN","soliDergi","soliHarbor"]},{id:"tarsus",model:"tarsus",name:"Tarsus",modern:"Tarsus",lat:36.9167,lon:34.89,tagline:"Capital of Roman Cilicia: Cleopatra sailed in, St Paul was born here, an emperor was buried here.",era:["Roman capital from 67 BC","Antony & Cleopatra 41 BC","Julian buried AD 363"],body:['Pompey made Tarsus the capital of the province of Cilicia in 67 BC. In 41 BC Cleopatra sailed up the Cydnus river to meet Mark Antony here. Paul the Apostle called himself "a citizen of no mean city" — this one. The emperor Julian was buried outside its walls in 363.',"The Roman city lies metres under the modern one, so it appears in windows: a basalt-paved street with colonnade bases in the town centre, the giant concrete core of a temple (Donuktaş), a bath wall, and the one surviving gate."],look:['"Cleopatra’s Gate" — the only city gate still standing, heavily restored (its fabric is probably later than Cleopatra)',"The excavated Roman street in the centre, and Donuktaş, a huge 2nd-century temple platform","North of town at Sağlıklı: about 3 km of intact paved Roman road, c. 3 m wide, heading for the Cilician Gates"],evidence:'The gate’s present form has been dated to the Byzantine or Abbasid period on an older site. Donuktaş was long called the "tomb of Sardanapalus"; excavation identified it as a Roman temple. Road figures are from the Ministry of Culture and Tourism.',fun:"Plutarch says Cleopatra arrived in a barge with a gilded stern, purple sails and silver oars, dressed as Aphrodite. Antony never stood a chance.",sources:["tarsusWiki","tarsusKTB","donuktas","tarsusWHE"]}],Av=[{name:"Coastal road",pts:[[32.803,36.03],[32.96,36.105],[33.32,36.15],[33.66,36.2],[33.83,36.275],[33.885,36.325],[33.929,36.3775],[34.07,36.425],[34.11,36.447],[34.1542,36.467],[34.1737,36.485],[34.245,36.56],[34.31,36.612],[34.54,36.748],[34.63,36.805],[34.89,36.9167]]},{name:"Seleucia – Diocaesarea",pts:[[33.929,36.3775],[33.935,36.45],[33.9253,36.5808]]},{name:"Via Tauri to the Cilician Gates",pts:[[34.89,36.9167],[34.8,37.03],[34.79,37.15],[34.78,37.285]]}],Cv="Welcome to Cilicia — the coast the Romans won from the pirates. From the windy cape of Anemurium to Tarsus, where Cleopatra met Antony, ten ancient places are waiting. Choose a beacon, and let's go.",Rv="Anemurium, the windy cape. A whole Roman town stands here, roofless, at the southern tip of Anatolia — baths, a theatre, and hundreds of vaulted tombs — staring across the water at Cyprus.",Pv="Seleucia on the Calycadnus. One Corinthian column of a Roman temple still rises over Silifke, and the river is crossed where Vespasian's governor built his stone bridge in the year seventy-seven.",Dv="Diocaesarea, high in the Taurus. Around the ancient temple of Zeus Olbios, Rome laid out a city of gates, colonnades and a theatre, twelve hundred metres above the sea.",Lv="The Corycian Cave. Two vast sinkholes the locals call Heaven and Hell. Here, the myth says, Zeus imprisoned the monster Typhon — and here, Strabo says, grew the finest saffron in the world.",kv="Adamkayalar — the man rocks. Eighteen figures carved into a canyon wall some eighteen centuries ago: soldiers, families at a funeral banquet, and one ibex. All nameless. All still watching.",Iv="Corycus. Rome kept a fleet here to hunt pirates. The castle floating offshore is medieval — but look closely at the walls on land: they are built from the bones of the Roman city.",Uv="Elaiussa Sebaste, the olive town renamed for Augustus. Its theatre, finished under Marcus Aurelius, seated some twenty-three hundred people on the hillside above the harbour.",Nv="Canytelis. A town wrapped around the rim of a sinkhole some seventy metres deep, with a tower for Zeus, the tomb of a woman called Aba, and families carved into the cliff below.",Ov="Soli Pompeiopolis. Pompey the Great settled his defeated pirates here and gave the city his name. Two hundred Corinthian columns once lined its avenue down to the harbour. Some forty stand again.",Fv="Tarsus, capital of Roman Cilicia. Cleopatra sailed up the river to meet Mark Antony here. Saint Paul was born here. And the emperor Julian was buried here, just outside the city walls.",zv={intro:Cv,anemurium:Rv,seleucia:Pv,diocaesarea:Dv,cennet:Lv,adamkayalar:kv,korykos:Iv,elaiussa:Uv,kanlidivane:Nv,soli:Ov,tarsus:Fv},Bv="Kilikya’ya hoş geldiniz — Romalıların korsanlardan aldığı kıyıya. Rüzgârlı Anemurium burnundan, Kleopatra’nın Antonius’la buluştuğu Tarsus’a kadar on antik yer sizi bekliyor. Haydi, başlayalım.",Hv="Anemurium, rüzgârlı burun. Anadolu’nun en güney ucunda koca bir Roma kenti çatısız ama ayakta duruyor — hamamlar, bir tiyatro ve yüzlerce tonozlu mezar — denizin ötesindeki Kıbrıs’a bakarak.",Gv="Kalykadnos kıyısındaki Seleukeia. Bir Roma tapınağının tek Korint sütunu hâlâ Silifke’nin üzerinde yükseliyor; ırmak ise Vespasianus’un valisinin yetmiş yedi yılında taş köprüsünü kurduğu yerden aşılıyor.",Vv="Diokaisareia, Toroslar’ın yükseklerinde. Roma, antik Zeus Olbios tapınağının çevresine, denizden bin iki yüz metre yükseğe kapıları, sütunlu caddeleri ve tiyatrosuyla bir kent kurdu.",Wv="Korykos Mağarası. Yöre halkının Cennet ve Cehennem dediği iki dev obruk. Söylenceye göre Zeus canavar Typhon’u burada hapsetti; Strabon’a göre de dünyanın en iyi safranı burada yetişirdi.",Xv="Adamkayalar. On sekiz yüzyıl kadar önce bir kanyon duvarına oyulmuş on sekiz figür: askerler, ölü yemeğindeki aileler ve bir dağ keçisi. Hepsi adsız. Hepsi hâlâ nöbette.",Yv="Korykos. Roma, korsan avlamak için burada bir donanma tutardı. Açıkta yüzen kale Orta Çağ’dan kalma — ama karadaki duvarlara yakından bakın: Roma kentinin kemikleriyle örülmüş.",qv="Elaiussa Sebaste, Augustus’un adını alan zeytin kenti. Marcus Aurelius döneminde tamamlanan tiyatrosu, limanın üstündeki yamaçta yaklaşık iki bin üç yüz kişiyi ağırlardı.",Zv="Kanytelis. Yaklaşık yetmiş metre derinliğindeki bir obruğun kıyısına sarılmış bir kent; Zeus için bir kule, Aba adlı bir kadının mezarı ve aşağıdaki kayaya oyulmuş aileler.",Kv="Soli Pompeiopolis. Büyük Pompeius yenilgiye uğrattığı korsanları buraya yerleştirdi ve kente kendi adını verdi. Limana inen caddesinde bir zamanlar iki yüz Korint sütunu sıralanırdı. Kırk kadarı yeniden ayakta.",jv="Tarsus, Roma Kilikyası’nın başkenti. Kleopatra, Marcus Antonius’la buluşmak için ırmaktan yukarı yelken açtı. Aziz Pavlus burada doğdu. İmparator Iulianus da buraya, kent surlarının hemen dışına gömüldü.",$v={intro:Bv,anemurium:Hv,seleucia:Gv,diocaesarea:Vv,cennet:Wv,adamkayalar:Xv,korykos:Yv,elaiussa:qv,kanlidivane:Zv,soli:Kv,tarsus:jv},Jv={en:zv,tr:$v},fu={en:{sub:"Roman Mersin · ten places",introEyebrow:"A 3D map of Roman Mersin",introText:"Pirates, Cleopatra, a city for Pompey and a cave for a monster. Ten Roman places on the real landscape of Türkiye’s Mediterranean coast.",beginSound:"Start the tour with sound",beginQuiet:"Start the tour quietly",loading:"Raising the Taurus mountains…",hint:"A guided tour starts first — stop it any time to explore. Drag to orbit · scroll to zoom · right-drag to pan · click a beacon",hintTouch:"A guided tour starts first — stop it any time to explore. Drag to orbit · pinch to zoom · two fingers to pan · tap a beacon",tour:"▶ Tour",stopTour:"■ Stop tour",sound:"Sound",day:"☀ Day",dusk:"☾ Golden hour",roads:"Roads",overview:"Overview",map:"Map",tTour:"Guided tour (T)",tSound:"Sound & narration (M)",tDusk:"Golden hour (G)",tRoads:"Roman roads (R)",tHome:"Whole map (H)",tLang:"Türkçe (L)",langBtn:"TR",langIntro:"Türkçe",prev:"‹ Prev",next:"Next ›",close:"Close",prevAria:"Previous site",nextAria:"Next site",siteOf:(n,t)=>`Site ${n} of ${t}`,today:"today",listen:"♪ Listen",lookFor:"Look for",howWeKnow:"How we know",sources:"Sources",openMap:"open map",legend:"Real elevation (SRTM), ×2.6 vertical",legendLong:". Monuments are stylised miniatures, not to scale. Roads are schematic; rivers follow DEM valley floors",north:"N",northTitle:"North",sitesAria:"Sites",controlsAria:"Map controls",canvasAria:"3D map of Roman-era Mersin province",noWebgl:"This map needs WebGL, which this browser or device could not start.",lost:"The 3D view was interrupted — reload the page to continue.",loadFail:"Could not load the map: ",docTitle:"Roman Mersin — a 3D map of ancient Cilicia"},tr:{sub:"Roma Dönemi Mersin · on yer",introEyebrow:"Roma Dönemi Mersin’in 3B haritası",introText:"Korsanlar, Kleopatra, Pompeius’un kenti ve bir canavarın mağarası. Türkiye’nin Akdeniz kıyısının gerçek arazisi üzerinde on Roma yerleşimi.",beginSound:"Turu sesli başlat",beginQuiet:"Turu sessiz başlat",loading:"Toroslar yükseliyor…",hint:"Önce rehberli tur başlar; dilediğiniz an durdurup kendiniz gezebilirsiniz. Sürükleyerek döndürün · kaydırarak yakınlaşın · sağ tuşla sürükleyerek kaydırın · bir işarete tıklayın",hintTouch:"Önce rehberli tur başlar; dilediğiniz an durdurup kendiniz gezebilirsiniz. Sürükleyerek döndürün · iki parmakla yakınlaşın ve kaydırın · bir işarete dokunun",tour:"▶ Tur",stopTour:"■ Turu durdur",sound:"Ses",day:"☀ Gündüz",dusk:"☾ Gün batımı",roads:"Yollar",overview:"Genel görünüm",map:"Harita",tTour:"Rehberli tur (T)",tSound:"Ses ve anlatım (M)",tDusk:"Gün batımı ışığı (G)",tRoads:"Roma yolları (R)",tHome:"Tüm harita (H)",tLang:"English (L)",langBtn:"EN",langIntro:"English",prev:"‹ Önceki",next:"Sonraki ›",close:"Kapat",prevAria:"Önceki yer",nextAria:"Sonraki yer",siteOf:(n,t)=>`${t} yerden ${n}.`,today:"bugün",listen:"♪ Dinle",lookFor:"Görülecekler",howWeKnow:"Nereden biliyoruz",sources:"Kaynaklar",openMap:"haritada aç",legend:"Gerçek yükselti verisi (SRTM), düşeyde ×2,6",legendLong:". Yapılar ölçeksiz, stilize minyatürlerdir. Yollar şematiktir; ırmaklar yükselti modelindeki vadi tabanlarını izler",north:"K",northTitle:"Kuzey",sitesAria:"Yerler",controlsAria:"Harita denetimleri",canvasAria:"Roma Dönemi Mersin ilinin 3B haritası",noWebgl:"Bu harita WebGL gerektirir; tarayıcınız ya da cihazınız WebGL’i başlatamadı.",lost:"3B görünüm kesildi — devam etmek için sayfayı yenileyin.",loadFail:"Harita yüklenemedi: ",docTitle:"Roma Dönemi Mersin — antik Kilikya’nın 3B haritası"}},Qv={anemurium:{name:"Anemurium",modern:"Anamur · Eski Anamur",tagline:"Anadolu’nun en güney ucunda, olduğu gibi ayakta kalmış koca bir Roma kenti.",era:["Roma İmparatorluk Dönemi","MS 1.–4. yy","yak. 7. yy’da terk edildi"],body:["Anemurium, Küçük Asya’nın en güney noktası olan Anamur Burnu’nda, tam karşıdaki Kıbrıs’a bakar. Üzerine hiç modern kent kurulmadığı için, çatısız ama tonozları hâlâ yerinde yapılardan oluşan sokaklarıyla kumsaldan arkadaki yamaca doğru tırmanarak günümüze ulaşmıştır.","En parlak dönemi MS 2.–3. yüzyıllardır. Geç Antik Çağ’da gözden düşmüş, bu kıyıya yönelik Arap akınlarının yaşandığı 7. yüzyıl dolaylarında terk edilmiştir."],look:["Büyük bir tiyatro ve tam karşısında, meclis binası olarak da kullanılan küçük, üstü örtülü bir odeon","Üç büyük, bir küçük hamam; en iyi korunmuş olanın palaestrası mozaik döşelidir","MS 1.–4. yüzyıllara ait, ev biçimli, beşik tonozlu yaklaşık 350 mezardan oluşan nekropol; bazılarının içi hâlâ boyalıdır"],evidence:"1960’lardan itibaren Kanadalı ekiplerce kazılmıştır (Elisabeth Alföldi-Rosenbaum, ardından British Columbia Üniversitesi’nden James Russell); nihai yayının ilk cildi 2021’de çıkmıştır. Türkiye’nin UNESCO Geçici Listesi’ne giden yolundadır.",fun:"Adı Yunanca anemos’tan, yani “rüzgâr”dan gelir. Burunda durunca nedenini anlarsınız."},seleucia:{name:"Seleucia ad Calycadnum",modern:"Silifke",tagline:"Tek başına bir Korint sütunu, bir leylek yuvası ve Vespasianus’un valisinin imzasını taşıyan bir köprü.",era:["Kuruluş yak. MÖ 296–280","Roma köprüsü MS 77–78","Tapınak MS 2. yy"],body:["Kenti I. Seleukos Nikator, Kalykadnos (Göksu) ırmağı kıyısında kurmuş, yakındaki Holmi limanının halkını buraya taşımıştır. Roma döneminde de Dağlık Kilikya’nın başlıca kentlerinden biri olarak kalmıştır.","Bugün büyük bölümünü Silifke örter; yine de Roma kenti yer yer kendini gösterir: çoğunlukla Jüpiter Tapınağı diye anılan 2. yüzyıl tapınağı (özgün hâlinde 8 × 14 Korint sütunlu, sonradan kiliseye çevrilmiş), kayaya oyulmuş bir sarnıç (Tekir Ambarı), kaya mezarlarından oluşan bir nekropol ve ilk kez MS 77–78’de vali L. Octavius Memor tarafından taş köprüyle aşılan ırmak geçidi."],look:["Jüpiter Tapınağı: kentin ortasındaki podyumu ve ayakta kalan tek sütunu","Göksu üzerindeki taş köprü — çok onarım görmüş, ama Roma temelleri üzerinde","Kentin hemen güneyinde Azize Thekla’nın mağara kilisesi, Aya Tekla"],evidence:"Köprünün tarihi ve yaptıranı ithaf yazıtından bilinir. Tapınağın Jüpiter/Zeus’a adandığı bir yazıtla kanıtlanmış değildir, gelenekseldir; bir kaynak daha erken, Seleukos dönemine ait bir kökeni savunur.",fun:"Ayakta kalan sütunun tepesine leylekler yuva yapar; bu yüzden yöre halkı ona Leylek Tapınağı da der."},diocaesarea:{name:"Diokaisareia",modern:"Uzuncaburç",tagline:"Toroslar’da 1.200 metrede, Hellenistik bir Zeus tapınağının çevresinde bir tapınak kenti.",era:["Hellenistik kutsal alan","Vespasianus döneminde kent","Tiyatro MS 161–169"],body:["Burası, Olba’nın rahip-krallarınca yönetilen Zeus Olbios kutsal alanıydı. Vespasianus döneminde (MS 69–79) Olba’dan ayrılarak başlı başına bir kent oldu ve Diokaisareia adını aldı. Roma kenti eski tapınağın çevresine yerleştirildi: sütunlu cadde, tören kapısı, tiyatro, çeşme yapısı.","Türkçe adı, köyün üzerinde hâlâ yükselen uzun Hellenistik kuleden gelir."],look:["Zeus Olbios Tapınağı — Hellenistik, peripteros planlı, otuz kadar sütunu hâlâ ayakta; sonradan kiliseye çevrilmiştir","Oppius ile Kyria’nın kente armağanı olan Tykhe Tapınağı (MS 1. yy); yüksek sütunları arşitravın bir bölümünü hâlâ taşır","Tiyatro (Marcus Aurelius ve Lucius Verus dönemi, yaklaşık 2.500 kişilik) ve anıtsal kapı"],evidence:"Zeus tapınağının erken Hellenistik döneme tarihlenmesi (kimi zaman I. Seleukos’a atfedilir) mimari üsluba dayanır; tiyatro yazıtıyla tarihlenir. 2.500 kişilik kapasite bir gezi rehberinin tahminidir. Kent statüsü kesin bir yıl verilmeden Vespasianus dönemine (MS 69–79) tarihlenir; tapınak 5. yüzyılda kiliseye dönüştürülmüştür.",fun:"Seleukeia’ya inen taş döşeli yolun kenarında, Demircili’de (antik İmbriogon) Roma anıt mezarları hâlâ ayaktadır."},cennet:{name:"Korykos Mağarası",modern:"Cennet ve Cehennem",tagline:"Zeus’un canavar Typhon’u hapsettiği söylenen iki dev obruk.",era:["Hellenistik Çağ’dan beri kutsal","Roma kutsal alanı","Şapel MS 5. yy"],body:["Cennet, 250 × 110 m genişliğinde ve yaklaşık 70 m derinliğinde çökmüş bir mağaradır; kısa bir yürüyüş ötesindeki Cehennem ise 70 × 50 m genişliğinde, 128 m derinliğinde, dik duvarlı ve içine hiç girilemeyen bir kuyudur.","Antik yazarlar burayı Korykos Mağarası olarak tanırdı. Strabon dünyanın en iyi safranının burada yetiştiğini söyler; Pomponius Mela inişi uzun uzun, büyük bir zevkle anlatır. Söylenceye göre Cehennem, Zeus onu Etna’nın altına gömmeden önce Typhon’un geçici zindanıydı."],look:["Güney kenarın birkaç metre ötesindeki “tapınak-kilise”: 5. yüzyılda kiliseye çevrilmiş bir Zeus tapınağı","Cennet’e inen yaklaşık 300 basamak ve mağara ağzındaki 5. yüzyıla ait Meryem Ana şapeli","Mağaranın içinden gelen yeraltı ırmağının uğultusu"],evidence:"Obrukların ölçüleri modern ölçüm değerleridir. Buranın Strabon’un (14.5.5) ve Mela’nın Korykos Mağarası olduğu genel olarak kabul edilir.",fun:"Pindaros da Aiskhylos da “Kilikya mağarası”nı Typhon’un ini olarak anar — burası 2.500 yıllık bir turistik yer."},adamkayalar:{name:"Adamkayalar",modern:"Şeytan Deresi Kanyonu",tagline:"Bir kanyon duvarına oyulmuş, 1.800 yıldır vadiyi gözleyen Roma dönemi ataları.",era:["Büyük olasılıkla MS 2. yy"],body:["Kızkalesi’nin yaklaşık 7 km içerisinde, Şeytan Deresi vadisinin yüksek kayalığında dokuz nişe on sekiz figür oyulmuştur: on bir erkek, dört kadın, iki çocuk ve bir dağ keçisi. Kimileri ölü yemeğinde uzanmış gibidir, kimileri asker olarak betimlenmiştir; bir alınlığın üzerinde iki Roma kartalı durur.","Kim oldukları konusunda pek az şey kayıtlıdır. Çoğunlukla yörenin ileri gelenleri için birkaç kuşak boyunca yapılmış mezar anıtları olarak yorumlanırlar."],look:["Ölü yemeği sahneleri — sedire uzanmış ölü ve yanındaki ailesi","Ayakta duran asker figürleri","Kanyona tepeden bakış (patika dik ve korunaksızdır)"],evidence:"MS 2. yüzyıl tarihi üsluba dayalı bir tahmindir. 2019’da, heykellerin içinde altın saklı olduğuna inanan defineciler birkaç figüre ağır hasar vermiştir.",fun:"Yöre halkı onlara yalnızca “adam kayalar” demiş. Ad öyle kalmış."},korykos:{name:"Korykos",modern:"Kızkalesi",tagline:"Roma’nın korsanlara karşı donanma üssü — sonradan denizde yüzen bir kaleyle taçlandı.",era:["Roma limanı ve darphanesi","İmparatorluk donanma üssü","Kaleler 12.–13. yy"],body:["Korykos bu kıyı şeridinin liman kentiydi. Roma yönetiminde kendi yasalarını korudu, kendi sikkesini bastı; imparatorlar korsanları gözlemek için buraya savaş gemileri yerleştirdi. Bir saatlik yürüyüş mesafesinde, batıdaki Korykos Mağarası adını bu kentten almıştır.","Bugün ilk göze çarpan, Orta Çağ’dır: kara kalesi ve ünlü deniz kalesi (Kızkalesi), 12. yüzyıl başında Bizanslılarca yeniden tahkim edilmiş, ardından Kilikya Ermeni Krallığı’nın elinde kalmıştır. Ama kara kalesi sözcüğün tam anlamıyla Roma kentinden yapılmıştır — duvarlarının her yerinde sütun tamburları ve yazıtlı bloklar vardır."],look:["Kara kalesinde yeniden kullanılmış bir Roma kemeri/kapısı","İç kesime doğru uzanan, kaya mezarları ve lahitlerden oluşan büyük nekropol","Kalenin kuzeydoğusundaki Erken Hıristiyanlık bazilikaları"],evidence:"Kaleler Roma değil, Orta Çağ yapısıdır — simge yapı oldukları için modelde gösterilmiş ve öyle etiketlenmiştir. Burada sıralanan Roma dönemi kalıntıları yayımlanmış yerleşim tanımlarını izler. (Kimi zaman buraya yerleştirilen MÖ 191 Korykos Deniz Savaşı, İonia’daki öteki Korykos açıklarında yapılmıştır.)",fun:"Söylence şöyle: kızının yılan sokmasıyla öleceği söylenen bir kral ona denizin ortasında bir kale yaptırır. Yılan bir üzüm sepetinin içinde gelir."},elaiussa:{name:"Elaiussa Sebaste",modern:"Ayaş",tagline:"Kıyıdaki Roma tiyatrosu: Augustus’un adını taşıyan ada kentinin üstünde 2.300 kişilik oturma yeri.",era:["Kuruluş MÖ 2. yy","Augustus döneminde yeniden kuruldu","Tiyatro yak. MS 100–169"],body:["Elaiussa (“zeytin kenti”), kıyıya bir kum diliyle bağlanan küçük bir adada doğdu. Augustus’un bağlı kralı Kappadokia Kralı Arkhelaos burada yeni bir kent kurdu ve adını Sebaste — Yunanca “Augusta” — koydu. Kıyı MS 70’lerde güvenliğe kavuştuktan sonra kent hızla gelişti.","Tiyatro, kıyı yolunun hemen üstündeki tepeye oyulmuştur. Roma Sapienza Üniversitesi burayı 1995–1999’da kazdı: yapımına 2. yüzyılın ilk yarısında başlanmış, Marcus Aurelius ve Lucius Verus döneminde (161–169) tamamlanmıştır. Planı yarım daireden biraz büyüktür; 55 m çapında ve yaklaşık 2.300 seyircilidir. MS 300 dolaylarında kısmen yıkılmış durumdaydı."],look:["Tiyatro; yolun hemen karşısında agora ve içindeki Bizans kilisesi","Bir zamanlar 6 × 12 sütunlu olan, burun üzerindeki tapınak","Lamos ırmağından su getiren su kemerleri ve yüz kadar anıtsal mezardan oluşan nekropol"],evidence:"Tarihler, çap ve kapasite Sapienza kazısından alınmıştır (E. Equini Schneider; tiyatro yayını E. Borgia). Kapasite bir rekonstrüksiyon tahminidir.",fun:"Antik ada bugün bir yarımadadır — liman alüvyonla doldu, deniz çekildi."},kanlidivane:{name:"Kanytelis",modern:"Kanlıdivane",tagline:"Yaklaşık 70 metre derinliğindeki bir obruğun kıyısına kurulmuş bir kent.",era:["Olba kulesi, Hellenistik","Roma mezarları","MS 5. yy’da Neapolis olarak yeniden kuruldu"],body:["Kanytelis, Olba rahip-krallığına bağlıydı. En eski yapısı olan güneybatı kenardaki kule, “Olba rahip-kralı Tarkyaris’in oğlu Teukros tarafından Zeus için yaptırıldı” diye okunan bir yazıt taşır. Roma döneminde burası küçük bir kente dönüştü; II. Theodosius zamanında Neapolis adıyla bir Hıristiyan merkezi olarak yeniden kuruldu.","Her şey obruğun çevresine dizilmiştir — bir kaynağa göre uzun ekseni yaklaşık 130 m, bir başkasına göre 170 × 200 m; derinliği 60–70 m. İç duvarlarına yöre ailelerinin kabartmaları oyulmuştur."],look:["Olba kulesi ve obruğun kıyısında duran çatısız bazilikalar","Aba adlı bir kadının kocası ve oğulları için yaptırdığı tapınak-mezar","Obruğun içindeki kaya kabartmaları ve kuzeydeki lahitli nekropol"],evidence:"Ölçüler yayımlanmış tanımlara dayanır (derinlik 60 m ya da 70 m olarak verilir). Kulenin adak yazıtı ve Aba mezarı kendi yazıtlarından bilinir.",fun:"Kanlıdivane kabaca “kanlı delilik yeri” demektir — söylenceye göre suçlular çukurdaki yabani hayvanlara atılırmış. Asıl suçlu büyük olasılıkla kızıla çalan kayadır."},soli:{name:"Soli-Pompeiopolis",modern:"Viranşehir, Mezitli (Mersin)",tagline:"Pompeius’un emekli korsanlar için kurduğu kent; sütunlu caddesi denize doğru yürür.",era:["Yunan kolonisi yak. MÖ 700","MÖ 67’de Pompeius yeniden kurdu","Sütunlu cadde MS 2.–3. yy"],body:["Soli eski bir Yunan kolonisiydi; MÖ 83’te Ermenistan Kralı Tigranes kenti boşalttı. MÖ 67’de denizleri korsanlardan yeni temizlemiş olan Pompeius, teslim olan korsanların bir bölümünü buraya yerleştirdi ve kente kendi adını verdi.","Kentin gözbebeği, kentten limana uzanan sütunlu caddedir: 14,5 m genişliğinde, iki sıra hâlinde yaklaşık 200 Korint sütunlu. Yayımlanan uzunluklar değişir (350–450 m); ayaktaki sütun sayısı da öyle — kazı ekibi sütunları yeniden diktikçe kabaca 33 ile 47 arasında. Sütun gövdelerindeki konsollar bir zamanlar imparatorların ve kentin ileri gelenlerinin heykellerini taşırdı."],look:["Sütunlu cadde — sütunların ortasındaki konsollara dikkat edin","MS 130 dolaylarında yenilenmiş, Roma betonundan liman mendirekleri","Tunç Çağı’na uzanan katmanlarıyla Soli Höyük"],evidence:"1999’dan beri Remzi Yağcı (Dokuz Eylül Üniversitesi) başkanlığında kazılmaktadır. Limanın tarihlenmesi ROMACONS beton karot projesine dayanır. Kent MS 525’te bir depremle yerle bir olmuştur.",fun:"“Solesizm” — dilbilgisi hatası — sözcüğü Soli’den gelir; kentin kolonistleri bozuk Yunancalarıyla alay konusu olmuştu."},tarsus:{name:"Tarsus",modern:"Tarsus",tagline:"Roma Kilikyası’nın başkenti: Kleopatra buraya yelken açtı, Aziz Pavlus burada doğdu, bir imparator buraya gömüldü.",era:["MÖ 67’den itibaren Roma başkenti","Antonius ile Kleopatra MÖ 41","Iulianus MS 363’te gömüldü"],body:["Pompeius, MÖ 67’de Tarsus’u Kilikya eyaletinin başkenti yaptı. MÖ 41’de Kleopatra, Marcus Antonius’la buluşmak için Kydnos ırmağından yukarı yelken açtı. Havari Pavlus kendisini “hiç de önemsiz olmayan bir kentin yurttaşı” diye tanıttı — işte o kent burası. İmparator Iulianus 363’te surların dışına gömüldü.","Roma kenti, bugünkü kentin metrelerce altındadır; bu yüzden pencerelerden görünür: kent merkezinde sütun kaideleriyle birlikte bazalt döşeli bir cadde, bir tapınağın dev beton çekirdeği (Donuktaş), bir hamam duvarı ve ayakta kalan tek kapı."],look:["“Kleopatra Kapısı” — ayakta kalan tek kent kapısı; ağır biçimde onarılmıştır (bugünkü dokusu büyük olasılıkla Kleopatra’dan sonraya aittir)","Merkezdeki kazılmış Roma caddesi ve 2. yüzyıla ait dev tapınak platformu Donuktaş","Kentin kuzeyinde, Sağlıklı’da: Kilikya Kapıları’na yönelen, yaklaşık 3 km’si sağlam, 3 m genişliğinde taş döşeli Roma yolu"],evidence:"Kapının bugünkü biçimi, daha eski bir kapının yerinde Bizans ya da Abbasi dönemine tarihlenir. Donuktaş uzun süre “Sardanapalos’un mezarı” diye anılmış; kazılar onun bir Roma tapınağı olduğunu göstermiştir. Yol ölçüleri Kültür ve Turizm Bakanlığı’na aittir.",fun:"Plutarkhos’a göre Kleopatra, kıçı altın kaplama, yelkenleri mor, kürekleri gümüş bir tekneyle, Aphrodite gibi giyinmiş olarak geldi. Antonius’un hiç şansı yoktu."}},ty={"Calycadnus (Göksu)":[[33.2136,36.6304],[33.2211,36.6304],[33.2286,36.6304],[33.2361,36.6275],[33.2436,36.6246],[33.2511,36.6188],[33.2586,36.616],[33.2661,36.6102],[33.2737,36.6045],[33.2812,36.5987],[33.2849,36.5929],[33.2924,36.5872],[33.2999,36.5814],[33.3074,36.5785],[33.315,36.5785],[33.3225,36.5785],[33.33,36.5785],[33.3375,36.5785],[33.345,36.5785],[33.3525,36.5785],[33.36,36.5785],[33.3675,36.5785],[33.375,36.5785],[33.3825,36.5785],[33.3901,36.5785],[33.3976,36.5785],[33.4051,36.5757],[33.4126,36.5757],[33.4201,36.5728],[33.4276,36.567],[33.4351,36.5613],[33.4426,36.5555],[33.4501,36.5497],[33.4539,36.544],[33.4539,36.5382],[33.4614,36.5325],[33.4689,36.5267],[33.4764,36.5209],[33.4839,36.5152],[33.4914,36.5123],[33.4989,36.5123],[33.5064,36.5123],[33.514,36.5123],[33.5215,36.5123],[33.529,36.5094],[33.5365,36.5037],[33.544,36.4979],[33.5477,36.4921],[33.5553,36.4864],[33.5628,36.4806],[33.5703,36.4749],[33.5778,36.4691],[33.5853,36.4691],[33.5928,36.4691],[33.6003,36.4634],[33.6078,36.4605],[33.6153,36.4605],[33.6228,36.4576],[33.6266,36.4518],[33.6341,36.4461],[33.6416,36.4403],[33.6454,36.4346],[33.6529,36.4288],[33.6566,36.423],[33.6641,36.4173],[33.6717,36.4173],[33.6792,36.4173],[33.6867,36.4173],[33.6942,36.4202],[33.7017,36.4202],[33.7092,36.4202],[33.7167,36.423],[33.7242,36.423],[33.7317,36.4259],[33.7392,36.4288],[33.7467,36.4317],[33.7543,36.4346],[33.7618,36.4374],[33.7693,36.4374],[33.7768,36.4346],[33.7843,36.4288],[33.7843,36.423],[33.7918,36.4173],[33.7993,36.4115],[33.8068,36.4058],[33.8143,36.4029],[33.8218,36.4],[33.8293,36.4],[33.8369,36.3971],[33.8444,36.4029],[33.8519,36.4029],[33.8594,36.4029],[33.8669,36.4086],[33.8707,36.4144],[33.8707,36.4202],[33.8782,36.4259],[33.8857,36.4288],[33.8932,36.4288],[33.9007,36.4259],[33.9082,36.423],[33.912,36.4173],[33.912,36.4115],[33.9195,36.4058],[33.9232,36.4],[33.927,36.3942],[33.9345,36.3914],[33.942,36.3856],[33.9495,36.3798],[33.9533,36.3741],[33.9533,36.3683],[33.9495,36.3626],[33.942,36.3597],[33.9457,36.3539],[33.9457,36.3482],[33.9457,36.3424],[33.9495,36.3366],[33.9533,36.3309],[33.9533,36.3309]],"Cydnus (Berdan)":[[34.8656,37.1487],[34.8732,37.1429],[34.8807,37.1372],[34.8882,37.1314],[34.8957,37.1257],[34.9032,37.1199],[34.9107,37.1141],[34.9182,37.1141],[34.9257,37.1084],[34.9332,37.1026],[34.937,37.0969],[34.9407,37.0911],[34.9445,37.0853],[34.9445,37.0796],[34.9445,37.0738],[34.9407,37.0681],[34.9407,37.0623],[34.9407,37.0565],[34.9407,37.0508],[34.9445,37.045],[34.952,37.0393],[34.952,37.0335],[34.952,37.0277],[34.9558,37.022],[34.9595,37.0162],[34.9595,37.0105],[34.9595,37.0047],[34.9595,36.999],[34.9595,36.9932],[34.9595,36.9874],[34.9595,36.9817],[34.9595,36.9759],[34.9595,36.9702],[34.9595,36.9644],[34.952,36.9586],[34.9482,36.9529],[34.9482,36.9471],[34.9407,36.9414],[34.9332,36.9356],[34.9257,36.9298],[34.9257,36.9241],[34.922,36.9183],[34.922,36.9126],[34.9182,36.9068],[34.9182,36.901],[34.9182,36.8953],[34.9182,36.8895],[34.9182,36.8838],[34.9182,36.878],[34.9182,36.8723],[34.9145,36.8665],[34.9069,36.8607],[34.9069,36.855],[34.9032,36.8492],[34.8994,36.8435],[34.8994,36.8377],[34.8994,36.8319],[34.8994,36.8262],[34.8994,36.8204],[34.8994,36.8147],[34.8994,36.8089],[34.8994,36.806]],"Lamos (Limonlu)":[[34.0847,36.7081],[34.0922,36.7024],[34.0997,36.6966],[34.1072,36.6908],[34.1147,36.6851],[34.1222,36.6793],[34.1297,36.6736],[34.1372,36.6678],[34.1447,36.662],[34.1523,36.6563],[34.1598,36.6505],[34.1673,36.6448],[34.1748,36.639],[34.1823,36.6332],[34.1823,36.6275],[34.186,36.6217],[34.186,36.616],[34.1898,36.6102],[34.1898,36.6045],[34.1936,36.5987],[34.1973,36.5929],[34.2011,36.5872],[34.2086,36.5814],[34.2161,36.5814],[34.2236,36.5757],[34.2311,36.5699],[34.2386,36.567],[34.2386,36.567]]},ey="./audio/";class ny{constructor(){this.enabled=!1,this.ctx=null,this.buffers={},this.pending={},this.loops={},this.voice=null,this.onVoiceEnd=null,this.lang="en"}async enable(){if(!this.ctx){const t=window.AudioContext||window.webkitAudioContext;if(!t)return!1;this.ctx=new t,this.master=this.ctx.createGain(),this.master.connect(this.ctx.destination),this.master.gain.value=0,["sea","hills","music"].forEach(e=>this.load(e).then(()=>this.startLoop(e))),["whoosh","chime"].forEach(e=>this.load(e))}return await this.ctx.resume(),this.enabled=!0,this.fade(1,.8),!0}disable(){this.enabled=!1,this.stopVoice(),this.ctx&&(this.fade(0,.3),setTimeout(()=>{this.enabled||this.ctx.suspend()},400))}pause(){this.ctx&&this.enabled&&this.ctx.suspend()}resume(){this.ctx&&this.enabled&&this.ctx.resume()}fade(t,e){const i=this.master.gain,s=this.ctx.currentTime;i.cancelScheduledValues(s),i.setValueAtTime(i.value,s),i.linearRampToValueAtTime(t,s+e)}load(t){var e;return(e=this.pending)[t]||(e[t]=this.fetchClip(t))}async fetchClip(t){try{const e=await fetch(ey+t+".mp3");if(!e.ok)throw new Error(e.status);const i=await this.ctx.decodeAudioData(await e.arrayBuffer());return this.buffers[t]=i,i}catch{return console.warn("audio missing:",t),null}}startLoop(t){const e=this.buffers[t];if(!e||this.loops[t])return;const i=this.ctx.createBufferSource();i.buffer=e,i.loop=!0;const s=this.ctx.createGain();s.gain.value=0,i.connect(s).connect(this.master),i.start(),this.loops[t]=s}setMix({sea:t,hills:e,music:i}){if(!this.ctx)return;const s=this.ctx.currentTime,r=this.voice?.45:1,a=(o,l)=>this.loops[o]&&this.loops[o].gain.setTargetAtTime(l*r,s,.6);a("sea",t*.5),a("hills",e*.45),a("music",i*.4)}play(t,e=.5){if(!this.enabled||!this.buffers[t])return;const i=this.ctx.createBufferSource();i.buffer=this.buffers[t];const s=this.ctx.createGain();s.gain.value=e,i.connect(s).connect(this.master),i.start()}stopVoice(){if(this.voice){try{this.voice.onended=null,this.voice.stop()}catch{}this.voice=null}}async narrate(t,e){if(this.stopVoice(),!this.enabled)return!1;const i=this.voiceToken=Symbol(),s=await this.load("vo-"+(this.lang==="en"?"":this.lang+"-")+t);if(!s||i!==this.voiceToken||!this.enabled)return!1;const r=this.ctx.createBufferSource();r.buffer=s;const a=this.ctx.createGain();return a.gain.value=1,r.connect(a).connect(this.master),r.onended=()=>{this.voice===r&&(this.voice=null,e&&e())},r.start(this.ctx.currentTime+.35),this.voice=r,s.duration}}const Kt=n=>document.querySelector(n),Pi=Kt("#scene"),pu={get:n=>{try{return localStorage.getItem(n)}catch{return null}},set:(n,t)=>{try{localStorage.setItem(n,t)}catch{}}};let _i=new URLSearchParams(location.search).get("lang")||pu.get("lang")||((navigator.language||"").toLowerCase().startsWith("tr")?"tr":"en");fu[_i]||(_i="en");const mi=()=>fu[_i],mu=n=>_i==="tr"?{...n,...Qv[n.id]}:n,gu=matchMedia("(prefers-reduced-motion: reduce)").matches,fr=new URLSearchParams(location.search).get("q")==="low";let wn;try{wn=new Gg({canvas:Pi,antialias:!fr,powerPreference:"high-performance"})}catch(n){throw Kt("#loading").textContent=mi().noWebgl,n}wn.setPixelRatio(fr?1:Math.min(devicePixelRatio,2));wn.shadowMap.enabled=!fr;wn.shadowMap.type=_h;wn.toneMapping=yh;wn.toneMappingExposure=1.05;const Ge=new Vg;Ge.fog=new gc(12572390,.0016);Ge.background=new Mt(12572390);const fe=new Pn(42,1,.5,4e3);fe.position.set(-40,420,380);const ce=new U_(fe,Pi);ce.enableDamping=!0;ce.dampingFactor=.08;ce.maxPolarAngle=Pe.degToRad(80);ce.minDistance=.4;ce.maxDistance=950;ce.zoomSpeed=.9;ce.screenSpacePanning=!1;ce.autoRotateSpeed=.5;const Xa=new w_(14478591,9075290,.85),Sn=new C_(16773852,2.4);Sn.castShadow=!0;Sn.shadow.mapSize.set(2048,2048);Sn.shadow.bias=-8e-4;Sn.shadow.normalBias=.03;Ge.add(Xa,Sn,Sn.target);const Ec=new xe(new Ee(1800,32,16),new ni({side:dn,depthWrite:!1,fog:!1,uniforms:{uTop:{value:new Mt},uHorizon:{value:new Mt},uSunDir:{value:new X},uSunCol:{value:new Mt}},vertexShader:"varying vec3 vDir; void main(){ vDir = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`uniform vec3 uTop,uHorizon,uSunDir,uSunCol; varying vec3 vDir;
      void main(){ float h = clamp(vDir.y,0.0,1.0); vec3 c = mix(uHorizon,uTop,pow(h,0.45));
        c = mix(c, uTop*0.22, smoothstep(0.02,-0.4,vDir.y)); // the map floats over deep blue
        float s = max(dot(normalize(vDir),uSunDir),0.0); c += uSunCol*(pow(s,600.0)*1.5 + pow(s,12.0)*0.35);
        gl_FragColor = vec4(c,1.0); }`}));Ge.add(Ec);const Ct={paused:!1,selected:-1,hovered:-1,tour:!1,dusk:0,duskTarget:0,roads:!0,started:!1},Ke=new ny,kn=[];let Yr=()=>0,cr,Pr,$l=[],Jl,Ql,_u=[],vu=[],yu=[];const $r=(n,t)=>Qa(Math.max(Yr(n,t),0));async function iy(){const n=document.fonts?Promise.all([document.fonts.load("600 96px Cinzel"),document.fonts.load('italic 500 96px "EB Garamond"')]):Promise.resolve(),[t]=await Promise.all([tv("./heightmap.png"),Promise.race([n,new Promise(r=>setTimeout(r,2500))]).catch(()=>{})]);Yr=ev(t);const e=rv(t),i=av(t,e,fr?2:1);Ge.add(i.group),cr=ov(t,e),Ge.add(cr),sy(),ry(),ay(),Ql=ly(),cy(),hy(),uy(),py(),Ct.ready=!0,fo(_i),xu(),Lc(),ce.target.set(8,0,22),Kt("#loading").textContent="";for(const r of document.querySelectorAll("#intro button"))r.disabled=!1;Kt("#begin-sound").focus({preventScroll:!0}),wn.setAnimationLoop(Eu),window.__ready=!0;const s=Nn.findIndex(r=>"#"+r.id===location.hash);s>=0&&(Za(!1,!0),fs(s,{instant:!0}))}function sy(){Nn.forEach((n,t)=>{const[e,i]=ho(n.lon,n.lat),s=$r(e,i),r=new Ht;r.position.set(e,s,i);const a=Tv(n.model);a.position.y=pv,r.add(a);const o=new xe(new Yt(.02,.06,5,8,1,!0),new tr({color:16767370,transparent:!0,opacity:.5,blending:rl,depthWrite:!1,fog:!1}));o.position.y=3.6;const l=new xe(new xc(1.2,1.26,64),new tr({color:16767370,transparent:!0,opacity:.8,side:De,depthWrite:!1,depthTest:!1,fog:!1}));l.renderOrder=1,l.rotation.x=-Math.PI/2,l.position.y=.03;const c=new T_(16756832,0,9,1.6);c.position.y=1.4;const h=new xe(new Yt(1.25,1.25,2.4,12),new tr({visible:!1}));h.position.y=.9,h.userData.site=t,r.add(o,l,c,h),Ge.add(r);const f=document.createElement("div");f.className="label",f.innerHTML=`<span class="num">${t+1}</span><span class="txt"></span>`,f.addEventListener("click",()=>fs(t)),f.addEventListener("wheel",u=>{u.preventDefault(),Pi.dispatchEvent(new WheelEvent("wheel",u))},{passive:!1}),f.addEventListener("pointerenter",()=>{Ct.hovered=t}),f.addEventListener("pointerleave",()=>{Ct.hovered===t&&(Ct.hovered=-1)}),Kt("#labels").appendChild(f),kn.push({site:n,root:r,model:a,beam:o,ring:l,lamp:c,hit:h,el:f,pos:new X(e,s,i),scale:1,w:0})})}function ry(){Jl=new co({color:4169668,linewidth:3,transparent:!0,opacity:.95,depthWrite:!1});for(const n of Object.values(ty)){const t=[],e=new ao(n.map(([s,r])=>{const[a,o]=ho(s,r);return new X(a,0,o)}));for(const s of e.getSpacedPoints(n.length*4))t.push(s.x,$r(s.x,s.z)+.05,s.z);const i=new cu(new wc().setPositions(t),Jl);i.renderOrder=1,Ge.add(i)}}function ay(){Pr=new Ht;const n=(i,s,r)=>new co({color:i,linewidth:s,transparent:!0,opacity:r,depthWrite:!1});$l=[n(7218200,5.5,.8),n(16773316,2.6,1)];const t=new Xn({color:16051417,roughness:.6}),e=new Yt(.035,.045,.3,8);for(const i of Av){const s=i.pts.map(([h,f])=>{const[u,d]=ho(h,f);return new X(u,0,d)}),r=new ao(s,!1,"centripetal"),a=r.getLength(),o=Math.round(a*3),l=r.getSpacedPoints(o).map(h=>(h.y=$r(h.x,h.z)+.07,h)),c=l.flatMap(h=>[h.x,h.y,h.z]);$l.forEach((h,f)=>{const u=new cu(new wc().setPositions(f?c.map((d,y)=>y%3===1?d+.05:d):c),h);u.renderOrder=2+f,Pr.add(u)});for(let h=4;h<a-2;h+=8){const f=l[Math.round(h/a*o)],u=new xe(e,t);u.position.set(f.x+.12,f.y+.1,f.z),u.castShadow=!0,Pr.add(u)}}Ge.add(Pr)}function oy(){const n=(o,l,c)=>{o=o.index?o.toNonIndexed():o,o.deleteAttribute("uv"),c&&o.applyMatrix4(c);const h=o.attributes.position.count,f=new Float32Array(h*3);for(let u=0;u<h;u+=3){const d=.82+.36*Math.abs(Math.sin(u*12.9898+l[1]*78.2));for(let y=0;y<3;y++)f.set([l[0]*d,l[1]*d,l[2]*d],(u+y)*3)}return o.setAttribute("color",new fn(f,3)),o.computeVertexNormals(),o},t=(o,l,c,h,f=h,u=h,d=0)=>new oe().compose(new X(o,l,c),new Ni().setFromEuler(new ei(0,d,0)),new X(h,f,u)),e=[1,1,1],i=[1.7,.75,.75],s=(o,l)=>n(new Yt(l*.6,l,o,4,1,!0),i,t(0,o/2,0,1)),r=(o,l,c,h,f,u=0)=>n(new Kr(1,0),e,t(o,l,c,h,h*f,h,u)),a=(o,l,c)=>n(new pn(l,c,6,1,!0),e,t(0,o,0,1));return{pine:Rr([s(.12,.012),r(0,.155,0,.06,.55),r(.04,.14,.02,.04,.5,1),r(-.035,.145,-.025,.04,.5,2)]),olive:Rr([s(.05,.016),r(0,.085,0,.05,.75),r(.035,.07,.02,.035,.7,1.3)]),cypress:Rr([s(.03,.008),n(new gi([[.012,.02],[.03,.08],[.027,.17],[.012,.25],[0,.28]].map(([o,l])=>new ot(o,l)),5),e)]),cedar:Rr([s(.1,.011),a(.085,.07,.07),a(.135,.056,.07),a(.185,.04,.07),a(.235,.024,.07)])}}function ly(){const n=fr?260:650,t=oy(),e=new Ht,i=new Xn({roughness:1,flatShading:!0,vertexColors:!0}),s={},r=new oe,a=new Ni,o=new X,l=new X,c=new Mt,h=new X(0,1,0);for(const y in t){const _=new Yg(t[y],i,n*Nn.length);_.count=0,_.castShadow=!0,s[y]=_,e.add(_)}const f={pine:[.29,.45,.2],olive:[.23,.22,.29],cypress:[.34,.42,.13],cedar:[.36,.38,.15]};let u=7;const d=()=>(u=u*16807%2147483647,u/2147483647);return kn.forEach((y,_)=>{for(let p=0,g=0;p<n*3&&g<n;p++){const S=d()*6.283,b=1.7+Math.pow(d(),1.4)*13,M=y.pos.x+Math.cos(S)*b,P=y.pos.z+Math.sin(S)*b,C=Yr(M,P);if(C<6||C>1900||d()>.35+.65*Math.min(1,C/500)||kn.some(I=>Math.hypot(I.pos.x-M,I.pos.z-P)<1.6))continue;const A=d(),U=C<250?A<.45?"olive":A<.82?"pine":"cypress":C<1100?A<.62?"pine":A<.92?"olive":"cedar":A<.82?"cedar":"pine",v=s[U],m=(.7+d()*.8)*(U==="olive"&&C>=250?.85:1),E=f[U];l.set(M,Qa(C)-.01,P),o.set(m*(.85+d()*.3),m,m*(.85+d()*.3)),v.setMatrixAt(v.count,r.compose(l,a.setFromAxisAngle(h,d()*6.283),o)),v.setColorAt(v.count,c.setHSL(E[0]+(d()-.5)*.05,E[1]+(d()-.5)*.12,(U==="olive"&&C>=250?.19:E[2])+(d()-.5)*.07)),v.count++,g++}}),Ge.add(e),e}function cy(){const n=[{c:[20,62],rx:34,rz:9,speed:.045,phase:0,sail:13189423},{c:[-58,78],rx:22,rz:6,speed:-.06,phase:2,sail:15326400},{c:[82,48],rx:14,rz:7,speed:.07,phase:4,sail:8006799}];for(const t of n){const e=or(new Xn({color:t.sail,side:De,roughness:.9}));e.scale.setScalar(2.4),e.traverse(i=>{i.isMesh&&(i.castShadow=!1)}),Ge.add(e),_u.push({obj:e,...t})}}function hy(){const n=document.createElement("canvas");n.width=n.height=128;const t=n.getContext("2d"),e=t.createRadialGradient(64,64,4,64,64,62);e.addColorStop(0,"rgba(255,255,255,.95)"),e.addColorStop(.5,"rgba(255,255,255,.5)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,128,128);const i=new _c(n);for(let s=0;s<9;s++){const r=new Ht;for(let a=0;a<5;a++){const o=new Wg(new Kh({map:i,transparent:!0,opacity:.55,depthWrite:!1,fog:!1}));o.scale.set(16+10*Math.sin(s*3+a),7+2*Math.cos(a*2+s),1),o.position.set((a-2)*6,Math.sin(a*1.7+s)*1.2,Math.cos(a*2.3+s)*4),r.add(o)}r.position.set(-He.w/2+s*53%He.w,15+s%3*2.5,-70+s*37%95),Ge.add(r),vu.push(r)}}function uy(){const n=[["MARE INTERNVM",34.45,36.2,15,.1,1456207,.5],["TAVRVS MONS",34.35,37.1,11,.42,2759694,.8],["CILICIA TRACHEIA",33.2,36.36,8,-.2,2759694,.75],["CILICIA PEDIAS",34.98,36.72,6.5,.3,2759694,.7],["Calycadnus fl.",33.6,36.52,3.2,.5,1456207,.75],["Lamos fl.",34.12,36.66,2.4,.9,1456207,.75],["Cydnus fl.",34.94,37.02,2.6,-1.2,1456207,.75],["Pylae Ciliciae",34.66,37.3,3.6,0,5904912,.75],["AD CYPRVM",33.35,35.95,4.5,0,1456207,.5]];for(const[t,e,i,s,r,a,o]of n){const l=document.createElement("canvas"),c=l.getContext("2d"),h=`${t===t.toUpperCase()?"600":"italic 500"} 96px ${t===t.toUpperCase()?'Cinzel, "Trajan Pro", Georgia, serif':'"EB Garamond", Georgia, serif'}`;c.font=h;const f=t===t.toUpperCase()?26:4,u=[...t].reduce((S,b)=>S+c.measureText(b).width+f,0)+40;l.width=Math.ceil(u),l.height=140,c.font=h,c.fillStyle="#"+new Mt(a).getHexString(),c.textBaseline="middle";let d=20;for(const S of t)c.fillText(S,d,74),d+=c.measureText(S).width+f;const y=new _c(l);y.anisotropy=8;const _=new xe(new On(s*l.width/140,s),new tr({map:y,transparent:!0,opacity:o,depthTest:!1,depthWrite:!1,fog:!1})),[p,g]=ho(e,i);_.rotation.set(-Math.PI/2,0,r),_.position.set(p,$r(p,g)+1.2,g),_.renderOrder=5,_.userData.op=o,Ge.add(_),yu.push(_)}}const fh={top:[new Mt(4163286),new Mt(4481695)],horizon:[new Mt(12901612),new Mt(16044722)],sun:[new Mt(16773852),new Mt(16757870)],hemiSky:[new Mt(14478591),new Mt(12174054)],hemiGround:[new Mt(9075290),new Mt(9071178)],shallow:[new Mt(6279368),new Mt(7324340)],deep:[new Mt(869488),new Mt(1327214)]},tc=new X;function xu(){const n=Ct.dusk,t=(r,a)=>a.copy(fh[r][0]).lerp(fh[r][1],n),e=Pe.lerp(.85,.32,n),i=Pe.lerp(-.95,-1.35,n);tc.set(Math.cos(e)*Math.sin(i),Math.sin(e),Math.cos(e)*Math.cos(i)).normalize(),t("sun",Sn.color),Sn.intensity=Pe.lerp(2.5,2.9,n),t("hemiSky",Xa.color),t("hemiGround",Xa.groundColor),Xa.intensity=Pe.lerp(.85,.7,n);const s=Ec.material.uniforms;if(t("top",s.uTop.value),t("horizon",s.uHorizon.value),s.uSunDir.value.copy(tc),s.uSunCol.value.copy(Sn.color),Ge.fog.color.copy(s.uHorizon.value),Ge.fog.density=Pe.lerp(.0016,.002,n),cr){const r=cr.material.uniforms;t("shallow",r.uShallow.value),t("deep",r.uDeep.value),r.uSun.value.copy(Sn.color),r.uLight.value=Pe.lerp(1,.92,n),r.fogColor.value.copy(Ge.fog.color),r.fogDensity.value=Ge.fog.density}for(const r of kn)r.lamp.intensity=n*2.2,r.lamp.visible=n>.01;wn.toneMappingExposure=Pe.lerp(1.05,1.15,n)}let hn=null;const dy=n=>n<.5?4*n*n*n:1-Math.pow(-2*n+2,3)/2;function Tc(n,t,e=2.4,i){gu&&(e=.01),hn={t:0,dur:e,fromT:ce.target.clone(),toT:n.clone(),fromP:fe.position.clone(),toP:t.clone(),onDone:i},ce.autoRotate=!1}const Dr={target:new X(8,0,22),pos:new X(-18,130,216)};function Ac(){const n=Math.max(1,1.76/fe.aspect),t=Dr.pos.clone().sub(Dr.target);return fe.aspect<1&&t.set(0,190,130),{target:Dr.target,pos:Dr.target.clone().add(t.multiplyScalar(n))}}function fs(n,{instant:t=!1,fromTour:e=!1}={}){if(n<0||n>=Nn.length)return;!e&&Ct.tour&&pr(),Ct.selected=n;const i=kn[n];wu(n),history.replaceState(null,"","#"+i.site.id);const s=Math.atan2(fe.position.x-ce.target.x,fe.position.z-ce.target.z),r=i.site.view||{},a=r.az!==void 0?r.az:Pe.clamp(s,-.7,.7),o=r.dist||4.6,l=Pe.degToRad(r.polar||60),c=innerWidth<760,h=i.pos.clone();h.y+=.7,c&&(h.y-=.9);const f=h.clone().add(new X(Math.sin(a)*Math.sin(l),Math.cos(l),Math.cos(a)*Math.sin(l)).multiplyScalar(o));Ke.play("whoosh",.35),Tc(h,f,t?.01:2.6,()=>{ce.autoRotate=!gu,Ke.play("chime",.3)}),Jr(i.site.id)}function ec(){Ct.tour&&pr(),Ct.selected=-1,Kt("#panel").hidden=!0,document.body.classList.remove("panel-open"),Dc();for(const n of document.querySelectorAll("#sitelist button"))n.classList.remove("active");history.replaceState(null,"",location.pathname+location.search),ce.autoRotate=!1,Ke.stopVoice(),qa()}function Ya(){Ct.tour&&pr(),ec();const n=Ac();Ke.play("whoosh",.3),Tc(n.target,n.pos,2.4)}let ph=0,Fr=null,un=null;const Cc=()=>{un&&(clearTimeout(un.id),un=null)},Mu=()=>{un.at=performance.now(),un.id=setTimeout(()=>{const n=un.fn;un=null,n()},un.ms)},bu=(n,t)=>{Cc(),un={fn:n,ms:t},Ct.paused||Mu()};function qa(){Kt("#caption").hidden=!0,Cc(),Fr=null}function Su(){Fr&&Jr(Fr.key,Fr.onEnd)}async function Jr(n,t){const e=Jv[_i][n],i=++ph;qa(),Fr={key:n,onEnd:t};const s=await Ke.narrate(n,()=>{qa(),t&&t()});i===ph&&(Kt("#caption").textContent=e,Kt("#caption").hidden=!1,s||bu(()=>{qa(),t&&t()},3500+e.length*45))}function uo(){Kt("#btn-tour").textContent=Ct.tour?mi().stopTour:mi().tour,Kt("#btn-tour").classList.toggle("on",Ct.tour)}function fy(){Ct.tour=!0,uo(),Rc(Ct.selected>=0?Ct.selected:0)}function Rc(n){Ct.tour&&(fs(n,{fromTour:!0}),Jr(Nn[n].id,()=>{bu(()=>{Ct.tour&&(n+1<Nn.length?Rc(n+1):(pr(),Ya()))},2500)}))}function pr(){Ct.tour=!1,Cc(),uo()}function wu(n,t=!1){const e=mu(Nn[n]),i=mi(),s=a=>a.replace(/&/g,"&amp;").replace(/</g,"&lt;");Kt("#panel-body").innerHTML=`
    <div class="eyebrow">${i.siteOf(n+1,Nn.length)}</div>
    <h2>${s(e.name)}</h2>
    <div class="modern">${i.today}: ${s(e.modern)}</div>
    <button class="listen" id="listen">${i.listen}</button>
    <div class="tagline">${s(e.tagline)}</div>
    <div class="chips">${e.era.map(a=>`<span>${s(a)}</span>`).join("")}</div>
    ${e.body.map(a=>`<p>${s(a)}</p>`).join("")}
    <h3>${i.lookFor}</h3><ul>${e.look.map(a=>`<li>${s(a)}</li>`).join("")}</ul>
    <div class="fun">${s(e.fun)}</div>
    <h3>${i.howWeKnow}</h3><p class="evidence">${s(e.evidence)}</p>
    <h3>${i.sources}</h3><ul class="src">${e.sources.map(a=>`<li><a href="${dh[a].url}" target="_blank" rel="noopener">${s(dh[a].label)}</a></li>`).join("")}</ul>
    <div class="coords">${e.lat.toFixed(4)}° N, ${e.lon.toFixed(4)}° E · <a href="https://www.openstreetmap.org/?mlat=${e.lat}&mlon=${e.lon}#map=15/${e.lat}/${e.lon}" target="_blank" rel="noopener">${i.openMap}</a></div>`,t||(Kt("#panel-body").scrollTop=0),Kt("#listen").onclick=async()=>{Ct.tour&&pr(),Ke.enabled||await Pc(!0),Jr(e.id)},Kt("#counter").textContent=`${n+1} / ${Nn.length}`;const r=Kt("#panel");r.hidden=!1,t||(r.style.animation="none",r.offsetWidth,r.style.animation=""),document.body.classList.add("panel-open"),Dc(),document.querySelectorAll("#sitelist button").forEach((a,o)=>a.classList.toggle("active",o===n))}async function Pc(n){n?n=await Ke.enable().catch(()=>!1)!==!1&&Ke.enabled:Ke.disable();const t=Kt("#btn-sound");t.setAttribute("aria-pressed",String(n)),t.textContent=(n?"🔊 ":"🔇 ")+mi().sound,Su()}function fo(n){_i=n,pu.set("lang",n),Ke.lang=n;const t=mi(),e=(a,o)=>{Kt(a).textContent=o};document.documentElement.lang=n,document.title=t.docTitle,e("#title .sub",t.sub),e("#intro-eyebrow",t.introEyebrow),e("#intro-text",t.introText),e("#begin-sound",t.beginSound),e("#begin-quiet",t.beginQuiet),e("#intro-lang",t.langIntro),Ct.ready||e("#loading",t.loading),e("#hint",matchMedia("(pointer: coarse)").matches?t.hintTouch:t.hint),e("#prev",t.prev),e("#next",t.next),e("#north",t.north),e("#legend-src",t.sources),e("#btn-roads",t.roads),e("#btn-lang",t.langBtn),e("#btn-dusk",Ct.duskTarget?t.dusk:t.day),e("#btn-sound",(Ke.enabled?"🔊 ":"🔇 ")+t.sound),uo(),Kt("#btn-home").innerHTML=`⌂ <span class="wide">${t.overview}</span><span class="narrow">${t.map}</span>`,Kt("#legend-text").innerHTML=`${t.legend}<span class="wide">${t.legendLong}</span>.`;const i={"#btn-tour":t.tTour,"#btn-sound":t.tSound,"#btn-dusk":t.tDusk,"#btn-roads":t.tRoads,"#btn-home":t.tHome,"#btn-lang":t.tLang,"#compass":t.northTitle};for(const a in i)Kt(a).title=i[a];const s={"#panel-close":t.close,"#prev":t.prevAria,"#next":t.nextAria,"#sitelist":t.sitesAria,"#toolbar":t.controlsAria,"#scene":t.canvasAria};for(const a in s)Kt(a).setAttribute("aria-label",s[a]);const r=document.querySelectorAll("#sitelist button");Nn.forEach((a,o)=>{const l=mu(a);r[o]&&(r[o].querySelector(".t").textContent=l.name,r[o].title=`${l.name} — ${l.modern}`),kn[o]&&(kn[o].el.querySelector(".txt").innerHTML=`${l.name}<small>${l.modern.split(" · ")[0]}</small>`)}),Ct.selected>=0&&wu(Ct.selected,!0),Su()}function Za(n,t=!1){if(Ct.started)return;Ct.started=!0,Kt("#intro").classList.add("gone");for(const s of document.querySelectorAll("[inert]"))s.inert=!1;if(Kt("#intro").inert=!0,document.activeElement&&document.activeElement.blur(),t)return;Ct.tour=!0,uo();const e=()=>Jr("intro",()=>{Ct.tour&&Rc(0)});n?Pc(!0).then(e):e();const i=Ac();Tc(i.target,i.pos,4.2)}function py(){const n=Kt("#sitelist");Nn.forEach((c,h)=>{const f=document.createElement("button");f.innerHTML=`<span class="n">${h+1}</span><span class="t"></span>`,f.onclick=()=>fs(h),n.appendChild(f)});const t=()=>fo(_i==="tr"?"en":"tr");Kt("#btn-lang").onclick=t,Kt("#begin-sound").onclick=()=>Za(!0),Kt("#begin-quiet").onclick=()=>Za(!1),Kt("#panel-close").onclick=ec;const e=c=>fs((Ct.selected+c+Nn.length)%Nn.length);Kt("#prev").onclick=()=>e(-1),Kt("#next").onclick=()=>e(1),Kt("#btn-home").onclick=Ya,Kt("#btn-tour").onclick=()=>Ct.tour?pr():fy(),Kt("#btn-sound").onclick=()=>Pc(!Ke.enabled);const i=()=>{Ct.duskTarget=Ct.duskTarget?0:1,Kt("#btn-dusk").setAttribute("aria-pressed",String(!!Ct.duskTarget)),Kt("#btn-dusk").textContent=Ct.duskTarget?mi().dusk:mi().day};Kt("#btn-dusk").onclick=i;const s=()=>{Ct.roads=!Ct.roads,Pr.visible=Ct.roads,Kt("#btn-roads").setAttribute("aria-pressed",String(Ct.roads))};Kt("#btn-roads").onclick=s,addEventListener("keydown",c=>{if(c.target.closest("input,textarea")||c.metaKey||c.ctrlKey)return;if(!Ct.started){c.key==="Enter"&&!c.target.closest("button, a")&&Za(!1);return}const h=c.key.toLowerCase();c.key==="ArrowRight"?e(1):c.key==="ArrowLeft"?e(-1):c.key==="Escape"?Ct.selected>=0?ec():Ya():h==="h"?Ya():h==="t"?Kt("#btn-tour").click():h==="m"?Kt("#btn-sound").click():h==="g"?i():h==="r"?s():h==="l"?t():/^[0-9]$/.test(h)&&fs(h==="0"?9:+h-1)});const r=new D_,a=new ot;let o=null;const l=c=>{const h=Pi.getBoundingClientRect();a.set((c.clientX-h.left)/h.width*2-1,-((c.clientY-h.top)/h.height)*2+1),r.setFromCamera(a,fe);const f=r.intersectObjects(kn.map(u=>u.hit),!1)[0];return f?f.object.userData.site:-1};Pi.addEventListener("pointerdown",c=>{o=[c.clientX,c.clientY]}),Pi.addEventListener("pointermove",c=>{c.pointerType!=="touch"&&(Ct.hovered=l(c),Pi.classList.toggle("hover",Ct.hovered>=0))}),Pi.addEventListener("pointerup",c=>{if(!o||Math.hypot(c.clientX-o[0],c.clientY-o[1])>6)return;const h=l(c);h>=0&&fs(h)}),ce.addEventListener("start",()=>{hn=null,ce.autoRotate=!1}),Pi.addEventListener("webglcontextlost",c=>{c.preventDefault(),Kt("#legend").textContent=mi().lost}),addEventListener("resize",Lc)}function Dc(){const n=innerWidth,t=innerHeight;!Kt("#panel").hidden&&n>760?fe.setViewOffset(n,t,Math.min(213,n*.17),0,n,t):fe.clearViewOffset(),fe.updateProjectionMatrix()}function Lc(){const n=innerWidth,t=innerHeight;wn.setSize(n,t,!1),fe.aspect=n/t,Dc(),ce.maxDistance=Math.max(450,Ac().pos.distanceTo(Dr.target)*1.15);for(const e of kn)e.w=0;for(const e of[...$l,Jl])e&&e.resolution.set(n,t)}let Na=0,my=0,mh=fr;function gy(n){mh||!Ct.started||++my<20||(Na=n>.05?Na+1:Math.max(0,Na-1),Na>40&&(mh=!0,wn.setPixelRatio(1),wn.shadowMap.enabled=!1,Sn.castShadow=!1,Lc()))}const no=new P_;function _y(n){n===Ct.paused||!Ct.ready||(Ct.paused=n,n?(wn.setAnimationLoop(null),no.stop(),Ke.pause(),un&&(clearTimeout(un.id),un.ms=Math.max(0,un.ms-(performance.now()-un.at)))):(no.start(),wn.setAnimationLoop(Eu),Ke.resume(),un&&Mu()))}const kc=()=>_y(document.hidden||!document.hasFocus());window.__audioState=()=>Ke.ctx?Ke.ctx.state:"none";document.addEventListener("visibilitychange",kc);addEventListener("blur",kc);addEventListener("focus",kc);const Ws=new X;function Eu(){const n=no.getDelta(),t=Math.min(n,.05),e=no.elapsedTime;if(window.__frames=(window.__frames||0)+1,gy(n),hn){hn.t+=Math.min(n,.5)/hn.dur;const _=dy(Math.min(hn.t,1));if(ce.target.lerpVectors(hn.fromT,hn.toT,_),fe.position.lerpVectors(hn.fromP,hn.toP,_),fe.position.y+=Math.sin(_*Math.PI)*Math.min(40,hn.fromP.distanceTo(hn.toP)*.18),hn.t>=1){const p=hn;hn=null,p.onDone&&p.onDone()}}ce.target.x=Pe.clamp(ce.target.x,-He.w/2,He.w/2),ce.target.z=Pe.clamp(ce.target.z,-183.47999999999985/2,He.d/2),ce.update();const i=$r(fe.position.x,fe.position.z)+1.2;fe.position.y<i&&(fe.position.y=i),Math.abs(Ct.dusk-Ct.duskTarget)>.001&&(Ct.dusk+=Math.sign(Ct.duskTarget-Ct.dusk)*Math.min(t*.7,Math.abs(Ct.duskTarget-Ct.dusk)),xu());const s=fe.position.distanceTo(ce.target),r=Pe.clamp(s*.6,1.2,90);Sn.target.position.copy(ce.target),Sn.position.copy(ce.target).addScaledVector(tc,300);const a=Sn.shadow.camera;Math.abs(a.right-r)>.5&&(a.left=-r,a.right=r,a.top=r,a.bottom=-r,a.near=50,a.far=600,a.updateProjectionMatrix()),Ec.position.copy(fe.position);const o=Pe.clamp(s*.02,.02,12);Math.abs(fe.near-o)>fe.near*.1&&(fe.near=o,fe.updateProjectionMatrix()),cr.material.uniforms.uTime.value=e;const l=Pe.lerp(.0016,.002,Ct.dusk)*Math.min(1,240/s);Ge.fog.density=l,cr.material.uniforms.fogDensity.value=l;const c=innerWidth,h=innerHeight,f=[],u=kn.map((_,p)=>p).sort((_,p)=>(p===Ct.selected)-(_===Ct.selected)||(p===Ct.hovered)-(_===Ct.hovered)||_-p);for(const _ of kn){const p=kn.indexOf(_),g=fe.position.distanceTo(_.pos),S=p===Ct.selected,b=p===Ct.hovered,M=Math.max(S?1.15:0,Pe.clamp(g/40,.8,2.3))*(b&&!S?1.12:1);_.scale+=(M-_.scale)*Math.min(1,t*8),_.root.scale.setScalar(_.scale),_.beam.material.opacity=(.35+.2*Math.sin(e*2+p))*Pe.smoothstep(g,6,45),_.beam.visible=!S,_.ring.scale.setScalar(1+.08*Math.sin(e*2.5+p)+(b?.12:0)),_.ring.material.opacity=S?.95:.55,_.ring.material.color.setHex(S?16738877:16767370)}for(const _ of u){const p=kn[_];Ws.copy(p.pos),Ws.y+=(_===Ct.selected?1.75:2.3)*p.scale,Ws.project(fe);const g=Ws.z>1,S=(Ws.x*.5+.5)*c,b=(-Ws.y*.5+.5)*h;p.w||(p.el.classList.remove("compact"),p.w=p.el.offsetWidth,p.h=p.el.offsetHeight);let M=!1;const P=U=>[S-U/2-4,b-p.h-4,S+U/2+4,b+4];let C=P(p.w);(U=>f.some(v=>U[0]<v[2]&&U[2]>v[0]&&U[1]<v[3]&&U[3]>v[1]))(C)&&_!==Ct.selected&&_!==Ct.hovered&&(M=!0,C=P(30)),f.push(C),p.el.classList.toggle("compact",M),p.el.classList.toggle("active",_===Ct.selected),p.el.classList.toggle("hidden",g||!Ct.started),p.el.style.transform=`translate(-50%, -100%) translate(${S.toFixed(1)}px, ${b.toFixed(1)}px)`,p.el.style.zIndex=_===Ct.selected||_===Ct.hovered?3:M?1:2}for(const _ of _u){const p=_.phase+e*_.speed;_.obj.position.set(_.c[0]+Math.cos(p)*_.rx,.12+Math.sin(e*1.3+_.phase)*.05,_.c[1]+Math.sin(p)*_.rz);const g=-Math.sin(p)*_.rx*Math.sign(_.speed),S=Math.cos(p)*_.rz*Math.sign(_.speed);_.obj.rotation.y=Math.atan2(-S,g),_.obj.rotation.z=Math.sin(e*1.1+_.phase)*.04,_.obj.scale.setScalar(Pe.clamp(fe.position.distanceTo(_.obj.position)/50,1.2,3.2))}for(const _ of vu)_.position.x+=t*.9,_.position.x>He.w/2+30&&(_.position.x=-He.w/2-30),_.visible=fe.position.y>14;const d=Pe.smoothstep(s,22,70);Ql&&(Ql.visible=s<70);for(const _ of yu)_.material.opacity=_.userData.op*d,_.visible=d>.01;const y=Math.atan2(fe.position.x-ce.target.x,fe.position.z-ce.target.z);if(Kt("#needle").style.transform=`rotate(${y}rad)`,Ke.enabled){let p=Yr(ce.target.x,ce.target.z)<=1?1:0;if(!p)for(let S=0;S<8;S++){const b=S/8*6.283;if(Yr(ce.target.x+Math.cos(b)*6,ce.target.z+Math.sin(b)*6)<=1){p=.75;break}}const g=1-Pe.smoothstep(s,25,140);Ke.setMix({sea:p*(.25+.75*g),hills:(1-p*.8)*g,music:.45+.55*(1-g)})}wn.render(Ge,fe)}Kt("#intro-lang").onclick=()=>fo(_i==="tr"?"en":"tr");fo(_i);iy().catch(n=>{console.error(n),Kt("#loading").textContent=mi().loadFail+n.message});
