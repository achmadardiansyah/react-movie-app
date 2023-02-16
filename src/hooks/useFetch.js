import { useEffect, useState } from 'react';

const useFetch = (url, dependencies )=> {

    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isNotFound, setIsNotFound] = useState(false);

    useEffect(()=>{

        fetch(url)
            .then(res => {
                setIsLoading(true)
                return res.json()
            })
            .then(data => setData(data))
            .finally(()=> {
                setIsLoading(false)

                if (!data?.results.length) {
                    setIsNotFound(true)
                } else {
                    setIsNotFound(false)
                }
            })

    }, dependencies ? dependencies : [])

    return [
        data,
        data?.total_pages,
        isLoading,
        isNotFound
    ]

}

export default useFetch;