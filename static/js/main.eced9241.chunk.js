(this["webpackJsonptyping-test"]=this["webpackJsonptyping-test"]||[]).push([[0],[,,,,,,,,,,function(e){e.exports=JSON.parse('{"a":["the","be","of","and","a","to","in","he","have","it","that","for","they","I","with","as","not","on","she","at","by","this","we","you","do","but","from","or","which","one","would","all","will","there","say","who","make","when","can","more","if","no","man","out","other","so","what","time","up","go","about","than","into","could","state","only","new","year","some","take","come","these","know","see","use","get","like","then","first","any","work","now","may","such","give","over","think","most","even","find","day","also","after","way","many","must","look","before","great","back","through","long","where","much","should","well","people","down","own","just","because","good","each","those","feel","seem","how","high","too","place","little","world","very","still","nation","hand","old","life","tell","write","become","here","show","house","both","between","need","mean","call","develop","under","last","right","move","thing","general","school","never","same","another","begin","while","number","part","turn","real","leave","might","want","point","form","off","child","few","small","since","against","ask","late","home","interest","large","person","end","open","public","follow","during","present","without","again","hold","govern","around","possible","head","consider","word","program","problem","however","lead","system","set","order","eye","plan","run","keep","face","fact","group","play","stand","increase","early","course","change","help","line"]}')},,,,,,,function(e,t,r){},function(e,t,r){},,function(e,t,r){},function(e,t,r){},function(e,t,r){"use strict";r.r(t);var n=r(1),s=r.n(n),a=r(9),c=r.n(a),o=(r(17),r(11)),i=r(12),l=r(2),d=r(3),h=r(5),u=r(4),m=(r(18),r(0)),b=function(e){Object(h.a)(r,e);var t=Object(u.a)(r);function r(){return Object(l.a)(this,r),t.apply(this,arguments)}return Object(d.a)(r,[{key:"render",value:function(){var e=this.props.data,t=e.correctChars,r=e.correctWords,n=e.incorrectChars,s=e.incorrectWords,a=e.timeLimit;return Object(m.jsx)("div",{className:"result",children:Object(m.jsx)("table",{children:Object(m.jsxs)("tbody",{children:[Object(m.jsx)("tr",{children:Object(m.jsx)("td",{colSpan:"2",align:"center",children:Object(m.jsx)("h1",{children:Math.round(60*(t+this.props.spaces)/a/5)+" wpm"})})}),Object(m.jsxs)("tr",{children:[Object(m.jsx)("th",{children:"Correct Words:"}),Object(m.jsxs)("td",{children:[r," (",t,")"]})]}),Object(m.jsxs)("tr",{children:[Object(m.jsx)("th",{children:"Incorrect Words:"}),Object(m.jsxs)("td",{children:[s," (",n,")"]})]}),Object(m.jsx)("tr",{children:Object(m.jsx)("td",{colSpan:"2",align:"center",children:Object(m.jsx)("button",{onClick:this.props.resetTest,children:"Restart"})})})]})})})}}]),r}(s.a.Component),j=(r(20),function(e){Object(h.a)(r,e);var t=Object(u.a)(r);function r(){return Object(l.a)(this,r),t.apply(this,arguments)}return Object(d.a)(r,[{key:"render",value:function(){var e=this.props,t=e.typedWord,r=e.currWord,n=e.timer,s=e.words,a=t.slice(r.length).split("");return Object(m.jsxs)("div",{className:"test",children:[Object(m.jsx)("div",{className:"timer"+(null===this.props.setTimer?" hidden":""),children:n}),Object(m.jsx)("div",{className:"box",children:s.map((function(e,n){return Object(m.jsxs)("div",{className:"word",id:r===e?"active":"",children:[r===e?Object(m.jsx)("span",{id:"caret",className:"blink",style:{left:14.5833*t.length},children:"|"}):null,e.split("").map((function(e,t){return Object(m.jsx)("span",{children:e},e+t)})),r===e?a.map((function(e,t){return Object(m.jsx)("span",{className:"wrong",children:e},e+t)})):null]},e+n)}))})]})}}]),r}(s.a.Component)),p=r(10),f=(r(21),{time:[15,30,45,60],theme:["default","mkbhd","coral","ocean","azure","forest"]}),g=function(e){Object(h.a)(r,e);var t=Object(u.a)(r);function r(){var e;Object(l.a)(this,r);for(var n=arguments.length,s=new Array(n),a=0;a<n;a++)s[a]=arguments[a];return(e=t.call.apply(t,[this].concat(s))).words=p.a.sort((function(){return Math.random()-.5})),e.state={currWord:e.words[0],typedWord:"",timer:60,correctWords:0,incorrectWords:0,correctChars:0,incorrectChars:0,setTimer:null,timeLimit:60},e.startTimer=function(){var t=setInterval((function(){e.setState({timer:e.state.timer-1},(function(){0===e.state.timer&&(clearInterval(e.state.setTimer),e.setState({setTimer:null}))}))}),1e3);e.setState({setTimer:t})},e.recordTest=function(t){var r=e.state,n=r.typedWord,s=r.currWord,a=r.correctChars,c=r.correctWords,o=r.incorrectChars,i=r.incorrectWords,l=r.timer,d=r.timeLimit,h=r.setTimer;if(0!==l){null===h&&"Tab"!==t.key&&e.startTimer();var u=e.words.indexOf(s),m=document.getElementById("active");m.scrollIntoView({behavior:"smooth",block:"center"});var b=document.getElementById("caret");switch(b.classList.remove("blink"),setTimeout((function(){return b.classList.add("blink")}),500),t.key){case"Tab":(l!==d||h)&&(e.resetTest(),document.getElementsByClassName("word")[0].scrollIntoView()),t.preventDefault();break;case" ":if(""===n)return;s===n?e.setState({correctWords:c+1,correctChars:a+s.length}):e.setState({incorrectWords:i+1,incorrectChars:o+s.length}),m.classList.add(n!==s?"wrong":"right"),e.setState({typedWord:"",currWord:e.words[u+1]});break;case"Backspace":t.ctrlKey?(e.setState({typedWord:""}),m.childNodes.forEach((function(e){e.classList.remove("wrong","right")}))):e.setState({typedWord:n.slice(0,n.length-1)},(function(){var t=e.state.typedWord.length;t<s.length&&m.children[t+1].classList.remove("wrong","right")}));break;default:e.setState({typedWord:n+t.key},(function(){var t=e.state.typedWord,r=t.length-1;m.children[r+1].classList.add(s[r]!==t[r]?"wrong":"right")}))}}else"Tab"===t.key&&(e.resetTest(),t.preventDefault())},e.resetTest=function(){document.querySelectorAll(".wrong, .right").forEach((function(e){return e.classList.remove("wrong","right")})),e.words=e.words.sort((function(){return Math.random()-.5})),clearInterval(e.state.setTimer),e.setState({timer:e.state.timeLimit,currWord:e.words[0],typedWord:"",correctChars:0,correctWords:0,incorrectWords:0,incorrectChars:0,setTimer:null})},e.handleOptions=function(t){var r;switch(t.target.dataset.option){case"theme":(r=document.body.children[1].classList).remove.apply(r,Object(i.a)(f.theme)),document.body.children[1].classList.add(t.target.value);break;case"time":e.setState({timer:t.target.value,timeLimit:t.target.value,currWord:e.words[0],typedWord:"",correctWords:0,correctChars:0,incorrectWords:0,incorrectChars:0})}localStorage.setItem(t.target.dataset.option,t.target.value),document.querySelectorAll(".".concat(t.target.dataset.option," button")).forEach((function(e){e.classList.remove("selected")})),t.target.classList.add("selected"),t.target.blur()},e}return Object(d.a)(r,[{key:"componentDidMount",value:function(){var e=this,t=localStorage.getItem("theme"),r=+localStorage.getItem("time");t&&document.body.children[1].classList.add(t),r&&this.setState({timer:r,timeLimit:r}),document.querySelector('button[value="'.concat(t||"default",'"]')).classList.add("selected"),document.querySelector('button[value="'.concat(r||60,'"]')).classList.add("selected"),window.onkeydown=function(t){1!==t.key.length&&"Backspace"!==t.key&&"Tab"!==t.key||e.recordTest(t)}}},{key:"componentWillUnmount",value:function(){window.onkeydown=null}},{key:"render",value:function(){var e=this,t=this.state,r=t.setTimer,n=t.timer;return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)("header",{className:null!==r?"hidden":"",children:[Object(m.jsx)("a",{href:".",className:"brand",children:"typing-test"}),Object(m.jsx)("div",{className:"buttons",children:Object.entries(f).map((function(t){var r=Object(o.a)(t,2),n=r[0],s=r[1];return Object(m.jsxs)("div",{className:n,children:[n,":",s.map((function(t){return Object(m.jsx)("button",{className:"mini","data-option":n,value:t,onClick:e.handleOptions,children:t},t)}))]},n)}))})]}),0!==n?Object(m.jsx)(j,{words:this.words,currWord:this.state.currWord,typedWord:this.state.typedWord,setTimer:this.state.setTimer,timer:this.state.timer}):Object(m.jsx)(b,{data:this.state,spaces:this.words.indexOf(this.state.currWord),resetTest:function(){return e.resetTest()}}),Object(m.jsxs)("div",{className:"bottom-area ".concat(null!==r?"hidden":""),children:[Object(m.jsxs)("span",{className:"hint",children:[Object(m.jsx)("kbd",{children:"Tab"})," to restart test"]}),Object(m.jsxs)("footer",{children:[Object(m.jsxs)("a",{href:"https://www.github.com/salmannotkhan/Typing-Test",children:[Object(m.jsx)("span",{children:"</>"}),"github"]}),Object(m.jsxs)("span",{children:["created by"," ",Object(m.jsx)("a",{href:"https://www.github.com/salmannotkhan",children:"@salmannotkhan"})]})]})]})]})}}]),r}(s.a.Component),w=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,23)).then((function(t){var r=t.getCLS,n=t.getFID,s=t.getFCP,a=t.getLCP,c=t.getTTFB;r(e),n(e),s(e),a(e),c(e)}))};c.a.render(Object(m.jsx)(s.a.StrictMode,{children:Object(m.jsx)(g,{})}),document.getElementById("root")),w()}],[[22,1,2]]]);
//# sourceMappingURL=main.eced9241.chunk.js.map