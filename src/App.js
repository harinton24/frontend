import React, { useState, useEffect } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AuthService from "./services/auth.service";

import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import Profile from "./components/Profile";
import BoardUser from "./components/BoardUser";



const App = () => {
  
  const [currentUser, setCurrentUser] = useState(undefined);

  useEffect(() => {
    const user = AuthService.getCurrentUser();

    if (user) {
      setCurrentUser(user);
     
    }
  }, []);

  const logOut = () => {
    AuthService.logout();
  };

  return (
    
    <div>
      
        
      <nav class="izq">
      <img
          src="https://sion.unac.edu.co/Content/Imagenes/logosionconLetra.png"
          
          className = "imgp"
        />
        <div className="separation">
              
        </div>
        <div>
          
          <li className="item">
            <Link to={"/home"} className="item-le">
              Home
            </Link>
          </li>

          <div className="separation">
              
           </div>

          {currentUser && (
            <li className="item">
              <Link to={"/user"} className="item-le">
                Notas
              </Link>
            </li>
          )}
        </div>

        <div className="separation">
              
          </div>

        {currentUser ? (
          <div>
            <li className="item">
              <Link to={"/profile"} className="item-le">
                Mi Perfil
              </Link>
            </li>
            <div className="separation">
              
              </div>
            <li className="item">
              <a href="/login" className="item-le" onClick={logOut}>
                Salir 
              </a>
            </li>
          </div>
        ) : (
          
          <div>
            <li className="item">
              <Link to={"/register"} className="item-le">
                Registrase
              </Link>
            </li>
            <div className="separation">
              
              </div>
            <li className="item">
              <Link to={"/login"} className="item-le">
                Ingresar
              </Link>
            </li>
            

            
          </div>
        )}
      </nav>

      <div className="container mt-3">
        <Switch>
          <Route exact path={["/", "/home"]} component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/profile" component={Profile} />
          <Route path="/user" component={BoardUser} />
    
        </Switch>
      </div>
    </div>
  );
};

export default App;