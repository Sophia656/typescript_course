import axios from 'axios';
import React, { FC, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { IUser } from '../types/types';

interface UserItemPageParams {
    id: string,
}

const UserItemPage: FC = () => {
    const [user, setUser] = useState<IUser | null>(null);
    const params = useParams<UserItemPageParams>();
    const history = useNavigate()

    useEffect(() => {
        fetchUser()
    }, []);

    async function fetchUser () {
        try {
        const responce = await axios.get<IUser>('https://jsonplaceholder.typicode.com/users/' + params.id)
        setUser(responce.data)
        } catch(e) {
        alert(e )
        }
    }
    return (
        <div>
            <button onClick={() => history('/users')}>BACK</button>
            <h1>Page of {user?.name}</h1>
            <div>
                {user?.email}
            </div>
            <div>
                {user?.address.city} {user?.address.street} {user?.address.zipcode}
            </div>
        </div>
    );
};

export default UserItemPage;