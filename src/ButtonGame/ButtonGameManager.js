import React from 'react'
import GameButton from './GameButton'

class ButtonGameManager extends React.Component{

    constructor(props){
        super(props)
        
        this.state = {
            SelectedButton:''
        }

        this.GameButtonPressed = this.GameButtonPressed.bind(this)
    }

    componentDidMount(){
        //this.Init()
    }

    Init(){
        var btnElements = document.getElementsByClassName("GameButton")

    }

    GameButtonPressed(button){
        
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
            console.log("button:",button)
         
        }
        this.setState({
            SelectedButton:button
        })
    }

    CreateTable(numberOfRows,numberOfButtons){
        
        let rows = []
        for(var i=0;i<numberOfRows;i++){
            rows.push(this.CreteButtonRow(numberOfButtons,i))
        }
        return rows.map(x => x)
    }

    CreteButtonRow(buttonCount,rowNumber){
        
        let buttons =[]
        for(var i=0;i<buttonCount;i++){
         buttons.push(<GameButton x={i} y={rowNumber} managerClick={this.GameButtonPressed}/>)
        }
        
        return(<div>
            {buttons.map( b => b)}
            </div>
        )
    }

    GameInfo(){
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

            <div>
                {this.GameInfo()}
                {this.CreateTable(5,5)}
            </div>
        );
    }
}

export default ButtonGameManager