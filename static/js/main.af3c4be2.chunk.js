(this.webpackJsonpbuttongame=this.webpackJsonpbuttongame||[]).push([[0],[,,,,,,,function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAHKwAABysBMZY2MwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAHoSURBVGiB7ZjNTsQwDISnaG+cV4gD+1Q8Nu+ARPdBOJRFaZqk9niSUolIqFV+bH+T8S4wAXgHcMO5x9cFC8QngDsZZMqepffWntrTsmcCcAVwu/xMzAA+rJVnY9r5qe1pnfWsAcDrAyQK4C22VWhrT20OLAibNApanWdAVBZRCQAGhEnKFOwVwAXCWGSE7WAFYS3S41x1fg9ktEVYuzZBeiVVC4AWiMoiIwSogjAKRQr25KzuzUGUSSM36a1lBfK0E0CVlLVjFSIFiVrEW5QF3nN2dSOjVWduuja3uhG1SiMFWIHs9cgo1S0xkb1vrMUGZ9ZYAYpz/z0SKKaHAMN6RC0Asvdij7AFt9ZZAaznZF+IKnXpG7Q2ey+LKIRDChJRz5K0twCn7JENRApyhOrsrRRzqHpErbrnHFKQXuqxBXvjFa2ltkhEdetZ8y+NyqRqAZCCRC0SEcATr7S+AvHAKAtmIfI9rh5hbBCFN9tL9YdVpOCoAEhBosWOUN1tLUbBIwQogliDtRIwa6wAyN6lX4gKi7DxZB+/EfioAEhBogpaCu4lwArEGqyV4EgBhvRIRAATRAqSLyiLZQWw1PE7ztojm3HGHimOB8gVy38a04OlZ2uN2eM9UxrPwAIyA3gD8LJz4C+P+RtyYg8Y+URm6gAAAABJRU5ErkJggg=="},,,function(e,t,n){e.exports=n(18)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),s=n(9),i=n.n(s),l=(n(15),n(16),n(2)),r=n(3),c=n(5),u=n(4),m=n(1),h=n(6),d=n(7),p=n.n(d),f=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={x:e.x,y:e.y,pointValue:0,isSelected:!1,isUsed:!1},n.HandleClick=n.HandleClick.bind(Object(m.a)(n)),n}return Object(h.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){this.props.manager.addButtonToList(this)}},{key:"HandleClick",value:function(){this.props.managerClick(this)}},{key:"ButtonDataElement",value:function(){return o.a.createElement("span",null,"button : x: ",this.state.x," y: ",this.state.y," pointValue:",this.state.pointValue)}},{key:"render",value:function(){return o.a.createElement("td",null,o.a.createElement("button",{className:"GameButton",style:this.styles(),onClick:this.HandleClick.bind(this.HandleClick)},this.showPointValue()))}},{key:"showPointValue",value:function(){return 0===this.state.pointValue?"x":this.state.pointValue}},{key:"styles",value:function(){return this.state.isSelected?v:this.state.isUsed?b:A}}]),t}(o.a.Component),v={backgroundImage:"url(".concat(p.a,")"),width:"40px",height:"40px",fontSize:"30px",color:"white",border:"none",backgroundColor:"lightblue"},A={backgroundImage:"url(".concat(p.a,")"),width:"40px",height:"40px",fontSize:"30px",color:"white",border:"none",backgroundColor:"lightgreen"},b={backgroundImage:"url(".concat(p.a,")"),width:"40px",height:"40px",fontSize:"30px",color:"lightred",border:"none",backgroundColor:"red"},S=f,g=function(e){function t(e){var n;Object(l.a)(this,t),(n=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={seconds:n.props.timerSeconds},window.timerComponent=Object(m.a)(n),n.gameManager=n.props.manager,n.turnClock=n.turnClock.bind(Object(m.a)(n));setInterval(n.turnClock,1e3);return n.timeRuns=!1,n}return Object(h.a)(t,e),Object(r.a)(t,[{key:"turnClock",value:function(){if(this.timeRuns){var e=this.state.seconds;e-=1,this.setState({seconds:e}),this.state.seconds<=0&&(this.timeRuns=!1,this.gameManager.endGame())}}},{key:"resetTimer",value:function(e){this.setState({seconds:this.props.time})}},{key:"startTimer",value:function(){this.setState({seconds:this.props.timerSeconds}),this.timeRuns=!0}},{key:"stopTimer",value:function(){this.timeRuns=!1}},{key:"render",value:function(){return o.a.createElement("span",null,this.state.seconds)}}]),t}(o.a.Component),E=(n(17),function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={SelectedButton:null,points:0,showTotalPoints:!1,timeScoreZero:n.props.timeScoreZero},n.props.tableX<5?n.tableX=5:n.tableX=n.props.tableX,n.props.tableY<5?n.tableY=5:n.tableY=n.props.tableX,n.gameButtonPressed=n.gameButtonPressed.bind(Object(m.a)(n)),n.endGame=n.endGame.bind(Object(m.a)(n)),n.resetGame=n.resetGame.bind(Object(m.a)(n)),n.allButtons=[],n.scores=[],n.timer=o.a.createElement(g,{timerSeconds:n.props.timerSeconds,manager:Object(m.a)(n)}),n}return Object(h.a)(t,e),Object(r.a)(t,[{key:"resetGame",value:function(){console.log("Reset Game!"),window.timerComponent.stopTimer(),window.timerComponent.resetTimer(),this.setState({SelectedButton:null,points:0,showTotalPoints:!1,timeScoreZero:this.props.timeScoreZero}),this.resetAllButtons()}},{key:"componentDidMount",value:function(){this.givePointsToButtons()}},{key:"givePointsToButtons",value:function(){this.allButtons.forEach((function(e){var t=e.state;t.pointValue=Math.floor(Math.random()*Math.floor(4))+1,e.setState(t)}))}},{key:"resetAllButtons",value:function(){this.allButtons.forEach((function(e){var t=e.state;t.isUsed=!1,t.isSelected=!1,t.pointValue=Math.floor(Math.random()*Math.floor(4))+1,e.setState(t)}))}},{key:"addButtonToList",value:function(e){this.allButtons.push(e)}},{key:"IsButtonClose",value:function(e){if(null===this.state.SelectedButton)return!0;var t=this.state.SelectedButton.state.x,n=this.state.SelectedButton.state.y;return!(!this.InRange(e.state.x,t-1,t+1)||!this.InRange(e.state.y,n-1,n+1))}},{key:"InRange",value:function(e,t,n){return(e-t)*(e-n)<=0}},{key:"gameButtonPressed",value:function(e){if(this.IsButtonClose(e))if(null===this.state.SelectedButton&&(this.setState({SelectedButton:e}),e.state.isSelected=!0,e.setState(t),window.timerComponent.startTimer()),e===this.state.SelectedButton);else if(this.state.SelectedButton&&e.state.pointValue>0){var t=e.state;t.pointValue+=this.state.SelectedButton.state.pointValue,t.isSelected=!0,t.pointValue>=5&&(this.scoreUp(),t.pointValue=0),e.setState(t);var n=this.state.SelectedButton.state;n.pointValue=0,n.isSelected=!1,n.isUsed=!0,this.state.SelectedButton.setState(n),this.setState({SelectedButton:e})}}},{key:"scoreUp",value:function(){var e=this.state;e.points=this.state.points+5,this.setState(e)}},{key:"createTable",value:function(e,t){for(var n=[],a=0;a<e;a++)n.push(this.creteButtonRow(t,a));return o.a.createElement("div",null,o.a.createElement("table",{className:"ButtonGameTable"},o.a.createElement("tbody",null,n.map((function(e){return e})))))}},{key:"creteButtonRow",value:function(e,t){for(var n=[],a=0;a<e;a++){var s=a.toString()+t.toString(),i=o.a.createElement(S,{key:s,x:a,y:t,managerClick:this.gameButtonPressed,manager:this});n.push(i)}return o.a.createElement("tr",null,n.map((function(e){return e})))}},{key:"points",value:function(){return o.a.createElement("span",null," Points : ",this.state.points)}},{key:"endGame",value:function(){window.timerComponent.stopTimer();var e=this.state;e.showTotalPoints=!0,this.setState(e),this.scores.unshift(this.totalPointsDiv())}},{key:"totalPointsDiv",value:function(){var e=this.calculateTotalPoints();return o.a.createElement("div",null,o.a.createElement("div",{className:"endScore"},o.a.createElement("span",null,"points ",e.points," - ",e.timeUsed," time used"),o.a.createElement("br",null),o.a.createElement("span",null,o.a.createElement("b",null,"Total points : ",e.total))),o.a.createElement("br",null))}},{key:"calculateTotalPoints",value:function(){var e=this.props.timerSeconds-window.timerComponent.state.seconds,t=this.state.points,n=t-e;return this.state.timeScoreZero&&e==this.props.timerSeconds?{timeUsed:e,points:0,total:0}:{timeUsed:e,points:t,total:n}}},{key:"restartGame",value:function(){window.location.reload()}},{key:"showZeroPoints",value:function(){if(this.state.timeScoreZero)return o.a.createElement("li",null,"If time reaches zero, you get no points.")}},{key:"render",value:function(){return o.a.createElement("div",{style:{width:"100%",overflow:"hidden"}},o.a.createElement("div",{className:"howTo-div"},o.a.createElement("h2",null,"How to Play"),o.a.createElement("ul",null,o.a.createElement("li",null,"Click square to start the game."),o.a.createElement("li",null,"Click adjacent square to move points to it."),o.a.createElement("li",null,"If the sum of the squares is 5, you gain 5 points."),o.a.createElement("li",null,"Every points over five is lost."),o.a.createElement("li",null,"Click 'DONE!' to end the round."),o.a.createElement("li",null,"Time used is substracted from your total points."),this.showZeroPoints())),o.a.createElement("div",{className:"gameBoard-div"},o.a.createElement("div",{align:"center"},o.a.createElement("h1",null,"-= MathPanic =-"),o.a.createElement("h2",null,"Time left : ",this.timer),o.a.createElement("h2",null,this.points())),o.a.createElement("div",{align:"center"},this.createTable(this.tableX,this.tableY)),o.a.createElement("div",{align:"center"},o.a.createElement("br",null),o.a.createElement("button",{onClick:this.endGame,className:"DoneButton"},"Done !"))),o.a.createElement("div",{className:"scoreBoard-div"},o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("button",{onClick:this.resetGame,className:"DoneButton"},"Restart"),o.a.createElement("br",null),o.a.createElement("div",{className:"latestScores"},o.a.createElement("hr",{className:"latestScore-hr"}),o.a.createElement("h2",null,"Latest Scores"),o.a.createElement("hr",{className:"latestScore-hr"})),o.a.createElement("h4",null,this.scores.map((function(e){return e})))))}}]),t}(o.a.Component));var k=function(){return o.a.createElement("div",null,o.a.createElement(E,{tableX:"8",tableY:"8",timerSeconds:"40",timeScoreZero:!1}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[10,1,2]]]);
//# sourceMappingURL=main.af3c4be2.chunk.js.map