/*! For license information please see stories-layout-Footer-stories.144e071c.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_jorgechato_manyo=self.webpackChunk_jorgechato_manyo||[]).push([[874],{"./src/stories/layout/Footer.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Footer_stories});__webpack_require__("./node_modules/react/index.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function Footer(props={siteMap:[],socials:[],author:"Jorge Chato"}){const socialsJSX=props.socials?.map((social=>(0,jsx_runtime.jsx)("li",{children:(0,jsx_runtime.jsx)("a",{target:"_blank",href:social.url,rel:"noopener noreferrer",className:"text-grey-darkest",children:social.name})},social.name))),siteMapJSX=props.siteMap?.map((endpoint=>(0,jsx_runtime.jsx)("li",{className:"text-grey-darkest",children:(0,jsx_runtime.jsx)("a",{href:endpoint.url,children:endpoint.name})},endpoint.name))),year=(new Date).getFullYear();return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsxs)("footer",{className:"container font-display text-grey-darkest mx-auto px-4 text-xs mt-24 mb-12 tracking-wide text-center",children:[(0,jsx_runtime.jsxs)("nav",{className:"w-full mb-4",children:[(0,jsx_runtime.jsx)("ul",{className:"flex justify-center tracking-wide space-x-4 mb-2",children:siteMapJSX}),(0,jsx_runtime.jsx)("ul",{className:"flex justify-center tracking-wide space-x-4",children:socialsJSX})]}),(0,jsx_runtime.jsxs)("p",{children:["©",year," ",props.author]})]})})}try{Footer.displayName="Footer",Footer.__docgenInfo={description:"",displayName:"Footer",props:{socials:{defaultValue:null,description:"",name:"socials",required:!1,type:{name:"Social[]"}},siteMap:{defaultValue:null,description:"",name:"siteMap",required:!1,type:{name:"SiteMap[]"}},author:{defaultValue:null,description:"",name:"author",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/layout/Footer.tsx#Footer"]={docgenInfo:Footer.__docgenInfo,name:"Footer",path:"src/components/layout/Footer.tsx#Footer"})}catch(__react_docgen_typescript_loader_error){}const Footer_stories={title:"Footer",component:Footer,argTypes:{socials:{control:"array"},siteMap:{control:"array"},author:{control:"text"}}},Primary={render:args=>(0,jsx_runtime.jsx)(Footer,{...args}),args:{socials:[{name:"Twitter",url:"https://twitter.com/jorgechato"},{name:"GitHub",url:"https://github.com/jorgechato"}],siteMap:[{name:"Home",url:"/"},{name:"About",url:"/about"}],author:"Jorge Chato"}};Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:'{\n  render: args => <Footer {...args} />,\n  args: {\n    socials: [{\n      name: "Twitter",\n      url: "https://twitter.com/jorgechato"\n    }, {\n      name: "GitHub",\n      url: "https://github.com/jorgechato"\n    }],\n    siteMap: [{\n      name: "Home",\n      url: "/"\n    }, {\n      name: "About",\n      url: "/about"\n    }],\n    author: "Jorge Chato"\n  }\n}',...Primary.parameters?.docs?.source}}};const __namedExportsOrder=["Primary"]},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);