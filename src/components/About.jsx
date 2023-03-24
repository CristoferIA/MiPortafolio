import React from "react";
import "../../public/css/about.css";

const About = () => {
  return (
    <div className="about">
      <div className="about__container">
        {/*<div className="about__foto"></div>*/}
        <div className="about__information">
          <h2>¿Quién soy?</h2>
          <h1>Soy Cristofer Islachín, Desarrollador Full Stack Developer</h1>
          <p>
            {" "}
            Soy Ingeniero de Sistemas con +1 año de experiencia, actualemnte
            estoy cursando una maestría en Inteligencia Artificial, tambien me
            desempeño como desarrollador en frontend y backend. Busco trabajo
            como developer en una empresa que me permita explotar mis
            conocimientos de python, PHP, Java, JavaScript, React, express,
            html5, css3, git, sql, mySQL, PostgreSQL, POO, y todo lo relacionado
            a la programación. Dentro de mis habilidades está la investigación y
            el trabajo en equipo. Mi área de interés es el data science.
          </p>
          <p>
            Adicionalmente tengo estudio técnico en operación de computadoras,
            pudiendo realizar trabajos de diseño publicitario y edición de
            videos, manejando programas como: CorelDraw, Photoshop, after efect,
            adobre premier. Estas disciplinas me complementa en mi trabajo como
            desarrollador Front-Dnd.
          </p>
          <div className="about__information-detalle">
            <div>
              <p>
                Nombre: <span>Cristofer Islachín Avendañp</span>
              </p>
              <p>
                Edad: <span>29</span>
              </p>
            </div>
            <div>
              <p>
                Ciudar: <span>Apurímac, Perú</span>
              </p>
              <p>
                Email: <span>cristofer0993@gmail.com</span>
              </p>
            </div>
          </div>
          <button
            onClick={() => {
              window.open(
                "https://drive.google.com/file/d/1of8A5gxpQL2ZJI0qclaF32A656mTu_Xi/view?usp=sharing",
                "_blank"
              );
            }}
          >
            <i className="fas fa-download"></i> Descargar CV
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
