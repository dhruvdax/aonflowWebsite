
import { Metadata } from 'next';
import MarketingOperationsClientPage from './marketing-operations-client';

export const metadata: Metadata = {
    title: 'Marketing Operations Automation | Aonflow',
    description: "Leverage the power of automation to elevate your business through strategic marketing operations.",
    alternates: {
        canonical: 'https://www.aonflow.com/marketing-operations',
    },
};

export default function MarketingOperationsPage() {
    return <MarketingOperationsClientPage />;
}
