import React from 'react';
import {
  Link,
} from 'react-router-dom';
import logo from '../../../assets/images/logoMTC.svg';
import routes from '../../../constant/routes';

function LogoComponent() {

  return (
    <React.Fragment>
      <div id='logo-wrapper'>
        <Link
          to={routes.home}
        >
          <h3 id='logo-title'>METTI TECH</h3>
          <img
            id='logo-img'
            src={logo}
            alt='' 
          />
        </Link>
      </div>
    </React.Fragment>
  );
};

export default LogoComponent;