(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{74:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return d}));var i=n(2),o=n(6),a=(n(0),n(88)),r={id:"exclusive-content",title:"Exclusive Content",sidebar_label:"Exclusive content"},c={unversionedId:"exclusive-content",id:"exclusive-content",isDocsHomePage:!1,title:"Exclusive Content",description:"One of the perks of Web Monetization is that its JavaScript API can be used to make your page respond to Web Monetization. You can reward the people who support your site by giving web monetized viewers exclusive content.",source:"@site/docs/exclusive-content.md",slug:"/exclusive-content",permalink:"/docs/exclusive-content",editUrl:"https://github.com/WICG/webmonetization/tree/master/docs/exclusive-content.md",version:"current",sidebar_label:"Exclusive content",sidebar:"docs",previous:{title:"JavaScript API",permalink:"/docs/api"},next:{title:"Remove Ads",permalink:"/docs/remove-ads"}},s=[{value:"A basic example",id:"a-basic-example",children:[{value:"Code",id:"code",children:[]},{value:"How does it work?",id:"how-does-it-work",children:[]},{value:"Interactive example",id:"interactive-example",children:[]}]},{value:"A complete example",id:"a-complete-example",children:[{value:"Code",id:"code-1",children:[]},{value:"How does it work?",id:"how-does-it-work-1",children:[]},{value:"Interactive example",id:"interactive-example-1",children:[]}]}],l={rightToc:s};function d(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(i.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"One of the perks of Web Monetization is that its JavaScript API can be used to make your page respond to Web Monetization. You can reward the people who support your site by giving web monetized viewers exclusive content."),Object(a.b)("h2",{id:"a-basic-example"},"A basic example"),Object(a.b)("p",null,"Web Monetization makes providing exclusive content easy! This is a very simple example of showing exclusive content only to web monetized visitors:"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},Object(a.b)("strong",{parentName:"p"},"Careful!")," These examples hide content on the client side. A clever user\ncould pretend to be web monetized by using the developer console. Examples on\nhow to verify Web Monetization from the server side will come soon.")),Object(a.b)("h3",{id:"code"},"Code"),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-html"}),'<head>\n  \x3c!-- this should be set to your own payment pointer --\x3e\n  <meta name="monetization" content="$wallet.example.com/alice">\n\n  <style>\n    .hidden {\n      display: none;\n    }\n  </style>\n\n  <script>\n    if (document.monetization) {\n      document.monetization.addEventListener(\'monetizationstart\', () => {\n        document.getElementById(\'exclusive\').classList.remove(\'hidden\')\n      })\n    }\n  <\/script>\n</head>\n\n<body>\n  <p>\n    Content will appear below here if you are Web monetized.\n  </p>\n  <hr />\n  <div id="exclusive" class="hidden">\n    Here\'s some exclusive content!\n  </div>\n</body>\n')),Object(a.b)("h3",{id:"how-does-it-work"},"How does it work?"),Object(a.b)("p",null,"There's only three things this code does. The code is encompassed in the ",Object(a.b)("inlineCode",{parentName:"p"},"<script>")," tag."),Object(a.b)("p",null,"First, we check whether ",Object(a.b)("inlineCode",{parentName:"p"},"document.monetization")," exists in the browser. If it doesn't exist, then we can't listen for the ",Object(a.b)("inlineCode",{parentName:"p"},"monetizationstart")," event to tell us when Web Monetization initializes."),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-js"}),"if (document.monetization) {\n")),Object(a.b)("p",null,"Next, we add an event listener to the ",Object(a.b)("inlineCode",{parentName:"p"},"document.monetization")," object. The\n",Object(a.b)("inlineCode",{parentName:"p"},"monetizationstart")," event is emitted when Web Monetization initializes and\nthe state goes from ",Object(a.b)("inlineCode",{parentName:"p"},"pending")," to ",Object(a.b)("inlineCode",{parentName:"p"},"started"),"."),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-js"}),"document.monetization.addEventListener('monetizationstart', () => {\n")),Object(a.b)("p",null,"Finally, we select our exclusive content element and make it visible. We defined a CSS class that made it hidden, so removing that class will make it visible. If you want to do something else when Web Monetization starts, you can replace this line. You can trigger any JavaScript, so the sky's the limit."),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-js"}),"document.getElementById('exclusive').classList.remove('hidden')})\n}\n")),Object(a.b)("h3",{id:"interactive-example"},"Interactive example"),Object(a.b)("p",null,"This example simulates showing exclusive content to a web monetized visitor and hiding the content from a non-web monetized visitor. The example doesn't require you to have Web Monetization enabled in your browser. No real payments are occurring."),Object(a.b)("p",null,"Click the ",Object(a.b)("strong",{parentName:"p"},"View as Web Monetized/non-Web Monetized visitor")," button to toggle your monetization state."),Object(a.b)("p",null,"If you see the source files instead of the example, click ",Object(a.b)("strong",{parentName:"p"},"View App")," in the bottom right."),Object(a.b)("div",{class:"glitch-embed-wrap",style:{height:"420px",width:"100%"}},Object(a.b)("iframe",{src:"https://glitch.com/embed/#!/embed/wm-exclusive-content-basic?path=README.md&previewSize=100",title:"wm-exclusive-content-basic on Glitch",allow:"geolocation; microphone; camera; midi; vr; encrypted-media",style:{height:"100%",width:"100%",border:"0"}})),Object(a.b)("h2",{id:"a-complete-example"},"A complete example"),Object(a.b)("p",null,"In reality, your requirements will be a little more complex. You should:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Show web monetized visitors an indicator while they wait for Web Monetization to initialize."),Object(a.b)("li",{parentName:"ul"},"Tell non-web-monetized visitors that there's exclusive content they can get.")),Object(a.b)("p",null,"This means there's three states in total:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Show a call-to-action to a non-web-monetized visitor"),Object(a.b)("li",{parentName:"ul"},"Show a loading message to a web monetized visitor"),Object(a.b)("li",{parentName:"ul"},"Show exclusive content to a web monetized visitor")),Object(a.b)("h3",{id:"code-1"},"Code"),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-html"}),"<head>\n  \x3c!-- this should be set to your own payment pointer --\x3e\n  <meta name=\"monetization\" content=\"$wallet.example.com/alice\">\n\n  <style>\n    .hidden {\n      display: none;\n    }\n  </style>\n\n  <script>\n    function showExclusiveContent () {\n      document.getElementById('exclusive').classList.remove('hidden')\n      document.getElementById('loading').classList.add('hidden')\n      document.getElementById('cta').classList.add('hidden')\n    }\n\n    function showCTA () {\n      document.getElementById('loading').classList.add('hidden')\n      document.getElementById('cta').classList.remove('hidden')\n    }\n\n    function showLoading () {\n      document.getElementById('loading').classList.remove('hidden')\n    }\n\n    if (document.monetization) {\n      document.monetization.addEventListener('monetizationstart', () => {\n        showExclusiveContent()\n      })\n    }\n\n    window.addEventListener('load', () => {\n      if (!document.monetization) {\n        showCTA()\n      } else {\n        showLoading()\n      }\n    })\n  <\/script>\n</head>\n\n<body>\n  <div id=\"loading\" class=\"hidden\">\n    Loading exclusive content...\n  </div>\n\n  <div id=\"exclusive\" class=\"hidden\">\n    Here's some exclusive content!\n  </div>\n\n  <div id=\"cta\" class=\"hidden\">\n    Please install a Web Monetization extension to support me!\n  </div>\n</body>\n")),Object(a.b)("h3",{id:"how-does-it-work-1"},"How does it work?"),Object(a.b)("p",null,"We have three functions to activate our three different states: ",Object(a.b)("inlineCode",{parentName:"p"},"showLoading")," displays the loader, ",Object(a.b)("inlineCode",{parentName:"p"},"showCTA")," displays the call-to-action to get web monetized, and ",Object(a.b)("inlineCode",{parentName:"p"},"showExclusiveContent")," shows the exclusive content. This works just like the ",Object(a.b)("a",Object(i.a)({parentName:"p"},{href:"#a-basic-example"}),"basic example")," where we turn the ",Object(a.b)("inlineCode",{parentName:"p"},"hidden")," class on/off for our ",Object(a.b)("inlineCode",{parentName:"p"},"div"),"s."),Object(a.b)("p",null,"When the visitor is web monetized, we listen for the ",Object(a.b)("inlineCode",{parentName:"p"},"monetizationstart")," event. Just like the previous example, this event will show the exclusive content when it's triggered and hide the other ",Object(a.b)("inlineCode",{parentName:"p"},"div"),"s."),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-js"}),"if (document.monetization) {\n  document.monetization.addEventListener('monetizationstart', () => {\n    showExclusiveContent()\n  })\n}\n")),Object(a.b)("p",null,"When the page loads, we check whether Web Monetization exists in the visitor's browser."),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-js"}),"window.addEventListener('load', () => {\n")),Object(a.b)("p",null,"If the visitor doesn't have Web Monetization, then we show the CTA right\naway. If the visitor does have Web Monetization, we show the loader\nright away."),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-js"}),"if (!document.monetization) {\n  showCTA()\n} else {\n  showLoading()\n}\n")),Object(a.b)("h3",{id:"interactive-example-1"},"Interactive example"),Object(a.b)("p",null,'This example simulates showing and hiding content based on whether your visitor is web monetized. Web monetized visitors will see exclusive content that\'s hidden from non-web monetized viewers. Non-web monetized visitors will see the message, "Please install a Web Monetization extension to support me", which is hidden from web monetized visitors.'),Object(a.b)("p",null,"The example doesn't require you to have Web Monetization enabled in your browser. No real payments are occurring."),Object(a.b)("p",null,"Click the ",Object(a.b)("strong",{parentName:"p"},"View as Web Monetized/non-Web Monetized visitor")," button to toggle your monetization state."),Object(a.b)("p",null,"If you see the source files instead of the example, click ",Object(a.b)("strong",{parentName:"p"},"View App")," in the bottom right."),Object(a.b)("div",{class:"glitch-embed-wrap",style:{height:"420px",width:"100%"}},Object(a.b)("iframe",{src:"https://glitch.com/embed/#!/embed/wm-exclusive-content-advanced?path=README.md&previewSize=100",title:"wm-exclusive-content-advanced on Glitch",allow:"geolocation; microphone; camera; midi; vr; encrypted-media",style:{height:"100%",width:"100%",border:"0"}})))}d.isMDXComponent=!0},88:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return u}));var i=n(0),o=n.n(i);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),d=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=d(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},p=o.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,r=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=d(n),p=i,u=b["".concat(r,".").concat(p)]||b[p]||m[p]||a;return n?o.a.createElement(u,c(c({ref:t},l),{},{components:n})):o.a.createElement(u,c({ref:t},l))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,r=new Array(a);r[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,r[1]=c;for(var l=2;l<a;l++)r[l]=n[l];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);