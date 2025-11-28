
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
        title: "Automate product development cycles",
        description: "Enhance product and development cycles with automation, streamlining processes, reducing time to market and increasing efficiency and productivity."
    },
    {
        icon: Target,
        title: "Automate feature requests and product feedback",
        description: "Streamline product development by automating feature requests and feedback, ensuring valuable insights are captured and prioritized for enhanced innovation and customer satisfaction."
    },
    {
        icon: BarChart,
        title: "Automate product analytics",
        description: "Automate product analytics to gain valuable insights, track performance, and make data-driven decisions for continuous product improvement and success."
    },
    {
        icon: Users,
        title: "Automate your issue-to-resolution process",
        description: "Automate the issue-to-resolution process for faster and more efficient problem-solving, improving customer satisfaction and freeing up resources for other important tasks."
    }
];

const whyAonflowTabs = [
    {
      value: "automate-development",
      icon: Zap,
      label: "Automate Development",
      title: "Automate development cycles to ship products faster",
      points: [
        "Streamline product development with automated workflows for increased efficiency and productivity.",
        "Accelerate time to market by automating manual tasks and reducing development cycles.",
        "Enhance collaboration between teams with a single source of truth for all product data.",
        "Improve product quality with automated testing and quality assurance processes.",
        "Foster innovation with a data-driven approach to product development.",
        "Scale your development efforts with automated workflows and real-time data sync.",
      ]
    },
    {
      value: "gather-feedback",
      icon: Users,
      label: "Gather Feedback",
      title: "Gather product feedback for better product decisions",
      points: [
        "Automate the collection of product feedback to gain valuable insights into customer needs.",
        "Centralize feedback from all channels to create a comprehensive view of customer sentiment.",
        "Prioritize feature requests and product enhancements based on data-driven insights.",
        "Improve customer satisfaction by addressing feedback and making product improvements.",
        "Foster a customer-centric culture by involving customers in the product development process.",
        "Drive product innovation with a continuous feedback loop and data-driven decision making.",
      ]
    },
    {
      value: "track-performance",
      icon: LineChart,
      label: "Track Performance",
      title: "Track product performance and make data-driven decisions",
      points: [
        "Automate product analytics to track key performance indicators and measure success.",
        "Gain real-time insights into product usage and user behavior to identify areas for improvement.",
        "Optimize your product roadmap with data-driven insights into feature adoption and usage.",
        "Improve user engagement with personalized experiences and targeted marketing campaigns.",
        "Enhance product-market fit with a data-driven approach to product development.",
        "Drive revenue growth with a deep understanding of your product's performance.",
      ]
    }
];

const benefits = [
    {
        icon: Layers,
        title: "Streamlined product development",
        description: "Automate your product development lifecycle to reduce time to market and increase efficiency.",
        points: [
            "Centralize product data for a comprehensive view of your product development efforts.",
            "Improve collaboration between teams with a single source of truth for all product data.",
        ],
    },
    {
        icon: BrainCircuit,
        title: "Enhanced product innovation",
        description: "Automate feedback collection and analysis to gain valuable insights and drive product innovation.",
        points: [
            "Prioritize feature requests and product enhancements based on data-driven insights.",
            "Foster a customer-centric culture by involving customers in the product development process.",
        ],
    },
    {
        icon: FileCog,
        title: "Improved product quality",
        description: "Automate testing and quality assurance processes to ensure a high-quality product.",
        points: [
            "Reduce bugs and issues with automated testing and continuous integration.",
            "Deliver a better user experience with a high-quality, reliable product.",
        ],
    },
    {
        icon: Scaling,
        title: "Increased team productivity",
        description: "Automate repetitive tasks to free up your product team to focus on strategic initiatives.",
        points: [
            "Improve team productivity with automated workflows and real-time data sync.",
            "Reduce manual work with automated data entry and reporting.",
        ],
    }
];


export default function ProductProcessClientPage() {
    const productProcessFactImage = PlaceHolderImages.find(p => p.id === 'product-process-fact');
    
  return (
    <div className="bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative w-full bg-gradient-to-r from-primary/10 to-blue-500/10 py-20 md:py-28 lg:py-32 overflow-hidden">
        <BackgroundAnimation className="absolute inset-0 z-0 opacity-30" />
        <div className="container mx-auto px-4 md:px-6 z-10 relative">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <AnimateOnScroll>
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl font-headline text-foreground">
                    Product and Process Automation
                </h1>
                <p className="mt-6 text-lg text-muted-foreground max-w-xl">
                   Build products that customers want, when they want it, how they want it.
                </p>
                <div className="mt-8">
                    <Button asChild size="lg">
                        <Link href="/contact">Book a Demo</Link>
                    </Button>
                </div>
            </AnimateOnScroll>
            <AnimateOnScroll delay={0.2} className="flex justify-center">
                <Image
                    src="/product-process/product-process-automation.svg"
                    alt="Product and Process Automation"
                    width={500}
                    height={400}
                    className="object-contain"
                    data-ai-hint="product process"
                />
            </AnimateOnScroll>
          </div>
        </div>
      </section>

       {/* Transforming Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
            <AnimateOnScroll className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold font-headline">Automate your entire product development lifecycle</h2>
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
                       {productProcessFactImage && (
                            <Image
                                src={productProcessFactImage.imageUrl}
                                alt="Product and Process Statistics"
                                width={400}
                                height={400}
                                className="object-contain"
                                data-ai-hint={productProcessFactImage.imageHint}
                            />
                        )}
                    </AnimateOnScroll>
                    <AnimateOnScroll delay={0.2}>
                        <h2 className="text-3xl font-bold mb-4">80% of product leaders say that automation is critical for their success</h2>
                        <p className="text-lg opacity-90">
                           Gain a competitive advantage by automating your product development and processes. Our iPaaS solution empowers you to streamline workflows, improve efficiency, and accelerate time to market. Join the ranks of successful product leaders who leverage automation to drive innovation and growth.
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
                <h2 className="text-3xl font-bold font-headline">Why Aonflow for <span className="text-primary">Product and Process Automation?</span></h2>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.2}>
            <Tabs defaultValue="automate-development" className="w-full">
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
                <h2 className="text-3xl font-bold font-headline">Benefits of Aonflow <span className="text-primary">Product and Process Automation</span></h2>
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
