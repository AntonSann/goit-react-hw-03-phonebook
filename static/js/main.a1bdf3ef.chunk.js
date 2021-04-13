(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{12:function(t,e,n){t.exports={form_button:"ContactForm_form_button__2VwIP"}},13:function(t,e,n){t.exports={button_delete:"ContactList_button_delete__mglEo"}},14:function(t,e,n){t.exports={filter:"Filter_filter__22Rd_"}},30:function(t,e,n){"use strict";n.r(e);var a=n(1),r=n.n(a),c=n(10),i=n.n(c),o=(n(20),n(15)),s=n(11),u=n(5),l=n(6),d=n(8),b=n(7),m=n(32),h=n(4),j=n(2),f=n.n(j),p=n(12),O=n.n(p),C=n(0),g=function(t){Object(d.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={name:"",number:""},t.nameInputId=f.a.generate(),t.numberInputId=f.a.generate(),t.handleChange=function(e){t.setState(Object(h.a)({},e.currentTarget.name,e.currentTarget.value))},t.handleSubmit=function(e){e.preventDefault(),t.props.onSubmit(t.state),t.reset()},t.reset=function(){t.setState({name:"",number:""})},t}return Object(l.a)(n,[{key:"render",value:function(){return Object(C.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(C.jsx)("h1",{children:"Phonebook"}),Object(C.jsxs)("label",{htmlFor:this.nameInputId,children:["Name",Object(C.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:this.state.name,onChange:this.handleChange,id:this.nameInputId})]}),Object(C.jsxs)("label",{htmlFor:this.numberInputId,children:["Number",Object(C.jsx)("input",{type:"tel",name:"number",pattern:"(\\+?( |-|\\.)?\\d{1,2}( |-|\\.)?)?(\\(?\\d{3}\\)?|\\d{3})( |-|\\.)?(\\d{3}( |-|\\.)?\\d{4})",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0438\u0437 11-12 \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u0446\u0438\u0444\u0440\u044b, \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043f\u0443\u0437\u0430\u0442\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,value:this.state.number,onChange:this.handleChange,id:this.numberInputId})]}),Object(C.jsx)("button",{className:O.a.form_button,type:"submit",children:"Add contact"})]})}}]),n}(a.Component),v=n(13),x=n.n(v),y=function(t){var e=t.contacts,n=t.onDeleteContact;return Object(C.jsx)("ul",{children:e.map((function(t){return Object(C.jsxs)("li",{children:[t.name+": "+t.number,Object(C.jsx)("button",{className:x.a.button_delete,type:"button",name:"delete",onClick:function(){return n(t.id)},children:"Delete"})]},t.id)}))})},S=n(14),_=n.n(S),I=function(t){var e=t.value,n=t.onChangeFilter,a=f.a.generate();return Object(C.jsxs)("div",{className:_.a.filter,children:[Object(C.jsx)("h2",{children:"Contacts"}),Object(C.jsxs)("label",{htmlFor:a,children:["Filter by name",Object(C.jsx)("input",{type:"text",name:"filter",required:!0,value:e,id:a,onChange:n})]})]})},w=function(t){Object(d.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:" "},t.formSubmitHandler=function(e){var n=e.name.toLowerCase();if(t.state.contacts.map((function(t){return t.name.toLowerCase()})).includes(n))alert("".concat(e.name," is already in contacts"));else{var a=Object(s.a)({id:Object(m.a)()},e);t.setState((function(t){var e=t.contacts;return{contacts:[].concat(Object(o.a)(e),[a])}}))}},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.changeFilter=function(e){t.setState({filter:e.currentTarget.value})},t}return Object(l.a)(n,[{key:"componentDidUpdate",value:function(t){this.state.contacts!==t.contacts&&localStorage.setItem("contacts",JSON.stringify(this.state.contacts))}},{key:"render",value:function(){var t=this.state.filter.toLowerCase(),e=this.state.contacts.filter((function(e){return e.name.toLowerCase().includes(t)}));return Object(C.jsxs)("div",{children:[Object(C.jsx)(g,{onSubmit:this.formSubmitHandler}),Object(C.jsx)(I,{filter:this.state.filter,onChangeFilter:this.changeFilter}),Object(C.jsx)(y,{contacts:e,onDeleteContact:this.deleteContact})]})}}]),n}(a.Component);i.a.render(Object(C.jsx)(r.a.StrictMode,{children:Object(C.jsx)(w,{})}),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.a1bdf3ef.chunk.js.map