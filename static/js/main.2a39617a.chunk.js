(this["webpackJsonpreact_dynamic-list-of-posts"]=this["webpackJsonpreact_dynamic-list-of-posts"]||[]).push([[0],[,,,,,,,,,function(e,t,n){e.exports=n(21)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(8),s=n.n(c),o=n(3),l=(n(14),n(15),n(16),n(1)),u=n.n(l),i=n(2),m=function(e,t){return fetch("".concat("https://mate.academy/students-api/").concat(e),t).then((function(e){return e.json()}))},p=function(){var e=Object(i.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m("posts");case 2:return n=e.sent,e.abrupt("return",n.filter((function(e){return+t?e.userId===+t:e})));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=Object(i.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m("posts/".concat(t));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=(n(18),function(){return r.a.createElement("div",{className:"Loader"},r.a.createElement("div",{className:"Loader__content"}))}),b=function(e){var t=e.userId,n=e.setPostId,c=e.postId,s=Object(a.useState)(null),l=Object(o.a)(s,2),u=l[0],i=l[1];return Object(a.useEffect)((function(){p(t).then(i)}),[t]),u?r.a.createElement("div",{className:"PostsList"},r.a.createElement("h2",null,"Posts: ".concat(u.length)),r.a.createElement("ul",{className:"PostsList__list"},u.map((function(e){return r.a.createElement("li",{className:"PostsList__item",key:e.id},r.a.createElement("div",null,r.a.createElement("b",null,"[User #".concat(e.userId,"]: ")),e.title),c!==e.id?r.a.createElement("button",{type:"button",className:"PostsList__button button",onClick:function(){return n(e.id)}},"Open"):r.a.createElement("button",{type:"button",className:"button",onClick:function(){return n(null)}},"Close"))})))):r.a.createElement(d,null)};b.defaultProps={postId:null};var E=n(5),v=n.n(E),h=n(6),_=n(4),N=(n(19),function(){var e=Object(i.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m("comments/");case 2:return n=e.sent,e.abrupt("return",n.filter((function(e){return e.postId===t})));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),O=function(){var e=Object(i.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m("comments/",{method:"POST",body:JSON.stringify(t)});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),j=function(){var e=Object(i.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m("comments/".concat(t),{method:"DELETE"});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),y={name:"",email:"",body:""},w=function(e){var t=e.postId,n=e.setComments,c=Object(a.useState)(y),s=Object(o.a)(c,2),l=s[0],m=s[1],p=l.name,f=l.email,d=l.body,b=function(){var e=Object(i.a)(u.a.mark((function e(a){var r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),!(p&&f&&d)){e.next=9;break}return e.next=4,O(Object(_.a)(Object(_.a)({},l),{},{postId:t}));case 4:return e.next=6,N(t);case 6:r=e.sent,n(r),m(y);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),E=function(e){var t=e.target,n=t.value,a=t.name;m(Object(_.a)(Object(_.a)({},l),{},Object(h.a)({},a,n.trimStart())))};return r.a.createElement("form",{className:"NewCommentForm",onSubmit:b},r.a.createElement("div",{className:"form-field"},r.a.createElement("input",{type:"text",name:"name",placeholder:"Your name",className:"NewCommentForm__input",value:p,onChange:E})),r.a.createElement("div",{className:"form-field"},r.a.createElement("input",{type:"text",name:"email",placeholder:"Your email",className:"NewCommentForm__input",value:f,onChange:E})),r.a.createElement("div",{className:"form-field"},r.a.createElement("textarea",{name:"body",placeholder:"Type comment here",className:"NewCommentForm__input",value:d,onChange:E})),r.a.createElement("button",{type:"submit",className:v()("NewCommentForm__submit-button button",{visible:p&&f&&d})},"Add a comment"))},x=(n(20),function(e){var t=e.postId,n=Object(a.useState)(null),c=Object(o.a)(n,2),s=c[0],l=c[1],m=Object(a.useState)(null),p=Object(o.a)(m,2),b=p[0],E=p[1],h=Object(a.useState)(!1),_=Object(o.a)(h,2),O=_[0],y=_[1];return Object(a.useEffect)((function(){f(t).then(l),N(t).then(E)}),[t]),b&&s?r.a.createElement("div",{className:"PostDetails"},r.a.createElement("h2",null,"Post details:"),r.a.createElement("h3",null,s.title),r.a.createElement("section",{className:"PostDetails__post"},r.a.createElement("p",null,s.body)),r.a.createElement("section",{className:"PostDetails__comments"},b&&r.a.createElement("button",{type:"button",className:v()("button",{visible:b.length>0}),onClick:function(){return y(!O)}},"".concat(O?"Hide":"Show"," ").concat(b.length," comments")),r.a.createElement("ul",{className:"PostDetails__list"},O&&b.map((function(e){return r.a.createElement("li",{className:"PostDetails__list-item",key:e.id},r.a.createElement("button",{type:"button",className:"PostDetails__remove-button button",onClick:Object(i.a)(u.a.mark((function n(){return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,j(e.id);case 2:N(t).then(E);case 3:case"end":return n.stop()}}),n)})))},"X"),r.a.createElement("p",null,e.body))})))),r.a.createElement("section",null,r.a.createElement("div",{className:"PostDetails__form-wrapper"},r.a.createElement(w,{postId:t,setComments:E})))):r.a.createElement(d,null)}),C=function(){var e=Object(a.useState)(""),t=Object(o.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)(null),l=Object(o.a)(s,2),u=l[0],i=l[1];return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App__header"},r.a.createElement("label",null,"Select a user: \xa0",r.a.createElement("select",{className:"App__user-selector",value:n,onChange:function(e){var t=e.target;return c(t.value)}},r.a.createElement("option",{value:"0"},"All users"),r.a.createElement("option",{value:"1"},"Leanne Graham"),r.a.createElement("option",{value:"2"},"Ervin Howell"),r.a.createElement("option",{value:"3"},"Clementine Bauch"),r.a.createElement("option",{value:"4"},"Patricia Lebsack"),r.a.createElement("option",{value:"5"},"Chelsey Dietrich"),r.a.createElement("option",{value:"6"},"Mrs. Dennis Schulist"),r.a.createElement("option",{value:"7"},"Kurtis Weissnat"),r.a.createElement("option",{value:"8"},"Nicholas Runolfsdottir V"),r.a.createElement("option",{value:"9"},"Glenna Reichert"),r.a.createElement("option",{value:"10"},"Leanne Graham")))),r.a.createElement("main",{className:"App__main"},r.a.createElement("div",{className:"App__sidebar"},r.a.createElement(b,{userId:n,setPostId:i,postId:u})),r.a.createElement("div",{className:"App__content"},u&&r.a.createElement(x,{postId:u}))))};s.a.render(r.a.createElement(C,null),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.2a39617a.chunk.js.map