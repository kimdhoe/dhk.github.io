(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{194:function(e,t,n){"use strict";n.r(t),function(e){n(236),n(234),n(91),n(90),n(61);var a=n(7),r=n.n(a),i=(n(88),n(0)),c=n.n(i),o=n(54),l=n(230),s=n.n(l),u=n(220),d=function(t){function n(){for(var e,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))||this).canvas=c.a.createRef(),e.state={width:0,height:0},e}r()(n,t);var a=n.prototype;return a.componentDidMount=function(){var e=this,t=s.a.rangeFloor(400,600),n=s.a.rangeFloor(300,500),a=y(t,n,20),r=m(a,t,n);this.setState({width:t,height:n},function(){var i=e.canvas.current.getContext("2d");i.fillStyle="white",i.fillRect(0,0,t,n),h(i,r),p(i,a)})},a.render=function(){var t=this.state,n=t.width,a=t.height;return e.createElement(u.a,null,e.createElement("div",null,e.createElement("h2",{style:{textAlign:"center"}},"[Sol LeWitt] Wall Drawing #51 (1970)"),e.createElement("div",{className:f.art},e.createElement("canvas",{ref:this.canvas,width:n,height:a})),e.createElement("div",{className:f.labelWrapper},e.createElement("div",{className:f.label},e.createElement("p",{className:f.artist},"SOL LEWITT"),e.createElement("p",{className:f.artwork},e.createElement("span",{className:f.italic},"Wall drawing"),", dhk.party"),e.createElement("p",{className:f.medium},"Digital (HTML5 Canvas)"))),e.createElement("blockquote",{className:f.instructionContent},"All architectural points connected by straight lines.",e.createElement("br",null),e.createElement("br",null),"Blue snap lines",e.createElement("br",null),e.createElement("br",null),"모든 건축학상 점들을 파란 직선으로 이을 것."),e.createElement("p",null,"점들을 만들기 위해 창문 역할을 하는 사각형을 최대 세 개까지 무작위로 배치했다.")))},n}(c.a.Component),f={art:Object(o.css)({margin:"40px 0",textAlign:"center"}),labelWrapper:Object(o.css)({display:"flex",justifyContent:"center"}),label:Object(o.css)({marginBottom:"30px"}),artist:Object(o.css)({margin:0,padding:0,fontWeight:"bold",textDecoration:"underline"}),artwork:Object(o.css)({margin:0,padding:0}),medium:Object(o.css)({margin:0,padding:0}),italic:Object(o.css)({fontStyle:"italic"}),paragraph:Object(o.css)({}),instruction:Object(o.css)({}),instructionContent:Object(o.css)({paddingLeft:"20px",borderLeft:"solid 7px #f1f3f5",fontFamily:"monospace",fontSize:"1.1em"}),code:Object(o.css)({})},m=function(e,t,n){return e.reduce(function(e,t){return e.concat(t)},[]).concat([{x:0,y:0},{x:t,y:0},{x:t,y:n},{x:0,y:n}])},h=function(e,t){t.forEach(function(n){t.forEach(function(t){e.beginPath(),e.moveTo(n.x,n.y),e.lineTo(t.x,t.y),e.lineWidth=.5,e.strokeStyle="#1971c2",e.stroke()})})},p=function(e,t){t.forEach(function(t){var n=t[0],a=t[1],r=t[2],i=t[3];e.beginPath(),e.moveTo(n.x,n.y),e.lineTo(a.x,a.y),e.lineTo(r.x,r.y),e.lineTo(i.x,i.y),e.lineTo(n.x,n.y),e.lineWidth=2,e.strokeStyle="#111",e.stroke(),e.fill()})},y=function(e,t,n){for(var a=[],r=function(r){var i=s.a.rangeFloor(e/6,e/4),c=s.a.rangeFloor(t/6,t/4),o={x:s.a.rangeFloor(n,e-i-n),y:s.a.rangeFloor(n,t-c-n)},l=[o,{x:o.x+i,y:o.y},{x:o.x+i,y:o.y+c},{x:o.x,y:o.y+c}];a.every(function(e){return!g(e,l)})&&a.push(l)},i=0;i<3;i++)r();return a},g=function(e,t){var n=e[0].x,a=e[1].x,r=t[0].x,i=t[1].x,c=e[0].y,o=e[2].y,l=t[0].y,s=t[2].y;return n<=i&&a>=r&&c<=s&&o>=l};t.default=d}.call(this,n(89))},218:function(e,t,n){"use strict";n.r(t),function(e){n.d(t,"graphql",function(){return h}),n.d(t,"StaticQueryContext",function(){return f}),n.d(t,"StaticQuery",function(){return m});n(88);var a=n(0),r=n.n(a),i=n(4),c=n.n(i),o=n(217),l=n.n(o);n.d(t,"Link",function(){return l.a}),n.d(t,"withPrefix",function(){return o.withPrefix}),n.d(t,"navigate",function(){return o.navigate}),n.d(t,"push",function(){return o.push}),n.d(t,"replace",function(){return o.replace}),n.d(t,"navigateTo",function(){return o.navigateTo});var s=n(219),u=n.n(s);n.d(t,"PageRenderer",function(){return u.a});var d=n(40);n.d(t,"parsePath",function(){return d.a});var f=r.a.createContext({}),m=function(t){return e.createElement(f.Consumer,null,function(n){return t.data||n[t.query]&&n[t.query].data?(t.render||t.children)(t.data?t.data.data:n[t.query].data):e.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}m.propTypes={data:c.a.object,query:c.a.string.isRequired,render:c.a.func,children:c.a.func}}.call(this,n(89))},219:function(e,t,n){var a;e.exports=(a=n(222))&&a.default||a},220:function(e,t,n){"use strict";var a=n(88),r=n(221),i=(n(0),n(218)),c=n(223),o=n(224);n(227),n(225);t.a=function(e){var t=e.children;return Object(a.c)(i.StaticQuery,{query:"3892401927",render:function(e){return Object(a.c)("div",{css:l},Object(a.c)(c.a,{title:e.site.siteMetadata.title}),Object(a.c)("main",{css:s},t),Object(a.c)(o.a,null))},data:r})};var l={name:"3cfldf",styles:"display:flex;min-height:100vh;flex-direction:column;margin:0 auto;"},s={name:"bw40gk",styles:"flex:1;margin:0 auto;padding:0 1em;width:100%;max-width:960px;"}},221:function(e){e.exports={data:{site:{siteMetadata:{title:"dhk.party"}}}}},222:function(e,t,n){"use strict";n.r(t);n(55);var a=n(0),r=n.n(a),i=n(4),c=n.n(i),o=n(56),l=n(2),s=function(e){var t=e.location,n=l.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(o.a,Object.assign({location:t,pageResources:n},n.json))};s.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},t.default=s},223:function(e,t,n){"use strict";(function(e){n(88),n(0);var a=n(218),r=n(54);t.a=function(t){var n=t.title,r=t.children;return e.createElement("header",{className:i},e.createElement("h1",{className:c},e.createElement(a.Link,{className:o,to:"/"},n)),r)};var i=Object(r.css)({position:"relative",zIndex:9,margin:"1em auto",padding:"0 1em",width:"100%",maxWidth:"960px"}),c=Object(r.css)({fontFamily:"Georgia",fontWeight:400,fontStyle:"italic",fontSize:"27px"}),o=Object(r.css)({display:"block",margin:"0.8em 0 1.424em 0",color:"black",textDecoration:"none"})}).call(this,n(89))},224:function(e,t,n){"use strict";(function(e){n(88),n(0);var a=n(54);t.a=function(){return e.createElement("footer",{className:r},e.createElement("p",null,e.createElement("small",null,e.createElement("a",{className:i,href:"mailto:kimdhoe1@gmail.com"},"kimdhoe1@gmail.com"))))};var r=Object(a.css)({marginTop:"4em",textAlign:"center"}),i=Object(a.css)({letterSpacing:"0.7px",fontFamily:"Georgia",fontStyle:"italic",textDecoration:"none",color:"#777"})}).call(this,n(89))},225:function(e,t,n){},234:function(e,t,n){var a=n(6);a(a.P,"Array",{fill:n(235)}),n(62)("fill")},235:function(e,t,n){"use strict";var a=n(30),r=n(93),i=n(31);e.exports=function(e){for(var t=a(this),n=i(t.length),c=arguments.length,o=r(c>1?arguments[1]:void 0,n),l=c>2?arguments[2]:void 0,s=void 0===l?n:r(l,n);s>o;)t[o++]=e;return t}},236:function(e,t,n){var a=n(6);a(a.S,"Array",{isArray:n(92)})}}]);
//# sourceMappingURL=component---src-pages-art-sol-51-js-62a046eed65cc25f02ff.js.map