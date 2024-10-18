import React, { useState } from 'react';

interface Props {
    data: { label: string; value: string }[]; // Liste des options pour les checkboxes
    method: (values: string[]) => void; // Fonction pour retourner les valeurs cochées
}

const ModalSect: React.FC<Props> = ({ data, method }) => {
    const [showModal, setShowModal] = useState(false);
    const [selectedValues, setSelectedValues] = useState<string[]>([]); // État pour stocker les valeurs cochées

    // Ouvrir le modal
    const openModal = () => {
        setShowModal(true);
    };

    // Fermer le modal
    const closeModal = () => {
        setShowModal(false);
        method(selectedValues); // Passer les valeurs cochées à la fonction lorsque le modal se ferme
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
            <button onClick={openModal}>Ouvrir le Modal</button>
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
                        <button onClick={closeModal} className='bt-modal-close'>Fermer</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ModalSect;
