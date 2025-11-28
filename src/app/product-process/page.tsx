
import { Metadata } from 'next';
import ProductProcessClientPage from './product-process-client';

export const metadata: Metadata = {
    title: 'Product & Process Automation | Aonflow',
    description: "Build products that customers want, when they want it, how they want it. Streamline your product development with our automation solutions.",
    alternates: {
        canonical: 'https://www.aonflow.com/product-process',
    },
};

export default function ProductProcessPage() {
    return <ProductProcessClientPage />;
}
