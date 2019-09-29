import React from 'react'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {countertt: 0};
  }
  addunity = () => {
    console.log("clicked")
    let counterttnew = this.state.countertt+1;
    if (counterttnew <0) {
      this.setState({
        countertt: counterttnew
      })
    } 
  }
  minusshit = () => {
    //output to console
    console.log("clicked")
    //reduce value one
    let counterttnew = this.state.countertt-1;
    //sets limit
  
    //saves value to the state
      this.setState({
        countertt: counterttnew
      })
    
    
   
  }
  render () {
    return (
     <div>
      {/* PLUS BUTTON */}
      <button onClick={this.addunity}>
        +1
      </button>

      {/* CLICKS */}
      <p>{this.state.countertt}</p>

      {/* MINUS THE SHIT OUT OF THIS */}
      <button onClick={this.minusshit}>
        -1
      </button>

    </div>
    )}
}
