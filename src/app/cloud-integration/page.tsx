
import { Metadata } from 'next';
import CloudIntegrationClientPage from './cloud-integration-client';

export const metadata: Metadata = {
    title: 'Cloud Integration Solutions | Aonflow',
    description: "Connect cloud-based software, enabling your organization to become truly data-driven. Leverage our iPaaS solution to break down data silos and streamline processes.",
    alternates: {
        canonical: 'https://www.aonflow.com/cloud-integration',
    },
};

export default function CloudIntegrationPage() {
    return <CloudIntegrationClientPage />;
}
