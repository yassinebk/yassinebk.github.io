(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[195],{67801:function(r,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog",function(){return n(44343)}])},25437:function(r,t,n){"use strict";n.d(t,{V:function(){return a}});var e=n(85893),i=n(20949),o=n(96356),a=(n(67294),function(r){var t=r.label,n=(0,i.ff)("cardDark2","darkSecondary"),a=(0,i.ff)("lightBackground","darkBackground");return(0,e.jsx)(o.Vp,{bgColor:n,fontSize:"md",color:a,flexWrap:"wrap",px:2,children:t})})},44343:function(r,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return b},default:function(){return k}});var e=n(85893),i=n(20949),o=n(68527),a=n(67294),l=n(89583),c=n(82023),s=n(25675),u=n.n(s),d=n(41664),f=n.n(d),h=n(25437),x=function(r){var t=r.post,n=(r.index,(0,i.ff)("1px solid #24313A","0px solid")),l=(0,i.ff)("transparent","#25313A"),s=(0,i.ff)("lightSecondary","darkSecondary"),d=(0,a.useState)(1),x=d[0],g=d[1];return(0,e.jsx)(f(),{href:"/blog/".concat(t.slug),children:(0,e.jsxs)(c.E.div,{initial:{opacity:0,scaleX:.8},className:"blog-card",animate:{opacity:1,scaleX:1,scale:x},transition:{duration:.2},onHoverStart:function(){return g(.95)},onHoverEnd:function(){return g(1)},style:{cursor:"pointer",alignSelf:"stretch",margin:"8px 8px",maxWidth:"400px",minWidth:"200px",minHeight:"300px",width:"100%",backgroundColor:l,border:n,borderRadius:"5px",flexDirection:"column",display:"flex",paddingBottom:"2%"},children:[(0,e.jsx)(o.M5,{display:"block",position:"relative",minHeight:"50%",minW:"300px",minH:"300px",w:"100%",mb:"4",borderRadius:3,overflow:"hidden",children:(0,e.jsx)(u(),{alt:t.title,src:t.coverImageLarge,objectPosition:"top center",layout:"fill",objectFit:"cover"})}),(0,e.jsxs)(o.gC,{alignItems:"flex-start",height:"40%",px:"4%",children:[(0,e.jsx)(o.X6,{fontSize:["lg","xl","3xl","3xl"],children:t.title}),(0,e.jsx)(o.xv,{color:s,as:"h4",fontSize:"19",children:t.date})]}),(0,e.jsx)(o.xu,{h:"12px"}),(0,e.jsx)(o.Ug,{px:"4%",children:t.tags.map((function(r){return(0,e.jsx)(h.V,{label:r},r)}))}),(0,e.jsx)(o.xu,{h:"20px"})]})})},g=function(r){var t=r.children,n=(0,i.ff)("cardDark2","darkSecondary");return(0,e.jsx)(o.X6,{color:n,fontSize:"6xl",children:t})},p=n(9803),v=n(20943);var m=n(13375);var j=n(91566);function S(r){return function(r){if(Array.isArray(r))return(0,v.Z)(r)}(r)||(0,m.Z)(r)||(0,j.Z)(r)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var w=n(30381),y=n.n(w),b=!0,k=function(r){var t=r.posts,n=function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,n=(0,a.useState)(r),e=n[0],i=n[1],o=function(r){t.includes(r)&&i(S(e).concat([r]))},l=function(r){i(e.filter((function(t){return t!==r})))},c=function(r){e.includes(r)?l(r):o(r)};return{tagFilter:e,toggleTag:c,resetTagFilter:function(){i(r)},addTag:o}}([],r.tags),c=n.tagFilter,s=(n.resetTagFilter,n.toggleTag,function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=(0,a.useState)(r),n=t[0],e=t[1];return{searchFilter:n,updateSearchFilter:function(r){e(r)},resetSearchFilter:function(){e(r)}}}()),u=(s.resetSearchFilter,s.searchFilter),d=(s.updateSearchFilter,(0,i.ff)("cardDark2","darkSecondary"));return(0,e.jsx)(p.Z,{title:"YB - Blog",isFooterPresent:!1,imageLink:"https://res.cloudinary.com/dsdvvwb8v/image/upload/v1659869790/portfolio_view.png",description:t.map((function(r){return r.title})).join(" - "),children:0==t.length?(0,e.jsxs)(o.gC,{vh:"55vh",children:[(0,e.jsx)(l.qjb,{style:{fontSize:30,height:60,width:60}}),(0,e.jsx)(o.X6,{fontSize:"4xl",children:"There are no posts available yet "}),(0,e.jsx)(o.X6,{fontSize:"3xl",color:d,ringColor:"wheat",textShadow:"lg",ringOffset:1,children:"Check us in a later time !"})]}):(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(o.xu,{mx:"auto",children:(0,e.jsx)(g,{children:"Articles"})}),(0,e.jsx)(o.xu,{h:8}),(0,e.jsxs)(o.gC,{flexGrow:1,px:1,h:"full",gridColumnStart:[1,1,1,3,3,4],gridColumnEnd:[2,2,2,2,13],w:["100vw","100vw","100%"],children:[(0,e.jsx)(o.iz,{}),(0,e.jsx)(o.kC,{w:"100%",paddingBottom:"24px",className:"scrollbar",py:32,overflowX:"hidden",wrap:"wrap",flexDir:"row",rowGap:4,justifyContent:"center",scrollBehavior:"smooth",px:"4",children:t.filter((function(r){for(var t=0;t<c.length;t++)if(!r.tags.includes(c[t]))return!1;return!0})).filter((function(r){return r.title.toString().toLowerCase().indexOf(u.toLowerCase())>-1})).sort((function(r,t){var n=y()(r.date,"YYYY-MM-DD"),e=y()(t.date,"YYYY-MM-DD");return n.diff(e)>=0?-1:1})).map((function(r,t){return(0,e.jsx)(x,{post:r,index:t},r.slug)}))}),(0,e.jsx)(o.iz,{})]})]})})}},20943:function(r,t,n){"use strict";function e(r,t){(null==t||t>r.length)&&(t=r.length);for(var n=0,e=new Array(t);n<t;n++)e[n]=r[n];return e}n.d(t,{Z:function(){return e}})},13375:function(r,t,n){"use strict";function e(r){if("undefined"!==typeof Symbol&&null!=r[Symbol.iterator]||null!=r["@@iterator"])return Array.from(r)}n.d(t,{Z:function(){return e}})},91566:function(r,t,n){"use strict";n.d(t,{Z:function(){return i}});var e=n(20943);function i(r,t){if(r){if("string"===typeof r)return(0,e.Z)(r,t);var n=Object.prototype.toString.call(r).slice(8,-1);return"Object"===n&&r.constructor&&(n=r.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?(0,e.Z)(r,t):void 0}}}},function(r){r.O(0,[617,445,885,386,51,803,774,888,179],(function(){return t=67801,r(r.s=t);var t}));var t=r.O();_N_E=t}]);