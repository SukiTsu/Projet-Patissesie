import React, { useState } from 'react';
import '../assets/style/styleModalCheck.css'

interface Props {
    data: { label: string; value: string }[];
    method: (values: string[]) => void;
}

const ModalSect: React.FC<Props> = ({ data, method }) => {
    const [showModal, setShowModal] = useState(false);
    const [selectedValues, setSelectedValues] = useState<string[]>([]); // État pour stocker les valeurs cochées

    const openModal = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
        method(selectedValues);
    };

    // Gérer la sélection/déselection des checkboxes avec une limite de 3
    const handleCheckboxChange = (value: string) => {
        if (selectedValues.includes(value)) {
            // Si la valeur est déjà cochée, la retirer
            setSelectedValues(selectedValues.filter((val) => val !== value));
        } else if (selectedValues.length < 3) {
            // Ajouter la valeur seulement si moins de 3 cases sont cochées
            setSelectedValues([...selectedValues, value]);
        }
    };

    return (
        <div>
            <button onClick={openModal} className='bt open-modal'>Ouvrir la sélection des saveur du fourrage</button>
            {showModal && (
                <div className="modal-overlay">
                    <div className='content-check'>
                        <h2>Cochez jusqu'à trois options</h2>
                        <div className="checkbox-grid">
                            {data.map((option) => (
                                <div className="label-check" key={option.value}>
                                    <input
                                        type="checkbox"
                                        id={option.value}
                                        name={option.value}
                                        value={option.value}
                                        checked={selectedValues.includes(option.value)}
                                        onChange={() => handleCheckboxChange(option.value)}
                                        disabled={!selectedValues.includes(option.value) && selectedValues.length >= 3} 
                                    />
                                    <label htmlFor={option.value}>{option.label}</label>
                                </div>
                            ))}
                        </div>
                        <button onClick={closeModal} className='bt modal-close'>Fermer</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ModalSect;
