import React from 'react'

class Timer extends React.Component{

    constructor(props){
        super(props)
        this.state ={
            seconds : 30
        }

        this.setSeconds = this.setSeconds.bind(this)

        var x = setInterval(this.setSeconds,1000)
        
    }

    setSeconds(){
        var sec = this.state.seconds
        sec -= 1
        this.setState({seconds:sec})
    }

    render(){
        return(

            <h4>Timer {this.state.seconds}</h4>
        )

    }
}

export default Timer