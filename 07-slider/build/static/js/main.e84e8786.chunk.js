(this["webpackJsonp07-slider"]=this["webpackJsonp07-slider"]||[]).push([[0],{12:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var i=a(2),s=a.n(i),c=a(6),n=a.n(c),r=(a(12),a(5)),l=[{id:1,image:"https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg",name:"maria ferguson",title:"office manager",quote:"Fingerstache umami squid, kinfolk subway tile selvage tumblr man braid viral kombucha gentrify fanny pack raclette pok pok mustache."},{id:2,image:"https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",name:"john doe",title:"regular guy",quote:"Gastropub sustainable tousled prism occupy. Viral XOXO roof party brunch actually, chambray listicle microdosing put a bird on it paleo subway tile squid umami."},{id:3,image:"https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959121/person-1_aufeoq.jpg",name:"peter smith",title:"product designer",quote:"Drinking vinegar polaroid street art echo park, actually semiotics next level butcher master cleanse hammock flexitarian ethical paleo."},{id:4,image:"https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",name:"susan andersen",title:"the boss",quote:"Marfa af yr 3 wolf moon kogi, readymade distillery asymmetrical seitan kale chips fingerstache cloud bread mustache twee messenger bag. "}],o=a(4),u=a(7),m=a(1);var d=function(){var e=Object(i.useState)(l),t=Object(r.a)(e,2),a=t[0],s=(t[1],Object(i.useState)(0)),c=Object(r.a)(s,2),n=c[0],d=c[1];return Object(i.useEffect)((function(){var e=a.length-1;n<0&&d(e),n>e&&d(0)}),[n,a]),Object(i.useEffect)((function(){var e=setInterval((function(){d(n+1)}),3e3);return function(){return clearInterval(e)}}),[n]),Object(m.jsxs)("section",{className:"section",children:[Object(m.jsx)("div",{className:"title",children:Object(m.jsxs)("h2",{children:[Object(m.jsx)("span",{children:"/"}),"reviews"]})}),Object(m.jsxs)("div",{className:"section-center",children:[a.map((function(e,t){var i=e.id,s=e.image,c=e.name,r=e.title,l=e.quote,o="nextSlide";return t===n&&(o="activeSlide"),(t===n-1||0===n&&t===a.length-1)&&(o="lastSlide"),Object(m.jsxs)("article",{className:o,children:[Object(m.jsx)("img",{src:s,alt:c,className:"person-img"}),Object(m.jsx)("h4",{children:c}),Object(m.jsx)("p",{className:"title",children:r}),Object(m.jsx)("p",{className:"text",children:l}),Object(m.jsx)(u.a,{className:"icon"})]},i)})),Object(m.jsx)("button",{className:"prev",onClick:function(){return d(n-1)},children:Object(m.jsx)(o.a,{})}),Object(m.jsx)("button",{className:"next",onClick:function(){return d(n+1)},children:Object(m.jsx)(o.b,{})})]})]})};n.a.render(Object(m.jsx)(s.a.StrictMode,{children:Object(m.jsx)(d,{})}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.e84e8786.chunk.js.map