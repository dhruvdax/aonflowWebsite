
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
import { AnimateOnScroll } from '@/components/animate-on-scroll';
import { BackgroundAnimation } from '@/components/background-animation';
import { cn } from '@/lib/utils';

const transformingFeatures = [
    {
        icon: LineChart,
        title: "Shorter sales cycles",
        description: "Implementing sales automation solutions streamlines your processes, expediting deal closures through timely reminders and automated follow-ups, ensuring leads receive proper attention and minimizing missed opportunities."
    },
    {
        icon: Target,
        title: "Higher conversion rate",
        description: "Automation solutions ensure data remains accurate and current, equipping sales reps with critical information, resulting in a consistent flow of leads and increased conversion rates."
    },
    {
        icon: BarChart,
        title: "Better in-depth insights",
        description: "Automation increases the amount and availability of quality data and provides insights into the sales funnel that would not have been possible with manual processes."
    },
    {
        icon: Users,
        title: "Efficient resource allocation",
        description: "Automating operations allows sales reps to focus on more important tasks, freeing them from mundane and repetitive tasks and allowing for better resource allocation."
    }
];

const whyAonflowTabs = [
    {
      value: "insights",
      icon: BrainCircuit,
      label: "Customer Insights",
      title: "Harness data for profound customer insights and understanding",
      points: [
        "Streamline lead transformation: Merge account details, demographics, and behavior analytics for qualified prospects.",
        "Seamlessly integrate global data: Consolidate information from any source worldwide to maximize insights and decision-making capabilities.",
        "Boost engagement and conversions: Automate personalized messages tailored to prospect needs for better engagement and increased conversion rates.",
        "Enhance customer understanding: Analyze data to grasp behavior and preferences, enabling targeted offers and relevant content delivery.",
        "Elevate customer experience: Improved satisfaction, higher sales success rate, and happier customers.",
        "Simplify and automate with Aonflow: Streamline processes, save time, money, and resources, fostering team efficiency and effectiveness."
      ]
    },
    {
      value: "experience",
      icon: Users,
      label: "Customer Experience",
      title: "Revolutionize customer experiences with technology and innovation",
      points: [
        "Streamline sales processes: Aonflow grants visibility and lead time to contributors for RFP responses and automates renewals.",
        "Personalize customer experiences: Identify campaign patterns, recommend products, and detect early churn signals.",
        "Boost productivity with AI automation: Utilize Aonflow's platform for efficient workflows and improved outcomes.",
        "Monitor progress and gain insights: Track performance metrics and real-time customer behavior insights across all channels.",
        "Automate tasks for efficiency: Lead qualification, deal follow-ups, contract notifications, and more to optimize workflow.",
        "Enhance organization-wide efficiency: Aonflow saves time, improves productivity, and helps deliver exceptional customer experiences."
      ]
    },
    {
      value: "reporting",
      icon: FileText,
      label: "Automated Reporting",
      title: "Automate reporting for precise, reliable information from all sources",
      points: [
        "Save time and effort: Integrate apps effortlessly with our streamlined iPaaS solution for enhanced efficiency and time-saving.",
        "Rapid metrics without labor: Empower the sales team with accurate insights—no manual work is needed.",
        "Secure data sync: Connect and update sources seamlessly with Aonflow's reliable platform.",
        "Quick and effortless custom reports: Generate live dashboards and reports with key KPIs in minutes.",
        "Smarter decisions, faster actions: Access powerful analytics for data-driven decision-making at your fingertips.",
        "Real-time performance tracking: Optimize business growth by monitoring the sales pipeline and conversion rates.",
      ]
    }
];

const benefits = [
    {
        icon: Layers,
        title: "Connect all dots for comprehensive customer journey insights",
        description: "Enhance customer experiences through personalization, accessibility, and data accuracy.",
        points: [
            "Deliver personalized service, quicker response times, and meaningful interactions.",
            "Eliminate manual data entry errors, ensuring customers have access to accurate and up-to-date information.",
        ],
    },
    {
        icon: BrainCircuit,
        title: "Leverage the power of artificial intelligence for maximum impact",
        description: "Streamline deal desk operations—efficient, automated, and comprehensive.",
        points: [
            "Simplify and optimize the entire deal desk process from quotes to approvals.",
            "Automate onboarding and data collection for new customers, improving efficiency and reducing manual errors.",
        ],
    },
    {
        icon: FileCog,
        title: "Automate all onboarding and order-to-cash processes",
        description: "Optimize your order-to-cash process through streamlined payments and efficient billing.",
        points: [
            "Simplify your payment process, ensuring a seamless transition for customer success initiatives and billing.",
            "Automate invoice generation, payment monitoring, and fulfillment to save time and improve operational efficiency.",
        ],
    },
    {
        icon: Scaling,
        title: "Unearth lucrative upselling and cross-selling prospects",
        description: "Maximize revenue opportunities by gaining insights and integration for customer growth.",
        points: [
            "Track customer usage and interactions to uncover upsell and cross-sell opportunities.",
            "Automate tracking of account activity to identify upsell and cross-sell opportunities and drive revenue growth.",
        ],
    }
];


export default function SalesPageClient() {
    
  return (
    <div className="bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative w-full bg-gradient-to-r from-primary/10 to-blue-500/10 py-20 md:py-28 lg:py-32 overflow-hidden">
        <BackgroundAnimation className="absolute inset-0 z-0 opacity-30" />
        <div className="container mx-auto px-4 md:px-6 z-10 relative">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <AnimateOnScroll>
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl font-headline text-foreground">
                    Sales Automation
                </h1>
                <p className="mt-6 text-lg text-muted-foreground max-w-xl">
                   Leverage automation for lead conversion, drive sales, and foster lasting customer connections.
                </p>
                <div className="mt-8">
                    <Button asChild size="lg">
                        <Link href="/contact">Book a Demo</Link>
                    </Button>
                </div>
            </AnimateOnScroll>
            <AnimateOnScroll delay={0.2} className="flex justify-center">
                <Image
                    src="/sales/sales-automation.svg"
                    alt="Sales Automation"
                    width={500}
                    height={400}
                    className="object-contain"
                    data-ai-hint="sales automation"
                />
            </AnimateOnScroll>
          </div>
        </div>
      </section>

       {/* Transforming Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
            <AnimateOnScroll className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold font-headline">Instant Access to Buying Signals and Sales Updates</h2>
                <p className="text-muted-foreground mt-4">Sales reps can gain instant access to essential buying signals and sales updates directly from their fingertips</p>
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
                            src="/sales/sales-automation-fact.svg"
                            alt="Sales statistics"
                            width={400}
                            height={400}
                            className="object-contain"
                            data-ai-hint="sales chart"
                        />
                    </AnimateOnScroll>
                    <AnimateOnScroll delay={0.2}>
                        <h2 className="text-3xl font-bold mb-4">+51% of businesses are automating sales processes for improved outcomes</h2>
                        <p className="text-lg opacity-90">
                           Supercharge sales and save time. Automate lead data entry for real-time customer information. Craft personalized messages and ignite engagement. Maximize ROI with automated outreach, tailored sales pitches, and consistent customer engagement across the complete lead life cycle—from initial acquisition to lasting loyalty.
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
                <h2 className="text-3xl font-bold font-headline">Why Aonflow for <span className="text-primary">Sales Automation?</span></h2>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.2}>
            <Tabs defaultValue="insights" className="w-full">
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
                <h2 className="text-3xl font-bold font-headline">Benefits of Aonflow <span className="text-primary">Sales Automation</span></h2>
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
