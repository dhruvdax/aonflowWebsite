
'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  ShieldCheck,
  Zap,
  Layers,
  Repeat,
  Scaling,
  Users,
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
    AccurateDataAnalysisIcon,
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
        title: "Reliable data quality",
        description: "Enhance data quality by automating manual processes, guaranteeing precise insights and dependable metrics, while empowering informed decision‑making and driving business success."
    },
    {
        icon: AccurateDataAnalysisIcon,
        title: "Accurate data analysis",
        description: "Eliminate human error in data analysis by automating the process, enabling informed decision‑making based on accurate and reliable data insights."
    },
    {
        icon: AgilityScalabilityIcon,
        title: "Agility and scalability",
        description: "Embrace automation to overcome the limitations of manual processes, enhancing efficiency and scalability and reducing fatigue, enabling business growth and optimization."
    },
    {
        icon: ExceptionalCustomerExperienceIcon,
        title: "Exceptional customer experience",
        description: "Leverage automation to ensure marketers can deliver timely and relevant messages, seizing opportunities and enhancing the customer experience for optimal results."
    }
];

const whyAonflowTabs = [
    {
      value: "automate",
      icon: AutomateMarketingStackIcon,
      label: "Automate",
      title: "Automate the flow of data across your marketing stack",
      points: [
        "Enhanced insights: Accelerate your growth by unlocking marketing metrics and ensuring consistent data effortlessly.",
        "Optimize ROI: Improve marketing performance, reduce costs, and maximize your returns on investment.",
        "Efficiency boost: Save time and increase productivity by automating repetitive processes and implementing channels.",
        "Customer-centric approach: Unify customer data to gain a holistic view of their journey and preferences.",
        "Deep customer understanding: Gain visibility into customer behavior to come up with personalized marketing strategies.",
        "Robust data security: Ensure comprehensive multi-level protection to safeguard your valuable information.",
      ]
    },
    {
      value: "maximize",
      icon: MaximizeLeadConversionIcon,
      label: "Maximize",
      title: "Take advantage of every lead to maximize metrics conversion",
      points: [
        "Enhanced lead enrichment: Fuel your marketing team’s success with accurate lead matching and real‑time lead routing.",
        "Precision messaging: Leverage Aonflow’s automation tools to deliver customized messages at the perfect moment.",
        "Timely and relevant communication: Engage the right customers with dynamic personalization capabilities powered by Aonflow.",
        "Automated segmentation: Increase engagement levels by utilizing Aonflow's automated segmentation for targeted marketing campaigns.",
        "Maximize customer experiences: Deliver timely, relevant, and engaging messages for optimal customer engagement.",
        "Advanced automation for success: Leverage Aonflow’s cutting‑edge tools to enhance your marketing team’s effectiveness and results.",
      ]
    },
    {
      value: "enhance",
      icon: EnhanceCustomerExperienceIcon,
      label: "Enhance",
      title: "Enhance your customer experience with automated personalization",
      points: [
        "Personalized customer journey: Enhance each stage with email personalization and account‑based marketing strategies.",
        "Full marketing automation: Automate your entire marketing stack with ease using our platform.",
        "Drive effective campaigns: Leverage our marketing automation solution for better customer experiences, higher ROI, and valuable insights.",
        "Comprehensive security and analytics: Our powerful platform ensures robust analytics capabilities and comprehensive security measures.",
        "Scalable automation: Automate more processes as your company grows with our adaptable solution.",
        "Maximize efficiency: Streamline marketing operations, saving time and resources, while optimizing productivity with our automation solution.",
      ]
    }
];

const benefits = [
    {
        icon: Layers,
        title: "Streamlined strategic planning and performance optimization",
        description: "Crafting budgets for activities has never been easier—no longer do you have to waste time on manual labor.",
        points: [
            "Streamline business operations by connecting ERP systems to marketing and project management tools, strategizing plans, and making smart investments.",
            "Track progress and impact, ensuring business success and growth with comprehensive analytics and reporting capabilities.",
        ]
    },
    {
        icon: Repeat,
        title: "Automated asset searchability and collaboration to revolutionize your workflow",
        description: "With this tool, tedious manual searching is a thing of the past—save time and energy with our automated solution!",
        points: [
            "Simplify data searches and real-time collaboration, enabling seamless collaboration among multiple users on shared tasks.",
            "Consolidate ticketing systems, asset management tools, and creative applications into a unified platform for streamlined operations and communication.",
        ]
    },
    {
        icon: Users,
        title: "Lead acquisition and management have never been easier",
        description: "Stop wasting time manually tracking contacts; go digital for a streamlined experience that will save you time and money.",
        points: [
            "Efficiently organize leads, track interactions, and nurture relationships to convert prospects into customers, enhancing decision-making insights.",
            "Seamlessly integrate with marketing automation and CRM platforms to streamline the lead process, enabling quick actions and maximizing conversions."
        ]
    },
    {
        icon: Zap,
        title: "Harness the power of automated upsell and cross-sell campaigns",
        description: "Gain insights into customer behavior, and know which products may be suitable for upsell or cross-sell opportunities.",
        points: [
            "Utilize automated campaigns to target customers based on their buying patterns, boosting revenue and loyalty.",
            "Leverage product usage analytics for tailored expansion campaigns and employ account-based advertising to mitigate customer cancellation risks.",
        ]
    },
     {
        icon: Scaling,
        title: "Analyze touch-point impact on customer journeys and revenue",
        description: "Track and analyze the entire customer journey to gain valuable insights into each user's experience and interactions.",
        points: [
            "Drive revenue and foster loyalty by leveraging automated campaigns that target customers based on their buying patterns.",
            "Optimize growth with tailored expansion campaigns using product usage analytics and mitigate customer cancellation risks through account-based advertising.",
        ]
    }
];


export default function MarketingPage() {
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
                    Marketing Automation
                </h1>
                <p className="mt-6 text-lg text-muted-foreground max-w-xl">
                   Maximize marketing potential for remarkable results across all stages of your business.
                </p>
                <div className="mt-8">
                    <Button asChild size="lg">
                        <Link href="/contact">Book a Demo</Link>
                    </Button>
                </div>
            </AnimateOnScroll>
            <AnimateOnScroll delay={0.2} className="flex justify-center">
                <Image
                    src="/marketing/marketing-automation.svg"
                    alt="Marketing Automation"
                    width={500}
                    height={400}
                    className="object-contain"
                    data-ai-hint="marketing automation"
                />
            </AnimateOnScroll>
          </div>
        </div>
      </section>

       {/* Transforming Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
            <AnimateOnScroll className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold font-headline">Automate and accelerate marketing tasks effortlessly</h2>
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
                            src="/marketing/marketing-fact.svg"
                            alt="Marketing statistics"
                            width={400}
                            height={400}
                            className="object-contain"
                            data-ai-hint="marketing chart"
                        />
                    </AnimateOnScroll>
                    <AnimateOnScroll delay={0.2}>
                        <h2 className="text-3xl font-bold mb-4">79% of businesses leverage automation to power marketing efforts</h2>
                        <p className="text-lg opacity-90">
                           Aonflow's iPaaS Platform revolutionizes marketing with API-based workflows, precise data insights, and seamless integration across channels. It offers a secure, reliable, and scalable enterprise-grade solution, empowering businesses of all sizes to accelerate growth and deliver targeted campaigns with confidence.
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
                <h2 className="text-3xl font-bold font-headline">Why Aonflow for <span className="text-primary">Marketing Automation?</span></h2>
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
                <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 h-auto bg-transparent p-0 border-b">
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
                <h2 className="text-3xl font-bold font-headline">Benefits of Aonflow <span className="text-primary">Marketing Automation</span></h2>
            </AnimateOnScroll>

            <div className="grid grid-cols-1 gap-8 max-w-5xl mx-auto">
                 {benefits.map((benefit, index) => (
                    <AnimateOnScroll key={index} delay={index * 0.1}>
                        <Card className="h-full p-8 border-0 bg-white/50 backdrop-blur-sm">
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
                    <Link href="/contact">See demo</Link>
                </Button>
            </AnimateOnScroll>
        </section>

    </div>
  );
}

    
