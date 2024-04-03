import { useState, useEffect } from "react";
import postsData from "../posts.json";
import Article from "../components/Article";
import Search from "../components/Search";
function Homepage() {
    const [posts, setPosts] = useState(postsData);
    const [totalPosts, setTotalPosts] = useState(0); // set total posts
    const [externalPosts, setExternalPosts] = useState([]); // inisiasi set untuk set external posts (api)

    const onSearchChange = (value) => {
        console.log(value);
        const filteredPosts = postsData.filter((item) =>    
        item.title.includes(value)
        );
        setPosts(filteredPosts);
        setTotalPosts(filteredPosts.length);
    }

    useEffect(() => { 
        fetch("https://jsonplaceholder.typicode.com/posts/")
        .then((response) => response.json())
        .then((json) => setExternalPosts(json));
    }, []);

    useEffect(() => {
        console.log("ada post baru");
    }, [])

    // Note: useEffect bisa digunakan untuk mentau sebuah state yang ditampung dalam array. ketika state yang dipantau berubah maka ia akan menjalankan baris kode atasnya (render)

    return (
        <>
            <h1>Simple Blog</h1>
            <Search onSearchChange = {onSearchChange} totalPosts = {totalPosts} />
            {/* looping artikel */}
            {posts.map((props, index) => (
                // <Article title={title} tags={tags} date={date} /> // cara yang lain unutk menampilkan title, date, dan tags
                <Article {...props} key={index} />
            )
            )
            }
            <hr />
            <h2>External Posts</h2>
            {externalPosts.map((item, index) => (
                <div key={index}>-{item.title}</div>
            ))}
        </>
    );
}

export default Homepage;