
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { AnimateOnScroll } from '@/components/animate-on-scroll';
import { BackgroundAnimation } from '@/components/background-animation';
import { cn } from '@/lib/utils';
import { ArrowRight, BrainCircuit, BarChart, Smartphone, GitBranch, ArrowRightLeft, AreaChart, Box } from 'lucide-react';
import {
  DataIcon,
  InnovationIcon,
  ReliabilityIcon,
  CloudApiIcon,
  CloudDataIcon,
  CloudAppIcon,
  CloudSystemIcon,
} from '@/components/by-function-icons';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const revolutionFeatures = [
    {
        icon: BrainCircuit,
        title: "Free-flowing information",
        description: "Between applications and systems, eliminating silos and fostering collaboration."
    },
    {
        icon: BarChart,
        title: "Real-time updates",
        description: "Across the board, empowering informed decision-making with the latest data."
    },
    {
        icon: Smartphone,
        title: "Improved operational efficiency",
        description: "And a significant competitive advantage through streamlined processes."
    }
];

const functionTools = [
    {
        icon: DataIcon,
        title: "Aligning data",
        description: "Create a single source of truth by aligning data across multiple systems, ensuring consistency and accuracy."
    },
    {
        icon: ArrowRightLeft,
        title: "Streamlining processes",
        description: "Automate workflows that span multiple applications, reducing manual effort and improving efficiency."
    },
    {
        icon: GitBranch,
        title: "Connecting systems",
        description: "Enable seamless communication between disparate cloud and on-premise applications."
    },
    {
        icon: AreaChart,
        title: "Gaining real-time visibility",
        description: "Monitor processes and data flows across your entire ecosystem from a centralized dashboard."
    }
];

const aonflowSolutions = [
    {
        id: "cloud-integration-future-ready",
        title: "Future-ready integration",
        description: "Aonflow's cloud integration platform is built for agility. Our low-code/no-code environment empowers both business and IT users to build and manage integrations, reducing reliance on specialized developers and accelerating time-to-value.",
        imageUrl: "/cloud-integration/cloud-fact-2.png",
        imageHint: "cloud analytics dashboard"
    },
    {
        id: "cloud-integration-cloud-native",
        title: "Re-architecting for cloud-native: business transformation",
        description: "Migrating to the cloud is more than a technical shift—it's a business transformation. Aonflow facilitates this by enabling you to re-architect legacy processes for a cloud-native world, connecting everything from your ERP and CRM to custom-built applications.",
        imageUrl: "/cloud-integration/cloud-fact-3-1.png",
        imageHint: "cloud architecture diagram"
    }
];

const innovationTabs = [
    {
        value: "data",
        icon: DataIcon,
        label: "Data Integration",
    },
    {
        value: "api",
        icon: CloudApiIcon,
        label: "API Integration",
    },
    {
        value: "b2b",
        icon: ArrowRightLeft,
        label: "B2B Integration",
    }
];

const innovationFeatures = [
    {
        icon: ReliabilityIcon,
        title: "Centralized data hub",
        description: "Aonflow acts as a central hub, connecting all your cloud and on-premise applications. This eliminates data silos and ensures a single source of truth across your organization.",
    },
    {
        icon: InnovationIcon,
        title: "Scalable and flexible",
        description: "Our platform is built to scale with your business. Whether you're adding new applications or increasing data volume, Aonflow can handle it without compromising performance.",
    },
    {
        icon: DataIcon,
        title: "Enhanced visibility and control",
        description: "Gain real-time insights into your data flows and processes. Our platform provides the tools you need to monitor, manage, and optimize your integrations.",
    }
];

const integrationTypes = [
    {
        id: "cloud-integration-batch-data",
        title: "Batch data integration",
        description: "Ideal for scenarios that don't require real-time processing, batch integration allows you to move large volumes of data between systems on a scheduled basis. It's a cost-effective way to ensure data consistency for reporting, analytics, and archiving.",
        imageUrl: "/cloud-integration/cloud-fact-5.svg",
        imageHint: "data processing workflow"
    },
    {
        id: "cloud-integration-real-time-app",
        title: "Real-time application integration",
        description: "For mission-critical processes, real-time integration is essential. Aonflow enables immediate data exchange between applications, triggered by business events. This ensures that your systems are always in sync, powering seamless customer experiences and efficient operations.",
        imageUrl: "/cloud-integration/cloud-fact-4.svg",
        imageHint: "connected applications interface"
    }
];


export default function CloudIntegrationPage() {
    const heroImage = PlaceHolderImages.find(p => p.id === 'cloud-integration-hero');

  return (
    <div className="bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative w-full bg-gradient-to-r from-primary/10 to-blue-500/10 py-20 md:py-28 lg:py-32 overflow-hidden">
        <BackgroundAnimation className="absolute inset-0 z-0 opacity-30" />
        <div className="container mx-auto px-4 md:px-6 z-10 relative">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <AnimateOnScroll>
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl font-headline text-foreground">
                    Cloud Integration
                </h1>
                <p className="mt-6 text-lg text-muted-foreground max-w-xl">
                   Connect cloud-based software, enabling your organization to become truly data-driven.
                </p>
                <div className="mt-8">
                    <Button asChild size="lg">
                        <Link href="/contact">Book a demo</Link>
                    </Button>
                </div>
            </AnimateOnScroll>
            <AnimateOnScroll delay={0.2} className="flex justify-center">
                 
                    <Image
                        src="/cloud-integration/cloud-integration.svg"
                        alt="Cloud Integration"
                        width={500}
                        height={400}
                        className="object-contain"
                        data-ai-hint="cloud integration diagram"
                    />
                
            </AnimateOnScroll>
          </div>
        </div>
      </section>

       {/* Revolutionizing Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
            <AnimateOnScroll className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold font-headline">Cloud integration revolutionizing the way businesses operate</h2>
                <p className="mt-4 text-muted-foreground">
                    Leverage our iPaaS solution to break down data silos, streamline processes, and unlock a new level of operational efficiency and insight.
                </p>
            </AnimateOnScroll>
             <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
                {revolutionFeatures.map((feature, index) => (
                    <AnimateOnScroll key={index} delay={index * 0.1}>
                        <Card className="p-6 h-full text-center flex flex-col items-center bg-transparent border-0 shadow-none">
                            <div className="text-primary bg-primary/10 p-4 rounded-full mb-4">
                                <feature.icon className="h-8 w-8" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold font-headline mb-2">{feature.title}</h3>
                                <p className="text-muted-foreground">{feature.description}</p>
                            </div>
                        </Card>
                    </AnimateOnScroll>
                ))}
            </div>
        </div>
      </section>

      {/* The function of Cloud Integration Tools Section */}
      <section className="py-20 md:py-28 bg-primary/5">
        <div className="container mx-auto px-4 md:px-6">
            <AnimateOnScroll className="text-center max-w-3xl mx-auto mb-12">
                <h2 className="text-3xl font-bold font-headline">The function of Cloud Integration Tools</h2>
            </AnimateOnScroll>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {functionTools.map((tool, index) => (
                    <AnimateOnScroll key={index} delay={index * 0.1}>
                         <Card className="p-6 h-full flex items-start gap-6 bg-background/50 backdrop-blur-sm">
                            <div className="text-primary flex-shrink-0">
                                <tool.icon className="h-10 w-10" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold font-headline mb-2">{tool.title}</h3>
                                <p className="text-muted-foreground">{tool.description}</p>
                            </div>
                        </Card>
                    </AnimateOnScroll>
                ))}
            </div>
        </div>
      </section>

      {/* Blue Banner Section */}
      <div className="container mx-auto px-4 md:px-6 my-20">
          <section className="py-20 md:py-28 bg-primary-gradient text-white rounded-3xl">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <AnimateOnScroll className="flex justify-center">
                        <Image
                            src="/cloud-integration/cloud-integration-fact.svg"
                            alt="Low-code platform UI"
                            width={400}
                            height={300}
                            className="object-contain"
                            data-ai-hint="low-code interface"
                        />
                    </AnimateOnScroll>
                    <AnimateOnScroll delay={0.2}>
                        <h2 className="text-3xl font-bold mb-4">Aonflow is one of the best low-code solutions on the current market.</h2>
                        <p className="text-lg opacity-90 mb-6">
                           You can kick-start by integrating your first-ever workflow in just a matter of minutes.
                        </p>
                        <Button variant="secondary" asChild>
                            <Link href="/contact">Book a Demo</Link>
                        </Button>
                    </AnimateOnScroll>
                </div>
            </div>
          </section>
      </div>

       {/* Aonflow's Cloud Integration solution */}
       <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
            <AnimateOnScroll className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-3xl font-bold font-headline">Aonflow's Cloud Integration solution</h2>
            </AnimateOnScroll>
            <div className="space-y-16">
                 {aonflowSolutions.map((solution, index) => {
                    return (
                        <AnimateOnScroll key={index} delay={index * 0.1}>
                            <div className={cn("grid md:grid-cols-2 gap-12 items-center", index % 2 !== 0 && "md:grid-flow-row-dense")}>
                                <div className={cn("flex justify-center", index % 2 !== 0 && "md:col-start-2")}>
                                    <Image
                                        src={solution.imageUrl}
                                        alt={solution.title}
                                        width={450}
                                        height={350}
                                        className="object-contain"
                                        data-ai-hint={solution.imageHint}
                                    />
                                </div>
                                <div className={cn(index % 2 !== 0 && "md:col-start-1")}>
                                    <h3 className="text-2xl font-bold font-headline mb-4">{solution.title}</h3>
                                    <p className="text-lg text-muted-foreground">{solution.description}</p>
                                </div>
                            </div>
                        </AnimateOnScroll>
                    )
                 })}
            </div>
        </div>
      </section>

      {/* Innovation Section */}
      <section className="py-20 md:py-28 bg-primary/5">
        <div className="container mx-auto px-4 md:px-6">
            <AnimateOnScroll className="text-center max-w-3xl mx-auto mb-12">
                <h2 className="text-3xl font-bold font-headline">Innovation and future-proof solutions</h2>
            </AnimateOnScroll>
            <div className="max-w-4xl mx-auto">
                <AnimateOnScroll delay={0.1}>
                <Tabs defaultValue="data" className="w-full">
                    <TabsList className="grid w-full grid-cols-3 h-auto">
                        {innovationTabs.map(tab => (
                            <TabsTrigger key={tab.value} value={tab.value} className="flex flex-col sm:flex-row items-center gap-2 h-auto py-3">
                                <tab.icon className="h-6 w-6" />
                                <span>{tab.label}</span>
                            </TabsTrigger>
                        ))}
                    </TabsList>
                    <TabsContent value="data">
                        <Card className="p-6 mt-4 bg-background/50">
                            <p className="text-muted-foreground">Unify data from various sources into a single, cohesive view. Aonflow enables robust data integration workflows, ensuring data accuracy and consistency across your entire organization.</p>
                        </Card>
                    </TabsContent>
                    <TabsContent value="api">
                         <Card className="p-6 mt-4 bg-background/50">
                             <p className="text-muted-foreground">Connect applications and services through their APIs. Aonflow simplifies API integration, allowing you to build powerful, interconnected systems that drive business value.</p>
                         </Card>
                    </TabsContent>
                    <TabsContent value="b2b">
                         <Card className="p-6 mt-4 bg-background/50">
                             <p className="text-muted-foreground">Automate and manage data exchange with your business partners. Aonflow's B2B integration capabilities ensure secure and reliable communication, strengthening your supply chain and partner ecosystem.</p>
                         </Card>
                    </TabsContent>
                </Tabs>
                </AnimateOnScroll>
                <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                     {innovationFeatures.map((feature, index) => (
                        <AnimateOnScroll key={index} delay={0.2 + index * 0.1}>
                             <div className="flex items-start gap-4">
                                <div className="text-primary flex-shrink-0">
                                    <feature.icon className="h-8 w-8" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold font-headline mb-1">{feature.title}</h3>
                                    <p className="text-muted-foreground text-sm">{feature.description}</p>
                                </div>
                            </div>
                        </AnimateOnScroll>
                    ))}
                </div>
            </div>
        </div>
      </section>

      {/* Types of Cloud Integration */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
            <AnimateOnScroll className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-3xl font-bold font-headline">Types of Cloud Integration</h2>
                 <p className="mt-4 text-muted-foreground">
                    Whether you need to move large volumes of data periodically or require instant data synchronization, Aonflow supports both batch and real-time integration to meet your specific business needs.
                </p>
            </AnimateOnScroll>

            <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                 {integrationTypes.map((type, index) => {
                    return (
                        <AnimateOnScroll key={index} delay={index * 0.1} className="text-center">
                            <div className="flex justify-center mb-6">
                                <Image
                                    src={type.imageUrl}
                                    alt={type.title}
                                    width={400}
                                    height={300}
                                    className="object-contain"
                                    data-ai-hint={type.imageHint}
                                />
                            </div>
                            <h3 className="text-2xl font-bold font-headline mb-4">{type.title}</h3>
                            <p className="text-muted-foreground">{type.description}</p>
                        </AnimateOnScroll>
                    )
                 })}
            </div>

            <AnimateOnScroll className="text-center mt-20">
                <h3 className="text-xl font-semibold mb-2">Have questions or want to learn more?</h3>
                <Button asChild>
                    <Link href="/contact">Talk to an expert</Link>
                </Button>
            </AnimateOnScroll>
        </div>
      </section>
    </div>
  );
}
