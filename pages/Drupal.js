import PageType from "../components/PageType";
import React from 'react'
function Drupal () {
    return (
        <div>
            <PageType
                title="DRUPAL"
                title2="Drupal"
                content="Une définition de Drupal"
                alt="drupal"
                image="https://www.50a.fr/img/upload/drupal.jpg"
                description="Drupal est un système de gestion de contenu (CMS) libre, open-source et écrit en PHP. Ce CMS à la réputation d’être difficilement abordable pour les non développeurs."
            />
        </div>
    )
}

export default Drupal;