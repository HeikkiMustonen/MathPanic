import React from 'react'
import GameButton from './GameButton'



class ButtonGameManager extends React.Component{

    constructor(props){
        super(props)
        
        this.state = {
            SelectedButton:'',
            
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

    gameButtonPressed(button){

        console.log("manager received a button click")
        if(button === this.state.SelectedButton){
            console.log("Was the same button")
        }
        else if (this.state.SelectedButton){
            console.log("Was NOT the same button")
            
            //move point to selected button
            var copyState = button.state
            copyState.pointValue += this.state.SelectedButton.state.pointValue 
            button.setState(copyState)
            
            //zero point from selected button
            var zeropointsState = this.state.SelectedButton.state
            zeropointsState.pointValue = 0
            this.state.SelectedButton.setState(zeropointsState)

            //make last button as new selected button
            this.setState({SelectedButton:button})
         
        }
        this.setState({
            SelectedButton:button
        })
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