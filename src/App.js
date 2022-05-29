import logo from './logo.svg';
import './App.css';
import React from 'react';

class App extends React.Component {
  constructor () {
    super(); 

    this.state = { 
      count1 : 0, 
      count2: 0, 
      isPlaying: false  
    }
    this.counter1 = null; 
    this.counter2 = null;
  }

  componentDidMount () {
    this.setState({
      isPlaying:true
    })
    const self = this;
      this.counter1 = setInterval(() => {
      self.setState((prevState) => {
          
            count1 : prevState.count1 + 1
          
       })
    }, 1000);
  //   this.counter2 = setInterval(() => {
  //     self.setState((prevState) => {
  //        return {
  //          count2 : prevState.count2 + 1
  //        }
  //     })
  //  }, 1000)
  }

  componentDidUpdate(prevProps, prevState){
    if(prevState.count2 > 9){
       clearInterval(this.counter2);
    }
  }

  

  handlePause = () => {
    console.log('handlePause');
    console.log(this.counter1)
    this.setState({
      isPlaying:false
    })
     clearInterval(this.counter1);
     clearInterval(this.counter2);
  }; 

  handlePlay = () => {
    
    this.setState({
      isPlaying:true
    })
    const self = this;
        this.counter1 = setInterval(() => {
          self.setState((prevState) => {
            count1 : prevState.count1 + 1
            
          })
      }, 1000);
      // this.counter2 = setInterval(() => {
      //   self.setState((prevState) => {
      //       return {
      //         count2 : prevState.count2 + 1
      //       }
      //   })
      // }, 1000)
  };




  // componentWillUnmount() {
  //   // cleanup
  // }

  render(){
    
  return (
      <div className="App">
        <header className="App-header">

          Counter1: {this.state.count1}
          <br/>
          Counter2: {this.state.count2}
      
          {this.state.isPlaying ? <button onClick = {this.handlePause}>Pause</button> : <button onClick = {this.handlePlay}>Play</button>}
          
        </header>
      </div>
    );
  }
}

export default App;
