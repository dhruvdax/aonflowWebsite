
import { Metadata } from 'next';
import PricingClientPage from './pricing-client';

export const metadata: Metadata = {
    title: 'Aonflow Pricing | Simplified for Enterprises',
    description: "Discover Aonflow's transparent, transaction-based pricing. No hidden fees, just a straightforward model that scales with your business needs.",
    alternates: {
        canonical: 'https://www.aonflow.com/pricing',
    },
};

export default function PricingPage() {
    return <PricingClientPage />;
}

    