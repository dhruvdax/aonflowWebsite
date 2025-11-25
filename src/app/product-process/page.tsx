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
  GitBranch,
  Goal
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
    OptimizeIcon, 
    SeamlessIcon, 
    StrategicIcon, 
    CentralizeIcon, 
    EfficientIcon, 
    EmpowerIcon 
} from '@/components/by-function-icons';
import { cn } from '@/lib/utils';
import { useState, useEffect } from 'react';


const transformingFeatures = [
    {
        icon: SeamlessDataExchangeIcon,
        title: "No integration backlog",
        description: "Unlock your product's potential with customizable integrations. Say goodbye to integration backlogs and take control of your building process, all while enhancing the customer experience."
    },
    {
        icon: AutomatedDataProcessingIcon,
        title: "Supercharge integration (10×)",
        description: "With limitless connectors from APIs to databases, apps and custom applications, plus advanced business‑logic capabilities, be empowered to create any type of connectivity solution."
    },
    {
        icon: EnhancedPatientCareIcon,
        title: "Transform customer experiences",
        description: "Deploy exceptional configuration tools for developers and offer a tailored yet seamless experience to customers activating workflows with just a few in‑app clicks."
    },
    {
        icon: TransformedHealthcareDeliveryIcon,
        title: "Infinitely scalable platform",
        description: "Gain access to an enterprise‑grade cloud‑based architecture and avoid sudden surges of traffic. Unlock customer information from virtually any asset, simplifying your business processes."
    }
];

const whyAonflowTabs = [
    {
      value: "connect",
      icon: Users,
      label: "Connect",
      title: "Answer “Yes” to “Do you connect with ‘anything’?”",
      points: [
        "Code‑free integration – harness the power of SaaS applications, databases, AI services and APIs without writing code.",
        "Versatile connectivity – connect to Salesforce, synchronize ticketing systems or create a chatbot effortlessly.",
        "Streamlined customer service – Aonflow’s integration platform reduces manual effort, enabling agents to focus on complex tasks and enhancing productivity.",
        "Unified communication – benefit from unified communication and improved visibility into customer service processes.",
        "Consistent customer experience – ensure a consistent customer experience while optimizing business operations with Aonflow.",
        "Unlock your product’s potential – take control of your business‑building process with Aonflow and unlock your product’s full potential.",
      ]
    },
    {
      value: "goals",
      icon: Goal,
      label: "Goals",
      title: "Your goals can be achieved with Aonflow iPaaS",
      points: [
        "Unified platform – streamline customer processes for data syncing, workflow automation, web‑service access and messaging integration.",
        "Code‑free connectivity – connect your product to external services effortlessly without the need for complex manual coding.",
        "Customizable and tailored – Aonflow provides a customized solution to fit your customer’s specific needs.",
        "Comprehensive integration – Aonflow is the all‑in‑one cloud integration platform you’ll ever need to impact all of your product optimization potentials.",
        "Simplified workflows – automate processes and improve efficiency with Aonflow’s user‑friendly interface.",
        "Seamless connectivity – enable easy integration with popular messaging platforms and other external services using Aonflow.",
      ]
    },
    {
      value: "integration",
      icon: GitBranch,
      label: "Integration",
      title: "Make integration processes uniquely yours with custom options",
      points: [
        "Elevated brand experience – integrate effortlessly to elevate your brand and align with your company’s aesthetics.",
        "Tailored resources and integrations – empower customers with personalized resources and custom integrations through secure sign‑on authentication.",
        "User‑friendly connectivity – create connectivity solutions without requiring a technical team, bringing your product ideas to life instantly.",
        "Effortless integration – Aonflow provides a seamless integration experience for a hassle‑free implementation process.",
        "Secure single sign‑on – ensure the security of customer access with a secure single sign‑on authentication feature.",
        "Rapid product realization – with Aonflow, turn your product ideas into reality instantly, without the need for extensive technical expertise.",
      ]
    },
    {
      value: "scalability",
      icon: Scaling,
      label: "Scalability",
      title: "Built and designed for enterprise‑level safety and scalability",
      points: [
        "Leading iPaaS provider – harness the immense capabilities of a top iPaaS provider with unlimited scalability.",
        "Trusted security – businesses of all sizes rely on Aonflow’s robust security measures to safeguard their data.",
        "Streamlined admin console – efficiently manage customer accounts through a user‑friendly admin console.",
        "Simplified product launch – get your product to market faster without complex coding or lengthy processes.",
        "Time‑saving solution – eliminate time‑consuming tasks, allowing focus on core business activities.",
        "Assured business security – rest easy knowing that your business is secure with Aonflow’s trusted, reliable iPaaS solutions.",
      ]
    },
    {
      value: "execute",
      icon: Zap,
      label: "Execute",
      title: "Seize every moment, and execute expeditiously with Aonflow",
      points: [
        "Rapid integration experience – transform your customer’s integration process within days using pre‑built access, automated workflows, adaptable embedding and powerful APIs.",
        "Exceed customer expectations – satisfy product demands beyond your customers’ imagination, delivering an exceptional experience.",
        "Improved experience and shorter timelines – customers will appreciate the enhanced experience and reduced time‑to‑market.",
        "Simplified development – bid farewell to tedious coding and long development cycles, making your product vision a reality.",
        "Comprehensive cloud integration – Aonflow is the ultimate platform to efficiently integrate with any app.",
        "Accelerated product realization – bring your product idea to life faster with the help of Aonflow’s efficient integration capabilities.",
      ]
    }
];

const benefits = [
    {
        icon: Layers,
        title: "Deployment and scalable solutions for growth",
        description: "Accelerate product automation deployment.",
        points: [
            "The speed of deploying solutions is crucial for effective product automation.",
            "Quickly implement automation solutions to streamline your product operations and maximize efficiency.",
        ],
    },
    {
        icon: Repeat,
        title: "Seamless connection and efficient data exchange",
        description: "Streamline product integration with Aonflow iPaaS.",
        points: [
            "Aonflow iPaaS enables fast and easy integration between products and services.",
            "Simplify the process of connecting disparate systems, making product automation seamless and efficient.",
        ],
    },
    {
        icon: Zap,
        title: "Simplified ongoing system maintenance and updates",
        description: "Simplify product maintenance with Aonflow.",
        points: [
            "Aonflow simplifies the process of product maintenance, reducing development and operational costs.",
            "Streamline your product management workflow and optimize resource allocation for improved efficiency and profitability.",
        ],
    },
    {
        icon: ShieldCheck,
        title: "Optimized resource allocation, reduced manual tasks",
        description: "Faster and cost‑effective product automation with Aonflow.",
        points: [
            "Aonflow enables faster and cost‑effective product automation by eliminating manual intervention, saving time and money.",
            "Automate your products seamlessly, accelerate time‑to‑market and improve overall operational efficiency for better business outcomes.",
        ],
    },
    {
        icon: Scaling,
        title: "Faster time‑to‑market for competitive advantage",
        description: "Simplify product development with Aonflow’s no‑code approach.",
        points: [
            "Aonflow eliminates the need for complex coding and lengthy development cycles through pre‑built access, automated workflows and powerful APIs.",
            "Streamline your product development process, save time and resources and accelerate time‑to‑market with Aonflow’s intuitive and efficient solution.",
        ],
    }
];


export default function ProductProcessPage() {

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
                    Product & Process Automation
                </h1>
                <p className="mt-6 text-lg text-muted-foreground max-w-xl">
                   Build products that customers want; when they want it; how they want it.
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
                    data-ai-hint="product process automation"
                />
            </AnimateOnScroll>
          </div>
        </div>
      </section>

       {/* Transforming Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
            <AnimateOnScroll className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold font-headline">Empower sales with seamless integrations, efficiently</h2>
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
                            src="/product-process/product-automation-fact.svg"
                            alt="Product creation process chart"
                            width={400}
                            height={400}
                            className="object-contain"
                            data-ai-hint="product creation chart"
                        />
                    </AnimateOnScroll>
                    <AnimateOnScroll delay={0.2}>
                        <h2 className="text-3xl font-bold mb-4">20–40 % and more gains when businesses streamline product creation processes</h2>
                        <p className="text-lg opacity-90">
                           Build comprehensive 360‑degree patient profiles in Salesforce Health Cloud with pre‑built connectors, APIs, templates and recommended end‑to‑end frameworks.  The platform integrates electronic health records (EHRs), incorporating patient demographics and COVID‑19 test results using HL7 V2 ADT (Admit‑Discharge‑Transfer) or FHIR standards.  USCDI and FHIR R4 resources ensure interoperability, expediting healthcare digital transformation.
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
                <h2 className="text-3xl font-bold font-headline">Why Aonflow for <span className="text-primary">product automation?</span></h2>
                <p className="mt-4 text-muted-foreground">Aonflow’s product automation approach addresses five key areas: <strong>Connect</strong>, <strong>Goals</strong>, <strong>Integration</strong>, <strong>Scalability</strong> and <strong>Execute</strong>.</p>
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
                <h2 className="text-3xl font-bold font-headline">Benefits of Aonflow <span className="text-primary">Product Automation</span></h2>
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
