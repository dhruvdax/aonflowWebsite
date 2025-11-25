
import Image from "next/image";
import Link from "next/link";
import { 
    Users, 
    Handshake, 
    ShieldCheck, 
    Lightbulb, 
    ClipboardCheck,
    Quote,
    Linkedin
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { BackgroundAnimation } from "@/components/background-animation";
import { AnimateOnScroll } from "@/components/animate-on-scroll";
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'About Us - Aonflow',
    description: "Learn more about Aonflow, our mission and how our integration and automation solutions help businesses grow.",
    alternates: {
        canonical: 'https://www.aonflow.com/about-us',
    },
};

const values = [
    {
      icon: Users,
      title: "Customer-centric",
      description: "We are obsessed with our customers and work backwards to earn and keep their trust. We believe in providing a great customer experience.",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      "description": "We are always looking for new ways to simplify our process and technology. We believe in taking risks and learning from our mistakes.",
    },
    {
      icon: Handshake,
      title: "Collaboration",
      description: "We work together to achieve our common goals. We believe in being transparent and honest with each other.",
    },
    {
      icon: ClipboardCheck,
      title: "Accountability",
      description: "We take ownership of our actions and results. We believe in being responsible for our commitments.",
    },
    {
      icon: ShieldCheck,
      title: "Integrity",
      description: "We are honest and ethical in everything we do. We believe in doing the right thing, even when no one is watching.",
    },
];

const teamMembers = [
    { name: "Sanjeev Munjal", title: "Founder & Managing Partner", imageId: "team-sanjeev", linkedin: "https://www.linkedin.com/in/sanjeevmunjal/" },
    { name: "Manish Joshi", title: "Co-Founder & Managing Partner", imageId: "team-manish", linkedin: "https://www.linkedin.com/in/munish-sethi-b309212/" },
    { name: "Achal Singhal", title: "Product Head", imageId: "team-achal", linkedin: "https://www.linkedin.com/in/achalsinghal/" },
];

export default function AboutUsPage() {

    const visionImage = PlaceHolderImages.find(img => img.id === 'about-vision');
    const hiringImage = PlaceHolderImages.find(img => img.id === 'about-hiring');
    const ceoQuoteImage = PlaceHolderImages.find(img => img.id === 'team-prince');

    return (
        <div className="bg-background text-foreground">
            {/* Hero Section */}
            <section className="relative w-full bg-primary/10 py-20 md:py-28 lg:py-32 overflow-hidden">
                <BackgroundAnimation className="absolute inset-0 z-0 opacity-50" />
                <AnimateOnScroll className="container mx-auto px-4 md:px-6 z-10 relative">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <h1 className="text-4xl font-light tracking-tight font-headline sm:text-5xl md:text-6xl text-primary">
                        About Us
                    </h1>
                    <p className="max-w-2xl text-muted-foreground md:text-xl">
                        Connecting your business to the world
                    </p>
                </div>
                </AnimateOnScroll>
            </section>

            <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
                {/* We at Aonflow Section */}
                <AnimateOnScroll as="section" className="text-left">
                    <h2 className="text-3xl font-bold font-headline mb-4">We at <span className="text-primary">Aonflow</span></h2>
                    <p className="text-xl text-muted-foreground mb-8">
                        Offer the best-in-class seamless integration platform (iPaaS) to connect applications and automate dataflows for businesses and organizations of all sizes, including individuals, across all sectors.
                    </p>
                    <div className="grid md:grid-cols-3 gap-8 text-left">
                        <p className="text-muted-foreground">We help standardize application integration into a business or organization, making it simple to automate tedious and repetitive processes and share data across applications with ease.</p>
                        <p className="text-muted-foreground md:col-span-2">As a user, you get an experience that is comprehensive and intuitive yet seamless, engaging, fluid, informative, and modern. Gain the benefits of our action-oriented flows with our advanced low-code/no-code builder capabilities and pre-built connectors for enhanced user experience, enabling you to make an informed decision, and take timely action to scale and drive growth and success.</p>
                    </div>
                </AnimateOnScroll>
            </div>
                
            {/* Our Mission Section */}
            <section className="relative w-full bg-primary/5 py-24 overflow-hidden">
                <AnimateOnScroll className="relative z-10">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid md:grid-cols-12 gap-16 items-center">
                            <div className="md:col-span-7">
                                <h2 className="text-3xl font-bold font-headline mb-4">Our Mission</h2>
                                <p className="text-lg text-muted-foreground">
                                    Value-added seamless, cloud-based, multi-tenant integration and automation iPaaS landscape and solutions, with a low-code/no-code, seamless, and fluid set-up and integration of applications, and automation of data flow across departments, businesses, organizations, and sectors.
                                </p>
                            </div>
                            <div className="flex justify-center md:col-span-5">
                                <Image src="/about-us/our-mission.svg" alt="Our Mission" width={400} height={400} className="object-contain" data-ai-hint="mission target"/>
                            </div>
                        </div>
                    </div>
                </AnimateOnScroll>
            </section>

            <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
                {/* Our Values Section */}
                <AnimateOnScroll as="section" className="my-12 text-center">
                    <h2 className="text-3xl font-bold font-headline mb-12">Our Values</h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
                        {values.map((value, index) => (
                            <AnimateOnScroll key={value.title} delay={index * 0.1}>
                                <div className="flex flex-col items-center text-center">
                                    <div className="bg-primary/10 p-4 rounded-full mb-4">
                                        <value.icon className="h-8 w-8 text-primary" />
                                    </div>
                                    <h3 className="text-xl font-bold font-headline mb-2">{value.title}</h3>
                                    <p className="text-muted-foreground text-sm">{value.description}</p>
                                </div>
                            </AnimateOnScroll>
                        ))}
                    </div>
                </AnimateOnScroll>
            </div>

            {/* Our Vision Section */}
            <section className="relative w-full bg-primary/5 py-24 overflow-hidden">
                <BackgroundAnimation className="absolute inset-0 z-0 opacity-50" />
                <AnimateOnScroll className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid md:grid-cols-12 gap-16 items-center">
                         {visionImage && (
                            <div className="flex justify-center order-last md:order-first md:col-span-5">
                                <Image src={visionImage.imageUrl} alt="Our Vision" width={400} height={400} className="object-contain" data-ai-hint={visionImage.imageHint}/>
                            </div>
                        )}
                        <div className="md:col-span-7">
                            <h2 className="text-3xl font-bold font-headline mb-4">Our Vision</h2>
                            <p className="text-lg text-muted-foreground">
                                Be the go-to iPaaS platform for all users (across businesses and organizations), offering the best-in-class, seamless, easy, UI-focused dataflow creation, integration, and automation across a wide range of applications, enabling self-paced, self-serviceable execution of flows at the desired frequency, while tracking outcomes through contextualized reports.
                            </p>
                        </div>
                    </div>
                </AnimateOnScroll>
            </section>

            <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
                {/* Quote Section */}
                <AnimateOnScroll as="section" className="my-12 text-center max-w-4xl mx-auto">
                    <Card className="bg-primary/5 border-primary/20 p-12 relative">
                        <Quote className="absolute top-4 left-4 h-12 w-12 text-primary/20 rotate-180" />
                        <Quote className="absolute bottom-4 right-4 h-12 w-12 text-primary/20" />
                        <div className="flex flex-col items-center justify-center gap-4 mb-6">
                            {ceoQuoteImage && <Image src={ceoQuoteImage.imageUrl} alt="Prince Rangan" width={180} height={180} className="rounded-full" data-ai-hint="man portrait"/>}
                            <div className="text-center">
                                <h4 className="font-bold text-primary">Prince Rangan</h4>
                                <p className="text-muted-foreground">Marketing Head</p>
                                <Link href="https://www.linkedin.com/in/ranganprince/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary mt-2 inline-block">
                                    <Linkedin className="h-5 w-5" />
                                </Link>
                            </div>
                        </div>
                        <blockquote className="text-xl font-medium text-foreground italic">
                            Aonflow cuts friction out of cross-system work. Our pre built connectors remove manual stitching, and the interface keeps teams aligned without overhead. It fits the pace and constraints of business operations and delivers the clarity required for scale.
                        </blockquote>
                    </Card>
                </AnimateOnScroll>

                {/* Meet our team Section */}
                <AnimateOnScroll as="section" className="my-12 text-center">
                    <h2 className="text-3xl font-bold font-headline mb-12">Meet our team</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                        {teamMembers.map((member, index) => {
                            const image = PlaceHolderImages.find(img => img.id === member.imageId);
                            return (
                                <AnimateOnScroll key={member.name} delay={index * 0.1}>
                                    <div className="flex flex-col items-center">
                                        {image && <Image src={image.imageUrl} alt={member.name} width={200} height={200} className="rounded-full mb-4 object-cover w-40 h-40 grayscale" data-ai-hint="person portrait"/>}
                                        <h3 className="font-bold text-lg">{member.name}</h3>
                                        <p className="text-primary text-sm">{member.title}</p>
                                        <Link href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary mt-2">
                                            <Linkedin className="h-5 w-5" />
                                        </Link>
                                    </div>
                                </AnimateOnScroll>
                            );
                        })}
                    </div>
                </AnimateOnScroll>

                {/* Why choose us? Section */}
                 <AnimateOnScroll as="section" className="my-24 text-center max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold font-headline mb-4">Why choose us?</h2>
                    <div className="text-muted-foreground space-y-4">
                        <p>We are a team of experienced professionals who are passionate about helping businesses succeed. We have a proven track record of delivering high-quality products and services that meet the needs of our customers.</p>
                        <p>We are committed to providing our customers with the best possible experience. We offer a free trial of our platform, so you can see for yourself how easy it is to use. We also offer a variety of support options to help you get the most out of our platform.</p>
                        <p>We are constantly innovating and adding new features to our platform. We are dedicated to providing our customers with the most up-to-date technology and the best possible user experience.</p>
                    </div>
                </AnimateOnScroll>

                {/* We are hiring Section */}
                <AnimateOnScroll as="section" className="mb-16">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl font-bold font-headline mb-4">We are hiring!</h2>
                            <p className="text-lg text-muted-foreground mb-6">
                                We are looking for talented individuals to join our team. If you are passionate about technology and want to make a difference, we would love to hear from you.
                            </p>
                            <Button asChild>
                                <Link href="#">View Open Positions</Link>
                            </Button>
                        </div>
                        {hiringImage && (
                             <div className="flex justify-center">
                                <Image src='/about-us/hiring.svg' alt="We are hiring" width={400} height={300} className="object-contain" data-ai-hint={hiringImage.imageHint}/>
                            </div>
                        )}
                    </div>
                </AnimateOnScroll>
            </div>
        </div>
    );
}
