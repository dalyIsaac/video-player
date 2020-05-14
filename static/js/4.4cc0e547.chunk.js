(this["webpackJsonpvideo-player"]=this["webpackJsonpvideo-player"]||[]).push([[4],{113:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return Y}));var n=a(21),r=a(0),c=a.n(r),l=a(110),u=a(71),o=a(111),i=a(101),s=a(102),d=a(58),b=a.n(d);function m(e){return new Date(1e3*e).toISOString().substr(11,8)}var f=a(24),v=a(98);function p(e){var t=e.children,a=Object(f.a)();return c.a.createElement(v.a,{style:{color:a.palette.text.primary,padding:8}},t)}function y(e){var t=e.currentTime,a=e.duration,l=e.playbackRate,u=e.watchStartTime,o=Object(r.useState)("00:00:00"),d=Object(n.a)(o,2),f=d[0],v=d[1],y=Object(r.useState)(0),O=Object(n.a)(y,2),j=O[0],k=O[1],g=Object(r.useState)("00:00:00"),T=Object(n.a)(g,2),C=T[0],E=T[1],P=Object(r.useState)("00:00:00"),h=Object(n.a)(P,2),R=h[0],w=h[1];Object(r.useEffect)((function(){v(m(t));var e=a-t;E(m(e));var n=parseFloat(l)||1;w(m(e/n))}),[t,a,l,u]),Object(r.useEffect)((function(){var e=setInterval((function(){k((function(e){return e+1}))}),1e3);return function(){return clearInterval(e)}}),[]);var S=Object(r.useMemo)((function(){return u?c.a.createElement(c.a.Fragment,null,c.a.createElement(i.a,{orientation:"vertical",flexItem:!0}),c.a.createElement(p,null,"Started ",function(e){var t=new Date(0);return t.setUTCMilliseconds(e),b()(t).format("HH:MM:SS")}(u)),c.a.createElement(i.a,{orientation:"vertical",flexItem:!0}),c.a.createElement(p,null,"Watching for ",m(j))):null}),[j,u]);return c.a.createElement(s.a,{container:!0,alignItems:"center"},c.a.createElement(i.a,{orientation:"vertical",flexItem:!0}),c.a.createElement(p,null,f,"/",m(a)),c.a.createElement(i.a,{orientation:"vertical",flexItem:!0}),c.a.createElement(p,null,"-",C),c.a.createElement(i.a,{orientation:"vertical",flexItem:!0}),c.a.createElement(p,null,"-",R," @ \xd7",l),S)}var O=a(103),j=a(105),k=a(115);function g(e){var t=e.isMuted,a=e.toggleMuted,n=Object(r.useMemo)((function(){return t?c.a.createElement(O.a,null):c.a.createElement(j.a,null)}),[t]);return c.a.createElement(k.a,{"aria-label":"Toggle muted",onClick:a},n)}var T=a(106),C=a(107);function E(e){var t=e.isPaused,a=e.togglePaused,n=Object(r.useMemo)((function(){return t?c.a.createElement(T.a,null):c.a.createElement(C.a,null)}),[t]);return c.a.createElement(k.a,{"aria-label":"Toggle paused",onClick:a},n)}var P=a(108),h=a(112);var R=Object(P.a)({root:{padding:16}});function w(e){var t=e.value,a=e.updateValue,n=R(),l=Object(r.useCallback)((function(e){a(e.currentTarget.value)}),[a]),u=Object(r.useCallback)((function(){var e=parseFloat(t);isNaN(e)&&a("1.0")}),[a,t]);return c.a.createElement(h.a,{className:n.root,"aria-label":"Video playback rate",type:"number",value:t,onChange:l,onBlur:u,inputProps:{step:.1,"aria-label":"Video playback rate"}})}var S=a(118),M=a(117);function x(e){var t=e.children,a=e.open,n=m(e.value);return c.a.createElement(M.a,{open:a,enterTouchDelay:0,placement:"top",title:n},t)}function D(e){var t=e.className,a=e.currentTime,n=e.duration,l=e.updateCurrentTime,u=Object(r.useCallback)((function(e,t){l(function(e){return Array.isArray(e)?e[0]||0:e}(t))}),[l]);return c.a.createElement(S.a,{className:t,value:a,defaultValue:0,max:n,onChange:u,disabled:0===n,ValueLabelComponent:x})}var N="".concat(108,"px"),I=Object(P.a)({root:{height:76,display:"flex",alignContent:"center",flexDirection:"column",padding:16},seeker:{width:"calc(100vw - ".concat(32,"px - 10px)")},interactiveRoot:{display:"flex",justifyContent:"space-between"},interactiveRootLeft:{display:"flex",flexDirection:"row",alignItems:"center"}});function K(e){var t=e.duration,a=e.currentTime,n=e.isPaused,r=e.togglePaused,l=e.isMuted,u=e.toggleMuted,o=e.updateCurrentTime,i=e.playbackRate,s=e.updatePlaybackRate,d=e.watchStartTime,b=I();return c.a.createElement("div",{className:b.root},c.a.createElement(D,{className:b.seeker,currentTime:a,duration:t,updateCurrentTime:o}),c.a.createElement("div",{className:b.interactiveRoot},c.a.createElement("div",{className:b.interactiveRootLeft},c.a.createElement(E,{isPaused:n,togglePaused:r}),c.a.createElement(g,{isMuted:l,toggleMuted:u}),c.a.createElement(y,{currentTime:a,duration:t,playbackRate:i,watchStartTime:d})),c.a.createElement(w,{value:i,updateValue:s})))}var L=Object(P.a)({root:{padding:"16px"}});function U(e){var t=e.children,a=Object(f.a)(),n=L();return c.a.createElement(v.a,{variant:"h6",style:{color:a.palette.text.primary},className:n.root},t||"Open a video file (Ctrl + O)")}var A=a(69),V=a(70);function F(e,t){return e.key===t.key&&(!t.ctrlKey||e.ctrlKey===t.ctrlKey)}function H(e){var t=e.addToCurrentTime,a=e.addToPlaybackRate,n=e.selectSrc,c=[{key:"m",onKeyDown:e.toggleMuted},{key:" ",onKeyDown:e.togglePaused},{key:"o",ctrlKey:!0,onKeyDown:n},{key:"ArrowLeft",onKeyDown:function(){return t(-10)}},{key:"ArrowRight",onKeyDown:function(){return t(10)}},{key:"ArrowUp",onKeyDown:function(){return a(.1)}},{key:"ArrowDown",onKeyDown:function(){return a(-.1)}}];return Object(r.useCallback)((function(e){!function(e,t){var a,n=Object(V.a)(t);try{for(n.s();!(a=n.n()).done;){var r=a.value;if(F(e,r))return r.onKeyDown(),void e.preventDefault()}}catch(c){n.e(c)}finally{n.f()}}(e,c)}),[c])}var J=Object(P.a)({root:{height:"100vh"},video:{height:"calc(100vh - ".concat("64px"," ")+"- ".concat(N," - 10px)"),width:"100vw"}});function X(e){var t=e.src,a=e.selectSrc,l=e.title,u=Object(r.useRef)(null),o=J(),i=Object(r.useState)(0),s=Object(n.a)(i,2),d=s[0],b=s[1],m=Object(r.useState)(!1),f=Object(n.a)(m,2),v=f[0],p=f[1],y=Object(r.useState)(0),O=Object(n.a)(y,2),j=O[0],k=O[1],g=function(e,t){var a=Object(r.useState)(!0),c=Object(n.a)(a,2),l=c[0],u=c[1],o=Object(r.useCallback)((function(){e&&t&&(l?e.play():e.pause(),u(!l))}),[l,e,t]),i=Object(r.useCallback)((function(){u(!0)}),[]),s=Object(r.useCallback)((function(){u(!1)}),[]);return{isPaused:l,setIsPaused:u,togglePaused:o,onPause:i,onPlay:s}}(u.current,v),T=g.isPaused,C=g.setIsPaused,E=g.togglePaused,P=g.onPause,h=g.onPlay,R=function(e){var t=Object(r.useState)(!1),a=Object(n.a)(t,2),c=a[0],l=a[1],u=Object(r.useCallback)((function(){l(!c)}),[c]);return{isMuted:c,setIsMuted:l,toggleMuted:u}}(u.current),w=R.isMuted,S=R.toggleMuted,M=function(e,t){var a=Object(r.useState)(0),c=Object(n.a)(a,2),l=c[0],u=c[1],o=Object(r.useCallback)((function(t){var a=arguments.length>1&&void 0!==arguments[1]&&arguments[1];e&&!a&&(e.currentTime=t),u(t)}),[e]),i=Object(r.useCallback)((function(a){if(e){var n=e.currentTime+a;n<0?n=0:n>t&&(n=t),o(n)}}),[t,o,e]),s=Object(r.useCallback)((function(){var t=null===e||void 0===e?void 0:e.currentTime;t&&o(t,!0)}),[o,e]);return{currentTime:l,setCurrentTime:u,updateCurrentTime:o,addToCurrentTime:i,onTimeUpdate:s}}(u.current,j),x=M.currentTime,D=M.onTimeUpdate,N=M.updateCurrentTime,I=M.addToCurrentTime,L=function(e){var t=Object(r.useState)("1.0"),a=Object(n.a)(t,2),c=a[0],l=a[1],u=Object(r.useCallback)((function(t){var a=parseFloat(t);isNaN(a)?l(""):e&&(a<.4?a=.4:a>3&&(a=3),t=function(e){return e.toPrecision(2)}(a),l(t),e.playbackRate=a)}),[e]),o=Object(r.useCallback)((function(t){e&&u(String(e.playbackRate+t))}),[u,e]);return{playbackRate:c,setPlaybackRate:l,updatePlaybackRate:u,addToPlaybackRate:o}}(u.current),V=L.playbackRate,F=L.updatePlaybackRate,X=L.addToPlaybackRate,Y=H({addToCurrentTime:I,addToPlaybackRate:X,selectSrc:a,toggleMuted:S,togglePaused:E});Object(A.a)("keydown",Y,document);var B=function(e){var t=e.addToCurrentTime,a=e.addToPlaybackRate,n={x:Object(r.useCallback)((function(e){t(e/1e3*10)}),[t]),y:Object(r.useCallback)((function(e){a(-e/100*.1)}),[a])};return Object(r.useCallback)((function(e){!function(e,t){e.deltaX&&t.x(e.deltaX),e.deltaY&&t.y(e.deltaY)}(e,n)}),[n])}({addToCurrentTime:I,addToPlaybackRate:X});Object(A.a)("wheel",B,document,{passive:!0});var W=Object(r.useCallback)((function(){var e=u.current;p(!0),k((null===e||void 0===e?void 0:e.duration)||0),b(Date.now()),C(!1),null===e||void 0===e||e.play();var t=parseFloat(V);!isNaN(t)&&e&&(e.playbackRate=t)}),[V,C]);return c.a.createElement("div",{className:o.root},c.a.createElement(U,null,l),c.a.createElement("video",{className:o.video,ref:u,src:t,muted:w,onLoadedMetadata:W,onTimeUpdate:D,onPause:P,onPlay:h}),c.a.createElement(K,{isPaused:T,togglePaused:E,isMuted:w,toggleMuted:S,duration:j,currentTime:x,updateCurrentTime:N,playbackRate:V,updatePlaybackRate:F,watchStartTime:d}))}function Y(){var e=Object(l.a)("(prefers-color-scheme: dark)"),t=Object(r.useMemo)((function(){return Object(u.a)({palette:{type:e?"dark":"light"}})}),[e]),a=Object(r.useState)(""),i=Object(n.a)(a,2),s=i[0],d=i[1],b=Object(r.useState)(""),m=Object(n.a)(b,2),f=m[0],v=m[1],p=Object(r.useRef)(null),y=Object(r.useCallback)((function(e){var t;if(null===(t=e.currentTarget.files)||void 0===t?void 0:t.length){var a=e.currentTarget.files[0];v(a.name),URL.revokeObjectURL(s);var n=URL.createObjectURL(a);d(n)}}),[s]),O=Object(r.useCallback)((function(){var e;null===(e=p.current)||void 0===e||e.click()}),[]);return c.a.createElement(o.a,{theme:t},c.a.createElement("div",{style:{backgroundColor:t.palette.background.default}},c.a.createElement("input",{"aria-label":"Press Ctrl+O to open a video from the local filesystem",ref:p,type:"file",accept:"video/*",onChange:y,style:{display:"none"}}),c.a.createElement(X,{src:s,selectSrc:O,title:f})))}}}]);
//# sourceMappingURL=4.4cc0e547.chunk.js.map