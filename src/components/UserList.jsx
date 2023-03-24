import React from "react";
import UserCard from "./UserCard";

const UserList=({ users, deleteUser, loadUsers, isEditVisible, setIsEditVisible, setUser }) => {
    return(
        <section>
            {users.map((user) => ( 
                <UserCard key={user.id} setUser={setUser} user={user} deleteUser={deleteUser} loadUsers={loadUsers} isEditVisible={isEditVisible} setIsEditVisible={setIsEditVisible}/>
            ))}
        </section>
    )
}

export default UserList;

