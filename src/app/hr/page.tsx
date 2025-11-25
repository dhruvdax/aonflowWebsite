
import { Metadata } from 'next';
import HRClientPage from './hr-client';

export const metadata: Metadata = {
    title: 'HR Automation & Workforce Efficiency | Aonflow',
    description: "Revolutionize your HR processes with automation. Streamline human resources operations by integrating HR management systems with essential tools.",
    alternates: {
        canonical: 'https://www.aonflow.com/hr-automation',
    },
};

export default function HRPage() {
    return <HRClientPage />;
}
