// Importer les dépendances React
import React, { useState } from "react";

// Définir le composant InscriptionComponent
const InscriptionComponent = ({
  handleLogin, // Fonction pour gérer la connexion
  handleSignup, // Fonction pour gérer l'inscription
  errorMessage, // Message d'erreur à afficher
}) => {
  // États pour stocker les informations du formulaire
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Fonction pour gérer la soumission du formulaire de connexion
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    // Appeler la fonction de gestion de la connexion du conteneur
    handleLogin({ email, password });
  };

  // Fonction pour gérer la soumission du formulaire d'inscription
  const handleSignupSubmit = (e) => {
    e.preventDefault();
    // Appeler la fonction de gestion de l'inscription du conteneur
    handleSignup({ email, password });
  };

  // Rendu du composant
  return (
    <div>
      <h2>Connexion</h2>
      <form onSubmit={handleLoginSubmit}>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label>Mot de passe:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Se connecter</button>
      </form>

      <h2>Inscription</h2>
      {/* Afficher le message d'erreur s'il y en a un */}
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}

      <form onSubmit={handleSignupSubmit}>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label>Mot de passe:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">S'inscrire</button>
      </form>
    </div>
  );
};

// Exporter le composant InscriptionComponent
export default InscriptionComponent;
