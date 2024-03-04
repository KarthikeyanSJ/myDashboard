import React, { useState } from 'react';
import CategorySelector from './CategorySelector';
import ProductSelector from './ProductSelector';
import ClearButton from './ClearButton';
import RunReportButton from './RunReportButton';
import PriceChart from './PriceChart';

function Dashboard() {
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [selectedProducts, setSelectedProducts] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [showChart, setShowChart] = useState<boolean>(false);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setSelectedProducts([]); // Clear selected products when category changes
  };

  const handleProductChange = (products: string[]) => {
    setSelectedProducts(products);
  };

  const handleRunReport = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setShowChart(true);
    }, 3000);
  };

  const handleClear = () => {
    setSelectedCategory('');
    setSelectedProducts([]);
    setShowChart(false);
  };

  return (
    <div>
      <CategorySelector onSelect={handleCategoryChange} />
      <ProductSelector
        category={selectedCategory}
        onSelect={handleProductChange}
        disabled={!selectedCategory}
      />
      <ClearButton onClick={handleClear} />
      <RunReportButton onClick={handleRunReport} disabled={!selectedCategory || loading} />
      {loading && <div>Generating report...</div>}
      {showChart && <PriceChart category={selectedCategory} products={selectedProducts} />}
    </div>
  );
}

export default Dashboard;
