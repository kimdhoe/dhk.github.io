(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{184:function(e,t,a){"use strict";a.r(t),function(e){a(86),a(85);var n=a(7),r=a.n(n),i=a(0),c=a.n(i),l=a(51),s=a(204),o=a.n(s),u=a(194),m=512/o.a.range(1.5,3),d=function(t){function a(){for(var e,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))||this).canvas=c.a.createRef(),e}r()(a,t);var n=a.prototype;return n.componentDidMount=function(){var e=this.canvas.current.getContext("2d"),t=function(){a.forEach(function(t){var a=t[0],n=t[1];e.beginPath(),e.moveTo(a.x,a.y),e.lineTo(n.x,n.y),e.strokeStyle="#aaa",e.lineWidth=1,e.stroke()})},a=function(){for(var e=[],t=Math.sqrt(524288),a=0;a<=t;a+=5){var n={x:a,y:0},r={x:a,y:m};e.push([n,r])}return e}();e.fillStyle="white",e.fillRect(0,0,512,512),e.save(),e.translate(0,256-m/2),t(),e.restore(),e.save(),e.translate(256+m/2,0),e.rotate(Math.PI/2),t(),e.restore();var n=Math.sqrt(m*m/2)/2;e.translate(-n,512-n),e.rotate(Math.PI/-4),t()},n.render=function(){return e.createElement(u.a,null,e.createElement("div",null,e.createElement("h2",{style:{textAlign:"center"}},"[Sol LeWitt] Wall Drawing #16 (1969)"),e.createElement("div",{className:f.art},e.createElement("canvas",{ref:this.canvas,width:512,height:512})),e.createElement("div",{className:f.labelWrapper},e.createElement("div",{className:f.label},e.createElement("p",{className:f.artist},"SOL LEWITT"),e.createElement("p",{className:f.artwork},e.createElement("span",{className:f.italic},"Wall drawing"),", dhk.party"),e.createElement("p",{className:f.medium},"Digital (HTML5 Canvas)"))),e.createElement("p",{className:f.paragraph},"이 작품에 대한 솔 르윗의 지시사항은 다음과 같다."),e.createElement("blockquote",{className:f.instructionContent},"Bands of lines 12 inches (30 cm) wide,",e.createElement("br",null),"in three directions (vertical, horizontal, diagonal right) intersecting.",e.createElement("br",null),e.createElement("br",null),"세 가지 방향(수직, 수평, 우대각)으로 교차하는 30cm 폭의 줄무늬 띠."),e.createElement("p",null,"폭이 무작위로 정해지는 세 개의 줄무의 띠들이 벽면 정중앙에서 교차하도록 했다.")))},a}(c.a.Component),f={art:Object(l.css)({margin:"40px 0",textAlign:"center"}),labelWrapper:Object(l.css)({display:"flex",justifyContent:"center"}),label:Object(l.css)({marginBottom:"30px"}),artist:Object(l.css)({margin:0,padding:0,fontWeight:"bold",textDecoration:"underline"}),artwork:Object(l.css)({margin:0,padding:0}),medium:Object(l.css)({margin:0,padding:0}),italic:Object(l.css)({fontStyle:"italic"}),paragraph:Object(l.css)({}),instruction:Object(l.css)({}),instructionContent:Object(l.css)({paddingLeft:"20px",borderLeft:"solid 7px #f1f3f5",fontFamily:"monospace",fontSize:"1.1em"}),code:Object(l.css)({})};t.default=d}.call(this,a(84))},192:function(e,t,a){"use strict";a.r(t),function(e){a.d(t,"graphql",function(){return p}),a.d(t,"StaticQueryContext",function(){return d}),a.d(t,"StaticQuery",function(){return f});var n=a(0),r=a.n(n),i=a(4),c=a.n(i),l=a(191),s=a.n(l);a.d(t,"Link",function(){return s.a}),a.d(t,"withPrefix",function(){return l.withPrefix}),a.d(t,"navigate",function(){return l.navigate}),a.d(t,"push",function(){return l.push}),a.d(t,"replace",function(){return l.replace}),a.d(t,"navigateTo",function(){return l.navigateTo});var o=a(193),u=a.n(o);a.d(t,"PageRenderer",function(){return u.a});var m=a(37);a.d(t,"parsePath",function(){return m.a});var d=r.a.createContext({}),f=function(t){return e.createElement(d.Consumer,null,function(a){return t.data||a[t.query]&&a[t.query].data?(t.render||t.children)(t.data?t.data.data:a[t.query].data):e.createElement("div",null,"Loading (StaticQuery)")})};function p(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:c.a.object,query:c.a.string.isRequired,render:c.a.func,children:c.a.func}}.call(this,a(84))},193:function(e,t,a){var n;e.exports=(n=a(196))&&n.default||n},194:function(e,t,a){"use strict";(function(e){var n=a(195),r=(a(0),a(192)),i=a(51),c=a(197),l=a(198);a(201),a(199);t.a=function(t){var a=t.children;return e.createElement(r.StaticQuery,{query:"3892401927",render:function(t){return e.createElement("div",{className:s},e.createElement(c.a,{title:t.site.siteMetadata.title}),e.createElement("main",{className:o},a),e.createElement(l.a,null))},data:n})};var s=Object(i.css)({display:"flex",minHeight:"100vh",flexDirection:"column",margin:"0 auto"}),o=Object(i.css)({flex:1,margin:"0 auto",padding:"0 1em",maxWidth:"760px"})}).call(this,a(84))},195:function(e){e.exports={data:{site:{siteMetadata:{title:"dhk.party"}}}}},196:function(e,t,a){"use strict";a.r(t);a(52);var n=a(0),r=a.n(n),i=a(4),c=a.n(i),l=a(53),s=a(2),o=function(e){var t=e.location,a=s.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json))};o.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},t.default=o},197:function(e,t,a){"use strict";(function(e){a(0);var n=a(192),r=a(51);t.a=function(t){var a=t.title,r=t.children;return e.createElement("header",{className:i},e.createElement("h1",{className:c},e.createElement(n.Link,{className:l,to:"/"},a)),r)};var i=Object(r.css)({position:"relative",zIndex:9,margin:"1em auto",padding:"0 1em",width:"100%",maxWidth:"960px"}),c=Object(r.css)({fontFamily:"Georgia",fontWeight:400,fontStyle:"italic",fontSize:"27px"}),l=Object(r.css)({display:"block",margin:"0.8em 0 1.424em 0",color:"black",textDecoration:"none"})}).call(this,a(84))},198:function(e,t,a){"use strict";(function(e){a(0);var n=a(51);t.a=function(){return e.createElement("footer",{className:r},e.createElement("p",null,e.createElement("small",null,e.createElement("a",{className:i,href:"mailto:kimdhoe1@gmail.com"},"kimdhoe1@gmail.com"))))};var r=Object(n.css)({marginTop:"4em",textAlign:"center"}),i=Object(n.css)({letterSpacing:"0.7px",fontFamily:"Georgia",fontStyle:"italic",textDecoration:"none",color:"#777"})}).call(this,a(84))},199:function(e,t,a){}}]);
//# sourceMappingURL=component---src-pages-art-sol-16-js-95af7c23a518d696684e.js.map