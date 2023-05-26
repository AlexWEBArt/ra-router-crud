import { Link } from "react-router-dom";

export default function Header() {
    return(
        <div className="header">
            <Link className='btn btn-new' to='/ra-router-crud/posts/new'>Создать пост</Link>
        </div>
    )
}