"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[327],{2408:function(t,e,n){n.r(e),n.d(e,{default:function(){return N}});var a=n(885),r=n(168),s=n(2791),o=n(6444),i=n(5718),c=n(918),l=n(1413),u=n(4572),h=n(2982),d=(n.p,function(t){var e=[].concat([{name:"ls",description:"lists directory content"},{name:"cd",description:"changes the current working directory"},{name:"clear",description:"clears the terminal screen"}],(0,h.Z)(t.map((function(t){var e=" ";return t.subPathStrict[0]&&(e+=t.subPathStrict[1].name),{name:t.name[0]+e,description:t.description}})))),n=function(t){var e=t.map((function(t){return t.name.length})),n=Math.max.apply(Math,(0,h.Z)(e));return t.map((function(t){return Array(n-t.name.length+1).join(" ")+"\t"}))}(e),a="These shell commands are defined internally.\nType <span class=\"style2\">'help'</span> to see this list.\n\n";return e.forEach((function(t,e){var r='<span class="style2">'.concat(t.name,"</span>").concat(n[e]).concat(t.description,"\n");a+=r})),"".concat(a,'\nAnd more "hidden" commands...')}),p=[{name:["resume","./resume","resume.sh","./resume.sh"],action:"<a href",response:"",subPathStrict:[!1],description:"view my resume"},{name:["github","git",".github"],action:!0,response:'Visit: <a href="https://github.com/Kirill-Makienko-Tkachenko">my github @Kirill-Makienko-Tkachenko </a> (Click my name, its a link)',subPathStrict:[!1],description:"checkout my github profile"},{name:["linkedin"],action:!0,response:'Visit: <a href="https://www.linkedin.com/in/kirill-m-t/">LinkedIn</a> (Click on the text, its a link)',subPathStrict:[!1],description:"checkout my linkedIn profile"},{name:["projects","./projects","projects.app","./projects.app"],action:!1,response:"Page Under Development \ud83d\udea7\ud83d\udd28 | For the moment I\xb4ll list the main projects I worked on \n <h1>NASA HUMAN EXPLORATION ROVER CHALLENGE</h1> \n - I worked on the telemetry team in front and back teams of the main page, but mainly I worked on deploying everything on self hosted servers and trying the connection between the sensors and the Database \n <h1>SERVIDORES EL RUSO</h1> \n - This is my very own startup and the project ive sunken the most of my time for the last copule of years. Its main objective is to provide game servers for players in M\xe9xico and central america for them to not rely on server located  ",subPathStrict:[!1],description:"checkout my projects"},{name:["whoami"],action:!0,response:"I'm Kirill Makienko, a 19-year-old Computer Science student in my third semester @ Tec de Monterrey. I have a passion for learning, accompanied by proven leadership and communication skills. I'm multilingual, fluent in Spanish, English and Russian, I know basic German and French. I've achieved international recognition for various audio-visual productions and have contributed to this domain professionally for over five years. And it goes without saying that I love animals",subPathStrict:[!1],description:"displays my information"},{name:["fetchme"],action:!1,response:"<pre>".concat('\n<span class="style2">Kirill</span>@<span class="style2">Desktop</span>\n-----------------\n<span class="style2"></span><span class="style4">Name: </span><span class="style1">Kirill Makienko</span>\n<span class="style2"></span><span class="style4">Education: </span><span class="style1"><a href="https://tec.mx/es/computacion-y-tecnologias-de-informacion/ingeniero-en-tecnologias-computacionales">B.S. Computer Science @ Tecnologico de Monterrey (ITESM) Campus Cuernavaca</a></span>\n<span class="style2"></span><span class="style4">GPA: </span><span class="style1">9.2/10 </span>\n<span class="style2"></span><span class="style4">Interests: </span><span class="style1">Web-Dev / DevOps / Data Science / Android</span>\n<span class="style2"></span><span class="style4">Socials: </span><span class="style2"> <a target="_blank" href="https://www.linkedin.com/in/kirill-m-t/">LinkedIn</a> <span class="style1">/</span> <a target="_blank" href="https://github.com/Kirill-Makienko-Tkachenko">Github</a></span></span>\n<span class="style2"></span><span class="style4">Contacts: </span><span class="style2"><a target="_blank" href="mailto:elchiqvo@gmail.com?subject=%5BPortfolio%5D&body=Hey%20Aditya!%0D%0A%0D%0AHere\'s%20some%20remarks%20about%20your%20website%3A%20%3Cinsert%20your%20thoughts%20here%20%F0%9F%98%B3%3E%0D%0A%0D%0AFrom%20%3Cinsert%20your%20name%20here%3E">Email</a> <span class="style1">/</span> <a href="https://discord.gg/faUUsBkY6r">Discord</a></span>\n<span class="style4">Danger Zone: </span><span class="style7"><a target="_blank" href="/danger-zone">Do not click this</a></span>\n\n',"</pre>"),subPathStrict:[!1],description:"fetches my information in a cool way"},{name:["code"],action:!0,response:"",subPathStrict:[!0,{name:".",response:""}],description:"opens a VS code window for this website's source code"},{name:["happiness"],action:!0,response:"",subPathStrict:[!1],description:'<span class="">close your Eyes</span>'},{name:["git"],action:!0,response:"",subPathStrict:[!0,{name:"log",response:""}],description:"lists my github projects"},{name:["help"],action:!0,response:"",subPathStrict:[!1],description:"displays detailed information about the commands"},{name:["credits"],action:!0,response:"Just a heads up, I didn't create site, I took this site as a template from this guy here <a href='https://github.com/adityassharma-ss'> Aditya Sharma</a>, and particularly from this <a href='https://github.com/adityassharma-ss/aditya?ref=reactjsexample.com'> project (I'm clickable) </a>",subPathStrict:[!1],description:"Credits for the creation of the page"}];p=p.map((function(t){return"help"===t.name[0]&&(t.response="<pre>".concat(d(p),"</pre>")),t}));var m,f,b,y,g,k,v,Z,w,x,S=[{name:".github",link:"https://github.com/Kirill-Makienko-Tkachenko",folder:!0,executable:!1},{name:"src",link:"https://github.com/Kirill-Makienko-Tkachenko",folder:!0,executable:!1},{name:"resume.sh",link:"",folder:!1,executable:!0},{name:"projects.app",link:"",folder:!1,executable:!0}],P=(0,l.Z)((0,l.Z)({ls:{validArgs:{"/":{action:null,response:"ls: cannot access System Volume Information: Permission Denied"},_dir:{action:null,response:(m=S,m.map((function(t){return'<span class="'.concat(t.folder?"style3":"".concat(t.executable?"style2":"style1"),'">').concat(t.link?'<a target="_blank" href="'.concat(t.link,'">').concat(t.name,"</a>"):"".concat(t.name),"</span>")})).join("  "))},default:{action:null,response:"ls: cannot access %arg%: Permission Denied"}}},cd:{validArgs:function(t){var e={_dir:{action:null,response:""},default:{action:null,response:"cd: cannot access %arg%: Permission Denied"},"~":{action:null,response:""}},n={};return t.forEach((function(t){n[t.name]={action:t.folder?{PATH:t.link}:null,response:t.folder?"":"zsh: cd: %arg%: Not a directory"}})),Object.keys(e).forEach((function(t){n[t]=e[t]})),n}(S)}},function(t){var e={};return t.forEach((function(t){var n={};t.name.forEach((function(a){var r=t.action?(0,u.Z)({},t.name[0].toUpperCase(),""):null,s=t.response;n=(0,u.Z)({},a,{validArgs:{_dir:{action:r,response:s},default:{action:r,response:s}}}),t.subPathStrict[0]&&(n[a].validArgs[t.subPathStrict[1].name]={action:r,response:t.subPathStrict[1].response}),e=(0,l.Z)((0,l.Z)({},n),e)}))})),e}(p)),function(t){var e={};return t.forEach((function(t){var n={};t.name.forEach((function(a){var r=t.action?(0,u.Z)({},t.name[0].toUpperCase(),""):null,s=t.response;n=(0,u.Z)({},a,{validArgs:{_dir:{action:r,response:s},default:{action:r,response:s}}}),t.subPathStrict[0]&&(n[a].validArgs[t.subPathStrict[1].name]={action:r,response:t.subPathStrict[1].response}),e=(0,l.Z)((0,l.Z)({},n),e)}))})),e}([{name:["fox"],action:"<a href",response:"Im a Fox \ud83e\udd8a",subPathStrict:[!1],description:"fox"}])),E=P,A=n(8703),j=n(184),D=o.ZP.span(f||(f=(0,r.Z)(["\n\ta {\n\t\tcolor: inherit;\n\t\tbackground: inherit;\n\t\ttext-decoration: none;\n\t}\n\t.style1 {\n\t\tcolor: ",";\n\t}\n\t.style2 {\n\t\tcolor: ",";\n\t}\n\t.style3 {\n\t\tcolor: ",";\n\t\tbackground: ",";\n\t}\n\t.style4 {\n\t\tcolor: ",";\n\t}\n\t.style5 {\n\t\tcolor: ",";\n\t}\n\t.style6 {\n\t\tcolor: ",";\n\t}\n\t.style7 {\n\t\tbackground: ",";\n\t\tbackground-size: 1800% 1800%;\n\t\tanimation: rainbow 15s ease infinite;\n\n\t\t@keyframes rainbow {\n\t\t\t0% {\n\t\t\t\tbackground-position: 0% 82%;\n\t\t\t}\n\t\t\t50% {\n\t\t\t\tbackground-position: 100% 19%;\n\t\t\t}\n\t\t\t100% {\n\t\t\t\tbackground-position: 0% 82%;\n\t\t\t}\n\t\t}\n\t\tcolor: ",";\n\t}\n"])),c.Z.bodyFont1,c.Z.bodyFont2,c.Z.bodyFont2.darken(.75),c.Z.bodyFont1,c.Z.bodyFont3,c.Z.bodyFont4,c.Z.bodyFont5,c.Z.easterEgg,c.Z.bodyFont4),C=function(t){var e=(0,s.useContext)(i.Z).setAlertHidden;return(0,s.useEffect)((function(){if(t.action)switch(Object.keys(t.action)[0]){case"PATH":window.open(t.action.PATH);break;case"CODE":document.location.href="/vscode";break;case"DANGER":document.location.href="/danger-zone";break;case"QEMU":document.location.href="/qemu";break;case"RESUME":document.location.href="/resume";break;case"PROJECTS":document.location.href="/projects";break;case"GIT":document.location.href="/git";break;case"HELP":e(!0);break;case"FOX":document.location.href="/animals"}}),[]),(0,j.jsx)(j.Fragment,{})},I=function(t){var e,n=t.split(" ");if(E.hasOwnProperty(n[0])){var a="",r="";return r=a=1===n.length?"_dir":E[n[0]].validArgs.hasOwnProperty(n[1])?n[1]:"default","default"===a&&(r=n[1]),function(t,e){var n=e.data,a=t.response;return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(C,{action:t.action}),(0,j.jsx)(D,{dangerouslySetInnerHTML:{__html:a.replace(/%arg%/g,'<span class="style2">'.concat((0,A.sanitize)(n),"</span>"))}})]})}(E[n[0]].validArgs[a],{data:r})}return e=t,(0,j.jsxs)(D,{children:["zsh: command not found:"," ",(0,j.jsx)("span",{className:"style2",children:(0,A.sanitize)(e)})]})},T=n(6746),F=n(4358),M=(n(7032),(0,o.ZP)(F.Z)(b||(b=(0,r.Z)(['\n\tfont-family: "Hack", monospace;\n\tcolor: ',";\n\t.simplebar-scrollbar:before {\n\t\tborder-radius: 10px;\n\t\tbackground-color: ",";\n\t}\n\tpadding: 0.2rem 0.4rem 0 0.4rem;\n\tline-height: 1.5;\n\twidth: 100%;\n\tmax-height: 80vh;\n\toverflow-x: hidden;\n"])),c.Z.bodyFont1,c.Z.scrollbarThumb)),H=(0,o.ZP)(F.Z)(y||(y=(0,r.Z)(["\n\t// white-space: pre;\n\toverflow: auto;\n\t.simplebar-scrollbar:before {\n\t\tborder-radius: 10px;\n\t\tbackground-color: ",";\n\t}\n\t// &::-webkit-scrollbar-track {\n\t// \tborder-radius: 10px;\n\t// \tbackground-color: inherit;\n\t// }\n\n\t// &::-webkit-scrollbar {\n\t// \twidth: 0.1rem;\n\t// \theight: 0.5rem;\n\t// \tbackground-color: inherit;\n\t// }\n\n\t// &::-webkit-scrollbar-thumb {\n\t// \tborder-radius: 10px;\n\t// \tbackground-color: ",";\n\t// }\n"])),c.Z.scrollbarThumb,c.Z.scrollbarThumb),L=o.ZP.input(g||(g=(0,r.Z)(["\n\tfont-family: inherit;\n\tbackground: inherit;\n\tfont-size: inherit;\n\tcolor: inherit;\n\tborder: none;\n\toutline: none;\n\tcaret-color: transparent;\n\twidth: 0;\n\tmax-width: 100ch;\n\t&::selection {\n\t\tcolor: ",";\n\t\tbackground: ",";\n\t}\n"])),c.Z.bodyBg,c.Z.bodyBg.negate()),_=o.ZP.span(k||(k=(0,r.Z)(["\n\tdisplay: flex;\n"]))),O=(0,o.F4)(v||(v=(0,r.Z)(["\n\tfrom, to {\n\t\tbackground: ",";\n\t}\n\n\t50% {\n\t\tbackground: transparent;\n\t}\n"])),c.Z.bodyFont1),R=(0,o.iv)(Z||(Z=(0,r.Z)(["\n\tanimation: "," 1s step-end infinite;\n"])),O),X=o.ZP.div(w||(w=(0,r.Z)(["\n\tdisplay: ",";\n\twidth: 1ch;\n\tbackground: ",";\n\tmargin: 0.1rem 0.3rem;\n\tz-index: 2;\n\t","\n"])),(function(t){return t.disabled?"none":"auto"}),c.Z.bodyFont1,(function(t){return!t.typing&&R})),z=o.ZP.label(x||(x=(0,r.Z)(["\n\tcolor: ",";\n"])),c.Z.labelColor),K=function(t){var e=(0,s.useState)(""),n=(0,a.Z)(e,2),r=n[0],o=n[1],c=(0,s.useContext)(i.Z),l=c.commands,u=c.setCommand,h=c.path,d=(0,s.useState)(l.length),p=(0,a.Z)(d,2),m=p[0],f=p[1],b=(0,s.useState)(!1),y=(0,a.Z)(b,2),g=y[0],k=y[1],v=(0,s.useState)(!1),Z=(0,a.Z)(v,2),w=Z[0],x=Z[1],S=(0,s.useRef)(),P=(0,s.useRef)(),E=localStorage.getItem("hideHelp");return(0,s.useEffect)((function(){w||(S.current.focus(),S.current.addEventListener("select",(function(t){t.target.selectionStart=t.target.selectionEnd})),S.current.addEventListener("mousedown",(function(t){t.preventDefault()})))}),[]),(0,s.useEffect)((function(){if(!E){var t=new Date,e=setInterval((function(){var e=Math.floor((new Date-t)/1e3);5!==Math.floor(e/60)||w||(o("help"),S.current.style.width=S.current.value.length+"ch")}),1e3);return function(){clearInterval(e)}}}),[w,E]),(0,s.useEffect)((function(){var t=setTimeout((function(){return k(!1)}),200);return function(){return clearTimeout(t)}}),[g]),(0,j.jsxs)(_,{children:[(0,j.jsx)(z,{htmlFor:"input",dangerouslySetInnerHTML:{__html:(0,A.sanitize)(h)}}),(0,j.jsx)(L,{id:"input",type:"text",ref:S,value:r,onBlur:function(t){w||t.target.focus()},onKeyDown:function(e){var n=!1;e.ctrlKey&&(n=!0);var a=parseFloat(P.current.style.transform.slice(11)),s=S.current.value.length,i=Math.abs(Math.floor(a));switch(e.key){case"ArrowLeft":i<=s&&!n?(k(!0),P.current.style.transform="translateX(".concat(a-1,"ch)")):e.preventDefault();break;case"Delete":1===i||n?e.preventDefault():P.current.style.transform="translateX(".concat(a+1,"ch)");break;case"Home":i<=s?P.current.style.transform="translateX(".concat(-s-.5,"ch)"):e.preventDefault();break;case"End":1!==i?P.current.style.transform="translateX(-0.5ch)":e.preventDefault();break;case"ArrowRight":1===i||n?e.preventDefault():(k(!0),P.current.style.transform="translateX(".concat(a+1,"ch)"));break;case"ArrowUp":if(m>0){f(m-1);var c=l[m-1];o(c),e.target.style.width=c.length+"ch",P.current.style.transform="translateX(".concat(-c.length-.5,"ch)")}break;case"ArrowDown":if(m<=l.length-1)if(m===l.length-1)o(""),e.target.style.width="0ch",P.current.style.transform="translateX(-0.5ch)";else{f(m+1);var h=l[m+1];o(h),e.target.style.width=h.length+"ch",P.current.style.transform="translateX(".concat(-h.length-.5,"ch)")}break;case"Enter":x(!0),t.setData(r),t.setChild(t.child+1),u(r)}},onChange:function(t){t.preventDefault(),t.target.value.length<=100&&(o(t.target.value.toLowerCase()),k(!0),t.target.style.width=t.target.value.length+"ch")},spellCheck:!1,autoComplete:"off",autoCorrect:"off"}),(0,j.jsx)(X,{ref:P,typing:g,disabled:w,style:{transform:"translateX(-0.5ch)"}})]})},U=function(t){return(0,j.jsx)(H,{children:t.content})},B=function(t){var e=(0,s.useState)(""),n=(0,a.Z)(e,2),r=n[0],o=n[1],i=(0,s.useState)(""),c=(0,a.Z)(i,2),l=c[0],u=c[1];return(0,s.useEffect)((function(){if(l.length){"clear"===l.trim().toLowerCase()&&(t.setActive(!1),t.setChild(1));var e=I(l.trim());o(e)}}),[l,t]),(0,j.jsxs)(M,{children:[(0,j.jsx)(K,{setChild:t.setChild,child:t.child,setData:u,path:t.path}),(0,j.jsx)(U,{content:r})]})},N=function(){var t=(0,s.useState)(1),e=(0,a.Z)(t,2),n=e[0],r=e[1],o=(0,s.useState)(!0),i=(0,a.Z)(o,2),c=i[0],l=i[1];return(0,s.useEffect)((function(){l(!0)}),[c]),(0,j.jsx)(T.Z,{children:(0,j.jsx)(M,{children:Array.from(Array(n).keys()).map((function(t){return(0,j.jsx)(B,{setChild:r,setActive:l,child:n},0===t?c&&t:t)}))})})}},6746:function(t,e,n){var a,r=n(168),s=(n(2791),n(6444)),o=n(918),i=n(184),c=s.ZP.div(a||(a=(0,r.Z)(["\n\tdisplay: flex;\n\tflex: 1;\n\tmax-width: 100%;\n\tmin-height: 32rem;\n\theight: 100%;\n\tborder-radius: 0 0 0.3rem 0.3rem;\n\tborder: 1px solid ",";\n"])),o.Z.bodyBorder);e.Z=function(t){return(0,i.jsx)(c,{children:t.children})}}}]);
//# sourceMappingURL=327.583263be.chunk.js.map