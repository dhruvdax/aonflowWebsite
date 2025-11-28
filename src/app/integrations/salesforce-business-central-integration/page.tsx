
import { Metadata } from 'next';
import SalesforceBusinessCentralIntegrationClientPage from './salesforce-business-central-integration-client';

export const metadata: Metadata = {
    title: 'Salesforce and Business Central Integration | Aonflow',
    description: "Seamlessly integrate opportunities-to-sale with Salesforce CRM and Microsoft Dynamics 365 Business Central ERP using Aonflow. Streamline your business operations, and automate data synchronization between your sales and operational systems.",
    alternates: {
        canonical: 'https://www.aonflow.com/integrations/salesforce-business-central',
    },
};

export default function SalesforceBusinessCentralIntegrationPage() {
    return <SalesforceBusinessCentralIntegrationClientPage />;
}
