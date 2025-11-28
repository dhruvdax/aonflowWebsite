
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Award, Users, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { PartnerContactForm } from "@/components/partner-contact-form";
import { BackgroundAnimation } from "@/components/background-animation";
import { AnimateOnScroll } from "@/components/animate-on-scroll";
import { PlaceHolderImages } from '@/lib/placeholder-images';

const whyAonflow = [
    {
        icon: Award,
        title: "Best-in-Class Technology",
        description: "Aonflow gives you the platform to equip your clients with its robust, new-age iPaaS platform. We ensure seamless integration for improved operational efficiency, thus driving innovation in every aspect of their business."
    },
    {
        icon: Users,
        title: "Expand Your Client Base",
        description: "Integrate Aonflow’s seamless one-click integration solutions into your product range and enter new markets. Empower your clients with the next-generation integration tools they demand and grow their business and yours by multiple folds."
    },
    {
        icon: TrendingUp,
        title: "Get More Done with Revenue Expansion",
        description: "A partner program that pays you for your efforts. To keep growing sustainably, Aonflow offers a flexible revenue-sharing model and attractive incentives - the more you grow with us, the more you gain."
    }
];

export default function PartnerClientPage() {
    return (
        <div className="bg-background text-foreground">
            {/* Hero Section */}
            <section className="relative w-full bg-primary/10 py-20 md:py-28 lg:py-32 overflow-hidden">
                <BackgroundAnimation className="absolute inset-0 z-0 opacity-50" />
                <div className="container mx-auto px-4 md:px-6 z-10 relative">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <AnimateOnScroll>
                            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl font-headline">
                                Partner with <span className="text-primary">Aonflow</span>
                            </h1>
                            <p className="mt-4 text-lg text-muted-foreground">Discover New Possibilities</p>
                            <p className="mt-6 text-muted-foreground max-w-xl">
                                Join the Aonflow partner network and revolutionize the way businesses achieve seamless application and data integration. Partner with us and equip your customers with cutting-edge intuitive iPaaS solutions that simplify operations while accelerating growth.
                            </p>
                        </AnimateOnScroll>
                        <AnimateOnScroll delay={0.2} className="flex justify-center">
                           <Image
                                src="/partner/collaboration.png"
                                alt="Partner with Aonflow"
                                width={500}
                                height={400}
                                className="object-contain"
                                data-ai-hint="business collaboration"
                            />
                        </AnimateOnScroll>
                    </div>
                </div>
            </section>
            
            {/* Why AonFlow Section */}
            <section className="py-20 md:py-28">
                <div className="container mx-auto px-4 md:px-6">
                    <AnimateOnScroll className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="text-3xl font-bold font-headline">Why <span className="text-primary">AonFlow?</span></h2>
                        <p className="mt-4 text-muted-foreground">
                            Strong collaboration is what Aonflow stands for. We provide the advanced Integration Platform as a Service (iPaaS) to streamline application, data, and workflow connectivity for businesses. Becoming a partner gives you access to the latest technology, personalized support, and lucrative growth opportunities designed to help your client's business grow and scale.
                        </p>
                    </AnimateOnScroll>
                    <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {whyAonflow.map((item, index) => (
                            <AnimateOnScroll key={index} delay={index * 0.1}>
                                <Card className="text-center bg-transparent border-0 shadow-none">
                                    <CardHeader className="items-center">
                                        <div className="bg-primary/10 p-4 rounded-full mb-2">
                                            <item.icon className="h-10 w-10 text-primary" />
                                        </div>
                                        <CardTitle className="font-headline">{item.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-muted-foreground text-sm">{item.description}</p>
                                    </CardContent>
                                </Card>
                            </AnimateOnScroll>
                        ))}
                    </div>
                </div>
            </section>

            {/* Ready to Transform Businesses? Section */}
            <section className="py-20 md:py-28 bg-primary/5">
                <div className="container mx-auto px-4 md:px-6">
                    <AnimateOnScroll className="max-w-4xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold font-headline">Ready to Transform Businesses?</h2>
                            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
                                Sign up today and benefit from a partnership that drives growth, offers assistance and gives you the roadmap to sustainable success. Getting started is as simple as connecting to the Aonflow partner ecosystem to deliver frictionless integrations for business transformation.
                            </p>
                        </div>
                        <Card>
                            <CardContent className="pt-6">
                                <PartnerContactForm />
                            </CardContent>
                        </Card>
                    </AnimateOnScroll>
                </div>
            </section>

             {/* Final CTA */}
            <section className="py-20">
                <AnimateOnScroll className="container mx-auto px-4 md:px-6 text-center">
                    <h2 className="text-3xl font-bold font-headline mb-4">See Aonflow in action</h2>
                    <Button asChild>
                        <Link href="/contact">Connect Now</Link>
                    </Button>
                </AnimateOnScroll>
            </section>
        </div>
    );
}

    