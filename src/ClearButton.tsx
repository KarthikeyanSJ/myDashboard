import React from 'react';

interface ClearButtonProps {
  onClick: () => void;
}

const ClearButton: React.FC<ClearButtonProps> = ({ onClick }) => {
  return <button onClick={onClick}>Clear</button>;
};

export default ClearButton;
