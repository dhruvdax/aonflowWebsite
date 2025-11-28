
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

const transformingFeatures = [
    {
        icon: LineChart,
        title: "Automate Lead-to-Account Matching",
        description: "Streamline your sales process by automatically matching leads to the right accounts, ensuring a seamless handoff from marketing to sales."
    },
    {
        icon: Target,
        title: "Automated Lead Routing and Scoring",
        description: "Assign leads to the right sales reps instantly and score them based on their engagement and demographics, ensuring faster follow-ups and increased conversion rates."
    },
    {
        icon: BarChart,
        title: "Automated Sales Analytics",
        description: "Gain real-time insights into your sales performance with automated dashboards and reports, enabling data-driven decisions and continuous improvement."
    },
    {
        icon: Users,
        title: "Automated Territory and Quota Management",
        description: "Optimize your sales territories and quotas with automated management, ensuring fair distribution and maximizing sales performance."
    }
];

const whyAonflowTabs = [
    {
      value: "automate-processes",
      icon: Zap,
      label: "Automate Processes",
      title: "Automate sales processes for increased efficiency",
      points: [
        "Streamline lead-to-cash workflows with automated lead routing and scoring.",
        "Accelerate the sales cycle with automated nurturing campaigns and follow-ups.",
        "Improve sales productivity by automating repetitive tasks and manual data entry.",
        "Enhance collaboration between sales and marketing with a single source of truth.",
        "Foster a data-driven sales culture with real-time dashboards and analytics.",
        "Increase accountability by tracking sales performance and pipeline progression.",
      ]
    },
    {
      value: "gain-visibility",
      icon: Layers,
      label: "Gain Visibility",
      title: "Gain visibility into your sales pipeline",
      points: [
        "Get a comprehensive view of your sales pipeline with a centralized data hub.",
        "Track lead progression and identify bottlenecks in your sales process.",
        "Forecast sales with greater accuracy using real-time data and analytics.",
        "Optimize your sales process with data-driven insights into what's working.",
        "Improve sales performance with a deep understanding of your sales pipeline.",
        "Drive revenue growth with a data-driven approach to sales operations.",
      ]
    },
    {
      value: "empower-team",
      icon: Users,
      label: "Empower Your Team",
      title: "Empower your sales team with the right tools",
      points: [
        "Equip your sales team with the data and insights they need to close deals faster.",
        "Automate repetitive tasks to free up your sales team to focus on selling.",
        "Improve sales productivity with a streamlined sales process and automated workflows.",
        "Enhance collaboration between sales and marketing with a single source of truth.",
        "Foster a data-driven sales culture with real-time dashboards and analytics.",
        "Increase job satisfaction by empowering your sales team to do their best work.",
      ]
    }
];

const benefits = [
    {
        icon: Layers,
        title: "Streamlined sales operations",
        description: "Automate and streamline your sales operations to increase efficiency and productivity.",
        points: [
            "Centralize sales data for a comprehensive view of your sales pipeline.",
            "Improve sales forecasting with real-time data and analytics.",
        ],
    },
    {
        icon: BrainCircuit,
        title: "Enhanced sales performance",
        description: "Automate sales processes to improve sales performance and drive revenue growth.",
        points: [
            "Accelerate the sales cycle with automated lead scoring and nurturing.",
            "Increase conversion rates with faster follow-ups and personalized engagement.",
        ],
    },
    {
        icon: FileCog,
        title: "Increased sales productivity",
        description: "Automate repetitive tasks to free up your sales team to focus on selling.",
        points: [
            "Improve team productivity with automated workflows and real-time data sync.",
            "Reduce manual work with automated data entry and reporting.",
        ],
    },
    {
        icon: Scaling,
        title: "Improved sales and marketing alignment",
        description: "Streamline lead handoffs, enhance collaboration, and align sales and marketing efforts for improved performance.",
        points: [
            "Accelerate the sales cycle with automated lead scoring and nurturing.",
            "Increase conversion rates with faster follow-ups and personalized engagement.",
        ],
    }
];


export default function SalesOperationsClientPage() {
    const salesOpsFactImage = PlaceHolderImages.find(p => p.id === 'sales-ops-fact');
    
  return (
    <div className="bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative w-full bg-gradient-to-r from-primary/10 to-blue-500/10 py-20 md:py-28 lg:py-32 overflow-hidden">
        <BackgroundAnimation className="absolute inset-0 z-0 opacity-30" />
        <div className="container mx-auto px-4 md:px-6 z-10 relative">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <AnimateOnScroll>
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl font-headline text-foreground">
                    Sales Operations Automation
                </h1>
                <p className="mt-6 text-lg text-muted-foreground max-w-xl">
                   Take control of your global sales automation. Streamline workflows, connect apps, and maximize your sales team's potential with Aonflow.
                </p>
                <div className="mt-8">
                    <Button asChild size="lg">
                        <Link href="/contact">Book a Demo</Link>
                    </Button>
                </div>
            </AnimateOnScroll>
            <AnimateOnScroll delay={0.2} className="flex justify-center">
                <Image
                    src="/sales-operations/sales-operations-automation.svg"
                    alt="Sales Operations Automation"
                    width={500}
                    height={400}
                    className="object-contain"
                    data-ai-hint="sales operations"
                />
            </AnimateOnScroll>
          </div>
        </div>
      </section>

       {/* Transforming Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
            <AnimateOnScroll className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold font-headline">Automate sales operations and unleash your sales team’s potential</h2>
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
                       {salesOpsFactImage && (
                            <Image
                                src={salesOpsFactImage.imageUrl}
                                alt="Sales Operations Statistics"
                                width={400}
                                height={400}
                                className="object-contain"
                                data-ai-hint={salesOpsFactImage.imageHint}
                            />
                        )}
                    </AnimateOnScroll>
                    <AnimateOnScroll delay={0.2}>
                        <h2 className="text-3xl font-bold mb-4">Companies that automate sales operations see a 10% increase in lead conversion rates</h2>
                        <p className="text-lg opacity-90">
                           Unlock your sales potential with our automation solutions. Seamlessly integrate your sales stack, automate workflows, and drive revenue growth. With our iPaaS solutions, you can create a single source of truth, personalize customer journeys, and measure the impact of your sales campaigns. Join the ranks of successful businesses that leverage automation to achieve their sales goals.
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
                <h2 className="text-3xl font-bold font-headline">Why Aonflow for <span className="text-primary">Sales Operations Automation?</span></h2>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.2}>
            <Tabs defaultValue="automate-processes" className="w-full">
                <TabsList className="grid w-full grid-cols-3 h-auto bg-transparent p-0 border-b">
                    {whyAonflowTabs.map(tab => (
                        <TabsTrigger 
                            key={tab.value} 
                            value={tab.value} 
                            className="flex flex-col gap-2 h-auto py-4 px-2 data-[state=active]:bg-transparent bg-transparent text-muted-foreground data-[state=active]:text-primary data-[state=active]:shadow-[inset_0_-2px_0_hsl(var(--primary))] rounded-none"
                        >
                            <tab.icon className="h-8 w-8 transition-colors"/>
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
                <h2 className="text-3xl font-bold font-headline">Benefits of Aonflow <span className="text-primary">Sales Operations Automation</span></h2>
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
