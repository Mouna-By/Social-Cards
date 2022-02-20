import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import UserCard from './UserCard';

const UserList = () => {
    const [users, setUsers] = useState([]);
    const{id} = useParams();
    
    useEffect(() => {
        axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then((res)=>setUsers(res.data))
        .catch((err)=>console.log(err));
    }, []);
    
    return (
        <div className="list" >
            {users && users.map((el)=><UserCard user={el} key={el.id}/>)}
        </div>
    );
};

export default UserList