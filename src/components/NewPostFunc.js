import { useContext, useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom";
import { PostContext } from "../context/PostContext";


export default function NewPost(props) {
    const {setUpdate} = useContext(PostContext);
    const [id, setId] = useState(0)
    const [text, setText] = useState('');
    const [prevLink, setPrevLink] = useState('/ra-router-crud')
    const navigate = useNavigate()

    useEffect(() => {
        if (props.post) {
            setId(props.post.postId)
            setText(props.post.content)
            setPrevLink(`/ra-router-crud/posts/:${props.post.postId}`)
        }
    }, [props])
    
    const handleChangeText = (e) => {
        const { value } = e.target;
        setText(value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(id)
        fetch('https://ra-router-crud-backend.onrender.com/posts', {
            method: 'POST',
            header: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({id: id, content: text})
        })

        navigate('/ra-router-crud');
    }

    return(
        <div className="new-post-container">
            <div className="new-post-header">
                {
                    props.post ?
                    <Link className="btn btn-close" to={prevLink} onClick={() => {setUpdate(false)}}>&#215;</Link>
                    :
                    <Link className="btn btn-close" to={prevLink}>&#215;</Link>
                }
            </div>
            <form className="form-create-post" onSubmit={handleSubmit}>
                <div className="avatar"></div>
                <textarea className="form-textarea" defaultValue={text} onChange={handleChangeText}>

                </textarea>
                <div className="new-post-action">
                        <button className="btn btn-create" type="submit">
                                {props.post ? 'Сохранить' : 'Опубликовать'}
                        </button>
                </div>
            </form>
        </div>
    )
}