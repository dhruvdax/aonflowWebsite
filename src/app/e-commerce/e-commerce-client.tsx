
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
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
} from '@/components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { AnimateOnScroll } from '@/components/animate-on-scroll';
import { BackgroundAnimation } from '@/components/background-animation';
import { 
    IntegrateIcon,
    ImproveIcon,
    LeverageIcon,
    ScaleIcon,
    OptimizeIcon,
    SynchronizeIcon,
    ElevateIcon,
    UpgradeIcon,
    EnhanceIcon,
} from '@/components/ecommerce-icons';
import { cn } from '@/lib/utils';

const transformingFeatures = [
    {
        icon: IntegrateIcon,
        title: "Integrate, automate and grow",
        description: "Maximize growth by optimizing your eCommerce tech stack with integrated automation solutions. Overcome challenges, unlock your store’s full potential and achieve greater results."
    },
    {
        icon: ImproveIcon,
        title: "Improve efficiency, reduce cost",
        description: "Streamline operations with our intuitive platform, boosting efficiency and cutting costs. Say goodbye to manual data entry and enjoy a seamless workflow."
    },
    {
        icon: LeverageIcon,
        title: "Leverage customer data",
        description: "Gain a competitive edge by leveraging customer data for targeted marketing and exceptional experiences. Boost satisfaction with an all-encompassing view."
    },
    {
        icon: ScaleIcon,
        title: "Scale at your own pace",
        description: "Scale your eCommerce business with confidence. Our adaptable solutions grow with you, ensuring future success and long-term sustainability."
    }
];

const whyAonflowTabs = [
    {
      value: "optimize",
      icon: OptimizeIcon,
      label: "Optimize",
      title: "Optimize for higher conversion rates",
      points: [
        "Simplify integration – Effortlessly integrate with marketing and CRM tools to drive conversions and enhance customer experience.",
        "Gain a competitive edge – Stay ahead with real-time data sync, enabling proactive customer engagement for improved retention and loyalty.",
        "Maximize revenue growth – Streamline your eCommerce operations and marketing efforts, ensuring a seamless journey from lead to conversion.",
        "Unified data integration – Seamlessly sync customer and order data, providing a unified view of your eCommerce business.",
        "Automated marketing campaigns – Automate personalized marketing campaigns and follow-ups to drive higher engagement and conversion rates.",
        "Enhanced customer experience – Provide a seamless shopping experience by automating order tracking, and personalized recommendations."
      ]
    },
    {
      value: "synchronize",
      icon: SynchronizeIcon,
      label: "Synchronize",
      title: "Synchronize orders, payments, fulfillment and returns",
      points: [
        "Effortless order management – Automate the entire order fulfillment process, from real-time inventory updates to shipping and tracking.",
        "Simplified returns process – Automate and streamline the returns process, making it hassle-free for customers and your team.",
        "Accurate inventory management – Ensure accurate and up-to-date inventory levels across all sales channels with real-time data sync.",
        "Secure payment processing – Automate payment processing and reconciliation, ensuring secure transactions and timely revenue recognition.",
        "Seamless shipping and tracking – Automate shipping and tracking notifications to keep customers informed and enhance their experience.",
        "Streamlined financials – Sync order and payment data with your accounting software for accurate and efficient financial management."
      ]
    },
    {
      value: "elevate",
      icon: ElevateIcon,
      label: "Elevate",
      title: "Elevate customer experience for higher retention",
      points: [
        "Personalized marketing campaigns – Deliver tailored marketing campaigns and product recommendations to enhance the customer experience.",
        "Real-time customer support – Integrate with your helpdesk to provide instant and personalized support, boosting satisfaction.",
        "Automated follow-ups and feedback – Automate follow-up emails and surveys to gather feedback and improve customer retention.",
        "Unified customer view – Gain a complete view of your customers to provide personalized service and build lasting relationships.",
        "Proactive customer engagement – Proactively engage with customers through automated notifications and personalized recommendations.",
        "Enhanced customer loyalty – Foster loyalty by delivering exceptional customer experiences and building lasting relationships."
      ]
    },
];

const benefits = [
    {
        icon: UpgradeIcon,
        title: "Upgrade your e-commerce operations",
        description: "Automate and streamline your operations to work smarter, not harder.",
        points: [
            "Scale your business by connecting and automating with our iPaaS solutions.",
            "Eliminate data silos, reduce costs, and accelerate your growth without boundaries.",
        ],
    },
    {
        icon: EnhanceIcon,
        title: "Enhance your customer journey",
        description: "Gain profound insights into your customers with our comprehensive platform.",
        points: [
            "Achieve a 360-degree view of your customer journey by automating your tech stack.",
            "Create exceptional customer experiences with Aonflow's intuitive solutions.",
        ],
    }
];


export default function ECommerceClientPage() {
    const ecommerceFact = PlaceHolderImages.find(p => p.id === 'ecommerce-fact');
    
  return (
    <div className="bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative w-full bg-gradient-to-r from-primary/10 to-blue-500/10 py-20 md:py-28 lg:py-32 overflow-hidden">
        <BackgroundAnimation className="absolute inset-0 z-0 opacity-30" />
        <div className="container mx-auto px-4 md:px-6 z-10 relative">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <AnimateOnScroll>
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl font-headline text-foreground">
                    eCommerce Automation
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
                <Image
                    src="/e-commerce/ecommerce-automation.svg"
                    alt="eCommerce Automation"
                    width={500}
                    height={400}
                    className="object-contain"
                    data-ai-hint="e-commerce automation"
                />
            </AnimateOnScroll>
          </div>
        </div>
      </section>

       {/* Transforming Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
            <AnimateOnScroll className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold font-headline">Automated eCommerce integration for your online business</h2>
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
                            src="/e-commerce/ecommerce-automation-fact.svg"
                            alt="eCommerce statistics"
                            width={400}
                            height={400}
                            className="object-contain"
                            data-ai-hint="e-commerce chart"
                        />
                    </AnimateOnScroll>
                    <AnimateOnScroll delay={0.2}>
                        <h2 className="text-3xl font-bold mb-4">65% of businesses see an ROI within 3 months</h2>
                        <p className="text-lg opacity-90">
                           Optimize your operations and accelerate growth with our powerful iPaaS integration solutions. By automating processes, you can streamline workflows and free up resources for strategic initiatives. Experience the transformative impact of our platform as it enhances efficiency, reduces manual tasks, and propels your business toward its goals.
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
                <h2 className="text-3xl font-bold font-headline">Why Aonflow for <span className="text-primary">eCommerce Automation?</span></h2>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.2}>
            <Tabs defaultValue="optimize" className="w-full">
                <TabsList className="grid w-full grid-cols-3 h-auto bg-transparent p-0 border-b">
                    {whyAonflowTabs.map(tab => (
                        <TabsTrigger 
                            key={tab.value} 
                            value={tab.value} 
                            className="flex flex-col gap-2 h-auto py-4 px-2 data-[state=active]:bg-transparent bg-transparent text-muted-foreground data-[state=active]:text-primary data-[state=active]:shadow-[inset_0_-2px_0_hsl(var(--primary))] rounded-none"
                        >
                            <tab.icon className="h-8 w-8 transition-colors"/>
                            <span className="text-sm capitalize">{tab.label}</span>
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
                <h2 className="text-3xl font-bold font-headline">Benefits of Aonflow <span className="text-primary">eCommerce Automation</span></h2>
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
