(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const mc="170",js={ROTATE:0,DOLLY:1,PAN:2},Xs={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},If=0,Jc=1,Df=2,gc=1,Ju=2,pi=3,Zi=0,Je=1,ln=2,zi=0,Js=1,Qc=2,th=3,eh=4,Uf=5,cs=100,Nf=101,Of=102,Ff=103,Bf=104,zf=200,kf=201,Hf=202,Vf=203,_l=204,vl=205,Gf=206,Wf=207,Xf=208,Yf=209,qf=210,Zf=211,$f=212,Kf=213,jf=214,xl=0,Ml=1,yl=2,rr=3,Sl=4,El=5,bl=6,Tl=7,Qu=0,Jf=1,Qf=2,ki=0,tp=1,ep=2,np=3,td=4,ip=5,sp=6,rp=7,ed=300,or=301,ar=302,wl=303,Al=304,da=306,lr=1e3,us=1001,Rl=1002,gn=1003,op=1004,co=1005,Jn=1006,Ta=1007,ds=1008,Si=1009,nd=1010,id=1011,Vr=1012,_c=1013,ps=1014,Qn=1015,Jr=1016,vc=1017,xc=1018,cr=1020,sd=35902,rd=1021,od=1022,Fn=1023,ad=1024,ld=1025,Qs=1026,hr=1027,Mc=1028,yc=1029,cd=1030,Sc=1031,Ec=1033,qo=33776,Zo=33777,$o=33778,Ko=33779,Cl=35840,Pl=35841,Ll=35842,Il=35843,Dl=36196,Ul=37492,Nl=37496,Ol=37808,Fl=37809,Bl=37810,zl=37811,kl=37812,Hl=37813,Vl=37814,Gl=37815,Wl=37816,Xl=37817,Yl=37818,ql=37819,Zl=37820,$l=37821,jo=36492,Kl=36494,jl=36495,hd=36283,Jl=36284,Ql=36285,tc=36286,ap=3200,lp=3201,ud=0,cp=1,Oi="",rn="srgb",mr="srgb-linear",fa="linear",ue="srgb",Es=7680,nh=519,hp=512,up=513,dp=514,dd=515,fp=516,pp=517,mp=518,gp=519,ih=35044,sh="300 es",gi=2e3,ea=2001;class vs{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const We=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let rh=1234567;const Ir=Math.PI/180,Gr=180/Math.PI;function xs(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(We[n&255]+We[n>>8&255]+We[n>>16&255]+We[n>>24&255]+"-"+We[t&255]+We[t>>8&255]+"-"+We[t>>16&15|64]+We[t>>24&255]+"-"+We[e&63|128]+We[e>>8&255]+"-"+We[e>>16&255]+We[e>>24&255]+We[i&255]+We[i>>8&255]+We[i>>16&255]+We[i>>24&255]).toLowerCase()}function Be(n,t,e){return Math.max(t,Math.min(e,n))}function bc(n,t){return(n%t+t)%t}function _p(n,t,e,i,s){return i+(n-t)*(s-i)/(e-t)}function vp(n,t,e){return n!==t?(e-n)/(t-n):0}function Dr(n,t,e){return(1-e)*n+e*t}function xp(n,t,e,i){return Dr(n,t,1-Math.exp(-e*i))}function Mp(n,t=1){return t-Math.abs(bc(n,t*2)-t)}function yp(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function Sp(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function Ep(n,t){return n+Math.floor(Math.random()*(t-n+1))}function bp(n,t){return n+Math.random()*(t-n)}function Tp(n){return n*(.5-Math.random())}function wp(n){n!==void 0&&(rh=n);let t=rh+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Ap(n){return n*Ir}function Rp(n){return n*Gr}function Cp(n){return(n&n-1)===0&&n!==0}function Pp(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Lp(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Ip(n,t,e,i,s){const r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+i)/2),h=o((t+i)/2),u=r((t-i)/2),d=o((t-i)/2),f=r((i-t)/2),p=o((i-t)/2);switch(s){case"XYX":n.set(a*h,l*u,l*d,a*c);break;case"YZY":n.set(l*d,a*h,l*u,a*c);break;case"ZXZ":n.set(l*u,l*d,a*h,a*c);break;case"XZX":n.set(a*h,l*p,l*f,a*c);break;case"YXY":n.set(l*f,a*h,l*p,a*c);break;case"ZYZ":n.set(l*p,l*f,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Hs(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function $e(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Hi={DEG2RAD:Ir,RAD2DEG:Gr,generateUUID:xs,clamp:Be,euclideanModulo:bc,mapLinear:_p,inverseLerp:vp,lerp:Dr,damp:xp,pingpong:Mp,smoothstep:yp,smootherstep:Sp,randInt:Ep,randFloat:bp,randFloatSpread:Tp,seededRandom:wp,degToRad:Ap,radToDeg:Rp,isPowerOfTwo:Cp,ceilPowerOfTwo:Pp,floorPowerOfTwo:Lp,setQuaternionFromProperEuler:Ip,normalize:$e,denormalize:Hs};class et{constructor(t=0,e=0){et.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Be(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class qt{constructor(t,e,i,s,r,o,a,l,c){qt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c)}set(t,e,i,s,r,o,a,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],u=i[7],d=i[2],f=i[5],p=i[8],_=s[0],g=s[3],m=s[6],y=s[1],M=s[4],x=s[7],L=s[2],A=s[5],R=s[8];return r[0]=o*_+a*y+l*L,r[3]=o*g+a*M+l*A,r[6]=o*m+a*x+l*R,r[1]=c*_+h*y+u*L,r[4]=c*g+h*M+u*A,r[7]=c*m+h*x+u*R,r[2]=d*_+f*y+p*L,r[5]=d*g+f*M+p*A,r[8]=d*m+f*x+p*R,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-i*r*h+i*a*l+s*r*c-s*o*l}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,d=a*l-h*r,f=c*r-o*l,p=e*u+i*d+s*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/p;return t[0]=u*_,t[1]=(s*c-h*i)*_,t[2]=(a*i-s*o)*_,t[3]=d*_,t[4]=(h*e-s*l)*_,t[5]=(s*r-a*e)*_,t[6]=f*_,t[7]=(i*l-c*e)*_,t[8]=(o*e-i*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(wa.makeScale(t,e)),this}rotate(t){return this.premultiply(wa.makeRotation(-t)),this}translate(t,e){return this.premultiply(wa.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const wa=new qt;function fd(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function na(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Dp(){const n=na("canvas");return n.style.display="block",n}const oh={};function Cr(n){n in oh||(oh[n]=!0,console.warn(n))}function Up(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}function Np(n){const t=n.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Op(n){const t=n.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const ne={enabled:!0,workingColorSpace:mr,spaces:{},convert:function(n,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===ue&&(n.r=xi(n.r),n.g=xi(n.g),n.b=xi(n.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(n.applyMatrix3(this.spaces[t].toXYZ),n.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===ue&&(n.r=tr(n.r),n.g=tr(n.g),n.b=tr(n.b))),n},fromWorkingColorSpace:function(n,t){return this.convert(n,this.workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===Oi?fa:this.spaces[n].transfer},getLuminanceCoefficients:function(n,t=this.workingColorSpace){return n.fromArray(this.spaces[t].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,t,e){return n.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function xi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function tr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const ah=[.64,.33,.3,.6,.15,.06],lh=[.2126,.7152,.0722],ch=[.3127,.329],hh=new qt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),uh=new qt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);ne.define({[mr]:{primaries:ah,whitePoint:ch,transfer:fa,toXYZ:hh,fromXYZ:uh,luminanceCoefficients:lh,workingColorSpaceConfig:{unpackColorSpace:rn},outputColorSpaceConfig:{drawingBufferColorSpace:rn}},[rn]:{primaries:ah,whitePoint:ch,transfer:ue,toXYZ:hh,fromXYZ:uh,luminanceCoefficients:lh,outputColorSpaceConfig:{drawingBufferColorSpace:rn}}});let bs;class Fp{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{bs===void 0&&(bs=na("canvas")),bs.width=t.width,bs.height=t.height;const i=bs.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=bs}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=na("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=xi(r[o]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(xi(e[i]/255)*255):e[i]=xi(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Bp=0;class pd{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Bp++}),this.uuid=xs(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Aa(s[o].image)):r.push(Aa(s[o]))}else r=Aa(s);i.url=r}return e||(t.images[this.uuid]=i),i}}function Aa(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Fp.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let zp=0;class Ze extends vs{constructor(t=Ze.DEFAULT_IMAGE,e=Ze.DEFAULT_MAPPING,i=us,s=us,r=Jn,o=ds,a=Fn,l=Si,c=Ze.DEFAULT_ANISOTROPY,h=Oi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:zp++}),this.uuid=xs(),this.name="",this.source=new pd(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new et(0,0),this.repeat=new et(1,1),this.center=new et(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==ed)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case lr:t.x=t.x-Math.floor(t.x);break;case us:t.x=t.x<0?0:1;break;case Rl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case lr:t.y=t.y-Math.floor(t.y);break;case us:t.y=t.y<0?0:1;break;case Rl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ze.DEFAULT_IMAGE=null;Ze.DEFAULT_MAPPING=ed;Ze.DEFAULT_ANISOTROPY=1;class Te{constructor(t=0,e=0,i=0,s=1){Te.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r;const l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],p=l[9],_=l[2],g=l[6],m=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(p-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(p+g)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const M=(c+1)/2,x=(f+1)/2,L=(m+1)/2,A=(h+d)/4,R=(u+_)/4,I=(p+g)/4;return M>x&&M>L?M<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(M),s=A/i,r=R/i):x>L?x<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),i=A/s,r=I/s):L<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(L),i=R/r,s=I/r),this.set(i,s,r,e),this}let y=Math.sqrt((g-p)*(g-p)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(y)<.001&&(y=1),this.x=(g-p)/y,this.y=(u-_)/y,this.z=(d-h)/y,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class kp extends vs{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Te(0,0,t,e),this.scissorTest=!1,this.viewport=new Te(0,0,t,e);const s={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Jn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const r=new Ze(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new pd(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ms extends kp{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class md extends Ze{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=gn,this.minFilter=gn,this.wrapR=us,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Hp extends Ze{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=gn,this.minFilter=gn,this.wrapR=us,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class _n{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,o,a){let l=i[s+0],c=i[s+1],h=i[s+2],u=i[s+3];const d=r[o+0],f=r[o+1],p=r[o+2],_=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=p,t[e+3]=_;return}if(u!==_||l!==d||c!==f||h!==p){let g=1-a;const m=l*d+c*f+h*p+u*_,y=m>=0?1:-1,M=1-m*m;if(M>Number.EPSILON){const L=Math.sqrt(M),A=Math.atan2(L,m*y);g=Math.sin(g*A)/L,a=Math.sin(a*A)/L}const x=a*y;if(l=l*g+d*x,c=c*g+f*x,h=h*g+p*x,u=u*g+_*x,g===1-a){const L=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=L,c*=L,h*=L,u*=L}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,i,s,r,o){const a=i[s],l=i[s+1],c=i[s+2],h=i[s+3],u=r[o],d=r[o+1],f=r[o+2],p=r[o+3];return t[e]=a*p+h*u+l*f-c*d,t[e+1]=l*p+h*d+c*u-a*f,t[e+2]=c*p+h*f+a*d-l*u,t[e+3]=h*p-a*u-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(s/2),u=a(r/2),d=l(i/2),f=l(s/2),p=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u-d*f*p;break;case"YXZ":this._x=d*h*u+c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u+d*f*p;break;case"ZXY":this._x=d*h*u-c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u-d*f*p;break;case"ZYX":this._x=d*h*u-c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u+d*f*p;break;case"YZX":this._x=d*h*u+c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u-d*f*p;break;case"XZY":this._x=d*h*u-c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u+d*f*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=i+a+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(i>a&&i>u){const f=2*Math.sqrt(1+i-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>u){const f=2*Math.sqrt(1+a-i-u);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+u-i-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Be(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=i*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-i*c,this._z=r*h+o*c+i*l-s*a,this._w=o*h-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+i*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-e;return this._w=f*o+e*this._w,this._x=f*i+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=o*u+this._w*d,this._x=i*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class C{constructor(t=0,e=0,i=0){C.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(dh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(dh.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*i),h=2*(a*e-r*s),u=2*(r*i-o*e);return this.x=e+l*c+o*u-a*h,this.y=i+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Ra.copy(this).projectOnVector(t),this.sub(Ra)}reflect(t){return this.sub(Ra.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Be(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ra=new C,dh=new _n;class Bn{constructor(t=new C(1/0,1/0,1/0),e=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Cn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Cn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=Cn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Cn):Cn.fromBufferAttribute(r,o),Cn.applyMatrix4(t.matrixWorld),this.expandByPoint(Cn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ho.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ho.copy(i.boundingBox)),ho.applyMatrix4(t.matrixWorld),this.union(ho)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Cn),Cn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Sr),uo.subVectors(this.max,Sr),Ts.subVectors(t.a,Sr),ws.subVectors(t.b,Sr),As.subVectors(t.c,Sr),Ci.subVectors(ws,Ts),Pi.subVectors(As,ws),Ji.subVectors(Ts,As);let e=[0,-Ci.z,Ci.y,0,-Pi.z,Pi.y,0,-Ji.z,Ji.y,Ci.z,0,-Ci.x,Pi.z,0,-Pi.x,Ji.z,0,-Ji.x,-Ci.y,Ci.x,0,-Pi.y,Pi.x,0,-Ji.y,Ji.x,0];return!Ca(e,Ts,ws,As,uo)||(e=[1,0,0,0,1,0,0,0,1],!Ca(e,Ts,ws,As,uo))?!1:(fo.crossVectors(Ci,Pi),e=[fo.x,fo.y,fo.z],Ca(e,Ts,ws,As,uo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Cn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Cn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ci[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ci[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ci[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ci[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ci[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ci[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ci[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ci[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ci),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const ci=[new C,new C,new C,new C,new C,new C,new C,new C],Cn=new C,ho=new Bn,Ts=new C,ws=new C,As=new C,Ci=new C,Pi=new C,Ji=new C,Sr=new C,uo=new C,fo=new C,Qi=new C;function Ca(n,t,e,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Qi.fromArray(n,r);const a=s.x*Math.abs(Qi.x)+s.y*Math.abs(Qi.y)+s.z*Math.abs(Qi.z),l=t.dot(Qi),c=e.dot(Qi),h=i.dot(Qi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const Vp=new Bn,Er=new C,Pa=new C;class Qr{constructor(t=new C,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):Vp.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Er.subVectors(t,this.center);const e=Er.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(Er,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Pa.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Er.copy(t.center).add(Pa)),this.expandByPoint(Er.copy(t.center).sub(Pa))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const hi=new C,La=new C,po=new C,Li=new C,Ia=new C,mo=new C,Da=new C;class Tc{constructor(t=new C,e=new C(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,hi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=hi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(hi.copy(this.origin).addScaledVector(this.direction,e),hi.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){La.copy(t).add(e).multiplyScalar(.5),po.copy(e).sub(t).normalize(),Li.copy(this.origin).sub(La);const r=t.distanceTo(e)*.5,o=-this.direction.dot(po),a=Li.dot(this.direction),l=-Li.dot(po),c=Li.lengthSq(),h=Math.abs(1-o*o);let u,d,f,p;if(h>0)if(u=o*l-a,d=o*a-l,p=r*h,u>=0)if(d>=-p)if(d<=p){const _=1/h;u*=_,d*=_,f=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d<=-p?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=p?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(La).addScaledVector(po,d),f}intersectSphere(t,e){hi.subVectors(t.center,this.origin);const i=hi.dot(this.direction),s=hi.dot(hi)-i*i,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(i=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(i=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,hi)!==null}intersectTriangle(t,e,i,s,r){Ia.subVectors(e,t),mo.subVectors(i,t),Da.crossVectors(Ia,mo);let o=this.direction.dot(Da),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Li.subVectors(this.origin,t);const l=a*this.direction.dot(mo.crossVectors(Li,mo));if(l<0)return null;const c=a*this.direction.dot(Ia.cross(Li));if(c<0||l+c>o)return null;const h=-a*Li.dot(Da);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Kt{constructor(t,e,i,s,r,o,a,l,c,h,u,d,f,p,_,g){Kt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c,h,u,d,f,p,_,g)}set(t,e,i,s,r,o,a,l,c,h,u,d,f,p,_,g){const m=this.elements;return m[0]=t,m[4]=e,m[8]=i,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=h,m[10]=u,m[14]=d,m[3]=f,m[7]=p,m[11]=_,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Kt().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,s=1/Rs.setFromMatrixColumn(t,0).length(),r=1/Rs.setFromMatrixColumn(t,1).length(),o=1/Rs.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const d=o*h,f=o*u,p=a*h,_=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=f+p*c,e[5]=d-_*c,e[9]=-a*l,e[2]=_-d*c,e[6]=p+f*c,e[10]=o*l}else if(t.order==="YXZ"){const d=l*h,f=l*u,p=c*h,_=c*u;e[0]=d+_*a,e[4]=p*a-f,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=f*a-p,e[6]=_+d*a,e[10]=o*l}else if(t.order==="ZXY"){const d=l*h,f=l*u,p=c*h,_=c*u;e[0]=d-_*a,e[4]=-o*u,e[8]=p+f*a,e[1]=f+p*a,e[5]=o*h,e[9]=_-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const d=o*h,f=o*u,p=a*h,_=a*u;e[0]=l*h,e[4]=p*c-f,e[8]=d*c+_,e[1]=l*u,e[5]=_*c+d,e[9]=f*c-p,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const d=o*l,f=o*c,p=a*l,_=a*c;e[0]=l*h,e[4]=_-d*u,e[8]=p*u+f,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=f*u+p,e[10]=d-_*u}else if(t.order==="XZY"){const d=o*l,f=o*c,p=a*l,_=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+_,e[5]=o*h,e[9]=f*u-p,e[2]=p*u-f,e[6]=a*h,e[10]=_*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Gp,t,Wp)}lookAt(t,e,i){const s=this.elements;return fn.subVectors(t,e),fn.lengthSq()===0&&(fn.z=1),fn.normalize(),Ii.crossVectors(i,fn),Ii.lengthSq()===0&&(Math.abs(i.z)===1?fn.x+=1e-4:fn.z+=1e-4,fn.normalize(),Ii.crossVectors(i,fn)),Ii.normalize(),go.crossVectors(fn,Ii),s[0]=Ii.x,s[4]=go.x,s[8]=fn.x,s[1]=Ii.y,s[5]=go.y,s[9]=fn.y,s[2]=Ii.z,s[6]=go.z,s[10]=fn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],u=i[5],d=i[9],f=i[13],p=i[2],_=i[6],g=i[10],m=i[14],y=i[3],M=i[7],x=i[11],L=i[15],A=s[0],R=s[4],I=s[8],T=s[12],E=s[1],D=s[5],V=s[9],z=s[13],G=s[2],j=s[6],W=s[10],st=s[14],X=s[3],ut=s[7],Mt=s[11],wt=s[15];return r[0]=o*A+a*E+l*G+c*X,r[4]=o*R+a*D+l*j+c*ut,r[8]=o*I+a*V+l*W+c*Mt,r[12]=o*T+a*z+l*st+c*wt,r[1]=h*A+u*E+d*G+f*X,r[5]=h*R+u*D+d*j+f*ut,r[9]=h*I+u*V+d*W+f*Mt,r[13]=h*T+u*z+d*st+f*wt,r[2]=p*A+_*E+g*G+m*X,r[6]=p*R+_*D+g*j+m*ut,r[10]=p*I+_*V+g*W+m*Mt,r[14]=p*T+_*z+g*st+m*wt,r[3]=y*A+M*E+x*G+L*X,r[7]=y*R+M*D+x*j+L*ut,r[11]=y*I+M*V+x*W+L*Mt,r[15]=y*T+M*z+x*st+L*wt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],f=t[14],p=t[3],_=t[7],g=t[11],m=t[15];return p*(+r*l*u-s*c*u-r*a*d+i*c*d+s*a*f-i*l*f)+_*(+e*l*f-e*c*d+r*o*d-s*o*f+s*c*h-r*l*h)+g*(+e*c*u-e*a*f-r*o*u+i*o*f+r*a*h-i*c*h)+m*(-s*a*h-e*l*u+e*a*d+s*o*u-i*o*d+i*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],f=t[11],p=t[12],_=t[13],g=t[14],m=t[15],y=u*g*c-_*d*c+_*l*f-a*g*f-u*l*m+a*d*m,M=p*d*c-h*g*c-p*l*f+o*g*f+h*l*m-o*d*m,x=h*_*c-p*u*c+p*a*f-o*_*f-h*a*m+o*u*m,L=p*u*l-h*_*l-p*a*d+o*_*d+h*a*g-o*u*g,A=e*y+i*M+s*x+r*L;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/A;return t[0]=y*R,t[1]=(_*d*r-u*g*r-_*s*f+i*g*f+u*s*m-i*d*m)*R,t[2]=(a*g*r-_*l*r+_*s*c-i*g*c-a*s*m+i*l*m)*R,t[3]=(u*l*r-a*d*r-u*s*c+i*d*c+a*s*f-i*l*f)*R,t[4]=M*R,t[5]=(h*g*r-p*d*r+p*s*f-e*g*f-h*s*m+e*d*m)*R,t[6]=(p*l*r-o*g*r-p*s*c+e*g*c+o*s*m-e*l*m)*R,t[7]=(o*d*r-h*l*r+h*s*c-e*d*c-o*s*f+e*l*f)*R,t[8]=x*R,t[9]=(p*u*r-h*_*r-p*i*f+e*_*f+h*i*m-e*u*m)*R,t[10]=(o*_*r-p*a*r+p*i*c-e*_*c-o*i*m+e*a*m)*R,t[11]=(h*a*r-o*u*r-h*i*c+e*u*c+o*i*f-e*a*f)*R,t[12]=L*R,t[13]=(h*_*s-p*u*s+p*i*d-e*_*d-h*i*g+e*u*g)*R,t[14]=(p*a*s-o*_*s-p*i*l+e*_*l+o*i*g-e*a*g)*R,t[15]=(o*u*s-h*a*s+h*i*l-e*u*l-o*i*d+e*a*d)*R,this}scale(t){const e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),s=Math.sin(e),r=1-i,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+i,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){const s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,d=r*c,f=r*h,p=r*u,_=o*h,g=o*u,m=a*u,y=l*c,M=l*h,x=l*u,L=i.x,A=i.y,R=i.z;return s[0]=(1-(_+m))*L,s[1]=(f+x)*L,s[2]=(p-M)*L,s[3]=0,s[4]=(f-x)*A,s[5]=(1-(d+m))*A,s[6]=(g+y)*A,s[7]=0,s[8]=(p+M)*R,s[9]=(g-y)*R,s[10]=(1-(d+_))*R,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){const s=this.elements;let r=Rs.set(s[0],s[1],s[2]).length();const o=Rs.set(s[4],s[5],s[6]).length(),a=Rs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Pn.copy(this);const c=1/r,h=1/o,u=1/a;return Pn.elements[0]*=c,Pn.elements[1]*=c,Pn.elements[2]*=c,Pn.elements[4]*=h,Pn.elements[5]*=h,Pn.elements[6]*=h,Pn.elements[8]*=u,Pn.elements[9]*=u,Pn.elements[10]*=u,e.setFromRotationMatrix(Pn),i.x=r,i.y=o,i.z=a,this}makePerspective(t,e,i,s,r,o,a=gi){const l=this.elements,c=2*r/(e-t),h=2*r/(i-s),u=(e+t)/(e-t),d=(i+s)/(i-s);let f,p;if(a===gi)f=-(o+r)/(o-r),p=-2*o*r/(o-r);else if(a===ea)f=-o/(o-r),p=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=p,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,s,r,o,a=gi){const l=this.elements,c=1/(e-t),h=1/(i-s),u=1/(o-r),d=(e+t)*c,f=(i+s)*h;let p,_;if(a===gi)p=(o+r)*u,_=-2*u;else if(a===ea)p=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=_,l[14]=-p,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const Rs=new C,Pn=new Kt,Gp=new C(0,0,0),Wp=new C(1,1,1),Ii=new C,go=new C,fn=new C,fh=new Kt,ph=new _n;class ei{constructor(t=0,e=0,i=0,s=ei.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(Be(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Be(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Be(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Be(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Be(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Be(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return fh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(fh,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return ph.setFromEuler(this),this.setFromQuaternion(ph,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ei.DEFAULT_ORDER="XYZ";class wc{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Xp=0;const mh=new C,Cs=new _n,ui=new Kt,_o=new C,br=new C,Yp=new C,qp=new _n,gh=new C(1,0,0),_h=new C(0,1,0),vh=new C(0,0,1),xh={type:"added"},Zp={type:"removed"},Ps={type:"childadded",child:null},Ua={type:"childremoved",child:null};class ke extends vs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Xp++}),this.uuid=xs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ke.DEFAULT_UP.clone();const t=new C,e=new ei,i=new _n,s=new C(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Kt},normalMatrix:{value:new qt}}),this.matrix=new Kt,this.matrixWorld=new Kt,this.matrixAutoUpdate=ke.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ke.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new wc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Cs.setFromAxisAngle(t,e),this.quaternion.multiply(Cs),this}rotateOnWorldAxis(t,e){return Cs.setFromAxisAngle(t,e),this.quaternion.premultiply(Cs),this}rotateX(t){return this.rotateOnAxis(gh,t)}rotateY(t){return this.rotateOnAxis(_h,t)}rotateZ(t){return this.rotateOnAxis(vh,t)}translateOnAxis(t,e){return mh.copy(t).applyQuaternion(this.quaternion),this.position.add(mh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(gh,t)}translateY(t){return this.translateOnAxis(_h,t)}translateZ(t){return this.translateOnAxis(vh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ui.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?_o.copy(t):_o.set(t,e,i);const s=this.parent;this.updateWorldMatrix(!0,!1),br.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ui.lookAt(br,_o,this.up):ui.lookAt(_o,br,this.up),this.quaternion.setFromRotationMatrix(ui),s&&(ui.extractRotation(s.matrixWorld),Cs.setFromRotationMatrix(ui),this.quaternion.premultiply(Cs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(xh),Ps.child=t,this.dispatchEvent(Ps),Ps.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Zp),Ua.child=t,this.dispatchEvent(Ua),Ua.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ui.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ui.multiply(t.parent.matrixWorld)),t.applyMatrix4(ui),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(xh),Ps.child=t,this.dispatchEvent(Ps),Ps.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(br,t,Yp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(br,qp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),f=o(t.animations),p=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),p.length>0&&(i.nodes=p)}return i.object=s,i;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const s=t.children[i];this.add(s.clone())}return this}}ke.DEFAULT_UP=new C(0,1,0);ke.DEFAULT_MATRIX_AUTO_UPDATE=!0;ke.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ln=new C,di=new C,Na=new C,fi=new C,Ls=new C,Is=new C,Mh=new C,Oa=new C,Fa=new C,Ba=new C,za=new Te,ka=new Te,Ha=new Te;class Un{constructor(t=new C,e=new C,i=new C){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),Ln.subVectors(t,e),s.cross(Ln);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){Ln.subVectors(s,e),di.subVectors(i,e),Na.subVectors(t,e);const o=Ln.dot(Ln),a=Ln.dot(di),l=Ln.dot(Na),c=di.dot(di),h=di.dot(Na),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;const d=1/u,f=(c*l-a*h)*d,p=(o*h-a*l)*d;return r.set(1-f-p,p,f)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,fi)===null?!1:fi.x>=0&&fi.y>=0&&fi.x+fi.y<=1}static getInterpolation(t,e,i,s,r,o,a,l){return this.getBarycoord(t,e,i,s,fi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,fi.x),l.addScaledVector(o,fi.y),l.addScaledVector(a,fi.z),l)}static getInterpolatedAttribute(t,e,i,s,r,o){return za.setScalar(0),ka.setScalar(0),Ha.setScalar(0),za.fromBufferAttribute(t,e),ka.fromBufferAttribute(t,i),Ha.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(za,r.x),o.addScaledVector(ka,r.y),o.addScaledVector(Ha,r.z),o}static isFrontFacing(t,e,i,s){return Ln.subVectors(i,e),di.subVectors(t,e),Ln.cross(di).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ln.subVectors(this.c,this.b),di.subVectors(this.a,this.b),Ln.cross(di).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Un.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Un.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return Un.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return Un.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Un.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,s=this.b,r=this.c;let o,a;Ls.subVectors(s,i),Is.subVectors(r,i),Oa.subVectors(t,i);const l=Ls.dot(Oa),c=Is.dot(Oa);if(l<=0&&c<=0)return e.copy(i);Fa.subVectors(t,s);const h=Ls.dot(Fa),u=Is.dot(Fa);if(h>=0&&u<=h)return e.copy(s);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(i).addScaledVector(Ls,o);Ba.subVectors(t,r);const f=Ls.dot(Ba),p=Is.dot(Ba);if(p>=0&&f<=p)return e.copy(r);const _=f*c-l*p;if(_<=0&&c>=0&&p<=0)return a=c/(c-p),e.copy(i).addScaledVector(Is,a);const g=h*p-f*u;if(g<=0&&u-h>=0&&f-p>=0)return Mh.subVectors(r,s),a=(u-h)/(u-h+(f-p)),e.copy(s).addScaledVector(Mh,a);const m=1/(g+_+d);return o=_*m,a=d*m,e.copy(i).addScaledVector(Ls,o).addScaledVector(Is,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const gd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Di={h:0,s:0,l:0},vo={h:0,s:0,l:0};function Va(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class Wt{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=rn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ne.toWorkingColorSpace(this,e),this}setRGB(t,e,i,s=ne.workingColorSpace){return this.r=t,this.g=e,this.b=i,ne.toWorkingColorSpace(this,s),this}setHSL(t,e,i,s=ne.workingColorSpace){if(t=bc(t,1),e=Be(e,0,1),i=Be(i,0,1),e===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=Va(o,r,t+1/3),this.g=Va(o,r,t),this.b=Va(o,r,t-1/3)}return ne.toWorkingColorSpace(this,s),this}setStyle(t,e=rn){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=rn){const i=gd[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=xi(t.r),this.g=xi(t.g),this.b=xi(t.b),this}copyLinearToSRGB(t){return this.r=tr(t.r),this.g=tr(t.g),this.b=tr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=rn){return ne.fromWorkingColorSpace(Xe.copy(this),t),Math.round(Be(Xe.r*255,0,255))*65536+Math.round(Be(Xe.g*255,0,255))*256+Math.round(Be(Xe.b*255,0,255))}getHexString(t=rn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ne.workingColorSpace){ne.fromWorkingColorSpace(Xe.copy(this),e);const i=Xe.r,s=Xe.g,r=Xe.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case i:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-i)/u+2;break;case r:l=(i-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ne.workingColorSpace){return ne.fromWorkingColorSpace(Xe.copy(this),e),t.r=Xe.r,t.g=Xe.g,t.b=Xe.b,t}getStyle(t=rn){ne.fromWorkingColorSpace(Xe.copy(this),t);const e=Xe.r,i=Xe.g,s=Xe.b;return t!==rn?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(Di),this.setHSL(Di.h+t,Di.s+e,Di.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Di),t.getHSL(vo);const i=Dr(Di.h,vo.h,e),s=Dr(Di.s,vo.s,e),r=Dr(Di.l,vo.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Xe=new Wt;Wt.NAMES=gd;let $p=0;class to extends vs{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:$p++}),this.uuid=xs(),this.name="",this.blending=Js,this.side=Zi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=_l,this.blendDst=vl,this.blendEquation=cs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Wt(0,0,0),this.blendAlpha=0,this.depthFunc=rr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=nh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Es,this.stencilZFail=Es,this.stencilZPass=Es,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Js&&(i.blending=this.blending),this.side!==Zi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==_l&&(i.blendSrc=this.blendSrc),this.blendDst!==vl&&(i.blendDst=this.blendDst),this.blendEquation!==cs&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==rr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==nh&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Es&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Es&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Es&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Ac extends to{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Wt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ei,this.combine=Qu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Le=new C,xo=new et;class Sn{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=ih,this.updateRanges=[],this.gpuType=Qn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)xo.fromBufferAttribute(this,e),xo.applyMatrix3(t),this.setXY(e,xo.x,xo.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Le.fromBufferAttribute(this,e),Le.applyMatrix3(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Le.fromBufferAttribute(this,e),Le.applyMatrix4(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Le.fromBufferAttribute(this,e),Le.applyNormalMatrix(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Le.fromBufferAttribute(this,e),Le.transformDirection(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Hs(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=$e(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Hs(e,this.array)),e}setX(t,e){return this.normalized&&(e=$e(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Hs(e,this.array)),e}setY(t,e){return this.normalized&&(e=$e(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Hs(e,this.array)),e}setZ(t,e){return this.normalized&&(e=$e(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Hs(e,this.array)),e}setW(t,e){return this.normalized&&(e=$e(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=$e(e,this.array),i=$e(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=$e(e,this.array),i=$e(i,this.array),s=$e(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=$e(e,this.array),i=$e(i,this.array),s=$e(s,this.array),r=$e(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==ih&&(t.usage=this.usage),t}}class _d extends Sn{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class vd extends Sn{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class Vt extends Sn{constructor(t,e,i){super(new Float32Array(t),e,i)}}let Kp=0;const xn=new Kt,Ga=new ke,Ds=new C,pn=new Bn,Tr=new Bn,Fe=new C;class Ae extends vs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Kp++}),this.uuid=xs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(fd(t)?vd:_d)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new qt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return xn.makeRotationFromQuaternion(t),this.applyMatrix4(xn),this}rotateX(t){return xn.makeRotationX(t),this.applyMatrix4(xn),this}rotateY(t){return xn.makeRotationY(t),this.applyMatrix4(xn),this}rotateZ(t){return xn.makeRotationZ(t),this.applyMatrix4(xn),this}translate(t,e,i){return xn.makeTranslation(t,e,i),this.applyMatrix4(xn),this}scale(t,e,i){return xn.makeScale(t,e,i),this.applyMatrix4(xn),this}lookAt(t){return Ga.lookAt(t),Ga.updateMatrix(),this.applyMatrix4(Ga.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ds).negate(),this.translate(Ds.x,Ds.y,Ds.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Vt(i,3))}else{for(let i=0,s=e.count;i<s;i++){const r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Bn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){const r=e[i];pn.setFromBufferAttribute(r),this.morphTargetsRelative?(Fe.addVectors(this.boundingBox.min,pn.min),this.boundingBox.expandByPoint(Fe),Fe.addVectors(this.boundingBox.max,pn.max),this.boundingBox.expandByPoint(Fe)):(this.boundingBox.expandByPoint(pn.min),this.boundingBox.expandByPoint(pn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Qr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new C,1/0);return}if(t){const i=this.boundingSphere.center;if(pn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];Tr.setFromBufferAttribute(a),this.morphTargetsRelative?(Fe.addVectors(pn.min,Tr.min),pn.expandByPoint(Fe),Fe.addVectors(pn.max,Tr.max),pn.expandByPoint(Fe)):(pn.expandByPoint(Tr.min),pn.expandByPoint(Tr.max))}pn.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)Fe.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(Fe));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Fe.fromBufferAttribute(a,c),l&&(Ds.fromBufferAttribute(t,c),Fe.add(Ds)),s=Math.max(s,i.distanceToSquared(Fe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Sn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let I=0;I<i.count;I++)a[I]=new C,l[I]=new C;const c=new C,h=new C,u=new C,d=new et,f=new et,p=new et,_=new C,g=new C;function m(I,T,E){c.fromBufferAttribute(i,I),h.fromBufferAttribute(i,T),u.fromBufferAttribute(i,E),d.fromBufferAttribute(r,I),f.fromBufferAttribute(r,T),p.fromBufferAttribute(r,E),h.sub(c),u.sub(c),f.sub(d),p.sub(d);const D=1/(f.x*p.y-p.x*f.y);isFinite(D)&&(_.copy(h).multiplyScalar(p.y).addScaledVector(u,-f.y).multiplyScalar(D),g.copy(u).multiplyScalar(f.x).addScaledVector(h,-p.x).multiplyScalar(D),a[I].add(_),a[T].add(_),a[E].add(_),l[I].add(g),l[T].add(g),l[E].add(g))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let I=0,T=y.length;I<T;++I){const E=y[I],D=E.start,V=E.count;for(let z=D,G=D+V;z<G;z+=3)m(t.getX(z+0),t.getX(z+1),t.getX(z+2))}const M=new C,x=new C,L=new C,A=new C;function R(I){L.fromBufferAttribute(s,I),A.copy(L);const T=a[I];M.copy(T),M.sub(L.multiplyScalar(L.dot(T))).normalize(),x.crossVectors(A,T);const D=x.dot(l[I])<0?-1:1;o.setXYZW(I,M.x,M.y,M.z,D)}for(let I=0,T=y.length;I<T;++I){const E=y[I],D=E.start,V=E.count;for(let z=D,G=D+V;z<G;z+=3)R(t.getX(z+0)),R(t.getX(z+1)),R(t.getX(z+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Sn(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);const s=new C,r=new C,o=new C,a=new C,l=new C,c=new C,h=new C,u=new C;if(t)for(let d=0,f=t.count;d<f;d+=3){const p=t.getX(d+0),_=t.getX(d+1),g=t.getX(d+2);s.fromBufferAttribute(e,p),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,g),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(i,p),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,g),a.add(h),l.add(h),c.add(h),i.setXYZ(p,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Fe.fromBufferAttribute(t,e),Fe.normalize(),t.setXYZ(e,Fe.x,Fe.y,Fe.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h);let f=0,p=0;for(let _=0,g=l.length;_<g;_++){a.isInterleavedBufferAttribute?f=l[_]*a.data.stride+a.offset:f=l[_]*h;for(let m=0;m<h;m++)d[p++]=c[f++]}return new Sn(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ae,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=t(l,i);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){const d=c[h],f=t(d,i);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const f=c[u];h.push(f.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const yh=new Kt,ts=new Tc,Mo=new Qr,Sh=new C,yo=new C,So=new C,Eo=new C,Wa=new C,bo=new C,Eh=new C,To=new C;class fe extends ke{constructor(t=new Ae,e=new Ac){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){bo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],u=r[l];h!==0&&(Wa.fromBufferAttribute(u,t),o?bo.addScaledVector(Wa,h):bo.addScaledVector(Wa.sub(e),h))}e.add(bo)}return e}raycast(t,e){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Mo.copy(i.boundingSphere),Mo.applyMatrix4(r),ts.copy(t.ray).recast(t.near),!(Mo.containsPoint(ts.origin)===!1&&(ts.intersectSphere(Mo,Sh)===null||ts.origin.distanceToSquared(Sh)>(t.far-t.near)**2))&&(yh.copy(r).invert(),ts.copy(t.ray).applyMatrix4(yh),!(i.boundingBox!==null&&ts.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,ts)))}_computeIntersections(t,e,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,_=d.length;p<_;p++){const g=d[p],m=o[g.materialIndex],y=Math.max(g.start,f.start),M=Math.min(a.count,Math.min(g.start+g.count,f.start+f.count));for(let x=y,L=M;x<L;x+=3){const A=a.getX(x),R=a.getX(x+1),I=a.getX(x+2);s=wo(this,m,t,i,c,h,u,A,R,I),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{const p=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let g=p,m=_;g<m;g+=3){const y=a.getX(g),M=a.getX(g+1),x=a.getX(g+2);s=wo(this,o,t,i,c,h,u,y,M,x),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,_=d.length;p<_;p++){const g=d[p],m=o[g.materialIndex],y=Math.max(g.start,f.start),M=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let x=y,L=M;x<L;x+=3){const A=x,R=x+1,I=x+2;s=wo(this,m,t,i,c,h,u,A,R,I),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{const p=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let g=p,m=_;g<m;g+=3){const y=g,M=g+1,x=g+2;s=wo(this,o,t,i,c,h,u,y,M,x),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}}function jp(n,t,e,i,s,r,o,a){let l;if(t.side===Je?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,t.side===Zi,a),l===null)return null;To.copy(a),To.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(To);return c<e.near||c>e.far?null:{distance:c,point:To.clone(),object:n}}function wo(n,t,e,i,s,r,o,a,l,c){n.getVertexPosition(a,yo),n.getVertexPosition(l,So),n.getVertexPosition(c,Eo);const h=jp(n,t,e,i,yo,So,Eo,Eh);if(h){const u=new C;Un.getBarycoord(Eh,yo,So,Eo,u),s&&(h.uv=Un.getInterpolatedAttribute(s,a,l,c,u,new et)),r&&(h.uv1=Un.getInterpolatedAttribute(r,a,l,c,u,new et)),o&&(h.normal=Un.getInterpolatedAttribute(o,a,l,c,u,new C),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new C,materialIndex:0};Un.getNormal(yo,So,Eo,d.normal),h.face=d,h.barycoord=u}return h}class $i extends Ae{constructor(t=1,e=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],u=[];let d=0,f=0;p("z","y","x",-1,-1,i,e,t,o,r,0),p("z","y","x",1,-1,i,e,-t,o,r,1),p("x","z","y",1,1,t,i,e,s,o,2),p("x","z","y",1,-1,t,i,-e,s,o,3),p("x","y","z",1,-1,t,e,i,s,r,4),p("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Vt(c,3)),this.setAttribute("normal",new Vt(h,3)),this.setAttribute("uv",new Vt(u,2));function p(_,g,m,y,M,x,L,A,R,I,T){const E=x/R,D=L/I,V=x/2,z=L/2,G=A/2,j=R+1,W=I+1;let st=0,X=0;const ut=new C;for(let Mt=0;Mt<W;Mt++){const wt=Mt*D-z;for(let Gt=0;Gt<j;Gt++){const ae=Gt*E-V;ut[_]=ae*y,ut[g]=wt*M,ut[m]=G,c.push(ut.x,ut.y,ut.z),ut[_]=0,ut[g]=0,ut[m]=A>0?1:-1,h.push(ut.x,ut.y,ut.z),u.push(Gt/R),u.push(1-Mt/I),st+=1}}for(let Mt=0;Mt<I;Mt++)for(let wt=0;wt<R;wt++){const Gt=d+wt+j*Mt,ae=d+wt+j*(Mt+1),K=d+(wt+1)+j*(Mt+1),ot=d+(wt+1)+j*Mt;l.push(Gt,ae,ot),l.push(ae,K,ot),X+=6}a.addGroup(f,X,T),f+=X,d+=st}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new $i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function ur(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function Ke(n){const t={};for(let e=0;e<n.length;e++){const i=ur(n[e]);for(const s in i)t[s]=i[s]}return t}function Jp(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function xd(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ne.workingColorSpace}const Md={clone:ur,merge:Ke};var Qp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,tm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ni extends to{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Qp,this.fragmentShader=tm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ur(t.uniforms),this.uniformsGroups=Jp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class yd extends ke{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Kt,this.projectionMatrix=new Kt,this.projectionMatrixInverse=new Kt,this.coordinateSystem=gi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ui=new C,bh=new et,Th=new et;class mn extends yd{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Gr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Ir*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Gr*2*Math.atan(Math.tan(Ir*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Ui.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ui.x,Ui.y).multiplyScalar(-t/Ui.z),Ui.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ui.x,Ui.y).multiplyScalar(-t/Ui.z)}getViewSize(t,e){return this.getViewBounds(t,bh,Th),e.subVectors(Th,bh)}setViewOffset(t,e,i,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Ir*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Us=-90,Ns=1;class em extends ke{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new mn(Us,Ns,t,e);s.layers=this.layers,this.add(s);const r=new mn(Us,Ns,t,e);r.layers=this.layers,this.add(r);const o=new mn(Us,Ns,t,e);o.layers=this.layers,this.add(o);const a=new mn(Us,Ns,t,e);a.layers=this.layers,this.add(a);const l=new mn(Us,Ns,t,e);l.layers=this.layers,this.add(l);const c=new mn(Us,Ns,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,s,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===gi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===ea)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,r),t.setRenderTarget(i,1,s),t.render(e,o),t.setRenderTarget(i,2,s),t.render(e,a),t.setRenderTarget(i,3,s),t.render(e,l),t.setRenderTarget(i,4,s),t.render(e,c),i.texture.generateMipmaps=_,t.setRenderTarget(i,5,s),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=p,i.texture.needsPMREMUpdate=!0}}class Sd extends Ze{constructor(t,e,i,s,r,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:or,super(t,e,i,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class nm extends ms{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new Sd(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Jn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new $i(5,5,5),r=new ni({name:"CubemapFromEquirect",uniforms:ur(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Je,blending:zi});r.uniforms.tEquirect.value=e;const o=new fe(s,r),a=e.minFilter;return e.minFilter===ds&&(e.minFilter=Jn),new em(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,i,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,s);t.setRenderTarget(r)}}const Xa=new C,im=new C,sm=new qt;class Ni{constructor(t=new C(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const s=Xa.subVectors(i,e).cross(im.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(Xa),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||sm.getNormalMatrix(t),s=this.coplanarPoint(Xa).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const es=new Qr,Ao=new C;class Rc{constructor(t=new Ni,e=new Ni,i=new Ni,s=new Ni,r=new Ni,o=new Ni){this.planes=[t,e,i,s,r,o]}set(t,e,i,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=gi){const i=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],u=s[6],d=s[7],f=s[8],p=s[9],_=s[10],g=s[11],m=s[12],y=s[13],M=s[14],x=s[15];if(i[0].setComponents(l-r,d-c,g-f,x-m).normalize(),i[1].setComponents(l+r,d+c,g+f,x+m).normalize(),i[2].setComponents(l+o,d+h,g+p,x+y).normalize(),i[3].setComponents(l-o,d-h,g-p,x-y).normalize(),i[4].setComponents(l-a,d-u,g-_,x-M).normalize(),e===gi)i[5].setComponents(l+a,d+u,g+_,x+M).normalize();else if(e===ea)i[5].setComponents(a,u,_,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),es.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),es.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(es)}intersectsSprite(t){return es.center.set(0,0,0),es.radius=.7071067811865476,es.applyMatrix4(t.matrixWorld),this.intersectsSphere(es)}intersectsSphere(t){const e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const s=e[i];if(Ao.x=s.normal.x>0?t.max.x:t.min.x,Ao.y=s.normal.y>0?t.max.y:t.min.y,Ao.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Ao)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Ed(){let n=null,t=!1,e=null,i=null;function s(r,o){e(r,o),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function rm(n){const t=new WeakMap;function e(a,l){const c=a.array,h=a.usage,u=c.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=n.SHORT;else if(c instanceof Uint32Array)f=n.UNSIGNED_INT;else if(c instanceof Int32Array)f=n.INT;else if(c instanceof Int8Array)f=n.BYTE;else if(c instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function i(a,l,c){const h=l.array,u=l.updateRanges;if(n.bindBuffer(c,a),u.length===0)n.bufferSubData(c,0,h);else{u.sort((f,p)=>f.start-p.start);let d=0;for(let f=1;f<u.length;f++){const p=u[d],_=u[f];_.start<=p.start+p.count+1?p.count=Math.max(p.count,_.start+_.count-p.start):(++d,u[d]=_)}u.length=d+1;for(let f=0,p=u.length;f<p;f++){const _=u[f];n.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(n.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}class wi extends Ae{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(i),l=Math.floor(s),c=a+1,h=l+1,u=t/a,d=e/l,f=[],p=[],_=[],g=[];for(let m=0;m<h;m++){const y=m*d-o;for(let M=0;M<c;M++){const x=M*u-r;p.push(x,-y,0),_.push(0,0,1),g.push(M/a),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let y=0;y<a;y++){const M=y+c*m,x=y+c*(m+1),L=y+1+c*(m+1),A=y+1+c*m;f.push(M,x,A),f.push(x,L,A)}this.setIndex(f),this.setAttribute("position",new Vt(p,3)),this.setAttribute("normal",new Vt(_,3)),this.setAttribute("uv",new Vt(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new wi(t.width,t.height,t.widthSegments,t.heightSegments)}}var om=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,am=`#ifdef USE_ALPHAHASH
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
#endif`,lm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,cm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,hm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,um=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,dm=`#ifdef USE_AOMAP
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
#endif`,fm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,pm=`#ifdef USE_BATCHING
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
#endif`,mm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,gm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,_m=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,vm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,xm=`#ifdef USE_IRIDESCENCE
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
#endif`,Mm=`#ifdef USE_BUMPMAP
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
#endif`,ym=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Sm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Em=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,bm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Tm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,wm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Am=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Rm=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Cm=`#define PI 3.141592653589793
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
} // validated`,Pm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Lm=`vec3 transformedNormal = objectNormal;
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
#endif`,Im=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Dm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Um=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Nm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Om="gl_FragColor = linearToOutputTexel( gl_FragColor );",Fm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Bm=`#ifdef USE_ENVMAP
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
#endif`,zm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,km=`#ifdef USE_ENVMAP
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
#endif`,Hm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Vm=`#ifdef USE_ENVMAP
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
#endif`,Gm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Wm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Xm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ym=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,qm=`#ifdef USE_GRADIENTMAP
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
}`,Zm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,$m=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Km=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,jm=`uniform bool receiveShadow;
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
#endif`,Jm=`#ifdef USE_ENVMAP
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
#endif`,Qm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,t0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,e0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,n0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,i0=`PhysicalMaterial material;
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
#endif`,s0=`struct PhysicalMaterial {
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
}`,r0=`
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
#endif`,o0=`#if defined( RE_IndirectDiffuse )
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
#endif`,a0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,l0=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,c0=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,h0=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,u0=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,d0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,f0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,p0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,m0=`#if defined( USE_POINTS_UV )
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
#endif`,g0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,_0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,v0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,x0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,M0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,y0=`#ifdef USE_MORPHTARGETS
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
#endif`,S0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,E0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,b0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,T0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,w0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,A0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,R0=`#ifdef USE_NORMALMAP
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
#endif`,C0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,P0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,L0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,I0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,D0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,U0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,N0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,O0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,F0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,B0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,z0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,k0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,H0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,V0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,G0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,W0=`float getShadowMask() {
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
}`,X0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Y0=`#ifdef USE_SKINNING
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
#endif`,q0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Z0=`#ifdef USE_SKINNING
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
#endif`,$0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,K0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,j0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,J0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Q0=`#ifdef USE_TRANSMISSION
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
#endif`,tg=`#ifdef USE_TRANSMISSION
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
#endif`,eg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ng=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ig=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,sg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const rg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,og=`uniform sampler2D t2D;
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
}`,ag=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,cg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ug=`#include <common>
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
}`,dg=`#if DEPTH_PACKING == 3200
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
}`,fg=`#define DISTANCE
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
}`,pg=`#define DISTANCE
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
}`,mg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,gg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_g=`uniform float scale;
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
}`,vg=`uniform vec3 diffuse;
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
}`,xg=`#include <common>
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
}`,Mg=`uniform vec3 diffuse;
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
}`,yg=`#define LAMBERT
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
}`,Sg=`#define LAMBERT
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
}`,Eg=`#define MATCAP
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
}`,bg=`#define MATCAP
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
}`,Tg=`#define NORMAL
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
}`,wg=`#define NORMAL
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
}`,Ag=`#define PHONG
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
}`,Rg=`#define PHONG
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
}`,Cg=`#define STANDARD
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
}`,Pg=`#define STANDARD
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
}`,Lg=`#define TOON
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
}`,Ig=`#define TOON
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
}`,Dg=`uniform float size;
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
}`,Ug=`uniform vec3 diffuse;
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
}`,Ng=`#include <common>
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
}`,Og=`uniform vec3 color;
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
}`,Fg=`uniform float rotation;
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
}`,Bg=`uniform vec3 diffuse;
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
}`,$t={alphahash_fragment:om,alphahash_pars_fragment:am,alphamap_fragment:lm,alphamap_pars_fragment:cm,alphatest_fragment:hm,alphatest_pars_fragment:um,aomap_fragment:dm,aomap_pars_fragment:fm,batching_pars_vertex:pm,batching_vertex:mm,begin_vertex:gm,beginnormal_vertex:_m,bsdfs:vm,iridescence_fragment:xm,bumpmap_pars_fragment:Mm,clipping_planes_fragment:ym,clipping_planes_pars_fragment:Sm,clipping_planes_pars_vertex:Em,clipping_planes_vertex:bm,color_fragment:Tm,color_pars_fragment:wm,color_pars_vertex:Am,color_vertex:Rm,common:Cm,cube_uv_reflection_fragment:Pm,defaultnormal_vertex:Lm,displacementmap_pars_vertex:Im,displacementmap_vertex:Dm,emissivemap_fragment:Um,emissivemap_pars_fragment:Nm,colorspace_fragment:Om,colorspace_pars_fragment:Fm,envmap_fragment:Bm,envmap_common_pars_fragment:zm,envmap_pars_fragment:km,envmap_pars_vertex:Hm,envmap_physical_pars_fragment:Jm,envmap_vertex:Vm,fog_vertex:Gm,fog_pars_vertex:Wm,fog_fragment:Xm,fog_pars_fragment:Ym,gradientmap_pars_fragment:qm,lightmap_pars_fragment:Zm,lights_lambert_fragment:$m,lights_lambert_pars_fragment:Km,lights_pars_begin:jm,lights_toon_fragment:Qm,lights_toon_pars_fragment:t0,lights_phong_fragment:e0,lights_phong_pars_fragment:n0,lights_physical_fragment:i0,lights_physical_pars_fragment:s0,lights_fragment_begin:r0,lights_fragment_maps:o0,lights_fragment_end:a0,logdepthbuf_fragment:l0,logdepthbuf_pars_fragment:c0,logdepthbuf_pars_vertex:h0,logdepthbuf_vertex:u0,map_fragment:d0,map_pars_fragment:f0,map_particle_fragment:p0,map_particle_pars_fragment:m0,metalnessmap_fragment:g0,metalnessmap_pars_fragment:_0,morphinstance_vertex:v0,morphcolor_vertex:x0,morphnormal_vertex:M0,morphtarget_pars_vertex:y0,morphtarget_vertex:S0,normal_fragment_begin:E0,normal_fragment_maps:b0,normal_pars_fragment:T0,normal_pars_vertex:w0,normal_vertex:A0,normalmap_pars_fragment:R0,clearcoat_normal_fragment_begin:C0,clearcoat_normal_fragment_maps:P0,clearcoat_pars_fragment:L0,iridescence_pars_fragment:I0,opaque_fragment:D0,packing:U0,premultiplied_alpha_fragment:N0,project_vertex:O0,dithering_fragment:F0,dithering_pars_fragment:B0,roughnessmap_fragment:z0,roughnessmap_pars_fragment:k0,shadowmap_pars_fragment:H0,shadowmap_pars_vertex:V0,shadowmap_vertex:G0,shadowmask_pars_fragment:W0,skinbase_vertex:X0,skinning_pars_vertex:Y0,skinning_vertex:q0,skinnormal_vertex:Z0,specularmap_fragment:$0,specularmap_pars_fragment:K0,tonemapping_fragment:j0,tonemapping_pars_fragment:J0,transmission_fragment:Q0,transmission_pars_fragment:tg,uv_pars_fragment:eg,uv_pars_vertex:ng,uv_vertex:ig,worldpos_vertex:sg,background_vert:rg,background_frag:og,backgroundCube_vert:ag,backgroundCube_frag:lg,cube_vert:cg,cube_frag:hg,depth_vert:ug,depth_frag:dg,distanceRGBA_vert:fg,distanceRGBA_frag:pg,equirect_vert:mg,equirect_frag:gg,linedashed_vert:_g,linedashed_frag:vg,meshbasic_vert:xg,meshbasic_frag:Mg,meshlambert_vert:yg,meshlambert_frag:Sg,meshmatcap_vert:Eg,meshmatcap_frag:bg,meshnormal_vert:Tg,meshnormal_frag:wg,meshphong_vert:Ag,meshphong_frag:Rg,meshphysical_vert:Cg,meshphysical_frag:Pg,meshtoon_vert:Lg,meshtoon_frag:Ig,points_vert:Dg,points_frag:Ug,shadow_vert:Ng,shadow_frag:Og,sprite_vert:Fg,sprite_frag:Bg},dt={common:{diffuse:{value:new Wt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qt},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qt}},envmap:{envMap:{value:null},envMapRotation:{value:new qt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qt},normalScale:{value:new et(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Wt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Wt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0},uvTransform:{value:new qt}},sprite:{diffuse:{value:new Wt(16777215)},opacity:{value:1},center:{value:new et(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qt},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0}}},Zn={basic:{uniforms:Ke([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.fog]),vertexShader:$t.meshbasic_vert,fragmentShader:$t.meshbasic_frag},lambert:{uniforms:Ke([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,dt.lights,{emissive:{value:new Wt(0)}}]),vertexShader:$t.meshlambert_vert,fragmentShader:$t.meshlambert_frag},phong:{uniforms:Ke([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,dt.lights,{emissive:{value:new Wt(0)},specular:{value:new Wt(1118481)},shininess:{value:30}}]),vertexShader:$t.meshphong_vert,fragmentShader:$t.meshphong_frag},standard:{uniforms:Ke([dt.common,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.roughnessmap,dt.metalnessmap,dt.fog,dt.lights,{emissive:{value:new Wt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$t.meshphysical_vert,fragmentShader:$t.meshphysical_frag},toon:{uniforms:Ke([dt.common,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.gradientmap,dt.fog,dt.lights,{emissive:{value:new Wt(0)}}]),vertexShader:$t.meshtoon_vert,fragmentShader:$t.meshtoon_frag},matcap:{uniforms:Ke([dt.common,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,{matcap:{value:null}}]),vertexShader:$t.meshmatcap_vert,fragmentShader:$t.meshmatcap_frag},points:{uniforms:Ke([dt.points,dt.fog]),vertexShader:$t.points_vert,fragmentShader:$t.points_frag},dashed:{uniforms:Ke([dt.common,dt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$t.linedashed_vert,fragmentShader:$t.linedashed_frag},depth:{uniforms:Ke([dt.common,dt.displacementmap]),vertexShader:$t.depth_vert,fragmentShader:$t.depth_frag},normal:{uniforms:Ke([dt.common,dt.bumpmap,dt.normalmap,dt.displacementmap,{opacity:{value:1}}]),vertexShader:$t.meshnormal_vert,fragmentShader:$t.meshnormal_frag},sprite:{uniforms:Ke([dt.sprite,dt.fog]),vertexShader:$t.sprite_vert,fragmentShader:$t.sprite_frag},background:{uniforms:{uvTransform:{value:new qt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$t.background_vert,fragmentShader:$t.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new qt}},vertexShader:$t.backgroundCube_vert,fragmentShader:$t.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$t.cube_vert,fragmentShader:$t.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$t.equirect_vert,fragmentShader:$t.equirect_frag},distanceRGBA:{uniforms:Ke([dt.common,dt.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$t.distanceRGBA_vert,fragmentShader:$t.distanceRGBA_frag},shadow:{uniforms:Ke([dt.lights,dt.fog,{color:{value:new Wt(0)},opacity:{value:1}}]),vertexShader:$t.shadow_vert,fragmentShader:$t.shadow_frag}};Zn.physical={uniforms:Ke([Zn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qt},clearcoatNormalScale:{value:new et(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qt},sheen:{value:0},sheenColor:{value:new Wt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qt},transmissionSamplerSize:{value:new et},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qt},attenuationDistance:{value:0},attenuationColor:{value:new Wt(0)},specularColor:{value:new Wt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qt},anisotropyVector:{value:new et},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qt}}]),vertexShader:$t.meshphysical_vert,fragmentShader:$t.meshphysical_frag};const Ro={r:0,b:0,g:0},ns=new ei,zg=new Kt;function kg(n,t,e,i,s,r,o){const a=new Wt(0);let l=r===!0?0:1,c,h,u=null,d=0,f=null;function p(y){let M=y.isScene===!0?y.background:null;return M&&M.isTexture&&(M=(y.backgroundBlurriness>0?e:t).get(M)),M}function _(y){let M=!1;const x=p(y);x===null?m(a,l):x&&x.isColor&&(m(x,1),M=!0);const L=n.xr.getEnvironmentBlendMode();L==="additive"?i.buffers.color.setClear(0,0,0,1,o):L==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||M)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function g(y,M){const x=p(M);x&&(x.isCubeTexture||x.mapping===da)?(h===void 0&&(h=new fe(new $i(1,1,1),new ni({name:"BackgroundCubeMaterial",uniforms:ur(Zn.backgroundCube.uniforms),vertexShader:Zn.backgroundCube.vertexShader,fragmentShader:Zn.backgroundCube.fragmentShader,side:Je,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(L,A,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),ns.copy(M.backgroundRotation),ns.x*=-1,ns.y*=-1,ns.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(ns.y*=-1,ns.z*=-1),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(zg.makeRotationFromEuler(ns)),h.material.toneMapped=ne.getTransfer(x.colorSpace)!==ue,(u!==x||d!==x.version||f!==n.toneMapping)&&(h.material.needsUpdate=!0,u=x,d=x.version,f=n.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new fe(new wi(2,2),new ni({name:"BackgroundMaterial",uniforms:ur(Zn.background.uniforms),vertexShader:Zn.background.vertexShader,fragmentShader:Zn.background.fragmentShader,side:Zi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=ne.getTransfer(x.colorSpace)!==ue,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||d!==x.version||f!==n.toneMapping)&&(c.material.needsUpdate=!0,u=x,d=x.version,f=n.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function m(y,M){y.getRGB(Ro,xd(n)),i.buffers.color.setClear(Ro.r,Ro.g,Ro.b,M,o)}return{getClearColor:function(){return a},setClearColor:function(y,M=1){a.set(y),l=M,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,m(a,l)},render:_,addToRenderList:g}}function Hg(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=d(null);let r=s,o=!1;function a(E,D,V,z,G){let j=!1;const W=u(z,V,D);r!==W&&(r=W,c(r.object)),j=f(E,z,V,G),j&&p(E,z,V,G),G!==null&&t.update(G,n.ELEMENT_ARRAY_BUFFER),(j||o)&&(o=!1,x(E,D,V,z),G!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(G).buffer))}function l(){return n.createVertexArray()}function c(E){return n.bindVertexArray(E)}function h(E){return n.deleteVertexArray(E)}function u(E,D,V){const z=V.wireframe===!0;let G=i[E.id];G===void 0&&(G={},i[E.id]=G);let j=G[D.id];j===void 0&&(j={},G[D.id]=j);let W=j[z];return W===void 0&&(W=d(l()),j[z]=W),W}function d(E){const D=[],V=[],z=[];for(let G=0;G<e;G++)D[G]=0,V[G]=0,z[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:V,attributeDivisors:z,object:E,attributes:{},index:null}}function f(E,D,V,z){const G=r.attributes,j=D.attributes;let W=0;const st=V.getAttributes();for(const X in st)if(st[X].location>=0){const Mt=G[X];let wt=j[X];if(wt===void 0&&(X==="instanceMatrix"&&E.instanceMatrix&&(wt=E.instanceMatrix),X==="instanceColor"&&E.instanceColor&&(wt=E.instanceColor)),Mt===void 0||Mt.attribute!==wt||wt&&Mt.data!==wt.data)return!0;W++}return r.attributesNum!==W||r.index!==z}function p(E,D,V,z){const G={},j=D.attributes;let W=0;const st=V.getAttributes();for(const X in st)if(st[X].location>=0){let Mt=j[X];Mt===void 0&&(X==="instanceMatrix"&&E.instanceMatrix&&(Mt=E.instanceMatrix),X==="instanceColor"&&E.instanceColor&&(Mt=E.instanceColor));const wt={};wt.attribute=Mt,Mt&&Mt.data&&(wt.data=Mt.data),G[X]=wt,W++}r.attributes=G,r.attributesNum=W,r.index=z}function _(){const E=r.newAttributes;for(let D=0,V=E.length;D<V;D++)E[D]=0}function g(E){m(E,0)}function m(E,D){const V=r.newAttributes,z=r.enabledAttributes,G=r.attributeDivisors;V[E]=1,z[E]===0&&(n.enableVertexAttribArray(E),z[E]=1),G[E]!==D&&(n.vertexAttribDivisor(E,D),G[E]=D)}function y(){const E=r.newAttributes,D=r.enabledAttributes;for(let V=0,z=D.length;V<z;V++)D[V]!==E[V]&&(n.disableVertexAttribArray(V),D[V]=0)}function M(E,D,V,z,G,j,W){W===!0?n.vertexAttribIPointer(E,D,V,G,j):n.vertexAttribPointer(E,D,V,z,G,j)}function x(E,D,V,z){_();const G=z.attributes,j=V.getAttributes(),W=D.defaultAttributeValues;for(const st in j){const X=j[st];if(X.location>=0){let ut=G[st];if(ut===void 0&&(st==="instanceMatrix"&&E.instanceMatrix&&(ut=E.instanceMatrix),st==="instanceColor"&&E.instanceColor&&(ut=E.instanceColor)),ut!==void 0){const Mt=ut.normalized,wt=ut.itemSize,Gt=t.get(ut);if(Gt===void 0)continue;const ae=Gt.buffer,K=Gt.type,ot=Gt.bytesPerElement,At=K===n.INT||K===n.UNSIGNED_INT||ut.gpuType===_c;if(ut.isInterleavedBufferAttribute){const lt=ut.data,Ut=lt.stride,zt=ut.offset;if(lt.isInstancedInterleavedBuffer){for(let Ft=0;Ft<X.locationSize;Ft++)m(X.location+Ft,lt.meshPerAttribute);E.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=lt.meshPerAttribute*lt.count)}else for(let Ft=0;Ft<X.locationSize;Ft++)g(X.location+Ft);n.bindBuffer(n.ARRAY_BUFFER,ae);for(let Ft=0;Ft<X.locationSize;Ft++)M(X.location+Ft,wt/X.locationSize,K,Mt,Ut*ot,(zt+wt/X.locationSize*Ft)*ot,At)}else{if(ut.isInstancedBufferAttribute){for(let lt=0;lt<X.locationSize;lt++)m(X.location+lt,ut.meshPerAttribute);E.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=ut.meshPerAttribute*ut.count)}else for(let lt=0;lt<X.locationSize;lt++)g(X.location+lt);n.bindBuffer(n.ARRAY_BUFFER,ae);for(let lt=0;lt<X.locationSize;lt++)M(X.location+lt,wt/X.locationSize,K,Mt,wt*ot,wt/X.locationSize*lt*ot,At)}}else if(W!==void 0){const Mt=W[st];if(Mt!==void 0)switch(Mt.length){case 2:n.vertexAttrib2fv(X.location,Mt);break;case 3:n.vertexAttrib3fv(X.location,Mt);break;case 4:n.vertexAttrib4fv(X.location,Mt);break;default:n.vertexAttrib1fv(X.location,Mt)}}}}y()}function L(){I();for(const E in i){const D=i[E];for(const V in D){const z=D[V];for(const G in z)h(z[G].object),delete z[G];delete D[V]}delete i[E]}}function A(E){if(i[E.id]===void 0)return;const D=i[E.id];for(const V in D){const z=D[V];for(const G in z)h(z[G].object),delete z[G];delete D[V]}delete i[E.id]}function R(E){for(const D in i){const V=i[D];if(V[E.id]===void 0)continue;const z=V[E.id];for(const G in z)h(z[G].object),delete z[G];delete V[E.id]}}function I(){T(),o=!0,r!==s&&(r=s,c(r.object))}function T(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:I,resetDefaultState:T,dispose:L,releaseStatesOfGeometry:A,releaseStatesOfProgram:R,initAttributes:_,enableAttribute:g,disableUnusedAttributes:y}}function Vg(n,t,e){let i;function s(c){i=c}function r(c,h){n.drawArrays(i,c,h),e.update(h,i,1)}function o(c,h,u){u!==0&&(n.drawArraysInstanced(i,c,h,u),e.update(h,i,u))}function a(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,u);let f=0;for(let p=0;p<u;p++)f+=h[p];e.update(f,i,1)}function l(c,h,u,d){if(u===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let p=0;p<c.length;p++)o(c[p],h[p],d[p]);else{f.multiDrawArraysInstancedWEBGL(i,c,0,h,0,d,0,u);let p=0;for(let _=0;_<u;_++)p+=h[_]*d[_];e.update(p,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Gg(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const R=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(R){return!(R!==Fn&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){const I=R===Jr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==Si&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==Qn&&!I)}function l(R){if(R==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),y=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),M=n.getParameter(n.MAX_VARYING_VECTORS),x=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),L=p>0,A=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:p,maxTextureSize:_,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:y,maxVaryings:M,maxFragmentUniforms:x,vertexTextures:L,maxSamples:A}}function Wg(n){const t=this;let e=null,i=0,s=!1,r=!1;const o=new Ni,a=new qt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||i!==0||s;return s=d,i=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){const p=u.clippingPlanes,_=u.clipIntersection,g=u.clipShadows,m=n.get(u);if(!s||p===null||p.length===0||r&&!g)r?h(null):c();else{const y=r?0:i,M=y*4;let x=m.clippingState||null;l.value=x,x=h(p,d,M,f);for(let L=0;L!==M;++L)x[L]=e[L];m.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(u,d,f,p){const _=u!==null?u.length:0;let g=null;if(_!==0){if(g=l.value,p!==!0||g===null){const m=f+_*4,y=d.matrixWorldInverse;a.getNormalMatrix(y),(g===null||g.length<m)&&(g=new Float32Array(m));for(let M=0,x=f;M!==_;++M,x+=4)o.copy(u[M]).applyMatrix4(y,a),o.normal.toArray(g,x),g[x+3]=o.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,g}}function Xg(n){let t=new WeakMap;function e(o,a){return a===wl?o.mapping=or:a===Al&&(o.mapping=ar),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===wl||a===Al)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new nm(l.height);return c.fromEquirectangularTexture(n,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}class bd extends yd{constructor(t=-1,e=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-t,o=i+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Ys=4,wh=[.125,.215,.35,.446,.526,.582],hs=20,Ya=new bd,Ah=new Wt;let qa=null,Za=0,$a=0,Ka=!1;const as=(1+Math.sqrt(5))/2,Os=1/as,Rh=[new C(-as,Os,0),new C(as,Os,0),new C(-Os,0,as),new C(Os,0,as),new C(0,as,-Os),new C(0,as,Os),new C(-1,1,-1),new C(1,1,-1),new C(-1,1,1),new C(1,1,1)];class Ch{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100){qa=this._renderer.getRenderTarget(),Za=this._renderer.getActiveCubeFace(),$a=this._renderer.getActiveMipmapLevel(),Ka=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,i,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ih(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Lh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(qa,Za,$a),this._renderer.xr.enabled=Ka,t.scissorTest=!1,Co(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===or||t.mapping===ar?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),qa=this._renderer.getRenderTarget(),Za=this._renderer.getActiveCubeFace(),$a=this._renderer.getActiveMipmapLevel(),Ka=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Jn,minFilter:Jn,generateMipmaps:!1,type:Jr,format:Fn,colorSpace:mr,depthBuffer:!1},s=Ph(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ph(t,e,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Yg(r)),this._blurMaterial=qg(r,t,e)}return s}_compileMaterial(t){const e=new fe(this._lodPlanes[0],t);this._renderer.compile(e,Ya)}_sceneToCubeUV(t,e,i,s){const a=new mn(90,1,e,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Ah),h.toneMapping=ki,h.autoClear=!1;const f=new Ac({name:"PMREM.Background",side:Je,depthWrite:!1,depthTest:!1}),p=new fe(new $i,f);let _=!1;const g=t.background;g?g.isColor&&(f.color.copy(g),t.background=null,_=!0):(f.color.copy(Ah),_=!0);for(let m=0;m<6;m++){const y=m%3;y===0?(a.up.set(0,l[m],0),a.lookAt(c[m],0,0)):y===1?(a.up.set(0,0,l[m]),a.lookAt(0,c[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,c[m]));const M=this._cubeSize;Co(s,y*M,m>2?M:0,M,M),h.setRenderTarget(s),_&&h.render(p,a),h.render(t,a)}p.geometry.dispose(),p.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=g}_textureToCubeUV(t,e){const i=this._renderer,s=t.mapping===or||t.mapping===ar;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ih()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Lh());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new fe(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;Co(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(o,Ya)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Rh[(s-r-1)%Rh.length];this._blur(t,r-1,r,o,a)}e.autoClear=i}_blur(t,e,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,s,"latitudinal",r),this._halfBlur(o,t,i,i,s,"longitudinal",r)}_halfBlur(t,e,i,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new fe(this._lodPlanes[s],c),d=c.uniforms,f=this._sizeLods[i]-1,p=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*hs-1),_=r/p,g=isFinite(r)?1+Math.floor(h*_):hs;g>hs&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${hs}`);const m=[];let y=0;for(let R=0;R<hs;++R){const I=R/_,T=Math.exp(-I*I/2);m.push(T),R===0?y+=T:R<g&&(y+=2*T)}for(let R=0;R<m.length;R++)m[R]=m[R]/y;d.envMap.value=t.texture,d.samples.value=g,d.weights.value=m,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:M}=this;d.dTheta.value=p,d.mipInt.value=M-i;const x=this._sizeLods[s],L=3*x*(s>M-Ys?s-M+Ys:0),A=4*(this._cubeSize-x);Co(e,L,A,3*x,2*x),l.setRenderTarget(e),l.render(u,Ya)}}function Yg(n){const t=[],e=[],i=[];let s=n;const r=n-Ys+1+wh.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let l=1/a;o>n-Ys?l=wh[o-n+Ys-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,p=6,_=3,g=2,m=1,y=new Float32Array(_*p*f),M=new Float32Array(g*p*f),x=new Float32Array(m*p*f);for(let A=0;A<f;A++){const R=A%3*2/3-1,I=A>2?0:-1,T=[R,I,0,R+2/3,I,0,R+2/3,I+1,0,R,I,0,R+2/3,I+1,0,R,I+1,0];y.set(T,_*p*A),M.set(d,g*p*A);const E=[A,A,A,A,A,A];x.set(E,m*p*A)}const L=new Ae;L.setAttribute("position",new Sn(y,_)),L.setAttribute("uv",new Sn(M,g)),L.setAttribute("faceIndex",new Sn(x,m)),t.push(L),s>Ys&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function Ph(n,t,e){const i=new ms(n,t,e);return i.texture.mapping=da,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Co(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function qg(n,t,e){const i=new Float32Array(hs),s=new C(0,1,0);return new ni({name:"SphericalGaussianBlur",defines:{n:hs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Cc(),fragmentShader:`

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
		`,blending:zi,depthTest:!1,depthWrite:!1})}function Lh(){return new ni({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Cc(),fragmentShader:`

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
		`,blending:zi,depthTest:!1,depthWrite:!1})}function Ih(){return new ni({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Cc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:zi,depthTest:!1,depthWrite:!1})}function Cc(){return`

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
	`}function Zg(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===wl||l===Al,h=l===or||l===ar;if(c||h){let u=t.get(a);const d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new Ch(n)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{const f=a.image;return c&&f&&f.height>0||h&&f&&s(f)?(e===null&&(e=new Ch(n)),u=c?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function $g(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const s=e(i);return s===null&&Cr("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function Kg(n,t,e,i){const s={},r=new WeakMap;function o(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const p in d.attributes)t.remove(d.attributes[p]);for(const p in d.morphAttributes){const _=d.morphAttributes[p];for(let g=0,m=_.length;g<m;g++)t.remove(_[g])}d.removeEventListener("dispose",o),delete s[d.id];const f=r.get(d);f&&(t.remove(f),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function l(u){const d=u.attributes;for(const p in d)t.update(d[p],n.ARRAY_BUFFER);const f=u.morphAttributes;for(const p in f){const _=f[p];for(let g=0,m=_.length;g<m;g++)t.update(_[g],n.ARRAY_BUFFER)}}function c(u){const d=[],f=u.index,p=u.attributes.position;let _=0;if(f!==null){const y=f.array;_=f.version;for(let M=0,x=y.length;M<x;M+=3){const L=y[M+0],A=y[M+1],R=y[M+2];d.push(L,A,A,R,R,L)}}else if(p!==void 0){const y=p.array;_=p.version;for(let M=0,x=y.length/3-1;M<x;M+=3){const L=M+0,A=M+1,R=M+2;d.push(L,A,A,R,R,L)}}else return;const g=new(fd(d)?vd:_d)(d,1);g.version=_;const m=r.get(u);m&&t.remove(m),r.set(u,g)}function h(u){const d=r.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function jg(n,t,e){let i;function s(d){i=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,f){n.drawElements(i,f,r,d*o),e.update(f,i,1)}function c(d,f,p){p!==0&&(n.drawElementsInstanced(i,f,r,d*o,p),e.update(f,i,p))}function h(d,f,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,r,d,0,p);let g=0;for(let m=0;m<p;m++)g+=f[m];e.update(g,i,1)}function u(d,f,p,_){if(p===0)return;const g=t.get("WEBGL_multi_draw");if(g===null)for(let m=0;m<d.length;m++)c(d[m]/o,f[m],_[m]);else{g.multiDrawElementsInstancedWEBGL(i,f,0,r,d,0,_,0,p);let m=0;for(let y=0;y<p;y++)m+=f[y]*_[y];e.update(m,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Jg(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(r/3);break;case n.LINES:e.lines+=a*(r/2);break;case n.LINE_STRIP:e.lines+=a*(r-1);break;case n.LINE_LOOP:e.lines+=a*r;break;case n.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function Qg(n,t,e){const i=new WeakMap,s=new Te;function r(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=i.get(a);if(d===void 0||d.count!==u){let T=function(){R.dispose(),i.delete(a),a.removeEventListener("dispose",T)};d!==void 0&&d.texture.dispose();const f=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let M=0;f===!0&&(M=1),p===!0&&(M=2),_===!0&&(M=3);let x=a.attributes.position.count*M,L=1;x>t.maxTextureSize&&(L=Math.ceil(x/t.maxTextureSize),x=t.maxTextureSize);const A=new Float32Array(x*L*4*u),R=new md(A,x,L,u);R.type=Qn,R.needsUpdate=!0;const I=M*4;for(let E=0;E<u;E++){const D=g[E],V=m[E],z=y[E],G=x*L*4*E;for(let j=0;j<D.count;j++){const W=j*I;f===!0&&(s.fromBufferAttribute(D,j),A[G+W+0]=s.x,A[G+W+1]=s.y,A[G+W+2]=s.z,A[G+W+3]=0),p===!0&&(s.fromBufferAttribute(V,j),A[G+W+4]=s.x,A[G+W+5]=s.y,A[G+W+6]=s.z,A[G+W+7]=0),_===!0&&(s.fromBufferAttribute(z,j),A[G+W+8]=s.x,A[G+W+9]=s.y,A[G+W+10]=s.z,A[G+W+11]=z.itemSize===4?s.w:1)}}d={count:u,texture:R,size:new et(x,L)},i.set(a,d),a.addEventListener("dispose",T)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let f=0;for(let _=0;_<c.length;_++)f+=c[_];const p=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(n,"morphTargetBaseInfluence",p),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:r}}function t_(n,t,e,i){let s=new WeakMap;function r(l){const c=i.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}class Td extends Ze{constructor(t,e,i,s,r,o,a,l,c,h=Qs){if(h!==Qs&&h!==hr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===Qs&&(i=ps),i===void 0&&h===hr&&(i=cr),super(null,s,r,o,a,l,h,i,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:gn,this.minFilter=l!==void 0?l:gn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const wd=new Ze,Dh=new Td(1,1),Ad=new md,Rd=new Hp,Cd=new Sd,Uh=[],Nh=[],Oh=new Float32Array(16),Fh=new Float32Array(9),Bh=new Float32Array(4);function gr(n,t,e){const i=n[0];if(i<=0||i>0)return n;const s=t*e;let r=Uh[s];if(r===void 0&&(r=new Float32Array(s),Uh[s]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(r,a)}return r}function Ne(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Oe(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function pa(n,t){let e=Nh[t];e===void 0&&(e=new Int32Array(t),Nh[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function e_(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function n_(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ne(e,t))return;n.uniform2fv(this.addr,t),Oe(e,t)}}function i_(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ne(e,t))return;n.uniform3fv(this.addr,t),Oe(e,t)}}function s_(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ne(e,t))return;n.uniform4fv(this.addr,t),Oe(e,t)}}function r_(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ne(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Oe(e,t)}else{if(Ne(e,i))return;Bh.set(i),n.uniformMatrix2fv(this.addr,!1,Bh),Oe(e,i)}}function o_(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ne(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Oe(e,t)}else{if(Ne(e,i))return;Fh.set(i),n.uniformMatrix3fv(this.addr,!1,Fh),Oe(e,i)}}function a_(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ne(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Oe(e,t)}else{if(Ne(e,i))return;Oh.set(i),n.uniformMatrix4fv(this.addr,!1,Oh),Oe(e,i)}}function l_(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function c_(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ne(e,t))return;n.uniform2iv(this.addr,t),Oe(e,t)}}function h_(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ne(e,t))return;n.uniform3iv(this.addr,t),Oe(e,t)}}function u_(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ne(e,t))return;n.uniform4iv(this.addr,t),Oe(e,t)}}function d_(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function f_(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ne(e,t))return;n.uniform2uiv(this.addr,t),Oe(e,t)}}function p_(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ne(e,t))return;n.uniform3uiv(this.addr,t),Oe(e,t)}}function m_(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ne(e,t))return;n.uniform4uiv(this.addr,t),Oe(e,t)}}function g_(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Dh.compareFunction=dd,r=Dh):r=wd,e.setTexture2D(t||r,s)}function __(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||Rd,s)}function v_(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||Cd,s)}function x_(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||Ad,s)}function M_(n){switch(n){case 5126:return e_;case 35664:return n_;case 35665:return i_;case 35666:return s_;case 35674:return r_;case 35675:return o_;case 35676:return a_;case 5124:case 35670:return l_;case 35667:case 35671:return c_;case 35668:case 35672:return h_;case 35669:case 35673:return u_;case 5125:return d_;case 36294:return f_;case 36295:return p_;case 36296:return m_;case 35678:case 36198:case 36298:case 36306:case 35682:return g_;case 35679:case 36299:case 36307:return __;case 35680:case 36300:case 36308:case 36293:return v_;case 36289:case 36303:case 36311:case 36292:return x_}}function y_(n,t){n.uniform1fv(this.addr,t)}function S_(n,t){const e=gr(t,this.size,2);n.uniform2fv(this.addr,e)}function E_(n,t){const e=gr(t,this.size,3);n.uniform3fv(this.addr,e)}function b_(n,t){const e=gr(t,this.size,4);n.uniform4fv(this.addr,e)}function T_(n,t){const e=gr(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function w_(n,t){const e=gr(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function A_(n,t){const e=gr(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function R_(n,t){n.uniform1iv(this.addr,t)}function C_(n,t){n.uniform2iv(this.addr,t)}function P_(n,t){n.uniform3iv(this.addr,t)}function L_(n,t){n.uniform4iv(this.addr,t)}function I_(n,t){n.uniform1uiv(this.addr,t)}function D_(n,t){n.uniform2uiv(this.addr,t)}function U_(n,t){n.uniform3uiv(this.addr,t)}function N_(n,t){n.uniform4uiv(this.addr,t)}function O_(n,t,e){const i=this.cache,s=t.length,r=pa(e,s);Ne(i,r)||(n.uniform1iv(this.addr,r),Oe(i,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||wd,r[o])}function F_(n,t,e){const i=this.cache,s=t.length,r=pa(e,s);Ne(i,r)||(n.uniform1iv(this.addr,r),Oe(i,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Rd,r[o])}function B_(n,t,e){const i=this.cache,s=t.length,r=pa(e,s);Ne(i,r)||(n.uniform1iv(this.addr,r),Oe(i,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Cd,r[o])}function z_(n,t,e){const i=this.cache,s=t.length,r=pa(e,s);Ne(i,r)||(n.uniform1iv(this.addr,r),Oe(i,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Ad,r[o])}function k_(n){switch(n){case 5126:return y_;case 35664:return S_;case 35665:return E_;case 35666:return b_;case 35674:return T_;case 35675:return w_;case 35676:return A_;case 5124:case 35670:return R_;case 35667:case 35671:return C_;case 35668:case 35672:return P_;case 35669:case 35673:return L_;case 5125:return I_;case 36294:return D_;case 36295:return U_;case 36296:return N_;case 35678:case 36198:case 36298:case 36306:case 35682:return O_;case 35679:case 36299:case 36307:return F_;case 35680:case 36300:case 36308:case 36293:return B_;case 36289:case 36303:case 36311:case 36292:return z_}}class H_{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=M_(e.type)}}class V_{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=k_(e.type)}}class G_{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],i)}}}const ja=/(\w+)(\])?(\[|\.)?/g;function zh(n,t){n.seq.push(t),n.map[t.id]=t}function W_(n,t,e){const i=n.name,s=i.length;for(ja.lastIndex=0;;){const r=ja.exec(i),o=ja.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){zh(e,c===void 0?new H_(a,n,t):new V_(a,n,t));break}else{let u=e.map[a];u===void 0&&(u=new G_(a),zh(e,u)),e=u}}}class Jo{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);W_(r,o,this)}}setValue(t,e,i,s){const r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){const s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const i=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&i.push(o)}return i}}function kh(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const X_=37297;let Y_=0;function q_(n,t){const e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}const Hh=new qt;function Z_(n){ne._getMatrix(Hh,ne.workingColorSpace,n);const t=`mat3( ${Hh.elements.map(e=>e.toFixed(4))} )`;switch(ne.getTransfer(n)){case fa:return[t,"LinearTransferOETF"];case ue:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function Vh(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),s=n.getShaderInfoLog(t).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+q_(n.getShaderSource(t),o)}else return s}function $_(n,t){const e=Z_(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function K_(n,t){let e;switch(t){case tp:e="Linear";break;case ep:e="Reinhard";break;case np:e="Cineon";break;case td:e="ACESFilmic";break;case sp:e="AgX";break;case rp:e="Neutral";break;case ip:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Po=new C;function j_(){ne.getLuminanceCoefficients(Po);const n=Po.x.toFixed(4),t=Po.y.toFixed(4),e=Po.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function J_(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Pr).join(`
`)}function Q_(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function tv(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(t,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function Pr(n){return n!==""}function Gh(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Wh(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const ev=/^[ \t]*#include +<([\w\d./]+)>/gm;function ec(n){return n.replace(ev,iv)}const nv=new Map;function iv(n,t){let e=$t[t];if(e===void 0){const i=nv.get(t);if(i!==void 0)e=$t[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return ec(e)}const sv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Xh(n){return n.replace(sv,rv)}function rv(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Yh(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}function ov(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===gc?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===Ju?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===pi&&(t="SHADOWMAP_TYPE_VSM"),t}function av(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case or:case ar:t="ENVMAP_TYPE_CUBE";break;case da:t="ENVMAP_TYPE_CUBE_UV";break}return t}function lv(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case ar:t="ENVMAP_MODE_REFRACTION";break}return t}function cv(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Qu:t="ENVMAP_BLENDING_MULTIPLY";break;case Jf:t="ENVMAP_BLENDING_MIX";break;case Qf:t="ENVMAP_BLENDING_ADD";break}return t}function hv(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function uv(n,t,e,i){const s=n.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=ov(e),c=av(e),h=lv(e),u=cv(e),d=hv(e),f=J_(e),p=Q_(r),_=s.createProgram();let g,m,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(Pr).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(Pr).join(`
`),m.length>0&&(m+=`
`)):(g=[Yh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Pr).join(`
`),m=[Yh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ki?"#define TONE_MAPPING":"",e.toneMapping!==ki?$t.tonemapping_pars_fragment:"",e.toneMapping!==ki?K_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",$t.colorspace_pars_fragment,$_("linearToOutputTexel",e.outputColorSpace),j_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Pr).join(`
`)),o=ec(o),o=Gh(o,e),o=Wh(o,e),a=ec(a),a=Gh(a,e),a=Wh(a,e),o=Xh(o),a=Xh(a),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",e.glslVersion===sh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===sh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const M=y+g+o,x=y+m+a,L=kh(s,s.VERTEX_SHADER,M),A=kh(s,s.FRAGMENT_SHADER,x);s.attachShader(_,L),s.attachShader(_,A),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function R(D){if(n.debug.checkShaderErrors){const V=s.getProgramInfoLog(_).trim(),z=s.getShaderInfoLog(L).trim(),G=s.getShaderInfoLog(A).trim();let j=!0,W=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(j=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,_,L,A);else{const st=Vh(s,L,"vertex"),X=Vh(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+V+`
`+st+`
`+X)}else V!==""?console.warn("THREE.WebGLProgram: Program Info Log:",V):(z===""||G==="")&&(W=!1);W&&(D.diagnostics={runnable:j,programLog:V,vertexShader:{log:z,prefix:g},fragmentShader:{log:G,prefix:m}})}s.deleteShader(L),s.deleteShader(A),I=new Jo(s,_),T=tv(s,_)}let I;this.getUniforms=function(){return I===void 0&&R(this),I};let T;this.getAttributes=function(){return T===void 0&&R(this),T};let E=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=s.getProgramParameter(_,X_)),E},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Y_++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=L,this.fragmentShader=A,this}let dv=0;class fv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new pv(t),e.set(t,i)),i}}class pv{constructor(t){this.id=dv++,this.code=t,this.usedTimes=0}}function mv(n,t,e,i,s,r,o){const a=new wc,l=new fv,c=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures;let f=s.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(T){return c.add(T),T===0?"uv":`uv${T}`}function g(T,E,D,V,z){const G=V.fog,j=z.geometry,W=T.isMeshStandardMaterial?V.environment:null,st=(T.isMeshStandardMaterial?e:t).get(T.envMap||W),X=st&&st.mapping===da?st.image.height:null,ut=p[T.type];T.precision!==null&&(f=s.getMaxPrecision(T.precision),f!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",f,"instead."));const Mt=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,wt=Mt!==void 0?Mt.length:0;let Gt=0;j.morphAttributes.position!==void 0&&(Gt=1),j.morphAttributes.normal!==void 0&&(Gt=2),j.morphAttributes.color!==void 0&&(Gt=3);let ae,K,ot,At;if(ut){const he=Zn[ut];ae=he.vertexShader,K=he.fragmentShader}else ae=T.vertexShader,K=T.fragmentShader,l.update(T),ot=l.getVertexShaderID(T),At=l.getFragmentShaderID(T);const lt=n.getRenderTarget(),Ut=n.state.buffers.depth.getReversed(),zt=z.isInstancedMesh===!0,Ft=z.isBatchedMesh===!0,te=!!T.map,Q=!!T.matcap,rt=!!st,P=!!T.aoMap,It=!!T.lightMap,nt=!!T.bumpMap,Et=!!T.normalMap,ct=!!T.displacementMap,Nt=!!T.emissiveMap,yt=!!T.metalnessMap,w=!!T.roughnessMap,S=T.anisotropy>0,B=T.clearcoat>0,q=T.dispersion>0,tt=T.iridescence>0,Z=T.sheen>0,Rt=T.transmission>0,ft=S&&!!T.anisotropyMap,St=B&&!!T.clearcoatMap,jt=B&&!!T.clearcoatNormalMap,it=B&&!!T.clearcoatRoughnessMap,bt=tt&&!!T.iridescenceMap,Ot=tt&&!!T.iridescenceThicknessMap,Bt=Z&&!!T.sheenColorMap,Tt=Z&&!!T.sheenRoughnessMap,Qt=!!T.specularMap,Zt=!!T.specularColorMap,pe=!!T.specularIntensityMap,N=Rt&&!!T.transmissionMap,pt=Rt&&!!T.thicknessMap,Y=!!T.gradientMap,J=!!T.alphaMap,vt=T.alphaTest>0,gt=!!T.alphaHash,Xt=!!T.extensions;let be=ki;T.toneMapped&&(lt===null||lt.isXRRenderTarget===!0)&&(be=n.toneMapping);const Ge={shaderID:ut,shaderType:T.type,shaderName:T.name,vertexShader:ae,fragmentShader:K,defines:T.defines,customVertexShaderID:ot,customFragmentShaderID:At,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:f,batching:Ft,batchingColor:Ft&&z._colorsTexture!==null,instancing:zt,instancingColor:zt&&z.instanceColor!==null,instancingMorph:zt&&z.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:lt===null?n.outputColorSpace:lt.isXRRenderTarget===!0?lt.texture.colorSpace:mr,alphaToCoverage:!!T.alphaToCoverage,map:te,matcap:Q,envMap:rt,envMapMode:rt&&st.mapping,envMapCubeUVHeight:X,aoMap:P,lightMap:It,bumpMap:nt,normalMap:Et,displacementMap:d&&ct,emissiveMap:Nt,normalMapObjectSpace:Et&&T.normalMapType===cp,normalMapTangentSpace:Et&&T.normalMapType===ud,metalnessMap:yt,roughnessMap:w,anisotropy:S,anisotropyMap:ft,clearcoat:B,clearcoatMap:St,clearcoatNormalMap:jt,clearcoatRoughnessMap:it,dispersion:q,iridescence:tt,iridescenceMap:bt,iridescenceThicknessMap:Ot,sheen:Z,sheenColorMap:Bt,sheenRoughnessMap:Tt,specularMap:Qt,specularColorMap:Zt,specularIntensityMap:pe,transmission:Rt,transmissionMap:N,thicknessMap:pt,gradientMap:Y,opaque:T.transparent===!1&&T.blending===Js&&T.alphaToCoverage===!1,alphaMap:J,alphaTest:vt,alphaHash:gt,combine:T.combine,mapUv:te&&_(T.map.channel),aoMapUv:P&&_(T.aoMap.channel),lightMapUv:It&&_(T.lightMap.channel),bumpMapUv:nt&&_(T.bumpMap.channel),normalMapUv:Et&&_(T.normalMap.channel),displacementMapUv:ct&&_(T.displacementMap.channel),emissiveMapUv:Nt&&_(T.emissiveMap.channel),metalnessMapUv:yt&&_(T.metalnessMap.channel),roughnessMapUv:w&&_(T.roughnessMap.channel),anisotropyMapUv:ft&&_(T.anisotropyMap.channel),clearcoatMapUv:St&&_(T.clearcoatMap.channel),clearcoatNormalMapUv:jt&&_(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:it&&_(T.clearcoatRoughnessMap.channel),iridescenceMapUv:bt&&_(T.iridescenceMap.channel),iridescenceThicknessMapUv:Ot&&_(T.iridescenceThicknessMap.channel),sheenColorMapUv:Bt&&_(T.sheenColorMap.channel),sheenRoughnessMapUv:Tt&&_(T.sheenRoughnessMap.channel),specularMapUv:Qt&&_(T.specularMap.channel),specularColorMapUv:Zt&&_(T.specularColorMap.channel),specularIntensityMapUv:pe&&_(T.specularIntensityMap.channel),transmissionMapUv:N&&_(T.transmissionMap.channel),thicknessMapUv:pt&&_(T.thicknessMap.channel),alphaMapUv:J&&_(T.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(Et||S),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!j.attributes.uv&&(te||J),fog:!!G,useFog:T.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Ut,skinning:z.isSkinnedMesh===!0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:wt,morphTextureStride:Gt,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:T.dithering,shadowMapEnabled:n.shadowMap.enabled&&D.length>0,shadowMapType:n.shadowMap.type,toneMapping:be,decodeVideoTexture:te&&T.map.isVideoTexture===!0&&ne.getTransfer(T.map.colorSpace)===ue,decodeVideoTextureEmissive:Nt&&T.emissiveMap.isVideoTexture===!0&&ne.getTransfer(T.emissiveMap.colorSpace)===ue,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===ln,flipSided:T.side===Je,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Xt&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Xt&&T.extensions.multiDraw===!0||Ft)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Ge.vertexUv1s=c.has(1),Ge.vertexUv2s=c.has(2),Ge.vertexUv3s=c.has(3),c.clear(),Ge}function m(T){const E=[];if(T.shaderID?E.push(T.shaderID):(E.push(T.customVertexShaderID),E.push(T.customFragmentShaderID)),T.defines!==void 0)for(const D in T.defines)E.push(D),E.push(T.defines[D]);return T.isRawShaderMaterial===!1&&(y(E,T),M(E,T),E.push(n.outputColorSpace)),E.push(T.customProgramCacheKey),E.join()}function y(T,E){T.push(E.precision),T.push(E.outputColorSpace),T.push(E.envMapMode),T.push(E.envMapCubeUVHeight),T.push(E.mapUv),T.push(E.alphaMapUv),T.push(E.lightMapUv),T.push(E.aoMapUv),T.push(E.bumpMapUv),T.push(E.normalMapUv),T.push(E.displacementMapUv),T.push(E.emissiveMapUv),T.push(E.metalnessMapUv),T.push(E.roughnessMapUv),T.push(E.anisotropyMapUv),T.push(E.clearcoatMapUv),T.push(E.clearcoatNormalMapUv),T.push(E.clearcoatRoughnessMapUv),T.push(E.iridescenceMapUv),T.push(E.iridescenceThicknessMapUv),T.push(E.sheenColorMapUv),T.push(E.sheenRoughnessMapUv),T.push(E.specularMapUv),T.push(E.specularColorMapUv),T.push(E.specularIntensityMapUv),T.push(E.transmissionMapUv),T.push(E.thicknessMapUv),T.push(E.combine),T.push(E.fogExp2),T.push(E.sizeAttenuation),T.push(E.morphTargetsCount),T.push(E.morphAttributeCount),T.push(E.numDirLights),T.push(E.numPointLights),T.push(E.numSpotLights),T.push(E.numSpotLightMaps),T.push(E.numHemiLights),T.push(E.numRectAreaLights),T.push(E.numDirLightShadows),T.push(E.numPointLightShadows),T.push(E.numSpotLightShadows),T.push(E.numSpotLightShadowsWithMaps),T.push(E.numLightProbes),T.push(E.shadowMapType),T.push(E.toneMapping),T.push(E.numClippingPlanes),T.push(E.numClipIntersection),T.push(E.depthPacking)}function M(T,E){a.disableAll(),E.supportsVertexTextures&&a.enable(0),E.instancing&&a.enable(1),E.instancingColor&&a.enable(2),E.instancingMorph&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),E.dispersion&&a.enable(20),E.batchingColor&&a.enable(21),T.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reverseDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),T.push(a.mask)}function x(T){const E=p[T.type];let D;if(E){const V=Zn[E];D=Md.clone(V.uniforms)}else D=T.uniforms;return D}function L(T,E){let D;for(let V=0,z=h.length;V<z;V++){const G=h[V];if(G.cacheKey===E){D=G,++D.usedTimes;break}}return D===void 0&&(D=new uv(n,E,T,r),h.push(D)),D}function A(T){if(--T.usedTimes===0){const E=h.indexOf(T);h[E]=h[h.length-1],h.pop(),T.destroy()}}function R(T){l.remove(T)}function I(){l.dispose()}return{getParameters:g,getProgramCacheKey:m,getUniforms:x,acquireProgram:L,releaseProgram:A,releaseShaderCache:R,programs:h,dispose:I}}function gv(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function _v(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function qh(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Zh(){const n=[];let t=0;const e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function o(u,d,f,p,_,g){let m=n[t];return m===void 0?(m={id:u.id,object:u,geometry:d,material:f,groupOrder:p,renderOrder:u.renderOrder,z:_,group:g},n[t]=m):(m.id=u.id,m.object=u,m.geometry=d,m.material=f,m.groupOrder=p,m.renderOrder=u.renderOrder,m.z=_,m.group=g),t++,m}function a(u,d,f,p,_,g){const m=o(u,d,f,p,_,g);f.transmission>0?i.push(m):f.transparent===!0?s.push(m):e.push(m)}function l(u,d,f,p,_,g){const m=o(u,d,f,p,_,g);f.transmission>0?i.unshift(m):f.transparent===!0?s.unshift(m):e.unshift(m)}function c(u,d){e.length>1&&e.sort(u||_v),i.length>1&&i.sort(d||qh),s.length>1&&s.sort(d||qh)}function h(){for(let u=t,d=n.length;u<d;u++){const f=n[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function vv(){let n=new WeakMap;function t(i,s){const r=n.get(i);let o;return r===void 0?(o=new Zh,n.set(i,[o])):s>=r.length?(o=new Zh,r.push(o)):o=r[s],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function xv(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new C,color:new Wt};break;case"SpotLight":e={position:new C,direction:new C,color:new Wt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new C,color:new Wt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new C,skyColor:new Wt,groundColor:new Wt};break;case"RectAreaLight":e={color:new Wt,position:new C,halfWidth:new C,halfHeight:new C};break}return n[t.id]=e,e}}}function Mv(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let yv=0;function Sv(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function Ev(n){const t=new xv,e=Mv(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new C);const s=new C,r=new Kt,o=new Kt;function a(c){let h=0,u=0,d=0;for(let T=0;T<9;T++)i.probe[T].set(0,0,0);let f=0,p=0,_=0,g=0,m=0,y=0,M=0,x=0,L=0,A=0,R=0;c.sort(Sv);for(let T=0,E=c.length;T<E;T++){const D=c[T],V=D.color,z=D.intensity,G=D.distance,j=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)h+=V.r*z,u+=V.g*z,d+=V.b*z;else if(D.isLightProbe){for(let W=0;W<9;W++)i.probe[W].addScaledVector(D.sh.coefficients[W],z);R++}else if(D.isDirectionalLight){const W=t.get(D);if(W.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const st=D.shadow,X=e.get(D);X.shadowIntensity=st.intensity,X.shadowBias=st.bias,X.shadowNormalBias=st.normalBias,X.shadowRadius=st.radius,X.shadowMapSize=st.mapSize,i.directionalShadow[f]=X,i.directionalShadowMap[f]=j,i.directionalShadowMatrix[f]=D.shadow.matrix,y++}i.directional[f]=W,f++}else if(D.isSpotLight){const W=t.get(D);W.position.setFromMatrixPosition(D.matrixWorld),W.color.copy(V).multiplyScalar(z),W.distance=G,W.coneCos=Math.cos(D.angle),W.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),W.decay=D.decay,i.spot[_]=W;const st=D.shadow;if(D.map&&(i.spotLightMap[L]=D.map,L++,st.updateMatrices(D),D.castShadow&&A++),i.spotLightMatrix[_]=st.matrix,D.castShadow){const X=e.get(D);X.shadowIntensity=st.intensity,X.shadowBias=st.bias,X.shadowNormalBias=st.normalBias,X.shadowRadius=st.radius,X.shadowMapSize=st.mapSize,i.spotShadow[_]=X,i.spotShadowMap[_]=j,x++}_++}else if(D.isRectAreaLight){const W=t.get(D);W.color.copy(V).multiplyScalar(z),W.halfWidth.set(D.width*.5,0,0),W.halfHeight.set(0,D.height*.5,0),i.rectArea[g]=W,g++}else if(D.isPointLight){const W=t.get(D);if(W.color.copy(D.color).multiplyScalar(D.intensity),W.distance=D.distance,W.decay=D.decay,D.castShadow){const st=D.shadow,X=e.get(D);X.shadowIntensity=st.intensity,X.shadowBias=st.bias,X.shadowNormalBias=st.normalBias,X.shadowRadius=st.radius,X.shadowMapSize=st.mapSize,X.shadowCameraNear=st.camera.near,X.shadowCameraFar=st.camera.far,i.pointShadow[p]=X,i.pointShadowMap[p]=j,i.pointShadowMatrix[p]=D.shadow.matrix,M++}i.point[p]=W,p++}else if(D.isHemisphereLight){const W=t.get(D);W.skyColor.copy(D.color).multiplyScalar(z),W.groundColor.copy(D.groundColor).multiplyScalar(z),i.hemi[m]=W,m++}}g>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=dt.LTC_FLOAT_1,i.rectAreaLTC2=dt.LTC_FLOAT_2):(i.rectAreaLTC1=dt.LTC_HALF_1,i.rectAreaLTC2=dt.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=d;const I=i.hash;(I.directionalLength!==f||I.pointLength!==p||I.spotLength!==_||I.rectAreaLength!==g||I.hemiLength!==m||I.numDirectionalShadows!==y||I.numPointShadows!==M||I.numSpotShadows!==x||I.numSpotMaps!==L||I.numLightProbes!==R)&&(i.directional.length=f,i.spot.length=_,i.rectArea.length=g,i.point.length=p,i.hemi.length=m,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=x,i.spotShadowMap.length=x,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=x+L-A,i.spotLightMap.length=L,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=R,I.directionalLength=f,I.pointLength=p,I.spotLength=_,I.rectAreaLength=g,I.hemiLength=m,I.numDirectionalShadows=y,I.numPointShadows=M,I.numSpotShadows=x,I.numSpotMaps=L,I.numLightProbes=R,i.version=yv++)}function l(c,h){let u=0,d=0,f=0,p=0,_=0;const g=h.matrixWorldInverse;for(let m=0,y=c.length;m<y;m++){const M=c[m];if(M.isDirectionalLight){const x=i.directional[u];x.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(g),u++}else if(M.isSpotLight){const x=i.spot[f];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(g),x.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(g),f++}else if(M.isRectAreaLight){const x=i.rectArea[p];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(g),o.identity(),r.copy(M.matrixWorld),r.premultiply(g),o.extractRotation(r),x.halfWidth.set(M.width*.5,0,0),x.halfHeight.set(0,M.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),p++}else if(M.isPointLight){const x=i.point[d];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(g),d++}else if(M.isHemisphereLight){const x=i.hemi[_];x.direction.setFromMatrixPosition(M.matrixWorld),x.direction.transformDirection(g),_++}}}return{setup:a,setupView:l,state:i}}function $h(n){const t=new Ev(n),e=[],i=[];function s(h){c.camera=h,e.length=0,i.length=0}function r(h){e.push(h)}function o(h){i.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function bv(n){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new $h(n),t.set(s,[a])):r>=o.length?(a=new $h(n),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:e,dispose:i}}class Tv extends to{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=ap,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class wv extends to{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Av=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Rv=`uniform sampler2D shadow_pass;
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
}`;function Cv(n,t,e){let i=new Rc;const s=new et,r=new et,o=new Te,a=new Tv({depthPacking:lp}),l=new wv,c={},h=e.maxTextureSize,u={[Zi]:Je,[Je]:Zi,[ln]:ln},d=new ni({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new et},radius:{value:4}},vertexShader:Av,fragmentShader:Rv}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const p=new Ae;p.setAttribute("position",new Sn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new fe(p,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=gc;let m=this.type;this.render=function(A,R,I){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||A.length===0)return;const T=n.getRenderTarget(),E=n.getActiveCubeFace(),D=n.getActiveMipmapLevel(),V=n.state;V.setBlending(zi),V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);const z=m!==pi&&this.type===pi,G=m===pi&&this.type!==pi;for(let j=0,W=A.length;j<W;j++){const st=A[j],X=st.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",st,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;s.copy(X.mapSize);const ut=X.getFrameExtents();if(s.multiply(ut),r.copy(X.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ut.x),s.x=r.x*ut.x,X.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ut.y),s.y=r.y*ut.y,X.mapSize.y=r.y)),X.map===null||z===!0||G===!0){const wt=this.type!==pi?{minFilter:gn,magFilter:gn}:{};X.map!==null&&X.map.dispose(),X.map=new ms(s.x,s.y,wt),X.map.texture.name=st.name+".shadowMap",X.camera.updateProjectionMatrix()}n.setRenderTarget(X.map),n.clear();const Mt=X.getViewportCount();for(let wt=0;wt<Mt;wt++){const Gt=X.getViewport(wt);o.set(r.x*Gt.x,r.y*Gt.y,r.x*Gt.z,r.y*Gt.w),V.viewport(o),X.updateMatrices(st,wt),i=X.getFrustum(),x(R,I,X.camera,st,this.type)}X.isPointLightShadow!==!0&&this.type===pi&&y(X,I),X.needsUpdate=!1}m=this.type,g.needsUpdate=!1,n.setRenderTarget(T,E,D)};function y(A,R){const I=t.update(_);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new ms(s.x,s.y)),d.uniforms.shadow_pass.value=A.map.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,n.setRenderTarget(A.mapPass),n.clear(),n.renderBufferDirect(R,null,I,d,_,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,n.setRenderTarget(A.map),n.clear(),n.renderBufferDirect(R,null,I,f,_,null)}function M(A,R,I,T){let E=null;const D=I.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(D!==void 0)E=D;else if(E=I.isPointLight===!0?l:a,n.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const V=E.uuid,z=R.uuid;let G=c[V];G===void 0&&(G={},c[V]=G);let j=G[z];j===void 0&&(j=E.clone(),G[z]=j,R.addEventListener("dispose",L)),E=j}if(E.visible=R.visible,E.wireframe=R.wireframe,T===pi?E.side=R.shadowSide!==null?R.shadowSide:R.side:E.side=R.shadowSide!==null?R.shadowSide:u[R.side],E.alphaMap=R.alphaMap,E.alphaTest=R.alphaTest,E.map=R.map,E.clipShadows=R.clipShadows,E.clippingPlanes=R.clippingPlanes,E.clipIntersection=R.clipIntersection,E.displacementMap=R.displacementMap,E.displacementScale=R.displacementScale,E.displacementBias=R.displacementBias,E.wireframeLinewidth=R.wireframeLinewidth,E.linewidth=R.linewidth,I.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const V=n.properties.get(E);V.light=I}return E}function x(A,R,I,T,E){if(A.visible===!1)return;if(A.layers.test(R.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&E===pi)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,A.matrixWorld);const z=t.update(A),G=A.material;if(Array.isArray(G)){const j=z.groups;for(let W=0,st=j.length;W<st;W++){const X=j[W],ut=G[X.materialIndex];if(ut&&ut.visible){const Mt=M(A,ut,T,E);A.onBeforeShadow(n,A,R,I,z,Mt,X),n.renderBufferDirect(I,null,z,Mt,A,X),A.onAfterShadow(n,A,R,I,z,Mt,X)}}}else if(G.visible){const j=M(A,G,T,E);A.onBeforeShadow(n,A,R,I,z,j,null),n.renderBufferDirect(I,null,z,j,A,null),A.onAfterShadow(n,A,R,I,z,j,null)}}const V=A.children;for(let z=0,G=V.length;z<G;z++)x(V[z],R,I,T,E)}function L(A){A.target.removeEventListener("dispose",L);for(const I in c){const T=c[I],E=A.target.uuid;E in T&&(T[E].dispose(),delete T[E])}}}const Pv={[xl]:Ml,[yl]:bl,[Sl]:Tl,[rr]:El,[Ml]:xl,[bl]:yl,[Tl]:Sl,[El]:rr};function Lv(n,t){function e(){let N=!1;const pt=new Te;let Y=null;const J=new Te(0,0,0,0);return{setMask:function(vt){Y!==vt&&!N&&(n.colorMask(vt,vt,vt,vt),Y=vt)},setLocked:function(vt){N=vt},setClear:function(vt,gt,Xt,be,Ge){Ge===!0&&(vt*=be,gt*=be,Xt*=be),pt.set(vt,gt,Xt,be),J.equals(pt)===!1&&(n.clearColor(vt,gt,Xt,be),J.copy(pt))},reset:function(){N=!1,Y=null,J.set(-1,0,0,0)}}}function i(){let N=!1,pt=!1,Y=null,J=null,vt=null;return{setReversed:function(gt){if(pt!==gt){const Xt=t.get("EXT_clip_control");pt?Xt.clipControlEXT(Xt.LOWER_LEFT_EXT,Xt.ZERO_TO_ONE_EXT):Xt.clipControlEXT(Xt.LOWER_LEFT_EXT,Xt.NEGATIVE_ONE_TO_ONE_EXT);const be=vt;vt=null,this.setClear(be)}pt=gt},getReversed:function(){return pt},setTest:function(gt){gt?lt(n.DEPTH_TEST):Ut(n.DEPTH_TEST)},setMask:function(gt){Y!==gt&&!N&&(n.depthMask(gt),Y=gt)},setFunc:function(gt){if(pt&&(gt=Pv[gt]),J!==gt){switch(gt){case xl:n.depthFunc(n.NEVER);break;case Ml:n.depthFunc(n.ALWAYS);break;case yl:n.depthFunc(n.LESS);break;case rr:n.depthFunc(n.LEQUAL);break;case Sl:n.depthFunc(n.EQUAL);break;case El:n.depthFunc(n.GEQUAL);break;case bl:n.depthFunc(n.GREATER);break;case Tl:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}J=gt}},setLocked:function(gt){N=gt},setClear:function(gt){vt!==gt&&(pt&&(gt=1-gt),n.clearDepth(gt),vt=gt)},reset:function(){N=!1,Y=null,J=null,vt=null,pt=!1}}}function s(){let N=!1,pt=null,Y=null,J=null,vt=null,gt=null,Xt=null,be=null,Ge=null;return{setTest:function(he){N||(he?lt(n.STENCIL_TEST):Ut(n.STENCIL_TEST))},setMask:function(he){pt!==he&&!N&&(n.stencilMask(he),pt=he)},setFunc:function(he,An,ai){(Y!==he||J!==An||vt!==ai)&&(n.stencilFunc(he,An,ai),Y=he,J=An,vt=ai)},setOp:function(he,An,ai){(gt!==he||Xt!==An||be!==ai)&&(n.stencilOp(he,An,ai),gt=he,Xt=An,be=ai)},setLocked:function(he){N=he},setClear:function(he){Ge!==he&&(n.clearStencil(he),Ge=he)},reset:function(){N=!1,pt=null,Y=null,J=null,vt=null,gt=null,Xt=null,be=null,Ge=null}}}const r=new e,o=new i,a=new s,l=new WeakMap,c=new WeakMap;let h={},u={},d=new WeakMap,f=[],p=null,_=!1,g=null,m=null,y=null,M=null,x=null,L=null,A=null,R=new Wt(0,0,0),I=0,T=!1,E=null,D=null,V=null,z=null,G=null;const j=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,st=0;const X=n.getParameter(n.VERSION);X.indexOf("WebGL")!==-1?(st=parseFloat(/^WebGL (\d)/.exec(X)[1]),W=st>=1):X.indexOf("OpenGL ES")!==-1&&(st=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),W=st>=2);let ut=null,Mt={};const wt=n.getParameter(n.SCISSOR_BOX),Gt=n.getParameter(n.VIEWPORT),ae=new Te().fromArray(wt),K=new Te().fromArray(Gt);function ot(N,pt,Y,J){const vt=new Uint8Array(4),gt=n.createTexture();n.bindTexture(N,gt),n.texParameteri(N,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(N,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Xt=0;Xt<Y;Xt++)N===n.TEXTURE_3D||N===n.TEXTURE_2D_ARRAY?n.texImage3D(pt,0,n.RGBA,1,1,J,0,n.RGBA,n.UNSIGNED_BYTE,vt):n.texImage2D(pt+Xt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,vt);return gt}const At={};At[n.TEXTURE_2D]=ot(n.TEXTURE_2D,n.TEXTURE_2D,1),At[n.TEXTURE_CUBE_MAP]=ot(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),At[n.TEXTURE_2D_ARRAY]=ot(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),At[n.TEXTURE_3D]=ot(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),lt(n.DEPTH_TEST),o.setFunc(rr),nt(!1),Et(Jc),lt(n.CULL_FACE),P(zi);function lt(N){h[N]!==!0&&(n.enable(N),h[N]=!0)}function Ut(N){h[N]!==!1&&(n.disable(N),h[N]=!1)}function zt(N,pt){return u[N]!==pt?(n.bindFramebuffer(N,pt),u[N]=pt,N===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=pt),N===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=pt),!0):!1}function Ft(N,pt){let Y=f,J=!1;if(N){Y=d.get(pt),Y===void 0&&(Y=[],d.set(pt,Y));const vt=N.textures;if(Y.length!==vt.length||Y[0]!==n.COLOR_ATTACHMENT0){for(let gt=0,Xt=vt.length;gt<Xt;gt++)Y[gt]=n.COLOR_ATTACHMENT0+gt;Y.length=vt.length,J=!0}}else Y[0]!==n.BACK&&(Y[0]=n.BACK,J=!0);J&&n.drawBuffers(Y)}function te(N){return p!==N?(n.useProgram(N),p=N,!0):!1}const Q={[cs]:n.FUNC_ADD,[Nf]:n.FUNC_SUBTRACT,[Of]:n.FUNC_REVERSE_SUBTRACT};Q[Ff]=n.MIN,Q[Bf]=n.MAX;const rt={[zf]:n.ZERO,[kf]:n.ONE,[Hf]:n.SRC_COLOR,[_l]:n.SRC_ALPHA,[qf]:n.SRC_ALPHA_SATURATE,[Xf]:n.DST_COLOR,[Gf]:n.DST_ALPHA,[Vf]:n.ONE_MINUS_SRC_COLOR,[vl]:n.ONE_MINUS_SRC_ALPHA,[Yf]:n.ONE_MINUS_DST_COLOR,[Wf]:n.ONE_MINUS_DST_ALPHA,[Zf]:n.CONSTANT_COLOR,[$f]:n.ONE_MINUS_CONSTANT_COLOR,[Kf]:n.CONSTANT_ALPHA,[jf]:n.ONE_MINUS_CONSTANT_ALPHA};function P(N,pt,Y,J,vt,gt,Xt,be,Ge,he){if(N===zi){_===!0&&(Ut(n.BLEND),_=!1);return}if(_===!1&&(lt(n.BLEND),_=!0),N!==Uf){if(N!==g||he!==T){if((m!==cs||x!==cs)&&(n.blendEquation(n.FUNC_ADD),m=cs,x=cs),he)switch(N){case Js:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Qc:n.blendFunc(n.ONE,n.ONE);break;case th:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case eh:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case Js:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Qc:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case th:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case eh:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}y=null,M=null,L=null,A=null,R.set(0,0,0),I=0,g=N,T=he}return}vt=vt||pt,gt=gt||Y,Xt=Xt||J,(pt!==m||vt!==x)&&(n.blendEquationSeparate(Q[pt],Q[vt]),m=pt,x=vt),(Y!==y||J!==M||gt!==L||Xt!==A)&&(n.blendFuncSeparate(rt[Y],rt[J],rt[gt],rt[Xt]),y=Y,M=J,L=gt,A=Xt),(be.equals(R)===!1||Ge!==I)&&(n.blendColor(be.r,be.g,be.b,Ge),R.copy(be),I=Ge),g=N,T=!1}function It(N,pt){N.side===ln?Ut(n.CULL_FACE):lt(n.CULL_FACE);let Y=N.side===Je;pt&&(Y=!Y),nt(Y),N.blending===Js&&N.transparent===!1?P(zi):P(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),o.setFunc(N.depthFunc),o.setTest(N.depthTest),o.setMask(N.depthWrite),r.setMask(N.colorWrite);const J=N.stencilWrite;a.setTest(J),J&&(a.setMask(N.stencilWriteMask),a.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),a.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),Nt(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?lt(n.SAMPLE_ALPHA_TO_COVERAGE):Ut(n.SAMPLE_ALPHA_TO_COVERAGE)}function nt(N){E!==N&&(N?n.frontFace(n.CW):n.frontFace(n.CCW),E=N)}function Et(N){N!==If?(lt(n.CULL_FACE),N!==D&&(N===Jc?n.cullFace(n.BACK):N===Df?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ut(n.CULL_FACE),D=N}function ct(N){N!==V&&(W&&n.lineWidth(N),V=N)}function Nt(N,pt,Y){N?(lt(n.POLYGON_OFFSET_FILL),(z!==pt||G!==Y)&&(n.polygonOffset(pt,Y),z=pt,G=Y)):Ut(n.POLYGON_OFFSET_FILL)}function yt(N){N?lt(n.SCISSOR_TEST):Ut(n.SCISSOR_TEST)}function w(N){N===void 0&&(N=n.TEXTURE0+j-1),ut!==N&&(n.activeTexture(N),ut=N)}function S(N,pt,Y){Y===void 0&&(ut===null?Y=n.TEXTURE0+j-1:Y=ut);let J=Mt[Y];J===void 0&&(J={type:void 0,texture:void 0},Mt[Y]=J),(J.type!==N||J.texture!==pt)&&(ut!==Y&&(n.activeTexture(Y),ut=Y),n.bindTexture(N,pt||At[N]),J.type=N,J.texture=pt)}function B(){const N=Mt[ut];N!==void 0&&N.type!==void 0&&(n.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function q(){try{n.compressedTexImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function tt(){try{n.compressedTexImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Z(){try{n.texSubImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Rt(){try{n.texSubImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ft(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function St(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function jt(){try{n.texStorage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function it(){try{n.texStorage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function bt(){try{n.texImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ot(){try{n.texImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Bt(N){ae.equals(N)===!1&&(n.scissor(N.x,N.y,N.z,N.w),ae.copy(N))}function Tt(N){K.equals(N)===!1&&(n.viewport(N.x,N.y,N.z,N.w),K.copy(N))}function Qt(N,pt){let Y=c.get(pt);Y===void 0&&(Y=new WeakMap,c.set(pt,Y));let J=Y.get(N);J===void 0&&(J=n.getUniformBlockIndex(pt,N.name),Y.set(N,J))}function Zt(N,pt){const J=c.get(pt).get(N);l.get(pt)!==J&&(n.uniformBlockBinding(pt,J,N.__bindingPointIndex),l.set(pt,J))}function pe(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},ut=null,Mt={},u={},d=new WeakMap,f=[],p=null,_=!1,g=null,m=null,y=null,M=null,x=null,L=null,A=null,R=new Wt(0,0,0),I=0,T=!1,E=null,D=null,V=null,z=null,G=null,ae.set(0,0,n.canvas.width,n.canvas.height),K.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:lt,disable:Ut,bindFramebuffer:zt,drawBuffers:Ft,useProgram:te,setBlending:P,setMaterial:It,setFlipSided:nt,setCullFace:Et,setLineWidth:ct,setPolygonOffset:Nt,setScissorTest:yt,activeTexture:w,bindTexture:S,unbindTexture:B,compressedTexImage2D:q,compressedTexImage3D:tt,texImage2D:bt,texImage3D:Ot,updateUBOMapping:Qt,uniformBlockBinding:Zt,texStorage2D:jt,texStorage3D:it,texSubImage2D:Z,texSubImage3D:Rt,compressedTexSubImage2D:ft,compressedTexSubImage3D:St,scissor:Bt,viewport:Tt,reset:pe}}function Kh(n,t,e,i){const s=Iv(i);switch(e){case rd:return n*t;case ad:return n*t;case ld:return n*t*2;case Mc:return n*t/s.components*s.byteLength;case yc:return n*t/s.components*s.byteLength;case cd:return n*t*2/s.components*s.byteLength;case Sc:return n*t*2/s.components*s.byteLength;case od:return n*t*3/s.components*s.byteLength;case Fn:return n*t*4/s.components*s.byteLength;case Ec:return n*t*4/s.components*s.byteLength;case qo:case Zo:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case $o:case Ko:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Pl:case Il:return Math.max(n,16)*Math.max(t,8)/4;case Cl:case Ll:return Math.max(n,8)*Math.max(t,8)/2;case Dl:case Ul:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Nl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Ol:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Fl:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case Bl:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case zl:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case kl:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case Hl:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case Vl:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case Gl:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case Wl:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case Xl:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case Yl:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case ql:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case Zl:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case $l:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case jo:case Kl:case jl:return Math.ceil(n/4)*Math.ceil(t/4)*16;case hd:case Jl:return Math.ceil(n/4)*Math.ceil(t/4)*8;case Ql:case tc:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Iv(n){switch(n){case Si:case nd:return{byteLength:1,components:1};case Vr:case id:case Jr:return{byteLength:2,components:1};case vc:case xc:return{byteLength:2,components:4};case ps:case _c:case Qn:return{byteLength:4,components:1};case sd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function Dv(n,t,e,i,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new et,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(w,S){return f?new OffscreenCanvas(w,S):na("canvas")}function _(w,S,B){let q=1;const tt=yt(w);if((tt.width>B||tt.height>B)&&(q=B/Math.max(tt.width,tt.height)),q<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const Z=Math.floor(q*tt.width),Rt=Math.floor(q*tt.height);u===void 0&&(u=p(Z,Rt));const ft=S?p(Z,Rt):u;return ft.width=Z,ft.height=Rt,ft.getContext("2d").drawImage(w,0,0,Z,Rt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+tt.width+"x"+tt.height+") to ("+Z+"x"+Rt+")."),ft}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+tt.width+"x"+tt.height+")."),w;return w}function g(w){return w.generateMipmaps}function m(w){n.generateMipmap(w)}function y(w){return w.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?n.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function M(w,S,B,q,tt=!1){if(w!==null){if(n[w]!==void 0)return n[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let Z=S;if(S===n.RED&&(B===n.FLOAT&&(Z=n.R32F),B===n.HALF_FLOAT&&(Z=n.R16F),B===n.UNSIGNED_BYTE&&(Z=n.R8)),S===n.RED_INTEGER&&(B===n.UNSIGNED_BYTE&&(Z=n.R8UI),B===n.UNSIGNED_SHORT&&(Z=n.R16UI),B===n.UNSIGNED_INT&&(Z=n.R32UI),B===n.BYTE&&(Z=n.R8I),B===n.SHORT&&(Z=n.R16I),B===n.INT&&(Z=n.R32I)),S===n.RG&&(B===n.FLOAT&&(Z=n.RG32F),B===n.HALF_FLOAT&&(Z=n.RG16F),B===n.UNSIGNED_BYTE&&(Z=n.RG8)),S===n.RG_INTEGER&&(B===n.UNSIGNED_BYTE&&(Z=n.RG8UI),B===n.UNSIGNED_SHORT&&(Z=n.RG16UI),B===n.UNSIGNED_INT&&(Z=n.RG32UI),B===n.BYTE&&(Z=n.RG8I),B===n.SHORT&&(Z=n.RG16I),B===n.INT&&(Z=n.RG32I)),S===n.RGB_INTEGER&&(B===n.UNSIGNED_BYTE&&(Z=n.RGB8UI),B===n.UNSIGNED_SHORT&&(Z=n.RGB16UI),B===n.UNSIGNED_INT&&(Z=n.RGB32UI),B===n.BYTE&&(Z=n.RGB8I),B===n.SHORT&&(Z=n.RGB16I),B===n.INT&&(Z=n.RGB32I)),S===n.RGBA_INTEGER&&(B===n.UNSIGNED_BYTE&&(Z=n.RGBA8UI),B===n.UNSIGNED_SHORT&&(Z=n.RGBA16UI),B===n.UNSIGNED_INT&&(Z=n.RGBA32UI),B===n.BYTE&&(Z=n.RGBA8I),B===n.SHORT&&(Z=n.RGBA16I),B===n.INT&&(Z=n.RGBA32I)),S===n.RGB&&B===n.UNSIGNED_INT_5_9_9_9_REV&&(Z=n.RGB9_E5),S===n.RGBA){const Rt=tt?fa:ne.getTransfer(q);B===n.FLOAT&&(Z=n.RGBA32F),B===n.HALF_FLOAT&&(Z=n.RGBA16F),B===n.UNSIGNED_BYTE&&(Z=Rt===ue?n.SRGB8_ALPHA8:n.RGBA8),B===n.UNSIGNED_SHORT_4_4_4_4&&(Z=n.RGBA4),B===n.UNSIGNED_SHORT_5_5_5_1&&(Z=n.RGB5_A1)}return(Z===n.R16F||Z===n.R32F||Z===n.RG16F||Z===n.RG32F||Z===n.RGBA16F||Z===n.RGBA32F)&&t.get("EXT_color_buffer_float"),Z}function x(w,S){let B;return w?S===null||S===ps||S===cr?B=n.DEPTH24_STENCIL8:S===Qn?B=n.DEPTH32F_STENCIL8:S===Vr&&(B=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===ps||S===cr?B=n.DEPTH_COMPONENT24:S===Qn?B=n.DEPTH_COMPONENT32F:S===Vr&&(B=n.DEPTH_COMPONENT16),B}function L(w,S){return g(w)===!0||w.isFramebufferTexture&&w.minFilter!==gn&&w.minFilter!==Jn?Math.log2(Math.max(S.width,S.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?S.mipmaps.length:1}function A(w){const S=w.target;S.removeEventListener("dispose",A),I(S),S.isVideoTexture&&h.delete(S)}function R(w){const S=w.target;S.removeEventListener("dispose",R),E(S)}function I(w){const S=i.get(w);if(S.__webglInit===void 0)return;const B=w.source,q=d.get(B);if(q){const tt=q[S.__cacheKey];tt.usedTimes--,tt.usedTimes===0&&T(w),Object.keys(q).length===0&&d.delete(B)}i.remove(w)}function T(w){const S=i.get(w);n.deleteTexture(S.__webglTexture);const B=w.source,q=d.get(B);delete q[S.__cacheKey],o.memory.textures--}function E(w){const S=i.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),i.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(S.__webglFramebuffer[q]))for(let tt=0;tt<S.__webglFramebuffer[q].length;tt++)n.deleteFramebuffer(S.__webglFramebuffer[q][tt]);else n.deleteFramebuffer(S.__webglFramebuffer[q]);S.__webglDepthbuffer&&n.deleteRenderbuffer(S.__webglDepthbuffer[q])}else{if(Array.isArray(S.__webglFramebuffer))for(let q=0;q<S.__webglFramebuffer.length;q++)n.deleteFramebuffer(S.__webglFramebuffer[q]);else n.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&n.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&n.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let q=0;q<S.__webglColorRenderbuffer.length;q++)S.__webglColorRenderbuffer[q]&&n.deleteRenderbuffer(S.__webglColorRenderbuffer[q]);S.__webglDepthRenderbuffer&&n.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const B=w.textures;for(let q=0,tt=B.length;q<tt;q++){const Z=i.get(B[q]);Z.__webglTexture&&(n.deleteTexture(Z.__webglTexture),o.memory.textures--),i.remove(B[q])}i.remove(w)}let D=0;function V(){D=0}function z(){const w=D;return w>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+s.maxTextures),D+=1,w}function G(w){const S=[];return S.push(w.wrapS),S.push(w.wrapT),S.push(w.wrapR||0),S.push(w.magFilter),S.push(w.minFilter),S.push(w.anisotropy),S.push(w.internalFormat),S.push(w.format),S.push(w.type),S.push(w.generateMipmaps),S.push(w.premultiplyAlpha),S.push(w.flipY),S.push(w.unpackAlignment),S.push(w.colorSpace),S.join()}function j(w,S){const B=i.get(w);if(w.isVideoTexture&&ct(w),w.isRenderTargetTexture===!1&&w.version>0&&B.__version!==w.version){const q=w.image;if(q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{K(B,w,S);return}}e.bindTexture(n.TEXTURE_2D,B.__webglTexture,n.TEXTURE0+S)}function W(w,S){const B=i.get(w);if(w.version>0&&B.__version!==w.version){K(B,w,S);return}e.bindTexture(n.TEXTURE_2D_ARRAY,B.__webglTexture,n.TEXTURE0+S)}function st(w,S){const B=i.get(w);if(w.version>0&&B.__version!==w.version){K(B,w,S);return}e.bindTexture(n.TEXTURE_3D,B.__webglTexture,n.TEXTURE0+S)}function X(w,S){const B=i.get(w);if(w.version>0&&B.__version!==w.version){ot(B,w,S);return}e.bindTexture(n.TEXTURE_CUBE_MAP,B.__webglTexture,n.TEXTURE0+S)}const ut={[lr]:n.REPEAT,[us]:n.CLAMP_TO_EDGE,[Rl]:n.MIRRORED_REPEAT},Mt={[gn]:n.NEAREST,[op]:n.NEAREST_MIPMAP_NEAREST,[co]:n.NEAREST_MIPMAP_LINEAR,[Jn]:n.LINEAR,[Ta]:n.LINEAR_MIPMAP_NEAREST,[ds]:n.LINEAR_MIPMAP_LINEAR},wt={[hp]:n.NEVER,[gp]:n.ALWAYS,[up]:n.LESS,[dd]:n.LEQUAL,[dp]:n.EQUAL,[mp]:n.GEQUAL,[fp]:n.GREATER,[pp]:n.NOTEQUAL};function Gt(w,S){if(S.type===Qn&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===Jn||S.magFilter===Ta||S.magFilter===co||S.magFilter===ds||S.minFilter===Jn||S.minFilter===Ta||S.minFilter===co||S.minFilter===ds)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(w,n.TEXTURE_WRAP_S,ut[S.wrapS]),n.texParameteri(w,n.TEXTURE_WRAP_T,ut[S.wrapT]),(w===n.TEXTURE_3D||w===n.TEXTURE_2D_ARRAY)&&n.texParameteri(w,n.TEXTURE_WRAP_R,ut[S.wrapR]),n.texParameteri(w,n.TEXTURE_MAG_FILTER,Mt[S.magFilter]),n.texParameteri(w,n.TEXTURE_MIN_FILTER,Mt[S.minFilter]),S.compareFunction&&(n.texParameteri(w,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(w,n.TEXTURE_COMPARE_FUNC,wt[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===gn||S.minFilter!==co&&S.minFilter!==ds||S.type===Qn&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){const B=t.get("EXT_texture_filter_anisotropic");n.texParameterf(w,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function ae(w,S){let B=!1;w.__webglInit===void 0&&(w.__webglInit=!0,S.addEventListener("dispose",A));const q=S.source;let tt=d.get(q);tt===void 0&&(tt={},d.set(q,tt));const Z=G(S);if(Z!==w.__cacheKey){tt[Z]===void 0&&(tt[Z]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,B=!0),tt[Z].usedTimes++;const Rt=tt[w.__cacheKey];Rt!==void 0&&(tt[w.__cacheKey].usedTimes--,Rt.usedTimes===0&&T(S)),w.__cacheKey=Z,w.__webglTexture=tt[Z].texture}return B}function K(w,S,B){let q=n.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(q=n.TEXTURE_2D_ARRAY),S.isData3DTexture&&(q=n.TEXTURE_3D);const tt=ae(w,S),Z=S.source;e.bindTexture(q,w.__webglTexture,n.TEXTURE0+B);const Rt=i.get(Z);if(Z.version!==Rt.__version||tt===!0){e.activeTexture(n.TEXTURE0+B);const ft=ne.getPrimaries(ne.workingColorSpace),St=S.colorSpace===Oi?null:ne.getPrimaries(S.colorSpace),jt=S.colorSpace===Oi||ft===St?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,jt);let it=_(S.image,!1,s.maxTextureSize);it=Nt(S,it);const bt=r.convert(S.format,S.colorSpace),Ot=r.convert(S.type);let Bt=M(S.internalFormat,bt,Ot,S.colorSpace,S.isVideoTexture);Gt(q,S);let Tt;const Qt=S.mipmaps,Zt=S.isVideoTexture!==!0,pe=Rt.__version===void 0||tt===!0,N=Z.dataReady,pt=L(S,it);if(S.isDepthTexture)Bt=x(S.format===hr,S.type),pe&&(Zt?e.texStorage2D(n.TEXTURE_2D,1,Bt,it.width,it.height):e.texImage2D(n.TEXTURE_2D,0,Bt,it.width,it.height,0,bt,Ot,null));else if(S.isDataTexture)if(Qt.length>0){Zt&&pe&&e.texStorage2D(n.TEXTURE_2D,pt,Bt,Qt[0].width,Qt[0].height);for(let Y=0,J=Qt.length;Y<J;Y++)Tt=Qt[Y],Zt?N&&e.texSubImage2D(n.TEXTURE_2D,Y,0,0,Tt.width,Tt.height,bt,Ot,Tt.data):e.texImage2D(n.TEXTURE_2D,Y,Bt,Tt.width,Tt.height,0,bt,Ot,Tt.data);S.generateMipmaps=!1}else Zt?(pe&&e.texStorage2D(n.TEXTURE_2D,pt,Bt,it.width,it.height),N&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,it.width,it.height,bt,Ot,it.data)):e.texImage2D(n.TEXTURE_2D,0,Bt,it.width,it.height,0,bt,Ot,it.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Zt&&pe&&e.texStorage3D(n.TEXTURE_2D_ARRAY,pt,Bt,Qt[0].width,Qt[0].height,it.depth);for(let Y=0,J=Qt.length;Y<J;Y++)if(Tt=Qt[Y],S.format!==Fn)if(bt!==null)if(Zt){if(N)if(S.layerUpdates.size>0){const vt=Kh(Tt.width,Tt.height,S.format,S.type);for(const gt of S.layerUpdates){const Xt=Tt.data.subarray(gt*vt/Tt.data.BYTES_PER_ELEMENT,(gt+1)*vt/Tt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Y,0,0,gt,Tt.width,Tt.height,1,bt,Xt)}S.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Y,0,0,0,Tt.width,Tt.height,it.depth,bt,Tt.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Y,Bt,Tt.width,Tt.height,it.depth,0,Tt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Zt?N&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,Y,0,0,0,Tt.width,Tt.height,it.depth,bt,Ot,Tt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,Y,Bt,Tt.width,Tt.height,it.depth,0,bt,Ot,Tt.data)}else{Zt&&pe&&e.texStorage2D(n.TEXTURE_2D,pt,Bt,Qt[0].width,Qt[0].height);for(let Y=0,J=Qt.length;Y<J;Y++)Tt=Qt[Y],S.format!==Fn?bt!==null?Zt?N&&e.compressedTexSubImage2D(n.TEXTURE_2D,Y,0,0,Tt.width,Tt.height,bt,Tt.data):e.compressedTexImage2D(n.TEXTURE_2D,Y,Bt,Tt.width,Tt.height,0,Tt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Zt?N&&e.texSubImage2D(n.TEXTURE_2D,Y,0,0,Tt.width,Tt.height,bt,Ot,Tt.data):e.texImage2D(n.TEXTURE_2D,Y,Bt,Tt.width,Tt.height,0,bt,Ot,Tt.data)}else if(S.isDataArrayTexture)if(Zt){if(pe&&e.texStorage3D(n.TEXTURE_2D_ARRAY,pt,Bt,it.width,it.height,it.depth),N)if(S.layerUpdates.size>0){const Y=Kh(it.width,it.height,S.format,S.type);for(const J of S.layerUpdates){const vt=it.data.subarray(J*Y/it.data.BYTES_PER_ELEMENT,(J+1)*Y/it.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,J,it.width,it.height,1,bt,Ot,vt)}S.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,it.width,it.height,it.depth,bt,Ot,it.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Bt,it.width,it.height,it.depth,0,bt,Ot,it.data);else if(S.isData3DTexture)Zt?(pe&&e.texStorage3D(n.TEXTURE_3D,pt,Bt,it.width,it.height,it.depth),N&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,it.width,it.height,it.depth,bt,Ot,it.data)):e.texImage3D(n.TEXTURE_3D,0,Bt,it.width,it.height,it.depth,0,bt,Ot,it.data);else if(S.isFramebufferTexture){if(pe)if(Zt)e.texStorage2D(n.TEXTURE_2D,pt,Bt,it.width,it.height);else{let Y=it.width,J=it.height;for(let vt=0;vt<pt;vt++)e.texImage2D(n.TEXTURE_2D,vt,Bt,Y,J,0,bt,Ot,null),Y>>=1,J>>=1}}else if(Qt.length>0){if(Zt&&pe){const Y=yt(Qt[0]);e.texStorage2D(n.TEXTURE_2D,pt,Bt,Y.width,Y.height)}for(let Y=0,J=Qt.length;Y<J;Y++)Tt=Qt[Y],Zt?N&&e.texSubImage2D(n.TEXTURE_2D,Y,0,0,bt,Ot,Tt):e.texImage2D(n.TEXTURE_2D,Y,Bt,bt,Ot,Tt);S.generateMipmaps=!1}else if(Zt){if(pe){const Y=yt(it);e.texStorage2D(n.TEXTURE_2D,pt,Bt,Y.width,Y.height)}N&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,bt,Ot,it)}else e.texImage2D(n.TEXTURE_2D,0,Bt,bt,Ot,it);g(S)&&m(q),Rt.__version=Z.version,S.onUpdate&&S.onUpdate(S)}w.__version=S.version}function ot(w,S,B){if(S.image.length!==6)return;const q=ae(w,S),tt=S.source;e.bindTexture(n.TEXTURE_CUBE_MAP,w.__webglTexture,n.TEXTURE0+B);const Z=i.get(tt);if(tt.version!==Z.__version||q===!0){e.activeTexture(n.TEXTURE0+B);const Rt=ne.getPrimaries(ne.workingColorSpace),ft=S.colorSpace===Oi?null:ne.getPrimaries(S.colorSpace),St=S.colorSpace===Oi||Rt===ft?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,St);const jt=S.isCompressedTexture||S.image[0].isCompressedTexture,it=S.image[0]&&S.image[0].isDataTexture,bt=[];for(let J=0;J<6;J++)!jt&&!it?bt[J]=_(S.image[J],!0,s.maxCubemapSize):bt[J]=it?S.image[J].image:S.image[J],bt[J]=Nt(S,bt[J]);const Ot=bt[0],Bt=r.convert(S.format,S.colorSpace),Tt=r.convert(S.type),Qt=M(S.internalFormat,Bt,Tt,S.colorSpace),Zt=S.isVideoTexture!==!0,pe=Z.__version===void 0||q===!0,N=tt.dataReady;let pt=L(S,Ot);Gt(n.TEXTURE_CUBE_MAP,S);let Y;if(jt){Zt&&pe&&e.texStorage2D(n.TEXTURE_CUBE_MAP,pt,Qt,Ot.width,Ot.height);for(let J=0;J<6;J++){Y=bt[J].mipmaps;for(let vt=0;vt<Y.length;vt++){const gt=Y[vt];S.format!==Fn?Bt!==null?Zt?N&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,vt,0,0,gt.width,gt.height,Bt,gt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,vt,Qt,gt.width,gt.height,0,gt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Zt?N&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,vt,0,0,gt.width,gt.height,Bt,Tt,gt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,vt,Qt,gt.width,gt.height,0,Bt,Tt,gt.data)}}}else{if(Y=S.mipmaps,Zt&&pe){Y.length>0&&pt++;const J=yt(bt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,pt,Qt,J.width,J.height)}for(let J=0;J<6;J++)if(it){Zt?N&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,bt[J].width,bt[J].height,Bt,Tt,bt[J].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Qt,bt[J].width,bt[J].height,0,Bt,Tt,bt[J].data);for(let vt=0;vt<Y.length;vt++){const Xt=Y[vt].image[J].image;Zt?N&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,vt+1,0,0,Xt.width,Xt.height,Bt,Tt,Xt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,vt+1,Qt,Xt.width,Xt.height,0,Bt,Tt,Xt.data)}}else{Zt?N&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Bt,Tt,bt[J]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Qt,Bt,Tt,bt[J]);for(let vt=0;vt<Y.length;vt++){const gt=Y[vt];Zt?N&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,vt+1,0,0,Bt,Tt,gt.image[J]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,vt+1,Qt,Bt,Tt,gt.image[J])}}}g(S)&&m(n.TEXTURE_CUBE_MAP),Z.__version=tt.version,S.onUpdate&&S.onUpdate(S)}w.__version=S.version}function At(w,S,B,q,tt,Z){const Rt=r.convert(B.format,B.colorSpace),ft=r.convert(B.type),St=M(B.internalFormat,Rt,ft,B.colorSpace),jt=i.get(S),it=i.get(B);if(it.__renderTarget=S,!jt.__hasExternalTextures){const bt=Math.max(1,S.width>>Z),Ot=Math.max(1,S.height>>Z);tt===n.TEXTURE_3D||tt===n.TEXTURE_2D_ARRAY?e.texImage3D(tt,Z,St,bt,Ot,S.depth,0,Rt,ft,null):e.texImage2D(tt,Z,St,bt,Ot,0,Rt,ft,null)}e.bindFramebuffer(n.FRAMEBUFFER,w),Et(S)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,q,tt,it.__webglTexture,0,nt(S)):(tt===n.TEXTURE_2D||tt>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&tt<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,q,tt,it.__webglTexture,Z),e.bindFramebuffer(n.FRAMEBUFFER,null)}function lt(w,S,B){if(n.bindRenderbuffer(n.RENDERBUFFER,w),S.depthBuffer){const q=S.depthTexture,tt=q&&q.isDepthTexture?q.type:null,Z=x(S.stencilBuffer,tt),Rt=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ft=nt(S);Et(S)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ft,Z,S.width,S.height):B?n.renderbufferStorageMultisample(n.RENDERBUFFER,ft,Z,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,Z,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Rt,n.RENDERBUFFER,w)}else{const q=S.textures;for(let tt=0;tt<q.length;tt++){const Z=q[tt],Rt=r.convert(Z.format,Z.colorSpace),ft=r.convert(Z.type),St=M(Z.internalFormat,Rt,ft,Z.colorSpace),jt=nt(S);B&&Et(S)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,jt,St,S.width,S.height):Et(S)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,jt,St,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,St,S.width,S.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ut(w,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,w),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const q=i.get(S.depthTexture);q.__renderTarget=S,(!q.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),j(S.depthTexture,0);const tt=q.__webglTexture,Z=nt(S);if(S.depthTexture.format===Qs)Et(S)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,tt,0,Z):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,tt,0);else if(S.depthTexture.format===hr)Et(S)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,tt,0,Z):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,tt,0);else throw new Error("Unknown depthTexture format")}function zt(w){const S=i.get(w),B=w.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==w.depthTexture){const q=w.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),q){const tt=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,q.removeEventListener("dispose",tt)};q.addEventListener("dispose",tt),S.__depthDisposeCallback=tt}S.__boundDepthTexture=q}if(w.depthTexture&&!S.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");Ut(S.__webglFramebuffer,w)}else if(B){S.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(e.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer[q]),S.__webglDepthbuffer[q]===void 0)S.__webglDepthbuffer[q]=n.createRenderbuffer(),lt(S.__webglDepthbuffer[q],w,!1);else{const tt=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Z=S.__webglDepthbuffer[q];n.bindRenderbuffer(n.RENDERBUFFER,Z),n.framebufferRenderbuffer(n.FRAMEBUFFER,tt,n.RENDERBUFFER,Z)}}else if(e.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=n.createRenderbuffer(),lt(S.__webglDepthbuffer,w,!1);else{const q=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,tt=S.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,tt),n.framebufferRenderbuffer(n.FRAMEBUFFER,q,n.RENDERBUFFER,tt)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function Ft(w,S,B){const q=i.get(w);S!==void 0&&At(q.__webglFramebuffer,w,w.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),B!==void 0&&zt(w)}function te(w){const S=w.texture,B=i.get(w),q=i.get(S);w.addEventListener("dispose",R);const tt=w.textures,Z=w.isWebGLCubeRenderTarget===!0,Rt=tt.length>1;if(Rt||(q.__webglTexture===void 0&&(q.__webglTexture=n.createTexture()),q.__version=S.version,o.memory.textures++),Z){B.__webglFramebuffer=[];for(let ft=0;ft<6;ft++)if(S.mipmaps&&S.mipmaps.length>0){B.__webglFramebuffer[ft]=[];for(let St=0;St<S.mipmaps.length;St++)B.__webglFramebuffer[ft][St]=n.createFramebuffer()}else B.__webglFramebuffer[ft]=n.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){B.__webglFramebuffer=[];for(let ft=0;ft<S.mipmaps.length;ft++)B.__webglFramebuffer[ft]=n.createFramebuffer()}else B.__webglFramebuffer=n.createFramebuffer();if(Rt)for(let ft=0,St=tt.length;ft<St;ft++){const jt=i.get(tt[ft]);jt.__webglTexture===void 0&&(jt.__webglTexture=n.createTexture(),o.memory.textures++)}if(w.samples>0&&Et(w)===!1){B.__webglMultisampledFramebuffer=n.createFramebuffer(),B.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let ft=0;ft<tt.length;ft++){const St=tt[ft];B.__webglColorRenderbuffer[ft]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,B.__webglColorRenderbuffer[ft]);const jt=r.convert(St.format,St.colorSpace),it=r.convert(St.type),bt=M(St.internalFormat,jt,it,St.colorSpace,w.isXRRenderTarget===!0),Ot=nt(w);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ot,bt,w.width,w.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ft,n.RENDERBUFFER,B.__webglColorRenderbuffer[ft])}n.bindRenderbuffer(n.RENDERBUFFER,null),w.depthBuffer&&(B.__webglDepthRenderbuffer=n.createRenderbuffer(),lt(B.__webglDepthRenderbuffer,w,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Z){e.bindTexture(n.TEXTURE_CUBE_MAP,q.__webglTexture),Gt(n.TEXTURE_CUBE_MAP,S);for(let ft=0;ft<6;ft++)if(S.mipmaps&&S.mipmaps.length>0)for(let St=0;St<S.mipmaps.length;St++)At(B.__webglFramebuffer[ft][St],w,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ft,St);else At(B.__webglFramebuffer[ft],w,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0);g(S)&&m(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Rt){for(let ft=0,St=tt.length;ft<St;ft++){const jt=tt[ft],it=i.get(jt);e.bindTexture(n.TEXTURE_2D,it.__webglTexture),Gt(n.TEXTURE_2D,jt),At(B.__webglFramebuffer,w,jt,n.COLOR_ATTACHMENT0+ft,n.TEXTURE_2D,0),g(jt)&&m(n.TEXTURE_2D)}e.unbindTexture()}else{let ft=n.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(ft=w.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(ft,q.__webglTexture),Gt(ft,S),S.mipmaps&&S.mipmaps.length>0)for(let St=0;St<S.mipmaps.length;St++)At(B.__webglFramebuffer[St],w,S,n.COLOR_ATTACHMENT0,ft,St);else At(B.__webglFramebuffer,w,S,n.COLOR_ATTACHMENT0,ft,0);g(S)&&m(ft),e.unbindTexture()}w.depthBuffer&&zt(w)}function Q(w){const S=w.textures;for(let B=0,q=S.length;B<q;B++){const tt=S[B];if(g(tt)){const Z=y(w),Rt=i.get(tt).__webglTexture;e.bindTexture(Z,Rt),m(Z),e.unbindTexture()}}}const rt=[],P=[];function It(w){if(w.samples>0){if(Et(w)===!1){const S=w.textures,B=w.width,q=w.height;let tt=n.COLOR_BUFFER_BIT;const Z=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Rt=i.get(w),ft=S.length>1;if(ft)for(let St=0;St<S.length;St++)e.bindFramebuffer(n.FRAMEBUFFER,Rt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+St,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,Rt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+St,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,Rt.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Rt.__webglFramebuffer);for(let St=0;St<S.length;St++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(tt|=n.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(tt|=n.STENCIL_BUFFER_BIT)),ft){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Rt.__webglColorRenderbuffer[St]);const jt=i.get(S[St]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,jt,0)}n.blitFramebuffer(0,0,B,q,0,0,B,q,tt,n.NEAREST),l===!0&&(rt.length=0,P.length=0,rt.push(n.COLOR_ATTACHMENT0+St),w.depthBuffer&&w.resolveDepthBuffer===!1&&(rt.push(Z),P.push(Z),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,P)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,rt))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ft)for(let St=0;St<S.length;St++){e.bindFramebuffer(n.FRAMEBUFFER,Rt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+St,n.RENDERBUFFER,Rt.__webglColorRenderbuffer[St]);const jt=i.get(S[St]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,Rt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+St,n.TEXTURE_2D,jt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Rt.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&l){const S=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[S])}}}function nt(w){return Math.min(s.maxSamples,w.samples)}function Et(w){const S=i.get(w);return w.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function ct(w){const S=o.render.frame;h.get(w)!==S&&(h.set(w,S),w.update())}function Nt(w,S){const B=w.colorSpace,q=w.format,tt=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||B!==mr&&B!==Oi&&(ne.getTransfer(B)===ue?(q!==Fn||tt!==Si)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),S}function yt(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=z,this.resetTextureUnits=V,this.setTexture2D=j,this.setTexture2DArray=W,this.setTexture3D=st,this.setTextureCube=X,this.rebindTextures=Ft,this.setupRenderTarget=te,this.updateRenderTargetMipmap=Q,this.updateMultisampleRenderTarget=It,this.setupDepthRenderbuffer=zt,this.setupFrameBufferTexture=At,this.useMultisampledRTT=Et}function Uv(n,t){function e(i,s=Oi){let r;const o=ne.getTransfer(s);if(i===Si)return n.UNSIGNED_BYTE;if(i===vc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===xc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===sd)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===nd)return n.BYTE;if(i===id)return n.SHORT;if(i===Vr)return n.UNSIGNED_SHORT;if(i===_c)return n.INT;if(i===ps)return n.UNSIGNED_INT;if(i===Qn)return n.FLOAT;if(i===Jr)return n.HALF_FLOAT;if(i===rd)return n.ALPHA;if(i===od)return n.RGB;if(i===Fn)return n.RGBA;if(i===ad)return n.LUMINANCE;if(i===ld)return n.LUMINANCE_ALPHA;if(i===Qs)return n.DEPTH_COMPONENT;if(i===hr)return n.DEPTH_STENCIL;if(i===Mc)return n.RED;if(i===yc)return n.RED_INTEGER;if(i===cd)return n.RG;if(i===Sc)return n.RG_INTEGER;if(i===Ec)return n.RGBA_INTEGER;if(i===qo||i===Zo||i===$o||i===Ko)if(o===ue)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===qo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Zo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===$o)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ko)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===qo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Zo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===$o)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ko)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Cl||i===Pl||i===Ll||i===Il)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Cl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Pl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Ll)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Il)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Dl||i===Ul||i===Nl)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Dl||i===Ul)return o===ue?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Nl)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Ol||i===Fl||i===Bl||i===zl||i===kl||i===Hl||i===Vl||i===Gl||i===Wl||i===Xl||i===Yl||i===ql||i===Zl||i===$l)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Ol)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Fl)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Bl)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===zl)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===kl)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Hl)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Vl)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Gl)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Wl)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Xl)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Yl)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ql)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Zl)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===$l)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===jo||i===Kl||i===jl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===jo)return o===ue?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Kl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===jl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===hd||i===Jl||i===Ql||i===tc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===jo)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Jl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Ql)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===tc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===cr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}class Nv extends mn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class xt extends ke{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Ov={type:"move"};class Ja{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new xt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new xt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new xt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const _ of t.hand.values()){const g=e.getJointPose(_,i),m=this._getHandJoint(c,_);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,p=.005;c.inputState.pinching&&d>f+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Ov)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new xt;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const Fv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Bv=`
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

}`;class zv{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){const s=new Ze,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new ni({vertexShader:Fv,fragmentShader:Bv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new fe(new wi(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class kv extends vs{constructor(t,e){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,p=null;const _=new zv,g=e.getContextAttributes();let m=null,y=null;const M=[],x=[],L=new et;let A=null;const R=new mn;R.viewport=new Te;const I=new mn;I.viewport=new Te;const T=[R,I],E=new Nv;let D=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let ot=M[K];return ot===void 0&&(ot=new Ja,M[K]=ot),ot.getTargetRaySpace()},this.getControllerGrip=function(K){let ot=M[K];return ot===void 0&&(ot=new Ja,M[K]=ot),ot.getGripSpace()},this.getHand=function(K){let ot=M[K];return ot===void 0&&(ot=new Ja,M[K]=ot),ot.getHandSpace()};function z(K){const ot=x.indexOf(K.inputSource);if(ot===-1)return;const At=M[ot];At!==void 0&&(At.update(K.inputSource,K.frame,c||o),At.dispatchEvent({type:K.type,data:K.inputSource}))}function G(){s.removeEventListener("select",z),s.removeEventListener("selectstart",z),s.removeEventListener("selectend",z),s.removeEventListener("squeeze",z),s.removeEventListener("squeezestart",z),s.removeEventListener("squeezeend",z),s.removeEventListener("end",G),s.removeEventListener("inputsourceschange",j);for(let K=0;K<M.length;K++){const ot=x[K];ot!==null&&(x[K]=null,M[K].disconnect(ot))}D=null,V=null,_.reset(),t.setRenderTarget(m),f=null,d=null,u=null,s=null,y=null,ae.stop(),i.isPresenting=!1,t.setPixelRatio(A),t.setSize(L.width,L.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){a=K,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(K){if(s=K,s!==null){if(m=t.getRenderTarget(),s.addEventListener("select",z),s.addEventListener("selectstart",z),s.addEventListener("selectend",z),s.addEventListener("squeeze",z),s.addEventListener("squeezestart",z),s.addEventListener("squeezeend",z),s.addEventListener("end",G),s.addEventListener("inputsourceschange",j),g.xrCompatible!==!0&&await e.makeXRCompatible(),A=t.getPixelRatio(),t.getSize(L),s.renderState.layers===void 0){const ot={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,ot),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new ms(f.framebufferWidth,f.framebufferHeight,{format:Fn,type:Si,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil})}else{let ot=null,At=null,lt=null;g.depth&&(lt=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ot=g.stencil?hr:Qs,At=g.stencil?cr:ps);const Ut={colorFormat:e.RGBA8,depthFormat:lt,scaleFactor:r};u=new XRWebGLBinding(s,e),d=u.createProjectionLayer(Ut),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),y=new ms(d.textureWidth,d.textureHeight,{format:Fn,type:Si,depthTexture:new Td(d.textureWidth,d.textureHeight,At,void 0,void 0,void 0,void 0,void 0,void 0,ot),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),ae.setContext(s),ae.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function j(K){for(let ot=0;ot<K.removed.length;ot++){const At=K.removed[ot],lt=x.indexOf(At);lt>=0&&(x[lt]=null,M[lt].disconnect(At))}for(let ot=0;ot<K.added.length;ot++){const At=K.added[ot];let lt=x.indexOf(At);if(lt===-1){for(let zt=0;zt<M.length;zt++)if(zt>=x.length){x.push(At),lt=zt;break}else if(x[zt]===null){x[zt]=At,lt=zt;break}if(lt===-1)break}const Ut=M[lt];Ut&&Ut.connect(At)}}const W=new C,st=new C;function X(K,ot,At){W.setFromMatrixPosition(ot.matrixWorld),st.setFromMatrixPosition(At.matrixWorld);const lt=W.distanceTo(st),Ut=ot.projectionMatrix.elements,zt=At.projectionMatrix.elements,Ft=Ut[14]/(Ut[10]-1),te=Ut[14]/(Ut[10]+1),Q=(Ut[9]+1)/Ut[5],rt=(Ut[9]-1)/Ut[5],P=(Ut[8]-1)/Ut[0],It=(zt[8]+1)/zt[0],nt=Ft*P,Et=Ft*It,ct=lt/(-P+It),Nt=ct*-P;if(ot.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(Nt),K.translateZ(ct),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),Ut[10]===-1)K.projectionMatrix.copy(ot.projectionMatrix),K.projectionMatrixInverse.copy(ot.projectionMatrixInverse);else{const yt=Ft+ct,w=te+ct,S=nt-Nt,B=Et+(lt-Nt),q=Q*te/w*yt,tt=rt*te/w*yt;K.projectionMatrix.makePerspective(S,B,q,tt,yt,w),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function ut(K,ot){ot===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(ot.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(s===null)return;let ot=K.near,At=K.far;_.texture!==null&&(_.depthNear>0&&(ot=_.depthNear),_.depthFar>0&&(At=_.depthFar)),E.near=I.near=R.near=ot,E.far=I.far=R.far=At,(D!==E.near||V!==E.far)&&(s.updateRenderState({depthNear:E.near,depthFar:E.far}),D=E.near,V=E.far),R.layers.mask=K.layers.mask|2,I.layers.mask=K.layers.mask|4,E.layers.mask=R.layers.mask|I.layers.mask;const lt=K.parent,Ut=E.cameras;ut(E,lt);for(let zt=0;zt<Ut.length;zt++)ut(Ut[zt],lt);Ut.length===2?X(E,R,I):E.projectionMatrix.copy(R.projectionMatrix),Mt(K,E,lt)};function Mt(K,ot,At){At===null?K.matrix.copy(ot.matrixWorld):(K.matrix.copy(At.matrixWorld),K.matrix.invert(),K.matrix.multiply(ot.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(ot.projectionMatrix),K.projectionMatrixInverse.copy(ot.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Gr*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(K){l=K,d!==null&&(d.fixedFoveation=K),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=K)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(E)};let wt=null;function Gt(K,ot){if(h=ot.getViewerPose(c||o),p=ot,h!==null){const At=h.views;f!==null&&(t.setRenderTargetFramebuffer(y,f.framebuffer),t.setRenderTarget(y));let lt=!1;At.length!==E.cameras.length&&(E.cameras.length=0,lt=!0);for(let zt=0;zt<At.length;zt++){const Ft=At[zt];let te=null;if(f!==null)te=f.getViewport(Ft);else{const rt=u.getViewSubImage(d,Ft);te=rt.viewport,zt===0&&(t.setRenderTargetTextures(y,rt.colorTexture,d.ignoreDepthValues?void 0:rt.depthStencilTexture),t.setRenderTarget(y))}let Q=T[zt];Q===void 0&&(Q=new mn,Q.layers.enable(zt),Q.viewport=new Te,T[zt]=Q),Q.matrix.fromArray(Ft.transform.matrix),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.projectionMatrix.fromArray(Ft.projectionMatrix),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert(),Q.viewport.set(te.x,te.y,te.width,te.height),zt===0&&(E.matrix.copy(Q.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),lt===!0&&E.cameras.push(Q)}const Ut=s.enabledFeatures;if(Ut&&Ut.includes("depth-sensing")){const zt=u.getDepthInformation(At[0]);zt&&zt.isValid&&zt.texture&&_.init(t,zt,s.renderState)}}for(let At=0;At<M.length;At++){const lt=x[At],Ut=M[At];lt!==null&&Ut!==void 0&&Ut.update(lt,ot,c||o)}wt&&wt(K,ot),ot.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ot}),p=null}const ae=new Ed;ae.setAnimationLoop(Gt),this.setAnimationLoop=function(K){wt=K},this.dispose=function(){}}}const is=new ei,Hv=new Kt;function Vv(n,t){function e(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function i(g,m){m.color.getRGB(g.fogColor.value,xd(n)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function s(g,m,y,M,x){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(g,m):m.isMeshToonMaterial?(r(g,m),u(g,m)):m.isMeshPhongMaterial?(r(g,m),h(g,m)):m.isMeshStandardMaterial?(r(g,m),d(g,m),m.isMeshPhysicalMaterial&&f(g,m,x)):m.isMeshMatcapMaterial?(r(g,m),p(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),_(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(o(g,m),m.isLineDashedMaterial&&a(g,m)):m.isPointsMaterial?l(g,m,y,M):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,e(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===Je&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,e(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===Je&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,e(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,e(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);const y=t.get(m),M=y.envMap,x=y.envMapRotation;M&&(g.envMap.value=M,is.copy(x),is.x*=-1,is.y*=-1,is.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(is.y*=-1,is.z*=-1),g.envMapRotation.value.setFromMatrix4(Hv.makeRotationFromEuler(is)),g.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,g.aoMapTransform))}function o(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform))}function a(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,y,M){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*y,g.scale.value=M*.5,m.map&&(g.map.value=m.map,e(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function h(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function u(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function d(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function f(g,m,y){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Je&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=y.texture,g.transmissionSamplerSize.value.set(y.width,y.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function _(g,m){const y=t.get(m).light;g.referencePosition.value.setFromMatrixPosition(y.matrixWorld),g.nearDistance.value=y.shadow.camera.near,g.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Gv(n,t,e,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,M){const x=M.program;i.uniformBlockBinding(y,x)}function c(y,M){let x=s[y.id];x===void 0&&(p(y),x=h(y),s[y.id]=x,y.addEventListener("dispose",g));const L=M.program;i.updateUBOMapping(y,L);const A=t.render.frame;r[y.id]!==A&&(d(y),r[y.id]=A)}function h(y){const M=u();y.__bindingPointIndex=M;const x=n.createBuffer(),L=y.__size,A=y.usage;return n.bindBuffer(n.UNIFORM_BUFFER,x),n.bufferData(n.UNIFORM_BUFFER,L,A),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,M,x),x}function u(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){const M=s[y.id],x=y.uniforms,L=y.__cache;n.bindBuffer(n.UNIFORM_BUFFER,M);for(let A=0,R=x.length;A<R;A++){const I=Array.isArray(x[A])?x[A]:[x[A]];for(let T=0,E=I.length;T<E;T++){const D=I[T];if(f(D,A,T,L)===!0){const V=D.__offset,z=Array.isArray(D.value)?D.value:[D.value];let G=0;for(let j=0;j<z.length;j++){const W=z[j],st=_(W);typeof W=="number"||typeof W=="boolean"?(D.__data[0]=W,n.bufferSubData(n.UNIFORM_BUFFER,V+G,D.__data)):W.isMatrix3?(D.__data[0]=W.elements[0],D.__data[1]=W.elements[1],D.__data[2]=W.elements[2],D.__data[3]=0,D.__data[4]=W.elements[3],D.__data[5]=W.elements[4],D.__data[6]=W.elements[5],D.__data[7]=0,D.__data[8]=W.elements[6],D.__data[9]=W.elements[7],D.__data[10]=W.elements[8],D.__data[11]=0):(W.toArray(D.__data,G),G+=st.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,V,D.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(y,M,x,L){const A=y.value,R=M+"_"+x;if(L[R]===void 0)return typeof A=="number"||typeof A=="boolean"?L[R]=A:L[R]=A.clone(),!0;{const I=L[R];if(typeof A=="number"||typeof A=="boolean"){if(I!==A)return L[R]=A,!0}else if(I.equals(A)===!1)return I.copy(A),!0}return!1}function p(y){const M=y.uniforms;let x=0;const L=16;for(let R=0,I=M.length;R<I;R++){const T=Array.isArray(M[R])?M[R]:[M[R]];for(let E=0,D=T.length;E<D;E++){const V=T[E],z=Array.isArray(V.value)?V.value:[V.value];for(let G=0,j=z.length;G<j;G++){const W=z[G],st=_(W),X=x%L,ut=X%st.boundary,Mt=X+ut;x+=ut,Mt!==0&&L-Mt<st.storage&&(x+=L-Mt),V.__data=new Float32Array(st.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=x,x+=st.storage}}}const A=x%L;return A>0&&(x+=L-A),y.__size=x,y.__cache={},this}function _(y){const M={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(M.boundary=4,M.storage=4):y.isVector2?(M.boundary=8,M.storage=8):y.isVector3||y.isColor?(M.boundary=16,M.storage=12):y.isVector4?(M.boundary=16,M.storage=16):y.isMatrix3?(M.boundary=48,M.storage=48):y.isMatrix4?(M.boundary=64,M.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),M}function g(y){const M=y.target;M.removeEventListener("dispose",g);const x=o.indexOf(M.__bindingPointIndex);o.splice(x,1),n.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function m(){for(const y in s)n.deleteBuffer(s[y]);o=[],s={},r={}}return{bind:l,update:c,dispose:m}}class Wv{constructor(t={}){const{canvas:e=Dp(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=o;const p=new Uint32Array(4),_=new Int32Array(4);let g=null,m=null;const y=[],M=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=rn,this.toneMapping=ki,this.toneMappingExposure=1;const x=this;let L=!1,A=0,R=0,I=null,T=-1,E=null;const D=new Te,V=new Te;let z=null;const G=new Wt(0);let j=0,W=e.width,st=e.height,X=1,ut=null,Mt=null;const wt=new Te(0,0,W,st),Gt=new Te(0,0,W,st);let ae=!1;const K=new Rc;let ot=!1,At=!1;const lt=new Kt,Ut=new Kt,zt=new C,Ft=new Te,te={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Q=!1;function rt(){return I===null?X:1}let P=i;function It(b,O){return e.getContext(b,O)}try{const b={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${mc}`),e.addEventListener("webglcontextlost",J,!1),e.addEventListener("webglcontextrestored",vt,!1),e.addEventListener("webglcontextcreationerror",gt,!1),P===null){const O="webgl2";if(P=It(O,b),P===null)throw It(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let nt,Et,ct,Nt,yt,w,S,B,q,tt,Z,Rt,ft,St,jt,it,bt,Ot,Bt,Tt,Qt,Zt,pe,N;function pt(){nt=new $g(P),nt.init(),Zt=new Uv(P,nt),Et=new Gg(P,nt,t,Zt),ct=new Lv(P,nt),Et.reverseDepthBuffer&&d&&ct.buffers.depth.setReversed(!0),Nt=new Jg(P),yt=new gv,w=new Dv(P,nt,ct,yt,Et,Zt,Nt),S=new Xg(x),B=new Zg(x),q=new rm(P),pe=new Hg(P,q),tt=new Kg(P,q,Nt,pe),Z=new t_(P,tt,q,Nt),Bt=new Qg(P,Et,w),it=new Wg(yt),Rt=new mv(x,S,B,nt,Et,pe,it),ft=new Vv(x,yt),St=new vv,jt=new bv(nt),Ot=new kg(x,S,B,ct,Z,f,l),bt=new Cv(x,Z,Et),N=new Gv(P,Nt,Et,ct),Tt=new Vg(P,nt,Nt),Qt=new jg(P,nt,Nt),Nt.programs=Rt.programs,x.capabilities=Et,x.extensions=nt,x.properties=yt,x.renderLists=St,x.shadowMap=bt,x.state=ct,x.info=Nt}pt();const Y=new kv(x,P);this.xr=Y,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const b=nt.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=nt.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(b){b!==void 0&&(X=b,this.setSize(W,st,!1))},this.getSize=function(b){return b.set(W,st)},this.setSize=function(b,O,k=!0){if(Y.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=b,st=O,e.width=Math.floor(b*X),e.height=Math.floor(O*X),k===!0&&(e.style.width=b+"px",e.style.height=O+"px"),this.setViewport(0,0,b,O)},this.getDrawingBufferSize=function(b){return b.set(W*X,st*X).floor()},this.setDrawingBufferSize=function(b,O,k){W=b,st=O,X=k,e.width=Math.floor(b*k),e.height=Math.floor(O*k),this.setViewport(0,0,b,O)},this.getCurrentViewport=function(b){return b.copy(D)},this.getViewport=function(b){return b.copy(wt)},this.setViewport=function(b,O,k,H){b.isVector4?wt.set(b.x,b.y,b.z,b.w):wt.set(b,O,k,H),ct.viewport(D.copy(wt).multiplyScalar(X).round())},this.getScissor=function(b){return b.copy(Gt)},this.setScissor=function(b,O,k,H){b.isVector4?Gt.set(b.x,b.y,b.z,b.w):Gt.set(b,O,k,H),ct.scissor(V.copy(Gt).multiplyScalar(X).round())},this.getScissorTest=function(){return ae},this.setScissorTest=function(b){ct.setScissorTest(ae=b)},this.setOpaqueSort=function(b){ut=b},this.setTransparentSort=function(b){Mt=b},this.getClearColor=function(b){return b.copy(Ot.getClearColor())},this.setClearColor=function(){Ot.setClearColor.apply(Ot,arguments)},this.getClearAlpha=function(){return Ot.getClearAlpha()},this.setClearAlpha=function(){Ot.setClearAlpha.apply(Ot,arguments)},this.clear=function(b=!0,O=!0,k=!0){let H=0;if(b){let F=!1;if(I!==null){const at=I.texture.format;F=at===Ec||at===Sc||at===yc}if(F){const at=I.texture.type,_t=at===Si||at===ps||at===Vr||at===cr||at===vc||at===xc,Ct=Ot.getClearColor(),Pt=Ot.getClearAlpha(),kt=Ct.r,Yt=Ct.g,Lt=Ct.b;_t?(p[0]=kt,p[1]=Yt,p[2]=Lt,p[3]=Pt,P.clearBufferuiv(P.COLOR,0,p)):(_[0]=kt,_[1]=Yt,_[2]=Lt,_[3]=Pt,P.clearBufferiv(P.COLOR,0,_))}else H|=P.COLOR_BUFFER_BIT}O&&(H|=P.DEPTH_BUFFER_BIT),k&&(H|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",J,!1),e.removeEventListener("webglcontextrestored",vt,!1),e.removeEventListener("webglcontextcreationerror",gt,!1),St.dispose(),jt.dispose(),yt.dispose(),S.dispose(),B.dispose(),Z.dispose(),pe.dispose(),N.dispose(),Rt.dispose(),Y.dispose(),Y.removeEventListener("sessionstart",Wc),Y.removeEventListener("sessionend",Xc),ji.stop()};function J(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function vt(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;const b=Nt.autoReset,O=bt.enabled,k=bt.autoUpdate,H=bt.needsUpdate,F=bt.type;pt(),Nt.autoReset=b,bt.enabled=O,bt.autoUpdate=k,bt.needsUpdate=H,bt.type=F}function gt(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Xt(b){const O=b.target;O.removeEventListener("dispose",Xt),be(O)}function be(b){Ge(b),yt.remove(b)}function Ge(b){const O=yt.get(b).programs;O!==void 0&&(O.forEach(function(k){Rt.releaseProgram(k)}),b.isShaderMaterial&&Rt.releaseShaderCache(b))}this.renderBufferDirect=function(b,O,k,H,F,at){O===null&&(O=te);const _t=F.isMesh&&F.matrixWorld.determinant()<0,Ct=Cf(b,O,k,H,F);ct.setMaterial(H,_t);let Pt=k.index,kt=1;if(H.wireframe===!0){if(Pt=tt.getWireframeAttribute(k),Pt===void 0)return;kt=2}const Yt=k.drawRange,Lt=k.attributes.position;let ie=Yt.start*kt,me=(Yt.start+Yt.count)*kt;at!==null&&(ie=Math.max(ie,at.start*kt),me=Math.min(me,(at.start+at.count)*kt)),Pt!==null?(ie=Math.max(ie,0),me=Math.min(me,Pt.count)):Lt!=null&&(ie=Math.max(ie,0),me=Math.min(me,Lt.count));const _e=me-ie;if(_e<0||_e===1/0)return;pe.setup(F,H,Ct,k,Pt);let tn,le=Tt;if(Pt!==null&&(tn=q.get(Pt),le=Qt,le.setIndex(tn)),F.isMesh)H.wireframe===!0?(ct.setLineWidth(H.wireframeLinewidth*rt()),le.setMode(P.LINES)):le.setMode(P.TRIANGLES);else if(F.isLine){let Dt=H.linewidth;Dt===void 0&&(Dt=1),ct.setLineWidth(Dt*rt()),F.isLineSegments?le.setMode(P.LINES):F.isLineLoop?le.setMode(P.LINE_LOOP):le.setMode(P.LINE_STRIP)}else F.isPoints?le.setMode(P.POINTS):F.isSprite&&le.setMode(P.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)le.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(nt.get("WEBGL_multi_draw"))le.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const Dt=F._multiDrawStarts,li=F._multiDrawCounts,ce=F._multiDrawCount,Rn=Pt?q.get(Pt).bytesPerElement:1,Ss=yt.get(H).currentProgram.getUniforms();for(let dn=0;dn<ce;dn++)Ss.setValue(P,"_gl_DrawID",dn),le.render(Dt[dn]/Rn,li[dn])}else if(F.isInstancedMesh)le.renderInstances(ie,_e,F.count);else if(k.isInstancedBufferGeometry){const Dt=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,li=Math.min(k.instanceCount,Dt);le.renderInstances(ie,_e,li)}else le.render(ie,_e)};function he(b,O,k){b.transparent===!0&&b.side===ln&&b.forceSinglePass===!1?(b.side=Je,b.needsUpdate=!0,lo(b,O,k),b.side=Zi,b.needsUpdate=!0,lo(b,O,k),b.side=ln):lo(b,O,k)}this.compile=function(b,O,k=null){k===null&&(k=b),m=jt.get(k),m.init(O),M.push(m),k.traverseVisible(function(F){F.isLight&&F.layers.test(O.layers)&&(m.pushLight(F),F.castShadow&&m.pushShadow(F))}),b!==k&&b.traverseVisible(function(F){F.isLight&&F.layers.test(O.layers)&&(m.pushLight(F),F.castShadow&&m.pushShadow(F))}),m.setupLights();const H=new Set;return b.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;const at=F.material;if(at)if(Array.isArray(at))for(let _t=0;_t<at.length;_t++){const Ct=at[_t];he(Ct,k,F),H.add(Ct)}else he(at,k,F),H.add(at)}),M.pop(),m=null,H},this.compileAsync=function(b,O,k=null){const H=this.compile(b,O,k);return new Promise(F=>{function at(){if(H.forEach(function(_t){yt.get(_t).currentProgram.isReady()&&H.delete(_t)}),H.size===0){F(b);return}setTimeout(at,10)}nt.get("KHR_parallel_shader_compile")!==null?at():setTimeout(at,10)})};let An=null;function ai(b){An&&An(b)}function Wc(){ji.stop()}function Xc(){ji.start()}const ji=new Ed;ji.setAnimationLoop(ai),typeof self<"u"&&ji.setContext(self),this.setAnimationLoop=function(b){An=b,Y.setAnimationLoop(b),b===null?ji.stop():ji.start()},Y.addEventListener("sessionstart",Wc),Y.addEventListener("sessionend",Xc),this.render=function(b,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),Y.enabled===!0&&Y.isPresenting===!0&&(Y.cameraAutoUpdate===!0&&Y.updateCamera(O),O=Y.getCamera()),b.isScene===!0&&b.onBeforeRender(x,b,O,I),m=jt.get(b,M.length),m.init(O),M.push(m),Ut.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),K.setFromProjectionMatrix(Ut),At=this.localClippingEnabled,ot=it.init(this.clippingPlanes,At),g=St.get(b,y.length),g.init(),y.push(g),Y.enabled===!0&&Y.isPresenting===!0){const at=x.xr.getDepthSensingMesh();at!==null&&ba(at,O,-1/0,x.sortObjects)}ba(b,O,0,x.sortObjects),g.finish(),x.sortObjects===!0&&g.sort(ut,Mt),Q=Y.enabled===!1||Y.isPresenting===!1||Y.hasDepthSensing()===!1,Q&&Ot.addToRenderList(g,b),this.info.render.frame++,ot===!0&&it.beginShadows();const k=m.state.shadowsArray;bt.render(k,b,O),ot===!0&&it.endShadows(),this.info.autoReset===!0&&this.info.reset();const H=g.opaque,F=g.transmissive;if(m.setupLights(),O.isArrayCamera){const at=O.cameras;if(F.length>0)for(let _t=0,Ct=at.length;_t<Ct;_t++){const Pt=at[_t];qc(H,F,b,Pt)}Q&&Ot.render(b);for(let _t=0,Ct=at.length;_t<Ct;_t++){const Pt=at[_t];Yc(g,b,Pt,Pt.viewport)}}else F.length>0&&qc(H,F,b,O),Q&&Ot.render(b),Yc(g,b,O);I!==null&&(w.updateMultisampleRenderTarget(I),w.updateRenderTargetMipmap(I)),b.isScene===!0&&b.onAfterRender(x,b,O),pe.resetDefaultState(),T=-1,E=null,M.pop(),M.length>0?(m=M[M.length-1],ot===!0&&it.setGlobalState(x.clippingPlanes,m.state.camera)):m=null,y.pop(),y.length>0?g=y[y.length-1]:g=null};function ba(b,O,k,H){if(b.visible===!1)return;if(b.layers.test(O.layers)){if(b.isGroup)k=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(O);else if(b.isLight)m.pushLight(b),b.castShadow&&m.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||K.intersectsSprite(b)){H&&Ft.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Ut);const _t=Z.update(b),Ct=b.material;Ct.visible&&g.push(b,_t,Ct,k,Ft.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||K.intersectsObject(b))){const _t=Z.update(b),Ct=b.material;if(H&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Ft.copy(b.boundingSphere.center)):(_t.boundingSphere===null&&_t.computeBoundingSphere(),Ft.copy(_t.boundingSphere.center)),Ft.applyMatrix4(b.matrixWorld).applyMatrix4(Ut)),Array.isArray(Ct)){const Pt=_t.groups;for(let kt=0,Yt=Pt.length;kt<Yt;kt++){const Lt=Pt[kt],ie=Ct[Lt.materialIndex];ie&&ie.visible&&g.push(b,_t,ie,k,Ft.z,Lt)}}else Ct.visible&&g.push(b,_t,Ct,k,Ft.z,null)}}const at=b.children;for(let _t=0,Ct=at.length;_t<Ct;_t++)ba(at[_t],O,k,H)}function Yc(b,O,k,H){const F=b.opaque,at=b.transmissive,_t=b.transparent;m.setupLightsView(k),ot===!0&&it.setGlobalState(x.clippingPlanes,k),H&&ct.viewport(D.copy(H)),F.length>0&&ao(F,O,k),at.length>0&&ao(at,O,k),_t.length>0&&ao(_t,O,k),ct.buffers.depth.setTest(!0),ct.buffers.depth.setMask(!0),ct.buffers.color.setMask(!0),ct.setPolygonOffset(!1)}function qc(b,O,k,H){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[H.id]===void 0&&(m.state.transmissionRenderTarget[H.id]=new ms(1,1,{generateMipmaps:!0,type:nt.has("EXT_color_buffer_half_float")||nt.has("EXT_color_buffer_float")?Jr:Si,minFilter:ds,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ne.workingColorSpace}));const at=m.state.transmissionRenderTarget[H.id],_t=H.viewport||D;at.setSize(_t.z,_t.w);const Ct=x.getRenderTarget();x.setRenderTarget(at),x.getClearColor(G),j=x.getClearAlpha(),j<1&&x.setClearColor(16777215,.5),x.clear(),Q&&Ot.render(k);const Pt=x.toneMapping;x.toneMapping=ki;const kt=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),m.setupLightsView(H),ot===!0&&it.setGlobalState(x.clippingPlanes,H),ao(b,k,H),w.updateMultisampleRenderTarget(at),w.updateRenderTargetMipmap(at),nt.has("WEBGL_multisampled_render_to_texture")===!1){let Yt=!1;for(let Lt=0,ie=O.length;Lt<ie;Lt++){const me=O[Lt],_e=me.object,tn=me.geometry,le=me.material,Dt=me.group;if(le.side===ln&&_e.layers.test(H.layers)){const li=le.side;le.side=Je,le.needsUpdate=!0,Zc(_e,k,H,tn,le,Dt),le.side=li,le.needsUpdate=!0,Yt=!0}}Yt===!0&&(w.updateMultisampleRenderTarget(at),w.updateRenderTargetMipmap(at))}x.setRenderTarget(Ct),x.setClearColor(G,j),kt!==void 0&&(H.viewport=kt),x.toneMapping=Pt}function ao(b,O,k){const H=O.isScene===!0?O.overrideMaterial:null;for(let F=0,at=b.length;F<at;F++){const _t=b[F],Ct=_t.object,Pt=_t.geometry,kt=H===null?_t.material:H,Yt=_t.group;Ct.layers.test(k.layers)&&Zc(Ct,O,k,Pt,kt,Yt)}}function Zc(b,O,k,H,F,at){b.onBeforeRender(x,O,k,H,F,at),b.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),F.onBeforeRender(x,O,k,H,b,at),F.transparent===!0&&F.side===ln&&F.forceSinglePass===!1?(F.side=Je,F.needsUpdate=!0,x.renderBufferDirect(k,O,H,F,b,at),F.side=Zi,F.needsUpdate=!0,x.renderBufferDirect(k,O,H,F,b,at),F.side=ln):x.renderBufferDirect(k,O,H,F,b,at),b.onAfterRender(x,O,k,H,F,at)}function lo(b,O,k){O.isScene!==!0&&(O=te);const H=yt.get(b),F=m.state.lights,at=m.state.shadowsArray,_t=F.state.version,Ct=Rt.getParameters(b,F.state,at,O,k),Pt=Rt.getProgramCacheKey(Ct);let kt=H.programs;H.environment=b.isMeshStandardMaterial?O.environment:null,H.fog=O.fog,H.envMap=(b.isMeshStandardMaterial?B:S).get(b.envMap||H.environment),H.envMapRotation=H.environment!==null&&b.envMap===null?O.environmentRotation:b.envMapRotation,kt===void 0&&(b.addEventListener("dispose",Xt),kt=new Map,H.programs=kt);let Yt=kt.get(Pt);if(Yt!==void 0){if(H.currentProgram===Yt&&H.lightsStateVersion===_t)return Kc(b,Ct),Yt}else Ct.uniforms=Rt.getUniforms(b),b.onBeforeCompile(Ct,x),Yt=Rt.acquireProgram(Ct,Pt),kt.set(Pt,Yt),H.uniforms=Ct.uniforms;const Lt=H.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Lt.clippingPlanes=it.uniform),Kc(b,Ct),H.needsLights=Lf(b),H.lightsStateVersion=_t,H.needsLights&&(Lt.ambientLightColor.value=F.state.ambient,Lt.lightProbe.value=F.state.probe,Lt.directionalLights.value=F.state.directional,Lt.directionalLightShadows.value=F.state.directionalShadow,Lt.spotLights.value=F.state.spot,Lt.spotLightShadows.value=F.state.spotShadow,Lt.rectAreaLights.value=F.state.rectArea,Lt.ltc_1.value=F.state.rectAreaLTC1,Lt.ltc_2.value=F.state.rectAreaLTC2,Lt.pointLights.value=F.state.point,Lt.pointLightShadows.value=F.state.pointShadow,Lt.hemisphereLights.value=F.state.hemi,Lt.directionalShadowMap.value=F.state.directionalShadowMap,Lt.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Lt.spotShadowMap.value=F.state.spotShadowMap,Lt.spotLightMatrix.value=F.state.spotLightMatrix,Lt.spotLightMap.value=F.state.spotLightMap,Lt.pointShadowMap.value=F.state.pointShadowMap,Lt.pointShadowMatrix.value=F.state.pointShadowMatrix),H.currentProgram=Yt,H.uniformsList=null,Yt}function $c(b){if(b.uniformsList===null){const O=b.currentProgram.getUniforms();b.uniformsList=Jo.seqWithValue(O.seq,b.uniforms)}return b.uniformsList}function Kc(b,O){const k=yt.get(b);k.outputColorSpace=O.outputColorSpace,k.batching=O.batching,k.batchingColor=O.batchingColor,k.instancing=O.instancing,k.instancingColor=O.instancingColor,k.instancingMorph=O.instancingMorph,k.skinning=O.skinning,k.morphTargets=O.morphTargets,k.morphNormals=O.morphNormals,k.morphColors=O.morphColors,k.morphTargetsCount=O.morphTargetsCount,k.numClippingPlanes=O.numClippingPlanes,k.numIntersection=O.numClipIntersection,k.vertexAlphas=O.vertexAlphas,k.vertexTangents=O.vertexTangents,k.toneMapping=O.toneMapping}function Cf(b,O,k,H,F){O.isScene!==!0&&(O=te),w.resetTextureUnits();const at=O.fog,_t=H.isMeshStandardMaterial?O.environment:null,Ct=I===null?x.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:mr,Pt=(H.isMeshStandardMaterial?B:S).get(H.envMap||_t),kt=H.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,Yt=!!k.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Lt=!!k.morphAttributes.position,ie=!!k.morphAttributes.normal,me=!!k.morphAttributes.color;let _e=ki;H.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(_e=x.toneMapping);const tn=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,le=tn!==void 0?tn.length:0,Dt=yt.get(H),li=m.state.lights;if(ot===!0&&(At===!0||b!==E)){const vn=b===E&&H.id===T;it.setState(H,b,vn)}let ce=!1;H.version===Dt.__version?(Dt.needsLights&&Dt.lightsStateVersion!==li.state.version||Dt.outputColorSpace!==Ct||F.isBatchedMesh&&Dt.batching===!1||!F.isBatchedMesh&&Dt.batching===!0||F.isBatchedMesh&&Dt.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&Dt.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&Dt.instancing===!1||!F.isInstancedMesh&&Dt.instancing===!0||F.isSkinnedMesh&&Dt.skinning===!1||!F.isSkinnedMesh&&Dt.skinning===!0||F.isInstancedMesh&&Dt.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Dt.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&Dt.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&Dt.instancingMorph===!1&&F.morphTexture!==null||Dt.envMap!==Pt||H.fog===!0&&Dt.fog!==at||Dt.numClippingPlanes!==void 0&&(Dt.numClippingPlanes!==it.numPlanes||Dt.numIntersection!==it.numIntersection)||Dt.vertexAlphas!==kt||Dt.vertexTangents!==Yt||Dt.morphTargets!==Lt||Dt.morphNormals!==ie||Dt.morphColors!==me||Dt.toneMapping!==_e||Dt.morphTargetsCount!==le)&&(ce=!0):(ce=!0,Dt.__version=H.version);let Rn=Dt.currentProgram;ce===!0&&(Rn=lo(H,O,F));let Ss=!1,dn=!1,Mr=!1;const ve=Rn.getUniforms(),Yn=Dt.uniforms;if(ct.useProgram(Rn.program)&&(Ss=!0,dn=!0,Mr=!0),H.id!==T&&(T=H.id,dn=!0),Ss||E!==b){ct.buffers.depth.getReversed()?(lt.copy(b.projectionMatrix),Np(lt),Op(lt),ve.setValue(P,"projectionMatrix",lt)):ve.setValue(P,"projectionMatrix",b.projectionMatrix),ve.setValue(P,"viewMatrix",b.matrixWorldInverse);const Ai=ve.map.cameraPosition;Ai!==void 0&&Ai.setValue(P,zt.setFromMatrixPosition(b.matrixWorld)),Et.logarithmicDepthBuffer&&ve.setValue(P,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&ve.setValue(P,"isOrthographic",b.isOrthographicCamera===!0),E!==b&&(E=b,dn=!0,Mr=!0)}if(F.isSkinnedMesh){ve.setOptional(P,F,"bindMatrix"),ve.setOptional(P,F,"bindMatrixInverse");const vn=F.skeleton;vn&&(vn.boneTexture===null&&vn.computeBoneTexture(),ve.setValue(P,"boneTexture",vn.boneTexture,w))}F.isBatchedMesh&&(ve.setOptional(P,F,"batchingTexture"),ve.setValue(P,"batchingTexture",F._matricesTexture,w),ve.setOptional(P,F,"batchingIdTexture"),ve.setValue(P,"batchingIdTexture",F._indirectTexture,w),ve.setOptional(P,F,"batchingColorTexture"),F._colorsTexture!==null&&ve.setValue(P,"batchingColorTexture",F._colorsTexture,w));const yr=k.morphAttributes;if((yr.position!==void 0||yr.normal!==void 0||yr.color!==void 0)&&Bt.update(F,k,Rn),(dn||Dt.receiveShadow!==F.receiveShadow)&&(Dt.receiveShadow=F.receiveShadow,ve.setValue(P,"receiveShadow",F.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(Yn.envMap.value=Pt,Yn.flipEnvMap.value=Pt.isCubeTexture&&Pt.isRenderTargetTexture===!1?-1:1),H.isMeshStandardMaterial&&H.envMap===null&&O.environment!==null&&(Yn.envMapIntensity.value=O.environmentIntensity),dn&&(ve.setValue(P,"toneMappingExposure",x.toneMappingExposure),Dt.needsLights&&Pf(Yn,Mr),at&&H.fog===!0&&ft.refreshFogUniforms(Yn,at),ft.refreshMaterialUniforms(Yn,H,X,st,m.state.transmissionRenderTarget[b.id]),Jo.upload(P,$c(Dt),Yn,w)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(Jo.upload(P,$c(Dt),Yn,w),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&ve.setValue(P,"center",F.center),ve.setValue(P,"modelViewMatrix",F.modelViewMatrix),ve.setValue(P,"normalMatrix",F.normalMatrix),ve.setValue(P,"modelMatrix",F.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const vn=H.uniformsGroups;for(let Ai=0,Ri=vn.length;Ai<Ri;Ai++){const jc=vn[Ai];N.update(jc,Rn),N.bind(jc,Rn)}}return Rn}function Pf(b,O){b.ambientLightColor.needsUpdate=O,b.lightProbe.needsUpdate=O,b.directionalLights.needsUpdate=O,b.directionalLightShadows.needsUpdate=O,b.pointLights.needsUpdate=O,b.pointLightShadows.needsUpdate=O,b.spotLights.needsUpdate=O,b.spotLightShadows.needsUpdate=O,b.rectAreaLights.needsUpdate=O,b.hemisphereLights.needsUpdate=O}function Lf(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(b,O,k){yt.get(b.texture).__webglTexture=O,yt.get(b.depthTexture).__webglTexture=k;const H=yt.get(b);H.__hasExternalTextures=!0,H.__autoAllocateDepthBuffer=k===void 0,H.__autoAllocateDepthBuffer||nt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),H.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,O){const k=yt.get(b);k.__webglFramebuffer=O,k.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(b,O=0,k=0){I=b,A=O,R=k;let H=!0,F=null,at=!1,_t=!1;if(b){const Pt=yt.get(b);if(Pt.__useDefaultFramebuffer!==void 0)ct.bindFramebuffer(P.FRAMEBUFFER,null),H=!1;else if(Pt.__webglFramebuffer===void 0)w.setupRenderTarget(b);else if(Pt.__hasExternalTextures)w.rebindTextures(b,yt.get(b.texture).__webglTexture,yt.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const Lt=b.depthTexture;if(Pt.__boundDepthTexture!==Lt){if(Lt!==null&&yt.has(Lt)&&(b.width!==Lt.image.width||b.height!==Lt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");w.setupDepthRenderbuffer(b)}}const kt=b.texture;(kt.isData3DTexture||kt.isDataArrayTexture||kt.isCompressedArrayTexture)&&(_t=!0);const Yt=yt.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Yt[O])?F=Yt[O][k]:F=Yt[O],at=!0):b.samples>0&&w.useMultisampledRTT(b)===!1?F=yt.get(b).__webglMultisampledFramebuffer:Array.isArray(Yt)?F=Yt[k]:F=Yt,D.copy(b.viewport),V.copy(b.scissor),z=b.scissorTest}else D.copy(wt).multiplyScalar(X).floor(),V.copy(Gt).multiplyScalar(X).floor(),z=ae;if(ct.bindFramebuffer(P.FRAMEBUFFER,F)&&H&&ct.drawBuffers(b,F),ct.viewport(D),ct.scissor(V),ct.setScissorTest(z),at){const Pt=yt.get(b.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+O,Pt.__webglTexture,k)}else if(_t){const Pt=yt.get(b.texture),kt=O||0;P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,Pt.__webglTexture,k||0,kt)}T=-1},this.readRenderTargetPixels=function(b,O,k,H,F,at,_t){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ct=yt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&_t!==void 0&&(Ct=Ct[_t]),Ct){ct.bindFramebuffer(P.FRAMEBUFFER,Ct);try{const Pt=b.texture,kt=Pt.format,Yt=Pt.type;if(!Et.textureFormatReadable(kt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Et.textureTypeReadable(Yt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=b.width-H&&k>=0&&k<=b.height-F&&P.readPixels(O,k,H,F,Zt.convert(kt),Zt.convert(Yt),at)}finally{const Pt=I!==null?yt.get(I).__webglFramebuffer:null;ct.bindFramebuffer(P.FRAMEBUFFER,Pt)}}},this.readRenderTargetPixelsAsync=async function(b,O,k,H,F,at,_t){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ct=yt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&_t!==void 0&&(Ct=Ct[_t]),Ct){const Pt=b.texture,kt=Pt.format,Yt=Pt.type;if(!Et.textureFormatReadable(kt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Et.textureTypeReadable(Yt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(O>=0&&O<=b.width-H&&k>=0&&k<=b.height-F){ct.bindFramebuffer(P.FRAMEBUFFER,Ct);const Lt=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,Lt),P.bufferData(P.PIXEL_PACK_BUFFER,at.byteLength,P.STREAM_READ),P.readPixels(O,k,H,F,Zt.convert(kt),Zt.convert(Yt),0);const ie=I!==null?yt.get(I).__webglFramebuffer:null;ct.bindFramebuffer(P.FRAMEBUFFER,ie);const me=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await Up(P,me,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,Lt),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,at),P.deleteBuffer(Lt),P.deleteSync(me),at}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(b,O=null,k=0){b.isTexture!==!0&&(Cr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),O=arguments[0]||null,b=arguments[1]);const H=Math.pow(2,-k),F=Math.floor(b.image.width*H),at=Math.floor(b.image.height*H),_t=O!==null?O.x:0,Ct=O!==null?O.y:0;w.setTexture2D(b,0),P.copyTexSubImage2D(P.TEXTURE_2D,k,0,0,_t,Ct,F,at),ct.unbindTexture()},this.copyTextureToTexture=function(b,O,k=null,H=null,F=0){b.isTexture!==!0&&(Cr("WebGLRenderer: copyTextureToTexture function signature has changed."),H=arguments[0]||null,b=arguments[1],O=arguments[2],F=arguments[3]||0,k=null);let at,_t,Ct,Pt,kt,Yt,Lt,ie,me;const _e=b.isCompressedTexture?b.mipmaps[F]:b.image;k!==null?(at=k.max.x-k.min.x,_t=k.max.y-k.min.y,Ct=k.isBox3?k.max.z-k.min.z:1,Pt=k.min.x,kt=k.min.y,Yt=k.isBox3?k.min.z:0):(at=_e.width,_t=_e.height,Ct=_e.depth||1,Pt=0,kt=0,Yt=0),H!==null?(Lt=H.x,ie=H.y,me=H.z):(Lt=0,ie=0,me=0);const tn=Zt.convert(O.format),le=Zt.convert(O.type);let Dt;O.isData3DTexture?(w.setTexture3D(O,0),Dt=P.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(w.setTexture2DArray(O,0),Dt=P.TEXTURE_2D_ARRAY):(w.setTexture2D(O,0),Dt=P.TEXTURE_2D),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,O.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,O.unpackAlignment);const li=P.getParameter(P.UNPACK_ROW_LENGTH),ce=P.getParameter(P.UNPACK_IMAGE_HEIGHT),Rn=P.getParameter(P.UNPACK_SKIP_PIXELS),Ss=P.getParameter(P.UNPACK_SKIP_ROWS),dn=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,_e.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,_e.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Pt),P.pixelStorei(P.UNPACK_SKIP_ROWS,kt),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Yt);const Mr=b.isDataArrayTexture||b.isData3DTexture,ve=O.isDataArrayTexture||O.isData3DTexture;if(b.isRenderTargetTexture||b.isDepthTexture){const Yn=yt.get(b),yr=yt.get(O),vn=yt.get(Yn.__renderTarget),Ai=yt.get(yr.__renderTarget);ct.bindFramebuffer(P.READ_FRAMEBUFFER,vn.__webglFramebuffer),ct.bindFramebuffer(P.DRAW_FRAMEBUFFER,Ai.__webglFramebuffer);for(let Ri=0;Ri<Ct;Ri++)Mr&&P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,yt.get(b).__webglTexture,F,Yt+Ri),b.isDepthTexture?(ve&&P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,yt.get(O).__webglTexture,F,me+Ri),P.blitFramebuffer(Pt,kt,at,_t,Lt,ie,at,_t,P.DEPTH_BUFFER_BIT,P.NEAREST)):ve?P.copyTexSubImage3D(Dt,F,Lt,ie,me+Ri,Pt,kt,at,_t):P.copyTexSubImage2D(Dt,F,Lt,ie,me+Ri,Pt,kt,at,_t);ct.bindFramebuffer(P.READ_FRAMEBUFFER,null),ct.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else ve?b.isDataTexture||b.isData3DTexture?P.texSubImage3D(Dt,F,Lt,ie,me,at,_t,Ct,tn,le,_e.data):O.isCompressedArrayTexture?P.compressedTexSubImage3D(Dt,F,Lt,ie,me,at,_t,Ct,tn,_e.data):P.texSubImage3D(Dt,F,Lt,ie,me,at,_t,Ct,tn,le,_e):b.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,F,Lt,ie,at,_t,tn,le,_e.data):b.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,F,Lt,ie,_e.width,_e.height,tn,_e.data):P.texSubImage2D(P.TEXTURE_2D,F,Lt,ie,at,_t,tn,le,_e);P.pixelStorei(P.UNPACK_ROW_LENGTH,li),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,ce),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Rn),P.pixelStorei(P.UNPACK_SKIP_ROWS,Ss),P.pixelStorei(P.UNPACK_SKIP_IMAGES,dn),F===0&&O.generateMipmaps&&P.generateMipmap(Dt),ct.unbindTexture()},this.copyTextureToTexture3D=function(b,O,k=null,H=null,F=0){return b.isTexture!==!0&&(Cr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),k=arguments[0]||null,H=arguments[1]||null,b=arguments[2],O=arguments[3],F=arguments[4]||0),Cr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(b,O,k,H,F)},this.initRenderTarget=function(b){yt.get(b).__webglFramebuffer===void 0&&w.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?w.setTextureCube(b,0):b.isData3DTexture?w.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?w.setTexture2DArray(b,0):w.setTexture2D(b,0),ct.unbindTexture()},this.resetState=function(){A=0,R=0,I=null,ct.reset(),pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return gi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=ne._getDrawingBufferColorSpace(t),e.unpackColorSpace=ne._getUnpackColorSpace()}}class ma{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new Wt(t),this.near=e,this.far=i}clone(){return new ma(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Pd extends ke{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ei,this.environmentIntensity=1,this.environmentRotation=new ei,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Xv extends Ze{constructor(t=null,e=1,i=1,s,r,o,a,l,c=gn,h=gn,u,d){super(null,o,a,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class jh extends Sn{constructor(t,e,i,s=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Fs=new Kt,Jh=new Kt,Lo=[],Qh=new Bn,Yv=new Kt,wr=new fe,Ar=new Qr;class Pc extends fe{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new jh(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,Yv)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Bn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Fs),Qh.copy(t.boundingBox).applyMatrix4(Fs),this.boundingBox.union(Qh)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Qr),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Fs),Ar.copy(t.boundingSphere).applyMatrix4(Fs),this.boundingSphere.union(Ar)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const i=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=t*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(t,e){const i=this.matrixWorld,s=this.count;if(wr.geometry=this.geometry,wr.material=this.material,wr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ar.copy(this.boundingSphere),Ar.applyMatrix4(i),t.ray.intersectsSphere(Ar)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Fs),Jh.multiplyMatrices(i,Fs),wr.matrixWorld=Jh,wr.raycast(t,Lo);for(let o=0,a=Lo.length;o<a;o++){const l=Lo[o];l.instanceId=r,l.object=this,e.push(l)}Lo.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new jh(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const i=e.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new Xv(new Float32Array(s*this.count),s,this.count,Mc,Qn));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<i.length;c++)o+=i[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;r[l]=a,r.set(i,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Ld extends Ze{constructor(t,e,i,s,r,o,a,l,c){super(t,e,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class si{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let i,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)i=this.getPoint(o/t),r+=i.distanceTo(s),e.push(r),s=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const i=this.getLengths();let s=0;const r=i.length;let o;e?o=e:o=t*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=i[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(r-1);const h=i[s],d=i[s+1]-h,f=(o-h)/d;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new et:new C);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e){const i=new C,s=[],r=[],o=[],a=new C,l=new Kt;for(let f=0;f<=t;f++){const p=f/t;s[f]=this.getTangentAt(p,new C)}r[0]=new C,o[0]=new C;let c=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,i.set(1,0,0)),u<=c&&(c=u,i.set(0,1,0)),d<=c&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();const p=Math.acos(Be(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,p))}o[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(Be(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let p=1;p<=t;p++)r[p].applyMatrix4(l.makeRotationAxis(s[p],f*p)),o[p].crossVectors(s[p],r[p])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Lc extends si{constructor(t=0,e=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new et){const i=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return i.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class qv extends Lc{constructor(t,e,i,s,r,o){super(t,e,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Ic(){let n=0,t=0,e=0,i=0;function s(r,o,a,l){n=r,t=a,e=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let d=(o-r)/c-(a-r)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+u)+(l-a)/u;d*=h,f*=h,s(o,a,d,f)},calc:function(r){const o=r*r,a=o*r;return n+t*r+e*o+i*a}}}const Io=new C,Qa=new Ic,tl=new Ic,el=new Ic;class ga extends si{constructor(t=[],e=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=s}getPoint(t,e=new C){const i=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(Io.subVectors(s[0],s[1]).add(s[0]),c=Io);const u=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Io.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Io),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let p=Math.pow(c.distanceToSquared(u),f),_=Math.pow(u.distanceToSquared(d),f),g=Math.pow(d.distanceToSquared(h),f);_<1e-4&&(_=1),p<1e-4&&(p=_),g<1e-4&&(g=_),Qa.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,p,_,g),tl.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,p,_,g),el.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,p,_,g)}else this.curveType==="catmullrom"&&(Qa.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),tl.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),el.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return i.set(Qa.calc(l),tl.calc(l),el.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(new C().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function tu(n,t,e,i,s){const r=(i-t)*.5,o=(s-e)*.5,a=n*n,l=n*a;return(2*e-2*i+r+o)*l+(-3*e+3*i-2*r-o)*a+r*n+e}function Zv(n,t){const e=1-n;return e*e*t}function $v(n,t){return 2*(1-n)*n*t}function Kv(n,t){return n*n*t}function Ur(n,t,e,i){return Zv(n,t)+$v(n,e)+Kv(n,i)}function jv(n,t){const e=1-n;return e*e*e*t}function Jv(n,t){const e=1-n;return 3*e*e*n*t}function Qv(n,t){return 3*(1-n)*n*n*t}function t1(n,t){return n*n*n*t}function Nr(n,t,e,i,s){return jv(n,t)+Jv(n,e)+Qv(n,i)+t1(n,s)}class Id extends si{constructor(t=new et,e=new et,i=new et,s=new et){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new et){const i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Nr(t,s.x,r.x,o.x,a.x),Nr(t,s.y,r.y,o.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class e1 extends si{constructor(t=new C,e=new C,i=new C,s=new C){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new C){const i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Nr(t,s.x,r.x,o.x,a.x),Nr(t,s.y,r.y,o.y,a.y),Nr(t,s.z,r.z,o.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Dd extends si{constructor(t=new et,e=new et){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new et){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new et){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class n1 extends si{constructor(t=new C,e=new C){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new C){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new C){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Ud extends si{constructor(t=new et,e=new et,i=new et){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new et){const i=e,s=this.v0,r=this.v1,o=this.v2;return i.set(Ur(t,s.x,r.x,o.x),Ur(t,s.y,r.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Nd extends si{constructor(t=new C,e=new C,i=new C){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new C){const i=e,s=this.v0,r=this.v1,o=this.v2;return i.set(Ur(t,s.x,r.x,o.x),Ur(t,s.y,r.y,o.y),Ur(t,s.z,r.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Od extends si{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new et){const i=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return i.set(tu(a,l.x,c.x,h.x,u.x),tu(a,l.y,c.y,h.y,u.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(new et().fromArray(s))}return this}}var ia=Object.freeze({__proto__:null,ArcCurve:qv,CatmullRomCurve3:ga,CubicBezierCurve:Id,CubicBezierCurve3:e1,EllipseCurve:Lc,LineCurve:Dd,LineCurve3:n1,QuadraticBezierCurve:Ud,QuadraticBezierCurve3:Nd,SplineCurve:Od});class i1 extends si{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ia[i](e,t))}return this}getPoint(t,e){const i=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=i){const o=s[r]-i,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let i=0,s=this.curves.length;i<s;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let i;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];i&&i.equals(h)||(e.push(h),i=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const s=t.curves[e];this.curves.push(new ia[s.type]().fromJSON(s))}return this}}class eu extends i1{constructor(t){super(),this.type="Path",this.currentPoint=new et,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const i=new Dd(this.currentPoint.clone(),new et(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,s){const r=new Ud(this.currentPoint.clone(),new et(t,e),new et(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(t,e,i,s,r,o){const a=new Id(this.currentPoint.clone(),new et(t,e),new et(i,s),new et(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),i=new Od(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,s,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,i,s,r,o),this}absarc(t,e,i,s,r,o){return this.absellipse(t,e,i,i,s,r,o),this}ellipse(t,e,i,s,r,o,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,i,s,r,o,a,l),this}absellipse(t,e,i,s,r,o,a,l){const c=new Lc(t,e,i,s,r,o,a,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class eo extends Ae{constructor(t=1,e=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:s},e=Math.max(3,e);const r=[],o=[],a=[],l=[],c=new C,h=new et;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){const f=i+u/e*s;c.x=t*Math.cos(f),c.y=t*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[d]/t+1)/2,h.y=(o[d+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Vt(o,3)),this.setAttribute("normal",new Vt(a,3)),this.setAttribute("uv",new Vt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new eo(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Ei extends Ae{constructor(t=1,e=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],d=[],f=[];let p=0;const _=[],g=i/2;let m=0;y(),o===!1&&(t>0&&M(!0),e>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new Vt(u,3)),this.setAttribute("normal",new Vt(d,3)),this.setAttribute("uv",new Vt(f,2));function y(){const x=new C,L=new C;let A=0;const R=(e-t)/i;for(let I=0;I<=r;I++){const T=[],E=I/r,D=E*(e-t)+t;for(let V=0;V<=s;V++){const z=V/s,G=z*l+a,j=Math.sin(G),W=Math.cos(G);L.x=D*j,L.y=-E*i+g,L.z=D*W,u.push(L.x,L.y,L.z),x.set(j,R,W).normalize(),d.push(x.x,x.y,x.z),f.push(z,1-E),T.push(p++)}_.push(T)}for(let I=0;I<s;I++)for(let T=0;T<r;T++){const E=_[T][I],D=_[T+1][I],V=_[T+1][I+1],z=_[T][I+1];(t>0||T!==0)&&(h.push(E,D,z),A+=3),(e>0||T!==r-1)&&(h.push(D,V,z),A+=3)}c.addGroup(m,A,0),m+=A}function M(x){const L=p,A=new et,R=new C;let I=0;const T=x===!0?t:e,E=x===!0?1:-1;for(let V=1;V<=s;V++)u.push(0,g*E,0),d.push(0,E,0),f.push(.5,.5),p++;const D=p;for(let V=0;V<=s;V++){const G=V/s*l+a,j=Math.cos(G),W=Math.sin(G);R.x=T*W,R.y=g*E,R.z=T*j,u.push(R.x,R.y,R.z),d.push(0,E,0),A.x=j*.5+.5,A.y=W*.5*E+.5,f.push(A.x,A.y),p++}for(let V=0;V<s;V++){const z=L+V,G=D+V;x===!0?h.push(G,G+1,z):h.push(G+1,G,z),I+=3}c.addGroup(m,I,x===!0?1:2),m+=I}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ei(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class _r extends Ei{constructor(t=1,e=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new _r(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Dc extends Ae{constructor(t=[],e=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:s};const r=[],o=[];a(s),c(i),h(),this.setAttribute("position",new Vt(r,3)),this.setAttribute("normal",new Vt(r.slice(),3)),this.setAttribute("uv",new Vt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(y){const M=new C,x=new C,L=new C;for(let A=0;A<e.length;A+=3)f(e[A+0],M),f(e[A+1],x),f(e[A+2],L),l(M,x,L,y)}function l(y,M,x,L){const A=L+1,R=[];for(let I=0;I<=A;I++){R[I]=[];const T=y.clone().lerp(x,I/A),E=M.clone().lerp(x,I/A),D=A-I;for(let V=0;V<=D;V++)V===0&&I===A?R[I][V]=T:R[I][V]=T.clone().lerp(E,V/D)}for(let I=0;I<A;I++)for(let T=0;T<2*(A-I)-1;T++){const E=Math.floor(T/2);T%2===0?(d(R[I][E+1]),d(R[I+1][E]),d(R[I][E])):(d(R[I][E+1]),d(R[I+1][E+1]),d(R[I+1][E]))}}function c(y){const M=new C;for(let x=0;x<r.length;x+=3)M.x=r[x+0],M.y=r[x+1],M.z=r[x+2],M.normalize().multiplyScalar(y),r[x+0]=M.x,r[x+1]=M.y,r[x+2]=M.z}function h(){const y=new C;for(let M=0;M<r.length;M+=3){y.x=r[M+0],y.y=r[M+1],y.z=r[M+2];const x=g(y)/2/Math.PI+.5,L=m(y)/Math.PI+.5;o.push(x,1-L)}p(),u()}function u(){for(let y=0;y<o.length;y+=6){const M=o[y+0],x=o[y+2],L=o[y+4],A=Math.max(M,x,L),R=Math.min(M,x,L);A>.9&&R<.1&&(M<.2&&(o[y+0]+=1),x<.2&&(o[y+2]+=1),L<.2&&(o[y+4]+=1))}}function d(y){r.push(y.x,y.y,y.z)}function f(y,M){const x=y*3;M.x=t[x+0],M.y=t[x+1],M.z=t[x+2]}function p(){const y=new C,M=new C,x=new C,L=new C,A=new et,R=new et,I=new et;for(let T=0,E=0;T<r.length;T+=9,E+=6){y.set(r[T+0],r[T+1],r[T+2]),M.set(r[T+3],r[T+4],r[T+5]),x.set(r[T+6],r[T+7],r[T+8]),A.set(o[E+0],o[E+1]),R.set(o[E+2],o[E+3]),I.set(o[E+4],o[E+5]),L.copy(y).add(M).add(x).divideScalar(3);const D=g(L);_(A,E+0,y,D),_(R,E+2,M,D),_(I,E+4,x,D)}}function _(y,M,x,L){L<0&&y.x===1&&(o[M]=y.x-1),x.x===0&&x.z===0&&(o[M]=L/2/Math.PI+.5)}function g(y){return Math.atan2(y.z,-y.x)}function m(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Dc(t.vertices,t.indices,t.radius,t.details)}}class Qe extends eu{constructor(t){super(t),this.uuid=xs(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let i=0,s=this.holes.length;i<s;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const s=t.holes[e];this.holes.push(new eu().fromJSON(s))}return this}}const s1={triangulate:function(n,t,e=2){const i=t&&t.length,s=i?t[0]*e:n.length;let r=Fd(n,0,s,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c,h,u,d,f;if(i&&(r=c1(n,t,r,e)),n.length>80*e){a=c=n[0],l=h=n[1];for(let p=e;p<s;p+=e)u=n[p],d=n[p+1],u<a&&(a=u),d<l&&(l=d),u>c&&(c=u),d>h&&(h=d);f=Math.max(c-a,h-l),f=f!==0?32767/f:0}return Wr(r,o,e,a,l,f,0),o}};function Fd(n,t,e,i,s){let r,o;if(s===M1(n,t,e,i)>0)for(r=t;r<e;r+=i)o=nu(r,n[r],n[r+1],o);else for(r=e-i;r>=t;r-=i)o=nu(r,n[r],n[r+1],o);return o&&_a(o,o.next)&&(Yr(o),o=o.next),o}function gs(n,t){if(!n)return n;t||(t=n);let e=n,i;do if(i=!1,!e.steiner&&(_a(e,e.next)||Se(e.prev,e,e.next)===0)){if(Yr(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function Wr(n,t,e,i,s,r,o){if(!n)return;!o&&r&&p1(n,i,s,r);let a=n,l,c;for(;n.prev!==n.next;){if(l=n.prev,c=n.next,r?o1(n,i,s,r):r1(n)){t.push(l.i/e|0),t.push(n.i/e|0),t.push(c.i/e|0),Yr(n),n=c.next,a=c.next;continue}if(n=c,n===a){o?o===1?(n=a1(gs(n),t,e),Wr(n,t,e,i,s,r,2)):o===2&&l1(n,t,e,i,s,r):Wr(gs(n),t,e,i,s,r,1);break}}}function r1(n){const t=n.prev,e=n,i=n.next;if(Se(t,e,i)>=0)return!1;const s=t.x,r=e.x,o=i.x,a=t.y,l=e.y,c=i.y,h=s<r?s<o?s:o:r<o?r:o,u=a<l?a<c?a:c:l<c?l:c,d=s>r?s>o?s:o:r>o?r:o,f=a>l?a>c?a:c:l>c?l:c;let p=i.next;for(;p!==t;){if(p.x>=h&&p.x<=d&&p.y>=u&&p.y<=f&&qs(s,a,r,l,o,c,p.x,p.y)&&Se(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function o1(n,t,e,i){const s=n.prev,r=n,o=n.next;if(Se(s,r,o)>=0)return!1;const a=s.x,l=r.x,c=o.x,h=s.y,u=r.y,d=o.y,f=a<l?a<c?a:c:l<c?l:c,p=h<u?h<d?h:d:u<d?u:d,_=a>l?a>c?a:c:l>c?l:c,g=h>u?h>d?h:d:u>d?u:d,m=nc(f,p,t,e,i),y=nc(_,g,t,e,i);let M=n.prevZ,x=n.nextZ;for(;M&&M.z>=m&&x&&x.z<=y;){if(M.x>=f&&M.x<=_&&M.y>=p&&M.y<=g&&M!==s&&M!==o&&qs(a,h,l,u,c,d,M.x,M.y)&&Se(M.prev,M,M.next)>=0||(M=M.prevZ,x.x>=f&&x.x<=_&&x.y>=p&&x.y<=g&&x!==s&&x!==o&&qs(a,h,l,u,c,d,x.x,x.y)&&Se(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;M&&M.z>=m;){if(M.x>=f&&M.x<=_&&M.y>=p&&M.y<=g&&M!==s&&M!==o&&qs(a,h,l,u,c,d,M.x,M.y)&&Se(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;x&&x.z<=y;){if(x.x>=f&&x.x<=_&&x.y>=p&&x.y<=g&&x!==s&&x!==o&&qs(a,h,l,u,c,d,x.x,x.y)&&Se(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function a1(n,t,e){let i=n;do{const s=i.prev,r=i.next.next;!_a(s,r)&&Bd(s,i,i.next,r)&&Xr(s,r)&&Xr(r,s)&&(t.push(s.i/e|0),t.push(i.i/e|0),t.push(r.i/e|0),Yr(i),Yr(i.next),i=n=r),i=i.next}while(i!==n);return gs(i)}function l1(n,t,e,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&_1(o,a)){let l=zd(o,a);o=gs(o,o.next),l=gs(l,l.next),Wr(o,t,e,i,s,r,0),Wr(l,t,e,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function c1(n,t,e,i){const s=[];let r,o,a,l,c;for(r=0,o=t.length;r<o;r++)a=t[r]*i,l=r<o-1?t[r+1]*i:n.length,c=Fd(n,a,l,i,!1),c===c.next&&(c.steiner=!0),s.push(g1(c));for(s.sort(h1),r=0;r<s.length;r++)e=u1(s[r],e);return e}function h1(n,t){return n.x-t.x}function u1(n,t){const e=d1(n,t);if(!e)return t;const i=zd(e,n);return gs(i,i.next),gs(e,e.next)}function d1(n,t){let e=t,i=-1/0,s;const r=n.x,o=n.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){const d=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=r&&d>i&&(i=d,s=e.x<e.next.x?e:e.next,d===r))return s}e=e.next}while(e!==t);if(!s)return null;const a=s,l=s.x,c=s.y;let h=1/0,u;e=s;do r>=e.x&&e.x>=l&&r!==e.x&&qs(o<c?r:i,o,l,c,o<c?i:r,o,e.x,e.y)&&(u=Math.abs(o-e.y)/(r-e.x),Xr(e,n)&&(u<h||u===h&&(e.x>s.x||e.x===s.x&&f1(s,e)))&&(s=e,h=u)),e=e.next;while(e!==a);return s}function f1(n,t){return Se(n.prev,n,t.prev)<0&&Se(t.next,n,n.next)<0}function p1(n,t,e,i){let s=n;do s.z===0&&(s.z=nc(s.x,s.y,t,e,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,m1(s)}function m1(n){let t,e,i,s,r,o,a,l,c=1;do{for(e=n,n=null,r=null,o=0;e;){for(o++,i=e,a=0,t=0;t<c&&(a++,i=i.nextZ,!!i);t++);for(l=c;a>0||l>0&&i;)a!==0&&(l===0||!i||e.z<=i.z)?(s=e,e=e.nextZ,a--):(s=i,i=i.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;e=i}r.nextZ=null,c*=2}while(o>1);return n}function nc(n,t,e,i,s){return n=(n-e)*s|0,t=(t-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,n|t<<1}function g1(n){let t=n,e=n;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==n);return e}function qs(n,t,e,i,s,r,o,a){return(s-o)*(t-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(i-a)}function _1(n,t){return n.next.i!==t.i&&n.prev.i!==t.i&&!v1(n,t)&&(Xr(n,t)&&Xr(t,n)&&x1(n,t)&&(Se(n.prev,n,t.prev)||Se(n,t.prev,t))||_a(n,t)&&Se(n.prev,n,n.next)>0&&Se(t.prev,t,t.next)>0)}function Se(n,t,e){return(t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y)}function _a(n,t){return n.x===t.x&&n.y===t.y}function Bd(n,t,e,i){const s=Uo(Se(n,t,e)),r=Uo(Se(n,t,i)),o=Uo(Se(e,i,n)),a=Uo(Se(e,i,t));return!!(s!==r&&o!==a||s===0&&Do(n,e,t)||r===0&&Do(n,i,t)||o===0&&Do(e,n,i)||a===0&&Do(e,t,i))}function Do(n,t,e){return t.x<=Math.max(n.x,e.x)&&t.x>=Math.min(n.x,e.x)&&t.y<=Math.max(n.y,e.y)&&t.y>=Math.min(n.y,e.y)}function Uo(n){return n>0?1:n<0?-1:0}function v1(n,t){let e=n;do{if(e.i!==n.i&&e.next.i!==n.i&&e.i!==t.i&&e.next.i!==t.i&&Bd(e,e.next,n,t))return!0;e=e.next}while(e!==n);return!1}function Xr(n,t){return Se(n.prev,n,n.next)<0?Se(n,t,n.next)>=0&&Se(n,n.prev,t)>=0:Se(n,t,n.prev)<0||Se(n,n.next,t)<0}function x1(n,t){let e=n,i=!1;const s=(n.x+t.x)/2,r=(n.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==n);return i}function zd(n,t){const e=new ic(n.i,n.x,n.y),i=new ic(t.i,t.x,t.y),s=n.next,r=t.prev;return n.next=t,t.prev=n,e.next=s,s.prev=e,i.next=e,e.prev=i,r.next=i,i.prev=r,i}function nu(n,t,e,i){const s=new ic(n,t,e);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function Yr(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function ic(n,t,e){this.i=n,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function M1(n,t,e,i){let s=0;for(let r=t,o=e-i;r<e;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}class Vi{static area(t){const e=t.length;let i=0;for(let s=e-1,r=0;r<e;s=r++)i+=t[s].x*t[r].y-t[r].x*t[s].y;return i*.5}static isClockWise(t){return Vi.area(t)<0}static triangulateShape(t,e){const i=[],s=[],r=[];iu(t),su(i,t);let o=t.length;e.forEach(iu);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,su(i,e[l]);const a=s1.triangulate(i,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function iu(n){const t=n.length;t>2&&n[t-1].equals(n[0])&&n.pop()}function su(n,t){for(let e=0;e<t.length;e++)n.push(t[e].x),n.push(t[e].y)}class ri extends Ae{constructor(t=new Qe([new et(.5,.5),new et(-.5,.5),new et(-.5,-.5),new et(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const i=this,s=[],r=[];for(let a=0,l=t.length;a<l;a++){const c=t[a];o(c)}this.setAttribute("position",new Vt(s,3)),this.setAttribute("uv",new Vt(r,2)),this.computeVertexNormals();function o(a){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1;let d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,p=e.bevelSize!==void 0?e.bevelSize:f-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,g=e.bevelSegments!==void 0?e.bevelSegments:3;const m=e.extrudePath,y=e.UVGenerator!==void 0?e.UVGenerator:y1;let M,x=!1,L,A,R,I;m&&(M=m.getSpacedPoints(h),x=!0,d=!1,L=m.computeFrenetFrames(h,!1),A=new C,R=new C,I=new C),d||(g=0,f=0,p=0,_=0);const T=a.extractPoints(c);let E=T.shape;const D=T.holes;if(!Vi.isClockWise(E)){E=E.reverse();for(let Q=0,rt=D.length;Q<rt;Q++){const P=D[Q];Vi.isClockWise(P)&&(D[Q]=P.reverse())}}const z=Vi.triangulateShape(E,D),G=E;for(let Q=0,rt=D.length;Q<rt;Q++){const P=D[Q];E=E.concat(P)}function j(Q,rt,P){return rt||console.error("THREE.ExtrudeGeometry: vec does not exist"),Q.clone().addScaledVector(rt,P)}const W=E.length,st=z.length;function X(Q,rt,P){let It,nt,Et;const ct=Q.x-rt.x,Nt=Q.y-rt.y,yt=P.x-Q.x,w=P.y-Q.y,S=ct*ct+Nt*Nt,B=ct*w-Nt*yt;if(Math.abs(B)>Number.EPSILON){const q=Math.sqrt(S),tt=Math.sqrt(yt*yt+w*w),Z=rt.x-Nt/q,Rt=rt.y+ct/q,ft=P.x-w/tt,St=P.y+yt/tt,jt=((ft-Z)*w-(St-Rt)*yt)/(ct*w-Nt*yt);It=Z+ct*jt-Q.x,nt=Rt+Nt*jt-Q.y;const it=It*It+nt*nt;if(it<=2)return new et(It,nt);Et=Math.sqrt(it/2)}else{let q=!1;ct>Number.EPSILON?yt>Number.EPSILON&&(q=!0):ct<-Number.EPSILON?yt<-Number.EPSILON&&(q=!0):Math.sign(Nt)===Math.sign(w)&&(q=!0),q?(It=-Nt,nt=ct,Et=Math.sqrt(S)):(It=ct,nt=Nt,Et=Math.sqrt(S/2))}return new et(It/Et,nt/Et)}const ut=[];for(let Q=0,rt=G.length,P=rt-1,It=Q+1;Q<rt;Q++,P++,It++)P===rt&&(P=0),It===rt&&(It=0),ut[Q]=X(G[Q],G[P],G[It]);const Mt=[];let wt,Gt=ut.concat();for(let Q=0,rt=D.length;Q<rt;Q++){const P=D[Q];wt=[];for(let It=0,nt=P.length,Et=nt-1,ct=It+1;It<nt;It++,Et++,ct++)Et===nt&&(Et=0),ct===nt&&(ct=0),wt[It]=X(P[It],P[Et],P[ct]);Mt.push(wt),Gt=Gt.concat(wt)}for(let Q=0;Q<g;Q++){const rt=Q/g,P=f*Math.cos(rt*Math.PI/2),It=p*Math.sin(rt*Math.PI/2)+_;for(let nt=0,Et=G.length;nt<Et;nt++){const ct=j(G[nt],ut[nt],It);lt(ct.x,ct.y,-P)}for(let nt=0,Et=D.length;nt<Et;nt++){const ct=D[nt];wt=Mt[nt];for(let Nt=0,yt=ct.length;Nt<yt;Nt++){const w=j(ct[Nt],wt[Nt],It);lt(w.x,w.y,-P)}}}const ae=p+_;for(let Q=0;Q<W;Q++){const rt=d?j(E[Q],Gt[Q],ae):E[Q];x?(R.copy(L.normals[0]).multiplyScalar(rt.x),A.copy(L.binormals[0]).multiplyScalar(rt.y),I.copy(M[0]).add(R).add(A),lt(I.x,I.y,I.z)):lt(rt.x,rt.y,0)}for(let Q=1;Q<=h;Q++)for(let rt=0;rt<W;rt++){const P=d?j(E[rt],Gt[rt],ae):E[rt];x?(R.copy(L.normals[Q]).multiplyScalar(P.x),A.copy(L.binormals[Q]).multiplyScalar(P.y),I.copy(M[Q]).add(R).add(A),lt(I.x,I.y,I.z)):lt(P.x,P.y,u/h*Q)}for(let Q=g-1;Q>=0;Q--){const rt=Q/g,P=f*Math.cos(rt*Math.PI/2),It=p*Math.sin(rt*Math.PI/2)+_;for(let nt=0,Et=G.length;nt<Et;nt++){const ct=j(G[nt],ut[nt],It);lt(ct.x,ct.y,u+P)}for(let nt=0,Et=D.length;nt<Et;nt++){const ct=D[nt];wt=Mt[nt];for(let Nt=0,yt=ct.length;Nt<yt;Nt++){const w=j(ct[Nt],wt[Nt],It);x?lt(w.x,w.y+M[h-1].y,M[h-1].x+P):lt(w.x,w.y,u+P)}}}K(),ot();function K(){const Q=s.length/3;if(d){let rt=0,P=W*rt;for(let It=0;It<st;It++){const nt=z[It];Ut(nt[2]+P,nt[1]+P,nt[0]+P)}rt=h+g*2,P=W*rt;for(let It=0;It<st;It++){const nt=z[It];Ut(nt[0]+P,nt[1]+P,nt[2]+P)}}else{for(let rt=0;rt<st;rt++){const P=z[rt];Ut(P[2],P[1],P[0])}for(let rt=0;rt<st;rt++){const P=z[rt];Ut(P[0]+W*h,P[1]+W*h,P[2]+W*h)}}i.addGroup(Q,s.length/3-Q,0)}function ot(){const Q=s.length/3;let rt=0;At(G,rt),rt+=G.length;for(let P=0,It=D.length;P<It;P++){const nt=D[P];At(nt,rt),rt+=nt.length}i.addGroup(Q,s.length/3-Q,1)}function At(Q,rt){let P=Q.length;for(;--P>=0;){const It=P;let nt=P-1;nt<0&&(nt=Q.length-1);for(let Et=0,ct=h+g*2;Et<ct;Et++){const Nt=W*Et,yt=W*(Et+1),w=rt+It+Nt,S=rt+nt+Nt,B=rt+nt+yt,q=rt+It+yt;zt(w,S,B,q)}}}function lt(Q,rt,P){l.push(Q),l.push(rt),l.push(P)}function Ut(Q,rt,P){Ft(Q),Ft(rt),Ft(P);const It=s.length/3,nt=y.generateTopUV(i,s,It-3,It-2,It-1);te(nt[0]),te(nt[1]),te(nt[2])}function zt(Q,rt,P,It){Ft(Q),Ft(rt),Ft(It),Ft(rt),Ft(P),Ft(It);const nt=s.length/3,Et=y.generateSideWallUV(i,s,nt-6,nt-3,nt-2,nt-1);te(Et[0]),te(Et[1]),te(Et[3]),te(Et[1]),te(Et[2]),te(Et[3])}function Ft(Q){s.push(l[Q*3+0]),s.push(l[Q*3+1]),s.push(l[Q*3+2])}function te(Q){r.push(Q.x),r.push(Q.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,i=this.parameters.options;return S1(e,i,t)}static fromJSON(t,e){const i=[];for(let r=0,o=t.shapes.length;r<o;r++){const a=e[t.shapes[r]];i.push(a)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new ia[s.type]().fromJSON(s)),new ri(i,t.options)}}const y1={generateTopUV:function(n,t,e,i,s){const r=t[e*3],o=t[e*3+1],a=t[i*3],l=t[i*3+1],c=t[s*3],h=t[s*3+1];return[new et(r,o),new et(a,l),new et(c,h)]},generateSideWallUV:function(n,t,e,i,s,r){const o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[i*3],h=t[i*3+1],u=t[i*3+2],d=t[s*3],f=t[s*3+1],p=t[s*3+2],_=t[r*3],g=t[r*3+1],m=t[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new et(o,1-l),new et(c,1-u),new et(d,1-p),new et(_,1-m)]:[new et(a,1-l),new et(h,1-u),new et(f,1-p),new et(g,1-m)]}};function S1(n,t,e){if(e.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){const r=n[i];e.shapes.push(r.uuid)}else e.shapes.push(n.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class va extends Dc{constructor(t=1,e=0){const i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new va(t.radius,t.detail)}}class Ms extends Ae{constructor(t=new Qe([new et(0,.5),new et(-.5,-.5),new et(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const i=[],s=[],r=[],o=[];let a=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(i),this.setAttribute("position",new Vt(s,3)),this.setAttribute("normal",new Vt(r,3)),this.setAttribute("uv",new Vt(o,2));function c(h){const u=s.length/3,d=h.extractPoints(e);let f=d.shape;const p=d.holes;Vi.isClockWise(f)===!1&&(f=f.reverse());for(let g=0,m=p.length;g<m;g++){const y=p[g];Vi.isClockWise(y)===!0&&(p[g]=y.reverse())}const _=Vi.triangulateShape(f,p);for(let g=0,m=p.length;g<m;g++){const y=p[g];f=f.concat(y)}for(let g=0,m=f.length;g<m;g++){const y=f[g];s.push(y.x,y.y,0),r.push(0,0,1),o.push(y.x,y.y)}for(let g=0,m=_.length;g<m;g++){const y=_[g],M=y[0]+u,x=y[1]+u,L=y[2]+u;i.push(M,x,L),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return E1(e,t)}static fromJSON(t,e){const i=[];for(let s=0,r=t.shapes.length;s<r;s++){const o=e[t.shapes[s]];i.push(o)}return new Ms(i,t.curveSegments)}}function E1(n,t){if(t.shapes=[],Array.isArray(n))for(let e=0,i=n.length;e<i;e++){const s=n[e];t.shapes.push(s.uuid)}else t.shapes.push(n.uuid);return t}class ii extends Ae{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const h=[],u=new C,d=new C,f=[],p=[],_=[],g=[];for(let m=0;m<=i;m++){const y=[],M=m/i;let x=0;m===0&&o===0?x=.5/e:m===i&&l===Math.PI&&(x=-.5/e);for(let L=0;L<=e;L++){const A=L/e;u.x=-t*Math.cos(s+A*r)*Math.sin(o+M*a),u.y=t*Math.cos(o+M*a),u.z=t*Math.sin(s+A*r)*Math.sin(o+M*a),p.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),g.push(A+x,1-M),y.push(c++)}h.push(y)}for(let m=0;m<i;m++)for(let y=0;y<e;y++){const M=h[m][y+1],x=h[m][y],L=h[m+1][y],A=h[m+1][y+1];(m!==0||o>0)&&f.push(M,x,A),(m!==i-1||l<Math.PI)&&f.push(x,L,A)}this.setIndex(f),this.setAttribute("position",new Vt(p,3)),this.setAttribute("normal",new Vt(_,3)),this.setAttribute("uv",new Vt(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ii(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class no extends Ae{constructor(t=1,e=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);const o=[],a=[],l=[],c=[],h=new C,u=new C,d=new C;for(let f=0;f<=i;f++)for(let p=0;p<=s;p++){const _=p/s*r,g=f/i*Math.PI*2;u.x=(t+e*Math.cos(g))*Math.cos(_),u.y=(t+e*Math.cos(g))*Math.sin(_),u.z=e*Math.sin(g),a.push(u.x,u.y,u.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(p/s),c.push(f/i)}for(let f=1;f<=i;f++)for(let p=1;p<=s;p++){const _=(s+1)*f+p-1,g=(s+1)*(f-1)+p-1,m=(s+1)*(f-1)+p,y=(s+1)*f+p;o.push(_,g,y),o.push(g,m,y)}this.setIndex(o),this.setAttribute("position",new Vt(a,3)),this.setAttribute("normal",new Vt(l,3)),this.setAttribute("uv",new Vt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new no(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class xa extends Ae{constructor(t=new Nd(new C(-1,-1,0),new C(-1,1,0),new C(1,1,0)),e=64,i=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:i,radialSegments:s,closed:r};const o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new C,l=new C,c=new et;let h=new C;const u=[],d=[],f=[],p=[];_(),this.setIndex(p),this.setAttribute("position",new Vt(u,3)),this.setAttribute("normal",new Vt(d,3)),this.setAttribute("uv",new Vt(f,2));function _(){for(let M=0;M<e;M++)g(M);g(r===!1?e:0),y(),m()}function g(M){h=t.getPointAt(M/e,h);const x=o.normals[M],L=o.binormals[M];for(let A=0;A<=s;A++){const R=A/s*Math.PI*2,I=Math.sin(R),T=-Math.cos(R);l.x=T*x.x+I*L.x,l.y=T*x.y+I*L.y,l.z=T*x.z+I*L.z,l.normalize(),d.push(l.x,l.y,l.z),a.x=h.x+i*l.x,a.y=h.y+i*l.y,a.z=h.z+i*l.z,u.push(a.x,a.y,a.z)}}function m(){for(let M=1;M<=e;M++)for(let x=1;x<=s;x++){const L=(s+1)*(M-1)+(x-1),A=(s+1)*M+(x-1),R=(s+1)*M+x,I=(s+1)*(M-1)+x;p.push(L,A,I),p.push(A,R,I)}}function y(){for(let M=0;M<=e;M++)for(let x=0;x<=s;x++)c.x=M/e,c.y=x/s,f.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new xa(new ia[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class Ee extends to{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Wt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Wt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ud,this.normalScale=new et(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ei,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class kd extends ke{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Wt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class b1 extends kd{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ke.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Wt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const nl=new Kt,ru=new C,ou=new C;class T1{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new et(512,512),this.map=null,this.mapPass=null,this.matrix=new Kt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Rc,this._frameExtents=new et(1,1),this._viewportCount=1,this._viewports=[new Te(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;ru.setFromMatrixPosition(t.matrixWorld),e.position.copy(ru),ou.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(ou),e.updateMatrixWorld(),nl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(nl),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(nl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class w1 extends T1{constructor(){super(new bd(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class A1 extends kd{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ke.DEFAULT_UP),this.updateMatrix(),this.target=new ke,this.shadow=new w1}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class R1{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=au(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=au();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function au(){return performance.now()}const lu=new Kt;class C1{constructor(t,e,i=0,s=1/0){this.ray=new Tc(t,e),this.near=i,this.far=s,this.camera=null,this.layers=new wc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return lu.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(lu),this}intersectObject(t,e=!0,i=[]){return sc(t,this,i,e),i.sort(cu),i}intersectObjects(t,e=!0,i=[]){for(let s=0,r=t.length;s<r;s++)sc(t[s],this,i,e);return i.sort(cu),i}}function cu(n,t){return n.distance-t.distance}function sc(n,t,e,i){let s=!0;if(n.layers.test(t.layers)&&n.raycast(t,e)===!1&&(s=!1),s===!0&&i===!0){const r=n.children;for(let o=0,a=r.length;o<a;o++)sc(r[o],t,e,!0)}}class hu{constructor(t=1,e=0,i=0){return this.radius=t,this.phi=e,this.theta=i,this}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(Be(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class P1 extends vs{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:mc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=mc);const uu={type:"change"},Uc={type:"start"},Hd={type:"end"},No=new Tc,du=new Ni,L1=Math.cos(70*Hi.DEG2RAD),De=new C,en=2*Math.PI,de={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},il=1e-6;class Vd extends P1{constructor(t,e=null){super(t,e),this.state=de.NONE,this.enabled=!0,this.target=new C,this.cursor=new C,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:js.ROTATE,MIDDLE:js.DOLLY,RIGHT:js.PAN},this.touches={ONE:Xs.ROTATE,TWO:Xs.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new C,this._lastQuaternion=new _n,this._lastTargetPosition=new C,this._quat=new _n().setFromUnitVectors(t.up,new C(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new hu,this._sphericalDelta=new hu,this._scale=1,this._panOffset=new C,this._rotateStart=new et,this._rotateEnd=new et,this._rotateDelta=new et,this._panStart=new et,this._panEnd=new et,this._panDelta=new et,this._dollyStart=new et,this._dollyEnd=new et,this._dollyDelta=new et,this._dollyDirection=new C,this._mouse=new et,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=D1.bind(this),this._onPointerDown=I1.bind(this),this._onPointerUp=U1.bind(this),this._onContextMenu=H1.bind(this),this._onMouseWheel=F1.bind(this),this._onKeyDown=B1.bind(this),this._onTouchStart=z1.bind(this),this._onTouchMove=k1.bind(this),this._onMouseDown=N1.bind(this),this._onMouseMove=O1.bind(this),this._interceptControlDown=V1.bind(this),this._interceptControlUp=G1.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(uu),this.update(),this.state=de.NONE}update(t=null){const e=this.object.position;De.copy(e).sub(this.target),De.applyQuaternion(this._quat),this._spherical.setFromVector3(De),this.autoRotate&&this.state===de.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=en:i>Math.PI&&(i-=en),s<-Math.PI?s+=en:s>Math.PI&&(s-=en),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(De.setFromSpherical(this._spherical),De.applyQuaternion(this._quatInverse),e.copy(this.target).add(De),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=De.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const a=new C(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new C(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=De.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(No.origin.copy(this.object.position),No.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(No.direction))<L1?this.object.lookAt(this.target):(du.setFromNormalAndCoplanarPoint(this.object.up,this.target),No.intersectPlane(du,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>il||8*(1-this._lastQuaternion.dot(this.object.quaternion))>il||this._lastTargetPosition.distanceToSquared(this.target)>il?(this.dispatchEvent(uu),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?en/60*this.autoRotateSpeed*t:en/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){De.setFromMatrixColumn(e,0),De.multiplyScalar(-t),this._panOffset.add(De)}_panUp(t,e){this.screenSpacePanning===!0?De.setFromMatrixColumn(e,1):(De.setFromMatrixColumn(e,0),De.crossVectors(this.object.up,De)),De.multiplyScalar(t),this._panOffset.add(De)}_pan(t,e){const i=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;De.copy(s).sub(this.target);let r=De.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/i.clientHeight,this.object.matrix),this._panUp(2*e*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),s=t-i.left,r=e-i.top,o=i.width,a=i.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(en*this._rotateDelta.x/e.clientHeight),this._rotateUp(en*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(en*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(-en*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(en*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(-en*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(i,s)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),r=.5*(t.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(en*this._rotateDelta.x/e.clientHeight),this._rotateUp(en*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new et,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,i={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function I1(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function D1(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function U1(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Hd),this.state=de.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function N1(n){let t;switch(n.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case js.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=de.DOLLY;break;case js.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=de.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=de.ROTATE}break;case js.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=de.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=de.PAN}break;default:this.state=de.NONE}this.state!==de.NONE&&this.dispatchEvent(Uc)}function O1(n){switch(this.state){case de.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case de.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case de.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function F1(n){this.enabled===!1||this.enableZoom===!1||this.state!==de.NONE||(n.preventDefault(),this.dispatchEvent(Uc),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(Hd))}function B1(n){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(n)}function z1(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case Xs.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=de.TOUCH_ROTATE;break;case Xs.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=de.TOUCH_PAN;break;default:this.state=de.NONE}break;case 2:switch(this.touches.TWO){case Xs.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=de.TOUCH_DOLLY_PAN;break;case Xs.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=de.TOUCH_DOLLY_ROTATE;break;default:this.state=de.NONE}break;default:this.state=de.NONE}this.state!==de.NONE&&this.dispatchEvent(Uc)}function k1(n){switch(this._trackPointer(n),this.state){case de.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case de.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case de.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case de.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=de.NONE}}function H1(n){this.enabled!==!1&&n.preventDefault()}function V1(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function G1(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const Gd=new C(-.55,.55,.62).normalize(),W1=`
  varying vec3 vDirection;
  void main() {
    vDirection = normalize(position);
    vec4 clip = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    gl_Position = clip.xyww;
  }
`,X1=`
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
`;function Wd({top:n=6262719,horizon:t=15785144,sun:e=16767392}={}){const i=new ni({uniforms:{uTop:{value:new Wt(n)},uHorizon:{value:new Wt(t)},uSun:{value:new Wt(e)},uSunDirection:{value:Gd}},vertexShader:W1,fragmentShader:X1,side:Je,depthWrite:!1}),s=new fe(new ii(1e3,32,16),i);return s.frustumCulled=!1,s.renderOrder=-1,s}function Xd({extent:n,mapSize:t=2048,distance:e=200,intensity:i=2.6}){const s=new xt;s.add(new b1(13886192,9074262,1.15));const r=new A1(16769205,i);return r.position.copy(Gd).multiplyScalar(e),r.castShadow=!0,r.shadow.mapSize.set(t,t),r.shadow.bias=-4e-4,r.shadow.normalBias=.02,s.add(r,r.target),Yd(r,n,e),{group:s,sun:r}}function Yd(n,t,e){const i=n.shadow.camera;i.left=i.bottom=-t,i.right=i.top=t,i.near=e*.2,i.far=e*2,i.updateProjectionMatrix()}function Wn(n=1){let t=n>>>0;const e=()=>{t=t+1831565813|0;let i=Math.imul(t^t>>>15,1|t);return i=i+Math.imul(i^i>>>7,61|i)^i,((i^i>>>14)>>>0)/4294967296};return{next:e,range:(i,s)=>i+(s-i)*e(),int:(i,s)=>Math.floor(i+(s-i+1)*e()),pick:i=>i[Math.floor(e()*i.length)],chance:i=>e()<i}}function qd(n){let t=2166136261;for(let e=0;e<n.length;e++)t^=n.charCodeAt(e),t=Math.imul(t,16777619);return t>>>0}function Ie(n,{width:t=256,height:e=t,tile:i=null},s){const r=document.createElement("canvas");r.width=t,r.height=e;const o=r.getContext("2d");s(o,t,e,Wn(qd(n)));const a=new Ld(r);return a.colorSpace=rn,a.anisotropy=8,i&&(a.wrapS=a.wrapT=lr,a.repeat.set(1/i,1/i)),a}const er=([n,t,e],i=1)=>`rgba(${n|0}, ${t|0}, ${e|0}, ${i})`;function vr(n,t,e,i=1){const s=1+(n.next()-.5)*e;return er(t.map(r=>Math.min(255,r*s)),i)}function Pe(n,t,e,i){n.fillStyle=er(i),n.fillRect(0,0,t,e)}function Hn(n,t,e,i,{count:s,color:r,amount:o=.3,size:a=2,alpha:l=1}){for(let c=0;c<s;c++){n.fillStyle=vr(i,r,o,l);const h=.6+i.next()*a;n.fillRect(i.next()*t,i.next()*e,h,h)}}function bn(n,t,e,i,{count:s,color:r,radius:o,alpha:a}){for(let l=0;l<s;l++){const c=i.next()*t,h=i.next()*e,u=o*(.5+i.next());for(const[d,f]of[[0,0],[-t,0],[t,0],[0,-e],[0,e]]){const p=n.createRadialGradient(c+d,h+f,0,c+d,h+f,u);p.addColorStop(0,vr(i,r,.2,a)),p.addColorStop(1,er(r,0)),n.fillStyle=p,n.fillRect(c+d-u,h+f-u,u*2,u*2)}}}function Y1(n,t,e,i,s,r){n.fillRect(t,e,i,s),t<0&&n.fillRect(t+r,e,i,s),t+i>r&&n.fillRect(t-r,e,i,s)}function qr(n,t,e,{top:i,bottom:s,courseHeight:r,minLength:o,maxLength:a,mortar:l,color:c,amount:h}){for(let u=i;u<s;u+=r){const d=Math.min(r,s-u)-l;let f=-e.next()*a;for(;f<t;){const p=o+e.next()*(a-o);n.fillStyle=vr(e,c,h),Y1(n,f+l/2,u+l/2,p-l,d,t),f+=p}}}const q1=()=>Ie("banded",{tile:6},(n,t,e,i)=>{Pe(n,t,e,[196,182,154]),qr(n,t,i,{top:0,bottom:176,courseHeight:22,minLength:34,maxLength:72,mortar:3,color:[216,201,170],amount:.14}),qr(n,t,i,{top:176,bottom:256,courseHeight:10,minLength:22,maxLength:30,mortar:3.5,color:[172,88,60],amount:.22}),Hn(n,t,e,i,{count:2500,color:[110,90,70],amount:.4,size:1.4,alpha:.18})}),fu=()=>Ie("ashlar",{tile:4},(n,t,e,i)=>{Pe(n,t,e,[178,166,142]),qr(n,t,i,{top:0,bottom:e,courseHeight:32,minLength:40,maxLength:96,mortar:3,color:[208,194,164],amount:.13}),Hn(n,t,e,i,{count:3e3,color:[120,105,85],amount:.4,size:1.5,alpha:.2})}),Z1=()=>Ie("brick",{tile:2},(n,t,e,i)=>{Pe(n,t,e,[205,191,163]),qr(n,t,i,{top:0,bottom:e,courseHeight:12.8,minLength:38,maxLength:48,mortar:4,color:[168,84,56],amount:.25})}),pu=()=>Ie("plaster",{tile:8},(n,t,e,i)=>{Pe(n,t,e,[232,214,182]),bn(n,t,e,i,{count:40,color:[205,180,140],radius:40,alpha:.35}),bn(n,t,e,i,{count:30,color:[245,232,205],radius:30,alpha:.4}),Hn(n,t,e,i,{count:1500,color:[150,125,95],size:1.2,alpha:.2})}),$1=()=>Ie("marble",{tile:3},(n,t,e,i)=>{Pe(n,t,e,[238,233,224]),bn(n,t,e,i,{count:20,color:[220,214,204],radius:50,alpha:.5}),n.lineWidth=1.2;for(let s=0;s<16;s++){n.strokeStyle=`rgba(120, 112, 104, ${.08+i.next()*.14})`,n.beginPath();const r=i.next()*e;n.moveTo(-10,r),n.bezierCurveTo(t*.3,r+i.range(-60,60),t*.6,r+i.range(-60,60),t+10,r+i.range(-20,20)),n.stroke()}}),K1=()=>Ie("granite",{tile:2},(n,t,e,i)=>{Pe(n,t,e,[178,120,106]),Hn(n,t,e,i,{count:5e3,color:[70,45,45],size:2,alpha:.5}),Hn(n,t,e,i,{count:4e3,color:[235,215,205],size:1.8,alpha:.5})}),j1=()=>Ie("roof",{tile:2},(n,t,e,i)=>{Pe(n,t,e,[110,50,32]);const s=16;for(let r=0;r<e/s;r++){const o=r%2?s/2:0;for(let a=-s;a<t+s;a+=s){const l=[184+i.range(-20,20),92+i.range(-15,15),58+i.range(-10,10)],c=n.createLinearGradient(a+o,0,a+o+s,0);c.addColorStop(0,er(l.map(h=>h*.62))),c.addColorStop(.5,er(l)),c.addColorStop(1,er(l.map(h=>h*.62))),n.fillStyle=c,n.fillRect(a+o,r*s,s-1,s-2)}}}),J1=()=>Ie("lead",{tile:4},(n,t,e,i)=>{Pe(n,t,e,[140,148,152]),bn(n,t,e,i,{count:30,color:[120,130,132],radius:40,alpha:.4});for(let s=0;s<t;s+=32){n.fillStyle="rgba(60, 66, 70, 0.55)",n.fillRect(s,0,2,e),n.fillStyle="rgba(210, 215, 218, 0.35)",n.fillRect(s+2,0,1,e);const r=s/32%2?32:0;for(let o=r;o<e;o+=64)n.fillStyle="rgba(70, 76, 80, 0.4)",n.fillRect(s,o,32,1.5)}}),Q1=()=>Ie("bronzePlates",{tile:3},(n,t,e,i)=>{Pe(n,t,e,[120,84,40]);const s=64;for(let r=0;r<e;r+=s)for(let o=0;o<t;o+=s){n.fillStyle=vr(i,[214,168,80],.25),n.fillRect(o+2,r+2,s-4,s-4),n.fillStyle="rgba(255, 236, 170, 0.35)",n.fillRect(o+6,r+6,s-20,3),n.fillStyle="rgba(70, 45, 20, 0.8)";for(const[a,l]of[[8,8],[s-10,8],[8,s-10],[s-10,s-10]])n.fillRect(o+a,r+l,3,3)}}),mu=()=>Ie("wood",{tile:2},(n,t,e,i)=>{Pe(n,t,e,[92,62,38]);for(let s=0;s<e;s+=16){n.fillStyle=vr(i,[132,92,58],.25),n.fillRect(0,s+1,t,14),n.strokeStyle="rgba(70, 45, 25, 0.35)";for(let r=0;r<3;r++){n.beginPath();const o=s+3+i.next()*10;n.moveTo(0,o),n.bezierCurveTo(t*.3,o+i.range(-2,2),t*.7,o+i.range(-2,2),t,o),n.stroke()}}}),tx=()=>Ie("sail",{tile:4},(n,t,e,i)=>{Pe(n,t,e,[238,226,198]),bn(n,t,e,i,{count:20,color:[220,204,170],radius:40,alpha:.4});for(let s=0;s<t;s+=32)n.fillStyle="rgba(160, 140, 110, 0.4)",n.fillRect(s,0,1.5,e)}),ex=()=>Ie("grass",{tile:6},(n,t,e,i)=>{Pe(n,t,e,[112,132,72]),bn(n,t,e,i,{count:50,color:[88,112,58],radius:30,alpha:.45}),bn(n,t,e,i,{count:40,color:[150,160,90],radius:26,alpha:.35}),Hn(n,t,e,i,{count:5e3,color:[80,100,50],size:1.6,alpha:.35})}),nx=()=>Ie("sand",{tile:4},(n,t,e,i)=>{Pe(n,t,e,[216,192,145]),bn(n,t,e,i,{count:30,color:[200,172,125],radius:30,alpha:.4}),Hn(n,t,e,i,{count:4e3,color:[170,145,105],size:1.3,alpha:.4})}),ix=()=>Ie("dirt",{tile:4},(n,t,e,i)=>{Pe(n,t,e,[150,122,90]),bn(n,t,e,i,{count:40,color:[120,98,72],radius:30,alpha:.4}),Hn(n,t,e,i,{count:4e3,color:[90,75,60],size:2,alpha:.4})}),sx=()=>Ie("paving",{tile:3},(n,t,e,i)=>{Pe(n,t,e,[150,140,122]),qr(n,t,i,{top:0,bottom:e,courseHeight:42.67,minLength:40,maxLength:80,mortar:3,color:[200,190,168],amount:.12}),Hn(n,t,e,i,{count:2e3,color:[120,110,95],size:1.3,alpha:.25})}),rx=()=>Ie("mosaic",{tile:8,width:512},(n,t,e,i)=>{const s=[[226,214,190],[176,64,46],[52,84,110],[196,150,60],[70,110,70],[40,34,30]];for(let r=0;r<e;r+=4)for(let o=0;o<t;o+=4){const a=o<24||r<24||o>t-28||r>e-28,l=Math.hypot(o-t/2,r-e/2)<70&&i.chance(.7),c=a?s[(o+r>>3)%3===0?1:3]:l?i.pick(s.slice(1)):s[0];n.fillStyle=vr(i,c,.15),n.fillRect(o,r,3.5,3.5)}}),ox=()=>Ie("cityGround",{tile:10},(n,t,e,i)=>{Pe(n,t,e,[226,210,174]),bn(n,t,e,i,{count:20,color:[214,194,152],radius:60,alpha:.18})}),ax=()=>Ie("mapMeadow",{tile:36},(n,t,e,i)=>{Pe(n,t,e,[134,168,84]),bn(n,t,e,i,{count:16,color:[118,154,72],radius:80,alpha:.22}),bn(n,t,e,i,{count:10,color:[160,178,96],radius:70,alpha:.18})}),lx=()=>{const n=Ie("hieroglyphs",{width:128,height:1024},(t,e,i,s)=>{Pe(t,e,i,[182,122,106]),Hn(t,e,i,s,{count:7e3,color:[80,50,48],size:2,alpha:.45}),Hn(t,e,i,s,{count:5e3,color:[236,214,204],size:1.6,alpha:.45}),t.strokeStyle=t.fillStyle="rgba(78, 44, 38, 0.75)",t.lineWidth=3,t.strokeRect(38,40,52,i-60);for(let r=60;r<i-50;r+=38)switch(t.beginPath(),s.int(0,5)){case 0:t.arc(64,r+14,9,0,Math.PI*2),t.stroke();break;case 1:t.ellipse(64,r+16,7,14,0,0,Math.PI*2),t.stroke(),t.fillRect(52,r+30,24,3);break;case 2:t.arc(60,r+8,5,0,Math.PI*2),t.fill(),t.moveTo(60,r+12),t.lineTo(76,r+28),t.lineTo(52,r+28),t.fill();break;case 3:for(let a=0;a<3;a++){t.moveTo(50,r+8+a*8);for(let l=0;l<4;l++)t.lineTo(54+l*8,r+(l%2?4:12)+a*8)}t.stroke();break;case 4:t.arc(64,r+8,6,0,Math.PI*2),t.moveTo(64,r+14),t.lineTo(64,r+32),t.moveTo(54,r+19),t.lineTo(74,r+19),t.stroke();break;default:t.fillRect(50,r+8,28,5),t.fillRect(61,r+15,6,16);break}});return n.wrapS=lr,n.repeat.set(4,1),n},cx=n=>Ie(`flag-${n}`,{width:128,height:80},(t,e,i)=>{switch(n){case"genoa":Pe(t,e,i,[244,240,232]),t.fillStyle="#c0182a",t.fillRect(e*.42,0,e*.16,i),t.fillRect(0,i*.38,e,i*.24);break;case"venice":Pe(t,e,i,[150,22,34]),t.fillStyle="#e9b949",t.beginPath(),t.arc(e*.38,i*.36,11,0,Math.PI*2),t.fill(),t.fillRect(e*.3,i*.45,e*.3,i*.2),t.beginPath(),t.moveTo(e*.45,i*.45),t.lineTo(e*.72,i*.18),t.lineTo(e*.62,i*.5),t.fill(),t.fillRect(e*.32,i*.65,4,14),t.fillRect(e*.54,i*.65,4,14);break;default:Pe(t,e,i,[150,24,36]),t.fillStyle="#efc458",t.fillRect(e*.45,0,e*.1,i),t.fillRect(0,i*.42,e,i*.16),t.font="bold 26px Georgia, serif",t.textAlign="center",t.textBaseline="middle";for(const[s,r]of[[.22,.22],[.78,.22],[.22,.8],[.78,.8]])t.fillText("B",e*s,i*r)}}),hx=`
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
`,ux=`
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
`,Zd=new Set;function $d({scale:n=1,deep:t=2052200,shallow:e=3968152,sky:i=13032418}={}){const s=new ni({uniforms:Md.merge([dt.fog,{uTime:{value:0},uScale:{value:n},uDeep:{value:new Wt(t)},uShallow:{value:new Wt(e)},uSky:{value:new Wt(i)},uSunDir:{value:new C(-.55,.55,.62).normalize()}}]),vertexShader:hx,fragmentShader:ux,fog:!0});return Zd.add(s),s}function dx(n){for(const t of Zd)t.uniforms.uTime.value=n}const ee=n=>new Ee({roughness:.88,metalness:0,...n}),v={banded:ee({map:q1()}),stone:ee({map:fu()}),stoneDark:ee({map:fu(),color:10195330}),marble:ee({map:$1(),roughness:.45}),brick:ee({map:Z1()}),plaster:ee({map:pu()}),plasterOchre:ee({map:pu(),color:15778970}),granite:ee({map:K1(),roughness:.5}),hieroglyphs:ee({map:lx(),roughness:.5}),porphyry:ee({color:7218232,roughness:.4}),roof:ee({map:j1(),roughness:.75}),lead:ee({map:J1(),roughness:.5,metalness:.4}),gold:ee({color:14725194,metalness:1,roughness:.28}),bronze:ee({color:8804655,metalness:.9,roughness:.42}),gildedBronze:ee({map:Q1(),metalness:.75,roughness:.35}),iron:ee({color:3684155,metalness:.85,roughness:.5}),wood:ee({map:mu()}),hull:ee({map:mu(),color:13674114,side:ln}),sail:ee({map:tx(),side:ln,roughness:1}),imperialPurple:ee({color:6037347,side:ln}),rope:ee({color:9074002}),opening:ee({color:1775122,roughness:1}),fire:new Ac({color:16757575}),grass:ee({map:ex()}),sand:ee({map:nx()}),dirt:ee({map:ix()}),paving:ee({map:sx()}),mosaic:ee({map:rx(),roughness:.6}),foliage:ee({color:3033644}),foliageLight:ee({color:5928e3}),trunk:ee({color:5980977}),water:$d({scale:.12}),waterSide:ee({color:2051939,roughness:.3})},Mi=new Map;function dr(n,t){const e=`${n}:${t}`;if(!Mi.has(e)){const i=v[n].clone();i.color=new Wt(t),Mi.set(e,i)}return Mi.get(e)}function fs(n){const t=`cloth:${n}`;return Mi.has(t)||Mi.set(t,ee({color:n,side:ln,roughness:.95})),Mi.get(t)}function fx(n){const t=`banner:${n}`;return Mi.has(t)||Mi.set(t,ee({map:cx(n),side:ln,roughness:.95})),Mi.get(t)}function io(n,t=!1){const e=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},o={},a=n[0].morphTargetsRelative,l=new Ae;let c=0;for(let h=0;h<n.length;++h){const u=n[h];let d=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in u.attributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(u.attributes[f]),d++}if(d!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in u.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(u.morphAttributes[f])}if(t){let f;if(e)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,h),c+=f}}if(e){let h=0;const u=[];for(let d=0;d<n.length;++d){const f=n[d].index;for(let p=0;p<f.count;++p)u.push(f.getX(p)+h);h+=n[d].attributes.position.count}l.setIndex(u)}for(const h in r){const u=gu(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(const h in o){const u=o[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let d=0;d<u;++d){const f=[];for(let _=0;_<o[h].length;++_)f.push(o[h][_][d]);const p=gu(f);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(p)}}return l}function gu(n){let t,e,i,s=-1,r=0;for(let c=0;c<n.length;++c){const h=n[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=h.normalized),i!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}const o=new t(r),a=new Sn(o,e,i);let l=0;for(let c=0;c<n.length;++c){const h=n[c];if(h.isInterleavedBufferAttribute){const u=l/e;for(let d=0,f=h.count;d<f;d++)for(let p=0;p<e;p++){const _=h.getComponent(d,p);a.setComponent(d+u,p,_)}}else o.set(h.array,l);l+=h.count*e}return s!==void 0&&(a.gpuType=s),a}function xr(n,t,e){const i=n.attributes.uv;for(let s=0;s<i.count;s++)i.setXY(s,i.getX(s)*t,i.getY(s)*e);return n}function cn(n,t,e){const i=new $i(n,t,e),s=[[e,t],[e,t],[n,e],[n,e],[n,t],[n,t]],r=i.attributes.uv;for(let o=0;o<6;o++)for(let a=0;a<4;a++){const l=o*4+a;r.setXY(l,r.getX(l)*s[o][0],r.getY(l)*s[o][1])}return i.translate(0,t/2,0)}function un(n,t,e,i=16,{open:s=!1,thetaStart:r=0,thetaLength:o=Math.PI*2}={}){const a=new Ei(n,t,e,i,1,s,r,o),l=Math.max(n,t),c=(i+1)*2,h=a.attributes.uv;for(let u=0;u<h.count;u++)u<c?h.setXY(u,h.getX(u)*l*o,h.getY(u)*e):h.setXY(u,h.getX(u)*2*l,h.getY(u)*2*l);return a.translate(0,e/2,0)}function Nc(n,t,e=16){const i=new _r(n,t,e);return xr(i,Math.PI*2*n,Math.hypot(n,t)),i.translate(0,t/2,0)}function Kd(n,{heightScale:t=1,segments:e=24,phiLength:i=Math.PI*2}={}){const s=new ii(n,e,Math.max(4,Math.round(e/3)),0,i,0,Math.PI/2);return xr(s,n*i,n*Math.PI/2),s.scale(1,t,1)}function px(n,t,e){const i=new _r(Math.SQRT1_2,1,4).rotateY(Math.PI/4).scale(n,e,t);return xr(i,(n+t)*2,Math.hypot(e,Math.max(n,t)/2)),i.translate(0,e/2,0)}function mx(n,t,e,i=.5){const s=t/2+i,r=new Qe([new et(-s,0),new et(s,0),new et(0,e)]);return new ri(r,{depth:n+i*2,bevelEnabled:!1}).rotateY(Math.PI/2).translate(-(n/2+i),0,0)}function Oc(n,t,e,i=.5){if(n<t)return Oc(t,n,e,i).rotateY(Math.PI/2);const s=n/2+i,r=t/2+i,o=Math.max(s-r,0),a=[-s,0,-r],l=[s,0,-r],c=[s,0,r],h=[-s,0,r],u=[-o,e,0],d=[o,e,0],f=[[h,c,d],[h,d,u],[l,a,u],[l,u,d],[a,h,u],[c,l,d],[a,l,c],[a,c,h]],p=[],_=[];for(const[m,y]of f.entries()){const M=m===4||m===5;for(const[x,L,A]of y)p.push(x,L,A),_.push(M?A:x,L*1.6)}const g=new Ae;return g.setAttribute("position",new Vt(p,3)),g.setAttribute("uv",new Vt(_,2)),g.computeVertexNormals(),g}function Fc(n,t,e=0,i=0){const s=n/2,r=new Qe;return r.moveTo(e-s,i),r.lineTo(e+s,i),r.lineTo(e+s,i+t-s),r.absarc(e,i+t-s,s,0,Math.PI,!1),r.lineTo(e-s,i),r}function yi(n,t){return new Ms(Fc(n,t),6)}function Vn({length:n,height:t,thickness:e,openings:i=[],curveSegments:s=10}){const r=n/2,o=[...i].sort((c,h)=>c.x-h.x),a=new Qe;a.moveTo(-r,0);for(const{x:c,width:h,bottom:u,spring:d}of o){if(u>0)continue;const f=h/2;a.lineTo(c-f,0),a.lineTo(c-f,d),a.absarc(c,d,f,Math.PI,0,!0),a.lineTo(c+f,0)}a.lineTo(r,0),a.lineTo(r,t),a.lineTo(-r,t),a.lineTo(-r,0);for(const{x:c,width:h,bottom:u,spring:d}of o)u<=0||a.holes.push(Fc(h,d-u+h/2,c,u));return new ri(a,{depth:e,bevelEnabled:!1,curveSegments:s}).translate(0,0,-e/2)}function Gi(n,t,{width:e,bottom:i=0,spring:s,margin:r=0}){const a=(n-r*2)/t;return Array.from({length:t},(l,c)=>({x:-n/2+r+a*(c+.5),width:e,bottom:i,spring:s}))}function jd(n,t,e=t+2){const i=new Qe(n.map(([r,o])=>new et(r,-o)));return new ri(i,{depth:e,bevelEnabled:!1}).rotateX(-Math.PI/2).translate(0,t-e,0)}function Me(n,{merlon:t=.9,gap:e=.7,height:i=1.1,thickness:s=.7}={}){const r=Math.max(1,Math.floor((n+e)/(t+e))),o=r*t+(r-1)*e,a=[];for(let l=0;l<r;l++)a.push(cn(t,i,s).translate(-o/2+t/2+l*(t+e),0,0));return io(a)}function Bc(n,{count:t=16,merlon:e=.9,height:i=1.1,thickness:s=.7}={}){const r=[];for(let o=0;o<t;o++){const a=o/t*Math.PI*2,l=cn(e,i,s);l.rotateY(Math.PI/2-a),l.translate(Math.cos(a)*n,0,Math.sin(a)*n),r.push(l)}return io(r)}function gx(n,t,e,i=.6,s=8){const r=[],o=[],a=[];let l=0;for(let u=0;u<=s;u++){a[u]=[];for(let d=0;d<=s-u;d++){const f=u/s,p=d/s,_=1-f-p,g=i*27*f*p*_;r.push(n.x*_+t.x*f+e.x*p,n.y*_+t.y*f+e.y*p,n.z*_+t.z*f+e.z*p+g),o.push(f*4,p*4),a[u][d]=l++}}const c=[];for(let u=0;u<s;u++)for(let d=0;d<s-u;d++)c.push(a[u][d],a[u+1][d],a[u][d+1]),d<s-u-1&&c.push(a[u+1][d],a[u+1][d+1],a[u][d+1]);const h=new Ae;return h.setAttribute("position",new Vt(r,3)),h.setAttribute("uv",new Vt(o,2)),h.setIndex(c),h.computeVertexNormals(),h}function _x(n,t,e=.8){const i=new wi(n,t,8,8).translate(0,t/2,0),s=i.attributes.position;for(let r=0;r<s.count;r++){const o=s.getX(r)/n+.5,a=s.getY(r)/t;s.setZ(r,e*Math.sin(Math.PI*o)*Math.sin(Math.PI*Math.min(1,a*1.1)))}return xr(i,n,t),i.computeVertexNormals(),i}function $(n,t,e=0,i=0,s=0){const r=new fe(n,t);return r.position.set(e,i,s),r.castShadow=!0,r.receiveShadow=!0,r}const U=(n,t,e,i,s,r,o)=>$(cn(n,t,e),i,s,r,o),ht=(n,t,e,i,s,r,o,a=16,l)=>$(un(n,t,e,a,l),i,s,r,o),Ma=(n,t,e,i,s,r,o=16)=>$(Nc(n,t,o),e,i,s,r),we=(n,t,e,i,s,r)=>$(Kd(n,r),t,e,i,s),zc=(n,t,e,i,s,r,o)=>$(px(n,t,e),i,s,r,o),Gn=(n,t,e,i,s,r,o,a)=>$(mx(n,t,e,a),i,s,r,o),Tn=(n,t,e,i,s,r,o,a)=>$(Oc(n,t,e,a),i,s,r,o);function ye(n,t,e,i=0,s=0,r=0){const o=xr(new wi(n,t).rotateX(-Math.PI/2),n,t);return $(o,e,i,s,r)}function vx(n,t=3){const e=new xt;return e.add($(new eo(n,64).rotateX(-Math.PI/2),v.water)),e.add($(new Ei(n,n,t,64,1,!0).translate(0,-t/2,0),v.waterSide)),e}function qe(n,t,e){return n.rotation.y=Math.atan2(t,e),n}function zn(n,t,e,i=0,s=0,r=0){return n.position.set(s+Math.cos(t)*e,i,r+Math.sin(t)*e),n.rotation.y=Math.PI/2-t,n}function ze({count:n,spacing:t,width:e,height:i,y:s=0,skip:r=()=>!1,material:o=v.opening}){const a=new xt,l=yi(e,i);for(let c=0;c<n;c++){const h=(c-(n-1)/2)*t;r(h)||a.add($(l,o,h,s,0))}return a}function wn({length:n,count:t,height:e,radius:i=.4,material:s=v.marble,capitalMaterial:r=s}){const o=new xt,a=un(i*.85,i,e-i*1.6,10),l=cn(i*2.4,i*.6,i*2.4),c=un(i*1.6,i*.9,i,10),h=t>1?n/(t-1):0;for(let u=0;u<t;u++){const d=-n/2+h*u;o.add($(l,s,d,0,0)),o.add($(a,s,d,i*.6,0)),o.add($(c,r,d,e-i,0))}return o}function xx(n,t,e,i,s=v.stone){const r=new xt;for(let o=0;o<t;o++)r.add(U(n,e*(o+1),i,s,0,0,o*i+i/2));return r}const Mx=Nc(1,1,8),Jd=un(.15,.2,1,6),yx=new va(1,1);function Ki(n=12,t=0,e=0,i=0){const s=new xt,r=$(Jd,v.trunk);r.scale.set(n/12,n*.12,n/12);const o=$(Mx,v.foliage,0,n*.1,0);return o.scale.set(n*.13,n*.9,n*.13),s.add(r,o),s.position.set(t,e,i),s}function so(n=8,t=0,e=0,i=0){const s=new xt,r=$(Jd,v.trunk);r.scale.set(n/8,n*.5,n/8);const o=$(yx,v.foliageLight,0,n*.62,0);return o.scale.set(n*.36,n*.32,n*.36),s.add(r,o),s.position.set(t,e,i),s}function Qd({base:n,top:t,height:e,tip:i,strips:s=24}){const r=[{normal:[1,0,0],right:[0,0,-1]},{normal:[0,0,1],right:[1,0,0]},{normal:[-1,0,0],right:[0,0,1]},{normal:[0,0,-1],right:[-1,0,0]}],o=[],a=[],l=new Ae,c=({normal:d,right:f},p,_,g)=>[d[0]*p+f[0]*p*_,g,d[2]*p+f[2]*p*_],h=d=>(n+(t-n)*d)/2;r.forEach((d,f)=>{const p=o.length/3;for(let _=0;_<s;_++){const g=_/s,m=(_+1)/s,y=c(d,h(g),-1,e*g),M=c(d,h(g),1,e*g),x=c(d,h(m),1,e*m),L=c(d,h(m),-1,e*m);o.push(...y,...M,...x,...y,...x,...L),a.push(0,g,1,g,1,m,0,g,1,m,0,m)}l.addGroup(p,s*6,f)});const u=o.length/3;for(const d of r)o.push(...c(d,t/2,-1,e),...c(d,t/2,1,e),0,e+i,0),a.push(0,0,1,0,.5,1);return l.addGroup(u,r.length*3,r.length),l.setAttribute("position",new Vt(o,3)),l.setAttribute("uv",new Vt(a,2)),l.computeVertexNormals(),l}function bi(n,{width:t=3,height:e=2,pole:i=6}={}){const s=new xt;s.add(ht(.08,.1,i,v.wood,0,0,0,6));const r=new wi(t,e,10,4).translate(t/2,0,0),o=new fe(r,fx(n));o.position.y=i-e/2-.1,o.castShadow=!0,s.add(o);const a=r.attributes.position.array.slice(),l=r.attributes.position,c=Math.random()*10;return s.userData.animate=h=>{for(let u=0;u<l.count;u++){const d=a[u*3];l.setZ(u,Math.sin(d*1.6-h*4+c)*.12*d)}l.needsUpdate=!0},s}function Zs([n,t],e=0){return new C(n,e,-t)}function Nn([n,t],e){let i=!1;for(let s=0,r=e.length-1;s<e.length;r=s++){const[o,a]=e[s],[l,c]=e[r];a>t!=c>t&&n<(l-o)*(t-a)/(c-a)+o&&(i=!i)}return i}function Sx([n,t],[e,i],[s,r]){const o=s-e,a=r-i,l=o*o+a*a,c=l===0?0:Math.max(0,Math.min(1,((n-e)*o+(t-i)*a)/l));return Math.hypot(n-(e+c*o),t-(i+c*a))}function nr(n,t,e=!1){let i=1/0;const s=e?t.length:t.length-1;for(let r=0;r<s;r++)i=Math.min(i,Sx(n,t[r],t[(r+1)%t.length]));return i}function tf(n,t){const e=[];let i=0,s=0;for(let r=1;r<n.length;r++){const[o,a]=n[r-1],[l,c]=n[r],h=Math.hypot(l-o,c-a),u=[(l-o)/h,(c-a)/h];for(;s<=i+h;){const d=s-i;e.push({point:[o+u[0]*d,a+u[1]*d],dir:u}),s+=t}i+=h}return e}function Ex(n,t){return n.map((e,i)=>{const s=n[Math.max(0,i-1)],r=n[Math.min(n.length-1,i+1)],o=r[0]-s[0],a=r[1]-s[1],l=Math.hypot(o,a)||1;return[e[0]-a/l*t,e[1]+o/l*t]})}const ya=.01,hn=.3,Fi=400,$s=[-3,-3],bx=.6,Tx=10,ef=n=>1+bx*Math.exp(-((n/Tx)**2));function ge([n,t]){const[e,i]=[n-$s[0],t-$s[1]],s=ef(Math.hypot(e,i));return[$s[0]+e*s,$s[1]+i*s]}const wx=([n,t])=>ef(Math.hypot(n-$s[0],t-$s[1])),Ve=n=>n.map(ge),sl=n=>[...n].reverse(),kc=Ve([[-31.9,36.6],[-29.7,35.9],[-27.9,31.4],[-26,29.7],[-25.6,26.4],[-23.3,24.9],[-22.7,22.9],[-19.1,22],[-17.2,19.7],[-16.6,17.8],[-14.4,15.9],[-13.8,14.1],[-12,13.1],[-8.9,12.3],[-7.4,10.8],[-5.9,10.8],[-2.8,9],[1.3,9],[4.3,10.2],[5.5,9.7]]),Hc=Ve([[5.5,9.7],[6.6,4.9],[6.4,1.8],[4.9,-2.5],[1.5,-6.2],[-.1,-7.3],[-2,-8.2],[-6,-8.5],[-10.9,-7.2],[-14.5,-7.6],[-20,-8.2],[-26,-8.6],[-31,-8.2],[-34.8,-7.6],[-38,-9.7],[-40.2,-14.8],[-43.5,-19.2],[-46.6,-22.6],[-50.3,-23]]),_i=Ve([[-50.3,-23],[-50.2,-20.6],[-48.6,-17.6],[-48.8,-16],[-50.1,-9.6],[-49,-3],[-48.3,.4],[-48.8,6.1],[-46.9,11.8],[-42.9,17.3],[-38.6,22.6],[-34,27.4]]),Ax=ge([-48.7,-17.4]),nf=Ve([[-34,27.4],[-34.5,29.3],[-34.4,32],[-32.7,33.6],[-32.3,34.6],[-31.9,36.6]]),Wi=[...kc,...Hc,..._i.slice(1),...nf.slice(1,-1)],sa=[...kc,...Hc],ra=Ve([[-9.9,17],[-8.4,19.6],[-5.1,18.9],[-1.6,18.9],[1.2,17.6]]),Zr=Ve([[1.2,17.6],[-2.9,14.7],[-5.1,14.7],[-8.6,15.3],[-9.9,17]]),Qo=[...ra,...Zr.slice(1,-1)],Rx=ge([-5.1,18.9]),Cx=Ve([[-Fi,-48],[-86,-38],[-76,-32],[-66,-32.5],[-60.3,-30.3],[-57.5,-25.3],[-54.6,-23.8],[-50.3,-23]]),Px=Ve([[-31.9,36.6],[-32.6,36.9],[-34,37.7],[-35.5,43],[-37.9,45.8],[-37.6,48],[-34.4,51.9],[-28.2,53.7],[-28.7,57.4],[-30,61.5],[-29,63],[-27.6,62.6],[-27.7,59.1],[-26.7,54.4],[-27.3,52.1],[-33.5,48.8],[-34.6,45.3],[-32.5,41],[-28.1,38.3],[-26.5,35.9],[-24.7,32.1],[-23.1,29.7],[-20.6,28],[-16.2,28.1],[-12.9,24.6],[-10.8,22.6],[-11.9,21.6],[-10.9,18.1],[-9.9,17]]),Lx=Ve([[1.2,17.6],[7,21.7],[10,26.7],[11.4,29.3],[13.9,32.1],[30.8,38.8],[37.5,43],[44.2,45.7],[47.4,56.6],[50.9,60.3],[52.1,64.6],[55.6,65.9],[53.7,73.8],[54,77],[62.6,80.6],[63.5,85],[64.5,106],[74,124],[66,146],[65,177],[80,240],[100,Fi]]),sf=[...Cx,...sl(Hc).slice(1),...sl(kc).slice(1),...Px.slice(1),...sl(Zr).slice(1),...Lx.slice(1),[-Fi,Fi]],Or=Ve([[110,Fi],[104,160],[100,135],[83,112],[73,100],[71,83],[70.6,77],[63.7,73.1],[64.5,64.3],[60.7,58.8],[61.4,54.3],[60,50.6],[60.4,44.1],[50.8,38.8],[35.3,26],[31.4,23.7],[27.8,19.6],[24.6,19.3],[22.9,17.2],[22.1,14.3],[23.9,11.8],[25.3,8.3],[26,4.9],[24.9,.7],[25.6,-2.5],[27.6,-6.3],[30.6,-9.8],[33.2,-12.6],[35.2,-14.1],[36.7,-15.6],[36.4,-17.6],[34.6,-20.2],[33.6,-25.9],[33.3,-30.5],[34.6,-33],[37.5,-32.1],[41.4,-32.1],[45,-29.6],[48.7,-33.4],[49.8,-36.4],[48.6,-40.5],[45.8,-42.2],[43.3,-45.3],[45.6,-46.8],[48.2,-44.2],[51.8,-47.7],[54.8,-43.4],[59.3,-44.8],[61.5,-47],[65.6,-49.6],[69.1,-51.7],[76.4,-54.2],[Fi,-75],[Fi,Fi]]),_u=Ve([[24.5,12.5],[31,12.5],[34,22],[28,20]]),vu=Ve([[36.5,-14.5],[44,-15],[44,-28],[35,-29]]),rf=[-12,1.25],rc=Ve([[-1.5,.3],rf,[-19.5,4],[-27,1],[-36.3,-5.7],[-43,-12],[-48.7,-17.4]]),oc=Ve([[-19.5,4],[-25.8,11.5],[-32,17],[-38.4,22.8]]),Ix=ge(rf),Dx=[{at:[2,2],height:1.5,radius:4},{at:[-11.5,1],height:1.4,radius:3.5},{at:[-14,8.2],height:1.7,radius:4},{at:[-25.8,12],height:1.8,radius:4.5},{at:[-25.8,21],height:1.5,radius:3.5},{at:[-38.8,24.3],height:1.9,radius:4.5},{at:[-38,-6.2],height:1.4,radius:6}].map(({at:n,height:t,radius:e})=>({at:ge(n),height:t,radius:e*wx(n)})),Oo=ge([0,9]),Fo=ge([-2.4,14.7]),Ux=ge([20.1,13.9]),Nx=Ve([[-3,12],[-9,14.3],[-14,18],[-19.5,23.8],[-24.5,28.3],[-26.8,33],[-25.2,30.2],[-20.5,25.8],[-15,20.5],[-9.5,15.8],[-4,13.2]]),xu=Ve([[-50,-32],[-10,-22],[18,-18],[24,-30],[-15,-38]]),Mu=Ve([[14,2],[15,20],[29,32],[42,40],[45,37.5],[33,28],[19,16],[20,2]]),Ox=[{id:"golden-horn",at:ge([-21,25.5])},{id:"bosphorus",at:ge([22,30])},{id:"propontis",at:ge([-18,-25])}],Fx=[{id:"mese",at:ge([-44,-10])}];function Bx(n){const t=new xt,e=new fe(new wi(2e3,2e3).rotateX(-Math.PI/2),$d({scale:.45,deep:1794691,shallow:3839913,sky:11129822}));t.add(e);for(const r of[sf,Or])t.add(Vx(r));const i=new Ee({map:ox(),roughness:.95,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2});for(const r of[Wi,Qo])t.add(Gx(r,i,.01));t.add(zx(n,i));const s=new Ee({color:15918792,roughness:.9,polygonOffset:!0,polygonOffsetFactor:-6,polygonOffsetUnits:-6});for(const r of[rc,oc])t.add($(kx(r,.4,n),s));return t}function zx(n,t){const i=Wi.map(([M])=>M),s=Wi.map(([,M])=>M),[r,o,a,l]=[Math.min(...i),Math.max(...i),Math.min(...s),Math.max(...s)],c=Math.ceil((o-r)/.35)+1,h=Math.ceil((l-a)/.35)+1,u=[],d=[],f=[];for(let M=0;M<h;M++)for(let x=0;x<c;x++){const L=r+x*.35,A=a+M*.35,R=n.heightAt([L,A]);f.push(R),u.push(L,hn+.01+R,-A),d.push(L,A)}const p=[],_=(M,x)=>x*c+M,g=(M,x,L)=>{if(Math.max(f[M],f[x],f[L])<.004)return!1;const A=[(u[M*3]+u[x*3]+u[L*3])/3,-(u[M*3+2]+u[x*3+2]+u[L*3+2])/3];return Nn(A,Wi)};for(let M=0;M<h-1;M++)for(let x=0;x<c-1;x++){const[L,A,R,I]=[_(x,M),_(x+1,M),_(x+1,M+1),_(x,M+1)];g(L,A,R)&&p.push(L,A,R),g(L,R,I)&&p.push(L,R,I)}const m=new Ae;m.setAttribute("position",new Vt(u,3)),m.setAttribute("uv",new Vt(d,2)),m.setIndex(p),m.computeVertexNormals();const y=new fe(m,t.clone());return y.material.polygonOffsetFactor=y.material.polygonOffsetUnits=-4,y.receiveShadow=!0,y}function kx(n,t,e){const i=[],s=[];for(const[o,{point:[a,l],dir:[c,h]}]of tf(n,.3).entries()){const u=hn+.025+e.heightAt([a,l]),[d,f]=[-h*(t/2),c*(t/2)];if(i.push(a+d,u,-(l+f),a-d,u,-(l-f)),o>0){const p=(o-1)*2;s.push(p,p+1,p+2,p+1,p+3,p+2)}}const r=new Ae;return r.setAttribute("position",new Vt(i,3)),r.setIndex(s),r.computeVertexNormals(),r}const Hx=new Ee({map:ax(),roughness:.95});function Vx(n){const t=new Qe(n.map(([o,a])=>new et(o,a))),e=2,i=.5,s=new ri(t,{depth:e,bevelEnabled:!0,bevelThickness:i,bevelSize:.9,bevelSegments:2,curveSegments:1});s.rotateX(-Math.PI/2),s.translate(0,hn-e-i,0);const r=new fe(s,[Hx,v.sand]);return r.receiveShadow=!0,r}function Gx(n,t,e){const i=new Qe(n.map(([o,a])=>new et(o,a))),s=new Ms(i).rotateX(-Math.PI/2),r=new fe(s,t);return r.position.y=hn+e,r.receiveShadow=!0,r}const rl=(n,t,e)=>{const i=Math.min(1,Math.max(0,(e-n)/(t-n)));return i*i*(3-2*i)},yu=1.2;function Wx({footprints:n=[]}={}){const t=r=>{if(!Nn(r,Wi))return 0;const[o,a]=r;let l=0;for(const{at:[u,d],height:f,radius:p}of Dx)l+=f*Math.exp(-((o-u)**2+(a-d)**2)/(p*p));const c=rl(.6,3,nr(r,sa)),h=rl(1.2,4,Math.min(nr(r,_i),nr(r,nf)));return l*c*h},e=n.map(({centre:r,distance:o})=>({distance:o,level:t(r)})),i=r=>{let o=t(r);for(const{distance:a,level:l}of e){const c=a(r);c<yu&&(o+=(l-o)*(1-rl(0,yu,c)))}return o};return{heightAt:i,slopeAt:([r,o])=>[(i([r+.1,o])-i([r-.1,o]))/(2*.1),(i([r,o+.1])-i([r,o-.1]))/(2*.1)]}}const _s=new Ee({color:14206882,roughness:.9});function ir(n,{height:t,thickness:e,y:i=0,offset:s=0,towerSpacing:r=0,towerWidth:o=e*2,towerHeight:a=t*1.5,towerShape:l="square"}){const c=s?Ex(n,s):n,h=[];for(let u=1;u<c.length;u++){const[d,f]=c[u-1],[p,_]=c[u],g=cn(Math.hypot(p-d,_-f)+e,t,e);g.rotateY(Math.atan2(_-f,p-d)),g.translate((d+p)/2,i,-(f+_)/2),h.push(g)}if(r>0)for(const{point:u,dir:d}of tf(c,r)){const f=l==="round"?un(o/2,o/2,a,8):cn(o,a,o);f.rotateY(Math.atan2(d[1],d[0])),f.translate(u[0],i,-u[1]),h.push(f)}return io(h)}function Xx(n,{polygon:t,accept:e,orientation:i,builtChance:s=()=>.9,districtSpacing:r=8,block:o=[2.2,1.5],street:a=.26,height:l=[.17,.27],churchChance:c=.08}){const h={houses:[],trees:[],plots:[],churches:[]},u=Yx(n,t,r,i),d=Math.ceil(r*1.3/Math.min(...o));for(const f of u)for(let p=-d;p<=d;p++)for(let _=-d;_<=d;_++){const g=jn(f.point,p*o[0],_*o[1],f.angle);!Nn(g,t)||qx(u,g)!==f||Zx(n,h,{centre:g,angle:f.angle,length:o[0]-a,width:o[1]-a,built:n.next()<s(g),accept:e,polygon:t,height:l,churchChance:c})}return h}function Yx(n,t,e,i){const s=t.map(([a])=>a),r=t.map(([,a])=>a),o=[];for(let a=Math.min(...s)+e/2;a<Math.max(...s);a+=e)for(let l=Math.min(...r)+e/2;l<Math.max(...r);l+=e){const c=[a+n.range(-.35,.35)*e,l+n.range(-.35,.35)*e];Nn(c,t)&&o.push({point:c,angle:i(c)+n.range(-.1,.1)})}if(o.length===0){const a=[s.reduce((l,c)=>l+c)/s.length,r.reduce((l,c)=>l+c)/r.length];o.push({point:a,angle:i(a)})}return o}function qx(n,t){let e=null,i=1/0;for(const s of n){const r=Math.hypot(t[0]-s.point[0],t[1]-s.point[1]);r<i&&(e=s,i=r)}return e}function jn([n,t],e,i,s){const r=Math.cos(s),o=Math.sin(s);return[n+e*r-i*o,t+e*o+i*r]}function Zx(n,t,{centre:e,angle:i,length:s,width:r,built:o,accept:a,polygon:l,height:c,churchChance:h}){const u=[[-1,-1],[1,-1],[1,1],[-1,1]].map(([p,_])=>jn(e,p*s/2,_*r/2,i)),d=u.every(p=>Nn(p,l));if(!a(e)&&!u.some(a))return;let f=o?"built":n.pick(["garden","garden","orchard","field"]);if(f==="built"&&n.chance(h)&&a(e)&&u.every(a)&&(f="churchyard"),d&&a(e)&&t.plots.push({point:e,angle:i,length:s,width:r,kind:f}),f==="churchyard"){t.churches.push({point:e,angle:0,size:Math.min(.85,r*.75)});for(const p of[-1,1]){const _=jn(e,p*s*.38,-r*.32,i);t.trees.push({point:_,kind:"cypress",size:n.range(.4,.5)})}}else if(f==="built"){$x(n,t,{centre:e,angle:i,length:s,width:r,accept:a,height:c});for(let p=n.int(0,2);p>0;p--){const _=jn(e,n.range(-.25,.25)*s,n.range(-.15,.15)*r,i);a(_)&&t.trees.push({point:_,kind:n.chance(.3)?"cypress":"round",size:n.range(.24,.34)})}}else if(f==="garden"&&a(e))for(let p=n.int(3,7);p>0;p--){const _=jn(e,n.range(-.42,.42)*s,n.range(-.4,.4)*r,i);a(_)&&t.trees.push({point:_,kind:n.chance(.25)?"cypress":"round",size:n.range(.26,.4)})}else if(f==="orchard"&&a(e))for(let _=-s/2+.2;_<s/2-.14;_+=.28)for(let g=-r/2+.2;g<r/2-.14;g+=.28){const m=jn(e,_,g,i);a(m)&&t.trees.push({point:m,kind:"orchard",size:n.range(.15,.19)})}}function $x(n,t,{centre:e,angle:i,length:s,width:r,accept:o,height:a}){const l=n.range(.3,.38),c=[];for(const h of[-1,1])c.push({start:jn(e,-s/2,h*r/2,i),along:0,inward:[0,-h],span:s}),c.push({start:jn(e,h*s/2,-r/2+l,i),along:Math.PI/2,inward:[-h,0],span:r-2*l});for(const{start:h,along:u,inward:d,span:f}of c){const p=i+u;let _=0;for(;_<f-.18;){const g=Math.min(n.range(.32,.5),f-_),m=jn(h,_+g/2,0,p),y=jn(m,d[0]*l/2,d[1]*l/2,i);!n.chance(.05)&&o(y)&&t.houses.push({point:y,angle:p,w:g,d:l,h:n.range(...a),flat:n.chance(.3)}),_+=g+.02}}}function Kx(n){const e=Float32Array.from({length:256},()=>n.next()),i=Uint8Array.from({length:256},(a,l)=>l);for(let a=255;a>0;a--){const l=Math.floor(n.next()*(a+1));[i[a],i[l]]=[i[l],i[a]]}const s=(a,l)=>e[i[i[a&255]+l&255]],r=a=>a*a*(3-2*a),o=(a,l)=>{const c=Math.floor(a),h=Math.floor(l),u=r(a-c),d=r(l-h),f=s(c,h)+(s(c+1,h)-s(c,h))*u,p=s(c,h+1)+(s(c+1,h+1)-s(c,h+1))*u;return f+(p-f)*d};return(a,l,c=1,h=3)=>{let u=0,d=1,f=0;for(let p=0;p<h;p++)u+=o(a*c+p*17.3,l*c-p*9.1)*d,f+=d,d*=.5,c*=2;return u/f}}function jx(n,{bounds:[t,e,i,s],open:r,cemeteries:o=[]}){const a=Kx(n),l=d=>a(d[0],d[1],.045,4),c={houses:[],trees:[],plots:[],churches:[]},h=.55;for(let d=t;d<i;d+=h)for(let f=e;f<s;f+=h){const p=[d+n.range(-.4,.4)*h,f+n.range(-.4,.4)*h],_=l(p);!(_>.57||_>.52&&n.chance(.2))||!r(p,.8)||c.trees.push({point:p,kind:n.chance(.15)?"cypress":"round",size:n.range(.32,.48)})}const u=7;for(let d=t;d<i;d+=u)for(let f=e;f<s;f+=u){const p=[d+n.range(-.3,.3)*u,f+n.range(-.3,.3)*u];l(p)>.44||!r(p,2)||Jx(n,c,p,r)}for(const d of o){r(d,.5)&&c.churches.push({point:d,angle:0,size:.42});for(let f=0;f<22;f++){const p=[d[0]+n.range(-.9,.9),d[1]+n.range(-.9,.9)];Math.hypot(p[0]-d[0],p[1]-d[1])<.45||r(p,.6)&&c.trees.push({point:p,kind:"cypress",size:n.range(.3,.45)})}}return c}function Jx(n,t,e,i){const s=n.range(0,Math.PI),r=Math.cos(s),o=Math.sin(s),a=(f,p)=>[e[0]+f*r-p*o,e[1]+f*o+p*r],l=n.int(2,4),c=n.int(2,3),h=n.range(1.1,1.6),u=n.range(.8,1.2),d=.08;for(let f=0;f<l;f++)for(let p=0;p<c;p++){const _=(f-(l-1)/2)*(h+d),g=(p-(c-1)/2)*(u+d),m=a(_,g);if(i(m,.9)&&(t.plots.push({point:m,angle:s,length:h,width:u,kind:n.pick(["field","field","meadow","fallow"])}),n.chance(.3)))for(let y=-h/2;y<=h/2;y+=.3){const M=a(_+y,g+u/2+d/2);i(M,.6)&&n.chance(.75)&&t.trees.push({point:M,kind:"round",size:n.range(.22,.32)})}}if(n.chance(.4)){const f=a((l+1)/2*(h+d),0),p=[];n.chance(.3)&&i(f,.8)&&(t.churches.push({point:f,angle:0,size:n.range(.45,.55)}),p.push(f));for(let _=n.int(4,9);_>0;_--){const g=[f[0]+n.range(-.55,.55),f[1]+n.range(-.55,.55)];!i(g,.7)||p.some(m=>Math.hypot(g[0]-m[0],g[1]-m[1])<.45)||(p.push(g),t.houses.push({point:g,angle:s+n.pick([0,Math.PI/2]),w:n.range(.28,.4),d:n.range(.22,.3),h:n.range(.12,.18),flat:!1}))}}}function Qx({ground:n,keepOut:t=[]}){const e=Wn(330),i=h=>!t.some(u=>u(h)),s=(h,u,d)=>nr(h,u)>d,r=[{polygon:Wi,accept:h=>Nn(h,Wi)&&s(h,sa,.6)&&s(h,_i,1)&&s(h,rc,.3)&&s(h,oc,.3)&&i(h),orientation:ol([rc,oc,sa,_i]),builtChance:([h])=>.35+.58*Hi.smoothstep(h,-44,-22)},{polygon:Qo,accept:h=>Nn(h,Qo)&&s(h,ra,.4)&&s(h,Zr,.35)&&i(h),orientation:ol([Zr,ra]),districtSpacing:4,block:[1.7,1.25]},...[_u,vu].map(h=>({polygon:h,accept:u=>Nn(u,h)&&Nn(u,Or)&&s(u,Or,.6)&&i(u),orientation:ol([Or]),builtChance:()=>.75,districtSpacing:4,block:[1.7,1.25]}))],o={houses:[],trees:[],plots:[],churches:[]},a=h=>{for(const u of Object.keys(o))o[u].push(...h[u])};for(const h of r)a(Xx(e,h));const l=h=>[Wi,Qo,_u,vu].every(u=>!Nn(h,u)&&s(h,u.concat([u[0]]),.3));a(jx(e,{bounds:[-95,-45,85,90],open:(h,u)=>tM(h,u)&&l(h)&&s(h,_i,3.2)&&i(h),cemeteries:[[-53.5,-6],[-53,6],[-50.5,15],[-4,24]].map(ge)}));for(const h of Object.values(o).flat())h.y=hn+n.heightAt(h.point);const c=new xt;return c.add(oM(e,o.plots,n),sM(e,o.houses),cM(e,o.churches),rM(e,o.trees)),c.add(hM(),uM()),c}function ol(n){return([t,e])=>{let i=1/0,s=0;for(const r of n)for(let o=1;o<r.length;o++){const[a,l]=r[o-1],[c,h]=r[o],u=nr([t,e],[r[o-1],r[o]]);u<i&&(i=u,s=Math.atan2(h-l,c-a))}return s}}function tM(n,t){for(const e of[sf,Or])if(Nn(n,e))return nr(n,e,!0)>t;return!1}const on=(...n)=>n.map(t=>new Wt(t)),Fr=.06,Su=on(16446178,16115919,16644334,15785920,16180424),eM=on(12870463,12146746,13661260,11489848),nM={built:on(14468506),churchyard:on(15260864),garden:on(9417306,8825429),orchard:on(10271326),field:on(13221994,13943668,12107106),meadow:on(10009692,9221206),fallow:on(12889464,12296816)},Eu={round:on(6265408,7251528,5409848,7908686),orchard:on(8696400,9484888),cypress:on(3104308,3631418,2774320)};function Xi(n,t,e=.05){return t[Math.floor(n.next()*t.length)].clone().multiplyScalar(1-e/2+n.next()*e)}function iM(){const n=cn(1,1,1),t=n.attributes.position,e=[];for(let i=0;i<t.count;i++){const s=.7+.3*t.getY(i);e.push(s,s,s)}return n.setAttribute("color",new Vt(e,3)),n}function Yi(n,t,e){const i=new Pc(n,t,Math.max(1,e));return i.count=e,i.castShadow=i.receiveShadow=!0,i}function sr(n,t,e,i,s,r,o,a){const l=new _n().setFromAxisAngle(new C(0,1,0),s);return n.compose(new C(t,e,-i),l,new C(r,o,a))}function sM(n,t){const e=t.filter(c=>!c.flat),i=t.filter(c=>c.flat),s=Yi(iM(),new Ee({vertexColors:!0,roughness:.9}),t.length),r=Yi(Oc(2,1,1,0).scale(.5,1,1),new Ee({roughness:.75}),e.length),o=Yi(cn(1,1,1),new Ee({roughness:.9}),i.length),a=new Kt;t.forEach(({point:[c,h],y:u,angle:d,w:f,d:p,h:_},g)=>{s.setMatrixAt(g,sr(a,c,u-Fr,h,d,f,_+Fr,p)),s.setColorAt(g,Xi(n,Su))}),e.forEach(({point:[c,h],y:u,angle:d,w:f,d:p,h:_},g)=>{const[m,y,M]=f>=p?[f,p,0]:[p,f,Math.PI/2];r.setMatrixAt(g,sr(a,c,u+_,h,d+M,m*1.08,y*.42,y*1.12)),r.setColorAt(g,Xi(n,eM))}),i.forEach(({point:[c,h],y:u,angle:d,w:f,d:p,h:_},g)=>{o.setMatrixAt(g,sr(a,c,u+_,h,d,f*1.02,.012,p*1.02)),o.setColorAt(g,Xi(n,Su).multiplyScalar(.94))});const l=new xt;return l.add(s,r,o),l}function rM(n,t){const e=t.filter(h=>h.kind!=="cypress"),i=t.filter(h=>h.kind==="cypress"),s=new Ee({roughness:.95,flatShading:!0}),r=Yi(new va(1,0),s,e.length),o=Yi(Nc(1,1,7),s,i.length),a=Yi(un(.5,.6,1,5),new Ee({color:7032888,roughness:1}),e.length),l=new Kt;e.forEach(({point:[h,u],y:d,kind:f,size:p},_)=>{const g=p*.35;a.setMatrixAt(_,sr(l,h,d-.02,u,0,p*.09,g+.02,p*.09)),r.setMatrixAt(_,sr(l,h,d+g+p*.3,u,n.range(0,Math.PI),p*.5,p*.42,p*.5)),r.setColorAt(_,Xi(n,Eu[f],.1))}),i.forEach(({point:[h,u],y:d,size:f},p)=>{o.setMatrixAt(p,sr(l,h,d-.02,u,n.range(0,Math.PI),f*.16,f*1.3,f*.16)),o.setColorAt(p,Xi(n,Eu.cypress,.1))});const c=new xt;return c.add(a,r,o),c}function oM(n,t,e){const i=Yi(cn(1,1,1),new Ee({roughness:1}),t.length);i.castShadow=!1;const s=new Kt,r=new C(0,1,0),o=new C,a=new _n,l=new _n;return t.forEach(({point:c,y:h,angle:u,length:d,width:f,kind:p},_)=>{const[g,m]=e.slopeAt(c);a.setFromUnitVectors(r,o.set(-g,1,m).normalize()),l.setFromAxisAngle(r,u),s.compose(new C(c[0],h-.02,-c[1]),a.multiply(l),new C(d,.05,f)),i.setMatrixAt(_,s),i.setColorAt(_,Xi(n,nM[p],.06))}),i}const bu=[{name:"body",geometry:cn(1,1,1),offset:[0,0,0],scale:[1,.42,.78]},{name:"nave",geometry:cn(1,1,1),offset:[0,0,0],scale:[1.02,.6,.34]},{name:"transept",geometry:cn(1,1,1),offset:[0,0,0],scale:[.34,.6,.82]},{name:"apse",geometry:un(1,1,1,10),offset:[.5,0,0],scale:[.17,.38,.17]},{name:"drum",geometry:un(1,1,1,12),offset:[0,.6,0],scale:[.16,.13,.16]},{name:"dome",geometry:Kd(1,{segments:12}),offset:[0,.73,0],scale:[.165,.16,.165]}],aM=on(14258022,15120778,15917762,13600096),lM=on(9413549,10465464,12870463);function cM(n,t){const e=new Ee({roughness:.85}),i=new Ee({roughness:.55,metalness:.2}),s=bu.map(({name:c,geometry:h})=>Yi(h,c==="dome"?i:e,t.length)),r=new Kt,o=new Kt,a=new _n;t.forEach(({point:[c,h],y:u,angle:d,size:f},p)=>{r.makeRotationY(d).setPosition(c,u-Fr,-h);const _=Xi(n,aM),g=Xi(n,lM);bu.forEach(({name:m,offset:y,scale:M},x)=>{const L=m==="drum"||m==="dome"?Fr:0,A=m==="drum"||m==="dome"?M[1]*f:M[1]*f+Fr;o.compose(new C(y[0]*f,y[1]*f+L,y[2]*f),a,new C(M[0]*f,A,M[2]*f)),s[x].setMatrixAt(p,o.premultiply(r)),s[x].setColorAt(p,m==="dome"?g:_)})});const l=new xt;return l.add(...s),l}function hM(){const n=ir(sa,{height:.38,thickness:.14,y:hn,offset:-.4,towerSpacing:2.4,towerWidth:.3,towerHeight:.6});return $(n,_s)}function uM(){const[n,t]=Ux,e=new xt;return e.add(ht(.75,.9,.5,v.stoneDark,n,-.1,-t,14)),e.add(ht(.22,.22,.9,v.stone,n,.4,-t,10)),e}function ro({length:n,beam:t,depth:e,bowRise:i=1,sternRise:s=1,fullness:r=.55,segments:o=40,ribs:a=12}){const l=g=>t/2*Math.pow(Math.sin(Math.PI*(.02+.96*g)),r),c=g=>i*Math.pow(Math.max(0,(g-.72)/.28),2)+s*Math.pow(Math.max(0,(.28-g)/.28),2),h=g=>-e*Math.pow(Math.sin(Math.PI*(.03+.94*g)),.35),u=[],d=[],f=[];for(let g=0;g<=o;g++){const m=g/o,y=(m-.5)*n,M=l(m),x=c(m),L=h(m);for(let A=0;A<=a;A++){const R=A/a,I=(R-.5)*Math.PI;u.push(y,x+(L-x)*Math.pow(Math.cos(I),.7),M*Math.sin(I)),d.push(y,R*(t+e*2))}}for(let g=0;g<o;g++)for(let m=0;m<a;m++){const y=g*(a+1)+m,M=y+a+1;f.push(y,M,y+1,M,M+1,y+1)}const p=new Ae;return p.setAttribute("position",new Vt(u,3)),p.setAttribute("uv",new Vt(d,2)),p.setIndex(f),p.computeVertexNormals(),{geometry:p,halfBeamAtX:g=>l(Math.min(1,Math.max(0,g/n+.5))),deck:dM(n,l)}}function dM(n,t,e=.94,i=24){const s=[];for(let r=0;r<=i;r++)s.push(new et((r/i-.5)*n,t(r/i)*e));for(let r=i;r>=0;r--)s.push(new et((r/i-.5)*n,-t(r/i)*e));return new Ms(new Qe(s)).rotateX(-Math.PI/2)}const fM=["position","normal","uv"];function pM(n,t){for(let e=n;e&&e!==t;e=e.parent)if(e.userData.animate||e.userData.dynamic)return!0;return!1}function mM(n){for(const t of Object.values(n.attributes)){const{array:e,itemSize:i}=t;for(let s=0;s<t.count;s+=3)for(let r=0;r<i;r++){const o=(s+1)*i+r,a=(s+2)*i+r;[e[o],e[a]]=[e[a],e[o]]}}}function gM(n,t){const e=n.geometry.index?n.geometry.toNonIndexed():n.geometry.clone();for(const i of Object.keys(e.attributes))fM.includes(i)||e.deleteAttribute(i);return e.attributes.normal||e.computeVertexNormals(),e.attributes.uv||e.setAttribute("uv",new Vt(new Float32Array(e.attributes.position.count*2),2)),e.clearGroups(),e.applyMatrix4(t),t.determinant()<0&&mM(e),e}function Re(n){n.updateMatrixWorld(!0);const t=n.matrixWorld.clone().invert(),e=new Map,i=[];n.traverse(s=>{if(!s.isMesh||s.isInstancedMesh||Array.isArray(s.material)||pM(s,n))return;const r=new Kt().multiplyMatrices(t,s.matrixWorld);e.has(s.material)||e.set(s.material,[]),e.get(s.material).push(gM(s,r)),i.push(s)});for(const s of i)s.removeFromParent();of(n);for(const[s,r]of e){const o=new fe(io(r,!1),s);o.castShadow=!s.isShaderMaterial&&!s.isMeshBasicMaterial,o.receiveShadow=!s.isShaderMaterial,n.add(o)}return n.traverse(s=>{s.isMesh&&!i.includes(s)&&(s.castShadow=!s.material.isShaderMaterial,s.receiveShadow=!0)}),n}function of(n){for(const t of[...n.children])of(t),t.type==="Group"&&t.children.length===0&&!t.userData.animate&&!t.userData.dynamic&&t.removeFromParent()}function fr({lod:n="detail",banner:t="genoa",sail:e=!0}={}){const i=new xt,{geometry:s,deck:r}=ro({length:24,beam:7.5,depth:3.4,bowRise:1.8,sternRise:2.4,fullness:.4,segments:n==="detail"?32:16,ribs:n==="detail"?12:8});if(i.add($(s,v.hull,0,2.2,0)),i.add($(r,v.wood,0,1.9,0)),i.add(U(6,2.4,6.4,v.wood,-8,1.9,0)),i.add(U(6.6,.4,7,v.wood,-8,4.3,0)),i.add(U(4,2,4.4,v.wood,9.2,2.6,0)),i.add(ht(.2,.28,17,v.wood,.5,1.9,0,8)),e){const l=ht(.12,.12,13,v.wood,0,0,0,6);l.rotation.x=Math.PI/2,l.position.set(.5,16,-6.5),i.add(l);const c=$(_x(12,10,1.4),v.sail,.5,6,0);c.rotation.y=Math.PI/2,i.add(c)}Re(i);const o=bi(t,{width:2.6,height:1.6,pole:3});o.position.set(.5,18.4,0),i.add(o);const a=Math.random()*10;return i.userData.animate=l=>{i.position.y=Math.sin(l*1.2+a)*.15,i.rotation.x=Math.sin(l*.9+a)*.02},i}function af(n,t,{speed:e=1,offset:i=0,y:s=0}={}){const r=new ga(t.map(l=>Zs(l,s)),!0,"centripetal"),o=r.getLength(),a=new C;return l=>{const c=((l*e/o+i)%1+1)%1;r.getPointAt(c,n.position),r.getTangentAt(c,a),n.rotation.y=Math.atan2(-a.z,a.x)}}const Tu=4*ya,_M=[{route:xu,banner:"genoa",speed:.55,offset:0},{route:xu,banner:"venice",speed:.55,offset:.45},{route:Mu,banner:"byzantine",speed:.5,offset:.2},{route:Mu,banner:"genoa",speed:.5,offset:.7}],vM=[{at:ge([-5,13.5]),heading:.1,banner:"genoa"},{at:ge([.5,15.2]),heading:.6,banner:"genoa"},{at:ge([-11,15.2]),heading:.6,banner:"venice"}];function xM(){const n=new xt;for(const{route:t,banner:e,speed:i,offset:s}of _M){const r=new xt;r.add(fr({lod:"map",banner:e})),r.scale.setScalar(Tu),r.userData.animate=af(r,t,{speed:i,offset:s}),n.add(r)}for(const{at:t,heading:e,banner:i}of vM){const s=new xt;s.add(fr({lod:"map",banner:i,sail:!1})),s.scale.setScalar(Tu),s.position.copy(Zs(t)),s.rotation.y=e,n.add(s)}return n}class MM extends ke{constructor(t=document.createElement("div")){super(),this.isCSS2DObject=!0,this.element=t,this.element.style.position="absolute",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.center=new et(.5,.5),this.addEventListener("removed",function(){this.traverse(function(e){e.element instanceof e.element.ownerDocument.defaultView.Element&&e.element.parentNode!==null&&e.element.remove()})})}copy(t,e){return super.copy(t,e),this.element=t.element.cloneNode(!0),this.center=t.center,this}}const Bs=new C,wu=new Kt,Au=new Kt,Ru=new C,Cu=new C;class yM{constructor(t={}){const e=this;let i,s,r,o;const a={objects:new WeakMap},l=t.element!==void 0?t.element:document.createElement("div");l.style.overflow="hidden",this.domElement=l,this.getSize=function(){return{width:i,height:s}},this.render=function(p,_){p.matrixWorldAutoUpdate===!0&&p.updateMatrixWorld(),_.parent===null&&_.matrixWorldAutoUpdate===!0&&_.updateMatrixWorld(),wu.copy(_.matrixWorldInverse),Au.multiplyMatrices(_.projectionMatrix,wu),h(p,p,_),f(p)},this.setSize=function(p,_){i=p,s=_,r=i/2,o=s/2,l.style.width=p+"px",l.style.height=_+"px"};function c(p){p.isCSS2DObject&&(p.element.style.display="none");for(let _=0,g=p.children.length;_<g;_++)c(p.children[_])}function h(p,_,g){if(p.visible===!1){c(p);return}if(p.isCSS2DObject){Bs.setFromMatrixPosition(p.matrixWorld),Bs.applyMatrix4(Au);const m=Bs.z>=-1&&Bs.z<=1&&p.layers.test(g.layers)===!0,y=p.element;y.style.display=m===!0?"":"none",m===!0&&(p.onBeforeRender(e,_,g),y.style.transform="translate("+-100*p.center.x+"%,"+-100*p.center.y+"%)translate("+(Bs.x*r+r)+"px,"+(-Bs.y*o+o)+"px)",y.parentNode!==l&&l.appendChild(y),p.onAfterRender(e,_,g));const M={distanceToCameraSquared:u(g,p)};a.objects.set(p,M)}for(let m=0,y=p.children.length;m<y;m++)h(p.children[m],_,g)}function u(p,_){return Ru.setFromMatrixPosition(p.matrixWorld),Cu.setFromMatrixPosition(_.matrixWorld),Ru.distanceToSquared(Cu)}function d(p){const _=[];return p.traverseVisible(function(g){g.isCSS2DObject&&_.push(g)}),_}function f(p){const _=d(p).sort(function(m,y){if(m.renderOrder!==y.renderOrder)return y.renderOrder-m.renderOrder;const M=a.objects.get(m).distanceToCameraSquared,x=a.objects.get(y).distanceToCameraSquared;return M-x}),g=_.length;for(let m=0,y=_.length;m<y;m++)_[m].element.style.zIndex=g-m}}}function SM(n){const t=new yM;return t.domElement.className="label-layer",n.appendChild(t.domElement),t}function EM({text:n,sub:t,kind:e,onClick:i,onHover:s,anchorBottom:r=!1,minor:o=!1}){const a=document.createElement("div");a.className=`map-label map-label--${e}${o?" map-label--minor":""}`,i&&(a.setAttribute("role","button"),a.tabIndex=0,a.addEventListener("click",i),a.addEventListener("keydown",c=>{(c.key==="Enter"||c.key===" ")&&(c.preventDefault(),i())})),s&&(a.addEventListener("pointerenter",()=>s(!0)),a.addEventListener("pointerleave",()=>s(!1)));const l=new MM(a);return r&&l.center.set(.5,1),lf(l,n,t),l}function lf(n,t,e){const i=[document.createTextNode(t)];if(e){const s=document.createElement("small");s.textContent=e,i.push(s)}n.element.replaceChildren(...i)}const bM="modulepreload",TM=function(n,t){return new URL(n,t).href},Pu={},Lu=function(t,e,i){let s=Promise.resolve();if(e&&e.length>0){let o=function(h){return Promise.all(h.map(u=>Promise.resolve(u).then(d=>({status:"fulfilled",value:d}),d=>({status:"rejected",reason:d}))))};const a=document.getElementsByTagName("link"),l=document.querySelector("meta[property=csp-nonce]"),c=l?.nonce||l?.getAttribute("nonce");s=o(e.map(h=>{if(h=TM(h,i),h in Pu)return;Pu[h]=!0;const u=h.endsWith(".css"),d=u?'[rel="stylesheet"]':"";if(!!i)for(let _=a.length-1;_>=0;_--){const g=a[_];if(g.href===h&&(!u||g.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${h}"]${d}`))return;const p=document.createElement("link");if(p.rel=u?"stylesheet":bM,u||(p.as="script"),p.crossOrigin="",p.href=h,c&&p.setAttribute("nonce",c),document.head.appendChild(p),u)return new Promise((_,g)=>{p.addEventListener("load",_),p.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${h}`)))})}))}function r(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return s.then(o=>{for(const a of o||[])a.status==="rejected"&&r(a.reason);return t().catch(r)})},oa={en:()=>Lu(()=>import("./en-Dd8so-wi.js"),[],import.meta.url),tr:()=>Lu(()=>import("./tr-C7CEKK-q.js"),[],import.meta.url)},qi={},cf="constantinople.language",wM=[{code:"en",label:"English"},{code:"tr",label:"Türkçe"}],ac=new Set;let oi=RM();const AM=hf(oi);async function hf(n){return qi[n]||(qi[n]=(await oa[n]()).default),qi[n]}function RM(){const n=CM();if(n&&n in oa)return n;const t=navigator.languages?.length?navigator.languages:[navigator.language];for(const e of t.flatMap(i=>(i??"").split(","))){const i=e.split(";")[0].trim().toLowerCase().split("-")[0];if(i in oa)return i}return"en"}function CM(){try{return localStorage.getItem(cf)}catch{return null}}const PM=()=>oi;let al=oi;async function LM(n){if(!(!(n in oa)||n===al)&&(al=n,await hf(n),al===n)){oi=n;try{localStorage.setItem(cf,n)}catch{}for(const t of ac)t(n)}}function IM(n){return ac.add(n),()=>ac.delete(n)}function Jt(n,t={}){return qi[oi].ui[n].replace(/\{(\w+)\}/g,(e,i)=>t[i]??"")}const aa=n=>qi[oi].landmarks[n],pr=n=>qi[oi].regions[n],Iu=n=>qi[oi].labels[n],ll=n=>qi[oi].events[n];function mi(n,t=!1){const e=n<0?Jt("yearBC",{year:-n}):String(n);return t?Jt("approximately",{year:e}):e}function DM({from:n,fromApprox:t,to:e,toApprox:i}){return`${mi(n,t)} – ${e===void 0?Jt("present"):mi(e,i)}`}function uf(n=document){document.documentElement.lang=oi,document.title=Jt("documentTitle");for(const t of n.querySelectorAll("[data-i18n]"))t.textContent=Jt(t.dataset.i18n);for(const t of n.querySelectorAll("[data-i18n-label]")){const e=Jt(t.dataset.i18nLabel);t.setAttribute("aria-label",e),t.title&&(t.title=e)}}const Vc={inOutCubic:n=>n<.5?4*n*n*n:1-Math.pow(-2*n+2,3)/2,outBack:n=>1+2.4*Math.pow(n-1,3)+1.4*Math.pow(n-1,2)};function lc({duration:n,easing:t=Vc.inOutCubic,onUpdate:e}){return new Promise(i=>{const s=performance.now(),r=o=>{const a=Math.min(1,(o-s)/n);e(t(a)),a<1?requestAnimationFrame(r):i()};requestAnimationFrame(r)})}const UM=n=>new Promise(t=>setTimeout(t,n)),cl={start:300,end:1453},df=[{year:324,id:"chrysopolis"},{year:330,id:"dedication"},{year:368,id:"aqueduct"},{year:413,id:"walls"},{year:451,id:"council"},{year:532,id:"nika"},{year:537,id:"hagia-sophia"},{year:626,id:"siege-626"},{year:717,id:"arab-siege"},{year:1054,id:"schism"},{year:1082,id:"venice"},{year:1204,id:"crusade"},{year:1261,id:"recovery"},{year:1267,id:"genoa"},{year:1348,id:"galata-tower"},{year:1453,id:"conquest"}];function ff(n,t){if(t===null)return!0;const{from:e,to:i}=n.period;return t>=e&&(i===void 0||t<=i)}function NM(n){return df.filter(t=>t.year<=n).at(-1)??null}function la(n,t,e,{left:i=0,right:s=0,top:r=0,bottom:o=0}={}){const a=(i-s)/2,l=(r-o)/2,c=t+2*Math.abs(a),h=e+2*Math.abs(l);n.aspect=c/h,a||l?n.setViewOffset(c,h,a>0?0:-2*a,l>0?0:-2*l,t,e):n.clearViewOffset(),n.updateProjectionMatrix()}function OM(){const n=window.matchMedia("(pointer: coarse)").matches,t=navigator.deviceMemory,e=navigator.hardwareConcurrency;return n||t!==void 0&&t<=4||e!==void 0&&e<=4}const FM={high:{tier:"high",maxPixelRatio:1.5,shadowType:Ju,mapShadowSize:4096,detailShadowSize:2048},low:{tier:"low",maxPixelRatio:1,shadowType:gc,mapShadowSize:2048,detailShadowSize:1024}},an=Object.freeze({...FM[OM()?"low":"high"],reducedMotion:window.matchMedia("(prefers-reduced-motion: reduce)").matches}),BM=()=>Math.min(window.devicePixelRatio||1,an.maxPixelRatio),Du=15325110,zs={position:new C(3,94,78),target:new C(3,0,2)};class zM{constructor({renderer:t,container:e,landmarks:i,regions:s,onSelectLandmark:r,onSelectRegion:o}){this.renderer=t,this.onSelectLandmark=r,this.active=!0,this.hovered=null,this.returnView=null,this.dirty=!0,this.shadowDirty=!0,this.scene=new Pd,this.scene.fog=new ma(Du,100,340),this.camera=new mn(40,1,.1,3e3),this.camera.position.copy(zs.position),this.controls=new Vd(this.camera,t.domElement),Object.assign(this.controls,{enableDamping:!0,dampingFactor:.08,screenSpacePanning:!1,minDistance:2.5,maxDistance:240,maxPolarAngle:1.36}),this.controls.target.copy(zs.target),this.sky=Wd({horizon:Du}),this.scene.add(this.sky,Xd({extent:70,mapSize:an.mapShadowSize,distance:180}).group),this.entries=i.map(c=>this.placeLandmark(c));const a=this.entries.filter(c=>c.footprint),l=a.filter(c=>!c.landmark.map.on);this.ground=Wx({footprints:l.map(c=>c.footprint)});for(const{landmark:c,holder:h,footprint:u}of a)h.position.y=hn+this.ground.heightAt(u.centre)+(c.map.lift??0),h.updateMatrixWorld(!0);if(this.scene.add(Bx(this.ground)),this.scene.add(Qx({ground:this.ground,keepOut:this.entries.flatMap(c=>c.keepOut)})),this.scene.add(xM()),this.labelRenderer=SM(e),this.addLabels(s,o),this.animated=[],this.scene.traverse(c=>{c.userData.animate&&this.animated.push(c.userData.animate)}),an.reducedMotion)for(const c of this.animated)c(0,0);this.raycaster=new C1,this.pointer=new et,this.pointerDirty=!1,this.listen(t.domElement)}placeLandmark(t){const{map:e}=t,i=t.create({lod:"map"}),s=new xt;s.userData.landmarkId=t.id,s.add(i);const r=new Bn().setFromObject(i);if(e.absolute||(s.scale.setScalar(e.scale*ya),e.route?(s.userData.animate=af(s,e.route,{speed:e.speed}),s.userData.animate(0)):(s.position.copy(Zs(e.at,hn)),s.rotation.y=Hi.degToRad(e.rotation??0))),this.scene.add(s),s.updateMatrixWorld(!0),s.userData.baseScaleY=s.scale.y,e.absolute||e.route){const l=(i.userData.keepOut??[]).map(([c,h,u])=>([d,f])=>Math.hypot(d-c,f-h)<u);return{landmark:t,holder:s,keepOut:l,footprint:null,label:null}}const o=kM(s,r),a=e.on?[]:[l=>o(l)<.25];return{landmark:t,holder:s,keepOut:a,footprint:{centre:e.at,distance:o},label:null}}addLabels(t,e){this.labels=[];const i=(s,r,o,a)=>{const l=EM({...o(),...a});return l.position.copy(r),s.add(l),this.labels.push({label:l,read:o}),l};for(const s of this.entries){const{landmark:r,holder:o}=s,a=new Bn().setFromObject(o),l=a.getCenter(new C).setY(a.max.y+.15);s.label=i(o,o.worldToLocal(l),()=>({text:aa(r.id).name}),{kind:"landmark",minor:!!r.map.on,anchorBottom:!0,onClick:()=>this.onSelectLandmark(r.id),onHover:c=>this.setHovered(c?s:null)})}this.updateLabelVisibility();for(const s of t.filter(r=>r.labelAt)){const r=()=>({text:pr(s.id).name,sub:pr(s.id).subtitle});i(this.scene,Zs(s.labelAt,3),r,{kind:"region",onClick:()=>e(s.id)})}for(const[s,r,o]of[[Ox,"water",.3],[Fx,"place",1.8]])for(const{id:a,at:l}of s)i(this.scene,Zs(l,o+this.ground.heightAt(l)),()=>({text:Iu(a).name,sub:Iu(a).sub}),{kind:r})}refreshLabels(){for(const{label:t,read:e}of this.labels){const{text:i,sub:s}=e();lf(t,i,s)}this.dirty=!0}updateLabelVisibility(){const t=new C;for(const{landmark:e,holder:i,label:s}of this.entries){const r=e.map.labelWithin;if(!r||!i.visible)continue;s.getWorldPosition(t);const o=t.distanceTo(this.camera.position)<r;o!==s.visible&&(this.dirty=!0),s.visible=o}}listen(t){let e=null;t.addEventListener("pointermove",i=>{const s=t.getBoundingClientRect();this.pointer.set((i.clientX-s.left)/s.width*2-1,-((i.clientY-s.top)/s.height)*2+1),this.pointerDirty=!0}),t.addEventListener("pointerleave",()=>this.setHovered(null)),t.addEventListener("pointerdown",i=>{e=[i.clientX,i.clientY]}),t.addEventListener("pointerup",i=>{if(!this.active||!e)return;const s=Math.hypot(i.clientX-e[0],i.clientY-e[1]);if(e=null,s>6)return;const r=this.pick();r&&this.onSelectLandmark(r.landmark.id)})}pick(){this.raycaster.setFromCamera(this.pointer,this.camera);const t=this.entries.filter(i=>i.holder.visible).map(i=>i.holder),[e]=this.raycaster.intersectObjects(t,!0);if(!e)return null;for(let i=e.object;i;i=i.parent)if(i.userData.landmarkId)return this.entries.find(s=>s.holder===i);return null}setHovered(t){t!==this.hovered&&(this.hovered&&Uu(this.hovered,!1),this.hovered=t,t&&Uu(t,!0),this.renderer.domElement.style.cursor=t?"pointer":"",this.dirty=!0)}setYear(t){for(const e of this.entries){const{holder:i,label:s}=e,r=ff(e.landmark,t);if(r===i.visible)continue;const o=i.userData.baseScaleY,a=(e.rise??0)+1;e.rise=a,i.visible=s.visible=r,i.scale.y=o,this.invalidate(),r&&!an.reducedMotion&&lc({duration:600,easing:Vc.outBack,onUpdate:l=>{e.rise===a&&(i.scale.y=o*Math.max(.02,l),this.invalidate())}})}this.hovered&&!this.hovered.holder.visible&&this.setHovered(null)}invalidate(){this.dirty=!0,this.shadowDirty=!0}flyTo(t,e,i=1300){const s=this.camera.position.clone(),r=this.controls.target.clone();return this.controls.enabled=!1,lc({duration:i,onUpdate:o=>{this.camera.position.lerpVectors(s,t,o),this.controls.target.lerpVectors(r,e,o),this.dirty=!0}}).then(()=>{this.controls.enabled=this.active})}frame(t,e,i){const s=this.camera.position.clone().sub(this.controls.target).setY(0);s.lengthSq()<1e-6&&s.set(0,0,1),s.normalize().multiplyScalar(Math.cos(i)*e);const r=t.clone().add(s).setY(t.y+Math.sin(i)*e);return this.flyTo(r,t)}focusLandmark(t){const e=this.entries.find(o=>o.landmark.id===t),i=new Bn().setFromObject(e.holder),s=i.getSize(new C),r=Math.max(s.x,s.z,s.y*1.5)/2;return this.returnView||(this.returnView={position:this.camera.position.clone(),target:this.controls.target.clone()}),this.setHovered(null),this.frame(i.getCenter(new C),Hi.clamp(r*3.2,5,70),.72)}focusRegion(t){return this.returnView=null,this.frame(Zs(t.view.target,0),t.view.distance,.95)}restoreView(){const t=this.returnView;return this.returnView=null,t?this.flyTo(t.position,t.target,1100):Promise.resolve()}homeView(){const{width:t,height:e}=this.size??{width:16,height:10},{left:i=0,right:s=0}=this.insets??{},r=Hi.clamp(1.27/((t-i-s)/e),1,2.6),o=zs.position.clone().sub(zs.target).multiplyScalar(r);return{position:zs.target.clone().add(o),target:zs.target.clone()}}jumpHome(){const{position:t,target:e}=this.homeView();this.camera.position.copy(t),this.controls.target.copy(e),this.controls.update()}resetView(){this.returnView=null;const{position:t,target:e}=this.homeView();return this.flyTo(t,e)}setActive(t){this.active=t,this.controls.enabled=t,this.dirty=!0,t||this.setHovered(null)}resize(t,e){this.size={width:t,height:e},la(this.camera,t,e,this.insets),this.labelRenderer.setSize(t,e),this.dirty=!0}setInsets(t){this.insets=t,this.size&&la(this.camera,this.size.width,this.size.height,t),this.dirty=!0}update(t,e){const i=this.controls.update();if(this.sky.position.copy(this.camera.position),!an.reducedMotion)for(const r of this.animated)r(t,e);this.updateLabelVisibility(),this.active&&this.pointerDirty&&this.controls.enabled&&(this.pointerDirty=!1,this.setHovered(this.pick()));const s=i||this.dirty;return this.dirty=!1,s}render(t=this.renderer){this.shadowDirty&&(t.shadowMap.needsUpdate=!0,this.shadowDirty=!1),t.render(this.scene,this.camera),this.labelRenderer.render(this.scene,this.camera)}}function kM(n,t){const e=n.matrixWorld.clone().invert(),i=new C;return([s,r])=>{i.set(s,n.position.y,-r).applyMatrix4(e);const o=Math.max(t.min.x-i.x,0,i.x-t.max.x),a=Math.max(t.min.z-i.z,0,i.z-t.max.z);return Math.hypot(o,a)*n.scale.x}}const hl=new Map;function HM(n){if(!hl.has(n)){const t=n.clone();t.emissive&&(t.emissive=new Wt(16758858),t.emissiveIntensity=.42),hl.set(n,t)}return hl.get(n)}function Uu(n,t){n.label.element.classList.toggle("is-hover",t),n.holder.traverse(e=>{!e.isMesh||e.material.isShaderMaterial||(t?(e.userData.restMaterial=e.material,e.material=HM(e.material)):e.userData.restMaterial&&(e.material=e.userData.restMaterial,delete e.userData.restMaterial))})}const Nu=15127470,VM=26,Ou=80;class GM{constructor({renderer:t}){this.scene=new Pd,this.scene.fog=new ma(Nu,90,260),this.camera=new mn(38,1,.1,3e3),this.controls=new Vd(this.camera,t.domElement),Object.assign(this.controls,{enabled:!1,enableDamping:!0,dampingFactor:.08,autoRotate:!an.reducedMotion,autoRotateSpeed:.5,maxPolarAngle:1.48}),this.controls.addEventListener("start",()=>{this.controls.autoRotate=!1}),this.dirty=!0,this.shadowDirty=!0,this.sky=Wd({top:7049140,horizon:Nu});const{group:e,sun:i}=Xd({extent:20,mapSize:an.detailShadowSize,distance:Ou,intensity:2.8});this.sun=i,this.scene.add(this.sky,e);const s=new fe(new eo(600,64).rotateX(-Math.PI/2),new Ee({color:14864294,roughness:1}));s.position.y=-2.4,s.receiveShadow=!0,this.plinth=XM(),this.scene.add(s,this.plinth),this.stage=new xt,this.scene.add(this.stage),this.cache=new Map,this.current=null}show(t){this.stage.clear(),this.current=this.cache.get(t.id)??this.build(t),this.cache.set(t.id,this.current);const{wrapper:e,radius:i,height:s}=this.current;this.stage.add(e),this.plinth.scale.set(i*1.04,1,i*1.04);const r=Math.max(Ou,s*1.2);this.sun.position.setLength(r),Yd(this.sun,Math.max(i*1.15,s*.6),r);const o=Hi.clamp(s/(i*2)-1,0,1),a=(d,f)=>Hi.lerp(d,f,o),l=Math.hypot(i,s/2)/Math.sin(this.visibleHalfFov())*a(.88,1.04),c=.75,h=.5,u=s*a(.3,.5);if(this.camera.position.set(Math.sin(c)*Math.cos(h)*l,u+Math.sin(h)*l+s*a(-.1,0),Math.cos(c)*Math.cos(h)*l),this.controls.target.set(0,u,0),this.scene.fog.near=Math.max(90,l*1.3),this.scene.fog.far=this.scene.fog.near+170,this.controls.minDistance=i*.25,this.controls.maxDistance=Math.max(i*4,l*1.6),this.controls.autoRotate=!an.reducedMotion,this.controls.update(),this.invalidate(),an.reducedMotion){e.scale.setScalar(1);return}e.scale.setScalar(.8),lc({duration:900,easing:Vc.outBack,onUpdate:d=>{e.scale.setScalar(.8+.2*d),this.invalidate()}})}invalidate(){this.dirty=!0,this.shadowDirty=!0}build(t){const e=t.create({lod:"detail"});e.updateMatrixWorld(!0);const i=new Bn().setFromObject(e),s=i.getSize(new C),r=i.getCenter(new C),o=VM/Math.max(s.x,s.z),a=new xt;a.add(e),a.scale.setScalar(o),a.position.set(-r.x*o,-i.min.y*o,-r.z*o);const l=new xt;l.add(a);const c=[];if(l.traverse(h=>{h.userData.animate&&c.push(h.userData.animate)}),an.reducedMotion)for(const h of c)h(0,0);return{wrapper:l,animated:c,radius:WM(e,r)*o,height:s.y*o}}visibleHalfFov(){const{width:t,height:e}=this.size??{width:1,height:1},{left:i=0,right:s=0,top:r=0,bottom:o=0}=this.insets??{},a=Math.tan(Hi.degToRad(this.camera.fov/2)),l=Math.max(1,t-i-s),c=Math.max(1,e-r-o);return Math.atan(a*Math.min(c,l)/e)}setActive(t){this.controls.enabled=t,this.dirty=!0}resize(t,e){this.size={width:t,height:e},la(this.camera,t,e,this.insets),this.dirty=!0}setInsets(t){this.insets=t,this.size&&la(this.camera,this.size.width,this.size.height,t),this.dirty=!0}update(t,e){const i=this.controls.update(e);if(this.sky.position.copy(this.camera.position),this.current?.animated.length&&!an.reducedMotion){for(const r of this.current.animated)r(t,e);this.invalidate()}const s=i||this.dirty;return this.dirty=!1,s}render(t){this.shadowDirty&&(t.shadowMap.needsUpdate=!0,this.shadowDirty=!1),t.render(this.scene,this.camera)}}function WM(n,t){const e=new C;let i=0;return n.traverse(s=>{if(!s.isMesh||s.isInstancedMesh)return;const r=s.geometry.attributes.position;for(let o=0;o<r.count;o++)e.fromBufferAttribute(r,o).applyMatrix4(s.matrixWorld),i=Math.max(i,Math.hypot(e.x-t.x,e.z-t.z))}),i}function XM(){const n=new xt,t=new Ee({color:4008501,roughness:.55}),e=new fe(new Ei(1,1.03,2.2,96,1).translate(0,-1.1,0),t);e.receiveShadow=!0;const i=new fe(new Ei(1.012,1.012,.25,96,1,!0).translate(0,-.15,0),v.gold);return n.add(e,i),n}function mt(n,t={},...e){const i=document.createElement(n);for(const[s,r]of Object.entries(t))r==null||r===!1||(s==="class"?i.className=r:s.startsWith("on")?i.addEventListener(s.slice(2).toLowerCase(),r):s in i?i[s]=r:i.setAttribute(s,r));for(const s of e.flat())s==null||s===!1||i.append(s instanceof Node?s:document.createTextNode(String(s)));return i}class YM{constructor(t,{onSelectLandmark:e,onClose:i}){this.element=t,this.onSelectLandmark=e,this.onClose=i,this.showing=null}showLandmark(t,{animate:e=!0}={}){this.showing=()=>this.showLandmark(t,{animate:!1});const i=aa(t.id),{period:s}=t;this.render([mt("p",{class:"info-panel__region"},pr(t.region).name),mt("h2",{},i.name),mt("p",{class:"info-panel__years"},DM(s)),mt("p",{class:"info-panel__subtitle"},i.subtitle),mt("dl",{class:"info-panel__stats"},mt("dt",{},Jt("built")),mt("dd",{},i.built),s.to===void 0?[mt("dt",{},Jt("status")),mt("dd",{},i.fate)]:[mt("dt",{},Jt(s.ending)),mt("dd",{},`${mi(s.to,s.toApprox)} — ${i.fate}`)],mt("dt",{},Jt("builder")),mt("dd",{},i.builder),mt("dt",{},Jt("purpose")),mt("dd",{},i.purpose)),mt("div",{class:"info-panel__ornament"}),mt("p",{},i.summary),i.legend&&Fu(i.legend),mt("h3",{},Jt("didYouKnow")),mt("ul",{class:"info-panel__facts"},i.facts.map(r=>mt("li",{},r))),mt("p",{class:"info-panel__today"},mt("strong",{},`${Jt("today")} `),i.today)],e)}showRegion(t,e,{animate:i=!0}={}){this.showing=()=>this.showRegion(t,e,{animate:!1});const s=pr(t.id);this.render([mt("p",{class:"info-panel__region"},Jt("areaOfMap")),mt("h2",{},s.name),mt("p",{class:"info-panel__subtitle"},s.subtitle),mt("div",{class:"info-panel__ornament"}),s.paragraphs.map(r=>mt("p",{},r)),s.legend&&Fu(s.legend),s.closing&&mt("p",{},s.closing),e.length>0&&[mt("h3",{},Jt("explore")),mt("div",{class:"info-panel__links"},e.map(r=>mt("button",{class:"info-panel__link",type:"button",onClick:()=>this.onSelectLandmark(r.id)},aa(r.id).name)))]],i)}refresh(){if(this.element.hidden||!this.showing)return;const{scrollTop:t}=this.element;this.showing(),this.element.scrollTop=t}render(t,e){this.element.replaceChildren(mt("button",{class:"info-panel__close",type:"button","aria-label":Jt("close"),title:Jt("close"),onClick:()=>this.onClose()},"×"),...t.flat(2).filter(Boolean)),this.element.hidden=!1,e&&(this.element.scrollTop=0,this.element.style.animation="none",this.element.offsetWidth,this.element.style.animation="")}hide(){this.element.hidden=!0}}function Fu({title:n,paragraphs:t}){return mt("section",{class:"info-panel__legend"},mt("h3",{},n),t.map(e=>mt("p",{},e)))}class qM{constructor(t,{regions:e,landmarks:i,onSelectRegion:s,onSelectLandmark:r,onToggle:o=()=>{}}){this.element=t,this.options={regions:e,landmarks:i,onSelectRegion:s,onSelectLandmark:r,onToggle:o},this.activeId=null,this.year=null,t.classList.toggle("is-collapsed",window.matchMedia("(max-width: 760px)").matches),this.render()}render(){const{regions:t,landmarks:e,onSelectRegion:i,onSelectLandmark:s,onToggle:r}=this.options,{element:o}=this;this.buttons=new Map;const a=mt("button",{class:"sidebar__toggle",type:"button","aria-label":Jt("landmarks"),title:Jt("landmarks"),"aria-expanded":String(!o.classList.contains("is-collapsed"))},mt("span",{class:"sidebar__chevron","aria-hidden":"true"},"▾")),l=mt("header",{class:"sidebar__title",onClick:()=>{const h=o.classList.toggle("is-collapsed");a.setAttribute("aria-expanded",String(!h)),r()}},mt("p",{class:"sidebar__greek",lang:"grc"},"Κωνσταντινούπολις"),mt("h1",{class:"sidebar__name"},Jt("title")),mt("p",{class:"sidebar__sub"},Jt("titleSub")),a),c=mt("div",{class:"sidebar__body"},t.map(h=>mt("section",{class:"sidebar__region"},mt("button",{class:"sidebar__region-button",type:"button",onClick:()=>i(h.id)},pr(h.id).name,mt("span",{class:"sidebar__region-sub"},pr(h.id).subtitle)),mt("ul",{},e.filter(u=>u.region===h.id).map(u=>{const d=mt("button",{class:"sidebar__landmark",type:"button",onClick:()=>s(u.id)},aa(u.id).name);return this.buttons.set(u.id,d),mt("li",{},d)})))));o.replaceChildren(l,c),this.setActive(this.activeId),this.setYear(this.year)}setYear(t){this.year=t;for(const e of this.options.landmarks){const i=this.buttons.get(e.id),s=!ff(e,t);i.classList.toggle("is-absent",s),i.title=s?Jt("notStanding",{year:mi(t)}):""}}setActive(t){this.activeId=t;for(const[e,i]of this.buttons)i.classList.toggle("is-active",e===t)}}const ZM=["controlRotate","controlPan","controlZoom","controlSelect","controlTouch"];class $M{constructor(t){this.element=t,this.button=t.querySelector(".settings__button"),this.dialog=mt("dialog",{class:"settings__dialog","aria-labelledby":"settings-title"}),t.append(this.dialog),this.button.addEventListener("click",()=>this.setOpen(!0)),this.dialog.addEventListener("click",e=>{e.target===this.dialog&&this.setOpen(!1)}),this.dialog.addEventListener("close",()=>{this.button.setAttribute("aria-expanded","false"),this.button.focus()}),this.dialog.addEventListener("keydown",e=>{e.key==="Escape"&&e.stopPropagation()}),this.render()}render(){const t=this.dialog.contains(document.activeElement),e=wM.map(({code:i,label:s})=>mt("button",{class:"settings__option",type:"button",lang:i,"aria-pressed":String(i===PM()),onClick:()=>LM(i)},s));this.dialog.replaceChildren(mt("div",{class:"settings__head"},mt("h2",{class:"settings__title",id:"settings-title"},Jt("settings")),mt("button",{class:"settings__close",type:"button","aria-label":Jt("close"),title:Jt("close"),onClick:()=>this.setOpen(!1)},"×")),mt("section",{class:"settings__section"},mt("h3",{class:"settings__heading",id:"settings-language"},Jt("language")),mt("div",{class:"settings__options",role:"group","aria-labelledby":"settings-language"},e)),mt("section",{class:"settings__section"},mt("h3",{class:"settings__heading"},Jt("controls")),mt("ul",{class:"settings__controls"},ZM.map(i=>mt("li",{},Jt(i)))))),t&&e.find(i=>i.getAttribute("aria-pressed")==="true")?.focus()}setOpen(t){t!==this.dialog.open&&(t?this.dialog.showModal():this.dialog.close(),this.button.setAttribute("aria-expanded",String(t)))}}const Bo=18,KM=38,jM=40;class JM{constructor(t,{onChange:e}){this.element=t,this.onChange=e,this.year=null,this.playing=!1,this.frame=0,new ResizeObserver(()=>this.layoutLabels()).observe(t),this.render()}render(){const{start:t,end:e}=cl;this.playButton=mt("button",{class:"timeline__button timeline__play",type:"button",onClick:()=>this.playing?this.stop():this.play()}),this.resetButton=mt("button",{class:"timeline__button timeline__reset",type:"button","aria-label":Jt("reset"),title:Jt("reset"),onClick:()=>{this.stop(),this.select(null)}},"⟲"),this.readout=mt("p",{class:"timeline__readout","aria-live":"polite"}),this.range=mt("input",{class:"timeline__range",type:"range",min:t,max:e,step:1,"aria-label":Jt("year"),onInput:()=>{this.stop(),this.select(Number(this.range.value))}}),this.marks=df.map(i=>{const s=(i.year-t)/(e-t),r=`${mi(i.year)}: ${ll(i.id)}`,o=mt("button",{class:"timeline__mark",type:"button",title:r,"aria-label":r,onClick:()=>{this.stop(),this.select(i.year)}},mt("span",{class:"timeline__tick","aria-hidden":"true"}),mt("span",{class:"timeline__label"},mi(i.year)));return o.style.left=`calc(${Bo/2}px + (100% - ${Bo}px) * ${s})`,{button:o,position:s,event:i}}),this.element.replaceChildren(mt("div",{class:"timeline__head"},this.playButton,this.resetButton,this.readout),mt("div",{class:"timeline__track"},this.range,mt("div",{class:"timeline__marks"},this.marks.map(({button:i})=>i)))),this.update(),requestAnimationFrame(()=>this.layoutLabels())}select(t){t!==this.year&&(this.year=t,this.update(),this.onChange(t))}play(){if(this.playing)return;const{start:t,end:e}=cl;let i=this.year===null||this.year>=e?t:this.year,s=performance.now();this.playing=!0,this.select(Math.floor(i));const r=o=>{if(this.playing){if(i=Math.min(e,i+Math.max(0,o-s)/1e3*jM),s=o,this.select(Math.floor(i)),i>=e){this.stop();return}this.frame=requestAnimationFrame(r)}};this.frame=requestAnimationFrame(r),this.updatePlayButton()}stop(){this.playing&&(this.playing=!1,cancelAnimationFrame(this.frame),this.updatePlayButton())}updatePlayButton(){const t=Jt(this.playing?"pause":"play");this.playButton.textContent=this.playing?"❚❚":"▶",this.playButton.setAttribute("aria-label",t),this.playButton.title=t,this.playButton.setAttribute("aria-pressed",String(this.playing)),this.playButton.classList.toggle("is-playing",this.playing)}update(){const t=this.year===null;this.element.classList.toggle("is-all",t),this.range.value=t?cl.end:this.year;const e=t?null:NM(this.year);let i="";t?i=Jt("allErasHint"):e&&(i=e.year===this.year?ll(e.id):`${mi(e.year)} · ${ll(e.id)}`),this.readout.replaceChildren(...t?[]:[mt("strong",{},mi(this.year))," "],mt("span",{},i)),this.range.setAttribute("aria-valuetext",t?Jt("allEras"):`${mi(this.year)}${i?` — ${i}`:""}`);for(const{button:s,event:r}of this.marks)s.classList.toggle("is-current",r===e);this.updatePlayButton()}layoutLabels(){const t=this.element.querySelector(".timeline__marks")?.clientWidth??0;let e=-1/0;for(const{button:i,position:s}of this.marks){const r=Bo/2+(t-Bo)*s,o=r-e>=KM;i.classList.toggle("has-label",o),o&&(e=r)}}}function QM({lod:n="detail"}={}){const t=n==="detail",e=new xt;e.add(U(62,28,72,v.plaster,0,0,0)),e.add(U(62.8,.7,72.8,v.lead,0,28,0)),e.add(U(34,12,37,v.plaster,0,28,0));for(const s of[-1,1])for(const r of[-1,1])e.add(U(9,38,9,v.plaster,s*14,0,r*38)),e.add(U(9.6,.6,9.6,v.lead,s*14,38,r*38));e.add(ht(16.6,16.6,4,v.plaster,0,40,0,40)),e.add(we(16.5,v.lead,0,44,0,{heightScale:.52,segments:40}));const i=yi(1.5,2.8);for(let s=0;s<40;s++){const r=s/40*Math.PI*2;e.add(zn(U(1.1,4.4,1.8,v.plaster),r,16.9,40)),t&&e.add(zn($(i,v.opening),r+Math.PI/40,16.63,40.6))}e.add(U(.5,4.2,.5,v.gold,0,52.4,0)),e.add(U(2.4,.5,.5,v.gold,0,55,0));for(const s of[-1,1]){e.add(qe(we(15.5,v.lead,s*17,28,0,{heightScale:.86,phiLength:Math.PI,segments:28}),s,0));for(const r of[-1,1])e.add(qe(we(7,v.lead,s*25,26,r*10,{heightScale:.9,phiLength:Math.PI,segments:16}),s,r))}if(e.add(qe(ht(7.5,7.5,22,v.plaster,31,0,0,20,{thetaStart:-Math.PI/2,thetaLength:Math.PI}),1,0)),e.add(qe(we(7.5,v.lead,31,22,0,{heightScale:.8,phiLength:Math.PI,segments:16}),1,0)),e.add(U(10,22,66,v.plaster,-36,0,0)),e.add(U(10.8,.6,66.8,v.lead,-36,22,0)),e.add(U(7,14,66,v.plaster,-44.5,0,0)),e.add(U(7.8,.6,66.8,v.lead,-44.5,14,0)),e.add(ht(6,6,9,v.plaster,36,0,-46,20)),e.add(we(6,v.lead,36,9,-46,{heightScale:.55})),t){ty(e),ey(e),e.add(U(150,1,116,v.paving,-25,-1,0));for(const[s,r]of[[40,30],[44,18],[42,-26],[-20,50],[-6,50],[8,-52],[20,-52],[-60,44],[-74,-44]])e.add(Ki(13,s,0,r))}else e.add(U(100,.4,90,v.paving,-10,-.4,0));return Re(e)}function ty(n){for(const i of[-1,1]){const s=ze({count:7,spacing:4,width:2.2,height:4.5,y:30.5}),r=ze({count:5,spacing:5,width:1.6,height:2.8,y:36.2});for(const o of[s,r])o.position.z=i*18.55,o.rotation.y=i>0?0:Math.PI,n.add(o);for(const o of[5,16]){const a=ze({count:15,spacing:3.8,width:1.9,height:3.8,y:o,skip:l=>Math.abs(Math.abs(l)-14)<5.5});a.position.z=i*36.05,a.rotation.y=i>0?0:Math.PI,n.add(a)}}const t=ze({count:5,spacing:9,width:3,height:6.5,y:0}),e=ze({count:9,spacing:6.5,width:2,height:3.6,y:16});for(const[i,s]of[[t,-48.05],[e,-41.05]])i.position.x=s,i.rotation.y=-Math.PI/2,n.add(i);for(const i of[-.5,0,.5]){const s=$(yi(1.8,4.5),v.opening);zn(s,i,7.55,9,31,0),n.add(s)}}function ey(n){for(const o of[-1,1]){n.add(U(48,9,1.5,v.plaster,-144/2,0,o*33)),n.add(U(48,.5,8.5,v.lead,-144/2,8.5,o*29.5));const a=wn({length:44,count:11,height:8.5,radius:.45});a.position.set(-144/2,0,o*25.8),n.add(a)}n.add(U(1.5,9,67.5,v.plaster,-96,0,0)),n.add(U(8.5,.5,58,v.lead,-96+3.5,8.5,0));const s=wn({length:50,count:12,height:8.5,radius:.45});s.rotation.y=Math.PI/2,s.position.x=-96+7.5,n.add(s),n.add(ht(3.2,3.4,1,v.marble,-72,0,0,20));const r=ht(2.7,2.7,.2,v.water,-72,.85,0,20);n.add(r),n.add(ht(.3,.3,3,v.marble,-72,1,0,8)),n.add(ht(.9,.2,.6,v.marble,-72,3.6,0,10))}const ca=new ii(1,14,10);function pf(n,{rearing:t=!1}={}){const e=new xt,i=$(ca,n,0,1.3,0);i.scale.set(.85,.36,.3);const s=ht(.17,.26,.95,n,.62,1.38,0,8);s.rotation.z=-.62;const r=U(.6,.24,.22,n,1.1,1.85,0);r.rotation.z=-.5;const o=ht(.04,.09,.8,n,-.82,.62,0,6);o.rotation.z=.35,e.add(i,s,r,o);for(const[a,l]of[[.55,.16],[.55,-.16],[-.55,.16],[-.55,-.16]]){const c=ht(.06,.08,1.1,n,a,0,l,6);t&&a>0&&(c.position.y=.45,c.rotation.z=1),e.add(c)}return e}function ny({horseMaterial:n,carMaterial:t,colorMaterial:e}){const i=new xt;for(const r of[-.9,-.3,.3,.9]){const o=pf(n);o.position.set(1.6,0,r),o.scale.setScalar(.9),i.add(o)}i.add(ht(.75,.75,1,t,-.4,.35,0,12,{thetaStart:0,thetaLength:Math.PI}));for(const r of[-.75,.65]){const o=ht(.55,.55,.1,t,-.4,.55,r,12);o.rotation.x=Math.PI/2,i.add(o)}i.add(ht(.22,.25,.9,e,-.5,.75,0,8));const s=$(ca,e,-.5,1.8,0);return s.scale.setScalar(.17),i.add(s),i}function iy(n,t,e){const i=new xt,s=$(ca,n);s.scale.set(.55,.17,.2);const r=$(ca,e,.55,.08,0);r.scale.setScalar(.13);const o=ht(0,.06,.16,t,.7,.06,0,6);o.rotation.z=-Math.PI/2;const a=U(.4,.04,.32,n,-.6,0,0);i.add(s,r,o,a);const l=[-1,1].map(h=>{const u=new xt;u.position.set(.05,.05,.12*h);const d=U(.5,.03,1.05,n,0,0,.52*h),f=U(.32,.03,.4,n,-.08,0,1.2*h);return u.add(d,f),i.add(u),{pivot:u,side:h}}),c=Math.random()*10;return i.userData.animate=h=>{const u=Math.sin(h*5+c),d=Math.max(0,Math.sin(h*.6+c));for(const{pivot:f,side:p}of l)f.rotation.x=p*(.15+u*.55*(1-d))},i}const sy=[{name:"I",subtitle:"The Euphrates crossing",segments:[{glyphs:"𓅃",kinds:"w",reading:"Horus"},{frame:"serekh",glyphs:"𓃒𓂡𓈍𓅓𓌀𓏏𓊖",kinds:"wffwnfw",reading:"Strong Bull, Appearing in Thebes"},{glyphs:"𓇓𓆤",kinds:"nw",reading:"King of Upper and Lower Egypt"},{frame:"cartouche",glyphs:"𓇳𓏠𓆣",kinds:"wfw",reading:"Menkheperre"},{glyphs:"𓍑𓄿𓂻𓊪𓐍𓂋𓅨𓈖𓈖𓉔𓂋𓈖𓈉",kinds:"nwwfffwffwfff",reading:"who crossed the Great Bend of Naharin"},{glyphs:"𓅓𓈖𓆱𓐍𓏏𓂡𓅓𓄊𓋴𓂋𓂡𓁷𓄂𓏏𓀎𓏥𓆑",kinds:"wfffffwnnffwwfwff",reading:"in might and victory, at the head of his army"},{glyphs:"𓁹𓄡𓄿𓇋𓇋𓏏𓀐𓉻𓏏𓇋𓅓𓋴𓈖𓏥",kinds:"fwwnnfwffnwnff",reading:"making a great slaughter among them"}]},{name:"II",subtitle:"The boundary at the Horn of the Earth",segments:[{glyphs:"𓅉𓌂𓄖𓏏𓂦𓈍𓏥",kinds:"wnwfnff",reading:"Golden Horus: Powerful of strength, sacred of appearances"},{glyphs:"𓇓𓆤",kinds:"nw",reading:"King of Upper and Lower Egypt"},{frame:"cartouche",glyphs:"𓇳𓏠𓆣",kinds:"wfw",reading:"Menkheperre"},{glyphs:"𓅭𓇳",kinds:"ww",reading:"Son of Ra"},{frame:"cartouche",glyphs:"𓅝𓄟𓋴𓄤𓆣𓏥",kinds:"wnnwwf",reading:"Thutmose, beautiful of forms"},{glyphs:"𓁹𓈖𓆑𓇾𓈙𓆑𓂋𓄋𓏏𓇾",kinds:"ffffffffff",reading:"who set his boundary at the Horn of the Earth"},{glyphs:"𓊪𓎛𓅱𓈖𓉔𓂋𓈖𓈉",kinds:"fnwfwfff",reading:"and at the marshes of Naharin"}]},{name:"III",subtitle:"Dedication to Amun-Ra",segments:[{glyphs:"𓅃",kinds:"w",reading:"Horus"},{frame:"serekh",glyphs:"𓃒𓂡𓈍𓅓𓌀𓏏𓊖",kinds:"wffwnfw",reading:"Strong Bull, Appearing in Thebes"},{glyphs:"𓅒𓎝𓇓𓏏𓏇𓇳𓅓𓇯",kinds:"wwnfnwwf",reading:"He of the Two Ladies: Enduring of kingship, like Ra in heaven"},{glyphs:"𓇓𓆤",kinds:"nw",reading:"King of Upper and Lower Egypt"},{frame:"cartouche",glyphs:"𓇳𓏠𓆣",kinds:"wfw",reading:"Menkheperre"},{glyphs:"𓁹𓈖𓆑𓅓𓏠𓏌𓅱𓆑𓈖𓇋𓏏𓆑",kinds:"fffwffwffnff",reading:"He made it as his monument for his father"},{glyphs:"𓇋𓏠𓈖𓇳𓎟𓊨𓏥𓇾𓇾",kinds:"nffwfnfff",reading:"Amun-Ra, lord of the thrones of the Two Lands"},{glyphs:"𓋴𓂝𓊢𓂝𓈖𓆑𓏏𓐍𓈖𓉶𓏥𓅨𓂋𓅱𓏥",kinds:"nfnffffffnfwfwf",reading:"erecting for him great obelisks"}]},{name:"IV",subtitle:"Lord of victories",segments:[{glyphs:"𓅉𓌂𓄖𓏏𓂦𓈍𓏥",kinds:"wnwfnff",reading:"Golden Horus: Powerful of strength, sacred of appearances"},{glyphs:"𓅭𓇳",kinds:"ww",reading:"Son of Ra"},{frame:"cartouche",glyphs:"𓅝𓄟𓋴𓄤𓆣𓏥",kinds:"wnnwwf",reading:"Thutmose, beautiful of forms"},{glyphs:"𓌻𓂋𓇋𓏠𓈖𓇳𓎟𓊨𓏥𓇾𓇾",kinds:"wfnffwfnfff",reading:"beloved of Amun-Ra, lord of the thrones of the Two Lands"},{glyphs:"𓎟𓈖𓆱𓐍𓏏𓂡𓏥𓎁𓇾𓏥𓎟",kinds:"fffffffwfff",reading:"lord of victories, who seizes every land"},{glyphs:"𓏙𓋹𓏇𓇳𓆓𓏏𓇿",kinds:"nnnwnff",reading:"Given life, like Ra, forever"}]}],zo={sky:"𓇯",king:"𓀢",god:"𓊹",amun:"𓀭"},ry=["DIFFICILIS QVONDAM DOMINIS PARERE SERENIS","IVSSVS ET EXTINCTIS PALMAM PORTARE TYRANNIS","OMNIA THEODOSIO CEDVNT SVBOLIQVE PERENNI","TER DENIS SIC VICTVS EGO DOMITVSQVE DIEBVS","IVDICE SVB PROCLO SVPERAS ELATVS AD AVRAS"],oy=["ΤΟΤΕΤΡΑΠΛΕΥΡΟΝΘΑΥΜΑΤΩΝΜΕΤΑΡΣΙΩΝ","ΧΡΟΝΩΦΘΑΡΕΝΝΥΝΚΩΝΣΤΑΝΤΙΝΟΣΔΕΣΠΟΤΗΣ","ΟΥΡΩΜΑΝΟΣΠΑΙΣΔΟΞΑΤΗΣΣΚΗΠΤΟΥΧΙΑΣ","ΚΡΕΙΤΤΟΝΝΕΟΥΡΓΕΙΤΗΣΠΑΛΑΙΘΕΩΡΙΑΣ","ΟΓΑΡΚΟΛΟΣΣΟΣΘΑΜΒΟΣΗΝΕΝΤΗΡΟΔΩ","ΚΑΙΧΑΛΚΟΣΟΥΤΟΣΘΑΜΒΟΣΕΣΤΙΝΕΝΘΑΔΕ"],ay=["ΚΙΟΝΑ ΤΕΤΡΑΠΛΕΥΡΟΝ ΑΕΙ ΧΘΟΝΙ ΚΕΙΜΕΝΟΝ ΑΧΘΟΣ","ΜΟΥΝΟΣ ΑΝΑΣΤΗΣΑΙ ΘΕΥΔΟΣΙΟΣ ΒΑΣΙΛΕΥΣ","ΤΟΛΜΗΣΑΣ ΠΡΟΚΛΟΣ ΕΠΕΚΕΚΛΕΤΟ ΚΑΙ ΤΟΣΟΣ ΕΣΤΗ","ΚΙΩΝ ΗΕΛΙΟΙΣ ΕΝ ΤΡΙΑΚΟΝΤΑ ΔΥΩ"],cc=["north","south","east","west"],ha='"Noto Sans Egyptian Hieroglyphs"',Gc="Cinzel",$r='"EB Garamond"',ly=[194,132,118],mf=[230,224,212],Xn="rgba(78, 66, 56, 0.72)",cy="rgba(70, 58, 48, 0.3)",hy="rgb(242, 238, 228)",uy="rgb(222, 215, 202)",gf="rgba(50, 26, 24, 0.92)",_f="rgba(246, 206, 192, 0.5)",vf="rgba(62, 54, 46, 0.88)",xf="rgba(250, 247, 240, 0.9)";let Bu=null;function dy(){return Bu??=Promise.allSettled([document.fonts.load(`100px ${ha}`,"𓇳𓏠𓆣"),document.fonts.load(`40px ${Gc}`,"AVM"),document.fonts.load(`40px ${$r}`,"ΑΒΓ")]).then(()=>!0),Bu}const fy=()=>[ha,Gc,$r].every(n=>document.fonts.check(`20px ${n}`));function $n(n,t,e,{tile:i=!1,text:s=!1}={}){const r=document.createElement("canvas");r.width=n,r.height=t;const o=r.getContext("2d"),a=new Ld(r);a.colorSpace=rn,a.anisotropy=8,i&&(a.wrapS=a.wrapT=lr);const l=h=>{o.setTransform(1,0,0,1,0,0),e(o,n,t,h),a.needsUpdate=!0},c=!s||fy();return l(c),c||dy().then(()=>l(!0)),a}const Kr=([n,t,e],i=1)=>`rgba(${n|0}, ${t|0}, ${e|0}, ${i})`;function oo(n,t,e,i){n.fillStyle=Kr(i),n.fillRect(0,0,t,e)}function ti(n,t,e,i,{count:s,color:r,size:o,alpha:a,amount:l=.3}){for(let c=0;c<s;c++){const h=1+(i.next()-.5)*l;n.fillStyle=Kr(r.map(d=>Math.min(255,d*h)),a);const u=.6+i.next()*o;n.fillRect(i.next()*t,i.next()*e,u,u)}}const En=(n,t,e,i,s)=>{n.beginPath(),n.moveTo(t,e),n.lineTo(i,s),n.stroke()};function zu(n,t,e,i){oo(n,t,e,ly),ti(n,t,e,i,{count:t*e/55,color:[74,44,44],size:2.2,alpha:.5}),ti(n,t,e,i,{count:t*e/80,color:[236,214,202],size:1.8,alpha:.5}),ti(n,t,e,i,{count:t*e/420,color:[38,24,24],size:3,alpha:.6})}function Sa(n,t,e,i){oo(n,t,e,mf);for(let s=0;s<10;s++){const r=i.next()*t,o=i.next()*e,a=(.2+i.next()*.3)*Math.max(t,e),l=n.createRadialGradient(r,o,0,r,o,a);l.addColorStop(0,"rgba(206, 200, 190, 0.45)"),l.addColorStop(1,"rgba(206, 200, 190, 0)"),n.fillStyle=l,n.fillRect(r-a,o-a,a*2,a*2)}n.lineWidth=1;for(let s=0;s<14;s++){n.strokeStyle=`rgba(118, 124, 132, ${.06+i.next()*.1})`;const r=i.next()*e;n.beginPath(),n.moveTo(-10,r),n.bezierCurveTo(t*.3,r+i.range(-e*.08,e*.08),t*.6,r+i.range(-e*.08,e*.08),t+10,r+i.range(-e*.03,e*.03)),n.stroke()}ti(n,t,e,i,{count:t*e/600,color:[200,194,184],size:1.5,alpha:.35})}function py(n,t,e,i){oo(n,t,e,[118,58,54]),ti(n,t,e,i,{count:2600,color:[206,160,152],size:2.6,alpha:.7}),ti(n,t,e,i,{count:1400,color:[52,20,22],size:2.2,alpha:.6}),ti(n,t,e,i,{count:300,color:[232,206,196],size:3.6,alpha:.6})}function Bi(n,t,e,i,s,r){n.font=`100px ${ha}`,n.textBaseline="alphabetic",n.textAlign="left";const o=n.measureText(t),a=Math.max(1,o.actualBoundingBoxLeft+o.actualBoundingBoxRight),l=Math.max(1,o.actualBoundingBoxAscent+o.actualBoundingBoxDescent),c=Math.min(s/a,r/l);n.font=`${(100*c).toFixed(1)}px ${ha}`;const h=e-(o.actualBoundingBoxRight-o.actualBoundingBoxLeft)/2*c,u=i+(o.actualBoundingBoxAscent-o.actualBoundingBoxDescent)/2*c;n.fillStyle=_f,n.fillText(t,h+2,u+2),n.fillStyle=gf,n.fillText(t,h,u)}function ls(n,t){n.save(),n.translate(2,2),n.strokeStyle=n.fillStyle=_f,t(n),n.restore(),n.strokeStyle=n.fillStyle=gf,t(n)}function my(n,t){const e=[...n],i=[];for(let s=0;s<e.length;s++)if(t[s]==="f"){const r=[e[s]];for(;r.length<3&&t[s+1]==="f";)r.push(e[++s]);i.push({signs:r,height:[.58,.82,1][r.length-1],stacked:!0})}else s+1<e.length&&t[s+1]!=="f"?(i.push({signs:[e[s],e[s+1]],height:1}),s++):i.push({signs:[e[s]],height:1});return i}function gy(n,t,e,i,s){const r=t/2,o=i-e;Bi(n,zo.sky,r,e+o*.08,s*.98,o*.1),Bi(n,zo.king,r-s*.3,e+o*.6,s*.34,o*.56),Bi(n,zo.god,r,e+o*.6,s*.16,o*.36),Bi(n,zo.amun,r+s*.3,e+o*.56,s*.36,o*.66),ls(n,a=>a.fillRect(r-s/2,i-8,s,6))}function _y(n,t,e,i,s){const r=t*.56,o=t/2,a=e*.006,l=e*.082,c=l+e*.014,h=e*.988,u=i.segments.map(m=>({...m,rows:my(m.glyphs,m.kinds)})),d=.2,f=m=>m.frame==="cartouche"?.55:m.frame==="serekh"?1.05:0,p=u.reduce((m,y)=>m+y.rows.reduce((M,x)=>M+x.height,0)+d+f(y),0),_=Math.min(t*.4,(h-c)/p);if(!s){let m=c;n.lineWidth=3;for(const y of u){for(const M of y.rows){const x=M.height*_;ls(n,L=>L.strokeRect(o-r*.35,m+4,r*.7,x-8)),m+=x}m+=d*_}return}gy(n,t,a,l,r);let g=c;for(const m of u){const y=g;m.frame&&(g+=_*.25);const M=m.frame==="cartouche"?_*1.5:m.frame==="serekh"?_*1.3:0,x=M?M*.74:r;for(const L of m.rows){const A=L.height*_;if(L.stacked){const R=A/L.signs.length;L.signs.forEach((I,T)=>Bi(n,I,o,g+R*(T+.5),x*.95,R*.86))}else if(L.signs.length===2){const R=x/2-_*.04;Bi(n,L.signs[0],o-x/4,g+A/2,R,A*.94),Bi(n,L.signs[1],o+x/4,g+A/2,R,A*.94)}else Bi(n,L.signs[0],o,g+A/2,x,A*(L.height<1?.86:.96));g+=A}if(n.lineWidth=6,m.frame==="cartouche"){g+=_*.15;const L=y+4,A=g-L;ls(n,R=>{R.beginPath(),R.roundRect(o-M/2,L,M,A,M/2),R.stroke()}),ls(n,R=>R.fillRect(o-M*.62,g+4,M*1.24,8)),g+=_*.15}else if(m.frame==="serekh"){const L=_*.7,A=y+4;ls(n,R=>R.strokeRect(o-M/2,A,M,g-A+L)),ls(n,R=>R.fillRect(o-M/2,g,M,6));for(let R=0;R<7;R++){const I=o-M/2+10+R*(M-20)/6.5;ls(n,T=>T.fillRect(I,g+L*.15,6,L*.75))}g+=L}g+=d*_}}function Ht(n,t,{fill:e=hy,depth:i=3,width:s=1.4}={}){n.save(),n.translate(i*.7,i),n.fillStyle=cy,n.beginPath(),t(n),n.fill(),n.restore(),n.fillStyle=e,n.strokeStyle=Xn,n.lineWidth=s,n.beginPath(),t(n),n.fill(),n.stroke()}const Ti=(n,t,e,i)=>s=>s.ellipse(n,t,e,i,0,0,Math.PI*2),Ue=(n,t,e,i)=>s=>s.rect(n,t,e,i),kn=n=>t=>{t.moveTo(n[0][0],n[0][1]);for(const[e,i]of n.slice(1))t.lineTo(e,i);t.closePath()};function Ea(n,t,e,i){Ht(n,Ti(t,e-i*.18,i*1.04,i*.98),{fill:uy,depth:2}),Ht(n,Ti(t,e+i*.12,i*.78,i*.92),{depth:2}),n.fillStyle=Xn,n.fillRect(t-i*.44,e,i*.24,i*.1),n.fillRect(t+i*.2,e,i*.24,i*.1),n.fillRect(t-i*.16,e+i*.5,i*.32,i*.08)}function Mf(n,t,e,i){Ht(n,s=>{s.moveTo(t-i*1.6,e),s.lineTo(t-i*1.5,e-i*1.2),s.quadraticCurveTo(t,e-i*2.1,t+i*1.5,e-i*1.2),s.lineTo(t+i*1.6,e),s.closePath()}),Ea(n,t,e-i*2.3,i)}function hc(n,t,e,i,s){n.strokeStyle="rgba(78, 66, 56, 0.3)",n.lineWidth=1;for(const r of[-.5,-.15,.2,.55])En(n,t+r*s*.9,e,t+r*s*1.1,i)}function vi(n,t,e,i,{arms:s="down"}={}){const r=i*.085,o=e-i+r*2.5,a=r*1.75;if(Ht(n,l=>{l.moveTo(t-a,o),l.quadraticCurveTo(t,o-r*.9,t+a,o),l.lineTo(t+a*1.15,e),l.lineTo(t-a*1.15,e),l.closePath()}),hc(n,t,o+r,e-4,a),s==="raised")for(const l of[-1,1])Ht(n,c=>{c.moveTo(t+l*a*.7,o+r*.4),c.lineTo(t+l*a*1.9,o-r*1.6),c.lineTo(t+l*a*2.2,o-r*1.2),c.lineTo(t+l*a*.9,o+r*1.1),c.closePath()},{depth:2});Ea(n,t,o-r*1.15,r)}function vy(n,t,e,i){const s=i*.1,r=e-i+s*2.5,o=e-i*.4,a=s*1.9;Ht(n,kn([[t-a,r],[t+a,r],[t+a*1.1,o],[t+a*1.45,o],[t+a*1.45,e],[t-a*1.45,e],[t-a*1.45,o],[t-a*1.1,o]])),hc(n,t,r+s,o-2,a),hc(n,t,o+3,e-3,a*1.3),Ea(n,t,r-s*1.15,s)}function ku(n,t,e,i,s){const r=i*.14,o=e-i+r*2.4;Ht(n,kn([[t-s*r*1.6,e],[t-s*r*1.9,e-i*.45],[t-s*r*.8,o],[t+s*r*1.1,o+r*.3],[t+s*r*1.4,e-i*.4],[t+s*r*.6,e]])),Ht(n,kn([[t+s*r*.9,o+r],[t+s*r*3.2,o+r*1.4],[t+s*r*3.1,o+r*2],[t+s*r*.8,o+r*1.7]]),{depth:2}),Ht(n,Ti(t+s*r*3.4,o+r*1.3,r*.9,r*.45),{depth:2}),Ea(n,t+s*r*.2,o-r*1.1,r)}function Rr(n,t,e,i,s,r,o){const a=(e-t)/r;for(let l=s-1;l>=0;l--){const c=i-l*o*1.9,h=l%2?a/2:0;for(let u=0;u<r-l%2;u++)Mf(n,t+a*(u+.5)+h,c,o)}}function xy(n,t,e,i,s,r=24){n.save(),n.beginPath(),n.rect(t,e,i-t,s-e),n.clip(),n.fillStyle="rgba(70, 58, 48, 0.08)",n.fillRect(t,e,i-t,s-e),n.strokeStyle=Xn,n.lineWidth=1.6;const o=s-e;for(let a=t-o;a<i+o;a+=r)En(n,a,e,a+o,s),En(n,a+o,e,a,s);n.restore(),Ht(n,Ue(t,e-6,i-t,7),{depth:2}),Ht(n,Ue(t,s-1,i-t,7),{depth:2})}function My(n,t,e,i,s){Ht(n,Ue(t-s/2,e,s,i-e),{depth:2})}function Br(n,t,e,i,s){Ht(n,Ue(t-s/2,e+s*.7,s,i-e-s*.7)),Ht(n,Ue(t-s*.95,e,s*1.9,s*.7)),Ht(n,Ue(t-s*.8,i-s*.4,s*1.6,s*.4),{depth:2})}function Hu(n,t,e,i,s,r){const o=(t+e)/2,a=(e-t)/2;Ht(n,l=>{l.ellipse(o,i,a,s,0,Math.PI,0),l.ellipse(o,i,a-r,s-r,0,0,Math.PI,!0),l.closePath()})}function yy(n,t,e,i){Ht(n,Ti(t,e,i*.84,i)),Ht(n,Ti(t,e,i*.22,i*.26),{depth:2})}function yf(n,t,e,i){n.strokeStyle=Xn,n.lineWidth=3,En(n,t,e+10,t,i),Ht(n,kn([[t,e],[t+5,e+14],[t-5,e+14]]),{depth:1})}function Sy(n,t,e,i){yf(n,t,e,i),Ht(n,Ue(t+3,e+14,30,26),{depth:2}),n.strokeStyle=Xn,n.lineWidth=1.6,En(n,t+10,e+36,t+26,e+18),En(n,t+26,e+36,t+10,e+18),En(n,t+18,e+16,t+18,e+38),n.beginPath(),n.arc(t+21,e+21,4,Math.PI,Math.PI*2.6),n.stroke()}function Ey(n,t,e,i,s,r){const o=(i-e)/r;for(let a=0;a<r;a++)Ht(n,Ue(t-s/2,e+a*o,s,o-2),{depth:2})}function Vu(n,t,e,i,s){Ht(n,Ue(t,e-s*.38,i,s*.38));const r=7,o=(i-8)/r;for(let a=0;a<r;a++){const l=s*.62*(.5+.5*a/(r-1));Ht(n,Ue(t+4+a*o,e-s*.38-l,o-3,l),{depth:2})}}function Gu(n,t,e,i){Ht(n,Ti(t,e,i,i*.55)),Ht(n,Ue(t-i*.3,e-i*1.4,i*.6,i*1.4),{depth:2}),n.strokeStyle=Xn,n.lineWidth=2.5;for(const s of[.3,1.2,2.1,3])En(n,t-Math.cos(s)*i*1.5,e-i*1.1-Math.sin(s)*i*.3,t+Math.cos(s)*i*1.5,e-i*1.1+Math.sin(s)*i*.3)}function by(n,t,e,i){const s=e-i*.55;Ht(n,Ti(t,s,i*.5,i*.24),{depth:2}),Ht(n,kn([[t+i*.35,s-i*.1],[t+i*.62,s-i*.5],[t+i*.85,s-i*.42],[t+i*.72,s-i*.2],[t+i*.5,s+i*.05]]),{depth:2}),n.strokeStyle=Xn,n.lineWidth=3;for(const[r,o]of[[-.36,-.12],[-.22,.1],[.2,-.1],[.36,.14]])En(n,t+r*i,s+i*.18,t+(r+o)*i,e)}function Ty(n,t,e,i){for(let s=3;s>=0;s--)by(n,t+i*.9+s*i*.12,e-s*3,i*.9);Ht(n,kn([[t-i*.1,e-i*.5],[t+i*.45,e-i*.5],[t+i*.5,e-i*.2],[t-i*.15,e-i*.2]])),Ht(n,Ti(t+i*.18,e-i*.2,i*.22,i*.22),{depth:2}),n.strokeStyle=Xn,n.lineWidth=1.5;for(let s=0;s<Math.PI;s+=Math.PI/4)En(n,t+i*.18-Math.cos(s)*i*.2,e-i*.2-Math.sin(s)*i*.2,t+i*.18+Math.cos(s)*i*.2,e-i*.2+Math.sin(s)*i*.2);Mf(n,t+i*.18,e-i*.5,i*.11)}function wy(n,t,e,i,s){Sa(n,t,e,s),n.fillStyle="rgba(70, 58, 48, 0.07)",n.fillRect(0,0,t,e*.06),Ht(n,Ue(0,e*.06,t,5),{depth:2});const r=e*.1,o=e*.51,a=e*.53,l=e*.63,c=e*.875,h=t*.3,u=t*.7;Hu(n,h-8,u+8,r+e*.1,e*.09,12),Br(n,h,r+e*.02,o,14),Br(n,u,r+e*.02,o,14);const d=[.375,.46,.545,.63].map(p=>t*p),f=i==="south"?2:1;i==="north"?(d.forEach((p,_)=>vi(n,p,o-6,e*(_===f?.38:.33))),Sy(n,d[f]+30,r+e*.02,o-e*.06)):(d.forEach((p,_)=>vy(n,p,o-6,e*(_===f?.36:.3))),i==="east"&&Ht(n,Ti(d[f]+e*.07,o-e*.2,e*.025,e*.03),{depth:2})),Rr(n,t*.04,t*.27,o-4,2,3,e*.03),Rr(n,t*.73,t*.96,o-4,2,3,e*.03);for(const p of[t*.05,t*.95])yf(n,p+(p<t/2?14:-14),r+e*.03,o-e*.16),i!=="east"&&yy(n,p,o-e*.11,e*.065);xy(n,t*.02,a,t*.98,l);for(const p of[t*.02+6,h,t/2,u,t*.98-6])My(n,p,a-8,l+6,10);if(i==="south"&&(n.fillStyle=Kr(mf),n.fillRect(t*.43,a-8,t*.14,l-a+16),Ey(n,t/2,a-4,c-e*.1,t*.15,7),vi(n,t*.405,c,e*.3),vi(n,t*.595,c,e*.3)),i==="south")Rr(n,t*.04,t*.35,c,2,4,e*.028),Rr(n,t*.65,t*.96,c,2,4,e*.028),Hu(n,t*.43,t*.57,c,e*.08,8);else if(i==="north")Rr(n,t*.04,t*.96,c,2,11,e*.028);else if(i==="east"){Vu(n,t*.04,c,t*.1,e*.2),Vu(n,t*.86,c,t*.1,e*.2);for(let p=0;p<7;p++)vi(n,t*(.2+p*.1),c,e*.2,{arms:p%2?"raised":"down"})}else{for(let p=0;p<4;p++)ku(n,t*(.1+p*.09),c,e*.18,1);for(let p=0;p<5;p++)ku(n,t*(.9-p*.09),c,e*.18,-1)}Ht(n,Ue(0,c+4,t,5),{depth:2});for(let p=20;p<t;p+=36)Ht(n,kn([[p,e*.935],[p+9,e*.905],[p+18,e*.935],[p+9,e*.965]]),{depth:1,width:1});Ht(n,Ue(0,e*.975,t,5),{depth:2})}function Ay(n,t,e){const i=e*.5;Ht(n,Ue(t*.08,i-6,t*.84,12));for(const s of[t*.12,t*.88])for(const r of[-14,0,14])Ht(n,kn([[s+r,i-6],[s+r-7,i-6],[s+r-3.5,i-e*.22]]),{depth:2});for(const s of[t*.22,t*.63,t*.8])Br(n,s,e*.26,i-6,9),vi(n,s,e*.26,e*.1);for(const s of[t*.32,t*.72])Ht(n,kn([[s-9,i-6],[s+9,i-6],[s+5,e*.2],[s,e*.15],[s-5,e*.2]]));Br(n,t*.455,e*.3,i-6,9),Br(n,t*.545,e*.3,i-6,9),Ht(n,kn([[t*.43,e*.3],[t*.5,e*.19],[t*.57,e*.3]]));for(let s=0;s<4;s++)Ty(n,t*(.06+s*.235),e*.9,e*.3)}function Ry(n,t,e){Ht(n,kn([[t*.38,e*.4],[t*.42,e*.31],[t*.92,e*.25],[t*.92,e*.55],[t*.42,e*.49]]),{fill:"rgb(226, 206, 196)"}),Ht(n,Ue(t*.42,e*.55,t*.5,e*.035)),Ht(n,i=>{i.ellipse(t*.93,e*.42,t*.03,e*.17,0,-Math.PI/2,Math.PI/2),i.lineTo(t*.92,e*.59),i.lineTo(t*.92,e*.25),i.closePath()});for(const i of[t*.5,t*.58,t*.66])vi(n,i,e*.29,e*.17);n.strokeStyle=Xn,n.lineWidth=2;for(const i of[-6,6])En(n,t*.38,e*.4+i,t*.21,e*.42+i);Gu(n,t*.19,e*.44,e*.07);for(const i of[t*.1,t*.28])vi(n,i,e*.5,e*.17);En(n,t*.04,e*.69,t*.78,e*.69);for(let i=0;i<11;i++)vi(n,t*(.06+i*.066),e*.92,e*.26,{arms:i%3===1?"raised":"down"});Gu(n,t*.86,e*.84,e*.08),vi(n,t*.95,e*.92,e*.24)}function Wu(n,t,e,i,s,r){const o=t*.165,a=t*.835,l=e*.08,c=e*.78,h=c-l;n.fillStyle="rgba(70, 58, 48, 0.05)",n.fillRect(o,l,a-o,h),n.strokeStyle=Xn,n.lineWidth=2.4,n.strokeRect(o,l,a-o,h),n.lineWidth=1.3,n.strokeRect(o+8,l+8,a-o-16,h-16);for(const _ of[-1,1]){const g=_<0?o:a,m=g+_*t*.055;n.lineWidth=2.4,n.beginPath(),n.moveTo(g,l+h*.18),n.lineTo(m,l+h*.02),n.lineTo(m,c-h*.02),n.lineTo(g,c-h*.18),n.stroke()}if(!r)return;n.textAlign="center",n.textBaseline="middle","letterSpacing"in n&&(n.letterSpacing="0.07em"),n.font=`100px ${s}`;const u=Math.max(...i.map(_=>n.measureText(_).width)),d=Math.min((a-o)*.9*100/u,h*.84/(i.length*1.25));n.font=`${d.toFixed(1)}px ${s}`;const f=d*1.25,p=(l+c)/2-f*(i.length-1)/2;i.forEach((_,g)=>{const m=p+g*f;n.fillStyle=xf,n.fillText(_,t/2+1.5,m+1.5),n.fillStyle=vf,n.fillText(_,t/2,m)}),"letterSpacing"in n&&(n.letterSpacing="0px")}function Cy(n,t,e,i,s,r){Sa(n,t,e,s),i==="south"?Ay(n,t,e):i==="north"?Ry(n,t,e):i==="east"?Wu(n,t,e,ry,Gc,r):Wu(n,t,e,ay,$r,r),n.fillStyle="rgba(70, 58, 48, 0.06)",n.fillRect(0,e*.94,t,e*.06),Ht(n,Ue(0,e*.935,t,5),{depth:2})}function Py(n,t,e,i){Sa(n,t,e,i);const s=13,r=t/s;for(let o=0;o<s;o++){const a=r*(o+.5),l=r*.34,c=e*.9,h=e*.42,u=n.createLinearGradient(0,h-l,0,c);u.addColorStop(0,"rgba(60, 50, 42, 0.42)"),u.addColorStop(1,"rgba(60, 50, 42, 0.12)"),n.fillStyle=u,n.strokeStyle=Xn,n.lineWidth=2,n.beginPath(),n.moveTo(a-l,c),n.lineTo(a-l,h),n.arc(a,h,l,Math.PI,0),n.lineTo(a+l,c),n.closePath(),n.fill(),n.stroke()}Ht(n,Ue(0,e*.06,t,6),{depth:2}),Ht(n,Ue(0,e*.9,t,6),{depth:2})}const Ly=[[214,200,174],[200,186,160],[224,214,192],[186,178,162],[206,190,172],[172,168,156]],Iy=[138,128,112],Dy="rgba(54, 46, 40, 0.92)";function Sf(n,t,e,i){n.fillStyle=Dy,n.beginPath(),n.roundRect(t-i/2,e-i/2,i,i,i*.3),n.fill(),n.fillStyle="rgba(255, 255, 255, 0.28)",n.fillRect(t-i/2,e+i/2-1.5,i,1.5)}function Uy(n,t,e,i,s,r){const o=t.range(.92,1.06),a=t.pick(Ly).map(c=>c*o);n.fillStyle=Kr(a),n.fillRect(e,i,s,r);for(let c=0;c<3;c++)n.fillStyle=Kr(a.map(h=>h*.84),t.range(.12,.4)),n.beginPath(),n.ellipse(e+t.next()*s,i+t.next()*r,s*t.range(.08,.3),r*t.range(.1,.35),0,0,Math.PI*2),n.fill();n.fillStyle="rgba(255, 255, 255, 0.2)",n.fillRect(e,i,s,2),n.fillStyle="rgba(0, 0, 0, 0.2)",n.fillRect(e,i+r-2,s,2);const l=t.chance(.35)?0:t.int(1,3);for(let c=0;c<l;c++)Sf(n,e+t.range(.1,.9)*s,i+t.range(.25,.75)*r,t.range(9,16))}function Ny(n,t,e,i,{base:s,top:r,height:o}){oo(n,t,e,Iy);const a=e/o;let l=e;for(;l>0;){const c=s+(r-s)*(1-l/e),h=t/c,u=Math.max(0,l-i.range(.55,.95)*a);let d=-i.range(0,.8)*h;for(;d<t;){const f=i.range(.5,1.7)*h;Uy(n,i,d+2,u+2,f-4,l-u-4),d+=f}l=u}ti(n,t,e,i,{count:t*e/120,color:[120,110,96],size:1.6,alpha:.22}),ti(n,t,e,i,{count:t*e/200,color:[240,232,216],size:1.4,alpha:.25})}function Xu(n,t,e,i,{inscription:s=null,fonts:r=!0}={}){Sa(n,t,e,i);for(let u=0;u<26;u++)n.fillStyle=`rgba(110, 118, 128, ${i.range(.04,.12)})`,n.fillRect(0,i.next()*e,t,i.range(2,9));const o=s?e*.3:e*.92,a=s?22:64;for(let u=0;u<a;u++)Sf(n,i.range(.03,.97)*t,i.range(.06,1)*o,i.range(16,26));if(!s||!r)return;n.textAlign="center",n.textBaseline="middle",n.font=`100px ${$r}`;const l=Math.max(...s.map(u=>n.measureText(u).width)),c=e*.62/s.length,h=Math.min(t*.9*100/l,c*.8);n.font=`${h.toFixed(1)}px ${$r}`,s.forEach((u,d)=>{const f=e*.36+c*(d+.5);n.fillStyle=xf,n.fillText(u,t/2+1.5,f+1.5),n.fillStyle=vf,n.fillText(u,t/2,f)})}const Kn=(n,t)=>(e,i,s,r)=>t(e,i,s,Wn(qd(n)),r);let ko=null;function Oy(n){return ko||(ko={faces:cc.map(t=>$n(512,4096,Kn(`walled-${t}`,(e,i,s,r)=>Ny(e,i,s,r,n)))),cap:$n(256,256,Kn("walled-cap",(t,e,i,s)=>{oo(t,e,i,[204,190,166]),ti(t,e,i,s,{count:1500,color:[150,138,120],size:2,alpha:.3})})),pedestal:$n(1024,428,Kn("walled-pedestal",(t,e,i,s)=>Xu(t,e,i,s))),inscribed:$n(1024,428,Kn("walled-inscribed",(t,e,i,s,r)=>Xu(t,e,i,s,{inscription:oy,fonts:r})),{text:!0})},ko)}let Ho=null;function Fy(){return Ho||(Ho={faces:sy.map(n=>$n(512,4096,Kn(`face-${n.name}`,(t,e,i,s,r)=>{zu(t,e,i,s),_y(t,e,i,n,r)}),{text:!0})),upper:Object.fromEntries(cc.map(n=>[n,$n(1024,700,Kn(`upper-${n}`,(t,e,i,s)=>wy(t,e,i,n,s)))])),lower:Object.fromEntries(cc.map(n=>[n,$n(1400,460,Kn(`lower-${n}`,(t,e,i,s,r)=>Cy(t,e,i,n,s,r)),{text:n==="east"||n==="west"})])),arcade:$n(1024,256,Kn("arcade",Py)),pyramidion:$n(256,256,Kn("pyramidion",zu)),porphyry:$n(256,256,Kn("porphyry",py),{tile:!0})},Ho)}const By={lower:{width:3.5,height:1.15},arcade:{width:2.5,height:.62},porphyry:.62,upper:{width:3,height:2.15},cornice:.14,cube:{width:.55,height:.5,inset:.95},shaft:{base:2.5,top:1.76,height:17.2},pyramidion:1.35},Yu=[[1,1],[1,-1],[-1,1],[-1,-1]];function zy({lod:n="detail"}={}){const t=n==="detail",e=new xt,{lower:i,arcade:s,porphyry:r,upper:o,cornice:a,cube:l,shaft:c,pyramidion:h}=By,u=t?ky():null;let d=0;e.add(t?ul(i.width,i.height,d,u.lower):U(i.width,i.height,i.width,v.marble,0,d,0)),d+=i.height,e.add(t?ul(s.width,s.height,d,u.arcade):U(s.width,s.height,s.width,v.marble,0,d,0));const f=o.width/2-r/2;for(const[_,g]of Yu)e.add(U(r,s.height,r,t?u.porphyry:v.stoneDark,_*f,d,g*f));d+=s.height;const p=o.height-a;e.add(t?ul(o.width,p,d,u.upper):U(o.width,p,o.width,v.marble,0,d,0)),d+=p,e.add(U(o.width+.16,a,o.width+.16,v.marble,0,d,0)),d+=a;for(const[_,g]of Yu)e.add(U(l.width,l.height,l.width,t?u.bronze:v.bronze,_*l.inset,d,g*l.inset));if(d+=l.height,t){const _=new fe(Qd({...c,tip:h}),[...u.faces,u.pyramidion]);_.position.y=d,_.castShadow=_.receiveShadow=!0,e.add(_)}else{const _=y=>y/Math.SQRT2,g=new Ei(_(c.top),_(c.base),c.height,4,1).rotateY(Math.PI/4).translate(0,c.height/2,0);e.add($(g,v.hieroglyphs,0,d,0));const m=new _r(_(c.top),h,4).rotateY(Math.PI/4).translate(0,h/2,0);e.add($(m,v.granite,0,d+c.height,0))}return Re(e)}let Vo=null;function ky(){if(Vo)return Vo;const n=Fy(),t=r=>new Ee({map:r,bumpMap:r,bumpScale:.012,roughness:.6}),e=r=>new Ee({map:r,bumpMap:r,bumpScale:.02,roughness:.52}),i=r=>[t(r.north),t(r.south),v.marble,v.marble,t(r.east),t(r.west)],s=t(n.arcade);return Vo={lower:i(n.lower),upper:i(n.upper),arcade:[s,s,v.marble,v.marble,s,s],porphyry:new Ee({map:n.porphyry,roughness:.82}),bronze:new Ee({color:6059366,metalness:.55,roughness:.55}),faces:n.faces.map(e),pyramidion:new Ee({map:n.pyramidion,roughness:.52})},Vo}function ul(n,t,e,i){const s=new fe(new $i(n,t,n),i);return s.position.y=e+t/2,s.castShadow=s.receiveShadow=!0,s}function Hy({lod:n="detail"}={}){const t=n==="detail",e=new xt;e.add(U(3.2,.5,3.2,v.marble,0,0,0)),e.add(U(2.4,1.3,2.4,v.marble,0,.5,0));const i=5.6,s=6.5,r=1.8;for(let o=0;o<3;o++){const a=o/3*Math.PI*2,l=[];for(let p=0;p<=120;p++){const _=p/120,g=a+_*s*Math.PI*2,m=.32*(1-_*.25);l.push(new C(Math.cos(g)*m,r+_*i,Math.sin(g)*m))}const c=l.at(-1),h=new C(Math.cos(a),0,Math.sin(a)),u=[c,c.clone().addScaledVector(h,.35).add(new C(0,.5,0)),c.clone().addScaledVector(h,.9).add(new C(0,.95,0)),c.clone().addScaledVector(h,1.35).add(new C(0,1,0))],d=new ga([...l,...u.slice(1)]);e.add($(new xa(d,t?260:90,.2,t?10:6),v.bronze));const f=$(new ii(1,12,8),v.bronze);f.position.copy(u.at(-1)).addScaledVector(h,.25),f.scale.set(.3,.2,.48),f.lookAt(f.position.clone().add(h).add(new C(0,-.2,0))),e.add(f)}return Re(e)}const Ef={steps:[{width:5.4,height:.4},{width:4.6,height:.4}],slab:{width:4,height:.3},pedestal:{width:3.6,height:1.5},shaft:{base:3.4,top:1.9,height:28.7},cap:.6};function Vy({lod:n="detail"}={}){const t=n==="detail",e=new xt,{steps:i,slab:s,pedestal:r,shaft:o,cap:a}=Ef,l=t?Gy():null;let c=0;for(const h of i)e.add(U(h.width,h.height,h.width,v.marble,0,c,0)),c+=h.height;if(e.add(U(s.width,s.height,s.width,v.marble,0,c,0)),c+=s.height,t){const h=new fe(new $i(r.width,r.height,r.width),l.pedestal);h.position.y=c+r.height/2,h.castShadow=h.receiveShadow=!0,e.add(h)}else e.add(U(r.width,r.height,r.width,v.marble,0,c,0));if(c+=r.height,t){const h=new fe(Qd({...o,tip:a}),[...l.faces,l.cap]);h.position.y=c,h.castShadow=h.receiveShadow=!0,e.add(h)}else{const h=p=>p/Math.SQRT2,u=new Ei(h(o.top),h(o.base),o.height,4,1).rotateY(Math.PI/4).translate(0,o.height/2,0),d=u.attributes.uv;for(let p=0;p<d.count;p++)d.setXY(p,d.getX(p)*12,d.getY(p)*o.height);e.add($(u,v.stone,0,c,0));const f=new _r(h(o.top),a,4).rotateY(Math.PI/4).translate(0,a/2,0);e.add($(f,v.stone,0,c+o.height,0))}return Re(e)}let Go=null;function Gy(){if(Go)return Go;const n=Oy(Ef.shaft),t=(i,s)=>new Ee({map:i,bumpMap:i,bumpScale:s,roughness:.9}),e=t(n.pedestal,.015);return Go={faces:n.faces.map(i=>t(i,.03)),cap:new Ee({map:n.cap,roughness:.9}),pedestal:[t(n.inscribed,.012),e,v.marble,v.marble,e,e]},Go}const je=-160,On=215,Ks=38,qn=62,jr=[-114,134],Vs=1.6,zr={"obelisk-of-theodosius":{x:72,create:zy},"serpent-column":{x:22,create:Hy},"walled-obelisk":{x:-62,create:Vy}};function Wy({lod:n="detail"}={}){const t=n==="detail",e=new xt;e.add(U(520,1,190,v.paving,30,-1,0)),e.add($(new Ms(Xy(),24).rotateX(-Math.PI/2),v.sand,0,.05,0));const i=t?7:3;for(let s=0;s<i;s++){const r=Ks+s*(qn-Ks)/i,o=1.6+(s+1)*12/i,a=new ri(Yy(r,qn),{depth:o,bevelEnabled:!1,curveSegments:24});e.add($(a.rotateX(-Math.PI/2),s%2?v.marble:v.stone))}return qy(e,t),Zy(e,n),$y(e,t),Ky(e,t),Re(e),t&&jy(e),e}function Xy(){const n=new Qe;return n.moveTo(On,Ks),n.lineTo(je,Ks),n.absarc(je,0,Ks,Math.PI/2,Math.PI*1.5,!1),n.lineTo(On,-Ks),n}function Yy(n,t){const e=new Qe;return e.moveTo(On,t),e.lineTo(je,t),e.absarc(je,0,t,Math.PI/2,Math.PI*1.5,!1),e.lineTo(On,-t),e.lineTo(On,-n),e.lineTo(je,-n),e.absarc(je,0,n,Math.PI*1.5,Math.PI/2,!0),e.lineTo(On,n),e.lineTo(On,t),e}function qy(n,t){const e=On-je,i=(On+je)/2,s=17;for(const a of[-1,1]){const l=t?$(Vn({length:e,height:s,thickness:2,openings:[...Gi(e,46,{width:4.4,bottom:0,spring:5.5}),...Gi(e,46,{width:3.2,bottom:9,spring:13})]}),v.banded):U(e,s,2,v.banded);l.position.set(i,0,a*(qn+1)),n.add(l)}const r=new Qe;r.moveTo(je,qn+2),r.absarc(je,0,qn+2,Math.PI/2,Math.PI*1.5,!1),r.lineTo(je,-qn+1),r.absarc(je,0,qn-1,Math.PI*1.5,Math.PI/2,!0),r.lineTo(je,qn+2);const o=new ri(r,{depth:s+3,bevelEnabled:!1,curveSegments:32});if(n.add($(o.rotateX(-Math.PI/2),v.banded)),t){const a=yi(4.4,7.5),l=yi(3,5);for(let c=1;c<24;c++){const h=Math.PI/2+c/24*Math.PI;n.add(zn($(a,v.opening),h,qn+2.05,0,je,0)),n.add(zn($(l,v.opening),h,qn+2.05,10,je,0))}}}function Zy(n,t){const[e,i]=jr;n.add(U(i-e-8,Vs,7,v.marble,(e+i)/2,0,0));for(const s of jr){n.add(ht(3.8,3.8,Vs,v.marble,s,0,0,20));for(const r of[-2,0,2])n.add(Ma(.8,6,v.gold,s,Vs,r,10))}if(t==="detail")for(const{x:s,create:r}of Object.values(zr)){const o=r({lod:t});o.position.set(s,Vs,0),n.add(o)}for(const s of[-95,-25,45,105])n.add(ht(.65,.75,9,v.marble,s,Vs,0,10)),n.add(ht(.35,.5,2.2,v.bronze,s,10.6,0,8)),n.add(ht(.3,.3,.6,v.bronze,s,12.8,0,8))}function $y(n,t){if(n.add(U(32,22,16,v.banded,40,0,68)),n.add(Tn(32,16,5,v.lead,40,22,68)),n.add(U(28,1,7,v.marble,40,13,56.5)),n.add(U(28,.3,7.5,fs(6037347),40,20,56.5)),t){const i=wn({length:26,count:6,height:7,radius:.35,capitalMaterial:v.gold});i.position.set(40,14,53.4),n.add(i)}}function Ky(n,t){const e=On+6;n.add(U(12,13,124,v.banded,e,0,0));for(const s of[-1,1]){n.add(U(15,22,15,v.banded,e,0,s*66));const r=$(Me(15),v.banded,e,22,s*66+7);n.add(r)}if(!t)return;const i=ze({count:12,spacing:9.5,width:5,height:8,y:.5});i.position.x=On-.05,i.rotation.y=-Math.PI/2,n.add(i),n.add(U(10,3,14,v.marble,e,13,0));for(const s of[-3.6,-1.2,1.2,3.6]){const r=pf(v.gildedBronze,{rearing:Math.abs(s)<2});r.scale.setScalar(1.4),r.rotation.y=Math.PI,r.position.set(e+1,16,s),n.add(r)}}function jy(n){const t=[{color:3104168,lane:15,speed:17,offset:0},{color:3836476,lane:19,speed:16.4,offset:30},{color:11743276,lane:23,speed:16.8,offset:70},{color:15921126,lane:27,speed:16,offset:110}];for(const{color:e,lane:i,speed:s,offset:r}of t){const o=ny({horseMaterial:v.trunk,carMaterial:v.gold,colorMaterial:fs(e)});o.scale.setScalar(1.6),o.position.y=.05;const a=2*(jr[1]-jr[0])+2*Math.PI*i;o.userData.animate=l=>{const{x:c,z:h,heading:u}=Jy((l*s+r)%a,i);o.position.x=c,o.position.z=h,o.rotation.y=u},n.add(o)}}function Jy(n,t){const[e,i]=jr,s=i-e,r=Math.PI*t;if(n<s)return{x:e+n,z:t,heading:0};if(n-=s,n<r){const a=n/t;return{x:i+t*Math.sin(a),z:t*Math.cos(a),heading:a}}if(n-=r,n<s)return{x:i-n,z:-t,heading:Math.PI};const o=(n-s)/t;return{x:e-t*Math.sin(o),z:-t*Math.cos(o),heading:Math.PI+o}}const re=20,oe=11,Ye=5,yn=88;function Qy({lod:n="detail"}={}){const t=n==="detail",e=new xt;dl(e,260,92,re,-56),dl(e,260,60,oe,20),dl(e,260,38,Ye,69);for(const[s,r,o,a]of[[-110,-10,oe,re],[60,50,Ye,oe]]){const l=xx(10,10,(a-o)/10,1.2,v.marble);l.position.set(s,o,r+12),l.rotation.y=Math.PI,e.add(l)}tS(e,t),eS(e,t),nS(e,t),iS(e,t),sS(e,t),rS(e),oS(e,t);const i=t?[[-110,re,-30],[-100,re,-24],[100,re,-20],[110,re,-36],[-15,oe,40],[0,oe,44],[15,oe,40],[-120,oe,40],[120,Ye,64],[110,Ye,60],[85,Ye,64]]:[[-110,re,-30],[100,re,-20],[0,oe,44],[110,Ye,60]];for(const[s,r,o]of i)e.add(Math.abs(s)>100?so(9,s,r,o):Ki(12,s,r,o));return Re(e),t&&aS(e),e}function dl(n,t,e,i,s){n.add(U(t,i+2,e,v.banded,0,-2,s)),n.add(ye(t,e,v.paving,0,i+.03,s))}function tS(n,t){const[e,i]=[-70,-86];if(n.add(U(28,14,18,v.marble,e,re,i)),n.add(ht(7.5,7.5,3,v.marble,e,re+14,i,20)),n.add(we(7.5,v.gildedBronze,e,re+17,i,{heightScale:.75})),n.add(U(5,8,.4,v.bronze,e,re,i-9.1)),t){const s=wn({length:22,count:6,height:10,radius:.5});s.position.set(e,re,i-12),n.add(s),n.add(U(26,.8,5,v.marble,e,re+10,i-11.5))}}function eS(n,t){const[e,i]=[-10,-62];if(n.add(U(70,13,18,v.stone,e,re,i)),n.add(Tn(70,18,5,v.roof,e,re+13,i)),t){const s=wn({length:66,count:14,height:8,radius:.4});s.position.set(e,re,i+13),n.add(s),n.add(U(70,.5,5,v.roof,e,re+8,i+11.5));const r=ze({count:14,spacing:4.8,width:1.6,height:2.8,y:9.2});r.position.set(e,re,i+9.05),n.add(r)}}function nS(n,t){const[e,i]=[70,-72];if(n.add(U(46,11,28,v.stone,e,re,i)),n.add(U(46,18,14,v.stone,e,re,i)),n.add(Gn(46,14,4,v.roof,e,re+18,i)),n.add(U(46.6,.5,28.6,v.lead,e,re+11,i)),n.add(qe(ht(6.5,6.5,15,v.stone,e+23,re,i,16,{thetaStart:-Math.PI/2,thetaLength:Math.PI}),1,0)),n.add(qe(we(6.5,v.lead,e+23,re+15,i,{phiLength:Math.PI,heightScale:.8}),1,0)),t)for(const s of[-1,1]){const r=ze({count:8,spacing:5,width:1.8,height:3.2,y:13});r.position.set(e,re,i+s*7.05),r.rotation.y=s>0?0:Math.PI,n.add(r)}}function iS(n,t){const[e,i]=[22,-28];n.add(ht(14,14,15,v.stone,e,re,i,8));for(let s=0;s<8;s++){const r=s/8*Math.PI*2+Math.PI/8,o=ht(5,5,10,v.stone,0,0,0,12,{thetaStart:-Math.PI/2,thetaLength:Math.PI});n.add(zn(o,r,12.6,re,e,i));const a=we(5,v.lead,0,0,0,{phiLength:Math.PI,heightScale:.7,segments:12});n.add(zn(a,r,12.6,re+10,e,i))}if(n.add(ht(12.5,12.5,3.5,v.stone,e,re+15,i,24)),n.add(we(12.5,v.gold,e,re+18.5,i,{heightScale:.55,segments:32})),t){const s=yi(1.4,2.6);for(let r=0;r<16;r++)n.add(zn($(s,v.opening),r/16*Math.PI*2,12.55,re+15.4,e,i))}}function sS(n,t){const[e,i]=[-62,18],[s,r]=[58,44];n.add(ye(s-10,r-10,v.mosaic,e,oe+.06,i));for(const o of[-1,1])if(n.add(U(s,8,1.2,v.stone,e,oe,i+o*(r/2))),n.add(U(s,.5,6,v.roof,e,oe+8,i+o*(r/2-2.5))),n.add(U(1.2,8,r,v.stone,e+o*(s/2),oe,i)),n.add(U(6,.5,r,v.roof,e+o*(s/2-2.5),oe+8,i)),t){const a=wn({length:s-8,count:12,height:8,radius:.35});a.position.set(e,oe,i+o*(r/2-5)),n.add(a);const l=wn({length:r-8,count:9,height:8,radius:.35});l.rotation.y=Math.PI/2,l.position.set(e+o*(s/2-5),oe,i),n.add(l)}}function rS(n){const[t,e]=[36,16];n.add(U(16,9,16,v.brick,t,oe,e)),n.add(U(20,12,6.5,v.brick,t,oe,e)),n.add(U(6.5,12,20,v.brick,t,oe,e)),n.add(ht(3.2,3.2,3.5,v.brick,t,oe+12,e,16)),n.add(we(3.2,v.lead,t,oe+15.5,e));for(const[r,o]of[[-5.5,-5.5],[5.5,-5.5],[-5.5,5.5],[5.5,5.5]])n.add(ht(1.8,1.8,1.8,v.brick,t+r,oe+9,e+o,12)),n.add(we(1.8,v.lead,t+r,oe+10.8,e+o));n.add(qe(ht(3,3,8,v.brick,t+10,oe,e,12,{thetaStart:-Math.PI/2,thetaLength:Math.PI}),1,0));const[i,s]=[104,34];n.add(U(9,26,9,v.banded,i,oe,s)),n.add(U(10.5,1,10.5,v.stone,i,oe+26,s)),n.add($(Me(10),v.stone,i,oe+27,s+4.9)),n.add($(Me(10),v.stone,i,oe+27,s-4.9)),n.add(ht(2.4,2.4,3,v.fire,i,oe+27,s,12)),n.add(ht(.3,.3,3,v.stone,i+2.2,oe+27,s+2.2,6)),n.add(ht(.3,.3,3,v.stone,i-2.2,oe+27,s-2.2,6)),n.add(we(3.4,v.lead,i,oe+30,s,{heightScale:1.2}))}function oS(n,t){const[e,i]=[-40,70];n.add(U(i,14,20,v.stone,e,Ye,74)),n.add(Tn(i,20,5,v.roof,e,Ye+14,74));const s=t?$(Vn({length:i,height:Ye+15,thickness:4,openings:[...Gi(i,5,{width:4.5,bottom:Ye+6,spring:Ye+10.5}),{x:0,width:5,bottom:0,spring:4}]}),v.marble):U(i,Ye+15,4,v.marble);s.position.set(e,0,yn),n.add(s),n.add(U(i,.6,4,v.marble,e,Ye+15,yn));for(const[r,o]of[[-130,e-i/2],[e+i/2,130]]){const a=o-r;n.add(U(a,Ye+6,4,v.banded,r+a/2,0,yn)),n.add($(Me(a),v.banded,r+a/2,Ye+6,yn+1.6))}for(const r of[-120,-80,10,50,90,125])n.add(U(9,Ye+11,9,v.banded,r,0,yn+1));if(t){n.add(ye(320,90,v.water,0,0,yn+47)),n.add(U(100,1.3,9,v.stone,e,-.3,yn+6.5));for(const o of[e-52,e+52])n.add(U(5,1.5,40,v.stone,o,-.3,yn+21));n.add(U(4,3,4,v.marble,e+18,1,yn+7));const r=[U(3,1.4,1,v.marble,e+17.2,4,yn+7),U(2.4,1.8,1.1,v.marble,e+19,4,yn+7)];r[1].rotation.z=.5,n.add(...r)}}function aS(n){const t=new xt,{geometry:e,deck:i}=ro({length:16,beam:4,depth:1.4,bowRise:1.2,sternRise:1.6,segments:24,ribs:8});t.add($(e,v.hull,0,.9,0)),t.add($(i,v.wood,0,.7,0)),t.add(U(5,2,3,fs(6037347),-3,.7,0)),t.add(Gn(5,3,1,v.gold,-3,2.7,0,.2)),t.position.set(-40,0,yn+24),t.rotation.y=.2,t.userData.animate=s=>{t.position.y=Math.sin(s*1.1)*.12,t.rotation.z=Math.sin(s*.8)*.02},n.add(t)}const nn=138,Mn=65,sn=-10,kr=9,Dn=2.6,uc=-12;function lS({lod:n="detail"}={}){const t=n==="detail",e=new xt,i=t?28:14,s=t?12:6,r=nn/i,o=Mn/s,a=y=>-nn/2+r*(y+.5),l=y=>-Mn/2+o*(y+.5);e.add(U(nn,.5,Mn,v.stone,0,sn-.5,0)),e.add(ye(nn,Mn,v.water,0,sn+.9,0));const c=Dn-sn;for(const y of[-1,1])e.add(U(nn+8,c,4,v.brick,0,sn,y*(Mn/2+2))),e.add(U(4,c,Mn,v.brick,y*(nn/2+2),sn,0));if(t)for(const M of[-1,1])e.add(U(nn+8+32,c,16,v.dirt,0,sn,M*(Mn/2+4+16/2))),e.add(U(16,c,Mn+8,v.dirt,M*(nn/2+4+16/2),sn,0)),e.add(ye(nn+8+32,16,v.paving,0,Dn+.02,M*(Mn/2+4+16/2))),e.add(ye(16,Mn+8,v.paving,M*(nn/2+4+16/2),Dn+.02,0));const h=Wn(532),u=1.1,d=Dn-.6-(sn+kr),f=y=>Vn({length:y,height:d,thickness:.9,openings:[{x:0,width:y-u,bottom:0,spring:.2}]}),p=f(r),_=f(o),g=y=>y<uc+10+h.range(-8,8);for(let y=0;y<s;y++)for(let M=0;M<i-1;M++){const x=a(M)+r/2;g(x)&&e.add($(p,v.brick,x,sn+kr,l(y)))}for(let y=0;y<i;y++)for(let M=0;M<s-1;M++){if(!g(a(y)))continue;const x=$(_,v.brick,a(y),sn+kr,l(M)+o/2);x.rotation.y=Math.PI/2,e.add(x)}const m=uc+nn/2+4;return e.add(U(m,.6,Mn+8,v.brick,-nn/2-4+m/2,Dn-.6,0)),e.add(ye(m,Mn+8,v.paving,-nn/2-4+m/2,Dn+.02,0)),uS(e,t),Re(e),cS(e,{columnsAlong:i,columnsAcross:s,columnX:a,columnZ:l,detail:t}),t&&dS(e,a,l),e}function cS(n,{columnsAlong:t,columnsAcross:e,columnX:i,columnZ:s,detail:r}){const o=[{geometry:cn(1.2,.5,1.2),y:0},{geometry:un(.4,.46,kr-1.3,10),y:.5},{geometry:un(.75,.42,.8,10),y:kr-.8}],a=r?{i:20,j:7}:null,l=t*e,c=new Kt;for(const{geometry:h,y:u}of o){const d=new Pc(h,v.marble,l);let f=0;for(let p=0;p<t;p++)for(let _=0;_<e;_++){const g=a&&p===a.i&&_===a.j;c.makeTranslation(i(p),sn+u,s(_)),g&&c.scale(new C(0,0,0)),d.setMatrixAt(f++,c)}d.castShadow=d.receiveShadow=!0,n.add(d),a&&n.add($(h,dr("marble",10465952),i(a.i),sn+u,s(a.j)))}r&&[[0,0,Math.PI/2],[1,0,Math.PI]].forEach(([h,u,d])=>{const f=hS();f.position.set(i(h)+1.2,sn+.9,s(u)),f.rotation.x=d,n.add(f)})}function hS(){const n=new xt;n.add(U(1.8,1.8,1.8,v.stoneDark,0,-.9,0));const t=$(new ii(.8,16,12),v.marble,.75,0,0);t.scale.set(.6,1,.9),n.add(t);const e=new no(.16,.06,6,10);for(let i=0;i<9;i++){const s=i/9*Math.PI*2,r=$(e,v.marble,.95,Math.cos(s)*.75,Math.sin(s)*.68);r.rotation.y=Math.PI/2,n.add(r)}return n}function uS(n,t){const e=-nn/2-4;n.add(U(14,13,56,v.stone,e+10,Dn,0));const i=Gn(56,14,4.5,v.roof,e+10,Dn+13,0);if(i.rotation.y=Math.PI/2,n.add(i),!!t)for(const s of[-1,1]){const r=uc-e-22,o=wn({length:r,count:9,height:7,radius:.4});o.position.set(e+18+r/2,Dn,s*26),n.add(o),n.add(U(r+2,.5,6,v.roof,e+18+r/2,Dn+7,s*28.5)),n.add(U(r+2,7,1,v.stone,e+18+r/2,Dn,s*31.5))}}function dS(n,t,e){const i=new ii(.3,8,6);for(const[s,r]of[[14,3],[17,8],[21,5],[24,2],[26,9]])n.add($(i,v.fire,t(s)+fS(s),sn+5,e(r)))}const fS=n=>n%2?1.6:-1.6,bf=[15918022,15257510,16117472,14465422,15323832,14068098];function Tf({w:n=10,d:t=8,h:e=7,color:i=bf[0],roof:s="hip",windows:r=!0}={}){const o=new xt;if(o.add(U(n,e,t,dr("plaster",i),0,0,0)),o.add(s==="gable"?Gn(n,t,t*.3,v.roof,0,e,0,.4):Tn(n,t,Math.min(n,t)*.3,v.roof,0,e,0,.4)),r){const a=Math.max(1,Math.floor(e/3.4)),l=Math.max(1,Math.floor(n/3));for(let c=0;c<a;c++){const h=ze({count:l,spacing:n/l,width:.9,height:1.5,y:1.2+c*3.2});h.position.z=t/2+.03,o.add(h)}}return o}function ys(n,t,{count:e,area:[i,s,r,o],groundAt:a=()=>0,avoid:l=[],style:c={}}){let h=0;for(let u=0;u<e*20&&h<e;u++){const d=t.range(i,r),f=t.range(s,o);if(l.some(([_,g,m])=>Math.hypot(d-_,f-g)<m))continue;const p=Tf({w:t.range(7,14),d:t.range(6,10),h:t.range(5,11),color:t.pick(bf),roof:t.chance(.5)?"hip":"gable",...c});p.position.set(d,a(d,f),f),p.rotation.y=t.pick([0,Math.PI/2,Math.PI,-Math.PI/2])+t.range(-.1,.1),n.add(p),l.push([d,f,9]),h++}}const Ce=152,ua=15,dc=8,pS=3,Gs=(dc-pS)/2,fl=-Gs-.8,qu=1.2,mS=8.5,Lr=n=>-14*Math.pow(Math.cos(Math.min(Math.abs(n),Ce)/Ce*(Math.PI/2)),1.4);function gS({lod:n="detail"}={}){const t=n==="detail",e=t?Lr:()=>-13,i=new xt,s=new xt;i.add(s);const r=new ri(_S(e),{depth:8,bevelEnabled:!1,curveSegments:8});if(s.add($(r.translate(0,0,-4),v.banded)),s.add(U(Ce*2+1,.6,9,v.stone,0,0,0)),s.add(U(Ce*2+1,.7,9,v.stone,0,ua,0)),s.add(U(Ce*2,1.6,6.5,v.stone,0,ua+.7,0)),t){s.add(vS()),s.add(ye(8,160,v.paving,-28,Lr(-28)+.08,0));const o=Wn(368),a=[[-28,0,8],...Array.from({length:41},(l,c)=>[-Ce+c*10,0,12])];ys(s,o,{count:26,area:[-Ce,-70,Ce,70],groundAt:l=>Lr(l),avoid:a});for(let l=0;l<14;l++){const c=o.range(-Ce,Ce);s.add(Ki(o.range(9,14),c,Lr(c),o.pick([-1,1])*o.range(16,70)))}}else s.position.y=13;return Re(i)}function _S(n){const t=new Qe;t.moveTo(-Ce,n(-Ce));const e=Math.round(Ce*2/dc);for(let i=0;i<e;i++){const s=-Ce+(i+.5)*dc,r=s-Gs,o=s+Gs;t.lineTo(r,n(r)),n(s)<fl-2&&(t.lineTo(r,fl),t.absarc(s,fl,Gs,Math.PI,0,!0)),t.lineTo(o,n(o)),t.holes.push(Fc(Gs*2,mS-qu+Gs,s,qu))}return t.lineTo(Ce,n(Ce)),t.lineTo(Ce,ua),t.lineTo(-Ce,ua),t.lineTo(-Ce,n(-Ce)),t}function vS(){const n=Ce*2+60,t=160,e=new wi(n,t,96,1).rotateX(-Math.PI/2),i=e.attributes.position;for(let s=0;s<i.count;s++)i.setY(s,Lr(i.getX(s))-.05);return xr(e,n,t),e.computeVertexNormals(),$(e,v.grass)}const Hr=16;function xS({lod:n="detail"}={}){const t=n==="detail",e=new xt;e.add(U(250,3,190,v.grass,5,-3,5)),e.add(U(140,Hr,110,v.banded,-50,0,35)),e.add(ye(140,110,v.grass,-50,Hr+.03,35)),MS(e,t),yS(e,t),ES(e,t),bS(e,t);for(const[i,s]of[[-100,80],[-20,70],[0,82],[-112,30],[8,10]])e.add(Ki(12,i,Hr,s));for(const[i,s]of[[40,20],[60,30],[90,-10],[20,50]])e.add(so(9,i,0,s));return t&&e.add(ye(320,70,v.water,5,-.4,-125)),Re(e)}function MS(n,t){if(n.add(U(5,22,190,v.banded,-122,0,5)),t)for(const i of[-1,1]){const s=$(Me(190),v.banded,-122+i*2,22,5);s.rotation.y=Math.PI/2,n.add(s)}for(const i of[-78,-40,-2,36,74])n.add(ht(8,8,30,v.banded,-125,0,i,8)),n.add($(Bc(7.6,{count:12}),v.banded,-125,30,i));for(const i of[10,24])n.add(U(12,34,12,v.banded,-112,0,i)),n.add($(Me(12),v.banded,-112,34,i+5.6));n.add(U(250,10,4,v.banded,5,0,-88)),n.add($(Me(250),v.banded,5,10,-89.5));for(const i of[-80,-30,20,70,115])n.add(U(9,15,9,v.banded,i,0,-88))}function yS(n,t){const e=Hr;n.add(U(50,18,30,v.stone,-45,e,22)),n.add(Tn(50,30,7,v.roof,-45,e+18,22)),n.add(U(13,32,13,v.banded,-78,e,4)),n.add(SS(13,-78,e+32,4)),n.add(U(34,13,20,v.stone,-6,e,54)),n.add(Tn(34,20,5,v.roof,-6,e+13,54));const i=t?$(Vn({length:50,height:11,thickness:1.2,openings:Gi(50,7,{width:4.4,bottom:0,spring:6.5})}),v.marble):U(50,11,1.2,v.marble);if(i.position.set(-45,e,2.5),n.add(i),n.add(U(50,.6,6,v.lead,-45,e+11,4.5)),t){const s=ze({count:8,spacing:5.5,width:2,height:3.4,y:12});s.position.set(-45,e,37.05),n.add(s)}}function SS(n,t,e,i){const s=new xt;return s.add($(Me(n),v.banded,t,e,i-n/2+.35)),s.add($(Me(n),v.banded,t,e,i+n/2-.35)),s}function ES(n,t){const[e,i]=[-96,66],s=Hr;n.add(U(22,24,14,v.banded,e,s,i)),n.add(Tn(22,14,4,v.roof,e,s+24,i));const r=t?$(Vn({length:22,height:24,thickness:1,openings:[...Gi(22,4,{width:3.2,bottom:0,spring:5}),...Gi(22,5,{width:2,bottom:9,spring:12.5}),...Gi(22,5,{width:2.2,bottom:16.5,spring:20.5})]}),v.banded):U(22,24,1,v.banded);r.position.set(e,s,i-7.5),n.add(r)}function bS(n,t){const[e,i]=[52,-46];if(n.add(U(40,10,26,v.brick,e,0,i)),n.add(U(40,16,13,v.brick,e,0,i)),n.add(Gn(40,13,4,v.roof,e,16,i)),n.add(U(40.6,.5,26.6,v.lead,e,10,i)),n.add(ht(4.5,4.5,3.5,v.brick,e,18.5,i,16)),n.add(we(4.5,v.lead,e,22,i,{heightScale:.7})),n.add(qe(ht(6,6,13,v.brick,e+20,0,i,14,{thetaStart:-Math.PI/2,thetaLength:Math.PI}),1,0)),n.add(qe(we(6,v.lead,e+20,13,i,{phiLength:Math.PI,heightScale:.8}),1,0)),n.add(ht(7.5,7.5,11,v.brick,e-28,0,i+4,16)),n.add(we(7.5,v.lead,e-28,11,i+4,{heightScale:.65})),n.add(U(7,4,7,v.marble,e+8,0,i+24)),n.add(we(3.4,v.lead,e+8,4,i+24)),t)for(const s of[-1,1]){const r=ze({count:7,spacing:5,width:1.5,height:2.8,y:11.5});r.position.set(e,0,i+s*6.55),r.rotation.y=s>0?0:Math.PI,n.add(r)}}function TS({lod:n="detail"}={}){return n==="detail"?wS():RS()}const In=240,ks=16,Wo=[33.5,53.5];function wS(){const n=new xt;n.add(U(In+20,4,113.5,v.grass,0,-4,-23.25)),n.add(ye(In,30,v.dirt,0,.02,17.5)),n.add(U(In+20,4,20,v.dirt,0,-11,43.5)),n.add(U(In+20,4,36.5,v.grass,0,-4,71.75));for(const i of[Wo[0]+.5,Wo[1]-.5])n.add(U(In+20,7,1,v.stone,0,-7,i));n.add(ye(In+20,19,v.water,0,-5,43.5));const t={x:0,width:6,bottom:0,spring:7};n.add($(Vn({length:In,height:12,thickness:5,openings:[t]}),v.banded)),n.add($(Me(In),v.banded,0,12,2.2));const e=[[-110,"octagon"],[-62,"square"],[-12,"gate"],[12,"gate"],[62,"square"],[110,"octagon"]];for(const[i,s]of e)if(s==="octagon")n.add(ht(7,7,20,v.banded,i,0,4,8)),n.add($(Bc(6.6,{count:12}),v.banded,i,20,4));else{const r=s==="gate"?12:10,o=s==="gate"?23:20;n.add(U(r,o,14,v.banded,i,0,3)),n.add(Zu(r,14,i,o,3))}n.add($(Vn({length:In,height:8.5,thickness:2,openings:[{x:0,width:5,bottom:0,spring:5.5}]}),v.banded,0,0,ks)),n.add($(Me(In),v.banded,0,8.5,ks+.7));for(const[i,s]of[[-86,!0],[-37,!1],[37,!1],[86,!0]])s?(n.add(ht(4.5,4.5,12,v.banded,i,0,ks+1,14,{thetaStart:-Math.PI/2,thetaLength:Math.PI})),n.add(U(9,12,2,v.banded,i,0,ks))):(n.add(U(8,12,8,v.banded,i,0,ks+3)),n.add(Zu(8,8,i,12,ks+3)));for(const i of[-1,1]){const s=In/2-4,r=i*(4+s/2);n.add(U(s,2,1.5,v.stone,r,0,Wo[0]-.75)),n.add($(Me(s,{merlon:.8,gap:.8,height:.8,thickness:1.3}),v.stone,r,2,Wo[0]-.75))}n.add(U(7,1.2,23,v.stone,0,-1.2,43.5)),n.add(ye(6,36,v.dirt,0,.03,72)),n.add(ye(6,66,v.dirt,0,.03,-46)),ys(n,Wn(413),{count:22,area:[-120,-76,120,-18],avoid:[[0,-40,10],[0,-20,10],[0,-60,10]]}),Re(n);for(const i of[-12,12]){const s=bi("byzantine",{width:3.2,height:2.2,pole:6});s.position.set(i,23,3),n.add(s)}return n}function Zu(n,t,e,i,s){const r=new xt;for(const o of[-1,1]){r.add($(Me(n),v.banded,e,i,s+o*(t/2-.35)));const a=$(Me(t-1.4),v.banded,e+o*(n/2-.35),i,s);a.rotation.y=Math.PI/2,r.add(a)}return r}const AS=new Ee({color:3104618,roughness:.3});function RS(){const n=new xt,t=hn;n.add($(ir(_i,{height:.75,thickness:.3,y:t,towerSpacing:2.6,towerWidth:.62,towerHeight:1.25}),_s)),n.add($(ir(_i,{height:.5,thickness:.16,y:t,offset:.9,towerSpacing:2.6,towerWidth:.4,towerHeight:.75}),_s)),n.add($(ir(_i,{height:.04,thickness:1.1,y:t-.02,offset:2.1}),AS));const e=new xt;e.add(U(1,1.7,1,v.marble,0,0,-1.1)),e.add(U(1,1.7,1,v.marble,0,0,1.1)),e.add(U(.8,1.2,1.4,v.marble,0,0,0)),e.add(U(.82,.12,1.42,v.gold,0,1.2,0));const[i,s]=Ax,[[r,o],[a,l]]=_i.slice(2,4);return e.position.set(i,t,-s),e.rotation.y=Math.atan2(r-a,l-o),n.add(e),Re(n)}function CS({lod:n="detail"}={}){const t=n==="detail",e=new xt;e.add(U(200,3,t?110:80,v.paving,0,-3,t?15:0)),e.add($(Vn({length:200,height:10,thickness:3,openings:[{x:-40,width:5,bottom:0,spring:5},{x:30,width:5,bottom:0,spring:5}]}),v.banded,0,0,-30)),e.add($(Me(200),v.banded,0,10,-31.2));for(const s of[-80,-5,60,95])e.add(U(8,14,8,v.banded,s,0,-30));e.add(U(200,1.8,14,v.stone,0,-1.2,-38.5));for(const s of[-70,-10,50])if(e.add(U(5,.5,24,v.wood,s,.1,-57)),t)for(let r=0;r<5;r++)for(const o of[-1,1])e.add(ht(.25,.25,3,v.wood,s+o*2.2,-2.5,-47-r*5,6));PS(e,t),LS(e,t),t&&IS(e),t&&(e.add(ye(280,70,v.water,0,0,-80)),ys(e,Wn(1082),{count:26,area:[-95,22,95,66],avoid:[[-55,22,20],[-42,28,8]]})),Re(e);const i=bi("venice",{width:3.4,height:2.2,pole:6});if(i.position.set(0,13,-10),e.add(i),t){const s=fr({banner:"venice"});s.position.set(-40,0,-78),e.add(s);const r=fr({banner:"venice",sail:!1});r.position.set(25,0,-62),r.rotation.y=Math.PI/2+.05,e.add(r)}return e}function PS(n,t){n.add(U(70,12,14,v.plasterOchre,0,0,-10)),n.add(Tn(70,14,4,v.roof,0,12,-10));const e=t?$(Vn({length:70,height:6.5,thickness:1,openings:Gi(70,10,{width:4.4,bottom:0,spring:3.6})}),v.stone):U(70,6.5,1,v.stone);if(e.position.set(0,0,-19.5),n.add(e),n.add(U(70,.4,3,v.roof,0,6.5,-18.5)),t){const i=ze({count:12,spacing:5.5,width:1.4,height:2.6,y:8});i.position.set(0,0,-17.05),i.rotation.y=Math.PI,n.add(i)}}function LS(n,t){const[e,i]=[-55,22];n.add(U(16,9,16,v.brick,e,0,i)),n.add(U(20,11,6.5,v.brick,e,0,i)),n.add(U(6.5,11,20,v.brick,e,0,i)),n.add(ht(3.4,3.4,3.4,v.brick,e,11,i,16)),n.add(we(3.4,v.lead,e,14.4,i));const[s,r]=[e+13,i+6];if(n.add(U(5,26,5,v.brick,s,0,r)),n.add(U(5.6,.6,5.6,v.marble,s,20,r)),n.add(zc(5.6,5.6,6.5,v.roof,s,26,r)),t)for(let o=0;o<4;o++){const a=o*Math.PI/2,l=ze({count:2,spacing:1.8,width:1,height:2.6,y:21.5});l.rotation.y=a,l.position.set(s+Math.sin(a)*2.53,0,r+Math.cos(a)*2.53),n.add(l)}}function IS(n){for(const e of[5,15]){const i=wn({length:120,count:21,height:6,radius:.35});i.position.set(10,0,e),n.add(i),n.add(U(122,.4,3.4,v.roof,10,6,e+(e===5?-1.2:1.2)))}const t=[10690602,14199091,2772367,3832380,15261900];for(let e=0;e<10;e++){const i=-45+e*12;n.add(U(4,1,2,v.wood,i,0,10)),n.add(U(4.6,.15,2.6,fs(t[e%t.length]),i,2.6,10))}}function DS({lod:n="detail"}={}){return n==="detail"?OS():BS()}const US=new C(-72,3.2,0),NS=new C(74,3.2,0),$u=.72;function OS(){const n=new xt;n.add(ye(280,150,v.water,0,0,0));for(const[i,s,r,o]of[[-84,18,26,-92],[84,14,22,92]]){n.add(U(46,5,70,v.stoneDark,o,-3,0)),n.add(U(s,r,s,v.banded,i,2,0));for(const a of[-1,1]){n.add($(Me(s),v.banded,i,r+2,a*(s/2-.35)));const l=$(Me(s-1.4),v.banded,i+a*(s/2-.35),r+2,0);l.rotation.y=Math.PI/2,n.add(l)}}n.add(U(9,4,10,v.wood,-68,2,-10));const t=ht(1.2,1.2,6,v.wood,-68,7.2,-13,12);t.rotation.x=Math.PI/2,n.add(t),Re(n);const e=[[-84,28],[84,24]].map(([i,s])=>{const r=bi("byzantine",{width:3,height:2,pole:5});return r.position.set(i,s,0),r});return n.add(...e),n.add(FS()),n}function FS(){const n=new xt;n.userData.dynamic=!0;const t=un(.75,.75,6,12).rotateX(Math.PI/2).translate(0,0,-3),e=[];for(let g=-60;g<=64;g+=9.4){const m=new fe(t,v.wood);m.castShadow=!0,m.position.set(g,.2,0),n.add(m),e.push(m)}const i=e.length+2,s=Math.ceil(12/$u),r=new no(.32,.085,6,12).scale(1.45,1,1),o=(i-1)*s+1,a=new Pc(r,v.iron,o);a.castShadow=!0,a.frustumCulled=!1,n.add(a);const l=new Kt,c=new _n,h=new _n().setFromAxisAngle(new C(1,0,0),Math.PI/2),u=new C(1,1,1),d=new C(1,0,0),f=new C,p=new C,_=new C;return n.userData.animate=g=>{for(const[M,x]of e.entries())x.position.y=.2+Math.sin(g*1.4+M*.7)*.18,x.rotation.x=Math.sin(g*1.1+M)*.05;const m=[US,...e.map(M=>new C(M.position.x,M.position.y+.85,0)),NS];let y=0;for(let M=0;M<m.length-1;M++){const x=m[M],L=m[M+1],A=Math.max(1,Math.round(x.distanceTo(L)/$u)),R=Math.min(.9,x.distanceTo(L)*.06),I=(T,E)=>E.lerpVectors(x,L,T).setY(x.y+(L.y-x.y)*T-R*4*T*(1-T));for(let T=0;T<A&&y<o;T++)I(T/A,f),I((T+1)/A,p),_.subVectors(p,f).normalize(),c.setFromUnitVectors(d,_),y%2&&c.multiply(h),l.compose(f,c,u),a.setMatrixAt(y++,l)}a.count=y,a.instanceMatrix.needsUpdate=!0},n.userData.animate(0),n}function BS(){const n=new xt,t=new C(Oo[0],.05,-Oo[1]),e=new C(Fo[0],.05,-Fo[1]),i=[];for(let r=0;r<=16;r++)i.push(new C().lerpVectors(t,e,r/16));n.add($(new xa(new ga(i),64,.045,5),v.iron));const s=Math.atan2(e.z-t.z,e.x-t.x);for(let r=1;r<12;r++){const o=U(.12,.08,.36,v.wood);o.position.lerpVectors(t,e,r/12).setY(0),o.rotation.y=-s,n.add(o)}return n.add(U(.6,1,.6,_s,Oo[0]+.3,hn,-(Oo[1]-.6))),n.add(U(.85,1.3,.85,_s,Fo[0]-.1,hn,-(Fo[1]+.6))),Re(n)}const Xo=32,zS=4.6,He=1.4;function kS({lod:n="detail"}={}){const t=n==="detail",e=new xt;return e.add(HS(t)),t&&e.add(vx(23,3)),e}function HS(n){const t=new xt,{geometry:e,deck:i,halfBeamAtX:s}=ro({length:Xo,beam:zS,depth:2.3,bowRise:1.2,sternRise:2.8,segments:n?44:20,ribs:n?12:8});t.add($(e,v.hull,0,He,0)),t.add($(i,v.wood,0,He-.3,0));const r=Ma(.35,4,v.bronze,Xo/2-.6,.9,0,8);r.rotation.z=-Math.PI/2,t.add(r);const o=ht(.18,.28,2.2,v.bronze,Xo/2-3.2,He+.9,0,10);o.rotation.z=-Math.PI/2+.15,t.add(o),t.add(U(1.4,.9,1.2,v.bronze,Xo/2-3.8,He-.3,0)),t.add(U(3.4,2.4,3.6,v.wood,4,He-.3,0)),t.add(U(3.8,.9,4,v.wood,4,He+2.1,0)),t.add(U(3.6,1.9,3.2,v.imperialPurple,-11.5,He-.3,0)),t.add(Gn(3.6,3.2,1,v.gold,-11.5,He+1.6,0,.25));for(const h of[-1,1]){const u=U(.3,4.2,.9,v.wood,-13.6,-1.6,h*(s(-13.6)+.3));u.rotation.z=-.5,t.add(u)}const a=un(.42,.42,.08,12).rotateX(Math.PI/2),l=[fs(10690602),fs(14199091),fs(2772367)];for(let h=0;h<(n?15:8);h++){const u=-9+h*(18/((n?15:8)-1));for(const d of[-1,1])t.add($(a,l[h%3],u,He+.15,d*(s(u)+.05)))}for(const{x:h,height:u,yardLength:d,tilt:f}of[{x:7.5,height:15,yardLength:19,tilt:.42},{x:-3,height:12.5,yardLength:15,tilt:.45}]){t.add(ht(.16,.22,u,v.wood,h,He-.3,0,8));const p=ht(.1,.1,d,v.wood,0,0,0,6);p.geometry.translate(0,-d/2,0),p.rotation.z=Math.PI/2-f,p.position.set(h,He+u-1.5,.4),t.add(p);const _=d/2,g=new C(h+Math.cos(f)*_,He+u-1.5-Math.sin(f)*_,.5),m=new C(h-Math.cos(f)*_,He+u-1.5+Math.sin(f)*_,.5),y=new C(h-_*.55,He+1.2,.5);t.add($(gx(g,m,y,.9,n?10:5),v.sail))}Re(t);for(const[h,u,d]of[[-12.5,He+2.6,1],[7.5,He+15,.8]]){const f=bi("byzantine",{width:2.4*d,height:1.5*d,pole:2.6});f.position.set(h,u,0),t.add(f)}const c=VS(n,s);return t.add(c.group),t.userData.animate=h=>{c.row(h),t.position.y=Math.sin(h*1.3)*.08,t.rotation.x=Math.sin(h*.9)*.015},t}function VS(n,t){const e=new xt;e.userData.dynamic=!0;const i=n?[{y:.55,count:25,length:7.5,phase:0},{y:He+.1,count:25,length:10,phase:.35}]:[{y:.9,count:14,length:8,phase:0}],s=[];for(const o of i){const a=io([un(.05,.06,o.length,5).rotateX(Math.PI/2).translate(0,0,-1),cn(.08,.3,1.3).translate(0,-.15,o.length-1.6)]);for(let l=0;l<o.count;l++){const c=-10.5+21/(o.count-1)*l;for(const h of[-1,1]){const u=new xt;u.position.set(c,o.y,h*t(c)),u.rotation.order="YXZ";const d=new fe(a,v.wood);d.castShadow=!0,u.add(d),e.add(u),s.push({pivot:u,side:h,phase:o.phase})}}}return{group:e,row:o=>{for(const{pivot:a,side:l,phase:c}of s){const h=o*2.4+c,u=Math.sin(h)*.38,d=.32+Math.cos(h)*.12;a.rotation.set(d,l>0?u:Math.PI-u,0)}}}}const ss=8.4,rs=7.8,os=42;function GS({lod:n="detail"}={}){const t=n==="detail",e=new xt,i=l=>ss+(rs-ss)*(l/os);e.add(ht(rs,ss,os,v.stone,0,0,0,32));for(const l of[14,28])e.add(ht(i(l)+.3,i(l)+.3,.6,v.stone,0,l,0,32));for(let l=0;l<32;l++)e.add(zn(U(.9,1.6,1.6,v.stone),l/32*Math.PI*2,rs+.5,os));e.add(ht(rs+1.2,rs+1.2,3.6,v.stone,0,os+1.6,0,32)),e.add($(Bc(rs+.9,{count:22,height:1.4,thickness:.8}),v.stone,0,os+5.2,0)),e.add(Ma(rs+.6,15,v.lead,0,os+5.2,0,32));const s=yi(.7,2.4),r=yi(1.5,3.4);e.add(zn($(yi(2.4,4.2),v.opening),Math.PI/2,ss+.06,.2));for(const[l,c,h,u]of[[8,6,s,0],[18,6,s,.5],[30,8,s,0],[37,10,r,.3]])for(let d=0;d<c;d++)e.add(zn($(h,v.opening),(d+u)/c*Math.PI*2,i(l)+.06,l));const o=t?46:22;for(const l of[Math.PI*.78,Math.PI*.22]){const c=Math.cos(l),h=Math.sin(l),u=new xt;u.add(U(o,12,3.5,v.stone,o/2+ss-1,0,0)),u.add($(Me(o),v.stone,o/2+ss-1,12,1.4)),t&&u.add(U(8,16,8,v.stone,o+ss,0,0)),u.rotation.y=Math.atan2(-h,c),e.add(u)}if(t){e.add(ht(50,54,4,v.grass,0,-4,0,40)),e.add(ht(14,14,.2,v.paving,0,0,0,32));for(const[l,c,h]of[[-26,-16,.2],[24,-20,-.3],[-30,6,1.5],[30,4,1.7],[0,-30,0]]){const u=Tf({w:10,d:8,h:11,color:15320986,roof:"gable"});u.position.set(l,0,c),u.rotation.y=h,e.add(u)}}Re(e);const a=bi("genoa",{width:4,height:2.6,pole:7});return a.position.y=os+19.6,e.add(a),e}function WS({lod:n="detail"}={}){return n==="detail"?XS():YS()}function XS(){const n=new xt;n.add(U(210,3,125,v.paving,0,-3,-12)),n.add($(Vn({length:200,height:9,thickness:3,openings:[{x:10,width:6,bottom:0,spring:5}]}),v.stone,0,0,40)),n.add($(Me(200),v.stone,0,9,41.2)),n.add(U(200,12,3.5,v.stone,0,0,-68)),n.add($(Me(200),v.stone,0,12,-69.4));for(const e of[-85,-35,55,92])n.add(U(8,13,8,v.stone,e,0,40));for(const e of[-60,0,60])n.add(U(9,17,9,v.stone,e,0,-68));n.add(U(210,1.8,13,v.stone,0,-1.2,47.5)),n.add(ye(280,70,v.water,0,0,89));const t=Wn(1267);for(let e=0;e<18;e++){const i=t.range(-90,90),s=t.range(43,52);n.add(t.chance(.5)?ht(.6,.6,1.3,v.wood,i,.6,s,10):U(1.4,1.2,1.4,v.wood,i,.6,s))}wf(n,{x:-35,z:-6,detail:!0}),Af(n,{x:42,z:-22,detail:!0});for(const e of[17,29]){const i=wn({length:24,count:6,height:7,radius:.45});i.position.set(10,0,e),n.add(i)}return n.add(Tn(27,15,3.5,v.roof,10,7,23)),ys(n,t,{count:34,area:[-95,-60,95,32],avoid:[[-35,-6,30],[42,-22,30],[10,23,18],[10,36,8]],style:{roof:"gable"}}),Re(n),n.add(Yo(bi("genoa",{width:4,height:2.6,pole:7}),-35,28,-14)),n.add(Yo(bi("genoa",{width:3,height:2,pole:6}),10,9,40)),n.add(Yo(fr({banner:"genoa"}),30,0,68,-.15)),n.add(Yo(fr({banner:"genoa",sail:!1}),-55,0,72,Math.PI+.1)),n}function Yo(n,t,e,i,s=0){return n.position.set(t,e,i),n.rotation.y=s,n}function wf(n,{x:t,z:e,detail:i}){n.add(U(36,16,20,v.stone,t,0,e)),n.add(U(36.6,.5,20.6,v.stone,t,16,e));for(const s of[-1,1])n.add($(Me(36,{merlon:1,gap:.9}),v.stone,t,16.5,e+s*9.9));if(n.add(U(7,28,7,v.stone,t,0,e-8)),n.add($(Me(7),v.stone,t,28,e-4.8)),n.add($(Me(7),v.stone,t,28,e-11.2)),i)for(const s of[3.5,10]){const r=ze({count:7,spacing:4.6,width:1.7,height:3.6,y:s});r.position.set(t,0,e+10.05),n.add(r)}}function Af(n,{x:t,z:e,detail:i}){n.add(U(14,15,38,v.stone,t,0,e));const s=Gn(38,14,5,v.roof,t,15,e);s.rotation.y=Math.PI/2,n.add(s),n.add(qe(ht(7,7,12,v.stone,t,0,e-19,8,{thetaStart:-Math.PI/2,thetaLength:Math.PI}),0,-1)),n.add(qe(we(7,v.roof,t,12,e-19,{phiLength:Math.PI,heightScale:.6,segments:8}),0,-1));const[r,o]=[t+11,e+14];if(n.add(U(6.5,28,6.5,v.stone,r,0,o)),n.add(zc(7.4,7.4,6,v.roof,r,28,o)),i){for(let l=0;l<4;l++){const c=ze({count:2,spacing:2.4,width:1.3,height:3,y:22}),h=l*Math.PI/2;c.rotation.y=h,c.position.set(r+Math.sin(h)*3.28,0,o+Math.cos(h)*3.28),n.add(c)}const a=$(new eo(2.2,20),v.opening,t,10,e+19.05);n.add(a)}}function YS(){const n=new xt;n.add($(ir(ra,{height:.55,thickness:.2,y:hn,towerSpacing:1.7,towerWidth:.42,towerHeight:.85}),_s)),n.add($(ir(Zr,{height:.35,thickness:.14,y:hn,offset:-.35}),_s));const t=new xt;wf(t,{x:0,z:0,detail:!1}),Af(t,{x:-95,z:-40,detail:!1});const[e,i]=ge([-2.2,16.6]);return t.scale.setScalar(5*ya),t.position.set(e,hn,-i),n.add(t),n.userData.keepOut=[[e,i,1.4],[e-4.75,i+2,1.5]],Re(n)}const xe=3,qS=[[-40,-110],[130,-110],[130,110],[40,110],[10,80],[-30,62],[-70,56],[-96,30],[-92,0],[-72,-22],[-62,-60],[-52,-92]];function ZS({lod:n="detail"}={}){const t=n==="detail",e=new xt,i=Wn(685);t?(e.add($(jd(qS,xe,6),v.grass)),e.add(ye(300,220,v.water,-20,.6,0)),e.add(ye(120,110,v.dirt,30,xe+.02,-35))):e.position.y=-xe,$S(e,t),KS(e,i),jS(e,i),e.add(ye(46,30,v.paving,50,xe+.04,28));const s=wn({length:44,count:12,height:6.5,radius:.38});s.position.set(50,xe,18),e.add(s),e.add(U(46,6.5,1,v.stone,50,xe,13)),e.add(U(47,.5,6.5,v.roof,50,xe+6.5,16)),ys(e,i,{count:t?40:22,area:[-40,-95,105,45],groundAt:()=>xe,avoid:[[30,-22,34],[-62,28,26],[50,28,28],[-18,-24,14]]});for(let r=0;r<16;r++){const o=i.chance(.6)?Ki(i.range(9,13)):so(i.range(7,10));o.position.set(i.range(-50,110),xe,i.range(50,100)*(r%2?1:-.9)),e.add(o)}return Re(e),t&&(JS(e),QS(e)),e}function $S(n,t){const[e,i]=[32,-22];if(n.add(U(44,9,26,v.brick,e,xe,i)),n.add(U(44,15,13,v.brick,e,xe,i)),n.add(Gn(44,13,4,v.roof,e,xe+15,i)),n.add(U(44.6,.5,26.6,v.lead,e,xe+9,i)),n.add(qe(ht(6,6,12,v.brick,e+22,xe,i,14,{thetaStart:-Math.PI/2,thetaLength:Math.PI}),1,0)),n.add(qe(we(6,v.lead,e+22,xe+12,i,{phiLength:Math.PI,heightScale:.8}),1,0)),n.add(ht(10,10,13,v.brick,e-30,xe,i,20)),n.add(ht(8,8,3,v.brick,e-30,xe+13,i,20)),n.add(we(8,v.lead,e-30,xe+16,i,{heightScale:.7})),t)for(const s of[-1,1]){const r=ze({count:8,spacing:5,width:1.5,height:2.8,y:xe+10.5});r.position.set(e,0,i+s*6.55),r.rotation.y=s>0?0:Math.PI,n.add(r)}}function KS(n,t){const[e,i]=[-62,28];for(let a=0;a<3;a++)n.add(U(22-a*1.2,.6,38-a*1.2,v.marble,e,xe+a*.6,i));const s=xe+1.8;n.add(U(9,4.5,20,v.marble,e,s,i));const r=dr("marble",15261647),o=[];for(let a=0;a<6;a++)o.push([e-8.5+a*3.4,i-16.2],[e-8.5+a*3.4,i+16.2]);for(let a=1;a<11;a++)o.push([e-8.5,i-16.2+a*2.95],[e+8.5,i-16.2+a*2.95]);for(const[a,l]of o){if(t.chance(.18))continue;const c=t.chance(.7);n.add(ht(.7,.8,c?8.5:t.range(1.5,4.5),r,a,s,l,12))}n.add(U(17.5,1.4,1.8,r,e,s+8.5,i-16.2));for(let a=0;a<6;a++){const l=ht(.75,.75,1.6,r,e+t.range(-16,16),xe+.75,i+t.range(-24,24),12);l.rotation.set(Math.PI/2,t.range(0,Math.PI),0),n.add(l)}}function jS(n,t){for(let e=-100;e<100;e+=8)t.chance(.3)||n.add(U(8.2,t.range(1,5.5),3.2,v.stone,112+t.range(-.5,.5),xe,e).rotateY(Math.PI/2));for(const e of[-80,-20,40])n.add(U(8,t.range(4,7),8,v.stone,114,xe,e))}function JS(n){n.add(U(5,xe+1,40,v.stone,-78,-1,-45).rotateY(-.6));const{geometry:t,deck:e}=ro({length:9,beam:2.6,depth:1,bowRise:.6,sternRise:.6,segments:16,ribs:8});for(const[i,s,r]of[[-96,-38,.6],[-102,-18,-.4]]){const o=new xt;o.add($(t,v.hull,0,.6,0),$(e,v.wood,0,.4,0)),o.add(ht(.08,.1,6,v.wood,.8,.4,0,6)),o.position.set(i,0,s),o.rotation.y=r;const a=i;o.userData.animate=l=>{o.position.y=.4+Math.sin(l*1.3+a)*.12},n.add(o)}}function QS(n){const t=dr("wood",8017462);for(const[e,i,s,r]of[[42,38,.32,0],[30,48,.4,2.4]]){const o=iy(t,v.gold,dr("marble",16777215));o.scale.setScalar(4.5);const a=o.userData.animate;o.userData.animate=l=>{a(l);const c=l*s+r;o.position.set(Math.cos(c)*e,i+Math.sin(l*.7+r)*3,Math.sin(c)*e),o.rotation.set(.25,-c-Math.PI/2,0,"YXZ")},n.add(o)}}const se=3,t2=[[-40,-110],[130,-110],[130,110],[-30,110],[-58,84],[-84,62],[-84,20],[-68,4],[-66,-30],[-68,-62],[-58,-92]],pl=-12;function e2({lod:n="detail"}={}){const t=n==="detail",e=new xt,i=Wn(324);t?(e.add($(jd(t2,se,6),v.grass)),e.add(ye(340,220,v.water,-40,.6,0))):e.position.y=-se,n2(e),i2(e,t),s2(e,t),r2(e,t),e.add(ye(186,7,v.paving,37,se+.03,pl)),e.add(ht(.7,.8,2.4,v.marble,104,se,pl+5.5,10)),ys(e,i,{count:t?36:20,area:[-50,-100,120,100],groundAt:()=>se,avoid:[[-62,40,26],[40,-55,26],[72,42,44],...[-40,0,40,80,120].map(r=>[r,pl,7])]});for(let r=0;r<18;r++){const o=i.chance(.55)?Ki(i.range(9,13)):so(i.range(7,10));o.position.set(i.range(-30,125),se,i.range(60,105)*(r%2?1:-1)),e.add(o)}Re(e);const s=bi("byzantine",{width:3.4,height:2.2,pole:7});return s.position.set(-62,se+12,40),e.add(s),t&&(o2(e),a2(e)),e}function n2(n){n.add(U(9,se+1,60,v.stone,-61,-1,-30));const t=U(6,se+.6,36,v.stone,-78,-1,-64);t.rotation.y=.55,n.add(t);for(const e of[-50,-30,-10])n.add(ht(.5,.5,1.2,v.stoneDark,-64.5,se+.5,e,8))}function i2(n,t){const[e,i]=[-62,40],[s,r,o]=[34,30,7];for(const a of[-1,1]){n.add(U(s,o,2.2,v.stone,e,se,i+a*r/2)),n.add(U(2.2,o,r,v.stone,e+a*s/2,se,i));for(const l of[-1,1])n.add(U(6.5,o+3.5,6.5,v.stone,e+a*s/2,se,i+l*r/2))}if(t)for(const a of[-1,1]){n.add($(Me(s-6),v.stone,e,se+o,i+a*r/2));const l=$(Me(r-6),v.stone,e+a*s/2,se+o,i);l.rotation.y=Math.PI/2,n.add(l)}n.add(U(5,4.5,2.6,v.opening,e+s/2,se,i)),n.add(U(16,6,10,v.plaster,e-3,se,i)),n.add(Tn(16,10,3,v.roof,e-3,se+6,i,.5))}function s2(n,t){const[e,i]=[40,-55];n.add(U(22,8,18,v.brick,e,se,i)),n.add(U(23,11,7,v.brick,e,se,i)),n.add(U(7,11,19,v.brick,e,se,i)),n.add(Gn(23,7,2.4,v.roof,e,se+11,i));const s=Gn(19,7,2.4,v.roof,e,se+11,i);if(s.rotation.y=Math.PI/2,n.add(s),n.add(qe(ht(3.5,3.5,7,v.brick,e+11,se,i,12,{thetaStart:-Math.PI/2,thetaLength:Math.PI}),1,0)),n.add(qe(we(3.5,v.lead,e+11,se+7,i,{phiLength:Math.PI,heightScale:.8}),1,0)),n.add(ht(3.2,3.2,4,v.brick,e,se+13.4,i,12)),n.add(we(3.2,v.lead,e,se+17.4,i,{heightScale:.7})),t){const r=ze({count:4,spacing:3.2,width:.9,height:1.8,y:se+14.4});r.position.set(e,0,i+3.25),n.add(r)}for(const r of[-14,14])n.add(Ki(11,e-8,se,i+r))}function r2(n,t){const[e,i]=[72,42],s=4;n.add(U(70,s,54,v.banded,e,se-.5,i)),n.add(ye(70,54,v.paving,e,se+s-.47,i));const r=se+s-.5;n.add(U(16,13,40,v.plasterOchre,e+8,r,i)),n.add(Tn(16,40,4,v.roof,e+8,r+13,i,.6));const o=wn({length:38,count:10,height:6,radius:.45});if(o.rotation.y=Math.PI/2,o.position.set(e-3,r,i),n.add(o),n.add(U(6,.6,40,v.marble,e-3,r+6,i)),n.add(U(22,9,12,v.plasterOchre,e+25,r,i-18)),n.add(Tn(22,12,3,v.roof,e+25,r+9,i-18,.5)),t)for(const a of[-1,1]){const l=ze({count:7,spacing:5.4,width:1.2,height:2.4,y:r+8});l.rotation.y=a>0?Math.PI/2:-Math.PI/2,l.position.set(e+8+a*8.05,0,i),n.add(l)}n.add(ht(3,3.2,.8,v.marble,e-20,r,i,16)),n.add(ht(.5,.6,2.2,v.marble,e-20,r,i,8));for(const[a,l]of[[-28,-18],[-28,18],[-14,-20],[-14,20]])n.add(Ki(10,e+a,r,i+l));for(const[a,l]of[[-24,-8],[-24,8],[-16,-6],[-16,8]])n.add(so(6,e+a,r,i+l))}function o2(n){const[t,e]=[-128,82];n.add(ht(11,13,3.4,v.stoneDark,t,-1,e,16)),n.add(ht(10.5,10.5,1.4,v.stone,t,2.4,e,16)),n.add(ht(3.6,3.8,15,v.stone,t,2.4,e,12)),n.add(ht(4.2,4.2,1,v.stone,t,17.4,e,12)),n.add(zc(5.6,5.6,5,v.lead,t,18.4,e)),n.add(U(1.4,2.4,.4,v.opening,t+3.65,3.8,e))}function a2(n){const{geometry:t,deck:e}=ro({length:10,beam:2.8,depth:1.1,bowRise:.6,sternRise:.7,segments:16,ribs:8});for(const[i,s,r,o]of[[-70,-40,1.5,!1],[-71,-18,1.7,!1],[-118,-30,.4,!0]]){const a=new xt;a.add($(t,v.hull,0,.6,0),$(e,v.wood,0,.4,0)),a.add(ht(.08,.1,6,v.wood,.8,.4,0,6)),a.position.set(i,0,s),a.rotation.y=r;const l=i+s;a.userData.animate=c=>{a.position.y=.4+Math.sin(c*1.3+l)*.12,o&&(a.position.z=s+Math.sin(c*.15)*22)},n.add(a)}}const l2=[62,50],Ku=6,c2=9,h2=15;function u2({lod:n="detail"}={}){const t=n==="detail",e=new xt,[i,s]=l2,r=[i-Ku,s-Ku];t&&e.add(U(240,1,190,v.paving,0,-1,0)),e.add($(m2(i,s),v.marble,0,.03,0)),e.add(ye(t?240:2*i+20,10,dr("paving",13218958),0,.06,0));const o=c2/s,a=h2/i,l=[[o,Math.PI/2-a],[Math.PI/2+a,Math.PI-o],[Math.PI+o,Math.PI*2-o]];for(const[c,h]of l)if(e.add(ml(i-1,s-1,i,s,c,h,0,13,v.stone)),e.add(ml(r[0]-.6,r[1]-.6,i,s,c,h,6.5,.8,v.marble)),e.add(ml(r[0]-.8,r[1]-.8,i+.4,s+.4,c,h,12.4,.7,v.roof)),t)for(const[u,d]of g2(...r,4.4,c,h))e.add(fc(u,0,d,6.5,.38)),e.add(fc(u,7.3,d,5.1,.3));for(const c of[-1,1]){const h=t?$(Vn({length:22,height:17,thickness:9,openings:[{x:0,width:9,bottom:0,spring:9.5}]}),v.marble):U(22,17,9,v.marble);h.rotation.y=Math.PI/2,h.position.x=c*(i-2),e.add(h),e.add(U(10,1.2,23,v.marble,c*(i-2),17,0))}if(p2(e,t,s),d2(e,t),t){for(const u of[.6,2.55,3.75,4.71,5.65]){const d=Math.cos(u)*(r[0]-12),f=-Math.sin(u)*(r[1]-12);e.add(U(2.4,2.6,2.4,v.marble,d,0,f)),e.add(ht(.45,.6,2.6,v.bronze,d,2.6,f,8)),e.add(ht(.32,.32,.6,v.bronze,d,5.2,f,8))}const c=Wn(330),h=Array.from({length:24},(u,d)=>{const f=d/24*Math.PI*2;return[Math.cos(f)*i,Math.sin(f)*s,16]});ys(e,c,{count:30,area:[-115,-90,115,90],avoid:[[0,0,70],[0,-70,26],[-100,0,10],[100,0,10],...h]})}return Re(e)}function d2(n,t){n.add(U(11,1.2,11,v.marble,0,0,0)),n.add(U(9,1,9,v.marble,0,1.2,0)),n.add(U(7.5,6,7.5,v.marble,0,2.2,0)),n.add(U(8.3,.8,8.3,v.marble,0,8.2,0));const e=7,i=4.6,s=un(1.55,1.6,i,24),r=new no(1.62,.16,8,32).rotateX(Math.PI/2);let o=9;for(let a=0;a<e;a++)n.add($(s,v.porphyry,0,o,0)),a>0&&n.add($(r,v.bronze,0,o,0)),o+=i;n.add(ht(2.3,1.6,1.6,v.marble,0,o,0,24)),n.add(U(3.6,.6,3.6,v.marble,0,o+1.6,0)),n.add(f2(t,o+2.2))}function f2(n,t){const e=new xt;e.add(ht(.7,.95,4,v.gold,0,t,0,12)),e.add($(new ii(.55,14,10),v.gold,0,t+4.5,0));const i=ht(.07,.07,6.5,v.gold,1.1,t+.4,0,6);if(i.rotation.z=-.08,e.add(i),e.add($(new ii(.4,12,8),v.gold,-1,t+2.6,.3)),n)for(let s=0;s<7;s++){const r=s/7*Math.PI*2,o=Ma(.09,.9,v.gold,Math.cos(r)*.5,t+4.7,Math.sin(r)*.5,5);o.rotation.set(Math.sin(r)*.9,0,-Math.cos(r)*.9),e.add(o)}return e}function p2(n,t,e){const i=-(e+13);if(n.add(U(34,15,22,v.stone,0,0,i)),n.add(Gn(34,22,5,v.roof,0,15,i)),n.add(U(32,1,8,v.marble,0,12,-(e-2))),t)for(let s=0;s<6;s++)n.add(fc(-12.5+s*5,0,-(e-4.5),12,.55,v.porphyry));n.add(qe(ht(5,5,12,v.stone,0,0,i-11,12,{thetaStart:-Math.PI/2,thetaLength:Math.PI}),0,-1))}function fc(n,t,e,i,s,r=v.marble){const o=new xt;return o.add(U(s*2.6,s*.6,s*2.6,v.marble,0,0,0)),o.add(ht(s*.85,s,i-s*1.6,r,0,s*.6,0,10)),o.add(ht(s*1.6,s*.9,s,v.marble,0,i-s,0,10)),o.position.set(n,t,e),o}function m2(n,t){const e=new Qe;return e.absellipse(0,0,n,t,0,Math.PI*2,!1),new Ms(e,48).rotateX(-Math.PI/2)}function ml(n,t,e,i,s,r,o,a,l){const c=new Qe;c.absellipse(0,0,e,i,s,r,!1),c.lineTo(n*Math.cos(r),t*Math.sin(r)),c.absellipse(0,0,n,t,r,s,!0);const h=new ri(c,{depth:a,bevelEnabled:!1,curveSegments:40});return $(h.rotateX(-Math.PI/2),l,0,o,0)}function g2(n,t,e,i,s){const r=[];let o=e/2,a=[n*Math.cos(i),t*Math.sin(i)];for(let l=1;l<=400;l++){const c=i+(s-i)*l/400,h=[n*Math.cos(c),t*Math.sin(c)];o+=Math.hypot(h[0]-a[0],h[1]-a[1]),o>=e&&(r.push([h[0],-h[1]]),o=0),a=h}return r}const Ws={at:[-7.4,-2.6],rotation:30,scale:2.5};function gl(n,t){const e=Ws.scale*ya,i=Ws.rotation*Math.PI/180,s=zr[n].x*e;return{at:[Ws.at[0]+s*Math.cos(i),Ws.at[1]+s*Math.sin(i)],rotation:Ws.rotation,scale:t,on:"hippodrome",lift:Vs*e,labelWithin:18}}const ta=[{id:"hagia-sophia",region:"constantinople",period:{from:537},create:QM,map:{at:[3.6,5.2],rotation:0,scale:7}},{id:"hippodrome",region:"constantinople",period:{from:203,fromApprox:!0,to:1600,toApprox:!0,ending:"demolished"},create:Wy,map:Ws},{id:"obelisk-of-theodosius",region:"constantinople",period:{from:390},create:zr["obelisk-of-theodosius"].create,map:gl("obelisk-of-theodosius",3)},{id:"serpent-column",region:"constantinople",period:{from:330,fromApprox:!0},create:zr["serpent-column"].create,map:gl("serpent-column",3)},{id:"walled-obelisk",region:"constantinople",period:{from:400,fromApprox:!0},create:zr["walled-obelisk"].create,map:gl("walled-obelisk",3)},{id:"great-palace",region:"constantinople",period:{from:330,to:1453,toApprox:!0,ending:"demolished"},create:Qy,map:{at:[2.66,-3.26],rotation:48,scale:3}},{id:"basilica-cistern",region:"constantinople",period:{from:532},create:lS,map:{at:[-4.8,5.2],rotation:0,scale:4.9}},{id:"forum-of-constantine",region:"constantinople",period:{from:330,fromApprox:!0},create:u2,map:{at:Ix,rotation:-4,scale:4.9}},{id:"aqueduct-of-valens",region:"constantinople",period:{from:368},create:gS,map:{at:[-22,8.5],rotation:8,scale:3.6}},{id:"blachernae",region:"constantinople",period:{from:500,fromApprox:!0},create:xS,map:{at:[-30.8,27.6],rotation:-10,scale:2.9}},{id:"theodosian-walls",region:"constantinople",period:{from:413},create:TS,map:{absolute:!0}},{id:"venetian-quarter",region:"constantinople",period:{from:1082,to:1453,ending:"ended"},create:CS,map:{at:[-7.46,10.4],rotation:-16,scale:4.2}},{id:"horn-chain",region:"golden-horn",period:{from:717,to:1453,ending:"ended"},create:DS,map:{absolute:!0}},{id:"dromon",region:"golden-horn",period:{from:500,fromApprox:!0,to:1150,toApprox:!0,ending:"ended"},create:kS,map:{route:Nx,speed:.9,scale:8}},{id:"galata-tower",region:"pera",period:{from:1348},create:GS,map:{at:Rx,rotation:0,scale:8.4}},{id:"genoese-quarter",region:"pera",period:{from:1267,to:1453,ending:"ended"},create:WS,map:{absolute:!0}},{id:"chrysopolis",region:"chrysopolis",period:{from:-500,fromApprox:!0},create:e2,map:{at:[26.3,15.6],rotation:-42,scale:3.6}},{id:"chalcedon",region:"chalcedon",period:{from:-685,fromApprox:!0},create:ZS,map:{at:[39.5,-21],rotation:0,scale:4.2}}],_2=n=>ta.find(t=>t.id===n),pc=[{id:"constantinople",labelAt:ge([-32,-2]),view:{target:ge([-20,6]),distance:62}},{id:"pera",labelAt:ge([-2,28]),view:{target:ge([-4,18]),distance:30}},{id:"chrysopolis",labelAt:ge([36,22]),view:{target:ge([27,16.5]),distance:28}},{id:"chalcedon",labelAt:ge([47,-16]),view:{target:ge([39,-21]),distance:30}},{id:"golden-horn",labelAt:null,view:{target:ge([-16,21]),distance:42}}],v2=340,x2=.25,M2=n=>pc.find(t=>t.id===n);class y2{constructor(t){this.root=t,this.mode="map",this.busy=!1;const e=t.querySelector("#viewport");this.renderer=new Wv({antialias:!0}),this.renderer.setPixelRatio(BM()),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=an.shadowType,this.renderer.shadowMap.autoUpdate=!1,this.renderer.toneMapping=td,this.renderer.toneMappingExposure=1.05,e.appendChild(this.renderer.domElement),this.mapView=new zM({renderer:this.renderer,container:e,landmarks:ta,regions:pc,onSelectLandmark:i=>this.openLandmark(i),onSelectRegion:i=>this.openRegion(i)}),this.detailView=new GM({renderer:this.renderer}),this.panel=new YM(t.querySelector("#info-panel"),{onSelectLandmark:i=>this.openLandmark(i),onClose:()=>this.mode==="detail"?this.closeLandmark():this.hidePanel()}),this.sidebar=new qM(t.querySelector("#sidebar"),{regions:pc,landmarks:ta,onSelectRegion:i=>this.openRegion(i),onSelectLandmark:i=>this.openLandmark(i),onToggle:()=>this.updateInsets()}),this.settings=new $M(t.querySelector("#settings")),this.timeline=new JM(t.querySelector("#timeline"),{onChange:i=>{this.mapView.setYear(i),this.sidebar.setYear(i)}}),IM(()=>this.applyLanguage()),this.backButton=t.querySelector("#back-button"),this.backButton.addEventListener("click",()=>this.closeLandmark()),this.fadeLayer=t.querySelector("#fade"),window.addEventListener("keydown",i=>{i.key==="Escape"&&(this.mode==="detail"?this.closeLandmark():this.hidePanel())}),window.addEventListener("resize",()=>this.resize()),this.resize(),this.mapView.jumpHome()}start(){const t=new R1;let e=!0,i=-1/0;this.renderer.setAnimationLoop(()=>{const s=Math.min(t.getDelta(),.1),r=t.elapsedTime,o=this.mode==="map"?this.mapView:this.detailView;an.reducedMotion||dx(r);const a=o.update(r,s);(!an.reducedMotion||a||r-i>x2)&&(o.render(this.renderer),i=r),e&&(e=!1,this.root.querySelector("#loading").classList.add("is-done"))})}async openLandmark(t){if(this.busy)return;this.busy=!0;const e=_2(t);this.sidebar.setActive(t),this.timeline.stop(),this.mode==="map"&&(this.hidePanel(),await this.mapView.focusLandmark(t)),await this.fade(!0),this.panel.showLandmark(e),this.setMode("detail"),this.detailView.show(e),await this.fade(!1),this.busy=!1}async closeLandmark(){this.busy||this.mode!=="detail"||(this.busy=!0,this.sidebar.setActive(null),await this.fade(!0),this.panel.hide(),this.setMode("map"),await this.fade(!1),await this.mapView.restoreView(),this.busy=!1)}async openRegion(t){if(this.busy)return;this.mode==="detail"&&(this.busy=!0,await this.fade(!0),this.setMode("map"),await this.fade(!1),this.busy=!1);const e=M2(t);this.sidebar.setActive(null),this.panel.showRegion(e,ta.filter(i=>i.region===t)),this.updateInsets(),await this.mapView.focusRegion(e)}setMode(t){this.mode=t,this.root.classList.toggle("is-detail",t==="detail"),this.backButton.hidden=t!=="detail",this.mapView.setActive(t==="map"),this.detailView.setActive(t==="detail"),this.updateInsets()}applyLanguage(){uf(),this.sidebar.render(),this.panel.refresh(),this.mapView.refreshLabels(),this.settings.render(),this.timeline.render(),this.updateInsets()}hidePanel(){this.panel.hide(),this.updateInsets()}updateInsets(){const t=window.matchMedia("(max-width: 760px)").matches,e=this.panel.element,i=this.sidebar.element,s={};e.hidden||(t?s.bottom=e.offsetHeight+10:s.right=e.offsetWidth+18),this.mode==="map"&&!t&&!i.classList.contains("is-collapsed")&&(s.left=i.offsetWidth+18);const r=this.timeline?.element;this.mode==="map"&&r&&getComputedStyle(r).display!=="none"&&(s.bottom=Math.max(s.bottom??0,r.offsetHeight+24)),this.root.classList.toggle("has-panel",!e.hidden),this.mapView.setInsets(s),this.detailView.setInsets(s)}async fade(t){this.fadeLayer.classList.toggle("is-visible",t),await UM(v2)}resize(){const{clientWidth:t,clientHeight:e}=this.root;this.renderer.setSize(t,e),this.mapView.resize(t,e),this.detailView.resize(t,e),this.updateInsets()}}const ju=document.getElementById("app"),Rf=()=>new Promise(n=>requestAnimationFrame(n));await AM;uf();await Rf();await Rf();try{new y2(ju).start()}catch(n){const t=ju.querySelector("#loading");throw t.classList.add("is-error"),t.textContent=Jt("error",{message:n.message}),n}
