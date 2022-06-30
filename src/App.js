import React, {Component} from 'react';
import './App.css';
import DataAlgoApp from './DataAlgoApp/DataAlgoApp';
import Signin from './Signin/Signin'
import Register from './Register/Register'



class App  extends Component {
  constructor() {
    super()
    this.state = {
      route: 'signin',
    }
  }
onRouteChange = (route) => {
  this.setState({route : route})
}


  render () 
  {
    
      return (
        <div>
        {this.state.route === 'home' ?
        <div>
       <DataAlgoApp/>

        </div>
        :
        (
          this.state.route === 'signin' ?
          <Signin onRouteChange={this.onRouteChange}/> :
          <Register/>
        )
        }
        </div>
      )
  }

}
export default App
