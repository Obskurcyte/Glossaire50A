import PageType from "../components/PageType";
import React from 'react'
function RGPD () {
    return (
        <div>
            <PageType
                title="RGPD"
                title2="RGPD"
                content="Une définition de RGPD"
                alt="RGPD"
                image="https://www.50a.fr/img/upload/rgpd.jpg"
                description="Le règlement général sur la protection des données (RGPD), adopté par le Parlement européen et le Conseil en avril 2016, remplacera la directive 95/46/CE sur la protection des données au printemps 2018 en tant que loi principale régissant la manière dont les entreprises protègent les données personnelles des citoyens de l'UE. Les entreprises qui sont déjà en conformité avec la directive doivent s'assurer qu'elles sont également en conformité avec les nouvelles exigences du GDPR avant que celui-ci n'entre en vigueur le 25 mai 2018. Les entreprises qui ne se conformeront pas à la directive GDPR avant la date limite seront soumises à de lourdes sanctions et amendes."
            />
        </div>
    )
}

export default RGPD;