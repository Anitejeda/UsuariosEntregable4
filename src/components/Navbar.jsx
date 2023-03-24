import React from "react";

const Navbar = ({isFormVisible, setIsFormVisible}) => {
    return (
        <nav className="w-full flex flex-row justify-around items-center mb-5">
            <h1 className="text-3xl font-bold"> Users Admin</h1>
            <button className="bg-blue-500 p-1 rounded-lg" onClick={() => setIsFormVisible(!isFormVisible)}>
                <i className="bx bx-add-to-queue"></i>
                <span>Add new user</span>
            </button>
        </nav>
    );
};

export default Navbar;