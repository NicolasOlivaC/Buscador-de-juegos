import React, {useState} from 'react'


import Titulo from './Titulo'
import Input from './Input'
import Columna from './Columna'


import '../app.css'

const App = props => {
    const [lista, setLista] = useState(['Kingdom hearts recoded', 'God eater 3'])

    return (
        <div className="container-xxl text-center mt-5">
            <Titulo/>
            <Input setLista={setLista}/>
            <div className="row-xxl ">
              {lista.map((obj) => <Columna key={obj} titulo={obj}/>  )}
            </div>
        </div>
    )
}

export default App
