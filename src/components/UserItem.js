import styles from "./styles/userItem.module.css";
import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react";
import axios from 'axios';

const UserItem = () => {
    const { id } = useParams();
    const [user, setUser] = useState();

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then((response) => {
                const user = response.data;
                setUser(user);
            })
    },[id]);

    return(
        <div className={styles.list_container}>
            {user && (
                <>
                    <h2>Name: {user.name}</h2>
                    <h3>UserName: {user.username}</h3>
                    <p>E-mail:{user.email}</p>
                    <p>City:{user.address.city}</p>
                    <p>Street:{user.address.street}</p>
                </>
            )}
        </div>
    )
}

export default UserItem;


