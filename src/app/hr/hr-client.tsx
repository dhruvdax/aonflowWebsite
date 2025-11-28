
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { AnimateOnScroll } from '@/components/animate-on-scroll';
import { BackgroundAnimation } from '@/components/background-animation';
import { AutomationIcon, SeamlessDataExchangeIcon, AutomatedDataProcessingIcon, EnhancedPatientCareIcon, TransformedHealthcareDeliveryIcon, SeamlessIcon, EmpowerIcon } from '@/components/by-function-icons';
import { cn } from '@/lib/utils';
import { useState, useEffect } from 'react';


const transformingFeatures = [
    {
        icon: SeamlessDataExchangeIcon,
        title: "Enjoy error-free operations",
        description: "Eliminate delays, human intervention, and inefficiencies by streamlining operations with automated data entry processes to experience an error-free and efficient execution of HR-related tasks."
    },
    {
        icon: AutomatedDataProcessingIcon,
        title: "Alleviate onboarding roadblocks",
        description: "80% of new recruits grapple with onboarding issues, raising their probability of exit in 45 days. Streamline with Aonflow to mitigate such risks to ensure long-term engagement."
    },
    {
        icon: EnhancedPatientCareIcon,
        title: "Reduce employee attrition",
        description: "Early employee departure within 30 days incurs triple salary costs. Leverage iPaaS automation to reduce the financial impact of high turnover within the first 30 days."
    },
    {
        icon: TransformedHealthcareDeliveryIcon,
        title: "Complete offboarding procedures",
        description: "Over 48% of former employees retain access to confidential data due to an incomplete offboarding process. Automate to ensure a thorough and complete exit strategy."
    }
];

const whyAonflowTabs = [
    {
      value: "automate",
      icon: AutomationIcon,
      label: "Automate",
      title: "Automate your teams for higher efficiency and productivity",
      points: [
        "Unprecedented advantages: Access pre-created HR automation tools, eliminating the need to start from scratch.",
        "Streamlined recruitment: Automate assessment, hiring, onboarding and employee data management to enhance the efficiency of processes.",
        "Power of proven practices: Leverage the tested best practices used in successful integrations for optimal results.",
        "Centralized dashboard: Utilize a dashboard and AI-driven error management to track integrations and ensure success.",
        "Time-saving automation: Rescind over 60% of the HR team’s time from repetitive data entry tasks for more valuable projects.",
        "Empower your HR team: Redirect time saved from automation towards valuable projects, unlocking their true potential."
      ]
    },
    {
      value: "secure",
      icon: SeamlessIcon,
      label: "Secure",
      title: "Secure systems, and protect confidential team information effectively",
      points: [
        "Streamlined access: Automate data exchange to streamline access to confidential employee files and minimize manual handling.",
        "Efficient deprovisioning: Utilize automated deprovisioning to streamline the process of removing access rights for employees.",
        "Reduced risk: Minimize data breaches by minimizing reliance on manual processes and exit processes for employees.",
        "Enhanced data security: Automate data exchange to minimize exposure to sensitive information and ensure enhanced confidentiality.",
        "Seamless employee exits: Automate deprovisioning processes for a smooth and secure employee exit process.",
        "Minimized human involvement: Reduce the risk of data breaches by minimizing human interaction during access management."
      ]
    },
    {
      value: "productivity",
      icon: EmpowerIcon,
      label: "Productivity",
      title: "Jumpstart the productivity of new hires from day one",
      points: [
        "Automated onboarding: Streamline the process by automating data collection from employees, eliminating manual entry errors.",
        "Maximize productivity: Automate core systems access provisioning to enhance new employees’ productivity from Day one.",
        "Faster onboarding: Onboard employees in just an hour, instead of the usual four to five days.",
        "Enhanced first-day experience: Ensure accurate and complete system access and employee details for an exceptional onboarding experience.",
        "Streamlined data collection: Automate data collection to improve efficiency during the onboarding process.",
        "Improved accuracy and completeness: Automating data collection ensures accurate and complete employee information during onboarding."
      ]
    }
];

const benefits = [
    {
        icon: Layers,
        title: "Automate recruitment for efficient hiring process",
        description: "Streamline HR operations by syncing all processes with your Human Capital Management (HCM) system exchange.",
        points: [
            "Regularly update job descriptions to reflect current duties and responsibilities, eliminating endless candidate searches.",
            "Examine potential hire data from job boards and ATS to find the perfect fit, analyzing resumes for potential hires.",
        ],
    },
    {
        icon: Repeat,
        title: "Automating pre-hire to hire & retire",
        description: "Instantly configure your new staff members with just a single click. It’s that easy!",
        points: [
            "Automate candidate data transfer to HCM. Simplify the signing process with digital documents for streamlined operations.",
            "Provide access to the latest applications and devices, and streamline payroll for enhanced efficiency and accuracy.",
        ],
    },
    {
        icon: Zap,
        title: "Documenting change management",
        description: "No more stress over staying current with Aonflow iPaaS solutions.",
        points: [
            "Optimize staff role changes for maximum efficiency with rapid and precise management.",
            "Ensure smooth operations and ongoing success by transforming company policies.",
        ],
    },
    {
        icon: ShieldCheck,
        title: "Maximize employee wellness",
        description: "Seamlessly prioritize the health of your employees using our automation technology.",
        points: [
            "Stay on track with fitness goals using convenient workout reminders, ensuring you never miss a session.",
            "Foster mindfulness among employees. Make it an integral part of their lives. Encourage well-being through company-wide health initiatives.",
        ],
    },
    {
        icon: Scaling,
        title: "Safe employee offboarding process",
        description: "With our seamless offboarding process, rest assured that nothing will be overlooked.",
        points: [
            "Ensure smooth employee transitions with improved efficiency and simplicity, making the process smoother than ever before.",
            "Streamline operations by eliminating hardware, software and services. Keep payroll and finances up-to-date with instant issue notifications.",
        ],
    }
];


export default function HRClientPage() {

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
                    Human Resources Automation
                </h1>
                <p className="mt-6 text-lg text-muted-foreground max-w-xl">
                   Revolutionize your HR function with the power of intelligent automation.
                </p>
                <div className="mt-8">
                    <Button asChild size="lg">
                        <Link href="/contact">Book a Demo</Link>
                    </Button>
                </div>
            </AnimateOnScroll>
            <AnimateOnScroll delay={0.2} className="flex justify-center">
                <Image
                    src="/hr/hr-automation.svg"
                    alt="Human Resources Automation"
                    width={500}
                    height={400}
                    className="object-contain"
                    data-ai-hint="hr automation"
                />
            </AnimateOnScroll>
          </div>
        </div>
      </section>

       {/* Transforming Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
            <AnimateOnScroll className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold font-headline">Liberate HR teams, <span className="text-primary">design exceptional experiences</span></h2>
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
                            src="/hr/human-resource-fact.svg"
                            alt="HR Professional working on laptop"
                            width={400}
                            height={400}
                            className="object-contain"
                            data-ai-hint="hr professional working"
                        />
                    </AnimateOnScroll>
                    <AnimateOnScroll delay={0.2}>
                        <h2 className="text-3xl font-bold mb-4">Over 90% of HR time is spent on tedious administrative tasks system</h2>
                        <p className="text-lg opacity-90">
                           Amidst the pandemic, HR battles to onboard staff and engage employees effectively. Despite increased applications, HR processes lack automation, hindering efficient induction and exceptional experiences for employees. Streamline HR processes and enhance employee experiences amidst pandemic challenges. Increased applications, but automation lags in induction and efficiency.
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
                <h2 className="text-3xl font-bold font-headline">Why Aonflow for <span className="text-primary">HR Automation?</span></h2>
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
                <h2 className="text-3xl font-bold font-headline">Benefits of Aonflow <span className="text-primary">HR Automation</span></h2>
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

    