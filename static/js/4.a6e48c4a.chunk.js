(this["webpackJsonpvideo-player"]=this["webpackJsonpvideo-player"]||[]).push([[4],{169:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return ye}));var n=a(119),c=a(23),r=a(1),i=a.n(r),o=a(167),l=a(117),s=a(168),u=a(145),b=a(150),d=a(153),j=a(172),O=a(155),f=a(156),v=a(157),g=a(158),h=function(){return{innerHeight:window.innerHeight,innerWidth:window.innerWidth,outerHeight:window.outerHeight,outerWidth:window.outerWidth}},x=function(){var e=Object(r.useState)(h()),t=Object(c.a)(e,2),a=t[0],n=t[1];function i(){n(h())}return Object(r.useEffect)((function(){return window.addEventListener("resize",i),function(){window.removeEventListener("resize",i)}}),[]),a},p="statistics.position.y",y="statistics.position.x",m=function(e,t,a){var n=Math.floor(t/2),c=Math.floor(a/2),r=Math.floor(e.innerHeight/2);return{x:Math.floor(e.innerWidth/2)-c,y:r-n}},k=function(e){var t=localStorage.getItem(e);if(null===t)return null;var a=parseFloat(t);return isNaN(a)?null:a};var C=i.a.createContext(!1),w=i.a.createContext((function(){console.log("ToggleStatisticsVisible's context has not yet been set.")})),T=i.a.createContext(m({innerHeight:window.innerHeight,innerWidth:window.innerWidth,outerHeight:window.outerHeight,outerWidth:window.outerWidth},L,W)),P=i.a.createContext((function(e,t){console.log("UpdateStatisticsPosition's context has not yet been set.")})),S=a(73),R=a.n(S);function M(e){return new Date(1e3*e).toISOString().substr(11,8)}function D(e){var t=new Date(e);return R()(t,"HH:mm:ss")}var I=a(154),N=a(97),K=a.n(N),V=a(0),A=Object(u.a)({closeButton:{float:"right"},root:{left:0,position:"absolute",top:0,width:400}});function H(e){var t=e.time,a=e.duration,n=e.playbackRate,i=e.now,o=e.remainingTime,l=e.remainingAtRate,s=e.watchStartTime,u=A(),h=Object(r.useRef)(null),p=Object(r.useContext)(C),y=Object(r.useContext)(w),m=Object(r.useContext)(T),k=Object(r.useContext)(P),S=x(),R=Object(r.useState)(-1),N=Object(c.a)(R,2),H=N[0],L=N[1];Object(r.useEffect)((function(){L(p?100:-1)}),[p,m,H]),Object(r.useEffect)((function(){k()}),[k,S]);var W=Object(r.useMemo)((function(){var e=0;return 0!==s&&(e=(i-s)/1e3),M(e)}),[i,s]),E=Object(r.useCallback)((function(){if(h.current){var e=h.current.getBoundingClientRect(),t=e.top,a=e.left;k(a,t)}}),[k]);return Object(V.jsx)(K.a,{nodeRef:h,bounds:"body",onStop:E,position:m,children:Object(V.jsx)("span",{ref:h,className:u.root,style:{zIndex:H},children:Object(V.jsx)(b.a,{style:{opacity:.8},children:Object(V.jsxs)(d.a,{children:[Object(V.jsx)(j.a,{"aria-label":"Close statistics panel",className:u.closeButton,onClick:y,children:Object(V.jsx)(I.a,{})}),Object(V.jsx)(O.a,{size:"small",children:Object(V.jsxs)(f.a,{children:[Object(V.jsxs)(v.a,{children:[Object(V.jsx)(g.a,{children:"Current time"}),Object(V.jsx)(g.a,{children:t})]}),Object(V.jsxs)(v.a,{children:[Object(V.jsx)(g.a,{children:"Watching for"}),Object(V.jsx)(g.a,{children:W})]}),Object(V.jsxs)(v.a,{children:[Object(V.jsx)(g.a,{children:"Duration"}),Object(V.jsx)(g.a,{children:a})]}),Object(V.jsxs)(v.a,{children:[Object(V.jsx)(g.a,{children:"Playback rate"}),Object(V.jsx)(g.a,{children:n})]}),Object(V.jsxs)(v.a,{children:[Object(V.jsx)(g.a,{children:"Remaining time"}),Object(V.jsx)(g.a,{children:o})]}),Object(V.jsxs)(v.a,{children:[Object(V.jsxs)(g.a,{children:["Remaining at \xd7",n]}),Object(V.jsx)(g.a,{children:l})]}),Object(V.jsxs)(v.a,{children:[Object(V.jsx)(g.a,{children:"Watch start time"}),Object(V.jsx)(g.a,{children:0===s?"N/A":D(s)})]})]})})]})})})})}var L=319,W=400,E=a(30),U=a(159);function B(e){var t=e.children,a=Object(E.a)();return Object(V.jsx)(U.a,{style:{color:a.palette.text.primary,padding:8},children:t})}var F=a(160),z=a(161);function Y(e){var t=e.isMuted,a=e.toggleMuted,n=Object(r.useMemo)((function(){return t?Object(V.jsx)(F.a,{}):Object(V.jsx)(z.a,{})}),[t]);return Object(V.jsx)(j.a,{"aria-label":"Toggle muted",onClick:a,children:n})}var J=a(162),X=a(163);function _(e){var t=e.isPaused,a=e.togglePaused,n=Object(r.useMemo)((function(){return t?Object(V.jsx)(J.a,{}):Object(V.jsx)(X.a,{})}),[t]);return Object(V.jsx)(j.a,{"aria-label":"Toggle paused",onClick:a,children:n})}var q=a(170),G=10;var Q=Object(u.a)({root:{padding:16}});function Z(e){var t=e.value,a=e.updateValue,n=Q(),c=Object(r.useCallback)((function(e){a(e.currentTarget.value)}),[a]),i=Object(r.useCallback)((function(){var e=parseFloat(t);isNaN(e)&&a("1.0")}),[a,t]);return Object(V.jsx)(q.a,{className:n.root,"aria-label":"Video playback rate",type:"number",value:t,onChange:c,onBlur:i,inputProps:{"aria-label":"Video playback rate",step:1}})}var $=a(175),ee=a(174);function te(e){var t=e.children,a=e.open,n=M(e.value);return Object(V.jsx)(ee.a,{open:a,enterTouchDelay:0,placement:"top",title:n,children:t})}function ae(e){var t=e.className,a=e.currentTime,n=e.duration,c=e.updateCurrentTime,i=Object(r.useCallback)((function(e,t){c(function(e){return Array.isArray(e)?e[0]||0:e}(t))}),[c]);return Object(V.jsx)($.a,{className:t,value:a,defaultValue:0,max:n,onChange:i,disabled:0===n,ValueLabelComponent:te})}var ne=a(165),ce=a(166);function re(e){var t=e.isVisible,a=e.toggleIsVisible,n=Object(r.useMemo)((function(){return t?Object(V.jsx)(ne.a,{}):Object(V.jsx)(ce.a,{})}),[t]);return Object(V.jsx)(j.a,{"aria-label":"Toggle statistics",onClick:a,children:n})}var ie="".concat(122,"px"),oe=Object(u.a)({interactiveRoot:{display:"flex",justifyContent:"space-between"},interactiveRootLeft:{alignItems:"center",display:"flex",flexDirection:"row"},root:{alignContent:"center",display:"flex",flexDirection:"column",height:90,padding:16},seeker:{alignItems:"center",display:"flex",flexDirection:"row",justifyContent:"space-between"}});function le(e){var t=e.duration,a=e.currentTime,n=e.isPaused,i=e.togglePaused,o=e.isMuted,l=e.toggleMuted,s=e.updateCurrentTime,u=e.playbackRate,b=e.updatePlaybackRate,d=e.watchStartTime,j=oe(),O=Object(r.useContext)(C),f=Object(r.useContext)(w),v=Object(r.useState)("00:00:00"),g=Object(c.a)(v,2),h=g[0],x=g[1],p=Object(r.useState)(0),y=Object(c.a)(p,2),m=y[0],k=y[1],T=Object(r.useState)("00:00:00"),P=Object(c.a)(T,2),S=P[0],R=P[1],D=Object(r.useState)("00:00:00"),I=Object(c.a)(D,2),N=I[0],K=I[1];return Object(r.useEffect)((function(){x(M(a));var e=t-a;R(M(e));var n=parseFloat(u)||1;K(M(e/n))}),[a,t,u,d]),Object(r.useEffect)((function(){var e=setInterval((function(){k(Date.now())}),1e3);return function(){return clearInterval(e)}}),[d]),Object(V.jsxs)("div",{className:j.root,children:[Object(V.jsxs)("div",{className:j.seeker,children:[Object(V.jsx)(B,{children:h}),Object(V.jsx)(ae,{currentTime:a,duration:t,updateCurrentTime:s}),Object(V.jsxs)(B,{children:["-",S,"/",M(t)]})]}),Object(V.jsxs)("div",{className:j.interactiveRoot,children:[Object(V.jsxs)("div",{className:j.interactiveRootLeft,children:[Object(V.jsx)(_,{isPaused:n,togglePaused:i}),Object(V.jsx)(Y,{isMuted:o,toggleMuted:l}),Object(V.jsx)(re,{isVisible:O,toggleIsVisible:f})]}),Object(V.jsx)(Z,{value:u,updateValue:b})]}),Object(V.jsx)(H,{time:h,duration:M(t),playbackRate:u,now:m,remainingTime:S,remainingAtRate:N,watchStartTime:d})]})}var se=Object(u.a)({root:{padding:"16px"}});function ue(e){var t=e.children,a=Object(E.a)(),n=se();return Object(V.jsx)(U.a,{variant:"h6",style:{color:a.palette.text.primary},className:n.root,children:t||"Open a video file (Ctrl + O)"})}var be=a(114),de=a(115);function je(e,t){return e.key===t.key&&(!t.ctrlKey||e.ctrlKey===t.ctrlKey)}function Oe(e){var t=e.addToCurrentTime,a=e.addToPlaybackRate,n=e.updatePlaybackRate,c=e.selectSrc,i=e.toggleMuted,o=e.togglePaused,l=e.toggleIsStatsVisible;return Object(r.useCallback)((function(e){!function(e,t){var a,n=Object(de.a)(t);try{for(n.s();!(a=n.n()).done;){var c=a.value;if(je(e,c))return c.onKeyDown(),void e.preventDefault()}}catch(r){n.e(r)}finally{n.f()}}(e,[{key:"m",onKeyDown:i},{key:" ",onKeyDown:o},{ctrlKey:!0,key:"o",onKeyDown:c},{key:"s",onKeyDown:l},{key:"ArrowLeft",onKeyDown:function(){return t(-10)}},{key:"ArrowRight",onKeyDown:function(){return t(10)}},{key:"ArrowUp",onKeyDown:function(){return a(1)}},{key:"ArrowDown",onKeyDown:function(){return a(-1)}},{key:"1",onKeyDown:function(){return n("1")}},{key:"2",onKeyDown:function(){return n("2")}},{key:"3",onKeyDown:function(){return n("3")}}])}),[t,a,c,i,o,l,n])}var fe="PLAYBACK_RATE";var ve=Object(u.a)({root:{height:"100vh"},video:{height:"calc(100vh - ".concat("64px"," ")+"- ".concat(ie," - 10px)"),width:"100vw"}}),ge=function(e){e.preventDefault()};function he(e){var t=e.src,a=e.selectSrc,n=e.title,i=Object(r.useRef)(null),o=ve(),l=Object(r.useState)(0),s=Object(c.a)(l,2),u=s[0],b=s[1],d=Object(r.useState)(!1),j=Object(c.a)(d,2),O=j[0],f=j[1],v=Object(r.useState)(0),g=Object(c.a)(v,2),h=g[0],S=g[1],R=function(e,t){var a=Object(r.useState)(!0),n=Object(c.a)(a,2),i=n[0],o=n[1],l=Object(r.useCallback)((function(){e&&t&&(i?e.play():e.pause(),o(!i))}),[i,e,t]),s=Object(r.useCallback)((function(){o(!0)}),[]),u=Object(r.useCallback)((function(){o(!1)}),[]);return{isPaused:i,onPause:s,onPlay:u,setIsPaused:o,togglePaused:l}}(i.current,O),M=R.isPaused,D=R.setIsPaused,I=R.togglePaused,N=R.onPause,K=R.onPlay,A=function(){var e=Object(r.useState)(!1),t=Object(c.a)(e,2),a=t[0],n=t[1],i=Object(r.useCallback)((function(){n(!a)}),[a]);return{isMuted:a,setIsMuted:n,toggleMuted:i}}(),H=A.isMuted,E=A.toggleMuted,U=function(e,t){var a=Object(r.useState)(0),n=Object(c.a)(a,2),i=n[0],o=n[1],l=Object(r.useCallback)((function(t){e&&!(arguments.length>1&&void 0!==arguments[1]&&arguments[1])&&(e.currentTime=t),o(t)}),[e]);return{addToCurrentTime:Object(r.useCallback)((function(a){if(e){var n=e.currentTime+a;n<0?n=0:n>t&&(n=t),l(n)}}),[t,l,e]),currentTime:i,onTimeUpdate:Object(r.useCallback)((function(){var t=null===e||void 0===e?void 0:e.currentTime;t&&l(t,!0)}),[l,e]),setCurrentTime:o,updateCurrentTime:l}}(i.current,h),B=U.currentTime,F=U.onTimeUpdate,z=U.updateCurrentTime,Y=U.addToCurrentTime,J=function(e){var t=Object(r.useState)(localStorage.getItem(fe)||"1.0"),a=Object(c.a)(t,2),n=a[0],i=a[1],o=Object(r.useCallback)((function(t){var a,n=parseFloat(t)*G;isNaN(n)?a="":(n<4?n=4:n>30&&(n=30),a=(n/=G).toString(),e&&(e.playbackRate=n)),i(a),localStorage.setItem(fe,a)}),[e]);return{addToPlaybackRate:Object(r.useCallback)((function(t){if(e){t=Math.ceil(t);var a=Math.round(e.playbackRate*G+t)/G;o(a.toString())}}),[o,e]),playbackRate:n,setPlaybackRate:i,updatePlaybackRate:o}}(i.current),X=J.playbackRate,_=J.updatePlaybackRate,q=J.addToPlaybackRate,Q=function(e,t){var a=Object(r.useState)(!0),n=Object(c.a)(a,2),i=n[0],o=n[1],l=Object(r.useCallback)((function(){o(!i)}),[i]),s=x(),u=Object(r.useCallback)((function(a){var n,c,r=null!==(n=null===a||void 0===a?void 0:a.x)&&void 0!==n?n:k(y),i=null!==(c=null===a||void 0===a?void 0:a.y)&&void 0!==c?c:k(p);return null===i||null===r?m(s,e,t):function(e,t,a,n){var c=e.innerHeight,r=e.innerWidth;return n.y<0?n.y=0:n.y+t>c&&(n.y=c-t),n.x<0?n.x=0:n.x+a>r&&(n.x=r-a),n}(s,e,t,{x:r,y:i})}),[s,e,t]),b=Object(r.useState)(u()),d=Object(c.a)(b,2),j=d[0],O=d[1],f=Object(r.useCallback)((function(e,t){var a=u({x:e,y:t});O(a),localStorage.setItem(y,a.x.toString()),localStorage.setItem(p,a.y.toString())}),[u]);return{isStatsVisible:i,position:j,toggleIsStatsVisible:l,updatePosition:f}}(L,W),Z=Q.isStatsVisible,$=Q.toggleIsStatsVisible,ee=Q.position,te=Q.updatePosition,ae=Oe({addToCurrentTime:Y,addToPlaybackRate:q,selectSrc:a,toggleIsStatsVisible:$,toggleMuted:E,togglePaused:I,updatePlaybackRate:_});Object(be.a)("keydown",ae,document);var ne=function(e){var t=e.addToCurrentTime,a=e.addToPlaybackRate,n=Object(r.useCallback)((function(e){t(e/1e3*10)}),[t]),c=Object(r.useCallback)((function(e){a(-e/100*1)}),[a]);return Object(r.useCallback)((function(e){!function(e,t){e.deltaX&&t.x(e.deltaX),e.deltaY&&t.y(e.deltaY)}(e,{x:n,y:c})}),[n,c])}({addToCurrentTime:Y,addToPlaybackRate:q});Object(be.a)("wheel",ne,document,{passive:!0});var ce,re=Object(r.useCallback)((function(){var e=i.current;f(!0),S((null===e||void 0===e?void 0:e.duration)||0),b(Date.now()),D(!1),null===e||void 0===e||e.play();var t=parseFloat(X);!isNaN(t)&&e&&(e.playbackRate=t)}),[X,D]);return ce={title:n},Object(r.useEffect)((function(){"mediaSession"in navigator&&navigator.mediaSession&&(navigator.mediaSession.metadata=new MediaMetadata(ce))}),[ce]),Object(V.jsxs)("div",{className:o.root,children:[Object(V.jsx)(ue,{children:n}),Object(V.jsx)("video",{className:o.video,ref:i,src:t,muted:H,onLoadedMetadata:re,onTimeUpdate:F,onPause:N,onPlay:K,onContextMenu:ge}),Object(V.jsx)(C.Provider,{value:Z,children:Object(V.jsx)(w.Provider,{value:$,children:Object(V.jsx)(T.Provider,{value:ee,children:Object(V.jsx)(P.Provider,{value:te,children:Object(V.jsx)(le,{isPaused:M,togglePaused:I,isMuted:H,toggleMuted:E,duration:h,currentTime:B,updateCurrentTime:z,playbackRate:X,updatePlaybackRate:_,watchStartTime:u})})})})})]})}var xe=a(118),pe=function(e){e.preventDefault()};function ye(){var e=Object(o.a)("(prefers-color-scheme: dark)"),t=Object(r.useMemo)((function(){return Object(l.a)({palette:{type:e?"dark":"light"}})}),[e]),a=Object(r.useState)(""),i=Object(c.a)(a,2),u=i[0],b=i[1],d=Object(r.useState)(""),j=Object(c.a)(d,2),O=j[0],f=j[1],v=Object(r.useRef)(null),g=Object(r.useCallback)((function(e){var t=e[0];f(t.name),URL.revokeObjectURL(u);var a=URL.createObjectURL(t);b(a)}),[u]),h=Object(r.useCallback)((function(e){var t;(null===(t=e.currentTarget.files)||void 0===t?void 0:t.length)&&g([e.currentTarget.files[0]])}),[g]),x=Object(xe.a)({onDrop:g}),p=x.getRootProps,y=x.getInputProps,m=Object(r.useCallback)((function(){var e;null===(e=v.current)||void 0===e||e.click()}),[]);return Object(V.jsx)(s.a,{theme:t,children:Object(V.jsxs)("div",Object(n.a)(Object(n.a)({},p()),{},{style:{backgroundColor:t.palette.background.default},children:[Object(V.jsx)("input",{"aria-label":"Press Ctrl+O to open a video from the local filesystem",ref:v,type:"file",accept:"video/*,audio/*",onChange:h,style:{display:"none"}}),Object(V.jsx)("input",Object(n.a)(Object(n.a)({},y()),{},{style:{display:"none"},onClick:pe})),Object(V.jsx)(he,{src:u,selectSrc:m,title:O})]}))})}}}]);
//# sourceMappingURL=4.a6e48c4a.chunk.js.map