
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { AnimateOnScroll } from '@/components/animate-on-scroll';
import { BackgroundAnimation } from '@/components/background-animation';
import { cn } from '@/lib/utils';
import { Database, ShieldCheck, CheckSquare, GitBranch, ArrowRightLeft, Users, Repeat } from 'lucide-react';
import {
  DataIcon,
  InnovationIcon,
  ReliabilityIcon,
} from '@/components/by-function-icons';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const revolutionFeatures = [
    {
        icon: ShieldCheck,
        title: "Enhanced data quality",
        description: "Ensures accuracy, completeness, and reliability, empowering informed decisions and driving improved business outcomes."
    },
    {
        icon: Repeat,
        title: "Reduced redundancies",
        description: "Streamline operations, optimize resources, and boost efficiency and productivity for enhanced organizational performance."
    },
    {
        icon: CheckSquare,
        title: "Eliminated data inconsistencies",
        description: "Promote coherence, reliability, and seamless integration, enabling agile adaptation to changing market dynamics."
    }
];

const functionTools = [
    {
        icon: DataIcon,
        title: "Data validation",
        description: "Data migration tools provide essential features such as data validation, error handling, and data mapping to ensure accurate and secure transfer of data. By minimizing the risk of data loss or corruption, these tools enhance the overall integrity and reliability of the transferred data, ensuring its accuracy and consistency."
    },
    {
        icon: ArrowRightLeft,
        title: "Streamlined operations",
        description: "Data migration tools empower businesses to streamline operations, optimizing efficiency and resource allocation. Through seamless data integration, these tools improve overall data quality and consistency across various systems and applications. By leveraging such tools, organizations can achieve enhanced data management, driving better decision-making and business outcomes."
    },
    {
        icon: GitBranch,
        title: "Time and resource savings",
        description: "Data migration tools offer businesses time and resource savings by automating the transfer process. With a robust framework for secure and efficient data migration, these tools enable organizations to adapt to evolving data requirements and effectively manage their valuable information assets, enhancing operational agility and decision-making capabilities."
    }
];

const aonflowSolutions = [
    {
        id: "data-migration-platform",
        title: "Simplify data migration with Aonflow",
        description: "Aonflow's data migration solution simplifies the process of transferring data between systems, databases, and applications for businesses. Our user-friendly and intuitive solution removes the technical complexities, allowing businesses to focus on core operations. With features like data validation, error handling, and data mapping, our solution ensures accurate and consistent data throughout the entire migration process.",
        imageUrl: "/data-migration/data-migration-1.png",
        imageHint: "data migration dashboard"
    },
    {
        id: "data-migration-strategy",
        title: "Elevate data migration efficiency with Aonflow",
        description: "Aonflow's data migration solution offers a user-friendly interface, empowering users to easily map data fields and transfer data efficiently. Our solution enhances data quality and reduces the risk of data loss or corruption. By leveraging our solution, businesses can achieve their data migration goals in a quick and cost-effective manner. Streamline your data migration process with Aonflow and elevate your data management capabilities.",
        imageUrl: "/data-migration/data-migration-2.png",
        imageHint: "cloud migration process"
    }
];

const innovationTabs = [
    {
        value: "extensive",
        icon: Database,
        label: "Extensive",
    },
    {
        value: "efficient",
        icon: Users,
        label: "Efficient",
    },
    {
        value: "advanced",
        icon: ShieldCheck,
        label: "Advanced",
    }
];

const extensiveFeatures = [
    {
        icon: ReliabilityIcon,
        title: "Extensive library of connectors",
        description: "With purpose-built connectors, effortlessly transfer data between systems, databases, and applications. Our wide range includes custom and versatile connectors for popular applications and standard protocol integration. Reduce time and costs, making data migration faster, easier, and more cost-effective for businesses.",
    },
    {
        icon: InnovationIcon,
        title: "Tailored data migration",
        description: "Tailored data migration tools optimize transfer for specific business applications, ensuring efficient and accurate data movement. Advanced features guarantee secure and precise transfers. Flexibility allows seamless integration across systems, regardless of location or format, using general-purpose connectors and standard protocols.",
    },
    {
        icon: DataIcon,
        title: "High-quality solutions",
        description: "High-quality, secure, and efficient data migration solutions. Connectors map and transfer data between systems, saving time and reducing inconsistencies. Customizable options ensure businesses achieve their migration goals with confidence, backed by a trusted partner who understands their business needs.",
    }
];

const efficientFeatures = [
    {
        icon: ReliabilityIcon,
        title: "Efficient architecture for increased scalability",
        description: "Our data migration tools boost scalability with data processing solutions to handle high data volumes with ease. Our microservices-based architecture has the ability to scale dynamically, based on business needs. It is built on the latest cloud technologies, allowing for scalable, reliable, and secure data processing solutions.",
    },
    {
        icon: InnovationIcon,
        title: "Adaptable data processing",
        description: "Businesses can effortlessly adapt data processing capabilities to changing demand, ensuring stable performance. Our low-latency solutions process data at an average speed of 10 milliseconds, enabling real-time access and analysis for quick, informed decision-making based on up-to-date insights.",
    },
    {
        icon: DataIcon,
        title: "High-performance data handling",
        description: "Our microservices-based architecture ensures high-performance, secure data handling for businesses. Whether processing a single message or thousands of messages, our solutions deliver reliable results. Real-time data processing empowers businesses with accurate insights, facilitating informed decisions.",
    }
];

const advancedFeatures = [
    {
        icon: ReliabilityIcon,
        title: "Advanced Security",
        description: "Our data migration solutions ensure maximum security. Our sophisticated monitoring and logging processes ensure that no data is lost during the migration process. Our secure servers ensure that our clients' data is protected by some of the most stringent data protection laws in the world.",
    },
    {
        icon: InnovationIcon,
        title: "Multiple Layers of Security",
        description: "Our solutions are designed with multiple layers of security, including firewalls, intrusion detection systems, and data encryption. This helps to prevent unauthorized access, data breaches, and other security threats that can compromise the integrity of the data.",
    },
    {
        icon: DataIcon,
        title: "Compliance",
        description: "We are fully compliant with the General Data Protection Regulation, which means that our data migration solutions provide high data security when connecting the cloud to on-premises systems. We have designed our data migration solutions to ensure maximum security.",
    }
];

const integrationTypes = [
    {
        id: "data-migration-omnipresent",
        title: "Omnipresent approach",
        description: "Our flexible solutions enable seamless connectivity across various storage, database, and application types, regardless of location. Whether it's cloud-based, on-premises, or hybrid systems, businesses can easily manage their data. This omnipresent approach fosters collaboration, efficiency, and informed decision-making, driving growth and success through real-time data access and enhanced connectivity.",
        imageUrl: "/data-migration/omni-present-1.svg",
        imageHint: "data explosion"
    },
    {
        id: "data-migration-etl",
        title: "Speedy Extract-Transform-Load (ETL) set-up",
        description: "Our solutions feature an easy-to-use interface, simplifying data transformation for businesses. With our graphic interface, businesses can map and transform data without complex coding. This enables quick adaptation to specific needs, streamlining processes for increased efficiency, informed decision-making, and improved performance and profitability.",
        imageUrl: "/data-migration/omni-present-2.svg",
        imageHint: "data drip"
    },
     {
        id: "data-migration-as-a-service",
        title: "As-A-Service mindset",
        description: "Our scalable solutions meet diverse data transfer needs, enabling businesses to focus on core operations. Powered by advanced cloud technologies, it provides seamless data access and collaboration. With automation and user-friendly interfaces, businesses drive growth through efficient data sharing and collaboration with stakeholders, suppliers, and customers.",
        imageUrl: "/data-migration/as-a-service.png",
        imageHint: "cloud service"
    }
];


export default function DataMigrationPage() {
  return (
    <div className="bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative w-full bg-gradient-to-r from-primary/10 to-blue-500/10 py-20 md:py-28 lg:py-32 overflow-hidden">
        <BackgroundAnimation className="absolute inset-0 z-0 opacity-30" />
        <div className="container mx-auto px-4 md:px-6 z-10 relative">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <AnimateOnScroll>
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl font-headline text-foreground">
                    Data Migration
                </h1>
                <p className="mt-6 text-lg text-muted-foreground max-w-xl">
                   Migrate data between systems without extensive custom coding, while keeping costs low.
                </p>
                <div className="mt-8">
                    <Button asChild size="lg">
                        <Link href="/contact">Book a demo</Link>
                    </Button>
                </div>
            </AnimateOnScroll>
            <AnimateOnScroll delay={0.2} className="flex justify-center">
                <Image
                    src="/data-migration/data-migration.svg"
                    alt="Data Migration"
                    width={500}
                    height={400}
                    className="object-contain"
                    data-ai-hint="data migration diagram"
                />
            </AnimateOnScroll>
          </div>
        </div>
      </section>

       {/* Empowering Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
            <AnimateOnScroll className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold font-headline">Data migration empowering seamless digital transformation</h2>
                <p className="mt-4 text-muted-foreground">
                    Data migration revolutionizes business processes, streamlining operations and enabling better decisions. By seamlessly transferring data between systems, databases, and applications, businesses gain accurate, up-to-date information, enhancing efficiency, and empowering informed decision-making for sustained growth and success.
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

      {/* The function of Data Migration Tools Section */}
      <section className="py-20 md:py-28 bg-primary/5">
        <div className="container mx-auto px-4 md:px-6">
            <AnimateOnScroll className="text-center max-w-3xl mx-auto mb-12">
                <h2 className="text-3xl font-bold font-headline">The Function of Data Migration Tools</h2>
                <p className="mt-4 text-muted-foreground">
                    Data migration tools streamline the transfer of data across systems, databases, and applications, simplifying the process and reducing custom coding requirements. With automated solutions for data mapping and transfer, these tools ensure a smooth migration, preserving data continuity and promoting seamless integration between various platforms and environments.
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
                            src="/data-migration/data-migration-fact.svg"
                            alt="Low-code platform UI"
                            width={400}
                            height={300}
                            className="object-contain"
                            data-ai-hint="low-code interface"
                        />
                    </AnimateOnScroll>
                    <AnimateOnScroll delay={0.2}>
                        <h2 className="text-3xl font-bold mb-4">Aonflow is one of the best data migration solutions currently available.</h2>
                        <p className="text-lg opacity-90 mb-6">
                           You can kick-start by integrating your first-ever workflow in just a matter of minutes.
                        </p>
                        <Button variant="secondary" asChild>
                            <Link href="/contact">Book a Demo</Link>
                        </Button>
                    </AnimateOnScroll>
                </div>
            </div>
          </section>
      </div>

       {/* Aonflow's Data Migration solution */}
       <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
            <AnimateOnScroll className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-3xl font-bold font-headline">Aonflow's Data Migration Solution</h2>
            </AnimateOnScroll>
            <div className="space-y-16">
                 {aonflowSolutions.map((solution, index) => (
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
                 ))}
            </div>
        </div>
      </section>

      {/* Innovation Section */}
      <section className="py-20 md:py-28 bg-primary/5">
        <div className="container mx-auto px-4 md:px-6">
            <AnimateOnScroll delay={0.1}>
                <Tabs defaultValue="extensive" className="w-full">
                    <TabsList className="grid w-full grid-cols-3 h-auto">
                        {innovationTabs.map(tab => (
                            <TabsTrigger key={tab.value} value={tab.value} className="flex flex-col sm:flex-row items-center gap-2 h-auto py-3">
                                <tab.icon className="h-6 w-6" />
                                <span>{tab.label}</span>
                            </TabsTrigger>
                        ))}
                    </TabsList>
                    <TabsContent value="extensive">
                        <Card className="p-6 mt-4 bg-background/50">
                            <h3 className="text-2xl font-bold text-center mb-6">Our extensive library of connectors</h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                {extensiveFeatures.map((feature, index) => (
                                    <div key={index} className="flex items-start gap-4">
                                        <div className="text-primary flex-shrink-0"><feature.icon className="h-8 w-8" /></div>
                                        <div>
                                            <h4 className="text-lg font-bold font-headline mb-1">{feature.title}</h4>
                                            <p className="text-muted-foreground text-sm">{feature.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </Card>
                    </TabsContent>
                    <TabsContent value="efficient">
                         <Card className="p-6 mt-4 bg-background/50">
                            <h3 className="text-2xl font-bold text-center mb-6">Efficient architecture for increased scalability</h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                {efficientFeatures.map((feature, index) => (
                                    <div key={index} className="flex items-start gap-4">
                                        <div className="text-primary flex-shrink-0"><feature.icon className="h-8 w-8" /></div>
                                        <div>
                                            <h4 className="text-lg font-bold font-headline mb-1">{feature.title}</h4>
                                            <p className="text-muted-foreground text-sm">{feature.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                         </Card>
                    </TabsContent>
                    <TabsContent value="advanced">
                         <Card className="p-6 mt-4 bg-background/50">
                            <h3 className="text-2xl font-bold text-center mb-6">Advanced Security</h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                {advancedFeatures.map((feature, index) => (
                                    <div key={index} className="flex items-start gap-4">
                                        <div className="text-primary flex-shrink-0"><feature.icon className="h-8 w-8" /></div>
                                        <div>
                                            <h4 className="text-lg font-bold font-headline mb-1">{feature.title}</h4>
                                            <p className="text-muted-foreground text-sm">{feature.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                         </Card>
                    </TabsContent>
                </Tabs>
                </AnimateOnScroll>
        </div>
      </section>

      {/* Types of Data Migration */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
            <AnimateOnScroll className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-3xl font-bold font-headline">Types of Data Migration</h2>
            </AnimateOnScroll>

            <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
                 {integrationTypes.map((type, index) => (
                    <AnimateOnScroll key={index} delay={index * 0.1} className="text-center">
                        <div className="flex justify-center mb-6 h-[150px]">
                            <Image
                                src={type.imageUrl}
                                alt={type.title}
                                width={400}
                                height={300}
                                className="object-contain rounded-lg"
                                data-ai-hint={type.imageHint}
                            />
                        </div>
                        <h3 className="text-2xl font-bold font-headline mb-4">{type.title}</h3>
                        <p className="text-muted-foreground">{type.description}</p>
                    </AnimateOnScroll>
                 ))}
            </div>

            <AnimateOnScroll className="text-center mt-20">
                <h3 className="text-xl font-semibold mb-2">Ready to start your data migration journey?</h3>
                <Button asChild>
                    <Link href="/contact">Talk to an expert</Link>
                </Button>
            </AnimateOnScroll>
        </div>
      </section>
    </div>
  );
}
