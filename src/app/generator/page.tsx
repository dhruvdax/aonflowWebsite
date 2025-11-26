
import { Metadata } from 'next';
import GeneratorClientPage from './generator-client';

export const metadata: Metadata = {
    title: 'AI Content Generator - Aonflow',
    description: 'Automatically generate a page description based on a title using web retrieval.',
    alternates: {
        canonical: 'https://www.aonflow.com/generator',
    },
};

export default function GeneratorPage() {
    return <GeneratorClientPage />;
}
