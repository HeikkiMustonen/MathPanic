import React from 'react'

class GameButton extends React.Component{

    constructor(props){
        super(props)
        this.state={
            x:props.x,
            y:props.y,
            pointValue:0,
        }
        this.HandleClick = this.HandleClick.bind(this)
    }

    HandleClick(){
        console.log("Gamebutton clicked")
        this.props.managerClick(this)
    }

    ButtonDataElement(){
        return(
                <span>button : x: {this.state.x} y: {this.state.y} pointValue:{this.state.pointValue}</span>
        )
    }

    render(){
        return(
            <button className="GameButton" onClick={this.HandleClick.bind(this.HandleClick)}>x:{this.state.x} y:{this.state.y}</button>
        )
    }

}

export default GameButton