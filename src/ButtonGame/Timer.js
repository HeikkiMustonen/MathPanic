import React from 'react'

class Timer extends React.Component{

    constructor(props){
        super(props)
        this.state ={
            seconds : this.props.timerSeconds
            
        }
        window.timerComponent = this
        this.gameManager = this.props.manager
        this.turnClock = this.turnClock.bind(this)

        var x = setInterval(this.turnClock,1000)
        this.timeRuns = false
     
    }

    turnClock(){
        if(!this.timeRuns) return
        var sec = this.state.seconds
        sec -= 1
        this.setState({seconds:sec})

        //if time is up...
        if(this.state.seconds <= 0){
            this.timeRuns = false
            this.gameManager.endGame()
        }
    }

    resetTimer(props){
        this.setState({seconds:this.props.time})
    }

    startTimer(){
        this.setState({seconds:this.props.timerSeconds})
        this.timeRuns = true
    }

    stopTimer(){
        this.timeRuns = false
    }

    render(){
        return(
           <span>{this.state.seconds}</span> 
        )
    }
}

export default Timer