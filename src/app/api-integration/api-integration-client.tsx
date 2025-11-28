
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { AnimateOnScroll } from '@/components/animate-on-scroll';
import { BackgroundAnimation } from '@/components/background-animation';
import { cn } from '@/lib/utils';
import { ArrowRightLeft, BarChart, Zap, GitBranch, Scale, BrainCircuit, Plug, Users } from 'lucide-react';

const revolutionFeatures = [
    {
        icon: ArrowRightLeft,
        title: "Seamless Connectivity",
        description: "Allows businesses to connect multiple applications and automate workflows, reducing manual effort, saving time, and increasing efficiency."
    },
    {
        icon: Users,
        title: "Enhanced Customer Experience",
        description: "Delivers seamless customer experience with personalized content, while easy app management ensures enhanced adaptability and scalability."
    },
    {
        icon: BarChart,
        title: "Deeper Data Insights",
        description: "Enables effective data collection and analysis. Consolidates data from multiple sources for deeper insights, and improved strategies."
    }
];

const functionTools = [
    {
        icon: Plug,
        title: "Pre-built Connectors",
        description: "Pre-built connectors in these tools facilitate easy connection to diverse APIs, expediting the entire integration process. Users can establish integrations swiftly, without complex coding or extensive development work, thus making the holistic integration experience faster, smoother, and more accessible."
    },
    {
        icon: GitBranch,
        title: "Mapping & Transformation",
        description: "Mapping and transformation capabilities in API integration tools allow users to format and transform data between APIs accurately. This ensures proper data structuring, enhancing communication and compatibility across different systems, and improving overall integration efficiency and effectiveness."
    },
    {
        icon: Zap,
        title: "Workflow Automation",
        description: "Workflow automation is a key feature of API integration tools, eliminating manual data transfers between systems. Automating workflows enables organizations to streamline processes, reduce errors, and ensure seamless data exchange, driving operational efficiency and facilitating successful integration outcomes."
    },
];

const aonflowSolutions = [
    {
        id: "api-integration-unlocking-efficiency",
        title: "Unlocking business efficiency and customer delight",
        description: "API integration has become a vital component of modern businesses, enabling them to streamline their workflows, improve data management, and enhance customer experience. With the help of API integration tools and solutions such as Aonflow's Cloud Integration, businesses can easily connect different systems, automate data flows, and gain deeper insights into their operations while improving processes.",
        imageUrl: "/api-integration/api-1.png",
        imageHint: "business efficiency chart"
    },
    {
        id: "api-integration-revolutionize-business",
        title: "Revolutionize your business with Aonflow's API integration solutions",
        description: "Aonflow’s API integration solutions provide pre-built connectors, mapping and transformation features, workflow automation, and real-time monitoring and management capabilities that simplify the integration process and improve operational efficiency. By leveraging the power of API integration, businesses can become more agile, efficient, and customer-focused, ultimately driving business growth and success.",
        imageUrl: "/api-integration/api-2.png",
        imageHint: "business transformation diagram"
    }
];

const innovationFeatures = [
    {
        icon: Zap,
        title: "Accelerated",
        description: "Pre-built connectors for mainstream applications reduce the time and effort for integration. Seamlessly connect systems, streamline workflows, and enhance operational efficiency. These connectors can reduce integration time by up to 80%, offering a quick and effective solution for businesses.",
    },
    {
        icon: Scale,
        title: "Scalable",
        description: "A robust microservices architecture enhances message processing scalability, efficiently handling a wide range of messages per second. From a few to tens of thousands, businesses can effortlessly handle varying workloads and scale message-processing capabilities to meet specific needs.",
    },
    {
        icon: BrainCircuit,
        title: "Transformative",
        description: "Low-code configuration enables businesses to seamlessly integrate APIs from different sources without custom coding. With a visual, drag-and-drop interface, businesses can create and configure integration workflows quickly. This approach reduces integration time, saves costs, and enhances operational efficiency.",
    }
];

const integrationTypes = [
    {
        id: "api-integration-standardization",
        title: "Standardization",
        description: "Businesses benefit from a reliable and efficient approach to creating custom API connectors. Standardized tools and processes streamline connector development, reducing time and resources for integration. Developers can easily create tailored connectors, ensuring seamless data flow between systems. Standardization also enhances reliability, minimizing errors and data loss risks.",
        imageUrl: "/api-integration/standardization.svg",
        imageHint: "standardization process"
    },
    {
        id: "api-integration-exposing",
        title: "Exposing API",
        description: "Businesses innovate by tailoring new products and digital services to their needs, combining APIs seamlessly. This approach reduces integration effort and time. It differentiates businesses, enhances customer experiences, improves satisfaction, and drives revenue growth. Leveraging existing APIs saves development time and costs, enabling focus on crucial tasks.",
        imageUrl: "/api-integration/exposing-api.svg",
        imageHint: "API exposure diagram"
    },
    {
        id: "api-integration-universal-connectors",
        title: "Universal connectors",
        description: "API integration connectors offer businesses a simple and efficient solution.Supporting standard protocols like REST, SOAP, or ODATA, they connect to any API.With customizable general-purpose connectors, businesses can tailor integration workflows to their needs. This saves time and resources, enabling a focus on critical tasks and boosting operational efficiency.",
        imageUrl: "/api-integration/universal-connector.svg",
        imageHint: "universal connectors"
    }
];


export default function ApiIntegrationClientPage() {

  return (
    <div className="bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative w-full bg-gradient-to-r from-primary/10 to-blue-500/10 py-20 md:py-28 lg:py-32 overflow-hidden">
        <BackgroundAnimation className="absolute inset-0 z-0 opacity-30" />
        <div className="container mx-auto px-4 md:px-6 z-10 relative">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <AnimateOnScroll>
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl font-headline text-foreground">
                    API Integration
                </h1>
                <p className="mt-6 text-lg text-muted-foreground max-w-xl">
                   Easily create various API mashups to develop novel products and services.
                </p>
                <div className="mt-8">
                    <Button asChild size="lg">
                        <Link href="/book-a-demo">Book a Demo</Link>
                    </Button>
                </div>
            </AnimateOnScroll>
            <AnimateOnScroll delay={0.2} className="flex justify-center">
                <Image
                    src="/api-integration/api-integration.svg"
                    alt="API Integration"
                    width={500}
                    height={400}
                    className="object-contain"
                    data-ai-hint="API integration diagram"
                />
            </AnimateOnScroll>
          </div>
        </div>
      </section>

       {/* Revolutionizing Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
            <AnimateOnScroll className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold font-headline">Leverage API integration to transform business operations</h2>
                <p className="mt-4 text-muted-foreground">
                    API integration has ushered in a transformative era for businesses, empowering them to operate with increased agility, efficiency, and a stronger customer focus. It has revolutionized the way organizations adapt, collaborate, and deliver value in today's dynamic marketplace.
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

      {/* The function of API Integration Section */}
      <section className="py-20 md:py-28 bg-primary/5">
        <div className="container mx-auto px-4 md:px-6">
            <AnimateOnScroll className="text-center max-w-3xl mx-auto mb-12">
                <h2 className="text-3xl font-bold font-headline">The Function of API Integration Tools</h2>
                 <p className="mt-4 text-muted-foreground">
                    API integration tools simplify connecting software applications, systems, or services, reducing manual effort and boosting efficiency. They automate data flows, enabling seamless API integration and empowering developers and IT teams to streamline operations and workflows effectively.
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
                            src="/api-integration/api-integration-fact.svg"
                            alt="Low-code platform UI"
                            width={400}
                            height={300}
                            className="object-contain"
                            data-ai-hint="low-code interface"
                        />
                    </AnimateOnScroll>
                    <AnimateOnScroll delay={0.2}>
                        <h2 className="text-3xl font-bold mb-4">Aonflow offers one of the best API-Integration solutions in the market.</h2>
                        <p className="text-lg opacity-90 mb-6">
                           Connect systems and automate processes in just a matter of minutes.
                        </p>
                        <Button variant="secondary" asChild>
                            <Link href="/book-a-demo">Book a Demo</Link>
                        </Button>
                    </AnimateOnScroll>
                </div>
            </div>
          </section>
      </div>

       {/* Aonflow's API Integration solution */}
       <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
            <AnimateOnScroll className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-3xl font-bold font-headline">Aonflow's API Integration Solution</h2>
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
            <AnimateOnScroll className="text-center max-w-3xl mx-auto mb-12">
                <h2 className="text-3xl font-bold font-headline">Innovation with low-code capabilities</h2>
            </AnimateOnScroll>
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                     {innovationFeatures.map((feature, index) => (
                        <AnimateOnScroll key={index} delay={0.2 + index * 0.1}>
                             <Card className="p-6 flex flex-col items-center text-center bg-background/50 backdrop-blur-sm">
                                <div className="text-primary mb-4">
                                    <feature.icon className="h-10 w-10" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold font-headline mb-1">{feature.title}</h3>
                                    <p className="text-muted-foreground text-sm">{feature.description}</p>
                                </div>
                            </Card>
                        </AnimateOnScroll>
                    ))}
                </div>
            </div>
        </div>
      </section>

      {/* Types of API Integration */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
            <AnimateOnScroll className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-3xl font-bold font-headline">Types of API Integration</h2>
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
                <h3 className="text-xl font-semibold mb-2">Ready to build your connected future?</h3>
                <Button asChild>
                    <Link href="/contact">Talk to an expert</Link>
                </Button>
            </AnimateOnScroll>
        </div>
      </section>
    </div>
  );
}

    