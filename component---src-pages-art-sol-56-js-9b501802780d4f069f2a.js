(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{190:function(e,t,a){"use strict";a.r(t),function(e){var n=a(7),r=a.n(n),i=a(0),c=a.n(i),s=a(51),l=(a(208),a(198)),o=function(t){function a(){for(var e,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))||this).canvas=c.a.createRef(),e.state={width:0},e}r()(a,t);var n=a.prototype;return n.componentDidMount=function(){var e=this,t=d,a=m;this.setState({width:600},function(){var n=e.canvas.current.getContext("2d");n.fillStyle="white",n.fillRect(0,0,600,600),t(n,300,300),n.save(),n.translate(300,0),t(n,300,300),n.restore(),n.save(),n.translate(0,300),t(n,300,300),n.restore(),n.save(),n.translate(300,300),t(n,300,300),n.restore(),n.save(),n.translate(600,0),n.rotate(Math.PI/2),t(n,300,300),n.restore(),n.save(),n.translate(300,300),n.rotate(Math.PI/2),t(n,300,300),n.restore(),n.save(),n.translate(600,300),n.rotate(Math.PI/2),t(n,300,300),n.restore(),n.save(),n.translate(0,300),a(n,300),n.restore(),n.save(),n.translate(300,300),a(n,300),n.restore(),n.save(),n.translate(600,300),n.rotate(Math.PI/2),a(n,300),n.restore()})},n.render=function(){var t=this.state.width;return e.createElement(l.a,null,e.createElement("div",null,e.createElement("h2",{style:{textAlign:"center"}},"[Sol LeWitt] Wall Drawing #56 (1970)"),e.createElement("div",{className:u.art},e.createElement("canvas",{ref:this.canvas,width:t,height:t})),e.createElement("div",{className:u.labelWrapper},e.createElement("div",{className:u.label},e.createElement("p",{className:u.artist},"SOL LEWITT"),e.createElement("p",{className:u.artwork},e.createElement("span",{className:u.italic},"Wall drawing"),", dhk.party"),e.createElement("p",{className:u.medium},"Digital (HTML5 Canvas)"))),e.createElement("blockquote",{className:u.instructionContent},"A square is divided horizontally and vertically into four equal parts,",e.createElement("br",null),"each with lines in four directions superimposed progressively.",e.createElement("br",null))))},a}(c.a.Component),u={art:Object(s.css)({margin:"40px 0",textAlign:"center"}),labelWrapper:Object(s.css)({display:"flex",justifyContent:"center"}),label:Object(s.css)({marginBottom:"30px"}),artist:Object(s.css)({margin:0,padding:0,fontWeight:"bold",textDecoration:"underline"}),artwork:Object(s.css)({margin:0,padding:0}),medium:Object(s.css)({margin:0,padding:0}),italic:Object(s.css)({fontStyle:"italic"}),paragraph:Object(s.css)({}),instruction:Object(s.css)({}),instructionContent:Object(s.css)({paddingLeft:"20px",borderLeft:"solid 7px #f1f3f5",fontFamily:"monospace",fontSize:"1.1em"}),code:Object(s.css)({})},d=function(e,t){for(var a=t/40,n=0;n<=t;n+=a){var r={x:0,y:n},i={x:t,y:n};e.beginPath(0),e.moveTo(r.x,r.y),e.lineTo(i.x,i.y),e.strokeStyle="#aaa",e.lineWidth=.7,e.stroke()}},m=function(e,t){for(var a=t/40,n=0;n<=t;n+=a){var r={x:n,y:0},i={x:0,y:n};e.beginPath(),e.moveTo(r.x,r.y),e.lineTo(i.x,i.y),e.strokeStyle="#aaa",e.lineWidth=.7,e.stroke()}for(var c=a;c<=t;c+=a){var s={x:c,y:t},l={x:t,y:c};e.beginPath(),e.moveTo(s.x,s.y),e.lineTo(l.x,l.y),e.strokeStyle="#aaa",e.lineWidth=.7,e.stroke()}};t.default=o}.call(this,a(84))},196:function(e,t,a){"use strict";a.r(t),function(e){a.d(t,"graphql",function(){return p}),a.d(t,"StaticQueryContext",function(){return m}),a.d(t,"StaticQuery",function(){return f});var n=a(0),r=a.n(n),i=a(4),c=a.n(i),s=a(195),l=a.n(s);a.d(t,"Link",function(){return l.a}),a.d(t,"withPrefix",function(){return s.withPrefix}),a.d(t,"navigate",function(){return s.navigate}),a.d(t,"push",function(){return s.push}),a.d(t,"replace",function(){return s.replace}),a.d(t,"navigateTo",function(){return s.navigateTo});var o=a(197),u=a.n(o);a.d(t,"PageRenderer",function(){return u.a});var d=a(37);a.d(t,"parsePath",function(){return d.a});var m=r.a.createContext({}),f=function(t){return e.createElement(m.Consumer,null,function(a){return t.data||a[t.query]&&a[t.query].data?(t.render||t.children)(t.data?t.data.data:a[t.query].data):e.createElement("div",null,"Loading (StaticQuery)")})};function p(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:c.a.object,query:c.a.string.isRequired,render:c.a.func,children:c.a.func}}.call(this,a(84))},197:function(e,t,a){var n;e.exports=(n=a(200))&&n.default||n},198:function(e,t,a){"use strict";(function(e){var n=a(199),r=(a(0),a(196)),i=a(51),c=a(201),s=a(202);a(205),a(203);t.a=function(t){var a=t.children;return e.createElement(r.StaticQuery,{query:"3892401927",render:function(t){return e.createElement("div",{className:l},e.createElement(c.a,{title:t.site.siteMetadata.title}),e.createElement("main",{className:o},a),e.createElement(s.a,null))},data:n})};var l=Object(i.css)({display:"flex",minHeight:"100vh",flexDirection:"column",margin:"0 auto"}),o=Object(i.css)({flex:1,margin:"0 auto",padding:"0 1em",maxWidth:"760px"})}).call(this,a(84))},199:function(e){e.exports={data:{site:{siteMetadata:{title:"dhk.party"}}}}},200:function(e,t,a){"use strict";a.r(t);a(52);var n=a(0),r=a.n(n),i=a(4),c=a.n(i),s=a(53),l=a(2),o=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(s.a,Object.assign({location:t,pageResources:a},a.json))};o.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},t.default=o},201:function(e,t,a){"use strict";(function(e){a(0);var n=a(196),r=a(51);t.a=function(t){var a=t.title,r=t.children;return e.createElement("header",{className:i},e.createElement("h1",{className:c},e.createElement(n.Link,{className:s,to:"/"},a)),r)};var i=Object(r.css)({position:"relative",zIndex:9,margin:"1em auto",padding:"0 1em",width:"100%",maxWidth:"960px"}),c=Object(r.css)({fontFamily:"Georgia",fontWeight:400,fontStyle:"italic",fontSize:"27px"}),s=Object(r.css)({display:"block",margin:"0.8em 0 1.424em 0",color:"black",textDecoration:"none"})}).call(this,a(84))},202:function(e,t,a){"use strict";(function(e){a(0);var n=a(51);t.a=function(){return e.createElement("footer",{className:r},e.createElement("p",null,e.createElement("small",null,e.createElement("a",{className:i,href:"mailto:kimdhoe1@gmail.com"},"kimdhoe1@gmail.com"))))};var r=Object(n.css)({marginTop:"4em",textAlign:"center"}),i=Object(n.css)({letterSpacing:"0.7px",fontFamily:"Georgia",fontStyle:"italic",textDecoration:"none",color:"#777"})}).call(this,a(84))},203:function(e,t,a){}}]);
//# sourceMappingURL=component---src-pages-art-sol-56-js-9b501802780d4f069f2a.js.map