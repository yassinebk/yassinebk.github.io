(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{48312:function(e,n,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return i(36293)}])},25437:function(e,n,i){"use strict";i.d(n,{V:function(){return l}});var t=i(85893),r=i(20949),s=i(96356),l=(i(67294),function(e){var n=e.label,i=(0,r.ff)("cardDark2","darkSecondary"),l=(0,r.ff)("lightBackground","darkBackground");return(0,t.jsx)(s.Vp,{bgColor:i,fontSize:"md",color:l,flexWrap:"wrap",px:2,children:n})})},36293:function(e,n,i){"use strict";i.r(n),i.d(n,{__N_SSG:function(){return K},default:function(){return Q}});var t=i(85893),r=i(51351),s=i(20949),l=i(68527),o=i(25675),a=i.n(o),c=i(67294),d=i(8193),x=i(63750);var h=i(13375);var u=i(91566);function p(e,n){return function(e){if(Array.isArray(e))return e}(e)||(0,h.Z)(e,n)||(0,u.Z)(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var f=i(82023);function g(){return g=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var i=arguments[n];for(var t in i)Object.prototype.hasOwnProperty.call(i,t)&&(e[t]=i[t])}return e},g.apply(this,arguments)}function j(e,n){return j=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e},j(e,n)}var v=new Map,m=new WeakMap,y=0,b=void 0;function w(e){return Object.keys(e).sort().filter((function(n){return void 0!==e[n]})).map((function(n){return n+"_"+("root"===n?(i=e.root)?(m.has(i)||(y+=1,m.set(i,y.toString())),m.get(i)):"0":e[n]);var i})).toString()}function C(e,n,i,t){if(void 0===i&&(i={}),void 0===t&&(t=b),"undefined"===typeof window.IntersectionObserver&&void 0!==t){var r=e.getBoundingClientRect();return n(t,{isIntersecting:t,target:e,intersectionRatio:"number"===typeof i.threshold?i.threshold:0,time:0,boundingClientRect:r,intersectionRect:r,rootBounds:r}),function(){}}var s=function(e){var n=w(e),i=v.get(n);if(!i){var t,r=new Map,s=new IntersectionObserver((function(n){n.forEach((function(n){var i,s=n.isIntersecting&&t.some((function(e){return n.intersectionRatio>=e}));e.trackVisibility&&"undefined"===typeof n.isVisible&&(n.isVisible=s),null==(i=r.get(n.target))||i.forEach((function(e){e(s,n)}))}))}),e);t=s.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),i={id:n,observer:s,elements:r},v.set(n,i)}return i}(i),l=s.id,o=s.observer,a=s.elements,c=a.get(e)||[];return a.has(e)||a.set(e,c),c.push(n),o.observe(e),function(){c.splice(c.indexOf(n),1),0===c.length&&(a.delete(e),o.unobserve(e)),0===a.size&&(o.disconnect(),v.delete(l))}}var k=["children","as","tag","triggerOnce","threshold","root","rootMargin","onChange","skip","trackVisibility","delay","initialInView","fallbackInView"];function S(e){return"function"!==typeof e.children}var I=function(e){var n,i;function t(n){var i;return(i=e.call(this,n)||this).node=null,i._unobserveCb=null,i.handleNode=function(e){i.node&&(i.unobserve(),e||i.props.triggerOnce||i.props.skip||i.setState({inView:!!i.props.initialInView,entry:void 0})),i.node=e||null,i.observeNode()},i.handleChange=function(e,n){e&&i.props.triggerOnce&&i.unobserve(),S(i.props)||i.setState({inView:e,entry:n}),i.props.onChange&&i.props.onChange(e,n)},i.state={inView:!!n.initialInView,entry:void 0},i}i=e,(n=t).prototype=Object.create(i.prototype),n.prototype.constructor=n,j(n,i);var r=t.prototype;return r.componentDidUpdate=function(e){e.rootMargin===this.props.rootMargin&&e.root===this.props.root&&e.threshold===this.props.threshold&&e.skip===this.props.skip&&e.trackVisibility===this.props.trackVisibility&&e.delay===this.props.delay||(this.unobserve(),this.observeNode())},r.componentWillUnmount=function(){this.unobserve(),this.node=null},r.observeNode=function(){if(this.node&&!this.props.skip){var e=this.props,n=e.threshold,i=e.root,t=e.rootMargin,r=e.trackVisibility,s=e.delay,l=e.fallbackInView;this._unobserveCb=C(this.node,this.handleChange,{threshold:n,root:i,rootMargin:t,trackVisibility:r,delay:s},l)}},r.unobserve=function(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)},r.render=function(){if(!S(this.props)){var e=this.state,n=e.inView,i=e.entry;return this.props.children({inView:n,entry:i,ref:this.handleNode})}var t=this.props,r=t.children,s=t.as,l=t.tag,o=function(e,n){if(null==e)return{};var i,t,r={},s=Object.keys(e);for(t=0;t<s.length;t++)i=s[t],n.indexOf(i)>=0||(r[i]=e[i]);return r}(t,k);return c.createElement(s||l||"div",g({ref:this.handleNode},o),r)},t}(c.Component);function z(e){var n=void 0===e?{}:e,i=n.threshold,t=n.delay,r=n.trackVisibility,s=n.rootMargin,l=n.root,o=n.triggerOnce,a=n.skip,d=n.initialInView,x=n.fallbackInView,h=c.useRef(),u=c.useState({inView:!!d}),p=u[0],f=u[1],g=c.useCallback((function(e){void 0!==h.current&&(h.current(),h.current=void 0),a||e&&(h.current=C(e,(function(e,n){f({inView:e,entry:n}),n.isIntersecting&&o&&h.current&&(h.current(),h.current=void 0)}),{root:l,rootMargin:s,threshold:i,trackVisibility:r,delay:t},x))}),[Array.isArray(i)?i.toString():i,l,s,o,a,r,x,t]);(0,c.useEffect)((function(){h.current||!p.entry||o||a||f({inView:!!d})}));var j=[g,p.inView,p.entry];return j.ref=j[0],j.inView=j[1],j.entry=j[2],j}I.displayName="InView",I.defaultProps={threshold:0,triggerOnce:!1,initialInView:!1};var E=function(e){var n=e.variants,i=e.styleProps,r=e.children,s=e.treshhold,l=p(z({threshold:s||.8,triggerOnce:!0}),2),o=l[0],a=l[1];return(0,t.jsx)(f.E.div,{ref:o,variants:n||{show:{opacity:1,translateY:0},hidden:{opacity:0,translateY:-200}},transition:{duration:.8,ease:"easeInOut"},animate:a?"show":"hidden",style:i,children:r})},D=function(e){var n=e.children,i=e.treshhold,r=e.styleProps,s=e.variants,l=(0,c.useState)(!1),o=l[0],a=l[1];return(0,c.useEffect)((function(){a(!0)}),[]),o?(0,t.jsx)(E,{variants:s,styleProps:r,treshhold:i,children:n}):null},V=function(e){var n=e.children,i=(0,s.ff)("#536073","#ADCEFF");return(0,t.jsx)(l.X6,{color:i,fontSize:"5xl",children:n})},A=function(e){e=null!==e?e:(0,r.Z)(new TypeError("Cannot destructure undefined"));var n=(0,s.ff)("#000","darkSecondary");return(0,t.jsx)(D,{styleProps:{minHeight:"75vh",justifyContent:"center",alignItems:"center",width:"100%",flexDirection:"column",display:"flex",paddingLeft:"16px",paddingRight:"16px",paddingBottom:"60px",paddingTop:"32px"},children:(0,t.jsxs)(l.kC,{w:"100%",maxW:"881px",flexDir:["column","column","row","row"],alignItems:["center","center","flex-start"],justifyContent:"center",children:[(0,t.jsx)(l.gC,{alignItems:"center",mx:"auto",id:"contact-layout",children:(0,t.jsxs)(D,{variants:{show:{translateY:0,opacity:1,transition:{duration:.6}},hidden:{translateY:-100,opacity:0}},children:[(0,t.jsx)(l.M5,{w:"full",id:"image-center",children:(0,t.jsx)(l.xu,{width:["70vw","50vw","220px"],border:5,children:(0,t.jsx)(a(),{src:"/assets/avatar.png",height:302,width:221,layout:"responsive"})})}),(0,t.jsxs)(l.gC,{mt:"16px",children:[(0,t.jsx)(l.xv,{fontSize:"2xl",children:"Yassine Belkhadem"}),(0,t.jsx)(l.xv,{fontSize:"lg",textDecoration:"underline",color:n,children:"@Yassine Belkhadem"})]})]})}),(0,t.jsx)(D,{variants:{show:{translateY:0,opacity:1,transition:{duration:.6}},hidden:{translateY:100,opacity:0}},children:(0,t.jsxs)(l.gC,{alignItems:["center","center","flex-start"],px:["0%","0%","5%"],borderRadius:2,w:["100%","100%","400px"],paddingTop:["12","12",0],children:[(0,t.jsx)(V,{children:"Contact Me"}),(0,t.jsx)(l.xu,{h:[0,4,"12"]}),(0,t.jsxs)(l.Ug,{alignItems:"center",fontSize:"2xl",children:[(0,t.jsx)(d._iD,{}),(0,t.jsx)(l.rU,{href:"https://www.linkedin.com/in/yassine-belkhadem-396266204/",children:"Yassine Belkhadem"})]}),(0,t.jsxs)(l.Ug,{alignItems:"center",fontSize:"2xl",children:[(0,t.jsx)(d.Wjh,{}),(0,t.jsx)(l.rU,{href:"https://www.facebook.com/yassine.belkhadm/",children:"yassine.belkhadem"})]}),(0,t.jsxs)(l.Ug,{fontSize:"2xl",alignItems:"center",children:[(0,t.jsx)(x.KpZ,{}),(0,t.jsx)(l.xv,{children:"Ophelius#3779"})]})]})})]})})},B=function(e){var n,i,r=e.cardHeading,o=e.index,a=e.children,c=(0,s.ff)("#24313A","linear-gradient(90deg, #759BB9 0%, #7E8DCA 100%)"),d=(0,s.ff)("1px solid #24313A","0px solid"),x={background:(0,s.ff)("transparent","#25313A"),paddingLeft:"24px",paddingRight:"24px",borderRadius:"5px",border:d,minHeight:"320px",width:"100%",paddingTop:"48px",alignItems:"flex-start",maxWidth:"425px"};switch(o){case 0:n={translateX:-60,opacity:0},i={translateX:0,opacity:1};break;case 1:n={translateY:-60,opacity:0},i={translateY:0,opacity:1};break;case 2:n={translateY:60,opacity:0},i={translateY:0,opacity:1}}return(0,t.jsxs)(D,{styleProps:x,variants:{hidden:n,show:i},children:[(0,t.jsx)(l.xu,{children:(0,t.jsx)(l.X6,{fontSize:"3xl",bg:c,bgClip:"text",mb:"4",children:r})}),(0,t.jsx)(l.xu,{paddingTop:"2xl",children:a})]})},O=function(e){e=null!==e?e:(0,r.Z)(new TypeError("Cannot destructure undefined"));var n=(0,s.ff)("#4F8BE4","#98C1FF"),i={hidden:{opacity:0,translateY:-10},show:{opacity:1,translateY:0}};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(l.kC,{minH:"75vh",marginTop:[16],id:"section-position-container",justifyContent:"center",alignItems:"center",w:"full",flexDir:"column",marginBottom:"50px",children:[(0,t.jsx)(V,{children:"Get to know me !"}),(0,t.jsxs)(l.xu,{gridTemplateColumns:"repeat(12,1fr)",alignItems:"center",gridGap:"4",marginTop:"8",display:["flex","flex","flex","flex"],flexDir:["column","column","row"],justifyContent:"space-around",maxW:"1323px",w:"full",px:[4,4,4,24],children:[(0,t.jsxs)(B,{cardHeading:"Biographie",index:0,children:[(0,t.jsxs)(l.xv,{fontSize:["xl","xl","lg","xl","2xl"],children:["I am"," ",(0,t.jsx)("span",{style:{color:n},children:" 19 years old tunisian student."})," I am a curious person who loves learning new things and having new experiences.I am a book worm an art lover and a life hacker!"]}),(0,t.jsx)("a",{href:"https://www.flaticon.com/free-icons/tunisia",title:"tunisia icons"})]}),(0,t.jsx)(B,{cardHeading:"Education",index:1,children:(0,t.jsxs)(l.xv,{fontSize:["xl","xl","lg","xl","2xl"],children:["I am a second year software Engineering Student,studying at"," ",(0,t.jsx)("span",{style:{color:n},children:"the National Institut of Applied Sciences and Technologies."})]})}),(0,t.jsx)(B,{cardHeading:"Hobbies",index:2,children:(0,t.jsxs)(f.E.div,{variants:{hidden:{opacity:0},show:{opacity:1,transition:{delayChildren:.7,staggerChildren:.1}}},children:[(0,t.jsxs)(f.E.div,{variants:i,style:{display:"flex",flexDirection:"row",alignItems:"center"},children:[(0,t.jsx)(l.xu,{w:"4",h:"4",rounded:"full",bgColor:"#8CB0CB",mr:2}),(0,t.jsx)(l.xv,{fontSize:"xl",children:"Cybersecurity"})]}),(0,t.jsxs)(f.E.div,{variants:i,style:{display:"flex",flexDirection:"row",marginTop:16,alignItems:"center"},children:[(0,t.jsx)(l.xu,{w:"4",h:"4",rounded:"full",bgColor:"#8CB0CB",mr:2}),(0,t.jsx)(l.xv,{fontSize:"xl",children:"Web Development"})]}),(0,t.jsxs)(f.E.div,{style:{display:"flex",flexDirection:"row",marginTop:16,alignItems:"center"},variants:i,children:[(0,t.jsx)(l.xu,{w:"4",h:"4",rounded:"full",bgColor:"#8CB0CB",mr:2}),(0,t.jsx)(l.xv,{fontSize:"xl",children:"Computer graphics"})]}),(0,t.jsxs)(f.E.div,{variants:i,style:{display:"flex",flexDirection:"row",marginTop:16,alignItems:"center"},children:[(0,t.jsx)(l.xu,{w:"4",h:"4",rounded:"full",bgColor:"#8CB0CB",mr:2}),(0,t.jsx)(l.xv,{fontSize:"xl",children:"UI/UX Design"})]})]})})]})]}),(0,t.jsx)(l.iz,{})]})},N=i(9803),T=i(41799),_=i(69396),L=i(59830),Z=i(99534),F=function(e){var n=e.children,i=(e.animationType,e.delay,e.animation),r=(0,Z.Z)(e,["children","animationType","delay","animation"]);return(0,t.jsx)(f.E.div,(0,_.Z)((0,T.Z)({},i),{children:(0,t.jsx)(l.X6,(0,_.Z)((0,T.Z)({},r),{children:n}))}))},Y=function(e){e=null!==e?e:(0,r.Z)(new TypeError("Cannot destructure undefined"));var n=(0,s.ff)("linear-gradient(90deg, #DA4D4D 0%, #DA5104 52.6%, #745A28 100%)"," linear-gradient(90deg, #DA4D4D 0%, #DA5104 52.6%, #745A28 100%)"),i=(0,s.ff)(" linear-gradient(90deg, #326EB9 0%, rgba(43, 86, 236, 0.96) 101.94%)","linear-gradient(90deg, #A8C0FF 0%, #CFE4FF 101.94%)");return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(D,{variants:{show:{opacity:1,translateY:0},hidden:{opacity:0,translateY:-200}},styleProps:{minHeight:"75vh",width:"100%"},children:(0,t.jsx)(l.kC,{w:"full",id:"section-position-container",justifyContent:"center",alignItems:"center",children:(0,t.jsxs)(l.kC,{id:"section-elements-container",flexDir:["column-reverse","column-reverse","row"],justifyContent:"space-evenly",alignItems:["center"],px:"4",children:[(0,t.jsx)(l.xu,{w:["80%","70%","full"],maxW:"400px",children:(0,t.jsx)(f.E.div,(0,_.Z)((0,T.Z)({},(0,L.v0)(1.2)),{children:(0,t.jsx)(a(),{priority:!0,src:"/assets/LeftSection.png",width:474,height:614,alt:"my picture"})}))}),(0,t.jsxs)(l.gC,{w:"full",alignItems:["center","flex-start"],spacing:[12,8],marginLeft:"8",children:[(0,t.jsxs)(l.gC,{alignItems:["center","flex-start"],children:[(0,t.jsx)(F,{fontSize:["2xl","2xl","2xl","4xl"],animation:(0,L.cw)(.6,.2),children:"Hi I am"}),(0,t.jsx)(F,{textAlign:["center","left"],fontSize:["4xl","4xl","4xl","6xl"],bg:" linear-gradient(90deg, #759BB9 0%, #7E8DCA 100%)",bgClip:"text",animation:(0,L.cw)(.6,.4),children:"Yassine Belkhadem"}),(0,t.jsx)(F,{fontSize:"2xl",bg:n,bgClip:"text",animation:(0,L.cw)(.6,.8),children:"F1r3Cr4CK3r5"})]}),(0,t.jsxs)(l.gC,{id:"labels",alignItems:["center","flex-start"],flex:1,children:[(0,t.jsx)(F,{fontSize:"3xl",animation:(0,L.xv)(.5,1.2),children:"I am"}),(0,t.jsx)(F,{fontSize:["3xl","3xl","3xl","36px"],bg:i,bgClip:"text",animation:(0,L.xv)(.5,1.6),children:"Digital Craftsman"}),(0,t.jsx)(F,{fontSize:["3xl","3xl","3xl","36px"],bg:i,bgClip:"text",animation:(0,L.xv)(.5,2),children:"Full Stack Developer"}),(0,t.jsx)(F,{bg:i,fontSize:["3xl","3xl","3xl","36px"],bgClip:"text",animation:(0,L.xv)(.5,2.4),children:"UI/UX Designer"})]})]})]})})}),(0,t.jsx)(l.iz,{})]})},P=i(28485),R=i(65113),U=i(25437),H=function(e){var n=e.project,i=(0,s.ff)("1px solid #24313A","0px solid"),r=(0,s.ff)("transparent","#25313A"),o=(0,s.ff)("black","white"),c=(0,s.ff)("lightSecondary","darkSecondary");return(0,t.jsxs)(f.E.div,{className:"project-card-homepage",variants:{hidden:{opacity:0,translateY:-30,scale:.6},show:{opacity:1,translateY:0,scale:1}},style:{alignSelf:"stretch",margin:"16px 16px",backgroundColor:r,border:i,borderRadius:5,display:"flex",flexDirection:"column",paddingTop:"24px",paddingBottom:"21px",paddingLeft:"31px",paddingRight:"16px",maxWidth:"472px",height:"auto"},children:[(0,t.jsxs)(l.xu,{children:[(0,t.jsx)(l.X6,{as:"h1",fontSize:"3xl",children:n.title}),(0,t.jsx)(l.xv,{color:c,as:"h4",children:n.date})]}),(0,t.jsx)(l.xu,{h:"12px"}),(0,t.jsx)(l.Ug,{wrap:"wrap",rowGap:2,children:n.tags.map((function(e){return(0,t.jsx)(U.V,{label:e},e)}))}),(0,t.jsx)(l.xu,{h:"20px"}),(0,t.jsx)(l.xu,{children:(0,t.jsx)(l.xv,{as:"p"})}),(0,t.jsx)(l.xv,{children:n.description}),(0,t.jsx)(l.xu,{h:"10px"}),(0,t.jsxs)(l.Ug,{spacing:8,children:[(0,t.jsxs)(l.Ug,{children:[(0,t.jsx)(d.RrF,{}),(0,t.jsx)(l.rU,{fontSize:"xl",color:o,href:n.githubLink,children:"Github Link"})]}),n.livePreview&&(0,t.jsxs)(l.Ug,{children:[(0,t.jsx)(P.xP,{}),(0,t.jsx)(l.rU,{fontSize:"xl",color:o,href:n.livePreview,children:"Live Preview"})]})]}),(0,t.jsx)(l.xu,{h:"10px"}),(0,t.jsx)(l.M5,{borderRadius:2,justifySelf:"flex-end",h:"full",minH:"320px",maxH:"320px",minW:"100%",w:"full",alignSelf:"center",children:(0,t.jsx)(a(),{alt:n.title,src:n.coverImageURL,width:n.coverImageWidth,height:n.coverImageHeight})})]})},M=function(e){var n=e.projects,i=(0,s.ff)("1px solid #24313A","0px solid"),r=(0,c.useState)(!1),o=r[0],a=r[1];return(0,t.jsx)(t.Fragment,{children:0!==n.length&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(l.kC,(0,_.Z)((0,T.Z)({},{minHeight:"75vh",marginTop:"20px",justifyContent:"center",alignItems:"center",width:"100%",flexDirection:"column",display:"flex",paddingBottom:32,paddingLeft:"16px",paddingRight:"16px"}),{px:[4],id:"project-section-header",children:[(0,t.jsx)(V,{children:"Projects"}),(0,t.jsx)(f.E.div,{layout:!0,variants:{show:{opacity:1,transition:{staggerChildren:.5,delayChildren:.2}},hidden:{opacity:0}},initial:"hidden",animate:"show",style:{display:"flex",flexWrap:"wrap",width:"100vw",alignItems:"center",justifyContent:"center",padding:16},children:n.slice(0,6).map((function(e,n){return(0,t.jsx)(t.Fragment,{children:(!o&&n<3||o)&&(0,t.jsx)(H,{project:e},e.title+n.toString()+n.toString())})}))}),n.length>3&&(0,t.jsx)(f.E.div,{layoutId:"button",layout:!0,children:(0,t.jsx)(R.zx,{border:i,rightIcon:o?(0,t.jsx)(P.Hf,{}):(0,t.jsx)(P.ve,{}),onClick:function(){a(!o)},children:(0,t.jsx)(l.xv,{children:"View More"})})})]})),(0,t.jsx)(l.iz,{})]})})},W=i(28678),X=function(e){var n=e.value,i=e.index,r=p(z({threshold:.1}),2),o=r[0],a=r[1],c=(0,s.ff)("#143258","#88A6BC"),d=(0,s.ff)("#88A6BC","#ECEEF1"),x={show:{width:"".concat(n,"%")},hidden:{width:0}};return(0,t.jsx)(l.xu,{ref:o,w:["150px","200px","150px","300px","430px"],h:"11px",paddingBottom:0,bgColor:d,display:"flex",alignItems:"center",children:(0,t.jsx)(f.E.div,{variants:x,initial:"hidden",style:{backgroundColor:c,height:"100%"},animate:a?"show":"hidden",transition:{duration:.7,delay:i?.2*i+.4:.4}})})},G=function(e){var n=e.skillLevel,i=e.skillName,r=(0,s.ff)("#258EDE","#CFE4FF");return(0,t.jsxs)(f.E.div,{style:{display:"flex",flexDirection:"row",alignItems:"flex-end",justifyContent:"space-between",maxWidth:"547px"},children:[(0,t.jsxs)(l.gC,{width:["65px","65px","65px","70px"],children:[(0,t.jsx)(l.xv,{fontSize:["xl","xl","xl","xl","2xl"],children:i}),(0,t.jsx)(l.xv,{fontSize:"2xl",color:r,children:n})]}),(0,t.jsx)(l.M5,{pb:"4",children:(0,t.jsx)(X,{value:n})})]})},J=function(e){e=null!==e?e:(0,r.Z)(new TypeError("Cannot destructure undefined"));var n=(0,W.Z)().textColor;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(l.kC,(0,_.Z)((0,T.Z)({},{minHeight:"75vh",marginTop:"64px",justifyContent:"center",alignItems:"center",width:"100%",flexDirection:"column",display:"flex",paddingBottom:32}),{children:[(0,t.jsx)(V,{children:"Technical Skills"}),(0,t.jsx)(l.kC,{flexDir:["column","column","row","row","row"],marginTop:"8",justifyContent:"space-between",children:(0,t.jsxs)(l.rj,{gridTemplateColumns:["1fr","1fr","1fr 1fr"],gridColumnGap:[8,12,16,24],gridRowGap:7,spacing:10,marginRight:[0,0,12,24],children:[(0,t.jsx)(G,{skillName:"C++",skillLevel:65}),(0,t.jsx)(l.iz,{display:["block","none"],bgColor:n}),(0,t.jsx)(G,{skillName:"HTML 5",skillLevel:98}),(0,t.jsx)(l.iz,{display:["block","none"],bgColor:n}),(0,t.jsx)(G,{skillName:"CSS",skillLevel:100}),(0,t.jsx)(l.iz,{display:["block","none"],bgColor:n}),(0,t.jsx)(G,{skillName:"JAVASCRIPT",skillLevel:84}),(0,t.jsx)(l.iz,{display:["block","none"],bgColor:n}),(0,t.jsx)(G,{skillName:"React",skillLevel:90}),(0,t.jsx)(l.iz,{display:["block","none"],bgColor:n}),(0,t.jsx)(G,{skillName:"Python",skillLevel:70}),(0,t.jsx)(l.iz,{display:["block","none"],bgColor:n}),(0,t.jsx)(G,{skillName:"NodeJS",skillLevel:65}),(0,t.jsx)(l.iz,{display:["block","none"],bgColor:n}),(0,t.jsx)(G,{skillName:"React Native",skillLevel:70}),(0,t.jsx)(l.iz,{display:["block","none"],bgColor:n}),(0,t.jsx)(G,{skillName:"SQL",skillLevel:80}),(0,t.jsx)(l.iz,{display:["block","none"],bgColor:n}),(0,t.jsx)(G,{skillName:"Cybersecurity",skillLevel:50}),(0,t.jsx)(l.iz,{display:["block","none"],bgColor:n}),(0,t.jsx)(G,{skillName:"Computer Graphics",skillLevel:60}),(0,t.jsx)(l.iz,{display:["block","none"],bgColor:n}),(0,t.jsx)(G,{skillName:"Figma",skillLevel:100}),(0,t.jsx)(l.iz,{display:["block","none"],bgColor:n})]})})]})),(0,t.jsx)(l.iz,{})]})},K=!0;function Q(e){var n=e.projects;return(0,t.jsxs)(N.Z,{title:"YB - Porfolio",description:"Yassine Belkhadem is a software engineering student, passionated by computers and all the services they can offer. This portfolio is a showcase for projects he has done and skills he has learnt during his still going journey. #programming #cybersecurity ",imageLink:"https://res.cloudinary.com/dsdvvwb8v/image/upload/v1659869790/portfolio_view.png",children:[(0,t.jsx)(Y,{}),(0,t.jsx)(O,{}),(0,t.jsx)(J,{}),(0,t.jsx)(M,{projects:n}),(0,t.jsx)(A,{})]})}},20943:function(e,n,i){"use strict";function t(e,n){(null==n||n>e.length)&&(n=e.length);for(var i=0,t=new Array(n);i<n;i++)t[i]=e[i];return t}i.d(n,{Z:function(){return t}})},13375:function(e,n,i){"use strict";function t(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}i.d(n,{Z:function(){return t}})},99534:function(e,n,i){"use strict";function t(e,n){if(null==e)return{};var i,t,r=function(e,n){if(null==e)return{};var i,t,r={},s=Object.keys(e);for(t=0;t<s.length;t++)i=s[t],n.indexOf(i)>=0||(r[i]=e[i]);return r}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)i=s[t],n.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}i.d(n,{Z:function(){return t}})},91566:function(e,n,i){"use strict";i.d(n,{Z:function(){return r}});var t=i(20943);function r(e,n){if(e){if("string"===typeof e)return(0,t.Z)(e,n);var i=Object.prototype.toString.call(e).slice(8,-1);return"Object"===i&&e.constructor&&(i=e.constructor.name),"Map"===i||"Set"===i?Array.from(i):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?(0,t.Z)(e,n):void 0}}}},function(e){e.O(0,[617,13,386,51,803,774,888,179],(function(){return n=48312,e(e.s=n);var n}));var n=e.O();_N_E=n}]);