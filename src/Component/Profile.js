import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {Card, Button, ListGroup} from 'react-bootstrap';
import { useParams, Link } from 'react-router-dom';

const Profile = () => {
    const {id} = useParams();
    const [user, setUser] = useState({})

    useEffect(() => {
        axios
        .get(`https://jsonplaceholder.typicode.com/users/?id=${id}`)
        .then((res)=>setUser(res.data[0]))
        .catch((err)=>console.log(err));
        console.log(user)
    }, [])
    

    return (
        <div>
        <Card className="profilecard" style={{ width: '18rem' }}>
        <Card.Header style={{backgroundColor:'#73a4a8'}}>Profile</Card.Header>
        
        <ListGroup variant="flush">
        <ListGroup.Item>{user.name}</ListGroup.Item>
        <ListGroup.Item>Username: {user.username}</ListGroup.Item>
        <ListGroup.Item>Email: {user.email}</ListGroup.Item>
        <ListGroup.Item>Phone: {user.phone}</ListGroup.Item>
        </ListGroup>
        
        <Button variant="primary">
        <Link className="link" to={`/post/${user.id}`}>My Post</Link>
        </Button>
        </Card>
    

        </div>
    )
}

export default Profile