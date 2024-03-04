import React from 'react';

interface ProductSelectorProps {
  category: string;
  onSelect: (products: string[]) => void;
  disabled: boolean;
}

const ProductSelector: React.FC<ProductSelectorProps> = ({ category, onSelect, disabled }) => {
  const productsByCategory: { [key: string]: string[] } = {
    'Category 1': ['Product 1', 'Product 2', 'Product 3'],
    'Category 2': ['Product 4', 'Product 5', 'Product 6'],
    'Category 3': ['Product 7', 'Product 8', 'Product 9'],
  };

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedProducts = Array.from(e.target.selectedOptions, (option) => option.value);
    onSelect(selectedProducts);
  };

  return (
    <div>
      <label>Select Products: </label>
      <select multiple={true} onChange={handleChange} disabled={disabled}>
        {category &&
          productsByCategory[category].map((product, index) => (
            <option key={index} value={product}>
              {product}
            </option>
          ))}
      </select>
    </div>
  );
};

export default ProductSelector;
