import React, { Component } from 'react';
// import SignUp from './SignUp'
import { browserHistory } from 'react-router';

class Signin extends Component {
    constructor(props) {
        super(props)

        this.signin = this.signin.bind(this)

        this.state = {
            email: '',
            password: ''
        }
    }

    signin() {
        var email = this.state.email
        var password = this.state.password
        //console.log(email, password)

        fetch('/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },

            body: JSON.stringify({
                email: email,
                password: password
            })
        })

            .then(function (response) {
                //console.log(response)
                return response.json();
            })

            .then(function (response) {
                console.log(response);

                if (response.token) {
                    sessionStorage.setItem('token', response.token);
                    sessionStorage.setItem('userId', response.id);
                    browserHistory.push('/projects')
                }
                else {
                    alert('There was an error signing in');
                    console.log('Signin : ' + response);
                }
            })

    }

    render() {
        return <div style={{display: this.props.modalSi}}>
            <div className="container modal-opac">
                <div className="panel modalSi">
                    <div className="panel-body">
                       <button type="button" className="close" data-dismiss="modalSi" aria-label="Close" onClick={this.props.closeSi}><span aria-hidden="true">&times;</span></button>
                        <div className="form-group">
                            <label htmlFor="email">E-Mail</label>
                            <input type="text" className="form-control email" placeholder="username@example.com" value={this.state.email} onChange={(e) => this.setState({ email: e.target.value })} required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" className="form-control password" maxLength="72" placeholder="password" value={this.state.password} onChange={(e) => this.setState({ password: e.target.value })} required />
                        </div>
                    </div>
                    <div className="panel-footer text-center">
                        <button type="button" className="btn btn-lg actionButton" onClick={this.signin}>Sign in</button>
                    </div>
                </div>
            </div>
        </div>

    }
}

export default Signin;

//  <i className="fa fa-times-circle-o fa-2x signup-close" aria-hidden="true" onClick={() => this.setState({modalSi: 'none'})} ></i>