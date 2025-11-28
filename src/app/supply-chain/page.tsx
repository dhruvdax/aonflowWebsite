
import { Metadata } from 'next';
import SupplyChainClientPage from './supply-chain-client';

export const metadata: Metadata = {
    title: 'Manufacturing & Supply Chain Automation | Aonflow',
    description: "Link your supply chain end-to-end, automate key operations, and simplify business complexities with Aonflow's iPaaS solutions.",
    alternates: {
        canonical: 'https://www.aonflow.com/supply-chain',
    },
};

export default function SupplyChainPage() {
    return <SupplyChainClientPage />;
}
