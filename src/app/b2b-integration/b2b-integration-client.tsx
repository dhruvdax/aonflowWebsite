
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { AnimateOnScroll } from '@/components/animate-on-scroll';
import { BackgroundAnimation } from '@/components/background-animation';
import { cn } from '@/lib/utils';
import { Zap, CheckSquare, BarChart, Eye, GitBranch } from 'lucide-react';
import {
  DataIcon,
  InnovationIcon,
  CloudApiIcon,
} from '@/components/by-function-icons';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const revolutionFeatures = [
    {
        icon: Zap,
        title: "Reduced Operational Expenses",
        description: "B2B integration tools help in automating order fulfillment, invoicing, and critical processes reducing overall operational expenses."
    },
    {
        icon: CheckSquare,
        title: "Improved Business Performance",
        description: "Businesses benefit from improved efficiency, faster delivery, and accurate service, enhancing business performance and customer experience."
    },
    {
        icon: BarChart,
        title: "Increased Productivity",
        description: "B2B integration optimizes operations by automating processes, reducing repetitive tasks and efforts, and improving productivity."
    }
];

const functionTools = [
    {
        icon: Zap,
        title: "Automated Processes",
        description: "By automating critical processes such as order fulfillment and invoicing, B2B integration tools streamline workflows, enhancing operational efficiency and reducing the risk of errors. These tools enable businesses to seamlessly integrate and coordinate various tasks, ensuring the smooth and accurate execution of key business operations."
    },
    {
        icon: Eye,
        title: "Enhanced Visibility",
        description: "With enhanced visibility, businesses gain real-time insights into inventory levels, order status, and potential bottlenecks. This visibility empowers informed decision-making, enabling businesses to optimize processes, proactively address challenges, and ensure the timely delivery of products or services, thus enhancing customer satisfaction."
    },
    {
        icon: GitBranch,
        title: "Customizable Integration",
        description: "With customizable integration processes, businesses can optimize their workflows to achieve maximum efficiency and effectiveness. These tailored solutions enable businesses to adapt their integration processes to meet their specific needs, ensuring seamless data exchange and streamlined operations that drive productivity and success."
    },
];

const aonflowSolutions = [
    {
        id: "b2b-integration-partner-management",
        title: "Empowering seamless data exchange and workflow optimization",
        description: "Our B2B integration solution provides businesses with a comprehensive platform to connect their APIs and business applications. By leveraging traditional B2B protocols and standards, this solution facilitates seamless data exchange across disparate systems. It empowers businesses to streamline their workflows, minimize manual errors, and enhance overall operational efficiency. With our B2B Integration solution, businesses can optimize their processes and achieve greater productivity.",
        imageUrl: "/b2b-integration/b2b-integration-1.png",
        imageHint: "data exchange workflow"
    },
    {
        id: "b2b-integration-any-to-any",
        title: "Tailored integration solutions for enhanced efficiency and security",
        description: "Flexibility offers a wide range of integration options, enabling businesses to tailor their integration processes to meet their specific needs. This customization capability ensures that businesses can optimize their workflows and achieve maximum efficiency. Enhanced visibility into supply chain operations enables businesses to track inventory, monitor orders, and improve decision-making, while robust security features protect sensitive information and minimize data breach risks.",
        imageUrl: "/b2b-integration/b2b-integration-2.png",
        imageHint: "secure data integration"
    }
];

const innovationTabs = [
    {
        value: "api-first",
        icon: CloudApiIcon,
        label: "API-First",
    },
    {
        value: "low-code",
        icon: DataIcon,
        label: "Low-Code",
    },
    {
        value: "optimized",
        icon: InnovationIcon,
        label: "Optimized",
    }
];

const apiFirstFeatures = [
    {
        title: "Seamless Integration Framework",
        description: "Our API-FIRST integration framework enables organizations to seamlessly share data between legacy and cloud systems, improving agility, eliminating silos, and streamlining integration processes. It empowers businesses to leverage the latest technologies for more efficient and cost-effective IT infrastructure.",
    },
    {
        title: "Flexible and Scalable APIs",
        description: "API-FIRST framework offers flexible and scalable integration with customizable APIs, allowing organizations to adapt to changing needs. Optimized data integration processes ensure maximum efficiency, empowering businesses to streamline operations and leverage data effectively for improved outcomes.",
    },
    {
        title: "Bridging Legacy and Cloud",
        description: "API-FIRST bridges legacy systems and cloud apps, offering benefits of both. It enhances agility, scalability, and cost-efficiency, enabling organizations to optimize their IT infrastructure. This valuable tool empowers businesses to leverage APIs for seamless integration and reap the advantages of hybrid environments.",
    }
];

const lowCodeFeatures = [
    {
        title: "Empower Business Users",
        description: "Our low-code approach empowers business users to take control of data integration. With an intuitive interface, non-technical users can create and manage integration processes, reducing reliance on IT professionals. This accelerates workflows, lowers costs, and promotes self-sufficiency in integration needs.",
    },
    {
        title: "Customizable Workflows",
        description: "Low-code configuration empowers business users to customize pre-built components and templates for flexible integration workflows. No extensive coding is needed, enabling quick adaptation to market changes and seizing new opportunities. This user-friendly approach ensures efficient and tailored data integration.",
    },
    {
        title: "Agile and Responsive",
        description: "User-empowered integration with intuitive interfaces and pre-built components accelerates workflows, reducing reliance on IT. This improves efficiency, quality, and agility in meeting customer needs, regulations, and market trends. Businesses gain control, adaptability, and responsiveness in their integration processes without heavy IT involvement.",
    }
];

const optimizedFeatures = [
    {
        title: "Speedy systems",
        description: "Our B2B integration tools and technologies help organizations achieve their integration goals faster and more efficiently. These tools can reduce the time and cost involved in the integration process, allowing organizations to quickly respond to changing market conditions and enhance business growth.",
    },
    {
        title: "Accelerated Project Completion",
        description: "Complete integration projects up to 10 times faster. Our pre-built components, templates, and workflows can be easily customized and integrated into existing IT systems, which saves time and reduces the risk of errors and rework, enabling organizations to complete their integration projects faster and with greater accuracy.",
    },
    {
        title: "Optimized Data Processes",
        description: "Optimize data integration processes. realize the benefits of investing in B2B integration solutions for improved operational efficiency, enhanced customer experience, and increased revenue. Achieve faster integration, stay agile, adapt to changing market conditions, and unlock new business opportunities.",
    }
];


const integrationTypes = [
    {
        id: "b2b-integration-hybrid",
        title: "Hybrid deployment",
        description: "Aonflow's hybrid integration platform facilitates interactive data exchange across databases, APIs, and applications in the cloud and on-premise. It enables seamless connectivity with partners, suppliers, and customers, regardless of location or IT systems used. With flexibility and advanced features, businesses can streamline complex integration workflows, enhance security, and improve operational efficiency while meeting regulatory requirements.",
        imageUrl: "/b2b-integration/b2b-1.svg",
        imageHint: "hybrid cloud"
    },
    {
        id: "b2b-integration-exposing-api",
        title: "Exposing API",
        description: "Our B2B integration solution simplifies API exposure and product creation for businesses. With easy management and analytics, businesses can quickly respond to market changes and improve customer experience. Gain valuable insights into API usage to optimize performance, identify revenue growth opportunities, and reduce costs. Gain a competitive edge by efficiently adapting operations and delivering innovative services to customers.",
        imageUrl: "/b2b-integration/b2b-2.svg",
        imageHint: "API exposure diagram"
    },
    {
        id: "b2b-integration-multiple-connectors",
        title: "Multiple connectors",
        description: "Our B2B integration solution offers purpose-built connectors to seamlessly connect IT systems with mainstream applications and communication protocols. These connectors minimize integration time, costs, and coding efforts, enabling businesses to easily integrate with ERP, CRM, and eCommerce platforms. Customizable and easy to configure, they adapt to changing needs and facilitate quick integration with new applications and protocols.",
        imageUrl: "/b2b-integration/multiple-connector.svg",
        imageHint: "multiple connectors"
    }
];


export default function B2BIntegrationClientPage() {
  return (
    <div className="bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative w-full bg-gradient-to-r from-primary/10 to-blue-500/10 py-20 md:py-28 lg:py-32 overflow-hidden">
        <BackgroundAnimation className="absolute inset-0 z-0 opacity-30" />
        <div className="container mx-auto px-4 md:px-6 z-10 relative">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <AnimateOnScroll>
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl font-headline text-foreground">
                    B2B Integration
                </h1>
                <p className="mt-6 text-lg text-muted-foreground max-w-xl">
                   A unified platform that links business applications and APIs using B2B protocols
                </p>
                <div className="mt-8">
                    <Button asChild size="lg">
                        <Link href="/book-a-demo">Book a demo</Link>
                    </Button>
                </div>
            </AnimateOnScroll>
            <AnimateOnScroll delay={0.2} className="flex justify-center">
                <Image
                    src="/b2b-integration/b2b-integration.svg"
                    alt="B2B Integration"
                    width={500}
                    height={400}
                    className="object-contain"
                    data-ai-hint="B2B network diagram"
                />
            </AnimateOnScroll>
          </div>
        </div>
      </section>

       {/* Revolutionizing Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
            <AnimateOnScroll className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold font-headline">B2B integration revolutionizing business application connectivity</h2>
                <p className="mt-4 text-muted-foreground">
                    B2B integration involves connecting disparate systems and applications, regardless of the technology or data formats they use. It enables companies to exchange information in a standardized, secure, and reliable manner, resulting in enhanced data accuracy, reduced processing times, and better visibility into supply chain operations.
                </p>
            </AnimateOnScroll>
             <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
                {revolutionFeatures.map((feature, index) => (
                    <AnimateOnScroll key={index} delay={index * 0.1}>
                        <Card className="p-6 h-full text-center flex flex-col items-center bg-transparent border-0 shadow-none">
                            <div className="text-primary bg-primary/10 p-4 rounded-full mb-4">
                                <feature.icon className="h-8 w-8" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold font-headline mb-2">{feature.title}</h3>
                                <p className="text-muted-foreground">{feature.description}</p>
                            </div>
                        </Card>
                    </AnimateOnScroll>
                ))}
            </div>
        </div>
      </section>

      {/* The function of B2B Integration Tools Section */}
      <section className="py-20 md:py-28 bg-primary/5">
        <div className="container mx-auto px-4 md:px-6">
            <AnimateOnScroll className="text-center max-w-3xl mx-auto mb-12">
                <h2 className="text-3xl font-bold font-headline">The Function of B2B Integration Tools</h2>
                 <p className="mt-4 text-muted-foreground">
                    B2B integration tools act as a bridge, facilitating smooth and secure data exchange between diverse systems and applications. By leveraging conventional B2B protocols and standards such as XML or EDI, businesses can establish reliable connections, ensuring seamless communication and collaboration across their ecosystem.
                </p>
            </AnimateOnScroll>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                {functionTools.map((tool, index) => (
                    <AnimateOnScroll key={index} delay={index * 0.1}>
                         <Card className="p-6 h-full flex flex-col items-center text-center bg-background/50 backdrop-blur-sm">
                            <div className="text-primary flex-shrink-0 mb-4">
                                <tool.icon className="h-10 w-10" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold font-headline mb-2">{tool.title}</h3>
                                <p className="text-muted-foreground">{tool.description}</p>
                            </div>
                        </Card>
                    </AnimateOnScroll>
                ))}
            </div>
        </div>
      </section>

      {/* Blue Banner Section */}
      <div className="container mx-auto px-4 md:px-6 my-20">
          <section className="py-20 md:py-28 bg-primary-gradient text-white rounded-3xl">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <AnimateOnScroll className="flex justify-center">
                        <Image
                            src="/b2b-integration/b2b-integration-fact.svg"
                            alt="Low-code platform UI"
                            width={400}
                            height={300}
                            className="object-contain"
                            data-ai-hint="low-code interface"
                        />
                    </AnimateOnScroll>
                    <AnimateOnScroll delay={0.2}>
                        <h2 className="text-3xl font-bold mb-4">Aonflow is one of the best B2B Integration solutions currently available in the market.</h2>
                        <p className="text-lg opacity-90 mb-6">
                           You can kick-start by integrating your first-ever workflow in just a matter of minutes.
                        </p>
                        <Button variant="secondary" asChild>
                            <Link href="/book-a-demo">Book a Demo</Link>
                        </Button>
                    </AnimateOnScroll>
                </div>
            </div>
          </section>
      </div>

       {/* Aonflow's B2B Integration solution */}
       <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
            <AnimateOnScroll className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-3xl font-bold font-headline">Aonflow's B2B Integration Solution</h2>
            </AnimateOnScroll>
            <div className="space-y-16">
                 {aonflowSolutions.map((solution, index) => {
                    return (
                        <AnimateOnScroll key={index} delay={index * 0.1}>
                            <div className={cn("grid md:grid-cols-2 gap-12 items-center", index % 2 !== 0 && "md:grid-flow-row-dense")}>
                                <div className={cn("flex justify-center", index % 2 !== 0 && "md:col-start-2")}>
                                    <Image
                                        src={solution.imageUrl}
                                        alt={solution.title}
                                        width={450}
                                        height={350}
                                        className="object-contain"
                                        data-ai-hint={solution.imageHint}
                                    />
                                </div>
                                <div className={cn(index % 2 !== 0 && "md:col-start-1")}>
                                    <h3 className="text-2xl font-bold font-headline mb-4">{solution.title}</h3>
                                    <p className="text-lg text-muted-foreground">{solution.description}</p>
                                </div>
                            </div>
                        </AnimateOnScroll>
                    )
                 })}
            </div>
        </div>
      </section>

      {/* Innovation Section */}
      <section className="py-20 md:py-28 bg-primary/5">
        <div className="container mx-auto px-4 md:px-6">
            <AnimateOnScroll delay={0.1}>
            <Tabs defaultValue="api-first" className="w-full">
                <TabsList className="grid w-full grid-cols-3 h-auto">
                    {innovationTabs.map(tab => (
                        <TabsTrigger key={tab.value} value={tab.value} className="flex flex-col sm:flex-row items-center gap-2 h-auto py-3">
                            <tab.icon className="h-6 w-6" />
                            <span>{tab.label}</span>
                        </TabsTrigger>
                    ))}
                </TabsList>
                <TabsContent value="api-first">
                    <Card className="p-6 mt-4 bg-background/50">
                         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {apiFirstFeatures.map((feature, index) => (
                                <div key={index}>
                                    <h4 className="text-lg font-bold font-headline mb-1">{feature.title}</h4>
                                    <p className="text-muted-foreground text-sm">{feature.description}</p>
                                </div>
                            ))}
                        </div>
                    </Card>
                </TabsContent>
                <TabsContent value="low-code">
                     <Card className="p-6 mt-4 bg-background/50">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {lowCodeFeatures.map((feature, index) => (
                                <div key={index}>
                                    <h4 className="text-lg font-bold font-headline mb-1">{feature.title}</h4>
                                    <p className="text-muted-foreground text-sm">{feature.description}</p>
                                </div>
                            ))}
                        </div>
                     </Card>
                </TabsContent>
                <TabsContent value="optimized">
                     <Card className="p-6 mt-4 bg-background/50">
                         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {optimizedFeatures.map((feature, index) => (
                                <div key={index}>
                                    <h4 className="text-lg font-bold font-headline mb-1">{feature.title}</h4>
                                    <p className="text-muted-foreground text-sm">{feature.description}</p>
                                </div>
                            ))}
                        </div>
                     </Card>
                </TabsContent>
            </Tabs>
            </AnimateOnScroll>
        </div>
      </section>

      {/* Types of B2B Integration */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
            <AnimateOnScroll className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-3xl font-bold font-headline">Types of B2B Integration</h2>
            </AnimateOnScroll>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                 {integrationTypes.map((type, index) => {
                    return (
                        <AnimateOnScroll key={index} delay={index * 0.1} className="text-center">
                            <div className="flex justify-center mb-6 h-[200px]">
                                <Image
                                    src={type.imageUrl}
                                    alt={type.title}
                                    width={300}
                                    height={200}
                                    className="object-contain"
                                    data-ai-hint={type.imageHint}
                                />
                            </div>
                            <h3 className="text-2xl font-bold font-headline mb-4">{type.title}</h3>
                            <p className="text-muted-foreground">{type.description}</p>
                        </AnimateOnScroll>
                    )
                 })}
            </div>

            <AnimateOnScroll className="text-center mt-20">
                <h3 className="text-xl font-semibold mb-2">Ready to strengthen your business network?</h3>
                <Button asChild>
                    <Link href="/contact">Talk to an expert</Link>
                </Button>
            </AnimateOnScroll>
        </div>
      </section>
    </div>
  );
}

    