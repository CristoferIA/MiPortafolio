import React from "react";
import "../../public/css/portafolio.css";
import HeaderTitle from "../headerComponent/HeaderTitle";

const Portafolio = () => {
  return (
    <div className="portafolio">
      <div className="portafolio__container">
        <HeaderTitle title={"Portafolio"} myTitle={"My Portafolio"} />
        <div className="portafolio__items">
          <div
            className="portafolio__items-element"
            onClick={() => {
              window.open(
                "https://cristoferia-entregable6.netlify.app/#/",
                "_blank"
              );
            }}
          >
            <div className="portafolio__image">
              <img src="./public/images/ecommers.png" alt="" />
            </div>
            <div>
              <h2>Ecommerce</h2>
              <button
                onClick={() => {
                  window.open(
                    "https://cristoferia-entregable6.netlify.app/#/",
                    "_blank"
                  );
                }}
              >
                Web Site
              </button>
            </div>
          </div>
          <div
            className="portafolio__items-element"
            onClick={() => {
              window.open(
                "https://gregarious-muffin-125863.netlify.app/#/",
                "_blank"
              );
            }}
          >
            <div className="portafolio__image">
              <img src="./public/images/pokedex.png" alt="" />
            </div>
            <div>
              <h2>Pokedex</h2>
              <button
                onClick={() => {
                  window.open(
                    "https://gregarious-muffin-125863.netlify.app/#/",
                    "_blank"
                  );
                }}
              >
                Web Site
              </button>
            </div>
          </div>
          <div
            className="portafolio__items-element"
            onClick={() => {
              window.open(
                "https://storied-blini-5d10fd.netlify.app/",
                "_blank"
              );
            }}
          >
            <div className="portafolio__image">
              <img src="./public/images/rickAndMorty.png" alt="" />
            </div>
            <div>
              <h2>Rick and Morty</h2>
              <button
                onClick={() => {
                  window.open(
                    "https://storied-blini-5d10fd.netlify.app/",
                    "_blank"
                  );
                }}
              >
                Web Site
              </button>
            </div>
          </div>
          <div
            className="portafolio__items-element"
            onClick={() => {
              window.open(
                "https://cristoferia.github.io/ecomersAcademlo/",
                "_blank"
              );
            }}
          >
            <div className="portafolio__image">
              <img src="./public/images/academloStore.png" alt="" />
            </div>
            <div>
              <h2>AppStore</h2>
              <button
                onClick={() => {
                  window.open(
                    "https://cristoferia.github.io/ecomersAcademlo/",
                    "_blank"
                  );
                }}
              >
                Web Site
              </button>
            </div>
          </div>
          <div
            className="portafolio__items-element"
            onClick={() => {
              window.open(
                "https://tourmaline-figolla-2952bc.netlify.app/",
                "_blank"
              );
            }}
          >
            <div className="portafolio__image">
              <img src="./public/images/weatherApp.png" alt="" />
            </div>
            <div>
              <h2>WeatherApp</h2>
              <button
                onClick={() => {
                  window.open(
                    "https://tourmaline-figolla-2952bc.netlify.app/",
                    "_blank"
                  );
                }}
              >
                Web Site
              </button>
            </div>
          </div>
          <div
            className="portafolio__items-element"
            onClick={() => {
              window.open(
                "https://visionary-druid-815c5d.netlify.app/",
                "_blank"
              );
            }}
          >
            <div className="portafolio__image">
              <img src="./public/images/CRUD.png" alt="" />
            </div>
            <div>
              <h2>CRUD con React</h2>
              <button
                onClick={() => {
                  window.open(
                    "https://visionary-druid-815c5d.netlify.app/",
                    "_blank"
                  );
                }}
              >
                Web Site
              </button>
            </div>
          </div>
          <div
            className="portafolio__items-element"
            onClick={() => {
              window.open(
                "https://magical-moonbeam-e57888.netlify.app/",
                "_blank"
              );
            }}
          >
            <div className="portafolio__image">
              <img src="./public/images/tarjetaAleatoria.png" alt="" />
            </div>
            <div>
              <h2>Tarjetas aleatoria con React</h2>
              <button
                onClick={() => {
                  window.open(
                    "https://magical-moonbeam-e57888.netlify.app/",
                    "_blank"
                  );
                }}
              >
                Web Site
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portafolio;
