import PageType from "../components/PageType";
import React from 'react'
function MicroBlogging () {
    return (
        <div>
            <PageType
                title="MICROBLOGGING"
                title2="Microblogging"
                content="Une définition de Microblogging"
                alt="microblogging"
                image="https://www.50a.fr/img/upload/microblogging.jpg"
                description="Le microblogging est une combinaison de blogging et de messagerie instantanée qui permet aux utilisateurs de créer des messages courts qui seront affichés et partagés avec un public en ligne. Les plateformes sociales comme Twitter sont devenues des formes extrêmement populaires de ce nouveau type de blogging, en particulier sur le Web mobile, ce qui rend la communication avec les gens beaucoup plus pratique qu'à l'époque où la navigation et l'interaction sur le Web étaient la norme. Ces courts messages peuvent prendre la forme d'une variété de formats de contenu, y compris du texte, des images, de la vidéo, de l'audio et des hyperliens. La tendance a évolué vers la fin de l'ère du Web 2.0 après la fusion des médias sociaux et des blogs traditionnels pour créer un moyen plus facile et plus rapide de communiquer avec les gens en ligne et de les tenir informés des informations pertinentes et partageables en même temps."
            />
        </div>
    )
}

export default MicroBlogging;