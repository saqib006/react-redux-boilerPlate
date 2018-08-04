import React, { Component } from 'react';


class App extends Component {
  constructor(props){
    super(props)

    this.state = {open: false};

    

  }
  handleToggle = () => this.setState({open: !this.state.open});

  handleClose = () => this.setState({open: false});

  render() {
    return (
      <div className="App">
    
       
      </div>
    );

  }
}

export default App;
