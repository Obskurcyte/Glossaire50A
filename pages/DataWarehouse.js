import PageType from "../components/PageType";

function DataWarehouse () {
    return (
        <div>
            <PageType
                title="DATA WAREHOUSE"
                title2="Data warehouse"
                content="Une définition de Data warehouse"
                alt="data warehouse"
                image="https://www.50a.fr/img/upload/datawarehouse.jpg"
                description="Le datawarehouse, en français « entrepôt de données », est le lieu physique de stockage (salle de serveurs) de toutes les données informatiques de l’entreprise.

Le datawarehouse peut être internalisé, externalisé ou distribué."
            />
        </div>
    )
}

export default DataWarehouse;