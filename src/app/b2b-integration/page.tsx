
import { Metadata } from 'next';
import B2BIntegrationClientPage from './b2b-integration-client';

export const metadata: Metadata = {
    title: 'B2B Integration Automation | Aonflow',
    description: "Discover Aonflow's unified platform that links business applications and APIs using standard B2B protocols. Streamline data exchange and workflow optimization.",
    alternates: {
        canonical: 'https://www.aonflow.com/b2b-integration',
    },
};

export default function B2BIntegrationPage() {
    return <B2BIntegrationClientPage />;
}

    