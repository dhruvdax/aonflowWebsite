
import { Metadata } from 'next';
import ProductClientPage from './product-client';

export const metadata: Metadata = {
    title: 'Our Product - Next‑Gen AI Driven iPaaS Solutions by Aonflow',
    description: "Explore our next‑gen AI‑driven iPaaS solutions that empower businesses to integrate and automate processes effortlessly.",
    alternates: {
        canonical: 'https://www.aonflow.com/product',
    },
};

export default function ProductPage() {
    return <ProductClientPage />;
}
