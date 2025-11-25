
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ContentPageLayout } from "@/components/layout/content-page-layout";
import Link from "next/link";
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Sub‑Processors & Data Security | Aonflow',
    description: "See the list of sub‑processors engaged by Aonflow and understand the roles they play in ensuring data security and compliance.",
    alternates: {
        canonical: 'https://www.aonflow.com/sub-processors',
    },
};

const subProcessors = [
  {
    name: "Amazon Web Services Inc.",
    usage: "Cloud computing platform for individuals, businesses, organizations, and enterprises",
    country: "United States, Germany or Singapore (at customer's option)",
    url: "https://aws.amazon.com",
  },
  {
    name: "Azure",
    usage: "Cloud computing platform and services for building, deploying, and managing applications and services",
    country: "United States",
    url: "https://azure.microsoft.com",
  },
  {
    name: "Hostgator",
    usage: "Web hosting services and tools",
    country: "United States",
    url: "https://www.hostgator.com",
  },
  {
    name: "Cloudflare",
    usage: "A range of network services, including content delivery, DDoS protection, and DNS management",
    country: "United States",
    url: "https://www.cloudflare.com",
  },
  {
    name: "Stripe Inc.",
    usage: "Payment processing platform (online payments)",
    country: "United States",
    url: "https://www.stripe.com",
  },
];

export default function SubProcessorsPage() {
  return (
    <ContentPageLayout
      title="Sub Processors"
      subtitle="Updated 23rd June 2023"
    >
        <Card className="bg-white/50 backdrop-blur-sm">
            <CardContent className="pt-6">
                <p className="text-muted-foreground">
                    Aonflow employs some sub-processors to support its delivery of the Aonflow Platform and Services, which are outlined in the Terms of Services.
                </p>
            </CardContent>
        </Card>

      <Card className="bg-white/50 backdrop-blur-sm">
        <CardHeader>
          <CardTitle>Understanding Sub-Processors</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            In the context of GDPR (General Data Protection Regulation), Aonflow operates as a Processor of Personal Data that users submit for processing on the Aonflow Platform. Aonflow may choose to assign certain processing responsibilities to another Processor, which can be either an Affiliate or a third party. This other Processor is referred to as a sub-processor and may have access to the Personal Data in question. Aonflow works with various types of sub-processors for different functions, as listed in the table below. However, third-party providers that offer Services but do not handle or access Personal Data are not categorized as sub-processors.
          </p>
        </CardContent>
      </Card>
      
      <Card className="bg-white/50 backdrop-blur-sm">
        <CardHeader>
          <CardTitle>Due Diligence</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            To ensure the protection of Personal Data, Aonflow follows a reasonable selection process to evaluate the security, privacy, and confidentiality practices of potential sub-processors who may handle or access such data. Additionally, Aonflow enters into a Data Processing Addendum with each sub-processor, where they commit to processing Personal Data in compliance with GDPR and other relevant privacy laws and regulations.
          </p>
        </CardContent>
      </Card>

      <Card className="bg-white/50 backdrop-blur-sm">
        <CardHeader>
          <CardTitle>Sub-Processors' List</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-4">
            Aonflow's Affiliates, which include Aonflow's potential future Affiliates, may act as sub-processors for Personal Data that users submit for processing on the Aonflow Platform. Besides, Aonflow collaborates with specific unaffiliated third-party providers to carry out distinct processing tasks related to their Services. The following list presents the unaffiliated third-party providers who work as sub-processors for Aonflow:
          </p>
           <div className="border rounded-lg overflow-hidden">
            <Table>
                <TableHeader>
                <TableRow>
                    <TableHead>Subprocessor</TableHead>
                    <TableHead>Usage/Purpose</TableHead>
                    <TableHead>Country</TableHead>
                    <TableHead>URL</TableHead>
                </TableRow>
                </TableHeader>
                <TableBody>
                {subProcessors.map((processor) => (
                    <TableRow key={processor.name}>
                    <TableCell className="font-medium">{processor.name}</TableCell>
                    <TableCell>{processor.usage}</TableCell>
                    <TableCell>{processor.country}</TableCell>
                    <TableCell>
                        <Link href={processor.url} target="_blank" className="text-primary hover:underline">
                            {processor.url}
                        </Link>
                    </TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
           </div>
        </CardContent>
      </Card>

    </ContentPageLayout>
  );
}
