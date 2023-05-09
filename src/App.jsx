import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import UserList from './components/UserList';
import Navbar from './components/Navbar';
import Modal from './components/Modal';
import EditForm from './components/EditForm';

const BASE_URL= 'http://localhost:8080/';

const getUsers = async () => {
  try {
    const res = await axios.get(BASE_URL + 'users/');
    return res.data;
  } catch(error) {
    console.error(error);
  }
};

const postUsers = async ({email, password, first_name, last_name, birthday}) => {
  try {
    await axios.post(BASE_URL + 'users/', {
      email: email, 
      password: password, 
      first_name: first_name, 
      last_name: last_name, 
      birthday: birthday
    }, {
      headers: {
        'Content-Type': 'application/json'
      }
    })  
  } catch(error) {
    console.error(error)
  }
}

const updateUser = async ({id, email, password, first_name, last_name, birthday}) => {
  try {
    await axios({
      method: 'put',
      url: BASE_URL + `users/${id}/`, 
      data: {
        id: id,
        email: email, 
        password: password, 
        first_name: first_name, 
        last_name: last_name, 
        birthday: birthday
      }, 
    }).catch(error => {
      console.log(error.message);
    })
  } catch (error) {
    console.error(error)
  }
}

const deleteUser = async ({id}) => {
  try {
    await axios.delete(BASE_URL + `users/${id}`, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
  } catch (error) {
    console.error(error)
  }
}

const App = () => {
  const [users, setUsers]= useState([]);
  const [isFormVisible, setIsFormVisible]= useState(false);
  const [isEditVisible, setIsEditVisible]= useState(false); 
  const [user, setUser] = useState({})

  const { register, handleSubmit, reset } = useForm();
  
  const loadUsers = async () => { 
    try {
      const users = await getUsers(); 
      setUsers(users);
    } catch (error) {
      console.error(error);
    }
  };

  const emptyForm = { 
    email: "", 
    password: "", 
    first_name: "", 
    last_name: "", 
    birthday: ""
  }

  useEffect(() => {
    loadUsers();
  }, [users]);

  return (
    <body className='bg-gradient-to-bl from-blue-400 to-blue-700 '>
      <div className="min-h-screen flex flex-col justify-certer items-center p-10 text-white">
        <Navbar isFormVisible={isFormVisible} setIsFormVisible={setIsFormVisible}/> 
        <UserList myUser={user} setUser={setUser} users={users} deleteUser={deleteUser} loadUsers={loadUsers} isEditVisible={isEditVisible} setIsEditVisible={setIsEditVisible}/>
        
        <EditForm myUser={user} setUser={setUser} handleSubmit={handleSubmit} updateUser={updateUser} loadUsers={loadUsers} reset={reset} register={register} isEditVisible={isEditVisible} setIsEditVisible={setIsEditVisible} emptyForm={emptyForm}/>
        <Modal isVisible={isFormVisible} setIsFormVisible={setIsFormVisible}>
          <form onSubmit={handleSubmit((data)=> {
              postUsers(data)
              setIsFormVisible(!isFormVisible)
              loadUsers()
              reset(emptyForm)
            })} className="bg-white p-12 rounded-lg">
            <h2 className='text-3xl font-bold pb-4'>Nuevo Usuario</h2>
            <div className="flex flex-col gap-3">
              <div className='flex justify-between gap-10'>
                <label htmlFor="nameId"  className="font-semibold">First Name:</label>
                <input type="text" id="nameId" {...register("first_name")} className='border-2 border-blue-400 focus:outline-none focus:border-blue-700 rounded-lg' />
              </div>
              <div className='flex justify-between gap-10'>
                <label htmlFor="lastNameId"  className="font-semibold">Last Name:</label>
                <input type="text" id="lastNameId" {...register("last_name")} className='border-2 border-blue-400 focus:outline-none focus:border-blue-700 rounded-lg' />
              </div>
              <div className='flex justify-between gap-10'>
                <label htmlFor="emailId"  className="font-semibold">Email:</label>
                <input type="email" id="emailId" {...register("email")} className='border-2 border-blue-400 focus:outline-none focus:border-blue-700 rounded-lg' />
              </div>
              <div className='flex justify-between gap-10'>
                <label htmlFor="passwordId" className="font-semibold"> Password:</label>
                <input type="password" id="passwordId" {...register("password")} className='border-2 border-blue-400 focus:outline-none focus:border-blue-700 rounded-lg' />
              </div>
              <div className='flex justify-between gap-10'>
                <label htmlFor=""  className="font-semibold">Birthday:</label>
                <input type="date" {...register("birthday")} className='border-2 border-blue-400 focus:outline-none focus:border-blue-700 rounded-lg' />
              </div>
            </div>
            <div className="flex flex-row justify-center items-center mt-5">
              <button className="bg-blue-500 text-white font-semibold p-2 rounded-md" > Agregar Nuevo Usuario</button>
            </div>
          </form>
        </Modal>
      </div>
    </body>
  )
}

export default App;