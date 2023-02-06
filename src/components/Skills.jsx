import React from 'react'
import '../../public/css/skills.css'
import { SiMysql, SiPostgresql } from "react-icons/si";
import HeaderTitle from "../headerComponent/HeaderTitle";

const Skills = () => {
  return (
    <div className='skills'>
        <div className='skills__container'>
            <HeaderTitle title={'Skills'} myTitle={'My Skills'}/>
            <div className='skills__items'>
                <div className='skills__items-element'>
                    <div><i className="fab fa-react"></i></div>
                    <div>React Js</div>
                    <div> + 400 Hrs</div>
                </div>
                <div className='skills__items-element'>
                    <div><i className="fab fa-js"></i></div>
                    <div>Java Script</div>
                    <div>+ 1 año experiencia</div>
                </div>
                <div className='skills__items-element'>
                    <div><i className="fab fa-html5"></i></div>
                    <div>HTML</div>
                    <div>+ 1 año experiencia</div>
                </div>
                <div className='skills__items-element'>
                    <div><i className="fab fa-css3-alt"></i></div>
                    <div>CSS3</div>
                    <div>+ 1 año experiencia</div>
                </div>
                <div className='skills__items-element'>
                    <div><i className="fab fa-php"></i></div>
                    <div>PHP</div>
                    <div>+ 1 año experiencia</div>
                </div>
                <div className='skills__items-element'>
                    <div><i className="fab fa-python"></i></div>
                    <div>Python</div>
                    <div>+ 300 Hrs</div>
                </div>
                <div className='skills__items-element'>
                    <div><i className="fab fa-java"></i></div>
                    <div>Java</div>
                    <div>+ 300 Hrs</div>
                </div>
                <div className='skills__items-element'>
                    <div> <SiMysql/> </div>
                    <div>MySQL</div>
                    <div>+ 1 año experiencia</div>
                </div>
                <div className='skills__items-element'>
                    <div> <SiPostgresql/> </div>
                    <div>PostgreSQL</div>
                    <div>+ 300 Hrs</div>
                </div>
                <div className='skills__items-element'>
                    <div> <i className="fab fa-node"></i></div>
                    <div>Node Js</div>
                    <div> + 400 Hrs</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills