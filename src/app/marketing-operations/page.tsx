
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
  FileCheck,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Card,
} from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { AnimateOnScroll } from '@/components/animate-on-scroll';
import { BackgroundAnimation } from '@/components/background-animation';
import { 
    ReliableDataQualityIcon,
    AgilityScalabilityIcon,
    ExceptionalCustomerExperienceIcon,
    AutomateMarketingStackIcon,
    MaximizeLeadConversionIcon,
    EnhanceCustomerExperienceIcon
} from '@/components/by-function-icons';
import { cn } from '@/lib/utils';
import { useState, useEffect } from 'react';


const transformingFeatures = [
    {
        icon: ReliableDataQualityIcon,
        title: "Transparent reporting insights",
        description: "Achieve comprehensive and timely insights across all marketing operations with our automated solutions, empowering effective decision-making and maximizing marketing performance."
    },
    {
        icon: Users,
        title: "Segmentation and targeting",
        description: "Efficiently segment your customers and prospects into custom segments for targeted marketing using our automated solutions, ensuring effective and precise messaging."
    },
    {
        icon: AgilityScalabilityIcon,
        title: "Efficient resource utilization",
        description: "Streamline your marketing operations with our iPaaS automated solutions, saving time and reducing stress, resulting in improved engagement and increased ROI."
    },
    {
        icon: ExceptionalCustomerExperienceIcon,
        title: "Excellent customer experience",
        description: "Mitigate the risk of human errors and enhance customer experience by leveraging our automated solutions for consistent and trustworthy brand messaging."
    }
];

const whyAonflowTabs = [
    {
      value: "elevate",
      icon: EnhanceCustomerExperienceIcon,
      label: "Elevate",
      title: "Elevate strategic marketing operations and drive organizational impact",
      points: [
        "End integration struggles: Save time and effort by integrating apps with our streamlined solution.",
        "Swift integration solutions: Quick and easy app integration to elevate your marketing strategy's speed, efficiency, and innovation.",
        "Streamline your operations: Transmit data seamlessly and address lead, account, and process challenges with one-click automation.",
        "Fuel growth and innovation: Equip your business with automated workflows at the forefront of technological advancements.",
        "Full marketing automation made easy: Automate your entire marketing stack with our user-friendly platform.",
        "Embrace efficiency and effectiveness: Simplify your marketing operations and achieve optimal results with our automation capabilities.",
      ]
    },
    {
      value: "simplify",
      icon: MaximizeLeadConversionIcon,
      label: "Simplify",
      title: "Simplify marketing efforts and automate lead management effortlessly",
      points: [
        "Say goodbye to everyday task‑juggling: Simplify your workflow by automating repetitive processes with Aonflow.",
        "Effortlessly upload leads: Sync CSV lists instantly with your marketing automation software using Aonflow's webhooks.",
        "Streamline lead enrichment: Integrate your data provider with event management and CRM software for efficient lead enrichment.",
        "Accelerate your team’s productivity: Achieve more in less time with Aonflow's powerful iPaaS Platform and solutions.",
        "Seamless lead acquisition: Capture and manage leads effortlessly with Aonflow's streamlined solution.",
        "Enhance efficiency and productivity: Optimize your lead management process with Aonflow's comprehensive platform.",
      ]
    },
     {
      value: "automate",
      icon: AutomateMarketingStackIcon,
      label: "Automate",
      title: "Automate sales pipeline with visually engaging workflows",
      points: [
        "Elevate marketing operations: Boost data accuracy, accelerate lead generation, and gain comprehensive campaign insights.",
        "Streamlined lead process: Automate uploading, scoring, qualification, routing, and assignment for improved follow‑up efficiency.",
        "Simplify automation: Create intricate processes effortlessly, connecting your entire stack with loops, triggers, and branches.",
        "Maximize efficiency: Integrate data sources, automate actions, and leverage advanced analytics for superior marketing performance.",
        "Optimize lead management: Seamlessly track, score, and nurture leads through automated workflows for increased conversions.",
        "Personalize experiences: Utilize dynamic content, behavior triggers, and tailored campaigns to engage customers at every touchpoint.",
      ]
    },
    {
      value: "unify",
      icon: Layers,
      label: "Unify",
      title: "Unify marketing automation tools for maximum efficiency",
      points: [
        "Transform your marketing operations: Amplify data accuracy, accelerate lead generation, and gain thorough campaign insight.",
        "Streamline your lead process: Automate uploading, scoring, qualification, routing, and assignment for improved follow‑up.",
        "Create complex automation: Connect your stack effortlessly with loops, triggers, and branches for seamless integration.",
        "Enhance personalization: Deliver targeted messages at each stage of the customer journey for maximum impact.",
        "Optimize marketing performance: Analyze data, measure ROI, and make data‑driven decisions for successful campaigns.",
        "Unify your marketing tools: Centralize and consolidate your software under one roof for streamlined operations.",
      ]
    },
    {
      value: "seamless",
      icon: ShieldCheck,
      label: "Seamless",
      title: "Seamlessly integrate MarTech tools with no hidden costs or maintenance",
      points: [
        "Transform marketing operations: Boost efficiency, accuracy, and innovation with streamlined data integration and automation.",
        "Simplify lead management: Automate tasks like uploading, scoring, and routing for seamless follow‑up and nurturing.",
        "Create dynamic workflows: Connect your marketing tools effortlessly with loops, triggers, and branches for customized automation.",
        "Maximize data insights: Combine and analyze data from various MarTech tools to measure performance and attribution.",
        "Enhance customer engagement: Personalize experiences at every touchpoint, leveraging email personalization and account‑based marketing strategies.",
        "Drive growth and ROI: Optimize campaigns, measure results, and refine strategies based on comprehensive analytics.",
      ]
    }
];

const benefits = [
    {
        icon: Scaling,
        title: "Optimize operations for maximum efficiency and productivity",
        description: "Streamline lead management for improved efficiency and higher conversion rates.",
        points: [
            "Automate processes to free up resources for higher‑value projects and tasks, boosting productivity.",
            "Maximize lead flow and conversion rates with automated lead scoring, enrichment, qualification, and routing."
        ],
    },
    {
        icon: FileCheck,
        title: "Experience improved accuracy with precise data‑driven processes",
        description: "Streamline operations for enhanced data accuracy and efficiency.",
        points: [
            "Eliminate errors, enhance accuracy, and drive efficiency for optimal data management and streamlined operations.",
            "Gain real‑time insights, quickly identify and address issues, and reallocate resources for strategic initiatives and higher‑value tasks."
        ],
    },
    {
        icon: Zap,
        title: "Cost savings achieved through iPaaS for marketing operations automation",
        description: "Reduce costs and ensure compliance by streamlining operations and ensuring data quality.",
        points: [
            "Eliminate manual labor costs and resource wastage by reducing errors and inefficiencies in processes.",
            "Maintain compliance with industry regulations and company policies through automated audits and data quality monitoring."
        ],
    },
     {
        icon: Users,
        title: "Enhanced customer satisfaction through improved experience",
        description: "Enhance customer experiences through personalization, accessibility, and data accuracy.",
        points: [
            "Deliver personalized service, quicker response times, and meaningful interactions.",
            "Eliminate manual data entry errors, ensuring customers have access to accurate and up‑to‑date information."
        ],
    },
];


export default function MarketingOperationsPage() {
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
                    Marketing Operations Automation
                </h1>
                <p className="mt-6 text-lg text-muted-foreground max-w-xl">
                   Leverage the power of automation to elevate your business through strategic marketing operations.
                </p>
                <div className="mt-8">
                    <Button asChild size="lg">
                        <Link href="/contact">Book a Demo</Link>
                    </Button>
                </div>
            </AnimateOnScroll>
            <AnimateOnScroll delay={0.2} className="flex justify-center">
                <Image
                    src="/marketing-operations/marketing-operations-automation.svg"
                    alt="Marketing Operations Automation"
                    width={500}
                    height={400}
                    className="object-contain"
                    data-ai-hint="marketing operations automation"
                />
            </AnimateOnScroll>
          </div>
        </div>
      </section>

       {/* Transforming Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
            <AnimateOnScroll className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold font-headline">Streamline marketing operations, incorporate software, and achieve more</h2>
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
                            src="/marketing-operations/marketing-operations-fact.svg"
                            alt="Marketing statistics"
                            width={400}
                            height={400}
                            className="object-contain"
                            data-ai-hint="marketing chart"
                        />
                    </AnimateOnScroll>
                    <AnimateOnScroll delay={0.2}>
                        <h2 className="text-3xl font-bold mb-4">81% of companies use marketing operations automation to drive growth</h2>
                        <p className="text-lg opacity-90">
                           Streamline operations with marketing automation, linking tech stack pieces and removing the guesswork from sales engagement. Become a strategic marketing operations leader by automating lead generation and unifying data across MarTech applications for consolidated performance reporting.
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
                <h2 className="text-3xl font-bold font-headline">Why Aonflow for <span className="text-primary">Marketing Operations Automation?</span></h2>
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
                <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 h-auto bg-transparent p-0 border-b">
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
                <h2 className="text-3xl font-bold font-headline">Benefits of Aonflow <span className="text-primary">Marketing Operations Automation</span></h2>
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
    

    
