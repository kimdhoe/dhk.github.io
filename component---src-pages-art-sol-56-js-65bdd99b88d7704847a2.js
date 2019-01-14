(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{193:function(e,t,a){"use strict";a.r(t),function(e){var n=a(7),r=a.n(n),i=(a(86),a(0)),o=a.n(i),s=a(53),l=a(204),c=function(t){function a(){for(var e,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))||this).canvas=o.a.createRef(),e.state={width:0},e}r()(a,t);var n=a.prototype;return n.componentDidMount=function(){var e=this,t=d,a=f;this.setState({width:600},function(){var n=e.canvas.current.getContext("2d");n.fillStyle="white",n.fillRect(0,0,600,600),t(n,300,300),n.save(),n.translate(300,0),t(n,300,300),n.restore(),n.save(),n.translate(0,300),t(n,300,300),n.restore(),n.save(),n.translate(300,300),t(n,300,300),n.restore(),n.save(),n.translate(600,0),n.rotate(Math.PI/2),t(n,300,300),n.restore(),n.save(),n.translate(300,300),n.rotate(Math.PI/2),t(n,300,300),n.restore(),n.save(),n.translate(600,300),n.rotate(Math.PI/2),t(n,300,300),n.restore(),n.save(),n.translate(0,300),a(n,300),n.restore(),n.save(),n.translate(300,300),a(n,300),n.restore(),n.save(),n.translate(600,300),n.rotate(Math.PI/2),a(n,300),n.restore()})},n.render=function(){var t=this.state.width;return e.createElement(l.a,null,e.createElement("div",null,e.createElement("h2",{style:{textAlign:"center"}},"[Sol LeWitt] Wall Drawing #56 (1970)"),e.createElement("div",{className:u.art},e.createElement("canvas",{ref:this.canvas,width:t,height:t})),e.createElement("div",{className:u.labelWrapper},e.createElement("div",{className:u.label},e.createElement("p",{className:u.artist},"SOL LEWITT"),e.createElement("p",{className:u.artwork},e.createElement("span",{className:u.italic},"Wall drawing"),", dhk.party"),e.createElement("p",{className:u.medium},"Digital (HTML5 Canvas)"))),e.createElement("blockquote",{className:u.instructionContent},"A square is divided horizontally and vertically into four equal parts,",e.createElement("br",null),"each with lines in four directions superimposed progressively.",e.createElement("br",null))))},a}(o.a.Component),u={art:Object(s.css)({margin:"40px 0",textAlign:"center"}),labelWrapper:Object(s.css)({display:"flex",justifyContent:"center"}),label:Object(s.css)({marginBottom:"30px"}),artist:Object(s.css)({margin:0,padding:0,fontWeight:"bold",textDecoration:"underline"}),artwork:Object(s.css)({margin:0,padding:0}),medium:Object(s.css)({margin:0,padding:0}),italic:Object(s.css)({fontStyle:"italic"}),paragraph:Object(s.css)({}),instruction:Object(s.css)({}),instructionContent:Object(s.css)({paddingLeft:"20px",borderLeft:"solid 7px #f1f3f5",fontFamily:"monospace",fontSize:"1.1em"}),code:Object(s.css)({})},d=function(e,t){for(var a=t/40,n=0;n<=t;n+=a){var r={x:0,y:n},i={x:t,y:n};e.beginPath(0),e.moveTo(r.x,r.y),e.lineTo(i.x,i.y),e.strokeStyle="#aaa",e.lineWidth=.7,e.stroke()}},f=function(e,t){for(var a=t/40,n=0;n<=t;n+=a){var r={x:n,y:0},i={x:0,y:n};e.beginPath(),e.moveTo(r.x,r.y),e.lineTo(i.x,i.y),e.strokeStyle="#aaa",e.lineWidth=.7,e.stroke()}for(var o=a;o<=t;o+=a){var s={x:o,y:t},l={x:t,y:o};e.beginPath(),e.moveTo(s.x,s.y),e.lineTo(l.x,l.y),e.strokeStyle="#aaa",e.lineWidth=.7,e.stroke()}};t.default=c}.call(this,a(87))},201:function(e,t,a){"use strict";var n=a(40);t.__esModule=!0,t.withPrefix=p,t.navigateTo=t.replace=t.push=t.navigate=t.default=void 0;var r=n(a(212)),i=n(a(58)),o=n(a(7)),s=n(a(56)),l=n(a(57)),c=n(a(4)),u=n(a(0)),d=a(14),f=a(202);function p(e){return function(e){return e.replace(/\/+/g,"/")}("/"+e)}var m={activeClassName:c.default.string,activeStyle:c.default.object},h=function(e){function t(t){var a;a=e.call(this)||this,(0,l.default)((0,s.default)((0,s.default)(a)),"defaultGetProps",function(e){return e.isCurrent?{className:[a.props.className,a.props.activeClassName].filter(Boolean).join(" "),style:(0,i.default)({},a.props.style,a.props.activeStyle)}:null});var n=!1;return"undefined"!=typeof window&&window.IntersectionObserver&&(n=!0),a.state={IOSupported:n},a.handleRef=a.handleRef.bind((0,s.default)((0,s.default)(a))),a}(0,o.default)(t,e);var a=t.prototype;return a.componentDidUpdate=function(e,t){this.props.to===e.to||this.state.IOSupported||___loader.enqueue((0,f.parsePath)(this.props.to).pathname)},a.componentDidMount=function(){this.state.IOSupported||___loader.enqueue((0,f.parsePath)(this.props.to).pathname)},a.handleRef=function(e){var t,a,n,r=this;this.props.innerRef&&this.props.innerRef(e),this.state.IOSupported&&e&&(t=e,a=function(){___loader.enqueue((0,f.parsePath)(r.props.to).pathname)},(n=new window.IntersectionObserver(function(e){e.forEach(function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(n.unobserve(t),n.disconnect(),a())})})).observe(t))},a.render=function(){var e=this,t=this.props,a=t.to,n=t.getProps,o=void 0===n?this.defaultGetProps:n,s=t.onClick,l=t.onMouseEnter,c=(t.activeClassName,t.activeStyle,t.ref,t.innerRef,t.state),m=t.replace,h=(0,r.default)(t,["to","getProps","onClick","onMouseEnter","activeClassName","activeStyle","ref","innerRef","state","replace"]),v=p(a);return u.default.createElement(d.Link,(0,i.default)({to:v,state:c,getProps:o,innerRef:this.handleRef,onMouseEnter:function(e){l&&l(e),___loader.hovering((0,f.parsePath)(a).pathname)},onClick:function(t){return s&&s(t),0!==t.button||e.props.target||t.defaultPrevented||t.metaKey||t.altKey||t.ctrlKey||t.shiftKey||(t.preventDefault(),g(a,{state:c,replace:m})),!0}},h))},t}(u.default.Component);h.propTypes=(0,i.default)({},m,{innerRef:c.default.func,onClick:c.default.func,to:c.default.string.isRequired,replace:c.default.bool});var v=h;t.default=v;var g=function(e,t){window.___navigate(p(e),t)};t.navigate=g;var y=function(e){console.warn('The "push" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___push(p(e))};t.push=y;t.replace=function(e){console.warn('The "replace" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___replace(p(e))};t.navigateTo=function(e){return console.warn('The "navigateTo" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),y(e)}},202:function(e,t,a){"use strict";a.r(t),function(e){a.d(t,"graphql",function(){return m}),a.d(t,"StaticQueryContext",function(){return f}),a.d(t,"StaticQuery",function(){return p});a(86);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),s=a(201),l=a.n(s);a.d(t,"Link",function(){return l.a}),a.d(t,"withPrefix",function(){return s.withPrefix}),a.d(t,"navigate",function(){return s.navigate}),a.d(t,"push",function(){return s.push}),a.d(t,"replace",function(){return s.replace}),a.d(t,"navigateTo",function(){return s.navigateTo});var c=a(203),u=a.n(c);a.d(t,"PageRenderer",function(){return u.a});var d=a(39);a.d(t,"parsePath",function(){return d.a});var f=r.a.createContext({}),p=function(t){return e.createElement(f.Consumer,null,function(a){return t.data||a[t.query]&&a[t.query].data?(t.render||t.children)(t.data?t.data.data:a[t.query].data):e.createElement("div",null,"Loading (StaticQuery)")})};function m(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}}.call(this,a(87))},203:function(e,t,a){var n;e.exports=(n=a(206))&&n.default||n},204:function(e,t,a){"use strict";var n=a(86),r=a(205),i=(a(0),a(202)),o=a(207),s=a(208);a(211),a(209);t.a=function(e){var t=e.children;return Object(n.b)(i.StaticQuery,{query:"3892401927",render:function(e){return Object(n.b)("div",{css:l},Object(n.b)(o.a,{title:e.site.siteMetadata.title}),Object(n.b)("main",{css:c},t),Object(n.b)(s.a,null))},data:r})};var l={name:"3cfldf",styles:"display:flex;min-height:100vh;flex-direction:column;margin:0 auto;"},c={name:"1715jjh",styles:"flex:1;margin:0 auto;padding:0 1em;width:100%;max-width:760px;"}},205:function(e){e.exports={data:{site:{siteMetadata:{title:"dhk.party"}}}}},206:function(e,t,a){"use strict";a.r(t);a(54);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),s=a(55),l=a(2),c=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(s.a,Object.assign({location:t,pageResources:a},a.json))};c.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=c},207:function(e,t,a){"use strict";(function(e){a(86),a(0);var n=a(202),r=a(53);t.a=function(t){var a=t.title,r=t.children;return e.createElement("header",{className:i},e.createElement("h1",{className:o},e.createElement(n.Link,{className:s,to:"/"},a)),r)};var i=Object(r.css)({position:"relative",zIndex:9,margin:"1em auto",padding:"0 1em",width:"100%",maxWidth:"960px"}),o=Object(r.css)({fontFamily:"Georgia",fontWeight:400,fontStyle:"italic",fontSize:"27px"}),s=Object(r.css)({display:"block",margin:"0.8em 0 1.424em 0",color:"black",textDecoration:"none"})}).call(this,a(87))},208:function(e,t,a){"use strict";(function(e){a(86),a(0);var n=a(53);t.a=function(){return e.createElement("footer",{className:r},e.createElement("p",null,e.createElement("small",null,e.createElement("a",{className:i,href:"mailto:kimdhoe1@gmail.com"},"kimdhoe1@gmail.com"))))};var r=Object(n.css)({marginTop:"4em",textAlign:"center"}),i=Object(n.css)({letterSpacing:"0.7px",fontFamily:"Georgia",fontStyle:"italic",textDecoration:"none",color:"#777"})}).call(this,a(87))},209:function(e,t,a){},211:function(e,t,a){},212:function(e,t){e.exports=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}}}]);
//# sourceMappingURL=component---src-pages-art-sol-56-js-65bdd99b88d7704847a2.js.map