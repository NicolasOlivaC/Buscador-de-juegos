import React,{useState, useEffect} from 'react'


const Titulo = props => {
    const titulo = "Buscador de Video Juegos"
    const [titu, setTitu] = useState('')

    useEffect(() => {
        for (let i = 0; i < titulo.length; i++) {
          setTimeout(() => {
            setTitu(anterior => (anterior+titulo[i])) 
          }, 20*i);
        }
    }, [])
    return (
        <>
          <h1>{titu}</h1>  
        </>
    )
}

export default Titulo
