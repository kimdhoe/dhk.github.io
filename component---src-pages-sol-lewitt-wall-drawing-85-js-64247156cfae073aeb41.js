(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{212:function(e,t,n){"use strict";n.r(t),function(e){var a=n(7),i=n.n(a),r=(n(88),n(0)),o=n.n(r),l=n(54),c=n(230),s=n.n(c),u=n(222),d=function(t){function n(){for(var e,n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))||this).canvas=o.a.createRef(),e.state={width:0,height:0},e}i()(n,t);var a=n.prototype;return a.componentDidMount=function(){var e=this,t=s.a.rangeFloor(500,600),n=s.a.rangeFloor(450,550);this.setState({width:t,height:n},function(){var a=n/4,i=e.canvas.current.getContext("2d");i.fillStyle="white",i.fillRect(0,0,t,n),m(i,0,0*a,t,1*a),h(i,0,1*a,t,2*a),v(i,0,2*a,t,3*a),p(i,0,3*a,t,4*a)})},a.render=function(){var t=this.state,n=t.width,a=t.height;return e.createElement(u.a,null,e.createElement("div",null,e.createElement("h2",{style:{textAlign:"center"}},"[Sol LeWitt] Wall Drawing #85 (1971)"),e.createElement("div",{className:f.art},e.createElement("canvas",{ref:this.canvas,width:n,height:a})),e.createElement("div",{className:f.labelWrapper},e.createElement("div",{className:f.label},e.createElement("p",{className:f.artist},"SOL LEWITT"),e.createElement("p",{className:f.artwork},e.createElement("span",{className:f.italic},"Wall drawing"),", dhk.party"),e.createElement("p",{className:f.medium},"Digital (HTML5 Canvas)"))),e.createElement("blockquote",{className:f.instructionContent},"A wall is divided into four horizontal parts. In the top row are four equal divisions, each with lines in a different direction. In the second row, six double combinations; in the third row, four triple combinations; in the bottom row, all four combinations superimposed.")))},n}(o.a.Component),f={art:Object(l.css)({margin:"40px 0",textAlign:"center"}),labelWrapper:Object(l.css)({display:"flex",justifyContent:"center"}),label:Object(l.css)({marginBottom:"30px"}),artist:Object(l.css)({margin:0,padding:0,fontWeight:"bold",textDecoration:"underline"}),artwork:Object(l.css)({margin:0,padding:0}),medium:Object(l.css)({margin:0,padding:0}),italic:Object(l.css)({fontStyle:"italic"}),paragraph:Object(l.css)({}),instruction:Object(l.css)({}),instructionContent:Object(l.css)({paddingLeft:"20px",borderLeft:"solid 7px #f1f3f5",fontFamily:"monospace",fontSize:"1.1em"}),code:Object(l.css)({})},m=function(e,t,n,a,i){var r=(a-t)/4,o=s.a.shuffle([g,y,b,x]),l=o[0],c=o[1],u=o[2],d=o[3];l(e,t+0*r,n,t+1*r,i),c(e,t+1*r,n,t+2*r,i),u(e,t+2*r,n,t+3*r,i),d(e,t+3*r,n,t+4*r,i)},h=function(e,t,n,a,i){for(var r=(a-t)/6,o=0;o<6;o++){var l=s.a.shuffle([g,y,b,x]),c=l[0],u=l[1];c(e,t+o*r,n,t+(o+1)*r,i),u(e,t+o*r,n,t+(o+1)*r,i)}},v=function(e,t,n,a,i){for(var r=(a-t)/4,o=0;o<4;o++){var l=s.a.shuffle([g,y,b,x]),c=l[0],u=l[1],d=l[2];c(e,t+o*r,n,t+(o+1)*r,i),u(e,t+o*r,n,t+(o+1)*r,i),d(e,t+o*r,n,t+(o+1)*r,i)}},p=function(e,t,n,a,i){g(e,t,n,a,i),y(e,t,n,a,i),b(e,t,n,a,i),x(e,t,n,a,i)},g=function(e,t,n,a,i){for(var r=n;r<=i;r+=4)e.beginPath(),e.moveTo(t,r),e.lineTo(a,r),e.lineWidth=.7,e.strokeStyle="#999",e.stroke()},y=function(e,t,n,a,i){for(var r=t;r<=a;r+=4)e.beginPath(),e.moveTo(r,n),e.lineTo(r,i),e.lineWidth=.7,e.strokeStyle="#999",e.stroke()},b=function(e,t,n,a,i){if(k(t,n,a,i)){for(var r,o=t;o<=a;o+=4){var l={x:o,y:n},c={x:t,y:n+(o-t)};r=n+(o-t),e.beginPath(),e.moveTo(l.x,l.y),e.lineTo(c.x,c.y),e.lineWidth=.7,e.strokeStyle="#999",e.stroke()}for(var s=r;s<=i;s+=4)s!==r?(r=s-(a-t),e.beginPath(),e.moveTo(t,s),e.lineTo(a,r),e.lineWidth=.7,e.strokeStyle="#999",e.stroke()):r=s-(a-t);for(var u=r+4;u<=i;u+=4)e.beginPath(),e.moveTo(a,u),e.lineTo(a-(i-u),i),e.lineWidth=.7,e.strokeStyle="#999",e.stroke()}else{for(var d,f=n;f<=i;f+=4){var m={x:t,y:f},h={x:t+(f-n),y:n};d=t+(f-n),e.beginPath(),e.moveTo(m.x,m.y),e.lineTo(h.x,h.y),e.lineWidth=.7,e.strokeStyle="#999",e.stroke()}for(var v=d;v<=a;v+=4)v!==d?(d=v-(i-n),e.beginPath(),e.moveTo(v,n),e.lineTo(d,i),e.lineWidth=.7,e.strokeStyle="#999",e.stroke()):d=v-(i-n);for(var p=d+4;p<=a;p+=4)e.beginPath(),e.moveTo(p,i),e.lineTo(a,i-(a-p)),e.lineWidth=.7,e.strokeStyle="#999",e.stroke()}},x=function(e,t,n,a,i){if(k(t,n,a,i)){for(var r,o=t;o<=a;o+=4){var l={x:o,y:i},c={x:t,y:i-(o-t)};r=i-(o-t),e.beginPath(),e.moveTo(l.x,l.y),e.lineTo(c.x,c.y),e.lineWidth=.7,e.strokeStyle="#999",e.stroke()}for(var s=r;s>=n;s-=4)s!==r?(r=s+(a-t),e.beginPath(),e.moveTo(t,s),e.lineTo(a,r),e.lineWidth=.7,e.strokeStyle="#999",e.stroke()):r=s+(a-t);for(var u=r-4;u>=n;u-=4)e.beginPath(),e.moveTo(a,u),e.lineTo(a-(u-n),n),e.lineWidth=.7,e.strokeStyle="#999",e.stroke()}else{for(var d,f=i;f>=n;f-=4){var m={x:t,y:f},h={x:d=t+(i-f),y:i};e.beginPath(),e.moveTo(m.x,m.y),e.lineTo(h.x,h.y),e.lineWidth=.7,e.strokeStyle="#999",e.stroke()}for(var v=d;v<=a;v+=4)v!==d?(d=v-(i-n),e.beginPath(),e.moveTo(v,i),e.lineTo(d,n),e.lineWidth=.7,e.strokeStyle="#999",e.stroke()):d-=i-n;for(var p=d+4;p<=a;p+=4)e.beginPath(),e.moveTo(p,n),e.lineTo(a,n+(a-p)),e.lineWidth=.7,e.strokeStyle="#999",e.stroke()}},k=function(e,t,n,a){return a-t>=n-e};t.default=d}.call(this,n(89))},220:function(e,t,n){"use strict";n.r(t),function(e){n.d(t,"graphql",function(){return h}),n.d(t,"StaticQueryContext",function(){return f}),n.d(t,"StaticQuery",function(){return m});n(88);var a=n(0),i=n.n(a),r=n(4),o=n.n(r),l=n(219),c=n.n(l);n.d(t,"Link",function(){return c.a}),n.d(t,"withPrefix",function(){return l.withPrefix}),n.d(t,"navigate",function(){return l.navigate}),n.d(t,"push",function(){return l.push}),n.d(t,"replace",function(){return l.replace}),n.d(t,"navigateTo",function(){return l.navigateTo});var s=n(221),u=n.n(s);n.d(t,"PageRenderer",function(){return u.a});var d=n(40);n.d(t,"parsePath",function(){return d.a});var f=i.a.createContext({}),m=function(t){return e.createElement(f.Consumer,null,function(n){return t.data||n[t.query]&&n[t.query].data?(t.render||t.children)(t.data?t.data.data:n[t.query].data):e.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}m.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}}.call(this,n(89))},221:function(e,t,n){var a;e.exports=(a=n(224))&&a.default||a},222:function(e,t,n){"use strict";var a=n(88),i=n(223),r=(n(0),n(220)),o=n(225),l=n(226);n(229),n(227);t.a=function(e){var t=e.children;return Object(a.c)(r.StaticQuery,{query:"3892401927",render:function(e){return Object(a.c)("div",{css:c},Object(a.c)(o.a,{title:e.site.siteMetadata.title}),Object(a.c)("main",{css:s},t),Object(a.c)(l.a,null))},data:i})};var c={name:"3cfldf",styles:"display:flex;min-height:100vh;flex-direction:column;margin:0 auto;"},s={name:"bw40gk",styles:"flex:1;margin:0 auto;padding:0 1em;width:100%;max-width:960px;"}},223:function(e){e.exports={data:{site:{siteMetadata:{title:"dhk.party"}}}}},224:function(e,t,n){"use strict";n.r(t);n(55);var a=n(0),i=n.n(a),r=n(4),o=n.n(r),l=n(56),c=n(2),s=function(e){var t=e.location,n=c.default.getResourcesForPathnameSync(t.pathname);return i.a.createElement(l.a,Object.assign({location:t,pageResources:n},n.json))};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=s},225:function(e,t,n){"use strict";(function(e){n(88),n(0);var a=n(220),i=n(54);t.a=function(t){var n=t.title,i=t.children;return e.createElement("header",{className:r},e.createElement("h1",{className:o},e.createElement(a.Link,{className:l,to:"/"},n)),i)};var r=Object(i.css)({position:"relative",zIndex:9,margin:"1em auto",padding:"0 1em",width:"100%",maxWidth:"960px"}),o=Object(i.css)({fontFamily:"Georgia",fontWeight:400,fontStyle:"italic",fontSize:"27px"}),l=Object(i.css)({display:"block",margin:"0.8em 0 1.424em 0",color:"black",textDecoration:"none"})}).call(this,n(89))},226:function(e,t,n){"use strict";(function(e){n(88),n(0);var a=n(54);t.a=function(){return e.createElement("footer",{className:i},e.createElement("p",null,e.createElement("small",null,e.createElement("a",{className:r,href:"mailto:kimdhoe1@gmail.com"},"kimdhoe1@gmail.com"))))};var i=Object(a.css)({marginTop:"4em",textAlign:"center"}),r=Object(a.css)({letterSpacing:"0.7px",fontFamily:"Georgia",fontStyle:"italic",textDecoration:"none",color:"#777"})}).call(this,n(89))},227:function(e,t,n){}}]);
//# sourceMappingURL=component---src-pages-sol-lewitt-wall-drawing-85-js-64247156cfae073aeb41.js.map