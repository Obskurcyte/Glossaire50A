import PageType from "../components/PageType";
import React from 'react'
function Newsletter () {
    return (
        <div>
            <PageType
                title="NEWSLETTER"
                title2="Newsletter"
                content="Une définition de Newsletter"
                alt="newsletter"
                image="https://www.50a.fr/img/upload/glossaire-newsletter.jpg"
                description="Le terme de newsletter désigne généralement un e-mail à vocation commerciale envoyé périodiquement à des prospects ou clients abonnés. Le contenu de la newsletter peut être simplement constitué d’une sélection de produits ou avoir un contenu éditorial. Les newsletters marchandes, personnalisées à partir des données clients/prospects sont de plus en plus présentes, au détriment des newsletters généralistes. Elles peuvent être mensuelles, hebdomadaires ou quotidiennes. La périodicité dépend de la nature de l’offre et des informations."
            />
        </div>
    )
}

export default Newsletter;