import React from 'react';
import FacebookLogin from '../Components/FacebookLogin.js';
import '../css/login.css';

let imgUrl = '/images/login.gif'
let style = {
  image:{
    width: '100vw',
    position: 'absolute'
  },
  darken:{
    backgroundColor: 'rgba(0,0,0,1)'
  },
  button:{
    marginLeft: '50%',
    marginTop: '50%'
  }
}

export class TestPage extends React.Component{
  constructor(props){
    super(props);

    }
  render(){
    return (
        <div>
          <div style={style.darken}>
            <img src={imgUrl} style={style.image}/>
          </div>
        <FacebookLogin socialId={process.env.REACT_APP_FB_APPID}
                       language="en_US"
                       scope="public_profile,email"
                       responseHandler={this.responseFacebook}
                       xfbml={true}
                       fields="id,email,name"
                       version="v2.5"
                       className="facebook-login"
                       handleUserLogin={this.handleUserLogin}
                       style = {style.button}
        />
      </div>
    )
  }
}

