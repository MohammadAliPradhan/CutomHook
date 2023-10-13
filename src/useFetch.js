import { useState, useEffect } from 'react';
import axios from "axios"

export default function useFetch(api) {

    const [data, setData] = useState(null);

    useEffect(()=>{
        axios.get(api)
        .then((response)=>{
            setData(response.data)
        })
    }, [api])
    return [data];
}
