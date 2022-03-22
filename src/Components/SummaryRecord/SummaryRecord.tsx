import React from 'react'
import ISummaryRecord from '../../types/ISummaryRecord';
import './SummaryRecord.css';

interface ISummaryRecordProps {
  summaryRecord: ISummaryRecord;
  removeSummaryRecord: (id: string) => void;
}

const SummaryRecord = ({ summaryRecord, removeSummaryRecord }: ISummaryRecordProps) => {

  const onClick = () => {
    removeSummaryRecord(summaryRecord.id);
  }

  let className = 'record-';
  if (summaryRecord.value < 0) className += 'expense';
  else className += 'income';
  
  return (
    <div className='summary-record'>
        <div className={className}>{summaryRecord.name}</div>
        <div className={className}>{summaryRecord.value}</div>
        <div className='remove-button-container'>
          <button className='remove-button' onClick={onClick}>Remove</button>
        </div>
    </div>
  )
}

export default SummaryRecord;