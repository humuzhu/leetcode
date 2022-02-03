"use strict";(self.webpackChunkleetcode=self.webpackChunkleetcode||[]).push([[71],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return d}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),c=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(a),d=r,f=u["".concat(i,".").concat(d)]||u[d]||m[d]||l;return a?n.createElement(f,o(o({ref:t},p),{},{components:a})):n.createElement(f,o({ref:t},p))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=u;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<l;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},8215:function(e,t,a){var n=a(7294);t.Z=function(e){var t=e.children,a=e.hidden,r=e.className;return n.createElement("div",{role:"tabpanel",hidden:a,className:r},t)}},9877:function(e,t,a){a.d(t,{Z:function(){return p}});var n=a(7462),r=a(7294),l=a(2389),o=a(9548),s=a(6010),i="tabItem_LplD";function c(e){var t,a,l,c=e.lazy,p=e.block,m=e.defaultValue,u=e.values,d=e.groupId,f=e.className,v=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=u?u:v.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),k=(0,o.lx)(h,(function(e,t){return e.value===t.value}));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var N=null===m?m:null!=(t=null!=m?m:null==(a=v.find((function(e){return e.props.default})))?void 0:a.props.value)?t:null==(l=v[0])?void 0:l.props.value;if(null!==N&&!h.some((function(e){return e.value===N})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+N+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var b=(0,o.UB)(),g=b.tabGroupChoices,y=b.setTabGroupChoices,w=(0,r.useState)(N),O=w[0],x=w[1],E=[],T=(0,o.o5)().blockElementScrollPositionUntilNextRender;if(null!=d){var j=g[d];null!=j&&j!==O&&h.some((function(e){return e.value===j}))&&x(j)}var D=function(e){var t=e.currentTarget,a=E.indexOf(t),n=h[a].value;n!==O&&(T(t),x(n),null!=d&&y(d,n))},P=function(e){var t,a=null;switch(e.key){case"ArrowRight":var n=E.indexOf(e.currentTarget)+1;a=E[n]||E[0];break;case"ArrowLeft":var r=E.indexOf(e.currentTarget)-1;a=E[r]||E[E.length-1]}null==(t=a)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":p},f)},h.map((function(e){var t=e.value,a=e.label,l=e.attributes;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:O===t?0:-1,"aria-selected":O===t,key:t,ref:function(e){return E.push(e)},onKeyDown:P,onFocus:D,onClick:D},l,{className:(0,s.Z)("tabs__item",i,null==l?void 0:l.className,{"tabs__item--active":O===t})}),null!=a?a:t)}))),c?(0,r.cloneElement)(v.filter((function(e){return e.props.value===O}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==O})}))))}function p(e){var t=(0,l.Z)();return r.createElement(c,(0,n.Z)({key:String(t)},e))}},4551:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return c},contentTitle:function(){return p},metadata:function(){return m},toc:function(){return u},default:function(){return f}});var n=a(7462),r=a(3366),l=(a(7294),a(3905)),o=a(9877),s=a(8215),i=["components"],c={},p="05. \u66ff\u6362\u7a7a\u683c",m={unversionedId:"offer/replace-space",id:"offer/replace-space",title:"05. \u66ff\u6362\u7a7a\u683c",description:"\u9898\u76ee",source:"@site/docs/offer/replace-space.mdx",sourceDirName:"offer",slug:"/offer/replace-space",permalink:"/offer/replace-space",editUrl:"https://github.com/humuzhu/leetcode/tree/main/docs/offer/replace-space.mdx",tags:[],version:"current",frontMatter:{},sidebar:"leetcode",previous:{title:"04. \u4e8c\u7ef4\u6570\u7ec4\u4e2d\u7684\u67e5\u627e",permalink:"/offer/search-number-in-2d-array"},next:{title:"06. \u4ece\u5c3e\u5230\u5934\u6253\u5370\u94fe\u8868",permalink:"/offer/reverse-print-link-list"}},u=[{value:"\u9898\u76ee",id:"\u9898\u76ee",children:[],level:2},{value:"\u5ba1\u9898",id:"\u5ba1\u9898",children:[],level:2},{value:"\u89e3\u9898",id:"\u89e3\u9898",children:[{value:"\u89e3\u6cd5\u4e00 \u6734\u7d20\u6cd5",id:"\u89e3\u6cd5\u4e00-\u6734\u7d20\u6cd5",children:[{value:"\u590d\u6742\u5ea6\u5206\u6790",id:"\u590d\u6742\u5ea6\u5206\u6790",children:[],level:4},{value:"\u6e90\u4ee3\u7801",id:"\u6e90\u4ee3\u7801",children:[],level:4}],level:3}],level:2}],d={toc:u};function f(e){var t=e.components,a=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"05-\u66ff\u6362\u7a7a\u683c"},"05. \u66ff\u6362\u7a7a\u683c"),(0,l.kt)("h2",{id:"\u9898\u76ee"},"\u9898\u76ee"),(0,l.kt)("p",null,'\u8bf7\u5b9e\u73b0\u4e00\u4e2a\u51fd\u6570\uff0c\u628a\u5b57\u7b26\u4e32 s \u4e2d\u7684\u6bcf\u4e2a\u7a7a\u683c\u66ff\u6362\u6210"%20"\u3002'),(0,l.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u529b\u6263\uff08LeetCode\uff09")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"\u94fe\u63a5\uff1a",(0,l.kt)("a",{parentName:"p",href:"https://leetcode-cn.com/problems/ti-huan-kong-ge-lcof/"},"https://leetcode-cn.com/problems/ti-huan-kong-ge-lcof/")))),(0,l.kt)("h2",{id:"\u5ba1\u9898"},"\u5ba1\u9898"),(0,l.kt)("p",null,"\u57fa\u7840\u9898\u76ee\uff0c\u5b57\u7b26\u4e32\u7684\u904d\u5386\u3002"),(0,l.kt)("h2",{id:"\u89e3\u9898"},"\u89e3\u9898"),(0,l.kt)("h3",{id:"\u89e3\u6cd5\u4e00-\u6734\u7d20\u6cd5"},"\u89e3\u6cd5\u4e00 \u6734\u7d20\u6cd5"),(0,l.kt)("p",null,"\u521b\u5efa\u4e00\u4e2a\u5b57\u7b26\u6570\u7ec4\uff0c\u904d\u5386\u5b57\u7b26\u4e32\u65f6\u82e5\u9047\u5230\u7a7a\u683c\uff0c\u5219\u5199\u5165\u7ed9\u5b9a\u5b57\u7b26\u4e32\u3002"),(0,l.kt)("p",null,"\u9700\u8981\u6ce8\u610f\u8bed\u8a00\u4e2d\u5b57\u7b26\u4e32\u7684\u8868\u793a\u3002 \u4e0d\u8981\u62fc\u63a5\u5b57\u7b26\u4e32\uff0c\u5728\u5927\u90e8\u5206\u8bed\u8a00\u4e2d\u6548\u7387\u90fd\u5f88\u4f4e\u3002"),(0,l.kt)("h4",{id:"\u590d\u6742\u5ea6\u5206\u6790"},"\u590d\u6742\u5ea6\u5206\u6790"),(0,l.kt)("p",null,"\u65f6\u95f4\u590d\u6742\u5ea6\u662f",(0,l.kt)("span",{parentName:"p",className:"math math-inline"},(0,l.kt)("span",{parentName:"span",className:"katex"},(0,l.kt)("span",{parentName:"span",className:"katex-mathml"},(0,l.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,l.kt)("semantics",{parentName:"math"},(0,l.kt)("mrow",{parentName:"semantics"},(0,l.kt)("mi",{parentName:"mrow"},"O"),(0,l.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,l.kt)("mi",{parentName:"mrow"},"n"),(0,l.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,l.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(n)")))),(0,l.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,l.kt)("span",{parentName:"span",className:"base"},(0,l.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,l.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,l.kt)("span",{parentName:"span",className:"mopen"},"("),(0,l.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,l.kt)("span",{parentName:"span",className:"mclose"},")"))))),"\u3002"),(0,l.kt)("p",null,"\u7a7a\u95f4\u590d\u6742\u5ea6\u4e3a",(0,l.kt)("span",{parentName:"p",className:"math math-inline"},(0,l.kt)("span",{parentName:"span",className:"katex"},(0,l.kt)("span",{parentName:"span",className:"katex-mathml"},(0,l.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,l.kt)("semantics",{parentName:"math"},(0,l.kt)("mrow",{parentName:"semantics"},(0,l.kt)("mi",{parentName:"mrow"},"O"),(0,l.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,l.kt)("mi",{parentName:"mrow"},"n"),(0,l.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,l.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(n)")))),(0,l.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,l.kt)("span",{parentName:"span",className:"base"},(0,l.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,l.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,l.kt)("span",{parentName:"span",className:"mopen"},"("),(0,l.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,l.kt)("span",{parentName:"span",className:"mclose"},")"))))),"\u3002"),(0,l.kt)("h4",{id:"\u6e90\u4ee3\u7801"},"\u6e90\u4ee3\u7801"),(0,l.kt)(o.Z,{mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"go",label:"Go",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},"func replaceSpace(s string) string {\n    buf := make([]rune, 0, len(s))\n\n    for _, v := range s {\n        if v == ' ' {\n            buf = append(buf, []rune(\"%20\")...)\n        }else {\n            buf = append(buf, v)\n        }\n    }\n\n    return string(buf)\n}\n")))))}f.isMDXComponent=!0}}]);