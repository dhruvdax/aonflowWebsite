
import { Metadata } from 'next';
import BlogClientPage from './blog-client';

export const metadata: Metadata = {
    title: 'Aonflow Blog - Latest on Integration and Automation',
    description: "Explore the latest articles, insights, and news on iPaaS, application integration, and business process automation from the Aonflow team.",
    alternates: {
        canonical: 'https://www.aonflow.com/blog',
    },
};

export default function BlogPage() {
    return <BlogClientPage />;
}
