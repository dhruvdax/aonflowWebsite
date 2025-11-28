
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
    BrainCircuit
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
} from '@/components/ui/card';
import { AnimateOnScroll } from '@/components/animate-on-scroll';
import { BackgroundAnimation } from '@/components/background-animation';
import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Autoplay from "embla-carousel-autoplay";

const howItWorksSteps = [
    {
        icon: <Database className="h-10 w-10 text-primary" />,
        title: "The Data Source",
        description: "Source of data is the key information that will be utilized in the workflow. Most often, it's a piece of data extracted from an application. However, it can also come from an email, CSV file or spreadsheet, or data stored in a warehouse or corporate databases."
    },
    {
        icon: <Zap className="h-10 w-10 text-primary" />,
        title: "The Trigger",
        description: "A trigger is an event that starts a workflow or transfers data between applications. Triggers can be scheduled, such as running every day at midnight, or in response to changes in an underlying application- like when a new lead is uploaded, or - end-user activity, like when a customer sends an email or fills out a form."
    },
    {
        icon: <BrainCircuit className="h-10 w-10 text-primary" />,
        title: "The Logic",
        description: "The workflow must then make a decision about what to do with the data or information received, such as whether or not it should be compared - is the new lead from a business with 50 or more employees? Or does looping through a list look for a certain entry - do we already have an account record for this specific organization or business entity?"
    },
    {
        icon: <FileCog className="h-10 w-10 text-primary" />,
        title: "The Format",
        description: "This is where we \"transform\" the data or information received, or tweak it in a way that makes it fit the required format for the ultimate destination or action. This might range from extracting fields, parsing URLs, formatting dates, or combining data from various different sources."
    },
    {
        icon: <Users className="h-10 w-10 text-primary" />,
        title: "The Action",
        description: "This is what we'll do with the data in the long run. Action usually entails transferring it to the final destination application, such as adding a new lead in our CRM, but you may also wish to trigger app notifications or send an email to notify the organization team about this so that they can follow up."
    },
];

export default function HowItWorksClientPage() {

    const autoplay = React.useRef(
        Autoplay({ delay: 5000, stopOnInteraction: true })
    );

  return (
    <div className="bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative w-full bg-primary/10 py-20 md:py-28 lg:py-32 overflow-hidden">
        <BackgroundAnimation className="absolute inset-0 z-0 opacity-50" />
        <div className="container mx-auto px-4 md:px-6 z-10 relative">
          <AnimateOnScroll className="flex flex-col items-center justify-center space-y-4 text-center">
            <h1 className="text-4xl font-light tracking-tight font-headline sm:text-5xl md:text-6xl text-primary">
              How it works for you
            </h1>
            <p className="max-w-2xl text-muted-foreground md:text-xl">
              Use our smart products and capabilities to simplify your needs
            </p>
          </AnimateOnScroll>
        </div>
      </section>
      
      {/* Integrate anything section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <AnimateOnScroll>
                    <p className="font-semibold text-primary">How it works for you</p>
                    <h2 className="text-3xl font-bold font-headline mt-2">Will I be able to <span className="text-primary">Integrate</span> anything with Aonflow?</h2>
                    <p className="mt-4 text-lg text-muted-foreground">Yes, Aonflow, then absolutely, yes!</p>
                    <Button asChild className="mt-6">
                        <Link href="/solutions">Explore others</Link>
                    </Button>
                </AnimateOnScroll>
                <AnimateOnScroll delay={0.2} className="flex justify-center">
                    <Image 
                        src="/how-it-work/how-it-works.png"
                        alt="How Aonflow Works Diagram"
                        width={550}
                        height={350}
                        className="object-contain"
                        data-ai-hint="how it works diagram"
                    />
                </AnimateOnScroll>
            </div>
        </div>
      </section>

      {/* Logic to be applied Section */}
      <section className="py-20 md:py-28 bg-primary/5">
        <div className="container mx-auto px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-8 items-start">
                <AnimateOnScroll className="h-full">
                    <Card className="p-12 bg-background h-full flex flex-col justify-center rounded-[16px]">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="bg-primary/10 text-primary p-3 rounded-full">
                               <Cloud className="h-8 w-8" />
                            </div>
                            <h3 className="text-2xl font-bold font-headline">Aonflow supports</h3>
                        </div>
                        <p className="text-muted-foreground">A wide array of cloud applications, file storage services, databases, and event-driven webhooks. We continue to add new apps to the list so that you may use data from a wider range of sources when needed.</p><p className='text-muted-foreground mt-4'>Integrations aren't always straightforward and easy, transferring data is a time-consuming process.</p>
                    </Card>
                </AnimateOnScroll>
                <AnimateOnScroll delay={0.2} className="space-y-6">
                    <div>
                        <h3 className="text-xl font-bold font-headline">Logic to be applied</h3>
                        <ul className="list-disc list-inside text-muted-foreground mt-2 pl-2">
                            <li>What kind of information should it be done?</li>
                            <li>When should it be done?</li>
                            <li>Under which circumstances should it be done?</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold font-headline">Format to be used</h3>
                        <ul className="list-disc list-inside text-muted-foreground mt-2 pl-2">
                            <li>Which endpoints are expected to get data?</li>
                            <li>In which degree to which organizations automate the apps, they are able to completely drive full stack of automation for companies.</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold font-headline">What we understand:</h3>
                        <ul className="list-disc list-inside text-muted-foreground mt-2 pl-2">
                            <li>Complexities of integration are driven by underlying business processes.</li>
                            <li>Simpler integrations do away with automation for organization complexities.</li>
                            <li>Simple AI and native integrations allow relaxation of addressing complexities.</li>
                        </ul>
                    </div>
                </AnimateOnScroll>
            </div>
        </div>
      </section>
      
      {/* All-in-one platform Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                 <AnimateOnScroll className="flex justify-center">
                    <Image 
                        src="/how-it-work/all-in-one.svg"
                        alt="All-in-one automation and integration platform"
                        width={500}
                        height={400}
                        className="object-contain"
                        data-ai-hint="automation integration"
                    />
                </AnimateOnScroll>
                <AnimateOnScroll delay={0.2}>
                    <h2 className="text-3xl font-bold font-headline">All-in-one <span className="text-primary">automation and integration</span> platform</h2>
                    <p className="mt-4 text-muted-foreground">We solve integration challenges through automation of business processes.</p>
                    <p className="mt-4 text-muted-foreground">Our unique multi-level workflows mimic the flow and logic of processes that are easy to create, study, compare, integrate to almost nearly any application on stack with ease.</p>
                    <Button asChild className="mt-6">
                        <Link href="/contact">Book a Demo</Link>
                    </Button>
                </AnimateOnScroll>
            </div>
        </div>
      </section>

      {/* How does Aonflow work Section */}
      <section className="py-20 md:py-28 bg-primary/5">
        <div className="container mx-auto px-4 md:px-6">
            <AnimateOnScroll className="text-center max-w-3xl mx-auto mb-12">
                 <h2 className="text-3xl font-bold font-headline">So, how does Aonflow work for you?</h2>
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
                        {howItWorksSteps.map((step, index) => (
                            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 p-4">
                                <Card className="p-8 bg-background text-center flex flex-col items-center h-full">
                                    <div className="mb-4">{step.icon}</div>
                                    <h3 className="text-xl font-bold font-headline text-primary mb-2">{step.title}</h3>
                                    <p className="text-muted-foreground text-sm flex-1">{step.description}</p>
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

      {/* Powerful and Intuitive connectors Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <AnimateOnScroll>
                    <h2 className="text-3xl font-bold font-headline">Powerful and Intuitive connectors</h2>
                    <p className="mt-4 text-muted-foreground">We use numerous connectors to push or pull data across different apps. Our ever-growing library of connectors powers all of these activities. Our intuitive connectors separate variations and intricacies of hundreds of different APIs, allowing you to simply draw lines between nearly any application.</p>
                    <h3 className="text-2xl font-bold font-headline text-primary mt-8">Bringing it all together</h3>
                    <p className="mt-2 text-muted-foreground">The order in which you perform operations does not always matter. You’ll frequently have numerous logical phases and transformations, data transferred and orchestrated in various sources, and various actions taken to bring about the state in which workflows followed and sequence.</p>
                    <p className="mt-4 text-muted-foreground">Most business processes are complex which is why our unique iPaaS platform has been designed to be intuitive, adaptable, agile, flexible, fast, scalable, and secure. It isn’t just a way to connect two different solutions — it’s a platform that automates processes and dataflows for any device any application.</p>
                </AnimateOnScroll>
                <AnimateOnScroll delay={0.2} className="flex justify-center">
                    <Image 
                        src="/how-it-work/poweful.svg"
                        alt="Powerful and Intuitive connectors"
                        width={400}
                        height={400}
                        className="object-contain"
                        data-ai-hint="connectors diagram"
                    />
                </AnimateOnScroll>
            </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 md:py-28 bg-primary/5">
        <AnimateOnScroll className="container mx-auto px-4 md:px-6 text-center">
             <h2 className="text-3xl font-bold font-headline mb-4">See Aonflow in Action</h2>
            <Button asChild>
                <Link href="/contact">Connect Now</Link>
            </Button>
        </AnimateOnScroll>
      </section>

    </div>
  );
}

    