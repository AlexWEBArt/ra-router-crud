import { useState, useEffect, useRef } from "react";

export default function useJsonFetch(url, options) {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const timestampRef = useRef(null);

    useEffect(() => {
        const fetchReqest = async () => {
            const timestamp = Date.now();
            timestampRef.current = timestamp
            try {
                const response = await fetch(url, options)
                if (!response.ok) {throw new Error(response.statusText)}
                const jsonData = await response.json();
                if (timestampRef.current === timestamp) {setData(jsonData)}
                setError(null)
            } catch (e) {
                setError(null)
            }
        }
        url.length > 1 && fetchReqest()
    }, [url, options])

    return [data, error]
}