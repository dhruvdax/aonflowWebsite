
'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  ShieldCheck,
  Zap,
  Users,
  Layers,
  Repeat,
  Scaling,
  Check,
  LineChart,
  Target,
  BarChart,
  BrainCircuit,
  FileCog,
  FileText
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
} from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { AnimateOnScroll } from '@/components/animate-on-scroll';
import { BackgroundAnimation } from '@/components/background-animation';
import { cn } from '@/lib/utils';

const transformingFeatures = [
    {
        icon: LineChart,
        title: "Automated Order Management",
        description: "Integrate your sales channels with your ERP to automate order processing, reducing manual errors and accelerating fulfillment."
    },
    {
        icon: Target,
        title: "Real-Time Inventory Sync",
        description: "Keep inventory levels accurate across all platforms, preventing stockouts and overselling."
    },
    {
        icon: BarChart,
        title: "Enhanced Supplier Collaboration",
        description: "Automate purchase orders, invoices, and shipment notifications to improve communication and efficiency with your suppliers."
    },
    {
        icon: Users,
        title: "Improved Logistics and Fulfillment",
        description: "Integrate with 3PLs and shipping carriers to automate shipping labels, tracking, and delivery updates."
    }
];

const whyAonflowTabs = [
    {
      value: "visibility",
      icon: Layers,
      label: "End-to-End Visibility",
      title: "Gain end-to-end visibility into your supply chain",
      points: [
        "Track inventory levels in real-time across all warehouses and sales channels.",
        "Monitor order status from placement to delivery.",
        "Get a complete view of your supply chain with a centralized data hub.",
        "Identify bottlenecks and optimize your supply chain with data-driven insights.",
        "Improve forecasting with accurate, real-time data.",
        "Enhance collaboration with a single source of truth for all supply chain data.",
      ]
    },
    {
      value: "efficiency",
      icon: Zap,
      label: "Increased Efficiency",
      title: "Increase efficiency with automated workflows",
      points: [
        "Automate order processing, from order entry to fulfillment.",
        "Streamline procurement with automated purchase orders and invoicing.",
        "Reduce manual data entry and errors with automated data sync.",
        "Improve team productivity by automating repetitive tasks.",
        "Accelerate order fulfillment with automated shipping and tracking.",
        "Optimize resource allocation with automated workflows.",
      ]
    },
    {
      value: "collaboration",
      icon: Users,
      label: "Improved Collaboration",
      title: "Improve collaboration with suppliers and partners",
      points: [
        "Automate communication with suppliers, from purchase orders to invoices.",
        "Share real-time data with partners to improve coordination.",
        "Enhance transparency with a single source of truth for all supply chain data.",
        "Strengthen supplier relationships with improved communication and efficiency.",
        "Reduce lead times with automated procurement and fulfillment.",
        "Improve supply chain resilience with better collaboration and visibility.",
      ]
    }
];

const benefits = [
    {
        icon: Layers,
        title: "Streamlined Order Management",
        description: "Automate order processing to reduce manual errors and accelerate fulfillment.",
        points: [
            "Centralize order data for a comprehensive view of your order-to-cash cycle.",
            "Improve order accuracy with automated data validation and enrichment.",
        ],
    },
    {
        icon: BrainCircuit,
        title: "Optimized Inventory Management",
        description: "Keep inventory levels accurate and prevent stockouts with real-time data sync.",
        points: [
            "Improve forecasting with real-time insights into inventory levels and sales trends.",
            "Reduce carrying costs with optimized inventory management.",
        ],
    },
    {
        icon: FileCog,
        title: "Enhanced Supplier Collaboration",
        description: "Automate communication and data exchange with suppliers to improve efficiency.",
        points: [
            "Streamline procurement with automated purchase orders and invoicing.",
            "Reduce lead times with improved communication and collaboration.",
        ],
    },
    {
        icon: Scaling,
        title: "Improved Logistics and Fulfillment",
        description: "Automate shipping and fulfillment to reduce costs and improve delivery times.",
        points: [
            "Integrate with 3PLs and shipping carriers to automate shipping labels and tracking.",
            "Improve customer satisfaction with real-time delivery updates.",
        ],
    }
];


export default function SupplyChainClientPage() {
    const supplyChainFactImage = PlaceHolderImages.find(p => p.id === 'supply-chain-fact');
    
  return (
    <div className="bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative w-full bg-gradient-to-r from-primary/10 to-blue-500/10 py-20 md:py-28 lg:py-32 overflow-hidden">
        <BackgroundAnimation className="absolute inset-0 z-0 opacity-30" />
        <div className="container mx-auto px-4 md:px-6 z-10 relative">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <AnimateOnScroll>
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl font-headline text-foreground">
                    Manufacturing & Supply Chain Automation
                </h1>
                <p className="mt-6 text-lg text-muted-foreground max-w-xl">
                   Link your supply chain end-to-end, automate key operations, and simplify business complexities with Aonflow's iPaaS solutions.
                </p>
                <div className="mt-8">
                    <Button asChild size="lg">
                        <Link href="/contact">Book a Demo</Link>
                    </Button>
                </div>
            </AnimateOnScroll>
            <AnimateOnScroll delay={0.2} className="flex justify-center">
                <Image
                    src="/supply-chain/supply-chain-automation.png"
                    alt="Supply Chain Automation"
                    width={500}
                    height={400}
                    className="object-contain"
                    data-ai-hint="supply chain"
                />
            </AnimateOnScroll>
          </div>
        </div>
      </section>

       {/* Transforming Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
            <AnimateOnScroll className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold font-headline">Automate your entire supply chain, from procurement to fulfillment</h2>
            </AnimateOnScroll>
             <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
                {transformingFeatures.map((feature, index) => (
                    <AnimateOnScroll key={index} delay={index * 0.1}>
                        <Card className="p-6 h-full flex items-start gap-6 bg-transparent border-0 shadow-none">
                            <div className="text-primary flex-shrink-0">
                                <feature.icon className="h-12 w-12" />
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

      {/* Blue Banner Section */}
      <div className="container mx-auto px-4 md:px-6">
          <section className="py-20 md:py-28 bg-primary-gradient text-white rounded-3xl">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <AnimateOnScroll className="flex justify-center">
                       {supplyChainFactImage && (
                            <Image
                                src={supplyChainFactImage.imageUrl}
                                alt="Supply Chain Statistics"
                                width={400}
                                height={400}
                                className="object-contain"
                                data-ai-hint={supplyChainFactImage.imageHint}
                            />
                        )}
                    </AnimateOnScroll>
                    <AnimateOnScroll delay={0.2}>
                        <h2 className="text-3xl font-bold mb-4">79% of companies with high-performing supply chains achieve revenue growth greater than the average for their industries.</h2>
                        <p className="text-lg opacity-90">
                           Gain a competitive advantage by automating your supply chain. Our powerful iPaaS solution enables you to streamline workflows, enhance efficiency, and drive revenue growth. Join the ranks of successful businesses that leverage automation to outperform the competition.
                        </p>
                    </AnimateOnScroll>
                </div>
            </div>
          </section>
      </div>

      {/* Why Aonflow Tabs Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
            <AnimateOnScroll className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-3xl font-bold font-headline">Why Aonflow for <span className="text-primary">Supply Chain Automation?</span></h2>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.2}>
            <Tabs defaultValue="visibility" className="w-full">
                <TabsList className="grid w-full grid-cols-3 h-auto bg-transparent p-0 border-b">
                    {whyAonflowTabs.map(tab => (
                        <TabsTrigger 
                            key={tab.value} 
                            value={tab.value} 
                            className="flex flex-col gap-2 h-auto py-4 px-2 data-[state=active]:bg-transparent bg-transparent text-muted-foreground data-[state=active]:text-primary data-[state=active]:shadow-[inset_0_-2px_0_hsl(var(--primary))] rounded-none"
                        >
                            <tab.icon className="h-8 w-8 transition-colors"/>
                            <span className="text-sm">{tab.label}</span>
                        </TabsTrigger>
                    ))}
                </TabsList>
                {whyAonflowTabs.map(tab => (
                     <TabsContent key={tab.value} value={tab.value} className="bg-transparent p-8 rounded-lg mt-4">
                        <h3 className="text-2xl font-bold mb-6 text-center text-primary">{tab.title}</h3>
                         <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-4 max-w-4xl mx-auto">
                            {tab.points.map((point, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <span className="text-primary mt-1.5 flex-shrink-0">•</span>
                                    <span className="text-muted-foreground">{point}</span>
                                </li>
                            ))}
                         </ul>
                     </TabsContent>
                ))}
            </Tabs>
            </AnimateOnScroll>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 md:py-28 bg-background relative overflow-hidden">
        <BackgroundAnimation className="absolute inset-0 z-0 opacity-50" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
             <AnimateOnScroll className="text-center max-w-3xl mx-auto mb-12">
                <h2 className="text-3xl font-bold font-headline">Benefits of Aonflow <span className="text-primary">Supply Chain Automation</span></h2>
            </AnimateOnScroll>

            <div className="grid grid-cols-1 gap-8 max-w-5xl mx-auto">
                 {benefits.map((benefit, index) => (
                    <AnimateOnScroll key={index} delay={index * 0.1}>
                        <Card className="rounded-lg text-card-foreground shadow-sm h-full p-8 border-0 bg-white/50 backdrop-blur-sm">
                            <div className="grid md:grid-cols-2 gap-8 items-center">
                                <div className="flex flex-col items-start text-left">
                                    <div className="bg-primary/10 text-primary p-3 rounded-lg self-start mb-4">
                                        <benefit.icon className="h-8 w-8"/>
                                    </div>
                                    <h3 className="text-xl font-bold font-headline mb-2">{benefit.title}</h3>
                                    <p className="text-muted-foreground text-md">{benefit.description}</p>
                                </div>
                                <ul className="space-y-4">
                                    {benefit.points.map((point, pIndex) => (
                                    <li key={pIndex} className="flex items-start gap-3 text-muted-foreground">
                                        <div className="bg-primary/10 p-1 rounded-full mt-1 flex-shrink-0">
                                            <ArrowRight className="h-4 w-4 text-primary"/>
                                        </div>
                                        <span>{point}</span>
                                    </li>
                                    ))}
                                </ul>
                            </div>
                        </Card>
                    </AnimateOnScroll>
                ))}
            </div>
        </div>
      </section>

        {/* Final CTA */}
        <section className="py-20 md:py-28">
            <AnimateOnScroll className="container mx-auto px-4 md:px-6 text-center">
                 <h2 className="text-3xl font-bold font-headline mb-4">See Aonflow in action</h2>
                <Button asChild size="lg">
                    <Link href="/contact">Book a Demo</Link>
                </Button>
            </AnimateOnScroll>
        </section>

    </div>
  );
}
