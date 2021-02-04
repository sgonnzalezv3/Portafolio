import React, { Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavbarPage } from "./Components/NavbarPage";
import { Header } from "./Components/Header";
import "./Components/Header.css";
import Normalize from "react-normalize";
import { InfoField } from "./Components/InfoField";
import { Skills } from "./Components/Skills";
import ProgressBar from "react-bootstrap/ProgressBar";
import "./Components/Skills.css";
import "./Components/Contact.css";
import { Contact } from "./Components/Contact";
import { TextField } from "@material-ui/core";

export const PortfolioApp = () => {
  return (
    <>
      <div className="header-container">
        <div className="container">
          <NavbarPage />
        </div>
        <div className="container">
          <div>
            <Header />
          </div>
        </div>
      </div>
      <div className="container mt-5 pt-5 pb-5 ">
        <InfoField />
      </div>
      <div className="container letter text-center mt-5 pt-5 animate__animated animate__fadeIn">
        Skills and Knowledge
      </div>
      <div className="container pt-4">
        <Skills />
      </div>
      <div className="header-container2">
        <div className="container espacio2 ubication">
          <Contact />
        </div>
      </div>
    </>
  );
};
