import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, dispatch, expenses, currency } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const handleBudgetChange = (event) => {
        if (event.target.value > 20000){
            alert('Budget cannot exceed 20000');
        }
        else if (event.target.value < expenses.reduce((total, item) => {
            return (total += item.cost);
        }, 0)){
            alert('Cannot reduce the budget value lower than the expenses');
        }
        else{
            dispatch({
                type: 'SET_BUDGET',
                payload: event.target.value
            });
            setNewBudget(event.target.value);
        }
    }
    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}</span>
            <input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
        </div>
    );
};
export default Budget;