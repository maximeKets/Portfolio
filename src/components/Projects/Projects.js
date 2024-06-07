import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import invoice from "../../Assets/Projects/invoice.png";
import wecrew from "../../Assets/Projects/wecrew.png";
import business from "../../Assets/Projects/business_2.png";
import premium from "../../Assets/Projects/premium.png";

function Projects() {
    return (
        <Container fluid className="project-section">
            <Particle/>
            <Container>
                <h1 className="project-heading">
                     <strong className="purple">Projets </strong>récents
                </h1>
                <p style={{color: "white"}}>
                    Quelques projets pertinents.
                </p>
                <Row style={{justifyContent: "center", paddingBottom: "10px"}}>
                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={invoice}
                            isBlog={false}
                            title="zoho invoice builder"
                            description="Système en ligne automatisé de facturation conforme aux normes fiscales internationales, utilisant Django, 3 bases de données et l'API Zoho Invoice pour l'extraction, la normalisation et la génération des datas."
                            ghLink="https://github.com/maximeKets/Zoho_billing_generator"
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={wecrew}
                            isBlog={false}
                            title="WECREW"
                            description="W3CREW est une plateforme simplifiant la recherche de freelances pour projets web3, avec un service d'entiercement sécurisé pour les paiements en crypto."
                            ghLink="https://github.com/maximeKets/wecrew"
                            demoLink="https://cosmic-crew.gitbook.io/cosmic-crew-whitepaper/cosmic-crew-whitepaper/utility-w3crew"
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={business}
                            isBlog={false}
                            title="Park4night Business"
                            description="
              Développement d'une plateforme pour l'extraction et le formatage des données, générant des visualisations graphiques dynamiques
               avec filtres et gestion d'erreurs, permettant le suivi en temps réel des campagnes publicitaires en six langues avec accès sécurisé et pages publiques sécurisées.
              "
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={premium}
                            isBlog={false}
                            title="Park4night Premium"
                            description="
         Développement d'une plateforme sécurisée pour les utilisateurs premium de Park4night, permettant des opérations
         CRUD sur les informations des lieux et la visualisation des commentaires. L'interface est responsive et multilingue.
              "
                            demoLink="https://www.figma.com/design/XtUl3rRxKxdSYEE2CH9MKJ/Premium?node-id=9565-110&t=1Xm980IFxoMIMnpf-1"
                        />
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default Projects;
