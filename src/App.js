import React, {  useContext } from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';
import AuthContext, { AuthContextProvider } from './context/auth-context';

function App() {
//AuthContext no es un componente en si mismo , por eso usamos provider que lo hace componente
//Para que los componentes tengan acceso a sus propiedades tienen que estar envueltos en el y escucharo poner un consumer
//Ponemos de nuevo un value debido a que demomento no actualizamos el valor del logged y en navigation que es donde tenemos el consumer 
//puede dar un error debido a que considera el provider no necesario si el valor no se actualiza nunca
const ctx = useContext(AuthContext)
  return (
      <>
        <MainHeader />
        <main>
          {!ctx.isLoggedIn && <Login />}
          {ctx.isLoggedIn && <Home  />}
        </main>
      </>
  );
}

export default App;
