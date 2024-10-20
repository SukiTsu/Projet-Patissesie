import React, { useState } from 'react';

interface Props {
    valueUser:string
    method: (value: string) => void;
}

const Textarea: React.FC<Props> = ({valueUser,method }) => {
  

  const handleTextareaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const validCharacters = /^[a-zA-Z0-9\sàéèêëîïôùüç]*$/;
    if (validCharacters.test(event.target.value)) {
      method(event.target.value);
    }
    
  };

  return (
    <div>
      <textarea
        value={valueUser}
        onChange={handleTextareaChange}
        placeholder="Je souhaite que..."
        rows={6}
        cols={40}
      />
    </div>
  );
};

export default Textarea;
