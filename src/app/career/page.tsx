
import { Metadata } from 'next';
import CareerClientPage from './career-client';

export const metadata: Metadata = {
    title: 'Careers - Join Our Team | Aonflow',
    description: "Explore career opportunities at Aonflow. We're looking for passionate individuals to join our innovative team and help us make a difference.",
    alternates: {
        canonical: 'https://www.aonflow.com/career',
    },
};

export default function CareerPage() {
    return <CareerClientPage />;
}
