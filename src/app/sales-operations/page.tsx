
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
  GitBranch,
  FileCog,
  FileText,
  BrainCircuit,
  Star
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
} from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { AnimateOnScroll } from '@/components/animate-on-scroll';
import { BackgroundAnimation } from '@/components/background-animation';
import { cn } from '@/lib/utils';
import { useState, useEffect } from 'react';
import { EmpowerIcon } from '@/components/by-function-icons';

const transformingFeatures = [
    {
        icon: GitBranch,
        title: "Alleviate efficiency limitations",
        description: "With automation solutions for sales reps, eliminate the manual input of customer data into redundant databases, streamlining the process for improved efficiency."
    },
    {
        icon: Scaling,
        title: "Alleviate scalability roadblocks",
        description: "Scaling up the sales process becomes challenging without automation as manual tasks consume more resources and time. iPaaS streamlines to accelerate sales operations for growth."
    },
    {
        icon: Check,
        title: "Ensure data accuracy",
        description: "Ensuring accurate and up-to-date customer information becomes challenging with manual sales processes. Our iPaaS solution automates data management for reliable and timely insights."
    },
    {
        icon: LineChart,
        title: "Ensure improved visibility",
        description: "Without automation, sales teams’ visibility of the sales process is hindered, making it challenging to analyze conversion potential. Automation ensures insights for decision-making."
    }
];

const whyAonflowTabs = [
    {
      value: "all-star",
      icon: Star,
      label: "All-Star Leader",
      title: "Transform into an all-star sales leader with automation",
      points: [
        "Streamlined workflow: Automate tasks like invoicing, payment tracking, and order fulfillment for efficiency.",
        "Optimized sales operations: Save time and effort while efficiently managing tasks for improved productivity.",
        "Accurate sales projections: Assess revenue, customer attrition, and expansion into new markets with precision.",
        "Simplified data entry: Enable salespeople to focus on driving revenue growth by streamlining data entry.",
        "Seamless application integration: Maximize sales process efficiency by integrating multiple applications seamlessly.",
        "Comprehensive reporting: Gain insights into sales performance, analyze data, and make informed decisions.",
      ]
    },
    {
      value: "workflow",
      icon: Repeat,
      label: "One Workflow",
      title: "Harness the power of one sales workflow solution",
      points: [
        "Streamline lead passing: Simplify the transfer of leads between marketing and sales with dynamic routing experiences.",
        "Automate closing processes: Increase efficiency by automating deal approvals, onboarding, and win notifications.",
        "Enhance sales reminders: Set up automated notifications to keep sales teams informed and on track.",
        "Optimize opportunity-to-cash: Automate the entire sales process from opportunity creation to order fulfillment.",
        "Seamlessly integrate applications: Connect web, sales, marketing, service, and finance systems for streamlined sales operations.",
        "Boost sales performance: Leverage automation to improve productivity, accuracy, and effectiveness across the sales cycle.",
      ]
    },
    {
      value: "optimize",
      icon: Scaling,
      label: "Optimize",
      title: "Optimize sales process with adaptable automation solutions",
      points: [
        "Sales process automation: Turn concepts into reality quickly with the most versatile platform available.",
        "Streamline opportunity management: Automate stage checks, updates, and alerts to stay ahead of the game.",
        "Rapid opportunity cycling: Utilize automated flows to separate and prioritize opportunities based on various criteria.",
        "Data cleansing and normalization: Purge, normalize, and replace faulty or inconsistent data fields.",
        "User-friendly interface: Build, design, and collaborate on workflows easily with a flowchart-like interface.",
        "Seamless collaboration: Work on workflows individually or as a team with intuitive collaboration features of iPaaS.",
      ]
    },
    {
      value: "unify",
      icon: Layers,
      label: "Unify",
      title: "Unify data integration across multiple applications",
      points: [
        "Effortless data integration: Drag and drop prospects, customers, opportunities, and more across apps seamlessly.",
        "Eliminate manual tasks: Bid farewell to spreadsheets, copy-pasting, and one-off integrations with Aonflow's iPaaS solution.",
        "Intuitive sales reporting: Automatically sync data to generate reliable reports, including bookings, forecasts, and renewals.",
        "Automated deal desk: Streamline workflows by automating processes like approvals, pricing, and centralized documentation.",
        "Time-saving synchronization: Sync all data for a seamless experience, saving valuable time and effort.",
        "Boost team efficiency: Increase productivity by automating deal desk processes and keeping documentation centralized.",
      ]
    },
    {
        value: "quote-to-cash",
        icon: FileText,
        label: "Quote-to-Cash",
        title: "Streamline the quote-to-cash process for increased efficiency",
        points: [
          "Simplify finance processes: Bid farewell to laborious manual tasks and embrace automation for an easier life.",
          "Streamlined quote-to-cash: Combine CPM, ERP, CRM, and e-signature solutions for swift revenue recognition.",
          "Automated data transport: Establish workflows to seamlessly transfer data between Q2C applications, eliminating tedious meetings.",
          "Efficient revenue recognition: Streamline the entire quote-to-cash cycle for faster and more accurate revenue recognition.",
          "Seamless integration: Integrate CPM, ERP, CRM, and e-signature solutions to streamline your quote-to-cash process.",
          "Eliminate manual efforts: Automate data transport between Q2C applications, reducing time-consuming and repetitive tasks.",
        ]
    },
    {
        value: "support-transition",
        icon: Users,
        label: "Support Transition",
        title: "Smoother customer support transition for streamlined experiences",
        points: [
            "Smooth handoff process: Seamlessly connect CRM, CPQ, and Helpdesk solutions to streamline post-sales operations.",
            "End manual work: Automate success plans, SLAs, onboarding, and product training for faster and simpler processes.",
            "Efficient onboarding: Aggregate and share pre-sales information to reduce kickoff meetings and accelerate time-to-value.",
            "Seamless integration: Connect CRM, CPQ, and Helpdesk solutions for a streamlined post-sales handoff.",
            "Automated processes: Eliminate manual work for success plans, SLAs, onboarding, and product training for seamless operations.",
            "Accelerate onboarding: Share pre-sales information to reduce meetings and speed up time-to-value.",
        ]
    }
];

const benefits = [
    {
        icon: Layers,
        title: "Efficient and optimized sales processes for streamlined operations",
        description: "Streamline sales operations for increased efficiency and resource optimization.",
        points: [
            "Automating sales operations saves time on mundane tasks, allocates resources strategically.",
            "Free up valuable resources to focus on more meaningful and impactful sales activities.",
        ]
    },
    {
        icon: BrainCircuit,
        title: "Enhanced productivity, leading to increased operational efficiency",
        description: "Accelerate work efficiency through process automation.",
        points: [
            "Automating approvals, pricing, and follow-up enables teams to work faster and more efficiently",
            "Experience improved productivity and streamlined operations with the power of automation.",
        ]
    },
    {
        icon: FileCog,
        title: "Improved teamwork and collaboration for more effective outcomes",
        description: "Streamline sales operations for effective collaboration.",
        points: [
            "Automate tasks related to data sharing and communication for smoother and more effective team collaboration",
            "Enhance collaboration within sales operations by leveraging automation to streamline processes and improve efficiency.",
        ]
    },
    {
        icon: Users,
        title: "Enhanced customer satisfaction through improved experiences and interactions",
        description: "Enhance customer experiences through automated processes.",
        points: [
            "Improve customer satisfaction and loyalty by automating processes like onboarding and product training.",
            "Enhanced customer experience leads to higher satisfaction levels and increased loyalty.",
        ]
    }
];


export default function SalesOperationsPage() {

    const [activeTab, setActiveTab] = useState(whyAonflowTabs[0].value);
    const [isTabCarouselPaused, setIsTabCarouselPaused] = useState(false);
  
    useEffect(() => {
      if (isTabCarouselPaused) return;
      const tabRotationInterval = setInterval(() => {
        setActiveTab(prevTab => {
          const currentIndex = whyAonflowTabs.findIndex(tab => tab.value === prevTab);
          const nextIndex = (currentIndex + 1) % whyAonflowTabs.length;
          return whyAonflowTabs[nextIndex].value;
        });
      }, 5000);
      return () => clearInterval(tabRotationInterval);
    }, [isTabCarouselPaused]);
    
  return (
    <div className="bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative w-full bg-gradient-to-r from-primary/10 to-blue-500/10 py-20 md:py-28 lg:py-32 overflow-hidden">
        <BackgroundAnimation className="absolute inset-0 z-0 opacity-30" />
        <div className="container mx-auto px-4 md:px-6 z-10 relative">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <AnimateOnScroll>
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl font-headline text-foreground">
                    Sales Operations Automation
                </h1>
                <p className="mt-6 text-lg text-muted-foreground max-w-xl">
                   Powerful global sales automation. Take control and unleash its potential!
                </p>
                <div className="mt-8">
                    <Button asChild size="lg">
                        <Link href="/contact">Book a Demo</Link>
                    </Button>
                </div>
            </AnimateOnScroll>
            <AnimateOnScroll delay={0.2} className="flex justify-center">
                <Image
                    src="/sales-operations/sales-operations-automation.svg"
                    alt="Sales Operations Automation"
                    width={500}
                    height={400}
                    className="object-contain"
                    data-ai-hint="sales operations"
                />
            </AnimateOnScroll>
          </div>
        </div>
      </section>

       {/* Transforming Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
            <AnimateOnScroll className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold font-headline">Efficiently streamline the sales process, eliminating bottlenecks</h2>
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
                        <Image
                            src="/sales-operations/sales-operations-automation-fact.svg"
                            alt="Sales Operations statistics"
                            width={400}
                            height={400}
                            className="object-contain"
                            data-ai-hint="sales chart"
                        />
                    </AnimateOnScroll>
                    <AnimateOnScroll delay={0.2}>
                        <h2 className="text-3xl font-bold mb-4">1/3rd of all sales operations-related tasks can be automated</h2>
                        <p className="text-lg opacity-90">
                           Transform your sales operations with Aonflow's iPaaS platform. Streamline workflows, connect apps, generate consolidated reports, and automate tasks—from onboarding to lead scoring—maximizing the sales team’s potential for efficient and effective selling and enhanced conversions. Simplify processes, save time, and focus on strategic sales initiatives.
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
                <h2 className="text-3xl font-bold font-headline">Why Aonflow for <span className="text-primary">Sales Operations Automation?</span></h2>
            </AnimateOnScroll>

            <AnimateOnScroll 
                delay={0.2}
                onMouseEnter={() => setIsTabCarouselPaused(true)}
                onMouseLeave={() => setIsTabCarouselPaused(false)}
            >
            <Tabs 
                value={activeTab} 
                onValueChange={(value) => {
                    setActiveTab(value);
                    setIsTabCarouselPaused(true);
                }}
                className="w-full"
            >
                <TabsList className="grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-6 h-auto bg-transparent p-0 border-b">
                    {whyAonflowTabs.map(tab => (
                        <TabsTrigger 
                            key={tab.value} 
                            value={tab.value} 
                            className={cn("flex flex-col gap-2 h-auto py-4 px-2 data-[state=active]:bg-transparent bg-transparent text-muted-foreground data-[state=active]:text-primary data-[state=active]:shadow-[inset_0_-2px_0_hsl(var(--primary))] rounded-none",
                                activeTab === tab.value && !isTabCarouselPaused && "animate-tab-progress"
                            )}
                        >
                            <tab.icon className={cn("h-8 w-8 transition-colors",
                                `group-data-[state=active]:text-primary`
                            )}/>
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
                <h2 className="text-3xl font-bold font-headline">Benefits of Aonflow <span className="text-primary">Sales Operations Automation</span></h2>
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



    