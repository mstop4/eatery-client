import React from 'react';

const FBLoginButton = () => (
    <div
      className="fb-login-button"
      data-max-rows="3"
      data-size="large"
      data-button-type="login_with"
      data-show-faces="false"
      data-auto-logout-link="false"
      data-use-continue-as="false"
    />
);

export default FBLoginButton;