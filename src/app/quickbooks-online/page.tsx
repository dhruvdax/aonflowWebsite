
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

const quickbooksUseCases = [
    {
        icon: FileText,
        title: "Seamless Invoice Creation",
        description: "Aonflow makes sure that whenever an order is prepared in Shopify, WooCommerce, or a CRM like Salesforce, an invoice is created in Quickbooks Online every time."
    },
    {
        icon: Repeat,
        title: "Transaction Reconciliation",
        description: "Automatic Sync of Payment Data Directly to QuickBooks Online Align your Sales & Revenue data for financial accuracy with automatic payment data from Stripe or PayPal directly to QuickBooks Online."
    },
    {
        icon: Briefcase,
        title: "Expense Management",
        description: "Automatically aggregate expense data from multiple sources/systems — where you might have purchase orders sitting in Dynamics 365 and supplier invoices in NetSuite — into QuickBooks Online, minimizing manual data entry and reducing errors."
    },
    {
        icon: LineChart,
        title: "Near Real-Time Financial Insights",
        description: "With Aonflow, you can push data from QuickBooks Online into Google Sheets and BI tools that generate dashboards, enabling you to see the status of your cash flow, profit margins, and expenses in near real-time."
    },
    {
        icon: Users,
        title: "Vendor Payment Coordination",
        description: "Integrate supplier invoice approvals with integrated systems and record & schedule payments in QuickBooks Online using Aonflow, simplifying accounts payable."
    }
];


const aonflowForIntegration = [
    {
        icon: Zap,
        title: "QuickBooks Online integration for all your CRM solutions"
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
        question: "What is QuickBooks Integration?",
        answer: "QuickBooks Integration means connecting your accounting platform with other core business applications—CRMs, eCommerce applications, payment gateways, and much more. This automation keeps your financial data in sync without the need for double entering and helps to keep your books up to date, in real-time."
    },
    {
        question: "Why should I integrate QuickBooks using Aonflow?",
        answer: (
            <div>
                <p className="mb-2">Key benefits of QuickBooks integration using Aonflow:</p>
                <ul className="list-disc pl-5 space-y-2">
                    <li><strong>Accurate Financials:</strong> Automation eliminates manual errors when updating invoices, payments, and ledger entries.</li>
                    <li><strong>Save Time:</strong> Eliminate constant data transfers from the team and let them focus on higher-value activities.</li>
                    <li><strong>Unified Overview:</strong> The financial aspects can be complemented with sales, customer, or operational insights for enhanced decision-making.</li>
                    <li><strong>Scalability:</strong> As you grow, it’ll be easy to add additional connectors or refine existing workflows.</li>
                </ul>
            </div>
        )
    },
    {
        question: "Which QuickBooks versions does Aonflow support?",
        answer: (
            <div>
                <p>Aonflow works most seamlessly with QuickBooks Online using secure API connections.</p>
                <p className="mt-2"><strong>Business users:</strong> Need to integrate with QuickBooks Desktop or Enterprise? Please get in touch— our professional services team can explore potential options or workarounds with you depending on your needs.</p>
            </div>
        )
    },
    {
        question: "What kinds of data can be synced with QuickBooks?",
        answer: "You can sync a wide range that includes everything from invoices and payments to expenses, customer records, purchase orders, and other accounting data. If you have specific points of data or specialized accounting processes, Aonflow allows for custom fields or workflows."
    },
    {
        question: "What systems can I connect QuickBooks to?",
        answer: "Out-of-the-box connectors on Aonflow are for CRM, eCommerce, and payment processors (Salesforce, HubSpot, WooCommerce, etc.) If your system is not shown, our team may research custom integration options to cater to your business requirements."
    },
    {
        question: "Do I need technical expertise to set up QuickBooks Integration?",
        answer: "Not always. Generally, you can set up the basic workflows — Aonflow has an easy-to-use interface — without writing a line of code. Advanced or large-scale setups — such as multi-step data transformations or custom scripts — might be beyond your capabilities, requiring help from your IT staff, or Aonflow’s professional services."
    },
    {
        question: "How does Aonflow manage near real-time vs. scheduled syncing for QuickBooks?",
        answer: (
            <div>
                 <p className="mb-2">Aonflow supports both event-based and scheduled syncing:</p>
                <ul className="list-disc pl-5 space-y-2">
                    <li><strong>Flow Activation (Event-Based):</strong> Whenever there is an important time-sensitive financial event—be it invoice creations, or payment confirmations—Aonflow intuitively pushes/pulls the data to ensure that QuickBooks and related systems stay in sync.</li>
                    <li><strong>Scheduled Sync:</strong> For periodic operations (daily revenue summaries, weekly expense reports), you can create a schedule (hourly, daily, etc.) to process data in bulk.</li>
                </ul>
            </div>
        )
    },
    {
        question: "Is the QuickBooks integration using Aonflow iPaaS secure?",
        answer: "Yes. Aonflow protects data in transit using secure APIs combined with TLS/SSL encryption and (where applicable) OAuth. We even offer role-based permissions: only authorized users can make edits to, or access QuickBooks-related integrations. Compliance with regulations like the GDPR and SOC 2 further strengthens data privacy."
    },
    {
        question: "Can I handle custom workflows and fields in QuickBooks?",
        answer: "Absolutely. Use the Aonflow platform’s flexible mapping tools to configure custom fields, categories, or any other custom accounting structure in QuickBooks. You can even set up conditional or multi-step workflows to respond to specific triggers or thresholds, ensuring that even the most bespoke accounting processes can be automated!"
    },
    {
        question: "How long does it take to implement?",
        answer: "Timelines vary depending on scope. A simple integration (like syncing customer data or invoices) can be set up in days and involved, multi-step workflows across multiple systems can take a few weeks or so. Your customer success and professional services teams will work with you to define realistic timelines and best practices for your project."
    },
    {
        question: "What does pricing look like for QuickBooks integration?",
        answer: "Costs can vary significantly based on several factors: the number of connectors, the transaction volume, the complexity of the workflows, and the level of support you choose. With tiered support plans and optional professional services. To learn more about pricing, you can talk to our sales team."
    },
    {
        question: "What support options does Aonflow provide for QuickBooks integrations?",
        answer: "Aonflow support consists of detailed documentation, and email support. For more advanced or mission-driven environments, we have premium support and professional services offerings available. These can range from initial design and configuration through ongoing optimization and troubleshooting."
    }
];

const quickbooksAutomationTabs = [
  {
    value: "integration",
    icon: BrainCircuit,
    label: "Integration",
    title: "Quickbooks Online integration, made easy",
    subtitle: "Take QuickBooks Online integration and automation to the next level",
    content: "Simplify QuickBooks Online integrations effortlessly using the low-code Aonflow Platform. Effortlessly connect various data sources through our intuitive visual interface, eliminating the need for IT support. Streamlining the entire flow creation process empowers users to create customized connections seamlessly, ensuring efficient and error-free integration. Ensure a smooth, hassle-free process for managing financial information across your tech stack.",
    subcontentTitle: "One self-service platform for all your QuickBooks Online integration solutions",
    subcontent: "Aonflow goes beyond easy integrations. Build custom QuickBooks Online automation for faster, error-free accounting processes. Connect QuickBooks Online to your favorite tools, automating manual bookkeeping tasks and enabling focus on more strategic work. Easily flow financial data to any destination through seamless API integrations. Sync with diverse sources, from CSV files to various cloud tools, and leverage data within custom fields."
  },
  {
    value: "automation",
    icon: FileCog,
    label: "Automation",
    title: "QuickBooks Online automation made simple",
    subtitle: "Drive more efficiency with simple and user-friendly QuickBooks Online automation.",
    content: "Transform your financial workflows with potent QuickBooks Online automation. Effortlessly flow business-critical accounting details like expenses, income, inventory, and payroll across your tech stack. Our platform enables seamless bi-directional synchronization between QuickBooks Online API and various data sources—CRM, e-commerce platforms, payroll services, HR software, and more—ensuring efficient data management tailored to your specific processes.",
    subcontentTitle: "All-in-one intuitive future-proof QuickBooks Online integration",
    subcontent: "Unlock streamlined automated workflows with Aonflow iPaaS solutions, catering to finance, e-commerce, revenue, and diverse teams. Simplify complex tasks like manual data entry and time-consuming bookkeeping processes. Rely on our library of pre-built connectors, data helpers, and custom logic operators to customize QuickBooks Online automation. Create highly tailored automated workflows that organize your books faster and more efficiently, aligning precisely with your business requirements."
  },
  {
    value: "use-case",
    icon: Layers,
    label: "Use Case",
    title: "QuickBooks Online use case, resolved",
    subtitle: "Empower Large-Scale QuickBooks Online Integrations",
    content: "Harness Aonflow Platform's versatility for large-scale QuickBooks Online use cases. Business professionals find it user-friendly, while power users appreciate its capability for handling massive data jobs, and processing billions of events daily. Built on elastic, serverless architecture, our platform dynamically scales workflows to match evolving data needs. Experience seamless automation for diverse processes, from streamlining quote-to-cash and e-commerce storefronts to simplifying onboarding processes between HR platforms and ERPs.",
    subcontentTitle: "Secure and Versatile QuickBooks Online Integrations with Aonflow iPaaS Solutions",
    subcontent: "Optimize your business with secure and versatile QuickBooks Online integrations on the Aonflow Platform. Perfect for any business professional, our platform excels at handling large-scale data jobs with billions of daily events. Whether streamlining quote-to-cash processes, connecting e-commerce storefronts, or simplifying onboarding between HR and ERPs, the Anflow Platform seamlessly integrates with Salesforce, Shopify, WooCommerce, Zoho CRM, Twilio, Netsuite, HubSpot, Slack, Stripe, and more. Our enterprise-grade security ensures data privacy, safety, and peace of mind."
  }
];

export default function QuickBooksOnlinePage() {
  const [activeTab, setActiveTab] = useState(quickbooksAutomationTabs[0].value);
  const [isTabCarouselPaused, setIsTabCarouselPaused] = useState(false);
  
  const autoplay = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );

  useEffect(() => {
    if (isTabCarouselPaused) return;
    const tabRotationInterval = setInterval(() => {
      setActiveTab(prevTab => {
        const currentIndex = quickbooksAutomationTabs.findIndex(tab => tab.value === prevTab);
        const nextIndex = (currentIndex + 1) % quickbooksAutomationTabs.length;
        return quickbooksAutomationTabs[nextIndex].value;
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
                <img src="/quickbooks.svg" alt="QuickBooks Online" className="h-40 w-auto mb-4" />
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl font-headline text-foreground">
                    QuickBooks Online Integration
                </h1>
                <p className="mt-4 text-lg text-muted-foreground max-w-3xl">
                   Streamline finances, elevate efficiency, and process outcomes with seamless QuickBooks Online integration solutions.
                </p>
            </AnimateOnScroll>
            
            <AnimateOnScroll delay={0.2}>
              <div className="grid grid-cols-1 gap-8">
                  <Card className="p-6 flex flex-col items-start bg-background/50 backdrop-blur-sm h-full col-span-1 md:col-span-3 rounded-[24px]">
                      <BrainCircuit className="h-10 w-10 text-primary mb-4" />
                      <h3 className="text-2xl font-bold font-headline mb-2">Connect. Integrate. Automate.</h3>
                      <p className="text-muted-foreground flex-grow">
                          Simplify QuickBooks Online integration and automation with Aonflow iPaaS Platform's powerful connector. Easily link QuickBooks Online to any service, eliminating the necessity for separate integration tools. Streamline workflows seamlessly, enhancing efficiency in managing financial data across platforms. Optimize your daily transactions and sales, and more.
                      </p>
                  </Card>
              </div>
              <div className="grid md:grid-cols-3 gap-8 mt-8">
                  <Card className="p-6 flex flex-col items-start bg-background/50 backdrop-blur-sm h-full rounded-[24px]">
                      <Repeat className="h-10 w-10 text-primary mb-4" />
                      <h3 className="text-2xl font-bold font-headline mb-2">Data Sync Automation</h3>
                      <p className="text-muted-foreground flex-grow">Effortlessly synchronize data across platforms, ensuring real-time updates and accurate information flow. Streamline your workflow for seamless and efficient data management.</p>
                  </Card>
                  <Card className="p-6 flex flex-col items-start bg-background/50 backdrop-blur-sm h-full rounded-[24px]">
                      <Zap className="h-10 w-10 text-primary mb-4" />
                      <h3 className="text-2xl font-bold font-headline mb-2">Transaction Automation</h3>
                      <p className="text-muted-foreground flex-grow">Automate transaction processes for enhanced efficiency. Trigger actions for new transactions, reducing manual effort and ensuring accurate financial data management in real-time.</p>
                  </Card>
                  <Card className="p-6 flex flex-col items-start bg-background/50 backdrop-blur-sm h-full rounded-[24px]">
                      <Users className="h-10 w-10 text-primary mb-4" />
                      <h3 className="text-2xl font-bold font-headline mb-2">Customer Interaction Automation</h3>
                      <p className="text-muted-foreground flex-grow">Automate responses and actions based on customer interactions. Streamline communication and nurture customer relationships effectively, ensuring timely and personalized engagements for improved customer satisfaction.</p>
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
                    Aonflow optimizes QuickBooks Online integration for streamlined financial management. Seamlessly sync data with e-commerce platforms like Shopify, integrate CRM systems such as Salesforce and facilitate smooth payment processes with leading processors like Stripe. Utilize Aonflow's premium QuickBooks Integration templates, including Salesforce, Amazon, and NetSuite, to jump-start your integrations. Aonflow ensures full visibility, reduces duplicate data entry, and enhances productivity for better financial decision-making and forecasting.
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
                    {quickbooksAutomationTabs.map(tab => (
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
                     <h3 className="text-2xl font-bold mb-6 font-headline text-primary text-center">{quickbooksAutomationTabs.find(t => t.value === activeTab)?.title}</h3>
                    {quickbooksAutomationTabs.map(tab => (
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

      {/* See Aonflow in Action Section */}
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
      
      {/* Use Cases */}
      <section className="py-20 md:py-28 bg-primary/5">
        <div className="container mx-auto px-4 md:px-6">
            <AnimateOnScroll className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold font-headline mb-12">QuickBooks Online Integration Use Cases</h2>
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
                {quickbooksUseCases.map((useCase, index) => (
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
              Our popular and powerful QuickBooks Online connectors
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
                        <img src="/quickbooks.svg" alt="QuickBooks Online" className="h-12 w-12" />
                      </div>
                      <ArrowRight className="h-8 w-8 text-[#cccccc]" />
                      <div className="w-16 h-16 rounded-lg flex items-center justify-center bg-[#f0f0f0]">
                        <img src="/salesforce.svg" alt="Salesforce" className="h-12 w-12" />
                      </div>
                    </div>
                    <p className="mt-4 text-center font-medium">
                      QuickBooks Online and Salesforce
                    </p>
                  </Card>
                </CarouselItem>
                <CarouselItem className="basis-full lg:basis-1/2 p-4">
                  <Card className="p-6 bg-background h-full">
                    <div className="flex items-center justify-center gap-8">
                       <div className="w-16 h-16 rounded-lg flex items-center justify-center bg-[#f0f0f0]">
                        <img src="/quickbooks.svg" alt="QuickBooks Online" className="h-12 w-12" />
                       </div>
                      <ArrowRight className="h-8 w-8 text-[#cccccc]" />
                       <div className="w-16 h-16 rounded-lg flex items-center justify-center bg-[#f0f0f0]">
                        <img src="/microsoft-dynamic.svg" alt="Microsoft Dynamics 365" className="h-12 w-12" />
                      </div>
                    </div>
                    <p className="mt-4 text-center font-medium">
                      QuickBooks Online to Microsoft Dynamics 365
                    </p>
                  </Card>
                </CarouselItem>
                <CarouselItem className="basis-full lg:basis-1/2 p-4">
                  <Card className="p-6 bg-background h-full">
                    <div className="flex items-center justify-center gap-8">
                      <div className="w-16 h-16 rounded-lg flex items-center justify-center bg-[#f0f0f0]">
                        <img src="/quickbooks.svg" alt="QuickBooks Online" className="h-12 w-12" />
                      </div>
                      <ArrowRight className="h-8 w-8 text-[#cccccc]" />
                      <div className="w-16 h-16 rounded-lg flex items-center justify-center bg-[#f0f0f0]">
                        <img src="/twilio.svg" alt="Twilio" className="h-12 w-12" />
                      </div>
                    </div>
                    <p className="mt-4 text-center font-medium">
                      QuickBooks Online to Twilio
                    </p>
                  </Card>
                </CarouselItem>
                <CarouselItem className="basis-full lg:basis-1/2 p-4">
                  <Card className="p-6 bg-background h-full">
                    <div className="flex items-center justify-center gap-8">
                      <div className="w-16 h-16 rounded-lg flex items-center justify-center bg-[#f0f0f0]">
                        <img src="/quickbooks.svg" alt="QuickBooks Online" className="h-12 w-12" />
                      </div>
                      <ArrowRight className="h-8 w-8 text-[#cccccc]" />
                      <div className="w-16 h-16 rounded-lg flex items-center justify-center bg-[#f0f0f0]">
                        <img src="/netsuite.svg" alt="Netsuite" className="h-12 w-12" />
                      </div>
                    </div>
                    <p className="mt-4 text-center font-medium">
                      QuickBooks Online to Netsuite
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

    

    
