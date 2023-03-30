import React from "react";
import "../../public/css/about.css";

const About = () => {
  return (
    <div className="about">
      <div className="about__container">
        {/*<div className="about__foto"></div>*/}
        <div className="about__information">
          <h2>¿Quién soy?</h2>
          <h1>Soy Cristofer Islachín, desarrollador web full stack</h1>
          <p>
            {" "}
            Soy ingeniero de sistemas con más de 1 año de experiencia, me
            desempeño como desarrollador en frontend y backend. Busco trabajo
            como developer en una empresa que me permita explotar mis
            conocimientos de JavaScript, React.js, Node.js, Express, HTML, CSS,
            GIT, SQL, MySQL, PostgreSQL, PHP, Python, Java, Oracle y todo lo
            relacionado a la programación. Dentro de mis habilidades está la
            investigación y el trabajo en equipo. Mi área de interés es el data
            science.
          </p>
          <p>
            Adicionalmente tengo estudio técnico en operación de computadoras,
            pudiendo realizar trabajos de diseño publicitario y edición de
            videos, manejando programas como: CorelDraw, Photoshop, after efect,
            adobe premier. Estas disciplinas me complementa en mi trabajo como
            desarrollador Frontend.
          </p>
          <div className="about__information-detalle">
            <div>
              <p>
                Nombre: <span>Cristofer Islachín Avendaño</span>
              </p>
              <p>-</p>
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
                "https://drive.google.com/file/d/1kIRyTgetGcG8rzt-fhIiMjgvC0QlU-bW/view",
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
