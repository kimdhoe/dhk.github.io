(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{184:function(e,t,a){"use strict";a.r(t),function(e){a.d(t,"query",function(){return y});a(57),a(0);var n,r=a(187),i=a(51),o=a(189);t.default=function(t){var a=t.data;return e.createElement(o.a,null,e.createElement(m,{slug:"/art/sol-16",title:"[Sol LeWitt] Wall Drawing #16 (1969)",date:"3 January, 2019",excerpt:"Wall drawing #16 by Sol LeWitt implemented via HTML5 Canvas"}),e.createElement(m,{slug:"/art/sol-11",title:"[Sol LeWitt] Wall Drawing #11 (1969)",date:"2 January, 2019",excerpt:"Wall drawing #11 by Sol LeWitt implemented via HTML5 Canvas"}),e.createElement(m,{slug:"/art/sol-118",title:"[Sol LeWitt] Wall Drawing #118 (1971)",date:"1 January, 2019",excerpt:"Wall drawing #118 by Sol LeWitt implemented via HTML5 Canvas"}),e.createElement(m,{slug:"/art/code-art",title:"Generative art",date:"31 December, 2018",excerpt:"솔 르윗(Sol LeWitt) 스타일의 지시사항으로 이미지 만들기"}),a.allMarkdownRemark.edges.map(function(t){var a=t.node;return e.createElement(m,{key:a.id,slug:a.fields.slug,title:a.frontmatter.title,date:a.frontmatter.date,excerpt:a.frontmatter.excerpt})}))};Object(i.css)({margin:"0 0 0.3em 0.2em",padding:0,listStyleType:"none"}),Object(i.css)({display:"inline-block",marginRight:"0.8em",fontFamily:"Georgia",fontStyle:"italic",fontSize:"0.8em",color:"#777"});var l=Object(i.css)({margin:0,fontFamily:"Georgia",fontStyle:"italic",fontSize:"0.8em",color:"#777"}),s=function(t){var a=t.date;return e.createElement("p",{className:l},a)},c=Object(i.css)({position:"relative",marginBottom:"0.3em"}),u=Object(i.css)({margin:"0"}),d=function(t){var a=t.title;return e.createElement("div",{className:c},e.createElement("h2",{className:u},a))},p=Object(i.css)({margin:0,marginBottom:"0.3em"}),f=function(t){var a=t.text;return e.createElement("p",{className:p},a)},m=function(t){var a=t.title,n=t.date,i=t.excerpt,o=t.slug;return e.createElement("div",{className:h},e.createElement(r.Link,{className:g,to:o},e.createElement(d,{title:a}),e.createElement(f,{text:i}),e.createElement(s,{date:n})))},v=Object(i.css)({position:"absolute",top:"-40px",left:"-40px",width:"150px",height:"150px",borderRadius:"50%",backgroundColor:"transparent",opacity:0,transform:"translateY(10px)",transition:"all 0.2s ease"}),h=Object(i.css)(((n={position:"relative",paddingBottom:"2em"})[":hover ."+v]={backgroundColor:"tomato",opacity:.4,transform:"translateY(0)"},n)),g=Object(i.css)({position:"relative",zIndex:9,textDecoration:"none",color:"#444"}),y="2279054539"}.call(this,a(84))},186:function(e,t,a){"use strict";var n=a(38);t.__esModule=!0,t.withPrefix=f,t.navigateTo=t.replace=t.push=t.navigate=t.default=void 0;var r=n(a(197)),i=n(a(56)),o=n(a(7)),l=n(a(54)),s=n(a(55)),c=n(a(4)),u=n(a(0)),d=a(13),p=a(187);function f(e){return function(e){return e.replace(/\/+/g,"/")}("/"+e)}var m={activeClassName:c.default.string,activeStyle:c.default.object},v=function(e){function t(t){var a;a=e.call(this)||this,(0,s.default)((0,l.default)((0,l.default)(a)),"defaultGetProps",function(e){return e.isCurrent?{className:[a.props.className,a.props.activeClassName].filter(Boolean).join(" "),style:(0,i.default)({},a.props.style,a.props.activeStyle)}:null});var n=!1;return"undefined"!=typeof window&&window.IntersectionObserver&&(n=!0),a.state={IOSupported:n},a.handleRef=a.handleRef.bind((0,l.default)((0,l.default)(a))),a}(0,o.default)(t,e);var a=t.prototype;return a.componentDidUpdate=function(e,t){this.props.to===e.to||this.state.IOSupported||___loader.enqueue((0,p.parsePath)(this.props.to).pathname)},a.componentDidMount=function(){this.state.IOSupported||___loader.enqueue((0,p.parsePath)(this.props.to).pathname)},a.handleRef=function(e){var t,a,n,r=this;this.props.innerRef&&this.props.innerRef(e),this.state.IOSupported&&e&&(t=e,a=function(){___loader.enqueue((0,p.parsePath)(r.props.to).pathname)},(n=new window.IntersectionObserver(function(e){e.forEach(function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(n.unobserve(t),n.disconnect(),a())})})).observe(t))},a.render=function(){var e=this,t=this.props,a=t.to,n=t.getProps,o=void 0===n?this.defaultGetProps:n,l=t.onClick,s=t.onMouseEnter,c=(t.activeClassName,t.activeStyle,t.ref,t.innerRef,t.state),m=t.replace,v=(0,r.default)(t,["to","getProps","onClick","onMouseEnter","activeClassName","activeStyle","ref","innerRef","state","replace"]),h=f(a);return u.default.createElement(d.Link,(0,i.default)({to:h,state:c,getProps:o,innerRef:this.handleRef,onMouseEnter:function(e){s&&s(e),___loader.hovering((0,p.parsePath)(a).pathname)},onClick:function(t){return l&&l(t),0!==t.button||e.props.target||t.defaultPrevented||t.metaKey||t.altKey||t.ctrlKey||t.shiftKey||(t.preventDefault(),g(a,{state:c,replace:m})),!0}},v))},t}(u.default.Component);v.propTypes=(0,i.default)({},m,{innerRef:c.default.func,onClick:c.default.func,to:c.default.string.isRequired,replace:c.default.bool});var h=v;t.default=h;var g=function(e,t){window.___navigate(f(e),t)};t.navigate=g;var y=function(e){console.warn('The "push" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___push(f(e))};t.push=y;t.replace=function(e){console.warn('The "replace" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___replace(f(e))};t.navigateTo=function(e){return console.warn('The "navigateTo" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),y(e)}},187:function(e,t,a){"use strict";a.r(t),function(e){a.d(t,"graphql",function(){return m}),a.d(t,"StaticQueryContext",function(){return p}),a.d(t,"StaticQuery",function(){return f});var n=a(0),r=a.n(n),i=a(4),o=a.n(i),l=a(186),s=a.n(l);a.d(t,"Link",function(){return s.a}),a.d(t,"withPrefix",function(){return l.withPrefix}),a.d(t,"navigate",function(){return l.navigate}),a.d(t,"push",function(){return l.push}),a.d(t,"replace",function(){return l.replace}),a.d(t,"navigateTo",function(){return l.navigateTo});var c=a(188),u=a.n(c);a.d(t,"PageRenderer",function(){return u.a});var d=a(37);a.d(t,"parsePath",function(){return d.a});var p=r.a.createContext({}),f=function(t){return e.createElement(p.Consumer,null,function(a){return t.data||a[t.query]&&a[t.query].data?(t.render||t.children)(t.data?t.data.data:a[t.query].data):e.createElement("div",null,"Loading (StaticQuery)")})};function m(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}}.call(this,a(84))},188:function(e,t,a){var n;e.exports=(n=a(191))&&n.default||n},189:function(e,t,a){"use strict";(function(e){var n=a(190),r=(a(0),a(187)),i=a(51),o=a(192),l=a(193);a(196),a(194);t.a=function(t){var a=t.children;return e.createElement(r.StaticQuery,{query:"3892401927",render:function(t){return e.createElement("div",{className:s},e.createElement(o.a,{title:t.site.siteMetadata.title}),e.createElement("main",{className:c},a),e.createElement(l.a,null))},data:n})};var s=Object(i.css)({display:"flex",minHeight:"100vh",flexDirection:"column",margin:"0 auto"}),c=Object(i.css)({flex:1,margin:"0 auto",padding:"0 1em",maxWidth:"760px"})}).call(this,a(84))},190:function(e){e.exports={data:{site:{siteMetadata:{title:"dhk.party"}}}}},191:function(e,t,a){"use strict";a.r(t);a(52);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),l=a(53),s=a(2),c=function(e){var t=e.location,a=s.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json))};c.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=c},192:function(e,t,a){"use strict";(function(e){a(0);var n=a(187),r=a(51);t.a=function(t){var a=t.title,r=t.children;return e.createElement("header",{className:i},e.createElement("h1",{className:o},e.createElement(n.Link,{className:l,to:"/"},a)),r)};var i=Object(r.css)({position:"relative",zIndex:9,margin:"1em auto",padding:"0 1em",width:"100%",maxWidth:"960px"}),o=Object(r.css)({fontFamily:"Georgia",fontWeight:400,fontStyle:"italic",fontSize:"27px"}),l=Object(r.css)({display:"block",margin:"0.8em 0 1.424em 0",color:"black",textDecoration:"none"})}).call(this,a(84))},193:function(e,t,a){"use strict";(function(e){a(0),a(187);var n=a(51);t.a=function(){return e.createElement("footer",{className:r},e.createElement("p",null,e.createElement("small",null,e.createElement("a",{className:i,href:"mailto:kimdhoe1@gmail.com"},"kimdhoe1@gmail.com"))))};var r=Object(n.css)({marginTop:"4em",textAlign:"center"}),i=Object(n.css)({letterSpacing:"0.7px",fontFamily:"Georgia",fontStyle:"italic",textDecoration:"none",color:"#777"})}).call(this,a(84))},194:function(e,t,a){},196:function(e,t,a){},197:function(e,t){e.exports=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}}}]);
//# sourceMappingURL=component---src-pages-index-js-33f6129c11a2bc0356c9.js.map