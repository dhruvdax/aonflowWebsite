
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

const zohoCrmUseCases = [
    {
        icon: LineChart,
        title: "Lead-to-Order Data Flow",
        description: "When a lead is qualified in Zoho CRM, Aonflow can automatically create a sales order in your ERP, ensuring data alignment and reducing manual entry."
    },
    {
        icon: Users,
        title: "Unified Customer Data",
        description: "Sync customer records from Zoho CRM with other marketing or support platforms to provide a unified view and improve collaboration across departments."
    },
    {
        icon: BarChart,
        title: "Scheduled Reporting",
        description: "Automatically pull data from Zoho CRM into tools like Google Sheets for up-to-date performance dashboards without manual exporting."
    },
    {
        icon: Repeat,
        title: "Data Consistency Across Systems",
        description: "Ensure that product information, pricing, and customer details are consistent across all your integrated systems, with Zoho CRM as the source of truth."
    }
];


const aonflowForIntegration = [
    {
        icon: Zap,
        title: "Zoho CRM integration for automation solutions"
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
    question: "What is Zoho CRM Integration?",
    answer: "Zoho CRM Integration refers to connecting your Zoho CRM with other systems and applications your business uses. This allows for automated data exchange, eliminating manual data entry, reducing errors, and ensuring your teams have the most current information. This integration helps synchronize data seamlessly to simplify processes like lead management, customer support, and financial reporting."
  },
  {
    question: "Which platforms can I integrate with Zoho CRM through Aonflow?",
    answer: (
      <div>
        <p className="mb-2">Aonflow provides a wide variety of integrations for Zoho CRM, including:</p>
        <ul className="list-disc pl-5 space-y-2">
            <li><strong>Google Workspace:</strong> Sync contacts, calendar events, and emails between Zoho CRM and Google.</li>
            <li><strong>QuickBooks Online:</strong> Keep your invoice and payment details in sync with Zoho CRM to make accounting easier.</li>
            <li><strong>Mailchimp:</strong> Automatically add new leads from Zoho CRM to your Mailchimp mailing lists.</li>
            <li><strong>Slack:</strong> Get real-time notifications in Slack for new leads, deal updates, or support tickets in Zoho CRM.</li>
            <li><strong>WooCommerce & Shopify:</strong> Sync orders, products and customer data to have a unified view of your online store.</li>
        </ul>
        <p className="mt-2">If you don't see your desired system, Aonflow regularly adds new connectors and can provide custom integrations to meet your specific needs.</p>
      </div>
    )
  },
  {
    question: "Why should I integrate Zoho CRM using Aonflow?",
    answer: (
      <div>
        <p className="mb-2">Integrating Zoho CRM using the Aonflow iPaaS platform provides several key advantages:</p>
        <ul className="list-disc pl-5 space-y-2">
            <li><strong>Eliminate Manual Data Entry:</strong> Aonflow automatically syncs records, saving you time and reducing the risk of errors.</li>
            <li><strong>360-Degree Customer View:</strong> Centralize data from multiple sources to gain a complete view of your customers, deals, and operations.</li>
            <li><strong>Enhance Team Collaboration:</strong> With access to the same up-to-date, accurate data, sales, support, and marketing teams can work together more effectively.</li>
            <li><strong>Improved Reporting:</strong> Merge data from different systems to generate deeper insights and more meaningful dashboards for decision-making.</li>
            <li><strong>Scalability:</strong> Aonflow’s integration framework easily scales to accommodate your growing business, whether you're adding new systems or handling larger data volumes.</li>
        </ul>
      </div>
    )
  },
    {
        question: "Do I need technical expertise to set up a Zoho CRM integration?",
        answer: (
            <div>
                <p className="mb-2">Aonflow is designed for both non-technical users and developers:</p>
                <ul className="list-disc pl-5 space-y-2">
                    <li><strong>No-Code/Low-Code Interface:</strong> With our intuitive workflow builder, anyone can connect basic data flows without writing a line of code.</li>
                    <li><strong>Advanced Customization:</strong> For more complex requirements, your IT team or our professional services can set up in-depth mapping and custom logic.</li>
                </ul>
                <p className="mt-2">This allows you to start with simple integrations and move to more powerful, enterprise-grade solutions as your needs evolve.</p>
            </div>
        )
    },
];

const zohoCrmAutomationTabs = [
  {
    value: "integration",
    icon: BrainCircuit,
    label: "Integration",
    title: "Zoho CRM Integration, made easy",
    subtitle: "Intuitive interface and robust Zoho CRM integration and automation capabilities",
    content: "Integrate Zoho CRM with your other business applications to ensure seamless data flow and avoid silos. Using the Aonflow platform's Zoho CRM connector, automate tedious and time-consuming tasks such as lead capture, data entry, and lead enrichment. Connect Zoho CRM with any other cloud-based application, such as marketing automation tools, e-commerce platforms, and customer support software.",
    subcontentTitle: "Efficiently automate data synchronization and lead nurturing",
    subcontent: "Stay up-to-date by automating data synchronization across multiple applications. Automate lead scoring and nurturing, which can help you identify high-quality leads and convert them into customers efficiently. With an intuitive drag-and-drop interface and robust automation capabilities, create custom workflows and automate complex business processes, all while ensuring that your Zoho CRM data remains accurate and current."
  },
  {
    value: "automation",
    icon: FileCog,
    label: "Automation",
    title: "Zoho CRM automation, made simple",
    subtitle: "Easily automate workflows, sync data, and streamline your entire process",
    content: "Integrate Zoho CRM with other business applications, marketing automation platforms, email marketing software, and project management tools can save time and effort. Do away with the complexities of integration. Our user-friendly interface makes it easy to connect Zoho CRM with other applications, so you can focus on what you do best - building lasting relationships with your customers.",
    subcontentTitle: "Streamline lead management and improve customer experience",
    subcontent: "Automatically send welcome emails to new leads, set up triggers to alert your sales team when a lead takes a specific action, and track your marketing campaigns' effectiveness by syncing CRM data with your marketing automation platform. Integrate Zoho CRM with ERP or finance software to track payments and invoices, ensuring a seamless experience for your customers."
  },
  {
    value: "use-case",
    icon: Layers,
    label: "Use Case",
    title: "Zoho CRM use case, resolved",
    subtitle: "Technically advanced with the capability to fully leverage Zoho CRM's potential",
    content: "Zoho CRM integration becomes easier with Aonflow iPaaS integration and automation, enabling you to streamline your workflows. Connect it with other sales and marketing tools, such as email marketing platforms, social media management tools, and lead generation software. Automatically capture and track leads, segment your audience, and deliver targeted marketing messages based on customer behavior and interests.",
    subcontentTitle: "Unlock growth and efficiency with Zoho CRM-Aonflow's iPaaS integration",
    subcontent: "Connect with your other business applications, such as ERP systems, billing software, or project management tools. Streamline your business processes and ensure that customer data is accurate and up-to-date across all your systems. Zoho CRM integration gets more powerful with Aonflow’s iPaaS solutions. Automate your workflows and connect your business applications to unlock new efficiencies and drive growth."
  }
];

export default function ZohoCrmPage() {
  const [activeTab, setActiveTab] = useState(zohoCrmAutomationTabs[0].value);
  const [isTabCarouselPaused, setIsTabCarouselPaused] = useState(false);
  
  const autoplay = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );

  useEffect(() => {
    if (isTabCarouselPaused) return;
    const tabRotationInterval = setInterval(() => {
      setActiveTab(prevTab => {
        const currentIndex = zohoCrmAutomationTabs.findIndex(tab => tab.value === prevTab);
        const nextIndex = (currentIndex + 1) % zohoCrmAutomationTabs.length;
        return zohoCrmAutomationTabs[nextIndex].value;
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
                <img src="/zoho-crm.svg" alt="Zoho CRM" className="h-40 w-auto mb-4" />
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl font-headline text-foreground">
                    Zoho CRM Integration
                </h1>
                <p className="mt-4 text-lg text-muted-foreground max-w-3xl">
                   Enhance customer relationship management by integrating Zoho CRM to streamline workflows and data sync for improved business efficiency.
                </p>
            </AnimateOnScroll>
            
            <AnimateOnScroll delay={0.2}>
              <div className="grid grid-cols-1 gap-8">
                  <Card className="p-6 flex flex-col items-start bg-background/50 backdrop-blur-sm h-full col-span-1 md:col-span-3 rounded-[24px]">
                      <BrainCircuit className="h-10 w-10 text-primary mb-4" />
                      <h3 className="text-2xl font-bold font-headline mb-2">Connect. Integrate. Automate.</h3>
                      <p className="text-muted-foreground flex-grow">
                          Connect your Zoho CRM account to the Aonflow platform and streamline data transfer between Zoho CRM and other business applications. With our powerful Zoho CRM connector, you can simplify complex integrations and ensure your sales and marketing teams have access to accurate and up-to-date customer data at all times.
                      </p>
                  </Card>
              </div>
              <div className="grid md:grid-cols-3 gap-8 mt-8">
                  <Card className="p-6 flex flex-col items-start bg-background/50 backdrop-blur-sm h-full rounded-[24px]">
                      <Layers className="h-10 w-10 text-primary mb-4" />
                      <h3 className="text-2xl font-bold font-headline mb-2">Seamless integration</h3>
                      <p className="text-muted-foreground flex-grow">Integrate Zoho CRM with other apps for a streamlined lead-to-cash process, improved analytics, and deeper insights into prospects and customers.</p>
                  </Card>
                  <Card className="p-6 flex flex-col items-start bg-background/50 backdrop-blur-sm h-full rounded-[24px]">
                      <BrainCircuit className="h-10 w-10 text-primary mb-4" />
                      <h3 className="text-2xl font-bold font-headline mb-2">CRM integration</h3>
                      <p className="text-muted-foreground flex-grow">Zoho CRM can be easily integrated with various other software systems. You can synchronize accounts, contacts, and sales orders between Zoho CRM and ERP.</p>
                  </Card>
                  <Card className="p-6 flex flex-col items-start bg-background/50 backdrop-blur-sm h-full rounded-[24px]">
                      <Repeat className="h-10 w-10 text-primary mb-4" />
                      <h3 className="text-2xl font-bold font-headline mb-2">Sync. Simplify.</h3>
                      <p className="text-muted-foreground flex-grow">Sync leads and accounts between Zoho CRM, HubSpot, and Marketo. Also, sync sales orders and accounts between Zoho CRM and accounting software.</p>
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
                    Aonflow's iPaaS allows easy integration between Zoho CRM and other cloud-based apps, eliminating the need for manual coding or IT support. With a low-code builder, users can quickly connect Zoho CRM with other apps, automate business processes, and create custom workflows. This flexible solution responds to events, triggers workflows, and routes data. It saves time, increases efficiency, and optimizes business operations.
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
                    {zohoCrmAutomationTabs.map(tab => (
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
                     <h3 className="text-2xl font-bold mb-6 font-headline text-primary text-center">{zohoCrmAutomationTabs.find(t => t.value === activeTab)?.title}</h3>
                    {zohoCrmAutomationTabs.map(tab => (
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
      
      {/* Use Cases */}
      <section className="py-20 md:py-28 bg-primary/5">
        <div className="container mx-auto px-4 md:px-6">
            <AnimateOnScroll className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold font-headline mb-12">Zoho CRM Integration Use Cases</h2>
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
                {zohoCrmUseCases.map((useCase, index) => (
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
              Our popular and powerful Zoho CRM connectors
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
                          src="/zoho-crm.svg"
                          alt="Zoho CRM"
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
                      Zoho CRM to Salesforce
                    </p>
                  </Card>
                </CarouselItem>
                <CarouselItem className="basis-full lg:basis-1/2 p-4">
                  <Card className="p-6 bg-background h-full">
                    <div className="flex items-center justify-center gap-8">
                       <div className="w-16 h-16 rounded-lg flex items-center justify-center bg-[#f0f0f0]">
                        <img
                          src="/zoho-crm.svg"
                          alt="Zoho CRM"
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
                      Zoho CRM to Hubspot
                    </p>
                  </Card>
                </CarouselItem>
                <CarouselItem className="basis-full lg:basis-1/2 p-4">
                  <Card className="p-6 bg-background h-full">
                    <div className="flex items-center justify-center gap-8">
                      <div className="w-16 h-16 rounded-lg flex items-center justify-center bg-[#f0f0f0]">
                        <img
                          src="/zoho-crm.svg"
                          alt="Zoho CRM"
                          className="h-12 w-12"
                        />
                      </div>
                      <ArrowRight className="h-8 w-8 text-[#cccccc]" />
                      <div className="w-16 h-16 rounded-lg flex items-center justify-center bg-[#f0f0f0]">
                        <img src="/twilio.svg" alt="Twilio" className="h-12 w-12" />
                      </div>
                    </div>
                    <p className="mt-4 text-center font-medium">
                      Zoho CRM to Twilio
                    </p>
                  </Card>
                </CarouselItem>
                <CarouselItem className="basis-full lg:basis-1/2 p-4">
                  <Card className="p-6 bg-background h-full">
                    <div className="flex items-center justify-center gap-8">
                      <div className="w-16 h-16 rounded-lg flex items-center justify-center bg-[#f0f0f0]">
                        <img
                          src="/zoho-crm.svg"
                          alt="Zoho CRM"
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
                      Zoho CRM to Netsuite
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

    