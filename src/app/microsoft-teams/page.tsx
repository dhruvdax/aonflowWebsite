
import { Metadata } from 'next';
import MicrosoftTeamsClientPage from './microsoft-teams-client';

export const metadata: Metadata = {
    title: 'Microsoft Teams Integration | Aonflow',
    description: "Collaborate by integrating Microsoft Teams to combine chat, video conferencing, and file sharing for unified and efficient teamwork communication.",
    alternates: {
        canonical: 'https://www.aonflow.com/microsoft-teams',
    },
};

export default function MicrosoftTeamsPage() {
    return <MicrosoftTeamsClientPage />;
}
