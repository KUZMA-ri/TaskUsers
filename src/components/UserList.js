import { Link } from 'react-router-dom';

const UserList = ({ users }) => {

    return(
        <>
            {users &&
                users.map(user => (
                    <Link key={user.id} to={`/users/${user.id}`}>
                        <h2>{user.name}</h2>
                    </Link>
                ))}
        </>
    )
}

export default UserList;