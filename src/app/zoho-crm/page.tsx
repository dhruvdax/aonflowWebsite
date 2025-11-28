
import { Metadata } from 'next';
import ZohoCrmClientPage from './zoho-crm-client';

export const metadata: Metadata = {
    title: 'Zoho CRM Integration | Aonflow',
    description: "Enhance customer relationship management by integrating Zoho CRM to streamline workflows and data sync for improved business efficiency.",
    alternates: {
        canonical: 'https://www.aonflow.com/zoho-crm',
    },
};

export default function ZohoCrmPage() {
    return <ZohoCrmClientPage />;
}
