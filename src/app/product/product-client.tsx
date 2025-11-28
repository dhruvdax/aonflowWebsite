
'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
    Zap,
    Users,
    HeartHandshake,
    Rocket,
    Cloud,
    Database,
    Power,
    Server,
    RefreshCw,
    Clock,
    FileCog,
    BrainCircuit,
    Check
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
} from '@/components/ui/card';
import { AnimateOnScroll } from '@/components/animate-on-scroll';
import { BackgroundAnimation } from '@/components/background-animation';
import React, { useState, useEffect, useRef } from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Autoplay from "embla-carousel-autoplay";
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { cn } from '@/lib/utils';


const aonflowForEveryoneFeatures = [
    {
        icon: Cloud,
        title: "100% Cloud-based",
        description: "Access anytime, from anywhere. No more local and administer software installations."
    },
    {
        icon: Power,
        title: "Quick start",
        description: "Create an organization account, and you are all set to use Aonflow. No more complex and tiresome setups."
    },
    {
        icon: Users,
        title: "Suits all business sizes & individuals",
        description: "All-in-one iPaaS platform that suits all organizations, businesses, individuals. No more dealing with different iPaaS platforms."
    },
    {
        icon: Check,
        title: "Accessible & available",
        description: "Multi-tenant, zero-fault-tolerant cloud-based platform that is always accessible. No more loss of business data, insights, and value."
    }
];

const onlineForYouTabs = [
    { value: 'simple', label: 'Simple', image: '/product/simple.png', imageHint: 'simple checklist',
      title: 'Simple',
      description: 'We arm you with simple self-service features and pre-built connectors to build and manage custom integrations– without any IT intervention – thus eliminating risks and enabling innovation. With our simplified iPaaS solutions, we cut out the steep learning curve for non-technical users and promote integration ownership, helping businesses to accelerate growth and drive success without constraints.',
      subTitle: 'How do we make it SIMPLE for you?',
      subDescription: 'A few-clicks configuration and integration enables quicker automated setup and ramp-up experience for users, resulting in rapid time to value.'
    },
    { value: 'fast', label: 'Fast', image: '/product/fast.png', imageHint: 'fast rocket',
      title: 'Fast',
      description: 'We help your organization or business to pivot and adapt to ever-changing customer needs, almost instantly, so that you stand out from the laggards- this factor has become obvious, especially during the initial stages of COVID-19. With our speedy integration of applications and dataflow automation in a single platform, you can significantly cut down time-to-market, giving you the first-mover advantage.',
      subTitle: 'How do we make it FAST for you?',
      subDescription: 'Self-service speedy integration and automation reduces time-to-market on customizations and improvements, which drives competitive advantage.'
    },
    { value: 'intuitive', label: 'Intuitive', image: '/product/intuitive.png', imageHint: 'intuitive idea',
      title: 'Intuitive',
      description: 'Develop, customize, and automate simple to complex business processes to meet your everyday unique business needs. Out-of-the-box connectors and pre-built automation features, with embedded business logic, automate business processes, projects, workflows, and dataflows across your entire business enterprise. Our intuitive on-demand customized features activate as per your business needs.',
      subTitle: 'How do we make it INTUITIVE for you?',
      subDescription: 'Intuitive AI-enabled pre-built connectors allow seamless application integration and automation of projects and dataflows for your unique business needs.'
    },
    { value: 'flexible', label: 'Flexible', image: '/product/flexible-img.svg', imageHint: 'flexible options',
      title: 'Flexible',
      description: 'No two fingerprints are alike. What you need is a platform that caters to individual needs- to help you integrate any application and system, connect data from any source, and develop almost anything. Businesses need to be agile in this digital era. Aonflow empowers you with the flexibility to innovate, curate CX capabilities, and use tools that give you exactly what you need, and enable greater business agility.',
      subTitle: 'How do we make it FLEXIBLE for you?',
      subDescription: 'Flexible and agile cloud-based architecture offers high levels of integration with existing infrastructures to serve immediate and future needs of businesses.'
    },
    { value: 'affordable', label: 'Affordable', image: '/product/affordable.png', imageHint: 'affordable price tag',
      title: 'Affordable',
      description: 'All-in-one intuitive cloud-based platform offers easy and simple pre-built connectors, in-built with business logic and AI-driven features, to enable you to set up and manage your application integrations and business process automations, allowing users to access, create, and integrate all applications, and automate processes, as well as use them at their desired frequency; all under one roof, in a single platform.',
      subTitle: 'How do we make it AFFORDABLE for you?',
      subDescription: 'Intuitive solutions eliminate the dependencies on expensive developers to generate code for customer integrations, saving on costs, time, and resources.'
    },
    { value: 'scalable', label: 'Scalable', image: '/product/scalable.png', imageHint: 'scalable chart',
      title: 'Scalable',
      description: 'Commercial and technical scalability are the need of the hour for any business or organization, no matter how small or big, enabling in meeting customer demands and driving growth. Even small businesses benefit from our enterprise iPaaS capabilities. You can scale as per need and desired frequency. Our multi-tenant capabilities and scalability enables cost savings and quality improvements.',
      subTitle: 'How do we make it SCALABLE for you?',
      subDescription: 'Scalable solutions enable you to expand and scale. Applications are always accessible on our network, so your integration platform grows with your business.'
    },
];

const deeperConnectionsFeatures = [
    { icon: Power, title: "Connect now", description: "Get the most from your processes, projects, data flows and workflows with ease" },
    { icon: Zap, title: "Connect fast", description: "Connect speedily with pre-built connectors and sync to any or all of our cloud apps" },
    { icon: Clock, title: "Connect anytime", description: "Integrate with universal connectors even if your application has a restful API" },
    { icon: Server, title: "Connect any data", description: "No data is left out with full API access to every single bit of data and custom fields" },
    { icon: RefreshCw, title: "Connect with no interruptions", description: "Flow with our intuitive approach that ensures no lapses with changes to API versions" }
];

export default function ProductClientPage() {
    const [activeTab, setActiveTab] = useState(onlineForYouTabs[0].value);
    const [isTabCarouselPaused, setIsTabCarouselPaused] = useState(false);

    useEffect(() => {
        if (isTabCarouselPaused) return;
        const tabRotationInterval = setInterval(() => {
          setActiveTab(prevTab => {
            const currentIndex = onlineForYouTabs.findIndex(tab => tab.value === prevTab);
            const nextIndex = (currentIndex + 1) % onlineForYouTabs.length;
            return onlineForYouTabs[nextIndex].value;
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
          <div className="text-center">
            <AnimateOnScroll>
              <p className="text-primary font-bold">Product</p>
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl font-headline text-foreground">
                We help you accelerate with seamless pre-built connectors
              </h1>
            </AnimateOnScroll>
          </div>
          <div className="mt-16 grid md:grid-cols-2 gap-12 items-center">
            <AnimateOnScroll>
                <p className="text-lg font-semibold">Simple. Intuitive. Powerful. Limitless.</p>
                <h2 className="mt-2 text-4xl font-bold font-headline">Empower your organization and business with our next-gen AI-driven iPaaS solutions</h2>
                <p className="mt-4 text-muted-foreground text-lg">
                   We put the power of integration and automation to action so you could accelerate growth, scalability, and success of your organization and business like no other.
                </p>
                <div className="mt-8">
                    <Button asChild size="lg">
                        <Link href="/contact">Book a Demo</Link>
                    </Button>
                </div>
            </AnimateOnScroll>
            <AnimateOnScroll delay={0.2} className="flex justify-center">
                <Image
                    src="/product/product1.svg"
                    alt="AI-driven iPaaS solutions"
                    width={500}
                    height={400}
                    className="object-contain"
                    data-ai-hint="AI iPaaS solutions"
                />
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Aonflow for everyone Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <AnimateOnScroll className="max-w-md">
                    <h2 className="text-3xl font-bold font-headline">Aonflow for <span className="text-primary">everyone</span></h2>
                    <p className="text-lg mt-2 font-semibold">This is where the ACTION happens</p>
                    <p className="mt-4 text-muted-foreground">
                        Our 100% cloud-data visual platform solves data and work related tasks through integration of apps and automation of processes, data flows and workflows. We help facilitate business transformation.
                    </p>
                </AnimateOnScroll>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {aonflowForEveryoneFeatures.map((feature, index) => (
                        <AnimateOnScroll key={index} delay={0.2 + index * 0.1}>
                           <Card className="p-6 h-full flex flex-col items-start bg-transparent border-0 shadow-none">
                                <div className="text-primary flex-shrink-0">
                                    <feature.icon className="h-8 w-8" />
                                </div>
                                <h3 className="text-lg font-bold font-headline mt-4 mb-2">{feature.title}</h3>
                                <p className="text-muted-foreground text-sm">{feature.description}</p>
                            </Card>
                        </AnimateOnScroll>
                    ))}
                </div>
            </div>
        </div>
      </section>

      {/* Aonflow is online for you Section */}
      <section className="py-20 md:py-28 bg-primary/5">
        <div className="container mx-auto px-4 md:px-6">
            <AnimateOnScroll className="text-center max-w-3xl mx-auto mb-12">
                <h2 className="text-3xl font-bold font-headline">Aonflow is <span className="text-primary">online</span> for you</h2>
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
                <TabsList className="grid w-full grid-cols-2 sm:grid-cols-3 md:grid-cols-6 h-auto bg-transparent p-0 border-b">
                    {onlineForYouTabs.map(tab => (
                        <TabsTrigger 
                            key={tab.value} 
                            value={tab.value} 
                            className={cn("flex flex-col gap-2 h-auto py-4 px-2 data-[state=active]:bg-transparent bg-transparent text-muted-foreground data-[state=active]:text-primary data-[state=active]:shadow-[inset_0_-2px_0_hsl(var(--primary))] rounded-none",
                                activeTab === tab.value && !isTabCarouselPaused && "animate-tab-progress"
                            )}
                        >
                            <span className="text-base font-semibold capitalize">{tab.label}</span>
                        </TabsTrigger>
                    ))}
                </TabsList>
                {onlineForYouTabs.map(tab => (
                     <TabsContent key={tab.value} value={tab.value} className="bg-transparent p-6 md:p-8 rounded-lg mt-4">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div className={cn("md:order-last")}>
                                <Image src={tab.image} alt={tab.title} width={450} height={350} className="mx-auto" data-ai-hint={tab.imageHint}/>
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold mb-4 font-headline text-primary">{tab.title}</h3>
                                <p className="text-muted-foreground mb-6">{tab.description}</p>
                                <h4 className="font-bold text-lg mb-2">{tab.subTitle}</h4>
                                <p className="text-muted-foreground">{tab.subDescription}</p>
                                <Button asChild variant="outline" className="mt-6">
                                    <Link href="/contact">Book a Demo</Link>
                                </Button>
                            </div>
                        </div>
                     </TabsContent>
                ))}
            </Tabs>
            </AnimateOnScroll>
        </div>
      </section>

      {/* Easy & simple automation for anyone */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                 <AnimateOnScroll>
                    <Image
                        src="/product/simple-automation.svg"
                        alt="Easy & simple automation"
                        width={500}
                        height={400}
                        className="object-contain"
                        data-ai-hint="simple automation"
                    />
                </AnimateOnScroll>
                <AnimateOnScroll delay={0.2} className="max-w-md">
                    <h2 className="text-3xl font-bold font-headline">Easy & simple <span className="text-primary">automation</span> for anyone</h2>
                    <p className="mt-4 text-muted-foreground">
                        Whether you are a seasoned automator or citizen automator, you won’t need IT and dev resources to take care of your every-day integration needs.
                    </p>
                    <p className="mt-4 text-muted-foreground">
                        With the Aonflow iPaaS platform, you can integrate apps and automate projects and processes using simple pre-built connectors.
                    </p>
                    <Button asChild variant="outline" className="mt-6">
                        <Link href="/contact">Book a Demo</Link>
                    </Button>
                </AnimateOnScroll>
            </div>
        </div>
      </section>

       {/* Deeper Connections Section */}
      <section className="py-20 md:py-28 bg-primary/5">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimateOnScroll>
                <p className="text-primary font-semibold">What next?</p>
                <h2 className="text-3xl font-bold font-headline mt-2">Create deeper connections with any system and application</h2>
                <div className="mt-8 space-y-6">
                    {deeperConnectionsFeatures.map((feature, index) => (
                        <div key={index} className="flex items-start gap-4">
                            <div className="bg-primary/10 text-primary p-3 rounded-full flex-shrink-0">
                                <feature.icon className="h-6 w-6"/>
                            </div>
                            <div>
                                <h3 className="font-bold text-lg">{feature.title}</h3>
                                <p className="text-muted-foreground">{feature.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </AnimateOnScroll>
            <AnimateOnScroll delay={0.2} className="flex justify-center">
              <Image
                src="/product/what-next.svg"
                alt="Deeper Connections Diagram"
                width={450}
                height={450}
                className="object-contain"
                data-ai-hint="connections diagram"
              />
            </AnimateOnScroll>
          </div>
        </div>
      </section>

       {/* Final CTA */}
      <section className="py-20 md:py-28">
        <AnimateOnScroll className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-2xl font-bold font-headline mb-4">See Aonflow in Action</h2>
            <Button asChild>
                <Link href="/contact">Connect Now</Link>
            </Button>
        </AnimateOnScroll>
      </section>

    </div>
  );
}
