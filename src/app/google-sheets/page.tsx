
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
  Heart,
  Hand,
  Lightbulb,
  DollarSign,
  Briefcase,
  GitBranch,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
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
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Autoplay from "embla-carousel-autoplay";
import React from 'react';

const googleSheetsUseCases = [
    {
        icon: Layers,
        title: "Centralized Data Aggregation",
        description: "Pull information from sources such as Salesforce, and QuickBooks Online into Google Sheets to create unified data for reporting and analysis with Aonflow."
    },
    {
        icon: DollarSign,
        title: "Budget Tracking and Updates",
        description: "Integrate financial data from QuickBooks Online into Google Sheets so the budget spreadsheets directly reflect up-to-date expenses and revenues."
    },
    {
        icon: Users,
        title: "Collaborative Data Sharing",
        description: "When data in Google Sheets changes, Aonflow can push that data to connected systems or alert teams in Slack, so stakeholders always have the latest insights in front of them."
    },
    {
        icon: Repeat,
        title: "Scheduled Data Refresh",
        description: "With the help of Aonflow, schedule Google Sheets so that every hour, day, or week will have fresh data from all the integrated apps, making sure your reports are always up to date."
    },
    {
        icon: FileText,
        title: "Custom Reporting Setup",
        description: "Aonflow allows you to connect multiple systems and aggregate disparate systems into Google Sheets, enabling teams to build custom reports and pivot tables without having to log into each system to extract the data."
    }
];


const aonflowForIntegration = [
    {
        icon: Zap,
        title: "Google Sheet integration for all your CRM solutions"
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
    question: "What is Google Sheets Integration?",
    answer: "Google Sheets Integration means integrating your spreadsheets with other business applications so data can flow automatically between them. Forget about having to do this manually by exporting or importing CSV files: with integration, you can sync information at the speed of light (or on the schedule) and update your spreadsheets with the freshest information of your CRM, ERP, marketing, and other tools. By integrating this process, you can eliminate manual data entry and reduce errors, and you know you have everyone in your organization working from the same page with up-to-date, accurate information at their fingertips"
  },
  {
    question: "What types of data can I connect with Google Sheets?",
    answer: (
      <div>
        <p className="mb-2">Using the Aonflow iPaaS platform, you can choose among diverse connectors to push data back and forth between Google Sheets and the other applications that are central to your business operations. Get the power of Sheets with:</p>
        <ul className="list-disc pl-5 space-y-2">
            <li><strong>Salesforce:</strong> Auto-fill leads, opportunities, or reports in Sheets.</li>
            <li><strong>Microsoft Dynamics 365:</strong> Sales, Operations, and Finance Sync records.</li>
            <li><strong>Twilio:</strong> Consolidate SMS or call logs into Sheets for reporting.</li>
            <li><strong>WooCommerce:</strong> Create live sales and inventory reports.</li>
            <li><strong>HubSpot:</strong> Sync marketing and CRM data with your spreadsheets.</li>
            <li><strong>Business Central:</strong> Integrate your operational data with spreadsheets to monitor activity.</li>
            <li><strong>QuickBooks Online:</strong> Add sheets to QuickBooks invoices transaction details and financial stats.</li>
        </ul>
        <p className="mt-2">And more…. If you don’t see your preferred tool here, contact our team since we add new connectors regularly and can provide custom integrations.</p>
      </div>
    )
  },
  {
    question: "Why should I integrate Google Sheets using Aonflow?",
    answer: (
      <div>
        <p className="mb-2">When you integrate Google Sheets using the Aonflow iPaaS integration solution, you get the following benefits:</p>
        <ul className="list-disc pl-5 space-y-2">
            <li><strong>Time Savings:</strong> Eliminate the tedium of manual uploads and downloads, the annoyance of the CSV export dance, and other time-eaters.</li>
            <li><strong>Near Real-Time Accuracy:</strong> Ensure that everyone has access to the same, accurate, and up-to-date information.</li>
            <li><strong>Improved Collaboration:</strong> Share live spreadsheets with your team, vendors, and clients with a few clicks – no manual refreshing necessary.</li>
            <li><strong>Visibility:</strong> Import sales, marketing, accounting, and operational data into Google Sheets for in-depth creation of reports, dashboards, and pivot tables.</li>
            <li><strong>Scalability:</strong> As your company expands, add and modify the integrations that you need rather than having to install a new software platform.</li>
        </ul>
      </div>
    )
  },
    {
        question: "Do I need technical expertise to set up Google Sheets integration?",
        answer: (
            <div>
                <p className="mb-2">Not necessarily. Aonflow is purpose-built to be easy to use:</p>
                <ul className="list-disc pl-5 space-y-2">
                    <li><strong>No Code/Low Code Interface:</strong> Non-technical users can frequently create simple integrations with our easy-to-use mapping tools.</li>
                    <li><strong>Complex Customization:</strong> For more complicated work—like custom scripts, massive data transformations, or multi-part sequences—your IT team or our professional services can provide backing to make sure everything is set up correctly.</li>
                </ul>
                <p className="mt-2">Whether you are creating a simple query or a more complicated use case, our support team will guide you through each step.</p>
            </div>
        )
    },
    {
        question: "Is the integration secure?",
        answer: "Yes. Aonflow is serious about data security. Data in transit (HTTPS/SSL) between your Google Sheets and other apps are protected with industry-standard encryption. Team members with role-based access control can only configure integrations if they can authenticate with the user authentication. To the extent such regulations apply to us, we also comply with data privacy best practices and other relevant compliance regulations."
    },
    {
        question: "Is near real-time or scheduled syncing available?",
        answer: (
            <div>
                <p className="mb-2">Aonflow iPaaS allows you to select the frequency at which your integrations execute:</p>
                <ul className="list-disc pl-5 space-y-2">
                    <li><strong>Flow Activation:</strong> Set up triggers and update Google Sheets (or external systems) the moment any update occurs.</li>
                    <li><strong>Scheduled:</strong> Configure at set intervals (e.g. hourly, daily, weekly) for managing syncs in larger bulk or when real-time updates don’t need to happen.</li>
                </ul>
                <p className="mt-2">You can configure this behavior and maintain the performance of your system, especially while maintaining a large volume of data because this flexibility keeps you up to date with timely data.</p>
            </div>
        )
    },
    {
        question: "How do I handle large or complex data sets in Google Sheets?",
        answer: (
             <div>
                <p className="mb-2">Aonflow iPaaS can scale with your organization’s needs. When you work with large data sets, you might think about:</p>
                <ul className="list-disc pl-5 space-y-2">
                    <li><strong>Pagination and Batch Processing:</strong> Divide large data loads into smaller chunks to maintain Sheets’ responsiveness and prevent hitting API limits.</li>
                    <li><strong>Filtration and Conditions:</strong> Sync only the relevant data you need, reducing clutter and improving performance.</li>
                    <li><strong>Multiple Sheet tabs:</strong> Make larger data sets easier to navigate by placing them on separate tabs</li>
                </ul>
                <p className="mt-2">We strongly suggest you consult our internal support or professional services teams on data volume and performance best practices to optimize your integrations.</p>
            </div>
        )
    },
    {
        question: "Are there any Google API limits or constraints I should be aware of?",
        answer: "Google Sheets has some limits, like the maximum number of cells you can have in a single sheet and daily API quotas. Under normal usage patterns, very few users run into these limits, although high-volume use cases may need to perform batch syncing or other techniques to avoid thresholds. Aonflow iPaaS platform allows you to manage this with ease like configurable data batches, retries, and error handling. If you anticipate the need for very large data migrations or high-frequency updates, we will discuss options to develop strategies to remain within Google’s API guidelines."
    },
    {
        question: "How long does it take to implement a Google Sheets integration?",
        answer: (
            <div>
                <p className="mb-2">The timeline for implementations can differ based on your needs:</p>
                <ul className="list-disc pl-5 space-y-2">
                    <li><strong>Simple Integrations:</strong> A few data syncs or standard workflows can often be up and running in a matter of days.</li>
                    <li><strong>Complex Scenarios:</strong> More than the coming use of systems with large volumes of data, multiple systems connected, or sophisticated business logic may result in more configuration required and related testing.</li>
                </ul>
                <p className="mt-2">Our available professional services team can help scope your project and give a realistic timeline based on your goals and complexity.</p>
            </div>
        )
    },
    {
        question: "What does pricing look like for Google Sheets Integration?",
        answer: (
             <div>
                <p className="mb-2">Several factors affect the pricing of Aonflow iPaaS Integration solutions:</p>
                <ul className="list-disc pl-5 space-y-2">
                    <li>The total number of applications beyond Google Sheets that you are integrating.</li>
                    <li>How much and how often data is being transferred.</li>
                    <li>Build complexity of the Workflow. A simple one-way sync is generally going to be less expensive than multi-step or bidirectional processes with complex transitions.</li>
                    <li>Advanced or dedicated support options often incur an added charge to your subscription.</li>
                </ul>
                <p className="mt-2">Contact our sales team for an accurate quote based on your use case.</p>
            </div>
        )
    },
    {
        question: "What kind of support does Aonflow provide for Google Sheets integrations?",
        answer: (
             <div>
                <p className="mb-2">We have a strong safety net to help you succeed:</p>
                <ul className="list-disc pl-5 space-y-2">
                    <li><strong>Customer Support:</strong> Get in touch via email, or phone for immediate assistance.</li>
                    <li><strong>Professional Services:</strong> For highly customized or enterprise-level projects, our experts can assist with implementation, script development, and best-practice consulting.</li>
                    <li><strong>Continued Support:</strong> We actively maintain Aonflow iPaaS platform by updating it to align with Google API modifications, providing you with a reliable solution for the long haul.</li>
                </ul>
            </div>
        )
    },
    {
        question: "Can I combine Google Sheets with other tools in a single workflow?",
        answer: "Yes. Aonflow’s iPaaS integration solutions’ defining feature is the orchestration of multi-app workflows. As an example, you could build a process that pulls inventory levels from WooCommerce to Google Sheets and updates communication channels if the stock is below a particular threshold. These chained automations also save a lot of time and help you keep track of cross-functional processes in near-missions."
    }
];

const googleSheetsAutomationTabs = [
  {
    value: "integration",
    icon: BrainCircuit,
    label: "Integration",
    title: "Google sheets integration, made easy",
    subtitle: "Integrate and configure Google Sheets to help streamline data and workflows",
    content: "Aonflow’s Google Sheets connector simplifies integration across applications and processes, eliminating the need for separate tools. It offers unparalleled agility and scalability while maintaining strict security protocols to protect your data as it moves between applications. With Aonflow’s iPaaS solutions, you can easily integrate Google Sheets into your workflows and streamline your business processes in no time.",
    subcontentTitle: "One self-service platform for all of your Google Sheets integration solutions",
    subcontent: "Experience a fast and secure way to manage data across various applications. You can easily integrate custom spreadsheets to streamline data flow management and use their analytical power to create seamless experiences across your business. Align your teams with accurate data and achieve your business goals faster, without the need for separate integration tools or tech applications."
  },
  {
    value: "automation",
    icon: FileCog,
    label: "Automation",
    title: "Google sheet automation made simple",
    subtitle: "Automate Google Sheets to enhance project management processes.",
    content: "Aonflow’s powerful iPaaS lets you connect Google Sheets and streamline your data and workflows, and free up time for you to do what matters most. No code integration automation drives marketing efforts and enables business solutions and integration with any application. You can effortlessly connect Google Sheets and automate time-consuming tasks to scale any process more efficiently.",
    subcontentTitle: "All-in-one intuitive platform for all your Google Sheets automation solutions",
    subcontent: "Our intuitive platform offers visual access to Google Sheets API, including customized objects, with flexible and future-proof integration capabilities that help streamline operations, reduce costs, and improve sales and marketing efficiency. We allow for customized Google Sheets integration with triggers and actions, efficient business process creation, customized workflow building, intuitive automation, and flexible workflow editing, and changes."
  },
  {
    value: "use-case",
    icon: Layers,
    label: "Use case",
    title: "Google sheet use case, resolved",
    subtitle: "Automate Google Sheets workflows with Aonflow's data integration solutions",
    content: "Experience an effortless way to automate workflows that span across your Google Sheets applications. Set up triggers that activate workflows automatically when specific events occur in any of your apps. With Aonflow, seamlessly synchronize data between different apps and systems without the need for coding. This allows you to streamline your workflows and save time on administrative tasks.",
    subcontentTitle: "Streamline workflows with automated Google Sheets Integration for added benefits",
    subcontent: "Create custom integrations between Google Sheets and other apps, automate bulk updates, and improve data enrichment, lead routing, and lead-to-account matching. Automating these processes can help drive enhanced productivity and generate revenue growth. Aonflow allows you to easily update record types, objects, and custom fields without any IT support, providing greater flexibility and control over your workflows."
  }
];

export default function GoogleSheetsPage() {
  const [activeTab, setActiveTab] = useState(googleSheetsAutomationTabs[0].value);
  const [isTabCarouselPaused, setIsTabCarouselPaused] = useState(false);
  
  const autoplay = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );

  useEffect(() => {
    if (isTabCarouselPaused) return;
    const tabRotationInterval = setInterval(() => {
      setActiveTab(prevTab => {
        const currentIndex = googleSheetsAutomationTabs.findIndex(tab => tab.value === prevTab);
        const nextIndex = (currentIndex + 1) % googleSheetsAutomationTabs.length;
        return googleSheetsAutomationTabs[nextIndex].value;
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
                <img src="/google-sheet.svg" alt="Google Sheets" className="h-40 w-auto mb-4" />
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl font-headline text-foreground">
                    Google Sheets Integration
                </h1>
                <p className="mt-4 text-lg text-muted-foreground max-w-3xl">
                   Facilitate real-time collaboration and data synchronization for streamlined workflow and enhanced productivity with Google Sheets Integration solutions.
                </p>
            </AnimateOnScroll>
            
            <AnimateOnScroll delay={0.2}>
              <div className="grid grid-cols-1 gap-8">
                  <Card className="p-6 flex flex-col items-start bg-background/50 backdrop-blur-sm h-full col-span-1 md:col-span-3 rounded-[24px]">
                      <BrainCircuit className="h-10 w-10 text-primary mb-4" />
                      <h3 className="text-2xl font-bold font-headline mb-2">Connect. Integrate. Automate.</h3>
                      <p className="text-muted-foreground flex-grow">
                          Aonflow's iPaaS Integration solutions enable you to seamlessly integrate Google spreadsheets with a wide range of cloud-based and on-premises services. Our powerful platform makes it easy to automate workflows, share data across multiple systems, and improve collaboration and productivity across your teams and the organization.
                      </p>
                  </Card>
              </div>
              <div className="grid md:grid-cols-3 gap-8 mt-8">
                  <Card className="p-6 flex flex-col items-start bg-background/50 backdrop-blur-sm h-full rounded-[24px]">
                      <FileCog className="h-10 w-10 text-primary mb-4" />
                      <h3 className="text-2xl font-bold font-headline mb-2">Custom workflows</h3>
                      <p className="text-muted-foreground flex-grow">Create custom Google Sheet workflows through triggers, actions, and searches. Use it either to execute or act upon a specific event.</p>
                  </Card>
                  <Card className="p-6 flex flex-col items-start bg-background/50 backdrop-blur-sm h-full rounded-[24px]">
                      <Layers className="h-10 w-10 text-primary mb-4" />
                      <h3 className="text-2xl font-bold font-headline mb-2">Effortless integration</h3>
                      <p className="text-muted-foreground flex-grow">Visually integrate Google Sheets into any workflow in a few clicks and save time and resources without writing a single line of code.</p>
                  </Card>
                  <Card className="p-6 flex flex-col items-start bg-background/50 backdrop-blur-sm h-full rounded-[24px]">
                      <Users className="h-10 w-10 text-primary mb-4" />
                      <h3 className="text-2xl font-bold font-headline mb-2">Collaborative spreadsheets</h3>
                      <p className="text-muted-foreground flex-grow">Create, build, modify, update, and collaborate on spreadsheets and instantly share data online with your teams without any IT support.</p>
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
                    Aonflow simplifies integration for all users with its intuitive cloud-based technology. Connect your systems, applications, and data effortlessly without relying on developers or IT professionals. Automate business processes and save time with the seamless movement of data between different applications. Integrate Google Sheets into your workflows for efficient management of inventory, expense tracking, and customer data.
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
                    {googleSheetsAutomationTabs.map(tab => (
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
                     <h3 className="text-2xl font-bold mb-6 font-headline text-primary text-center">{googleSheetsAutomationTabs.find(t => t.value === activeTab)?.title}</h3>
                    {googleSheetsAutomationTabs.map(tab => (
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

      {/* Flow with Aonflow Section */}
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
      
      {/* Google Sheets Integration Use Cases */}
      <section className="py-20 md:py-28 bg-primary/5">
        <div className="container mx-auto px-4 md:px-6">
            <AnimateOnScroll className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold font-headline mb-12">Google Sheets Integration Use Cases</h2>
            </AnimateOnScroll>
             <AnimateOnScroll className="max-w-5xl mx-auto">
              <Carousel
                opts={{ align: "start", loop: true }}
                plugins={[autoplay.current]}
                onMouseEnter={() => autoplay.current.stop()}
                onMouseLeave={() => autoplay.current.reset()}
                className="w-full"
              >
              <CarouselContent>
                {googleSheetsUseCases.map((useCase, index) => (
                    <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 p-4">
                        <Card className="p-6 h-full flex flex-col items-center text-center bg-background">
                            <div className="text-primary flex-shrink-0 mb-4">
                                <useCase.icon className="h-10 w-10" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold font-headline mb-2">{useCase.title}</h3>
                                <p className="text-muted-foreground">{useCase.description}</p>
                            </div>
                        </Card>
                    </CarouselItem>
                ))}
                </CarouselContent>
                <div className="flex justify-center gap-4 mt-8">
                  <CarouselPrevious />
                  <CarouselNext />
                </div>
            </Carousel>
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
              Our popular and powerful Google Sheets connectors
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
                        <img src="/google-sheet.svg" alt="Google Sheets" className="h-12 w-12" />
                      </div>
                      <ArrowRight className="h-8 w-8 text-[#cccccc]" />
                      <div className="w-16 h-16 rounded-lg flex items-center justify-center bg-[#f0f0f0]">
                        <img src="/salesforce.svg" alt="Salesforce" className="h-12 w-12" />
                      </div>
                    </div>
                    <p className="mt-4 text-center font-medium">
                      Google Sheet + Salesforce
                    </p>
                  </Card>
                </CarouselItem>
                <CarouselItem className="basis-full lg:basis-1/2 p-4">
                  <Card className="p-6 bg-background h-full">
                    <div className="flex items-center justify-center gap-8">
                       <div className="w-16 h-16 rounded-lg flex items-center justify-center bg-[#f0f0f0]">
                        <img src="/google-sheet.svg" alt="Google Sheets" className="h-12 w-12" />
                       </div>
                      <ArrowRight className="h-8 w-8 text-[#cccccc]" />
                       <div className="w-16 h-16 rounded-lg flex items-center justify-center bg-[#f0f0f0]">
                        <img src="/microsoft-dynamic.svg" alt="Microsoft Dynamics 365" className="h-12 w-12" />
                      </div>
                    </div>
                    <p className="mt-4 text-center font-medium">
                      Google Sheet + Microsoft Dynamics 365
                    </p>
                  </Card>
                </CarouselItem>
                <CarouselItem className="basis-full lg:basis-1/2 p-4">
                  <Card className="p-6 bg-background h-full">
                    <div className="flex items-center justify-center gap-8">
                      <div className="w-16 h-16 rounded-lg flex items-center justify-center bg-[#f0f0f0]">
                        <img src="/google-sheet.svg" alt="Google Sheets" className="h-12 w-12" />
                      </div>
                      <ArrowRight className="h-8 w-8 text-[#cccccc]" />
                      <div className="w-16 h-16 rounded-lg flex items-center justify-center bg-[#f0f0f0]">
                        <img src="/twilio.svg" alt="Twilio" className="h-12 w-12" />
                      </div>
                    </div>
                    <p className="mt-4 text-center font-medium">
                      Google Sheet + Twilio
                    </p>
                  </Card>
                </CarouselItem>
                <CarouselItem className="basis-full lg:basis-1/2 p-4">
                  <Card className="p-6 bg-background h-full">
                    <div className="flex items-center justify-center gap-8">
                      <div className="w-16 h-16 rounded-lg flex items-center justify-center bg-[#f0f0f0]">
                        <img src="/google-sheet.svg" alt="Google Sheets" className="h-12 w-12" />
                      </div>
                      <ArrowRight className="h-8 w-8 text-[#cccccc]" />
                      <div className="w-16 h-16 rounded-lg flex items-center justify-center bg-[#f0f0f0]">
                        <img src="/netsuite.svg" alt="Netsuite" className="h-12 w-12" />
                      </div>
                    </div>
                    <p className="mt-4 text-center font-medium">
                      Google Sheet + Netsuite
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

    

    