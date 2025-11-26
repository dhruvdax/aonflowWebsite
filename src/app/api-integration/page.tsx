
import { Metadata } from 'next';
import ApiIntegrationClientPage from './api-integration-client';

export const metadata: Metadata = {
    title: 'API Integration Solutions - Aonflow',
    description: "Easily create various API mashups to develop novel products and services. Leverage Aonflow's API integration to transform business operations, unlock efficiency, and delight customers.",
    alternates: {
        canonical: 'https://www.aonflow.com/api-integration',
    },
};

export default function ApiIntegrationPage() {
    return <ApiIntegrationClientPage />;
}
