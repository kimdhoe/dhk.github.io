(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{212:function(e,t,a){"use strict";a.r(t),function(e){a(91),a(90);var n=a(7),r=a.n(n),i=(a(88),a(0)),c=a.n(i),o=a(54),l=a(229),s=a.n(l),u=a(219),d=function(t){function a(){for(var e,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))||this).canvas=c.a.createRef(),e.state={width:0,height:0},e}r()(a,t);var n=a.prototype;return n.componentDidMount=function(){var e=this,t=s.a.rangeFloor(500,600),a=s.a.rangeFloor(450,550);this.setState({width:t,height:a},function(){var n=e.canvas.current.getContext("2d");n.fillStyle="white",n.fillRect(0,0,t,a),f(t,a).forEach(function(e){var t=e[0],a=e[1];n.beginPath(),n.moveTo(t.x,t.y),n.lineTo(a.x,a.y),n.lineWidth=2,n.strokeStyle="black",n.stroke()})})},n.render=function(){var t=this.state,a=t.width,n=t.height;return e.createElement(u.a,null,e.createElement("div",null,e.createElement("h2",{style:{textAlign:"center"}},"[Sol LeWitt] Wall Drawing #86 (1971)"),e.createElement("div",{className:m.art},e.createElement("canvas",{ref:this.canvas,width:a,height:n})),e.createElement("div",{className:m.labelWrapper},e.createElement("div",{className:m.label},e.createElement("p",{className:m.artist},"SOL LEWITT"),e.createElement("p",{className:m.artwork},e.createElement("span",{className:m.italic},"Wall drawing"),", dhk.party"),e.createElement("p",{className:m.medium},"Digital (HTML5 Canvas)"))),e.createElement("blockquote",{className:m.instructionContent},"Ten thousand lines about 10 inches (25 cm) long, covering the wall evenly.")))},a}(c.a.Component),m={art:Object(o.css)({margin:"40px 0",textAlign:"center"}),labelWrapper:Object(o.css)({display:"flex",justifyContent:"center"}),label:Object(o.css)({marginBottom:"30px"}),artist:Object(o.css)({margin:0,padding:0,fontWeight:"bold",textDecoration:"underline"}),artwork:Object(o.css)({margin:0,padding:0}),medium:Object(o.css)({margin:0,padding:0}),italic:Object(o.css)({fontStyle:"italic"}),paragraph:Object(o.css)({}),instruction:Object(o.css)({}),instructionContent:Object(o.css)({paddingLeft:"20px",borderLeft:"solid 7px #f1f3f5",fontFamily:"monospace",fontSize:"1.1em"}),code:Object(o.css)({})},f=function(e,t){for(var a=[],n=0;n<1e3;n++){for(var r={x:s.a.rangeFloor(0,e+1),y:s.a.rangeFloor(0,t+1)},i={x:-1,y:-1};!(i.x>=0&&i.x<=e&&i.y>=0&&i.y<=t);){var c=2*Math.PI*s.a.range(0,1),o=120*Math.cos(c),l=120*Math.sin(c);i.x=r.x+o,i.y=r.y+l}a.push([r,i])}return a};t.default=d}.call(this,a(89))},217:function(e,t,a){"use strict";a.r(t),function(e){a.d(t,"graphql",function(){return h}),a.d(t,"StaticQueryContext",function(){return m}),a.d(t,"StaticQuery",function(){return f});a(88);var n=a(0),r=a.n(n),i=a(4),c=a.n(i),o=a(216),l=a.n(o);a.d(t,"Link",function(){return l.a}),a.d(t,"withPrefix",function(){return o.withPrefix}),a.d(t,"navigate",function(){return o.navigate}),a.d(t,"push",function(){return o.push}),a.d(t,"replace",function(){return o.replace}),a.d(t,"navigateTo",function(){return o.navigateTo});var s=a(218),u=a.n(s);a.d(t,"PageRenderer",function(){return u.a});var d=a(40);a.d(t,"parsePath",function(){return d.a});var m=r.a.createContext({}),f=function(t){return e.createElement(m.Consumer,null,function(a){return t.data||a[t.query]&&a[t.query].data?(t.render||t.children)(t.data?t.data.data:a[t.query].data):e.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:c.a.object,query:c.a.string.isRequired,render:c.a.func,children:c.a.func}}.call(this,a(89))},218:function(e,t,a){var n;e.exports=(n=a(221))&&n.default||n},219:function(e,t,a){"use strict";var n=a(88),r=a(220),i=(a(0),a(217)),c=a(222),o=a(223);a(226),a(224);t.a=function(e){var t=e.children;return Object(n.c)(i.StaticQuery,{query:"3892401927",render:function(e){return Object(n.c)("div",{css:l},Object(n.c)(c.a,{title:e.site.siteMetadata.title}),Object(n.c)("main",{css:s},t),Object(n.c)(o.a,null))},data:r})};var l={name:"3cfldf",styles:"display:flex;min-height:100vh;flex-direction:column;margin:0 auto;"},s={name:"1715jjh",styles:"flex:1;margin:0 auto;padding:0 1em;width:100%;max-width:760px;"}},220:function(e){e.exports={data:{site:{siteMetadata:{title:"dhk.party"}}}}},221:function(e,t,a){"use strict";a.r(t);a(55);var n=a(0),r=a.n(n),i=a(4),c=a.n(i),o=a(56),l=a(2),s=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json))};s.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},t.default=s},222:function(e,t,a){"use strict";(function(e){a(88),a(0);var n=a(217),r=a(54);t.a=function(t){var a=t.title,r=t.children;return e.createElement("header",{className:i},e.createElement("h1",{className:c},e.createElement(n.Link,{className:o,to:"/"},a)),r)};var i=Object(r.css)({position:"relative",zIndex:9,margin:"1em auto",padding:"0 1em",width:"100%",maxWidth:"960px"}),c=Object(r.css)({fontFamily:"Georgia",fontWeight:400,fontStyle:"italic",fontSize:"27px"}),o=Object(r.css)({display:"block",margin:"0.8em 0 1.424em 0",color:"black",textDecoration:"none"})}).call(this,a(89))},223:function(e,t,a){"use strict";(function(e){a(88),a(0);var n=a(54);t.a=function(){return e.createElement("footer",{className:r},e.createElement("p",null,e.createElement("small",null,e.createElement("a",{className:i,href:"mailto:kimdhoe1@gmail.com"},"kimdhoe1@gmail.com"))))};var r=Object(n.css)({marginTop:"4em",textAlign:"center"}),i=Object(n.css)({letterSpacing:"0.7px",fontFamily:"Georgia",fontStyle:"italic",textDecoration:"none",color:"#777"})}).call(this,a(89))},224:function(e,t,a){}}]);
//# sourceMappingURL=component---src-pages-sol-lewitt-wall-drawing-86-js-fd40fa1273c7e3ea9a57.js.map