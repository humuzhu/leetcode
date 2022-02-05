"use strict";(self.webpackChunkleetcode=self.webpackChunkleetcode||[]).push([[45],{3905:function(a,e,t){t.d(e,{Zo:function(){return N},kt:function(){return k}});var n=t(7294);function s(a,e,t){return e in a?Object.defineProperty(a,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[e]=t,a}function m(a,e){var t=Object.keys(a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(a);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),t.push.apply(t,n)}return t}function r(a){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?m(Object(t),!0).forEach((function(e){s(a,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(t)):m(Object(t)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(t,e))}))}return a}function p(a,e){if(null==a)return{};var t,n,s=function(a,e){if(null==a)return{};var t,n,s={},m=Object.keys(a);for(n=0;n<m.length;n++)t=m[n],e.indexOf(t)>=0||(s[t]=a[t]);return s}(a,e);if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(a);for(n=0;n<m.length;n++)t=m[n],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(a,t)&&(s[t]=a[t])}return s}var l=n.createContext({}),i=function(a){var e=n.useContext(l),t=e;return a&&(t="function"==typeof a?a(e):r(r({},e),a)),t},N=function(a){var e=i(a.components);return n.createElement(l.Provider,{value:e},a.children)},o={inlineCode:"code",wrapper:function(a){var e=a.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(a,e){var t=a.components,s=a.mdxType,m=a.originalType,l=a.parentName,N=p(a,["components","mdxType","originalType","parentName"]),c=i(t),k=s,h=c["".concat(l,".").concat(k)]||c[k]||o[k]||m;return t?n.createElement(h,r(r({ref:e},N),{},{components:t})):n.createElement(h,r({ref:e},N))}));function k(a,e){var t=arguments,s=e&&e.mdxType;if("string"==typeof a||s){var m=t.length,r=new Array(m);r[0]=c;var p={};for(var l in e)hasOwnProperty.call(e,l)&&(p[l]=e[l]);p.originalType=a,p.mdxType="string"==typeof a?a:s,r[1]=p;for(var i=2;i<m;i++)r[i]=t[i];return n.createElement.apply(null,r)}return n.createElement.apply(null,t)}c.displayName="MDXCreateElement"},8215:function(a,e,t){var n=t(7294);e.Z=function(a){var e=a.children,t=a.hidden,s=a.className;return n.createElement("div",{role:"tabpanel",hidden:t,className:s},e)}},9877:function(a,e,t){t.d(e,{Z:function(){return N}});var n=t(7462),s=t(7294),m=t(2389),r=t(9548),p=t(6010),l="tabItem_LplD";function i(a){var e,t,m,i=a.lazy,N=a.block,o=a.defaultValue,c=a.values,k=a.groupId,h=a.className,u=s.Children.map(a.children,(function(a){if((0,s.isValidElement)(a)&&void 0!==a.props.value)return a;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof a.type?a.type:a.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),d=null!=c?c:u.map((function(a){var e=a.props;return{value:e.value,label:e.label,attributes:e.attributes}})),g=(0,r.lx)(d,(function(a,e){return a.value===e.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(a){return a.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var f=null===o?o:null!=(e=null!=o?o:null==(t=u.find((function(a){return a.props.default})))?void 0:t.props.value)?e:null==(m=u[0])?void 0:m.props.value;if(null!==f&&!d.some((function(a){return a.value===f})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+f+'" but none of its children has the corresponding value. Available values are: '+d.map((function(a){return a.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var v=(0,r.UB)(),w=v.tabGroupChoices,y=v.setTabGroupChoices,b=(0,s.useState)(f),x=b[0],O=b[1],M=[],z=(0,r.o5)().blockElementScrollPositionUntilNextRender;if(null!=k){var T=w[k];null!=T&&T!==x&&d.some((function(a){return a.value===T}))&&O(T)}var E=function(a){var e=a.currentTarget,t=M.indexOf(e),n=d[t].value;n!==x&&(z(e),O(n),null!=k&&y(k,n))},R=function(a){var e,t=null;switch(a.key){case"ArrowRight":var n=M.indexOf(a.currentTarget)+1;t=M[n]||M[0];break;case"ArrowLeft":var s=M.indexOf(a.currentTarget)-1;t=M[s]||M[M.length-1]}null==(e=t)||e.focus()};return s.createElement("div",{className:"tabs-container"},s.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,p.Z)("tabs",{"tabs--block":N},h)},d.map((function(a){var e=a.value,t=a.label,m=a.attributes;return s.createElement("li",(0,n.Z)({role:"tab",tabIndex:x===e?0:-1,"aria-selected":x===e,key:e,ref:function(a){return M.push(a)},onKeyDown:R,onFocus:E,onClick:E},m,{className:(0,p.Z)("tabs__item",l,null==m?void 0:m.className,{"tabs__item--active":x===e})}),null!=t?t:e)}))),i?(0,s.cloneElement)(u.filter((function(a){return a.props.value===x}))[0],{className:"margin-vert--md"}):s.createElement("div",{className:"margin-vert--md"},u.map((function(a,e){return(0,s.cloneElement)(a,{key:e,hidden:a.props.value!==x})}))))}function N(a){var e=(0,m.Z)();return s.createElement(i,(0,n.Z)({key:String(e)},a))}},8353:function(a,e,t){t.r(e),t.d(e,{frontMatter:function(){return i},contentTitle:function(){return N},metadata:function(){return o},toc:function(){return c},default:function(){return h}});var n=t(7462),s=t(3366),m=(t(7294),t(3905)),r=t(9877),p=t(8215),l=["components"],i={},N="03. \u6570\u7ec4\u4e2d\u91cd\u590d\u7684\u6570\u5b57",o={unversionedId:"offer/duplicate-number-in-array",id:"offer/duplicate-number-in-array",title:"03. \u6570\u7ec4\u4e2d\u91cd\u590d\u7684\u6570\u5b57",description:"\u9898\u76ee",source:"@site/docs/offer/duplicate-number-in-array.mdx",sourceDirName:"offer",slug:"/offer/duplicate-number-in-array",permalink:"/offer/duplicate-number-in-array",editUrl:"https://github.com/humuzhu/leetcode/tree/main/docs/offer/duplicate-number-in-array.mdx",tags:[],version:"current",frontMatter:{},sidebar:"leetcode",previous:{title:"01. \u6574\u6570\u9664\u6cd5",permalink:"/offer/number_divide"},next:{title:"04. \u4e8c\u7ef4\u6570\u7ec4\u4e2d\u7684\u67e5\u627e",permalink:"/offer/search-number-in-2d-array"}},c=[{value:"\u9898\u76ee",id:"\u9898\u76ee",children:[],level:2},{value:"\u5ba1\u9898",id:"\u5ba1\u9898",children:[],level:2},{value:"\u89e3\u9898",id:"\u89e3\u9898",children:[{value:"\u89e3\u6cd5\u4e00 \u679a\u4e3e\u6cd5",id:"\u89e3\u6cd5\u4e00-\u679a\u4e3e\u6cd5",children:[{value:"\u590d\u6742\u5ea6\u5206\u6790",id:"\u590d\u6742\u5ea6\u5206\u6790",children:[],level:4},{value:"\u6e90\u4ee3\u7801",id:"\u6e90\u4ee3\u7801",children:[],level:4}],level:3},{value:"\u89e3\u6cd5\u4e8c \u6563\u5217\u6cd5",id:"\u89e3\u6cd5\u4e8c-\u6563\u5217\u6cd5",children:[{value:"\u590d\u6742\u5ea6\u5206\u6790",id:"\u590d\u6742\u5ea6\u5206\u6790-1",children:[],level:4},{value:"\u6e90\u4ee3\u7801",id:"\u6e90\u4ee3\u7801-1",children:[],level:4}],level:3}],level:2}],k={toc:c};function h(a){var e=a.components,t=(0,s.Z)(a,l);return(0,m.kt)("wrapper",(0,n.Z)({},k,t,{components:e,mdxType:"MDXLayout"}),(0,m.kt)("h1",{id:"03-\u6570\u7ec4\u4e2d\u91cd\u590d\u7684\u6570\u5b57"},"03. \u6570\u7ec4\u4e2d\u91cd\u590d\u7684\u6570\u5b57"),(0,m.kt)("h2",{id:"\u9898\u76ee"},"\u9898\u76ee"),(0,m.kt)("p",null,"\u5728\u4e00\u4e2a\u957f\u5ea6\u4e3a ",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mi",{parentName:"mrow"},"n")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"n")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"n")))))," \u7684\u6570\u7ec4 ",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mi",{parentName:"mrow"},"n"),(0,m.kt)("mi",{parentName:"mrow"},"u"),(0,m.kt)("mi",{parentName:"mrow"},"m"),(0,m.kt)("mi",{parentName:"mrow"},"s")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"nums")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"u"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"m"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"s")))))," \u91cc\u7684\u6240\u6709\u6570\u5b57\u90fd\u5728 ",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mn",{parentName:"mrow"},"0"),(0,m.kt)("mtext",{parentName:"mrow"},"\xa0"),(0,m.kt)("mi",{parentName:"mrow"},"n"),(0,m.kt)("mo",{parentName:"mrow"},"\u2212"),(0,m.kt)("mn",{parentName:"mrow"},"1")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"0 ~ n-1")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.7278em",verticalAlign:"-0.0833em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"},"0"),(0,m.kt)("span",{parentName:"span",className:"mspace nobreak"},"\xa0"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,m.kt)("span",{parentName:"span",className:"mbin"},"\u2212"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"},"1")))))," \u7684\u8303\u56f4\u5185\u3002"),(0,m.kt)("p",null,"\u6570\u7ec4\u4e2d\u67d0\u4e9b\u6570\u5b57\u662f\u91cd\u590d\u7684\uff0c\u4f46\u4e0d\u77e5\u9053\u6709\u51e0\u4e2a\u6570\u5b57\u91cd\u590d\u4e86\uff0c\u4e5f\u4e0d\u77e5\u9053\u6bcf\u4e2a\u6570\u5b57\u91cd\u590d\u4e86\u51e0\u6b21\u3002"),(0,m.kt)("p",null,"\u8bf7\u627e\u51fa\u6570\u7ec4\u4e2d\u4efb\u610f\u4e00\u4e2a\u91cd\u590d\u7684\u6570\u5b57\u3002"),(0,m.kt)("p",null,"\u9650\u5236\u6761\u4ef6\uff1a"),(0,m.kt)("ul",null,(0,m.kt)("li",{parentName:"ul"},(0,m.kt)("span",{parentName:"li",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mn",{parentName:"mrow"},"2"),(0,m.kt)("mo",{parentName:"mrow"},"\u2264"),(0,m.kt)("mi",{parentName:"mrow"},"n"),(0,m.kt)("mo",{parentName:"mrow"},"\u2264"),(0,m.kt)("mn",{parentName:"mrow"},"100000")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"2 \\leq n \\leq 100000")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.7804em",verticalAlign:"-0.136em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"},"2"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,m.kt)("span",{parentName:"span",className:"mrel"},"\u2264"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.7719em",verticalAlign:"-0.136em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,m.kt)("span",{parentName:"span",className:"mrel"},"\u2264"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"},"100000"))))))),(0,m.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,m.kt)("div",{parentName:"div",className:"admonition-heading"},(0,m.kt)("h5",{parentName:"div"},(0,m.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,m.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,m.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u529b\u6263\uff08LeetCode\uff09")),(0,m.kt)("div",{parentName:"div",className:"admonition-content"},(0,m.kt)("p",{parentName:"div"},"\u94fe\u63a5\uff1a",(0,m.kt)("a",{parentName:"p",href:"https://leetcode-cn.com/problems/shu-zu-zhong-zhong-fu-de-shu-zi-lcof"},"https://leetcode-cn.com/problems/shu-zu-zhong-zhong-fu-de-shu-zi-lcof")))),(0,m.kt)("h2",{id:"\u5ba1\u9898"},"\u5ba1\u9898"),(0,m.kt)("p",null,"\u57fa\u7840\u9898\u76ee\uff0c\u8003\u67e5\u6570\u7ec4\u548c\u6563\u5217\u8868\u7684\u5e94\u7528\u3002"),(0,m.kt)("h2",{id:"\u89e3\u9898"},"\u89e3\u9898"),(0,m.kt)("h3",{id:"\u89e3\u6cd5\u4e00-\u679a\u4e3e\u6cd5"},"\u89e3\u6cd5\u4e00 \u679a\u4e3e\u6cd5"),(0,m.kt)("p",null,"\u5c06\u6570\u7ec4\u5206\u4e3a\u5934\u90e8\u5143\u7d20\u548c\u5269\u4f59\u6570\u7ec4\uff0c\u82e5\u5934\u90e8\u5143\u7d20\u51fa\u73b0\u5728\u5269\u4f59\u6570\u7ec4\u4e2d\uff0c\u5219\u627e\u5230\u4e86\u91cd\u590d\u6570\u5b57\u3002\n\u82e5\u672a\u51fa\u73b0\uff0c\u7ee7\u7eed\u4ece\u5269\u4f59\u6570\u7ec4\u4e2d\u53d6\u51fa\u5934\u90e8\u5143\u7d20\uff0c\u5faa\u73af\u81f3\u6570\u7ec4\u4e3a\u7a7a\uff0c\u5373\u4e0d\u5b58\u5728\u91cd\u590d\u6570\u5b57\u3002"),(0,m.kt)("h4",{id:"\u590d\u6742\u5ea6\u5206\u6790"},"\u590d\u6742\u5ea6\u5206\u6790"),(0,m.kt)("p",null,"\u5728\u6570\u7ec4\u6ca1\u6709\u91cd\u590d\u5143\u7d20\u7684\u60c5\u51b5\u4e0b\uff0c\u6bd4\u8f83\u6b21\u6570\u4e3a",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("msubsup",{parentName:"mrow"},(0,m.kt)("mo",{parentName:"msubsup"},"\u2211"),(0,m.kt)("mrow",{parentName:"msubsup"},(0,m.kt)("mi",{parentName:"mrow"},"i"),(0,m.kt)("mo",{parentName:"mrow"},"="),(0,m.kt)("mn",{parentName:"mrow"},"1")),(0,m.kt)("mi",{parentName:"msubsup"},"n")),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,m.kt)("mi",{parentName:"mrow"},"n"),(0,m.kt)("mo",{parentName:"mrow"},"\u2212"),(0,m.kt)("mi",{parentName:"mrow"},"i"),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},")"),(0,m.kt)("mo",{parentName:"mrow"},"="),(0,m.kt)("mfrac",{parentName:"mrow"},(0,m.kt)("mrow",{parentName:"mfrac"},(0,m.kt)("mi",{parentName:"mrow"},"n"),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,m.kt)("mi",{parentName:"mrow"},"n"),(0,m.kt)("mo",{parentName:"mrow"},"\u2212"),(0,m.kt)("mn",{parentName:"mrow"},"1"),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,m.kt)("mn",{parentName:"mfrac"},"2"))),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\sum_{i=1}^{n} (n-i) = \\frac{n(n-1)}{2}")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"1.104em",verticalAlign:"-0.2997em"}}),(0,m.kt)("span",{parentName:"span",className:"mop"},(0,m.kt)("span",{parentName:"span",className:"mop op-symbol small-op",style:{position:"relative",top:"0em"}},"\u2211"),(0,m.kt)("span",{parentName:"span",className:"msupsub"},(0,m.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8043em"}},(0,m.kt)("span",{parentName:"span",style:{top:"-2.4003em",marginLeft:"0em",marginRight:"0.05em"}},(0,m.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,m.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"i"),(0,m.kt)("span",{parentName:"span",className:"mrel mtight"},"="),(0,m.kt)("span",{parentName:"span",className:"mord mtight"},"1")))),(0,m.kt)("span",{parentName:"span",style:{top:"-3.2029em",marginRight:"0.05em"}},(0,m.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,m.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"n"))))),(0,m.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.2997em"}},(0,m.kt)("span",{parentName:"span"})))))),(0,m.kt)("span",{parentName:"span",className:"mopen"},"("),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,m.kt)("span",{parentName:"span",className:"mbin"},"\u2212"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"i"),(0,m.kt)("span",{parentName:"span",className:"mclose"},")"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,m.kt)("span",{parentName:"span",className:"mrel"},"="),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"1.355em",verticalAlign:"-0.345em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"},(0,m.kt)("span",{parentName:"span",className:"mopen nulldelimiter"}),(0,m.kt)("span",{parentName:"span",className:"mfrac"},(0,m.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"1.01em"}},(0,m.kt)("span",{parentName:"span",style:{top:"-2.655em"}},(0,m.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,m.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mtight"},"2")))),(0,m.kt)("span",{parentName:"span",style:{top:"-3.23em"}},(0,m.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,m.kt)("span",{parentName:"span",className:"frac-line",style:{borderBottomWidth:"0.04em"}})),(0,m.kt)("span",{parentName:"span",style:{top:"-3.485em"}},(0,m.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,m.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"n"),(0,m.kt)("span",{parentName:"span",className:"mopen mtight"},"("),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"n"),(0,m.kt)("span",{parentName:"span",className:"mbin mtight"},"\u2212"),(0,m.kt)("span",{parentName:"span",className:"mord mtight"},"1"),(0,m.kt)("span",{parentName:"span",className:"mclose mtight"},")"))))),(0,m.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.345em"}},(0,m.kt)("span",{parentName:"span"}))))),(0,m.kt)("span",{parentName:"span",className:"mclose nulldelimiter"})))))),"\u3002\u56e0\u6b64\u65f6\u95f4\u590d\u6742\u5ea6\u4e3a",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mi",{parentName:"mrow"},"O"),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,m.kt)("msup",{parentName:"mrow"},(0,m.kt)("mi",{parentName:"msup"},"n"),(0,m.kt)("mn",{parentName:"msup"},"2")),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(n^2)")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"1.0641em",verticalAlign:"-0.25em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,m.kt)("span",{parentName:"span",className:"mopen"},"("),(0,m.kt)("span",{parentName:"span",className:"mord"},(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,m.kt)("span",{parentName:"span",className:"msupsub"},(0,m.kt)("span",{parentName:"span",className:"vlist-t"},(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8141em"}},(0,m.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,m.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,m.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mtight"},"2")))))))),(0,m.kt)("span",{parentName:"span",className:"mclose"},")"))))),"\u3002"),(0,m.kt)("p",null,"\u6ca1\u6709\u4f7f\u7528\u989d\u5916\u7684\u5b58\u50a8\u7a7a\u95f4\uff0c\u56e0\u6b64\u7a7a\u95f4\u590d\u6742\u5ea6\u4e3a",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mi",{parentName:"mrow"},"O"),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,m.kt)("mn",{parentName:"mrow"},"1"),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(1)")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,m.kt)("span",{parentName:"span",className:"mopen"},"("),(0,m.kt)("span",{parentName:"span",className:"mord"},"1"),(0,m.kt)("span",{parentName:"span",className:"mclose"},")"))))),"\u3002"),(0,m.kt)("h4",{id:"\u6e90\u4ee3\u7801"},"\u6e90\u4ee3\u7801"),(0,m.kt)(r.Z,{mdxType:"Tabs"},(0,m.kt)(p.Z,{value:"go",label:"Go",default:!0,mdxType:"TabItem"},(0,m.kt)("pre",null,(0,m.kt)("code",{parentName:"pre",className:"language-go"},'func findRepeatNumber(nums []int) int {\n    for i, v := range nums {\n        for _, u := range nums[i+1:] {\n            if u == v {\n                return v\n            }\n        }\n    }\n    panic("unreachable")\n}\n')))),(0,m.kt)("h3",{id:"\u89e3\u6cd5\u4e8c-\u6563\u5217\u6cd5"},"\u89e3\u6cd5\u4e8c \u6563\u5217\u6cd5"),(0,m.kt)("p",null,"\u89e3\u6cd5\u4e00\u4e2d\uff0c\u91cd\u590d\u6bd4\u8f83\u7684\u76ee\u7684\u662f\u786e\u5b9a\u5143\u7d20\u662f\u5426\u5728\u5269\u4f59\u6570\u7ec4\u4e2d\u3002\u53ef\u4ee5\u901a\u8fc7\u4f7f\u7528\u6563\u5217\u8868\uff0c\u5c06\n\u67e5\u627e\u7684\u5f00\u9500\u964d\u4f4e\u81f3\u5e38\u6570\u65f6\u95f4\u3002"),(0,m.kt)("p",null,"\u5728\u904d\u5386\u6570\u7ec4\u65f6\uff0c\u6211\u4eec\u5c06\u904d\u5386\u8fc7\u7684\u5143\u7d20\u5b58\u5165\u6563\u5217\u8868\u3002\u82e5\u53d1\u73b0\u5143\u7d20\u5728\u6563\u5217\u8868\u4e2d\u5df2\u7ecf\u5b58\u5728\uff0c\u8868\u660e\n\u6211\u4eec\u5df2\u7ecf\u53d1\u73b0\u4e86\u4e00\u4e2a\u91cd\u590d\u6570\u5b57\u3002"),(0,m.kt)("h4",{id:"\u590d\u6742\u5ea6\u5206\u6790-1"},"\u590d\u6742\u5ea6\u5206\u6790"),(0,m.kt)("p",null,"\u6211\u4eec\u53ea\u904d\u5386\u4e86\u4e00\u6b21\u6570\u7ec4\uff0c\u56e0\u6b64\u65f6\u95f4\u590d\u6742\u5ea6\u4e3a",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mi",{parentName:"mrow"},"O"),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,m.kt)("mi",{parentName:"mrow"},"n"),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(n)")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,m.kt)("span",{parentName:"span",className:"mopen"},"("),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,m.kt)("span",{parentName:"span",className:"mclose"},")"))))),"\u3002"),(0,m.kt)("p",null,"\u6211\u4eec\u4f7f\u7528\u4e86\u6563\u5217\u8868\u6765\u5b58\u50a8\u5df2\u8bbf\u95ee\u8fc7\u7684\u5143\u7d20\uff0c\u6700\u574f\u60c5\u51b5\u4e0b\u5b58\u5165",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mi",{parentName:"mrow"},"n")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"n")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"))))),"\u4e2a\u5143\u7d20\uff0c\u56e0\u6b64\u7a7a\u95f4\u590d\u6742\u5ea6\u4e3a",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mi",{parentName:"mrow"},"O"),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,m.kt)("mi",{parentName:"mrow"},"n"),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(n)")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,m.kt)("span",{parentName:"span",className:"mopen"},"("),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,m.kt)("span",{parentName:"span",className:"mclose"},")"))))),"\u3002"),(0,m.kt)("h4",{id:"\u6e90\u4ee3\u7801-1"},"\u6e90\u4ee3\u7801"),(0,m.kt)(r.Z,{mdxType:"Tabs"},(0,m.kt)(p.Z,{value:"go",label:"Go",default:!0,mdxType:"TabItem"},(0,m.kt)("pre",null,(0,m.kt)("code",{parentName:"pre",className:"language-go"},'func findRepeatNumber(nums []int) int {\n    m := make(map[int]struct{})\n    for _, v := range nums {\n        if _, ok := m[v]; ok {\n            return v\n        }\n        m[v] = struct{}{}\n    }\n    panic("unreachable")\n}\n')))))}h.isMDXComponent=!0}}]);