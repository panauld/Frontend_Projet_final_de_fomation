import React, { useState } from "react";
import DetailComponent from "../component/DetailComponent.jsx";

const DetailContainer = () => {
  const [jsonData, setJsonData] = useState(null);

  const mockArticles = [
    {
      id: 1,
      name: "Article 1",
      price: 20,
      size: "M",
      quality: "Haute",
    },
    // Ajoutez d'autres articles selon vos besoins
  ];
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "C:Usersisi.751FJW2DocumentsFrontend_Projet_final_de_fomationProjet_final_de_fin_de_formationJsonFrontEnd.json"
        ); // Update the path accordingly
        const data = await response.json();
        setJsonData(data);
        mockArticles = data;
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); // The empty dependency array ensures that the effect runs once when the component mounts

  // TODO: Récupérer la liste des articles depuis la base de données

  return (
    <div>
      {/* Afficher la liste des articles */}

      {mockArticles.map((article) => (
        <div key={article.id} onClick={() => handleShowDetail(article)}>
          <p>{article.name}</p>
          <p>{article.price}</p>
          <p>{article.size}</p>
          <p>{article.quality}</p>
          {/* Ajouter d'autres informations d'affichage si nécessaire */}
        </div>
      ))}

      {/* Afficher le détail de l'article sélectionné */}
      {selectedArticle && (
        <DetailComponent
          show={showModal}
          handleClose={handleCloseDetail}
          article={selectedArticle}
        />
      )}
    </div>
  );
};

export default DetailContainer;
