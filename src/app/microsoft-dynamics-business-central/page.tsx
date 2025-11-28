
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

const businessCentralUseCases = [
    {
        icon: LineChart,
        title: "Opportunity to Invoice Flow",
        description: "Integrate Dynamics 365 sales results or eCommerce channels to Business Central to automatically create sales orders, generate invoices, and update inventory."
    },
    {
        icon: BarChart,
        title: "Financial Data Distribution",
        description: "Easily transfer daily financial records from Business Central into either QuickBooks Online or Google Sheets to provide your stakeholders and management with near real-time financial snapshots."
    },
    {
        icon: Layers,
        title: "Inventory Alerts",
        description: "Track inventory levels across sales channels in Business Central, and when levels fall, use this flow to create purchase orders, generate Slack notifications, or update supplier systems."
    },
    {
        icon: Repeat,
        title: "End-to-End Order Processing",
        description: "By integrating Business Central with Shopify or WooCommerce so that orders trigger inventory deductions, invoice generations, and shipment scheduling."
    },
    {
        icon: Check,
        title: "Custom Compliance Reporting",
        description: "Collect and consolidate regulatory or compliance data from Business Central that can be automatically integrated into reports, making it easier to pass audits and follow compliance."
    }
];


const aonflowForIntegration = [
    {
        icon: Zap,
        title: "MS Dynamics integration for automation solutions"
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
    question: "What is Microsoft Dynamics Business Central Integration?",
    answer: "The Business Central Integration links Microsoft’s comprehensive ERP solution to the other essential systems you depend on — CRM, eCommerce platforms, payment gateways, and more. This removes the need to enter data manually, and you get a holistic view of your business processes by syncing important data like finance, inventory, orders, customer details, etc with different apps."
  },
  {
    question: "Why integrate Business Central using Aonflow?",
    answer: (
        <div>
            <p className="mb-2">Key benefits of Business Central integration using Aonflow:</p>
            <ul className="list-disc pl-5 space-y-2">
                <li><strong>Efficiency Boost:</strong> Use automation tools to schedule repetitive work (invoice creation, order processing, etc.) and minimize human error.</li>
                <li><strong>Real-Time Visibility:</strong> Keep your financials, inventory levels, and customer data updated across all systems.</li>
                <li><strong>Data-Driven Decisions:</strong> Unified insights enable leadership teams to identify trends and make decisions faster and smarter.</li>
                <li><strong>Scalable Workflows:</strong> Aonflow can handle increased data volumes, new modules, and more connectors as your business grows.</li>
            </ul>
        </div>
    )
  },
    {
        question: "Which Business Central modules does Aonflow support?",
        answer: "Aonflow's flexible mapping and automation tools allow you to integrate a vast array of Business Central modules, including Financials, Inventory Management, Sales, and Purchasing, among others. Whether you are using built-in functionality or significantly customizing individual modules for specific workflows (e.g., industry-focused accounting, advanced inventory management, or specialized purchasing processes), the Aonflow platform can help integrate apps according to your specific needs. Through synchronizing and automating data across these modules, Aonflow helps ensure alignment, removes spreadsheet-style data entry, and gives real-time, end-to-end insights into your operational and financial landscape."
    },
    {
        question: "What kinds of systems can I connect to Business Central?",
        answer: (
            <div>
                <p className="mb-2">The Aonflow platform can sync and automate data between Business Central and dozens of popular business applications:</p>
                <ul className="list-disc pl-5 space-y-2">
                    <li><strong>CRM Platforms:</strong> SalesForce, HubSpot, Microsoft Dynamics 365</li>
                    <li><strong>Business & eCommerce:</strong> WooCommerce</li>
                    <li><strong>Collaboration Tools:</strong> Twilio</li>
                    <li><strong>Accounting:</strong> QuickBooks Online</li>
                    <li><strong>Custom or Legacy Apps:</strong> Through API-based or custom connectors</li>
                </ul>
                <p className="mt-2">Flexibility is part of Aonflow's design, so even if you don’t find your specific integration in the list, our professional services team can discuss custom integration options. This ensures that if you have any specialized or legacy applications that your organization is still dependent on, these can still be connected with Business Central and help ensure a seamless single source of data across the organization.</p>
            </div>
        )
    },
    {
        question: "Do I need technical expertise to set up Business Central integration?",
        answer: "Aonflow platform is a code-free/low-code environment where non-technical users can set simple data mappings and processes. More advanced use cases — such as large data transformations, multi-step workflows, or custom scripts — might need IT involvement or help from Aonflow’s professional services group."
    },
    {
        question: "How does Aonflow handle near real-time vs. batch syncing with Business Central?",
        answer: (
            <div>
                 <p className="mb-2">Aonflow supports both event-based and scheduled syncing:</p>
                <ul className="list-disc pl-5 space-y-2">
                    <li><strong>Flow Activation (Event-Based):</strong> Best suited for event update handlings like New sales orders and payment confirmation, where the most current data update is paramount.</li>
                    <li><strong>Scheduled Sync:</strong> Ideal for regular operations such as daily financial reports or weekly inventory audits You can configure flows to run as frequently or less frequently as your business requires, addressing performance and API concerns.</li>
                </ul>
            </div>
        )
    },
    {
        question: "Is it secure to integrate Business Central using Aonflow?",
        answer: "Yes. We employ secure APIs and protocols (SSL/TLS) and align with Microsoft’s recommended authentication methods (Azure AD, OAuth). Role-based access control enables only approved users to view or alter sensitive information. Aonflow is also compliant with data privacy standards, so you can rest assured your organization will stay compliant as well."
    },
    {
        question: "How do I handle custom fields or modules in Business Central?",
        answer: "Whether you need to specify custom fields, tables, or modules in Business Central, the Aonflow platform’s flexible mapping and transformations still work. Workflows are fully customizable to match whatever unique processes or configurations you have in your ERP."
    },
    {
        question: "What does pricing look like for Business Central integration?",
        answer: "The number of connectors, your data volume, the complexity of your workflows, and the required level of support affect pricing. For larger or custom projects we have tiered plans and professional services. Contact us for detailed pricing info."
    },
    {
        question: "How long does implementation usually take?",
        answer: "The timelines are different based on the complexity. Simple integrations — for example, syncing a few fields between Business Central and another system — can be completed in days. More complex implementations such as those involving multiple modules or deep customizations can take weeks. Our customer success and professional services teams can give you an estimate and make sure the deployment is successful."
    },
    {
        question: "What support options does Aonflow offer?",
        answer: "You get full support through online docs, articles, tutorials, live chat, email, and phone. We provide your account with professional services to set up customized support plans for complex and large deployments. This ensures that your Business Central integration stays robust and grows with the needs of your business over time."
    }
];

const businessCentralAutomationTabs = [
  {
    value: "integration",
    icon: BrainCircuit,
    label: "Integration",
    title: "Microsoft Dynamics Business Central Integration, made easy",
    subtitle: "Powerful integration solution to accelerate processes and drive collaboration",
    content: "A powerful Microsoft Dynamics Business Central Integration tool that allows for quick response times and efficient business processes. Integrate it with other applications, such as Salesforce or Shopify using Aonflow iPaaS to create a more streamlined workflow and processes. This integration allows for real-time data sharing between systems to improve efficiency and save both time and resources.",
    subcontentTitle: "Streamline Business Operations And Gain Insights With iPaaS Integration Solutions",
    subcontent: "Aonflow's iPaaS solution and Microsoft Dynamics Business Central integration tool not only streamline business operations but also provide monitoring and analytics tools. These tools allow businesses to gain insights into their operations and track their data. With better visibility into their operations, businesses can make informed decisions based on real-time data, thus improving their efficiency and effectiveness."
  },
  {
    value: "automation",
    icon: FileCog,
    label: "Automation",
    title: "Microsoft Dynamics Business Central Integration automation made simple",
    subtitle: "Microsoft Dynamics Business Central Integration & automation solutions",
    content: "Streamline operations and automate repetitive tasks, such as data entry, customer follow-ups, and invoicing. Aonflow iPaaS provides a user-friendly interface that allows businesses to create custom workflows that fit their specific needs. Microsoft Dynamics Business Central automation solutions with Aonflow iPaaS provide businesses with the necessary tools to automate their workflows, reduce errors, and achieve greater efficiency.",
    subcontentTitle: "Streamline business operations, help scale and enhance the bottom line",
    subcontent: "By integrating Microsoft Dynamics Business Central using Aonflow’s intuitive iPaaS platform capabilities, businesses can create custom workflows that streamline their operations and provide real-time data analytics. This allows for better decision-making and frees up resources to focus on critical business tasks. As a result, businesses can improve their efficiency, reduce costs, and ultimately, enhance their bottom line."
  },
  {
    value: "use-case",
    icon: Layers,
    label: "Use Case",
    title: "Business Central use case, resolved",
    subtitle: "Streamline to improve collaboration and communication across Teams",
    content: "Integrating Microsoft Dynamics Business Central and Shopify using Aonflow iPaaS can streamline e-commerce business workflows. When a customer places an order on the Shopify store, the integration platform generates a corresponding sales order in Microsoft Dynamics Business Central, initiating the fulfillment process. Inventory levels are automatically updated in both systems throughout the fulfillment process which saves time.",
    subcontentTitle: "Efficient workflows and enhanced customer satisfaction with iPaaS solutions",
    subcontent: "Integrating Microsoft Dynamics Business Central with other applications, such as Salesforce, can help businesses establish more efficient workflows across their entire organization. This integration can provide customers with real-time updates on their order status, resulting in higher customer satisfaction rates. It leads to better collaboration among teams and increased productivity as data is shared seamlessly between systems."
  }
];

export default function BusinessCentralPage() {
  const [activeTab, setActiveTab] = useState(businessCentralAutomationTabs[0].value);
  const [isTabCarouselPaused, setIsTabCarouselPaused] = useState(false);
  
  const autoplay = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );

  useEffect(() => {
    if (isTabCarouselPaused) return;
    const tabRotationInterval = setInterval(() => {
      setActiveTab(prevTab => {
        const currentIndex = businessCentralAutomationTabs.findIndex(tab => tab.value === prevTab);
        const nextIndex = (currentIndex + 1) % businessCentralAutomationTabs.length;
        return businessCentralAutomationTabs[nextIndex].value;
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
                <img src="/business-central.svg" alt="Microsoft Dynamics 365 Business Central" className="h-40 w-auto mb-4" />
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl font-headline text-foreground">
                    Microsoft Dynamics Business Central Integration
                </h1>
                <p className="mt-4 text-lg text-muted-foreground max-w-3xl">
                   Optimize business processes by integrating MS Dynamics Business Central to connect financials, sales, and operations for streamlined data management.
                </p>
            </AnimateOnScroll>
            
            <AnimateOnScroll delay={0.2}>
              <div className="grid grid-cols-1 gap-8">
                  <Card className="p-6 flex flex-col items-start bg-background/50 backdrop-blur-sm h-full col-span-1 md:col-span-3 rounded-[24px]">
                      <BrainCircuit className="h-10 w-10 text-primary mb-4" />
                      <h3 className="text-2xl font-bold font-headline mb-2">Connect. Integrate. Automate.</h3>
                      <p className="text-muted-foreground flex-grow">
                          Microsoft Dynamics Business Central enables businesses to streamline their workflows, increase productivity, and make better-informed decisions by providing real-time insights and analytics. It also allows businesses to automate routine tasks, reducing the time and effort required for manual data entry and processing. Enjoy a comprehensive suite of features.
                      </p>
                  </Card>
              </div>
              <div className="grid md:grid-cols-3 gap-8 mt-8">
                  <Card className="p-6 flex flex-col items-start bg-background/50 backdrop-blur-sm h-full rounded-[24px]">
                      <Briefcase className="h-10 w-10 text-primary mb-4" />
                      <h3 className="text-2xl font-bold font-headline mb-2">Business integration</h3>
                      <p className="text-muted-foreground flex-grow">Microsoft Dynamics Business Central is a software solution that enables the integration of various business activities for small to medium-sized businesses.</p>
                  </Card>
                  <Card className="p-6 flex flex-col items-start bg-background/50 backdrop-blur-sm h-full rounded-[24px]">
                      <Users className="h-10 w-10 text-primary mb-4" />
                      <h3 className="text-2xl font-bold font-headline mb-2">Unified capabilities</h3>
                      <p className="text-muted-foreground flex-grow">Connect sales, service, finance, and operations teams through a cloud-based solution to ensure uninterrupted business operations, quicker responses, and better outcomes.</p>
                  </Card>
                  <Card className="p-6 flex flex-col items-start bg-background/50 backdrop-blur-sm h-full rounded-[24px]">
                      <Zap className="h-10 w-10 text-primary mb-4" />
                      <h3 className="text-2xl font-bold font-headline mb-2">Efficient outcomes</h3>
                      <p className="text-muted-foreground flex-grow">Achieve a more tailored and specific integration of two or more applications by integrating Microsoft Dynamics Business Central using Aonflow iPaaS solutions.</p>
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
                    A multinational software solution, Microsoft Dynamics Business Central, connects sales, service, finance, and operations teams through a cloud-based system for business continuity and quick response times. Aonflow's proprietary Microsoft Dynamics Business Central integration connector allows customized integration of multiple applications. Supporting both triggers and actions, the connector provides a flexible deployment and adaptive solution that evolves with your business.
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
                    {businessCentralAutomationTabs.map(tab => (
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
                     <h3 className="text-2xl font-bold mb-6 font-headline text-primary text-center">{businessCentralAutomationTabs.find(t => t.value === activeTab)?.title}</h3>
                    {businessCentralAutomationTabs.map(tab => (
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
      
      {/* Business Central Integration Use Cases */}
      <section className="py-20 md:py-28 bg-primary/5">
        <div className="container mx-auto px-4 md:px-6">
            <AnimateOnScroll className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold font-headline mb-12">Microsoft Dynamics Business Central Integration Use Cases</h2>
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
                {businessCentralUseCases.map((useCase, index) => (
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
              Our popular and powerful Microsoft Dynamics Business Central connectors
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
                          src="/business-central.svg"
                          alt="Business Central"
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
                       Microsoft Dynamics Business Central + Salesforce
                    </p>
                  </Card>
                </CarouselItem>
                <CarouselItem className="basis-full lg:basis-1/2 p-4">
                  <Card className="p-6 bg-background h-full">
                    <div className="flex items-center justify-center gap-8">
                       <div className="w-16 h-16 rounded-lg flex items-center justify-center bg-[#f0f0f0]">
                        <img
                          src="/business-central.svg"
                          alt="Business Central"
                          className="h-12 w-12"
                        />
                       </div>
                      <ArrowRight className="h-8 w-8 text-[#cccccc]" />
                       <div className="w-16 h-16 rounded-lg flex items-center justify-center bg-[#f0f0f0]">
                        <img
                          src="/hubspot.svg"
                          alt="HubSpot"
                          className="h-12 w-12"
                        />
                      </div>
                    </div>
                    <p className="mt-4 text-center font-medium">
                      Microsoft Dynamics Business Central 365 to Hubspot
                    </p>
                  </Card>
                </CarouselItem>
                <CarouselItem className="basis-full lg:basis-1/2 p-4">
                  <Card className="p-6 bg-background h-full">
                    <div className="flex items-center justify-center gap-8">
                      <div className="w-16 h-16 rounded-lg flex items-center justify-center bg-[#f0f0f0]">
                        <img
                          src="/business-central.svg"
                          alt="Business Central"
                          className="h-12 w-12"
                        />
                      </div>
                      <ArrowRight className="h-8 w-8 text-[#cccccc]" />
                      <div className="w-16 h-16 rounded-lg flex items-center justify-center bg-[#f0f0f0]">
                        <img src="/twilio.svg" alt="Twilio" className="h-12 w-12" />
                      </div>
                    </div>
                    <p className="mt-4 text-center font-medium">
                      Microsoft Dynamics Business Central + Twilio
                    </p>
                  </Card>
                </CarouselItem>
                <CarouselItem className="basis-full lg:basis-1/2 p-4">
                  <Card className="p-6 bg-background h-full">
                    <div className="flex items-center justify-center gap-8">
                      <div className="w-16 h-16 rounded-lg flex items-center justify-center bg-[#f0f0f0]">
                        <img
                          src="/business-central.svg"
                          alt="Business Central"
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
                      Microsoft Dynamics Business Central + Netsuite
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

