
import { Metadata } from 'next';
import NetSuiteClientPage from './netsuite-client';

export const metadata: Metadata = {
    title: 'Netsuite Integration | Aonflow',
    description: "Connect financials, CRM, and e-commerce for streamlined data management and enhanced business operations with Netsuite Integration solutions.",
    alternates: {
        canonical: 'https://www.aonflow.com/netsuite',
    },
};

export default function NetSuitePage() {
    return <NetSuiteClientPage />;
}
