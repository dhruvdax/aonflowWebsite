
import { Metadata } from 'next';
import ITClientPage from './it-client';

export const metadata: Metadata = {
    title: 'IT Automation for Business Growth | Aonflow',
    description: "Take your IT operations to the next level with our robust integration and automation solution. Simplify complex workflows, connect disparate systems and streamline data management.",
    alternates: {
        canonical: 'https://www.aonflow.com/it-automation',
    },
};

export default function ITPage() {
    return <ITClientPage />;
}
