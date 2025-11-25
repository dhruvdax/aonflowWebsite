import type { Metadata } from 'next';
import './globals.css';
import { Poppins } from 'next/font/google';
import { AppClientLayout } from '@/components/layout/app-client-layout';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
});

export const metadata: Metadata = {
  title: 'Aonflow iPaaS Platform - Premier Low-Code No-Code Integration',
  description: "Simplify integration and automation with Aonflow's low-code/no-code iPaaS platform. Sign-up for free and start connecting applications with leading iPaaS tools provider!",
  openGraph: {
    type: 'website',
    url: 'https://www.aonflow.com/',
    siteName: 'Aonflow',
    locale: 'en_US',
    title: 'Aonflow iPaaS Platform - Premier Low-Code No-Code Integration',
    description: "Simplify integration and automation with Aonflow's low-code/no-code iPaaS platform. Sign-up for free and start connecting applications with leading iPaaS tools provider!",
    images: [
      {
        url: 'https://www.aonflow.com/images/og/aonflow-ipaas-solutions.png',
        width: 1200,
        height: 628,
        alt: 'Aonflow iPaaS Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@AonflowOfficial',
    creator: '@AonflowOfficial',
    title: 'Aonflow iPaaS Platform - Premier Low-Code No-Code Integration',
    description: "Simplify integration and automation with Aonflow's low-code/no-code iPaaS platform. Sign-up for free and start connecting applications with leading iPaaS tools provider!",
    images: ['https://www.aonflow.com/images/og/aonflow-ipaas-solutions.png'],
  },
  alternates: {
    canonical: 'https://www.aonflow.com',
  },
  robots: {
    index: true,
    follow: true,
  },
  other: {
    'article:published_time': '2023-06-23T02:00:00-07:00'
  }
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.className} font-body antialiased`}>
        <AppClientLayout>{children}</AppClientLayout>
      </body>
    </html>
  );
}
