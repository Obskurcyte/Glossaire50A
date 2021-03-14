import PageType from "../components/PageType";
import React from 'react'
function DemandSidePlatform () {
    return (
        <div>
            <PageType
                title="DEMAND SIDE PLATEFORME (DSP)"
                title2="Demand Side Plateforme"
                content="Une définition de Demand Side Plateforme"
                alt="demand side platform"
                image="https://www.50a.fr/img/upload/demande%20side%20plateforme%20(DSP).jpg"
                description="Une demand side platform (DSP) est une plateforme technologique permettant aux acheteurs de gérer l'achat d'inventaires sur les ad exchanges.

Elle paramètre (ciblage, niveau d'enchère...) et pilote les demandes d'achat média en real time bidding (RTB) des annonceurs en se connectant sur plusieurs ad exchanges.

La DSP propose ainsi l'achat d'inventaires, en temps réel et aux enchères."
            />
        </div>
    )
}

export default DemandSidePlatform;