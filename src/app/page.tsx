
import { Metadata } from 'next';
import HomeClientPage from './home-client';

export const metadata: Metadata = {
  title: 'Aonflow iPaaS Platform - Premier Low-Code No-Code Integration',
  description: "Simplify integration and automation with Aonflow's low-code/no-code iPaaS platform. Sign-up for free and start connecting applications with leading iPaaS tools provider!",
};

export default function HomePage() {
  return <HomeClientPage />;
}
