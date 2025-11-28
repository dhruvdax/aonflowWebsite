
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
  Calendar,
  Server,
  Database,
  Wand,
  Sparkles,
  SlidersHorizontal,
  Link2,
  Table,
  PlusCircle,
  ThumbsUp,
  CheckCircle,
  Activity,
  Search,
  PieChart,
  Accessibility,
  Combine,
  TestTubeDiagonal,
  Workflow,
  Contact,
  File,
  Handshake,
  MonitorPlay,
  GitCompareArrows,
  FilePlus,
  FileUp,
  UserPlus,
  FileSignature,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from '@/components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { AnimateOnScroll } from '@/components/animate-on-scroll';
import { BackgroundAnimation } from '@/components/background-animation';
import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Autoplay from "embla-carousel-autoplay";
import { cn } from '@/lib/utils';

const powerFeatures = [
    {
        icon: DollarSign,
        title: "Cost and Time Savings",
        description: "Automate repetitive tasks and reduce manual data entry, resulting in cost and time savings, and allowing resources to be allocated more efficiently within your organization."
    },
    {
        icon: Repeat,
        title: "Streamlined Data Sync",
        description: "Effortlessly synchronize and update customer data between Salesforce and QuickBooks Online, ensuring accuracy and consistency across platforms."
    },
    {
        icon: Zap,
        title: "Automated Workflows",
        description: "Trigger automated actions based on specific events, optimizing sales processes, and enhancing overall efficiency."
    },
    {
        icon: HeartHandshake,
        title: "Enhanced Customer Engagement",
        description: "Elevate customer interactions with personalized communications and real-time notifications, fostering stronger relationships and loyalty."
    },
    {
        icon: LineChart,
        title: "Increased Productivity",
        description: "Streamlined workflows and automated processes eliminate manual tasks, allowing your team to focus on high-value activities, and boosting overall productivity."
    },
    {
        icon: Users,
        title: "User-Friendly Interface",
        description: "Benefit from a user-friendly interface that simplifies the integration process, reducing the need for complex coding and technical expertise."
    },
    {
        icon: Target,
        title: "Lead Management",
        description: "Effectively manage leads by integrating lead-related data seamlessly, providing a comprehensive view of your sales pipeline."
    },
    {
        icon: Check,
        title: "Financial Data Accuracy",
        description: "Ensure accurate and up-to-date financial information by synchronizing transactions and product data between Salesforce and QuickBooks Online."
    },
    {
        icon: ShieldCheck,
        title: "Secure Data Transfers",
        description: "Prioritize data security with top-tier measures, guaranteeing safe and compliant transfer of sensitive information between the two platforms."
    },
    {
        icon: Users,
        title: "Seamless Collaboration",
        description: "Foster seamless collaboration between Salesforce and QuickBooks Online, promoting better communication and coordination across different business functions."
    }
];

const aonflowReasons = [
    { icon: Building, title: "Multi-tenant Architecture", description: "Imagine a world where your whole team can work together seamlessly. Aonflow's multi-tenant architecture lets everyone in your organization collaborate effortlessly on creating and managing workflows." },
    { icon: Key, title: "Privileges-based system", description: "No more head-scratching over who gets access to what. With Aonflow, you enjoy the privileges from granting to restricting access based on different roles in your workflow." },
    { icon: Eye, title: "See the Big Picture", description: "Aonflow gives you a bird's-eye view of your data's journey. Say goodbye to data mysteries and hello to informed decisions with our longitudinal views." },
    { icon: Puzzle, title: "Connect the Dots Like a Pro", description: "Connecting the dots has never been simpler. Aonflow makes creating connectors a piece of cake. Forget about dealing with third-party apps for credentials—it's all smooth, seamless, and ready to flow." },
    { icon: RefreshCw, title: "Eliminate Token Headaches", description: "Token expirations? Not on our watch. Aonflow's advanced algorithms detect expired connections and refresh them automatically. Your data moves smoothly, without any interruptions." },
    { icon: Clock, title: "Your Workflow, Your Schedule", description: "Take the reins with Aonflow's scheduling feature. Plan and execute workflows on your terms, making the most of your resources." },
    { icon: Server, title: "Fewer Trips to Third-Party Apps", description: "Aonflow's secret ingredient is cached systems. They store the data that doesn't change often, like entity details and fields. Less back-and-forth with third-party apps, but you can refresh when you want." },
    { icon: Wand, title: "Field Magic", description: "Aonflow does the heavy lifting with field mapping. We've got your back by pre-filling those essential fields for any entity. No more memorizing field-related entities." },
    { icon: SlidersHorizontal, title: "Your Data, Your Way", description: "Need to give your data a makeover? Aonflow's got you covered with expressions. Customize your data before sending it off with ease." },
    { icon: Link2, title: "Grab Data from Linked Tables", description: "Use references to grab data from linked tables and whisk it away to your chosen destination. It's like having your own data chauffeur." },
    { icon: PlusCircle, title: "Create Custom Fields on the Fly", description: "Like custom fields? Aonflow makes it a breeze. Create them right from the app, no third-party app detours are needed." },
    { icon: ThumbsUp, title: "Super Easy Upserts", description: "Aonflow knows third-party apps like a best friend. We offer upsert options just like the apps do. Keep things smooth and simple." },
    { icon: Activity, title: "Real-Time Play-by-Play", description: "Stay in the know with real-time updates during data transfer. Watch the action unfold as your data goes from source to destination." },
    { icon: Search, title: "Logs for Data Detectives", description: "Get all the necessary details with comprehensive logs. See what went right and, if things went sideways, uncover the ‘Why.’" },
    { icon: PieChart, title: "Execution Insights", description: "Dive deep into every execution with Aonflow. Know how many data points made the leap and every step they took along the way." },
    { icon: Accessibility, title: "Seamless Integration for Everyone", description: "Aonflow is user-friendly through and through. No need to be tech-savvy. Everyone in your team can use it like a pro." },
];

const popularIntegrations = [
    { icon: UserPlus, title: "Generate Customers", description: "Generate QuickBooks Online customers when new Salesforce accounts are created" },
    { icon: FileUp, title: "Generate Invoices", description: "Generate QuickBooks Online invoices when Salesforce records are updated" },
    { icon: FilePlus, title: "Create Records", description: "Create Salesforce records for new QuickBooks Online vendors" },
    { icon: FileSignature, title: "Create Invoices", description: "Create new QuickBooks Online invoices directly from Salesforce records" },
];

const triggersActions = {
  triggers: [
    { title: "When specific events occur", isHeader: true },
    { title: "Generic / polling:", description: "Creation of a new Account or update of an existing Account" },
    { title: "Creation of a new Item (e.g., product or service)" },
    { title: "Generation of a new Invoice in Quickbooks based on actions" },
    { title: "Receipt of payment for an existing Bill" },
    { title: "...and more", isItalic: true },
    { title: "This polling trigger retrieves objects of any selected type, supporting response pagination and various business entities." },
    { title: "Fundamental:", description: "Creation or update of a custom or built-in object in Salesforce (e.g., Account, Contact, Lead, Product)" },
    { title: "Advanced:", description: "Results from an SOQL query, e.g., checking the account and contact associated with a recently updated opportunity or setting the currency to corporate currency when a new opportunity is created" },
    { title: "Receipts of payments received in QuickBooks Online are created in Salesforce in real-time." },
  ],
  actions: [
    { title: "Perform the following tasks", isHeader: true },
    { title: "Fundamental:", description: "Generate a new entity that cannot be added with the API" },
    { title: "Add a new entity or update an existing one in Quickbooks" },
    { title: "For instance: Create a new Account in Quickbooks when a new Lead is generated in Salesforce, Update the Invoice in Quickbooks when a Billing Address is changed in Salesforce", isExample: true },
    { title: "Establish a new object in Salesforce (e.g., Account, Lead, Contact, Opportunity)" },
    { title: "Create or update a designated object in Salesforce" },
    { title: "Retrieve a list of objects that meet specific criteria" },
    { title: "Retrieve an object available in Salesforce by a chosen field (e.g., Account ID)" },
    { title: "Advanced:", description: "Apply filters to your organization's data for specific information using SOQL" },
    { title: "Swiftly load large data quantities from a CSV file into Salesforce - bulk create/update/delete/upsert action" },
    { title: "Retrieve records to a CSV file - bulk query action" },
  ],
};

const howItWorksSteps = [
    { number: 1, text: "Authenticate both platforms securely." },
    { number: 2, text: "Pick a trigger app to initiate your automation swiftly." },
    { number: 3, text: "Select an action from the other app conveniently." },
    { number: 4, text: "Effortlessly choose the data to exchange between the apps." },
];

const howItWorksFeatures = [
    { icon: GitCompareArrows, title: "Connect", description: "Establish a secure link between Salesforce and QuickBooks Online effortlessly, creating a foundation for seamless data exchange and integration initiation." },
    { icon: Settings, title: "Configure", description: "Tailor the integration to your needs by customizing settings, ensuring a harmonized workflow alignment between Salesforce and QuickBooks Online." },
    { icon: Users, title: "Sync and Collaborate", description: "Synchronize customer data, transactions, and products between platforms. Promote collaboration with a unified data view, enhancing team coordination." },
    { icon: Zap, title: "Automate", description: "Boost efficiency by automating workflows and processes. Set triggers for actions, reducing manual intervention and allowing strategic focus for your team." }
];


export default function SalesforceQuickbooksClientPage() {
    const autoplay = React.useRef(
        Autoplay({ delay: 5000, stopOnInteraction: true })
    );

    return (
        <div className="bg-background text-foreground">
            {/* Hero Section */}
            <section className="relative w-full bg-primary/10 py-20 md:py-28 lg:py-32 overflow-hidden">
                <BackgroundAnimation className="absolute inset-0 z-0 opacity-50" />
                <div className="container mx-auto px-4 md:px-6 z-10 relative">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                    <AnimateOnScroll>
                        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl font-headline text-foreground">
                            Salesforce and QuickBooks Online Integration
                        </h1>
                        <p className="mt-6 text-lg text-muted-foreground max-w-xl">
                            Automate the creation of invoices from both built-in and customized objects, synchronize customer and sales data, as well as transactions and product details through our QuickBooks Online - Salesforce integration. Enhance operational efficiency by effortlessly managing these tasks for a seamless business experience.
                        </p>
                        <div className="mt-8">
                            <Button asChild size="lg">
                                <Link href="/contact">Get a Free Demo</Link>
                            </Button>
                        </div>
                    </AnimateOnScroll>
                    <AnimateOnScroll delay={0.2} className="flex flex-col items-center">
                        <Image
                            src="/salesforce-quickbooks-integration/salesforce-quickbooks-integration.svg"
                            alt="Salesforce and QuickBooks Integration"
                            width={500}
                            height={300}
                            className="object-contain"
                            data-ai-hint="integration diagram"
                        />
                    </AnimateOnScroll>
                </div>
                </div>
            </section>
            
            {/* Sync Section */}
             <section className="py-20 md:py-28">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                         <div className="flex justify-center">
                            <Image 
                                src="/salesforce-quickbooks-integration/salesforce-quickbooks-connector.svg" 
                                alt="Salesforce and Quickbooks integration diagram" 
                                width={650}
                                height={450}
                                className="w-[60%]"
                                data-ai-hint="integration diagram"
                            />
                        </div>
                        <div>
                            <h2 className="text-3xl font-bold font-headline">Salesforce + QuickBooks Online Integration Connector</h2>
                            <p className="mt-4 text-muted-foreground">
                                Integration of QuickBooks Online with Salesforce provides a holistic view, sharing data between sales and accounting, including customer info, sales orders, expenses, and invoicing. This synergy minimizes duplicate data entry, enhances productivity, and provides valuable insights for forecasting. Continuous collaboration between accounting, sales, and other teams involves sharing customer information, expenses, sales orders, and invoicing. Manual data exchange hinders processes and increases the risk of errors.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            
            {/* Power of Integration Section */}
            <section className="py-20 md:py-28 bg-primary/5">
                <div className="container mx-auto px-4 md:px-6">
                    <AnimateOnScroll className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="text-3xl font-bold font-headline">Discover the Power of Salesforce Integration with QuickBooks Online</h2>
                    </AnimateOnScroll>
                    <AnimateOnScroll>
                        <Carousel
                            opts={{
                                align: "start",
                                loop: true,
                            }}
                            plugins={[autoplay.current]}
                            onMouseEnter={() => autoplay.current.stop()}
                            onMouseLeave={() => autoplay.current.reset()}
                            className="w-full max-w-6xl mx-auto"
                        >
                            <CarouselContent>
                                {powerFeatures.map((feature, index) => (
                                    <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 p-4">
                                        <Card className="p-6 h-full text-center flex flex-col items-center bg-background/50">
                                            <div className="text-primary bg-primary/10 p-4 rounded-full mb-4">
                                                <feature.icon className="h-8 w-8" />
                                            </div>
                                            <h3 className="text-xl font-bold font-headline mb-2">{feature.title}</h3>
                                            <p className="text-muted-foreground text-sm flex-1">{feature.description}</p>
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

             <section className="py-20 md:py-28">
                <div className="container mx-auto px-4 md:px-6 max-w-6xl">
                    <AnimateOnScroll className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="text-3xl font-bold font-headline">How It Works</h2>
                        <p className="mt-4 text-muted-foreground">
                            Discover how Salesforce + QuickBooks Online Integration works effortlessly
                        </p>
                    </AnimateOnScroll>
                    
                    <div className="relative mb-12">
                        <div className="absolute top-1/2 left-0 w-full h-0.5 bg-border -translate-y-1/2"></div>
                        <div className="relative flex justify-between">
                            {howItWorksSteps.map((step, index) => (
                                <div key={index} className="flex flex-col items-center text-center w-1/4">
                                    <div className="bg-background z-10">
                                        <div className="w-10 h-10 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center text-primary font-bold">
                                            {step.number}
                                        </div>
                                    </div>
                                    <p className="mt-4 text-sm text-muted-foreground">{step.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    
                    <p className="text-center text-muted-foreground font-semibold mb-12">Save time for more essential tasks with simplified automation.</p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                        {howItWorksFeatures.map((item, index) => (
                            <AnimateOnScroll key={index} delay={index * 0.1}>
                                <div className="flex items-start gap-4">
                                    <div className="text-primary flex-shrink-0">
                                        <item.icon className="h-10 w-10" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                                        <p className="text-muted-foreground text-sm">{item.description}</p>
                                    </div>
                                </div>
                            </AnimateOnScroll>
                        ))}
                    </div>
                </div>
            </section>
            
             {/* Reasons to Choose Aonflow */}
            <section className="py-20 md:py-28 bg-primary/5">
                <div className="container mx-auto px-4 md:px-6">
                    <AnimateOnScroll className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="text-3xl font-bold font-headline">Reason to choose Aonflow</h2>
                    </AnimateOnScroll>
                    <AnimateOnScroll>
                        <Carousel
                          opts={{
                            align: "start",
                            loop: true,
                          }}
                          plugins={[autoplay.current]}
                          onMouseEnter={() => autoplay.current.stop()}
                          onMouseLeave={() => autoplay.current.reset()}
                          className="w-full max-w-6xl mx-auto"
                        >
                          <CarouselContent>
                            {aonflowReasons.map((reason, index) => (
                              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 p-4">
                                <Card className="p-6 h-full bg-background text-center flex flex-col items-center">
                                   <div className="bg-primary/10 text-primary p-3 rounded-full mb-4">
                                     <reason.icon className="h-6 w-6" />
                                   </div>
                                  <h3 className="font-bold text-lg text-primary mb-2">{reason.title}</h3>
                                  <p className="text-muted-foreground text-sm flex-1">{reason.description}</p>
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

             {/* CTA Banner */}
            <div className="container mx-auto px-4 md:px-6 my-20">
                <section className="py-16 bg-primary-gradient text-white rounded-3xl">
                    <div className="container mx-auto px-4 md:px-6 text-center">
                       <AnimateOnScroll>
                            <h2 className="text-2xl font-bold mb-4">Our Integration Promise</h2>
                            <div className="grid md:grid-cols-3 gap-8 items-start mb-8">
                                <div className="flex flex-col items-center">
                                    <GitCompareArrows className="h-14 w-14 mb-4" />
                                    <h3 className="font-semibold text-lg">Harmonized Data Flow</h3>
                                    <p className="text-sm opacity-90 mt-1">Seamlessly sync data, breaking down information silos for a unified view across Salesforce and QuickBooks Online.</p>
                                </div>
                                <div className="flex flex-col items-center">
                                    <Scaling className="h-14 w-14 mb-4" />
                                    <h3 className="font-semibold text-lg">Scalability Assurance</h3>
                                    <p className="text-sm opacity-90 mt-1">Aonflow adapts to your growth, meeting evolving needs, and delivering a reliable, future-proof Salesforce and QuickBooks Online integration.</p>
                                </div>
                                <div className="flex flex-col items-center">
                                    <Workflow className="h-14 w-14 mb-4" />
                                    <h3 className="font-semibold text-lg">Customized Workflows</h3>
                                    <p className="text-sm opacity-90 mt-1">Tailor automation to align with your unique business processes, ensuring efficient task management and collaborative optimization.</p>
                                </div>
                            </div>
                             <p className="text-xs text-white/80 mt-8 max-w-3xl mx-auto">
                                PLEASE NOTE: To unlock the potential of Salesforce and QuickBooks Online iIntegration, an Aonflow account is indispensable. Experience seamless connectivity and harness the benefits of our integration solutions. Sign up at <Link href="https://app.aonflow.com/auth/signup" className="underline hover:opacity-80">app.aonflow.com/auth/signup</Link> for your free account today.
                            </p>
                        </AnimateOnScroll>
                    </div>
                </section>
            </div>

            <div className="container mx-auto px-4 md:px-6 my-20">
                <AnimateOnScroll className="text-center">
                    <h3 className="text-2xl font-semibold mb-2">Need support with QuickBooks Online and Salesforce integration?</h3>
                    <Button asChild>
                        <Link href="/contact">Contact Us</Link>
                    </Button>
                </AnimateOnScroll>
            </div>
            
            {/* Triggers and Actions */}
            <section className="py-20 md:py-28">
                <div className="container mx-auto px-4 md:px-6">
                    <AnimateOnScroll className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="text-3xl font-bold font-headline">Understanding Aonflow Triggers and Actions</h2>
                    </AnimateOnScroll>
                    <AnimateOnScroll className="text-center max-w-3xl mx-auto mb-12">
                        <h3 className="text-2xl font-bold font-headline">Step-by-Step Automation Process</h3>
                        <p className="text-muted-foreground mt-4">Synchronizing data doesn't need to be difficult or complex. Here are the triggers and actions for Salesforce and QuickBooks Online</p>
                    </AnimateOnScroll>

                    <div className="grid md:grid-cols-2 gap-8">
                        <Card className="p-6 bg-primary/5">
                            <CardHeader>
                                <CardTitle className="text-primary">Triggers</CardTitle>
                            </CardHeader>
                            <CardContent>
                               <ul className="space-y-3">
                                {triggersActions.triggers.map((item, i) => (
                                    <li key={i} className="text-muted-foreground text-sm">
                                        {item.isHeader && <strong className="text-foreground">{item.title}</strong>}
                                        {item.description && <p className="mt-1">{item.description}</p>}
                                        {!item.isHeader && !item.description && <p className={item.isItalic ? 'italic' : ''}>{item.title}</p>}
                                        {item.isExample && <p className="text-xs mt-1 pl-4 italic">{item.title}</p>}
                                    </li>
                                ))}
                               </ul>
                            </CardContent>
                        </Card>
                         <Card className="p-6 bg-primary/5">
                            <CardHeader>
                                <CardTitle className="text-primary">Actions</CardTitle>
                            </CardHeader>
                            <CardContent>
                               <ul className="space-y-3">
                                {triggersActions.actions.map((item, i) => (
                                    <li key={i} className="text-muted-foreground text-sm">
                                        {item.isHeader && <strong className="text-foreground">{item.title}</strong>}
                                        {item.description && <p className="mt-1">{item.description}</p>}
                                        {!item.isHeader && !item.description && <p>{item.title}</p>}
                                        {item.isExample && <p className="text-xs mt-1 pl-4 italic">{item.title}</p>}
                                    </li>
                                ))}
                               </ul>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>
            
            <section className="py-20 md:py-28 bg-primary/5">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <AnimateOnScroll>
                            <h3 className="text-2xl font-bold font-headline mb-4">Connect Salesforce with QuickBooks Online and automate workflows.</h3>
                            <p className="text-muted-foreground">Aonflow seamlessly transfers data between your web applications, allowing you to concentrate on your crucial tasks.</p>
                            <p className="text-muted-foreground mt-4">Simplify automation and eliminate hectic schedules.</p>
                        </AnimateOnScroll>
                        <div className="w-100 h-100 flex justify-center items-center">
                            <Image src="/salesforce-quickbooks-integration/salesforce-quickbooks-multiple-apps.svg" alt="Salesforce and Quickbooks integration diagram" width={500} height={150} />
                        </div>
                    </div>
                    <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
                            <AnimateOnScroll delay={0.1}>
                                <Card className="h-full bg-background/50 backdrop-blur-sm">
                                <CardContent className="p-6 text-center">
                                    <div className="inline-block bg-primary/10 text-primary p-3 rounded-full mb-4">
                                        <Database className="h-8 w-8" />
                                    </div>
                                    <h3 className="font-bold text-lg text-primary">Unified Financial Data Management</h3>
                                    <p className="text-muted-foreground text-sm mt-2">Efficiently manage financial data across platforms. Sync transactions, invoices, and customer information seamlessly between Salesforce and QuickBooks Online, ensuring accuracy and cohesion for informed financial decisions.</p>
                                </CardContent>
                            </Card>
                        </AnimateOnScroll>
                        <AnimateOnScroll delay={0.2}>
                            <Card className="h-full bg-background/50 backdrop-blur-sm">
                                <CardContent className="p-6 text-center">
                                        <div className="inline-block bg-primary/10 text-primary p-3 rounded-full mb-4">
                                        <Workflow className="h-8 w-8" />
                                    </div>
                                    <h3 className="font-bold text-lg text-primary">Automated Workflow Optimization</h3>
                                    <p className="text-muted-foreground text-sm mt-2">Optimize business processes with automation. From lead management to invoicing, automate repetitive tasks between Salesforce and QuickBooks Online, reducing manual efforts and enhancing overall workflow efficiency.</p>
                                </CardContent>
                            </Card>
                        </AnimateOnScroll>
                        <AnimateOnScroll delay={0.3}>
                                <Card className="h-full bg-background/50 backdrop-blur-sm">
                                <CardContent className="p-6 text-center">
                                        <div className="inline-block bg-primary/10 text-primary p-3 rounded-full mb-4">
                                        <PieChart className="h-8 w-8" />
                                    </div>
                                    <h3 className="font-bold text-lg text-primary">Real-Time Business Insights</h3>
                                    <p className="text-muted-foreground text-sm mt-2">Access real-time insights for strategic decision-making. Salesforce + QuickBooks Online Integration provides a unified view of customer interactions, transactions, and financial data, empowering data-driven business strategies for enhanced growth.</p>
                                </CardContent>
                            </Card>
                        </AnimateOnScroll>
                    </div>
                </div>
            </section>
        </div>
    );
}
