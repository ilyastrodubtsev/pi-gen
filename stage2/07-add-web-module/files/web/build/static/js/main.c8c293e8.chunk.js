(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{100:function(e,t,n){},101:function(e,t,n){},122:function(e,t,n){},123:function(e,t,n){},124:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),i=n(18),c=n.n(i);n(78),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var r=n(23),s=n(36),l=n(14),u=n.n(l),d=n(20),h=n(9),m=n(11),f=n(10),p=n(8),v=n(12),g=(n(81),n(82),n(48)),b=(n(83),n(35)),y=n(16);function j(){return k.apply(this,arguments)}function k(){return(k=Object(d.a)(u.a.mark(function e(){return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise(function(e){window.requestAnimationFrame(e)}));case 1:case"end":return e.stop()}},e)}))).apply(this,arguments)}var w="ontouchstart"in window,E=function(e){function t(){var e,n;Object(h.a)(this,t);for(var o=arguments.length,a=new Array(o),i=0;i<o;i++)a[i]=arguments[i];return(n=Object(m.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(a)))).state={animationName:""},n.onClick=function(e){console.log("onClick"),n.onTouchStart(e)},n.onTouchStart=function(){var e=Object(d.a)(u.a.mark(function e(t){return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("onTouchStart"),n.props.onClick(t),e.next=4,n.setStateAsync({animationName:""});case 4:return e.next=6,j();case 6:return e.next=8,j();case 8:return e.next=10,n.setStateAsync({animationName:"animated"});case 10:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),n.onTouchEnd=function(e){console.log("onTouchEnd"),n.props.embed&&e.preventDefault()},n}return Object(v.a)(t,e),Object(p.a)(t,[{key:"setStateAsync",value:function(e){var t=this;return new Promise(function(n){t.setState(e,n)})}},{key:"render",value:function(){var e,t,n;if(!this.props.canTouch){var o=[this.onTouchStart,this.onTouchEnd];e=o[0],t=o[1]}return!this.props.canTouch&&w||(n=this.onClick),a.a.createElement("div",{className:this.props.embed?"":"inline-div",id:this.props.id,style:Object(g.a)({},this.props.style)},a.a.createElement("div",{className:"flex-div"},a.a.createElement("button",{className:"flex-a flex-animated ".concat(this.props.disabled?"toolButton-disabled":""),onTouchStart:e,onTouchEnd:t,onClick:n,style:Object(g.a)({animationName:this.state.animationName},this.props.buttonStyle)},a.a.createElement(b.a,{icon:this.props.icon||y.a}))))}}]),t}(o.Component),O=function(e){function t(){var e,n;Object(h.a)(this,t);for(var o=arguments.length,a=new Array(o),i=0;i<o;i++)a[i]=arguments[i];return(n=Object(m.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(a)))).state={icon:y.f,muted:!1},n.buttonClick=function(e){console.log("[Mic] button clicked"),n.setState({icon:n.state.muted?y.f:y.g,muted:!n.state.muted},function(){n.props.onMute(n.state.muted)})},n}return Object(v.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return a.a.createElement(E,{id:"mic-button-div",style:{top:"calc(90% - 3rem)",left:"calc(95% - 3rem)"},icon:this.state.icon,onClick:this.buttonClick})}}]),t}(o.Component);function C(){return!(!document.webkitFullscreenElement&&!document.mozFullScreenElement)}var S=function(e){function t(){var e;return Object(h.a)(this,t),(e=Object(m.a)(this,Object(f.a)(t).call(this))).state={icon:y.e},e.onFullscreen=function(){console.log("fullscreen");var t=C();e.setState({icon:t?y.c:y.e})},e.buttonClick=function(e){console.log("[Fullscreen] button clicked"),function(e){if(e){var t=document.documentElement;t.mozRequestFullScreen&&t.mozRequestFullScreen()||t.webkitRequestFullScreen&&t.webkitRequestFullScreen()}else document.webkitCancelFullScreen&&document.webkitCancelFullScreen()||document.mozCancelFullScreen&&document.mozCancelFullScreen()}(!C())},document.addEventListener("webkitfullscreenchange",e.onFullscreen),document.addEventListener("mozfullscreenchange",e.onFullscreen),e}return Object(v.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return a.a.createElement(E,{canTouch:!0,style:{top:"10%",left:"5%"},icon:this.state.icon,onClick:this.buttonClick,id:"fullscreen-button-div"})}}]),t}(o.Component),x=function(e){function t(){var e,n;Object(h.a)(this,t);for(var o=arguments.length,a=new Array(o),i=0;i<o;i++)a[i]=arguments[i];return(n=Object(m.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(a)))).onClick=function(e){n.props.disabled||n.props.onClick(e)},n}return Object(v.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return a.a.createElement(E,{disabled:this.props.disabled,style:this.props.style,buttonStyle:{width:"2rem",height:"2rem",fontSize:"1rem"},icon:this.props.icon,onClick:this.onClick,id:this.props.id})}}]),t}(o.Component),T=function(e){function t(){return Object(h.a)(this,t),Object(m.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return a.a.createElement(x,{disabled:this.props.disabled,style:{top:"calc(10% - .5rem)",left:"calc(95% - 3rem)"},icon:y.i,onClick:this.props.onClick,id:"plus-button-div"})}}]),t}(x),M=function(e){function t(){return Object(h.a)(this,t),Object(m.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return a.a.createElement(x,{disabled:this.props.disabled,style:{top:"calc(10% + 2rem)",left:"calc(95% - 3rem)"},icon:y.h,onClick:this.props.onClick,id:"minus-button-div"})}}]),t}(o.Component),_=(n(89),n(127)),D=n(126),A=function(e){function t(){var e,n;Object(h.a)(this,t);for(var o=arguments.length,i=new Array(o),c=0;c<o;c++)i[c]=arguments[c];return(n=Object(m.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(i)))).dd=a.a.createRef(),n.state={show:!1,fit_mode:"fill",quality:"quality_hi"},n.settingsChanged=function(e){var t=e.target,o=t.name,a=t.value;console.log("[Settings] changed",o,a,n.state),n.props.onChange(o,a),n.setState(Object(r.a)({},o,a))},n}return Object(v.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return a.a.createElement(_.a,{drop:"up",style:{position:"fixed",top:"calc(90% - 3rem)",left:"5%"}},a.a.createElement(_.a.Toggle,{as:E,icon:y.b,embed:!0}),a.a.createElement(_.a.Menu,null,a.a.createElement(D.a,{className:"px-1 py-4"},a.a.createElement(D.a.Group,null,a.a.createElement(D.a.Label,null,"Fit mode"),a.a.createElement(D.a.Control,{as:"select",name:"fit_mode",onChange:this.settingsChanged,value:this.state.fit_mode},a.a.createElement("option",{value:"fill"},"Fill"),a.a.createElement("option",{value:"fit_both"},"Fit"),a.a.createElement("option",{value:"fit_width"},"Fit Width"),a.a.createElement("option",{value:"fit_height"},"Fit Height"))),a.a.createElement(D.a.Group,null,a.a.createElement(D.a.Label,null,"Quality"),a.a.createElement(D.a.Control,{as:"select",name:"quality",value:this.state.quality,onChange:this.settingsChanged},a.a.createElement("option",{value:"quality_low"},"Low"),a.a.createElement("option",{value:"quality_med"},"Medium"),a.a.createElement("option",{value:"quality_hi"},"High"))))))}}]),t}(o.Component),z=(n(99),n(67)),R=n.n(z),q=4,F=100,J=function(e){function t(){var e,n;Object(h.a)(this,t);for(var o=arguments.length,i=new Array(o),c=0;c<o;c++)i[c]=arguments[c];return(n=Object(m.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(i)))).joystick=a.a.createRef(),n.nipple=null,n}return Object(v.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=R.a.create({zone:this.joystick.current,mode:"static",position:{left:"50%",top:"50%"},color:"black"});this.nipple=t,t.on("end",function(t,n){e.props.onEnd&&(console.log(t.type,n),"end"==t.type&&e.props.onEnd(t.type))}).on("move",function(t,n){if(e.props.onMove){var o=90-n.angle.degree;o<0&&(o+=360),o<0&&(o+=360),e.props.onMove(o,n.force)}}).on("dir",function(t,n){e.props.onAngle&&(console.log(n.direction.angle,n.force),e.props.onAngle(n.direction.angle))})}},{key:"render",value:function(){return a.a.createElement("div",{className:"joystick",ref:this.joystick,style:this.props.pos})}}]),t}(o.Component),N=function(e){function t(){var e,n;Object(h.a)(this,t);for(var o=arguments.length,a=new Array(o),i=0;i<o;i++)a[i]=arguments[i];return(n=Object(m.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(a)))).onMove=function(e,t){var o=0;e<90?o=90*n.smoothAngle(e,q):e>=90&&e<180?o=90+90*(1-n.smoothAngle(180-e,q)):e>=180&&e<270?o=180+90*n.smoothAngle(e-180,q):e>=270&&e<360&&(o=270+90*(1-n.smoothAngle(360-e,q))),n.props.onMove(o,t)},n.onEnd=function(){n.props.onEnd()},n}return Object(v.a)(t,e),Object(p.a)(t,[{key:"smoothAngle",value:function(e,t){return Math.expm1(e/(10*t))/Math.expm1(9/t)}},{key:"render",value:function(){return a.a.createElement(J,{onMove:this.onMove,onEnd:this.onEnd,pos:{left:"30px",top:"calc(50% - 100px/2)"}})}}]),t}(o.Component),W=function(e){function t(){var e,n;Object(h.a)(this,t);for(var o=arguments.length,a=new Array(o),i=0;i<o;i++)a[i]=arguments[i];return(n=Object(m.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(a)))).angle=null,n.force=null,n.tm=null,n.onMove=function(e,t){if(n.angle){var o={left:["h",t],right:["h",-t],down:["v",t],up:["v",-t]},a=Object(s.a)(o[n.angle],2),i=a[0],c=a[1];n.props.onMove(i,c),n.force=t,n.tm||(n.tm=setInterval(function(){n.onMove(n.angle,n.force)},F))}},n.onAngle=function(e){n.angle=e},n.onEnd=function(){n.tm&&(clearInterval(n.tm),n.tm=null),n.props.onEnd()},n}return Object(v.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return a.a.createElement(J,{onEnd:this.onEnd,onMove:this.onMove,onAngle:this.onAngle,pos:{right:"30px",top:"calc(50% - 100px/2)"}})}}]),t}(o.Component),I=(n(100),n(71)),P=n(17),Y=1e3,B=4,H=3,V=1640,X=1230,L=48,K=36,G={KeyA:"left",KeyD:"right",KeyS:"down",KeyW:"up"},Z={quality_low:.3,quality_med:.5,quality_hi:1},U="ontouchstart"in window,Q=function(e){function t(){var e,n;Object(h.a)(this,t);for(var o=arguments.length,i=new Array(o),c=0;c<o;c++)i[c]=arguments[c];return(n=Object(m.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(i)))).state={fit_width:!1,fit_height:!0},n.fitMode="fill",n.quality=1,n.resizeTm=0,n.scale=1,n.tX=0,n.tY=0,n.X=0,n.Y=0,n.video=a.a.createRef(),n.touchDown=function(e){U&&(e.preventDefault(),e.stopPropagation());var t=e.nativeEvent,o=t.touches?t.touches[0].pageX:t.pageX,a=t.touches?t.touches[0].pageY:t.pageY;n.X=o-n.tX,n.Y=a-n.tY},n.touchMove=function(e){U&&(e.preventDefault(),e.stopPropagation());var t=e.nativeEvent,o=e.target;if("mousemove"==t.type&&1==t.buttons||"touchmove"==t.type){e.preventDefault();var a=t.touches?t.touches[0].pageX:t.pageX,i=t.touches?t.touches[0].pageY:t.pageY,c=a-n.X,r=i-n.Y;console.debug(o,c);var s=n.video.current.getBoundingClientRect(),l=document.documentElement.clientWidth,u=document.documentElement.clientHeight,d=(s.width-l)/2,h=(s.height-u)/2;d>=0&&(c>0&&c>d?c=d:c<0&&c<-d&&(c=-d)),h>=0&&(r>0&&r>h?r=h:r<0&&r<-h&&(r=-h)),d>=0&&h>=0&&n.setTransform(c,r)}},n.playing=function(e){console.log(e),n.props.onStarted(),n.resize()},n.paused=function(e){console.log(e)},n.time=function(e){n.props.onTime(e.target.currentTime)},n.resize=function(e){var t,o,a=document.documentElement.clientWidth*n.quality,i=document.documentElement.clientHeight*n.quality;console.log("".concat(a,"x").concat(i)),t=(o=Math.round(i/H/2)*H*2)*B/H;var c=Math.abs(i-o),r=Math.abs(a-t);console.log("fit height: ".concat(t,"x").concat(o," ").concat(r,"x").concat(c," ").concat(t/o));var s=t,l=o;o=(t=Math.round(a/B/2)*B*2)*H/B,c=Math.abs(i-o),r=Math.abs(a-t),console.log("fit width: ".concat(t,"x").concat(o," ").concat(r,"x").concat(c," ").concat(t/o));var u,d=t,h=o;switch(n.fitMode){case"fit_width":u={fit_width:!0,fit_height:!1},t=d,o=h;break;case"fit_height":u={fit_width:!1,fit_height:!0},t=s,o=l;break;case"fit_both":u={fit_width:!0,fit_height:!0},a/i>B/H?(t=s,o=l):(t=d,o=h);break;case"fill":a/i<B/H?(u={fit_width:!1,fit_height:!0},t=s,o=l):(u={fit_width:!0,fit_height:!1},t=d,o=h)}console.log("best fit: ".concat(t,"x").concat(o),u),t>=V||o>=X?(t=V,o=X):(t<=L||o<=K)&&(t=L,o=K);var m=t,f=o;n.setState(u,function(){n.zoom(0),n.resizeTm&&clearTimeout(n.resizeTm),n.resizeTm=setTimeout(function(){n.props.onResize(m,f),n.resizeTm=null},Y)})},n.onKeyDown=function(e){console.log(e.code),G[e.code]&&n.props.onCameraMove(G[e.code])},n}return Object(v.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.connectWebRTC().then(function(){e.resize()}),window.addEventListener("resize",function(t){e.resize(),console.log(t)}),window.addEventListener("keydown",function(t){e.onKeyDown(t)})}},{key:"connectWebRTC",value:function(){var e=Object(d.a)(u.a.mark(function e(){var t,n,o,a,i,c,r,s,l,h,m,f,p,v,g=this;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(this.props.config.janus){e.next=2;break}return e.abrupt("return");case 2:return t=P.a.useDefaultDependencies({adapter:I.a}),e.next=5,new Promise(function(e){return P.a.init({debug:"all",dependencies:t,callback:e})});case 5:return console.log("Janus inited"),n=function(){var e=Object(d.a)(u.a.mark(function e(t){return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),e.next=3,g.props.onError(t);case 3:g.connectWebRTC();case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),P.a.isWebrtcSupported()||n("No WebRTC support... "),a=this,e.next=11,new Promise(function(e,t){o=new P.a({server:a.props.config.janus,success:e,error:n,destroyed:window.location.reload})});case 11:return console.log("Janus connected"),i=!1,c="streamingtest-"+P.a.randomString(12),e.next=16,new Promise(function(e,t){o.attach({plugin:"janus.plugin.streaming",opaqueId:c,success:e,error:n,onmessage:function(e,t){P.a.debug(" ::: Got a message :::"),P.a.debug(e);var o=e.result;o&&o.status?"started"==o.status&&(console.log("Streaming started!"),a.video.current.played.length&&a.playing()):e.error&&n(e.error),t&&(P.a.debug("Handling SDP as well..."),P.a.debug(t),r.createAnswer({jsep:t,media:{audioSend:i,videoSend:!1},success:function(e){P.a.debug("Got SDP!"),P.a.debug(e),r.send({message:{request:"start"},jsep:e})},error:n}))},onremotestream:function(e){P.a.debug(" ::: Got a remote stream :::"),P.a.debug(e),console.log("Janus remote stream received");var t=a.video.current;P.a.attachMediaStream(t,e),t.muted=!1},oncleanup:function(){P.a.log(" ::: Got a cleanup notification :::")}})});case 16:return r=e.sent,this.streaming=r,console.log("Janus plugin attached"),e.next=21,navigator.mediaDevices.enumerateDevices();case 21:for(s=e.sent,l=!0,h=!1,m=void 0,e.prev=25,f=s[Symbol.iterator]();!(l=(p=f.next()).done);l=!0)"audioinput"==p.value.kind&&(i=!0);e.next=33;break;case 29:e.prev=29,e.t0=e.catch(25),h=!0,m=e.t0;case 33:e.prev=33,e.prev=34,l||null==f.return||f.return();case 36:if(e.prev=36,!h){e.next=39;break}throw m;case 39:return e.finish(36);case 40:return e.finish(33);case 41:return e.next=43,new Promise(function(e){return r.send({message:{request:"list"},success:e})});case 43:if((v=e.sent).list&&1==v.list[0].id){e.next=46;break}throw"Wrong stream received";case 46:r.send({message:{request:"watch",id:1}});case 47:case"end":return e.stop()}},e,this,[[25,29,33,41],[34,,36,40]])}));return function(){return e.apply(this,arguments)}}()},{key:"set",value:function(e,t){if("fit_mode"==e)this.fitMode=t;else{if("quality"!=e)return void console.error('Unknown "'.concat(e,'"'));this.quality=Z[t]}this.resize()}},{key:"setTransform",value:function(e,t,n){var o="translateX(".concat(e,"px) ");this.state.fit_width?o+="translateY( calc( ".concat(t,"px - 50% ) )"):o+="translateY(".concat(t,"px)"),n||(n=this.scale),o+=" scale(".concat(n,")"),this.setState({transform:o}),this.tX=e,this.tY=t}},{key:"zoom",value:function(e){0==e?this.scale=1:this.scale+=e,this.setTransform(0,0)}},{key:"mute",value:function(e){console.log("mute",e),this.streaming&&(e?this.streaming.muteAudio():this.streaming.unmuteAudio())}},{key:"status",value:function(){if(!this.streaming)return"<no video>";var e=parseInt(this.streaming.getBitrate()),t=this.video.current,n=t.videoWidth,o=t.videoHeight;return"safari"==P.a.webRTCAdapter.browserDetails.browser&&(e=Math.round(e/1e3)),"".concat(n,"x").concat(o," @ ").concat(e," kb/s")}},{key:"render",value:function(){return a.a.createElement("video",{autoPlay:!0,muted:!0,playsInline:!0,loop:!0,id:"myVideo",className:"".concat(this.state.fit_width?"fit_width":""," ").concat(this.state.fit_height?"fit_height":""),style:{transform:this.state.transform},ref:this.video,onMouseDown:this.touchDown,onMouseMove:this.touchMove,onTouchStart:this.touchDown,onTouchMove:this.touchMove,onKeyDown:this.onKeyDown,onPlaying:this.playing,onTimeUpdate:this.time},"Your browser does not support HTML5 video.")}}]),t}(o.Component),$=(n(101),n(125)),ee=n(65),te=function(e){function t(){var e,n;Object(h.a)(this,t);for(var o=arguments.length,a=new Array(o),i=0;i<o;i++)a[i]=arguments[i];return(n=Object(m.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(a)))).state={show:!1,message:{header:"",text:""}},n.handleClose=function(e){var t=e&&e.target.name;n.setState({show:!1},function(){t&&n.onClose&&n.onClose(t)})},n}return Object(v.a)(t,e),Object(p.a)(t,[{key:"show",value:function(){var e=Object(d.a)(u.a.mark(function e(t){var n=this;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise(function(e){n.setState({show:!0,message:t},function(){n.onClose=e})}));case 1:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){return a.a.createElement($.a,{show:this.state.show,onHide:this.handleClose,dialogClassName:"dialog-div"},a.a.createElement($.a.Header,{closeButton:!0},a.a.createElement(b.a,{icon:this.props.icon||y.d,className:"dialog-icon"}),a.a.createElement($.a.Title,null,this.state.message.header)),a.a.createElement($.a.Body,null,this.state.message.text),a.a.createElement($.a.Footer,null,a.a.createElement(ee.a,{variant:"secondary",onClick:this.handleClose,name:"retry"},"Retry"),a.a.createElement(ee.a,{variant:"primary",onClick:this.handleClose,name:"reload"},"Reload")))}}]),t}(o.Component),ne=(n(122),function(e){function t(){return Object(h.a)(this,t),Object(m.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return a.a.createElement("div",{id:"statusDiv"},a.a.createElement("span",{id:"videoInfoSpan"},this.props.info),a.a.createElement("br",null),a.a.createElement("span",{id:"videoExtraSpan"},this.props.extra))}}]),t}(o.Component)),oe=(n(123),function(e){function t(){return Object(h.a)(this,t),Object(m.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return a.a.createElement("div",{className:"animationload ".concat(this.props.hidden?"animationload-after":""),id:"loadingAnim"},a.a.createElement("div",{className:"osahanloading"}),a.a.createElement("h3",{className:"loadingMessage"},"Loading"))}}]),t}(o.Component)),ae=.5,ie=function(e){function t(){var e;return Object(h.a)(this,t),(e=Object(m.a)(this,Object(f.a)(t).call(this))).state={joystickConnected:!1,plusDisabled:!0,minusDisabled:!0,statusText:"",loading:!0},e.config=null,e.reconnectTimeout=0,e.ws=null,e.video=a.a.createRef(),e.modal=a.a.createRef(),e.plus=a.a.createRef(),e.minus=a.a.createRef(),e.status=a.a.createRef(),e.spinner=a.a.createRef(),e.onJoystickMove=function(t,n){console.log(t,n),e.sendCommand({cmd:"move",degree:t,force:n})},e.onJoystickEnd=function(t){console.log("engine joystick: end"),e.sendCommand({cmd:"end"})},e.onSettingsChanged=function(t,n){console.log("".concat(t," = ").concat(n),e.video),e.video.current.set(t,n)},e.onVideoError=function(){var t=Object(d.a)(u.a.mark(function t(n){var o;return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return console.error(n),t.next=3,e.modal.current.show({header:"Warning!",text:"Cannot connect to server"});case 3:o=t.sent,console.log(o),"reload"==o?window.location.reload():e.setState({loading:!0});case 6:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}(),e.onVideoStarted=function(){console.log("VIDEO STARTED"),e.setState({loading:!1}),e.updateScaleButtons(),e.statusInterval||(e.statusInterval=setInterval(function(){e.setState({statusText:e.video.current.status()})},1e3))},e.onVideoTime=function(t){e.setState({statusExtra:t.toFixed(1)})},e.onVideoSize=function(t,n){e.sendCommand({cmd:"resolution",width:t,height:n}),e.updateScaleButtons()},e.onZoomIn=function(){e.video.current.zoom(.1),e.updateScaleButtons()},e.onZoomOut=function(){e.video.current.zoom(-.1),e.updateScaleButtons()},e.onCameraMove=function(t){console.log(t);var n={left:["h",ae],right:["h",-ae],down:["v",ae],up:["v",-ae]},o=Object(s.a)(n[t],2),a=o[0],i=o[1];e.sendCommand({cmd:"look",plain:a,step:i})},e.onCameraJoystickEnd=function(){console.log("camera joystick: end")},e.onCameraJoystickMove=function(t,n){console.log(t,n),e.sendCommand({cmd:"look",plain:t,step:n})},e.onMute=function(t){e.video.current.mute(t)},e.fetchConfig().then(function(){return e.connectJoystick()}),e}return Object(v.a)(t,e),Object(p.a)(t,[{key:"connectJoystick",value:function(){var e=this;if(this.state.config.joystick){var t=null;try{console.log("connecting joystick..."),this.reconnectTimeout=0,this.state.config.joystick&&(t=new WebSocket(this.state.config.joystick))}catch(n){return console.log("connecting joystick: error",n),void(this.reconnectTimeout?console.log("timeout already started"):this.reconnectTimeout=setTimeout(function(){return e.connectJoystick()},1e3))}t&&(t.onopen=function(){console.log("joystick connected!"),e.ws=t,e.ws.send(JSON.stringify({cmd:"hello"})),e.setState({joystickConnected:!0})},t.onmessage=function(e){console.log(e)},t.onerror=function(e){},t.onclose=function(){e.ws=null,e.setState({joystickConnected:!1}),console.log("joystick disconnected"),e.reconnectTimeout?console.log("timeout already started"):e.reconnectTimeout=setTimeout(function(){return e.connectJoystick()},1e3)})}else this.setState({joystickConnected:!0})}}]),Object(p.a)(t,[{key:"sendCommand",value:function(e){this.ws&&this.ws.send(JSON.stringify(e))}},{key:"updateScaleButtons",value:function(){this.setState({minusDisabled:this.video.current.scale<=1,plusDisabled:!1})}},{key:"fetchConfig",value:function(){var e=Object(d.a)(u.a.mark(function e(){var t,n,o,a;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("web-config.json");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,o=n,console.log(o),(a=o).janus=o.janus&&o.janus.replace(/{HOST}/g,document.location.host),a.joystick=o.joystick&&o.joystick.replace(/{HOST}/g,document.location.host),this.setState({config:a});case 12:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e;return a.a.createElement(a.a.Fragment,null,a.a.createElement(oe,{ref:this.spinner,hidden:!this.state.loading}),this.state.config&&a.a.createElement(Q,(e={ref:this.video,config:this.state.config,onStarted:this.onVideoStarted,onError:this.onVideoError,onResize:this.onVideoSize,onCameraMove:this.onCameraMove},Object(r.a)(e,"onResize",this.onVideoSize),Object(r.a)(e,"onTime",this.onVideoTime),e)),a.a.createElement(O,{onMute:this.onMute}),a.a.createElement(S,null),this.state.joystickConnected&&a.a.createElement(N,{onEnd:this.onJoystickEnd,onMove:this.onJoystickMove}),this.state.joystickConnected&&a.a.createElement(W,{onEnd:this.onCameraJoystickEnd,onMove:this.onCameraJoystickMove}),a.a.createElement(A,{onChange:this.onSettingsChanged}),a.a.createElement(T,{onClick:this.onZoomIn,ref:this.plus,disabled:this.state.plusDisabled}),a.a.createElement(M,{onClick:this.onZoomOut,ref:this.minus,disabled:this.state.minusDisabled}),a.a.createElement(te,{ref:this.modal}),a.a.createElement(ne,{ref:this.status,info:this.state.statusText,extra:this.state.statusExtra}))}}]),t}(o.Component);c.a.render(a.a.createElement(ie,null),document.getElementById("root")),document.body.addEventListener("touchmove",function(e){return e.preventDefault()},{passive:!1}),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},73:function(e,t,n){e.exports=n(124)},78:function(e,t,n){},82:function(e,t,n){},83:function(e,t,n){},89:function(e,t,n){},99:function(e,t,n){}},[[73,1,2]]]);
//# sourceMappingURL=main.c8c293e8.chunk.js.map