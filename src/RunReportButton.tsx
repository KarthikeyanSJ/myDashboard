import React from 'react';

interface RunReportButtonProps {
  onClick: () => void;
  disabled: boolean;
}

const RunReportButton: React.FC<RunReportButtonProps> = ({ onClick, disabled }) => {
  return <button onClick={onClick} disabled={disabled}>Run Report</button>;
};

export default RunReportButton;
