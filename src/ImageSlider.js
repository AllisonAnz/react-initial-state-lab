// your ImageSlider code here!
import React from 'react'

class ImageSlider extends React.Component {

    //Initial state has a property called currentSlideIndex that starts at 0
    constructor() {
        super()
        this.state = { 
            currentSlideIndex: 0
        }
    }

    //render the test 'I am on slide <CURRENT_SLIDE> where <CURRENT_SLIDE> is the value of 
    // this.state.currentSlideIndex
    render() {
        return(
            <h1>I am on slide {this.state.currentSlideIndex}</h1>
        )
    }

}

export default ImageSlider;