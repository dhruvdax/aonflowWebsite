
import { Metadata } from 'next';
import SaaSAutomationPage from './ipaas-for-saas-client';

export const metadata: Metadata = {
    title: 'iPaaS for SaaS: Automation Solutions | Aonflow',
    description: "Integrate your tech stack and automate for comprehensive end-to-end SaaS solutions. Boost productivity and streamline operations with Aonflow.",
    alternates: {
        canonical: 'https://www.aonflow.com/ipaas-for-saas',
    },
};

export default function IpaasForSaasPage() {
    return <SaaSAutomationPage />;
}

    