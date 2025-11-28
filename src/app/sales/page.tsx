
import { Metadata } from 'next';
import SalesPageClient from './sales-client';

export const metadata: Metadata = {
    title: 'Sales Automation Solutions | Aonflow',
    description: "Leverage automation for lead conversion, drive sales, and foster lasting customer connections with our powerful sales automation tools.",
    alternates: {
        canonical: 'https://www.aonflow.com/sales',
    },
};

export default function SalesPage() {
    return <SalesPageClient />;
}
