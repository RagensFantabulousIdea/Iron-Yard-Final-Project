import React, { Component } from 'react';
import { browserHistory } from 'react-router';
// import SignUp from './SignUp'
import Signin from './Signin'


class Welcome extends Component {
  render() {
    return (
      <div>
      <div className="panel-footer text-center">
        <button id="actionButton" type="button" className="btn btn-lg btn-success" onClick={() => browserHistory.push('/Signin')}>Sign In</button>
        </div>

         <div className="panel-footer text-center">
        <button id="actionButton" type="button" className="btn btn-lg btn-success" onClick={() => browserHistory.push('/SignUp')}>Sign Up</button>
        </div>
    
    </div>
     
    
    );
  }
}

export default Welcome;
