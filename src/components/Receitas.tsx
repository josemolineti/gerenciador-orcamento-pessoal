import React, { useContext } from 'react';
import { BudgetContext } from '../context/BudgetContext';

function Receitas() {
    const context = useContext(BudgetContext);

    if (!context) return null; 

    const { receitas } = context;

    return (
        <div>
            <h2>Receitas</h2>
            <ul>
                {receitas.map((receita, index) => (
                    <li key={index}>R$ {receita.toFixed(2)}</li>
                ))}
            </ul>
        </div>
    );
}

export default Receitas;
