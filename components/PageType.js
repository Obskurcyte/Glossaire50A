import Head from 'next/head';
import React from 'react'

const PageType = props => {
    return (
        <div>
            <Head>
                <title>{props.title2}</title>
                <meta name="description" content={props.content}/>
            </Head>
        <section className="title">
            <h1>{props.title}</h1>
        </section>
        <section className="descriptionContainer">
            <div>
                <img src={props.image} alt={props.alt} className="image"/>
            </div>
            <div className="description">
                <p>{props.description}</p>
            </div>
        </section>
        </div>

    )
};

export default PageType