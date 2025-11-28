
import { Metadata } from 'next';
import SalesOperationsClientPage from './sales-operations-client';

export const metadata: Metadata = {
    title: 'Sales Operations Automation | Aonflow',
    description: "Take control of your global sales automation. Streamline workflows, connect apps, and maximize your sales team's potential with Aonflow.",
    alternates: {
        canonical: 'https://www.aonflow.com/sales-operations',
    },
};

export default function SalesOperationsPage() {
    return <SalesOperationsClientPage />;
}
