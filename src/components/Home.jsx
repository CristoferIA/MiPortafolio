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
                  "https://drive.google.com/file/d/1Yiha4sbJekwH69sgln8Pu50QcQpIBurq/view?usp=share_link",
                  "_blank"
                );
              }}
            >
              <i className="fas fa-download"></i> Mi CV
            </button>
            <button>
              <i className="fas fa-envelope"></i> Contactame
            </button>
          </div>
          <div>
            <ul>
              <li>
                <i className="fab fa-linkedin-in"></i>
              </li>
              <li>
                <i className="fab fa-youtube"></i>
              </li>
            </ul>
          </div>
        </div>
        <div className="home__image">
          <img src="./miFoto2.jpeg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
