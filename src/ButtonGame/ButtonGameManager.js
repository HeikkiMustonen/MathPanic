import React from 'react'
import GameButton from './GameButton'
import Timer from './Timer'
import managerStyle from './ButtonGame.css'


class ButtonGameManager extends React.Component{

    constructor(props){
        super(props)
        
        this.state = {
            SelectedButton:null,
            points:0,
            showTotalPoints:false,
            timeScoreZero: this.props.timeScoreZero 
        }

        //if timeScoreZero is 'true', points will reset when time reaches zero.

        //table minium size is 5 x 5
        if(this.props.tableX < 5){
            this.tableX = 5
        }
        else {
            this.tableX = this.props.tableX
        }

        if(this.props.tableY < 5){
            this.tableY = 5
        }
        else {
            this.tableY = this.props.tableX
        }

        //button bindings
        this.gameButtonPressed = this.gameButtonPressed.bind(this)
        this.endGame = this.endGame.bind(this)
        this.resetGame = this.resetGame.bind(this)
        
        //all buttons are in this array.
        this.allButtons = []
        
        //this array holds the scores achieved
        this.scores = [] 

        //create timer element
        this.timer =  React.createElement(Timer,{timerSeconds:this.props.timerSeconds,manager:this})
    }

    resetGame(){

        console.log("Reset Game!")
        window.timerComponent.stopTimer()
        window.timerComponent.resetTimer()
        this.setState(
           {
            SelectedButton:null,
            points:0,
            showTotalPoints:false,
            timeScoreZero: this.props.timeScoreZero 
           }    
        )
        this.resetAllButtons()
    }

    componentDidMount(){
        this.givePointsToButtons()
    }

    //give points to each button
    givePointsToButtons(){
        this.allButtons.forEach(element => {
            var copyState = element.state
            copyState.pointValue = Math.floor(Math.random()* Math.floor(4))+1
            element.setState(copyState)
        });
    }

    resetAllButtons(){
        this.allButtons.forEach(element => {
            var copyState = element.state
            copyState.isUsed = false
            copyState.isSelected = false
            copyState.pointValue = Math.floor(Math.random()* Math.floor(4))+1
            element.setState(copyState)
        });
    }

    //buttons call this to add button to  the list
    addButtonToList(btn){
        this.allButtons.push(btn)
    }

    //check if the button clicked is near the last button clicked
    IsButtonClose(button){
        //On first click the SelectedButton in null, so return true always.
        if(this.state.SelectedButton === null) return true
    
        var selectedX = this.state.SelectedButton.state.x
        var selectedY = this.state.SelectedButton.state.y
        if(this.InRange(button.state.x,selectedX-1,selectedX+1) && 
            this.InRange(button.state.y, selectedY-1,selectedY+1) ){
            return true
        }else{
            return false
        }
    }

    //return true if value is between min and max
    InRange(value, min,max){
            return ((value-min)*(value-max) <= 0)
    }

    //Handle button clicks
    gameButtonPressed(button){
        if(!this.IsButtonClose(button)) return

        //Set selected button on first click
        if(this.state.SelectedButton === null){
            this.setState({
                SelectedButton:button
            })
            //var copyState = button.state
            //copyState.isSelected = true
            button.state.isSelected = true
            button.setState(copyState)
            
            //Timer component is binded to window.
            //Call its functions thisway.
            window.timerComponent.startTimer()
        }

        //if it is the same button, do nothing
        if(button === this.state.SelectedButton){
         
        }

        //If it is a new button, do stuff...
        else if (this.state.SelectedButton && button.state.pointValue > 0){
            
            //move point to selected button
            var copyState = button.state
            copyState.pointValue += this.state.SelectedButton.state.pointValue

            //set state isSelected. Used to 
            copyState.isSelected = true
            
            //check if pointValue is over x -> give points
            if(copyState.pointValue >= 5){
                this.scoreUp()
                copyState.pointValue = 0
            }
            button.setState(copyState)
            
            //zero points from selected button
            var zeropointsState = this.state.SelectedButton.state
            zeropointsState.pointValue = 0
            zeropointsState.isSelected = false
            zeropointsState.isUsed = true
            this.state.SelectedButton.setState(zeropointsState)

            //make last button as new selected button
            this.setState({SelectedButton:button})
        }
    }

    scoreUp(){
        var newState = this.state
        newState.points = this.state.points+5
        this.setState(newState)
    }

    createTable(numberOfRows,numberOfButtons){
        
        let rows = []
        for(var i=0;i<numberOfRows;i++){
            rows.push(this.creteButtonRow(numberOfButtons,i))
        }
        
        return ( <div>
            <table className="ButtonGameTable">
                <tbody>
                    {rows.map(x => x)}
                </tbody>
                </table>
            </div>
            )
    }

    creteButtonRow(buttonCount,rowNumber){
        var buttons =[]
        for(var i=0;i<buttonCount;i++){
        var akey = i.toString()+rowNumber.toString()
        var newButton =  <GameButton key={akey} x={i} y={rowNumber} managerClick={this.gameButtonPressed} manager={this}/>
        buttons.push(newButton)
        }
        
        return(
            <tr>
                    {buttons.map( b => b)}
            </tr>
        )
    }

    points(){
        return(
            <span> Points : {this.state.points}</span>
        )
    }

    endGame(){
        window.timerComponent.stopTimer()
        var copyState = this.state
        copyState.showTotalPoints=true
        this.setState(copyState)
        this.scores.unshift(this.totalPointsDiv())
    }
     
     //return totalpoint div
     totalPointsDiv(){
        var endpoints = this.calculateTotalPoints()
        return(
            <div>
            <div className="endScore" > 
                    <span>points {endpoints.points} - {endpoints.timeUsed} time used</span>
                    <br/>
                    <span><b>Total points : {endpoints.total}</b></span>
            </div>
            <br/>
            </div>
         )
     }

     calculateTotalPoints(){
        var timeUsed = this.props.timerSeconds - window.timerComponent.state.seconds
        var points = this.state.points
        var total = points - timeUsed

        if(this.state.timeScoreZero && timeUsed == this.props.timerSeconds){
             return {timeUsed:timeUsed, points:0,total:0}
        }
        else{
            return {timeUsed:timeUsed, points:points,total:total}
        }
     }

     restartGame(){
        window.location.reload();
     }

    showZeroPoints(){
        if(this.state.timeScoreZero){
        return (<li>If time reaches zero, you get no points.</li>)
        }
    }
    
    render(){
        return(
            <div style={{width:'100%', overflow:'hidden'}}>
                <div style={{width:'auto', float:'left', padding:'10px'}}>
                        <h2>How to Play</h2>
                        <ul>
                            <li>Click square to start the game.</li>
                            <li>Click adjacent square to move points to it.</li>
                            <li>If the sum of the squares is 5, you gain 5 points.</li>
                            <li>Every points over five is lost.</li>
                            <li>Click 'DONE!' to end the round.</li>
                            <li>Time used is substracted from your total points.</li>
                            {this.showZeroPoints()}
                        </ul>
                </div>
                <div style={{width:'auto',padding:'10px', float:'left',borderStyle:'solid'}}>
                    <div align="center">
                    <h1>Can you count to five?</h1>
                    <h2>Time left : {this.timer}</h2>
                    </div>
                    {this.createTable(this.tableX,this.tableY)}
                    <div align="center">
                        <br></br>
                         <button onClick={this.endGame} className="DoneButton">Done !</button>
                         
                    </div>
                </div>
                <div style={{width:'20%', float:'left', padding:'10px'}}>
                
                <br/>
                    <br/>
                    <button onClick={this.resetGame} className="DoneButton">Restart</button>
                    <br/>
                    <hr></hr>
                    <h4>{this.points()}</h4>
                    <hr></hr>
                    <h4>{this.scores.map(x => x)}</h4>
                </div>
            </div>
        );
    }
}

export default ButtonGameManager