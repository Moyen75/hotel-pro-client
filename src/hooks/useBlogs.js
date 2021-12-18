import { useEffect, useState } from "react"

const useBlogs = () => {
    const [blogs, setBlogs] = useState([])
    useEffect(() => {
        fetch('https://arcane-tor-66544.herokuapp.com/blogs')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])
    return blogs;
}
export default useBlogs;