(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{184:function(e,t,n){"use strict";n.r(t),function(e){n.d(t,"query",function(){return r});n(88),n(0);var a=n(215);t.default=function(t){var n=t.data;return e.createElement(a.a,null,e.createElement("h1",null,"About ",n.site.siteMetadata.title),e.createElement("p",null,"We're the only site running on your computer dedicated to showing the best photos and videos of pandas eating lots of food."))};var r="622906627"}.call(this,n(89))},212:function(e,t,n){"use strict";var a=n(41);t.__esModule=!0,t.withPrefix=p,t.navigateTo=t.replace=t.push=t.navigate=t.default=void 0;var r=a(n(223)),i=a(n(59)),o=a(n(7)),s=a(n(57)),c=a(n(58)),u=a(n(4)),l=a(n(0)),d=n(14),f=n(213);function p(e){return function(e){return e.replace(/\/+/g,"/")}("/"+e)}var h={activeClassName:u.default.string,activeStyle:u.default.object},m=function(e){function t(t){var n;n=e.call(this)||this,(0,c.default)((0,s.default)((0,s.default)(n)),"defaultGetProps",function(e){return e.isCurrent?{className:[n.props.className,n.props.activeClassName].filter(Boolean).join(" "),style:(0,i.default)({},n.props.style,n.props.activeStyle)}:null});var a=!1;return"undefined"!=typeof window&&window.IntersectionObserver&&(a=!0),n.state={IOSupported:a},n.handleRef=n.handleRef.bind((0,s.default)((0,s.default)(n))),n}(0,o.default)(t,e);var n=t.prototype;return n.componentDidUpdate=function(e,t){this.props.to===e.to||this.state.IOSupported||___loader.enqueue((0,f.parsePath)(this.props.to).pathname)},n.componentDidMount=function(){this.state.IOSupported||___loader.enqueue((0,f.parsePath)(this.props.to).pathname)},n.handleRef=function(e){var t,n,a,r=this;this.props.innerRef&&this.props.innerRef(e),this.state.IOSupported&&e&&(t=e,n=function(){___loader.enqueue((0,f.parsePath)(r.props.to).pathname)},(a=new window.IntersectionObserver(function(e){e.forEach(function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(a.unobserve(t),a.disconnect(),n())})})).observe(t))},n.render=function(){var e=this,t=this.props,n=t.to,a=t.getProps,o=void 0===a?this.defaultGetProps:a,s=t.onClick,c=t.onMouseEnter,u=(t.activeClassName,t.activeStyle,t.ref,t.innerRef,t.state),h=t.replace,m=(0,r.default)(t,["to","getProps","onClick","onMouseEnter","activeClassName","activeStyle","ref","innerRef","state","replace"]),v=p(n);return l.default.createElement(d.Link,(0,i.default)({to:v,state:u,getProps:o,innerRef:this.handleRef,onMouseEnter:function(e){c&&c(e),___loader.hovering((0,f.parsePath)(n).pathname)},onClick:function(t){return s&&s(t),0!==t.button||e.props.target||t.defaultPrevented||t.metaKey||t.altKey||t.ctrlKey||t.shiftKey||(t.preventDefault(),g(n,{state:u,replace:h})),!0}},m))},t}(l.default.Component);m.propTypes=(0,i.default)({},h,{innerRef:u.default.func,onClick:u.default.func,to:u.default.string.isRequired,replace:u.default.bool});var v=m;t.default=v;var g=function(e,t){window.___navigate(p(e),t)};t.navigate=g;var y=function(e){console.warn('The "push" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___push(p(e))};t.push=y;t.replace=function(e){console.warn('The "replace" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___replace(p(e))};t.navigateTo=function(e){return console.warn('The "navigateTo" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),y(e)}},213:function(e,t,n){"use strict";n.r(t),function(e){n.d(t,"graphql",function(){return h}),n.d(t,"StaticQueryContext",function(){return f}),n.d(t,"StaticQuery",function(){return p});n(88);var a=n(0),r=n.n(a),i=n(4),o=n.n(i),s=n(212),c=n.n(s);n.d(t,"Link",function(){return c.a}),n.d(t,"withPrefix",function(){return s.withPrefix}),n.d(t,"navigate",function(){return s.navigate}),n.d(t,"push",function(){return s.push}),n.d(t,"replace",function(){return s.replace}),n.d(t,"navigateTo",function(){return s.navigateTo});var u=n(214),l=n.n(u);n.d(t,"PageRenderer",function(){return l.a});var d=n(40);n.d(t,"parsePath",function(){return d.a});var f=r.a.createContext({}),p=function(t){return e.createElement(f.Consumer,null,function(n){return t.data||n[t.query]&&n[t.query].data?(t.render||t.children)(t.data?t.data.data:n[t.query].data):e.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}}.call(this,n(89))},214:function(e,t,n){var a;e.exports=(a=n(217))&&a.default||a},215:function(e,t,n){"use strict";var a=n(88),r=n(216),i=(n(0),n(213)),o=n(218),s=n(219);n(222),n(220);t.a=function(e){var t=e.children;return Object(a.c)(i.StaticQuery,{query:"3892401927",render:function(e){return Object(a.c)("div",{css:c},Object(a.c)(o.a,{title:e.site.siteMetadata.title}),Object(a.c)("main",{css:u},t),Object(a.c)(s.a,null))},data:r})};var c={name:"3cfldf",styles:"display:flex;min-height:100vh;flex-direction:column;margin:0 auto;"},u={name:"1715jjh",styles:"flex:1;margin:0 auto;padding:0 1em;width:100%;max-width:760px;"}},216:function(e){e.exports={data:{site:{siteMetadata:{title:"dhk.party"}}}}},217:function(e,t,n){"use strict";n.r(t);n(55);var a=n(0),r=n.n(a),i=n(4),o=n.n(i),s=n(56),c=n(2),u=function(e){var t=e.location,n=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(s.a,Object.assign({location:t,pageResources:n},n.json))};u.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=u},218:function(e,t,n){"use strict";(function(e){n(88),n(0);var a=n(213),r=n(54);t.a=function(t){var n=t.title,r=t.children;return e.createElement("header",{className:i},e.createElement("h1",{className:o},e.createElement(a.Link,{className:s,to:"/"},n)),r)};var i=Object(r.css)({position:"relative",zIndex:9,margin:"1em auto",padding:"0 1em",width:"100%",maxWidth:"960px"}),o=Object(r.css)({fontFamily:"Georgia",fontWeight:400,fontStyle:"italic",fontSize:"27px"}),s=Object(r.css)({display:"block",margin:"0.8em 0 1.424em 0",color:"black",textDecoration:"none"})}).call(this,n(89))},219:function(e,t,n){"use strict";(function(e){n(88),n(0);var a=n(54);t.a=function(){return e.createElement("footer",{className:r},e.createElement("p",null,e.createElement("small",null,e.createElement("a",{className:i,href:"mailto:kimdhoe1@gmail.com"},"kimdhoe1@gmail.com"))))};var r=Object(a.css)({marginTop:"4em",textAlign:"center"}),i=Object(a.css)({letterSpacing:"0.7px",fontFamily:"Georgia",fontStyle:"italic",textDecoration:"none",color:"#777"})}).call(this,n(89))},220:function(e,t,n){},222:function(e,t,n){},223:function(e,t){e.exports=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}}}]);
//# sourceMappingURL=component---src-pages-about-js-8a225da8d9580afa6739.js.map