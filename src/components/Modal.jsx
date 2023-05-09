import React from 'react'

const Modal = ({isVisible, setIsFormVisible, children}) => {
    return (
        <>
            { isVisible && (
                <div className="flex flex-row justify-center items-center absolute inset-0 bg-[rgba(0,0,0,0.28)] text-black rounded-lg" onDoubleClick={() => setIsFormVisible(!isVisible)}>
                {children}
                </div>
            )}
        </>
    );
};
export default Modal;