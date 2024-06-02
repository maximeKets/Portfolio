import React from "react";
import Card from "react-bootstrap/Card";
import {ImPointRight} from "react-icons/im";

function AboutCard() {
    return (
        <Card className="quote-card-view">
            <Card.Body>
                <blockquote className="blockquote mb-0">
                    <p style={{textAlign: "justify"}}>
                        Après 18 mois de formation au
                        <a className="no-underline" rel="noreferrer" target={"_blank"}
                           href={"https://le-campus-numerique.fr/formations-developpeur2/#webetapplisalternance"}>
                            <span className="purple"> "campus numérique In the Alps"</span>
                        </a>, dont 12 en alternance chez
                        <span className="purple"> Park4Night </span>
                        en tant que
                        <span className="purple"> développeur Full Stack</span>
                        , j'ai acquis une maîtrise des principaux langages et frameworks associés.
                        <br/>
                        <br/>
                        Depuis un an, je travaille en freelance,
                        réalisant plusieurs projets principalement en Python.
                        <br/>
                        <br/>
                        Aujourd'hui, mes forces sont :
                    </p>
                    <ul>
                        <li className="about-activity">
                            <ImPointRight/> Python, PHP, JavaScript
                        </li>
                        <li className="about-activity">
                            <ImPointRight/> Collecter, agréger et nettoyer des données
                        </li>
                        <li className="about-activity">
                            <ImPointRight/> Force de proposition, résilience et résolution de problèmes
                        </li>
                        <li className="about-activity">
                            <ImPointRight/> Fluent english
                        </li>
                    </ul>

                    <p style={{color: "rgb(155 126 172)"}}>
                        "Se réunir est un début, rester ensemble est un progrès, travailler ensemble est la réussite."{" "}
                    </p>
                    <footer className="blockquote-footer">Henry Ford</footer>
                </blockquote>
            </Card.Body>
        </Card>
    );
}

export default AboutCard;
