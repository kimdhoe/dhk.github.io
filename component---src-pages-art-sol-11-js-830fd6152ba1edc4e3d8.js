(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{182:function(e,t,n){"use strict";n.r(t),function(e){n(85);var r=n(7),a=n.n(r),i=n(0),o=n.n(i),c=n(51),l=n(203),s=n(192),u=function(e){for(var t=e.x0,n=e.y0,r=e.x1,a=e.y1,i=e.vertical,o=[],c=0;c<25;c++){var s=c/25,u=(25-c)/25,p=(c+1)/25,f=(25-c-1)/25;i?o.push([{x:Object(l.lerp)(t,r,(c+1)/25),y:n},{x:Object(l.lerp)(t,r,(c+1)/25),y:a}]):o.push([{x:t,y:Object(l.lerp)(n,a,(c+1)/25)},{x:r,y:Object(l.lerp)(n,a,(c+1)/25)}]),o.push([{x:Object(l.lerp)(t,r,s),y:n},{x:r,y:Object(l.lerp)(n,a,u)}]),o.push([{x:t,y:Object(l.lerp)(n,a,p)},{x:Object(l.lerp)(t,r,f),y:a}]),o.push([{x:Object(l.lerp)(t,r,p),y:n},{x:t,y:Object(l.lerp)(n,a,p)}]),o.push([{x:r,y:Object(l.lerp)(n,a,p)},{x:Object(l.lerp)(t,r,p),y:a}])}return o},p=function(t){function n(){for(var e,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))||this).canvas=o.a.createRef(),e}a()(n,t);var r=n.prototype;return r.componentDidMount=function(){var e=this.canvas.current.getContext("2d");e.fillStyle="white",e.fillRect(0,0,512,512),e.beginPath(),e.moveTo(0,0),e.lineTo(512,0),e.lineTo(512,256),e.moveTo(0,0),e.lineTo(0,256),e.lineTo(256,256),e.lineTo(256,512),e.lineTo(512,512),e.moveTo(0,256),e.lineTo(0,512),e.lineWidth=.7,e.strokeStyle="#aaa",e.stroke();var t=[];t.push.apply(t,u({x0:0,y0:0,x1:256,y1:256,vertical:!0})),t.push.apply(t,u({x0:256,y0:0,x1:512,y1:256})),t.push.apply(t,u({x0:0,y0:256,x1:256,y1:512})),t.push.apply(t,u({x0:256,y0:256,x1:512,y1:512,vertical:!0})),t.forEach(function(t){var n=t[0],r=t[1];e.beginPath(),e.moveTo(n.x,n.y),e.lineTo(r.x,r.y),e.stroke()})},r.render=function(){return e.createElement(s.a,null,e.createElement("div",null,e.createElement("h2",{style:{textAlign:"center"}},"[Sol LeWitt] Wall Drawing #11 (1969)"),e.createElement("div",{className:f.art},e.createElement("canvas",{ref:this.canvas,width:512,height:512})),e.createElement("div",{className:f.labelWrapper},e.createElement("div",{className:f.label},e.createElement("p",{className:f.artist},"SOL LEWITT"),e.createElement("p",{className:f.artwork},e.createElement("span",{className:f.italic},"Wall drawing"),", dhk.party"),e.createElement("p",{className:f.medium},"Digital (HTML5 Canvas)"))),e.createElement("p",{className:f.paragraph},"이 작품에 대한 솔 르윗의 지시사항은 다음과 같다."),e.createElement("p",{className:f.instruction},e.createElement("blockquote",{className:f.instructionContent},"A wall divided horizontally and vertically into four equal parts.",e.createElement("br",null),"Within each part, three of the four kinds of lines are superimposed.",e.createElement("br",null),e.createElement("br",null),"가로/세로로 똑같이 사등분된 벽.",e.createElement("br",null),"각 영역 안에 네 종류 중 세 개의 선들이 중첩되어 그려진다.",e.createElement("br",null))),e.createElement("p",null,"모든 영역에 동일하게 수직으로 교차하는 대각선 직선을 그리고, 각 면이 인접한 면들과 구분되도록 수직 혹은 수평선을 그렸다.")))},n}(o.a.Component),f={art:Object(c.css)({margin:"40px 0",textAlign:"center"}),labelWrapper:Object(c.css)({display:"flex",justifyContent:"center"}),label:Object(c.css)({marginBottom:"30px"}),artist:Object(c.css)({margin:0,padding:0,fontWeight:"bold",textDecoration:"underline"}),artwork:Object(c.css)({margin:0,padding:0}),medium:Object(c.css)({margin:0,padding:0}),italic:Object(c.css)({fontStyle:"italic"}),paragraph:Object(c.css)({}),instruction:Object(c.css)({}),instructionContent:Object(c.css)({paddingLeft:"20px",borderLeft:"solid 7px #f1f3f5",fontFamily:"monospace",fontSize:"1.1em"}),code:Object(c.css)({})};t.default=p}.call(this,n(84))},189:function(e,t,n){"use strict";var r=n(38);t.__esModule=!0,t.withPrefix=d,t.navigateTo=t.replace=t.push=t.navigate=t.default=void 0;var a=r(n(200)),i=r(n(56)),o=r(n(7)),c=r(n(54)),l=r(n(55)),s=r(n(4)),u=r(n(0)),p=n(13),f=n(190);function d(e){return function(e){return e.replace(/\/+/g,"/")}("/"+e)}var m={activeClassName:s.default.string,activeStyle:s.default.object},h=function(e){function t(t){var n;n=e.call(this)||this,(0,l.default)((0,c.default)((0,c.default)(n)),"defaultGetProps",function(e){return e.isCurrent?{className:[n.props.className,n.props.activeClassName].filter(Boolean).join(" "),style:(0,i.default)({},n.props.style,n.props.activeStyle)}:null});var r=!1;return"undefined"!=typeof window&&window.IntersectionObserver&&(r=!0),n.state={IOSupported:r},n.handleRef=n.handleRef.bind((0,c.default)((0,c.default)(n))),n}(0,o.default)(t,e);var n=t.prototype;return n.componentDidUpdate=function(e,t){this.props.to===e.to||this.state.IOSupported||___loader.enqueue((0,f.parsePath)(this.props.to).pathname)},n.componentDidMount=function(){this.state.IOSupported||___loader.enqueue((0,f.parsePath)(this.props.to).pathname)},n.handleRef=function(e){var t,n,r,a=this;this.props.innerRef&&this.props.innerRef(e),this.state.IOSupported&&e&&(t=e,n=function(){___loader.enqueue((0,f.parsePath)(a.props.to).pathname)},(r=new window.IntersectionObserver(function(e){e.forEach(function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(r.unobserve(t),r.disconnect(),n())})})).observe(t))},n.render=function(){var e=this,t=this.props,n=t.to,r=t.getProps,o=void 0===r?this.defaultGetProps:r,c=t.onClick,l=t.onMouseEnter,s=(t.activeClassName,t.activeStyle,t.ref,t.innerRef,t.state),m=t.replace,h=(0,a.default)(t,["to","getProps","onClick","onMouseEnter","activeClassName","activeStyle","ref","innerRef","state","replace"]),y=d(n);return u.default.createElement(p.Link,(0,i.default)({to:y,state:s,getProps:o,innerRef:this.handleRef,onMouseEnter:function(e){l&&l(e),___loader.hovering((0,f.parsePath)(n).pathname)},onClick:function(t){return c&&c(t),0!==t.button||e.props.target||t.defaultPrevented||t.metaKey||t.altKey||t.ctrlKey||t.shiftKey||(t.preventDefault(),v(n,{state:s,replace:m})),!0}},h))},t}(u.default.Component);h.propTypes=(0,i.default)({},m,{innerRef:s.default.func,onClick:s.default.func,to:s.default.string.isRequired,replace:s.default.bool});var y=h;t.default=y;var v=function(e,t){window.___navigate(d(e),t)};t.navigate=v;var g=function(e){console.warn('The "push" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___push(d(e))};t.push=g;t.replace=function(e){console.warn('The "replace" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___replace(d(e))};t.navigateTo=function(e){return console.warn('The "navigateTo" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),g(e)}},190:function(e,t,n){"use strict";n.r(t),function(e){n.d(t,"graphql",function(){return m}),n.d(t,"StaticQueryContext",function(){return f}),n.d(t,"StaticQuery",function(){return d});var r=n(0),a=n.n(r),i=n(4),o=n.n(i),c=n(189),l=n.n(c);n.d(t,"Link",function(){return l.a}),n.d(t,"withPrefix",function(){return c.withPrefix}),n.d(t,"navigate",function(){return c.navigate}),n.d(t,"push",function(){return c.push}),n.d(t,"replace",function(){return c.replace}),n.d(t,"navigateTo",function(){return c.navigateTo});var s=n(191),u=n.n(s);n.d(t,"PageRenderer",function(){return u.a});var p=n(37);n.d(t,"parsePath",function(){return p.a});var f=a.a.createContext({}),d=function(t){return e.createElement(f.Consumer,null,function(n){return t.data||n[t.query]&&n[t.query].data?(t.render||t.children)(t.data?t.data.data:n[t.query].data):e.createElement("div",null,"Loading (StaticQuery)")})};function m(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}d.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}}.call(this,n(84))},191:function(e,t,n){var r;e.exports=(r=n(194))&&r.default||r},192:function(e,t,n){"use strict";(function(e){var r=n(193),a=(n(0),n(190)),i=n(51),o=n(195),c=n(196);n(199),n(197);t.a=function(t){var n=t.children;return e.createElement(a.StaticQuery,{query:"3892401927",render:function(t){return e.createElement("div",{className:l},e.createElement(o.a,{title:t.site.siteMetadata.title}),e.createElement("main",{className:s},n),e.createElement(c.a,null))},data:r})};var l=Object(i.css)({display:"flex",minHeight:"100vh",flexDirection:"column",margin:"0 auto"}),s=Object(i.css)({flex:1,margin:"0 auto",padding:"0 1em",maxWidth:"760px"})}).call(this,n(84))},193:function(e){e.exports={data:{site:{siteMetadata:{title:"dhk.party"}}}}},194:function(e,t,n){"use strict";n.r(t);n(52);var r=n(0),a=n.n(r),i=n(4),o=n.n(i),c=n(53),l=n(2),s=function(e){var t=e.location,n=l.default.getResourcesForPathnameSync(t.pathname);return a.a.createElement(c.a,Object.assign({location:t,pageResources:n},n.json))};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=s},195:function(e,t,n){"use strict";(function(e){n(0);var r=n(190),a=n(51);t.a=function(t){var n=t.title,a=t.children;return e.createElement("header",{className:i},e.createElement("h1",{className:o},e.createElement(r.Link,{className:c,to:"/"},n)),a)};var i=Object(a.css)({position:"relative",zIndex:9,margin:"1em auto",padding:"0 1em",width:"100%",maxWidth:"960px"}),o=Object(a.css)({fontFamily:"Georgia",fontWeight:400,fontStyle:"italic",fontSize:"27px"}),c=Object(a.css)({display:"block",margin:"0.8em 0 1.424em 0",color:"black",textDecoration:"none"})}).call(this,n(84))},196:function(e,t,n){"use strict";(function(e){n(0),n(190);var r=n(51);t.a=function(){return e.createElement("footer",{className:a},e.createElement("p",null,e.createElement("small",null,e.createElement("a",{className:i,href:"mailto:kimdhoe1@gmail.com"},"kimdhoe1@gmail.com"))))};var a=Object(r.css)({marginTop:"4em",textAlign:"center"}),i=Object(r.css)({letterSpacing:"0.7px",fontFamily:"Georgia",fontStyle:"italic",textDecoration:"none",color:"#777"})}).call(this,n(84))},197:function(e,t,n){},199:function(e,t,n){},200:function(e,t){e.exports=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}},202:function(e,t){e.exports=function(){for(var e=0;e<arguments.length;e++)if(void 0!==arguments[e])return arguments[e]}},203:function(e,t,n){var r=n(202),a=Number.EPSILON;function i(e,t,n){return t<n?e<t?t:e>n?n:e:e<n?n:e>t?t:e}function o(e,t,n){return e*(1-n)+t*n}function c(e,t,n){return Math.abs(e-t)<a?0:(n-e)/(t-e)}function l(e,t){return t=r(t,0),"number"==typeof e&&isFinite(e)?e:t}function s(e){if("number"!=typeof e)throw new TypeError("Expected dims argument");return function(t,n){var a;n=r(n,0),null==t?a=n:"number"==typeof t&&isFinite(t)&&(a=t);var i,o=[];if(null==a)for(i=0;i<e;i++)o[i]=l(t[i],n);else for(i=0;i<e;i++)o[i]=a;return o}}function u(e,t,n,r){if(r=r||[],e.length!==t.length)throw new TypeError("min and max array are expected to have the same length");for(var a=0;a<e.length;a++)r[a]=o(e[a],t[a],n);return r}function p(e,t){if("number"!=typeof(e=r(e,0)))throw new TypeError("Expected n argument to be a number");for(var n=[],a=0;a<e;a++)n.push(t);return n}function f(e,t){return(e%t+t)%t}function d(e,t,n,r){return o(e,t,1-Math.exp(-n*r))}e.exports={mod:f,fract:function(e){return e-Math.floor(e)},sign:function(e){return e>0?1:e<0?-1:0},degToRad:function(e){return e*Math.PI/180},radToDeg:function(e){return 180*e/Math.PI},wrap:function(e,t,n){if("number"!=typeof t||"number"!=typeof n)throw new TypeError('Must specify "to" and "from" arguments as numbers');if(t>n){var r=t;t=n,n=r}var a=n-t;return 0===a?n:e-a*Math.floor((e-t)/a)},pingPong:function(e,t){return e=f(e,2*t),t-Math.abs(e-t)},linspace:function(e,t){if("number"!=typeof(e=r(e,0)))throw new TypeError("Expected n argument to be a number");"boolean"==typeof(t=t||{})&&(t={endpoint:!0});var n=r(t.offset,0);return t.endpoint?p(e).map(function(t,r){return e<=1?0:(r+n)/(e-1)}):p(e).map(function(t,r){return(r+n)/e})},lerp:o,lerpArray:u,inverseLerp:c,lerpFrames:function(e,t,n){t=i(t,0,1);var r=e.length-1,a=t*r,c=Math.floor(a),l=a-c,s=Math.min(c+1,r),p=e[c%e.length],f=e[s%e.length];if("number"==typeof p&&"number"==typeof f)return o(p,f,l);if(Array.isArray(p)&&Array.isArray(f))return u(p,f,l,n);throw new TypeError("Mismatch in value type of two array elements: "+c+" and "+s)},clamp:i,clamp01:function(e){return i(e,0,1)},smoothstep:function(e,t,n){var r=i(c(e,t,n),0,1);return r*r*(3-2*r)},damp:d,dampArray:function(e,t,n,r,a){a=a||[];for(var i=0;i<e.length;i++)a[i]=d(e[i],t[i],n,r);return a},mapRange:function(e,t,n,r,i,o){if(Math.abs(t-n)<a)return r;var c=(e-t)/(n-t)*(i-r)+r;return o&&(i<r?c<i?c=i:c>r&&(c=r):c>i?c=i:c<r&&(c=r)),c},expand2D:s(2),expand3D:s(3),expand4D:s(4)}}}]);
//# sourceMappingURL=component---src-pages-art-sol-11-js-830fd6152ba1edc4e3d8.js.map