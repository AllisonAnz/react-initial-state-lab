// your Bomb code here!
import React from 'react'

class Bomb extends React.Component {
    constructor(props){ //props that the component gets from its parent
        super()
        this.state = { //define initial state with a key of 'secondsLeft' set to the 'initialCount' prop
            secondsLeft: props.initialCount
        }
    }

    render() { 
        //render the text '<SECONDS_LEFT> seconds left before I go boom! <SECONDS_LEFT> is the value of secondsLeft
        //if secondsLeft = 0 it should render 'Boom!' instead 
        const message = this.state.secondsLeft === 0 ? 'Boom!' : `${this.state.secondsLeft} seconds left before I go boom!`;

    
        return( 
            <div>{message}</div>
        )
    }

}

export default Bomb;
