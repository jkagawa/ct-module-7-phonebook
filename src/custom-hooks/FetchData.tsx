import { useState, useEffect } from "react"
import { server_calls } from "../api/server"


function useGetData() {
    const [ contactData, setData ] = useState<[]>([])

    async function handleDataFetch() {
        const result = await server_calls.get()
        setData(result)
    }

    // useEffect on mount
    useEffect(() => {
        handleDataFetch()
    }, [])

    return { contactData, getData: handleDataFetch }
}

export default useGetData