(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{21:function(e,t,a){e.exports=a(85)},27:function(e,t,a){},29:function(e,t,a){},31:function(e,t,a){},33:function(e,t,a){},35:function(e,t,a){},56:function(e,t,a){},58:function(e,t,a){},61:function(e,t,a){},79:function(e,t,a){},81:function(e,t,a){},83:function(e,t,a){},85:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),o=a(11),r=a.n(o),l=(a(27),a(2)),i=a(3),c=a(5),u=a(4),m=a(6),d=a(1),h=a(9),p=(a(29),function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"conversation-search"},s.a.createElement("input",{type:"search",className:"conversation-search-input",placeholder:"Search Messages"}))}}]),t}(n.Component)),g=a(19),v=(a(31),function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){Object(g.a)(".conversation-snippet",20)}},{key:"render",value:function(){var e=this.props.data,t=e.photo,a=e.name,n=e.text;return s.a.createElement("div",{className:"conversation-list-item"},s.a.createElement("img",{className:"conversation-photo",src:t,alt:"conversation"}),s.a.createElement("div",{className:"conversation-info"},s.a.createElement("h1",{className:"conversation-title"},a),s.a.createElement("p",{className:"conversation-snippet"},n)))}}]),t}(n.Component)),b=(a(33),function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=e.title,a=e.leftItems,n=e.rightItems;return s.a.createElement("div",{className:"toolbar"},s.a.createElement("div",{className:"left-items"},a),s.a.createElement("h1",{className:"toolbar-title"}," ",s.a.createElement("strong",null,t)," "),s.a.createElement("div",{className:"right-items"},n))}}]),t}(n.Component)),f=(a(35),function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.icon;return s.a.createElement("i",{className:"toolbar-button ".concat(e)})}}]),t}(n.Component)),E=a(20),y=a.n(E),O=(a(56),n.Component,a(58),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).handleKeyPress=function(e){"Enter"===e.key&&(e.preventDefault(),e.target.value.length<5?alert("Plese enter longer response"):(a.setState({responseRecorded:!0}),a.props.messageAddHandler(e.target.value),document.getElementById("composearea").value="",document.getElementById("composearea").placeholder=a.state.textInputValue))},a.state={textValue:"",textInputValue:"Type a response and press enter",responseRecorded:!1},a.handleChangeTextInput=a.handleChangeTextInput.bind(Object(d.a)(Object(d.a)(a))),a.handleKeyPress=a.handleKeyPress.bind(Object(d.a)(Object(d.a)(a))),a.handleButtonClick=a.handleButtonClick.bind(Object(d.a)(Object(d.a)(a))),a.handleAddMessage=a.handleAddMessage.bind(Object(d.a)(Object(d.a)(a))),a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"handleChangeTextInput",value:function(e){this.setState({textValue:e.target.value})}},{key:"handleAddMessage",value:function(e){e.preventDefault(),this.state.textValue.length<5?alert("Plese enter longer response"):(this.setState({responseRecorded:!0}),this.props.messageAddHandler(this.state.textValue),document.getElementById("composearea").value="",document.getElementById("composearea").placeholder=this.state.textInputValue)}},{key:"handleButtonClick",value:function(e){this.props.enterHandler(this.state.textValue)}},{key:"render",value:function(){return s.a.createElement("div",{className:"compose",id:"composediv"},s.a.createElement("textarea",{rows:"4",id:"composearea",type:"text",className:"compose-input",placeholder:this.state.textInputValue,onKeyPress:this.handleKeyPress,onChange:this.handleChangeTextInput}),this.state.responseRecorded&&s.a.createElement("button",{className:"btninstrc",onClick:this.handleButtonClick},"Submit Round"),this.props.rightItems)}}]),t}(n.Component)),j=a(7),k=a.n(j),N=(a(61),function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=e.data,a=e.isMine,n=e.startsSequence,o=e.endsSequence,r=e.showTimestamp,l=k()(t.timestamp).format("LLLL");return s.a.createElement("div",{className:["message","".concat(a?"mine":""),"".concat(n?"start":""),"".concat(o?"end":"")].join(" ")},r&&s.a.createElement("div",{className:"timestamp"},l),s.a.createElement("div",{className:"bubble-container"},s.a.createElement("div",{className:"bubble",title:l},t.message)))}}]),t}(n.Component)),S=(a(63),a(79),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).getMessages=function(e){var t="";t=e.length>0?"A"==e[e.length-1].author?"B":"A":"NO MESSAGE",a.setState(function(a){return Object(h.a)({},a,{messages:e,author:t})})},a.state={messages:[],render:!0,ranges:[],all_responses:[]},a.sendDataToServer=a.sendDataToServer.bind(Object(d.a)(Object(d.a)(a))),a.addMessage=a.addMessage.bind(Object(d.a)(Object(d.a)(a))),a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"sendDataToServer",value:function(e){console.log("got back "+e);for(var t=[],a=this.state.ranges,n=0;n<a.length;n++){console.log(a[n]),console.log(a[n].ranges);for(var s=0;s<a[n].ranges.length;s++)t.push({ind:a[n].id,text:a[n].text.substring(a[n].ranges[s].start,a[n].ranges[s].end),start:a[n].ranges[s].start,end:a[n].ranges[s].end})}fetch("https://1714973e.ngrok.io/data",{method:"POST",body:JSON.stringify({uuid:localStorage.getItem("uuid"),response:e,all_responses:this.state.all_responses,fold:this.state.fold,dialogue_utterance_id:this.state.dialogue_utterance_id,keywords:this.props.keywords,keyword_highlights:t})}),this.setState(function(e){return Object(h.a)({},e,{render:!1})}),window.location.reload()}},{key:"convertToTuple",value:function(e){if("conversation_done"in e)return localStorage.removeItem("first_time"),this.setState(function(t){return Object(h.a)({},t,{conversation_done:!0,total_score:e.total_score,previous_score:e.previous_score,turn:e.turn})}),this.props.messengerobj.setState(function(e){return Object(h.a)({},e,{conversation_done:!0,isShowing:!1,uuid:localStorage.getItem("uuid")})}),[];var t=e.dialogue_utterance_id,a=e.dialogue,n=e.fold,s=[],o=["A","B"],r=e.previous_score,l=e.total_score,i=e.turn;console.log(l+" "+r),this.setState(function(e){return Object(h.a)({},e,{fold:n,dialogue_utterance_id:t,total_score:l,previous_score:r,turn:i})}),this.props.messengerobj.setState(function(e){return Object(h.a)({},e,{fold:n,dialogue_utterance_id:t,total_score:l,previous_score:r,turn:i})});for(var c=0,u=0;u<a.length;u++){var m=a[u].text;s[u]={id:u,author:o[c],message:m,timestamp:(new Date).getTime()},c=1-c}return s}},{key:"componentDidUpdate",value:function(){this.messagesEnd.scrollIntoView({behavior:"smooth"})}},{key:"componentDidMount",value:function(){var e=this;this.messagesEnd.scrollIntoView({behavior:"smooth"});var t=localStorage.getItem("uuid");null==t&&(t=Math.random().toString(),localStorage.setItem("uuid",t)),fetch("https://1714973e.ngrok.io/data?uuid="+t).then(function(e){return e.json()}).then(function(t){return e.getMessages(e.convertToTuple(t))})}},{key:"addMessage",value:function(e){var t=this,a=this.state.messages,n=this.state.author,s={id:a.length+1,author:n,message:e,timestamp:(new Date).getTime()};this.setState(function(e){return Object(h.a)({},e,{all_responses:t.state.all_responses.concat([s])})})}},{key:"changePage",value:function(){window.location.reload()}},{key:"renderReplies",value:function(){var e=0,t=this.state.all_responses.length,a=[];if("conversation_done"in this.state&&1==this.state.conversation_done)return s.a.createElement("div",null,"Task completed. Thank you.");if(0==this.state.render)return s.a.createElement("div",null,"Response submitted, Click for next conversation.",s.a.createElement("button",{className:"btninstrc",onClick:this.changePage},"Go to next conversation"));for(;e<t;){var n=this.state.all_responses[e-1],o=this.state.all_responses[e],r=this.state.all_responses[e+1],l=o.author===this.state.author,i=k()(o.timestamp),c=!0,u=!0,m=!1;if(n){var d=k()(n.timestamp),h=k.a.duration(i.diff(d));n.author===o.author&&h.as("hours")<1&&(c=!1),h.as("hours")<1&&(m=!1)}if(r){var p=k()(r.timestamp),g=k.a.duration(p.diff(i));r.author===o.author&&g.as("hours")<1&&(u=!1)}a.push(s.a.createElement(N,{key:e,id:e,isMine:l,startsSequence:c,endsSequence:u,showTimestamp:m,data:o,prnt:this})),e+=1}return this.messages=a,a}},{key:"renderMessages",value:function(){var e=0,t=this.state.messages.length,a=[];if("conversation_done"in this.state&&1==this.state.conversation_done)return s.a.createElement("div",null,"Task completed. Thank you.");if(0==this.state.render)return s.a.createElement("div",null,"Response submitted, Click for next conversation.",s.a.createElement("button",{className:"btninstrc",onClick:this.changePage},"Go to next conversation"));for(;e<t;){var n=this.state.messages[e-1],o=this.state.messages[e],r=this.state.messages[e+1],l=o.author===this.state.author,i=k()(o.timestamp),c=!0,u=!0,m=!0;if(n){var d=k()(n.timestamp),h=k.a.duration(i.diff(d));n.author===o.author&&h.as("hours")<1&&(c=!1),h.as("hours")<1&&(m=!1)}if(r){var p=k()(r.timestamp),g=k.a.duration(p.diff(i));r.author===o.author&&g.as("hours")<1&&(u=!1)}a.push(s.a.createElement(N,{key:e,id:e,isMine:l,startsSequence:c,endsSequence:u,showTimestamp:m,data:o,prnt:this})),e+=1}return this.messages=a,a}},{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"all"},s.a.createElement(b,{title:"ConvPro",rightItems:[s.a.createElement("div",{key:"info",className:"score-all"},s.a.createElement("div",{className:"score",style:{textAlign:"center"}},"TOTAL SCORE: "+this.state.total_score),s.a.createElement("div",{className:"score"},"ROUND: "+(this.state.turn+1)+" out of 5"))]}),s.a.createElement("div",{className:"message-list"},s.a.createElement("div",{className:"left-container"},s.a.createElement("div",{className:"message-list-container"},this.renderMessages()),s.a.createElement("div",{style:{float:"left",clear:"both"},ref:function(t){e.messagesEnd=t}})),s.a.createElement("div",{className:"input-container",style:{height:"calc(100% - 60px)"}},s.a.createElement("h1",null,"Guess the response!"),s.a.createElement("div",{style:{display:"inline",textAlign:"left"}},"Not many people have what it takes to be a ",s.a.createElement("strong",null,"MASTER OF CONVERSATION.")," Anybody can simply ",s.a.createElement("em",null,"write a response")," but to ",s.a.createElement("em",null,"put yourself in someone's shoes and predict their response")," is a challenge indeed.",s.a.createElement("br",null),s.a.createElement("br",null),"On the left, you'll see an on-going conversation. Your mission, should you choose to accept, is to ",s.a.createElement("strong",null,"predict what was said next"),". You may guess as many times as you'd like.",s.a.createElement("br",null),s.a.createElement("br",null),"We will score your guesses based on how close you were to the ",s.a.createElement("strong",null,"real response"),". Remember, punctuation and grammar matters. Try to match the person you're responding as!",s.a.createElement("br",null),s.a.createElement("br",null),"Good luck! Only the best shall succeed."),s.a.createElement("div",{className:"message-list-container"},this.renderReplies()),s.a.createElement(O,{enterHandler:this.sendDataToServer,messageAddHandler:this.addMessage,rightItems:[]}))))}}]),t}(n.Component)),w=(a(81),a(83),function(e){return s.a.createElement("div",null,s.a.createElement("div",{className:"modal-wrapper",style:{transform:e.show?"translateY(0vh)":"translateY(-100vh)",opacity:e.show?"1":"0"}},s.a.createElement("div",{className:"modal-header"},s.a.createElement("h3",null,"INSTRUCTIONS"),s.a.createElement("span",{className:"close-modal-btn",onClick:e.close},"\xd7")),s.a.createElement("div",{className:"modal-body"},e.children),s.a.createElement("div",{className:"modal-footer"},s.a.createElement("button",{className:"btn-cancel",onClick:e.close},"CLOSE"))))}),C=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).openModalHandler=function(){a.setState({isShowing:!0,isFirst:!0})},a.closeModalHandler=function(){a.setState({isShowing:!1,isFirst:!1})},a.state={keywords:[],isShowing:!0,isFirst:!0},a.openModalHandler=a.openModalHandler.bind(Object(d.a)(Object(d.a)(a))),a.closeModalHandler=a.closeModalHandler.bind(Object(d.a)(Object(d.a)(a))),a.handleChange=a.handleChange.bind(Object(d.a)(Object(d.a)(a))),a.sendName=a.sendName.bind(Object(d.a)(Object(d.a)(a))),a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){null==localStorage.getItem("first_time")?(localStorage.setItem("first_time","true"),this.setState({isFirst:!0})):this.setState({isFirst:!1})}},{key:"changePage",value:function(){var e=Math.random().toString();console.log(e),localStorage.setItem("uuid",e),window.location.reload()}},{key:"sendName",value:function(){var e=localStorage.getItem("uuid");fetch("https://1714973e.ngrok.io/score",{method:"POST",body:JSON.stringify({uuid:e,name:this.state.nameInput})}).then(this.handleRedirect)}},{key:"handleRedirect",value:function(e){if(200===e.status){console.log("sent");var t=localStorage.getItem("uuid");localStorage.setItem("uuid",Math.random().toString()),window.location.href="http://convpro.com/score.html?uuid="+t,console.log(localStorage.getItem("uuid"))}else window.location.reload()}},{key:"handleChange",value:function(e){this.setState({nameInput:e.target.value})}},{key:"render",value:function(){var e;return this.state.isShowing&&this.state.isFirst?e=s.a.createElement("div",{className:"overlay"},s.a.createElement("div",{onClick:this.closeModalHandler,className:"back-drop"}),s.a.createElement(w,{className:"modal",show:this.state.isShowing,close:this.closeModalHandler},s.a.createElement("div",{style:{display:"inline"}},"Not many people have what it takes to be a ",s.a.createElement("strong",null,"MASTER OF CONVERSATION.")," Anybody can ",s.a.createElement("em",null,"write a response")," but to ",s.a.createElement("em",null,"put yourself in someone's shoes and predict their response")," is a challenge indeed.",s.a.createElement("br",null),s.a.createElement("br",null),"On the left, you'll see an on-going conversation. Your mission, should you choose to accept, is to ",s.a.createElement("strong",null,"predict what was said next"),". You may guess as many times as you'd like.",s.a.createElement("br",null),s.a.createElement("br",null),"We will score your guesses based on how close you were to the ",s.a.createElement("strong",null,"real response"),". Remember, punctuation and grammar matters. Try to match the person you're responding as!",s.a.createElement("br",null),s.a.createElement("br",null),"Good luck! Only the best shall succeed."))):this.state.isShowing?e=s.a.createElement("div",{className:"overlay"},s.a.createElement("div",{onClick:this.closeModalHandler,className:"back-drop"}),s.a.createElement(w,{className:"modal",show:this.state.isShowing,close:this.closeModalHandler},s.a.createElement("div",{style:{display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center"}},s.a.createElement("div",{className:"scoreinfo"},"Score for last round: ",this.state.previous_score," "),s.a.createElement("br",null),s.a.createElement("div",{className:"scoreinfo"},"Total score: ",this.state.total_score," "),s.a.createElement("br",null),s.a.createElement("div",{className:"scoreinfo"},"Round: ",this.state.turn," out of 5")))):this.state.conversation_done&&(e=s.a.createElement("div",{className:"overlay"},s.a.createElement("div",{onClick:this.closeModalHandler,className:"back-drop"}),s.a.createElement(w,{className:"modal",show:!0,close:this.closeModalHandler},s.a.createElement("div",{style:{display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center"}},"All rounds completed: \xa0\xa0",s.a.createElement("button",{className:"btninstrc",onClick:this.changePage},"Play again"),s.a.createElement("br",null),"Please enter your name here and press Submit Score to finish",s.a.createElement("br",null),s.a.createElement("input",{rows:"4",id:"composearea",type:"text",className:"compose-name",placeholder:"Type your name here",onChange:this.handleChange}),s.a.createElement("br",null),s.a.createElement("button",{className:"btninstrc",onClick:this.sendName},"Submit Score"))))),s.a.createElement("div",{className:"messenger"},e,s.a.createElement("div",{className:"scrollable content"},s.a.createElement(S,{keywords:this.state.keywords,messengerobj:this})))}}]),t}(n.Component),_=function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"App"},s.a.createElement(C,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(s.a.createElement(_,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[21,2,1]]]);
//# sourceMappingURL=main.72389db5.chunk.js.map