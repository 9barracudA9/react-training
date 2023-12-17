import React from 'react';

const Modal = ({active, setActive, children}) => {
    return (
        <div onClick={setActive}
             className={active ? 'modal' : null}>
            <div onClick={e => e.stopPropagation()}
                 className={active ? "modal_content" : null}>
                {children}
            </div>
        </div>
    );
};

export default Modal;