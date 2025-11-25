
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
  Target,
  RefreshCw,
  LayoutGrid
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
        icon: GitBranch,
        title: "Drive operational efficiencies",
        description: "Achieve visibility and control of your supply chain. See inventory levels, order status and supplier performance with real‑time data and insights across your supply chain."
    },
    {
        icon: Scaling,
        title: "Flexibility, agility, scalability",
        description: "Take advantage of market changes and supply‑chain disruptions. Adjust operations without additional resources and meet customer demands by swiftly switching fulfillment locations."
    },
    {
        icon: Check,
        title: "Access comprehensive insights",
        description: "Increase transparency in your supply chain, giving you instant access to inventory levels across locations. Say goodbye to delays in procurement, manufacturing and distribution."
    },
    {
        icon: Layers,
        title: "Reduce operational costs",
        description: "Streamline stock management, order processing, supplier communications and logistics processes. Avoid overstocking issues, delays and manual tasks while minimizing the risk of errors."
    }
];

const whyAonflowTabs = [
    {
      value: "seamless",
      icon: SeamlessIcon,
      label: "Seamless",
      title: "Streamline order fulfillment with seamless integration",
      points: [
        "Efficient order processing – automate the order‑fulfillment process by integrating sales systems with ERP or warehouse systems.",
        "Real‑time data synchronization – automatically sync sales orders, shipment statuses and inventory levels for accurate and up‑to‑date information.",
        "Improved visibility – gain a comprehensive view of order fulfillment to track progress and identify bottlenecks.",
        "Enhanced customer experience – provide timely updates on order status, improving customer satisfaction and loyalty.",
        "Increased operational efficiency – reduce manual tasks and errors by streamlining order fulfillment through integration and automation.",
        "Scalable and adaptable – easily accommodate business growth and changing demands with a flexible integration solution.",
      ]
    },
    {
      value: "integrated",
      icon: GitBranch,
      label: "Integrated",
      title: "Simplify third‑party logistics with integrated automation",
      points: [
        "Streamlined order fulfillment – seamlessly communicate with 3PL providers for streamlined order fulfillment, warehousing and distribution.",
        "Real‑time data sync – seamlessly exchange accurate information by syncing transfer orders, shipment progress and inventory levels.",
        "Seamless operations – facilitate smooth and efficient operations by integrating with 3PLs to enable timely order processing and shipment tracking.",
        "Enhanced visibility – gain comprehensive visibility into the status of orders, ensuring transparency and proactive decision‑making.",
        "Improved collaboration – foster collaboration between 3PL partners through automated data exchange and streamlined processes.",
        "Scalable and adaptable – scale logistics operations and adapt to changing business needs by leveraging integrated automation for third‑party logistics.",
      ]
    },
    {
      value: "automated",
      icon: RefreshCw,
      label: "Automated",
      title: "Simplify Electronic Data Interchange (EDI) with integrated automation",
      points: [
        "Seamless EDI trading – integrate your ERP system with various stakeholders, retailers, manufacturers, carriers, distributors and 3PLs.",
        "Automated data synchronization – auto‑sync crucial EDI documents, purchase orders (POs), invoices, shipment notifications and more for efficient and accurate data exchange.",
        "Enhanced collaboration – facilitate seamless collaboration and communication between trading partners, ensuring smooth EDI transactions.",
        "Increased efficiency – eliminate manual tasks and minimize errors with automated exchange of EDI documents for operational efficiency.",
        "Improved visibility – gain real‑time visibility into EDI transaction statuses, enabling efficient tracking, monitoring and decision‑making.",
        "Scalable and adaptable – scale EDI operations while adapting to evolving trading requirements with automated electronic data interchange.",
      ]
    },
    {
      value: "optimized",
      icon: OptimizeIcon,
      label: "Optimized",
      title: "Optimize demand forecasting with integrated automation",
      points: [
        "Streamlined forecasting – simplify demand forecasting by integrating sales channels, 3PLs, warehouses and ERP systems with specialized apps.",
        "Automated data sync – automatically synchronize inventory, customer orders and sales data for improved demand forecasting accuracy.",
        "Enhanced planning precision – leverage integrated automation for better inventory management, reducing stock‑outs and overstocks.",
        "Real‑time visibility – gain insights into demand trends for proactive decision‑making and meeting customer demands.",
        "Improved collaboration – foster collaboration between sales, logistics and planning teams with unified access to demand‑forecasting data.",
        "Scalable and adaptable – scale demand‑forecasting capabilities and adapt to market dynamics with integrated automation.",
      ]
    },
    {
        value: "simplified",
        icon: LayoutGrid,
        label: "Simplified",
        title: "Simplify procurement with integrated automation",
        points: [
          "Streamlined procurement – integrate ERP, purchasing and supply‑chain systems to streamline and automate the procurement process.",
          "Automated document sync – automatically sync vital procurement documents for efficient collaboration and seamless operations.",
          "Efficiency and accuracy – leverage automation to reduce errors, save time and improve overall procurement efficiency.",
          "Enhanced visibility and control – gain real‑time visibility, enabling proactive management of procurement activities and supply chain.",
          "Seamless collaboration – foster collaboration by providing stakeholders with access to synchronized procurement data for effective communication.",
          "Scalable and adaptable – scale operations smoothly, adapting to changing needs by leveraging integrated automation for procurement.",
        ]
    },
];

const benefits = [
    {
        icon: Layers,
        title: "Centralized solution for your supply chain",
        description: "Streamline and enhance supply‑chain operations.",
        points: [
            "Aonflow’s iPaaS provides comprehensive integration solutions to streamline and enhance supply‑chain operations, boosting efficiency and confidence.",
            "Connect with trading partners, warehouses and supply‑chain systems on the platform for reliable, repeatable processes and centralized management.",
        ],
    },
    {
        icon: Users,
        title: "Effortless integration for ease of use",
        description: "A user-friendly interface for all users.",
        points: [
            "A user‑friendly interface enables business users to easily create, manage, customize and develop integrations.",
            "Advanced developer tools empower technical users to craft intricate integration scenarios seamlessly.",
        ],
    },
    {
        icon: Scaling,
        title: "Seamlessly evolves with your supply chain",
        description: "A robust system for efficient data processing.",
        points: [
            "The system has the strength and agility to handle large data volumes and adapt to growing application endpoints.",
            "Optimize operational efficiency, drive return on investment (ROI) and enhance supply‑chain processes with the powerful solution.",
        ],
    },
    {
        icon: Zap,
        title: "Drive ROI with our pre‑constructed supply‑chain integration",
        description: "Accelerate integrations with pre‑built templates.",
        points: [
            "Get a head start with pre‑built templates for EDI and other supply‑chain applications.",
            "Unleash the full potential of out‑of‑the‑box integration apps to optimize e‑commerce order‑management efficiency.",
        ],
    }
];


export default function SupplyChainPage() {

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
                    Manufacturing & Supply Chain Automation
                </h1>
                <p className="mt-6 text-lg text-muted-foreground max-w-xl">
                   Link your supply chain end‑to‑end, automate key operations and simplify business complexities.
                </p>
                <div className="mt-8">
                    <Button asChild size="lg">
                        <Link href="/contact">Book a Demo</Link>
                    </Button>
                </div>
            </AnimateOnScroll>
            <AnimateOnScroll delay={0.2} className="flex justify-center">
                <Image
                    src="/supply-chain/supply-chain-automation.png"
                    alt="Supply Chain Automation"
                    width={500}
                    height={400}
                    className="object-contain"
                    data-ai-hint="supply chain"
                />
            </AnimateOnScroll>
          </div>
        </div>
      </section>

       {/* Transforming Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
            <AnimateOnScroll className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold font-headline">Streamline supply chain, enhance visibility and automate</h2>
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
                            src="/supply-chain/supply-chain-fact.svg"
                            alt="Supply Chain illustration"
                            width={400}
                            height={400}
                            className="object-contain"
                            data-ai-hint="supply chain chart"
                        />
                    </AnimateOnScroll>
                    <AnimateOnScroll delay={0.2}>
                        <h2 className="text-3xl font-bold mb-4">~70 % are overwhelmed by the complex intricacies of supply chain</h2>
                        <p className="text-lg opacity-90">
                           With Aonflow’s innovative iPaaS, you can bridge the gap between Electronic Data Interchange (EDI), third‑party logistics (3PL), warehousing and logistics, demand planning procurement and order management systems to unify your enterprise operations.  Streamline your business processes with an advanced solution that simplifies all of these key supply‑chain functions.
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
                <h2 className="text-3xl font-bold font-headline">Automate manufacturing and <span className="text-primary">supply chain with Aonflow</span></h2>
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
        <div className="container mx-auto px-4 md:px-6 relative z-10">
             <AnimateOnScroll className="text-center max-w-3xl mx-auto mb-12">
                <h2 className="text-3xl font-bold font-headline">Benefits of Aonflow <span className="text-primary">supply‑chain & manufacturing automation</span></h2>
            </AnimateOnScroll>
            <div className="grid grid-cols-1 md:grid-cols-1 gap-8 max-w-5xl mx-auto">
                 {benefits.map((benefit, index) => (
                    <AnimateOnScroll key={index} delay={index * 0.1}>
                        <Card className="rounded-lg text-card-foreground shadow-sm h-full p-8 border-0 bg-white/50 backdrop-blur-sm">
                            <div className="grid md:grid-cols-2 gap-8 items-center">
                                <div className="flex flex-col items-start text-left">
                                    <div className="bg-primary/10 text-primary p-3 rounded-lg self-start mb-4">
                                        <benefit.icon className="h-8 w-8"/>
                                    </div>
                                    <h3 className="text-xl font-bold font-headline mb-2">{benefit.title}</h3>
                                    <p className="text-muted-foreground text-md mb-4">{benefit.description}</p>
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
