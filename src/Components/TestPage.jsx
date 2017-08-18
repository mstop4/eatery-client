import React from 'react';
import FacebookLogin from '../Components/FacebookLogin.js';

let imgUrl = '/images/login.gif'
let style = {
  background: 'url('+ imgUrl + ') noRepeat center center fixed',
  backgroundSize: 'cover',
  width: '100%',
  image:{
    width: '100vw',
    position: 'absolute',
    backgroundColor: 'rgba(0, 0, 0, 0.75)'
  }
}

export class TestPage extends React.Component{
  constructor(props){
    super(props);

    }
  render(){
    return (
        <div>
        <img src={imgUrl} style={style.image}/>
        THIS IS THE TEST PAGE
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

