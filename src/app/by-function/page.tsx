

'use client';

import Image from 'next/image';
import Link from 'next/link';
import { 
  HeartPulse, Users, Cog, Landmark, Megaphone, LineChart, ShoppingCart,
  Package, Building, Server, Briefcase
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { BackgroundAnimation } from "@/components/background-animation";
import { AnimateOnScroll } from "@/components/animate-on-scroll";
import { PlaceHolderImages } from '@/lib/placeholder-images';

const solutions = [
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
  { icon: Package, title: "Product", description: "Automate with pre-customized integrations to solve integration backlogs, freeing you to build your product.", href: "/product" },
  { icon: Building, title: "Supply Chain", description: "Integrate your supply chain end-to-end, automate vital business operations, and streamline complex processes.", href: "/supply-chain" },
  { icon: Server, title: "iPaaS for SaaS", description: "Enhance your productivity and gain speed and efficiency with a platform that is both powerful and user-friendly.", href: "/ipaas-for-saas" },
];

export default function ByFunctionPage() {

    const automationImage = PlaceHolderImages.find(img => img.id === 'solutions-automation');

  return (
    <div className="bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative w-full bg-primary/10 py-20 md:py-28 lg:py-32 overflow-hidden">
        <BackgroundAnimation className="absolute inset-0 z-0 opacity-50" />
        <AnimateOnScroll className="container mx-auto px-4 md:px-6 z-10 relative">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h1 className="text-4xl font-light tracking-tight font-headline sm:text-5xl md:text-6xl text-primary">
              Solutions
            </h1>
            <p className="max-w-2xl text-muted-foreground md:text-xl">
              Our iPaaS solutions for all your needs
            </p>
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

      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4 md:px-6 text-center">
            <AnimateOnScroll>
                <p className="text-primary font-semibold mb-2">We help connect</p>
                <h2 className="text-3xl font-bold font-headline mb-4">all the dots</h2>
                <p className="text-muted-foreground max-w-3xl mx-auto">We offer pre-customized kiosk solutions for all users across all functions to help realize business value and drive enhanced outcomes. Automate processes for improved results.</p>
            </AnimateOnScroll>
        </div>
      </section>
    
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
          <AnimateOnScroll className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold font-headline">Solutions by Function</h2>
            <p className="mt-4 text-muted-foreground">Aonflow iPaaS cloud-based solution allows businesses to integrate and automate workflows between various applications, systems, and data sources. With the increasing adoption of cloud-based applications and the need for real-time data, iPaaS has become a critical component for businesses across various industries and functions.</p>
          </AnimateOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <AnimateOnScroll key={index} className="h-full">
                <Card className="h-full flex flex-col items-start p-6 text-left hover:shadow-lg transition-shadow duration-300">
                  <div className="bg-primary/10 p-3 rounded-full mb-4">
                    <solution.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-bold text-xl mb-2 font-headline">{solution.title}</h3>
                  <p className="text-muted-foreground text-sm flex-grow mb-4">{solution.description}</p>
                  <Button variant="outline" asChild>
                      <Link href={solution.href}>Learn More</Link>
                  </Button>
                </Card>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

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
