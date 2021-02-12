import React, { useState } from 'react'
import useObtainInfo from '../hooks/useObtainInfo';


const Columna = ({ titulo }) => {
    const { name, description, background, loading, developers, publisher, platfforms, genres } = useObtainInfo(titulo)

    return (
        <>

            { loading ? <div className="alert alert-primary mt-3 animate__animated animate__flash animate__infinite infinite" role="alert">Loading...</div> :
                <div className="row bord mt-5">

                    <div className="col-xl-5 transparente  animate__animated animate__bounce">

                        <div className="card-body ">
                            <h1 className="card-title">{name}</h1>
                            <img className="w-100" src={background} />

                            <div>
                                <h4 className="mt-3">Ficha Tecnica</h4>
                                < hr/>
                                <ul >
                                    <li> Publisher: {publisher} </li>
                                    <li> Developer: {developers}</li>
                                    <li>Genres: {genres.map(e => `${e}, `)} </li>
                                    <li>Platforms: {platfforms.map(e => `${e}, `)}</li>
                                </ul>
                            </div>
                        </div>

                    </div>

                    <div className="col-xl-7  transparente animate__animated animate__bounce">
                        <div className="col">
                            <h1 className="mt-3">Description</h1>
                            < hr/>
                            <p className="divP">{description}</p>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

// Column.propTypes = {

// }

export default Columna
