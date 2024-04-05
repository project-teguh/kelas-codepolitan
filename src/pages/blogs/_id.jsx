// import { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
import { useLoaderData } from "react-router-dom";


function SinglePost() {
    const post = useLoaderData();

    // const params = useParams();
    // const [post, setPost] = useState(null);

    // useEffect(() => {
    //     fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
    //    .then((res) => res.json())
    //    .then((kontol) => setPost(kontol));
    // }, [params.id]);

    //note: useEffect, useState, dan useParams sudah tidak diperlukan lagi untuk penampilan dan parsing data API.
    // sebab sudah dihandle oleh useLoaderData

    return (
        <>
            <h2>{post?.title}</h2>
            <p>{post?.body}</p>
        </>
    );
}
export default SinglePost;


