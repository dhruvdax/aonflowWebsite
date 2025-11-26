
import { Metadata } from 'next';
import PartnerClientPage from './partner-client';

export const metadata: Metadata = {
    title: 'Partner with Aonflow - Drive Growth Together',
    description: "Join the Aonflow partner network to revolutionize business integration for your clients. Access cutting-edge iPaaS solutions and grow with us.",
    alternates: {
        canonical: 'https://www.aonflow.com/partner',
    },
};

export default function PartnerPage() {
    return <PartnerClientPage />;
}
