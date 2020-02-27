import React from 'react'
import ButtonImage from './images/Button3.png'

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
            <td>
            <button className="GameButton" style={this.styles()} onClick={this.HandleClick.bind(this.HandleClick)}>
                {this.showPointValue()}
            </button>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
            </td>
        )
    }

    

    showPointValue() {
        if (this.state.pointValue === 0)
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
    
    backgroundImage: `url(${ButtonImage})`,
    width:"40px",
    height:"40px",
    fontSize: "30px",
    color: "white",
    border: "none",
    backgroundColor: "lightblue"
}
const styleDefault = {
    backgroundImage: `url(${ButtonImage})`,
    width:"40px",
    height:"40px",
    fontSize: "30px",
    color: "white",
    border: "none",
    backgroundColor: "lightgreen"
}
const styleIsUsed = {
    backgroundImage: `url(${ButtonImage})`,
    width:"40px",
    height:"40px",
    fontSize: "30px",
    color: "lightred",
    border: "none",
    backgroundColor: "red"
}

export default GameButton