
import { Metadata } from 'next';
import MarketingPageClient from './marketing-client';

export const metadata: Metadata = {
    title: 'Marketing Automation Solutions | Aonflow',
    description: "Maximize your marketing potential with our automation solutions for remarkable results at every stage of your business.",
    alternates: {
        canonical: 'https://www.aonflow.com/marketing',
    },
};

export default function MarketingPage() {
    return <MarketingPageClient />;
}
