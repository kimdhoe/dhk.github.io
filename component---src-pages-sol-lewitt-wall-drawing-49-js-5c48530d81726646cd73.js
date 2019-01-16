(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{207:function(e,t,n){"use strict";n.r(t),function(e){n(60),n(61),n(91),n(90),n(94),n(238);var a=n(7),r=n.n(a),i=(n(88),n(0)),c=n.n(i),o=n(54),l=n(231),s=n.n(l),u=n(221),d=["#c92a2a","#e67700","#1864ab","#212529"],f=function(t){function n(){for(var e,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))||this).canvas=c.a.createRef(),e.state={width:0,height:0},e}r()(n,t);var a=n.prototype;return a.componentDidMount=function(){var e=this,t=s.a.rangeFloor(400,600),n=s.a.rangeFloor(300,500),a=t/15,r=a/7,i=s.a.shuffle(d),c=s.a.shuffle([m,h,p,g]),o=b([0,1,2,3]).filter(function(e){return e.length}).sort(function(e,t){return e.length-t.length});this.setState({width:t,height:n},function(){var l=e.canvas.current.getContext("2d");l.fillStyle="white",l.fillRect(0,0,t,n),l.beginPath(),l.moveTo(0,0),l.lineTo(t,0),l.lineTo(t,n),l.lineTo(0,n),l.lineTo(0,0),l.lineWidth=.9,l.strokeStyle="#777",l.stroke(),o.forEach(function(e,t){e.forEach(function(e){(0,c[e])(l,i[e],r,t*a,0,(t+1)*a,n)})})})},a.render=function(){var t=this.state,n=t.width,a=t.height;return e.createElement(u.a,null,e.createElement("div",null,e.createElement("h2",{style:{textAlign:"center"}},"[Sol LeWitt] Wall Drawing #49 (1970)"),e.createElement("div",{className:v.art},e.createElement("canvas",{ref:this.canvas,width:n,height:a})),e.createElement("div",{className:v.labelWrapper},e.createElement("div",{className:v.label},e.createElement("p",{className:v.artist},"SOL LEWITT"),e.createElement("p",{className:v.artwork},e.createElement("span",{className:v.italic},"Wall drawing"),", dhk.party"),e.createElement("p",{className:v.medium},"Digital (HTML5 Canvas)"))),e.createElement("blockquote",{className:v.instructionContent},"A wall divided equally into fifteen equal parts, each with a different line direction and color, and all combinations.",e.createElement("br",null),e.createElement("br",null),"Red, Yellow, Blue, Black pencil",e.createElement("br",null))))},n}(c.a.Component),m=function(e,t,n,a,r,i,c){for(var o=a;o<=i;o+=n)e.beginPath(),e.moveTo(o,r),e.lineTo(o,c),e.lineWidth=.7,e.strokeStyle=t,e.stroke()},h=function(e,t,n,a,r,i,c){for(var o=r;o<=c;o+=n)e.beginPath(),e.moveTo(a,o),e.lineTo(i,o),e.lineWidth=.7,e.strokeStyle=t,e.stroke()},p=function(e,t,n,a,r,i,c){for(var o=i-a,l=Math.sqrt(2*n*n),s=r;s<=c+o;s+=l)e.beginPath(),e.moveTo(a,s),e.lineTo(i,s-o),e.lineWidth=.7,e.strokeStyle=t,e.stroke()},g=function(e,t,n,a,r,i,c){for(var o=i-a,l=Math.sqrt(2*n*n),s=r-o;s<=c;s+=l)e.beginPath(),e.moveTo(a,s),e.lineTo(i,s+o),e.lineWidth=.7,e.strokeStyle=t,e.stroke()},b=function(e){return e.reduce(function(e,t){return e.concat(e.map(function(e){return[t].concat(e)}))},[[]])},v={art:Object(o.css)({margin:"40px 0",textAlign:"center"}),labelWrapper:Object(o.css)({display:"flex",justifyContent:"center"}),label:Object(o.css)({marginBottom:"30px"}),artist:Object(o.css)({margin:0,padding:0,fontWeight:"bold",textDecoration:"underline"}),artwork:Object(o.css)({margin:0,padding:0}),medium:Object(o.css)({margin:0,padding:0}),italic:Object(o.css)({fontStyle:"italic"}),paragraph:Object(o.css)({}),instruction:Object(o.css)({}),instructionContent:Object(o.css)({paddingLeft:"20px",borderLeft:"solid 7px #f1f3f5",fontFamily:"monospace",fontSize:"1.1em"}),code:Object(o.css)({})};t.default=f}.call(this,n(89))},219:function(e,t,n){"use strict";n.r(t),function(e){n.d(t,"graphql",function(){return h}),n.d(t,"StaticQueryContext",function(){return f}),n.d(t,"StaticQuery",function(){return m});n(88);var a=n(0),r=n.n(a),i=n(4),c=n.n(i),o=n(218),l=n.n(o);n.d(t,"Link",function(){return l.a}),n.d(t,"withPrefix",function(){return o.withPrefix}),n.d(t,"navigate",function(){return o.navigate}),n.d(t,"push",function(){return o.push}),n.d(t,"replace",function(){return o.replace}),n.d(t,"navigateTo",function(){return o.navigateTo});var s=n(220),u=n.n(s);n.d(t,"PageRenderer",function(){return u.a});var d=n(40);n.d(t,"parsePath",function(){return d.a});var f=r.a.createContext({}),m=function(t){return e.createElement(f.Consumer,null,function(n){return t.data||n[t.query]&&n[t.query].data?(t.render||t.children)(t.data?t.data.data:n[t.query].data):e.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}m.propTypes={data:c.a.object,query:c.a.string.isRequired,render:c.a.func,children:c.a.func}}.call(this,n(89))},220:function(e,t,n){var a;e.exports=(a=n(223))&&a.default||a},221:function(e,t,n){"use strict";var a=n(88),r=n(222),i=(n(0),n(219)),c=n(224),o=n(225);n(228),n(226);t.a=function(e){var t=e.children;return Object(a.c)(i.StaticQuery,{query:"3892401927",render:function(e){return Object(a.c)("div",{css:l},Object(a.c)(c.a,{title:e.site.siteMetadata.title}),Object(a.c)("main",{css:s},t),Object(a.c)(o.a,null))},data:r})};var l={name:"3cfldf",styles:"display:flex;min-height:100vh;flex-direction:column;margin:0 auto;"},s={name:"bw40gk",styles:"flex:1;margin:0 auto;padding:0 1em;width:100%;max-width:960px;"}},222:function(e){e.exports={data:{site:{siteMetadata:{title:"dhk.party"}}}}},223:function(e,t,n){"use strict";n.r(t);n(55);var a=n(0),r=n.n(a),i=n(4),c=n.n(i),o=n(56),l=n(2),s=function(e){var t=e.location,n=l.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(o.a,Object.assign({location:t,pageResources:n},n.json))};s.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},t.default=s},224:function(e,t,n){"use strict";(function(e){n(88),n(0);var a=n(219),r=n(54);t.a=function(t){var n=t.title,r=t.children;return e.createElement("header",{className:i},e.createElement("h1",{className:c},e.createElement(a.Link,{className:o,to:"/"},n)),r)};var i=Object(r.css)({position:"relative",zIndex:9,margin:"1em auto",padding:"0 1em",width:"100%",maxWidth:"960px"}),c=Object(r.css)({fontFamily:"Georgia",fontWeight:400,fontStyle:"italic",fontSize:"27px"}),o=Object(r.css)({display:"block",margin:"0.8em 0 1.424em 0",color:"black",textDecoration:"none"})}).call(this,n(89))},225:function(e,t,n){"use strict";(function(e){n(88),n(0);var a=n(54);t.a=function(){return e.createElement("footer",{className:r},e.createElement("p",null,e.createElement("small",null,e.createElement("a",{className:i,href:"mailto:kimdhoe1@gmail.com"},"kimdhoe1@gmail.com"))))};var r=Object(a.css)({marginTop:"4em",textAlign:"center"}),i=Object(a.css)({letterSpacing:"0.7px",fontFamily:"Georgia",fontStyle:"italic",textDecoration:"none",color:"#777"})}).call(this,n(89))},226:function(e,t,n){},238:function(e,t,n){"use strict";var a=n(6),r=n(21),i=n(30),c=n(20),o=[].sort,l=[1,2,3];a(a.P+a.F*(c(function(){l.sort(void 0)})||!c(function(){l.sort(null)})||!n(15)(o)),"Array",{sort:function(e){return void 0===e?o.call(i(this)):o.call(i(this),r(e))}})}}]);
//# sourceMappingURL=component---src-pages-sol-lewitt-wall-drawing-49-js-5c48530d81726646cd73.js.map