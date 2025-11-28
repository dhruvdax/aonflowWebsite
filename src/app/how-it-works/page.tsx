
import { Metadata } from 'next';
import HowItWorksClientPage from './how-it-works-client';

export const metadata: Metadata = {
    title: 'How Integration through Aonflow Works for You',
    description: "Learn how Aonflow tackles integration challenges and uses visual tools to build complex workflows across any application stack.",
    alternates: {
        canonical: 'https://www.aonflow.com/how-it-works',
    },
};

export default function HowItWorksPage() {
  return <HowItWorksClientPage />;
}

    