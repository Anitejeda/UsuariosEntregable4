import React from 'react'

const Modal = ({isVisible, children}) => {
    return (
        <>
            { isVisible && (
                <div className="flex flex-row justify-center items-center absolte inset-0 bg-[rgb(159,159,244)] text-black rounded-lg">
                {children}
                </div>
            )}
        </>
    );
};
export default Modal;