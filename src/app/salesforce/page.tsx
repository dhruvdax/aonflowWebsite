
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
  Heart,
  Hand,
  Lightbulb,
  DollarSign,
  Briefcase,
  GitBranch,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { AnimateOnScroll } from '@/components/animate-on-scroll';
import { BackgroundAnimation } from '@/components/background-animation';
import { cn } from '@/lib/utils';
import { useState, useEffect, useRef } from 'react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Autoplay from "embla-carousel-autoplay";
import React from 'react';

const salesforceUseCases = [
    {
        icon: LineChart,
        title: "Lead-to-Order Data Flow",
        description: "Aonflow can transfer that information to an ERP/order management system when a lead is qualified, and a sales opportunity is added in Salesforce. This link generates a matching sales order, promoting data alignment between systems and minimizing manual input."
    },
    {
        icon: Users,
        title: "Unified Customer Data",
        description: "Aonflow enables syncing customer records from Salesforce to CRM systems such as Microsoft Dynamics 365 or other CRM systems. The unified customer view enables better collaboration within and between departments and makes sure any updates are visible across departments."
    },
    {
        icon: BarChart,
        title: "Scheduled Reporting",
        description: "Aonflow periodically and automatically pulls data from Salesforce into Google Sheets to provide up-to-date dashboards and performance reports, free from the manual expense of exporting data."
    },
    {
        icon: Repeat,
        title: "Data Consistency Across Systems",
        description: "Tech giants like Salesforce offer a range of products that are not designed to be limited to one aspect of a business, like leads, rather than working against each other."
    }
];


const aonflowForIntegration = [
    {
        icon: Zap,
        title: "Salesforce integration for all your CRM solutions"
    },
    {
        icon: BrainCircuit,
        title: "Automate with low-code builder for your needs"
    },
    {
        icon: Layers,
        title: "Fluid automation architecture to instantly scale"
    },
    {
        icon: ShieldCheck,
        title: "Robust in-built enterprise security for your data"
    }
];

const faqs = [
  {
    question: "What is Salesforce Integration?",
    answer: "As the name suggests, Salesforce Integration refers to integrating your CRM with other systems, applications, databases, or devices your business uses. Doing so allows for data to be automatically exchanged between Salesforce and your other tools on a predetermined schedule or on-demand, resulting in an end to manual data entry and the errors it causes, as well as immediately ensuring your teams have the latest information. This integration allows you to synchronize data seamlessly to simplify processes such as lead management, order processing through reports, etc."
  },
  {
    question: "Which platforms can I integrate with Salesforce through Aonflow?",
    answer: (
      <div>
        <p className="mb-2">Aonflow provides a wide variety of integrations to suit your requirements, from syncing Salesforce data with:</p>
        <ul className="list-disc pl-5 space-y-2">
            <li><strong>Microsoft Dynamics 365:</strong> Keep sales and CRM data consistent with financials, supply chain, and other ERP modules</li>
            <li><strong>Google Sheets:</strong> Update spreadsheets automatically with Salesforce verticals, leads or reports.</li>
            <li><strong>Twilio:</strong> Send SMS or make voice calls when an event happens in Salesforce (new lead, case update, etc.)</li>
            <li><strong>WooCommerce:</strong> Sync orders, products and customer data to have a unified view of your online store.</li>
            <li><strong>HubSpot:</strong> Sync marketing campaigns, lead data, and contact records with Salesforce.</li>
            <li><strong>Stripe:</strong> cross-reference payments and subscription statuses with opportunities and records in Salesforce.</li>
            <li><strong>Microsoft Dynamics:</strong> If you work with multiple Microsoft solutions, Aonflow can make Salesforce play nicely with all your MS systems.</li>
            <li><strong>Business Central:</strong> Connect Salesforce opportunities, quotes or invoices with your financial and operational data.</li>
            <li><strong>QuickBooks Online:</strong> Keep your invoice and payment details in sync with Salesforce to make accounting easier.</li>
        </ul>
        <p className="mt-2">Please feel free to get in touch if you do not see the right system — Aonflow regularly adds new connectors and provides tailored integrations to meet your individual needs.</p>
      </div>
    )
  },
  {
    question: "Why should I integrate Salesforce using Aonflow?",
    answer: (
      <div>
        <p className="mb-2">The integration of Salesforce using Aonflow iPaaS Integration platform comes with several advantages that can greatly influence your business processes:</p>
        <ul className="list-disc pl-5 space-y-2">
            <li><strong>No More Manual Data Entry:</strong> Aonflow automatically syncs records, saving you time and reducing the risk of errors through repetitive tasks.</li>
            <li><strong>Gather and Centralize Information:</strong> Centralize data from multiple sources to gain a 360° view of customers, deals, and operations.</li>
            <li><strong>Enhance Team Collaboration:</strong> With access to the same up-to-date, accurate data, sales, support, and back-office teams can all work together.</li>
            <li><strong>Reporting and analytics:</strong> Merging data sets to give deeper insights and more meaningful dashboards to use for decision-making.</li>
            <li><strong>Scalability:</strong> Aonflow’s integration framework easily scales to accommodate your growing business — new systems, increasing data volumes, and data flows, and more complex pathways as needed.</li>
        </ul>
      </div>
    )
  },
    {
        question: "Do I need technical expertise to set up a Salesforce integration?",
        answer: (
            <div>
                <p className="mb-2">If you are a non-technical user or a skillful developer, Aonflow’s platform is made for you:</p>
                <ul className="list-disc pl-5 space-y-2">
                    <li><strong>No-Code/Low-Code Interface:</strong> With our intuitive workflow builder and visual mapping tools, anyone can connect basic data flows without writing a line of code.</li>
                    <li><strong>Advanced customization:</strong> For complex or specialized requirements, your IT team or our professional services can set up more in-depth mapping, custom scripts or API-based logic.</li>
                </ul>
                <p className="mt-2">This at least allows you to build from basic integrations to powerful, enterprise-grade solutions without functionality bottlenecks.</p>
            </div>
        )
    },
    {
        question: "Is Salesforce integration using Aonflow secure?",
        answer: (
            <div>
                <p className="mb-2">Absolutely. Data protection is a top priority for Aonflow. We use:</p>
                <ul className="list-disc pl-5 space-y-2">
                    <li><strong>Secured APIs:</strong> All data traffic between Salesforce and other systems is through industry-standard authentication and encryption.</li>
                    <li><strong>Encrypting Data in Transit:</strong> This process ensures that sensitive information is encrypted during transmission, protecting it from unauthorized interception.</li>
                    <li><strong>Role-Based Access Control:</strong> Administrators can assign user permissions to limit who can see or change integration settings.</li>
                    <li><strong>Adherence to Industry Standards:</strong> Our services comply (as applicable) with GDPR, SOC 2, and other relevant regulatory requirements, allowing consistent data security and privacy.</li>
                </ul>
            </div>
        )
    },
    {
        question: "How customizable is the Salesforce integration?",
        answer: "The Aonflow platform also allows extensive customizations to suit your processes. For example, you can take a custom object, field, or workflow that you have in Salesforce and map it to the same in other apps. You can even build complex, multi-step workflows — say, automatically firing off a Twilio SMS and logging an event in Google Sheets whenever an opportunity passes through a certain stage in Salesforce. With these capabilities, you can create integrations that work seamlessly with your existing processes instead of being constrained to out-of-the-box limitations."
    },
    {
        question: "Can Aonflow Platform help sync my Salesforce data in near real time?",
        answer: (
            <div>
                <p className="mb-2">You can set up the platform for near real-time availability of data to ensure the updates in Salesforce (or connected systems) are propagated across the moment the data is updated or as per interval to the ecosystem. For example:</p>
                <ul className="list-disc pl-5 space-y-2">
                    <li><strong>Flow Activation:</strong> As soon as any opportunity goes to “Closed Won,” you can update both your finance system and Slack channels in parallel.</li>
                    <li><strong>Scheduled Batches:</strong> For data sets that don’t require immediate updates, you can set syncs to run at regular intervals—useful to reduce API calls or system load in peak times.</li>
                </ul>
                <p className="mt-2">This means you can control how often data syncs, based on performance and operational requirements.</p>
            </div>
        )
    },
    {
        question: "How long does it typically take to implement Salesforce integration?",
        answer: (
            <div>
                <p className="mb-2">Implementation timelines are different and depend on:</p>
                <ul className="list-disc pl-5 space-y-2">
                    <li><strong>Scope and Complexity:</strong> The number of objects you are synchronizing, the level of customization, and how many external systems.</li>
                    <li><strong>Scale of Data:</strong> Larger databases may take longer to initially migrate or sync.</li>
                    <li><strong>Resource availability:</strong> Working together with your internal team, Aonflow’s support acts as a force multiplier to get things done significantly faster.</li>
                </ul>
                <p className="mt-2">Basic integrations can be set up in just a couple of days, with more complex projects needing a few weeks of planning and configuration. Our professional services team can partner with you to establish a practical timeframe and strategy.</p>
            </div>
        )
    },
    {
        question: "What kind of support does Aonflow provide for Salesforce integration?",
        answer: (
            <div>
                <p className="mb-2">We provide a full support ecosystem to help you succeed at every point:</p>
                <ul className="list-disc pl-5 space-y-2">
                    <li><strong>Onboarding & Training:</strong> Assistance with setting up your initial connections, learning best practices, and designing your first workflows.</li>
                    <li><strong>Documentation & Tutorials:</strong> Step-by-step guides, how-to videos, troubleshooting articles and more are available in our Knowledge Base.</li>
                    <li><strong>Professional Services:</strong> Whether you need hands-on implementation, custom development, or strategic planning for large-scale or complex integrations, our experts are ready to help.</li>
                    <li><strong>Continuous Support:</strong> Based on your support package, you may have access to things like dedicated account managers, priority phone support, and proactive monitoring of your system to try to catch any issues before it gets worse.</li>
                </ul>
                <p className="mt-2">We aim to be your long-time partner, iterating your integrations as your business changes.</p>
            </div>
        )
    }
];

const salesforceAutomationTabs = [
  {
    value: "integration",
    icon: BrainCircuit,
    label: "Integration",
    title: "Salesforce integration, made easy",
    subtitle: "Take Salesforce integration and automation to the next level",
    content: "Aonflow's Salesforce connectors simplify integration across applications and systems, eliminating the need for separate integration tools. With its low-code/no-code visual builder interface, businesses and individuals can easily create seamless API integrations with any cloud service within minutes, without relying on IT support. This ensures a faster and more streamlined integration process, ultimately improving productivity and efficiency.",
    subcontentTitle: "One self-service platform for Salesforce integration solutions",
    subcontent: "Automate Salesforce cloud integration with pre-built connectors and custom logic assistance, ensuring faster data processing. A seamless integration with any technology stack enables you to sync mission-critical data with other applications, thus improving overall productivity. Scale up with powerful automated dataflows that optimize processes and guarantee maximum efficiency. Streamline your workflow and achieve your goals more efficiently."
  },
  {
    value: "automation",
    icon: FileCog,
    label: "Automation",
    title: "Salesforce automation made simple",
    subtitle: "Drive more conversations with easy, simple, fast Salesforce automation",
    content: "Aonflow's Salesforce automation enables you to drive marketing efforts, integrate SFDC with any application, and enable ERP solutions. Its powerful automation tools make it simple to connect applications and scale up any process for your team or departments, streamlining tasks and improving efficiency. With Aonflow, you can optimize your workflow and achieve better results in less time.",
    subcontentTitle: "All-in-one intuitive platform for all your Salesforce automation solutions",
    subcontent: "From marketing and sales to HR, customer support, IT, finance, and operations, organizations across functions rely on Aonflow to support their Salesforce data automation needs. Aonflow's robust automation tools can help improve data hygiene and governance, retain customers, and manage an endless list of mission-critical internal processes. Businesses can streamline their operations and achieve their goals efficiently."
  },
  {
    value: "use-case",
    icon: Layers,
    label: "Use Case",
    title: "Salesforce use case, resolved",
    subtitle: "Aonflow's low-code platform for salesforce data integration",
    content: "Low-code platform offers a seamless and highly adaptable solution for Salesforce data integration needs, from light to heavy-duty. Its user-friendly interface is easy to use, and its powerful automation tools allow businesses to efficiently manage any amount of data, from small cleanups to bulk transfers. Businesses can go beyond traditional data mapping tools and optimize data management processes.",
    subcontentTitle: "Improved data management and revenue generation",
    subcontent: "Trusted by Salesforce, Aonflow automates data transformations and allows CRM admins to cleanse and update data. It enables on-demand mass updates on any object, creates API integrations with other apps, and automates bulk updates and important processes. With Aonflow, businesses can improve data enrichment, lead routing, and sales productivity, and generate better revenue for their business."
  }
];

export default function SalesforcePage() {
  const [activeTab, setActiveTab] = useState(salesforceAutomationTabs[0].value);
  const [isTabCarouselPaused, setIsTabCarouselPaused] = useState(false);
  
  const autoplay = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );

  useEffect(() => {
    if (isTabCarouselPaused) return;
    const tabRotationInterval = setInterval(() => {
      setActiveTab(prevTab => {
        const currentIndex = salesforceAutomationTabs.findIndex(tab => tab.value === prevTab);
        const nextIndex = (currentIndex + 1) % salesforceAutomationTabs.length;
        return salesforceAutomationTabs[nextIndex].value;
      });
    }, 5000);
    return () => clearInterval(tabRotationInterval);
  }, [isTabCarouselPaused]);
    
  return (
    <div className="bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative w-full bg-primary/5 py-20 md:py-28 lg:py-32 overflow-hidden">
        <BackgroundAnimation className="absolute inset-0 z-0 opacity-50" />
        <div className="container mx-auto px-4 md:px-6 z-10 relative">
            <AnimateOnScroll className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                <img src="/salesforce.svg" alt="Salesforce" className="h-40 w-auto mb-4" />
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl font-headline text-foreground">
                    Salesforce Integration
                </h1>
                <p className="mt-4 text-lg text-muted-foreground max-w-3xl">
                   Streamline data flow, enhance collaboration, and maximize efficiency across diverse business applications with Salesforce Integration solutions.
                </p>
            </AnimateOnScroll>
            
            <AnimateOnScroll delay={0.2}>
              <div className="grid grid-cols-1 gap-8">
                  <Card className="p-6 flex flex-col items-start bg-background/50 backdrop-blur-sm h-full col-span-1 md:col-span-3 rounded-[24px]">
                      <BrainCircuit className="h-10 w-10 text-primary mb-4" />
                      <h3 className="text-2xl font-bold font-headline mb-2">Empowering organizations</h3>
                      <p className="text-muted-foreground flex-grow">
                          Empower your team to design their own Salesforce dataflows in just minutes without needing any other integration tool. Get the right integration with the right dataflows at the right time that empowers business and individual users across your team and organization.
                      </p>
                  </Card>
              </div>
              <div className="grid md:grid-cols-3 gap-8 mt-8">
                  <Card className="p-6 flex flex-col items-start bg-background/50 backdrop-blur-sm h-full rounded-[24px]">
                      <FileCog className="h-10 w-10 text-primary mb-4" />
                      <h3 className="text-2xl font-bold font-headline mb-2">Low-Code features</h3>
                      <p className="text-muted-foreground flex-grow">Easy, low-code/no-code pre-built features that let you design workflows in line with business/individual users without the need for IT resources.</p>
                  </Card>
                  <Card className="p-6 flex flex-col items-start bg-background/50 backdrop-blur-sm h-full rounded-[24px]">
                      <Layers className="h-10 w-10 text-primary mb-4" />
                      <h3 className="text-2xl font-bold font-headline mb-2">Robust capabilities</h3>
                      <p className="text-muted-foreground flex-grow">Seamlessly connect Salesforce with other critical SaaS and ERP systems, allowing businesses to optimize their workflows more efficiently.</p>
                  </Card>
                  <Card className="p-6 flex flex-col items-start bg-background/50 backdrop-blur-sm h-full rounded-[24px]">
                      <Repeat className="h-10 w-10 text-primary mb-4" />
                      <h3 className="text-2xl font-bold font-headline mb-2">Powerful integration</h3>
                      <p className="text-muted-foreground flex-grow">Salesforce transforms into a powerful CRM unit that works seamlessly on real-time integration needs with other critical SaaS and ERP systems.</p>
                  </Card>
              </div>
          </AnimateOnScroll>
            
            <AnimateOnScroll className="mt-12 text-center">
                <Button asChild>
                    <Link href="/contact">Book a Demo</Link>
                </Button>
            </AnimateOnScroll>
        </div>
      </section>
      
      {/* How Aonflow works for you */}
       <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4 md:px-6">
            <AnimateOnScroll className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold font-headline">How Aonflow works for you</h2>
                <p className="mt-4 text-muted-foreground">
                    Aonflow is a 100% cloud-native technology, with an intuitive interface for seamless integrations. Our platform supports multi-tenant integration, enabling business and individual users with little to no technical skill to easily connect their applications and data. We help eliminate dependencies on developers and IT resources to develop custom code from scratch. In fact, with Aonflow iPaaS, you can access Salesforce data within minutes.
                </p>
            </AnimateOnScroll>
            <AnimateOnScroll 
                className="mt-12"
                onMouseEnter={() => setIsTabCarouselPaused(true)}
                onMouseLeave={() => setIsTabCarouselPaused(false)}
            >
            <Tabs 
                value={activeTab} 
                onValueChange={(value) => {
                    setActiveTab(value);
                    setIsTabCarouselPaused(true);
                }}
                className="w-full max-w-4xl mx-auto"
            >
                <TabsList className="grid w-full grid-cols-3 h-auto p-0 bg-transparent rounded-none">
                    {salesforceAutomationTabs.map(tab => (
                        <TabsTrigger 
                            key={tab.value} 
                            value={tab.value} 
                            className={cn("flex items-center gap-2 h-auto py-4 px-2 data-[state=active]:bg-transparent text-muted-foreground data-[state=active]:text-primary data-[state=active]:shadow-none rounded-none border-b-2", activeTab === tab.value ? "border-primary" : "border-transparent")}
                        >
                            <tab.icon className="h-6 w-6"/>
                            <span>{tab.label}</span>
                        </TabsTrigger>
                    ))}
                </TabsList>
                <div className="bg-transparent p-8 rounded-b-lg">
                     <h3 className="text-2xl font-bold mb-6 font-headline text-primary text-center">{salesforceAutomationTabs.find(t => t.value === activeTab)?.title}</h3>
                    {salesforceAutomationTabs.map(tab => (
                         <TabsContent key={tab.value} value={tab.value} className="bg-transparent mt-0 text-left">
                             <div className="grid md:grid-cols-2 gap-8 items-start">
                                 <div>
                                     <h4 className="font-semibold text-xl mb-2">{tab.subtitle}</h4>
                                     <p className="text-muted-foreground">{tab.content}</p>
                                 </div>
                                 <div>
                                     <h4 className="font-semibold text-xl mb-2">{tab.subcontentTitle}</h4>
                                     <p className="text-muted-foreground">{tab.subcontent}</p>
                                 </div>
                             </div>
                         </TabsContent>
                    ))}
                </div>
            </Tabs>
            </AnimateOnScroll>
        </div>
      </section>

      {/* Flow with Aonflow Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6 text-center">
            <AnimateOnScroll>
                <h2 className="text-3xl font-bold font-headline mb-12">Flow with Aonflow</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                    {[
                        {icon: Lightbulb, label: "Simple", description: "Simplicity is power"},
                        {icon: BrainCircuit, label: "Intuitive", description: "Intuitive is astuteness"},
                        {icon: Zap, label: "Fast", description: "Speed is efficiency"},
                        {icon: Scaling, label: "Flexible", description: "Flexible is agility"},
                        {icon: DollarSign, label: "Affordable", description: "Affordable is user-friendly"},
                        {icon: Briefcase, label: "Scalable", description: "Scalable is success"}
                    ].map((item, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <div className="bg-primary/10 text-primary p-4 rounded-full mb-4">
                                <item.icon className="h-10 w-10" />
                            </div>
                            <h3 className="font-semibold text-lg">{item.label}</h3>
                             <p className="text-sm text-muted-foreground">{item.description}</p>
                        </div>
                    ))}
                </div>
            </AnimateOnScroll>
        </div>
      </section>
      
      {/* Salesforce Integration Use Cases */}
      <section className="py-20 md:py-28 bg-primary/5">
        <div className="container mx-auto px-4 md:px-6">
            <AnimateOnScroll className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold font-headline mb-12">Salesforce Integration Use Cases</h2>
            </AnimateOnScroll>
             <AnimateOnScroll className="max-w-4xl mx-auto">
              <Carousel
                opts={{ align: "start", loop: true }}
                plugins={[autoplay.current]}
                onMouseEnter={() => autoplay.current.stop()}
                onMouseLeave={() => autoplay.current.reset()}
                className="w-full"
              >
              <CarouselContent>
                {salesforceUseCases.map((useCase, index) => (
                    <CarouselItem key={index} className="md:basis-1/2 p-4">
                        <Card className="p-6 h-full flex flex-col items-center text-center bg-background">
                            <div className="text-primary flex-shrink-0 mb-4">
                                <useCase.icon className="h-10 w-10" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold font-headline mb-2">{useCase.title}</h3>
                                <p className="text-muted-foreground">{useCase.description}</p>
                            </div>
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
      
      {/* Aonflow for any or all your integration... */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
            <AnimateOnScroll className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold font-headline mb-12">Aonflow for any or all your integration and automation of flows</h2>
            </AnimateOnScroll>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
                {aonflowForIntegration.map((item, index) => (
                    <AnimateOnScroll key={index} delay={index * 0.1}>
                        <Card className="p-6 h-full text-center flex flex-col items-center justify-start bg-primary/5">
                            <div className="bg-primary/10 text-primary p-4 rounded-full mb-4">
                                <item.icon className="h-8 w-8" />
                            </div>
                            <h3 className="text-lg font-semibold">{item.title}</h3>
                        </Card>
                    </AnimateOnScroll>
                ))}
            </div>
        </div>
      </section>

      {/* Popular Connectors */}
      <section className="py-20 md:py-28 bg-primary/5">
        <div className="container mx-auto px-4 md:px-6">
          <AnimateOnScroll className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold font-headline mb-12">
              Our popular and powerful Salesforce connectors
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll className="max-w-5xl mx-auto">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              plugins={[autoplay.current]}
              onMouseEnter={() => autoplay.current.stop()}
              onMouseLeave={() => autoplay.current.reset()}
              className="w-full"
            >
              <CarouselContent>
                <CarouselItem className="basis-full lg:basis-1/2 p-4">
                  <Card className="p-6 bg-background h-full">
                    <div className="flex items-center justify-center gap-8">
                      <div className="w-16 h-16 rounded-lg flex items-center justify-center" style={{backgroundColor:"#f0f0f0"}}>
                        <img
                          src="/salesforce.svg"
                          alt="Salesforce"
                          className="h-12 w-12"
                        />
                      </div>
                      <ArrowRight className="h-8 w-8" style={{color: '#cccccc'}} />
                      <div className="w-16 h-16 rounded-lg flex items-center justify-center" style={{backgroundColor:"#f0f0f0"}}>
                        <img
                          src="/business-central.svg"
                          alt="Business Central"
                          className="h-12 w-12"
                        />
                      </div>
                    </div>
                    <p className="mt-4 text-center font-medium">
                      Salesforce and Microsoft Dynamics Business Central
                    </p>
                  </Card>
                </CarouselItem>
                <CarouselItem className="basis-full lg:basis-1/2 p-4">
                  <Card className="p-6 bg-background h-full">
                    <div className="flex items-center justify-center gap-8">
                       <div className="w-16 h-16 rounded-lg flex items-center justify-center" style={{backgroundColor:"#f0f0f0"}}>
                        <img
                          src="/salesforce.svg"
                          alt="Salesforce"
                          className="h-12 w-12"
                        />
                       </div>
                      <ArrowRight className="h-8 w-8" style={{color: '#cccccc'}} />
                       <div className="w-16 h-16 rounded-lg flex items-center justify-center" style={{backgroundColor:"#f0f0f0"}}>
                        <img
                          src="/quickbooks.svg"
                          alt="QuickBooks Online"
                          className="h-12 w-12"
                        />
                      </div>
                    </div>
                    <p className="mt-4 text-center font-medium">
                      Salesforce and QuickBooks Online
                    </p>
                  </Card>
                </CarouselItem>
                <CarouselItem className="basis-full lg:basis-1/2 p-4">
                  <Card className="p-6 bg-background h-full">
                    <div className="flex items-center justify-center gap-8">
                      <div className="w-16 h-16 rounded-lg flex items-center justify-center" style={{backgroundColor:"#f0f0f0"}}>
                        <img
                          src="/salesforce.svg"
                          alt="Salesforce"
                          className="h-12 w-12"
                        />
                      </div>
                      <ArrowRight className="h-8 w-8" style={{color: '#cccccc'}} />
                      <div className="w-16 h-16 rounded-lg flex items-center justify-center" style={{backgroundColor:"#f0f0f0"}}>
                        <img src="/twilio.svg" alt="Twilio" className="h-12 w-12" />
                      </div>
                    </div>
                    <p className="mt-4 text-center font-medium">
                      Salesforce to Twilio
                    </p>
                  </Card>
                </CarouselItem>
                <CarouselItem className="basis-full lg:basis-1/2 p-4">
                  <Card className="p-6 bg-background h-full">
                    <div className="flex items-center justify-center gap-8">
                      <div className="w-16 h-16 rounded-lg flex items-center justify-center" style={{backgroundColor:"#f0f0f0"}}>
                        <img
                          src="/salesforce.svg"
                          alt="Salesforce"
                          className="h-12 w-12"
                        />
                      </div>
                      <ArrowRight className="h-8 w-8" style={{color: '#cccccc'}} />
                      <div className="w-16 h-16 rounded-lg flex items-center justify-center" style={{backgroundColor:"#f0f0f0"}}>
                        <img
                          src="/netsuite.svg"
                          alt="Netsuite"
                          className="h-12 w-12"
                        />
                      </div>
                    </div>
                    <p className="mt-4 text-center font-medium">
                      Salesforce to Netsuite
                    </p>
                  </Card>
                </CarouselItem>
              </CarouselContent>
              <div className="flex justify-center gap-4 mt-8">
                <CarouselPrevious />
                <CarouselNext />
              </div>
            </Carousel>
          </AnimateOnScroll>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <BackgroundAnimation className="absolute inset-0 z-0 opacity-50" />
        <div className="container mx-auto px-4 md:px-6 max-w-4xl relative z-10">
            <AnimateOnScroll className="text-center">
                 <h2 className="text-3xl font-bold font-headline mb-12">Frequently Asked Questions</h2>
            </AnimateOnScroll>
            <AnimateOnScroll delay={0.2}>
                <Accordion type="single" collapsible className="w-full">
                    {faqs.map((faq, index) => (
                        <AccordionItem value={`item-${index}`} key={index}>
                            <AccordionTrigger className="text-lg text-left">{faq.question}</AccordionTrigger>
                            <AccordionContent className="text-base text-muted-foreground">
                                {faq.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </AnimateOnScroll>
        </div>
      </section>
      

      {/* Final CTA */}
      <section className="py-20 md:py-28">
        <AnimateOnScroll className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold font-headline mb-4">Flow with Aonflow</h2>
            <Button asChild size="lg">
                <Link href="/contact">See demo</Link>
            </Button>
        </AnimateOnScroll>
      </section>

    </div>
  );
}
