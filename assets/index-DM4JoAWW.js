(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=1e3,t=1001,n=1002,r=1003,i=1004,a=1005,o=1006,s=1007,c=1008,l=1009,u=1010,d=1011,f=1012,p=1013,m=1014,h=1015,g=1016,_=1017,v=1018,y=1020,b=35902,x=35899,S=1021,C=1022,w=1023,T=1026,E=1027,D=1028,O=1029,k=1030,A=1031,ee=1033,j=33776,te=33777,M=33778,ne=33779,N=35840,re=35841,ie=35842,ae=35843,oe=36196,se=37492,ce=37496,le=37488,P=37489,ue=37490,de=37491,fe=37808,pe=37809,me=37810,he=37811,ge=37812,_e=37813,ve=37814,ye=37815,be=37816,xe=37817,Se=37818,Ce=37819,we=37820,Te=37821,Ee=36492,De=36494,Oe=36495,ke=36283,Ae=36284,je=36285,Me=36286,Ne=2300,F=2301,Pe=2302,Fe=2303,Ie=2400,I=2401,Le=2402,L=3200,Re=`srgb`,ze=`srgb-linear`,Be=`linear`,Ve=`srgb`,He=7680,Ue=35044,We=35048,Ge=`300 es`,Ke=2e3;function qe(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function Je(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function Ye(e){return document.createElementNS(`http://www.w3.org/1999/xhtml`,e)}function Xe(){let e=Ye(`canvas`);return e.style.display=`block`,e}var Ze={};function Qe(...e){let t=`THREE.`+e.shift();console.log(t,...e)}function $e(e){let t=e[0];if(typeof t==`string`&&t.startsWith(`TSL:`)){let t=e[1];t&&t.isStackTrace?e[0]+=` `+t.getLocation():e[1]=`Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.`}return e}function R(...e){e=$e(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function z(...e){e=$e(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function et(...e){let t=e.join(` `);t in Ze||(Ze[t]=!0,R(...e))}function tt(e,t,n){return new Promise(function(r,i){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:i();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:r()}}setTimeout(a,n)})}var nt={0:1,2:6,4:7,3:5,1:0,6:2,7:4,5:3},rt=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n!==void 0&&n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let e=r.indexOf(t);e!==-1&&r.splice(e,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let t=n.slice(0);for(let n=0,r=t.length;n<r;n++)t[n].call(this,e);e.target=null}}},it=`00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff`.split(`.`),at=Math.PI/180,ot=180/Math.PI;function st(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(it[e&255]+it[e>>8&255]+it[e>>16&255]+it[e>>24&255]+`-`+it[t&255]+it[t>>8&255]+`-`+it[t>>16&15|64]+it[t>>24&255]+`-`+it[n&63|128]+it[n>>8&255]+`-`+it[n>>16&255]+it[n>>24&255]+it[r&255]+it[r>>8&255]+it[r>>16&255]+it[r>>24&255]).toLowerCase()}function B(e,t,n){return Math.max(t,Math.min(n,e))}function ct(e,t){return(e%t+t)%t}function lt(e,t,n){return(1-n)*e+n*t}function ut(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:case Uint8ClampedArray:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw Error(`THREE.MathUtils: Invalid component type.`)}}function dt(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw Error(`THREE.MathUtils: Invalid component type.`)}}var ft=class e{static{e.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error(`THREE.Vector2: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error(`THREE.Vector2: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=B(this.x,e.x,t.x),this.y=B(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=B(this.x,e,t),this.y=B(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(B(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(B(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),i=this.x-e.x,a=this.y-e.y;return this.x=i*n-a*r+e.x,this.y=i*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},pt=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,i,a,o){let s=n[r+0],c=n[r+1],l=n[r+2],u=n[r+3],d=i[a+0],f=i[a+1],p=i[a+2],m=i[a+3];if(u!==m||s!==d||c!==f||l!==p){let e=s*d+c*f+l*p+u*m;e<0&&(d=-d,f=-f,p=-p,m=-m,e=-e);let t=1-o;if(e<.9995){let n=Math.acos(e),r=Math.sin(n);t=Math.sin(t*n)/r,o=Math.sin(o*n)/r,s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o}else{s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o;let e=1/Math.sqrt(s*s+c*c+l*l+u*u);s*=e,c*=e,l*=e,u*=e}}e[t]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,i,a){let o=n[r],s=n[r+1],c=n[r+2],l=n[r+3],u=i[a],d=i[a+1],f=i[a+2],p=i[a+3];return e[t]=o*p+l*u+s*f-c*d,e[t+1]=s*p+l*d+c*u-o*f,e[t+2]=c*p+l*f+o*d-s*u,e[t+3]=l*p-o*u-s*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,i=e._z,a=e._order,o=Math.cos,s=Math.sin,c=o(n/2),l=o(r/2),u=o(i/2),d=s(n/2),f=s(r/2),p=s(i/2);switch(a){case`XYZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`YXZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`ZXY`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`ZYX`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`YZX`:this._x=d*l*u+c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u-d*f*p;break;case`XZY`:this._x=d*l*u-c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u+d*f*p;break;default:R(`Quaternion: .setFromEuler() encountered an unknown order: `+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],i=t[8],a=t[1],o=t[5],s=t[9],c=t[2],l=t[6],u=t[10],d=n+o+u;if(d>0){let e=.5/Math.sqrt(d+1);this._w=.25/e,this._x=(l-s)*e,this._y=(i-c)*e,this._z=(a-r)*e}else if(n>o&&n>u){let e=2*Math.sqrt(1+n-o-u);this._w=(l-s)/e,this._x=.25*e,this._y=(r+a)/e,this._z=(i+c)/e}else if(o>u){let e=2*Math.sqrt(1+o-n-u);this._w=(i-c)/e,this._x=(r+a)/e,this._y=.25*e,this._z=(s+l)/e}else{let e=2*Math.sqrt(1+u-n-o);this._w=(a-r)/e,this._x=(i+c)/e,this._y=(s+l)/e,this._z=.25*e}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(B(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x*=e,this._y*=e,this._z*=e,this._w*=e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=t._x,s=t._y,c=t._z,l=t._w;return this._x=n*l+a*o+r*c-i*s,this._y=r*l+a*s+i*o-n*c,this._z=i*l+a*c+n*s-r*o,this._w=a*l-n*o-r*s-i*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,i=-i,a=-a,o=-o);let s=1-t;if(o<.9995){let e=Math.acos(o),c=Math.sin(e);s=Math.sin(s*e)/c,t=Math.sin(t*e)/c,this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this._onChangeCallback()}else this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),i=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),i*Math.sin(t),i*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},V=class e{static{e.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error(`THREE.Vector3: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error(`THREE.Vector3: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ht.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ht.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6]*r,this.y=i[1]*t+i[4]*n+i[7]*r,this.z=i[2]*t+i[5]*n+i[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=e.elements,a=1/(i[3]*t+i[7]*n+i[11]*r+i[15]);return this.x=(i[0]*t+i[4]*n+i[8]*r+i[12])*a,this.y=(i[1]*t+i[5]*n+i[9]*r+i[13])*a,this.z=(i[2]*t+i[6]*n+i[10]*r+i[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,i=e.x,a=e.y,o=e.z,s=e.w,c=2*(a*r-o*n),l=2*(o*t-i*r),u=2*(i*n-a*t);return this.x=t+s*c+a*u-o*l,this.y=n+s*l+o*c-i*u,this.z=r+s*u+i*l-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[4]*n+i[8]*r,this.y=i[1]*t+i[5]*n+i[9]*r,this.z=i[2]*t+i[6]*n+i[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=B(this.x,e.x,t.x),this.y=B(this.y,e.y,t.y),this.z=B(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=B(this.x,e,t),this.y=B(this.y,e,t),this.z=B(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(B(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,i=e.z,a=t.x,o=t.y,s=t.z;return this.x=r*s-i*o,this.y=i*a-n*s,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return mt.copy(this).projectOnVector(e),this.sub(mt)}reflect(e){return this.sub(mt.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(B(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},mt=new V,ht=new pt,H=class e{static{e.prototype.isMatrix3=!0}constructor(e,t,n,r,i,a,o,s,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c)}set(e,t,n,r,i,a,o,s,c){let l=this.elements;return l[0]=e,l[1]=r,l[2]=o,l[3]=t,l[4]=i,l[5]=s,l[6]=n,l[7]=a,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[3],s=n[6],c=n[1],l=n[4],u=n[7],d=n[2],f=n[5],p=n[8],m=r[0],h=r[3],g=r[6],_=r[1],v=r[4],y=r[7],b=r[2],x=r[5],S=r[8];return i[0]=a*m+o*_+s*b,i[3]=a*h+o*v+s*x,i[6]=a*g+o*y+s*S,i[1]=c*m+l*_+u*b,i[4]=c*h+l*v+u*x,i[7]=c*g+l*y+u*S,i[2]=d*m+f*_+p*b,i[5]=d*h+f*v+p*x,i[8]=d*g+f*y+p*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8];return t*a*l-t*o*c-n*i*l+n*o*s+r*i*c-r*a*s}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=l*a-o*c,d=o*s-l*i,f=c*i-a*s,p=t*u+n*d+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/p;return e[0]=u*m,e[1]=(r*c-l*n)*m,e[2]=(o*n-r*a)*m,e[3]=d*m,e[4]=(l*t-r*s)*m,e[5]=(r*i-o*t)*m,e[6]=f*m,e[7]=(n*s-c*t)*m,e[8]=(a*t-n*i)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,i,a,o){let s=Math.cos(i),c=Math.sin(i);return this.set(n*s,n*c,-n*(s*a+c*o)+a+e,-r*c,r*s,-r*(-c*a+s*o)+o+t,0,0,1),this}scale(e,t){return et(`Matrix3: .scale() is deprecated. Use .makeScale() instead.`),this.premultiply(gt.makeScale(e,t)),this}rotate(e){return et(`Matrix3: .rotate() is deprecated. Use .makeRotation() instead.`),this.premultiply(gt.makeRotation(-e)),this}translate(e,t){return et(`Matrix3: .translate() is deprecated. Use .makeTranslation() instead.`),this.premultiply(gt.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<9;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},gt=new H,_t=new H().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),vt=new H().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function yt(){let e={enabled:!0,workingColorSpace:ze,spaces:{},convert:function(e,t,n){return this.enabled===!1||t===n||!t||!n||(this.spaces[t].transfer===`srgb`&&(e.r=xt(e.r),e.g=xt(e.g),e.b=xt(e.b)),this.spaces[t].primaries!==this.spaces[n].primaries&&(e.applyMatrix3(this.spaces[t].toXYZ),e.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===`srgb`&&(e.r=St(e.r),e.g=St(e.g),e.b=St(e.b))),e},workingToColorSpace:function(e,t){return this.convert(e,this.workingColorSpace,t)},colorSpaceToWorking:function(e,t){return this.convert(e,t,this.workingColorSpace)},getPrimaries:function(e){return this.spaces[e].primaries},getTransfer:function(e){return e===``?Be:this.spaces[e].transfer},getToneMappingMode:function(e){return this.spaces[e].outputColorSpaceConfig.toneMappingMode||`standard`},getLuminanceCoefficients:function(e,t=this.workingColorSpace){return e.fromArray(this.spaces[t].luminanceCoefficients)},define:function(e){Object.assign(this.spaces,e)},_getMatrix:function(e,t,n){return e.copy(this.spaces[t].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(e){return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(e=this.workingColorSpace){return this.spaces[e].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(t,n){return et(`ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace().`),e.workingToColorSpace(t,n)},toWorkingColorSpace:function(t,n){return et(`ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking().`),e.colorSpaceToWorking(t,n)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return e.define({[ze]:{primaries:t,whitePoint:r,transfer:Be,toXYZ:_t,fromXYZ:vt,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Re},outputColorSpaceConfig:{drawingBufferColorSpace:Re}},[Re]:{primaries:t,whitePoint:r,transfer:Ve,toXYZ:_t,fromXYZ:vt,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Re}}}),e}var bt=yt();function xt(e){return e<.04045?e*.0773993808:(e*.9478672986+.0521327014)**2.4}function St(e){return e<.0031308?e*12.92:1.055*e**.41666-.055}var Ct,wt=class{static getDataURL(e,t=`image/png`){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>`u`)return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ct===void 0&&(Ct=Ye(`canvas`)),Ct.width=e.width,Ct.height=e.height;let t=Ct.getContext(`2d`);e instanceof ImageData?t.putImageData(e,0,0):t.drawImage(e,0,0,e.width,e.height),n=Ct}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap){let t=Ye(`canvas`);t.width=e.width,t.height=e.height;let n=t.getContext(`2d`);n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),i=r.data;for(let e=0;e<i.length;e++)i[e]=xt(i[e]/255)*255;return n.putImageData(r,0,0),t}if(e.data){let t=e.data.slice(0);for(let e=0;e<t.length;e++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[e]=Math.floor(xt(t[e]/255)*255):t[e]=xt(t[e]);return{data:t,width:e.width,height:e.height}}return R(`ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.`),e}},Tt=0,Et=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Tt++}),this.uuid=st(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<`u`&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<`u`&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t===null?e.set(0,0,0):e.set(t.width,t.height,t.depth||0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:``},r=this.data;if(r!==null){let e;if(Array.isArray(r)){e=[];for(let t=0,n=r.length;t<n;t++)r[t].isDataTexture?e.push(Dt(r[t].image)):e.push(Dt(r[t]))}else e=Dt(r);n.url=e}return t||(e.images[this.uuid]=n),n}};function Dt(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap?wt.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(R(`Texture: Unable to serialize Texture.`),{})}var Ot=0,kt=new V,At=class r extends rt{constructor(e=r.DEFAULT_IMAGE,n=r.DEFAULT_MAPPING,i=t,a=t,s=o,u=c,d=w,f=l,p=r.DEFAULT_ANISOTROPY,m=``){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ot++}),this.uuid=st(),this.name=``,this.source=new Et(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=a,this.magFilter=s,this.minFilter=u,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=f,this.offset=new ft(0,0),this.repeat=new ft(1,1),this.center=new ft(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new H,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(kt).x}get height(){return this.source.getSize(kt).y}get depth(){return this.source.getSize(kt).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){R(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?R(`Texture.setValues(): property '${t}' does not exist.`):r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:`Texture`,generator:`Texture.toJSON`},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:`dispose`})}transformUv(r){if(this.mapping!==300)return r;if(r.applyMatrix3(this.matrix),r.x<0||r.x>1)switch(this.wrapS){case e:r.x-=Math.floor(r.x);break;case t:r.x=r.x<0?0:1;break;case n:Math.abs(Math.floor(r.x)%2)===1?r.x=Math.ceil(r.x)-r.x:r.x-=Math.floor(r.x)}if(r.y<0||r.y>1)switch(this.wrapT){case e:r.y-=Math.floor(r.y);break;case t:r.y=r.y<0?0:1;break;case n:Math.abs(Math.floor(r.y)%2)===1?r.y=Math.ceil(r.y)-r.y:r.y-=Math.floor(r.y)}return this.flipY&&(r.y=1-r.y),r}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};At.DEFAULT_IMAGE=null,At.DEFAULT_MAPPING=300,At.DEFAULT_ANISOTROPY=1;var jt=class e{static{e.prototype.isVector4=!0}constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error(`THREE.Vector4: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error(`THREE.Vector4: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w===void 0?1:e.w,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*i,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*i,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*i,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*i,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,i,a=.01,o=.1,s=e.elements,c=s[0],l=s[4],u=s[8],d=s[1],f=s[5],p=s[9],m=s[2],h=s[6],g=s[10];if(Math.abs(l-d)<a&&Math.abs(u-m)<a&&Math.abs(p-h)<a){if(Math.abs(l+d)<o&&Math.abs(u+m)<o&&Math.abs(p+h)<o&&Math.abs(c+f+g-3)<o)return this.set(1,0,0,0),this;t=Math.PI;let e=(c+1)/2,s=(f+1)/2,_=(g+1)/2,v=(l+d)/4,y=(u+m)/4,b=(p+h)/4;return e>s&&e>_?e<a?(n=0,r=.707106781,i=.707106781):(n=Math.sqrt(e),r=v/n,i=y/n):s>_?s<a?(n=.707106781,r=0,i=.707106781):(r=Math.sqrt(s),n=v/r,i=b/r):_<a?(n=.707106781,r=.707106781,i=0):(i=Math.sqrt(_),n=y/i,r=b/i),this.set(n,r,i,t),this}let _=Math.sqrt((h-p)*(h-p)+(u-m)*(u-m)+(d-l)*(d-l));return Math.abs(_)<.001&&(_=1),this.x=(h-p)/_,this.y=(u-m)/_,this.z=(d-l)/_,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=B(this.x,e.x,t.x),this.y=B(this.y,e.y,t.y),this.z=B(this.z,e.z,t.z),this.w=B(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=B(this.x,e,t),this.y=B(this.y,e,t),this.z=B(this.z,e,t),this.w=B(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(B(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Mt=class extends rt{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:o,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new jt(0,0,e,t),this.scissorTest=!1,this.viewport=new jt(0,0,e,t),this.textures=[];let r=new At({width:e,height:t,depth:n.depth}),i=n.count;for(let e=0;e<i;e++)this.textures[e]=r.clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:o,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let e=0;e<this.textures.length;e++)this.textures[e].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,i=this.textures.length;r<i;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let n=Object.assign({},e.textures[t].image);this.textures[t].source=new Et(n)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null){if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture}return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:`dispose`})}},Nt=class extends Mt{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Pt=class extends At{constructor(e=null,n=1,i=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:a},this.magFilter=r,this.minFilter=r,this.wrapR=t,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},Ft=class extends At{constructor(e=null,n=1,i=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:a},this.magFilter=r,this.minFilter=r,this.wrapR=t,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}},It=class e{static{e.prototype.isMatrix4=!0}constructor(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h)}set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=i,g[5]=a,g[9]=o,g[13]=s,g[2]=c,g[6]=l,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=m,g[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,r=1/Lt.setFromMatrixColumn(e,0).length(),i=1/Lt.setFromMatrixColumn(e,1).length(),a=1/Lt.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*i,t[5]=n[5]*i,t[6]=n[6]*i,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,i=e.z,a=Math.cos(n),o=Math.sin(n),s=Math.cos(r),c=Math.sin(r),l=Math.cos(i),u=Math.sin(i);if(e.order===`XYZ`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=-s*u,t[8]=c,t[1]=n+r*c,t[5]=e-i*c,t[9]=-o*s,t[2]=i-e*c,t[6]=r+n*c,t[10]=a*s}else if(e.order===`YXZ`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e+i*o,t[4]=r*o-n,t[8]=a*c,t[1]=a*u,t[5]=a*l,t[9]=-o,t[2]=n*o-r,t[6]=i+e*o,t[10]=a*s}else if(e.order===`ZXY`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e-i*o,t[4]=-a*u,t[8]=r+n*o,t[1]=n+r*o,t[5]=a*l,t[9]=i-e*o,t[2]=-a*c,t[6]=o,t[10]=a*s}else if(e.order===`ZYX`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=r*c-n,t[8]=e*c+i,t[1]=s*u,t[5]=i*c+e,t[9]=n*c-r,t[2]=-c,t[6]=o*s,t[10]=a*s}else if(e.order===`YZX`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=i-e*u,t[8]=r*u+n,t[1]=u,t[5]=a*l,t[9]=-o*l,t[2]=-c*l,t[6]=n*u+r,t[10]=e-i*u}else if(e.order===`XZY`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=-u,t[8]=c*l,t[1]=e*u+i,t[5]=a*l,t[9]=n*u-r,t[2]=r*u-n,t[6]=o*l,t[10]=i*u+e}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(zt,e,Bt)}lookAt(e,t,n){let r=this.elements;return Ut.subVectors(e,t),Ut.lengthSq()===0&&(Ut.z=1),Ut.normalize(),Vt.crossVectors(n,Ut),Vt.lengthSq()===0&&(Math.abs(n.z)===1?Ut.x+=1e-4:Ut.z+=1e-4,Ut.normalize(),Vt.crossVectors(n,Ut)),Vt.normalize(),Ht.crossVectors(Ut,Vt),r[0]=Vt.x,r[4]=Ht.x,r[8]=Ut.x,r[1]=Vt.y,r[5]=Ht.y,r[9]=Ut.y,r[2]=Vt.z,r[6]=Ht.z,r[10]=Ut.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[4],s=n[8],c=n[12],l=n[1],u=n[5],d=n[9],f=n[13],p=n[2],m=n[6],h=n[10],g=n[14],_=n[3],v=n[7],y=n[11],b=n[15],x=r[0],S=r[4],C=r[8],w=r[12],T=r[1],E=r[5],D=r[9],O=r[13],k=r[2],A=r[6],ee=r[10],j=r[14],te=r[3],M=r[7],ne=r[11],N=r[15];return i[0]=a*x+o*T+s*k+c*te,i[4]=a*S+o*E+s*A+c*M,i[8]=a*C+o*D+s*ee+c*ne,i[12]=a*w+o*O+s*j+c*N,i[1]=l*x+u*T+d*k+f*te,i[5]=l*S+u*E+d*A+f*M,i[9]=l*C+u*D+d*ee+f*ne,i[13]=l*w+u*O+d*j+f*N,i[2]=p*x+m*T+h*k+g*te,i[6]=p*S+m*E+h*A+g*M,i[10]=p*C+m*D+h*ee+g*ne,i[14]=p*w+m*O+h*j+g*N,i[3]=_*x+v*T+y*k+b*te,i[7]=_*S+v*E+y*A+b*M,i[11]=_*C+v*D+y*ee+b*ne,i[15]=_*w+v*O+y*j+b*N,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[12],a=e[1],o=e[5],s=e[9],c=e[13],l=e[2],u=e[6],d=e[10],f=e[14],p=e[3],m=e[7],h=e[11],g=e[15],_=s*f-c*d,v=o*f-c*u,y=o*d-s*u,b=a*f-c*l,x=a*d-s*l,S=a*u-o*l;return t*(m*_-h*v+g*y)-n*(p*_-h*b+g*x)+r*(p*v-m*b+g*S)-i*(p*y-m*x+h*S)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[1],a=e[5],o=e[9],s=e[2],c=e[6],l=e[10];return t*(a*l-o*c)-n*(i*l-o*s)+r*(i*c-a*s)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=e[9],d=e[10],f=e[11],p=e[12],m=e[13],h=e[14],g=e[15],_=t*o-n*a,v=t*s-r*a,y=t*c-i*a,b=n*s-r*o,x=n*c-i*o,S=r*c-i*s,C=l*m-u*p,w=l*h-d*p,T=l*g-f*p,E=u*h-d*m,D=u*g-f*m,O=d*g-f*h,k=_*O-v*D+y*E+b*T-x*w+S*C;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/k;return e[0]=(o*O-s*D+c*E)*A,e[1]=(r*D-n*O-i*E)*A,e[2]=(m*S-h*x+g*b)*A,e[3]=(d*x-u*S-f*b)*A,e[4]=(s*T-a*O-c*w)*A,e[5]=(t*O-r*T+i*w)*A,e[6]=(h*y-p*S-g*v)*A,e[7]=(l*S-d*y+f*v)*A,e[8]=(a*D-o*T+c*C)*A,e[9]=(n*T-t*D-i*C)*A,e[10]=(p*x-m*y+g*_)*A,e[11]=(u*y-l*x-f*_)*A,e[12]=(o*w-a*E-s*C)*A,e[13]=(t*E-n*w+r*C)*A,e[14]=(m*v-p*b-h*_)*A,e[15]=(l*b-u*v+d*_)*A,this}scale(e){let t=this.elements,n=e.x,r=e.y,i=e.z;return t[0]*=n,t[4]*=r,t[8]*=i,t[1]*=n,t[5]*=r,t[9]*=i,t[2]*=n,t[6]*=r,t[10]*=i,t[3]*=n,t[7]*=r,t[11]*=i,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),i=1-n,a=e.x,o=e.y,s=e.z,c=i*a,l=i*o;return this.set(c*a+n,c*o-r*s,c*s+r*o,0,c*o+r*s,l*o+n,l*s-r*a,0,c*s-r*o,l*s+r*a,i*s*s+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,i,a){return this.set(1,n,i,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,i=t._x,a=t._y,o=t._z,s=t._w,c=i+i,l=a+a,u=o+o,d=i*c,f=i*l,p=i*u,m=a*l,h=a*u,g=o*u,_=s*c,v=s*l,y=s*u,b=n.x,x=n.y,S=n.z;return r[0]=(1-(m+g))*b,r[1]=(f+y)*b,r[2]=(p-v)*b,r[3]=0,r[4]=(f-y)*x,r[5]=(1-(d+g))*x,r[6]=(h+_)*x,r[7]=0,r[8]=(p+v)*S,r[9]=(h-_)*S,r[10]=(1-(d+m))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let i=this.determinantAffine();if(i===0)return n.set(1,1,1),t.identity(),this;let a=Lt.set(r[0],r[1],r[2]).length(),o=Lt.set(r[4],r[5],r[6]).length(),s=Lt.set(r[8],r[9],r[10]).length();i<0&&(a=-a),Rt.copy(this);let c=1/a,l=1/o,u=1/s;return Rt.elements[0]*=c,Rt.elements[1]*=c,Rt.elements[2]*=c,Rt.elements[4]*=l,Rt.elements[5]*=l,Rt.elements[6]*=l,Rt.elements[8]*=u,Rt.elements[9]*=u,Rt.elements[10]*=u,t.setFromRotationMatrix(Rt),n.x=a,n.y=o,n.z=s,this}makePerspective(e,t,n,r,i,a,o=Ke,s=!1){let c=this.elements,l=2*i/(t-e),u=2*i/(n-r),d=(t+e)/(t-e),f=(n+r)/(n-r),p,m;if(s)p=i/(a-i),m=a*i/(a-i);else if(o===2e3)p=-(a+i)/(a-i),m=-2*a*i/(a-i);else if(o===2001)p=-a/(a-i),m=-a*i/(a-i);else throw Error(`THREE.Matrix4.makePerspective(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,i,a,o=Ke,s=!1){let c=this.elements,l=2/(t-e),u=2/(n-r),d=-(t+e)/(t-e),f=-(n+r)/(n-r),p,m;if(s)p=1/(a-i),m=a/(a-i);else if(o===2e3)p=-2/(a-i),m=-(a+i)/(a-i);else if(o===2001)p=-1/(a-i),m=-i/(a-i);else throw Error(`THREE.Matrix4.makeOrthographic(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<16;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Lt=new V,Rt=new It,zt=new V(0,0,0),Bt=new V(1,1,1),Vt=new V,Ht=new V,Ut=new V,Wt=new It,Gt=new pt,Kt=class e{constructor(t=0,n=0,r=0,i=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,i=r[0],a=r[4],o=r[8],s=r[1],c=r[5],l=r[9],u=r[2],d=r[6],f=r[10];switch(t){case`XYZ`:this._y=Math.asin(B(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-a,i)):(this._x=Math.atan2(d,c),this._z=0);break;case`YXZ`:this._x=Math.asin(-B(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(s,c)):(this._y=Math.atan2(-u,i),this._z=0);break;case`ZXY`:this._x=Math.asin(B(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(s,i));break;case`ZYX`:this._y=Math.asin(-B(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(s,i)):(this._x=0,this._z=Math.atan2(-a,c));break;case`YZX`:this._z=Math.asin(B(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-u,i)):(this._x=0,this._y=Math.atan2(o,f));break;case`XZY`:this._z=Math.asin(-B(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-l,f),this._y=0);break;default:R(`Euler: .setFromRotationMatrix() encountered an unknown order: `+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Wt.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Wt,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Gt.setFromEuler(this),this.setFromQuaternion(Gt,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Kt.DEFAULT_ORDER=`XYZ`;var qt=class{constructor(){this.mask=1}set(e){this.mask=1<<e>>>0}enable(e){this.mask|=1<<e}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e}disable(e){this.mask&=~(1<<e)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return!!(this.mask&1<<e)}},Jt=0,Yt=new V,Xt=new pt,Zt=new It,Qt=new V,$t=new V,en=new V,tn=new pt,nn=new V(1,0,0),rn=new V(0,1,0),an=new V(0,0,1),on={type:`added`},sn={type:`removed`},cn={type:`childadded`,child:null},ln={type:`childremoved`,child:null},un=class e extends rt{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Jt++}),this.uuid=st(),this.name=``,this.type=`Object3D`,this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new V,n=new Kt,r=new pt,i=new V(1,1,1);function a(){r.setFromEuler(n,!1)}function o(){n.setFromQuaternion(r,void 0,!1)}n._onChange(a),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new It},normalMatrix:{value:new H}}),this.matrix=new It,this.matrixWorld=new It,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new qt,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Xt.setFromAxisAngle(e,t),this.quaternion.multiply(Xt),this}rotateOnWorldAxis(e,t){return Xt.setFromAxisAngle(e,t),this.quaternion.premultiply(Xt),this}rotateX(e){return this.rotateOnAxis(nn,e)}rotateY(e){return this.rotateOnAxis(rn,e)}rotateZ(e){return this.rotateOnAxis(an,e)}translateOnAxis(e,t){return Yt.copy(e).applyQuaternion(this.quaternion),this.position.add(Yt.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(nn,e)}translateY(e){return this.translateOnAxis(rn,e)}translateZ(e){return this.translateOnAxis(an,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Zt.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Qt.copy(e):Qt.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),$t.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Zt.lookAt($t,Qt,this.up):Zt.lookAt(Qt,$t,this.up),this.quaternion.setFromRotationMatrix(Zt),r&&(Zt.extractRotation(r.matrixWorld),Xt.setFromRotationMatrix(Zt),this.quaternion.premultiply(Xt.invert()))}add(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return e===this?(z(`Object3D.add: object can't be added as a child of itself.`,e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(on),cn.child=e,this.dispatchEvent(cn),cn.child=null):z(`Object3D.add: object not an instance of THREE.Object3D.`,e),this)}remove(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.remove(arguments[e]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(sn),ln.child=e,this.dispatchEvent(ln),ln.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Zt.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Zt.multiply(e.parent.matrixWorld)),e.applyMatrix4(Zt),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(on),cn.child=e,this.dispatchEvent(cn),cn.child=null,this}getObjectById(e){return this.getObjectByProperty(`id`,e)}getObjectByName(e){return this.getObjectByProperty(`name`,e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let i=0,a=r.length;i<a;i++)r[i].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($t,e,en),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($t,tn,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,r=e.z,i=this.matrix.elements;i[12]+=t-i[0]*t-i[4]*n-i[8]*r,i[13]+=n-i[1]*t-i[5]*n-i[9]*r,i[14]+=r-i[2]*t-i[6]*n-i[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let e=this.children;for(let t=0,r=e.length;t<r;t++)e[t].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e==`string`,n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:`Object`,generator:`Object3D.toJSON`});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type=`InstancedMesh`,r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type=`BatchedMesh`,r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(e=>({...e,boundingBox:e.boundingBox?e.boundingBox.toJSON():void 0,boundingSphere:e.boundingSphere?e.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(e=>({...e})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function i(t,n){return t[n.uuid]===void 0&&(t[n.uuid]=n.toJSON(e)),n.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=i(e.geometries,this.geometry);let t=this.geometry.parameters;if(t!==void 0&&t.shapes!==void 0){let n=t.shapes;if(Array.isArray(n))for(let t=0,r=n.length;t<r;t++){let r=n[t];i(e.shapes,r)}else i(e.shapes,n)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0){if(Array.isArray(this.material)){let t=[];for(let n=0,r=this.material.length;n<r;n++)t.push(i(e.materials,this.material[n]));r.material=t}else r.material=i(e.materials,this.material)}if(this.children.length>0){r.children=[];for(let t=0;t<this.children.length;t++)r.children.push(this.children[t].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let t=0;t<this.animations.length;t++){let n=this.animations[t];r.animations.push(i(e.animations,n))}}if(t){let t=a(e.geometries),r=a(e.materials),i=a(e.textures),o=a(e.images),s=a(e.shapes),c=a(e.skeletons),l=a(e.animations),u=a(e.nodes);t.length>0&&(n.geometries=t),r.length>0&&(n.materials=r),i.length>0&&(n.textures=i),o.length>0&&(n.images=o),s.length>0&&(n.shapes=s),c.length>0&&(n.skeletons=c),l.length>0&&(n.animations=l),u.length>0&&(n.nodes=u)}return n.object=r,n;function a(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot===null?null:e.pivot.clone(),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let t=0;t<e.children.length;t++){let n=e.children[t];this.add(n.clone())}return this}dispose(){this.dispatchEvent({type:`dispose`})}};un.DEFAULT_UP=new V(0,1,0),un.DEFAULT_MATRIX_AUTO_UPDATE=!0,un.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var dn=class extends un{constructor(){super(),this.isGroup=!0,this.type=`Group`}},fn={type:`move`},pn=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new dn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new dn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new dn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:`connected`,data:e}),this}disconnect(e){return this.dispatchEvent({type:`disconnected`,data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,i=null,a=null,o=this._targetRay,s=this._grip,c=this._hand;if(e&&t.session.visibilityState!==`visible-blurred`){if(c&&e.hand){a=!0;for(let r of e.hand.values()){let e=t.getJointPose(r,n),i=this._getHandJoint(c,r);e!==null&&(i.matrix.fromArray(e.transform.matrix),i.matrix.decompose(i.position,i.rotation,i.scale),i.matrixWorldNeedsUpdate=!0,i.jointRadius=e.radius),i.visible=e!==null}let r=c.joints[`index-finger-tip`],i=c.joints[`thumb-tip`],o=r.position.distanceTo(i.position);c.inputState.pinching&&o>.025?(c.inputState.pinching=!1,this.dispatchEvent({type:`pinchend`,handedness:e.handedness,target:this})):!c.inputState.pinching&&o<=.015&&(c.inputState.pinching=!0,this.dispatchEvent({type:`pinchstart`,handedness:e.handedness,target:this}))}else s!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,n),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1,s.eventsEnabled&&s.dispatchEvent({type:`gripUpdated`,data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&i!==null&&(r=i),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(fn)))}return o!==null&&(o.visible=r!==null),s!==null&&(s.visible=i!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new dn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},mn={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},hn={h:0,s:0,l:0},gn={h:0,s:0,l:0};function _n(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var vn=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let t=e;t&&t.isColor?this.copy(t):typeof t==`number`?this.setHex(t):typeof t==`string`&&this.setStyle(t)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Re){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,bt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=bt.workingColorSpace){return this.r=e,this.g=t,this.b=n,bt.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=bt.workingColorSpace){if(e=ct(e,1),t=B(t,0,1),n=B(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,i=2*n-r;this.r=_n(i,r,e+1/3),this.g=_n(i,r,e),this.b=_n(i,r,e-1/3)}return bt.colorSpaceToWorking(this,r),this}setStyle(e,t=Re){function n(t){t!==void 0&&parseFloat(t)<1&&R(`Color: Alpha component of `+e+` will be ignored.`)}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let i,a=r[1],o=r[2];switch(a){case`rgb`:case`rgba`:if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(100,parseInt(i[1],10))/100,Math.min(100,parseInt(i[2],10))/100,Math.min(100,parseInt(i[3],10))/100,t);break;case`hsl`:case`hsla`:if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:R(`Color: Unknown color model `+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let n=r[1],i=n.length;if(i===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(i===6)return this.setHex(parseInt(n,16),t);R(`Color: Invalid hex color `+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Re){let n=mn[e.toLowerCase()];return n===void 0?R(`Color: Unknown color `+e):this.setHex(n,t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=xt(e.r),this.g=xt(e.g),this.b=xt(e.b),this}copyLinearToSRGB(e){return this.r=St(e.r),this.g=St(e.g),this.b=St(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Re){return bt.workingToColorSpace(yn.copy(this),e),Math.round(B(yn.r*255,0,255))*65536+Math.round(B(yn.g*255,0,255))*256+Math.round(B(yn.b*255,0,255))}getHexString(e=Re){return(`000000`+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=bt.workingColorSpace){bt.workingToColorSpace(yn.copy(this),t);let n=yn.r,r=yn.g,i=yn.b,a=Math.max(n,r,i),o=Math.min(n,r,i),s,c,l=(o+a)/2;if(o===a)s=0,c=0;else{let e=a-o;switch(c=l<=.5?e/(a+o):e/(2-a-o),a){case n:s=(r-i)/e+(r<i?6:0);break;case r:s=(i-n)/e+2;break;case i:s=(n-r)/e+4}s/=6}return e.h=s,e.s=c,e.l=l,e}getRGB(e,t=bt.workingColorSpace){return bt.workingToColorSpace(yn.copy(this),t),e.r=yn.r,e.g=yn.g,e.b=yn.b,e}getStyle(e=Re){bt.workingToColorSpace(yn.copy(this),e);let t=yn.r,n=yn.g,r=yn.b;return e===`srgb`?`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`:`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`}offsetHSL(e,t,n){return this.getHSL(hn),this.setHSL(hn.h+e,hn.s+t,hn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(hn),e.getHSL(gn);let n=lt(hn.h,gn.h,t),r=lt(hn.s,gn.s,t),i=lt(hn.l,gn.l,t);return this.setHSL(n,r,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,i=e.elements;return this.r=i[0]*t+i[3]*n+i[6]*r,this.g=i[1]*t+i[4]*n+i[7]*r,this.b=i[2]*t+i[5]*n+i[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},yn=new vn;vn.NAMES=mn;var bn=class extends un{constructor(){super(),this.isScene=!0,this.type=`Scene`,this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Kt,this.environmentIntensity=1,this.environmentRotation=new Kt,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},xn=new V,Sn=new V,Cn=new V,wn=new V,Tn=new V,En=new V,Dn=new V,On=new V,kn=new V,An=new V,jn=new jt,Mn=new jt,Nn=new jt,Pn=class e{constructor(e=new V,t=new V,n=new V){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),xn.subVectors(e,t),r.cross(xn);let i=r.lengthSq();return i>0?r.multiplyScalar(1/Math.sqrt(i)):r.set(0,0,0)}static getBarycoord(e,t,n,r,i){xn.subVectors(r,t),Sn.subVectors(n,t),Cn.subVectors(e,t);let a=xn.dot(xn),o=xn.dot(Sn),s=xn.dot(Cn),c=Sn.dot(Sn),l=Sn.dot(Cn),u=a*c-o*o;if(u===0)return i.set(0,0,0),null;let d=1/u,f=(c*s-o*l)*d,p=(a*l-o*s)*d;return i.set(1-f-p,p,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,wn)!==null&&wn.x>=0&&wn.y>=0&&wn.x+wn.y<=1}static getInterpolation(e,t,n,r,i,a,o,s){return this.getBarycoord(e,t,n,r,wn)===null?(s.x=0,s.y=0,`z`in s&&(s.z=0),`w`in s&&(s.w=0),null):(s.setScalar(0),s.addScaledVector(i,wn.x),s.addScaledVector(a,wn.y),s.addScaledVector(o,wn.z),s)}static getInterpolatedAttribute(e,t,n,r,i,a){return jn.setScalar(0),Mn.setScalar(0),Nn.setScalar(0),jn.fromBufferAttribute(e,t),Mn.fromBufferAttribute(e,n),Nn.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(jn,i.x),a.addScaledVector(Mn,i.y),a.addScaledVector(Nn,i.z),a}static isFrontFacing(e,t,n,r){return xn.subVectors(n,t),Sn.subVectors(e,t),xn.cross(Sn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return xn.subVectors(this.c,this.b),Sn.subVectors(this.a,this.b),xn.cross(Sn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,r,i,a){return e.getInterpolation(t,this.a,this.b,this.c,n,r,i,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,i=this.c,a,o;Tn.subVectors(r,n),En.subVectors(i,n),On.subVectors(e,n);let s=Tn.dot(On),c=En.dot(On);if(s<=0&&c<=0)return t.copy(n);kn.subVectors(e,r);let l=Tn.dot(kn),u=En.dot(kn);if(l>=0&&u<=l)return t.copy(r);let d=s*u-l*c;if(d<=0&&s>=0&&l<=0)return a=s/(s-l),t.copy(n).addScaledVector(Tn,a);An.subVectors(e,i);let f=Tn.dot(An),p=En.dot(An);if(p>=0&&f<=p)return t.copy(i);let m=f*c-s*p;if(m<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(En,o);let h=l*p-f*u;if(h<=0&&u-l>=0&&f-p>=0)return Dn.subVectors(i,r),o=(u-l)/(u-l+(f-p)),t.copy(r).addScaledVector(Dn,o);let g=1/(h+m+d);return a=m*g,o=d*g,t.copy(n).addScaledVector(Tn,a).addScaledVector(En,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Fn=class{constructor(e=new V(1/0,1/0,1/0),t=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Ln.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Ln.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Ln.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute(`position`);if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let t=0,n=r.count;t<n;t++)e.isMesh===!0?e.getVertexPosition(t,Ln):Ln.fromBufferAttribute(r,t),Ln.applyMatrix4(e.matrixWorld),this.expandByPoint(Ln);else e.boundingBox===void 0?(n.boundingBox===null&&n.computeBoundingBox(),Rn.copy(n.boundingBox)):(e.boundingBox===null&&e.computeBoundingBox(),Rn.copy(e.boundingBox)),Rn.applyMatrix4(e.matrixWorld),this.union(Rn)}let r=e.children;for(let e=0,n=r.length;e<n;e++)this.expandByObject(r[e],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ln),Ln.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Gn),Kn.subVectors(this.max,Gn),zn.subVectors(e.a,Gn),Bn.subVectors(e.b,Gn),Vn.subVectors(e.c,Gn),Hn.subVectors(Bn,zn),Un.subVectors(Vn,Bn),Wn.subVectors(zn,Vn);let t=[0,-Hn.z,Hn.y,0,-Un.z,Un.y,0,-Wn.z,Wn.y,Hn.z,0,-Hn.x,Un.z,0,-Un.x,Wn.z,0,-Wn.x,-Hn.y,Hn.x,0,-Un.y,Un.x,0,-Wn.y,Wn.x,0];return!Yn(t,zn,Bn,Vn,Kn)||(t=[1,0,0,0,1,0,0,0,1],!Yn(t,zn,Bn,Vn,Kn))?!1:(qn.crossVectors(Hn,Un),t=[qn.x,qn.y,qn.z],Yn(t,zn,Bn,Vn,Kn))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ln).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ln).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(In[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),In[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),In[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),In[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),In[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),In[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),In[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),In[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(In)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},In=[new V,new V,new V,new V,new V,new V,new V,new V],Ln=new V,Rn=new Fn,zn=new V,Bn=new V,Vn=new V,Hn=new V,Un=new V,Wn=new V,Gn=new V,Kn=new V,qn=new V,Jn=new V;function Yn(e,t,n,r,i){for(let a=0,o=e.length-3;a<=o;a+=3){Jn.fromArray(e,a);let o=i.x*Math.abs(Jn.x)+i.y*Math.abs(Jn.y)+i.z*Math.abs(Jn.z),s=t.dot(Jn),c=n.dot(Jn),l=r.dot(Jn);if(Math.max(-Math.max(s,c,l),Math.min(s,c,l))>o)return!1}return!0}var Xn=new V,Zn=new ft,Qn=0,$n=class extends rt{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw TypeError(`THREE.BufferAttribute: array should be a Typed Array.`);this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Qn++}),this.name=``,this.array=e,this.itemSize=t,this.count=e===void 0?0:e.length/t,this.normalized=n,this.usage=Ue,this.updateRanges=[],this.gpuType=h,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,i=this.itemSize;r<i;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Zn.fromBufferAttribute(this,t),Zn.applyMatrix3(e),this.setXY(t,Zn.x,Zn.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Xn.fromBufferAttribute(this,t),Xn.applyMatrix3(e),this.setXYZ(t,Xn.x,Xn.y,Xn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Xn.fromBufferAttribute(this,t),Xn.applyMatrix4(e),this.setXYZ(t,Xn.x,Xn.y,Xn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Xn.fromBufferAttribute(this,t),Xn.applyNormalMatrix(e),this.setXYZ(t,Xn.x,Xn.y,Xn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Xn.fromBufferAttribute(this,t),Xn.transformDirection(e),this.setXYZ(t,Xn.x,Xn.y,Xn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ut(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=dt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ut(t,this.array)),t}setX(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ut(t,this.array)),t}setY(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ut(t,this.array)),t}setZ(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ut(t,this.array)),t}setW(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=dt(t,this.array),n=dt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=dt(t,this.array),n=dt(n,this.array),r=dt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e*=this.itemSize,this.normalized&&(t=dt(t,this.array),n=dt(n,this.array),r=dt(r,this.array),i=dt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:`dispose`})}},er=class extends $n{constructor(e,t,n){super(new Uint16Array(e),t,n)}},tr=class extends $n{constructor(e,t,n){super(new Uint32Array(e),t,n)}},nr=class extends $n{constructor(e,t,n){super(new Float32Array(e),t,n)}},rr=new Fn,ir=new V,ar=new V,or=class{constructor(e=new V,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t===void 0?rr.setFromPoints(e).getCenter(n):n.copy(t);let r=0;for(let t=0,i=e.length;t<i;t++)r=Math.max(r,n.distanceToSquared(e[t]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius*=e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ir.subVectors(e,this.center);let t=ir.lengthSq();if(t>this.radius*this.radius){let e=Math.sqrt(t),n=(e-this.radius)*.5;this.center.addScaledVector(ir,n/e),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ar.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ir.copy(e.center).add(ar)),this.expandByPoint(ir.copy(e.center).sub(ar))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},sr=0,cr=new It,lr=new un,ur=new V,dr=new Fn,fr=new Fn,pr=new V,mr=class e extends rt{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:sr++}),this.uuid=st(),this.name=``,this.type=`BufferGeometry`,this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return this.index=Array.isArray(e)?new(qe(e)?tr:er)(e,1):e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let t=new H().getNormalMatrix(e);n.applyNormalMatrix(t),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return cr.makeRotationFromQuaternion(e),this.applyMatrix4(cr),this}rotateX(e){return cr.makeRotationX(e),this.applyMatrix4(cr),this}rotateY(e){return cr.makeRotationY(e),this.applyMatrix4(cr),this}rotateZ(e){return cr.makeRotationZ(e),this.applyMatrix4(cr),this}translate(e,t,n){return cr.makeTranslation(e,t,n),this.applyMatrix4(cr),this}scale(e,t,n){return cr.makeScale(e,t,n),this.applyMatrix4(cr),this}lookAt(e){return lr.lookAt(e),lr.updateMatrix(),this.applyMatrix4(lr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ur).negate(),this.translate(ur.x,ur.y,ur.z),this}setFromPoints(e){let t=this.getAttribute(`position`);if(t===void 0){let t=[];for(let n=0,r=e.length;n<r;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}this.setAttribute(`position`,new nr(t,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let n=e[r];t.setXYZ(r,n.x,n.y,n.z||0)}e.length>t.count&&R(`BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.`),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Fn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)z(`BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.`,this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));else{if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];dr.setFromBufferAttribute(n),this.morphTargetsRelative?(pr.addVectors(this.boundingBox.min,dr.min),this.boundingBox.expandByPoint(pr),pr.addVectors(this.boundingBox.max,dr.max),this.boundingBox.expandByPoint(pr)):(this.boundingBox.expandByPoint(dr.min),this.boundingBox.expandByPoint(dr.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&z(`BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.`,this)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new or);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)z(`BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.`,this),this.boundingSphere.set(new V,1/0);else if(e){let n=this.boundingSphere.center;if(dr.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];fr.setFromBufferAttribute(n),this.morphTargetsRelative?(pr.addVectors(dr.min,fr.min),dr.expandByPoint(pr),pr.addVectors(dr.max,fr.max),dr.expandByPoint(pr)):(dr.expandByPoint(fr.min),dr.expandByPoint(fr.max))}dr.getCenter(n);let r=0;for(let t=0,i=e.count;t<i;t++)pr.fromBufferAttribute(e,t),r=Math.max(r,n.distanceToSquared(pr));if(t)for(let i=0,a=t.length;i<a;i++){let a=t[i],o=this.morphTargetsRelative;for(let t=0,i=a.count;t<i;t++)pr.fromBufferAttribute(a,t),o&&(ur.fromBufferAttribute(e,t),pr.add(ur)),r=Math.max(r,n.distanceToSquared(pr))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&z(`BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.`,this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){z(`BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)`);return}let n=t.position,r=t.normal,i=t.uv,a=this.getAttribute(`tangent`);(a===void 0||a.count!==n.count)&&(a=new $n(new Float32Array(4*n.count),4),this.setAttribute(`tangent`,a));let o=[],s=[];for(let e=0;e<n.count;e++)o[e]=new V,s[e]=new V;let c=new V,l=new V,u=new V,d=new ft,f=new ft,p=new ft,m=new V,h=new V;function g(e,t,r){c.fromBufferAttribute(n,e),l.fromBufferAttribute(n,t),u.fromBufferAttribute(n,r),d.fromBufferAttribute(i,e),f.fromBufferAttribute(i,t),p.fromBufferAttribute(i,r),l.sub(c),u.sub(c),f.sub(d),p.sub(d);let a=1/(f.x*p.y-p.x*f.y);isFinite(a)&&(m.copy(l).multiplyScalar(p.y).addScaledVector(u,-f.y).multiplyScalar(a),h.copy(u).multiplyScalar(f.x).addScaledVector(l,-p.x).multiplyScalar(a),o[e].add(m),o[t].add(m),o[r].add(m),s[e].add(h),s[t].add(h),s[r].add(h))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)g(e.getX(t+0),e.getX(t+1),e.getX(t+2))}let v=new V,y=new V,b=new V,x=new V;function S(e){b.fromBufferAttribute(r,e),x.copy(b);let t=o[e];v.copy(t),v.sub(b.multiplyScalar(b.dot(t))).normalize(),y.crossVectors(x,t);let n=y.dot(s[e])<0?-1:1;a.setXYZW(e,v.x,v.y,v.z,n)}for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)S(e.getX(t+0)),S(e.getX(t+1)),S(e.getX(t+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute(`position`);if(t!==void 0){let n=this.getAttribute(`normal`);if(n===void 0||n.count!==t.count)n=new $n(new Float32Array(t.count*3),3),this.setAttribute(`normal`,n);else for(let e=0,t=n.count;e<t;e++)n.setXYZ(e,0,0,0);let r=new V,i=new V,a=new V,o=new V,s=new V,c=new V,l=new V,u=new V;if(e)for(let d=0,f=e.count;d<f;d+=3){let f=e.getX(d+0),p=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,f),i.fromBufferAttribute(t,p),a.fromBufferAttribute(t,m),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),o.fromBufferAttribute(n,f),s.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),o.add(l),s.add(l),c.add(l),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(p,s.x,s.y,s.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let e=0,o=t.count;e<o;e+=3)r.fromBufferAttribute(t,e+0),i.fromBufferAttribute(t,e+1),a.fromBufferAttribute(t,e+2),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),n.setXYZ(e+0,l.x,l.y,l.z),n.setXYZ(e+1,l.x,l.y,l.z),n.setXYZ(e+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)pr.fromBufferAttribute(e,t),pr.normalize(),e.setXYZ(t,pr.x,pr.y,pr.z)}toNonIndexed(){function t(e,t){let n=e.array,r=e.itemSize,i=e.normalized,a=new n.constructor(t.length*r),o=0,s=0;for(let i=0,c=t.length;i<c;i++){o=e.isInterleavedBufferAttribute?t[i]*e.data.stride+e.offset:t[i]*r;for(let e=0;e<r;e++)a[s++]=n[o++]}return new $n(a,r,i)}if(this.index===null)return R(`BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.`),this;let n=new e,r=this.index.array,i=this.attributes;for(let e in i){let a=i[e],o=t(a,r);n.setAttribute(e,o)}let a=this.morphAttributes;for(let e in a){let i=[],o=a[e];for(let e=0,n=o.length;e<n;e++){let n=o[e],a=t(n,r);i.push(a)}n.morphAttributes[e]=i}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let e=0,t=o.length;e<t;e++){let t=o[e];n.addGroup(t.start,t.count,t.materialIndex)}return n}toJSON(){let e={metadata:{version:4.7,type:`BufferGeometry`,generator:`BufferGeometry.toJSON`}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?`BufferGeometry`:this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let t=this.parameters;for(let n in t)t[n]!==void 0&&(e[n]=t[n]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let t in n){let r=n[t];e.data.attributes[t]=r.toJSON(e.data)}let r={},i=!1;for(let t in this.morphAttributes){let n=this.morphAttributes[t],a=[];for(let t=0,r=n.length;t<r;t++){let r=n[t];a.push(r.toJSON(e.data))}a.length>0&&(r[t]=a,i=!0)}i&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let e in r){let n=r[e];this.setAttribute(e,n.clone(t))}let i=e.morphAttributes;for(let e in i){let n=[],r=i[e];for(let e=0,i=r.length;e<i;e++)n.push(r[e].clone(t));this.morphAttributes[e]=n}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let e=0,t=a.length;e<t;e++){let t=a[e];this.addGroup(t.start,t.count,t.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let s=e.boundingSphere;return s!==null&&(this.boundingSphere=s.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:`dispose`})}},hr=new V,gr=new V,_r=new H,vr=class{constructor(e=new V(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=hr.subVectors(n,t).cross(gr.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let r=e.delta(hr),i=this.normal.dot(r);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/i;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||_r.getNormalMatrix(e),r=this.coplanarPoint(hr).applyMatrix4(e),i=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},yr=0,br=class extends rt{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:yr++}),this.uuid=st(),this.name=``,this.type=`Material`,this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new vn(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=He,this.stencilZFail=He,this.stencilZPass=He,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){R(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?R(`Material: '${t}' is not a property of THREE.${this.type}.`):r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:`Material`,generator:`Material.toJSON`}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(e=>e.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}if(t){let t=r(e.textures),i=r(e.images);t.length>0&&(n.textures=t),i.length>0&&(n.images=i)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new vn().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(e=>new vr().fromJSON(e))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(this.vertexColors=typeof e.vertexColors==`number`?e.vertexColors>0:e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let t=e.normalScale;Array.isArray(t)===!1&&(t=[t,t]),this.normalScale=new ft().fromArray(t)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ft().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let e=t.length;n=Array(e);for(let r=0;r!==e;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:`dispose`})}set needsUpdate(e){e===!0&&this.version++}},xr=new V,Sr=new V,Cr=new V,wr=new V,Tr=class{constructor(e=new V,t=new V(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,xr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=xr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(xr.copy(this.origin).addScaledVector(this.direction,t),xr.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Sr.copy(e).add(t).multiplyScalar(.5),Cr.copy(t).sub(e).normalize(),wr.copy(this.origin).sub(Sr);let i=e.distanceTo(t)*.5,a=-this.direction.dot(Cr),o=wr.dot(this.direction),s=-wr.dot(Cr),c=wr.lengthSq(),l=Math.abs(1-a*a),u,d,f,p;if(l>0){if(u=a*s-o,d=a*o-s,p=i*l,u>=0){if(d>=-p){if(d<=p){let e=1/l;u*=e,d*=e,f=u*(u+a*d+2*o)+d*(a*u+d+2*s)+c}else d=i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d=-i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d<=-p?(u=Math.max(0,-(-a*i+o)),d=u>0?-i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c):d<=p?(u=0,d=Math.min(Math.max(-i,-s),i),f=d*(d+2*s)+c):(u=Math.max(0,-(a*i+o)),d=u>0?i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c)}else d=a>0?-i:i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(Sr).addScaledVector(Cr,d),f}intersectSphere(e,t){if(e.radius<0)return null;xr.subVectors(e.center,this.origin);let n=xr.dot(this.direction),r=xr.dot(xr)-n*n,i=e.radius*e.radius;if(r>i)return null;let a=Math.sqrt(i-r),o=n-a,s=n+a;return s<0?null:o<0?this.at(s,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,i,a,o,s,c=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),l>=0?(i=(e.min.y-d.y)*l,a=(e.max.y-d.y)*l):(i=(e.max.y-d.y)*l,a=(e.min.y-d.y)*l),n>a||i>r||((i>n||isNaN(n))&&(n=i),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,s=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,s=(e.min.z-d.z)*u),n>s||o>r)||((o>n||n!==n)&&(n=o),(s<r||r!==r)&&(r=s),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,xr)!==null}intersectTriangle(e,t,n,r,i){let a=this.origin,o=this.direction,s=o.x,c=o.y,l=o.z,u=e.x-a.x,d=e.y-a.y,f=e.z-a.z,p=t.x-a.x,m=t.y-a.y,h=t.z-a.z,g=n.x-a.x,_=n.y-a.y,v=n.z-a.z,y=Math.abs(s),b=Math.abs(c),x=Math.abs(l),S,C,w,T,E,D,O,k,A,ee,j,te;if(y>=b&&y>=x?(w=s,D=u,A=p,te=g,s>=0?(S=c,C=l,T=d,E=f,O=m,k=h,ee=_,j=v):(S=l,C=c,T=f,E=d,O=h,k=m,ee=v,j=_)):b>=x?(w=c,D=d,A=m,te=_,c>=0?(S=l,C=s,T=f,E=u,O=h,k=p,ee=v,j=g):(S=s,C=l,T=u,E=f,O=p,k=h,ee=g,j=v)):(w=l,D=f,A=h,te=v,l>=0?(S=s,C=c,T=u,E=d,O=p,k=m,ee=g,j=_):(S=c,C=s,T=d,E=u,O=m,k=p,ee=_,j=g)),w===0)return null;let M=S/w,ne=C/w,N=1/w,re=T-M*D,ie=E-ne*D,ae=O-M*A,oe=k-ne*A,se=ee-M*te,ce=j-ne*te,le=se*oe-ce*ae,P=re*ce-ie*se,ue=ae*ie-oe*re;if(r){if(le<0||P<0||ue<0)return null}else if((le<0||P<0||ue<0)&&(le>0||P>0||ue>0))return null;let de=le+P+ue;if(de===0)return null;let fe=N*(le*D+P*A+ue*te);return(de>0?fe<0:fe>0)?null:this.at(fe/de,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Er=class extends br{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type=`MeshBasicMaterial`,this.color=new vn(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Kt,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Dr=new It,Or=new Tr,kr=new or,Ar=new V,jr=new V,Mr=new V,Nr=new V,Pr=new V,Fr=new V,Ir=new V,Lr=new V,Rr=class extends un{constructor(e=new mr,t=new Er){super(),this.isMesh=!0,this.type=`Mesh`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,i=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(i&&o){Fr.set(0,0,0);for(let n=0,r=i.length;n<r;n++){let r=o[n],s=i[n];r!==0&&(Pr.fromBufferAttribute(s,e),a?Fr.addScaledVector(Pr,r):Fr.addScaledVector(Pr.sub(t),r))}t.add(Fr)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.material,i=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),kr.copy(n.boundingSphere),kr.applyMatrix4(i),Or.copy(e.ray).recast(e.near),kr.containsPoint(Or.origin)===!1&&(Or.intersectSphere(kr,Ar)===null||Or.origin.distanceToSquared(Ar)>(e.far-e.near)**2)||(Dr.copy(i).invert(),Or.copy(e.ray).applyMatrix4(Dr),(n.boundingBox===null||Or.intersectsBox(n.boundingBox)!==!1)&&this._computeIntersections(e,t,Or)))}_computeIntersections(e,t,n){let r,i=this.geometry,a=this.material,o=i.index,s=i.attributes.position,c=i.attributes.uv,l=i.attributes.uv1,u=i.attributes.normal,d=i.groups,f=i.drawRange;if(o!==null){if(Array.isArray(a))for(let i=0,s=d.length;i<s;i++){let s=d[i],p=a[s.materialIndex],m=Math.max(s.start,f.start),h=Math.min(o.count,Math.min(s.start+s.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=o.getX(i),d=o.getX(i+1),f=o.getX(i+2);r=Br(this,p,e,n,c,l,u,a,d,f),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=s.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),s=Math.min(o.count,f.start+f.count);for(let d=i,f=s;d<f;d+=3){let i=o.getX(d),s=o.getX(d+1),f=o.getX(d+2);r=Br(this,a,e,n,c,l,u,i,s,f),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}}else if(s!==void 0){if(Array.isArray(a))for(let i=0,o=d.length;i<o;i++){let o=d[i],p=a[o.materialIndex],m=Math.max(o.start,f.start),h=Math.min(s.count,Math.min(o.start+o.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=i,s=i+1,d=i+2;r=Br(this,p,e,n,c,l,u,a,s,d),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=o.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),o=Math.min(s.count,f.start+f.count);for(let s=i,d=o;s<d;s+=3){let i=s,o=s+1,d=s+2;r=Br(this,a,e,n,c,l,u,i,o,d),r&&(r.faceIndex=Math.floor(s/3),t.push(r))}}}}};function zr(e,t,n,r,i,a,o,s){let c;if(c=t.side===1?r.intersectTriangle(o,a,i,!0,s):r.intersectTriangle(i,a,o,t.side===0,s),c===null)return null;Lr.copy(s),Lr.applyMatrix4(e.matrixWorld);let l=n.ray.origin.distanceTo(Lr);return l<n.near||l>n.far?null:{distance:l,point:Lr.clone(),object:e}}function Br(e,t,n,r,i,a,o,s,c,l){e.getVertexPosition(s,jr),e.getVertexPosition(c,Mr),e.getVertexPosition(l,Nr);let u=zr(e,t,n,r,jr,Mr,Nr,Ir);if(u){let e=new V;Pn.getBarycoord(Ir,jr,Mr,Nr,e),i&&(u.uv=Pn.getInterpolatedAttribute(i,s,c,l,e,new ft)),a&&(u.uv1=Pn.getInterpolatedAttribute(a,s,c,l,e,new ft)),o&&(u.normal=Pn.getInterpolatedAttribute(o,s,c,l,e,new V),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));let t={a:s,b:c,c:l,normal:new V,materialIndex:0};Pn.getNormal(jr,Mr,Nr,t.normal),u.face=t,u.barycoord=e}return u}var Vr=class extends At{constructor(e=null,t=1,n=1,i,a,o,s,c,l=r,u=r,d,f){super(null,o,s,c,l,u,i,a,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Hr=new or,Ur=new ft(.5,.5),Wr=new V,Gr=class{constructor(e=new vr,t=new vr,n=new vr,r=new vr,i=new vr,a=new vr){this.planes=[e,t,n,r,i,a]}set(e,t,n,r,i,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(i),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Ke,n=!1){let r=this.planes,i=e.elements,a=i[0],o=i[1],s=i[2],c=i[3],l=i[4],u=i[5],d=i[6],f=i[7],p=i[8],m=i[9],h=i[10],g=i[11],_=i[12],v=i[13],y=i[14],b=i[15];if(r[0].setComponents(c-a,f-l,g-p,b-_).normalize(),r[1].setComponents(c+a,f+l,g+p,b+_).normalize(),r[2].setComponents(c+o,f+u,g+m,b+v).normalize(),r[3].setComponents(c-o,f-u,g-m,b-v).normalize(),n)r[4].setComponents(s,d,h,y).normalize(),r[5].setComponents(c-s,f-d,g-h,b-y).normalize();else if(r[4].setComponents(c-s,f-d,g-h,b-y).normalize(),t===2e3)r[5].setComponents(c+s,f+d,g+h,b+y).normalize();else if(t===2001)r[5].setComponents(s,d,h,y).normalize();else throw Error(`THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: `+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Hr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Hr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Hr)}intersectsSprite(e){return Hr.center.set(0,0,0),Hr.radius=.7071067811865476+Ur.distanceTo(e.center),Hr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Hr)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let e=0;e<6;e++)if(t[e].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(Wr.x=r.normal.x>0?e.max.x:e.min.x,Wr.y=r.normal.y>0?e.max.y:e.min.y,Wr.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Wr)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Kr=class extends At{constructor(e=[],t=301,n,r,i,a,o,s,c,l){super(e,t,n,r,i,a,o,s,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},qr=class extends At{constructor(e,t,n,r,i,a,o,s,c){super(e,t,n,r,i,a,o,s,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Jr=class extends At{constructor(e,t,n=m,i,a,o,s=r,c=r,l,u=T,d=1){if(u!==1026&&u!==1027)throw Error(`THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat`);super({width:e,height:t,depth:d},i,a,o,s,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Et(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Yr=class extends Jr{constructor(e,t=m,n=301,i,a,o=r,s=r,c,l=T){let u={width:e,height:e,depth:1},d=[u,u,u,u,u,u];super(e,e,t,n,i,a,o,s,c,l),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Xr=class extends At{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Zr=class e extends mr{constructor(e=1,t=1,n=1,r=1,i=1,a=1){super(),this.type=`BoxGeometry`,this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:i,depthSegments:a};let o=this;r=Math.floor(r),i=Math.floor(i),a=Math.floor(a);let s=[],c=[],l=[],u=[],d=0,f=0;p(`z`,`y`,`x`,-1,-1,n,t,e,a,i,0),p(`z`,`y`,`x`,1,-1,n,t,-e,a,i,1),p(`x`,`z`,`y`,1,1,e,n,t,r,a,2),p(`x`,`z`,`y`,1,-1,e,n,-t,r,a,3),p(`x`,`y`,`z`,1,-1,e,t,n,r,i,4),p(`x`,`y`,`z`,-1,-1,e,t,-n,r,i,5),this.setIndex(s),this.setAttribute(`position`,new nr(c,3)),this.setAttribute(`normal`,new nr(l,3)),this.setAttribute(`uv`,new nr(u,2));function p(e,t,n,r,i,a,p,m,h,g,_){let v=a/h,y=p/g,b=a/2,x=p/2,S=m/2,C=h+1,w=g+1,T=0,E=0,D=new V;for(let a=0;a<w;a++){let o=a*y-x;for(let s=0;s<C;s++)D[e]=(s*v-b)*r,D[t]=o*i,D[n]=S,c.push(D.x,D.y,D.z),D[e]=0,D[t]=0,D[n]=m>0?1:-1,l.push(D.x,D.y,D.z),u.push(s/h),u.push(1-a/g),T+=1}for(let e=0;e<g;e++)for(let t=0;t<h;t++){let n=d+t+C*e,r=d+t+C*(e+1),i=d+(t+1)+C*(e+1),a=d+(t+1)+C*e;s.push(n,r,a),s.push(r,i,a),E+=6}o.addGroup(f,E,_),f+=E,d+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},Qr=class e extends mr{constructor(e=1,t=1,n=1,r=1){super(),this.type=`PlaneGeometry`,this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let i=e/2,a=t/2,o=Math.floor(n),s=Math.floor(r),c=o+1,l=s+1,u=e/o,d=t/s,f=[],p=[],m=[],h=[];for(let e=0;e<l;e++){let t=e*d-a;for(let n=0;n<c;n++){let r=n*u-i;p.push(r,-t,0),m.push(0,0,1),h.push(n/o),h.push(1-e/s)}}for(let e=0;e<s;e++)for(let t=0;t<o;t++){let n=t+c*e,r=t+c*(e+1),i=t+1+c*(e+1),a=t+1+c*e;f.push(n,r,a),f.push(r,i,a)}this.setIndex(f),this.setAttribute(`position`,new nr(p,3)),this.setAttribute(`normal`,new nr(m,3)),this.setAttribute(`uv`,new nr(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}};function $r(e){let t={};for(let n in e){t[n]={};for(let r in e[n]){let i=e[n][r];if(ti(i))i.isRenderTargetTexture?(R(`UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().`),t[n][r]=null):t[n][r]=i.clone();else if(Array.isArray(i)){if(ti(i[0])){let e=[];for(let t=0,n=i.length;t<n;t++)e[t]=i[t].clone();t[n][r]=e}else t[n][r]=i.slice()}else t[n][r]=i}}return t}function ei(e){let t={};for(let n=0;n<e.length;n++){let r=$r(e[n]);for(let e in r)t[e]=r[e]}return t}function ti(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function ni(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function ri(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:bt.workingColorSpace}var ii={clone:$r,merge:ei},ai=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,oi=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,si=class extends br{constructor(e){super(),this.isShaderMaterial=!0,this.type=`ShaderMaterial`,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ai,this.fragmentShader=oi,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=$r(e.uniforms),this.uniformsGroups=ni(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:`t`,value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:`c`,value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:`v2`,value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:`v3`,value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:`v4`,value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:`m3`,value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:`m4`,value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let e in this.extensions)this.extensions[e]===!0&&(n[e]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case`t`:this.uniforms[n].value=t[r.value]||null;break;case`c`:this.uniforms[n].value=new vn().setHex(r.value);break;case`v2`:this.uniforms[n].value=new ft().fromArray(r.value);break;case`v3`:this.uniforms[n].value=new V().fromArray(r.value);break;case`v4`:this.uniforms[n].value=new jt().fromArray(r.value);break;case`m3`:this.uniforms[n].value=new H().fromArray(r.value);break;case`m4`:this.uniforms[n].value=new It().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let t in e.extensions)this.extensions[t]=e.extensions[t];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},ci=class extends si{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type=`RawShaderMaterial`}},li=class extends br{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type=`MeshDepthMaterial`,this.depthPacking=L,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},ui=class extends br{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type=`MeshDistanceMaterial`,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function di(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT==`number`?new t(e):Array.prototype.slice.call(e)}function fi(e){return e!==void 0&&e.inTangents!==void 0&&e.outTangents!==void 0}var pi=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r===void 0?new t.constructor(n):r,this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],i=t[n-1];validate_interval:{seek:{let a;linear_scan:{forward_scan:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<i)break forward_scan;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(i=r,r=t[++n],e<r)break seek}a=t.length;break linear_scan}if(!(e>=i)){let o=t[1];e<o&&(n=2,i=o);for(let a=n-2;;){if(i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===a)break;if(r=i,i=t[--n-1],e>=i)break seek}a=n,n=0;break linear_scan}break validate_interval}for(;n<a;){let r=n+a>>>1;e<t[r]?a=r:n=r+1}if(r=t[n],i=t[n-1],i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,i,r)}return this.interpolate_(n,i,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r;for(let e=0;e!==r;++e)t[e]=n[i+e];return t}interpolate_(){throw Error(`THREE.Interpolant: Call to abstract method.`)}intervalChanged_(){}},mi=class extends pi{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ie,endingEnd:Ie}}intervalChanged_(e,t,n){let r=this.parameterPositions,i=e-2,a=e+1,o=r[i],s=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case I:i=e,o=2*t-n;break;case Le:i=r.length-2,o=t+r[i]-r[i+1];break;default:i=e,o=n}if(s===void 0)switch(this.getSettings_().endingEnd){case I:a=e,s=2*n-t;break;case Le:a=1,s=n+r[1]-r[0];break;default:a=e-1,s=t}let c=(n-t)*.5,l=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(s-n),this._offsetPrev=i*l,this._offsetNext=a*l}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(r-t),m=p*p,h=m*p,g=-d*h+2*d*m-d*p,_=(1+d)*h+(-1.5-2*d)*m+(-.5+d)*p+1,v=(-1-f)*h+(1.5+f)*m+.5*p,y=f*h-f*m;for(let e=0;e!==o;++e)i[e]=g*a[l+e]+_*a[c+e]+v*a[s+e]+y*a[u+e];return i}},hi=class extends pi{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=(n-t)/(r-t),u=1-l;for(let e=0;e!==o;++e)i[e]=a[c+e]*u+a[s+e]*l;return i}},gi=class extends pi{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},_i=class extends pi{interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this.inTangents,u=this.outTangents;if(!l||!u){let e=(n-t)/(r-t),l=1-e;for(let t=0;t!==o;++t)i[t]=a[c+t]*l+a[s+t]*e;return i}let d=o*2,f=e-1;for(let p=0;p!==o;++p){let o=a[c+p],m=a[s+p],h=f*d+p*2,g=u[h],_=u[h+1],v=e*d+p*2,y=l[v],b=l[v+1],x=bi(n,t,g,y,r);i[p]=vi(x,o,_,b,m)}return i}};function vi(e,t,n,r,i){let a=1-e;return a*a*a*t+3*a*a*e*n+3*a*e*e*r+e*e*e*i}function yi(e,t,n,r,i){let a=1-e;return 3*a*a*(n-t)+6*a*e*(r-n)+3*e*e*(i-r)}function bi(e,t,n,r,i){let a=(e-t)/(i-t);for(let o=0;o<8;o++){let o=vi(a,t,n,r,i)-e;if(Math.abs(o)<1e-10)break;let s=yi(a,t,n,r,i);if(Math.abs(s)<1e-10)break;a=Math.max(0,Math.min(1,a-o/s))}return a}var xi=class{constructor(e,t,n,r){if(e===void 0)throw Error(`THREE.KeyframeTrack: track name is undefined`);if(t===void 0||t.length===0)throw Error(`THREE.KeyframeTrack: no keyframes in track named `+e);this.name=e,this.times=di(t,this.TimeBufferType),this.values=di(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:di(e.times,Array),values:di(e.values,Array)};let t=e.getInterpolation();t!==e.DefaultInterpolation&&(n.interpolation=t),fi(e.settings)&&(n.settings={inTangents:di(e.settings.inTangents,Array),outTangents:di(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new gi(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new hi(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new mi(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new _i(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Ne:t=this.InterpolantFactoryMethodDiscrete;break;case F:t=this.InterpolantFactoryMethodLinear;break;case Pe:t=this.InterpolantFactoryMethodSmooth;break;case Fe:t=this.InterpolantFactoryMethodBezier}if(t===void 0){let t=`unsupported interpolation for `+this.ValueTypeName+` keyframe track named `+this.name;if(this.createInterpolant===void 0){if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(t)}return R(`KeyframeTrack:`,t),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ne;case this.InterpolantFactoryMethodLinear:return F;case this.InterpolantFactoryMethodSmooth:return Pe;case this.InterpolantFactoryMethodBezier:return Fe}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e;fi(this.settings)&&(Si(this.settings.inTangents,e),Si(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,r=n.length,i=0,a=r-1;for(;i!==r&&n[i]<e;)++i;for(;a!==-1&&n[a]>t;)--a;if(++a,i!==0||a!==r){i>=a&&(a=Math.max(a,1),i=a-1);let e=this.getValueSize();this.times=n.slice(i,a),this.values=this.values.slice(i*e,a*e)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(z(`KeyframeTrack: Invalid value size in track.`,this),e=!1);let n=this.times,r=this.values,i=n.length;i===0&&(z(`KeyframeTrack: Track is empty.`,this),e=!1);let a=null;for(let t=0;t!==i;t++){let r=n[t];if(typeof r==`number`&&isNaN(r)){z(`KeyframeTrack: Time is not a valid number.`,this,t,r),e=!1;break}if(a!==null&&a>r){z(`KeyframeTrack: Out of order keys.`,this,t,r,a),e=!1;break}a=r}if(r!==void 0&&Je(r))for(let t=0,n=r.length;t!==n;++t){let n=r[t];if(isNaN(n)){z(`KeyframeTrack: Value is not a valid number.`,this,t,n),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===Pe,i=e.length-1,a=1;for(let o=1;o<i;++o){let i=!1,s=e[o];if(s!==e[o+1]&&(o!==1||s!==e[0])){if(r)i=!0;else{let e=o*n,r=e-n,a=e+n;for(let o=0;o!==n;++o){let n=t[e+o];if(n!==t[r+o]||n!==t[a+o]){i=!0;break}}}}if(i){if(o!==a){e[a]=e[o];let r=o*n,i=a*n;for(let e=0;e!==n;++e)t[i+e]=t[r+e]}++a}}if(i>0){e[a]=e[i];for(let e=i*n,r=a*n,o=0;o!==n;++o)t[r+o]=t[e+o];++a}return a===e.length?(this.times=e,this.values=t):(this.times=e.slice(0,a),this.values=t.slice(0,a*n)),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,fi(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function Si(e,t){for(let n=0,r=e.length;n!==r;n+=2)e[n]*=t}xi.prototype.ValueTypeName=``,xi.prototype.TimeBufferType=Float32Array,xi.prototype.ValueBufferType=Float32Array,xi.prototype.DefaultInterpolation=F;var Ci=class extends xi{constructor(e,t,n){super(e,t,n)}};Ci.prototype.ValueTypeName=`bool`,Ci.prototype.ValueBufferType=Array,Ci.prototype.DefaultInterpolation=Ne,Ci.prototype.InterpolantFactoryMethodLinear=void 0,Ci.prototype.InterpolantFactoryMethodSmooth=void 0;var wi=class extends xi{constructor(e,t,n,r){super(e,t,n,r)}};wi.prototype.ValueTypeName=`color`;var Ti=class extends xi{constructor(e,t,n,r){super(e,t,n,r)}};Ti.prototype.ValueTypeName=`number`;var Ei=class extends pi{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=(n-t)/(r-t),c=e*o;for(let e=c+o;c!==e;c+=4)pt.slerpFlat(i,0,a,c-o,a,c,s);return i}},Di=class extends xi{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new Ei(this.times,this.values,this.getValueSize(),e)}};Di.prototype.ValueTypeName=`quaternion`,Di.prototype.InterpolantFactoryMethodSmooth=void 0;var Oi=class extends xi{constructor(e,t,n){super(e,t,n)}};Oi.prototype.ValueTypeName=`string`,Oi.prototype.ValueBufferType=Array,Oi.prototype.DefaultInterpolation=Ne,Oi.prototype.InterpolantFactoryMethodLinear=void 0,Oi.prototype.InterpolantFactoryMethodSmooth=void 0;var ki=class extends xi{constructor(e,t,n,r){super(e,t,n,r)}};ki.prototype.ValueTypeName=`vector`;var Ai=new V,ji=new pt,Mi=new V,Ni=class extends un{constructor(){super(),this.isCamera=!0,this.type=`Camera`,this.matrixWorldInverse=new It,this.projectionMatrix=new It,this.projectionMatrixInverse=new It,this.coordinateSystem=Ke,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Ai,ji,Mi),Mi.x===1&&Mi.y===1&&Mi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ai,ji,Mi.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Ai,ji,Mi),Mi.x===1&&Mi.y===1&&Mi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ai,ji,Mi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Pi=new V,Fi=new ft,Ii=new ft,Li=class extends Ni{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type=`PerspectiveCamera`,this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=ot*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(at*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ot*2*Math.atan(Math.tan(at*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Pi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Pi.x,Pi.y).multiplyScalar(-e/Pi.z),Pi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Pi.x,Pi.y).multiplyScalar(-e/Pi.z)}getViewSize(e,t){return this.getViewBounds(e,Fi,Ii),t.subVectors(Ii,Fi)}setViewOffset(e,t,n,r,i,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(at*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,i=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let e=a.fullWidth,o=a.fullHeight;i+=a.offsetX*r/e,t-=a.offsetY*n/o,r*=a.width/e,n*=a.height/o}let o=this.filmOffset;o!==0&&(i+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Ri=class extends Ni{constructor(e=-1,t=1,n=1,r=-1,i=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type=`OrthographicCamera`,this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=i,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,i,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,i=n-e,a=n+e,o=r+t,s=r-t;if(this.view!==null&&this.view.enabled){let e=(this.right-this.left)/this.view.fullWidth/this.zoom,t=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=e*this.view.offsetX,a=i+e*this.view.width,o-=t*this.view.offsetY,s=o-t*this.view.height}this.projectionMatrix.makeOrthographic(i,a,o,s,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},zi=-90,Bi=1,Vi=class extends un{constructor(e,t,n){super(),this.type=`CubeCamera`,this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Li(zi,Bi,e,t);r.layers=this.layers,this.add(r);let i=new Li(zi,Bi,e,t);i.layers=this.layers,this.add(i);let a=new Li(zi,Bi,e,t);a.layers=this.layers,this.add(a);let o=new Li(zi,Bi,e,t);o.layers=this.layers,this.add(o);let s=new Li(zi,Bi,e,t);s.layers=this.layers,this.add(s);let c=new Li(zi,Bi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,i,a,o,s]=t;for(let e of t)this.remove(e);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),s.up.set(0,1,0),s.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),s.up.set(0,-1,0),s.lookAt(0,0,-1);else throw Error(`THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: `+e);for(let e of t)this.add(e),e.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[i,a,o,s,c,l]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let h=!1;h=e.isWebGLRenderer===!0?e.state.buffers.depth.getReversed():e.reversedDepthBuffer,e.setRenderTarget(n,0,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,i),e.setRenderTarget(n,1,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,4,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=m,e.setRenderTarget(n,5,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},Hi=class extends Li{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},Ui=`\\[\\]\\.:\\/`,Wi=RegExp(`[\\[\\]\\.:\\/]`,`g`),Gi=`[^\\[\\]\\.:\\/]`,Ki=`[^`+Ui.replace(`\\.`,``)+`]`,qi=`((?:WC+[\\/:])*)`.replace(`WC`,Gi),Ji=`(WCOD+)?`.replace(`WCOD`,Ki),Yi=`(?:\\.(WC+)(?:\\[(.+)\\])?)?`.replace(`WC`,Gi),Xi=`\\.(WC+)(?:\\[(.+)\\])?`.replace(`WC`,Gi),Zi=RegExp(`^`+qi+Ji+Yi+Xi+`$`),Qi=[`material`,`materials`,`bones`,`map`],$i=class{constructor(e,t,n){let r=n||ea.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,i=n.length;r!==i;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},ea=class e{constructor(t,n,r){this.path=n,this.parsedPath=r||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,r){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,r):new e(t,n,r)}static sanitizeNodeName(e){return e.replace(/\s/g,`_`).replace(Wi,``)}static parseTrackName(e){let t=Zi.exec(e);if(t===null)throw Error(`THREE.PropertyBinding: Cannot parse trackName: `+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(`.`);if(r!==void 0&&r!==-1){let e=n.nodeName.substring(r+1);Qi.indexOf(e)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=e)}if(n.propertyName===null||n.propertyName.length===0)throw Error(`THREE.PropertyBinding: can not parse propertyName from trackName: `+e);return n}static findNode(e,t){if(t===void 0||t===``||t===`.`||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(e){for(let r=0;r<e.length;r++){let i=e[r];if(i.name===t||i.uuid===t)return i;let a=n(i.children);if(a)return a}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let t=this.node,n=this.parsedPath,r=n.objectName,i=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){R(`PropertyBinding: No target node found for track: `+this.path+`.`);return}if(r){let e=n.objectIndex;switch(r){case`materials`:if(!t.material){z(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.materials){z(`PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.`,this);return}t=t.material.materials;break;case`bones`:if(!t.skeleton){z(`PropertyBinding: Can not bind to bones as node does not have a skeleton.`,this);return}t=t.skeleton.bones;for(let n=0;n<t.length;n++)if(t[n].name===e){e=n;break}break;case`map`:if(`map`in t){t=t.map;break}if(!t.material){z(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.map){z(`PropertyBinding: Can not bind to material.map as node.material does not have a map.`,this);return}t=t.material.map;break;default:if(t[r]===void 0){z(`PropertyBinding: Can not bind to objectName of node undefined.`,this);return}t=t[r]}if(e!==void 0){if(t[e]===void 0){z(`PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.`,this,t);return}t=t[e]}}let o=t[i];if(o===void 0){let e=n.nodeName;z(`PropertyBinding: Trying to update property for track: `+e+`.`+i+` but it wasn't found.`,t);return}let s=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?s=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(s=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(a!==void 0){if(i===`morphTargetInfluences`){if(!t.geometry){z(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.`,this);return}if(!t.geometry.morphAttributes){z(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.`,this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=a}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][s]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ea.Composite=$i,ea.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},ea.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},ea.prototype.GetterByBindingType=[ea.prototype._getValue_direct,ea.prototype._getValue_array,ea.prototype._getValue_arrayElement,ea.prototype._getValue_toArray],ea.prototype.SetterByBindingTypeAndVersioning=[[ea.prototype._setValue_direct,ea.prototype._setValue_direct_setNeedsUpdate,ea.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ea.prototype._setValue_array,ea.prototype._setValue_array_setNeedsUpdate,ea.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ea.prototype._setValue_arrayElement,ea.prototype._setValue_arrayElement_setNeedsUpdate,ea.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ea.prototype._setValue_fromArray,ea.prototype._setValue_fromArray_setNeedsUpdate,ea.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]],class e{static{e.prototype.isMatrix2=!0}constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){let i=this.elements;return i[0]=e,i[2]=t,i[1]=n,i[3]=r,this}};function ta(e,t,n,r){let i=na(r);switch(n){case S:return e*t;case D:return e*t/i.components*i.byteLength;case O:return e*t/i.components*i.byteLength;case k:return e*t*2/i.components*i.byteLength;case A:return e*t*2/i.components*i.byteLength;case C:return e*t*3/i.components*i.byteLength;case w:return e*t*4/i.components*i.byteLength;case ee:return e*t*4/i.components*i.byteLength;case j:case te:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case M:case ne:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case re:case ae:return Math.max(e,16)*Math.max(t,8)/4;case N:case ie:return Math.max(e,8)*Math.max(t,8)/2;case oe:case se:case le:case P:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case ce:case ue:case de:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case fe:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case pe:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case me:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case he:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case ge:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case _e:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case ve:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case ye:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case be:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case xe:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case Se:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case Ce:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case we:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case Te:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case Ee:case De:case Oe:return Math.ceil(e/4)*Math.ceil(t/4)*16;case ke:case Ae:return Math.ceil(e/4)*Math.ceil(t/4)*8;case je:case Me:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw Error(`Unable to determine texture byte length for ${n} format.`)}function na(e){switch(e){case l:case u:return{byteLength:1,components:1};case f:case d:case g:return{byteLength:2,components:1};case _:case v:return{byteLength:2,components:4};case m:case p:case h:return{byteLength:4,components:1};case b:case x:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`register`,{detail:{revision:`186`}})),typeof window<`u`&&(window.__THREE__?R(`WARNING: Multiple instances of Three.js being imported.`):window.__THREE__=`186`);function ra(){let e=null,t=!1,n=null,r=null;function i(t,a){r=e.requestAnimationFrame(i),n(t,a)}return{start:function(){t!==!0&&n!==null&&e!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function ia(e){let t=new WeakMap;function n(t,n){let r=t.array,i=t.usage,a=r.byteLength,o=e.createBuffer();e.bindBuffer(n,o),e.bufferData(n,r,i),t.onUploadCallback();let s;if(r instanceof Float32Array)s=e.FLOAT;else if(typeof Float16Array<`u`&&r instanceof Float16Array)s=e.HALF_FLOAT;else if(r instanceof Uint16Array)s=t.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(r instanceof Int16Array)s=e.SHORT;else if(r instanceof Uint32Array)s=e.UNSIGNED_INT;else if(r instanceof Int32Array)s=e.INT;else if(r instanceof Int8Array)s=e.BYTE;else if(r instanceof Uint8Array)s=e.UNSIGNED_BYTE;else if(r instanceof Uint8ClampedArray)s=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+r);return{buffer:o,type:s,bytesPerElement:r.BYTES_PER_ELEMENT,version:t.version,size:a}}function r(t,n,r){let i=n.array,a=n.updateRanges;if(e.bindBuffer(r,t),a.length===0)e.bufferSubData(r,0,i);else{a.sort((e,t)=>e.start-t.start);let t=0;for(let e=1;e<a.length;e++){let n=a[t],r=a[e];r.start<=n.start+n.count+1?n.count=Math.max(n.count,r.start+r.count-n.start):(++t,a[t]=r)}a.length=t+1;for(let t=0,n=a.length;t<n;t++){let n=a[t];e.bufferSubData(r,n.start*i.BYTES_PER_ELEMENT,i,n.start,n.count)}n.clearUpdateRanges()}n.onUploadCallback()}function i(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)}function a(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=t.get(n);r&&(e.deleteBuffer(r.buffer),t.delete(n))}function o(e,i){if(e.isInterleavedBufferAttribute&&(e=e.data),e.isGLBufferAttribute){let n=t.get(e);(!n||n.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}let a=t.get(e);if(a===void 0)t.set(e,n(e,i));else if(a.version<e.version){if(a.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);r(a.buffer,e,i),a.version=e.version}}return{get:i,remove:a,update:o}}var U={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
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
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
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
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
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
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
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
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
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
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
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
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
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
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,common:`#define PI 3.141592653589793
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
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
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
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
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
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:`gl_FragColor = linearToOutputTexel( gl_FragColor );`,colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
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
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
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
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
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
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
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
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
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
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
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
#endif
#include <lightprobes_pars_fragment>`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,lights_physical_pars_fragment:`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
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
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
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
		return 0.5 / max( gv + gl, EPSILON );
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
	vec3 f0 = material.specularColorBlended;
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
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
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
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
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lightprobes_pars_fragment:`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
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
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
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
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#ifdef DOUBLE_SIDED
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
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
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
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
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
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
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
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
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
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
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
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
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
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
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
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
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
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
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
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
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
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
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
}`,depth_frag:`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distance_vert:`#define DISTANCE
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
}`,distance_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
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
}`,linedashed_frag:`uniform vec3 diffuse;
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
}`,meshbasic_vert:`#include <common>
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
}`,meshbasic_frag:`uniform vec3 diffuse;
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
}`,meshlambert_vert:`#define LAMBERT
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
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,meshmatcap_vert:`#define MATCAP
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
}`,meshmatcap_frag:`#define MATCAP
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
}`,meshnormal_vert:`#define NORMAL
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
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
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
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
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
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,meshphysical_vert:`#define STANDARD
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
}`,meshphysical_frag:`#define STANDARD
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
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,meshtoon_vert:`#define TOON
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
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,points_vert:`uniform float size;
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
}`,points_frag:`uniform vec3 diffuse;
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
}`,shadow_vert:`#include <common>
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
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <premultiplied_alpha_fragment>
}`,sprite_vert:`uniform float rotation;
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
}`,sprite_frag:`uniform vec3 diffuse;
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
}`},W={common:{diffuse:{value:new vn(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new H},alphaMap:{value:null},alphaMapTransform:{value:new H},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new H}},envmap:{envMap:{value:null},envMapRotation:{value:new H},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new H}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new H}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new H},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new H},normalScale:{value:new ft(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new H},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new H}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new H}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new H}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new vn(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new V},probesMax:{value:new V},probesResolution:{value:new V}},points:{diffuse:{value:new vn(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new H},alphaTest:{value:0},uvTransform:{value:new H}},sprite:{diffuse:{value:new vn(16777215)},opacity:{value:1},center:{value:new ft(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new H},alphaMap:{value:null},alphaMapTransform:{value:new H},alphaTest:{value:0}}},aa={basic:{uniforms:ei([W.common,W.specularmap,W.envmap,W.aomap,W.lightmap,W.fog]),vertexShader:U.meshbasic_vert,fragmentShader:U.meshbasic_frag},lambert:{uniforms:ei([W.common,W.specularmap,W.envmap,W.aomap,W.lightmap,W.emissivemap,W.bumpmap,W.normalmap,W.displacementmap,W.fog,W.lights,{emissive:{value:new vn(0)},envMapIntensity:{value:1}}]),vertexShader:U.meshlambert_vert,fragmentShader:U.meshlambert_frag},phong:{uniforms:ei([W.common,W.specularmap,W.envmap,W.aomap,W.lightmap,W.emissivemap,W.bumpmap,W.normalmap,W.displacementmap,W.fog,W.lights,{emissive:{value:new vn(0)},specular:{value:new vn(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:U.meshphong_vert,fragmentShader:U.meshphong_frag},standard:{uniforms:ei([W.common,W.envmap,W.aomap,W.lightmap,W.emissivemap,W.bumpmap,W.normalmap,W.displacementmap,W.roughnessmap,W.metalnessmap,W.fog,W.lights,{emissive:{value:new vn(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:U.meshphysical_vert,fragmentShader:U.meshphysical_frag},toon:{uniforms:ei([W.common,W.aomap,W.lightmap,W.emissivemap,W.bumpmap,W.normalmap,W.displacementmap,W.gradientmap,W.fog,W.lights,{emissive:{value:new vn(0)}}]),vertexShader:U.meshtoon_vert,fragmentShader:U.meshtoon_frag},matcap:{uniforms:ei([W.common,W.bumpmap,W.normalmap,W.displacementmap,W.fog,{matcap:{value:null}}]),vertexShader:U.meshmatcap_vert,fragmentShader:U.meshmatcap_frag},points:{uniforms:ei([W.points,W.fog]),vertexShader:U.points_vert,fragmentShader:U.points_frag},dashed:{uniforms:ei([W.common,W.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:U.linedashed_vert,fragmentShader:U.linedashed_frag},depth:{uniforms:ei([W.common,W.displacementmap]),vertexShader:U.depth_vert,fragmentShader:U.depth_frag},normal:{uniforms:ei([W.common,W.bumpmap,W.normalmap,W.displacementmap,{opacity:{value:1}}]),vertexShader:U.meshnormal_vert,fragmentShader:U.meshnormal_frag},sprite:{uniforms:ei([W.sprite,W.fog]),vertexShader:U.sprite_vert,fragmentShader:U.sprite_frag},background:{uniforms:{uvTransform:{value:new H},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:U.background_vert,fragmentShader:U.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new H}},vertexShader:U.backgroundCube_vert,fragmentShader:U.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:U.cube_vert,fragmentShader:U.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:U.equirect_vert,fragmentShader:U.equirect_frag},distance:{uniforms:ei([W.common,W.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:U.distance_vert,fragmentShader:U.distance_frag},shadow:{uniforms:ei([W.lights,W.fog,{color:{value:new vn(0)},opacity:{value:1}}]),vertexShader:U.shadow_vert,fragmentShader:U.shadow_frag}};aa.physical={uniforms:ei([aa.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new H},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new H},clearcoatNormalScale:{value:new ft(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new H},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new H},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new H},sheen:{value:0},sheenColor:{value:new vn(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new H},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new H},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new H},transmissionSamplerSize:{value:new ft},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new H},attenuationDistance:{value:0},attenuationColor:{value:new vn(0)},specularColor:{value:new vn(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new H},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new H},anisotropyVector:{value:new ft},anisotropyMap:{value:null},anisotropyMapTransform:{value:new H}}]),vertexShader:U.meshphysical_vert,fragmentShader:U.meshphysical_frag};var oa={r:0,b:0,g:0},sa=new It,ca=new H;ca.set(-1,0,0,0,1,0,0,0,1);function la(e,t,n,r,i,a){let o=new vn(0),s=i===!0?0:1,c,l,u=null,d=0,f=null;function p(e){let n=e.isScene===!0?e.background:null;if(n&&n.isTexture){let r=e.backgroundBlurriness>0;n=t.get(n,r)}return n}function m(t){let r=!1,i=p(t);i===null?g(o,s):i&&i.isColor&&(g(i,1),r=!0);let c=e.xr.getEnvironmentBlendMode();c===`additive`?n.buffers.color.setClear(0,0,0,1,a):c===`alpha-blend`&&n.buffers.color.setClear(0,0,0,0,a),(e.autoClear||r)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function h(t,n){let i=p(n);i&&(i.isCubeTexture||i.mapping===306)?(l===void 0&&(l=new Rr(new Zr(1,1,1),new si({name:`BackgroundCubeMaterial`,uniforms:$r(aa.backgroundCube.uniforms),vertexShader:aa.backgroundCube.vertexShader,fragmentShader:aa.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute(`normal`),l.geometry.deleteAttribute(`uv`),l.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(l)),l.material.uniforms.envMap.value=i,l.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(sa.makeRotationFromEuler(n.backgroundRotation)).transpose(),i.isCubeTexture&&i.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(ca),l.material.toneMapped=bt.getTransfer(i.colorSpace)!==Ve,(u!==i||d!==i.version||f!==e.toneMapping)&&(l.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),l.layers.enableAll(),t.unshift(l,l.geometry,l.material,0,0,null)):i&&i.isTexture&&(c===void 0&&(c=new Rr(new Qr(2,2),new si({name:`BackgroundMaterial`,uniforms:$r(aa.background.uniforms),vertexShader:aa.background.vertexShader,fragmentShader:aa.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute(`normal`),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=i,c.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,c.material.toneMapped=bt.getTransfer(i.colorSpace)!==Ve,i.matrixAutoUpdate===!0&&i.updateMatrix(),c.material.uniforms.uvTransform.value.copy(i.matrix),(u!==i||d!==i.version||f!==e.toneMapping)&&(c.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),c.layers.enableAll(),t.unshift(c,c.geometry,c.material,0,0,null))}function g(t,r){t.getRGB(oa,ri(e)),n.buffers.color.setClear(oa.r,oa.g,oa.b,r,a)}function _(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(e,t=1){o.set(e),s=t,g(o,s)},getClearAlpha:function(){return s},setClearAlpha:function(e){s=e,g(o,s)},render:m,addToRenderList:h,dispose:_}}function ua(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},i=f(null),a=i,o=!1;function s(n,r,i,s,c){let u=!1,f=d(n,s,i,r);a!==f&&(a=f,l(a.object)),u=p(n,s,i,c),u&&m(n,s,i,c),c!==null&&t.update(c,e.ELEMENT_ARRAY_BUFFER),(u||o)&&(o=!1,b(n,r,i,s),c!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(c).buffer))}function c(){return e.createVertexArray()}function l(t){return e.bindVertexArray(t)}function u(t){return e.deleteVertexArray(t)}function d(e,t,n,i){let a=i.wireframe===!0,o=r[t.id];o===void 0&&(o={},r[t.id]=o);let s=e.isInstancedMesh===!0?e.id:0,l=o[s];l===void 0&&(l={},o[s]=l);let u=l[n.id];u===void 0&&(u={},l[n.id]=u);let d=u[a];return d===void 0&&(d=f(c()),u[a]=d),d}function f(e){let t=[],r=[],i=[];for(let e=0;e<n;e++)t[e]=0,r[e]=0,i[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:r,attributeDivisors:i,object:e,attributes:{},index:null}}function p(e,t,n,r){let i=a.attributes,o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=i[t],r=o[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;s++}return a.attributesNum!==s||a.index!==r}function m(e,t,n,r){let i={},o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=o[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,s++}a.attributes=i,a.attributesNum=s,a.index=r}function h(){let e=a.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function g(e){_(e,0)}function _(t,n){let r=a.newAttributes,i=a.enabledAttributes,o=a.attributeDivisors;r[t]=1,i[t]===0&&(e.enableVertexAttribArray(t),i[t]=1),o[t]!==n&&(e.vertexAttribDivisor(t,n),o[t]=n)}function v(){let t=a.newAttributes,n=a.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function y(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function b(n,r,i,a){h();let o=a.attributes,s=i.getAttributes(),c=r.defaultAttributeValues;for(let r in s){let i=s[r];if(i.location>=0){let s=o[r];if(s===void 0&&(r===`instanceMatrix`&&n.instanceMatrix&&(s=n.instanceMatrix),r===`instanceColor`&&n.instanceColor&&(s=n.instanceColor)),s!==void 0){let r=s.normalized,o=s.itemSize,c=t.get(s);if(c===void 0)continue;let l=c.buffer,u=c.type,d=c.bytesPerElement,f=u===e.INT||u===e.UNSIGNED_INT||s.gpuType===1013;if(s.isInterleavedBufferAttribute){let t=s.data,c=t.stride,p=s.offset;if(t.isInstancedInterleavedBuffer){for(let e=0;e<i.locationSize;e++)_(i.location+e,t.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,c*d,(p+o/i.locationSize*e)*d,f)}else{if(s.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,s.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=s.meshPerAttribute*s.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,o*d,o/i.locationSize*e*d,f)}}else if(c!==void 0){let t=c[r];if(t!==void 0)switch(t.length){case 2:e.vertexAttrib2fv(i.location,t);break;case 3:e.vertexAttrib3fv(i.location,t);break;case 4:e.vertexAttrib4fv(i.location,t);break;default:e.vertexAttrib1fv(i.location,t)}}}}v()}function x(){T();for(let e in r){let t=r[e];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e]}}function S(e){if(r[e.id]===void 0)return;let t=r[e.id];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e.id]}function C(e){for(let t in r){let n=r[t];for(let t in n){let r=n[t];if(r[e.id]===void 0)continue;let i=r[e.id];for(let e in i)u(i[e].object),delete i[e];delete r[e.id]}}}function w(e){for(let t in r){let n=r[t],i=e.isInstancedMesh===!0?e.id:0,a=n[i];if(a!==void 0){for(let e in a){let t=a[e];for(let e in t)u(t[e].object),delete t[e];delete a[e]}delete n[i],Object.keys(n).length===0&&delete r[t]}}}function T(){E(),o=!0,a!==i&&(a=i,l(a.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:T,resetDefaultState:E,dispose:x,releaseStatesOfGeometry:S,releaseStatesOfObject:w,releaseStatesOfProgram:C,initAttributes:h,enableAttribute:g,disableUnusedAttributes:v}}function da(e,t,n){let r;function i(e){r=e}function a(t,i){e.drawArrays(r,t,i),n.update(i,r,1)}function o(t,i,a){a!==0&&(e.drawArraysInstanced(r,t,i,a),n.update(i,r,a))}function s(e,i,a){if(a===0)return;t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r,e,0,i,0,a);let o=0;for(let e=0;e<a;e++)o+=i[e];n.update(o,r,1)}this.setMode=i,this.render=a,this.renderInstances=o,this.renderMultiDraw=s}function fa(e,t,n,r){let i;function a(){if(i!==void 0)return i;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);i=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(t){return t===1023||r.convert(t)===e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT)}function s(n){let i=n===1016&&(t.has(`EXT_color_buffer_half_float`)||t.has(`EXT_color_buffer_float`));return!(n!==1009&&n!==1015&&!i&&r.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function c(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let l=n.precision===void 0?`highp`:n.precision,u=c(l);u!==l&&(R(`WebGLRenderer:`,l,`not supported, using`,u,`instead.`),l=u);let d=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&t.has(`EXT_clip_control`);n.reversedDepthBuffer===!0&&f===!1&&R(`WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.`);let p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),_=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),b=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),x=e.getParameter(e.MAX_SAMPLES),S=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:s,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:m,maxTextureSize:h,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:b,maxSamples:x,samples:S}}function pa(e){let t=this,n=null,r=0,i=!1,a=!1,o=new vr,s=new H,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=u(e,t,0)},this.setState=function(t,o,s){let d=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||d===null||d.length===0||a&&!p)a?u(null):l();else{let e=a?0:r,t=e*4,i=m.clippingState||null;c.value=i,i=u(d,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,i!==!0||l===null){let t=r+a*4,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}var ma=4,ha=6,ga=20,_a=256,va=new Ri,ya=new vn,ba=null,xa=0,Sa=0,Ca=!1,wa=new V,Ta=new V,Ea=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,i={}){let{size:a=256,position:o=wa}=i;ba=this._renderer.getRenderTarget(),xa=this._renderer.getActiveCubeFace(),Sa=this._renderer.getActiveMipmapLevel(),Ca=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s,o),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Na(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ma(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=2**this._lodMax}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(ba,xa,Sa),this._renderer.xr.enabled=Ca,e.scissorTest=!1,ka(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ba=this._renderer.getRenderTarget(),xa=this._renderer.getActiveCubeFace(),Sa=this._renderer.getActiveMipmapLevel(),Ca=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:o,minFilter:o,generateMipmaps:!1,type:g,format:w,colorSpace:ze,depthBuffer:!1},r=Oa(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Oa(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Da(r)),this._blurMaterial=ja(r,e,t),this._ggxMaterial=Aa(r,e,t)}return r}_compileMaterial(e){let t=new Rr(new mr,e);this._renderer.compile(t,va)}_sceneToCubeUV(e,t,n,r,i){let a=new Li(90,1,t,n),o=[1,-1,1,1,1,1],s=[1,1,1,-1,-1,-1],c=this._renderer,l=c.autoClear,u=c.toneMapping;c.getClearColor(ya),c.toneMapping=0,c.autoClear=!1,c.state.buffers.depth.getReversed()&&(c.setRenderTarget(r),c.clearDepth(),c.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Rr(new Zr,new Er({name:`PMREM.Background`,side:1,depthWrite:!1,depthTest:!1})));let d=this._backgroundBox,f=d.material,p=!1,m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,p=!0):(f.color.copy(ya),p=!0);for(let t=0;t<6;t++){let n=t%3;n===0?(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x+s[t],i.y,i.z)):n===1?(a.up.set(0,0,o[t]),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y+s[t],i.z)):(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y,i.z+s[t]));let l=this._cubeSize;ka(r,n*l,t>2?l:0,l,l),c.setRenderTarget(r),p&&c.render(d,a),c.render(e,a)}c.toneMapping=u,c.autoClear=l,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===301||e.mapping===302;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Na()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ma());let i=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=i;let o=i.uniforms;o.envMap.value=e;let s=this._cubeSize;ka(t,0,0,3*s,2*s),n.setRenderTarget(t),n.render(a,va)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let t=1;t<r;t++)this._applyGGXFilter(e,t-1,t);t.autoClear=n}_applyGGXFilter(e,t,n){let r=this._renderer,i=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let s=a.uniforms,c=n/(this._lodMeshes.length-1),l=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-l*l)*(c*1.25),{_lodMax:d}=this,f=this._sizeLods[n],p=3*f*(n>d-ma?n-d+ma:0),m=4*(this._cubeSize-f);s.envMap.value=e.texture,s.roughness.value=u,s.mipInt.value=d-t,ka(i,p,m,3*f,2*f),r.setRenderTarget(i),r.render(o,va),s.envMap.value=i.texture,s.roughness.value=0,s.mipInt.value=d-n,ka(e,p,m,3*f,2*f),r.setRenderTarget(e),r.render(o,va)}_blur(e,t,n,r){let i=this._pingPongRenderTarget,a=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,i,t,n,a),this._blurPass(i,e,n,n,a)}_blurPass(e,t,n,r,i){let a=this._renderer,o=this._blurMaterial,s=this._lodMeshes[r];s.material=o;let c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=i,c.mipInt.value=this._lodMax-n;let l=this._sizeLods[r];ka(t,3*l*(r>this._lodMax-ma?r-this._lodMax+ma:0),4*(this._cubeSize-l),3*l,2*l),a.setRenderTarget(t),a.render(s,va)}};function Da(e){let t=[],n=[],r=e,i=e-ma+1+ha;for(let e=0;e<i;e++){let e=2**r;t.push(e);let i=1/(e-2),a=-i,o=1+i,s=[a,a,o,a,o,o,a,a,o,o,a,o],c=new Float32Array(108),l=new Float32Array(108);for(let e=0;e<6;e++){let t=e%3*2/3-1,n=e>2?0:-1,r=[t,n,0,t+2/3,n,0,t+2/3,n+1,0,t,n,0,t+2/3,n+1,0,t,n+1,0];c.set(r,18*e);for(let t=0;t<6;t++){let n=s[t*2]*2-1,r=s[t*2+1]*2-1;e===0?Ta.set(1,r,n):e===1?Ta.set(-n,1,-r):e===2?Ta.set(-n,r,1):e===3?Ta.set(-1,r,-n):e===4?Ta.set(-n,-1,r):Ta.set(n,r,-1),Ta.toArray(l,(e*6+t)*3)}}let u=new mr;u.setAttribute(`position`,new $n(c,3)),u.setAttribute(`outputDirection`,new $n(l,3)),n.push(new Rr(u,null)),r>ma&&r--}return{lodMeshes:n,sizeLods:t}}function Oa(e,t,n){let r=new Nt(e,t,n);return r.texture.mapping=306,r.texture.name=`PMREM.cubeUv`,r.scissorTest=!0,r}function ka(e,t,n,r,i){e.viewport.set(t,n,r,i),e.scissor.set(t,n,r,i)}function Aa(e,t,n){return new si({name:`PMREMGGXConvolution`,defines:{GGX_SAMPLES:_a,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Pa(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function ja(e,t,n){return new si({name:`SphericalGaussianBlur`,defines:{SAMPLES:ga,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Pa(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Ma(){return new si({name:`EquirectangularToCubeUV`,uniforms:{envMap:{value:null}},vertexShader:Pa(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function Na(){return new si({name:`CubemapToCubeUV`,uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Pa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Pa(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Fa=class extends Nt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Kr(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Zr(5,5,5),i=new si({name:`CubemapFromEquirect`,uniforms:$r(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;let a=new Rr(r,i),s=t.minFilter;return t.minFilter===1008&&(t.minFilter=o),new Vi(1,10,this).update(e,a),t.minFilter=s,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}};function Ia(e){let t=new WeakMap,n=new WeakMap,r=null;function i(e,t=!1){return e==null?null:t?o(e):a(e)}function a(n){if(n&&n.isTexture){let r=n.mapping;if(r===303||r===304){if(t.has(n)){let e=t.get(n).texture;return s(e,n.mapping)}{let r=n.image;if(r&&r.height>0){let i=new Fa(r.height);return i.fromEquirectangularTexture(e,n),t.set(n,i),n.addEventListener(`dispose`,l),s(i.texture,n.mapping)}return null}}}return n}function o(t){if(t&&t.isTexture){let i=t.mapping,a=i===303||i===304,o=i===301||i===302;if(a||o){let i=n.get(t),s=i===void 0?0:i.texture.pmremVersion;if(t.isRenderTargetTexture&&t.pmremVersion!==s)return r===null&&(r=new Ea(e)),i=a?r.fromEquirectangular(t,i):r.fromCubemap(t,i),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),i.texture;if(i!==void 0)return i.texture;{let s=t.image;return a&&s&&s.height>0||o&&s&&c(s)?(r===null&&(r=new Ea(e)),i=a?r.fromEquirectangular(t):r.fromCubemap(t),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),t.addEventListener(`dispose`,u),i.texture):null}}}return t}function s(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function c(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function l(e){let n=e.target;n.removeEventListener(`dispose`,l);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function u(e){let t=e.target;t.removeEventListener(`dispose`,u);let r=n.get(t);r!==void 0&&(n.delete(t),r.dispose())}function d(){t=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:i,dispose:d}}function La(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r=e.getExtension(n);return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(){n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`),n(`WEBGL_render_shared_exponent`)},get:function(e){let t=n(e);return t===null&&et(`WebGLRenderer: `+e+` extension not supported.`),t}}}function Ra(e,t,n,r){let i={},a=new WeakMap;function o(e){let s=e.target;s.index!==null&&t.remove(s.index);for(let e in s.attributes)t.remove(s.attributes[e]);s.removeEventListener(`dispose`,o),delete i[s.id];let c=a.get(s);c&&(t.remove(c),a.delete(s)),r.releaseStatesOfGeometry(s),s.isInstancedBufferGeometry===!0&&delete s._maxInstanceCount,n.memory.geometries--}function s(e,t){return i[t.id]===!0||(t.addEventListener(`dispose`,o),i[t.id]=!0,n.memory.geometries++),t}function c(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER)}function l(e){let n=[],r=e.index,i=e.attributes.position,o=0;if(i===void 0)return;if(r!==null){let e=r.array;o=r.version;for(let t=0,r=e.length;t<r;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];n.push(r,i,i,a,a,r)}}else{let e=i.array;o=i.version;for(let t=0,r=e.length/3-1;t<r;t+=3){let e=t+0,r=t+1,i=t+2;n.push(e,r,r,i,i,e)}}let s=new(i.count>=65535?tr:er)(n,1);s.version=o;let c=a.get(e);c&&t.remove(c),a.set(e,s)}function u(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&l(e)}else l(e);return a.get(e)}return{get:s,update:c,getWireframeAttribute:u}}function za(e,t,n){let r;function i(e){r=e}let a,o;function s(e){a=e.type,o=e.bytesPerElement}function c(t,i){e.drawElements(r,i,a,t*o),n.update(i,r,1)}function l(t,i,s){s!==0&&(e.drawElementsInstanced(r,i,a,t*o,s),n.update(i,r,s))}function u(e,i,o){if(o===0)return;t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r,i,0,a,e,0,o);let s=0;for(let e=0;e<o;e++)s+=i[e];n.update(s,r,1)}this.setMode=i,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function Ba(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:z(`WebGLInfo: Unknown draw mode:`,r)}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function Va(e,t,n){let r=new WeakMap,i=new jt;function a(a,o,s){let c=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=l===void 0?0:l.length,d=r.get(o);if(d===void 0||d.count!==u){d!==void 0&&d.texture.dispose();let e=o.morphAttributes.position!==void 0,n=o.morphAttributes.normal!==void 0,a=o.morphAttributes.color!==void 0,s=o.morphAttributes.position||[],c=o.morphAttributes.normal||[],l=o.morphAttributes.color||[],f=0;e===!0&&(f=1),n===!0&&(f=2),a===!0&&(f=3);let p=o.attributes.position.count*f,m=1;p>t.maxTextureSize&&(m=Math.ceil(p/t.maxTextureSize),p=t.maxTextureSize);let g=new Float32Array(p*m*4*u),_=new Pt(g,p,m,u);_.type=h,_.needsUpdate=!0;let v=f*4;for(let t=0;t<u;t++){let r=s[t],o=c[t],u=l[t],d=p*m*4*t;for(let t=0;t<r.count;t++){let s=t*v;e===!0&&(i.fromBufferAttribute(r,t),g[d+s+0]=i.x,g[d+s+1]=i.y,g[d+s+2]=i.z,g[d+s+3]=0),n===!0&&(i.fromBufferAttribute(o,t),g[d+s+4]=i.x,g[d+s+5]=i.y,g[d+s+6]=i.z,g[d+s+7]=0),a===!0&&(i.fromBufferAttribute(u,t),g[d+s+8]=i.x,g[d+s+9]=i.y,g[d+s+10]=i.z,g[d+s+11]=u.itemSize===4?i.w:1)}}d={count:u,texture:_,size:new ft(p,m)},r.set(o,d);function y(){_.dispose(),r.delete(o),o.removeEventListener(`dispose`,y)}o.addEventListener(`dispose`,y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)s.getUniforms().setValue(e,`morphTexture`,a.morphTexture,n);else{let t=0;for(let e=0;e<c.length;e++)t+=c[e];let n=o.morphTargetsRelative?1:1-t;s.getUniforms().setValue(e,`morphTargetBaseInfluence`,n),s.getUniforms().setValue(e,`morphTargetInfluences`,c)}s.getUniforms().setValue(e,`morphTargetsTexture`,d.texture,n),s.getUniforms().setValue(e,`morphTargetsTextureSize`,d.size)}return{update:a}}function Ha(e,t,n,r,i){let a=new WeakMap;function o(r){let o=i.render.frame,s=r.geometry,l=t.get(r,s);if(a.get(l)!==o&&(t.update(l),a.set(l,o)),r.isInstancedMesh&&(r.hasEventListener(`dispose`,c)===!1&&r.addEventListener(`dispose`,c),a.get(r)!==o&&(n.update(r.instanceMatrix,e.ARRAY_BUFFER),r.instanceColor!==null&&n.update(r.instanceColor,e.ARRAY_BUFFER),a.set(r,o))),r.isSkinnedMesh){let e=r.skeleton;a.get(e)!==o&&(e.update(),a.set(e,o))}return l}function s(){a=new WeakMap}function c(e){let t=e.target;t.removeEventListener(`dispose`,c),r.releaseStatesOfObject(t),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:o,dispose:s}}var Ua={1:`LINEAR_TONE_MAPPING`,2:`REINHARD_TONE_MAPPING`,3:`CINEON_TONE_MAPPING`,4:`ACES_FILMIC_TONE_MAPPING`,6:`AGX_TONE_MAPPING`,7:`NEUTRAL_TONE_MAPPING`,5:`CUSTOM_TONE_MAPPING`};function Wa(e,t,n,r,i,a){let o=new Nt(t,n,{type:e,depthBuffer:i,stencilBuffer:a,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),s=null,c=null,l=new mr;l.setAttribute(`position`,new nr([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute(`uv`,new nr([0,2,0,0,2,0],2));let u=new ci({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new Rr(l,u),f=new Ri(-1,1,1,-1,0,1),p=null,m=null,h=!1,_,v=null,y=[],b=!1;this.setSize=function(e,t){o.setSize(e,t),s!==null&&s.setSize(e,t),c!==null&&c.setSize(e,t);for(let n=0;n<y.length;n++){let r=y[n];r.setSize&&r.setSize(e,t)}},this.setEffects=function(e){y=e,b=y.length>0&&y[0].isRenderPass===!0;let t=o.width,n=o.height;y.length>0&&s===null&&(s=new Nt(t,n,{type:g,depthBuffer:!1,stencilBuffer:!1}),c=new Nt(t,n,{type:g,depthBuffer:!1,stencilBuffer:!1}));for(let e=0;e<y.length;e++){let r=y[e];r.setSize&&r.setSize(t,n)}},this.begin=function(e,t){if(h||e.toneMapping===0&&y.length===0)return!1;if(v=t,t!==null){let e=t.width,n=t.height;(o.width!==e||o.height!==n)&&this.setSize(e,n)}return b===!1&&e.setRenderTarget(o),_=e.toneMapping,e.toneMapping=0,!0},this.hasRenderPass=function(){return b},this.end=function(e,t){e.toneMapping=_,h=!0;let n=o,r=s;for(let i=0;i<y.length;i++){let a=y[i];a.enabled!==!1&&(a.render(e,r,n,t),a.needsSwap!==!1&&(n=r,r=r===s?c:s))}if(p!==e.outputColorSpace||m!==e.toneMapping){p=e.outputColorSpace,m=e.toneMapping,u.defines={},bt.getTransfer(p)===`srgb`&&(u.defines.SRGB_TRANSFER=``);let t=Ua[m];t&&(u.defines[t]=``),u.needsUpdate=!0}u.uniforms.tDiffuse.value=n.texture,e.setRenderTarget(v),e.render(d,f),v=null,h=!1},this.isCompositing=function(){return h},this.dispose=function(){o.dispose(),s!==null&&s.dispose(),c!==null&&c.dispose(),l.dispose(),u.dispose()}}var Ga=new At,Ka=new Jr(1,1),qa=new Pt,Ja=new Ft,Ya=new Kr,Xa=[],Za=[],Qa=new Float32Array(16),$a=new Float32Array(9),eo=new Float32Array(4);function to(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=Xa[i];if(a===void 0&&(a=new Float32Array(i),Xa[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function no(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function ro(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function io(e,t){let n=Za[t];n===void 0&&(n=new Int32Array(t),Za[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function ao(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function oo(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(no(n,t))return;e.uniform2fv(this.addr,t),ro(n,t)}}function so(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(no(n,t))return;e.uniform3fv(this.addr,t),ro(n,t)}}function co(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(no(n,t))return;e.uniform4fv(this.addr,t),ro(n,t)}}function lo(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(no(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),ro(n,t)}else{if(no(n,r))return;eo.set(r),e.uniformMatrix2fv(this.addr,!1,eo),ro(n,r)}}function uo(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(no(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),ro(n,t)}else{if(no(n,r))return;$a.set(r),e.uniformMatrix3fv(this.addr,!1,$a),ro(n,r)}}function fo(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(no(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),ro(n,t)}else{if(no(n,r))return;Qa.set(r),e.uniformMatrix4fv(this.addr,!1,Qa),ro(n,r)}}function po(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function mo(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(no(n,t))return;e.uniform2iv(this.addr,t),ro(n,t)}}function ho(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(no(n,t))return;e.uniform3iv(this.addr,t),ro(n,t)}}function go(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(no(n,t))return;e.uniform4iv(this.addr,t),ro(n,t)}}function _o(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function vo(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(no(n,t))return;e.uniform2uiv(this.addr,t),ro(n,t)}}function yo(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(no(n,t))return;e.uniform3uiv(this.addr,t),ro(n,t)}}function bo(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(no(n,t))return;e.uniform4uiv(this.addr,t),ro(n,t)}}function xo(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;this.type===e.SAMPLER_2D_SHADOW?(Ka.compareFunction=n.isReversedDepthBuffer()?518:515,a=Ka):a=Ga,n.setTexture2D(t||a,i)}function So(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||Ja,i)}function Co(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTextureCube(t||Ya,i)}function wo(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||qa,i)}function To(e){switch(e){case 5126:return ao;case 35664:return oo;case 35665:return so;case 35666:return co;case 35674:return lo;case 35675:return uo;case 35676:return fo;case 5124:case 35670:return po;case 35667:case 35671:return mo;case 35668:case 35672:return ho;case 35669:case 35673:return go;case 5125:return _o;case 36294:return vo;case 36295:return yo;case 36296:return bo;case 35678:case 36198:case 36298:case 36306:case 35682:return xo;case 35679:case 36299:case 36307:return So;case 35680:case 36300:case 36308:case 36293:return Co;case 36289:case 36303:case 36311:case 36292:return wo}}function Eo(e,t){e.uniform1fv(this.addr,t)}function Do(e,t){let n=to(t,this.size,2);e.uniform2fv(this.addr,n)}function Oo(e,t){let n=to(t,this.size,3);e.uniform3fv(this.addr,n)}function ko(e,t){let n=to(t,this.size,4);e.uniform4fv(this.addr,n)}function Ao(e,t){let n=to(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function jo(e,t){let n=to(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function Mo(e,t){let n=to(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function No(e,t){e.uniform1iv(this.addr,t)}function Po(e,t){e.uniform2iv(this.addr,t)}function Fo(e,t){e.uniform3iv(this.addr,t)}function Io(e,t){e.uniform4iv(this.addr,t)}function Lo(e,t){e.uniform1uiv(this.addr,t)}function Ro(e,t){e.uniform2uiv(this.addr,t)}function zo(e,t){e.uniform3uiv(this.addr,t)}function Bo(e,t){e.uniform4uiv(this.addr,t)}function Vo(e,t,n){let r=this.cache,i=t.length,a=io(n,i);no(r,a)||(e.uniform1iv(this.addr,a),ro(r,a));let o;o=this.type===e.SAMPLER_2D_SHADOW?Ka:Ga;for(let e=0;e!==i;++e)n.setTexture2D(t[e]||o,a[e])}function Ho(e,t,n){let r=this.cache,i=t.length,a=io(n,i);no(r,a)||(e.uniform1iv(this.addr,a),ro(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||Ja,a[e])}function Uo(e,t,n){let r=this.cache,i=t.length,a=io(n,i);no(r,a)||(e.uniform1iv(this.addr,a),ro(r,a));for(let e=0;e!==i;++e)n.setTextureCube(t[e]||Ya,a[e])}function Wo(e,t,n){let r=this.cache,i=t.length,a=io(n,i);no(r,a)||(e.uniform1iv(this.addr,a),ro(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||qa,a[e])}function Go(e){switch(e){case 5126:return Eo;case 35664:return Do;case 35665:return Oo;case 35666:return ko;case 35674:return Ao;case 35675:return jo;case 35676:return Mo;case 5124:case 35670:return No;case 35667:case 35671:return Po;case 35668:case 35672:return Fo;case 35669:case 35673:return Io;case 5125:return Lo;case 36294:return Ro;case 36295:return zo;case 36296:return Bo;case 35678:case 36198:case 36298:case 36306:case 35682:return Vo;case 35679:case 36299:case 36307:return Ho;case 35680:case 36300:case 36308:case 36293:return Uo;case 36289:case 36303:case 36311:case 36292:return Wo}}var Ko=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=To(t.type)}},qo=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Go(t.type)}},Jo=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},Yo=/(\w+)(\])?(\[|\.)?/g;function Xo(e,t){e.seq.push(t),e.map[t.id]=t}function Zo(e,t,n){let r=e.name,i=r.length;for(Yo.lastIndex=0;;){let a=Yo.exec(r),o=Yo.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){Xo(n,l===void 0?new Ko(s,e,t):new qo(s,e,t));break}{let e=n.map[s];e===void 0&&(e=new Jo(s),Xo(n,e)),n=e}}}var Qo=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);Zo(n,e.getUniformLocation(t,n.name),this)}let r=[],i=[];for(let t of this.seq)t.type===e.SAMPLER_2D_SHADOW||t.type===e.SAMPLER_CUBE_SHADOW||t.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(t):i.push(t);r.length>0&&(this.seq=r.concat(i))}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}};function $o(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}var es=37297,ts=0;function ns(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}var rs=new H;function is(e){bt._getMatrix(rs,bt.workingColorSpace,e);let t=`mat3( ${rs.elements.map(e=>e.toFixed(4))} )`;switch(bt.getTransfer(e)){case Be:return[t,`LinearTransferOETF`];case Ve:return[t,`sRGBTransferOETF`];default:return R(`WebGLProgram: Unsupported color space: `,e),[t,`LinearTransferOETF`]}}function as(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=(e.getShaderInfoLog(t)||``).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+ns(e.getShaderSource(t),r)}return i}function os(e,t){let n=is(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,`}`].join(`
`)}var ss={1:`Linear`,2:`Reinhard`,3:`Cineon`,4:`ACESFilmic`,6:`AgX`,7:`Neutral`,5:`Custom`};function cs(e,t){let n=ss[t];return n===void 0?(R(`WebGLProgram: Unsupported toneMapping:`,t),`vec3 `+e+`( vec3 color ) { return LinearToneMapping( color ); }`):`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}var ls=new V;function us(){return bt.getLuminanceCoefficients(ls),[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${ls.x.toFixed(4)}, ${ls.y.toFixed(4)}, ${ls.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function ds(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,e.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(ms).join(`
`)}function fs(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function ps(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function ms(e){return e!==``}function hs(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function gs(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var _s=/^[ \t]*#include +<([\w\d./]+)>/gm;function vs(e){return e.replace(_s,bs)}var ys=new Map;function bs(e,t){let n=U[t];if(n===void 0){let e=ys.get(t);if(e!==void 0)n=U[e],R(`WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.`,t,e);else throw Error(`THREE.WebGLProgram: Can not resolve #include <`+t+`>`)}return vs(n)}var xs=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ss(e){return e.replace(xs,Cs)}function Cs(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function ws(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision===`highp`?t+=`
#define HIGH_PRECISION`:e.precision===`mediump`?t+=`
#define MEDIUM_PRECISION`:e.precision===`lowp`&&(t+=`
#define LOW_PRECISION`),t}var Ts={1:`SHADOWMAP_TYPE_PCF`,3:`SHADOWMAP_TYPE_VSM`};function Es(e){return Ts[e.shadowMapType]||`SHADOWMAP_TYPE_BASIC`}var Ds={301:`ENVMAP_TYPE_CUBE`,302:`ENVMAP_TYPE_CUBE`,306:`ENVMAP_TYPE_CUBE_UV`};function Os(e){return e.envMap===!1?`ENVMAP_TYPE_CUBE`:Ds[e.envMapMode]||`ENVMAP_TYPE_CUBE`}var ks={302:`ENVMAP_MODE_REFRACTION`};function As(e){return e.envMap===!1?`ENVMAP_MODE_REFLECTION`:ks[e.envMapMode]||`ENVMAP_MODE_REFLECTION`}var js={0:`ENVMAP_BLENDING_MULTIPLY`,1:`ENVMAP_BLENDING_MIX`,2:`ENVMAP_BLENDING_ADD`};function Ms(e){return e.envMap===!1?`ENVMAP_BLENDING_NONE`:js[e.combine]||`ENVMAP_BLENDING_NONE`}function Ns(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(2**n,112)),texelHeight:r,maxMip:n}}function Ps(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,c=Es(n),l=Os(n),u=As(n),d=Ms(n),f=Ns(n),p=ds(n),m=fs(a),h=i.createProgram(),g,_,v=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(g=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(ms).join(`
`),g.length>0&&(g+=`
`),_=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(ms).join(`
`),_.length>0&&(_+=`
`)):(g=[ws(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.batchingColor?`#define USE_BATCHING_COLOR`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.instancingMorph?`#define USE_INSTANCING_MORPH`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexNormals?`#define HAS_NORMAL`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(ms).join(`
`),_=[ws(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+l:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,f?`#define CUBEUV_TEXEL_WIDTH `+f.texelWidth:``,f?`#define CUBEUV_TEXEL_HEIGHT `+f.texelHeight:``,f?`#define CUBEUV_MAX_MIP `+f.maxMip+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.packedNormalMap?`#define USE_PACKED_NORMALMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.dispersion?`#define USE_DISPERSION`:``,n.retroreflection?`#define USE_RETROREFLECTION`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor?`#define USE_COLOR`:``,n.vertexAlphas||n.batchingColor?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.numLightProbeGrids>0?`#define USE_LIGHT_PROBES_GRID`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.decodeVideoTextureEmissive?`#define DECODE_VIDEO_TEXTURE_EMISSIVE`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:U.tonemapping_pars_fragment,n.toneMapping===0?``:cs(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,U.colorspace_pars_fragment,os(`linearToOutputTexel`,n.outputColorSpace),us(),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(ms).join(`
`)),o=vs(o),o=hs(o,n),o=gs(o,n),s=vs(s),s=hs(s,n),s=gs(s,n),o=Ss(o),s=Ss(s),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[p,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+g,_=[`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+_);let y=v+g+o,b=v+_+s,x=$o(i,i.VERTEX_SHADER,y),S=$o(i,i.FRAGMENT_SHADER,b);i.attachShader(h,x),i.attachShader(h,S),n.index0AttributeName===void 0?n.hasPositionAttribute===!0&&i.bindAttribLocation(h,0,`position`):i.bindAttribLocation(h,0,n.index0AttributeName),i.linkProgram(h);function C(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(h)||``,r=i.getShaderInfoLog(x)||``,a=i.getShaderInfoLog(S)||``,o=n.trim(),s=r.trim(),c=a.trim(),l=!0,u=!0;if(i.getProgramParameter(h,i.LINK_STATUS)===!1){if(l=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,h,x,S);else{let e=as(i,x,`vertex`),n=as(i,S,`fragment`);z(`WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(h,i.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+o+`
`+e+`
`+n)}}else o===``?(s===``||c===``)&&(u=!1):R(`WebGLProgram: Program Info Log:`,o);u&&(t.diagnostics={runnable:l,programLog:o,vertexShader:{log:s,prefix:g},fragmentShader:{log:c,prefix:_}})}i.deleteShader(x),i.deleteShader(S),w=new Qo(i,h),T=ps(i,h)}let w;this.getUniforms=function(){return w===void 0&&C(this),w};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let E=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=i.getProgramParameter(h,es)),E},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(h),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=ts++,this.cacheKey=t,this.usedTimes=1,this.program=h,this.vertexShader=x,this.fragmentShader=S,this}var Fs=0,Is=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Ls(e),t.set(e,n)),n}},Ls=class{constructor(e){this.id=Fs++,this.code=e,this.usedTimes=0}};function Rs(e){return e===1030||e===37490||e===36285}function zs(e,t,n,r,i,a){let o=new qt,s=new Is,c=new Set,l=[],u=new Map,d=r.logarithmicDepthBuffer,f=r.precision,p={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distance`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function m(e){return c.add(e),e===0?`uv`:`uv${e}`}function h(i,o,l,u,h,g){let _=u.fog,v=h.geometry,y=i.isMeshStandardMaterial||i.isMeshLambertMaterial||i.isMeshPhongMaterial?u.environment:null,b=i.isMeshStandardMaterial||i.isMeshLambertMaterial&&!i.envMap||i.isMeshPhongMaterial&&!i.envMap,x=t.get(i.envMap||y,b),S=x&&x.mapping===306?x.image.height:null,C=p[i.type];i.precision!==null&&(f=r.getMaxPrecision(i.precision),f!==i.precision&&R(`WebGLProgram.getParameters:`,i.precision,`not supported, using`,f,`instead.`));let w=v.morphAttributes.position||v.morphAttributes.normal||v.morphAttributes.color,T=w===void 0?0:w.length,E=0;v.morphAttributes.position!==void 0&&(E=1),v.morphAttributes.normal!==void 0&&(E=2),v.morphAttributes.color!==void 0&&(E=3);let D,O,k,A;if(C){let e=aa[C];D=e.vertexShader,O=e.fragmentShader}else{D=i.vertexShader,O=i.fragmentShader;let e=s.getVertexShaderStage(i),t=s.getFragmentShaderStage(i);s.update(i,e,t),k=e.id,A=t.id}let ee=e.getRenderTarget(),j=e.state.buffers.depth.getReversed(),te=h.isInstancedMesh===!0,M=h.isBatchedMesh===!0,ne=!!i.map,N=!!i.matcap,re=!!x,ie=!!i.aoMap,ae=!!i.lightMap,oe=!!i.bumpMap&&i.wireframe===!1,se=!!i.normalMap,ce=!!i.displacementMap,le=!!i.emissiveMap,P=!!i.metalnessMap,ue=!!i.roughnessMap,de=i.anisotropy>0,fe=i.clearcoat>0,pe=i.dispersion>0,me=i.retroreflectivity>0,he=i.iridescence>0,ge=i.sheen>0,_e=i.transmission>0,ve=de&&!!i.anisotropyMap,ye=fe&&!!i.clearcoatMap,be=fe&&!!i.clearcoatNormalMap,xe=fe&&!!i.clearcoatRoughnessMap,Se=he&&!!i.iridescenceMap,Ce=he&&!!i.iridescenceThicknessMap,we=ge&&!!i.sheenColorMap,Te=ge&&!!i.sheenRoughnessMap,Ee=!!i.specularMap,De=!!i.specularColorMap,Oe=!!i.specularIntensityMap,ke=_e&&!!i.transmissionMap,Ae=_e&&!!i.thicknessMap,je=!!i.gradientMap,Me=!!i.alphaMap,Ne=i.alphaTest>0,F=!!i.alphaHash,Pe=!!i.extensions,Fe=0;i.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(Fe=e.toneMapping);let Ie={shaderID:C,shaderType:i.type,shaderName:i.name,vertexShader:D,fragmentShader:O,defines:i.defines,customVertexShaderID:k,customFragmentShaderID:A,isRawShaderMaterial:i.isRawShaderMaterial===!0,glslVersion:i.glslVersion,precision:f,batching:M,batchingColor:M&&h._colorsTexture!==null,instancing:te,instancingColor:te&&h.instanceColor!==null,instancingMorph:te&&h.morphTexture!==null,outputColorSpace:ee===null?e.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:bt.workingColorSpace,alphaToCoverage:!!i.alphaToCoverage,map:ne,matcap:N,envMap:re,envMapMode:re&&x.mapping,envMapCubeUVHeight:S,aoMap:ie,lightMap:ae,bumpMap:oe,normalMap:se,displacementMap:ce,emissiveMap:le,normalMapObjectSpace:se&&i.normalMapType===1,normalMapTangentSpace:se&&i.normalMapType===0,packedNormalMap:se&&i.normalMapType===0&&Rs(i.normalMap.format),metalnessMap:P,roughnessMap:ue,anisotropy:de,anisotropyMap:ve,clearcoat:fe,clearcoatMap:ye,clearcoatNormalMap:be,clearcoatRoughnessMap:xe,dispersion:pe,retroreflection:me,iridescence:he,iridescenceMap:Se,iridescenceThicknessMap:Ce,sheen:ge,sheenColorMap:we,sheenRoughnessMap:Te,specularMap:Ee,specularColorMap:De,specularIntensityMap:Oe,transmission:_e,transmissionMap:ke,thicknessMap:Ae,gradientMap:je,opaque:i.transparent===!1&&i.blending===1&&i.alphaToCoverage===!1,alphaMap:Me,alphaTest:Ne,alphaHash:F,combine:i.combine,mapUv:ne&&m(i.map.channel),aoMapUv:ie&&m(i.aoMap.channel),lightMapUv:ae&&m(i.lightMap.channel),bumpMapUv:oe&&m(i.bumpMap.channel),normalMapUv:se&&m(i.normalMap.channel),displacementMapUv:ce&&m(i.displacementMap.channel),emissiveMapUv:le&&m(i.emissiveMap.channel),metalnessMapUv:P&&m(i.metalnessMap.channel),roughnessMapUv:ue&&m(i.roughnessMap.channel),anisotropyMapUv:ve&&m(i.anisotropyMap.channel),clearcoatMapUv:ye&&m(i.clearcoatMap.channel),clearcoatNormalMapUv:be&&m(i.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:xe&&m(i.clearcoatRoughnessMap.channel),iridescenceMapUv:Se&&m(i.iridescenceMap.channel),iridescenceThicknessMapUv:Ce&&m(i.iridescenceThicknessMap.channel),sheenColorMapUv:we&&m(i.sheenColorMap.channel),sheenRoughnessMapUv:Te&&m(i.sheenRoughnessMap.channel),specularMapUv:Ee&&m(i.specularMap.channel),specularColorMapUv:De&&m(i.specularColorMap.channel),specularIntensityMapUv:Oe&&m(i.specularIntensityMap.channel),transmissionMapUv:ke&&m(i.transmissionMap.channel),thicknessMapUv:Ae&&m(i.thicknessMap.channel),alphaMapUv:Me&&m(i.alphaMap.channel),vertexTangents:!!v.attributes.tangent&&(se||de),vertexNormals:!!v.attributes.normal,vertexColors:i.vertexColors,vertexAlphas:i.vertexColors===!0&&!!v.attributes.color&&v.attributes.color.itemSize===4,pointsUvs:h.isPoints===!0&&!!v.attributes.uv&&(ne||Me),fog:!!_,useFog:i.fog===!0,fogExp2:!!_&&_.isFogExp2,flatShading:i.wireframe===!1&&(i.flatShading===!0||v.attributes.normal===void 0&&se===!1&&(i.isMeshLambertMaterial||i.isMeshPhongMaterial||i.isMeshStandardMaterial||i.isMeshPhysicalMaterial)),sizeAttenuation:i.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:j,skinning:h.isSkinnedMesh===!0,hasPositionAttribute:v.attributes.position!==void 0,morphTargets:v.morphAttributes.position!==void 0,morphNormals:v.morphAttributes.normal!==void 0,morphColors:v.morphAttributes.color!==void 0,morphTargetsCount:T,morphTextureStride:E,numSunLights:o.sun.length,numDirLights:o.directional.length,numPointLights:o.point.length,numSpotLights:o.spot.length,numSpotLightMaps:o.spotLightMap.length,numRectAreaLights:o.rectArea.length,numHemiLights:o.hemi.length,numSunLightShadows:o.sunShadowMap.length,numDirLightShadows:o.directionalShadowMap.length,numPointLightShadows:o.pointShadowMap.length,numSpotLightShadows:o.spotShadowMap.length,numSpotLightShadowsWithMaps:o.numSpotLightShadowsWithMaps,numLightProbes:o.numLightProbes,numLightProbeGrids:g.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:i.dithering,shadowMapEnabled:e.shadowMap.enabled&&l.length>0,shadowMapType:e.shadowMap.type,toneMapping:Fe,decodeVideoTexture:ne&&i.map.isVideoTexture===!0&&bt.getTransfer(i.map.colorSpace)===`srgb`,decodeVideoTextureEmissive:le&&i.emissiveMap.isVideoTexture===!0&&bt.getTransfer(i.emissiveMap.colorSpace)===`srgb`,premultipliedAlpha:i.premultipliedAlpha,doubleSided:i.side===2,flipSided:i.side===1,useDepthPacking:i.depthPacking>=0,depthPacking:i.depthPacking||0,index0AttributeName:i.index0AttributeName,extensionClipCullDistance:Pe&&i.extensions.clipCullDistance===!0&&n.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(Pe&&i.extensions.multiDraw===!0||M)&&n.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:n.has(`KHR_parallel_shader_compile`),customProgramCacheKey:i.customProgramCacheKey()};return Ie.vertexUv1s=c.has(1),Ie.vertexUv2s=c.has(2),Ie.vertexUv3s=c.has(3),c.clear(),Ie}function g(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(_(n,t),v(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function _(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapCubeUVHeight),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.morphAttributeCount),e.push(t.numSunLights),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numSunLightShadows),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function v(e,t){o.disableAll(),t.instancing&&o.enable(0),t.instancingColor&&o.enable(1),t.instancingMorph&&o.enable(2),t.matcap&&o.enable(3),t.envMap&&o.enable(4),t.normalMapObjectSpace&&o.enable(5),t.normalMapTangentSpace&&o.enable(6),t.clearcoat&&o.enable(7),t.iridescence&&o.enable(8),t.alphaTest&&o.enable(9),t.vertexColors&&o.enable(10),t.vertexAlphas&&o.enable(11),t.vertexUv1s&&o.enable(12),t.vertexUv2s&&o.enable(13),t.vertexUv3s&&o.enable(14),t.vertexTangents&&o.enable(15),t.anisotropy&&o.enable(16),t.alphaHash&&o.enable(17),t.batching&&o.enable(18),t.dispersion&&o.enable(19),t.retroreflection&&o.enable(24),t.batchingColor&&o.enable(20),t.gradientMap&&o.enable(21),t.packedNormalMap&&o.enable(22),t.vertexNormals&&o.enable(23),e.push(o.mask),o.disableAll(),t.fog&&o.enable(0),t.useFog&&o.enable(1),t.flatShading&&o.enable(2),t.logarithmicDepthBuffer&&o.enable(3),t.reversedDepthBuffer&&o.enable(4),t.skinning&&o.enable(5),t.morphTargets&&o.enable(6),t.morphNormals&&o.enable(7),t.morphColors&&o.enable(8),t.premultipliedAlpha&&o.enable(9),t.shadowMapEnabled&&o.enable(10),t.doubleSided&&o.enable(11),t.flipSided&&o.enable(12),t.useDepthPacking&&o.enable(13),t.dithering&&o.enable(14),t.transmission&&o.enable(15),t.sheen&&o.enable(16),t.opaque&&o.enable(17),t.pointsUvs&&o.enable(18),t.decodeVideoTexture&&o.enable(19),t.decodeVideoTextureEmissive&&o.enable(20),t.alphaToCoverage&&o.enable(21),t.numLightProbeGrids>0&&o.enable(22),t.hasPositionAttribute&&o.enable(23),e.push(o.mask)}function y(e){let t=p[e.type],n;if(t){let e=aa[t];n=ii.clone(e.uniforms)}else n=e.uniforms;return n}function b(t,n){let r=u.get(n);return r===void 0?(r=new Ps(e,n,t,i),l.push(r),u.set(n,r)):++r.usedTimes,r}function x(e){if(--e.usedTimes===0){let t=l.indexOf(e);l[t]=l[l.length-1],l.pop(),u.delete(e.cacheKey),e.destroy()}}function S(e){s.remove(e)}function C(){s.dispose()}return{getParameters:h,getProgramCacheKey:g,getUniforms:y,acquireProgram:b,releaseProgram:x,releaseShaderCache:S,programs:l,dispose:C}}function Bs(){let e=new WeakMap;function t(t){return e.has(t)}function n(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function r(t){e.delete(t)}function i(t,n,r){e.get(t)[n]=r}function a(){e=new WeakMap}return{has:t,get:n,remove:r,update:i,dispose:a}}function Vs(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.materialVariant===t.materialVariant?e.z===t.z?e.id-t.id:e.z-t.z:e.materialVariant-t.materialVariant:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function Hs(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function Us(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(e){let t=0;return e.isInstancedMesh&&(t+=2),e.isSkinnedMesh&&(t+=1),t}function s(n,r,i,a,s,c){let l=e[t];return l===void 0?(l={id:n.id,object:n,geometry:r,material:i,materialVariant:o(n),groupOrder:a,renderOrder:n.renderOrder,z:s,group:c},e[t]=l):(l.id=n.id,l.object=n,l.geometry=r,l.material=i,l.materialVariant=o(n),l.groupOrder=a,l.renderOrder=n.renderOrder,l.z=s,l.group=c),t++,l}function c(e,t,a,o,c,l,u){u.reversedDepth===!0&&(c=-c);let d=s(e,t,a,o,c,l);a.transmission>0?r.push(d):a.transparent===!0?i.push(d):n.push(d)}function l(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function u(e,t){n.length>1&&n.sort(e||Vs),r.length>1&&r.sort(t||Hs),i.length>1&&i.sort(t||Hs)}function d(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:c,unshift:l,finish:d,sort:u}}function Ws(){let e=new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new Us,e.set(t,[i])):n>=r.length?(i=new Us,r.push(i)):i=r[n],i}function n(){e=new WeakMap}return{get:t,dispose:n}}function Gs(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={direction:new V,color:new vn};break;case`SpotLight`:n={position:new V,direction:new V,color:new vn,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new V,color:new vn,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new V,skyColor:new vn,groundColor:new vn};break;case`RectAreaLight`:n={color:new vn,position:new V,halfWidth:new V,halfHeight:new V}}return e[t.id]=n,n}}}function Ks(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft};break;case`SpotLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft};break;case`PointLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft,shadowCameraNear:1,shadowCameraFar:1e3}}return e[t.id]=n,n}}}var qs=0;function Js(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function Ys(e){let t=new Gs,n=Ks(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)r.probe.push(new V);let i=new V,a=new It,o=new It;function s(i){let a=0,o=0,s=0;for(let e=0;e<9;e++)r.probe[e].set(0,0,0);let c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0,y=0,b=0,x=0;i.sort(Js);for(let e=0,S=i.length;e<S;e++){let S=i[e],C=S.color,w=S.intensity,T=S.distance,E=null;if(S.shadow&&S.shadow.map&&(E=S.shadow.map.texture.format===1030?S.shadow.map.texture:S.shadow.map.depthTexture||S.shadow.map.texture),S.isAmbientLight)a+=C.r*w,o+=C.g*w,s+=C.b*w;else if(S.isLightProbe){for(let e=0;e<9;e++)r.probe[e].addScaledVector(S.sh.coefficients[e],w);x++}else if(S.isSunLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize.copy(e.mapSize).multiply(e.getFrameExtents()),r.sunShadow[l]=t,r.sunShadowMap[l]=E;let i=e.getViewportCount();for(let t=0;t<i;t++)r.sunShadowMatrix[u+t]=e.getMatrix(t),r.sunShadowCascade[u+t]=e._cascadeData[t];u+=i,l++}r.sun[c]=e,c++}else if(S.isDirectionalLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,r.directionalShadow[d]=t,r.directionalShadowMap[d]=E,r.directionalShadowMatrix[d]=S.shadow.matrix,g++}r.directional[d]=e,d++}else if(S.isSpotLight){let e=t.get(S);e.position.setFromMatrixPosition(S.matrixWorld),e.color.copy(C).multiplyScalar(w),e.distance=T,e.coneCos=Math.cos(S.angle),e.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),e.decay=S.decay,r.spot[p]=e;let i=S.shadow;if(S.map&&(r.spotLightMap[y]=S.map,y++,i.updateMatrices(S),S.castShadow&&b++),r.spotLightMatrix[p]=i.matrix,S.castShadow){let e=n.get(S);e.shadowIntensity=i.intensity,e.shadowBias=i.bias,e.shadowNormalBias=i.normalBias,e.shadowRadius=i.radius,e.shadowMapSize=i.mapSize,r.spotShadow[p]=e,r.spotShadowMap[p]=E,v++}p++}else if(S.isRectAreaLight){let e=t.get(S);e.color.copy(C).multiplyScalar(w),e.halfWidth.set(S.width*.5,0,0),e.halfHeight.set(0,S.height*.5,0),r.rectArea[m]=e,m++}else if(S.isPointLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),e.distance=S.distance,e.decay=S.decay,S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,t.shadowCameraNear=e.camera.near,t.shadowCameraFar=e.camera.far,r.pointShadow[f]=t,r.pointShadowMap[f]=E,r.pointShadowMatrix[f]=S.shadow.matrix,_++}r.point[f]=e,f++}else if(S.isHemisphereLight){let e=t.get(S);e.skyColor.copy(S.color).multiplyScalar(w),e.groundColor.copy(S.groundColor).multiplyScalar(w),r.hemi[h]=e,h++}}m>0&&(e.has(`OES_texture_float_linear`)===!0?(r.rectAreaLTC1=W.LTC_FLOAT_1,r.rectAreaLTC2=W.LTC_FLOAT_2):(r.rectAreaLTC1=W.LTC_HALF_1,r.rectAreaLTC2=W.LTC_HALF_2)),r.ambient[0]=a,r.ambient[1]=o,r.ambient[2]=s;let S=r.hash;(S.sunLength!==c||S.directionalLength!==d||S.pointLength!==f||S.spotLength!==p||S.rectAreaLength!==m||S.hemiLength!==h||S.numSunShadows!==l||S.numDirectionalShadows!==g||S.numPointShadows!==_||S.numSpotShadows!==v||S.numSpotMaps!==y||S.numLightProbes!==x)&&(r.sun.length=c,r.directional.length=d,r.spot.length=p,r.rectArea.length=m,r.point.length=f,r.hemi.length=h,r.sunShadow.length=l,r.sunShadowMap.length=l,r.sunShadowMatrix.length=u,r.sunShadowCascade.length=u,r.directionalShadow.length=g,r.directionalShadowMap.length=g,r.directionalShadowMatrix.length=g,r.pointShadow.length=_,r.pointShadowMap.length=_,r.pointShadowMatrix.length=_,r.spotShadow.length=v,r.spotShadowMap.length=v,r.spotLightMatrix.length=v+y-b,r.spotLightMap.length=y,r.numSpotLightShadowsWithMaps=b,r.numLightProbes=x,S.sunLength=c,S.directionalLength=d,S.pointLength=f,S.spotLength=p,S.rectAreaLength=m,S.hemiLength=h,S.numSunShadows=l,S.numDirectionalShadows=g,S.numPointShadows=_,S.numSpotShadows=v,S.numSpotMaps=y,S.numLightProbes=x,r.version=qs++)}function c(e,t){let n=0,s=0,c=0,l=0,u=0,d=0,f=t.matrixWorldInverse;for(let t=0,p=e.length;t<p;t++){let p=e[t];if(p.isSunLight){let e=r.sun[n];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),n++}else if(p.isDirectionalLight){let e=r.directional[s];e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),s++}else if(p.isSpotLight){let e=r.spot[l];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),l++}else if(p.isRectAreaLight){let e=r.rectArea[u];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),o.identity(),a.copy(p.matrixWorld),a.premultiply(f),o.extractRotation(a),e.halfWidth.set(p.width*.5,0,0),e.halfHeight.set(0,p.height*.5,0),e.halfWidth.applyMatrix4(o),e.halfHeight.applyMatrix4(o),u++}else if(p.isPointLight){let e=r.point[c];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),c++}else if(p.isHemisphereLight){let e=r.hemi[d];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),d++}}}return{setup:s,setupView:c,state:r}}function Xs(e){let t=new Ys(e),n=[],r=[],i=[];function a(e){d.camera=e,n.length=0,r.length=0,i.length=0}function o(e){n.push(e)}function s(e){r.push(e)}function c(e){i.push(e)}function l(){t.setup(n)}function u(e){t.setupView(n,e)}let d={lightsArray:n,shadowsArray:r,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:d,setupLights:l,setupLightsView:u,pushLight:o,pushShadow:s,pushLightProbeGrid:c}}function Zs(e){let t=new WeakMap;function n(n,r=0){let i=t.get(n),a;return i===void 0?(a=new Xs(e),t.set(n,[a])):r>=i.length?(a=new Xs(e),i.push(a)):a=i[r],a}function r(){t=new WeakMap}return{get:n,dispose:r}}var Qs=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,$s=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,ec=[new V(1,0,0),new V(-1,0,0),new V(0,1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1)],tc=[new V(0,-1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1),new V(0,-1,0),new V(0,-1,0)],nc=new It,rc=new V,ic=new V;function ac(e,t,n){let i=new Gr,a=new ft,s=new ft,c=new jt,l=new li,u=new ui,d={},f=n.maxTextureSize,p={0:1,1:0,2:2},_=new si({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ft},radius:{value:4}},vertexShader:Qs,fragmentShader:$s}),v=_.clone();v.defines.HORIZONTAL_PASS=1;let y=new mr;y.setAttribute(`position`,new $n(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let b=new Rr(y,_),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let S=this.type;this.render=function(t,n,l){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||t.length===0)return;this.type===2&&(R(`WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead.`),this.type=1);let u=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.state;_.setBlending(0),_.buffers.depth.getReversed()===!0?_.buffers.color.setClear(0,0,0,0):_.buffers.color.setClear(1,1,1,1),_.buffers.depth.setTest(!0),_.setScissorTest(!1);let v=S!==this.type;v&&n.traverse(function(e){e.material&&(Array.isArray(e.material)?e.material.forEach(e=>e.needsUpdate=!0):e.material.needsUpdate=!0)});for(let u=0,d=t.length;u<d;u++){let d=t[u],p=d.shadow;if(p===void 0){R(`WebGLShadowMap:`,d,`has no shadow.`);continue}if(p.autoUpdate===!1&&p.needsUpdate===!1)continue;a.copy(p.mapSize);let y=p.getFrameExtents();a.multiply(y),s.copy(p.mapSize),(a.x>f||a.y>f)&&(a.x>f&&(s.x=Math.floor(f/y.x),a.x=s.x*y.x,p.mapSize.x=s.x),a.y>f&&(s.y=Math.floor(f/y.y),a.y=s.y*y.y,p.mapSize.y=s.y));let b=e.state.buffers.depth.getReversed();if(p.camera._reversedDepth=b,p.map===null||v===!0){if(p.map!==null&&(p.map.depthTexture!==null&&(p.map.depthTexture.dispose(),p.map.depthTexture=null),p.map.dispose()),this.type===3){if(d.isPointLight){R(`WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.`);continue}p.map=new Nt(a.x,a.y,{format:k,type:g,minFilter:o,magFilter:o,generateMipmaps:!1}),p.map.texture.name=d.name+`.shadowMap`,p.map.depthTexture=new Jr(a.x,a.y,h),p.map.depthTexture.name=d.name+`.shadowMapDepth`,p.map.depthTexture.format=T,p.map.depthTexture.compareFunction=null,p.map.depthTexture.minFilter=r,p.map.depthTexture.magFilter=r}else d.isPointLight?(p.map=new Fa(a.x),p.map.depthTexture=new Yr(a.x,m)):(p.map=new Nt(a.x,a.y),p.map.depthTexture=new Jr(a.x,a.y,m)),p.map.depthTexture.name=d.name+`.shadowMap`,p.map.depthTexture.format=T,this.type===1?(p.map.depthTexture.compareFunction=b?518:515,p.map.depthTexture.minFilter=o,p.map.depthTexture.magFilter=o):(p.map.depthTexture.compareFunction=null,p.map.depthTexture.minFilter=r,p.map.depthTexture.magFilter=r);p.camera.updateProjectionMatrix()}p.map.isWebGLCubeRenderTarget!==!0&&(p.map.width!==a.x||p.map.height!==a.y)&&p.map.setSize(a.x,a.y);let x=p.map.isWebGLCubeRenderTarget?6:p.getViewportCount();d.isPointLight!==!0&&p.updateMatrices(d,l);for(let t=0;t<x;t++){let r=p.getCamera(t);if(d.isPointLight){let e=p.camera,n=p.matrix,r=d.distance||e.far;r!==e.far&&(e.far=r,e.updateProjectionMatrix()),rc.setFromMatrixPosition(d.matrixWorld),e.position.copy(rc),ic.copy(e.position),ic.add(ec[t]),e.up.copy(tc[t]),e.lookAt(ic),e.updateMatrixWorld(),n.makeTranslation(-rc.x,-rc.y,-rc.z),nc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),p._frustum.setFromProjectionMatrix(nc,e.coordinateSystem,e.reversedDepth)}if(p.map.isWebGLCubeRenderTarget)e.setRenderTarget(p.map,t),e.clear();else{t===0&&(e.setRenderTarget(p.map),e.clear());let n=p.getViewport(t);c.set(s.x*n.x,s.y*n.y,s.x*n.z,s.y*n.w),_.viewport(c)}i=p.getFrustum(t),E(n,l,r,d,this.type)}p.isPointLightShadow!==!0&&this.type===3&&C(p,l),p.needsUpdate=!1}S=this.type,x.needsUpdate=!1,e.setRenderTarget(u,d,p)};function C(n,r){let i=t.update(b);_.defines.VSM_SAMPLES!==n.blurSamples&&(_.defines.VSM_SAMPLES=n.blurSamples,v.defines.VSM_SAMPLES=n.blurSamples,_.needsUpdate=!0,v.needsUpdate=!0),n.mapPass===null?n.mapPass=new Nt(a.x,a.y,{format:k,type:g}):(n.mapPass.width!==n.map.width||n.mapPass.height!==n.map.height)&&n.mapPass.setSize(n.map.width,n.map.height),_.uniforms.shadow_pass.value=n.map.depthTexture,_.uniforms.resolution.value.set(n.map.width,n.map.height),_.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,i,_,b,null),v.uniforms.shadow_pass.value=n.mapPass.texture,v.uniforms.resolution.value.set(n.map.width,n.map.height),v.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,i,v,b,null)}function w(t,n,r,i){let a=null,o=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?u:l,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0||n.alphaToCoverage===!0){let e=a.uuid,t=n.uuid,r=d[e];r===void 0&&(r={},d[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,D)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===3?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?p[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaToCoverage===!0?.5:n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let t=e.properties.get(a);t.light=r}return a}function E(n,r,a,o,s){if(n.visible===!1)return;if(n.layers.test(r.layers)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&s===3)&&(!n.frustumCulled||n.intersectsFrustum(i))){n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,n.matrixWorld);let i=t.update(n),c=n.material;if(Array.isArray(c)){let t=i.groups;for(let l=0,u=t.length;l<u;l++){let u=t[l],d=c[u.materialIndex];if(d&&d.visible){let t=w(n,d,o,s);n.onBeforeShadow(e,n,r,a,i,t,u),e.renderBufferDirect(a,null,i,t,n,u),n.onAfterShadow(e,n,r,a,i,t,u)}}}else if(c.visible){let t=w(n,c,o,s);n.onBeforeShadow(e,n,r,a,i,t,null),e.renderBufferDirect(a,null,i,t,n,null),n.onAfterShadow(e,n,r,a,i,t,null)}}let c=n.children;for(let e=0,t=c.length;e<t;e++)E(c[e],r,a,o,s)}function D(e){e.target.removeEventListener(`dispose`,D);for(let t in d){let n=d[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}function oc(e,t){function n(){let t=!1,n=new jt,r=null,i=new jt(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function r(){let n=!1,r=!1,i=null,a=null,o=null;return{setReversed:function(e){if(r!==e){let n=t.get(`EXT_clip_control`);e?n.clipControlEXT(n.LOWER_LEFT_EXT,n.ZERO_TO_ONE_EXT):n.clipControlEXT(n.LOWER_LEFT_EXT,n.NEGATIVE_ONE_TO_ONE_EXT),r=e;let i=o;o=null,this.setClear(i)}},getReversed:function(){return r},setTest:function(t){t?P(e.DEPTH_TEST):ue(e.DEPTH_TEST)},setMask:function(t){i!==t&&!n&&(e.depthMask(t),i=t)},setFunc:function(t){if(r&&(t=nt[t]),a!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}a=t}},setLocked:function(e){n=e},setClear:function(t){o!==t&&(o=t,r&&(t=1-t),e.clearDepth(t))},reset:function(){n=!1,i=null,a=null,o=null,r=!1}}}function i(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?P(e.STENCIL_TEST):ue(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let a=new n,o=new r,s=new i,c=new WeakMap,l=new WeakMap,u={},d={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new vn(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,ee=null,j=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),te=!1,M=0,ne=e.getParameter(e.VERSION);ne.indexOf(`WebGL`)===-1?ne.indexOf(`OpenGL ES`)!==-1&&(M=parseFloat(/^OpenGL ES (\d)/.exec(ne)[1]),te=M>=2):(M=parseFloat(/^WebGL (\d)/.exec(ne)[1]),te=M>=1);let N=null,re={},ie=e.getParameter(e.SCISSOR_BOX),ae=e.getParameter(e.VIEWPORT),oe=new jt().fromArray(ie),se=new jt().fromArray(ae);function ce(t,n,r,i){let a=new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let o=0;o<r;o++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,i,0,e.RGBA,e.UNSIGNED_BYTE,a):e.texImage2D(n+o,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,a);return o}let le={};le[e.TEXTURE_2D]=ce(e.TEXTURE_2D,e.TEXTURE_2D,1),le[e.TEXTURE_CUBE_MAP]=ce(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),le[e.TEXTURE_2D_ARRAY]=ce(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),le[e.TEXTURE_3D]=ce(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),s.setClear(0),P(e.DEPTH_TEST),o.setFunc(3),ve(!1),ye(1),P(e.CULL_FACE),ge(0);function P(t){u[t]!==!0&&(e.enable(t),u[t]=!0)}function ue(t){u[t]!==!1&&(e.disable(t),u[t]=!1)}function de(t,n){return f[t]!==n&&(e.bindFramebuffer(t,n),f[t]=n,t===e.DRAW_FRAMEBUFFER&&(f[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(f[e.DRAW_FRAMEBUFFER]=n),!0)}function fe(t,n){let r=m,i=!1;if(t){r=p.get(n),r===void 0&&(r=[],p.set(n,r));let a=t.textures;if(r.length!==a.length||r[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=a.length;t<n;t++)r[t]=e.COLOR_ATTACHMENT0+t;r.length=a.length,i=!0}}else r[0]!==e.BACK&&(r[0]=e.BACK,i=!0);i&&e.drawBuffers(r)}function pe(t){return h!==t&&(e.useProgram(t),h=t,!0)}let me={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};me[103]=e.MIN,me[104]=e.MAX;let he={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function ge(t,n,r,i,a,o,s,c,l,u){if(t===0)g===!0&&(ue(e.BLEND),g=!1);else if(g===!1&&(P(e.BLEND),g=!0),t!==5){if(t!==_||u!==E){if((v!==100||x!==100)&&(e.blendEquation(e.FUNC_ADD),v=100,x=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:z(`WebGLState: Invalid blending: `,t)}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case 3:z(`WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true`);break;case 4:z(`WebGLState: MultiplyBlending requires material.premultipliedAlpha = true`);break;default:z(`WebGLState: Invalid blending: `,t)}y=null,b=null,S=null,C=null,w.set(0,0,0),T=0,_=t,E=u}}else a||=n,o||=r,s||=i,(n!==v||a!==x)&&(e.blendEquationSeparate(me[n],me[a]),v=n,x=a),(r!==y||i!==b||o!==S||s!==C)&&(e.blendFuncSeparate(he[r],he[i],he[o],he[s]),y=r,b=i,S=o,C=s),(c.equals(w)===!1||l!==T)&&(e.blendColor(c.r,c.g,c.b,l),w.copy(c),T=l),_=t,E=!1}function _e(t,n){t.side===2?ue(e.CULL_FACE):P(e.CULL_FACE);let r=t.side===1;n&&(r=!r),ve(r),t.blending===1&&t.transparent===!1?ge(0):ge(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),o.setFunc(t.depthFunc),o.setTest(t.depthTest),o.setMask(t.depthWrite),a.setMask(t.colorWrite);let i=t.stencilWrite;s.setTest(i),i&&(s.setMask(t.stencilWriteMask),s.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),s.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),xe(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?P(e.SAMPLE_ALPHA_TO_COVERAGE):ue(e.SAMPLE_ALPHA_TO_COVERAGE)}function ve(t){D!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),D=t)}function ye(t){t===0?ue(e.CULL_FACE):(P(e.CULL_FACE),t!==O&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),O=t}function be(t){t!==k&&(te&&e.lineWidth(t),k=t)}function xe(t,n,r){t?(P(e.POLYGON_OFFSET_FILL),(A!==n||ee!==r)&&(A=n,ee=r,o.getReversed()&&(n=-n),e.polygonOffset(n,r))):ue(e.POLYGON_OFFSET_FILL)}function Se(t){t?P(e.SCISSOR_TEST):ue(e.SCISSOR_TEST)}function Ce(t){t===void 0&&(t=e.TEXTURE0+j-1),N!==t&&(e.activeTexture(t),N=t)}function we(t,n,r){r===void 0&&(r=N===null?e.TEXTURE0+j-1:N);let i=re[r];i===void 0&&(i={type:void 0,texture:void 0},re[r]=i),(i.type!==t||i.texture!==n)&&(N!==r&&(e.activeTexture(r),N=r),e.bindTexture(t,n||le[t]),i.type=t,i.texture=n)}function Te(){let t=re[N];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function Ee(){try{e.compressedTexImage2D(...arguments)}catch(e){z(`WebGLState:`,e)}}function De(){try{e.compressedTexImage3D(...arguments)}catch(e){z(`WebGLState:`,e)}}function Oe(){try{e.texSubImage2D(...arguments)}catch(e){z(`WebGLState:`,e)}}function ke(){try{e.texSubImage3D(...arguments)}catch(e){z(`WebGLState:`,e)}}function Ae(){try{e.compressedTexSubImage2D(...arguments)}catch(e){z(`WebGLState:`,e)}}function je(){try{e.compressedTexSubImage3D(...arguments)}catch(e){z(`WebGLState:`,e)}}function Me(){try{e.texStorage2D(...arguments)}catch(e){z(`WebGLState:`,e)}}function Ne(){try{e.texStorage3D(...arguments)}catch(e){z(`WebGLState:`,e)}}function F(){try{e.texImage2D(...arguments)}catch(e){z(`WebGLState:`,e)}}function Pe(){try{e.texImage3D(...arguments)}catch(e){z(`WebGLState:`,e)}}function Fe(t){return d[t]===void 0?e.getParameter(t):d[t]}function Ie(t,n){d[t]!==n&&(e.pixelStorei(t,n),d[t]=n)}function I(t){oe.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),oe.copy(t))}function Le(t){se.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),se.copy(t))}function L(t,n){let r=l.get(n);r===void 0&&(r=new WeakMap,l.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),r.set(t,i))}function Re(t,n){let r=l.get(n).get(t);c.get(n)!==r&&(e.uniformBlockBinding(n,r,t.__bindingPointIndex),c.set(n,r))}function ze(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),u={},d={},N=null,re={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new vn(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,ee=null,oe.set(0,0,e.canvas.width,e.canvas.height),se.set(0,0,e.canvas.width,e.canvas.height),a.reset(),o.reset(),s.reset()}return{buffers:{color:a,depth:o,stencil:s},enable:P,disable:ue,bindFramebuffer:de,drawBuffers:fe,useProgram:pe,setBlending:ge,setMaterial:_e,setFlipSided:ve,setCullFace:ye,setLineWidth:be,setPolygonOffset:xe,setScissorTest:Se,activeTexture:Ce,bindTexture:we,unbindTexture:Te,compressedTexImage2D:Ee,compressedTexImage3D:De,texImage2D:F,texImage3D:Pe,pixelStorei:Ie,getParameter:Fe,updateUBOMapping:L,uniformBlockBinding:Re,texStorage2D:Me,texStorage3D:Ne,texSubImage2D:Oe,texSubImage3D:ke,compressedTexSubImage2D:Ae,compressedTexSubImage3D:je,scissor:I,viewport:Le,reset:ze}}function sc(l,u,d,f,p,m,h){let g=u.has(`WEBGL_multisampled_render_to_texture`)?u.get(`WEBGL_multisampled_render_to_texture`):null,_=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),v=new ft,y=new WeakMap,b=new Set,x,S=new WeakMap,C=!1;try{C=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function w(e,t){return C?new OffscreenCanvas(e,t):Ye(`canvas`)}function T(e,t,n){let r=1,i=Fe(e);if((i.width>n||i.height>n)&&(r=n/Math.max(i.width,i.height)),r<1){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof VideoFrame<`u`&&e instanceof VideoFrame){let n=Math.floor(r*i.width),a=Math.floor(r*i.height);x===void 0&&(x=w(n,a));let o=t?w(n,a):x;return o.width=n,o.height=a,o.getContext(`2d`).drawImage(e,0,0,n,a),R(`WebGLRenderer: Texture has been resized from (`+i.width+`x`+i.height+`) to (`+n+`x`+a+`).`),o}return`data`in e&&R(`WebGLRenderer: Image in DataTexture is too big (`+i.width+`x`+i.height+`).`),e}return e}function D(e){return e.generateMipmaps}function O(e){l.generateMipmap(e)}function k(e){return e.isWebGLCubeRenderTarget?l.TEXTURE_CUBE_MAP:e.isWebGL3DRenderTarget?l.TEXTURE_3D:e.isWebGLArrayRenderTarget||e.isCompressedArrayTexture?l.TEXTURE_2D_ARRAY:l.TEXTURE_2D}function A(e,t,n,r,i,a=!1){if(e!==null){if(l[e]!==void 0)return l[e];R(`WebGLRenderer: Attempt to use non-existing WebGL internal format '`+e+`'`)}let o;r&&(o=u.get(`EXT_texture_norm16`),o||R(`WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension`));let s=t;if(t===l.RED&&(n===l.FLOAT&&(s=l.R32F),n===l.HALF_FLOAT&&(s=l.R16F),n===l.UNSIGNED_BYTE&&(s=l.R8),n===l.UNSIGNED_SHORT&&o&&(s=o.R16_EXT),n===l.SHORT&&o&&(s=o.R16_SNORM_EXT)),t===l.RED_INTEGER&&(n===l.UNSIGNED_BYTE&&(s=l.R8UI),n===l.UNSIGNED_SHORT&&(s=l.R16UI),n===l.UNSIGNED_INT&&(s=l.R32UI),n===l.BYTE&&(s=l.R8I),n===l.SHORT&&(s=l.R16I),n===l.INT&&(s=l.R32I)),t===l.RG&&(n===l.FLOAT&&(s=l.RG32F),n===l.HALF_FLOAT&&(s=l.RG16F),n===l.UNSIGNED_BYTE&&(s=l.RG8),n===l.UNSIGNED_SHORT&&o&&(s=o.RG16_EXT),n===l.SHORT&&o&&(s=o.RG16_SNORM_EXT)),t===l.RG_INTEGER&&(n===l.UNSIGNED_BYTE&&(s=l.RG8UI),n===l.UNSIGNED_SHORT&&(s=l.RG16UI),n===l.UNSIGNED_INT&&(s=l.RG32UI),n===l.BYTE&&(s=l.RG8I),n===l.SHORT&&(s=l.RG16I),n===l.INT&&(s=l.RG32I)),t===l.RGB_INTEGER&&(n===l.UNSIGNED_BYTE&&(s=l.RGB8UI),n===l.UNSIGNED_SHORT&&(s=l.RGB16UI),n===l.UNSIGNED_INT&&(s=l.RGB32UI),n===l.BYTE&&(s=l.RGB8I),n===l.SHORT&&(s=l.RGB16I),n===l.INT&&(s=l.RGB32I)),t===l.RGBA_INTEGER&&(n===l.UNSIGNED_BYTE&&(s=l.RGBA8UI),n===l.UNSIGNED_SHORT&&(s=l.RGBA16UI),n===l.UNSIGNED_INT&&(s=l.RGBA32UI),n===l.BYTE&&(s=l.RGBA8I),n===l.SHORT&&(s=l.RGBA16I),n===l.INT&&(s=l.RGBA32I)),t===l.RGB&&(n===l.UNSIGNED_SHORT&&o&&(s=o.RGB16_EXT),n===l.SHORT&&o&&(s=o.RGB16_SNORM_EXT),n===l.UNSIGNED_INT_5_9_9_9_REV&&(s=l.RGB9_E5),n===l.UNSIGNED_INT_10F_11F_11F_REV&&(s=l.R11F_G11F_B10F)),t===l.RGBA){let e=a?Be:bt.getTransfer(i);n===l.FLOAT&&(s=l.RGBA32F),n===l.HALF_FLOAT&&(s=l.RGBA16F),n===l.UNSIGNED_BYTE&&(s=e===`srgb`?l.SRGB8_ALPHA8:l.RGBA8),n===l.UNSIGNED_SHORT&&o&&(s=o.RGBA16_EXT),n===l.SHORT&&o&&(s=o.RGBA16_SNORM_EXT),n===l.UNSIGNED_SHORT_4_4_4_4&&(s=l.RGBA4),n===l.UNSIGNED_SHORT_5_5_5_1&&(s=l.RGB5_A1)}return(s===l.R16F||s===l.R32F||s===l.RG16F||s===l.RG32F||s===l.RGBA16F||s===l.RGBA32F)&&u.get(`EXT_color_buffer_float`),s}function ee(e,t){let n;return e?t===null||t===1014||t===1020?n=l.DEPTH24_STENCIL8:t===1015?n=l.DEPTH32F_STENCIL8:t===1012&&(n=l.DEPTH24_STENCIL8,R(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):t===null||t===1014||t===1020?n=l.DEPTH_COMPONENT24:t===1015?n=l.DEPTH_COMPONENT32F:t===1012&&(n=l.DEPTH_COMPONENT16),n}function j(e,t){return D(e)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps!==void 0&&e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function te(e){let t=e.target;t.removeEventListener(`dispose`,te),ne(t),t.isVideoTexture&&y.delete(t),t.isHTMLTexture&&b.delete(t)}function M(e){let t=e.target;t.removeEventListener(`dispose`,M),re(t)}function ne(e){let t=f.get(e);if(t.__webglInit===void 0)return;let n=e.source,r=S.get(n);if(r){let i=r[t.__cacheKey];i.usedTimes--,i.usedTimes===0&&N(e),Object.keys(r).length===0&&S.delete(n)}f.remove(e)}function N(e){let t=f.get(e);l.deleteTexture(t.__webglTexture);let n=e.source,r=S.get(n);delete r[t.__cacheKey],h.memory.textures--}function re(e){let t=f.get(e);if(e.depthTexture&&(e.depthTexture.dispose(),f.remove(e.depthTexture)),e.isWebGLCubeRenderTarget)for(let e=0;e<6;e++){if(Array.isArray(t.__webglFramebuffer[e]))for(let n=0;n<t.__webglFramebuffer[e].length;n++)l.deleteFramebuffer(t.__webglFramebuffer[e][n]);else l.deleteFramebuffer(t.__webglFramebuffer[e]);t.__webglDepthbuffer&&l.deleteRenderbuffer(t.__webglDepthbuffer[e])}else{if(Array.isArray(t.__webglFramebuffer))for(let e=0;e<t.__webglFramebuffer.length;e++)l.deleteFramebuffer(t.__webglFramebuffer[e]);else l.deleteFramebuffer(t.__webglFramebuffer);if(t.__webglDepthbuffer&&l.deleteRenderbuffer(t.__webglDepthbuffer),t.__webglMultisampledFramebuffer&&l.deleteFramebuffer(t.__webglMultisampledFramebuffer),t.__webglColorRenderbuffer)for(let e=0;e<t.__webglColorRenderbuffer.length;e++)t.__webglColorRenderbuffer[e]&&l.deleteRenderbuffer(t.__webglColorRenderbuffer[e]);t.__webglDepthRenderbuffer&&l.deleteRenderbuffer(t.__webglDepthRenderbuffer)}let n=e.textures;for(let e=0,t=n.length;e<t;e++){let t=f.get(n[e]);t.__webglTexture&&(l.deleteTexture(t.__webglTexture),h.memory.textures--),f.remove(n[e])}f.remove(e)}let ie=0;function ae(){ie=0}function oe(){return ie}function se(e){ie=e}function ce(){let e=ie;return e>=p.maxTextures&&R(`WebGLTextures: Trying to use `+(e+1)+` texture units while this GPU supports only `+p.maxTextures),ie+=1,e}function le(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function P(e,t){let n=f.get(e);if(e.isVideoTexture&&F(e),e.isRenderTargetTexture===!1&&e.isExternalTexture!==!0&&e.version>0&&n.__version!==e.version){let r=e.image;if(r===null)R(`WebGLRenderer: Texture marked for update but no image data found.`);else if(r.complete===!1)R(`WebGLRenderer: Texture marked for update but image is incomplete`);else{be(n,e,t);return}}else e.isExternalTexture&&(n.__webglTexture=e.sourceTexture?e.sourceTexture:null);d.bindTexture(l.TEXTURE_2D,n.__webglTexture,l.TEXTURE0+t)}function ue(e,t){let n=f.get(e);e.isRenderTargetTexture===!1&&e.version>0&&n.__version!==e.version?be(n,e,t):(e.isExternalTexture&&(n.__webglTexture=e.sourceTexture?e.sourceTexture:null),d.bindTexture(l.TEXTURE_2D_ARRAY,n.__webglTexture,l.TEXTURE0+t))}function de(e,t){let n=f.get(e);e.isRenderTargetTexture===!1&&e.version>0&&n.__version!==e.version?be(n,e,t):d.bindTexture(l.TEXTURE_3D,n.__webglTexture,l.TEXTURE0+t)}function fe(e,t){let n=f.get(e);e.isCubeDepthTexture!==!0&&e.version>0&&n.__version!==e.version?xe(n,e,t):d.bindTexture(l.TEXTURE_CUBE_MAP,n.__webglTexture,l.TEXTURE0+t)}let pe={[e]:l.REPEAT,[t]:l.CLAMP_TO_EDGE,[n]:l.MIRRORED_REPEAT},me={[r]:l.NEAREST,[i]:l.NEAREST_MIPMAP_NEAREST,[a]:l.NEAREST_MIPMAP_LINEAR,[o]:l.LINEAR,[s]:l.LINEAR_MIPMAP_NEAREST,[c]:l.LINEAR_MIPMAP_LINEAR},he={512:l.NEVER,519:l.ALWAYS,513:l.LESS,515:l.LEQUAL,514:l.EQUAL,518:l.GEQUAL,516:l.GREATER,517:l.NOTEQUAL};function ge(e,t){if(t.type===1015&&u.has(`OES_texture_float_linear`)===!1&&(t.magFilter===1006||t.magFilter===1007||t.magFilter===1005||t.magFilter===1008||t.minFilter===1006||t.minFilter===1007||t.minFilter===1005||t.minFilter===1008)&&R(`WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),l.texParameteri(e,l.TEXTURE_WRAP_S,pe[t.wrapS]),l.texParameteri(e,l.TEXTURE_WRAP_T,pe[t.wrapT]),(e===l.TEXTURE_3D||e===l.TEXTURE_2D_ARRAY)&&l.texParameteri(e,l.TEXTURE_WRAP_R,pe[t.wrapR]),l.texParameteri(e,l.TEXTURE_MAG_FILTER,me[t.magFilter]),l.texParameteri(e,l.TEXTURE_MIN_FILTER,me[t.minFilter]),t.compareFunction&&(l.texParameteri(e,l.TEXTURE_COMPARE_MODE,l.COMPARE_REF_TO_TEXTURE),l.texParameteri(e,l.TEXTURE_COMPARE_FUNC,he[t.compareFunction])),u.has(`EXT_texture_filter_anisotropic`)===!0){if(t.magFilter===1003||t.minFilter!==1005&&t.minFilter!==1008||t.type===1015&&u.has(`OES_texture_float_linear`)===!1)return;if(t.anisotropy>1||f.get(t).__currentAnisotropy){let n=u.get(`EXT_texture_filter_anisotropic`);l.texParameterf(e,n.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(t.anisotropy,p.getMaxAnisotropy())),f.get(t).__currentAnisotropy=t.anisotropy}}}function _e(e,t){let n=!1;e.__webglInit===void 0&&(e.__webglInit=!0,t.addEventListener(`dispose`,te));let r=t.source,i=S.get(r);i===void 0&&(i={},S.set(r,i));let a=le(t);if(a!==e.__cacheKey){i[a]===void 0&&(i[a]={texture:l.createTexture(),usedTimes:0},h.memory.textures++,n=!0),i[a].usedTimes++;let r=i[e.__cacheKey];r!==void 0&&(i[e.__cacheKey].usedTimes--,r.usedTimes===0&&N(t)),e.__cacheKey=a,e.__webglTexture=i[a].texture}return n}function ve(e,t,n){return Math.floor(Math.floor(e/n)/t)}function ye(e,t,n,r){let i=e.updateRanges;if(i.length===0)d.texSubImage2D(l.TEXTURE_2D,0,0,0,t.width,t.height,n,r,t.data);else{i.sort((e,t)=>e.start-t.start);let a=0;for(let e=1;e<i.length;e++){let n=i[a],r=i[e],o=n.start+n.count,s=ve(r.start,t.width,4),c=ve(n.start,t.width,4);r.start<=o+1&&s===c&&ve(r.start+r.count-1,t.width,4)===s?n.count=Math.max(n.count,r.start+r.count-n.start):(++a,i[a]=r)}i.length=a+1;let o=d.getParameter(l.UNPACK_ROW_LENGTH),s=d.getParameter(l.UNPACK_SKIP_PIXELS),c=d.getParameter(l.UNPACK_SKIP_ROWS);d.pixelStorei(l.UNPACK_ROW_LENGTH,t.width);for(let e=0,a=i.length;e<a;e++){let a=i[e],o=Math.floor(a.start/4),s=Math.ceil(a.count/4),c=o%t.width,u=Math.floor(o/t.width),f=s;d.pixelStorei(l.UNPACK_SKIP_PIXELS,c),d.pixelStorei(l.UNPACK_SKIP_ROWS,u),d.texSubImage2D(l.TEXTURE_2D,0,c,u,f,1,n,r,t.data)}e.clearUpdateRanges(),d.pixelStorei(l.UNPACK_ROW_LENGTH,o),d.pixelStorei(l.UNPACK_SKIP_PIXELS,s),d.pixelStorei(l.UNPACK_SKIP_ROWS,c)}}function be(e,t,n){let r=l.TEXTURE_2D;(t.isDataArrayTexture||t.isCompressedArrayTexture)&&(r=l.TEXTURE_2D_ARRAY),t.isData3DTexture&&(r=l.TEXTURE_3D);let i=_e(e,t),a=t.source;d.bindTexture(r,e.__webglTexture,l.TEXTURE0+n);let o=f.get(a);if(a.version!==o.__version||i===!0){if(d.activeTexture(l.TEXTURE0+n),!(typeof ImageBitmap<`u`&&t.image instanceof ImageBitmap)){let e=bt.getPrimaries(bt.workingColorSpace),n=t.colorSpace===``?null:bt.getPrimaries(t.colorSpace),r=t.colorSpace===``||e===n?l.NONE:l.BROWSER_DEFAULT_WEBGL;d.pixelStorei(l.UNPACK_FLIP_Y_WEBGL,t.flipY),d.pixelStorei(l.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),d.pixelStorei(l.UNPACK_COLORSPACE_CONVERSION_WEBGL,r)}d.pixelStorei(l.UNPACK_ALIGNMENT,t.unpackAlignment);let e=T(t.image,!1,p.maxTextureSize);e=Pe(t,e);let s=m.convert(t.format,t.colorSpace),c=m.convert(t.type),u=A(t.internalFormat,s,c,t.normalized,t.colorSpace,t.isVideoTexture);ge(r,t);let f,h=t.mipmaps,g=t.isVideoTexture!==!0,_=o.__version===void 0||i===!0,v=a.dataReady,y=j(t,e);if(t.isDepthTexture)u=ee(t.format===E,t.type),_&&(g?d.texStorage2D(l.TEXTURE_2D,1,u,e.width,e.height):d.texImage2D(l.TEXTURE_2D,0,u,e.width,e.height,0,s,c,null));else if(t.isDataTexture){if(h.length>0){g&&_&&d.texStorage2D(l.TEXTURE_2D,y,u,h[0].width,h[0].height);for(let e=0,t=h.length;e<t;e++)f=h[e],g?v&&d.texSubImage2D(l.TEXTURE_2D,e,0,0,f.width,f.height,s,c,f.data):d.texImage2D(l.TEXTURE_2D,e,u,f.width,f.height,0,s,c,f.data);t.generateMipmaps=!1}else g?(_&&d.texStorage2D(l.TEXTURE_2D,y,u,e.width,e.height),v&&ye(t,e,s,c)):d.texImage2D(l.TEXTURE_2D,0,u,e.width,e.height,0,s,c,e.data)}else if(t.isCompressedTexture){if(t.isCompressedArrayTexture){g&&_&&d.texStorage3D(l.TEXTURE_2D_ARRAY,y,u,h[0].width,h[0].height,e.depth);for(let n=0,r=h.length;n<r;n++)if(f=h[n],t.format!==1023){if(s!==null){if(g){if(v){if(t.layerUpdates.size>0){let e=ta(f.width,f.height,t.format,t.type);for(let r of t.layerUpdates){let t=f.data.subarray(r*e/f.data.BYTES_PER_ELEMENT,(r+1)*e/f.data.BYTES_PER_ELEMENT);d.compressedTexSubImage3D(l.TEXTURE_2D_ARRAY,n,0,0,r,f.width,f.height,1,s,t)}}else d.compressedTexSubImage3D(l.TEXTURE_2D_ARRAY,n,0,0,0,f.width,f.height,e.depth,s,f.data)}}else d.compressedTexImage3D(l.TEXTURE_2D_ARRAY,n,u,f.width,f.height,e.depth,0,f.data,0,0)}else R(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`)}else g?v&&d.texSubImage3D(l.TEXTURE_2D_ARRAY,n,0,0,0,f.width,f.height,e.depth,s,c,f.data):d.texImage3D(l.TEXTURE_2D_ARRAY,n,u,f.width,f.height,e.depth,0,s,c,f.data);t.layerUpdates.size>0&&t.clearLayerUpdates()}else{g&&_&&d.texStorage2D(l.TEXTURE_2D,y,u,h[0].width,h[0].height);for(let e=0,n=h.length;e<n;e++)f=h[e],t.format===1023?g?v&&d.texSubImage2D(l.TEXTURE_2D,e,0,0,f.width,f.height,s,c,f.data):d.texImage2D(l.TEXTURE_2D,e,u,f.width,f.height,0,s,c,f.data):s===null?R(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):g?v&&d.compressedTexSubImage2D(l.TEXTURE_2D,e,0,0,f.width,f.height,s,f.data):d.compressedTexImage2D(l.TEXTURE_2D,e,u,f.width,f.height,0,f.data)}}else if(t.isDataArrayTexture){if(g){if(_&&d.texStorage3D(l.TEXTURE_2D_ARRAY,y,u,e.width,e.height,e.depth),v){if(t.layerUpdates.size>0){let n=ta(e.width,e.height,t.format,t.type);for(let r of t.layerUpdates){let t=e.data.subarray(r*n/e.data.BYTES_PER_ELEMENT,(r+1)*n/e.data.BYTES_PER_ELEMENT);d.texSubImage3D(l.TEXTURE_2D_ARRAY,0,0,0,r,e.width,e.height,1,s,c,t)}t.clearLayerUpdates()}else d.texSubImage3D(l.TEXTURE_2D_ARRAY,0,0,0,0,e.width,e.height,e.depth,s,c,e.data)}}else d.texImage3D(l.TEXTURE_2D_ARRAY,0,u,e.width,e.height,e.depth,0,s,c,e.data)}else if(t.isData3DTexture)g?(_&&d.texStorage3D(l.TEXTURE_3D,y,u,e.width,e.height,e.depth),v&&d.texSubImage3D(l.TEXTURE_3D,0,0,0,0,e.width,e.height,e.depth,s,c,e.data)):d.texImage3D(l.TEXTURE_3D,0,u,e.width,e.height,e.depth,0,s,c,e.data);else if(t.isFramebufferTexture){if(_){if(g)d.texStorage2D(l.TEXTURE_2D,y,u,e.width,e.height);else{let t=e.width,n=e.height;for(let e=0;e<y;e++)d.texImage2D(l.TEXTURE_2D,e,u,t,n,0,s,c,null),t>>=1,n>>=1}}}else if(t.isHTMLTexture){if(`texElementImage2D`in l){let n=l.canvas;if(n.hasAttribute(`layoutsubtree`)||n.setAttribute(`layoutsubtree`,`true`),e.parentNode!==n){n.appendChild(e),b.add(t),n.onpaint=e=>{let t=e.changedElements;for(let e of b)t.includes(e.image)&&(e.needsUpdate=!0)},n.requestPaint();return}if(l.texElementImage2D.length===3)l.texElementImage2D(l.TEXTURE_2D,l.RGBA8,e);else{let t=l.RGBA,n=l.RGBA,r=l.UNSIGNED_BYTE;l.texElementImage2D(l.TEXTURE_2D,0,t,n,r,e)}l.texParameteri(l.TEXTURE_2D,l.TEXTURE_MIN_FILTER,l.LINEAR),l.texParameteri(l.TEXTURE_2D,l.TEXTURE_WRAP_S,l.CLAMP_TO_EDGE),l.texParameteri(l.TEXTURE_2D,l.TEXTURE_WRAP_T,l.CLAMP_TO_EDGE)}}else if(h.length>0){if(g&&_){let e=Fe(h[0]);d.texStorage2D(l.TEXTURE_2D,y,u,e.width,e.height)}for(let e=0,t=h.length;e<t;e++)f=h[e],g?v&&d.texSubImage2D(l.TEXTURE_2D,e,0,0,s,c,f):d.texImage2D(l.TEXTURE_2D,e,u,s,c,f);t.generateMipmaps=!1}else if(g){if(_){let t=Fe(e);d.texStorage2D(l.TEXTURE_2D,y,u,t.width,t.height)}v&&d.texSubImage2D(l.TEXTURE_2D,0,0,0,s,c,e)}else d.texImage2D(l.TEXTURE_2D,0,u,s,c,e);D(t)&&O(r),o.__version=a.version,t.onUpdate&&t.onUpdate(t)}e.__version=t.version}function xe(e,t,n){if(t.image.length!==6)return;let r=_e(e,t),i=t.source;d.bindTexture(l.TEXTURE_CUBE_MAP,e.__webglTexture,l.TEXTURE0+n);let a=f.get(i);if(i.version!==a.__version||r===!0){d.activeTexture(l.TEXTURE0+n);let e=bt.getPrimaries(bt.workingColorSpace),o=t.colorSpace===``?null:bt.getPrimaries(t.colorSpace),s=t.colorSpace===``||e===o?l.NONE:l.BROWSER_DEFAULT_WEBGL;d.pixelStorei(l.UNPACK_FLIP_Y_WEBGL,t.flipY),d.pixelStorei(l.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),d.pixelStorei(l.UNPACK_ALIGNMENT,t.unpackAlignment),d.pixelStorei(l.UNPACK_COLORSPACE_CONVERSION_WEBGL,s);let c=t.isCompressedTexture||t.image[0].isCompressedTexture,u=t.image[0]&&t.image[0].isDataTexture,f=[];for(let e=0;e<6;e++)!c&&!u?f[e]=T(t.image[e],!0,p.maxCubemapSize):f[e]=u?t.image[e].image:t.image[e],f[e]=Pe(t,f[e]);let h=f[0],g=m.convert(t.format,t.colorSpace),_=m.convert(t.type),v=A(t.internalFormat,g,_,t.normalized,t.colorSpace),y=t.isVideoTexture!==!0,b=a.__version===void 0||r===!0,x=i.dataReady,S=j(t,h);ge(l.TEXTURE_CUBE_MAP,t);let C;if(c){y&&b&&d.texStorage2D(l.TEXTURE_CUBE_MAP,S,v,h.width,h.height);for(let e=0;e<6;e++){C=f[e].mipmaps;for(let n=0;n<C.length;n++){let r=C[n];t.format===1023?y?x&&d.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,n,0,0,r.width,r.height,g,_,r.data):d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,n,v,r.width,r.height,0,g,_,r.data):g===null?R(`WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):y?x&&d.compressedTexSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,n,0,0,r.width,r.height,g,r.data):d.compressedTexImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,n,v,r.width,r.height,0,r.data)}}}else{if(C=t.mipmaps,y&&b){C.length>0&&S++;let e=Fe(f[0]);d.texStorage2D(l.TEXTURE_CUBE_MAP,S,v,e.width,e.height)}for(let e=0;e<6;e++)if(u){y?x&&d.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,0,0,f[e].width,f[e].height,g,_,f[e].data):d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,v,f[e].width,f[e].height,0,g,_,f[e].data);for(let t=0;t<C.length;t++){let n=C[t].image[e].image;y?x&&d.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,t+1,0,0,n.width,n.height,g,_,n.data):d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,t+1,v,n.width,n.height,0,g,_,n.data)}}else{y?x&&d.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,0,0,g,_,f[e]):d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,v,g,_,f[e]);for(let t=0;t<C.length;t++){let n=C[t];y?x&&d.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,t+1,0,0,g,_,n.image[e]):d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,t+1,v,g,_,n.image[e])}}}D(t)&&O(l.TEXTURE_CUBE_MAP),a.__version=i.version,t.onUpdate&&t.onUpdate(t)}e.__version=t.version}function Se(e,t,n,r,i,a){let o=m.convert(n.format,n.colorSpace),s=m.convert(n.type),c=A(n.internalFormat,o,s,n.normalized,n.colorSpace),u=f.get(t),p=f.get(n);if(p.__renderTarget=t,!u.__hasExternalTextures){let e=Math.max(1,t.width>>a),n=Math.max(1,t.height>>a);i===l.TEXTURE_3D||i===l.TEXTURE_2D_ARRAY?d.texImage3D(i,a,c,e,n,t.depth,0,o,s,null):d.texImage2D(i,a,c,e,n,0,o,s,null)}d.bindFramebuffer(l.FRAMEBUFFER,e),Ne(t)?g.framebufferTexture2DMultisampleEXT(l.FRAMEBUFFER,r,i,p.__webglTexture,0,Me(t)):(i===l.TEXTURE_2D||i>=l.TEXTURE_CUBE_MAP_POSITIVE_X&&i<=l.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&l.framebufferTexture2D(l.FRAMEBUFFER,r,i,p.__webglTexture,a),d.bindFramebuffer(l.FRAMEBUFFER,null)}function Ce(e,t,n){if(l.bindRenderbuffer(l.RENDERBUFFER,e),t.depthBuffer){let r=t.depthTexture,i=r&&r.isDepthTexture?r.type:null,a=ee(t.stencilBuffer,i),o=t.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT;Ne(t)?g.renderbufferStorageMultisampleEXT(l.RENDERBUFFER,Me(t),a,t.width,t.height):n?l.renderbufferStorageMultisample(l.RENDERBUFFER,Me(t),a,t.width,t.height):l.renderbufferStorage(l.RENDERBUFFER,a,t.width,t.height),l.framebufferRenderbuffer(l.FRAMEBUFFER,o,l.RENDERBUFFER,e)}else{let e=t.textures;for(let r=0;r<e.length;r++){let i=e[r],a=m.convert(i.format,i.colorSpace),o=m.convert(i.type),s=A(i.internalFormat,a,o,i.normalized,i.colorSpace);Ne(t)?g.renderbufferStorageMultisampleEXT(l.RENDERBUFFER,Me(t),s,t.width,t.height):n?l.renderbufferStorageMultisample(l.RENDERBUFFER,Me(t),s,t.width,t.height):l.renderbufferStorage(l.RENDERBUFFER,s,t.width,t.height)}}l.bindRenderbuffer(l.RENDERBUFFER,null)}function we(e,t,n){let r=t.isWebGLCubeRenderTarget===!0;if(d.bindFramebuffer(l.FRAMEBUFFER,e),!(t.depthTexture&&t.depthTexture.isDepthTexture))throw Error(`THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.`);let i=f.get(t.depthTexture);if(i.__renderTarget=t,i.__webglTexture&&t.depthTexture.image.width===t.width&&t.depthTexture.image.height===t.height||(t.depthTexture.image.width=t.width,t.depthTexture.image.height=t.height,t.depthTexture.needsUpdate=!0),r){if(i.__webglInit===void 0&&(i.__webglInit=!0,t.depthTexture.addEventListener(`dispose`,te)),i.__webglTexture===void 0){i.__webglTexture=l.createTexture(),d.bindTexture(l.TEXTURE_CUBE_MAP,i.__webglTexture),ge(l.TEXTURE_CUBE_MAP,t.depthTexture);let e=m.convert(t.depthTexture.format),n=m.convert(t.depthTexture.type),r;t.depthTexture.format===1026?r=l.DEPTH_COMPONENT24:t.depthTexture.format===1027&&(r=l.DEPTH24_STENCIL8);for(let i=0;i<6;i++)l.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+i,0,r,t.width,t.height,0,e,n,null)}}else P(t.depthTexture,0);let a=i.__webglTexture,o=Me(t),s=r?l.TEXTURE_CUBE_MAP_POSITIVE_X+n:l.TEXTURE_2D,c=t.depthTexture.format===1027?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT;if(t.depthTexture.format===1026)Ne(t)?g.framebufferTexture2DMultisampleEXT(l.FRAMEBUFFER,c,s,a,0,o):l.framebufferTexture2D(l.FRAMEBUFFER,c,s,a,0);else if(t.depthTexture.format===1027)Ne(t)?g.framebufferTexture2DMultisampleEXT(l.FRAMEBUFFER,c,s,a,0,o):l.framebufferTexture2D(l.FRAMEBUFFER,c,s,a,0);else throw Error(`THREE.WebGLTextures: Unknown depthTexture format.`)}function Te(e){let t=f.get(e),n=e.isWebGLCubeRenderTarget===!0;if(t.__boundDepthTexture!==e.depthTexture){let n=e.depthTexture;if(t.__depthDisposeCallback&&t.__depthDisposeCallback(),n){let e=()=>{delete t.__boundDepthTexture,delete t.__depthDisposeCallback,n.removeEventListener(`dispose`,e)};n.addEventListener(`dispose`,e),t.__depthDisposeCallback=e}t.__boundDepthTexture=n}if(e.depthTexture&&!t.__autoAllocateDepthBuffer){if(n)for(let n=0;n<6;n++)we(t.__webglFramebuffer[n],e,n);else{let n=e.texture.mipmaps;n&&n.length>0?we(t.__webglFramebuffer[0],e,0):we(t.__webglFramebuffer,e,0)}}else if(n){t.__webglDepthbuffer=[];for(let n=0;n<6;n++)if(d.bindFramebuffer(l.FRAMEBUFFER,t.__webglFramebuffer[n]),t.__webglDepthbuffer[n]===void 0)t.__webglDepthbuffer[n]=l.createRenderbuffer(),Ce(t.__webglDepthbuffer[n],e,!1);else{let r=e.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT,i=t.__webglDepthbuffer[n];l.bindRenderbuffer(l.RENDERBUFFER,i),l.framebufferRenderbuffer(l.FRAMEBUFFER,r,l.RENDERBUFFER,i)}}else{let n=e.texture.mipmaps;if(n&&n.length>0?d.bindFramebuffer(l.FRAMEBUFFER,t.__webglFramebuffer[0]):d.bindFramebuffer(l.FRAMEBUFFER,t.__webglFramebuffer),t.__webglDepthbuffer===void 0)t.__webglDepthbuffer=l.createRenderbuffer(),Ce(t.__webglDepthbuffer,e,!1);else{let n=e.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT,r=t.__webglDepthbuffer;l.bindRenderbuffer(l.RENDERBUFFER,r),l.framebufferRenderbuffer(l.FRAMEBUFFER,n,l.RENDERBUFFER,r)}}d.bindFramebuffer(l.FRAMEBUFFER,null)}function Ee(e,t,n){let r=f.get(e);t!==void 0&&Se(r.__webglFramebuffer,e,e.texture,l.COLOR_ATTACHMENT0,l.TEXTURE_2D,0),n!==void 0&&Te(e)}function De(e){let t=e.texture,n=f.get(e),r=f.get(t);e.addEventListener(`dispose`,M);let i=e.textures,a=e.isWebGLCubeRenderTarget===!0,o=i.length>1;if(o||(r.__webglTexture===void 0&&(r.__webglTexture=l.createTexture()),r.__version=t.version,h.memory.textures++),a){n.__webglFramebuffer=[];for(let e=0;e<6;e++)if(t.mipmaps&&t.mipmaps.length>0){n.__webglFramebuffer[e]=[];for(let r=0;r<t.mipmaps.length;r++)n.__webglFramebuffer[e][r]=l.createFramebuffer()}else n.__webglFramebuffer[e]=l.createFramebuffer()}else{if(t.mipmaps&&t.mipmaps.length>0){n.__webglFramebuffer=[];for(let e=0;e<t.mipmaps.length;e++)n.__webglFramebuffer[e]=l.createFramebuffer()}else n.__webglFramebuffer=l.createFramebuffer();if(o)for(let e=0,t=i.length;e<t;e++){let t=f.get(i[e]);t.__webglTexture===void 0&&(t.__webglTexture=l.createTexture(),h.memory.textures++)}if(e.samples>0&&Ne(e)===!1){n.__webglMultisampledFramebuffer=l.createFramebuffer(),n.__webglColorRenderbuffer=[],d.bindFramebuffer(l.FRAMEBUFFER,n.__webglMultisampledFramebuffer);for(let t=0;t<i.length;t++){let r=i[t];n.__webglColorRenderbuffer[t]=l.createRenderbuffer(),l.bindRenderbuffer(l.RENDERBUFFER,n.__webglColorRenderbuffer[t]);let a=m.convert(r.format,r.colorSpace),o=m.convert(r.type),s=A(r.internalFormat,a,o,r.normalized,r.colorSpace,e.isXRRenderTarget===!0),c=Me(e);l.renderbufferStorageMultisample(l.RENDERBUFFER,c,s,e.width,e.height),l.framebufferRenderbuffer(l.FRAMEBUFFER,l.COLOR_ATTACHMENT0+t,l.RENDERBUFFER,n.__webglColorRenderbuffer[t])}l.bindRenderbuffer(l.RENDERBUFFER,null),e.depthBuffer&&(n.__webglDepthRenderbuffer=l.createRenderbuffer(),Ce(n.__webglDepthRenderbuffer,e,!0)),d.bindFramebuffer(l.FRAMEBUFFER,null)}}if(a){d.bindTexture(l.TEXTURE_CUBE_MAP,r.__webglTexture),ge(l.TEXTURE_CUBE_MAP,t);for(let r=0;r<6;r++)if(t.mipmaps&&t.mipmaps.length>0)for(let i=0;i<t.mipmaps.length;i++)Se(n.__webglFramebuffer[r][i],e,t,l.COLOR_ATTACHMENT0,l.TEXTURE_CUBE_MAP_POSITIVE_X+r,i);else Se(n.__webglFramebuffer[r],e,t,l.COLOR_ATTACHMENT0,l.TEXTURE_CUBE_MAP_POSITIVE_X+r,0);D(t)&&O(l.TEXTURE_CUBE_MAP),d.unbindTexture()}else if(o){for(let t=0,r=i.length;t<r;t++){let r=i[t],a=f.get(r),o=l.TEXTURE_2D;(e.isWebGL3DRenderTarget||e.isWebGLArrayRenderTarget)&&(o=e.isWebGL3DRenderTarget?l.TEXTURE_3D:l.TEXTURE_2D_ARRAY),d.bindTexture(o,a.__webglTexture),ge(o,r),Se(n.__webglFramebuffer,e,r,l.COLOR_ATTACHMENT0+t,o,0),D(r)&&O(o)}d.unbindTexture()}else{let i=l.TEXTURE_2D;if((e.isWebGL3DRenderTarget||e.isWebGLArrayRenderTarget)&&(i=e.isWebGL3DRenderTarget?l.TEXTURE_3D:l.TEXTURE_2D_ARRAY),d.bindTexture(i,r.__webglTexture),ge(i,t),t.mipmaps&&t.mipmaps.length>0)for(let r=0;r<t.mipmaps.length;r++)Se(n.__webglFramebuffer[r],e,t,l.COLOR_ATTACHMENT0,i,r);else Se(n.__webglFramebuffer,e,t,l.COLOR_ATTACHMENT0,i,0);D(t)&&O(i),d.unbindTexture()}e.depthBuffer&&Te(e)}function Oe(e){let t=e.textures;for(let n=0,r=t.length;n<r;n++){let r=t[n];if(D(r)){let t=k(e),n=f.get(r).__webglTexture;d.bindTexture(t,n),O(t),d.unbindTexture()}}}let ke=[],Ae=[];function je(e){if(e.samples>0){if(Ne(e)===!1){let t=e.textures,n=e.width,r=e.height,i=l.COLOR_BUFFER_BIT,a=e.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT,o=f.get(e),s=t.length>1;if(s)for(let e=0;e<t.length;e++)d.bindFramebuffer(l.FRAMEBUFFER,o.__webglMultisampledFramebuffer),l.framebufferRenderbuffer(l.FRAMEBUFFER,l.COLOR_ATTACHMENT0+e,l.RENDERBUFFER,null),d.bindFramebuffer(l.FRAMEBUFFER,o.__webglFramebuffer),l.framebufferTexture2D(l.DRAW_FRAMEBUFFER,l.COLOR_ATTACHMENT0+e,l.TEXTURE_2D,null,0);d.bindFramebuffer(l.READ_FRAMEBUFFER,o.__webglMultisampledFramebuffer);let c=e.texture.mipmaps;c&&c.length>0?d.bindFramebuffer(l.DRAW_FRAMEBUFFER,o.__webglFramebuffer[0]):d.bindFramebuffer(l.DRAW_FRAMEBUFFER,o.__webglFramebuffer);for(let c=0;c<t.length;c++){if(e.resolveDepthBuffer&&(e.depthBuffer&&(i|=l.DEPTH_BUFFER_BIT),e.stencilBuffer&&e.resolveStencilBuffer&&(i|=l.STENCIL_BUFFER_BIT)),s){l.framebufferRenderbuffer(l.READ_FRAMEBUFFER,l.COLOR_ATTACHMENT0,l.RENDERBUFFER,o.__webglColorRenderbuffer[c]);let e=f.get(t[c]).__webglTexture;l.framebufferTexture2D(l.DRAW_FRAMEBUFFER,l.COLOR_ATTACHMENT0,l.TEXTURE_2D,e,0)}l.blitFramebuffer(0,0,n,r,0,0,n,r,i,l.NEAREST),_===!0&&(ke.length=0,Ae.length=0,ke.push(l.COLOR_ATTACHMENT0+c),e.depthBuffer&&e.storeMultisampledDepthBuffer===!1&&(ke.push(a),Ae.push(a),l.invalidateFramebuffer(l.DRAW_FRAMEBUFFER,Ae)),l.invalidateFramebuffer(l.READ_FRAMEBUFFER,ke))}if(d.bindFramebuffer(l.READ_FRAMEBUFFER,null),d.bindFramebuffer(l.DRAW_FRAMEBUFFER,null),s)for(let e=0;e<t.length;e++){d.bindFramebuffer(l.FRAMEBUFFER,o.__webglMultisampledFramebuffer),l.framebufferRenderbuffer(l.FRAMEBUFFER,l.COLOR_ATTACHMENT0+e,l.RENDERBUFFER,o.__webglColorRenderbuffer[e]);let n=f.get(t[e]).__webglTexture;d.bindFramebuffer(l.FRAMEBUFFER,o.__webglFramebuffer),l.framebufferTexture2D(l.DRAW_FRAMEBUFFER,l.COLOR_ATTACHMENT0+e,l.TEXTURE_2D,n,0)}d.bindFramebuffer(l.DRAW_FRAMEBUFFER,o.__webglMultisampledFramebuffer)}else if(e.depthBuffer&&e.storeMultisampledDepthBuffer===!1&&_){let t=e.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT;l.invalidateFramebuffer(l.DRAW_FRAMEBUFFER,[t])}}}function Me(e){return Math.min(p.maxSamples,e.samples)}function Ne(e){let t=f.get(e);return e.samples>0&&u.has(`WEBGL_multisampled_render_to_texture`)===!0&&t.__useRenderToTexture!==!1}function F(e){let t=h.render.frame;y.get(e)!==t&&(y.set(e,t),e.update())}function Pe(e,t){let n=e.colorSpace,r=e.format,i=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||n!==`srgb-linear`&&n!==``&&(bt.getTransfer(n)===`srgb`?(r!==1023||i!==1009)&&R(`WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):z(`WebGLTextures: Unsupported texture color space:`,n)),t}function Fe(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement?(v.width=e.naturalWidth||e.width,v.height=e.naturalHeight||e.height):typeof VideoFrame<`u`&&e instanceof VideoFrame?(v.width=e.displayWidth,v.height=e.displayHeight):(v.width=e.width,v.height=e.height),v}this.allocateTextureUnit=ce,this.resetTextureUnits=ae,this.getTextureUnits=oe,this.setTextureUnits=se,this.setTexture2D=P,this.setTexture2DArray=ue,this.setTexture3D=de,this.setTextureCube=fe,this.rebindTextures=Ee,this.setupRenderTarget=De,this.updateRenderTargetMipmap=Oe,this.updateMultisampleRenderTarget=je,this.setupDepthRenderbuffer=Te,this.setupFrameBufferTexture=Se,this.useMultisampledRTT=Ne,this.isReversedDepthBuffer=function(){return d.buffers.depth.getReversed()}}function cc(e,t){function n(n,r=``){let i,a=bt.getTransfer(r);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return e.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===1023)return e.RGBA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779){if(a===`srgb`){if(i=t.get(`WEBGL_compressed_texture_s3tc_srgb`),i!==null){if(n===33776)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null}else if(i=t.get(`WEBGL_compressed_texture_s3tc`),i!==null){if(n===33776)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null}if(n===35840||n===35841||n===35842||n===35843){if(i=t.get(`WEBGL_compressed_texture_pvrtc`),i!==null){if(n===35840)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null}if(n===36196||n===37492||n===37496||n===37488||n===37489||n===37490||n===37491){if(i=t.get(`WEBGL_compressed_texture_etc`),i!==null){if(n===36196||n===37492)return a===`srgb`?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===37496)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC;if(n===37488)return i.COMPRESSED_R11_EAC;if(n===37489)return i.COMPRESSED_SIGNED_R11_EAC;if(n===37490)return i.COMPRESSED_RG11_EAC;if(n===37491)return i.COMPRESSED_SIGNED_RG11_EAC}else return null}if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821){if(i=t.get(`WEBGL_compressed_texture_astc`),i!==null){if(n===37808)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null}if(n===36492||n===36494||n===36495){if(i=t.get(`EXT_texture_compression_bptc`),i!==null){if(n===36492)return a===`srgb`?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null}if(n===36283||n===36284||n===36285||n===36286){if(i=t.get(`EXT_texture_compression_rgtc`),i!==null){if(n===36283)return i.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null}return n===1020?e.UNSIGNED_INT_24_8:e[n]===void 0?null:e[n]}return{convert:n}}var lc=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,uc=`
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

}`,dc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Xr(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new si({vertexShader:lc,fragmentShader:uc,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Rr(new Qr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},fc=class extends rt{constructor(e,t){super();let n=this,r=null,i=1,a=null,o=`local-floor`,s=1,c=null,u=null,d=null,f=null,p=null,h=null,g=typeof XRWebGLBinding<`u`,_=new dc,v={},b=t.getContextAttributes(),x=null,S=null,C=[],D=[],O=new ft,k=null,A=null,ee=new Li;ee.viewport=new jt;let j=new Li;j.viewport=new jt;let te=[ee,j],M=new Hi,ne=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=C[e];return t===void 0&&(t=new pn,C[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=C[e];return t===void 0&&(t=new pn,C[e]=t),t.getGripSpace()},this.getHand=function(e){let t=C[e];return t===void 0&&(t=new pn,C[e]=t),t.getHandSpace()};function re(e){let t=D.indexOf(e.inputSource);if(t===-1)return;let n=C[t];n!==void 0&&(n.update(e.inputSource,e.frame,c||a),n.dispatchEvent({type:e.type,data:e.inputSource}))}function ie(){r.removeEventListener(`select`,re),r.removeEventListener(`selectstart`,re),r.removeEventListener(`selectend`,re),r.removeEventListener(`squeeze`,re),r.removeEventListener(`squeezestart`,re),r.removeEventListener(`squeezeend`,re),r.removeEventListener(`end`,ie),r.removeEventListener(`inputsourceschange`,ae);for(let e=0;e<C.length;e++){let t=D[e];t!==null&&(D[e]=null,C[e].disconnect(t))}ne=null,N=null,_.reset();for(let e in v)delete v[e];if(e.setRenderTarget(x),p=null,f=null,d=null,r=null,S=null,fe.stop(),n.isPresenting=!1,e.setPixelRatio(k),e.setSize(O.width,O.height,!1),A!==null){let e=A.camera;e.fov=A.fov,e.zoom=A.zoom,e.updateProjectionMatrix(),A=null}n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){i=e,n.isPresenting===!0&&R(`WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){o=e,n.isPresenting===!0&&R(`WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(e){c=e},this.getBaseLayer=function(){return f===null?p:f},this.getBinding=function(){return d===null&&g&&(d=new XRWebGLBinding(r,t)),d},this.getFrame=function(){return h},this.getSession=function(){return r},this.setSession=async function(u){if(r=u,r!==null){if(x=e.getRenderTarget(),r.addEventListener(`select`,re),r.addEventListener(`selectstart`,re),r.addEventListener(`selectend`,re),r.addEventListener(`squeeze`,re),r.addEventListener(`squeezestart`,re),r.addEventListener(`squeezeend`,re),r.addEventListener(`end`,ie),r.addEventListener(`inputsourceschange`,ae),b.xrCompatible!==!0&&await t.makeXRCompatible(),k=e.getPixelRatio(),e.getSize(O),g&&`createProjectionLayer`in XRWebGLBinding.prototype){let n=null,a=null,o=null;b.depth&&(o=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,n=b.stencil?E:T,a=b.stencil?y:m);let s={colorFormat:t.RGBA8,depthFormat:o,scaleFactor:i};d=this.getBinding(),f=d.createProjectionLayer(s),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),S=new Nt(f.textureWidth,f.textureHeight,{format:w,type:l,depthTexture:new Jr(f.textureWidth,f.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let n={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:i};p=new XRWebGLLayer(r,t,n),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new Nt(p.framebufferWidth,p.framebufferHeight,{format:w,type:l,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(s),c=null,a=await r.requestReferenceSpace(o),fe.setContext(r),fe.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function ae(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=D.indexOf(n);r>=0&&(D[r]=null,C[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=D.indexOf(n);if(r===-1){for(let e=0;e<C.length;e++)if(e>=D.length){D.push(n),r=e;break}else if(D[e]===null){D[e]=n,r=e;break}if(r===-1)break}let i=C[r];i&&i.connect(n)}}let oe=new V,se=new V;function ce(e,t,n){oe.setFromMatrixPosition(t.matrixWorld),se.setFromMatrixPosition(n.matrixWorld);let r=oe.distanceTo(se),i=t.projectionMatrix.elements,a=n.projectionMatrix.elements,o=i[14]/(i[10]-1),s=i[14]/(i[10]+1),c=(i[9]+1)/i[5],l=(i[9]-1)/i[5],u=(i[8]-1)/i[0],d=(a[8]+1)/a[0],f=o*u,p=o*d,m=r/(-u+d),h=m*-u;if(t.matrixWorld.decompose(e.position,e.quaternion,e.scale),e.translateX(h),e.translateZ(m),e.matrixWorld.compose(e.position,e.quaternion,e.scale),e.matrixWorldInverse.copy(e.matrixWorld).invert(),i[10]===-1)e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse);else{let t=o+m,n=s+m,i=f-h,a=p+(r-h),u=c*s/n*t,d=l*s/n*t;e.projectionMatrix.makePerspective(i,a,u,d,t,n),e.projectionMatrixInverse.copy(e.projectionMatrix).invert()}}function le(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(r===null)return;let t=e.near,n=e.far;_.texture!==null&&(_.depthNear>0&&(t=_.depthNear),_.depthFar>0&&(n=_.depthFar)),M.near=j.near=ee.near=t,M.far=j.far=ee.far=n,(ne!==M.near||N!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),ne=M.near,N=M.far),M.layers.mask=e.layers.mask|6,ee.layers.mask=M.layers.mask&-5,j.layers.mask=M.layers.mask&-3;let i=e.parent,a=M.cameras;le(M,i);for(let e=0;e<a.length;e++)le(a[e],i);a.length===2?ce(M,ee,j):M.projectionMatrix.copy(ee.projectionMatrix),A===null&&e.isPerspectiveCamera&&(A={camera:e,fov:e.fov,zoom:e.zoom}),P(e,M,i)};function P(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=ot*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(f!==null||p!==null)return s},this.setFoveation=function(e){s=e,f!==null&&(f.fixedFoveation=e),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=e)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(M)},this.getCameraTexture=function(e){return v[e]};let ue=null;function de(t,i){if(u=i.getViewerPose(c||a),h=i,u!==null){let t=u.views;p!==null&&(e.setRenderTargetFramebuffer(S,p.framebuffer),e.setRenderTarget(S));let i=!1;t.length!==M.cameras.length&&(M.cameras.length=0,i=!0);for(let n=0;n<t.length;n++){let r=t[n],a=null;if(p!==null)a=p.getViewport(r);else{let t=d.getViewSubImage(f,r);a=t.viewport,n===0&&(e.setRenderTargetTextures(S,t.colorTexture,t.depthStencilTexture),e.setRenderTarget(S))}let o=te[n];o===void 0&&(o=new Li,o.layers.enable(n),o.viewport=new jt,te[n]=o),o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.projectionMatrix.fromArray(r.projectionMatrix),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),o.viewport.set(a.x,a.y,a.width,a.height),n===0&&(M.matrix.copy(o.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),i===!0&&M.cameras.push(o)}let a=r.enabledFeatures;if(a&&a.includes(`depth-sensing`)&&r.depthUsage==`gpu-optimized`&&g){d=n.getBinding();let e=d.getDepthInformation(t[0]);e&&e.isValid&&e.texture&&_.init(e,r.renderState)}if(a&&a.includes(`camera-access`)&&g){e.state.unbindTexture(),d=n.getBinding();for(let e=0;e<t.length;e++){let n=t[e].camera;if(n){let e=v[n];e||(e=new Xr,v[n]=e);let t=d.getCameraImage(n);e.sourceTexture=t}}}}for(let e=0;e<C.length;e++){let t=D[e],n=C[e];t!==null&&n!==void 0&&n.update(t,i,c||a)}ue&&ue(t,i),i.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:i}),h=null}let fe=new ra;fe.setAnimationLoop(de),this.setAnimationLoop=function(e){ue=e},this.dispose=function(){}}},pc=new It,mc=new H;mc.set(-1,0,0,0,1,0,0,0,1);function hc(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,ri(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isNodeMaterial?t.uniformsNeedUpdate=!1:t.isMeshBasicMaterial?a(e,t):t.isMeshLambertMaterial?(a(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshToonMaterial?(a(e,t),d(e,t)):t.isMeshPhongMaterial?(a(e,t),u(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshStandardMaterial?(a(e,t),f(e,t),t.isMeshPhysicalMaterial&&p(e,t,i)):t.isMeshMatcapMaterial?(a(e,t),m(e,t)):t.isMeshDepthMaterial?a(e,t):t.isMeshDistanceMaterial?(a(e,t),h(e,t)):t.isMeshNormalMaterial?a(e,t):t.isLineBasicMaterial?(o(e,t),t.isLineDashedMaterial&&s(e,t)):t.isPointsMaterial?c(e,t,n,r):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function a(e,r){e.opacity.value=r.opacity,r.color&&e.diffuse.value.copy(r.color),r.emissive&&e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(e.map.value=r.map,n(r.map,e.mapTransform)),r.alphaMap&&(e.alphaMap.value=r.alphaMap,n(r.alphaMap,e.alphaMapTransform)),r.bumpMap&&(e.bumpMap.value=r.bumpMap,n(r.bumpMap,e.bumpMapTransform),e.bumpScale.value=r.bumpScale,r.side===1&&(e.bumpScale.value*=-1)),r.normalMap&&(e.normalMap.value=r.normalMap,n(r.normalMap,e.normalMapTransform),e.normalScale.value.copy(r.normalScale),r.side===1&&e.normalScale.value.negate()),r.displacementMap&&(e.displacementMap.value=r.displacementMap,n(r.displacementMap,e.displacementMapTransform),e.displacementScale.value=r.displacementScale,e.displacementBias.value=r.displacementBias),r.emissiveMap&&(e.emissiveMap.value=r.emissiveMap,n(r.emissiveMap,e.emissiveMapTransform)),r.specularMap&&(e.specularMap.value=r.specularMap,n(r.specularMap,e.specularMapTransform)),r.alphaTest>0&&(e.alphaTest.value=r.alphaTest);let i=t.get(r),a=i.envMap,o=i.envMapRotation;a&&(e.envMap.value=a,e.envMapRotation.value.setFromMatrix4(pc.makeRotationFromEuler(o)).transpose(),a.isCubeTexture&&a.isRenderTargetTexture===!1&&e.envMapRotation.value.premultiply(mc),e.reflectivity.value=r.reflectivity,e.ior.value=r.ior,e.refractionRatio.value=r.refractionRatio),r.lightMap&&(e.lightMap.value=r.lightMap,e.lightMapIntensity.value=r.lightMapIntensity,n(r.lightMap,e.lightMapTransform)),r.aoMap&&(e.aoMap.value=r.aoMap,e.aoMapIntensity.value=r.aoMapIntensity,n(r.aoMap,e.aoMapTransform))}function o(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function s(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function c(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function d(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function f(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}function p(e,t,r){e.ior.value=t.ior,t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.retroreflectivity>0&&(e.retroreflectivity.value=t.retroreflectivity),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessRange[0],e.iridescenceThicknessMaximum.value=t.iridescenceThicknessRange[1],t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function m(e,t){t.matcap&&(e.matcap.value=t.matcap)}function h(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function gc(e,t,n,r){let i={},a={},o=[],s=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function c(e,t){let n=t.program;r.uniformBlockBinding(e,n)}function l(e,n){let o=i[e.id];o===void 0&&(g(e),o=u(e),i[e.id]=o,e.addEventListener(`dispose`,v));let s=n.program;r.updateUBOMapping(e,s);let c=t.render.frame;a[e.id]!==c&&(f(e),a[e.id]=c)}function u(t){let n=d();t.__bindingPointIndex=n;let r=e.createBuffer(),i=t.__size,a=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,r),e.bufferData(e.UNIFORM_BUFFER,i,a),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,n,r),r}function d(){for(let e=0;e<s;e++)if(o.indexOf(e)===-1)return o.push(e),e;return z(`WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached.`),0}function f(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let e=0,t=r.length;e<t;e++){let t=r[e];if(Array.isArray(t))for(let n=0,r=t.length;n<r;n++)p(t[n],e,n,a);else p(t,e,0,a)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(t,n,r,i){if(h(t,n,r,i)===!0){let n=t.__offset,r=t.value;if(Array.isArray(r)){let e=0;for(let n=0;n<r.length;n++){let i=r[n],a=_(i);m(i,t.__data,e),typeof i!=`number`&&typeof i!=`boolean`&&!i.isMatrix3&&!ArrayBuffer.isView(i)&&(e+=a.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(r,t.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,n,t.__data)}}function m(e,t,n){typeof e==`number`||typeof e==`boolean`?t[0]=e:e.isMatrix3?(t[0]=e.elements[0],t[1]=e.elements[1],t[2]=e.elements[2],t[3]=0,t[4]=e.elements[3],t[5]=e.elements[4],t[6]=e.elements[5],t[7]=0,t[8]=e.elements[6],t[9]=e.elements[7],t[10]=e.elements[8],t[11]=0):ArrayBuffer.isView(e)?t.set(new e.constructor(e.buffer,e.byteOffset,t.length)):e.toArray(t,n)}function h(e,t,n,r){let i=e.value,a=t+`_`+n;if(r[a]===void 0)return r[a]=typeof i==`number`||typeof i==`boolean`?i:ArrayBuffer.isView(i)?i.slice():i.clone(),!0;{let e=r[a];if(typeof i==`number`||typeof i==`boolean`){if(e!==i)return r[a]=i,!0}else if(ArrayBuffer.isView(i))return!0;else if(e.equals(i)===!1)return e.copy(i),!0}return!1}function g(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let e=0,t=r.length;e<t;e++){let t=r[e],i=Array.isArray(t.value)?t.value:[t.value];for(let e=0,r=i.length;e<r;e++){let r=i[e],a=_(r),o=n%16,s=o%a.boundary,c=o+s;n+=s,c!==0&&16-c<a.storage&&(n+=16-c),t.__data=new Float32Array(a.storage/Float32Array.BYTES_PER_ELEMENT),t.__offset=n,n+=a.storage}}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function _(e){let t={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(t.boundary=4,t.storage=4):e.isVector2?(t.boundary=8,t.storage=8):e.isVector3||e.isColor?(t.boundary=16,t.storage=12):e.isVector4?(t.boundary=16,t.storage=16):e.isMatrix3?(t.boundary=48,t.storage=48):e.isMatrix4?(t.boundary=64,t.storage=64):e.isTexture?R(`WebGLRenderer: Texture samplers can not be part of an uniforms group.`):ArrayBuffer.isView(e)?(t.boundary=16,t.storage=e.byteLength):R(`WebGLRenderer: Unsupported uniform value type.`,e),t}function v(t){let n=t.target;n.removeEventListener(`dispose`,v);let r=o.indexOf(n.__bindingPointIndex);o.splice(r,1),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}function y(){for(let t in i)e.deleteBuffer(i[t]);o=[],i={},a={}}return{bind:c,update:l,dispose:y}}var _c=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),vc=null;function yc(){return vc===null&&(vc=new Vr(_c,16,16,k,g),vc.name=`DFG_LUT`,vc.minFilter=o,vc.magFilter=o,vc.wrapS=t,vc.wrapT=t,vc.generateMipmaps=!1,vc.needsUpdate=!0),vc}var bc=class{constructor(e={}){let{canvas:t=Xe(),context:n=null,depth:r=!0,stencil:i=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:s=!0,preserveDrawingBuffer:u=!1,powerPreference:d=`default`,failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:h=!1,outputBufferType:b=l}=e;this.isWebGLRenderer=!0;let x;if(n!==null){if(typeof WebGLRenderingContext<`u`&&n instanceof WebGLRenderingContext)throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);x=n.getContextAttributes().alpha}else x=a;let S=b,C=new Set([ee,A,O]),w=new Set([l,m,f,y,_,v]),T=new Uint32Array(4),E=new Int32Array(4),D=new V,k=null,j=null,te=[],M=[],ne=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let N=this,re=!1,ie=null,ae=null,oe=null,se=null;this._outputColorSpace=Re;let ce=0,le=0,P=null,ue=-1,de=null,fe=new jt,pe=new jt,me=null,he=new vn(0),ge=0,_e=t.width,ve=t.height,ye=1,be=null,xe=null,Se=new jt(0,0,_e,ve),Ce=new jt(0,0,_e,ve),we=!1,Te=new Gr,Ee=!1,De=!1,Oe=new It,ke=new V,Ae=new jt,je={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Me=!1;function Ne(){return P===null?ye:1}let F=n;function Pe(e,n){return t.getContext(e,n)}let Fe,Ie,I,Le,L,ze,Be,Ve,He,Ue,We,Ge,qe,Je,Ye,Ze,$e,et,nt,rt,it,at,ot;try{let e={alpha:!0,depth:r,stencil:i,antialias:o,premultipliedAlpha:s,preserveDrawingBuffer:u,powerPreference:d,failIfMajorPerformanceCaveat:p};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r186`),t.addEventListener(`webglcontextlost`,ct,!1),t.addEventListener(`webglcontextrestored`,lt,!1),t.addEventListener(`webglcontextcreationerror`,ut,!1),F===null){let t=`webgl2`;if(F=Pe(t,e),F===null)throw Pe(t)?Error(`THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.`):Error(`THREE.WebGLRenderer: Error creating WebGL context.`)}st()}catch(e){throw t.removeEventListener(`webglcontextlost`,ct,!1),t.removeEventListener(`webglcontextrestored`,lt,!1),t.removeEventListener(`webglcontextcreationerror`,ut,!1),z(`WebGLRenderer: `+e.message),e}function st(){Fe=new La(F),Fe.init(),it=new cc(F,Fe),Ie=new fa(F,Fe,e,it),I=new oc(F,Fe),Ie.reversedDepthBuffer&&h&&I.buffers.depth.setReversed(!0),ae=F.createFramebuffer(),oe=F.createFramebuffer(),se=F.createFramebuffer(),Le=new Ba(F),L=new Bs,ze=new sc(F,Fe,I,L,Ie,it,Le),Be=new Ia(N),Ve=new ia(F),at=new ua(F,Ve),He=new Ra(F,Ve,Le,at),Ue=new Ha(F,He,Ve,at,Le),et=new Va(F,Ie,ze),Ye=new pa(L),We=new zs(N,Be,Fe,Ie,at,Ye),Ge=new hc(N,L),qe=new Ws,Je=new Zs(Fe),$e=new la(N,Be,I,Ue,x,s),Ze=new ac(N,Ue,Ie),ot=new gc(F,Le,Ie,I),nt=new da(F,Fe,Le),rt=new za(F,Fe,Le),Le.programs=We.programs,N.capabilities=Ie,N.extensions=Fe,N.properties=L,N.renderLists=qe,N.shadowMap=Ze,N.state=I,N.info=Le}S!==1009&&(ne=new Wa(S,t.width,t.height,o,r,i));let B=new fc(N,F);this.xr=B,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){let e=Fe.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=Fe.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return ye},this.setPixelRatio=function(e){e!==void 0&&(ye=e,this.setSize(_e,ve,!1))},this.getSize=function(e){return e.set(_e,ve)},this.setSize=function(e,n,r=!0){B.isPresenting?R(`WebGLRenderer: Can't change size while VR device is presenting.`):(_e=e,ve=n,t.width=Math.floor(e*ye),t.height=Math.floor(n*ye),r===!0&&(t.style.width=e+`px`,t.style.height=n+`px`),ne!==null&&ne.setSize(t.width,t.height),this.setViewport(0,0,e,n))},this.getDrawingBufferSize=function(e){return e.set(_e*ye,ve*ye).floor()},this.setDrawingBufferSize=function(e,n,r){_e=e,ve=n,ye=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.setEffects=function(e){if(S===1009)z(`WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.`);else{if(e){for(let t=0;t<e.length;t++)if(e[t].isOutputPass===!0){R(`WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.`);break}}ne.setEffects(e||[])}},this.getCurrentViewport=function(e){return e.copy(fe)},this.getViewport=function(e){return e.copy(Se)},this.setViewport=function(e,t,n,r){e.isVector4?Se.set(e.x,e.y,e.z,e.w):Se.set(e,t,n,r),I.viewport(fe.copy(Se).multiplyScalar(ye).round())},this.getScissor=function(e){return e.copy(Ce)},this.setScissor=function(e,t,n,r){e.isVector4?Ce.set(e.x,e.y,e.z,e.w):Ce.set(e,t,n,r),I.scissor(pe.copy(Ce).multiplyScalar(ye).round())},this.getScissorTest=function(){return we},this.setScissorTest=function(e){I.setScissorTest(we=e)},this.setOpaqueSort=function(e){be=e},this.setTransparentSort=function(e){xe=e},this.getClearColor=function(e){return e.copy($e.getClearColor())},this.setClearColor=function(){$e.setClearColor(...arguments)},this.getClearAlpha=function(){return $e.getClearAlpha()},this.setClearAlpha=function(){$e.setClearAlpha(...arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(P!==null){let t=P.texture.format;e=C.has(t)}if(e){let e=P.texture.type,t=w.has(e),n=$e.getClearColor(),r=$e.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(T[0]=i,T[1]=a,T[2]=o,T[3]=r,F.clearBufferuiv(F.COLOR,0,T)):(E[0]=i,E[1]=a,E[2]=o,E[3]=r,F.clearBufferiv(F.COLOR,0,E))}else r|=F.COLOR_BUFFER_BIT}t&&(r|=F.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),n&&(r|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),r!==0&&F.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(e){e.setRenderer(this),ie=e},this.dispose=function(){t.removeEventListener(`webglcontextlost`,ct,!1),t.removeEventListener(`webglcontextrestored`,lt,!1),t.removeEventListener(`webglcontextcreationerror`,ut,!1),$e.dispose(),qe.dispose(),Je.dispose(),L.dispose(),Be.dispose(),Ue.dispose(),at.dispose(),ot.dispose(),We.dispose(),B.dispose(),B.removeEventListener(`sessionstart`,gt),B.removeEventListener(`sessionend`,_t),vt.stop()};function ct(e){e.preventDefault(),Qe(`WebGLRenderer: Context Lost.`),re=!0}function lt(){Qe(`WebGLRenderer: Context Restored.`),re=!1;let e=Le.autoReset,t=Ze.enabled,n=Ze.autoUpdate,r=Ze.needsUpdate,i=Ze.type;st(),Le.autoReset=e,Ze.enabled=t,Ze.autoUpdate=n,Ze.needsUpdate=r,Ze.type=i}function ut(e){z(`WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function dt(e){let t=e.target;t.removeEventListener(`dispose`,dt),ft(t)}function ft(e){pt(e),L.remove(e)}function pt(e){let t=L.get(e).programs;t!==void 0&&(t.forEach(function(e){We.releaseProgram(e)}),e.isShaderMaterial&&We.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=je);let o=i.isMesh&&i.matrixWorld.determinantAffine()<0,s=kt(e,t,n,r,i);I.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=He.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;at.setup(i,r,s,n,c);let h,g=nt;if(c!==null&&(h=Ve.get(c),g=rt,g.setIndex(h)),i.isMesh)r.wireframe===!0?(I.setLineWidth(r.wireframeLinewidth*Ne()),g.setMode(F.LINES)):g.setMode(F.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),I.setLineWidth(e*Ne()),i.isLineSegments?g.setMode(F.LINES):i.isLineLoop?g.setMode(F.LINE_LOOP):g.setMode(F.LINE_STRIP)}else i.isPoints?g.setMode(F.POINTS):i.isSprite&&g.setMode(F.TRIANGLES);if(i.isBatchedMesh){if(Fe.get(`WEBGL_multi_draw`))g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else{let e=i._multiDrawStarts,t=i._multiDrawCounts,n=i._multiDrawCount,a=c?Ve.get(c).bytesPerElement:1,o=L.get(r).currentProgram.getUniforms();for(let r=0;r<n;r++)o.setValue(F,`_gl_DrawID`,r),g.render(e[r]/a,t[r])}}else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function mt(e,t,n,r){ie!==null&&e.isNodeMaterial&&ie.setObject(r,e),Ee===!0&&Ye.setState(e,n,!1),e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,Tt(e,t,r),e.side=0,e.needsUpdate=!0,Tt(e,t,r),e.side=2):Tt(e,t,r)}this.compile=function(e,t,n=null){n===null&&(n=e),ie!==null&&ie.renderStart(e,t,n),j=Je.get(n),j.init(t),M.push(j),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(j.pushLight(e),e.castShadow&&j.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(j.pushLight(e),e.castShadow&&j.pushShadow(e))}),j.setupLights(),ie!==null&&ie.updateLights(j.state.lightsArray),De=this.localClippingEnabled,Ee=Ye.init(this.clippingPlanes,De),Ee===!0&&Ye.setGlobalState(this.clippingPlanes,t),ie!==null&&Ze.render(j.state.shadowsArray,n,t);let r=new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;let i=e.material;if(i){if(Array.isArray(i))for(let a=0;a<i.length;a++){let o=i[a];mt(o,n,t,e),r.add(o)}else mt(i,n,t,e),r.add(i)}}),j=M.pop(),ie!==null&&ie.renderEnd(),r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){r.forEach(function(e){let t=L.get(e).currentProgram;(t===void 0||t.isReady())&&r.delete(e)}),r.size===0?t(e):setTimeout(n,10)}Fe.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let ht=null;function H(e){ht&&ht(e)}function gt(){vt.stop()}function _t(){vt.start()}let vt=new ra;vt.setAnimationLoop(H),typeof self<`u`&&vt.setContext(self),this.setAnimationLoop=function(e){ht=e,B.setAnimationLoop(e),e===null?vt.stop():vt.start()},B.addEventListener(`sessionstart`,gt),B.addEventListener(`sessionend`,_t),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){z(`WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(re===!0)return;ie!==null&&ie.renderStart(e,t);let n=B.enabled===!0&&B.isPresenting===!0,r=ne!==null&&(P===null||n)&&ne.begin(N,P);if(e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),B.enabled===!0&&B.isPresenting===!0&&(ne===null||ne.isCompositing()===!1)&&(B.cameraAutoUpdate===!0&&B.updateCamera(t),t=B.getCamera()),e.isScene===!0&&e.onBeforeRender(N,e,t,P),j=Je.get(e,M.length),j.init(t),j.state.textureUnits=ze.getTextureUnits(),M.push(j),Oe.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),Te.setFromProjectionMatrix(Oe,Ke,t.reversedDepth),De=this.localClippingEnabled,Ee=Ye.init(this.clippingPlanes,De),k=qe.get(e,te.length),k.init(),te.push(k),B.enabled===!0&&B.isPresenting===!0){let e=N.xr.getDepthSensingMesh();e!==null&&yt(e,t,-1/0,N.sortObjects)}yt(e,t,0,N.sortObjects),k.finish(),ie!==null&&ie.updateLights(j.state.lightsArray),N.sortObjects===!0&&k.sort(be,xe),Me=B.enabled===!1||B.isPresenting===!1||B.hasDepthSensing()===!1,Me&&$e.addToRenderList(k,e),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Ee===!0&&Ye.beginShadows();let i=j.state.shadowsArray;if(Ze.render(i,e,t),Ee===!0&&Ye.endShadows(),(r&&ne.hasRenderPass())===!1){let n=k.opaque,r=k.transmissive;if(j.setupLights(),t.isArrayCamera){let i=t.cameras;if(r.length>0)for(let t=0,a=i.length;t<a;t++){let a=i[t];St(n,r,e,a)}Me&&$e.render(e);for(let t=0,n=i.length;t<n;t++){let n=i[t];xt(k,e,n,n.viewport)}}else r.length>0&&St(n,r,e,t),Me&&$e.render(e),xt(k,e,t)}P!==null&&le===0&&(ze.updateMultisampleRenderTarget(P),ze.updateRenderTargetMipmap(P)),r&&ne.end(N),e.isScene===!0&&e.onAfterRender(N,e,t),at.resetDefaultState(),ue=-1,de=null,M.pop(),M.length>0?(j=M[M.length-1],ze.setTextureUnits(j.state.textureUnits),Ee===!0&&Ye.setGlobalState(N.clippingPlanes,j.state.camera)):j=null,te.pop(),k=te.length>0?te[te.length-1]:null,ie!==null&&ie.renderEnd()};function yt(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLightProbeGrid)j.pushLightProbeGrid(e);else if(e.isLight)j.pushLight(e),e.castShadow&&j.pushShadow(e);else if(e.isSprite){if(!e.frustumCulled||e.intersectsFrustum(Te)){r&&Ae.setFromMatrixPosition(e.matrixWorld).applyMatrix4(Oe);let i=Ue.update(e),a=e.material;a.visible&&k.push(e,i,a,n,Ae.z,null,t)}}else if((e.isMesh||e.isLine||e.isPoints)&&(!e.frustumCulled||e.intersectsFrustum(Te))){let i=Ue.update(e),a=e.material;if(r&&(e.boundingSphere===void 0?(i.boundingSphere===null&&i.computeBoundingSphere(),Ae.copy(i.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),Ae.copy(e.boundingSphere.center)),Ae.applyMatrix4(e.matrixWorld).applyMatrix4(Oe)),Array.isArray(a)){let r=i.groups;for(let o=0,s=r.length;o<s;o++){let s=r[o],c=a[s.materialIndex];c&&c.visible&&k.push(e,i,c,n,Ae.z,s,t)}}else a.visible&&k.push(e,i,a,n,Ae.z,null,t)}}let i=e.children;for(let e=0,a=i.length;e<a;e++)yt(i[e],t,n,r)}function xt(e,t,n,r){let{opaque:i,transmissive:a,transparent:o}=e;j.setupLightsView(n),Ee===!0&&Ye.setGlobalState(N.clippingPlanes,n),r&&I.viewport(fe.copy(r)),i.length>0&&Ct(i,t,n),a.length>0&&Ct(a,t,n),o.length>0&&Ct(o,t,n),I.buffers.depth.setTest(!0),I.buffers.depth.setMask(!0),I.buffers.color.setMask(!0),I.setPolygonOffset(!1)}function St(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;if(j.state.transmissionRenderTarget[r.id]===void 0){let e=Fe.has(`EXT_color_buffer_half_float`)||Fe.has(`EXT_color_buffer_float`);j.state.transmissionRenderTarget[r.id]=new Nt(1,1,{generateMipmaps:!0,type:e?g:l,minFilter:c,samples:Math.max(4,Ie.samples),stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:bt.workingColorSpace})}let a=j.state.transmissionRenderTarget[r.id],o=r.viewport||fe;a.setSize(o.z*N.transmissionResolutionScale,o.w*N.transmissionResolutionScale);let s=N.getRenderTarget(),u=N.getActiveCubeFace(),d=N.getActiveMipmapLevel();N.setRenderTarget(a),N.getClearColor(he),ge=N.getClearAlpha(),ge<1&&N.setClearColor(16777215,.5),N.clear(),Me&&$e.render(n);let f=N.toneMapping;N.toneMapping=0;let p=r.viewport;if(r.viewport!==void 0&&(r.viewport=void 0),j.setupLightsView(r),Ee===!0&&Ye.setGlobalState(N.clippingPlanes,r),Ct(e,n,r),ze.updateMultisampleRenderTarget(a),ze.updateRenderTargetMipmap(a),Fe.has(`WEBGL_multisampled_render_to_texture`)===!1){let e=!1;for(let i=0,a=t.length;i<a;i++){let{object:a,geometry:o,material:s,group:c}=t[i];if(s.side===2&&a.layers.test(r.layers)){let t=s.side;s.side=1,s.needsUpdate=!0,wt(a,n,r,o,s,c),s.side=t,s.needsUpdate=!0,e=!0}}e===!0&&(ze.updateMultisampleRenderTarget(a),ze.updateRenderTargetMipmap(a))}N.setRenderTarget(s,u,d),N.setClearColor(he,ge),p!==void 0&&(r.viewport=p),N.toneMapping=f}function Ct(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],{object:o,geometry:s,group:c}=a,l=a.material;l.allowOverride===!0&&r!==null&&(l=r),o.layers.test(n.layers)&&wt(o,t,n,s,l,c)}}function wt(e,t,n,r,i,a){ie!==null&&i.isNodeMaterial&&ie.setObject(e,i),e.onBeforeRender(N,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(N,t,n,r,e,a),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,N.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,N.renderBufferDirect(n,t,r,i,e,a),i.side=2):N.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(N,t,n,r,i,a)}function Tt(e,t,n){t.isScene!==!0&&(t=je);let r=L.get(e),i=j.state.lights,a=j.state.shadowsArray,o=i.state.version,s=We.getParameters(e,i.state,a,t,n,j.state.lightProbeGridArray),c=We.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial||e.isMeshLambertMaterial||e.isMeshPhongMaterial?t.environment:null,r.fog=t.fog;let u=e.isMeshStandardMaterial||e.isMeshLambertMaterial&&!e.envMap||e.isMeshPhongMaterial&&!e.envMap;r.envMap=Be.get(e.envMap||r.environment,u),r.envMapRotation=r.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,l===void 0&&(e.addEventListener(`dispose`,dt),l=new Map,r.programs=l);let d=l.get(c);if(d!==void 0){if(r.currentProgram===d&&r.lightsStateVersion===o)return Dt(e,s),d}else s.uniforms=We.getUniforms(e),ie!==null&&e.isNodeMaterial&&ie.build(e,n,s),e.onBeforeCompile(s,N),d=We.acquireProgram(s,c),l.set(c,d),r.uniforms=s.uniforms;let f=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(f.clippingPlanes=Ye.uniform),Dt(e,s),r.needsLights=Mt(e),r.lightsStateVersion=o,r.needsLights&&(f.ambientLightColor.value=i.state.ambient,f.lightProbe.value=i.state.probe,f.sunLights.value=i.state.sun,f.sunLightShadows.value=i.state.sunShadow,f.directionalLights.value=i.state.directional,f.directionalLightShadows.value=i.state.directionalShadow,f.spotLights.value=i.state.spot,f.spotLightShadows.value=i.state.spotShadow,f.rectAreaLights.value=i.state.rectArea,f.ltc_1.value=i.state.rectAreaLTC1,f.ltc_2.value=i.state.rectAreaLTC2,f.pointLights.value=i.state.point,f.pointLightShadows.value=i.state.pointShadow,f.hemisphereLights.value=i.state.hemi,f.sunShadowMatrix.value=i.state.sunShadowMatrix,f.sunShadowCascade.value=i.state.sunShadowCascade,f.directionalShadowMatrix.value=i.state.directionalShadowMatrix,f.spotLightMatrix.value=i.state.spotLightMatrix,f.spotLightMap.value=i.state.spotLightMap,f.pointShadowMatrix.value=i.state.pointShadowMatrix),r.lightProbeGrid=j.state.lightProbeGridArray.length>0,r.currentProgram=d,r.uniformsList=null,d}function Et(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=Qo.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function Dt(e,t){let n=L.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function Ot(e,t){if(e.length===0)return null;if(e.length===1)return e[0].texture===null?null:e[0];D.setFromMatrixPosition(t.matrixWorld);for(let t=0,n=e.length;t<n;t++){let n=e[t];if(n.texture!==null&&n.boundingBox.containsPoint(D))return n}return null}function kt(e,t,n,r,i){t.isScene!==!0&&(t=je),ze.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial?t.environment:null,s=P===null?N.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:bt.workingColorSpace,c=r.isMeshStandardMaterial||r.isMeshLambertMaterial&&!r.envMap||r.isMeshPhongMaterial&&!r.envMap,l=Be.get(r.envMap||o,c),u=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,d=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),f=!!n.morphAttributes.position,p=!!n.morphAttributes.normal,m=!!n.morphAttributes.color,h=0;r.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(h=N.toneMapping);let g=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,_=g===void 0?0:g.length,v=L.get(r),y=j.state.lights;if(Ee===!0&&(De===!0||e!==de)){let t=e===de&&r.id===ue;Ye.setState(r,e,t)}let b=!1;r.version===v.__version?v.needsLights&&v.lightsStateVersion!==y.state.version?b=!0:v.outputColorSpace===s?i.isBatchedMesh&&v.batching===!1||!i.isBatchedMesh&&v.batching===!0||i.isBatchedMesh&&v.batchingColor===!0&&i._colorsTexture===null||i.isBatchedMesh&&v.batchingColor===!1&&i._colorsTexture!==null||i.isInstancedMesh&&v.instancing===!1||!i.isInstancedMesh&&v.instancing===!0||i.isSkinnedMesh&&v.skinning===!1||!i.isSkinnedMesh&&v.skinning===!0||i.isInstancedMesh&&v.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&v.instancingColor===!1&&i.instanceColor!==null||i.isInstancedMesh&&v.instancingMorph===!0&&i.morphTexture===null||i.isInstancedMesh&&v.instancingMorph===!1&&i.morphTexture!==null?b=!0:v.envMap===l?r.fog===!0&&v.fog!==a||v.numClippingPlanes!==void 0&&(v.numClippingPlanes!==Ye.numPlanes||v.numIntersection!==Ye.numIntersection)?b=!0:v.vertexAlphas===u&&v.vertexTangents===d&&v.morphTargets===f&&v.morphNormals===p&&v.morphColors===m&&v.toneMapping===h&&v.morphTargetsCount===_?!!v.lightProbeGrid!=j.state.lightProbeGridArray.length>0&&(b=!0):b=!0:b=!0:b=!0:(b=!0,v.__version=r.version);let x=v.currentProgram;b===!0&&(x=Tt(r,t,i),ie&&r.isNodeMaterial&&ie.onUpdateProgram(r,x,v));let S=!1,C=!1,w=!1,T=x.getUniforms(),E=v.uniforms;if(I.useProgram(x.program)&&(S=!0,C=!0,w=!0),r.id!==ue&&(ue=r.id,C=!0),v.needsLights){let e=Ot(j.state.lightProbeGridArray,i);v.lightProbeGrid!==e&&(v.lightProbeGrid=e,C=!0)}if(S||de!==e){I.buffers.depth.getReversed()&&e.reversedDepth!==!0&&(e._reversedDepth=!0,e.updateProjectionMatrix()),T.setValue(F,`projectionMatrix`,e.projectionMatrix),T.setValue(F,`viewMatrix`,e.matrixWorldInverse);let t=T.map.cameraPosition;t!==void 0&&t.setValue(F,ke.setFromMatrixPosition(e.matrixWorld)),Ie.logarithmicDepthBuffer&&T.setValue(F,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&T.setValue(F,`isOrthographic`,e.isOrthographicCamera===!0),de!==e&&(de=e,C=!0,w=!0)}if(v.needsLights&&(y.state.sunShadowMap.length>0&&T.setValue(F,`sunShadowMap`,y.state.sunShadowMap,ze),y.state.directionalShadowMap.length>0&&T.setValue(F,`directionalShadowMap`,y.state.directionalShadowMap,ze),y.state.spotShadowMap.length>0&&T.setValue(F,`spotShadowMap`,y.state.spotShadowMap,ze),y.state.pointShadowMap.length>0&&T.setValue(F,`pointShadowMap`,y.state.pointShadowMap,ze)),i.isSkinnedMesh){T.setOptional(F,i,`bindMatrix`),T.setOptional(F,i,`bindMatrixInverse`);let e=i.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),T.setValue(F,`boneTexture`,e.boneTexture,ze))}i.isBatchedMesh&&(T.setOptional(F,i,`batchingTexture`),T.setValue(F,`batchingTexture`,i._matricesTexture,ze),T.setOptional(F,i,`batchingIdTexture`),T.setValue(F,`batchingIdTexture`,i._indirectTexture,ze),T.setOptional(F,i,`batchingColorTexture`),i._colorsTexture!==null&&T.setValue(F,`batchingColorTexture`,i._colorsTexture,ze));let D=n.morphAttributes;if((D.position!==void 0||D.normal!==void 0||D.color!==void 0)&&et.update(i,n,x),(C||v.receiveShadow!==i.receiveShadow)&&(v.receiveShadow=i.receiveShadow,T.setValue(F,`receiveShadow`,i.receiveShadow)),(r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial)&&r.envMap===null&&t.environment!==null&&(E.envMapIntensity.value=t.environmentIntensity),E.dfgLUT!==void 0&&(E.dfgLUT.value=yc()),C){if(T.setValue(F,`toneMappingExposure`,N.toneMappingExposure),v.needsLights&&At(E,w),a&&r.fog===!0&&Ge.refreshFogUniforms(E,a),Ge.refreshMaterialUniforms(E,r,ye,ve,j.state.transmissionRenderTarget[e.id]),v.needsLights&&v.lightProbeGrid){let e=v.lightProbeGrid;E.probesSH.value=e.texture,E.probesMin.value.copy(e.boundingBox.min),E.probesMax.value.copy(e.boundingBox.max),E.probesResolution.value.copy(e.resolution)}Qo.upload(F,Et(v),E,ze)}if(r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(Qo.upload(F,Et(v),E,ze),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&T.setValue(F,`center`,i.center),T.setValue(F,`modelViewMatrix`,i.modelViewMatrix),T.setValue(F,`normalMatrix`,i.normalMatrix),T.setValue(F,`modelMatrix`,i.matrixWorld),r.uniformsGroups!==void 0){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++){let n=e[t];ot.update(n,x),ot.bind(n,x)}}return x}function At(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.sunLights.needsUpdate=t,e.sunLightShadows.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function Mt(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return ce},this.getActiveMipmapLevel=function(){return le},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(e,t,n){let r=L.get(e);r.__autoAllocateDepthBuffer=e.resolveDepthBuffer===!1,r.__autoAllocateDepthBuffer===!1&&(r.__useRenderToTexture=!1),L.get(e.texture).__webglTexture=t,L.get(e.depthTexture).__webglTexture=r.__autoAllocateDepthBuffer?void 0:n,r.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(e,t){let n=L.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0},this.setRenderTarget=function(e,t=0,n=0){P=e,ce=t,le=n;let r=null,i=!1,a=!1;if(e){let o=L.get(e);if(o.__useDefaultFramebuffer!==void 0){I.bindFramebuffer(F.FRAMEBUFFER,o.__webglFramebuffer),fe.copy(e.viewport),pe.copy(e.scissor),me=e.scissorTest,I.viewport(fe),I.scissor(pe),I.setScissorTest(me),ue=-1;return}if(o.__webglFramebuffer===void 0)ze.setupRenderTarget(e);else if(o.__hasExternalTextures)ze.rebindTextures(e,L.get(e.texture).__webglTexture,L.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){let t=e.depthTexture;if(o.__boundDepthTexture!==t){if(t!==null&&L.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw Error(`THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.`);ze.setupDepthRenderbuffer(e)}}let s=e.texture;(s.isData3DTexture||s.isDataArrayTexture||s.isCompressedArrayTexture)&&(a=!0);let c=L.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(r=Array.isArray(c[t])?c[t][n]:c[t],i=!0):r=e.samples>0&&ze.useMultisampledRTT(e)===!1?L.get(e).__webglMultisampledFramebuffer:Array.isArray(c)?c[n]:c,fe.copy(e.viewport),pe.copy(e.scissor),me=e.scissorTest}else fe.copy(Se).multiplyScalar(ye).floor(),pe.copy(Ce).multiplyScalar(ye).floor(),me=we;if(n!==0&&(r=ae),I.bindFramebuffer(F.FRAMEBUFFER,r)&&I.drawBuffers(e,r),I.viewport(fe),I.scissor(pe),I.setScissorTest(me),i){let r=L.get(e.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(a){let r=t;for(let t=0;t<e.textures.length;t++){let i=L.get(e.textures[t]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+t,i.__webglTexture,n,r)}}else if(e!==null&&n!==0){let t=L.get(e.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,t.__webglTexture,n)}ue=-1};function Pt(e){let t=L.get(e);return(t.__readFormat!==e.format||t.__readType!==e.type)&&(t.__readFormat=e.format,t.__readType=e.type,t.__formatReadable=Ie.textureFormatReadable(e.format),t.__typeReadable=Ie.textureTypeReadable(e.type)),t}this.readRenderTargetPixels=function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget)){z(`WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let c=L.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){I.bindFramebuffer(F.FRAMEBUFFER,c);try{let o=e.textures[s],c=o.format,l=o.type;e.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+s);let u=Pt(o);if(u.__formatReadable===!1){z(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(u.__typeReadable===!1){z(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&F.readPixels(t,n,r,i,it.convert(c),it.convert(l),a)}finally{let e=P===null?null:L.get(P).__webglFramebuffer;I.bindFramebuffer(F.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget))throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let c=L.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){if(t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i){I.bindFramebuffer(F.FRAMEBUFFER,c);let o=e.textures[s],l=o.format,u=o.type;e.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+s);let d=Pt(o);if(d.__formatReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(d.__typeReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);let f=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,f),F.bufferData(F.PIXEL_PACK_BUFFER,a.byteLength,F.STREAM_READ),F.readPixels(t,n,r,i,it.convert(l),it.convert(u),0),F.bindBuffer(F.PIXEL_PACK_BUFFER,null);let p=P===null?null:L.get(P).__webglFramebuffer;I.bindFramebuffer(F.FRAMEBUFFER,p);let m=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await tt(F,m,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,f),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,a),F.bindBuffer(F.PIXEL_PACK_BUFFER,null),F.deleteBuffer(f),F.deleteSync(m),a}throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)}},this.copyFramebufferToTexture=function(e,t=null,n=0){let r=2**-n,i=Math.floor(e.image.width*r),a=Math.floor(e.image.height*r),o=t===null?0:t.x,s=t===null?0:t.y;ze.setTexture2D(e,0),F.copyTexSubImage2D(F.TEXTURE_2D,n,0,0,o,s,i,a),I.unbindTexture()},this.copyTextureToTexture=function(e,t,n=null,r=null,i=0,a=0){let o,s,c,l,u,d,f,p,m,h=e.isCompressedTexture?e.mipmaps[a]:e.image;if(n!==null)o=n.max.x-n.min.x,s=n.max.y-n.min.y,c=n.isBox3?n.max.z-n.min.z:1,l=n.min.x,u=n.min.y,d=n.isBox3?n.min.z:0;else{let t=2**-i;o=Math.floor(h.width*t),s=Math.floor(h.height*t),c=e.isDataArrayTexture?h.depth:e.isData3DTexture?Math.floor(h.depth*t):1,l=0,u=0,d=0}r===null?(f=0,p=0,m=0):(f=r.x,p=r.y,m=r.z);let g=it.convert(t.format),_=it.convert(t.type),v;t.isData3DTexture?(ze.setTexture3D(t,0),v=F.TEXTURE_3D):t.isDataArrayTexture||t.isCompressedArrayTexture?(ze.setTexture2DArray(t,0),v=F.TEXTURE_2D_ARRAY):(ze.setTexture2D(t,0),v=F.TEXTURE_2D),I.activeTexture(F.TEXTURE0),I.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,t.flipY),I.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),I.pixelStorei(F.UNPACK_ALIGNMENT,t.unpackAlignment);let y=I.getParameter(F.UNPACK_ROW_LENGTH),b=I.getParameter(F.UNPACK_IMAGE_HEIGHT),x=I.getParameter(F.UNPACK_SKIP_PIXELS),S=I.getParameter(F.UNPACK_SKIP_ROWS),C=I.getParameter(F.UNPACK_SKIP_IMAGES);I.pixelStorei(F.UNPACK_ROW_LENGTH,h.width),I.pixelStorei(F.UNPACK_IMAGE_HEIGHT,h.height),I.pixelStorei(F.UNPACK_SKIP_PIXELS,l),I.pixelStorei(F.UNPACK_SKIP_ROWS,u),I.pixelStorei(F.UNPACK_SKIP_IMAGES,d);let w=e.isDataArrayTexture||e.isData3DTexture,T=t.isDataArrayTexture||t.isData3DTexture;if(e.isDepthTexture){let n=L.get(e),r=L.get(t),h=L.get(n.__renderTarget),g=L.get(r.__renderTarget);I.bindFramebuffer(F.READ_FRAMEBUFFER,h.__webglFramebuffer),I.bindFramebuffer(F.DRAW_FRAMEBUFFER,g.__webglFramebuffer);for(let n=0;n<c;n++)w&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,L.get(e).__webglTexture,i,d+n),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,L.get(t).__webglTexture,a,m+n)),F.blitFramebuffer(l,u,o,s,f,p,o,s,F.DEPTH_BUFFER_BIT,F.NEAREST);I.bindFramebuffer(F.READ_FRAMEBUFFER,null),I.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(i!==0||e.isRenderTargetTexture||L.has(e)){let n=L.get(e),r=L.get(t);I.bindFramebuffer(F.READ_FRAMEBUFFER,oe),I.bindFramebuffer(F.DRAW_FRAMEBUFFER,se);for(let e=0;e<c;e++)w?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,n.__webglTexture,i,d+e):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,n.__webglTexture,i),T?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,r.__webglTexture,a,m+e):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,r.__webglTexture,a),i===0?T?F.copyTexSubImage3D(v,a,f,p,m+e,l,u,o,s):F.copyTexSubImage2D(v,a,f,p,l,u,o,s):F.blitFramebuffer(l,u,o,s,f,p,o,s,F.COLOR_BUFFER_BIT,F.NEAREST);I.bindFramebuffer(F.READ_FRAMEBUFFER,null),I.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else T?e.isDataTexture||e.isData3DTexture?F.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h.data):t.isCompressedArrayTexture?F.compressedTexSubImage3D(v,a,f,p,m,o,s,c,g,h.data):F.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h):e.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,a,f,p,o,s,g,_,h.data):e.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,a,f,p,h.width,h.height,g,h.data):F.texSubImage2D(F.TEXTURE_2D,a,f,p,o,s,g,_,h);I.pixelStorei(F.UNPACK_ROW_LENGTH,y),I.pixelStorei(F.UNPACK_IMAGE_HEIGHT,b),I.pixelStorei(F.UNPACK_SKIP_PIXELS,x),I.pixelStorei(F.UNPACK_SKIP_ROWS,S),I.pixelStorei(F.UNPACK_SKIP_IMAGES,C),a===0&&t.generateMipmaps&&F.generateMipmap(v),I.unbindTexture()},this.initRenderTarget=function(e){L.get(e).__webglFramebuffer===void 0&&ze.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?ze.setTextureCube(e,0):e.isData3DTexture?ze.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?ze.setTexture2DArray(e,0):ze.setTexture2D(e,0),I.unbindTexture()},this.resetState=function(){ce=0,le=0,P=null,I.reset(),at.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return Ke}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=bt._getDrawingBufferColorSpace(e),t.unpackColorSpace=bt._getUnpackColorSpace()}},xc=e=>e===`rainy`||e===`stormy`,Sc=[`spring`,`summer`,`fall`,`winter`];function Cc(e,t,n,r,i,a,o,s,c,l,u){return{item:e,waters:t,difficulty:n,motion:r,minSize:i,maxSize:a,from:o*60,to:s*60,weather:c,seasons:l,weight:u}}var wc=[Cc(`Sunfish`,[`pond`],30,`mixed`,5,15,6,19,`sun`,[`spring`,`summer`],10),Cc(`Carp`,[`pond`],15,`mixed`,15,50,0,26,null,[`spring`,`summer`,`fall`],10),Cc(`LargemouthBass`,[`pond`],50,`mixed`,11,30,6,19,null,Sc,6),Cc(`Bullhead`,[`pond`],46,`smooth`,12,30,0,26,null,Sc,6),Cc(`GoldenKoi`,[`pond`],85,`dart`,20,40,0,26,null,Sc,1),Cc(`Tilapia`,[`pond`],50,`mixed`,11,30,6,14,null,[`summer`,`fall`],6),Cc(`Perch`,[`pond`,`river`],35,`dart`,10,24,0,26,null,[`winter`],8),Cc(`Chub`,[`river`],35,`dart`,12,24,0,26,null,Sc,10),Cc(`Bream`,[`river`],35,`smooth`,12,30,18,26,null,Sc,8),Cc(`RainbowTrout`,[`river`],45,`mixed`,10,25,6,19,`sun`,[`summer`],7),Cc(`Pike`,[`river`],60,`dart`,15,60,0,26,null,[`summer`,`winter`],4),Cc(`Catfish`,[`river`],75,`mixed`,12,72,6,24,`rain`,[`spring`,`fall`],6),Cc(`Walleye`,[`river`],45,`smooth`,10,40,12,26,`rain`,[`fall`,`winter`],6),Cc(`Salmon`,[`river`],50,`mixed`,24,65,6,19,null,[`fall`],8),Cc(`SmallmouthBass`,[`river`],28,`mixed`,12,24,0,26,null,[`spring`,`fall`],8),Cc(`Anchovy`,[`ocean`],30,`dart`,1,16,0,26,null,[`spring`,`fall`],10),Cc(`Sardine`,[`ocean`],30,`dart`,1,12,6,19,null,[`spring`,`fall`,`winter`],10),Cc(`Tuna`,[`ocean`],70,`smooth`,12,60,0,26,null,[`summer`,`winter`],4),Cc(`RedSnapper`,[`ocean`],40,`mixed`,8,25,6,19,`rain`,[`summer`,`fall`],6),Cc(`Pufferfish`,[`ocean`],80,`floater`,1,37,12,16,`sun`,[`summer`],3),Cc(`Halibut`,[`ocean`],50,`sinker`,10,34,6,11,null,[`spring`,`summer`,`winter`],6),Cc(`Eel`,[`ocean`],70,`smooth`,12,80,16,26,`rain`,[`spring`,`fall`],5),Cc(`Octopus`,[`ocean`],95,`sinker`,12,48,6,13,null,[`summer`],2),Cc(`Squid`,[`ocean`],75,`sinker`,12,48,18,26,null,[`winter`],6),Cc(`SeaCucumber`,[`ocean`],40,`sinker`,3,21,6,19,null,[`fall`,`winter`],6),Cc(`IcePip`,[`frost`],85,`dart`,7,12,0,26,null,Sc,1),Cc(`LavaEel`,[`lava`],90,`mixed`,31,33,0,26,null,Sc,1)];function Tc(e){return wc.find(t=>t.item===e)}function Ec(e,t,n,r,i){return!e.waters.includes(t)||n<e.from||n>=e.to||!e.seasons.includes(i)?!1:e.weather===`rain`?xc(r):e.weather!==`sun`||!xc(r)}function Dc(e,t,n,r){return wc.filter(i=>Ec(i,e,t,n,r))}function Oc(e,t,n,r,i){let a=Dc(t,n,r,i),o=a.reduce((e,t)=>e+t.weight,0);if(o===0)return null;let s=e.int(0,o);for(let e of a)if(s-=e.weight,s<0)return e;return a[a.length-1]}function kc(e,t){if(e.chance(.12))return e.chance(.5)?`Driftwood`:`SoggyNewspaper`;if(!t)return`Crayfish`;let n=e.next();return n<.45?`Shrimp`:n<.85?`Crab`:`Lobster`}var Ac=[[`Coal`,2,5],[`CopperOre`,3,8],[`IronOre`,2,6],[`GoldOre`,1,3],[`Geode`,1,2],[`Bait`,5,15],[`Quartz`,1,2],[`Amethyst`,1,1],[`Topaz`,1,1],[`FrozenGeode`,1,1]],G={tile:16,walkSpeed:82,dayStart:360,passOut:1560,secondsPerTenMinutes:5,rainChance:.2,daysPerSeason:14,initialDebris:150,nightlyDebris:4,maxDebris:230,forageMin:2,forageMax:5,treeHp:10,treeStageDays:4,crowMinCrops:16,crowChance:.3,scarecrowRadius:8,startMoney:500,startParsnipSeeds:15,maxEnergy:120,hoeEnergy:2,waterEnergy:2,castEnergy:3,passedOutEnergy:.5,backpackSlots:24,toolbarSlots:12,maxStack:99,canCapacity:30,maxHealth:100,xpLevels:[100,380,770,1300,2150,3300,4800,6900,1e4,15e3],castChargeRate:1.25,castMinTiles:2,castMaxTiles:5,castFlight:.55,biteMinWait:1.5,biteMaxWait:6.5,biteWindow:1,junkChance:.1,resultShowTime:1.6,minigameTickRate:60,channelHeight:568,fishSpace:548,fishHeight:16,catchBarHeight:136,treasureChance:.15,catchBarGravity:.25,fishInBarDamping:.6,progressStart:.3,progressGain:.002,progressLoss:.003},jc=[`spring`,`summer`,`fall`,`winter`],Mc={spring:`Spring`,summer:`Summer`,fall:`Fall`,winter:`Winter`},Nc=[`Mon`,`Tue`,`Wed`,`Thu`,`Fri`,`Sat`,`Sun`];function Pc(e){return jc[Math.floor((e-1)/G.daysPerSeason)%4]}function Fc(e){return(e-1)%G.daysPerSeason+1}function Ic(e){return Math.floor((e-1)/(G.daysPerSeason*4))+1}function Lc(e){return Nc[(e-1)%7]}function Rc(e){return`${Mc[Pc(e)]} ${Fc(e)}`}var zc={hazel:{intro:`Oh! You must be the new farmer! I'm Hazel, I run the store. Your grandparents bought their seeds here for forty years. Welcome home, love.`,tiers:[[`Seeds are on the left, fertilizer on the right, and gossip is free at the counter.`,`Your grandmother grew the biggest cauliflowers I ever saw. She'd be tickled to see the farm busy again.`,`If you need anything, just ask. If I don't stock it, I'll know who does.`,`Have you met Bram yet? Don't let the scowl fool you. He's a big softie.`,`Parsnips are a good start. Quick to grow and hard to get wrong.`,`Pip's been asking about you. Fair warning: Pip may try to show you a beetle.`,`I open at nine sharp. Well, nine-ish. Nine and a cup of tea.`,`Don't forget to water! Unless it's raining. Then the sky does it for you.`,`Thistle keeps talking about fixing up the community hall. It's nice to hear him hopeful again.`],[`You're becoming one of my regulars! I've started setting aside the good seed packets for you.`,`I put a little sign in the window: Fernbrook Farm produce, sold here. Doesn't that look grand?`,`Pip came home with mud up to the elbows yesterday. Said you showed the best frog spot. Thank you, I think.`,`My mother used to say the store's the town's front porch. I try to keep it that way.`,`Marigold and I have tea every Sunday. We solve all the town's problems. Nobody listens, of course.`,`You look tired, love. Have you eaten today? Proper food, not a raw parsnip in the field.`,`Juniper's been in buying nails by the bucket. Something's being built, mark my words.`,`I can tell the seasons by what folk buy. Spring is seeds. Fall is jam jars. Winter is gossip.`],[`I keep a jar of your honey on the counter. Not for sale. Just for me.`,`You know, the store felt quiet before you came. Now there's always somebody new popping in to ask about you.`,`Pip calls you the frog farmer. It's the highest honour Pip can give anyone.`,`Some nights I do the accounts and just smile. The town's coming back to life, and you're a big reason why.`,`If you ever want company for supper, my door's open. I always make too much soup anyway.`,`Your grandmother used to stop by just to chat. I like that you do the same.`,`Between us, I've been teaching Ollie to bake. He burned three loaves and told me a sea serpent did it.`,`You're family now, as far as I'm concerned. Don't argue. I've already decided.`]],seasons:{spring:[`Spring! Everybody's buying seeds and everybody's hopeful. My favourite season, can you tell?`,`Daffodils are popping up all along the brook. I could look at them all day.`],summer:[`Hot one today! I've got a fan behind the counter, and Pip keeps stealing it.`,`Summer seeds are in. Melons are a gamble, but oh, when they pay off!`],fall:[`Fall means jam season. I'll buy every jar of jelly you can make.`,`The hazelnuts are falling. Yes, yes, I know. Everyone makes the joke. I still love them.`],winter:[`Winter's quiet in the store. I knit behind the counter and listen to the stove tick.`,`Nothing grows in winter, but you can still forage. Crystal fruit, snow yams, that sort of thing.`]},rain:[`Rainy days fill the store with folk who just want somewhere dry to chat. I don't mind one bit.`,`Good day for the crops. Bad day for my hair.`],snow:[`Snow on the roofs! Mind the steps out front, they get slippery as an eel.`],birthday:`It's my birthday today! Pip made me a card with a slug on it. Very thoughtful slug.`,gift:{loved:`Oh, for me? This is just lovely! You've made my whole week.`,liked:`How kind! Thank you, love.`,neutral:`Oh, thank you! I'll find a use for it.`,disliked:`Ah. Well. It's the thought that counts, isn't it?`,hated:`Oh dear. I'm going to be honest with you, love: no. Just no.`,birthday:`You remembered my birthday! Come here, you. This is wonderful.`,tooMany:`You spoil me! Keep the rest for yourself, love. I've had plenty this week.`},letters:{hearts3:`Dear neighbour,
The store's been brighter since you started coming by. Here's something to say thank you. Don't you dare pay me back.
Warmly, Hazel`,hearts6:`Dear friend,
I found this tucked in your grandmother's old recipe box, which she left with me years ago. I think it belongs with you now.
All my love, Hazel`}},bram:{intro:`Hm. The new farmer. I'm Bram. I fix tools and I don't do small talk. ...Welcome to Fernbrook.`,tiers:[[`Bring me ore and coal and I'll make you bars. Bring me a broken tool and I'll make it not broken.`,`Mine's north of town. Don't go down without a good pickaxe.`,`Hm.`,`Closed Fridays. Don't ask why.`,`Your grandfather's hoe came through here a dozen times. Good steel. He used it hard.`,`If you find a geode, bring it. I'll crack it for you. Small fee.`,`Too loud out there today. Hammering helps.`,`Copper first, then iron, then gold. No skipping. That's how tools work.`,`The forge is hot. Don't touch it. I mean it.`],[`You work hard. I notice.`,`Fridays I go fishing with Ollie. Haven't caught a thing in six years. Don't tell him I don't mind.`,`Pip brought me a frog last week. Called it Anvil. It lives in the water barrel now. I didn't name it.`,`Iron's honest. You hit it right, it does what you want. People are harder.`,`Hazel keeps bringing me soup. Says I look peaky. I don't look peaky. ...The soup was good.`,`Saw your crops from the road. Neat rows. Your grandfather would've grunted. That means he's proud.`,`Found a ruby in a geode once, when I was a lad. Gave it to my mother. She wore it every day.`,`If the mine gets rough, come back up. Nothing down there is worth getting hurt over.`],[`I made you something. It's in the shed. It's just a hook. For your hat. Don't make it a whole thing.`,`My mother grew sweet peas by this door. I've been thinking of planting some again.`,`Thistle wants a speech from me when the hall opens. I'd rather swallow a hot coal.`,`Most folk don't stay long enough to see me smile. You're not most folk.`,`Good to have you here, farmer. Good for the town. Good for me too, I suppose.`,`Anvil the frog has a friend now. They sit on the barrel and judge my work. It's nice.`,`Ollie says I caught a fish last Friday. I didn't. He bought one and hid it on my line. Old fool.`,`You ever need anything fixed, day or night, you knock. Even Fridays.`]],seasons:{spring:[`Spring. Everyone's tools need sharpening at once. Hm.`,`The forge feels too hot in spring. Window's open. Birds keep coming in.`],summer:[`Summer in a smithy. Like standing inside the sun. Bring water.`,`Hot days, short temper. Nothing personal.`],fall:[`Fall's good forging weather. Cool air, hot iron.`,`Leaves keep blowing into the coal pile. Pip thinks it's funny. It is a bit.`],winter:[`Winter. Best time to upgrade a tool. You're not using it in the frozen dirt anyway.`,`Folk come in just to stand by the forge in winter. I let them.`]},rain:[`Rain on the smithy roof. Good sound. Steady.`,`Rain means Ollie's shop is shut and he'll come here to talk at me. Brace yourself.`],snow:[`Snow. Mind the anvil, it holds the cold all morning.`],birthday:`It's my birthday. Hm. Hazel told everyone, didn't she.`,gift:{loved:`...That's a fine thing. A really fine thing. Thank you.`,liked:`Hm. That's good. Thanks.`,neutral:`Hm. Thanks.`,disliked:`Not really my sort of thing.`,hated:`Why would you give me this? Take it back. No, keep it. Just get it away from me.`,birthday:`For my birthday? You didn't have to. ...I'm glad you did.`,tooMany:`Enough. You'll have me owing you forever. Save it for next week.`},letters:{hearts3:`Farmer,
You keep coming by. Fine. Here's something useful. Don't thank me.
- Bram`,hearts6:`Farmer,
Couldn't sleep, so I made this. It's for you. Hazel says I should write more in letters. This is more.
- Bram`}},juniper:{intro:`Hey hey! New farmer! I'm Juniper, carpenter. Need a coop, a barn, a fence, a shelf? I build it. Fast and sturdy, that's the motto.`,tiers:[[`Bring me wood and stone and gold and I'll put up whatever you need. Coops, barns, you name it.`,`Measure twice, cut once. Or measure once, cut twice, and buy more wood from me. Good for business!`,`I've got three projects on the go and a fourth in my head. That's a normal Tuesday.`,`Your grandparents' barn fell down years back. Shame. I could build you a better one.`,`Coffee in the morning, sawdust all day. It's a good life.`,`Need hardwood? Big stumps on your farm. Copper axe will split them.`,`Thistle wants the community hall fixed. I said I'd do the roof. Then he gave me a forty-page plan.`,`Pencil behind the ear is not decoration. It is load-bearing.`,`Hammer's my favourite tool. Second favourite is a good snack.`],[`You're a hard worker. I like that. We should race fencing a field some day. I'll win, but still.`,`I built the benches in the plaza. Sit on one sometime. Tell me if it wobbles. It won't.`,`Pip helped me sand a chair last week. Mostly by finding six woodlice in it. Useful kid.`,`Bram made all my hinges. Says nothing, does perfect work. Best kind of neighbour.`,`I tried to build a boat once. Ollie still calls it the Floating Splinter. It sank in the brook.`,`Spicy food keeps me going. Hot peppers, pepper poppers. Fuel for the hammer arm!`,`You ever just look at a well-made joint and feel happy? No? Just me? That's fine.`,`Marigold lets me fix the saloon chairs for free dinners. Best deal in town.`],[`I've got a little workshop list just for your farm now. Pinned it right above the bench.`,`Honestly? Nobody in town can keep up with me. Except you. It's good to have a friend my speed.`,`I'm making you a sign for the farm gate. Carved letters. Don't peek, I'll know.`,`When the hall's done I'm going to stand in it and cry a bit. Proud cry. Sawdust cry.`,`You make this town feel like it's building something again. Not just me with a hammer.`,`My dad was a carpenter too. He'd have liked you. He liked anybody who showed up early.`,`If you ever want to learn to build, I'll teach you. You'd be good. You've got steady hands.`,`I keep a stack of the best planks in the back. They're for your projects. Nobody else's.`]],seasons:{spring:[`Spring! Everybody wants a fence fixed after the winter storms. I love it. Busy busy!`,`Sap's running in spring. Sticky hands, happy carpenter.`],summer:[`Summer means long days and long days mean more building. Best season!`,`It's hot, but wood dries fast. Every cloud, as they say. Not that there are any clouds.`],fall:[`Fall's the time to build a barn. Get it up before the snow, trust me.`,`Chopping wood in fall feels like a montage in a film. Very satisfying.`],winter:[`Winter's for indoor projects. I'm making a chair with eight legs. Don't ask, it's an experiment.`,`Cold hands make for clumsy hammering. I've hit my thumb twice today. New record!`]},rain:[`Rain day! Perfect for working in the shop and drinking too much coffee.`,`Wet wood warps. I spend rainy days covering lumber piles and grumbling.`],snow:[`Snow's pretty, but it piles up on roofs. Everyone's going to want their gutters looked at.`],birthday:`My birthday! I treated myself to a brand new chisel. And a cake. Mostly the chisel.`,gift:{loved:`Oh, YES. This is perfect. You get me. You really get me!`,liked:`Nice! Thanks, that's handy.`,neutral:`Oh, thanks! I'll find a use for it. I always find a use for things.`,disliked:`Hm. Not sure what I'd do with that. Thanks, though.`,hated:`Ugh, no thank you. Hard pass. I'm putting that right back in your hands.`,birthday:`A birthday present? You're the best! I'm building you something to say thanks.`,tooMany:`Whoa, slow down! You've given me plenty this week. Save some for the others!`},letters:{hearts3:`Hey farmer!
Had some leftover materials and thought of you. Put them to good use! And come by the shop, I want your opinion on a door.
- Juniper`,hearts6:`Hey friend,
I wrote down the recipe I eat before every big build. It's how I keep going. Now you can too. Don't tell anyone how spicy it is.
- Juniper`}},ollie:{intro:`Ahoy there, landlubber! Ollie's the name, and fish is the game. Sixty years on the water, and I've seen things that'd curl your hat.`,tiers:[[`Rods, bait and crab pots, right here. Fish, I buy. Stories, I give away free.`,`Did I ever tell you about the time I wrestled a tuna the size of a rowboat? I won. Barely.`,`Squid come out on winter nights. Octopus in summer mornings. The sea's got a timetable, matey.`,`Shop's shut when it rains. Not because I mind getting wet. My hat does.`,`Your grandad fished off this very pier. Terrible at it. Lovely man.`,`The beach throws up shells after a storm. Keep your eyes peeled.`,`Once caught a fish so big, I had to let it go. It wouldn't fit in the photograph.`,`Practice your casting. The fish can smell fear. That's science, that is.`,`Bram comes fishing with me on Fridays. Man's never caught a thing. I adore him.`],[`There's a sea serpent out past the rocks. Her name's Doris. We have an understanding.`,`You've got the makings of a fine angler. Bit slow on the reel, mind. Like a sleepy crab.`,`I lost three fingers to a giant clam once. Grew back. Sea air, see. Don't check, it's rude.`,`Pip asked if octopuses are real. Told 'em I've arm-wrestled one. Lost eight times in a row.`,`Hazel's teaching me to bake. The bread came out like ballast. Very good for anchoring.`,`A good fish stew's worth more than gold, I always say. And I've had plenty of gold. Briefly.`,`Marigold won't let me tell stories at the saloon past ten. Says folk need to go home sometime.`,`My old boat was called the Salty Biscuit. Best ship that ever sailed the bay. Leaked like a sieve.`],[`Truth be told, I never wrestled that tuna. It was a big herring. Don't tell Pip.`,`Nobody's asked about my stories in years till you came along. Keeps an old salt young.`,`I've got a spot on the pier. Best spot. I'm letting you use it. That's how much I like you.`,`Folk used to say I talked to the sea more than to people. These days I talk to you more than the sea.`,`Doris the serpent waved at me yesterday. Means she approves of you. High praise from Doris.`,`When I'm gone, I want you to have my lucky bait tin. Not soon, mind. I plan to live to two hundred.`,`You remind me of myself, young. Except you're sensible. And you can cook.`,`Sit with me a while and watch the tide. Best thing in the world, and it's free.`]],seasons:{spring:[`Spring tides bring the anchovies in. Little silver darts, they are.`,`The gulls are nesting. They tried to steal my hat again. Third year running.`],summer:[`Summer's pufferfish time. Prickly little blighters, but they fetch a price.`,`Hot sun, calm sea. Perfect day to do absolutely nothing but fish.`],fall:[`Fall brings the sea cucumbers. Ugly as sin and twice as squishy. Worth good coin, though.`,`The wind's picking up. Means the big ones are moving. Mark my words.`],winter:[`Winter fishing's for the tough. Squid bite at night if you can stand the cold.`,`Brr. My beard's got icicles in it. Makes me look distinguished, I reckon.`]},rain:[`Rain! Shop's closed, but the catfish and eels love it. Go fishing in the brook!`,`Rainy day, salty day. Come in, sit by the stove and I'll tell you about Doris.`],snow:[`Snow on the sand. Strange sight. Makes the whole beach look like a big frosted cake.`],birthday:`It's my birthday! Seventy-something. I stopped counting when I hit the age of my boat.`,gift:{loved:`Shiver me timbers! That's a treasure, that is. Thank you kindly!`,liked:`Ahh, that's a fine gift. Thank you, matey.`,neutral:`Well, thank you. I'll find a spot for it on the boat.`,disliked:`Hm. Not much use for that at sea, I'm afraid.`,hated:`Blimey, what is that? Get it off my pier before the gulls see!`,birthday:`For my birthday? Well, I'll be. You're a true friend, you are.`,tooMany:`Easy, easy! The hold's full this week. Bring it round another time.`},letters:{hearts3:`Ahoy, farmer!
I wrote this all by myself. Here's a little something from the shop. Don't tell the fish I gave you secrets.
- Captain Ollie`,hearts6:`Dear friend,
This is my old family recipe. My mother made it every time I came back from sea. Make it when you need a warm belly.
- Ollie`}},marigold:{intro:`Well, well. Fresh face. I'm Marigold, I run the saloon. Come by for supper, stay for the gossip, leave before Ollie starts a story.`,tiers:[[`Saloon opens at noon. Supper's hot, cooking recipes are for sale, and my opinions are free.`,`You're the one with the farm. You smell like soil and optimism. I'll get used to it.`,`Juniper fixes my chairs, Ollie breaks them telling stories. Balance.`,`If you've got dishes to sell, I'll buy them. I can't cook fast enough for this town.`,`Thistle has asked me to cater the hall's grand reopening. The hall doesn't have a roof.`,`Bram orders the same soup every day and pretends he hates it. Charming man.`,`My advice? Eat properly. A farmer running on parsnips is a farmer falling over in a field.`,`I came here for a summer twelve years ago. Kept forgetting to leave.`,`The saloon stays open till midnight. Somebody has to keep this town awake.`],[`You know, you're one of the few people here who doesn't ask me to put a story on their tab.`,`Hazel and I solve the town's problems over tea every Sunday. Last week we fixed the weather.`,`Pip asked for a glass of milk with a beetle in it. I said no. Pip said it was for the beetle.`,`I grew up in a city. Too loud. Here, the loudest thing is Thistle clearing his throat.`,`The secret to my pumpkin soup? A pinch of nutmeg and a lot of not telling anyone.`,`Wren came in last night, ordered tea, and said four words all evening. I treasured every one.`,`If the town had a heart, it'd be this bar. If it had a brain, it'd be Hazel. Ollie's the mouth.`,`You're quite good at listening. Most people just wait for their turn to talk.`],[`I saved you the best seat. By the window. It used to be mine.`,`Between us, I'm terrified of the mine. Don't let that get around. I have a reputation.`,`Some nights after closing I sit in the empty saloon and think: I made this. Now you're part of it.`,`I tell everyone you're my favourite customer. It's not a joke, though they think it is.`,`You're the first person here I'd trust with the saloon keys. Don't drop them in the brook.`,`When the hall's restored, we're dancing. I'm not asking. I'm informing you.`,`I used to think I'd leave one day. Now I think I'd miss you all too much. Annoying, really.`,`A wise friend is worth ten clever ones. Luckily, you're both. Don't let it go to your head.`]],seasons:{spring:[`Spring brings the tourists. Well, one tourist. He's lost and I'm feeding him soup.`,`Everyone's in a good mood in spring. It's exhausting.`],summer:[`Summer means cold drinks and Ollie telling the same tuna story to whoever'll listen.`,`The saloon's like an oven in summer. The pies love it, I don't.`],fall:[`Fall's my season. Pumpkins, cosy jumpers, and grapes for the wine. Bliss.`,`Thistle calls fall the season of harvest. I call it the season of soup orders.`],winter:[`Winter's when the saloon's fullest. Nobody wants to sit in a cold house alone.`,`There's a fire going and soup on the stove. Come warm up whenever you like.`]},rain:[`Rain means a full saloon and wet boots on my clean floor. A delightful trade.`,`Rainy days are for staying in. Luckily, my in is a saloon.`],snow:[`Snow, how romantic. Also, how slippery. Ollie's fallen on my steps twice already.`],birthday:`It's my birthday. I'm accepting compliments, presents, and silence about my age.`,gift:{loved:`Oh, now you're just showing off. This is marvellous. Thank you!`,liked:`How thoughtful. Thank you, darling.`,neutral:`Thank you. I'll put it somewhere very special. Probably a drawer.`,disliked:`Interesting choice. I'll... treasure the gesture.`,hated:`I'm going to pretend you didn't give me that, and we can both move on.`,birthday:`A birthday present! You remembered. I'm almost speechless. Almost.`,tooMany:`Darling, I've had enough presents this week. People will talk. Well, Hazel will.`},letters:{hearts3:`Darling,
You've become a regular, which means you get regular perks. Here's one. Don't tell Ollie, he'll want one too.
- Marigold`,hearts6:`Dear friend,
This is my secret recipe. I've never written it down for anyone. If you share it, I'll know. I always know.
- Marigold`}},wren:{intro:`Oh. Hello. I'm Wren. I run the ranch. If you get animals, I can help. They're... easier than people. No offence.`,tiers:[[`Hello.`,`I have hay, chickens and cows. If you want them. No rush.`,`Buttercup the cow likes having her ears scratched. Just there, behind the left one.`,`Chickens need a coop. Juniper builds them. Then you can come and pick a hen.`,`Your grandparents had a cow named Rosie. She was gentle. I was little, but I remember.`,`Sorry, I'm not very good at chatting. The hens think I'm hilarious, though.`,`Animals are happier when you talk to them every day. People are too, probably.`,`...`,`If an animal's sad, you can tell. They go quiet. Like me, I suppose.`],[`You've been kind to me. I noticed.`,`Clover, my oldest hen, pecked you yesterday. It means she likes you. She pecks me constantly.`,`Pip comes to see the chickens. Pip calls them dinosaurs. Pip isn't wrong.`,`I like mornings. Before anyone's awake, just me and the animals and the mist.`,`Marigold makes me tea and doesn't make me talk. I like that about her.`,`A happy hen lays a large egg. A happy cow gives rich milk. Kindness shows.`,`I used to be scared of talking to people. I'm a bit less scared of you.`,`I named the new calf. She's called Pudding. I'm sorry. She just looks like a Pudding.`],[`I saved the first egg of spring for you. It's silly. I wanted to.`,`You don't rush me when I talk. Thank you for that. It means more than you think.`,`Sometimes I practise what to say to you while I milk the cows. They're very patient.`,`When I was small, your grandmother let me feed Rosie. That's why I wanted a ranch. I never told anyone.`,`I think you might be my best friend. Besides Buttercup. You're very close, though.`,`Pudding follows you around the field now. Animals know good people.`,`I feel safe around you. Like the barn in a storm.`,`Will you come watch the sunset at the ranch sometime? The cows line up for it. They really do.`]],seasons:{spring:[`Spring is when the chicks hatch. Little fluff balls everywhere.`,`The grass is coming back. The cows are very happy about it.`],summer:[`It's hot. I keep the barn doors open so the animals get a breeze.`,`Summer evenings are long. Good for walking the fields.`],fall:[`Fall means I stock up on hay for winter. Lots and lots of hay.`,`The cows like the crunchy leaves. They eat them. I don't stop them.`],winter:[`In winter the animals stay inside. Make sure your coop and barn are cosy.`,`Cold days. I sleep in the barn sometimes, to keep the young ones company.`]},rain:[`The animals don't like the rain. Neither do I, much. It's loud on the barn roof.`,`Rain makes the grass grow. That's good for the cows.`],snow:[`Snow. The hens won't leave the coop. I don't blame them.`],birthday:`It's my birthday. Buttercup gave me a lick on the cheek. That's my present. It was enough.`,gift:{loved:`Oh! Oh, this is wonderful. Thank you. Truly.`,liked:`That's nice. Thank you.`,neutral:`Thank you.`,disliked:`Oh. Um. Thank you anyway.`,hated:`I... don't like this. I'm sorry. Please take it back.`,birthday:`For my birthday? I didn't think anyone knew. Thank you.`,tooMany:`You've given me so much this week. I don't know what to say. Maybe later?`},letters:{hearts3:`Dear farmer,
I'm better at writing than talking. Thank you for being patient with me. Here's a little something.
- Wren`,hearts6:`Dear friend,
I wanted to share this with you. My mother made it with fresh eggs from our first hens. It always made me feel safe.
- Wren`}},thistle:{intro:`Ahem! Welcome, welcome, to the fair town of Fernbrook! I am Mayor Thistle. Your arrival is, if I may say, a civic triumph.`,tiers:[[`As mayor, it is my solemn duty to welcome you. As a neighbour, it is my pleasure. Both, really.`,`The community hall was once the jewel of Fernbrook. It shall be again. Mark my words. Mark them twice.`,`I have prepared a short speech about the town's history. It is only two hours long.`,`Your grandparents were pillars of this community. Rather short pillars, but pillars all the same.`,`Fernbrook has the finest brook in the region. Possibly the world. I haven't checked the world.`,`The bundles in the hall need filling. Crops, fish, forage. Every little bit helps the town.`,`My bow tie is not too tight. I simply speak with great conviction.`,`Ollie tells me there's a sea serpent at the beach. I have added it to the census.`,`A mayor's work is never done. Unless it is lunch time. Then it is briefly done.`],[`You've done more for Fernbrook in a few weeks than the last three councils combined. I've told them so.`,`I keep a scrapbook of the town. You're in it now. Page forty. With a gold star.`,`Between us, the town treasury is mostly buttons. I'm working on it.`,`My late wife used to write my speeches. I've been winging it for ten years. Can you tell?`,`Hazel says I talk too much. Bram says I talk too loud. Marigold says both. They're all quite right.`,`Pip asked if I could make frogs the town mascot. I am considering it very seriously.`,`The purple waistcoat was a gift from the town for my twentieth year in office. I wear it with pride.`,`Restoring the hall isn't just about a building. It's about everyone gathering again.`],[`I've drafted a proclamation naming you an honorary citizen of the year. Every year. Indefinitely.`,`When I'm feeling low, I walk past your farm. The rows of crops cheer me right up.`,`I don't have many people I'd call close friends. I'd like to call you one, if that's all right.`,`Your grandmother once told me I was a good mayor. I've never forgotten it. I see her in you.`,`I may be pompous, but I mean every word. Even the very long words.`,`When the hall reopens, I'd like you to cut the ribbon. Don't argue, I've had the scissors polished.`,`I've been practising a speech in your honour. It's short. Only forty minutes.`,`Thank you for believing in this little town. It needed someone to.`]],seasons:{spring:[`Spring! A season of renewal, rebirth, and most importantly, council meetings.`,`The daffodils along the plaza were planted by my own hand. Well, Hazel's hand. I supervised.`],summer:[`Summer in Fernbrook. Warm, golden, perfect. I'm writing a poem about it. It rhymes badly.`,`My waistcoat is rather warm in summer. A mayor must suffer for his style.`],fall:[`Fall! The harvest season. A time for gratitude, community, and my annual speech.`,`The leaves are turning. I like to think they're turning gold in the town's honour.`],winter:[`Winter is a time for reflection. And for hot cocoa. Mostly hot cocoa.`,`The town is quiet in winter. I take the opportunity to rehearse speeches to the snowmen.`]},rain:[`Rain! A blessing for the crops, a menace for my spectacles.`,`On rainy days I review the town's finances. They are also rather damp.`],snow:[`Snow! I declare it a day of rest. Nobody listens, but I declare it anyway.`],birthday:`It's my birthday! I've declared it a town holiday. Unofficially. Officially it is merely a very good day.`,gift:{loved:`My word! A gift fit for a mayor! I'm deeply, deeply honoured.`,liked:`How delightful. On behalf of the town, and myself, thank you.`,neutral:`Ah, a gift! Most kind. I shall note it in the town ledger.`,disliked:`Hm. Well. One must accept gifts graciously. I am being very gracious right now.`,hated:`Good heavens! I cannot accept this! As mayor, I must decline. As a person, also decline.`,birthday:`A gift on my birthday! I shall add it to the official record of happy days.`,tooMany:`You are generous beyond measure! But a mayor must not be showered. Next week, perhaps.`},letters:{hearts3:`Esteemed farmer,
On behalf of the people of Fernbrook (that is, me), I present you with this token of civic gratitude.
Mayor Thistle`,hearts6:`My dear friend,
This recipe was my wife's. She made it for every town celebration. I would be honoured if you made it too.
Warm regards, Thistle`}},pip:{intro:`Whoa, are you the new farmer? I'm Pip! Do you have frogs on your farm? How many? Can I see them? Do you like beetles?`,tiers:[[`Do you know frogs drink through their skin? I tried it in the bath. It didn't work.`,`I found a beetle that looks like a jewel! I named it Sparkles. Sparkles bit me. Still love Sparkles.`,`Aunt Hazel says I can't keep worms in my pockets anymore. I'm keeping them in my socks.`,`The mine has bugs in it! Big ones! Aunt Hazel says I'm not allowed. Can you bring me one?`,`Wanna see my scab? It's shaped like a snail.`,`There's a frog in the brook that's HUGE. I call him King Ribbit. He's my best friend.`,`Ollie says he saw a sea monster. I believe him. Bram doesn't. Bram is wrong.`,`Vegetables are gross. Except strawberries. Strawberries are a fruit, so it doesn't count.`,`When I grow up I'm going to be a bug scientist. Or a frog. I haven't decided.`],[`You're the coolest grown-up in town. Except maybe Ollie. Ollie has a sea monster friend.`,`I gave Bram a frog. He named it Anvil. He says he didn't, but he did. I heard him.`,`Can I help on your farm? I'm really good at finding worms. Like, the best in town.`,`Wren let me hold a chick! It was so soft! It's like a fluffy bug but warmer.`,`I found a crayfish in the brook. They're like tiny lobsters. Tiny lobsters are my favourite.`,`I tried to teach King Ribbit a trick. He just sat there. That's his trick.`,`Juniper made me a bug house out of wood! It has six rooms. One for each leg.`,`Did you know snails have like a thousand teeth? I want a thousand teeth.`],[`You're my best friend. Well, you and King Ribbit. You're tied. Don't tell him.`,`I made you a drawing! It's you and me and every bug in Fernbrook. It took a whole afternoon.`,`Aunt Hazel says you're family now. That means you HAVE to come see my beetle collection.`,`When I'm scared at night I think about frogs. They're never scared. Then I'm not either.`,`I'm gonna name my next frog after you. It's the most important thing I can do.`,`Thank you for listening to all my bug facts. Most grown-ups stop after ten.`,`My mum and dad are away on a big boat, studying whales. I miss them. But I like it here a lot, especially with you.`,`When I'm a bug scientist, you can be my assistant. You get to hold the jar.`]],seasons:{spring:[`Spring has the most bugs! And tadpoles! TADPOLES!`,`I found a ladybug with seven spots. Lucky! Or unlucky for the aphids.`],summer:[`Summer is frog season. I've caught twelve. I let them go. I'm not a monster.`,`Fireflies come out at night in summer. They're bugs with lights on their bums. Amazing.`],fall:[`In fall, the bugs hide under the leaves. I jump in leaf piles to find them!`,`Spiders make the best webs in fall. I don't touch them. I just stare. A lot.`],winter:[`No bugs in winter. It's the worst. I'm drawing bugs instead.`,`Where do frogs go in winter? Under the mud? Can I go under the mud too?`]},rain:[`RAIN! The worms come out! I've been outside since breakfast!`,`Puddles are the best thing ever made. Even better than frogs. No, not better. Equal.`],snow:[`Snow is cool, but I can't find any bugs in it. I looked really hard.`],birthday:`It's my birthday! I'm nine and a whole day! Aunt Hazel made me a cake shaped like a frog!`,gift:{loved:`WHOA! This is the best thing EVER! You're the coolest!`,liked:`Cool! Thanks!`,neutral:`Oh. Okay. Thanks, I guess.`,disliked:`Eww. Why would you give me this?`,hated:`BLEGH! Gross gross GROSS! Is that a vegetable? Get it away before it touches me!`,birthday:`A birthday present?! For ME?! This is the best birthday in the history of birthdays!`,tooMany:`You gave me stuff already! Aunt Hazel says I can't be greedy. Next time, okay?`},letters:{hearts3:`Dear farmer
I found this and I think you should have it. Its not a bug. Sorry. I checked.
from Pip`,hearts6:`Dear best friend
Aunt Hazel helped me write this down. Its my favourite thing to eat. Make it and we can eat it together!!
love Pip`}}},Bc={welcome:{from:`Mayor Thistle`,text:`Dear farmer,
Welcome to Fernbrook! Your grandparents' farm has waited a long time for someone to love it again. Do come into town and meet everyone. The town is just east of your farm, along the road.
With great civic pride,
Mayor Thistle`},toolReady:{from:`Bram`,text:`Farmer,
Your tool's done. Come and get it from the smithy before it gets lonely.
- Bram`},hallIntro:{from:`Mayor Thistle`,text:`Dear farmer,
The community hall was once the beating heart of Fernbrook. It has fallen on hard times, as have its floorboards. If you could bring the bundles in the hall your crops, fish and forage, we might restore it together. Come by and I'll explain.
Mayor Thistle`},bundlesDone:{from:`Mayor Thistle`,text:`Dear farmer,
You've done it! Every bundle is filled and the hall stands proud once more. As thanks, Juniper and the town have restored your grandparents' greenhouse. It grows in any season. Fernbrook owes you a great deal.
Mayor Thistle`},birthdayReminder:{from:`Hazel`,text:`Hello love,
Just a little reminder: it's {name}'s birthday today! A thoughtful gift goes a long way.
Warmly, Hazel`},coopBuilt:{from:`Juniper`,text:`Hey farmer!
Your coop's finished, sturdy as anything. Head over to Wren's ranch to pick out some hens!
- Juniper`},barnBuilt:{from:`Juniper`,text:`Hey farmer!
The barn's up. Best one I've built, if I say so myself. And I do. Wren's got cows waiting for a good home.
- Juniper`},mineOpen:{from:`Bram`,text:`Farmer,
The rockslide at the mine's cleared. North of town. Take your pickaxe. Bring me ore. Come back in one piece.
- Bram`},summerStart:{from:`Hazel`,text:`Hello love,
Summer's here! I've got tomato, blueberry, melon, pepper and corn seeds in the store. Don't forget your hat.
Warmly, Hazel`},fallStart:{from:`Hazel`,text:`Hello love,
Fall's arrived! Pumpkin, cranberry, eggplant and yam seeds are on the shelves. I'll take all the jelly you can make.
Warmly, Hazel`},winterStart:{from:`Ollie`,text:`Ahoy farmer,
Winter's in. Nothing grows, so come fishing! Squid bite on cold nights. Or come hear about Doris. Either way.
- Ollie`},newYear:{from:`Mayor Thistle`,text:`Dear farmer,
A whole year in Fernbrook! The town is brighter for having you. Here's to another year of good harvests.
Mayor Thistle`}},Vc=[`Help wanted: {npc} needs {count} {item}. Will pay well!`,`{npc} is looking for {count} {item}. Bring them by within two days.`,`Wanted: {count} {item}, for {npc}. No questions asked.`,`{npc} would be ever so grateful for {count} {item}.`,`Can anyone spare {count} {item}? {npc} is in a pickle.`,`URGENT (says {npc}): {count} {item}, please!`,`{npc} needs {count} {item} for a secret project. Shh.`,`Seeking {count} {item}. See {npc}. Reward offered.`,`Fernbrook needs YOU to bring {npc} {count} {item}!`,`{npc} has a craving for {item}. {count}, to be exact.`,`{npc} wants {count} {item}. Says it's very important. Probably is.`,`Lost: {count} {item}. Actually, never had them. {npc} wants some.`],Hc=new Map;function K(e,t,n,r,i,a,o,s,c={}){Hc.set(e,{id:e,name:t,kind:n,icon:r,sellPrice:i,buyPrice:a,energy:o,description:s,...c})}var q=e=>200+e,Uc=(e,t=0,n)=>({tool:{type:e,tier:t,damage:n}});K(`Hoe`,`Hoe`,`tool`,0,0,0,0,`Turns grass into soil you can plant in.`,Uc(`hoe`)),K(`CopperHoe`,`Copper Hoe`,`tool`,q(4),0,0,0,`Hold to till three tiles in a row.`,Uc(`hoe`,1)),K(`IronHoe`,`Iron Hoe`,`tool`,q(5),0,0,0,`Hold to till five tiles in a row.`,Uc(`hoe`,2)),K(`GoldHoe`,`Gold Hoe`,`tool`,q(6),0,0,0,`Hold to till a 3x3 square.`,Uc(`hoe`,3)),K(`WateringCan`,`Watering Can`,`tool`,1,0,0,0,`Waters soil. Refill it at the pond or the brook.`,Uc(`can`)),K(`CopperCan`,`Copper Can`,`tool`,q(7),0,0,0,`Holds more water. Hold to water three tiles.`,Uc(`can`,1)),K(`IronCan`,`Iron Can`,`tool`,q(8),0,0,0,`Hold to water five tiles in a row.`,Uc(`can`,2)),K(`GoldCan`,`Gold Can`,`tool`,q(9),0,0,0,`Hold to water a 3x3 square.`,Uc(`can`,3)),K(`Axe`,`Axe`,`tool`,q(0),0,0,0,`Chops twigs, stumps and trees.`,Uc(`axe`,0,1)),K(`CopperAxe`,`Copper Axe`,`tool`,q(10),0,0,0,`Chops faster; can split large stumps.`,Uc(`axe`,1,2)),K(`IronAxe`,`Iron Axe`,`tool`,q(11),0,0,0,`Chops much faster.`,Uc(`axe`,2,3)),K(`GoldAxe`,`Gold Axe`,`tool`,q(12),0,0,0,`Fells a tree in a few swings.`,Uc(`axe`,3,5)),K(`Pickaxe`,`Pickaxe`,`tool`,q(1),0,0,0,`Breaks stones and picks up placed objects.`,Uc(`pickaxe`,0,1)),K(`CopperPickaxe`,`Copper Pickaxe`,`tool`,q(13),0,0,0,`Breaks rocks faster; can break boulders.`,Uc(`pickaxe`,1,2)),K(`IronPickaxe`,`Iron Pickaxe`,`tool`,q(14),0,0,0,`Breaks rocks much faster.`,Uc(`pickaxe`,2,3)),K(`GoldPickaxe`,`Gold Pickaxe`,`tool`,q(15),0,0,0,`Shatters almost anything.`,Uc(`pickaxe`,3,5)),K(`Scythe`,`Scythe`,`tool`,q(2),0,0,0,`Cuts weeds (for fiber) and clears dead crops. Costs no energy.`,Uc(`scythe`)),K(`MilkPail`,`Milk Pail`,`tool`,q(3),0,500,0,`Milks a cow once a day.`,Uc(`pail`)),K(`FishingRod`,`Bamboo Rod`,`tool`,2,0,0,0,`Hold to charge a cast, release to throw. Click when a fish bites!`,Uc(`rod`,0)),K(`FiberglassRod`,`Fiberglass Rod`,`tool`,q(16),0,1800,0,`A better rod: uses bait (faster bites) and a bigger bar.`,Uc(`rod`,1)),K(`IridiumRod`,`Iridium Rod`,`tool`,q(17),0,7500,0,`The best rod: a much bigger bar, and bait.`,Uc(`rod`,2)),K(`RustySword`,`Rusty Sword`,`tool`,q(18),50,0,0,`Better than nothing.`,Uc(`sword`,0,5)),K(`SteelSword`,`Steel Sword`,`tool`,q(19),250,2e3,0,`A reliable blade.`,Uc(`sword`,1,12)),K(`SilverSaber`,`Silver Saber`,`tool`,q(20),400,0,0,`Light and quick.`,Uc(`sword`,2,20)),K(`LavaKatana`,`Lava Katana`,`tool`,q(21),1e3,0,0,`Forged in the deep mines.`,Uc(`sword`,3,34)),K(`ParsnipSeeds`,`Parsnip Seeds`,`seed`,8,10,20,0,`Spring. Grows in 4 days.`),K(`PotatoSeeds`,`Potato Seeds`,`seed`,9,25,50,0,`Spring. Grows in 6 days. Sometimes an extra potato.`),K(`CauliflowerSeeds`,`Cauliflower Seeds`,`seed`,10,40,80,0,`Spring. Grows in 8 days into a big, valuable head.`),K(`StrawberrySeeds`,`Strawberry Seeds`,`seed`,11,50,100,0,`Spring. 8 days, then fruits every 4 days.`),K(`TomatoSeeds`,`Tomato Seeds`,`seed`,q(24),25,50,0,`Summer. 6 days, then fruits every 4 days.`),K(`BlueberrySeeds`,`Blueberry Seeds`,`seed`,q(25),40,80,0,`Summer. 8 days, then 3 berries every 4 days.`),K(`MelonSeeds`,`Melon Seeds`,`seed`,q(26),40,80,0,`Summer. Grows in 10 days into a big melon.`),K(`HotPepperSeeds`,`Hot Pepper Seeds`,`seed`,q(27),20,40,0,`Summer. 5 days, then peppers every 3 days.`),K(`CornSeeds`,`Corn Seeds`,`seed`,q(28),75,150,0,`Summer and fall. 10 days, then every 4 days.`),K(`PumpkinSeeds`,`Pumpkin Seeds`,`seed`,q(29),50,100,0,`Fall. Grows in 10 days into a big pumpkin.`),K(`CranberrySeeds`,`Cranberry Seeds`,`seed`,q(30),120,240,0,`Fall. 7 days, then 2 berries every 5 days.`),K(`EggplantSeeds`,`Eggplant Seeds`,`seed`,q(31),10,20,0,`Fall. 5 days, then every 5 days.`),K(`YamSeeds`,`Yam Seeds`,`seed`,q(32),30,60,0,`Fall. Grows in 8 days.`),K(`Acorn`,`Acorn`,`seed`,q(138),10,0,0,`Plant it on grass to grow an oak tree.`),K(`PineCone`,`Pine Cone`,`seed`,q(139),10,0,0,`Plant it on grass to grow a pine tree.`),K(`Parsnip`,`Parsnip`,`crop`,16,35,0,15,`A crunchy spring root.`),K(`Potato`,`Potato`,`crop`,17,80,0,20,`A humble, hearty tuber.`),K(`Cauliflower`,`Cauliflower`,`crop`,18,175,0,45,`Worth the wait.`),K(`Strawberry`,`Strawberry`,`crop`,19,120,0,20,`Sweet and bright red.`,{fruit:!0}),K(`Tomato`,`Tomato`,`crop`,q(34),60,0,20,`Juicy and sun-warmed.`,{fruit:!0}),K(`Blueberry`,`Blueberry`,`crop`,q(35),50,0,25,`A handful of summer.`,{fruit:!0}),K(`Melon`,`Melon`,`crop`,q(36),250,0,60,`Cool and sweet.`,{fruit:!0}),K(`HotPepper`,`Hot Pepper`,`crop`,q(37),40,0,13,`Fiery. Handle with care.`,{fruit:!0}),K(`Corn`,`Corn`,`crop`,q(38),50,0,25,`Golden kernels.`),K(`Pumpkin`,`Pumpkin`,`crop`,q(39),320,0,0,`A fall favourite.`),K(`Cranberries`,`Cranberries`,`crop`,q(40),75,0,25,`Tart little jewels.`,{fruit:!0}),K(`Eggplant`,`Eggplant`,`crop`,q(41),60,0,20,`Glossy and purple.`),K(`Yam`,`Yam`,`crop`,q(42),160,0,30,`Starchy and sweet.`),K(`WildHorseradish`,`Wild Horseradish`,`forage`,q(43),50,0,13,`A spicy spring root.`),K(`Daffodil`,`Daffodil`,`forage`,q(44),30,0,0,`A cheerful spring flower.`),K(`Leek`,`Leek`,`forage`,q(45),60,0,30,`A mild onion.`),K(`Dandelion`,`Dandelion`,`forage`,q(46),40,0,25,`Not just a weed.`),K(`SpiceBerry`,`Spice Berry`,`forage`,q(47),80,0,25,`Hot and sweet.`,{fruit:!0}),K(`Grape`,`Grape`,`forage`,q(48),80,0,38,`A wild bunch.`,{fruit:!0}),K(`SweetPea`,`Sweet Pea`,`forage`,q(49),50,0,0,`A fragrant summer flower.`),K(`CommonMushroom`,`Common Mushroom`,`forage`,q(50),40,0,38,`Earthy.`),K(`WildPlum`,`Wild Plum`,`forage`,q(51),80,0,25,`Tart and juicy.`,{fruit:!0}),K(`Hazelnut`,`Hazelnut`,`forage`,q(52),90,0,30,`A fall treat.`),K(`Blackberry`,`Blackberry`,`forage`,q(53),20,0,25,`From the brambles.`,{fruit:!0}),K(`CrystalFruit`,`Crystal Fruit`,`forage`,q(54),150,0,40,`Grows only in winter.`,{fruit:!0}),K(`Holly`,`Holly`,`forage`,q(55),80,0,0,`Bright winter berries. Not for eating.`),K(`SnowYam`,`Snow Yam`,`forage`,q(56),100,0,30,`Dug from winter ground.`),K(`WinterRoot`,`Winter Root`,`forage`,q(57),70,0,25,`Dug from winter ground.`),K(`Clam`,`Clam`,`forage`,q(58),50,0,0,`Found on the beach.`),K(`Coral`,`Coral`,`forage`,q(59),80,0,0,`Washed up by the tide.`),K(`RainbowShell`,`Rainbow Shell`,`forage`,q(60),300,0,0,`A rare and beautiful shell.`),K(`SeaUrchin`,`Sea Urchin`,`forage`,q(61),160,0,0,`Spiny.`),K(`Wood`,`Wood`,`resource`,q(62),2,10,0,`For building and crafting.`),K(`Stone`,`Stone`,`resource`,q(63),2,20,0,`For building and crafting.`),K(`Fiber`,`Fiber`,`resource`,q(64),1,0,0,`Tough plant fibre, from weeds.`),K(`Sap`,`Sap`,`resource`,q(65),2,0,0,`Sticky stuff from trees.`),K(`Coal`,`Coal`,`resource`,q(66),15,150,0,`Burns hot. For smelting.`),K(`CopperOre`,`Copper Ore`,`resource`,q(67),5,75,0,`Smelt 5 with coal into a copper bar.`),K(`IronOre`,`Iron Ore`,`resource`,q(68),10,150,0,`Smelt 5 with coal into an iron bar.`),K(`GoldOre`,`Gold Ore`,`resource`,q(69),25,400,0,`Smelt 5 with coal into a gold bar.`),K(`CopperBar`,`Copper Bar`,`resource`,q(70),60,0,0,`For crafting and tool upgrades.`),K(`IronBar`,`Iron Bar`,`resource`,q(71),120,0,0,`For crafting and tool upgrades.`),K(`GoldBar`,`Gold Bar`,`resource`,q(72),250,0,0,`For crafting and tool upgrades.`),K(`Hay`,`Hay`,`resource`,q(73),0,50,0,`Animal feed.`),K(`Hardwood`,`Hardwood`,`resource`,q(74),15,0,0,`Dense wood from large stumps.`),K(`Geode`,`Geode`,`geode`,q(75),50,0,0,`Bram can crack it open at the smithy.`),K(`FrozenGeode`,`Frozen Geode`,`geode`,q(76),100,0,0,`Bram can crack it open at the smithy.`),K(`MagmaGeode`,`Magma Geode`,`geode`,q(77),150,0,0,`Bram can crack it open at the smithy.`),K(`Quartz`,`Quartz`,`mineral`,q(78),25,0,0,`A clear crystal.`),K(`Amethyst`,`Amethyst`,`mineral`,q(79),100,0,0,`A purple gem.`),K(`Topaz`,`Topaz`,`mineral`,q(80),80,0,0,`A golden gem.`),K(`Emerald`,`Emerald`,`mineral`,q(81),250,0,0,`A brilliant green gem.`),K(`Ruby`,`Ruby`,`mineral`,q(82),250,0,0,`A deep red gem.`),K(`Diamond`,`Diamond`,`mineral`,q(83),750,0,0,`Rare and dazzling.`),K(`EarthCrystal`,`Earth Crystal`,`mineral`,q(84),50,0,0,`From a geode.`),K(`FrozenTear`,`Frozen Tear`,`mineral`,q(85),75,0,0,`From a frozen geode.`),K(`FireQuartz`,`Fire Quartz`,`mineral`,q(86),100,0,0,`From a magma geode.`),K(`Slime`,`Slime`,`monster`,q(87),5,0,0,`Gooey.`),K(`BugMeat`,`Bug Meat`,`monster`,q(88),8,0,0,`Makes good bait.`),K(`BatWing`,`Bat Wing`,`monster`,q(89),15,0,0,`Leathery.`),K(`Bait`,`Bait`,`bait`,q(90),1,5,0,`Hold your fiberglass or iridium rod and use bait from the backpack: fish bite faster.`),K(`Egg`,`Egg`,`animal`,q(91),50,0,25,`A fresh hen's egg.`),K(`LargeEgg`,`Large Egg`,`animal`,q(92),95,0,38,`From a very happy hen.`),K(`Milk`,`Milk`,`animal`,q(93),125,0,38,`Fresh from the cow.`),K(`LargeMilk`,`Large Milk`,`animal`,q(94),190,0,50,`From a very happy cow.`),K(`Jelly`,`Jelly`,`artisan`,q(95),0,0,25,`Fruit preserved in a jar.`),K(`Pickles`,`Pickles`,`artisan`,q(96),0,0,25,`Vegetables pickled in a jar.`),K(`Wine`,`Wine`,`artisan`,q(97),0,0,0,`Fruit aged in a keg.`),K(`Juice`,`Juice`,`artisan`,q(98),0,0,30,`Vegetables pressed in a keg.`),K(`Mayonnaise`,`Mayonnaise`,`artisan`,q(99),190,0,25,`Smooth and creamy.`),K(`Cheese`,`Cheese`,`artisan`,q(100),230,0,50,`A wheel of cheese.`),K(`Honey`,`Honey`,`artisan`,q(101),100,0,0,`From the bee house.`),K(`Sunfish`,`Sunfish`,`fish`,24,30,0,13,`Pond. Bites on sunny days.`),K(`Carp`,`Carp`,`fish`,25,30,0,13,`Pond. Common at any hour.`),K(`LargemouthBass`,`Largemouth Bass`,`fish`,26,100,0,15,`Pond. Daytime.`),K(`Bullhead`,`Bullhead`,`fish`,27,75,0,15,`Pond. Slow and steady.`),K(`Chub`,`Chub`,`fish`,28,50,0,13,`Brook. Darts about.`),K(`Bream`,`Bream`,`fish`,29,45,0,13,`Brook. Comes out at night.`),K(`RainbowTrout`,`Rainbow Trout`,`fish`,30,65,0,15,`Brook, summer. Sunny days.`),K(`Pike`,`Pike`,`fish`,31,100,0,15,`Brook, summer and winter. A fierce fighter.`),K(`Catfish`,`Catfish`,`fish`,32,200,0,20,`Brook, spring and fall. Only bites in the rain.`),K(`GoldenKoi`,`Golden Koi`,`fish`,33,1e3,0,0,`Pond. A shimmering legend.`),K(`Tilapia`,`Tilapia`,`fish`,q(112),75,0,13,`Pond, summer and fall.`),K(`Walleye`,`Walleye`,`fish`,q(113),105,0,15,`Brook, fall and winter, on rainy evenings.`),K(`Salmon`,`Salmon`,`fish`,q(114),75,0,15,`Brook, fall. Swimming upstream.`),K(`Perch`,`Perch`,`fish`,q(115),55,0,13,`Pond and brook, winter.`),K(`SmallmouthBass`,`Smallmouth Bass`,`fish`,q(116),50,0,13,`Brook, spring and fall.`),K(`Anchovy`,`Anchovy`,`fish`,q(102),30,0,10,`Ocean, spring and fall.`),K(`Sardine`,`Sardine`,`fish`,q(103),40,0,10,`Ocean, spring, fall and winter. Mornings.`),K(`Tuna`,`Tuna`,`fish`,q(104),100,0,20,`Ocean, summer and winter.`),K(`RedSnapper`,`Red Snapper`,`fish`,q(105),50,0,13,`Ocean, summer and fall, in the rain.`),K(`Pufferfish`,`Pufferfish`,`fish`,q(106),200,0,0,`Ocean, summer afternoons. Puffs up when threatened.`),K(`Halibut`,`Halibut`,`fish`,q(107),80,0,15,`Ocean, spring, summer and winter.`),K(`Eel`,`Eel`,`fish`,q(108),85,0,15,`Ocean, spring and fall, rainy nights.`),K(`Octopus`,`Octopus`,`fish`,q(109),150,0,0,`Ocean, summer mornings. Slippery!`),K(`Squid`,`Squid`,`fish`,q(110),80,0,13,`Ocean, winter nights.`),K(`SeaCucumber`,`Sea Cucumber`,`fish`,q(111),75,0,0,`Ocean, fall and winter.`),K(`IcePip`,`Ice Pip`,`fish`,q(117),500,0,0,`Mine pools, floors 11-20.`),K(`LavaEel`,`Lava Eel`,`fish`,q(118),700,0,0,`Lava pools, floors 21-30.`),K(`Crab`,`Crab`,`fish`,q(119),100,0,15,`From a crab pot in the ocean.`),K(`Lobster`,`Lobster`,`fish`,q(120),120,0,15,`From a crab pot in the ocean.`),K(`Shrimp`,`Shrimp`,`fish`,q(121),60,0,13,`From a crab pot in the ocean.`),K(`Crayfish`,`Crayfish`,`fish`,q(122),75,0,13,`From a crab pot in fresh water.`),K(`Driftwood`,`Driftwood`,`junk`,34,2,0,0,`Well, it's something.`),K(`SoggyNewspaper`,`Soggy Newspaper`,`junk`,35,2,0,0,`Yesterday's news.`),K(`Chest`,`Chest`,`craftable`,q(123),0,0,0,`Place it to store 24 stacks of items.`),K(`Scarecrow`,`Scarecrow`,`craftable`,q(124),0,0,0,`Keeps crows off crops within 8 tiles.`),K(`Sprinkler`,`Sprinkler`,`craftable`,q(125),0,0,0,`Waters the 4 tiles around it every morning.`),K(`QualitySprinkler`,`Quality Sprinkler`,`craftable`,q(126),0,0,0,`Waters the 8 tiles around it every morning.`),K(`BeeHouse`,`Bee House`,`craftable`,q(127),0,0,0,`Makes honey every 4 days (not in winter).`),K(`PreservesJar`,`Preserves Jar`,`craftable`,q(128),0,0,0,`Turns fruit into jelly and vegetables into pickles.`),K(`Keg`,`Keg`,`craftable`,q(129),0,0,0,`Turns fruit into wine and vegetables into juice.`),K(`Furnace`,`Furnace`,`craftable`,q(130),0,0,0,`Smelts 5 ore and 1 coal into a bar.`),K(`MayonnaiseMachine`,`Mayonnaise Machine`,`craftable`,q(131),0,0,0,`Turns eggs into mayonnaise.`),K(`CheesePress`,`Cheese Press`,`craftable`,q(132),0,0,0,`Turns milk into cheese.`);var Wc=e=>400+e;K(`Rainbell`,`Rainbell`,`crop`,Wc(0),80,0,10,`Blue bells that only open after rain. An ingredient.`),K(`RainbellSeeds`,`Rainbell Seeds`,`seed`,Wc(1),10,0,0,`Grows only on nights after a wet day. 5 days.`),K(`Moonmint`,`Moonmint`,`crop`,Wc(2),70,0,15,`Silvery mint that glows faintly at night. An ingredient.`),K(`MoonmintSeeds`,`Moonmint Seeds`,`seed`,Wc(3),10,0,0,`Grows only if watered after 8 pm. 4 days, then every 3.`),K(`Waterlily`,`Water Lily`,`crop`,Wc(4),90,0,5,`A pale lily from the pond. An ingredient.`),K(`LilyBulb`,`Lily Bulb`,`seed`,Wc(5),15,0,0,`Plant it in pond water. 6 days, then every 4.`),K(`Glowcap`,`Glowcap`,`crop`,Wc(6),100,0,10,`A mushroom that glows in the dark. An ingredient.`),K(`GlowcapSpores`,`Glowcap Spores`,`seed`,Wc(7),15,0,0,`Sow them on the floor of the mine's cave room. 5 days, then every 3.`),K(`Emberroot`,`Emberroot`,`crop`,Wc(8),120,0,20,`A root that stays warm in your hand. An ingredient.`),K(`EmberrootSeeds`,`Emberroot Seeds`,`seed`,Wc(9),15,0,0,`Winter. Grows only within two tiles of a furnace. 6 days.`),K(`FoolsClover`,`Fool's Clover`,`crop`,Wc(10),60,0,5,`Every one has four leaves. An ingredient.`),K(`CloverSeeds`,`Clover Seeds`,`seed`,Wc(11),10,0,0,`Spreads to tilled soil next to it. 5 days.`),K(`Notebook`,`Nell's Notebook`,`key`,Wc(12),0,0,0,`Grandma's stillroom notebook: herbs, aspects and brews. Use it to read.`),K(`PocketWatch`,`Pocket Watch`,`key`,Wc(13),0,0,0,`Grandpa's watch. It ticks a little slower than it should.`),K(`MessageBottle`,`Message Bottle`,`key`,Wc(14),0,0,0,`A corked bottle with a rolled-up note inside.`),K(`Cauldron`,`Cauldron`,`craftable`,Wc(15),0,0,0,`Nell's cauldron. Place it, then brew two or three ingredients overnight.`),K(`GrowthTonic`,`Growth Tonic`,`potion`,Wc(16),150,0,0,`Use on a growing crop (a day's growth) or a young tree (a stage).`),K(`RainCharm`,`Rain Charm`,`potion`,Wc(17),200,0,0,`Use outdoors: rain tomorrow (snow in winter).`),K(`WarmthDraught`,`Warmth Draught`,`potion`,Wc(18),180,0,0,`Use on soil: the crops around it won't wither when the season turns.`),K(`CalmingDraught`,`Calming Draught`,`potion`,Wc(19),160,0,0,`Use in the coop or barn (happier animals), or in the mine (sleeping monsters).`),K(`LightPhilter`,`Light Philter`,`potion`,Wc(20),220,0,0,`Use in the mine: it lights the floor and shows where a ladder is.`),K(`LuckTonic`,`Luck Tonic`,`potion`,Wc(21),200,0,0,`Drink it: luck all day (fish bite sooner, more treasure).`),K(`BottledSunshine`,`Bottled Sunshine`,`potion`,Wc(22),400,0,0,`Use outdoors: sun tomorrow, and every crop on the farm grows a day.`),K(`FairyRing`,`Fairy Ring`,`potion`,Wc(23),350,0,0,`Pour it on open grass: a ring of mushrooms springs up.`),K(`SweetDreams`,`Sweet Dreams`,`potion`,Wc(24),300,0,0,`A gift everyone in town loves.`),K(`MurkyBrew`,`Murky Brew`,`potion`,Wc(25),5,0,0,`It smells awful. Use on fresh soil as fertilizer.`),K(`AppleSapling`,`Apple Sapling`,`seed`,Wc(26),0,0,0,`Nell's apple tree. Plant it on open ground.`),K(`CherrySapling`,`Cherry Sapling`,`seed`,Wc(27),0,0,0,`Nell's cherry tree. Plant it on open ground.`),K(`Apple`,`Apple`,`crop`,Wc(28),100,0,20,`Crisp and sweet, from an old tree.`,{fruit:!0}),K(`Cherry`,`Cherries`,`crop`,Wc(29),80,0,15,`Dark and sweet.`,{fruit:!0}),K(`CrabPot`,`Crab Pot`,`craftable`,q(133),0,1500,0,`Place it in water with bait; check it each morning.`),K(`BasicFertilizer`,`Basic Fertilizer`,`fertilizer`,q(134),2,100,0,`Use on tilled soil: better crop quality.`),K(`SpeedGro`,`Speed-Gro`,`fertilizer`,q(135),20,100,0,`Use on tilled soil: crops grow 10% faster.`),K(`WoodPath`,`Wood Path`,`craftable`,q(136),1,0,0,`A plank floor to place on the ground.`),K(`StonePath`,`Stone Path`,`craftable`,q(137),1,0,0,`A cobbled floor to place on the ground.`),K(`CoopDeed`,`Coop`,`deed`,q(154),0,4e3,0,`Juniper builds a coop on your farm (2 days). Needs 300 wood and 100 stone.`),K(`BarnDeed`,`Barn`,`deed`,q(155),0,6e3,0,`Juniper builds a barn on your farm (2 days). Needs 350 wood and 150 stone.`),K(`ChickenLivestock`,`Chicken`,`deed`,q(156),0,800,0,`A hen for your coop. Lays an egg every day.`),K(`CowLivestock`,`Cow`,`deed`,q(157),0,1500,0,`A cow for your barn. Milk her once a day.`),K(`FriedEgg`,`Fried Egg`,`cooked`,q(140),35,0,50,`Sunny side up.`),K(`Omelet`,`Omelet`,`cooked`,q(141),125,0,80,`Fluffy. Gives +1 Farming for the day.`),K(`Salad`,`Salad`,`cooked`,q(142),110,0,75,`Fresh and crisp.`),K(`ParsnipSoup`,`Parsnip Soup`,`cooked`,q(143),120,0,70,`Warming.`),K(`Sashimi`,`Sashimi`,`cooked`,q(144),75,0,60,`Raw fish, sliced thin.`),K(`FishStew`,`Fish Stew`,`cooked`,q(145),175,0,90,`Gives +2 Fishing for the day.`),K(`PumpkinSoup`,`Pumpkin Soup`,`cooked`,q(146),300,0,100,`Gives +2 Luck for the day.`),K(`GlazedYams`,`Glazed Yams`,`cooked`,q(147),200,0,100,`Sticky and sweet.`),K(`BlueberryTart`,`Blueberry Tart`,`cooked`,q(148),150,0,80,`Gives a burst of speed.`),K(`PepperPoppers`,`Pepper Poppers`,`cooked`,q(149),200,0,70,`Gives +1 Farming and a burst of speed.`),K(`CranberrySauce`,`Cranberry Sauce`,`cooked`,q(150),120,0,60,`Gives +2 Mining for the day.`),K(`FriedMushroom`,`Fried Mushroom`,`cooked`,q(151),200,0,90,`Gives +2 Defence for the day.`),K(`CornChowder`,`Corn Chowder`,`cooked`,q(152),180,0,90,`Creamy and filling.`),K(`TomatoSalad`,`Tomato Salad`,`cooked`,q(153),140,0,70,`Summer on a plate.`);function J(e){let t=Hc.get(e);if(!t)throw Error(`unknown item ${e}`);return t}var Gc=[...Hc.values()],Kc=e=>e.kind!==`tool`&&e.kind!==`deed`&&e.kind!==`key`&&(e.sellPrice>0||e.kind===`artisan`),qc=e=>e.energy>0,Jc=e=>e.kind===`tool`?1:G.maxStack,Yc=e=>e?J(e).tool??null:null,Xc={spring:[`ParsnipSeeds`,`PotatoSeeds`,`CauliflowerSeeds`,`StrawberrySeeds`],summer:[`TomatoSeeds`,`BlueberrySeeds`,`MelonSeeds`,`HotPepperSeeds`,`CornSeeds`],fall:[`PumpkinSeeds`,`CranberrySeeds`,`EggplantSeeds`,`YamSeeds`,`CornSeeds`],winter:[]},Zc={hazel:{id:`hazel`,name:`Hazel`,role:`runs the general store`,birthday:{season:`spring`,day:11},loved:[`Hazelnut`,`Jelly`,`BlueberryTart`,`Honey`,`SweetPea`,`Daffodil`],liked:[`Strawberry`,`Blueberry`,`Cauliflower`,`Egg`,`Cheese`,`Leek`,`Grape`,`Pumpkin`],disliked:[`HotPepper`,`Sardine`,`Coal`,`BugMeat`],hated:[`SeaCucumber`,`BatWing`]},bram:{id:`bram`,name:`Bram`,role:`the blacksmith`,birthday:{season:`winter`,day:6},loved:[`GoldBar`,`IronBar`,`Diamond`,`Ruby`,`Emerald`,`FireQuartz`],liked:[`CopperBar`,`Coal`,`Amethyst`,`Topaz`,`Quartz`,`Hardwood`,`Cheese`,`FishStew`,`SweetPea`],disliked:[`Salad`,`Jelly`,`Dandelion`,`Clam`],hated:[`SeaUrchin`,`Mayonnaise`]},juniper:{id:`juniper`,name:`Juniper`,role:`the carpenter`,birthday:{season:`summer`,day:3},loved:[`Hardwood`,`PepperPoppers`,`CornChowder`,`Juice`,`Omelet`,`SpiceBerry`],liked:[`Wood`,`Sap`,`HotPepper`,`Corn`,`Potato`,`Egg`,`Topaz`,`FriedEgg`],disliked:[`SweetPea`,`Holly`,`Coral`],hated:[`Pufferfish`,`SeaCucumber`]},ollie:{id:`ollie`,name:`Ollie`,role:`keeps the fish shop on the beach`,birthday:{season:`summer`,day:12},loved:[`FishStew`,`Sashimi`,`Lobster`,`Octopus`,`Wine`],liked:[`Tuna`,`Halibut`,`Squid`,`Crab`,`Shrimp`,`Coral`,`Clam`,`Cheese`,`Driftwood`,`Pickles`],disliked:[`Salad`,`TomatoSalad`,`Daffodil`],hated:[`Holly`,`BatWing`]},marigold:{id:`marigold`,name:`Marigold`,role:`runs the saloon`,birthday:{season:`fall`,day:5},loved:[`Wine`,`PumpkinSoup`,`GlazedYams`,`Grape`,`Diamond`],liked:[`Juice`,`Jelly`,`Strawberry`,`Melon`,`Cranberries`,`CranberrySauce`,`Amethyst`,`WildPlum`,`Honey`],disliked:[`Carp`,`Bullhead`,`Parsnip`,`Clam`],hated:[`BugMeat`,`SeaCucumber`]},wren:{id:`wren`,name:`Wren`,role:`runs the ranch`,birthday:{season:`spring`,day:4},loved:[`LargeEgg`,`LargeMilk`,`Cheese`,`Mayonnaise`,`Omelet`],liked:[`Egg`,`Milk`,`FriedEgg`,`Hay`,`Dandelion`,`Blackberry`,`Honey`,`Pumpkin`,`Corn`],disliked:[`HotPepper`,`Coal`,`CopperOre`,`Pufferfish`],hated:[`BatWing`,`Sashimi`]},thistle:{id:`thistle`,name:`Thistle`,role:`the mayor of Fernbrook`,birthday:{season:`fall`,day:12},loved:[`GoldenKoi`,`ParsnipSoup`,`Cauliflower`,`Amethyst`,`CrystalFruit`,`Melon`],liked:[`Wine`,`Cheese`,`Strawberry`,`Pumpkin`,`Daffodil`,`Emerald`,`Topaz`,`Hazelnut`,`Holly`],disliked:[`HotPepper`,`Coal`,`Sap`,`Fiber`],hated:[`BugMeat`,`Eel`]},pip:{id:`pip`,name:`Pip`,role:`a kid who lives above the store with Aunt Hazel`,birthday:{season:`winter`,day:10},loved:[`BugMeat`,`SeaUrchin`,`Crayfish`,`RainbowShell`,`BlueberryTart`],liked:[`Slime`,`BatWing`,`Crab`,`Shrimp`,`Clam`,`Coral`,`Quartz`,`Strawberry`,`FriedEgg`,`Melon`],disliked:[`Leek`,`Eggplant`,`Cauliflower`,`TomatoSalad`,`Pickles`],hated:[`Salad`,`Parsnip`,`ParsnipSoup`,`Juice`]}},Qc=[`FriedEgg`,`Omelet`,`Salad`,`ParsnipSoup`,`Sashimi`,`FishStew`,`PumpkinSoup`,`GlazedYams`,`BlueberryTart`,`PepperPoppers`,`CranberrySauce`,`FriedMushroom`,`CornChowder`,`TomatoSalad`],$c=[`Driftwood`,`SoggyNewspaper`,`Slime`];function el(e,t){return e.item===t.item&&(e.quality??0)===(t.quality??0)&&(e.source??null)===(t.source??null)}var tl=[1,1.25,1.5];function nl(e,t){let n=J(e);if(n.kind!==`artisan`||!t)return n.sellPrice;let r=J(t).sellPrice;switch(e){case`Jelly`:case`Pickles`:return 2*r+50;case`Wine`:return 3*r;case`Juice`:return Math.floor(2.25*r);default:return n.sellPrice}}function rl(e){return Math.floor(nl(e.item,e.source)*tl[e.quality??0])}function il(e){let t=J(e.item);return e.source&&t.kind===`artisan`?`${J(e.source).name} ${t.name}`:t.name}var al=class{slots;constructor(e){this.slots=e}static empty(e=G.backpackSlots){return Array(e).fill(null)}at(e){return e>=0&&e<this.slots.length?this.slots[e]:null}count(e,t){return this.slots.reduce((n,r)=>n+(r?.item===e&&(t===void 0||(r.quality??0)===t)?r.count:0),0)}spaceFor(e,t={}){let n=Jc(J(e)),r={item:e,...t};return this.slots.reduce((e,t)=>e+(t===null?n:el(t,r)?n-t.count:0),0)}add(e,t,n={}){let r=Jc(J(e)),i={item:e,...n};for(let e=0;e<this.slots.length&&t>0;e++){let n=this.slots[e];if(n&&el(n,i)&&n.count<r){let e=Math.min(t,r-n.count);n.count+=e,t-=e}}for(let i=0;i<this.slots.length&&t>0;i++)if(this.slots[i]===null){let a=Math.min(t,r);this.slots[i]=ol({item:e,count:a,...n}),t-=a}return t}addStack(e){return this.add(e.item,e.count,{quality:e.quality,source:e.source})}takeFrom(e,t){let n=this.at(e);if(!n||t<=0)return 0;let r=Math.min(t,n.count);return n.count===r?this.slots[e]=null:n.count-=r,r}remove(e,t){let n=t,r=this.slots.map((e,t)=>[e,t]).filter(([t])=>t?.item===e).sort(([e],[t])=>(e.quality??0)-(t.quality??0));for(let[,e]of r){if(n<=0)break;n-=this.takeFrom(e,n)}return t-n}move(e,t){if(e===t)return;let n=this.slots[e],r=this.slots[t];if(n&&r&&el(n,r)&&r.count<Jc(J(r.item))){let t=Math.min(n.count,Jc(J(r.item))-r.count);r.count+=t,n.count===t?this.slots[e]=null:n.count-=t}else this.slots[e]=r,this.slots[t]=n}isFull(){return this.slots.every(e=>e!==null)}};function ol(e){let t={item:e.item,count:e.count};return e.quality&&(t.quality=e.quality),e.source&&(t.source=e.source),t}var sl=function(e){return e[e.Grass=0]=`Grass`,e[e.Path=1]=`Path`,e[e.Water=2]=`Water`,e[e.Cobble=3]=`Cobble`,e[e.Sand=4]=`Sand`,e[e.Floor=5]=`Floor`,e}({}),Y=function(e){return e[e.None=0]=`None`,e[e.Oak=1]=`Oak`,e[e.Pine=2]=`Pine`,e[e.Bush=3]=`Bush`,e[e.BerryBush=4]=`BerryBush`,e[e.SmallBush=5]=`SmallBush`,e[e.Rock=6]=`Rock`,e[e.BigRock=7]=`BigRock`,e[e.Stump=8]=`Stump`,e[e.Log=9]=`Log`,e[e.Fence=10]=`Fence`,e[e.Mailbox=11]=`Mailbox`,e[e.Scarecrow=12]=`Scarecrow`,e[e.Signpost=13]=`Signpost`,e[e.Lamp=14]=`Lamp`,e[e.Barrel=15]=`Barrel`,e[e.Crates=16]=`Crates`,e[e.Sunflower=17]=`Sunflower`,e[e.RedFlowers=18]=`RedFlowers`,e[e.YellowFlowers=19]=`YellowFlowers`,e[e.BlueFlowers=20]=`BlueFlowers`,e[e.Tuft=21]=`Tuft`,e[e.Pebbles=22]=`Pebbles`,e[e.Mushrooms=23]=`Mushrooms`,e[e.Fern=24]=`Fern`,e[e.Sapling=25]=`Sapling`,e[e.LilyPad=26]=`LilyPad`,e[e.LilyFlower=27]=`LilyFlower`,e[e.Cattails=28]=`Cattails`,e[e.Dock=29]=`Dock`,e[e.Building=30]=`Building`,e[e.Wall=31]=`Wall`,e}({}),cl=new Set([0,18,19,20,21,22,23,24,25,26,27,28,29]);function ll(e){return cl.has(e)}var ul=class{width;height;id;theme;ground;feature;water;buildings=[];signs=new Map;warps=[];zone;constructor(e,t,n=`farm`,r=`outdoor`){this.width=e,this.height=t,this.id=n,this.theme=r,this.ground=new Uint8Array(e*t),this.feature=new Uint8Array(e*t),this.water=Array(e*t).fill(`none`)}get pixelWidth(){return this.width*G.tile}get pixelHeight(){return this.height*G.tile}inBounds(e,t){return e>=0&&t>=0&&e<this.width&&t<this.height}groundAt(e,t){return this.inBounds(e,t)?this.ground[t*this.width+e]:0}featureAt(e,t){return this.inBounds(e,t)?this.feature[t*this.width+e]:0}waterAt(e,t){return this.inBounds(e,t)?this.water[t*this.width+e]:`none`}isWater(e,t){return this.groundAt(e,t)===2}setGround(e,t,n){this.inBounds(e,t)&&(this.ground[t*this.width+e]=n)}setFeature(e,t,n){this.inBounds(e,t)&&(this.feature[t*this.width+e]=n)}buildingAt(e,t){return this.buildings.find(n=>e>=n.x&&e<n.x+n.w&&t>=n.y&&t<n.y+n.h)}get(e){return this.buildings.find(t=>t.kind===e)}addBuilding(e){this.buildings.push(e);for(let t=e.y;t<e.y+e.h;t++)for(let n=e.x;n<e.x+e.w;n++)this.setFeature(n,t,30)}walkable(e,t){if(!this.inBounds(e,t))return!1;let n=this.featureAt(e,t);return n===29||this.groundAt(e,t)!==2&&ll(n)}tillable(e,t){return(this.id===`farm`||this.id===`greenhouse`||this.id===`farm_past`)&&this.inBounds(e,t)&&this.groundAt(e,t)===0&&this.featureAt(e,t)===0}warpAt(e,t){return this.warps.find(n=>e>=n.x&&e<n.x+n.w&&t>=n.y&&t<n.y+n.h)}fishable(e,t){return this.isWater(e,t)&&this.featureAt(e,t)!==29}labelWater(){let e=this.width,t=this.height;this.water=Array(e*t).fill(`none`);let n=new Uint8Array(e*t);for(let r=0;r<t;r++)for(let i=0;i<e;i++){if(n[r*e+i]||!this.isWater(i,r))continue;let a=[],o=[[i,r]];n[r*e+i]=1;let s=!1;for(;o.length>0;){let[r,i]=o.pop();a.push(i*e+r),(r===0||i===0||r===e-1||i===t-1)&&(s=!0);for(let[t,a]of[[r+1,i],[r-1,i],[r,i+1],[r,i-1]])this.inBounds(t,a)&&!n[a*e+t]&&this.isWater(t,a)&&(n[a*e+t]=1,o.push([t,a]))}for(let e of a)this.water[e]=s?`river`:`pond`}}},dl=(e,t)=>`${e},${t}`;function fl(e,t){return((Math.imul(e,73856093)^Math.imul(t,19349663))>>>0)%3==0?`oak`:`pine`}var pl=[[2,8],[2,15],[2,26],[45,5],[45,12],[45,27],[15,4],[35,5],[39,4],[43,7],[19,2]].map(([e,t])=>[e,t,fl(e,t)]),ml={x:6,y:7};function hl(e=`farm`){let t=new ul(48,36,e),n=(e,n)=>t.setFeature(e,n,fl(e,n)===`oak`?1:2),r=(e,...n)=>{for(let[r,i]of n)t.setFeature(r,i,e)},i=(e,n,r,i)=>{for(let a=n;a<=i;a++)for(let n=e;n<=r;n++)t.setGround(n,a,1)};for(let e=0;e<t.width;e++)n(e,0),n(e,1),n(e,35);for(let e=2;e<30;e++)n(0,e),n(1,e),e!==9&&e!==10&&(n(46,e),n(47,e));for(let e=31;e<=33;e++)for(let n=0;n<t.width;n++)t.setGround(n,e,2);for(let e of[5,6,19,33,34,41])t.setFeature(e,31,28);for(let[e,n,r]of[[15,35,39],[16,33,41],[17,32,42],[18,32,42],[19,31,43],[20,31,43],[21,31,43],[22,32,42],[23,32,42],[24,33,41],[25,35,39]])for(let i=n;i<=r;i++)t.setGround(i,e,2);for(let e=14;e<=18;e++)t.setFeature(36,e,29),t.setFeature(37,e,29);r(26,[34,20],[33,23],[41,18]),r(27,[40,22],[38,24]),r(28,[31,19],[31,21],[32,17],[42,22],[39,25],[43,20]),i(6,7,7,10),i(29,7,30,8),i(6,9,47,10),i(36,11,37,13),i(28,11,29,30),t.addBuilding({kind:`house`,x:4,y:4,w:6,h:3}),t.addBuilding({kind:`bin`,x:11,y:6,w:2,h:1}),t.addBuilding({kind:`stall`,x:22,y:8,w:3,h:1}),t.addBuilding({kind:`greenhouse`,x:27,y:4,w:6,h:3}),r(14,[5,7],[25,8],[35,11]),r(11,[9,7]),r(17,[10,4],[10,5]),r(15,[13,6]),r(16,[26,8]),r(13,[21,8],[34,13],[27,30]),t.signs.set(dl(21,8),`Seed Stand. Take what you need and leave the coins in the box.`),t.signs.set(dl(34,13),`Fernbrook Pond. Sunfish and carp by day. They say a golden koi lives here.`),t.signs.set(dl(27,30),`The Fern Brook. Chub, trout and pike. Catfish bite when it rains.`);for(let e=9;e<=26;e++)e!==17&&e!==18&&t.setFeature(e,12,10);return r(12,[16,21]),r(18,[3,7],[14,8],[33,8],[44,24],[5,22],[20,11]),r(19,[8,7],[16,8],[41,11],[30,26],[4,16],[12,11]),r(20,[2,7],[32,8],[43,13],[42,28]),r(21,[3,12],[5,14],[4,20],[6,26],[27,20],[30,12],[44,10],[43,29],[33,28],[20,30],[12,30]),r(24,[2,4],[2,18],[45,16],[45,22],[3,28],[44,3],[21,2],[25,2]),r(23,[2,11],[45,9],[40,2]),r(22,[15,11],[33,11],[24,30]),r(25,[42,9],[5,25]),r(6,[3,23],[5,29],[40,29],[16,3]),r(7,[44,14],[37,3]),r(8,[4,11],[44,19],[34,2]),r(9,[43,5],[3,19]),r(5,[2,13],[45,25],[13,3],[24,3],[41,6],[3,30],[45,30]),t.warps.push({x:47,y:9,w:1,h:2,to:`town`,tx:1,ty:13,facing:2}),t.labelWater(),t}var gl=class{state;constructor(e){this.state=e>>>0}nextU32(){let e=this.state=this.state+1831565813>>>0;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),(e^e>>>14)>>>0}next(){return this.nextU32()/4294967296}int(e,t){return t<=e?e:e+Math.floor(this.next()*(t-e))}range(e,t){return e+this.next()*(t-e)}chance(e){return this.next()<e}},_l=e=>e<=10?`earth`:e<=20?`frost`:`lava`,vl=e=>e===`earth`?0:e===`frost`?1:2,yl=()=>({floor:0,seed:1,deepest:0,chests:[],monsters:[],nextId:1}),bl={slime:{hp:[24,60,110],dmg:[5,10,16],speed:75,xp:[3,6,10],loot:()=>`Slime`},bat:{hp:[18,45,80],dmg:[6,12,18],speed:46,xp:[4,7,12],loot:()=>`BatWing`},bug:{hp:[30,55,90],dmg:[6,10,15],speed:22,xp:[3,6,9],loot:()=>`BugMeat`},crab:{hp:[40,80,130],dmg:[8,14,20],speed:42,xp:[5,9,14],loot:e=>Sl[e]}},xl={earth:[`slime`,`slime`,`bug`,`bat`,`crab`],frost:[`slime`,`bat`,`bat`,`bug`],lava:[`slime`,`bat`,`crab`,`crab`]},Sl={earth:`CopperOre`,frost:`IronOre`,lava:`GoldOre`},Cl={earth:`Geode`,frost:`FrozenGeode`,lava:`MagmaGeode`},wl={earth:[[`Quartz`,50],[`Amethyst`,25],[`Topaz`,25]],frost:[[`Quartz`,30],[`FrozenTear`,40],[`Emerald`,30]],lava:[[`FireQuartz`,45],[`Ruby`,35],[`Diamond`,20]]},Tl={stone:[1,3,5],ore:[2,4,7],coal:[2,3,5],gem:[3,5,8],geode:[2,4,6],crate:[1,1,1]},El={stone:1,ore:5,coal:3,gem:10,geode:4,crate:0},Dl={5:`SteelSword`,15:`SilverSaber`,25:`LavaKatana`};function Ol(){let e=new ul(14,9,`minehub`,`mine`);for(let t=0;t<9;t++)for(let n=0;n<14;n++)e.setGround(n,t,sl.Floor),(n===0||n===13||t<=1||t===8&&n!==6&&n!==7)&&e.setFeature(n,t,Y.Wall);return e.setFeature(1,2,Y.Wall),e.setFeature(12,2,Y.Wall),e.setFeature(12,7,Y.Wall),e.addBuilding({kind:`elevator`,x:3,y:2,w:2,h:1}),e.warps.push({x:6,y:8,w:2,h:1,to:`town`,tx:28,ty:4,facing:X.Down}),e}var kl={x:6,y:7},Al={x:10,y:3},jl=40,Ml=28;function Nl(e,t){let n=new gl((t^Math.imul(e,7919))>>>0||1);for(let t=0;;t++){let r=Pl(n);if(r.reduce((e,t)=>e+ +!t,0)<330&&t<20)continue;let i=new ul(jl,Ml,`mine`,`mine`);i.zone=_l(e);for(let e=0;e<Ml;e++)for(let t=0;t<jl;t++)i.setGround(t,e,sl.Floor),r[e*jl+t]&&i.setFeature(t,e,Y.Wall);let a=[];for(let e=2;e<26;e++)for(let t=2;t<38;t++)Fl(r,t,e,1).every(e=>!e)&&a.push([t,e]);if(a.length<20&&t<20)continue;a.sort((e,t)=>e[1]-t[1]||e[0]-t[0]);let o=a[n.int(0,Math.min(8,a.length))];if(e%5==0){let e=(e,t)=>{for(let n=t-1;n<=t+1;n++)for(let t=e-1;t<=e+2;t++)if(t<1||n<2||t>=39||n>=27||r[n*jl+t])return!1;return t!==o[1]&&t!==o[1]+1||e>o[0]+1||e+1<o[0]-1},n=null;for(let t=2;t<14&&!n;t++)for(let r=-t;r<=t&&!n;r++)for(let i=-t;i<=t&&!n;i++)Math.max(Math.abs(i),Math.abs(r))===t&&e(o[0]+i,o[1]+r)&&(n=[o[0]+i,o[1]+r]);if(!n&&t<20)continue;n&&i.addBuilding({kind:`elevator`,x:n[0],y:n[1],w:2,h:1})}return{map:i,entry:o}}}function Pl(e){let t=new Uint8Array(1120);for(let n=0;n<Ml;n++)for(let r=0;r<jl;r++)t[n*jl+r]=r<1||n<2||r>=39||n>=27||e.chance(.44)?1:0;for(let e=0;e<5;e++){let n=new Uint8Array(1120);for(let r=0;r<Ml;r++)for(let i=0;i<jl;i++){if(i<1||r<2||i>=39||r>=27){n[r*jl+i]=1;continue}let a=Fl(t,i,r,1).filter(e=>e).length-t[r*jl+i];n[r*jl+i]=a>=5||e<2&&a===0?1:a<=3?0:t[r*jl+i]}t=n}let n=new Int32Array(1120).fill(-1),r=-1,i=0;for(let e=0;e<1120;e++){if(t[e]||n[e]>=0)continue;let a=[e];n[e]=e;let o=0;for(;a.length;){let r=a.pop();o++;let i=r%jl,s=Math.floor(r/jl);for(let o of[r-1,r+1,r-jl,r+jl]){let r=o%jl,c=Math.floor(o/jl);o<0||o>=1120||Math.abs(r-i)+Math.abs(c-s)!==1||t[o]||n[o]>=0||(n[o]=e,a.push(o))}}o>i&&([r,i]=[e,o])}for(let e=0;e<1120;e++)!t[e]&&n[e]!==r&&(t[e]=1);return t}function Fl(e,t,n,r){let i=[];for(let a=-r;a<=r;a++)for(let o=-r;o<=r;o++){let r=t+o,s=n+a;i.push(r<0||s<0||r>=jl||s>=Ml?1:e[s*jl+r])}return i}function Il(e){let t=e.state.mine,n=Nl(t.floor,t.seed);return e.maps.mine=n.map,n.entry}function Ll(e,t){let n=e.state.mine;n.floor=Math.max(1,Math.min(30,t)),n.seed=e.rng.int(1,2**31),n.deepest=Math.max(n.deepest,n.floor);let[r,i]=Il(e),a=e.maps.mine,o=_l(n.floor),s=vl(o),c={};c[i*jl+r]={t:`ladder`,down:!1};let l=(e,t,n)=>Math.abs(e-r)+Math.abs(t-i)>=n,u=(e,t)=>a.walkable(e,t)&&!c[t*jl+e],d=Dl[n.floor];if(d&&!n.chests.includes(n.floor))for(let t=0;t<400;t++){let t=e.rng.int(2,38),n=e.rng.int(2,26);if(u(t,n)&&l(t,n,8)){c[n*jl+t]={t:`minechest`,item:d,open:!1};break}}let f=(n.floor-1)%10,p=[[`stone`,70],[`ore`,10+f],[`coal`,6],[`gem`,2+f/3],[`geode`,5],[`crate`,3]],m=p.reduce((e,t)=>e+t[1],0);for(let t=1;t<27;t++)for(let n=1;n<39;n++){if(!u(n,t)||!l(n,t,3)||!e.rng.chance(.2))continue;let r=e.rng.range(0,m),i=`stone`;for(let[e,t]of p)if(r-=t,r<0){i=e;break}c[t*jl+n]={t:`rock`,kind:i,hp:Tl[i][s],v:e.rng.int(0,2)}}e.state.maps.mine={soil:{},objects:c,floors:{}},n.monsters=[];let h=Math.min(14,4+Math.floor(n.floor/2));for(let t=0,r=0;t<h&&r<2e3;r++){let r=e.rng.int(1,39),i=e.rng.int(1,27);if(!u(r,i)||!l(r,i,7))continue;let a=xl[o],c=a[e.rng.int(0,a.length)],d=bl[c];n.monsters.push({id:n.nextId++,kind:c,zone:o,x:r*16+8,y:i*16+13,hp:d.hp[s],maxHp:d.hp[s],kx:0,ky:0,hurt:0,t:e.rng.range(0,1.2),awake:!1}),t++}let g=a.walkable(r,i+1)?i+1:i;e.warp(`mine`,r,g,X.Down),e.emit(`ladder`,r,i,null,n.floor)}function Rl(e,t=kl){e.state.mine.floor=0,e.state.mine.monsters=[],e.warp(`minehub`,t.x,t.y,X.Down)}function zl(e){let t=[0];for(let n=5;n<=e.state.mine.deepest;n+=5)t.push(n);return t}function Bl(e,t){e.emit(`elevator`),t<=0?Rl(e,{x:4,y:3}):Ll(e,t)}function Vl(e,t){if(!t)Rl(e,{x:Al.x,y:Al.y+1});else if(e.state.map===`minehub`)Ll(e,1);else if(e.state.mine.floor>=30)return{kind:`text`,text:`The bottom of the mine. For now.`};else Ll(e,e.state.mine.floor+1);return{kind:`harvested`,text:``}}function Hl(e,t){let n=e.mapState.objects[t];if(!n||n.t!==`minechest`||n.open)return{kind:`none`,text:``};n.open=!0,e.state.mine.chests.push(e.state.mine.floor);let[r,i]=[t%e.map.width,Math.floor(t/e.map.width)];return e.give(n.item,1,r,i),e.emit(`treasure`,r,i,n.item,1),{kind:`text`,text:`Inside the old chest: a ${J(n.item).name}!`}}function Ul(e,t,n,r){let i=e.mapState.objects[t];if(!i||i.t!==`rock`||(i.kind===`crate`?![`pickaxe`,`axe`,`sword`].includes(n):n!==`pickaxe`))return{hit:!1,broke:!1};let[a,o]=[t%e.map.width,Math.floor(t/e.map.width)];if(i.hp-=r,e.emit(i.kind===`crate`?`chop`:`pick`,a,o),i.hp>0)return{hit:!0,broke:!1};delete e.mapState.objects[t];let s=e.map.zone??`earth`;switch(i.kind){case`stone`:e.give(`Stone`,1,a,o),s!==`earth`&&e.rng.chance(.08)&&e.give(`Coal`,1,a,o),e.rng.chance(.02)&&e.give(Cl[s],1,a,o);break;case`ore`:e.give(Sl[s],e.rng.int(1,4)+ +(e.level(`mining`)>=4),a,o);break;case`coal`:e.give(`Coal`,e.rng.int(1,3),a,o);break;case`gem`:{let t=wl[s],n=e.rng.int(0,100);for(let[r,i]of t)if(n-=i,n<0){e.give(r,1,a,o);break}break}case`geode`:e.give(Cl[s],1,a,o);break;case`crate`:{let t=[[`Fiber`,3],[`Wood`,4],[`Bait`,5],[`Coal`,1],[`Hardwood`,1]],[n,r]=t[e.rng.int(0,t.length)];e.give(n,r,a,o);break}}if(e.addXp(`mining`,El[i.kind]),e.emit(`rockBroke`,a,o,null,0,i.kind),i.kind!==`crate`){let t=Object.values(e.mapState.objects).filter(e=>e.t===`rock`&&e.kind!==`crate`).length;e.state.map===`mine`&&(i.ladder||e.rng.chance(.02+1/Math.max(1,t)))&&Gl(e,a,o)}return{hit:!0,broke:!0}}function Wl(e){return Object.values(e.mapState.objects).some(e=>e.t===`ladder`&&e.down)}function Gl(e,t,n){if(e.state.mine.floor>=30||Wl(e))return;let r=n*e.map.width+t;e.mapState.objects[r]||(e.mapState.objects[r]={t:`ladder`,down:!0},e.emit(`ladderFound`,t,n))}var Kl=(e,t,n,r)=>{let i=Math.floor(t/16),a=Math.floor((n-3)/16);if(!e.map.walkable(i,a))return!1;if(r)return!0;let o=e.mapState.objects[a*e.map.width+i];return!o||o.t===`ladder`};function ql(e,t){let n=e.state;if(n.map!==`mine`)return;let r=n.playerX,i=n.playerY;for(let a of n.mine.monsters){if(a.t+=t,a.hurt=Math.max(0,a.hurt-t),a.asleep)continue;let n=bl[a.kind],o=r-a.x,s=i-a.y,c=Math.hypot(o,s)||1;!a.awake&&c<(a.kind===`crab`?22:112)&&(a.awake=!0);let l=a.kx,u=a.ky;if(a.kx*=.002**t,a.ky*=.002**t,a.awake&&a.hurt<=.1)switch(a.kind){case`slime`:a.t%1.2<.35&&(l+=o/c*n.speed,u+=s/c*n.speed);break;case`bat`:{let e=Math.sin(a.t*5+a.id)*.8;l+=o/c*n.speed-s/c*n.speed*e,u+=s/c*n.speed+o/c*n.speed*e;break}default:l+=o/c*n.speed,u+=s/c*n.speed}let d=a.kind===`bat`,f=a.x+l*t,p=a.y+u*t;Kl(e,f,a.y,d)&&(a.x=f),Kl(e,a.x,p,d)&&(a.y=p),a.awake&&c<11&&e.invulnerable<=0&&Jl(e,n.dmg[vl(a.zone)],a.x,a.y)}}function Jl(e,t,n,r){let i=e.state,a=Math.max(1,t-e.buff(`defence`)*2);i.health=Math.max(0,i.health-a),e.invulnerable=1;let o=i.playerX-n,s=i.playerY-r,c=Math.hypot(o,s)||1;for(let t of[12,6]){let n=i.playerX+o/c*t,r=i.playerY+s/c*t;if(e.walkable(Math.floor(n/16),Math.floor((r-3)/16))){i.playerX=n,i.playerY=r;break}}e.emit(`hurt`,0,0,null,a),i.health<=0&&e.faint()}function Yl(e){let t=e.state,n=Yc(e.heldItem);if(!n||n.type!==`sword`)return 0;let[r,i]=[[0,1],[0,-1],[1,0],[-1,0]][t.facing],a=t.playerX+r*16,o=t.playerY-6+i*16,s=0;for(let r of t.mine.monsters){if(t.map!==`mine`)break;let i=r.y-(r.kind===`bat`?10:4);if(Math.abs(r.x-a)>18||Math.abs(i-o)>18)continue;s++;let c=(n.damage??5)+e.level(`combat`),l=c+e.rng.int(0,Math.floor(c/2)+1),u=e.rng.chance(.05);u&&(l*=2),r.hp-=l,r.hurt=.25,r.awake=!0,r.asleep=!1;let d=r.x-t.playerX,f=r.y-t.playerY,p=Math.hypot(d,f)||1;r.kx=d/p*220,r.ky=f/p*220,e.emit(`monsterHit`,r.x,r.y,null,l,u?`crit`:``),r.hp<=0&&Xl(e,r)}return t.mine.monsters=t.mine.monsters.filter(e=>e.hp>0),s}function Xl(e,t){let n=bl[t.kind],r=Math.floor(t.x/16),i=Math.floor((t.y-3)/16);e.addXp(`combat`,n.xp[vl(t.zone)]),e.emit(`monsterDied`,t.x,t.y,null,0,t.kind),e.rng.chance(.6)&&e.give(n.loot(t.zone),t.kind===`crab`?e.rng.int(1,3):1,r,i),e.rng.chance(.1)&&e.map.walkable(r,i)&&Gl(e,r,i)}function Zl(e){let t=e.state,n=Math.min(1e3,Math.floor(t.money*.1));t.money-=n;let r=t.backpack.map((e,t)=>[e,t]).filter(([e])=>e&&!J(e.item).tool),i=``;if(r.length){let[n,a]=r[e.rng.int(0,r.length)];i=` and your ${n.count>1?`${n.count} `:``}${J(n.item).name}`,t.backpack[a]=null}return`You fainted in the mine. Someone carried you home, but you lost ${n.toLocaleString(`en-US`)}g${i}.`}var Ql={hazel:[{items:[[`SpeedGro`,10]]},{recipe:`GlazedYams`}],bram:[{items:[[`CopperBar`,5]]},{items:[[`QualitySprinkler`,1]]}],juniper:[{items:[[`Wood`,50],[`Hardwood`,10]]},{recipe:`PepperPoppers`}],ollie:[{items:[[`Bait`,30]]},{recipe:`FishStew`}],marigold:[{items:[[`Salad`,3]]},{recipe:`CornChowder`}],wren:[{items:[[`LargeEgg`,5]]},{recipe:`Omelet`}],thistle:[{money:500},{recipe:`PumpkinSoup`}],pip:[{items:[[`Amethyst`,1]]},{recipe:`BlueberryTart`}]};function $l(e,t,n,r=!0){let i=e.state;r&&i.sent.includes(t)||(r&&i.sent.push(t),i.mail.push({id:t,...n}))}function eu(e,t,n=t,r=``){let i=Bc[t];i&&$l(e,n,{from:i.from,text:i.text.replaceAll(`{name}`,r)})}function tu(e){let t=e.state,n=t.day;if(n>=3&&eu(e,`hallIntro`),n>=2&&!t.magic.notebook&&$l(e,`nellHint`,{from:`Hazel`,text:`Hello love,
I keep meaning to say: your grandmother kept her notebooks on the shelf in the farmhouse. Green leather, smelled of mint. She always said they were for whoever kept the farm next. Have a look, won't you?
Warmly, Hazel`}),Fc(n)===1){let t=Pc(n),r=Ic(n);t===`spring`&&r>1?eu(e,`newYear`,`newYear-${r}`):t!==`spring`&&eu(e,`${t}Start`,`${t}Start-${r}`)}for(let r of Zf){lp(r,n)&&eu(e,`birthdayReminder`,`birthday-${r}-${n}`,Zc[r].name);let i=cp(t.friends[r].points),a=Zc[r].name;i>=3&&$l(e,`${r}-3`,{from:a,text:zc[r].letters.hearts3,...Ql[r][0]}),i>=6&&$l(e,`${r}-6`,{from:a,text:zc[r].letters.hearts6,...Ql[r][1]})}if(n>=5){let t=Bc.mineOpen;$l(e,`mineOpen`,{from:t.from,text:t.text,items:[[`RustySword`,1]]})}let r=t.toolUpgrade;r&&n>=r.ready&&eu(e,`toolReady`,`tool-${r.item}`)}function nu(e){let t=e.state,n=t.mail.shift();if(!n)return null;let[r,i]=e.playerTile;for(let[t,a]of n.items??[])e.give(t,a,r,i);return n.recipe&&!t.recipes.includes(n.recipe)&&t.recipes.push(n.recipe),n.money&&(t.money+=n.money,t.stats.totalEarned+=n.money),e.emit(`mail`,0,0,null,0,n.from),n}function ru(e){let t=(e.items??[]).map(([e,t])=>`${t} ${J(e).name}`);return e.recipe&&t.push(`a recipe for ${J(e.recipe).name}`),e.money&&t.push(`${e.money.toLocaleString(`en-US`)}g`),t.join(`, `)}var iu=()=>({coop:!1,barn:!1,hay:0,animals:[],nextId:1}),au=e=>e===`chicken`?`coop`:`barn`,ou=(e,t)=>e.animals.filter(e=>e.kind===t).length,su={coop:{price:4e3,wood:300,stone:100,deed:`CoopDeed`},barn:{price:6e3,wood:350,stone:150,deed:`BarnDeed`}},cu={coop:{b:{kind:`coop`,x:31,y:27,w:4,h:2},clear:[31,25,34,29],step:[[32,29]]},barn:{b:{kind:`barn`,x:37,y:5,w:6,h:3},clear:[37,3,42,8],step:[[39,8],[40,8]]}},lu={chicken:[`Henrietta`,`Clucky`,`Nugget`,`Pepper`,`Marigold Jr.`,`Biscuit`,`Dottie`,`Penny`],cow:[`Daisy`,`Buttercup`,`Clover`,`Moo-riel`,`Bessie`,`Hazelnut`,`Maple`,`Toffee`]};function uu(e){let t=e.maps.farm;for(let n of[`coop`,`barn`]){if(!e.state.ranch[n]||t.buildings.some(e=>e.kind===n))continue;let r=cu[n];t.addBuilding({...r.b});for(let[e,n]of r.step)t.setGround(e,n,sl.Path)}}function du(e){let[t,n]=e===`coop`?[10,7]:[12,8],r=new ul(t,n,e,`indoor`);for(let i=0;i<n;i++)for(let a=0;a<t;a++){r.setGround(a,i,sl.Floor);let o=i===n-1&&(a===fu[e].x||a===fu[e].x+1);(i<=1||a===0||a===t-1||i===n-1&&!o)&&r.setFeature(a,i,Y.Wall)}r.addBuilding({kind:`hopper`,x:1,y:2,w:1,h:1});for(let e=0;e<4;e++)r.addBuilding({kind:`trough`,x:3+e,y:2,w:1,h:1});e===`barn`&&r.addBuilding({kind:`haybale`,x:9,y:2,w:2,h:1});let i=cu[e].step[0];return r.warps.push({x:fu[e].x,y:n-1,w:2,h:1,to:`farm`,tx:i[0],ty:i[1],facing:X.Down}),r}var fu={coop:{x:4,y:5},barn:{x:5,y:6}};function pu(e,t){let n=e.state.ranch,r=su[t];return n.building?(e.deny(`Juniper is still building your ${n.building.kind}.`),!1):n[t]?!1:e.backpack.count(`Wood`)<r.wood||e.backpack.count(`Stone`)<r.stone?(e.deny(`Juniper needs ${r.wood} wood and ${r.stone} stone for a ${t}.`),!1):e.pay(r.price)?(e.backpack.remove(`Wood`,r.wood),e.backpack.remove(`Stone`,r.stone),n.building={kind:t,ready:e.state.day+2},e.emit(`gained`,0,0,null,0,`Juniper will have your ${t} up in 2 days.`),!0):!1}function mu(e,t,n){let r=e.state.ranch,i=au(t);if(!r[i])return e.deny(`You need a ${i} first. Juniper builds them.`),!1;if(r.animals.filter(e=>e.kind===t).length>=4)return e.deny(`Your ${i} is full.`),!1;if(!e.pay(n))return!1;let a=new Set(r.animals.map(e=>e.name)),o=lu[t].find(e=>!a.has(e))??`${t===`chicken`?`Hen`:`Cow`} ${r.nextId}`,s=fu[i],c=(s.x+1)*16,l=(s.y-1)*16+13;return r.animals.push({id:r.nextId++,kind:t,name:o,look:t===`chicken`?e.rng.int(0,2):0,x:c,y:l,tx:c,ty:l,facing:X.Down,wait:1,friendship:0,pettedDay:0,fedLastNight:!0,milk:null}),e.emit(`gained`,0,0,null,0,`${o} the ${t===`chicken`?`hen`:`cow`} is waiting in your ${i}!`),!0}var hu=(e,t)=>t.friendship>700&&e.rng.chance(.5)?2:t.friendship>350&&e.rng.chance(.5)?1:0;function gu(e){let t=e.state,n=t.ranch,r=[];if(n.building&&t.day>=n.building.ready){let t=n.building.kind;n[t]=!0,n.building=void 0,_u(e,t),uu(e),eu(e,t===`coop`?`coopBuilt`:`barnBuilt`),r.push(`Juniper finished your ${t}.`)}let i=0;for(let r of n.animals){let a=r.pettedDay===t.day-1;if(r.fedLastNight=n.hay>0,r.fedLastNight?n.hay--:i++,r.friendship=Math.max(0,Math.min(1e3,r.friendship+(a?0:-10)+(r.fedLastNight?0:-20))),!r.fedLastNight)continue;let o=e.rng.chance(r.friendship/1500);r.kind===`chicken`?vu(e,o?`LargeEgg`:`Egg`,hu(e,r)):r.milk={item:o?`LargeMilk`:`Milk`,quality:hu(e,r)}}return i&&r.push(`${i===1?`One of your animals`:`${i} of your animals`} went hungry. Put hay in the hopper.`),r}function _u(e,t){let n=e.state.maps.farm,r=e.maps.farm.width,[i,a,o,s]=cu[t].clear;for(let e=a;e<=s;e++)for(let t=i;t<=o;t++)delete n.objects[e*r+t],delete n.soil[e*r+t],delete n.floors[e*r+t];for(let[e,t]of Object.entries(n.objects))t.t===`part`&&!n.objects[t.of]&&delete n.objects[Number(e)]}function vu(e,t,n){let r=e.maps.coop,i=e.state.maps.coop;for(let a=0;a<40;a++){let a=e.rng.int(1,r.width-1),o=e.rng.int(3,r.height-1);if(!(!r.walkable(a,o)||r.warpAt(a,o)||i.objects[o*r.width+a])){i.objects[o*r.width+a]={t:`forage`,item:t,count:1,quality:n||void 0,dropped:!0};return}}}function yu(e,t,n){let r=e.state.map;return r!==`coop`&&r!==`barn`?null:e.state.ranch.animals.find(e=>au(e.kind)===r&&Math.abs(e.x-(t*16+8))<12&&Math.abs(e.y-(n*16+10))<12)??null}function bu(e,t){let n=e.state;if(t.kind===`cow`&&e.toolItem(`pail`)&&e.heldItem===e.toolItem(`pail`))return xu(e,t);if(t.pettedDay===n.day)return{kind:`text`,text:`${t.name} looks content.${t.kind===`cow`&&t.milk?` Her milk is ready: use the milk pail.`:``}`};t.pettedDay=n.day,t.friendship=Math.min(1e3,t.friendship+15),e.addXp(`farming`,2),e.emit(`petted`,t.x,t.y,null,t.id,t.kind);let r=t.friendship>700?`adores you`:t.friendship>350?`is happy to see you`:`seems to like that`;return{kind:`text`,text:`You pet ${t.name}. She ${r}.${t.fedLastNight?``:` She looks hungry.`}`}}function xu(e,t){return t.milk?e.backpack.spaceFor(t.milk.item,{quality:t.milk.quality})<1?(e.deny(`Your backpack is full.`),{kind:`none`,text:``}):(e.backpack.add(t.milk.item,1,{quality:t.milk.quality||void 0}),e.emit(`milked`,t.x,t.y,t.milk.item,1,``,t.milk.quality),e.addXp(`farming`,5),t.milk=null,{kind:`harvested`,text:``}):{kind:`text`,text:`${t.name} has no milk for you today.`}}function Su(e){let t=e.state.ranch,n=e.held;if(n?.item===`Hay`){let r=n.count;return e.backpack.takeFrom(e.state.selected,r),t.hay+=r,e.emit(`loaded`,0,0,`Hay`,r),{kind:`text`,text:`You put ${r} hay in the hopper. ${t.hay} stored: enough for ${Cu(e)}.`}}let r=t.animals.length;return{kind:`text`,text:`The hay hopper holds ${t.hay} hay${r?`: enough for ${Cu(e)}`:``}. Hold hay and use the hopper to fill it. Wren sells hay at the ranch.`}}function Cu(e){let t=e.state.ranch.animals.length;if(!t)return`your animals when you have some`;let n=Math.floor(e.state.ranch.hay/t);return`${n} night${n===1?``:`s`}`}function wu(e,t){let n=e.state.map;if(n!==`coop`&&n!==`barn`)return;let r=e.maps[n];for(let i of e.state.ranch.animals){if(au(i.kind)!==n)continue;let a=i.tx-i.x,o=i.ty-i.y,s=Math.hypot(a,o);if(s>1){let e=Math.min(s,(i.kind===`chicken`?22:14)*t);i.x+=a/s*e,i.y+=o/s*e,i.facing=Math.abs(a)>Math.abs(o)?a<0?X.Left:X.Right:o<0?X.Up:X.Down;continue}if(i.wait-=t,i.wait>0)continue;i.wait=2+e.rng.range(0,4);let c=Math.floor(i.x/16)+e.rng.int(-2,3),l=Math.floor((i.y-3)/16)+e.rng.int(-2,3);r.walkable(c,l)&&!r.warpAt(c,l)&&(i.kind!==`cow`||r.walkable(c+1,l))&&(i.tx=c*16+8,i.ty=l*16+13)}}function Tu(e,t,n,r,i,a,o,s,c,l,u){return{id:e,sheet:t,row:n,seed:r,produce:i,daysToGrow:a,regrowDays:o,yield:s,extraChance:c,seasons:l,quirk:u}}var Eu=[`spring`,`summer`,`fall`],Du=[Tu(`Parsnip`,`crops`,0,`ParsnipSeeds`,`Parsnip`,4,0,1,0,[`spring`]),Tu(`Potato`,`crops`,1,`PotatoSeeds`,`Potato`,6,0,1,.25,[`spring`]),Tu(`Cauliflower`,`crops`,2,`CauliflowerSeeds`,`Cauliflower`,8,0,1,0,[`spring`]),Tu(`Strawberry`,`crops`,3,`StrawberrySeeds`,`Strawberry`,8,4,1,.1,[`spring`]),Tu(`Tomato`,`crops2`,0,`TomatoSeeds`,`Tomato`,6,4,1,.05,[`summer`]),Tu(`Blueberry`,`crops2`,1,`BlueberrySeeds`,`Blueberry`,8,4,3,.02,[`summer`]),Tu(`Melon`,`crops2`,2,`MelonSeeds`,`Melon`,10,0,1,0,[`summer`]),Tu(`HotPepper`,`crops2`,3,`HotPepperSeeds`,`HotPepper`,5,3,1,.03,[`summer`]),Tu(`Corn`,`crops2`,4,`CornSeeds`,`Corn`,10,4,1,0,[`summer`,`fall`]),Tu(`Pumpkin`,`crops2`,5,`PumpkinSeeds`,`Pumpkin`,10,0,1,0,[`fall`]),Tu(`Cranberry`,`crops2`,6,`CranberrySeeds`,`Cranberries`,7,5,2,.1,[`fall`]),Tu(`Eggplant`,`crops2`,7,`EggplantSeeds`,`Eggplant`,5,5,1,.002,[`fall`]),Tu(`Yam`,`crops2`,8,`YamSeeds`,`Yam`,8,0,1,0,[`fall`]),Tu(`Rainbell`,`crops3`,0,`RainbellSeeds`,`Rainbell`,5,0,1,.3,Eu,`rain`),Tu(`Moonmint`,`crops3`,1,`MoonmintSeeds`,`Moonmint`,4,3,1,.2,Eu,`night`),Tu(`Waterlily`,`crops3`,2,`LilyBulb`,`Waterlily`,6,4,1,.1,Eu,`pond`),Tu(`Glowcap`,`crops3`,3,`GlowcapSpores`,`Glowcap`,5,3,1,.2,[`spring`,`summer`,`fall`,`winter`],`dark`),Tu(`Emberroot`,`crops3`,4,`EmberrootSeeds`,`Emberroot`,6,0,1,.2,[`winter`],`ember`),Tu(`FoolsClover`,`crops3`,5,`CloverSeeds`,`FoolsClover`,5,0,1,.1,Eu,`spread`)];function Ou(e){let t=Du.find(t=>t.id===e);if(!t)throw Error(`unknown crop ${e}`);return t}function ku(e){return Du.find(t=>t.seed===e)}function Au(e){return e.days??Ou(e.id).daysToGrow}function ju(e){return!e.dead&&e.growth>=Au(e)}function Mu(e){return e.daysToGrow-Math.max(+(e.daysToGrow>=5),Math.floor(e.daysToGrow*.1))}function Nu(e){let t=Au(e);if(e.growth>=t)return 5;if(e.harvests>0)return 6;if(e.growth===0)return 0;let n=1+Math.floor((e.growth-1)*4/Math.max(1,t-1));return Math.min(4,Math.max(1,n))}var Pu=[`Growth`,`Rain`,`Warmth`,`Calm`,`Light`,`Luck`],Fu={Rainbell:[`Rain`,`Growth`],Moonmint:[`Calm`,`Light`],Waterlily:[`Calm`,`Rain`],Glowcap:[`Light`,`Luck`],Emberroot:[`Warmth`,`Growth`],FoolsClover:[`Luck`,`Growth`],Honey:[`Calm`,`Warmth`],Quartz:[`Light`,`Luck`],Coal:[`Warmth`,`Light`],Egg:[`Growth`,`Calm`],Dandelion:[`Growth`,`Luck`],Sap:[`Growth`,`Warmth`]},Iu=Object.keys(Fu),Lu=e=>e in Fu,Ru={Growth:`GrowthTonic`,Rain:`RainCharm`,Warmth:`WarmthDraught`,Calm:`CalmingDraught`,Light:`LightPhilter`,Luck:`LuckTonic`},zu=[[`Warmth`,`Light`,`BottledSunshine`],[`Growth`,`Luck`,`FairyRing`],[`Calm`,`Light`,`SweetDreams`]],Bu=[...Object.values(Ru),...zu.map(e=>e[2]),`MurkyBrew`];function Vu(e){let t=new Map;for(let n of e)for(let e of Fu[n]??[])t.set(e,(t.get(e)??0)+1);let n=Pu.filter(e=>(t.get(e)??0)>=2);for(let[e,t,r]of zu)if(n.includes(e)&&n.includes(t))return r;if(!n.length)return`MurkyBrew`;let r=Math.max(...n.map(e=>t.get(e)));return Ru[n.find(e=>t.get(e)===r)]}var Hu=()=>({notebook:!1,known:{},brewed:[],litFloor:0});function Uu(e,t,n){let r=e.state.magic.known;return!Lu(t)||(r[t]??0)>=n?!1:(r[t]=n,!0)}function Wu(e,t){Uu(e,t,1)&&e.emit(`learned`,0,0,t,1,`${J(t).name}: ${Fu[t][0]}. Nell's notebook has a note of it.`)}function Gu(e,t){let n=e.state.magic.known[t]??0,[r,i]=Fu[t];return[n>=1?r:`?`,n>=2?i:`?`]}function Ku(e){let t=e.state.magic;if(t.notebook)return null;t.notebook=!0;let[n,r]=e.playerTile;return e.give(`Notebook`,1,n,r),e.give(`Cauldron`,1,n,r),e.give(`MoonmintSeeds`,5,n,r),e.give(`RainbellSeeds`,5,n,r),e.emit(`learned`,0,0,`Notebook`,0,`You found Grandma Nell's notebook!`),{kind:`text`,text:`Behind the almanacs you find a worn green notebook, a little iron cauldron and two packets of seeds in Grandma's handwriting. The first page says: "For whoever keeps this farm next. Read me."`}}var qu=e=>e.state.day*1440+360;function Ju(e,t,n){let r=e.mapState.objects[t];if(!r||r.t!==`placed`||r.item!==`Cauldron`)return null;if(r.output)return e.deny(`Something's already brewing.`),null;let i=n.map(t=>e.backpack.at(t)),a=i.map(e=>e?.item);if(n.length<2||n.length>3||i.some(e=>!e||!Lu(e.item))||new Set(a).size!==a.length)return e.deny(`The cauldron wants two or three different ingredients.`),null;let o=Vu(a),s=Math.min(...i.map(e=>e.quality??0));for(let t of n)e.backpack.takeFrom(t,1);for(let t of a)Uu(e,t,2);return r.output={item:o,count:1,quality:s||void 0},r.readyAt=qu(e),e.emit(`brewing`,0,0,o,0,``),o}function Yu(e,t,n,r){let i=e.mapState.objects[t];if(!i||i.t!==`placed`)return{kind:`none`,text:``};if(i.output&&(i.readyAt??0)<=e.now){let t=i.output;if(e.backpack.spaceFor(t.item,t)<t.count)return e.deny(`Your backpack is full.`),{kind:`none`,text:``};e.backpack.addStack(t),i.output=void 0,i.readyAt=void 0;let a=!e.state.magic.brewed.includes(t.item);return a&&e.state.magic.brewed.push(t.item),e.emit(`collected`,n,r,t.item,1,``,t.quality??0),a?{kind:`text`,text:`You made ${J(t.item).name}! ${J(t.item).description}`}:{kind:`harvested`,text:``}}return i.output?{kind:`text`,text:`It bubbles and smells of something green. It'll be ready by morning.`}:{kind:`cauldron`,text:``,key:t}}function Xu(e,t,n,r){let i=ku(r);if(!i?.quirk)return!1;let a=n*e.map.width+t;return e.mapState.objects[a]?!1:i.quirk===`pond`?e.map.isWater(t,n)&&e.map.waterAt(t,n)===`pond`&&e.map.featureAt(t,n)!==Y.Dock:i.quirk===`dark`&&e.state.map===`minehub`&&e.map.groundAt(t,n)===sl.Floor&&e.map.walkable(t,n)&&!e.map.warpAt(t,n)}function Zu(e,t,n,r){let i=ku(r);return Xu(e,t,n,r)?i.quirk===`pond`&&!i.seasons.includes(e.season)?(e.deny(`The pond's too cold for lilies now.`),!1):(e.backpack.takeFrom(e.state.selected,1),e.mapState.objects[n*e.map.width+t]={t:`herb`,crop:i.id,growth:0,harvests:0},e.emit(`planted`,t,n,r),!0):(e.deny(i.quirk===`pond`?`Lily bulbs go in pond water.`:`Glowcap spores want the dark: the cave room in the mine.`),!1)}function Qu(e,t,n,r){let i=e.mapState.objects[t];if(!i||i.t!==`herb`)return null;let a=Ou(i.crop);if(i.growth<a.daysToGrow)return{kind:`text`,text:`The ${J(a.produce).name.toLowerCase()} isn't ready yet.`};let o=a.yield+ +!!e.rng.chance(a.extraChance);return e.backpack.spaceFor(a.produce)<o?(e.deny(`Your backpack is full.`),{kind:`none`,text:``}):(e.backpack.add(a.produce,o),e.addXp(`farming`,8),e.state.stats.cropsHarvested+=o,e.emit(`harvested`,n,r,a.produce,o),a.regrowDays>0?(i.harvests++,i.growth=a.daysToGrow-a.regrowDays):delete e.mapState.objects[t],{kind:`harvested`,text:``})}function $u(e,t,n,r,i){switch(t.quirk){case`rain`:return xc(e.state.weather);case`night`:return i;case`ember`:{if(n!==`farm`)return!0;let t=e.mapWidth(n),i=r%t,a=Math.floor(r/t),o=e.state.maps[n].objects;for(let e=-2;e<=2;e++)for(let n=-2;n<=2;n++){let r=o[(a+e)*t+(i+n)];if(r?.t===`placed`&&r.item===`Furnace`)return!0}return!1}default:return!0}}function ed(e){let t=e.season;for(let n of Object.keys(e.state.maps)){let r=e.state.maps[n];for(let e of Object.values(r.objects)){if(e.t!==`herb`)continue;let n=Ou(e.crop);(n.quirk!==`pond`||n.seasons.includes(t))&&e.growth<n.daysToGrow&&e.growth++}let i=e.mapWidth(n);for(let[t,n]of Object.entries(r.soil)){if(n.crop?.id!==`FoolsClover`||n.crop.dead||!e.rng.chance(.25))continue;let a=Number(t),o=a%i,s=Math.floor(a/i),[c,l]=[[1,0],[-1,0],[0,1],[0,-1]][e.rng.int(0,4)],u=r.soil[(s+l)*i+(o+c)];u&&!u.crop&&!r.objects[(s+l)*i+(o+c)]&&(u.crop={id:`FoolsClover`,growth:0,harvests:0})}}Fc(e.state.day)===1&&(e.state.magic.litFloor=0)}function td(e,t,n,r){let i=e.state,a=e.map.theme===`outdoor`,o=a=>(e.backpack.takeFrom(i.selected,1),e.emit(`magic`,t,n,r.item,0,a),!0);switch(r.item){case`GrowthTonic`:{let i=e.soilAt(t,n);if(i?.crop&&!i.crop.dead&&!ju(i.crop))return i.crop.growth+=r.quality===2?2:1,o(`The plant stretches and unfurls.`);let a=e.mapState.objects[n*e.map.width+t];return a?.t===`tree`&&a.stage<4?(a.stage++,o(`The young tree shivers and grows.`)):(e.deny(`Pour it on a growing crop or a young tree.`),!1)}case`RainCharm`:return a?(i.tomorrow=e.season===`winter`?`snowy`:`rainy`,o(e.season===`winter`?`The air smells of snow. It'll come tomorrow.`:`The air smells of rain. It'll come tomorrow.`)):(e.deny(`Rain charms want the open sky.`),!1);case`WarmthDraught`:{let r=0;for(let a=-1;a<=1;a++)for(let o=-1;o<=1;o++){let s=e.soilAt(t+o,n+a);s&&(s.warm=i.day+14,r++)}return r?o(`The soil steams gently. Those crops will see the season out.`):(e.deny(`Pour it on tilled soil.`),!1)}case`CalmingDraught`:if(i.map===`coop`||i.map===`barn`){let e=i.map===`coop`?`chicken`:`cow`;for(let t of i.ranch.animals)t.kind===e&&(t.friendship=Math.min(1e3,t.friendship+60));return o(`A hush settles over the animals. They look very content.`)}if(i.map===`mine`){for(let e of i.mine.monsters)e.asleep=!0;return o(`The cave goes quiet. The monsters here are fast asleep.`)}return e.deny(`Nothing here needs calming. Try your animals, or the mine.`),!1;case`LightPhilter`:{if(i.map!==`mine`)return e.deny(`Save it for somewhere dark: the mine.`),!1;i.magic.litFloor=i.mine.floor;let t=e.mapState.objects;if(!Object.values(t).some(e=>e.t===`ladder`&&e.down)){let n=Object.entries(t).filter(([,e])=>e.t===`rock`&&e.kind!==`crate`);if(n.length){let[r]=n[e.rng.int(0,n.length)],i=t[Number(r)];i.t===`rock`&&(i.ladder=!0)}}return o(`Light spills over the cave. Something glints under one of the rocks.`)}case`LuckTonic`:return i.buffs.push({type:`luck`,amount:3,until:(i.day-1)*1440+1560}),o(`You feel lucky. Today, things might go your way.`);case`BottledSunshine`:if(!a)return e.deny(`Open it under the sky.`),!1;i.tomorrow=`sunny`;for(let e of Object.values(i.maps.farm.soil))e.crop&&!e.crop.dead&&!ju(e.crop)&&e.crop.growth++;return o(`Warm light pours out. Every crop on the farm leans toward it.`);case`FairyRing`:{if(!a||!e.walkable(t,n))return e.deny(`Pour it on open grass.`),!1;let r=0;for(let[i,a]of[[-1,-1],[0,-1],[1,-1],[-1,0],[1,0],[-1,1],[0,1],[1,1]]){let o=t+i,s=n+a,c=s*e.map.width+o;e.map.inBounds(o,s)&&e.walkable(o,s)&&!e.mapState.objects[c]&&!e.soilAt(o,s)&&(e.mapState.objects[c]={t:`forage`,item:r===0?`Glowcap`:`CommonMushroom`},r++)}return r?o(`Mushrooms push up out of the grass in a perfect circle.`):(e.deny(`There's no room here for a ring.`),!1)}case`MurkyBrew`:{let r=e.soilAt(t,n);return!r||r.fert||r.crop&&r.crop.growth>0?(e.deny(`It smells awful. Maybe on fresh soil, as fertilizer?`),!1):(r.fert=`basic`,o(`It glugs into the soil. The worms seem to like it.`))}case`SweetDreams`:return e.deny(`A gift for someone you care about. Give it to a villager.`),!1;default:return!1}}var nd=(e,t)=>(t??0)>=e.state.day,rd=[{id:`nell-01`,after:3,text:`To whoever finds this,
I was planting daffodil bulbs along the bank tonight, under a full moon, when I remembered a saying of my mother's: things set adrift in the Fern Brook on a full moon go downstream further than water goes. So here's a bottle. I've no idea where it's off to, or who you are.
Walt says if the brook's so clever, it can bring him back firewood. Twenty pieces. Set them in the water where you found this, and we'll see who's laughing.
Nell, at the farm on the Fern Brook`,asks:[`Wood`,20],sent:`You let the bundle of wood go. It turns once in the current and slips away, further than the brook should carry it.`},{id:`nell-02`,after:3,text:`Well, I never.
Twenty pieces of wood on the bank at first light, wet through and stacked neat as you please. Walt stood and looked at it a long while. Then he grunted and carried it in, which from Walt is a speech.
So things come back up the brook as well as down. My mother never mentioned that part.
Here are some water lily bulbs, by way of thank you. They don't hold with soil: set them on the pond water itself and they'll find their own way down.
Nell`,items:[[`LilyBulb`,5]]},{id:`nell-03`,after:3,text:`Midwinter here, and snow up to the gate. The cellar's down to wrinkled turnips and Walt's opinions.
I don't suppose wherever you are has parsnips? Five would make a soup to see us through to the thaw. Here's some of our honey to pay for them up front. I've decided to trust you, whoever you are. Walt says that's how I ended up marrying him.
Nell`,items:[[`Honey`,2]],asks:[`Parsnip`,5],sent:`You let the parsnips go. They bob off together like ducklings and are gone.`},{id:`nell-04`,after:3,text:`The parsnips came, and here's a puzzle. They weren't cellar parsnips. Earth still damp on them, tops as green as May, pulled that very morning. And it's been snowing here for a fortnight.
So wherever you are, it isn't winter. Walt says that means somewhere south. I made the soup and thought about it, and I don't think it's south at all.
I'll keep asking, if you'll keep answering.
Nell`},{id:`nell-05`,after:2,text:`Spring at last. Walt's finally put fish in the pond: a bucket of young bass from the hatchery over the hill, not one of them longer than my little finger. He stands on the dock in the evenings and tells them to grow.
He'd like to see a proper bass, he says, so he knows what he's waiting for. If you can catch one, send it up. Here's some of his bait. He doesn't know I've taken it.
Nell`,items:[[`Bait`,5]],asks:[`LargemouthBass`,1],sent:`You let the bass go. It flicks its tail once, as if it knows the way home.`},{id:`nell-06`,after:3,text:`Walt went very quiet over that bass. It's longer than my forearm, and it's one of his: he knows his line of them by the gold at the gill, he says. A bass doesn't grow like that in a month. That's years.
So it isn't miles between us. It's years. You're on our pond, some way on from now.
I've never caught a fish that size in my life, and you've pulled one out of a pond that hasn't got any yet.
Nell`},{id:`nell-07`,after:2,text:`I'm making a lamp charm for the porch and I'm short one piece of quartz. My last one went to prop the henhouse door, which Walt swears was a good use for it.
When I was a girl you'd find quartz in the creek beds, washed out of the mine. There's been none since they boarded it up. If you come across a piece, I'd be glad of it.
Nell`,asks:[`Quartz`,1],sent:`You let the quartz go. It ought to sink. It floats off instead, winking in the light.`},{id:`nell-08`,after:3,text:`Your quartz is fresh broken, sharp at every edge, not worn smooth by any creek. Somebody broke it out of rock, and there's only one rock round here with quartz in it.
Is the mine open where you are? If it is, a favour. Walt's broken his hoe again (he digs as if the field owes him money) and the smithy's out of copper. Five pieces of ore would mend it. The smith's new apprentice, a big quiet lad, says he'll do it cheap.
Nell`,asks:[`CopperOre`,5],sent:`You let the copper ore go. It should sink like a stone. It doesn't.`},{id:`nell-09`,after:3,text:`Walt took one look at the ore and said, "That's Fernbrook copper." He knows the green of it from his father's day. So the mine's open again where you are, and you're digging in it, and you're on our brook. You're here. Just later.
If you can get into the mine, you can grow these. Glowcaps want the cave floor just inside the entrance. I squeeze in through a gap in the boards. Don't tell Walt.
The hoe's mended. He's grunted at it twice.
Nell`,items:[[`GlowcapSpores`,5]]},{id:`nell-10`,after:4,text:`Our grandchild's come to stay for the summer: not yet tall enough to see over the kitchen table, all knees and questions, and shot up so much since last year that I call them sprout. Sprout follows Walt everywhere. Walt pretends to mind.
The trouble is, the hens have gone off laying in the heat, and sprout won't eat anything for breakfast but an egg. Two would see us through. I'll say they're from a friend.
Nell`,asks:[`Egg`,2],sent:`You let the eggs go. They bob away side by side, not a crack between them.`},{id:`nell-11`,after:3,text:`Two eggs on the bank this morning, and not a crack in either. Sprout ate both and asked who sent them. I said a friend down the brook. Sprout thought about it and said, "When I'm big, I'll send you eggs."
I've been thinking about that all week.
Sprout carries the lantern for me now while I water the moonmint after dark. Here are some emberroot seeds, for your winters. They like to be near a fire. So do I.
Nell`,items:[[`EmberrootSeeds`,5]]},{id:`nell-12`,after:4,text:`Sprout's gone home to the city, and the house is too quiet. Walt keeps looking up when the gate creaks.
Here's a test, if you'll take it. If you're on this farm, you may have found my notebook, third shelf of the bookcase, unless Walt's finally burned it like he threatens. If you have, make me a growth tonic in my old cauldron and send it up. Sprout planted a sunflower by the porch before going, and it's sulking.
Nell`,asks:[`GrowthTonic`,1],sent:`You let the little bottle of tonic go. It sails off with its cork held high, very pleased with itself.`},{id:`nell-13`,after:3,text:`It's my tonic. You made it in my cauldron, from my book, at my shelf. So you're in my house, years on, and I'm not there, or you'd have asked me how.
I've thought a good deal about who'd have our farm and my notebook and the patience to answer an old woman's bottles. I keep thinking of a small person carrying a lantern through the moonmint.
If it's you, sprout, send me moonmint. Watered after dark, the way I showed you.
Nell`,asks:[`Moonmint`,3],sent:`You let the moonmint go. It drifts away glowing faintly, a small green light going a very long way.`},{id:`nell-14`,after:3,text:`Three sprigs of moonmint, glowing in a jar on the kitchen table. I'm taking that as a yes.
Hello, sprout.
I've had a little cry, and then a big laugh, because of course it's you. You always did come when you were called, even if this time it took you half a lifetime.
The sunflower's taller than Walt now. Here's some fool's clover, for luck. Leave tilled soil empty beside it and it wanders in, the way you used to wander into my kitchen.
Grandma Nell`,items:[[`CloverSeeds`,5]]},{id:`nell-15`,after:4,text:`I told Walt. He said, "Hm." Then he went out to the barn and stayed there an hour. When he came back in he asked if you'd kept up your fishing. That's Walt for: I'm proud as anything, and when can I see them.
He reckons from the size of that bass it's thirty years between us. He's never wrong about fish, only about catching them.
I'm working on something. It wants full moons and patience. Watch for the next bottle.
Grandma Nell`},{id:`nell-16`,after:5,text:`This is Walt's pocket watch. He handed it over without a word, which tells you everything.
I've sat up with it two full moons and I think it's ready. It won't carry a letter or a bass, but it'll carry you. Use it at the farm and you'll be stood on the same spot thirty years back, with us. Use it again, or let the day run out, and you'll be home.
Come and visit, sprout. Walt says to bring your appetite. I say bring yourself.
All my love,
Grandma Nell`,items:[[`PocketWatch`,1]]}],id={lines:{nell:{first:[`Every time I look up I expect you to be knee high. Then I have to keep on looking up.`,`You've got Walt's frown when you're thinking. Don't tell him. He'll be unbearable.`,`Rosie keeps staring at you. She knows it's you, she just can't work out how. Neither can I, quite.`,`Walt built me that greenhouse last spring. He says it's for his tomatoes. It's for me. He's soft as butter.`],orchard:[`Have you planted those saplings yet? Anywhere with room to spread. Trees are patient. I'm not.`,`Apples for pies, cherries for jam. Thirty years is just about long enough to get a good crop going.`,`Plant them where you'd like to sit in the shade one day. That's the whole trick of trees.`],channel:[`Walt's been talking about that channel for twenty years. Talking. You've got him digging. I could kiss you.`,`Don't let him take the heavy end. He will, and then his back will tell us all about it for a week.`,`The field's always been thirsty. Walt carries the cans out himself and pretends it's no bother.`],capsule:[`Under the big stone by the house. Bury something of yours, and I'll add a little of my own.`,`A time capsule, the young ones call it. I call it leaving a note on the kitchen table for later.`,`Don't think too hard about what to bury. Something you'd be glad to find. That's all it needs.`],after:[`I told the new mayor he was a good mayor. He's been mayor three weeks, but somebody had to say it.`,`Young Hazel's to have my recipe box one day. You've got the notebook. Don't you two fight over it.`,`The trick with cauliflower is to talk to it. Kindly. Walt talks to his, and look at the state of them.`,`Come whenever the watch lets you. There's always tea in the pot and a job in the field.`]},walt:{first:[`Hm.`,`Rosie likes you. Rosie doesn't like anybody.`,`Hoe's got a copper collar now. Holds. ...Thanks.`,`Fences need doing. Always do. Hm.`],orchard:[`Trees. Good. Nell's been on about trees all week.`,`Dig the hole twice as wide as the roots. Not deep. Wide.`,`Apple's good. Cherry's for the birds. Plant it anyway.`],channel:[`Dig where I've staked. Pond to field. Follow the line.`,`Put your back into it. ...Not like that. Bend your knees. There.`,`Good. Keep going. Halfway, near enough.`,`Water runs downhill. Only thing in the world you can count on.`],capsule:[`Nell's got you burying things. Don't ask me. I just dig the holes.`,`Stone's heavy. Lift with your legs.`,`Nell had my watch off me. Fine. Don't lose it.`],after:[`Channel's running. Field's drinking. Good.`,`Bass are coming on. Not as big as yours yet. Give 'em time.`,`Fished the pier Sunday. Caught nothing. Good day.`,`Hm. Good to have you about. ...That's all.`]},younghazel:{first:[`Hi! I'm Hazel, from the store. Mum sent seeds for Nell. Are you a cousin? You've got her chin. Is it far, where you're from?`,`Mum says the store's the town's front porch. I'm the one who sweeps it, so I hear everything first.`,`There's a new boy apprenticed at the smithy. Bram. He doesn't talk. I talk to him anyway. Somebody has to.`,`You remind me of Nell's little grandchild. Same face when you're thinking. Funny, that.`],orchard:[`Apple trees! Nell's going to make pies, isn't she. Save me a slice. Save me two, I'm growing.`,`Mum says you plant a tree for the people who come after you. That's a bit sad. Nice, though. Mostly nice.`,`Do you want a hand? I'm no good at digging. I'm very good at watching and saying you're doing it right.`],channel:[`Walt's actually digging his channel! Mum won't believe me. She says he's been planning it since before I was born.`,`You're all muddy. Walt's all muddy. Nell's laughing at you both from the porch. I thought you should know.`,`The new mayor came in for a bow tie and practised his whole speech on me. It was very long. I said it was good.`],capsule:[`A time capsule? Can I put something in? No? Can I at least know what's in it? No? You're as bad as Nell.`,`If I buried something it'd be my diary. Then in thirty years I'd dig it up and die of embarrassment.`,`Nell gave me her cauliflower cheese recipe. The secret is more cheese. Don't tell anyone. Except you, I suppose.`],after:[`Nell's teaching me all her recipes. She says I'm the only one who'll actually cook them.`,`Have you seen Nell's cauliflowers? Mum says they're indecent. I don't know what she means, but I agree.`,`I'm going to live in the city one day. Or I'll run the store. Probably the store. Is that boring?`,`You'll come back, won't you? Nell gets a look when you're due. Walt gets two looks. Grumpy, then less grumpy.`]}},firstMeeting:[{who:`nell`,text:`Well. Look at you. I'd know that face anywhere, even with thirty years on it.`},{who:`nell`,text:`Sprout. My sprout. You used to fit under my arm, and now look at you.`},{who:`walt`,text:`Hm. Who's this, then?`},{who:`nell`,text:`Walt. It's the bottles. It's our sprout, grown up.`},{who:`walt`,text:`...`},{who:`walt`,text:`Hm. Taller than me.`},{who:`nell`,text:`He's set an extra place at supper every night since the watch went down the brook. He says it's for the cat. We haven't got a cat.`},{who:`walt`,text:`Wipe your boots. Supper's at six.`},{who:`nell`,text:`That means he's glad. You'll learn the grunts again. Come in, love. Come in.`}],orchardGive:`Here: an apple sapling and a cherry. Plant them on the farm wherever there's room. Anything you plant here gets thirty years' head start. I'll have the blossom, you'll have the fruit.`,orchardDone:`There. In thirty years you'll pick apples off those and think of me. Or of apples. Either's fine. Walt's been wanting a word, by the way.`,channelAsk:`Field's thirsty. Pond's full. Been meaning to cut a channel between them twenty years. Get your hoe. Dig where I've staked. I'll do the other end.`,channelDone:`Hm. Look at that. Water's running. ...Good channel. It'll run long after me. Good work, sprout.`,capsuleAsk:`One more thing, love. Bury something of yours under the big stone by the house. Something for later. Don't look at me like that. Later's the whole point.`,capsuleDone:`There. Now something's waiting for you at the other end. I've tucked a little of mine in with it. No digging it up till you're home.`,capsuleLetter:`Dear sprout,
If you're reading this, you've found my stone, and thirty years have gone by in the time it took you to walk round the house. I've doubled what you buried. Don't ask how. A grandmother's allowed one or two tricks.
I won't be there when you read this. I worked that out from the bottles, the way you work out rain from the swallows flying low. I've decided not to mind. I've had the farm, and Walt, and the summers you came to stay, and then I had you grown up at my table, which nobody gets. That's more than my share.
Look after the trees. Water the moonmint after dark. Talk to the cauliflowers, kindly. Let Walt's channel run.
Your grandfather wants me to tell you something. He's thinking about it. He's still thinking. He says: "Hm." He means he loves you, and he's proud of you, and he's going out to the barn now.
All my love, down the brook and further,
Grandma Nell`},ad={intro:`This is Nell's stillroom book. If you're not Nell, you're reading it anyway, so you may as well read it properly.
I'm no witch, whatever they say at the store. I grow herbs, I brew, and I mend the sort of things a bit of moonlight can mend. My mother taught me, and her mother taught her.
The cauldron does the real work. Put two or three different things in before bed, and the brew is ready by morning.
Every herb has two aspects hidden in it, the way a person has a temper and a soft spot. So do a few ordinary things: honey, an egg, a bit of quartz, coal from the scuttle, dandelions, sap off the trees. Taste a thing and you'll learn its first aspect. Brew with it and you'll learn both.
What comes out depends on how the aspects add up. Two of the same makes that aspect's tonic. Two aspects doubled at once, if they're friends, make something rarer. Nothing doubled makes a murky mess, though the garden won't mind it.
Write down what you learn. I always did.
Nell`,herbs:{Rainbell:`A sulker. Rainbell won't grow a hair on a dry night, however much you water it: it wants the sky to have done the work. After a wet day it shoots up overnight, and after a dry one it just sits there looking put upon. Plant plenty and wait for weather. Walt says it's the only thing on the farm that likes rain more than he hates it.`,Moonmint:`Water moonmint after dark, after eight by the kitchen clock, or don't bother. Morning water does nothing for it: it wants to drink by moonlight. It glows a little at night, soft and green, which is handy, since you'll be out there with the can when sensible people are in bed. A small helper with a lantern makes it go quicker.`,Waterlily:`Lily bulbs go on the pond, not in the ground. Don't dig, don't plant: set one on the water and it finds its own way down. Soil only offends it. My mother's pond had lilies thick as a carpet, and a frog on every leaf like a little green king.`,Glowcap:`Glowcaps want the dark and the damp of the mine, and not just anywhere in it: the cave room just inside the entrance, where the floor is soft. Plant the spores there and nowhere else. The mine's been boarded up since I was a girl, but there's a gap in the boards a woman my size can get through if she breathes in. Don't tell Walt.`,Emberroot:`My winter herb, and contrary with it. Emberroot grows in winter, out of doors, when everything else has given up, but only near a fire: within two steps of a furnace it does handsomely. Any further off and it sulks worse than rainbell. I suppose it likes being the only busy thing in the garden.`,FoolsClover:`Lucky, and knows it. Fool's clover grows like any clover, but leave a bit of tilled soil empty beside it and some mornings you'll find it's moved in without asking. Walt calls it a weed. Walt has never found a four-leaf one in his life, so I don't put much stock in that.`},brews:{GrowthTonic:`A splash on a crop gives it a day's growing, and a gold one gives two. On a young tree it's a whole stage. Keep it away from Walt's eyebrows.`,RainCharm:`Uncork it out of doors and it'll rain tomorrow. I keep one for dry spells, and one for when Walt boasts about the weather.`,WarmthDraught:`Pour it on the soil, and the patch around it, three paces square, won't wither when the season turns. It holds a fortnight. Good for squeezing in one more harvest.`,CalmingDraught:`Uncork it in the coop or the barn and every animal in there settles and warms to you. Underground it works on nastier things too: anything in the mine nods off.`,LightPhilter:`Uncork it in the mine and the floor brightens and the way down shows itself, even if it's hiding under a rock.`,LuckTonic:`Drink it in the morning and you're lucky all day: fish bite quicker, there's more treasure about, and the hedgerows give double more often.`,BottledSunshine:`Uncork it out of doors and tomorrow's sunny, and every crop outside does a day's growing tonight, even in the dead of winter. My favourite. It tastes like June.`,FairyRing:`Pour it on open grass and by morning there's a ring of mushrooms. Don't step inside it at midnight. Or do. I never did, so I can't tell you.`,SweetDreams:`A present anybody in town would love. Give it, and the next day they'll tell you what they dreamed. You learn a lot about a person that way. Mostly they dream about cake.`,MurkyBrew:`What you get when nothing doubles up. It smells like Walt's boots, but the soil likes it as well as any fertilizer. Waste not.`}},od=[...rd],sd=()=>({next:0,ready:0,waiting:!1,asking:null,read:[]}),cd={x:20,y:31};function ld(e){let t=e.state,n=t.bottles;if(!t.magic.notebook||n.waiting||n.asking||n.next>=od.length||(n.ready===0&&(n.ready=Math.max(t.day,3)),t.day<n.ready))return null;let r=t.maps.farm,i=e.maps.farm.width;return r.objects[cd.y*i+cd.x]={t:`bottle`},n.waiting=!0,`Something glints in the brook below the field.`}function ud(e,t){let n=e.state,r=n.bottles,i=od[r.next];if(delete e.mapState.objects[t],r.waiting=!1,!i)return{kind:`text`,text:`An empty bottle. The note has washed away.`};r.next++,r.read.push(i.id),r.asking=i.asks??null;let a=od[r.next];r.ready=n.day+(a?.after??3);let[o,s]=e.playerTile;for(let[t,n]of i.items??[])e.give(t,n,o,s);let c={id:i.id,from:`A note in a bottle`,text:i.text,items:i.items};return e.emit(`bottle`,0,0,`MessageBottle`,0,i.id),{kind:`mail`,text:i.text,letter:c}}function dd(e,t,n,r){let i=e.state.bottles.asking;return!!i&&!!r&&r.item===i[0]&&e.map.isWater(t,n)&&e.map.waterAt(t,n)===`river`}function fd(e,t,n){let r=e.state,i=r.bottles.asking;if(!i)return!1;if(e.backpack.count(i[0])<i[1])return e.deny(`Nell asked for ${i[1]} ${J(i[0]).name}. You don't have enough yet.`),!1;e.backpack.remove(i[0],i[1]),r.bottles.asking=null;let a=od[r.bottles.next-1],o=od[r.bottles.next];return r.bottles.ready=Math.max(r.bottles.ready,r.day+(o?.after??3)),e.emit(`sent`,t,n,i[0],i[1],a?.sent??`You set the ${J(i[0]).name} adrift. The current takes it downstream.`),!0}function pd(e){let t=e.state.bottles;return!e.state.magic.notebook||!t.read.length&&!t.waiting?``:t.asking?`Nell asks for ${t.asking[1]} ${J(t.asking[0]).name}. Set it adrift in the brook (use it on the water).`:t.waiting?`A bottle is waiting in the brook below the field.`:t.next>=od.length?`Nell's last bottle came. Use Grandpa's pocket watch on the farm.`:`${t.read.length} of Nell's bottles found. Another will come down the brook in a few days.`}var md=[`PreservesJar`,`Keg`,`Furnace`,`MayonnaiseMachine`,`CheesePress`,`BeeHouse`,`CrabPot`],hd=1440;function gd(e,t){let n=J(t.item),r=n.kind===`crop`||n.kind===`forage`;switch(e){case`PreservesJar`:return!r||n.sellPrice<=0||!_d(t.item)?null:{takes:1,output:{item:n.fruit?`Jelly`:`Pickles`,count:1,source:t.item},minutes:Math.round(1.8*hd)};case`Keg`:return!r||n.sellPrice<=0||!_d(t.item)?null:n.fruit?{takes:1,output:{item:`Wine`,count:1,source:t.item},minutes:4*hd}:{takes:1,output:{item:`Juice`,count:1,source:t.item},minutes:3*hd};case`Furnace`:{let e={CopperOre:[`CopperBar`,30],IronOre:[`IronBar`,120],GoldOre:[`GoldBar`,300]}[t.item];return e?{takes:5,alsoTakes:[`Coal`,1],output:{item:e[0],count:1},minutes:e[1]}:null}case`MayonnaiseMachine`:return t.item!==`Egg`&&t.item!==`LargeEgg`?null:{takes:1,output:{item:`Mayonnaise`,count:1,quality:t.item===`LargeEgg`?2:0},minutes:180};case`CheesePress`:return t.item!==`Milk`&&t.item!==`LargeMilk`?null:{takes:1,output:{item:`Cheese`,count:1,quality:t.item===`LargeMilk`?2:0},minutes:200};default:return null}}function _d(e){let t=J(e);return t.energy>0||!!t.fruit||t.kind===`crop`}var vd=4*hd,yd={weed:1,stone:1,coalstone:2,twig:1,stump:2,largeStump:10,boulder:8},bd={weed:`scythe`,stone:`pickaxe`,coalstone:`pickaxe`,twig:`axe`,stump:`axe`,largeStump:`axe`,boulder:`pickaxe`},xd={largeStump:1,boulder:1};function Sd(e){if(!e)return!1;switch(e.t){case`forage`:case`dig`:case`ladder`:case`herb`:case`bottle`:case`capsule`:return!1;case`tree`:return e.stage>=2;default:return!0}}function Cd(e,t,n){if(!e.map.inBounds(t,n))return null;let r=n*e.map.width+t,i=e.mapState.objects[r];if(!i)return null;if(i.t===`part`){let t=e.mapState.objects[i.of];return t?{key:i.of,obj:t}:null}return{key:r,obj:i}}function wd(e,t){let n=e.mapState.objects,r=n[t];if(delete n[t],r&&r.t===`debris`&&(r.type===`largeStump`||r.type===`boulder`)){let r=e.map.width;for(let e of[t+1,t+r,t+r+1])n[e]?.t===`part`&&delete n[e]}}function Td(e,t,n){let r=e.map;if(!r.inBounds(t,n)||r.groundAt(t,n)!==sl.Grass||r.featureAt(t,n)!==Y.None)return!1;let i=n*r.width+t;return!e.mapState.objects[i]&&!e.mapState.soil[i]&&!e.mapState.floors[i]&&!Ed(e,t,n)}function Ed(e,t,n){for(let r of e.map.buildings)if(t>=r.x-1&&t<=r.x+r.w&&n>=r.y+r.h&&n<=r.y+r.h+1)return!0;return!1}function Dd(e,t){let n=e.rng.next(),r=n<.45?`weed`:n<.75?`stone`:n<.8?`coalstone`:n<.94?`twig`:`stump`;return{t:`debris`,type:r,hp:yd[r],v:e.rng.int(0,3)+0}}function Od(e){let t=e.map,n=Pc(e.state.day),r=0;for(let i=0;r<G.initialDebris&&i<5e3;i++){let i=e.rng.int(2,t.width-2),a=e.rng.int(2,31);i>=13&&i<=22&&a>=13&&a<=18||Td(e,i,a)&&(e.mapState.objects[a*t.width+i]=Dd(e,n),r++)}for(let n=0,r=0;n<6&&r<500;r++){let r=e.rng.int(3,t.width-4),i=e.rng.int(3,29);if(![[0,0],[1,0],[0,1],[1,1]].every(([t,n])=>Td(e,r+t,i+n))||r>=12&&r<=23&&i>=12&&i<=19)continue;let a=i*t.width+r,o=n%2==0?`largeStump`:`boulder`;e.mapState.objects[a]={t:`debris`,type:o,hp:yd[o],v:0};for(let n of[a+1,a+t.width,a+t.width+1])e.mapState.objects[n]={t:`part`,of:a};n++}}function kd(e,t,n,r,i,a){let o=Cd(e,t,n);if(!o)return{hit:!1,broke:!1};let{key:s,obj:c}=o,[l,u]=[s%e.map.width,Math.floor(s/e.map.width)];switch(c.t){case`rock`:return Ul(e,s,r,a);case`debris`:{let o=bd[c.type];return c.type!==`weed`&&o!==r||c.type===`weed`&&(r===`rod`||r===`pail`||r===`can`)?{hit:!1,broke:!1}:(xd[c.type]??0)>i?(e.deny(c.type===`largeStump`?`This stump is too big for your axe. An upgraded axe would do it.`:`This boulder is too hard for your pickaxe. An upgraded pickaxe would do it.`),e.emit(`bonk`,t,n),{hit:!0,broke:!1}):(c.hp-=c.type===`weed`?99:a,e.emit(r===`axe`?`chop`:r===`pickaxe`?`pick`:`cut`,l,u),c.hp>0?{hit:!0,broke:!1}:(wd(e,s),Ad(e,c,l,u),{hit:!0,broke:!0}))}case`tree`:{if(r!==`axe`)return c.stage<=1&&(r===`hoe`||r===`pickaxe`)?(wd(e,s),e.emit(`pick`,l,u),{hit:!0,broke:!0}):{hit:!1,broke:!1};if(e.emit(`chop`,l,u),c.stage<4)return wd(e,s),c.stage>=2&&e.give(`Wood`,c.stage,l,u),{hit:!0,broke:!0};if(c.hp-=a,c.hp>0)return{hit:!0,broke:!1};e.mapState.objects[s]={t:`debris`,type:`stump`,hp:yd.stump,v:0};let t=e.level(`foraging`)>=3?1.25:1;e.give(`Wood`,Math.round((10+e.rng.int(0,4))*t),l,u),e.give(`Sap`,e.rng.int(2,6),l,u);let n=c.species===`oak`?`Acorn`:c.species===`pine`?`PineCone`:null;return n&&e.rng.chance(.5)&&e.give(n,1,l,u),e.addXp(`foraging`,12),e.emit(`treeFell`,l,u),{hit:!0,broke:!0}}case`placed`:return r!==`axe`&&r!==`pickaxe`?{hit:!1,broke:!1}:c.chest&&c.chest.some(e=>e)?(e.deny(`Empty the chest before picking it up.`),{hit:!0,broke:!1}):c.output&&c.readyAt!==void 0&&c.readyAt>e.now&&c.item!==`BeeHouse`?(e.deny(`It's still working.`),{hit:!0,broke:!1}):e.backpack.spaceFor(c.item)<1?(e.deny(`Your backpack is full.`),{hit:!0,broke:!1}):(wd(e,s),e.backpack.add(c.item,1),c.output&&(c.readyAt??0)<=e.now&&e.giveStack(c.output,l,u),e.emit(`pickedUp`,l,u,c.item),{hit:!0,broke:!0});default:return{hit:!1,broke:!1}}}function Ad(e,t,n,r){switch(t.type){case`weed`:e.rng.chance(.6)&&e.give(`Fiber`,1,n,r);break;case`stone`:e.give(`Stone`,1,n,r),e.rng.chance(.05)&&e.give(`Coal`,1,n,r),e.addXp(`mining`,1);break;case`coalstone`:e.give(`Stone`,1,n,r),e.give(`Coal`,e.rng.int(1,3),n,r),e.addXp(`mining`,3);break;case`twig`:e.give(`Wood`,e.rng.int(1,3),n,r);break;case`stump`:e.give(`Wood`,e.rng.int(3,6),n,r),e.addXp(`foraging`,2);break;case`largeStump`:e.give(`Hardwood`,2,n,r),e.give(`Wood`,4,n,r),e.addXp(`foraging`,25);break;case`boulder`:e.give(`Stone`,15,n,r),e.rng.chance(.5)&&e.give(`Coal`,2,n,r),e.addXp(`mining`,15)}}var jd=new Set([`Chest`,`Scarecrow`,`Sprinkler`,`QualitySprinkler`,`BeeHouse`,`PreservesJar`,`Keg`,`Furnace`,`MayonnaiseMachine`,`CheesePress`,`CrabPot`,`Cauldron`]),Md=new Set([`WoodPath`,`StonePath`]);function Nd(e,t,n,r){let i=e.map;if(!i.inBounds(t,n)||!e.inReach(t,n))return!1;let a=n*i.width+t;if(e.mapState.objects[a])return!1;if(r===`CrabPot`)return i.fishable(t,n)&&i.featureAt(t,n)===Y.None;if(!i.walkable(t,n)||i.groundAt(t,n)===sl.Water||e.playerTile[0]===t&&e.playerTile[1]===n&&!Md.has(r))return!1;let o=e.mapState.soil[a];return Md.has(r)?!o&&!e.mapState.floors[a]&&i.featureAt(t,n)===Y.None:!o?.crop}function Pd(e,t,n,r){let i=e.backpack.at(r);if(!i||!Nd(e,t,n,i.item))return!1;let a=n*e.map.width+t;if(Md.has(i.item))e.mapState.floors[a]=i.item;else{delete e.mapState.soil[a];let t={t:`placed`,item:i.item};i.item===`Chest`&&(t.chest=al.empty(24)),i.item===`BeeHouse`&&(t.readyAt=e.now+vd),e.mapState.objects[a]=t}return e.backpack.takeFrom(r,1),e.emit(`placed`,t,n,i.item),!0}function Fd(e,t,n){let r=Cd(e,t,n);if(!r)return null;let{key:i,obj:a}=r;if(a.t===`ladder`)return Vl(e,a.down);if(a.t===`herb`)return Qu(e,i,t,n);if(a.t===`bottle`)return ud(e,i);if(a.t===`tree`&&a.fruit)return hf(e,i,t,n);if(a.t===`capsule`)return{kind:`text`,text:`The ground here has been dug and patted down, long ago. A hoe would open it.`};if(a.t===`placed`&&a.item===`Cauldron`)return Yu(e,i,t,n);if(a.t===`minechest`)return a.open?{kind:`text`,text:`An empty old chest.`}:Hl(e,i);if(a.t===`forage`){let r={quality:a.quality,source:a.source},o=a.dropped?a.count??1:e.level(`foraging`)>=5&&e.rng.chance(.2)?2:1;return e.backpack.spaceFor(a.item,r)<o?(e.deny(`Your backpack is full.`),{kind:`none`,text:``}):(delete e.mapState.objects[i],e.backpack.add(a.item,o,r),a.dropped||(e.addXp(`foraging`,7),e.state.stats.foraged+=o),e.emit(`foraged`,t,n,a.item,o,``,a.quality??0),{kind:`harvested`,text:``})}return a.t===`placed`?a.item===`Chest`?{kind:`chest`,text:``,key:i}:a.item===`Scarecrow`?{kind:`text`,text:`Your scarecrow keeps the crows off the crops around it.`}:a.item===`Sprinkler`||a.item===`QualitySprinkler`?{kind:`text`,text:`It waters the soil around it every morning.`}:md.includes(a.item)?Id(e,a,t,n):null:null}function Id(e,t,n,r){let i=J(t.item).name;if(t.output&&(t.readyAt??0)<=e.now){let i=t.output;return e.backpack.spaceFor(i.item,i)<i.count?(e.deny(`Your backpack is full.`),{kind:`none`,text:``}):(e.backpack.addStack(i),t.output=void 0,t.item===`BeeHouse`?(t.readyAt=e.now+vd,t.output=void 0):t.readyAt=void 0,t.item===`CrabPot`&&(t.baited=!1),e.emit(`collected`,n,r,i.item,i.count,il(i)),{kind:`harvested`,text:``})}if(t.item===`BeeHouse`){let n=Math.max(0,(t.readyAt??e.now)-e.now);return{kind:`text`,text:Pc(e.state.day)===`winter`?`The bees are sleeping until spring.`:`The bees are busy. Honey in about ${Math.ceil(n/hd)} day${n>1440?`s`:``}.`}}if(t.item===`CrabPot`){if(t.baited)return{kind:`text`,text:`The pot is baited. Check it tomorrow morning.`};let i=e.state.selected;return e.heldItem===`Bait`?(e.backpack.takeFrom(i,1),t.baited=!0,e.emit(`loaded`,n,r,`Bait`),{kind:`harvested`,text:``}):{kind:`text`,text:`Hold some bait and use it on the pot to bait it.`}}if(t.output){let n=(t.readyAt??0)-e.now,r=n>=1440?`${Math.ceil(n/hd)} day${n>=2880?`s`:``}`:`${Math.max(1,Math.ceil(n/60))} hour${n>60?`s`:``}`;return{kind:`text`,text:`The ${i} is working on ${il(t.output)}. Ready in about ${r}.`}}let a=e.held,o=a?gd(t.item,a):null;return!a||!o?{kind:`text`,text:Ld(t.item)}:a.count<o.takes?(e.deny(`It needs ${o.takes} ${J(a.item).name}.`),{kind:`none`,text:``}):o.alsoTakes&&e.backpack.count(o.alsoTakes[0])<o.alsoTakes[1]?(e.deny(`It also needs ${o.alsoTakes[1]} ${J(o.alsoTakes[0]).name}.`),{kind:`none`,text:``}):(e.backpack.takeFrom(e.state.selected,o.takes),o.alsoTakes&&e.backpack.remove(o.alsoTakes[0],o.alsoTakes[1]),t.output=o.output,t.readyAt=e.now+o.minutes,e.emit(`loaded`,n,r,a.item,o.takes,il(o.output)),{kind:`harvested`,text:``})}function Ld(e){switch(e){case`PreservesJar`:return`Hold a fruit or vegetable and use it on the jar to make jelly or pickles.`;case`Keg`:return`Hold a fruit or vegetable and use it on the keg to make wine or juice.`;case`Furnace`:return`Hold 5 ore (with 1 coal in your backpack) and use it on the furnace to smelt a bar.`;case`MayonnaiseMachine`:return`Hold an egg and use it on the machine to make mayonnaise.`;case`CheesePress`:return`Hold milk and use it on the press to make cheese.`;default:return``}}function Rd(e,t,n,r){let i=e.mapState.objects[t];if(!i||i.t!==`placed`||!i.chest)return!1;let a=new al(i.chest),[o,s]=r?[e.backpack,a]:[a,e.backpack],c=o.at(n);if(!c)return!1;let l=s.addStack({...c});return l===c.count?(e.deny(r?`The chest is full.`:`Your backpack is full.`),!1):(o.takeFrom(n,c.count-l),!0)}function zd(e){let t=e.map,n=e.mapState.objects,r=Pc(e.state.day);for(let e in n){let t=n[e];(t.t===`forage`&&!t.dropped||t.t===`dig`)&&delete n[e]}let i=Bd(r),a=e.rng.int(G.forageMin,G.forageMax+1);for(let o=0,s=0;o<a&&s<400;s++){let a=e.rng.int(2,t.width-2),s=e.rng.int(2,31);Td(e,a,s)&&(n[s*t.width+a]=r===`winter`&&e.rng.chance(.4)?{t:`dig`}:{t:`forage`,item:i[e.rng.int(0,i.length)]},o++)}if(Object.values(n).filter(e=>e.t===`debris`).length<G.maxDebris){let i=e.rng.int(0,G.nightlyDebris+1);for(let a=0,o=0;a<i&&o<200;o++){let i=e.rng.int(2,t.width-2),o=e.rng.int(2,31);Td(e,i,o)&&(n[o*t.width+i]=Dd(e,r),a++)}}for(let i in n){let a=n[i];if(a.t===`tree`&&a.stage<4&&r!==`winter`)a.age++,a.age>=G.treeStageDays&&(a.age=0,a.stage++,a.stage===4&&(a.hp=G.treeHp));else if(a.t===`placed`&&a.item===`CrabPot`&&a.baited&&!a.output){let n=Number(i)%t.width,r=Math.floor(Number(i)/t.width);a.output={item:kc(e.rng,t.waterAt(n,r)===`ocean`),count:1},a.readyAt=e.now}else a.t===`placed`&&a.item===`BeeHouse`&&(r===`winter`?a.readyAt=(a.readyAt??e.now)+hd:!a.output&&(a.readyAt??0)<=e.now+1440&&(a.output={item:`Honey`,count:1}))}}function Bd(e){switch(e){case`spring`:return[`WildHorseradish`,`Daffodil`,`Leek`,`Dandelion`];case`summer`:return[`SpiceBerry`,`Grape`,`SweetPea`];case`fall`:return[`CommonMushroom`,`WildPlum`,`Hazelnut`,`Blackberry`];default:return[`CrystalFruit`,`Holly`]}}function Vd(e,t,n){let r=Cd(e,t,n);return!r||r.obj.t!==`dig`?!1:(delete e.mapState.objects[r.key],e.give(e.rng.chance(.5)?`WinterRoot`:`SnowYam`,1,t,n),e.addXp(`foraging`,7),e.emit(`tilled`,t,n),!0)}function Hd(e,t,n,r){if(!Td(e,t,n)&&(!e.map.tillable(t,n)||e.mapState.objects[n*e.map.width+t]||e.mapState.soil[n*e.map.width+t]))return!1;e.backpack.takeFrom(e.state.selected,1);let i=r===`Acorn`?`oak`:r===`PineCone`?`pine`:r===`AppleSapling`?`apple`:`cherry`;return e.mapState.objects[n*e.map.width+t]={t:`tree`,species:i,stage:0,hp:1,age:0},e.emit(`planted`,t,n,r),!0}var Ud=()=>({visited:!1,stage:`first`,channel:`none`,dug:[],capsule:`none`,talks:{},synced:[]}),Wd={farm:`farm_past`,farmhouse:`farmhouse_past`},Gd=e=>e.endsWith(`_past`),Kd=[[26,20],[27,20],[28,20],[29,20],[30,20]],qd=new Set([`28,20`,`29,20`]),Jd={x:3,y:9},Yd={nell:`Nell`,walt:`Walt`,younghazel:`Hazel`};function Xd(e){return e.warps.length=0,e.addBuilding({kind:`barn`,x:37,y:5,w:6,h:3}),e}function Zd(e){for(let[t,n]of Kd)e.setGround(t,n,sl.Water),e.setFeature(t,n,qd.has(`${t},${n}`)?Y.Dock:Y.None);e.labelWater()}function Qd(e){e.state.past.channel===`dug`&&(Zd(e.maps.farm),Zd(e.maps.farm_past))}function $d(e,t,n,r){let i=e.maps[t],a=e.state.maps[t].objects;for(let e=0;e<8;e++)for(let t=-e;t<=e;t++)for(let o=-e;o<=e;o++){if(Math.max(Math.abs(o),Math.abs(t))!==e)continue;let s=n+o,c=r+t;if(i.walkable(s,c)&&!i.warpAt(s,c)&&!Sd(a[c*i.width+s]))return[s,c]}return[n,r]}function ef(e){let t=e.state,n=t.map,r=Wd[n]??Object.keys(Wd).find(e=>Wd[e]===n);if(!r)return e.deny(`The watch only seems to tick on the farm.`),!1;let i=!Gd(n),a=!1;i&&!t.past.visited&&(t.past.visited=!0,a=!0),i||tf(e);let[o,s]=e.playerTile,[c,l]=$d(e,r,o,s);return e.warp(r,c,l,t.facing),e.emit(`timeshift`,c,l,null,+!!i),a&&(e.give(`AppleSapling`,1,c,l),e.give(`CherrySapling`,1,c,l),t.past.stage=`orchard`,e.emit(`pastFirst`)),!0}function tf(e){let t=e.state,n=t.maps.farm_past.objects,r=t.maps.farm.objects,i=e.maps.farm,a=0;for(let[e,o]of Object.entries(n)){let n=Number(e);if(o.t!==`tree`||t.past.synced.includes(n))continue;let s=n%i.width,c=Math.floor(n/i.width),l=r[n];l&&l.t!==`debris`&&(l.t!==`forage`||l.dropped)&&l.t!==`dig`||l?.t===`debris`&&(l.type===`largeStump`||l.type===`boulder`)||!t.maps.farm.soil[n]&&i.walkable(s,c)&&(r[n]={t:`tree`,species:o.species,stage:4,hp:G.treeHp,age:0,fruit:0},t.past.synced.push(n),a++)}return a}function nf(e){let t=e.state,n=t.minutes/60,r=[];r.push(n<19?{who:`nell`,map:`farm_past`,x:10,y:8,facing:X.Down}:{who:`nell`,map:`farmhouse_past`,x:8,y:4,facing:X.Up}),t.past.stage===`channel`&&t.past.channel!==`dug`&&n<19?r.push({who:`walt`,map:`farm_past`,x:25,y:19,facing:X.Right}):n<17?r.push({who:`walt`,map:`farm_past`,x:20,y:18,facing:X.Down}):n<20?r.push({who:`walt`,map:`farm_past`,x:35,y:12,facing:X.Down}):r.push({who:`walt`,map:`farmhouse_past`,x:4,y:5,facing:X.Right});let i=(t.day-1)%7;return(i===1||i===4||i===6)&&n>=10&&n<15&&r.push({who:`younghazel`,map:`farm_past`,x:23,y:10,facing:X.Down}),r}function rf(e,t,n){return nf(e).find(r=>r.map===e.state.map&&r.x===t&&r.y===n)?.who??null}function af(e){let t=Object.values(e.state.maps.farm_past.objects);return t.some(e=>e.t===`tree`&&e.species===`apple`)&&t.some(e=>e.t===`tree`&&e.species===`cherry`)}function of(e,t){let n=e.state.past,r=(e,n=!1)=>({kind:`talk`,npc:t,text:e,mood:n?`happy`:`neutral`});if(t===`nell`&&n.stage===`orchard`&&af(e))return n.stage=`channel`,r(id.orchardDone,!0);if(t===`walt`&&n.stage===`channel`&&n.channel===`none`)return n.channel=`asked`,r(id.channelAsk);if(t===`nell`&&n.stage===`capsule`&&n.capsule===`none`)return n.capsule=`asked`,r(id.capsuleAsk);let i=id.lines[t][n.stage],a=n.talks[t]??0;return n.talks[t]=a+1,r(i[a%i.length],t!==`walt`)}var sf=(e,t)=>Kd.findIndex(([n,r])=>n===e&&r===t);function cf(e,t,n){let r=e.state.past,i=sf(t,n);if(e.state.map!==`farm_past`||r.channel!==`asked`||i<0||r.dug.includes(i)||!e.spend(e.toolEnergy(`farming`)))return!1;if(r.dug.push(i),e.state.maps.farm_past.soil[n*e.maps.farm_past.width+t]={watered:!1,crop:null},e.emit(`tilled`,t,n),r.dug.length===Kd.length){r.channel=`dug`,r.stage=`capsule`;for(let t of[`farm`,`farm_past`]){let n=e.state.maps[t],r=e.maps[t].width;for(let[e,t]of Kd)delete n.soil[t*r+e],delete n.objects[t*r+e],delete n.floors[t*r+e]}Zd(e.maps.farm),Zd(e.maps.farm_past),e.emit(`pastDone`,t,n,null,0,id.channelDone)}return!0}function lf(e,t,n,r){let i=e.state.past;return e.state.map===`farm_past`&&i.capsule===`asked`&&t===Jd.x&&n===Jd.y&&!!r&&!J(r.item).tool&&J(r.item).kind!==`key`}function uf(e,t,n){let r=e.state.past,i=e.held;r.buried={...i},e.backpack.takeFrom(e.state.selected,i.count),r.capsule=`buried`,r.stage=`after`;let a=e.maps.farm,o=e.state.maps.farm,s=Jd.y*a.width+Jd.x;if(o.objects[s]||o.soil[s]){let[t,n]=$d(e,`farm`,Jd.x,Jd.y);s=n*a.width+t}return o.objects[s]={t:`capsule`},e.emit(`pastDone`,t,n,i.item,i.count,id.capsuleDone),!0}function df(e,t,n){let r=n*e.map.width+t,i=e.mapState.objects[r];if(e.state.map!==`farm`||i?.t!==`capsule`)return null;let a=e.state.past;delete e.mapState.objects[r],a.capsule=`found`;let o=a.buried?[[a.buried.item,a.buried.count*2]]:[];return a.buried&&e.giveStack({...a.buried,count:a.buried.count*2},t,n),e.emit(`tilled`,t,n),{id:`capsule`,from:`Nell`,text:id.capsuleLetter,items:o}}var ff={apple:[`summer`,`fall`],cherry:[`spring`,`summer`]},pf={apple:`Apple`,cherry:`Cherry`};function mf(e){for(let t of Object.values(e.state.maps.farm.objects))t.t===`tree`&&t.species in ff&&(t.fruit=t.stage<4||!ff[t.species].includes(e.season)?0:Math.min(3,(t.fruit??0)+1))}function hf(e,t,n,r){let i=e.mapState.objects[t];if(i?.t!==`tree`||!i.fruit)return null;let a=pf[i.species];return e.backpack.spaceFor(a)<i.fruit?(e.deny(`Your backpack is full.`),{kind:`none`,text:``}):(e.backpack.add(a,i.fruit),e.emit(`harvested`,n,r,a,i.fruit),e.addXp(`foraging`,3*i.fruit),i.fruit=0,{kind:`harvested`,text:``})}function gf(e){let t=e.state.past;if(!t.visited)return``;switch(t.stage){case`orchard`:return`Then and Now: plant Nell's apple and cherry saplings on the farm thirty years ago, then tell her.`;case`channel`:return t.channel===`asked`?`Then and Now: dig Walt's channel with the hoe (${t.dug.length}/${Kd.length} marked spots).`:`Then and Now: Walt has something to ask you.`;case`capsule`:return t.capsule===`asked`?`Then and Now: hold something and use it on the marked spot by the house to bury it for later.`:`Then and Now: Nell wants a word.`;default:return t.capsule===`buried`?`Then and Now: something is buried by the house, waiting. Dig it up in the present.`:`Then and Now: visit whenever you like.`}}var X=function(e){return e[e.Down=0]=`Down`,e[e.Up=1]=`Up`,e[e.Right=2]=`Right`,e[e.Left=3]=`Left`,e}({}),_f=[`hazel`,`bram`,`juniper`,`ollie`,`marigold`,`wren`,`thistle`,`pip`];function vf(e){e.npcs??={},e.friends??={},e.mail??=[],e.sent??=[],e.board??=null,e.quest??=0,e.bundles??={},e.greenhouse??=!1,e.mine??=yl(),e.ranch??=iu(),e.magic??=Hu(),e.seenScenes??=[],e.sceneDay??=0,e.bottles??=sd(),e.past??=Ud(),e.stats.found??={},e.stats.cooked??={};for(let t of _f)e.npcs[t]??={map:`home`,px:0,py:0,facing:0,path:[]},e.friends[t]??={points:0,met:!1,talkedDay:0,giftDay:0,giftWeek:-1,giftsThisWeek:0}}function yf(){return{soil:{},objects:{},floors:{}}}var bf=()=>({farming:0,fishing:0,foraging:0,mining:0,combat:0});function xf(e){return{version:2,rngState:e>>>0,day:1,minutes:G.dayStart,clockCarry:0,weather:`sunny`,tomorrow:`sunny`,money:G.startMoney,energy:G.maxEnergy,health:G.maxHealth,canWater:G.canCapacity,map:`farm`,playerX:0,playerY:0,facing:0,backpack:al.empty(),selected:0,maps:{farm:yf()},bin:[],stats:{totalEarned:0,cropsHarvested:0,fishCaught:0,foraged:0,caught:{},biggestFish:{},shipped:{},found:{},cooked:{}},xp:bf(),levelsShown:bf(),recipes:[],buffs:[],npcs:{},friends:{},mail:[],sent:[],board:null,quest:0,bundles:{},greenhouse:!1,mine:yl(),ranch:iu(),magic:Hu(),seenScenes:[],sceneDay:0,bottles:sd(),past:Ud()}}function Sf(e){let t=e;if((t.version??1)>=2)return{state:t,fresh:!1};let n=xf(t.rngState??1),r=t,i={...n,...t,version:2,health:G.maxHealth,map:`farm`,maps:{farm:{soil:r.soil??{},objects:{},floors:{}}},stats:{...n.stats,...t.stats??{}},xp:bf(),levelsShown:bf(),recipes:[],buffs:[]};delete i.soil;let a=new al(i.backpack);for(let e of[`Axe`,`Pickaxe`,`Scythe`])a.count(e)===0&&a.add(e,1);return{state:i,fresh:!0}}function Cf(){return{farm:hl(),farmhouse:Of(),greenhouse:Af(),town:Nf(),beach:Ff(),farm_past:Xd(hl(`farm_past`)),farmhouse_past:Of(`farmhouse_past`,`farm_past`),minehub:Ol(),mine:new ul(1,1,`mine`,`mine`),coop:du(`coop`),barn:du(`barn`)}}function wf(e,t,n,r,i,a){for(let o=r;o<=a;o++)for(let r=n;r<=i;r++)e.setGround(r,o,t)}function Tf(e,t,n){e.setFeature(t,n,fl(t,n)===`oak`?Y.Oak:Y.Pine)}function Ef(e,t,...n){for(let[r,i]of n)e.setFeature(r,i,t)}function Df(e,t){e.addBuilding(t)}function Of(e=`farmhouse`,t=`farm`){let n=new ul(12,9,e,`indoor`);wf(n,sl.Floor,0,0,11,8);for(let e=0;e<12;e++)n.setFeature(e,0,Y.Wall),n.setFeature(e,1,Y.Wall),e!==5&&e!==6&&n.setFeature(e,8,Y.Wall);for(let e=2;e<8;e++)n.setFeature(0,e,Y.Wall),n.setFeature(11,e,Y.Wall);return Df(n,{kind:`bed`,x:1,y:2,w:2,h:2}),Df(n,{kind:`fireplace`,x:5,y:2,w:2,h:1}),Df(n,{kind:`kitchen`,x:8,y:2,w:3,h:1}),Df(n,{kind:`table`,x:6,y:5,w:2,h:1}),Df(n,{kind:`chair`,x:5,y:5,w:1,h:1}),Df(n,{kind:`tv`,x:10,y:5,w:1,h:1}),Df(n,{kind:`bookshelf`,x:1,y:6,w:2,h:1}),Df(n,{kind:`plant`,x:10,y:7,w:1,h:1}),n.warps.push({x:5,y:8,w:2,h:1,to:t,tx:6,ty:7,facing:X.Down}),n}var kf={x:5,y:7};function Af(){let e=new ul(14,11,`greenhouse`,`indoor`);wf(e,sl.Floor,0,0,13,10);for(let t=0;t<14;t++)e.setFeature(t,0,Y.Wall),e.setFeature(t,1,Y.Wall),t!==6&&t!==7&&e.setFeature(t,10,Y.Wall);for(let t=2;t<10;t++)e.setFeature(0,t,Y.Wall),e.setFeature(13,t,Y.Wall);return wf(e,sl.Grass,jf.x0,jf.y0,jf.x1,jf.y1),e.warps.push({x:6,y:10,w:2,h:1,to:`farm`,tx:29,ty:7,facing:X.Down}),e}var jf={x0:2,y0:3,x1:11,y1:8},Mf={x:6,y:9};function Nf(){let e=new ul(56,40,`town`,`outdoor`);for(let t=0;t<56;t++)(t<26||t>31)&&(Tf(e,t,0),Tf(e,t,1)),(t<32||t>35)&&(Tf(e,t,38),Tf(e,t,39));for(let t=2;t<38;t++)t!==13&&t!==14&&t<30&&Tf(e,0,t),Tf(e,55,t);wf(e,sl.Cobble,0,13,54,14),wf(e,sl.Cobble,28,2,29,12),wf(e,sl.Cobble,22,15,33,26),wf(e,sl.Cobble,33,27,34,39),wf(e,sl.Cobble,9,15,10,21),Df(e,{kind:`house_a`,x:3,y:11,w:5,h:2,owner:`thistle`}),Df(e,{kind:`store`,x:10,y:10,w:7,h:3,owner:`hazel`}),Df(e,{kind:`saloon`,x:19,y:10,w:7,h:3,owner:`marigold`}),Df(e,{kind:`smithy`,x:31,y:11,w:6,h:2,owner:`bram`}),Df(e,{kind:`carpenter`,x:39,y:10,w:6,h:3,owner:`juniper`}),Df(e,{kind:`ranch`,x:47,y:11,w:6,h:2,owner:`wren`}),Df(e,{kind:`mine_entrance`,x:27,y:2,w:4,h:2}),Df(e,{kind:`house_b`,x:7,y:20,w:5,h:2,owner:`pip`}),Df(e,{kind:`hall`,x:24,y:27,w:8,h:3,owner:`thistle`}),Pf(e),wf(e,sl.Water,0,30,14,34),wf(e,sl.Water,0,35,18,37);for(let[t,n]of[[13,30],[14,30],[14,31]])e.setGround(t,n,sl.Grass);Ef(e,Y.Cattails,[2,30],[6,30],[10,30],[16,35]),Ef(e,Y.LilyPad,[5,32],[11,33]);for(let[t,n]of[[3,4],[8,6],[14,4],[20,6],[36,5],[43,4],[50,6],[52,22],[46,30],[40,34],[20,33],[3,24],[16,25],[48,18],[38,20]])Tf(e,t,n);return Ef(e,Y.RedFlowers,[12,16],[41,16],[26,31],[18,22],[50,15]),Ef(e,Y.YellowFlowers,[6,16],[44,16],[29,31],[36,24],[14,18]),Ef(e,Y.BlueFlowers,[16,16],[47,17],[37,29],[5,26]),Ef(e,Y.Tuft,[2,8],[10,7],[24,5],[45,8],[52,27],[41,31],[21,36],[8,27]),Ef(e,Y.SmallBush,[2,16],[38,16],[53,16],[20,16],[12,25]),Ef(e,Y.Lamp,[9,12],[27,12],[37,12],[54,12],[21,17],[34,17],[21,25],[35,25]),e.signs.set(dl(30,3),`The Fernbrook Mine. Mind your head.`),e.warps.push({x:0,y:13,w:1,h:2,to:`farm`,tx:46,ty:10,facing:X.Left}),e.warps.push({x:32,y:39,w:4,h:1,to:`beach`,tx:21,ty:1,facing:X.Down}),e.labelWater(),e}function Pf(e){e.addBuilding({kind:`fountain`,x:26,y:19,w:3,h:2}),e.addBuilding({kind:`board`,x:23,y:16,w:2,h:1});for(let[t,n]of[[30,16],[24,23],[30,23]])e.addBuilding({kind:`bench`,x:t,y:n,w:2,h:1})}function Ff(){let e=new ul(44,24,`beach`,`outdoor`);wf(e,sl.Sand,0,5,43,23),wf(e,sl.Water,0,16,43,23);for(let[t,n]of[[3,15],[4,15],[10,15],[11,14],[12,15],[25,15],[26,15],[38,15],[39,14],[40,15]])wf(e,sl.Water,t,n,t,15);for(let t=0;t<44;t++)(t<20||t>23)&&(Tf(e,t,0),Tf(e,t,1));for(let t=2;t<6;t++)Tf(e,0,t),Tf(e,43,t);wf(e,sl.Cobble,20,0,23,3),Df(e,{kind:`fish_shop`,x:32,y:8,w:4,h:2,owner:`ollie`});for(let t=13;t<=20;t++)e.setFeature(29,t,Y.Dock),e.setFeature(30,t,Y.Dock);return Ef(e,Y.Tuft,[5,6],[14,5],[27,6],[39,7],[8,9],[18,8]),Ef(e,Y.Pebbles,[12,11],[36,12],[20,13]),Ef(e,Y.Log,[6,11],[41,10]),Ef(e,Y.Rock,[16,12],[2,13]),e.signs.set(dl(28,12),`Fernbrook Pier. Ocean fish change with the seasons.`),Ef(e,Y.Signpost,[28,12]),e.warps.push({x:20,y:0,w:4,h:1,to:`town`,tx:33,ty:37,facing:X.Up}),e.labelWater(),e.water=e.water.map(e=>e===`none`?e:`ocean`),e}var If=[{id:`spring`,name:`Spring Crops`,items:[`Parsnip`,`Potato`,`Cauliflower`,`Strawberry`],need:4,reward:[`SpeedGro`,20]},{id:`summer`,name:`Summer Crops`,items:[`Tomato`,`Blueberry`,`Melon`,`HotPepper`],need:4,reward:[`QualitySprinkler`,1]},{id:`fall`,name:`Fall Crops`,items:[`Corn`,`Eggplant`,`Pumpkin`,`Yam`],need:4,reward:[`BeeHouse`,1]},{id:`forage`,name:`Forager's`,need:4,reward:[`PreservesJar`,1],items:[`WildHorseradish`,`Daffodil`,`Leek`,`Dandelion`,`SpiceBerry`,`Grape`,`CommonMushroom`,`Blackberry`]},{id:`fish`,name:`Fisherman's`,need:4,reward:[`CrabPot`,2],items:[`Sunfish`,`Carp`,`Bream`,`Chub`,`Catfish`,`Sardine`,`Perch`,`Salmon`]},{id:`artisan`,name:`Artisan`,items:[`Jelly`,`Pickles`,`Honey`,`Wine`,`Mayonnaise`,`Cheese`],need:3,reward:[`Keg`,1]}];function Lf(e,t){return e.state.bundles[t.id]??[]}function Rf(e,t){return Lf(e,t).length>=t.need}function zf(e){return If.filter(t=>Rf(e,t)).length}function Bf(e,t,n){return!Rf(e,t)&&t.items.includes(n)&&!Lf(e,t).includes(n)}function Vf(e,t,n){let r=If.find(e=>e.id===t),i=e.backpack.at(n);if(!r||!i||!Bf(e,r,i.item))return!1;if(e.backpack.takeFrom(n,1),(e.state.bundles[r.id]??=[]).push(i.item),e.emit(`bundle`,0,0,i.item,0,r.name),Rf(e,r)){let[t,n]=e.playerTile;e.give(r.reward[0],r.reward[1],t,n),e.emit(`bundleDone`,0,0,r.reward[0],r.reward[1],`${r.name} Bundle complete! Reward: ${r.reward[1]} ${J(r.reward[0]).name}.`)}return!0}function Hf(e){if(e.state.greenhouse||zf(e)<If.length)return null;e.state.greenhouse=!0;let t=e.state.maps.greenhouse,n=e.maps.greenhouse.width,r=jf;for(let e=r.y0;e<=r.y1;e++)for(let i=r.x0;i<=r.x1;i++)t.soil[e*n+i]??={watered:!1,crop:null};return eu(e,`bundlesDone`),`The town restored the old greenhouse on your farm.`}var Uf=[{id:`meet`,title:`Meet the Town`,text:`Say hello to everyone in Fernbrook.`,reward:250,done:e=>Zf.every(t=>e.state.friends[t].met),progress:e=>`${Zf.filter(t=>e.state.friends[t].met).length}/${Zf.length} met`},{id:`fish`,title:`Gone Fishing`,text:`Catch a fish anywhere.`,reward:200,done:e=>e.state.stats.fishCaught>=1},{id:`parsnips`,title:`Parsnip Season`,text:`Ship or sell 15 parsnips.`,reward:300,done:e=>(e.state.stats.shipped.Parsnip??0)>=15,progress:e=>`${Math.min(15,e.state.stats.shipped.Parsnip??0)}/15`},{id:`bundle`,title:`A Helping Hand`,text:`Fill a bundle in the community hall.`,reward:500,done:e=>zf(e)>=1},{id:`hall`,title:`The Heart of Fernbrook`,text:`Fill every bundle in the community hall.`,reward:1e3,done:e=>zf(e)>=If.length,progress:e=>`${zf(e)}/${If.length} bundles`}],Wf=e=>Uf[e.state.quest]??null;function Gf(e){for(let t=Wf(e);t&&t.done(e);t=Wf(e))e.state.quest++,e.state.money+=t.reward,e.state.stats.totalEarned+=t.reward,e.emit(`quest`,0,0,null,t.reward,t.title)}function Kf(e){let t=Pc(e.state.day);return[...{spring:[`Parsnip`,`Potato`,`Cauliflower`],summer:[`Tomato`,`Blueberry`,`HotPepper`,`Corn`],fall:[`Pumpkin`,`Cranberries`,`Eggplant`,`Yam`,`Corn`],winter:[]}[t],...Bd(t),`Sunfish`,`Carp`,`Bream`,`Chub`,`Wood`,`Stone`,`Fiber`,`Sap`]}function qf(e){let t=Kf(e),n=t[e.rng.int(0,t.length)],r=Math.max(1,J(n).sellPrice),i=r<=5?e.rng.int(10,21):r<=50?e.rng.int(2,6):e.rng.int(1,3),a=Zf[e.rng.int(0,Zf.length)];return{npc:a,item:n,count:i,reward:Math.max(100,Math.round(r*i*3/10)*10),text:Vc[e.rng.int(0,Vc.length)].replaceAll(`{npc}`,Zc[a].name).replaceAll(`{count}`,String(i)).replaceAll(`{item}`,J(n).name),posted:e.state.day,accepted:!1}}function Jf(e){let t=e.state.board,n=null;if(t?.accepted){if(e.state.day<t.posted+2)return null;n=`You ran out of time to bring ${Zc[t.npc].name} the ${J(t.item).name}.`}return e.state.board=qf(e),n}function Yf(e){let t=e.state.board;return!t||t.accepted?!1:(t.accepted=!0,e.emit(`quest`,0,0,null,0,`accepted`),!0)}function Xf(e,t){let n=e.state.board;if(!n?.accepted||n.npc!==t||e.backpack.count(n.item)<n.count)return null;e.backpack.remove(n.item,n.count),e.state.money+=n.reward,e.state.stats.totalEarned+=n.reward;let r=e.state.friends[t];return r.points=Math.min(2500,r.points+150),e.state.board=null,e.emit(`quest`,0,0,n.item,n.reward,`request`),{kind:`talk`,npc:t,mood:`happy`,text:`You brought the ${J(n.item).name}! Thank you, really. Here's what I promised: ${n.reward.toLocaleString(`en-US`)}g.`}}var Zf=[`hazel`,`bram`,`juniper`,`ollie`,`marigold`,`wren`,`thistle`,`pip`],Z=(e,t=0)=>e*60+t,Qf=(e,t,n,r,i=X.Down)=>({at:e,map:t,x:n,y:r,facing:i}),$f=e=>Qf(e,`home`,0,0),ep={store:`hazel`,smithy:`bram`,carpenter:`juniper`,saloon:`marigold`,ranch:`wren`,fish_shop:`ollie`},tp={store:[`town`,15,13],smithy:[`town`,35,13],carpenter:[`town`,43,13],saloon:[`town`,22,13],ranch:[`town`,51,13],fish_shop:[`beach`,34,11]},np={store:[Z(9),Z(17)],smithy:[Z(9),Z(16)],carpenter:[Z(9),Z(17)],saloon:[Z(12),Z(24)],ranch:[Z(9),Z(16)],fish_shop:[Z(9),Z(17)]};function rp(e,t,n){let r=Lc(t);switch(e){case`hazel`:return r===`Sun`?[$f(0),Qf(Z(10),`town`,25,18),Qf(Z(13),`town`,31,18),Qf(Z(17),`town`,22,14),$f(Z(21))]:[$f(0),Qf(Z(8,30),`town`,15,13),Qf(Z(17,30),`town`,25,18),Qf(Z(19),`town`,22,14),$f(Z(21))];case`bram`:return r===`Fri`?[$f(0),Qf(Z(9),`beach`,29,18),Qf(Z(17),`town`,23,14),$f(Z(20))]:[$f(0),Qf(Z(8,30),`town`,35,13),Qf(Z(16,30),`town`,23,14),$f(Z(20))];case`juniper`:return[$f(0),Qf(Z(8,30),`town`,43,13),Qf(Z(17,30),`town`,29,23),$f(Z(20))];case`marigold`:return[$f(0),Qf(Z(11),`town`,22,13),$f(Z(24))];case`wren`:return[$f(0),Qf(Z(8,30),`town`,51,13),Qf(Z(16,30),`town`,15,28),$f(Z(19))];case`ollie`:return n?[$f(0),Qf(Z(12),`town`,23,14),$f(Z(20))]:[$f(0),Qf(Z(8),`beach`,34,11),Qf(Z(17),`beach`,30,19),$f(Z(22))];case`thistle`:return[$f(0),Qf(Z(9),`town`,29,31),Qf(Z(12),`town`,25,21,X.Right),Qf(Z(15),`town`,30,15),$f(Z(18))];case`pip`:return n?[$f(0),Qf(Z(10),`town`,10,23),$f(Z(16))]:[$f(0),Qf(Z(9),`town`,30,22),Qf(Z(12),`town`,12,29,X.Up),Qf(Z(16),`town`,10,23),$f(Z(19))]}}function ip(e,t,n,r){let i=rp(e,t,r),a=i[0];for(let e of i)e.at<=n&&(a=e);return a}function ap(e,t){for(let n of Zf){let r=e.state.npcs[n],i=ip(n,e.state.day,e.state.minutes,xc(e.state.weather));if(i.map!==r.map||i.map===`home`){r.map=i.map,r.px=i.x*G.tile+8,r.py=i.y*G.tile+12,r.facing=i.facing,r.path=[];continue}let[a,o]=[Math.floor(r.px/16),Math.floor((r.py-3)/16)];if(a===i.x&&o===i.y&&r.path.length===0){r.facing=i.facing;continue}r.path.length===0&&(r.path=e.findPath(r.map,[a,o],[i.x,i.y])??[[i.x,i.y]]);let[s,c]=r.path[0],l=s*16+8,u=c*16+12,d=l-r.px,f=u-r.py,p=Math.hypot(d,f),m=48*t;p<=m?(r.px=l,r.py=u,r.path.shift()):(r.px+=d/p*m,r.py+=f/p*m,r.facing=Math.abs(d)>Math.abs(f)?d<0?X.Left:X.Right:f<0?X.Up:X.Down)}}function op(e){for(let t of Zf){let n=e.state.npcs[t];n.map=`home`,n.path=[]}}function sp(e,t,n){for(let r of Zf){let i=e.state.npcs[r];if(i.map===e.state.map&&Math.floor(i.px/16)===t&&Math.floor((i.py-3)/16)===n)return r}return null}var cp=e=>Math.floor(e/250);function lp(e,t){let n=Zc[e].birthday;return Pc(t)===n.season&&Fc(t)===n.day}function up(e,t){let n=Zc[e];return t===`SweetDreams`||n.loved.includes(t)?`loved`:n.liked.includes(t)?`liked`:n.disliked.includes(t)?`disliked`:n.hated.includes(t)?`hated`:Qc.includes(t)?`liked`:$c.includes(t)?`hated`:`neutral`}var dp={loved:80,liked:45,neutral:20,disliked:-20,hated:-40};function fp(e,t){let n=e.state.friends[t],r=e.held,i=n.met?Xf(e,t):null;if(i)return i;if(r&&!J(r.item).tool&&n.met)return pp(e,t,e.state.selected);let a=zc[t],o=e.state.day,s,c=`neutral`;if(!n.met)s=a.intro,n.met=!0;else if(lp(t,o))s=a.birthday,c=`happy`;else{let r=(e,n)=>e[(o*7+Zf.indexOf(t)*13+n)%e.length],i=(o*31+Zf.indexOf(t)*17)%10,l=cp(n.points)>=6?2:+(cp(n.points)>=3);s=e.state.weather===`snowy`&&i<3&&a.snow.length?r(a.snow,1):xc(e.state.weather)&&i<3?r(a.rain,2):i<6?r(a.seasons[e.season],3):r(a.tiers[l],4),l>=1&&(c=`happy`)}return n.talkedDay!==o&&(n.talkedDay=o,n.points=Math.min(2500,n.points+20)),e.emit(`talked`,0,0,null,0,t),{kind:`talk`,text:s,npc:t,mood:c}}function pp(e,t,n){let r=e.state.friends[t],i=zc[t],a=e.backpack.at(n),o=e.state.day,s=Math.floor((o-1)/7);if(r.giftWeek!==s&&(r.giftWeek=s,r.giftsThisWeek=0),r.giftDay===o||r.giftsThisWeek>=2)return{kind:`talk`,text:i.gift.tooMany,npc:t,mood:`neutral`};let c=up(t,a.item),l=lp(t,o),u=dp[c]*(l?8:1)*(a.quality===2?1.5:a.quality===1?1.25:1);return r.points=Math.max(0,Math.min(2500,r.points+Math.round(u))),r.giftDay=o,r.giftsThisWeek++,e.backpack.takeFrom(n,1),e.emit(`gift`,0,0,a.item,Math.round(u),t),{kind:`talk`,text:l&&(c===`loved`||c===`liked`)?i.gift.birthday:i.gift[c],npc:t,mood:c===`loved`||c===`liked`?`happy`:`neutral`}}var mp=[{id:`hazel-2`,npc:`hazel`,hearts:2,place:`town_store`,from:9,to:13,cast:[{who:`hazel`,dx:0,dy:0,face:`down`},{who:`player`,dx:0,dy:3,face:`up`},{who:`pip`,dx:-3,dy:2,face:`right`}],steps:[{say:`hazel`,text:`Morning, love! Come and stand here a minute. Right here, by the step. Best seat in Fernbrook.`,mood:`happy`},{move:`player`,dx:0,dy:1},{say:`hazel`,text:`Listen. Hear that clanging? That's Bram. Fast and cross means a bad night. Slow means he's humming. He thinks nobody knows he hums.`},{say:`hazel`,text:`That tapping is Juniper, three jobs at once. And that silence? That's Thistle drawing breath for a speech.`},{narrate:`You hear running feet. Something small and muddy shoots past behind you, holding a jar up high.`},{move:`pip`,dx:3,dy:2},{emote:`alert`,who:`pip`},{say:`pip`,text:`Can't stop! Beetle emergency!`},{say:`hazel`,text:`And that was Pip. Don't ask about the jar, love. I never do.`},{say:`hazel`,text:`You learn a town by listening. So. What's Fernbrook going to hear from your farm first?`},{choice:`What will you plant first?`,who:`hazel`,options:[{label:`Cauliflowers, like Grandma`,points:50,mood:`happy`,reply:`Oh! She'd be tickled. Her cauliflowers were the size of Thistle's head. Don't tell him I said that.`},{label:`Whatever grows fastest`,points:20,reply:`Parsnips, then. Sensible. Your grandfather would have said the same, with fewer words.`},{label:`Does it matter?`,points:-20,reply:`Everything matters in a town this small, love. You'll see.`}]},{say:`hazel`,text:`Right! Nine o'clock. Well, nine-ish. The store's open, love. Mind the step on your way in.`}]},{id:`hazel-4`,npc:`hazel`,hearts:4,place:`town_plaza`,from:18,to:21,cast:[{who:`hazel`,dx:0,dy:0,face:`up`},{who:`player`,dx:2,dy:1,face:`left`}],steps:[{narrate:`You find Hazel pinning a postcard to the notice board. On the front, a whale the size of a barn waves its tail.`},{face:`hazel`,dir:`right`},{say:`hazel`,text:`From my sister and her husband. Pip's mum and dad. They're somewhere very cold, counting whales. Pip wanted everyone to see it.`},{say:`hazel`,text:`She always wanted the sea, my sister. Even little, she'd stand at the end of the pier pointing at the horizon.`},{say:`hazel`,text:`I wanted to go too, once. Mountains, cities, the lot. Then Mum got poorly, and somebody had to mind the counter.`},{wait:.8},{say:`hazel`,text:`Oh, don't look like that, love! I'm happy. Mostly. It's just, some evenings I pin up a postcard and I wonder.`},{choice:`What do you tell Hazel?`,who:`hazel`,options:[{label:`The world comes to you`,points:60,mood:`happy`,reply:`...Oh, love. It does, doesn't it? Every bit of news, every coming and going, it all passes my counter. I'd never thought of it like that.`},{label:`It's not too late to go`,points:30,reply:`Ha! And leave Pip in charge of the store? We'd be selling worms by Tuesday. ...It's a nice thought, though.`},{label:`Sounds like you missed out`,points:-20,reply:`Well. That's one way to put it, love. Not the kindest way.`}]},{say:`hazel`,text:`Right! Enough moping at the board. Marigold's got soup on, and I've got news to deliver.`,mood:`happy`},{move:`hazel`,dx:-3,dy:0},{emote:`note`,who:`hazel`}]},{id:`hazel-6`,npc:`hazel`,hearts:6,place:`town_store`,from:17,to:21,cast:[{who:`hazel`,dx:0,dy:0,face:`down`},{who:`player`,dx:0,dy:3,face:`up`}],steps:[{say:`hazel`,text:`There you are! Come here, love, I want to show you something before I lock up.`},{move:`player`,dx:0,dy:1},{narrate:`She opens a heavy old ledger for you. The pages are soft as cloth, and every family in Fernbrook has one of their own.`},{say:`hazel`,text:`Mum started this book before I was born. Every account in town. Look, here's Bram's mother. Sweet pea seeds, every spring.`},{say:`hazel`,text:`And here. Fernbrook Farm. Your grandmother's hand, then mine. Forty years of seed orders. Cauliflowers, mostly.`},{say:`hazel`,text:`When she passed, I couldn't bring myself to close the page. I just left it open. Felt like it was waiting for somebody.`},{wait:1},{narrate:`Under the last line in your grandmother's handwriting, there's a new line in Hazel's. It's your name.`},{say:`hazel`,text:`There. Now it's official. You're on the books, love, and in Fernbrook that means you're family. I did say I'd decided.`,mood:`happy`},{emote:`heart`,who:`hazel`},{choice:`Hazel closes the ledger gently.`,who:`hazel`,options:[{label:`You were waiting for me`,points:60,mood:`happy`,reply:`...I suppose I was, love. I just didn't know it would be you. Now look at me, all damp at my own counter.`},{label:`Grandma would be glad`,points:40,reply:`She would. She'd also tell me to stop fussing and give you a biscuit. Here. Have a biscuit.`},{label:`Do family get a discount?`,points:-10,reply:`Cheeky! Family pays full price, love. Some weeks family pays extra.`}]},{say:`hazel`,text:`Off you go, then. And come for supper this week. I always make too much soup.`}]},{id:`bram-2`,npc:`bram`,hearts:2,place:`town_smithy`,from:9,to:16,cast:[{who:`bram`,dx:-1,dy:0,face:`left`},{who:`player`,dx:1,dy:2,face:`up`}],steps:[{narrate:`You find Bram down on one knee by his water barrel, peering under the anvil with great seriousness.`},{say:`bram`,text:`Hm. Farmer. Don't step anywhere. Something's loose.`},{say:`bram`,text:`Frog. Pip's frog. Lives in my barrel. It's not my frog. But if Pip comes by and it's gone, I'll never hear the end of it.`},{move:`bram`,dx:-2,dy:1},{narrate:`You spot a small green frog on the warm step by the forge, eyes half shut, looking very pleased with itself.`},{emote:`alert`,who:`bram`},{say:`bram`,text:`There you are. Daft thing. The forge is hot, Anvil. I've told you.`},{move:`bram`,dx:-1,dy:0},{narrate:`You watch him scoop the frog up in one huge, careful hand and lower it into the barrel as if it were made of glass.`},{choice:`Bram wipes his hands on his apron.`,who:`bram`,options:[{label:`He likes being near you`,points:50,reply:`...Hm. He does sit on the barrel and watch me work. Company, I suppose. Don't tell Pip I said that.`},{label:`So you did name him`,points:20,reply:`I didn't name him. Pip named him. I just use it. That's different.`},{label:`Just get another frog`,points:-30,reply:`There isn't another frog. There's this one.`}]},{say:`bram`,text:`Hm. Thanks for the eyes. Mind the forge on your way out. I mean it.`}]},{id:`bram-4`,npc:`bram`,hearts:4,place:`town_smithy`,from:16,to:20,weather:`dry`,cast:[{who:`bram`,dx:-1,dy:0,face:`up`},{who:`player`,dx:1,dy:2,face:`up`}],steps:[{narrate:`You find Bram kneeling by the smithy door with a tiny trowel in his enormous hand. A seed packet pokes out of his apron pocket.`},{emote:`alert`,who:`bram`},{face:`bram`,dir:`down`},{say:`bram`,text:`...Not a word.`},{say:`bram`,text:`Sweet peas. My mother grew them by this door. She'd sit right here on a bucket and tell me when I was hitting it wrong.`},{say:`bram`,text:`Iron I understand. Seeds, no. Which way up do they go? There's no up. They're round.`},{move:`player`,dx:0,dy:0},{narrate:`You kneel beside him and show him: a finger deep, a little soil over the top, a pat. He copies you exactly, frowning hard.`},{say:`bram`,text:`Hm. That's it? That's all they want?`},{choice:`Bram pats the soil down, very gently.`,who:`bram`,options:[{label:`She'd love this`,points:60,mood:`happy`,reply:`...She would. She wore a ruby I found her every day of her life. Said it was the colour of the forge at night. Hm. Thank you.`},{label:`Water, and patience`,points:40,reply:`Water I've got. The frog won't mind sharing. Patience... I'm working on it.`},{label:`Flowers? You?`,points:-20,reply:`Yes. Me. Go on, then. That's why I do it after closing.`}]},{say:`bram`,text:`Hazel's going to see these come up and tell the whole town. Hm. Let her.`},{narrate:`As you go, you glance back. He's still kneeling there, looking at the little patch of bare soil.`}]},{id:`bram-6`,npc:`bram`,hearts:6,place:`farm_porch`,from:6,to:9,cast:[{who:`bram`,dx:0,dy:0,face:`up`},{who:`player`,dx:0,dy:2,face:`up`}],steps:[{narrate:`You find Bram at your front door with an oil can, frowning at the hinges. The door gives a long, mournful squeak.`},{face:`bram`,dir:`down`},{say:`bram`,text:`Hm. Morning. Your door squeaks. Heard it from the road. Couldn't stand it.`},{say:`bram`,text:`I made these hinges. First job I ever did on my own. Apprentice, hands shaking. Your grandfather walked in and asked for me by name.`},{say:`bram`,text:`Nobody asked for the apprentice. He paid double, told me they were the ugliest hinges in the valley, and hung them anyway.`},{say:`bram`,text:`Thirty years. Still on the door. Ugly, but still on.`},{wait:1},{say:`bram`,text:`Walt said the squeak was useful. Nell always knew when he'd come in for tea. ...I can oil them. Or make you new ones. Better ones.`},{choice:`What should Bram do?`,who:`bram`,options:[{label:`Keep them. Just oil them.`,points:60,mood:`happy`,reply:`Hm. Good. ...Good. That's what I hoped you'd say.`},{label:`New ones, please`,points:20,reply:`Fair. I'll make them right. I'm keeping these, though. On my wall. Don't tell anyone.`},{label:`How much will it cost?`,points:-20,reply:`...Nothing. Don't spoil it.`}]},{narrate:`You watch him oil each hinge with great care. The door swings open without a sound, then shut. He looks almost disappointed.`},{say:`bram`,text:`There. Day or night, farmer, you need anything fixed, you knock. Even Fridays.`},{emote:`heart`,who:`bram`},{move:`bram`,dx:3,dy:2}]},{id:`juniper-2`,npc:`juniper`,hearts:2,place:`town_carpenter`,from:9,to:17,weather:`dry`,cast:[{who:`juniper`,dx:0,dy:0,face:`down`},{who:`player`,dx:1,dy:2,face:`up`}],steps:[{say:`juniper`,text:`Hey hey! Perfect timing. I need a witness and a timekeeper. You're both. Count to sixty, out loud, go!`},{narrate:`You count. Juniper becomes a blur of planks, nails and sawdust. A pencil flies from behind her ear and she catches it without looking.`},{move:`juniper`,dx:-1,dy:0},{narrate:`Fifty-eight... fifty-nine... You reach sixty just as she slaps in the last nail and throws both arms up.`},{say:`juniper`,text:`A birdhouse! In under a minute! Fast and sturdy, that's the...`,mood:`happy`},{narrate:`You watch the roof slide gently off the birdhouse and land in the sawdust.`},{emote:`alert`,who:`juniper`},{say:`juniper`,text:`...Fast and mostly sturdy. Okay. Be honest with me. Fast, or sturdy? Which matters more?`},{choice:`Fast, or sturdy?`,who:`juniper`,options:[{label:`Why not both?`,points:50,mood:`happy`,reply:`THAT'S THE MOTTO! You were listening! Okay, again. This time with roof glue. Count again, go!`},{label:`Sturdy. The roof fell off.`,points:30,reply:`Ouch. Fair, though. An honest critic. I like you. Don't let it go to your head.`},{label:`Who needs a birdhouse?`,points:-20,reply:`Birds, mostly. Wow. Rude. To the birds.`}]},{say:`juniper`,text:`Thanks for counting. Come by any time you need something built. Or timed.`}]},{id:`juniper-4`,npc:`juniper`,hearts:4,place:`town_hall`,from:18,to:20,weather:`dry`,cast:[{who:`juniper`,dx:0,dy:0,face:`up`},{who:`player`,dx:2,dy:1,face:`left`}],steps:[{narrate:`You find Juniper standing very still in front of the community hall. You've never seen her stand still. It's a little unsettling.`},{face:`juniper`,dir:`right`},{say:`juniper`,text:`Oh! Hey. Don't mind me. Just looking at the doors.`},{say:`juniper`,text:`My dad made these. Oak, pegged, no nails. He said nails are for people in a hurry. I'm always in a hurry. Ha.`},{say:`juniper`,text:`He came here every Sunday to oil the hinges. After he passed, nobody did. Then the roof went, then the floor...`},{wait:.8},{say:`juniper`,text:`That's why I do three jobs at once, I think. If I keep moving, I don't have to stand here and miss him.`},{choice:`Juniper rubs the old wood with her thumb.`,who:`juniper`,options:[{label:`Stand here a while with me`,points:60,mood:`happy`,reply:`...Okay. Yeah. Just a minute, though. ...This is nice. Don't tell anyone I stood still.`},{label:`Oil them, like he did`,points:40,reply:`...Every Sunday. Like him. Yeah. I can make time for that. I can make time for that one thing.`},{label:`You do rush everything`,points:-20,reply:`...Yeah. Thanks. I know.`}]},{emote:`heart`,who:`juniper`},{say:`juniper`,text:`Right! Okay. Enough feelings. I've got a chair with eight legs that won't build itself. Night, farmer!`},{move:`juniper`,dx:-3,dy:1}]},{id:`juniper-6`,npc:`juniper`,hearts:6,place:`farm_porch`,from:18,to:20,weather:`dry`,cast:[{who:`juniper`,dx:0,dy:0,face:`down`},{who:`player`,dx:0,dy:2,face:`up`}],steps:[{say:`juniper`,text:`There you are! Don't move. Close your eyes. Are they closed? They're not closed. Close them!`},{narrate:`You close your eyes. You hear rustling, one muffled curse, and the scrape of something heavy and wooden.`},{move:`juniper`,dx:-1,dy:0},{say:`juniper`,text:`Okay. Open!`},{narrate:`You open your eyes. It's a sign for the farm gate, carved deep and freshly painted: FERNBROOK FARM. Under it runs a row of tiny leaves.`},{say:`juniper`,text:`Look closer. Under the leaves.`},{narrate:`You lean closer. Carved very small along the bottom edge are three names: Nell, Walt, and yours.`},{say:`juniper`,text:`Dad always said a good sign says who keeps the place, not just what it is. So. Now it says.`},{emote:`heart`,who:`juniper`},{choice:`Juniper bounces on her heels, waiting.`,who:`juniper`,options:[{label:`Will you teach me to carve?`,points:60,mood:`happy`,reply:`Really? YES. I've been waiting for you to ask! Steady hands, I knew it. Come by the shop any evening. Bring snacks.`},{label:`It's perfect. Thank you.`,points:50,mood:`happy`,reply:`You like it? You really like it? Okay. I'm not crying. It's sawdust. Proud sawdust.`},{label:`Is it a bit crooked?`,points:-20,reply:`It's rustic. It's MEANT to be... Is it crooked? It's not crooked. Don't say crooked.`}]},{say:`juniper`,text:`I'll hang it on the gate post on my way out. Took me three weeks. Fastest three weeks of my life.`},{move:`juniper`,dx:3,dy:1}]},{id:`ollie-2`,npc:`ollie`,hearts:2,place:`beach_shack`,from:9,to:17,weather:`dry`,cast:[{who:`ollie`,dx:0,dy:0,face:`down`},{who:`player`,dx:0,dy:2,face:`up`}],steps:[{say:`ollie`,text:`Ahoy, matey! Just in time. I was telling this gull about the night I fought off a squid with nothing but a spoon.`},{narrate:`You look up. There is a gull on the shack roof. It does not look like it's listening.`},{say:`ollie`,text:`Twelve arms, it had. Or twenty. Hard to count in the dark. I says to it, I says, squid, you have picked the wrong...`},{narrate:`Before you can answer, the gull drops off the roof, snatches Ollie's hat clean off his head, and flaps away down the beach.`},{emote:`alert`,who:`ollie`},{say:`ollie`,text:`OI! That's three years running! Bring that back, you feathered pirate!`},{move:`ollie`,dx:2,dy:1},{say:`ollie`,text:`...Well. Where was I? The squid. Nobody ever wants to hear the end of the squid.`},{choice:`Ollie looks at you hopefully.`,who:`ollie`,options:[{label:`What happened to the squid?`,points:50,mood:`happy`,reply:`Ha! Now THAT'S a proper question! Sit down, sit down. So there I was, spoon in hand, moonlight on the water...`},{label:`Is any of it true?`,points:10,reply:`Every word! Give or take most of them. The spoon's real. I've still got the spoon.`},{label:`Sorry, I'm busy`,points:-20,reply:`Aye. Course. Busy folk, farmers. ...The gull can hear the end, then.`}]},{say:`ollie`,text:`If you see a gull in a hat, it's mine. The hat, not the gull. Though I'd take the gull.`}]},{id:`ollie-4`,npc:`ollie`,hearts:4,place:`beach_shore`,from:17,to:22,weather:`dry`,cast:[{who:`ollie`,dx:0,dy:1,face:`down`},{who:`player`,dx:-2,dy:0,face:`right`}],steps:[{narrate:`You find Ollie sitting on an upturned crate at the edge of the sand, looking out at the water. He isn't telling a story. He isn't saying anything.`},{move:`player`,dx:-1,dy:1},{say:`ollie`,text:`Evening, matey. Don't mind me. Just waiting on Doris. She's late tonight.`},{say:`ollie`,text:`Want to know a secret? I've never properly seen her. Not her face. Only once, a great shape in the water.`},{say:`ollie`,text:`The night the Salty Biscuit went down. Big storm, out past the rocks. Me in the sea with my boots full and no shore in sight.`},{say:`ollie`,text:`Then something came up under me. Something big and smooth. Pushed me, steady as you like, all the way in to this beach.`},{wait:1},{say:`ollie`,text:`Folk say it was a log. Logs don't swim against the tide, I says. So I named her Doris, and I come down here to say goodnight.`},{choice:`Ollie glances at you, then back at the sea.`,who:`ollie`,options:[{label:`Wave to the sea`,points:60,mood:`happy`,reply:`Ha! You did it! That's manners, that is. She notices manners, Doris. ...Thank you, matey.`},{label:`I believe you`,points:40,reply:`...Do you? Well. That's two of us, then. And Doris makes three.`},{label:`It was probably a log`,points:-20,reply:`Aye. Maybe. ...I'll say goodnight to it all the same.`}]},{say:`ollie`,text:`Goodnight, Doris. Goodnight, old Biscuit. ...Right. Back to the pier. The squid won't catch themselves.`},{emote:`note`,who:`ollie`}]},{id:`ollie-6`,npc:`ollie`,hearts:6,place:`beach_pier`,from:17,to:22,weather:`dry`,cast:[{who:`ollie`,dx:0,dy:1,face:`up`},{who:`player`,dx:0,dy:-2,face:`down`}],steps:[{say:`ollie`,text:`Ahoy! Come here, come here. Mind the loose plank. No, the other loose plank. Stand right there. There!`},{move:`player`,dx:0,dy:0},{narrate:`Beside you, a pier post has been painted bright blue. On it, in careful white letters: RESERVED. BEST SPOT. FOR MY FRIEND THE FARMER.`},{say:`ollie`,text:`Best spot on the pier. Forty years it's been mine. The fish here bite like they owe you money. It's yours now.`},{say:`ollie`,text:`Your grandad stood right there once. Caught a boot. Proudest I ever saw the man.`},{say:`ollie`,text:`And while I'm giving things away. That tuna I wrestled, the size of a rowboat?`},{wait:.8},{say:`ollie`,text:`It was a herring, matey. A big one. Very cross. But a herring. You can know that. Pip can't. Bram suspects.`},{choice:`Ollie looks a bit sheepish.`,who:`ollie`,options:[{label:`Tell me about Doris again`,points:60,mood:`happy`,reply:`Ha! You want the stories, even knowing? Well, blow me down. Sit. It was a dark and stormy night...`},{label:`Your secret's safe`,points:40,reply:`Knew it would be. You're a good egg. A sensible egg. Rare thing on this beach.`},{label:`So it's all made up?`,points:-30,reply:`...Not all of it. The important bits are true. You just have to know which bits.`}]},{face:`ollie`,dir:`down`},{say:`ollie`,text:`Sixty years on the water, and I've never had a friend in my spot. Feels right. Feels just right.`},{emote:`heart`,who:`ollie`}]},{id:`marigold-2`,npc:`marigold`,hearts:2,place:`town_saloon`,from:12,to:18,cast:[{who:`marigold`,dx:0,dy:0,face:`down`},{who:`player`,dx:1,dy:2,face:`up`}],steps:[{say:`marigold`,text:`Ah. The farmer. Perfect. You have a mouth and, I assume, opinions. Come here.`},{move:`player`,dx:1,dy:1},{narrate:`She hands you a spoon and a small steaming bowl of something orange.`},{say:`marigold`,text:`New soup. Taste it. Ollie said it was 'like a hug from the sea', which isn't a review. It's a threat.`},{narrate:`You taste it. It's warm and good, but something's missing. It's a little flat.`},{emote:`question`,who:`marigold`},{say:`marigold`,text:`Well? Don't be polite. Polite is no use to me. This town would eat a boot if I put gravy on it.`},{choice:`What do you tell Marigold?`,who:`marigold`,options:[{label:`It needs a bit of salt`,points:50,mood:`happy`,reply:`...An honest palate. Do you know how rare that is in Fernbrook? Salt. Of course. You can stay.`},{label:`It's perfect`,points:10,reply:`Flattery. Charming, and completely useless to me. Try again next time, darling.`},{label:`I don't really like soup`,points:-30,reply:`Then we have nothing in common, and I'll keep you in my thoughts.`}]},{say:`marigold`,text:`Saloon's open till midnight. Come for supper. Leave before Ollie starts a story. You've been warned.`}]},{id:`marigold-4`,npc:`marigold`,hearts:4,place:`town_fountain`,from:7,to:11,weather:`dry`,cast:[{who:`marigold`,dx:0,dy:0,face:`up`},{who:`player`,dx:2,dy:1,face:`left`}],steps:[{narrate:`You find Marigold by the fountain in a plain coat, no earrings, hair pinned up any old way. She's turning a coin over in her fingers.`},{emote:`alert`,who:`marigold`},{face:`marigold`,dir:`right`},{say:`marigold`,text:`Oh, it's you. Good. You don't count. I mean that kindly. Hazel would tell the whole town I own a dull coat.`},{say:`marigold`,text:`Every morning I flip this. Heads, I stay another day. Tails, I pack my bags and catch the coach back to the city.`},{narrate:`She flips it for you. It spins, flashes, and lands in her palm. Heads.`},{say:`marigold`,text:`Heads. Twelve years of heads. Remarkable luck, isn't it?`},{wait:.8},{narrate:`Then she turns the coin over and shows you. The other side is heads too.`},{say:`marigold`,text:`Had it made the week I arrived. A city girl can't just decide to stay somewhere. She has to be told. By a coin, if necessary.`},{choice:`Marigold tucks the coin away.`,who:`marigold`,options:[{label:`You always wanted to stay`,points:60,mood:`happy`,reply:`...Clever farmer. Yes. From the first bowl of soup. Don't tell Hazel. She'll be insufferable about it.`},{label:`Can I flip it?`,points:20,reply:`Go on, then. ...Heads. What a surprise. The town's stuck with me another day.`},{label:`Isn't that cheating?`,points:-20,reply:`Darling, cheating needs a loser. Who lost? The city? It has plenty of people.`}]},{say:`marigold`,text:`Now shoo, before anyone sees me in this coat. I open at noon, and by then I'll be dazzling.`},{move:`marigold`,dx:-3,dy:-1}]},{id:`marigold-6`,npc:`marigold`,hearts:6,place:`town_minelane`,from:21,to:24,weather:`dry`,cast:[{who:`marigold`,dx:0,dy:0,face:`up`},{who:`player`,dx:0,dy:2,face:`up`}],steps:[{narrate:`You find Marigold at the bottom of the mine lane, arms folded tight, staring up at the dark entrance as if it might come down after her.`},{face:`marigold`,dir:`down`},{say:`marigold`,text:`Darling. Don't look at me like that. I'm simply standing near a mine. At night. Being enormously brave.`},{say:`marigold`,text:`I left a sign on the saloon door. 'Back in five minutes. Possibly never.' The soup will cope.`},{say:`marigold`,text:`The truth? I'm terrified of it. Dark, tight, no back door. Twelve years here and I've never once walked up this lane.`},{say:`marigold`,text:`And now you go down there with a pickaxe and a sandwich, and I stand behind the bar pretending not to count the hours.`},{say:`marigold`,text:`Walk up with me? Just to the top. I'd like to see it once, with someone sensible.`},{move:`marigold`,dx:0,dy:-3},{move:`player`,dx:0,dy:-2},{narrate:`You walk her up the lane until you can see the old timbers round the entrance. She looks into the dark a long moment, then lets out a breath.`},{choice:`Marigold squeezes your arm.`,who:`marigold`,options:[{label:`I'll come by after each trip`,points:60,mood:`happy`,reply:`...Will you? Every time? Then I'll keep the soup hot and pretend I wasn't watching the door. That's a deal.`},{label:`Come down with me once?`,points:10,reply:`Darling, no. Absolutely not. Ask me again in ten years. ...Do ask, though.`},{label:`It's not that scary`,points:-20,reply:`Lovely. Say that again with a bat in your hair.`}]},{say:`marigold`,text:`You're the first person I've told. If it gets around, I'll know it was you. I always know.`},{emote:`heart`,who:`marigold`}]},{id:`wren-2`,npc:`wren`,hearts:2,place:`town_ranch`,from:9,to:16,weather:`dry`,cast:[{who:`wren`,dx:0,dy:0,face:`down`},{who:`player`,dx:-2,dy:1,face:`right`}],steps:[{narrate:`You find Wren crouched outside the ranch, talking to a speckled hen. She's saying more than you've ever heard her say.`},{say:`wren`,text:`...and the new farmer has kind eyes, I think. I can't tell, because I can't look at them. That's my problem, Clover. Not theirs.`},{say:`wren`,text:`So next time I'll say good morning. Two words. You'll see. I can do two words.`},{face:`wren`,dir:`left`},{emote:`alert`,who:`wren`},{wait:.6},{say:`wren`,text:`...Oh. You heard all that.`},{say:`wren`,text:`This is Clover. My oldest hen. She's a very good listener. She only pecks when she agrees.`},{choice:`Clover eyes your boots.`,who:`wren`,options:[{label:`Say hello to Clover`,points:50,mood:`happy`,reply:`She pecked your boot. That means yes. She likes you. ...She pecks me constantly.`},{label:`What else did you say?`,points:10,reply:`Nothing! Only... about your boots. They're good boots. I'm going to stop talking now.`},{label:`You talk to chickens?`,points:-20,reply:`...Yes. They listen. Not everyone does.`}]},{say:`wren`,text:`Good morning. ...I know it isn't morning. I practised that one.`}]},{id:`wren-4`,npc:`wren`,hearts:4,place:`town_brook`,from:16,to:19,weather:`dry`,cast:[{who:`wren`,dx:0,dy:0,face:`down`},{who:`pip`,dx:1,dy:0,face:`down`},{who:`player`,dx:-2,dy:-1,face:`right`}],steps:[{narrate:`You find Wren and Pip crouched at the edge of the brook, very still, watching a heron stand in the shallows on one leg.`},{say:`pip`,text:`Wren knows every bird! That's a heron. Herons eat frogs. I've decided to forgive him. He doesn't know better.`},{say:`wren`,text:`He's an old one. He comes every evening, same time. Like me.`},{emote:`alert`,who:`pip`},{say:`pip`,text:`Oh! Aunt Hazel said supper's at six and it's... is it six? I think it's after six. BYE!`},{move:`pip`,dx:3,dy:-2},{say:`wren`,text:`I was like Pip, when I was small. Always out here. My mum could never get me in for supper.`},{say:`wren`,text:`Can I tell you something? When the whole town gets together, I hide. Last time I spent the evening in the barn with Buttercup.`},{say:`wren`,text:`I want to be there. I do. It's all the faces at once. My words go somewhere and I can't find them.`},{choice:`Wren watches the heron.`,who:`wren`,options:[{label:`Stand with me, then`,points:60,mood:`happy`,reply:`...You'd do that? Stand with me? ...Then maybe. Maybe I'll come out of the barn.`},{label:`Bring Buttercup along`,points:30,reply:`She'd eat the decorations. ...It would help, though. You're funny. I didn't know that.`},{label:`Just stay home, then`,points:-20,reply:`Oh. Yes. I suppose that's easier. ...It usually is.`}]},{narrate:`You watch the heron spear something silver from the water, gulp, and flap off downstream. Wren watches it until it's gone.`},{say:`wren`,text:`Thank you. For sitting with me. You don't make me say things faster than I can.`}]},{id:`wren-6`,npc:`wren`,hearts:6,place:`farm_brook`,from:6,to:9,weather:`dry`,cast:[{who:`wren`,dx:0,dy:0,face:`down`},{who:`player`,dx:-1,dy:-2,face:`down`}],steps:[{narrate:`Mist hangs low over the Fern Brook. You find Wren standing on the bank in her boots, hands in her pockets, watching the water.`},{face:`wren`,dir:`up`},{say:`wren`,text:`Oh. Good morning. ...Sorry. I should have asked. I come here sometimes. Early, before the ranch.`},{say:`wren`,text:`Your grandmother used to walk Rosie down to this brook every morning. I'd run along behind with an apple in each hand.`},{say:`wren`,text:`She let me feed her. Rosie, I mean. Your grandmother said I had a way with animals. Nobody ever said I had a way with anything.`},{say:`wren`,text:`That's why I wanted a ranch. I've never told anyone that. Not even Buttercup.`},{wait:.8},{say:`wren`,text:`Buttercup's grandmother was Rosie, you know. Your grandmother gave my mum Rosie's last calf. So we're sort of family. Cow family.`},{move:`wren`,dx:-1,dy:-1},{say:`wren`,text:`Would it be all right if I kept coming? Mornings, sometimes. I'd be quiet. I'm very good at quiet.`},{choice:`Wren waits, not quite looking at you.`,who:`wren`,options:[{label:`Come whenever you like`,points:60,mood:`happy`,reply:`...Thank you. I'll bring an apple. For no one. Just in case.`},{label:`Bring Buttercup next time`,points:40,mood:`happy`,reply:`She'd love that. She'd eat your crops. ...I'll bring her anyway.`},{label:`I'm usually busy early`,points:-20,reply:`Oh. Of course. Sorry. I'll... sorry.`}]},{emote:`heart`,who:`wren`}]},{id:`thistle-2`,npc:`thistle`,hearts:2,place:`town_hall`,from:9,to:12,cast:[{who:`thistle`,dx:0,dy:0,face:`up`},{who:`player`,dx:1,dy:2,face:`up`}],steps:[{narrate:`You find Mayor Thistle before the community hall, one hand on his waistcoat, addressing the empty steps with tremendous feeling.`},{say:`thistle`,text:`...and so, my fellow Fernbrookians, as I said in part one, and shall say again in part nine...`},{emote:`alert`,who:`thistle`},{face:`thistle`,dir:`down`},{say:`thistle`,text:`Ahem! An audience! I was merely rehearsing my annual harvest address. It's coming along beautifully. I'm on page sixty.`},{say:`thistle`,text:`Tell me honestly, as a citizen. Is two hours too long? Bram says yes, but Bram thinks 'hello' is too long.`},{choice:`Is two hours too long?`,who:`thistle`,options:[{label:`Keep it short and true`,points:50,reply:`Short and true. Hm! How radical. ...Someone used to tell me exactly that, you know. I shall consider it. At length.`},{label:`It sounds wonderful`,points:20,mood:`happy`,reply:`You have impeccable taste! ...You're being kind, aren't you. That's all right. I like kind.`},{label:`Nobody will listen`,points:-30,reply:`Ah. Well. They didn't last year either. But I do like to give them the chance.`}]},{say:`thistle`,text:`Splendid! Back to it, then. Ahem! Part two: the brook. Its history, its fishes, its mud...`},{face:`thistle`,dir:`up`}]},{id:`thistle-4`,npc:`thistle`,hearts:4,place:`town_fountain`,from:12,to:15,cast:[{who:`thistle`,dx:0,dy:0,face:`right`},{who:`player`,dx:3,dy:0,face:`left`}],steps:[{narrate:`You find Thistle by the fountain with a sandwich he hasn't touched. In his other hand is an old envelope, soft at the corners.`},{say:`thistle`,text:`Ah! Farmer. Do sit. I was just reviewing correspondence. Mayoral business. Very official.`},{move:`player`,dx:1,dy:0},{say:`thistle`,text:`...No. That isn't true, and a mayor shouldn't tell fibs beside a fountain. The wishes get muddled.`},{say:`thistle`,text:`My wife wrote all my speeches, you know. The good bits were hers. The long bits were mine.`},{say:`thistle`,text:`Before she passed, she wrote me one last speech. She sealed it, and on the front she wrote: 'For when you really need it.'`},{say:`thistle`,text:`Ten years. I've never opened it. Every bad day I think, is this the day? And every time I think: not yet. It might get worse.`},{wait:1},{choice:`Thistle turns the envelope over in his hands.`,who:`thistle`,options:[{label:`Save it for a good day`,points:60,mood:`happy`,reply:`...A good day. Not the worst one. Oh. Oh, she'd like that much better, wouldn't she? Yes. A good day.`},{label:`Open it now`,points:10,reply:`Now? Here? Over a cheese sandwich? Good heavens, no. ...But thank you. Somebody ought to push me now and then.`},{label:`It's probably a list`,points:-20,reply:`A list? ...Well. She did love a list. No. No, I don't think so.`}]},{say:`thistle`,text:`Thank you, my friend. I haven't shown this to a soul. Not even Hazel, and Hazel finds out everything.`},{emote:`heart`,who:`thistle`}]},{id:`thistle-6`,npc:`thistle`,hearts:6,place:`farm_field`,from:15,to:18,weather:`dry`,cast:[{who:`thistle`,dx:0,dy:0,face:`down`},{who:`player`,dx:0,dy:2,face:`up`}],steps:[{say:`thistle`,text:`Ah! There you are. I was walking past your farm. I always do, on my low days. The rows cheer me right up.`},{say:`thistle`,text:`But today isn't a low day. I woke up and thought: what a town. What a year. What a friend I've got on that farm.`},{say:`thistle`,text:`And then I thought: Thistle, you old fool. This is it. A good day. So I brought it.`},{narrate:`He holds up an old envelope, soft at the corners. On the front, in a woman's hand: 'For when you really need it.'`},{say:`thistle`,text:`My late wife's last speech. Ten years sealed. I'd like to open it here, with you, if you'll allow an old man his moment.`},{narrate:`You watch him break the seal, unfold a single page and read it. Then he reads it again. Then he laughs, a big surprised honk of a laugh.`},{say:`thistle`,text:`It says: 'Keep it short, love. Then sit down and let them love you.' That's all. Ten years, and that's all!`,mood:`happy`},{wait:1},{say:`thistle`,text:`Short and true. She always said so. I never listened. ...I think I might start now.`},{choice:`Thistle tucks the page into his waistcoat.`,who:`thistle`,options:[{label:`Sit down, then`,points:60,mood:`happy`,reply:`Ha! Right here? In a field? ...Why not. Mayors may sit in fields. I shall make it law.`},{label:`She knew you well`,points:40,reply:`She did. Better than I knew myself. I suspect you're getting there too.`},{label:`Ten years for that?`,points:-20,reply:`...Yes. For that. It's rather perfect, actually. You'll see, one day.`}]},{say:`thistle`,text:`Thank you, my dear friend. There. That's my speech. Short. Very short. ...I may need to sit down for a bit.`},{emote:`heart`,who:`thistle`}]},{id:`pip-2`,npc:`pip`,hearts:2,place:`town_brook`,from:12,to:16,weather:`dry`,cast:[{who:`pip`,dx:0,dy:0,face:`down`},{who:`player`,dx:2,dy:-1,face:`left`}],steps:[{say:`pip`,text:`SHHH! Don't move! Don't breathe! Okay, you can breathe. Just quietly.`},{move:`player`,dx:1,dy:0},{say:`pip`,text:`King Ribbit lives right there under the big lily pad. He only comes out for people he likes. Or for flies.`},{wait:1.5},{narrate:`Nothing happens. Then the lily pad lifts, and the biggest frog you have ever seen hauls himself out onto a stone.`},{emote:`alert`,who:`pip`},{say:`pip`,text:`THAT'S HIM! That's King Ribbit! Look at his chin! Look how BIG his chin is!`,mood:`happy`},{narrate:`King Ribbit looks at you. You look at King Ribbit. He blinks, slowly, like a king.`},{choice:`Pip is vibrating with excitement.`,who:`pip`,options:[{label:`He's magnificent`,points:50,mood:`happy`,reply:`I KNOW! He's the best frog in Fernbrook. Maybe in the whole world. I haven't checked the world.`},{label:`Can I hold him?`,points:20,reply:`NO. ...Not yet. He has to decide about you first. That's the rules. I made the rules.`},{label:`It's just a big frog`,points:-30,reply:`JUST a frog?! He's a KING! Say sorry! ...Not to me. To him.`}]},{narrate:`With a plop, King Ribbit slides back into the brook. You could swear he nodded to you first.`},{say:`pip`,text:`He blinked at you. That's really good. It took him a whole week to blink at me.`}]},{id:`pip-4`,npc:`pip`,hearts:4,place:`town_pip`,from:16,to:19,cast:[{who:`pip`,dx:0,dy:0,face:`down`},{who:`player`,dx:0,dy:2,face:`up`}],steps:[{narrate:`You find Pip sitting on the cottage step with an empty jar in both hands. The lid has air holes punched in it.`},{say:`pip`,text:`Oh. Hi. I'm not doing anything. I'm just sitting.`},{say:`pip`,text:`...Okay, I'm catching a frog for my window. For tonight. To keep watch.`},{say:`pip`,text:`Don't tell Aunt Hazel, okay? Sometimes at night it gets really dark and really big, and the house makes noises.`},{say:`pip`,text:`Mum used to sing me the frog song. Before she went on the boat. Aunt Hazel doesn't know it, and I don't want to make her sad.`},{wait:.8},{choice:`Pip squeezes the jar.`,who:`pip`,options:[{label:`Teach me the frog song`,points:60,mood:`happy`,reply:`Really? Okay! It's mostly ribbits. In a special order. Ribbit, ribbit, riiibit... You have to do the low part.`},{label:`Everyone gets scared`,points:40,reply:`Even you? Even BRAM? ...Bram's scared of Aunt Hazel's soup going cold. I've seen it.`},{label:`Scared? Of the dark?`,points:-20,reply:`...No. Forget it. I'm not scared of anything.`}]},{say:`pip`,text:`I'm gonna go in now. Aunt Hazel says it's soup. It's always soup.`},{emote:`note`,who:`pip`}]},{id:`pip-6`,npc:`pip`,hearts:6,place:`farm_pond`,from:10,to:16,weather:`dry`,cast:[{who:`pip`,dx:0,dy:0,face:`right`},{who:`player`,dx:2,dy:-1,face:`left`}],steps:[{say:`pip`,text:`FARMER! You're here! Good! I've been waiting FOREVER. Like, ten minutes! Aunt Hazel says I have to be back for supper.`},{narrate:`Pip holds up a jar to show you, very carefully, with both hands. Inside, a small green frog sits with great dignity.`},{say:`pip`,text:`This is King Ribbit's son. He's a prince. Prince Ribbit. He's big enough now to have his own kingdom.`},{say:`pip`,text:`I looked at every pond in Fernbrook. Every single one. Yours is the best. It has good mud and you're nice to it.`},{say:`pip`,text:`So I picked you. To look after him. That's the most important job there is. More important than mayor.`},{face:`pip`,dir:`down`},{narrate:`Pip kneels at the water's edge and tips the jar. The prince plops into your pond, swims a little circle, and pops up to blink at you.`},{emote:`heart`,who:`pip`},{say:`pip`,text:`He blinked at you! Already! It took his dad a whole week!`,mood:`happy`},{choice:`Pip looks up at you, very serious.`,who:`pip`,options:[{label:`What's his middle name?`,points:60,mood:`happy`,reply:`Your name! His middle name is YOUR name! I decided ages ago. It's the most important thing I can do.`},{label:`I'll look after him`,points:50,reply:`Promise? Pinky promise? ...Okay. I'll come and check on him. Every day. Okay, most days.`},{label:`Will he eat my crops?`,points:-20,reply:`NO! Frogs eat BUGS. Bugs eat crops. He's on your side! Honestly. Grown-ups.`}]},{say:`pip`,text:`You're my best friend. Well, you and King Ribbit. And now Prince Ribbit. It's a three-way tie.`}]}],hp={farm_porch:{map:`farm`,x:6,y:8},farm_field:{map:`farm`,x:17,y:16},farm_pond:{map:`farm`,x:34,y:12},farm_brook:{map:`farm`,x:22,y:29},town_store:{map:`town`,x:13,y:14},town_smithy:{map:`town`,x:34,y:14},town_carpenter:{map:`town`,x:42,y:14},town_saloon:{map:`town`,x:22,y:14},town_ranch:{map:`town`,x:50,y:14},town_plaza:{map:`town`,x:25,y:18},town_fountain:{map:`town`,x:27,y:23},town_hall:{map:`town`,x:27,y:31},town_brook:{map:`town`,x:10,y:28},town_pip:{map:`town`,x:10,y:24},town_minelane:{map:`town`,x:28,y:7},beach_shore:{map:`beach`,x:20,y:12},beach_pier:{map:`beach`,x:29,y:17},beach_shack:{map:`beach`,x:33,y:11}},gp={down:X.Down,up:X.Up,right:X.Right,left:X.Left};function _p(e,t){let n=e.state,r=n.minutes/60;for(let e of t){if(n.seenScenes.includes(e.id)||hp[e.place].map!==n.map||r<e.from||r>=e.to||e.weather===`wet`&&!xc(n.weather)||e.weather===`dry`&&xc(n.weather))continue;let t=n.friends[e.npc];if(!(!t?.met||cp(t.points)<e.hearts)&&n.sceneDay!==n.day)return e}return null}function vp(e,t,n,r=new Set){let i=e.map.width;for(let a=0;a<6;a++)for(let o=-a;o<=a;o++)for(let s=-a;s<=a;s++){if(Math.max(Math.abs(s),Math.abs(o))!==a)continue;let c=t+s,l=n+o;if(e.map.inBounds(c,l)&&e.walkable(c,l)&&!e.map.warpAt(c,l)&&!r.has(l*i+c))return[c,l]}return[t,n]}function yp(e,t){let n=e.state,r=hp[t.place];n.seenScenes.push(t.id),n.sceneDay=n.day,e.fishing.reset();let i=new Set,a=new Map;for(let n of t.cast){let[t,o]=vp(e,r.x+n.dx,r.y+n.dy,i);i.add(o*e.map.width+t),a.set(n.who,[t,o]),bp(e,n.who,t*16+8,o*16+12,gp[n.face])}return a}function bp(e,t,n,r,i){let a=e.state;if(t===`player`){a.playerX=n,a.playerY=r+2,a.facing=i;return}let o=a.npcs[t];o&&(o.map=a.map,o.px=n,o.py=r,o.facing=i,o.path=[])}function xp(e,t){if(t===`player`)return[e.state.playerX,e.state.playerY-2];let n=e.state.npcs[t];return[n.px,n.py]}function Sp(e,t,n){let r=e.state.friends[t];r&&(r.points=Math.max(0,Math.min(2500,r.points+n)))}var Cp=[`farming`,`fishing`,`foraging`,`mining`,`combat`],wp={farming:`Farming`,fishing:`Fishing`,foraging:`Foraging`,mining:`Mining`,combat:`Combat`};function Tp(e){let t=0;for(let n of G.xpLevels)e>=n&&t++;return t}function Ep(e){let t=Tp(e);if(t>=10)return{level:t,into:1,span:1};let n=t===0?0:G.xpLevels[t-1],r=G.xpLevels[t];return{level:t,into:e-n,span:r-n}}var Dp={farming:`Better crop quality; from level 5 the hoe and can cost 1 energy.`,fishing:`A bigger catch bar (+8 per level).`,foraging:`From level 3 trees give more wood; from level 5, a chance of double forage.`,mining:`From level 5, an extra ore from every node.`,combat:`+5 maximum health per level.`};function Op(e){return Math.round(16*Math.log(.018*e+1))}function kp(e,t,n,r=!1){let i=n*e.map.width+t;return!e.map.tillable(t,n)||e.mapState.soil[i]||e.mapState.objects[i]||e.mapState.floors[i]||!r&&!e.spend(e.toolEnergy(`farming`))?!1:(e.mapState.soil[i]={watered:xc(e.state.weather),crop:null},e.emit(`tilled`,t,n),!0)}function Ap(e,t,n,r=!1){let i=e.soilAt(t,n);return i?e.state.canWater<=0?(e.deny(`Your watering can is empty. Refill it at the pond or the brook.`),!1):!r&&!e.spend(e.toolEnergy(`farming`))?!1:(e.state.canWater--,i.watered=!0,e.state.minutes>=1200&&(i.night=!0),e.emit(`watered`,t,n),!0):!1}function jp(e,t,n,r,i=!1){let a=e.soilAt(t,n);if(!a)return i&&e.map.tillable(t,n)&&e.deny(`Seeds need tilled soil. Use the hoe first.`),!1;if(a.crop)return!1;let o=ku(r);return o?o.quirk===`pond`||o.quirk===`dark`?(i&&e.deny(o.quirk===`pond`?`Lily bulbs go in pond water, not soil.`:`Glowcap spores want the dark: the cave room in the mine.`),!1):!e.indoorsGrowing&&!o.seasons.includes(Pc(e.state.day))?(i&&e.deny(`${J(r).name} won't grow in ${Pc(e.state.day)}.`),!1):!0:!1}function Mp(e,t,n,r){if(!jp(e,t,n,r,!0))return!1;let i=e.soilAt(t,n),a=ku(r);return e.backpack.takeFrom(e.state.selected,1),i.crop={id:a.id,growth:0,harvests:0},i.fert===`speed`&&(i.crop.days=Mu(a)),e.emit(`planted`,t,n,r),!0}function Np(e,t,n,r){let i=e.soilAt(t,n);return i?i.fert?(e.deny(`This soil is already fertilized.`),!1):i.crop&&i.crop.growth>0?(e.deny(`Too late: fertilize before the seed sprouts.`),!1):(i.fert=r===`SpeedGro`?`speed`:`basic`,i.fert===`speed`&&i.crop&&(i.crop.days=Mu(Ou(i.crop.id))),e.backpack.takeFrom(e.state.selected,1),e.emit(`fertilized`,t,n,r),!0):(e.deny(`Fertilizer goes on tilled soil.`),!1)}function Pp(e,t,n){let r=e.soilAt(t,n);return r?.crop?.dead?(r.crop=null,e.emit(`cut`,t,n),!0):!1}function Fp(e,t){let n=e.level(`farming`)+e.buff(`farming`),r=n/10*.2+.2*!!t*((n+2)/12)+.01,i=Math.min(.75,r*2),a=e.rng.next();return a<r?2:+(a<i)}function Ip(e,t,n){let r=e.soilAt(t,n),i=r.crop,a=Ou(i.id),o=a.yield+ +!!e.rng.chance(a.extraChance),s=Fp(e,r.fert===`basic`);return e.backpack.spaceFor(a.produce,{quality:s})<o?(e.deny(`Your backpack is full.`),{kind:`none`,text:``}):(e.backpack.add(a.produce,o,{quality:s}),a.regrowDays>0?(i.growth=Au(i)-a.regrowDays,i.harvests++):r.crop=null,e.state.stats.cropsHarvested+=o,e.addXp(`farming`,Op(J(a.produce).sellPrice)*Math.max(1,o-1)),e.emit(`harvested`,t,n,a.produce,o,``,s),{kind:`harvested`,text:``})}function Lp(e,t,n,r,i){let a=[],o=e.state.maps[t].soil,s=0;for(let[a,c]of Object.entries(o))c.watered&&c.crop&&!c.crop.dead&&!ju(c.crop)&&$u(e,Ou(c.crop.id),t,Number(a),!!c.night)&&c.crop.growth++,c.watered=!1,c.night=!1,!i&&r&&c.crop&&!c.crop.dead&&!Ou(c.crop.id).seasons.includes(n)&&!nd(e,c.warm)&&(c.crop.dead=!0,s++);return s>0&&a.push(`${s} crop${s>1?`s`:``} withered as the season changed.`),a}function Rp(e,t,n){let r=e.state.maps[t];if(n&&xc(e.state.weather))for(let e of Object.values(r.soil))e.watered=!0;let i=e.mapWidth(t);for(let e in r.objects){let t=r.objects[e];if(t.t!==`placed`||t.item!==`Sprinkler`&&t.item!==`QualitySprinkler`)continue;let n=Number(e)%i,a=Math.floor(Number(e)/i),o=t.item===`Sprinkler`?[[0,-1],[1,0],[0,1],[-1,0]]:[[-1,-1],[0,-1],[1,-1],[-1,0],[1,0],[-1,1],[0,1],[1,1]];for(let[e,t]of o){let o=r.soil[(a+t)*i+(n+e)];o&&(o.watered=!0)}}}function zp(e){let t=e.state.maps.farm,n=e.map.width,r=[];for(let e in t.objects){let i=t.objects[e];i.t===`placed`&&i.item===`Scarecrow`&&r.push([Number(e)%n,Math.floor(Number(e)/n)])}let i=e.mapById(`farm`);for(let e=0;e<i.height;e++)for(let t=0;t<i.width;t++)i.featureAt(t,e)===Y.Scarecrow&&r.push([t,e]);let a=G.scarecrowRadius,o=Object.keys(t.soil).filter(e=>{let i=t.soil[Number(e)];if(!i.crop||i.crop.dead)return!1;let o=Number(e)%n,s=Math.floor(Number(e)/n);return!r.some(([e,t])=>(e-o)**2+(t-s)**2<=a*a)});if(o.length<G.crowMinCrops||!e.rng.chance(G.crowChance))return[];let s=Number(o[e.rng.int(0,o.length)]),c=Ou(t.soil[s].crop.id).produce;return t.soil[s].crop=null,e.state.crowAte=s,[`A crow ate one of your ${J(c).name.toLowerCase()} crops. Scarecrows keep them away.`]}var Bp=class{fish;rng;barPos;barSpeed=0;barHeight;fishPos;progress=G.progressStart;fishInBar=!1;ticks=0;treasurePos=null;treasureProgress=0;treasureCaught=!1;perfect=!0;treasureAt;fishSpeed=0;fishTarget;sinkFloat=0;pending=0;constructor(e,t,n=0,r=!1){this.fish=e,this.rng=t,this.barHeight=G.catchBarHeight+n,this.barPos=G.channelHeight-this.barHeight,this.treasureAt=r?t.int(60,150):-1,this.fishPos=G.fishSpace-100,this.fishTarget=t.range(G.fishSpace*.15,G.fishSpace*.55)}get done(){return this.progress<=0||this.progress>=1}get caught(){return this.progress>=1}update(e,t){this.pending+=e;let n=1/G.minigameTickRate;for(;this.pending>=n&&!this.done;)this.pending-=n,this.tick(t)}tick(e){if(this.done)return;this.ticks++,this.moveFish(),this.moveBar(e);let t=this.barPos,n=this.barPos+this.barHeight;if(this.fishInBar=this.fishPos+G.fishHeight*.75>=t&&this.fishPos+G.fishHeight*.25<=n,!this.fishInBar&&this.ticks>30&&(this.perfect=!1),this.progress+=this.fishInBar?G.progressGain:-G.progressLoss,this.ticks===this.treasureAt&&(this.treasurePos=this.rng.range(40,G.fishSpace-60)),this.treasurePos!==null&&!this.treasureCaught){let e=this.treasurePos+8>=t&&this.treasurePos+8<=n;this.treasureProgress=Math.max(0,this.treasureProgress+(e?.0135:-.01)),this.treasureProgress>=1&&(this.treasureCaught=!0)}this.progress=Math.min(1,Math.max(0,this.progress))}moveFish(){let e=this.rng,t=this.fish.difficulty,n=this.fish.motion===`smooth`;if(e.next()<t*(n?20:1)/4e3&&(!n||this.fishTarget<0)){let n=G.fishSpace-this.fishPos,r=this.fishPos,i=Math.min(99,t+e.int(10,45))/100;this.fishTarget=this.fishPos+e.int(Math.trunc(Math.min(-r,n)),Math.trunc(n))*i}if(this.fish.motion===`floater`?this.sinkFloat=Math.max(this.sinkFloat-.01,-1.5):this.fish.motion===`sinker`&&(this.sinkFloat=Math.min(this.sinkFloat+.01,1.5)),Math.abs(this.fishPos-this.fishTarget)>3&&this.fishTarget>=0){let n=(this.fishTarget-this.fishPos)/(e.int(10,30)+(100-Math.min(100,t)));this.fishSpeed+=(n-this.fishSpeed)/5}else this.fishTarget=!n&&e.next()<t/2e3?this.fishPos+(e.chance(.5)?e.int(-100,-51):e.int(50,101)):-1;if(this.fish.motion===`dart`&&e.next()<t/1e3){let n=Math.trunc(t)*2;this.fishTarget=this.fishPos+(e.chance(.5)?e.int(-100-n,-51):e.int(50,101+n))}this.fishTarget=Math.min(G.fishSpace,Math.max(-1,this.fishTarget)),this.fishPos=Math.min(G.fishSpace-G.fishHeight,Math.max(0,this.fishPos+this.fishSpeed+this.sinkFloat))}moveBar(e){let t=e?-G.catchBarGravity:G.catchBarGravity,n=G.channelHeight-this.barHeight;e&&(this.barPos<=0||this.barPos>=n)&&(this.barSpeed=0),this.fishInBar&&(t*=G.fishInBarDamping),this.barSpeed+=t,this.barPos+=this.barSpeed,this.barPos>n?(this.barPos=n,this.barSpeed=-this.barSpeed*2/3,Math.abs(this.barSpeed)<.5&&(this.barSpeed=0)):this.barPos<0&&(this.barPos=0,this.barSpeed=-this.barSpeed*2/3)}},Vp=class{phase=`none`;timer=0;power=0;powerRising=!0;bobberX=0;bobberY=0;water=`none`;minigame=null;fish=null;catch=null;size=0;quality=0;newRecord=!1;treasure=[];baited=!1;biteAt=0;nextNibble=0;get active(){return this.phase!==`none`}reset(){this.phase=`none`,this.timer=0,this.power=0,this.powerRising=!0,this.minigame=null,this.fish=null,this.catch=null,this.size=0,this.quality=0,this.newRecord=!1,this.treasure=[],this.baited=!1}};function Hp(e){let t=Yc(e.heldItem);return t?.type===`rod`?t.tier:-1}function Up(e){let t=e.fishing;return t.active||Hp(e)<0?!1:e.backpack.isFull()?(e.deny(`Your backpack is full. Ship or eat something first.`),!1):e.state.energy<G.castEnergy?(e.deny(`You're too tired. Time to get some sleep.`),!1):(t.reset(),t.baited=Hp(e)>=1&&e.backpack.count(`Bait`)>0,t.phase=`charging`,e.emit(`castStart`),!0)}function Wp(e,t,n,r){let i=e.fishing;if(i.active)switch(i.timer+=t,i.phase){case`charging`:Gp(e,t,n);break;case`flying`:i.timer>=G.castFlight&&qp(e);break;case`waiting`:Jp(e,r);break;case`biting`:r?Yp(e):i.timer>G.biteWindow&&Zp(e,`missed`,`missed`);break;case`reeling`:i.minigame.update(t,n),i.minigame.done&&(i.minigame.caught?Xp(e,i.fish.item):Zp(e,`escaped`,`escaped`,i.fish.item));break;default:(i.timer>=G.resultShowTime||r&&i.timer>.35)&&i.reset()}}function Gp(e,t,n){let r=e.fishing;if(n){let e=r.power+(r.powerRising?1:-1)*G.castChargeRate*t;e>=1?(e=1,r.powerRising=!1):e<=0&&(e=0,r.powerRising=!0),r.power=e;return}e.state.energy-=G.castEnergy;let i=G.castMinTiles+Math.round(r.power*(G.castMaxTiles-G.castMinTiles)),[a,o]=e.playerTile,[s,c]=ym(e.state.facing),l=a+s*i,u=o+c*i;for(let t=i;t>=1;t--)if(Kp(e,a+s*t,o+c*t)){l=a+s*t,u=o+c*t;break}r.bobberX=l,r.bobberY=u,r.water=Kp(e,l,u)?e.map.waterAt(l,u):`none`,r.phase=`flying`,r.timer=0,e.emit(`cast`,l,u)}function Kp(e,t,n){return e.map.fishable(t,n)&&!e.mapState.objects[n*e.map.width+t]}function qp(e){let t=e.fishing;if(t.water===`none`){Zp(e,`fizzled`,`fizzle`,null,0,`Cast into the water!`);return}t.phase=`waiting`,t.timer=0;let n=t.baited?.55:1;t.biteAt=e.rng.range(G.biteMinWait,G.biteMaxWait)*n,t.nextNibble=e.rng.range(.5,1.5),e.emit(`plop`,t.bobberX,t.bobberY)}function Jp(e,t){let n=e.fishing;if(t){n.reset(),e.emit(`reeledIn`);return}if(n.timer>=n.nextNibble&&n.timer<n.biteAt-.4&&(e.emit(`nibble`,n.bobberX,n.bobberY),n.nextNibble+=e.rng.range(.7,2)),n.timer<n.biteAt)return;let r=e.buff(`luck`);n.fish=e.rng.chance(G.junkChance*(r>0?.5:1))?null:Oc(e.rng,n.water,e.state.minutes,e.state.weather,e.season),n.catch=n.fish?.item??(e.rng.chance(.5)?`Driftwood`:`SoggyNewspaper`),n.baited&&e.backpack.remove(`Bait`,1),Zp(e,`biting`,`bite`)}function Yp(e){let t=e.fishing;if(!t.fish){Xp(e,t.catch);return}let n=8*(e.level(`fishing`)+e.buff(`fishing`))+[0,16,40][Math.max(0,Hp(e))],r=e.rng.chance(G.treasureChance+.05*e.buff(`luck`));t.minigame=new Bp(t.fish,e.rng,n,r),Zp(e,`reeling`,`hooked`,t.fish.item)}function Xp(e,t){let n=e.fishing;n.catch=t;let r=Tc(t),[i,a]=e.playerTile;if(r){let o=e.rng.next()**1.6;n.size=r.minSize+Math.round(o*(r.maxSize-r.minSize));let s=n.minigame;n.quality=Math.min(2,(o>.66?2:+(o>.33))+ +!!s?.perfect);let c=e.state.stats;c.fishCaught++,c.caught[t]=(c.caught[t]??0)+1;let l=c.biggestFish[t];if(n.newRecord=l===void 0||n.size>l,n.newRecord&&(c.biggestFish[t]=n.size),e.addXp(`fishing`,Math.round(3+r.difficulty/3)*(n.quality+1)+(s?.perfect?10:0)),s?.treasureCaught){let t=1+ +!!e.rng.chance(.4);for(let r=0;r<t;r++){let[t,r,o]=Ac[e.rng.int(0,Ac.length)],s=e.rng.int(r,o+1);e.give(t,s,i,a),n.treasure.push(t)}e.emit(`treasure`,i,a,n.treasure[0],n.treasure.length)}}else e.addXp(`fishing`,3);e.give(t,1,i,a,{quality:n.quality}),Zp(e,`caught`,`caught`,t,n.size)}function Zp(e,t,n,r=null,i=0,a=``){let o=e.fishing;o.phase=t,o.timer=0,e.emit(n,o.bobberX,o.bobberY,r,i,a,o.quality)}function Qp(e,t,n){let[r,i]=e.playerTile,[a,o]=ym(e.state.facing),s=e.fishing;s.reset();for(let t=G.castMinTiles;t<=G.castMaxTiles;t++)if(e.map.fishable(r+a*t,i+o*t)){s.bobberX=r+a*t,s.bobberY=i+o*t,s.water=e.map.waterAt(s.bobberX,s.bobberY);break}s.fish=Tc(t)??null,s.catch=t,n&&s.fish?(s.minigame=new Bp(s.fish,e.rng,8*e.level(`fishing`),!0),s.phase=`reeling`):s.phase=`biting`}var $p=(e,t,n,r)=>({id:e,count:t,ingredients:n,unlock:r}),em=[$p(`Chest`,1,[[`Wood`,50]],`start`),$p(`WoodPath`,5,[[`Wood`,1]],`start`),$p(`StonePath`,5,[[`Stone`,1]],`start`),$p(`Scarecrow`,1,[[`Wood`,50],[`Coal`,1],[`Fiber`,20]],{skill:`farming`,level:1}),$p(`BasicFertilizer`,1,[[`Sap`,2]],{skill:`farming`,level:1}),$p(`Sprinkler`,1,[[`CopperBar`,1],[`IronBar`,1]],{skill:`farming`,level:2}),$p(`MayonnaiseMachine`,1,[[`Wood`,15],[`Stone`,15],[`CopperBar`,1]],{skill:`farming`,level:2}),$p(`BeeHouse`,1,[[`Wood`,40],[`Coal`,8],[`IronBar`,1]],{skill:`farming`,level:3}),$p(`SpeedGro`,5,[[`Fiber`,5],[`Sap`,5]],{skill:`farming`,level:3}),$p(`PreservesJar`,1,[[`Wood`,50],[`Stone`,40],[`Coal`,8]],{skill:`farming`,level:4}),$p(`Keg`,1,[[`Wood`,30],[`CopperBar`,1],[`IronBar`,1]],{skill:`farming`,level:5}),$p(`QualitySprinkler`,1,[[`IronBar`,1],[`GoldBar`,1],[`Quartz`,1]],{skill:`farming`,level:6}),$p(`CheesePress`,1,[[`Wood`,45],[`Stone`,45],[`Hardwood`,10],[`CopperBar`,1]],{skill:`farming`,level:6}),$p(`Furnace`,1,[[`CopperOre`,20],[`Stone`,25]],{skill:`mining`,level:1}),$p(`Bait`,5,[[`BugMeat`,1]],{skill:`fishing`,level:2}),$p(`CrabPot`,1,[[`Wood`,40],[`IronBar`,3]],{skill:`fishing`,level:3})],tm=[$p(`FriedEgg`,1,[[`any:egg`,1]],`start`),$p(`Sashimi`,1,[[`any:fish`,1]],`start`),$p(`Salad`,1,[[`Leek`,1],[`Dandelion`,1]],`start`),$p(`Omelet`,1,[[`any:egg`,1],[`any:milk`,1]],`learned`),$p(`ParsnipSoup`,1,[[`Parsnip`,1],[`any:milk`,1]],`learned`),$p(`FishStew`,1,[[`any:fish`,2],[`Tomato`,1]],`learned`),$p(`PumpkinSoup`,1,[[`Pumpkin`,1],[`any:milk`,1]],`learned`),$p(`GlazedYams`,1,[[`Yam`,1],[`Honey`,1]],`learned`),$p(`BlueberryTart`,1,[[`Blueberry`,3],[`any:egg`,1]],`learned`),$p(`PepperPoppers`,1,[[`HotPepper`,1],[`Cheese`,1]],`learned`),$p(`CranberrySauce`,1,[[`Cranberries`,3]],`learned`),$p(`FriedMushroom`,1,[[`CommonMushroom`,2]],`learned`),$p(`CornChowder`,1,[[`Corn`,1],[`any:milk`,1]],`learned`),$p(`TomatoSalad`,1,[[`Tomato`,1],[`Leek`,1]],`learned`)];function nm(e,t){return e===`any:fish`?J(t).kind===`fish`&&![`Crab`,`Lobster`,`Shrimp`,`Crayfish`].includes(t):e===`any:egg`?t===`Egg`||t===`LargeEgg`:e===`any:milk`?t===`Milk`||t===`LargeMilk`:e===t}function rm(e){return e===`any:fish`?`Any fish`:e===`any:egg`?`Egg (any)`:e===`any:milk`?`Milk (any)`:J(e).name}function im(e){return em.find(t=>t.id===e)??tm.find(t=>t.id===e)}var am={stall:`Seed Stand`,store:`Hazel's General Store`,smithy:`Bram's Smithy`,carpenter:`Juniper's Workshop`,saloon:`The Fernbrook Saloon`,ranch:`Wren's Ranch`,fish_shop:`Ollie's Bait & Tackle`},om={hoe:[`Hoe`,`CopperHoe`,`IronHoe`,`GoldHoe`],can:[`WateringCan`,`CopperCan`,`IronCan`,`GoldCan`],axe:[`Axe`,`CopperAxe`,`IronAxe`,`GoldAxe`],pickaxe:[`Pickaxe`,`CopperPickaxe`,`IronPickaxe`,`GoldPickaxe`]},sm=[[2e3,`CopperBar`],[5e3,`IronBar`],[1e4,`GoldBar`]],cm=[[`Omelet`,300],[`ParsnipSoup`,300],[`TomatoSalad`,400],[`CornChowder`,500],[`FishStew`,600],[`PumpkinSoup`,600],[`FriedMushroom`,500],[`CranberrySauce`,400],[`GlazedYams`,500],[`BlueberryTart`,500],[`PepperPoppers`,500]];function lm(e,t){let n=(e,t=J(e).buyPrice)=>({kind:`item`,item:e,price:t});switch(t){case`stall`:return[...Xc[e.season].map(e=>n(e)),n(`BasicFertilizer`)];case`store`:{let t=[...Xc[e.season].map(e=>n(e)),n(`BasicFertilizer`),n(`SpeedGro`)];return e.state.backpack.length<36&&t.push({kind:`backpack`,price:2e3}),t}case`smithy`:{let t=[n(`Coal`),n(`CopperOre`),n(`IronOre`),n(`GoldOre`)];(Yc(e.toolItem(`sword`))?.tier??-1)<1&&t.push(n(`SteelSword`));for(let n of[`hoe`,`can`,`axe`,`pickaxe`]){let r=e.toolItem(n),i=r?Yc(r).tier:-1;if(i<0||i>=3)continue;let[a,o]=sm[i];t.push({kind:`upgrade`,tool:n,item:om[n][i+1],price:a,bar:o})}return t}case`carpenter`:{let t=[n(`Wood`),n(`Stone`)],r=e.state.ranch;for(let e of[`coop`,`barn`])if(!r[e]&&r.building?.kind!==e){let n=su[e];t.push({kind:`building`,home:e,item:n.deed,price:n.price,wood:n.wood,stone:n.stone})}return t}case`saloon`:return[n(`Salad`,220),n(`FriedEgg`,100),n(`Sashimi`,150),...cm.filter(([t])=>!e.state.recipes.includes(t)).map(([e,t])=>({kind:`recipe`,item:e,price:t}))];case`ranch`:{let t=[n(`Hay`,20),n(`Egg`,60),...e.toolItem(`pail`)?[]:[n(`MilkPail`)]];return e.state.ranch.coop&&t.push({kind:`animal`,animal:`chicken`,item:`ChickenLivestock`,price:J(`ChickenLivestock`).buyPrice}),e.state.ranch.barn&&t.push({kind:`animal`,animal:`cow`,item:`CowLivestock`,price:J(`CowLivestock`).buyPrice}),t}case`fish_shop`:{let t=[n(`Bait`),n(`CrabPot`)],r=Yc(e.toolItem(`rod`))?.tier??0;return r<1&&t.push(n(`FiberglassRod`)),r<2&&e.level(`fishing`)>=6&&t.push(n(`IridiumRod`)),t}}}function um(e,t){if(!Kc(t))return!1;switch(e){case`store`:return[`crop`,`forage`,`artisan`,`animal`,`seed`].includes(t.kind);case`smithy`:return[`resource`,`mineral`,`geode`].includes(t.kind)&&![`Wood`,`Hardwood`,`Fiber`,`Sap`,`Hay`].includes(t.id);case`carpenter`:return[`Wood`,`Stone`,`Hardwood`,`Sap`].includes(t.id);case`saloon`:return t.kind===`cooked`;case`ranch`:return t.kind===`animal`;case`fish_shop`:return t.kind===`fish`;default:return!1}}function dm(e,t){if(t===`stall`)return e.season===`winter`?{open:!1,why:`The seed stand is closed for the winter. A note says: "See you in spring!"`}:{open:!0,why:``};let n=ep[t],[r,i]=np[t],a=Zc[n].name,o=`${fm(r)} to ${fm(i)}`;if(e.state.minutes<r||e.state.minutes>=i)return{open:!1,why:`Closed. A sign on the door says: "Open ${o}."`};let s=ip(n,e.state.day,e.state.minutes,e.wet),[c,l,u]=tp[t];return s.map!==c||s.x!==l||s.y!==u?{open:!1,why:`${a} isn't in right now. The sign says: "Open ${o}, most days."`}:{open:!0,why:``}}function fm(e){let t=Math.floor(e/60)%24;return`${t%12==0?12:t%12}${t<12?`am`:`pm`}`}function pm(e,t,n=1){switch(t.kind){case`item`:return e.buy(t.item,n,t.price);case`recipe`:return e.pay(t.price)?(e.state.recipes.push(t.item),e.emit(`gained`,0,0,null,0,`You learned to cook ${J(t.item).name}.`),!!im(t.item)):!1;case`backpack`:if(!e.pay(t.price))return!1;for(;e.state.backpack.length<36;)e.state.backpack.push(null);return e.emit(`gained`,0,0,null,0,`Your backpack is bigger: 36 slots!`),!0;case`building`:return pu(e,t.home);case`animal`:return mu(e,t.animal,t.price);case`upgrade`:{if(e.state.toolUpgrade)return e.deny(`Bram is still working on your ${J(e.state.toolUpgrade.item).name}.`),!1;if(e.backpack.count(t.bar)<5)return e.deny(`Bram needs 5 ${J(t.bar).name}s for that.`),!1;let n=e.toolItem(t.tool);return!n||!e.pay(t.price)?!1:(e.backpack.remove(t.bar,5),e.backpack.remove(n,1),e.state.toolUpgrade={item:t.item,ready:e.state.day+2},e.emit(`gained`,0,0,null,0,`Bram takes your ${J(n).name}. Come back in 2 days.`),!0)}}}function mm(e,t,n,r){let i=e.backpack.at(n);if(!i||!um(t,J(i.item)))return 0;let a=e.backpack.takeFrom(n,r?1:i.count),o=rl(i)*a;return e.state.money+=o,e.state.stats.totalEarned+=o,e.state.stats.shipped[i.item]=(e.state.stats.shipped[i.item]??0)+a,e.emit(`sold`,0,0,i.item,a,String(o)),o}function hm(e,t){let n=e.backpack.at(t);if(!n||J(n.item).kind!==`geode`||!e.pay(25))return null;e.backpack.takeFrom(t,1);let r={Geode:[[`Quartz`,30,1],[`EarthCrystal`,25,1],[`Amethyst`,15,1],[`Topaz`,15,1],[`CopperOre`,10,5],[`Coal`,5,3]],FrozenGeode:[[`Quartz`,25,1],[`FrozenTear`,30,1],[`Emerald`,12,1],[`Topaz`,13,1],[`IronOre`,15,5],[`Coal`,5,3]],MagmaGeode:[[`FireQuartz`,30,1],[`Ruby`,15,1],[`Diamond`,3,1],[`Emerald`,12,1],[`GoldOre`,30,5],[`Coal`,10,3]]}[n.item],i=e.rng.int(0,r.reduce((e,t)=>e+t[1],0));for(let[t,n,a]of r)if(i-=n,i<0){let[n,r]=e.playerTile;return e.give(t,a,n,r),t}return null}var gm={kind:`none`,text:``};function _m(e){let t=Math.floor(e/60)%24,n=e%60,r=t<12?`am`:`pm`;return`${t%12==0?12:t%12}:${String(n).padStart(2,`0`)} ${r}`}function vm(e,t,n,r,i){let[a,o]=[Math.sign(n-e[0]),Math.sign(r-e[1])];a===0==(o===0)&&([a,o]=ym(t));let s=[];if(i>=3){for(let e=0;e<3;e++)for(let t=-1;t<=1;t++)s.push([n+e*a+t*-o,r+e*o+t*a]);return s}for(let e=0;e<(i===2?5:i===1?3:1);e++)s.push([n+e*a,r+e*o]);return s}function ym(e){switch(e){case X.Up:return[0,-1];case X.Down:return[0,1];case X.Left:return[-1,0];default:return[1,0]}}function bm(e,t,n){if(n===1)return`sunny`;let r=e.next();switch(t){case`spring`:return r<.2?`rainy`:r<.32?`windy`:`sunny`;case`summer`:return r<.1?`rainy`:r<.2?`stormy`:`sunny`;case`fall`:return r<.2?`rainy`:r<.35?`windy`:`sunny`;default:return r<.3?`snowy`:`sunny`}}var xm=5,Sm=6,Cm=class e{state;maps;rng;backpack;events=[];fishing=new Vp;passOutPending=!1;fainted=!1;invulnerable=0;pendingLetter=null;constructor(e){this.state=e,this.maps=Cf(),this.rng=new gl(e.rngState),this.backpack=new al(e.backpack);for(let t of Object.keys(this.maps))e.maps[t]??=yf();vf(e),uu(this),Qd(this);let t=e.maps.minehub,n=this.maps.minehub.width;t.objects[Al.y*n+Al.x]??={t:`ladder`,down:!0},e.mine.floor>0?Il(this):e.map===`mine`&&(e.map=`minehub`,e.playerX=kl.x*G.tile+8,e.playerY=kl.y*G.tile+14)}static newGame(t){let n=new e(xf(t));return n.backpack.add(`Hoe`,1),n.backpack.add(`WateringCan`,1),n.backpack.add(`Axe`,1),n.backpack.add(`Pickaxe`,1),n.backpack.add(`Scythe`,1),n.backpack.add(`FishingRod`,1),n.backpack.add(`ParsnipSeeds`,G.startParsnipSeeds),n.plantWildTrees(),Od(n),zd(n),n.placeAtDoor(),eu(n,`welcome`),n.state.board=qf(n),n}static fromState(t){let{state:n,fresh:r}=Sf(t),i=new e(n);return r&&i.plantWildTrees(),i}saveJson(){return this.state.rngState=this.rng.state,JSON.stringify(this.state)}plantWildTrees(){let e=this.state.maps.farm,t=this.maps.farm.width;for(let[n,r,i]of pl){let a=r*t+n;!e.objects[a]&&!e.soil[a]&&(e.objects[a]={t:`tree`,species:i,stage:4,hp:G.treeHp,age:0})}}get map(){return this.maps[this.state.map]}get mapState(){return this.state.maps[this.state.map]}mapById(e){return this.maps[e]}mapWidth(e){return this.maps[e].width}get indoorsGrowing(){return this.state.map===`greenhouse`}get held(){return this.backpack.at(this.state.selected)}get heldItem(){return this.held?.item??null}get season(){return Pc(this.state.day)}get dayText(){return`${Lc(this.state.day)}. ${Rc(this.state.day)}`}get now(){return(this.state.day-1)*24*60+this.state.minutes}get playerTile(){return[Math.floor(this.state.playerX/G.tile),Math.floor((this.state.playerY-3)/G.tile)]}get facingTile(){let[e,t]=this.playerTile,[n,r]=ym(this.state.facing);return[e+n,t+r]}inReach(e,t){let[n,r]=this.playerTile;return Math.abs(e-n)<=1&&Math.abs(t-r)<=1}soilAt(e,t){return this.map.inBounds(e,t)?this.mapState.soil[t*this.map.width+e]:void 0}objectAt(e,t){return Cd(this,e,t)?.obj}floorAt(e,t){return this.map.inBounds(e,t)?this.mapState.floors[t*this.map.width+e]:void 0}walkable(e,t){if(!this.map.walkable(e,t))return!1;let n=this.mapState.objects[t*this.map.width+e];return!Sd(n?.t===`part`?this.mapState.objects[n.of]:n)}get binValue(){return this.state.bin.reduce((e,t)=>e+rl(t)*t.count,0)}level(e){return Tp(this.state.xp[e])}buff(e){return this.state.buffs.filter(t=>t.type===e&&t.until>this.now).reduce((e,t)=>e+t.amount,0)}get maxHealth(){return G.maxHealth+5*this.level(`combat`)}get canCapacity(){return G.canCapacity+15*(Yc(this.toolItem(`can`))?.tier??0)}toolItem(e){let t=null,n=-1;for(let r of this.state.backpack){let i=r?Yc(r.item):null;i&&i.type===e&&i.tier>n&&(t=r.item,n=i.tier)}return t}toolEnergy(e){return this.level(e)>=5?1:2}knows(e){return e.unlock===`start`?!0:e.unlock===`learned`?this.state.recipes.includes(e.id):this.level(e.unlock.skill)>=e.unlock.level||this.state.recipes.includes(e.id)}have(e){return this.state.backpack.reduce((t,n)=>t+(n&&nm(e,n.item)?n.count:0),0)}canMake(e,t=1){return this.knows(e)&&e.ingredients.every(([e,n])=>this.have(e)>=n*t)}make(e,t=1){if(!this.canMake(e,t))return this.deny(this.knows(e)?`You don't have the ingredients.`:`You don't know that recipe yet.`),!1;if(this.backpack.spaceFor(e.id)<e.count*t)return this.deny(`Your backpack is full.`),!1;for(let[n,r]of e.ingredients){let e=r*t;for(let t=0;t<this.state.backpack.length&&e>0;t++){let r=this.state.backpack[t];r&&nm(n,r.item)&&(e-=this.backpack.takeFrom(t,e))}}return this.backpack.add(e.id,e.count*t),tm.includes(e)&&(this.state.stats.cooked[e.id]=(this.state.stats.cooked[e.id]??0)+e.count*t),this.emit(`crafted`,0,0,e.id,e.count*t),!0}get craftable(){return em}get cookable(){return tm}addXp(e,t){t<=0||(this.state.xp[e]+=t,this.emit(`xp`,0,0,null,t,e))}tick(e){if(this.passOutPending)return;let t=this.state;for(t.clockCarry+=e;t.clockCarry>=G.secondsPerTenMinutes;)if(t.clockCarry-=G.secondsPerTenMinutes,t.minutes+=10,t.minutes>=G.passOut){t.minutes=G.passOut,this.passOutPending=!0,this.emit(`passedOut`);return}ap(this,e),Gf(this),this.invulnerable=Math.max(0,this.invulnerable-e),ql(this,e),wu(this,e)}findPath(e,t,n){let r=this.maps[e];if(!r)return null;let i=(e,t)=>t*r.width+e,a=new Map([[i(...t),-1]]),o=[t];for(;o.length;){let[e,t]=o.shift();if(e===n[0]&&t===n[1])break;for(let[s,c]of[[e+1,t],[e-1,t],[e,t+1],[e,t-1]])!a.has(i(s,c))&&(r.walkable(s,c)||s===n[0]&&c===n[1])&&(a.set(i(s,c),i(e,t)),o.push([s,c]))}if(!a.has(i(...n)))return null;let s=[];for(let e=i(...n);e!==i(...t)&&e!==-1;e=a.get(e))s.push([e%r.width,Math.floor(e/r.width)]);return s.reverse()}endDay(e){let t=this.state,n=t.bin.map(e=>({...e})),r=this.binValue;t.money+=r,t.stats.totalEarned+=r;for(let e of t.bin)t.stats.shipped[e.item]=(t.stats.shipped[e.item]??0)+e.count;t.bin.length=0;let i=Pc(t.day),a=t.day;t.day++;let o=Pc(t.day),s=o!==i;t.minutes=G.dayStart,t.clockCarry=0;let c=[];for(let e of Object.keys(t.maps))c.push(...Lp(this,e,o,s,e===`greenhouse`));t.weather=t.tomorrow,t.tomorrow=bm(this.rng,Pc(t.day+1),Fc(t.day+1));let l=t.map;t.map=`farm`,zd(this),c.push(...zp(this));for(let e of Object.keys(t.maps))Rp(this,e,e!==`greenhouse`);t.map=l,s&&c.unshift(`It's ${o} now.${o===`winter`?` Nothing grows outdoors in winter.`:``}`);let u=[];for(let e of Cp){let n=this.level(e);for(;t.levelsShown[e]<n;)u.push({skill:e,level:++t.levelsShown[e]})}t.energy=e?Math.floor(G.maxEnergy*G.passedOutEnergy):G.maxEnergy,t.health=this.maxHealth,t.buffs=[],op(this),this.fainted&&=(c.unshift(Zl(this)),!1),t.mine.floor=0,t.mine.monsters=[],c.push(...gu(this)),ed(this),mf(this);let d=ld(this);d&&c.push(d);let f=Hf(this);f&&c.push(f);let p=Jf(this);p&&c.push(p);let m=t.mail.length;return tu(this),t.mail.length>m&&c.push(t.mail.length-m>1?`You've got mail: some letters came.`:`You've got mail.`),Gf(this),this.passOutPending=!1,this.fishing.reset(),this.wakeUp(),{day:a,shipped:n,total:r,passedOut:e,weather:t.weather,levelUps:u,notes:c}}wakeUp(){this.warp(`farmhouse`,3,4,X.Down,!1)}warp(e,t,n,r,i=!0){this.fishing.reset(),this.state.map=e,this.state.playerX=t*G.tile+G.tile/2,this.state.playerY=n*G.tile+G.tile-2,this.state.facing=r,i&&this.emit(`warped`,t,n,null,0,e)}placeAtDoor(){this.state.map=`farm`,this.state.playerX=ml.x*G.tile+G.tile/2,this.state.playerY=ml.y*G.tile+G.tile-2,this.state.facing=X.Down}walk(e,t,n){if(e===0&&t===0)return;let r=Math.sqrt(e*e+t*t),i=G.walkSpeed*(1+.15*this.buff(`speed`))*n/Math.max(1,r);this.faceTowards(e,t),this.tryMove(e*i,0),this.tryMove(0,t*i);let[a,o]=this.playerTile,s=this.map.warpAt(a,o);s&&this.warp(s.to,s.tx,s.ty,s.facing)}faceTowards(e,t){let n=this.state.facing;e!==0&&t!==0&&(n===X.Left&&e<0||n===X.Right&&e>0||n===X.Up&&t<0||n===X.Down&&t>0)||(Math.abs(e)>Math.abs(t)?this.state.facing=e<0?X.Left:X.Right:t!==0&&(this.state.facing=t<0?X.Up:X.Down))}faceTile(e,t){let[n,r]=this.playerTile;(e!==n||t!==r)&&this.faceTowards(e-n,t-r)}tryMove(e,t){if(e===0&&t===0)return;let n=this.state,r=n.playerX+e,i=n.playerY+t;if(this.boxFree(r,i))n.playerX=r,n.playerY=i;else for(let a=1;a<=6;a++)for(let o of[-1,1]){let s=t===0?0:a*o,c=e===0?0:a*o;if(this.boxFree(r+s,i+c)&&this.boxFree(n.playerX+s,n.playerY+c)){let r=Math.min(Math.abs(e+t),1);n.playerX+=Math.sign(s)*r,n.playerY+=Math.sign(c)*r;return}}}boxFree(e,t){let n=G.tile,r=Math.floor((e-xm)/n),i=Math.floor((e+xm-.01)/n),a=Math.floor((t-Sm)/n),o=Math.floor((t-.01)/n);for(let e=a;e<=o;e++)for(let t=r;t<=i;t++)if(!this.walkable(t,e))return!1;return!0}useTool(e,t){if(!this.inReach(e,t))return!1;let n=this.held;if(!n)return!1;let r=J(n.item),i=r.tool;if(i){if(i.type===`hoe`){if(cf(this,e,t))return!0;let n=df(this,e,t);if(n)return this.pendingLetter=n,this.emit(`capsuleFound`,e,t),!0}if((i.type===`hoe`||i.type===`axe`||i.type===`pickaxe`||i.type===`scythe`)&&Cd(this,e,t)){let n=i.type===`axe`?`foraging`:i.type===`pickaxe`?`mining`:`farming`,r=i.type===`scythe`?0:this.toolEnergy(n);if(this.state.energy<r)return this.deny(`You're too tired. Time to get some sleep.`),!1;if(kd(this,e,t,i.type,i.tier,(i.damage??1)+(i.type===`pickaxe`?Math.floor(this.buff(`mining`)/2):0)).hit)return this.state.energy-=r,!0}if(i.type===`pail`){let n=yu(this,e,t);return n?.kind===`cow`&&xu(this,n).kind===`harvested`}if(i.type===`sword`)return Yl(this),Cd(this,e,t)&&kd(this,e,t,`sword`,i.tier,1),!0;switch(i.type){case`hoe`:return Pp(this,e,t)||Vd(this,e,t)?!0:kp(this,e,t);case`can`:return this.map.fishable(e,t)?(this.state.canWater=this.canCapacity,this.emit(`refilled`,e,t),!0):Ap(this,e,t);case`pickaxe`:if(this.floorAt(e,t)){let n=this.floorAt(e,t);return delete this.mapState.floors[t*this.map.width+e],this.give(n,1,e,t),this.emit(`pick`,e,t),!0}if(Pp(this,e,t))return!0;{let n=this.soilAt(e,t);if(n&&!n.crop)return delete this.mapState.soil[t*this.map.width+e],this.emit(`pick`,e,t),!0}return!1;case`axe`:case`scythe`:return Pp(this,e,t);default:return!1}}if(lf(this,e,t,n))return uf(this,e,t);if(dd(this,e,t,n))return fd(this,e,t);if(r.kind===`potion`)return td(this,e,t,n);if(r.kind===`seed`){let r=ku(n.item)?.quirk;return r===`pond`||r===`dark`?Zu(this,e,t,n.item):[`Acorn`,`PineCone`,`AppleSapling`,`CherrySapling`].includes(n.item)?Hd(this,e,t,n.item):Mp(this,e,t,n.item)}return r.kind===`fertilizer`?Np(this,e,t,n.item):jd.has(n.item)||Md.has(n.item)?Pd(this,e,t,this.state.selected):!1}useArea(e,t,n){let r=Yc(this.heldItem);if(!r||r.type!==`hoe`&&r.type!==`can`||n<1||r.tier<1)return+!!this.useTool(e,t);if(!this.inReach(e,t))return 0;if(r.type===`can`&&this.map.fishable(e,t))return+!!this.useTool(e,t);if(r.type===`can`&&this.state.canWater<=0)return this.deny(`Your watering can is empty. Refill it at the pond or the brook.`),0;if(!this.spend(this.toolEnergy(`farming`)*(Math.min(n,r.tier)+1)))return 0;let i=0;for(let[a,o]of vm(this.playerTile,this.state.facing,e,t,Math.min(n,r.tier)))if(this.map.inBounds(a,o)){if(r.type===`hoe`){if(Cd(this,a,o))continue;(Pp(this,a,o)||Vd(this,a,o)||kp(this,a,o,!0))&&i++}else{if(this.state.canWater<=0)break;Ap(this,a,o,!0)&&i++}}return i}faint(){this.fainted||(this.fainted=!0,this.passOutPending=!0,this.emit(`fainted`))}timeTravel(){return ef(this)}rideElevator(e){Bl(this,e)}spend(e){return this.state.energy<e?(this.deny(`You're too tired. Time to get some sleep.`),!1):(this.state.energy-=e,!0)}eat(e){let t=this.backpack.at(e);if(!t||!qc(J(t.item)))return!1;let n=J(t.item),r=Math.floor(n.energy*[1,1.4,1.8][t.quality??0]);this.backpack.takeFrom(e,1),this.state.energy=Math.min(G.maxEnergy,this.state.energy+r),this.state.health=Math.min(this.maxHealth,this.state.health+Math.floor(r*.45));let i=(this.state.day-1)*24*60+G.passOut;for(let[e,n]of Tm[t.item]??[])this.state.buffs.push({type:e,amount:n,until:i});return this.emit(`ate`,0,0,t.item,r),Wu(this,t.item),!0}interact(e,t){if(!this.inReach(e,t))return gm;let n=rf(this,e,t);if(n)return of(this,n);let r=sp(this,e,t);if(r)return fp(this,r);let i=yu(this,e,t);if(i)return bu(this,i);let a=this.soilAt(e,t);if(a?.crop&&ju(a.crop))return Ip(this,e,t);let o=Fd(this,e,t);if(o)return o;let s=this.map.buildingAt(e,t);if(s)return this.useBuilding(s.kind);switch(this.map.featureAt(e,t)){case Y.Signpost:return{kind:`text`,text:this.map.signs.get(dl(e,t))??`The sign is blank.`};case Y.Mailbox:{let e=nu(this);return e?{kind:`mail`,text:e.text,letter:e}:{kind:`text`,text:`No mail today. No bills either. Lovely.`}}case Y.Scarecrow:return{kind:`text`,text:`The old scarecrow is doing its best. It keeps crows off the crops around it.`};case Y.Sunflower:return{kind:`text`,text:`The sunflowers turn to follow you. Probably.`};default:return gm}}useBuilding(e){switch(e){case`house`:return this.warp(this.state.map===`farm_past`?`farmhouse_past`:`farmhouse`,kf.x,kf.y,X.Up),{kind:`harvested`,text:``};case`bed`:return{kind:`sleep`,text:``};case`bin`:return{kind:`bin`,text:``};case`kitchen`:return{kind:`cook`,text:``};case`board`:return{kind:`board`,text:``};case`hall`:return{kind:`hall`,text:``};case`tv`:return{kind:`text`,text:wm(this.state.tomorrow)};case`fireplace`:return{kind:`text`,text:`The fire crackles. Grandpa's old armchair still smells of pipe smoke.`};case`bookshelf`:return Ku(this)??{kind:`text`,text:`Almanacs, seed catalogues, and a well-thumbed book called "Fish of the Fern Brook".`};case`fountain`:return{kind:`text`,text:`Coins glint at the bottom of the fountain. Someone has wished for rain a lot.`};case`mine_entrance`:return this.state.day<5?{kind:`text`,text:`The old mine. Planks are nailed across the entrance: a rockslide inside, says a sign. Bram is clearing it.`}:(this.warp(`minehub`,kl.x,kl.y,X.Up),{kind:`harvested`,text:``});case`elevator`:return{kind:`elevator`,text:``};case`coop`:case`barn`:{if(this.state.map===`farm_past`)return{kind:`text`,text:`Walt's barn. Inside, Rosie the cow chews and looks at you as if you're very late.`};let t=fu[e];return this.warp(e,t.x,t.y,X.Up),{kind:`harvested`,text:``}}case`hopper`:return Su(this);case`trough`:return{kind:`text`,text:`A feeding trough. Your animals eat from it each night while there's hay in the hopper.`};case`haybale`:return{kind:`text`,text:`Hay bales. They smell like summer.`};case`house_a`:case`house_b`:return{kind:`text`,text:`Nobody answers the door.`};case`greenhouse`:return this.state.map===`farm_past`?{kind:`text`,text:`The greenhouse Walt built for Nell. The glass is spotless and full of seedlings in neat rows.`}:this.state.greenhouse?(this.warp(`greenhouse`,Mf.x,Mf.y,X.Up),{kind:`harvested`,text:``}):{kind:`text`,text:`Grandpa's old greenhouse. Most of the panes are cracked and weeds grow through the floor. Maybe the town could help fix it up.`};case`stall`:case`store`:case`smithy`:case`carpenter`:case`saloon`:case`ranch`:case`fish_shop`:{let t=dm(this,e),n=this.state.toolUpgrade;return e===`smithy`&&t.open&&n&&this.state.day>=n.ready?this.backpack.spaceFor(n.item)<1?{kind:`text`,text:`Bram: "Your tool's done. Make some room in that pack first."`}:(this.backpack.add(n.item,1),this.state.toolUpgrade=void 0,this.emit(`gained`,0,0,n.item,1),{kind:`text`,text:`Bram hands over your ${J(n.item).name}. "Good as new. Better, actually."`}):t.open?{kind:`shop`,text:``,shop:e}:{kind:`text`,text:t.why}}default:return gm}}chestMove(e,t,n){return Rd(this,e,t,n)}canPlace(e,t,n){return Nd(this,e,t,n)}canPlant(e,t,n){let r=ku(n)?.quirk;return r===`pond`||r===`dark`?Xu(this,e,t,n):ku(n)?jp(this,e,t,n):Td(this,e,t)}give(e,t,n,r,i={}){if(t<=0)return;J(e).kind===`mineral`&&(this.state.stats.found[e]=(this.state.stats.found[e]??0)+t);let a=this.backpack.add(e,t,i);a<t&&this.emit(`gained`,n,r,e,t-a,``,i.quality??0),a>0&&this.drop({item:e,count:a,...i},n,r)}giveStack(e,t,n){this.give(e.item,e.count,t,n,{quality:e.quality,source:e.source})}drop(e,t,n){for(let r=0;r<4;r++)for(let i=-r;i<=r;i++)for(let a=-r;a<=r;a++){let r=t+a,o=n+i;if(!this.map.inBounds(r,o)||!this.walkable(r,o))continue;let s=o*this.map.width+r;if(!this.mapState.objects[s]){this.mapState.objects[s]={t:`forage`,item:e.item,count:e.count,quality:e.quality,source:e.source,dropped:!0},this.deny(`Your backpack is full: it's on the ground.`);return}}}pay(e){return this.state.money<e?(this.deny(`You can't afford that.`),!1):(this.state.money-=e,!0)}buy(e,t,n=J(e).buyPrice){let r=n*t;return t<=0||n<=0?!1:this.state.money<r?(this.deny(`You can't afford that.`),!1):this.backpack.spaceFor(e)<t?(this.deny(`Your backpack is full.`),!1):(this.state.money-=r,this.backpack.add(e,t),this.emit(`bought`,0,0,e,t),!0)}ship(e,t=0){let n=this.backpack.at(e);if(!n||!Kc(J(n.item)))return!1;let r={item:n.item,quality:n.quality,source:n.source},i=this.backpack.takeFrom(e,t<=0?n.count:t),a=this.state.bin,o=a[a.length-1];return o&&o.item===r.item&&(o.quality??0)===(r.quality??0)&&o.source===r.source?o.count+=i:a.push({...r,count:i}),this.emit(`shipped`,0,0,n.item,i),!0}unship(e){let t=this.state.bin;if(e<0||e>=t.length)return!1;let n=t[e];return this.backpack.spaceFor(n.item,n)<n.count?(this.deny(`Your backpack is full.`),!1):(t.splice(e,1),this.backpack.addStack(n),this.emit(`unshipped`,0,0,n.item,n.count),!0)}startCast(){return Up(this)}cancelFishing(){this.fishing.reset()}updateFishing(e,t,n){Wp(this,e,t,n)}emit(e,t=0,n=0,r=null,i=0,a=``,o=0){this.events.push({kind:e,x:t,y:n,item:r,count:i,text:a,quality:o})}deny(e){this.emit(`denied`,0,0,null,0,e)}get wet(){return xc(this.state.weather)}};function wm(e){return{sunny:`The weather channel: "Clear skies tomorrow. A lovely day to be outdoors!"`,rainy:`The weather channel: "Rain tomorrow. Your crops will thank you."`,stormy:`The weather channel: "Storms tomorrow, with lightning. Stay safe out there!"`,snowy:`The weather channel: "Snow tomorrow. Bundle up!"`,windy:`The weather channel: "Breezy tomorrow. Hold on to your hat."`}[e]}var Tm={Omelet:[[`farming`,1]],FishStew:[[`fishing`,2]],PumpkinSoup:[[`luck`,2]],BlueberryTart:[[`speed`,1]],PepperPoppers:[[`farming`,1],[`speed`,1]],CranberrySauce:[[`mining`,2]],FriedMushroom:[[`defence`,2]]},Em=`step_grass_1.step_grass_2.step_grass_3.step_grass_4.step_dirt_1.step_dirt_2.step_dirt_3.step_wood_1.step_wood_2.step_wood_3.hoe_1.hoe_2.water.refill.plant.harvest.pickup.cast.plop.nibble.bite.reel.catch.escape.coin.buy.ship.eat.ui_click.ui_open.ui_close.select.denied.door.sleep.day_summary.morning.splash.axe_1.axe_2.tree_fall.pickaxe_1.pickaxe_2.rock_break.scythe.step_snow_1.step_snow_2.step_snow_3.step_stone_1.step_stone_2.step_stone_3.step_sand_1.step_sand_2.step_sand_3.craft.place.chest_open.chest_close.machine.machine_done.cook.level_up.gift.heart.talk_1.talk_2.talk_3.shop_bell.mail.quest.bundle.thunder.crow.chicken_1.chicken_2.cow.milk.sword.hit.monster_die.slime.bat.hurt.ladder.elevator.treasure.geode`.split(`.`),Q=new class{ctx=null;sfxBus=null;ambBus=null;musicBus=null;buffers=new Map;loops=[{name:`music/day`,gain:.9},{name:`music/summer`,gain:.9},{name:`music/fall`,gain:.9},{name:`music/winter`,gain:.9},{name:`music/night`,gain:.9},{name:`amb/day`,gain:.55},{name:`amb/night`,gain:.55},{name:`amb/rain`,gain:.7},{name:`amb/brook`,gain:.6},{name:`amb/wind`,gain:.5},{name:`music/mine`,gain:.9},{name:`music/town`,gain:.9},{name:`amb/cave`,gain:.6},{name:`amb/indoor`,gain:.5},{name:`amb/town`,gain:.5},{name:`amb/ocean`,gain:.6}].map(e=>({...e,node:null,source:null,level:0,target:0}));base=``;hushed=!1;musicVolume=.7;sfxVolume=.8;ambVolume=.8;init(e){this.base=e;try{let e=JSON.parse(localStorage.getItem(`fernbrook-volume`)??`null`);e&&(this.musicVolume=e.music,this.sfxVolume=e.sfx,this.ambVolume=e.amb??e.sfx)}catch{}}unlock(){if(this.ctx){this.ctx.state===`suspended`&&this.ctx.resume();return}let e=new AudioContext;this.ctx=e,this.sfxBus=e.createGain(),this.ambBus=e.createGain(),this.musicBus=e.createGain();for(let t of[this.sfxBus,this.ambBus,this.musicBus])t.connect(e.destination);this.applyVolumes();for(let e of Em)this.load(`sfx/${e}.wav`,e);for(let e of this.loops)this.load(`${e.name}.ogg`,e.name)}async load(e,t){try{let n=await(await fetch(this.base+e)).arrayBuffer();this.buffers.set(t,await this.ctx.decodeAudioData(n))}catch{}}setVolumes(e,t,n=this.ambVolume){let r=e=>Math.round(Math.min(1,Math.max(0,e))*100)/100;this.musicVolume=r(e),this.sfxVolume=r(t),this.ambVolume=r(n),this.applyVolumes();try{localStorage.setItem(`fernbrook-volume`,JSON.stringify({music:this.musicVolume,sfx:this.sfxVolume,amb:this.ambVolume}))}catch{}}applyVolumes(){this.ctx&&(this.sfxBus.gain.value=this.sfxVolume,this.ambBus.gain.value=this.ambVolume,this.musicBus.gain.value=this.musicVolume)}play(e,t=0,n=.04){let r=this.ctx,i=this.buffers.get(e);if(!r||!i)return;let a=r.createBufferSource();a.buffer=i,a.playbackRate.value=1+(Math.random()*2-1)*n;let o=r.createGain();o.gain.value=10**(t/20),a.connect(o).connect(this.sfxBus),a.start()}variant(e,t,n=0){this.play(`${e}_${1+Math.floor(Math.random()*t)}`,n,.08)}hush(e){this.hushed=e}update(e,t,n,r,i=`spring`,a=!1,o=`farm`){if(!this.ctx)return;let s=o===`mine`||o===`minehub`,c=o===`farmhouse`||o===`greenhouse`||o===`farmhouse_past`||o===`coop`||o===`barn`,l=o===`town`,u=o===`beach`,d=!s&&!c,f=xc(n)&&!a,p=!a&&t>=1170,m=!a&&t>=1080,h=!m&&!f&&!s,g=a||i===`spring`?`music/day`:`music/${i}`,_=e=>h&&!l&&g===e?1:0,v={"music/day":_(`music/day`),"music/summer":_(`music/summer`),"music/fall":_(`music/fall`),"music/winter":_(`music/winter`),"music/town":h&&l?1:0,"music/night":!s&&(m||f)?1:0,"music/mine":+!!s,"amb/day":!d||p||i===`winter`?0:f?.2:l?.5:1,"amb/night":d&&p&&i!==`winter`?1:0,"amb/rain":f&&!s?c?.35:1:0,"amb/brook":d?Math.min(1,Math.max(0,1-(r-2)/10)):0,"amb/wind":d&&!a&&(i===`winter`||n===`windy`)?.8:0,"amb/cave":+!!s,"amb/indoor":+!!c,"amb/town":l&&!p?1:0,"amb/ocean":+!!u};for(let t of this.loops){t.target=this.hushed?0:v[t.name];let n=e/2.5;t.level+=Math.max(-n,Math.min(n,t.target-t.level));let r=this.buffers.get(t.name);if(r){if(t.level>.001&&!t.source){let e=this.ctx.createBufferSource();e.buffer=r,e.loop=!0;let n=this.ctx.createGain();e.connect(n).connect(t.name.startsWith(`music`)?this.musicBus:this.ambBus),e.start(),t.source=e,t.node=n}else t.level<=.001&&t.source&&(t.source.stop(),t.source=null,t.node=null);t.node&&(t.node.gain.value=t.level*t.gain)}}}},Dm={rodTip:[[23,31],[12,1],[30,13],[1,13]],font:{cellWidth:8,cellHeight:12,ascent:9,advances:[]}};async function Om(e){let[t,n]=await Promise.all([fetch(`${e}player.json`).then(e=>e.json()),fetch(`${e}font.json`).then(e=>e.json())]),r=t.rodTip;Dm.rodTip=[r.down,r.up,r.right,r.left],Dm.font=n}function km(e,t,n,r){return[e%t*n,Math.floor(e/t)*r]}function Am(e){let t=J(e).icon;if(t>=400){let[e,n]=km(t-400,16,16,16);return[`items3`,e,n]}if(t>=200){let[e,n]=km(t-200,16,16,16);return[`items2`,e,n]}let[n,r]=km(t,8,16,16);return[`items`,n,r]}function jm(e,t,n,r,i){let[a,o,s]=Am(t);e.draw(a,o,s,16,16,n,r,16,16,i)}function Mm(e,t,n,r,i){t&&e.draw(`ui2`,96+(t-1)*8,16,8,8,n,r,8,8,i)}function Nm(e,t){return t===`spring`?e:`${e}_${t}`}function Pm(e,t){return t===`winter`?`${e}_winter`:e}function Fm(e,t){return[t*32,e*32]}function Im(e,t=0){return[t*64+e%4*16,Math.floor(e/4)*16]}function Lm(e,t){return[(t?64:0)+e%4*16,Math.floor(e/4)*16]}function Rm(e){return[e%4*16,Math.floor(e/4)*32]}var zm=function(e){return e[e.Sun=0]=`Sun`,e[e.Rain=1]=`Rain`,e[e.Coin=2]=`Coin`,e[e.Energy=3]=`Energy`,e[e.Moon=4]=`Moon`,e[e.Clock=5]=`Clock`,e[e.Star=6]=`Star`,e[e.Check=7]=`Check`,e[e.Cross=8]=`Cross`,e[e.Arrow=9]=`Arrow`,e[e.Drop=10]=`Drop`,e[e.Fish=11]=`Fish`,e}({});function Bm(e,t,n,r,i){let[a,o]=km(t,8,12,12);e.draw(`ui_icons`,a,o,12,12,n,r,12,12,i)}var Vm={tab:e=>[e*16,0],skill:e=>[[`farming`,`fishing`,`foraging`,`mining`,`combat`].indexOf(e)*12,16],heart:e=>[60+[`full`,`empty`,`half`].indexOf(e)*12,16],buff:e=>[[`speed`,`fishing`,`farming`,`mining`,`luck`,`defence`].indexOf(e)*12,28],treasure:e=>[e?84:72,28],bubble:[96,28]},Hm={splash:0,dirt:4,leaf:7,droplets:8,sparkle:11,heart:13,bobber:16,bobberDip:17,alert:18,rippleSmall:19,rippleBig:20,rain:21,rainSplash:22,zzz:23},Um={chips:0,shards:4,grass:8,spark:11,snow:14,snowSmall:15,leaf:16,petal:17,float:18,bubble:22,gold:23,smoke:24,emoteHeart:27,emoteAlert:28,emoteQuestion:29,emoteNote:30,poof:32,levelUp:36};function Wm(e,t,n,r,i,a=`fx`){let[o,s]=km(t,8,16,16);e.draw(a,o,s,16,16,n,r,16,16,i)}function Gm(e){switch(e){case Y.RedFlowers:return 0;case Y.YellowFlowers:return 1;case Y.BlueFlowers:return 2;case Y.Tuft:return 3;case Y.LilyPad:return 4;case Y.LilyFlower:return 5;case Y.Cattails:return 6;case Y.Pebbles:return 7;case Y.Mushrooms:return 8;case Y.Log:return 9;case Y.Sapling:return 10;case Y.Fern:return 11;case Y.Rock:return 12;case Y.BigRock:return 13;case Y.Stump:return 14;case Y.SmallBush:return 15;default:return-1}}function Km(e){switch(e){case Y.Mailbox:return 0;case Y.Scarecrow:return 1;case Y.Signpost:return 2;case Y.Lamp:return 3;case Y.Barrel:return 5;case Y.Crates:return 6;case Y.Sunflower:return 7;default:return-1}}var qm={Chest:[0,1],Sprinkler:[2,2],QualitySprinkler:[3,3],BeeHouse:[4,4],PreservesJar:[5,6],Keg:[7,8],Furnace:[9,10],MayonnaiseMachine:[11,12],CheesePress:[13,14],CrabPot:[15,15],Scarecrow:[18,18]},Jm={WoodPath:16,StonePath:17},Ym=[1,1,1,1];function Xm(e,t=1){let n=parseInt(e.replace(`#`,``),16);return[(n>>16&255)/255,(n>>8&255)/255,(n&255)/255,t]}var Zm=`
precision highp float;
in vec3 position;
in vec2 uv;
in vec4 color;
uniform vec2 screen;
out vec2 vUv;
out vec4 vColor;
void main() {
    vUv = uv;
    vColor = color;
    vec2 p = position.xy / screen * 2.0 - 1.0;
    gl_Position = vec4(p.x, -p.y, 0.0, 1.0);
}`,Qm=`
precision highp float;
uniform sampler2D atlas;
in vec2 vUv;
in vec4 vColor;
out vec4 outColor;
void main() {
    vec4 c = texture(atlas, vUv) * vColor;
    if (c.a <= 0.0) discard;
    outColor = c;
}`,$m=class e{atlas;capacity;static snap=1;mesh;tint=Ym;offsetX=0;offsetY=0;positions;uvs;colors;geometry;count=0;constructor(e,t,n,r,i=12e3){this.atlas=e,this.capacity=i,this.positions=new Float32Array(i*4*3),this.uvs=new Float32Array(i*4*2),this.colors=new Float32Array(i*4*4);let a=new Uint32Array(i*6);for(let e=0;e<i;e++){let t=e*4,n=e*6;a[n]=t,a[n+1]=t+1,a[n+2]=t+2,a[n+3]=t,a[n+4]=t+2,a[n+5]=t+3}let o=new mr;o.setAttribute(`position`,new $n(this.positions,3).setUsage(We)),o.setAttribute(`uv`,new $n(this.uvs,2).setUsage(We)),o.setAttribute(`color`,new $n(this.colors,4).setUsage(We)),o.setIndex(new $n(a,1)),this.geometry=o;let s=new ci({glslVersion:Ge,vertexShader:Zm,fragmentShader:Qm,uniforms:{atlas:{value:t},screen:{value:n}},transparent:!0,depthTest:!1,depthWrite:!1,blending:r?2:1,side:2});this.mesh=new Rr(o,s),this.mesh.frustumCulled=!1}begin(){this.count=0,this.tint=Ym,this.offsetX=this.offsetY=0}end(){let e=this.geometry;e.setDrawRange(0,this.count*6);for(let t of[`position`,`uv`,`color`]){let n=e.getAttribute(t);n.clearUpdateRanges(),n.addUpdateRange(0,this.count*4*n.itemSize),n.needsUpdate=!0}}draw(t,n,r,i,a,o,s,c=i,l=a,u=Ym,d=!1){if(this.count>=this.capacity)return;let f=this.atlas.sheet(t),p=e.snap,m=Math.round((o+this.offsetX)*p)/p,h=Math.round((s+this.offsetY)*p)/p,g=m+Math.round(c),_=h+Math.round(l),v=this.atlas.size,y=(f.x+n)/v,b=(f.x+n+i)/v,x=(f.y+r)/v,S=(f.y+r+a)/v;d&&([y,b]=[b,y]);let C=this.count++,w=this.positions,T=this.uvs,E=this.colors,D=C*12;w[D]=m,w[D+1]=h,w[D+2]=0,w[D+3]=g,w[D+4]=h,w[D+5]=0,w[D+6]=g,w[D+7]=_,w[D+8]=0,w[D+9]=m,w[D+10]=_,w[D+11]=0,D=C*8,T[D]=y,T[D+1]=x,T[D+2]=b,T[D+3]=x,T[D+4]=b,T[D+5]=S,T[D+6]=y,T[D+7]=S;let O=this.tint,k=u[0]*O[0],A=u[1]*O[1],ee=u[2]*O[2],j=u[3]*O[3];D=C*16;for(let e=0;e<4;e++)E[D+e*4]=k,E[D+e*4+1]=A,E[D+e*4+2]=ee,E[D+e*4+3]=j}sheet(e,t,n,r=Ym){let i=this.atlas.sheet(e);this.draw(e,0,0,i.w,i.h,t,n,i.w,i.h,r)}rect(e,t,n,r,i){this.draw(`white`,1,1,2,2,e,t,n,r,i)}line(e,t,n,r,i){let a=Math.max(1,Math.ceil(Math.max(Math.abs(n-e),Math.abs(r-t)))),o=NaN,s=NaN;for(let c=0;c<=a;c++){let l=Math.round(e+(n-e)*c/a),u=Math.round(t+(r-t)*c/a);(l!==o||u!==s)&&(this.rect(l,u,1,1,i),o=l,s=u)}}};function eh(e){let t=e-32,n=Dm.font.advances;return t>=0&&t<n.length?n[t]:Dm.font.cellWidth}function th(e){let t=0;for(let n=0;n<e.length;n++)t+=eh(e.charCodeAt(n));return t}function nh(e,t,n,r,i,a){a&&nh(e,t,n+1,r+1,a);let o=Dm.font.cellWidth,s=Dm.font.cellHeight,c=Math.round(n);for(let n=0;n<t.length;n++){let a=t.charCodeAt(n),l=a-32;l>0&&l<95&&e.draw(`font`,l%16*o,Math.floor(l/16)*s,o,s,c,Math.round(r),o,s,i),c+=eh(a)}}function rh(e,t){let n=[];for(let r of e.split(`
`)){let e=``;for(let i of r.split(` `)){let r=e.length?`${e} ${i}`:i;th(r)<=t||!e.length?e=r:(n.push(e),e=i)}n.push(e)}return n}var $={ink:Xm(`4b2c1d`),inkSoft:Xm(`7a5434`),paper:Xm(`fff3d6`),gold:Xm(`ffd25e`),good:Xm(`63c74d`),bad:Xm(`e0614f`),warn:Xm(`a3301c`),shade:Xm(`0d0814`,.45)},ih=class{b;input;constructor(e,t){this.b=e,this.input=t}panel(e,t,n,r,i=!1){ah(this.b,i?`ui_panel_dark`:`ui_panel`,0,32,8,e,t,n,r)}hover(e,t,n,r){return this.input.inside(e,t,n,r)}clicked(e,t,n,r){return this.input.leftPressed&&!this.input.consumed&&this.input.inside(e,t,n,r)?(this.input.consumed=!0,!0):!1}rightClicked(e,t,n,r){return this.input.rightPressed&&!this.input.consumed&&this.input.inside(e,t,n,r)?(this.input.consumed=!0,!0):!1}block(e,t,n,r){(this.input.leftPressed||this.input.rightPressed)&&this.input.inside(e,t,n,r)&&(this.input.consumed=!0)}button(e,t,n,r,i,a=!0){let o=a&&this.hover(e,t,n,r),s=o&&this.input.leftDown?2:+!!o;ah(this.b,`ui_button`,s*16,16,5,e,t,n,r);let c=th(i);nh(this.b,i,e+Math.floor((n-c)/2),t+Math.floor((r-12)/2),a?$.ink:$.inkSoft);let l=a&&this.clicked(e,t,n,r);return l&&Q.play(`ui_click`),l}slot(e,t,n,r={}){let i=this.hover(e,t,20,20),a=r.selected?2:+!!i;if(this.b.draw(`ui_slot`,a*20,0,20,20,e,t),n){if(jm(this.b,n.item,e+2,t+2,r.dim?[1,1,1,.35]:void 0),Mm(this.b,n.quality,e+1,t+11,r.dim?[1,1,1,.35]:void 0),n.count>1){let r=String(n.count);nh(this.b,r,e+20-th(r),t+10,$.paper,$.ink)}if(r.canWater!==void 0&&r.canMax&&Yc(n.item)?.type===`can`){let n=r.canWater/r.canMax;this.b.rect(e+3,t+16,14,2,[.1,.1,.2,.7]),this.b.rect(e+3,t+16,Math.round(14*n),2,Xm(`5cc8ff`))}}return{hover:i,left:this.clicked(e,t,20,20),right:this.rightClicked(e,t,20,20)}}text(e,t,n,r=$.ink,i){nh(this.b,e,t,n,r,i)}centered(e,t,n,r=$.ink,i){nh(this.b,e,Math.round(t-th(e)/2),n,r,i)}};function ah(e,t,n,r,i,a,o,s,c){let l=r-2*i,u=s-2*i,d=c-2*i;e.draw(t,n,0,i,i,a,o),e.draw(t,n+r-i,0,i,i,a+s-i,o),e.draw(t,n,r-i,i,i,a,o+c-i),e.draw(t,n+r-i,r-i,i,i,a+s-i,o+c-i);for(let s=0;s<u;s+=l){let d=Math.min(l,u-s);e.draw(t,n+i,0,d,i,a+i+s,o),e.draw(t,n+i,r-i,d,i,a+i+s,o+c-i)}for(let c=0;c<d;c+=l){let u=Math.min(l,d-c);e.draw(t,n,i,i,u,a,o+i+c),e.draw(t,n+r-i,i,i,u,a+s-i,o+i+c)}for(let r=0;r<d;r+=l)for(let s=0;s<u;s+=l){let c=Math.min(l,u-s),f=Math.min(l,d-r);e.draw(t,n+i,i,c,f,a+i+s,o+i+r)}}function oh(e){return`${e.toLocaleString(`en-US`)}g`}var sh=class{closed=!1;canDismiss=!0;dim=!0;closeHandlers=[];onClose(e){return this.closeHandlers.push(e),this}close(){if(!this.closed){this.closed=!0,Q.play(`ui_close`);for(let e of this.closeHandlers)e()}}position(e,t){return[Math.floor((480-e)/2),Math.floor((270-t)/2)]}draw(e){this.dim&&e.b.rect(0,0,480,270,$.shade);let[t,n]=this.size(),r=t+16,i=n+16,[a,o]=this.position(r,i);this.drawAround(e,a,o),e.panel(a,o,r,i),this.body(e,a+8,o+8),e.block(0,0,480,270)}drawAround(e,t,n){}update(e){}},ch=class{stack=null;extra=null;plain=null;show(e,t=null){this.stack=e,this.extra=t,this.plain=null}text(e,t){this.stack=null,this.plain=[e,t]}static height=48;draw(e,t,n){if(this.plain){e.text(this.plain[0],t,n),rh(this.plain[1],240).slice(0,3).forEach((r,i)=>e.text(r,t,n+12*(i+1),$.inkSoft));return}let r=this.stack;if(!r)return;let i=J(r.item),a=r.quality?` (${[``,`silver`,`gold`][r.quality]})`:``;e.text(il(r)+a,t,n),rh(i.description,240).slice(0,2).forEach((r,i)=>e.text(r,t,n+12*(i+1),$.inkSoft));let o=[];Kc(i)&&o.push(`Sells for ${oh(rl(r))}`),qc(i)&&o.push(`+${Math.floor(i.energy*[1,1.4,1.8][r.quality??0])} energy`),this.extra&&o.push(this.extra),e.text(o.join(`   `),t,n+36,$.inkSoft)}};function lh(e,t,n,r,i,a,o={}){let s=null;for(let c=0;c<n.length;c++){let l=n[c],u=r+c%12*20,d=i+Math.floor(c/12)*22,f=e.slot(u,d,l,{selected:c===o.highlight,dim:!!l&&!!o.usable&&!o.usable(l),canWater:t.state.canWater,canMax:t.canCapacity});f.hover&&a.show(l),f.left&&(s={slot:c,right:!1}),f.right&&(s={slot:c,right:!0})}return s}var uh=e=>Math.ceil(e/12)*22,dh=class extends sh{game;onEat;tab;info=new ch;picked=-1;hoverRecipe=null;constructor(e,t,n=`backpack`){super(),this.game=e,this.onEat=t,this.tab=n,this.info.show(e.held)}size(){return[256,206]}position(e,t){return[Math.floor((480-e)/2),Math.floor((270-t)/2)+8]}drawAround(e,t,n){(this.tab===`cooking`?[[`cooking`,6]]:[[`backpack`,0],[`crafting`,1],[`skills`,2],[`friends`,3],[`journal`,5],[`collections`,4],[`options`,7]]).forEach(([r,i],a)=>{let o=t+8+a*26,s=n-18,c=this.tab===r;e.panel(o,s+(c?0:3),24,26,!c);let[l,u]=Vm.tab(i);e.b.draw(`ui2`,l,u,16,16,o+4,s+4+(c?0:3)),e.clicked(o,s,24,18)&&!c&&(this.tab=r,this.picked=-1,this.info.show(null),Q.play(`select`))})}body(e,t,n){this.tab===`backpack`?this.backpack(e,t,n):this.tab===`crafting`||this.tab===`cooking`?this.crafting(e,t,n):this.tab===`friends`?this.friends(e,t,n):this.tab===`journal`?this.journal(e,t,n):this.tab===`collections`?this.collections(e,t,n):this.tab===`options`?this.options(e,t,n):this.skills(e,t,n)}backpack(e,t,n){let r=this.game;e.centered(`Backpack`,t+128,n);let i=lh(e,r,r.state.backpack,t+8,n+14,this.info,{highlight:this.picked});if(i){let e=r.state.backpack[i.slot];i.right?e&&qc(J(e.item))&&this.onEat(i.slot):this.picked<0?e&&(this.picked=i.slot,Q.play(`select`)):(r.backpack.move(this.picked,i.slot),this.picked=-1,Q.play(`pickup`))}let a=n+14+uh(r.state.backpack.length)+2;this.info.draw(e,t+8,a),a+=ch.height+2,e.text(`Fish caught`,t+8,a,$.inkSoft),a+=12;let o=r.state.stats;wc.filter(e=>e.waters.includes(`pond`)||e.waters.includes(`river`)).slice(0,12).forEach((n,r)=>{let i=t+8+r*20,s=o.caught[n.item]??0;jm(e.b,n.item,i,a,s?void 0:[0,0,0,.35]),e.hover(i,a,16,16)&&(s?this.info.show({item:n.item,count:1},`Caught ${s}, biggest ${o.biggestFish[n.item]??0} in`):this.info.show(null))}),a+=18,e.text(`Earned ${oh(o.totalEarned)}   Crops ${o.cropsHarvested}   Fish ${o.fishCaught}`,t+8,a,$.inkSoft),e.text(`Click two slots to swap. Right-click food to eat.`,t+8,a+12,$.inkSoft)}crafting(e,t,n){let r=this.game,i=this.tab===`cooking`;e.centered(i?`Kitchen`:`Crafting`,t+128,n);let a=i?r.cookable:r.craftable,o=null;a.forEach((a,s)=>{let c=t+8+s%12*20,l=n+14+Math.floor(s/12)*22,u=r.knows(a),d=r.canMake(a),f=e.slot(c,l,{item:a.id,count:a.count},{dim:!d,selected:d});u||e.b.rect(c+2,l+2,16,16,[.15,.1,.12,.75]),f.hover&&(o=a),f.left&&(r.make(a,e.input.shift?5:1)?Q.play(i?`cook`:`craft`):Q.play(`denied`))}),o&&(this.hoverRecipe=o);let s=this.hoverRecipe,c=n+14+uh(a.length)+6;if(!s){e.text(`Point at a recipe to see what it needs.`,t+8,c,$.inkSoft);return}let l=J(s.id);if(e.text(`${l.name}${s.count>1?` x${s.count}`:``}`,t+8,c),c+=12,rh(l.description,240).slice(0,2).forEach(n=>{e.text(n,t+8,c,$.inkSoft),c+=12}),!r.knows(s)){let n=s.unlock===`start`||s.unlock===`learned`?`Learned from a friend or a shop.`:`Unlocks at ${wp[s.unlock.skill]} level ${s.unlock.level}.`;e.text(n,t+8,c+2,$.bad)}else{c+=2;for(let[n,i]of s.ingredients){let a=r.have(n);e.text(`${rm(n)}  ${Math.min(a,999)}/${i}`,t+8,c,a>=i?$.ink:$.bad),c+=12}e.text(i?`Click to cook one, shift-click for five.`:`Click to craft one, shift-click for five.`,t+8,n+206-12,$.inkSoft)}}skills(e,t,n){let r=this.game;e.centered(`Skills`,t+128,n),Cp.forEach((i,a)=>{let o=n+16+a*37,[s,c]=Vm.skill(i);e.b.draw(`ui2`,s,c,12,12,t+8,o+1);let l=Ep(r.state.xp[i]);e.text(`${wp[i]}  level ${l.level}`,t+24,o),e.b.rect(t+138,o+3,110,6,[.2,.14,.1,.6]),e.b.rect(t+138,o+3,Math.round(110*l.into/l.span),6,Xm(`63c74d`)),rh(Dp[i],228).slice(0,2).forEach((n,r)=>e.text(n,t+24,o+12+r*11,$.inkSoft))})}friends(e,t,n){let r=this.game;e.centered(`Friends`,t+128,n),Zf.forEach((i,a)=>{let o=n+14+a*23,s=r.state.friends[i],c=Zc[i];e.b.draw(`portrait_${i}`,0,0,48,48,t+4,o,20,20,s.met?void 0:[.2,.2,.2,1]),e.text(s.met?c.name:`???`,t+28,o);let l=c.birthday;e.text(s.met?`${l.season[0].toUpperCase()}${l.season.slice(1)} ${l.day}`:``,t+28,o+10,$.inkSoft);for(let n=0;n<10;n++){let[r,i]=Vm.heart(s.points>=(n+1)*250?`full`:s.points>=n*250+125?`half`:`empty`);e.b.draw(`ui2`,r,i,12,12,t+96+n*11,o+1)}let u=s.talkedDay===r.state.day,d=Math.floor((r.state.day-1)/7),f=s.giftWeek===d?s.giftsThisWeek:0;e.text(`${u?`talked`:``}`,t+96,o+11,$.inkSoft),s.met&&e.text(`gifts ${f}/2`,t+248-th(`gifts 0/2`),o+11,$.inkSoft)})}journal(e,t,n){let r=this.game;e.centered(`Journal`,t+128,n);let i=n+16;e.text(`Mayor Thistle's requests`,t+8,i,$.inkSoft),i+=13,Uf.forEach((n,a)=>{let o=a<r.state.quest,s=a===r.state.quest;if(!(a>r.state.quest)){if(e.text(`${o?`[x]`:`[ ]`} ${n.title}`,t+8,i,o?$.inkSoft:$.ink),s){let a=n.progress?.(r);a&&e.text(a,t+248-th(a),i,$.ink),e.text(n.text,t+26,i+11,$.inkSoft),e.text(`Reward: ${oh(n.reward)}`,t+26,i+22,$.inkSoft),i+=22}i+=13}}),r.state.quest>=Uf.length&&(e.text(`All done. Fernbrook thanks you!`,t+8,i,$.inkSoft),i+=13),i+=8,e.text(`Help wanted`,t+8,i,$.inkSoft),i+=13;let a=r.state.board;if(a?.accepted){jm(e.b,a.item,t+8,i-2),e.text(`Bring ${Zc[a.npc].name} ${a.count} ${J(a.item).name} (${r.backpack.count(a.item)}/${a.count})`,t+28,i);let n=a.posted+2-r.state.day;e.text(`${n<=1?`Due today`:`Due tomorrow`}. Reward ${oh(a.reward)}.`,t+28,i+11,$.inkSoft)}else e.text(`Nothing taken on. See the notice board in the town square.`,t+8,i,$.inkSoft);i+=30;let o=zf(r);e.text(`Community hall: ${o}/${If.length} bundles${r.state.greenhouse?`. The greenhouse is restored!`:``}`,t+8,i,$.inkSoft);let s=pd(r);s&&rh(s,240).slice(0,2).forEach((n,r)=>e.text(n,t+8,i+14+r*12,$.inkSoft));let c=gf(r);c&&rh(c,240).slice(0,2).forEach((n,r)=>e.text(n,t+8,i+40+r*12,$.inkSoft))}collection=`shipped`;collections(e,t,n){let r=this.game.state.stats;e.centered(`Collections`,t+128,n),[[`shipped`,`Shipped`],[`fish`,`Fish`],[`minerals`,`Minerals`],[`cooking`,`Cooking`]].forEach(([r,i],a)=>{e.button(t+8+a*61,n+12,58,15,this.collection===r?`[${i}]`:i)&&this.collection!==r&&(this.collection=r,this.info.show(null),Q.play(`select`))});let i=Ah[this.collection],a=e=>(this.collection===`shipped`?r.shipped:this.collection===`fish`?r.caught:this.collection===`minerals`?r.found:r.cooked)[e]??0,o=`${i.filter(e=>a(e)>0).length} / ${i.length}`;e.text(o,t+248-th(o),n+31,$.inkSoft),i.forEach((i,o)=>{let s=t+8+o%12*20,c=n+44+Math.floor(o/12)*20,l=a(i);if(jm(e.b,i,s+2,c+2,l?void 0:[0,0,0,.3]),e.hover(s,c,20,20)){let e=this.collection===`shipped`?`Shipped ${l}`:this.collection===`fish`?`Caught ${l}, biggest ${r.biggestFish[i]??0} in`:this.collection===`minerals`?`Found ${l}`:`Cooked ${l}`;l?this.info.show({item:i,count:1},e):this.info.text(`???`,this.collection===`cooking`?`You haven't cooked this yet.`:`You haven't found this yet.`)}}),this.info.draw(e,t+8,n+206-ch.height)}options(e,t,n){e.centered(`Options`,t+128,n);let r=(n,r,i,a)=>{e.text(n,t+8,a+3),e.button(t+96,a,18,16,`-`,r>0)&&i(Math.max(0,r-.1));for(let n=0;n<10;n++)e.b.rect(t+120+n*9,a+4,7,8,n<Math.round(r*10)?$.good:[.3,.22,.16,.35]);e.button(t+212,a,18,16,`+`,r<1)&&i(Math.min(1,r+.1));let o=`${Math.round(r*100)}%`;e.text(o,t+234,a+3,$.inkSoft)};r(`Music`,Q.musicVolume,e=>Q.setVolumes(e,Q.sfxVolume,Q.ambVolume),n+18),r(`Sounds`,Q.sfxVolume,e=>Q.setVolumes(Q.musicVolume,e,Q.ambVolume),n+38),r(`Ambience`,Q.ambVolume,e=>Q.setVolumes(Q.musicVolume,Q.sfxVolume,e),n+58),e.button(t+96,n+80,134,16,document.fullscreenElement?`Leave fullscreen`:`Fullscreen`)&&Mh(),e.text(`Controls`,t+8,n+104,$.inkSoft),rh(kh,240).forEach((r,i)=>e.text(r,t+8,n+116+i*12,$.inkSoft))}},fh=class extends sh{game;key;info=new ch;constructor(e,t){super(),this.game=e,this.key=t}size(){return[256,12+uh(24)+14+uh(this.game.state.backpack.length)+ch.height+4]}body(e,t,n){let r=this.game,i=r.mapState.objects[this.key];if(!i||i.t!==`placed`||!i.chest){this.close();return}e.centered(`Chest`,t+128,n);let a=lh(e,r,i.chest,t+8,n+14,this.info);a&&r.chestMove(this.key,a.slot,!1)&&Q.play(`pickup`);let o=n+14+uh(24)+2;e.text(`Backpack (click to put in the chest)`,t+8,o,$.inkSoft),o+=12;let s=e=>!J(e.item).tool,c=lh(e,r,r.state.backpack,t+8,o,this.info,{usable:s});if(c){let e=r.state.backpack[c.slot];e&&s(e)&&r.chestMove(this.key,c.slot,!0)&&Q.play(`pickup`)}o+=uh(r.state.backpack.length)+2,this.info.draw(e,t+8,o)}},ph=class e extends sh{game;shop;info=new ch;page=`buy`;scroll=0;note=``;static rows=6;constructor(e,t=`stall`){super(),this.game=e,this.shop=t;let n=lm(e,t)[0];n&&this.showRow(n)}showRow(e){switch(e.kind){case`item`:{let t=ku(e.item),n=t?J(t.produce):null;this.info.show({item:e.item,count:1},n?`Grows into ${n.name} (${oh(n.sellPrice)})`:null);break}case`recipe`:{let t=im(e.item);this.info.show({item:e.item,count:1},t?`Needs ${t.ingredients.map(([e,t])=>`${t} ${rm(e)}`).join(`, `)}`:null);break}case`upgrade`:this.info.show({item:e.item,count:1},`Takes 2 days. Needs 5 ${J(e.bar).name}s.`);break;case`backpack`:this.info.text(`Bigger Backpack`,`Room for 36 stacks instead of 24.`);break;case`building`:this.info.text(e.home===`coop`?`Coop`:`Barn`,`Juniper builds it on your farm in 2 days, for ${oh(e.price)}, ${e.wood} wood and ${e.stone} stone. Room for 4 ${e.home===`coop`?`hens`:`cows`}.`);break;case`animal`:this.info.text(J(e.item).name,J(e.item).description)}}size(){return[256,30+e.rows*20+4+ch.height+14]}body(t,n,r){let i=this.game;t.centered(am[this.shop],n+128,r);let a=this.shop===`stall`?[]:this.shop===`smithy`?[[`buy`,`Buy`],[`sell`,`Sell`],[`geodes`,`Geodes`]]:[[`buy`,`Buy`],[`sell`,`Sell`]];this.shop===`stall`&&t.centered(`Take what you need. Leave the coins in the box.`,n+128,r+14,$.inkSoft),a.forEach(([e,i],a)=>{let o=n+8+a*62;t.button(o,r+12,58,15,this.page===e?`[${i}]`:i)&&this.page!==e&&(this.page=e,this.note=``,this.info.show(null),Q.play(`select`))});let o=r+30;this.page===`buy`?this.buyPage(t,n,o):this.packPage(t,n,o);let s=o+e.rows*20+4;this.note?t.text(this.note,n+8,s,$.ink):this.info.draw(t,n+8,s),t.text(`You have ${oh(i.state.money)}`,n+8,s+ch.height+2);let c=this.page===`buy`?`Shift-click to buy 5.`:this.page===`sell`?`Shift-click to sell one.`:`25g a geode.`;t.text(c,n+248-th(c),s+ch.height+2,$.inkSoft)}buyPage(t,n,r){let i=this.game,a=lm(i,this.shop),o=e.rows;t.hover(n,r,256,o*20)&&t.input.wheel!==0&&(this.scroll+=t.input.wheel>0?1:-1),this.scroll=Math.max(0,Math.min(this.scroll,a.length-o)),a.length===0&&t.centered(`Nothing for sale this season.`,n+128,r+40,$.inkSoft);let s=a.length>o,c=s?226:240;if(a.slice(this.scroll,this.scroll+o).forEach((e,a)=>{let o=n+8,s=r+a*20;t.hover(o,s,c,19)&&(this.showRow(e),this.note=``),t.button(o,s,c,19,``)&&this.buy(t,e);let l=i.state.money>=e.price,u=``,d=``,f=!0;switch(e.kind){case`item`:{jm(t.b,e.item,o+3,s+2),u=J(e.item).name;let n=ku(e.item);n&&(d=`${n.daysToGrow} days`);break}case`recipe`:jm(t.b,e.item,o+3,s+2),u=`${J(e.item).name} recipe`;break;case`upgrade`:jm(t.b,e.item,o+3,s+2),u=J(e.item).name,d=`+5 ${J(e.bar).name}`,f=i.backpack.count(e.bar)>=5;break;case`building`:jm(t.b,e.item,o+3,s+2),u=e.home===`coop`?`Coop`:`Barn`,d=`+${e.wood}w ${e.stone}s`,f=i.backpack.count(`Wood`)>=e.wood&&i.backpack.count(`Stone`)>=e.stone;break;case`animal`:{jm(t.b,e.item,o+3,s+2),u=J(e.item).name;let n=ou(i.state.ranch,e.animal);d=`${n}/4 home`,f=n<4;break}case`backpack`:{let[e,n]=Vm.tab(0);t.b.draw(`ui2`,e,n,16,16,o+3,s+2),u=`Bigger Backpack`,d=`36 slots`;break}}t.text(u,o+22,s+4),d&&t.text(d,o+168-th(d),s+4,f?$.inkSoft:$.warn);let p=oh(e.price);t.text(p,o+c-6-th(p),s+4,l?$.ink:$.warn)}),s){let e=n+238;t.button(e,r,12,19,`^`,this.scroll>0)&&this.scroll--,t.button(e,r+(o-1)*20,12,19,`v`,this.scroll<a.length-o)&&this.scroll++;let i=(o-2)*20-4,s=Math.max(8,Math.floor(i*o/a.length)),c=r+22+Math.floor((i-s)*this.scroll/Math.max(1,a.length-o));t.b.rect(e+4,c,4,s,$.inkSoft)}}buy(e,t){let n=this.game,r=n.events.length,i=pm(n,t,t.kind===`item`&&e.input.shift?5:1),a=n.events.slice(r).reverse().find(e=>e.kind===`denied`||e.kind===`gained`&&!e.item);this.note=a?.text??``,Q.play(i?t.kind===`item`?`buy`:`shop_bell`:`denied`)}packPage(e,t,n){let r=this.game,i=this.page===`geodes`,a=e=>i?J(e.item).kind===`geode`:um(this.shop,J(e.item));e.text(i?`Bram cracks geodes open for 25g.`:mh[this.shop],t+8,n,$.inkSoft);let o=lh(e,r,r.state.backpack,t+8,n+14,this.info,{usable:a});if(!o||o.right)return;let s=r.state.backpack[o.slot];if(!s||!a(s)){s&&Q.play(`denied`);return}if(i){let e=r.events.length,t=hm(r,o.slot);t?(Q.play(`geode`),this.note=`Inside: ${J(t).name}!`):(Q.play(`denied`),this.note=r.events.slice(e).find(e=>e.kind===`denied`)?.text??``);return}let c=il(s),l=mm(r,this.shop,o.slot,e.input.shift);l>0&&(Q.play(`coin`),this.note=`Sold ${e.input.shift?`one `:``}${c} for ${oh(l)}.`)}},mh={stall:``,store:`Hazel buys crops, forage, artisan goods and seeds.`,smithy:`Bram buys ore, coal, stone, minerals and gems.`,carpenter:`Juniper buys wood, hardwood, stone and sap.`,saloon:`Marigold buys cooked dishes.`,ranch:`Wren buys eggs, milk and cheese.`,fish_shop:`Ollie buys fish.`},hh={Growth:Xm(`4f9a3a`),Rain:Xm(`3d6fb8`),Warmth:Xm(`c2562a`),Calm:Xm(`7b5aa6`),Light:Xm(`b08a1c`),Luck:Xm(`2f8a6a`),"?":$.inkSoft},gh=class extends sh{game;key;info=new ch;picks=[];constructor(e,t){super(),this.game=e,this.key=t,this.info.text(`Nell's Cauldron`,`Choose two or three different ingredients. What they have in common decides the brew.`)}size(){return[256,88+uh(this.game.state.backpack.length)+4+ch.height]}body(e,t,n){let r=this.game;e.centered(`Nell's Cauldron`,t+128,n),this.picks.map(e=>r.state.backpack[e]).some(e=>!e||!Lu(e.item))&&(this.picks=[]);for(let i=0;i<3;i++){let a=t+8+i*62,o=n+14,s=this.picks[i],c=s===void 0?null:r.state.backpack[s];if(e.slot(a,o,c?{item:c.item,count:1,quality:c.quality}:null).left&&s!==void 0&&(this.picks.splice(i,1),Q.play(`select`)),c){let[t,n]=Gu(r,c.item);e.text(t,a+22,o+1,hh[t]),e.text(n,a+22,o+11,hh[n])}}let i=this.picks.map(e=>r.state.backpack[e].item),a=i.length>=2&&i.every(e=>(r.state.magic.known[e]??0)>=2),o=i.length<2?`Add two or three ingredients.`:a?`It should make: ${J(Vu(i)).name}`:`What will it make? Only one way to find out.`;if(e.text(o,t+8,n+40,$.inkSoft),e.button(t+188,n+52,60,16,`Brew`,i.length>=2)){if(Ju(r,this.key,this.picks)){Q.play(`machine`),this.close();return}Q.play(`denied`)}e.text(`Ingredients in your backpack:`,t+8,n+56,$.inkSoft);let s=n+74,c=lh(e,r,r.state.backpack,t+8,s,this.info,{usable:e=>Lu(e.item)});if(c&&!c.right){let e=r.state.backpack[c.slot];e&&Lu(e.item)&&!this.picks.includes(c.slot)&&!i.includes(e.item)&&this.picks.length<3?(this.picks.push(c.slot),Q.play(`select`)):e&&Q.play(`denied`)}this.info.draw(e,t+8,s+uh(r.state.backpack.length)+4)}},_h=class extends sh{game;page=`note`;constructor(e){super(),this.game=e}size(){return[296,214]}body(e,t,n){let r=this.game;e.centered(`Nell's Notebook`,t+148,n),[[`note`,`Nell's Note`],[`ingredients`,`Ingredients`],[`brews`,`Brews`]].forEach(([r,i],a)=>{e.button(t+8+a*94,n+12,90,15,this.page===r?`[${i}]`:i)&&this.page!==r&&(this.page=r,Q.play(`select`))});let i=n+32,a=``;if(this.page===`note`){let r=rh(vh(),280),a=Math.ceil(r.length/13);this.notePage=Math.min(this.notePage,a-1),r.slice(this.notePage*13,this.notePage*13+13).forEach((n,r)=>e.text(n,t+8,i+r*12)),a>1&&(e.button(t+228,n+196,30,16,`<`,this.notePage>0)&&this.notePage--,e.button(t+262,n+196,30,16,`>`,this.notePage<a-1)&&this.notePage++,e.text(`${this.notePage+1}/${a}`,t+196,n+199,$.inkSoft))}else this.page===`ingredients`?(Iu.forEach((n,o)=>{let s=t+8+o%2*144,c=i+Math.floor(o/2)*24,l=(r.state.magic.known[n]??0)>0||r.backpack.count(n)>0||r.state.magic.notebook;jm(e.b,n,s,c+2,l?void 0:[0,0,0,.3]),e.text(J(n).name,s+20,c);let[u,d]=Gu(r,n);e.text(u,s+20,c+11,hh[u]),e.text(d,s+66,c+11,hh[d]),e.hover(s,c,140,22)&&(a=ad.herbs[n]??J(n).description)}),a||=`Eat an ingredient to learn its first aspect; brew with it to learn both. Point at an herb for Nell's notes.`):(Bu.forEach((n,o)=>{let s=i+o*14,c=r.state.magic.brewed.includes(n);jm(e.b,n,t+8,s-2,c?void 0:[0,0,0,.3]),e.text(c?J(n).name:`???`,t+28,s+1),e.hover(t+8,s-2,280,14)&&(a=c?ad.brews[n]??J(n).description:`You haven't brewed this yet.`)}),a||=`Point at a brew you've made for Nell's note on it.`);a&&rh(a,280).slice(0,3).forEach((r,i)=>e.text(r,t+8,n+178+i*12,$.inkSoft))}notePage=0};function vh(){return ad.intro}var yh=class extends sh{game;constructor(e){super(),this.game=e}get floors(){return zl(this.game)}size(){return[212,16+Math.ceil(this.floors.length/4)*22+4]}body(e,t,n){let r=this.game;e.centered(`Mine Elevator`,t+106,n);let i=r.state.map===`mine`?r.state.mine.floor:0;this.floors.forEach((a,o)=>{let s=t+4+o%4*52,c=n+16+Math.floor(o/4)*22;e.button(s,c,48,18,a===0?`Top`:String(a),a!==i)&&(this.close(),r.rideElevator(a))})}},bh=class extends sh{letter;lines;inside;constructor(e){super(),this.letter=e,this.lines=rh(e.text,280),this.inside=ru(e)}size(){return[296,14+this.lines.length*12+(this.inside?30:6)+18]}body(e,t,n){e.text(`From ${this.letter.from}`,t+8,n,$.inkSoft);let r=n+14;for(let n of this.lines)e.text(n,t+8,r),r+=12;if(this.inside){r+=6;let n=this.letter.items??[];n.forEach(([n],i)=>jm(e.b,n,t+8+i*18,r)),e.text(`Inside: ${this.inside}`,t+8+n.length*18+(n.length?4:0),r+3,$.inkSoft),r+=24}else r+=6;e.button(t+296-40,r,40,16,`OK`)&&this.close()}},xh=class extends sh{game;constructor(e){super(),this.game=e}size(){return[256,150]}body(e,t,n){let r=this.game,i=r.state.board;e.centered(`Town Notice Board`,t+128,n);let a=Wf(r);if(!i)e.centered(`Nothing posted today. Check back tomorrow.`,t+128,n+50,$.inkSoft);else{e.panel(t+8,n+16,240,84,!0),jm(e.b,i.item,t+18,n+26),rh(i.text,196).slice(0,4).forEach((r,i)=>e.text(r,t+42,n+26+i*12,$.paper));let a=`Reward: ${oh(i.reward)}, and ${Zc[i.npc].name}'s thanks`;if(e.text(a,t+18,n+82,$.gold),i.accepted){let a=i.posted+2-r.state.day,o=r.backpack.count(i.item);e.text(`Accepted. ${a<=1?`Last day today!`:`Due tomorrow.`}  You have ${o}/${i.count}.`,t+8,n+106),e.text(`Talk to ${Zc[i.npc].name} to hand them over.`,t+8,n+118,$.inkSoft)}else e.button(t+256-70,n+104,62,16,`Accept`)&&Yf(r)&&Q.play(`quest`)}a&&e.text(`Mayor's note: ${a.title}. (See your journal.)`,t+8,n+136,$.inkSoft)}},Sh=class extends sh{game;info=new ch;selected;note=``;constructor(e){super(),this.game=e,this.selected=(If.find(t=>!Rf(e,t))??If[0]).id}size(){return[256,99+uh(this.game.state.backpack.length)+4+ch.height]}body(e,t,n){let r=this.game;e.centered(`Community Hall`,t+128,n),If.forEach((i,a)=>{let o=t+8+a%3*81,s=n+13+Math.floor(a/3)*19,c=i.name.split(` `)[0];e.button(o,s,78,17,i.id===this.selected?`[${c}]`:c)&&this.selected!==i.id&&(this.selected=i.id,this.note=``,Q.play(`select`)),Rf(r,i)&&Mm(e.b,2,o+68,s+4)});let i=If.find(e=>e.id===this.selected),a=Lf(r,i),o=n+52;e.text(`${i.name} Bundle`,t+8,o-1),o+=11,i.items.forEach((n,r)=>{e.slot(t+8+r*20,o,{item:n,count:1},{dim:!a.includes(n)}).hover&&this.info.show({item:n,count:1},a.includes(n)?`Given`:null)});let s=Rf(r,i)?`Complete!`:`${a.length}/${i.need} needed`;e.text(s,t+248-th(s),o+4,Rf(r,i)?$.good:$.ink),o+=24,e.text(`Reward: ${i.reward[1]} ${J(i.reward[0]).name}`,t+8,o,$.inkSoft),o+=14;let c=lh(e,r,r.state.backpack,t+8,o,this.info,{usable:e=>Bf(r,i,e.item)});if(c&&!c.right){let e=r.state.backpack[c.slot];e&&Vf(r,i.id,c.slot)?(Q.play(Rf(r,i)?`bundle`:`place`),this.note=Rf(r,i)?`${i.name} Bundle complete! You got ${i.reward[1]} ${J(i.reward[0]).name}.`:`Gave ${J(e.item).name}.`):e&&Q.play(`denied`)}o+=uh(r.state.backpack.length)+4,this.note?e.text(this.note,t+8,o):this.info.draw(e,t+8,o)}},Ch=class extends sh{game;info=new ch;constructor(e){super(),this.game=e,this.info.show(e.state.backpack.find(e=>e&&Kc(J(e.item)))??null)}size(){return[256,12+uh(this.game.state.backpack.length)+ch.height+12+22+24]}body(e,t,n){let r=this.game;e.centered(`Shipping Bin`,t+128,n);let i=lh(e,r,r.state.backpack,t+8,n+14,this.info,{usable:e=>Kc(J(e.item))});i&&!i.right&&r.ship(i.slot,+!!e.input.shift)&&Q.play(`ship`);let a=n+14+uh(r.state.backpack.length)+2;this.info.draw(e,t+8,a),a+=ch.height+2,e.text(`In the bin (paid overnight):`,t+8,a,$.inkSoft),a+=12;let o=r.state.bin,s=Math.max(0,o.length-12);for(let n=s;n<o.length;n++){let i=e.slot(t+8+(n-s)*20,a,o[n]);i.hover&&this.info.show(o[n]),i.left&&n===o.length-1&&r.unship(n)&&Q.play(`pickup`)}a+=22,e.text(`Worth ${oh(r.binValue)}`,t+8,a),e.text(`Click to ship a stack, shift-click for one.`,t+8,a+12,$.inkSoft)}},wh=class extends sh{choices;lines;big;width;constructor(e,t=[[`OK`,()=>{}]]){super(),this.choices=t,this.dim=!1,this.big=e.length>160,this.width=this.big?340:260,this.lines=rh(e,this.width)}choose(e){this.close(),this.choices[Math.min(Math.max(e,0),this.choices.length-1)][1]()}size(){return[this.width,this.lines.length*12+22]}position(e,t){return this.big?super.position(e,t):[Math.floor((480-e)/2),204-Math.floor(t/2)-4]}body(e,t,n){this.lines.forEach((r,i)=>e.text(r,t,n+i*12));let r=t+this.width,i=n+this.lines.length*12+4;for(let t=this.choices.length-1;t>=0;t--){let n=this.choices[t][0],a=th(n)+16;r-=a,e.button(r,i,a,16,n)&&this.choose(t),r-=6}}},Th=class extends sh{game;npc;happy;lines;constructor(e,t,n,r){super(),this.game=e,this.npc=t,this.happy=r,this.dim=!1,this.lines=rh(n,262)}size(){return[340,Math.max(70,this.lines.length*12+34)]}position(e,t){return[Math.floor((480-e)/2),270-t-36]}body(e,t,n){e.b.sheet(`ui_portrait`,t,n),e.b.draw(`portrait_${this.npc}`,this.happy?48:0,0,48,48,t+4,n+4);let r=Zc[this.npc];e.centered(r?.name??Yd[this.npc]??``,t+28,n+58);let i=this.game.state.friends[this.npc]?.points??0;this.lines.forEach((r,i)=>e.text(r,t+70,n+2+i*12));let a=n+Math.max(70,this.lines.length*12+34)-14;if(r)for(let n=0;n<10;n++){let[r,o]=Vm.heart(i>=(n+1)*250?`full`:i>=n*250+125?`half`:`empty`);e.b.draw(`ui2`,r,o,12,12,t+70+n*13,a)}let o=th(`OK`)+16;e.button(t+340-o,a-2,o,16,`OK`)&&this.close(),e.clicked(t-8,n-8,356,200)&&this.close()}},Eh=class extends sh{summary;onContinue;rows;notes;constructor(e,t){super(),this.summary=e,this.onContinue=t,this.canDismiss=!1;let n=new Map;for(let t of e.shipped){let e=`${t.item}|${t.quality??0}|${t.source??``}`,r=n.get(e);r?r.count+=t.count:n.set(e,{...t})}this.rows=[...n.values()].slice(0,8),this.notes=[...e.levelUps.map(e=>`${wp[e.skill]} reached level ${e.level}!`),...e.notes].flatMap(e=>rh(e,260))}continue(){this.close(),this.onContinue()}size(){let e=Math.max(1,this.rows.length);return[260,14+(this.summary.passedOut?12:0)+e*18+12+this.notes.length*12+14+20]}body(e,t,n){let r=this.summary;e.centered(`Day ${r.day} is over`,t+130,n);let i=n+14;r.passedOut&&(e.text(`You passed out and woke up groggy.`,t,i,$.bad),i+=12),this.rows.length===0&&(e.text(`Nothing was shipped today.`,t,i+2,$.inkSoft),i+=18);for(let n of this.rows){jm(e.b,n.item,t,i),e.text(`${il(n)}${n.quality?[``,` (silver)`,` (gold)`][n.quality]:``} x${n.count}`,t+20,i+2);let r=oh(n.count*rl(n));e.text(r,t+260-th(r),i+2),i+=18}e.centered(`Earned ${oh(r.total)}`,t+130,i),i+=12;for(let n of this.notes)e.text(n,t,i,/level \d+!/.test(n)?$.good:$.inkSoft),i+=12;e.centered({rainy:`It's raining today: the crops are watered.`,stormy:`A storm is rolling in. The crops are watered.`,snowy:`Snow is falling.`,windy:`It's a windy day.`,sunny:`Today looks sunny.`}[r.weather]??``,t+130,i,$.inkSoft),i+=14;let a=`Good morning!`,o=th(a)+16;e.button(t+Math.floor((260-o)/2),i,o,16,a)&&this.continue()}},Dh=`WASD / arrows: walk     Left click / C: use the held tool
Right click / X / F: harvest, talk, open, use machines
1-9, 0, -, = or mouse wheel: toolbar     E: menu (craft)
Fishing: hold to charge, release to cast,
click when it bites, then hold to raise the bar.`,Oh=`Gamepad: stick walks, X uses the tool, A talks and opens, B or Y: menu, LB/RB: toolbar, Start: pause. In menus the stick moves a pointer and A clicks.`,kh=`Keys: WASD walk, C or left click uses the tool, X, F or right click talks and opens, E menu, 1-9 toolbar, Esc pause.
`+Oh,Ah={shipped:Gc.filter(e=>[`crop`,`forage`,`artisan`,`animal`].includes(e.kind)&&Kc(e)).map(e=>e.id),fish:wc.map(e=>e.item),minerals:Gc.filter(e=>e.kind===`mineral`).map(e=>e.id),cooking:tm.map(e=>e.id)},jh=class extends sh{onTitle;lines=[...Dh.split(`
`),...rh(Oh,280)];constructor(e){super(),this.onTitle=e}size(){return[280,112+this.lines.length*12+4]}body(e,t,n){e.centered(`Paused`,t+140,n);let r=t+60,i=n+14;e.button(r,i,160,16,`Resume`)&&this.close(),i+=20,e.button(r,i,160,16,`Music: ${Math.round(Q.musicVolume*100)}%`)&&Q.setVolumes(Q.musicVolume>=.95?0:Q.musicVolume+.25,Q.sfxVolume),i+=20,e.button(r,i,160,16,`Sounds: ${Math.round(Q.sfxVolume*100)}%`)&&Q.setVolumes(Q.musicVolume,Q.sfxVolume>=.95?0:Q.sfxVolume+.2),i+=20,e.button(r,i,160,16,document.fullscreenElement?`Leave fullscreen`:`Fullscreen`)&&Mh(),i+=20,e.button(r,i,160,16,`Save and go to title`)&&(this.close(),this.onTitle()),i+=22,this.lines.forEach((n,r)=>e.text(n,t,i+r*12,$.inkSoft))}};function Mh(){document.fullscreenElement?document.exitFullscreen():document.documentElement.requestFullscreen?.()}var Nh=class e{farm;script;result=null;dt=0;static days=5;static patch=[0,1,2,3,4,5].map(e=>[14+e,16]);constructor(e){this.farm=e,this.script=this.run()}get g(){return this.farm.game}get v(){return this.farm.virtual}update(e){this.result||(this.dt=e,this.script.next(e))}*run(){for(yield*this.wait(1),this.farm.menu instanceof wh&&this.farm.menu.choose(0);this.g.state.day<=e.days;)yield*this.work(),yield*this.fish(2),yield*this.shipEverything(),yield*this.sleep();let t=this.g.state;this.result=`SMOKE ok days=${t.day-1} money=${t.money} crops=${t.stats.cropsHarvested} fish=${t.stats.fishCaught} earned=${t.stats.totalEarned}`,console.log(this.result)}*work(){for(let[t,n]of e.patch){yield*this.walkTo(t,n-1),this.g.state.facing=X.Down;let e=this.g.soilAt(t,n);e?.crop&&ju(e.crop)&&(this.v.interactPressed=!0,yield*this.wait(.4)),this.g.soilAt(t,n)||(yield*this.useWith(`Hoe`)),this.g.soilAt(t,n)?.crop===null&&this.g.backpack.count(`ParsnipSeeds`)>0&&(yield*this.useWith(`ParsnipSeeds`)),this.g.soilAt(t,n)&&!this.g.soilAt(t,n).watered&&(this.g.state.canWater===0&&(yield*this.walkTo(36,18),this.g.state.facing=X.Down,yield*this.useWith(`WateringCan`),yield*this.walkTo(t,n-1),this.g.state.facing=X.Down),yield*this.useWith(`WateringCan`))}}*fish(e){yield*this.walkTo(36,18),this.g.state.facing=X.Down,this.select(`FishingRod`);for(let t=0;t<e;t++){this.v.usePressed=!0,this.v.useHeld=!0,yield*this.wait(.5),this.v.useHeld=!1;let e=30;for(;this.g.fishing.active&&e>0;){e-=this.dt;let t=this.g.fishing;t.phase===`biting`&&(this.v.usePressed=!0);let n=t.minigame;this.v.useHeld=t.phase===`reeling`&&!!n&&n.barPos+n.barHeight/2+n.barSpeed*6>n.fishPos+G.fishHeight/2,yield}this.v.useHeld=!1,yield*this.wait(.3)}}*shipEverything(){let e=this.g.map.get(`bin`);yield*this.walkTo(e.x,e.y+1),this.g.state.facing=X.Up,this.v.interactPressed=!0,yield*this.wait(.3);for(let e=0;e<G.backpackSlots;e++){let t=this.g.state.backpack[e];t&&[`crop`,`fish`,`junk`].includes(J(t.item).kind)&&this.g.ship(e)}yield*this.wait(.3),this.farm.menu?.close(),yield*this.wait(.2)}*sleep(){yield*this.walkTo(ml.x,ml.y),this.g.state.facing=X.Up,this.v.interactPressed=!0,yield*this.wait(.6),yield*this.walkTo(3,3),this.g.state.facing=X.Left,this.v.interactPressed=!0,yield*this.wait(.3),this.farm.menu instanceof wh&&this.farm.menu.choose(1);let e=10;for(;!(this.farm.menu instanceof Eh)&&e>0;)e-=this.dt,yield;yield*this.wait(.5),this.farm.menu instanceof Eh&&this.farm.menu.continue(),yield*this.wait(1),yield*this.walkTo(5,7),this.v.moveY=1,yield*this.wait(.4),this.v.moveY=0,yield*this.wait(.5)}select(e){let t=this.g.state.backpack.findIndex(t=>t?.item===e);t>=G.toolbarSlots&&(this.g.backpack.move(t,G.toolbarSlots-1),t=G.toolbarSlots-1),t>=0&&this.farm.selectSlot(t)}*useWith(e){this.select(e),this.v.usePressed=!0,yield*this.wait(.6)}*wait(e){let t=0;for(;t<e;)t+=this.dt,yield}*walkTo(e,t){let n=this.findPath(this.g.playerTile,[e,t]);if(!n)console.error(`autopilot: no path to ${e},${t}`);else{for(let[e,t]of n){let n=e*16+8,r=t*16+12,i=3;for(;i>0;){i-=this.dt;let e=n-this.g.state.playerX,t=r-this.g.state.playerY;if(Math.hypot(e,t)<3)break;Math.abs(e)>2?[this.v.moveX,this.v.moveY]=[Math.sign(e),0]:[this.v.moveX,this.v.moveY]=[0,Math.sign(t)],yield}this.v.moveX=this.v.moveY=0}yield}}findPath(e,t){let n=(e,t)=>`${e},${t}`,r=new Map([[n(...e),e]]),i=[e];for(;i.length;){let[e,a]=i.shift();if(e===t[0]&&a===t[1])break;for(let[t,o]of[[e+1,a],[e-1,a],[e,a+1],[e,a-1]])!r.has(n(t,o))&&this.g.walkable(t,o)&&(r.set(n(t,o),[e,a]),i.push([t,o]))}if(!r.has(n(...t)))return null;let a=[];for(let i=t;i[0]!==e[0]||i[1]!==e[1];i=r.get(n(...i)))a.push(i);return a.reverse()}},Ph=class{game;toasts=[];heldNameTime=0;lastSelected=-1;shownEnergy=1;time=0;constructor(e){this.game=e}toast(e,t=null,n=$.paper){for(this.toasts.push({lines:rh(e,140),icon:t,color:n,age:0});this.toasts.length>4;)this.toasts.shift()}draw(e,t,n,r){this.time+=t;let i=this.game.state,a=e.b;e.panel(368,4,108,48),e.text(this.game.dayText,376,8),Bm(a,this.game.wet||i.weather===`snowy`?zm.Rain:i.minutes>=1140?zm.Moon:zm.Sun,456,9),a.rect(375,22,94,1,[$.inkSoft[0],$.inkSoft[1],$.inkSoft[2],.5]),e.text(_m(i.minutes),376,21,i.minutes>=1440?$.bad:$.ink),Bm(a,zm.Coin,375,36),e.text(oh(i.money),389,35),[...new Set(i.buffs.filter(e=>e.until>this.game.now).map(e=>e.type))].forEach((e,t)=>{let[n,r]=Vm.buff(e);a.draw(`ui2`,n,r,12,12,462-t*14,54)}),this.shownEnergy+=Math.max(-t*1.5,Math.min(t*1.5,i.energy/G.maxEnergy-this.shownEnergy)),a.sheet(`ui_energy`,458,192);let o=this.shownEnergy,s=Math.round(58*o),c=Xm(o>.5?`63c74d`:o>.2?`f2c94c`:`e45b4b`);if(a.rect(462,254-s,8,s,c),s>0&&a.rect(462,254-s,8,1,[Math.min(1,c[0]+.25),Math.min(1,c[1]+.25),Math.min(1,c[2]+.25),1]),e.hover(458,192,16,72)){let t=`Energy ${i.energy}/${G.maxEnergy}`,n=th(t)+8;a.rect(458-n-3,218,n,14,[.1,.07,.08,.85]),e.text(t,458-n+1,219,$.paper)}let l=this.game.maxHealth;if(i.map===`mine`||i.map===`minehub`||i.health<l){a.sheet(`ui_hp`,438,192);let t=Math.round(58*i.health/l);if(a.rect(442,254-t,8,t,Xm(`e0614f`)),t>0&&a.rect(442,254-t,8,1,Xm(`ff9d8a`)),e.hover(438,192,16,72)){let t=`Health ${i.health}/${l}`,n=th(t)+8;a.rect(438-n-3,218,n,14,[.1,.07,.08,.85]),e.text(t,438-n+1,219,$.paper)}}if(i.map===`mine`){let t=`Floor ${i.mine.floor}`;e.panel(4,4,th(t)+16,20),e.text(t,12,8)}e.panel(117,242,246,26);let u=-1;for(let t=0;t<G.toolbarSlots;t++){let r=e.slot(120+t*20,245,i.backpack[t],{selected:t===i.selected,canWater:i.canWater,canMax:this.game.canCapacity});n&&r.left&&(u=t)}n&&e.block(117,242,246,26),i.selected!==this.lastSelected&&(this.lastSelected=i.selected,this.heldNameTime=1.6),this.heldNameTime-=t;let d=this.game.held;if(d&&this.heldNameTime>0){let t=Math.min(1,this.heldNameTime/.4);e.centered(J(d.item).name,240,226,[$.paper[0],$.paper[1],$.paper[2],t],[$.ink[0],$.ink[1],$.ink[2],t])}return this.drawToasts(e,t),this.drawMinigame(e,r),u}drawToasts(e,t){for(let e of this.toasts)e.age+=t;for(let e=this.toasts.length-1;e>=0;e--)this.toasts[e].age>3.1&&this.toasts.splice(e,1);let n=236;for(let t=this.toasts.length-1;t>=0;t--){let r=this.toasts[t],i=Math.max(...r.lines.map(th)),a=r.icon?19:0,o=i+a+6,s=Math.max(r.icon?16:0,r.lines.length*12)+6;n-=s+2;let c=r.age<2.6?1:Math.max(0,1-(r.age-2.6)/.5),l=e.b,u=l.tint;l.tint=[1,1,1,c],e.panel(4,n,Math.max(o,16),Math.max(s,16),!0),r.icon&&jm(l,r.icon,7,n+3),r.lines.forEach((t,i)=>e.text(t,7+a,n+3+i*12+(r.icon&&r.lines.length===1?2:0),r.color)),l.tint=u}}drawMinigame(e,[t,n]){let r=this.game.fishing,i=r.minigame;if(r.phase!==`reeling`||!i)return;let a=t+22;a+40>454&&(a=t-22-40);let o=Math.round(Math.min(Math.max(n-100,4),86)),s=i.fishInBar?0:Math.round(Math.sin(this.time*60)*.6);a=Math.round(a)+s;let c=e.b;c.sheet(`ui_fishing`,a,o);let l=140/G.channelHeight,u=o+6+i.barPos*l,d=Math.max(6,i.barHeight*l),f=i.fishInBar?[1,1,1,1]:[1,1,1,.75];c.draw(`ui_catchbar`,0,0,16,3,a+6,u,16,3,f),c.draw(`ui_catchbar`,0,3,16,2,a+6,u+3,16,d-6,f),c.draw(`ui_catchbar`,0,5,16,3,a+6,u+d-3,16,3,f);let p=o+6+i.fishPos*l-2;if(Bm(c,zm.Fish,a+8+Math.round(Math.sin(this.time*14)*.7),Math.round(p)),i.treasurePos!==null){let[e,t]=Vm.treasure(i.treasureCaught),n=i.treasureCaught?o+6+2:Math.round(o+6+i.treasurePos*l-2);c.draw(`ui2`,e,t,12,12,a+8,n),i.treasureCaught||(c.rect(a+7,n+13,14,2,[.1,.08,.1,.7]),c.rect(a+7,n+13,Math.round(14*i.treasureProgress),2,Xm(`ffd25e`)))}let m=i.progress,h=Math.round(140*m),g=Xm(m<.33?`e45b4b`:m<.66?`f2c94c`:`63c74d`);c.rect(a+28,o+6+140-h,6,h,g)}},Fh=class extends sh{game;lines;i=0;box;constructor(e,t){super(),this.game=e,this.lines=t,this.dim=!1,this.canDismiss=!1,this.box=this.make()}make(){let e=this.lines[this.i];return Q.play(`talk_${1+e.text.length%3}`),new Th(this.game,e.who,e.text,!!e.happy)}size(){return[0,0]}body(){}draw(e){(e.input.keyPressed(`interact`)||e.input.keyPressed(`use`))&&this.box.close(),this.box.closed||this.box.draw(e),this.box.closed&&(this.i++,this.i>=this.lines.length?this.close():this.box=this.make())}},Ih=class extends sh{game;world;scene;step=-1;t=0;box=null;walk=null;queue;constructor(e,t,n){super(),this.game=e,this.world=t,this.scene=n,this.dim=!1,this.canDismiss=!1,this.queue=[...n.steps],yp(e,n),Q.play(`quest`,-8),this.next()}size(){return[0,0]}body(){}update(e){let t=this.queue[this.step];t&&(this.t+=e,`wait`in t&&this.t>=t.wait||`emote`in t&&this.t>=.9?this.next():`move`in t&&this.walk&&this.moveAlong(e))}draw(e){this.box&&((e.input.keyPressed(`interact`)||e.input.keyPressed(`use`))&&(this.box instanceof wh&&`choice`in(this.queue[this.step]??{})||this.box.close()),this.box.closed||this.box.draw(e),this.box?.closed&&(this.box=null,this.next()))}next(){this.step++,this.t=0,this.walk=null;let e=this.queue[this.step];if(!e)this.close();else if(`say`in e)this.box=new Th(this.game,e.say,e.text,e.mood===`happy`),Q.play(`talk_${1+e.text.length%3}`);else if(`narrate`in e)this.box=new wh(e.narrate);else if(`choice`in e)this.box=new wh(e.choice,e.options.map(t=>[t.label,()=>this.answer(e.who,t)]));else if(`face`in e)this.face(e.face,gp[e.dir]),this.next();else if(`emote`in e){let[t,n]=xp(this.game,e.who),r={heart:Um.emoteHeart,alert:Um.emoteAlert,question:Um.emoteQuestion,note:Um.emoteNote}[e.emote];this.world().play(t,n-38,r,1,1.1,void 0,`fx2`),Q.play(e.emote===`heart`?`heart`:`select`,-4)}else if(`move`in e){let t=this.game,n=hp[this.scene.place],[r,i]=vp(t,n.x+e.dx,n.y+e.dy),[a,o]=xp(t,e.move),s=t.findPath(t.state.map,[Math.floor(a/16),Math.floor((o-3)/16)],[r,i]);!s||!s.length?this.next():this.walk={who:e.move,path:s}}}answer(e,t){Sp(this.game,e,t.points),this.queue.splice(this.step+1,0,{say:e,text:t.reply,mood:t.mood??(t.points>0?`happy`:`neutral`)}),t.points>=40&&window.setTimeout(()=>Q.play(`heart`,-4),300)}face(e,t){let[n,r]=xp(this.game,e);bp(this.game,e,n,r,t)}moveAlong(e){let t=this.walk,n=this.game,[r,i]=t.path[0],a=r*16+8,o=i*16+12,[s,c]=xp(n,t.who),l=a-s,u=o-c,d=Math.hypot(l,u),f=44*e,p=Math.abs(l)>Math.abs(u)?l<0?X.Left:X.Right:u<0?X.Up:X.Down;d<=f?(bp(n,t.who,a,o,p),t.path.shift()):bp(n,t.who,s+l/d*f,c+u/d*f,p),t.who===`player`?this.world().walking=t.path.length>0:n.state.npcs[t.who].path=t.path.length?[...t.path]:[],t.path.length||this.next()}},Lh={grass:[128,16],water:[256,64],path:[64,64],soil:[128,64],crops:[112,128],items:[128,80],player:[448,128],house:[96,96],shipping_bin:[64,32],seed_stall:[48,48],tree_oak:[96,64],tree_pine:[96,64],bush:[64,32],fence:[64,128],dock:[32,48],props:[128,32],props_tall:[128,32],fx:[128,48],light:[64,64],ui_panel:[32,32],ui_panel_dark:[32,32],ui_slot:[60,20],ui_button:[48,16],ui_icons:[96,24],ui_energy:[16,72],ui_fishing:[40,152],ui_catchbar:[16,8],ui_cursor:[32,16],logo:[192,64],font:[128,72],grass_summer:[128,16],grass_fall:[128,16],grass_winter:[128,16],tree_oak_summer:[96,64],tree_oak_fall:[96,64],tree_oak_winter:[96,64],tree_pine_summer:[96,64],tree_pine_fall:[96,64],tree_pine_winter:[96,64],bush_summer:[64,32],bush_fall:[64,32],bush_winter:[64,32],props_summer:[128,32],props_fall:[128,32],props_winter:[128,32],path_winter:[64,64],soil_winter:[128,64],fence_winter:[64,128],house_winter:[96,96],shipping_bin_winter:[64,32],crops2:[112,320],debris:[128,48],debris_large:[64,32],objects2:[128,96],coop:[64,64],barn:[96,80],greenhouse_ruined:[96,96],greenhouse:[96,96],plot_sign:[32,32],crow:[96,16],items2:[256,160],ui2:[128,64],ui_hp:[16,72],ui_portrait:[56,56],fx2:[128,80],slash:[96,128],player2:[352,128],chicken:[64,64],chicken_brown:[64,64],cow:[128,128],monsters:[128,128],npc_hazel:[64,128],npc_bram:[64,128],npc_juniper:[64,128],npc_ollie:[64,128],npc_marigold:[64,128],npc_wren:[64,128],npc_thistle:[64,128],npc_pip:[64,128],portrait_hazel:[96,48],portrait_bram:[96,48],portrait_juniper:[96,48],portrait_ollie:[96,48],portrait_marigold:[96,48],portrait_wren:[96,48],portrait_thistle:[96,48],portrait_pip:[96,48],cobble:[64,64],sand:[64,64],store:[112,96],smithy:[96,80],carpenter:[96,96],saloon:[112,96],ranch:[96,80],hall:[128,112],house_a:[80,80],house_b:[80,80],fish_shop:[64,64],mine_entrance:[64,64],town_props:[128,64],fountain:[96,48],bulletin_board:[32,32],floors:[64,48],walls:[128,32],furniture:[128,112],mine_floor_earth:[128,16],mine_floor_frost:[128,16],mine_floor_lava:[128,16],mine_wall_earth:[64,64],mine_wall_frost:[64,64],mine_wall_lava:[64,64],mine_rocks:[128,48],mine_elevator:[32,32],mine_chest:[32,16],crops3:[112,192],items3:[256,32],cauldron:[32,32],bottle:[64,16],fx3:[128,32],fruit_trees:[384,128],npc_nell:[64,128],npc_walt:[64,128],npc_younghazel:[64,128],portrait_nell:[96,48],portrait_walt:[96,48],portrait_younghazel:[96,48]},Rh=class e{canvas;regions=new Map;missing=new Set;constructor(e){this.canvas=e}get size(){return this.canvas.width}sheet(e){return this.regions.get(e)}has(e){return!this.missing.has(e)}static async load(t){let n=Object.keys(Lh),r=await Promise.all(n.map(e=>Bh(`${t}${e}.png`).catch(()=>null))),i=new Set,a=n.map((e,t)=>{let[n,a]=Lh[e],o=r[t];return o||=(i.add(e),zh(n,a)),{name:e,img:o,w:n,h:a}}),o=document.createElement(`canvas`);o.width=o.height=4;let s=o.getContext(`2d`);s.fillStyle=`#fff`,s.fillRect(0,0,4,4),a.push({name:`white`,img:o,w:4,h:4});let c=2048,l=document.createElement(`canvas`);l.width=l.height=c;let u=l.getContext(`2d`);u.imageSmoothingEnabled=!1;let d=new e(l);for(let e of i)d.missing.add(e);let f=[...a].sort((e,t)=>t.h-e.h),p=0,m=0,h=0;for(let e of f)p+e.w>c&&(p=0,m+=h+2,h=0),u.drawImage(e.img,p,m,e.w,e.h),d.regions.set(e.name,{x:p,y:m,w:e.w,h:e.h}),p+=e.w+2,h=Math.max(h,e.h);if(m+h>c)throw Error(`atlas overflow`);return i.size&&console.info(`art: ${i.size} sheet(s) not drawn yet: ${[...i].join(`, `)}`),d}};function zh(e,t){let n=document.createElement(`canvas`);n.width=e,n.height=t;let r=n.getContext(`2d`);r.fillStyle=`rgba(200, 120, 220, 0.25)`;for(let n=0;n<t;n+=16)for(let t=0;t<e;t+=16)r.fillRect(t+3,n+3,10,10);return n}function Bh(e){return new Promise((t,n)=>{let r=new Image;r.onload=()=>t(r),r.onerror=()=>n(Error(`couldn't load ${e}`)),r.src=e})}var Vh=function(e){return e[e.Idle=0]=`Idle`,e[e.Walk=1]=`Walk`,e[e.HoeUp=5]=`HoeUp`,e[e.HoeDown=6]=`HoeDown`,e[e.CanOut=7]=`CanOut`,e[e.CanPour=8]=`CanPour`,e[e.CastBack=9]=`CastBack`,e[e.CastForward=10]=`CastForward`,e[e.RodOut=11]=`RodOut`,e[e.Crouch=12]=`Crouch`,e[e.HoldUp=13]=`HoldUp`,e[e.AxeUp=100]=`AxeUp`,e[e.AxeDown=101]=`AxeDown`,e[e.PickUp=102]=`PickUp`,e[e.PickDown=103]=`PickDown`,e[e.ScytheBack=104]=`ScytheBack`,e[e.ScytheSweep=105]=`ScytheSweep`,e[e.SwordBack=106]=`SwordBack`,e[e.SwordMid=107]=`SwordMid`,e[e.SwordFollow=108]=`SwordFollow`,e[e.Eat=109]=`Eat`,e[e.Hurt=110]=`Hurt`,e}({}),Hh=2,Uh=[.95,.95,.9,.8],Wh=class{game;camX=0;camY=0;follow=!0;pose=0;walking=!1;overhead=null;cursor=null;slash=null;area=null;binOpen=!1;openChest=null;onFootstep=()=>{};lights=[];panes=[];standing=[];effects=[];pops=[];drops=[];flakes=[];time=0;walkTime=0;lastStep=-1;dip=0;flash=0;crow=null;constructor(e){this.game=e,this.buildStanding(e.map);for(let e=0;e<140;e++)this.drops.push({x:Math.random()*540-40,y:Math.random()*310-20,speed:220+Math.random()*80});for(let e=0;e<70;e++)this.flakes.push({x:Math.random()*500,y:Math.random()*280,cell:Math.random()<.5?0:1,phase:Math.random()*6});this.snapCamera()}get playerX(){return this.game.state.playerX}get playerY(){return this.game.state.playerY}get rodTip(){let[e,t]=Dm.rodTip[this.game.state.facing];return[this.playerX-16+e,this.playerY-30+t]}snapCamera(){if(!this.follow)return;let e=this.game.map;this.camX=e.pixelWidth<480?(e.pixelWidth-480)/2:Math.min(Math.max(this.playerX-240,0),e.pixelWidth-480),this.camY=e.pixelHeight<270?(e.pixelHeight-270)/2-8:Math.min(Math.max(this.playerY-12-135,0),e.pixelHeight-270)}worldToScreen(e,t){return[e-this.camX,t-this.camY]}tileAtScreen(e,t){return[Math.floor((e+this.camX)/16),Math.floor((t+this.camY)/16)]}play(e,t,n,r,i=12,a,o=`fx`){this.effects.push({x:e,y:t,first:n,frames:r,fps:i,t:0,tint:a,sheet:o})}popItem(e,t,n,r,i){this.pops.push({fromX:e,fromY:t,toX:n,toY:r,item:i,t:0})}nibble(){this.dip=.25}lightning(){this.flash=1}crowFrom(e,t){this.crow={x:e*16+8,y:t*16+8,t:0}}bobberTarget(){let e=this.game.fishing;return[e.bobberX*16+8,e.bobberY*16+10]}update(e){this.time+=e,this.dip=Math.max(0,this.dip-e),this.flash=Math.max(0,this.flash-e*2.5);for(let t of this.effects)t.t+=e;for(let e=this.effects.length-1;e>=0;e--)this.effects[e].t>=this.effects[e].frames/this.effects[e].fps&&this.effects.splice(e,1);for(let t of this.pops)t.t+=e;for(let e=this.pops.length-1;e>=0;e--)this.pops[e].t>=.5&&this.pops.splice(e,1);for(let t of this.drops)t.x-=.35*t.speed*e,t.y+=t.speed*e,t.y>280&&(t.x=Math.random()*550-10,t.y=-10-Math.random()*20);let t=this.game.state.weather===`snowy`;for(let n of this.flakes)t?(n.y+=(18+n.cell*8)*e,n.x+=Math.sin(this.time*1.3+n.phase)*10*e):(n.x+=(70+n.phase*10)*e,n.y+=Math.sin(this.time*2+n.phase)*14*e+6*e),n.y>280&&(n.y=-10),n.x>500&&(n.x=-20),n.x<-20&&(n.x=500);if(this.slash&&(this.slash.t+=e,this.slash.t>.24&&(this.slash=null)),this.crow&&(this.crow.t+=e,this.crow.t>3&&(this.crow=null)),this.pose===0&&this.walking){this.walkTime+=e;let t=Math.floor(this.walkTime*8)%4;t!==this.lastStep&&t%2==0&&this.onFootstep(),this.lastStep=t}else this.walkTime=0,this.lastStep=-1;this.follow&&this.snapCamera()}draw(e,t,n,r){let i=this.game,a=i.map,o=i.mapState,s=i.season,c=a.width;e.tint=n,e.offsetX=-this.camX,e.offsetY=-this.camY;let l=Math.max(0,Math.floor(this.camX/16)-1),u=Math.min(a.width-1,Math.ceil((this.camX+480)/16)+1),d=Math.max(0,Math.floor(this.camY/16)-1),f=Math.min(a.height-1,Math.ceil((this.camY+270)/16)+1),p=Math.floor(this.time*4)%4;if(a.theme===`indoor`)this.drawRoom(e,a);else if(a.theme===`mine`)this.drawCave(e,a,l,u,d,f);else{let t=Nm(`grass`,s);for(let n=d;n<=f;n++)for(let r=l;r<=u;r++)e.draw(t,qh(r,n)*16,0,16,16,r*16,n*16);Jh(e,`sand`,a,(e,t)=>a.groundAt(e,t)===sl.Sand||a.isWater(e,t)&&a.waterAt(e,t)===`ocean`,0,l,u+1,d,f+1),Jh(e,Pm(`path`,s),a,(e,t)=>a.groundAt(e,t)===sl.Path,0,l,u+1,d,f+1),Jh(e,`cobble`,a,(e,t)=>a.groundAt(e,t)===sl.Cobble,0,l,u+1,d,f+1)}Jh(e,`water`,a,(e,t)=>a.isWater(e,t),p,l,u+1,d,f+1);for(let t=d;t<=f;t++)for(let n=l;n<=u;n++){if(a.featureAt(n,t)!==Y.Dock)continue;let r=+(a.featureAt(n-1,t)===Y.Dock),i=a.featureAt(n,t-1)===Y.Dock?a.featureAt(n,t+1)===Y.Dock?1:2:0;e.draw(`dock`,r*16,i*16,16,16,n*16,t*16)}let m=Pm(`soil`,s);for(let t=d;t<=f;t++)for(let n=l;n<=u;n++){let r=t*c+n,a=o.soil[r];if(a){let[r,o]=Lm(+!!i.soilAt(n,t-1)|(i.soilAt(n+1,t)?2:0)|(i.soilAt(n,t+1)?4:0)|(i.soilAt(n-1,t)?8:0),a.watered);e.draw(m,r,o,16,16,n*16,t*16),a.fert&&e.rect(n*16+6,t*16+12,4,1,a.fert===`speed`?Xm(`8fd3ff`,.7):Xm(`f6dfa8`,.6))}let s=o.floors[r];if(s!==void 0){let[r,i]=km(Jm[s]??16,8,16,32);e.draw(`objects2`,r,i+16,16,16,n*16,t*16)}}let h=Nm(`props`,s);for(let t=d;t<=f;t++)for(let n=l;n<=u;n++){let r=a.featureAt(n,t);if(r===Y.None||r===Y.Dock||!ll(r))continue;let i=Gm(r);if(i<0)continue;let[o,s]=km(i,8,16,16);e.draw(h,o,s,16,16,n*16,t*16)}let g=[],_=i.state.minutes>=1110||i.wet&&i.state.minutes>=1020,v=this.camY-8,y=this.camY+270+80;for(let t of this.standing)t.bottom<v||t.bottom-t.h>y||t.x+t.w<this.camX-8||t.x-t.w>this.camX+488||g.push({sortY:t.bottom-Hh,draw:()=>{let n=t.sx,r=t.sheet;t.tree&&(n=(this.time+t.tree.phase)%t.tree.period<.45?48:0,r=Nm(t.sheet,s)),(t.sheet===`house`||t.sheet===`shipping_bin`||t.sheet===`fence`)&&(r=Pm(t.sheet,s)),t.sheet===`props`&&(r=Nm(`props`,s)),t.lamp&&_&&(n=64),t.anim&&Math.floor(this.time*3)%2&&(n+=t.anim),t.bin&&this.binOpen&&(n=32),e.draw(r,n,t.sy,t.w,t.h,t.x-t.w/2,t.bottom-t.h)}});for(let t=d;t<=f+4&&t<a.height;t++)for(let n=l;n<=u;n++){let r=t*c+n,i=o.objects[r];i&&i.t!==`part`&&this.objectDrawable(e,g,i,n,t,r);let a=o.soil[r];if(a?.crop){let r=a.crop;if(r.dead)g.push({sortY:t*16+10,draw:()=>e.draw(`crops2`,0,288,16,32,n*16,t*16-16)});else{let i=Ou(r.id),a=Nu(r);g.push({sortY:t*16+10,draw:()=>e.draw(i.sheet,a*16,i.row*32,16,32,n*16,t*16-16)})}}}if(g.push({sortY:this.playerY,draw:()=>this.drawPlayer(e)}),a.id===`mine`)for(let t of i.state.mine.monsters)g.push({sortY:t.y,draw:()=>this.drawMonster(e,t)});if(Gd(a.id))for(let t of nf(i))t.map===a.id&&g.push({sortY:t.y*16+12,draw:()=>e.draw(`npc_${t.who}`,0,t.facing*32,16,32,t.x*16,t.y*16-18)});if(a.id===`coop`||a.id===`barn`)for(let t of i.state.ranch.animals)(t.kind===`chicken`?`coop`:`barn`)===a.id&&g.push({sortY:t.y,draw:()=>this.drawAnimal(e,t)});for(let t of Zf){let n=i.state.npcs[t];if(n.map!==a.id)continue;let r=n.path.length>0?Math.floor(this.time*6)%4:0;g.push({sortY:n.py,draw:()=>e.draw(`npc_${t}`,r*16,n.facing*32,16,32,n.px-8,n.py-30)})}g.sort((e,t)=>e.sortY-t.sortY);for(let e of g)e.draw();for(let t of this.effects){let n=Math.min(t.frames-1,Math.floor(t.t*t.fps));Wm(e,t.first+n,t.x-8,t.y-8,t.tint,t.sheet)}for(let t of this.pops){let n=Math.min(1,t.t/.45),r=t.fromX+(t.toX-t.fromX)*n-8,i=t.fromY+(t.toY-t.fromY)*n-Math.sin(n*Math.PI)*18-8,a=t.t<.3?1:Math.max(0,1-(t.t-.3)/.2);jm(e,t.item,r,i,[1,1,1,a])}if(this.drawFishing(e),a.id===`farm_past`){let t=i.state.past,n=.55+.35*Math.sin(this.time*4);if(t.channel===`asked`&&Kd.forEach(([r,i],a)=>{t.dug.includes(a)||e.draw(`ui_cursor`,0,0,16,16,r*16,i*16,16,16,[1,1,1,n])}),t.capsule===`asked`){let[t,r]=km(15,8,16,16);e.draw(`debris`,t,r,16,16,Jd.x*16,Jd.y*16),e.draw(`ui_cursor`,0,0,16,16,Jd.x*16,Jd.y*16,16,16,[1,1,1,n])}}if(this.slash){let t=Math.min(2,Math.floor(this.slash.t/.24*3));e.draw(`slash`,t*32,this.slash.facing*32,32,32,this.playerX-16,this.playerY-30)}if(a.id===`farm`&&i.state.mail.length>0&&Wm(e,Um.emoteAlert,144,90+Math.round(Math.sin(this.time*4)*2),void 0,`fx2`),this.area)for(let[t,n]of this.area)e.draw(`ui_cursor`,0,0,16,16,t*16,n*16);else this.cursor&&e.draw(`ui_cursor`,this.cursor.valid?0:16,0,16,16,this.cursor.x*16,this.cursor.y*16);if(this.crow){let t=this.crow.t,n=t<.6?4+Math.floor(t*6)%2:Math.floor(t*10)%4,r=t<.6?0:(t-.6)*60;e.draw(`crow`,n*16,0,16,16,this.crow.x-8+r*1.4,this.crow.y-12-r)}if(r>.01){t.offsetX=-this.camX,t.offsetY=-this.camY;for(let[e,n,i,a]of this.panes)t.rect(e,n,i,a,[1,.62,.25,.85*r]);this.lights.forEach(([e,n],i)=>{let a=.92+.08*Math.sin(this.time*3.1+i*1.7);t.draw(`light`,0,0,64,64,e-29,n-29,58,58,[1,.78,.45,r*.75*a])});for(let[e,n]of Object.entries(o.soil)){if(n.crop?.id!==`Moonmint`||n.crop.dead||n.crop.growth<1)continue;let i=Number(e)%c*16+8,a=Math.floor(Number(e)/c)*16+2,o=.8+.2*Math.sin(this.time*2+Number(e));t.draw(`light`,0,0,64,64,i-12,a-12,24,24,[.6,.85,1,r*.55*o])}}e.tint=[1,1,1,1]}drawRoom(e,t){let n=t.id===`greenhouse`,r=t.id===`coop`||t.id===`barn`;for(let i=0;i<t.height;i++)for(let a=0;a<t.width;a++)t.featureAt(a,i)!==Y.Wall&&e.draw(`floors`,qh(a,i)%4*16,n?32:r?16:0,16,16,a*16,i*16);for(let i=0;i<t.width;i++){let a=i===0||i===t.width-1?7:n?5:r?i===2||i===t.width-3?4:3:i===3||i===8?1:i===6?6:i===10?2:0;e.draw(`walls`,a*16,0,16,32,i*16,0)}for(let n=2;n<t.height;n++)for(let r=0;r<t.width;r++)t.featureAt(r,n)===Y.Wall&&e.draw(`walls`,112,16,16,16,r*16,n*16);for(let n of t.warps)e.draw(`furniture`,80,80,32,16,n.x*16,n.y*16);let i=t.buildings.find(e=>e.kind===`table`);if(i&&e.draw(`furniture`,80,48,48,32,i.x*16-8,i.y*16-8),r){let n=this.game.state.ranch,r=n.animals.filter(e=>(e.kind===`chicken`?`coop`:`barn`)===t.id).length,i=r>0&&n.hay>=r;t.buildings.filter(e=>e.kind===`trough`).forEach((t,n)=>{let[a,o]=km(i&&n<r?21:20,8,16,32);e.draw(`objects2`,a,o+16,16,16,t.x*16,t.y*16)})}}drawAnimal(e,t){let n=Math.hypot(t.tx-t.x,t.ty-t.y)>1;if(t.kind===`chicken`){let r=n?+(Math.floor(this.time*6+t.id)%2==0):Math.floor(this.time*.7+t.id*1.3)%4==3?3:0;e.draw(t.look?`chicken_brown`:`chicken`,r*16,t.facing*16,16,16,t.x-8,t.y-14)}else{let r=n?Math.floor(this.time*4+t.id)%2==0?1:3:0;e.draw(`cow`,r*32,t.facing*32,32,32,t.x-16,t.y-30)}}drawCave(e,t,n,r,i,a){let o=t.zone??`earth`,s=`mine_floor_${o}`;for(let t=i;t<=a;t++)for(let i=n;i<=r;i++){let n=qh(i,t);e.draw(s,(n<5?n%4:4+n%4)*16,0,16,16,i*16,t*16)}Jh(e,`mine_wall_${o}`,t,(e,n)=>t.featureAt(e,n)===Y.Wall,0,n,r+1,i,a+1,[.72,.7,.76,1])}drawMonster(e,t){let n=t.zone===`earth`?0:t.zone===`frost`?1:2,r=t.kind===`slime`?n:t.kind===`bat`?3+n:t.kind===`bug`?6:7,i;i=t.hurt>0?4:t.kind===`crab`?t.awake?1+Math.floor(this.time*8)%3:0:t.kind===`slime`?t.awake?Math.min(3,Math.floor(t.t%1.2/.5*4)):Math.floor(this.time*2+t.id)%2:Math.floor(this.time*(t.kind===`bat`?10:6)+t.id)%4;let a=t.kind===`bat`?10+Math.round(Math.sin(this.time*6+t.id)*2):0;a&&e.rect(t.x-4,t.y-2,8,2,[0,0,0,.25]),e.draw(`monsters`,i*16,r*16,16,16,t.x-8,t.y-14-a)}objectDrawable(e,t,n,r,i,a){let o=this.game,s=o.season,c=(i+1)*16;switch(n.t){case`debris`:{if(n.type===`largeStump`||n.type===`boulder`){t.push({sortY:c+16-Hh,draw:()=>e.draw(`debris_large`,n.type===`boulder`?32:0,0,32,32,r*16,i*16)});return}let[a,o]=km(n.type===`weed`?s===`winter`?5:s===`fall`?3+n.v%2:n.v%3:n.type===`stone`?s===`winter`?8:6+n.v%2:n.type===`coalstone`?16:n.type===`twig`?9+n.v%2:11,8,16,16);t.push({sortY:c-Hh,draw:()=>e.draw(`debris`,a,o,16,16,r*16,i*16)});return}case`tree`:{if(n.stage>=4&&(n.species===`apple`||n.species===`cherry`)){let i=[`spring`,`summer`,`fall`,`winter`].indexOf(s)+(n.fruit?4:0),a=n.species===`apple`?0:1;t.push({sortY:c-Hh,draw:()=>e.draw(`fruit_trees`,i*48,a*64,48,64,r*16-16,c-64)});return}if(n.stage>=4){let i=Nm(n.species===`oak`?`tree_oak`:`tree_pine`,s),o=a*.37%7,l=3+a%5;t.push({sortY:c-Hh,draw:()=>e.draw(i,(this.time+o)%l<.45?48:0,0,48,64,r*16-16,c-64)});return}let[o,l]=km(n.stage<=1?12:n.stage===2?13:14,8,16,16);t.push({sortY:c-Hh,draw:()=>e.draw(`debris`,o,l,16,16,r*16,i*16)});return}case`dig`:{let[n,a]=km(15,8,16,16);t.push({sortY:i*16+2,draw:()=>e.draw(`debris`,n,a,16,16,r*16,i*16)});return}case`forage`:{let o=n.dropped?Math.round(Math.sin(this.time*4+a)):0;t.push({sortY:i*16+8,draw:()=>{e.rect(r*16+4,i*16+13,8,2,[.1,.08,.1,.25]),jm(e,n.item,r*16,i*16-2+o)}});return}case`rock`:{let a=(o.map.zone??`earth`)===`earth`?0:o.map.zone===`frost`?1:2,s=n.kind===`stone`?n.v%2:[`stone`,`stone`,`ore`,`coal`,`gem`,`geode`,`crate`].indexOf(n.kind);t.push({sortY:c-Hh,draw:()=>e.draw(`mine_rocks`,s*16,a*16,16,16,r*16,i*16)});return}case`ladder`:{let a=n.down?+(o.map.zone===`frost`):2;t.push({sortY:i*16+1,draw:()=>e.draw(`mine_rocks`,112,a*16,16,16,r*16,i*16)});return}case`herb`:{let a=Ou(n.crop),o=Nu({id:n.crop,growth:n.growth,harvests:n.harvests});t.push({sortY:a.quirk===`pond`?i*16+1:i*16+10,draw:()=>e.draw(`crops3`,o*16,a.row*32,16,32,r*16,i*16-16)});return}case`bottle`:{let n=Math.floor(this.time*3+a)%4;t.push({sortY:i*16+1,draw:()=>e.draw(`bottle`,n*16,0,16,16,r*16,i*16+Math.round(Math.sin(this.time*2)*1))});return}case`capsule`:{let[n,a]=km(15,8,16,16);t.push({sortY:i*16+2,draw:()=>e.draw(`debris`,n,a,16,16,r*16,i*16)});return}case`minechest`:t.push({sortY:c-Hh,draw:()=>e.draw(`mine_chest`,n.open?16:0,0,16,16,r*16,i*16)});return;case`placed`:{let s=qm[n.item]??[0,0],l=n.item===`Chest`?this.openChest===a:!!n.output&&(n.readyAt??0)>o.now,u=n.item===`Cauldron`,[d,f]=u?[l?16:0,0]:km(l?s[1]:s[0],8,16,32),p=!!n.output&&(n.readyAt??0)<=o.now&&n.item!==`Chest`;t.push({sortY:n.item===`CrabPot`?i*16+2:c-Hh,draw:()=>{if(e.draw(u?`cauldron`:`objects2`,d,f,16,32,r*16,c-32),n.item===`CrabPot`&&Wm(e,Um.float+Math.floor(this.time*3)%4,r*16,i*16,void 0,`fx2`),p&&n.output){let t=c-32-20+Math.round(Math.sin(this.time*3+a)*1.5);e.draw(`ui2`,Vm.bubble[0],Vm.bubble[1],20,22,r*16-2,t),jm(e,n.output.item,r*16,t+2)}}});return}}}drawWeather(e){let t=this.game,n=t.state.weather;if(t.map.theme===`outdoor`){if(t.wet)for(let t of this.drops)Wm(e,Hm.rain,t.x,t.y,[1,1,1,.7]);if(n===`snowy`)for(let t of this.flakes)Wm(e,t.cell?Um.snowSmall:Um.snow,t.x,t.y,[1,1,1,.9],`fx2`);if(n===`windy`){let n=t.season===`fall`?Um.leaf:Um.petal;for(let t=0;t<18;t++){let r=this.flakes[t];Wm(e,n,r.x,r.y,[1,1,1,.9],`fx2`)}}this.flash>0&&e.rect(0,0,480,270,[.9,.95,1,this.flash*.55])}}drawPlayer(e){let t=this.game;if(t.invulnerable>0&&t.invulnerable<.75&&Math.floor(this.time*20)%2==0)return;let n=t.invulnerable>.75?110:this.pose;this.pose===0&&this.walking&&(n=1+Math.floor(this.walkTime*8)%4);let r=this.game.state.facing,[i,a]=Fm(r,n>=100?n-100:n);e.draw(n>=100?`player2`:`player`,i,a,32,32,this.playerX-16,this.playerY-30),this.overhead&&jm(e,this.overhead,this.playerX-8,this.playerY-42)}drawFishing(e){let t=this.game.fishing,n=this.playerX,r=this.playerY;switch(t.phase){case`charging`:{let i=n+11,a=r-40;e.rect(i-1,a-1,7,28,Xm(`3b2417`)),e.rect(i,a,5,26,Xm(`1d1a2a`));let o=Math.round(26*t.power),s=[.89+-.5*t.power,.36+(.78-.36)*t.power,.29+(.3-.29)*t.power,1];e.rect(i,a+26-o,5,o,s);break}case`flying`:{let n=Math.min(1,Math.max(0,t.timer/G.castFlight)),[r,i]=this.rodTip,[a,o]=this.bobberTarget(),s=r+(a-r)*n,c=i+(o-i)*n-Math.sin(n*Math.PI)*26;e.line(r,i,s,c,Uh),Wm(e,Hm.bobber,Math.round(s)-8,Math.round(c)-8);break}case`waiting`:case`biting`:case`reeling`:{let i=t.phase!==`waiting`||this.dip>0,[a,o]=this.bobberTarget();if(t.phase===`waiting`&&(o+=Math.round(Math.sin(this.time*3)*.6)),t.phase===`reeling`&&(a+=Math.round(Math.sin(this.time*23)*1.2)),Kh(e,this.rodTip,[a,o],t.phase===`waiting`?6:1),Wm(e,i?Hm.bobberDip:Hm.bobber,a-8,o-8),t.phase===`biting`){let t=Math.abs(Math.sin(this.time*10))*3;Wm(e,Hm.alert,n-8,Math.round(r-50-t))}break}}}buildStanding(e){for(let t of e.buildings){let n=t.kind===`greenhouse`&&!this.game.state.greenhouse&&e.id!==`farm_past`?{sheet:`greenhouse_ruined`,sx:0,sy:0,w:96,h:96}:Gh(t.kind);if(!n)continue;let r=t.x*16+t.w*16/2,i=(t.y+t.h)*16;if(t.kind===`bench`)this.standing.push({sheet:`town_props`,sx:0,sy:0,w:16,h:32,x:r-8,bottom:i}),this.standing.push({sheet:`town_props`,sx:16,sy:0,w:16,h:32,x:r+8,bottom:i});else if(this.standing.push({...n,x:r,bottom:i,bin:t.kind===`bin`}),t.kind===`house`){let e=r-48,t=i-96;for(let n of[13,67])this.panes.push([e+n,t+57,12,11]),this.lights.push([e+n+6,t+62])}}let t=7,n=()=>(t=Math.imul(t,1103515245)+12345>>>0,t/4294967296);for(let t=0;t<e.height;t++)for(let r=0;r<e.width;r++){let i=e.featureAt(r,t),a=r*16+8,o=(t+1)*16;if(i===Y.Oak||i===Y.Pine)this.standing.push({sheet:i===Y.Oak?`tree_oak`:`tree_pine`,sx:0,sy:0,w:48,h:64,x:a,bottom:o,tree:{period:3+n()*4,phase:n()*7}});else if(i===Y.Fence){let[n,i]=Rm(+(e.featureAt(r,t-1)===Y.Fence)|(e.featureAt(r+1,t)===Y.Fence?2:0)|(e.featureAt(r,t+1)===Y.Fence?4:0)|(e.featureAt(r-1,t)===Y.Fence?8:0));this.standing.push({sheet:`fence`,sx:n,sy:i,w:16,h:32,x:a,bottom:o})}else if(i===Y.Rock||i===Y.BigRock||i===Y.Stump||i===Y.Log||i===Y.SmallBush){let[e,t]=km(Gm(i),8,16,16);this.standing.push({sheet:`props`,sx:e,sy:t,w:16,h:16,x:a,bottom:o})}else{let e=Km(i);if(e<0)continue;this.standing.push({sheet:`props_tall`,sx:e*16,sy:0,w:16,h:32,x:a,bottom:o,lamp:i===Y.Lamp}),i===Y.Lamp&&this.lights.push([a,o-26])}}}};function Gh(e){let t=e=>{let[t,n]=Lh[e];return{sheet:e,sx:0,sy:0,w:t,h:n}};switch(e){case`house`:return t(`house`);case`bin`:return{sheet:`shipping_bin`,sx:0,sy:0,w:32,h:32};case`stall`:return t(`seed_stall`);case`store`:case`smithy`:case`carpenter`:case`saloon`:case`ranch`:case`hall`:case`house_a`:case`house_b`:case`fish_shop`:case`mine_entrance`:case`coop`:case`barn`:case`greenhouse`:return t(e);case`fountain`:return{sheet:`fountain`,sx:0,sy:0,w:48,h:48,anim:48};case`board`:return t(`bulletin_board`);case`elevator`:return t(`mine_elevator`);case`hopper`:return{sheet:`objects2`,sx:48,sy:64,w:16,h:32};case`haybale`:return{sheet:`furniture`,sx:32,sy:80,w:32,h:32};case`bench`:return{sheet:`town_props`,sx:0,sy:0,w:16,h:32};case`bed`:return{sheet:`furniture`,sx:0,sy:0,w:32,h:48};case`kitchen`:return{sheet:`furniture`,sx:32,sy:0,w:48,h:32};case`table`:return{sheet:`furniture`,sx:80,sy:0,w:32,h:32};case`chair`:return{sheet:`furniture`,sx:112,sy:0,w:16,h:32};case`tv`:return{sheet:`furniture`,sx:0,sy:48,w:16,h:32};case`fireplace`:return{sheet:`furniture`,sx:16,sy:48,w:32,h:32,anim:32};case`bookshelf`:return{sheet:`furniture`,sx:0,sy:80,w:32,h:32};case`plant`:return{sheet:`furniture`,sx:112,sy:80,w:16,h:32};default:return null}}function Kh(e,[t,n],[r,i],a){let o=t,s=n;for(let c=1;c<=10;c++){let l=c/10,u=t+(r-t)*l,d=n+(i-n)*l+Math.sin(l*Math.PI)*a;e.line(o,s,u,d,Uh),o=u,s=d}}function qh(e,t){let n=Math.imul(e,374761393)+Math.imul(t,668265263)>>>0;n=Math.imul(n^n>>>13,1274126177)>>>0;let r=n%100;return r<86?r%5:r<96?5+r%2:7}function Jh(e,t,n,r,i,a,o,s,c,l){let u=(e,t)=>r(Math.min(Math.max(e,0),n.width-1),Math.min(Math.max(t,0),n.height-1));for(let n=s;n<=c;n++)for(let r=a;r<=o;r++){let a=+!!u(r-1,n-1)|(u(r,n-1)?2:0)|(u(r-1,n)?4:0)|(u(r,n)?8:0);if(a===0)continue;let[o,s]=Im(a,i);e.draw(t,o,s,16,16,r*16-8,n*16-8,16,16,l)}}var Yh={none:0,hoe:.42,water:.5,axe:.42,pickaxe:.42,scythe:.3,plant:.22,harvest:.26,charge:1/0,sword:.28},Xh=.45,Zh={GrowthTonic:[.5,.9,.4,1],RainCharm:[.55,.7,1,1],WarmthDraught:[1,.6,.3,1],CalmingDraught:[.75,.6,1,1],LightPhilter:[1,.95,.6,1],LuckTonic:[.4,.9,.6,1],BottledSunshine:[1,.85,.3,1],FairyRing:[1,.7,.9,1],MurkyBrew:[.5,.45,.3,1]};function Qh(e,t){let n=[1,1,1],r=[1,.8,.66],i=[.36,.4,.64],a=[.76,.8,.9],o=e/60,s=(e,t,n)=>e.map((e,r)=>e+(t[r]-e)*n),c=o<17.5?n:o<19?s(n,r,(o-17.5)/1.5):o<21?s(r,i,(o-19)/2):i;return t?[c[0]*a[0],c[1]*a[1],c[2]*a[2],1]:[c[0],c[1],c[2],1]}function $h(e,t){let n=Math.min(1,Math.max(0,(e/60-18.5)/2.5));return t?Math.max(n,.35):n}var eg=class{game;saveEnabled;input;world;hud;menu=null;virtual={moveX:0,moveY:0,useHeld:!1,usePressed:!1,interactPressed:!1};onExitToTitle=()=>{};hideHud=!1;act=`none`;actTime=0;actApplied=!1;actTile=[0,0];chargeAct=`hoe`;area=0;useHeldFromWorld=!1;fade=1;fadeTarget=0;fadeSpeed=1/.7;afterFade=null;lastMinutes;reelSound=0;lastDenied=``;lastDeniedTime=-10;clock=0;nextJump=3;nextThunder=6;constructor(e,t,n){this.game=e,this.saveEnabled=t,this.input=n,this.world=new Wh(e),this.hud=new Ph(e),this.world.onFootstep=()=>this.footstep(),this.lastMinutes=e.state.minutes;let r=e.state,i=r.day===1&&r.minutes===G.dayStart&&Object.keys(r.maps.farm.soil).length===0;i&&t?this.showWelcome():i&&this.hud.toast(`Welcome to Fernbrook! Press Esc for the controls.`)}skipIntro(){this.fade=this.fadeTarget=0,this.hideHud=!0}get transitioning(){return this.fade>0||this.fadeTarget>0}showWelcome(){this.showMenu(new wh(`Welcome to Fernbrook! Your grandparents' old farm is yours now, though it's gone a bit wild.

`+Dh+`

Clear weeds, stones and stumps with the scythe, pickaxe and axe; till, plant and water; craft with E; ship crops and fish in the bin; and sleep in the house to end the day. (Esc shows the controls again.)`,[[`Let's farm!`,()=>{}]]))}frame(e,t,n,r){this.clock+=e;let i=this.input,a=this.virtual;(a.moveX||a.moveY||a.usePressed||a.interactPressed||a.useHeld)&&(i.mouseAim=!1),this.world.drawWeather(t.b);let o=this.menu!==null||this.transitioning,[s,c]=this.world.worldToScreen(this.world.playerX,this.world.playerY),l=this.hideHud?-1:this.hud.draw(t,e,!o,[s,c]);l>=0&&this.selectSlot(l);let u=this.menu instanceof Eh;if(this.menu&&!u&&this.menu.draw(t),this.fade>0&&t.b.rect(0,0,480,270,[0,0,0,this.fade]),this.menu&&u&&this.menu.draw(t),this.menu?.closed&&(this.menu=null),this.updateFade(e),this.handleKeys(),o)this.world.walking=!1,a.usePressed=a.interactPressed=!1;else{(a.usePressed||i.pressed(`use`))&&(i.keyPressed(`use`)&&(i.mouseAim=!1),this.useHeldFromWorld=!0);let t=a.usePressed||i.pressed(`use`);if(a.usePressed=!1,(a.interactPressed||i.pressed(`interact`))&&(i.keyPressed(`interact`)&&(i.mouseAim=!1),a.interactPressed=!1,this.doInteract()),i.wheel!==0&&!this.game.fishing.active&&this.selectSlot((this.game.state.selected+(i.wheel>0?1:G.toolbarSlots-1))%G.toolbarSlots),this.act===`none`&&!this.game.fishing.active&&!this.transitioning){let e=_p(this.game,mp);e&&this.showMenu(new Ih(this.game,()=>this.world,e))}this.game.tick(e),this.nightWarnings(),this.game.passOutPending&&this.endDay(!0);let n=this.game.fishing.active;this.updateFishing(e,t),this.updateAct(e,t&&!n),this.updateWalking(e),this.updateCursor(),this.ambientLife(e)}this.useHeld||(this.useHeldFromWorld=!1),this.handleEvents(),this.menu?.update(e),this.world.update(e);let d=this.game.state,f=d.minutes+d.clockCarry/G.secondsPerTenMinutes*10,p=d.map===`mine`||d.map===`minehub`,m=d.map===`mine`&&d.magic.litFloor===d.mine.floor,h=d.map.endsWith(`_past`),g=p?m?[1,.98,.94,1]:[.86,.84,.94,1]:Qh(f,this.game.wet||d.weather===`snowy`);h&&([g[0],g[1],g[2]]=[g[0]*1.03,g[1]*.86,g[2]*.64]),this.world.draw(n,r,g,p?0:$h(d.minutes,this.game.wet));let _=d.map===`farm`?Math.abs(31-this.game.playerTile[1]):d.map===`town`?Math.abs(32-this.game.playerTile[1])+4:99;Q.update(e,d.minutes,d.weather,_,this.game.season,!1,d.map)}get useHeld(){return this.virtual.useHeld||this.useHeldFromWorld&&this.input.isDown(`use`)}updateFade(e){if(this.fade===this.fadeTarget)return;let t=e*this.fadeSpeed;if(this.fade=this.fade<this.fadeTarget?Math.min(this.fadeTarget,this.fade+t):Math.max(this.fadeTarget,this.fade-t),this.fade===this.fadeTarget&&this.afterFade){let e=this.afterFade;this.afterFade=null,e()}}handleKeys(){let e=this.input;if(this.menu)(e.keyPressed(`pause`)||e.keyPressed(`backpack`))&&this.menu.canDismiss&&this.menu.close(),this.menu?.closed&&(this.menu=null);else if(!this.transitioning){if(e.keyPressed(`pause`))Q.play(`ui_open`),this.showMenu(new jh(()=>{this.save(),this.onExitToTitle()}));else if(e.keyPressed(`backpack`)&&!this.game.fishing.active)this.openMenu();else for(let t=0;t<G.toolbarSlots;t++)e.keyPressed(`slot${t+1}`)&&this.selectSlot(t)}}selectSlot(e){this.game.fishing.active||this.act!==`none`||e<0||e>=G.toolbarSlots||(this.game.state.selected!==e&&Q.play(`select`),this.game.state.selected=e)}updateWalking(e){let t=this.act!==`none`||this.game.fishing.active,[n,r]=t?[0,0]:this.input.axis();!t&&(this.virtual.moveX||this.virtual.moveY)&&([n,r]=[this.virtual.moveX,this.virtual.moveY]),n!==0||r!==0?(this.game.walk(Math.sign(n),Math.sign(r),e),this.world.walking=!0):this.world.walking=!1,this.act===`none`&&!this.game.fishing.active&&(this.world.pose=Vh.Idle)}target(){if(this.input.mouseAim){let[e,t]=this.world.tileAtScreen(this.input.mouseX,this.input.mouseY);if(this.game.inReach(e,t))return[e,t]}return this.game.facingTile}validTarget(e,t){let n=this.game,r=n.held;if(!r)return null;let i=J(r.item),a=i.tool,o=n.objectAt(e,t);if(a)switch(a.type){case`hoe`:return n.map.tillable(e,t)&&!n.soilAt(e,t)&&!o&&!n.floorAt(e,t)||o?.t===`dig`||o?.t===`debris`&&o.type===`weed`||!!n.soilAt(e,t)?.crop?.dead;case`can`:return!!n.soilAt(e,t)||n.map.fishable(e,t);case`axe`:return o?.t===`tree`||o?.t===`placed`||o?.t===`debris`&&[`twig`,`stump`,`largeStump`,`weed`].includes(o.type);case`pickaxe`:return o?.t===`placed`||o?.t===`debris`&&[`stone`,`coalstone`,`boulder`,`weed`].includes(o.type)||!!n.floorAt(e,t)||!!n.soilAt(e,t)&&!n.soilAt(e,t).crop;case`scythe`:return o?.t===`debris`&&o.type===`weed`||!!n.soilAt(e,t)?.crop?.dead;default:return null}return i.kind===`seed`?n.canPlant(e,t,r.item):i.kind===`fertilizer`?!!n.soilAt(e,t)&&!n.soilAt(e,t).fert:i.kind===`potion`||dd(n,e,t,r)||lf(n,e,t,r)?!0:jd.has(r.item)||Md.has(r.item)?n.canPlace(e,t,r.item):null}updateCursor(){if(this.game.fishing.active||this.hideHud){this.world.cursor=null;return}let[e,t]=this.target(),n=this.validTarget(e,t);this.world.cursor=n===null?null:{x:e,y:t,valid:n}}startUse(){let e=this.game,t=e.held;if(!t)return;let n=J(t.item),r=this.target(),i=n.tool;if(i)switch(i.type){case`rod`:e.startCast()&&(this.world.pose=Vh.CastBack);return;case`hoe`:case`can`:{let t=i.type===`hoe`?`hoe`:`water`;this.area=0,i.tier>=1&&this.useHeld&&!(i.type===`can`&&e.map.fishable(r[0],r[1]))?(this.chargeAct=t,this.begin(`charge`,r)):this.begin(t,r);return}case`axe`:this.begin(`axe`,r);return;case`pickaxe`:this.begin(`pickaxe`,r);return;case`scythe`:this.begin(`scythe`,r);return;case`pail`:e.useTool(r[0],r[1])?this.begin(`harvest`,r):this.hud.toast(`Use the milk pail on a cow in your barn.`,t.item);return;case`sword`:this.begin(`sword`,r),this.world.slash={t:0,facing:e.state.facing},Q.play(`sword`,-2);return;default:return}n.kind===`seed`||n.kind===`fertilizer`||jd.has(t.item)||Md.has(t.item)?this.validTarget(r[0],r[1])?this.begin(`plant`,r):n.kind===`seed`&&ku(t.item)&&(e.canPlant(r[0],r[1],t.item)||e.useTool(r[0],r[1])):dd(e,r[0],r[1],t)||n.kind===`potion`?this.begin(`plant`,r):t.item===`PocketWatch`?e.timeTravel()&&(this.act=`none`):lf(e,r[0],r[1],t)?this.begin(`plant`,r):t.item===`Notebook`?(Q.play(`ui_open`),this.showMenu(new _h(e))):qc(n)?this.askToEat(e.state.selected):t.item===`Bait`?this.hud.toast(`Better rods use bait from your backpack automatically.`,`Bait`):this.hud.toast(`Put it in the shipping bin to sell it.`,t.item)}begin(e,t){this.act=e,this.actTime=0,this.actApplied=!1,this.actTile=t,this.game.faceTile(t[0],t[1])}updateAct(e,t){let n=this.game;if(this.act===`none`){(t||this.useHeld&&!n.fishing.active&&[`hoe`,`can`,`axe`,`pickaxe`,`scythe`,`sword`].includes(Yc(n.heldItem)?.type??``))&&this.startUse();return}this.actTime+=e;let r=this.world,[i,a]=this.actTile,o=(e,t)=>{this.actTime>=e&&!this.actApplied&&(this.actApplied=!0,t())};switch(this.act){case`charge`:{r.pose=this.chargeAct===`hoe`?Vh.HoeUp:Vh.CanOut;let e=Yc(n.heldItem)?.tier??0,t=Math.min(e,Math.floor(this.actTime/Xh));t>this.area&&(this.area=t,Q.play(`select`,-2+t*2)),r.area=this.area>0?vm(n.playerTile,n.state.facing,i,a,this.area):null,this.useHeld||(r.area=null,this.begin(this.chargeAct,this.actTile));return}case`hoe`:r.pose=this.actTime<.2?Vh.HoeUp:Vh.HoeDown,o(.2,()=>{(this.area>0?n.useArea(i,a,this.area)>0:n.useTool(i,a))||Q.variant(`hoe`,2,-8)});break;case`water`:r.pose=this.actTime<.15?Vh.CanOut:Vh.CanPour,o(.2,()=>this.area>0?n.useArea(i,a,this.area):n.useTool(i,a));break;case`axe`:r.pose=this.actTime<.2?Vh.AxeUp:Vh.AxeDown,o(.2,()=>{n.useTool(i,a)||Q.variant(`axe`,2,-10)});break;case`pickaxe`:r.pose=this.actTime<.2?Vh.PickUp:Vh.PickDown,o(.2,()=>{n.useTool(i,a)||Q.variant(`pickaxe`,2,-10)});break;case`scythe`:r.pose=this.actTime<.1?Vh.ScytheBack:Vh.ScytheSweep,o(.1,()=>{Q.play(`scythe`,-4);let[e,t]=n.playerTile,r=i-e,o=a-t,s=r!==0&&o!==0?[[i-r,a],[i,a-o]]:r===0?[[i-1,a],[i+1,a]]:[[i,a-1],[i,a+1]];for(let[e,t]of[[i,a],...s])n.useTool(e,t)});break;case`sword`:r.pose=this.actTime<.06?Vh.SwordBack:this.actTime<.16?Vh.SwordMid:Vh.SwordFollow,o(.06,()=>n.useTool(i,a));break;case`plant`:r.pose=Vh.Crouch,o(.08,()=>n.useTool(i,a));break;case`harvest`:r.pose=Vh.Crouch}this.actTime>=Yh[this.act]&&(this.act=`none`,r.pose=Vh.Idle)}updateFishing(e,t){let n=this.game,r=n.fishing,i=this.world;if(!r.active){i.overhead=null;return}let a=this.useHeld;n.updateFishing(e,a,t),i.walking=!1,i.pose=r.phase===`charging`?Vh.CastBack:r.phase===`flying`?r.timer<.15?Vh.CastForward:Vh.RodOut:r.phase===`caught`?Vh.HoldUp:r.phase===`none`?Vh.Idle:Vh.RodOut,i.overhead=r.phase===`caught`?r.catch:null,r.phase===`reeling`&&a?(this.reelSound-=e,this.reelSound<=0&&(Q.play(`reel`,-6,.02),this.reelSound=.45)):this.reelSound=0}doInteract(){if(this.act!==`none`||this.game.fishing.active)return;let e=[];if(this.input.mouseAim){let t=this.world.tileAtScreen(this.input.mouseX,this.input.mouseY);this.game.inReach(t[0],t[1])&&e.push(t)}e.push(this.game.facingTile,this.game.playerTile);for(let[t,n]of e){let e=this.game.interact(t,n);if(e.kind!==`none`){e.kind===`harvested`?this.begin(`harvest`,[t,n]):this.game.faceTile(t,n),this.respond(e);return}}}respond(e){switch(e.kind){case`sleep`:{Q.play(`door`);let e=this.game.state.minutes<1080?`It's still early. Go to bed and end the day?`:`Go to bed for the night?`;this.showMenu(new wh(e,[[`Not yet`,()=>{}],[`Sleep`,()=>this.endDay(!1)]]));break}case`shop`:Q.play(`ui_open`),this.showMenu(new ph(this.game,e.shop));break;case`cook`:Q.play(`ui_open`),this.openMenu(`cooking`);break;case`talk`:this.showMenu(new Th(this.game,e.npc,e.text,e.mood===`happy`));break;case`board`:Q.play(`ui_open`),this.showMenu(new xh(this.game));break;case`hall`:Q.play(`door`),this.showMenu(new Sh(this.game));break;case`elevator`:Q.play(`ui_open`),this.showMenu(new yh(this.game));break;case`cauldron`:Q.play(`ui_open`),this.showMenu(new gh(this.game,e.key));break;case`mail`:Q.play(`mail`),this.showMenu(new bh(e.letter));break;case`bin`:Q.play(`ui_open`),this.world.binOpen=!0,this.showMenu(new Ch(this.game).onClose(()=>this.world.binOpen=!1));break;case`chest`:Q.play(`chest_open`),this.world.openChest=e.key,this.showMenu(new fh(this.game,e.key).onClose(()=>{this.world.openChest=null,Q.play(`chest_close`)}));break;case`text`:Q.play(`ui_open`),this.showMenu(new wh(e.text))}}askToEat(e){let t=this.game.state.backpack[e];if(!t)return;let n=J(t.item);this.showMenu(new wh(`Eat the ${il(t)}? (+${Math.floor(n.energy*[1,1.4,1.8][t.quality??0])} energy)`,[[`No`,()=>{}],[`Eat`,()=>this.game.eat(e)]]))}showMenu(e){this.menu?.close(),this.game.cancelFishing(),this.act=`none`,this.menu=e}openMenu(e=`backpack`){Q.play(`ui_open`),this.showMenu(new dh(this.game,e=>queueMicrotask(()=>this.askToEat(e)),e))}handleEvents(){let e=this.world,t=this.game;for(let n of t.events){let r=n.x*16+8,i=n.y*16+8;switch(n.kind){case`tilled`:Q.variant(`hoe`,2),e.play(r,i,Hm.dirt,3);break;case`watered`:Q.play(`water`),e.play(r,i-2,Hm.droplets,3,10);break;case`refilled`:Q.play(`refill`),e.play(r,i,Hm.splash,4),this.hud.toast(`Watering can filled.`,t.toolItem(`can`));break;case`planted`:case`fertilized`:Q.play(`plant`);break;case`chop`:Q.variant(`axe`,2),e.play(r,i-4,Um.chips,4,14,void 0,`fx2`);break;case`pick`:Q.variant(`pickaxe`,2),e.play(r,i-2,Um.shards,4,14,void 0,`fx2`);break;case`cut`:e.play(r,i-2,Um.grass,3,12,void 0,`fx2`);break;case`bonk`:Q.play(`denied`,-6);break;case`treeFell`:Q.play(`tree_fall`),e.play(r,i-20,Um.leaf,1,2,void 0,`fx2`),e.play(r-6,i-30,Um.chips,4,8,void 0,`fx2`);break;case`placed`:Q.play(`place`);break;case`pickedUp`:Q.play(`pickup`);break;case`harvested`:case`foraged`:Q.play(`harvest`),e.play(r,i-8,n.quality===2?Um.gold:Hm.sparkle,n.quality===2?1:2,8,void 0,n.quality===2?`fx2`:`fx`),e.popItem(r,i-10,e.playerX,e.playerY-20,n.item),this.hud.toast(`+${n.count} ${J(n.item).name}${n.quality?[``,` (silver)`,` (gold)`][n.quality]:``}`,n.item);break;case`gained`:n.item?this.hud.toast(`+${n.count} ${J(n.item).name}`,n.item):n.text&&this.hud.toast(n.text,null);break;case`ladder`:Q.play(`ladder`);break;case`bottle`:Q.play(`mail`);break;case`timeshift`:Q.play(`elevator`,-4),window.setTimeout(()=>this.world.play(this.world.playerX,this.world.playerY-12,8,4,8,void 0,`fx3`),50),this.hud.toast(n.count?`The watch ticks backward. Thirty years ago...`:`The watch ticks on. You're back.`,`PocketWatch`);break;case`pastFirst`:window.setTimeout(()=>this.showMenu(new Fh(t,[...id.firstMeeting.map(e=>({who:e.who,text:e.text,happy:e.who!==`walt`})),{who:`nell`,text:id.orchardGive,happy:!0}])),700);break;case`pastDone`:this.showMenu(new Th(t,n.item?`nell`:`walt`,n.text,!0)),Q.play(`quest`);break;case`capsuleFound`:t.pendingLetter&&=(Q.play(`treasure`),this.showMenu(new bh(t.pendingLetter)),null);break;case`sent`:Q.play(`splash`,-4),e.play(r,i,Hm.splash,4),this.hud.toast(n.text,n.item);break;case`learned`:Q.play(`quest`,-4),this.hud.toast(n.text,n.item,$.gold);break;case`brewing`:Q.play(`machine`);break;case`magic`:{Q.play(`machine_done`,-2);let t=Zh[n.item??``]??[1,1,1,1];e.play(r,i-6,0,4,10,void 0,`fx3`),e.play(r,i-2,12,4,12,t,`fx3`),(n.item===`GrowthTonic`||n.item===`BottledSunshine`)&&e.play(r,i-10,4,4,10,void 0,`fx3`),this.hud.toast(n.text,n.item);break}case`elevator`:Q.play(`elevator`);break;case`rockBroke`:Q.play(`rock_break`,-4),e.play(r,i-4,Um.shards,4,16,void 0,`fx2`);break;case`ladderFound`:Q.play(`ladder`,-6),this.hud.toast(`A ladder down!`,null,$.gold);break;case`monsterHit`:Q.play(`hit`),e.play(n.x,n.y-8,Um.spark,3,18,void 0,`fx2`);break;case`monsterDied`:Q.play(n.text===`slime`?`slime`:`monster_die`),e.play(n.x,n.y-8,Um.poof,4,12,void 0,`fx2`);break;case`hurt`:Q.play(`hurt`);break;case`petted`:Q.play(n.text===`cow`?`cow`:`chicken_${1+n.count%2}`),e.play(n.x,n.y-(n.text===`cow`?34:22),Um.emoteHeart,1,.8,void 0,`fx2`);break;case`milked`:Q.play(`milk`),e.popItem(n.x,n.y-16,e.playerX,e.playerY-20,n.item),this.hud.toast(`+1 ${J(n.item).name}`,n.item);break;case`quest`:if(n.text===`accepted`)break;Q.play(`quest`),n.text===`request`?this.hud.toast(`Request complete: +${n.count}g`,n.item,$.gold):this.hud.toast(`Quest complete: ${n.text} (+${n.count}g)`,null,$.gold);break;case`bundleDone`:this.hud.toast(n.text,n.item,$.gold);break;case`sold`:this.hud.toast(`Sold ${n.count} ${J(n.item).name}: +${n.text}g`,n.item);break;case`loaded`:Q.play(`machine`),n.text&&this.hud.toast(`Making ${n.text}...`,n.item);break;case`collected`:Q.play(`machine_done`),e.popItem(r,i-16,e.playerX,e.playerY-20,n.item),this.hud.toast(`+${n.count} ${n.text}`,n.item);break;case`crafted`:this.hud.toast(`Crafted ${n.count>1?`${n.count} `:``}${J(n.item).name}`,n.item);break;case`ate`:Q.play(`eat`),this.hud.toast(`Ate the ${J(n.item).name}. +${n.count} energy`,n.item);break;case`bought`:this.hud.toast(`+${n.count} ${J(n.item).name}`,n.item);break;case`denied`:(n.text!==this.lastDenied||this.clock-this.lastDeniedTime>2)&&(Q.play(`denied`),this.hud.toast(n.text,null,$.gold),this.lastDenied=n.text,this.lastDeniedTime=this.clock);break;case`cast`:Q.play(`cast`);break;case`plop`:{Q.play(`plop`);let[t,n]=e.bobberTarget();e.play(t,n,Hm.splash,4);break}case`fizzle`:Q.play(`denied`),this.hud.toast(n.text,null,$.gold);break;case`nibble`:{Q.play(`nibble`),e.nibble();let[t,n]=e.bobberTarget();e.play(t,n,Hm.rippleSmall,2,6);break}case`bite`:{Q.play(`bite`);let[t,n]=e.bobberTarget();e.play(t,n,Hm.splash,4);break}case`hooked`:Q.play(`reel`);break;case`caught`:this.onCaught(n);break;case`talked`:Q.play(`talk_${1+n.text.length%3}`);break;case`gift`:{Q.play(`gift`);let r=t.state.npcs[n.text];n.count>=45&&r&&(window.setTimeout(()=>Q.play(`heart`),250),e.play(r.px,r.py-40,Um.emoteHeart,1,.8,void 0,`fx2`));break}case`warped`:this.world=new Wh(t),this.world.onFootstep=()=>this.footstep(),this.act=`none`,this.fade=.8,this.fadeTarget=0,this.fadeSpeed=4,Q.play(`door`,-6);break;case`treasure`:Q.play(`treasure`),this.hud.toast(`Treasure! You found something in the chest.`,n.item);break;case`escaped`:Q.play(`escape`),this.hud.toast(`The fish got away...`);break;case`missed`:Q.play(`escape`),this.hud.toast(`Too slow! It let go of the hook.`)}}t.events.length=0}onCaught(e){let t=J(e.item),n=this.world;if(n.play(n.playerX,n.playerY-40,e.quality===2?Um.gold:Hm.sparkle,e.quality===2?1:2,6,void 0,e.quality===2?`fx2`:`fx`),t.kind===`fish`){Q.play(`catch`);let n=this.game.state.stats.caught[e.item]??0,r=this.game.fishing.newRecord&&n>1?` New record!`:``,i=n===1?` (new species!)`:``,a=e.quality?[``,` Silver quality.`,` Gold quality!`][e.quality]:``;this.hud.toast(`Caught a ${t.name}! ${e.count} in.${a}${r}${i}`,e.item)}else Q.play(`pickup`),this.hud.toast(`Reeled in... ${t.name}.`,e.item)}footstep(){let e=this.game,[t,n]=e.playerTile,r=e.map,i=e.floorAt(t,n);r.featureAt(t,n)===Y.Dock||i===`WoodPath`||r.theme===`indoor`&&r.id!==`greenhouse`?Q.variant(`step_wood`,3,-6):i===`StonePath`||r.theme===`mine`||r.id===`greenhouse`||r.groundAt(t,n)===sl.Cobble?Q.variant(`step_stone`,3,-8):r.groundAt(t,n)===sl.Sand?Q.variant(`step_sand`,3,-8):e.season===`winter`&&!e.soilAt(t,n)?Q.variant(`step_snow`,3,-8):r.groundAt(t,n)===sl.Path||e.soilAt(t,n)?Q.variant(`step_dirt`,3,-8):Q.variant(`step_grass`,4,-8)}nightWarnings(){let e=this.game.state.minutes;e!==this.lastMinutes&&(this.lastMinutes<1440&&e>=1440?this.hud.toast(`It's midnight. You should get to bed.`,null,$.gold):this.lastMinutes<1500&&e>=1500&&this.hud.toast(`You can barely keep your eyes open...`,null,$.bad),this.lastMinutes=e)}ambientLife(e){let t=this.world,n=this.game;if(n.state.weather===`stormy`&&(this.nextThunder-=e,this.nextThunder<=0&&(this.nextThunder=8+Math.random()*14,t.lightning(),window.setTimeout(()=>Q.play(`thunder`,-4),300+Math.random()*900))),this.nextJump-=e,!(this.nextJump>0)){this.nextJump=3+Math.random()*5;for(let e=0;e<12;e++){let e=Math.floor((t.camX+Math.random()*480)/16),r=Math.floor((t.camY+Math.random()*270)/16);if(n.map.fishable(e,r)&&n.map.featureAt(e,r)===Y.None&&!n.objectAt(e,r)&&!(n.fishing.active&&Math.abs(e-n.fishing.bobberX)+Math.abs(r-n.fishing.bobberY)<3)){t.play(e*16+8,r*16+8,Hm.splash,4,10),t.play(e*16+8,r*16+10,Hm.rippleSmall,2,4),Q.play(`splash`,-16);return}}}}endDay(e){this.fadeTarget!==1&&(this.game.cancelFishing(),this.act=`none`,this.menu?.close(),this.menu=null,Q.hush(!0),Q.play(e?`escape`:`sleep`),this.fadeTarget=1,this.fadeSpeed=1/(e?1.2:.9),this.afterFade=()=>{let t=this.game.endDay(e);this.game.events.length=0,this.lastMinutes=this.game.state.minutes,this.world.snapCamera(),this.save(),t.total>0&&Q.play(`day_summary`),t.levelUps.length&&window.setTimeout(()=>Q.play(`level_up`),400),this.menu=new Eh(t,()=>this.startMorning())})}startMorning(){let e=this.game;if(Q.hush(!1),Q.play(`morning`),this.fadeTarget=0,this.fadeSpeed=1/.7,this.hud.toast(`${e.dayText}. ${{rainy:`Rain today.`,stormy:`Storms today.`,snowy:`Snow today.`,windy:`A windy day.`,sunny:`A fine day.`}[e.state.weather]}`),e.state.crowAte!==void 0){let t=e.map.width;this.world.crowFrom(e.state.crowAte%t,Math.floor(e.state.crowAte/t)),Q.play(`crow`)}}save(){if(this.saveEnabled)try{localStorage.setItem(tg,this.game.saveJson())}catch{}}},tg=`fernbrook-save`,ng={left:[`KeyA`,`ArrowLeft`],right:[`KeyD`,`ArrowRight`],up:[`KeyW`,`ArrowUp`],down:[`KeyS`,`ArrowDown`],use:[`KeyC`,`Space`],interact:[`KeyX`,`KeyF`,`Enter`],backpack:[`KeyE`,`Tab`,`KeyI`],pause:[`Escape`],fullscreen:[`F11`],slot1:[`Digit1`],slot2:[`Digit2`],slot3:[`Digit3`],slot4:[`Digit4`],slot5:[`Digit5`],slot6:[`Digit6`],slot7:[`Digit7`],slot8:[`Digit8`],slot9:[`Digit9`],slot10:[`Digit0`],slot11:[`Minus`],slot12:[`Equal`]},rg={use:[2],interact:[0],backpack:[1,3],pause:[9]},ig=new Set([`Tab`,`Space`,`ArrowLeft`,`ArrowRight`,`ArrowUp`,`ArrowDown`,`F11`,`Enter`]),ag=class{canvas;scale;held=new Set;pressedNow=new Set;pressedQueue=new Set;mouseX=-100;mouseY=-100;leftDown=!1;rightDown=!1;leftPressed=!1;rightPressed=!1;wheel=0;shift=!1;mouseAim=!1;consumed=!1;gamepad=!1;cursorMode=!1;pad=[];padPrev=[];padX=0;padY=0;queuedLeft=!1;queuedRight=!1;queuedWheel=0;constructor(e,t){this.canvas=e,this.scale=t,window.addEventListener(`keydown`,e=>{ig.has(e.code)&&e.preventDefault(),e.repeat||this.pressedQueue.add(e.code),this.held.add(e.code),this.shift=e.shiftKey}),window.addEventListener(`keyup`,e=>{this.held.delete(e.code),this.shift=e.shiftKey}),window.addEventListener(`blur`,()=>{this.held.clear(),this.leftDown=this.rightDown=!1}),e.addEventListener(`contextmenu`,e=>e.preventDefault()),window.addEventListener(`pointermove`,e=>{this.locate(e),this.mouseAim=!0,this.gamepad=!1}),e.addEventListener(`pointerdown`,t=>{this.locate(t),this.shift=t.shiftKey,t.button===0?(this.leftDown=!0,this.queuedLeft=!0):t.button===2&&(this.rightDown=!0,this.queuedRight=!0),e.setPointerCapture(t.pointerId)}),window.addEventListener(`pointerup`,e=>{e.button===0?this.leftDown=!1:e.button===2&&(this.rightDown=!1)}),e.addEventListener(`wheel`,e=>{e.preventDefault(),this.queuedWheel+=Math.sign(e.deltaY)},{passive:!1})}locate(e){let t=this.canvas.getBoundingClientRect(),n=this.scale();this.mouseX=(e.clientX-t.left)/n,this.mouseY=(e.clientY-t.top)/n}poll(e=1/60){this.pressedNow.clear();for(let e of this.pressedQueue)this.pressedNow.add(e);this.pressedQueue.clear(),this.leftPressed=this.queuedLeft,this.rightPressed=this.queuedRight,this.queuedLeft=this.queuedRight=!1,this.wheel=this.queuedWheel,this.queuedWheel=0,this.consumed=!1,this.pollPad(e)}pollPad(e){this.padPrev=this.pad;let t=typeof navigator.getGamepads==`function`?[...navigator.getGamepads()].find(e=>e&&e.connected):null;if(!t){this.pad=[],this.padX=this.padY=0;return}this.pad=t.buttons.map(e=>e.pressed);let n=t.axes[0]??0,r=t.axes[1]??0;Math.hypot(n,r)<.3&&(n=r=0),this.pad[14]&&(n=-1),this.pad[15]&&(n=1),this.pad[12]&&(r=-1),this.pad[13]&&(r=1),this.padX=n,this.padY=r,(n||r||this.pad.some(Boolean))&&(this.gamepad=!0,this.mouseAim=!1),this.hit(4)&&--this.wheel,this.hit(5)&&(this.wheel+=1),this.cursorMode&&this.gamepad&&((this.mouseX<0||this.mouseY<0)&&([this.mouseX,this.mouseY]=[240,135]),this.mouseX=Math.min(479,Math.max(0,this.mouseX+n*260*e)),this.mouseY=Math.min(269,Math.max(0,this.mouseY+r*260*e)),this.hit(0)&&(this.leftPressed=!0),this.hit(2)&&(this.rightPressed=!0))}hit(e){return!!this.pad[e]&&!this.padPrev[e]}padDown(e){return this.cursorMode&&(e===`use`||e===`interact`)?!1:rg[e]?.some(e=>this.pad[e])??!1}padHit(e){return this.cursorMode&&(e===`use`||e===`interact`)?!1:rg[e]?.some(e=>this.hit(e))??!1}isDown(e){return e===`use`&&this.leftDown||e===`interact`&&this.rightDown?!0:ng[e].some(e=>this.held.has(e))||this.padDown(e)}pressed(e){return e===`use`&&this.leftPressed&&!this.consumed||e===`interact`&&this.rightPressed&&!this.consumed?!0:ng[e].some(e=>this.pressedNow.has(e))||this.padHit(e)}keyPressed(e){return ng[e].some(e=>this.pressedNow.has(e))||this.padHit(e)}axis(){let e=+!!this.isDown(`right`)-!!this.isDown(`left`),t=+!!this.isDown(`down`)-!!this.isDown(`up`);return this.cursorMode||(!e&&Math.abs(this.padX)>.4&&(e=Math.sign(this.padX)),!t&&Math.abs(this.padY)>.4&&(t=Math.sign(this.padY))),[e,t]}inside(e,t,n,r){return this.mouseX>=e&&this.mouseX<e+n&&this.mouseY>=t&&this.mouseY<t+r}};function og(e,t){let n=e.state;for(let r of t)if(/^mine[0-9]*$/.test(r))n.day=Math.max(n.day,5),e.backpack.add(`SteelSword`,1),e.backpack.add(`IronPickaxe`,1),Ll(e,Number(r.slice(4))||1),e.events.length=0;else switch(r){case`summer`:case`fall`:case`winter`:n.day=1+G.daysPerSeason*[`spring`,`summer`,`fall`,`winter`].indexOf(r);break;case`field`:ug(e);break;case`night`:n.minutes=1260;break;case`evening`:n.minutes=1140;break;case`rain`:case`storm`:case`snow`:case`wind`:if(n.weather={rain:`rainy`,storm:`stormy`,snow:`snowy`,wind:`windy`}[r],r!==`snow`&&r!==`wind`)for(let e of Object.values(n.maps.farm.soil))e.watered=!0;break;case`dock`:cg(e,36,18,X.Down),lg(e,`FishingRod`);break;case`bite`:case`reeling`:cg(e,36,18,X.Down),lg(e,`FishingRod`),Qp(e,r===`bite`?`Carp`:`LargemouthBass`,r===`reeling`);break;case`stocked`:n.money=2345;for(let[t,n]of[[`Parsnip`,12],[`Potato`,5],[`Cauliflower`,2],[`Strawberry`,7],[`Sunfish`,3],[`Carp`,2],[`Wood`,99],[`Stone`,60],[`Fiber`,30],[`Sap`,12],[`Coal`,10],[`CopperBar`,3],[`IronBar`,3],[`Leek`,2],[`Dandelion`,2]])e.backpack.add(t,n);e.backpack.add(`Melon`,2,{quality:2});for(let e of[`Sunfish`,`Carp`,`LargemouthBass`,`Catfish`,`GoldenKoi`])n.stats.caught[e]=2,n.stats.biggestFish[e]=20;n.bin.push({item:`Parsnip`,count:6});break;case`workshop`:dg(e);break;case`skilled`:for(let e of Object.keys(n.xp))n.xp[e]=G.xpLevels[5],n.levelsShown[e]=6;break;case`friendly`:{let t=[2600,1600,900,700,500,300,0,0];Object.values(n.friends).forEach((e,n)=>{e.met=n<6,e.points=Math.min(2500,t[n]??0)});for(let e of If.slice(0,3))n.bundles[e.id]=e.items.slice(0,e.id===`summer`?2:e.need);n.quest=3,n.board&&(n.board.accepted=!0),e.endDay(!1),e.placeAtDoor(),n.stats.shipped.Parsnip=15;break}case`greenhouse`:{for(let e of If)n.bundles[e.id]=e.items.slice(0,e.need);e.endDay(!1);let t=n.maps.greenhouse,r=e.maps.greenhouse.width;[`Parsnip`,`Melon`,`Pumpkin`,`Strawberry`,`Blueberry`,`Cranberry`,`Cauliflower`,`Tomato`,`Yam`,`Corn`].forEach((e,n)=>{let i=Du.find(t=>t.id===e)??Du[n%Du.length];for(let e=3;e<=8;e++){let a=t.soil[e*r+2+n];a&&(a.crop={id:i.id,growth:Math.min(i.daysToGrow,e-2+n%3),harvests:0}),a&&(a.watered=e%2==0)}}),e.warp(`greenhouse`,Mf.x,Mf.y,X.Up,!1);break}case`ranch`:n.ranch.coop=n.ranch.barn=!0,e.state.money=2e4;for(let t of[`chicken`,`chicken`,`chicken`,`cow`,`cow`])mu(e,t,0);n.ranch.animals.forEach((e,t)=>e.friendship=t*250),n.ranch.hay=12,e.backpack.add(`MilkPail`,1),e.backpack.add(`Hay`,20),e.endDay(!1),uu(e),e.events.length=0,e.warp(`coop`,4,4,X.Up,!1);break;case`magic`:{let t=e.maps.farm.width,r=n.maps.farm;n.magic.notebook=!0;for(let[t,n]of[[`Notebook`,1],[`Rainbell`,3],[`Moonmint`,4],[`Glowcap`,2],[`FoolsClover`,2],[`Honey`,2],[`Quartz`,2],[`Coal`,3],[`GrowthTonic`,2],[`RainCharm`,1],[`LuckTonic`,1],[`SweetDreams`,1]])e.backpack.add(t,n);n.magic.known={Rainbell:2,Moonmint:2,Coal:1,Honey:1},n.magic.brewed=[`GrowthTonic`,`RainCharm`],r.objects[16*t+20]={t:`placed`,item:`Cauldron`,output:{item:`LightPhilter`,count:1},readyAt:0},r.objects[16*t+22]={t:`placed`,item:`Cauldron`},[[`Rainbell`,1,5],[`Moonmint`,2,4],[`FoolsClover`,3,5],[`Rainbell`,4,2],[`Moonmint`,5,1]].forEach(([e,n,i])=>{for(let a=14;a<=15;a++)r.soil[a*t+13+n]={watered:a===14,crop:{id:e,growth:i,harvests:0}}}),r.objects[16*t+34]={t:`herb`,crop:`Waterlily`,growth:6,harvests:0},r.objects[17*t+33]={t:`herb`,crop:`Waterlily`,growth:3,harvests:0},n.maps.minehub.objects[78]={t:`herb`,crop:`Glowcap`,growth:5,harvests:0},e.state.playerX=296,e.state.playerY=270;break}case`minehub`:n.day=Math.max(n.day,5),e.backpack.add(`SteelSword`,1),e.warp(`minehub`,6,6,X.Up,!1);break;case`cleared`:for(let[e,t]of Object.entries(n.maps.farm.objects))(t.t===`debris`||t.t===`part`)&&delete n.maps.farm.objects[Number(e)]}}function sg(e,t){let n=e.game;for(let r of t)switch(r){case`open-welcome`:e.showWelcome();break;case`open-shop`:e.showMenu(new ph(n));break;case`open-store`:case`open-smithy`:case`open-carpenter`:case`open-saloon`:case`open-ranch`:case`open-fish_shop`:e.showMenu(new ph(n,r.slice(5)));break;case`open-bin`:e.showMenu(new Ch(n));break;case`open-mail`:{let t=nu(n);t&&e.showMenu(new bh(t));break}case`open-board`:e.showMenu(new xh(n));break;case`open-hall`:e.showMenu(new Sh(n));break;case`open-friends`:e.showMenu(new dh(n,()=>{},`friends`));break;case`open-journal`:e.showMenu(new dh(n,()=>{},`journal`));break;case`open-backpack`:e.showMenu(new dh(n,()=>{}));break;case`open-crafting`:e.showMenu(new dh(n,()=>{},`crafting`));break;case`open-skills`:e.showMenu(new dh(n,()=>{},`skills`));break;case`open-chest`:{let t=Object.entries(n.state.maps.farm.objects).find(([,e])=>e.t===`placed`&&e.item===`Chest`)?.[0];t&&e.showMenu(new fh(n,Number(t)));break}case`open-pause`:e.showMenu(new jh(()=>{}));break;case`open-sleep`:e.showMenu(new wh(`Go to bed for the night?`,[[`Not yet`,()=>{}],[`Sleep`,()=>{}]]));break;case`open-summary`:e.showMenu(new Eh({day:1,shipped:[{item:`Parsnip`,count:9},{item:`Melon`,count:2,quality:2},{item:`Jelly`,count:1,source:`Strawberry`}],total:1355,passedOut:!1,weather:`rainy`,levelUps:[{skill:`farming`,level:2}],notes:[`A crow ate one of your parsnip crops. Scarecrows keep them away.`]},()=>{}))}}function cg(e,t,n,r){e.state.playerX=t*16+8,e.state.playerY=n*16+14,e.state.facing=r}function lg(e,t){let n=e.state.backpack.findIndex(e=>e?.item===t);n>=0&&(e.state.selected=n)}function ug(e){let t=e.state,n=e.map.width,r=e.season===`winter`?`fall`:e.season;Du.filter(e=>e.seasons.includes(r)).slice(0,4).forEach((r,i)=>{for(let a=0;a<8;a++){let o=13+a,s=14+i;delete t.maps.farm.objects[s*n+o];let c={watered:(a+i)%3!=0,crop:null};a<7&&(c.crop={id:r.id,growth:Math.min(r.daysToGrow,Math.floor(a*r.daysToGrow/5)),harvests:0},r.regrowDays>0&&a===6&&(c.crop={id:r.id,growth:r.daysToGrow-r.regrowDays,harvests:1}),e.season===`winter`&&(c.crop.dead=!0)),t.maps.farm.soil[s*n+o]=c}});for(let e=12;e<=21;e++)delete t.maps.farm.objects[13*n+e];cg(e,17,13,X.Down),lg(e,`WateringCan`)}function dg(e){let t=e.state,n=e.map.width,r=t.maps.farm.objects,i=e.now,a=(e,t)=>t*n+e;for(let e=9;e<=22;e++)for(let t=13;t<=19;t++)delete r[a(e,t)];r[a(10,14)]={t:`placed`,item:`PreservesJar`,output:{item:`Jelly`,count:1,source:`Strawberry`},readyAt:i},r[a(11,14)]={t:`placed`,item:`PreservesJar`,output:{item:`Pickles`,count:1,source:`Parsnip`},readyAt:i+900},r[a(12,14)]={t:`placed`,item:`Keg`,output:{item:`Wine`,count:1,source:`Melon`},readyAt:i+3e3},r[a(10,16)]={t:`placed`,item:`Furnace`,output:{item:`CopperBar`,count:1},readyAt:i+20},r[a(11,16)]={t:`placed`,item:`BeeHouse`,output:{item:`Honey`,count:1},readyAt:i},r[a(12,16)]={t:`placed`,item:`Chest`,chest:[{item:`Wood`,count:80},{item:`Stone`,count:40},...Array(22).fill(null)]},r[a(10,18)]={t:`placed`,item:`MayonnaiseMachine`},r[a(11,18)]={t:`placed`,item:`CheesePress`},r[a(12,18)]={t:`placed`,item:`Scarecrow`},r[a(16,15)]={t:`placed`,item:`Sprinkler`},r[a(20,15)]={t:`placed`,item:`QualitySprinkler`};for(let e=9;e<=13;e++)t.maps.farm.floors[a(e,19)]=e%2?`WoodPath`:`StonePath`;for(let e=15;e<=21;e++)for(let n=14;n<=16;n++)r[a(e,n)]||(t.maps.farm.soil[a(e,n)]={watered:!0,crop:{id:`Parsnip`,growth:2,harvests:0}});cg(e,14,17,X.Left)}var fg=class{hasSave;onNew;onContinue;world;time=0;constructor(e,t,n){this.hasSave=e,this.onNew=t,this.onContinue=n;let r=Cm.newGame(11);og(r,[`field`]),r.state.playerX=-100,this.world=new Wh(r),this.world.follow=!1}frame(e,t,n,r){this.time+=e;let i=(Math.sin(this.time*.05-1.2)+1)/2;this.world.camX=250+310*i-240,this.world.camY=125,this.world.update(e),this.world.draw(n,r,[1,1,1,1],0),Q.update(e,480,`sunny`,20,`spring`,!0),t.b.sheet(`logo`,144,26);let a=this.hasSave(),o=(a?3:2)*22+10;t.panel(188,120,104,o);let s=126;a&&(t.button(194,s,92,18,`Continue`)&&this.onContinue(),s+=22),t.button(194,s,92,18,`New farm`)&&this.onNew(),s+=22,t.button(194,s,92,18,`Fullscreen`)&&Mh(),t.centered(`A tiny farming and fishing demo`,240,252,$.paper,$.ink)}},pg=480,mg=270,hg=`./`;async function gg(){let e=document.getElementById(`game`),t=new bc({canvas:e,antialias:!1,alpha:!1,preserveDrawingBuffer:!0});t.setPixelRatio(1),t.setClearColor(0);let n=1,i=()=>{let r=Math.min(window.innerWidth/pg,window.innerHeight/mg);n=r>=1?Math.floor(r):r;let i=Math.max(1,Math.round(n*window.devicePixelRatio));$m.snap=i,t.setSize(pg*i,mg*i,!1),e.style.width=`${pg*n}px`,e.style.height=`${mg*n}px`};i(),window.addEventListener(`resize`,i),await Om(`${hg}assets/art/`);let a=await Rh.load(`${hg}assets/art/`),o=new qr(a.canvas);o.magFilter=r,o.minFilter=r,o.generateMipmaps=!1,o.flipY=!1,o.colorSpace=``;let s=new ft(pg,mg),c=new $m(a,o,s,!1),l=new $m(a,o,s,!0,64),u=new $m(a,o,s,!1),d=new bn;[c,l,u].forEach((e,t)=>{e.mesh.renderOrder=t,d.add(e.mesh)});let f=new Ri(0,pg,0,mg),p=new ag(e,()=>n),m=new ih(u,p);Q.init(`${hg}assets/audio/`);let h=()=>Q.unlock();window.addEventListener(`pointerdown`,h),window.addEventListener(`keydown`,h);let g=new URLSearchParams(location.search),_=(g.get(`setup`)??``).split(`,`).filter(Boolean),v=g.has(`autopilot`),y=g.has(`nosave`)||_.length>0||v,b=g.has(`seed`)?Number(g.get(`seed`)):Date.now()>>>0,x=null,S=null,C=null,w=()=>{try{let e=localStorage.getItem(tg);return e?JSON.parse(e):null}catch{return null}},T=e=>{S=null,x=new eg(e,!y,p),x.onExitToTitle=D,sg(x,_),g.has(`shot`)&&x.skipIntro(),v&&(C=new Nh(x)),O()},E=()=>{let e=Cm.newGame(b);og(e,_),T(e)};function D(){x=null,C=null,S=new fg(()=>w()!==null,E,()=>{let e=w();e&&T(Cm.fromState(e))}),O()}function O(){window.fernbrook={get game(){return x?.game},get farm(){return x},get autopilot(){return C?.result??null},scenes:mp,step:k}}g.has(`new`)||_.length>0||v?E():D(),window.addEventListener(`beforeunload`,()=>x?.save()),window.addEventListener(`keydown`,e=>{e.code===`F11`&&Mh()});function k(e){p.poll(e),p.gamepad&&Q.unlock();for(let e of[c,l,u])e.begin();x?(C?.update(e),x.frame(e,m,c,l)):S&&S.frame(e,m,c,l),p.cursorMode=!x||x.menu!==null,p.gamepad&&p.cursorMode&&_g(u,Math.round(p.mouseX),Math.round(p.mouseY));for(let e of[c,l,u])e.end();t.render(d,f)}let A=performance.now(),ee=e=>{let t=Math.min(.1,(e-A)/1e3);A=e,k(t),requestAnimationFrame(ee)};requestAnimationFrame(ee)}function _g(e,t,n){let r=[.16,.1,.07,1],i=[1,.97,.88,1];for(let i=0;i<9;i++)e.rect(t-1,n+i-1,Math.min(i,6)+3,1,r);for(let r=0;r<7;r++)e.rect(t,n+r,Math.min(r,5)+1,1,i);e.rect(t+2,n+7,2,3,r)}gg().catch(e=>{console.error(e),document.body.insertAdjacentHTML(`beforeend`,`<pre style="color:#fdd">Fernbrook failed to start: ${String(e)}</pre>`)});