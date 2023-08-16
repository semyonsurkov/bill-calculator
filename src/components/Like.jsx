import { useState } from 'react';

export default function Like({ children }) {
  const [selectedValue, setSelectedValue] = useState('option1');

  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <div>
      {children}
      <select value={selectedValue} onChange={handleSelectChange}>
        <option value="">Выберите вариант</option>
        <option selected value="option1">
          Dissatisfied (0%)
        </option>
        <option value="option2">It was okay (5%)</option>
        <option value="option3">It was good (10%)</option>
        <option value="option4">Absolutely amazing (20%)</option>
      </select>
    </div>
  );
}
