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