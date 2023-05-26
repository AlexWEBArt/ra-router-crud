import { useContext } from "react";
import { useNavigate } from "react-router";
import { PostContext } from "../context/PostContext";


export default function ItemPosts(props) {
    const {setContent, setCreated} = useContext(PostContext)
    const {id, content, created} = props.post
    const timestamp = '- ' + String(Math.floor((new Date() - created) /1000 / 60)) + ' минут'
    const navigate = useNavigate()

    const handleClickPost = () => {
        if (props.children) {return}
        setContent(content);
        setCreated(created);
        navigate(`/ra-router-crud/posts/:${id}`)
    }

    return(
        <div className="post-container" data-id={id} onClick={handleClickPost}>
            <div className="post-header">
                <img className="post-avatar" src="https://i.pravatar.cc/300" alt="avatar"></img>
                <div className="post-annotation">
                    <p className="author-name">Vasya</p>
                    <p className="post-timestamp">{timestamp}</p>
                </div>
            </div>
            <div className="post-body">
                {content}
            </div>
            <div className="post-action">
                {props.children && props.children}
            </div>
        </div>
    )
}