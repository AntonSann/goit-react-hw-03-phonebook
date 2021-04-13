(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{12:function(e,t,n){e.exports={form_button:"ContactForm_form_button__2VwIP"}},13:function(e,t,n){e.exports={button_delete:"ContactList_button_delete__mglEo"}},14:function(e,t,n){e.exports={filter:"Filter_filter__22Rd_"}},30:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(10),i=n.n(c),o=(n(20),n(15)),s=n(11),u=n(5),l=n(6),d=n(8),b=n(7),m=n(32),h=n(4),j=n(2),f=n.n(j),p=n(12),O=n.n(p),C=n(0),x=function(e){Object(d.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={name:"",number:""},e.nameInputId=f.a.generate(),e.numberInputId=f.a.generate(),e.handleChange=function(t){e.setState(Object(h.a)({},t.currentTarget.name,t.currentTarget.value))},e.handleSubmit=function(t){t.preventDefault(),e.props.onSubmit(e.state),e.reset()},e.reset=function(){e.setState({name:"",number:""})},e}return Object(l.a)(n,[{key:"render",value:function(){return Object(C.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(C.jsx)("h1",{children:"Phonebook"}),Object(C.jsxs)("label",{htmlFor:this.nameInputId,children:["Name",Object(C.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:this.state.name,onChange:this.handleChange,id:this.nameInputId})]}),Object(C.jsxs)("label",{htmlFor:this.numberInputId,children:["Number",Object(C.jsx)("input",{type:"tel",name:"number",pattern:"(\\+?( |-|\\.)?\\d{1,2}( |-|\\.)?)?(\\(?\\d{3}\\)?|\\d{3})( |-|\\.)?(\\d{3}( |-|\\.)?\\d{4})",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0438\u0437 11-12 \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u0446\u0438\u0444\u0440\u044b, \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043f\u0443\u0437\u0430\u0442\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,value:this.state.number,onChange:this.handleChange,id:this.numberInputId})]}),Object(C.jsx)("button",{className:O.a.form_button,type:"submit",children:"Add contact"})]})}}]),n}(a.Component),v=n(13),g=n.n(v),_=function(e){var t=e.contacts,n=e.onDeleteContact;return Object(C.jsx)("ul",{children:t.map((function(e){return Object(C.jsxs)("li",{children:[e.name+": "+e.number,Object(C.jsx)("button",{className:g.a.button_delete,type:"button",name:"delete",onClick:function(){return n(e.id)},children:"Delete"})]},e.id)}))})},y=n(14),I=n.n(y),S=function(e){var t=e.value,n=e.onChangeFilter,a=f.a.generate();return Object(C.jsxs)("div",{className:I.a.filter,children:[Object(C.jsx)("h2",{children:"Contacts"}),Object(C.jsxs)("label",{htmlFor:a,children:["Filter by name",Object(C.jsx)("input",{type:"text",name:"filter",required:!0,value:t,id:a,onChange:n})]})]})},w=function(e){Object(d.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},e.formSubmitHandler=function(t){var n=t.name.toLowerCase();if(e.state.contacts.map((function(e){return e.name.toLowerCase()})).includes(n))alert("".concat(t.name," is already in contacts"));else{var a=Object(s.a)({id:Object(m.a)()},t);e.setState((function(e){var t=e.contacts;return{contacts:[].concat(Object(o.a)(t),[a])}}))}},e.deleteContact=function(t){e.setState((function(e){return{contacts:e.contacts.filter((function(e){return e.id!==t}))}}))},e.changeFilter=function(t){e.setState({filter:t.currentTarget.value})},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this.state.filter.toLowerCase(),t=this.state.contacts.filter((function(t){return t.name.toLowerCase().includes(e)}));return Object(C.jsxs)("div",{children:[Object(C.jsx)(x,{onSubmit:this.formSubmitHandler}),Object(C.jsx)(S,{filter:this.state.filter,onChangeFilter:this.changeFilter}),Object(C.jsx)(_,{contacts:t,onDeleteContact:this.deleteContact})]})}}]),n}(a.Component);i.a.render(Object(C.jsx)(r.a.StrictMode,{children:Object(C.jsx)(w,{})}),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.b6c99ead.chunk.js.map