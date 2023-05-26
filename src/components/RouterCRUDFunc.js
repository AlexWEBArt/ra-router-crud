import { Routes, Route} from 'react-router-dom';
import { useState } from 'react';
import Posts from './PostsFunc';
import NewPost from './NewPostFunc';
import UpdatePost from './UpdatePostFunc';
import { PostContext } from '../context/PostContext';

export default function RouterCRUD() {
    const [id, setId] = useState(null);
    const [content, setContent] = useState(null);
    const [created, setCreated] = useState(null);
    const [update, setUpdate] = useState(false);

    return(
        <div className="router-crud">
            <PostContext.Provider value={{id, setId, content, setContent, created, setCreated, update, setUpdate}}>
                <Routes>
                    <Route path='/ra-router-crud' element={<Posts />}></Route>
                    <Route path='/ra-router-crud/posts/new' element={<NewPost />}></Route>
                    <Route path='/ra-router-crud/posts/:id' element={<UpdatePost />}></Route>
                </Routes>
            </PostContext.Provider>
        </div>
    )
}