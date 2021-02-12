import React, { useState } from 'react'
import Referencias from './Referencias'

const Input = ({ setLista }) => {
    const [input, setInput] = useState('');
    const handleInput = (event) => {
        setInput(event.target.value)
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        if (input.length > 2) {
            setLista(anterior => [input, ...anterior])
        }
    }

    return (
        <>
            <form className="form-group mt-3" onSubmit={handleSubmit}>
                <i className="fas fa-search d-inline mx-2"></i>
                <input className="form-control mx-auto w-75 d-inline" autoComplete="off" onChange={handleInput} type='text' name="insJuego" value={input} placeholder='Tu Juego Favorito' />
            </form>
            { input.length >5 && <Referencias categoria={input} setInput={setInput}/>}

        </>
    )
}

export default Input
