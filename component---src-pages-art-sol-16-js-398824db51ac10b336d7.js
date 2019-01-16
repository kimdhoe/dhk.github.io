(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{189:function(e,t,a){"use strict";a.r(t),function(e){a(91),a(90);var n=a(7),r=a.n(n),i=(a(88),a(0)),c=a.n(i),l=a(54),s=a(231),o=a.n(s),u=a(221),d=512/o.a.range(1.5,3),m=function(t){function a(){for(var e,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))||this).canvas=c.a.createRef(),e}r()(a,t);var n=a.prototype;return n.componentDidMount=function(){var e=this.canvas.current.getContext("2d"),t=function(){a.forEach(function(t){var a=t[0],n=t[1];e.beginPath(),e.moveTo(a.x,a.y),e.lineTo(n.x,n.y),e.strokeStyle="#aaa",e.lineWidth=1,e.stroke()})},a=function(){for(var e=[],t=Math.sqrt(524288),a=0;a<=t;a+=5){var n={x:a,y:0},r={x:a,y:d};e.push([n,r])}return e}();e.fillStyle="white",e.fillRect(0,0,512,512),e.save(),e.translate(0,256-d/2),t(),e.restore(),e.save(),e.translate(256+d/2,0),e.rotate(Math.PI/2),t(),e.restore();var n=Math.sqrt(d*d/2)/2;e.translate(-n,512-n),e.rotate(Math.PI/-4),t()},n.render=function(){return e.createElement(u.a,null,e.createElement("div",null,e.createElement("h2",{style:{textAlign:"center"}},"[Sol LeWitt] Wall Drawing #16 (1969)"),e.createElement("div",{className:f.art},e.createElement("canvas",{ref:this.canvas,width:512,height:512})),e.createElement("div",{className:f.labelWrapper},e.createElement("div",{className:f.label},e.createElement("p",{className:f.artist},"SOL LEWITT"),e.createElement("p",{className:f.artwork},e.createElement("span",{className:f.italic},"Wall drawing"),", dhk.party"),e.createElement("p",{className:f.medium},"Digital (HTML5 Canvas)"))),e.createElement("p",{className:f.paragraph},"이 작품에 대한 솔 르윗의 지시사항은 다음과 같다."),e.createElement("blockquote",{className:f.instructionContent},"Bands of lines 12 inches (30 cm) wide,",e.createElement("br",null),"in three directions (vertical, horizontal, diagonal right) intersecting.",e.createElement("br",null),e.createElement("br",null),"세 가지 방향(수직, 수평, 우대각)으로 교차하는 30cm 폭의 줄무늬 띠."),e.createElement("p",null,"폭이 무작위로 정해지는 세 개의 줄무의 띠들이 벽면 정중앙에서 교차하도록 했다.")))},a}(c.a.Component),f={art:Object(l.css)({margin:"40px 0",textAlign:"center"}),labelWrapper:Object(l.css)({display:"flex",justifyContent:"center"}),label:Object(l.css)({marginBottom:"30px"}),artist:Object(l.css)({margin:0,padding:0,fontWeight:"bold",textDecoration:"underline"}),artwork:Object(l.css)({margin:0,padding:0}),medium:Object(l.css)({margin:0,padding:0}),italic:Object(l.css)({fontStyle:"italic"}),paragraph:Object(l.css)({}),instruction:Object(l.css)({}),instructionContent:Object(l.css)({paddingLeft:"20px",borderLeft:"solid 7px #f1f3f5",fontFamily:"monospace",fontSize:"1.1em"}),code:Object(l.css)({})};t.default=m}.call(this,a(89))},219:function(e,t,a){"use strict";a.r(t),function(e){a.d(t,"graphql",function(){return p}),a.d(t,"StaticQueryContext",function(){return m}),a.d(t,"StaticQuery",function(){return f});a(88);var n=a(0),r=a.n(n),i=a(4),c=a.n(i),l=a(218),s=a.n(l);a.d(t,"Link",function(){return s.a}),a.d(t,"withPrefix",function(){return l.withPrefix}),a.d(t,"navigate",function(){return l.navigate}),a.d(t,"push",function(){return l.push}),a.d(t,"replace",function(){return l.replace}),a.d(t,"navigateTo",function(){return l.navigateTo});var o=a(220),u=a.n(o);a.d(t,"PageRenderer",function(){return u.a});var d=a(40);a.d(t,"parsePath",function(){return d.a});var m=r.a.createContext({}),f=function(t){return e.createElement(m.Consumer,null,function(a){return t.data||a[t.query]&&a[t.query].data?(t.render||t.children)(t.data?t.data.data:a[t.query].data):e.createElement("div",null,"Loading (StaticQuery)")})};function p(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:c.a.object,query:c.a.string.isRequired,render:c.a.func,children:c.a.func}}.call(this,a(89))},220:function(e,t,a){var n;e.exports=(n=a(223))&&n.default||n},221:function(e,t,a){"use strict";var n=a(88),r=a(222),i=(a(0),a(219)),c=a(224),l=a(225);a(228),a(226);t.a=function(e){var t=e.children;return Object(n.c)(i.StaticQuery,{query:"3892401927",render:function(e){return Object(n.c)("div",{css:s},Object(n.c)(c.a,{title:e.site.siteMetadata.title}),Object(n.c)("main",{css:o},t),Object(n.c)(l.a,null))},data:r})};var s={name:"3cfldf",styles:"display:flex;min-height:100vh;flex-direction:column;margin:0 auto;"},o={name:"bw40gk",styles:"flex:1;margin:0 auto;padding:0 1em;width:100%;max-width:960px;"}},222:function(e){e.exports={data:{site:{siteMetadata:{title:"dhk.party"}}}}},223:function(e,t,a){"use strict";a.r(t);a(55);var n=a(0),r=a.n(n),i=a(4),c=a.n(i),l=a(56),s=a(2),o=function(e){var t=e.location,a=s.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json))};o.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},t.default=o},224:function(e,t,a){"use strict";(function(e){a(88),a(0);var n=a(219),r=a(54);t.a=function(t){var a=t.title,r=t.children;return e.createElement("header",{className:i},e.createElement("h1",{className:c},e.createElement(n.Link,{className:l,to:"/"},a)),r)};var i=Object(r.css)({position:"relative",zIndex:9,margin:"1em auto",padding:"0 1em",width:"100%",maxWidth:"960px"}),c=Object(r.css)({fontFamily:"Georgia",fontWeight:400,fontStyle:"italic",fontSize:"27px"}),l=Object(r.css)({display:"block",margin:"0.8em 0 1.424em 0",color:"black",textDecoration:"none"})}).call(this,a(89))},225:function(e,t,a){"use strict";(function(e){a(88),a(0);var n=a(54);t.a=function(){return e.createElement("footer",{className:r},e.createElement("p",null,e.createElement("small",null,e.createElement("a",{className:i,href:"mailto:kimdhoe1@gmail.com"},"kimdhoe1@gmail.com"))))};var r=Object(n.css)({marginTop:"4em",textAlign:"center"}),i=Object(n.css)({letterSpacing:"0.7px",fontFamily:"Georgia",fontStyle:"italic",textDecoration:"none",color:"#777"})}).call(this,a(89))},226:function(e,t,a){}}]);
//# sourceMappingURL=component---src-pages-art-sol-16-js-398824db51ac10b336d7.js.map