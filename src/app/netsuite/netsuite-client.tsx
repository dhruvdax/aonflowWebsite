
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
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Autoplay from "embla-carousel-autoplay";
import React from 'react';

const netsuiteUseCases = [
    {
        icon: FileText,
        title: "Notifications from System Events via SMS",
        description: "Integrate Twilio with your systems like Salesforce or WooCommerce, so when something significant happens, like a new order or a lead is updated, Twilio can send an SMS notification to the appropriate customer or employee."
    },
    {
        icon: Repeat,
        title: "Appointment Reminders",
        description: "Send appointment reminders via SMS by integrating Twilio into a CRM processor like HubSpot to reduce no-shows and enhance customer experience."
    },
    {
        icon: ShieldCheck,
        title: "Configuring Two-factor Authentication",
        description: "This automation allows you to connect Twilio with internal apps and send 2FA codes over SMS to your user when logging in, thus increasing the security of the app."
    },
    {
        icon: Users,
        title: "Feedback Collection via SMS",
        description: "Twilio also allows to send an automated SMS on a purchase or service interaction, and the replies can be sent back to CRM or DB to be analyzed through Aonflow."
    }
];


const aonflowForIntegration = [
    {
        icon: Zap,
        title: "Netsuite integration for automation solutions"
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
        question: "What is NetSuite Integration?",
        answer: "NetSuite Integration is the process of connecting your NetSuite ERP with other business applications to automate data flow and streamline operations. This eliminates manual data entry, reduces errors, and ensures that all your teams are working with consistent, up-to-date information across platforms like CRM, e-commerce, and marketing automation."
    },
    {
        question: "Why should I integrate NetSuite using Aonflow?",
        answer: (
            React.createElement('div', null,
                React.createElement('p', { className: 'mb-2' }, 'Integrating NetSuite with Aonflow provides several key benefits:'),
                React.createElement('ul', { className: 'list-disc pl-5 space-y-2' },
                    React.createElement('li', null, React.createElement('strong', null, 'Unified Business View: '), 'Get a complete picture of your operations by syncing financials, inventory, and customer data.'),
                    React.createElement('li', null, React.createElement('strong', null, 'Increased Efficiency: '), 'Automate order-to-cash, procure-to-pay, and other key financial processes to save time and reduce manual work.'),
                    React.createElement('li', null, React.createElement('strong', null, 'Enhanced Accuracy: '), 'Eliminate data silos and discrepancies between your ERP and other systems.'),
                    React.createElement('li', null, React.createElement('strong', null, 'Scalability: '), 'Aonflow’s platform grows with you, handling increased transaction volumes and more complex workflows as your business expands.')
                )
            )
        )
    },
    {
        question: "What are some common NetSuite integration use cases?",
        answer: "Common use cases include syncing orders from e-commerce platforms like Shopify or WooCommerce to NetSuite, integrating Salesforce CRM for a 360-degree customer view, automating invoice processing with payment gateways like Stripe, and connecting with 3PL providers for streamlined logistics."
    }
];

const netsuiteAutomationTabs = [
  {
    value: "integration",
    icon: BrainCircuit,
    label: "Integration",
    title: "Netsuite integration, made easy",
    subtitle: "Create robust integrations with Netsuite effortlessly and with ease",
    content: "Easily integrate your ERP system with Aonflow Platform's NetSuite connector. Build powerful integrations without developers. The drag-and-drop interface lets you launch automated processes managing ERP data seamlessly. The NetSuite connector provides access to various operations to create and modify records. Low-code interface allows for quick custom integration without the need for coding, saving you time and resources.",
    subcontentTitle: "Handle all your Netsuite integration requirements in one single place",
    subcontent: "Maximize the extensive ERP functionality of NetSuite by leveraging our connector along with our comprehensive library of pre-built integrations and logic-based helpers. With Aonflow’s intuitive model, you can take full control of your financial and supply chain data, thanks to the most robust and user-friendly General Automation Platform available on the market in this day and age."
  },
  {
    value: "automation",
    icon: FileCog,
    label: "Automation",
    title: "Netsuite automation, made simple",
    subtitle: "Leverage the power of the NetSuite connector to automate your ERP processes",
    content: "Effortlessly sync ERP data across your tech stack with the NetSuite connector using Aonflow’s intuitive platform. Our flexible toolkit ensures connectivity to any data source. Trusted by NetSuite users in finance, operations, and supply chain, Aonflow’s platform allows you to quickly build workflows to drive efficiency and foster a well-coordinated organization, regardless of your integration experience.",
    subcontentTitle: "An intuitive platform that encompasses all your Netsuite automation solutions",
    subcontent: "The Aonflow Platform's NetSuite integration is perfect for finance professionals who need to synchronize data for payment processing, invoicing, and payroll. It provides a seamless record system for financial needs. e-commerce professionals can use the Aonflow Platform to automate the fulfillment process, syncing orders from their CRM in real time. It ensures reliability and increased customer satisfaction."
  },
  {
    value: "use-case",
    icon: Layers,
    label: "Use Case",
    title: "Netsuite use case, resolved",
    subtitle: "Maximize the capabilities of the Netsuite API to their fullest extent",
    content: "Our custom NetSuite integrations enable businesses to create automated workflows that address finance, operations, and fulfillment needs. Even integration novices can leverage NetSuite's potential with flexible automation. Teams can build automated fulfillment programs to ensure a robust supply chain and enhance customer experience. Trigger follow-ups, and NPS surveys. Improve internal finance processes with real-time data syncing and automated reporting.",
    subcontentTitle: "Aonflow platform and NetSuite: a dynamic duo for your growing business",
    subcontent: "Aonflow is continuously updated to meet the evolving needs of businesses. With enterprise-grade security features, the platform offers scalability and can support the growth of your business. Whether it's streamlining finance processes or automating supply chain management, Aonflow's integration with NetSuite provides a comprehensive solution for all your business needs. Stay ahead of the curve with the dynamic duo."
  }
];

export default function NetSuiteClientPage() {
  const [activeTab, setActiveTab] = useState(netsuiteAutomationTabs[0].value);
  const [isTabCarouselPaused, setIsTabCarouselPaused] = useState(false);
  
  const autoplay = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );

  useEffect(() => {
    if (isTabCarouselPaused) return;
    const tabRotationInterval = setInterval(() => {
      setActiveTab(prevTab => {
        const currentIndex = netsuiteAutomationTabs.findIndex(tab => tab.value === prevTab);
        const nextIndex = (currentIndex + 1) % netsuiteAutomationTabs.length;
        return netsuiteAutomationTabs[nextIndex].value;
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
                <img src="/netsuite.svg" alt="Netsuite" className="h-40 w-auto mb-4" />
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl font-headline text-foreground">
                    Netsuite Integration
                </h1>
                <p className="mt-4 text-lg text-muted-foreground max-w-3xl">
                   Connect financials, CRM, and e-commerce for streamlined data management and enhanced business operations with Netsuite Integration solutions.
                </p>
            </AnimateOnScroll>
            
            <AnimateOnScroll delay={0.2}>
              <div className="grid grid-cols-1 gap-8">
                  <Card className="p-6 flex flex-col items-start bg-background/50 backdrop-blur-sm h-full col-span-1 md:col-span-3 rounded-[24px]">
                      <BrainCircuit className="h-10 w-10 text-primary mb-4" />
                      <h3 className="text-2xl font-bold font-headline mb-2">Connect. Design. Deliver.</h3>
                      <p className="text-muted-foreground flex-grow">
                          Seamlessly integrate NetSuite with any service, streamlining your business processes with ease. Our automation tools help you reduce the risk of errors and free up valuable time for your team, allowing for greater agility and faster time-to-market. Transform the way you work and achieve better outcomes with Aonflow.
                      </p>
                  </Card>
              </div>
              <div className="grid md:grid-cols-3 gap-8 mt-8">
                  <Card className="p-6 flex flex-col items-start bg-background/50 backdrop-blur-sm h-full rounded-[24px]">
                      <FileCog className="h-10 w-10 text-primary mb-4" />
                      <h3 className="text-2xl font-bold font-headline mb-2">NetSuite integration</h3>
                      <p className="text-muted-foreground flex-grow">It's incredibly simple to integrate NetSuite with other services using the Aonflow Platform's powerful NetSuite connector, eliminating the need for separate integration tools.</p>
                  </Card>
                  <Card className="p-6 flex flex-col items-start bg-background/50 backdrop-blur-sm h-full rounded-[24px]">
                      <Layers className="h-10 w-10 text-primary mb-4" />
                      <h3 className="text-2xl font-bold font-headline mb-2">Streamline integration</h3>
                      <p className="text-muted-foreground flex-grow">Seamlessly integrate Netsuite with other critical SaaS (Software as a Service) and ERP (Enterprise Resource Planning) systems, such as Salesforce, Shopify, and more.</p>
                  </Card>
                  <Card className="p-6 flex flex-col items-start bg-background/50 backdrop-blur-sm h-full rounded-[24px]">
                      <Repeat className="h-10 w-10 text-primary mb-4" />
                      <h3 className="text-2xl font-bold font-headline mb-2">Real-Time empowerment</h3>
                      <p className="text-muted-foreground flex-grow">Netsuite transforms into a more powerful and efficient system, enabling real-time data synchronization to ensure you always have the most up-to-date information.</p>
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
                    Aonflow simplifies the integration of Netsuite with other SaaS and ERP systems, automating workflows, streamlining processes, and providing real-time monitoring and alerts. Our data transformation capabilities allow you to modify data between systems, while conditional logic and error handling gives you full control. Aonflow scales with your business, handling high volumes of data and transactions without constraints.
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
                    {netsuiteAutomationTabs.map(tab => (
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
                     <h3 className="text-2xl font-bold mb-6 font-headline text-primary text-center">{netsuiteAutomationTabs.find(t => t.value === activeTab)?.title}</h3>
                    {netsuiteAutomationTabs.map(tab => (
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
      
      {/* Use Cases - This section is commented out as content was not provided */}
      {/* 
      <section className="py-20 md:py-28 bg-primary/5">
        <div className="container mx-auto px-4 md:px-6">
            <AnimateOnScroll className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold font-headline mb-12">NetSuite Integration Use Cases</h2>
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
                {netsuiteUseCases.map((useCase, index) => (
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
      */}
      
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
              Our popular and powerful NetSuite connectors
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
                        <img src="/netsuite.svg" alt="NetSuite" className="h-12 w-12" />
                      </div>
                      <ArrowRight className="h-8 w-8 text-[#cccccc]" />
                      <div className="w-16 h-16 rounded-lg flex items-center justify-center bg-[#f0f0f0]">
                        <img src="/salesforce.svg" alt="Salesforce" className="h-12 w-12" />
                      </div>
                    </div>
                    <p className="mt-4 text-center font-medium">
                      NetSuite to Salesforce
                    </p>
                  </Card>
                </CarouselItem>
                <CarouselItem className="basis-full lg:basis-1/2 p-4">
                  <Card className="p-6 bg-background h-full">
                    <div className="flex items-center justify-center gap-8">
                       <div className="w-16 h-16 rounded-lg flex items-center justify-center bg-[#f0f0f0]">
                        <img src="/netsuite.svg" alt="NetSuite" className="h-12 w-12" />
                       </div>
                      <ArrowRight className="h-8 w-8 text-[#cccccc]" />
                       <div className="w-16 h-16 rounded-lg flex items-center justify-center bg-[#f0f0f0]">
                        <img src="/hubspot.svg" alt="HubSpot" className="h-12 w-12" />
                      </div>
                    </div>
                    <p className="mt-4 text-center font-medium">
                      NetSuite to HubSpot
                    </p>
                  </Card>
                </CarouselItem>
                <CarouselItem className="basis-full lg:basis-1/2 p-4">
                  <Card className="p-6 bg-background h-full">
                    <div className="flex items-center justify-center gap-8">
                      <div className="w-16 h-16 rounded-lg flex items-center justify-center bg-[#f0f0f0]">
                        <img src="/netsuite.svg" alt="NetSuite" className="h-12 w-12" />
                      </div>
                      <ArrowRight className="h-8 w-8 text-[#cccccc]" />
                      <div className="w-16 h-16 rounded-lg flex items-center justify-center bg-[#f0f0f0]">
                        <img src="/twilio.svg" alt="Twilio" className="h-12 w-12" />
                      </div>
                    </div>
                    <p className="mt-4 text-center font-medium">
                      NetSuite to Twilio
                    </p>
                  </Card>
                </CarouselItem>
                <CarouselItem className="basis-full lg:basis-1/2 p-4">
                  <Card className="p-6 bg-background h-full">
                    <div className="flex items-center justify-center gap-8">
                      <div className="w-16 h-16 rounded-lg flex items-center justify-center bg-[#f0f0f0]">
                        <img src="/netsuite.svg" alt="NetSuite" className="h-12 w-12" />
                      </div>
                      <ArrowRight className="h-8 w-8 text-[#cccccc]" />
                      <div className="w-16 h-16 rounded-lg flex items-center justify-center bg-[#f0f0f0]">
                        <img src="/microsoft-dynamic.svg" alt="Microsoft Dynamics" className="h-12 w-12" />
                      </div>
                    </div>
                    <p className="mt-4 text-center font-medium">
                      NetSuite to Microsoft Dynamics
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
