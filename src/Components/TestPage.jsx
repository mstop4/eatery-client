import React from 'react';
import FacebookLogin from '../Components/FacebookLogin.js';
import '../css/login.css';

export class TestPage extends React.Component{
  constructor(props){
    super(props);

    }
  render(){
    return (
        <div style={{width: '100%', height: '100%'}}>
          <span className='title'> Eatery </span>
          <div className='bg'></div>
            <FacebookLogin socialId={process.env.REACT_APP_FB_APPID}
                           language="en_US"
                           scope="public_profile,email"
                           responseHandler={this.responseFacebook}
                           xfbml={true}
                           fields="id,email,name"
                           version="v2.5"
                           className="facebook-login"
                           handleUserLogin={this.handleUserLogin}
            />
      </div>
    )
  }
}

