import React from 'react';
import {
  BrowserRouter,
  Route,
  Link,
  Switch,
  withRouter
} from 'react-router-dom'

export default class Login extends React.Component{
  constructor(props) {
    super(props);
  }
  render(){
    return(
        <div class="login-container">

            <div class="text-center">
                <h1><span class="fa fa-lock"></span> Node Authentication</h1>

                <p>Login or Register with:</p>
                <p>
                    <a href="/login" class="btn btn-default"><span class="fa fa-user"></span> Local Login</a>
                </p>
                <p>
                    <a href="/signup" class="btn btn-default"><span class="fa fa-user"></span> Local Signup</a>
                </p>
                <p>
                    <a href="/auth/facebook" class="btn btn-primary"><span class="fa fa-facebook"></span> Facebook</a>
                </p>
            </div>
        </div>
    )
  }

}
