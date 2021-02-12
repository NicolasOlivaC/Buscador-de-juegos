import React, { useEffect, useRef, useState } from 'react'
import ObtainSlug2 from '../helpers/ObtainSlug2'

const Referencias = ({categoria, setInput}) => {
    const isMounted = useRef(true)
    const [data, setData] = useState([])
    const handleClick = (event) =>{
        setInput(event.target.innerText)
    }

    useEffect(()=>{
        return () =>{
            isMounted.current = false
        }
    }, [])

    useEffect(()=>{
        if(categoria.length %2 == 0){ //limitar la cantidad de peticiones, llegan desordenada sin control.
            if(isMounted.current === true){
                    const referencia = ObtainSlug2(categoria);
                    referencia.then((data)=>{
                        setData(data)
                    })
                    .catch(errores => console.warn)
            }
        }
    },[categoria])

    return (
        <div className="d-flex flex-column ">
            <h2 className="mt-2">Busquedas sugeridas.</h2>
            {data.map( elemento => <a className="btn text-white  mx-auto" key = {elemento } onClick={handleClick}>{elemento}</a>)}
          
        </div>
    )
}


export default Referencias
