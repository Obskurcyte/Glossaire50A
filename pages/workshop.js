import PageType from "../components/PageType";
import React from 'react'
function Workshop () {
    return (
        <div>
            <PageType
                title="WORKSHOP"
                title2="Workshop"
                content="Une définition de Workshop"
                alt="workshop"
                image="https://www.50a.fr/img/upload/devis-workshop.jpg"
                description="Un workshop désigne un atelier de travail et d'échange axé sur un thème choisi à l'avance. Sur le même modèle que les barcamp, les workshop sont souvent moins spécialisés sur les toutes dernières innovations en lien avec internet, ou les app. Les workshop évoquent des sujets beaucoup plus globaux.

L’objectif du workshop est de créer un lieu de discussion et de rencontre où des spécialistes exposent leurs travaux devant un public composé aussi bien de personnes confirmées que de novices intéressés par le sujet.

Ainsi, il peut rassembler des jeunes chercheurs comme des experts reconnus, et leur permettre de partager leur point de vue et de les inviter à collaborer sur le sujet. "
            />
        </div>
    )
}

export default Workshop;