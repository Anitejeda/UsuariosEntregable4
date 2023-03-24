import React from 'react'

const EditForm = ({myUser, setUser, handleSubmit, updateUser, loadUsers, reset, register, isEditVisible, setIsEditVisible, emptyForm}) => {
    let {first_name, last_name, email, birthday, password} = myUser
  return (
    <>
        { isEditVisible ? (
            <form onSubmit={handleSubmit((data)=> {
                updateUser(myUser)
                setIsEditVisible(!isEditVisible)
                loadUsers()
                reset(emptyForm)
            })}>
                <h2 className='text-3xl font-bold'>Modificar Usuario</h2>
                <div className="flex flex-col gap-3">
                <div>
                        <label htmlFor="nameId">First Name:</label>
                        <input type="text" id="nameId" {...register("first_name")} value={first_name} className='bg-gray-900 text-white' onChange={(e) => myUser.first_name = e.target.value}/>
                    </div>
                    <div>
                        <label htmlFor="lastNameId">Last Name:</label>
                        <input type="text" id="lastNameId" {...register("last_name")} value={last_name} className='bg-gray-900 text-white' onChange={(e) => myUser.last_name = e.target.value}/>
                    </div>
                    <div>
                        <label htmlFor="emailId">Email:</label>
                        <input type="email" id="emailId" {...register("email")} value={email} className='bg-gray-900 text-white' onChange={(e) => myUser.email = e.target.value}/>
                    </div>
                    <div>
                        <label htmlFor="passwordId" className="font-semibold"> Password:</label>
                        <input type="password" id="passwordId" {...register("password")} value={password} className='bg-gray-900 text-white' onChange={(e) => myUser.password = e.target.value}/>
                    </div>
                    <div>
                        <label htmlFor="">Birthday:</label>
                        <input type="date" {...register("birthday") } value={birthday} className='bg-gray-900 text-white'  onChange={(e) => myUser.birthday = e.target.value}/>
                    </div>
                </div>
                <div className="flex flex-row justify-center items-center mt-5">
                    <button className="bg-cyan-600 text-white font-semibold p-2 rounded-md" > Editar</button>
                </div>
            </form>
        ) 
        : null
        }
    </>
  )
}

export default EditForm