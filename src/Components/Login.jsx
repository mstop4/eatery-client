import React from 'react';
import FacebookLogin from '../Components/FacebookLogin.js';
import '../css/login.css';

export class Login extends React.Component{
  constructor(props){
    super(props);

    }
  render(){
    return (
        <div style={{width: '100%', height: '100%'}}>
          <span className='login-title'> Eatery </span>
          <span id="status" />
          <div className='bg'></div>
            <FacebookLogin socialId={process.env.REACT_APP_FB_APPID}
                           language="en_US"
                           scope="public_profile,email"
                           responseFacebook={this.props.responseFacebook}
                           xfbml={true}
                           fields="id,email,name"
                           version="v2.5"
                           className="facebook-login"
                           handleUserLogin={this.props.handleUserLogin}
            />
      </div>
    )
  }
}

