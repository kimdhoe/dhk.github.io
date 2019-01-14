(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{186:function(e,t,a){"use strict";a.r(t),function(e){var n=a(7),r=a.n(n),i=(a(91),a(90),a(88),a(0)),c=a.n(i),l=a(54),o=a(226),s=a.n(o),u=a(234),d=a(216),m=function(e,t){return{x:e,y:t}},f=function(e,t){return[e,t]},h=function(e,t,a,n){var r=s.a.pick(u),i=function(e,t,a){for(var n,r,i,c=[],l=s.a.rangeFloor(11,15),o=l*Math.tan(a),u=1;u<=e;u+=l){n=u*Math.tan(a);var d=m(u,0),h=m(0,n),p=f(d,h);r=u,c.push(p)}for(var g=e*Math.tan(a),b=n+o;b<=t;b+=o){var v=m(e,i=b-g),y=m(0,b),x=f(v,y);c.push(x)}i||(i=(e-r)/Math.tan(a));for(var E=i+o;E<=t;E+=o){var w=m(e,E),j=m(e-(t-E)/Math.tan(a),t),O=f(w,j);c.push(O)}return c}(t,a,n);e.fillStyle="white",e.fillRect(0,0,t,a),i.forEach(function(t){var a=t[0],n=t[1];e.beginPath(),e.moveTo(a.x,a.y),e.lineTo(n.x,n.y),e.strokeStyle=s.a.pick(r),e.lineWidth=.7,e.stroke()})},p=function(t){function a(){for(var e,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))||this).canvas=c.a.createRef(),e.state={width:0,height:0},e}r()(a,t);var n=a.prototype;return n.componentDidMount=function(){var e=this.canvas.current.getContext("2d"),t=s.a.rangeFloor(400,550),a=s.a.rangeFloor(300,500),n=.09*Math.PI,r=Math.atan(a/t),i=s.a.range(n,r);this.setState({width:t,height:a},function(){h(e,t,a,i)})},n.render=function(){return e.createElement(d.a,null,e.createElement("div",null,e.createElement("h2",{style:{textAlign:"center"}},"Wall Drawing"),e.createElement("div",{className:g.art},e.createElement("canvas",{ref:this.canvas,width:this.state.width,height:this.state.height})),e.createElement("div",{className:g.labelWrapper},e.createElement("div",{className:g.label},e.createElement("p",{className:g.artist},"Kimdhoe"),e.createElement("p",{className:g.artwork},e.createElement("span",{className:g.italic},"Wall drawing"),", dhk.party"),e.createElement("p",{className:g.medium},"Digital (HTML5 Canvas)"))),e.createElement("p",{className:g.paragraph}),e.createElement("blockquote",{className:g.instructionContent},"Draw straight right-diagonal lines.",e.createElement("br",null),e.createElement("br",null),"우상향하는 대각선으로 벽면 채우기",e.createElement("br",null),e.createElement("br",null),"조건: 보이지 않는 연장선은 없어야 한다. 즉 캔버스보다 큰 사각형을 그린 뒤 회전시키지 말 것."),e.createElement("p",null,"임의의 사각형 틀 안에 임의의 각도를 갖는 대각선을 채워넣는 단순한 일이 예상보다 많은 생각을 필요로 헀다. 캔버스보다 큰 정사각형을 그린 뒤 원하는 모양이 나오도록 회전시키는 방법은 조건을 충족하기 위해 제외했다. 영역을 세 부분으로 나누어 제일 위에 직각삼각형, 중간에 평행사변형, 제일 아래에 직각삼각형을 그리는 방식으로 사각형을 채웠다.")))},a}(c.a.Component),g={art:Object(l.css)({margin:"40px 0",textAlign:"center"}),labelWrapper:Object(l.css)({display:"flex",justifyContent:"center"}),label:Object(l.css)({marginBottom:"30px"}),artist:Object(l.css)({margin:0,padding:0,fontWeight:"bold",textDecoration:"underline"}),artwork:Object(l.css)({margin:0,padding:0}),medium:Object(l.css)({margin:0,padding:0}),italic:Object(l.css)({fontStyle:"italic"}),paragraph:Object(l.css)({}),instruction:Object(l.css)({}),instructionContent:Object(l.css)({paddingLeft:"20px",borderLeft:"solid 7px #f1f3f5",fontFamily:"monospace",fontSize:"1.1em"}),code:Object(l.css)({})};t.default=p}.call(this,a(89))},214:function(e,t,a){"use strict";a.r(t),function(e){a.d(t,"graphql",function(){return h}),a.d(t,"StaticQueryContext",function(){return m}),a.d(t,"StaticQuery",function(){return f});a(88);var n=a(0),r=a.n(n),i=a(4),c=a.n(i),l=a(213),o=a.n(l);a.d(t,"Link",function(){return o.a}),a.d(t,"withPrefix",function(){return l.withPrefix}),a.d(t,"navigate",function(){return l.navigate}),a.d(t,"push",function(){return l.push}),a.d(t,"replace",function(){return l.replace}),a.d(t,"navigateTo",function(){return l.navigateTo});var s=a(215),u=a.n(s);a.d(t,"PageRenderer",function(){return u.a});var d=a(40);a.d(t,"parsePath",function(){return d.a});var m=r.a.createContext({}),f=function(t){return e.createElement(m.Consumer,null,function(a){return t.data||a[t.query]&&a[t.query].data?(t.render||t.children)(t.data?t.data.data:a[t.query].data):e.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:c.a.object,query:c.a.string.isRequired,render:c.a.func,children:c.a.func}}.call(this,a(89))},215:function(e,t,a){var n;e.exports=(n=a(218))&&n.default||n},216:function(e,t,a){"use strict";var n=a(88),r=a(217),i=(a(0),a(214)),c=a(219),l=a(220);a(223),a(221);t.a=function(e){var t=e.children;return Object(n.c)(i.StaticQuery,{query:"3892401927",render:function(e){return Object(n.c)("div",{css:o},Object(n.c)(c.a,{title:e.site.siteMetadata.title}),Object(n.c)("main",{css:s},t),Object(n.c)(l.a,null))},data:r})};var o={name:"3cfldf",styles:"display:flex;min-height:100vh;flex-direction:column;margin:0 auto;"},s={name:"1715jjh",styles:"flex:1;margin:0 auto;padding:0 1em;width:100%;max-width:760px;"}},217:function(e){e.exports={data:{site:{siteMetadata:{title:"dhk.party"}}}}},218:function(e,t,a){"use strict";a.r(t);a(55);var n=a(0),r=a.n(n),i=a(4),c=a.n(i),l=a(56),o=a(2),s=function(e){var t=e.location,a=o.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json))};s.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},t.default=s},219:function(e,t,a){"use strict";(function(e){a(88),a(0);var n=a(214),r=a(54);t.a=function(t){var a=t.title,r=t.children;return e.createElement("header",{className:i},e.createElement("h1",{className:c},e.createElement(n.Link,{className:l,to:"/"},a)),r)};var i=Object(r.css)({position:"relative",zIndex:9,margin:"1em auto",padding:"0 1em",width:"100%",maxWidth:"960px"}),c=Object(r.css)({fontFamily:"Georgia",fontWeight:400,fontStyle:"italic",fontSize:"27px"}),l=Object(r.css)({display:"block",margin:"0.8em 0 1.424em 0",color:"black",textDecoration:"none"})}).call(this,a(89))},220:function(e,t,a){"use strict";(function(e){a(88),a(0);var n=a(54);t.a=function(){return e.createElement("footer",{className:r},e.createElement("p",null,e.createElement("small",null,e.createElement("a",{className:i,href:"mailto:kimdhoe1@gmail.com"},"kimdhoe1@gmail.com"))))};var r=Object(n.css)({marginTop:"4em",textAlign:"center"}),i=Object(n.css)({letterSpacing:"0.7px",fontFamily:"Georgia",fontStyle:"italic",textDecoration:"none",color:"#777"})}).call(this,a(89))},221:function(e,t,a){}}]);
//# sourceMappingURL=component---src-pages-art-drawing-20190105-js-3bca13be0e6947331f98.js.map