import React from 'react';
const UserCard = ( { user, deleteUser, loadUsers, isEditVisible, setIsEditVisible, setUser } ) => {  
  return (
    <article>
      <h2>
        {user.first_name} {user.last_name}
      </h2>
      <ul>
        <li>
          <span>MAIL: </span>
          {user.email}
        </li>
        <li>
          <span>BIRTHDAY: </span>
          {user.birthday}
        </li>
        <div className="flex flex-row justify-end gap-3">
            <button className="bg-red-500 px-3 py-2 rounded-full hover:bg-red-700" onClick={() => {
                deleteUser(user)
                loadUsers()
              }}><i className='bx bxs-trash' ></i> </button>
            <button className="bg-blue-500 px-3 py-2 rounded-full hover:bg-blue-600" onClick={() => {
                setIsEditVisible(!isEditVisible)
                setUser(user)
              }}> <i className='bx bx-edit' ></i> </button>
        </div>
      </ul>
    </article>
  );
};

export default UserCard;