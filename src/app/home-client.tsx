
'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  Star,
  Zap,
  ShieldCheck,
  Webhook,
  Monitor,
  Workflow,
  Users,
  HeartHandshake,
  Puzzle
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { BackgroundAnimation } from '@/components/background-animation';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Autoplay from "embla-carousel-autoplay";
import React, { useState, useEffect, useRef } from 'react';
import { CountUpNumber } from '@/components/count-up-number';
import { AnimateOnScroll } from '@/components/animate-on-scroll';
import { AnimatedIcon } from '@/components/animated-icon';
import { PopupForm } from '@/components/popup-form';
import { cn } from '@/lib/utils';


const integrationCategories = [
  { name: 'Healthcare', description: 'Sync patient data securely across EMR, billing, and telehealth platforms.', href: "/healthcare" },
  { name: 'HR', description: 'Automate employee onboarding, payroll, and performance tracking between your HRIS and other tools.', href: "/hr" },
  { name: 'IT', description: 'Manage users, permissions, and security across your entire app ecosystem automatically.', href: "/it" },
  { name: 'Finance', description: 'Automate invoicing, payments, and reporting between QuickBooks, Stripe, and your CRM.', href: "/finance" },
  { name: 'Marketing', description: 'Align sales and marketing data by integrating your CRM, marketing automation, and ad platforms.', href: "/marketing" },
  { name: 'E-commerce', description: 'Sync orders, customers, and inventory between platforms like Shopify, WooCommerce, and your ERP.', href: "/e-commerce" },
  { name: 'Sales', description: 'Create a unified customer view by syncing contacts, deals, and activities across your sales tools.', href: "/sales" },
  { name: 'Customer Support', description: 'Create a unified customer view by syncing tickets, conversations, and feedback across support tools.', href: "/customer-support" },
  { name: 'Product', description: 'Integrate development tools, track issues, and manage releases with seamless data flow.', href: "/product" },
];

const platformWorkflows = [
  {
    icon: <Zap className="h-10 w-10 text-primary" />,
    title: "API Management",
    description: "Securely manage and scale your APIs with our enterprise-grade tools, ensuring reliable connections across your ecosystem."
  },
  {
    icon: <Users className="h-10 w-10 text-primary" />,
    title: "B2B Manager",
    description: "Streamline partner integrations, automate data exchange, and manage B2B workflows with ease."
  },
  {
    icon: <HeartHandshake className="h-10 w-10 text-primary" />,
    title: "AI Agents",
    description: "Deploy intelligent AI agents to automate complex tasks, handle data transformations, and optimize your workflows."
  }
]

const impactNumbers = [
  { number: 100, suffix: "+", label: "Connectors", isMillion: false, description: "Integrate without limits." },
  { number: 99.9, suffix: "%", decimals: 1, label: "Uptime", description: "Low code/No code infrastructure." },
  { number: 1000, suffix: "s", label: "of Workflows", description: "Orchestrate seamless integrations." },
  { number: 1, label: "Platform", description: "Multitenancy infrastructure for all your needs." }
]

const testimonials = [
  {
    quote:
      'Aonflow saved us weeks of manual syncs between QuickBooks and Business Central. It just works.',
    author: 'Finance Manager',
    company: 'Renewable Energy Firm',
    rating: 5,
    stats: "100k+",
    statDescription: "transactions per month"
  },
  {
    quote:
      'We built our Salesforce-WooCommerce integration in under an hour. That’s unheard of.',
    author: 'E-Commerce Director',
    company: 'Consumer Goods Company',
    rating: 5,
    stats: "99.8%",
    statDescription: "uptime achieved"
  },
  {
    quote:
      "The AI-powered mapping suggestions are a game-changer. What used to take hours of manual field mapping now takes minutes.",
    author: 'IT Director',
    company: 'SaaS Company',
    rating: 5,
    stats: "90%",
    statDescription: "less manual effort"
  },
  {
    quote:
      "Aonflow’s hybrid support allowed us to connect our legacy on-prem systems with our new cloud apps seamlessly. It’s the backbone of our digital transformation.",
    author: 'Head of IT',
    company: 'Manufacturing Corp',
    rating: 5,
    stats: "4x",
    statDescription: "faster integration"
  },
  {
    quote:
      "The monitoring and alerting features give us complete peace of mind. We know instantly if an integration has an issue, and the logs make debugging a breeze.",
    author: 'DevOps Engineer',
    company: 'Logistics Firm',
    rating: 5,
    stats: "100%",
    statDescription: "visibility"
  }
];

const featureStats = [
  {
    icon: Puzzle,
    title: "Pre-built Connectors Library",
    description: "Plug into Salesforce, Dynamics, HubSpot, QuickBooks, and more — no coding required.",
  },
  {
    icon: Zap,
    title: "Near Real-time Data Sync",
    description: "Changes reflect instantly across systems to ensure data consistency.",
  },
  {
    icon: Workflow,
    title: "Workflow Automation / Orchestration",
    description: "Chain multiple actions, run conditional logic, and build complex flows with ease.",
  },
  {
    icon: ShieldCheck,
    title: "Security & Governance",
    description: "Enterprise-grade encryption, role-based access, audit trails, and compliance-ready controls.",
  },
  {
    icon: Monitor,
    title: "Monitoring & Alerts",
    description: "Keep a pulse on your integrations with detailed dashboards, logs, error tracking, and notifications.",
  },
  {
    icon: Webhook,
    title: "Custom Connectors",
    description: "When needed, build your own APIs or custom connectors to support any niche or legacy systems.",
  },
]

const connectorLogos1 = [
  { name: "Salesforce", icon: "/salesforce.svg" },
  { name: "HubSpot", icon: "/hubspot.svg" },
  { name: "QuickBooks", icon: "/quickbooks.svg" },
  { name: "Microsoft Dynamics", icon: "/microsoft-dynamic.svg" },
  { name: "Shopify", icon: "/shopify.svg" },
  { name: "WooCommerce", icon: "/wo-commerce.svg" },
  { name: "Stripe", icon: "/strip.svg" },
  { name: "Google Sheets", icon: "/google-sheet.svg" },
  { name: "Slack", icon: "/slack.svg" },
];

const connectorLogos2 = [
  { name: "Business Central", icon: "/business-central.svg" },
  { name: "Microsoft Teams", icon: "/ms-teams.svg" },
  { name: "NetSuite", icon: "/netsuite.svg" },
  { name: "Twilio", icon: "/twilio.svg" },
  { name: "Zoho CRM", icon: "/zoho-crm.svg" },
];

export default function HomeClientPage() {
  const demoVideoImage = PlaceHolderImages.find((img) => img.id === 'why-datasync');
  const autoplay = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );
  // const [showPopup, setShowPopup] = useState(false);
  // const popupHasBeenShownRef = useRef(false);

  // useEffect(() => {
  //   if (popupHasBeenShownRef.current) return;

  //   const showThePopup = () => {
  //     if (popupHasBeenShownRef.current) return;
  //     setShowPopup(true);
  //     popupHasBeenShownRef.current = true;
  //     window.removeEventListener('scroll', handleScroll);
  //     if (timer) clearTimeout(timer);
  //   };

  //   const timer = setTimeout(showThePopup, 15000);

  //   const handleScroll = () => {
  //     const scrollPercentage = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
  //     if (scrollPercentage >= 0.6) {
  //       showThePopup();
  //     }
  //   };

  //   window.addEventListener('scroll', handleScroll);

  //   return () => {
  //     if (timer) clearTimeout(timer);
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);


  return (
    <div className="flex flex-col bg-background">
      {/* Hero Section */}
      <section className="relative w-full bg-primary/10 py-20 md:py-28 lg:py-32 overflow-hidden">
        <BackgroundAnimation className="absolute inset-0 z-0 opacity-50" />
        <div className="container mx-auto px-4 md:px-6 z-10 relative">
          <AnimateOnScroll>
            <div className="flex flex-col items-center justify-center space-y-6 text-center">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl font-headline text-foreground">
                Connect Everything. <span className="text-blue-custom">Integrate Anything.</span>
              </h1>
              <p className="max-w-3xl text-foreground md:text-xl">
                From CRM to ERP to eCommerce, Aonflow unifies your systems with Pre-built connectors. Drag-and-drop automation. Helping you cut costs, boost productivity, and grow without IT dependency
              </p>
              <div className="flex w-full max-w-sm flex-col gap-4 sm:max-w-none sm:flex-row sm:justify-center">
                <Button asChild size="lg" className="w-full sm:w-auto animate-pulse-outline group">
                  <Link href="https://app.aonflow.com/auth/signup">
                    Start for Free
                    <ArrowRight className="transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="w-full sm:w-auto">
                  <Link href="/book-a-demo">
                    Book a Demo
                  </Link>
                </Button>
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Star className="h-5 w-5 text-primary" />
                  <span>No credit card required</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="h-5 w-5 text-primary" />
                  <span>Start building in minutes</span>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
          {demoVideoImage && (
            <AnimateOnScroll className="relative mt-16 max-w-5xl mx-auto" delay={0.2}>
            <div className="relative">
              <div className="w-[90%] mx-auto">
                <div className="bg-neutral-800 rounded-t-xl p-2 sm:p-4 shadow-2xl">
                  <div className="bg-black rounded-lg overflow-hidden">
                    {/* Supademo iframe shown on lg and above */}
                    <div className="relative w-full p-0 aspect-[1.7715277777777778] hidden md:block">
                      <iframe
                        src="https://app.supademo.com/embed/cmhajtd0v17he6kifmsr1fuan?embed_v=2&utm_source=embed"
                        loading="lazy"
                        title="Aonflow"
                        allow="clipboard-write"
                        frameBorder="0"
                        webkitallowfullscreen="true"
                        mozallowfullscreen="true"
                        allowFullScreen
                        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                      />
                    </div>
                    {/* YouTube iframe shown on small and medium screens (tablet) */}
                    <div className="relative w-full aspect-[1.7715277777777778] p-0 block md:hidden">
                      <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/Q9d2JIq-G-A?si=miU41SDJvkqxky5m"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        frameBorder="0"
                        allowFullScreen
                        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative h-6 bg-gradient-to-b from-neutral-300 to-neutral-200 rounded-b-xl shadow-inner-top">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-2 bg-neutral-300 rounded-full"></div>
              </div>
            </div>
          </AnimateOnScroll>
          )}
        </div>
      </section>

      {/* Pre-built Connectors Section */}
      <section className="relative py-20 md:py-32 bg-background overflow-hidden">
        <BackgroundAnimation className="absolute inset-0 z-0 opacity-50" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <AnimateOnScroll className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold font-headline">Vast Library of Pre-built Connectors</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Connect to hundreds of applications, databases, and APIs with our continuously growing library of pre-built connectors.
            </p>
          </AnimateOnScroll>
          <div className="mt-16 relative overflow-hidden group py-8">
            <div className="scrolling-logos" aria-hidden="true">
              <div className="scrolling-logos-content">
                {[...connectorLogos1, ...connectorLogos1].map((logo, index) => (
                  <Card key={`${logo.name}-${index}`} className="logo-item bg-white/50 backdrop-blur-sm border-0">
                    <img src={logo.icon} alt={logo.name} className="h-[72px] w-auto" />
                  </Card>
                ))}
              </div>
            </div>
            <div className="scrolling-logos reverse mt-8" aria-hidden="true">
              <div className="scrolling-logos-content">
                {[...connectorLogos2, ...connectorLogos2].map((logo, index) => (
                  <Card key={`rev-${logo.name}-${index}`} className="logo-item bg-white/50 backdrop-blur-sm border-0">
                    <img src={logo.icon} alt={logo.name} className="h-[72px] w-auto" />
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <AnimateOnScroll className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold font-headline">Smarter Integrations. Stronger Performance.</h2>
            <p className="mt-4 text-lg text-muted-foreground">From CRM to ERP to eCommerce, Aonflow keeps your systems synchronized through an AI-powered, no-code iPaaS.</p>
          </AnimateOnScroll>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featureStats.map((feature, index) => (
              <AnimateOnScroll key={feature.title} delay={index * 0.1}>
                <div className="flex flex-col items-start text-left h-full">
                  <AnimatedIcon className="text-blue-custom">
                    <feature.icon className="h-16 w-16" />
                  </AnimatedIcon>
                  <h3 className="text-xl font-bold font-headline mb-2 mt-4">{feature.title}</h3>
                  <p className="text-muted-foreground flex-1">{feature.description}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Go beyond point-to-point integration */}
      <section id="integrations" className="relative w-full py-12 md:py-24 lg:py-32 overflow-hidden bg-primary/5">
        <BackgroundAnimation className="absolute inset-0 z-0 opacity-50" />
        <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
          <AnimateOnScroll>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
              Beyond Integration. Into Orchestration.
            </h2>
            <p className="mt-4 max-w-3xl mx-auto text-muted-foreground md:text-lg">
              From connection to coordination — integration redefined. Aonflow provides the tools to connect your entire business.
            </p>
          </AnimateOnScroll>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {integrationCategories.map((category, index) => (
              <AnimateOnScroll key={category.name} delay={index * 0.05}>
                <Card className="text-left bg-background/50 backdrop-blur-sm hover:bg-card/70 transition-all duration-300 transform hover:-translate-y-1 h-full">
                  <CardHeader>
                    <CardTitle className="font-headline">{category.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{category.description}</p>
                    <Link href={category.href} className="font-semibold text-primary inline-flex items-center gap-2 group">
                      Learn more <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </CardContent>
                </Card>
              </AnimateOnScroll>
            ))}
          </div>
          <AnimateOnScroll className="mt-12 flex flex-col sm:flex-row justify-center items-center gap-4">
            <Button size="lg" asChild className="w-full sm:w-auto"><Link href="/solutions">Explore Solutions</Link></Button>
            <Button size="lg" variant="outline" asChild className="w-full sm:w-auto"><Link href="/documentation">View Documentation</Link></Button>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Banner */}
      <section className="w-full my-12">
        <div className="container mx-auto px-4 md:px-6">
          <AnimateOnScroll>
            <div className="bg-primary text-primary-foreground py-24 rounded-[50px] text-center relative overflow-hidden">
              <BackgroundAnimation className="absolute inset-0 z-0 opacity-20" />
              <div className="relative z-10 px-4">
                <h2 className="text-3xl font-bold">Integration that thinks ahead.</h2>
                <p className="mt-2 text-lg opacity-80 max-w-2xl mx-auto">Experience a new era of intelligent integration — where AI, low-code design, and automation work together to keep your data moving in near real time.</p>
                <Button variant="secondary" size="lg" className="mt-6 animate-pulse-outline-black">Experience the Flow →</Button>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Our impact in numbers */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <BackgroundAnimation className="absolute inset-0 z-0 opacity-50" />
        <div className="container mx-auto px-4 md-px-6 text-center relative z-10">
          <AnimateOnScroll>
            <h2 className="text-3xl sm:text-4xl font-bold font-headline mt-2">Your Systems. Unified. Simplified. Amplified.</h2>
          </AnimateOnScroll>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {impactNumbers.map((item, index) => (
              <AnimateOnScroll key={item.label} delay={index * 0.1}>
                <div className="bg-background/50 backdrop-blur-sm rounded-lg p-6 border h-full">
                  <div className="text-4xl lg:text-5xl font-extrabold text-blue-custom">
                    <CountUpNumber end={item.number} suffix={item.suffix} decimals={item.decimals} />
                  </div>
                  <div className="mt-2 font-semibold text-foreground">{item.label}</div>
                  <div className="mt-1 text-sm text-muted-foreground">{item.description}</div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>


      {/* Testimonials */}
      <section id="testimonials" className="w-full bg-background py-12 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <AnimateOnScroll className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tighter text-foreground sm:text-4xl md:text-5xl font-headline">
              Trusted by the very best
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll className="w-full max-w-4xl mx-auto mt-12" delay={0.2}>
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              plugins={[autoplay.current]}
              onMouseEnter={autoplay.current.stop}
              onMouseLeave={autoplay.current.reset}
              className="relative"
            >
              <CarouselContent>
                {testimonials.map((testimonial, index) => (
                  <CarouselItem key={index} className="md:basis-1/2">
                    <div className="p-1 h-full">
                      <Card className="h-full flex flex-col">
                        <CardHeader>
                          <div className="flex items-center gap-0.5">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <Star key={i} className="h-5 w-5 text-primary fill-current" />
                            ))}
                          </div>
                        </CardHeader>
                        <CardContent className="flex-1 flex flex-col justify-between pt-0">
                          <blockquote className="text-lg font-medium text-foreground">
                            “{testimonial.quote}”
                          </blockquote>
                          <div className="mt-6 flex gap-8 items-end">
                            <div className="text-left">
                              <p className="font-semibold">{testimonial.author}</p>
                              <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                            </div>
                            <div className="text-left border-l pl-8">
                              <p className="text-4xl font-bold text-primary">{testimonial.stats}</p>
                              <p className="text-sm text-muted-foreground">{testimonial.statDescription}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
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

      {/* Final CTA */}
      <section className="w-full pb-16 md:pb-20">
        <div className="container mx-auto px-4 md:px-6">
          <AnimateOnScroll>
            <div className="bg-primary text-primary-foreground py-16 md:py-24 rounded-[50px] text-center relative overflow-hidden">
              <BackgroundAnimation className="absolute inset-0 z-0 opacity-50" />
              <div className="relative z-10 px-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Give Aonflow a Spin
                </h2>
                <p className="mt-4 max-w-xl mx-auto text-lg text-primary-foreground/80">
                  From Manual to Magical — Powered by AI Automation.
                </p>
                <div className="mt-6">
                  <Button size="lg" variant="secondary" asChild className="animate-pulse-outline-black">
                    <Link href="https://app.aonflow.com/auth/signup">Build Your First Flow – Free</Link>
                  </Button>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* <PopupForm open={showPopup} onOpenChange={setShowPopup} /> */}
    </div>
  );
}
