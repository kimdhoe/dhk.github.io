(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{191:function(e,a,c){"use strict";c.r(a),function(e){c(91),c(90);var f=c(7),t=c.n(f),n=(c(88),c(0)),d=c.n(n),b=c(54),r=c(229),i=c.n(r),l=c(230),o=c(219),s=function(a){function c(){for(var e,c=arguments.length,f=new Array(c),t=0;t<c;t++)f[t]=arguments[t];return(e=a.call.apply(a,[this].concat(f))||this).canvas=d.a.createRef(),e.palette=i.a.pick(l),e.state={width:i.a.rangeFloor(400,500),height:i.a.rangeFloor(300,500)},e}t()(c,a);var f=c.prototype;return f.componentDidMount=function(){var e=this,a=this.state,c=a.width,f=a.height,t=this.canvas.current.getContext("2d");(function(e,a){for(var c=[],f=0;f<=e;f+=5){var t={x:f,y:0},n={x:f,y:a};c.push([t,n])}return c})(c,f).forEach(function(a){var c=a[0],f=a[1];t.beginPath(),t.moveTo(c.x,c.y),t.lineTo(f.x,f.y),t.strokeStyle=i.a.pick(e.palette),t.lineWidth=.7,t.stroke()})},f.render=function(){var a=this.state,c=a.width,f=a.height;return e.createElement(o.a,null,e.createElement("div",null,e.createElement("h2",{style:{textAlign:"center"}},"[Sol LeWitt] Wall Drawing #45 (1970)"),e.createElement("div",{className:u.art},e.createElement("canvas",{ref:this.canvas,width:c,height:f})),e.createElement("div",{className:u.labelWrapper},e.createElement("div",{className:u.label},e.createElement("p",{className:u.artist},"SOL LEWITT"),e.createElement("p",{className:u.artwork},e.createElement("span",{className:u.italic},"Wall drawing"),", dhk.party"),e.createElement("p",{className:u.medium},"Digital (HTML5 Canvas)"))),e.createElement("p",{className:u.paragraph},"이 작품에 대한 솔 르윗의 지시사항은 다음과 같다."),e.createElement("blockquote",{className:u.instructionContent},'Straight lines 10" (25 cm) long, not touching, covering the wall evenly.',e.createElement("br",null),e.createElement("br",null),"벽면을 고르게 덮는 서로 만나지 않는 25cm 길이의 직선들.",e.createElement("br",null))))},c}(d.a.Component),u={art:Object(b.css)({margin:"40px 0",textAlign:"center"}),labelWrapper:Object(b.css)({display:"flex",justifyContent:"center"}),label:Object(b.css)({marginBottom:"30px"}),artist:Object(b.css)({margin:0,padding:0,fontWeight:"bold",textDecoration:"underline"}),artwork:Object(b.css)({margin:0,padding:0}),medium:Object(b.css)({margin:0,padding:0}),italic:Object(b.css)({fontStyle:"italic"}),paragraph:Object(b.css)({}),instruction:Object(b.css)({}),instructionContent:Object(b.css)({paddingLeft:"20px",borderLeft:"solid 7px #f1f3f5",fontFamily:"monospace",fontSize:"1.1em"}),code:Object(b.css)({})};a.default=s}.call(this,c(89))},217:function(e,a,c){"use strict";c.r(a),function(e){c.d(a,"graphql",function(){return m}),c.d(a,"StaticQueryContext",function(){return s}),c.d(a,"StaticQuery",function(){return u});c(88);var f=c(0),t=c.n(f),n=c(4),d=c.n(n),b=c(216),r=c.n(b);c.d(a,"Link",function(){return r.a}),c.d(a,"withPrefix",function(){return b.withPrefix}),c.d(a,"navigate",function(){return b.navigate}),c.d(a,"push",function(){return b.push}),c.d(a,"replace",function(){return b.replace}),c.d(a,"navigateTo",function(){return b.navigateTo});var i=c(218),l=c.n(i);c.d(a,"PageRenderer",function(){return l.a});var o=c(40);c.d(a,"parsePath",function(){return o.a});var s=t.a.createContext({}),u=function(a){return e.createElement(s.Consumer,null,function(c){return a.data||c[a.query]&&c[a.query].data?(a.render||a.children)(a.data?a.data.data:c[a.query].data):e.createElement("div",null,"Loading (StaticQuery)")})};function m(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}u.propTypes={data:d.a.object,query:d.a.string.isRequired,render:d.a.func,children:d.a.func}}.call(this,c(89))},218:function(e,a,c){var f;e.exports=(f=c(221))&&f.default||f},219:function(e,a,c){"use strict";var f=c(88),t=c(220),n=(c(0),c(217)),d=c(222),b=c(223);c(226),c(224);a.a=function(e){var a=e.children;return Object(f.c)(n.StaticQuery,{query:"3892401927",render:function(e){return Object(f.c)("div",{css:r},Object(f.c)(d.a,{title:e.site.siteMetadata.title}),Object(f.c)("main",{css:i},a),Object(f.c)(b.a,null))},data:t})};var r={name:"3cfldf",styles:"display:flex;min-height:100vh;flex-direction:column;margin:0 auto;"},i={name:"1715jjh",styles:"flex:1;margin:0 auto;padding:0 1em;width:100%;max-width:760px;"}},220:function(e){e.exports={data:{site:{siteMetadata:{title:"dhk.party"}}}}},221:function(e,a,c){"use strict";c.r(a);c(55);var f=c(0),t=c.n(f),n=c(4),d=c.n(n),b=c(56),r=c(2),i=function(e){var a=e.location,c=r.default.getResourcesForPathnameSync(a.pathname);return t.a.createElement(b.a,Object.assign({location:a,pageResources:c},c.json))};i.propTypes={location:d.a.shape({pathname:d.a.string.isRequired}).isRequired},a.default=i},222:function(e,a,c){"use strict";(function(e){c(88),c(0);var f=c(217),t=c(54);a.a=function(a){var c=a.title,t=a.children;return e.createElement("header",{className:n},e.createElement("h1",{className:d},e.createElement(f.Link,{className:b,to:"/"},c)),t)};var n=Object(t.css)({position:"relative",zIndex:9,margin:"1em auto",padding:"0 1em",width:"100%",maxWidth:"960px"}),d=Object(t.css)({fontFamily:"Georgia",fontWeight:400,fontStyle:"italic",fontSize:"27px"}),b=Object(t.css)({display:"block",margin:"0.8em 0 1.424em 0",color:"black",textDecoration:"none"})}).call(this,c(89))},223:function(e,a,c){"use strict";(function(e){c(88),c(0);var f=c(54);a.a=function(){return e.createElement("footer",{className:t},e.createElement("p",null,e.createElement("small",null,e.createElement("a",{className:n,href:"mailto:kimdhoe1@gmail.com"},"kimdhoe1@gmail.com"))))};var t=Object(f.css)({marginTop:"4em",textAlign:"center"}),n=Object(f.css)({letterSpacing:"0.7px",fontFamily:"Georgia",fontStyle:"italic",textDecoration:"none",color:"#777"})}).call(this,c(89))},224:function(e,a,c){},230:function(e){e.exports=[["#69d2e7","#a7dbd8","#e0e4cc","#f38630","#fa6900"],["#fe4365","#fc9d9a","#f9cdad","#c8c8a9","#83af9b"],["#ecd078","#d95b43","#c02942","#542437","#53777a"],["#556270","#4ecdc4","#c7f464","#ff6b6b","#c44d58"],["#774f38","#e08e79","#f1d4af","#ece5ce","#c5e0dc"],["#e8ddcb","#cdb380","#036564","#033649","#031634"],["#490a3d","#bd1550","#e97f02","#f8ca00","#8a9b0f"],["#594f4f","#547980","#45ada8","#9de0ad","#e5fcc2"],["#00a0b0","#6a4a3c","#cc333f","#eb6841","#edc951"],["#e94e77","#d68189","#c6a49a","#c6e5d9","#f4ead5"],["#3fb8af","#7fc7af","#dad8a7","#ff9e9d","#ff3d7f"],["#d9ceb2","#948c75","#d5ded9","#7a6a53","#99b2b7"],["#ffffff","#cbe86b","#f2e9e1","#1c140d","#cbe86b"],["#efffcd","#dce9be","#555152","#2e2633","#99173c"],["#343838","#005f6b","#008c9e","#00b4cc","#00dffc"],["#413e4a","#73626e","#b38184","#f0b49e","#f7e4be"],["#ff4e50","#fc913a","#f9d423","#ede574","#e1f5c4"],["#99b898","#fecea8","#ff847c","#e84a5f","#2a363b"],["#655643","#80bca3","#f6f7bd","#e6ac27","#bf4d28"],["#00a8c6","#40c0cb","#f9f2e7","#aee239","#8fbe00"],["#351330","#424254","#64908a","#e8caa4","#cc2a41"],["#554236","#f77825","#d3ce3d","#f1efa5","#60b99a"],["#ff9900","#424242","#e9e9e9","#bcbcbc","#3299bb"],["#5d4157","#838689","#a8caba","#cad7b2","#ebe3aa"],["#8c2318","#5e8c6a","#88a65e","#bfb35a","#f2c45a"],["#fad089","#ff9c5b","#f5634a","#ed303c","#3b8183"],["#ff4242","#f4fad2","#d4ee5e","#e1edb9","#f0f2eb"],["#d1e751","#ffffff","#000000","#4dbce9","#26ade4"],["#f8b195","#f67280","#c06c84","#6c5b7b","#355c7d"],["#1b676b","#519548","#88c425","#bef202","#eafde6"],["#bcbdac","#cfbe27","#f27435","#f02475","#3b2d38"],["#5e412f","#fcebb6","#78c0a8","#f07818","#f0a830"],["#452632","#91204d","#e4844a","#e8bf56","#e2f7ce"],["#eee6ab","#c5bc8e","#696758","#45484b","#36393b"],["#f0d8a8","#3d1c00","#86b8b1","#f2d694","#fa2a00"],["#f04155","#ff823a","#f2f26f","#fff7bd","#95cfb7"],["#2a044a","#0b2e59","#0d6759","#7ab317","#a0c55f"],["#bbbb88","#ccc68d","#eedd99","#eec290","#eeaa88"],["#b9d7d9","#668284","#2a2829","#493736","#7b3b3b"],["#b3cc57","#ecf081","#ffbe40","#ef746f","#ab3e5b"],["#a3a948","#edb92e","#f85931","#ce1836","#009989"],["#67917a","#170409","#b8af03","#ccbf82","#e33258"],["#e8d5b7","#0e2430","#fc3a51","#f5b349","#e8d5b9"],["#aab3ab","#c4cbb7","#ebefc9","#eee0b7","#e8caaf"],["#300030","#480048","#601848","#c04848","#f07241"],["#ab526b","#bca297","#c5ceae","#f0e2a4","#f4ebc3"],["#607848","#789048","#c0d860","#f0f0d8","#604848"],["#a8e6ce","#dcedc2","#ffd3b5","#ffaaa6","#ff8c94"],["#3e4147","#fffedf","#dfba69","#5a2e2e","#2a2c31"],["#b6d8c0","#c8d9bf","#dadabd","#ecdbbc","#fedcba"],["#fc354c","#29221f","#13747d","#0abfbc","#fcf7c5"],["#1c2130","#028f76","#b3e099","#ffeaad","#d14334"],["#edebe6","#d6e1c7","#94c7b6","#403b33","#d3643b"],["#cc0c39","#e6781e","#c8cf02","#f8fcc1","#1693a7"],["#dad6ca","#1bb0ce","#4f8699","#6a5e72","#563444"],["#a7c5bd","#e5ddcb","#eb7b59","#cf4647","#524656"],["#fdf1cc","#c6d6b8","#987f69","#e3ad40","#fcd036"],["#5c323e","#a82743","#e15e32","#c0d23e","#e5f04c"],["#230f2b","#f21d41","#ebebbc","#bce3c5","#82b3ae"],["#b9d3b0","#81bda4","#b28774","#f88f79","#f6aa93"],["#3a111c","#574951","#83988e","#bcdea5","#e6f9bc"],["#5e3929","#cd8c52","#b7d1a3","#dee8be","#fcf7d3"],["#1c0113","#6b0103","#a30006","#c21a01","#f03c02"],["#382f32","#ffeaf2","#fcd9e5","#fbc5d8","#f1396d"],["#e3dfba","#c8d6bf","#93ccc6","#6cbdb5","#1a1f1e"],["#000000","#9f111b","#b11623","#292c37","#cccccc"],["#c1b398","#605951","#fbeec2","#61a6ab","#accec0"],["#8dccad","#988864","#fea6a2","#f9d6ac","#ffe9af"],["#f6f6f6","#e8e8e8","#333333","#990100","#b90504"],["#1b325f","#9cc4e4","#e9f2f9","#3a89c9","#f26c4f"],["#5e9fa3","#dcd1b4","#fab87f","#f87e7b","#b05574"],["#951f2b","#f5f4d7","#e0dfb1","#a5a36c","#535233"],["#413d3d","#040004","#c8ff00","#fa023c","#4b000f"],["#eff3cd","#b2d5ba","#61ada0","#248f8d","#605063"],["#2d2d29","#215a6d","#3ca2a2","#92c7a3","#dfece6"],["#cfffdd","#b4dec1","#5c5863","#a85163","#ff1f4c"],["#4e395d","#827085","#8ebe94","#ccfc8e","#dc5b3e"],["#9dc9ac","#fffec7","#f56218","#ff9d2e","#919167"],["#a1dbb2","#fee5ad","#faca66","#f7a541","#f45d4c"],["#ffefd3","#fffee4","#d0ecea","#9fd6d2","#8b7a5e"],["#a8a7a7","#cc527a","#e8175d","#474747","#363636"],["#ffedbf","#f7803c","#f54828","#2e0d23","#f8e4c1"],["#f8edd1","#d88a8a","#474843","#9d9d93","#c5cfc6"],["#f38a8a","#55443d","#a0cab5","#cde9ca","#f1edd0"],["#4e4d4a","#353432","#94ba65","#2790b0","#2b4e72"],["#0ca5b0","#4e3f30","#fefeeb","#f8f4e4","#a5b3aa"],["#a70267","#f10c49","#fb6b41","#f6d86b","#339194"],["#9d7e79","#ccac95","#9a947c","#748b83","#5b756c"],["#edf6ee","#d1c089","#b3204d","#412e28","#151101"],["#046d8b","#309292","#2fb8ac","#93a42a","#ecbe13"],["#4d3b3b","#de6262","#ffb88c","#ffd0b3","#f5e0d3"],["#fffbb7","#a6f6af","#66b6ab","#5b7c8d","#4f2958"],["#ff003c","#ff8a00","#fabe28","#88c100","#00c176"],["#fcfef5","#e9ffe1","#cdcfb7","#d6e6c3","#fafbe3"],["#9cddc8","#bfd8ad","#ddd9ab","#f7af63","#633d2e"],["#30261c","#403831","#36544f","#1f5f61","#0b8185"],["#d1313d","#e5625c","#f9bf76","#8eb2c5","#615375"],["#ffe181","#eee9e5","#fad3b2","#ffba7f","#ff9c97"],["#aaff00","#ffaa00","#ff00aa","#aa00ff","#00aaff"],["#c2412d","#d1aa34","#a7a844","#a46583","#5a1e4a"]]}}]);
//# sourceMappingURL=component---src-pages-art-sol-45-js-daf0ce7efd1de072f6e7.js.map