
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
import { AutomateMarketingStackIcon, MaximizeLeadConversionIcon, EnhanceCustomerExperienceIcon, SeamlessIcon, EmpowerIcon } from '@/components/by-function-icons';
import { cn } from '@/lib/utils';

const transformingFeatures = [
    {
        icon: AutomateMarketingStackIcon,
        title: "Automate your entire marketing stack",
        description: "Achieve complete marketing automation with our iPaaS solutions. Integrate applications, automate workflows, and boost your marketing campaigns for unprecedented success."
    },
    {
        icon: MaximizeLeadConversionIcon,
        title: "Maximize lead conversion",
        description: "Supercharge your lead conversion with our iPaaS solutions. Automate lead nurturing, deliver personalized content, and convert prospects into loyal customers."
    },
    {
        icon: EnhanceCustomerExperienceIcon,
        title: "Enhance customer experience",
        description: "Elevate your customer experience with our iPaaS solutions. Gain a comprehensive view, automate personalized interactions, and create lasting relationships with your customers."
    }
];

const whyAonflowTabs = [
    {
      value: "automate",
      icon: Zap,
      label: "Automate",
      title: "Automate your marketing activities and improve outcomes",
      points: [
        "Unleash your full potential: Sync marketing data across platforms, automate lead generation, and enhance customer experience.",
        "Comprehensive marketing insights: Consolidate data from all marketing channels to get a holistic view of your campaigns.",
        "Streamlined marketing operations: Reduce manual tasks and errors, ensuring consistent messaging across all channels.",
        "Data-driven marketing decisions: Leverage real-time data to optimize your marketing campaigns for better outcomes.",
        "Increased marketing efficiency: Automate your marketing stack to save time, reduce costs, and improve your ROI.",
        "Personalized customer engagement: Deliver tailored content and offers to drive engagement and increase conversions.",
      ]
    },
    {
      value: "seamless",
      icon: SeamlessIcon,
      label: "Seamless",
      title: "Seamless integration to align sales & marketing",
      points: [
        "Unified customer journey: Create a seamless customer experience by integrating marketing and sales data.",
        "Improved lead handoffs: Automate lead routing and assignment to ensure timely follow-ups from your sales team.",
        "Enhanced collaboration: Foster collaboration between marketing and sales with a single source of truth for all customer data.",
        "Better lead quality: Align marketing and sales efforts to generate higher-quality leads and improve conversion rates.",
        "Increased sales productivity: Equip your sales team with real-time data and insights to close deals faster.",
        "Accurate performance tracking: Track the entire customer journey from lead to conversion to measure the impact of your marketing efforts.",
      ]
    },
    {
      value: "empower",
      icon: EmpowerIcon,
      label: "Empower",
      title: "Empower marketing teams to do their best work",
      points: [
        "Focus on strategy: Automate repetitive tasks to free up your marketing team to focus on strategic initiatives.",
        "Data-driven decision making: Equip your marketing team with the data and insights they need to make informed decisions.",
        "Improved campaign performance: Optimize your marketing campaigns with real-time data and automated A/B testing.",
        "Enhanced creativity: Foster innovation and creativity by providing your marketing team with the tools they need to succeed.",
        "Increased job satisfaction: Boost morale and job satisfaction by empowering your marketing team to do their best work.",
        "Better business outcomes: Drive revenue growth and improve your bottom line with a high-performing marketing team.",
      ]
    }
];

const benefits = [
    {
        icon: Layers,
        title: "Create a single customer view",
        description: "Unify data for better personalization and decision-making.",
        points: [
            "Centralize customer data from all sources to create a complete and accurate customer profile.",
            "Gain a holistic view of your customers to deliver personalized experiences and targeted marketing campaigns.",
        ],
    },
    {
        icon: Repeat,
        title: "Automate lead nurturing to close more deals",
        description: "Convert more leads into customers with automated lead nurturing campaigns.",
        points: [
            "Deliver personalized content and offers to nurture leads and guide them through the sales funnel.",
            "Increase conversion rates with timely follow-ups and personalized engagement.",
        ],
    },
    {
        icon: Zap,
        title: "Automate reporting for better campaign attribution",
        description: "Track the performance of your marketing campaigns and measure their impact on your business.",
        points: [
            "Automate reporting to save time and get real-time insights into your marketing performance.",
            "Measure the ROI of your marketing campaigns and optimize your marketing spend for better results.",
        ],
    }
];


export default function MarketingPageClient() {
    const marketingFactImage = PlaceHolderImages.find(p => p.id === 'marketing-fact');
    
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
                   Maximize your marketing potential with our automation solutions for remarkable results at every stage of your business.
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
                <h2 className="text-3xl font-bold font-headline">Automate marketing to drive growth and scale</h2>
            </AnimateOnScroll>
             <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
                {transformingFeatures.map((feature, index) => (
                    <AnimateOnScroll key={index} delay={index * 0.1}>
                        <Card className="p-6 h-full text-center flex flex-col items-center bg-transparent border-0 shadow-none">
                            <div className="text-primary flex-shrink-0">
                                <feature.icon className="h-16 w-16" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold font-headline mb-2 mt-4">{feature.title}</h3>
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
                        {marketingFactImage && (
                            <Image
                                src={marketingFactImage.imageUrl}
                                alt="Marketing statistics"
                                width={400}
                                height={400}
                                className="object-contain"
                                data-ai-hint={marketingFactImage.imageHint}
                            />
                        )}
                    </AnimateOnScroll>
                    <AnimateOnScroll delay={0.2}>
                        <h2 className="text-3xl font-bold mb-4">76% of companies using marketing automation generate a positive ROI within a year</h2>
                        <p className="text-lg opacity-90">
                           Unlock your marketing potential with our automation solutions. Seamlessly integrate your marketing stack, automate workflows, and drive revenue growth. With our iPaaS solutions, you can create a single customer view, personalize customer journeys, and measure the impact of your marketing campaigns. Join the ranks of successful businesses that leverage automation to achieve their marketing goals.
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

            <AnimateOnScroll delay={0.2}>
            <Tabs defaultValue="automate" className="w-full">
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
                <h2 className="text-3xl font-bold font-headline">Benefits of Aonflow <span className="text-primary">Marketing Automation</span></h2>
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
