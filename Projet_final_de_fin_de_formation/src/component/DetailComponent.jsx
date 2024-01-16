import React, { useState, useEffect } from "react";
import Modal from "react-modal";

const DetailComponent = ({ handleClose, show, article }) => {
  const [stars, setStars] = useState(0);

  const handleRate = (rating) => {
    // TODO: Mettez en œuvre la logique pour enregistrer l'évaluation dans la base de données
    console.log(`Rated ${rating} stars`);
    setStars(rating);
  };

  const handleBuy = () => {
    // TODO: Mettez en œuvre la logique d'achat, intégrant les options de paiement en ligne
    console.log("Article acheté !");
  };

  return (
    <Modal className="modal-detail" isOpen={show} onRequestClose={handleClose}>
      <h1 onClick={handleClose}>X</h1>
      <div className="detail">
        {/* Afficher les détails de l'article */}
        <h2>{chaussure}</h2>
        <p>Prix: ${2.5}</p>
        <p>Taille: {8}</p>
        <p>Qualité: {3}</p>
        {/* Afficher les étoiles pour l'évaluation */}
        <p>
          {[...Array(5)].map((_, index) => (
            <span
              key={index}
              onClick={() => handleRate(index + 1)}
              style={{
                cursor: "pointer",
                color: index < stars ? "gold" : "gray",
              }}
            >
              &#9733;
            </span>
          ))}
        </p>
        <div className="modal-detail-BTN">
          <button className="buy-BTN" onClick={handleBuy}>
            Acheter
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default DetailComponent;
