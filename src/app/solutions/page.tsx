
import { Metadata } from 'next';
import SolutionsClientPage from './solutions-client';

export const metadata: Metadata = {
    title: 'iPaaS Automation Solutions for You and Your Team - Aonflow',
    description: "Discover customizable iPaaS automation solutions designed for your team and business requirements.",
    alternates: {
        canonical: 'https://www.aonflow.com/solutions',
    },
};

export default function SolutionsPage() {
    return <SolutionsClientPage />;
}
