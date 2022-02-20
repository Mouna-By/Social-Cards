import React, {} from 'react'
import {Card, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./style.css";

const UserCard = ({user}) => {
    return (
        <div className="card">
        <Card style={{ width: '18rem'}}>
    <Card.Body>
        <Card.Title className="card_title">{user.name}</Card.Title>
        <Card.Text>{user.username}</Card.Text>
        <Card.Text>{user.email}</Card.Text>
        <Button className="button" variant="primary">
        <Link className="link" to={`/user/${user.id}`}>My Profile</Link>
        </Button>
    </Card.Body>
</Card>
        </div>
    );
};

export default UserCard