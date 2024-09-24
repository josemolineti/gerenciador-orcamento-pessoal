import { useContext, useState } from 'react';
import { BudgetContext } from '../context/BudgetContext';
import Receitas from '../components/Receitas';
import Despesas from '../components/Despesas';

function Dashboard() {
    const context = useContext(BudgetContext);
    const [valor, setValor] = useState(0);

    const adicionarValor = (tipo: 'receita' | 'despesa') => {
        if (tipo === 'receita') {
            context?.adicionarReceita(valor);
        } else {
            context?.adicionarDespesa(valor);
        }
        setValor(0);
    };

    const totalReceitas = context?.receitas.reduce((acc, curr) => acc + curr, 0) || 0;
    const totalDespesas = context?.despesas.reduce((acc, curr) => acc + curr, 0) || 0;
    const saldo = totalReceitas - totalDespesas;

    return (
        <div id='main-div'>
            <h1>Dashboard</h1>
            <h2>Saldo: <span>R$ {saldo.toFixed(2)}</span></h2> {/* Atualizando o saldo dinamicamente */}
            <input
                type="number"
                value={valor}
                onChange={(e) => setValor(Number(e.target.value))}
                placeholder="Digite um valor"
            />
            <button onClick={() => adicionarValor('receita')}>Adicionar Receita</button>
            <button onClick={() => adicionarValor('despesa')}>Adicionar Despesa</button>

            <Receitas />
            <Despesas />
        </div>
    );
}

export default Dashboard;
