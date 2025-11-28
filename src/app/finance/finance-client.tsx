
'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  ArrowRightLeft,
  DollarSign,
  TrendingUp,
  FileCheck,
  Zap,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
} from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { AnimateOnScroll } from '@/components/animate-on-scroll';
import { BackgroundAnimation } from '@/components/background-animation';
import { 
    ReliableDataQualityIcon,
    AccurateDataAnalysisIcon,
    AgilityScalabilityIcon,
    ExceptionalCustomerExperienceIcon,
    TransformFinancialReportingIcon,
    RegulatoryComplianceIcon,
    StreamlineCashFlowIcon,
} from '@/components/by-function-icons';
import { cn } from '@/lib/utils';
import { useState, useEffect } from 'react';

const transformingFeatures = [
    {
        icon: ReliableDataQualityIcon,
        title: "Error-free ledger documentation",
        description: "Address costly errors caused by a 4% inaccuracy in data input. Implement an integrated finance solution to bridge gaps between teams and ensure data accuracy."
    },
    {
        icon: AccurateDataAnalysisIcon,
        title: "Drive growth, ROI",
        description: "Mitigate costly inefficiencies and errors that can consume up to 30% of annual profits by adopting automated processes and solutions for streamlined operations."
    },
    {
        icon: AgilityScalabilityIcon,
        title: "Swift financial updates",
        description: "Avoid costly delays and inaccurate decisions caused by outdated information with real-time data solutions that provide up-to-the-minute insights for informed decision-making."
    },
    {
        icon: ExceptionalCustomerExperienceIcon,
        title: "Guarantee 100% compliance",
        description: "Prevent compliance risks and optimize operations by automating data integration and validation, minimizing errors, and ensuring accurate and compliant data management for seamless operations."
    }
];

const whyAonflowTabs = [
    {
      value: "streamline",
      icon: StreamlineCashFlowIcon,
      label: "Streamline",
      title: "Streamline cash flow visibility and financial closing",
      points: [
        "Effortless cost reduction: Eliminate manual data entry for accounting teams, saving money and boosting efficiency.",
        "Seamless financial operations: Connect A/P & A/R to your ERP for streamlined payments, eliminating manual procedures.",
        "Accurate product pricing and information: Ensure correct data in sales and billing systems to avoid deceptive contracts.",
        "Automation revolutionizes the accuracy and precision of financial data, shortening book closing time from days to weeks.",
        "Improved accuracy and data integrity: Eliminate errors and maintain consistent and reliable financial data across systems.",
        "Efficient financial decision-making: Empower decision-makers with real-time and accurate financial information for informed and confident choices.",
      ]
    },
    {
      value: "transform",
      icon: TransformFinancialReportingIcon,
      label: "Transform",
      title: "Transform financial reporting with lightning-fast speed and accuracy",
      points: [
        "Empower financial teams: Build, regulate, and oversee integrations for up-to-date KPI visibility and fiscal reporting.",
        "Ensure data accuracy: Measure key performance indicators (KPIs) within appropriate systems for precise finance data.",
        "Accelerate data access: Enable business analysts to quickly gather and unify financial data from multiple systems without IT dependency.",
        "Eliminate manual data dumps: Replace spreadsheet management with automated processes for real-time and relevant reports.",
        "Avoid stagnant reports: Ensure the timely release of up-to-date information by discarding manual processes and spreadsheets.",
        "Embrace automation: Move away from obsolete practices and adopt automated solutions for efficient and timely reporting.",
      ]
    },
    {
      value: "compliance",
      icon: RegulatoryComplianceIcon,
      label: "Compliance",
      title: "Find assurance in maintaining regulatory compliance standards",
      points: [
        "Ensure legal compliance: Implement role-based access controls to restrict integration construction and updates to approved personnel.",
        "Enhance data security: Safeguard your information with Single Sign-On (SSO), providing advanced protection for your business.",
        "Global data privacy compliance: Adhere to established guidelines to ensure compliance on a global scale.",
        "Highest industry standards: Our cloud platform is designed and maintained with industry-leading practices for maximum data protection.",
        "Streamlined security measures: Enable secure access to data while maintaining strict compliance with privacy regulations.",
        "Continuous data security: Benefit from a secure and reliable environment that prioritizes your data confidentiality and availability.",
      ]
    },
];

const benefits = [
    {
        icon: DollarSign,
        title: "Automate quotes-to-cash with efficient CPQ",
        description: "Maximizing revenue cycle efficiency: Streamlining operations for business success.",
         points: [
            "Optimize your revenue cycle by seamlessly integrating and automating key processes such as product configuration, pricing, and quotes.",
            "Simplify contract management, invoicing, billing orders, revenue recognition, and renewals to ensure the success of your business.",
         ]
    },
    {
        icon: TrendingUp,
        title: "Automate accounts payable and procurement processes",
        description: "Enhancing operational efficiency: Streamlining procurement and financial processes.",
         points: [
            "Simplify your business operations by automating procurement requests, tracking payments, and maintaining accurate vendor information.",
            "Streamline payroll, expenses, payments, and return merchandising with automated processes, ensuring up-to-date and hassle-free operations.",
         ]
    },
    {
        icon: FileCheck,
        title: "Keep your documents organized, secure and compliant",
        description: "Streamline document management for regulatory compliance and efficient record-keeping.",
         points: [
            "Ensure compliance by instantly uploading and organizing documents according to regulatory filing and audit requirements.",
            "Conveniently store closed books and other documents for easy and convenient retrieval and future reference.",
         ]
    },
    {
        icon: Zap,
        title: "Real-time sales pipeline visibility with continuous close",
        description: "Empowering agile decision-making with real-time financial visibility and reporting.",
         points: [
            "Unlock agile decision-making with instant, comprehensive visibility into all your financial information.",
            "Empower teams to act swiftly with real-time reporting by gathering and assessing expenditure and income figures in a single dashboard.",
         ]
    }
];


export default function FinanceClientPage() {

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
                    Finance Automation
                </h1>
                <p className="mt-6 text-lg text-muted-foreground max-w-xl">
                   Optimize revenue management with full visibility and accurate reporting, for confident forecasting.
                </p>
                <div className="mt-8">
                    <Button asChild size="lg">
                        <Link href="/contact">Book a Demo</Link>
                    </Button>
                </div>
            </AnimateOnScroll>
            <AnimateOnScroll delay={0.2} className="flex justify-center">
                 <Image
                    src="/finance/finance-automation.svg"
                    alt="Finance Automation"
                    width={500}
                    height={400}
                    className="object-contain"
                    data-ai-hint="finance automation"
                />
            </AnimateOnScroll>
          </div>
        </div>
      </section>

       {/* Transforming Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
            <AnimateOnScroll className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold font-headline">Automate processes, and expedite with <span className="text-primary">low-code integration</span></h2>
            </AnimateOnScroll>
             <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
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
                            src="/finance/finance-automation-fact.svg"
                            alt="Finance fact"
                            width={400}
                            height={400}
                            className="object-contain"
                            data-ai-hint="finance chart"
                        />
                    </AnimateOnScroll>
                    <AnimateOnScroll delay={0.2}>
                        <h2 className="text-3xl font-bold mb-4">40% of financial leaders lack confidence in data for critical decisions</h2>
                        <p className="text-lg opacity-90">
                           Manual processes create discrepancies, impairing spreadsheet scalability, and accuracy. Executives question decisions based on unreliable data. Versioning errors erode trust and lack audit trails. Financial SaaS apps complicate automation for quote-to-cash, AR/AP, cash management, accounting closing, and performance monitoring, exacerbating complexity in finance operations.
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
                <h2 className="text-3xl font-bold font-headline">Why Aonflow for <span className="text-primary">Finance Automation?</span></h2>
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
                <h2 className="text-3xl font-bold font-headline">Benefits of Aonflow <span className="text-primary">Finance Automation</span></h2>
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
                    <Link href="/contact">Book a Demo</Link>
                </Button>
            </AnimateOnScroll>
        </section>

    </div>
  );
}

    