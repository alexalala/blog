(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{148:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return c}),a.d(t,"pageQuery",function(){return o});var n=a(0),r=a.n(n),i=a(36),l=a(154);a(166);function c(e){var t=e.data.allMarkdownRemark.edges;return r.a.createElement(l.a,null,r.a.createElement("div",{className:"landing-container"},r.a.createElement("div",null,r.a.createElement("h2",null,"Hi, I'm Alexandra. A self-taught front end developer from Norwich."),r.a.createElement("p",null,"My passions are design, development and accessibility.")),r.a.createElement("div",{className:"blog-posts"},t.filter(function(e){return e.node.frontmatter.title.length>0}).map(function(e){var t=e.node;return r.a.createElement("div",{className:"blog-post-preview",key:t.id},r.a.createElement("h3",null,r.a.createElement(i.Link,{to:t.frontmatter.path},t.frontmatter.title)),r.a.createElement("p",{className:"date"},t.frontmatter.date),r.a.createElement("p",null,t.excerpt))}))))}var o="3212646526"},151:function(e){e.exports={data:{site:{siteMetadata:{title:"alexandra frances"}}}}},152:function(e,t,a){e.exports={container:"header-module--container--rm58V",heading:"header-module--heading--359Dj"}},153:function(e,t,a){},154:function(e,t,a){"use strict";var n=a(151),r=a(0),i=a.n(r),l=a(1),c=a.n(l),o=a(36),s=a(152),d=a.n(s),u=function(e){var t=e.siteTitle;return i.a.createElement("header",{className:d.a.container},i.a.createElement("h1",{className:d.a.heading},i.a.createElement(o.Link,{to:"/"},t)))};u.propTypes={siteTitle:c.a.string},u.defaultProps={siteTitle:""};var m=u,p=(a(153),function(e){var t=e.children;return i.a.createElement(o.StaticQuery,{query:"755544856",render:function(e){return i.a.createElement("div",{className:"layout-container"},i.a.createElement(m,{siteTitle:e.site.siteMetadata.title}),i.a.createElement("main",null,t))},data:n})});p.propTypes={children:c.a.node.isRequired};t.a=p},166:function(e,t,a){}}]);
//# sourceMappingURL=component---src-pages-index-js-9acc6a2b038e1537a259.js.map