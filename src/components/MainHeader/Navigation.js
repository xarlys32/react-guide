import React from 'react';
import { useContext } from 'react';
import AuthContext from '../../context/auth-context';

import classes from './Navigation.module.css';

const Navigation = () => {
  //Una alternativa es usar consumer donde declaramos un hijo ctx y que lo consuman los demas componentes
  //Otra es usar el hook useContext
  /*return (
    <AuthContext.Consumer>
      {(ctx) => {
       return( 
         <nav className={classes.nav}>
        <ul>
          {ctx.isLoggedIn && (
            <li>
              <a href="/">Users</a>
            </li>
          )}
          {ctx.isLoggedIn && (
            <li>
              <a href="/">Admin</a>
            </li>
          )}
          {ctx.isLoggedIn && (
            <li>
              <button onClick={props.onLogout}>Logout</button>
            </li>
          )}
        </ul>
      </nav>
       )
      }}
    
    </AuthContext.Consumer>
  );*/
  const ctx = useContext(AuthContext)
  return (
    <nav className={classes.nav}>
        <ul>
          {ctx.isLoggedIn && (
            <li>
              <a href="/">Users</a>
            </li>
          )}
          {ctx.isLoggedIn && (
            <li>
              <a href="/">Admin</a>
            </li>
          )}
          {ctx.isLoggedIn && (
            <li>
              <button onClick={ctx.onLogout}>Logout</button>
            </li>
          )}
        </ul>
      </nav>
  );
};

export default Navigation;
