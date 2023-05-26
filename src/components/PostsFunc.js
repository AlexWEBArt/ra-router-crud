import { useEffect, useState } from "react";
import useJsonFetch from "../hooks/useJsonFetch";
import Header from "./HeaderFunc";
import ItemPosts from "./ItemPostsFunc";
import Preloader from "./PreloaderFunc";

export default function Posts() {
    const [requestData, setRequestData] = useState({
        url: '',
        options: ''
    })
    const [isLoading, setIsLoading] = useState(false)
    const [data] = useJsonFetch(requestData)
    
    useEffect(() => {
        setRequestData('https://ra-router-crud-backend.onrender.com/posts', {
            method: 'GET',
            header: {
                'Content-Type': 'application/json'
            }
        })
        setIsLoading(true)
    }, [])

    useEffect(() => {
        if (data) {
            setIsLoading(false)
        }
    }, [data])



    return(
        <div className="posts-container">
            <Header />
            {isLoading ? <Preloader /> : data && data.map(item => <ItemPosts key={item.id} post={item} />)}
        </div>
    )
}