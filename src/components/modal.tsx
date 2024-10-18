import React, { ReactNode, useState } from 'react';
import '../assets/style/styleModalCheck.css'

interface Props {
    content:ReactNode
}

const Modal: React.FC<Props> = ({ content }) => {
    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <div>
            <button onClick={openModal} className='open-modal'>Afficher un devis</button>
            {showModal && (
                <div className="modal-overlay">
                    {content}
                    <button onClick={closeModal} className='bt-modal-close'>Fermer</button>
                </div>
            )}
        </div>
    );
};

export default Modal;
