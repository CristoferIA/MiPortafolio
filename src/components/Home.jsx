import React, { useEffect, useState } from "react";
import "../../public/css/home.css";

const Home = () => {
  const text = ["Cristofer IA", "Developer", "Freelancer", ""];

  const [name, setName] = useState("");
  const [counter, setCounter] = useState(0);
  const [tempBool, setTempBool] = useState(true);
  const [tempNumber, setTempNumber] = useState(0);

  const [cursor, setCursor] = useState(false);
  const [textCursor, setTextCursor] = useState("|");

  setTimeout(() => {
    if (counter > text[tempNumber].length - 1) {
      if (cursor) {
        setTextCursor("|");
        setCursor(false);
      } else {
        setTextCursor("");
        setCursor(true);
      }
    } else {
      setTextCursor("|");
    }
  }, 450);

  setTimeout(() => {
    if (text.length - 1 === tempNumber) {
      setTempNumber(0);
    }
    if (tempBool) {
      setName(text[tempNumber].slice(0, counter));
      if (counter < text[tempNumber].length) {
        setCounter(counter + 1);
      }

      if (counter === text[tempNumber].length - 1) {
        setTimeout(() => {
          setTempBool(false);
        }, 2300);
      }
    } else {
      setName(text[tempNumber].slice(0, counter));
      setCounter(counter - 1);
      if (counter === 1) {
        setTempBool(true);
        setTempNumber(tempNumber + 1);
      }
    }
  }, 100);

  return (
    <div className="home">
      <div className="home_container">
        <div className="home__information">
          <h3>Hola!</h3>
          <h1>
            Soy {name}
            {textCursor}
          </h1>
          <p>
            Y estoy listo para solucionar los mayores desafíos de la industria.
          </p>
          <div>
            <button
              onClick={() => {
                window.open(
                  "https://drive.google.com/file/d/1of8A5gxpQL2ZJI0qclaF32A656mTu_Xi/view?usp=sharing",
                  "_blank"
                );
              }}
            >
              <i className="fas fa-download"></i> Mi CV
            </button>
            {/*<button>
              <i className="fas fa-envelope"></i> Contactame
            </button>*/}
          </div>
          <div>
            <ul>
              <li>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/cristofer-islach%C3%ADn-avenda%C3%B1o-217657135/"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://www.youtube.com/@caminoalfuturo3799"
                >
                  <i className="fab fa-youtube"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="home__image">
          <img src="./yo.jpeg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
