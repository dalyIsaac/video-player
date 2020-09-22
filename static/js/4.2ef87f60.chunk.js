(this["webpackJsonpvideo-player"]=this["webpackJsonpvideo-player"]||[]).push([[4],{138:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return be}));var n=a(20),r=a(0),l=a.n(r),c=a(136),o=a(89),u=a(137),i=a(113),s=a(118),d=a(121),b=a(141),m=a(124),f=a(125),v=a(126),g=a(127),p=a(46),y=a.n(p),O="statistics.position.y",j="statistics.position.x",E=function(e,t,a){var n=Math.floor(t/2),r=Math.floor(a/2),l=Math.floor(e.innerHeight/2);return{x:Math.floor(e.innerWidth/2)-r,y:l-n}},k=function(e){var t=localStorage.getItem(e);if(null===t)return null;var a=parseFloat(t);return isNaN(a)?null:a};var C=l.a.createContext(!1),h=l.a.createContext((function(){console.log("ToggleStatisticsVisible's context has not yet been set.")})),T=l.a.createContext(E({innerHeight:window.innerHeight,innerWidth:window.innerWidth,outerHeight:window.outerHeight,outerWidth:window.outerWidth},I,V)),S=l.a.createContext((function(e,t){console.log("UpdateStatisticsPosition's context has not yet been set.")})),P=a(88);function w(e){return new Date(1e3*e).toISOString().substr(11,8)}var x=a(122),R=a(72),M=a.n(R),D=Object(i.a)({closeButton:{float:"right"},root:{left:0,position:"absolute",top:0,width:400}});function N(e){var t=e.time,a=e.duration,c=e.playbackRate,o=e.now,u=e.remainingTime,i=e.remainingAtRate,p=e.watchStartTime,O=D(),j=Object(r.useRef)(null),E=Object(r.useContext)(C),k=Object(r.useContext)(h),R=Object(r.useContext)(T),N=Object(r.useContext)(S),I=y()(),V=Object(r.useState)(-1),A=Object(n.a)(V,2),K=A[0],L=A[1];Object(r.useEffect)((function(){L(E?100:-1)}),[E,R,K]),Object(r.useEffect)((function(){N()}),[N,I]);var U=Object(r.useMemo)((function(){var e=0;return 0!==p&&(e=(o-p)/1e3),w(e)}),[o,p]),H=Object(r.useCallback)((function(){if(j.current){var e=j.current.getBoundingClientRect(),t=e.top,a=e.left;N(a,t)}}),[N]);return l.a.createElement(M.a,{nodeRef:j,bounds:"body",onStop:H,position:R},l.a.createElement("span",{ref:j,className:O.root,style:{zIndex:K}},l.a.createElement(s.a,{style:{opacity:.8}},l.a.createElement(d.a,null,l.a.createElement(b.a,{"aria-label":"Close statistics panel",className:O.closeButton,onClick:k},l.a.createElement(x.a,null)),l.a.createElement(m.a,{size:"small"},l.a.createElement(f.a,null,l.a.createElement(v.a,null,l.a.createElement(g.a,null,"Current time"),l.a.createElement(g.a,null,t)),l.a.createElement(v.a,null,l.a.createElement(g.a,null,"Duration"),l.a.createElement(g.a,null,a)),l.a.createElement(v.a,null,l.a.createElement(g.a,null,"Playback rate"),l.a.createElement(g.a,null,c)),l.a.createElement(v.a,null,l.a.createElement(g.a,null,"Remaining time"),l.a.createElement(g.a,null,u)),l.a.createElement(v.a,null,l.a.createElement(g.a,null,"Remaining at \xd7",c),l.a.createElement(g.a,null,i)),l.a.createElement(v.a,null,l.a.createElement(g.a,null,"Watch start time"),l.a.createElement(g.a,null,0===p?"N/A":function(e){var t=new Date(e);return Object(P.a)(t,"HH:mm:ss")}(p))),l.a.createElement(v.a,null,l.a.createElement(g.a,null,"Watching for"),l.a.createElement(g.a,null,U))))))))}var I=319,V=400,A=a(26),K=a(128);function L(e){var t=e.children,a=Object(A.a)();return l.a.createElement(K.a,{style:{color:a.palette.text.primary,padding:8}},t)}var U=a(129),H=a(130);function W(e){var t=e.isMuted,a=e.toggleMuted,n=Object(r.useMemo)((function(){return t?l.a.createElement(U.a,null):l.a.createElement(H.a,null)}),[t]);return l.a.createElement(b.a,{"aria-label":"Toggle muted",onClick:a},n)}var B=a(131),F=a(132);function Y(e){var t=e.isPaused,a=e.togglePaused,n=Object(r.useMemo)((function(){return t?l.a.createElement(B.a,null):l.a.createElement(F.a,null)}),[t]);return l.a.createElement(b.a,{"aria-label":"Toggle paused",onClick:a},n)}var z=a(139);var J=Object(i.a)({root:{padding:16}});function X(e){var t=e.value,a=e.updateValue,n=J(),c=Object(r.useCallback)((function(e){a(e.currentTarget.value)}),[a]),o=Object(r.useCallback)((function(){var e=parseFloat(t);isNaN(e)&&a("1.0")}),[a,t]);return l.a.createElement(z.a,{className:n.root,"aria-label":"Video playback rate",type:"number",value:t,onChange:c,onBlur:o,inputProps:{"aria-label":"Video playback rate",step:1}})}var _=a(144),q=a(143);function G(e){var t=e.children,a=e.open,n=w(e.value);return l.a.createElement(q.a,{open:a,enterTouchDelay:0,placement:"top",title:n},t)}function Q(e){var t=e.className,a=e.currentTime,n=e.duration,c=e.updateCurrentTime,o=Object(r.useCallback)((function(e,t){c(function(e){return Array.isArray(e)?e[0]||0:e}(t))}),[c]);return l.a.createElement(_.a,{className:t,value:a,defaultValue:0,max:n,onChange:o,disabled:0===n,ValueLabelComponent:G})}var Z=a(134),$=a(135);function ee(e){var t=e.isVisible,a=e.toggleIsVisible,n=Object(r.useMemo)((function(){return t?l.a.createElement(Z.a,null):l.a.createElement($.a,null)}),[t]);return l.a.createElement(b.a,{"aria-label":"Toggle statistics",onClick:a},n)}var te="".concat(122,"px"),ae=Object(i.a)({interactiveRoot:{display:"flex",justifyContent:"space-between"},interactiveRootLeft:{alignItems:"center",display:"flex",flexDirection:"row"},root:{alignContent:"center",display:"flex",flexDirection:"column",height:90,padding:16},seeker:{alignItems:"center",display:"flex",flexDirection:"row",justifyContent:"space-between"}});function ne(e){var t=e.duration,a=e.currentTime,c=e.isPaused,o=e.togglePaused,u=e.isMuted,i=e.toggleMuted,s=e.updateCurrentTime,d=e.playbackRate,b=e.updatePlaybackRate,m=e.watchStartTime,f=ae(),v=Object(r.useContext)(C),g=Object(r.useContext)(h),p=Object(r.useState)("00:00:00"),y=Object(n.a)(p,2),O=y[0],j=y[1],E=Object(r.useState)(0),k=Object(n.a)(E,2),T=k[0],S=k[1],P=Object(r.useState)("00:00:00"),x=Object(n.a)(P,2),R=x[0],M=x[1],D=Object(r.useState)("00:00:00"),I=Object(n.a)(D,2),V=I[0],A=I[1];return Object(r.useEffect)((function(){j(w(a));var e=t-a;M(w(e));var n=parseFloat(d)||1;A(w(e/n))}),[a,t,d,m]),Object(r.useEffect)((function(){var e=setInterval((function(){S(Date.now())}),1e3);return function(){return clearInterval(e)}}),[m]),l.a.createElement("div",{className:f.root},l.a.createElement("div",{className:f.seeker},l.a.createElement(L,null,O),l.a.createElement(Q,{currentTime:a,duration:t,updateCurrentTime:s}),l.a.createElement(L,null,"-",R,"/",w(t))),l.a.createElement("div",{className:f.interactiveRoot},l.a.createElement("div",{className:f.interactiveRootLeft},l.a.createElement(Y,{isPaused:c,togglePaused:o}),l.a.createElement(W,{isMuted:u,toggleMuted:i}),l.a.createElement(ee,{isVisible:v,toggleIsVisible:g})),l.a.createElement(X,{value:d,updateValue:b})),l.a.createElement(N,{time:O,duration:w(t),playbackRate:d,now:T,remainingTime:R,remainingAtRate:V,watchStartTime:m}))}var re=Object(i.a)({root:{padding:"16px"}});function le(e){var t=e.children,a=Object(A.a)(),n=re();return l.a.createElement(K.a,{variant:"h6",style:{color:a.palette.text.primary},className:n.root},t||"Open a video file (Ctrl + O)")}var ce=a(86),oe=a(87);function ue(e,t){return e.key===t.key&&(!t.ctrlKey||e.ctrlKey===t.ctrlKey)}function ie(e){var t=e.addToCurrentTime,a=e.addToPlaybackRate,n=e.selectSrc,l=[{key:"m",onKeyDown:e.toggleMuted},{key:" ",onKeyDown:e.togglePaused},{ctrlKey:!0,key:"o",onKeyDown:n},{key:"s",onKeyDown:e.toggleIsStatsVisible},{key:"ArrowLeft",onKeyDown:function(){return t(-10)}},{key:"ArrowRight",onKeyDown:function(){return t(10)}},{key:"ArrowUp",onKeyDown:function(){return a(1)}},{key:"ArrowDown",onKeyDown:function(){return a(-1)}}];return Object(r.useCallback)((function(e){!function(e,t){var a,n=Object(oe.a)(t);try{for(n.s();!(a=n.n()).done;){var r=a.value;if(ue(e,r))return r.onKeyDown(),void e.preventDefault()}}catch(l){n.e(l)}finally{n.f()}}(e,l)}),[l])}var se=Object(i.a)({root:{height:"100vh"},video:{height:"calc(100vh - ".concat("64px"," ")+"- ".concat(te," - 10px)"),width:"100vw"}});function de(e){var t=e.src,a=e.selectSrc,c=e.title,o=Object(r.useRef)(null),u=se(),i=Object(r.useState)(0),s=Object(n.a)(i,2),d=s[0],b=s[1],m=Object(r.useState)(!1),f=Object(n.a)(m,2),v=f[0],g=f[1],p=Object(r.useState)(0),P=Object(n.a)(p,2),w=P[0],x=P[1],R=function(e,t){var a=Object(r.useState)(!0),l=Object(n.a)(a,2),c=l[0],o=l[1],u=Object(r.useCallback)((function(){e&&t&&(c?e.play():e.pause(),o(!c))}),[c,e,t]),i=Object(r.useCallback)((function(){o(!0)}),[]),s=Object(r.useCallback)((function(){o(!1)}),[]);return{isPaused:c,onPause:i,onPlay:s,setIsPaused:o,togglePaused:u}}(o.current,v),M=R.isPaused,D=R.setIsPaused,N=R.togglePaused,A=R.onPause,K=R.onPlay,L=function(){var e=Object(r.useState)(!1),t=Object(n.a)(e,2),a=t[0],l=t[1],c=Object(r.useCallback)((function(){l(!a)}),[a]);return{isMuted:a,setIsMuted:l,toggleMuted:c}}(),U=L.isMuted,H=L.toggleMuted,W=function(e,t){var a=Object(r.useState)(0),l=Object(n.a)(a,2),c=l[0],o=l[1],u=Object(r.useCallback)((function(t){var a=arguments.length>1&&void 0!==arguments[1]&&arguments[1];e&&!a&&(e.currentTime=t),o(t)}),[e]);return{addToCurrentTime:Object(r.useCallback)((function(a){if(e){var n=e.currentTime+a;n<0?n=0:n>t&&(n=t),u(n)}}),[t,u,e]),currentTime:c,onTimeUpdate:Object(r.useCallback)((function(){var t=null===e||void 0===e?void 0:e.currentTime;t&&u(t,!0)}),[u,e]),setCurrentTime:o,updateCurrentTime:u}}(o.current,w),B=W.currentTime,F=W.onTimeUpdate,Y=W.updateCurrentTime,z=W.addToCurrentTime,J=function(e){var t=Object(r.useState)(localStorage.getItem("PLAYBACK_RATE")||"1.0"),a=Object(n.a)(t,2),l=a[0],c=a[1],o=Object(r.useCallback)((function(t){var a,n=10*parseFloat(t);isNaN(n)?a="":(n<4?n=4:n>30&&(n=30),a=(n/=10).toString(),e&&(e.playbackRate=n)),c(a),localStorage.setItem("PLAYBACK_RATE",a)}),[e]);return{addToPlaybackRate:Object(r.useCallback)((function(t){if(e){t=Math.ceil(t);var a=Math.round(10*e.playbackRate+t)/10;o(a.toString())}}),[o,e]),playbackRate:l,setPlaybackRate:c,updatePlaybackRate:o}}(o.current),X=J.playbackRate,_=J.updatePlaybackRate,q=J.addToPlaybackRate,G=function(e,t){var a=Object(r.useState)(!0),l=Object(n.a)(a,2),c=l[0],o=l[1],u=Object(r.useCallback)((function(){o(!c)}),[c]),i=y()(),s=Object(r.useCallback)((function(a){var n,r,l=null!==(n=null===a||void 0===a?void 0:a.x)&&void 0!==n?n:k(j),c=null!==(r=null===a||void 0===a?void 0:a.y)&&void 0!==r?r:k(O);return null===c||null===l?E(i,e,t):function(e,t,a,n){var r=e.innerHeight,l=e.innerWidth;return n.y<0?n.y=0:n.y+t>r&&(n.y=r-t),n.x<0?n.x=0:n.x+a>l&&(n.x=l-a),n}(i,e,t,{x:l,y:c})}),[i,e,t]),d=Object(r.useState)(s()),b=Object(n.a)(d,2),m=b[0],f=b[1],v=Object(r.useCallback)((function(e,t){var a=s({x:e,y:t});f(a),localStorage.setItem(j,a.x.toString()),localStorage.setItem(O,a.y.toString())}),[s]);return{isStatsVisible:c,position:m,toggleIsStatsVisible:u,updatePosition:v}}(I,V),Q=G.isStatsVisible,Z=G.toggleIsStatsVisible,$=G.position,ee=G.updatePosition,te=ie({addToCurrentTime:z,addToPlaybackRate:q,selectSrc:a,toggleIsStatsVisible:Z,toggleMuted:H,togglePaused:N});Object(ce.a)("keydown",te,document);var ae=function(e){var t=e.addToCurrentTime,a=e.addToPlaybackRate,n={x:Object(r.useCallback)((function(e){t(e/1e3*10)}),[t]),y:Object(r.useCallback)((function(e){a(-e/100*1)}),[a])};return Object(r.useCallback)((function(e){!function(e,t){e.deltaX&&t.x(e.deltaX),e.deltaY&&t.y(e.deltaY)}(e,n)}),[n])}({addToCurrentTime:z,addToPlaybackRate:q});Object(ce.a)("wheel",ae,document,{passive:!0});var re,oe=Object(r.useCallback)((function(){var e=o.current;g(!0),x((null===e||void 0===e?void 0:e.duration)||0),b(Date.now()),D(!1),null===e||void 0===e||e.play();var t=parseFloat(X);!isNaN(t)&&e&&(e.playbackRate=t)}),[X,D]),ue=Object(r.useCallback)((function(e){e.preventDefault()}),[]);return re={title:c},Object(r.useEffect)((function(){"mediaSession"in navigator&&navigator.mediaSession&&(navigator.mediaSession.metadata=new MediaMetadata(re))}),[re]),l.a.createElement("div",{className:u.root},l.a.createElement(le,null,c),l.a.createElement("video",{className:u.video,ref:o,src:t,muted:U,onLoadedMetadata:oe,onTimeUpdate:F,onPause:A,onPlay:K,onContextMenu:ue}),l.a.createElement(C.Provider,{value:Q},l.a.createElement(h.Provider,{value:Z},l.a.createElement(T.Provider,{value:$},l.a.createElement(S.Provider,{value:ee},l.a.createElement(ne,{isPaused:M,togglePaused:N,isMuted:U,toggleMuted:H,duration:w,currentTime:B,updateCurrentTime:Y,playbackRate:X,updatePlaybackRate:_,watchStartTime:d}))))))}function be(){var e=Object(c.a)("(prefers-color-scheme: dark)"),t=Object(r.useMemo)((function(){return Object(o.a)({palette:{type:e?"dark":"light"}})}),[e]),a=Object(r.useState)(""),i=Object(n.a)(a,2),s=i[0],d=i[1],b=Object(r.useState)(""),m=Object(n.a)(b,2),f=m[0],v=m[1],g=Object(r.useRef)(null),p=Object(r.useCallback)((function(e){var t;if(null===(t=e.currentTarget.files)||void 0===t?void 0:t.length){var a=e.currentTarget.files[0];v(a.name),URL.revokeObjectURL(s);var n=URL.createObjectURL(a);d(n)}}),[s]),y=Object(r.useCallback)((function(){var e;null===(e=g.current)||void 0===e||e.click()}),[]);return l.a.createElement(u.a,{theme:t},l.a.createElement("div",{style:{backgroundColor:t.palette.background.default}},l.a.createElement("input",{"aria-label":"Press Ctrl+O to open a video from the local filesystem",ref:g,type:"file",accept:"video/*",onChange:p,style:{display:"none"}}),l.a.createElement(de,{src:s,selectSrc:y,title:f})))}}}]);
//# sourceMappingURL=4.2ef87f60.chunk.js.map