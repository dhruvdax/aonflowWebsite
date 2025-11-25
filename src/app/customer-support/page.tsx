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
  Eye,
  XCircle,
  BarChart,
  GitBranch,
  Star,
  BrainCircuit,
  FileCog
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
} from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { AnimateOnScroll } from '@/components/animate-on-scroll';
import { BackgroundAnimation } from '@/components/background-animation';
import { cn } from '@/lib/utils';
import { useState, useEffect } from 'react';
import { EmpowerIcon } from '@/components/by-function-icons';


const transformingFeatures = [
    {
        icon: Eye,
        title: "Gain complete visibility",
        description: "Eliminate blind spots and gain full visibility into the customer journey with multiple layers of point‑and‑click automation. Automate tasks and processes that are repetitive and tedious."
    },
    {
        icon: XCircle,
        title: "Eliminate human errors",
        description: "Streamline processes and eliminate human errors with built‑in automation. Automate manual tasks like orders, customer service, payments and more while maintaining a high quality level."
    },
    {
        icon: Users,
        title: "Optimize customer engagement",
        description: "Empower your customers with tailored experiences using Aonflow’s iPaaS automated solutions, personalized recommendations and timely notifications for higher customer satisfaction, retention and increased brand loyalty."
    },
    {
        icon: Check,
        title: "Improve issue resolution",
        description: "Add value for customers by automating issue resolution. Quickly identify and remediate customer issues with smart automation, reducing the time it takes to resolve them."
    }
];

const whyAonflowTabs = [
    {
      value: "insights",
      icon: Layers,
      label: "Holistic Insights",
      title: "Achieve a complete customer journey with holistic insights",
      points: [
        "Unified customer data – stay ahead with real-time updates and harness the power of data consolidation.",
        "Predict churn & create tickets – automate data capture, gain insights and swiftly address user obstacles with IPA.",
        "Personalized offers, nurturing customers – automated promotions and tailored discounts based on purchase history and website activity.",
        "Analyze cart abandonment data – leverage AI‑driven analytics for customer insights and comprehensive reporting capabilities.",
        "Automate customer service – pre‑define conditions to streamline inquiries, notifications and process refunds for efficient processes.",
        "Real‑time monitoring for engagement – achieve complete understanding and make smarter decisions by monitoring interactions in real time."
      ]
    },
    {
      value: "intelligent-support",
      icon: BrainCircuit,
      label: "Intelligent Support",
      title: "Get intelligent support instantly with our AI‑powered system",
      points: [
        "Swift customer issue resolution – escalate and resolve problems effortlessly, minimizing downtime and maximizing service efficiency.",
        "Boost productivity with automation – eliminate tedious task transitions, maximizing efficiency and reducing manual effort.",
        "Real‑time response to inquiries – integrate essential applications for prompt and efficient customer support services for enhanced resolution.",
        "Unify support – integrate your customer support stack with Aonflow’s iPaaS for a streamlined and cohesive experience.",
        "Efficient support for operations – consolidate processes for streamlined customer support, maximizing productivity and service effectiveness.",
        "Exceptional support experiences – maximize customer satisfaction with Aonflow’s iPaaS, delivering excellence at every customer interaction."
      ]
    },
    {
      value: "feedback",
      icon: EmpowerIcon,
      label: "Feedback Power",
      title: "Unleash the power of customer feedback to maximize service impact",
      points: [
        "Seamless integration – connect customer service and development tools, eliminating extra labour and streamlining processes.",
        "Comprehensive support – address bugs, improvements and queries efficiently by leveraging integrated applications for a holistic response.",
        "Customer satisfaction insights – collect feedback on product features, usage patterns and valuable information to enhance product value.",
        "Improved bug resolution – swiftly resolve bugs by leveraging the integration between customer service and development tools.",
        "Enhancing user experience – gather insights on usage patterns across geographical locations to optimize product performance and usability.",
        "Data‑driven decision‑making – leverage customer feedback and information to make informed decisions for service improvements."
      ]
    },
     {
      value: "prevent-churn",
      icon: ShieldCheck,
      label: "Prevent Churn",
      title: "Take action now to prevent customer churn in the future",
      points: [
        "AI‑powered proactive approach – utilize AI to anticipate roadblocks and address user churn, contacting users at critical moments.",
        "An agile platform for growth – adapt to evolving business needs with an automation‑driven solution supporting operational changes.",
        "Deliver exceptional service – use automation to provide tailored customer experiences that meet customers’ needs.",
        "Timely customer engagement – leverage AI insights to reach out to users when it truly matters for a positive impact.",
        "Future‑proof customer service – embrace automation to stay ahead, offering excellent support as your business evolves.",
        "Tailored experiences for customers – use automation to personalize interactions and enhance customer satisfaction."
      ]
    }
];

const benefits = [
    {
        icon: Users,
        title: "Enhanced customer satisfaction through optimized experience",
        description: "The benefits of customer service automation: enhancing experiences and reducing costs.",
        points: [
            "Streamlined customer service – automation empowers businesses to prioritize creating exceptional experiences while reducing operational costs.",
            "Focus on excellence – with automated processes in place, businesses can devote more attention to delivering exceptional customer experiences.",
        ]
    },
    {
        icon: Star,
        title: "Enhanced customer experience for greater satisfaction",
        description: "Accelerating customer satisfaction – automation reduces wait time and expedites inquiry resolution.",
        points: [
            "By leveraging automation, businesses can deliver prompt resolutions, elevating overall customer satisfaction levels.",
        ]
    },
    {
        icon: Zap,
        title: "Boosted efficiency and heightened productivity levels",
        description: "Optimizing productivity – streamline customer service operations with automation.",
        points: [
            "Automation simplifies customer service processes, allowing agents to prioritize complex tasks and improve productivity.",
            "By leveraging automation, businesses can allocate agent resources efficiently, maximizing productivity and enhancing customer service quality.",
        ]
    },
    {
        icon: Scaling,
        title: "Enhanced collaboration and increased visibility benefits",
        description: "Enhancing customer service efficiency through the power of automation:",
        points: [
            "Unified communication – automation enables seamless communication, improving visibility and collaboration across customer service channels.",
            "Rapid issue identification – with automation, businesses achieve faster response times, swiftly identifying and addressing potential issues for enhanced customer service.",
        ]
    },
    {
        icon: Layers,
        title: "Enhanced scalability for optimized business expansion",
        description: "Scalable solutions – automated customer service for enhanced efficiency.",
        points: [
            "Scalable and adaptable – automated solutions adapt to business growth, improving function, efficiency and time‑saving.",
            "Consistent handling – automation ensures consistent customer service inquiries handling, regardless of business size or complexity, with Aonflow’s solutions.",
        ]
    }
];


export default function CustomerSupportPage() {

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
                    Customer Support Automation
                </h1>
                <p className="mt-6 text-lg text-muted-foreground max-w-xl">
                   Revolutionize your customer experience and drive revenue with intelligent automation solutions.
                </p>
                <div className="mt-8">
                    <Button asChild size="lg">
                        <Link href="/contact">Book a Demo</Link>
                    </Button>
                </div>
            </AnimateOnScroll>
            <AnimateOnScroll delay={0.2} className="flex justify-center">
                <Image
                    src="/customer-support/customer-support-automation.svg"
                    alt="Customer Support Automation"
                    width={500}
                    height={400}
                    className="object-contain"
                    data-ai-hint="customer support"
                />
            </AnimateOnScroll>
          </div>
        </div>
      </section>

       {/* Transforming Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
            <AnimateOnScroll className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold font-headline">Supercharge customer support: streamline, automate and elevate</h2>
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
                            src="/customer-support/customer-support-fact.svg"
                            alt="Customer Support statistics"
                            width={400}
                            height={400}
                            className="object-contain"
                            data-ai-hint="customer experience chart"
                        />
                    </AnimateOnScroll>
                    <AnimateOnScroll delay={0.2}>
                        <h2 className="text-3xl font-bold mb-4">83% of customers trust brands that prioritize exemplary customer experience</h2>
                        <p className="text-lg opacity-90">
                           Maximize customer experience with Aonflow iPaaS. Harness the power of Artificial Intelligence (AI), Intelligent Process Automation (IPA) and advanced analytics to optimize operations, gain comprehensive insight and achieve real‑time visibility across all channels. Benefit from automated workflows, precise analysis and reliable service while keeping clients updated and avoiding unnecessary complications.
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
                <h2 className="text-3xl font-bold font-headline">Why Aonflow for <span className="text-primary">Customer Support Automation?</span></h2>
                 <p className="mt-4 text-muted-foreground">
                    Aonflow’s approach is holistic, intelligent, maximizes results and delivers instant outcomes.
                </p>
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
                <h2 className="text-3xl font-bold font-headline">Benefits of Aonflow <span className="text-primary">Customer Support Automation</span></h2>
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
