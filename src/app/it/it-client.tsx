
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
import { AnimateOnScroll } from '@/components/animate-on-scroll';
import { BackgroundAnimation } from '@/components/background-animation';
import { SeamlessDataExchangeIcon, AutomatedDataProcessingIcon, EnhancedPatientCareIcon, TransformedHealthcareDeliveryIcon, OptimizeIcon, SeamlessIcon, StrategicIcon, CentralizeIcon, EfficientIcon, EmpowerIcon } from '@/components/by-function-icons';
import { cn } from '@/lib/utils';
import { useState, useEffect } from 'react';


const transformingFeatures = [
    {
        icon: SeamlessDataExchangeIcon,
        title: "All-in-one integration platform",
        description: "Connect any two services with ease, customize them to suit your needs and expand as you move forward with our powerful integration capabilities of iPaaS."
    },
    {
        icon: AutomatedDataProcessingIcon,
        title: "Rapid time-to-value",
        description: "Maximize your benefits with an intuitive tool. Our one-stop iPaaS solution gets everything up and running in no time, transforming the way you do business."
    },
    {
        icon: EnhancedPatientCareIcon,
        title: "Reduced ownership costs",
        description: "Build intricate integrations with any system, ensure businesses have instant access to powerful tools, and enable the flexible transition of control to business users."
    },
    {
        icon: TransformedHealthcareDeliveryIcon,
        title: "Optimized business value",
        description: "Leverage the power of business data with a powerful integration platform, get insights and scale resources on demand to meet the needs of your enterprise."
    }
];

const whyAonflowTabs = [
    {
      value: "optimize",
      icon: OptimizeIcon,
      label: "Optimize",
      title: "Deliver on each initiative swiftly and efficiently",
      points: [
        "Automated sales and marketing: Elevate your sales, marketing and customer experience through streamlined business processes.",
        "Effortless employee onboarding: Simplify complex workflows and reduce manual tasks by seamlessly connecting and automating technologies.",
        "Optimized operations: Enhance efficiency by automating repetitive tasks, eliminating bottlenecks and optimizing resource allocation.",
        "Power of automation: Drive growth and success by harnessing automation’s potential to increase operational efficiency and unlock new opportunities.",
        "Seamless integration: Transform your business with streamlined workflows, enhanced collaboration and elimination of silos.",
        "Operational excellence: Achieve efficiency and accuracy by automating key functions, boosting overall efficiency.",
      ]
    },
    {
      value: "maximize",
      icon: Scaling,
      label: "Maximize",
      title: "Maximize efficiency with a high-velocity workflow builder",
      points: [
        "Simplified automation: Eliminate complex coding by using the drag-and-drop builder to create and launch automation effortlessly.",
        "Real-time responsiveness: Respond instantly to triggers such as form submissions and webhook calls, ensuring prompt actions.",
        "Rapid prototyping: Prototype and iterate automation and integration solutions swiftly to meet evolving business requirements.",
        "Streamlined collaboration: Collaborate seamlessly across teams by leveraging the high-velocity workflow builder, enabling efficient coordination.",
        "Enhanced scalability: Scale your workflows effortlessly, accommodating increased workloads and growing business demands.",
        "Agile adaptability: Quickly adapt to changing business needs and requirements by leveraging the flexibility of the high-velocity workflow builder.",
      ]
    },
    {
      value: "flexible",
      icon: GitBranch,
      label: "Flexible",
      title: "Effortlessly tackle tasks with flexible development options",
      points: [
        "Simplified task management: Effortlessly handle tasks with flexible development options for increased efficiency and productivity.",
        "Adapts to changing needs: Seamlessly tackle tasks by leveraging the flexibility of development options.",
        "Streamlined workflows: Effortlessly optimize processes by utilizing flexible development options tailored to your requirements.",
        "Enhanced agility: Easily tackle diverse tasks with the versatility provided by the flexible development options of iPaaS.",
        "Improved collaboration: Effortlessly collaborate on tasks using flexible development options to foster teamwork for enhanced productivity.",
        "Maximize productivity: Seamlessly accomplish tasks with ease by leveraging the flexibility of development options.",
      ]
    },
    {
      value: "centralize",
      icon: CentralizeIcon,
      label: "Centralize",
      title: "Unify teams and projects on one platform",
      points: [
        "Streamlined collaboration: Unify teams and projects on one platform to enhance communication and cooperation.",
        "Centralize project management: Effortlessly manage multiple projects and teams in one unified platform.",
        "Simplify workflow integration: Unify teams and projects on a single platform to streamline workflow integration.",
        "Enhance visibility: Gain a comprehensive view of all teams and projects by unifying them on one platform.",
        "Foster cross-functional collaboration: Unify teams from different departments to encourage collaboration and knowledge sharing.",
        "Boost efficiency: By unifying teams and projects on one platform, maximize productivity and eliminate silos.",
      ]
    },
    {
      value: "instant",
      icon: Zap,
      label: "Instant",
      title: "Instantly connect with only a few clicks",
      points: [
        "Simplify integration: Instantly connect with various applications and databases, including popular cloud stacks.",
        "Expand connectivity options: Leverage a wide range of connectors to integrate marketing, sales, service and finance apps effortlessly.",
        "Accelerate integration projects: Jumpstart your integration efforts and get new integrations up and running quickly.",
        "Seamless REST API integration: Utilize our Universal Connector to seamlessly integrate any REST API from day one.",
        "Efficient data exchange: With just a few clicks, establish instant connections for smooth data exchange between systems.",
        "Rapid implementation: Connect with ease and eliminate time-consuming manual integrations, saving valuable IT resources.",
      ]
    },
];

const benefits = [
    {
        icon: Layers,
        title: "Instantly detect, analyze and solve issues",
        description: "Streamline issue resolution with automated data integration and collaborative ticket escalation.",
        points: [
            "Minimize resolution time by quickly identifying and addressing issues through streamlined data integration from various sources.",
            "Automatically escalate tickets using our collaboration tools, ensuring timely assignment and evaluation for efficient issue resolution.",
        ],
    },
    {
        icon: Repeat,
        title: "Intelligent support solution for efficient helpdesk assistance",
        description: "Harnessing the power of AI: providing instant answers and swift issue resolution for customers.",
        points: [
            "Aonflow utilizes AI to deliver instant answers from a knowledge base, ensuring quick customer issue resolution.",
            "Effortlessly resolve customer inquiries with Aonflow’s AI-powered platform, providing instant access to a comprehensive knowledge base.",
        ],
    },
    {
        icon: Zap,
        title: "Secure and smooth employee onboarding and offboarding",
        description: "Streamlining operations for efficient resource management and opportunity maximization.",
        points: [
            "Automate equipment provisioning, deprovisioning, payroll updates and finance management to prevent missed opportunities and enhance efficiency.",
            "Stay up to date with approvals and reports, ensuring nothing goes unnoticed while streamlining operations for optimal resource management.",
        ],
    },
    {
        icon: ShieldCheck,
        title: "Efficient and automated incident escalation process",
        description: "Streamlined ticket escalation and collaborative resolution: boosting efficiency and productivity.",
        points: [
            "Minimize the negative impact of context switching by enabling ticket escalation within your primary applications.",
            "Facilitate seamless collaboration among team members within the same channel for efficient and effective issue resolution.",
        ],
    },
];


export default function ITClientPage() {

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
                    Information Technology Automation
                </h1>
                <p className="mt-6 text-lg text-muted-foreground max-w-xl">
                   All-in-one integration platform streamlines IT and operations, empowering core business elements.
                </p>
                <div className="mt-8">
                    <Button asChild size="lg">
                        <Link href="/contact">Book a Demo</Link>
                    </Button>
                </div>
            </AnimateOnScroll>
            <AnimateOnScroll delay={0.2} className="flex justify-center">
                <Image
                    src="/it/it-automation.png"
                    alt="IT Automation"
                    width={500}
                    height={400}
                    className="object-contain"
                    data-ai-hint="IT automation"
                />
            </AnimateOnScroll>
          </div>
        </div>
      </section>

       {/* Transforming Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
            <AnimateOnScroll className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold font-headline">Unify IT operations with <span className="text-primary">powerful integration</span></h2>
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
                            src="/it/information-technology-fact.png"
                            alt="IT professional at work"
                            width={400}
                            height={400}
                            className="object-contain"
                            data-ai-hint="IT professional"
                        />
                    </AnimateOnScroll>
                    <AnimateOnScroll delay={0.2}>
                        <h2 className="text-3xl font-bold mb-4">58 % of IT teams spend 5+ hours weekly on repeated tasks</h2>
                        <p className="text-lg opacity-90">
                           Streamline operations, automate tasks and improve customer service with Aonflow’s powerful iPaaS solution. Connect applications seamlessly, monitor integrations and transfer data with ease. Overcome the challenges of data silos and manual processes. Leverage the Aonflow iPaaS Platform for efficient integrations and process automation. Achieve scalability with Aonflow’s serverless architecture.
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
                <h2 className="text-3xl font-bold font-headline">Why Aonflow for <span className="text-primary">IT Automation?</span></h2>
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
                <h2 className="text-3xl font-bold font-headline">Benefits of Aonflow <span className="text-primary">IT Automation</span></h2>
            </AnimateOnScroll>

            <div className="grid grid-cols-1 gap-8 max-w-5xl mx-auto">
                 {benefits.map((benefit, index) => (
                    <AnimateOnScroll key={index} delay={index * 0.1}>
                        <Card className="rounded-lg text-card-foreground shadow-sm h-full p-8 border-0 bg-white/50 backdrop-blur-sm">
                            <div className="grid md:grid-cols-2 gap-8 items-center">
                                <div className="flex flex-col items-start text-left">
                                    <div className="bg-white/50 text-primary p-3 rounded-lg self-start mb-4">
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
