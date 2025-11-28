
import { Metadata } from 'next';
import SlackClientPage from './slack-client';

export const metadata: Metadata = {
    title: 'Slack Integration | Aonflow',
    description: "Unleash seamless collaboration, real-time communication, and enhanced productivity through Slack Integration.",
    alternates: {
        canonical: 'https://www.aonflow.com/slack',
    },
};

export default function SlackPage() {
    return <SlackClientPage />;
}
