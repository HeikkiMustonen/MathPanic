import React from 'react'
import ButtonImage from './images/Button.png'

class GameButton extends React.Component{

    constructor(props){
        super(props)
        this.state={
            x:props.x,
            y:props.y,
            pointValue: 0,
            isSelected: false,
            isUsed:false
        }

        this.HandleClick = this.HandleClick.bind(this)

    }

    componentDidMount(){
       this.props.manager.addButtonToList(this)
    }

    HandleClick(){
        this.props.managerClick(this)
    }

    ButtonDataElement(){
        return(
                <span>button : x: {this.state.x} y: {this.state.y} pointValue:{this.state.pointValue}</span>
        )
    }

    
    render() {
        return (
            <button className="GameButton" style={this.styles()} onClick={this.HandleClick.bind(this.HandleClick)}>
                {this.showPointValue()}
            </button>
            //<image src={this.ButtonImage} decode={false} />
            //<a href="#" onClick={this.HandleClick} style={this.styles()}> </a> 
        )
    }

    showPointValue() {
        if (this.state.pointValue == 0)
        {
            return 'x'
        } else
        { return this.state.pointValue }
    }

    styles() {
        if (this.state.isSelected) {
            return styleIsSelected
        }
        else if (this.state.isUsed) {
            return styleIsUsed
        }
        else {
            return styleDefault
        }
    }
}

const styleIsSelected = {
    fontSize: "40px",
    color: "blue",
    backgroundColor: "lightblue"
}
const styleDefault = {
    fontSize: "40px",
    color: "white",
    backgroundColor: "green"
}
const styleIsUsed = {
    fontSize: "40px",
    color: "red",
    backgroundColor: "pink"
}
export default GameButton