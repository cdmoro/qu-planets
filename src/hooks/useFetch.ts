import { useEffect, useState } from "react"

const useFetch = <T = any>(url: string, callback?: Function): [T, boolean, string, Function] => {
    const [data, setData] = useState<T>()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(true)

    async function fetchData() {
        setLoading(true)
        setError('')
        try {
            const r = await fetch(url)
            const data: T = await r.json()

            if (callback){
                setData(callback(data))
            } else {
                setData(data)
            }
        } catch (error) {
            setError('Bad request')
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchData()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [url])

    return [
        data as T,
        loading,
        error,
        fetchData
    ]
}

export {
    useFetch
}