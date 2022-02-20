
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {Card} from 'react-bootstrap'
import "./style.css";
const Post = () => {
    const [post, setPost] = useState([])
    const{id}=useParams();
    useEffect(() => {
        axios
        .get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
        .then((res)=>setPost(res.data))
        .catch((err)=>console.log(err));
        console.log(post)
    }, [])

    return (
        <div>
        {post && post.map((el)=>  
    <Card className="postcard" border="primary" style={{ width: '18rem' }}>
    <Card.Header className="postheader" style={{backgroundColor:'#73a4a8'}}>Post</Card.Header>
    <Card.Body>
        <Card.Title>Title: {el.title}</Card.Title>
        <Card.Text>
        Body: {el.body}
        </Card.Text>
        </Card.Body>
    </Card> )}
        </div>
    )
}

export default Post