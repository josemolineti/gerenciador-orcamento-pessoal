import React, { createContext, useState, ReactNode } from 'react';

interface BudgetContextType {
    receitas: number[];
    despesas: number[];
    adicionarReceita: (valor: number) => void;
    adicionarDespesa: (valor: number) => void;
}

export const BudgetContext = createContext<BudgetContextType | undefined>(undefined);

export const BudgetProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [receitas, setReceitas] = useState<number[]>([]);
    const [despesas, setDespesas] = useState<number[]>([]);

    const adicionarReceita = (valor: number) => {
        setReceitas((prev) => [...prev, valor]);
    };

    const adicionarDespesa = (valor: number) => {
        setDespesas((prev) => [...prev, valor]);
    };

    return (
        <BudgetContext.Provider value={{ receitas, despesas, adicionarReceita, adicionarDespesa }}>
            {children}
        </BudgetContext.Provider>
    );
};
