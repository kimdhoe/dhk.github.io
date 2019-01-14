(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{185:function(e,t,n){"use strict";n.r(t),function(e){n(232),n(91),n(90);var r=n(7),a=n.n(r),i=(n(234),n(235),n(88),n(0)),o=n.n(i),l=n(228),c=n.n(l),u=n(230),s=n(236),f=n(218),h=function(t){function n(){for(var e,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))||this).canvas=o.a.createRef(),e}a()(n,t);var r=n.prototype;return r.componentDidMount=function(){var e=this.canvas.current.getContext("2d"),t=c.a.rangeFloor(1,6),n=c.a.shuffle(c.a.pick(s)).slice(0,t),r=function(e,t,n,r){var a=[],i=e.concat(),o=function(){var e=i[0].y,o=(i=c.a.shuffle(i)).shift(),l=i.shift();if(o.y===l.y)return i.every(function(t){return t.y===e})?"break":"continue";var u=t-n,s={color:c.a.pick(r),path:[{x:o.x,y:u},o,l,{x:l.x,y:u}],averageY:(o.y+l.y)/2};a.push(s)};e:for(;i.length>=2;)switch(o()){case"break":break e;case"continue":continue}return a.sort(function(e,t){return e.averageY-t.averageY}),a}(function(e){for(var t=e.count,n=e.margin,r=e.width,a=e.height,i=[],o=0;o<t;o++)for(var l=0;l<t;l++){var c=o/(t-1),s=l/(t-1),f=Object(u.lerp)(n,r-n,c),h=Object(u.lerp)(n,a-n,s);i.push({x:f,y:h})}return i}({width:524,height:524,count:6,margin:0}),524,0,n);e.globalAlpha=1,e.fillStyle="white",e.fillRect(0,0,524,524),r.forEach(function(t){var n=t.path,r=t.color;e.beginPath(),n.forEach(function(t){var n=t.x,r=t.y;e.lineTo(n,r)}),e.closePath(),e.globalAlpha=.85,e.fillStyle=r,e.fill(),e.lineWidth=10,e.lineJoin=e.lineCap="round",e.globalAlpha=1,e.strokeStyle="white",e.stroke()})},r.render=function(){return e.createElement(f.a,null,e.createElement("div",null,e.createElement("h2",null,"Generative art"),e.createElement("h3",{style:{fontWeight:400,fontSize:"1.0em",fontStyle:"italic"}},"코드로 솔 르윗(Sol LeWitt) 스타일의 지시사항 해석하기"),e.createElement("canvas",{ref:this.canvas,width:524,height:524}),e.createElement("blockquote",{style:{fontStyle:"italic"}},"저건 나라도 그릴 수 있겠는데..."),e.createElement("p",null,"차마 입 밖으로 내진 않더라도 선과 면으로 이루어진 미니멀한 추상 미술작품들 앞에 서면 한번씩 뇌까려봄직한 말이다. 아래의 이미지는 그런 생각을 개발자로서 실천에 옮겨 본 것이다. 미리 주어진 지시사항을 Canvas API를 이용해 코드로 해석한 결과를 보이려는 것이지 어줍잖게 예술가 행세를 하려는 것은 아니니 오해는 마시라. 재미난 프로젝트 아이디어를 소개하기 위해 남기는 글이니 시도해보시는 분은 공유 바란다."),e.createElement("blockquote",{style:{fontStyle:"italic"}},'An example of a Sol LeWitt inspired "Wall Drawing" using a simple generative algorithm. The instructions for this mural:',e.createElement("ul",null,e.createElement("li",null,"Using a 6x6 grid of evenly spaced points"),e.createElement("li",null,"Connect two random points on the grid; forming a trapezoid with two parallel sides extending down"),e.createElement("li",null,"Fill the trapezoid with a colour, then stroke with the background colour"),e.createElement("li",null,"Find another two random points and repeat; continuing until all grid are exhausted"),e.createElement("li",null,"Layer the shapes by the average Y position of their two grid points"))),e.createElement("p",null,"위 지시사항은 Matt DesLauriers가 자신의 워크숍에서 사용한 연습용 예시로, 솔 르윗이라는 미국 현대작가의 스타일을 흉내낸 것이다."),e.createElement("p",null,"솔 르윗은 개념 예술과 미니멀리즘 작품으로 잘 알려진 미국의 작가이다. 이 작가의 특징은 본인이 직접 작품을 완성하는 것이 아니라 전시 장소에서 작품을 만들 수 있도록 지시사항만을 전달한다는 점이다. 예를 들면 이런 식이다."),e.createElement("blockquote",{style:{fontStyle:"italic"}},e.createElement("p",null,"Wall Drawing #391 (1983)"),e.createElement("p",null,"Two-part drawing. The two walls are each divided horizontally and vertically into four equal parts. First wall: 12-inch (30 cm) bands of lines in four directions, one direction in each part, drawn in black India ink. Second wall: Same, but with four colors drawn in India ink and color ink washes."),e.createElement("a",{href:"https://solvingsol.com/solutions"},"Solving Sol")),e.createElement("p",null,"프론트 개발자로서 솔 르윗이라는 작가가 유난히 반가운 것은 우리가 전시 설치 기사가 되어 시각적인 결과물을 만들어내는 연습을 하기에 최상의 자료를 제공하기 때문이다. 혹시 비슷한 생각을 가진 분이 있다면 이미 Solving Sol이라는 프로젝트가 있으니 확인해보시면 되겠다."),e.createElement("p",null,"단순하고 해석의 여지가 충분히 있는 지시들이기 때문에 누가 어떻게 설치하느냐에 따라 다른 작품이 나오는 재미가 있다. 혹시 코드로 해석해보는 동료 개발자가 있다면 결과물을 공유해주시면 감사하겠다.")))},n}(o.a.Component);t.default=h}.call(this,n(89))},216:function(e,t,n){"use strict";n.r(t),function(e){n.d(t,"graphql",function(){return d}),n.d(t,"StaticQueryContext",function(){return h}),n.d(t,"StaticQuery",function(){return p});n(88);var r=n(0),a=n.n(r),i=n(4),o=n.n(i),l=n(215),c=n.n(l);n.d(t,"Link",function(){return c.a}),n.d(t,"withPrefix",function(){return l.withPrefix}),n.d(t,"navigate",function(){return l.navigate}),n.d(t,"push",function(){return l.push}),n.d(t,"replace",function(){return l.replace}),n.d(t,"navigateTo",function(){return l.navigateTo});var u=n(217),s=n.n(u);n.d(t,"PageRenderer",function(){return s.a});var f=n(40);n.d(t,"parsePath",function(){return f.a});var h=a.a.createContext({}),p=function(t){return e.createElement(h.Consumer,null,function(n){return t.data||n[t.query]&&n[t.query].data?(t.render||t.children)(t.data?t.data.data:n[t.query].data):e.createElement("div",null,"Loading (StaticQuery)")})};function d(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}}.call(this,n(89))},217:function(e,t,n){var r;e.exports=(r=n(220))&&r.default||r},218:function(e,t,n){"use strict";var r=n(88),a=n(219),i=(n(0),n(216)),o=n(221),l=n(222);n(225),n(223);t.a=function(e){var t=e.children;return Object(r.c)(i.StaticQuery,{query:"3892401927",render:function(e){return Object(r.c)("div",{css:c},Object(r.c)(o.a,{title:e.site.siteMetadata.title}),Object(r.c)("main",{css:u},t),Object(r.c)(l.a,null))},data:a})};var c={name:"3cfldf",styles:"display:flex;min-height:100vh;flex-direction:column;margin:0 auto;"},u={name:"1715jjh",styles:"flex:1;margin:0 auto;padding:0 1em;width:100%;max-width:760px;"}},219:function(e){e.exports={data:{site:{siteMetadata:{title:"dhk.party"}}}}},220:function(e,t,n){"use strict";n.r(t);n(55);var r=n(0),a=n.n(r),i=n(4),o=n.n(i),l=n(56),c=n(2),u=function(e){var t=e.location,n=c.default.getResourcesForPathnameSync(t.pathname);return a.a.createElement(l.a,Object.assign({location:t,pageResources:n},n.json))};u.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=u},221:function(e,t,n){"use strict";(function(e){n(88),n(0);var r=n(216),a=n(54);t.a=function(t){var n=t.title,a=t.children;return e.createElement("header",{className:i},e.createElement("h1",{className:o},e.createElement(r.Link,{className:l,to:"/"},n)),a)};var i=Object(a.css)({position:"relative",zIndex:9,margin:"1em auto",padding:"0 1em",width:"100%",maxWidth:"960px"}),o=Object(a.css)({fontFamily:"Georgia",fontWeight:400,fontStyle:"italic",fontSize:"27px"}),l=Object(a.css)({display:"block",margin:"0.8em 0 1.424em 0",color:"black",textDecoration:"none"})}).call(this,n(89))},222:function(e,t,n){"use strict";(function(e){n(88),n(0);var r=n(54);t.a=function(){return e.createElement("footer",{className:a},e.createElement("p",null,e.createElement("small",null,e.createElement("a",{className:i,href:"mailto:kimdhoe1@gmail.com"},"kimdhoe1@gmail.com"))))};var a=Object(r.css)({marginTop:"4em",textAlign:"center"}),i=Object(r.css)({letterSpacing:"0.7px",fontFamily:"Georgia",fontStyle:"italic",textDecoration:"none",color:"#777"})}).call(this,n(89))},223:function(e,t,n){},230:function(e,t,n){var r=n(231),a=Number.EPSILON;function i(e,t,n){return t<n?e<t?t:e>n?n:e:e<n?n:e>t?t:e}function o(e,t,n){return e*(1-n)+t*n}function l(e,t,n){return Math.abs(e-t)<a?0:(n-e)/(t-e)}function c(e,t){return t=r(t,0),"number"==typeof e&&isFinite(e)?e:t}function u(e){if("number"!=typeof e)throw new TypeError("Expected dims argument");return function(t,n){var a;n=r(n,0),null==t?a=n:"number"==typeof t&&isFinite(t)&&(a=t);var i,o=[];if(null==a)for(i=0;i<e;i++)o[i]=c(t[i],n);else for(i=0;i<e;i++)o[i]=a;return o}}function s(e,t,n,r){if(r=r||[],e.length!==t.length)throw new TypeError("min and max array are expected to have the same length");for(var a=0;a<e.length;a++)r[a]=o(e[a],t[a],n);return r}function f(e,t){if("number"!=typeof(e=r(e,0)))throw new TypeError("Expected n argument to be a number");for(var n=[],a=0;a<e;a++)n.push(t);return n}function h(e,t){return(e%t+t)%t}function p(e,t,n,r){return o(e,t,1-Math.exp(-n*r))}e.exports={mod:h,fract:function(e){return e-Math.floor(e)},sign:function(e){return e>0?1:e<0?-1:0},degToRad:function(e){return e*Math.PI/180},radToDeg:function(e){return 180*e/Math.PI},wrap:function(e,t,n){if("number"!=typeof t||"number"!=typeof n)throw new TypeError('Must specify "to" and "from" arguments as numbers');if(t>n){var r=t;t=n,n=r}var a=n-t;return 0===a?n:e-a*Math.floor((e-t)/a)},pingPong:function(e,t){return e=h(e,2*t),t-Math.abs(e-t)},linspace:function(e,t){if("number"!=typeof(e=r(e,0)))throw new TypeError("Expected n argument to be a number");"boolean"==typeof(t=t||{})&&(t={endpoint:!0});var n=r(t.offset,0);return t.endpoint?f(e).map(function(t,r){return e<=1?0:(r+n)/(e-1)}):f(e).map(function(t,r){return(r+n)/e})},lerp:o,lerpArray:s,inverseLerp:l,lerpFrames:function(e,t,n){t=i(t,0,1);var r=e.length-1,a=t*r,l=Math.floor(a),c=a-l,u=Math.min(l+1,r),f=e[l%e.length],h=e[u%e.length];if("number"==typeof f&&"number"==typeof h)return o(f,h,c);if(Array.isArray(f)&&Array.isArray(h))return s(f,h,c,n);throw new TypeError("Mismatch in value type of two array elements: "+l+" and "+u)},clamp:i,clamp01:function(e){return i(e,0,1)},smoothstep:function(e,t,n){var r=i(l(e,t,n),0,1);return r*r*(3-2*r)},damp:p,dampArray:function(e,t,n,r,a){a=a||[];for(var i=0;i<e.length;i++)a[i]=p(e[i],t[i],n,r);return a},mapRange:function(e,t,n,r,i,o){if(Math.abs(t-n)<a)return r;var l=(e-t)/(n-t)*(i-r)+r;return o&&(i<r?l<i?l=i:l>r&&(l=r):l>i?l=i:l<r&&(l=r)),l},expand2D:u(2),expand3D:u(3),expand4D:u(4)}},232:function(e,t,n){var r=n(6);r(r.P,"Array",{fill:n(233)}),n(62)("fill")},233:function(e,t,n){"use strict";var r=n(30),a=n(93),i=n(31);e.exports=function(e){for(var t=r(this),n=i(t.length),o=arguments.length,l=a(o>1?arguments[1]:void 0,n),c=o>2?arguments[2]:void 0,u=void 0===c?n:a(c,n);u>l;)t[l++]=e;return t}},234:function(e,t,n){var r=n(6);r(r.S,"Array",{isArray:n(92)})},235:function(e,t,n){"use strict";var r=n(6),a=n(21),i=n(30),o=n(20),l=[].sort,c=[1,2,3];r(r.P+r.F*(o(function(){c.sort(void 0)})||!o(function(){c.sort(null)})||!n(15)(l)),"Array",{sort:function(e){return void 0===e?l.call(i(this)):l.call(i(this),a(e))}})}}]);
//# sourceMappingURL=component---src-pages-art-code-art-js-8cac8530c0193a764015.js.map