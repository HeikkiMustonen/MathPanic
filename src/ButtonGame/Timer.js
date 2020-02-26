import React from 'react'

class Timer extends React.Component{

    constructor(props){
        super(props)
        this.state ={
            seconds : this.props.timerSeconds
            
        }
        window.timerComponent = this
 
        this.setSeconds = this.setSeconds.bind(this)

        var x = setInterval(this.setSeconds,1000)
        this.timeRuns = false
     
    }

    setSeconds(){
        if(!this.timeRuns) return
        var sec = this.state.seconds
        sec -= 1
        this.setState({seconds:sec})
    }

    resetTimer(props){
        this.setState({seconds:this.props.time})
    }

    test(){
        console.log("timer test")
    }

    startTimer(time){
        this.setState({seconds:this.props.timerSeconds})
        this.timeRuns = true
    }

    render(){
        return(
            <span>Timer {this.state.seconds}</span>
        )

    }
}

export default Timer