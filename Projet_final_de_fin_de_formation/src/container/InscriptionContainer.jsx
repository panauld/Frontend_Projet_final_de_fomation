// Importer les dépendances React
import React, { useState } from "react";
import InscriptionComponent from "../component/InscriptionComponent.jsx";

// Définir le conteneur InscriptionContainer
const InscriptionContainer = () => {
  // État pour stocker le message d'erreur
  const [errorMessage, setErrorMessage] = useState("");

  // Fonction pour gérer la connexion
  const handleLogin = ({ email, password }) => {
    // Simulation de données dans un format JSON
    const users = [
      { email: "test@email.com", password: "password123" },
      // ... autres utilisateurs
    ];

    // Vérifier si l'utilisateur existe
    const user = users.find(
      (user) => user.email === email && user.password === password
    );

    if (user) {
      // L'utilisateur est trouvé, vous pouvez rediriger ou mettre à jour l'état de l'authentification
      console.log("Connexion réussie");
      setErrorMessage("");
    } else {
      // L'utilisateur n'est pas trouvé, afficher un message d'erreur
      setErrorMessage("Email ou mot de passe incorrect");
    }
  };

  // Fonction pour gérer l'inscription
  const handleSignup = ({ email, password }) => {
    // Simulation d'ajout d'utilisateur dans un format JSON
    const newUser = { email, password };
    console.log("Nouvel utilisateur enregistré:", newUser);
    setErrorMessage(""); // Réinitialiser le message d'erreur
  };

  // Rendu du conteneur
  return (
    <div>
      {/* Passer les fonctions de gestion et le message d'erreur en tant que propriétés au composant */}
      <InscriptionComponent
        handleLogin={handleLogin}
        handleSignup={handleSignup}
        errorMessage={errorMessage}
      />
    </div>
  );
};

// Exporter le conteneur InscriptionContainer
export default InscriptionContainer;
