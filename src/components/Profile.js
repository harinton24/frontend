import React from "react";
import AuthService from "../services/auth.service";

const Profile = () => {
  const currentUser = AuthService.getCurrentUser();

  return (
    <div>
      <header>
      <img
          src="https://live.mrf.io/statics/i/ps/www.movilzona.es/app/uploads/2019/05/Foto-de-Perfil-en-WhatsApp-696x364.jpg?width=1200&enable=upscale"
          
          className = "profile"
        />
        <h3 className = "Slide">
          <strong>{currentUser.username}</strong>
        </h3>
        
      </header>
      <div className ="board">
      <p>
        <strong>Id:</strong> {currentUser.id}
      </p>
      <p>
        <strong>Email:</strong> {currentUser.email}
      </p>
      <p>
        <strong>Nombre:</strong> {currentUser.nombre}
      </p>
      <p>
        <strong>Apellido:</strong> {currentUser.apellido}
      </p>
      </div>
      

    </div>
  );
};

export default Profile;