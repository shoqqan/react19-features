import React, {FC, Suspense, use, useRef, useState} from 'react';
import {fetchUsers} from "../1_use/Users.tsx";
import {User} from "../1_use/models/user.ts";

//useless
interface UsersProps {
    initialUsers: User[]
}

const Users: FC<> = () => {
    const [users, setUsers] = useState()
    const formRef = useRef()
}
const UserInit = () => {
    const initialUsers = use(fetchUsers())
    return
}
export const Optimistic = () => {
    return (
        <Suspense fallback={<p>fetching users...</p>}>

        </Suspense>
    );
};

