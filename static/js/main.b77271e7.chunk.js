(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{21:function(e,t,a){e.exports=a(40)},26:function(e,t,a){},27:function(e,t,a){},40:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(11),l=a.n(c),o=(a(26),a(27),a(2)),i=a(3),m=a(5),s=a(4),u=a(6),h=a(1),p=a.n(h),b={name:"chetanverma.",headerTagline:["Hi \ud83d\udc4b You found me! I am Your Name.","Digital designer ","from India"],contactEmail:"hello@chetanverma.com",abouttext:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",aboutImage:"https://images.unsplash.com/photo-1521587765099-8835e7201186?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",ShowAboutImage:!0,projects:[{id:1,title:"Project One",service:"UI/UX Design",imageSrc:"https://images.unsplash.com/photo-1558104631-0fa41a8f6c20?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",url:"http://chetanverma.com/"},{id:2,title:"Project Two",service:"Website Development",imageSrc:"https://images.unsplash.com/photo-1554866585-cd94860890b7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",url:"http://chetanverma.com/"},{id:3,title:"Project Three",service:"Web App",imageSrc:"https://images.unsplash.com/photo-1511500118080-275313ec90a1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",url:"http://chetanverma.com/"},{id:4,title:"Project Four",service:"Branding",imageSrc:"https://images.unsplash.com/photo-1558452919-08ae4aea8e29?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",url:"http://chetanverma.com/"}],social:[{name:"Github",url:"https://github.com/chetanverma16"},{name:"Behance",url:"https://www.behance.net/chetanverma"},{name:"Dribbble",url:"https://dribbble.com/chetanverma"},{name:"Instagram",url:"https://www.instagram.com/cv.uidesign/"}]},d=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",{className:"heading-background"},"CREATIVE"),r.a.createElement("header",null,r.a.createElement("h1",null,r.a.createElement(p.a,{bottom:!0,cascade:!0},b.name))),r.a.createElement(p.a,{bottom:!0},r.a.createElement("p",{className:"header-title"},b.headerTagline[0],r.a.createElement("br",null),b.headerTagline[1],r.a.createElement("br",null),b.headerTagline[2],r.a.createElement("br",null),r.a.createElement("button",null,r.a.createElement("a",{href:"mailto:".concat(b.contactEmail),rel:"noopener noreferrer"},"Contact")))))}}]),t}(n.Component),E=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"about"},r.a.createElement("div",{className:"about-content"},r.a.createElement("h1",null,r.a.createElement(p.a,{bottom:!0,cascade:!0},"About.")),r.a.createElement(p.a,{bottom:!0},r.a.createElement("p",null,b.abouttext))),b.ShowAboutImage?r.a.createElement("img",{src:b.aboutImage,alt:"about iamge"}):null)}}]),t}(n.Component),f=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(p.a,{bottom:!0},r.a.createElement("div",{className:"project"},r.a.createElement("a",{href:this.props.url},r.a.createElement("img",{src:this.props.imageSrc,alt:this.props.title})),r.a.createElement("h1",null,this.props.title),r.a.createElement("span",null,this.props.service)))}}]),t}(n.Component),v=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",{className:"heading"},r.a.createElement(p.a,{bottom:!0,cascade:!0},"Work.")),r.a.createElement("div",{className:"work-content"},b.projects.map(function(e){return r.a.createElement(f,{key:e.id,title:e.title,service:e.service,imageSrc:e.imageSrc,url:e.url})})))}}]),t}(n.Component),g=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,r.a.createElement(p.a,{bottom:!0,cascade:!0}," Contact.")),r.a.createElement(p.a,{bottom:!0},r.a.createElement("div",{className:"contact-content"},r.a.createElement("h1",null,"Let\u2019s create your next",r.a.createElement("br",null),r.a.createElement("span",{className:"amazing-color"},"experience together")),r.a.createElement("a",{href:"mailto:".concat(b.contactEmail),className:"email"},b.contactEmail),r.a.createElement("ul",null,b.social.map(function(e,t){return r.a.createElement("li",{key:t},r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:e.url},e.name))})))),r.a.createElement("span",{className:"footer"},"Made With \u2764 by ",r.a.createElement("a",{href:"http://chetanverma.com/"},"Chetan Verma")))}}]),t}(n.Component),y=a(8),j=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={},a.scrollToTop=function(){y.animateScroll.scrollToTop()},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("nav",null,r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(y.Link,{className:"link",activeClass:"active",to:"homw",spy:!0,smooth:!0,offset:-70,duration:500,onClick:this.scrollToTop},"Home")),r.a.createElement("li",null,r.a.createElement(y.Link,{className:"link",activeClass:"active",to:"About",spy:!0,smooth:!0,offset:-70,duration:500},"About")),r.a.createElement("li",null,r.a.createElement(y.Link,{className:"link",activeClass:"active",to:"work",spy:!0,smooth:!0,offset:-70,duration:500},"Work")),r.a.createElement("li",null,r.a.createElement(y.Link,{className:"link",activeClass:"active",to:"contact",spy:!0,smooth:!0,offset:-70,duration:500},"Contact"))))}}]),t}(n.Component);var w=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(j,null),r.a.createElement("div",{className:"App-header"},r.a.createElement(d,null)),r.a.createElement("div",{className:"About"},r.a.createElement(E,null)),r.a.createElement("div",{className:"work"},r.a.createElement(v,null)),r.a.createElement("div",{className:"contact"},r.a.createElement(g,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[21,1,2]]]);
//# sourceMappingURL=main.b77271e7.chunk.js.map