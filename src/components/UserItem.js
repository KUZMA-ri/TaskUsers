import styles from "./styles/userItem.module.css";
import { useNavigate } from "react-router-dom";
import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react";
import axios from 'axios';

const UserItem = () => {
    const { id } = useParams();
    const [user, setUser] = useState();
    const navigate = useNavigate(null);

    const goBack = () => navigate(-1);

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
            <button 
                className={styles.btn_back}
                onClick={goBack}
                >Go back</button>
        </div>
    )
}

export default UserItem;


