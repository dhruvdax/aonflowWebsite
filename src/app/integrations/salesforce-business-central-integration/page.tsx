
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
  FileText,
  DollarSign,
  HeartHandshake,
  Settings,
  RefreshCw,
  GitBranch,
  Building,
  Key,
  Eye,
  Puzzle,
  Clock,
  Wand,
  SlidersHorizontal,
  Link2,
  PlusCircle,
  ThumbsUp,
  Activity,
  Search,
  PieChart,
  Accessibility,
  Workflow,
  GitCompareArrows,
  Server,
  Database,
  Contact,
  File,
  Handshake,
  MonitorPlay,
  FilePlus,
  FileUp,
  UserPlus,
  FileSignature,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from '@/components/ui/card';
import { AnimateOnScroll } from '@/components/animate-on-scroll';
import { BackgroundAnimation } from '@/components/background-animation';
import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Autoplay from "embla-carousel-autoplay";

const powerFeatures = [
    {
        icon: Scaling,
        title: "Limitless Scalability",
        description: "Support your organization's growth with infinite scalability, handling vast data volumes and complex integrations without constraints."
    },
    {
        icon: BrainCircuit,
        title: "Enterprise-Grade Capability",
        description: "Equipped with robust tools and governance to manage complex sales and operational scenarios effectively."
    },
    {
        icon: Users,
        title: "User-Friendly Interface",
        description: "Our intuitive interface enables users to effortlessly create, monitor, and manage automation between Salesforce and Business Central."
    },
    {
        icon: Puzzle,
        title: "Comprehensive Integration Capabilities",
        description: "Efficiently sync accounts and customers, contacts, products and items, pricing, opportunities, and sales orders with no need for custom coding."
    },
    {
        icon: Scaling,
        title: "Scalable and Robust",
        description: "Achieve seamless scalability for managing sales and operational data, ensuring unrestricted integration and data handling capabilities."
    },
    {
        icon: SlidersHorizontal,
        title: "Configurable and Customizable",
        description: "Advanced settings offer tailored solutions for diverse use cases, providing flexibility and customization to fit your specific needs."
    },
    {
        icon: MonitorPlay,
        title: "Easy Monitoring and Management",
        description: "Streamlined monitoring, error management, and real-time alerts simplify the maintenance and oversight of your integration."
    }
];

const howItWorksFeatures = [
    { icon: GitCompareArrows, title: "Connect", description: "Establish a secure link between Salesforce and Dynamics 365 Business Central effortlessly, creating a robust foundation for seamless data exchange and integration." },
    { icon: Settings, title: "Configure", description: "Tailor the integration to your specific requirements by customizing settings and leveraging advanced mapping filters, ensuring optimal alignment between Salesforce and Business Central workflows." },
    { icon: Users, title: "Sync and Collaborate", description: "Sync customer data, product information, pricing, opportunities, and sales orders between platforms. Enhance collaboration with a unified view of sales and operational data, improving team coordination." },
    { icon: Zap, title: "Automate", description: "Enhance efficiency by synching workflows and streamlining processes. Set triggers for actions—such as automatically creating a sales order in Business Central when an opportunity is marked as \"Won\" in Salesforce—to reduce manual intervention, allowing your team to focus on strategic initiatives." }
];

const popularIntegrations = [
    { icon: UserPlus, title: "Sync Salesforce Accounts to Business Central Customer", description: "Automatically sync accounts between Salesforce and Business Central to keep customer data consistent across both systems." },
    { icon: Contact, title: "Sync Salesforce Contacts to Business Central Contacts", description: "Ensure contact details are up-to-date across both systems for improved communication." },
    { icon: Layers, title: "Sync Products and Pricing", description: "Automatically sync items from Business Central to products and price book entries in Salesforce, ensuring accurate and up-to-date product and pricing information." },
    { icon: Repeat, title: "Convert Opportunities to Sales Orders", description: "Effortlessly convert won opportunities into sales orders in Business Central, streamlining your sales process." },
];

const triggersActions = {
  triggers: [
    { title: "On-Demand or Scheduled Triggers:", isHeader: true, description: "Time-Based Triggers: Sync data at regular intervals." },
    { title: "Condition-Based Triggers:", isHeader: true, description: "Opportunity Won Trigger: When an opportunity is marked as \"Won\" in Salesforce, trigger the creation of a sales order in Business Central." },
    { title: "Sequential Triggers:", isHeader: true, description: "Post-Order Actions: After a sales order is created in Business Central, automatically create or update the sales order in Salesforce." }
  ],
  actions: [
    { title: "Perform the following tasks", isHeader: true },
    { title: "Create or Update Accounts/Customers:", description: "Sync new or updated accounts in Salesforce to customers in Business Central, and vice versa." },
    { title: "Sync Products and Price Book Entries:", description: "Sync items from Business Central to products and pricing in Salesforce." },
    { title: "Convert Opportunities to Sales Orders:", description: "Automate the creation of sales orders in Business Central when opportunities are won in Salesforce." }
  ],
};

const howItWorksSteps = [
    { number: 1, text: "Authenticate both platforms to ensure the security and integrity of customer and operational data." },
    { number: 2, text: "Set up both connectors quickly by choosing triggers that align with your sales and operational workflows." },
    { number: 3, text: "Select actions from either platform to enable smooth data exchange between Salesforce and Business Central." },
    { number: 4, text: "Define the unique fields to be synched, including accounts/customers, contacts, products/items, pricing, opportunities, sales orders, and other fields as needed." },
];

const differentiatorFeatures = [
    { icon: GitCompareArrows, title: "Bi-Directional Synchronization", description: "Automatically sync accounts and customers between Salesforce and Business Central, ensuring consistent data across both systems." },
    { icon: Workflow, title: "Sequential Triggering", description: "Aonflow handles actions in a sequential manner—for example, once an opportunity is marked as \"Won\" in Salesforce, a sales order is created in Business Central, and then synced back to Salesforce." },
    { icon: Key, title: "Unique Identifier Management", description: "Maintain data integrity with unique identifiers linking records across both platforms." },
    { icon: Layers, title: "Product and Pricing Synchronization", description: "Sync items from Business Central to products and price book entries in Salesforce, ensuring your sales team always has up-to-date product and pricing information." },
    { icon: SlidersHorizontal, title: "Advanced Workflow Management", description: "Automate complex workflows, such as handling different pricing strategies for different regions, like selling a Samsung laptop at different prices in India and Korea." },
    { icon: Scaling, title: "Flexible and Scalable Solutions", description: "Adaptable solutions that evolve with your business needs, supporting organizational growth and change." },
    { icon: Clock, title: "Real-Time Data Access", description: "Empower informed decision-making with instant access to sync data." },
    { icon: ShieldCheck, title: "Top-Tier Data Security", description: "Prioritized security and compliance ensure your data is protected in line with industry regulations." },
]


export default function SalesforceBusinessCentralIntegrationPage() {
    const autoplay = React.useRef(
        Autoplay({ delay: 5000, stopOnInteraction: true })
    );

    const autoplayDifferentiator = React.useRef(
        Autoplay({ delay: 5000, stopOnInteraction: true })
    );

    return (
        <div className="bg-background text-foreground">
            {/* Hero Section */}
            <section className="relative w-full bg-primary/10 py-20 md:py-28 lg:py-32 overflow-hidden">
                <BackgroundAnimation className="absolute inset-0 z-0 opacity-50" />
                <div className="container mx-auto px-4 md:px-6 z-10 relative">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                    <AnimateOnScroll>
                        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl font-headline text-foreground">
                            Salesforce and Microsoft Dynamics 365 Business Central Integration
                        </h1>
                        <p className="mt-6 text-lg text-muted-foreground max-w-xl">
                            Seamlessly integrate opportunities-to-sale with Salesforce CRM and Microsoft Dynamics 365 Business Central ERP using Aonflow. Streamline your business operations, and automate data synchronization between your sales and operational systems.
                        </p>
                        <div className="mt-8 flex gap-4">
                            <Button asChild size="lg">
                                <Link href="#">Get Started For Free</Link>
                            </Button>
                            <Button asChild size="lg" variant="outline">
                                <Link href="/contact">Book a Demo</Link>
                            </Button>
                        </div>
                    </AnimateOnScroll>
                    <AnimateOnScroll delay={0.2} className="flex flex-col items-center">
                        <Image
                            src="/salesforce-business-central/salesforce-business-central-integration.svg"
                            alt="Salesforce and Business Central Integration"
                            width={500}
                            height={300}
                            className="object-contain"
                            data-ai-hint="integration diagram"
                        />
                    </AnimateOnScroll>
                </div>
                </div>
            </section>
            
            {/* Sync Section */}
             <section className="py-20 md:py-28">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                         <div className="flex justify-center">
                             <Image 
                                src="/salesforce-business-central/salesforce-business-central-ipaas-connector.svg" 
                                alt="Salesforce and Business Central integration diagram" 
                                width={450}
                                height={450}
                                data-ai-hint="integration diagram"
                                className="w-[80%]"
                            />
                        </div>
                        <div>
                            <h2 className="text-3xl font-bold font-headline">Salesforce + Business Central Integration Connector</h2>
                            <p className="mt-4 text-muted-foreground">
                                Effortlessly connect Salesforce, your primary CRM system, with Dynamics 365 Business Central, your ERP solution, using our advanced integration powered by Aonflow. This powerful connector ensures seamless data synchronization—whether on-demand or scheduled—between your customer relationship management and enterprise resource planning systems.
                            </p>
                            <p className="mt-2 text-muted-foreground">
                                Enhance customer relationship management, streamline sales processes, and automate workflows to reduce manual data entry. Gain comprehensive visibility across sales and operational data, improving decision-making and efficiency. With our solution, experience simplified processes and a unified view of your business, driving optimized performance and growth. Unlock the full potential of integration with Aonflow’s cutting-edge
                                iPaaS solutions.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            
            {/* Power of Integration Section */}
            <section className="py-20 md:py-28 bg-primary/5">
                <div className="container mx-auto px-4 md:px-6">
                    <AnimateOnScroll className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="text-3xl font-bold font-headline">Discover the Power of Salesforce Integration with Microsoft Dynamics Business Central</h2>
                    </AnimateOnScroll>
                     <AnimateOnScroll>
                        <Carousel
                            opts={{ align: "start", loop: true }}
                            plugins={[autoplay.current]}
                            onMouseEnter={() => autoplay.current.stop()}
                            onMouseLeave={() => autoplay.current.reset()}
                            className="w-full max-w-6xl mx-auto"
                        >
                            <CarouselContent>
                                {powerFeatures.map((feature, index) => (
                                    <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/4 p-4">
                                        <Card className="p-6 h-full text-center flex flex-col items-center bg-background/50 border-0 shadow-none">
                                            <div className="text-primary bg-transparent p-0 rounded-full mb-4">
                                                <feature.icon className="h-12 w-12" />
                                            </div>
                                            <h3 className="text-xl font-bold font-headline mb-2">{feature.title}</h3>
                                            <p className="text-muted-foreground text-sm flex-1">{feature.description}</p>
                                        </Card>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                             <div className="flex justify-center gap-4 mt-8">
                                <CarouselPrevious />
                                <CarouselNext />
                            </div>
                        </Carousel>
                    </AnimateOnScroll>
                </div>
            </section>
            
            {/* CTA Banner */}
            <div className="container mx-auto px-4 md:px-6 my-20">
                <section className="py-16 bg-primary-gradient text-white rounded-3xl">
                    <div className="container mx-auto px-4 md:px-6 text-center">
                       <AnimateOnScroll>
                            <h2 className="text-2xl font-bold mb-4">Try Aonflow iPaaS – Free for the First Year!</h2>
                             <p className="text-lg opacity-90 mb-6">
                               Build and run up to 5,000 transactions monthly with no cost. No payment info needed!
                            </p>
                            <Button variant="secondary" asChild>
                                <Link href="#">Sign Up Now</Link>
                            </Button>
                        </AnimateOnScroll>
                    </div>
                </section>
            </div>

             <section className="py-20 md:py-28">
                <div className="container mx-auto px-4 md:px-6 max-w-6xl">
                    <AnimateOnScroll className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="text-3xl font-bold font-headline">How It Works</h2>
                        <p className="mt-4 text-muted-foreground">
                            Discover How Salesforce + Microsoft Dynamics 365 Business Central Integration Operates Seamlessly
                        </p>
                    </AnimateOnScroll>
                    
                    <div className="relative mb-12">
                        <div className="absolute top-1/2 left-0 w-full h-0.5 bg-border -translate-y-1/2 hidden md:block"></div>
                        <div className="relative grid grid-cols-1 md:grid-cols-4 gap-8">
                            {howItWorksSteps.map((step, index) => (
                                <div key={index} className="flex flex-col items-center text-center">
                                    <div className="bg-background z-10 p-2">
                                        <div className="w-10 h-10 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center text-primary font-bold">
                                            {step.number}
                                        </div>
                                    </div>
                                    <p className="mt-4 text-sm text-muted-foreground">{step.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    
                    <p className="text-center text-muted-foreground font-semibold mb-12">Boost efficiency and streamline your data management with effortless integration.</p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                        {howItWorksFeatures.map((item, index) => (
                            <AnimateOnScroll key={index} delay={index * 0.1}>
                                <div className="flex items-start gap-4">
                                    <div className="text-primary flex-shrink-0">
                                        <item.icon className="h-10 w-10" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                                        <p className="text-muted-foreground text-sm">{item.description}</p>
                                    </div>
                                </div>
                            </AnimateOnScroll>
                        ))}
                    </div>
                </div>
            </section>
            
            {/* The Aonflow Differentiator Section */}
            <section className="py-20 md:py-28 bg-primary/5">
                <div className="container mx-auto px-4 md:px-6">
                    <AnimateOnScroll className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="text-3xl font-bold font-headline">The Aonflow Differentiator</h2>
                    </AnimateOnScroll>
                     <AnimateOnScroll>
                        <Carousel
                            opts={{ align: "start", loop: true }}
                            plugins={[autoplayDifferentiator.current]}
                            onMouseEnter={() => autoplayDifferentiator.current.stop()}
                            onMouseLeave={() => autoplayDifferentiator.current.reset()}
                            className="w-full max-w-6xl mx-auto"
                        >
                            <CarouselContent>
                                {differentiatorFeatures.map((feature, index) => (
                                    <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/4 p-4">
                                        <Card className="p-6 h-full text-center flex flex-col items-center bg-background/50 border-0 shadow-none">
                                            <div className="text-primary bg-transparent p-0 rounded-full mb-4">
                                                <feature.icon className="h-12 w-12" />
                                            </div>
                                            <h3 className="text-xl font-bold font-headline mb-2">{feature.title}</h3>
                                            <p className="text-muted-foreground text-sm flex-1">{feature.description}</p>
                                        </Card>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                             <div className="flex justify-center gap-4 mt-8">
                                <CarouselPrevious />
                                <CarouselNext />
                            </div>
                        </Carousel>
                    </AnimateOnScroll>
                </div>
            </section>

            {/* CTA Banner */}
            <div className="container mx-auto px-4 md:px-6 my-20">
                <section className="py-16 bg-primary-gradient text-white rounded-3xl">
                    <div className="container mx-auto px-4 md:px-6 text-center">
                       <AnimateOnScroll>
                            <h2 className="text-2xl font-bold mb-4">Our Integration Promise</h2>
                            <div className="grid md:grid-cols-3 gap-8 items-start mb-8">
                                <div className="flex flex-col items-center">
                                    <GitCompareArrows className="h-14 w-14 mb-4" />
                                    <h3 className="font-semibold text-lg">Unified Customer and Operational Data</h3>
                                    <p className="text-sm opacity-90 mt-1">Achieve seamless sync between Salesforce and Business Central to eliminate data silos and ensure consistent information flow.</p>
                                </div>
                                <div className="flex flex-col items-center">
                                    <Workflow className="h-14 w-14 mb-4" />
                                    <h3 className="font-semibold text-lg">Customizable Sales Workflows</h3>
                                    <p className="text-sm opacity-90 mt-1">Tailor workflows to fit your specific sales and operational processes, enhancing task management and improving team collaboration.</p>
                                </div>
                                <div className="flex flex-col items-center">
                                    <Zap className="h-14 w-14 mb-4" />
                                    <h3 className="font-semibold text-lg">Sequential Triggers for Efficiency</h3>
                                    <p className="text-sm opacity-90 mt-1">Utilize Aonflow's sequential triggering to automate processes in the correct order, ensuring data consistency and operational efficiency.</p>
                                </div>
                            </div>
                             <p className="text-xs text-white/80 mt-8 max-w-3xl mx-auto">
                                PLEASE NOTE: To access Salesforce with Microsoft Dynamics Business Central integration, <Link href="/contact" className="underline hover:opacity-80">sign up</Link> for an Aonflow account. Unlock the potential of seamless connectivity and leverage our integration solutions. Create your free account today!
                            </p>
                        </AnimateOnScroll>
                    </div>
                </section>
            </div>

            <div className="container mx-auto px-4 md:px-6 my-20">
                <AnimateOnScroll className="text-center">
                    <h3 className="text-2xl font-semibold mb-2">Need a Customized Solution?</h3>
                    <p className="text-muted-foreground mb-4">Contact Aonflow experts for bespoke Salesforce and Business Central integration solutions.</p>
                    <Button asChild>
                        <Link href="/contact">Contact Us</Link>
                    </Button>
                </AnimateOnScroll>
            </div>
            
            <section className="py-20 md:py-28 bg-primary/5">
                <div className="container mx-auto px-4 md:px-6">
                    <AnimateOnScroll className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="text-3xl font-bold font-headline">How to Connect Salesforce with Business Central</h2>
                        <p className="text-muted-foreground mt-4">Effortlessly connect Salesforce with Dynamics 365 Business Central using our advanced integration solutions.
                        Streamline operations and achieve unified data visibility.</p>
                    </AnimateOnScroll>
                    
                    <AnimateOnScroll className="mb-12">
                        <h3 className="text-2xl font-bold font-headline mb-8 text-center">Most Popular Salesforce + Business Central Integrations Options</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
                            {popularIntegrations.map((item, index) => (
                            <Card key={index} className="p-6 bg-background/50 flex items-start gap-4">
                                <div className="bg-primary/10 text-primary p-3 rounded-full flex-shrink-0">
                                    <item.icon className="h-8 w-8" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-lg">{item.title}</h4>
                                    <p className="text-sm text-muted-foreground">{item.description}</p>
                                </div>
                            </Card>
                            ))}
                        </div>
                    </AnimateOnScroll>

                    <p className="font-semibold mt-4 text-center">Achieve seamless data flow and enhanced efficiency by synching your customer data, product and pricing information, opportunities, and sales orders.</p>
                    
                    <div className="space-y-8 mt-12">
                        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
                            <Card className="bg-background/50 p-6">
                                <div className="flex flex-col items-center">
                                    <div className="h-[200px] w-full flex items-center justify-center mb-4">
                                        <Image src="/salesforce-business-central/seamless-customer-data-synchronization.svg" alt="Seamless Customer Data Synchronization" width={400} height={250} data-ai-hint="customer database" className="rounded-lg object-contain h-full w-auto" />
                                    </div>
                                    <h3 className="font-bold mb-2 text-center text-lg">Seamless Customer Data Synchronization</h3>
                                    <p className="text-sm text-muted-foreground text-center">Ensure seamless synchronization of customer details between Salesforce and Business Central. Streamline operations by maintaining consistent customer profiles.</p>
                                </div>
                            </Card>
                            <Card className="bg-background/50 p-6">
                                <div className="flex flex-col items-center">
                                    <div className="h-[200px] w-full flex items-center justify-center mb-4">
                                        <Image src="/salesforce-business-central/product-and-pricing-alignment.svg" alt="Product and Pricing Alignment" width={400} height={250} data-ai-hint="product price tag" className="rounded-lg object-contain h-full w-auto" />
                                    </div>
                                    <h3 className="font-bold mb-2 text-center text-lg">Product and Pricing Alignment</h3>
                                    <p className="text-sm text-muted-foreground text-center">Keep your sales team informed with the latest product and pricing information by synching items from Business Central to products and price book entries in Salesforce.</p>
                                </div>
                            </Card>
                            <Card className="bg-background/50 p-6">
                                <div className="flex flex-col items-center">
                                     <div className="h-[200px] w-full flex items-center justify-center mb-4">
                                        <Image src="/salesforce-business-central/automated-opportunity-to-order-conversion.svg" alt="Automated Opportunity to Order Conversion" width={500} height={300} data-ai-hint="sales chart" className="rounded-lg object-contain h-full w-auto" />
                                    </div>
                                    <h3 className="font-bold mb-2 text-center text-lg">Automated Opportunity to Order Conversion</h3>
                                    <p className="text-sm text-muted-foreground text-center max-w-md">When an opportunity is marked as "Won" in Salesforce, Aonflow automatically creates a corresponding sales order in Business Central, ensuring a smooth transition from sales negotiation to order fulfillment.</p>
                                </div>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>
            
            {/* Triggers and Actions */}
            <section className="py-20 md:py-28">
                <div className="container mx-auto px-4 md:px-6">
                    <AnimateOnScroll className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="text-3xl font-bold font-headline">Understanding Aonflow Triggers and Actions</h2>
                    </AnimateOnScroll>
                    <AnimateOnScroll className="text-center max-w-3xl mx-auto mb-12">
                        <h3 className="text-2xl font-bold font-headline">Step-by-Step Automation Process</h3>
                        <p className="text-muted-foreground mt-4">Synchronizing data doesn't need to be difficult or complex. Here’s how you create triggers and activate actions between Salesforce and Business Central.</p>
                    </AnimateOnScroll>

                    <div className="grid md:grid-cols-3 gap-8 mb-12 text-center items-start">
                         <AnimateOnScroll>
                            <Card className="p-6 h-full border-0 shadow-none bg-transparent">
                                <CardHeader className="items-center">
                                    <div className="p-3 bg-primary/10 rounded-full inline-block">
                                      <Zap className="h-8 w-8 text-primary"/>
                                    </div>
                                    <CardTitle>Intuitive Editor</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground">Effortlessly create workflows using our user-friendly interface.</p>
                                </CardContent>
                            </Card>
                        </AnimateOnScroll>
                        <AnimateOnScroll delay={0.1}>
                             <Card className="p-6 h-full border-0 shadow-none bg-transparent">
                                <CardHeader className="items-center">
                                    <div className="p-3 bg-primary/10 rounded-full inline-block">
                                      <FileCog className="h-8 w-8 text-primary"/>
                                    </div>
                                    <CardTitle>Customized Logic</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground">Create tailored actions using personalized unique data fields.</p>
                                </CardContent>
                            </Card>
                        </AnimateOnScroll>
                         <AnimateOnScroll delay={0.2}>
                             <Card className="p-6 h-full border-0 shadow-none bg-transparent">
                                <CardHeader className="items-center">
                                    <div className="p-3 bg-primary/10 rounded-full inline-block">
                                      <ShieldCheck className="h-8 w-8 text-primary"/>
                                    </div>
                                    <CardTitle>Strong Security Measures</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground">Activate flows with confidence, assured by top-tier data protection protocols.</p>
                                </CardContent>
                            </Card>
                        </AnimateOnScroll>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-8">
                        <Card className="p-6 bg-primary/5">
                            <CardHeader>
                                <CardTitle className="text-primary">Triggers</CardTitle>
                            </CardHeader>
                            <CardContent>
                               <ul className="space-y-3">
                                {triggersActions.triggers.map((item, i) => (
                                    <li key={i} className="text-muted-foreground text-sm">
                                        {item.isHeader && <strong className="text-foreground">{item.title}</strong>}
                                        {item.description && <p className="mt-1">{item.description}</p>}
                                        {!item.isHeader && !item.description && <p className={item.isItalic ? 'italic' : ''}>{item.title}</p>}
                                        {item.isExample && <p className="text-xs mt-1 pl-4 italic">{item.title}</p>}
                                    </li>
                                ))}
                               </ul>
                            </CardContent>
                        </Card>
                         <Card className="p-6 bg-primary/5">
                            <CardHeader>
                                <CardTitle className="text-primary">Actions</CardTitle>
                            </CardHeader>
                            <CardContent>
                               <ul className="space-y-3">
                                {triggersActions.actions.map((item, i) => (
                                    <li key={i} className="text-muted-foreground text-sm">
                                        {item.isHeader && <strong className="text-foreground">{item.title}</strong>}
                                        {item.description && <p className="mt-1">{item.description}</p>}
                                        {!item.isHeader && !item.description && <p>{item.title}</p>}
                                        {item.isExample && <p className="text-xs mt-1 pl-4 italic">{item.title}</p>}
                                    </li>
                                ))}
                               </ul>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>
        </div>
    );
}
