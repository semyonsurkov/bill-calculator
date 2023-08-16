import { useState } from 'react';
export default function Bill({ children }) {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      {children}
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <button></button>
    </div>
  );
}
