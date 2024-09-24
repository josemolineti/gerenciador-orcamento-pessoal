import { useContext } from 'react';
import { BudgetContext } from '../context/BudgetContext';

function Despesas() {
    const context = useContext(BudgetContext);

    if (!context) return null; 
    const { despesas } = context;

    return (
        <div>
            <h2>Despesas</h2>
            <ul>
                {despesas.map((despesa, index) => (
                    <li key={index}>R$ {despesa.toFixed(2)}</li>
                ))}
            </ul>
        </div>
    );
}

export default Despesas;
