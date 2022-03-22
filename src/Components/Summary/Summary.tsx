import React, { useState } from 'react';
import { v4 } from "uuid";
import ISummaryRecord from '../../types/ISummaryRecord';
import SummaryForm from '../SummaryForm/SummaryForm'
import SummaryList from '../SummaryList/SummaryList';
import './Summary.css';

const Summary = () => {
    const [summaryRecords, setSummaryRecords] = useState<ISummaryRecord[]>([]);
    const [accountBalance, setAccountBalance] = useState<number>(0);

    const addSummaryRecord = (name: string, value: number) => {
        setSummaryRecords((prevRecords) => {
            setAccountBalance(accountBalance + value);

            const newRecords = [...prevRecords];
            newRecords.push({ id: v4(), name, value });
            return newRecords;
        })
    };

    const removeSummaryRecord = (id: string) => {
        let removedRecord = summaryRecords.filter((record) => record.id === id)[0];
        setSummaryRecords((prevRecords) => prevRecords.filter((record) => record.id !== id));
        setAccountBalance(accountBalance - removedRecord.value);
    }


  return (
      <div className='summary'>
        <SummaryForm addSummaryRecord={addSummaryRecord} />
        <SummaryList summaryRecords={summaryRecords} removeSummaryRecord={removeSummaryRecord} />
        <div className='balance'>Account Balance: {accountBalance}</div>
      </div>
  )
}

export default Summary;