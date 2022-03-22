import React, { useState } from 'react';
import './SummaryForm.css';

interface SummaryFormProps {
    addSummaryRecord: (name: string, value: number, isExpense: boolean) => void;
}

const SummaryForm = ({ addSummaryRecord }: SummaryFormProps) => {

    const [nameInput, setNameInput] = useState("");
    const [valueInput, setValueInput] = useState(0);
    const [isExpense, setIsExpense] = useState(true);
    
    const onNameChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setNameInput(e.target.value);
    };

    const onValueChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setValueInput(e.target.valueAsNumber);
    };

    const onTypeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value === "Expense") setIsExpense(true);
        else setIsExpense(false);
    }

    const onClick = () => {
        let value = isExpense ? -valueInput : valueInput;
        addSummaryRecord(nameInput, value, isExpense);
    };

    return (
        <div className='summary-form'>
            <div className='summary-form-element'>
                <input className='form-input' type="text" value={nameInput} onChange={onNameChange} id="name" />
                <label htmlFor="name">Name</label>
            </div>
            <div className='summary-form-element'>
                <input className='form-input' type="number" value={valueInput} onChange={onValueChange} id="value" />
                <label htmlFor="value">Value</label>
            </div>
            <div className='summary-form-element' onChange={onTypeChange}>
                <div>
                    <input type="radio" name="recordType" value="Expense" id="exp" />
                    <label htmlFor="exp">Expense</label>
                </div>
                <div>
                    <input type="radio" name="recordType" value="Income" id="inc" />
                    <label htmlFor="inc">Income</label>
                </div>
            </div>
            <div className='summary-form-element'>
                <button className="add-button" onClick={onClick}>Add record</button>
            </div>
        </div>
    )
}

export default SummaryForm