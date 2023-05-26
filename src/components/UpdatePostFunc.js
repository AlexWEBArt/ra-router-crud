import { useNavigate, useParams } from "react-router";
import { useContext } from "react";
import ItemPosts from "./ItemPostsFunc"
import NewPost from "./NewPostFunc";
import { PostContext } from "../context/PostContext";


export default function UpdatePost() {
    const {content, created, update, setUpdate} = useContext(PostContext)
    const { id } = useParams();
    const navigate = useNavigate();


    const handleClickUpdate = () => {      
        setUpdate(true)       
    }

    const handleClickDelete = () => {
        fetch(`https://ra-router-crud-backend.onrender.com/posts/:${id[1]}`, {
            method: 'DELETE',
            header: {
                'Content-Type': 'application/json'
            },
        });

        navigate('/ra-router-crud');
    }
    return(
        <>
            {
                update ? 
                <NewPost post={{postId: id[1], content, created}}>

                </NewPost>
                :
                <ItemPosts post={{id: id[1], content, created}}>
                    <button className="btn btn-update" onClick={handleClickUpdate}>
                        Изменить
                    </button>
                    <button className="btn btn-delete" onClick={handleClickDelete}>
                        Удалить
                    </button>
                </ItemPosts>
            }
        </>
        
    )
}