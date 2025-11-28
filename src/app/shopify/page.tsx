
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

const shopifyUseCases = [
    {
        icon: Repeat,
        title: "Order Fulfillment Automation",
        description: "When a new order is placed in WooCommerce, automatically sync it with your ERP or shipping software to streamline inventory management and fulfillment."
    },
    {
        icon: Users,
        title: "Customer Data Sync",
        description: "Sync new customer information from WooCommerce to your CRM, like Salesforce or HubSpot, to build a unified customer profile for marketing and support."
    },
    {
        icon: BarChart,
        title: "Sales Reporting",
        description: "Automatically export sales data from WooCommerce to Google Sheets or your data warehouse for real-time reporting and performance analysis."
    },
    {
        icon: LineChart,
        title: "Inventory Management",
        description: "Keep inventory levels consistent across your e-commerce store and backend systems by automating updates between WooCommerce and your inventory management software."
    }
];


const aonflowForIntegration = [
    {
        icon: Zap,
        title: "Shopify integration for automation solutions"
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
    question: "What is WooCommerce Integration?",
    answer: "WooCommerce Integration connects your online store with other business applications to automate the flow of data. This eliminates manual data entry for orders, customers, and inventory, ensuring your systems are always synchronized and accurate."
  },
  {
    question: "Which platforms can I integrate with WooCommerce through Aonflow?",
    answer: (
      <div>
        <p className="mb-2">Aonflow allows you to connect WooCommerce with a wide variety of platforms, including:</p>
        <ul className="list-disc pl-5 space-y-2">
            <li><strong>QuickBooks Online:</strong> Automatically create invoices and sync customer data when new orders are placed.</li>
            <li><strong>Salesforce:</strong> Sync customer and order data to get a 360-degree view of your customers in your CRM.</li>
            <li><strong>Google Sheets:</strong> Create real-time sales reports and track inventory automatically.</li>
            <li><strong>Mailchimp:</strong> Add new customers to your mailing lists for targeted marketing campaigns.</li>
            <li><strong>ShipStation:</strong> Streamline your order fulfillment process by automatically sending order details to your shipping software.</li>
        </ul>
      </div>
    )
  },
  {
    question: "Why should I integrate WooCommerce using Aonflow?",
    answer: (
      <div>
        <p className="mb-2">Integrating WooCommerce using Aonflow provides several key benefits:</p>
        <ul className="list-disc pl-5 space-y-2">
            <li><strong>Save Time:</strong> Automate repetitive tasks like order entry and inventory updates.</li>
            <li><strong>Reduce Errors:</strong> Minimize human error by eliminating manual data entry.</li>
            <li><strong>Improve Customer Service:</strong> Keep customers informed with automated order status updates and shipping notifications.</li>
            <li><strong>Better Insights:</strong> Get a clearer picture of your business with unified data across all your systems.</li>
        </ul>
      </div>
    )
  },
];

const shopifyAutomationTabs = [
  {
    value: "integration",
    icon: BrainCircuit,
    label: "Integration",
    title: "Shopify integration, made easy",
    subtitle: "Shopify integration made easy and hassle-free",
    content: "Aonflow's iPaaS solutions offer pre-built integrations for Shopify with e-commerce platforms, CRMs, ERPs, and marketing automation tools. Customizable workflows streamline order fulfillment, inventory management, customer data management, and marketing campaigns. Synchronization conditions and triggers automate tasks and create detailed customer records. Pre-built integrations reduce custom coding, while flexible customization options tailor the workflows to business needs.",
    subcontentTitle: "One self-service platform for all your Shopify integration solutions",
    subcontent: "Enjoy real-time data synchronization and error handling while ensuring that data is accurate and up-to-date across all integrated platforms. This enables businesses to make informed decisions quickly and efficiently. Cost-effective and efficient Shopify integration with other platforms and automated processes frees up time for businesses to focus on growth and scaling, and provide a better customer experience."
  },
  {
    value: "automation",
    icon: FileCog,
    label: "Automation",
    title: "Shopify automation, made simple",
    subtitle: "Make it easy to integrate Shopify with other tools and automate key processes",
    content: "Aonflow iPaaS streamlines the e-commerce complexities of Shopify by integrating with CRMs, ERPs, MAPs, and support platforms. Simplify tasks such as inventory management, order processing, marketing campaigns, and customer support through pre-built connectors and drag-and-drop interfaces. Automate your e-commerce workflows without any coding, freeing up your resources and time to focus on other areas of your business.",
    subcontentTitle: "All-in-one intuitive platform for all your Shopify automation solutions",
    subcontent: "Customize your workflows to automate the processes that matter most to your business with Aonflow iPaaS. Easily modify your workflows or add new tools as your business grows and needs change. Streamline e-commerce processes, improve efficiency, reduce errors, and deliver a better customer experience. Our solutions make Shopify automation accessible and powerful for businesses of all sizes."
  },
  {
    value: "use-case",
    icon: Layers,
    label: "Use Case",
    title: "Shopify use case, resolved",
    subtitle: "Streamline Shopify operations and drive revenue growth with iPaaS solutions",
    content: "Automate and streamline operations with Shopify integration. Integrate Shopify with other applications using iPaaS solutions to automatically sync inventory data with ERP or warehouse management systems. This ensures products are always in stock, improving customer satisfaction, and enabling efficient fulfillment processes. Gain insights to drive revenue growth and reduce manual data entry, streamlining operations for your business.",
    subcontentTitle: "The benefits of integrating Shopify with other tools",
    subcontent: "Integrating Shopify with a CRM or order management system automates processes like order creation, tracking, and fulfillment, reducing errors and delays, increasing efficiency, and improving customer experience. Integrating with marketing automation tools enables personalized and targeted campaigns, increasing sales, engagement, and loyalty. Integration with customer service platforms streamlines support processes, providing better experiences and faster response times."
  }
];

export default function ShopifyPage() {
  const [activeTab, setActiveTab] = useState(shopifyAutomationTabs[0].value);
  const [isTabCarouselPaused, setIsTabCarouselPaused] = useState(false);
  
  const autoplay = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );

  useEffect(() => {
    if (isTabCarouselPaused) return;
    const tabRotationInterval = setInterval(() => {
      setActiveTab(prevTab => {
        const currentIndex = shopifyAutomationTabs.findIndex(tab => tab.value === prevTab);
        const nextIndex = (currentIndex + 1) % shopifyAutomationTabs.length;
        return shopifyAutomationTabs[nextIndex].value;
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
                <img src="/shopify.svg" alt="Shopify" className="h-40 w-auto mb-4" />
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl font-headline text-foreground">
                    Shopify Integration
                </h1>
                <p className="mt-4 text-lg text-muted-foreground max-w-3xl">
                   Connect sales channels and streamline operations by integrating Shopify for an efficient business platform and elevated e-commerce.
                </p>
            </AnimateOnScroll>
            
            <AnimateOnScroll delay={0.2}>
              <div className="grid grid-cols-1 gap-8">
                  <Card className="p-6 flex flex-col items-start bg-background/50 backdrop-blur-sm h-full col-span-1 md:col-span-3 rounded-[24px]">
                      <BrainCircuit className="h-10 w-10 text-primary mb-4" />
                      <h3 className="text-2xl font-bold font-headline mb-2">Connect. Integrate. Automate.</h3>
                      <p className="text-muted-foreground flex-grow">
                          Aonflow offers a hassle-free solution to connect your Shopify store to any other service or application. With pre-built connectors and APIs, easily automate workflows and data transfers between systems without writing any code or using additional integration tools. This allows you to streamline your business operations and improve efficiency.
                      </p>
                  </Card>
              </div>
              <div className="grid md:grid-cols-3 gap-8 mt-8">
                  <Card className="p-6 flex flex-col items-start bg-background/50 backdrop-blur-sm h-full rounded-[24px]">
                      <FileCog className="h-10 w-10 text-primary mb-4" />
                      <h3 className="text-2xl font-bold font-headline mb-2">Enterprise insights</h3>
                      <p className="text-muted-foreground flex-grow">Integrate Shopify with ERP for e-commerce insights at an enterprise level, monitoring orders, payments, and invoices effectively.</p>
                  </Card>
                  <Card className="p-6 flex flex-col items-start bg-background/50 backdrop-blur-sm h-full rounded-[24px]">
                      <Layers className="h-10 w-10 text-primary mb-4" />
                      <h3 className="text-2xl font-bold font-headline mb-2">Automate marketing</h3>
                      <p className="text-muted-foreground flex-grow">Integrate Shopify with marketing automation platforms to automate marketing campaigns for repeat business, upselling, cross-selling, and subscriptions.</p>
                  </Card>
                  <Card className="p-6 flex flex-col items-start bg-background/50 backdrop-blur-sm h-full rounded-[24px]">
                      <Repeat className="h-10 w-10 text-primary mb-4" />
                      <h3 className="text-2xl font-bold font-headline mb-2">Shopify streamlined</h3>
                      <p className="text-muted-foreground flex-grow">Integrate Shopify with CRMs to create accurate customer records and with support platforms like Zendesk to enhance customer support during order fulfillment.</p>
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
                    Aonflow iPaaS automates business processes by connecting applications, systems, and data sources. Integrate Shopify with CRMs, ERPs, and MAPs, and automate tasks with workflows that eliminate manual data entry. A range of pre-built connectors and templates make it easy to connect different applications and systems, reducing the need for custom coding. A flexible and scalable solution for integrating Shopify and automating processes.
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
                    {shopifyAutomationTabs.map(tab => (
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
                     <h3 className="text-2xl font-bold mb-6 font-headline text-primary text-center">{shopifyAutomationTabs.find(t => t.value === activeTab)?.title}</h3>
                    {shopifyAutomationTabs.map(tab => (
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
      
      {/* Use Cases Section - commented out as no content was provided for it */}
      {/*
      <section className="py-20 md:py-28 bg-primary/5">
        <div className="container mx-auto px-4 md:px-6">
            <AnimateOnScroll className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold font-headline mb-12">Shopify Integration Use Cases</h2>
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
                {shopifyUseCases.map((useCase, index) => (
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
              Our popular and powerful Shopify connectors
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
                          src="/shopify.svg"
                          alt="Shopify"
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
                      Shopify to Salesforce
                    </p>
                  </Card>
                </CarouselItem>
                <CarouselItem className="basis-full lg:basis-1/2 p-4">
                  <Card className="p-6 bg-background h-full">
                    <div className="flex items-center justify-center gap-8">
                       <div className="w-16 h-16 rounded-lg flex items-center justify-center bg-[#f0f0f0]">
                        <img
                          src="/shopify.svg"
                          alt="Shopify"
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
                      Shopify to Hubspot
                    </p>
                  </Card>
                </CarouselItem>
                <CarouselItem className="basis-full lg:basis-1/2 p-4">
                  <Card className="p-6 bg-background h-full">
                    <div className="flex items-center justify-center gap-8">
                      <div className="w-16 h-16 rounded-lg flex items-center justify-center bg-[#f0f0f0]">
                        <img
                          src="/shopify.svg"
                          alt="Shopify"
                          className="h-12 w-12"
                        />
                      </div>
                      <ArrowRight className="h-8 w-8 text-[#cccccc]" />
                      <div className="w-16 h-16 rounded-lg flex items-center justify-center bg-[#f0f0f0]">
                        <img src="/twilio.svg" alt="Twilio" className="h-12 w-12" />
                      </div>
                    </div>
                    <p className="mt-4 text-center font-medium">
                      Shopify to Twilio
                    </p>
                  </Card>
                </CarouselItem>
                <CarouselItem className="basis-full lg:basis-1/2 p-4">
                  <Card className="p-6 bg-background h-full">
                    <div className="flex items-center justify-center gap-8">
                      <div className="w-16 h-16 rounded-lg flex items-center justify-center bg-[#f0f0f0]">
                        <img
                          src="/shopify.svg"
                          alt="Shopify"
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
                      Shopify to Netsuite
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

      {/* FAQ Section -- commented out as no FAQ provided */}
      {/*
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
      */}

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

    