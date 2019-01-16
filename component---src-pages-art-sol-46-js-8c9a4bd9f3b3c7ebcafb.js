(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{192:function(e,t,a){"use strict";a.r(t),function(e){a(91),a(90);var n=a(7),r=a.n(n),i=(a(88),a(0)),c=a.n(i),l=a(54),o=a(231),s=a.n(o),u=a(221),d=function(t){function a(){for(var e,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))||this).canvas=c.a.createRef(),e.state={width:0,height:0},e}r()(a,t);var n=a.prototype;return n.componentDidMount=function(){var e=this,t=s.a.rangeFloor(400,600),a=s.a.rangeFloor(300,500),n=s.a.rangeFloor(3,11);this.setState({width:t,height:a},function(){var r=e.canvas.current.getContext("2d"),i=m(t,n),c=s.a.rangeFloor(5,15);r.fillStyle="white",r.fillRect(0,0,t,a),i.forEach(function(e){f(r,e,a,c)})})},n.render=function(){var t=this.state,a=t.width,n=t.height;return e.createElement(u.a,null,e.createElement("div",null,e.createElement("h2",{style:{textAlign:"center"}},"[Sol LeWitt] Wall Drawing #46 (1970)"),e.createElement("div",{className:p.art},e.createElement("canvas",{ref:this.canvas,width:a,height:n})),e.createElement("div",{className:p.labelWrapper},e.createElement("div",{className:p.label},e.createElement("p",{className:p.artist},"SOL LEWITT"),e.createElement("p",{className:p.artwork},e.createElement("span",{className:p.italic},"Wall drawing"),", dhk.party"),e.createElement("p",{className:p.medium},"Digital (HTML5 Canvas)"))),e.createElement("p",{className:p.paragraph},"이 작품에 대한 솔 르윗의 지시사항은 다음과 같다."),e.createElement("blockquote",{className:p.instructionContent},"Vertical lines, not straight, not touching, covering the wall evenly.",e.createElement("br",null),e.createElement("br",null),"벽면을 고르게 덮는 서로 만나지 않고 곧지 않은 수직 방향의 선들",e.createElement("br",null)),e.createElement("p",null,"간격과 형태가 무작위로 정해지는 물결 모양의 곡선")))},a}(c.a.Component),m=function(e,t){for(var a=[],n=t/2;n<=e-t/2;n+=t)a.push({x:n,y:0});return a},f=function(e,t,a,n){for(var r=a/n,i=0;i<n;i++){var c={x:t.x,y:t.y+r*i},l={x:t.x+(i%2?-7:7),y:t.y+r*i+r/2},o={x:t.x,y:t.y+r*(i+1)};e.beginPath(),e.moveTo(c.x,c.y),e.quadraticCurveTo(l.x,l.y,o.x,o.y),e.lineWidth=.7,e.srokeStyle="#777",e.stroke()}},p={art:Object(l.css)({margin:"40px 0",textAlign:"center"}),labelWrapper:Object(l.css)({display:"flex",justifyContent:"center"}),label:Object(l.css)({marginBottom:"30px"}),artist:Object(l.css)({margin:0,padding:0,fontWeight:"bold",textDecoration:"underline"}),artwork:Object(l.css)({margin:0,padding:0}),medium:Object(l.css)({margin:0,padding:0}),italic:Object(l.css)({fontStyle:"italic"}),paragraph:Object(l.css)({}),instruction:Object(l.css)({}),instructionContent:Object(l.css)({paddingLeft:"20px",borderLeft:"solid 7px #f1f3f5",fontFamily:"monospace",fontSize:"1.1em"}),code:Object(l.css)({})};t.default=d}.call(this,a(89))},219:function(e,t,a){"use strict";a.r(t),function(e){a.d(t,"graphql",function(){return p}),a.d(t,"StaticQueryContext",function(){return m}),a.d(t,"StaticQuery",function(){return f});a(88);var n=a(0),r=a.n(n),i=a(4),c=a.n(i),l=a(218),o=a.n(l);a.d(t,"Link",function(){return o.a}),a.d(t,"withPrefix",function(){return l.withPrefix}),a.d(t,"navigate",function(){return l.navigate}),a.d(t,"push",function(){return l.push}),a.d(t,"replace",function(){return l.replace}),a.d(t,"navigateTo",function(){return l.navigateTo});var s=a(220),u=a.n(s);a.d(t,"PageRenderer",function(){return u.a});var d=a(40);a.d(t,"parsePath",function(){return d.a});var m=r.a.createContext({}),f=function(t){return e.createElement(m.Consumer,null,function(a){return t.data||a[t.query]&&a[t.query].data?(t.render||t.children)(t.data?t.data.data:a[t.query].data):e.createElement("div",null,"Loading (StaticQuery)")})};function p(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:c.a.object,query:c.a.string.isRequired,render:c.a.func,children:c.a.func}}.call(this,a(89))},220:function(e,t,a){var n;e.exports=(n=a(223))&&n.default||n},221:function(e,t,a){"use strict";var n=a(88),r=a(222),i=(a(0),a(219)),c=a(224),l=a(225);a(228),a(226);t.a=function(e){var t=e.children;return Object(n.c)(i.StaticQuery,{query:"3892401927",render:function(e){return Object(n.c)("div",{css:o},Object(n.c)(c.a,{title:e.site.siteMetadata.title}),Object(n.c)("main",{css:s},t),Object(n.c)(l.a,null))},data:r})};var o={name:"3cfldf",styles:"display:flex;min-height:100vh;flex-direction:column;margin:0 auto;"},s={name:"bw40gk",styles:"flex:1;margin:0 auto;padding:0 1em;width:100%;max-width:960px;"}},222:function(e){e.exports={data:{site:{siteMetadata:{title:"dhk.party"}}}}},223:function(e,t,a){"use strict";a.r(t);a(55);var n=a(0),r=a.n(n),i=a(4),c=a.n(i),l=a(56),o=a(2),s=function(e){var t=e.location,a=o.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json))};s.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},t.default=s},224:function(e,t,a){"use strict";(function(e){a(88),a(0);var n=a(219),r=a(54);t.a=function(t){var a=t.title,r=t.children;return e.createElement("header",{className:i},e.createElement("h1",{className:c},e.createElement(n.Link,{className:l,to:"/"},a)),r)};var i=Object(r.css)({position:"relative",zIndex:9,margin:"1em auto",padding:"0 1em",width:"100%",maxWidth:"960px"}),c=Object(r.css)({fontFamily:"Georgia",fontWeight:400,fontStyle:"italic",fontSize:"27px"}),l=Object(r.css)({display:"block",margin:"0.8em 0 1.424em 0",color:"black",textDecoration:"none"})}).call(this,a(89))},225:function(e,t,a){"use strict";(function(e){a(88),a(0);var n=a(54);t.a=function(){return e.createElement("footer",{className:r},e.createElement("p",null,e.createElement("small",null,e.createElement("a",{className:i,href:"mailto:kimdhoe1@gmail.com"},"kimdhoe1@gmail.com"))))};var r=Object(n.css)({marginTop:"4em",textAlign:"center"}),i=Object(n.css)({letterSpacing:"0.7px",fontFamily:"Georgia",fontStyle:"italic",textDecoration:"none",color:"#777"})}).call(this,a(89))},226:function(e,t,a){}}]);
//# sourceMappingURL=component---src-pages-art-sol-46-js-8c9a4bd9f3b3c7ebcafb.js.map