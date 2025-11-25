
'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  Layers,
  Repeat,
  Zap,
  ShieldCheck,
  TrendingUp,
  Cloud,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Card,
} from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { AnimateOnScroll } from '@/components/animate-on-scroll';
import { BackgroundAnimation } from '@/components/background-animation';
import { 
    SeamlessDataExchangeIcon, 
    AutomatedDataProcessingIcon, 
    EnhancedPatientCareIcon, 
    TransformedHealthcareDeliveryIcon, 
} from '@/components/by-function-icons';
import { 
    IntegrateIcon, 
    ImproveIcon, 
    LeverageIcon, 
    ScaleIcon, 
    OptimizeIcon, 
    SynchronizeIcon, 
    ElevateIcon, 
    UpgradeIcon, 
    EnhanceIcon 
} from '@/components/ecommerce-icons';
import { cn } from '@/lib/utils';
import { useState, useEffect } from 'react';


const transformingFeatures = [
    {
        icon: SeamlessDataExchangeIcon,
        title: "Decrease manual labor",
        description: "Simplify e-commerce store management with iPaaS solutions by automating order fulfillment and customer relationship management to enhance team efficiency and success."
    },
    {
        icon: AutomatedDataProcessingIcon,
        title: "Improve processing time",
        description: "Almost 80% of new recruits grapple with onboarding issues, raising the probability they might decide to exit within 45 days of onboarding."
    },
    {
        icon: EnhancedPatientCareIcon,
        title: "Enhance response time",
        description: "Without an automated system in place, human errors can occur frequently, resulting in unhappy customers and financial losses."
    },
    {
        icon: TransformedHealthcareDeliveryIcon,
        title: "Excellent customer service",
        description: "Automating customer service tasks such as responding to inquiries, managing returns/refunds, and tracking shipments helps ensure customers get the best possible experience."
    }
];

const whyAonflowTabs = [
    {
      value: "streamline",
      icon: ShieldCheck,
      label: "Streamline",
      title: "Streamlined Operations With Secure, No-Code Integration",
      points: [
        "Build and manage integrations easily using Aonflow’s intuitive, no-code interface designed for business users.",
        "Use visual dashboards to understand data flow, track operations, and reduce dependency on IT teams.",
        "Maintain enterprise-grade privacy with strict global compliance and robust security protocols.",
        "Control access at every level, ensuring only authorized users view or manage sensitive information.",
        "Automate everyday workflows like invoicing, payment updates, and order fulfillment to minimize errors.",
        "Protect business data through advanced security features that ensure confidentiality and reliability.",
      ]
    },
    {
      value: "scale",
      icon: TrendingUp,
      label: "Scale",
      title: "Scalable, High-Performance E-commerce for Peak Demand",
      points: [
        "Handle large transaction volumes during peak seasons with a scalable, resilient infrastructure.",
        "Improve conversions with automated follow-up emails that maintain timely communication.",
        "Deliver personalized email journeys based on customer behavior and purchase history.",
        "Create memorable customer experiences with accurate, consistent, and fast service delivery.",
        "Keep customers updated with real-time notifications on orders, deliveries, and promotions.",
        "Leverage a robust, scalable platform that supports continuous growth without limitations.",
      ]
    },
    {
      value: "unify",
      icon: Cloud,
      label: "Unify",
      title: "Unified Data + Pre-built Integrations for Faster Decisions",
      points: [
        "Accelerate deployment using pre-built connectors for Shopify, WooCommerce, ERP, CRM, and other systems.",
        "Achieve seamless data movement across applications with standardized templates—no custom development required.",
        "Gain full visibility into integration flows with transparent monitoring and real-time error tracking.",
        "Sync product data, pricing, inventory, orders, and customer details across systems instantly.",
        "Centralize insights with unified reporting, analytics dashboards, and cloud data warehousing.",
        "Make informed decisions with near real-time data accuracy powering operations, customer service, and growth.",
      ]
    },
    {
      value: "enhance",
      icon: EnhanceIcon,
      label: "Enhance",
      title: "Enhanced Customer Experience Through Automation, Support & Marketing",
      points: [
        "Personalize chatbot and helpdesk interactions by integrating customer data from any system.",
        "Automate FAQ responses and support actions based on customer activity and website behavior.",
        "Improve helpdesk efficiency with workflows that trigger alerts, assign tasks, and escalate cases automatically.",
        "Maintain seamless communication across chat, email, service portals, and other support channels.",
        "Boost customer retention with automated nurturing, re-engagement, and abandoned-cart workflows.",
        "Run multichannel campaigns powered by integrated customer data to increase conversions and ROI.",
      ]
    }
];

const benefits = [
    {
        icon: Layers,
        title: "Expand your business effortlessly for growth",
        description: "Efficient scaling and expansion with automation in e-commerce.",
        points: [
            "Achieve growth and cost optimization through efficient scaling and expansion of e-commerce operations.",
            "Experience the benefits of automation, including reduced operational costs, while enabling growth in your eCommerce business.",
        ]
    },
    {
        icon: Repeat,
        title: "Enhance the customer journey for satisfaction",
        description: "Streamlined order and returns processing for enhanced customer experience.",
        points: [
            "Accelerate refunds and fulfillment through automated order and returns processing, providing real-time updates to customers.",
            "Resolve support cases quickly with a unified customer view, allowing companies to prioritize customer relationship building.",
        ]
    },
    {
        icon: Zap,
        title: "Maximize profits and amplify revenue potential",
        description: "Real-time order and inventory tracking for efficient supply chain management.",
        points: [
            "Ensure accurate forecasting, prompt procurement, and distribution by tracking orders and inventory in real-time.",
            "Avoid potential supply issues by effectively managing stock across digital outlets and warehouses.",
        ]
    },
];


export default function ECommercePage() {

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
                    E-commerce Automation
                </h1>
                <p className="mt-6 text-lg text-muted-foreground max-w-xl">
                   Automate your customers’ online journeys and take control of your marketing campaigns to boost sales and profits.
                </p>
                <div className="mt-8">
                    <Button asChild size="lg">
                        <Link href="/contact">Book a Demo</Link>
                    </Button>
                </div>
            </AnimateOnScroll>
            <AnimateOnScroll delay={0.2} className="flex justify-center">
                 <img
                    src="/e-commerce/ecommerce-automation.svg"
                    alt="E-commerce Automation"
                    width="500"
                    height="400"
                    className="object-contain"
                />
            </AnimateOnScroll>
          </div>
        </div>
      </section>

       {/* Transforming Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
            <AnimateOnScroll className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold font-headline">Automate customer journey for seamless e-commerce experiences</h2>
            </AnimateOnScroll>
             <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
                {transformingFeatures.map((feature, index) => (
                    <AnimateOnScroll key={index} delay={index * 0.1}>
                        <Card className="p-6 h-full flex items-start gap-6 bg-transparent border-0 shadow-none">
                            <div className="text-primary">
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
                            src="/e-commerce/ecommerce-fact.svg"
                            alt="E-commerce fact"
                            width={400}
                            height={400}
                            className="object-contain"
                            data-ai-hint="ecommerce automation"
                        />
                    </AnimateOnScroll>
                    <AnimateOnScroll delay={0.2}>
                        <h2 className="text-3xl font-bold mb-4">72% of successful online businesses leverage automation for maximum growth</h2>
                        <p className="text-lg opacity-90">
                           Streamline your e‑commerce journey with Aonflow's iPaaS platform. Automate processes, integrate applications and maximize growth and efficiency. Scale operations for sustained success in the digital landscape. Experience end‑to‑end automation tailored to your flourishing eCommerce venture; Aonflow helps meet changing needs for enhanced customer satisfaction.
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
                <h2 className="text-3xl font-bold font-headline">Why Aonflow for <span className="text-primary">E-commerce Automation?</span></h2>
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
                <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 h-auto bg-transparent p-0 border-b">
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
                <h2 className="text-3xl font-bold font-headline">Benefits of Aonflow <span className="text-primary">E-commerce Automation</span></h2>
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
