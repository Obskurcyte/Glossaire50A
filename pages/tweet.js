import PageType from "../components/PageType";
import React from 'react'
function Tweet () {
    return (
        <div>
            <PageType
                title="TWEET"
                title2="Tweet"
                content="Une définition de Tweet"
                alt="tweet"
                image="https://www.50a.fr/img/upload/tweet.jpg"
                description="Un tweet est un petit message de 280 caractères maximum diffusé sur la plateforme Twitter.

Les tweets d’un auteur sont diffusés auprès de ses followers ou abonnés, c’est à dire les individus ayant choisi de suivre la publication de ses petits messages."
            />
        </div>
    )
}

export default Tweet;