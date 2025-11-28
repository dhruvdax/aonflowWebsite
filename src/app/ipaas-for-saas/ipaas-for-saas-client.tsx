
'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  Zap,
  Users,
  Layers,
  Repeat,
  Scaling,
  Check,
  Briefcase,
  DollarSign,
  HeartHandshake
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { AnimateOnScroll } from '@/components/animate-on-scroll';
import { BackgroundAnimation } from '@/components/background-animation';
import { 
    SeamlessDataExchangeIcon, 
    AutomatedDataProcessingIcon, 
    EmpowerIcon 
} from '@/components/by-function-icons';
import { cn } from '@/lib/utils';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const transformingFeatures = [
    {
        icon: Users,
        title: "Connect across enterprise",
        description: "Break down data silos to unlock your enterprise’s true potential. Foster a connection between people and systems for the ultimate synergy and ensure accurate data delivery."
    },
    {
        icon: Scaling,
        title: "Gain powerful flexibility",
        description: "Streamline complex integrations on a large‑scale basis with ease. Transform complexities into connections and adapt swiftly to rapidly evolving business requirements."
    },
    {
        icon: EmpowerIcon,
        title: "Empower your teams",
        description: "Provide an intuitive user experience for those with limited technical abilities to integrate the product. Unleash the full potential of your development and customization goals with enterprise‑grade power."
    },
    {
        icon: Repeat,
        title: "Drive growth and scalability",
        description: "Streamline and optimize your technology stack with automation. Remove tedious and manual tasks and eliminate fragmentation to unlock your growth potential."
    }
];

const whyAonflowTabs = [
    {
      value: "revenue",
      icon: DollarSign,
      label: "Revenue",
      title: "Streamline revenue growth with quote‑to‑cash automation",
      points: [
        "Smooth handoff process – seamlessly connect CRM, CPQ and Helpdesk solutions to streamline post‑sales operations.",
        "Quote‑to‑Cash – streamline the touchpoints between customers, sales and finance to remove human error and accelerate revenue growth.",
        "Automate workflows – improve productivity and profitability by syncing contacts, accounts, opportunities and subscriptions across ERP, CRM and CPQ systems.",
        "Data‑driven insights – gain actionable intelligence by consolidating data from multiple sources, enabling informed decision‑making.",
        "Scalability and flexibility – adapt to changing business needs with ease by leveraging Aonflow’s scalable and flexible automation capabilities.",
        "Regulatory compliance – ensure adherence to industry regulations and data‑security standards through robust integration and data‑protection measures.",
      ]
    },
    {
      value: "efficiency",
      icon: Zap,
      label: "Efficiency",
      title: "Efficient customer support automation solution",
      points: [
        "Break data silos – integrate and automate systems to eliminate data barriers and enhance customer insights.",
        "Unified customer view – gain a comprehensive understanding of customers across touchpoints for personalized support.",
        "Data synchronization – keep customer data in sync across systems to ensure accurate and consistent information.",
        "Streamlined collaboration – foster seamless collaboration among teams by connecting systems and facilitating communication.",
        "Enhanced customer experience – provide a consistent and personalized experience that boosts satisfaction and loyalty.",
        "Efficient operations – save time and effort by automating processes, enabling teams to focus on high‑value tasks.",
      ]
    },
    {
      value: "automation",
      icon: Repeat,
      label: "Automation",
      title: "Streamline finance & accounting automation platform",
      points: [
        "Integrated financial operations – integrate your ERP solution with financially oriented applications to streamline finance and accounting processes.",
        "Reduced operating expenses – integrate systems to eliminate manual tasks, reduce errors and save costs associated with duplicate data entry.",
        "Improved productivity – automate financial workflows and leverage real‑time data integration to enhance finance team efficiency.",
        "Optimized cash flow – gain better visibility into your financial data to enable informed decisions and optimize cash‑flow management.",
        "Long‑term success – streamline financial operations to create a foundation for sustained growth and success.",
        "Increased accuracy and compliance – ensure regulatory compliance by automating financial processes and maintaining data integrity.",
      ]
    },
    {
      value: "effortless",
      icon: Check,
      label: "Effortless",
      title: "Experience seamless hire‑to‑retire process automation",
      points: [
        "Streamlined onboarding – automate the end‑to‑end hiring process, integrating HR systems for uninterrupted and seamless employee onboarding.",
        "Efficient HR operations – simplify tasks, from records management to employee performance, with streamlined HR processes.",
        "Enhanced security – keep employee data secure yet accessible, ensuring authorized personnel have the necessary information.",
        "Centralized employee records – sync employee data across systems, providing accurate and easily accessible information when needed.",
        "Real‑time information – access precise and accurate data instantly for timely decision‑making and reporting.",
        "Improved compliance – automate HR processes across the board to ensure compliance with regulations and company policies.",
      ]
    },
];

const benefits = [
    {
        icon: Layers,
        title: "Experience unparalleled control and optimization",
        description: "Centralize control and empower external teams.",
        points: [
            "Centralizing security, management and administration enables IT to maintain control over various processes.",
            "External teams gain capabilities to solve specific business challenges while ensuring data security and compliance.",
        ],
    },
    {
        icon: Repeat,
        title: "Streamlined operations with powerful integrations",
        description: "Advanced platform for seamless integrations and technical excellence.",
        points: [
            "Enable Aonflow’s advanced platform to meet the demands of your technical teams, ensuring expert integrations across the organization.",
            "Maximize productivity and simplify complex tasks with the power of technology for a better overall experience.",
        ],
    },
    {
        icon: Users,
        title: "Designed for intuitive user experience",
        description: "Simplify business tasks with a user‑friendly integration experience.",
        points: [
            "Empower business users to easily build and manage integrations with a user‑friendly experience.",
            "By simplifying the integration process, IT teams can focus on higher‑level tasks and priorities.",
        ],
    },
    {
        icon: HeartHandshake,
        title: "Quicker returns on your investment",
        description: "Comprehensive integration solutions for your business.",
        points: [
            "Benefit from pre‑built connectors, intuitive quick‑start templates and fully managed integration applications.",
            "Trust Aonflow’s product to meet all your integration needs with a wide range of features and capabilities.",
        ],
    }
];


export default function SaaSAutomationPage() {
    const saasFactImage = PlaceHolderImages.find(p => p.id === 'saas-fact');
    
  return (
    <div className="bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative w-full bg-gradient-to-r from-primary/10 to-blue-500/10 py-20 md:py-28 lg:py-32 overflow-hidden">
        <BackgroundAnimation className="absolute inset-0 z-0 opacity-30" />
        <div className="container mx-auto px-4 md:px-6 z-10 relative">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <AnimateOnScroll>
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl font-headline text-foreground">
                    SaaS Automation
                </h1>
                <p className="mt-6 text-lg text-muted-foreground max-w-xl">
                   Integrate your tech stack and automate for comprehensive end‑to‑end SaaS solutions.
                </p>
                <div className="mt-8">
                    <Button asChild size="lg">
                        <Link href="/contact">Book a Demo</Link>
                    </Button>
                </div>
            </AnimateOnScroll>
            <AnimateOnScroll delay={0.2} className="flex justify-center">
                <Image
                    src="/ipaas-for-saas/saas-automation.svg"
                    alt="SaaS Automation"
                    width={500}
                    height={400}
                    className="object-contain"
                    data-ai-hint="saas automation"
                />
            </AnimateOnScroll>
          </div>
        </div>
      </section>

       {/* Transforming Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
            <AnimateOnScroll className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold font-headline">Streamline operations for effective, speedy results</h2>
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
                        {saasFactImage && (
                            <Image
                                src={saasFactImage.imageUrl}
                                alt="SaaS fact"
                                width={400}
                                height={400}
                                className="object-contain"
                                data-ai-hint={saasFactImage.imageHint}
                            />
                        )}
                    </AnimateOnScroll>
                    <AnimateOnScroll delay={0.2}>
                        <h2 className="text-3xl font-bold mb-4">Power automation with seamless integration</h2>
                        <p className="text-lg opacity-90">
                           Aonflow’s iPaaS offers a comprehensive solution that enables seamless integration, automation and enhanced security for individuals, organizations, businesses and enterprises.  With its user‑friendly interface, this innovative solution caters to the needs of both IT professionals and business users, empowering them to achieve their objectives efficiently and effectively.
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
                <h2 className="text-3xl font-bold font-headline">Why Aonflow for <span className="text-primary">SaaS Automation?</span></h2>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.2}>
            <Tabs defaultValue="revenue" className="w-full">
                <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 h-auto bg-transparent p-0 border-b">
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
                <h2 className="text-3xl font-bold font-headline">Benefits of Aonflow <span className="text-primary">SaaS Automation</span></h2>
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
