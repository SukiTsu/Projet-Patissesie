import React, { useState } from 'react';

interface Props{
    formData: {
        email:string,
        subject:string,
        message:string
    }
}

const SendMail: React.FC<Props> = ({formData}) => {

  const handleSendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    // Construire l'URL mailto
    const mailtoLink = `mailto:dharmaboulay@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(formData.message)}`;

    // Ouvrir la boîte de messagerie par défaut avec les informations préremplies
    window.location.href = mailtoLink;
  };

  return (
    <form onSubmit={handleSendEmail}>
        <p>Ouvire la boîte mail avec un contenu déjà remplit pour l'envoie de la commande ?</p>
        <button type="submit" className='bt send-mail'>Ouvrir la boîte mail</button>
    </form>
  );
};

export default SendMail;
