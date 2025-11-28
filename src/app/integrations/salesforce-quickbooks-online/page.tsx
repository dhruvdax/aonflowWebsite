
import { Metadata } from 'next';
import SalesforceQuickbooksClientPage from './salesforce-quickbooks-client';

export const metadata: Metadata = {
    title: 'Salesforce and QuickBooks Online Integration | Aonflow',
    description: "Automate invoice creation, synchronize customer and sales data, and manage transactions seamlessly with our Salesforce and QuickBooks Online integration.",
    alternates: {
        canonical: 'https://www.aonflow.com/integrations/salesforce-quickbooks-online',
    },
};

export default function SalesforceQuickbooksPage() {
    return <SalesforceQuickbooksClientPage />;
}
