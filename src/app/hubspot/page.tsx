
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
  Card
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
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Autoplay from "embla-carousel-autoplay";
import React from 'react';

const hubspotUseCases = [
    {
        icon: Users,
        title: "Lead Distribution",
        description: "Aonflow auto-distributes captured new leads to sales teams in CRM systems like Salesforce or messaging platforms like Slack and Teams."
    },
    {
        icon: LineChart,
        title: "Pipeline & Revenue Tracking",
        description: "Compare deal info and pipeline status from your CRM (like HubSpot) with your accounting systems (like QuickBooks Online) Integrate your sales forecasts with your accountancy systems to ensure your contacts with customers match payment records."
    },
    {
        icon: BarChart,
        title: "Campaign Data Centralization",
        description: "Use BI tooling for analysis. Export HubSpot marketing campaign metrics dashboards and reports to Google Sheets or any BI tool."
    },
    {
        icon: Repeat,
        title: "Customer Journey Mapping",
        description: "You speak to platforms for allied generating systems — including customer systems (e.g., Salesforce, Dynamics 365) — mapping customer journeys end-to-end, from contact to purchase, and even pulling insights for how to drive engagement."
    },
    {
        icon: Zap,
        title: "Event-Driven Notifications",
        description: "Specific activity from HubSpot (form submission or deal closed, etc.) creates action in the other systems (Sending Slack notification or Twilio SMS, etc.)"
    }
];


const aonflowForIntegration = [
    {
        icon: Zap,
        title: "HubSpot integration for automation solutions"
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
    question: "What is HubSpot Integration?",
    answer: "The HubSpot Integration enables you to integrate HubSpot with your other tech stack applications. Automating your data flows — contacts, leads, deals, marketing metrics, etc. — you say goodbye to the laborious and error-prone manual data entry and ensure that everybody in the company is in the latest loop. This means that updates made in HubSpot (or other integrated systems) are reflected in every place they need to be—ensuring teams are working with accurate, consistent information."
  },
   {
    question: "Why should I integrate HubSpot using Aonflow iPaaS?",
    answer: (
      <div>
        <p className="mb-2">Here are some key benefits of HubSpot integration using Aonflow’s iPaaS solutions:</p>
        <ul className="list-disc pl-5 space-y-2">
            <li><strong>Streamlined Operations:</strong> Effortlessly automate repetitive tasks and gain the ability to sync data automatically, allowing your sales and marketing teams to focus on building relationships.</li>
            <li><strong>Single Customer View:</strong> Brings together marketing, sales, and service data to give every organization a 360° view of every lead or customer.</li>
            <li><strong>Updated Insights:</strong> Maintain dashboards, campaigns, and contact records updated in near real-time for quicker, data-driven decision-making.</li>
            <li><strong>Scalability:</strong> You can just bring in new integrations and handle higher data volumes as your business expands.</li>
            <li><strong>Better Teamwork:</strong> Synchronized data improves collaboration of cross-functional teams on common objectives, reducing misalignment and duplicative efforts.</li>
        </ul>
      </div>
    )
  },
  {
    question: "Which HubSpot data can I sync through Aonflow?",
    answer: (
      <div>
        <p className="mb-2">Aonflow covers almost all HubSpot objects, including:</p>
        <ul className="list-disc pl-5 space-y-2">
            <li><strong>Contacts & Companies:</strong> Update customer and prospect information in CRMs, eCommerce platforms, or support tools.</li>
            <li><strong>Deals & Pipelines:</strong> Synchronize all deal stages, close dates, and revenue details with your ERP or finance systems.</li>
            <li><strong>Marketing Emails & Campaigns:</strong> Monitor Metrics on Campaign Engagement with other customer interactions.</li>
            <li><strong>Forms & Submissions:</strong> Automatically send lead capture data to external databases or analytics tools.</li>
            <li><strong>Custom Objects & Properties:</strong> Align unique fields or objects you’ve configured in HubSpot with corresponding fields in connected apps.</li>
        </ul>
        <p className="mt-2">Aonflow’s flexible mapping and transformations adjust to the unique needs of your business if more or more custom fields require syncing.</p>
      </div>
    )
  },
  {
    question: "Which other systems can I connect HubSpot with?",
    answer: (
      <div>
        <p className="mb-2">Some of the most popular applications that can be integrated with HubSpot through Aonflow are:</p>
        <ul className="list-disc pl-5 space-y-2">
            <li><strong>Customer Relationship Management Platforms:</strong> Salesforce, Microsoft Dynamics 365</li>
            <li><strong>ERP & Financial Systems:</strong> QuickBooks Online, Microsoft Business Central</li>
            <li><strong>Communication:</strong> Twilio</li>
            <li><strong>ECommerce Platforms:</strong> WooCommerce</li>
            <li><strong>Analytics & Reporting:</strong> Google Sheets</li>
            <li><strong>Custom or Legacy systems:</strong> Via APIs and custom Connectors</li>
        </ul>
        <p className="mt-2">If you don't see the system you need, we offer tailor-made integrations to suit your unique ecosystem.</p>
      </div>
    )
  },
    {
        question: "Do I need technical expertise to set up the HubSpot integration?",
        answer: (
            <div>
                <p className="mb-2">Aonflow can be used by technical and non-technical users:</p>
                <ul className="list-disc pl-5 space-y-2">
                    <li><strong>No-Code/Low-Code Environment:</strong> Most of the standard integrations do not require coding and can be configured through the user-friendly interface and the visual workflow builder of Aonflow.</li>
                    <li><strong>Advanced Customization:</strong> For organizations with more sophisticated needs—like large data transformations, multi-step workflows, or new proprietary scripts—our professional services team or your in-house IT personnel can set up deeper integrations.</li>
                </ul>
                <p className="mt-2">We also offer extensive technical documentation, user guides, and best-practice resources to make deployment easy for every skill level.</p>
            </div>
        )
    },
    {
        question: "How does Aonflow handle near real-time versus scheduled syncing?",
        answer: (
            <div>
                <p className="mb-2">Aonflow provides support for flow activation for near real-time updates and scheduled syncs for periodic batches:</p>
                <ul className="list-disc pl-5 space-y-2">
                    <li><strong>Flow Activation (Event-Based):</strong> Best for data requiring immediate updates such as new leads, stages of deals, and campaign enrollments. When a trigger event happens in HubSpot (or another connected app), Aonflow’s iPaaS platform kickstarts the process to push or pull data.</li>
                    <li><strong>Scheduled Sync:</strong> This is ideal for larger or non-time-sensitive data sets (like daily lead exports). You can schedule flows to run every hour, day, or any other custom timeframe, which assists in limiting performance performance and API calls.</li>
                </ul>
                <p className="mt-2">This flexibility allows you to focus on things that require immediate attention and process bulk updates with ease.</p>
            </div>
        )
    },
    {
        question: "Is the HubSpot integration using Aonflow secure?",
        answer: (
            <div>
                <p className="mb-2">Yes. To keep your HubSpot and other integrated data secure, Aonflow has a rigorous security process in place:</p>
                <ul className="list-disc pl-5 space-y-2">
                    <li><strong>Through SSL/TLS:</strong> Encrypted communication between Aonflow with HubSpot or other provided connected systems.</li>
                    <li><strong>Authentication & Access Control:</strong> Aonflow follows HubSpot’s OAuth standards to make sure that permissions are in place.</li>
                    <li><strong>Role-Based Permissions:</strong> Control who in your organization can configure or change integrations.</li>
                    <li><strong>Compliance & Data Privacy:</strong> By default, Aonflow does comply with regulatory requirements, so you can continue doing business and maintain compliance.</li>
                </ul>
            </div>
        )
    },
    {
        question: "Can I customize the integration to match my workflows?",
        answer: (
            <div>
                <p className="mb-2">Absolutely. Aonflow iPaaS platform offers well-structured configuration such as:</p>
                <ul className="list-disc pl-5 space-y-2">
                    <li><strong>Field Mapping:</strong> Map standard/custom HubSpot fields to the fields in other systems.</li>
                    <li><strong>Conditional Logic:</strong> Perform an action when certain conditions are met (e.g., stage moves to “Closed Won,” region = “EMEA,” etc.).</li>
                    <li><strong>Multi-Step Sync:</strong> Combine multiple actions into a single workflow, like adding a deal to HubSpot, creating a note in Salesforce, and sending a message to a channel—all initiated from a single event.</li>
                </ul>
                <p className="mt-2">This flexibility makes sure that you can change the integration according to your actual business logic and processes.</p>
            </div>
        )
    },
     {
        question: "How long does it take to implement HubSpot integration?",
        answer: (
            <div>
                <p className="mb-2">The time to go live depends on:</p>
                <ul className="list-disc pl-5 space-y-2">
                    <li>To create a custom integration solution, the main aspects need to be considered: complexity or scope — the number of applications that need to be connected, the volume of data that will be processed, and any custom logic that may be required.</li>
                    <li><strong>Available Resources:</strong> Is your internal team available, and do you use Aonflow’s professional services?</li>
                    <li><strong>Testing & Validation:</strong> Validate the data accuracy and security before full-scale implementation.</li>
                </ul>
                <p className="mt-2">Simple integrations (e.g., syncing basic contact data across HubSpot and one CRM) can be done within a few days. More complex setups using multi-step workflows or heavy customization could last a few weeks.</p>
            </div>
        )
    },
     {
        question: "What does pricing look like for HubSpot integration using Aonflow?",
        answer: "There are set parameters that feed into Aonflow's pricing. Please check with our sales team for an exact quote. They’ll partner with you to evaluate your needs and recommend a plan customized to your needs."
    },
    {
        question: "What kind of support does Aonflow provide for HubSpot integrations?",
        answer: (
            <div>
                <p className="mb-2">To help you succeed, we provide a holistic support ecosystem:</p>
                <ul className="list-disc pl-5 space-y-2">
                    <li><strong>Knowledge Base & Tutorials:</strong> Comprehensive documentation, and blogs.</li>
                    <li><strong>Customer Support:</strong> Get in touch with our team through email, or phone to help with any technical or configuration queries.</li>
                    <li><strong>Professional Services:</strong> For more complex or enterprise-level initiatives, our specialists can offer personalized assistance.</li>
                    <li><strong>Active Maintenance:</strong> Aonflow will see constant maintenance, which means we constantly re-align with HubSpot’s ever-changing APIs and new features so that it’s a solution that lasts.</li>
                </ul>
            </div>
        )
    },
];

const hubspotAutomationTabs = [
  {
    value: "integration",
    icon: BrainCircuit,
    label: "Integration",
    title: "HubSpot integration, made easy",
    subtitle: "Simplify the process of integrating HubSpot with other marketing and sales tools",
    content: "Aonflow iPaaS platform simplifies the process of integrating HubSpot Marketing Hub with other tools in your tech stack without the need for IT support. With our low-code builder and drag-and-drop interface, you can create robust API integrations in a few minutes. This allows you to quickly connect HubSpot with other relevant tools and streamline your business processes.",
    subcontentTitle: "Streamlining data transfer with optimal Aonflow and HubSpot integrations",
    subcontent: "Aonflow-HubSpot integrations can help businesses seamlessly connect their marketing, sales, and service tools with other cloud-based applications. Doing so can help, businesses in ensuring the smooth transmission of data across platforms, avoid data errors, and prevent desynchronization or timeouts. It enables businesses to operate efficiently, gain insights, and make informed decisions based on accurate and up-to-date information."
  },
  {
    value: "automation",
    icon: FileCog,
    label: "Automation",
    title: "HubSpot automation made simple",
    subtitle: "Utilize HubSpot automation to achieve more in less time",
    content: "Aonflow’s iPaaS automation solution empowers you to maximize the potential of HubSpot tools by integrating and automating them with the rest of your tech stack. This saves time and eliminates the risk of manual errors, and also enables you to perform these tasks at scale. We handle the technical details so you can concentrate on strategic objectives.",
    subcontentTitle: "Empower your teams with our intuitive platform for automated processes",
    subcontent: "Our Aonflow iPaaS platform is designed to be low-code, allowing any user in your organization or team, including marketing, sales, customer support, and other teams, to automate processes that generate more leads, boost conversions, fill gaps in the revenue funnel, and manage leads effectively. This results in faster follow-ups by your sales teams leading to more wins."
  },
  {
    value: "use-case",
    icon: Layers,
    label: "Use Case",
    title: "HubSpot use case, resolved",
    subtitle: "Technically advanced with the capability to fully leverage HubSpot's potential",
    content: "Aonflow iPaaS platform is a technical solution that provides significant benefits for HubSpot users. With our low-code visual builder, any business user can create custom integrations to meet their specific needs and goals. The Aonflow platform is a powerful tool that can handle a wide range of complex data processing tasks, rather than just simple, easy integrations.",
    subcontentTitle: "HubSpot data management and campaigns with Aonflow's bulk processing",
    subcontent: "Aonflow enables efficient management of bulk data jobs in HubSpot, which helps handle large lead lists and campaign uploads without API constraints. It can manage heavy-duty lists and flat file data within HubSpot campaigns while synchronizing with other applications. Combining automated personalization with demographic, technographic, and firmographic data allows users to create high-engagement campaigns and drive ROI."
  }
];

export default function HubspotPage() {
  const [activeTab, setActiveTab] = useState(hubspotAutomationTabs[0].value);
  const [isTabCarouselPaused, setIsTabCarouselPaused] = useState(false);
  
  const autoplay = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );

  useEffect(() => {
    if (isTabCarouselPaused) return;
    const tabRotationInterval = setInterval(() => {
      setActiveTab(prevTab => {
        const currentIndex = hubspotAutomationTabs.findIndex(tab => tab.value === prevTab);
        const nextIndex = (currentIndex + 1) % hubspotAutomationTabs.length;
        return hubspotAutomationTabs[nextIndex].value;
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
                <img src="/hubspot.svg" alt="HubSpot" className="h-40 w-auto mb-4" />
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl font-headline text-foreground">
                    HubSpot Integration
                </h1>
                <p className="mt-4 text-lg text-muted-foreground max-w-3xl">
                   Boost efficiency, maximize data synergy, and elevate customer engagement with HubSpot Integration.
                </p>
            </AnimateOnScroll>
            
            <AnimateOnScroll delay={0.2}>
              <div className="grid grid-cols-1 gap-8">
                  <Card className="p-6 flex flex-col items-start bg-background/50 backdrop-blur-sm h-full col-span-1 md:col-span-3 rounded-[24px]">
                      <BrainCircuit className="h-10 w-10 text-primary mb-4" />
                      <h3 className="text-2xl font-bold font-headline mb-2">Connect. Integrate. Automate.</h3>
                      <p className="text-muted-foreground flex-grow">
                          Integrating HubSpot with other services like CRMs, social media platforms, and email marketing tools can streamline and accelerate business processes, resulting in enhanced efficiency. Pre-built integrations and flexible customization options simplify connectivity with other systems and automate tasks such as lead tracking, customer management, and marketing campaigns.
                      </p>
                  </Card>
              </div>
              <div className="grid md:grid-cols-3 gap-8 mt-8">
                  <Card className="p-6 flex flex-col items-start bg-background/50 backdrop-blur-sm h-full rounded-[24px]">
                      <FileCog className="h-10 w-10 text-primary mb-4" />
                      <h3 className="text-2xl font-bold font-headline mb-2">Streamlined data</h3>
                      <p className="text-muted-foreground flex-grow">Automated data transfer between Hubspot and other apps ensures sales and marketing teams always have complete, accurate information on leads and customers.</p>
                  </Card>
                  <Card className="p-6 flex flex-col items-start bg-background/50 backdrop-blur-sm h-full rounded-[24px]">
                      <Layers className="h-10 w-10 text-primary mb-4" />
                      <h3 className="text-2xl font-bold font-headline mb-2">Real-time awareness</h3>
                      <p className="text-muted-foreground flex-grow">Maintain accurate contact info and receive immediate notifications of potential customer interest, vital for closing deals and retaining customers.</p>
                  </Card>
                  <Card className="p-6 flex flex-col items-start bg-background/50 backdrop-blur-sm h-full rounded-[24px]">
                      <Repeat className="h-10 w-10 text-primary mb-4" />
                      <h3 className="text-2xl font-bold font-headline mb-2">Automate workflows</h3>
                      <p className="text-muted-foreground flex-grow">Trigger specific actions in Hubspot based on events in other apps. Streamline sales, automate workflows, and enhance customer experience.</p>
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
                    Aonflow's iPaaS solution streamlines HubSpot integration with other applications, providing automation for workflows and tasks across the organization. The user-friendly interface allows for easy setup of connectors and workflows, mapping data, and automation to improve efficiency. Pre-built connectors for Salesforce, Slack, and more are available, while triggers and actions automate tasks across apps. Aonflow helps centralize data and improve productivity.
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
                    {hubspotAutomationTabs.map(tab => (
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
                     <h3 className="text-2xl font-bold mb-6 font-headline text-primary text-center">{hubspotAutomationTabs.find(t => t.value === activeTab)?.title}</h3>
                    {hubspotAutomationTabs.map(tab => (
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
                             <div className="text-center mt-6">
                                <Button asChild>
                                    <Link href="/contact">Book a Demo</Link>
                                </Button>
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
                <h2 className="text-3xl font-bold font-headline mb-12">See Aonflow in Action</h2>
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
      
      {/* HubSpot Integration Use Cases */}
      <section className="py-20 md:py-28 bg-primary/5">
        <div className="container mx-auto px-4 md:px-6">
            <AnimateOnScroll className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold font-headline mb-12">HubSpot Integration Use Cases</h2>
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
                {hubspotUseCases.map((useCase, index) => (
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
              Our popular and powerful Hubspot connectors
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
                      <div className="w-16 h-16 rounded-lg flex items-center justify-center bg-[#f0f0f0]">
                        <img
                          src="/hubspot.svg"
                          alt="HubSpot"
                          className="h-12 w-12"
                        />
                      </div>
                      <ArrowRight className="h-8 w-8 text-[#cccccc]" />
                      <div className="w-16 h-16 rounded-lg flex items-center justify-center bg-[#f0f0f0]">
                        <img
                          src="/salesforce.svg"
                          alt="Salesforce"
                          className="h-12 w-12"
                        />
                      </div>
                    </div>
                    <p className="mt-4 text-center font-medium">
                      Hubspot to Salesforce
                    </p>
                  </Card>
                </CarouselItem>
                <CarouselItem className="basis-full lg:basis-1/2 p-4">
                  <Card className="p-6 bg-background h-full">
                    <div className="flex items-center justify-center gap-8">
                       <div className="w-16 h-16 rounded-lg flex items-center justify-center bg-[#f0f0f0]">
                        <img
                          src="/hubspot.svg"
                          alt="HubSpot"
                          className="h-12 w-12"
                        />
                       </div>
                      <ArrowRight className="h-8 w-8 text-[#cccccc]" />
                       <div className="w-16 h-16 rounded-lg flex items-center justify-center bg-[#f0f0f0]">
                        <img
                          src="/microsoft-dynamic.svg"
                          alt="Microsoft Dynamics 365"
                          className="h-12 w-12"
                        />
                      </div>
                    </div>
                    <p className="mt-4 text-center font-medium">
                      Hubspot to Microsoft Dynamics 365
                    </p>
                  </Card>
                </CarouselItem>
                <CarouselItem className="basis-full lg:basis-1/2 p-4">
                  <Card className="p-6 bg-background h-full">
                    <div className="flex items-center justify-center gap-8">
                      <div className="w-16 h-16 rounded-lg flex items-center justify-center bg-[#f0f0f0]">
                        <img
                          src="/hubspot.svg"
                          alt="HubSpot"
                          className="h-12 w-12"
                        />
                      </div>
                      <ArrowRight className="h-8 w-8 text-[#cccccc]" />
                      <div className="w-16 h-16 rounded-lg flex items-center justify-center bg-[#f0f0f0]">
                        <img src="/twilio.svg" alt="Twilio" className="h-12 w-12" />
                      </div>
                    </div>
                    <p className="mt-4 text-center font-medium">
                      Hubspot to Twilio
                    </p>
                  </Card>
                </CarouselItem>
                <CarouselItem className="basis-full lg:basis-1/2 p-4">
                  <Card className="p-6 bg-background h-full">
                    <div className="flex items-center justify-center gap-8">
                      <div className="w-16 h-16 rounded-lg flex items-center justify-center bg-[#f0f0f0]">
                        <img
                          src="/hubspot.svg"
                          alt="HubSpot"
                          className="h-12 w-12"
                        />
                      </div>
                      <ArrowRight className="h-8 w-8 text-[#cccccc]" />
                      <div className="w-16 h-16 rounded-lg flex items-center justify-center bg-[#f0f0f0]">
                        <img
                          src="/netsuite.svg"
                          alt="Netsuite"
                          className="h-12 w-12"
                        />
                      </div>
                    </div>
                    <p className="mt-4 text-center font-medium">
                      Hubspot to Netsuite
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
            <h2 className="text-3xl font-bold font-headline mb-4">See Aonflow in Action</h2>
            <Button asChild size="lg">
                <Link href="/contact">Connect Now</Link>
            </Button>
        </AnimateOnScroll>
      </section>

    </div>
  );
}

    

    