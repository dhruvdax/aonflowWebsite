
import { Metadata } from 'next';
import DataMigrationClientPage from './data-migration-client';

export const metadata: Metadata = {
    title: 'Data Migration Automation | Aonflow',
    description: "Migrate data between systems without extensive custom coding, while keeping costs low. Our tools ensure accuracy and security.",
    alternates: {
        canonical: 'https://www.aonflow.com/data-migration',
    },
};

export default function DataMigrationPage() {
    return <DataMigrationClientPage />;
}
