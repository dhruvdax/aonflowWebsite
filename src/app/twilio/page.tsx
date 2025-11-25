
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

const twilioUseCases = [
    {
        icon: FileText,
        title: "Notifications from System Events via SMS",
        description: "Integrate Twilio with your systems like Salesforce or WooCommerce, so when something significant happens, like a new order or a lead is updated, Twilio can send an SMS notification to the appropriate customer or employee."
    },
    {
        icon: Repeat,
        title: "Appointment Reminders",
        description: "Send appointment reminders via SMS by integrating Twilio into a CRM processor like HubSpot to reduce no-shows and enhance customer experience."
    },
    {
        icon: ShieldCheck,
        title: "Configuring Two-factor Authentication",
        description: "This automation allows you to connect Twilio with internal apps and send 2FA codes over SMS to your user when logging in, thus increasing the security of the app."
    },
    {
        icon: Users,
        title: "Feedback Collection via SMS",
        description: "Twilio also allows to send an automated SMS on a purchase or service interaction, and the replies can be sent back to CRM or DB to be analyzed through Aonflow."
    }
];


const aonflowForIntegration = [
    {
        icon: Zap,
        title: "Twilio integration for CRM solutions"
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
    question: "What is Twilio Integration?",
    answer: "Twilio Integration means when your apps are integrated, you can effortlessly link Twilio's communication services—SMS, voice calls, messaging APIs—with other essential applications and databases you work with regularly. Instead of having to deal with disparate tools, you can automate workflows that trigger Twilio actions (like sending SMS alerts) or consume Twilio data (like logging call outcomes) in near real-time. All this takes time, creates potential for human errors, and requires your customer communication data to be fully aligned across all your systems."
  },
  {
    question: "Why should I integrate Twilio using Aonflow?",
    answer: (
      <div>
        <p className="mb-2">There are great benefits to bringing Twilio into your wider ecosystem using Aonflow iPaaS solutions:</p>
        <ul className="list-disc pl-5 space-y-2">
            <li><strong>Automated Communication:</strong> Send text messages, push notifications, or voice notifications instantly based on triggers in your CRM or eCommerce platform.</li>
            <li><strong>Improved Customer Engagement:</strong> Send customers updated notifications such as appointment reminders, order confirmations, or payment alerts to increase satisfaction and loyalty.</li>
            <li><strong>Ordered Data:</strong> Combine your communication logs with your sales, support, or marketing data for a more holistic view of your customer interactions.</li>
            <li><strong>Scalability:</strong> With your messaging or calling needs expanding, Aonflow’s flexible platform can rightsize a higher volume or more complicated workflows without having to change out existing systems.</li>
        </ul>
      </div>
    )
  },
  {
    question: "Which systems can I connect Twilio to using Aonflow?",
    answer: (
        <div>
            <p className="mb-2">Twilio can be combined with a wide range of other platforms and applications, including (but not limited to):</p>
            <ul className="list-disc pl-5 space-y-2">
                <li><strong>Salesforce:</strong> SMS reminders for new leads or real-time log call information to Salesforce.</li>
                <li><strong>Microsoft Dynamics 365:</strong> automate follow-ups with customers from your Dynamics, and save Twilio chat data into your CRM.</li>
                <li><strong>Google Sheets:</strong> Manage a spreadsheet of all Twilio calls and SMS logs for reporting purposes.</li>
                <li><strong>WooCommerce:</strong> SMS order confirmations, shipping updates, or abandoned cart reminders</li>
                <li><strong>Hubspot:</strong> Sync data from marketing & CRM with Twilio communication records</li>
                <li><strong>QuickBooks Online:</strong> Notify customers of invoice statuses or due dates.</li>
            </ul>
            <p className="mt-2">If you require custom Twilio integration, or if you do not see your application listed here, our team may also be able to build more connectors or scripts to meet your needs.</p>
        </div>
    )
  },
    {
        question: "What kinds of data and events can be synchronized with Twilio?",
        answer: (
            <div>
                <p className="mb-2">Aonflow iPaaS can be used to create inbound and outbound flows to Twilio:</p>
                <ul className="list-disc pl-5 space-y-2">
                    <li><strong>Outbound (to Twilio):</strong> Initiate SMS/voice calls in response to certain events—such as new sales leads, completed orders, or overdue invoices. You can apply even more control over the contents of messages using data from other integrated systems (e.g., customer names, order totals, or due dates).</li>
                    <li><strong>Inbound (from Twilio):</strong> Track information on sent messages, delivery statuses, call recordings, or recipient responses. This weekend data can be pushed into CRM, customer support tools, or analytics dashboards to cross-check engagement & communication success.</li>
                </ul>
            </div>
        )
    },
    {
        question: "Do I need coding expertise to set up Twilio integration using Aonflow?",
        answer: "Not necessarily. Its no-code/low-code platform allows non-technical users to set up simple integrations without writing much code. You can quickly define triggers and actions with its easy-to-use interface and visual workflows. For more sophisticated use cases — like advanced routing, custom logic, or large-structure data transformations — your IT team or our professional services team can help set up the API calls or scripts needed."
    },
    {
        question: "Is Twilio integration using Aonflow secure?",
        answer: "Yes. Security is the key focus area for Aonflow. We use industry-standard encryption for in-transit data (SSL/TLS) and implement Twilio’s best practices for secure authentication. Your administrators can also control role-based permissions to open and secure Twilio -amount derived from throttling and bandwidth-related workflows, as needed. For any additional compliance controls, the platform and processes of Aonflow will allow you to comply with these in keeping your communication data secure."
    },
    {
        question: "Can Aonflow handle near real-time notifications when integrating Twilio?",
        answer: "Absolutely. Aonflow iPaaS allows near real-time triggers, giving your SMS or calls the ability to get sent out the minute conditions in your other systems are met — like a new order, lead updated, or an overdue invoice. On the flip side, Twilio events (e.g., message received, call completed) can also cause near real-time updates in connected apps. This experience helps your teams and customers get up to date without delay."
    },
    {
        question: "What if I have high-volume messaging or calling needs?",
        answer: (
            <div>
                <p className="mb-2">Aonflow is designed to grow as your business needs change:</p>
                <ul className="list-disc pl-5 space-y-2">
                    <li><strong>Load Management:</strong> You can batch or queue messages to deal with traffic spikes.</li>
                    <li><strong>Robust Architecture:</strong> We built our platform on Twilio’s scalable APIs to ensure smooth handling of large message volumes.</li>
                    <li><strong>Monitoring and Logs:</strong> We help you monitor performance and, in the event of performance degradation, identify potential bottlenecks in a timely manner.</li>
                </ul>
                 <p className="mt-2">If you can expect extraordinarily high volumes, our support team can advise on best practices and architecture to handle the load.</p>
            </div>
        )
    },
    {
        question: "How do I handle error reporting and troubleshooting for Twilio workflows?",
        answer: "Aonflow iPaaS platform tracks all Integration flows in detail, including Twilio-specific events. In arriving at the cause of failure (message or call) error codes, their descriptions, and timestamps will be presented to you. You can also create automated alerts (via email, Slack, or other channels) so that your team is notified based on the occurrence of specific types of errors. Such proactive measures significantly reduce downtime and allow for timely solutions."
    },
    {
        question: "How long does it take to implement Twilio integration?",
        answer: (
            <div>
                <p className="mb-2">Implementation and deployment timelines will differ based on your specific workflows and applications in use:</p>
                <ul className="list-disc pl-5 space-y-2">
                    <li><strong>Simple Setups:</strong> Basic SMS notifications or single-step workflows often only take a few days to configure.</li>
                    <li><strong>Complex Integrations:</strong> Multi-step processes, larger data volumes, or integrations with multiple external systems may take longer, anywhere from a couple of weeks up to a few months.</li>
                </ul>
                 <p className="mt-2">Our expert service team would help you form a granular project plan to ensure smooth and timely deployment.</p>
            </div>
        )
    },
    {
        question: "What does pricing look like for Twilio Integration using Aonflow?",
        answer: "Aonflow iPaaS Integration solutions’ pricing is based on items like workflow complexity, large-scale integrations, multiple support levels needed, and so forth. Please get in touch with our sales team for an accurate quote tailored to your needs."
    },
    {
        question: "What kind of support does Aonflow offer for Twilio integrations?",
        answer: (
            <div>
                <p className="mb-2">Aonflow has a strong support ecosystem:</p>
                <ul className="list-disc pl-5 space-y-2">
                    <li><strong>Help & Documentation:</strong> Articles with step-by-step instructions on common Twilio integration scenarios, as well as troubleshooting advice.</li>
                    <li><strong>Customer support channels:</strong> Get assistance by way of email, or phone for solving configuration and technical issues.</li>
                    <li><strong>Professional Services:</strong> Our experts can help with the more complex or large-scale Twilio use cases, everything from developing the solution architecture to coding the custom scripts.</li>
                    <li><strong>Continued Maintenance:</strong> We frequently update our platform to be compatible with Twilio’s latest APIs and security updates — delivering a stable, future-proof solution.</li>
                </ul>
            </div>
        )
    }
];

const twilioAutomationTabs = [
  {
    value: "integration",
    icon: BrainCircuit,
    label: "Integration",
    title: "Twilio integration, made easy",
    subtitle: "Deliver speedy and fluid communication and add value to your end-users",
    content: "Integrating Twilio with Aonflow lets you communicate with your customers seamlessly through text messages. This enhances customer responsiveness and helps maintain engagement. SMS messages allow you to reach customers more efficiently than just using email, thus improving customer satisfaction. Additionally, Twilio integration with Aonflow makes it easy to automate SMS workflows, reducing manual work and improving efficiency.",
    subcontentTitle: "One self-service platform for all your Twilio integration solutions",
    subcontent: "Our communication integration solutions help streamline business operations and offer flexible support to teams and clients. By integrating online communication tools, such as Twilio, with existing customer data sources, you can communicate more effectively and efficiently, improving overall productivity and driving growth. Aonflow's iPaaS technology allows for easy integration, ensuring a seamless experience for all parties involved."
  },
  {
    value: "automation",
    icon: FileCog,
    label: "Automation",
    title: "Twilio automation made simple",
    subtitle: "Automate your communication processes, and boost productivity and efficiency",
    content: "Integrating Twilio with your customer service software can streamline communication and improve the customer experience. By providing quick and efficient responses to customer inquiries, you can build trust and loyalty. Easily make callbacks to customers once their concerns are resolved, ensuring that they receive prompt and satisfactory service, enhancing your customer support capabilities, and driving business success.",
    subcontentTitle: "All-in-one intuitive platform for all your Twilio automation solutions",
    subcontent: "Integrate Twilio with Aonflow to automate the process of sending texts or making calls from other platforms. Achieve this by connecting Twilio with other customer service and communication solutions, providing a simple and effective way to streamline your processes. It is easy to use and accessible to everyone, offering an ideal solution for businesses of all sizes."
  },
  {
    value: "use-case",
    icon: Layers,
    label: "Use Case",
    title: "Twilio use case, resolved",
    subtitle: "Manage time-sensitive messaging or location-based messaging",
    content: "With Twilio's messaging connector, you can easily incorporate SMS features into your application. By using our integration builder, you can create a link between your application and Twilio without needing to write a lot of code. This way, you can rapidly develop communication automation based on user actions or send bulk messages based on a specific time.",
    subcontentTitle: "Enhancing marketing efforts with automated Integration solutions",
    subcontent: "Aonflow's integration with Twilio enables businesses to improve their marketing efforts by sending SMS notifications to customers during abandoned cart situations and reminding them of products they have shown interest in. Through process automation, businesses can increase customer engagement and drive sales. The automated notifications free up the team’s time, allowing them to focus on productivity-enhancing tasks."
  }
];

export default function TwilioPage() {
  const [activeTab, setActiveTab] = useState(twilioAutomationTabs[0].value);
  const [isTabCarouselPaused, setIsTabCarouselPaused] = useState(false);
  
  const autoplay = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );

  useEffect(() => {
    if (isTabCarouselPaused) return;
    const tabRotationInterval = setInterval(() => {
      setActiveTab(prevTab => {
        const currentIndex = twilioAutomationTabs.findIndex(tab => tab.value === prevTab);
        const nextIndex = (currentIndex + 1) % twilioAutomationTabs.length;
        return twilioAutomationTabs[nextIndex].value;
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
                <img src="/twilio.svg" alt="Twilio" className="h-40 w-auto mb-4" />
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl font-headline text-foreground">
                    Twilio Integration
                </h1>
                <p className="mt-4 text-lg text-muted-foreground max-w-3xl">
                   Integrate messaging, voice, and video functionalities effortlessly for enhanced communication and engagement with Twilio Integration solutions.
                </p>
            </AnimateOnScroll>
            
            <AnimateOnScroll delay={0.2}>
              <div className="grid grid-cols-1 gap-8">
                  <Card className="p-6 flex flex-col items-start bg-background/50 backdrop-blur-sm h-full col-span-1 md:col-span-3 rounded-[24px]">
                      <BrainCircuit className="h-10 w-10 text-primary mb-4" />
                      <h3 className="text-2xl font-bold font-headline mb-2">Connect. Integrate. Automate.</h3>
                      <p className="text-muted-foreground flex-grow">
                          Seamlessly integrate Twilio with Aonflow's iPaaS solution to enhance productivity and add value to your business. With our user-friendly interface, connect systems, applications, and data in a few clicks, without relying on developers. Automate your communication workflows with Twilio to improve customer engagement and streamline internal processes.
                      </p>
                  </Card>
              </div>
              <div className="grid md:grid-cols-3 gap-8 mt-8">
                  <Card className="p-6 flex flex-col items-start bg-background/50 backdrop-blur-sm h-full rounded-[24px]">
                      <FileCog className="h-10 w-10 text-primary mb-4" />
                      <h3 className="text-2xl font-bold font-headline mb-2">Comms integration</h3>
                      <p className="text-muted-foreground flex-grow">Integrate SMS and voice communications into your applications to streamline your business processes.</p>
                  </Card>
                  <Card className="p-6 flex flex-col items-start bg-background/50 backdrop-blur-sm h-full rounded-[24px]">
                      <Layers className="h-10 w-10 text-primary mb-4" />
                      <h3 className="text-2xl font-bold font-headline mb-2">Stay connected</h3>
                      <p className="text-muted-foreground flex-grow">Send and receive texts and calls over web service and stay connected at all times with your teams and clients.</p>
                  </Card>
                  <Card className="p-6 flex flex-col items-start bg-background/50 backdrop-blur-sm h-full rounded-[24px]">
                      <Repeat className="h-10 w-10 text-primary mb-4" />
                      <h3 className="text-2xl font-bold font-headline mb-2">Integrated support</h3>
                      <p className="text-muted-foreground flex-grow">Leverage online communication, when integrated with data from your other customer data sources to offer flexible support.</p>
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
                    Aonflow streamlines the integration process with Twilio, allowing you to automate workflows and reduce manual work. The iPaaS technology lets you build real-time SMS messaging workflows based on events in other applications. You can also take action on other apps based on SMS messages received on your Twilio account. This integration enhances communication and engagement with customers, improving the overall customer experience.
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
                    {twilioAutomationTabs.map(tab => (
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
                     <h3 className="text-2xl font-bold mb-6 font-headline text-primary text-center">{twilioAutomationTabs.find(t => t.value === activeTab)?.title}</h3>
                    {twilioAutomationTabs.map(tab => (
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
                <h2 className="text-3xl font-bold font-headline mb-12">Flow with Aonflow</h2>
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
      
      {/* Use Cases */}
      <section className="py-20 md:py-28 bg-primary/5">
        <div className="container mx-auto px-4 md:px-6">
            <AnimateOnScroll className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold font-headline mb-12">Twilio Integration Use Cases</h2>
            </AnimateOnScroll>
             <AnimateOnScroll className="max-w-4xl mx-auto">
              <Carousel
                opts={{ align: "start", loop: true }}
                plugins={[autoplay.current]}
                onMouseEnter={() => autoplay.current.stop()}
                onMouseLeave={() => autoplay.current.reset()}
                className="w-full"
              >
              <CarouselContent>
                {twilioUseCases.map((useCase, index) => (
                    <CarouselItem key={index} className="md:basis-1/2 p-4">
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
              Our popular and powerful Twilio connectors
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
                        <img src="/twilio.svg" alt="Twilio" className="h-12 w-12" />
                      </div>
                      <ArrowRight className="h-8 w-8 text-[#cccccc]" />
                      <div className="w-16 h-16 rounded-lg flex items-center justify-center bg-[#f0f0f0]">
                        <img src="/salesforce.svg" alt="Salesforce" className="h-12 w-12" />
                      </div>
                    </div>
                    <p className="mt-4 text-center font-medium">
                      Twilio to Salesforce
                    </p>
                  </Card>
                </CarouselItem>
                <CarouselItem className="basis-full lg:basis-1/2 p-4">
                  <Card className="p-6 bg-background h-full">
                    <div className="flex items-center justify-center gap-8">
                       <div className="w-16 h-16 rounded-lg flex items-center justify-center bg-[#f0f0f0]">
                        <img src="/twilio.svg" alt="Twilio" className="h-12 w-12" />
                       </div>
                      <ArrowRight className="h-8 w-8 text-[#cccccc]" />
                       <div className="w-16 h-16 rounded-lg flex items-center justify-center bg-[#f0f0f0]">
                        <img src="/microsoft-dynamic.svg" alt="Microsoft Dynamics 365" className="h-12 w-12" />
                      </div>
                    </div>
                    <p className="mt-4 text-center font-medium">
                      Twilio to Microsoft Dynamics 365
                    </p>
                  </Card>
                </CarouselItem>
                <CarouselItem className="basis-full lg:basis-1/2 p-4">
                  <Card className="p-6 bg-background h-full">
                    <div className="flex items-center justify-center gap-8">
                      <div className="w-16 h-16 rounded-lg flex items-center justify-center bg-[#f0f0f0]">
                        <img src="/twilio.svg" alt="Twilio" className="h-12 w-12" />
                      </div>
                      <ArrowRight className="h-8 w-8 text-[#cccccc]" />
                      <div className="w-16 h-16 rounded-lg flex items-center justify-center bg-[#f0f0f0]">
                        <img src="/netsuite.svg" alt="NetSuite" className="h-12 w-12" />
                      </div>
                    </div>
                    <p className="mt-4 text-center font-medium">
                      Twilio to NetSuite
                    </p>
                  </Card>
                </CarouselItem>
                <CarouselItem className="basis-full lg:basis-1/2 p-4">
                  <Card className="p-6 bg-background h-full">
                    <div className="flex items-center justify-center gap-8">
                      <div className="w-16 h-16 rounded-lg flex items-center justify-center bg-[#f0f0f0]">
                        <img src="/twilio.svg" alt="Twilio" className="h-12 w-12" />
                      </div>
                      <ArrowRight className="h-8 w-8 text-[#cccccc]" />
                      <div className="w-16 h-16 rounded-lg flex items-center justify-center bg-[#f0f0f0]">
                        <img src="/hubspot.svg" alt="HubSpot" className="h-12 w-12" />
                      </div>
                    </div>
                    <p className="mt-4 text-center font-medium">
                      Twilio to HubSpot
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
            <h2 className="text-3xl font-bold font-headline mb-4">Flow with Aonflow</h2>
            <Button asChild size="lg">
                <Link href="/contact">See demo</Link>
            </Button>
        </AnimateOnScroll>
      </section>

    </div>
  );
}


    