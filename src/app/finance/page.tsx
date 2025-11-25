
import { Metadata } from 'next';
import FinanceClientPage from './finance-client';

export const metadata: Metadata = {
    title: 'Automate Finance Processes and Expedite with Low‑code Integration',
    description: "Streamline and optimize your financial processes with Aonflow's automation solutions. Enhance efficiency, accuracy and productivity.",
    alternates: {
        canonical: 'https://www.aonflow.com/finance-automation',
    },
};

export default function FinancePage() {
    return <FinanceClientPage />;
}
