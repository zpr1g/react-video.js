(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[3],{5:function(e,t){},RyC9:function(e,t,a){"use strict";var l=a("fbTi"),n=a("mZ4U");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("MHQh");var u=n(a("ceUH"));a("ikg0");var o=n(a("NNlj"));a("PgUA");var d=n(a("isM/"));a("QVds");var f=n(a("hkyS"));a("apjs");var r=n(a("oK3v")),s=n(a("cO38")),i=l(a("2w0b")),c=a("7EY+"),p=n(a("ShgS")),v=n(a("aC1b")),m=n(a("iUf1")),h=p.default.publicPath,y=[{label:"html5",value:"html5"},{label:"flash",value:"flash"}],b=function(){var e=(0,i.useState)(),t=(0,s.default)(e,2),a=t[0],l=t[1],n=(0,i.useState)(1),p=(0,s.default)(n,2),b=p[0],g=p[1],E=(0,i.useState)("flash"),w=(0,s.default)(E,2),j=w[0],C=w[1],k=(0,i.useState)("rtmp://fms.105.net/live/rmc1"),N=(0,s.default)(k,2),S=N[0],O=N[1];function P(){null===a||void 0===a||a.src(S),null===a||void 0===a||a.autoplay(!0)}return(0,i.useEffect)(function(){null===a||void 0===a||a.dispose(),l(void 0),g(b+1)},[j]),i.default.createElement(c.PageHeaderWrapper,{title:"Live Player"},i.default.createElement(r.default,null,i.default.createElement(v.default,{key:b,options:{techOrder:[j],sources:[{src:S}],poster:"".concat(h,"icons/videojs.png")},className:m.default.video,onReady:function(e){l(e)}}),i.default.createElement("div",{className:m.default.form},i.default.createElement(f.default,{labelCol:{span:8},wrapperCol:{span:12}},i.default.createElement(f.default.Item,{label:"tech"},i.default.createElement(d.default.Group,{options:y,value:j,onChange:function(e){return C(e.target.value)}})),i.default.createElement(f.default.Item,{label:"url"},i.default.createElement(o.default,{value:S,onChange:function(e){O(e.target.value)}})),i.default.createElement(f.default.Item,{wrapperCol:{offset:8},extra:i.default.createElement("span",null,!a&&"instantiating video.js by techOrder: [".concat(j,"]..."))},i.default.createElement(u.default,{type:"primary",onClick:P,disabled:!a},"Apply"))))))};t.default=b},aC1b:function(e,t,a){"use strict";var l=a("fbTi"),n=a("mZ4U");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=n(a("mK77")),o=n(a("43Yg")),d=n(a("/tCh")),f=n(a("scpF")),r=n(a("O/V9")),s=n(a("8aBX")),i=l(a("2w0b")),c=n(a("Gslq"));a("IXom"),a("xjzO");var p=n(a("ShgS")),v=p.default.publicPath,m={aspectRatio:"16:9",controls:!0},h={flash:{swf:"".concat(v,"video-js.swf")}},y=function(e){function t(){return(0,o.default)(this,t),(0,f.default)(this,(0,r.default)(t).apply(this,arguments))}return(0,s.default)(t,e),(0,d.default)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.options,a=e.onReady,l=void 0===a?function(){}:a,n=(0,u.default)({},m,h,t);this.player=(0,c.default)(this.videoNode,n,function(){console.log("flash tech",c.default.getTech("flash")),console.log("html5 tech",c.default.getTech("html5")),l(this)})}},{key:"componentWillUnmount",value:function(){this.player&&this.player.dispose()}},{key:"render",value:function(){var e=this,t=this.props,a=t.style,l=t.className;return i.default.createElement("div",{style:a,className:l},i.default.createElement("div",{"data-vjs-player":"true"},i.default.createElement("video",{ref:function(t){t&&(e.videoNode=t)},className:"video-js vjs-big-play-centered"})))}}]),t}(i.Component);t.default=y},iUf1:function(e,t,a){e.exports={video:"antd-pro-pages-welcome-video",form:"antd-pro-pages-welcome-form"}}}]);