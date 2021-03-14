import PageType from "../components/PageType";
import React from 'react'
function Podcast () {
    return (
        <div>
            <PageType
                title="PODCAST"
                title2="Podcast"
                content="Une définition de Podcast"
                alt="podcast"
                image="https://www.50a.fr/img/upload/Podcast.jpg"
                description="Un podcast est un contenu numérique que l’on peut écouter quand, et où on le veut grâce aux flux RSS. Le terme podcast est une contraction d'IPod et de “Broadcast”. Il peut être sous forme de vidéo ou simplement d’audio. Il peut être écouté en ligne ou être téléchargé par l’écouter sans besoin d’une connexion internet.

            "
            />
        </div>
    )
}

export default Podcast;