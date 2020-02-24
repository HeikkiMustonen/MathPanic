import React from 'react'
import GameButton from './GameButton'



class ButtonGameManager extends React.Component{

    constructor(props){
        super(props)
        
        this.state = {
            SelectedButton:null,
            points:0
            
        }
        this.gameButtonPressed = this.gameButtonPressed.bind(this)
        this.allButtons = []
    }

    componentDidMount(){
        this.givePointsToButtons()
    }

    givePointsToButtons(){
        this.allButtons.forEach(element => {
            var copyState = element.state
            copyState.pointValue = Math.floor(Math.random()* Math.floor(3))+1
            element.setState(copyState)
        });
    }

    addButtonToList(btn){
        this.allButtons.push(btn)
    }

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

    InRange(value, min,max){
            return ((value-min)*(value-max) <= 0)
    }

    gameButtonPressed(button){
        if(!this.IsButtonClose(button)) return

        //Set selected button on first click
        if(this.state.SelectedButton === null)(
            this.setState({
                SelectedButton:button
            })
        )

        console.log("manager received a button click")
        if(button === this.state.SelectedButton){
            console.log("Was the same button")
        }


        else if (this.state.SelectedButton && button.state.pointValue > 0){
            
            console.log("Was NOT the same button")
            
            //move point to selected button
            var copyState = button.state
            copyState.pointValue += this.state.SelectedButton.state.pointValue

            //set state isSelected. Used to 
            copyState.isSelected = true
            
            //check if pointValue is over x, give points
            if(copyState.pointValue >= 5){
                this.scoreUp()
                copyState.pointValue = 0
            }
            button.setState(copyState)
            
            //zero point from selected button
            var zeropointsState = this.state.SelectedButton.state
            zeropointsState.pointValue = 0
            zeropointsState.isSelected = false
            zeropointsState.isUsed = true
            this.state.SelectedButton.setState(zeropointsState)

            //make last button as new selected button
            this.setState({SelectedButton:button})
         
            this.setState({
                SelectedButton:button
            })
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
        return rows.map(x => x)
    }

    creteButtonRow(buttonCount,rowNumber){
        
        let buttons =[]
        for(var i=0;i<buttonCount;i++){
        var akey = i.toString()+rowNumber.toString()
        var newButton =  <GameButton key={akey} x={i} y={rowNumber} managerClick={this.gameButtonPressed} manager={this}/>
        buttons.push(newButton)
        }
        
        return(<div>
            {buttons.map( b => b)}
            </div>
        )
    }

    gameInfo(){
        return(
            <div>
                <br/>
                <span> selected object : {this.state.SelectedButton ? this.state.SelectedButton.ButtonDataElement() : 'null'}</span>
                <br/>
                Points : {this.state.points}
                <hr></hr>
            </div>   
        )
    }
    
    render(){
        return(

            <div align="center">
                {this.gameInfo()}
                {this.createTable(5,5)}
            </div>
        );
    }
}

export default ButtonGameManager