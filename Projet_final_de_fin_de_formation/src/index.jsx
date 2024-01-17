import React from "react";
import { createRoot } from "react-dom/client";
import InscriptionContainer from "./container/InscriptionContainer";
import DetailContainer from "./container/DetailContainer";
import FooterContainer from "./container/FooterContainer";
import "./initial.css";

const container = document.getElementById("app");
const root = createRoot(container);

root.render(
  <div>
    <InscriptionContainer />
    <DetailContainer />
    <FooterContainer />
  </div>
);
