
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
import { SeamlessDataExchangeIcon, AutomatedDataProcessingIcon, EnhancedPatientCareIcon, TransformedHealthcareDeliveryIcon, OptimizeIcon, SeamlessIcon, StrategicIcon, CentralizeIcon, EfficientIcon, EmpowerIcon } from '@/components/by-function-icons';
import { cn } from '@/lib/utils';
import { useState, useEffect } from 'react';


const transformingFeatures = [
    {
        icon: SeamlessDataExchangeIcon,
        title: "Seamless data exchange",
        description: "Seamless interoperability and electronic health information exchange with standardized APIs like HL7’s Fast Healthcare Interoperability Resources (FHIR®), enabling efficient communication across healthcare systems and stakeholders."
    },
    {
        icon: AutomatedDataProcessingIcon,
        title: "Automated data processing",
        description: "Eliminate manual processes and reduce errors by automating the processing of HL7 data, ensuring accurate and timely transmission of critical patient information."
    },
    {
        icon: EnhancedPatientCareIcon,
        title: "Enhanced patient care",
        description: "Leverage HL7 standards and FHIR® to optimize patient care by automating workflows, enabling real-time data sharing, and facilitating comprehensive health records for better clinical decision-making."
    },
    {
        icon: TransformedHealthcareDeliveryIcon,
        title: "Transformed healthcare delivery",
        description: "Unlock the power of patient data integration to improve operational efficiency in healthcare, from admissions and scheduling to laboratory results and billing processes."
    }
];

const whyAonflowTabs = [
    {
      value: "optimize",
      icon: OptimizeIcon,
      label: "Optimize",
      title: "Optimize and expedite healthcare operational processes for efficiency",
      points: [
        "Seamless integration: Connect systems and EHRs for streamlined data exchange and enhanced interoperability in healthcare.",
        "Enhanced interoperability: Pre-built APIs and integration templates facilitate seamless data exchange in healthcare.",
        "Streamlined data exchange: Integrate patient demographics and COVID-19 test results into Salesforce Health Cloud using industry standards HL7 V2 ADT and FHIR.",
        "Accelerated development: USCDI and FHIR R4 resources support fast digital transformation initiatives in healthcare.",
        "Efficient data access: Swiftly unlock critical patient resources for a comprehensive patient 360-degree view.",
        "Simplified implementation: Reference architecture and tools simplify integration and utilization in healthcare settings, aiding healthcare professionals in efficient workflow management and data utilization.",
      ]
    },
    {
      value: "seamless",
      icon: SeamlessIcon,
      label: "Seamless",
      title: "Seamless data exchange for efficient healthcare operations",
      points: [
        "Enhanced collaboration: Enable secure and streamlined communication between applications, devices and healthcare providers.",
        "Improved care coordination: Facilitate comprehensive patient information exchange, leading to enhanced care outcomes and continuity of care.",
        "Efficient resource utilization: Optimize resource allocation and utilization by automating processes and reducing manual inefficiencies, maximizing productivity.",
        "Interoperable healthcare ecosystem: Integrate disparate systems and ensure interoperability across healthcare organizations.",
        "Data-driven insights: Enable data aggregation and analysis across different sources for informed decision-making and improved outcomes.",
        "Scalability and flexibility: Easily scale the integration infrastructure to accommodate future growth and changing healthcare needs."
      ]
    },
    {
      value: "strategic",
      icon: StrategicIcon,
      label: "Strategic",
      title: "Implement proven integration strategies for successful outcomes",
      points: [
        "Trusted expertise: Benefit from Aonflow’s extensive experience in successful healthcare integrations using HL7 and FHIR.",
        "Optimized implementation: Access proven best practices and methodologies for efficient and reliable integration projects.",
        "Compliance and regulatory adherence: Ensure adherence to industry standards, regulations and data security requirements.",
        "Seamless legacy system integration: Integrate legacy systems with modern applications using standardized protocols.",
        "Reduced implementation risks: Mitigate risks associated with complex integrations through a well-defined and tested approach.",
        "Collaboration with industry partners: Leverage partnerships with healthcare technology vendors to simplify integrations."
      ]
    },
    {
      value: "centralize",
      icon: CentralizeIcon,
      label: "Centralize",
      title: "Centralize monitoring and manage healthcare systems effortlessly",
      points: [
        "Comprehensive view and supervision: Monitor and manage all healthcare integrations from a centralized platform.",
        "Real-time monitoring and alerts: Proactively identify issues, resolve errors and optimize performance in real time.",
        "Performance analytics: Gain insights into integration performance, system bottlenecks, and data flow patterns.",
        "Automated error handling: Implement intelligent error handling and recovery mechanisms for seamless healthcare operation.",
        "Governance and compliance: Ensure patient and provider data privacy, security and compliance with industry regulations and standards.",
        "Auditing and reporting: Generate comprehensive reports for auditing purposes and regulatory compliance."
      ]
    },
    {
      value: "efficient",
      icon: EfficientIcon,
      label: "Efficient",
      title: "Save time through automation of healthcare processes",
      points: [
        "Boost in efficiency: Automate manual and repetitive healthcare-related tasks, reducing administrative burdens and saving valuable time.",
        "Workflow optimization: Streamline healthcare processes, eliminate bottlenecks and improve overall operational efficiency.",
        "Rapid and secure data exchange: Enable real-time secure data sharing and synchronization between healthcare systems and stakeholders.",
        "Increased accuracy: Minimize the risk of human errors and data inconsistencies through automated data entry and validation.",
        "Resource allocation optimization: Allocate resources more effectively by automating resource management and allocation processes.",
        "Scalable and future-ready: Scale automation capabilities as healthcare needs evolve and technology advancements emerge."
      ]
    },
     {
      value: "empower",
      icon: EmpowerIcon,
      label: "Empower",
      title: "Empower healthcare teams with advanced tools and capabilities",
      points: [
        "Workforce enablement: Empower healthcare professionals with tools and automation to focus on patient care and meaningful tasks.",
        "Enhanced job satisfaction: Improve employee morale by reducing administrative burdens and increasing job satisfaction.",
        "Collaboration and communication: Facilitate seamless collaboration and communication among healthcare teams and departments.",
        "Continuous learning and development: Foster innovation and learning culture by enabling healthcare professionals to explore new technologies.",
        "Data-driven decision-making: Healthcare teams can access integrated data and analytics for informed decision-making and improved patient outcomes.",
        "Enhanced patient engagement: Leverage integrated data and automation to provide personalized and interactive patient experiences."
      ]
    }
];

const benefits = [
    {
        icon: Layers,
        title: "Streamlined HL7 and FHIR integration",
        description: "Streamline HL7 and FHIR integration for seamless healthcare data exchange.",
        points: [
            "Aonflow simplifies and accelerates HL7 and FHIR integration, enabling seamless exchange of critical patient data.",
            "With Aonflow, simplify the integration of patient data by automating processes using ready-made APIs, connectors, and templates.",
        ],
    },
    {
        icon: Repeat,
        title: "Enhanced interoperability and collaboration",
        description: "Enhance interoperability and collaboration across healthcare systems and devices.",
        points: [
            "Aonflow facilitates seamless connectivity, enabling efficient data exchange and collaboration among healthcare stakeholders.",
            "Healthcare professionals can access comprehensive patient information in one single place, improving care coordination and decision-making.",
        ],
    },
    {
        icon: Zap,
        title: "Accelerated digital transformation in healthcare",
        description: "Accelerate digital transformation in healthcare with Aonflow’s automation.",
        points: [
            "Aonflow empowers healthcare organizations to automate processes, driving digital transformation initiatives efficiently.",
            "With Aonflow, healthcare providers can optimize operations, enhance efficiency and unlock innovation in patient care delivery.",
        ],
    },
    {
        icon: ShieldCheck,
        title: "Ensure data accuracy and security",
        description: "Ensure accurate and secure healthcare data exchange with Aonflow.",
        points: [
            "Aonflow prioritizes data accuracy and security, ensuring secure and compliant healthcare data exchange.",
            "With Aonflow, healthcare organizations safeguard patient data, maintain privacy and meet regulatory requirements.",
        ],
    },
    {
        icon: Scaling,
        title: "Scale and future-proof operations",
        description: "Scale and future-proof healthcare operations with Aonflow’s adaptable solutions.",
        points: [
            "Aonflow offers scalable solutions to support evolving needs, enabling seamless integration of new technologies.",
            "With Aonflow, healthcare providers stay ahead, adapt to industry changes and drive continuous innovation in patient care management.",
        ],
    }
];


export default function HealthcarePage() {

    const heroImage = PlaceHolderImages.find(p => p.id === 'healthcare-hero');
    const doctorImage = PlaceHolderImages.find(p => p.id === 'healthcare-doctor');

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
                    Healthcare Automation
                </h1>
                <p className="mt-6 text-lg text-muted-foreground max-w-xl">
                   Revolutionize patient care with HL7 ADT FHIR integration, driving digital transformation in healthcare.
                </p>
                <div className="mt-8">
                    <Button asChild size="lg">
                        <Link href="/contact">Contact Us</Link>
                    </Button>
                </div>
            </AnimateOnScroll>
            <AnimateOnScroll delay={0.2} className="flex justify-center">
                {heroImage && (
                    <Image
                        src={heroImage.imageUrl}
                        alt="Healthcare Automation"
                        width={500}
                        height={400}
                        className="object-contain"
                        data-ai-hint={heroImage.imageHint}
                    />
                )}
            </AnimateOnScroll>
          </div>
        </div>
      </section>

       {/* Transforming Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
            <AnimateOnScroll className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold font-headline">Transforming <span className="text-primary">healthcare</span>, seamless integration, enhanced patient care</h2>
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
                         {doctorImage && (
                            <Image
                                src={doctorImage.imageUrl}
                                alt="Doctor working on laptop"
                                width={400}
                                height={400}
                                className="object-contain"
                                data-ai-hint={doctorImage.imageHint}
                            />
                        )}
                    </AnimateOnScroll>
                    <AnimateOnScroll delay={0.2}>
                        <h2 className="text-3xl font-bold mb-4">55-65% of revenue is lost due to referral leakage in the health system</h2>
                        <p className="text-lg opacity-90">
                           Build comprehensive 360-degree patient profiles in Salesforce Health Cloud with pre-built connectors, APIs, templates, and recommended end-to-end frameworks. It integrates electronic health records (EHRs), incorporating patient demographics and COVID-19 test results using HL7 V2 ADT (Admit-Discharge-Transfer) or FHIR standards. USCDI and FHIR R4 resources ensure interoperability, expediting healthcare digital transformation.
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
                <h2 className="text-3xl font-bold font-headline">Why Aonflow for <span className="text-primary">Healthcare Automation?</span></h2>
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
                <TabsList className="grid w-full grid-cols-3 md:grid-cols-6 h-auto bg-transparent p-0 border-b">
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
                <h2 className="text-3xl font-bold font-headline">Benefits of Aonflow <span className="text-primary">Healthcare Automation</span></h2>
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

    
