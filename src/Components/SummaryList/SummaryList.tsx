import React from 'react'
import ISummaryRecord from '../../types/ISummaryRecord';
import SummaryRecord from '../SummaryRecord/SummaryRecord';
import './SummaryList.css';

interface summaryListProps {
    summaryRecords: ISummaryRecord[];
    removeSummaryRecord: (id: string) => void;
}

const SummaryList = ({ summaryRecords, removeSummaryRecord }: summaryListProps) => {
  return (
    <div className='summary-list'>{summaryRecords.map((record) => (
        <SummaryRecord key={record.id} summaryRecord={record} removeSummaryRecord={removeSummaryRecord}/>
    ))}</div>
  )
}

export default SummaryList;