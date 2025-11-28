
import { Metadata } from 'next';
import CustomerSupportPageClient from './customer-support-client';

export const metadata: Metadata = {
    title: 'Customer Support Automation - Aonflow',
    description: "Revolutionize your customer experience and drive revenue with intelligent automation solutions.",
    alternates: {
        canonical: 'https://www.aonflow.com/customer-support',
    },
};

export default function CustomerSupportPage() {
    return <CustomerSupportPageClient />;
}

    