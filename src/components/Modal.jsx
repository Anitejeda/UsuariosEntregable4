import React from 'react'

const Modal = ({isVisible, children}) => {
    return (
        <>
            { isVisible && (
                <div className="flex flex-row justify-center items-center absolte inset-0 bg-[rgb(84,147,234)] text-black rounded-lg">
                {children}
                </div>
            )}
        </>
    );
};
export default Modal;