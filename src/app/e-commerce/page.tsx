
import { Metadata } from 'next';
import ECommerceClientPage from './e-commerce-client';

export const metadata: Metadata = {
    title: 'E-commerce Automation | Aonflow',
    description: "Automate your customers’ online journeys and take control of your marketing campaigns to boost sales and profits.",
    alternates: {
        canonical: 'https://www.aonflow.com/e-commerce',
    },
};

export default function ECommercePage() {
    return <ECommerceClientPage />;
}
