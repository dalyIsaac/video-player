(this["webpackJsonpvideo-player"]=this["webpackJsonpvideo-player"]||[]).push([[4],{133:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return ve}));var n=a(20),r=a(0),l=a.n(r),c=a(131),o=a(83),i=a(132),u=a(108),s=a(113),d=a(116),b=a(136),m=a(119),f=a(120),v=a(121),g=a(122),p=function(){return{innerHeight:window.innerHeight,innerWidth:window.innerWidth,outerHeight:window.outerHeight,outerWidth:window.outerWidth}},y=function(){var e=Object(r.useState)(p()),t=Object(n.a)(e,2),a=t[0],l=t[1];function c(){l(p())}return Object(r.useEffect)((function(){return window.addEventListener("resize",c),function(){window.removeEventListener("resize",c)}}),[]),a},O="statistics.position.y",j="statistics.position.x",k=function(e,t,a){var n=Math.floor(t/2),r=Math.floor(a/2),l=Math.floor(e.innerHeight/2);return{x:Math.floor(e.innerWidth/2)-r,y:l-n}},E=function(e){var t=localStorage.getItem(e);if(null===t)return null;var a=parseFloat(t);return isNaN(a)?null:a};var C=l.a.createContext(!1),h=l.a.createContext((function(){console.log("ToggleStatisticsVisible's context has not yet been set.")})),w=l.a.createContext(k({innerHeight:window.innerHeight,innerWidth:window.innerWidth,outerHeight:window.outerHeight,outerWidth:window.outerWidth},N,K)),T=l.a.createContext((function(e,t){console.log("UpdateStatisticsPosition's context has not yet been set.")})),P=a(82);function S(e){return new Date(1e3*e).toISOString().substr(11,8)}var R=a(117),x=a(65),M=a.n(x),D=Object(u.a)({closeButton:{float:"right"},root:{left:0,position:"absolute",top:0,width:400}});function I(e){var t=e.time,a=e.duration,c=e.playbackRate,o=e.now,i=e.remainingTime,u=e.remainingAtRate,p=e.watchStartTime,O=D(),j=Object(r.useRef)(null),k=Object(r.useContext)(C),E=Object(r.useContext)(h),x=Object(r.useContext)(w),I=Object(r.useContext)(T),N=y(),K=Object(r.useState)(-1),V=Object(n.a)(K,2),A=V[0],L=V[1];Object(r.useEffect)((function(){L(k?100:-1)}),[k,x,A]),Object(r.useEffect)((function(){I()}),[I,N]);var H=Object(r.useMemo)((function(){var e=0;return 0!==p&&(e=(o-p)/1e3),S(e)}),[o,p]),W=Object(r.useCallback)((function(){if(j.current){var e=j.current.getBoundingClientRect(),t=e.top,a=e.left;I(a,t)}}),[I]);return l.a.createElement(M.a,{nodeRef:j,bounds:"body",onStop:W,position:x},l.a.createElement("span",{ref:j,className:O.root,style:{zIndex:A}},l.a.createElement(s.a,{style:{opacity:.8}},l.a.createElement(d.a,null,l.a.createElement(b.a,{"aria-label":"Close statistics panel",className:O.closeButton,onClick:E},l.a.createElement(R.a,null)),l.a.createElement(m.a,{size:"small"},l.a.createElement(f.a,null,l.a.createElement(v.a,null,l.a.createElement(g.a,null,"Current time"),l.a.createElement(g.a,null,t)),l.a.createElement(v.a,null,l.a.createElement(g.a,null,"Watching for"),l.a.createElement(g.a,null,H)),l.a.createElement(v.a,null,l.a.createElement(g.a,null,"Duration"),l.a.createElement(g.a,null,a)),l.a.createElement(v.a,null,l.a.createElement(g.a,null,"Playback rate"),l.a.createElement(g.a,null,c)),l.a.createElement(v.a,null,l.a.createElement(g.a,null,"Remaining time"),l.a.createElement(g.a,null,i)),l.a.createElement(v.a,null,l.a.createElement(g.a,null,"Remaining at \xd7",c),l.a.createElement(g.a,null,u)),l.a.createElement(v.a,null,l.a.createElement(g.a,null,"Watch start time"),l.a.createElement(g.a,null,0===p?"N/A":function(e){var t=new Date(e);return Object(P.a)(t,"HH:mm:ss")}(p)))))))))}var N=319,K=400,V=a(26),A=a(123);function L(e){var t=e.children,a=Object(V.a)();return l.a.createElement(A.a,{style:{color:a.palette.text.primary,padding:8}},t)}var H=a(124),W=a(125);function U(e){var t=e.isMuted,a=e.toggleMuted,n=Object(r.useMemo)((function(){return t?l.a.createElement(H.a,null):l.a.createElement(W.a,null)}),[t]);return l.a.createElement(b.a,{"aria-label":"Toggle muted",onClick:a},n)}var B=a(126),F=a(127);function z(e){var t=e.isPaused,a=e.togglePaused,n=Object(r.useMemo)((function(){return t?l.a.createElement(B.a,null):l.a.createElement(F.a,null)}),[t]);return l.a.createElement(b.a,{"aria-label":"Toggle paused",onClick:a},n)}var Y=a(134);var J=Object(u.a)({root:{padding:16}});function X(e){var t=e.value,a=e.updateValue,n=J(),c=Object(r.useCallback)((function(e){a(e.currentTarget.value)}),[a]),o=Object(r.useCallback)((function(){var e=parseFloat(t);isNaN(e)&&a("1.0")}),[a,t]);return l.a.createElement(Y.a,{className:n.root,"aria-label":"Video playback rate",type:"number",value:t,onChange:c,onBlur:o,inputProps:{"aria-label":"Video playback rate",step:1}})}var _=a(139),q=a(138);function G(e){var t=e.children,a=e.open,n=S(e.value);return l.a.createElement(q.a,{open:a,enterTouchDelay:0,placement:"top",title:n},t)}function Q(e){var t=e.className,a=e.currentTime,n=e.duration,c=e.updateCurrentTime,o=Object(r.useCallback)((function(e,t){c(function(e){return Array.isArray(e)?e[0]||0:e}(t))}),[c]);return l.a.createElement(_.a,{className:t,value:a,defaultValue:0,max:n,onChange:o,disabled:0===n,ValueLabelComponent:G})}var Z=a(129),$=a(130);function ee(e){var t=e.isVisible,a=e.toggleIsVisible,n=Object(r.useMemo)((function(){return t?l.a.createElement(Z.a,null):l.a.createElement($.a,null)}),[t]);return l.a.createElement(b.a,{"aria-label":"Toggle statistics",onClick:a},n)}var te="".concat(122,"px"),ae=Object(u.a)({interactiveRoot:{display:"flex",justifyContent:"space-between"},interactiveRootLeft:{alignItems:"center",display:"flex",flexDirection:"row"},root:{alignContent:"center",display:"flex",flexDirection:"column",height:90,padding:16},seeker:{alignItems:"center",display:"flex",flexDirection:"row",justifyContent:"space-between"}});function ne(e){var t=e.duration,a=e.currentTime,c=e.isPaused,o=e.togglePaused,i=e.isMuted,u=e.toggleMuted,s=e.updateCurrentTime,d=e.playbackRate,b=e.updatePlaybackRate,m=e.watchStartTime,f=ae(),v=Object(r.useContext)(C),g=Object(r.useContext)(h),p=Object(r.useState)("00:00:00"),y=Object(n.a)(p,2),O=y[0],j=y[1],k=Object(r.useState)(0),E=Object(n.a)(k,2),w=E[0],T=E[1],P=Object(r.useState)("00:00:00"),R=Object(n.a)(P,2),x=R[0],M=R[1],D=Object(r.useState)("00:00:00"),N=Object(n.a)(D,2),K=N[0],V=N[1];return Object(r.useEffect)((function(){j(S(a));var e=t-a;M(S(e));var n=parseFloat(d)||1;V(S(e/n))}),[a,t,d,m]),Object(r.useEffect)((function(){var e=setInterval((function(){T(Date.now())}),1e3);return function(){return clearInterval(e)}}),[m]),l.a.createElement("div",{className:f.root},l.a.createElement("div",{className:f.seeker},l.a.createElement(L,null,O),l.a.createElement(Q,{currentTime:a,duration:t,updateCurrentTime:s}),l.a.createElement(L,null,"-",x,"/",S(t))),l.a.createElement("div",{className:f.interactiveRoot},l.a.createElement("div",{className:f.interactiveRootLeft},l.a.createElement(z,{isPaused:c,togglePaused:o}),l.a.createElement(U,{isMuted:i,toggleMuted:u}),l.a.createElement(ee,{isVisible:v,toggleIsVisible:g})),l.a.createElement(X,{value:d,updateValue:b})),l.a.createElement(I,{time:O,duration:S(t),playbackRate:d,now:w,remainingTime:x,remainingAtRate:K,watchStartTime:m}))}var re=Object(u.a)({root:{padding:"16px"}});function le(e){var t=e.children,a=Object(V.a)(),n=re();return l.a.createElement(A.a,{variant:"h6",style:{color:a.palette.text.primary},className:n.root},t||"Open a video file (Ctrl + O)")}var ce=a(79),oe=a(80);function ie(e,t){return e.key===t.key&&(!t.ctrlKey||e.ctrlKey===t.ctrlKey)}function ue(e){var t=e.addToCurrentTime,a=e.addToPlaybackRate,n=e.updatePlaybackRate,l=e.selectSrc,c=e.toggleMuted,o=e.togglePaused,i=e.toggleIsStatsVisible;return Object(r.useCallback)((function(e){!function(e,t){var a,n=Object(oe.a)(t);try{for(n.s();!(a=n.n()).done;){var r=a.value;if(ie(e,r))return r.onKeyDown(),void e.preventDefault()}}catch(l){n.e(l)}finally{n.f()}}(e,[{key:"m",onKeyDown:c},{key:" ",onKeyDown:o},{ctrlKey:!0,key:"o",onKeyDown:l},{key:"s",onKeyDown:i},{key:"ArrowLeft",onKeyDown:function(){return t(-10)}},{key:"ArrowRight",onKeyDown:function(){return t(10)}},{key:"ArrowUp",onKeyDown:function(){return a(1)}},{key:"ArrowDown",onKeyDown:function(){return a(-1)}},{key:"1",onKeyDown:function(){return n("1")}},{key:"2",onKeyDown:function(){return n("2")}},{key:"3",onKeyDown:function(){return n("3")}}])}),[t,a,l,c,o,i,n])}var se=Object(u.a)({root:{height:"100vh"},video:{height:"calc(100vh - ".concat("64px"," ")+"- ".concat(te," - 10px)"),width:"100vw"}}),de=function(e){e.preventDefault()};function be(e){var t=e.src,a=e.selectSrc,c=e.title,o=Object(r.useRef)(null),i=se(),u=Object(r.useState)(0),s=Object(n.a)(u,2),d=s[0],b=s[1],m=Object(r.useState)(!1),f=Object(n.a)(m,2),v=f[0],g=f[1],p=Object(r.useState)(0),P=Object(n.a)(p,2),S=P[0],R=P[1],x=function(e,t){var a=Object(r.useState)(!0),l=Object(n.a)(a,2),c=l[0],o=l[1],i=Object(r.useCallback)((function(){e&&t&&(c?e.play():e.pause(),o(!c))}),[c,e,t]),u=Object(r.useCallback)((function(){o(!0)}),[]),s=Object(r.useCallback)((function(){o(!1)}),[]);return{isPaused:c,onPause:u,onPlay:s,setIsPaused:o,togglePaused:i}}(o.current,v),M=x.isPaused,D=x.setIsPaused,I=x.togglePaused,V=x.onPause,A=x.onPlay,L=function(){var e=Object(r.useState)(!1),t=Object(n.a)(e,2),a=t[0],l=t[1],c=Object(r.useCallback)((function(){l(!a)}),[a]);return{isMuted:a,setIsMuted:l,toggleMuted:c}}(),H=L.isMuted,W=L.toggleMuted,U=function(e,t){var a=Object(r.useState)(0),l=Object(n.a)(a,2),c=l[0],o=l[1],i=Object(r.useCallback)((function(t){var a=arguments.length>1&&void 0!==arguments[1]&&arguments[1];e&&!a&&(e.currentTime=t),o(t)}),[e]);return{addToCurrentTime:Object(r.useCallback)((function(a){if(e){var n=e.currentTime+a;n<0?n=0:n>t&&(n=t),i(n)}}),[t,i,e]),currentTime:c,onTimeUpdate:Object(r.useCallback)((function(){var t=null===e||void 0===e?void 0:e.currentTime;t&&i(t,!0)}),[i,e]),setCurrentTime:o,updateCurrentTime:i}}(o.current,S),B=U.currentTime,F=U.onTimeUpdate,z=U.updateCurrentTime,Y=U.addToCurrentTime,J=function(e){var t=Object(r.useState)(localStorage.getItem("PLAYBACK_RATE")||"1.0"),a=Object(n.a)(t,2),l=a[0],c=a[1],o=Object(r.useCallback)((function(t){var a,n=10*parseFloat(t);isNaN(n)?a="":(n<4?n=4:n>30&&(n=30),a=(n/=10).toString(),e&&(e.playbackRate=n)),c(a),localStorage.setItem("PLAYBACK_RATE",a)}),[e]);return{addToPlaybackRate:Object(r.useCallback)((function(t){if(e){t=Math.ceil(t);var a=Math.round(10*e.playbackRate+t)/10;o(a.toString())}}),[o,e]),playbackRate:l,setPlaybackRate:c,updatePlaybackRate:o}}(o.current),X=J.playbackRate,_=J.updatePlaybackRate,q=J.addToPlaybackRate,G=function(e,t){var a=Object(r.useState)(!0),l=Object(n.a)(a,2),c=l[0],o=l[1],i=Object(r.useCallback)((function(){o(!c)}),[c]),u=y(),s=Object(r.useCallback)((function(a){var n,r,l=null!==(n=null===a||void 0===a?void 0:a.x)&&void 0!==n?n:E(j),c=null!==(r=null===a||void 0===a?void 0:a.y)&&void 0!==r?r:E(O);return null===c||null===l?k(u,e,t):function(e,t,a,n){var r=e.innerHeight,l=e.innerWidth;return n.y<0?n.y=0:n.y+t>r&&(n.y=r-t),n.x<0?n.x=0:n.x+a>l&&(n.x=l-a),n}(u,e,t,{x:l,y:c})}),[u,e,t]),d=Object(r.useState)(s()),b=Object(n.a)(d,2),m=b[0],f=b[1],v=Object(r.useCallback)((function(e,t){var a=s({x:e,y:t});f(a),localStorage.setItem(j,a.x.toString()),localStorage.setItem(O,a.y.toString())}),[s]);return{isStatsVisible:c,position:m,toggleIsStatsVisible:i,updatePosition:v}}(N,K),Q=G.isStatsVisible,Z=G.toggleIsStatsVisible,$=G.position,ee=G.updatePosition,te=ue({addToCurrentTime:Y,addToPlaybackRate:q,selectSrc:a,toggleIsStatsVisible:Z,toggleMuted:W,togglePaused:I,updatePlaybackRate:_});Object(ce.a)("keydown",te,document);var ae=function(e){var t=e.addToCurrentTime,a=e.addToPlaybackRate,n=Object(r.useCallback)((function(e){t(e/1e3*10)}),[t]),l=Object(r.useCallback)((function(e){a(-e/100*1)}),[a]);return Object(r.useCallback)((function(e){!function(e,t){e.deltaX&&t.x(e.deltaX),e.deltaY&&t.y(e.deltaY)}(e,{x:n,y:l})}),[n,l])}({addToCurrentTime:Y,addToPlaybackRate:q});Object(ce.a)("wheel",ae,document,{passive:!0});var re,oe=Object(r.useCallback)((function(){var e=o.current;g(!0),R((null===e||void 0===e?void 0:e.duration)||0),b(Date.now()),D(!1),null===e||void 0===e||e.play();var t=parseFloat(X);!isNaN(t)&&e&&(e.playbackRate=t)}),[X,D]);return re={title:c},Object(r.useEffect)((function(){"mediaSession"in navigator&&navigator.mediaSession&&(navigator.mediaSession.metadata=new MediaMetadata(re))}),[re]),l.a.createElement("div",{className:i.root},l.a.createElement(le,null,c),l.a.createElement("video",{className:i.video,ref:o,src:t,muted:H,onLoadedMetadata:oe,onTimeUpdate:F,onPause:V,onPlay:A,onContextMenu:de}),l.a.createElement(C.Provider,{value:Q},l.a.createElement(h.Provider,{value:Z},l.a.createElement(w.Provider,{value:$},l.a.createElement(T.Provider,{value:ee},l.a.createElement(ne,{isPaused:M,togglePaused:I,isMuted:H,toggleMuted:W,duration:S,currentTime:B,updateCurrentTime:z,playbackRate:X,updatePlaybackRate:_,watchStartTime:d}))))))}var me=a(84),fe=function(e){e.preventDefault()};function ve(){var e=Object(c.a)("(prefers-color-scheme: dark)"),t=Object(r.useMemo)((function(){return Object(o.a)({palette:{type:e?"dark":"light"}})}),[e]),a=Object(r.useState)(""),u=Object(n.a)(a,2),s=u[0],d=u[1],b=Object(r.useState)(""),m=Object(n.a)(b,2),f=m[0],v=m[1],g=Object(r.useRef)(null),p=Object(r.useCallback)((function(e){var t=e[0];v(t.name),URL.revokeObjectURL(s);var a=URL.createObjectURL(t);d(a)}),[s]),y=Object(r.useCallback)((function(e){var t;(null===(t=e.currentTarget.files)||void 0===t?void 0:t.length)&&p([e.currentTarget.files[0]])}),[p]),O=Object(me.a)({onDrop:p}),j=O.getRootProps,k=O.getInputProps,E=Object(r.useCallback)((function(){var e;null===(e=g.current)||void 0===e||e.click()}),[]);return l.a.createElement(i.a,{theme:t},l.a.createElement("div",Object.assign({},j(),{style:{backgroundColor:t.palette.background.default}}),l.a.createElement("input",{"aria-label":"Press Ctrl+O to open a video from the local filesystem",ref:g,type:"file",accept:"video/*,audio/*",onChange:y,style:{display:"none"}}),l.a.createElement("input",Object.assign({},k(),{style:{display:"none"},onClick:fe})),l.a.createElement(be,{src:s,selectSrc:E,title:f})))}}}]);
//# sourceMappingURL=4.d6280ae9.chunk.js.map