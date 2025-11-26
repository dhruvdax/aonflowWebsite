
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { 
  HeartPulse, Users, Cog, Landmark, Megaphone, LineChart, ShoppingCart,
  Package, Building, Server, Briefcase, BrainCircuit, Cloud, Database,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BackgroundAnimation } from "@/components/background-animation";
import { AnimateOnScroll } from "@/components/animate-on-scroll";
import { PlaceHolderImages } from '@/lib/placeholder-images';
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Logo } from '@/components/logo';
import Autoplay from "embla-carousel-autoplay";

const solutionsByFunction = [
  { icon: HeartPulse, title: "Healthcare", description: "Seamlessly integrate patient data compliant with L7 V2 ADT hl1 and transform healthcare delivery for precise care.", href: "/healthcare" },
  { icon: Users, title: "Human Resource", description: "Transform all HR functions with automation. Increase accuracy and minimize disruption with automated tasks.", href: "/hr" },
  { icon: Cog, title: "Information Technology", description: "Expedite ticket escalation response speed and resolution with incident handling automation.", href: "/it" },
  { icon: Landmark, title: "Finance", description: "Automate realization of revenue with full transparency for credible reporting and forecasting.", href: "/finance" },
  { icon: Megaphone, title: "Marketing", description: "Automate marketing funnels to elevate outreach across stages with intelligent features.", href: "/marketing" },
  { icon: LineChart, title: "Marketing Operations", description: "Automate and streamline marketing processes such as lead scoring and data insights to improve ROI.", href: "/marketing-operations" },
  { icon: Briefcase, title: "Sales", description: "Automate sales processes across distribution channels and sales pipeline for optimized outcomes.", href: "/sales" },
  { icon: LineChart, title: "Sales Operations", description: "Automate complex selling operations so your team can shift focus to more productive, sales-driving tasks.", href: "/sales-operations" },
  { icon: ShoppingCart, title: "E-commerce", description: "Automate eCommerce operations with real-time inventory visibility for enhanced growth and scale.", href: "/e-commerce" },
  { icon: HeartPulse, title: "Customer Support", description: "Create a single, unified platform for your business applications to deliver an unparalleled customer experience.", href: "/customer-support" },
  { icon: Package, title: "Product", description: "Automate with pre-customized integrations to solve integration backlogs, freeing you to build your product.", href: "/product-process" },
  { icon: Building, title: "Supply Chain", description: "Integrate your supply chain end-to-end, automate vital business operations, and streamline complex processes.", href: "/supply-chain" },
  { icon: BrainCircuit, title: "iPaaS for SaaS", description: "Enhance your productivity and gain speed and efficiency with a platform that is both powerful and user-friendly.", href: "/ipaas-for-saas" },
];

const solutionsByUseCase = [
  { icon: Cloud, title: "Cloud Integration", description: "Empower your business: Get real-time data updates, enhanced connectivity, automation, and scalability.", href: "/cloud-integration" },
  { icon: Cog, title: "API Integration", description: "Connect apps, automate workflows, harness data insights, deliver seamless experiences, and scale effortlessly.", href: "/api-integration" },
  { icon: Database, title: "Data Migration", description: "Streamline operations, enhance data quality, stay competitive, and drive informed business decision-making.", href: "/data-migration" },
  { icon: Landmark, title: "B2B Integration", description: "Connect systems, automate processes, enhance accuracy, reduce costs, and improve customer satisfaction.", href: "/b2b-integration" },
];

const solutionsByApp = [
    { icon: () => <img src="/salesforce.svg" alt="Salesforce" className="h-8 w-8" />, title: "Salesforce", description: "Turn Salesforce into a robust customer relationship management (CRM) platform that operates smoothly with other important software as a service (SaaS) and enterprise resource planning (ERP) systems in real-time integration scenarios.", href: "/salesforce" },
    { icon: () => <img src="/microsoft-dynamic.svg" alt="Dynamics 365" className="h-8 w-8" />, title: "Microsoft Dynamic 365", description: "Enhance customer satisfaction and expand your business by connecting Microsoft Dynamics 365 with Aonflow integration and automation solutions that allow businesses to streamline processes and make better-informed decisions.", href: "/dynamics-365" },
    { icon: () => <img src="/google-sheet.svg" alt="Google Sheets" className="h-8 w-8" />, title: "Google Sheets", description: "With just a few clicks, seamlessly incorporate Google Sheets into any workflow and reduce time and resource consumption without needing to code anything, using our visual integration solution.", href: "/google-sheets" },
    { icon: () => <img src="/twilio.svg" alt="Twilio" className="h-8 w-8" />, title: "Twilio", description: "Our integration solution makes it easy to integrate and automate SMS and voice communication features, allowing you to reach customers through their preferred channels and improve engagement.", href: "/twilio" },
    { icon: () => <img src="/netsuite.svg" alt="Netsuite" className="h-8 w-8" />, title: "Netsuite", description: "Our integration solution provides real-time data synchronization between Netsuite and other applications, allowing you to access accurate information and make informed decisions faster.", href: "/netsuite" },
    { icon: () => <img src="/wo-commerce.svg" alt="WooCommerce" className="h-8 w-8" />, title: "WooCommerce", description: "Maximise efficiency and effortlessly connect your online store with various cloud-based applications and automate processes.", href: "/woocommerce" },
    { icon: () => <img src="/shopify.svg" alt="Shopify" className="h-8 w-8" />, title: "Shopify", description: "Simplify the management of your Shopify store and enhance your productivity with real-time data synchronization to avoid duplicate data entry and improve the accuracy of your business information.", href: "/shopify" },
    { icon: () => <img src="/hubspot.svg" alt="HubSpot" className="h-8 w-8" />, title: "HubSpot", description: "Reap the complete advantages of HubSpot and boost your marketing, sales, and service activities with Aonflow and gain valuable insights to optimize your business processes.", href: "/hubspot" },
    { icon: () => <img src="/zoho-crm.svg" alt="Zoho CRM" className="h-8 w-8" />, title: "Zoho CRM", description: "Improve your sales process effectiveness by integrating Zoho CRM with other cloud-based applications and systems for seamless data exchange, real-time data updates, and process automation.", href: "/zoho-crm" },
    { icon: () => <img src="/strip.svg" alt="Stripe" className="h-8 w-8" />, title: "Stripe", description: "Transform the way you handle payments with seamless integration between Stripe and other cloud-based applications, allowing you to automate payment workflows and improve accuracy.", href: "/stripe" },
    { icon: () => <img src="/slack.svg" alt="Slack" className="h-8 w-8" />, title: "Slack", description: "Collaborate effectively using a single unified platform, to improve communication, and streamline discussions to work better.", href: "/slack" },
    { icon: () => <img src="/ms-teams.svg" alt="Microsoft Teams" className="h-8 w-8" />, title: "Microsoft Teams", description: "Streamline your team's communication, reduce manual tasks and increase productivity by providing a seamless workflow with our integrated platform, freeing up time to focus on high-value work.", href: "/microsoft-teams" },
    { icon: () => <img src="/business-central.svg" alt="MS Dynamics Business Central" className="h-8 w-8" />, title: "MS Dynamics Business Central", description: "Transform your business operations by leveraging the power of automated workflows of Business Central integration, allowing your processes and data to sync and enhancing your productivity.", href: "/microsoft-dynamics-business-central" },
    { icon: () => <img src="/quickbooks.svg" alt="QuickBooks Online" className="h-8 w-8" />, title: "QuickBooks Online", description: "Maximize financial efficiency effortlessly with QuickBooks Online integration for automated financial data sync, gain real-time insights for informed decision-making, and elevate your business with precision and ease.", href: "/quickbooks-online" },
];

export default function SolutionsClientPage() {
  const automationImage = PlaceHolderImages.find(img => img.id === 'solutions-automation');

  const tabs = [
    { value: "function", label: "Explore by Function", data: solutionsByFunction },
    { value: "usecase",  label: "Explore by Use Case", data: solutionsByUseCase },
    { value: "app",      label: "Explore by App",      data: solutionsByApp },
  ];

  const [activeTab, setActiveTab] = useState(tabs[0].value);
  const [isTabCarouselPaused, setIsTabCarouselPaused] = useState(false);

  useEffect(() => {
    if (isTabCarouselPaused) return;
    const tabRotationInterval = setInterval(() => {
      setActiveTab(prevTab => {
        const currentIndex = tabs.findIndex(tab => tab.value === prevTab);
        const nextIndex = (currentIndex + 1) % tabs.length;
        return tabs[nextIndex].value;
      });
    }, 5000);
    return () => clearInterval(tabRotationInterval);
  }, [isTabCarouselPaused, tabs]);

  return (
    <div className="bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative w-full bg-primary/10 py-20 md:py-28 lg:py-32 overflow-hidden">
        <BackgroundAnimation className="absolute inset-0 z-0 opacity-50" />
        <AnimateOnScroll className="container mx-auto px-4 md:px-6 z-10 relative">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h1 className="text-4xl font-light tracking-tight font-headline sm:text-5xl md:text-6xl text-primary">Solutions</h1>
            <p className="max-w-2xl text-muted-foreground md:text-xl">Our iPaaS solutions for all your needs</p>
          </div>
        </AnimateOnScroll>
      </section>

      {/* Automation solutions section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimateOnScroll>
              {automationImage && (
                <Image 
                  src={automationImage.imageUrl}
                  alt="Automation solutions"
                  width={600}
                  height={400}
                  className="rounded-lg object-cover"
                />
              )}
            </AnimateOnScroll>
            <AnimateOnScroll delay={0.2}>
              <h2 className="text-3xl font-bold font-headline mb-4">Automation solutions for you and your teams</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Design using our flexible iPaaS platform as per your unique business needs and goals.
              </p>
              <Button asChild>
                <Link href="/contact">Book a Demo</Link>
              </Button>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* All the dots section */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <AnimateOnScroll>
            <p className="text-primary font-semibold mb-2">We help connect</p>
            <h2 className="text-3xl font-bold font-headline mb-4">all the dots</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              We offer pre-customized kiosk solutions for all users across all functions to help realize business value and drive enhanced outcomes. Automate processes for improved results.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Solutions Tabs Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6 py-3">
          <Tabs 
            value={activeTab}
            onValueChange={(value) => {
              setActiveTab(value);
              setIsTabCarouselPaused(true);
            }}
            className="w-full"
          >
            <AnimateOnScroll>
              <TabsList className="grid w-full grid-cols-1 sm:grid-cols-3 max-w-2xl mx-auto h-auto py-2 px-2">
                {tabs.map(tab => (
                  <TabsTrigger
                    key={tab.value}
                    value={tab.value}
                    className={cn(
                      "relative w-full py-3 text-lg",
                      activeTab === tab.value && !isTabCarouselPaused && "animate-tab-progress"
                    )}
                  >
                    {tab.label}
                  </TabsTrigger>
                ))}
              </TabsList>
            </AnimateOnScroll>

            {tabs.map((tab) => (
              <TabsContent value={tab.value} key={tab.value} className="mt-8">
                <AnimateOnScroll>
                  {tab.value === 'usecase' ? (
                    <p className="text-muted-foreground max-w-4xl mx-auto text-center mb-12">
                      One common use case for iPaaS is data integration. iPaaS can integrate data from multiple sources, providing businesses with a unified view of their data and enabling real-time data analysis. This can help businesses make informed decisions, improve productivity, and optimize their operations.
                    </p>
                  ) : tab.value === 'app' ? (
                    <p className="text-muted-foreground max-w-4xl mx-auto text-center mb-12">
                      Aonflow iPaaS solution enables businesses to integrate and automate workflows between various applications and systems. iPaaS has become increasingly popular as businesses adopt cloud-based applications and systems, and the need for real-time data integration and automation grows.
                    </p>
                  ) : (
                    <p className="text-muted-foreground max-w-4xl mx-auto text-center mb-12">
                      Aonflow iPaaS cloud-based solution allows businesses to integrate and automate workflows between various applications, systems, and data sources. With the increasing adoption of cloud-based applications and the need for real-time data, iPaaS has become a critical component for businesses across various industries and functions.
                    </p>
                  )}
                </AnimateOnScroll>

                <div
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                  onMouseEnter={() => setIsTabCarouselPaused(true)}
                  onMouseLeave={() => setIsTabCarouselPaused(false)}
                >
                  {tab.data.map((item, index) => (
                    <AnimateOnScroll key={index} className="h-full">
                      <Card className="h-full flex flex-col items-start p-6 text-left hover:shadow-lg transition-shadow duration-300">
                        <div className="bg-primary/10 p-3 rounded-full mb-4">
                          {/* icon */}
                          <item.icon />
                        </div>
                        <h3 className="font-bold text-xl mb-2 font-headline">{item.title}</h3>
                        <p className="text-muted-foreground text-sm flex-grow mb-4">{item.description}</p>
                        <Button variant="outline" asChild>
                          <Link href={item.href}>Learn More</Link>
                        </Button>
                      </Card>
                    </AnimateOnScroll>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* See Aonflow in action */}
      <section className="py-20 bg-[#FAFAFA]">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <div>
            <h2 className="text-3xl font-bold font-headline mb-4">See Aonflow in action</h2>
            <Button asChild size="lg">
              <Link href="/contact">Connect Now</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
