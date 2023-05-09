import React from 'react';
const UserCard = ( { user, deleteUser, loadUsers, isEditVisible, setIsEditVisible, setUser } ) => {  
  return (
    <article className='bg-gray-300 shadow-xl m-10 p-5 rounded-lg select-none border-white border-4'>
      <h2 className='text-2xl font-bold pb-8 text-center'>
        {user.first_name} {user.last_name}
      </h2>
      <ul className='text-md'>
        <li className='flex flex-row text-xl'>
          <span className='font-bold text-xl'><i className='bx bx-envelope' ></i> : &nbsp; &nbsp; &nbsp; &nbsp;</span>
          {user.email}
        </li>
        <li className='flex flex-row text-xl'>  
          <span className='font-bold text-xl'><i className='bx bx-gift' ></i> : &nbsp; &nbsp; &nbsp; &nbsp;</span>
          {user.birthday}
        </li>
        <div className="flex flex-row justify-center gap-3 pt-4">
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