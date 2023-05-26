import { createContext } from "react";

export const PostContext = createContext({
    id: null,
    content: null,
    created: null,
    update: false
})