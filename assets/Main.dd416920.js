var Q=Object.defineProperty;var Y=(s,r,o)=>r in s?Q(s,r,{enumerable:!0,configurable:!0,writable:!0,value:o}):s[r]=o;var y=(s,r,o)=>(Y(s,typeof r!="symbol"?r+"":r,o),o);import{S as H,L as b,T as F,R as B,a as C,C as P,b as S,r as T,A as W,o as z,d as A,c as R,e as U,f as O,t as q,u as D,n as L}from"./index.10af7891.js";const m=Math.min(document.body.clientWidth,375),M=Math.min(document.body.clientHeight,667);var X="/pixi-games/assets/player.38b01e98.png",k={exports:{}};(function(s,r){(function(o,c){s.exports=c()})(self,function(){return(()=>{var o={679:(d,u)=>{u.__esModule=!0,u.Easing=void 0;var l=function(){function t(){}return t.linear=function(e){return e},t.easeInQuad=function(e){return Math.pow(e,2)},t.easeOutQuad=function(e){return-(Math.pow(e-1,2)-1)},t.easeInOutQuad=function(e){return(e/=.5)<1?.5*Math.pow(e,2):-.5*((e-=2)*e-2)},t.easeInCubic=function(e){return Math.pow(e,3)},t.easeOutCubic=function(e){return Math.pow(e-1,3)+1},t.easeInOutCubic=function(e){return(e/=.5)<1?.5*Math.pow(e,3):.5*(Math.pow(e-2,3)+2)},t.easeInQuart=function(e){return Math.pow(e,4)},t.easeOutQuart=function(e){return-(Math.pow(e-1,4)-1)},t.easeInOutQuart=function(e){return(e/=.5)<1?.5*Math.pow(e,4):-.5*((e-=2)*Math.pow(e,3)-2)},t.easeInQuint=function(e){return Math.pow(e,5)},t.easeOutQuint=function(e){return Math.pow(e-1,5)+1},t.easeInOutQuint=function(e){return(e/=.5)<1?.5*Math.pow(e,5):.5*(Math.pow(e-2,5)+2)},t.easeInSine=function(e){return 1-Math.cos(e*(Math.PI/2))},t.easeOutSine=function(e){return Math.sin(e*(Math.PI/2))},t.easeInOutSine=function(e){return-.5*(Math.cos(Math.PI*e)-1)},t.easeInExpo=function(e){return e===0?0:Math.pow(2,10*(e-1))},t.easeOutExpo=function(e){return e===1?1:1-Math.pow(2,-10*e)},t.easeInOutExpo=function(e){return e===0?0:e===1?1:(e/=.5)<1?.5*Math.pow(2,10*(e-1)):.5*(2-Math.pow(2,-10*--e))},t.easeInCirc=function(e){return-(Math.sqrt(1-e*e)-1)},t.easeOutCirc=function(e){return Math.sqrt(1-Math.pow(e-1,2))},t.easeInOutCirc=function(e){return(e/=.5)<1?-.5*(Math.sqrt(1-e*e)-1):.5*(Math.sqrt(1-(e-=2)*e)+1)},t.easeOutBounce=function(e){return e<1/2.75?7.5625*e*e:e<2/2.75?7.5625*(e-=1.5/2.75)*e+.75:e<2.5/2.75?7.5625*(e-=2.25/2.75)*e+.9375:7.5625*(e-=2.625/2.75)*e+.984375},t.easeInBack=function(e){var n=1.70158;return e*e*((n+1)*e-n)},t.easeOutBack=function(e){var n=1.70158;return(e-=1)*e*((n+1)*e+n)+1},t.easeInOutBack=function(e){var n=1.70158;return(e/=.5)<1?e*e*((1+(n*=1.525))*e-n)*.5:.5*((e-=2)*e*((1+(n*=1.525))*e+n)+2)},t.elastic=function(e){return-1*Math.pow(4,-8*e)*Math.sin((6*e-1)*(2*Math.PI)/2)+1},t.swingFromTo=function(e){var n=1.70158;return(e/=.5)<1?e*e*((1+(n*=1.525))*e-n)*.5:.5*((e-=2)*e*((1+(n*=1.525))*e+n)+2)},t.swingFrom=function(e){var n=1.70158;return e*e*((n+1)*e-n)},t.swingTo=function(e){var n=1.70158;return(e-=1)*e*((n+1)*e+n)+1},t.bounce=function(e){return e<1/2.75?7.5625*e*e:e<2/2.75?7.5625*(e-=1.5/2.75)*e+.75:e<2.5/2.75?7.5625*(e-=2.25/2.75)*e+.9375:7.5625*(e-=2.625/2.75)*e+.984375},t.bouncePast=function(e){return e<1/2.75?7.5625*e*e:e<2/2.75?2-(7.5625*(e-=1.5/2.75)*e+.75):e<2.5/2.75?2-(7.5625*(e-=2.25/2.75)*e+.9375):2-(7.5625*(e-=2.625/2.75)*e+.984375)},t.easeFromTo=function(e){return(e/=.5)<1?.5*Math.pow(e,4):-.5*((e-=2)*Math.pow(e,3)-2)},t.easeFrom=function(e){return Math.pow(e,4)},t.easeTo=function(e){return Math.pow(e,.25)},t}();u.Easing=l},919:function(d,u,l){var t=this&&this.__createBinding||(Object.create?function(n,a,i,h){h===void 0&&(h=i),Object.defineProperty(n,h,{enumerable:!0,get:function(){return a[i]}})}:function(n,a,i,h){h===void 0&&(h=i),n[h]=a[i]}),e=this&&this.__exportStar||function(n,a){for(var i in n)i==="default"||Object.prototype.hasOwnProperty.call(a,i)||t(a,n,i)};u.__esModule=!0,e(l(679),u),e(l(60),u)},60:function(d,u,l){var t=this&&this.__spreadArrays||function(){for(var a=0,i=0,h=arguments.length;i<h;i++)a+=arguments[i].length;var v=Array(a),p=0;for(i=0;i<h;i++)for(var f=arguments[i],g=0,w=f.length;g<w;g++,p++)v[p]=f[g];return v};u.__esModule=!0,u.Tweener=void 0;var e=l(679),n=function(){function a(){}return a.init=function(i){a.ticker||(a.ticker=i,a.ticker.add(a.update))},a.tweening=function(){return a.tweens.length>0},a.dispose=function(){a.ticker&&(a.ticker.remove(a.update),a.ticker=void 0,a.tweens=[])},a.add=function(i,h){var v=i.target,p=Object.assign.apply(Object,t([{}],Object.keys(h).map(function(w){var x;return(x={})[w]=v[w],x}))),f=Object.assign.apply(Object,t([{}],Object.keys(h).map(function(w){var x;return(x={})[w]=h[w]-p[w],x}))),g=i.useTickForDuration?i.duration:1e3*i.duration;return new Promise(function(w){var x={duration:g,useTickForDuration:!!i.useTickForDuration,ease:i.ease||e.Easing.linear,target:i.target,delay:i.delay?1e3*i.delay:0,currentTime:0,props:h,propDeltas:f,startingProps:p,onComplete:w,onUpdate:i.onUpdate||void 0,context:i.context||v};a.tweens.push(x)})},a.killTweensOf=function(i,h){var v=[];a.tweens.forEach(function(p){p.context===i||p.target===i?!h&&p.onComplete():v.push(p)}),a.tweens=v},a.advance=function(i){for(var h=!1,v=0,p=a.tweens;v<p.length;v++){var f=p[v],g=f.useTickForDuration?1:i;if(f.delay>0){if(f.delay-=g,!(f.delay<=0))continue;g=-f.delay}f.currentTime+=g;for(var w=Math.min(1,f.currentTime/f.duration),x=f.ease(w),_=0,E=Object.keys(f.props);_<E.length;_++){var I=E[_];f.target[I]=f.startingProps[I]+x*f.propDeltas[I]}f.onUpdate&&f.onUpdate(w),f.currentTime>=f.duration&&(f.onComplete(),h=!0)}h&&(a.tweens=a.tweens.filter(function(j){return j.currentTime<j.duration}))},a.tweens=[],a.update=function(){return a.advance(a.ticker.elapsedMS)},a}();u.Tweener=n}},c={};return function d(u){if(c[u])return c[u].exports;var l=c[u]={exports:{}};return o[u].call(l.exports,l,l.exports,d),l.exports}(919)})()})})(k);const G=[[0,0,105,115],[106,0,104,115],[211,0,104,115],[316,0,104,115],[316,0,104,115],[423,0,109,115],[534,0,114,115],[650,0,114,115],[766,0,104,115],[873,0,130,113],[862,113,130,120],[370,115,100,115],[670,115,100,115],[470,115,100,115],[570,115,100,115],[772,115,92,115]];class N extends H{constructor(){super();y(this,"defaultY",m-160);y(this,"textures",[]);y(this,"status","run");y(this,"keydown",o=>{o.code==="ArrowUp"?(this.status="jump",this.y===this.defaultY&&k.exports.Tweener.add({target:this,duration:.3,ease:k.exports.Easing.easeInOutQuint},{y:this.y-120})):o.code==="ArrowDown"&&(this.status="slide",this.texture=this.textures[10])});y(this,"keyup",()=>{this.status="run"});this.width=80,this.height=80,this.x=-120,this.y=this.defaultY,this.zIndex=10,this.loader(),this.watchEvent()}loader(){new b().add("player",X).load((c,d)=>{G.forEach((u,l)=>{const t=new F(d.player.texture,new B(...u));this.textures.push(t)})})}play(){const o=new C;o.autoStart=!0;const c=()=>{this.down(),this.entrance(),this.status==="run"?this.run():this.status==="jump"&&this.jump()};o.add(c)}watchEvent(){const o=this.keydown,c=this.keyup;document.addEventListener("keydown",o),document.addEventListener("keyup",c)}run(){this.texture=this.textures[Math.floor(Date.now()/100)%8]}jump(){this.texture=this.textures[Math.floor(Date.now()/100)%5+11]}down(){this.y<this.defaultY?(this.status="jump",this.y+=5):this.status==="jump"&&(this.status="run")}entrance(){this.x<120&&(this.x+=5)}clearEvent(){}}var V="/pixi-games/assets/footer.14bafa82.png",J="/pixi-games/assets/sky.ec09d89d.png";function K(){const s=new b,r=new P;r.height=130,r.zIndex=1;const o=new C;s.add("footer",V).add("sky",J).load(()=>{const d=new S(s.resources.footer.texture,M,130);d.y=m-130,d.zIndex=2;const u=new S(s.resources.sky.texture,M,m-80);u.tileScale.y=.6,u.zIndex=1,u.y=-30,r.addChild(d),r.addChild(u),r.sortChildren();const l=()=>{d.tilePosition.x-=3,u.tilePosition.x-=3};o.add(l)});function c(){o.start()}return{scene:r,runScene:c}}var Z="/pixi-games/assets/trap.8d103054.png";function $(s,r){let o,c,d,u,l;return o=!1,s.centerX=s.x+s.width/2,s.centerY=s.y+s.height/2,r.centerX=r.x+r.width/2,r.centerY=r.y+r.height/2,s.halfWidth=s.width/2,s.halfHeight=s.height/2,r.halfWidth=r.width/2,r.halfHeight=r.height/2,u=s.centerX-r.centerX,l=s.centerY-r.centerY,c=s.halfWidth+r.halfWidth,d=s.halfHeight+r.halfHeight,Math.abs(u)<c-25&&Math.abs(l)<d-20?o=!0:o=!1,o}const ee=[[30,55,130,40],[250,40,130,50],[35,280,130,60]];function te(){const s=new b,r=new P,o=new C,c=[];let d=null;const u=T(100),l=T(0);r.zIndex=3,s.add("trap",Z).load((e,n)=>{ee.forEach((a,i)=>{const h=new F(n.trap.texture,new B(...a));c.push(h)})}),s.load(()=>{setInterval(()=>{const e=Math.floor(Math.random()*2)+1,n=new H(c[e]);n.width=80,n.height=40,n.x=M,n.y=m-120,r.addChild(n);let a=!0,i=!0;function h(){n.x-=8,d&&(i&&$(d,n)?(u.value-=10,i=!1):a&&n.x<d.x&&(l.value++,a=!1)),n.x<-n.width&&(o.remove(h),r.removeChild(n))}o.add(h)},2e3)});function t(e){d=e,o.start()}return{trap:r,start:t,score:l,hp:u}}function ne(){const s=T(),r=new W({width:M,height:m,backgroundColor:16777215});k.exports.Tweener.init(r.ticker);const o=new P;r.stage.addChild(o);const c=new N,{scene:d,runScene:u}=K(),{trap:l,start:t,score:e,hp:n}=te();return o.addChild(c),o.addChild(d),o.addChild(l),o.sortChildren(),c.play(),u(),t(c),z(()=>{s.value&&s.value.appendChild(r.view)}),{containerRef:s,app:r,score:e,hp:n}}var re=(s,r)=>{const o=s.__vccOpts||s;for(const[c,d]of r)o[c]=d;return o};const ae={class:"score"},oe={class:"box"},ie=A({__name:"Main",setup(s){const{containerRef:r,score:o,hp:c}=ne();return(d,u)=>(R(),U("div",{class:"container",ref_key:"containerRef",ref:r},[O("div",ae,q(D(o)),1),O("div",oe,[O("div",{class:"hp",style:L({width:D(c)+"%"})},null,4)])],512))}});var ce=re(ie,[["__scopeId","data-v-bfc6e752"]]);export{ce as default};