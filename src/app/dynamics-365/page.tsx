
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
  FileText,
  DollarSign,
  HeartHandshake,
  Settings,
  RefreshCw,
  GitBranch,
  Building,
  Key,
  Eye,
  Puzzle,
  Clock,
  Wand,
  SlidersHorizontal,
  Link2,
  PlusCircle,
  ThumbsUp,
  Activity,
  Search,
  PieChart,
  Accessibility,
  Workflow,
  GitCompareArrows,
  Server,
  Database,
  Contact,
  File,
  Handshake,
  MonitorPlay,
  FilePlus,
  FileUp,
  UserPlus,
  FileSignature,
  Lightbulb,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Card
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
import { cn } from '@/lib/utils';
import { useState, useEffect, useRef } from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Autoplay from "embla-carousel-autoplay";
import React from 'react';

const dynamicsUseCases = [
    {
        icon: LineChart,
        title: "Opportunity to Invoice Flow",
        description: "Integrate Dynamics 365 sales results or eCommerce channels to Business Central to automatically create sales orders, generate invoices, and update inventory."
    },
    {
        icon: BarChart,
        title: "Financial Data Distribution",
        description: "Easily transfer daily financial records from Business Central into either QuickBooks Online or Google Sheets to provide your stakeholders and management with near real-time financial snapshots."
    },
    {
        icon: Layers,
        title: "Inventory Alerts",
        description: "Track inventory levels across sales channels in Business Central, and when levels fall, use this flow to create purchase orders, generate Slack notifications, or update supplier systems."
    },
    {
        icon: Repeat,
        title: "End-to-End Order Processing",
        description: "By integrating Business Central with Shopify or WooCommerce so that orders trigger inventory deductions, invoice generations, and shipment scheduling."
    },
    {
        icon: Check,
        title: "Custom Compliance Reporting",
        description: "Collect and consolidate regulatory or compliance data from Business Central that can be automatically integrated into reports, making it easier to pass audits and follow compliance."
    }
];


const aonflowForIntegration = [
    {
        icon: Zap,
        title: "MS Dynamics integration for automation solutions"
    },
    {
        icon: BrainCircuit,
        title: "Automate with low-code builder for your needs"
    },
    {
        icon: Layers,
        title: "Fluid automation architecture to instantly scale"
    },
    {
        icon: ShieldCheck,
        title: "Robust in-built enterprise security for your data"
    }
];

const faqs = [
  {
    question: "What is Microsoft Dynamics 365 Integration?",
    answer: "Microsoft Dynamics 365 Integration is the act of linking your Dynamics 365 applications, like Sales, Finance, Customer Service, etc., to other critical enterprise systems. Aonflow automates data flow between your workspace and other applications, bridging them together to ensure record consistency, reduce manual data entry, and optimize total operations. For example, if you enter a new lead in Dynamics 365 Sales, that data can automatically populate into your marketing platform or accounting system, ensuring every silo has the data they need from the get-go. Integrating these processes saves time, minimizes data loss risk, and reduces transfer errors between applications. It also gives you up-to-date visibility into your customer journeys, your finances, and your operational performance—so that you can make faster and data-driven decisions."
  },
  {
    question: "Which Dynamics 365 modules does Aonflow support?",
    answer: (
      <div>
        <p className="mb-2">Aonflow iPaaS supports all Microsoft Dynamics 365 modules which enables you to connect various horizontal inclusively. Key modules include:</p>
        <ul className="list-disc pl-5 space-y-2">
            <li><strong>Sales</strong> – Automatically sync lead, account, and opportunity information across systems to keep every team updated on the latest sales info.</li>
            <li><strong>Customer Service</strong> – Organize and track cases or support tickets in one location, and streamline resolution times using integrations.</li>
            <li><strong>Finance and Operations</strong> – Update your financial data, invoices, and purchase orders, thus improving visibility and accuracy across your entire organization.</li>
            <li><strong>Field Service</strong> – Work orders, resources & schedule coordination for reducing delays and increasing the efficiency of your team.</li>
            <li><strong>Business Central</strong> – Bring together key finance and supply chain data for complete oversight of billing, orders, and inventory.</li>
        </ul>
        <p className="mt-2">Connecting these modules to our integration platform, Aonflow provides an overview of your complete business and at the same time automates repetitive processes.</p>
      </div>
    )
  },
  {
    question: "Why should I integrate Microsoft Dynamics 365 using Aonflow?",
    answer: (
      <div>
        <p className="mb-2">Key strategic benefits of Microsoft Dynamics 365 integration using Aonflow iPaaS platform:</p>
        <ul className="list-disc pl-5 space-y-2">
            <li><strong>Simplified Operations</strong> – Instead of using multiple systems separately and manually copying information between each of them, you can build automated workflows that automatically send data like customer contacts, sales invoices, or stock levels between systems. This eliminates the burden of data entry and ensures everyone is working from the same data.</li>
            <li><strong>Better Teamwork</strong> – Unified systems help sales leads, marketing leads, finance heads, and customer service reps work together better. For example, the second an order is placed, your finance department will see it right away inside Dynamics 365 Finance, and your sales team can continue managing the opportunity in the Sales module.</li>
            <li><strong>Data-Driven Decisions</strong> – Managers can keep track of performance indicators, identify trends, and make data-driven decisions with real-time visibility. This big-picture view tends to result in enhanced forecasting, positive customer experiences, and quicker reaction time.</li>
        </ul>
      </div>
    )
  },
    {
        question: "What types of platforms integrate with Microsoft Dynamics 365?",
        answer: (
            <div>
                <p className="mb-2">Aonflow’s iPaaS integration platform works with a large number of popular applications and services, making it easy to extend Dynamics 365 data across your tech stack. The integration could be for any service and some of the common ones are:</p>
                <ul className="list-disc pl-5 space-y-2">
                    <li><strong>Salesforce</strong> – Market leads, chances, and account data for a unified perspective on your pipeline.</li>
                    <li><strong>Google Sheets</strong> – Automate updates in your spreadsheet to remove manual exports and imports.</li>
                    <li><strong>Twilio</strong> – Send text messages or notifications to customers in reaction to Dynamics 365 events.</li>
                    <li><strong>WooCommerce</strong> – Aligns order, product, and inventory data for a complete view of online sales.</li>
                    <li><strong>HubSpot</strong> – Synchronize marketing and CRM data between Dynamics 365 to provide up-to-date customer records.</li>
                    <li><strong>QuickBooks Online</strong> – Create and sync invoices, payments, and customer details between Dynamics 365 and accounting.</li>
                </ul>
                <p className="mt-2">Contact our team if you need something not covered above. Support continuing connector development and custom integration efforts to meet your unique needs.</p>
            </div>
        )
    },
    {
        question: "Do I need technical expertise to configure the integration?",
        answer: "Aonflow aims to be simple enough for anyone to build basic flows by providing a quick, visual approach. With a no-code setup, you can easily map data fields, define triggers, and schedule syncs. However, more complex integrations, such as customizing advanced logic, processing large data volumes, or integrating multiple systems, may require assistance from IT or our professional services team. We are working to ensure that your integration is with the product that makes the most of your specific goals and you can also make use of our best-practice guides, comprehensive documentation, and customer success representatives dedicated to you. Aonflow is the balancing act of usability and power for every computing level; from small teams to enterprise IT departments."
    },
    {
        question: "Is the integration secure?",
        answer: "Yes. Aonflow also implements various security protocols to ensure that your data is safe during the integration. We use: Secured APIs – Allowing authenticated, protected communications between Dynamics 365 and any other endpoint. Encryption in transit – Protecting data packets in transit, preventing interception. Compliance Standards – Maintain industry-aligned compliance to safeguard sensitive data. Permission For Users – Control user access to data and actions through robust permissions. We perform recurrent security audits of the system and implement any needed updates in response to any emerging threats."
    },
    {
        question: "Can I sync D365 data using Aonflow in near real-time?",
        answer: "Using Aonflow iPaaS solutions, you can customize how frequently the data sync updates based on your needs. If your organization wants near real-time visibility in updates—such as new records created or changes to status in Dynamics 365—you can choose on-demand updates (synching through flow activation) or batch sync at fixed intervals of periods for processes that do not need to be time-critical. This allows your command such that your systems neither bog down nor flood your network with excessive requests, balancing efficiency and timeliness of data."
    },
    {
        question: "Are custom fields and workflows supported?",
        answer: "Yes. Aonflow's strength is its support for customizing fields, objects, and business processes, meaning you're not constrained to standard or out-of-the-box data structures. For example, if you have customized Dynamics 365 to include specific fields for industry or region, Aonflow can map that information with similar fields in any other systems that are integrated with it. Furthermore, you can create multi-step workflows that automate your unique business logic—from sending automated notifications when thresholds are reached to triggering follow-up tasks when specific events occur. In fact, this degree of personalization means Aonflow adjusts to the way you do things, not the other way around."
    },
    {
        question: "How long does implementation typically take?",
        answer: "The implementation time depends on the complexity of requirements, the number of apps connected, and the extent of customization needed. Simple, out-of-the-box integrations are often deployable in a matter of days. But, more complex enterprise-level projects—requiring multiple workflows, data transformations, or integrations with highly customized applications—can take weeks. The Aonflow professional services team can partner with you to determine the scope, timeline, and milestones of the project. This collaborative, hands-on approach helps ensure your integration is implemented correctly, on time, and delivering actual value as quickly as possible."
    },
     {
        question: "What does pricing look like?",
        answer: "The pricing depends on factors such as the complexity of the integration, weekly transactions, and the number of systems connected. Please reach out to our sales team for a quote that is tailored to your needs. They will collect information about the details of your project scope, and business objectives, and suggest a plan that is within your budget."
    },
    {
        question: "What kind of support does Aonflow provide?",
        answer: "Aonflow has a full support ecosystem to ensure your success before, during, and after implementation. Contact Us – Reach us through our dedicated channels such as email, phone, or live chat and get timely assistance from customer support agents. Professional Services – Get expert help to tackle complex projects, including design consultations, custom scripting, and managed deployments. Customer Success Managers – For premium plans, a dedicated CSM will touch base regularly, evaluate performance stats, and make sure you’re getting maximum returns on your Dynamics 365 integrations. We are confident in cultivating long-sustainable relationships with our users and constantly striving to evolve our platform according to the ever-changing business needs."
    }
];

const dynamicsAutomationTabs = [
  {
    value: "integration",
    icon: BrainCircuit,
    label: "Integration",
    title: "Microsoft Dynamics 365 integration, made easy",
    subtitle: "Take Microsoft Dynamics 365 integration and automation to the next level",
    content: "Aonflow's MS Dynamics 365 connector streamlines the integration of applications and processes without requiring separate tools. With our low-code/no-code visual builder interface, businesses and individuals can easily build API integrations with any cloud service within minutes, eliminating the need for IT support. The result is a seamless and efficient integration that optimizes workflows and saves time.",
    subcontentTitle: "One self-service platform for all your MS Dynamics 365 integration solutions",
    subcontent: "Integrate Microsoft Dynamics 365 seamlessly and automate processes, data conversion, and custom field updates with Aonflow's flexible pre-built connectors and business logic. Our platform enables you to integrate MS Dynamics 365 with your entire or any custom technology stack and sync mission-critical data with any application. Streamline processes at scale with powerful automated dataflows for better outcomes."
  },
  {
    value: "automation",
    icon: FileCog,
    label: "Automation",
    title: "Microsoft Dynamics 365 automation made simple",
    subtitle: "Drive more conversations with simple MS Dynamics 365 suite automation",
    content: "Aonflow's powerful iPaaS solutions let you integrate Microsoft Dynamics 365 with multiple apps effortlessly, freeing up time for more important and critical tasks. Our low-code automation assists with CRM solutions and marketing efforts and connects seamlessly to any application quickly. Scale your team's efficiency by automating time-consuming and repetitive tasks, and easily connect applications for optimal outcomes.",
    subcontentTitle: "All-in-one intuitive future-proof Dynamics 365 integration",
    subcontent: "With Aonflow's flexible, intuitive, and fast integration capabilities, businesses can streamline operations, reduce costs, and improve sales and marketing efficiency when using Dynamics 365. Create custom workflows, edit preferences, and manage mission-critical processes effortlessly. Use the capabilities of Aonflow for any use case to improve data hygiene and governance, giving your business a competitive edge over others."
  },
  {
    value: "use-case",
    icon: Layers,
    label: "Use Case",
    title: "Microsoft Dynamics 365 use case, resolved",
    subtitle: "Effortless integration for MS Dynamics 365 with Aonflow's low-code platform",
    content: "Empower your business or organization by integrating MS Dynamics 365 with Aonflow's intuitive low-code platform that is adaptable and can handle all integration requirements. With automated dataflows, you can streamline workflows beyond just mapping data tools. Aonflow makes it easy for anyone to use and provides an effortless way to enhance the functionality of MS Dynamics 365.",
    subcontentTitle: "Effortlessly Sync and Automate Data with MS Dynamics 365 and Aonflow",
    subcontent: "Businesses can seamlessly sync data between Microsoft Dynamics 365 and other APIs, database systems, and applications, without any coding. It enables businesses to automate bulk updates and improve data enrichment, lead routing, and lead-to-account matching, driving enhanced productivity and revenue growth. Aonflow facilitates API integrations for marketing automation campaigns, auto-updates for record types, objects, and custom fields."
  }
];

export default function Dynamics365Page() {
  const [activeTab, setActiveTab] = useState(dynamicsAutomationTabs[0].value);
  const [isTabCarouselPaused, setIsTabCarouselPaused] = useState(false);
  
  const autoplay = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );

  useEffect(() => {
    if (isTabCarouselPaused) return;
    const tabRotationInterval = setInterval(() => {
      setActiveTab(prevTab => {
        const currentIndex = dynamicsAutomationTabs.findIndex(tab => tab.value === prevTab);
        const nextIndex = (currentIndex + 1) % dynamicsAutomationTabs.length;
        return dynamicsAutomationTabs[nextIndex].value;
      });
    }, 5000);
    return () => clearInterval(tabRotationInterval);
  }, [isTabCarouselPaused]);
    
  return (
    <div className="bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative w-full bg-primary/5 py-20 md:py-28 lg:py-32 overflow-hidden">
        <BackgroundAnimation className="absolute inset-0 z-0 opacity-50" />
        <div className="container mx-auto px-4 md:px-6 z-10 relative">
            <AnimateOnScroll className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                <img src="/microsoft-dynamic.svg" alt="Microsoft Dynamics 365" className="h-40 w-auto mb-4" />
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl font-headline text-foreground">
                    Microsoft Dynamics 365 Integration
                </h1>
                <p className="mt-4 text-lg text-muted-foreground max-w-3xl">
                   Optimize business processes by integrating MS Dynamics 365 to foster unified data access, and seamlessly boost organizational productivity.
                </p>
            </AnimateOnScroll>
            
            <AnimateOnScroll delay={0.2}>
              <div className="grid grid-cols-1 gap-8">
                  <Card className="p-6 flex flex-col items-start bg-background/50 backdrop-blur-sm h-full col-span-1 md:col-span-3 rounded-[24px]">
                      <BrainCircuit className="h-10 w-10 text-primary mb-4" />
                      <h3 className="text-2xl font-bold font-headline mb-2">Connect. Integrate. Automate.</h3>
                      <p className="text-muted-foreground flex-grow">
                          Integrate Microsoft Dynamics 365 with Aonflow, and businesses can harness the power of automation to seamlessly connect apps and services, deliver exceptional customer experiences, and scale their operations. With Aonflow's intuitive integration tools, organizations can streamline their workflows and achieve their goals more efficiently.
                      </p>
                  </Card>
              </div>
              <div className="grid md:grid-cols-3 gap-8 mt-8">
                  <Card className="p-6 flex flex-col items-start bg-background/50 backdrop-blur-sm h-full rounded-[24px]">
                      <Zap className="h-10 w-10 text-primary mb-4" />
                      <h3 className="text-2xl font-bold font-headline mb-2">Event automation</h3>
                      <p className="text-muted-foreground flex-grow">Trigger automation when an event occurs for potential prospects and always stay a step ahead in your processes without added support.</p>
                  </Card>
                  <Card className="p-6 flex flex-col items-start bg-background/50 backdrop-blur-sm h-full rounded-[24px]">
                      <FileCog className="h-10 w-10 text-primary mb-4" />
                      <h3 className="text-2xl font-bold font-headline mb-2">Process automation</h3>
                      <p className="text-muted-foreground flex-grow">Automate your processes workflows, and dataflow between services and apps to sync files, collect data, get notifications, and more.</p>
                  </Card>
                  <Card className="p-6 flex flex-col items-start bg-background/50 backdrop-blur-sm h-full rounded-[24px]">
                      <Repeat className="h-10 w-10 text-primary mb-4" />
                      <h3 className="text-2xl font-bold font-headline mb-2">Efficient integration</h3>
                      <p className="text-muted-foreground flex-grow">Integrate Microsoft Dynamics 365 with other systems for better data management, streamlined workflows, and improved productivity.</p>
                  </Card>
              </div>
          </AnimateOnScroll>
            
            <AnimateOnScroll className="mt-12 text-center">
                <Button asChild>
                    <Link href="/contact">Book a Demo</Link>
                </Button>
            </AnimateOnScroll>
        </div>
      </section>
      
      {/* How Aonflow works for you */}
       <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4 md:px-6">
            <AnimateOnScroll className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold font-headline">How Aonflow works for you</h2>
                <p className="mt-4 text-muted-foreground">
                    Aonflow's cloud-based platform offers user-friendly integration solutions for businesses and individuals. With multi-tenant integration support, our platform enables easy collaboration between users. By eliminating the need for custom coding, Aonflow simplifies the integration process, granting access to the full benefits of Microsoft Dynamics 365 without technical knowledge. Automate workflows, build and update processes, and streamline decision-making with seamless iPaaS integration with Microsoft Dynamics 365.
                </p>
            </AnimateOnScroll>
            <AnimateOnScroll 
                className="mt-12"
                onMouseEnter={() => setIsTabCarouselPaused(true)}
                onMouseLeave={() => setIsTabCarouselPaused(false)}
            >
            <Tabs 
                value={activeTab} 
                onValueChange={(value) => {
                    setActiveTab(value);
                    setIsTabCarouselPaused(true);
                }}
                className="w-full max-w-4xl mx-auto"
            >
                <TabsList className="grid w-full grid-cols-3 h-auto p-0 bg-transparent rounded-none">
                    {dynamicsAutomationTabs.map(tab => (
                        <TabsTrigger 
                            key={tab.value} 
                            value={tab.value} 
                            className={cn("flex items-center gap-2 h-auto py-4 px-2 data-[state=active]:bg-transparent text-muted-foreground data-[state=active]:text-primary data-[state=active]:shadow-none rounded-none border-b-2", activeTab === tab.value ? "border-primary" : "border-transparent")}
                        >
                            <tab.icon className="h-6 w-6"/>
                            <span>{tab.label}</span>
                        </TabsTrigger>
                    ))}
                </TabsList>
                <div className="bg-transparent p-8 rounded-b-lg">
                     <h3 className="text-2xl font-bold mb-6 font-headline text-primary text-center">{dynamicsAutomationTabs.find(t => t.value === activeTab)?.title}</h3>
                    {dynamicsAutomationTabs.map(tab => (
                         <TabsContent key={tab.value} value={tab.value} className="bg-transparent mt-0 text-left">
                             <div className="grid md:grid-cols-2 gap-8 items-start">
                                 <div>
                                     <h4 className="font-semibold text-xl mb-2">{tab.subtitle}</h4>
                                     <p className="text-muted-foreground">{tab.content}</p>
                                 </div>
                                 <div>
                                     <h4 className="font-semibold text-xl mb-2">{tab.subcontentTitle}</h4>
                                     <p className="text-muted-foreground">{tab.subcontent}</p>
                                 </div>
                             </div>
                             <div className="text-center mt-6">
                                <Button asChild>
                                    <Link href="/contact">Book a Demo</Link>
                                </Button>
                             </div>
                         </TabsContent>
                    ))}
                </div>
            </Tabs>
            </AnimateOnScroll>
        </div>
      </section>

      {/* See Aonflow in Action Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6 text-center">
            <AnimateOnScroll>
                <h2 className="text-3xl font-bold font-headline mb-12">See Aonflow in Action</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                    {[
                        {icon: Lightbulb, label: "Simple", description: "Simplicity is power"},
                        {icon: BrainCircuit, label: "Intuitive", description: "Intuitive is astuteness"},
                        {icon: Zap, label: "Fast", description: "Speed is efficiency"},
                        {icon: Scaling, label: "Flexible", description: "Flexible is agility"},
                        {icon: DollarSign, label: "Affordable", description: "Affordable is user-friendly"},
                        {icon: Briefcase, label: "Scalable", description: "Scalable is success"}
                    ].map((item, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <div className="bg-primary/10 text-primary p-4 rounded-full mb-4">
                                <item.icon className="h-10 w-10" />
                            </div>
                            <h3 className="font-semibold text-lg">{item.label}</h3>
                             <p className="text-sm text-muted-foreground">{item.description}</p>
                        </div>
                    ))}
                </div>
            </AnimateOnScroll>
        </div>
      </section>
      
      {/* Aonflow for any or all your integration... */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
            <AnimateOnScroll className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold font-headline mb-12">Aonflow for any or all your integration and automation of flows</h2>
            </AnimateOnScroll>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
                {aonflowForIntegration.map((item, index) => (
                    <AnimateOnScroll key={index} delay={index * 0.1}>
                        <Card className="p-6 h-full text-center flex flex-col items-center justify-start bg-primary/5">
                            <div className="bg-primary/10 text-primary p-4 rounded-full mb-4">
                                <item.icon className="h-8 w-8" />
                            </div>
                            <h3 className="text-lg font-semibold">{item.title}</h3>
                        </Card>
                    </AnimateOnScroll>
                ))}
            </div>
        </div>
      </section>

      {/* Popular Connectors */}
      <section className="py-20 md:py-28 bg-primary/5">
        <div className="container mx-auto px-4 md:px-6">
          <AnimateOnScroll className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold font-headline mb-12">
              Our popular and powerful Microsoft Dynamics 365 connectors
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll className="max-w-5xl mx-auto">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              plugins={[autoplay.current]}
              onMouseEnter={() => autoplay.current.stop()}
              onMouseLeave={() => autoplay.current.reset()}
              className="w-full"
            >
              <CarouselContent>
                <CarouselItem className="basis-full lg:basis-1/2 p-4">
                  <Card className="p-6 bg-background h-full">
                    <div className="flex items-center justify-center gap-8">
                      <div className="w-16 h-16 rounded-lg flex items-center justify-center bg-[#f0f0f0]">
                        <img src="/microsoft-dynamic.svg" alt="Microsoft Dynamics 365" className="h-12 w-12" />
                      </div>
                      <ArrowRight className="h-8 w-8 text-[#cccccc]" />
                      <div className="w-16 h-16 rounded-lg flex items-center justify-center bg-[#f0f0f0]">
                        <img src="/salesforce.svg" alt="Salesforce" className="h-12 w-12" />
                      </div>
                    </div>
                    <p className="mt-4 text-center font-medium">
                      Microsoft Dynamics 365 to Salesforce
                    </p>
                  </Card>
                </CarouselItem>
                <CarouselItem className="basis-full lg:basis-1/2 p-4">
                  <Card className="p-6 bg-background h-full">
                    <div className="flex items-center justify-center gap-8">
                       <div className="w-16 h-16 rounded-lg flex items-center justify-center bg-[#f0f0f0]">
                        <img src="/microsoft-dynamic.svg" alt="Microsoft Dynamics 365" className="h-12 w-12" />
                       </div>
                      <ArrowRight className="h-8 w-8 text-[#cccccc]" />
                       <div className="w-16 h-16 rounded-lg flex items-center justify-center bg-[#f0f0f0]">
                        <img src="/hubspot.svg" alt="HubSpot" className="h-12 w-12" />
                      </div>
                    </div>
                    <p className="mt-4 text-center font-medium">
                      Microsoft Dynamics 365 to HubSpot
                    </p>
                  </Card>
                </CarouselItem>
                <CarouselItem className="basis-full lg:basis-1/2 p-4">
                  <Card className="p-6 bg-background h-full">
                    <div className="flex items-center justify-center gap-8">
                      <div className="w-16 h-16 rounded-lg flex items-center justify-center bg-[#f0f0f0]">
                        <img src="/microsoft-dynamic.svg" alt="Microsoft Dynamics 365" className="h-12 w-12" />
                      </div>
                      <ArrowRight className="h-8 w-8 text-[#cccccc]" />
                      <div className="w-16 h-16 rounded-lg flex items-center justify-center bg-[#f0f0f0]">
                        <img src="/twilio.svg" alt="Twilio" className="h-12 w-12" />
                      </div>
                    </div>
                    <p className="mt-4 text-center font-medium">
                      Microsoft Dynamics 365 to Twilio
                    </p>
                  </Card>
                </CarouselItem>
                <CarouselItem className="basis-full lg:basis-1/2 p-4">
                  <Card className="p-6 bg-background h-full">
                    <div className="flex items-center justify-center gap-8">
                      <div className="w-16 h-16 rounded-lg flex items-center justify-center bg-[#f0f0f0]">
                        <img src="/microsoft-dynamic.svg" alt="Microsoft Dynamics 365" className="h-12 w-12" />
                      </div>
                      <ArrowRight className="h-8 w-8 text-[#cccccc]" />
                      <div className="w-16 h-16 rounded-lg flex items-center justify-center bg-[#f0f0f0]">
                        <img src="/netsuite.svg" alt="Netsuite" className="h-12 w-12" />
                      </div>
                    </div>
                    <p className="mt-4 text-center font-medium">
                      Microsoft Dynamics 365 to Netsuite
                    </p>
                  </Card>
                </CarouselItem>
              </CarouselContent>
              <div className="flex justify-center gap-4 mt-8">
                <CarouselPrevious />
                <CarouselNext />
              </div>
            </Carousel>
          </AnimateOnScroll>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <BackgroundAnimation className="absolute inset-0 z-0 opacity-50" />
        <div className="container mx-auto px-4 md:px-6 max-w-4xl relative z-10">
            <AnimateOnScroll className="text-center">
                 <h2 className="text-3xl font-bold font-headline mb-12">Frequently Asked Questions</h2>
            </AnimateOnScroll>
            <AnimateOnScroll delay={0.2}>
                <Accordion type="single" collapsible className="w-full">
                    {faqs.map((faq, index) => (
                        <AccordionItem value={`item-${index}`} key={index}>
                            <AccordionTrigger className="text-lg text-left">{faq.question}</AccordionTrigger>
                            <AccordionContent className="text-base text-muted-foreground">
                                {faq.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </AnimateOnScroll>
        </div>
      </section>
      

      {/* Final CTA */}
      <section className="py-20 md:py-28">
        <AnimateOnScroll className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold font-headline mb-4">See Aonflow in Action</h2>
            <Button asChild size="lg">
                <Link href="/contact">Connect Now</Link>
            </Button>
        </AnimateOnScroll>
      </section>

    </div>
  );
}

    

    

