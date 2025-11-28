
import { Metadata } from 'next';
import StripeClientPage from './stripe-client';

export const metadata: Metadata = {
    title: 'Stripe Integration | Aonflow',
    description: "Elevate financial efficiency with simplified transactions and streamlined processes through Stripe Integration.",
    alternates: {
        canonical: 'https://www.aonflow.com/stripe',
    },
};

export default function StripePage() {
    return <StripeClientPage />;
}
