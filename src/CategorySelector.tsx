import React from 'react';

interface CategorySelectorProps {
  onSelect: (category: string) => void;
}

const CategorySelector: React.FC<CategorySelectorProps> = ({ onSelect }) => {
  const categories = ['Category 1', 'Category 2', 'Category 3'];

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onSelect(e.target.value);
  };

  return (
    <div>
      <label>Select Category: </label>
      <select onChange={handleChange}>
        <option value="">Select</option>
        {categories.map((category, index) => (
          <option key={index} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CategorySelector;
