
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
  FileText
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
} from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { AnimateOnScroll } from '@/components/animate-on-scroll';
import { BackgroundAnimation } from '@/components/background-animation';
import { cn } from '@/lib/utils';
import { useState, useEffect } from 'react';


const transformingFeatures = [
    {
        icon: LineChart,
        title: "Automated Lead Routing",
        description: "Integrate your marketing and sales systems to assign leads to the right sales reps instantly, ensuring faster follow-ups and increased conversion rates."
    },
    {
        icon: Target,
        title: "Shorter Sales Cycles",
        description: "Automate nurturing campaigns to deliver personalized content, keeping leads engaged and shortening the sales cycle."
    },
    {
        icon: BarChart,
        title: "Improved Data Hygiene",
        description: "Maintain accurate data across all platforms by automating data cleansing and enrichment processes."
    },
    {
        icon: Users,
        title: "Increased Efficiency",
        description: "Automate repetitive tasks to free up your marketing team to focus on strategic initiatives."
    }
];

const whyAonflowTabs = [
    {
      value: "align-teams",
      icon: Users,
      label: "Align Teams",
      title: "Align marketing and sales teams for improved performance",
      points: [
        "Break down data silos for a unified view of the customer journey.",
        "Streamline lead handoffs between marketing and sales for faster response times.",
        "Enhance collaboration with a single source of truth for all customer data.",
        "Improve communication with automated notifications and real-time updates.",
        "Foster a data-driven culture with shared dashboards and performance metrics.",
        "Increase accountability by tracking lead progression and campaign performance.",
      ]
    },
    {
      value: "automate-campaigns",
      icon: Zap,
      label: "Automate Campaigns",
      title: "Automate campaigns across multiple channels",
      points: [
        "Deliver a seamless customer experience with automated cross-channel campaigns.",
        "Personalize customer journeys with tailored content and offers based on behavior.",
        "Boost engagement by reaching customers at the right time on their preferred channels.",
        "Increase efficiency with automated campaign management and performance tracking.",
        "Optimize marketing spend with data-driven insights into campaign performance.",
        "Scale your marketing efforts with automated workflows and real-time data sync.",
      ]
    },
    {
      value: "personalize-journeys",
      icon: BrainCircuit,
      label: "Personalize Journeys",
      title: "Personalize customer journeys for better engagement",
      points: [
        "Deliver personalized content and offers based on customer behavior and preferences.",
        "Enhance customer experience with tailored journeys that resonate with individual needs.",
        "Increase conversions with automated nurturing campaigns and personalized follow-ups.",
        "Foster loyalty by building lasting relationships through personalized interactions.",
        "Gain deeper insights into customer behavior with unified data and analytics.",
        "Drive revenue growth with targeted marketing and personalized customer experiences.",
      ]
    }
];

const benefits = [
    {
        icon: Layers,
        title: "Streamlined data management",
        description: "Eliminate data silos, ensure data consistency, and create a single source of truth for all your marketing data.",
        points: [
            "Centralize marketing data for a comprehensive view of your marketing efforts.",
            "Improve data quality with automated cleansing and enrichment processes.",
        ],
    },
    {
        icon: BrainCircuit,
        title: "Enhanced campaign performance",
        description: "Automate campaign management, track performance, and gain data-driven insights to optimize your marketing efforts.",
        points: [
            "Boost campaign ROI with automated A/B testing and performance tracking.",
            "Personalize campaigns with targeted content and offers based on real-time data.",
        ],
    },
    {
        icon: FileCog,
        title: "Increased marketing efficiency",
        description: "Automate repetitive tasks, streamline workflows, and free up your marketing team to focus on strategic initiatives.",
        points: [
            "Improve team productivity with automated lead routing and nurturing campaigns.",
            "Reduce manual work with automated data entry and reporting.",
        ],
    },
    {
        icon: Scaling,
        title: "Improved sales and marketing alignment",
        description: "Streamline lead handoffs, enhance collaboration, and align marketing and sales efforts for improved performance.",
        points: [
            "Accelerate the sales cycle with automated lead scoring and nurturing.",
            "Increase conversion rates with faster follow-ups and personalized engagement.",
        ],
    }
];


export default function MarketingOperationsClientPage() {

    const [activeTab, setActiveTab] = useState(whyAonflowTabs[0].value);
    const [isTabCarouselPaused, setIsTabCarouselPaused] = useState(false);
    const marketingOpsFactImage = PlaceHolderImages.find(p => p.id === 'marketing-ops-fact');
  
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
                    data-ai-hint="marketing operations"
                />
            </AnimateOnScroll>
          </div>
        </div>
      </section>

       {/* Transforming Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
            <AnimateOnScroll className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold font-headline">Automate lead enrichment, routing, and scoring</h2>
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
                       {marketingOpsFactImage && (
                            <Image
                                src={marketingOpsFactImage.imageUrl}
                                alt="Marketing Operations Statistics"
                                width={400}
                                height={400}
                                className="object-contain"
                                data-ai-hint={marketingOpsFactImage.imageHint}
                            />
                        )}
                    </AnimateOnScroll>
                    <AnimateOnScroll delay={0.2}>
                        <h2 className="text-3xl font-bold mb-4">63% of companies outgrowing their competitors use marketing automation</h2>
                        <p className="text-lg opacity-90">
                           Gain a competitive edge by automating your marketing operations. With our powerful iPaaS solution, you can streamline workflows, enhance efficiency, and drive revenue growth. Join the ranks of successful businesses that leverage automation to outperform the competition.
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
                <TabsList className="grid w-full grid-cols-3 h-auto bg-transparent p-0 border-b">
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
