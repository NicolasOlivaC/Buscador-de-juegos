import { useState, useEffect, useRef } from 'react'
import obtainInfo from '../helpers/ObtainSlug'

const useObtainInfo = (titulo) => {
    const isMounted = useRef(true)
    const [info, setInfo] = useState({
        data: '',
        loading: true
    })

    useEffect(() => {
        return () => {
            isMounted.current = false
            console.log(isMounted.current)
        }
    }, [])


    useEffect(() => {
        obtainInfo(titulo)
            .then(({name, description_raw, background_image, developers, publisher, platforms2, genres}) => {
                setTimeout(() => {
                    if (isMounted.current) {
                        setInfo({
                            name: name,
                            description: description_raw,
                            background: background_image,
                            developers: developers,
                            publisher: publisher,
                            platfforms: platforms2,
                            genres: genres,
                            loading: false
                        }, [titulo])
                    }
                }, 1000)

            })
    }, [titulo])

    return info
}


export default useObtainInfo
